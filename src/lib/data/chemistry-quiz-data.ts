/**
 * Kjemi 1 Quiz Data
 *
 * Flervalgsoppgaver for kjemi-quiz per kapittel.
 * Første alternativ er alltid riktig svar (vil bli shufflet ved visning).
 */

export interface ChemistryQuizQuestion {
  question: string;
  options: string[];  // First option is always correct
  explanation?: string;
}

// Quiz questions organized by chapter ID
const quizData: Record<string, ChemistryQuizQuestion[]> = {
  // ============================================================================
  // Kapittel 1.1: Atomets oppbygging
  // ============================================================================
  'kjemi1-1-1': [
    {
      question: 'Hvilken partikkel har positiv ladning?',
      options: ['Proton', 'Elektron', 'Nøytron', 'Foton'],
      explanation: 'Protoner har positiv ladning (+1) og finnes i atomkjernen.',
    },
    {
      question: 'Hvor befinner elektronene seg i atomet?',
      options: ['I elektronskall rundt kjernen', 'I atomkjernen', 'Mellom protoner og nøytroner', 'Utenfor atomet'],
      explanation: 'Elektronene kretser i skall (energinivåer) rundt atomkjernen.',
    },
    {
      question: 'Hva forteller atomnummeret (Z) oss?',
      options: ['Antall protoner', 'Antall nøytroner', 'Total masse', 'Antall elektroner i ytre skall'],
      explanation: 'Atomnummeret Z er lik antall protoner i kjernen og definerer hvilket grunnstoff det er.',
    },
    {
      question: 'Hva er massetallet (A)?',
      options: ['Summen av protoner og nøytroner', 'Antall elektroner', 'Atomets vekt i gram', 'Antall protoner'],
      explanation: 'Massetallet A = antall protoner + antall nøytroner.',
    },
    {
      question: 'Hva er isotoper?',
      options: ['Atomer med samme atomnummer men ulikt massetal', 'Atomer med ulik ladning', 'Atomer som mangler elektroner', 'Atomer fra ulike grunnstoffer'],
      explanation: 'Isotoper har samme antall protoner (samme grunnstoff) men ulikt antall nøytroner.',
    },
    {
      question: 'Et nøytralt atom har 12 protoner. Hvor mange elektroner har det?',
      options: ['12', '6', '24', '0'],
      explanation: 'Et nøytralt atom har like mange elektroner som protoner.',
    },
    {
      question: 'Hvilket utsagn om nøytroner er korrekt?',
      options: ['De har ingen elektrisk ladning', 'De har positiv ladning', 'De finnes utenfor kjernen', 'De har neglisjerbar masse'],
      explanation: 'Nøytroner er elektrisk nøytrale (0 ladning) og finnes i atomkjernen.',
    },
    {
      question: 'Karbon-12 og karbon-14 er isotoper. Hva er forskjellen mellom dem?',
      options: ['Antall nøytroner', 'Antall protoner', 'Antall elektroner i nøytralt tilstand', 'Deres kjemiske egenskaper'],
      explanation: 'Isotoper har samme antall protoner men ulikt antall nøytroner.',
    },
    {
      question: 'Hvilken partikkel bidrar mest til atomets masse?',
      options: ['Protoner og nøytroner', 'Kun elektroner', 'Kun nøytroner', 'Fotoner'],
      explanation: 'Protoner og nøytroner har hver masse på ca. 1 u, mens elektroner er nesten masseløse.',
    },
    {
      question: 'I periodesystemet, hva representerer gruppe 1?',
      options: ['Alkalimetaller', 'Edelgasser', 'Halogener', 'Jordalkalimetaller'],
      explanation: 'Gruppe 1 inneholder alkalimetallene: Li, Na, K, Rb, Cs, Fr.',
    },
    {
      question: 'Hva er symbolet for natrium?',
      options: ['Na', 'N', 'Nt', 'So'],
      explanation: 'Natrium har symbolet Na (fra latin: natrium).',
    },
    {
      question: 'Hvilken gruppe inneholder edelgassene?',
      options: ['Gruppe 18', 'Gruppe 1', 'Gruppe 17', 'Gruppe 2'],
      explanation: 'Edelgassene (He, Ne, Ar, Kr, Xe, Rn) er i gruppe 18.',
    },
  ],

  // ============================================================================
  // Kapittel 1.2: Elektronkonfigurasjon
  // ============================================================================
  'kjemi1-1-2': [
    {
      question: 'Hvor mange elektroner kan maksimalt være i det første skallet (K)?',
      options: ['2', '8', '18', '32'],
      explanation: 'K-skallet (n=1) kan ha maksimalt 2 elektroner.',
    },
    {
      question: 'Hva er valenselektroner?',
      options: ['Elektroner i ytterste skall', 'Elektroner i innerste skall', 'Protoner i kjernen', 'Alle elektroner i atomet'],
      explanation: 'Valenselektroner er elektronene i det ytterste skallet og bestemmer kjemiske egenskaper.',
    },
    {
      question: 'Hva er oktettregelen?',
      options: ['Atomer ønsker 8 elektroner i ytterste skall', 'Alle atomer har 8 elektroner', 'Det finnes 8 hovedgrupper', 'Elektroner fyller 8 orbitaler'],
      explanation: 'Oktettregelen sier at atomer er mest stabile med 8 elektroner i ytterste skall.',
    },
    {
      question: 'Hvordan er elektronkonfigurasjonen til neon (Ne)?',
      options: ['2, 8', '2, 8, 8', '2, 7', '8, 2'],
      explanation: 'Neon har 10 elektroner: 2 i K-skallet og 8 i L-skallet.',
    },
    {
      question: 'Hvilket grunnstoff har elektronkonfigurasjonen 2, 8, 1?',
      options: ['Natrium (Na)', 'Klor (Cl)', 'Argon (Ar)', 'Magnesium (Mg)'],
      explanation: 'Natrium har 11 elektroner fordelt som 2, 8, 1.',
    },
    {
      question: 'Hvor mange valenselektroner har oksygen?',
      options: ['6', '2', '8', '4'],
      explanation: 'Oksygen er i gruppe 16 og har 6 valenselektroner.',
    },
    {
      question: 'Hvorfor er edelgasser så lite reaktive?',
      options: ['De har fullt ytterste skall', 'De mangler elektroner', 'De har bare protoner', 'De er radioaktive'],
      explanation: 'Edelgasser har allerede 8 elektroner (eller 2 for He) i ytterste skall.',
    },
    {
      question: 'Hva er en s-orbital?',
      options: ['En sfærisk orbital', 'En åttetallsformet orbital', 'Et elektronskall', 'En type proton'],
      explanation: 's-orbitaler er sfæriske (kuleformede) og kan inneholde maksimalt 2 elektroner.',
    },
    {
      question: 'Maksimalt antall elektroner i L-skallet (n=2) er:',
      options: ['8', '2', '18', '32'],
      explanation: 'L-skallet kan ha maksimalt 2n² = 2(2)² = 8 elektroner.',
    },
    {
      question: 'Hvilken regel sier at elektroner fyller laveste energinivå først?',
      options: ['Aufbau-prinsippet', 'Hunds regel', 'Paulis eksklusjonsprinsipp', 'Oktettregelen'],
      explanation: 'Aufbau-prinsippet (oppbyggingsprinsippet) sier at elektroner fyller orbitaler med lavest energi først.',
    },
  ],

  // ============================================================================
  // Kapittel 1.3: Periodevise trender
  // ============================================================================
  'kjemi1-1-3': [
    {
      question: 'Hvordan endres atomradius nedover i en gruppe?',
      options: ['Øker', 'Minker', 'Forblir konstant', 'Varierer tilfeldig'],
      explanation: 'Atomradius øker nedover i en gruppe fordi flere elektronskall legges til.',
    },
    {
      question: 'Hva skjer med ioniseringsenergien bortover en periode?',
      options: ['Øker', 'Minker', 'Forblir konstant', 'Blir null'],
      explanation: 'Ioniseringsenergien øker bortover fordi elektronene holdes fastere av flere protoner.',
    },
    {
      question: 'Hvilket grunnstoff har høyest elektronegativitet?',
      options: ['Fluor (F)', 'Oksygen (O)', 'Klor (Cl)', 'Nitrogen (N)'],
      explanation: 'Fluor har høyest elektronegativitet (3,98 på Paulings skala).',
    },
    {
      question: 'Hva er ioniseringsenergi?',
      options: ['Energien som kreves for å fjerne et elektron', 'Energien som frigjøres ved binding', 'Atomets totale energi', 'Energien i atomkjernen'],
      explanation: 'Ioniseringsenergi er energien som trengs for å fjerne det ytterste elektronet fra et atom.',
    },
    {
      question: 'Hvor i periodesystemet finner vi metallene?',
      options: ['Venstre side og midten', 'Høyre side', 'Øverst', 'Bare i periode 1'],
      explanation: 'Metaller dominerer venstre side og midten av periodesystemet.',
    },
    {
      question: 'Hvilken trend gjelder for metallisk karakter i en periode?',
      options: ['Minker fra venstre til høyre', 'Øker fra venstre til høyre', 'Forblir konstant', 'Er høyest i midten'],
      explanation: 'Metallisk karakter minker bortover i en periode ettersom grunnstoffene får flere valenselektroner.',
    },
    {
      question: 'Hva er elektronegativitet?',
      options: ['Evnen til å tiltrekke elektroner i en binding', 'Antall elektroner i et atom', 'Elektronets masse', 'Energien til et elektron'],
      explanation: 'Elektronegativitet måler et atoms evne til å tiltrekke bindingselektroner.',
    },
    {
      question: 'Hvorfor minker atomradius bortover i en periode?',
      options: ['Flere protoner tiltrekker elektronene sterkere', 'Elektroner forsvinner', 'Nøytroner blir flere', 'Skallene blir færre'],
      explanation: 'Økende kjerneladning (flere protoner) trekker elektronene nærmere kjernen.',
    },
    {
      question: 'Hvilket grunnstoff har størst atomradius?',
      options: ['Cesium (Cs)', 'Helium (He)', 'Fluor (F)', 'Karbon (C)'],
      explanation: 'Cesium nederst til venstre i periodesystemet har størst atomradius.',
    },
    {
      question: 'Hva er typisk for ikke-metaller?',
      options: ['Dårlige ledere av strøm', 'Gode ledere av varme', 'Skinnende overflate', 'Lett å forme'],
      explanation: 'Ikke-metaller er typisk dårlige ledere og har ofte matte overflater.',
    },
  ],

  // ============================================================================
  // Kapittel 1.4: Navnsetting av uorganiske forbindelser
  // ============================================================================
  'kjemi1-1-4': [
    {
      question: 'Hva er formelen for natriumklorid?',
      options: ['NaCl', 'NaCl₂', 'Na₂Cl', 'ClNa'],
      explanation: 'Natriumklorid består av Na⁺ og Cl⁻ i forholdet 1:1.',
    },
    {
      question: 'Hva betyr prefikset "di-" i kjemisk navnsetting?',
      options: ['To', 'Tre', 'Fire', 'En'],
      explanation: 'Di- betyr to, som i dioksid (to oksygenatomer).',
    },
    {
      question: 'Hva er formelen for karbondioksid?',
      options: ['CO₂', 'CO', 'C₂O', 'CO₃'],
      explanation: 'Karbondioksid har formelen CO₂ (ett karbon, to oksygen).',
    },
    {
      question: 'Hvordan navngis forbindelsen FeCl₃?',
      options: ['Jern(III)klorid', 'Jernklorid', 'Jern(II)klorid', 'Triklorjern'],
      explanation: 'Romertall viser oksidasjonstallet til jernet, som er +3 her.',
    },
    {
      question: 'Hva er formelen for svovelsyre?',
      options: ['H₂SO₄', 'HSO₄', 'H₂S', 'SO₄'],
      explanation: 'Svovelsyre er H₂SO₄, en sterk syre.',
    },
    {
      question: 'Hvilken forbindelse er dette: MgO?',
      options: ['Magnesiumoksid', 'Manganoksid', 'Molybdenoksid', 'Merkuroksid'],
      explanation: 'MgO er magnesiumoksid, en ionisk forbindelse.',
    },
    {
      question: 'Hva betyr endelsen "-id" i kjemiske navn?',
      options: ['Et negativt ladet ion', 'Et positivt ladet ion', 'En syre', 'En base'],
      explanation: 'Endelsen -id brukes for negative ioner (anioner), som klorid (Cl⁻).',
    },
    {
      question: 'Hva er formelen for ammoniakk?',
      options: ['NH₃', 'NO₃', 'N₂H₄', 'NH₄'],
      explanation: 'Ammoniakk er NH₃, en viktig nitrogenforbindelse.',
    },
    {
      question: 'Hvordan navngis H₂O i systematisk kjemisk navnsetting?',
      options: ['Dihydrogenmonoksid', 'Hydrogenoksid', 'Oksygendihydrid', 'Vannmonoksid'],
      explanation: 'Systematisk navn er dihydrogenmonoksid (to H, ett O), men vi bruker vanligvis "vann".',
    },
    {
      question: 'Hva er forskjellen mellom -at og -itt endelser?',
      options: ['-at har mer oksygen enn -itt', '-itt har mer oksygen', 'De er det samme', '-at brukes for metaller'],
      explanation: 'Sulfat (SO₄²⁻) har mer oksygen enn sulfitt (SO₃²⁻).',
    },
  ],

  // ============================================================================
  // Kapittel 2.1: Utvikling av atommodeller
  // ============================================================================
  'kjemi1-2-1': [
    {
      question: 'Hvem foreslo "plumpudding"-modellen av atomet?',
      options: ['J.J. Thomson', 'Ernest Rutherford', 'Niels Bohr', 'John Dalton'],
      explanation: 'Thomson foreslo at elektroner var spredt i en positiv masse, som rosiner i en pudding.',
    },
    {
      question: 'Hva beviste Rutherfords gullfolieforsøk?',
      options: ['Atomet har en liten, tett kjerne', 'Elektroner kretser i faste baner', 'Atomer er udelelige', 'Lys er partikler'],
      explanation: 'Spredningen av alfapartikler viste at atomets masse er konsentrert i en liten kjerne.',
    },
    {
      question: 'Hvem foreslo at elektroner kretser i faste energinivåer?',
      options: ['Niels Bohr', 'John Dalton', 'J.J. Thomson', 'Ernest Rutherford'],
      explanation: 'Bohrs atommodell fra 1913 innførte kvantiserte energinivåer.',
    },
    {
      question: 'Hva var Daltons viktigste bidrag til atomteorien?',
      options: ['At alle atomer av et grunnstoff er like', 'At elektroner finnes', 'At atomet har en kjerne', 'At lys er bølger'],
      explanation: 'Dalton foreslo at alle atomer av samme grunnstoff har identiske egenskaper.',
    },
    {
      question: 'Hvilken partikkel oppdaget Thomson?',
      options: ['Elektronet', 'Protonet', 'Nøytronet', 'Fotonet'],
      explanation: 'Thomson oppdaget elektronet i 1897 gjennom katodestråleforsøk.',
    },
    {
      question: 'Hva var problemet med Rutherfords modell?',
      options: ['Den forklarte ikke atomers stabilitet', 'Den hadde for mange elektroner', 'Den manglet en kjerne', 'Den var for komplisert'],
      explanation: 'Klassisk fysikk sa at elektronene skulle spiralere inn i kjernen.',
    },
    {
      question: 'Hva betyr "kvantisert" i Bohrs modell?',
      options: ['Energien kan bare ha bestemte verdier', 'Atomet er uendelig stort', 'Elektroner beveger seg tilfeldig', 'Kjernen er positiv'],
      explanation: 'Kvantisering betyr at energien kun kan ha visse diskrete verdier.',
    },
    {
      question: 'Hvem oppdaget nøytronet?',
      options: ['James Chadwick', 'Ernest Rutherford', 'J.J. Thomson', 'Niels Bohr'],
      explanation: 'Chadwick oppdaget nøytronet i 1932.',
    },
    {
      question: 'Hva er den moderne kvantemekaniske modellen basert på?',
      options: ['Sannsynlighetsfordelinger for elektroner', 'Faste elektronbaner', 'Elektroner som partikler', 'Thomsons pudding-modell'],
      explanation: 'Kvantemekanikken beskriver elektroner som sannsynlighetsskyer, ikke faste baner.',
    },
    {
      question: 'I hvilken rekkefølge ble atommodellene utviklet?',
      options: ['Dalton → Thomson → Rutherford → Bohr', 'Thomson → Dalton → Bohr → Rutherford', 'Bohr → Rutherford → Thomson → Dalton', 'Rutherford → Bohr → Dalton → Thomson'],
      explanation: 'Dalton (1803), Thomson (1897), Rutherford (1911), Bohr (1913).',
    },
  ],

  // ============================================================================
  // Kapittel 3.1: Ionebinding
  // ============================================================================
  'kjemi1-3-1': [
    {
      question: 'Hva er en ionebinding?',
      options: ['Elektrostatisk tiltrekning mellom ioner', 'Deling av elektroner', 'Metallbinding', 'Van der Waals-krefter'],
      explanation: 'Ionebinding oppstår når elektroner overføres og det dannes positive og negative ioner.',
    },
    {
      question: 'Hva skjer når natrium danner et ion?',
      options: ['Det mister ett elektron og blir Na⁺', 'Det får ett elektron og blir Na⁻', 'Det deler elektroner', 'Ingenting skjer'],
      explanation: 'Natrium har ett valenselektron som det lett avgir for å danne Na⁺.',
    },
    {
      question: 'Hvilken type forbindelse er NaCl?',
      options: ['Ionisk forbindelse', 'Kovalent forbindelse', 'Metallisk forbindelse', 'Polymer'],
      explanation: 'NaCl består av Na⁺ og Cl⁻ ioner holdt sammen av elektrostatisk tiltrekning.',
    },
    {
      question: 'Hva er gitterenergi?',
      options: ['Energien som frigjøres når ioner danner krystallgitter', 'Energien til et enkelt ion', 'Energien i en kovalent binding', 'Kinetisk energi'],
      explanation: 'Gitterenergi er energien som frigjøres når gassfase-ioner samles til et ionisk krystall.',
    },
    {
      question: 'Hvorfor leder ioniske forbindelser strøm når de smelter?',
      options: ['Ionene kan bevege seg fritt', 'De har metallatomer', 'Elektronene frigjøres', 'De blir gasser'],
      explanation: 'I smeltet tilstand kan ionene bevege seg og lede strøm.',
    },
    {
      question: 'Hvilken gruppe danner typisk ioner med ladning +2?',
      options: ['Gruppe 2 (jordalkalimetaller)', 'Gruppe 1 (alkalimetaller)', 'Gruppe 17 (halogener)', 'Gruppe 18 (edelgasser)'],
      explanation: 'Jordalkalimetaller avgir 2 elektroner og danner +2 ioner.',
    },
    {
      question: 'Hva er formelen for kalsiumklorid?',
      options: ['CaCl₂', 'CaCl', 'Ca₂Cl', 'CaCl₃'],
      explanation: 'Ca²⁺ trenger to Cl⁻ for å balansere ladningen.',
    },
    {
      question: 'Hvorfor har ioniske forbindelser høyt smeltepunkt?',
      options: ['Sterke elektrostatiske krefter mellom ioner', 'De er metaller', 'De har kovalente bindinger', 'De inneholder tunge atomer'],
      explanation: 'Det kreves mye energi for å bryte de sterke ion-ion-interaksjonene.',
    },
    {
      question: 'Hva er en kation?',
      options: ['Et positivt ladet ion', 'Et negativt ladet ion', 'Et nøytralt atom', 'En type elektron'],
      explanation: 'Kationer er positive ioner, dannet når atomer mister elektroner.',
    },
    {
      question: 'Når et klor-atom får ett elektron, hva dannes?',
      options: ['Kloridion (Cl⁻)', 'Klorat (ClO₃⁻)', 'Klorin (Cl)', 'Klorid (Cl⁺)'],
      explanation: 'Klor får ett elektron og danner kloridion med ladning -1.',
    },
  ],

  // ============================================================================
  // Kapittel 3.2: Kovalent binding
  // ============================================================================
  'kjemi1-3-2': [
    {
      question: 'Hva er en kovalent binding?',
      options: ['Deling av elektronpar mellom atomer', 'Overføring av elektroner', 'Tiltrekning mellom ioner', 'Binding i metaller'],
      explanation: 'Kovalent binding innebærer at atomer deler elektronpar.',
    },
    {
      question: 'Hvor mange elektroner deles i en dobbeltbinding?',
      options: ['4', '2', '6', '8'],
      explanation: 'En dobbeltbinding består av to bindende elektronpar (4 elektroner).',
    },
    {
      question: 'Hva er en Lewis-struktur?',
      options: ['En tegning som viser valenselektroner', 'En 3D-modell av atomet', 'Et energidiagram', 'En graf over elektronegativitet'],
      explanation: 'Lewis-strukturer viser valenselektroner som prikker og bindinger som streker.',
    },
    {
      question: 'Hvilken type binding finnes i H₂O?',
      options: ['Kovalent binding', 'Ionebinding', 'Metallbinding', 'Ingen binding'],
      explanation: 'Vann har kovalente bindinger mellom oksygen og hydrogen.',
    },
    {
      question: 'Hva er en polar kovalent binding?',
      options: ['Ulik deling av elektroner mellom ulike atomer', 'Lik deling av elektroner', 'Overføring av elektroner', 'Binding mellom ioner'],
      explanation: 'Polar binding oppstår når atomer med ulik elektronegativitet deler elektroner.',
    },
    {
      question: 'Hvilken binding er sterkest?',
      options: ['Trippelbinding', 'Dobbeltbinding', 'Enkeltbinding', 'Hydrogenbinding'],
      explanation: 'Trippelbindinger (6 elektroner) er sterkere enn dobbelt- og enkeltbindinger.',
    },
    {
      question: 'Hva er bindingslengden?',
      options: ['Avstanden mellom bindende atomkjerner', 'Antall elektroner i bindingen', 'Bindingsenergien', 'Vinkelen mellom bindinger'],
      explanation: 'Bindingslengde er avstanden mellom sentrene av to bundne atomer.',
    },
    {
      question: 'Hvorfor er O₂ et paramagnetisk molekyl?',
      options: ['Det har uparede elektroner', 'Det er ionisk', 'Det har høy masse', 'Det er radioaktivt'],
      explanation: 'O₂ har uparede elektroner som gir paramagnetiske egenskaper.',
    },
    {
      question: 'Hva er en koordinasjonsbinding?',
      options: ['En binding der ett atom bidrar med begge elektronene', 'En binding mellom metaller', 'En svak binding', 'En ionebinding'],
      explanation: 'I koordinasjonsbindinger kommer begge elektronene fra ett atom (donor).',
    },
    {
      question: 'Hvilket molekyl har bare enkeltbindinger?',
      options: ['CH₄ (metan)', 'O₂', 'N₂', 'CO₂'],
      explanation: 'Metan har fire C-H enkeltbindinger.',
    },
  ],

  // ============================================================================
  // Kapittel 4.1: Reaksjonslikninger
  // ============================================================================
  'kjemi1-4-1': [
    {
      question: 'Hva må være likt på begge sider av en balansert reaksjonslikning?',
      options: ['Antall atomer av hvert grunnstoff', 'Antall molekyler', 'Temperaturen', 'Volumet'],
      explanation: 'Massebevaring krever at antall atomer av hvert grunnstoff er likt.',
    },
    {
      question: 'Hva betyr symbolet (g) i en reaksjonslikning?',
      options: ['Gass', 'Gram', 'Gull', 'Gruppe'],
      explanation: '(g) betyr at stoffet er i gassfase.',
    },
    {
      question: 'Balanser: H₂ + O₂ → H₂O',
      options: ['2H₂ + O₂ → 2H₂O', 'H₂ + O₂ → H₂O₂', 'H₂ + 2O₂ → 2H₂O', '2H₂ + 2O₂ → 4H₂O'],
      explanation: '2H₂ + O₂ → 2H₂O gir 4H og 2O på hver side.',
    },
    {
      question: 'Hva er reaktanter?',
      options: ['Stoffene på venstre side av pilen', 'Stoffene på høyre side', 'Katalysatorer', 'Mellomprodukter'],
      explanation: 'Reaktanter er utgangsstoffene som reagerer.',
    },
    {
      question: 'Hva viser koeffisientene i en reaksjonslikning?',
      options: ['Molforholdet mellom stoffene', 'Temperaturen', 'Trykket', 'Atomnummeret'],
      explanation: 'Koeffisientene angir forholdet mellom antall mol av stoffene.',
    },
    {
      question: 'Hva betyr (aq)?',
      options: ['Løst i vann', 'I gassfase', 'I fast tilstand', 'Smeltet'],
      explanation: '(aq) betyr at stoffet er oppløst i vann (aqueous).',
    },
    {
      question: 'Hvilken type reaksjon er: 2Mg + O₂ → 2MgO?',
      options: ['Forbrenning/oksidasjon', 'Synntesedekomposisjon', 'Syrebasereaksjon', 'Redoksreaksjon'],
      explanation: 'Dette er en forbrenningsreaksjon der magnesium oksideres.',
    },
    {
      question: 'Hva er en katalysator?',
      options: ['Et stoff som øker reaksjonshastigheten uten å forbrukes', 'Et reaktant', 'Et produkt', 'Et løsemiddel'],
      explanation: 'Katalysatorer senker aktiveringsenergien men gjenvinnes etter reaksjonen.',
    },
    {
      question: 'Balanser: Fe + O₂ → Fe₂O₃',
      options: ['4Fe + 3O₂ → 2Fe₂O₃', '2Fe + O₂ → Fe₂O₃', 'Fe + O₂ → FeO₂', '2Fe + 3O₂ → 2Fe₂O₃'],
      explanation: '4Fe + 3O₂ → 2Fe₂O₃ gir 4 Fe og 6 O på hver side.',
    },
    {
      question: 'Hva er loven om massebevaring?',
      options: ['Masse kan verken skapes eller ødelegges', 'Masse kan konverteres til energi', 'Massen av reaktantene er alltid større', 'Gasser har ingen masse'],
      explanation: 'Lavoisiers lov sier at total masse er konstant i en kjemisk reaksjon.',
    },
  ],

  // ============================================================================
  // Kapittel 5.1: Syrer og baser
  // ============================================================================
  'kjemi1-5-1': [
    {
      question: 'Hva avgir en syre ifølge Brønsted-Lowry?',
      options: ['Protoner (H⁺)', 'Elektroner', 'Hydroksidioner', 'Nøytroner'],
      explanation: 'En Brønsted-syre er en protondonor.',
    },
    {
      question: 'Hva er pH for en nøytral løsning ved 25°C?',
      options: ['7', '0', '14', '1'],
      explanation: 'Ved nøytral pH er [H⁺] = [OH⁻] = 10⁻⁷ M, som gir pH = 7.',
    },
    {
      question: 'Hvilken forbindelse er en sterk syre?',
      options: ['HCl (saltsyre)', 'CH₃COOH (eddiksyre)', 'H₂CO₃ (karbonsyre)', 'H₃PO₄ (fosforsyre)'],
      explanation: 'HCl er en sterk syre som fullstendig dissosierer i vann.',
    },
    {
      question: 'Hva dannes når en syre reagerer med en base?',
      options: ['Salt og vann', 'Bare gass', 'Bare varme', 'Nye syrer'],
      explanation: 'Nøytralisering: Syre + Base → Salt + Vann.',
    },
    {
      question: 'Hva er en buffer?',
      options: ['En løsning som motstår pH-endringer', 'En sterk syre', 'Et salt', 'Rent vann'],
      explanation: 'Buffere inneholder svake syrer/baser og deres salter.',
    },
    {
      question: 'Hva er pOH for en løsning med pH = 3?',
      options: ['11', '3', '7', '14'],
      explanation: 'pH + pOH = 14, så pOH = 14 - 3 = 11.',
    },
    {
      question: 'Hvilken base er en sterk base?',
      options: ['NaOH', 'NH₃', 'CH₃COO⁻', 'H₂O'],
      explanation: 'NaOH (lut) er en sterk base som fullstendig dissosierer.',
    },
    {
      question: 'Hva er konsentrasjonen av H⁺ når pH = 2?',
      options: ['0,01 M (10⁻² M)', '0,1 M', '100 M', '2 M'],
      explanation: 'pH = -log[H⁺], så [H⁺] = 10⁻² = 0,01 M.',
    },
    {
      question: 'Hva er en amfotær substans?',
      options: ['Et stoff som kan virke som både syre og base', 'En sterk syre', 'En sterk base', 'Et nøytralt salt'],
      explanation: 'Amfotære stoffer, som vann, kan både avgi og ta opp protoner.',
    },
    {
      question: 'Hva er formelen for saltsyre?',
      options: ['HCl', 'H₂SO₄', 'HNO₃', 'H₃PO₄'],
      explanation: 'Saltsyre er HCl oppløst i vann.',
    },
  ],

  // ============================================================================
  // Kapittel 6.1: Oksidasjon og reduksjon
  // ============================================================================
  'kjemi1-6-1': [
    {
      question: 'Hva skjer ved oksidasjon?',
      options: ['Et stoff avgir elektroner', 'Et stoff mottar elektroner', 'Et stoff avgir protoner', 'Ingenting'],
      explanation: 'Oksidasjon er tap av elektroner (økning i oksidasjonstall).',
    },
    {
      question: 'Hva er et reduksjonsmiddel?',
      options: ['Et stoff som avgir elektroner', 'Et stoff som mottar elektroner', 'En katalysator', 'Et løsemiddel'],
      explanation: 'Reduksjonsmidlet oksideres selv når det reduserer et annet stoff.',
    },
    {
      question: 'Hva er oksidasjonstallet til oksygen i de fleste forbindelser?',
      options: ['-2', '+2', '0', '-1'],
      explanation: 'Oksygen har vanligvis oksidasjonstall -2 (unntak: peroksider, OF₂).',
    },
    {
      question: 'I reaksjonen Zn + Cu²⁺ → Zn²⁺ + Cu, hva oksideres?',
      options: ['Zn', 'Cu²⁺', 'Cu', 'Ingenting'],
      explanation: 'Sink mister elektroner (Zn → Zn²⁺) og oksideres.',
    },
    {
      question: 'Hva er oksidasjonstallet til et fritt grunnstoff?',
      options: ['0', '+1', '-1', '+2'],
      explanation: 'Frie grunnstoffer som Fe, O₂, Cl₂ har oksidasjonstall 0.',
    },
    {
      question: 'Hva er en galvanisk celle?',
      options: ['En celle som produserer strøm fra kjemiske reaksjoner', 'En celle som bruker strøm', 'En biologisk celle', 'En fengselcelle'],
      explanation: 'Galvaniske celler (batterier) konverterer kjemisk energi til elektrisk energi.',
    },
    {
      question: 'Hva skjer ved elektrolyse?',
      options: ['Elektrisk strøm driver en ikke-spontan reaksjon', 'Kjemisk energi blir til elektrisk energi', 'Bare varme produseres', 'Gasser komprimeres'],
      explanation: 'Elektrolyse bruker strøm til å drive reaksjoner som ellers ikke ville skjedd.',
    },
    {
      question: 'Hva er korrosjon?',
      options: ['Oksidasjon av metaller', 'Reduksjon av metaller', 'Oppløsning i syre', 'Smelting'],
      explanation: 'Korrosjon (f.eks. rust) er oksidasjon av metaller av oksygen og vann.',
    },
    {
      question: 'Hvilket metall er mest reaktivt (står høyest i spenningsrekken)?',
      options: ['Kalium (K)', 'Sink (Zn)', 'Kobber (Cu)', 'Gull (Au)'],
      explanation: 'Kalium er svært reaktivt og står høyt i spenningsrekken.',
    },
    {
      question: 'Hva er summen av oksidasjonstallene i en nøytral forbindelse?',
      options: ['0', 'Positiv', 'Negativ', 'Avhenger av størrelse'],
      explanation: 'I nøytrale forbindelser må oksidasjonstallene summere til 0.',
    },
  ],

  // ============================================================================
  // Kapittel 7.1: Organisk kjemi - Hydrokarboner
  // ============================================================================
  'kjemi1-7-1': [
    {
      question: 'Hva er et hydrokarbon?',
      options: ['En forbindelse med bare karbon og hydrogen', 'En forbindelse med oksygen', 'Et metall', 'En ionisk forbindelse'],
      explanation: 'Hydrokarboner inneholder kun C og H.',
    },
    {
      question: 'Hva karakteriserer alkaner?',
      options: ['Bare enkeltbindinger (mettede)', 'Dobbeltbindinger', 'Trippelbindinger', 'Aromatiske ringer'],
      explanation: 'Alkaner er mettede hydrokarboner med kun C-C enkeltbindinger.',
    },
    {
      question: 'Hva er formelen for metan?',
      options: ['CH₄', 'C₂H₆', 'C₃H₈', 'CH₃'],
      explanation: 'Metan er det enkleste alkanet med formelen CH₄.',
    },
    {
      question: 'Hva karakteriserer alkener?',
      options: ['Minst én C=C dobbeltbinding', 'Bare enkeltbindinger', 'Minst én trippelbinding', 'Aromatisk ring'],
      explanation: 'Alkener er umettede og har minst én karbon-karbon dobbeltbinding.',
    },
    {
      question: 'Hva er formelen for eten (etylen)?',
      options: ['C₂H₄', 'C₂H₆', 'C₂H₂', 'CH₄'],
      explanation: 'Eten har formelen C₂H₄ med én dobbeltbinding.',
    },
    {
      question: 'Hva kalles hydrokarboner med ringstruktur uten dobbeltbindinger?',
      options: ['Sykloalkaner', 'Alkener', 'Alkyner', 'Arener'],
      explanation: 'Sykloalkaner har ringstruktur med bare enkeltbindinger.',
    },
    {
      question: 'Hva er generell formel for alkaner?',
      options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙHₙ', 'CₙH₂ₙ₋₂'],
      explanation: 'Alkaner følger formelen CₙH₂ₙ₊₂ (f.eks. C₃H₈ for propan).',
    },
    {
      question: 'Hva er en isomer?',
      options: ['Stoffer med samme molekylformel men ulik struktur', 'Stoffer med ulik masse', 'Isotoper', 'Ioner'],
      explanation: 'Isomerer har samme molekylformel men atomene er ordnet forskjellig.',
    },
    {
      question: 'Hvilken binding har høyest rotasjonsbarriære?',
      options: ['Dobbeltbinding', 'Enkeltbinding', 'Trippelbinding', 'Hydrogenbinding'],
      explanation: 'Dobbeltbindinger tillater ikke fri rotasjon, i motsetning til enkeltbindinger.',
    },
    {
      question: 'Hva er hovedproduktet når metan forbrennes fullstendig?',
      options: ['CO₂ og H₂O', 'CO og H₂', 'C og H₂O', 'Bare CO₂'],
      explanation: 'Fullstendig forbrenning: CH₄ + 2O₂ → CO₂ + 2H₂O.',
    },
  ],

  // ============================================================================
  // Kapittel 8.1: Funksjonelle grupper
  // ============================================================================
  'kjemi1-8-1': [
    {
      question: 'Hva er den funksjonelle gruppen i alkoholer?',
      options: ['-OH (hydroksylgruppe)', '-COOH', '-CHO', '-NH₂'],
      explanation: 'Alkoholer har hydroksylgruppen -OH bundet til et karbonatom.',
    },
    {
      question: 'Hva er formelen for etanol?',
      options: ['C₂H₅OH', 'CH₃OH', 'C₃H₇OH', 'C₆H₁₂O₆'],
      explanation: 'Etanol (vanlig alkohol) har formelen C₂H₅OH.',
    },
    {
      question: 'Hvilken funksjonell gruppe har karboksylsyrer?',
      options: ['-COOH', '-OH', '-CHO', '-CO-'],
      explanation: 'Karboksylsyrer har karboksylgruppen -COOH.',
    },
    {
      question: 'Hva er en ester?',
      options: ['Produktet av reaksjon mellom alkohol og syre', 'En type alkohol', 'Et hydrokarbon', 'En base'],
      explanation: 'Estere dannes ved at en alkohol reagerer med en karboksylsyre.',
    },
    {
      question: 'Hva er den funksjonelle gruppen i aldehyder?',
      options: ['-CHO', '-CO-', '-OH', '-COOH'],
      explanation: 'Aldehyder har en karbonylgruppe med et hydrogen: -CHO.',
    },
    {
      question: 'Hva skiller et keton fra et aldehyd?',
      options: ['Karbonylgruppen er mellom to karbonatomer', 'Ketonet har en -OH gruppe', 'Aldehydet har ingen oksygen', 'De er identiske'],
      explanation: 'I ketoner er C=O bundet til to karboner, i aldehyder til ett karbon og ett hydrogen.',
    },
    {
      question: 'Hva er formelen for metanol?',
      options: ['CH₃OH', 'C₂H₅OH', 'CH₄', 'HCOOH'],
      explanation: 'Metanol (tresprit) er den enkleste alkoholen: CH₃OH.',
    },
    {
      question: 'Hvilken funksjonell gruppe har aminer?',
      options: ['-NH₂', '-NO₂', '-COOH', '-OH'],
      explanation: 'Aminer har en aminogruppe (-NH₂, -NHR, eller -NR₂).',
    },
    {
      question: 'Hva er den funksjonelle gruppen i etere?',
      options: ['-O- (mellom to karbonatomer)', '-OH', '-CHO', '-COOH'],
      explanation: 'Etere har et oksygenatom bundet til to karbongrupper (R-O-R).',
    },
    {
      question: 'Hvilken reaksjon danner en ester?',
      options: ['Esterifisering', 'Oksidasjon', 'Reduksjon', 'Hydrolyse'],
      explanation: 'Esterifisering: Alkohol + Karboksylsyre → Ester + Vann.',
    },
  ],

  // ============================================================================
  // Kapittel 9.1: Syrer og baser - definisjoner
  // ============================================================================
  'kjemi1-9-1': [
    {
      question: 'Hva er en Brønsted-syre?',
      options: ['Et stoff som avgir protoner (H⁺)', 'Et stoff som tar opp protoner', 'Et stoff som avgir elektroner', 'Et stoff med pH over 7'],
      explanation: 'En Brønsted-syre er en protondonor - den gir fra seg H⁺.',
    },
    {
      question: 'Hva er en Brønsted-base?',
      options: ['Et stoff som tar opp protoner (H⁺)', 'Et stoff som avgir protoner', 'Et stoff som avgir elektroner', 'Et stoff med pH under 7'],
      explanation: 'En Brønsted-base er en protonakseptor - den tar imot H⁺.',
    },
    {
      question: 'Hva er et konjugert syre-base-par?',
      options: ['To stoffer som skiller seg med én H⁺', 'To stoffer med lik pH', 'To stoffer som nøytraliserer hverandre', 'To sterke syrer'],
      explanation: 'Et konjugert par består av en syre og dens korresponderende base (forskjell på én H⁺).',
    },
    {
      question: 'Hva er den konjugerte basen til HCl?',
      options: ['Cl⁻', 'H⁺', 'OH⁻', 'HCl₂⁻'],
      explanation: 'Når HCl avgir H⁺, dannes kloridionet Cl⁻.',
    },
    {
      question: 'Hva betyr det at et stoff er amfotert?',
      options: ['Det kan virke som både syre og base', 'Det er nøytralt', 'Det er en sterk syre', 'Det løses ikke i vann'],
      explanation: 'Amfotere stoffer (som vann) kan både avgi og ta opp protoner.',
    },
    {
      question: 'Hva er protolyse?',
      options: ['Overføring av proton fra syre til base', 'Spalting av vann', 'Dannelse av ioner', 'Oksidasjon av hydrogen'],
      explanation: 'Protolyse er reaksjonen der et proton overføres fra syre til base.',
    },
    {
      question: 'Hvilken av disse er en sterk syre?',
      options: ['HNO₃', 'CH₃COOH', 'H₂CO₃', 'HF'],
      explanation: 'Salpetersyre (HNO₃) er en sterk syre som dissosierer fullstendig.',
    },
    {
      question: 'Hva er den konjugerte syren til NH₃?',
      options: ['NH₄⁺', 'NH₂⁻', 'N₂H₄', 'NO₃⁻'],
      explanation: 'Når ammoniakk tar opp et proton, dannes ammoniumionet NH₄⁺.',
    },
    {
      question: 'Hvorfor er vann et amfotert stoff?',
      options: ['Det kan både avgi og ta opp H⁺', 'Det har pH = 7', 'Det er flytende', 'Det inneholder oksygen'],
      explanation: 'Vann kan reagere som syre (H₂O → H⁺ + OH⁻) eller base (H₂O + H⁺ → H₃O⁺).',
    },
    {
      question: 'Hva er hydroksidionet?',
      options: ['OH⁻', 'H₃O⁺', 'H⁺', 'O²⁻'],
      explanation: 'Hydroksidionet OH⁻ er den konjugerte basen til vann.',
    },
    {
      question: 'Hva er forskjellen mellom en sterk og svak syre?',
      options: ['Sterk syre dissosierer fullstendig', 'Sterk syre har høyere molmasse', 'Svak syre er farligere', 'Det er ingen forskjell'],
      explanation: 'Sterke syrer som HCl dissosierer 100%, svake syrer bare delvis.',
    },
    {
      question: 'Hva er oxoniumionet?',
      options: ['H₃O⁺', 'OH⁻', 'H₂O', 'O₂⁻'],
      explanation: 'Oxoniumionet H₃O⁺ dannes når vann tar opp et proton.',
    },
  ],

  // ============================================================================
  // Kapittel 9.2: pH og sterke syrer/baser
  // ============================================================================
  'kjemi1-9-2': [
    {
      question: 'Hva er definisjonen av pH?',
      options: ['pH = -log[H⁺]', 'pH = log[H⁺]', 'pH = [H⁺]', 'pH = 1/[H⁺]'],
      explanation: 'pH er den negative logaritmen til hydrogenionkonsentrasjonen.',
    },
    {
      question: 'Hva er pH i en løsning der [H⁺] = 10⁻⁴ M?',
      options: ['4', '10', '-4', '0,0001'],
      explanation: 'pH = -log(10⁻⁴) = 4.',
    },
    {
      question: 'Hva er [H⁺] når pH = 3?',
      options: ['10⁻³ M', '3 M', '10³ M', '0,3 M'],
      explanation: '[H⁺] = 10⁻ᵖᴴ = 10⁻³ M = 0,001 M.',
    },
    {
      question: 'Hva er sammenhengen mellom pH og pOH ved 25°C?',
      options: ['pH + pOH = 14', 'pH × pOH = 14', 'pH - pOH = 14', 'pH = pOH'],
      explanation: 'Ved 25°C gjelder alltid pH + pOH = 14.',
    },
    {
      question: 'Hva er pOH for en løsning med pH = 2?',
      options: ['12', '2', '7', '-2'],
      explanation: 'pOH = 14 - pH = 14 - 2 = 12.',
    },
    {
      question: 'En sterk syre med konsentrasjon 0,01 M har pH lik:',
      options: ['2', '0,01', '12', '1'],
      explanation: 'For sterk syre: [H⁺] = 0,01 M = 10⁻² M, så pH = 2.',
    },
    {
      question: 'Hva er ioneproduktet for vann (Kw) ved 25°C?',
      options: ['10⁻¹⁴', '10⁻⁷', '1', '14'],
      explanation: 'Kw = [H⁺][OH⁻] = 10⁻¹⁴ ved 25°C.',
    },
    {
      question: 'Hvordan endres pH når en syre fortynnes?',
      options: ['pH øker (nærmer seg 7)', 'pH minker', 'pH forblir konstant', 'pH blir negativ'],
      explanation: 'Ved fortynning minker [H⁺], så pH øker mot 7.',
    },
    {
      question: 'Hva er pH for 0,1 M NaOH (sterk base)?',
      options: ['13', '1', '7', '0,1'],
      explanation: '[OH⁻] = 0,1 M → pOH = 1 → pH = 14 - 1 = 13.',
    },
    {
      question: 'Hva skjer med Kw når temperaturen øker?',
      options: ['Kw øker', 'Kw minker', 'Kw forblir konstant', 'Kw blir null'],
      explanation: 'Autodissosiasjonen av vann er endoterm, så Kw øker med temperaturen.',
    },
    {
      question: 'Hva er konsentrasjonen av OH⁻ i rent vann ved 25°C?',
      options: ['10⁻⁷ M', '10⁻¹⁴ M', '1 M', '7 M'],
      explanation: 'I rent vann: [H⁺] = [OH⁻] = 10⁻⁷ M.',
    },
    {
      question: 'En løsning har [OH⁻] = 10⁻³ M. Hva er pH?',
      options: ['11', '3', '7', '-3'],
      explanation: 'pOH = 3, så pH = 14 - 3 = 11.',
    },
  ],

  // ============================================================================
  // Kapittel 9.3: Svake syrer og baser
  // ============================================================================
  'kjemi1-9-3': [
    {
      question: 'Hva er Ka?',
      options: ['Syrekonstanten', 'Basekonstanten', 'Ioneproduktet', 'pH-verdien'],
      explanation: 'Ka er likevektskonstanten for dissosiasjonen av en svak syre.',
    },
    {
      question: 'Hva forteller en høy Ka-verdi?',
      options: ['Syren er relativt sterk', 'Syren er svak', 'Syren er nøytral', 'Syren er en base'],
      explanation: 'Høy Ka betyr at likevekten ligger mot høyre (mer dissosiasjon).',
    },
    {
      question: 'Hva er sammenhengen mellom Ka og pKa?',
      options: ['pKa = -log(Ka)', 'pKa = Ka', 'pKa = 1/Ka', 'pKa = log(Ka)'],
      explanation: 'pKa = -log(Ka), analogt med pH = -log[H⁺].',
    },
    {
      question: 'Hva er Kb?',
      options: ['Basekonstanten', 'Syrekonstanten', 'pH i base', 'Konsentrasjon av base'],
      explanation: 'Kb er likevektskonstanten for reaksjonen av en svak base med vann.',
    },
    {
      question: 'Hva er sammenhengen mellom Ka og Kb for et konjugert par?',
      options: ['Ka × Kb = Kw', 'Ka + Kb = Kw', 'Ka = Kb', 'Ka / Kb = 14'],
      explanation: 'For et konjugert syre-base-par gjelder Ka × Kb = Kw = 10⁻¹⁴.',
    },
    {
      question: 'Eddiksyre har Ka = 1,8 × 10⁻⁵. Er den sterk eller svak?',
      options: ['Svak syre', 'Sterk syre', 'Nøytral', 'Supersterk syre'],
      explanation: 'Ka << 1 betyr at svært lite av syren dissosierer - altså svak syre.',
    },
    {
      question: 'Hva er en buffer?',
      options: ['Blanding av svak syre og dens konjugerte base', 'En sterk syre', 'Rent vann', 'En nøytral løsning'],
      explanation: 'Buffere inneholder en svak syre og dens salt (konjugerte base).',
    },
    {
      question: 'Hvordan fungerer en buffer?',
      options: ['Motstår pH-endringer ved tilsetning av syre/base', 'Øker pH', 'Senker pH', 'Nøytraliserer alt'],
      explanation: 'Bufferen reagerer med tilsatt syre eller base og holder pH relativt konstant.',
    },
    {
      question: 'Henderson-Hasselbalch likningen brukes til å beregne:',
      options: ['pH i en buffer', 'Konsentrasjon av sterk syre', 'Molmasse', 'Kw'],
      explanation: 'pH = pKa + log([A⁻]/[HA]) for buffere.',
    },
    {
      question: 'Hva er pKa for en syre med Ka = 10⁻⁵?',
      options: ['5', '-5', '10⁻⁵', '0,00001'],
      explanation: 'pKa = -log(10⁻⁵) = 5.',
    },
    {
      question: 'Hvis Ka > Kb for et konjugert par, hva betyr det?',
      options: ['Syren er sterkere enn basen', 'Basen er sterkere', 'De er like sterke', 'Ingen sammenheng'],
      explanation: 'Høyere Ka betyr sterkere syre, som har en svakere konjugert base.',
    },
    {
      question: 'Hva er graden av dissosiasjon (α)?',
      options: ['Andelen av syre som har dissosiiert', 'pH-verdien', 'Ka-verdien', 'Konsentrasjonen'],
      explanation: 'α = [dissosiiert syre]/[total syre], ofte uttrykt i prosent.',
    },
  ],

  // ============================================================================
  // Kapittel 9.4: Titrering
  // ============================================================================
  'kjemi1-9-4': [
    {
      question: 'Hva er en titrering?',
      options: ['Kvantitativ analyse der løsning tilsettes til ekvivalenspunkt', 'Måling av pH', 'Oppvarming av løsning', 'Destillasjon'],
      explanation: 'Ved titrering tilsettes en løsning med kjent konsentrasjon til reaksjonen er fullstendig.',
    },
    {
      question: 'Hva er ekvivalenspunktet?',
      options: ['Punktet der syre og base har reagert i eksakt støkiometrisk forhold', 'Der pH = 7', 'Der fargen endres', 'Startpunktet'],
      explanation: 'Ved ekvivalenspunktet har all syre reagert med all tilsatt base (eller omvendt).',
    },
    {
      question: 'Hva er en indikator?',
      options: ['Et stoff som endrer farge ved bestemt pH', 'En sterk syre', 'En buffer', 'Et måleinstrument'],
      explanation: 'Indikatorer er svake syrer/baser der syre- og baseformen har ulik farge.',
    },
    {
      question: 'Ved titrering av sterk syre med sterk base, hva er pH ved ekvivalenspunktet?',
      options: ['7', 'Under 7', 'Over 7', '14'],
      explanation: 'Produktet er salt + vann, som gir nøytral løsning med pH = 7.',
    },
    {
      question: 'Ved titrering av svak syre med sterk base, er pH ved ekvivalenspunktet:',
      options: ['Over 7', 'Lik 7', 'Under 7', '0'],
      explanation: 'Den konjugerte basen til den svake syren gjør løsningen basisk.',
    },
    {
      question: 'Hva brukes en byrett til?',
      options: ['Nøyaktig tilsetning av titrant', 'Måle pH', 'Oppvarming', 'Filtrering'],
      explanation: 'Byretten tillater presis, kontrollert tilsetning av titrantløsningen.',
    },
    {
      question: 'Hva er titrant?',
      options: ['Løsningen som tilsettes fra byretten', 'Løsningen i kolben', 'Indikatoren', 'Produktet'],
      explanation: 'Titranten er standardløsningen som tilsettes under titreringen.',
    },
    {
      question: 'Hva er omslaget ved titrering?',
      options: ['Punktet der indikatoren endrer farge', 'Ekvivalenspunktet nøyaktig', 'Starten', 'Slutten'],
      explanation: 'Omslaget er det synlige punktet der indikatorfargen endres.',
    },
    {
      question: 'Hvilken indikator passer for titrering av sterk syre med sterk base?',
      options: ['Fenolftalein eller metyloransje', 'Bare fenolftalein', 'Ingen indikator', 'Universalindikator'],
      explanation: 'Den bratte pH-endringen ved pH 7 tillater bruk av mange indikatorer.',
    },
    {
      question: 'Ved titrering brukes formelen n₁V₁ = n₂V₂. Hva betyr n?',
      options: ['Stoffmengdekonsentrasjon (mol/L)', 'Antall mol', 'Masse', 'Volum'],
      explanation: 'n er konsentrasjonen i mol/L, V er volumet.',
    },
    {
      question: 'Hva er bufferkapasitet?',
      options: ['Mengden syre/base bufferen kan nøytralisere før pH endres merkbart', 'Bufferens pH', 'Bufferens volum', 'Bufferens farge'],
      explanation: 'Bufferkapasiteten angir hvor mye syre eller base som kan tilsettes.',
    },
    {
      question: 'Hvilken kurve viser pH som funksjon av tilsatt volum titrant?',
      options: ['Titreringskurve', 'Standardkurve', 'Kalibringskurve', 'pH-kurve'],
      explanation: 'Titreringskurven viser hvordan pH endrer seg under titreringen.',
    },
  ],

  // ============================================================================
  // Kapittel 10.1: Introduksjon til organisk kjemi
  // ============================================================================
  'kjemi1-10-1': [
    {
      question: 'Hva er organisk kjemi?',
      options: ['Kjemien til karbonforbindelser', 'Kjemien til levende organismer', 'Kjemien til metaller', 'Kjemien til gasser'],
      explanation: 'Organisk kjemi handler om forbindelser som inneholder karbon.',
    },
    {
      question: 'Hvorfor kan karbon danne så mange forbindelser?',
      options: ['Det kan binde seg til fire andre atomer og danne kjeder', 'Det er det letteste grunnstoffet', 'Det er radioaktivt', 'Det er et metall'],
      explanation: 'Karbon har 4 valenselektroner og kan danne stabile bindinger til mange atomer.',
    },
    {
      question: 'Hva er et hydrokarbon?',
      options: ['Forbindelse med bare karbon og hydrogen', 'Forbindelse med karbon og oksygen', 'Karbondioksid', 'Vann'],
      explanation: 'Hydrokarboner inneholder kun C og H, som metan (CH₄).',
    },
    {
      question: 'Hva er forskjellen mellom mettede og umettede hydrokarboner?',
      options: ['Mettede har bare enkeltbindinger, umettede har dobbelt-/trippelbindinger', 'Mettede er tyngre', 'Umettede er gasser', 'Det er ingen forskjell'],
      explanation: 'Mettede (alkaner) har bare C-C enkeltbindinger, umettede har C=C eller C≡C.',
    },
    {
      question: 'Hva er generell formel for alkaner?',
      options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙHₙ', 'CₙH₂ₙ₋₂'],
      explanation: 'Alkaner følger formelen CₙH₂ₙ₊₂, for eksempel C₂H₆ (etan).',
    },
    {
      question: 'Hva er generell formel for alkener?',
      options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙHₙ', 'CₙH₂ₙ₋₂'],
      explanation: 'Alkener har én dobbeltbinding og følger CₙH₂ₙ.',
    },
    {
      question: 'Hva kalles hydrokarboner med trippelbinding?',
      options: ['Alkyner', 'Alkener', 'Alkaner', 'Arener'],
      explanation: 'Alkyner har minst én C≡C trippelbinding.',
    },
    {
      question: 'Hva er et aromatisk hydrokarbon?',
      options: ['Hydrokarbon med benzenring', 'Hydrokarbon med god lukt', 'Mettet hydrokarbon', 'Gassformig hydrokarbon'],
      explanation: 'Aromatiske forbindelser har en eller flere benzenringer.',
    },
    {
      question: 'Hva er strukturformelen for etan?',
      options: ['CH₃-CH₃', 'CH₄', 'CH₃-CH₂-CH₃', 'CH₂=CH₂'],
      explanation: 'Etan har to karboner bundet sammen: CH₃-CH₃.',
    },
    {
      question: 'Hva er molekylformelen for propan?',
      options: ['C₃H₈', 'C₂H₆', 'C₄H₁₀', 'CH₄'],
      explanation: 'Propan har 3 karbon og følger CₙH₂ₙ₊₂: C₃H₈.',
    },
    {
      question: 'Hvordan navngis en forgrenet alkan?',
      options: ['Finn lengste kjede, navngi forgrenningene med posisjon', 'Bare tell alle karbon', 'Etter kokepunkt', 'Etter oppdager'],
      explanation: 'IUPAC-navnsetting: finn hovedkjede, nummerer, angi substituenter.',
    },
    {
      question: 'Hva er en syklisk forbindelse?',
      options: ['En forbindelse der karbonkjeden danner en ring', 'En forbindelse med oksygen', 'En umettet forbindelse', 'En aromatisk forbindelse'],
      explanation: 'Sykliske forbindelser har karbonkjeder som er bundet i ring.',
    },
  ],

  // ============================================================================
  // Kapittel 10.2: Funksjonelle grupper
  // ============================================================================
  'kjemi1-10-2': [
    {
      question: 'Hva er en funksjonell gruppe?',
      options: ['Atomgruppe som gir karakteristiske kjemiske egenskaper', 'Hovedkjeden i et molekyl', 'Et enkelt atom', 'En type binding'],
      explanation: 'Funksjonelle grupper bestemmer stoffets reaktivitet og egenskaper.',
    },
    {
      question: 'Hvilken funksjonell gruppe har alkoholer?',
      options: ['-OH', '-COOH', '-CHO', '-NH₂'],
      explanation: 'Alkoholer har hydroksylgruppen -OH bundet til karbon.',
    },
    {
      question: 'Hva er den funksjonelle gruppen i karboksylsyrer?',
      options: ['-COOH', '-OH', '-CHO', '-CO-'],
      explanation: 'Karboksylsyrer har karboksylgruppen -COOH.',
    },
    {
      question: 'Hva er forskjellen mellom aldehyd og keton?',
      options: ['I aldehyd er C=O i enden, i keton mellom to karbonatomer', 'Aldehyd har -OH', 'Keton har -NH₂', 'De er identiske'],
      explanation: 'Aldehyd: R-CHO (i enden), Keton: R-CO-R (midt i kjeden).',
    },
    {
      question: 'Hvilken funksjonell gruppe har estere?',
      options: ['-COO-', '-OH', '-CHO', '-NH₂'],
      explanation: 'Estere har gruppen -COO- (ester-bindingen).',
    },
    {
      question: 'Hva dannes når en alkohol reagerer med en karboksylsyre?',
      options: ['Ester og vann', 'Aldehyd', 'Keton', 'Eter'],
      explanation: 'Esterifisering: R-OH + R-COOH → R-COO-R + H₂O.',
    },
    {
      question: 'Hvilken funksjonell gruppe har aminer?',
      options: ['-NH₂', '-NO₂', '-COOH', '-OH'],
      explanation: 'Aminer har aminogruppen -NH₂ (primær), -NHR eller -NR₂.',
    },
    {
      question: 'Hva er en eter?',
      options: ['Forbindelse med -O- mellom to karbongrupper', 'En alkohol', 'En syre', 'Et aldehyd'],
      explanation: 'Etere har strukturen R-O-R, som dietyleter.',
    },
    {
      question: 'Hva er formelen for metanal (formaldehyd)?',
      options: ['HCHO', 'CH₃CHO', 'CH₃OH', 'HCOOH'],
      explanation: 'Metanal er det enkleste aldehydet: HCHO.',
    },
    {
      question: 'Hvilken reaksjon kalles hydrolyse av en ester?',
      options: ['Ester + vann → alkohol + syre', 'Ester → aldehyd', 'Ester + oksygen → CO₂', 'Ingen av disse'],
      explanation: 'Hydrolyse splitter esteren tilbake til alkohol og karboksylsyre.',
    },
    {
      question: 'Hva er en primær alkohol?',
      options: ['-OH bundet til karbon med én C-C binding', '-OH bundet til sekundært karbon', 'Metanol', 'Den viktigste alkoholen'],
      explanation: 'I primær alkohol er -OH bundet til et karbon med bare én annen C.',
    },
    {
      question: 'Hvilken funksjonell gruppe har amider?',
      options: ['-CONH₂', '-NH₂', '-CHO', '-COOH'],
      explanation: 'Amider har gruppen -CONH₂ (eller -CONHR, -CONR₂).',
    },
  ],

  // ============================================================================
  // Kapittel 10.3: Isomeri
  // ============================================================================
  'kjemi1-10-3': [
    {
      question: 'Hva er isomerer?',
      options: ['Stoffer med samme molekylformel men ulik struktur', 'Isotoper av karbon', 'Stoffer med samme egenskaper', 'Polymerer'],
      explanation: 'Isomerer har identisk molekylformel men atomene er arrangert forskjellig.',
    },
    {
      question: 'Hva er strukturisomeri?',
      options: ['Isomerer med ulik rekkefølge av atomer/bindinger', 'Isomerer med samme struktur', 'Speilbildeisomeri', 'Geometrisk isomeri'],
      explanation: 'Strukturisomerer har atomene bundet sammen på forskjellige måter.',
    },
    {
      question: 'Butan og isobutan er eksempler på:',
      options: ['Strukturisomerer', 'Geometriske isomerer', 'Optiske isomerer', 'Identiske stoffer'],
      explanation: 'Begge er C₄H₁₀, men butan er rett kjede, isobutan er forgrenet.',
    },
    {
      question: 'Hva er geometrisk isomeri (cis-trans)?',
      options: ['Isomerer som skyldes begrenset rotasjon rundt dobbeltbinding', 'Isomerer med ulik molekylformel', 'Speilbildeisomerer', 'Strukturisomerer'],
      explanation: 'Cis-trans-isomeri oppstår når grupper kan være på samme eller motsatt side av dobbeltbinding.',
    },
    {
      question: 'Hva betyr cis- i cis-isomer?',
      options: ['Substituentene er på samme side av dobbeltbindingen', 'Substituentene er på motsatt side', 'Molekylet er syklisk', 'Molekylet er lineært'],
      explanation: 'Cis = på samme side (latin: på denne siden).',
    },
    {
      question: 'Hva betyr trans- i trans-isomer?',
      options: ['Substituentene er på motsatt side av dobbeltbindingen', 'Substituentene er på samme side', 'Molekylet er mettet', 'Molekylet har trippelbinding'],
      explanation: 'Trans = på motsatt side (latin: over/tvers).',
    },
    {
      question: 'Hva er et kiralt molekyl?',
      options: ['Et molekyl som ikke kan legges oppå sitt speilbilde', 'Et molekyl med dobbeltbinding', 'Et symmetrisk molekyl', 'Et uorganisk molekyl'],
      explanation: 'Kirale molekyler er usymmetriske og har ikke-identiske speilbilder.',
    },
    {
      question: 'Hva er optisk isomeri?',
      options: ['Isomeri som skyldes kiralitet (speilbildeisomerer)', 'Isomeri som skyldes farge', 'Cis-trans-isomeri', 'Strukturisomeri'],
      explanation: 'Optiske isomerer (enantiomerer) er speilbilder som ikke kan legges oppå hverandre.',
    },
    {
      question: 'Hva kalles et karbonatom med fire ulike grupper?',
      options: ['Kiralt senter (stereosenter)', 'Dobbeltbundet karbon', 'Primært karbon', 'Aromatisk karbon'],
      explanation: 'Et kiralt senter er et karbon bundet til fire forskjellige grupper.',
    },
    {
      question: 'Hvor mange strukturisomerer har C₄H₁₀?',
      options: ['2', '1', '3', '4'],
      explanation: 'Butan (rett kjede) og isobutan (forgrenet) - totalt 2 isomerer.',
    },
    {
      question: 'Hvorfor har alkaner fri rotasjon rundt C-C bindinger?',
      options: ['Enkeltbindinger tillater rotasjon', 'De er gasser', 'De har lav masse', 'De er ioniske'],
      explanation: 'σ-bindinger (enkeltbindinger) tillater fri rotasjon rundt bindingsaksen.',
    },
    {
      question: 'Enantiomerer har hvilke egenskaper?',
      options: ['Identiske fysiske egenskaper unntatt optisk aktivitet', 'Helt ulike egenskaper', 'Samme smeltepunkt men ulik masse', 'Ingen likheter'],
      explanation: 'Enantiomerer er like i alt unntatt hvordan de roterer polarisert lys.',
    },
  ],

  // ============================================================================
  // Kapittel 11.1: Vann- og luftkvalitet
  // ============================================================================
  'kjemi1-11-1': [
    {
      question: 'Hva er de viktigste gassene i atmosfæren?',
      options: ['Nitrogen (78%) og oksygen (21%)', 'Oksygen (78%) og karbondioksid (21%)', 'Karbondioksid og metan', 'Hydrogen og helium'],
      explanation: 'Atmosfæren består hovedsakelig av N₂ (78%) og O₂ (21%).',
    },
    {
      question: 'Hva er drivhuseffekten?',
      options: ['Gasser i atmosfæren absorberer varmestråling fra jorda', 'Plantevekst i drivhus', 'Sollys som reflekteres', 'Fordampning av vann'],
      explanation: 'Drivhusgasser (CO₂, CH₄, H₂O) holder på varmen i atmosfæren.',
    },
    {
      question: 'Hvilken gass er hovedårsaken til menneskeskapt global oppvarming?',
      options: ['CO₂ (karbondioksid)', 'O₂', 'N₂', 'Ar'],
      explanation: 'Økt CO₂ fra fossilt brensel forsterker drivhuseffekten.',
    },
    {
      question: 'Hva er ozonlaget?',
      options: ['Et lag med O₃ i stratosfæren som beskytter mot UV-stråling', 'Et lag med oksygen', 'Skylag', 'Et lag med støv'],
      explanation: 'Ozon (O₃) i stratosfæren absorberer skadelig UV-stråling.',
    },
    {
      question: 'Hva er sur nedbør?',
      options: ['Nedbør med pH under 5,6', 'Rent regnvann', 'Snø', 'Hagl'],
      explanation: 'Sur nedbør skyldes hovedsakelig SO₂ og NOₓ som danner syrer.',
    },
    {
      question: 'Hvilke gasser forårsaker sur nedbør?',
      options: ['SO₂ og NOₓ', 'CO₂ og H₂O', 'N₂ og O₂', 'CH₄ og NH₃'],
      explanation: 'Svoveldioksid og nitrogenoksider danner svovelsyre og salpetersyre.',
    },
    {
      question: 'Hva er hardhet i vann?',
      options: ['Konsentrasjon av Ca²⁺ og Mg²⁺ ioner', 'Vannets tetthet', 'pH-verdien', 'Oksygeninnhold'],
      explanation: 'Hardt vann inneholder mye kalsium- og magnesiumioner.',
    },
    {
      question: 'Hva er fotokjemisk smog?',
      options: ['Forurensning dannet av sollys og NOₓ/VOC', 'Tåke', 'Støv i luften', 'Røyk fra fabrikker'],
      explanation: 'Sollys reagerer med NOₓ og flyktige organiske forbindelser og danner ozon ved bakken.',
    },
    {
      question: 'Hva er KOF (kjemisk oksygenforbruk)?',
      options: ['Mål på organisk forurensning i vann', 'Oksygeninnhold', 'pH-verdi', 'Hardhet'],
      explanation: 'KOF måler mengden oksygen som trengs for å oksidere organisk materiale.',
    },
    {
      question: 'Hva er eutrofiering?',
      options: ['Overgjødsling av vann som fører til algevekst', 'Rensing av vann', 'Fordampning', 'Frysing'],
      explanation: 'For mye næringsstoffer (N, P) gir algeoppblomstring og oksygenmangel.',
    },
    {
      question: 'Hvilke stoffer bryter ned ozonlaget?',
      options: ['KFK (klorfluorkarboner)', 'CO₂', 'N₂', 'H₂O'],
      explanation: 'Klorfluorkarboner (freoner) spaltes og frigjør klor som bryter ned ozon.',
    },
    {
      question: 'Hva måler BOF (biologisk oksygenforbruk)?',
      options: ['Oksygen brukt av mikroorganismer til å bryte ned organisk materiale', 'Oksygen i luften', 'CO₂-innhold', 'pH'],
      explanation: 'BOF angir hvor mye oksygen som brukes biologisk over en periode.',
    },
  ],

  // ============================================================================
  // Kapittel 11.2: Grønn kjemi
  // ============================================================================
  'kjemi1-11-2': [
    {
      question: 'Hva er grønn kjemi?',
      options: ['Design av kjemiske produkter og prosesser som minimerer miljøpåvirkning', 'Kjemi med grønne farger', 'Plantekjemi', 'Økologisk jordbruk'],
      explanation: 'Grønn kjemi handler om bærekraftig kjemisk praksis.',
    },
    {
      question: 'Hva er atomøkonomi?',
      options: ['Andelen av reaktantatomene som ender i produktet', 'Antall atomer i et molekyl', 'Atomets masse', 'Antall protoner'],
      explanation: 'Høy atomøkonomi betyr at lite avfall dannes i reaksjonen.',
    },
    {
      question: 'Hva er en fornybar ressurs?',
      options: ['Ressurs som kan fornyes innen rimelig tid', 'Fossil ressurs', 'Atomkraft', 'Metaller'],
      explanation: 'Fornybare ressurser som biomasse kan erstattes naturlig.',
    },
    {
      question: 'Hva er biodrivstoff?',
      options: ['Drivstoff laget av biologisk materiale', 'Fossilt drivstoff', 'Atomkraft', 'Solenergi'],
      explanation: 'Biodrivstoff som etanol og biodiesel kommer fra planter eller avfall.',
    },
    {
      question: 'Hva er bioetanol?',
      options: ['Etanol produsert fra biomasse (f.eks. mais, sukkerrør)', 'Syntetisk alkohol', 'Fossilt drivstoff', 'Metan'],
      explanation: 'Bioetanol fremstilles ved gjæring av sukker fra planter.',
    },
    {
      question: 'Hva er en av de 12 prinsippene for grønn kjemi?',
      options: ['Forebygg avfall fremfor å rense opp', 'Bruk mest mulig energi', 'Lag flest mulig biprodukter', 'Ignorer sikkerhet'],
      explanation: 'Prinsipp 1: Det er bedre å forebygge avfall enn å behandle det.',
    },
    {
      question: 'Hva er en katalysator i grønn kjemi-sammenheng?',
      options: ['Et stoff som øker reaksjonshastighet og kan gjenbrukes', 'Et avfallsprodukt', 'En forurensning', 'Et drivhusgass'],
      explanation: 'Katalysatorer reduserer energibruk og avfallsmengde.',
    },
    {
      question: 'Hva er livssyklusanalyse (LCA)?',
      options: ['Vurdering av miljøpåvirkning gjennom hele produktets levetid', 'Analyse av cellens livssyklus', 'Måling av halveringstid', 'Aldersbestemmelse'],
      explanation: 'LCA ser på miljøeffekter fra råvare til avfall.',
    },
    {
      question: 'Hva er biodiesel laget av?',
      options: ['Vegetabilske oljer eller animalsk fett', 'Råolje', 'Naturgass', 'Kull'],
      explanation: 'Biodiesel fremstilles ved omestering av oljer med metanol.',
    },
    {
      question: 'Hvorfor er høy atomøkonomi ønskelig?',
      options: ['Mindre avfall og bedre ressursutnyttelse', 'Raskere reaksjon', 'Mer varme frigjøres', 'Billigere råstoffer'],
      explanation: '100% atomøkonomi betyr at alle atomer fra reaktantene er i produktet.',
    },
    {
      question: 'Hva er karbonfangst?',
      options: ['Teknologi for å fange og lagre CO₂', 'Fotosyntese', 'Forbrenning', 'Destillasjon'],
      explanation: 'CCS (Carbon Capture and Storage) fjerner CO₂ fra utslipp.',
    },
    {
      question: 'Hvilket av følgende er et grønt løsemiddel?',
      options: ['Vann', 'Benzen', 'Klorform', 'Diklormetan'],
      explanation: 'Vann er et ikke-giftig, billig og miljøvennlig løsemiddel.',
    },
  ],

  // ============================================================================
  // Kapittel 12.1: Laboratoriesikkerhet og metoder
  // ============================================================================
  'kjemi1-12-1': [
    {
      question: 'Hva betyr faresymbolet med flamme?',
      options: ['Brannfarlig stoff', 'Giftig stoff', 'Etsende stoff', 'Miljøfarlig stoff'],
      explanation: 'Flamme-symbolet varsler om brann- og eksplosjonsfare.',
    },
    {
      question: 'Hva betyr faresymbolet med hodeskalle?',
      options: ['Akutt giftig stoff', 'Brannfarlig', 'Etsende', 'Oksiderende'],
      explanation: 'Hodeskalle og korslagte knokler betyr akutt giftighet.',
    },
    {
      question: 'Hva skal du alltid bruke ved arbeid med kjemikalier?',
      options: ['Vernebriller og labfrakk', 'Solbriller', 'Hansker alene', 'Ingenting spesielt'],
      explanation: 'Vernebriller beskytter øynene, labfrakk beskytter klær og hud.',
    },
    {
      question: 'Hvordan skal du lukte på et kjemikalie?',
      options: ['Vift forsiktig luft mot nesen', 'Hold flasken rett under nesen', 'Ikke lukt i det hele tatt', 'Trekk dypt inn'],
      explanation: 'Vifteteknikken forhindrer innånding av konsentrerte damper.',
    },
    {
      question: 'Hva gjør du hvis du søler syre på huden?',
      options: ['Skyll umiddelbart med mye vann', 'Tørk av med papir', 'Ignorer det', 'Påfør base'],
      explanation: 'Rikelig med vann fortynner og skyller bort syren.',
    },
    {
      question: 'Hva er en avtrekkskap?',
      options: ['Skap med ventilasjon for å fjerne farlige damper', 'Oppbevaringsskap', 'Kjøleskap', 'Varmeskap'],
      explanation: 'Avtrekkskap suger bort giftige eller irriterende gasser.',
    },
    {
      question: 'Hvordan skal syrer fortynnes?',
      options: ['Hell syre i vann, aldri omvendt', 'Hell vann i syre', 'Bland med base først', 'Det spiller ingen rolle'],
      explanation: 'Syre i vann er trygt; vann i syre kan forårsake sprut.',
    },
    {
      question: 'Hva betyr faresymbolet med utropstegn?',
      options: ['Helsefare (irriterende, sensibiliserende)', 'Akutt giftig', 'Eksplosivt', 'Radioaktivt'],
      explanation: 'Utropstegnet varsler om helsefare som irritasjon eller allergi.',
    },
    {
      question: 'Hvorfor skal langt hår være bundet i laboratoriet?',
      options: ['For å unngå at det tar fyr eller kommer i kjemikalier', 'For utseendets skyld', 'Det er ikke nødvendig', 'For å se bedre'],
      explanation: 'Løst hår kan ta fyr eller dyppe i kjemikalier.',
    },
    {
      question: 'Hva gjør du ved brann i laboratoriet?',
      options: ['Varsle, evakuer, slokk hvis mulig og trygt', 'Ignorer det', 'Fortsett arbeidet', 'Åpne vinduet'],
      explanation: 'Sikkerhet først: varsle andre, evakuer, bruk brannslokkingsapparat hvis trygt.',
    },
    {
      question: 'Hva betyr GHS?',
      options: ['Globally Harmonized System (for klassifisering av kjemikalier)', 'General Health Safety', 'Green Handling System', 'Gas Handling Standard'],
      explanation: 'GHS er det globale systemet for faresymboler og merking.',
    },
    {
      question: 'Hvor skal kjemisk avfall kastes?',
      options: ['I merkede avfallsbeholdere for kjemisk avfall', 'I vasken', 'I vanlig søppel', 'Ut vinduet'],
      explanation: 'Kjemisk avfall må samles separat og håndteres forsvarlig.',
    },
  ],

  // ============================================================================
  // Kapittel 12.2: Usikkerhet og feilkilder
  // ============================================================================
  'kjemi1-12-2': [
    {
      question: 'Hva er måleusikkerhet?',
      options: ['Tvil om hvor nøyaktig en måling er', 'En feil i beregningen', 'Et ødelagt instrument', 'En personlig preferanse'],
      explanation: 'Alle målinger har usikkerhet som angir påliteligheten.',
    },
    {
      question: 'Hva er forskjellen mellom systematiske og tilfeldige feil?',
      options: ['Systematiske gir konsistent avvik, tilfeldige varierer tilfeldig', 'De er det samme', 'Tilfeldige er verre', 'Systematiske kan ikke unngås'],
      explanation: 'Systematiske feil kan korrigeres, tilfeldige reduseres ved gjentatte målinger.',
    },
    {
      question: 'Hva er nøyaktighet?',
      options: ['Hvor nært målingen er den sanne verdien', 'Hvor mange desimaler', 'Hvor raskt målingen gjøres', 'Hvor mange målinger'],
      explanation: 'Nøyaktighet handler om samsvar med den virkelige verdien.',
    },
    {
      question: 'Hva er presisjon?',
      options: ['Hvor godt gjentatte målinger stemmer overens', 'Det samme som nøyaktighet', 'Antall desimaler', 'Instrumentets pris'],
      explanation: 'Høy presisjon betyr liten spredning i gjentatte målinger.',
    },
    {
      question: 'Hva er et signifikant siffer?',
      options: ['Siffer som bidrar til målingens presisjon', 'Bare siffer før desimaltegnet', 'Bare siffer etter desimaltegnet', 'Alle nuller'],
      explanation: 'Signifikante siffer angir hvor mange meningsfulle siffer målingen har.',
    },
    {
      question: 'Hvor mange signifikante siffer har 0,00340?',
      options: ['3', '5', '2', '6'],
      explanation: 'Ledende nuller teller ikke, etterfølgende nuller etter desimal teller: 3, 4, 0.',
    },
    {
      question: 'Hva er en systematisk feil?',
      options: ['En feil som gir konsistent avvik i samme retning', 'En tilfeldig feil', 'En regnefeil', 'En skrivefeil'],
      explanation: 'Systematiske feil kan skyldes kalibreringsfeil eller metode.',
    },
    {
      question: 'Hvordan kan tilfeldige feil reduseres?',
      options: ['Ved å gjenta målingen flere ganger og ta gjennomsnittet', 'Ved å måle raskere', 'Ved å bruke billigere utstyr', 'De kan ikke reduseres'],
      explanation: 'Gjennomsnittet av mange målinger reduserer tilfeldig variasjon.',
    },
    {
      question: 'Hva er absolutt usikkerhet?',
      options: ['Usikkerhet uttrykt i samme enhet som målingen', 'Prosentvis usikkerhet', 'Teoretisk usikkerhet', 'Ingen usikkerhet'],
      explanation: 'Absolutt usikkerhet angis f.eks. som ±0,1 g.',
    },
    {
      question: 'Hva er relativ usikkerhet?',
      options: ['Usikkerhet uttrykt som prosent av målt verdi', 'Absolutt usikkerhet', 'Standardavvik', 'Varians'],
      explanation: 'Relativ usikkerhet = (absolutt usikkerhet / målt verdi) × 100%.',
    },
    {
      question: 'En måling er 25,0 ± 0,5 g. Hva er den relative usikkerheten?',
      options: ['2%', '0,5%', '25%', '0,02%'],
      explanation: 'Relativ usikkerhet = 0,5/25,0 × 100% = 2%.',
    },
    {
      question: 'Ved multiplikasjon, hvordan kombineres usikkerhet?',
      options: ['Relative usikkerheter adderes', 'Absolutte usikkerheter adderes', 'Usikkerhetene multipliseres', 'Usikkerheten blir null'],
      explanation: 'Ved ×/÷ adderes de relative (prosentvise) usikkerhetene.',
    },
  ],

  // ============================================================================
  // KJEMI 2 - Kapittel 3: Likevekt
  // ============================================================================

  // ============================================================================
  // Kapittel 3.1: Kjemisk likevekt og likevektskonstanten K
  // ============================================================================
  'kjemi2-3-1': [
    {
      question: 'Hva kjennetegner en kjemisk likevekt?',
      options: ['Hastigheten til fram- og tilbakereaksjonen er like store', 'Reaksjonen har stoppet helt', 'Alle reaktanter er brukt opp', 'Produktene dannes ikke lenger'],
      explanation: 'Ved likevekt er reaksjonshastighetene like store begge veier, så konsentrasjonene holder seg konstante selv om reaksjonen fortsetter.',
    },
    {
      question: 'Hva er likevektskonstanten K et mål på?',
      options: ['Forholdet mellom produkter og reaktanter ved likevekt', 'Reaksjonshastigheten', 'Temperaturen ved likevekt', 'Aktiveringsenergi'],
      explanation: 'K uttrykker forholdet mellom konsentrasjonene av produkter og reaktanter ved likevekt.',
    },
    {
      question: 'For reaksjonen aA + bB ⇌ cC + dD, hva er uttrykket for K?',
      options: ['K = [C]^c · [D]^d / ([A]^a · [B]^b)', 'K = [A]^a · [B]^b / ([C]^c · [D]^d)', 'K = [C] + [D] / ([A] + [B])', 'K = (c + d) / (a + b)'],
      explanation: 'K-uttrykket har produktkonsentrasjoner i telleren og reaktantkonsentrasjoner i nevneren, opphøyd i sine koeffisienter.',
    },
    {
      question: 'Hvis K >> 1, hva forteller det om likevekten?',
      options: ['Likevekten ligger mot høyre (produktsiden)', 'Likevekten ligger mot venstre (reaktantsiden)', 'Likevekten er nøyaktig i midten', 'Reaksjonen går ikke'],
      explanation: 'Stor K-verdi betyr høy konsentrasjon av produkter i forhold til reaktanter - likevekten favoriserer produktene.',
    },
    {
      question: 'Hvis K << 1, hva betyr det?',
      options: ['Det dannes lite produkter ved likevekt', 'Det dannes mye produkter ved likevekt', 'Reaksjonen er irreversibel', 'Reaksjonen er svært rask'],
      explanation: 'Liten K-verdi betyr at reaktantene dominerer ved likevekt - lite produkt dannes.',
    },
    {
      question: 'Hva er enheten til likevektskonstanten K?',
      options: ['K kan ha ulike enheter eller være enhetsløs, avhengig av reaksjonen', 'Alltid mol/L', 'Alltid L/mol', 'Alltid enhetsløs'],
      explanation: 'Enheten til K avhenger av antall mol på hver side av reaksjonslikningen. Kp og Kc kan ha ulike enheter.',
    },
    {
      question: 'Hva er forskjellen mellom Kc og Kp?',
      options: ['Kc bruker konsentrasjoner, Kp bruker partialtrykk', 'Kc gjelder for væsker, Kp for faste stoffer', 'Kc er alltid større enn Kp', 'Det er ingen forskjell'],
      explanation: 'Kc uttrykkes med molare konsentrasjoner (mol/L), mens Kp uttrykkes med partialtrykk for gassreaksjoner.',
    },
    {
      question: 'Ved likevekt for N₂(g) + 3H₂(g) ⇌ 2NH₃(g), hva er riktig K-uttrykk?',
      options: ['K = [NH₃]² / ([N₂] · [H₂]³)', 'K = [N₂] · [H₂]³ / [NH₃]²', 'K = 2[NH₃] / ([N₂] + 3[H₂])', 'K = [NH₃] / ([N₂] · [H₂])'],
      explanation: 'Koeffisientene blir eksponenter: produktet NH₃ opphøyes i 2, H₂ opphøyes i 3.',
    },
    {
      question: 'Hva skjer med K hvis man snur reaksjonslikningen?',
      options: ['K blir den inverse verdien (1/K)', 'K forblir uendret', 'K blir negativ', 'K dobles'],
      explanation: 'Når reaksjonen snur, bytter produkter og reaktanter plass, og ny K = 1/gammel K.',
    },
    {
      question: 'Hvordan påvirkes K hvis man multipliserer reaksjonslikningen med 2?',
      options: ['K blir opphøyd i 2 (K²)', 'K dobles (2K)', 'K halveres', 'K forblir uendret'],
      explanation: 'Når koeffisientene multipliseres med n, blir K opphøyd i n. K_ny = K^n.',
    },
    {
      question: 'Hva er reaksjonskvotienten Q?',
      options: ['Forholdet mellom produkter og reaktanter på et vilkårlig tidspunkt', 'Det samme som K', 'Aktiveringsenergi delt på temperatur', 'Reaksjonsvarmen'],
      explanation: 'Q beregnes på samme måte som K, men kan beregnes når som helst, ikke bare ved likevekt.',
    },
    {
      question: 'Hvis Q < K, hvilken vei vil reaksjonen gå?',
      options: ['Mot høyre (danner mer produkt)', 'Mot venstre (danner mer reaktant)', 'Ingen retning - systemet er ved likevekt', 'Reaksjonen stopper'],
      explanation: 'Når Q < K er det for lite produkt i forhold til likevekt, så reaksjonen går mot høyre for å øke Q til K.',
    },
  ],

  // ============================================================================
  // Kapittel 3.2: Beregninger med likevektskonstanten
  // ============================================================================
  'kjemi2-3-2': [
    {
      question: 'For reaksjonen A ⇌ B med K = 4, og startkonsentrasjoner [A]₀ = 1,0 M og [B]₀ = 0. Hva er [B] ved likevekt?',
      options: ['0,80 M', '0,20 M', '0,50 M', '4,0 M'],
      explanation: 'Ved likevekt: K = [B]/[A] = x/(1-x) = 4. Løser: x = 0,80 M.',
    },
    {
      question: 'Hva brukes en ICE-tabell til?',
      options: ['Å organisere startkonsentrasjoner, endringer og likevektskonsentrasjoner', 'Å måle temperaturen', 'Å beregne aktiveringsenergi', 'Å finne reaksjonsvarme'],
      explanation: 'ICE = Initial, Change, Equilibrium. Tabellen hjelper med å holde oversikt over konsentrasjonsendringene.',
    },
    {
      question: 'I en ICE-tabell for A ⇌ 2B, hvis A minker med x, hvor mye øker B?',
      options: ['2x', 'x', 'x/2', '4x'],
      explanation: 'Støkiometrien viser at for hver mol A som reagerer, dannes 2 mol B.',
    },
    {
      question: 'For 2NO₂ ⇌ N₂O₄ med K = 170 ved 298 K. Hvis [NO₂]₀ = 0,20 M, hva blir [N₂O₄] ved likevekt (tilnærmet)?',
      options: ['Omtrent 0,10 M', 'Omtrent 0,01 M', 'Omtrent 0,20 M', 'Omtrent 34 M'],
      explanation: 'K = [N₂O₄]/[NO₂]². Med stor K og liten startkonsentrasjon blir [N₂O₄] ≈ 0,10 M.',
    },
    {
      question: 'Når kan man bruke tilnærmingen x << startkonsentrasjonen?',
      options: ['Når K er svært liten eller svært stor', 'Alltid', 'Aldri', 'Bare for gassreaksjoner'],
      explanation: 'Hvis K << 1 eller K >> 1 vil endringen x ofte være liten sammenlignet med startkonsentrasjonen.',
    },
    {
      question: 'For H₂ + I₂ ⇌ 2HI med Kc = 50 ved 450°C. Hva er Kc for HI ⇌ ½H₂ + ½I₂?',
      options: ['0,14', '25', '100', '0,02'],
      explanation: 'Ny reaksjon er halvert og reversert: K_ny = 1/√50 = 1/7,07 ≈ 0,14.',
    },
    {
      question: 'Hva er den 5%-regelen for tilnærminger?',
      options: ['Tilnærmingen er gyldig hvis x er mindre enn 5% av startkonsentrasjonen', 'K må være mindre enn 5%', 'Temperaturen må endres med mindre enn 5%', 'Reaksjonen må være 5% fullstendig'],
      explanation: 'Hvis x < 5% av startverdien, er feilen fra tilnærmingen akseptabel.',
    },
    {
      question: 'For PCl₅ ⇌ PCl₃ + Cl₂ starter man med 0,50 M PCl₅. Ved likevekt er [Cl₂] = 0,10 M. Hva er K?',
      options: ['0,025', '0,50', '0,10', '5,0'],
      explanation: '[PCl₃] = [Cl₂] = 0,10 M, [PCl₅] = 0,40 M. K = (0,10)(0,10)/(0,40) = 0,025.',
    },
    {
      question: 'Hvorfor må man sjekke at beregnede konsentrasjoner ikke er negative?',
      options: ['Negative konsentrasjoner er fysisk umulig', 'For å spare tid', 'For å forenkle beregningen', 'Det er bare en konvensjon'],
      explanation: 'En negativ konsentrasjon betyr at man har gjort en feil eller brukt feil tilnærming.',
    },
    {
      question: 'For en reaksjon med K = 1,0 × 10⁻¹⁴, hva kan vi si om produktkonsentrasjonene ved likevekt?',
      options: ['Produktkonsentrasjonene er svært lave', 'Produktkonsentrasjonene er svært høye', 'Produktene og reaktantene har lik konsentrasjon', 'Reaksjonen går ikke'],
      explanation: 'Svært liten K betyr at telleren (produktene) er mye mindre enn nevneren (reaktantene).',
    },
    {
      question: 'Hvis du blander like mengder reaktanter og produkter, og Q = K, hva skjer?',
      options: ['Systemet er allerede ved likevekt - ingen nettoendring', 'Reaksjonen går mot høyre', 'Reaksjonen går mot venstre', 'Alle konsentrasjoner blir null'],
      explanation: 'Når Q = K er systemet ved likevekt, og det er ingen netto reaksjon i noen retning.',
    },
    {
      question: 'For 2SO₂ + O₂ ⇌ 2SO₃, hvis K = 4,0 × 10⁶, hvilken påstand er riktig?',
      options: ['Ved likevekt er nesten all SO₂ omdannet til SO₃', 'Ved likevekt er det meste fortsatt SO₂', 'Det er like mye SO₂ og SO₃', 'O₂ er begrensende reagens'],
      explanation: 'Svært stor K betyr at likevekten ligger langt mot produktsiden.',
    },
  ],

  // ============================================================================
  // Kapittel 3.3: Le Chateliers prinsipp
  // ============================================================================
  'kjemi2-3-3': [
    {
      question: 'Hva sier Le Chateliers prinsipp?',
      options: ['Et system i likevekt vil motvirke endringer påført utenfra', 'Likevekten går alltid mot høyre', 'K-verdien endres ved alle forstyrrelser', 'Temperatur har ingen effekt på likevekt'],
      explanation: 'Le Chatelier: Når en likevekt forstyrres, vil systemet forskyve seg for å motvirke forstyrrelsen.',
    },
    {
      question: 'For N₂ + 3H₂ ⇌ 2NH₃ (eksoterm), hva skjer hvis man øker trykket?',
      options: ['Likevekten forskyves mot høyre (mer NH₃)', 'Likevekten forskyves mot venstre (mer N₂ og H₂)', 'Ingen endring', 'Reaksjonen stopper'],
      explanation: 'Økt trykk favoriserer siden med færre mol gass. Venstre har 4 mol, høyre har 2 mol.',
    },
    {
      question: 'For en eksoterm reaksjon A ⇌ B + varme, hva skjer med K når temperaturen økes?',
      options: ['K blir mindre', 'K blir større', 'K forblir uendret', 'K blir null'],
      explanation: 'Økt temperatur forskyver likevekten bort fra varmesiden - for eksoterme reaksjoner betyr det lavere K.',
    },
    {
      question: 'Hva skjer hvis man tilfører mer produkt til en likevekt?',
      options: ['Likevekten forskyves mot venstre', 'Likevekten forskyves mot høyre', 'K-verdien øker', 'Ingenting skjer'],
      explanation: 'Systemet motvirker økningen i produkt ved å forskyve likevekten mot reaktantene.',
    },
    {
      question: 'For 2NO₂(g) ⇌ N₂O₄(g), ΔH < 0. Hva skjer hvis man kjøler ned systemet?',
      options: ['Mer N₂O₄ dannes', 'Mer NO₂ dannes', 'Ingen endring', 'Begge gassene forsvinner'],
      explanation: 'Kjøling av en eksoterm reaksjon forskyver likevekten mot produktet (mot varmeproduksjonen).',
    },
    {
      question: 'Hva er effekten av å tilsette en katalysator til en likevekt?',
      options: ['Likevekten nås raskere, men K er uendret', 'K øker', 'K minker', 'Likevekten forskyves mot høyre'],
      explanation: 'Katalysatorer øker hastigheten for både fram- og tilbakereaksjonen like mye - K endres ikke.',
    },
    {
      question: 'For CO(g) + 2H₂(g) ⇌ CH₃OH(g), hva skjer hvis man fjerner CH₃OH etterhvert som det dannes?',
      options: ['Likevekten forskyves mot høyre - mer CH₃OH produseres', 'Likevekten forskyves mot venstre', 'Ingen effekt', 'K endres'],
      explanation: 'Å fjerne produkt gjør at systemet kompenserer ved å produsere mer.',
    },
    {
      question: 'For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) (endoterm), hvordan øker man utbyttet av PCl₃?',
      options: ['Øke temperaturen og senke trykket', 'Senke temperaturen og øke trykket', 'Tilsette mer Cl₂', 'Bruke katalysator'],
      explanation: 'Endoterm: høyere T favoriserer produktene. Flere mol gass på høyre side: lavere trykk favoriserer produktene.',
    },
    {
      question: 'Hva skjer med en gasslikevekt hvis man tilfører en inert gass ved konstant volum?',
      options: ['Ingen endring i likevekten', 'Likevekten forskyves mot høyre', 'Likevekten forskyves mot venstre', 'K endres'],
      explanation: 'Ved konstant volum endres ikke partialtrykkene til reaktanter/produkter, så likevekten påvirkes ikke.',
    },
    {
      question: 'For H₂(g) + I₂(g) ⇌ 2HI(g), hva skjer hvis man øker trykket?',
      options: ['Ingen endring - like mange mol gass på begge sider', 'Mer HI dannes', 'Mer H₂ og I₂ dannes', 'K øker'],
      explanation: '2 mol gass på hver side betyr at trykkendring ikke favoriserer noen side.',
    },
    {
      question: 'For CaCO₃(s) ⇌ CaO(s) + CO₂(g) (endoterm), hvordan øker man utbyttet av CO₂?',
      options: ['Øke temperaturen og senke trykket', 'Senke temperaturen og øke trykket', 'Tilsette mer CaCO₃', 'Tilsette mer CaO'],
      explanation: 'Endoterm reaksjon favoriseres av høy T. Gass dannes, så lavt trykk favoriserer produktene.',
    },
    {
      question: 'Hvorfor endres K ved temperaturendring, men ikke ved konsentrasjonsendring?',
      options: ['K avhenger bare av temperatur - det er termodynamisk bestemt', 'K avhenger av konsentrasjon', 'K er alltid konstant', 'Konsentrasjonsendring påvirker hastigheten'],
      explanation: 'K er bestemt av Gibbs fri energi som kun avhenger av temperatur. Konsentrasjonsendring endrer Q, ikke K.',
    },
  ],

  // ============================================================================
  // Kapittel 3.4: Heterogen likevekt
  // ============================================================================
  'kjemi2-3-4': [
    {
      question: 'Hva er en heterogen likevekt?',
      options: ['En likevekt der reaktanter og produkter er i ulike faser', 'En likevekt med bare gasser', 'En likevekt med bare væsker', 'En likevekt som ikke kan nås'],
      explanation: 'Heterogen likevekt involverer stoffer i forskjellige faser, f.eks. fast stoff og gass.',
    },
    {
      question: 'Hvorfor inkluderes ikke faste stoffer i K-uttrykket?',
      options: ['Konsentrasjonen til et rent fast stoff er konstant', 'Faste stoffer reagerer ikke', 'Faste stoffer har konsentrasjon 1', 'Det er bare en forenkling'],
      explanation: 'Rene faste stoffer har konstant "konsentrasjon" (tetthet/molarmasse) som inkluderes i K.',
    },
    {
      question: 'For CaCO₃(s) ⇌ CaO(s) + CO₂(g), hva er K-uttrykket?',
      options: ['K = p(CO₂)', 'K = [CaO][CO₂]/[CaCO₃]', 'K = [CO₂]/[CaCO₃]', 'K = 1'],
      explanation: 'Faste stoffer utelates, så K = p(CO₂) eller Kc = [CO₂].',
    },
    {
      question: 'Hva skjer med likevekten CaCO₃(s) ⇌ CaO(s) + CO₂(g) hvis man tilfører mer CaCO₃?',
      options: ['Ingen endring i likevekten', 'Mer CO₂ dannes', 'Mindre CO₂ dannes', 'K øker'],
      explanation: 'Mengden fast stoff påvirker ikke likevekten så lenge det er noe til stede.',
    },
    {
      question: 'For hvilke stoffer angis aktiviteten som 1 i K-uttrykk?',
      options: ['Rene faste stoffer og rene væsker', 'Gasser', 'Løste stoffer', 'Alle stoffer'],
      explanation: 'Rene kondenserte faser (faste stoffer og væsker) har aktivitet ≈ 1 og utelates fra K.',
    },
    {
      question: 'For Fe₃O₄(s) + 4H₂(g) ⇌ 3Fe(s) + 4H₂O(g), hva er K-uttrykket?',
      options: ['K = p(H₂O)⁴/p(H₂)⁴', 'K = [Fe]³[H₂O]⁴/([Fe₃O₄][H₂]⁴)', 'K = [H₂O]/[H₂]', 'K = 3·4/4'],
      explanation: 'Faste stoffer (Fe₃O₄ og Fe) utelates. K = p(H₂O)⁴/p(H₂)⁴ = (p(H₂O)/p(H₂))⁴.',
    },
    {
      question: 'For væske-gass-likevekten H₂O(l) ⇌ H₂O(g), hva er K-uttrykket?',
      options: ['K = p(H₂O)', 'K = [H₂O(g)]/[H₂O(l)]', 'K = 1', 'K = [H₂O(l)]'],
      explanation: 'Ren væske utelates, så K = p(H₂O) = damptrykket ved den temperaturen.',
    },
    {
      question: 'Hva er sammenhengen mellom Kp og damptrykk for en ren væske?',
      options: ['Kp er lik damptrykket ved gitt temperatur', 'Kp er alltid 1', 'Kp avhenger av væskemengden', 'Det er ingen sammenheng'],
      explanation: 'For væske ⇌ gass av et rent stoff er Kp = damptrykket ved den temperaturen.',
    },
    {
      question: 'For AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq), hva kalles K for denne likevekten?',
      options: ['Løselighetsprodukt (Ksp)', 'Syrekonstant (Ka)', 'Likevektskonstant (Kc)', 'Vannkonstant (Kw)'],
      explanation: 'For løselighetslikevekter med fast stoff og ioner kalles K for løselighetsprodukt, Ksp.',
    },
    {
      question: 'Hva er Ksp-uttrykket for Ag₂S(s) ⇌ 2Ag⁺(aq) + S²⁻(aq)?',
      options: ['Ksp = [Ag⁺]²[S²⁻]', 'Ksp = [Ag⁺][S²⁻]/[Ag₂S]', 'Ksp = 2[Ag⁺][S²⁻]', 'Ksp = [S²⁻]/[Ag⁺]²'],
      explanation: 'Det faste stoffet utelates, og ionene tas med sine koeffisienter som eksponenter.',
    },
    {
      question: 'Hvis Ksp for CaF₂ er 3,9 × 10⁻¹¹, hva er løseligheten s i rent vann?',
      options: ['s = 2,1 × 10⁻⁴ M', 's = 3,9 × 10⁻¹¹ M', 's = 6,2 × 10⁻⁶ M', 's = 1,3 × 10⁻⁴ M'],
      explanation: 'CaF₂ → Ca²⁺ + 2F⁻. Ksp = s(2s)² = 4s³. s = ∛(Ksp/4) = ∛(9,75×10⁻¹²) ≈ 2,1×10⁻⁴ M.',
    },
    {
      question: 'Hvorfor er mengden fast stoff irrelevant for likevektsposisjonen (så lenge noe er til stede)?',
      options: ['Fordi aktiviteten til et fast stoff er 1 uavhengig av mengde', 'Fordi faste stoffer ikke deltar i reaksjonen', 'Fordi K bare gjelder for gasser', 'Det er feil - mengden er relevant'],
      explanation: 'Aktiviteten (effektiv konsentrasjon) for et rent fast stoff er definert som 1.',
    },
  ],

  // ============================================================================
  // Kapittel 3.5: Likevekt i industrien (Haber-Bosch, kontaktprosessen)
  // ============================================================================
  'kjemi2-3-5': [
    {
      question: 'Hva produseres i Haber-Bosch-prosessen?',
      options: ['Ammoniakk (NH₃)', 'Svovelsyre (H₂SO₄)', 'Salpetersyre (HNO₃)', 'Metanol (CH₃OH)'],
      explanation: 'Haber-Bosch: N₂ + 3H₂ ⇌ 2NH₃. Ammoniakk er utgangspunkt for gjødsel og mange kjemikalier.',
    },
    {
      question: 'Hvilke betingelser brukes i Haber-Bosch-prosessen?',
      options: ['Høyt trykk (150-300 bar), middels temperatur (400-500°C), jernkatalysator', 'Lavt trykk, høy temperatur, platinakatalysator', 'Romtemperatur og atmosfærisk trykk', 'Høy temperatur, lavt trykk, ingen katalysator'],
      explanation: 'Høyt trykk favoriserer produktet (færre mol). Middels T er et kompromiss mellom K og hastighet.',
    },
    {
      question: 'Hvorfor bruker man ikke enda lavere temperatur i Haber-Bosch-prosessen?',
      options: ['Reaksjonen blir for langsom selv med katalysator', 'Ammoniakk er ustabil ved lav temperatur', 'Katalysatoren virker ikke ved lav temperatur', 'K blir for liten'],
      explanation: 'Selv om K er større ved lav T (eksoterm reaksjon), blir reaksjonshastigheten for lav til å være praktisk.',
    },
    {
      question: 'Hva er kontaktprosessen?',
      options: ['Industriell produksjon av svovelsyre', 'Produksjon av ammoniakk', 'Fremstilling av salpetersyre', 'Elektrolyse av vann'],
      explanation: 'Kontaktprosessen omdanner SO₂ til SO₃ som deretter brukes til å lage H₂SO₄.',
    },
    {
      question: 'Hva er nøkkelreaksjonen i kontaktprosessen?',
      options: ['2SO₂ + O₂ ⇌ 2SO₃', 'S + O₂ → SO₂', 'SO₃ + H₂O → H₂SO₄', 'H₂S + O₂ → SO₂ + H₂O'],
      explanation: 'Oksidasjon av SO₂ til SO₃ over V₂O₅-katalysator er det kritiske trinnet.',
    },
    {
      question: 'Hvilken katalysator brukes i kontaktprosessen?',
      options: ['Vanadium(V)oksid (V₂O₅)', 'Jern (Fe)', 'Platina (Pt)', 'Nikkel (Ni)'],
      explanation: 'V₂O₅ er katalysatoren som brukes i kontaktprosessen for å øke hastigheten av SO₂-oksidasjon.',
    },
    {
      question: 'Hvorfor absorberes SO₃ i konsentrert H₂SO₄ i stedet for vann?',
      options: ['Direkte reaksjon med vann danner tåke som er vanskelig å håndtere', 'SO₃ løser seg ikke i vann', 'Reaksjonen med vann er for langsom', 'Det dannes giftige gasser'],
      explanation: 'SO₃ + H₂O er sterkt eksoterm og danner sur tåke. Absorpsjon i H₂SO₄ gir oleum som fortynnes kontrollert.',
    },
    {
      question: 'For N₂ + 3H₂ ⇌ 2NH₃ (ΔH = -92 kJ/mol), hvorfor gir ikke høyere trykk alltid bedre utbytte i praksis?',
      options: ['Høyt trykk krever dyrere utstyr og mer energi', 'K minker ved høyt trykk', 'Ammoniakk brytes ned ved høyt trykk', 'Katalysatoren virker ikke ved høyt trykk'],
      explanation: 'Det er en avveining mellom utbytte og kostnader - ekstremt høyt trykk er ikke økonomisk.',
    },
    {
      question: 'Hvordan øker man utbyttet i industrielle prosesser ved å fjerne produkt?',
      options: ['Produktet kondenseres og fjernes kontinuerlig, slik at likevekten forskyves', 'Man tilsetter mer reaktant', 'Man øker temperaturen', 'Man senker trykket'],
      explanation: 'I Haber-prosessen kondenseres NH₃ ut, og ureagerte gasser resirkuleres.',
    },
    {
      question: 'Hva er typisk konversjon (omdanning) per passering i Haber-prosessen?',
      options: ['15-20%', '90-95%', '50%', '1-2%'],
      explanation: 'Konversjonen per passering er lav, men resirkulering av gasser gir høyt totalutbytte.',
    },
    {
      question: 'Hvorfor er svovelsyre et av verdens mest produserte kjemikalier?',
      options: ['Den brukes i gjødselproduksjon, batterier, og mange industrielle prosesser', 'Den er den sterkeste syren', 'Den er billigst å lage', 'Den er minst giftig'],
      explanation: 'H₂SO₄ er essensielt for fosfatgjødsel, bilbatterier, metallbearbeiding og kjemisk industri.',
    },
    {
      question: 'I Ostwald-prosessen omdannes ammoniakk til salpetersyre. Hva er første trinn?',
      options: ['4NH₃ + 5O₂ → 4NO + 6H₂O (over Pt-katalysator)', 'NH₃ + HNO₃ → NH₄NO₃', '2NO + O₂ → 2NO₂', '3NO₂ + H₂O → 2HNO₃ + NO'],
      explanation: 'Første trinn er oksidasjon av ammoniakk til nitrogenmonoksid over platinakatalysator.',
    },
  ],

  // ============================================================================
  // Kapittel 4.1: Syrer og baser - repetisjon og utdypning
  // ============================================================================
  'kjemi2-4-1': [
    {
      question: 'Hva er definisjonen på en Brønsted-syre?',
      options: ['Et stoff som kan avgi et proton (H⁺)', 'Et stoff som kan ta opp et proton', 'Et stoff som løser seg i vann', 'Et stoff med pH under 7'],
      explanation: 'Ifølge Brønsted-Lowry-teorien er en syre et protondonor - et stoff som kan avgi H⁺.',
    },
    {
      question: 'Hva er den konjugerte basen til HCl?',
      options: ['Cl⁻', 'H⁺', 'OH⁻', 'HCl₂⁻'],
      explanation: 'Når HCl avgir et proton, dannes Cl⁻ som er den konjugerte basen.',
    },
    {
      question: 'I reaksjonen NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, hva fungerer NH₃ som?',
      options: ['Brønsted-base', 'Brønsted-syre', 'Konjugert syre', 'Oksidant'],
      explanation: 'NH₃ tar opp et proton fra vann og fungerer derfor som en Brønsted-base.',
    },
    {
      question: 'Hva er det konjugerte syreparet til NH₃?',
      options: ['NH₄⁺', 'NH₂⁻', 'N₂H₄', 'NO₃⁻'],
      explanation: 'Når NH₃ tar opp et proton, dannes NH₄⁺ som er den konjugerte syren.',
    },
    {
      question: 'Hvilket stoff kan fungere som både syre og base (amfolyttisk)?',
      options: ['H₂O', 'HCl', 'NaOH', 'NaCl'],
      explanation: 'Vann kan både avgi proton (syre) og ta opp proton (base), og er derfor amfolyttisk.',
    },
    {
      question: 'Hva er autoprotolysekonstanten for vann (Kw) ved 25°C?',
      options: ['1,0 × 10⁻¹⁴', '1,0 × 10⁻⁷', '1,0 × 10⁻¹⁰', '1,0 × 10⁻²'],
      explanation: 'Ved 25°C er Kw = [H₃O⁺][OH⁻] = 1,0 × 10⁻¹⁴.',
    },
    {
      question: 'I et konjugert syre-base-par, hva er forholdet mellom styrken til syren og basen?',
      options: ['Jo sterkere syren, jo svakere den konjugerte basen', 'Jo sterkere syren, jo sterkere den konjugerte basen', 'De har alltid lik styrke', 'Det er ingen sammenheng'],
      explanation: 'Det er et omvendt forhold: en sterk syre har en svak konjugert base.',
    },
    {
      question: 'Hvilken av følgende er den konjugerte basen til H₂SO₄?',
      options: ['HSO₄⁻', 'SO₄²⁻', 'H₃SO₄⁺', 'H₂O'],
      explanation: 'Når H₂SO₄ avgir ett proton, dannes HSO₄⁻ som konjugert base.',
    },
    {
      question: 'Hva skjer i autoprotolysereaksjonen til vann?',
      options: ['Ett vannmolekyl overfører et proton til et annet vannmolekyl', 'Vann spaltes til hydrogen og oksygen', 'Vann reagerer med luftens CO₂', 'Vann ioniseres fullstendig'],
      explanation: '2H₂O ⇌ H₃O⁺ + OH⁻ er autoprotolysereaksjonen.',
    },
    {
      question: 'Hvorfor er HNO₃ en sterkere syre enn HNO₂?',
      options: ['Konjugert base NO₃⁻ er mer stabil enn NO₂⁻', 'HNO₃ har høyere molar masse', 'HNO₃ løser seg bedre i vann', 'HNO₂ er ikke en syre'],
      explanation: 'NO₃⁻ er stabilisert av resonans over flere oksygenatomer, noe som gjør HNO₃ til en sterkere syre.',
    },
    {
      question: 'Hvilken base er konjugert til H₃PO₄?',
      options: ['H₂PO₄⁻', 'HPO₄²⁻', 'PO₄³⁻', 'H₄PO₄⁺'],
      explanation: 'H₃PO₄ avgir ett proton og danner H₂PO₄⁻ som konjugert base.',
    },
    {
      question: 'Hva kjennetegner et leveling effect i vann?',
      options: ['Alle sterke syrer virker like sterke fordi de fullstendig protoniserer vann', 'Alle baser blir svake i vann', 'Vann gjør alle syrer svakere', 'pH blir alltid 7'],
      explanation: 'I vann kan ingen syre være sterkere enn H₃O⁺, så alle sterke syrer virker like sterke.',
    },
  ],

  // ============================================================================
  // Kapittel 4.2: pH-beregninger for sterke syrer og baser
  // ============================================================================
  'kjemi2-4-2': [
    {
      question: 'Hva er pH i en 0,001 M HCl-løsning?',
      options: ['3', '11', '0,001', '4'],
      explanation: 'HCl er en sterk syre: pH = -log[H₃O⁺] = -log(0,001) = 3.',
    },
    {
      question: 'Hva er pOH i en 0,01 M NaOH-løsning ved 25°C?',
      options: ['2', '12', '0,01', '7'],
      explanation: 'NaOH er en sterk base: pOH = -log[OH⁻] = -log(0,01) = 2.',
    },
    {
      question: 'Hva er pH i en 0,01 M NaOH-løsning ved 25°C?',
      options: ['12', '2', '7', '0,01'],
      explanation: 'pOH = 2, og pH + pOH = 14 ved 25°C, så pH = 14 - 2 = 12.',
    },
    {
      question: 'Hvilken konsentrasjon av H₃O⁺ gir pH = 5?',
      options: ['1,0 × 10⁻⁵ M', '1,0 × 10⁻⁹ M', '5 M', '0,5 M'],
      explanation: '[H₃O⁺] = 10^(-pH) = 10⁻⁵ = 1,0 × 10⁻⁵ M.',
    },
    {
      question: 'Hva blir pH når 100 mL 0,1 M HCl fortynnes til 1 L?',
      options: ['2', '1', '3', '0,1'],
      explanation: 'Ny konsentrasjon: 0,1 M × 0,1 L / 1 L = 0,01 M. pH = -log(0,01) = 2.',
    },
    {
      question: 'En sterk syre har pH = 2. Hvor mange ganger må den fortynnes for å få pH = 4?',
      options: ['100 ganger', '2 ganger', '10 ganger', '4 ganger'],
      explanation: 'pH øker med 2 enheter, som tilsvarer 10² = 100 gangers fortynning.',
    },
    {
      question: 'Hva er [OH⁻] i en løsning med pH = 3 ved 25°C?',
      options: ['1,0 × 10⁻¹¹ M', '1,0 × 10⁻³ M', '1,0 × 10⁻⁷ M', '1,0 × 10⁻¹¹ M'],
      explanation: 'pOH = 14 - 3 = 11, så [OH⁻] = 10⁻¹¹ M.',
    },
    {
      question: 'Ved blanding av 50 mL 0,1 M HCl og 50 mL 0,1 M NaOH, hva blir pH?',
      options: ['7', '1', '13', '0'],
      explanation: 'Like mengder sterk syre og sterk base nøytraliserer hverandre, pH = 7.',
    },
    {
      question: 'Hva er pH i en 0,05 M Ba(OH)₂-løsning?',
      options: ['13', '12', '1', '2'],
      explanation: 'Ba(OH)₂ gir 2 OH⁻ per formelenhet: [OH⁻] = 0,1 M. pOH = 1, pH = 13.',
    },
    {
      question: 'En løsning har [H₃O⁺] = 2,5 × 10⁻⁴ M. Hva er pH?',
      options: ['3,6', '4,0', '2,5', '4,4'],
      explanation: 'pH = -log(2,5 × 10⁻⁴) = -log(2,5) - log(10⁻⁴) ≈ -0,4 + 4 = 3,6.',
    },
    {
      question: 'Hva skjer med pH når temperaturen øker fra 25°C til 50°C i rent vann?',
      options: ['pH synker under 7', 'pH forblir 7', 'pH øker over 7', 'pH blir 0'],
      explanation: 'Kw øker med temperaturen, så [H₃O⁺] øker og pH synker, men løsningen er fortsatt nøytral.',
    },
    {
      question: 'Hvor mange gram NaOH (M = 40 g/mol) trengs for å lage 500 mL løsning med pH = 13?',
      options: ['2,0 g', '0,2 g', '20 g', '4,0 g'],
      explanation: 'pH = 13 gir [OH⁻] = 0,1 M. n = 0,1 M × 0,5 L = 0,05 mol. m = 0,05 × 40 = 2,0 g.',
    },
  ],

  // ============================================================================
  // Kapittel 4.3: Svake syrer og baser (Ka, Kb, pKa)
  // ============================================================================
  'kjemi2-4-3': [
    {
      question: 'Hva uttrykker syrekonstanten Ka?',
      options: ['Graden av dissosiasjon for en svak syre', 'Konsentrasjonen av syre', 'Totalt antall mol syre', 'Løseligheten til syren'],
      explanation: 'Ka = [H₃O⁺][A⁻]/[HA] og viser hvor mye syren dissosierer.',
    },
    {
      question: 'Eddiksyre (CH₃COOH) har Ka = 1,8 × 10⁻⁵. Hva er pKa?',
      options: ['4,7', '5,0', '1,8', '9,3'],
      explanation: 'pKa = -log(Ka) = -log(1,8 × 10⁻⁵) ≈ 4,7.',
    },
    {
      question: 'Hvilken sammenheng gjelder mellom Ka og Kb for et konjugert syre-base-par?',
      options: ['Ka × Kb = Kw', 'Ka + Kb = Kw', 'Ka = Kb', 'Ka / Kb = Kw'],
      explanation: 'For et konjugert par er Ka × Kb = Kw = 10⁻¹⁴ ved 25°C.',
    },
    {
      question: 'En svak syre har pKa = 3. Hva er Ka?',
      options: ['1,0 × 10⁻³', '3', '1,0 × 10⁻¹¹', '0,001'],
      explanation: 'Ka = 10^(-pKa) = 10⁻³ = 1,0 × 10⁻³.',
    },
    {
      question: 'Hvilken syre er sterkest? (lavest pKa)',
      options: ['HF (pKa = 3,2)', 'CH₃COOH (pKa = 4,7)', 'HCN (pKa = 9,2)', 'H₂CO₃ (pKa = 6,4)'],
      explanation: 'Lavere pKa betyr høyere Ka og sterkere syre. HF har lavest pKa.',
    },
    {
      question: 'I en 0,1 M løsning av en svak syre med Ka = 10⁻⁵, hva er tilnærmet [H₃O⁺]?',
      options: ['1,0 × 10⁻³ M', '1,0 × 10⁻⁵ M', '0,1 M', '1,0 × 10⁻⁶ M'],
      explanation: '[H₃O⁺] ≈ √(Ka × C) = √(10⁻⁵ × 0,1) = √(10⁻⁶) = 10⁻³ M.',
    },
    {
      question: 'Hva er pH i en 0,1 M eddiksyreløsning? (Ka = 1,8 × 10⁻⁵)',
      options: ['2,9', '1,0', '4,7', '7,0'],
      explanation: '[H₃O⁺] ≈ √(1,8 × 10⁻⁵ × 0,1) ≈ 1,3 × 10⁻³. pH ≈ 2,9.',
    },
    {
      question: 'Ammoniakk (NH₃) har Kb = 1,8 × 10⁻⁵. Hva er Ka for NH₄⁺?',
      options: ['5,6 × 10⁻¹⁰', '1,8 × 10⁻⁵', '1,8 × 10⁻⁹', '1,0 × 10⁻⁷'],
      explanation: 'Ka = Kw/Kb = 10⁻¹⁴/1,8 × 10⁻⁵ = 5,6 × 10⁻¹⁰.',
    },
    {
      question: 'Hva er dissosiasjonesgraden (α) for en svak syre?',
      options: ['Andelen av syremolekyler som har dissosiiert', 'Antall H⁺-ioner i løsningen', 'Konsentrasjonen av udissosiiert syre', 'Molarmassen til syren'],
      explanation: 'α = [A⁻]/C₀ der C₀ er startkonsentrasjonen.',
    },
    {
      question: 'Hvordan påvirker fortynning dissosiasjonesgraden til en svak syre?',
      options: ['Dissosiasjonesgraden øker', 'Dissosiasjonesgraden synker', 'Dissosiasjonesgraden er uendret', 'Syren blir sterkere'],
      explanation: 'Ved fortynning forskyves likevekten mot høyre (Le Chateliers prinsipp), så α øker.',
    },
    {
      question: 'Maursyre (HCOOH) har Ka = 1,8 × 10⁻⁴. Sammenlign med eddiksyre (Ka = 1,8 × 10⁻⁵).',
      options: ['Maursyre er 10 ganger sterkere enn eddiksyre', 'Eddiksyre er sterkere enn maursyre', 'De er like sterke', 'Man kan ikke sammenligne'],
      explanation: 'Ka for maursyre er 10 ganger større, så den er 10 ganger sterkere syre.',
    },
    {
      question: 'Beregn pH i en 0,2 M NH₃-løsning (Kb = 1,8 × 10⁻⁵).',
      options: ['11,3', '2,7', '7,0', '9,3'],
      explanation: '[OH⁻] ≈ √(1,8 × 10⁻⁵ × 0,2) ≈ 1,9 × 10⁻³. pOH ≈ 2,7, pH ≈ 11,3.',
    },
  ],

  // ============================================================================
  // Kapittel 4.4: Buffere og bufferkapasitet
  // ============================================================================
  'kjemi2-4-4': [
    {
      question: 'Hva er en buffer?',
      options: ['En løsning som motvirker pH-endringer ved tilsats av syre eller base', 'En løsning med pH = 7', 'En sterk syre', 'En nøytraliseringsreaksjon'],
      explanation: 'En buffer inneholder en svak syre og dens konjugerte base, og holder pH relativt konstant.',
    },
    {
      question: 'Hvilke komponenter utgjør en acetatbuffer?',
      options: ['CH₃COOH og CH₃COO⁻', 'HCl og NaCl', 'NaOH og NaCl', 'H₂CO₃ og CO₂'],
      explanation: 'En acetatbuffer består av eddiksyre (svak syre) og acetat (konjugert base).',
    },
    {
      question: 'Henderson-Hasselbalch-ligningen er pH = pKa + log([A⁻]/[HA]). Hva er pH når [A⁻] = [HA]?',
      options: ['pH = pKa', 'pH = 7', 'pH = 0', 'pH = 14'],
      explanation: 'Når [A⁻] = [HA], er log(1) = 0, så pH = pKa.',
    },
    {
      question: 'En buffer har pKa = 4,7. Hva er pH når [A⁻]/[HA] = 10?',
      options: ['5,7', '4,7', '3,7', '6,7'],
      explanation: 'pH = 4,7 + log(10) = 4,7 + 1 = 5,7.',
    },
    {
      question: 'Hva skjer når syre tilsettes en buffer?',
      options: ['H⁺ reagerer med basen A⁻ og danner HA', 'pH synker dramatisk', 'Bufferen ødelegges umiddelbart', 'H⁺ reagerer med HA'],
      explanation: 'Den konjugerte basen (A⁻) nøytraliserer den tilsatte syren: A⁻ + H⁺ → HA.',
    },
    {
      question: 'Hva menes med bufferkapasitet?',
      options: ['Mengden syre eller base bufferen kan nøytralisere før pH endres betydelig', 'pH-verdien til bufferen', 'pKa til syren i bufferen', 'Volumet av bufferen'],
      explanation: 'Bufferkapasiteten avhenger av konsentrasjonene av syren og basen i bufferen.',
    },
    {
      question: 'Når er bufferkapasiteten høyest?',
      options: ['Når [A⁻] = [HA] og konsentrasjonene er høye', 'Når pH = 7', 'Når løsningen er fortynnet', 'Når bufferen er kald'],
      explanation: 'Kapasiteten er størst ved pH = pKa og øker med totalkonsentrasjonen.',
    },
    {
      question: 'Blodets pH holdes rundt 7,4 av en buffer. Hvilken buffer er dette?',
      options: ['Hydrogenkarbonat/karbonsyre (HCO₃⁻/H₂CO₃)', 'Acetat/eddiksyre', 'Fosfat/fosforsyre', 'Ammoniakk/ammonium'],
      explanation: 'Hydrogenkarbonatbufferen er den viktigste pH-regulatoren i blodet.',
    },
    {
      question: 'Hva skjer med pH i en acetatbuffer (pKa = 4,7) hvis forholdet [CH₃COO⁻]/[CH₃COOH] = 0,1?',
      options: ['pH = 3,7', 'pH = 4,7', 'pH = 5,7', 'pH = 7,0'],
      explanation: 'pH = 4,7 + log(0,1) = 4,7 - 1 = 3,7.',
    },
    {
      question: 'Hvilken buffer vil være mest effektiv ved pH ≈ 9?',
      options: ['NH₄⁺/NH₃ (pKa ≈ 9,3)', 'CH₃COOH/CH₃COO⁻ (pKa ≈ 4,7)', 'H₂CO₃/HCO₃⁻ (pKa ≈ 6,4)', 'HF/F⁻ (pKa ≈ 3,2)'],
      explanation: 'En buffer er mest effektiv når pH ≈ pKa. NH₄⁺/NH₃ har pKa nærmest 9.',
    },
    {
      question: 'En buffer lages ved å blande 0,1 mol CH₃COOH og 0,2 mol CH₃COONa i 1 L. Hva er pH? (pKa = 4,7)',
      options: ['5,0', '4,7', '4,4', '5,3'],
      explanation: 'pH = 4,7 + log(0,2/0,1) = 4,7 + log(2) = 4,7 + 0,3 = 5,0.',
    },
    {
      question: 'Hvorfor fungerer ikke en blanding av HCl og NaCl som buffer?',
      options: ['HCl er en sterk syre som dissosierer fullstendig', 'NaCl er ikke et salt', 'Cl⁻ er ikke en base', 'Blandingen har feil pH'],
      explanation: 'En buffer krever en svak syre/base. HCl er sterk og har ingen bufferkapasitet.',
    },
  ],

  // ============================================================================
  // Kapittel 4.5: Titrering og titreringskurver
  // ============================================================================
  'kjemi2-4-5': [
    {
      question: 'Hva er ekvivalenspunktet i en titrering?',
      options: ['Punktet der syre og base har reagert i støkiometrisk forhold', 'Punktet der pH = 7', 'Startpunktet for titreringen', 'Punktet der indikatoren skifter farge'],
      explanation: 'Ved ekvivalenspunktet er n(H⁺) = n(OH⁻) for enprotiske syrer/baser.',
    },
    {
      question: 'Hva er pH ved ekvivalenspunktet for titrering av sterk syre med sterk base?',
      options: ['7', 'Under 7', 'Over 7', 'Avhenger av konsentrasjonen'],
      explanation: 'Produktet er salt + vann, som gir nøytral løsning med pH = 7.',
    },
    {
      question: 'Hva er pH ved ekvivalenspunktet for titrering av svak syre med sterk base?',
      options: ['Over 7', 'Lik 7', 'Under 7', 'Alltid 14'],
      explanation: 'Den konjugerte basen (A⁻) gir basisk løsning, så pH > 7.',
    },
    {
      question: 'Hvilken indikator passer best for titrering av eddiksyre med NaOH?',
      options: ['Fenolftalein (omslag 8-10)', 'Metyloransje (omslag 3-4)', 'Bromtymolblått (omslag 6-8)', 'Metylrødt (omslag 4-6)'],
      explanation: 'Ekvivalenspunktet er basisk (pH > 7), så fenolftalein med omslag ved pH 8-10 passer.',
    },
    {
      question: 'I titreringskurven for en svak syre, hva er spesielt med punktet ved halvtitrering?',
      options: ['pH = pKa', 'pH = 7', 'pH = 0', 'Ingen buffer'],
      explanation: 'Ved halvtitrering er [HA] = [A⁻], så pH = pKa ifølge Henderson-Hasselbalch.',
    },
    {
      question: '25 mL 0,1 M HCl titreres med 0,1 M NaOH. Hvilket volum NaOH trengs til ekvivalenspunktet?',
      options: ['25 mL', '50 mL', '12,5 mL', '100 mL'],
      explanation: 'n(HCl) = 0,1 × 0,025 = 0,0025 mol. V(NaOH) = 0,0025/0,1 = 0,025 L = 25 mL.',
    },
    {
      question: 'Hva karakteriserer bufferområdet i en titreringskurve?',
      options: ['Relativt flat kurve der pH endres lite', 'Bratt stigning i pH', 'pH = 7', 'Startpunktet'],
      explanation: 'I bufferområdet motvirker svak syre og konjugert base pH-endringer.',
    },
    {
      question: 'Ved titrering av H₂SO₄ med NaOH, hvor mange mol NaOH trengs per mol H₂SO₄?',
      options: ['2 mol', '1 mol', '0,5 mol', '4 mol'],
      explanation: 'H₂SO₄ er toprotisk: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.',
    },
    {
      question: 'Hva er en indikators omslagsintervall?',
      options: ['pH-området der indikatoren skifter farge', 'Konsentrasjonen av indikatoren', 'Tiden det tar å skifte farge', 'Volumet indikator som brukes'],
      explanation: 'Indikatorer skifter farge over et pH-område, typisk ±1 pH-enhet rundt pKa.',
    },
    {
      question: 'Hva viser en bratt stigning i titreringskurven?',
      options: ['Området nær ekvivalenspunktet', 'Bufferområdet', 'Overskudd av titrant', 'Startkonsentrasjonen'],
      explanation: 'Nær ekvivalenspunktet gir små tilsatser store pH-endringer.',
    },
    {
      question: '50 mL 0,1 M CH₃COOH titreres med 0,1 M NaOH. Hva er pH etter tilsats av 25 mL NaOH? (pKa = 4,7)',
      options: ['4,7', '7,0', '2,9', '8,9'],
      explanation: 'Ved halvtitrering er [CH₃COOH] = [CH₃COO⁻], så pH = pKa = 4,7.',
    },
    {
      question: 'Hvorfor er fenolftalein uegnet for titrering av svak base med sterk syre?',
      options: ['Ekvivalenspunktet er surt (pH < 7), utenfor fenolftaleins omslagsintervall', 'Fenolftalein reagerer med syren', 'Fenolftalein er giftig', 'Fargen er usynlig'],
      explanation: 'Fenolftalein skifter farge ved pH 8-10, mens ekvivalenspunktet er ved pH < 7.',
    },
  ],

  // ============================================================================
  // KJEMI 2 - Kapittel 5: Løselighet
  // ============================================================================

  // ============================================================================
  // Kapittel 5.1: Løselighetsprodukt (Ksp)
  // ============================================================================
  'kjemi2-5-1': [
    {
      question: 'Hva er løselighetsproduktet (Ksp)?',
      options: ['Likevektskonstanten for oppløsning av et tungtløselig salt', 'Produktet av alle ionene i en løsning', 'Konsentrasjonen av et mettet salt', 'Mengden salt som kan løses per liter'],
      explanation: 'Ksp er likevektskonstanten for likevekten mellom et fast stoff og dets ioner i en mettet løsning.',
    },
    {
      question: 'For saltet AgCl, hva er uttrykket for Ksp?',
      options: ['Ksp = [Ag⁺][Cl⁻]', 'Ksp = [Ag⁺] + [Cl⁻]', 'Ksp = [Ag⁺]/[Cl⁻]', 'Ksp = [AgCl]'],
      explanation: 'Ksp er produktet av ionekonsentrasjonene opphøyd i sine støkiometriske koeffisienter.',
    },
    {
      question: 'For saltet Ca₃(PO₄)₂, hva er uttrykket for Ksp?',
      options: ['Ksp = [Ca²⁺]³[PO₄³⁻]²', 'Ksp = [Ca²⁺][PO₄³⁻]', 'Ksp = 3[Ca²⁺] + 2[PO₄³⁻]', 'Ksp = [Ca²⁺]²[PO₄³⁻]³'],
      explanation: 'Koeffisientene i den balanserte ligningen blir eksponenter: Ca₃(PO₄)₂ → 3Ca²⁺ + 2PO₄³⁻.',
    },
    {
      question: 'Ksp for AgCl er 1,8 × 10⁻¹⁰. Hva er løseligheten av AgCl i rent vann?',
      options: ['1,3 × 10⁻⁵ mol/L', '1,8 × 10⁻¹⁰ mol/L', '1,8 × 10⁻⁵ mol/L', '9,0 × 10⁻⁶ mol/L'],
      explanation: 'Løselighet s = √Ksp = √(1,8 × 10⁻¹⁰) ≈ 1,3 × 10⁻⁵ mol/L.',
    },
    {
      question: 'Hvorfor er løseligheten av AgCl lavere i en 0,1 M NaCl-løsning enn i rent vann?',
      options: ['På grunn av fellesioneffekten', 'Fordi temperaturen er lavere', 'Fordi NaCl er en base', 'Fordi AgCl er mer løselig i saltløsninger'],
      explanation: 'Fellesioneffekten: Cl⁻ fra NaCl forskyver likevekten til venstre og reduserer løseligheten.',
    },
    {
      question: 'Hva skjer med løseligheten av BaSO₄ i en løsning som inneholder Na₂SO₄?',
      options: ['Løseligheten avtar', 'Løseligheten øker', 'Løseligheten forblir uendret', 'BaSO₄ løses fullstendig'],
      explanation: 'SO₄²⁻-ionene fra Na₂SO₄ gir fellesioneffekt som reduserer løseligheten av BaSO₄.',
    },
    {
      question: 'Ksp for PbCl₂ er 1,7 × 10⁻⁵. Hva er løseligheten i mol/L?',
      options: ['1,6 × 10⁻² mol/L', '1,7 × 10⁻⁵ mol/L', '4,1 × 10⁻³ mol/L', '2,6 × 10⁻² mol/L'],
      explanation: 'PbCl₂ → Pb²⁺ + 2Cl⁻. Ksp = s × (2s)² = 4s³. s = ∛(Ksp/4) ≈ 1,6 × 10⁻² mol/L.',
    },
    {
      question: 'Hvordan påvirker temperatur vanligvis Ksp for de fleste salter?',
      options: ['Ksp øker med økende temperatur', 'Ksp avtar med økende temperatur', 'Ksp er uavhengig av temperatur', 'Temperaturen påvirker bare løseligheten, ikke Ksp'],
      explanation: 'For de fleste salter er oppløsning endoterm, så Ksp øker med temperaturen.',
    },
    {
      question: 'Ioneproduktet Q for en løsning er større enn Ksp. Hva skjer?',
      options: ['Det felles ut et bunnfall', 'Mer salt løses opp', 'Løsningen er mettet', 'Ingenting skjer'],
      explanation: 'Når Q > Ksp er løsningen overmettet og overskudd felles ut som bunnfall.',
    },
    {
      question: 'Hva er sammenhengen mellom Ksp og løselighet?',
      options: ['Lavere Ksp betyr lavere løselighet for salter med samme ioneforhold', 'Høyere Ksp betyr alltid lavere løselighet', 'Ksp og løselighet er det samme', 'Det er ingen sammenheng'],
      explanation: 'For salter med samme støkiometri gir lavere Ksp lavere løselighet, men sammenligning av salter med ulik støkiometri krever beregning.',
    },
    {
      question: 'Hvilken av følgende har høyest løselighet i rent vann? (Ksp: AgBr = 5×10⁻¹³, AgI = 8×10⁻¹⁷, AgCl = 1,8×10⁻¹⁰)',
      options: ['AgCl', 'AgBr', 'AgI', 'Alle har lik løselighet'],
      explanation: 'For 1:1-salter gir høyere Ksp høyere løselighet. AgCl har høyest Ksp.',
    },
    {
      question: 'Hva betyr det at et salt er tungtløselig?',
      options: ['Saltet har svært lav løselighet i vann', 'Saltet veier mye', 'Saltet synker til bunns', 'Saltet løser seg sakte'],
      explanation: 'Tungtløselige salter har lav Ksp og løser seg i svært små mengder.',
    },
  ],

  // ============================================================================
  // Kapittel 5.2: Fellingsforbindelser og fellingstitrering
  // ============================================================================
  'kjemi2-5-2': [
    {
      question: 'Hva er en fellingstitrering?',
      options: ['En titrering der produktet er et tungtløselig salt som felles ut', 'En titrering med syre og base', 'En titrering ved høy temperatur', 'En titrering uten indikator'],
      explanation: 'Ved fellingstitrering reagerer ionene og danner et bunnfall når ekvivalenspunktet nærmer seg.',
    },
    {
      question: 'Hvilken indikator brukes ofte ved titrering av kloridioner med sølvnitrat?',
      options: ['Kaliumkromat (Mohr-metoden)', 'Fenolftalein', 'Metyloransje', 'Bromtymolblått'],
      explanation: 'Kaliumkromat gir rødt Ag₂CrO₄ når alle Cl⁻ er felt ut som AgCl.',
    },
    {
      question: 'Ved Mohr-titrering, hvorfor felles Ag₂CrO₄ ut etter AgCl?',
      options: ['Fordi Ksp for Ag₂CrO₄ er høyere enn for AgCl', 'Fordi AgCl er tyngre', 'Fordi kromat er farget', 'Fordi klorid er mer reaktivt'],
      explanation: 'AgCl har lavere Ksp og felles derfor ut først. Når Cl⁻ er brukt opp, felles Ag₂CrO₄.',
    },
    {
      question: 'Hva er Fajans metode?',
      options: ['Fellingstitrering med adsorpsjonsindikatorer', 'Titrering ved koking', 'Titrering i mørket', 'Gravimetrisk analyse'],
      explanation: 'Fajans metode bruker indikatorer som adsorberes på bunnfallets overflate og endrer farge.',
    },
    {
      question: 'Hvilken løselighetsregel gjelder for de fleste klorider?',
      options: ['De fleste klorider er løselige, unntatt AgCl, PbCl₂ og Hg₂Cl₂', 'Alle klorider er tungtløselige', 'Alle klorider er løselige', 'Bare alkaliklorider er løselige'],
      explanation: 'Klorider er generelt løselige, men sølv-, bly- og kvikksølv(I)klorid er tungtløselige.',
    },
    {
      question: 'Hva er selektiv felling?',
      options: ['Å felle ut ett ion mens andre forblir i løsning', 'Å felle ut alle ioner samtidig', 'Å løse opp et bunnfall', 'Å filtrere en løsning'],
      explanation: 'Ved selektiv felling utnyttes forskjeller i Ksp til å separere ioner.',
    },
    {
      question: 'En løsning inneholder både Cl⁻ og I⁻. Ved tilsetning av Ag⁺, hvilket ion felles først?',
      options: ['I⁻ (fordi AgI har lavere Ksp)', 'Cl⁻ (fordi AgCl har lavere Ksp)', 'Begge felles samtidig', 'Ingen av dem felles'],
      explanation: 'AgI har lavere Ksp (8×10⁻¹⁷) enn AgCl (1,8×10⁻¹⁰), så I⁻ felles først.',
    },
    {
      question: 'Hva er gravimetrisk analyse?',
      options: ['Analyse basert på måling av masse av et bunnfall', 'Analyse basert på fargeendring', 'Analyse ved hjelp av elektrisitet', 'Analyse av gasser'],
      explanation: 'Ved gravimetri felles analytten, filtreres, tørkes og veies for å bestemme mengden.',
    },
    {
      question: 'Ved gravimetrisk bestemmelse av sulfat som BaSO₄, hvorfor tilsettes BaCl₂ i overskudd?',
      options: ['For å sikre fullstendig felling av alt sulfat', 'For å gjøre bunnfallet hvitt', 'For å løse opp sulfatet', 'For å senke pH'],
      explanation: 'Overskudd av Ba²⁺ sikrer at alt SO₄²⁻ felles ut og gir kvantitativ analyse.',
    },
    {
      question: 'Hva er en viktig feilkilde ved fellingstitrering?',
      options: ['Kopresipitasjon (adsorberte urenheter på bunnfallet)', 'For rask titrering', 'Bruk av glassutstyr', 'Romtemperatur'],
      explanation: 'Kopresipitasjon fører til at urenheter følger med bunnfallet og gir feil resultat.',
    },
    {
      question: 'Hvilken løselighetsregel gjelder for sulfater?',
      options: ['De fleste sulfater er løselige, unntatt BaSO₄, PbSO₄ og CaSO₄', 'Alle sulfater er tungtløselige', 'Alle sulfater er løselige', 'Bare natriumsulfat er løselig'],
      explanation: 'Sulfater er generelt løselige, men barium-, bly- og kalsiumsulfat har lav løselighet.',
    },
    {
      question: 'Hvorfor vaskes et bunnfall før tørking i gravimetrisk analyse?',
      options: ['For å fjerne adsorberte ioner og urenheter', 'For å øke massen', 'For å endre fargen', 'For å løse opp bunnfallet'],
      explanation: 'Vasking fjerner løselige urenheter som ellers ville påvirke massen.',
    },
  ],

  // ============================================================================
  // Kapittel 5.3: Ionestyrke og aktivitet
  // ============================================================================
  'kjemi2-5-3': [
    {
      question: 'Hva er ionestyrke (I)?',
      options: ['Et mål på den totale ionekonsentrasjonen i en løsning, vektet etter ladning', 'Styrken til en enkelt iontype', 'pH i løsningen', 'Konsentrasjonen av H⁺-ioner'],
      explanation: 'Ionestyrke I = ½ × Σ(cᵢzᵢ²), der cᵢ er konsentrasjon og zᵢ er ladning.',
    },
    {
      question: 'Hvordan beregnes ionestyrken for en 0,1 M NaCl-løsning?',
      options: ['I = 0,1 M', 'I = 0,2 M', 'I = 0,05 M', 'I = 0,01 M'],
      explanation: 'I = ½ × ([Na⁺]×1² + [Cl⁻]×1²) = ½ × (0,1 + 0,1) = 0,1 M.',
    },
    {
      question: 'Hva er ionestyrken for en 0,1 M MgCl₂-løsning?',
      options: ['I = 0,3 M', 'I = 0,1 M', 'I = 0,2 M', 'I = 0,6 M'],
      explanation: 'MgCl₂ gir 0,1 M Mg²⁺ og 0,2 M Cl⁻. I = ½ × (0,1×4 + 0,2×1) = ½ × 0,6 = 0,3 M.',
    },
    {
      question: 'Hva er aktivitet (a)?',
      options: ['Den effektive konsentrasjonen av et ion i løsning', 'Den totale konsentrasjonen', 'Reaksjonshastigheten', 'Energien til ionet'],
      explanation: 'Aktivitet tar hensyn til interaksjoner mellom ioner og er lavere enn konsentrasjonen.',
    },
    {
      question: 'Hva er sammenhengen mellom aktivitet og konsentrasjon?',
      options: ['a = γ × c, der γ er aktivitetskoeffisienten', 'a = c²', 'a = c/γ', 'a = c + γ'],
      explanation: 'Aktivitet er produktet av konsentrasjon og aktivitetskoeffisient.',
    },
    {
      question: 'Hvordan påvirker økende ionestyrke aktivitetskoeffisienten?',
      options: ['Aktivitetskoeffisienten synker', 'Aktivitetskoeffisienten øker', 'Aktivitetskoeffisienten forblir uendret', 'Aktivitetskoeffisienten blir negativ'],
      explanation: 'Høyere ionestyrke gir mer ioneskjerming og lavere aktivitetskoeffisient.',
    },
    {
      question: 'I fortynnet løsning nærmer aktivitetskoeffisienten seg:',
      options: ['1', '0', '∞', 'Konsentrasjonen'],
      explanation: 'I svært fortynnet løsning er det lite ioneskjerming, så γ → 1 og a → c.',
    },
    {
      question: 'Hvordan påvirker ionestyrken løseligheten av et tungtløselig salt?',
      options: ['Høyere ionestyrke øker vanligvis løseligheten', 'Høyere ionestyrke reduserer løseligheten', 'Ionestyrken påvirker ikke løseligheten', 'Effekten avhenger av pH'],
      explanation: 'Ioneskjerming reduserer aktiviteten til ionene, slik at mer salt kan løses.',
    },
    {
      question: 'Hva er Debye-Hückel-ligningen brukt til?',
      options: ['Å beregne aktivitetskoeffisienter fra ionestyrke', 'Å beregne pH', 'Å bestemme reaksjonshastighet', 'Å måle temperatur'],
      explanation: 'Debye-Hückel-ligningen gir aktivitetskoeffisienten som funksjon av ionestyrke og ladning.',
    },
    {
      question: 'Et 2+ ion har generelt lavere aktivitetskoeffisient enn et 1+ ion ved samme ionestyrke. Hvorfor?',
      options: ['Fordi høyere ladning gir sterkere interaksjon med andre ioner', 'Fordi 2+ ioner er større', 'Fordi 2+ ioner er tyngre', 'Fordi 2+ ioner beveger seg raskere'],
      explanation: 'Ioner med høyere ladning påvirkes mer av ioneatmosfæren og har lavere γ.',
    },
    {
      question: 'Hva er den begrensende Debye-Hückel-ligningen?',
      options: ['log γ = -A × z² × √I', 'log γ = A × z × I', 'γ = 1 - I', 'γ = z²/I'],
      explanation: 'Den begrensende Debye-Hückel-ligningen gjelder for lave ionestyrker (I < 0,01 M).',
    },
    {
      question: 'Når kan vi anta at aktivitet ≈ konsentrasjon?',
      options: ['I svært fortynnet løsning med lav ionestyrke', 'I konsentrerte løsninger', 'Ved høy temperatur', 'Ved lavt trykk'],
      explanation: 'Ved lav ionestyrke nærmer γ seg 1, så aktiviteten tilsvarer konsentrasjonen.',
    },
  ],

  // ============================================================================
  // Kapittel 5.4: Kompleksdannelse og løselighet
  // ============================================================================
  'kjemi2-5-4': [
    {
      question: 'Hva er et kompleksion?',
      options: ['Et sentralion omgitt av ligander', 'Et ion med høy ladning', 'Et radioaktivt ion', 'Et ion i fast fase'],
      explanation: 'Kompleksioner består av et metallion (sentralion) bundet til ligander via koordinative bindinger.',
    },
    {
      question: 'Hva er en ligand?',
      options: ['Et molekyl eller ion som donerer elektronpar til sentralionet', 'Et positivt ladet ion', 'Et nøytralt atom', 'Et elektron'],
      explanation: 'Ligander er Lewis-baser som binder seg til sentralionet via elektronpar.',
    },
    {
      question: 'Hva er formasjonskonstanten (Kf)?',
      options: ['Likevektskonstanten for dannelse av et kompleksion', 'Det samme som Ksp', 'Hastigheten for kompleksdannelse', 'pH ved likevekt'],
      explanation: 'Kf beskriver likevekten mellom fritt metallion, ligander og kompleksionet.',
    },
    {
      question: 'Hvordan påvirker kompleksdannelse løseligheten av et tungtløselig salt?',
      options: ['Løseligheten øker når metallionet bindes i et kompleks', 'Løseligheten avtar', 'Løseligheten forblir uendret', 'Saltet felles ut raskere'],
      explanation: 'Kompleksdannelse fjerner frie metallioner, noe som forskyver løselighetslikevekten til høyre.',
    },
    {
      question: 'AgCl er tungtløselig i vann, men løser seg i ammoniakk. Hva er forklaringen?',
      options: ['Ag⁺ danner stabile komplekser med NH₃: [Ag(NH₃)₂]⁺', 'NH₃ er en sterk syre', 'AgCl reagerer med NH₃', 'NH₃ øker temperaturen'],
      explanation: 'Dannelsen av [Ag(NH₃)₂]⁺ fjerner Ag⁺ fra løsningen og driver oppløsningen av AgCl.',
    },
    {
      question: 'Hva er koordinasjonstallet til [Cu(H₂O)₆]²⁺?',
      options: ['6', '2', '4', '8'],
      explanation: 'Koordinasjonstallet er antall ligander bundet til sentralionet; her er det 6 vannmolekyler.',
    },
    {
      question: 'Hvilken av følgende er en flertannet ligand?',
      options: ['EDTA', 'H₂O', 'NH₃', 'Cl⁻'],
      explanation: 'EDTA er en heksatannet ligand som kan binde seg til metallionet via 6 donoratomer.',
    },
    {
      question: 'Hva er et chelat?',
      options: ['Et kompleks der en ligand binder seg via flere atomer', 'Et enkelt kompleks', 'Et utladet kompleks', 'En svak binding'],
      explanation: 'Chelater dannes når flertannede ligander danner ringstrukturer med sentralionet.',
    },
    {
      question: 'Hvorfor er chelateffekten viktig?',
      options: ['Chelater er mer stabile enn komplekser med enkelttannede ligander', 'Chelater er mindre stabile', 'Chelater er fargeløse', 'Chelater løser seg ikke i vann'],
      explanation: 'Chelateffekten skyldes entropigevinst når én flertannet ligand erstatter flere enkelttannede.',
    },
    {
      question: 'Ved titrering med EDTA, hva skjer ved ekvivalenspunktet?',
      options: ['Alt metallion er bundet som EDTA-kompleks', 'Metallionet felles ut', 'EDTA felles ut', 'pH endrer seg brått'],
      explanation: 'EDTA binder metallioner i 1:1-forhold, og ved ekvivalenspunktet er alt metallion kompleksbundet.',
    },
    {
      question: 'Hvorfor brukes maskeringsmidler i kompleksometrisk titrering?',
      options: ['For å forhindre at forstyrrende ioner reagerer med titranten', 'For å farge løsningen', 'For å øke temperaturen', 'For å redusere pH'],
      explanation: 'Maskeringsmidler danner komplekser med forstyrrende ioner slik at de ikke interfererer.',
    },
    {
      question: 'Fe³⁺ danner et stabilt kompleks med SCN⁻. Hva er fargen på dette komplekset?',
      options: ['Blodrød', 'Blå', 'Grønn', 'Fargeløs'],
      explanation: '[Fe(SCN)]²⁺ og lignende komplekser har karakteristisk blodrød farge.',
    },
  ],
};

/**
 * Get quiz questions for a specific chapter
 */
export function getChemistryQuizQuestions(chapterId: string): ChemistryQuizQuestion[] {
  return quizData[chapterId] || [];
}

/**
 * Get all chapter IDs that have quiz questions
 */
export function getChaptersWithQuiz(): string[] {
  return Object.keys(quizData);
}

/**
 * Check if a chapter has chemistry quiz questions
 */
export function hasChemistryQuiz(chapterId: string): boolean {
  return chapterId in quizData && quizData[chapterId].length >= 10;
}
