import type { QuizQuestion } from './quiz-data';

const quizData_historie: Record<string, QuizQuestion[]> = {
  'historie-1': [
  {
    question: 'Hva er forskjellen mellom en primærkilde og en sekundærkilde?',
    options: ['Primærkilder er fra tiden man studerer, sekundærkilder er bearbeidede fremstillinger', 'Primærkilder er skriftlige, sekundærkilder er muntlige', 'Primærkilder er offisielle, sekundærkilder er uoffisielle', 'Primærkilder er objektive, sekundærkilder er subjektive'],
    explanation: 'Primærkilder er kilder fra den tiden man studerer (dagbøker, brev, fotografier), mens sekundarkilder er bearbeidede fremstillinger basert påprimaerkilder (historiebøker, artikler).',
  },
  {
    question: 'Hva menes med at en kilde har "tendens"?',
    options: ['Kilden har en bestemt hensikt eller vinkling', 'Kilden er gammel og slitt', 'Kilden er skrevet på et fremmed språk', 'Kilden er vanskelig a lese'],
    explanation: 'Tendens betyr at kilden har en bestemt hensikt eller vinkling. Skaperen kan onske a fremstille noe i et spesielt lys eller påvirke mottakeren.',
  },
  {
    question: 'Hvilke av disse er et eksempel påen materiell kilde?',
    options: ['En vikingtids okse', 'Et brev fra 1814', 'En avisartikkel', 'En dagbok'],
    explanation: 'Materielle kilder er gjenstander, bygninger, kunst, vapen og redskaper. Brev, avisartikler og dagbøker er skriftlige kilder.',
  },
  {
    question: 'Hva er hovedformalet med kildekritikk?',
    options: ['A vurdere kildens troverdighet og brukbarhet', 'A finne flest mulig kilder', 'A oversette kilder til norsk', 'A lage kopier av kilder'],
    explanation: 'Kildekritikk handler om a vurdere kildens troverdighet, representativitet og brukbarhet for a forstå fortiden.',
  },
  {
    question: 'Hva er forskjellen mellom levninger og beretninger?',
    options: ['Levninger er spor etter fortiden, beretninger er fortellinger om fortiden', 'Levninger er muntlige, beretninger er skriftlige', 'Levninger er falske, beretninger er ekte', 'Levninger er nye, beretninger er gamle'],
    explanation: 'Levninger er fysiske spor etter fortiden (bygninger, redskaper), mens beretninger er fortellinger om fortiden (kroniker, memoarer).',
  },
],


  'historie-2': [
  {
    question: 'Hva betyr ordet "demokrati"?',
    options: ['Folkestyre', 'Enmannsvelde', 'Adelsstyre', 'Prestestyre'],
    explanation: 'Demokrati kommer fra gresk "demos" (folk) og "kratos" (styre), og betyr folkestyre.',
  },
  {
    question: 'Hvilken bystat regnes som demokratiets vugge?',
    options: ['Aten', 'Sparta', 'Roma', 'Korint'],
    explanation: 'Aten utviklet det første demokratiet der mannlige borgere kunne delta og stemme i folkeforsamlingen.',
  },
  {
    question: 'Hva var Pax Romana?',
    options: ['En periode med fred og stabilitet i Romerriket', 'En romersk gud', 'En lov mot krig', 'En fredsavtale med Hellas'],
    explanation: 'Pax Romana var omtrent 200 årmed relativ fred og stabilitet i Romerriket (27 f.Kr. - 180 e.Kr.).',
  },
  {
    question: 'Hvem hadde IKKE politiske rettigheter i det athenske demokratiet?',
    options: ['Kvinner, slaver og fremmede', 'Menn over 18 år', 'Jordbrukere', 'Handverkere'],
    explanation: 'Bare frie menn var borgere i Aten. Kvinner, slaver og fremmede (metøker) var utelukket fra politisk deltakelse.',
  },
  {
    question: 'Nårfalt det vestrømerske riket?',
    options: ['476 e.Kr.', '27 f.Kr.', '800 e.Kr.', '1453 e.Kr.'],
    explanation: 'Det vestrømerske riket falt i 476 e.Kr. nården siste vestrømesrke keiseren ble avsatt.',
  },
],


  'historie-3': [
  {
    question: 'Hva var foydalisme?',
    options: ['Et hierarkisk system basert påjordeiendeler og lojalitetsbånd', 'Et demokratisk styresett', 'Et økonomisk system med fri handel', 'En religiøs bevegelse'],
    explanation: 'Foydalisme var et hierarkisk system der kongen sto overst, etterfulgt av vasaller/adelsmenn, riddere og bonder/leilendinger.',
  },
  {
    question: 'Nårrammet Svartedauden Norge?',
    options: ['1349', '1066', '1536', '1814'],
    explanation: 'Svartedauden kom til Norge i 1349 og drepte kanskje halvparten av befolkningen.',
  },
  {
    question: 'Hvem var påtoppen av det foydale hierarkiet?',
    options: ['Kongen', 'Paven', 'Ridderne', 'Bondene'],
    explanation: 'Kongen var overst i det foydale hierarkiet og eide i prinsippet all jord.',
  },
  {
    question: 'Hvilken periode kalles Norges storhetstid?',
    options: ['Under Hakon Hakonsson (1240-1319)', 'Vikingtiden', 'Kalmarunionen', 'Dansketiden'],
    explanation: 'Under Hakon Hakonsson var Norge påsitt største territorielt, med Island og Gronland, og fikk Landsloven av 1274.',
  },
  {
    question: 'Hva var korstogene?',
    options: ['Militaere ekspedisjoner for a erobre Det hellige land', 'Handelsreiser til Asia', 'Misjonsferd til Skandinavia', 'Vikingraid påEngland'],
    explanation: 'Korstogene (1095-1291) var militaere ekspedisjoner for a erobre Det hellige land fra muslimene.',
  },
],


  'historie-4': [
  {
    question: 'Hva betyr "renessanse"?',
    options: ['Gjenfodelse', 'Fornyelse', 'Revolusjon', 'Opplysning'],
    explanation: 'Renessanse betyr "gjenfodelse" og refererer til gjenoppdagelsen av antikkens kunst, litteratur og filosofi.',
  },
  {
    question: 'Hva kritiserte Martin Luther ved den katolske kirken?',
    options: ['Avlatshandel og korrupsjon', 'At kirken var for fattig', 'At kirken ikke hadde nok makt', 'At Bibelen var oversatt'],
    explanation: 'Luther kritiserte avlatshandel, korrupsjon og at kirken fokuserte påytre gjerninger fremfor indre tro.',
  },
  {
    question: 'Hvem utviklet maktfordelingsprinsippet?',
    options: ['Montesquieu', 'Voltaire', 'Rousseau', 'Locke'],
    explanation: 'Montesquieu utviklet maktfordelingsprinsippet med lovgivende, utovende og dømmende makt.',
  },
  {
    question: 'Hva var Gutenbergs viktigste oppfinnelse?',
    options: ['Trykkpressen', 'Kompasset', 'Kruttet', 'Teleskopet'],
    explanation: 'Gutenbergs trykkpresse (ca. 1450) revolusjonerte spredningen av kunnskap og muliggjorde masseproduksjon av bøker.',
  },
  {
    question: 'Nårble Norge luthersk?',
    options: ['1537', '1517', '1648', '1814'],
    explanation: 'Norge ble luthersk i 1537 ved kongens befaling, og kirken mistet jord og eiendom til kongen.',
  },
],


  'historie-5': [
  {
    question: 'Nårble den amerikanske uavhengighetserklæringen underskrevet?',
    options: ['4. juli 1776', '14. juli 1789', '17. mai 1814', '4. juli 1783'],
    explanation: 'Den amerikanske uavhengighetserklæringen ble underskrevet 4. juli 1776, skrevet av Thomas Jefferson.',
  },
  {
    question: 'Hva var den franske revolusjonens slagord?',
    options: ['Frihet, likhet, brorskap', 'Makt til folket', 'Leve kongen', 'Arbeid og fremgang'],
    explanation: 'Den franske revolusjonens slagord var "Frihet, likhet, brorskap" (Liberte, egalite, fraternite).',
  },
  {
    question: 'Hvor begynte den industrielle revolusjonen?',
    options: ['England', 'Frankrike', 'Tyskland', 'USA'],
    explanation: 'Den industrielle revolusjonen begynte i England på 1700-tallet pågrunn av kull, jernførekomster og kapital frå handel.',
  },
  {
    question: 'Nårfikk Norge sin grunnlov?',
    options: ['17. mai 1814', '4. juli 1776', '14. juli 1789', '7. juni 1905'],
    explanation: 'Norges grunnlov ble vedtatt påEidsvoll 17. mai 1814.',
  },
  {
    question: 'Hva er nasjonalisme?',
    options: ['Ideen om at folk med felles språk og kultur bør ha egen stat', 'Tro påkongens gudømmelige rett', 'Okonomisk liberalisme', 'Internasjonal solidaritet'],
    explanation: 'Nasjonalisme er ideen om at folk med felles språk, kultur og historie bør ha sin egen stat. Nasjonalisme har bidratt til både frigjøring og konflikter historisk.',
  },
],


  'historie-6': [
  {
    question: 'Omtrent hvor mye av Afrika kontrollerte europeere i 1914?',
    options: ['90%', '10%', '50%', '25%'],
    explanation: 'I 1914 kontrollerte europeere ca. 90% av Afrika, opp fra bare 10% i 1870.',
  },
  {
    question: 'Hva var "den hvite manns byrde"?',
    options: ['Ide om at europeere hadde plikt til a "sivilisere" andre folk', 'En sykdom som rammet europeere i tropene', 'Kostnaden ved a bygge kolonier', 'En lov som beskyttet urfolk'],
    explanation: '"Den hvite manns byrde" var en ideologisk rettferdiggjøring av imperialismen - at europeere hadde plikt til a "hjelpe" og "sivilisere" andre folk.',
  },
  {
    question: 'Hva skjedde påBerlinkonferansen 1884-85?',
    options: ['Europeiske stormakter delte Afrika mellom seg', 'Afrika ble uavhengig', 'Slaveriet ble avskaffet', 'FN ble grunnlagt'],
    explanation: 'Pa Berlinkonferansen møtes europeiske stormakter for a dele Afrika mellom seg. Ingen afrikanske ledere var invitert.',
  },
  {
    question: 'Hva er sosialdarwinisme?',
    options: ['Ideen om at noen folk er naturlig overlegne andre', 'Darwins teori om evolusjon', 'En politisk bevegelse for likhet', 'Studiet av sosiale insekter'],
    explanation: 'Sosialdarwinisme overforte Darwins evolusjonsteori til samfunn og "raser", og ble brukt til a rettferdiggjøre kolonialisme.',
  },
  {
    question: 'Hvilken kolonimakt hadde det største imperiet?',
    options: ['Storbritannia', 'Frankrike', 'Tyskland', 'Belgia'],
    explanation: 'Storbritanniå hadde det største imperiet, med kolonier over hele verden, inkludert India, deler av Afrika og Australia.',
  },
],


  'historie-7': [
  {
    question: 'Hvilken hendelse utloste første verdenskrig?',
    options: ['Skuddene i Sarajevo', 'Storming av Bastillen', 'Boston Tea Party', 'Pearl Harbor'],
    explanation: 'Forste verdenskrig ble utlost da den osterriksk-unngårske tronarvingen Franz Ferdinand ble drept i Sarajevo 28. juni 1914.',
  },
  {
    question: 'Hva var skyttergravskrig?',
    options: ['Soldater gravde seg ned i graver og fronten sto nesten stille', 'Rask fremrykning med kavaleri', 'Krig til sjoss', 'Luftkrig med fly'],
    explanation: 'Pa vestfronten gravde soldatene seg ned i skyttergraver, og fronten beveget seg knapt påfire år.',
  },
  {
    question: 'Omtrent hvor mange dode i første verdenskrig?',
    options: ['17 millioner', '1 million', '50 millioner', '100 000'],
    explanation: 'Omtrent 17 millioner mennesker dode i første verdenskrig, inkludert både soldater og sivile.',
  },
  {
    question: 'Hvilket årtrakk USA inn i krigen?',
    options: ['1917', '1914', '1915', '1918'],
    explanation: 'USA var nøytrale til 1917, da tysk ubatkrig og Zimmermann-telegrammet forte til krigserklaring.',
  },
  {
    question: 'Hva var Versaillestraktaten?',
    options: ['Fredsavtalen som avsluttet første verdenskrig', 'En handelsavtale', 'En militaerallianse', 'En grunnlov'],
    explanation: 'Versaillestraktaten var fredsavtalen som avsluttet første verdenskrig og paforte Tyskland harde betingelser.',
  },
],


  'historie-8': [
  {
    question: 'Hva kjennetegner et totalitaert regime?',
    options: ['Staten søker total kontroll over samfunnet og individet', 'Demokratisk styreform', 'Begrenset kongemakt', 'Foderalt system'],
    explanation: 'Totalitarisme er en styreform der staten søker total kontroll over samfunnet og individet - ingen sfaere er privat.',
  },
  {
    question: 'Nårtok Hitler makten i Tyskland?',
    options: ['1933', '1929', '1939', '1945'],
    explanation: 'Hitler ble utnevnt til rikskansler i januar 1933 og etablerte raskt et diktatur.',
  },
  {
    question: 'Hva utloste den store depresjonen?',
    options: ['Borskrakket påWall Street i 1929', 'Forste verdenskrig', 'Oljekrisen', 'Revolusjonen i Russland'],
    explanation: 'Den store depresjonen ble utlost av borskrakket påWall Street i øktober 1929.',
  },
  {
    question: 'Hva var nazismens viktigste saertrekk sammenlignet med italiensk fascisme?',
    options: ['Biologisk rasisme og antisemittisme', 'Nasjonalisme', 'Antidemokrati', 'Lederprinsippet'],
    explanation: 'Nazismens viktigste saertrekk var biologisk rasisme og antisemittisme som kjerneelementer, noe som muliggjorde Holocaust.',
  },
  {
    question: 'Hva var fascismens syn pådemokrati?',
    options: ['Avvisning av demokrati og parlamentarisme', 'Stotte til demokrati', 'Noytralitet', 'Reform av demokratiet'],
    explanation: 'Fascismen avviste demokrati og parlamentarisme, og fremmet i stedet lederprinsippet og enpartistyre.',
  },
],


  'historie-9': [
  {
    question: 'Nårstårtet og sluttet andre verdenskrig?',
    options: ['1939-1945', '1914-1918', '1941-1945', '1935-1942'],
    explanation: 'Andre verdenskrig varte fra 1939 (Tysklands angrep påPolen) til 1945 (Tysk og japansk kapitulasjon).',
  },
  {
    question: 'Omtrent hvor mange jøder ble drept i Holocaust?',
    options: ['6 millioner', '1 million', '10 millioner', '100 000'],
    explanation: 'Omtrent 6 millioner jøder ble drept i det nazistiske folkemordet Holocaust.',
  },
  {
    question: 'Hva var vendepunktet påostfronten?',
    options: ['Slaget om Stalingrad', 'D-dagen', 'Pearl Harbor', 'Slaget om Midway'],
    explanation: 'Slaget om Stalingrad (1942-1943) var vendepunktet påostfronten, der Tyskland led et avgjørende nederlag.',
  },
  {
    question: 'Nårble Norge angrepet av Tyskland?',
    options: ['9. april 1940', '1. september 1939', '22. juni 1941', '6. juni 1944'],
    explanation: 'Tyskland angrep Norge 9. april 1940, og landet var okkupert til frigjøringen 8. mai 1945.',
  },
  {
    question: 'Hva var D-dagen?',
    options: ['Alliert invasjon av Normandie 6. juni 1944', 'Tysk angrep påSovjet', 'Japans angrep påPearl Harbor', 'Tysklands kapitulasjon'],
    explanation: 'D-dagen var den allierte invasjonen av Normandie i Frankrike 6. juni 1944, som åpnet vestfronten.',
  },
],


  'historie-10': [
  {
    question: 'Hva var den kalde krigen?',
    options: ['Konflikt mellom USA og Sovjet uten direkte krig', 'En krig i Arktis', 'En borgerkrig i Russland', 'En handelskrig'],
    explanation: 'Den kalde krigen var konflikten mellom USA og Sovjetunionen (1947-1991) uten direkte militaer konfrontasjon.',
  },
  {
    question: 'Nårfalt Berlinmuren?',
    options: ['9. november 1989', '9. november 1991', '3. øktober 1990', '25. desember 1991'],
    explanation: 'Berlinmuren falt 9. november 1989, et symbol påslutten av den kalde krigen.',
  },
  {
    question: 'Hva var Cuba-krisen?',
    options: ['En krise i 1962 da Sovjet plasserte atomraketter påCuba', 'En revolusjon påCuba', 'En handelskrig', 'En naturkatastrofe'],
    explanation: 'I 1962 oppdaget USA sovjetiske atomraketter påCuba. Verden sto påranden av atomkrig i 13 dager.',
  },
  {
    question: 'Nårble NATO grunnlagt?',
    options: ['1949', '1945', '1955', '1991'],
    explanation: 'NATO ble grunnlagt i 1949 som vestlig forsvarsallianse mot Sovjetunionen.',
  },
  {
    question: 'Nårble Sovjetunionen opplost?',
    options: ['Desember 1991', 'November 1989', 'Oktober 1990', 'Januar 1992'],
    explanation: 'Sovjetunionen ble opplost i desember 1991, som markerte slutten påden kalde krigen.',
  },
],


};

export default quizData_historie;
