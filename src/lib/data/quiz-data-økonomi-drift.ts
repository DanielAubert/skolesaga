import type { QuizQuestion } from './quiz-data';

const quizData_okonomi_drift: Record<string, QuizQuestion[]> = {
  'økonomi-drift-1': [
  {
    question: 'Hva er dekningsbidrag?',
    options: ['Salgsinntekt minus variable kostnader', 'Salgsinntekt minus alle kostnader', 'Salgsinntekt minus faste kostnader', 'Overskudd etter skatt'],
    explanation: 'Dekningsbidrag = Salgsinntekt - Variable kostnader. Det viser bidraget til a dekke faste kostnader og fortjeneste.',
  },
  {
    question: 'Hvilken kostnad er typisk fast?',
    options: ['Husleie', 'Ravarer', 'Emballasje', 'Provisjon til selgere'],
    explanation: 'Husleie er en fast kostnad som paløser uavhengig av produksjonsvolumet.',
  },
  {
    question: 'Hva er nullpunktet (break-even)?',
    options: ['Volumet der bedriften verken gårmed overskudd eller underskudd', 'Der prisen er lavest', 'Der salget er høyest', 'Der kostnadene er lavest'],
    explanation: 'Nullpunktet er det produksjons- og salgsvolumet der bedriften verken gårmed overskudd eller underskudd - total dekningsbidrag = faste kostnader.',
  },
  {
    question: 'Hvordan beregnes dekningsgrad?',
    options: ['(Dekningsbidrag / Salgsinntekt) x 100%', '(Faste kostnader / Salgsinntekt) x 100%', '(Variable kostnader / Salgsinntekt) x 100%', '(Overskudd / Salgsinntekt) x 100%'],
    explanation: 'Dekningsgrad = (Dekningsbidrag / Salgsinntekt) x 100%. Den viser hvor stor del av hver krone som dekker faste kostnader og fortjeneste.',
  },
  {
    question: 'Hva er sikkerhetsmargin?',
    options: ['Hvor mye salget kan synke for bedriften gårmed underskudd', 'Minimum fortjeneste', 'Maksimal produksjonskapasitet', 'Bufferlageret'],
    explanation: 'Sikkerhetsmarginen viser hvor mye salget kan synke for bedriften gårmed underskudd, altsåforskjellen mellom faktisk salg og nullpunkt.',
  },
],


  'økonomi-drift-2': [
  {
    question: 'Hva er hovedforskjellen mellom selvkost og bidragskalkulasjon?',
    options: ['Selvkost inkluderer både variable og faste kostnader', 'Selvkost inkluderer bare variable kostnader', 'Bidragskalkulasjon inkluderer faste kostnader', 'Det er ingen forskjell'],
    explanation: 'Selvkostkalkulasjon fordeler alle kostnader (inkl. faste) påproduktene, mens bidragskalkulasjon kun inkluderer variable kostnader.',
  },
  {
    question: 'Hva er tilvirkningskost?',
    options: ['Direkte kostnader pluss indirekte tilvirkningskostnader', 'Kun direkte materialer', 'Alle kostnader inkludert fortjeneste', 'Kun lønnskostnader'],
    explanation: 'Tilvirkningskost = Direkte materialer + Direkte lønn + Indirekte tilvirkningskostnader.',
  },
  {
    question: 'Hva er minstepris (smertegrense)?',
    options: ['Variable kostnader - under denne prisen taper man påhver enhet', 'Selvkost', 'Tilvirkningskost', 'Faste kostnader'],
    explanation: 'Minstepris = Variable kostnader. Under denne prisen taper bedriften penger påhver enhet som selges.',
  },
  {
    question: 'Hva er skummingsprising?',
    options: ['Høy pris ved lansering som senkes over tid', 'Lav pris for a ta markedsandeler', 'Pris basert påkostnader', 'Pris basert påkonkurrentene'],
    explanation: 'Skumming innebærer høy pris ved lansering for a maksimere inntektene fra de mest betalingsvillige kundene, for prisen senkes gradvis.',
  },
  {
    question: 'Hva er tilleggssatser i kalkulasjon?',
    options: ['Prosentsatser for a fordele indirekte kostnader påprodukter', 'Ekstra rabatter til kunder', 'Moms påvarer', 'Fortjenestemargin'],
    explanation: 'Tilleggssatser brukes for a fordele indirekte kostnader påproduktene, ofte som prosent av direkte lønn eller maskintimer.',
  },
],


  'økonomi-drift-3': [
  {
    question: 'Hva er en flaskehals i produksjonen?',
    options: ['Ressursen som begrenser total kapasitet', 'Den raskeste prosessen', 'Den billigste maskinen', 'Lageret for ferdigvarer'],
    explanation: 'En flaskehals er den ressursen eller prosessen som begrenser gjennomstrømningen i produksjonen.',
  },
  {
    question: 'Hva kjennetegner ordreproduksjon (Make-to-Order)?',
    options: ['Produserer først etter at kundeordre er mottatt', 'Produserer til lager basert påprognoser', 'Kun standardprodukter', 'Kort leveringstid'],
    explanation: 'Ordreproduksjon starter produksjon først etter at en kundeordre er mottatt, noe som gir lengre leveringstid men ingen ferdigvarelager.',
  },
  {
    question: 'Hva er takttid?',
    options: ['Tiden som er tilgjengelig per enhet for a mote ettersporselen', 'Total produksjonstid', 'Tiden for å sette opp en maskin', 'Ventetiden mellom operasjoner'],
    explanation: 'Takttid = Tilgjengelig produksjonstid / Ettersporsel. Den viser hvor ofte man måfullføre en enhet for a mote ettersporselen.',
  },
  {
    question: 'Hva er hovedmalet med Just-in-Time (JIT)?',
    options: ['Eliminere slosing og produsere riktig mengde til riktig tid', 'Maksimere lagerbeholdningen', 'Produsere så mye som mulig', 'Ha lange serier'],
    explanation: 'JIT fokuserer påa eliminere alle former for slosing (lager, ventetid, overproduksjon) ved a produsere akkurat det som trengs, nårdet trengs.',
  },
  {
    question: 'Hvilken produksjonsmetode passer best for unike, komplekse produkter?',
    options: ['Prosjektproduksjon', 'Lagerproduksjon', 'Kontinuerlig produksjon', 'Serieproduksjon'],
    explanation: 'Prosjektproduksjon passer for unike, komplekse produkter med lang gjennomløpstid, som byggeprosjekter eller skipsproduksjon.',
  },
],


  'økonomi-drift-4': [
  {
    question: 'Hva er logistikk?',
    options: ['Planlegging og kontroll av flyt av varer, tjenester og informasjon', 'Bare transport av varer', 'Kun lagerstyring', 'Bare innkjøp'],
    explanation: 'Logistikk er planlegging, gjennomforing og kontroll av effektiv flyt og lagring av varer, tjenester og informasjon fra opprinnelsespunkt til forbrukspunkt.',
  },
  {
    question: 'Hva er bestillingspunkt?',
    options: ['Lagernivået der ny bestilling måsendes', 'Maksimalt lagernivå', 'Minimum lagernivå', 'Okonomisk ordrekvantum'],
    explanation: 'Bestillingspunkt er det lagernivået der ny bestilling måsendes for å unngå å gå tom for varen fårleveransen ankommer.',
  },
  {
    question: 'Hva er EOQ (Økonomisk ordrekvantum)?',
    options: ['Bestillingsmengden som minimerer totale lager- og bestillingskostnader', 'Maksimal bestillingsmengde', 'Minimum bestillingsmengde', 'Gjennomsnittlig lagernivå'],
    explanation: 'EOQ er den bestillingsmengden som minimerer summen av bestillingskostnader og lagerkostnader.',
  },
  {
    question: 'Hva er sikkerhetslager?',
    options: ['En ekstra buffer for a beskytte mot usikkerhet', 'Utgatt varelager', 'Defekte varer', 'Varer som skal returneres'],
    explanation: 'Sikkerhetslager er en ekstra buffer for a beskytte mot usikkerhet i ettersporsel eller leveringstid.',
  },
  {
    question: 'Hvilke faktorer vurderes typisk ved valg av leverandor?',
    options: ['Pris, kvalitet, leveringsevne og service', 'Kun pris', 'Bare kvalitet', 'Kun leveringstid'],
    explanation: 'Ved valg av leverandor vurderes typisk pris, kvalitet, leveringsevne, service og økonomisk soliditet.',
  },
],


  'økonomi-drift-5': [
  {
    question: 'Hva er kvalitet i en bedriftssammenheng?',
    options: ['I hvilken grad produktet tilfredsstiller kundens krav og forventninger', 'At produktet er dyrest mulig', 'At produktet har flest funksjoner', 'At produktet er mest avansert'],
    explanation: 'Kvalitet defineres som i hvilken grad et produkt eller en tjeneste tilfredsstiller kundens krav og forventninger.',
  },
  {
    question: 'Hva er formalet med et kvalitetssystem?',
    options: ['Sikre jevn kvalitet gjennom dokumenterte prosedyrer og rutiner', 'Bare a tilfredsstille myndighetene', 'A redusere antall ansatte', 'A øke prisene'],
    explanation: 'Et kvalitetssystem sikrer jevn kvalitet gjennom dokumenterte prosedyrer, rutiner og kontinuerlig forbedring.',
  },
  {
    question: 'Hva er ISO 9001?',
    options: ['En internasjonal standard for kvalitetsstyring', 'En norsk lov om kvalitet', 'Et regnskapsprogram', 'En type maskin'],
    explanation: 'ISO 9001 er en internasjonal standard for kvalitetsstyringssystemer som definerer krav til kvalitetsledelse.',
  },
  {
    question: 'Hva er kontinuerlig forbedring (Kaizen)?',
    options: ['Sma, stadige forbedringer over tid', 'Store, radikale endringer', 'A beholde alt som det er', 'A bare fokusere påkostnadskutt'],
    explanation: 'Kaizen er en japansk filosofi som vektlegger sma, stadige forbedringer over tid involvering av alle ansatte.',
  },
  {
    question: 'Hva er feilkostnader?',
    options: ['Kostnader som oppstar nårnoe ikke fungerer som det skal', 'Planlagte vedlikeholdskostnader', 'Investeringer i kvalitet', 'Lonnskostnader'],
    explanation: 'Feilkostnader er kostnader som oppstar nårnoe ikke fungerer som det skal, inkludert reklamasjoner, omarbeid og kassasjon.',
  },
],


  'økonomi-drift-6': [
  {
    question: 'Hva kjennetegner et prosjekt?',
    options: ['Unikt, tidsbegrenset tiltak med definert mal', 'Gjentagende rutinearbeid', 'Kontinuerlig produksjon', 'Daglig drift'],
    explanation: 'Et prosjekt er et unikt, tidsbegrenset tiltak med definert mal og ressurser, i motsetning til gjentagende rutinearbeid.',
  },
  {
    question: 'Hva er prosjektets "jerntrinkant"?',
    options: ['Balansen mellom tid, kostnad og kvalitet/omfang', 'De tre viktigste prosjektmedlemmene', 'De tre første fasene i prosjektet', 'Tre typer risiko'],
    explanation: 'Prosjektets jerntrekant viser balansen mellom tid, kostnad og kvalitet/omfang - endringer i en faktor påvirker de andre.',
  },
  {
    question: 'Hva er et Gantt-diagram?',
    options: ['Et diagram som viser aktiviteter og tidsplan visuelt', 'Et organisasjonskart', 'Et økonomisk regnskap', 'En risikoanalyse'],
    explanation: 'Et Gantt-diagram er et visuelt verkty som viser prosjektets aktiviteter og tidsplan langs en tidslinje.',
  },
  {
    question: 'Hva er kritisk vei i prosjektplanlegging?',
    options: ['Den lengste kjeden av avhengige aktiviteter som bestemmer total prosjekttid', 'Den korteste veien gjennom prosjektet', 'Den dyreste delen av prosjektet', 'Den minst viktige aktiviteten'],
    explanation: 'Kritisk vei er den lengste kjeden av avhengige aktiviteter som bestemmer prosjektets totale varighet.',
  },
  {
    question: 'Hva er milpaler i prosjekter?',
    options: ['Viktige kontrollpunkter eller leveranser', 'Daglige oppgaver', 'Pauserom', 'Kostnadsbudsjett'],
    explanation: 'Milpaler er viktige kontrollpunkter eller leveranser i prosjektet som markerer fullføring av sentrale faser.',
  },
],


  'økonomi-drift-7': [
  {
    question: 'Hva er personaladministrasjonens hovedoppgaver?',
    options: ['Rekruttering, utvikling, lønn og arbeidsmiljø', 'Bare lønnsutbetalinger', 'Kun ansettelser', 'Bare oppsigelser'],
    explanation: 'Personaladministrasjon omfatter rekruttering, kompetanseutvikling, lønn og godtgjørelse, arbeidsmiljø og personaloppfolging.',
  },
  {
    question: 'Hva er kompetanseutvikling?',
    options: ['Systematisk arbeid for a oke de ansattes kunnskap og ferdigheter', 'Bare formell utdanning', 'Kun internopplæring', 'A ansette nye folk'],
    explanation: 'Kompetanseutvikling er systematisk arbeid for a oke de ansattes kunnskap og ferdigheter gjennom kurs, opplæring og praksis.',
  },
  {
    question: 'Hva er medarbeidersamtale?',
    options: ['Strukturert samtale mellom leder og medarbeider om arbeid og utvikling', 'Tilfeldig prat i gangen', 'Lønnsforhandling', 'Oppsigelsessamtale'],
    explanation: 'Medarbeidersamtale er en strukturert samtale mellom leder og medarbeider om arbeidsoppgaver, mal, utvikling og trivsel.',
  },
  {
    question: 'Hva regulærer arbeidsmiljøloven nårdet gjelder arbeidstid?',
    options: ['Maksimal arbeidstid, overtid, pauser og hviletid', 'Bare lønn', 'Kun ferie', 'Bare oppsigelsesfrister'],
    explanation: 'Arbeidsmiljøloven regulærer arbeidstid inkludert maksimal arbeidstid, overtid, pauser, hviletid mellom arbeidsøkter og nattarbeid.',
  },
  {
    question: 'Hva er formalet med rekruttering?',
    options: ['Skaffe riktig kompetanse til riktig stilling', 'Ansette flest mulig', 'Spare penger pålønn', 'Fylle alle ledige stillinger raskt'],
    explanation: 'Formalet med rekruttering er a skaffe riktig kompetanse til riktig stilling til riktig tid for virksomheten.',
  },
],


  'økonomi-drift-8': [
  {
    question: 'Hva er strategi i en bedriftssammenheng?',
    options: ['Langsiktig plan for a oppna virksomhetens mal', 'Daglige rutiner', 'Kvartalsbudsjettet', 'Arsregnskapet'],
    explanation: 'Strategi er virksomhetens langsiktige plan for a oppna sine mal og skape konkurransefortrinn.',
  },
  {
    question: 'Hva er en visjon?',
    options: ['Et bilde av ønsket fremtidig tilstand for virksomheten', 'Arsbudsjettet', 'Denne ukens oppgaver', 'Organisasjonskartet'],
    explanation: 'En visjon er et inspirerende bilde av den onskede fremtidige tilstanden for virksomheten - hva den streber mot å bli.',
  },
  {
    question: 'Hva er Porters fem krefter?',
    options: ['Et rammeverk for a analysere konkurransesituasjonen i en bransje', 'Fem typer lederstiler', 'Fem økonomiske nøkkeltall', 'Fem typer kunder'],
    explanation: 'Porters fem krefter analyserer konkurransesituasjonen: trusler fra nye aktorer, leverandormakt, kundemakt, substitutter og rivalisering.',
  },
  {
    question: 'Hva er forretningside?',
    options: ['Hva virksomheten tilbyr til hvem og hvordan', 'Bare produktet', 'Kun malgruppa', 'Bare prisen'],
    explanation: 'Forretningside beskriver hva virksomheten tilbyr (produkter/tjenester), til hvem (malgruppe) og hvordan (leveringsmåte).',
  },
  {
    question: 'Hva er et konkurransefortrinn?',
    options: ['Noe som gjør at kunder velger deg fremfor konkurrenter', 'Den laveste prisen', 'Flest ansatte', 'Storst kontor'],
    explanation: 'Et konkurransefortrinn er noe som gjør at kunder velger din virksomhet fremfor konkurrenter - det kan være pris, kvalitet, service eller innovasjon.',
  },
],


};

export default quizData_okonomi_drift;
