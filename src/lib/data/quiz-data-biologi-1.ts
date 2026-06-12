import type { QuizQuestion } from './quiz-data';

const quizData_biologi_1: Record<string, QuizQuestion[]> = {
  'biologi-1-1-1': [
    {
      question: 'Hvem brukte først ordet «celle» da han observerte korkvev i mikroskop i 1665?',
      options: ['Robert Hooke', 'Anton van Leeuwenhoek', 'Matthias Schleiden', 'Rudolf Virchow'],
      explanation: 'Robert Hooke observerte dødt korkvev i 1665 og kalte de tomme hulrommene «celler» (latin cellula = lite rom).',
    },
    {
      question: 'Hvilket prinsipp la Rudolf Virchow til celleteorien i 1855?',
      options: ['Alle celler oppstår fra eksisterende celler', 'Alle organismer består av celler', 'Cellen er livets minste enhet', 'Planter består av celler'],
      explanation: 'Virchow formulerte «Omnis cellula e cellula» – alle celler kommer fra allerede eksisterende celler gjennom celledeling.',
    },
    {
      question: 'Hva sier celleteorien IKKE?',
      options: ['Celler kan oppstå spontant fra livløst materiale', 'Alle organismer består av en eller flere celler', 'Cellen er livets minste funksjonelle enhet', 'Alle celler oppstår fra eksisterende celler'],
      explanation: 'Celleteorien avviser at celler oppstår spontant; alle celler stammer fra eksisterende celler.',
    },
    {
      question: 'Hvem var den første som observerte levende celler som bakterier?',
      options: ['Anton van Leeuwenhoek', 'Robert Hooke', 'Theodor Schwann', 'Carl von Linné'],
      explanation: 'Van Leeuwenhoek bygde bedre mikroskoper og observerte på 1670-tallet levende encellede organismer han kalte «dyreanimalcules».',
    },
    {
      question: 'Hva menes med at cellen er livets minste funksjonelle enhet?',
      options: ['Den er den minste enheten som kan utføre alle livsprosesser', 'Den er det minste molekylet i kroppen', 'Den er alltid synlig med det blotte øye', 'Den kan ikke deles videre'],
      explanation: 'Cellen er den minste enheten som selv kan utføre alle prosesser vi forbinder med liv (stoffskifte, vekst, deling).',
    },
  ],
  'biologi-1-1-2': [
    {
      question: 'Hva er hovedforskjellen mellom prokaryote og eukaryote celler?',
      options: ['Eukaryoter har en ekte, membranomsluttet kjerne; prokaryoter mangler dette', 'Prokaryoter er alltid større enn eukaryoter', 'Eukaryoter mangler DNA', 'Prokaryoter har flere organeller'],
      explanation: 'En eukaryot celle har en ekte kjerne omgitt av dobbel kjernemembran, mens prokaryotens DNA ligger fritt i et nukleoid.',
    },
    {
      question: 'Hvilke organismer er prokaryoter?',
      options: ['Bakterier og arkeer', 'Dyr og planter', 'Sopp og protister', 'Planter og alger'],
      explanation: 'Prokaryotene omfatter de to domenene bakterier og arkeer – celler uten membranomsluttet kjerne.',
    },
    {
      question: 'Hvilken type ribosomer har prokaryote celler?',
      options: ['70S', '80S', '60S', '100S'],
      explanation: 'Prokaryoter har 70S-ribosomer (50S + 30S), mens eukaryoter har større 80S-ribosomer i cytoplasma.',
    },
    {
      question: 'Hva er hovedkomponenten i bakterienes cellevegg?',
      options: ['Peptidoglykan', 'Cellulose', 'Kitin', 'Kollagen'],
      explanation: 'Bakteriers cellevegg består av peptidoglykan, mens planter har cellulose og sopp har kitin.',
    },
    {
      question: 'Hvor ligger DNA-et i en prokaryot celle?',
      options: ['Fritt i cytoplasma i et område kalt nukleoid', 'I en membranomsluttet kjerne', 'Inne i mitokondriene', 'I lysosomene'],
      explanation: 'Prokaryoter mangler kjernemembran; DNA-et (et sirkulært kromosom) ligger fritt i cytoplasma i nukleoiden.',
    },
  ],
  'biologi-1-1-3': [
    {
      question: 'Hvilken organelle kalles cellens proteinfabrikk?',
      options: ['Ribosomet', 'Golgiapparatet', 'Lysosomet', 'Mitokondriet'],
      explanation: 'Ribosomene setter sammen aminosyrer til proteiner og kalles derfor cellens proteinfabrikker.',
    },
    {
      question: 'Hva er hovedfunksjonen til cellekjernen?',
      options: ['Lagre DNA og styre cellens aktiviteter via genuttrykk', 'Produsere ATP', 'Bryte ned avfallsstoffer', 'Lage lipider'],
      explanation: 'Kjernen inneholder cellens DNA og styrer aktivitetene ved å regulere hvilke gener som transkriberes.',
    },
    {
      question: 'Hvilken organelle produserer mesteparten av cellens ATP?',
      options: ['Mitokondriet', 'Ribosomet', 'Kjernen', 'Golgiapparatet'],
      explanation: 'Mitokondriet er cellens «kraftverk» der det meste av ATP dannes gjennom celleånding.',
    },
    {
      question: 'Hva produseres i nukleolus?',
      options: ['Ribosomalt RNA (rRNA) og ribosomsubenheter', 'ATP', 'Fordøyelsesenzymer', 'Fosfolipider'],
      explanation: 'Nukleolus er et område inne i kjernen der rRNA lages og ribosomsubenheter settes sammen.',
    },
    {
      question: 'Hvilken organelle inneholder fordøyelsesenzymer som bryter ned avfall i cellen?',
      options: ['Lysosomet', 'Kloroplasten', 'Sentriolen', 'Ribosomet'],
      explanation: 'Lysosomer inneholder hydrolytiske enzymer som bryter ned skadede organeller og fremmede partikler.',
    },
  ],
  'biologi-1-1-4': [
    {
      question: 'Hva beskriver fluid mosaikk-modellen?',
      options: ['Cellemembranen som et flytende fosfolipid-dobbeltlag med innebygde proteiner', 'Cellekjernens oppbygning', 'DNA-replikasjon', 'Hvordan ribosomer lager protein'],
      explanation: 'Singer og Nicolson (1972) beskrev membranen som et flytende «hav» av fosfolipider med proteiner som en mosaikk.',
    },
    {
      question: 'Hva utgjør grunnstrukturen i cellemembranen?',
      options: ['Et dobbelt lag av fosfolipider', 'Et enkelt lag av proteiner', 'Cellulosefibre', 'Et lag av kolesterol'],
      explanation: 'Fosfolipidene danner et dobbeltlag der de hydrofobe halene vender innover og de hydrofile hodene utover.',
    },
    {
      question: 'Hva betyr «fluid» i fluid mosaikk-modellen?',
      options: ['Fosfolipidene kan bevege seg fritt sideveis i membranen', 'Membranen er laget av vann', 'Membranen er helt stiv', 'Proteinene er fastlåst'],
      explanation: '«Fluid» refererer til at lipider og mange proteiner beveger seg raskt sideveis (lateral diffusjon).',
    },
    {
      question: 'Hvilken rolle har kolesterol i cellemembranen?',
      options: ['Regulerer membranens flytenhet', 'Produserer ATP', 'Transporterer DNA', 'Bryter ned proteiner'],
      explanation: 'Kolesterol stabiliserer membranen og regulerer flytenheten ved ulike temperaturer.',
    },
    {
      question: 'Hva kjennetegner integrale membranproteiner?',
      options: ['De går gjennom hele membranen', 'De ligger bare på overflaten', 'De finnes bare i kjernen', 'De er laget av DNA'],
      explanation: 'Integrale (transmembrane) proteiner spenner gjennom hele lipidlaget, mens perifere proteiner ligger på overflaten.',
    },
  ],
  'biologi-1-1-5': [
    {
      question: 'Hva kjennetegner passiv transport?',
      options: ['Stoffer beveger seg med konsentrasjonsgradienten uten energiforbruk', 'Den krever alltid ATP', 'Den går fra lav til høy konsentrasjon', 'Den skjer bare i døde celler'],
      explanation: 'Passiv transport følger konsentrasjonsgradienten (fra høy til lav) og krever ingen energi fra cellen.',
    },
    {
      question: 'Hva er osmose?',
      options: ['Diffusjon av vann gjennom en selektivt permeabel membran', 'Aktiv transport av ioner', 'Nedbrytning av glukose', 'Transport av store proteiner'],
      explanation: 'Osmose er netto bevegelse av vann fra område med lav til høy konsentrasjon av oppløst stoff gjennom membranen.',
    },
    {
      question: 'Hva kjennetegner aktiv transport?',
      options: ['Stoffer flyttes mot konsentrasjonsgradienten ved hjelp av energi (ATP)', 'Den krever ingen energi', 'Den følger alltid konsentrasjonsgradienten', 'Den skjer bare ved diffusjon'],
      explanation: 'Aktiv transport pumper stoffer fra lav til høy konsentrasjon, noe som krever energi i form av ATP.',
    },
    {
      question: 'Hvilke molekyler passerer lettest direkte gjennom lipidlaget ved enkel diffusjon?',
      options: ['Små, upolare molekyler som O₂ og CO₂', 'Store proteiner', 'Ladde ioner som Na⁺', 'Glukose'],
      explanation: 'Små, upolare molekyler som oksygen og karbondioksid passerer lett, mens ioner og store molekyler trenger transportproteiner.',
    },
    {
      question: 'Hva er eksocytose?',
      options: ['Transport av stoff UT av cellen ved at vesikler smelter sammen med membranen', 'Opptak av stoff inn i cellen', 'Diffusjon av vann', 'Nedbrytning av ATP'],
      explanation: 'Ved eksocytose smelter en vesikkel sammen med cellemembranen og frigjør innholdet utenfor cellen.',
    },
  ],
  'biologi-1-1-6': [
    {
      question: 'Hva er de tre vanlige trinnene i cellekommunikasjon?',
      options: ['Signalering, mottak og respons', 'Mitose, meiose og cytokinese', 'Diffusjon, osmose og filtrering', 'Transkripsjon, translasjon og replikasjon'],
      explanation: 'Cellesignalering følger tre trinn: en celle sender et signal (ligand), målcellen mottar det via en reseptor, og cellen gir en respons.',
    },
    {
      question: 'Hva kalles et signalmolekyl som binder til en reseptor?',
      options: ['Ligand', 'Enzym', 'Substrat', 'Antigen'],
      explanation: 'Et signalmolekyl som binder spesifikt til en reseptor på målcellen kalles en ligand.',
    },
    {
      question: 'Hva kjennetegner endokrin signalering?',
      options: ['Hormoner fraktes med blodet til fjerne målceller', 'Signalet virker bare på cellen selv', 'Signalet går via direkte celle-celle-kontakt', 'Signalet sendes som elektriske impulser'],
      explanation: 'Ved endokrin signalering skiller en kjertel ut hormoner som transporteres med blodet til fjerne målceller.',
    },
    {
      question: 'Hva er parakrin signalering?',
      options: ['Signalmolekyler virker på naboceller i nærheten', 'Hormoner fraktes med blodet over lange avstander', 'Cellen sender signal til seg selv', 'Signalet går gjennom nervetråder'],
      explanation: 'Ved parakrin signalering virker signalmolekylene lokalt på naboceller uten å gå via blodet.',
    },
    {
      question: 'Hvorfor påvirker et hormon bare bestemte celler?',
      options: ['Bare celler med riktig reseptor kan motta signalet', 'Hormonet ser ut til å velge celler tilfeldig', 'Bare store celler reagerer', 'Bare celler i nærheten reagerer'],
      explanation: 'En celle reagerer bare hvis den har den spesifikke reseptoren som passer hormonet (nøkkel-lås-prinsippet).',
    },
  ],
  'biologi-1-2-1': [
    {
      question: 'Hva kalles ATP ofte i cellen?',
      options: ['Cellens energivaluta', 'Cellens byggestein', 'Cellens arvestoff', 'Cellens avfallsstoff'],
      explanation: 'ATP (adenosintrifosfat) er det universelle energibærende molekylet som kobler energifrigjørende og energikrevende reaksjoner.',
    },
    {
      question: 'Hva er katabolisme?',
      options: ['Nedbrytningsreaksjoner som frigjør energi', 'Oppbyggingsreaksjoner som krever energi', 'Transport av stoffer over membranen', 'Kopiering av DNA'],
      explanation: 'Katabolisme omfatter nedbrytningsreaksjoner som frigjør energi, mens anabolisme er oppbygging som krever energi.',
    },
    {
      question: 'Hva skjer når ATP spalter av den ytterste fosfatgruppen?',
      options: ['Energi frigjøres og ADP dannes', 'Cellen lager nytt DNA', 'Glukose dannes', 'Oksygen frigjøres'],
      explanation: 'Spaltning av ATP til ADP + fosfat frigjør energi (ca. 30,5 kJ/mol) som cellen kan bruke.',
    },
    {
      question: 'Hvilke tre komponenter består ATP-molekylet av?',
      options: ['Adenin, ribose og tre fosfatgrupper', 'Glukose, fett og protein', 'Tymin, deoksyribose og fosfat', 'Aminosyrer og nitrogen'],
      explanation: 'ATP består av nitrogenbasen adenin, sukkeret ribose og en kjede av tre fosfatgrupper.',
    },
    {
      question: 'Hva sier termodynamikkens andre lov om energiomdanninger i celler?',
      options: ['Noe energi går alltid tapt som varme, og entropien øker', 'Energi kan skapes fra ingenting', 'All energi bevares som kjemisk energi', 'Entropien minker ved hver omdanning'],
      explanation: 'Ved hver energiomdanning går noe energi tapt som varme, og uorden (entropi) øker – termodynamikkens andre lov.',
    },
  ],
  'biologi-1-2-2': [
    {
      question: 'Hvor i cellen foregår glykolysen?',
      options: ['I cytoplasma (cytosol)', 'I mitokondriematrisen', 'I kjernen', 'På tylakoidmembranen'],
      explanation: 'Glykolysen foregår i cytoplasma og krever ikke oksygen.',
    },
    {
      question: 'Hva er sluttproduktet av glykolysen fra ett glukosemolekyl?',
      options: ['To pyruvatmolekyler', 'Ett molekyl CO₂', 'To glukosemolekyler', 'Ett molekyl laktat'],
      explanation: 'Glykolysen bryter ned ett glukosemolekyl (6 karbon) til to pyruvatmolekyler (3 karbon hver).',
    },
    {
      question: 'Hvor mye ATP gir glykolysen netto per glukosemolekyl?',
      options: ['2 ATP', '4 ATP', '6 ATP', '36 ATP'],
      explanation: 'Glykolysen produserer 4 ATP, men forbruker 2 i energiinvesteringsfasen, så nettoutbyttet er 2 ATP.',
    },
    {
      question: 'Hvor mye NADH dannes netto i glykolysen per glukose?',
      options: ['2 NADH', '0 NADH', '4 NADH', '6 NADH'],
      explanation: 'Glykolysen gir et nettoutbytte på 2 NADH som senere kan brukes i elektrontransportkjeden.',
    },
    {
      question: 'Hvorfor er glykolysen viktig for organismer uten oksygen?',
      options: ['Den krever ikke oksygen og kan gi ATP anaerobt', 'Den lager oksygen', 'Den foregår bare i mitokondriene', 'Den krever sollys'],
      explanation: 'Glykolysen kan foregå uten oksygen, og er derfor det første trinnet i både aerob og anaerob energiomsetning.',
    },
  ],
  'biologi-1-2-3': [
    {
      question: 'Hvor i cellen foregår sitronsyresyklusen?',
      options: ['I mitokondriematrisen', 'I cytoplasma', 'På den indre mitokondriemembranen', 'I kjernen'],
      explanation: 'Sitronsyresyklusen foregår i mitokondriematrisen, mens elektrontransportkjeden ligger i den indre membranen.',
    },
    {
      question: 'Hva dannes når pyruvat omdannes før det går inn i sitronsyresyklusen?',
      options: ['Acetyl-CoA', 'Glukose', 'Laktat', 'Etanol'],
      explanation: 'Pyruvat omdannes til acetyl-CoA i mitokondriematrisen, samtidig som CO₂ og NADH dannes.',
    },
    {
      question: 'Hvor sitter elektrontransportkjeden?',
      options: ['I den indre mitokondriemembranen', 'I cytoplasma', 'I kjernen', 'I ribosomene'],
      explanation: 'Elektrontransportkjeden og ATP-syntase ligger i den indre mitokondriemembranen.',
    },
    {
      question: 'Hva er den endelige elektronakseptoren i elektrontransportkjeden ved aerob respirasjon?',
      options: ['Oksygen (O₂)', 'Karbondioksid (CO₂)', 'Pyruvat', 'NAD⁺'],
      explanation: 'Oksygen tar imot elektronene til slutt og danner vann; uten oksygen stopper kjeden.',
    },
    {
      question: 'Omtrent hvor mye ATP gir fullstendig aerob nedbrytning av ett glukosemolekyl?',
      options: ['Ca. 30–32 ATP', 'Ca. 2 ATP', 'Ca. 100 ATP', 'Ca. 4 ATP'],
      explanation: 'Aerob respirasjon (glykolyse + sitronsyresyklus + elektrontransport) gir ca. 30–32 ATP per glukose.',
    },
  ],
  'biologi-1-2-4': [
    {
      question: 'Hvorfor trenger cellen gjæring når oksygen mangler?',
      options: ['For å regenerere NAD⁺ slik at glykolysen kan fortsette', 'For å lage oksygen', 'For å produsere DNA', 'For å bygge proteiner'],
      explanation: 'Gjæring reoksiderer NADH til NAD⁺ slik at glykolysen kan fortsette å lage ATP uten oksygen.',
    },
    {
      question: 'Hva dannes ved melkesyregjæring i muskelceller?',
      options: ['Laktat', 'Etanol og CO₂', 'Glukose', 'Acetyl-CoA'],
      explanation: 'Ved melkesyregjæring omdannes pyruvat til laktat, samtidig som NAD⁺ regenereres.',
    },
    {
      question: 'Hvor mye ATP gir gjæring per glukosemolekyl?',
      options: ['2 ATP', '30 ATP', '36 ATP', '4 ATP'],
      explanation: 'Gjæring gir bare de 2 ATP fra glykolysen, langt mindre enn de ca. 30–32 ATP ved aerob respirasjon.',
    },
    {
      question: 'Hva er produktene av alkoholgjæring?',
      options: ['Etanol og CO₂', 'Laktat og vann', 'Glukose og oksygen', 'Pyruvat og NADH'],
      explanation: 'Ved alkoholgjæring (f.eks. i gjærsopp) omdannes pyruvat til etanol og karbondioksid.',
    },
    {
      question: 'Hvorfor bruker røde blodceller bare glykolyse og melkesyregjæring?',
      options: ['De mangler mitokondrier', 'De har ingen cellemembran', 'De inneholder ikke DNA', 'De lever uten glukose'],
      explanation: 'Modne røde blodceller mangler mitokondrier og må derfor produsere ATP via glykolyse og gjæring.',
    },
  ],
  'biologi-1-2-5': [
    {
      question: 'Hva er totalreaksjonen for fotosyntesen?',
      options: ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O', '2H₂O → 2H₂ + O₂', 'CO₂ + H₂ → CH₄ + O₂'],
      explanation: 'Fotosyntesen binder CO₂ og vann ved hjelp av lysenergi og danner glukose og oksygen.',
    },
    {
      question: 'Hvor foregår lysreaksjonene i fotosyntesen?',
      options: ['I tylakoidmembranen', 'I stroma', 'I mitokondriene', 'I cytoplasma'],
      explanation: 'Lysreaksjonene foregår i tylakoidmembranen, mens Calvin-syklus skjer i stroma.',
    },
    {
      question: 'Hvor kommer oksygenet som planten frigjør, fra?',
      options: ['Fra spalting av vann (H₂O)', 'Fra spalting av CO₂', 'Fra glukose', 'Fra ATP'],
      explanation: 'I fotosystem II spaltes vann (2H₂O → 4H⁺ + 4e⁻ + O₂), og det er dette oksygenet som frigjøres.',
    },
    {
      question: 'Hvilke energirike molekyler dannes i lysreaksjonene og brukes i Calvin-syklusen?',
      options: ['ATP og NADPH', 'NADH og FADH₂', 'Glukose og oksygen', 'Pyruvat og CO₂'],
      explanation: 'Lysreaksjonene lager ATP og NADPH, som Calvin-syklusen bruker til å binde CO₂ i glukose.',
    },
    {
      question: 'Hvor i kloroplasten foregår Calvin-syklusen?',
      options: ['I stroma', 'I tylakoidmembranen', 'I tylakoidlumen', 'I cellekjernen'],
      explanation: 'Calvin-syklusen (mørkereaksjonene) foregår i stroma, det væskefylte rommet utenfor tylakoidene.',
    },
  ],
  'biologi-1-3-1': [
    {
      question: 'Hva er riktig rekkefølge fra minst til mest komplekst organisasjonsnivå?',
      options: ['Celle → vev → organ → organsystem → organisme', 'Organ → celle → vev → organsystem → organisme', 'Vev → celle → organ → organisme → organsystem', 'Organisme → organsystem → organ → vev → celle'],
      explanation: 'Kroppen er organisert hierarkisk: celler danner vev, vev danner organer, organer danner organsystem, og disse utgjør organismen.',
    },
    {
      question: 'Hvor mange hovedtyper vev finnes i menneskekroppen?',
      options: ['Fire', 'To', 'Seks', 'Ti'],
      explanation: 'De fire hovedtypene vev er epitelvev, bindevev, muskelvev og nervevev.',
    },
    {
      question: 'Hva er definisjonen på et organ?',
      options: ['En struktur av to eller flere vevstyper som samarbeider', 'En enkelt celletype', 'En gruppe like celler', 'Et helt organsystem'],
      explanation: 'Et organ består av flere vevstyper som samarbeider om en funksjon, for eksempel hjertet med muskel-, binde-, nerve- og epitelvev.',
    },
    {
      question: 'Hva betyr det at celler er spesialiserte?',
      options: ['De har utviklet egenskaper tilpasset bestemte oppgaver', 'De er alle helt like', 'De kan ikke dele seg', 'De mangler kjerne'],
      explanation: 'Spesialisering betyr at celletyper har utviklet særtrekk (form og struktur) tilpasset sin funksjon, som muskelcellens evne til å trekke seg sammen.',
    },
    {
      question: 'Hvilket vev dekker overflater og kler hulrom i kroppen?',
      options: ['Epitelvev', 'Muskelvev', 'Nervevev', 'Bindevev'],
      explanation: 'Epitelvev (dekkevev) dekker kroppens overflater og kler innsiden av hulrom og kjertler.',
    },
  ],
  'biologi-1-3-2': [
    {
      question: 'Hvilket enzym i spytt starter nedbrytningen av stivelse i munnen?',
      options: ['Amylase', 'Pepsin', 'Lipase', 'Trypsin'],
      explanation: 'Spyttamylase begynner nedbrytningen av stivelse til maltose allerede i munnhulen.',
    },
    {
      question: 'Hvilket enzym i magesekken starter nedbrytningen av proteiner?',
      options: ['Pepsin', 'Amylase', 'Lipase', 'Maltase'],
      explanation: 'Saltsyren aktiverer pepsinogen til pepsin, som spalter proteiner til kortere peptidkjeder.',
    },
    {
      question: 'Hva er hovedfunksjonen til saltsyren (HCl) i magesekken?',
      options: ['Drepe bakterier, aktivere pepsin og denaturere proteiner', 'Bryte ned fett', 'Nøytralisere maten', 'Produsere galle'],
      explanation: 'Saltsyra dreper mikrober, aktiverer pepsinogen til pepsin og denaturerer proteiner slik at de lettere brytes ned.',
    },
    {
      question: 'Hvor skjer det meste av næringsopptaket?',
      options: ['I tynntarmen', 'I magesekken', 'I spiserøret', 'I tykktarmen'],
      explanation: 'Tynntarmen, med sitt store overflateareal (tarmtotter/mikrovilli), er stedet der mest næring absorberes.',
    },
    {
      question: 'Hvilken funksjon har galle i fordøyelsen?',
      options: ['Emulgerer fett slik at det lettere brytes ned', 'Bryter ned stivelse', 'Nøytraliserer pepsin', 'Absorberer vitaminer direkte'],
      explanation: 'Galle fra leveren emulgerer fett til små dråper, slik at lipase får større angrepsflate.',
    },
  ],
  'biologi-1-3-3': [
    {
      question: 'Hvilket hjertekammer pumper oksygenrikt blod ut i kroppen via aorta?',
      options: ['Venstre hovedkammer (ventrikkel)', 'Høyre hovedkammer', 'Høyre forkammer', 'Venstre forkammer'],
      explanation: 'Venstre ventrikkel pumper oksygenrikt blod ut i hele kroppen via aorta, og har derfor tykkest vegg.',
    },
    {
      question: 'Hvor i hjertet starter det elektriske signalet som styrer hjerterytmen?',
      options: ['I sinusknuten (SA-knuten)', 'I AV-knuten', 'I aorta', 'I lungevenene'],
      explanation: 'Sinusknuten i høyre forkammer er hjertets naturlige pacemaker og starter hver hjerteslagsyklus.',
    },
    {
      question: 'Hvorfor har venstre hovedkammer tykkere vegg enn høyre?',
      options: ['Det må pumpe blod med høyt trykk ut til hele kroppen', 'Det tar imot blod fra lungene', 'Det er nærmest sinusknuten', 'Det pumper bare til lungene'],
      explanation: 'Venstre ventrikkel må skape høyt nok trykk til å sende blod gjennom hele kroppen, mens høyre bare pumper til lungene.',
    },
    {
      question: 'Hvilken blodåretype frakter blod bort fra hjertet?',
      options: ['Arterier', 'Vener', 'Kapillærer', 'Lymfekar'],
      explanation: 'Arterier frakter blod fra hjertet, vener fører det tilbake, og gassutveksling skjer i kapillærene.',
    },
    {
      question: 'Hvor skjer gassutvekslingen mellom blod og vev?',
      options: ['I kapillærene', 'I aorta', 'I hovedkamrene', 'I de store venene'],
      explanation: 'Kapillærene har tynne vegger som tillater utveksling av oksygen, CO₂ og næringsstoffer med vevet.',
    },
  ],
  'biologi-1-3-4': [
    {
      question: 'Hvor mange bein har det voksne menneskeskjelettet?',
      options: ['206', '300', '150', '500'],
      explanation: 'Et voksent menneskeskjelett består av 206 bein.',
    },
    {
      question: 'Hvilken funksjon har rød beinmarg?',
      options: ['Produsere blodceller (hematopoese)', 'Lagre fett', 'Produsere hormoner', 'Bryte ned bein'],
      explanation: 'Rød beinmarg i de store beina produserer røde og hvite blodceller samt blodplater.',
    },
    {
      question: 'Hva er et synovialledd?',
      options: ['Et fritt bevegelig ledd, som kne og skulder', 'Et ubevegelig ledd, som skallesømmer', 'En type muskel', 'En type bein'],
      explanation: 'Synovialledd er fritt bevegelige ledd (f.eks. kne og albue), i motsetning til de ubevegelige fibrøse leddene.',
    },
    {
      question: 'Hvilke to deler består skjelettet av?',
      options: ['Aksialskjelettet og appendikulærskjelettet', 'Over- og underskjelettet', 'Indre og ytre skjelett', 'Hardt og mykt skjelett'],
      explanation: 'Aksialskjelettet utgjør kroppens sentrale akse (kranium, ryggsøyle, brystkasse), mens appendikulærskjelettet omfatter lemmene.',
    },
    {
      question: 'Hva er hovedfunksjonen til mellomvirvelskivene i ryggsøylen?',
      options: ['Virke som støtdempere og gi fleksibilitet', 'Produsere blodceller', 'Lagre kalsium', 'Sende nervesignaler'],
      explanation: 'Mellomvirvelskivene av brusk fungerer som støtdempere og gir ryggsøylen bevegelighet.',
    },
  ],
  'biologi-1-3-5': [
    {
      question: 'Hvilket er kroppens største organ?',
      options: ['Huden', 'Leveren', 'Lungene', 'Hjertet'],
      explanation: 'Huden er kroppens største organ og dekker ca. 1,5–2 m² hos en voksen.',
    },
    {
      question: 'Hva produserer melanocyttene i overhuden?',
      options: ['Pigmentet melanin', 'Keratin', 'Svette', 'Talg'],
      explanation: 'Melanocyttene lager melanin, som gir huden farge og beskytter mot UV-stråling.',
    },
    {
      question: 'Hvilket lag av huden inneholder fettvev som isolerer mot varmetap?',
      options: ['Underhuda (subcutis)', 'Overhuda (epidermis)', 'Hornlaget', 'Læderhuda (dermis)'],
      explanation: 'Underhuda består hovedsakelig av fettvev og fungerer som isolasjon, støtdemper og energireserve.',
    },
    {
      question: 'Hvilket protein fyller cellene i hornlaget og gjør huden motstandsdyktig?',
      options: ['Keratin', 'Melanin', 'Kollagen', 'Hemoglobin'],
      explanation: 'Cellene i hornlaget fylles med keratin og dør; dette gir en sterk, beskyttende ytre barriere.',
    },
    {
      question: 'Hvordan bidrar huden til temperaturregulering?',
      options: ['Gjennom svettekjertler og regulering av blodårene', 'Ved å produsere hormoner', 'Ved å lagre glukose', 'Ved å filtrere blod'],
      explanation: 'Svettekjertlene og blodårenes utvidning/sammentrekning regulerer varmetap og holder kroppstemperaturen stabil.',
    },
  ],
  'biologi-1-4-1': [
    {
      question: 'Hva skjer i S-fasen av cellesyklus?',
      options: ['DNA-et replikeres (kopieres)', 'Cellen deler seg i to', 'Cellen vokser etter deling', 'Kromosomene trekkes fra hverandre'],
      explanation: 'I S-fasen (syntese) kopieres hele genomet, slik at hvert kromosom blir til to søsterkromatider.',
    },
    {
      question: 'Hvilke faser inngår i interfasen?',
      options: ['G1, S og G2', 'Profase, metafase og anafase', 'Mitose og cytokinese', 'G0 og M'],
      explanation: 'Interfasen består av G1 (vekst), S (DNA-replikasjon) og G2 (forberedelse til deling).',
    },
    {
      question: 'Hva kjennetegner G0-fasen?',
      options: ['Cellen har forlatt den aktive cellesyklus og deler seg ikke', 'Cellen kopierer DNA', 'Cellen deler seg raskt', 'Cellen er i metafase'],
      explanation: 'I G0-fasen er cellen ute av syklus og deler seg ikke; nerveceller og muskelceller forblir ofte permanent her.',
    },
    {
      question: 'Hva skjer under M-fasen?',
      options: ['Kjernen og cytoplasmaet deler seg (mitose og cytokinese)', 'DNA-et kopieres', 'Cellen vokser', 'Proteiner brytes ned'],
      explanation: 'M-fasen omfatter mitose (kjernedeling) og cytokinese (deling av cytoplasma).',
    },
    {
      question: 'Hvorfor er kontrollpunkter (sjekkpunkter) i cellesyklusen viktige?',
      options: ['De sikrer at DNA er korrekt kopiert før cellen deler seg', 'De stopper all celledeling permanent', 'De lager nye organeller', 'De produserer ATP'],
      explanation: 'Kontrollpunktene overvåker blant annet at DNA er korrekt replikert; svikt kan føre til mutasjoner og kreft.',
    },
  ],
  'biologi-1-4-2': [
    {
      question: 'Hva er resultatet av mitose?',
      options: ['To genetisk identiske datterceller', 'Fire genetisk ulike kjønnsceller', 'To haploide celler', 'En celle med dobbelt kromosomtall'],
      explanation: 'Mitose gir to datterceller med samme kromosomtall og identisk arvestoff som modercellen.',
    },
    {
      question: 'Hva er riktig rekkefølge på mitosens faser?',
      options: ['Profase, metafase, anafase, telofase', 'Metafase, profase, telofase, anafase', 'Anafase, telofase, profase, metafase', 'Telofase, anafase, metafase, profase'],
      explanation: 'Mitosens fire faser er profase, metafase, anafase og telofase.',
    },
    {
      question: 'Hva skjer i metafasen?',
      options: ['Kromosomene stiller seg opp på metafaseplaten', 'Søsterkromatidene trekkes fra hverandre', 'Kjernemembranen gjendannes', 'DNA-et kopieres'],
      explanation: 'I metafasen ordner kromosomene seg langs midten (metafaseplaten) før de skilles i anafasen.',
    },
    {
      question: 'Hva skjer i anafasen?',
      options: ['Søsterkromatidene skilles og trekkes mot hver sin pol', 'Kromosomene kondenserer', 'Cellen vokser', 'DNA replikeres'],
      explanation: 'I anafasen drar spindelfibrene søsterkromatidene fra hverandre mot motsatte poler.',
    },
    {
      question: 'Hva er en kinetokor?',
      options: ['En proteinstruktur på sentromeren der spindelfibre fester seg', 'En type kromosom', 'Et enzym i kjernen', 'En del av cellemembranen'],
      explanation: 'Kinetokoren er en proteinstruktur på hvert søsterkromatids sentromer som spindelfibrene fester seg til.',
    },
  ],
  'biologi-1-4-3': [
    {
      question: 'Hva er resultatet av meiose?',
      options: ['Fire genetisk ulike haploide celler', 'To genetisk identiske diploide celler', 'To haploide celler', 'En celle med dobbelt kromosomtall'],
      explanation: 'Meiose gir fire haploide kjønnsceller som er genetisk forskjellige fra hverandre og fra modercellen.',
    },
    {
      question: 'Hvor mange kromosomer har en menneskelig kjønnscelle (haploid)?',
      options: ['23', '46', '92', '22'],
      explanation: 'Kjønnsceller er haploide med n = 23 kromosomer; ved befruktning blir summen 46 (diploid).',
    },
    {
      question: 'Hva skjer ved overkrysning (crossing-over) under meiose?',
      options: ['Homologe kromosomer bytter segmenter og skaper nye allelkombinasjoner', 'Kromosomtallet dobles', 'Søsterkromatider blir identiske', 'DNA-et brytes permanent ned'],
      explanation: 'Overkrysning i profase I gjør at homologe kromosomer utveksler segmenter, noe som skaper genetisk variasjon.',
    },
    {
      question: 'I hvilken deling halveres kromosomtallet?',
      options: ['Meiose I (reduksjonsdelingen)', 'Meiose II', 'Mitose', 'Cytokinesen'],
      explanation: 'I meiose I skilles homologe kromosomer slik at kromosomtallet halveres fra diploid til haploid.',
    },
    {
      question: 'Hva menes med uavhengig assortment?',
      options: ['Homologe kromosompar orienterer seg tilfeldig i metafase I', 'Søsterkromatider deles likt', 'DNA kopieres to ganger', 'Alle kromosomer havner i samme celle'],
      explanation: 'Uavhengig assortment betyr at hvert homologt par fordeler seg tilfeldig, noe som øker den genetiske variasjonen.',
    },
  ],
  'biologi-1-4-4': [
    {
      question: 'Hva er nondisjunction?',
      options: ['Feilfordeling av kromosomer under celledeling', 'Normal separasjon av søsterkromatider', 'Kopiering av DNA', 'Dannelse av spindelfibre'],
      explanation: 'Nondisjunction er når kromosomer eller søsterkromatider ikke separeres riktig, slik at celler får feil kromosomtall.',
    },
    {
      question: 'Hva forårsaker Downs syndrom?',
      options: ['Tre kopier av kromosom 21 (trisomi 21)', 'Mangel på kromosom 21', 'En ekstra kjønnscelle', 'For lite DNA'],
      explanation: 'Downs syndrom skyldes trisomi 21 – tre kopier av kromosom 21, ofte forårsaket av nondisjunction.',
    },
    {
      question: 'Hva er en mutasjon?',
      options: ['En permanent endring i DNA-sekvensen', 'En normal celledeling', 'Et nytt protein', 'En type organelle'],
      explanation: 'En mutasjon er en varig endring i DNA, fra ett enkelt nukleotid til hele kromosomer.',
    },
    {
      question: 'Hva kjennetegner kreftceller?',
      options: ['De deler seg ukontrollert fordi reguleringen har sviktet', 'De slutter helt å dele seg', 'De mangler alltid DNA', 'De er alltid haploide'],
      explanation: 'Kreft oppstår når kontrollmekanismene for celledeling svikter, slik at cellene deler seg ukontrollert.',
    },
    {
      question: 'Hva er aneuploidi?',
      options: ['Når en celle har feil antall kromosomer', 'Når DNA kopieres korrekt', 'Når cellen har for mange organeller', 'Når to celler smelter sammen'],
      explanation: 'Aneuploidi betyr et avvikende kromosomtall, for eksempel trisomi (2n+1) eller monosomi (2n−1).',
    },
  ],
  'biologi-1-5-1': [
    {
      question: 'Hva er homeostase?',
      options: ['Kroppens evne til å opprettholde stabile indre forhold', 'Prosessen der celler deler seg', 'Nedbrytning av næringsstoffer', 'Overføring av arvestoff'],
      explanation: 'Homeostase er evnen til å holde det indre miljøet stabilt (temperatur, pH, blodsukker) tross ytre endringer.',
    },
    {
      question: 'Innenfor hvilket pH-område holdes blodet normalt?',
      options: ['7,35–7,45', '6,0–6,5', '8,0–8,5', '5,0–5,5'],
      explanation: 'Blodets pH holdes stabilt mellom 7,35 og 7,45 for at cellene skal fungere optimalt.',
    },
    {
      question: 'Hva menes med at homeostase er en dynamisk likevekt?',
      options: ['Verdiene svinger litt rundt et setpunkt hele tiden', 'Verdiene er helt konstante og uforanderlige', 'Cellene slutter å dele seg', 'Kroppen er i ro'],
      explanation: 'Homeostase er dynamisk: verdiene svinger kontinuerlig litt over og under setpunktet mens reguleringen jobber.',
    },
    {
      question: 'Ved hvilken temperatur fungerer kroppens enzymer best?',
      options: ['Ca. 37 °C', 'Ca. 25 °C', 'Ca. 45 °C', 'Ca. 10 °C'],
      explanation: 'Enzymene i kroppen fungerer optimalt ved ca. 37 °C; for høy eller lav temperatur svekker funksjonen.',
    },
    {
      question: 'Hvilken mekanisme bruker kroppen mest for å motvirke avvik fra setpunktet?',
      options: ['Negativ tilbakekobling', 'Positiv tilbakekobling', 'Diffusjon', 'Mitose'],
      explanation: 'Negativ tilbakekobling motvirker endringer og bringer verdien tilbake mot setpunktet, og er den vanligste reguleringsmekanismen.',
    },
  ],
  'biologi-1-5-2': [
    {
      question: 'Hvilke to hoveddeler består nervesystemet av?',
      options: ['Sentralnervesystemet og det perifere nervesystemet', 'Sympatisk og parasympatisk system', 'Hjernen og hjertet', 'Nervevev og muskelvev'],
      explanation: 'Nervesystemet deles i sentralnervesystemet (hjerne og ryggmarg) og det perifere nervesystemet (nervene utenfor).',
    },
    {
      question: 'Hva er de signalførende cellene i nervesystemet?',
      options: ['Nevroner', 'Gliaceller', 'Erytrocytter', 'Osteoblaster'],
      explanation: 'Nevroner er de signalførende cellene, mens gliaceller er støtteceller som beskytter og nærer nevronene.',
    },
    {
      question: 'Hva styrer det autonome nervesystemet?',
      options: ['Ufrivillige funksjoner som hjerteslag og fordøyelse', 'Bare viljestyrte bevegelser', 'Bare tankevirksomhet', 'Produksjon av blodceller'],
      explanation: 'Det autonome nervesystemet styrer ufrivillige funksjoner og deles i sympatisk («kamp/flukt») og parasympatisk («hvile/fordøy»).',
    },
    {
      question: 'Hvilken funksjon har myelinskjeden rundt en nervetråd?',
      options: ['Den isolerer og gjør signaloverføringen raskere', 'Den produserer hormoner', 'Den bryter ned signalstoffer', 'Den lager nye nevroner'],
      explanation: 'Myelinskjeden isolerer aksonet og gjør at nervesignalet ledes raskere langs nervetråden.',
    },
    {
      question: 'Hva skjer ved sykdommen multippel sklerose (MS)?',
      options: ['Immunforsvaret angriper myelinskjeden', 'Hjertet slutter å slå', 'Blodet blir for surt', 'Musklene vokser ukontrollert'],
      explanation: 'Ved MS angriper immunforsvaret myelinskjeden, slik at nervesignalene forstyrres.',
    },
  ],
  'biologi-1-5-3': [
    {
      question: 'Hvordan transporteres hormoner til målcellene?',
      options: ['Med blodet', 'Langs nervetråder', 'Gjennom lymfeknuter direkte', 'Med fordøyelseskanalen'],
      explanation: 'Hormoner skilles ut i blodet og fraktes med blodbanen til celler som har riktig reseptor.',
    },
    {
      question: 'Hvordan er hormonsystemet sammenlignet med nervesystemet?',
      options: ['Det er langsommere, men gir mer langvarige effekter', 'Det er raskere og mer kortvarig', 'Det bruker elektriske signaler', 'Det virker bare på naboceller'],
      explanation: 'Hormonsystemet sender langsomme kjemiske signaler med langvarig effekt, mens nervesystemet sender raske, kortvarige signaler.',
    },
    {
      question: 'Hvilket prinsipp ligger til grunn for at et hormon bare virker på bestemte celler?',
      options: ['Nøkkel-og-lås-prinsippet mellom hormon og reseptor', 'Tilfeldig binding', 'Hormonets størrelse alene', 'Cellens farge'],
      explanation: 'Et hormon (nøkkel) passer bare til sin spesifikke reseptor (lås); bare celler med riktig reseptor reagerer.',
    },
    {
      question: 'Hva betyr nedregulering av reseptorer?',
      options: ['Cellen reduserer antall reseptorer', 'Cellen øker antall reseptorer', 'Hormonet brytes ned raskere', 'Hormonproduksjonen stopper'],
      explanation: 'Nedregulering betyr at cellen reduserer antallet reseptorer, slik at den blir mindre følsom for hormonet.',
    },
    {
      question: 'Hva kjennetegner hormonkonsentrasjonen i blodet?',
      options: ['Den er svært lav, men effekten kan likevel være stor', 'Den er alltid svært høy', 'Den er konstant gjennom hele livet', 'Den er lik for alle hormoner'],
      explanation: 'Hormonkonsentrasjonen er typisk svært lav (nano- eller pikomolar), men signalet forsterkes i flere trinn inne i cellen.',
    },
  ],
  'biologi-1-5-4': [
    {
      question: 'Hvilket organ fungerer som kroppens termostat?',
      options: ['Hypothalamus', 'Bukspyttkjertelen', 'Leveren', 'Nyrene'],
      explanation: 'Hypothalamus i hjernen er kroppens termostat og setter i gang tiltak for å øke eller redusere varme.',
    },
    {
      question: 'Hvilket hormon senker blodsukkeret?',
      options: ['Insulin', 'Glukagon', 'Adrenalin', 'Testosteron'],
      explanation: 'Insulin fra bukspyttkjertelen senker blodsukkeret ved å fremme opptak og lagring av glukose.',
    },
    {
      question: 'Hvilket hormon øker blodsukkeret når det er lavt?',
      options: ['Glukagon', 'Insulin', 'Melatonin', 'Østrogen'],
      explanation: 'Glukagon fra bukspyttkjertelen øker blodsukkeret ved å frigjøre glukose fra glykogenlageret i leveren.',
    },
    {
      question: 'Hva skjer i kroppen når den blir for kald?',
      options: ['Skjelving og sammentrekning av blodårene i huden', 'Økt svetting', 'Utvidelse av blodårene i huden', 'Senket stoffskifte'],
      explanation: 'Ved kulde skjelver musklene for å lage varme, og blodårene i huden trekker seg sammen for å redusere varmetap.',
    },
    {
      question: 'Hvordan skiller feber seg fra hypertermi?',
      options: ['Ved feber er setpunktet i hypothalamus hevet', 'Feber skyldes for lite væske', 'Hypertermi gir alltid lavere temperatur', 'Feber gir ingen temperaturøkning'],
      explanation: 'Ved feber hever pyrogener setpunktet i hypothalamus, mens hypertermi er overoppheting uten endret setpunkt.',
    },
  ],
  'biologi-1-5-5': [
    {
      question: 'Hva er hovedfunksjonen til nyrene?',
      options: ['Filtrere blodet og regulere væske- og elektrolyttbalansen', 'Pumpe blod gjennom kroppen', 'Produsere fordøyelsesenzymer', 'Lage røde blodceller direkte'],
      explanation: 'Nyrene filtrerer blodet, fjerner avfallsstoffer og regulerer vann- og saltbalansen i kroppen.',
    },
    {
      question: 'Omtrent hvor mye blodplasma filtrerer nyrene hvert døgn?',
      options: ['Ca. 180 liter', 'Ca. 1,5 liter', 'Ca. 20 liter', 'Ca. 500 liter'],
      explanation: 'Nyrene filtrerer ca. 180 liter plasma per døgn, men det meste reabsorberes, slik at bare ca. 1,5 liter blir til urin.',
    },
    {
      question: 'Hva er osmoregulering?',
      options: ['Regulering av konsentrasjonen av løste stoffer (osmotisk trykk) i kroppen', 'Regulering av kroppstemperaturen', 'Produksjon av hormoner', 'Nedbrytning av proteiner'],
      explanation: 'Osmoregulering er reguleringen av kroppens osmotiske trykk ved å justere mengden vann og salter.',
    },
    {
      question: 'Hvilket avfallsstoff fra proteinnedbrytning skilles ut av nyrene?',
      options: ['Urea (urinstoff)', 'Glukose', 'Oksygen', 'Aminosyrer'],
      explanation: 'Urea dannes ved nedbrytning av proteiner og skilles ut av nyrene i urinen.',
    },
    {
      question: 'Hva skjer med en celle hvis blodets osmolaritet blir for lav (for mye vann)?',
      options: ['Vann strømmer inn i cellen ved osmose, og den kan svelle', 'Cellen krymper', 'Cellen slutter å dele seg', 'Cellen produserer mer ATP'],
      explanation: 'Ved lav osmolaritet utenfor cellen strømmer vann inn ved osmose, og cellen kan svelle og i verste fall sprekke.',
    },
  ],
  'biologi-1-6-1': [
    {
      question: 'Hva er en mikroorganisme?',
      options: ['En organisme som er for liten til å sees med det blotte øye', 'Et stort flercellet dyr', 'En type plante', 'Et virus som er synlig'],
      explanation: 'En mikroorganisme er så liten at den krever mikroskop for å sees, og omfatter bakterier, virus, sopp og protister.',
    },
    {
      question: 'Hvilken gruppe er encellede eukaryoter?',
      options: ['Protister', 'Bakterier', 'Virus', 'Arkeer'],
      explanation: 'Protister (f.eks. amøber) er encellede eukaryoter, mens bakterier og arkeer er prokaryoter.',
    },
    {
      question: 'Hva er den typiske størrelsen på bakterier?',
      options: ['0,5–5 μm', '20–300 nm', '100–700 μm', '1–5 mm'],
      explanation: 'Bakterier er vanligvis 0,5–5 μm, mens virus er mye mindre (20–300 nm) og synlige bare i elektronmikroskop.',
    },
    {
      question: 'Hvor mange nanometer er det i 1 mikrometer (μm)?',
      options: ['1000 nm', '100 nm', '10 nm', '1 000 000 nm'],
      explanation: '1 μm = 1000 nm, og 1 mm = 1000 μm.',
    },
    {
      question: 'Hvilken gruppe mikroorganismer kan bare sees med elektronmikroskop?',
      options: ['Virus', 'Bakterier', 'Gjærsopp', 'Amøber'],
      explanation: 'Virus (20–300 nm) er for små for lysmikroskop og krever elektronmikroskop.',
    },
  ],
  'biologi-1-6-2': [
    {
      question: 'Hvordan formerer bakterier seg vanligvis?',
      options: ['Ved binær fisjon (todeling)', 'Ved mitose', 'Ved meiose', 'Ved befruktning'],
      explanation: 'Bakterier formerer seg vanligvis aseksuelt ved binær fisjon, der cellen deler seg i to.',
    },
    {
      question: 'Hva er hovedkomponenten i bakterienes cellevegg?',
      options: ['Peptidoglykan', 'Cellulose', 'Kitin', 'Keratin'],
      explanation: 'Bakterienes cellevegg består av peptidoglykan, et nettverk av sukker- og aminosyrekjeder som er unikt for bakterier.',
    },
    {
      question: 'Hvor ligger bakteriens DNA?',
      options: ['Fritt i cytoplasma i nukleoiden', 'I en membranomsluttet kjerne', 'Inne i mitokondriene', 'I cellveggen'],
      explanation: 'Bakteriens DNA er et enkelt, sirkulært kromosom som ligger fritt i cytoplasma i et område kalt nukleoiden.',
    },
    {
      question: 'Hvorfor virker mange antibiotika på bakterier uten å skade våre egne celler?',
      options: ['De angriper strukturer som er unike for bakterier, som 70S-ribosomer og cellevegg', 'De virker bare på store celler', 'De ødelegger alt DNA', 'De fjerner alt oksygen'],
      explanation: 'Antibiotika angriper bakteriespesifikke strukturer (peptidoglykan-cellevegg, 70S-ribosomer) som menneskeceller ikke har.',
    },
    {
      question: 'Hva er en valgfri struktur som bare noen bakterier har?',
      options: ['Kapsel', 'Plasmamembran', 'Ribosomer', 'Kromosom'],
      explanation: 'Kapselen er et slimlag utenfor celleveggen som bare noen bakterier har; plasmamembran, ribosomer og kromosom er obligatoriske.',
    },
  ],
  'biologi-1-6-3': [
    {
      question: 'Hvorfor regnes virus som å være i grenseland mellom levende og ikke-levende?',
      options: ['De har arvemateriale, men kan ikke formere seg uten en vertscelle', 'De består av mange celler', 'De har egen metabolisme', 'De kan lage egen mat'],
      explanation: 'Virus har arvemateriale og kan utvikle seg, men mangler egen metabolisme og må kapre en vertscelle for å formere seg.',
    },
    {
      question: 'Hva består et virus av i sin enkleste form?',
      options: ['Arvemateriale (DNA eller RNA) omgitt av et proteinskall (kapsid)', 'En cellekjerne med organeller', 'Bare en cellemembran', 'Peptidoglykan og ribosomer'],
      explanation: 'Et virus består av arvemateriale (DNA eller RNA, aldri begge) omgitt av et proteinskall kalt kapsid.',
    },
    {
      question: 'Hvorfor er kappekledde virus sårbare for såpe og alkohol?',
      options: ['Såpe og alkohol ødelegger lipidlaget i kappen', 'De mangler arvemateriale', 'De har tykk cellevegg', 'De er svært store'],
      explanation: 'Kappen er en lipidmembran; såpe og alkohol bryter opp dette lipidlaget og inaktiverer viruset.',
    },
    {
      question: 'Hva er kapsomerer?',
      options: ['Proteinenhetene som bygger opp kapsidet', 'Virusets arvemateriale', 'En type vertscelle', 'Et antiviralt legemiddel'],
      explanation: 'Kapsidet er bygd opp av mange like proteinenheter kalt kapsomerer.',
    },
    {
      question: 'Kan antibiotika brukes mot virussykdommer?',
      options: ['Nei, antibiotika virker ikke mot virus', 'Ja, all antibiotika dreper virus', 'Bare penicillin virker', 'Ja, men bare mot store virus'],
      explanation: 'Antibiotika virker bare mot bakterier; virus bekjempes med antivirale midler, vaksiner og immunforsvaret.',
    },
  ],
  'biologi-1-6-4': [
    {
      question: 'Hva er antibiotika?',
      options: ['Legemidler som dreper bakterier eller hemmer veksten deres', 'Legemidler mot virussykdommer', 'Vitaminer', 'Hormoner'],
      explanation: 'Antibiotika dreper bakterier (baktericid) eller hemmer veksten deres (bakteriostatisk), men virker ikke mot virus.',
    },
    {
      question: 'Hvem oppdaget penicillin i 1928?',
      options: ['Alexander Fleming', 'Louis Pasteur', 'Edward Jenner', 'Robert Koch'],
      explanation: 'Alexander Fleming oppdaget penicillin ved en tilfeldighet da en muggsopp (Penicillium) hemmet bakterievekst.',
    },
    {
      question: 'Mot hva virker antibiotika IKKE?',
      options: ['Virus', 'Bakterier', 'Noen sopp', 'Bakterieinfeksjoner i sår'],
      explanation: 'Antibiotika virker ikke mot virus, fordi virus mangler de bakteriespesifikke strukturene antibiotika angriper.',
    },
    {
      question: 'Hva er forskjellen på baktericid og bakteriostatisk antibiotika?',
      options: ['Baktericid dreper bakterier, bakteriostatisk hemmer veksten', 'Begge dreper bakterier umiddelbart', 'Bakteriostatisk dreper virus', 'Det er ingen forskjell'],
      explanation: 'Baktericide midler dreper bakteriene, mens bakteriostatiske hemmer formeringen slik at immunforsvaret kan ta dem.',
    },
    {
      question: 'Hvilken organisme produserte det første penicillinet?',
      options: ['Muggsoppen Penicillium', 'En bakterie', 'Et virus', 'En gjærsopp'],
      explanation: 'Penicillin produseres av muggsoppen Penicillium (notatum/chrysogenum), som Fleming observerte drepte bakterier.',
    },
  ],
  'biologi-1-6-5': [
    {
      question: 'Hva er antibiotikaresistens?',
      options: ['At bakterier overlever antibiotika som normalt ville drept dem', 'At mennesker blir immune mot bakterier', 'At antibiotika blir sterkere over tid', 'At virus blir resistente mot vaksiner'],
      explanation: 'Antibiotikaresistens betyr at bakterier har utviklet evnen til å overleve antibiotika som normalt ville drept dem.',
    },
    {
      question: 'Hvilken naturlig prosess driver utviklingen av antibiotikaresistens?',
      options: ['Naturlig utvalg (evolusjon)', 'Fotosyntese', 'Mitose hos mennesker', 'Osmose'],
      explanation: 'Antibiotika dreper de følsomme bakteriene, mens resistente overlever og formerer seg – et eksempel på naturlig utvalg.',
    },
    {
      question: 'Hva akselererer utviklingen av resistens kraftig?',
      options: ['Overforbruk og feilbruk av antibiotika', 'Riktig bruk av vaksiner', 'God håndhygiene', 'Mindre bruk av antibiotika'],
      explanation: 'Overforbruk og feilbruk av antibiotika gir et sterkt seleksjonspress som fremmer resistente bakterier.',
    },
    {
      question: 'Hvordan kan bakterier raskt få resistensgener fra andre bakterier?',
      options: ['Ved horisontal genoverføring', 'Ved fotosyntese', 'Ved meiose', 'Ved binær fisjon alene'],
      explanation: 'Bakterier kan utveksle resistensgener direkte gjennom horisontal genoverføring (f.eks. via plasmider).',
    },
    {
      question: 'Hva er et viktig tiltak mot antibiotikaresistens?',
      options: ['Bruke antibiotika riktig og bare når det trengs', 'Bruke antibiotika så ofte som mulig', 'Avbryte kurer tidlig', 'Bruke antibiotika mot virus'],
      explanation: 'Riktig og begrenset bruk av antibiotika reduserer seleksjonspresset og bremser resistensutviklingen.',
    },
  ],
  'biologi-1-7-1': [
    {
      question: 'Hva er et økosystem?',
      options: ['Et avgrenset område der organismer og det ikke-levende miljøet fungerer som en enhet', 'Bare de levende organismene i et område', 'Bare de ikke-levende faktorene', 'En enkelt populasjon'],
      explanation: 'Et økosystem omfatter både de levende (biotiske) og ikke-levende (abiotiske) komponentene som samspiller i et område.',
    },
    {
      question: 'Hva er abiotiske faktorer?',
      options: ['Ikke-levende komponenter som temperatur, lys og vann', 'Levende komponenter som planter og dyr', 'Bare nedbrytere', 'Bare produsenter'],
      explanation: 'Abiotiske faktorer er de ikke-levende delene av økosystemet, som temperatur, lys, vann, pH og næringsstoffer.',
    },
    {
      question: 'Hva er biotiske faktorer?',
      options: ['Alle levende komponenter i et økosystem', 'Bare temperatur og nedbør', 'Bare jordtype', 'Bare solinnstråling'],
      explanation: 'Biotiske faktorer omfatter alle levende komponenter – produsenter, konsumenter, nedbrytere og samspillet mellom dem.',
    },
    {
      question: 'Hvordan beveger energi seg gjennom et økosystem?',
      options: ['I én retning, fra solen via produsenter til konsumenter', 'I et lukket kretsløp', 'Fra nedbrytere til solen', 'Tilfeldig i alle retninger'],
      explanation: 'Energi strømmer enveis gjennom økosystemet, mens stoffer (som karbon og nitrogen) sirkulerer i kretsløp.',
    },
    {
      question: 'Hvilken abiotisk faktor påvirker hvilke næringsstoffer som er tilgjengelige i jord?',
      options: ['pH', 'Antall predatorer', 'Mengden nedbrytere', 'Konkurranse mellom arter'],
      explanation: 'Jordas pH påvirker hvor tilgjengelige næringsstoffene er for planter, og er en viktig abiotisk faktor.',
    },
  ],
  'biologi-1-7-2': [
    {
      question: 'Hva kjennetegner produsenter (autotrofe organismer)?',
      options: ['De lager sitt eget organiske materiale fra uorganiske stoffer', 'De spiser andre organismer', 'De bryter ned dødt materiale', 'De lever av andre dyr'],
      explanation: 'Produsenter (autotrofe) lager eget organisk materiale, oftest ved fotosyntese, og danner grunnlaget for næringskjeden.',
    },
    {
      question: 'Hvilket trofisk nivå tilhører planteetere (herbivorer)?',
      options: ['Primærkonsumenter', 'Produsenter', 'Toppredatorer', 'Nedbrytere'],
      explanation: 'Herbivorer som spiser produsenter direkte er primærkonsumenter (trofisk nivå 2).',
    },
    {
      question: 'Hvorfor må et økosystem stadig tilføres ny energi fra solen?',
      options: ['Fordi det meste av energien tapes som varme på hvert trofisk nivå', 'Fordi energien sirkulerer i et kretsløp', 'Fordi nedbryterne lager energi', 'Fordi planter ikke trenger energi'],
      explanation: 'Energistrømmen er enveis, og på hvert trofisk nivå tapes mesteparten av energien som varme – derfor må solen stadig tilføre ny.',
    },
    {
      question: 'Hva er nedbryteres rolle i økosystemet?',
      options: ['Bryte ned dødt organisk materiale og frigjøre næringsstoffer', 'Produsere oksygen ved fotosyntese', 'Jakte på toppredatorer', 'Binde solenergi'],
      explanation: 'Nedbrytere (sopp og bakterier) bryter ned dødt materiale og frigjør næringsstoffer tilbake til miljøet.',
    },
    {
      question: 'Omtrent hvor stor andel av energien overføres typisk fra ett trofisk nivå til det neste?',
      options: ['Ca. 10 %', 'Ca. 90 %', 'Ca. 50 %', 'Ca. 1 %'],
      explanation: 'Bare ca. 10 % av energien overføres til neste trofiske nivå; resten tapes som varme – dette begrenser antall nivåer.',
    },
  ],
  'biologi-1-7-3': [
    {
      question: 'Hva er forskjellen på energistrøm og stoffkretsløp i et økosystem?',
      options: ['Energi strømmer enveis, mens stoffer sirkulerer', 'Begge sirkulerer i kretsløp', 'Begge er enveis', 'Stoffer strømmer enveis, energi sirkulerer'],
      explanation: 'Energi strømmer i én retning gjennom økosystemet, mens grunnstoffer sirkulerer i kretsløp mellom organismer og miljø.',
    },
    {
      question: 'Hvilke to prosesser er sentrale i karbonkretsløpet?',
      options: ['Fotosyntese (binder CO₂) og celleånding (frigjør CO₂)', 'Osmose og diffusjon', 'Mitose og meiose', 'Filtrering og reabsorpsjon'],
      explanation: 'Fotosyntese binder atmosfærisk CO₂ i organiske molekyler, mens celleånding og nedbrytning frigjør CO₂ tilbake.',
    },
    {
      question: 'Hvordan har mennesker sterkest påvirket karbonkretsløpet?',
      options: ['Ved forbrenning av fossilt brensel', 'Ved å puste ut CO₂', 'Ved å plante trær', 'Ved fotosyntese'],
      explanation: 'Forbrenning av fossilt brensel frigjør store mengder lagret karbon som CO₂ og forstyrrer kretsløpet.',
    },
    {
      question: 'Hvilket grunnstoff er bestanddel i alle organiske molekyler?',
      options: ['Karbon', 'Jern', 'Natrium', 'Klor'],
      explanation: 'Karbon er grunnstoffet som inngår i alle organiske molekyler og er fundamentalt for alt liv.',
    },
    {
      question: 'Hvilken reaksjon frigjør CO₂ tilbake til atmosfæren?',
      options: ['Celleånding', 'Fotosyntese', 'Osmose', 'Nitrogenfiksering'],
      explanation: 'Celleånding bryter ned glukose og frigjør CO₂; fotosyntese gjør det motsatte ved å binde CO₂.',
    },
  ],
  'biologi-1-7-4': [
    {
      question: 'Hva er en populasjon?',
      options: ['Alle individer av samme art i et avgrenset område', 'Alle artene i et økosystem', 'Bare predatorene i et område', 'En enkelt organisme'],
      explanation: 'En populasjon er alle individer av samme art som lever i samme område og kan pare seg med hverandre.',
    },
    {
      question: 'Hva er bæreevnen (K) for en populasjon?',
      options: ['Det maksimale antall individer miljøet kan opprettholde over tid', 'Det laveste antall individer', 'Fødselsraten', 'Antall predatorer'],
      explanation: 'Bæreevnen K er det største antall individer et miljø kan opprettholde med tilgjengelige ressurser.',
    },
    {
      question: 'Hva kjennetegner en tetthetsavhengig faktor?',
      options: ['Effekten øker når populasjonstettheten øker', 'Effekten er uavhengig av tetthet', 'Den virker bare ved naturkatastrofer', 'Den påvirker bare produsenter'],
      explanation: 'Tetthetsavhengige faktorer (som konkurranse, sykdom og predasjon) får sterkere effekt jo tettere populasjonen er.',
    },
    {
      question: 'Hvilken vekstkurve får en populasjon som stabiliserer seg ved bæreevnen?',
      options: ['S-kurve (sigmoid)', 'Rett, eksponentiell kurve', 'J-kurve uten grense', 'Synkende linje'],
      explanation: 'Når veksten bremses av begrensede ressurser og stabiliserer seg ved K, dannes en S-formet (sigmoid) kurve.',
    },
    {
      question: 'Hva er et eksempel på en tetthetsuavhengig faktor?',
      options: ['Ekstreme værforhold som tørke og kulde', 'Konkurranse om mat', 'Spredning av sykdom', 'Predasjon'],
      explanation: 'Tetthetsuavhengige faktorer som vær og naturkatastrofer påvirker populasjonen uavhengig av hvor tett den er.',
    },
  ],
  'biologi-1-7-5': [
    {
      question: 'Hvilken effekt har mutualisme på de to involverte artene?',
      options: ['Begge har fordel (+/+)', 'Begge har ulempe (−/−)', 'Én har fordel, én ulempe (+/−)', 'Én har fordel, én er upåvirket (+/0)'],
      explanation: 'Mutualisme er et samspill der begge arter har fordel (+/+).',
    },
    {
      question: 'Hva kjennetegner predasjon?',
      options: ['En art (predator) dreper og spiser en annen (byttedyr) – +/−', 'Begge arter har fordel', 'Begge arter har ulempe', 'Ingen av artene påvirkes'],
      explanation: 'Predasjon er +/−: predatoren har fordel, mens byttedyret har ulempe.',
    },
    {
      question: 'Hva er kommensalisme?',
      options: ['Én art har fordel mens den andre er upåvirket (+/0)', 'Begge arter har fordel', 'Begge arter har ulempe', 'Begge arter dør'],
      explanation: 'Ved kommensalisme har den ene arten fordel (+), mens den andre verken får fordel eller ulempe (0).',
    },
    {
      question: 'Hva er koevolusjon?',
      options: ['At to arter gjensidig påvirker hverandres evolusjon', 'At én art utrydder en annen', 'At en art utvikler seg alene', 'At arter slutter å endre seg'],
      explanation: 'Koevolusjon er når samspillende arter (f.eks. predator og byttedyr) gjensidig driver hverandres utvikling.',
    },
    {
      question: 'Hva skjer typisk i en predator-byttedyr-dynamikk?',
      options: ['Populasjonene svinger sykliske – byttedyr opp gir predator opp, så ned', 'Begge populasjoner vokser ubegrenset', 'Begge holder seg helt konstante', 'Predatorene forsvinner alltid permanent'],
      explanation: 'Flere byttedyr gir flere predatorer, som så reduserer byttedyrene, som igjen reduserer predatorene – sykliske svingninger.',
    },
  ],
  'biologi-1-8-1': [
    {
      question: 'Hva omfatter biologisk mangfold (biodiversitet)?',
      options: ['Variasjon i gener, arter og økosystemer', 'Bare antall arter', 'Bare genetisk variasjon innen én art', 'Bare antall økosystemer'],
      explanation: 'Biologisk mangfold omfatter tre nivåer: genetisk diversitet, artsmangfold og økosystemmangfold.',
    },
    {
      question: 'Hvorfor er genetisk variasjon viktig for en populasjon?',
      options: ['Den øker sjansen for å overleve miljøendringer', 'Den gjør alle individer like', 'Den hindrer evolusjon', 'Den fører alltid til sykdom'],
      explanation: 'Høy genetisk variasjon gir bedre tilpasningsevne, slik at populasjonen lettere overlever endringer i miljøet.',
    },
    {
      question: 'Hva er det mest grunnleggende nivået av biodiversitet?',
      options: ['Genetisk diversitet', 'Artsdiversitet', 'Økosystemdiversitet', 'Landskapsdiversitet'],
      explanation: 'Genetisk diversitet (variasjonen i arvestoff innen en art) er det mest grunnleggende nivået av biodiversitet.',
    },
    {
      question: 'Hva er en risiko ved svært lav genetisk variasjon, slik som hos geparder?',
      options: ['Større sårbarhet for sykdommer og miljøendringer', 'Raskere evolusjon', 'Høyere reproduksjon', 'Bedre tilpasningsevne'],
      explanation: 'Lav genetisk variasjon (f.eks. etter en flaskehals) gjør arten sårbar for sykdommer og endringer i miljøet.',
    },
    {
      question: 'Hvilket internasjonalt rammeverk for bevaring av biologisk mangfold ble undertegnet i 1992?',
      options: ['FNs konvensjon om biologisk mangfold (CBD)', 'Kyotoprotokollen', 'Parisavtalen', 'Montrealprotokollen'],
      explanation: 'FNs konvensjon om biologisk mangfold (CBD) fra 1992 er det viktigste internasjonale rammeverket for bevaring av biodiversitet.',
    },
  ],
  'biologi-1-8-2': [
    {
      question: 'Hvem utviklet systemet for binomisk nomenklatur?',
      options: ['Carl von Linné', 'Charles Darwin', 'Gregor Mendel', 'Robert Hooke'],
      explanation: 'Carl von Linné utviklet på 1700-tallet det toleddede latinske navnesystemet (binomisk nomenklatur).',
    },
    {
      question: 'Hvordan er et vitenskapelig artsnavn bygd opp?',
      options: ['Slektsnavn med stor forbokstav + artsnavn med liten forbokstav, i kursiv', 'Bare ett latinsk ord', 'Tre ord uten kursiv', 'Det norske navnet i kursiv'],
      explanation: 'Et vitenskapelig navn er toleddet: slektsnavn (stor forbokstav) + artsnavn (liten), skrevet i kursiv, f.eks. Homo sapiens.',
    },
    {
      question: 'Hva er hovedformålet med å klassifisere organismer?',
      options: ['Organisere kunnskap og avdekke slektskap mellom arter', 'Gjøre alle arter like', 'Hindre kommunikasjon mellom forskere', 'Skjule artenes egenskaper'],
      explanation: 'Klassifisering organiserer kunnskap, sikrer et felles navnesystem og avdekker evolusjonært slektskap.',
    },
    {
      question: 'Hvilket vitenskapelig navn er korrekt skrevet?',
      options: ['Canis lupus', 'canis Lupus', 'CANIS LUPUS', 'Canis Lupus'],
      explanation: 'Korrekt form er slektsnavn med stor forbokstav og artsnavn med liten: Canis lupus (i kursiv).',
    },
    {
      question: 'Hva kombinerer moderne systematikk for å lage klassifiseringer?',
      options: ['Linnés system og evolusjonsteori', 'Bare ytre utseende', 'Bare organismenes størrelse', 'Tilfeldige grupperinger'],
      explanation: 'Moderne systematikk kombinerer Linnés klassiske system med evolusjonsteori (slektskap), ofte via DNA-analyser.',
    },
  ],
  'biologi-1-8-3': [
    {
      question: 'Hva står akronymet HIPPO for når det gjelder trusler mot biologisk mangfold?',
      options: ['Habitatødeleggelse, Invasive arter, Pollution, Populasjonsvekst, Overbeskatning', 'Hav, Is, Planter, Press, Oksygen', 'Habitat, Insekter, Pattedyr, Planter, Organismer', 'Hete, Ild, Press, Population, Oksygen'],
      explanation: 'HIPPO oppsummerer hovedtruslene: Habitatødeleggelse, Invasive arter, Pollution (forurensning), Populasjonsvekst og Overbeskatning.',
    },
    {
      question: 'Hva er den største trusselen mot biologisk mangfold globalt?',
      options: ['Habitatødeleggelse', 'Invasive arter', 'Forurensning', 'Overhøsting'],
      explanation: 'Ødeleggelse og fragmentering av habitater er den største globale trusselen mot biodiversiteten.',
    },
    {
      question: 'Hvorfor kalles den nåværende situasjonen den «sjette masseutryddelsen»?',
      options: ['Utryddelsesraten er ekstremt høy og drevet av menneskelig aktivitet', 'Det er femte gang en asteroide treffer jorda', 'Alle arter dør samtidig', 'Det skyldes bare vulkanutbrudd'],
      explanation: 'Utryddelsesraten er nå 100–1000 ganger høyere enn det naturlige, og er drevet av menneskelig aktivitet.',
    },
    {
      question: 'Hva er habitatfragmentering?',
      options: ['At store sammenhengende habitater deles opp i mindre, isolerte flekker', 'At habitatet vokser', 'At nye arter innføres', 'At forurensning fjernes'],
      explanation: 'Fragmentering deler opp habitater i mindre, isolerte deler, noe som øker kanteffekter og genetisk isolasjon.',
    },
    {
      question: 'Hva er en invasiv (fremmed) art?',
      options: ['En art innført til et nytt område der den kan fortrenge stedegne arter', 'En art som alltid har levd i området', 'En utdødd art', 'En art uten genetisk variasjon'],
      explanation: 'Invasive arter er fremmede arter som etablerer seg i nye områder og kan utkonkurrere eller fortrenge stedegne arter.',
    },
  ],
  'biologi-1-8-4': [
    {
      question: 'Hva er in-situ bevaring?',
      options: ['Beskyttelse av arter i deres naturlige habitat', 'Beskyttelse i dyrehager og frøbanker', 'Avl i fangenskap', 'Genmodifisering av arter'],
      explanation: 'In-situ bevaring beskytter arter og økosystemer i deres naturlige habitat, for eksempel gjennom verneområder.',
    },
    {
      question: 'Hva er ex-situ bevaring?',
      options: ['Beskyttelse utenfor det naturlige habitatet, f.eks. i dyrehager og frøbanker', 'Beskyttelse i naturlige verneområder', 'Opprettelse av nasjonalparker', 'Restaurering av våtmark'],
      explanation: 'Ex-situ bevaring skjer utenfor det naturlige habitatet, som i dyrehager, botaniske hager og frøbanker.',
    },
    {
      question: 'Hva er «30 by 30»-målet fra det globale biodiversitetsrammeverket?',
      options: ['Verne 30 % av land og hav innen 2030', 'Redusere CO₂ med 30 % innen 2030', 'Plante 30 milliarder trær', 'Verne 30 arter innen 2030'],
      explanation: '«30 by 30»-målet fra 2022 sikter mot å verne 30 % av land- og havareal innen 2030.',
    },
    {
      question: 'Hvilken type verneområde har strengest beskyttelse i Norge?',
      options: ['Naturreservat', 'Landskapsvernområde', 'Nasjonalpark', 'Biotopvernområde'],
      explanation: 'Naturreservat har den strengeste beskyttelsesgraden av verneområdene i Norge.',
    },
    {
      question: 'Hvorfor kan korridorer mellom verneområder være nyttige?',
      options: ['De lar arter spre seg mellom isolerte områder', 'De øker forurensningen', 'De hindrer all bevegelse', 'De reduserer artsmangfoldet'],
      explanation: 'Korridorer forbinder isolerte verneområder slik at arter kan spre seg og opprettholde genetisk utveksling.',
    },
  ],
  'biologi-1-8-5': [
    {
      question: 'Hvilken metode brukes i dag for å avdekke evolusjonært slektskap mellom arter?',
      options: ['DNA-sekvensering', 'Kun ytre utseende (morfologi)', 'Bare organismenes størrelse', 'Tilfeldig gruppering'],
      explanation: 'Moderne taksonomi bruker DNA-sekvensering (molekylær fylogeni) for å avdekke slektskap som ikke er synlig fra utseendet.',
    },
    {
      question: 'Hvordan klassifiserte Linné opprinnelig organismer?',
      options: ['Basert på morfologiske (ytre) kjennetegn', 'Basert på DNA', 'Basert på proteinanalyse', 'Basert på adferd alene'],
      explanation: 'Linné klassifiserte organismer ut fra hvordan de så ut – morfologiske kjennetegn.',
    },
    {
      question: 'Hvorfor ble soppene flyttet fra planteriket til et eget rike?',
      options: ['Nye metoder viste at de er mer beslektet med dyr enn med planter', 'De ble for store', 'De mistet cellevegg', 'De begynte å drive fotosyntese'],
      explanation: 'Biokjemiske og molekylære analyser viste at sopp ikke er planter, men danner et eget rike (nærmere dyr).',
    },
    {
      question: 'Hva kan føre til at ytre likhet villeder klassifisering basert på morfologi?',
      options: ['Konvergent evolusjon', 'DNA-sekvensering', 'Binomisk nomenklatur', 'Mutasjoner i kjønnsceller'],
      explanation: 'Konvergent evolusjon gjør at ubeslektede arter kan ligne hverandre, noe som villeder ren morfologisk klassifisering.',
    },
    {
      question: 'Hvilken teknologi gjorde rask DNA-sekvensering mulig fra 1980-tallet?',
      options: ['PCR og sekvenseringsmaskiner', 'Lysmikroskop', 'Proteinelektroforese alene', 'Røntgenkrystallografi'],
      explanation: 'PCR (polymerasekjedereaksjon) og sekvenseringsmaskiner gjorde det mulig å analysere DNA raskt fra slutten av 1900-tallet.',
    },
  ],
  'biologi-1-9-1': [
    {
      question: 'Hva er en hypotese i vitenskapelig metode?',
      options: ['En testbar, tentativ forklaring på et fenomen', 'En endelig konklusjon', 'En tilfeldig gjetning som ikke kan testes', 'Et bevist faktum'],
      explanation: 'En hypotese er en foreløpig, testbar forklaring som kan undersøkes gjennom eksperiment eller observasjon.',
    },
    {
      question: 'Hvilke tre kjennetegn skiller vitenskap fra andre kunnskapsformer?',
      options: ['Empirisk, systematisk og etterprøvbar', 'Rask, billig og enkel', 'Subjektiv, intuitiv og personlig', 'Hemmelig, fast og uforanderlig'],
      explanation: 'Vitenskap er empirisk (basert på observasjoner), systematisk (følger metoder) og etterprøvbar (kan gjentas).',
    },
    {
      question: 'Hva betyr det at et resultat skal være reproduserbart?',
      options: ['Andre forskere skal kunne gjenta undersøkelsen og få tilsvarende resultater', 'Det skal bare kunne gjøres én gang', 'Det trenger ikke publiseres', 'Det skal holdes hemmelig'],
      explanation: 'Reproduserbarhet betyr at andre forskere kan gjenta undersøkelsen og få tilsvarende resultater – et kjernekrav i vitenskap.',
    },
    {
      question: 'Hva skjer hvis dataene ikke støtter hypotesen?',
      options: ['Hypotesen må forkastes eller justeres', 'Dataene må forkastes', 'Forskeren ignorerer resultatet', 'Hypotesen blir automatisk bevist'],
      explanation: 'Hvis dataene motstrider hypotesen, må forskeren forkaste eller endre hypotesen – ikke dataene.',
    },
    {
      question: 'Hva er det første trinnet i vitenskapelig metode?',
      options: ['Observasjon av et fenomen', 'Publisering av resultater', 'Konklusjon', 'Datainnsamling'],
      explanation: 'Vitenskapelig metode starter med en observasjon som vekker nysgjerrighet og leder til et spørsmål.',
    },
  ],
  'biologi-1-9-2': [
    {
      question: 'Hva er den uavhengige variabelen i et eksperiment?',
      options: ['Faktoren forskeren bevisst endrer', 'Faktoren som måles som resultat', 'En faktor som holdes konstant', 'En tilfeldig feil'],
      explanation: 'Den uavhengige variabelen er den forskeren manipulerer for å undersøke effekten av.',
    },
    {
      question: 'Hva er den avhengige variabelen?',
      options: ['Det som måles og som antas å påvirkes av den uavhengige variabelen', 'Faktoren forskeren endrer', 'En kontrollert variabel', 'Kontrollgruppen'],
      explanation: 'Den avhengige variabelen er resultatet man måler, som man tror påvirkes av den uavhengige variabelen.',
    },
    {
      question: 'Hvorfor trenger et eksperiment en kontrollgruppe?',
      options: ['For å ha et sammenligningsgrunnlag uten behandlingen', 'For å øke antall forsøkspersoner', 'For å gjøre eksperimentet raskere', 'For å fjerne den uavhengige variabelen'],
      explanation: 'Kontrollgruppen får ikke behandlingen, men behandles ellers likt, slik at man kan se om endringer skyldes behandlingen.',
    },
    {
      question: 'Hva er kontrollerte variabler?',
      options: ['Faktorer som holdes konstante for å sikre pålitelige resultater', 'Faktoren som endres bevisst', 'Resultatet som måles', 'Tilfeldige feil'],
      explanation: 'Kontrollerte variabler holdes konstante slik at endringer i den avhengige variabelen kan tilskrives den uavhengige.',
    },
    {
      question: 'I et forsøk på om lysmengde påvirker fotosyntese, hva er den uavhengige variabelen?',
      options: ['Lysmengden', 'Fotosyntesehastigheten', 'Vanntemperaturen', 'Planteart'],
      explanation: 'Lysmengden endres bevisst og er derfor den uavhengige variabelen, mens fotosyntesehastigheten måles (avhengig).',
    },
  ],
  'biologi-1-9-3': [
    {
      question: 'Hva er en fordel med feltarbeid sammenlignet med laboratoriearbeid?',
      options: ['Det gir realistiske forhold og et helhetlig bilde av økosystemer', 'Det gir full kontroll over alle variabler', 'Det er alltid mer reproduserbart', 'Det utelukker alle feilkilder'],
      explanation: 'Feltarbeid studerer organismer i deres naturlige miljø og gir realistiske, helhetlige data – men med mindre variabelkontroll.',
    },
    {
      question: 'Hva er en transekt?',
      options: ['En rett linje gjennom et område der man registrerer arter', 'En tilfeldig prøvetaking', 'Et laboratorieforsøk', 'En type mikroskop'],
      explanation: 'En transekt er en rett linje langs hvilken man systematisk registrerer arter, ofte langs en miljøgradient.',
    },
    {
      question: 'Hva er en fordel med laboratoriearbeid sammenlignet med feltarbeid?',
      options: ['Bedre kontroll over variabler og mer reproduserbarhet', 'Mer realistiske økologiske forhold', 'Ingen feilkilder', 'Det krever ikke utstyr'],
      explanation: 'I laboratoriet kan man styre variabler som temperatur og lys, noe som gir kontrollerte og reproduserbare forhold.',
    },
    {
      question: 'Hvorfor brukes ofte standardiserte metoder ved artskartlegging?',
      options: ['For at resultatene skal kunne sammenlignes og være etterprøvbare', 'For å gjøre arbeidet vanskeligere', 'For å unngå å telle arter', 'For å skjule data'],
      explanation: 'Standardiserte metoder (som ruteanalyse og transekt) gjør resultatene sammenlignbare og etterprøvbare.',
    },
    {
      question: 'Hva er en typisk kombinasjon av felt- og laboratoriearbeid?',
      options: ['Samle prøver i felt og analysere dem på laboratoriet', 'Bare jobbe i laboratoriet', 'Bare observere i felt uten prøver', 'Aldri kombinere de to'],
      explanation: 'I praksis utfyller de hverandre: forskere samler ofte prøver i felt og analyserer dem under kontrollerte forhold på lab.',
    },
  ],
  'biologi-1-9-4': [
    {
      question: 'Hva er kvantitative data?',
      options: ['Data som kan måles og uttrykkes med tall', 'Beskrivelser av farge og form', 'Bare artsnavn', 'Subjektive vurderinger'],
      explanation: 'Kvantitative data er talldata som kan behandles matematisk og statistisk, som lengde, antall og temperatur.',
    },
    {
      question: 'Hva er kvalitative data?',
      options: ['Beskrivelser av egenskaper som ikke enkelt uttrykkes med tall', 'Data som alltid er numeriske', 'Bare målinger i centimeter', 'pH-verdier'],
      explanation: 'Kvalitative data beskriver kategori, type eller utseende (f.eks. farge, artsnavn, habitat-type).',
    },
    {
      question: 'Hvilken diagramtype passer best for å vise hvordan en verdi endrer seg over tid?',
      options: ['Linjediagram', 'Kakediagram', 'Tabell uten akser', 'Venn-diagram'],
      explanation: 'Et linjediagram egner seg godt for å vise utvikling og trender over tid.',
    },
    {
      question: 'Hva kjennetegner en god tabell?',
      options: ['Tydelig overskrift, klare kolonneoverskrifter og enheter', 'Ingen overskrift', 'Kun tall uten forklaring', 'Tilfeldig rekkefølge'],
      explanation: 'En god tabell har tydelig overskrift, klart merkede kolonner og oppgitte enheter slik at den er lett å forstå.',
    },
    {
      question: 'Hvilken datatype er «blå blomster» og «granskog»?',
      options: ['Kvalitative data', 'Kvantitative data', 'Statistiske data', 'Numeriske data'],
      explanation: 'Beskrivelser som farge og habitat-type er kvalitative data – de beskriver egenskaper uten tall.',
    },
  ],
  'biologi-1-9-5': [
    {
      question: 'Hva kjennetegner en systematisk feil?',
      options: ['Den går i én bestemt retning og påvirker alle målinger likt', 'Den varierer tilfeldig opp og ned', 'Den oppstår bare én gang', 'Den kan aldri oppdages'],
      explanation: 'Systematiske feil gir konsistent for høye eller for lave verdier, f.eks. et termometer som viser 1 °C for mye.',
    },
    {
      question: 'Hva kjennetegner tilfeldige feil?',
      options: ['De varierer tilfeldig – noen målinger for høye, andre for lave', 'De går alltid i samme retning', 'De skyldes alltid feil utstyr', 'De kan ikke reduseres'],
      explanation: 'Tilfeldige feil varierer uforutsigbart og skyldes naturlig variasjon og avlesningsusikkerhet; de kan reduseres med flere målinger.',
    },
    {
      question: 'Hva betyr validitet (gyldighet) i en undersøkelse?',
      options: ['At man faktisk måler det man har til hensikt å måle', 'At målingene er like hver gang', 'At forsøket er raskt', 'At man bruker mange forsøkspersoner'],
      explanation: 'Validitet handler om gyldighet – at metoden faktisk måler det den skal måle. Systematiske feil svekker validiteten.',
    },
    {
      question: 'Hva betyr reliabilitet (pålitelighet)?',
      options: ['At man får samme resultat ved gjentatte målinger', 'At resultatet er nytt hver gang', 'At man bruker dyrt utstyr', 'At forsøket er gyldig'],
      explanation: 'Reliabilitet handler om hvor konsistente og repeterbare målingene er; tilfeldige feil svekker reliabiliteten.',
    },
    {
      question: 'Hvordan kan man redusere virkningen av tilfeldige feil?',
      options: ['Gjøre mange målinger og bruke gjennomsnitt', 'Bare måle én gang', 'Endre setpunktet', 'Ignorere avvik'],
      explanation: 'Mange gjentatte målinger og gjennomsnittsverdier reduserer effekten av tilfeldige feil.',
    },
  ],
  'biologi-1-10-1': [
    {
      question: 'Hva kjennetegner det medfødte (uspesifikke) immunforsvaret?',
      options: ['Det reagerer raskt og likt uansett hvilken patogen som angriper', 'Det har hukommelse og er svært spesifikt', 'Det virker bare mot virus', 'Det utvikles først etter en infeksjon'],
      explanation: 'Det medfødte immunforsvaret er kroppens første forsvarslinje – raskt og uspesifikt, uten hukommelse.',
    },
    {
      question: 'Hvilken av disse er en fysisk barriere i det medfødte immunforsvaret?',
      options: ['Huden', 'Antistoffer', 'B-celler', 'Hukommelsesceller'],
      explanation: 'Huden er en fysisk barriere som hindrer patogener i å trenge inn; antistoffer og B-celler tilhører det ervervede forsvaret.',
    },
    {
      question: 'Hva gjør fagocytter?',
      options: ['«Spiser» patogener gjennom fagocytose', 'Produserer antistoffer', 'Lager hukommelsesceller', 'Danner myelin'],
      explanation: 'Fagocytter (som makrofager og nøytrofile) omslutter og bryter ned patogener gjennom fagocytose.',
    },
    {
      question: 'Hva kjennetegner det ervervede (spesifikke) immunforsvaret?',
      options: ['Det er tregere, men presist og har hukommelse', 'Det er raskt og uspesifikt', 'Det består bare av hud og slimhinner', 'Det virker bare første leveår'],
      explanation: 'Det ervervede immunforsvaret reagerer tregere, men er svært spesifikt og danner hukommelsesceller for raskere respons senere.',
    },
    {
      question: 'Hvilken kjemisk barriere i magesekken dreper de fleste mikroorganismer?',
      options: ['Magesyre (lav pH)', 'Insulin', 'Galle', 'Spytt'],
      explanation: 'Magesyren har svært lav pH (1–3) og dreper de fleste mikroorganismer som kommer inn med maten.',
    },
  ],
  'biologi-1-10-2': [
    {
      question: 'Hvilke celler produserer antistoffer?',
      options: ['Plasmaceller (aktiverte B-celler)', 'Røde blodceller', 'Nerveceller', 'Muskelceller'],
      explanation: 'Antistoffer produseres av plasmaceller, som er aktiverte B-celler.',
    },
    {
      question: 'Hvilken form har et antistoffmolekyl?',
      options: ['Y-form', 'Spiralform', 'Kuleform', 'Stavform'],
      explanation: 'Antistoffer er Y-formede proteiner med to bindingsseter som gjenkjenner et bestemt antigen.',
    },
    {
      question: 'Hva binder et antistoff seg spesifikt til?',
      options: ['Et antigen', 'Et hormon', 'Et enzymsubstrat', 'En nervecelle'],
      explanation: 'Hvert antistoff har en variabel region som binder spesifikt til et bestemt antigen på en patogen.',
    },
    {
      question: 'Hvilken antistoffklasse er vanligst i blodet og kan krysse morkaken?',
      options: ['IgG', 'IgM', 'IgE', 'IgA'],
      explanation: 'IgG er den vanligste antistoffklassen i blodet og er den eneste som krysser placenta til fosteret.',
    },
    {
      question: 'Hva bestemmer den konstante regionen av et antistoff?',
      options: ['Antistoffets funksjon og klasse', 'Hvilket antigen det binder', 'Antall bindingsseter', 'Cellens størrelse'],
      explanation: 'Den konstante regionen («stammen») er lik innen hver klasse og bestemmer antistoffets funksjon, mens den variable regionen gir spesifisitet.',
    },
  ],
  'biologi-1-10-3': [
    {
      question: 'Hva er hovedprinsippet bak en vaksine?',
      options: ['Den stimulerer immunforsvaret til å danne beskyttelse uten å gi sykdommen', 'Den dreper alle bakterier i kroppen', 'Den erstatter immunforsvaret', 'Den virker bare under selve sykdommen'],
      explanation: 'En vaksine «lurer» immunforsvaret til å danne antistoffer og hukommelsesceller uten at man blir syk.',
    },
    {
      question: 'Hvem regnes som «vaksinasjonens far»?',
      options: ['Edward Jenner', 'Alexander Fleming', 'Louis Pasteur', 'Robert Koch'],
      explanation: 'Edward Jenner viste i 1796 at kukopper ga beskyttelse mot kopper, og regnes som vaksinasjonens far.',
    },
    {
      question: 'Hva dannes i kroppen etter vaksinasjon som gir langtidsbeskyttelse?',
      options: ['Hukommelsesceller', 'Røde blodceller', 'Magesyre', 'Mer fettvev'],
      explanation: 'Vaksinen får kroppen til å danne hukommelsesceller, slik at den raskt kan bekjempe patogenet ved senere eksponering.',
    },
    {
      question: 'Hvorfra kommer ordet «vaksine»?',
      options: ['Fra latin «vacca» = ku', 'Fra gresk «virus»', 'Fra navnet Jenner', 'Fra latin «vita» = liv'],
      explanation: 'Ordet kommer fra latin «vacca» (ku), fordi Jenner brukte kukopper for å beskytte mot kopper.',
    },
    {
      question: 'Hva skjer ved en sekundærrespons etter vaksinasjon?',
      options: ['Immunforsvaret bekjemper patogenet raskt fordi det «husker» det', 'Kroppen reagerer langsommere enn første gang', 'Vaksinen mister all effekt', 'Patogenet blir sterkere'],
      explanation: 'Takket være hukommelsescellene gir en ny eksponering en rask og kraftig sekundærrespons som eliminerer patogenet.',
    },
  ],
  'biologi-1-10-4': [
    {
      question: 'Hva er en smittsom (infeksjons-) sykdom?',
      options: ['En sykdom forårsaket av patogener som kan spres mellom organismer', 'En arvelig sykdom', 'En livsstilssykdom', 'En sykdom som ikke kan overføres'],
      explanation: 'Smittsomme sykdommer forårsakes av patogener (virus, bakterier, sopp, parasitter) som kan spres fra person til person.',
    },
    {
      question: 'Hvilken behandling virker IKKE mot virussykdommer?',
      options: ['Antibiotika', 'Antivirale legemidler', 'Vaksiner som forebygging', 'Kroppens eget immunforsvar'],
      explanation: 'Antibiotika virker bare mot bakterier; mot virus brukes antivirale midler, vaksiner og immunforsvaret.',
    },
    {
      question: 'Hvilke av disse er encellede prokaryote patogener?',
      options: ['Bakterier', 'Virus', 'Parasittiske ormer', 'Protozoer'],
      explanation: 'Bakterier er encellede prokaryoter; virus er ikke-levende partikler, og protozoer og ormer er eukaryote.',
    },
    {
      question: 'Hva er det første trinnet i virusformering?',
      options: ['Adsorpsjon – viruset binder til en reseptor på vertscellen', 'Frigjøring av nye virus', 'Sammensetning av nye partikler', 'Replikasjon av genomet'],
      explanation: 'Virusformering starter med adsorpsjon, der viruset binder seg til en spesifikk reseptor på vertscellen.',
    },
    {
      question: 'Hva inneholder et virus av arvemateriale?',
      options: ['Enten DNA eller RNA, aldri begge', 'Alltid både DNA og RNA', 'Bare proteiner', 'Bare lipider'],
      explanation: 'Et virus har enten DNA eller RNA som arvemateriale, aldri begge samtidig.',
    },
  ],
  'biologi-1-10-5': [
    {
      question: 'Hvordan definerer WHO helse?',
      options: ['Fullstendig fysisk, psykisk og sosialt velvære', 'Bare fravær av sykdom', 'Bare god fysisk form', 'Fravær av smerte alene'],
      explanation: 'WHO definerer helse som «en tilstand av fullstendig fysisk, psykisk og sosialt velvære», ikke bare fravær av sykdom.',
    },
    {
      question: 'Hvilken av disse er en livsstilssykdom?',
      options: ['Type 2-diabetes', 'Influensa', 'Vannkopper', 'Tuberkulose'],
      explanation: 'Type 2-diabetes er en livsstilssykdom knyttet til kosthold og aktivitet, mens de andre er smittsomme sykdommer.',
    },
    {
      question: 'Hvilket makronæringsstoff har høyest energitetthet per gram?',
      options: ['Fett (9 kcal/g)', 'Karbohydrater (4 kcal/g)', 'Proteiner (4 kcal/g)', 'Fiber'],
      explanation: 'Fett gir ca. 9 kcal/g, mens karbohydrater og proteiner gir ca. 4 kcal/g.',
    },
    {
      question: 'Hva er hovedfunksjonen til proteiner i kostholdet?',
      options: ['Byggemateriale for muskler, enzymer og antistoffer', 'Hovedenergikilde', 'Isolasjon mot kulde', 'Transport av oksygen i lungene'],
      explanation: 'Proteiner består av aminosyrer og brukes som byggemateriale for muskler, enzymer, antistoffer og mer.',
    },
    {
      question: 'Hvilken type fett regnes som sunnest?',
      options: ['Umettet fett (fra fisk, nøtter og olje)', 'Mettet fett (fra animalske kilder)', 'Transfett', 'Herdet fett'],
      explanation: 'Umettet fett (fra fisk, nøtter og planteoljer) er sunnere enn mettet fett, og transfett bør unngås.',
    },
  ],
};

export default quizData_biologi_1;
