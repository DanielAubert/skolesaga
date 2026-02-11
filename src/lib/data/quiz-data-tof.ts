import type { QuizQuestion } from './quiz-data';

const quizData_tof: Record<string, QuizQuestion[]> = {
  'tof-1-1': [
  {
    question: 'Hva er det første steget i vitenskapelig metode?',
    options: ['Observasjon og problemstilling', 'Hypotese', 'Eksperiment', 'Konklusjon'],
    explanation: 'Vitenskapelig metode starter med a observere et fenomen og stille sporsmsl.',
  },
  {
    question: 'Hva kjennetegner en god hypotese?',
    options: ['Den er testbar og kan falsifiseres', 'Den er alltid sann', 'Den beskriver en mening', 'Den kan ikke testes'],
    explanation: 'En god hypotese måkunne testes og potensielt vises feil.',
  },
  {
    question: 'Hva er forskjellen mellom validitet og reliabilitet?',
    options: ['Validitet er om vi måler riktig, reliabilitet er om malingen er pålitelig', 'De er det samme', 'Validitet er pålitelighet', 'Reliabilitet er nøyaktighet'],
    explanation: 'Validitet handler om vi måler det vi faktisk vil male, reliabilitet om konsistens.',
  },
  {
    question: 'Hva er en uavhengig variabel?',
    options: ['Variabelen forskeren endrer', 'Variabelen som males', 'Variabler som holdes konstante', 'Tilfeldige feil'],
    explanation: 'Den uavhengige variabelen er det forskeren manipulærer for å se effekten.',
  },
  {
    question: 'Hvorfor er kontrollgrupper viktige i eksperimenter?',
    options: ['For å ha en baseline a sammenligne med', 'For å gjøre eksperimentet større', 'For a spare tid', 'De er ikke viktige'],
    explanation: 'Kontrollgrupper gir en baseline slik at vi vet om endringer skyldes det vi tester.',
  },
],


  'tof-1-2': [
  {
    question: 'Hva er medianen i datasettet: 3, 7, 8, 9, 12?',
    options: ['8', '7.8', '9', '7'],
    explanation: 'Medianen er den midterste verdien i et sortert datasett. Med 5 verdier er det den tredje: 8.',
  },
  {
    question: 'Hvilken metode er best for a etablære årsakssammenheng?',
    options: ['Eksperiment med kontrollgruppe', 'Observasjon', 'Sporreundersøkelse', 'Intervju'],
    explanation: 'Bare eksperimenter med kontrollgrupper kan etablære årsakssammenheng.',
  },
  {
    question: 'Hva viser standardavviket?',
    options: ['Spredningen i dataene', 'Gjennomsnittsverdien', 'Antall malinger', 'Den høyeste verdien'],
    explanation: 'Standardavviket viser hvor mye verdiene typisk avviker fra gjennomsnittet.',
  },
  {
    question: 'Hva er forskjellen mellom kvantitative og kvalitative data?',
    options: ['Kvantitative er tall, kvalitative er beskrivelser', 'De er det samme', 'Kvantitative er ord', 'Kvalitative er tall'],
    explanation: 'Kvantitative data er tall og malinger, kvalitative er beskrivende og kategoriske.',
  },
  {
    question: 'Hva er variasjonsbredde?',
    options: ['Forskjellen mellom høyeste og laveste verdi', 'Gjennomsnittet', 'Den vanligste verdien', 'Standardavviket'],
    explanation: 'Variasjonsbredden er Max - Min og viser dataenes totale spredning.',
  },
],


  'tof-1-3': [
  {
    question: 'Hvilken oppfinnelse kjennetegner den industrielle revolusjon?',
    options: ['Dampmaskinen', 'Internett', 'Telefonen', 'Plogen'],
    explanation: 'Dampmaskinen var nokkeloppfinnelsen som muliggjorde fabrikker og tog.',
  },
  {
    question: 'Nårstårtet den digitale revolusjonen?',
    options: ['Ca. 1970', 'Ca. 1900', 'Ca. 1950', 'Ca. 2000'],
    explanation: 'Den digitale revolusjonen startet rundt 1970 med utviklingen av mikroprosessorer.',
  },
  {
    question: 'Hva menes med "digital kloeft"?',
    options: ['Ulikhet i tilgang til digital teknologi', 'En fysisk sprekk i en datamaskin', 'Forskjell mellom gamle og nye programmer', 'Mangel påinternettforbindelse'],
    explanation: 'Digital kloeft beskriver ulikheten mellom de som har og ikke har tilgang til digital teknologi.',
  },
  {
    question: 'Hva er baerekraftig teknologi?',
    options: ['Teknologi som møter behovene uten a ødelegge for fremtiden', 'Teknologi som varer lenge', 'Billig teknologi', 'Gammel teknologi'],
    explanation: 'Baerekraftig teknologi møter dagens behov uten a ødelegge fremtidige generasjoners muligheter.',
  },
  {
    question: 'Hvilken teknologisk revolusjon ga oss telefon og radio?',
    options: ['Den elektriske revolusjon (1880-1920)', 'Den industrielle revolusjon', 'Den digitale revolusjon', 'Jordbruksrevolusjonen'],
    explanation: 'Den elektriske revolusjonen (1880-1920) ga oss elektrisk kraft, telefon og radio.',
  },
],


  'tof-1-4': [
  {
    question: 'Hva er det første steget i designprosessen?',
    options: ['Empati / Forsta problemet', 'Lage prototype', 'Brainstorming', 'Testing'],
    explanation: 'Man måførst forstå brukeren og problemet for man kan begynne a designe løsninger.',
  },
  {
    question: 'Hva star "S" for i SCAMPER?',
    options: ['Substitute (Erstatte)', 'Scale (Skalære)', 'Simplify (Forenkle)', 'Start (Starte)'],
    explanation: 'SCAMPER er en kreativ metode der S står for Substitute - kan vi erstatte noe?',
  },
  {
    question: 'Hva er en prototype?',
    options: ['En tidlig, førenklet versjon av et produkt for testing', 'Det ferdige produktet', 'En tegning', 'En ide'],
    explanation: 'En prototype er en tidlig versjon som brukes til testing og utvikling.',
  },
  {
    question: 'Hva er en viktig regel under brainstorming?',
    options: ['Ingen kritikk av ideer', 'Bare en person snakker', 'Kun realistiske ideer', 'Anonyme forslag'],
    explanation: 'Under brainstorming skal man ikke kritisere ideer, da dette hemmer kreativiteten.',
  },
  {
    question: 'Hva er forskjellen mellom oppfinnelse og innovasjon?',
    options: ['Oppfinnelse er a skape noe nytt, innovasjon er a ta det i bruk praktisk', 'De er det samme', 'Innovasjon kommer for oppfinnelse', 'Oppfinnelse er praktisk bruk'],
    explanation: 'Oppfinnelse skaper noe nytt, innovasjon tar ideer i praktisk bruk og skaper verdi.',
  },
],


  'tof-1-5': [
  {
    question: 'Hva males i ohm?',
    options: ['Motstand', 'Spenning', 'Strom', 'Effekt'],
    explanation: 'Motstand (R) males i ohm. Spenning males i volt, strøm i ampere.',
  },
  {
    question: 'Hvorfor trenger en LED motstand?',
    options: ['For a begrense strømmen og unngå åt LED-en brenner', 'For a oke lysstyrken', 'For a lagre energi', 'For a endre fargen'],
    explanation: 'Uten motstand vil for mye strøm ga gjennom LED-en og ødelegge den.',
  },
  {
    question: 'Hva gjør digitalWrite(13, HIGH)?',
    options: ['Setter pinne 13 til høy spenning (5V)', 'Leser verdien fra pinne 13', 'Slar av pinne 13', 'Definerer pinne 13'],
    explanation: 'digitalWrite(pin, HIGH) setter den digitale pinnen til 5V.',
  },
  {
    question: 'Hva er Ohms lov?',
    options: ['V = I x R', 'V = I / R', 'V = I + R', 'V = I - R'],
    explanation: 'Ohms lov: Spenning (V) = Strom (I) x Motstand (R).',
  },
  {
    question: 'Hva er forskjellen mellom setup() og loop() i Arduino?',
    options: ['setup() kjører en gang, loop() kjører kontinuerlig', 'De er det samme', 'loop() kjører først', 'setup() kjører kontinuerlig'],
    explanation: 'setup() initialiserer og kjøres en gang, loop() inneholder hovedprogrammet som gjentas.',
  },
],


  'tof-1-6': [
  {
    question: 'Hva gjør en sensor?',
    options: ['Maler fysiske egenskaper', 'Utfører fysiske handlinger', 'Lagrer data', 'Viser informasjon'],
    explanation: 'Sensorer måler fysiske egenskaper og konverterer til elektriske signaler.',
  },
  {
    question: 'Hva er en aktuator?',
    options: ['En komponent som utfører fysiske handlinger', 'En komponent som måler temperatur', 'En type prosessor', 'En type motstand'],
    explanation: 'Aktuatorer utfører fysiske handlinger basert påelektriske signaler.',
  },
  {
    question: 'Hvabrukes PWM til?',
    options: ['A simulære analog utgang for dimming og hastighet', 'A lese analoge sensorer', 'A kommunisere med andre enheter', 'A lagre data permanent'],
    explanation: 'PWM varierer pulsbredden for a simulære verdier mellom 0 og 5V.',
  },
  {
    question: 'Hva er forskjellen mellom analog og digital input?',
    options: ['Digital har to tilstander, analog kan lese mange verdier', 'De er det samme', 'Analog har to tilstander', 'Digital har mange verdier'],
    explanation: 'Digital er HIGH/LOW, analog leser verdier fra 0-1023 påArduino.',
  },
  {
    question: 'Hva gjør analogRead(A0)?',
    options: ['Leser en analog verdi fra pinne A0', 'Skriver en verdi til pinne A0', 'Setter pinne A0 til digital', 'Slutter programmet'],
    explanation: 'analogRead() leser en analog verdi fra 0-1023 fra den angitte pinnen.',
  },
],


  'tof-1-7': [
  {
    question: 'Hvilken energikilde er Norges hovedkilde for elektrisitet?',
    options: ['Vannkraft', 'Vindkraft', 'Olje', 'Kjernekraft'],
    explanation: 'Ca. 90% av Norges strømproduksjon kommer fra vannkraft.',
  },
  {
    question: 'Hva sier energibevaringsloven?',
    options: ['Energi kan ikke skapes eller ødelegges, bare omformes', 'All energi gårtapt til varme', 'Energi målagres i batterier', 'Energi kan skapes fra ingenting'],
    explanation: 'Energibevaringsloven sier at total energi er konstant - den bare omformes.',
  },
  {
    question: 'Hvilken energiomforming har høyest virkningsgrad?',
    options: ['Elektromotor i elbil', 'Forbrenningsmotor', 'Glodelampe', 'Dampturbin'],
    explanation: 'Elektromotorer i elbiler har typisk 85-95% virkningsgrad.',
  },
  {
    question: 'Hva er virkningsgrad?',
    options: ['Nyttig energi ut delt påenergi inn, ganger 100%', 'Total energi', 'Energitap', 'Energiforbruk'],
    explanation: 'Virkningsgrad = (Nyttig energi ut / Energi inn) x 100%.',
  },
  {
    question: 'Hvilken energikilde er ikke fornybar?',
    options: ['Olje', 'Vannkraft', 'Vindkraft', 'Solenergi'],
    explanation: 'Olje er fossilt brensel og ikke fornybart. De andre er fornybare energikilder.',
  },
],


  'tof-1-8': [
  {
    question: 'Hvilket materiale er lettest av disse?',
    options: ['Aluminium', 'Stal', 'Kopper', 'Bly'],
    explanation: 'Aluminium har tetthet ca. 2.7 g/cm3, mens stal har ca. 7.8 g/cm3.',
  },
  {
    question: 'Hva er en kompositt?',
    options: ['Et materiale laget av flere ulike materialer kombinert', 'En type plast', 'Et rent metall', 'Naturlig tre'],
    explanation: 'Kompositter kombinerer to eller flere materialer for a utnytte de beste egenskapene.',
  },
  {
    question: 'Hva er forskjellen påtermoplast og herdeplast?',
    options: ['Termoplast kan smeltes om, herdeplast kan ikke', 'Herdeplast er mykere', 'Termoplast er sterkere', 'De er helt like'],
    explanation: 'Termoplast kan varmes og formes på nytt, herdeplast gjennomgar irreversibel reaksjon.',
  },
  {
    question: 'Hva er styrke?',
    options: ['Materialets evne til a motsta brudd', 'Materialets evne til a motsta deformasjon', 'Materialets vekt', 'Materialets farge'],
    explanation: 'Styrke er materialets evne til a tale belastning for det gåri stykker.',
  },
  {
    question: 'Hva er stivhet?',
    options: ['Evnen til a motsta deformasjon', 'Evnen til a motsta brudd', 'Materialets hardhet', 'Materialets elastisitet'],
    explanation: 'Stivhet er hvor mye materialet motstdr deformasjon under belastning.',
  },
],


  'tof-1-9': [
  {
    question: 'Hva er et Gantt-diagram?',
    options: ['En grafisk tidsplan for prosjekter', 'Et elektrisk kretsskjema', 'En type flytdiagram', 'En teknisk tegning'],
    explanation: 'Gantt-diagram viser oppgaver langs en tidsakse med stolper som indikerer varighet.',
  },
  {
    question: 'Hvilken fase kommer typisk først i et prosjekt?',
    options: ['Initiering', 'Gjennomforing', 'Avslutning', 'Testing'],
    explanation: 'Initiering kommer først - der defineres problemstilling, mal og rammer.',
  },
  {
    question: 'Hva kjennetegner et prosjekt?',
    options: ['Tidsbegrenset innsats for a na et definert mal', 'Daglig rutinearbeid', 'Ubegrenset tidsramme', 'Ingen klare mal'],
    explanation: 'Prosjekter har klare mal, start og slutt, begrensede ressurser, og er unike.',
  },
  {
    question: 'Hva bør en prosjektdagbok inneholde?',
    options: ['Dato, aktiviteter, problemer, løsninger, beslutninger', 'Bare sluttresultatet', 'Kun bilder', 'Bare kode'],
    explanation: 'Prosjektdagboken dokumenterer alt arbeid, problemer, løsninger og beslutninger.',
  },
  {
    question: 'Hvilke hoveddeler bør en teknisk rapport ha?',
    options: ['Innledning, metode, resultater, diskusjon, konklusjon', 'Bare resultater', 'Kun bilder og grafer', 'Bare kode'],
    explanation: 'En teknisk rapport følger en struktur med innledning, metode, resultater, diskusjon og konklusjon.',
  },
],


  'tof-1-10': [
  {
    question: 'Hva bør du gjøre når du presenterer for en ikke-teknisk malgruppe?',
    options: ['Bruke enkelt språk og analogier', 'Bruke mest mulig faguttrykk', 'Vise detaljert kode', 'Snakke raskt for a fa med alt'],
    explanation: 'For ikke-tekniske malgrupper bør du førenkle språket og bruke analogier de kjenner.',
  },
  {
    question: 'Hva bør unngås påPowerPoint-slides?',
    options: ['Mye tekst og fulle setninger', 'Relevante bilder', 'Enkle diagrammer', 'Nokkelord'],
    explanation: 'Slides bør ha lite tekst - de er visuelle hjelpemidler, ikke manuskript.',
  },
  {
    question: 'Hva er viktig under selve fremforingen?',
    options: ['Øyekontakt med publikum', 'Lese direkte fra notatene', 'Sta med ryggen til publikum', 'Snakke monotont'],
    explanation: 'Øyekontakt skaper forbindelse med publikum og viser at du er trygg påstoffet.',
  },
  {
    question: 'Hvordan bør du strukturere en god presentasjon?',
    options: ['Innledning, hoveddel, avslutning', 'Bare resultater', 'Tilfeldig rekkefølge', 'Bare spørsmål'],
    explanation: 'En god presentasjon har innledning, logisk hoveddel og oppsummerende avslutning.',
  },
  {
    question: 'Hva bør en vitenskapelig poster inneholde?',
    options: ['Tittel, bakgrunn, metode, resultater, konklusjon', 'Bare bilder', 'Kun tekst', 'Bare grafer'],
    explanation: 'En poster skal kunne forstås uten muntlig forklaring og inneholder alle hovedelementer.',
  },
],


  'tof-2-1': [
  {
    question: 'Hva er intern validitet?',
    options: ['Om vi kan stole påårsakssammenhengen i eksperimentet', 'Om resultatene kan generaliseres', 'Om malingen er pålitelig', 'Om hypotesen er testbar'],
    explanation: 'Intern validitet handler om hvorvidt vi kan si at X faktisk fordrsaket Y i studien.',
  },
  {
    question: 'Hva er konfunderende variabler?',
    options: ['Faktorer som kan påvirke både uavhengig og avhengig variabel', 'Variabler vi måler', 'Variabler vi kontrollærer', 'Tilfeldige feil'],
    explanation: 'Konfunderende variabler kan gi falske sammenhenger og måkontrollæres for.',
  },
  {
    question: 'Hva er et kvasi-eksperimentelt design?',
    options: ['Sammenligning av grupper uten full randomisering', 'Et fullstendig kontrollert eksperiment', 'En observasjonsstudie', 'Et intervju'],
    explanation: 'Kvasi-eksperimenter sammenligner grupper men uten tilfeldig fordeling til gruppene.',
  },
  {
    question: 'Hva er ekstern validitet?',
    options: ['Om resultatene kan generaliseres til andre situasjoner', 'Om malingen er riktig', 'Om årsakssammenhengen er sikker', 'Om hypotesen er god'],
    explanation: 'Ekstern validitet handler om hvorvidt funnene gjelder utenfor eksperimentet.',
  },
  {
    question: 'Hvorfor er randomisering viktig?',
    options: ['For a sikre at gruppene er sammenlignbare', 'For å gjøre studien større', 'For a spare tid', 'For a fa flere deltakere'],
    explanation: 'Randomisering fordeler konfunderende variabler likt mellom gruppene.',
  },
],


  'tof-2-2': [
  {
    question: 'Hva er p-verdien?',
    options: ['Sannsynligheten for resultatet gitt at nullhypotesen er sann', 'Sannsynligheten for at hypotesen er sann', 'Effektstørrelsen', 'Antall deltakere'],
    explanation: 'P-verdien viser hvor sannsynlig resultatet er hvis det ikke er noen reell effekt.',
  },
  {
    question: 'Hva er en Type I feil?',
    options: ['A forkaste nullhypotesen nården er sann (falsk positiv)', 'A beholde nullhypotesen nården er usann', 'A gjøre regnefeil', 'A velge feil test'],
    explanation: 'Type I feil er a konkludere at det er en effekt nårdet egentlig ikke er det.',
  },
  {
    question: 'Nårbrukes t-test?',
    options: ['For a sammenligne gjennomsnitt mellom to grupper', 'For a sammenligne tre grupper', 'For kategoriske variabler', 'For korrelasjon'],
    explanation: 't-test brukes for å sammenligne gjennomsnitt mellom to grupper.',
  },
  {
    question: 'Hva er et 95% konfidensintervall?',
    options: ['Et intervall der vi er 95% sikre påat den sanne verdien ligger', 'Gjennomsnittet', 'Standardavviket', 'P-verdien'],
    explanation: 'Konfidensintervallet viser usikkerheten i estimatet og inkluderer sannsynligvis den sanne verdien.',
  },
  {
    question: 'Hva er effektstørrelse?',
    options: ['Et mal påhvor stor den praktiske effekten er', 'P-verdien', 'Antall deltakere', 'Standardavviket'],
    explanation: 'Effektstørrelse viser den praktiske betydningen, ikke bare om effekten er signifikant.',
  },
],


  'tof-2-3': [
  {
    question: 'Hvor stor er en nanometer?',
    options: ['En milliardtedel av en meter', 'En milliontedel av en meter', 'En tusendel av en meter', 'En centimeter'],
    explanation: 'En nanometer er 10^-9 meter, altsa en milliardtedel av en meter.',
  },
  {
    question: 'Hvorfor har materialer andre egenskaper pånanoskala?',
    options: ['Stort overflate/volum-forhold og kvanteeffekter', 'De er lettere', 'De er tyngre', 'De er større'],
    explanation: 'Pa nanoskala dominerer overflateeffekter og kvanteeffekter materialenes oppforsel.',
  },
  {
    question: 'Hva er grafen?',
    options: ['Et enkeltlag av karbonatomer i heksagonalt gitter', 'En type plast', 'Et metall', 'En keramikk'],
    explanation: 'Grafen er det sterkeste kjente materialet og en utmerket elektrisk leder.',
  },
  {
    question: 'Hvabrukes karbon-nanoror til?',
    options: ['Komposittmaterialer og elektronikk', 'Mat', 'Kleskdyr', 'Bygninger'],
    explanation: 'Karbon-nanoror er ekstremt sterke og gode ledere, brukt i avanserte materialer.',
  },
  {
    question: 'Hva er EPR-effekten i nanomedisin?',
    options: ['At nanopartikler akkumulæres i svulster pga. lekke blodkar', 'At nanopartikler loses i vann', 'At nanopartikler lyser', 'At nanopartikler er magnetiske'],
    explanation: 'EPR (Enhanced Permeability and Retention) gjør at nanopartikler samles i svulster.',
  },
],


  'tof-2-4': [
  {
    question: 'Hvorfor brukes flertrinnsraketter?',
    options: ['For a kaste tømme drivstofftanker og oke effektiviteten', 'For a se finere ut', 'For å gå saktere', 'For å bruke mer drivstoff'],
    explanation: 'Flertrinnsraketter kaster tømme tanker slik at raketten ikke akselærerer unødvendig masse.',
  },
  {
    question: 'Hva er en geostasjonårbane?',
    options: ['En bane der satellitten henger over samme punkt påekvator', 'Den laveste banen', 'En elliptisk bane', 'En polar bane'],
    explanation: 'I geostasjonårbane (35786 km) har satellitten 24 timers omløpstid og henger over samme punkt.',
  },
  {
    question: 'Hvor er L2-punktet der James Webb-teleskopet er plassert?',
    options: ['1.5 millioner km fra Jorden, motsatt retning fra solen', 'Pa Manen', 'I lav jordbane', 'Ved Mars'],
    explanation: 'L2 er et Lagrange-punkt der gravitasjon fra sol og jord balanseres.',
  },
  {
    question: 'Hvilken metode brukes for a oppdage exoplaneter ved a male lysreduksjon?',
    options: ['Transittmetoden', 'Radialhastighetmetoden', 'Direkte avbildning', 'Gravitasjonslinser'],
    explanation: 'Transittmetoden måler lysreduksjon nåren planet passerer foran stjernen.',
  },
  {
    question: 'Hva er den største utfordringen ved en bemannet Mars-ferd?',
    options: ['Lang reisetid og straling', 'At det er for kaldt', 'At det er for varmt', 'Mangel påinteresse'],
    explanation: 'Reisen tar 6-9 maneder hver vei, og astronautene utsettes for kosmisk straling.',
  },
],


  'tof-2-5': [
  {
    question: 'Hvilken bildediagnostisk metode bruker ikke ioniserende straling?',
    options: ['MR (magnetisk resonans)', 'CT', 'Rontgen', 'PET'],
    explanation: 'MR bruker magnetfelt og radiobolger, ikke ioniserende straling.',
  },
  {
    question: 'Hva er CRISPR-Cas9?',
    options: ['En metode for genredigering', 'En type rontgen', 'En medisin', 'Et bildediagnostisk verkty'],
    explanation: 'CRISPR-Cas9 er en "molekylaar saks" som kan klippe og redigere DNA.',
  },
  {
    question: 'Hva er persontilpasset medisin?',
    options: ['Behandling tilpasset den enkeltes genetikk og egenskaper', 'Masseprodusert medisin', 'Alternativ medisin', 'Naturmedisin'],
    explanation: 'Persontilpasset medisin bruker genetisk informasjon for a tilpasse behandling.',
  },
  {
    question: 'Hva er fordelen med robotkirurgi?',
    options: ['Større presisjon og mindre invasive inngrep', 'Det er billigere', 'Det gårraskere', 'Det krever ingen trening'],
    explanation: 'Robotkirurgi gir større presisjon, mindre snitt og raskere rekonvalesens.',
  },
  {
    question: 'Hva viser PET-skanning?',
    options: ['Metabolsk aktivitet i kroppen', 'Bare benstruktur', 'Blodstrøm', 'Elektrisk aktivitet'],
    explanation: 'PET bruker radioaktive sporstoffer for å vise metabolsk aktivitet, f.eks. i svulster.',
  },
],


  'tof-2-6': [
  {
    question: 'Hva er maskinlæring?',
    options: ['AI som lærer fra data uten eksplisitt programmering', 'Programmering av roboter', 'Automatisk tekstskriving', 'Datamaskiner som spiller spill'],
    explanation: 'Maskinlæring lar datamaskiner finne monstre i data og forbedre seg over tid.',
  },
  {
    question: 'Hva er forskjellen mellom veiledet og ikke-veiledet læring?',
    options: ['Veiledet bruker merkede data, ikke-veiledet finner monstre selv', 'De er det samme', 'Ikke-veiledet er bedre', 'Veiledet krever ingen data'],
    explanation: 'Veiledet læring har fasit (merkede data), ikke-veiledet finner monstre i umerkede data.',
  },
  {
    question: 'Hva er et nevralt nettverk?',
    options: ['En AI-arkitektur inspirert av hjernen med lag av noder', 'Et datanettverk', 'Internett', 'Et nervesystem'],
    explanation: 'Nevrale nettverk har input-, skjulte- og output-lag som prosesserer informasjon.',
  },
  {
    question: 'Hva er algoritmisk bias?',
    options: ['NårAI-systemer systematisk diskriminerer', 'En type feil i koden', 'En læringsmetode', 'En type nettverk'],
    explanation: 'Algoritmisk bias oppstar nårtreningsdata eller design fører til urettferdig behandling.',
  },
  {
    question: 'Hva er backpropagation?',
    options: ['Prosessen der feil sendes bakover for a justere vekter', 'Nårdata sendes fremover', 'En type sensor', 'En læringsalgoritme'],
    explanation: 'Backpropagation justerer vektene i nettverket basert påfeilen i output.',
  },
],


  'tof-2-7': [
  {
    question: 'Hva menes med grader av frihet (DOF) i robotikk?',
    options: ['Antall uavhengige bevegelser en robot kan utføre', 'Robotens størrelse', 'Robotens hastighet', 'Robotens vekt'],
    explanation: 'DOF beskriver hvor mange uavhengige bevegelser roboten kan gjøre, typisk 6 for full kontroll.',
  },
  {
    question: 'Hva er en cobot?',
    options: ['En samarbeidsrobot designet for sikker interaksjon med mennesker', 'En stor industrirobot', 'En medisinsk robot', 'En romfartsrobot'],
    explanation: 'Cobots har kraftbegrensning og er trygge a jobbe sammen med.',
  },
  {
    question: 'Hva er SLAM?',
    options: ['Simultan lokalisering og kartlegging', 'En type sensor', 'En robotarm', 'Et programmeringsspråk'],
    explanation: 'SLAM lar roboter bygge kart og finne sin posisjon samtidig.',
  },
  {
    question: 'Hva er lidar?',
    options: ['En sensor som måler avstand med laser', 'En type motor', 'Et kamera', 'En mikrofon'],
    explanation: 'Lidar bruker laserpulser for å lage detaljerte 3D-kart av omgivelsene.',
  },
  {
    question: 'Hva er forskjellen mellom nøyaktighet og repeterbarhet i robotikk?',
    options: ['Noyaktighet er hvor nær malet, repeterbarhet er konsistens', 'De er det samme', 'Repeterbarhet er viktigere', 'Noyaktighet er konsistens'],
    explanation: 'Noyaktighet måler avstand til mal, repeterbarhet måler hvor likt roboten gjentar bevegelser.',
  },
],


  'tof-2-8': [
  {
    question: 'Hva er konsekvensetikk?',
    options: ['Etisk vurdering basert påhandlingens konsekvenser', 'Etisk vurdering basert påregler', 'A følge loven', 'A gjøre som andre'],
    explanation: 'Konsekvensetikk vurderer handlinger etter om de maksimerer nytte.',
  },
  {
    question: 'Hva er informert samtykke?',
    options: ['At deltakere frivillig aksepterer etter å ha fatt informasjon', 'At man signerer en kontrakt', 'At man fårbetalt', 'At man er myndig'],
    explanation: 'Informert samtykke krever frivillighet, tilstrekkelig informasjon og forståelse.',
  },
  {
    question: 'Hva er føre-var-prinsippet?',
    options: ['Ved fare for alvorlig skade bør man handle selv med usikkerhet', 'Man skal alltid vente påfull sikkerhet', 'Man bør aldri ta risiko', 'Man bør ignorere risiko'],
    explanation: 'Fore-var-prinsippet sier at usikkerhet ikke bør hindre førebyggende tiltak.',
  },
  {
    question: 'Hva er pliktetikk?',
    options: ['At visse handlinger er rett eller galt uavhengig av konsekvenser', 'At konsekvenser bestemmer alt', 'At man følger følelser', 'At man gjør som andre'],
    explanation: 'Pliktetikk fokuserer påselve handlingen og respekt for rettigheter og verdighet.',
  },
  {
    question: 'Hva menes med Helsinkideklarasjonen?',
    options: ['Internasjonal standard for medisinsk forskning påmennesker', 'En fredsavtale', 'En miljøavtale', 'Et patentreglement'],
    explanation: 'Helsinkideklarasjonen setter etiske standarder for medisinsk forskning.',
  },
],


  'tof-2-9': [
  {
    question: 'Hva kjennetegner en god problemstilling?',
    options: ['Avgrenset, undersokbar og interessant', 'Bred og generell', 'Umulig a teste', 'Veldig enkel'],
    explanation: 'En god problemstilling er spesifikk nok til a kunne undersøkes med tilgjengelige ressurser.',
  },
  {
    question: 'Hva er formalet med en forskningsdagbok?',
    options: ['A dokumentere prosessen for reproduserbarhet', 'A skrive penere', 'A imponere læreren', 'A ha noe å gjøre'],
    explanation: 'Forskningsdagboken sikrer at arbeidet kan gjentas og sporfølges.',
  },
  {
    question: 'Hva bør en prosjektplan inneholde?',
    options: ['Tidsplan, milepaler, ressursbehov og risikovurdering', 'Bare sluttdato', 'Kun budsjett', 'Bare tittel'],
    explanation: 'En god prosjektplan dekker alle aspekter av gjennomforingen.',
  },
  {
    question: 'Hvorfor er litteratursok viktig?',
    options: ['For a vite hva som allærede er gjørt og finne kunnskapshull', 'For a kopiere andres arbeid', 'For å unngå å gjøre noe nytt', 'Det er ikke viktig'],
    explanation: 'Litteratursok gir oversikt over feltet og hjelper a definere egen problemstilling.',
  },
  {
    question: 'Hva er en milepael i et prosjekt?',
    options: ['Et viktig sjekkpunkt som markerer fremgang', 'Slutten påprosjektet', 'Starten påprosjektet', 'En oppgave'],
    explanation: 'Milepaler er viktige punkter som viser at prosjektet er pårett spor.',
  },
],


  'tof-2-10': [
  {
    question: 'Hva star IMRaD for?',
    options: ['Introduction, Methods, Results and Discussion', 'Important Medical Research and Data', 'International Medical Research Association', 'Innovative Methods Research and Development'],
    explanation: 'IMRaD er standardstrukturen for vitenskapelige artikler.',
  },
  {
    question: 'Hva er formalet med referanser?',
    options: ['A gi kreditt, vise belegg og unngå plagiat', 'A fylle plass', 'A vise at man har lest mye', 'A gjøre artikkelen lengre'],
    explanation: 'Referanser gir kreditt til originale forfattere og lar lesere finne kildene.',
  },
  {
    question: 'Hva bør metodedelen i en rapport inneholde?',
    options: ['Nok detaljer til at andre kan gjenta studien', 'Bare resultatene', 'Kun konklusjonen', 'Bare hypotesen'],
    explanation: 'Metodedelen måvære detaljert nok for reproduserbarhet.',
  },
  {
    question: 'Hva er et abstract?',
    options: ['Et kort sammendrag av hele artikkelen', 'Innledningen', 'Konklusjonen', 'Referanselisten'],
    explanation: 'Abstractet oppsummerer bakgrunn, metode, resultater og konklusjon påca. 200 ord.',
  },
  {
    question: 'Hva bør diskusjonsdelen inneholde?',
    options: ['Tolkning av resultater, sammenligning med tidligere forskning, begrensninger', 'Bare radata', 'Bare metode', 'Bare referanser'],
    explanation: 'Diskusjonen tolker funnene og setter dem i sammenheng med eksisterende forskning.',
  },
],


};

export default quizData_tof;
