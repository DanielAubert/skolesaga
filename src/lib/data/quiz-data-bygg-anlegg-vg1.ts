import type { QuizQuestion } from './quiz-data';

const quizData_byggAnleggVg1: Record<string, QuizQuestion[]> = {
  'bygg-anlegg-vg1-1-1': [
  {
    question: 'Hvilket byggemateriale er Norges mest tradisjonelle, og binder CO₂?',
    options: ['Tre', 'Betong', 'Stål', 'Tegl'],
    explanation: 'Tre er Norges mest tradisjonelle byggemateriale. Det er en fornybar ressurs som binder CO₂ og har god isolasjonsevne.',
  },
  {
    question: 'Hva er hovedbestanddelen (størst andel) i betong?',
    options: ['Tilslag (sand og grus)', 'Sement', 'Vann', 'Stål'],
    explanation: 'Tilslag (sand og grus) utgjør 65–75 % av betong. Sement er bindemiddelet (10–15 %) og vann 5–10 %.',
  },
  {
    question: 'Hvilken egenskap er betong svak i, slik at den må armeres?',
    options: ['Strekk', 'Trykk', 'Brann', 'Vann'],
    explanation: 'Betong er meget sterk i trykk, men svak i strekk. Derfor armeres den med stål som tar opp strekkreftene.',
  },
  {
    question: 'Hvilket treslag er mest brukt i Norge til bærekonstruksjoner og panel?',
    options: ['Gran', 'Eik', 'Lerk', 'Furu'],
    explanation: 'Gran er mest brukt i Norge: lett, rettvokst og lett å bearbeide. Furu er hardere og mer kvistet.',
  },
  {
    question: 'Hva er Leca og Ytong eksempler på?',
    options: ['Lette blokker med god isolasjonsevne', 'Massiv teglstein', 'Stålprofiler', 'Treplater'],
    explanation: 'Leca (lettklinker) og Ytong (gasbetong) er lette blokker med god isolasjonsevne som er lette å bearbeide.',
  },
],

  'bygg-anlegg-vg1-8-1': [
  {
    question: 'Hvilken tegning viser bygningen ovenfra (horisontalt snitt) med rom, dører og vinduer?',
    options: ['Plantegning', 'Fasadetegning', 'Snitttegning', 'Situasjonsplan'],
    explanation: 'En plantegning viser bygningen ovenfra med rom, dører og vegger – én per etasje. Fasadetegning viser utsiden.',
  },
  {
    question: 'På en tegning i målestokk 1:100 tilsvarer 5 cm hvor mye i virkeligheten?',
    options: ['5 meter', '50 cm', '500 meter', '0,5 meter'],
    explanation: '1:100 betyr at 1 cm = 100 cm. 5 cm × 100 = 500 cm = 5 meter i virkeligheten.',
  },
  {
    question: 'Hva er BIM?',
    options: ['En digital arbeidsmetode med en felles 3D-modell og all informasjon om bygget', 'Et nytt byggemateriale', 'En type sikringskurs', 'En målestokk for store bygg'],
    explanation: 'BIM (Building Information Modeling) er mer enn 3D-tegning – det er en database med geometri, materialer, kostnader, tidsplan og vedlikehold.',
  },
  {
    question: 'Hvilken målestokk gir mest detaljerte tegninger av en bygningsdetalj?',
    options: ['1:5', '1:50', '1:100', '1:200'],
    explanation: 'Jo mindre nevner, jo mer detaljert. 1:5 viser detaljer (1 cm = 5 cm), mens 1:100 brukes til plantegninger.',
  },
  {
    question: 'Hva angir en kotehøyde på en byggetegning?',
    options: ['Høyde over havet eller et referansepunkt', 'Bredden på en dør', 'Antall trinn i en trapp', 'Veggens tykkelse'],
    explanation: 'Kotehøyder angir høyde over havet eller referansepunkt, f.eks. +2,40 betyr 2,40 meter over referansen.',
  },
],

  'bygg-anlegg-vg1-3-1': [
  {
    question: 'Hvorfor utføres grunnundersøkelser før bygging?',
    options: ['For å finne grunnens bæreevne og avdekke problematisk grunn', 'For å bestemme husets farge', 'For å beregne strømforbruket', 'For å velge takstein'],
    explanation: 'Grunnundersøkelser finner bæreevne, avdekker kvikkleire og lignende, og lar oss dimensjonere fundamenter riktig for å unngå setningsskader.',
  },
  {
    question: 'Hvilket fundament er en helstøpt betongplate direkte på grunnen, brukt ved god grunn og lave bygg?',
    options: ['Plate på mark', 'Peler', 'Søylefundament', 'Bergskrue'],
    explanation: 'Plate på mark er en helstøpt plate direkte på grunnen – billig og enkelt ved god grunn og lave bygg.',
  },
  {
    question: 'Hva brukes peler til i fundamentering?',
    options: ['Å føre lasten ned til fast grunn eller berg ved dårlig grunn', 'Å isolere kjellerveggen', 'Å lede bort regnvann', 'Å armere betongplaten'],
    explanation: 'Peler er lange søyler som går ned til fast grunn eller berg, og brukes der grunnen er dårlig.',
  },
  {
    question: 'Hva er forskaling?',
    options: ['Formen som betongen støpes i', 'Armeringen i betongen', 'Et lag isolasjon under platen', 'En type fundament'],
    explanation: 'Forskaling er formen betongen støpes i. Den må være tett og sterk nok, og fjernes når betongen er herdnet.',
  },
  {
    question: 'Hvorfor bør betong støpes i lag på maks ca. 50 cm høyde om gangen?',
    options: ['For å unngå segregering og sikre god komprimering', 'For å spare betong', 'For at den skal herde raskere', 'For å gjøre den lettere'],
    explanation: 'Støping i lag og uten stort fall hindrer segregering (at grovt og fint tilslag skiller seg) og gir god komprimering.',
  },
],

  'bygg-anlegg-vg1-2-1': [
  {
    question: 'Hva er den vanligste konstruksjonsmetoden for trehus i Norge?',
    options: ['Bindingsverk', 'Laft', 'Stavverk', 'Massivtre'],
    explanation: 'Bindingsverk med vertikale stendere og sviller i topp og bunn, fylt med isolasjon, er den vanligste metoden for trehus i Norge.',
  },
  {
    question: 'Hvilken senteravstand (c/c) brukes vanligvis mellom stendere i bindingsverk?',
    options: ['60 cm', '30 cm', '120 cm', '90 cm'],
    explanation: 'Stendere (f.eks. 48×98 mm) plasseres vanligvis med 60 cm senteravstand (c/c).',
  },
  {
    question: 'Hva er svillstokken (undre sville) i en bindingsverksvegg?',
    options: ['Liggende trevirke nederst som boltes til fundamentet', 'Den vertikale bærende stolpen', 'Bjelken på toppen av taket', 'Isolasjonen i veggen'],
    explanation: 'Svillstokken er liggende trevirke nederst i veggen, boltet til fundamentet, og danner grunnlag for stenderne.',
  },
  {
    question: 'Hvilken takform har to takflater som møtes i et møne, og er vanligst i Norge?',
    options: ['Pulttak/saltak med møne', 'Flatt tak', 'Valmet tak', 'Buet tak'],
    explanation: 'Et tak med to takflater som møtes i et møne er vanligst i Norge. Et valmet tak har fire flater og er mer komplisert.',
  },
  {
    question: 'Hvilken sammenføyningsmetode i tre er sterkere – skruing eller vanlig spikring?',
    options: ['Skruing, fordi gjenget skrue gir bedre grep', 'Spikring, alltid', 'De er like sterke', 'Liming er svakest'],
    explanation: 'Skruing er sterkere enn spikring fordi den gjengede skruen gir bedre grep i trevirket.',
  },
],

  'bygg-anlegg-vg1-3-6': [
  {
    question: 'Hva binder murblokkene sammen og fordeler lasten?',
    options: ['Mørtel', 'Lim', 'Skruer', 'Isolasjon'],
    explanation: 'Mørtel binder blokkene sammen og fordeler lasten mellom dem.',
  },
  {
    question: 'Hva er Leca-blokker laget av?',
    options: ['Lettbetong med ekspandert leire (leca-korn)', 'Massiv teglstein', 'Ren betong uten hulrom', 'Gips'],
    explanation: 'Lettklinkerblokker (Leca) er hule blokker av lettbetong med leca-korn (ekspandert leire), med god isolasjonsevne.',
  },
  {
    question: 'Hva betyr mørtelklasse M10?',
    options: ['10 MPa trykkfasthet (vanlig bærende mur)', '10 cm fugetykkelse', '10 blokker per rad', '10 % kalk'],
    explanation: 'Mørtelklassen angir trykkfastheten. M10 betyr 10 MPa, som brukes til vanlig bærende mur.',
  },
  {
    question: 'Hva sjekker du med vater og lodd når du murer en blokk?',
    options: ['At blokken står både i vater og loddrett', 'Blokkens vekt', 'Mørtelens farge', 'Blokkens pris'],
    explanation: 'Hver blokk skal kontrolleres slik at den ligger i vater (vannrett) og står loddrett (vertikalt), og følger snoren.',
  },
  {
    question: 'Hvilket lag legges først ved pussing av en vegg?',
    options: ['Grunnpuss (grovere, jevner ut ujevnheter)', 'Finpuss', 'Maling', 'Tapet'],
    explanation: 'Grunnpussen (10–15 mm) legges først og jevner ut ujevnheter. Deretter kommer et tynnere lag finpuss for glatt overflate.',
  },
],

  'bygg-anlegg-vg1-7-4': [
  {
    question: 'Hvilket verktøy sjekker om noe er horisontalt (i vater)?',
    options: ['Vater', 'Lodd', 'Vinkelhake', 'Målebånd'],
    explanation: 'Et vater viser om noe er horisontalt – luftboblen skal stå mellom de to strekene. Et lodd sjekker det vertikale.',
  },
  {
    question: 'Hvilket elektrisk verktøy brukes til å bore i betong, stein og tegl?',
    options: ['Borhammer', 'Stikksag', 'Batteridrill for tre', 'Elektrisk høvel'],
    explanation: 'En borhammer kombinerer slag og rotasjon og borer i betong, stein og tegl. Batteridrill brukes mest til tre og metall.',
  },
  {
    question: 'Hvilket verktøy gir presis kapping i vinkler og er godt egnet for lister og gerikter?',
    options: ['Kappesag (gjærsag)', 'Sirkelsag', 'Stikksag', 'Borhammer'],
    explanation: 'Kappesag (gjærsag) gir presis kapping i vinkler og er godt egnet for lister og gerikter.',
  },
  {
    question: 'Hva kreves vanligvis for å kjøre gravemaskin på byggeplass?',
    options: ['Maskinførersertifikat', 'Ingenting spesielt', 'Bare førerkort klasse B', 'Fagbrev som murer'],
    explanation: 'Større maskiner som gravemaskin krever maskinførersertifikat og opplæring.',
  },
  {
    question: 'Hva er en viktig del av daglig vedlikehold av verktøy?',
    options: ['Rengjøring etter bruk', 'Male dem på nytt', 'Bytte hele verktøyet', 'La dem ligge ute'],
    explanation: 'Rengjøring etter bruk (fjerne sagflis, støv, betongsprut) gjør at verktøyet fungerer bedre og varer lenger.',
  },
],

  'bygg-anlegg-vg1-7-1': [
  {
    question: 'Hva er den vanligste dødsårsaken på byggeplass?',
    options: ['Fall fra høyder', 'Brann', 'Elektrisk støt', 'Drukning'],
    explanation: 'Fall fra høyder er hovedårsaken til dødsulykker i byggebransjen. Derfor er fallsikring så viktig.',
  },
  {
    question: 'Fra hvilken høyde må fallsikring være på plass?',
    options: ['Over 2 meter', 'Over 10 meter', 'Over 5 meter', 'Bare innendørs'],
    explanation: 'Ved arbeid over 2 meters høyde må fallsikring (stillas, rekkverk eller personlig utstyr) være på plass.',
  },
  {
    question: 'Hvilken vinkel skal en stige ha mot veggen?',
    options: ['Ca. 75 grader (1:4-forhold)', '45 grader', '90 grader (loddrett)', '30 grader'],
    explanation: 'En stige skal stå i ca. 75 graders vinkel, tommelfingerregel 1:4 (1 m ut for hver 4 m opp), og stikke minst 1 m over arbeidspunktet.',
  },
  {
    question: 'Hvilket personlig verneutstyr beskytter mot fallende gjenstander og støt mot hodet?',
    options: ['Hjelm', 'Vernebriller', 'Hørselsvern', 'Vernehansker'],
    explanation: 'Hjelm beskytter hodet mot fallende gjenstander og støt, og skal være CE-merket.',
  },
  {
    question: 'Hvilket nødnummer ringer du ved behov for ambulanse?',
    options: ['113', '110', '112', '911'],
    explanation: '113 er medisinsk nødtelefon (ambulanse/AMK). 110 er brann og 112 er politi.',
  },
],

  'bygg-anlegg-vg1-4-3': [
  {
    question: 'Hvilket isolasjonsmateriale er mest brukt i Norge og ikke brennbart?',
    options: ['Mineralull (glassull/steinull)', 'EPS (isopor)', 'XPS', 'Cellegummi'],
    explanation: 'Mineralull (glassull/steinull) er mest brukt, er ikke brennbart og gir god lyddemping. EPS er derimot brennbart.',
  },
  {
    question: 'Hvorfor brukes dampsperre i en konstruksjon?',
    options: ['For å hindre fuktig inneluft i å trenge inn i isolasjonen og kondensere', 'For å lede strøm bort', 'For å bære lasten i veggen', 'For å gjøre veggen tyngre'],
    explanation: 'Dampsperren (plastfolie på varm side) hindrer fuktig inneluft i å nå kald isolasjon der den kondenserer og kan gi råte og mugg.',
  },
  {
    question: 'På hvilken side av isolasjonen skal dampsperren plasseres i en yttervegg?',
    options: ['På innsiden (varm side)', 'På utsiden (kald side)', 'Midt i isolasjonen', 'Det spiller ingen rolle'],
    explanation: 'Dampsperren plasseres på den varme siden (innsiden) av isolasjonen for å stoppe fukten før den når den kalde sonen.',
  },
  {
    question: '200 mm mineralull med λ = 0,040 W/mK gir hvilken U-verdi? (U = 1/R, R = d/λ)',
    options: ['0,20 W/m²K', '0,40 W/m²K', '5,0 W/m²K', '0,04 W/m²K'],
    explanation: 'R = d/λ = 0,20/0,040 = 5 m²K/W. U = 1/R = 1/5 = 0,20 W/m²K.',
  },
  {
    question: 'Hva betyr en lav U-verdi for en bygningsdel?',
    options: ['God isolasjon (lite varme går gjennom)', 'Dårlig isolasjon', 'Høyt strømforbruk', 'Tykk vegg uansett'],
    explanation: 'U-verdien beskriver hvor mye varme som slipper gjennom. Jo lavere U-verdi, jo bedre isolasjon.',
  },
],

  'bygg-anlegg-vg1-4-5': [
  {
    question: 'På hvilke tre måter transporteres varme?',
    options: ['Ledning, stråling og konveksjon', 'Trykk, sug og fordamping', 'Lyd, lys og vibrasjon', 'Strøm, spenning og effekt'],
    explanation: 'Varme transporteres ved ledning (gjennom materialer), stråling (gjennom luft/rom) og konveksjon (luftbevegelse).',
  },
  {
    question: 'Hva er dugpunkt?',
    options: ['Temperaturen der luften blir mettet og fukt kondenserer til vann', 'Temperaturen der vann koker', 'Temperaturen der is smelter', 'Det høyeste lydnivået'],
    explanation: 'Dugpunktet er temperaturen der luften blir mettet og fukten kondenserer til vann, f.eks. på et kaldt vindu.',
  },
  {
    question: 'I hvilken enhet måles lyd?',
    options: ['Desibel (dB)', 'Watt (W)', 'Lumen (lm)', 'Pascal (Pa)'],
    explanation: 'Lyd er trykkbølger i luft og måles i desibel (dB). En normal samtale er ca. 60 dB.',
  },
  {
    question: 'Hvilken ventilasjonstype blåser ut og inn med varmegjenvinning, og gir minst varmetap?',
    options: ['Balansert ventilasjon', 'Naturlig ventilasjon', 'Avtrekksventilasjon', 'Ingen ventilasjon'],
    explanation: 'Balansert ventilasjon har vifte for både tilluft og avtrekk og kan ha varmegjenvinning, noe som gir minst varmetap.',
  },
  {
    question: 'Hva er en god metode for å dempe luftlyd mellom rom?',
    options: ['Bruke tunge materialer (masse), f.eks. betongvegg', 'Bruke lette, tynne vegger', 'Bore hull i veggen', 'Fjerne all isolasjon'],
    explanation: 'Tunge materialer (masse) demper luftlyd best. En betongvegg stopper lyd bedre enn en lett vegg.',
  },
],

  'bygg-anlegg-vg1-8-3': [
  {
    question: 'Hvilken fase i et byggeprosjekt kommer FØRST?',
    options: ['Konseptfase (idéfase)', 'Entreprisefase (bygging)', 'Ferdigstillelse', 'Prosjekteringsfase'],
    explanation: 'Rekkefølgen er konseptfase → prosjektering → entreprise (bygging) → ferdigstillelse. Konseptfasen skisserer behov.',
  },
  {
    question: 'Hva viser et Gantt-diagram?',
    options: ['Aktiviteter som søyler langs en tidslinje', 'Bygningens fysiske utforming', 'Strømforbruket per time', 'Antall ansatte i bedriften'],
    explanation: 'Et Gantt-diagram er en visuell fremdriftsplan der aktivitetene vises som søyler over tid.',
  },
  {
    question: 'En vegg på 100 m² koster 500 kr per m² ferdig. Hva blir totalkostnaden?',
    options: ['50 000 kr', '5 000 kr', '500 000 kr', '600 kr'],
    explanation: 'Enhetspriskalkyle: 100 m² × 500 kr/m² = 50 000 kr.',
  },
  {
    question: 'Hva inngår i indirekte kostnader på en byggeplass?',
    options: ['Rigg og drift, forsikring og avfallshåndtering', 'Bare trevirke og betong', 'Kun håndverkernes timelønn', 'Kun maskinleie'],
    explanation: 'Indirekte kostnader er rigg og drift av byggeplass, strøm, vann, forsikring, avfallshåndtering og prosjektledelse.',
  },
  {
    question: 'Hva er et mål med god ressursplanlegging?',
    options: ['Unngå at folk venter på hverandre og bruke riktig fagfolk til riktig jobb', 'Ha flest mulig folk samtidig', 'Bestille materialer etter at jobben er ferdig', 'La maskiner stå ubrukt lenge'],
    explanation: 'God ressursplanlegging gir riktig fagfolk til riktig jobb til riktig tid, uten at folk venter på hverandre.',
  },
],

  'bygg-anlegg-vg1-7-6': [
  {
    question: 'Omtrent hvor stor andel av verdens energiforbruk står byggebransjen for?',
    options: ['Ca. 40 %', 'Ca. 5 %', 'Ca. 15 %', 'Ca. 70 %'],
    explanation: 'Byggebransjen står for rundt 40 % av energiforbruket, 30 % av avfallet og 25 % av CO₂-utslippene.',
  },
  {
    question: 'Hvilket byggemateriale regnes som fornybart og binder CO₂?',
    options: ['Tre', 'Stål', 'Betong', 'Aluminium'],
    explanation: 'Tre er en fornybar ressurs som binder CO₂, og er derfor sentralt i bærekraftig bygging.',
  },
  {
    question: 'Hvilken miljøsertifisering er mest brukt for bygg i Norge?',
    options: ['BREEAM-NOR', 'ISO 9001', 'CE-merking', 'NEK 400'],
    explanation: 'BREEAM-NOR er den mest brukte miljøsertifiseringen for bygg i Norge, tilpasset fra det britiske BREEAM.',
  },
  {
    question: 'Hva kjennetegner sirkulær økonomi sammenlignet med lineær økonomi?',
    options: ['Ressurser holdes i bruk gjennom gjenbruk og resirkulering', 'Ta–lag–kast', 'Mer bruk av nye råvarer', 'Alt avfall brennes'],
    explanation: 'Lineær økonomi følger «ta–lag–kast». Sirkulær økonomi reduserer, gjenbruker og resirkulerer for å holde ressurser i bruk.',
  },
  {
    question: 'Hvordan bør rent, ubehandlet trevirke håndteres som avfall?',
    options: ['Sorteres for seg og kan brennes til energi', 'Kastes sammen med farlig avfall', 'Graves ned på byggeplassen', 'Blandes med betong'],
    explanation: 'Rent trevirke kan brennes til energi og må sorteres fra impregnert/behandlet tre, som er farlig avfall.',
  },
],

  'bygg-anlegg-vg1-8-5': [
  {
    question: 'Hvilket yrke bygger trekonstruksjoner som vegger, tak og gulv?',
    options: ['Tømmermann', 'Murer', 'Taktekker', 'Rørlegger'],
    explanation: 'En tømmermann bygger trekonstruksjoner – vegger, tak og gulv – i nybygg og rehabilitering.',
  },
  {
    question: 'Hva er hovedmodellen (2+2) i fagopplæringen?',
    options: ['2 år i skole og 2 år som lærling i bedrift', '2 år teori og 2 eksamener', '2 dager skole og 2 dager jobb per uke', '2 fagbrev på 2 år'],
    explanation: '2+2-modellen er 2 år i skole (VG1 + VG2) og 2 år som lærling i bedrift, før fagprøven.',
  },
  {
    question: 'Hva får du når fagprøven er bestått?',
    options: ['Fagbrev', 'Mesterbrev automatisk', 'Bachelorgrad', 'Førerkort'],
    explanation: 'Når fagprøven er bestått får du fagbrev og er fagarbeider. Mesterbrev krever i tillegg praksis og mesterutdanning.',
  },
  {
    question: 'Hvilket VG1-program gir grunnlag for alle byggfagene?',
    options: ['Bygg- og anleggsteknikk', 'Elektro og datateknologi', 'Helse- og oppvekstfag', 'Naturbruk'],
    explanation: 'VG1 Bygg- og anleggsteknikk gir grunnleggende kunnskaper og lar elevene prøve ut ulike byggyrker.',
  },
  {
    question: 'Hva er praksiskandidatordningen?',
    options: ['En vei til fagbrev for de som har jobbet lenge i faget uten fagbrev', 'En ordning for skoleelever på ungdomsskolen', 'En type lærlinglønn', 'En miljøsertifisering'],
    explanation: 'Praksiskandidatordningen lar personer med mange års allsidig praksis i faget gå opp til fagprøven uten ordinær læretid.',
  },
],

  'bygg-anlegg-vg1-3-8': [
  {
    question: 'Hvorfor er drenering rundt et bygg viktig?',
    options: ['For å beskytte fundament og kjeller mot fukt og frostskader', 'For å gjøre bygget tyngre', 'For å lede strøm bort', 'For å øke innetemperaturen'],
    explanation: 'Drenering leder bort vann og beskytter fundamentet og kjelleren mot fukt, råte, mugg og frostskader.',
  },
  {
    question: 'Hva slags rør brukes som drensledning?',
    options: ['Perforert plastrør (drensrør) med hull på undersiden', 'Tett kobberrør', 'Massivt betongrør uten hull', 'Isolert varmtvannsrør'],
    explanation: 'Et drensrør er et perforert plastrør med hull på undersiden som samler opp vann fra grunnen.',
  },
  {
    question: 'Hvilket minste fall bør en drensledning ha?',
    options: ['Minimum 1:100', 'Minimum 1:5', 'Ingen fall', 'Minimum 1:1'],
    explanation: 'Drensledningen legges med fall mot utslipp, minimum 1:100, slik at vannet renner bort.',
  },
  {
    question: 'Hva er en membran (noppefolie) på en grunnmur til for?',
    options: ['Å hindre fukt inn i kjellerveggen og lede vann ned til drensledningen', 'Å bære veggens last', 'Å isolere mot kulde', 'Å feste kledningen'],
    explanation: 'Membranen (noppefolie) legges utvendig og hindrer fukt i kjellerveggen samtidig som den leder vann ned til drensledningen.',
  },
  {
    question: 'Hvordan bør terrenget formes rundt et bygg for å lede bort overflatevann?',
    options: ['Med fall vekk fra bygget (minimum ca. 1:20)', 'Med fall mot bygget', 'Helt flatt', 'Med en grop rundt grunnmuren'],
    explanation: 'Terrenget skal ha fall vekk fra bygget (minimum ca. 1:20) slik at overflatevann ledes bort, ikke inn mot grunnmuren.',
  },
],

  'bygg-anlegg-vg1-7-3': [
  {
    question: 'Hvilken type fallsikring er best ifølge prioriteringsrekkefølgen?',
    options: ['Kollektiv sikring (f.eks. stillas med rekkverk)', 'Individuell sikring med sele', 'Administrative tiltak', 'Ingen sikring'],
    explanation: 'Kollektiv sikring (stillas/rekkverk/nett) er best fordi den beskytter alle automatisk uten individuelt utstyr.',
  },
  {
    question: 'Hva er minste bredde på en arbeidsplattform på stillas?',
    options: ['60 cm', '20 cm', '120 cm alltid', '10 cm'],
    explanation: 'Arbeidsplattformen skal være minimum 60 cm bred, ofte 90–120 cm.',
  },
  {
    question: 'Hvor høyt over arbeidspunktet skal en stige stikke opp?',
    options: ['Minst 1 meter', '5 cm', '10 meter', 'Akkurat i høyde med arbeidspunktet'],
    explanation: 'Stigen skal stikke minst 1 meter over arbeidspunktet og festes i toppen for sikker av- og påstigning.',
  },
  {
    question: 'Hva legges under hver vertikal stender på et stillas på fast underlag?',
    options: ['Fotplater', 'Isolasjon', 'Drensrør', 'Membran'],
    explanation: 'Fotplater legges under hver vertikal for å fordele lasten på et fast og plant underlag.',
  },
  {
    question: 'Hva er en del av individuell fallsikring?',
    options: ['Sele med line, støtdemper og forankringspunkt', 'En vanlig hjelm alene', 'Vernebriller', 'Hørselsvern'],
    explanation: 'Individuell (personlig) fallsikring består av sele, line med støtdemper og et forankringspunkt.',
  },
],

  'bygg-anlegg-vg1-4-1': [
  {
    question: 'Hvilken takform har lite fall (2–5°) og krever god tetting og drenering?',
    options: ['Flatt tak', 'Valmet tak', 'Saltak med møne', 'Pulttak med bratt fall'],
    explanation: 'Et flatt tak har lite fall (2–5°) og krever derfor god tetting og drenering.',
  },
  {
    question: 'Hvilken senteravstand (c/c) brukes vanligvis mellom takstoler/sperrer?',
    options: ['60 cm', '20 cm', '120 cm', '90 cm'],
    explanation: 'Sperrer og takstoler plasseres vanligvis med 60 cm senteravstand (c/c).',
  },
  {
    question: 'Hva er en typisk levetid for takstein av tegl?',
    options: ['50–100 år', '5–10 år', '15–25 år', 'Over 200 år'],
    explanation: 'Teglstein på tak har lang levetid, typisk 50–100 år, men er tungt og krever en sterk konstruksjon.',
  },
  {
    question: 'Hva er funksjonen til hanebjelken i en sperrekonstruksjon?',
    options: ['Binder sperrene sammen så de ikke skyver veggene ut', 'Bærer hele takstein-lasten alene', 'Leder bort regnvann', 'Isolerer taket'],
    explanation: 'Hanebjelken er en horisontal bjelke som binder sperrene sammen og forhindrer at de skyver veggene ut.',
  },
  {
    question: 'Hva legges under takstein for å feste steinen?',
    options: ['Lekter', 'Membran', 'Drensrør', 'Gipsplater'],
    explanation: 'Takstein legges på lekter (tverrgående lister), og det legges underlagspapp/vindsperre som sekundær tetting.',
  },
],

  'bygg-anlegg-vg1-16': [
  {
    question: 'Hva omfatter anleggsteknikk?',
    options: ['Graving, masseforflytning, veibygging, VA-anlegg og terrengarbeid', 'Bare innvendig snekring', 'Kun maling og tapetsering', 'Kun elektrisk arbeid'],
    explanation: 'Anleggsteknikk handler om arbeider i og på bakken: graving, masseforflytning, veibygging, VA-anlegg og terrengarbeid.',
  },
  {
    question: 'Hva må innhentes før graving for å unngå skade på kabler og rør i grunnen?',
    options: ['Kabelpåvisning fra kommunen', 'En ny gravemaskin', 'Værmelding for hele året', 'Et fagbrev'],
    explanation: 'Før graving må man innhente kabelpåvisning og sjekke tegninger for å unngå å treffe skjulte kabler og rør.',
  },
  {
    question: 'En grøft er 50 m lang, 1,2 m bred og 2 m dyp. Hva er utgravingsvolumet?',
    options: ['120 m³', '53,2 m³', '100 m³', '300 m³'],
    explanation: 'Volum = lengde × bredde × dybde = 50 × 1,2 × 2 = 120 m³.',
  },
  {
    question: 'Hvor mye løst volum får du av 120 m³ grus/sand når du regner 15 % svelling?',
    options: ['138 m³', '120 m³', '102 m³', '180 m³'],
    explanation: 'Når jord graves opp øker volumet. 120 × 1,15 = 138 m³ løst volum.',
  },
  {
    question: 'Hvilken gravemaskintype gir best stabilitet og trekkraft på bløt grunn?',
    options: ['Beltegraver', 'Hjulgraver', 'Minigraver', 'Hjullaster'],
    explanation: 'Beltegravere går på belter og gir bedre stabilitet og trekkraft, og brukes til tyngre gravearbeid på bløt grunn.',
  },
],

  'bygg-anlegg-vg1-17': [
  {
    question: 'Hvilket lag i en vei er det øverste slitelaget på de fleste norske veier?',
    options: ['Asfalt', 'Forsterkningslag av sprengstein', 'Undergrunn', 'Bærelag av pukk'],
    explanation: 'Asfalt er det vanligste slitelaget (toppen) på norske veier. Under ligger bærelag, forsterkningslag og undergrunn.',
  },
  {
    question: 'Hvorfor har en vei takfall (3–4 %) mot sidene?',
    options: ['For å lede vann bort fra veibanen', 'For å spare asfalt', 'For å gjøre veien bredere', 'For å øke farten'],
    explanation: 'Takfall (3–4 %) leder vann bort fra veibanen. Vann svekker bæreevnen og kan gi telehiv ved frost.',
  },
  {
    question: 'Omtrent hvilken andel av asfalt er bindemiddelet bitumen?',
    options: ['Ca. 5 %', 'Ca. 50 %', 'Ca. 25 %', 'Ca. 95 %'],
    explanation: 'Asfalt består av ca. 95 % steinmaterialer (pukk og sand) og ca. 5 % bitumen (bindemiddel fra olje).',
  },
  {
    question: 'En innkjørsel er 4 × 10 meter. Hva er arealet?',
    options: ['40 m²', '14 m²', '400 m²', '24 m²'],
    explanation: 'Areal = lengde × bredde = 10 × 4 = 40 m².',
  },
  {
    question: 'Hvilket belegningsmateriale er mest brukt og rimeligst på fortau og innkjørsler?',
    options: ['Betongstein', 'Naturstein (granitt)', 'Marmor', 'Glass'],
    explanation: 'Betongstein er mest brukt fordi den finnes i mange former og farger, er rimelig og holdbar. Naturstein er dyrere.',
  },
],

  'bygg-anlegg-vg1-18': [
  {
    question: 'Hva står VA for?',
    options: ['Vann og avløp', 'Varme og avtrekk', 'Ventilasjon og akustikk', 'Vegg og armering'],
    explanation: 'VA står for vann og avløp – rørsystemene som forsyner bygninger med rent vann og fører bort avløpsvann.',
  },
  {
    question: 'Hvilket rørmateriale er mest brukt til vannledninger i dag?',
    options: ['PE-rør (polyetylen)', 'Støpejern', 'Bly', 'Tre'],
    explanation: 'PE-rør (polyetylen) er fleksible, lette å legge og mest brukt til vannledninger i dag.',
  },
  {
    question: 'Hvorfor legges vannledninger under frostfri dybde (1–2 meter)?',
    options: ['For at vannet ikke skal fryse', 'For å spare rør', 'For å gjøre dem lettere å reparere', 'For å redusere vekten'],
    explanation: 'Vannledninger legges under frostfri dybde (1–2 m) slik at vannet i rørene ikke fryser om vinteren.',
  },
  {
    question: 'Hva er hovedfunksjonen til en sandfangkum?',
    options: ['Å samle opp sand og grus fra overvann', 'Å pumpe spillvann oppover', 'Å lagre rent drikkevann', 'Å varme opp vannet'],
    explanation: 'En sandfangkum samler opp sand og grus fra overvann slik at det ikke tetter ledningene, og må tømmes jevnlig.',
  },
  {
    question: 'Hvorfor legges avløpsledninger med fall?',
    options: ['Slik at vannet renner av seg selv (selvfall)', 'For å spare rør', 'For å fryse vannet', 'For å øke trykket i vannledningen'],
    explanation: 'Spillvannsledninger legges med fall slik at avløpsvannet renner av seg selv (selvfall) mot renseanlegget.',
  },
],

  'bygg-anlegg-vg1-19': [
  {
    question: 'Hva brukes landmåling til i bygg og anlegg?',
    options: ['Å stikke ut bygninger og kontrollere høyder', 'Å beregne strømforbruk', 'Å velge takstein', 'Å blande betong'],
    explanation: 'Landmåling bestemmer posisjoner og høyder, og brukes til å stikke ut bygninger riktig og kontrollere høyder.',
  },
  {
    question: 'Hvilket instrument sikter alltid horisontalt og brukes til å måle høydeforskjeller?',
    options: ['Nivellerinstrument (nivellerkikkert)', 'Teodolitt', 'Lasermåler for areal', 'Vater'],
    explanation: 'Et nivellerinstrument sikter horisontalt og brukes sammen med en nivelleringsstang (latte) til å måle høydeforskjeller.',
  },
  {
    question: 'Hvordan kontrollerer du at en utstukket rektangulær bygning er rettvinklet?',
    options: ['Måle diagonalene – de skal være like lange', 'Måle vekten', 'Sjekke fargen', 'Telle hjørnene'],
    explanation: 'I et rektangel skal de to diagonalene være like lange. Like diagonaler bekrefter at hjørnene er rettvinklede.',
  },
  {
    question: 'Hvilken enkel metode kan brukes til å sette ut en rett vinkel på en byggeplass?',
    options: ['3-4-5-metoden', '2-2-2-metoden', '1-1-1-metoden', '5-5-5-metoden'],
    explanation: '3-4-5-metoden bygger på pytagoras (3² + 4² = 5²) og gir en nøyaktig rett vinkel ved utstikking.',
  },
  {
    question: 'Hva angir koordinater i landmåling?',
    options: ['Posisjon (nord og øst) i et rutenett', 'Bygningens høyde over havet alene', 'Materialets vekt', 'Veggens tykkelse'],
    explanation: 'Koordinater angir posisjon (nord og øst) i et rutenett, f.eks. UTM-koordinater. Kote angir høyde.',
  },
],

  'bygg-anlegg-vg1-20': [
  {
    question: 'Hva er karmen i et vindu?',
    options: ['Den faste rammen som monteres i veggen', 'Den bevegelige delen med glass', 'Glasset', 'Håndtaket'],
    explanation: 'Karmen er den faste rammen som monteres i veggen. Rammen (vindusbladet) er den bevegelige delen med glass.',
  },
  {
    question: 'Hvor stor bør fugen (avstanden) mellom vinduskarm og vegg være?',
    options: ['10–15 mm', '1–2 mm', '50–60 mm', '0 mm'],
    explanation: 'Fugerommet skal være 10–15 mm. For liten fuge gir ikke plass til bevegelse; for stor er vanskelig å tette.',
  },
  {
    question: 'Hvilken dør er klassifisert med brannmotstand (f.eks. EI30) og er selvlukkende?',
    options: ['Branndør', 'Vanlig innerdør', 'Skyvedør', 'Foldedør'],
    explanation: 'En branndør har klassifisert brannmotstand (EI30, EI60), er selvlukkende og settes mellom brannceller.',
  },
  {
    question: 'Hva må fugen mellom karm og vegg være, i tillegg til isolert?',
    options: ['Lufttett', 'Malt rød', 'Helt åpen', 'Fylt med betong'],
    explanation: 'Fugen mellom karm og vegg må være både isolert (mineralull/PU-skum) og lufttett for å hindre trekk og fuktskade.',
  },
  {
    question: 'Hva sjekker du før montering når du måler en vindusåpning?',
    options: ['At åpningen er i lodd og vater', 'Glassets farge', 'Husets adresse', 'Hvor mange skruer som finnes'],
    explanation: 'Du måler bredde og høyde flere steder og sjekker at åpningen er i lodd og vater før vinduet monteres.',
  },
],

  'bygg-anlegg-vg1-21': [
  {
    question: 'Hva er gipsplater laget av?',
    options: ['En gipskjerne mellom to lag papir eller fiberduk', 'Massiv betong', 'Sammenpresset trefiber', 'Stålplater'],
    explanation: 'Gipsplater består av en gipskjerne mellom to lag papir eller fiberduk. Gips er brannhemmende og lyddempende.',
  },
  {
    question: 'Hvilken senteravstand (c/c) brukes vanligvis mellom C-stendere i en lettvegg?',
    options: ['60 cm', '20 cm', '120 cm', '15 cm'],
    explanation: 'C-stendere settes vanligvis med 60 cm senteravstand (c/c), tilpasset platebredden på 120 cm.',
  },
  {
    question: 'Hva legges i skjøtene mellom gipsplater for å hindre sprekkdannelse?',
    options: ['Fugebånd', 'Armeringsjern', 'Isolasjon', 'Membran'],
    explanation: 'Et fugebånd (papir eller fiber) legges i skjøtene og sparkles inn for å hindre at det danner seg sprekker.',
  },
  {
    question: 'Hva er en fordel med gipsplater?',
    options: ['Rask montering, brannhemmende og god lyddemping', 'De er bærende konstruksjon alene', 'De tåler all fukt uten beskyttelse', 'De trenger aldri sparkling'],
    explanation: 'Gipsplater gir rask montering, jevn overflate, er brannhemmende og lyddempende, og kan resirkuleres.',
  },
  {
    question: 'Hvilken skruavstand er typisk langs kantene på en gipsplate?',
    options: ['15–20 cm', '50–60 cm', '1–2 cm', '5 mm'],
    explanation: 'Langs kantene skrues platen med 15–20 cm avstand, og i feltet med 25–30 cm, minst 10 mm fra kanten.',
  },
],

  'bygg-anlegg-vg1-22': [
  {
    question: 'Hvilket krav stilles til jevnhet på et undergulv før gulvlegging?',
    options: ['Maks 2–3 mm avvik per 2 meter', 'Maks 5 cm avvik per meter', 'Ingen krav til jevnhet', 'Maks 10 cm avvik per 2 meter'],
    explanation: 'Undergulvet skal være jevnt med maks 2–3 mm avvik per 2 meter, samt tørt, rent og fast.',
  },
  {
    question: 'Hva er massiv parkett?',
    options: ['Heltre som kan slipes mange ganger', 'En plate med fotoprint som etterligner tre', 'En type vinyl', 'Sammenpresset papir'],
    explanation: 'Massiv parkett er heltre med slitelag av edle tresorter, og kan slipes mange ganger – i motsetning til laminat med fotoprintlag.',
  },
  {
    question: 'Hvilket gulvbelegg er et naturmateriale laget av linolje, treharpiks, kork og jute?',
    options: ['Linoleum', 'Vinyl', 'Laminat', 'Keramiske fliser'],
    explanation: 'Linoleum er et naturlig, antibakterielt og miljøvennlig belegg av linolje, treharpiks, kork og jute. Vinyl er syntetisk (PVC).',
  },
  {
    question: 'Hvilken flistype er tettere og sterkere, tåler frost og kan brukes utendørs?',
    options: ['Porselensfliser', 'Vanlige glaserte keramiske fliser', 'Mosaikk på nett', 'Linoleum'],
    explanation: 'Porselensfliser er tettere og sterkere enn vanlige keramiske fliser, tåler frost og kan brukes utendørs.',
  },
  {
    question: 'Hvorfor lar man laminatpakker ligge i rommet før legging?',
    options: ['For å akklimatisere materialet til romklimaet', 'For å gjøre dem tyngre', 'For å tørke ut limet', 'Det er ikke nødvendig'],
    explanation: 'Laminatet akklimatiseres i rommet før legging, slik at det ikke utvider eller trekker seg sammen etter at det er lagt.',
  },
],

  'bygg-anlegg-vg1-23': [
  {
    question: 'Hvorfor er det strenge krav til våtrom?',
    options: ['Fuktskader på bad er blant de vanligste og dyreste byggskadene', 'Bad er sjelden i bruk', 'Det er kun et estetisk hensyn', 'Det er ingen reelle krav'],
    explanation: 'Fuktskader på bad er blant de vanligste og dyreste byggskadene i Norge, og gir råte, mugg og store reparasjonskostnader.',
  },
  {
    question: 'Hva er en membran i et våtrom?',
    options: ['Det vanntette sjiktet som beskytter konstruksjonen', 'Et lag isolasjon', 'En type flis', 'Et armeringsjern'],
    explanation: 'Membranen er det vanntette sjiktet som hindrer vann i å trenge inn i konstruksjonen bak fliser/belegg.',
  },
  {
    question: 'Hvilket minste fall mot sluk anbefales i et våtromsgulv?',
    options: ['Minimum 1:50 (2 cm per meter)', 'Minimum 1:5', 'Ingen fall', 'Minimum 1:200'],
    explanation: 'Gulvet skal ha minimum fall 1:50 (2 cm per meter) jevnt mot sluket, slik at vannet renner dit.',
  },
  {
    question: 'Hva er en smøremembran?',
    options: ['Et flytende produkt som påføres med kost eller rull', 'En prefabrikkert duk som limes', 'En stålplate', 'En type flislim'],
    explanation: 'En smøremembran er flytende og påføres med kost eller rull i flere strøk. Den følger alle former, også hjørner.',
  },
  {
    question: 'Hva forsegles først når man legger membran i et våtrom?',
    options: ['Detaljer som slukmansjett og rørgjennomføringer', 'Midten av gulvet', 'Taket', 'Vinduet'],
    explanation: 'Man forsegler detaljer først – slukmansjett, rørmansjetter og hjørner – før resten av flatene males med membran.',
  },
],

  'bygg-anlegg-vg1-24': [
  {
    question: 'Hva er hovedformålet med brannkrav i bygninger?',
    options: ['Å beskytte menneskers liv og helse', 'Å gjøre bygget penere', 'Å spare materialer', 'Å øke husleien'],
    explanation: 'Brannkrav skal beskytte liv og helse: gi tid til rømning, hindre brannspredning og beskytte bærende konstruksjoner.',
  },
  {
    question: 'Hva er en branncelle?',
    options: ['Et avgrenset område der brann ikke skal spre seg innen en viss tid', 'Et rom uten strøm', 'En type branndetektor', 'En brannslukker'],
    explanation: 'En branncelle er et område omgitt av branncellebegrensende vegger, gulv og himling som hindrer brannspredning en viss tid.',
  },
  {
    question: 'Hva betyr klassen EI60 for en branncellebegrensende konstruksjon?',
    options: ['60 minutters brannmotstand', '60 cm tykkelse', '60 grader maks temperatur', '60 % isolasjon'],
    explanation: 'EI60 betyr 60 minutters brannmotstand. Mellom leiligheter i boligblokk kreves typisk EI60.',
  },
  {
    question: 'Hva må gjøres med gjennomføringer (hull) i branncellebegrensende konstruksjoner?',
    options: ['De må branntettes', 'De kan stå åpne', 'De fylles med vanlig isolasjon uten tetting', 'De males over'],
    explanation: 'Alle gjennomføringer for kabler, rør og kanaler må branntettes med f.eks. brannskum, brannmasse eller brannmansjetter.',
  },
  {
    question: 'Hvorfor er plastrør som går gjennom en brannvegg et kritisk punkt?',
    options: ['Plast brenner og smelter, så hullet må sikres med f.eks. brannmansjett', 'Plast leder strøm', 'Plast er for tungt', 'Plast er alltid ubrennbart'],
    explanation: 'Plast brenner og smelter, slik at det kan oppstå et hull der brann sprer seg. Derfor brukes brannmansjett som klemmer røret igjen ved brann.',
  },
],

  'bygg-anlegg-vg1-25': [
  {
    question: 'Hva er en tilstandsvurdering?',
    options: ['En systematisk gjennomgang av bygningens tekniske tilstand', 'En beregning av husleien', 'En type forsikring', 'En arkitekttegning'],
    explanation: 'En tilstandsvurdering kartlegger bygningens tekniske tilstand for å avdekke skader, slitasje og vedlikeholdsbehov.',
  },
  {
    question: 'Hva betyr tilstandsgrad TG0 (NS 3424)?',
    options: ['Ingen symptomer', 'Store skader', 'Middels symptomer', 'Riving nødvendig'],
    explanation: 'TG0 betyr ingen symptomer. Skalaen øker med tilstandsgraden: TG1 svake, TG2 middels, TG3 store symptomer.',
  },
  {
    question: 'Hva er det viktigste å gjøre først ved en fuktskade?',
    options: ['Utbedre kilden til fukten', 'Male over skaden', 'Bytte gulvet med en gang', 'Lufte i fem minutter'],
    explanation: 'Ved fuktskade må man alltid utbedre kilden først, deretter tørke ut konstruksjonen og sanere eventuell muggsopp.',
  },
  {
    question: 'Hva er hovedhensikten med forebyggende vedlikehold?',
    options: ['Utbedre små feil før de blir store og forlenge byggets levetid', 'Vente til alt er ødelagt', 'Spare alle kostnader for alltid', 'Rive bygget tidlig'],
    explanation: 'Forebyggende vedlikehold innebærer periodisk kontroll og å utbedre små feil før de blir store, slik at levetiden forlenges.',
  },
  {
    question: 'Hva er et typisk energirehabiliteringstiltak?',
    options: ['Etterisolering av tak og vegger', 'Male huset rødt', 'Bytte stikkontakter', 'Legge nytt gulv i stua'],
    explanation: 'Etterisolering av tak og vegger og bytte til energivinduer er typiske energirehabiliteringstiltak som reduserer energiforbruket.',
  },
],

  'bygg-anlegg-vg1-26': [
  {
    question: 'Hva er den sterkeste formen for vern av en bygning?',
    options: ['Fredning etter kulturminneloven', 'Vern i reguleringsplan', 'En frivillig avtale', 'Maling med vernefarge'],
    explanation: 'Fredning er den sterkeste vernekategorien. Alle endringer krever tillatelse fra Riksantikvaren.',
  },
  {
    question: 'Hva er laft?',
    options: ['Tømmerstokker som legges horisontalt og hakkes sammen i hjørnene', 'En type betongelement', 'Et vindusbeslag', 'En målestokk'],
    explanation: 'Laft er den eldste norske byggemetoden: tømmerstokker legges horisontalt og laftes (hakkes) sammen i hjørnene.',
  },
  {
    question: 'Hvilket prinsipp i antikvarisk arbeid handler om å gjøre minst mulig og bevare originalt materiale?',
    options: ['Minste inngrep', 'Maksimal modernisering', 'Full utskifting', 'Skjult ombygging'],
    explanation: 'Prinsippet om minste inngrep betyr å gjøre bare det nødvendige og bevare mest mulig originalt materiale.',
  },
  {
    question: 'Hvilken mørteltype brukes tradisjonelt i gamle bygninger og må ikke blandes med sement?',
    options: ['Kalkmørtel', 'Ren sementmørtel', 'Epoksy', 'Lettklinkermørtel'],
    explanation: 'Kalkmørtel (kalk, sand, vann) brukes i gamle bygninger. Den er fleksibel og «puster», og skal ikke blandes med sement.',
  },
  {
    question: 'Hva betyr prinsippet om reversibilitet i antikvarisk arbeid?',
    options: ['Tiltak bør kunne tilbakeføres', 'Alt skal rives etterpå', 'Bygget skal flyttes', 'Materialene skal byttes ut hvert år'],
    explanation: 'Reversibilitet betyr at tiltak bør kunne tilbakeføres, slik at man unngår irreversible endringer på kulturminnet.',
  },
],

  'bygg-anlegg-vg1-27': [
  {
    question: 'Hva er kvalitetssikring (KS) i bygg?',
    options: ['Systematisk arbeid for å sikre at byggverket oppfyller kravene', 'En type forsikring', 'Maling av fasaden', 'Et byggemateriale'],
    explanation: 'Kvalitetssikring er systematisk arbeid for å sikre at bygget oppfyller krav i lover, kontrakt og bransjestandarder.',
  },
  {
    question: 'Hva viser en kontrollplan?',
    options: ['Hva som skal kontrolleres, når, av hvem og hvordan det dokumenteres', 'Bare prisen på materialene', 'Husets farge', 'Antall ansatte'],
    explanation: 'En kontrollplan viser hva som skal kontrolleres, når kontrollen skjer, hvem som utfører den og hvordan den dokumenteres.',
  },
  {
    question: 'Hva står FDV for?',
    options: ['Forvaltning, Drift og Vedlikehold', 'Forskaling, Dekke og Vegg', 'Fukt, Damp og Ventilasjon', 'Fundament, Drenering og Vann'],
    explanation: 'FDV står for Forvaltning, Drift og Vedlikehold – dokumentasjon som følger bygget, lovpålagt etter TEK17.',
  },
  {
    question: 'Hva er et avvik i kvalitetssammenheng?',
    options: ['Mangel på oppfyllelse av et krav', 'En vanlig pause', 'En type tegning', 'En lønnsutbetaling'],
    explanation: 'Et avvik er manglende oppfyllelse av et krav, f.eks. feil utførelse eller avvik fra tegning, og må registreres og håndteres.',
  },
  {
    question: 'Hva er «som bygget»-tegninger?',
    options: ['Tegninger som viser hvordan bygget faktisk ble bygget', 'De første skissene', 'Reklametegninger', 'Tegninger uten mål'],
    explanation: 'Som bygget-tegninger viser hvordan bygget faktisk ble bygget (ikke bare prosjektert), og inngår i FDV-dokumentasjonen.',
  },
],

  'bygg-anlegg-vg1-28': [
  {
    question: 'Hvem er byggherren på en byggeplass?',
    options: ['Oppdragsgiveren', 'Tømreren som utfører arbeidet', 'Maskinføreren', 'HMS-koordinatoren'],
    explanation: 'Byggherren er oppdragsgiveren. Hovedentreprenøren koordinerer, og underentreprenører utfører spesialfag.',
  },
  {
    question: 'Hva er en viktig del av god muntlig kommunikasjon på byggeplass?',
    options: ['Lytte aktivt og bekrefte at man har forstått', 'Snakke høyest mulig', 'Aldri stille spørsmål', 'Unngå øyekontakt'],
    explanation: 'God muntlig kommunikasjon innebærer å være tydelig, lytte aktivt, stille spørsmål ved uklarheter og bekrefte forståelse.',
  },
  {
    question: 'Hva bør du gjøre FØRST når en konflikt oppstår på byggeplass?',
    options: ['Holde deg rolig og ikke reagere i sinne', 'Heve stemmen', 'Forlate jobben', 'Klandre andre høyt'],
    explanation: 'Først bør man holde seg rolig og ikke reagere i sinne, deretter lytte til den andres perspektiv og fokusere på saken.',
  },
  {
    question: 'Hvorfor er samarbeid mellom fag viktig på byggeplass?',
    options: ['For å unngå kollisjoner mellom fagene og sikre fremdrift', 'For å bruke flest mulig firmaer', 'For å øke avfallsmengden', 'For å forlenge byggetiden'],
    explanation: 'Mange fag jobber samtidig. Godt samarbeid hindrer at fagene kolliderer (f.eks. rør og kabler på samme sted) og holder fremdriften.',
  },
  {
    question: 'Hva kjennetegner profesjonell opptreden som håndverker?',
    options: ['Punktlighet, pålitelighet og ordenssans', 'Å komme når man vil', 'Å la arbeidsområdet være rotete', 'Å ignorere kunder'],
    explanation: 'Profesjonalitet betyr punktlighet, pålitelighet, kvalitetsbevissthet, respekt, ordenssans og ansvarsfølelse.',
  },
],

  'bygg-anlegg-vg1-29': [
  {
    question: 'Hva er rekkefølgen i hovedmodellen (2+2) for fagbrev?',
    options: ['VG1 + VG2 i skole, deretter 2 år som lærling, så fagprøve', 'Fagprøve først, deretter skole', '4 år skole uten lærling', 'Bare 2 år i bedrift'],
    explanation: 'Hovedmodellen er 2 år i skole (VG1 + VG2) og 2 år som lærling i bedrift, etterfulgt av fagprøve.',
  },
  {
    question: 'Hva er en rettighet en lærling har?',
    options: ['Skriftlig lærekontrakt og lønn etter tariff', 'Ingen lønn', 'Å jobbe uten opplæring', 'Å slippe alle plikter'],
    explanation: 'Lærlingen har rett til allsidig opplæring, skriftlig lærekontrakt, lønn etter tariff og samme rettigheter som andre ansatte.',
  },
  {
    question: 'Hva kreves for å ta mesterbrev?',
    options: ['Fagbrev + minst 2 år praksis + mesterutdanning', 'Bare fagbrev', 'En ukes kurs', 'Bachelorgrad fra universitet'],
    explanation: 'Mesterbrev krever fagbrev, minst 2 års praksis og mesterutdanning, og kvalifiserer til å starte egen bedrift.',
  },
  {
    question: 'Hvordan utvikler lærlinglønnen seg gjennom læretiden?',
    options: ['Den øker for hvert halvår', 'Den er lik hele tiden', 'Den synker mot slutten', 'Det er ingen lønn'],
    explanation: 'Lærlinglønnen øker for hvert halvår, typisk fra ca. 30 % av fagarbeiderlønn i starten til ca. 80 % i siste halvår.',
  },
  {
    question: 'Hvilken videreutdanning gir tittelen «fagskoleingeniør» eller «byggmester»?',
    options: ['Fagskole', 'Grunnskole', 'Folkehøgskole', 'Et helgekurs'],
    explanation: 'Fagskolen (2 år) er en teknisk lederutdanning som kan gi tittel som fagskoleingeniør eller byggmester.',
  },
],

  'bygg-anlegg-vg1-30': [
  {
    question: 'Hva vurderer en livssyklusanalyse (LCA) av et materiale?',
    options: ['Miljøpåvirkning gjennom hele livsløpet, fra råvare til avfall', 'Bare innkjøpsprisen', 'Bare vekten', 'Bare fargen'],
    explanation: 'LCA vurderer miljøpåvirkning gjennom hele livsløpet: råvareuttak, produksjon, transport, bruk og avfallshåndtering.',
  },
  {
    question: 'Hva er massivtre (CLT) et godt alternativ til i høyhus?',
    options: ['Betong og stål, med mye lavere CO₂-avtrykk', 'Glass', 'Isolasjon', 'Maling'],
    explanation: 'Massivtre (CLT) kan erstatte betong og stål i høyhus, har meget lavt CO₂-avtrykk og gir rask montering.',
  },
  {
    question: 'Hva er øverst i avfallshierarkiet (mest ønskelig)?',
    options: ['Forebygging (bruk mindre)', 'Deponering', 'Energigjenvinning', 'Materialgjenvinning'],
    explanation: 'Avfallshierarkiet prioriterer: 1) forebygging, 2) ombruk, 3) materialgjenvinning, 4) energigjenvinning, 5) deponering.',
  },
  {
    question: 'Hva kjennetegner et passivhus?',
    options: ['Minimalt oppvarmingsbehov (<15 kWh/m²/år) og svært god isolasjon', 'Ingen isolasjon', 'Stort varmetap', 'Ingen ventilasjon'],
    explanation: 'Et passivhus har svært lavt oppvarmingsbehov (<15 kWh/m²/år), god isolasjon, lufttett kropp og balansert ventilasjon med varmegjenvinning.',
  },
  {
    question: 'Hva er et plusshus?',
    options: ['Et hus som produserer mer energi enn det bruker', 'Et hus med ekstra mange rom', 'Et hus uten strøm', 'Et hus med svømmebasseng'],
    explanation: 'Et plusshus produserer mer energi enn det bruker og kan selge overskuddet til strømnettet. Et nullenergibygg produserer like mye som det bruker.',
  },
],

  'bygg-anlegg-vg1-31': [
  {
    question: 'Hvorfor armeres betong?',
    options: ['Fordi betong er svak i strekk, og armeringen tar opp strekkrefter', 'Fordi betong er svak i trykk', 'For å gjøre den lettere', 'For å spare sement'],
    explanation: 'Betong er sterk i trykk (25–50 MPa), men svak i strekk (2–4 MPa). Armeringen tar opp strekkreftene og hindrer sprekker.',
  },
  {
    question: 'Hva er kamstål (ribbejern)?',
    options: ['Det vanligste armeringsstålet, med ribber for god heft til betong', 'En type isolasjon', 'En forskalingstype', 'En mørtelklasse'],
    explanation: 'Kamstål (ribbejern) er det vanligste armeringsstålet. Ribbene gir god heft til betongen. B500NC har flytegrense 500 MPa.',
  },
  {
    question: 'Hva betyr betegnelsen «Ø12 c150» på en armeringstegning?',
    options: ['Diameter 12 mm med senteravstand 150 mm', '12 stenger på 150 cm', 'Diameter 150 mm med 12 stenger', '12 % armering på 150 m²'],
    explanation: 'Ø12 c150 betyr armeringsstang med diameter 12 mm plassert med senteravstand 150 mm.',
  },
  {
    question: 'Hva brukes distanseholdere til i armeringsarbeid?',
    options: ['Å sikre riktig overdekning av armeringen', 'Å bøye stengene', 'Å kappe stengene', 'Å blande betong'],
    explanation: 'Distanseholdere (plastbrikker) sikrer at armeringen får riktig avstand til forskalingen, altså riktig overdekning.',
  },
  {
    question: 'I et fundament med bunnett Ø12 c150 og bredde 1000 mm, hvor mange stenger trengs i én retning?',
    options: ['7 stenger', '15 stenger', '5 stenger', '12 stenger'],
    explanation: 'Antall = bredde/avstand + 1 = 1000/150 + 1 ≈ 6,7 + 1, rundet til 7 stenger.',
  },
],

  'bygg-anlegg-vg1-32': [
  {
    question: 'Hva er prefabrikkert betong?',
    options: ['Betongelementer produsert på fabrikk og montert på byggeplass', 'Betong som blandes for hånd på stedet', 'En type armering', 'Betong som aldri herder'],
    explanation: 'Prefabrikkerte elementer produseres på fabrikk under kontrollerte forhold og transporteres til byggeplass for montering.',
  },
  {
    question: 'Hva er hulldekker?',
    options: ['Hule betongplater for etasjeskiller som kan spenne langt', 'Massive vegger', 'Søyler med hull', 'Isolasjonsplater'],
    explanation: 'Hulldekker er hule betongplater til etasjeskiller. De er lette i forhold til styrken og kan spenne opptil 16 meter.',
  },
  {
    question: 'Hva er en fordel med prefabrikkert betong fremfor plasstøp?',
    options: ['Raskere bygging og bedre kvalitetskontroll', 'Trenger aldri kran', 'Helt gratis', 'Krever ingen planlegging'],
    explanation: 'Prefab gir raskere bygging (parallell produksjon), bedre kvalitet under kontrollerte forhold og mindre væravhengighet.',
  },
  {
    question: 'Hva kjennetegner en «våt skjøt» mellom betongelementer?',
    options: ['Mellomrommet mellom elementene støpes med betong over utstikkende armering', 'Elementene boltes sammen tørt', 'De sveises uten betong', 'De limes med epoksy'],
    explanation: 'I en våt skjøt stikker armering ut fra hvert element, og mellomrommet støpes med betong, slik at det gir kraftoverføring som plasstøpt.',
  },
  {
    question: 'Hva festes løfteutstyret i når et hulldekke skal løftes?',
    options: ['Innstøpte løfteanker i elementet', 'Armeringen i fundamentet', 'Forskalingen', 'En tilfeldig kant'],
    explanation: 'Løfteutstyret festes i innstøpte løfteanker i elementet. Sertifikater og utstyr må kontrolleres før løft.',
  },
],

  'bygg-anlegg-vg1-33': [
  {
    question: 'Hva er hovedoppgaven til et trebjelkelag?',
    options: ['Å bære gulvet og overføre last til veggene', 'Å isolere taket', 'Å lede bort regnvann', 'Å bære takstein'],
    explanation: 'Trebjelkelaget bærer gulvet og overfører lasten fra etasjen til veggene.',
  },
  {
    question: 'Hvilket minste opplegg bør en bjelke ha på vegg/svill?',
    options: ['Minimum 50 mm', 'Minimum 5 mm', 'Minimum 200 mm alltid', 'Ingen krav'],
    explanation: 'Bjelken må ha minimum 50 mm opplegg (normalt 75–100 mm) med god kontakt over hele bredden.',
  },
  {
    question: 'I hvilken del av bjelkehøyden er det tillatt å lage utsparinger (hull) for rør?',
    options: ['I midtre tredjedel av høyden', 'I underkant', 'I overkant', 'Hvor som helst'],
    explanation: 'Utsparinger for rør og kabler skal bare være i den midtre tredjedelen av bjelkehøyden, der strekk- og trykkreftene er minst.',
  },
  {
    question: 'Hva er TEK17-kravet til luftlydisolasjon mellom boliger?',
    options: ['Minimum 55 dB', 'Maksimum 10 dB', 'Minimum 5 dB', 'Det finnes ikke noe krav'],
    explanation: 'TEK17 krever minimum 55 dB luftlydisolasjon og maksimum 53 dB trinnlyd mellom boliger.',
  },
  {
    question: 'Hva demper trinnlyd best i et etasjeskille?',
    options: ['Myke sjikt, f.eks. en trinnlyddempende matte', 'Tunge harde plater alene', 'Mer luft i konstruksjonen alene', 'Å fjerne isolasjonen'],
    explanation: 'Trinnlyd dempes av myke sjikt som trinnlyddempende matter, mens tunge materialer øker luftlydisolasjonen.',
  },
],

  'bygg-anlegg-vg1-34': [
  {
    question: 'Hva er hovedfunksjonen til utvendig kledning?',
    options: ['Å beskytte konstruksjonen og gi bygget karakter', 'Å bære taklasten', 'Å isolere mot strøm', 'Å lede bort spillvann'],
    explanation: 'Utvendig kledning beskytter konstruksjonen mot vær og vind, og gir bygget et bestemt utseende.',
  },
  {
    question: 'Hva er funksjonen til en vindsperre i en yttervegg?',
    options: ['Beskytte isolasjonen mot vind og regn utenfra, men slippe ut fukt', 'Bære veggens last', 'Lede bort takvann', 'Erstatte kledningen'],
    explanation: 'Vindsperren beskytter isolasjonen mot vind og regn samtidig som den slipper ut fukt (pustende), og skal dekke hele flaten.',
  },
  {
    question: 'Hvorfor skal det være en luftspalte mellom vindsperre og kledning?',
    options: ['Så luft kan sirkulere og tørke ut eventuell fukt', 'For å spare materiale', 'For å gjøre veggen tynnere', 'For å lede strøm'],
    explanation: 'Luftspalten lar luft sirkulere bak kledningen og tørke ut fukt, noe som forlenger kledningens levetid.',
  },
  {
    question: 'Hvilket treslag er svært holdbart og kan stå ubehandlet utvendig?',
    options: ['Lerk', 'Gran', 'Bjørk', 'Osp'],
    explanation: 'Lerk er svært holdbart og kan stå ubehandlet ute. Gran er rimeligere, men må males eller beises.',
  },
  {
    question: 'Hva er funksjonen til en dryppnese på et beslag?',
    options: ['Å lede vann bort fra veggen så det ikke renner inn', 'Å feste kledningen', 'Å isolere veggen', 'Å bære beslaget'],
    explanation: 'En dryppnese i forkant av beslaget gjør at vannet drypper av og ikke renner inn på veggen bak.',
  },
],

  'bygg-anlegg-vg1-35': [
  {
    question: 'Hva kalles det horisontale flaten man tråkker på i en trapp?',
    options: ['Trinn (inntrinn)', 'Opptrinn', 'Vange', 'Repos'],
    explanation: 'Trinnet (inntrinnet) er den horisontale flaten man tråkker på. Opptrinnet er den vertikale høyden mellom trinnene.',
  },
  {
    question: 'Hvilken trinnformel brukes for komfortable trapper (TEK17)?',
    options: ['2 × opptrinn + inntrinn = 610–630 mm', 'opptrinn + inntrinn = 100 mm', '2 × inntrinn − opptrinn = 0', 'opptrinn × inntrinn = 620'],
    explanation: 'Trinnformelen 2 × opptrinn + inntrinn = 610–630 mm gir komfortable trapper. Med opptrinn 180 mm blir inntrinn ca. 260 mm.',
  },
  {
    question: 'Hva er minste høyde på et rekkverk innendørs (TEK17)?',
    options: ['900 mm (1000 mm over én etasje)', '500 mm', '300 mm', '1500 mm'],
    explanation: 'Rekkverk skal være minimum 900 mm høyt, og minimum 1000 mm der fallhøyden er over én etasje.',
  },
  {
    question: 'Hva er maks åpning mellom spiler i et rekkverk (barnekrav)?',
    options: ['100 mm', '300 mm', '500 mm', '50 cm'],
    explanation: 'Åpninger i rekkverk skal være maks 100 mm, slik at barn ikke kan klemme hodet eller falle gjennom.',
  },
  {
    question: 'Med opptrinn 180 mm og trinnformel 2 × opptrinn + inntrinn = 620, hva blir inntrinnet?',
    options: ['260 mm', '180 mm', '440 mm', '320 mm'],
    explanation: '2 × 180 = 360. Inntrinn = 620 − 360 = 260 mm.',
  },
],

  'bygg-anlegg-vg1-36': [
  {
    question: 'Hva kjennetegner systemstillas (rammestillas)?',
    options: ['Prefabrikkerte rammer som er raske å sette opp', 'Det støpes på stedet', 'Det er laget av tre', 'Det kan ikke flyttes'],
    explanation: 'Systemstillas (rammestillas) bruker prefabrikkerte rammer som er raske å montere, vanlig opp til 8–10 meter.',
  },
  {
    question: 'Hva er maks tillatt avstand fra stillaset til fasaden?',
    options: ['30 cm', '1 meter', '5 cm', '2 meter'],
    explanation: 'Avstanden fra arbeidsplattformen til fasaden skal være maks 30 cm for å hindre at noen faller mellom.',
  },
  {
    question: 'Fra hvilken høyde skal stillaset forankres til fasaden?',
    options: ['Over 4 meter', 'Over 20 meter', 'Aldri', 'Over 1 meter'],
    explanation: 'Stillaset skal forankres til fasaden over 4 meters høyde for stabilitet, i tillegg til rekkverk på alle sider.',
  },
  {
    question: 'Hva monteres FØR stillaset tas i bruk, på alle sider?',
    options: ['Rekkverk', 'Maling', 'Drensrør', 'Isolasjon'],
    explanation: 'Rekkverk (hånd-, kne- og fotlist) på alle sider må være montert før stillaset tas i bruk.',
  },
  {
    question: 'Hvor ofte skal et stillas kontrolleres av en kompetent person?',
    options: ['Ukentlig (og etter uvær), i tillegg til daglig visuell kontroll av bruker', 'Bare én gang i året', 'Aldri', 'Bare når det rives'],
    explanation: 'Stillas kontrolleres daglig visuelt av bruker og ukentlig av en kompetent person, samt etter uvær.',
  },
],

  'bygg-anlegg-vg1-37': [
  {
    question: 'Hva er sprøytebetong?',
    options: ['Betong som sprøytes på med trykk', 'Betong som helles i forskaling', 'En type isolasjon', 'En armeringstype'],
    explanation: 'Sprøytebetong er betong som påføres med trykk, og brukes bl.a. til bergsikring i tunneler og reparasjon av betong.',
  },
  {
    question: 'Hva er en fordel med våtsprøyting fremfor tørrsprøyting?',
    options: ['Bedre arbeidsmiljø og jevnere kvalitet', 'Mye mer støv', 'Trenger ikke betong', 'Krever ingen pumpe'],
    explanation: 'Ved våtsprøyting pumpes ferdigblandet betong, noe som gir mindre støv (bedre arbeidsmiljø) og jevnere kvalitet enn tørrsprøyting.',
  },
  {
    question: 'Hva armeres sprøytebetong ofte med i stedet for stålnett?',
    options: ['Fiber (f.eks. stålfiber eller polypropylen)', 'Tre', 'Glass i plater', 'Isopor'],
    explanation: 'Sprøytebetong armeres ofte med fiber (stål eller syntetisk) i stedet for tradisjonelt stålnett, noe som gir raskere påføring.',
  },
  {
    question: 'Hvor brukes sprøytebetong typisk?',
    options: ['Bergsikring i tunneler og fjellskjæringer', 'Som gulvbelegg i stua', 'Til vindusmontering', 'Til taktekking med papp'],
    explanation: 'Sprøytebetong brukes til bergsikring i tunneler, fjellskjæringer, svømmebasseng og reparasjon av betong.',
  },
  {
    question: 'Hva er en typisk tykkelse på sprøytebetong?',
    options: ['50–150 mm avhengig av formål', '1–2 mm', '500–1000 mm', 'Akkurat 5 mm alltid'],
    explanation: 'Tykkelsen er typisk 50–150 mm, avhengig av formål og påkjenning.',
  },
],

  'bygg-anlegg-vg1-38': [
  {
    question: 'Hva er en fordel med å bruke BIM-modeller på nettbrett på byggeplassen?',
    options: ['Kollisjonskontroll og oppdaterte tegninger alltid tilgjengelig', 'At man slipper å lese tegninger', 'At bygget blir billigere uten planlegging', 'At man ikke trenger fagfolk'],
    explanation: 'BIM på nettbrett gir 3D-modeller, kollisjonskontroll før bygging, informasjon om bygningsdeler og alltid oppdaterte tegninger.',
  },
  {
    question: 'Hvilket digitalt verktøy brukes til presis utstikking på byggeplass?',
    options: ['Totalstasjon', 'En vanlig hammer', 'Et målebånd alene', 'En vater'],
    explanation: 'Totalstasjon brukes til presis utstikking. GPS/GNSS brukes til posisjonering og droner til dokumentasjon.',
  },
  {
    question: 'Hva er en fordel med digitale sjekklister?',
    options: ['Automatisk lagring og foto direkte i sjekklisten', 'At de aldri må fylles ut', 'At de er på papir', 'At de ikke kan deles'],
    explanation: 'Digitale sjekklister gir automatisk lagring, foto direkte i sjekklisten og digital avvikshåndtering.',
  },
  {
    question: 'Hva brukes droner til på en digital byggeplass?',
    options: ['Kartlegging, inspeksjon og dokumentasjon', 'Å bære betong', 'Å grave grøfter', 'Å støpe fundamenter'],
    explanation: 'Droner brukes til kartlegging, inspeksjon, fremdriftskontroll og dokumentasjon.',
  },
  {
    question: 'Hva er et eksempel på automatisering i fremtidens byggeplass?',
    options: ['3D-printing av betong og roboter for muring', 'At alt gjøres for hånd', 'At man slutter å bruke maskiner', 'At man bygger uten tegninger'],
    explanation: 'Fremtidens byggeplass bruker bl.a. 3D-printing av betong, roboter for muring og sveising, og autonome maskiner.',
  },
],

  'bygg-anlegg-vg1-39': [
  {
    question: 'Hva er selektiv riving?',
    options: ['Nøye demontering for gjenbruk av materialer', 'At hele bygget rives på en gang', 'At man bare river taket', 'En type maling'],
    explanation: 'Selektiv riving er nøye demontering slik at materialer kan gjenbrukes, i motsetning til totalriving der alt fjernes.',
  },
  {
    question: 'Hva må gjøres FØR riving av en eldre bygning?',
    options: ['Kartlegge farlige materialer og søke rivetillatelse', 'Bare rive raskest mulig', 'Male bygget først', 'Flytte bygget'],
    explanation: 'Før riving må man kartlegge farlige materialer, søke rivetillatelse, lage rivingsplan med HMS og planlegge avfallshåndtering.',
  },
  {
    question: 'Hvilket helsefarlig materiale ble mye brukt i bygg mellom 1920 og 1980, og kan gi kreft og lungeskader?',
    options: ['Asbest', 'Tre', 'Gips', 'Glassull'],
    explanation: 'Asbest ble brukt 1920–1980 i isolasjon, plater og gulvbelegg. Det gir kreft og lungeskader og må saneres av sertifiserte.',
  },
  {
    question: 'Hvem skal kartlegge farlige materialer før riving?',
    options: ['Et sertifisert firma', 'Hvem som helst', 'Naboen', 'Ingen, det er ikke nødvendig'],
    explanation: 'Før riving må et sertifisert firma kartlegge farlige materialer som asbest, PCB, bly og kvikksølv.',
  },
  {
    question: 'Hvilket støvdempende tiltak brukes ofte under riving?',
    options: ['Vanning av området', 'Å åpne alle vinduer', 'Å bruke mer kraft', 'Å fjerne all sikring'],
    explanation: 'Vanning brukes til støvdemping under riving, sammen med avsperring av området og kontinuerlig vurdering av stabilitet.',
  },
],

  'bygg-anlegg-vg1-40': [
  {
    question: 'Hva betyr universell utforming?',
    options: ['At bygg skal kunne brukes av alle, uten behov for spesiell tilpasning', 'At alle bygg skal se like ut', 'At bygg bare er for rullestolbrukere', 'At bygg skal være billigst mulig'],
    explanation: 'Universell utforming betyr at produkter og omgivelser kan brukes av alle mennesker i størst mulig grad uten spesiell tilpasning.',
  },
  {
    question: 'Hva er maks stigning på uteareal ifølge TEK17 for trinnfri atkomst?',
    options: ['1:20', '1:2', '1:50', '1:5'],
    explanation: 'TEK17 krever maks stigning 1:20 på uteareal og trinnfri atkomst til hovedinngang.',
  },
  {
    question: 'Hva er minste dørbredde til hovedinngang ifølge TEK17?',
    options: ['90 cm (0,9 m)', '50 cm', '120 cm', '70 cm'],
    explanation: 'Inngangsdøren skal være minimum 90 cm bred, med terskel maks 25 mm og trinnfritt nivå.',
  },
  {
    question: 'Fra hvor mange etasjer er heis obligatorisk?',
    options: ['Fra 3 etasjer', 'Fra 10 etasjer', 'Heis er aldri obligatorisk', 'Fra 2 etasjer'],
    explanation: 'Heis er obligatorisk fra 3 etasjer, og må ha størrelse tilpasset rullestol.',
  },
  {
    question: 'Hva er kravet til snusirkel på et tilgjengelig bad/WC?',
    options: ['Ø150 cm', 'Ø50 cm', 'Ø80 cm', 'Ingen krav'],
    explanation: 'Et tilgjengelig bad/WC skal ha snusirkel Ø150 cm og håndtak ved toalettet, slik at rullestolbrukere kan snu.',
  },
],

  'bygg-anlegg-vg1-41': [
  {
    question: 'I hvilken enhet måles lydnivå?',
    options: ['Desibel (dB)', 'Hertz (Hz)', 'Watt (W)', 'Pascal (Pa)'],
    explanation: 'Lydnivå (styrke) måles i desibel (dB). Frekvens (tonehøyde) måles derimot i hertz (Hz).',
  },
  {
    question: 'Hva er luftlyd?',
    options: ['Lyd som går gjennom luften, f.eks. tale og musikk', 'Lyd fra skritt via gulvet', 'Vibrasjoner i materialer', 'En type isolasjon'],
    explanation: 'Luftlyd går gjennom luften (tale, musikk). Trinnlyd kommer fra skritt og slag via konstruksjonen.',
  },
  {
    question: 'Hvilket tiltak reduserer etterklang og støy inne i et rom?',
    options: ['Lydabsorpsjon med f.eks. himlingsplater med hull', 'Å fjerne all isolasjon', 'Å bore hull i veggen', 'Å åpne vinduene'],
    explanation: 'Lydabsorpsjon (himlingsplater med hull, tekstiler, akustikkpaneler) reduserer etterklang og støy i selve rommet.',
  },
  {
    question: 'Hva er et typisk lydteknisk feilpunkt i en konstruksjon?',
    options: ['Lydbroer via vegger og tak, samt hull og spalter', 'For mye isolasjon', 'For tunge vegger', 'For god tetting'],
    explanation: 'Typiske feil er lydbroer via vegger og tak, hull og spalter, rør og kanaler som overfører lyd, og mangelfull tetting.',
  },
  {
    question: 'Hva er TEK17-kravet til trinnlydnivå mellom boliger?',
    options: ['Maksimum 53 dB', 'Minimum 100 dB', 'Maksimum 5 dB', 'Det finnes ikke krav'],
    explanation: 'TEK17 krever maksimum 53 dB trinnlydnivå og minimum 55 dB luftlydisolasjon mellom boliger.',
  },
],

  'bygg-anlegg-vg1-42': [
  {
    question: 'Hva er nettspenningen i vanlige stikkontakter i Norge?',
    options: ['230 V', '12 V', '400 V', '110 V'],
    explanation: 'Vanlig nettspenning i Norge er 230 V mellom fase og nøytral i stikkontakter.',
  },
  {
    question: 'Hvem skal jobbe på strømførende elektrisk utstyr?',
    options: ['Kun elektrikere', 'Alle på byggeplassen', 'Tømreren', 'Maskinføreren'],
    explanation: 'Kun elektrikere skal jobbe på strømførende utstyr. Bygningsarbeidere må forstå grunnleggende elektrisitet for sikkerhet og samarbeid.',
  },
  {
    question: 'Hvordan beregnes elektrisk effekt?',
    options: ['Effekt = strøm × spenning', 'Effekt = strøm + spenning', 'Effekt = spenning / strøm', 'Effekt = strøm − spenning'],
    explanation: 'Effekt (watt) = strøm (ampere) × spenning (volt).',
  },
  {
    question: 'Når legger elektrikeren typisk kabler i en bindingsverksvegg?',
    options: ['Etter isolasjon, men før gipsing', 'Etter at veggen er ferdig malt', 'Før isolasjonen legges inn', 'Etter at gulvet er lagt'],
    explanation: 'I rekkefølge: el-rør før betongstøp, kabler etter isolasjon men før gipsing, og armaturer etter maling.',
  },
  {
    question: 'Hva må gjøres med elektriske gjennomføringer i en brannvegg?',
    options: ['De må branntettes', 'De kan stå åpne', 'De males over', 'De fylles med vanlig sparkel'],
    explanation: 'Gjennomføringer for kabler og kanaler i brannvegger må branntettes, ofte i samarbeid mellom elektriker og bygningsarbeider.',
  },
],

  'bygg-anlegg-vg1-43': [
  {
    question: 'Hva står VVS for?',
    options: ['Varme, Ventilasjon og Sanitær', 'Vann, Vegg og Sluk', 'Ventil, Vifte og Servant', 'Varme, Vann og Strøm'],
    explanation: 'VVS står for Varme, Ventilasjon og Sanitær – de tekniske systemene rørleggeren arbeider med.',
  },
  {
    question: 'Hvilket rørmateriale brukes typisk til vannledning innendørs?',
    options: ['PEX (plast)', 'PVC til avløp', 'Sprinklerstål', 'Bly'],
    explanation: 'PEX (plast) og kobber brukes til vannledning, mens PP/PVC brukes til avløp og stål til sprinkleranlegg.',
  },
  {
    question: 'Hvilket minste fall bør et avløpsrør ha?',
    options: ['Minimum 1–2 cm per meter', 'Minimum 10 cm per meter', 'Ingen fall', 'Minimum 1 mm per 10 meter'],
    explanation: 'Avløpsrør legges med fall på minimum 1–2 cm per meter slik at avløpsvannet renner av seg selv.',
  },
  {
    question: 'Hva koordinerer tømrer og rørlegger om i et våtrom?',
    options: ['Slukplassering, fall til sluk og slukmansjett før membran', 'Husets farge', 'Takstein', 'Vindusplassering'],
    explanation: 'I våtrom koordinerer fagene slukplassering, at gulvet bygges med fall til sluk, og at slukmansjett kommer på plass før membran.',
  },
  {
    question: 'Hvorfor isoleres varme vannrør?',
    options: ['For å redusere varmetap', 'For å gjøre dem tyngre', 'For å lede strøm', 'For at de skal fryse'],
    explanation: 'Varme rør isoleres for å redusere varmetap, slik at varmen kommer dit den skal i stedet for å tapes underveis.',
  },
],

  'bygg-anlegg-vg1-44': [
  {
    question: 'Hva skjer med betong når temperaturen synker under +5 °C?',
    options: ['Den herder saktere og stopper ved frost', 'Den herder raskere', 'Den blir sterkere umiddelbart', 'Ingenting'],
    explanation: 'Betong herder sakte under +5 °C og herdingen stopper ved frost. Derfor må man ta spesielle tiltak ved vinterstøp.',
  },
  {
    question: 'Hvilket tiltak brukes for å støpe betong om vinteren?',
    options: ['Varm betong, isolert forskaling og eventuelt varmetelt', 'Kald betong og ingen tildekking', 'Mer vann i betongen', 'Vente til våren uansett'],
    explanation: 'Ved vinterstøp brukes varm betong, isolert forskaling, varmetelt og eventuelt varmekabler, samt forlenget herdetid.',
  },
  {
    question: 'Hva er et viktig sikkerhetstiltak på stillas om vinteren?',
    options: ['Kontrollere is og rydde snø på plattformene', 'Fjerne rekkverket', 'La snøen ligge', 'Bruke kortere stillas'],
    explanation: 'Om vinteren må man rydde snø, strø, og kontrollere is på stillas for å unngå glatte og farlige overflater.',
  },
  {
    question: 'Hvorfor er korte dager en utfordring ved vinterbygging?',
    options: ['Begrenset dagslys gir behov for belysning og kortere arbeidstid', 'Det blir for varmt', 'Materialene tørker for raskt', 'Det påvirker ikke arbeidet'],
    explanation: 'Korte dager gir lite dagslys, behov for ekstra belysning og kan begrense arbeidstiden.',
  },
  {
    question: 'Hva er et godt verneutstyrstiltak for arbeidere om vinteren?',
    options: ['Varme klær i lag og fottøy med godt grep', 'Tynne klær', 'Sandaler', 'Ingen hansker'],
    explanation: 'Om vinteren brukes varme klær i lag, hansker som fungerer, fottøy med godt grep og hjelm med varmt fôr, samt varme pauser.',
  },
],

  'bygg-anlegg-vg1-45': [
  {
    question: 'Hvilket kompetanseområde fra VG1 handler om å lese byggetegninger og bruke målestokk?',
    options: ['Tegning og dokumentasjon', 'Materialkunnskap', 'HMS og sikkerhet', 'Kvalitet og kontroll'],
    explanation: 'Tegning og dokumentasjon dekker å lese byggetegninger, forstå målestokk og symboler, samt BIM og digitale verktøy.',
  },
  {
    question: 'Hva er et godt råd til fagprøven?',
    options: ['Planlegging er halve jobben', 'Begynne uten å lese oppgaven', 'Hoppe over dokumentasjon', 'Jobbe uten verneutstyr'],
    explanation: 'God planlegging er halve jobben på fagprøven. Man bør lese oppgaven nøye og dokumentere arbeidet.',
  },
  {
    question: 'Hvilken holdning er viktig i arbeidslivet ifølge oppsummeringen?',
    options: ['Ærlighet om feil og samarbeidsevne', 'Skjule feil', 'Jobbe helt alene', 'Ignorere kunder'],
    explanation: 'Gode holdninger er respekt for kolleger og kunder, ærlighet om feil, samarbeidsevne og stolthet i arbeidet.',
  },
  {
    question: 'Hvilket VG1-kompetanseområde dekker personlig verneutstyr og fallsikring?',
    options: ['HMS og sikkerhet', 'Materialkunnskap', 'Tegning og dokumentasjon', 'Kvalitet og kontroll'],
    explanation: 'HMS og sikkerhet dekker personlig verneutstyr, fallsikring, stillas og risikokunnskap.',
  },
  {
    question: 'Hva bør du vurdere når du velger retning på VG2?',
    options: ['Egne interesser og styrker', 'Hva som er nærmest skolen', 'Hva vennene velger', 'Hvilken farge logoen har'],
    explanation: 'Når du velger VG2-retning (tømrer, murer, betongfag, anleggsteknikk osv.) bør du vurdere egne interesser og styrker.',
  },
],

};

export default quizData_byggAnleggVg1;
