import type { QuizQuestion } from './quiz-data';

const quizData_biologi_2: Record<string, QuizQuestion[]> = {
  'biologi-2-1-1': [
    {
      question: 'Hvilke tre komponenter består en nukleotid i DNA av?',
      options: ['Fosfatgruppe, deoksyribose og nitrogenbase', 'Aminosyre, ribose og fosfatgruppe', 'Fosfatgruppe, glukose og nitrogenbase', 'Ribose, nitrogenbase og karboksylgruppe'],
      explanation: 'En DNA-nukleotid består av en fosfatgruppe, sukkeret deoksyribose og en nitrogenbase (A, T, G eller C). Ribose finnes i RNA.',
    },
    {
      question: 'Hvilke baser parer seg med hverandre i DNA?',
      options: ['A med T, og G med C', 'A med G, og T med C', 'A med C, og G med T', 'A med U, og G med C'],
      explanation: 'Komplementær baseparing: adenin parer med tymin (2 hydrogenbindinger), guanin parer med cytosin (3 hydrogenbindinger). U finnes i RNA.',
    },
    {
      question: 'Hvis 30 % av basene i et DNA-molekyl er adenin, hvor mange prosent er guanin?',
      options: ['20 %', '30 %', '40 %', '10 %'],
      explanation: 'Chargaffs regler: A = T og G = C. A + T = 60 %, så G + C = 40 %, fordelt likt gir G = 20 %.',
    },
    {
      question: 'Hva betyr det at DNA-replikasjon er semikonservativ?',
      options: ['Hvert nytt molekyl har én original og én ny tråd', 'Hele det originale molekylet bevares intakt', 'Gammel og ny DNA blandes tilfeldig i begge tråder', 'Begge tråder i et nytt molekyl er nysyntetiserte'],
      explanation: 'Semikonservativ betyr at hver dobbeltheliks beholder én av de opprinnelige trådene og får én ny tråd. Bevist av Meselson og Stahl (1958).',
    },
    {
      question: 'Hvilket enzym kobler sammen Okazaki-fragmentene på den hengende tråden?',
      options: ['DNA-ligase', 'DNA-polymerase III', 'Helikase', 'Primase'],
      explanation: 'DNA-ligase danner fosfodiesterbindinger mellom Okazaki-fragmentene. Helikase åpner heliksen, primase lager RNA-primere.',
    },
  ],
  'biologi-2-1-2': [
    {
      question: 'Hva er transkripsjon?',
      options: ['Kopiering av et gen fra DNA til en RNA-tråd', 'Oversettelse av mRNA til et protein', 'Kopiering av hele DNA-molekylet før celledeling', 'Sammenkobling av aminosyrer på et ribosom'],
      explanation: 'Transkripsjon er prosessen der RNA-polymerase lager et komplementært RNA-molekyl ut fra en DNA-tråd (maltråden).',
    },
    {
      question: 'Hvilket enzym utfører selve syntesen av RNA under transkripsjon?',
      options: ['RNA-polymerase', 'DNA-polymerase', 'Ligase', 'Primase'],
      explanation: 'RNA-polymerase leser maltråden og bygger et komplementært RNA-molekyl i 5\'→3\'-retning.',
    },
    {
      question: 'Hva er en promotor?',
      options: ['En DNA-sekvens oppstrøms for genet der transkripsjonen starter', 'Et stoppsignal som avslutter transkripsjonen', 'Et ferdig RNA-molekyl', 'Et enzym som spleiser RNA'],
      explanation: 'Promotoren er en reguleringssekvens foran genet som gjenkjennes av RNA-polymerase og bestemmer hvor transkripsjonen starter.',
    },
    {
      question: 'Hvilken base i RNA erstatter tymin fra DNA?',
      options: ['Uracil (U)', 'Cytosin (C)', 'Guanin (G)', 'Adenin (A)'],
      explanation: 'I RNA er tymin (T) erstattet av uracil (U). Adenin i DNA parer derfor med uracil i RNA under transkripsjon.',
    },
    {
      question: 'Hva skjer under prosessering av pre-mRNA hos eukaryoter?',
      options: ['Introner fjernes og eksoner spleises sammen', 'Eksoner fjernes og introner beholdes', 'mRNA oversettes til protein', 'mRNA replikeres'],
      explanation: 'Hos eukaryoter spleises pre-mRNA: de ikke-kodende intronene fjernes, og de kodende eksonene settes sammen. I tillegg legges 5\'-kappe og poly-A-hale til.',
    },
  ],
  'biologi-2-1-3': [
    {
      question: 'Hva er et kodon?',
      options: ['Tre nukleotider i mRNA som koder for én aminosyre', 'En enkelt nitrogenbase i DNA', 'Et helt gen', 'Et ferdig protein'],
      explanation: 'Et kodon er tre sammenhengende nukleotider i mRNA. Hvert kodon koder for en bestemt aminosyre eller et stoppsignal.',
    },
    {
      question: 'Hvilket kodon er startkodon og koder for metionin?',
      options: ['AUG', 'UAA', 'UAG', 'UGA'],
      explanation: 'AUG er startkodonet og koder for aminosyren metionin. UAA, UAG og UGA er stoppkodoner.',
    },
    {
      question: 'Hvilken struktur i cellen utfører translasjonen?',
      options: ['Ribosomet', 'Cellekjernen', 'Golgiapparatet', 'Mitokondriet'],
      explanation: 'Translasjonen skjer på ribosomet, der mRNA leses og aminosyrer kobles sammen til en polypeptidkjede.',
    },
    {
      question: 'Hva er oppgaven til tRNA i translasjonen?',
      options: ['Frakte aminosyrer til ribosomet og parre sitt antikodon med kodonet', 'Bære den genetiske koden fra kjernen til ribosomet', 'Bygge opp selve ribosomet', 'Kopiere DNA til RNA'],
      explanation: 'tRNA frakter en spesifikk aminosyre og har et antikodon som baseparer med mRNA-kodonet, slik at riktig aminosyre settes inn.',
    },
    {
      question: 'Hvor mange ulike aminosyrer brukes vanligvis til å bygge proteiner?',
      options: ['20', '4', '64', '23'],
      explanation: 'Det finnes 20 standard aminosyrer. De 64 mulige kodonene koder for disse 20 (pluss stopp), så koden er degenerert.',
    },
  ],
  'biologi-2-1-4': [
    {
      question: 'Hva er et operon?',
      options: ['En enhet hos prokaryoter med promotor, operator og flere strukturgener', 'Et enkelt gen hos eukaryoter', 'Et ferdig protein', 'Et område med ikke-kodende DNA'],
      explanation: 'Et operon er en funksjonell genenhet hos prokaryoter som transkriberes som ett polycistronisk mRNA og reguleres samlet.',
    },
    {
      question: 'Hva er en transkripsjonsfaktor?',
      options: ['Et protein som binder DNA og regulerer transkripsjonen', 'Et RNA-molekyl som oversettes til protein', 'Et enzym som replikerer DNA', 'En type nitrogenbase'],
      explanation: 'Transkripsjonsfaktorer er proteiner som binder spesifikke DNA-sekvenser og enten fremmer eller hemmer transkripsjon.',
    },
    {
      question: 'Hva er epigenetikk?',
      options: ['Arvelige endringer i genuttrykk uten endring i DNA-sekvensen', 'Mutasjoner som endrer rekkefølgen av baser', 'Studiet av hele genomets DNA-sekvens', 'Sammenkobling av aminosyrer'],
      explanation: 'Epigenetikk handler om arvelige endringer i genekspresjon som ikke skyldes endret DNA-sekvens, f.eks. DNA-metylering og histonmodifikasjoner.',
    },
    {
      question: 'Hvilken epigenetisk mekanisme demper vanligvis transkripsjonen av et gen?',
      options: ['DNA-metylering', 'Punktmutasjon', 'Spleising', 'Replikasjon'],
      explanation: 'Metylering av cytosin i promotorområder demper som regel genuttrykket ved å hindre transkripsjonsmaskineriet i å binde.',
    },
    {
      question: 'Hvorfor er genregulering viktig for flercellede organismer?',
      options: ['Ulike celletyper kan uttrykke forskjellige gener selv om de har samme DNA', 'Den endrer DNA-sekvensen i hver celletype', 'Den gir alle celler nøyaktig samme proteiner', 'Den fjerner overflødige kromosomer'],
      explanation: 'Alle celler i kroppen har samme DNA, men genregulering bestemmer hvilke gener som er aktive, slik at f.eks. en nervecelle skiller seg fra en muskelcelle.',
    },
  ],
  'biologi-2-1-5': [
    {
      question: 'Hva er en mutasjon?',
      options: ['En permanent endring i DNA-sekvensen', 'En midlertidig folding av et protein', 'En normal del av transkripsjonen', 'Sammenkobling av to kromosomer i mitose'],
      explanation: 'En mutasjon er en varig endring i DNA-sekvensen. Den kan oppstå spontant eller induseres av mutagener.',
    },
    {
      question: 'Hva kjennetegner en punktmutasjon?',
      options: ['Endring i ett enkelt basepar', 'Tap av et helt kromosom', 'Dobling av hele genomet', 'Bytte av to kromosomarmer'],
      explanation: 'En punktmutasjon er en endring i ett enkelt basepar, f.eks. substitusjon, innsetting eller delesjon av én base.',
    },
    {
      question: 'Hva er en rammeforskyvningsmutasjon (frameshift)?',
      options: ['Innsetting eller tap av baser som forskyver leserammen', 'Bytte av én base mot en annen uten konsekvens', 'En endring som bare påvirker introner', 'En mutasjon som reparerer seg selv'],
      explanation: 'Når et antall baser som ikke er delelig med tre settes inn eller fjernes, forskyves leserammen, og alle kodoner nedstrøms endres.',
    },
    {
      question: 'Hva reparerer mekanismen «nucleotide excision repair» (NER)?',
      options: ['Store, heliksforvrengende skader som UV-induserte tymindimerer', 'Feilparede baser rett etter replikasjon', 'Brudd i sukker-fosfat-ryggraden alene', 'Manglende RNA-primere'],
      explanation: 'NER fjerner store skader som forvrenger heliksen, for eksempel tymindimerer dannet av UV-stråling, og fyller hullet på nytt.',
    },
    {
      question: 'Hvorfor er en mutasjon i en kjønnscelle viktigere for evolusjon enn en mutasjon i en kroppscelle?',
      options: ['Kjønnscellemutasjoner kan arves videre til avkommet', 'Kroppscellemutasjoner arves alltid videre', 'Kjønnscellemutasjoner repareres aldri', 'Kroppscellemutasjoner endrer hele populasjonen'],
      explanation: 'Bare mutasjoner i kjønnsceller (gameter) føres videre til neste generasjon og kan dermed påvirke evolusjonen. Kroppscellemutasjoner arves ikke.',
    },
  ],
  'biologi-2-1-6': [
    {
      question: 'Hva betyr det at et allel er recessivt?',
      options: ['Det uttrykkes bare i fenotypen når individet er homozygot for allelet', 'Det uttrykkes alltid, også i heterozygot tilstand', 'Det finnes bare på X-kromosomet', 'Det kan ikke arves videre'],
      explanation: 'Et recessivt allel uttrykkes kun når begge allelene er recessive (homozygot, aa). I heterozygot (Aa) maskeres det av det dominante allelet.',
    },
    {
      question: 'Et individ med genotypen Aa krysses med et annet Aa-individ. Hvor stor andel av avkommet forventes å vise det recessive trekket?',
      options: ['1/4', '1/2', '3/4', '0'],
      explanation: 'Krysningen Aa × Aa gir 1 AA : 2 Aa : 1 aa. Bare aa (1/4) viser det recessive trekket.',
    },
    {
      question: 'Hva sier Mendels første lov (segregasjonsloven)?',
      options: ['De to allelene for en egenskap skilles ved dannelsen av kjønnsceller', 'Alle egenskaper arves alltid sammen', 'Avkommet blir alltid en blanding av foreldrenes trekk', 'Dominante alleler forsvinner over generasjoner'],
      explanation: 'Segregasjonsloven sier at de to allelene for et gen skiller lag under meiosen, slik at hver gamet får bare ett av dem.',
    },
    {
      question: 'Hva er forskjellen på genotype og fenotype?',
      options: ['Genotype er den genetiske sammensetningen, fenotype er de synlige egenskapene', 'Genotype er de synlige trekkene, fenotype er allelene', 'De betyr nøyaktig det samme', 'Genotype gjelder bare planter, fenotype bare dyr'],
      explanation: 'Genotypen er hvilke alleler individet har (f.eks. Aa), mens fenotypen er det observerbare uttrykket (f.eks. fargen).',
    },
    {
      question: 'Et Punnett-skjema for krysningen Aa × aa gir hvilket forventet fenotypeforhold (dominant : recessiv)?',
      options: ['1 : 1', '3 : 1', '1 : 3', '9 : 7'],
      explanation: 'Aa × aa gir avkommet 1/2 Aa (dominant fenotype) og 1/2 aa (recessiv fenotype), altså forholdet 1 : 1. Dette kalles en testkrysning.',
    },
  ],
  'biologi-2-1-7': [
    {
      question: 'Hva kjennetegner kodominans?',
      options: ['Begge alleler uttrykkes fullt ut samtidig i heterozygoten', 'Det ene allelet maskerer det andre helt', 'Heterozygoten viser et mellomtrekk', 'Allelet uttrykkes bare hos hanner'],
      explanation: 'Ved kodominans, som i AB-blodtype, uttrykkes begge allelene fullstendig og samtidig hos heterozygoten.',
    },
    {
      question: 'Hva er forskjellen på kodominans og ufullstendig dominans?',
      options: ['Ved ufullstendig dominans blir heterozygoten et mellomtrekk; ved kodominans vises begge trekk', 'De betyr akkurat det samme', 'Kodominans gir alltid hvit farge', 'Ufullstendig dominans gjelder bare kjønnskromosomer'],
      explanation: 'Ufullstendig dominans gir en blanding (f.eks. rosa fra rød og hvit), mens kodominans viser begge allelene tydelig samtidig (f.eks. AB-blod).',
    },
    {
      question: 'Hvorfor er recessive kjønnsbundne sykdommer som fargeblindhet vanligere hos gutter?',
      options: ['Gutter har bare ett X-kromosom, så ett recessivt allel slår igjennom', 'Gutter har to X-kromosomer', 'Allelet ligger på Y-kromosomet', 'Jenter mangler X-kromosom'],
      explanation: 'Gutter (XY) har bare ett X-kromosom. Et recessivt allel på X-et maskeres ikke og kommer til uttrykk. Jenter (XX) trenger to kopier.',
    },
    {
      question: 'Hva er polygen arv?',
      options: ['En egenskap som styres av flere gener samtidig', 'En egenskap styrt av ett enkelt gen', 'Arv som bare skjer via mitokondrier', 'Arv av kun dominante trekk'],
      explanation: 'Polygen arv betyr at flere gener bidrar til samme egenskap, f.eks. høyde og hudfarge, og gir en kontinuerlig variasjon.',
    },
    {
      question: 'En far med blodtype AB og en mor med blodtype O får barn. Hvilke blodtyper kan barna ha?',
      options: ['A eller B', 'AB eller O', 'Bare AB', 'Bare O'],
      explanation: 'Far er IAIB, mor er ii. Barna får ett allel fra hver: IAi (type A) eller IBi (type B). Verken AB eller O er mulig.',
    },
  ],
  'biologi-2-1-8': [
    {
      question: 'Hva er et genom?',
      options: ['Den totale mengden genetisk materiale (DNA) i en organisme', 'Et enkelt gen', 'Et ferdig protein', 'Mengden RNA i en celle'],
      explanation: 'Genomet er alt DNA i en organisme. Menneskets genom omfatter rundt 3,2 milliarder basepar fordelt på 23 kromosompar.',
    },
    {
      question: 'Hva er hovedfunksjonen til guide-RNA i CRISPR-Cas9?',
      options: ['Lede Cas9-enzymet til en bestemt DNA-sekvens', 'Klippe DNA-tråden direkte', 'Lime sammen DNA-fragmenter', 'Kopiere DNA eksponentielt'],
      explanation: 'Guide-RNA er komplementært til målsekvensen og styrer Cas9-nukleasen dit, slik at Cas9 kan kutte DNA-et på riktig sted.',
    },
    {
      question: 'Hva brukes DNA-sekvensering til?',
      options: ['Å bestemme rekkefølgen av nukleotider i et DNA-fragment', 'Å koble sammen aminosyrer til proteiner', 'Å fjerne mutasjoner fra DNA', 'Å lage RNA-primere'],
      explanation: 'Sekvensering avdekker den nøyaktige rekkefølgen av basene (A, T, G, C) og brukes blant annet til diagnostikk og forskning.',
    },
    {
      question: 'Hva er bioinformatikk?',
      options: ['Bruk av databehandling for å analysere biologiske data som DNA-sekvenser', 'Dyrking av celler i laboratoriet', 'En metode for å forsterke DNA', 'En type mikroskopering'],
      explanation: 'Bioinformatikk kombinerer biologi og informatikk for å lagre, sammenligne og analysere store mengder biologiske data, særlig sekvensdata.',
    },
    {
      question: 'Hvilken etisk problemstilling er særlig knyttet til CRISPR-redigering av kjønnsceller?',
      options: ['Endringene arves videre til kommende generasjoner', 'Metoden virker bare på planter', 'Den kan ikke endre DNA i det hele tatt', 'Den fjerner alle gener i cellen'],
      explanation: 'Redigering av kjønnsceller (kimbanen) gir arvelige endringer som påvirker fremtidige generasjoner, noe som reiser store etiske spørsmål.',
    },
  ],
  'biologi-2-2-1': [
    {
      question: 'Hva er peristaltikk?',
      options: ['Rytmiske muskelsammentrekninger som transporterer mat gjennom fordøyelseskanalen', 'Nedbrytning av mat ved hjelp av enzymer', 'Opptak av næring gjennom tarmveggen', 'Produksjon av magesyre'],
      explanation: 'Peristaltikk er bølgelignende sammentrekninger av glatt muskulatur som skyver maten framover i fordøyelseskanalen.',
    },
    {
      question: 'Hva er chymus?',
      options: ['Den halvflytende, sure massen av delvis fordøyd mat fra magesekken', 'Et fordøyelsesenzym i tynntarmen', 'Galle fra leveren', 'Ufordøyd avfall i tykktarmen'],
      explanation: 'Chymus er den sure (pH ca. 2) grøtaktige blandingen av mat og magesaft som dannes i magesekken og slippes ut i tynntarmen.',
    },
    {
      question: 'Hva er hovedfunksjonen til tarmtottene (villi) i tynntarmen?',
      options: ['Øke overflaten for opptak av næringsstoffer', 'Produsere magesyre', 'Lagre ufordøyd mat', 'Skille ut galle'],
      explanation: 'Tarmtottene er fingerformede utposninger som kraftig øker tynntarmens overflate, slik at opptaket av næringsstoffer blir effektivt.',
    },
    {
      question: 'Hvilket organ produserer galle, som hjelper til med fordøyelse av fett?',
      options: ['Leveren', 'Magesekken', 'Tykktarmen', 'Bukspyttkjertelen'],
      explanation: 'Leveren produserer galle, som lagres i galleblæren og emulgerer fett i tynntarmen slik at fettnedbrytende enzymer får virke.',
    },
    {
      question: 'Hva er hovedoppgaven til tykktarmen?',
      options: ['Suge opp vann og salter fra tarminnholdet', 'Bryte ned proteiner med enzymer', 'Ta opp det meste av næringsstoffene', 'Produsere insulin'],
      explanation: 'Tykktarmen tar opp vann og salter fra det ufordøyde innholdet og former avføringen. Mesteparten av næringsopptaket skjer i tynntarmen.',
    },
  ],
  'biologi-2-2-2': [
    {
      question: 'Hva er glykogen?',
      options: ['Kroppens forgrenede korttidslager av glukose, særlig i lever og muskler', 'Et fettlager under huden', 'Et protein i blodet', 'Et essensielt vitamin'],
      explanation: 'Glykogen er et forgrenet polysakkarid av glukoseenheter som lagres i lever og muskler og frigjøres ved behov for energi.',
    },
    {
      question: 'Hva menes med essensielle aminosyrer?',
      options: ['Aminosyrer kroppen ikke kan lage selv og som må komme fra kosten', 'Aminosyrer kroppen alltid kan lage selv', 'Aminosyrer som bare finnes i fett', 'Aminosyrer som er skadelige'],
      explanation: 'Essensielle aminosyrer kan ikke syntetiseres i kroppen og må tilføres via maten. Mennesket har 9 slike.',
    },
    {
      question: 'Hvilken hovedfunksjon har karbohydrater i kostholdet?',
      options: ['Å være kroppens viktigste energikilde', 'Å bygge opp DNA', 'Å transportere oksygen', 'Å danne antistoffer'],
      explanation: 'Karbohydrater er den viktigste og raskest tilgjengelige energikilden. Glukose er hovedbrenslet for blant annet hjernen.',
    },
    {
      question: 'Hva er essensielle fettsyrer?',
      options: ['Flerumettede fettsyrer kroppen ikke kan lage selv, som linolsyre', 'Fettsyrer kroppen alltid lager selv', 'Mettet fett fra kjøtt', 'Transfett fra industrien'],
      explanation: 'Essensielle fettsyrer (omega-6 linolsyre og omega-3 alfa-linolensyre) må tilføres gjennom kosten fordi kroppen ikke kan lage dem.',
    },
    {
      question: 'Hvorfor trenger kroppen vitaminer selv om de ikke gir energi?',
      options: ['De fungerer som hjelpestoffer i livsviktige kjemiske reaksjoner', 'De er kroppens viktigste energikilde', 'De erstatter vann i cellene', 'De bygger opp muskelmasse direkte'],
      explanation: 'Vitaminer er organiske forbindelser som inngår som koenzymer og hjelpestoffer i stoffskiftet, selv om de ikke leverer energi.',
    },
  ],
  'biologi-2-2-3': [
    {
      question: 'Hva er hovedfunksjonen til hjerteklaffene?',
      options: ['Sikre at blodet bare strømmer i én retning', 'Pumpe blodet ut i kroppen', 'Produsere røde blodceller', 'Rense blodet for avfallsstoffer'],
      explanation: 'Hjerteklaffene åpner og lukker seg slik at blodet strømmer i riktig retning og ikke renner tilbake.',
    },
    {
      question: 'Hva betyr systole i hjertesyklusen?',
      options: ['Sammentrekning av hjertemuskelen', 'Avslapping av hjertemuskelen', 'Fyllingsfasen i forkamrene', 'Stopp i hjerteslagene'],
      explanation: 'Systole er sammentrekningsfasen da hjertekamrene presser blodet ut. Diastole er avslappingsfasen da kamrene fylles.',
    },
    {
      question: 'Hvilken del av hjertet pumper oksygenrikt blod ut i hovedpulsåren (aorta)?',
      options: ['Venstre hjertekammer', 'Høyre hjertekammer', 'Høyre forkammer', 'Venstre forkammer'],
      explanation: 'Venstre hjertekammer pumper oksygenrikt blod ut i aorta og videre til kroppen. Høyre kammer sender blod til lungene.',
    },
    {
      question: 'Hva viser et elektrokardiogram (EKG)?',
      options: ['Hjertets elektriske aktivitet over tid', 'Mengden oksygen i blodet', 'Blodtrykket i arteriene', 'Antallet røde blodceller'],
      explanation: 'EKG registrerer de elektriske signalene som styrer hjerteslagene, og brukes til å oppdage rytmeforstyrrelser og skader.',
    },
    {
      question: 'Hva starter normalt hvert hjerteslag?',
      options: ['Sinusknuten (sinoatrialknuten)', 'Venstre hjertekammer', 'Aortaklaffen', 'Lungevenen'],
      explanation: 'Sinusknuten i høyre forkammer er hjertets naturlige pacemaker og setter i gang den elektriske impulsen for hvert slag.',
    },
  ],
  'biologi-2-2-4': [
    {
      question: 'Hva er hematokrit?',
      options: ['Andelen røde blodceller av det totale blodvolumet', 'Mengden oksygen i blodet', 'Antall hvite blodceller per liter', 'Blodets evne til å levre seg'],
      explanation: 'Hematokrit er prosentandelen røde blodceller i blodet, bestemt ved å sentrifugere en blodprøve.',
    },
    {
      question: 'Hvorfor er kapillærenes vegg svært tynn (ett cellelag)?',
      options: ['For å muliggjøre effektiv utveksling av stoffer mellom blod og vev', 'For å øke blodtrykket', 'For å pumpe blodet raskere', 'For å hindre all stofftransport'],
      explanation: 'Kapillærveggen består av et enkelt lag endotelceller, slik at oksygen, næring og avfallsstoffer lett kan utveksles med vevet.',
    },
    {
      question: 'Hvilken oppgave har de røde blodcellene?',
      options: ['Transportere oksygen ved hjelp av hemoglobin', 'Bekjempe infeksjoner', 'Få blodet til å levre seg', 'Produsere antistoffer'],
      explanation: 'Røde blodceller inneholder hemoglobin som binder oksygen i lungene og frigjør det i vevet.',
    },
    {
      question: 'Hva kjennetegner portåresystemet?',
      options: ['Blod fra kapillærer i ett organ ledes til kapillærer i et annet organ', 'Blod pumpes direkte til hjertet uten kapillærer', 'Det finnes bare i lungene', 'Det transporterer kun oksygen'],
      explanation: 'I portåresystemet (f.eks. portåren fra tarm til lever) passerer blodet to kapillærnett etter hverandre uten å gå om hjertet imellom.',
    },
    {
      question: 'Hva er funksjonen til blodplatene (trombocyttene)?',
      options: ['Bidra til at blodet levrer seg ved skade', 'Transportere oksygen', 'Produsere insulin', 'Bekjempe virus med antistoffer'],
      explanation: 'Blodplater er cellefragmenter som klumper seg ved skade og setter i gang koagulasjonen som stanser blødning.',
    },
  ],
  'biologi-2-2-5': [
    {
      question: 'Hvor i lungene foregår selve gassutvekslingen?',
      options: ['I alveolene (lungeblærene)', 'I luftrøret', 'I strupehodet', 'I bronkiene'],
      explanation: 'Gassutvekslingen skjer over de tynne veggene i alveolene, der oksygen tas opp og karbondioksid avgis.',
    },
    {
      question: 'Hva er vitalkapasitet?',
      options: ['Den maksimale luftmengden man kan puste ut etter maksimal innpust', 'Luften som blir igjen i lungene etter maksimal utpust', 'Luftmengden ved hvilepust', 'Mengden oksygen i blodet'],
      explanation: 'Vitalkapasiteten er summen av tidalvolum og inspiratorisk og ekspiratorisk reservevolum – det største volumet man kan puste ut.',
    },
    {
      question: 'I hvilken retning beveger oksygen seg under gassutveksling i alveolene?',
      options: ['Fra alveolen til blodet', 'Fra blodet til alveolen', 'Fra blodet til luftrøret', 'Det beveger seg ikke'],
      explanation: 'Oksygen diffunderer fra alveolen (høyt partialtrykk) til blodet (lavt partialtrykk), mens CO₂ går motsatt vei.',
    },
    {
      question: 'Hva sier Daltons lov om partialtrykk?',
      options: ['En gass\' partialtrykk er proporsjonalt med dens andel av gassblandingen', 'Gasser løses bedre jo varmere det er', 'Alle gasser har samme trykk', 'Trykk og volum er alltid konstant'],
      explanation: 'Partialtrykket til en gass i en blanding tilsvarer den andelen gassen utgjør av totaltrykket, ifølge Daltons lov.',
    },
    {
      question: 'Hvilken egenskap ved alveolene gjør gassutvekslingen effektiv?',
      options: ['Stor samlet overflate og svært tynn vegg', 'Tykk muskelvegg', 'Manglende blodforsyning', 'Lav overflate og høyt trykk'],
      explanation: 'Lungene har millioner av alveoler med enorm samlet overflate og en tynn vegg, noe som gir kort diffusjonsavstand og effektiv utveksling.',
    },
  ],
  'biologi-2-2-6': [
    {
      question: 'Hva er kooperativ binding i hemoglobin?',
      options: ['At binding av det første oksygenet gjør det lettere å binde de neste', 'At oksygen aldri binder til hemoglobin', 'At CO₂ binder i stedet for oksygen', 'At hemoglobin bare kan binde ett oksygen'],
      explanation: 'Når hemoglobin binder det første O₂-molekylet, endrer det form slik at affiniteten øker og de neste O₂ bindes lettere. Dette gir S-formet bindingskurve.',
    },
    {
      question: 'Hva viser oksygenbindingskurven?',
      options: ['Hvor mettet hemoglobin er ved ulike oksygenpartialtrykk', 'Mengden CO₂ i blodet over tid', 'Blodtrykket ved ulike pulsverdier', 'Antall røde blodceller'],
      explanation: 'Kurven viser sammenhengen mellom oksygenpartialtrykk (pO₂) og hvor mettet hemoglobinet er med oksygen.',
    },
    {
      question: 'Hva er Bohr-effekten?',
      options: ['Økt CO₂ og lavere pH reduserer hemoglobinets affinitet for oksygen', 'Oksygen binder hardere når pH synker', 'CO₂ binder bedre i lungene', 'Hemoglobin slutter å virke ved lav temperatur'],
      explanation: 'Bohr-effekten gjør at hemoglobin slipper mer oksygen i aktivt vev med mye CO₂ og lav pH, der oksygen trengs mest.',
    },
    {
      question: 'Hvordan transporteres mesteparten av CO₂ i blodet?',
      options: ['Som bikarbonationer (HCO₃⁻) i blodplasmaet', 'Bundet til hemoglobin på samme sted som oksygen', 'Som rene CO₂-gassbobler', 'Bundet til blodplater'],
      explanation: 'Det meste av CO₂ omdannes til bikarbonationer (HCO₃⁻) i de røde blodcellene og fraktes oppløst i plasmaet.',
    },
    {
      question: 'Hvorfor frigjør hemoglobin mer oksygen i arbeidende muskler?',
      options: ['Høyere CO₂, lavere pH og høyere temperatur senker affiniteten for O₂', 'Musklene har mer hemoglobin', 'Det er mer oksygen i musklene', 'Blodtrykket er lavere der'],
      explanation: 'I aktivt vev gjør høy CO₂, lav pH (Bohr-effekten) og høy temperatur at hemoglobin lettere slipper oksygen der det trengs.',
    },
  ],
  'biologi-2-2-7': [
    {
      question: 'Hva er fagocytose?',
      options: ['At immunceller omslutter og bryter ned fremmede partikler', 'Produksjon av antistoffer', 'Sammensmelting av to celler', 'Transport av oksygen'],
      explanation: 'Fagocytose er prosessen der fagocytter (f.eks. makrofager) sluker og fordøyer mikroorganismer og celleavfall.',
    },
    {
      question: 'Hva er antistoffer?',
      options: ['Y-formede proteiner som binder spesifikke antigener', 'Celler som sluker bakterier', 'Et signalstoff fra hjernen', 'Et fordøyelsesenzym'],
      explanation: 'Antistoffer (immunglobuliner) produseres av plasmaceller og binder spesifikt til antigener, slik at de uskadeliggjøres.',
    },
    {
      question: 'Hvilke celler produserer antistoffer?',
      options: ['Plasmaceller (aktiverte B-lymfocytter)', 'Røde blodceller', 'Nerveceller', 'Leverceller'],
      explanation: 'Når B-lymfocytter aktiveres, modnes de til plasmaceller som masseproduserer antistoffer mot et bestemt antigen.',
    },
    {
      question: 'Hva er flokkimmunitet (besetningsimmunitet)?',
      options: ['At smittespredning begrenses når en stor nok andel av befolkningen er immun', 'At alle blir immune etter én infeksjon', 'At dyr ikke kan smitte mennesker', 'At immunforsvaret slutter å virke'],
      explanation: 'Når mange nok er immune (gjennom vaksine eller gjennomgått sykdom), får ikke smittestoffet fotfeste, og også uvaksinerte beskyttes indirekte.',
    },
    {
      question: 'Hva er forskjellen på det medfødte og det ervervede immunforsvaret?',
      options: ['Det medfødte virker raskt og uspesifikt, det ervervede er spesifikt og har hukommelse', 'Det medfødte er spesifikt, det ervervede er uspesifikt', 'De er identiske', 'Bare det medfødte lager antistoffer'],
      explanation: 'Det medfødte forsvaret reagerer raskt og generelt, mens det ervervede (adaptive) er målrettet, lærer av tidligere smitte og danner immunologisk hukommelse.',
    },
  ],
  'biologi-2-3-1': [
    {
      question: 'Hva er et nevron?',
      options: ['En spesialisert nervecelle som mottar og sender elektriske signaler', 'En muskelcelle', 'En celle som produserer antistoffer', 'En celle i leveren'],
      explanation: 'Et nevron er en nervecelle med cellelegeme, dendritter som mottar signaler og et akson som sender signaler videre.',
    },
    {
      question: 'Hva er et aksjonspotensial?',
      options: ['En rask endring i membranpotensialet fra ca. –70 mV til +30 mV', 'En konstant spenning over membranen', 'En kjemisk binding mellom to nevroner', 'Et signalstoff i synapsen'],
      explanation: 'Aksjonspotensialet er en kortvarig depolarisering av nervecellemembranen som forplanter seg langs aksonet som et nervesignal.',
    },
    {
      question: 'Hva er en synapse?',
      options: ['Koblingspunktet der signaler overføres mellom to nerveceller', 'Cellekjernen i et nevron', 'Et beskyttende lag rundt aksonet', 'En type blodkar i hjernen'],
      explanation: 'Synapsen er kontaktstedet mellom to nevroner (eller nevron og effektorcelle), der signalet overføres, ofte ved hjelp av signalstoffer.',
    },
    {
      question: 'Hva skjer i en kjemisk synapse når signalet skal overføres?',
      options: ['Det frigjøres nevrotransmittere som binder reseptorer på mottakercellen', 'Aksjonspotensialet hopper direkte over uten kjemikalier', 'DNA kopieres', 'Cellen deler seg'],
      explanation: 'Når aksjonspotensialet når synapsen, frigjøres nevrotransmittere som diffunderer over synapsespalten og binder reseptorer på neste celle.',
    },
    {
      question: 'Hvilken funksjon har myelinskjeden rundt aksonet?',
      options: ['Den øker hastigheten på signaloverføringen', 'Den produserer nevrotransmittere', 'Den bremser nervesignalet', 'Den lagrer næring'],
      explanation: 'Myelinskjeden isolerer aksonet slik at aksjonspotensialet «hopper» mellom Ranviers innsnøringer (saltatorisk ledning) og går mye raskere.',
    },
  ],
  'biologi-2-3-2': [
    {
      question: 'Hva består sentralnervesystemet av?',
      options: ['Hjernen og ryggmargen', 'Bare nervene ut i kroppen', 'Hjertet og blodårene', 'Sansecellene i huden'],
      explanation: 'Sentralnervesystemet (CNS) består av hjernen og ryggmargen. Nervene ute i kroppen hører til det perifere nervesystemet.',
    },
    {
      question: 'Hva er hjernebarken (cortex cerebri)?',
      options: ['Det ytre laget av grå substans i storhjernen', 'Den innerste hvite substansen', 'Et hulrom fylt med væske', 'En del av ryggmargen'],
      explanation: 'Hjernebarken er et 2–4 mm tykt ytre lag av grå substans (nevronenes cellelegemer), sterkt foldet for å øke overflaten.',
    },
    {
      question: 'Hvilke fem komponenter inngår i en refleksbue?',
      options: ['Reseptor, sensorisk nevron, koblingsnevron, motorisk nevron og effektor', 'Bare reseptor og effektor', 'Hjerne, ryggmarg og hjerte', 'To nevroner og en muskel uten reseptor'],
      explanation: 'Refleksbuen går fra reseptor via sensorisk (afferent) nevron, ofte et koblingsnevron i ryggmargen, til motorisk (efferent) nevron og effektor.',
    },
    {
      question: 'Hva er funksjonen til cerebrospinalvæsken (CSF)?',
      options: ['Beskytte og støtte hjernen og ryggmargen', 'Transportere oksygen i blodet', 'Lede elektriske signaler', 'Produsere hormoner'],
      explanation: 'Cerebrospinalvæsken omgir hjernen og ryggmargen, demper støt, gir oppdrift og transporterer næring og avfallsstoffer.',
    },
    {
      question: 'Hvilken fordel gir en refleks der signalet behandles i ryggmargen i stedet for hjernen?',
      options: ['Responsen blir raskere og kan beskytte mot skade', 'Den blir langsommere men mer presis', 'Den krever mer energi', 'Den hindrer all bevegelse'],
      explanation: 'Refleksbuen gjennom ryggmargen gir en svært rask, ubevisst respons (f.eks. trekke hånden bort fra noe varmt) før hjernen rekker å bearbeide signalet.',
    },
  ],
  'biologi-2-3-3': [
    {
      question: 'Hva styrer det somatiske nervesystemet?',
      options: ['Bevisste, frivillige bevegelser og sanseinformasjon', 'Bare ufrivillige kroppsfunksjoner', 'Hjerterytmen i hvile', 'Produksjon av hormoner'],
      explanation: 'Det somatiske nervesystemet formidler sanseinformasjon og styrer skjelettmuskulaturen, altså frivillige bevegelser.',
    },
    {
      question: 'I hvilke to grener deles det autonome nervesystemet?',
      options: ['Det sympatiske og det parasympatiske', 'Det sensoriske og det motoriske', 'Det sentrale og det perifere', 'Det somatiske og det refleksive'],
      explanation: 'Det autonome (ufrivillige) nervesystemet deles i det sympatiske («fight or flight») og det parasympatiske («hvile og fordøye»).',
    },
    {
      question: 'Hva gjør det sympatiske nervesystemet i en stressende situasjon?',
      options: ['Øker puls og blodtrykk og forbereder kroppen på handling', 'Senker puls og fremmer fordøyelse', 'Stanser all muskelaktivitet', 'Skiller ut fordøyelsesenzymer'],
      explanation: 'Det sympatiske systemet aktiverer kampberedskap: hjertet slår raskere, pupillene utvides og energi mobiliseres.',
    },
    {
      question: 'Hva betyr dual innervering?',
      options: ['At et organ får signaler fra både det sympatiske og parasympatiske systemet', 'At et organ bare har én nervefiber', 'At nervene er doblet i ryggmargen', 'At hjernen har to halvdeler'],
      explanation: 'Mange organer mottar nervetilførsel fra begge grener av det autonome nervesystemet, som vanligvis virker motsatt (antagonistisk).',
    },
    {
      question: 'Hva gjør det parasympatiske nervesystemet?',
      options: ['Fremmer ro, fordøyelse og energilagring', 'Forbereder kroppen på flukt', 'Øker pulsen kraftig', 'Stenger ned fordøyelsen'],
      explanation: 'Det parasympatiske systemet («rest and digest») senker puls, fremmer fordøyelse og bidrar til hvile og restitusjon.',
    },
  ],
  'biologi-2-3-4': [
    {
      question: 'Hva er sensorisk transduksjon?',
      options: ['Omdanning av en stimulus til et elektrisk nervesignal', 'Sending av blod til sanseorganene', 'Lagring av sanseinntrykk i hjernen', 'Produksjon av hormoner'],
      explanation: 'Sensorisk transduksjon er prosessen der en sansereseptor omdanner lys, lyd, trykk eller kjemisk stimulus til et elektrisk signal.',
    },
    {
      question: 'Hvilke celler omdanner lyd til nervesignaler i det indre øret?',
      options: ['Hårcellene', 'Stavcellene', 'Tappene', 'Plasmacellene'],
      explanation: 'Hårcellene i sneglehuset har stereocilier som bøyes av lydbølger og dermed utløser nervesignaler.',
    },
    {
      question: 'Hvilke fotoreseptorer i øyet er ansvarlige for fargesyn?',
      options: ['Tappene', 'Stavene', 'Hårcellene', 'Smaksløkene'],
      explanation: 'Tappene oppfatter farger og fungerer i godt lys. Stavene gir svart-hvitt-syn og er følsomme for svakt lys.',
    },
    {
      question: 'Hva er en sansereseptor?',
      options: ['En spesialisert celle eller nerveende som reagerer på en bestemt type stimulus', 'En muskel som beveger sanseorganet', 'Et hormon som styrer sansene', 'En del av ryggmargen'],
      explanation: 'En sansereseptor reagerer selektivt på én type stimulus (lys, lyd, trykk, temperatur eller kjemiske stoffer) og starter et nervesignal.',
    },
    {
      question: 'Hvorfor oppfatter vi sterkere stimulus som kraftigere, selv om hvert aksjonspotensial er like stort?',
      options: ['Sterkere stimulus gir høyere frekvens av aksjonspotensialer', 'Hvert aksjonspotensial blir større', 'Signalet skifter retning', 'Reseptoren slutter å fyre'],
      explanation: 'Aksjonspotensialer følger «alt-eller-intet». Styrken kodes i stedet av hvor ofte de avfyres (frekvensen) og hvor mange reseptorer som aktiveres.',
    },
  ],
  'biologi-2-3-5': [
    {
      question: 'Hva er et hormon?',
      options: ['Et kjemisk signalstoff som transporteres med blodet til målceller', 'Et elektrisk signal i en nervecelle', 'Et fordøyelsesenzym', 'En type blodcelle'],
      explanation: 'Et hormon produseres i en endokrin kjertel, skilles ut i blodet og virker på målceller med passende reseptorer.',
    },
    {
      question: 'Hva kjennetegner en endokrin kjertel?',
      options: ['Den skiller ut hormoner direkte i blodbanen uten utførselsgang', 'Den har en gang som tømmer seg på kroppsoverflaten', 'Den produserer bare fordøyelsesenzymer', 'Den lager røde blodceller'],
      explanation: 'Endokrine kjertler (f.eks. skjoldbruskkjertelen) mangler utførselsgang og slipper hormonene rett ut i blodet.',
    },
    {
      question: 'Hva er negativ tilbakekobling i hormonsystemet?',
      options: ['At sluttproduktet hemmer videre produksjon av hormonet', 'At hormonet forsterker sin egen produksjon', 'At to hormoner alltid stiger samtidig', 'At nervesystemet overtar styringen'],
      explanation: 'Negativ tilbakekobling stabiliserer nivåene: når et hormon (eller dets effekt) blir høyt nok, hemmes den videre frigjøringen.',
    },
    {
      question: 'Hvilken kjertel kalles ofte «den overordnede kjertelen» fordi den styrer flere andre?',
      options: ['Hypofysen', 'Bukspyttkjertelen', 'Binyrene', 'Skjoldbruskkjertelen'],
      explanation: 'Hypofysen skiller ut hormoner som styrer mange andre kjertler, og den styres selv av hypothalamus.',
    },
    {
      question: 'Hvorfor virker hormoner langsommere men mer langvarig enn nervesignaler?',
      options: ['De fraktes med blodet og påvirker mange celler over tid', 'De er elektriske og raske', 'De virker bare i én celle', 'De brytes ned umiddelbart'],
      explanation: 'Hormoner transporteres med blodet til mange målceller og gir en tregere, men mer utbredt og vedvarende respons enn raske nervesignaler.',
    },
  ],
  'biologi-2-3-6': [
    {
      question: 'Hva er homeostase?',
      options: ['Evnen til å opprettholde et stabilt indre miljø', 'Vekst av nye celler', 'Nedbrytning av næringsstoffer', 'Sending av nervesignaler'],
      explanation: 'Homeostase er kroppens dynamiske regulering for å holde indre forhold (temperatur, pH, blodsukker osv.) stabile tross ytre endringer.',
    },
    {
      question: 'Hvilke to hormoner regulerer blodsukkeret antagonistisk?',
      options: ['Insulin og glukagon', 'Adrenalin og testosteron', 'Østrogen og progesteron', 'Tyroksin og veksthormon'],
      explanation: 'Insulin senker blodsukkeret (opptak/lagring), mens glukagon hever det (frigjøring fra glykogen). Begge kommer fra bukspyttkjertelen.',
    },
    {
      question: 'Hva gjør insulin med blodsukkeret?',
      options: ['Senker det ved å fremme opptak og lagring av glukose', 'Hever det ved å frigjøre glukose', 'Påvirker det ikke', 'Omdanner det til protein'],
      explanation: 'Insulin frigjøres ved høyt blodsukker og stimulerer celler til å ta opp glukose og lagre den som glykogen, slik at nivået synker.',
    },
    {
      question: 'Hva betyr det at pattedyr er endoterme?',
      options: ['De holder kroppstemperaturen stabil ved egen varmeproduksjon', 'De har samme temperatur som omgivelsene', 'De kan ikke regulere temperaturen', 'De er alltid kalde'],
      explanation: 'Endoterme dyr (pattedyr og fugler) produserer egen varme gjennom stoffskiftet og holder en stabil indre kjernetemperatur.',
    },
    {
      question: 'Hvordan bidrar svetting til temperaturregulering?',
      options: ['Fordampning av svette kjøler kroppen ned', 'Svette varmer opp huden', 'Svette stopper blodstrømmen', 'Svette øker stoffskiftet'],
      explanation: 'Når svette fordamper fra huden, trekker den med seg varme, og kroppen kjøles ned. Dette er en negativ tilbakekobling mot overoppheting.',
    },
  ],
  'biologi-2-3-7': [
    {
      question: 'Hvilken hjernebane er sentral i belønningssystemet?',
      options: ['Den mesolimbiske dopaminbanen', 'Synsbarken', 'Ryggmargsrefleksen', 'Lillehjernen alene'],
      explanation: 'Belønningssystemet bygger på den mesolimbiske banen fra ventral tegmental area (VTA) til nucleus accumbens, der dopamin frigjøres.',
    },
    {
      question: 'Hva er toleranse for et rusmiddel?',
      options: ['At kroppen blir mindre følsom, så større doser trengs for samme effekt', 'At rusmidlet alltid virker sterkere', 'At man slutter å bruke det', 'At kroppen produserer rusmidlet selv'],
      explanation: 'Toleranse er en tilpasning der reseptorer nedreguleres, slik at det kreves mer av stoffet for å oppnå samme virkning.',
    },
    {
      question: 'Hvilken nevrotransmitter er sterkt knyttet til rusmidlers belønningseffekt?',
      options: ['Dopamin', 'Insulin', 'Hemoglobin', 'Adrenalin'],
      explanation: 'De fleste rusmidler øker frigjøringen av dopamin i belønningssystemet, noe som gir følelsen av velbehag og driver gjentatt bruk.',
    },
    {
      question: 'Hva kjennetegner avhengighet?',
      options: ['Tvangsmessig bruk tross negative konsekvenser', 'At rusmidlet ikke lenger gir effekt', 'At man kun bruker det én gang', 'At hjernen er upåvirket'],
      explanation: 'Avhengighet er en kronisk hjernetilstand med nevroplastiske endringer som fører til tvangsmessig bruk til tross for skadelige følger.',
    },
    {
      question: 'Hvorfor kan langvarig rusbruk gjøre det vanskelig å føle glede over vanlige aktiviteter?',
      options: ['Belønningssystemet nedreguleres og blir mindre følsomt', 'Hjernen produserer mer dopamin enn normalt', 'Sansecellene slutter å virke', 'Ryggmargen tar over'],
      explanation: 'Gjentatt overstimulering fører til at belønningssystemet nedreguleres, slik at naturlige gleder gir mindre respons og rusmidlet føles nødvendig.',
    },
  ],
  'biologi-2-4-1': [
    {
      question: 'Hva er spermatogenese?',
      options: ['Dannelsen av haploide sædceller i testiklene', 'Dannelsen av eggceller i eggstokkene', 'Befruktning av egget', 'Deling av en befruktet eggcelle'],
      explanation: 'Spermatogenese er prosessen der diploide spermatogonier gjennom meiose og modning danner haploide sædceller.',
    },
    {
      question: 'Hva er resultatet av befruktning?',
      options: ['En diploid zygote dannes når sæd- og eggcelle smelter sammen', 'To haploide celler dannes', 'En kjønnscelle deler seg ved meiose', 'Et nytt sett eggceller produseres'],
      explanation: 'Ved befruktning smelter en haploid sædcelle (n=23) og en haploid eggcelle (n=23) sammen til en diploid zygote (2n=46).',
    },
    {
      question: 'Hvilken type celledeling gir opphav til kjønnsceller?',
      options: ['Meiose', 'Mitose', 'Binær fisjon', 'Knoppskyting'],
      explanation: 'Meiose halverer kromosomtallet og skaper haploide kjønnsceller med genetisk variasjon. Mitose gir derimot to like, diploide celler.',
    },
    {
      question: 'Hva er en forskjell mellom oogenese og spermatogenese?',
      options: ['Oogenesen pauser i meiose I og gir få modne egg; spermatogenesen gir mange sædceller', 'Begge gir like mange kjønnsceller', 'Oogenesen skjer i testiklene', 'Spermatogenesen starter i fosterlivet og stopper'],
      explanation: 'Oogenesen produserer få modne egg og pauser lenge i meiose I, mens spermatogenesen produserer enorme mengder sædceller kontinuerlig fra puberteten.',
    },
    {
      question: 'Hvorfor er det biologisk gunstig at kjønnsceller er haploide?',
      options: ['Så zygoten får riktig diploid kromosomtall etter befruktning', 'For at zygoten skal bli tetraploid', 'Fordi haploide celler ikke kan dele seg', 'For å hindre genetisk variasjon'],
      explanation: 'Når to haploide kjønnsceller (n) smelter sammen, gjenopprettes det diploide kromosomtallet (2n) i zygoten, slik at det holder seg konstant mellom generasjoner.',
    },
  ],
  'biologi-2-4-2': [
    {
      question: 'Hva skjer under gastrulasjonen?',
      options: ['Det dannes tre kimlag: ektoderm, mesoderm og endoderm', 'Egget befruktes', 'Fosteret fødes', 'Morkaken brytes ned'],
      explanation: 'Gastrulasjonen i uke 3 reorganiserer celler til de tre kimlagene som senere danner alle kroppens vev og organer.',
    },
    {
      question: 'Hva er hovedfunksjonen til morkaken (placenta)?',
      options: ['Utveksle næring, oksygen og avfallsstoffer mellom mor og foster', 'Produsere sædceller', 'Beskytte mot alle infeksjoner fullstendig', 'Danne fosterets skjelett'],
      explanation: 'Morkaken er grensesnittet mellom mors og fosterets blodsirkulasjon og sørger for utveksling av næring, gasser og avfallsstoffer.',
    },
    {
      question: 'Når starter fosterperioden?',
      options: ['Rundt uke 9 etter befruktning', 'Ved befruktningen', 'Ved fødselen', 'I uke 1'],
      explanation: 'Fosterperioden (uke 9–38) følger etter embryonalperioden og preges av vekst og modning av organene som allerede er anlagt.',
    },
    {
      question: 'Hvilket kimlag gir opphav til nervesystemet?',
      options: ['Ektoderm', 'Mesoderm', 'Endoderm', 'Morkaken'],
      explanation: 'Ektoderm danner hud og nervesystem, mesoderm danner muskler, skjelett og blod, og endoderm danner indre organer som fordøyelseskanalen.',
    },
    {
      question: 'Hvorfor er de første ukene av svangerskapet en kritisk periode?',
      options: ['Organene anlegges, og skadelige stoffer kan gi misdannelser', 'Fosteret er ferdig utviklet', 'Cellene deler seg ikke', 'Morkaken er borte'],
      explanation: 'I embryonalperioden anlegges organene, og foster er svært sårbart for skadelige stoffer (teratogener) som kan forstyrre utviklingen.',
    },
  ],
  'biologi-2-4-3': [
    {
      question: 'Hva regulerer HPG-aksen (hypothalamus–hypofyse–gonade-aksen)?',
      options: ['Den hormonelle styringen av reproduksjonen', 'Blodsukkernivået', 'Kroppstemperaturen', 'Fordøyelsen'],
      explanation: 'Hypothalamus frigir GnRH, som får hypofysen til å skille ut FSH og LH, som igjen styrer gonadenes produksjon av kjønnshormoner.',
    },
    {
      question: 'Hvor lang er menstruasjonssyklusen i gjennomsnitt?',
      options: ['Ca. 28 dager', 'Ca. 7 dager', 'Ca. 90 dager', 'Ca. 14 timer'],
      explanation: 'Menstruasjonssyklusen er i gjennomsnitt rundt 28 dager og omfatter blant annet eggløsning rundt midten av syklusen.',
    },
    {
      question: 'Hvilke to hormoner fra hypofysen styrer eggstokkene direkte?',
      options: ['FSH og LH', 'Insulin og glukagon', 'Adrenalin og kortisol', 'Tyroksin og veksthormon'],
      explanation: 'FSH (follikkelstimulerende hormon) og LH (luteiniserende hormon) styrer modning av follikler og eggløsning.',
    },
    {
      question: 'Hvordan virker hormonell prevensjon i hovedsak?',
      options: ['Den hindrer eggløsning ved å påvirke hormonbalansen', 'Den dreper sædceller direkte', 'Den fjerner eggstokkene', 'Den øker GnRH-produksjonen'],
      explanation: 'Syntetiske kjønnshormoner i prevensjon hemmer hovedsakelig eggløsningen og endrer slimhinnen og livmorhalsslimet.',
    },
    {
      question: 'Hva utløser eggløsningen midt i menstruasjonssyklusen?',
      options: ['En kraftig topp i LH', 'Et fall i alle hormoner', 'Økt insulinnivå', 'Lav kroppstemperatur'],
      explanation: 'En kraftig økning (LH-topp) utløser at den modne follikkelen sprekker og slipper egget fri – selve eggløsningen.',
    },
  ],
  'biologi-2-4-4': [
    {
      question: 'Hva er et fiksert handlingsmønster (FAP)?',
      options: ['En medfødt atferdssekvens som utløses av en bestemt nøkkelstimulus', 'En atferd som læres helt fra bunnen', 'En tilfeldig bevegelse uten årsak', 'En refleks i ryggmargen'],
      explanation: 'Et fiksert handlingsmønster er en artsspesifikk, medfødt atferd som settes i gang av en spesifikk nøkkelstimulus og gjennomføres fullt ut.',
    },
    {
      question: 'Hva er klassisk betinging?',
      options: ['En nøytral stimulus knyttes til en ubetinget stimulus gjennom gjentatt kobling', 'Atferd belønnes eller straffes for å øke eller hemme den', 'En medfødt refleks', 'En tilfeldig læring uten stimulus'],
      explanation: 'Ved klassisk betinging (Pavlov) lærer dyret å assosiere en nøytral stimulus med en ubetinget stimulus, slik at den utløser samme respons.',
    },
    {
      question: 'Hva kjennetegner preging (imprinting)?',
      options: ['Læring i en kritisk periode tidlig i livet som er vanskelig å reversere', 'Læring som kan skje når som helst i livet', 'En medfødt refleks uten læring', 'En atferd som forsvinner over natten'],
      explanation: 'Preging skjer i en begrenset, sensitiv periode tidlig i livet (f.eks. andunger som følger første bevegelige objekt) og er vanskelig å endre senere.',
    },
    {
      question: 'Hva er forskjellen på medfødt og lært atferd?',
      options: ['Medfødt atferd er genetisk bestemt; lært atferd utvikles gjennom erfaring', 'Lært atferd er genetisk bestemt; medfødt utvikles gjennom erfaring', 'De er identiske', 'Bare planter har medfødt atferd'],
      explanation: 'Medfødt atferd er nedarvet og krever ikke erfaring, mens lært atferd formes av erfaring og påvirkning fra miljøet.',
    },
    {
      question: 'Hva er operant betinging?',
      options: ['Atferd endres avhengig av om den belønnes eller straffes', 'En nøytral stimulus kobles til en refleks', 'En medfødt handlingssekvens', 'Preging i kritisk periode'],
      explanation: 'Ved operant betinging (Skinner) øker atferd som belønnes i frekvens, mens atferd som straffes avtar – læring gjennom konsekvenser.',
    },
  ],
  'biologi-2-4-5': [
    {
      question: 'Hva er naturlig seleksjon?',
      options: ['Individer med høyere fitness overlever og reproduserer mer enn andre', 'Alle individer reproduserer like mye', 'Egenskaper endres tilfeldig uten miljøpåvirkning', 'Organismer velger selv hvilke gener de vil ha'],
      explanation: 'Naturlig seleksjon er prosessen der arvelige egenskaper som gir høyere fitness blir vanligere fordi disse individene får flere levedyktige avkom.',
    },
    {
      question: 'Hva er en tilpasning (adaptasjon)?',
      options: ['En arvelig egenskap formet av naturlig seleksjon som øker overlevelse eller reproduksjon', 'En endring individet gjør i løpet av livet og som ikke arves', 'En tilfeldig mutasjon uten effekt', 'En sykdom'],
      explanation: 'En tilpasning er en nedarvet morfologisk, fysiologisk eller atferdsmessig egenskap som er formet av seleksjon og øker organismens fitness.',
    },
    {
      question: 'Hva er artsdannelse (speciasjon)?',
      options: ['Prosessen der nye arter oppstår, ofte via reproduktiv isolasjon', 'Sammensmelting av to arter til én', 'Utryddelse av en art', 'En endring i ett individs DNA'],
      explanation: 'Artsdannelse skjer når populasjoner blir reproduktivt isolerte og utvikler seg uavhengig til de blir egne arter.',
    },
    {
      question: 'Hvilken rolle spiller mutasjoner i evolusjon?',
      options: ['De er kilden til ny genetisk variasjon som seleksjonen kan virke på', 'De stanser all evolusjon', 'De gir alltid bedre egenskaper', 'De forekommer aldri i naturen'],
      explanation: 'Mutasjoner skaper ny genetisk variasjon. Naturlig seleksjon virker så på denne variasjonen, men de fleste mutasjoner er nøytrale eller skadelige.',
    },
    {
      question: 'Hvorfor regnes fossiler som et viktig bevis for evolusjon?',
      options: ['De viser hvordan livsformer har endret seg gjennom geologisk tid', 'De beviser at arter aldri endrer seg', 'De viser fremtidige arter', 'De er bare tilfeldige steiner'],
      explanation: 'Fossiler dokumenterer endringer i livsformer over millioner av år og viser overgangsformer som støtter evolusjonsteorien.',
    },
  ],
  'biologi-2-4-6': [
    {
      question: 'Hva er seksuell seleksjon?',
      options: ['Seleksjon som virker gjennom forskjeller i parringssuksess', 'Seleksjon basert kun på overlevelse', 'Tilfeldig genflyt mellom populasjoner', 'Seleksjon som bare gjelder planter'],
      explanation: 'Seksuell seleksjon favoriserer egenskaper som øker sjansen for å skaffe partner og pare seg, selv om de ikke nødvendigvis øker overlevelsen.',
    },
    {
      question: 'Hva er intraseksuell seleksjon?',
      options: ['Konkurranse mellom individer av samme kjønn om tilgang til partnere', 'At det ene kjønnet velger partner fra det andre', 'Seleksjon mellom ulike arter', 'Tilfeldig parring'],
      explanation: 'Intraseksuell seleksjon er konkurranse innen samme kjønn (ofte hanner som slåss), mens interseksuell seleksjon handler om partnervalg.',
    },
    {
      question: 'Hva forklarer slektskapseleksjon (kin selection)?',
      options: ['Hvordan altruistisk atferd mot slektninger kan utvikles evolusjonært', 'Hvorfor arter aldri hjelper hverandre', 'Hvordan nye arter dannes', 'Hvorfor hanner alltid er større'],
      explanation: 'Slektskapseleksjon forklarer altruisme: ved å hjelpe slektninger fremmer individet kopier av sine egne gener, selv om det koster noe.',
    },
    {
      question: 'Hva er feromoner?',
      options: ['Kjemiske signalstoffer dyr bruker til kommunikasjon', 'En type lydsignal', 'Synlige fargemønstre', 'Et fordøyelsesenzym'],
      explanation: 'Feromoner er kjemiske stoffer som skilles ut og påvirker atferden til andre individer av samme art, f.eks. ved parring eller markering.',
    },
    {
      question: 'Hvorfor kan en kostbar pyntefjær (som hos påfugl) likevel bli vanligere gjennom evolusjon?',
      options: ['Den øker parringssuksessen gjennom seksuell seleksjon', 'Den øker overlevelsen mot rovdyr', 'Den har ingen funksjon', 'Den oppstår bare ved mutasjon hver generasjon'],
      explanation: 'Selv om praktfulle fjær kan redusere overlevelsen, kan de øke parringssuksessen så mye at seksuell seleksjon likevel favoriserer dem.',
    },
  ],
  'biologi-2-5-1': [
    {
      question: 'Hva er en populasjon?',
      options: ['En gruppe individer av samme art i samme område til samme tid', 'Alle artene i et økosystem', 'Et enkelt individ', 'Alle dyr på jorden'],
      explanation: 'En populasjon er individer av samme art som lever i samme område samtidig og kan utveksle gener gjennom reproduksjon.',
    },
    {
      question: 'Hva kjennetegner eksponentiell vekst?',
      options: ['Populasjonen øker med en konstant prosentandel per tidsenhet', 'Populasjonen er konstant', 'Veksten flater ut ved bæreevnen', 'Populasjonen synker jevnt'],
      explanation: 'Ved eksponentiell vekst ($N_t = N_0 \\cdot e^{rt}$) vokser populasjonen raskere og raskere når ressursene er ubegrensede.',
    },
    {
      question: 'Hva er bæreevnen (K) til et miljø?',
      options: ['Det maksimale antallet individer miljøet kan opprettholde over tid', 'Startstørrelsen til populasjonen', 'Vekstraten per individ', 'Antall arter i området'],
      explanation: 'Bæreevnen K er den øvre grensen for hvor mange individer ressursene i et område kan opprettholde over tid.',
    },
    {
      question: 'Hva kjennetegner en r-strateg?',
      options: ['Høy reproduksjonsrate, mange avkom og liten foreldreomsorg', 'Få avkom og mye foreldreomsorg', 'Lang levetid og sen kjønnsmodning', 'Ingen reproduksjon'],
      explanation: 'r-strateger satser på mange avkom raskt med lite omsorg og trives i ustabile miljøer. K-strateger satser på få, velpleide avkom i stabile miljøer.',
    },
    {
      question: 'Hva skjer med veksthastigheten når en populasjon nærmer seg bæreevnen i logistisk vekst?',
      options: ['Den avtar og populasjonen stabiliserer seg', 'Den øker uendelig', 'Den blir negativ med en gang', 'Den er upåvirket'],
      explanation: 'I logistisk vekst bremser veksten når populasjonen nærmer seg K, fordi ressursene blir knappe, og populasjonen stabiliserer seg rundt K.',
    },
  ],
  'biologi-2-5-2': [
    {
      question: 'Hva er en tetthetsavhengig faktor?',
      options: ['En faktor som påvirker populasjonen sterkere når tettheten øker', 'En faktor uavhengig av populasjonsstørrelsen', 'En faktor som bare gjelder planter', 'En tilfeldig hendelse uten mønster'],
      explanation: 'Tetthetsavhengige faktorer (f.eks. konkurranse, sykdom, predasjon) virker sterkere jo tettere populasjonen er, og regulerer den mot bæreevnen.',
    },
    {
      question: 'Hva er et eksempel på en tetthetsuavhengig faktor?',
      options: ['En kraftig storm eller skogbrann', 'Konkurranse om mat', 'Spredning av smittsom sykdom', 'Predasjon'],
      explanation: 'Tetthetsuavhengige faktorer som vær, brann og naturkatastrofer rammer like hardt uansett hvor stor eller liten populasjonen er.',
    },
    {
      question: 'Hvorfor øker ofte dødeligheten i en populasjon når tettheten blir høy?',
      options: ['Konkurransen om ressurser og spredning av sykdom øker', 'Ressursene blir ubegrensede', 'Predatorer forsvinner', 'Fødselsraten øker alltid'],
      explanation: 'Høy tetthet gir hardere konkurranse om mat og plass og lettere smittespredning, slik at dødeligheten stiger og veksten bremses.',
    },
    {
      question: 'Hvordan kan predasjon regulere en byttedyrpopulasjon?',
      options: ['Flere predatorer reduserer byttedyrtallet, som igjen påvirker predatorene', 'Predasjon har ingen effekt på byttedyr', 'Predatorer øker byttedyrtallet', 'Byttedyr blir immune'],
      explanation: 'Predator- og byttedyrpopulasjoner svinger i takt: når byttedyr øker, øker predatorene, som så reduserer byttedyrene, og syklusen gjentas.',
    },
    {
      question: 'Hva menes med at en populasjon svinger rundt bæreevnen?',
      options: ['Antallet varierer over og under K i stedet for å være helt konstant', 'Populasjonen vokser uendelig', 'Populasjonen dør alltid ut', 'Antallet er nøyaktig likt hvert år'],
      explanation: 'Reelle populasjoner holder seg sjelden helt på K, men svinger over og under bæreevnen ettersom regulerende faktorer slår inn med forsinkelse.',
    },
  ],
  'biologi-2-5-3': [
    {
      question: 'Hva er predasjon?',
      options: ['En interaksjon der en predator fanger og spiser et byttedyr (+/–)', 'Et samarbeid som gagner begge arter (+/+)', 'En interaksjon uten effekt på noen (0/0)', 'Konkurranse mellom samme art'],
      explanation: 'Predasjon er en interspesifikk interaksjon der predatoren tjener på (+) og byttedyret taper på (–) forholdet.',
    },
    {
      question: 'Hva er en arts økologiske nisje?',
      options: ['Artens totale rolle og krav i økosystemet', 'Bare stedet arten lever', 'Antall individer i populasjonen', 'En type byttedyr'],
      explanation: 'Den økologiske nisjen omfatter alle de abiotiske og biotiske forholdene en art trenger og dens rolle i økosystemet.',
    },
    {
      question: 'Hva er parasittisme?',
      options: ['En parasitt lever på/i en vert og skader den (+/–)', 'Begge arter har nytte (+/+)', 'Ingen påvirkes (0/0)', 'En art spiser en annen helt opp umiddelbart'],
      explanation: 'Ved parasittisme henter parasitten næring fra verten over tid, til skade for verten – en (+/–)-interaksjon der verten sjelden dør med en gang.',
    },
    {
      question: 'Hva kjennetegner mutualisme?',
      options: ['Begge arter har nytte av samspillet (+/+)', 'Den ene tjener, den andre taper', 'Ingen påvirkes', 'Den ene tjener uten å påvirke den andre'],
      explanation: 'Mutualisme er en symbiose der begge parter har fordel (+/+), f.eks. bier og blomster eller nitrogenfikserende bakterier og belgvekster.',
    },
    {
      question: 'Hva sier konkurranseutelukkingsprinsippet?',
      options: ['To arter med helt lik nisje kan ikke leve sammen permanent', 'To arter med lik nisje lever alltid godt sammen', 'Konkurranse finnes ikke i naturen', 'Predasjon utelukker all konkurranse'],
      explanation: 'Hvis to arter har identisk nisje og konkurrerer om samme begrensede ressurs, vil den ene utkonkurrere den andre eller nisjene må deles opp.',
    },
  ],
  'biologi-2-5-4': [
    {
      question: 'Hvilket trofisk nivå utgjør produsentene?',
      options: ['Det første trofiske nivået', 'Det øverste trofiske nivået', 'Et nivå uten energi', 'Nedbryternivået'],
      explanation: 'Produsenter (autotrofe, f.eks. planter) er det første trofiske nivået og fanger solenergi gjennom fotosyntese.',
    },
    {
      question: 'Hvorfor sies det at energi strømmer i én retning gjennom et økosystem?',
      options: ['Energien går fra produsenter til konsumenter og tapes som varme, og kan ikke resirkuleres', 'Energien går i ring og kan gjenbrukes evig', 'Energi forsvinner aldri', 'Energien øker oppover i kjeden'],
      explanation: 'Energi flyter fra sola via produsenter til konsumenter og tapes hovedsakelig som varme på hvert nivå – den kan ikke resirkuleres slik stoffer kan.',
    },
    {
      question: 'Omtrent hvor mye av energien overføres til neste trofiske nivå i en næringskjede?',
      options: ['Rundt 10 %', 'Rundt 90 %', 'Rundt 50 %', 'Nesten 100 %'],
      explanation: 'Bare omtrent 10 % av energien på ett nivå overføres til neste; resten tapes som varme og til livsprosesser. Dette begrenser antall ledd i næringskjeder.',
    },
    {
      question: 'Hva er netto primærproduksjon (NPP)?',
      options: ['Biomassen produsentene lager minus det de selv bruker til celleånding', 'All energi i økosystemet', 'Energien konsumentene bruker', 'Mengden nedbrutt materiale'],
      explanation: 'NPP er den delen av produsentenes produserte biomasse som er tilgjengelig for konsumentene, etter at produsentenes egen respirasjon er trukket fra.',
    },
    {
      question: 'Hva er et næringsnett?',
      options: ['En oversikt over alle de sammenkoblede næringskjedene i et økosystem', 'En enkelt rett næringskjede', 'En liste over alle artene uten relasjoner', 'Et kart over geografisk utbredelse'],
      explanation: 'Et næringsnett viser hvordan mange næringskjeder henger sammen og hvordan energi og stoffer flyter mellom artene i et økosystem.',
    },
  ],
  'biologi-2-5-5': [
    {
      question: 'Hvilken prosess binder atmosfærisk CO₂ inn i organisk materiale i karbonkretsløpet?',
      options: ['Fotosyntese', 'Celleånding', 'Forbrenning', 'Forvitring'],
      explanation: 'Produsenter binder CO₂ fra atmosfæren gjennom fotosyntese og bygger det inn i organiske molekyler. Celleånding og forbrenning frigjør det igjen.',
    },
    {
      question: 'Hva gjør nitrogenfiksering i nitrogenkretsløpet?',
      options: ['Omdanner atmosfærisk N₂ til former planter kan ta opp', 'Frigjør N₂ til atmosfæren', 'Bryter ned nitrat til N₂', 'Binder fosfor i jord'],
      explanation: 'Nitrogenfiksering, særlig av bakterier, omdanner det stabile N₂ til ammonium/nitrat som planter kan ta opp og bruke til å bygge proteiner.',
    },
    {
      question: 'Hva er spesielt med fosforkretsløpet sammenlignet med karbon- og nitrogenkretsløpet?',
      options: ['Det har ingen gassfase og foregår hovedsakelig gjennom bergarter og vann', 'Det skjer bare i atmosfæren', 'Fosfor er en drivhusgass', 'Det involverer ikke levende organismer'],
      explanation: 'Fosfor har ingen gassfase og sirkulerer gjennom forvitring av bergarter, jord, vann og organismer, noe som gjør syklusen langsom.',
    },
    {
      question: 'Hvilke hovedprosesser inngår i vannkretsløpet?',
      options: ['Fordampning, transpirasjon, kondensasjon og nedbør', 'Bare nedbør', 'Fotosyntese og celleånding', 'Forvitring og erosjon alene'],
      explanation: 'Vannkretsløpet drives av fordampning og transpirasjon (vann opp), kondensasjon (skydannelse) og nedbør (vann ned), drevet av solenergi.',
    },
    {
      question: 'Hvorfor kalles disse kretsløpene «biogeokjemiske»?',
      options: ['Fordi stoffene sirkulerer mellom levende (bio), geologiske (geo) og kjemiske deler av jorden', 'Fordi de bare gjelder bergarter', 'Fordi de bare skjer i atmosfæren', 'Fordi de ikke involverer kjemi'],
      explanation: 'Begrepet viser at grunnstoffene sirkulerer mellom biosfæren (levende), geosfæren/hydrosfæren (geologisk) og atmosfæren gjennom kjemiske omdanninger.',
    },
  ],
  'biologi-2-5-6': [
    {
      question: 'Hvilke tre nivåer omfatter biologisk mangfold (biodiversitet)?',
      options: ['Genetisk mangfold, artsmangfold og økosystemmangfold', 'Bare antall arter', 'Bare antall individer', 'Klima, jord og vann'],
      explanation: 'Biodiversitet måles på tre nivåer: variasjon innen arter (genetisk), antall arter (arts-) og variasjon av økosystemer.',
    },
    {
      question: 'Hva er den største enkelttrusselen mot biologisk mangfold globalt?',
      options: ['Habitattap', 'Vulkanutbrudd', 'Jordskjelv', 'Solformørkelser'],
      explanation: 'Ødeleggelse, forringelse og fragmentering av leveområder (habitattap) er den viktigste årsaken til tap av biologisk mangfold på verdensbasis.',
    },
    {
      question: 'Hva er rødlista?',
      options: ['En vitenskapelig oversikt over arter med risiko for å dø ut', 'En liste over alle vanlige arter', 'En oversikt over fredede områder', 'En liste over fremmede arter'],
      explanation: 'Rødlista vurderer hvilke arter som har risiko for å dø ut i et område. I Norge utarbeides den av Artsdatabanken.',
    },
    {
      question: 'Hvorfor er genetisk mangfold viktig for en art?',
      options: ['Det gir bedre evne til å tilpasse seg endringer og motstå sykdom', 'Det gjør alle individer helt like', 'Det hindrer all evolusjon', 'Det har ingen betydning'],
      explanation: 'Genetisk variasjon gir råmateriale for tilpasning. Arter med lite genetisk mangfold er mer sårbare for sykdom og miljøendringer.',
    },
    {
      question: 'Hvordan kan fremmede (introduserte) arter true biologisk mangfold?',
      options: ['De kan utkonkurrere eller spise hjemmehørende arter', 'De øker alltid mangfoldet', 'De har ingen effekt', 'De gjør lokale arter sterkere'],
      explanation: 'Fremmede arter kan mangle naturlige fiender og utkonkurrere, spise eller smitte hjemmehørende arter, og dermed redusere mangfoldet.',
    },
  ],
  'biologi-2-5-7': [
    {
      question: 'Hva er drivhuseffekten?',
      options: ['At drivhusgasser absorberer og re-emitterer langbølget varmestråling fra jorden', 'At sollys reflekteres bort fra jorden', 'At jorden mister all varme til verdensrommet', 'At havet koker bort'],
      explanation: 'Drivhuseffekten oppstår når gasser som CO₂ og metan fanger langbølget varmestråling fra jordoverflaten og holder på varmen i atmosfæren.',
    },
    {
      question: 'Hva er artsforflytning (range shift) som respons på klimaendringer?',
      options: ['At arter flytter utbredelsesområdet sitt, ofte mot polene eller høyere opp', 'At arter slutter å reprodusere', 'At arter blir genetisk like', 'At arter dør ut momentant'],
      explanation: 'Når klimaet endres, flytter mange arter utbredelsen mot kjøligere områder (mot polene eller høyere i terrenget) for å finne egnede forhold.',
    },
    {
      question: 'Hva er en positiv tilbakekobling i klimasystemet?',
      options: ['En prosess som forsterker den opprinnelige oppvarmingen', 'En prosess som demper oppvarmingen', 'En prosess uten effekt', 'En prosess som bare gjelder dyr'],
      explanation: 'Positiv tilbakekobling forsterker endringen, f.eks. issmelting som reduserer albedo, slik at mer varme absorberes og smeltingen øker ytterligere.',
    },
    {
      question: 'Hvordan kan klimaendringer påvirke samspillet mellom arter?',
      options: ['Ulike arter kan endre seg i utakt, f.eks. blomstring og pollinatorenes ankomst', 'Alle arter endrer seg helt likt', 'Samspill påvirkes aldri av klima', 'Bare planter påvirkes'],
      explanation: 'Klimaendringer kan forskyve timingen av biologiske hendelser ulikt for ulike arter, slik at f.eks. planter blomstrer før pollinatorene er på plass.',
    },
    {
      question: 'Hvorfor regnes økt CO₂ fra fossilt brensel som en hoveddriver av dagens oppvarming?',
      options: ['Forbrenning frigjør lagret karbon og øker atmosfærens drivhusgassnivå', 'CO₂ kjøler ned atmosfæren', 'Fossilt brensel binder CO₂', 'CO₂ er ikke en drivhusgass'],
      explanation: 'Forbrenning av kull, olje og gass frigjør karbon som har vært lagret i millioner av år, øker atmosfærens CO₂-nivå og forsterker drivhuseffekten.',
    },
  ],
  'biologi-2-6-1': [
    {
      question: 'Hva gjør et restriksjonsenzym?',
      options: ['Gjenkjenner en spesifikk DNA-sekvens og klipper DNA-et der', 'Limer sammen DNA-fragmenter', 'Kopierer DNA eksponentielt', 'Oversetter mRNA til protein'],
      explanation: 'Restriksjonsenzymer kutter DNA ved bestemte gjenkjenningssekvenser og er sentrale verktøy for å klippe og lime gener i genteknologi.',
    },
    {
      question: 'Hva er hovedoppgaven til DNA-ligase i genteknologi?',
      options: ['Koble sammen DNA-fragmenter med fosfodiesterbindinger', 'Klippe DNA i biter', 'Kopiere DNA', 'Fjerne nitrogenbaser'],
      explanation: 'DNA-ligase «limer» sammen DNA-fragmenter ved å danne fosfodiesterbindinger, f.eks. når et gen settes inn i en vektor.',
    },
    {
      question: 'Hva er en plasmidvektor brukt til i genteknologi?',
      options: ['Å frakte og kopiere et innsatt gen inni en bakterie', 'Å klippe DNA i biter', 'Å oversette gener til protein', 'Å sekvensere DNA'],
      explanation: 'Plasmider er små sirkulære DNA-molekyler som brukes som vektorer for å føre fremmede gener inn i bakterier, der de kopieres og uttrykkes.',
    },
    {
      question: 'Hva er et genbibliotek?',
      options: ['En samling kloner som til sammen dekker DNA-et fra en organisme', 'En database med bilder', 'En liste over alle proteiner', 'Et lager av RNA-primere'],
      explanation: 'Et genbibliotek er en samling kloner der hvert klon inneholder et DNA-fragment, slik at hele genomet (eller alle uttrykte gener) er representert.',
    },
    {
      question: 'Hvorfor er det viktig at restriksjonsenzymer kutter ved bestemte, kjente sekvenser?',
      options: ['Det gir kontrollerte, forutsigbare DNA-fragmenter som kan settes sammen presist', 'Det gjør kuttene helt tilfeldige', 'Det hindrer at DNA-et kan brukes', 'Det ødelegger genet'],
      explanation: 'Fordi enzymene kutter ved spesifikke sekvenser, får man definerte fragmenter med kjente ender, som kan limes sammen på forutsigbar måte.',
    },
  ],
  'biologi-2-6-2': [
    {
      question: 'Hva er CRISPR-Cas9 basert på?',
      options: ['Bakteriers naturlige immunforsvar mot virus', 'Plantenes fotosyntese', 'Menneskets immunforsvar', 'Mitokondrienes energiproduksjon'],
      explanation: 'CRISPR-Cas9 stammer fra et forsvarssystem bakterier bruker mot virus, og er tilpasset som et presist genredigeringsverktøy.',
    },
    {
      question: 'Hvilken rolle har Cas9-enzymet i CRISPR?',
      options: ['Det kutter DNA-tråden på det stedet guide-RNA peker ut', 'Det leser av genet til protein', 'Det limer sammen DNA', 'Det lager RNA-primere'],
      explanation: 'Cas9 er en nuklease som klipper begge DNA-trådene på det stedet guide-RNA leder den til, slik at genet kan endres.',
    },
    {
      question: 'Hva kan CRISPR-Cas9 brukes til i genterapi?',
      options: ['Rette opp sykdomsfremkallende mutasjoner i gener', 'Øke kroppstemperaturen', 'Erstatte blodet', 'Lage flere kromosomer'],
      explanation: 'CRISPR kan brukes til å reparere eller deaktivere muterte gener som forårsaker arvelige sykdommer, og er en lovende metode i genterapi.',
    },
    {
      question: 'Hvorfor er CRISPR-Cas9 mer presist enn eldre genteknologiske metoder?',
      options: ['Guide-RNA gir nøyaktig målretting til en spesifikk DNA-sekvens', 'Det virker tilfeldig over hele genomet', 'Det endrer alle gener samtidig', 'Det krever ingen DNA-gjenkjenning'],
      explanation: 'Ved å bytte ut guide-RNA-sekvensen kan man styre Cas9 til nesten hvilken som helst målsekvens med høy presisjon.',
    },
    {
      question: 'Hva er en sentral etisk bekymring ved CRISPR i menneskeembryoer?',
      options: ['Endringene blir arvelige og kan påvirke fremtidige generasjoner', 'Metoden virker bare på bakterier', 'Den kan ikke endre DNA', 'Den er for upresis til å brukes i det hele tatt'],
      explanation: 'Redigering av kimbanen (embryoer/kjønnsceller) gir arvelige endringer, noe som reiser etiske spørsmål om samtykke, sikkerhet og «designerbarn».',
    },
  ],
  'biologi-2-6-3': [
    {
      question: 'Hva brukes PCR (polymerase chain reaction) til?',
      options: ['Å lage mange kopier av en bestemt DNA-sekvens', 'Å oversette DNA til protein', 'Å klippe DNA i fragmenter', 'Å fjerne mutasjoner'],
      explanation: 'PCR amplifiserer (kopierer) en valgt DNA-sekvens eksponentielt, slik at man får nok DNA til analyse fra en liten startprøve.',
    },
    {
      question: 'Hvilke tre temperatursteg gjentas i hver PCR-syklus?',
      options: ['Denaturering, hybridisering (annealing) og forlengelse', 'Fotosyntese, respirasjon og gjæring', 'Transkripsjon, spleising og translasjon', 'Kutting, liming og sekvensering'],
      explanation: 'PCR veksler mellom denaturering (skille trådene), hybridisering (primere binder) og forlengelse (polymerase lager ny DNA), gjentatt mange ganger.',
    },
    {
      question: 'Hvorfor brukes en varmestabil DNA-polymerase (Taq) i PCR?',
      options: ['Den tåler de høye temperaturene under denatureringen', 'Den virker bare ved romtemperatur', 'Den lager RNA', 'Den kutter DNA'],
      explanation: 'Taq-polymerase fra en varmekjær bakterie tåler de høye temperaturene i denatureringssteget, slik at den ikke ødelegges mellom syklusene.',
    },
    {
      question: 'Hva bestemmer Sanger-sekvensering?',
      options: ['Rekkefølgen av nukleotider i et DNA-fragment', 'Antall kromosomer i en celle', 'Mengden protein i en prøve', 'Cellens energiforbruk'],
      explanation: 'Sanger-sekvensering (kjedetermineringsmetoden) bruker fluorescensmerkede dideoksynukleotider for å lese av basesekvensen i et DNA-fragment.',
    },
    {
      question: 'Hvorfor gir PCR eksponentiell økning i antall DNA-kopier?',
      options: ['Hver kopi blir mal i neste syklus, så mengden dobles hver gang', 'Bare én kopi lages totalt', 'Antallet øker lineært', 'DNA-et brytes ned i hver syklus'],
      explanation: 'Siden alle nye tråder fungerer som maler i neste syklus, dobles mengden DNA omtrent for hver runde, og veksten blir eksponentiell.',
    },
  ],
  'biologi-2-6-4': [
    {
      question: 'Hvilke to egenskaper definerer en stamcelle?',
      options: ['Selvfornyelse og evne til å differensiere til andre celletyper', 'Bare evne til å dø raskt', 'Manglende cellekjerne', 'Evnen til å produsere antistoffer'],
      explanation: 'En stamcelle kan både fornye seg selv (dele seg og gi nye stamceller) og differensiere til mer spesialiserte celletyper.',
    },
    {
      question: 'Hva er induserte pluripotente stamceller (iPSC)?',
      options: ['Voksne celler omprogrammert til en pluripotent tilstand', 'Celler hentet direkte fra embryoer', 'Ferdig spesialiserte muskelceller', 'Bakterier med innsatt gen'],
      explanation: 'iPSC lages ved å omprogrammere voksne, differensierte celler tilbake til en pluripotent tilstand ved hjelp av bestemte transkripsjonsfaktorer.',
    },
    {
      question: 'Hva betyr det at en stamcelle er pluripotent?',
      options: ['Den kan utvikle seg til nesten alle celletyper i kroppen', 'Den kan bare bli én celletype', 'Den kan ikke dele seg', 'Den danner et helt nytt individ alene'],
      explanation: 'Pluripotente stamceller kan gi opphav til celler fra alle de tre kimlagene, men ikke til et helt nytt individ (det er totipotente celler).',
    },
    {
      question: 'Hvorfor er iPSC etisk fordelaktig sammenlignet med embryonale stamceller?',
      options: ['De lages fra pasientens egne voksne celler uten å bruke embryoer', 'De krever flere embryoer', 'De kan ikke differensiere', 'De er alltid kreftfremkallende'],
      explanation: 'iPSC lages fra voksne celler, slik at man unngår den etiske problematikken ved å bruke embryoer, og de kan dessuten matche pasientens eget vev.',
    },
    {
      question: 'Hva er et mål med regenerativ medisin?',
      options: ['Erstatte eller reparere skadet vev ved hjelp av stamceller', 'Fjerne alle stamceller fra kroppen', 'Stoppe celledeling helt', 'Lage flere kromosomer'],
      explanation: 'Regenerativ medisin bruker stamceller til å erstatte, gjenoppbygge eller reparere skadet eller sykt vev, f.eks. ved organskade.',
    },
  ],
  'biologi-2-6-5': [
    {
      question: 'Hva er en genmodifisert organisme (GMO)?',
      options: ['En organisme der DNA-et er endret med genteknologi på en måte som ikke skjer naturlig', 'En organisme avlet kun gjennom vanlig krysning', 'En organisme uten DNA', 'En utdødd art'],
      explanation: 'En GMO har fått genmaterialet endret ved hjelp av genteknologiske metoder, for eksempel innsetting av et gen fra en annen art.',
    },
    {
      question: 'Hva er en transgen organisme?',
      options: ['En organisme med innsatte gener fra en annen art', 'En organisme uten gener', 'En organisme med dobbelt så mange kromosomer', 'En organisme avlet naturlig'],
      explanation: 'En transgen organisme inneholder gener fra en annen art, f.eks. Bt-mais med et bakteriegen som gir innebygd insektresistens.',
    },
    {
      question: 'Hva regulerer genteknologiloven i Norge?',
      options: ['Fremstilling, import, utsetting og bruk av GMO', 'Bare matvareprisene', 'Trafikkregler', 'Skatt på landbruk'],
      explanation: 'Genteknologiloven (1993) regulerer all fremstilling og bruk av genmodifiserte organismer i Norge og krever blant annet vurdering av etikk og bærekraft.',
    },
    {
      question: 'Hva er et mulig argument FOR bruk av genmodifiserte planter?',
      options: ['De kan gi høyere avling og bedre motstand mot sykdom og tørke', 'De kan aldri gi noen fordeler', 'De fjerner all genetisk variasjon', 'De krever alltid mer sprøytemidler'],
      explanation: 'GMO-planter kan utvikles for å gi større avling, motstand mot skadedyr og tørke, eller bedre næringsinnhold, noe som kan styrke matsikkerheten.',
    },
    {
      question: 'Hvorfor er bruk av GMO et omdiskutert tema?',
      options: ['Det reiser spørsmål om miljørisiko, etikk og langsiktige konsekvenser', 'Alle er enige om at det er helt risikofritt', 'GMO er forbudt i hele verden', 'GMO påvirker ikke samfunnet'],
      explanation: 'Debatten gjelder mulige økologiske effekter, spredning til ville arter, etiske sider og usikkerhet om langtidsvirkninger, veid mot nytteverdien.',
    },
  ],
  'biologi-2-6-6': [
    {
      question: 'Hva sier føre-var-prinsippet?',
      options: ['Ved fare for alvorlig eller irreversibel skade skal man handle forsiktig selv ved vitenskapelig usikkerhet', 'Man skal alltid ta i bruk ny teknologi straks', 'Man trenger sikre bevis før noen tiltak', 'Man skal ignorere all risiko'],
      explanation: 'Føre-var-prinsippet sier at manglende full vitenskapelig sikkerhet ikke skal brukes som grunn til å utsette tiltak mot alvorlig eller irreversibel skade.',
    },
    {
      question: 'Hva er somatisk cellekjerneoverføring (SCNT)?',
      options: ['En kloningsmetode der en kroppscellekjerne settes inn i en eggcelle uten kjerne', 'En metode for å amplifisere DNA', 'En type vaksine', 'Sammenkobling av to sædceller'],
      explanation: 'Ved SCNT overføres cellekjernen fra en kroppscelle til en eggcelle som har fått fjernet sin egen kjerne – metoden som ble brukt til å klone sauen Dolly.',
    },
    {
      question: 'Hva er preimplantasjonsdiagnostikk (PGD)?',
      options: ['Genetisk undersøkelse av embryoer fra IVF før de settes inn i livmoren', 'En metode for å klone dyr', 'Sekvensering av hele genomet til en voksen', 'En behandling mot kreft'],
      explanation: 'PGD undersøker embryoer fra prøverørsbefruktning genetisk før innsetting, slik at man kan velge bort embryoer med alvorlige arvelige sykdommer.',
    },
    {
      question: 'Hvorfor er genredigering av menneskeembryoer spesielt etisk omstridt?',
      options: ['Endringene arves videre, og embryoet kan ikke samtykke', 'Det er teknisk umulig', 'Det påvirker bare ett individ uten arvelige følger', 'Det er helt risikofritt'],
      explanation: 'Fordi endringer i kimbanen blir arvelige og embryoet ikke kan samtykke, reises sterke etiske spørsmål om sikkerhet, rettferdighet og menneskeverd.',
    },
    {
      question: 'Hva er et sentralt etisk hensyn når ny bioteknologi tas i bruk?',
      options: ['Å veie nytteverdi mot risiko, verdighet og rettferdig fordeling', 'Å bruke teknologien uansett konsekvenser', 'Å hindre all forskning', 'Å se bort fra menneskeverd'],
      explanation: 'Etisk vurdering av bioteknologi handler om å balansere mulig nytte mot risiko, respekt for menneskeverd, samtykke og rettferdig tilgang.',
    },
  ],
  'biologi-2-6-7': [
    {
      question: 'Hva kjennetegner en god vitenskapelig hypotese?',
      options: ['Den er testbar og kan falsifiseres', 'Den kan aldri motbevises', 'Den er basert på tro', 'Den trenger ikke kunne testes'],
      explanation: 'En god hypotese er en testbar, falsifiserbar forklaring – det må være mulig å gjøre en observasjon eller et forsøk som kan motbevise den.',
    },
    {
      question: 'Hva er funksjonen til en kontrollgruppe i et eksperiment?',
      options: ['Å gi et sammenligningsgrunnlag uten den uavhengige variabelen', 'Å motta dobbel dose av behandlingen', 'Å garantere et positivt resultat', 'Å erstatte målegruppen'],
      explanation: 'Kontrollgruppen utsettes ikke for den uavhengige variabelen og gir et sammenligningsgrunnlag, slik at man kan se om behandlingen faktisk har effekt.',
    },
    {
      question: 'Hva betyr det at et resultat er statistisk signifikant (p < 0,05)?',
      options: ['Det er liten sannsynlighet for at resultatet skyldes tilfeldigheter', 'Resultatet er garantert sant', 'Eksperimentet er feil', 'Det er stor sjanse for tilfeldighet'],
      explanation: 'En p-verdi under 0,05 betyr at det er mindre enn 5 % sannsynlighet for at resultatet skyldes tilfeldig variasjon alene.',
    },
    {
      question: 'Hva er den uavhengige variabelen i et eksperiment?',
      options: ['Den variabelen forskeren bevisst endrer for å se effekten', 'Variabelen som måles som resultat', 'En variabel som holdes konstant', 'En tilfeldig feilkilde'],
      explanation: 'Den uavhengige variabelen er det forskeren manipulerer, mens den avhengige variabelen er det man måler som respons.',
    },
    {
      question: 'Hvorfor bør et forsøk kunne gjentas av andre forskere?',
      options: ['Reproduserbare resultater styrker påliteligheten til funnene', 'For å skjule resultatene', 'Fordi det ikke spiller noen rolle', 'For å gjøre forsøket dyrere'],
      explanation: 'At andre kan gjenta forsøket og få samme resultat (reproduserbarhet) er sentralt for at funnene skal regnes som pålitelige og vitenskapelige.',
    },
  ],
  'biologi-2-6-8': [
    {
      question: 'Hva står forkortelsen IMRaD for i en vitenskapelig rapport?',
      options: ['Introduksjon, Metode, Resultater og Diskusjon', 'Idé, Måling, Resultat og Data', 'Innledning, Modell, Rapport og Drøfting', 'Intervju, Metode, Referanse og Diskusjon'],
      explanation: 'IMRaD er standardstrukturen for vitenskapelige artikler: Introduksjon, Metode, Resultater og Diskusjon.',
    },
    {
      question: 'Hva er fagfellevurdering (peer review)?',
      options: ['Uavhengige eksperter vurderer en artikkel før den publiseres', 'Forfatteren godkjenner sin egen artikkel', 'Publikum stemmer over resultatene', 'En metode for å samle data'],
      explanation: 'Fagfellevurdering er kvalitetssikring der uavhengige eksperter på feltet gransker en artikkel for å vurdere kvalitet og holdbarhet før publisering.',
    },
    {
      question: 'Hva er en metaanalyse?',
      options: ['En statistisk sammenstilling av resultater fra flere studier av samme spørsmål', 'Et enkeltstående eksperiment', 'En intervjuundersøkelse', 'En type mikroskopering'],
      explanation: 'En metaanalyse kombinerer data fra mange uavhengige studier for å gi et samlet, mer pålitelig bilde av et forskningsspørsmål.',
    },
    {
      question: 'Hvorfor er det viktig å oppgi kilder i en vitenskapelig rapport?',
      options: ['For å gi kreditt og la andre etterprøve grunnlaget', 'For å gjøre rapporten lengre', 'For å skjule hvor informasjonen kommer fra', 'Det er ikke nødvendig'],
      explanation: 'Kildehenvisninger gir andre mulighet til å etterprøve påstandene, gir kreditt til opphavspersonene og er en del av god forskningsetikk.',
    },
    {
      question: 'I hvilken del av en IMRaD-rapport tolker man resultatene og setter dem i sammenheng med tidligere forskning?',
      options: ['Diskusjonen', 'Metoden', 'Resultatene', 'Introduksjonen'],
      explanation: 'I diskusjonsdelen tolkes resultatene, de sammenlignes med tidligere forskning, og det vurderes hva de betyr og hvilke feilkilder som fantes.',
    },
  ],
};

export default quizData_biologi_2;
