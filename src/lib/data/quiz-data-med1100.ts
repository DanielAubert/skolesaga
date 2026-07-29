import type { QuizQuestion } from './quiz-data';

const quizData_med1100: Record<string, QuizQuestion[]> = {
  'med1100-0-1': [
    {
      question: "Hvordan avsluttes MED1100 modul 1?",
      options: ["Med tre separate blokkeksamener som hver vurderes bestått eller ikke bestått", "Med én samlet eksamen der de tre fagområdene teller like mye hver", "Med to eksamener der den skriftlige delen teller dobbelt så mye som den digitale", "Med tre eksamener som veies sammen til én felles bokstavkarakter"],
      explanation: "Modulen har tre blokkeksamener med hvert sitt fagområde, format og hjelpemiddeloppsett, og hver av dem får sin egen avgjørelse. Alternativet om at de tre veies sammen til én karakter er nær, men galt på det avgjørende punktet: det finnes ingen sammenveiing, og derfor heller ingen kompensasjon mellom blokkene.",
    },
    {
      question: "Hva skjer hvis du består blokk 1 og blokk 3, men ikke blokk 2?",
      options: ["Blokk 2 må tas om igjen — de to andre resultatene hjelper deg ikke der", "Hele modulen må tas om igjen fra start, siden blokkene henger faglig sammen", "Modulen regnes som bestått, siden to av tre blokker er bestått", "Blokk 2 regnes som bestått dersom de to andre er tydelig sterke"],
      explanation: "Hver blokk får sin egen avgjørelse, og en sterk blokk kan ikke løfte en svak. Alternativet om at to av tre holder, forutsetter en sammenveiing som ikke finnes i denne vurderingsformen.",
    },
    {
      question: "Hvilke hjelpemidler er tillatt i blokk 1?",
      options: ["Enkel kalkulator, statistiske tabeller og en utdelt formelsamling", "Enkel kalkulator, men verken tabeller eller noen form for formelsamling", "Statistiske tabeller og pensumboka, men ingen kalkulator av noe slag", "Ingen hjelpemidler i det hele tatt, siden eksamen er digital i Inspera"],
      explanation: "Blokk 1 er den eneste blokken med tabeller og formelsamling, og det er nettopp derfor statistikkdelen tester bruk av formlene og ikke memorering av dem. Alternativet med bare kalkulator beskriver blokk 2, som har kalkulator og ingenting mer.",
    },
    {
      question: "Hvor lang er blokk 2, og hvordan er settet bygd opp?",
      options: ["Seks timer, med 9–12 hovedoppgaver merket A–I og vekttall som summerer til 100", "Fem timer, med fire seksjoner i fast rekkefølge og rundt 37–48 enkeltoppgaver i alt", "Seks timer, med en flervalgsbank på rundt 90–110 spørsmål der numrene hopper", "Fire timer, med tre hovedoppgaver der du velger den ene du vil besvare"],
      explanation: "Blokk 2 er den skriftlige seks-timersseksamenen med bokstavmerkede hovedoppgaver og oppgitte vekttall. Alternativet med fire seksjoner og 37–48 oppgaver beskriver blokk 1, som er en annen eksamen med et helt annet format.",
    },
    {
      question: "Hvordan er de fire seksjonene i blokk 1 vektet?",
      options: ["Humanbiologi, atferdsfag og samfunnsmedisin teller 20 prosent hver, statistikk 40", "Alle fire seksjonene teller nøyaktig 25 prosent hver av den samlede eksamenen i blokk 1", "Statistikk og samfunnsmedisin teller 30 prosent hver, de to andre 20 hver", "Humanbiologi teller 40 prosent, og de tre andre seksjonene teller 20 hver"],
      explanation: "Statistikk er dobbelt så tungt som hver av de tre andre seksjonene, og rekkefølgen på seksjonene ligger fast. Alternativet om at alle fire teller likt, undervurderer statistikkdelen med halvparten og gir feil prioritering i lesingen.",
    },
    {
      question: "Hvor i MED1100 finnes negativ retting, altså trekk for galt svar?",
      options: ["Bare i blokk 2, og bare på rutenettoppgavene der utsagn krysses av", "Bare i blokk 3, siden hele den blokken består av flervalgsspørsmål", "I blokk 1 og blokk 3, altså i alt som rettes automatisk av systemet", "I alle tre blokkene, men bare på oppgaver som rettes uten sensor"],
      explanation: "Negativ retting er begrenset til rutenettene i blokk 2, og det er derfor blankt lønner seg akkurat der. Alternativet om at blokk 3 har trekk, er den vanligste misforståelsen: der er det ingen minuspoeng, og man skal alltid svare.",
    },
    {
      question: "Hvorfor hopper oppgavenumrene i settene fra blokk 3?",
      options: ["Fordi hver kandidat trekker et delsett fra en større spørsmålsbank", "Fordi de vanskeligste spørsmålene er tatt ut av settet på forhånd", "Fordi nummereringen følger kapitlene i pensum og ikke oppgavene", "Fordi kandidatene får spørsmålene i tilfeldig rekkefølge på skjermen"],
      explanation: "Sprangene i nummereringen er sporet etter en bank som settet trekkes fra, og det betyr at de samme kjernespørsmålene gjentar seg. Alternativet om tilfeldig rekkefølge forklarer ikke hvorfor tall mangler helt — bare rekkefølgen ville endret seg, ikke hvilke numre som finnes.",
    },
    {
      question: "Hva kreves av et svar på en bildetolkningsoppgave i blokk 2?",
      options: ["Navnet på vevstypen pluss minst to kjennetegn ved farge eller form", "Navnet på vevstypen, siden gjenkjenningen er det oppgaven tester", "En tegning av vevet med de viktigste strukturene navngitt på norsk", "Navnet på vevstypen og hvilken funksjon vevet har i kroppen ellers"],
      explanation: "Formuleringen «begrunn svaret» går igjen, og begrunnelsen skal knytte navnet til det som faktisk er synlig. Alternativet med navn pluss funksjon svarer på noe annet enn det som ble spurt om: funksjonen begrunner ikke hvorfor akkurat dette bildet viser akkurat dette vevet.",
    },
    {
      question: "Hva betyr det når en oppgave i blokk 3 ber deg angi de to mest riktige?",
      options: ["At du skal krysse av nøyaktig to alternativer, verken ett eller tre", "At du skal krysse av minst to, og gjerne flere om du er i tvil", "At du skal rangere alternativene fra mest til minst riktig utsagn", "At du skal krysse av det ene beste, og det andre bare om du er sikker"],
      explanation: "Antallet oppgis alltid, og det er bindende: to betyr to. Alternativet om å krysse av minst to er nær, men fører til at kandidaten legger til et tredje kryss og dermed ikke løser oppgaven slik den er stilt.",
    },
    {
      question: "Hva betyr det når boka skriver at et tema er observert i «4 av 4 leste sittinger»?",
      options: ["At temaet var med hver gang det i det hele tatt var mulig å observere det", "At temaet var med i fire av de sju sittingene som finnes i arkivet totalt", "At temaet var med i fire sittinger og manglet i de fire påfølgende årene", "At temaet ble observert fire ganger i samme sitting, altså i fire spørsmål"],
      explanation: "Flere av blokk 3-filene inneholder bare deler av et sett, så nevneren er antall sittinger der temaet kunne observeres. Alternativet om fire av sju regner om til en nevner som ikke gjelder, og det er nettopp den omregningen boka aldri gjør.",
    },
  ],
  'med1100-0-2': [
    {
      question: "Du sitter med et rutenett i blokk 2 og er usikker på tre av rutene. Hva gjør du?",
      options: ["Lar de tre stå blanke, siden et galt kryss trekker like mye som et riktig gir", "Krysser av på alle tre, siden et forsøk aldri kan gjøre resultatet noe dårligere", "Krysser av på den ene du er minst usikker på, og lar de to andre stå blanke", "Krysser av på alle tre og markerer dem, slik at sensor ser at du var usikker"],
      explanation: "Blankt gir null, mens et galt kryss trekker fra det du allerede har tjent opp på oppgaven. Alternativet om å krysse av fordi et forsøk ikke kan skade, er selve feilen E20: det stemmer overalt ellers i modulen, men ikke her.",
    },
    {
      question: "Et rutenett har tre svaralternativer per felt, med 0,5 for riktig, minus 0,5 for galt og 0 for blankt. Hva er forventet uttelling av ett blindt gjett?",
      options: ["Rundt minus 0,17 poeng, siden du treffer i ett av tre tilfeller", "Null poeng, siden gevinsten og trekket er like store i kroner og øre", "Rundt pluss 0,17 poeng, siden nullgulvet fjerner nedsiden ved gjetting", "Rundt minus 0,50 poeng, siden et galt kryss koster en halv poengenhet"],
      explanation: "Regnestykket er en tredel av 0,5 minus to tredeler av 0,5, altså minus en sjettedel. Alternativet som sier null, gjelder bare når treffsannsynligheten er nøyaktig 50 prosent, og det er den ikke når feltet har tre valg.",
    },
    {
      question: "Hvorfor skal du alltid svare på et flervalgsspørsmål i blokk 1 og blokk 3?",
      options: ["Fordi et galt svar gir null der, akkurat som et blankt felt gjør", "Fordi sensor gir delpoeng for et gjett som ligger nær det riktige svaret", "Fordi ubesvarte spørsmål teller som feil og trekker fra sluttsummen", "Fordi antall besvarte spørsmål inngår i vurderingen av besvarelsen"],
      explanation: "Uten minuspoeng er et forsøk gratis, og et blindt kryss blant fire alternativer er verdt en firedel av et poeng i forventning. Alternativet om at ubesvarte teller som feil, er galt: de teller som null, og det er nettopp derfor du ikke har noe å tape.",
    },
    {
      question: "Hva betyr nullgulvet på en rutenettoppgave i blokk 2?",
      options: ["At laveste sum på hele oppgaven er 0, uansett hvor mange kryss som er gale", "At hver enkelt rute gir minst 0, slik at et galt kryss ikke trekker fra", "At oppgaven må gi minst 0,5 poeng dersom du har krysset av i én rute", "At de gale kryssene dine trekkes fra poengsummen din i de andre oppgavene"],
      explanation: "Gulvet virker på hele oppgaven, ikke på den enkelte ruta, og det er derfor det du risikerer, er begrenset til det du selv har tjent opp der. Alternativet om at hver rute gir minst null, ville fjernet den negative rettingen helt — og da ville regelen om blankt vært meningsløs.",
    },
    {
      question: "Hvilke ledd må være med i et fullstendig svar på en statistikkoppgave i blokk 1?",
      options: ["Parameteren definert i ord, hypotesene, forutsetningene, utregningen og tolkningen", "Teststørrelsen, den kritiske verdien og konklusjonen om nullhypotesen skal forkastes", "Formelen, innsettingen med tall og sluttsvaret oppgitt med riktig antall siffer", "Hypotesene, valget av test og en vurdering av om studien var stor nok"],
      explanation: "Føringen er selve svaret i blokk 1, og alle seks stegene rettes. Alternativet som stopper ved konklusjonen om nullhypotesen, mangler tolkningen i klartekst, og det er den som skiller et teknisk resultat fra et ferdig svar.",
    },
    {
      question: "Hva er en klartekst-tolkning i en statistikkoppgave?",
      options: ["Setningen på vanlig norsk om hva tallet betyr for spørsmålet som ble stilt", "Den tekniske avgjørelsen om nullhypotesen skal forkastes eller beholdes", "Begrunnelsen for hvorfor du valgte akkurat denne testen framfor en annen", "Forklaringen av hvilke forutsetninger metoden hviler på i akkurat dette tilfellet"],
      explanation: "Tolkningen oversetter det statistiske resultatet tilbake til virkeligheten oppgaven handlet om. Alternativet om avgjørelsen på nullhypotesen er nær, men er leddet foran: det er en teknisk konklusjon, ikke en oversettelse.",
    },
    {
      question: "En oppgave i blokk 2 sier «forklar hvorfor». Hva kreves da utover en beskrivelse?",
      options: ["Årsaken bak, altså mekanismen som gjør at det som skjer, skjer", "En oppramsing av de sentrale molekylene som deltar i prosessen", "En sammenligning med en annen prosess som ligner på denne", "En vurdering av hvor sikkert man kan si at prosessen forløper slik"],
      explanation: "Spørreordtrappen går fra oppramsing via beskrivelse til forklaring, og «forklar» ligger et trinn over «beskriv». Alternativet med oppramsing hører til det laveste trinnet, og å levere det på en forklaringsoppgave er feilkode E12.",
    },
    {
      question: "Hva er feilkode E12?",
      options: ["Å svare på et lavere nivå enn spørreordet ber om, eller å droppe tolkningen", "Å gjette på et rutenett i blokk 2 der galt svar trekker like mye som riktig gir", "Å oppgi et sluttsvar uten å vise utregningen som ledet fram til det", "Å bruke den faste kritiske verdien der tabellverdien for små utvalg kreves"],
      explanation: "E12 handler om nivået på svaret: en beskrivelse der det ble bedt om en forklaring, eller et testresultat uten tolkningssetningen. Alternativet om sluttsvar uten utregning er E22, som rammer dokumentasjonen og ikke nivået.",
    },
    {
      question: "Hvorfor hjelper regelen om at det ikke trekkes for følgefeil, bare den som fører utregningen sin?",
      options: ["Fordi sensor bare kan se at feilen var en følgefeil, hvis metoden står der", "Fordi regelen kun gjelder oppgaver der utregningen eksplisitt er etterspurt", "Fordi følgefeil defineres som feil man har markert selv i besvarelsen", "Fordi regelen bare gjelder i blokk 2, der besvarelsene rettes for hånd"],
      explanation: "Delpoeng kan bare gis for arbeid som er synlig på arket. Alternativet om at regelen er begrenset til blokk 2, er galt: den samme velviljen finnes i statistikkdelen i blokk 1, men den forutsetter der som her at føringen er skrevet ned.",
    },
    {
      question: "En oppgave ber deg navngi en vevstype og begrunne svaret. Du skriver bare navnet, og navnet er riktig. Hva skjer?",
      options: ["Du mister uttelling, siden begrunnelsen er halve leveransen i oppgaven", "Du får full uttelling, siden vevstypen du oppga faktisk er den riktige", "Du mister alt, siden en besvarelse uten begrunnelse regnes som ubesvart", "Du får uttelling dersom navnet er skrevet med korrekt latinsk endelse"],
      explanation: "Spørreordet «begrunn» krever at navnet knyttes til kjennetegn ved farge og form, og navn uten begrunnelse er feilkode E21. Alternativet om full uttelling for riktig navn overser at oppgaven ba om to ting, ikke én.",
    },
    {
      question: "Du står igjen med to alternativer i blokk 3: ett generelt utsagn og ett presist utsagn med en betingelse i seg. Begge virker riktige. Hva gjør du?",
      options: ["Sjekker om det generelle utsagnet alltid holder, og velger det mest presise", "Velger det generelle utsagnet, siden det er vanskeligst å motbevise", "Velger det utsagnet som er formulert med færrest forbehold i teksten", "Krysser av på begge to, siden begge kan forsvares som riktige svar"],
      explanation: "Formuleringen «mest korrekt» betyr at flere alternativer er delvis sanne med vilje, og det som holder alltid, er svaret. Alternativet om å velge det generelle fordi det er vanskelig å motbevise, er nettopp feilkode E24.",
    },
    {
      question: "På en tabell med to rader og to kolonner bruker én kandidat en kji-kvadrattest mot 3,84 og en annen en test på andelsforskjell mot 1,96. Hva gjelder?",
      options: ["Begge veier godtas, og de henger sammen fordi 1,96 opphøyd i andre er 3,84", "Bare kji-kvadrattesten godtas, siden tabellen har to rader og to kolonner", "Bare testen på andelsforskjell godtas, siden den gir en tolkbar forskjell", "Begge veier godtas, men de gir systematisk ulike konklusjoner ved små utvalg"],
      explanation: "Veiledningene i blokk 1-settene godtar begge veier, og de to teststørrelsene er knyttet sammen ved at den ene er kvadratet av den andre. Alternativet om at de gir ulike konklusjoner, er galt nettopp på grunn av den sammenhengen: de er to skrivemåter for samme sammenligning.",
    },
  ],
  'med1100-1-1': [
    {
      question: "Hva er det avgjørende kjennetegnet på en eukaryot celle?",
      options: ["Arvestoffet ligger i en membrankledd cellekjerne, og cellen har membrankledde organeller", "Arvestoffet ligger fritt i cytoplasma, vanligvis som ett ringformet kromosom uten kjernemembran", "Cellen har en cellevegg av peptidoglykan utenfor selve cellemembranen", "Cellen mangler ribosomer og bygger proteinene sine i cellemembranen"],
      explanation: "Eukaryot betyr «med kjerne»: arvestoffet er innelukket i en membrankledd kjerne, og cytoplasma er delt i membrankledde rom. Alternativet om fritt DNA som ringformet kromosom beskriver en prokaryot celle, og peptidoglykanveggen hører også til bakteriene. Begge celletyper har ribosomer, så det siste er galt for begge.",
    },
    {
      question: "Hvilken påstand om bakterieceller er riktig?",
      options: ["De har både DNA og ribosomer, men mangler kjerne og membrankledde organeller", "De har både kjerne og ribosomer, men mangler DNA i ringformet utgave", "De har både DNA og mitokondrier, men mangler kjerne og cellevegg", "De har både kjerne og mitokondrier, men mangler ribosomer og cellemembran"],
      explanation: "Bakterier er prokaryote: de har arvestoff og et proteinproduserende apparat, men verken cellekjerne eller membrankledde organeller. Alternativet som gir dem mitokondrier bommer, for mitokondriet er nettopp en membrankledd organell — og etter endosymbioseteorien stammer det fra en oppslukt bakterie.",
    },
    {
      question: "Hva forklarer endosymbioseteorien?",
      options: ["At mitokondriene stammer fra en bakterie som en tidlig eukaryot celle slukte og beholdt", "At cellekjernen ble dannet ved at cellemembranen foldet seg innover rundt arvestoffet", "At bakteriene mistet kjernen sin da de tilpasset seg et liv inne i andre celler", "At mitokondriene dannes på nytt av endoplasmatisk retikulum ved hver celledeling"],
      explanation: "Teorien handler om opphavet til mitokondriene (og kloroplastene): en fritt levende bakterie ble slukt uten å bli fordøyd, og ble værende som organell. Alternativet om at bakterier har mistet en kjerne snur historien på hodet — prokaryote celler har aldri hatt kjerne.",
    },
    {
      question: "Hvilket funn gir sterkest støtte til endosymbioseteorien?",
      options: ["Mitokondriene har eget sirkulært DNA, egne ribosomer og en dobbeltmembran", "Mitokondriene lager mesteparten av cellens ATP gjennom oksidativ fosforylering", "Mitokondriene ligger tettest i celler med høyt energiforbruk, som hjertemuskel", "Mitokondriene finnes i alle menneskeceller unntatt de modne røde blodcellene"],
      explanation: "Eget arvestoff, egne bakterielignende ribosomer og to membraner utenpå hverandre er trekk en organell bygd av vertscellen selv ikke ville hatt — de peker direkte på et bakterielt opphav. De andre alternativene er sanne, men beskriver hva mitokondriet gjør eller hvor det finnes, og sier ingenting om hvor det kommer fra.",
    },
    {
      question: "Hvor mange kromosomer har en vanlig somatisk celle hos mennesket?",
      options: ["46 kromosomer, ordnet som 23 par", "23 kromosomer, ordnet som 23 enkle", "92 kromosomer, ordnet som 46 par", "44 kromosomer, ordnet som 22 par"],
      explanation: "Somatiske celler er diploide: to komplette sett à 23, altså 46 kromosomer. Tallet 23 gjelder gametene, 92 er antall kromatider etter DNA-dobling (ikke antall kromosomer), og 44 teller bare de 22 parene som ikke er kjønnskromosomer.",
    },
    {
      question: "En moden human eggcelle er ...",
      options: ["haploid, med 23 kromosomer", "diploid, med 46 kromosomer", "haploid, med 46 kromosomer", "diploid, med 23 kromosompar"],
      explanation: "Eggcellen er en gamet, og gametene er de eneste haploide cellene i kroppen: ett sett på 23 kromosomer. Alternativene som gjør den diploid, forveksler eggcellen med zygoten, som først blir diploid etter befruktningen.",
    },
    {
      question: "Hva skjer i meiose I?",
      options: ["Homologe kromosomer skilles, og kromosomtallet halveres fra 46 til 23", "Søsterkromatidene skilles, og kromosomtallet halveres fra 46 til 23", "Homologe kromosomer skilles, mens kromosomtallet holder seg uendret på 46", "Søsterkromatidene skilles, mens kromosomtallet holder seg uendret på 46"],
      explanation: "Meiose I er reduksjonsdelingen: homologene — mors og fars utgave av hvert kromosom — trekkes fra hverandre, og hver dattercelle får 23 kromosomer. Alternativene som legger separasjonen av søsterkromatider hit, beskriver meiose II, som ikke endrer kromosomtallet.",
    },
    {
      question: "Hva skilles i meiose II?",
      options: ["Søsterkromatidene, slik at hvert kromosom går fra to kromatider til én", "Homologe kromosomer, slik at kromosomtallet halveres en gang til", "Søsterkromatidene, slik at kromosomtallet halveres fra 23 til rundt 12", "Homologe kromosomer, slik at hvert kromosom får dobbelt DNA-mengde"],
      explanation: "Meiose II ligner en vanlig mitose: søsterkromatidene trekkes fra hverandre, uten ny DNA-dobling foran. Kromosomtallet er allerede halvert i meiose I og endres ikke her — det er DNA-mengden per celle som halveres.",
    },
    {
      question: "Hvor mange celler kommer ut av én fullstendig meiose, og hva er kromosomtallet deres?",
      options: ["Fire celler med 23 kromosomer hver", "To celler med 23 kromosomer hver", "Fire celler med 46 kromosomer hver", "To celler med 46 kromosomer hver"],
      explanation: "To delinger etter én eneste DNA-dobling gir fire celler med halvert kromosomtall. Alternativet med to celler stopper etter meiose I, mens alternativene med 46 kromosomer beskriver mitose — der kromosomtallet er uendret.",
    },
    {
      question: "Hva er hovedforskjellen mellom mitose og meiose?",
      options: ["Mitose gir to genetisk like diploide celler, meiose gir fire ulike haploide celler", "Mitose gir fire genetisk like haploide celler, meiose gir to ulike diploide celler", "Mitose gir to genetisk ulike haploide celler, meiose gir fire like diploide celler", "Mitose gir fire genetisk ulike diploide celler, meiose gir to like haploide celler"],
      explanation: "Mitosen er kopieringsdelingen: én deling etter én dobling, uendret kromosomtall og like datterceller. Meiosen har to delinger etter én dobling, halverer kromosomtallet og gir fire genetisk forskjellige celler. De tre andre alternativene bytter om på antallet celler, ploiditeten eller likheten.",
    },
    {
      question: "Når og mellom hvilke strukturer skjer overkryssing?",
      options: ["I meiose I, mellom homologe kromosomer som ligger parvis", "I meiose II, mellom søsterkromatidene på samme kromosom", "I mitosen, mellom homologe kromosomer i metafaseplaten", "I S-fasen, mellom de to DNA-trådene i dobbeltheliksen"],
      explanation: "Overkryssing forutsetter at homologene ligger parvis, og det skjer bare i meiose I. Alternativet om søsterkromatider bommer fordi de er identiske kopier — en utveksling mellom dem ville ikke gitt ny kombinasjon, og det er nettopp derfor mitosen gir like datterceller.",
    },
    {
      question: "Hvorfor er zygoten diploid?",
      options: ["Den har fått 23 kromosomer fra hver av de to haploide gametene", "Den har doblet DNA-et sitt i S-fasen rett etter at befruktningen skjedde", "Den har fått 46 kromosomer fra eggcellen og ingen fra sædcellen", "Den har gjennomgått en ekstra mitose før den første egentlige delingen"],
      explanation: "Befruktningen legger sammen to haploide sett: 23 fra eggcellen og 23 fra sædcellen gir 46. En DNA-dobling ville økt DNA-mengden uten å endre kromosomtallet, og den forklarer derfor ikke ploiditeten.",
    },
    {
      question: "Hvorfor halveres kromosomtallet i meiosen, men ikke i mitosen?",
      options: ["Meiosen har to delinger etter én DNA-dobling, mitosen har én deling etter én dobling", "Meiosen har én deling etter én DNA-dobling, mitosen har to delinger etter to doblinger", "Meiosen skjer helt uten DNA-dobling, mens mitosen alltid dobler DNA-et først", "Meiosen dobler DNA-et to ganger, mens mitosen dobler DNA-et bare én gang"],
      explanation: "Ubalansen mellom antall doblinger og antall delinger er hele forklaringen: to delinger fordelt på ett doblet DNA-sett gir halvert kromosomtall per celle. Alternativet som sier at meiosen skjer uten DNA-dobling er galt — doblingen skjer i S-fasen foran meiose I.",
    },
    {
      question: "En celle har nettopp doblet DNA-et sitt i S-fasen. Hvor mange kromosomer og hvor mange kromatider har den?",
      options: ["46 kromosomer og 92 kromatider", "92 kromosomer og 92 kromatider", "92 kromosomer og 46 kromatider", "46 kromosomer og 46 kromatider"],
      explanation: "DNA-doblingen gir hvert kromosom to søsterkromatider, men lager ingen nye kromosomer: antallet sentromerer er fortsatt 46, mens kromatidtallet er doblet til 92. Alternativet med 92 kromosomer teller kromatider som kromosomer, som er den vanligste feilen her.",
    },
  ],
  'med1100-1-2': [
    {
      question: "Hvordan regnes minuttvolumet ut?",
      options: ["Slagvolum ganget med hjertefrekvens", "Slagvolum delt på hjertefrekvens", "Slagvolum pluss hjertefrekvens", "Hjertefrekvens delt på slagvolum"],
      explanation: "Hvert slag sender ut en porsjon på SV milliliter, og det kommer HF slike porsjoner i minuttet — mengde per slag ganget med antall slag gir mengde per minutt. Alternativet med divisjon gir en størrelse med enheten mL per slag i annen potens, som ikke svarer til noen fysiologisk mengde.",
    },
    {
      question: "En frisk voksen har et slagvolum på 70 mL og en hjertefrekvens på 70 slag/min. Hva er minuttvolumet?",
      options: ["4,9 L/min", "0,49 L/min", "49 L/min", "1,0 L/min"],
      explanation: "70 mL ganget med 70 slag/min gir 4900 mL/min, som er 4,9 L/min etter deling på 1000. De to andre tallverdiene svarer til å dele eller gange med feil tierpotens i konverteringen mellom milliliter og liter.",
    },
    {
      question: "Minuttvolumet er 6,0 L/min og hjertefrekvensen 75 slag/min. Hvor stort er slagvolumet?",
      options: ["80 mL", "8 mL", "450 mL", "0,08 mL"],
      explanation: "Formelen snus til SV = MV/HF, og 6000 mL/min delt på 75 slag/min gir 80 mL. Verdien 450 kommer av å gange i stedet for å dele, mens de to små verdiene kommer av at konverteringen fra liter til milliliter er utelatt.",
    },
    {
      question: "Hva skjer med hjertefrekvensen når slagvolumet faller, dersom minuttvolumet skal holdes uendret?",
      options: ["Den stiger, fordi produktet av de to må være det samme", "Den synker, fordi hjertet sparer krefter når slagvolumet faller", "Den holder seg uendret, fordi den styres uavhengig av slagvolumet", "Den stiger først og faller så tilbake til utgangsverdien i løpet av kort tid"],
      explanation: "Minuttvolumet er et produkt av de to størrelsene, så faller den ene, må den andre stige for at produktet skal holde seg. Alternativet om uavhengig styring bommer på selve poenget: frekvensen er nettopp den størrelsen nervesystemet kan justere raskest når slagvolumet svikter.",
    },
    {
      question: "Hvorfor faller slagvolumet ved et blodtap?",
      options: ["Hjertekammeret fylles dårligere fordi det er mindre blod i kretsløpet", "Hjertemuskelen trekker seg sammen langsommere fordi den mangler oksygen", "Hjerteklaffene lukker seg ufullstendig når blodvolumet i kretsløpet synker", "Hjertefrekvensen stiger, og hvert enkelt slag blir derfor svakere enn før"],
      explanation: "Slagvolumet henger sammen med hvor godt kammeret fylles før sammentrekningen, og mindre blod i kretsløpet gir dårligere fylling. Alternativet som gjør frekvensøkningen til årsaken snur rekkefølgen: frekvensen stiger som svar på det reduserte slagvolumet, ikke omvendt.",
    },
    {
      question: "Hva er normal pH i arterielt blod?",
      options: ["7,35–7,45", "7,00–7,10", "6,80–7,00", "7,60–7,80"],
      explanation: "Blodet holdes i et påfallende smalt, svakt basisk vindu mellom 7,35 og 7,45. Alternativet rundt 7,00 er den nøytrale verdien for rent vann og forveksler nøytralitet med normal blod-pH.",
    },
    {
      question: "Hvilken likevekt utgjør blodets viktigste buffersystem?",
      options: ["CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻", "O₂ + H₂O ⇌ H₂O₂ ⇌ H⁺ + HO₂⁻", "CO₂ + O₂ ⇌ CO₃ ⇌ H⁺ + CO₃²⁻", "H₂O ⇌ H⁺ + OH⁻ i likevekt med CO₂"],
      explanation: "Karbondioksid og vann danner karbonsyre, som avgir et hydrogenion og etterlater bikarbonat — det er bikarbonatbufferen. Alternativet som bygger på oksygen bommer fordi oksygen ikke danner syre i vann; det er nettopp CO₂ som gjør det, og derfor pustingen kan styre pH.",
    },
    {
      question: "Hva skjer med pH ved hyperventilering hos en ellers frisk person?",
      options: ["pH stiger, fordi CO₂ synker og hydrogenionkonsentrasjonen dermed synker", "pH synker, fordi CO₂ synker og hydrogenionkonsentrasjonen dermed stiger", "pH stiger, fordi CO₂ stiger og hydrogenionkonsentrasjonen dermed synker", "pH synker, fordi CO₂ stiger og hydrogenionkonsentrasjonen dermed stiger"],
      explanation: "Hyperventilering fjerner CO₂, likevekten trekkes mot venstre, H⁺ forbrukes og pH stiger. Alternativet med samme premiss men motsatt pH-retning er den klassiske fellen: minustegnet i pH-definisjonen gjør at færre hydrogenioner gir høyere pH, ikke lavere.",
    },
    {
      question: "Hva heter tilstanden der pH stiger fordi pustingen har fjernet for mye CO₂?",
      options: ["Respiratorisk alkalose", "Respiratorisk acidose", "Metabolsk acidose", "Metabolsk alkalose"],
      explanation: "Førsteleddet sier hvor årsaken sitter — pustingen — og andreleddet sier hvilken vei pH går. Alternativet respiratorisk acidose har riktig årsakssted, men motsatt pH-retning, og hører til hypoventilering.",
    },
    {
      question: "Hva skjer med pH i blodet dersom en frisk person puster grunt og langsomt over tid?",
      options: ["pH synker, fordi CO₂ hoper seg opp og danner flere hydrogenioner", "pH stiger, fordi CO₂ hoper seg opp og binder flere hydrogenioner", "pH synker, fordi bikarbonat hoper seg opp og trekker likevekten mot venstre", "pH holder seg uendret, fordi nyrene retter opp endringen i løpet av sekunder"],
      explanation: "Mindre utlufting enn produksjon gir stigende CO₂, likevekten forskyves mot høyre, H⁺ stiger og pH synker — respiratorisk acidose. Alternativet om nyrene bommer på tidsskalaen: nyrenes bidrag til syre-base-reguleringen virker over timer og døgn, ikke sekunder.",
    },
    {
      question: "Hvordan fraktes den største delen av karbondioksidet fra vevene til lungene?",
      options: ["Som bikarbonat oppløst i plasma", "Som fritt CO₂ fysisk oppløst i plasma", "Bundet til jernatomet i hemoglobins hemgruppe", "Bundet til albumin og andre plasmaproteiner"],
      explanation: "CO₂ omdannes til karbonsyre og videre til bikarbonat, og det er som bikarbonat den klart største andelen fraktes. Alternativet om jernatomet forveksler gassene: oksygen bindes til jernet, mens den delen av CO₂-et som fraktes på hemoglobin, bindes et annet sted på proteinet.",
    },
    {
      question: "Hvorfor gir en høyere hydrogenionkonsentrasjon lavere pH?",
      options: ["Fordi pH er definert som den negative logaritmen til hydrogenionkonsentrasjonen", "Fordi hydrogenioner bindes til bikarbonat og forsvinner ut av likevekten", "Fordi pH måler konsentrasjonen av hydroksidioner og ikke av hydrogenioner", "Fordi logaritmen til et tall mellom null og én alltid er et positivt tall"],
      explanation: "Minustegnet i definisjonen snur skalaen: dobles hydrogenionkonsentrasjonen, går pH ned, ikke opp. Alternativet om hydroksidioner beskriver pOH, som er en annen skala enn den blodgassverdiene oppgis i.",
    },
    {
      question: "En frisk voksen har et minuttvolum på 5,4 L/min og et slagvolum på 90 mL. Hva er hjertefrekvensen?",
      options: ["60 slag/min", "6 slag/min", "486 slag/min", "600 slag/min"],
      explanation: "HF = MV/SV, og 5400 mL/min delt på 90 mL gir 60 slag/min, som er et vanlig hvilenivå. De tre andre verdiene svarer til å gange i stedet for å dele, eller til å hoppe over konverteringen fra liter til milliliter.",
    },
    {
      question: "Hva gjør en buffer i blodet?",
      options: ["Demper pH-endringer ved å ta opp eller avgi hydrogenioner", "Hindrer pH-endringer helt ved å binde alle frie hydrogenioner", "Fjerner karbondioksid fra blodet før det når fram til lungene", "Holder hydrogenionkonsentrasjonen konstant ved å skille ut syre i urinen"],
      explanation: "En buffer bremser utslaget av en syre- eller basetilførsel, men opphever det ikke — den reagerer nettopp på at konsentrasjonen allerede har begynt å endre seg. Alternativet om fullstendig hindring er derfor for sterkt: kunne bufferen det, ville pH aldri endret seg i det hele tatt.",
    },
  ],
  'med1100-1-3': [
    {
      question: "Hva er nefronets tre grovprosesser, i riktig rekkefølge?",
      options: ["Filtrasjon, reabsorpsjon, sekresjon", "Sekresjon, filtrasjon, reabsorpsjon", "Reabsorpsjon, sekresjon, filtrasjon", "Filtrasjon, sekresjon, reabsorpsjon"],
      explanation: "Nyren filtrerer først usortert, henter deretter tilbake det kroppen trenger, og finjusterer til slutt ved å skille ut enkelte stoffer i tubulus. Alternativet som setter sekresjon før reabsorpsjon snur finjusteringen og hovedtrinnet, og gir en rekkefølge der det meste av vannet ikke er hentet tilbake ennå.",
    },
    {
      question: "I hvilken retning går reabsorpsjonen i nefronet?",
      options: ["Fra tubulusvæsken og tilbake til blodet", "Fra blodet og inn i tubulusvæsken", "Fra tubulusvæsken og videre til samlerøret", "Fra blodet og ut i Bowmans kapsel"],
      explanation: "Forstavelsen «re-» betyr tilbake: stoffer som er filtrert ut, hentes tilbake til blodet. Alternativet som går fra blod til tubulus beskriver sekresjon, og forvekslingen av disse to retningene er den vanligste feilen i nyreoppgaver.",
    },
    {
      question: "Hva skjer med urinen når ADH-utskillelsen øker?",
      options: ["Urinmengden synker og urinen blir mer konsentrert", "Urinmengden øker og urinen blir mer konsentrert", "Urinmengden synker og urinen blir mer fortynnet", "Urinmengden øker og urinen blir mer fortynnet"],
      explanation: "ADH er antidiuretisk hormon — det motvirker urinproduksjon ved å hente vann tilbake til blodet, slik at det blir mindre væske rundt de samme avfallsstoffene. Alternativene der urinmengden øker, leser navnet på hormonet motsatt vei.",
    },
    {
      question: "Hvor i nefronet virker ADH?",
      options: ["I samlerøret", "I glomerulus", "I Bowmans kapsel", "I nyrebekkenet"],
      explanation: "Reseptorene for ADH sitter på cellene i samlerøret, altså helt sist i nefronets vei, og det er der finjusteringen av vannmengden gjøres. Glomerulus er stedet for filtrasjonen, som ADH ikke påvirker.",
    },
    {
      question: "Hva er en akvaporin?",
      options: ["En vannkanal i cellemembranen", "En natriumpumpe i cellemembranen", "Et hormon som skilles ut fra nyrebarken", "Et enzym som spalter vann i tubulus"],
      explanation: "Akvaporinet er et proteinrør som slipper vannmolekyler gjennom membranen, og antallet i membranen er nettopp det ADH regulerer. Alternativet om et hormon forveksler kanalen med signalet som styrer den.",
    },
    {
      question: "Hvilken celletype danner myelin i sentralnervesystemet?",
      options: ["Oligodendrocytt", "Schwann-celle", "Astrocytt (stjernecelle)", "Mikrogliacelle"],
      explanation: "Oligodendrocytten strekker ut flere utløpere og myeliniserer biter av flere aksoner i hjerne og ryggmarg. Schwann-cellen gjør samme jobb, men i det perifere nervesystemet — det er nettopp denne ombyttingen distraktorene i blokk 1 er bygd rundt.",
    },
    {
      question: "Hvilken celletype danner myelin rundt aksonene i en nerve i låret?",
      options: ["Schwann-celle", "Oligodendrocytt", "Astrocytt", "Nervecelle"],
      explanation: "En nerve i låret ligger utenfor hjerne og ryggmarg og hører dermed til det perifere nervesystemet, der Schwann-cellene myeliniserer. Oligodendrocytten hører til sentralnervesystemet, så plasseringen av strukturen avgjør svaret.",
    },
    {
      question: "Hva er astrocyttenes viktigste oppgaver?",
      options: ["Å støtte nervecellene og bidra til blod-hjerne-barrieren", "Å danne myelin rundt aksonene i sentralnervesystemet", "Å lede aksjonspotensialer videre mellom to nerveceller", "Å rydde opp i skadet vev som nervesystemets immunceller"],
      explanation: "Astrocyttene støtter nervecellene, holder orden på ionemiljøet og legger utløpere inntil hjernens blodkar, der de bidrar til barrieren. Alternativet om opprydding beskriver mikroglia, som er den gliacelletypen som har immunfunksjonen.",
    },
    {
      question: "Hvilket ion strømmer hvilken vei under depolariseringen i et aksjonspotensial?",
      options: ["Na⁺ strømmer inn i cellen", "K⁺ strømmer ut av cellen", "Na⁺ strømmer ut av cellen", "K⁺ strømmer inn i cellen"],
      explanation: "Natrium finnes i høyest konsentrasjon utenfor cellen, så når natriumkanalene åpnes, strømmer Na⁺ innover og gjør innsiden mindre negativ. Alternativet om at K⁺ strømmer ut beskriver repolariseringen, altså fasen etter.",
    },
    {
      question: "Hva skjer under repolariseringen?",
      options: ["K⁺ strømmer ut, og innsiden blir negativ igjen", "Na⁺ strømmer inn, og innsiden blir negativ igjen", "K⁺ strømmer inn, og innsiden blir mindre negativ", "Na⁺ strømmer ut, og innsiden blir mindre negativ"],
      explanation: "Kalium finnes i høyest konsentrasjon inne i cellen, så når kaliumkanalene åpnes, strømmer K⁺ utover, og tapet av positiv ladning gjenoppretter den negative innsiden. Alternativene som lar Na⁺ stå for repolariseringen bytter om på de to fasene.",
    },
    {
      question: "Hvorfor leder et myelinisert akson raskere enn et umyelinisert akson av samme tykkelse?",
      options: ["Aksjonspotensialet dannes bare i Ranviers innsnøringer og hopper mellom dem", "Aksjonspotensialet dannes i hvert punkt langs membranen og forsterkes av myelinet", "Myelinet leder selv den elektriske strømmen raskere enn aksonmembranen gjør", "Myelinet øker mengden natriumioner utenfor aksonet og gir dermed større utslag"],
      explanation: "Isolasjonen gjør at ionekanalene bare slipper til i lukene mellom skjedene, så signalet dannes bare der og hopper videre — saltatorisk ledning. Alternativet om at myelinet selv leder strøm bommer: myelinet isolerer, det leder ikke.",
    },
    {
      question: "Hva heter lukene i myelinskjeden der aksonmembranen ligger bar?",
      options: ["Ranviers innsnøringer", "Bowmans kapsler", "Golgi-apparatets blærer", "Nissls granula"],
      explanation: "Ranviers innsnøringer er de umyeliniserte lukene mellom to myelinskjeder, og det er bare der aksjonspotensialet kan dannes. Bowmans kapsel hører til nyrelegemet og har ingenting med nervevev å gjøre.",
    },
    {
      question: "Hva er hovedfunksjonen til blod-hjerne-barrieren?",
      options: ["Å bestemme hvilke stoffer i blodet som slipper inn i hjernevevet", "Å hindre at hjernens egne signalstoffer lekker ut i blodbanen", "Å øke blodgjennomstrømningen i hjernen når aktiviteten stiger", "Å lede aksjonspotensialer mellom hjernens ulike deler raskere"],
      explanation: "Barrieren skjermer hjernevevet mot svingninger og fremmedstoffer i blodet ved å slippe gjennom bare et utvalg molekyler. Alternativet om økt blodgjennomstrømning beskriver en helt annen regulering, som ikke er det barrieren gjør.",
    },
    {
      question: "Hva er sekresjon i nefronet?",
      options: ["Stoffer skilles aktivt ut fra blodet og inn i tubulusvæsken", "Stoffer hentes aktivt tilbake fra tubulusvæsken og inn i blodet", "Væske presses ut av glomerulus og over i Bowmans kapsel", "Vann trekkes ut av samlerøret ved hjelp av akvaporiner"],
      explanation: "Sekresjonen er nyrens finjustering: den lar kroppen kvitte seg med stoffer som ikke ble filtrert ut i første omgang, og retningen er fra blod til tubulus. Alternativet med motsatt retning beskriver reabsorpsjonen, som er det trinnet sekresjonen oftest forveksles med.",
    },
  ],
  'med1100-1-4': [
    {
      question: "Hva gjør gallen i fordøyelsen?",
      options: ["Emulgerer fettet, slik at lipasen får større angrepsflate", "Spalter fettet til frie fettsyrer og monoglyserider i tarmen", "Nøytraliserer magesyren før fettet når fram til tynntarmen", "Transporterer fettsyrene gjennom tarmveggen og inn i blodet"],
      explanation: "Gallen inneholder ingen enzymer: den deler store fettdråper i mange små, slik at den samlede overflaten mangedobles. Alternativet der gallen spalter fettet, gir den lipasens rolle — det er den vanligste feilen i fordøyelsesoppgaver.",
    },
    {
      question: "Hvilket organ produserer gallen, og hvilket lagrer den?",
      options: ["Leveren produserer, galleblæren lagrer", "Galleblæren produserer, leveren lagrer", "Bukspyttkjertelen produserer, leveren lagrer", "Leveren produserer, bukspyttkjertelen lagrer"],
      explanation: "Leveren lager galle løpende, mens galleblæren lagrer og konsentrerer den mellom måltidene. Alternativet som gjør galleblæren til produsent snur arbeidsdelingen: blæren er et lager, ikke en fabrikk.",
    },
    {
      question: "Hva menes med at pankreas har en eksokrin del?",
      options: ["Den skiller ut fordøyelsesenzymer gjennom en gang til tynntarmen", "Den skiller ut insulin og glukagon direkte til blodbanen", "Den skiller ut galle gjennom en gang til tolvfingertarmen", "Den skiller ut hormoner som virker tilbake på pankreas selv"],
      explanation: "Eksokrin betyr utskillelse gjennom en gang til en overflate eller et hulrom, og pankreas' eksokrine del leverer enzymer til tarmen. Alternativet med insulin og glukagon beskriver den endokrine delen, som skiller ut til blodet — pankreas er begge deler.",
    },
    {
      question: "Hvordan aktiveres pepsinogen til pepsin?",
      options: ["Av magesyren i magesekken", "Av galle fra galleblæren", "Av lipase fra bukspyttkjertelen", "Av insulin fra pankreas"],
      explanation: "Pepsinogen skilles ut i inaktiv form og aktiveres av den sure magesaften, slik at enzymet først begynner å spalte protein etter at det har forlatt cellen. Alternativet med galle bommer fordi gallen virker i tynntarmen og ikke aktiverer enzymer.",
    },
    {
      question: "Hvilken prosess er katabol?",
      options: ["Leveren bryter ned glykogen til glukose", "Leveren setter sammen glukose til glykogen", "Muskelceller bygger nytt protein av aminosyrer", "Fettvev lagrer frie fettsyrer som triglyserider"],
      explanation: "Katabolisme bryter store molekyler ned til mindre og frigjør energi, og nedbryting av glykogen til glukose er nettopp det. De tre andre går motsatt vei — små enheter settes sammen til større — og er dermed anabole.",
    },
    {
      question: "Hvilket hormon dominerer i den postabsorptive fasen, altså mellom måltidene?",
      options: ["Glukagon, som får leveren til å frigjøre glukose", "Insulin, som får cellene til å ta opp glukose", "Glukagon, som får cellene til å ta opp glukose", "Insulin, som får leveren til å frigjøre glukose"],
      explanation: "Når det ikke lenger kommer glukose fra tarmen, skilles glukagon ut, og leveren frigjør glukose til blodet. Alternativet som gir glukagon insulinets virkning har riktig hormon, men feil effekt — oppgaven krever at paret er riktig satt sammen.",
    },
    {
      question: "Hva kjennetegner endokrin signalering?",
      options: ["Signalstoffet føres med blodet til målceller langt unna", "Signalstoffet diffunderer kort vei og virker på nabocellene", "Signalstoffet virker tilbake på den cellen som skilte det ut", "Signalstoffet føres gjennom en gang til en indre overflate"],
      explanation: "Transport med blodet til fjerne målceller er definisjonen av endokrin signalering, og bare celler med riktig reseptor svarer. Alternativet om diffusjon til naboceller beskriver parakrin signalering, som aldri går veien om blodbanen.",
    },
    {
      question: "En celle skiller ut et signalstoff som binder seg til reseptorer på cellens egen overflate. Hva kalles dette?",
      options: ["Autokrin signalering", "Parakrin signalering", "Endokrin signalering", "Eksokrin sekresjon"],
      explanation: "Forstavelsen auto- betyr selv, og signalveien er den korteste som finnes: stoffet forlater cellen og binder seg tilbake til den. Parakrin signalering krever derimot at målet er en annen celle i nærheten.",
    },
    {
      question: "Hva kjennetegner det medfødte immunforsvaret?",
      options: ["Rask og uspesifikk respons, uten immunologisk hukommelse", "Treg og spesifikk respons, med immunologisk hukommelse", "Rask og spesifikk respons, med immunologisk hukommelse", "Treg og uspesifikk respons, uten immunologisk hukommelse"],
      explanation: "Det medfødte forsvaret er på plass fra fødselen og reagerer i løpet av minutter til timer, likt hver gang og uten å skille mikrober fra hverandre i detalj. Alternativet med hukommelse beskriver det adaptive forsvaret, der hukommelsen er selve kjennetegnet.",
    },
    {
      question: "Hvilken egenskap har det adaptive immunforsvaret som det medfødte mangler?",
      options: ["Immunologisk hukommelse", "Evnen til å reagere på fremmede mikrober", "Tilstedeværelse i kroppen fra fødselen av", "Evnen til å virke uten reseptorer"],
      explanation: "Hukommelsen gjør at andre møte med den samme mikroben gir en raskere og kraftigere respons, og det er den ene egenskapen det medfødte forsvaret aldri har. Begge deler reagerer på fremmede mikrober, så det alternativet skiller dem ikke.",
    },
    {
      question: "Hva skjer i den absorptive fasen etter et måltid?",
      options: ["Insulin dominerer, og cellene tar opp glukose fra blodet", "Glukagon dominerer, og leveren frigjør glukose til blodet", "Insulin dominerer, og leveren frigjør glukose til blodet", "Glukagon dominerer, og cellene tar opp glukose fra blodet"],
      explanation: "Etter et måltid stiger blodsukkeret, insulin skilles ut, cellene tar opp glukose og overskuddet lagres. Alternativet med glukagon hører til fasen mellom måltidene, der retningen er motsatt.",
    },
    {
      question: "Hvorfor skilles pepsin ut som et inaktivt forstadium?",
      options: ["For at enzymet ikke skal spalte proteiner inne i cellen som lager det", "For at enzymet skal tåle den lave temperaturen i magesekken bedre", "For at enzymet skal kunne fraktes med blodet uten å bli brutt ned", "For at enzymet skal kunne aktiveres på nytt flere ganger etter bruk"],
      explanation: "Et proteinspaltende enzym ville angrepet produsentcellens egne proteiner dersom det var aktivt allerede der, så aktiveringen skjer først etter utskillelsen. Alternativet om transport i blodet bommer: pepsin virker i magesekkens hulrom, ikke i blodbanen.",
    },
    {
      question: "Hva er anabolisme?",
      options: ["Oppbygging av større molekyler fra mindre, som krever energi", "Nedbryting av større molekyler til mindre, som frigjør energi", "Oppbygging av større molekyler fra mindre, som frigjør energi", "Nedbryting av større molekyler til mindre, som krever energi"],
      explanation: "Anabole prosesser setter sammen byggesteiner til større molekyler, og det må betales for med energi. Alternativene som lar oppbygging frigjøre energi bryter med regelen om at kjeder som bygges, koster.",
    },
    {
      question: "Hvorfor kan en bakteriepopulasjon over tid bli resistent mot et antibiotikum?",
      options: ["Bakterier med en egenskap som gjør stoffet virkningsløst, overlever og formerer seg", "Bakterier lærer seg å kjenne igjen stoffet og bygger opp hukommelse mot det", "Bakterier bytter til seg myelin fra vertens celler og blir dermed beskyttet", "Bakterier slutter å dele seg helt så lenge stoffet er til stede i omgivelsene"],
      explanation: "Dette er seleksjon: de individene som allerede har en egenskap som gjør angrepspunktet utilgjengelig eller stoffet ufarlig, er de som får etterkommere. Alternativet om hukommelse låner et begrep fra det adaptive immunforsvaret, som bakterier ikke har.",
    },
  ],
  'med1100-10-1': [
    {
      question: "Hvor dannes forløperen til T-cellen, og hvor modnes den?",
      options: ["Dannes i benmargen, modnes i thymus", "Dannes i thymus, modnes i benmargen", "Dannes og modnes begge deler i benmargen", "Dannes i benmargen, modnes i lymfeknuten"],
      explanation: "Alle blodcellene dannes i benmargen, men T-cellen får reseptoren og gjennomgår seleksjonen i thymus. Alternativet der begge deler skjer i benmargen beskriver B-cellen, og det er nettopp den parallellen som gjør det til en god felle.",
    },
    {
      question: "I hvilken rekkefølge går T-cellens modningsstadier?",
      options: ["Dobbelt-negativ, dobbelt-positiv, enkelt-positiv", "Dobbelt-positiv, dobbelt-negativ, enkelt-positiv", "Enkelt-positiv, dobbelt-positiv, dobbelt-negativ", "Dobbelt-negativ, enkelt-positiv, dobbelt-positiv"],
      explanation: "Antall overflatemolekyler går fra null til to til ett: cellen slår på begge før den slår av det ene. Alternativet som setter enkelt-positiv først, overser at cellen må kunne prøve seg mot begge MHC-klassene før linjevalget kan tas.",
    },
    {
      question: "Hvor i thymus ligger de dobbelt-positive cellene?",
      options: ["I cortex, den ytre sonen", "I medulla, den indre sonen", "I begge sonene samtidig", "Utenfor thymus, i lymfeknuten"],
      explanation: "De to tidlige stadiene ligger i cortex, og cellene arbeider seg innover mot medulla. Alternativet om medulla gjelder det enkelt-positive stadiet, og å bytte om sonene er den hyppigste enkeltfeilen i immunologien i blokk 3.",
    },
    {
      question: "Hva tester den positive seleksjonen?",
      options: ["Om reseptoren i det hele tatt kan binde eget MHC", "Om reseptoren binder eget peptid for sterkt", "Om cellen uttrykker både CD4 og CD8 samtidig", "Om cellen klarer å forlate thymus ved egen kraft"],
      explanation: "Binding til eget MHC redder cellen; klarer den det ikke, dør den. Alternativet om for sterk binding til eget peptid beskriver den negative seleksjonen — de to testene måler motsatte ytterpunkter av den samme egenskapen.",
    },
    {
      question: "Hva skjer med en T-celle som binder eget peptid i eget MHC for sterkt?",
      options: ["Den fjernes ved negativ seleksjon, i medulla", "Den overlever og blir en enkelt-positiv CD8-celle", "Den fjernes ved positiv seleksjon, i cortex", "Den gjennomgår VDJ-rekombinasjon en gang til"],
      explanation: "For sterk binding til kroppens eget gjør cellen farlig, og den fjernes — det er sentral toleranse. Alternativet som legger fjerningen til den positive seleksjonen forveksler de to: der er det manglende binding til MHC som dreper.",
    },
    {
      question: "Hva avgjør om en T-celle blir CD4- eller CD8-positiv?",
      options: ["Hvilken MHC-klasse reseptoren bandt under positiv seleksjon", "Hvor i thymus cellen tilfeldigvis befant seg ved modningen", "Hvor mange runder VDJ-rekombinasjon cellen gjennomgikk", "Hvilket signalstoff cellen møter etter at den forlot thymus"],
      explanation: "Bandt reseptoren klasse II, beholdes CD4; bandt den klasse I, beholdes CD8. Alternativet om lokalisasjon i thymus blander årsak og sted: sonen forteller hvilket stadium cellen er på, ikke hvilken linje den velger.",
    },
    {
      question: "Hvilke celler uttrykker MHC klasse I?",
      options: ["Alle celler med kjerne", "Bare dendrittiske celler og makrofager", "Bare B-celler og T-celler", "Bare cellene i thymus' medulla"],
      explanation: "Enhver celle kan bli infisert, så alle celler med kjerne må kunne melde fra om sitt eget indre. Alternativet om dendrittiske celler og makrofager lister de antigenpresenterende cellene, og det er de som har klasse II i tillegg.",
    },
    {
      question: "Hvor kommer peptidene i MHC klasse II fra?",
      options: ["Fra materiale cellen har tatt opp utenfra", "Fra proteiner cellen selv har laget i cytosol", "Fra frie peptider som flyter i blodet", "Fra nabocellenes membranproteiner"],
      explanation: "Klasse II lastes med biter fra materiale som er tatt opp og brutt ned i en blære — den eksogene veien. Alternativet om proteiner laget i cytosol beskriver den endogene veien, som fører til klasse I.",
    },
    {
      question: "Hvilken T-celletype leser MHC klasse I?",
      options: ["CD8-positive T-celler", "CD4-positive T-celler", "Både CD4- og CD8-positive", "Verken CD4- eller CD8-positive"],
      explanation: "Huskeregelen er at 1 ganger 8 er 8: klasse I hører til CD8. Alternativet med CD4 snur koblingen, og siden CD4-cellene er hjelpecellene, ville det gitt drapsoppdraget til feil celletype.",
    },
    {
      question: "Hva er signal 2 ved aktivering av en T-celle?",
      options: ["CD28 på T-cellen binder CD80/CD86 på den presenterende cellen", "T-cellereseptoren binder peptid i MHC på samme celle", "IL-2 binder seg til T-cellens egen reseptor for IL-2", "Perforin lager en åpning i membranen til den presenterende cellen"],
      explanation: "Signal 2 er bekreftelsen på at situasjonen er alvorlig, og bare en celle som selv har registrert fare, uttrykker CD80/CD86. Alternativet om reseptoren mot peptid-MHC er signal 1 — det spesifikke signalet, som ikke er nok alene.",
    },
    {
      question: "Hva skjer med en T-celle som får signal 1, men ikke signal 2?",
      options: ["Den blir anergisk, altså varig uvirksom", "Den aktiveres og begynner å skille ut IL-2", "Den drepes umiddelbart av naboceller", "Den vender tilbake til thymus for ny seleksjon"],
      explanation: "Anergi er perifer toleranse: en andre sikkerhetslinje for celler som slapp gjennom seleksjonen i thymus. Alternativet om full aktivering forutsetter begge signalene, og IL-2 kommer først etter at de er på plass.",
    },
    {
      question: "Hva gjør IL-2 for en nettopp aktivert T-celle?",
      options: ["Får cellen til å dele seg, slik at en klon dannes", "Får cellen til å skifte fra CD4 til CD8 på overflaten", "Får cellen til å vandre tilbake til thymus", "Får cellen til å bryte ned sitt eget peptid-MHC"],
      explanation: "IL-2 er vekstsignalet cellen lager til seg selv, og det driver den klonale ekspansjonen. Alternativet om skifte mellom CD4 og CD8 er umulig etter modningen: linjevalget ble tatt i thymus og er endelig.",
    },
    {
      question: "Hva er hovedsignalet fra en Th1-celle?",
      options: ["IFN-γ, som aktiverer makrofager", "Perforin, som lager hull i målcellens membran", "Granzym B, som utløser programmert celledød", "C5a, som trekker nøytrofile granulocytter til stedet"],
      explanation: "Th1-cellen kjemper ikke selv, den gjør andre celler bedre — og makrofagaktivering er hovedvirkningen. Alternativene om perforin og granzym B beskriver CD8-cellens våpen, altså hvordan en drapscelle arbeider.",
    },
    {
      question: "Hvordan dreper en cytotoksisk CD8-celle en målcelle?",
      options: ["Med perforin, som åpner, og granzym B, som utløser celledød", "Med IFN-γ, som bryter ned målcellens membran direkte utenfra", "Med komplement, som cellen skiller ut på overflaten", "Med ubikvitin, som merker målcellen for proteasomet"],
      explanation: "Perforin lager åpningen, og granzym B kommer inn gjennom den og setter i gang målcellens egen programmerte celledød. Rekkefølgen gir seg selv: noe må åpnes før noe kan komme inn gjennom det.",
    },
    {
      question: "Hva er sentral toleranse?",
      options: ["At farlige lymfocytter fjernes i et primært lymfoid organ", "At aktiverte lymfocytter slås av ute i vevet ved mangel på signal 2", "At antistoffer nøytraliserer kroppens egne proteiner", "At komplementsystemet reguleres ned av faktor H"],
      explanation: "Sentral toleranse etableres i thymus, gjennom den negative seleksjonen, før cellen har vært ute i kroppen. Alternativet om at cellene slås av i vevet, beskriver perifer toleranse — anergi — som er den andre sikkerhetslinjen.",
    },
    {
      question: "Hva menes med en naiv T-celle?",
      options: ["En moden celle som ennå ikke har møtt antigen", "En umoden celle som fortsatt er i thymus", "En celle som har mistet både CD4 og CD8", "En celle som allerede har vært aktivert én gang"],
      explanation: "Den naive cellen har forlatt thymus og sirkulerer og leter, men er ikke aktivert. Alternativet om en umoden celle i thymus beskriver DN- og DP-stadiene, som ikke kalles naive — de er ikke ferdige ennå.",
    },
  ],
  'med1100-10-2': [
    {
      question: "Hva bestemmer et antistoffs spesifisitet?",
      options: ["V-regionene på de tunge og lette kjedene", "C-regionen på de tunge kjedene", "Hvilken isotype antistoffet tilhører", "Antall antistoffmolekyler cellen skiller ut"],
      explanation: "Spesifisiteten ligger i de variable delene, der de to kjedetypene sammen danner bindingsflaten. Alternativet om C-regionen peker på det som avgjør effektorfunksjonen — og isotypen er nettopp bestemt av C-regionen, så de to alternativene er samme feil.",
    },
    {
      question: "Hva bestemmer C-regionen i et antistoff?",
      options: ["Effektorfunksjonen, altså hva som skjer etterpå", "Hvilket antigen antistoffet er i stand til å binde", "Hvor sterkt antistoffet binder sitt antigen", "Hvilken B-celle som produserte antistoffet"],
      explanation: "C-regionen avgjør om antistoffet kan aktivere komplement, gripes av en fagocytt eller skilles ut i slimhinnesekreter. Alternativet om hvilket antigen som bindes, peker på V-regionen, og forvekslingen av de to er kapitlets tetteste felle.",
    },
    {
      question: "Hvilke immunglobuliner bærer en naiv B-celle på overflaten?",
      options: ["IgM og IgD, med samme V-region", "IgM og IgG, med samme V-region", "IgG og IgA, med ulik C-region", "Bare IgM, som senere byttes ut med IgD"],
      explanation: "De to uttrykkes samtidig og har nøyaktig samme spesifisitet, siden V-regionen er lik. Alternativet med IgG krever isotypeskift, og isotypeskift skjer først etter at cellen har møtt antigen og vært i et kimsenter.",
    },
    {
      question: "Hva skiller B-cellereseptoren fra T-cellereseptoren?",
      options: ["BCR binder antigenet direkte, uten presentasjon", "BCR binder bare peptidbiter presentert i MHC klasse II", "BCR settes sammen uten VDJ-rekombinasjon", "BCR finnes bare på plasmaceller, ikke på naive celler"],
      explanation: "BCR kan binde et helt protein, et sukker eller en bakterieoverflate, mens TCR bare ser peptid i MHC. Alternativet om at BCR binder peptid i MHC beskriver nettopp T-cellereseptoren, og bytter dermed om de to.",
    },
    {
      question: "Hva gjør B-cellen med antigenet den har bundet med BCR?",
      options: ["Tar det inn, bryter det ned og presenterer biter i MHC klasse II", "Tar det inn, bryter det ned i proteasomet og bruker MHC klasse I", "Skiller det ut igjen etter at det er merket med ubikvitin", "Sender det videre til en dendrittisk celle for presentasjon"],
      explanation: "B-cellen bruker sin egen reseptor som fangstredskap og går den eksogene veien til klasse II. Alternativet med proteasomet og klasse I beskriver den endogene veien, som gjelder proteiner cellen selv har laget.",
    },
    {
      question: "Hva innebærer koblet gjenkjenning?",
      options: ["B-cellen og T-cellen kjenner igjen hver sin del av antigenet", "B-cellen og T-cellen kjenner igjen nøyaktig samme epitop", "To ulike antistoffer binder det samme antigenet samtidig", "B-cellen aktiveres uten hjelp så lenge antigenet er stort nok"],
      explanation: "Kravet er samme antigen, ikke samme punkt: BCR binder en struktur på overflaten, mens T-cellen ser en peptidbit i MHC. Alternativet om samme epitop er umulig, nettopp fordi de to reseptortypene ser helt ulike ting.",
    },
    {
      question: "Hvor foregår kimsenterreaksjonen?",
      options: ["I follikler i sekundære lymfoide organer", "I thymus' cortex, sammen med T-cellemodningen", "I benmargen, der B-cellene ble dannet", "Fritt i blodet, mens cellene sirkulerer"],
      explanation: "Kimsentre oppstår i lymfeknuter, milt og tonsiller når et antigen har kommet inn. Alternativet om benmargen forveksler stedet der B-cellen modnes med stedet der den finpusses etter å ha møtt antigen.",
    },
    {
      question: "Hva endrer somatisk hypermutasjon?",
      options: ["V-regionen, slik at bindingsstyrken endres", "C-regionen, slik at effektorfunksjonen endres", "Hvilken MHC-klasse B-cellen bruker", "Antall antistoffmolekyler cellen skiller ut"],
      explanation: "Endringene innføres i den variable delen, og sammen med utvelgelsen gir det affinitetsmodning. Alternativet om C-regionen beskriver isotypeskift — den andre prosessen i samme kimsenter, med helt annen virkning.",
    },
    {
      question: "Hva er affinitetsmodning?",
      options: ["At bindingsstyrken stiger fordi bare de beste overlever", "At antistoffene byttes fra IgM til IgG i løpet av responsen", "At antallet plasmaceller øker gjennom flere delinger", "At B-cellen bytter fra MHC klasse II til klasse I"],
      explanation: "Hypermutasjonen lager variasjon, og utvelgelsen mot antigen beholder bare de sterkeste binderne. Alternativet om byttet fra IgM til IgG beskriver isotypeskift, som endrer funksjonen og ikke bindingsstyrken.",
    },
    {
      question: "Hva endres ved isotypeskift?",
      options: ["C-regionen i den tunge kjeden, altså funksjonen", "V-regionen, slik at antistoffet binder noe annet", "Både V- og C-regionen, i samme prosess", "Den lette kjeden, som byttes ut med en tung"],
      explanation: "Skiftet bytter den konstante delen, mens spesifisiteten er uendret. Alternativet om at V-regionen endres er kapitlets dyreste misforståelse: et IgG som har skiftet fra IgM, binder nøyaktig det samme som før.",
    },
    {
      question: "Hva er uendret etter et isotypeskift fra IgM til IgG?",
      options: ["Spesifisiteten, altså hva det binder", "Antistoffets effektorfunksjon", "C-regionen i den tunge kjeden", "Hvor i kroppen antistoffet virker best"],
      explanation: "V-regionen røres ikke, så antistoffet binder det samme før og etter. Alternativet om effektorfunksjonen er nettopp det som endres — det er hele hensikten med skiftet.",
    },
    {
      question: "Hvilke to celletyper kommer ut av en kimsenterreaksjon?",
      options: ["Langlivede plasmaceller og hukommelses-B-celler", "Naive B-celler med IgM og IgD, og hukommelses-T-celler", "Dobbelt-positive T-celler og plasmaceller", "Dendrittiske celler og NK-celler"],
      explanation: "Plasmacellene vandrer til benmargen og leverer antistoff, mens hukommelsescellene blir liggende med finpusset reseptor. Alternativet med naive B-celler beskriver inngangen til kimsenteret, ikke utgangen.",
    },
    {
      question: "Hvor vandrer de langlivede plasmacellene etter kimsenterreaksjonen?",
      options: ["Til benmargen, der de blir liggende", "Til thymus' medulla", "Til miltens røde pulpa", "Tilbake til follikkelen de kom fra"],
      explanation: "Fra benmargen kan de fortsette å levere antistoff i blodet lenge etter at infeksjonen er over. Alternativet om thymus blander de to lymfocyttlinjene: thymus er T-cellenes modningssted og har ingen rolle for plasmaceller.",
    },
    {
      question: "Hvilken isotype dominerer i den sekundære antistoffresponsen?",
      options: ["IgG", "IgM", "IgD", "IgE"],
      explanation: "Hukommelsescellene har allerede gjennomgått isotypeskift, så responsen består mest av IgG. Alternativet IgM dominerer i den primære responsen, før skiftet har rukket å skje.",
    },
    {
      question: "Hvilken isotype er hovedantistoffet i slimhinnesekreter?",
      options: ["IgA", "IgG", "IgM", "IgD"],
      explanation: "IgA-ens C-region gjør at den kan skilles ut på slimhinneoverflatene, der kroppen møter omverdenen. Alternativet IgG er vanligst i blodet, men det er C-regionen som avgjør hvor antistoffet havner.",
    },
    {
      question: "Hva er forskjellen på opsonisering og nøytralisering?",
      options: ["Opsonisering gir fagocytten et håndtak; nøytralisering blokkerer", "Opsonisering blokkerer en struktur; nøytralisering gir et håndtak", "Opsonisering skjer i kimsenteret; nøytralisering skjer i blodet", "Opsonisering krever IgM; nøytralisering krever bare IgD"],
      explanation: "Ved opsonisering stikker Fc-enden ut og gripes av fagocytten, mens nøytralisering dekker til noe fienden trenger. Alternativet som snur de to definisjonene beskriver nøyaktig motsatt, og begge ordene er ekte fagtermer.",
    },
  ],
  'med1100-10-3': [
    {
      question: "Hva kjennetegner den medfødte immuniteten?",
      options: ["Den svarer raskt og likt hver gang, og har ingen hukommelse", "Den bruker dager på å komme i gang, men blir bedre neste gang", "Den bygger reseptorene sine ved VDJ-rekombinasjon", "Den består bare av celler, ikke av proteiner i blodet"],
      explanation: "Den medfødte delen har faste reseptorer og reagerer på mønstre, uten å lære. Alternativet om dager og forbedring beskriver den ervervede delen, og hukommelse er nettopp det som skiller de to.",
    },
    {
      question: "Hva er en PAMP?",
      options: ["Et molekylmønster som er felles for mange mikrober", "Reseptoren som gjenkjenner mikrobers molekylmønstre", "Et signalstoff som kaller nøytrofile til stedet", "Et komplementfragment som legger seg på overflaten"],
      explanation: "PAMP-en er mønsteret hos mikroben, og den er noe mikroben ikke kan kvitte seg med. Alternativet om reseptoren beskriver PRR, altså vår side av paret — å bytte om de to er den vanligste feilen her.",
    },
    {
      question: "Hvilket mønster gjenkjenner TLR4?",
      options: ["LPS fra gramnegative bakteriers membran", "Umetylert CpG-DNA fra mikrobers arvestoff", "Viralt RNA som befinner seg i cytosol", "Sukkerstrukturer på soppceller"],
      explanation: "TLR4 sitter på celleoverflaten og leser LPS, og paret binder immunologien til mikrobiologien. Alternativet om CpG-DNA hører til TLR9, som ligger inne i blærer der arvestoff bare finnes hvis noe er tatt opp.",
    },
    {
      question: "Hvor ligger RIG-I, og hva gjenkjenner den?",
      options: ["I cytosol, og den gjenkjenner viralt RNA der", "På celleoverflaten, og den gjenkjenner LPS", "Inne i blærer, og den gjenkjenner CpG-DNA", "I cellekjernen, og den gjenkjenner viralt DNA"],
      explanation: "RIG-I fanger opp at det finnes fremmed arvestoff allerede inne i cellen. Alternativet om blærer og CpG-DNA beskriver TLR9, og forskjellen i lokalisasjon er nettopp det som skiller de to situasjonene.",
    },
    {
      question: "Hva starter komplementets klassiske vei?",
      options: ["Antistoff som allerede er bundet til et antigen", "Mannosebindende lektin på en mikrobeoverflate", "Spontan aktivering stabilisert av faktor B og D", "Membranangrepskomplekset som allerede er dannet"],
      explanation: "Et komplementprotein griper i antistoffenes Fc-ender, så veien krever at det finnes antistoffer. Alternativet om mannosebindende lektin beskriver lektinveien, som virker helt uten antistoff og derfor også ved første møte.",
    },
    {
      question: "Hva starter komplementets alternative vei?",
      options: ["Spontan aktivering stabilisert på en fremmed overflate", "Antistoff som er bundet til antigen på mikrobens overflate", "Mannosebindende lektin som binder sukkermønstre", "C5a som trekker nøytrofile granulocytter til stedet"],
      explanation: "Veien er systemets bakgrunnsberedskap: litt aktivering hele tiden, som bare fortsetter på overflater som ikke klarer å slå den av. Alternativet om antistoff beskriver den klassiske veien, og faktor B og D er navnene som identifiserer den alternative.",
    },
    {
      question: "Hvor møtes komplementets tre veier?",
      options: ["I C3-konvertasen, det felles knutepunktet", "I membranangrepskomplekset, helt til slutt", "I faktor H, som regulerer dem alle tre", "De møtes ikke — de er helt atskilte systemer"],
      explanation: "De tre veiene skiller seg bare i starten; fra C3 er fortsettelsen identisk. Alternativet om membranangrepskomplekset setter kaskadens siste trinn som møtepunkt, men veiene er allerede felles lenge før det.",
    },
    {
      question: "Hva er hovedrollen til C3b?",
      options: ["Å opsonisere, altså gi fagocytten et håndtak", "Å trekke nøytrofile granulocytter til stedet", "Å bygge membranangrepskomplekset sammen med C6 til C9", "Å bryte ned C3 på kroppens egne overflater"],
      explanation: "C3b er den store biten som blir liggende på overflaten og merker målet for fagocytose. Alternativet om å trekke nøytrofile beskriver C5a, og huskeregelen er at a farer av gårde og signaliserer mens b blir liggende.",
    },
    {
      question: "Hvilket komplementfragment er den sterkeste kjemotaksifaktoren?",
      options: ["C5a", "C3b", "C5b", "C4a"],
      explanation: "C5a er både anafylatoksin og det som trekker nøytrofile granulocytter mot stedet. Alternativet C5b er den store biten av samme molekyl, men den blir liggende og starter membranangrepskomplekset.",
    },
    {
      question: "Hva bygger membranangrepskomplekset?",
      options: ["C5b sammen med C6, C7, C8 og C9", "C5a sammen med C6, C7, C8 og C9", "C3a sammen med faktor B og faktor D", "C3b alene, uten flere komplementfaktorer"],
      explanation: "C5b blir liggende og samler de siste faktorene til et rør som borer hull i membranen. Alternativet med C5a bytter fragment: den lille biten farer av gårde som signalstoff og bygger ingenting.",
    },
    {
      question: "Hva gjør faktor H?",
      options: ["Beskytter våre egne overflater ved å bryte ned C3b", "Starter den alternative veien på fremmede overflater", "Trekker nøytrofile granulocytter mot infeksjonsstedet", "Inngår i membranangrepskomplekset sammen med C9"],
      explanation: "Faktor H kjenner igjen strukturer på våre egne celler og sørger for at aktiveringen slås av der. Alternativet om å starte den alternative veien snur regulatorens rolle helt — poenget er nettopp at den stopper, ikke starter.",
    },
    {
      question: "Hva reagerer NK-cellen på?",
      options: ["At målcellen mangler MHC klasse I på overflaten", "At målcellen uttrykker MHC klasse I", "At målcellen presenterer peptid i MHC klasse II", "At målcellen har bundet komplementfaktoren C3b"],
      explanation: "Missing self betyr at det hemmende signalet faller bort når klasse I forsvinner, og da vinner det aktiverende. Alternativet om at cellen uttrykker klasse I beskriver CD8-cellens logikk, som er den motsatte.",
    },
    {
      question: "Hvilken halvdel av immunforsvaret hører NK-cellen til?",
      options: ["Den medfødte, siden den mangler slik reseptor", "Den ervervede, siden den er en lymfocytt", "Den ervervede, siden den danner hukommelsesceller", "Begge, siden den både lærer og reagerer raskt"],
      explanation: "NK-cellen har ingen VDJ-rekombinasjon, ingen seleksjon og ingen hukommelse, og er derfor medfødt. Alternativet som peker på at den er en lymfocytt, er nettopp fella: den ser ut som en lymfocytt, men reagerer på mønster og fravær.",
    },
    {
      question: "Hvordan finner en NK-celle målet sitt ved ADCC?",
      options: ["Fc-reseptoren griper i IgG-et som dekker målcellen", "En antigenspesifikk reseptor binder antigenet direkte", "Komplementets C5a fører NK-cellen til riktig celle", "Målcellen presenterer peptid i MHC klasse II for NK-cellen"],
      explanation: "Ved ADCC er det antistoffet som peker ut målet, gjennom sin C-region. Alternativet om en antigenspesifikk reseptor bryter med premisset: NK-celler har ikke en slik reseptor, og det er derfor de trenger enten missing self eller et antistoff.",
    },
    {
      question: "Hvilke våpen bruker NK-cellen når den dreper?",
      options: ["Perforin og granzym, som en CD8-celle", "Komplement og membranangrepskomplekset", "Ubikvitin og proteasomet i målcellen", "IgG og IgE som den selv skiller ut"],
      explanation: "NK-cellen dreper med samme våpen som CD8-cellen; det er målvalget som skiller dem. Alternativet om komplement blander et system av blodproteiner med noe en celle skiller ut selv.",
    },
    {
      question: "Hva betyr kjemotaksi?",
      options: ["At en celle beveger seg oppover en konsentrasjonsgradient", "At en celle tar opp partikler og bryter dem ned innvendig", "At en celle merker et mål for nedbrytning i proteasomet", "At en celle dør på en ordnet, programmert måte"],
      explanation: "Kjemotaksi er retningsbestemt vandring mot der signalstoffet lages, og C5a er den sterkeste slike faktoren. Alternativet om å ta opp partikler beskriver fagocytose, som er hva cellen gjør når den er kommet fram.",
    },
  ],
  'med1100-10-4': [
    {
      question: "Hvilke er de primære lymfoide organene?",
      options: ["Benmargen og thymus", "Lymfeknutene og milten", "Milt og tonsiller", "Thymus og lymfeknutene"],
      explanation: "I de primære organene dannes og modnes lymfocyttene, før de har møtt noe fremmed. Alternativet som setter thymus sammen med lymfeknutene har ett riktig og ett galt — lymfeknuten er der ferdige celler møter antigen.",
    },
    {
      question: "Hva skjer i et sekundært lymfoid organ?",
      options: ["Ferdige lymfocytter møter antigen og settes i arbeid", "Lymfocyttene dannes fra forløpere i blodet", "Lymfocyttene gjennomgår positiv og negativ seleksjon", "Røde blodceller dannes og modnes før de går ut i blodet"],
      explanation: "Sekundære organer er møtesteder, og det er her kimsentrene oppstår. Alternativet om seleksjon beskriver thymus, som er et primært organ — der testes cellene mot kroppens eget, ikke mot noe fremmed.",
    },
    {
      question: "Hvor mange tilførende og fraførende lymfekar har en lymfeknute?",
      options: ["Flere tilførende inn, ett fraførende ut", "Ett tilførende inn, flere fraførende ut", "Like mange av hver, fordelt rundt knuten", "Ingen av delene — knuten ligger på blodveien"],
      explanation: "Mange kar inn og ett ut gir langsom gjennomstrømning, som er det et filter trenger. Alternativet som snur tallene beskriver riktige strukturer, men gjør knuten til et fordelingspunkt i stedet for et filter.",
    },
    {
      question: "Hvilken sone i lymfeknuten inneholder folliklene med kimsentre?",
      options: ["Cortex, altså den ytre sonen", "Paracortex, sonen mellom de to andre", "Medulla, den indre sonen", "Hilus, der karene går inn og ut"],
      explanation: "Folliklene er B-cellenes område, og de ligger ytterst — knaggen er B for bark. Alternativet paracortex er T-cellenes sone, og den ligger like innenfor, uten follikler.",
    },
    {
      question: "Hvilke celler dominerer i lymfeknutens paracortex?",
      options: ["T-celler", "B-celler", "Plasmaceller", "Røde blodceller"],
      explanation: "Paracortex er T-cellenes sone, og det er her høyendotelvenylene ligger. Alternativet B-celler hører til folliklene i cortex, og det er nettopp disse to sonene som byttes om i distraktorene.",
    },
    {
      question: "Hvor kommer naive lymfocytter inn i en lymfeknute fra?",
      options: ["Fra blodet, via høyendotelvenylene i paracortex", "Fra lymfen, gjennom de tilførende lymfekarene", "Fra benmargen, gjennom knutens medulla", "Fra nabolymfeknuten, gjennom det fraførende karet"],
      explanation: "Lymfen bringer antigenet, mens blodet bringer cellene — og de to strømmene møtes inne i knuten. Alternativet om de tilførende lymfekarene forveksler de to inngangene, og møtet mellom dem er hele organets hensikt.",
    },
    {
      question: "Hva er hovedoppgaven til miltens røde pulpa?",
      options: ["Å filtrere blodet og fjerne gamle blodceller", "Å huse lymfocytter rundt de små arteriolene", "Å danne kimsentre der B-cellene finpusses", "Å ta imot lymfe fra tilførende lymfekar"],
      explanation: "Fargen gir bort funksjonen: rød betyr blod og opprydding. Alternativet om lymfocytter rundt arteriolene beskriver den hvite pulpaen, som er miltens lymfoide del.",
    },
    {
      question: "Hva er miltens hvite pulpa?",
      options: ["Miltens lymfoide vev, rundt arteriolene", "Miltens blodfilter, der gamle celler brytes ned", "Miltens kapsel, som holder organet sammen", "Miltens tilførende lymfekar og hilus"],
      explanation: "Den hvite pulpaen har T-celler nærmest arteriolen og B-cellefollikler like ved, akkurat som lymfeknutens inndeling. Alternativet om blodfilteret beskriver den røde pulpaen, og de to forveksles systematisk.",
    },
    {
      question: "Hvor i thymus ligger de Hassallske legemene?",
      options: ["I medulla, den indre sonen", "I cortex, den ytre sonen", "I kapselen rundt organet", "I follikler i den ytre sonen"],
      explanation: "De runde, lagdelte epitelstrukturene ligger i medulla og er thymus' kjennetegn i mikroskopet. Alternativet om cortex utnytter at man husker cortex som den viktige sonen der modningen begynner.",
    },
    {
      question: "Hva skiller thymus fra en lymfeknute i mikroskopet?",
      options: ["Thymus har Hassallske legemer, men ingen kimsentre", "Thymus har follikler med kimsentre, men ingen tydelige soner", "Thymus har tilførende lymfekar, men ingen fraførende", "Thymus har rød og hvit pulpa, men ingen cortex"],
      explanation: "Kimsentre finnes bare i sekundære organer, der ferdige celler møter antigen. Alternativet om rød og hvit pulpa beskriver milten, altså et helt tredje organ — en typisk distraktor hentet fra nabostrukturen.",
    },
    {
      question: "Hva kjennetegner en ganemandel histologisk?",
      options: ["Dekkende epitel med dype krypter innover", "Rød og hvit pulpa rundt sentrale arterioler", "Hassallske legemer i den indre sonen", "Flere tilførende lymfekar og ett fraførende"],
      explanation: "Kryptene gir stor overflate der materiale fra munnhulen møter lymfoid vev med follikler. Alternativet om tilførende og fraførende lymfekar beskriver lymfeknuten, som er det andre sekundære organet i seksjonen.",
    },
    {
      question: "Hva er forskjellen på en primærfollikkel og en sekundærfollikkel?",
      options: ["Sekundærfollikkelen har et kimsenter; primærfollikkelen har det ikke", "Primærfollikkelen ligger i cortex; sekundærfollikkelen i medulla", "Primærfollikkelen inneholder T-celler; sekundærfollikkelen B-celler", "Sekundærfollikkelen finnes bare i thymus, primærfollikkelen i milten"],
      explanation: "Et kimsenter betyr at det pågår en respons akkurat der, og det er tegnet man ser etter i et snitt. Alternativet om ulik plassering er galt: begge ligger i cortex, og det er aktiviteten som skiller dem.",
    },
  ],
  'med1100-11-1': [
    {
      question: "Hva er det Gram-fargingen faktisk måler i en bakteriecelle?",
      options: ["Hvor tykt peptidoglykanlaget i celleveggen er", "Hvor stort bakteriens ringformede kromosom er", "Hvor mye kapselmateriale cellen skiller ut", "Hvor raskt bakterien deler seg i kulturen"],
      explanation: "Gram-fargingen skiller på ett kriterium: om peptidoglykanlaget er tykt nok til å holde på det fiolette fargekomplekset gjennom alkoholskyllingen. Alternativet om kapselmateriale er nær, men kapselen tar verken hovedfargen eller motfargen og viser seg som en ufarget sone — den påvirker ikke gram-klassifiseringen.",
    },
    {
      question: "Hvordan er celleoverflaten bygd opp hos en gram-negativ bakterie?",
      options: ["Tynt peptidoglykan mellom cellemembranen og en ytre membran", "Tykt peptidoglykan ytterst, med bare cellemembranen innenfor", "Tykt peptidoglykan mellom to membraner, uten lipopolysakkarid", "Ingen cellevegg, bare en cellemembran med lipopolysakkarid"],
      explanation: "Gram-negative har to membraner med et tynt peptidoglykanlag imellom, og lipopolysakkarid på utsiden av den ytre membranen. Alternativet med tykt peptidoglykan og bare én membran beskriver den gram-positive oppbygningen, som er den nærmeste forvekslingen.",
    },
    {
      question: "Hvor i den gram-negative bakterien sitter lipopolysakkaridet?",
      options: ["På utsiden av den ytre membranen", "Inne i det ringformede kromosomet", "Fast forankret i peptidoglykanlaget", "Løst i cytoplasma, klart til utskilling"],
      explanation: "Lipopolysakkarid er forankret med fettdelen sin i den ytre membranen og vender sukkerkjeden ut mot omgivelsene. Alternativet som plasserer det i peptidoglykanet er den vanligste feilen: lipopolysakkarid hører hjemme i en membran, ikke i nettverket som utgjør veggen.",
    },
    {
      question: "Hvilken virulensfaktor beskytter Streptococcus pneumoniae best mot å bli fagocytert?",
      options: ["Polysakkaridkapselen som ligger utenpå celleveggen", "Betalaktamase, som spalter og inaktiverer penicillin", "Lipopolysakkaridet i bakteriens ytre membran", "Det tykke peptidoglykanlaget i selve celleveggen"],
      explanation: "Kapselen dekker over merkemolekylene på overflaten, slik at fagocytten ikke får grep. Alternativet om betalaktamase er den klassiske fellen: enzymet er en ekte og viktig mekanisme, men det virker mot et antibiotikum og har ingenting med fagocytose å gjøre.",
    },
    {
      question: "Hvordan virker kapselen rent mekanisk mot fagocytose?",
      options: ["Den dekker over merkemolekylene fagocytten må gripe i", "Den spalter reseptorene på fagocyttens egen overflate", "Den binder antistoffene før de rekker å nå bakterien", "Den dreper fagocytten før den rekker å sluke bakterien"],
      explanation: "Fagocytten binder seg til merkemolekyler avsatt på bakterieoverflaten, og kapselen legger seg glatt utenpå og skjuler dem. Alternativet om at kapselen spalter reseptorer gir den en enzymvirkning den ikke har — kapselen er polysakkarid og virker rent fysisk.",
    },
    {
      question: "Hvorfor har midler som hemmer celleveggsyntesen ingen effekt på Mycoplasma?",
      options: ["Slekten mangler cellevegg, så angrepspunktet finnes ikke", "Slekten skiller ut et enzym som bryter ned slike midler", "Slekten har en ytre membran som midlene ikke slipper gjennom", "Slekten bygger celleveggen sin av protein i stedet for sukker"],
      explanation: "Uten cellevegg finnes ingen struktur midlet kan gripe inn i, og dette er en iboende egenskap ved slekten, ikke en ervervet motstand. Alternativet om et nedbrytende enzym beskriver en helt reell resistensmekanisme, men den hører til andre bakterier.",
    },
    {
      question: "Hva skjer når et preparat med Mycoplasma gram-farges?",
      options: ["Cellene lar seg ikke klassifisere, for laget som måles mangler", "Cellene står klart røde, som alle andre gram-negative celler", "Cellene står klart blå, fordi membranen holder på fargen", "Cellene farges i to lag, ett blått ytterst og ett rødt innerst"],
      explanation: "Testen måler tykkelsen på peptidoglykanlaget, og hos Mycoplasma finnes ikke laget i det hele tatt. Alternativet om at cellene står røde er nær, men rødt betyr at cellen har tatt motfargen etter avfarging — det forutsetter at det finnes en cellevegg å avfarge.",
    },
    {
      question: "Et preparat viser blåfiolette, ovale celler som ligger parvis, med ufarget sone rundt. Hva peker dette mot?",
      options: ["En gram-positiv diplokokk med kapsel, altså en pneumokokk", "En gram-negativ diplokokk med kapsel, altså en meningokokk", "En gram-positiv kokk i klynger, altså gule stafylokokker", "En gram-negativ stav med ytre membran og endotoksin"],
      explanation: "Blåfiolett gir gram-positiv, parvis gir diplokokk, og den ufargede sonen er kapselen — til sammen pneumokokken. Meningokokken er også en kapslet diplokokk, men den er gram-negativ og ville stått rød i det samme preparatet.",
    },
    {
      question: "Hva forteller det at kokkene i et preparat ligger i uregelmessige klynger?",
      options: ["At cellen har delt seg i vekslende plan uten å skilles", "At cellen har delt seg i ett og samme plan hver gang", "At cellene har mistet kapselen under selve fargingen", "At cellene er gram-negative og derfor klumper seg sammen"],
      explanation: "Klyngemønsteret følger av at delingsplanet skifter retning mellom hver deling mens cellene blir hengende sammen. Alternativet om deling i samme plan gir kjeder, ikke klynger — det er den motsatte delingsmåten.",
    },
    {
      question: "Hva gjør B-delen i et A/B-toksin som difteritoksinet?",
      options: ["Binder seg til vertscellen og frakter A-delen inn", "Bryter ned vertscellens membran fra utsiden", "Utfører selve den enzymatiske skaden inne i cellen", "Fester toksinet til bakteriens egen cellevegg"],
      explanation: "B for binding: delen fester seg til en reseptor på målcellen og sørger for at toksinet kommer inn. Alternativet om enzymatisk skade beskriver A-delen, og å bytte om de to bokstavene er den vanligste feilen i denne oppgavetypen.",
    },
    {
      question: "Hva er det som gjør et superantigen farlig?",
      options: ["At svært mange T-lymfocytter aktiveres uten å passe til antigenet", "At det binder seg presist i bindingssporet og aktiverer én klon", "At det bryter ned immuncellenes reseptorer med enzymvirkning", "At det bygges inn i celleveggen og gjør bakterien uangripelig"],
      explanation: "Superantigenet klemmer immuncellen og T-cellen sammen utenfor det normale bindingssporet, slik at et stort antall T-lymfocytter aktiveres samtidig uavhengig av spesifisitet. Alternativet om presis binding i bindingssporet beskriver den normale antigenpresentasjonen, altså det motsatte.",
    },
    {
      question: "Hva skiller et endotoksin fra et eksotoksin?",
      options: ["Endotoksin er en del av bakterien, eksotoksin skilles ut", "Endotoksin skilles ut, mens eksotoksin sitter i celleveggen", "Endotoksin er et protein, mens eksotoksin er et sukkermolekyl", "Endotoksin finnes hos alle bakterier, eksotoksin bare hos noen"],
      explanation: "Endotoksin er et annet navn på lipopolysakkarid, som er en fast bestanddel av den gram-negative ytre membranen og frigjøres når cellen går i stykker. Alternativet som snur dette, bytter om de to begrepene fullstendig — og eksotoksinene er nettopp de utskilte proteinene.",
    },
    {
      question: "Hvilken reseptor kjenner igjen lipopolysakkarid hos den infiserte verten?",
      options: ["TLR4, en av kroppens mønstergjenkjennende reseptorer", "Insulinreseptoren, som også binder bakterielle sukkerkjeder", "Antistoffreseptoren, som binder alle mikrobielle molekyler", "Kapselreseptoren, som gjenkjenner polysakkarider generelt"],
      explanation: "TLR4 hører til de mønstergjenkjennende reseptorene, som reagerer på molekyltyper som bare finnes hos mikrober, og lipopolysakkarid er dens signalmolekyl. Alternativet om en generell kapselreseptor finnes ikke som eget begrep — kapselen kjennes igjen av antistoffer, ikke av en egen navngitt reseptor.",
    },
    {
      question: "Hvilket utsagn om gram-positive bakterier er riktig?",
      options: ["De mangler ytre membran og har derfor ikke endotoksin", "De har ytre membran, men uten lipopolysakkarid i den", "De har endotoksin forankret i peptidoglykanlaget sitt", "De kan ikke ha kapsel, siden de mangler en ytre membran"],
      explanation: "Uten ytre membran finnes ingen membran å forankre lipopolysakkarid i, og gram-positive har derfor ikke endotoksin. Alternativet om at de ikke kan ha kapsel er galt: kapselen ligger utenpå celleveggen og er uavhengig av membraner, og pneumokokken er nettopp gram-positiv og kapslet.",
    },
  ],
  'med1100-11-2': [
    {
      question: "Hvilket enzym hemmer betalaktamene, og hva blir følgen for celleveggen?",
      options: ["Transpeptidasen, slik at kjedene i veggen ikke kryssbindes", "Topoisomerasen, slik at DNA-et ikke lar seg kveile opp", "Ribosomets bindingssete, slik at proteinsyntesen stanser", "Membranpumpen, slik at cellen ikke får ut avfallsstoffer"],
      explanation: "Betalaktamene binder seg til transpeptidasen, det penicillinbindende proteinet som knytter sukkerkjedene sammen på tvers, og uten kryssbindingen blir veggen mekanisk svak. Alternativet om topoisomerasen beskriver kinolonenes angrepspunkt, altså et helt annet ledd i cellen.",
    },
    {
      question: "Hvorfor rammer betalaktamene bakterien og ikke vertens egne celler?",
      options: ["Menneskeceller har ingen cellevegg å bygge kryssbindinger i", "Menneskeceller bygger cellevegg av protein i stedet for sukker", "Betalaktamene slipper ikke gjennom menneskecellens membran", "Betalaktamene brytes ned av leveren før de når vevets celler"],
      explanation: "Selektiviteten hviler på at angrepspunktet bare finnes hos bakterien: menneskeceller har cellemembran, men ingen peptidoglykanvegg. Alternativet om at midlene ikke slipper gjennom membranen gjør selektiviteten til et transportspørsmål, mens den i virkeligheten er et spørsmål om at målskiven mangler.",
    },
    {
      question: "Hva er angrepspunktet for kinolonene?",
      options: ["Enzymene som kveiler og løser opp bakteriens DNA", "Enzymet som kryssbinder sukkerkjedene i celleveggen", "Den lille underenheten i bakteriens eget ribosom", "Byggesteinen som monteres inn i peptidoglykannettverket"],
      explanation: "Kinolonene hemmer gyrase og topoisomerase, enzymene som håndterer vridningen i DNA-tråden under replikasjon og avlesing. Alternativet om kryssbinding i celleveggen er betalaktamenes angrepspunkt, og de to forveksles ofte fordi begge til slutt stanser veksten.",
    },
    {
      question: "Hva har makrolider og aminoglykosider felles?",
      options: ["Begge angriper bakterieribosomet og stanser proteinsyntesen", "Begge angriper celleveggen og gjør bakterien osmotisk sårbar", "Begge hemmer enzymene som kveiler bakteriens arvestoff", "Begge binder seg til byggesteinen som veggen monteres av"],
      explanation: "Begge gruppene binder seg til bakterieribosomet, som er bygd annerledes enn vårt eget, og stanser produksjonen av protein. Alternativet om celleveggen gjelder betalaktamene og vankomycin, som angriper et helt annet sted i cellen.",
    },
    {
      question: "Hvordan skiller vankomycins angrepspunkt seg fra betalaktamenes?",
      options: ["Vankomycin binder byggesteinen, betalaktam binder enzymet", "Vankomycin binder enzymet, betalaktam binder byggesteinen", "Vankomycin binder ribosomet, betalaktam binder celleveggen", "Vankomycin binder DNA-et, betalaktam binder cellemembranen"],
      explanation: "Begge midlene stanser byggingen av celleveggen, men de griper inn på hver sin side av reaksjonen: vankomycin dekker til selve byggesteinen, betalaktamene blokkerer enzymet som monterer den inn. Alternativet som snur dette er den vanligste forvekslingen i oppgavetypen.",
    },
    {
      question: "Hva gjør betalaktamase med et betalaktamantibiotikum?",
      options: ["Spalter ringen i molekylet, slik at det mister virkningen", "Pumper molekylet ut av cellen før det rekker å virke", "Endrer bakteriens eget enzym så molekylet ikke binder seg", "Dekker molekylet med polysakkarid så det ikke gjenkjennes"],
      explanation: "Betalaktamase er et enzym som hydrolyserer betalaktamringen, og uten ringen kan molekylet ikke lenger binde transpeptidasen. Alternativet om endret målenzym beskriver mecA-mekanismen, som er en helt annen vei til samme resultat.",
    },
    {
      question: "Hva er mekanismen bak resistensen som mecA-genet gir?",
      options: ["Bakterien lager et endret målenzym som midlet binder dårlig", "Bakterien lager et enzym som spalter selve midlet i to deler", "Bakterien stenger poreproteinene i den ytre membranen sin", "Bakterien slutter å bygge cellevegg og trenger ikke enzymet"],
      explanation: "mecA koder for en variant av det penicillinbindende proteinet som utfører den samme jobben, men som betalaktamene binder seg dårlig til. Alternativet om et spaltende enzym beskriver betalaktamase, og skillet mellom endret målsete og nedbrytning er selve poenget i spørsmålet.",
    },
    {
      question: "Hva betyr det at et resistensenzym har utvidet spektrum?",
      options: ["At det inaktiverer flere beslektede midler enn forløperen sin", "At det virker på både bakterier, sopp og virus samtidig", "At det finnes hos flere bakteriearter enn forløperen sin", "At det virker både i cytoplasma og i det ytre miljøet"],
      explanation: "Utvidet spektrum sier noe om hvilke molekyler enzymet klarer å bryte ned, ikke om hvor det finnes. Alternativet om utbredelse blant arter er nær, men det beskriver spredning av genet, ikke bredden i enzymets virkning.",
    },
    {
      question: "Hvilken resistensmekanisme kalles effluks?",
      options: ["Aktiv utpumping av midlet før det rekker å virke", "Aktiv nedbrytning av midlet med et utskilt enzym", "Endring av bindingssetet så midlet ikke fester seg", "Fortykning av kapselen så midlet ikke slipper inn"],
      explanation: "Effluks er pumper i membranen som frakter stoffet ut igjen, slik at konsentrasjonen inne i cellen aldri blir høy nok. Alternativet om nedbrytning gjelder enzymatisk inaktivering, og forskjellen er at midlet ved effluks forlater cellen kjemisk uendret.",
    },
    {
      question: "Hva menes med iboende resistens, i motsetning til ervervet resistens?",
      options: ["At arten aldri har hatt angrepspunktet midlet krever", "At arten har fått et resistensgen fra en annen bakterie", "At arten har mutert bindingssetet sitt under behandling", "At arten pumper midlet ut med en nyervervet membranpumpe"],
      explanation: "Iboende resistens er en egenskap ved arten selv, som når Mycoplasma mangler den celleveggen betalaktamene forutsetter. De tre andre alternativene beskriver alle mekanismer bakterien har tilegnet seg, altså ervervet resistens.",
    },
    {
      question: "Hvordan kan et resistensgen spre seg mellom bakterier i samme miljø?",
      options: ["Ved overføring av plasmider mellom celler som lever side om side", "Ved at alle bakteriene muterer likt i det samme genet samtidig", "Ved at genet skilles ut som toksin og tas opp av naboene", "Ved at kapselen overføres fra en celle til en annen ved kontakt"],
      explanation: "Plasmider er små ringformede DNA-molekyler som kan flyttes fra celle til celle, og et resistensgen på et plasmid kan derfor spre seg mye raskere enn ved mutasjon alene. Alternativet om samtidige like mutasjoner beskriver en tilfeldighet som ikke forklarer rask spredning.",
    },
    {
      question: "Hva er forskjellen på et baktericid og et bakteriostatisk middel?",
      options: ["Baktericid dreper cellene, bakteriostatisk stanser veksten", "Baktericid stanser veksten, bakteriostatisk dreper cellene", "Baktericid virker på gram-positive, bakteriostatisk på negative", "Baktericid virker i vev, bakteriostatisk bare i laboratoriet"],
      explanation: "Et baktericid middel dreper bakteriecellene, mens et bakteriostatisk middel hindrer dem i å formere seg og overlater resten til immunforsvaret. Alternativet som knytter begrepene til gram-gruppene blander sammen virkemåte og hvilke bakterier midlet treffer.",
    },
    {
      question: "Hvorfor virker ikke betalaktamene på en bakterie uten cellevegg?",
      options: ["Fordi kryssbindingen de skal hemme, ikke finnes i cellen", "Fordi cellen skiller ut et enzym som spalter dem straks", "Fordi cellen mangler membranen midlet må gjennom", "Fordi cellen deler seg for raskt til at midlet rekker å virke"],
      explanation: "Betalaktamene virker ved å hindre kryssbinding i peptidoglykanet, og uten peptidoglykan finnes ikke reaksjonen de skal gripe inn i. Alternativet om et spaltende enzym er en ekte mekanisme hos andre bakterier, men den forutsetter at bakterien har skaffet seg enzymet.",
    },
    {
      question: "Hvorfor er bakterieribosomet et brukbart angrepspunkt i det hele tatt?",
      options: ["Fordi det er bygd annerledes enn ribosomet i våre egne celler", "Fordi det ligger utenfor cellemembranen og er lett tilgjengelig", "Fordi det bare finnes i bakterier som deler seg svært raskt", "Fordi det er identisk med vårt eget og derfor lett å forutsi"],
      explanation: "Bakterieribosomet skiller seg strukturelt fra vårt, og det er nettopp forskjellen som gjør at et middel kan binde det ene og ikke det andre. Alternativet om at det er identisk med vårt eget ville fjernet hele grunnlaget for selektiviteten.",
    },
  ],
  'med1100-11-3': [
    {
      question: "Hvor foregår replikasjonen hos de fleste RNA-virus?",
      options: ["I cytoplasma, der virusets egne enzymer arbeider", "I cellekjernen, der vertens polymeraser arbeider", "I mitokondriene, der virusets arvestoff kopieres", "I det ru endoplasmatiske retikulum, ved ribosomene"],
      explanation: "De fleste RNA-virus tar med seg sin egen polymerase og kopierer arvestoffet i cytoplasma. Alternativet om cellekjernen beskriver hovedregelen for DNA-virus, som bruker vertens kjerneapparat — og forvekslingen av de to er en av de faste fellene.",
    },
    {
      question: "Hvor foregår replikasjonen hos de fleste DNA-virus?",
      options: ["I cellekjernen, der vertens eget kopiapparat finnes", "I cytoplasma, der virusets eget kopiapparat finnes", "I lysosomene, der arvestoffet beskyttes mot nedbrytning", "I Golgi-apparatet, samtidig med at kapsidet settes sammen"],
      explanation: "DNA-virus utnytter som hovedregel vertscellens polymeraser, og de holder til i kjernen. Alternativet om cytoplasma er hovedregelen for RNA-virus, og det finnes unntak i begge retninger — men hovedregelen er den eksamen spør etter.",
    },
    {
      question: "Hva menes med antigen drift hos et virus?",
      options: ["Små punktmutasjoner som endrer overflaten gradvis", "Bytte av hele gensegmenter mellom to virusstammer", "Tap av kappen slik at kapsidet blir liggende bart", "Overgang fra latent tilstand til aktiv formering"],
      explanation: "Drift er den gradvise endringen som følger av småfeil under kopiering av arvestoffet, og den forklarer hvorfor immuniteten svekkes litt for hvert år. Alternativet om bytte av hele gensegmenter beskriver shift, som gir et mye større sprang på én gang.",
    },
    {
      question: "Hva menes med antigen shift hos et virus?",
      options: ["Ombytting av hele gensegmenter mellom to ulike stammer", "Gradvis opphopning av små feil ved hver ny kopiering", "Innsetting av virusets arvestoff i vertens eget kromosom", "Skifte fra ett vertsorgan til et annet under infeksjonen"],
      explanation: "Shift forutsetter at to ulike stammer infiserer samme celle og bytter hele segmenter, slik at overflaten endres brått og kraftig. Alternativet om gradvis opphopning av feil er drift, og skillet mellom stort sprang og små skritt er selve poenget.",
    },
    {
      question: "Hva er grunnlaget for acyclovirs selektivitet?",
      options: ["Stoffet aktiveres av et virusenzym som friske celler mangler", "Stoffet binder seg bare til reseptorer på infiserte celler", "Stoffet brytes ned av alle celler bortsett fra de infiserte", "Stoffet slipper bare gjennom membranen i infiserte celler"],
      explanation: "Acyclovir må fosforyleres av virusets egen tymidinkinase før det blir aktivt, og enzymet finnes bare i celler som allerede er infisert. Alternativet om selektiv membranpassasje flytter selektiviteten til opptaket, mens den i virkeligheten ligger i aktiveringssteget inne i cellen.",
    },
    {
      question: "Hva innebærer latens hos et virus?",
      options: ["Virusets arvestoff er til stede uten at nye partikler lages", "Viruset lager stadig nye partikler, men i svært lavt tempo", "Viruset er fullstendig fjernet, men antistoffene er igjen", "Viruset ligger utenfor cellene og venter på en ny vert"],
      explanation: "Under latens er arvestoffet bevart i cellen uten at det produseres nye viruspartikler, og infeksjonen kan blusse opp igjen senere. Alternativet om lav, men pågående produksjon er nær, men da er infeksjonen aktiv og ikke latent.",
    },
    {
      question: "Hva er den vanligste utløseren for at et latent virus reaktiveres?",
      options: ["Svekket cellulær immunkontroll hos verten", "Økt antall antistoffer i vertens blodbane", "Tap av virusets egen kappe under latensen", "Lavere kroppstemperatur enn normalt om natten"],
      explanation: "Latente virus holdes i sjakk av vertens T-celler, og svikter denne kontrollen, kan produksjonen starte igjen. Alternativet om økt antistoffmengde peker feil vei: antistoffer virker på frie partikler og holder ikke det latente arvestoffet nede.",
    },
    {
      question: "Hva kjennetegner Candida albicans som mikrobe?",
      options: ["En gjærsopp som normalt finnes hos friske mennesker", "En muggsopp som bare finnes i jord og forråtnende materiale", "En bakterie uten cellevegg som lever inne i vertens celler", "Et kappekledd virus som formerer seg i slimhinnens celler"],
      explanation: "Candida albicans er en gjærsopp som er del av normalfloraen hos mange, og som først gir problemer når balansen eller immunforsvaret svikter. Alternativet om at det er en bakterie uten cellevegg beskriver Mycoplasma, altså en helt annen organismegruppe.",
    },
    {
      question: "Hva menes med en opportunistisk infeksjon?",
      options: ["En infeksjon med en mikrobe som normalt ikke gir sykdom", "En infeksjon som alltid oppstår ved første møte med mikroben", "En infeksjon som spres direkte fra person til person ved kontakt", "En infeksjon som bare rammer mikrober i vertens normalflora"],
      explanation: "Opportunister utnytter en åpning — svekket immunforsvar eller forstyrret normalflora — og gir sykdom hos noen selv om de er harmløse hos de fleste. Alternativet om at infeksjonen alltid oppstår ved første møte beskriver det motsatte av en opportunist.",
    },
    {
      question: "Hvilken rolle spiller normalfloraen for verten?",
      options: ["Den opptar plass og næring som ellers kunne kolonisert av andre", "Den bryter ned alle inntrengere med toksiner den skiller ut", "Den erstatter immunforsvaret på slimhinnene fullstendig", "Den holder seg passiv og påvirker ikke andre mikrober i det hele tatt"],
      explanation: "Normalfloraen konkurrerer om plass, feste og næring, og gjør det dermed vanskeligere for andre mikrober å etablere seg. Alternativet om at floraen skiller ut toksiner mot alle inntrengere overdriver mekanismen til noe aktivt og bredt som den ikke er.",
    },
    {
      question: "Hva er forskjellen mellom kolonisering og infeksjon?",
      options: ["Kolonisering gir ingen vevsskade, infeksjon gjør det", "Kolonisering gir vevsskade, infeksjon gjør det ikke", "Kolonisering skyldes virus, infeksjon skyldes bakterier", "Kolonisering skjer i blodet, infeksjon bare på slimhinner"],
      explanation: "Kolonisering betyr at mikroben er til stede og formerer seg uten å gjøre skade, mens infeksjon innebærer vevsskade eller sykdom. Alternativet som knytter skillet til mikrobetype blander sammen hvem som er til stede og hva som faktisk skjer.",
    },
    {
      question: "Hva slags struktur er et viruskapsid?",
      options: ["En proteinkappe som omslutter og beskytter arvestoffet", "En fettholdig membran viruset stjeler fra vertscellen", "Et enzym som kopierer virusets arvestoff i cytoplasma", "Et sukkerlag som hindrer at viruset blir fagocytert"],
      explanation: "Kapsidet er bygd av proteinunderenheter og pakker inn arvestoffet. Alternativet om en fettholdig membran beskriver kappen, som ligger utenpå kapsidet hos de virusene som har den — og bare hos dem.",
    },
    {
      question: "Hva er en av de viktigste følgene av at et virus har kappe?",
      options: ["Det tåler uttørking og såpe dårligere enn et kappeløst virus", "Det tåler uttørking og såpe bedre enn et kappeløst virus", "Det kan replikere uten å komme inn i en vertscelle", "Det kan bare infisere bakterier, ikke menneskeceller"],
      explanation: "Kappen er en fettholdig membran, og fett lar seg lett bryte opp av såpe og uttørking, så kappekledde virus er mer sårbare utenfor verten. Alternativet som snur dette er den vanligste feilen: robusthet i miljøet hører til de kappeløse virusene.",
    },
    {
      question: "Hva gjør et nevrotoksin som tetanus- og botulinumtoksinet?",
      options: ["Griper inn i signaloverføringen mellom nerve og muskel", "Bryter ned selve nervecellens myelinskjede utenfra", "Hemmer proteinsyntesen i alle kroppens celler samtidig", "Utløser en bred betennelsesreaksjon gjennom TLR4"],
      explanation: "Begge toksinene virker på overgangen mellom nerve og muskel og forstyrrer signaloverføringen der, om enn i hver sin retning. Alternativet om TLR4 beskriver lipopolysakkaridets virkning, som er en uspesifikk betennelsesrespons og ikke et presist angrep.",
    },
  ],
  'med1100-12-1': [
    {
      question: "Hvilket trekk kjennetegner en moden erytrocytt i et blodutstryk?",
      options: ["Ingen cellekjerne, og et blekere felt midt i cellen", "En stor rund kjerne som fyller nesten hele cellen", "En kjerne med tre til fem lapper og fine granula", "En nyreformet kjerne og rikelig med grått cytoplasma"],
      explanation: "Den modne erytrocytten har kvittet seg med kjernen, og den bikonkave formen gjør at midten slipper gjennom mer lys og ser blekere ut. Alternativet med en stor rund kjerne og smal cytoplasmarand beskriver lymfocytten, som er den vanligste forvekslingen ved lav forstørrelse.",
    },
    {
      question: "Hvilken celle har tre til fem kjernelapper og fine granula?",
      options: ["Nøytrofil granulocytt", "Eosinofil granulocytt", "Basofil granulocytt", "Liten moden lymfocytt"],
      explanation: "Den segmenterte kjernen med flere lapper og et finkornet cytoplasma er nøytrofilens signatur. Eosinofilen har som regel bare to lapper og tydelig grovere, kraftig fargede granula, og det er antall lapper pluss granulastørrelsen som skiller dem.",
    },
    {
      question: "Hva kjennetegner en eosinofil granulocytt i utstryket?",
      options: ["To kjernelapper og grove, kraftige granula", "Fem kjernelapper og svært fine, blasse granula", "En rund kjerne uten lapper og helt uten granula", "En nyreformet kjerne og få, spredte små granula"],
      explanation: "Eosinofilen har som regel en tolappet kjerne og store, tydelige granula som tar den røde fargen kraftig. Alternativet med fem lapper og fine granula beskriver nøytrofilen, og det er nettopp granulastørrelsen som skiller de to sikrest.",
    },
    {
      question: "Hvorfor kan kjernen være vanskelig å se i en basofil granulocytt?",
      options: ["Fordi de store, mørke granula legger seg over kjernen", "Fordi cellen mangler kjerne slik erytrocytten gjør", "Fordi kjernen er svært liten og ligger helt i kanten", "Fordi cytoplasma er så mørkt at kjernen forsvinner i det"],
      explanation: "Basofilen er full av store granula som farges mørkt og som legger seg oppå kjernen slik at omrisset drukner. Alternativet om at cellen mangler kjerne gjelder erytrocytten og trombocytten, ikke granulocyttene.",
    },
    {
      question: "Hva skiller en monocytt fra en lymfocytt i utstryket?",
      options: ["Monocytten er større og har en nyreformet kjerne", "Monocytten er mindre og har en helt rund kjerne", "Monocytten mangler kjerne og har blekt cytoplasma", "Monocytten har flere kjernelapper og grove granula"],
      explanation: "Monocytten er den største av de hvite cellene i utstryket, med rikelig cytoplasma og en nyre- eller bønneformet kjerne. Lymfocytten er mindre, har en rund kjerne som fyller nesten hele cellen, og bare en smal rand cytoplasma rundt.",
    },
    {
      question: "Hva er en retikulocytt?",
      options: ["En nylig dannet erytrocytt med litt RNA igjen", "En umoden granulocytt med rester av kjerne igjen", "En blodplate som nettopp er avsnørt fra morcellen", "En lymfocytt som nettopp har forlatt lymfeknuten"],
      explanation: "Retikulocytten er den yngste erytrocyttformen i blodet og inneholder fortsatt litt RNA, som gir cytoplasma et blåligere skjær. Alternativet om en umoden granulocytt gjelder en helt annen modningsrekke, og der er det kjernens form som forteller om alderen.",
    },
    {
      question: "Hva er en trombocytt?",
      options: ["Et cellefragment uten kjerne, avsnørt fra en større celle", "En liten hel celle med kjerne som sirkulerer i blodet", "En umoden erytrocytt som ennå ikke har mistet kjernen", "En granulocytt som har mistet kjernen etter aktivering"],
      explanation: "Blodplaten er ikke en hel celle, men et fragment som er avsnørt fra megakaryocytten i benmargen, og den har derfor ingen kjerne. Alternativet om en liten hel celle med kjerne er nær i størrelse, men bommer på det som faktisk definerer trombocytten.",
    },
    {
      question: "Hvor foregår hematopoiesen tidlig i fosterlivet?",
      options: ["I plommesekken", "I benmargen", "I lymfeknutene", "I brisselen"],
      explanation: "Blodcelledannelsen starter i plommesekken før noe skjelett er på plass, og flyttes senere til lever og milt før den ender i benmargen. Alternativet benmarg er riktig for den voksne, men er nettopp det som gjør tidsrekkefølgen til en felle.",
    },
    {
      question: "Hvor foregår hematopoiesen midt i fosterlivet?",
      options: ["I leveren, og delvis i milten", "I plommesekken, som gjennom hele svangerskapet", "I benmargen i de lange rørknoklene", "I brisselen, sammen med T-cellemodningen"],
      explanation: "Etter plommesekkfasen overtar leveren som hovedsted, med milten som bidragsyter, før benmargen tar over mot slutten av svangerskapet. Alternativet om benmargen er riktig senere i forløpet, og det er rekkefølgen som testes.",
    },
    {
      question: "Hvor ligger den blodproduserende margen hos en voksen?",
      options: ["I det aksiale skjelettet og de proksimale endene av lange knokler", "Jevnt fordelt i alle knokler, som hos det nyfødte barnet", "Først og fremst i skaftet på lårbenet og overarmsbenet", "I leveren og milten, som overtar hele produksjonen etter fødselen"],
      explanation: "Hos den voksne har den røde margen trukket seg tilbake til ryggvirvler, ribben, brystben, bekken, kranium og de proksimale endene av lårben og overarmsben. Alternativet om jevn fordeling i alle knokler beskriver situasjonen hos det lille barnet, ikke hos den voksne.",
    },
    {
      question: "Hvilken rekkefølge følger den myeloide modningsrekken?",
      options: ["Myeloblast, promyelocytt, myelocytt, stavkjernet, segmentkjernet", "Myelocytt, myeloblast, promyelocytt, segmentkjernet, stavkjernet", "Promyelocytt, myeloblast, myelocytt, segmentkjernet, stavkjernet", "Segmentkjernet, stavkjernet, myelocytt, promyelocytt, myeloblast"],
      explanation: "Modningen går fra den store blasten med løst kromatin og synlig nukleolus til den ferdige cellen med segmentert kjerne, og kjernen blir mer og mer innsnevret underveis. Alternativet som starter med den segmentkjernede cellen leser rekken baklengs, altså fra ferdig til umoden.",
    },
    {
      question: "Hva kjennetegner en blast i et benmargsutstryk?",
      options: ["Stor celle med løst kromatin og synlig nukleolus", "Liten celle med tett kromatin og ingen nukleolus", "Celle uten kjerne, men med rikelig med granula", "Celle med segmentert kjerne og fine granula"],
      explanation: "Blasten er et tidlig forstadium: den er stor, kromatinet er løst pakket fordi cellen er svært aktiv, og nukleolen er synlig. Alternativet med tett kromatin og ingen nukleolus beskriver en moden celle, altså det motsatte enden av modningsrekken.",
    },
    {
      question: "Hva betyr det at en akutt leukemi innebærer differensieringsstopp?",
      options: ["Modningen stanser, og umodne forstadier hoper seg opp", "Modningen går for fort, så cellene blir ferdige for tidlig", "Cellene modnes normalt, men brytes ned raskere enn vanlig", "Cellene modnes normalt, men forlater aldri benmargen"],
      explanation: "Når modningen stanser på et tidlig trinn, fortsetter cellene å dele seg uten å bli ferdige, og margen fylles av blaster. Alternativet om raskere nedbryting beskriver et helt annet problem, der modningen i seg selv fungerer som den skal.",
    },
    {
      question: "Hva forteller en økt andel stavkjernede nøytrofile i utstryket?",
      options: ["At margen slipper ut celler tidligere i modningen enn vanlig", "At margen har stanset produksjonen av nøytrofile helt", "At de modne nøytrofile har mistet kjernelappene sine", "At cellene har ligget for lenge i prøveglasset før farging"],
      explanation: "Stavkjernede celler er nøytrofile som ennå ikke har fått segmentert kjerne, og en økt andel av dem betyr at margen leverer fra seg celler tidligere i modningen. Alternativet om at modne celler mister lappene sine snur modningsretningen: kjernen blir mer segmentert med alderen, ikke mindre.",
    },
  ],
  'med1100-12-2': [
    {
      question: "Hva er det første som skjer i hemostasen etter en karskade?",
      options: ["Karet trekker seg sammen og strupen blodstrømmen", "Fibrinnettet felles ut og stabiliserer såret", "Plasmin bryter ned det som er dannet av fibrin", "Blodplatene brytes ned og frigjør innholdet sitt"],
      explanation: "Vasokonstriksjonen kommer først og reduserer blodtapet før noe annet rekker å skje. Alternativet om fibrinnettet hører til det siste trinnet, den sekundære hemostasen, og rekkefølgen er selve poenget i spørsmålet.",
    },
    {
      question: "Hva består den primære hemostasen av?",
      options: ["Blodplater fester seg og bygger en plugg", "Fibrintråder som spinnes til et fast nett", "Plasmin som løser opp den ferdige proppen", "Vasokonstriksjon i det skadde karets vegg"],
      explanation: "Primær hemostase er blodplatepluggen: platene fester seg til det blottlagte underlaget, aktiveres og klebes sammen. Alternativet om fibrintråder er den sekundære hemostasen, som kommer etterpå og stabiliserer den løse pluggen.",
    },
    {
      question: "Hva er trombins viktigste oppgave i koagulasjonen?",
      options: ["Å spalte fibrinogen til fibrin, som felles ut som tråder", "Å spalte fibrin til fibrinogen, som løses opp i plasma", "Å binde blodplatene direkte til hverandre uten fibrin", "Å trekke sammen karveggen der skaden har oppstått"],
      explanation: "Trombin er enzymet som gjør det løselige fibrinogenet om til uløselig fibrin, og fibrintrådene danner nettet som holder proppen sammen. Alternativet som snur reaksjonen beskriver oppløsning i stedet for utfelling, altså det motsatte av koagulasjon.",
    },
    {
      question: "Hva gjør plasmin?",
      options: ["Bryter ned fibrinnettet når såret gror", "Bygger fibrinnettet når karet er skadet", "Aktiverer blodplatene ved selve karskaden", "Trekker sammen karveggen etter skaden"],
      explanation: "Plasmin er enzymet i fibrinolysen og river ned nettet igjen når det ikke lenger trengs. Alternativet om å bygge nettet beskriver trombins rolle, og de to enzymene står for hver sin retning i det samme systemet.",
    },
    {
      question: "Hvorfor er hemoglobinets metningskurve S-formet?",
      options: ["Fordi bindingssetene samarbeider når oksygen bindes", "Fordi hemoglobin bare har ett bindingssete for oksygen", "Fordi oksygen bindes like lett ved alle partialtrykk", "Fordi kurven måles ved to ulike temperaturer samtidig"],
      explanation: "Hemoglobin har fire bindingsseter, og binding av det første gjør molekylet mer villig til å ta imot de neste. Alternativet om ett bindingssete ville gitt en helt annen kurveform, uten den karakteristiske bratte midtdelen.",
    },
    {
      question: "Hva skjer med oksygenavgivelsen når pH synker i vevet?",
      options: ["Oksygen slippes lettere ut til vevet", "Oksygen holdes fastere av hemoglobinet", "Oksygenopptaket i lungen stanser", "Hemoglobinet mister ett av bindingssetene"],
      explanation: "Lav pH forskyver kurven mot høyre, og hemoglobinets affinitet for oksygen synker, slik at mer oksygen frigjøres der det trengs. Alternativet om at oksygen holdes fastere er den vanligste feilen: det beskriver en venstreforskyvning, altså motsatt retning.",
    },
    {
      question: "Hvilken kombinasjon av forhold gir høyreforskyvning av metningskurven?",
      options: ["Lav pH, høy karbondioksid og høy temperatur", "Høy pH, lav karbondioksid og lav temperatur", "Lav pH, lav karbondioksid og lav temperatur", "Høy pH, høy karbondioksid og høy temperatur"],
      explanation: "Høyreforskyvning oppstår nettopp under de forholdene som råder i et arbeidende vev, og resultatet er at mer oksygen avgis der. Alternativet med høy pH og lav karbondioksid beskriver forholdene i lungen, som gir venstreforskyvning og lettere opptak.",
    },
    {
      question: "Hva er den biologiske nytten av Bohr-effekten?",
      options: ["Oksygen leveres der forbruket faktisk er størst", "Oksygen bindes like sterkt i alle vev til enhver tid", "Karbondioksid transporteres raskere gjennom lungen", "Hemoglobinet beskyttes mot nedbrytning i vevet"],
      explanation: "Et arbeidende vev lager mer karbondioksid, varme og syre, og nettopp disse forholdene får hemoglobinet til å slippe oksygenet der behovet er størst. Alternativet om lik binding i alle vev ville fjernet hele nytten av mekanismen.",
    },
    {
      question: "Hva er 2,3-BPG sin virkning på hemoglobin?",
      options: ["Senker affiniteten, slik at mer oksygen avgis", "Øker affiniteten, slik at mindre oksygen avgis", "Erstatter oksygen i alle fire bindingssetene", "Bryter ned hemoglobin til frie hemgrupper"],
      explanation: "2,3-BPG binder seg til hemoglobinet og stabiliserer formen som holder dårligst på oksygen, slik at kurven forskyves mot høyre. Alternativet om økt affinitet peker motsatt vei og ville gitt dårligere oksygenlevering til vevet.",
    },
    {
      question: "Hva kjennetegner leukotriener som betennelsesmediatorer?",
      options: ["De nydannes fra arakidonsyre når cellen aktiveres", "De ligger ferdiglaget i granula og frigjøres straks", "De bygges av aminosyrer i det ru endoplasmatiske retikulum", "De dannes bare i benmargen og fraktes ut med blodet"],
      explanation: "Leukotriener lagres ikke, men syntetiseres på stedet fra arakidonsyre i membranen når cellen aktiveres, og derfor kommer virkningen litt forsinket. Alternativet om ferdiglagrede molekyler i granula beskriver histamin, som er nettopp den motsatte typen mediator.",
    },
    {
      question: "Hvor kommer arakidonsyren fra når leukotriener skal lages?",
      options: ["Fra fosfolipidene i cellens egen membran", "Fra aminosyrene i cellens frie aminosyrepool", "Fra glykogenlageret i cellens cytoplasma", "Fra kolesterolet i cellens ytre membranlag"],
      explanation: "Arakidonsyre frigjøres fra membranens fosfolipider av et enzym når cellen aktiveres, og først da starter syntesen. Alternativet om aminosyrer bommer på molekyltypen: leukotriener er ikke proteiner, men fettsyrederivater.",
    },
    {
      question: "Hva er hovedforskjellen mellom histamin og leukotriener som mediatorer?",
      options: ["Histamin er ferdiglaget, leukotriener lages ved aktivering", "Histamin lages ved aktivering, leukotriener er ferdiglaget", "Histamin er et protein, leukotriener er nukleinsyrer", "Histamin virker bare i blodet, leukotriener bare i tarmen"],
      explanation: "Histamin ligger klart i granula og slippes ut i løpet av sekunder, mens leukotriener må syntetiseres fra arakidonsyre etter at cellen er aktivert. Alternativet som snur dette er den vanligste feilen, og forskjellen forklarer nettopp hvorfor de to virker på hvert sitt tidspunkt.",
    },
  ],
  'med1100-13-1': [
    {
      question: "Hvilken av grenene under er en gren av a. coronaria dextra?",
      options: ["Ramus marginalis dexter, som løper langs hjertets nedre kant", "Ramus circumflexus, som svinger rundt mot venstre og bakover", "Ramus interventricularis anterior, som går ned mot apex cordis", "Ramus marginalis sinister, som følger venstre kammers kant"],
      explanation: "Ramus marginalis dexter er gren av høyre kransarterie, og bøyningen dexter peker samme vei — ramus er hankjønn. Grenen som svinger rundt mot venstre og bakover, ligger riktignok i samme fure, men kommer fra venstre kransarterie, og nettopp det paret er den vanligste fellen i blokk 3.",
    },
    {
      question: "Hva forsyner ramus interventricularis anterior?",
      options: ["Forveggen av venstre kammer, fremre septum og apex", "Sideveggen av venstre kammer og en del av bakveggen", "Høyre forkammer, høyre kammer og bakre del av septum", "Hele høyre kammer, AV-knuten og hjertets nedre kant"],
      explanation: "Grenen løper i furen på hjertets forside, rett over kammerskilleveggen, og forsyner derfor forveggen, den fremre delen av septum og hjertespissen. Alternativet som nevner sideveggen, beskriver ramus circumflexus — begge kommer fra venstre kransarterie, men de forsyner hver sin flate.",
    },
    {
      question: "Hvor springer kransarteriene ut fra?",
      options: ["Fra aortaroten, i utbuktningene over valva aortae", "Fra truncus pulmonalis, like over pulmonalklaffen", "Fra arcus aortae, mellom de tre store grenene der", "Fra sinus coronarius, som løper i sulcus coronarius"],
      explanation: "Begge kransarteriene starter helt i begynnelsen av det store kretsløpet, i utbuktningene i aortaveggen over aortaklaffen. Alternativet som peker på truncus pulmonalis, er galt både anatomisk og funksjonelt: det karet fører oksygenfattig blod til lungene.",
    },
    {
      question: "Hvilke to grener deler a. coronaria sinistra seg i?",
      options: ["Ramus interventricularis anterior og ramus circumflexus", "Ramus interventricularis anterior og ramus marginalis dexter", "Ramus circumflexus og ramus marginalis dexter", "Ramus marginalis dexter og ramus marginalis sinister"],
      explanation: "Venstre kransarterie har en kort hovedstamme som straks deler seg i nøyaktig disse to grenene. Alle alternativene som inneholder ramus marginalis dexter, er gale av samme grunn: den grenen hører til høyre kransarterie.",
    },
    {
      question: "Hva menes med koronardominans?",
      options: ["Hvilken hovedstamme som gir grenen i den bakre kammerfuren", "Hvilken av de to kransarteriene som har størst diameter", "Hvilken side av hjertet som pumper det største volumet", "Hvilken av hjertets fire klaffer som lukkes først i syklusen"],
      explanation: "Dominans handler om hvem som forsyner hjertets bakvegg gjennom grenen i sulcus interventricularis posterior, og det varierer mellom mennesker. Høyredominans er klart vanligst, og derfor er et alternativ som sier at høyre kransarterie alltid forsyner bakveggen, for sterkt formulert.",
    },
    {
      question: "Hvilken av hjertets klaffer har to blad?",
      options: ["Valva mitralis, mellom venstre forkammer og venstre kammer", "Valva tricuspidalis, mellom høyre forkammer og høyre kammer", "Valva aortae, i utløpet fra venstre kammer til aorta", "Valva trunci pulmonalis, i utløpet fra høyre kammer"],
      explanation: "Mitralklaffen kalles også bicuspidalis nettopp fordi den har to blad, og den ligger på venstre side. Tricuspidalklaffen har tre blad og ligger til høyre — huskeregelen er tre til høyre, to til venstre.",
    },
    {
      question: "Hvilke av hjertets klaffer har chordae tendineae?",
      options: ["Seilklaffene, altså valva tricuspidalis og valva mitralis", "Lommeklaffene, altså valva aortae og valva trunci pulmonalis", "Alle fire klaffene, men bare på den ene siden av bladet", "Bare valva aortae, som har tre halvmåneformede lommer"],
      explanation: "Senetrådene går fra papillarmusklene opp til bladene på de to seilklaffene og hindrer at bladene slås opp i forkammeret. Lommeklaffene trenger dem ikke, fordi de lukker seg selv av tilbakestrømmen — et alternativ som gir aortaklaffen senetråder, er derfor galt.",
    },
    {
      question: "Hvilken klaff passerer blodet rett etter ventriculus dexter?",
      options: ["Valva trunci pulmonalis, på vei ut mot lungene", "Valva mitralis, på vei inn i venstre kammer", "Valva aortae, på vei ut i det store kretsløpet", "Valva tricuspidalis, på vei inn i høyre kammer"],
      explanation: "Fra høyre kammer går blodet gjennom pulmonalklaffen ut i truncus pulmonalis og videre til lungene. Tricuspidalklaffen passeres på vei INN i det samme kammeret, og forvekslingen mellom inngangs- og utgangsporten er den vanligste feilen på dette spørsmålet.",
    },
    {
      question: "Hva er fossa ovalis?",
      options: ["Arret i septum interatriale etter fosterets foramen ovale", "En åpning i septum interventriculare som finnes hos voksne", "Fordypningen i aortaveggen der kransarteriene springer ut", "Furen på hjertets bakside der sinus coronarius løper"],
      explanation: "Før fødselen slipper foramen ovale blod direkte fra høyre til venstre forkammer, utenom lungene; etter fødselen lukkes åpningen og etterlater en grunn fordypning. Alternativet som legger den til kammerskilleveggen, bytter om de to septene — fossa ovalis ligger mellom forkamrene.",
    },
    {
      question: "Hvorfor er veggen tykkest rundt ventriculus sinister?",
      options: ["Fordi motstanden i det store kretsløpet er høy", "Fordi kammeret rommer et større blodvolum enn de andre", "Fordi lungekretsløpet krever et høyere trykk enn kroppen", "Fordi kammeret må trekke seg sammen raskere enn de andre"],
      explanation: "Venstre kammer pumper ut i hele kroppen og møter mye høyere motstand enn høyre, som bare pumper til lungene. Alternativet som snur trykkforholdet mellom de to kretsløpene, er nettopp den forvekslingen spørsmålet er bygd på.",
    },
    {
      question: "Hvor kjennes ictus cordis normalt?",
      options: ["I 4.–5. intercostalrom i medioklavikulærlinjen til venstre", "I 2. intercostalrom like ved brystbeinet på venstre side", "I 5. intercostalrom i fremre aksillærlinje på høyre side", "I 7. intercostalrom i medioklavikulærlinjen til venstre"],
      explanation: "Apex cordis peker nedover, framover og mot venstre, og slår mot brystveggen der. Alternativet som flytter punktet opp til andre intercostalrom, legger det i høyde med de store karene, ikke med hjertespissen.",
    },
    {
      question: "Hvor munner sinus coronarius ut?",
      options: ["I atrium dextrum, like ved AV-knuten", "I atrium sinistrum, sammen med lungevenene", "I ventriculus dexter, gjennom en egen klaff", "I v. cava superior, rett før den når hjertet"],
      explanation: "Sinus coronarius er hjertets store vene: den samler blod fra hjertemuskelen og leverer det i høyre forkammer. Alternativet som sender den til venstre forkammer, forveksler den med lungevenene, som er de eneste som munner ut der.",
    },
    {
      question: "Hvor ligger nodus sinuatrialis?",
      options: ["I veggen av atrium dextrum, nær v. cava superior", "I septum interatriale, nær utmunningen av sinus coronarius", "I septum interventriculare, like under aortaklaffen", "I veggen av atrium sinistrum, nær lungevenenes innløp"],
      explanation: "Sinusknuten er hjertets taktgiver og ligger i høyre forkammer ved innmunningen av den øvre hulvenen. Alternativet som plasserer strukturen i forkammerskilleveggen ved sinus coronarius, beskriver AV-knuten — begge er knuter i høyre forkammer, men bare den ene starter impulsen.",
    },
    {
      question: "Hva er hovedoppgaven til nodus atrioventricularis?",
      options: ["Å forsinke impulsen slik at forkamrene rekker å tømme seg", "Å starte impulsen i jevn takt uten hjelp fra nervesystemet", "Å lede impulsen raskere enn noe annet vev i hjertet gjør", "Å hindre at blodet strømmer tilbake til forkamrene"],
      explanation: "Den lave ledningshastigheten gjennom AV-knuten er ikke en svakhet, men selve poenget: uten forsinkelsen ville kamrene begynt å trekke seg sammen før forkamrene var ferdige. Alternativet om å starte impulsen beskriver sinusknuten.",
    },
    {
      question: "Hvorfor er fasciculus atrioventricularis nødvendig?",
      options: ["Fordi bindevevsskjelettet ellers isolerer kamrene elektrisk", "Fordi forkamrenes muskulatur mangler ledende celler helt", "Fordi Purkinje-fibrene bare finnes i forkamrenes vegger", "Fordi sinusknuten ligger i venstre forkammer hos de fleste"],
      explanation: "Muskulaturen i forkamre og kamre henger ikke sammen elektrisk, fordi bindevevsskjelettet mellom dem isolerer; His-bunten er den eneste broen over. Alternativet om Purkinje-fibrene snur på det: de ligger i kammermuskulaturen, ikke i forkamrene.",
    },
    {
      question: "Hvilken av formene under er riktig bøyd?",
      options: ["Ramus marginalis dexter, fordi ramus er hankjønn", "Ramus marginalis dextra, fordi ramus er hunkjønn", "Arteria coronaria dexter, fordi arteria er hankjønn", "Atrium dexter, fordi atrium regnes som hankjønn"],
      explanation: "Adjektivet retter seg etter substantivets kjønn: ramus er hankjønn og krever endelsen -er. Arteria er hunkjønn og krever dextra, og atrium er intetkjønn og krever dextrum, så begge de to andre kjønnsbestemmelsene er gale.",
    },
  ],
  'med1100-13-2': [
    {
      question: "Hvordan ligger n. phrenicus i forhold til radix pulmonis?",
      options: ["Ventralt, altså foran lungeroten, langs pericardium", "Dorsalt, altså bak lungeroten, langs oesophagus", "Inne i lungeroten, sammen med bronchus principalis", "Lateralt for lungeroten, mellom pleurabladene"],
      explanation: "N. phrenicus løper foran lungeroten, mellom hjerteposen og den mediastinale pleura, på vei ned til mellomgulvet. Alternativet som plasserer nerven bak roten, beskriver n. vagus — og å bytte om de to er den dyreste enkeltfeilen i anatomidelen av blokk 3.",
    },
    {
      question: "Hvordan ligger n. vagus i forhold til radix pulmonis?",
      options: ["Dorsalt, altså bak lungeroten, på vei mot oesophagus", "Ventralt, altså foran lungeroten, på vei mot diafragma", "Inne i lungeroten, mellom a. pulmonalis og bronkien", "Under lungeroten, mellom pleura og pericardium"],
      explanation: "N. vagus passerer bak lungeroten og fortsetter ned på spiserøret i mediastinum posterius. Alternativet som plasserer nerven foran roten, beskriver n. phrenicus, som følger forsiden fordi den skal til hjerteposen og mellomgulvet.",
    },
    {
      question: "Fra hvilke segmenter dannes n. phrenicus?",
      options: ["Fra fremre grener fra C3, C4 og C5 i halsen", "Fra fremre grener fra C5, C6 og C7 i halsen", "Fra fremre grener fra T5 til T9 i brystdelen", "Fra fremre grener fra C1, C2 og C3 i halsen"],
      explanation: "Nerven dannes høyt oppe i halsen, med hovedbidraget fra C4, selv om muskelen den forsyner ligger langt nede. Alternativet med brystsegmentene oppgir nivået for nn. splanchnici, de sympatiske nervene på vei ned til bukhulen.",
    },
    {
      question: "Hva er n. phrenicus' motoriske oppgave?",
      options: ["Den er den eneste motoriske nerven til diaphragma", "Den forsyner mm. intercostales externi og interni", "Den forsyner mm. scaleni ved forsert inspirasjon", "Den forsyner glatt muskulatur i bronkienes vegg"],
      explanation: "Diafragma har ingen annen motorisk forsyning enn n. phrenicus. Mellomribbeinsmusklene forsynes derimot av nn. intercostales, og nettopp den kontrasten mellom to pustemuskler med helt ulik nerveforsyning er en fast flervalgsfelle.",
    },
    {
      question: "Hva deler mediastinum i en øvre og en nedre del?",
      options: ["Et vannrett plan gjennom angulus sterni, i T4/T5-høyde", "Et vannrett plan gjennom bifurcatio bronchi, i T7-høyde", "Et vannrett plan gjennom hjerteposens øvre kant, i T6", "Et loddrett plan gjennom midtlinjen, mellom lungene"],
      explanation: "Planet gjennom brystbeinsvinkelen skiller mediastinum superius fra inferius, og i samme plan ligger bifurcatio tracheae og aortabuens begge ender. Alternativet med et loddrett plan deler kroppen i høyre og venstre halvdel, mens skillet i mediastinum går på tvers.",
    },
    {
      question: "Hva ligger i mediastinum medium?",
      options: ["Hjertet i pericardium og de store karenes begynnelse", "Aorta descendens, oesophagus og ductus thoracicus", "Thymus og bindevevet rett bak brystbeinets nedre del", "Trachea, arcus aortae og de tre store grenene fra buen"],
      explanation: "Den midtre delen er definert av hjerteposen med innhold, og n. phrenicus løper langs den. Alternativet med aorta descendens og spiserøret beskriver mediastinum posterius, altså rommet rett bak hjerteposen.",
    },
    {
      question: "Hvilke to strukturer ligger i mediastinum posterius?",
      options: ["Aorta descendens og oesophagus med n. vagus på seg", "Thymus og den nedre delen av v. cava superior", "Hjertet i pericardium og begynnelsen av aorta ascendens", "Arcus aortae og de tre store grenene som går ut fra den"],
      explanation: "Det bakre rommet ligger bak hjerteposen og inneholder den nedadgående aorta, spiserøret, ductus thoracicus og v. azygos. Alternativet med aortabuen hører til mediastinum superius, altså over planet gjennom angulus sterni.",
    },
    {
      question: "Hvilke grener avgir arcus aortae, i riktig rekkefølge?",
      options: ["Truncus brachiocephalicus, a. carotis communis sinistra, a. subclavia sinistra", "A. carotis communis dextra, a. subclavia dextra, truncus brachiocephalicus", "Truncus brachiocephalicus dexter og sinister, deretter aa. carotides communes", "A. subclavia dextra, a. carotis communis sinistra, aorta descendens"],
      explanation: "Buen avgir tre grener, og bare høyre side får sine to arterier fra en felles stamme. Alternativet som lister høyre halspulsåre og nøkkelbeinspulsåre som egne grener fra buen, overser nettopp at de er grener av truncus brachiocephalicus.",
    },
    {
      question: "Hvilken side forsynes av truncus brachiocephalicus?",
      options: ["Høyre side, med a. carotis communis og a. subclavia", "Venstre side, med a. carotis communis og a. subclavia", "Begge sider, med hver sin halspulsåre fra samme stamme", "Ingen av sidene; stammen går bare til brystveggen"],
      explanation: "Stammen deler seg i høyre halspulsåre og høyre nøkkelbeinspulsåre, mens venstre side får sine to arterier direkte fra buen. Alternativet som gir begge sider en felles stamme, overser asymmetrien som er selve poenget her.",
    },
    {
      question: "Under hvilken struktur snur n. laryngeus recurrens sinister?",
      options: ["Under arcus aortae, tett inntil lig. arteriosum", "Under a. subclavia dextra, oppe ved halsroten", "Under truncus pulmonalis, ved delingen i to grener", "Under a. carotis communis sinistra, på halsen"],
      explanation: "Den venstre nerven er den eneste av de to som gjør snuen inne i brysthulen, og den går rundt aortabuen ved arterieleddbåndet. Alternativet med nøkkelbeinspulsåren gjelder den høyre nerven, som snur oppe ved halsroten.",
    },
    {
      question: "Under hvilken struktur snur n. laryngeus recurrens dexter?",
      options: ["Under a. subclavia dextra, oppe ved halsroten", "Under arcus aortae, tett inntil lig. arteriosum", "Under truncus brachiocephalicus, bak brystbeinet", "Under v. cava superior, like før innmunningen"],
      explanation: "Den høyre nerven snur høyere oppe og rundt et annet kar enn den venstre, og gjør det utenfor brysthulen. Alternativet med aortabuen gjelder den venstre nerven, og forskjellen mellom de to sidene er nettopp det som gjør dette til et naturlig flervalgsspørsmål.",
    },
    {
      question: "Hva inneholder radix pulmonis?",
      options: ["Bronchus principalis, a. pulmonalis og to vv. pulmonales", "Bronchus principalis, n. phrenicus og to vv. pulmonales", "Trachea, a. pulmonalis og ductus thoracicus på venstre side", "Bronchus principalis, aorta descendens og v. azygos"],
      explanation: "Lungeroten er knippet der luftvei, arterie, vener, bronkiale kar, nerver og lymfeknuter går inn i lungen samlet. Alternativet som setter n. phrenicus inn i roten, er galt fordi nerven passerer utenom — ventralt for den.",
    },
    {
      question: "Hvor munner ductus thoracicus ut?",
      options: ["I venstre venevinkel, der halsvene og nøkkelbeinsvene møtes", "I høyre venevinkel, der halsvene og nøkkelbeinsvene møtes", "I v. cava inferior, like etter passasjen gjennom diafragma", "I atrium dextrum, like ved siden av sinus coronarius"],
      explanation: "Kroppens store lymfegang leverer lymfen tilbake til blodet oppe ved halsroten på venstre side. Alternativet med høyre venevinkel gjelder ductus lymphaticus dexter, den lille gangen som bare drenerer høyre overkvadrant.",
    },
    {
      question: "Hvor begynner ductus thoracicus?",
      options: ["Som cisterna chyli øverst i bukhulen, foran columna", "Som en fletning i mediastinum superius, bak aortabuen", "Som en gren fra v. azygos i det bakre mediastinum", "Som en utvidelse av venstre venevinkel på halsen"],
      explanation: "Gangen heter brystgangen, men den starter i buken, i den sekkformede utvidelsen som samler lymfe fra beina, bekkenet og bukorganene. Alternativet som legger starten til venevinkelen, snur strømretningen: der ender lymfen, den begynner ikke.",
    },
    {
      question: "Hvilket område drenerer ductus lymphaticus dexter?",
      options: ["Høyre side av hode og hals, høyre arm og høyre brystvegg", "Hele høyre kroppshalvdel, fra hodet og ned til høyre fot", "Begge armene og hele brystveggen, men ikke hode og hals", "Bukorganene og beina, som den fører opp til høyre side"],
      explanation: "Skillet mellom de to lymfegangene går på tvers, ikke på langs: den lille gangen tar høyre overkvadrant, den store tar resten. Alternativet som deler kroppen i en høyre og en venstre halvdel, er nettopp den vanligste misforståelsen her.",
    },
    {
      question: "Hva er lig. arteriosum?",
      options: ["Resten etter fosterets ductus arteriosus, ved aortabuen", "Resten etter fosterets foramen ovale, i forkammerveggen", "Bindevevsbåndet som fester hjerteposen til diaphragma", "Båndet som holder ductus thoracicus inntil aorta"],
      explanation: "Før fødselen leder ductus arteriosus blod fra lungearterien over i aortabuen, utenom lungene; etter fødselen lukkes karet og blir til et leddbånd. Alternativet om foramen ovale beskriver fossa ovalis — begge er arr etter fosterlivet, men de sitter på hvert sitt sted.",
    },
  ],
  'med1100-13-3': [
    {
      question: "Hvilke muskler er aktive ved rolig inspirasjon?",
      options: ["Diaphragma og mm. intercostales externi", "Diaphragma og mm. scaleni på begge sider", "Mm. intercostales interni og bukveggsmusklene", "Diaphragma alene, uten hjelp fra andre muskler"],
      explanation: "Diafragma gjør brysthulen høyere, og de ytre mellomribbeinsmusklene gjør den bredere og dypere; begge arbeider allerede ved rolig innpust. Alternativet med mm. scaleni gjør en hjelpemuskel til hovedmuskel — den kobles først inn ved forsert innpust.",
    },
    {
      question: "Hva driver rolig ekspirasjon?",
      options: ["Elastisk tilbaketrekning i lungevev og brystvegg", "Sammentrekning i mm. intercostales interni", "Sammentrekning i bukveggens fire muskelgrupper", "Sammentrekning i diaphragma, som presser luften ut"],
      explanation: "Ved rolig utpust arbeider ingen muskel: vevet er strukket ut under innpusten og trekker seg sammen igjen av seg selv. Alternativene med mellomribbeinsmuskler og bukvegg nevner ekte ekspirasjonsmuskler, men de arbeider bare ved forsert utpust.",
    },
    {
      question: "Hvilke muskler arbeider ved forsert ekspirasjon?",
      options: ["Bukveggsmusklene og mm. intercostales interni", "Bukveggsmusklene og mm. intercostales externi", "Mm. scaleni og m. sternocleidomastoideus", "Diaphragma og mm. intercostales externi"],
      explanation: "Bukveggen presser bukinnholdet opp mot mellomgulvet og gjør brysthulen mindre, mens de indre mellomribbeinsmusklene trekker ribbeina ned. Alternativet med mm. scaleni lister hjelpemuskler ved forsert INNpust, altså motsatt fase.",
    },
    {
      question: "Hva gjør mm. intercostales externi når de trekker seg sammen?",
      options: ["De løfter ribbeina oppover og utover ved innpust", "De trekker ribbeina nedover og innover ved utpust", "De strammer brystveggen uten å flytte ribbeina", "De trekker brystbeinet nedover mot mellomgulvet"],
      explanation: "Fiberretningen skrått nedover og framover gjør at det nedre ribbeinet dras opp mot det øvre, og brystkassen blir bredere og dypere. Alternativet som trekker ribbeina nedover, beskriver mm. intercostales interni, som virker i motsatt retning.",
    },
    {
      question: "Hvilken nerve forsyner diaphragma motorisk?",
      options: ["N. phrenicus, fra segmentene C3 til C5", "Nn. intercostales, fra segmentene T1 til T11", "N. vagus, som passerer gjennom hiatus oesophageus", "Nn. splanchnici, fra segmentene T5 til T12"],
      explanation: "N. phrenicus er den eneste motoriske nerven til mellomgulvet, og den kommer fra halsen selv om muskelen ligger langt nede. Nn. intercostales forsyner mellomribbeinsmusklene, ikke diafragma — det er den kontrasten spørsmålet tester.",
    },
    {
      question: "Hva passerer gjennom diafragma i T8-høyde?",
      options: ["V. cava inferior, gjennom foramen venae cavae", "Oesophagus, gjennom hiatus oesophageus i muskeldelen", "Aorta, gjennom hiatus aorticus mellom de to crura", "Ductus thoracicus, gjennom en egen åpning i senesentret"],
      explanation: "Hulvenen passerer høyest av de tre, og den gjør det gjennom centrum tendineum, som ikke trekker seg sammen. Huskeregelen er 8 til 10 til 12: cava, oesophagus, aorta — så spiserøret hører til T10, ikke T8.",
    },
    {
      question: "Hva passerer gjennom diafragma i T10-høyde?",
      options: ["Oesophagus, sammen med trunci vagales", "V. cava inferior, sammen med grener av n. phrenicus", "Aorta, sammen med ductus thoracicus og v. azygos", "Truncus sympathicus, sammen med nn. splanchnici"],
      explanation: "Spiserøret passerer gjennom muskeldelen av diafragma i T10 og har vagusstammene med seg. Alternativet med aorta og lymfegangen oppgir T12-åpningen, som ligger bak mellom de to crura.",
    },
    {
      question: "Hva passerer gjennom hiatus aorticus i T12-høyde?",
      options: ["Aorta, ductus thoracicus og v. azygos", "Aorta, oesophagus og trunci vagales", "Aorta, v. cava inferior og n. phrenicus dexter", "Aorta alene, uten andre strukturer i samme åpning"],
      explanation: "Lymfegangen og den uparede venen følger aorta gjennom den bakerste åpningen, som strengt tatt ligger bak diafragma mellom de to crura. Alternativet som setter spiserøret her, flytter T10-åpningen ned til T12.",
    },
    {
      question: "Hva kjennetegner centrum tendineum?",
      options: ["Det er diafragmas seneaktige midte, uten muskelfibre", "Det er den kraftigste muskeldelen av mellomgulvet", "Det er festet mellom de to crura, mot lendevirvlene", "Det er bindevevsplaten som kler diafragmas underside"],
      explanation: "Senesentret er der muskelfibrene fra hele omkretsen møtes, og hjerteposen er festet til oversiden av det. Fordi det ikke trekker seg sammen, holdes hulveneåpningen som ligger der, åpen når muskelen arbeider.",
    },
    {
      question: "Hvilket pleurablad ligger direkte på lungen?",
      options: ["Pleura visceralis, som følger lungen inn i fissurene", "Pleura parietalis, pars costalis, mot ribbeina", "Pleura parietalis, pars mediastinalis, mot midten", "Cupula pleurae, som stikker opp over første ribbein"],
      explanation: "Det viscerale bladet ligger som en hinne på selve lungen og slår seg om ved lungeroten, der det går over i det parietale. Alle de tre andre alternativene er deler av det parietale bladet, som kler rommet lungen ligger i.",
    },
    {
      question: "Hva er recessus costodiaphragmaticus?",
      options: ["Lommen der pars costalis møter pars diaphragmatica", "Lommen der pars costalis møter pars mediastinalis", "Spalten mellom pericardium og pleura mediastinalis", "Rommet mellom lungens lapper, der fissurene møtes"],
      explanation: "Dette er pleurahulens dypeste lomme, og lungens nedre kant fyller den ikke ved rolig pust. Alternativet med pars mediastinalis beskriver recessus costomediastinalis, lommen foran — navnet forteller hvilke to hinnedeler som møtes.",
    },
    {
      question: "Hvor ligger kar- og nerveknippet i et intercostalrom?",
      options: ["I sulcus costae, langs ribbeinets nedre kant", "I sulcus costae, langs ribbeinets øvre kant", "Midt i intercostalrommet, mellom de to muskellagene", "Inne i ribbeinets beinvev, i en egen benkanal"],
      explanation: "Furen ligger på undersiden av ribbeinet, og rekkefølgen ovenfra og ned er vene, arterie, nerve. Alternativet som flytter furen til ribbeinets øvre kant, mister nettopp den beskyttelsen som er hele poenget med plasseringen.",
    },
    {
      question: "Hvilket lag i karveggen inneholder den ringformede glatte muskulaturen?",
      options: ["Tunica media, det midterste laget i veggen", "Tunica intima, det innerste laget mot lumen", "Tunica adventitia, det ytterste bindevevslaget", "Membrana elastica interna, mellom de to innerste"],
      explanation: "Media avgjør karets vidde og er derfor tykkest i arterier, som må regulere motstanden. Tunica adventitia er tykkest i vener, men den består av bindevev og inneholder ikke ringmuskulaturen.",
    },
    {
      question: "Hva kjennetegner en fenestrert kapillær?",
      options: ["Porer gjennom endotelcellene og sammenhengende basallamina", "Åpninger mellom endotelcellene og ufullstendig basallamina", "Tett endotel uten porer og sammenhengende basallamina", "Tett endotel med porer og helt fraværende basallamina"],
      explanation: "Porene ligger gjennom cellene, mens basallaminaen utenfor er hel og holder store proteiner tilbake; typiske steder er nyrenøstet og tarmtotten. Alternativet med åpninger mellom cellene beskriver den sinusoide typen, som finnes i lever, milt og benmarg.",
    },
    {
      question: "I hvilke organer finner du sinusoide kapillærer?",
      options: ["Lever, milt og benmarg", "Nyrenøste, tarmtott og endokrine kjertler", "Skjelettmuskel, hud og sentralnervesystemet", "Lunge, hjertemuskel og glatt muskulatur"],
      explanation: "Den sinusoide typen har åpninger mellom endotelcellene og ufullstendig basallamina, slik at også store molekyler og hele celler kan passere. Alternativet med nyrenøstet og tarmtotten lister de typiske stedene for fenestrerte kapillærer, som har porer gjennom cellene i stedet.",
    },
  ],
  'med1100-14-1': [
    {
      question: "Hva er nevneren i teststørrelsen for en ett-proporsjons z-test?",
      options: ["Standardfeilen regnet under nullhypotesen, altså roten av n·p0·(1−p0)", "Standardfeilen regnet med den observerte andelen, altså roten av n·p̂·(1−p̂)", "Standardavviket i utvalget delt på roten av antallet observasjoner i utvalget", "Summen av forventede antall delt på antall grupper"],
      explanation: "Testen spør hvor sannsynlig det observerte er dersom nullhypotesen er sann, så spredningen må regnes under nullhypotesens andel. Alternativet som bruker den observerte andelen hører hjemme i konfidensintervallet, der ingen hypotese er antatt sann.",
    },
    {
      question: "Når er det påkrevd å bruke en t-verdi fra tabell i stedet for 1,96?",
      options: ["Når standardavviket er ukjent og utvalget er lite, med under 30 personer", "Når utvalget er stort nok til at normaltilnærmingen til andelen er gyldig", "Når testen er tosidig i stedet for ensidig, uansett hvor stort utvalget er", "Når det er to grupper i stedet for én, uansett hvor stort utvalget er"],
      explanation: "t-fordelingen kompenserer for at standardavviket selv er estimert, og forskjellen fra 1,96 betyr bare noe ved få frihetsgrader. At testen er tosidig påvirker hvilken kolonne du leser i tabellen, ikke om du skal bruke t eller z.",
    },
    {
      question: "Hva skiller sensitivitet fra positiv prediktiv verdi?",
      options: ["Sensitivitet er en egenskap ved testen; prediktiv verdi avhenger av forekomsten", "Sensitivitet avhenger av forekomsten; prediktiv verdi er en testegenskap", "Sensitivitet gjelder negative svar, mens positiv prediktiv verdi gjelder positive svar", "Sensitivitet regnes ut av en 2×2-tabell, mens positiv prediktiv verdi krever en formel"],
      explanation: "Sensitiviteten spør hvor mange av dem med egenskapen testen fanger opp, og endrer seg ikke når forekomsten endres. Positiv prediktiv verdi spør hvor mange av de positive svarene som er sanne, og det avhenger av hvor stor gruppen uten egenskapen er.",
    },
    {
      question: "En test har fast sensitivitet og spesifisitet. Hva skjer med positiv og negativ prediktiv verdi når forekomsten stiger?",
      options: ["Positiv prediktiv verdi stiger, og negativ prediktiv verdi synker", "Positiv prediktiv verdi synker, og negativ prediktiv verdi stiger", "Begge stiger, siden flere av de testede faktisk har egenskapen", "Begge holder seg uendret, siden testens egenskaper er de samme"],
      explanation: "Når flere har egenskapen, blir det flere sanne positive og færre falske positive, så andelen sanne blant de positive stiger. Samtidig blir det flere falske negative, og da synker andelen sanne blant de negative.",
    },
    {
      question: "Hvilken kritisk verdi sammenlignes en kji-kvadratverdi fra en 2×2-tabell med på 5 prosent nivå?",
      options: ["3,84, som svarer til én frihetsgrad", "1,96, fra standardnormalfordelingen", "2,02, som svarer til t-fordelingen ved 40 frihetsgrader", "7,81, som svarer til tre frihetsgrader"],
      explanation: "En tabell med to rader og to kolonner har én frihetsgrad, og terskelen er da 3,84. Verdien 1,96 hører til den tilsvarende z-testen, og forholdet mellom dem er at 1,96 i annen er 3,84.",
    },
    {
      question: "Hvorfor gir en kji-kvadrattest og en z-test på to andeler samme konklusjon på samme 2×2-tabell?",
      options: ["Fordi kji-kvadratverdien er z-verdien i annen, og tersklene svarer til hverandre", "Fordi begge tester bruker de samme forventede celletallene som utgangspunkt for testen", "Fordi begge forutsetter at alle celletall er minst fem", "Fordi begge er tosidige, og en tosidig test alltid gir samme p-verdi som en kji-kvadrattest"],
      explanation: "På en tabell med én frihetsgrad er de to testene samme regnestykke skrevet på to måter, og terskelen 3,84 er kvadratet av 1,96. Forutsetningen om celletall gjelder begge, men det er ikke den som gjør at svarene sammenfaller.",
    },
    {
      question: "Hva er riktig tolkningsspråk for en odds ratio på 1,71?",
      options: ["Oddsen for utfallet er 1,71 ganger så høy i den eksponerte gruppen", "Risikoen for utfallet er 1,71 ganger så høy hos de eksponerte", "Forekomsten av utfallet er 71 prosentpoeng høyere i den eksponerte gruppen", "Utfallet inntreffer 1,71 ganger oftere per personår i den eksponerte gruppen"],
      explanation: "En odds ratio er et forhold mellom odds, og skal omtales som odds med mindre utfallet er så sjeldent at tilnærmingen til relativ risiko holder. Å kalle den en risiko er nettopp den forvekslingen som koster poeng i statistikkseksjonen.",
    },
    {
      question: "I hvilket design er det ulovlig å regne ut relativ risiko?",
      options: ["Tverrsnittsundersøkelse, fordi ingen er fulgt over tid", "Kohortstudie, fordi gruppene ikke er randomisert til eksponering", "Randomisert forsøk, fordi tildelingen er tilfeldig og ikke naturlig", "Oppfølgingsstudie med frafall underveis"],
      explanation: "Relativ risiko forutsetter at man kan observere at utfallet inntreffer i løpet av en periode, og det krever oppfølging over tid. I tverrsnitt måles alt samtidig, og da er prevalensratio eller odds ratio det som er lovlig.",
    },
    {
      question: "Når er odds ratio en god tilnærming til relativ risiko?",
      options: ["Når utfallet er sjeldent, i praksis noen få prosent i begge gruppene", "Når utvalget er stort nok til at normaltilnærmingen er gyldig", "Når gruppene er nøyaktig like store, slik at marginalsummene balanserer godt", "Når studien er randomisert, slik at gruppene er sammenlignbare"],
      explanation: "Tilnærmingen hviler på at antallet uten utfallet er nesten like stort som gruppen totalt, og det krever lav forekomst. Utvalgsstørrelse og randomisering påvirker presisjon og sammenlignbarhet, ikke forholdet mellom odds og risiko.",
    },
    {
      question: "Hvorfor er det feil å behandle to målinger på samme person som to uavhengige observasjoner?",
      options: ["Fordi målingene bærer informasjon om hverandre, så standardfeilen blir for liten", "Fordi de to målingene alltid er like store, slik at variansen i utvalget blir null", "Fordi antallet frihetsgrader da blir for høyt til at t-tabellen kan brukes", "Fordi den ene målingen alltid er gjort under andre forhold enn den andre"],
      explanation: "Avhengige målinger tilfører mindre ny informasjon enn nye personer ville gjort, så en analyse som later som de er uavhengige, undervurderer usikkerheten og gir for lav p-verdi. Løsningen er å analysere differansene per person.",
    },
    {
      question: "Hva gjør den parrede t-testen med personvariasjonen som skiller den fra en to-utvalgs test?",
      options: ["Den fjerner variasjonen mellom personer ved å regne på differanser per person", "Den øker antallet frihetsgrader ved å telle begge målingene som egne observasjoner", "Den vekter hver person etter antall målinger", "Den justerer standardavviket ved å slå sammen variansene fra de to måletidspunktene"],
      explanation: "Når hver person er sin egen sammenligning, faller den store variasjonen mellom personer helt ut av regnestykket, og testen blir mer følsom. En to-utvalgs test lar den variasjonen bli stående i nevneren og blir dermed unødvendig svak.",
    },
    {
      question: "Hva må gjøres med et beregnet antall deltakere på 48,4 per gruppe?",
      options: ["Rundes opp til 49, og et eventuelt frafallspåslag legges på etterpå", "Rundes til nærmeste hele tall, altså 48, og frafallspåslag legges på etterpå", "Beholdes som 48,4 i beregningen, og rundes først etter at frafallet er lagt på", "Rundes opp til 50 for å ligge på den sikre siden av beregningen"],
      explanation: "Man kan ikke inkludere en del av en person, og opprundingen skal sikre at det som er igjen etter frafall fortsatt dekker det beregnede behovet. Runder man ned eller lar avrundingen komme sist, ender studien systematisk med for få deltakere.",
    },
    {
      question: "Hva står i nevneren når en insidensrate regnes ut?",
      options: ["Summert observasjonstid for alle deltakerne, altså persontid", "Antall personer som var med da studien startet", "Antall personer som fortsatt var med da studien ble avsluttet", "Antall personer minus antallet som opplevde utfallet underveis"],
      explanation: "En rate har tid i nevneren og oppgis derfor med benevning som per 100 personår. Deler man på antall personer i stedet, får man en kumulativ insidens, og den er bare gyldig når alle er fulgt like lenge.",
    },
    {
      question: "Hva er kritisk vaksinasjonsdekning når reproduksjonstallet i en helt mottakelig befolkning er 4?",
      options: ["75 prosent, siden dekningen er 1 minus 1 delt på reproduksjonstallet", "80 prosent, siden dekningen er 1 minus 1 delt på reproduksjonstallet", "25 prosent, siden dekningen er 1 delt på reproduksjonstallet", "60 prosent, siden dekningen er reproduksjonstallet delt på 1 pluss tallet"],
      explanation: "Formelen gir 1 − 1/4 = 0,75, altså 75 prosent immune for at hvert tilfelle i snitt skal smitte færre enn én. Verdien 80 prosent svarer til reproduksjonstallet 5 og er den vanligste forvekslingen her.",
    },
    {
      question: "Hvordan behandles en sensurert person i et Kaplan-Meier-estimat?",
      options: ["Personen teller med under risiko fram til sensureringen, men gir ingen faktor", "Personen gir en faktor på samme måte som en hendelse, men med motsatt fortegn", "Personen fjernes fra hele beregningen, også fra alle tidligere tidspunkter", "Personen regnes som om hendelsen inntraff ved sensureringstidspunktet"],
      explanation: "Sensurering betyr bare at vi slutter å observere uten at hendelsen har skjedd, så det finnes ingen hendelse å legge inn i produktet. Å regne sensureringen som en hendelse ville trukket kurven ned for noe som aldri ble observert.",
    },
    {
      question: "Hva forteller korrelasjonen i en enkel lineær regresjon, som regresjonskoeffisienten ikke gjør?",
      options: ["Hvor tett punktene ligger rundt linjen, altså hvor mye som følger med", "Hvor mye den ene variabelen endrer seg når den andre øker med én enhet", "Hvorvidt sammenhengen er statistisk sikker på det oppgitte signifikansnivået", "Hvorvidt den ene variabelen er årsak til endringer i den andre variabelen"],
      explanation: "Korrelasjonen måler spredning om linjen, mens koeffisienten måler stigningen — to datasett kan ha samme stigning og svært ulik korrelasjon. Ingen av dem sier noe om årsak, og signifikans avgjøres av konfidensintervallet for koeffisienten.",
    },
    {
      question: "En stor studie finner en odds ratio på 1,08 med p-verdi 0,03. Hva er den riktige tolkningen?",
      options: ["Sammenhengen er statistisk sikker, men så svak at praktisk betydning er liten", "Sammenhengen er både statistisk sikker og praktisk viktig, siden p-verdien er lav", "Sammenhengen er ikke statistisk sikker, siden effektmålet ligger så nær 1", "Sammenhengen kan ikke vurderes uten at antall deltakere i hver gruppe oppgis"],
      explanation: "Ved store utvalg blir også små forskjeller signifikante, så p-verdien svarer bare på om effekten er skilt fra null. Størrelsen 1,08 er en økning på åtte prosent i odds, og den vurderingen må gjøres av effektmålet, ikke av p-verdien.",
    },
    {
      question: "En test gir teststørrelse rett under den kritiske verdien. Hvordan bør konklusjonen formuleres?",
      options: ["At forskjellen ikke er statistisk sikker, og at spørsmålet står uavklart", "At det ikke finnes noen forskjell mellom de to gruppene i hele populasjonen", "At nullhypotesen er bevist, siden testen ikke ga grunnlag for å forkaste den", "At testen må gjentas med samme utvalg til den gir et signifikant utslag"],
      explanation: "Et ikke-signifikant resultat betyr at dataene ikke er tilstrekkelige til å utelukke tilfeldig variasjon, ikke at effekten er null — særlig når teststørrelsen ligger tett opptil terskelen. Å lese det som «ingen effekt» er en av de mest gjentatte tolkningsfeilene i seksjonen.",
    },
  ],
  'med1100-14-2': [
    {
      question: "På hvilken oppgavetype i blokk 2 lønner det seg å la et felt stå blankt?",
      options: ["Rutenettet, fordi et galt kryss trekker like mye som et riktig gir", "Regneoppgaven, fordi et galt sluttsvar gir trekk på hele oppgaven", "Mekanisme-essayet, fordi et galt ledd ødelegger hele kjeden", "Bildetolkningen, fordi et galt navn teller som en feil identifikasjon"],
      explanation: "Negativ retting finnes bare på rutenettene, der poengmodellen står i oppgaveteksten. Essay, regning og bildetolkning gir delpoeng for det som er riktig og kan aldri trekke, så der skal du alltid skrive noe.",
    },
    {
      question: "Hva er forventet uttelling av et blindt gjett på et felt med tre klasser, når retting er pluss 0,5, minus 0,5 og 0 for blankt?",
      options: ["Rundt minus 0,17, siden det er dobbelt så sannsynlig å bomme som å treffe", "Nøyaktig null, siden gevinst og straff er like store i tallverdi", "Rundt pluss 0,17, siden nullgulvet gjør at tapet begrenses", "Rundt minus 0,50, siden ethvert galt kryss koster en halv"],
      explanation: "Med tre klasser er treffsjansen en tredel og bomsjansen to tredeler, så regnestykket blir en tredel av 0,5 minus to tredeler av 0,5. På et felt med bare to valg blir det samme regnestykket null, og det er derfor antallet klasser avgjør.",
    },
    {
      question: "Hva betyr det at blokk 2 rettes moment for moment?",
      options: ["Sensor krysser av mot en liste over ledd som skal være til stede i svaret", "Sensor vurderer helhetsinntrykket av besvarelsen og setter én samlet uttelling", "Sensor gir uttelling bare når alle leddene i en mekanisme er til stede", "Sensor trekker for hvert ledd som mangler, ned til null på hele settet"],
      explanation: "Rettingen er en avkryssing per treff, og det er derfor en nummerert liste gir bedre uttelling enn et velskrevet avsnitt med de samme leddene. Trekk for manglende ledd finnes ikke i fritekst — du får bare ikke uttelling for det som ikke står.",
    },
    {
      question: "Hva ber spørreordet «begrunn» om i en histologioppgave?",
      options: ["Navnet på vevet pluss minst to observerbare kjennetegn fra farge eller form", "Navnet på vevet pluss en beskrivelse av hvilken funksjon vevet har i kroppen", "En oppramsing av alle vevstypene som kunne vært aktuelle i preparatet", "En forklaring av hvordan fargemetoden virker på molekylært nivå"],
      explanation: "Begrunnelsen skal knytte konklusjonen til det som faktisk er synlig, og momentlista har egne punkter for kjennetegnene. Funksjon og fargekjemi kan være pluss-punkter, men de erstatter ikke koblingen fra observasjon til navn.",
    },
    {
      question: "Hvorfor er enhetsomregning et eget moment i en regneoppgave i blokk 2?",
      options: ["Fordi omregningen gir uttelling i seg selv, uavhengig av sluttsvaret", "Fordi sluttsvaret regnes som galt dersom omregningen ikke er vist", "Fordi kalkulatoren ikke kan håndtere enheter og må kontrolleres manuelt", "Fordi enhetene alltid er oppgitt i oppgaveteksten og bare skal gjentas"],
      explanation: "Sensorveiledningene i blokk 2-settene fører omregningen som et eget punkt på momentlista, så den som lander riktig uten å vise overgangen kan miste det punktet. Sluttsvaret vurderes for seg og blir ikke galt av at et mellomsteg mangler.",
    },
    {
      question: "En løsning inneholder 0,10 mol/L KCl. Hva er osmolariteten?",
      options: ["0,20 osmol/L, fordi hver formelenhet gir to partikler", "0,10 osmol/L, fordi osmolaritet og molaritet er samme størrelse", "0,05 osmol/L, fordi de to ionene deler den samle konsentrasjonen", "0,40 osmol/L, fordi både kalium og klorid teller dobbelt"],
      explanation: "KCl dissosierer fullstendig i to ioner, og osmolaritet teller antall osmotisk aktive partikler. Alternativet som setter osmolaritet lik molaritet gjelder bare for stoffer som ikke dissosierer, for eksempel glukose.",
    },
    {
      question: "Hvordan påvirker en kompetitiv hemmer enzymets kinetiske størrelser?",
      options: ["Km øker, mens Vmax står uendret", "Vmax synker, mens Km står uendret", "Både Km og Vmax øker i samme forhold", "Både Km og Vmax synker i samme forhold"],
      explanation: "En kompetitiv hemmer konkurrerer om det aktive setet og kan fortrenges av nok substrat, så maksimalhastigheten nås fortsatt, men det kreves mer substrat for å komme halvveis. Alternativet med senket Vmax beskriver ikke-kompetitiv hemming.",
    },
    {
      question: "Hva er skjæringen med y-aksen i et Lineweaver-Burk-plott?",
      options: ["1 delt på Vmax", "Minus 1 delt på Km", "Km delt på Vmax", "Vmax delt på Km"],
      explanation: "I det dobbeltresiproke plottet er 1/V0 plottet mot 1/[S], og konstantleddet er 1/Vmax. Uttrykket Km/Vmax er stigningstallet, mens minus 1 delt på Km er skjæringen med x-aksen.",
    },
    {
      question: "Hvilken av disse er en tumorsuppressor?",
      options: ["p53, som bremser cellesyklus ved skade på DNA", "E2F, som driver overgangen til DNA-syntesefasen", "Cyklin D, som aktiverer sin tilhørende kinase", "CDK4, som fosforylerer pRB i tidlig cellesyklus"],
      explanation: "Tumorsuppressorer er bremsene, og p53 stanser syklusen eller utløser celledød ved skade. De tre andre er drivere i syklusen, altså proto-onkogener, og forvekslingen mellom de to kategoriene er en av de mest gjentatte i blokk 2.",
    },
    {
      question: "Hva er nettoutbyttet av glykolyse til laktat per glukosemolekyl?",
      options: ["2 ATP og 0 NADH", "2 ATP og 2 NADH", "4 ATP og 2 NADH", "0 ATP og 2 NADH"],
      explanation: "Fire ATP dannes og to investeres, mens de to NADH som dannes forbrukes igjen når pyruvat reduseres til laktat. Nettopp den regenereringen av NAD-pluss er det som lar veien fortsette uten oksygen.",
    },
    {
      question: "Hvor finnes glukose-6-fosfatase?",
      options: ["I lever og nyrebark, men ikke i skjelettmuskel", "I skjelettmuskel og lever, men ikke i nyrebark", "I alle celler som lagrer glykogen i noen mengde", "Bare i tarmens epitelceller under fordøyelsen"],
      explanation: "Enzymet fjerner fosfatgruppen slik at glukose kan forlate cellen, og finnes derfor bare der kroppen skal avgi glukose til blodet. At muskel mangler det, er grunnen til at muskelglykogen ikke kan forsyne andre organer.",
    },
    {
      question: "Hvilken merkelapp sender et nysyntetisert protein til lysosomet?",
      options: ["Mannose-6-fosfat, som festes på i Golgi", "Ubikvitin, som festes på i cytosol", "En hydrofob signalsekvens i proteinets ene ende", "En fosfatgruppe festet på en serinrest av en kinase"],
      explanation: "Mannose-6-fosfat gjenkjennes av en reseptor i Golgi som pakker proteinet i vesikler til lysosomet. Ubikvitin merker derimot for nedbrytning i proteasomet, og signalsekvensen styrer proteinet inn i ru endoplasmatisk retikulum på et tidligere trinn.",
    },
    {
      question: "En tilstand med autosomal recessiv arvegang har forekomst 1 av 2500. Hva er bærerfrekvensen?",
      options: ["Rundt 3,9 prosent", "Rundt 2,0 prosent", "Rundt 0,04 prosent", "Rundt 7,8 prosent"],
      explanation: "Forekomsten er q i annen, så q er 0,02, og bærerfrekvensen er 2pq med p nær 1. Verdien 2,0 prosent er selve allelfrekvensen og er den vanligste forvekslingen i denne oppgavetypen.",
    },
    {
      question: "Hva forteller et Golgi-apparat og et ru endoplasmatisk retikulum som begge er svært godt utviklet?",
      options: ["At cellen produserer og pakker proteiner for utskilling", "At cellen produserer steroider fra kolesterol i store mengder", "At cellen har et uvanlig høyt energiforbruk i hvile", "At cellen bryter ned opptatt materiale i stor skala"],
      explanation: "Ribosomene på ER-membranen lager proteiner for eksport, og Golgi modifiserer og pakker dem videre. Steroidproduksjon kjennes derimot på rikelig glatt ER, og høyt energiforbruk på mange mitokondrier med tette cristae.",
    },
    {
      question: "Hva skiller et mukøst fra et serøst kjertelendestykke i et vanlig snitt?",
      options: ["Mukøse celler har lyst cytoplasma og flattrykt basal kjerne", "Mukøse celler har rosa cytoplasma og rund sentral kjerne", "Mukøse celler er alltid enlagede, mens serøse er flerlagede", "Mukøse celler har cilier på den frie overflaten, serøse ikke"],
      explanation: "Slimet vaskes ut under preparering og etterlater lyst cytoplasma, mens oppsamlet sekret presser kjernen flat mot basalmembranen. Rosa cytoplasma med rund, sentral kjerne er derimot signaturen til det serøse endestykket.",
    },
    {
      question: "Hva betyr det at sensorveiledningen markerer et stoff som ikke forventet?",
      options: ["At stoffet ikke kreves for uttelling, men heller ikke gir trekk om det skrives", "At stoffet regnes som galt og trekker fra dersom det tas med i svaret", "At stoffet må stå i svaret for at oppgaven skal kunne bestås", "At stoffet bare kreves når oppgaven har høyt vekttall"],
      explanation: "Markeringen sier at kravet ikke strekker seg så langt, og et svar er komplett uten det. Den er likevel verdt å merke seg som en tidsanvisning, siden minutter brukt på uforventet detaljstoff tas fra oppgaver der momentene er lettere å hente.",
    },
  ],
  'med1100-14-3': [
    {
      question: "Hvordan løper n. phrenicus i forhold til radix pulmonis?",
      options: ["Ventralt, altså foran lungeroten", "Dorsalt, altså bak lungeroten", "Gjennom lungeroten sammen med bronkien", "Lateralt for pleura parietalis"],
      explanation: "Nerven skal ned til mellomgulvet, som ligger langt fremme, og tar derfor den fremre veien forbi lungeroten. Alternativet som plasserer den bak, beskriver n. vagus, som skal videre til spiserøret i det bakre mediastinum.",
    },
    {
      question: "Hvilken skrivemåte er korrekt for de ytre mellomribbeinsmusklene?",
      options: ["mm. intercostales externi", "m. intercostales externi", "mm. intercostalis externus", "musculi intercostalis externi"],
      explanation: "Musklene er flere, én i hvert mellomrom, så både forkortelsen og navnet må stå i flertall. De gale variantene blander entallsforkortelsen med flertallsnavnet eller motsatt.",
    },
    {
      question: "Hvilken form er korrekt for grenen fra høyre kransarterie langs hjertets kant?",
      options: ["ramus marginalis dexter", "ramus marginalis dextra", "arteria marginalis dexter", "ramus marginale dextrum"],
      explanation: "Ramus er hankjønn, så adjektivene må stå i hankjønnsform. Formen dextra hører til hunkjønnsord som arteria, og det er derfor a. coronaria dextra er riktig mens ramus marginalis dextra ikke er det.",
    },
    {
      question: "Hvor skjer negativ seleksjon av T-celler i thymus?",
      options: ["I medulla, der cellene er blitt enkelt-positive", "I cortex, der cellene er blitt dobbelt-positive", "I benmargen, før cellene ankommer thymus", "I lymfeknutens paracortex etter at cellene har forlatt thymus"],
      explanation: "Positiv seleksjon ligger ytterst i cortex, negativ seleksjon innerst i medulla, og cellene beveger seg utenfra og inn mens de modnes. Å bytte om de to lagene er den mest gjentatte forvekslingen i immunologidelen.",
    },
    {
      question: "Hva kjennetegner MHC klasse II sammenlignet med klasse I?",
      options: ["Klasse II finnes på antigenpresenterende celler og leses av CD4-positive T-celler", "Klasse II finnes på alle kjerneholdige celler og leses av CD8-positive T-celler", "Klasse II presenterer peptider fra proteiner cellen har laget selv", "Klasse II finnes bare på celler som er infisert av virus"],
      explanation: "Klasse II er begrenset til dendrittiske celler, makrofager og B-celler, og presenterer materiale tatt opp utenfra for CD4-positive T-celler. Beskrivelsen av utbredelse på alle celler og avlesning ved CD8 gjelder klasse I.",
    },
    {
      question: "Hva gjør C3b i komplementsystemet?",
      options: ["Fester seg til mikrobeoverflaten og gjør den gjenkjennelig for fagocytter", "Blir værende løselig og tiltrekker nøytrofile granulocytter til stedet", "Danner porer i mikrobens membran sammen med de øvrige faktorene", "Binder seg til antistoffer i blodet og hindrer videre aktivering"],
      explanation: "C3b blir sittende på overflaten og gir fagocytten noe å gripe tak i, altså opsonisering. Beskrivelsen av et løselig fragment som tilkaller nøytrofile passer på C5a, og forvekslingen mellom de to er et fast distraktorpar.",
    },
    {
      question: "Hva skjer med et antistoff ved isotypeskift?",
      options: ["Den konstante delen byttes ut, mens spesifisiteten er uendret", "Den variable delen muteres, slik at antistoffets affinitet øker", "Både variabel og konstant del byttes ut samtidig", "Antistoffet mister evnen til å aktivere komplement"],
      explanation: "Isotypeskift kobler det samme antigenbindende setet til en ny konstant del, slik at klassen og dermed funksjonen endres. Endring av den variable delen med økt affinitet er derimot somatisk hypermutasjon, som er en annen prosess i kimsenteret.",
    },
    {
      question: "Hvorfor har midler med angrepspunkt i celleveggen ingen virkning på Mycoplasma?",
      options: ["Fordi slekten mangler cellevegg helt", "Fordi slekten produserer betalaktamase", "Fordi kapselen hindrer midlet i å nå veggen", "Fordi veggen har endret bindingssete"],
      explanation: "Der strukturen mangler, finnes det ikke noe angrepspunkt for mekanismen. De tre andre alternativene beskriver ekte resistensmekanismer hos andre bakterier, men de forutsetter alle at en cellevegg finnes.",
    },
    {
      question: "Hva er den fremste virulensfaktoren som gjør pneumokokken vanskelig å fagocytere?",
      options: ["Kapselen, et polysakkaridlag utenpå celleveggen", "Betalaktamase, et enzym som bryter ned visse midler", "Et endotoksin i den ytre membranen", "Et superantigen som aktiverer mange T-celler samtidig"],
      explanation: "Kapselen gjør overflaten glatt og skjuler strukturer fagocytten ellers ville festet seg til. Betalaktamase er en resistensmekanisme mot legemidler og har ingenting med fagocytose å gjøre, og det er nettopp den forvekslingen som testes.",
    },
    {
      question: "Hvor formerer RNA-virus seg som hovedregel?",
      options: ["I cytoplasma, siden de har med seg sitt eget kopieringsenzym", "I cellekjernen, siden de trenger vertens eget kopieringsmaskineri", "I cellemembranen, der de settes sammen etter kopiering", "I lysosomene, der surheten aktiverer arvestoffet"],
      explanation: "Verten har ikke noe enzym som kopierer RNA til RNA, så viruset må bringe sitt eget, og da er det ingen grunn til å gå inn i kjernen. DNA-virus gjør det motsatte, fordi vertens maskineri for DNA ligger i kjernen.",
    },
    {
      question: "Hvilke muskler er aktive ved rolig innpust?",
      options: ["Diaphragma og mm. intercostales externi", "Diaphragma og mm. intercostales interni", "Mm. scaleni og mm. intercostales externi", "Mm. intercostales interni og m. rectus abdominis"],
      explanation: "Mellomgulvet senker seg og de ytre mellomribbeinsmusklene løfter brystkassen, slik at volumet øker og trykket faller. Skalenusmusklene er hjelpemuskler ved kraftig innpust, og de indre mellomribbeinsmusklene bidrar ved kraftig utpust.",
    },
    {
      question: "Hva skjer ved rolig utpust hos en frisk person?",
      options: ["Ingen muskel arbeider; elastisk tilbaketrekning driver luften ut", "De indre mellomribbeinsmusklene trekker brystkassen sammen", "Bukmusklene presser bukinnholdet opp mot mellomgulvet", "Mellomgulvet trekker seg aktivt oppover i brysthulen"],
      explanation: "Rolig utpust er passivt: lungevev og brystvegg går tilbake til utgangsstillingen når innpustmusklene slapper av. De tre andre beskrivelsene gjelder kraftig utpust, ikke rolig pust.",
    },
    {
      question: "Hvilket kar fører lymfe fra størstedelen av kroppen til venevinkelen på venstre side?",
      options: ["Ductus thoracicus", "Ductus arteriosus", "Truncus pulmonalis", "Vena cava superior"],
      explanation: "Brystlymfegangen samler lymfe fra hele kroppen unntatt høyre overkropp og arm. Ductus arteriosus er et ekte fosterkar mellom aortabuen og lungepulsåren, men har ingenting med lymfe å gjøre.",
    },
    {
      question: "Hvilke to grener deler venstre kransarterie seg i?",
      options: ["Ramus interventricularis anterior og ramus circumflexus", "Ramus interventricularis anterior og ramus marginalis dexter", "Ramus circumflexus og ramus marginalis dexter", "Ramus interventricularis posterior og ramus circumflexus"],
      explanation: "Venstre kransarterie er kort og deler seg i den fremre nedadgående grenen og den omløpende grenen. Ramus marginalis dexter kommer derimot fra høyre kransarterie, og forvekslingen mellom de to sidene er et fast distraktorpar.",
    },
    {
      question: "Hvor kjennes ictus cordis normalt?",
      options: ["I 4. til 5. intercostalrom i medioklavikulærlinjen", "I 2. intercostalrom like ved brystbeinets høyre kant", "I 7. intercostalrom i fremre aksillærlinje", "Rett under angulus sterni midt på brystbeinet"],
      explanation: "Hjertespissen peker fremover, nedover og mot venstre, og slaget mot brystveggen kjennes derfor nede til venstre. Nivået ved angulus sterni svarer til T4 og luftrørets todeling, ikke til hjertespissen.",
    },
    {
      question: "Hva er forskjellen på afferente og efferente lymfekar ved en lymfeknute?",
      options: ["Afferente fører lymfe inn i knuten, efferente fører den ut ved hilus", "Afferente fører lymfe ut av knuten, efferente fører den inn fra flere kanter", "Afferente fører blod inn i knuten, efferente fører lymfe ut", "Begge fører lymfe inn, men på hver sin side av kapselen"],
      explanation: "Forstavelsene bærer betydningen: ad- betyr mot og ex- betyr ut. Flere kar fører lymfe inn på yttersiden og bare ett fører den ut ved hilus, slik at lymfen passerer langsomt gjennom vevet.",
    },
    {
      question: "En celle i et blodutstryk har nyreformet kjerne og rikelig gråblått cytoplasma. Hva er dette?",
      options: ["En monocytt", "En lymfocytt", "En nøytrofil granulocytt", "En eosinofil granulocytt"],
      explanation: "Nyreformet kjerne og lavt forhold mellom kjerne og cytoplasma er monocyttens signatur, og cellen blir til makrofag når den går ut i vevet. Lymfocytten har rund kjerne som nesten fyller cellen, mens granulocyttene har lappet kjerne.",
    },
    {
      question: "Hva bør du gjøre på et flervalgsspørsmål i blokk 3 der du ikke har eliminert noe?",
      options: ["Krysse av på det du finner rimeligst og gå videre", "La feltet stå blankt, siden et galt kryss trekker fra", "Krysse av på to alternativer for å øke sjansen for treff", "Vente til slutt og bruke resten av tiden på nettopp det spørsmålet"],
      explanation: "Blokk 3 har ingen minuspoeng, så et kryss koster ingenting og gir en firedel av et poeng i forventning. Å krysse av på flere enn oppgaven ber om, er derimot å ikke besvare oppgaven som stilt.",
    },
  ],
  'med1100-14-4': [
    {
      question: "Hvordan er de fire seksjonene i blokk 1 vektet?",
      options: ["Humanbiologi, atferdsfag og samfunnsmedisin 20 prosent, statistikk 40", "Alle fire seksjonene teller nøyaktig 25 prosent hver av hele settet", "Statistikk 20 prosent og de tre andre seksjonene rundt 27 prosent hver", "Humanbiologi 40 prosent og de tre andre 20 prosent hver"],
      explanation: "Statistikken er dobbelt så tung som hver av de tre andre og bør ha en tilsvarende andel av tiden. Vektingen har ligget stabil gjennom hele perioden, mens antallet oppgaver per seksjon har variert noe.",
    },
    {
      question: "Hvilke hjelpemidler er tillatt i blokk 1?",
      options: ["Enkel kalkulator, statistiske tabeller og formelsamling", "Enkel kalkulator alene, uten tabeller eller noen formeloversikt", "Ingen hjelpemidler, siden eksamenen er digital", "Alle skriftlige hjelpemidler, men ingen kalkulator"],
      explanation: "Formlene ligger altså på pulten, og det er derfor statistikkdelen tester bruk framfor memorering. Kalkulator alene er hjelpemiddelet i blokk 2, mens blokk 3 er helt uten.",
    },
    {
      question: "Et minuttvolum skal regnes ut fra slagvolum 72 mL og frekvens 68 per minutt. Hva blir svaret?",
      options: ["Rundt 4,9 liter per minutt", "Rundt 3,8 liter per minutt", "Rundt 5,8 liter per minutt", "Rundt 9,8 liter per minutt"],
      explanation: "Produktet er 4 896 mL per minutt, som skrives om til liter i et eget steg. Verdiene rundt 3,8 og 5,8 svarer til vanlige tastefeil i multiplikasjonen.",
    },
    {
      question: "Hvorfor kreves persontid i nevneren når deltakerne er fulgt ulikt lenge?",
      options: ["Fordi de fulgt kortest ellers veier like tungt som de fulgt lengst", "Fordi antallet hendelser da blir riktigere beregnet i telleren", "Fordi kumulativ insidens alltid er en langt dårligere størrelse enn en rate", "Fordi frafall underveis gjør at telleren må justeres tilsvarende"],
      explanation: "En person fulgt i to år har hatt langt mindre anledning til å oppleve utfallet enn en fulgt i seks, og persontid vekter dette riktig. Kumulativ insidens er fullt gyldig, men bare når alle er fulgt like lenge.",
    },
    {
      question: "En utvalgsberegning gir 63,2 per gruppe, og det ventes 20 prosent frafall. Hvor mange bør rekrutteres per gruppe?",
      options: ["80, siden 63,2 rundes opp til 64 før frafallet legges på", "79, siden frafallet legges på før avrundingen skjer", "76, siden 20 prosent legges direkte til det avrundede tallet", "64, siden frafall ikke skal påvirke selve beregningen"],
      explanation: "Opprunding skjer først, og påslaget regnes slik at det som er igjen etter frafall fortsatt dekker behovet: 64 delt på 0,80 gir 80. Å legge til 20 prosent i stedet for å dele, gir systematisk for få deltakere.",
    },
    {
      question: "Hva er den vanligste grunnen til at en ellers riktig statistikkbesvarelse mister uttelling i blokk 1?",
      options: ["At hypotesene og tolkningen mangler rundt et riktig regnet tall", "At kandidaten har valgt en metode sensor ikke godtar som gyldig", "At kandidaten har brukt for mange desimaler i sluttsvaret", "At kandidaten har regnet med kalkulator i stedet for for hånd"],
      explanation: "Føringen er det som rettes: parameter, hypoteser, forutsetninger, innsetting og en avsluttende setning på norsk. Flere metoder godtas eksplisitt, så metodevalget er sjelden problemet.",
    },
    {
      question: "Hva innebærer regelen om at det ikke trekkes for følgefeil?",
      options: ["At en tidlig feil ikke straffes på nytt i de senere leddene", "At et galt sluttsvar aldri påvirker uttellingen på oppgaven", "At kandidaten kan hoppe over mellomregningen uten å miste noe", "At sensor regner om hele besvarelsen med korrekte tall før vurderingen"],
      explanation: "Regelen forutsetter at metoden er synlig, for uten vist utregning kan ingen se at feilen var en følgefeil. Den innebærer ikke at sluttsvaret er uten betydning, bare at samme feil ikke straffes flere ganger.",
    },
    {
      question: "Hva bør du gjøre med en statistikkoppgave du ikke får løst i blokk 1?",
      options: ["Skrive parameter, hypoteser og valgt test, og sette inn det du har", "La den stå tom og bruke tiden på oppgavene du behersker", "Skrive et anslag på sluttsvaret uten videre begrunnelse", "Vente til slutt og gjette på et tall i omtrent riktig størrelsesorden"],
      explanation: "Det er ingen dokumentert minuspoengordning i blokk 1, og føringen er poenggivende i seg selv, ofte mer enn halve oppgaven. En tom besvarelse gir null uansett hvor mye kandidaten egentlig kan.",
    },
  ],
  'med1100-14-5': [
    {
      question: "Hva er alltid summen av vekttallene i et blokk 2-sett?",
      options: ["Eksakt 100, uansett hvor mange oppgaver settet har", "Eksakt 100 bare i sett med ni oppgaver merket A til I", "Varierende, siden antallet oppgaver varierer fra ni til tolv", "Eksakt 60, ett vekttall per minutt av eksamenstiden"],
      explanation: "Summen er verifisert til 100 på alle de leste sittingene, mens antallet oppgaver har variert mellom ni og tolv. Det gjør at vekttallene kan regnes om til minutter før man begynner å skrive.",
    },
    {
      question: "Hvordan rettes et rutenett i blokk 2?",
      options: ["Riktig gir pluss et halvt poeng, galt trekker like mye, og blankt gir null", "Riktig gir et poeng, galt gir null, og blankt trekker et halvt poeng", "Riktig gir et halvt poeng, mens både galt og blankt gir null", "Hele oppgaven gir null dersom ett eneste felt er galt"],
      explanation: "Symmetrien mellom belønning og straff er nettopp det som gjør gjetting ulønnsomt, og laveste sum på oppgaven er alltid null. Varianter med 0,4 og 0,25 forekommer, men forholdet mellom pluss og minus er det samme.",
    },
    {
      question: "Hva er tidsverdien av ett vekttall i blokk 2?",
      options: ["Rundt 3,5 minutter, siden 360 minutter fordeles på 100 vekttall", "Rundt 6 minutter, siden hver time svarer til omtrent ti vekttall", "Rundt 1 minutt, siden settet skal rekkes gjennom to ganger", "Det varierer, siden vekttallene ikke er oppgitt før innlevering"],
      explanation: "Seks timer er 360 minutter, og med en sum på 100 blir hvert vekttall verdt rundt 3,5 minutter når lesing og gjennomlesing er holdt av. Vekttallene står i oppgaveteksten, så budsjettet kan settes opp med én gang.",
    },
    {
      question: "Et mRNA er 2 400 nukleotider, startkodonet begynner i posisjon 121, og proteinet har 620 aminosyrer. Hvor lang er 3-primenden?",
      options: ["417 nukleotider", "420 nukleotider", "297 nukleotider", "537 nukleotider"],
      explanation: "Leserammen er 620 ganger 3 pluss 3 for stoppkodonet, altså 1 863, og forkanten er 120. Verdien 420 kommer av å glemme stoppkodonets tre nukleotider.",
    },
    {
      question: "En tilstand med recessiv arvegang har forekomst 1 av 1 600. Hva er bærerfrekvensen?",
      options: ["Rundt 4,9 prosent", "Rundt 2,5 prosent", "Rundt 0,06 prosent", "Rundt 9,8 prosent"],
      explanation: "Kvadratroten av forekomsten gir allelfrekvensen 0,025, og bærerfrekvensen er to ganger denne ganget med den nesten uendrede normalfrekvensen. Verdien 2,5 prosent er allelfrekvensen og er den vanligste forvekslingen.",
    },
    {
      question: "Et enzym har uendret maksimalhastighet, men doblet Km i nærvær av en hemmer. Hvilken type er det?",
      options: ["Kompetitiv, siden hemmeren kan fortrenges av mer substrat", "Ikke-kompetitiv, siden hemmeren binder utenfor det aktive setet", "Ukompetitiv, siden hemmeren bare binder enzym-substratkomplekset", "Allosterisk aktivator, siden hastigheten fortsatt når maksimum"],
      explanation: "At maksimalhastigheten fortsatt nås, viser at hemmeren kan konkurreres bort ved høy substratkonsentrasjon. En hemmer som senker maksimalhastigheten uten å røre Km, ville vært ikke-kompetitiv.",
    },
    {
      question: "Hvorfor kreves sju og ikke åtte runder for β-oksidasjon av en fettsyre med 16 karbonatomer?",
      options: ["Fordi den siste runden gir to acetyl-CoA fra en kjede på fire karbon", "Fordi de to første karbonatomene fjernes allerede ved aktiveringen", "Fordi hver runde kutter av fire karbonatomer i stedet for to", "Fordi den første runden ikke gir acetyl-CoA, men bare reduserte kofaktorer"],
      explanation: "En kjede deles i åtte biter av sju kutt, akkurat som en snor. Derfor gir prosessen 8 acetyl-CoA, men bare 7 FADH₂ og 7 NADH.",
    },
    {
      question: "Hva bør du gjøre med et felt på et negativt rettet rutenett der du er på myntkastnivå?",
      options: ["La det stå blankt, siden forventet uttelling av et gjett er null", "Krysse av likevel, siden nullgulvet gjør at du ikke kan tape", "Krysse av på det motsatte av det du først tenkte", "Bruke ekstra tid på å resonnere deg fram til et svar"],
      explanation: "Med lik gevinst og straff er forventningen null ved 50 prosent treffsjanse, så blankt gir samme forventning uten spredning og uten tidsbruk. Nullgulvet hindrer negativ totalsum, men beskytter ikke poengene du allerede har tjent på oppgaven.",
    },
  ],
  'med1100-14-6': [
    {
      question: "Hvordan er de fire seksjonene i blokk 3 omtrent vektet?",
      options: ["Anatomi og immunologi rundt 30 prosent, mikrobiologi 25, fysiologi 15", "Alle fire seksjonene teller omtrent 25 prosent hver av banken", "Mikrobiologi rundt 40 prosent og de tre andre 20 prosent hver", "Fysiologi og blod rundt 35 prosent, resten fordelt likt"],
      explanation: "Anatomi i thorax og immunologi er de to tyngste seksjonene, og de gir sammen rundt 60 prosent av spørsmålene. Fysiologi og blod er den minste, men den er likevel for stor til å hoppe over.",
    },
    {
      question: "Hva forteller det at oppgavenumrene hopper i et blokk 3-sett?",
      options: ["At spørsmålene er trukket som et delsett fra en større bank", "At noen spørsmål er fjernet fordi de viste seg å være uklare", "At numrene følger pensumrekkefølgen og ikke rekkefølgen i settet", "At kandidaten selv velger hvilke spørsmål som skal besvares"],
      explanation: "Sprangene i nummereringen, sammen med en sidefot som oppgir et helt annet totalantall, viser at hver kandidat får et utvalg. Banken anslås til rundt 90 til 110 spørsmål.",
    },
    {
      question: "Hva er forventet uttelling av å krysse av når du har eliminert to av fire alternativer i blokk 3?",
      options: ["Et halvt poeng, siden det ikke finnes minuspoeng i denne blokken", "Et kvart poeng, siden treffsjansen fortsatt regnes av fire", "Null, siden et galt kryss trekker like mye som et riktig gir", "Et helt poeng, siden eliminering teller som delvis riktig"],
      explanation: "Uten minuspoeng er forventningen ganske enkelt treffsannsynligheten, og med to gjenværende alternativer er den 50 prosent. Trekk for galt svar finnes bare på rutenettene i blokk 2.",
    },
    {
      question: "Hva betyr det at en oppgave ber om de to mest riktige alternativene?",
      options: ["At du skal krysse av på nøyaktig to, verken flere eller færre", "At du skal krysse av på minst to, og gjerne flere om du er usikker", "At du skal rangere alternativene fra mest til minst riktig", "At poenget deles likt mellom de alternativene du krysser av på"],
      explanation: "Antallet er en del av instruksen og oppgis alltid i teksten. Å krysse av på tre for å øke sjansen er å ikke besvare oppgaven som stilt.",
    },
    {
      question: "Hvilken relasjon har n. phrenicus til radix pulmonis, og hvorfor?",
      options: ["Ventral, fordi nerven skal fram og ned til mellomgulvet", "Dorsal, fordi nerven følger spiserøret ned mot bukhulen", "Gjennom lungeroten, fordi den følger bronkien inn i lungen", "Lateral, fordi den løper i thoraxveggen mellom ribbeina"],
      explanation: "Hver nerve tar den korteste veien til sitt eget mål, og mellomgulvet ligger langt fremme. Beskrivelsen av en nerve som fortsetter bak mot spiserøret, passer på n. vagus.",
    },
    {
      question: "Hva skiller mecA-resistens hos MRSA fra betalaktamase-resistens?",
      options: ["Ved mecA er angrepspunktet endret; betalaktamase bryter ned midlet", "Ved mecA brytes midlet ned, mens betalaktamase endrer angrepspunktet", "Ved mecA mangler bakterien cellevegg, slik at midlet ikke har noe å angripe", "Ved mecA pumpes midlet ut av cellen igjen før det rekker å virke"],
      explanation: "mecA koder for et penicillinbindende protein som betalaktamer binder dårlig til, altså et endret mål. Manglende angrepspunkt er noe tredje, og det er Mycoplasma som mangler cellevegg.",
    },
    {
      question: "Hva kjennetegner en retikulocytt i et blodutstryk?",
      options: ["Kjerneløs, litt større enn en moden rød celle, med rester av RNA", "Kjerneholdig, med en stor nukleolus og svært lite cytoplasma rundt", "Kjerneløs, liten og uregelmessig i formen uten fargeskjær", "Kjerneholdig, med nyreformet kjerne og rikelig cytoplasma"],
      explanation: "Restene av RNA gir et blåaktig skjær ved spesialfarging og viser at cellen nylig har forlatt benmargen. Beskrivelsen med kjerne og nukleolus passer på en tidlig forløper, mens den nyreformede kjernen hører til monocytten.",
    },
    {
      question: "Hvorfor er det aldri riktig å la et felt stå blankt i blokk 3?",
      options: ["Fordi et galt kryss gir null, akkurat som en tom rute", "Fordi blanke felt regnes som feil og trekker fra summen", "Fordi systemet krever svar på alle spørsmål før innlevering", "Fordi et blankt felt teller som halvt galt i rettingen"],
      explanation: "Uten minuspoeng koster et forsøk ingenting og gir minst en firedel av et poeng i forventning. Trekk for galt svar finnes bare på rutenettene i blokk 2, og det er der blankt er et fullgodt valg.",
    },
  ],
  'med1100-2-1': [
    {
      question: "Hva innebærer den biopsykososiale modellen?",
      options: ["At biologiske, psykologiske og sosiale faktorer virker gjensidig på hverandre hele tiden", "At sosiale og psykologiske forhold har overtatt for biologien som forklaring på sykdom", "At sykdom forklares av den ene av de tre faktortypene som passer best i hvert tilfelle", "At biologiske forhold forklarer sykdommen, mens psykososiale forhold forklarer opplevelsen"],
      explanation: "Modellen holder alle tre nivåene inne samtidig og legger vekt på at de påvirker hverandre begge veier. Alternativet som deler oppgaven mellom biologi og opplevelse er nærmest sannheten og derfor den farligste distraktoren, men det gjeninnfører nettopp den todelingen modellen avviser: også forløpet av selve sykdommen påvirkes av psykososiale forhold.",
    },
    {
      question: "Hva er forholdet mellom den biomedisinske og den biopsykososiale modellen?",
      options: ["Den biopsykososiale utvider den biomedisinske, og beholder biologien i den", "Den biopsykososiale erstatter den biomedisinske, som regnes som foreldet", "De er to likeverdige alternativer, og legen velger den som passer pasienten", "Den biomedisinske gjelder somatikk, den biopsykososiale gjelder psykiatri"],
      explanation: "«Bio» står først i navnet, og biologien er fullt ut med i den utvidede modellen. Alternativet om at de er likeverdige valg er nær sant i den forstand at vektleggingen varierer, men modellene er ikke to menyer å velge mellom: den ene inneholder den andre.",
    },
    {
      question: "En pasient forteller at hun er redd for at symptomene betyr noe alvorlig. Hvilken faktortype er dette?",
      options: ["Psykologisk faktor, fordi det handler om pasientens tanker og følelser", "Sosial faktor, fordi frykten er formet av omgivelsenes forventninger", "Biologisk faktor, fordi frykt gir målbare fysiologiske stressreaksjoner", "Vedlikeholdende faktor, fordi frykten gjør at tilstanden varer ved"],
      explanation: "Sykdomsforståelse, bekymring og forventning hører til det psykologiske nivået. Alternativet om at frykt gir fysiologiske utslag er sant i seg selv, men spørsmålet gjelder hvilken faktortype opplysningen beskriver, og det er pasientens indre opplevelse.",
    },
    {
      question: "Hvilken av disse opplysningene i en vignett er en sosial faktor?",
      options: ["Pasienten jobber turnus og bor alene uten familie i nærheten", "Pasienten har en kjent arvelig disposisjon for tilstanden", "Pasienten har tidligere hatt dårlige erfaringer med helsevesenet", "Pasienten har gitt opp å følge opp fordi ingenting har hjulpet"],
      explanation: "Arbeidsforhold, bosituasjon og nettverk er sosiale faktorer — de beskriver situasjonen rundt personen. Arv er biologisk, mens tidligere erfaringer og oppgitthet er psykologiske faktorer.",
    },
    {
      question: "Hvilket ledd i en biopsykososial analyse skiller et fullt svar fra et halvt?",
      options: ["Å beskrive samspillet mellom nivåene, ikke bare liste opp faktorene", "Å avgjøre hvilket av de tre nivåene som veier tyngst i tilfellet", "Å angi minst to konkrete faktorer innenfor hvert av de tre nivåene", "Å knytte hver av de tre faktorene til en av de sju legerollene"],
      explanation: "Fjerde trinn i analysen er sammenhengen — hvordan nivåene forsterker hverandre — og det er der de siste poengene ligger. Å rangere nivåene er ikke et krav, og modellen sier ikke at ett nivå alltid dominerer.",
    },
    {
      question: "Hvilken rolle er kjernen i rollerammeverket, og hva betyr det?",
      options: ["Medisinsk ekspert, fordi de andre rollene setter ekspertisen i arbeid", "Kommunikator, fordi ingen av de andre rollene kan utøves uten god samtale", "Leder, fordi legen har det avgjørende ansvaret for beslutningene som tas", "Forvalter, fordi all pasientbehandling foregår innenfor gitte ressursrammer"],
      explanation: "Medisinsk ekspert står i midten av rammeverket, og de seks andre rollene beskriver hvordan den faglige kjernen kommer pasienten til gode. Kommunikatorrollen er svært viktig, men den er en av de seks omkringliggende, ikke midtpunktet.",
    },
    {
      question: "En lege konfererer med fysioterapeut og hjemmetjeneste om et pasientforløp. Hvilken rolle er dette?",
      options: ["Samarbeider, fordi handlingen er rettet mot andre yrkesgrupper", "Kommunikator, fordi rollen handler om å formidle informasjon tydelig", "Leder, fordi legen koordinerer hvem som skal gjøre hva videre", "Forvalter, fordi tverrfaglig arbeid utnytter ressursene mer effektivt"],
      explanation: "Skillet mellom samarbeider og kommunikator går på mottakeren: kolleger og andre yrkesgrupper gir samarbeider, pasient og pårørende gir kommunikator. Lederrollen ville krevd at hun organiserte arbeidsmengde og rekkefølge, ikke at hun hentet inn faglig bidrag.",
    },
    {
      question: "En lege melder fra om at en gruppe pasienter systematisk faller utenfor et tilbud. Hvilken rolle er dette?",
      options: ["Helseforkjemper, fordi hun taler en gruppes sak overfor systemet", "Forvalter, fordi saken gjelder hvordan tilbudet bruker ressurser", "Akademiker, fordi hun har kartlagt forholdet systematisk først", "Samarbeider, fordi saken må løses sammen med andre instanser"],
      explanation: "Helseforkjemperrollen kjennetegnes ved at handlingen er rettet utover, mot systemet, på vegne av flere enn den ene pasienten. Forvalterrollen er den nære distraktoren, men den handler om ansvarlig ressursbruk — typisk om å avgrense, ikke om å be om mer for en gruppe.",
    },
    {
      question: "Hvilken handling illustrerer akademikerrollen?",
      options: ["Legen vurderer ny forskning kritisk før en prosedyre endres", "Legen forklarer et prøvesvar slik at pasienten forstår det", "Legen avgjør hvilken av flere ventende pasienter som ses først", "Legen lar være å rekvirere en undersøkelse uten dokumentert nytte"],
      explanation: "Akademikerrollen handler om kunnskapen selv: å holde seg oppdatert, vurdere forskning kritisk og undervise. De øvrige handlingene illustrerer henholdsvis kommunikator, leder og forvalter.",
    },
    {
      question: "Hva skiller helseforkjemperrollen fra forvalterrollen?",
      options: ["Helseforkjemperen taler pasientens sak, forvalteren vokter fellesskapets ressurser", "Helseforkjemperen arbeider utenfor klinikken, forvalteren arbeider inne på den", "Helseforkjemperen gjelder folkehelse, forvalteren gjelder enkeltpasienters forløp", "Helseforkjemperen er en frivillig rolle, forvalteren følger av lov og regelverk"],
      explanation: "Skillet går på hvem interessen forsvares på vegne av: pasienten eller gruppen på den ene siden, fellesskapets samlede ressurser på den andre. At helseforkjemperarbeid ofte skjer utenfor konsultasjonen er riktig som observasjon, men det er ikke det som definerer rollen — forvaltervurderinger gjøres også utenfor rommet.",
    },
    {
      question: "Hva svarer en predisponerende faktor på?",
      options: ["Hvorfor akkurat denne personen ble mottakelig i utgangspunktet", "Hvorfor forløpet startet nettopp på det tidspunktet det gjorde", "Hvorfor tilstanden fortsetter lenge etter at årsaken er borte", "Hvorfor tiltakene som er prøvd ikke har hatt ønsket virkning"],
      explanation: "Den predisponerende faktoren er sårbarheten som lå der på forhånd. Spørsmålet om hvorfor det startet akkurat da besvares av den utløsende faktoren, og hvorfor det varer ved av den vedlikeholdende.",
    },
    {
      question: "En pasient har sluttet å være i aktivitet fordi han er redd for forverring, og har hatt plagene i ni måneder. Hva slags faktor er unngåelsen?",
      options: ["Vedlikeholdende, fordi den holder tilstanden i gang uavhengig av utløseren", "Utløsende, fordi den kom rett etter at plagene begynte å utvikle seg", "Predisponerende, fordi frykt for forverring er en sårbarhet han bærer med seg", "Biologisk, fordi inaktivitet gir målbare endringer i muskulatur og kondisjon"],
      explanation: "Frykt-betinget unngåelse virker fortsatt, uavhengig av hva som en gang startet forløpet, og er derfor vedlikeholdende. At inaktivitet også har kroppslige følger er sant, men spørsmålet gjelder faktorens plass på tidsaksen, ikke hvilket nivå den virker på.",
    },
    {
      question: "Hva bør du gjøre i blokk 1 når du står igjen med to alternativer og er usikker?",
      options: ["Svare likevel, siden blokk 1 ikke har dokumentert minuspoeng", "La feltet stå blankt, siden feil svar gir trekk i denne blokken", "Krysse av for begge, siden systemet da regner svaret som delvis riktig", "Hoppe over og heller bruke tiden på oppgavene med høyest vekttall"],
      explanation: "Blokk 1 har ingen dokumentert minuspoeng, så en kvalifisert gjetning kan bare vinne. Regelen om at blankt lønner seg gjelder rutenettene i blokk 2, som er en helt annen eksamensdag med negativ retting.",
    },
    {
      question: "En oppgave sier «forklar sammenhengen mellom faktorene». Hva kreves da?",
      options: ["En årsakskjede som viser hvordan faktorene påvirker hverandre gjensidig", "En oppramsing av faktorene med riktig kategori for hver av dem", "En rangering av faktorene etter hvor mye de betyr for forløpet", "En beskrivelse av hva som skjedde, ledd for ledd, i riktig rekkefølge"],
      explanation: "Spørreordet «forklar» krever at du sier hvorfor noe skjer, altså en årsakskjede. Å beskrive hendelsene i rekkefølge svarer på «beskriv», som ligger ett trinn lavere, og å levere det når det spørres om «forklar» er en av de vanligste fritekstfeilene i blokk 1.",
    },
  ],
  'med1100-2-2': [
    {
      question: "Hva kjennetegner pasientsentrert klinisk metode?",
      options: ["At legen utforsker både den medisinske tilstanden og pasientens egen opplevelse", "At legen lar pasienten styre samtalen og utelukkende bruker åpne spørsmål hele veien", "At legen tilpasser språket sitt til pasientens utdanningsnivå og bakgrunn", "At legen tar seg god tid og møter pasienten med en vennlig og rolig tone"],
      explanation: "Metoden er å følge to spor i samme konsultasjon: sykdommen slik faget beskriver den, og pasientens grunn til å komme. Alternativet om bare åpne spørsmål er den vanligste misforståelsen — lukkede spørsmål er en nødvendig del av metoden, de kommer bare senere i samtalen.",
    },
    {
      question: "Hva består pasientens agenda av?",
      options: ["Oppfatninger om hva det er, bekymringer for hva det kan være, og forventninger til besøket", "Symptomenes varighet, deres intensitet og hvordan de har utviklet seg over tid", "Pasientens tidligere sykdommer, arvelige belastning og aktuelle bruk av legemidler", "Pasientens ønsker om utredning, ønsker om sykmelding og ønsker om videre henvisning til spesialist"],
      explanation: "De tre leddene er oppfatninger, bekymringer og forventninger, og de svarer på ulike spørsmål — en pasient kan tro én ting, frykte en annen og komme for en tredje. Alternativet om symptomenes varighet og intensitet er viktig informasjon, men det hører til sykdomssporet, ikke til pasientens agenda.",
    },
    {
      question: "Hvorfor skal åpne spørsmål komme før lukkede i konsultasjonen?",
      options: ["Fordi lukkede spørsmål ellers låser samtalen til legens første hypotese", "Fordi åpne spørsmål gir mer presise opplysninger om varighet og hyppighet", "Fordi lukkede spørsmål oppleves som ubehagelige tidlig i en konsultasjon", "Fordi pasienten trenger tid på å bli trygg før han kan svare presist på noe"],
      explanation: "Lukkede spørsmål kan bare stilles om det legen allerede mistenker, så kommer de først, får hun aldri vite hva hun burde spurt om. Åpne spørsmål gir bredde, ikke presisjon — det er nettopp derfor de lukkede trengs etterpå.",
    },
    {
      question: "Hva er funksjonen til en mikro-oppsummering underveis i samtalen?",
      options: ["Å kvalitetssikre forståelsen, vise pasienten at han er hørt og strukturere samtalen", "Å avslutte en konsultasjon ved å gjenta hva som er avtalt om videre oppfølging", "Å spare tid ved å hindre at pasienten gjentar opplysninger han har gitt før", "Å gi pasienten anledning til å legge til opplysninger han glemte tidligere i samtalen"],
      explanation: "Mikro-oppsummeringen gjør tre ting samtidig og legges fram til korrigering underveis. Den avsluttende oppsummeringen av avtaler er en annen ting — poenget med «mikro» er nettopp at den kommer flere ganger i løpet av samtalen.",
    },
    {
      question: "Hva skiller empati fra sympati i den kliniske samtalen?",
      options: ["Empati oppfatter og anerkjenner pasientens følelse, sympati deler den", "Empati er en innlært ferdighet, mens sympati er en spontan menneskelig reaksjon", "Empati uttrykkes med ord, mens sympati uttrykkes gjennom kroppsspråk", "Empati handler om alvorlige beskjeder, sympati om dagligdagse plager"],
      explanation: "Empati er å forstå følelsen presist nok til å svare på den; sympati flytter oppmerksomheten over på legens egen reaksjon. At empati kan trenes er riktig, men det er ikke det som skiller de to begrepene faglig.",
    },
    {
      question: "En lege svarer en engstelig pasient: «Det skal du ikke bekymre deg for.» Hva er problemet?",
      options: ["Det er trøst før bekymringen er kjent, og det instruerer pasienten om ikke å føle", "Det er for uformelt, og gir inntrykk av at legen ikke tar tilstanden alvorlig", "Det er et lukket utsagn, og lukkede utsagn hører ikke hjemme i en konsultasjon", "Det gir et løfte om utfallet som legen umulig kan innfri før utredningen er ferdig"],
      explanation: "Beroligelse som kommer før legen vet hva pasienten frykter, treffer sjelden, og formuleringen ber i tillegg pasienten om å slutte å føle. At utsagnet grenser til et løfte er en reell innvending, men hovedfeilen er rekkefølgen: bekymringen må kartlegges før den kan møtes.",
    },
    {
      question: "En tilstand er påvist på en rutinekontroll, men personen merker ingenting. Hvilken beskrivelse passer?",
      options: ["disease uten illness", "illness uten disease", "sickness uten disease", "illness uten sickness"],
      explanation: "Disease er den medisinsk påvisbare tilstanden, illness er personens opplevelse — her foreligger den første og ikke den andre. Den omvendte kombinasjonen, illness uten disease, beskriver plager uten påvist årsak.",
    },
    {
      question: "En pasient har hatt plager i to år, men alle undersøkelser er normale. Hva følger av det?",
      options: ["Det utelukker disease, men sier ingenting om illness", "Det utelukker både disease og illness, siden ingenting er påvist", "Det bekrefter sickness, siden plagene har vart så lenge", "Det viser at plagene må ha en psykisk snarere enn kroppslig årsak"],
      explanation: "Normale undersøkelser gjelder bare det påvisbare, og opplevelsen av å være syk er uavhengig av om noe er funnet. Alternativet om psykisk årsak gjeninnfører nettopp den todelingen mellom kropp og psyke som den biopsykososiale modellen avviser.",
    },
    {
      question: "Hva svarer en vedlikeholdende faktor på?",
      options: ["Hvorfor tilstanden fortsetter etter at den har kommet i gang", "Hvorfor forløpet startet nettopp på det tidspunktet det gjorde", "Hvorfor akkurat denne personen ble mottakelig i utgangspunktet", "Hvorfor tiltakene som er forsøkt så langt ikke har hatt virkning"],
      explanation: "Den vedlikeholdende faktoren virker fortsatt, uavhengig av hva som utløste forløpet, og er derfor det mest opplysende leddet ved langvarige plager. Spørsmålet om hvorfor det startet akkurat da besvares av den utløsende faktoren.",
    },
    {
      question: "Hva er riktig framgangsmåte i en konsultasjon med et barn på sju år?",
      options: ["Snakke direkte til barnet i barnets språk, med den voksne til stede", "Gi all informasjon til den voksne, som kjenner barnet best selv", "Utsette forklaringen til etterpå, slik at ventetiden ikke skaper uro", "Forsikre barnet om at ingenting kommer til å kjennes ubehagelig"],
      explanation: "Alderstilpasset kommunikasjon betyr å snakke med barnet, ikke bare om det, samtidig som den voksne holdes med i samtalen. Alternativet om å informere den voksne er høflig og involverer forelderen, men det gjør barnet til tilskuer i sin egen konsultasjon.",
    },
    {
      question: "Hva er det autonomirespekterende svaret når pasienten spør hva legen ville gjort?",
      options: ["Å legge fram alternativene, si hva man anbefaler og hvorfor, og gi valget tilbake", "Å si at dette må pasienten avgjøre selv, siden det gjelder hans egen kropp", "Å anbefale det opplegget som samlet sett har best dokumentert virkning", "Å be pasienten tenke over det til neste konsultasjon før det blir bestemt noe som helst"],
      explanation: "Et fritt valg forutsetter informasjon, og legens faglige vurdering er en del av den informasjonen. Å svare at pasienten må bestemme selv ser ut som respekt, men holder tilbake nettopp det han spør etter, og etterlater ham uten grunnlag for valget.",
    },
    {
      question: "Hvilken plassering har lukkede spørsmål i den pasientsentrerte konsultasjonen?",
      options: ["I innsnevringsfasen, etter at pasienten har fortalt sin historie", "I åpningsfasen, for å avklare tidlig hva konsultasjonen skal handle om", "De brukes ikke, fordi de gjør konsultasjonen legestyrt i stedet", "Helt til slutt, som en kontroll av at informasjonen er forstått"],
      explanation: "Lukkede spørsmål er trinn tre i modellen: de henter presisjonen etter at bredden er samlet. At de skulle unngås helt er en misforståelse — uten dem blir konsultasjonen upresis og uavsluttet.",
    },
  ],
  'med1100-3-1': [
    {
      question: "Hva er sensitiviteten til en test?",
      options: ["Andelen av dem som er syke som testen klassifiserer som positive", "Andelen av de positive testene som tilhører en person som er syk", "Andelen av de friske som testen klassifiserer som negative i utvalget", "Andelen av alle testede som får et resultat som viser seg å stemme"],
      explanation: "Sensitivitet har alle de syke i nevneren og leses nedover i syk-kolonnen. Alternativet om andelen positive tester som tilhører en syk beskriver PPV, og forvekslingen mellom de to er den vanligste feilen i sjangeren.",
    },
    {
      question: "Hvilke mål endrer seg når den samme testen flyttes til en befolkning med høyere sykdomsforekomst?",
      options: ["PPV og NPV endrer seg, mens sensitivitet og spesifisitet er uendret", "Sensitivitet og spesifisitet endrer seg, mens PPV og NPV er uendret", "Alle fire målene endrer seg, siden hele sammensetningen er en annen", "Bare PPV endrer seg, ettersom NPV avhenger av terskelen og ikke av forekomsten"],
      explanation: "Sensitivitet og spesifisitet regnes innenfor hver sin kolonne og påvirkes ikke av hvor mange som er i kolonnene. PPV og NPV regnes bortover i radene, der syke og friske blandes, og blandingsforholdet er nettopp det som endres.",
    },
    {
      question: "En test har sensitivitet 90 prosent og spesifisitet 95 prosent, og prevalensen er 1 prosent. Hvor mange av 10 000 blir falske positive?",
      options: ["495 personer", "990 personer", "450 personer", "505 personer"],
      explanation: "Antall friske er 9 900, og 5 prosent av dem får feilaktig positivt svar: 9 900 ganger 0,05 er 495 personer. De øvrige tallene svarer til regnefeil der man bruker 10 000 i stedet for 9 900, bruker sensitiviteten i stedet for spesifisiteten, eller trekker fra feil vei.",
    },
    {
      question: "Med 90 sanne positive og 495 falske positive, hva er PPV?",
      options: ["Omtrent 15 prosent", "Omtrent 90 prosent", "Omtrent 18 prosent", "Omtrent 85 prosent"],
      explanation: "PPV er 90 delt på summen av raden, altså 90 delt på 585, som er 0,154. Svaret på 90 prosent er sensitiviteten, som leses nedover i den andre retningen, og 85 prosent er andelen falske alarmer.",
    },
    {
      question: "Hvorfor blir PPV lav for en svært god test i en befolkning der tilstanden er sjelden?",
      options: ["Fordi det er så mange flere friske at selv en liten feilandel gir mange falske positive", "Fordi sensitiviteten synker når testen brukes på personer uten symptomer i gruppen", "Fordi terskelen for et positivt svar må settes lavere i en frisk befolkning", "Fordi antallet syke er for lite til at prediktive verdier kan beregnes pålitelig"],
      explanation: "Med få syke og svært mange friske gir en liten feilandel på den store gruppen flere falske positive enn det finnes syke i det hele tatt. Sensitiviteten endrer seg ikke av hvem testen brukes på — det er blandingsforholdet i raden som gjør utslaget.",
    },
    {
      question: "Hva skjer med sensitivitet og spesifisitet når terskelen for positivt svar senkes?",
      options: ["Sensitiviteten stiger og spesifisiteten synker", "Sensitiviteten synker og spesifisiteten stiger", "Begge stiger, fordi flere av de syke blir fanget opp", "Begge er uendret, siden de er egenskaper ved selve testen"],
      explanation: "En lavere terskel flytter personer fra falsk negativ til sann positiv i syke-kolonnen, og fra sann negativ til falsk positiv i frisk-kolonnen. At de to er egenskaper ved testen er riktig overfor prevalensendringer, men de følger av terskelen og endrer seg når den flyttes.",
    },
    {
      question: "Hva er forskjellen på en falsk positiv og overdiagnostikk?",
      options: ["Ved falsk positiv tar testen feil, ved overdiagnostikk finnes tilstanden virkelig", "Ved falsk positiv finnes tilstanden virkelig, ved overdiagnostikk tar testen feil", "Falsk positiv gjelder masseundersøkelser, overdiagnostikk gjelder klinisk utredning", "Falsk positiv gjelder enkeltpersoner, overdiagnostikk gjelder tall på gruppenivå"],
      explanation: "En falsk positiv er et feil testsvar hos en frisk person, mens overdiagnostikk er et riktig funn av noe ekte som aldri ville gitt plager. Skillet er viktig fordi bare det første kan reduseres ved å endre testens terskel.",
    },
    {
      question: "Hvor i 2×2-tabellen leses negativ prediktiv verdi?",
      options: ["Bortover i raden for negative tester", "Nedover i kolonnen for de friske personene", "Nedover i kolonnen for de syke personene", "Bortover i raden for positive tester"],
      explanation: "NPV er sanne negative delt på alle med negativt svar, altså en radsum. Leser du nedover i frisk-kolonnen i stedet, får du spesifisiteten — det er nettopp den forvekslingen mellom retningene som gir feil svar.",
    },
    {
      question: "Hva er spesifisiteten hvis 19 000 friske gir 380 falske positive?",
      options: ["98 prosent", "96 prosent", "80 prosent", "2 prosent"],
      explanation: "Sanne negative er 19 000 minus 380, altså 18 620, og 18 620 delt på 19 000 er 0,98. Svaret på 2 prosent er andelen falske positive, som er komplementet, og de øvrige svarer til regnefeil i divisjonen.",
    },
    {
      question: "Hva mangler i et svar som bare oppgir at PPV er 0,154?",
      options: ["Tolkningen i klartekst, som sier hva tallet betyr for dem med positivt svar", "Omregningen til prosent, som alltid kreves når svaret er en andel mellom null og én", "Konfidensintervallet rundt estimatet, som må oppgis sammen med enhver andel", "Angivelsen av hvor mange gjeldende siffer resultatet er oppgitt med i utregningen"],
      explanation: "Sensor i blokk 1 krever en tolkningssetning etter hver beregning, formulert med riktig gruppe i nevneren. Å oppgi tallet i prosent er en nyttig vane, men det er ikke det som gjør svaret ufullstendig.",
    },
    {
      question: "Hva er den mest presise beskrivelsen av prevalens i denne sammenhengen?",
      options: ["Andelen i befolkningen som har tilstanden før noen er testet", "Andelen av de testede som får et positivt svar på undersøkelsen", "Antallet nye tilfeller av tilstanden i løpet av en gitt tidsperiode", "Andelen av de positive svarene som viser seg å være riktige ved kontroll"],
      explanation: "Prevalens er sykdomsforekomsten i befolkningen på et tidspunkt, uavhengig av testing. Antallet nye tilfeller per tid er insidens, og andelen riktige blant de positive er PPV.",
    },
    {
      question: "En test brukes i en gruppe med prevalens 20 prosent i stedet for 1 prosent. Hva skjer med NPV?",
      options: ["Den synker, fordi flere syke havner blant dem med negativt svar", "Den stiger, fordi testen fanger opp flere av de syke i gruppen", "Den er uendret, fordi den bare avhenger av testens egenskaper", "Den synker til under femti prosent når forekomsten passerer ti prosent"],
      explanation: "Flere syke betyr flere falske negative blandet inn blant de sanne negative, så NPV faller — i kapitlets eksempel fra 99,9 til 97,4 prosent. NPV følger altså prevalensen motsatt vei av PPV, og den forblir høy selv om den synker.",
    },
    {
      question: "Hvilken kontroll bør alltid gjøres etter at 2×2-tabellen er fylt ut?",
      options: ["At summen av de fire cellene er lik befolkningen du regnet med", "At sensitiviteten og spesifisiteten til sammen utgjør hundre prosent", "At antallet positive tester er større enn antallet negative tester", "At PPV og NPV til sammen utgjør hundre prosent i den ferdige tabellen"],
      explanation: "Kontrollsummen avslører en tastefeil før den forplanter seg til de prediktive verdiene. Sensitivitet og spesifisitet summerer seg ikke til hundre prosent — de er andeler av to forskjellige grupper, og det samme gjelder PPV og NPV.",
    },
    {
      question: "En kollega sier at sensitivitet på 95 prosent betyr at et positivt svar er 95 prosent sikkert. Hva er feilen?",
      options: ["Han bytter om retningen i den betingede sannsynligheten og beskriver PPV", "Han glemmer at sensitiviteten må korrigeres for antallet testede personer", "Han forveksler sensitivitet med spesifisitet, som gjelder de friske i gruppen", "Han bruker et mål som først kan tolkes når terskelverdien er oppgitt i tillegg"],
      explanation: "Sensitivitet er sannsynligheten for positiv test gitt sykdom, mens han beskriver sannsynligheten for sykdom gitt positiv test, altså PPV. De to har ulike nevnere og kan være vidt forskjellige tall når tilstanden er sjelden.",
    },
    {
      question: "Hvilken opplysning trengs i tillegg til sensitivitet og spesifisitet for å regne ut PPV?",
      options: ["Prevalensen i den befolkningen som testen faktisk brukes på", "Antallet personer som faktisk har tatt testen totalt", "Terskelverdien som er brukt for å definere et positivt svar", "Andelen av de testede som har symptomer på tilstanden fra før"],
      explanation: "PPV avhenger av blandingsforholdet mellom syke og friske, altså av prevalensen. Antall testede er valgfritt: du kan velge en hvilken som helst befolkningsstørrelse i tabellen uten at PPV endres.",
    },
    {
      question: "I en befolkning med svært lav forekomst gir en god test et negativt svar. Hva er mest presist?",
      options: ["Svaret er svært informativt, fordi NPV er nær hundre prosent her", "Svaret er lite informativt, fordi de aller fleste er friske uansett", "Svaret har samme verdi som et positivt svar i den samme gruppen", "Svaret kan ikke tolkes uten at prevalensen er kjent med sikkerhet"],
      explanation: "Ved lav forekomst er nesten alle med negativt svar friske, så NPV nærmer seg hundre prosent. Alternativet om at svaret er lite informativt bygger på et reelt poeng om at sannsynligheten endres lite i absolutte tall, men spørsmålet gjelder hvor sikker konklusjonen er.",
    },
  ],
  'med1100-3-2': [
    {
      question: "Hva kjennetegner en kohortstudie?",
      options: ["Deltakerne velges ut på eksponering og følges framover i tid mot utfallet", "Deltakerne velges ut på utfall, og eksponeringen kartlegges bakover i tid", "Eksponering og utfall registreres hos alle deltakerne på samme tidspunkt", "Forskeren fordeler eksponeringen tilfeldig mellom deltakerne i studien"],
      explanation: "Kohortdesignet kjennes på at utvelgelsen skjer på eksponering og at tiden går framover, noe som gjør at insidens og relativ risiko kan beregnes. Alternativet om utvelgelse på utfall beskriver kasus-kontroll, og tilfeldig fordeling beskriver et randomisert forsøk.",
    },
    {
      question: "Hvilket effektmål hører til en kasus-kontroll-studie?",
      options: ["Oddsforhold, siden antallet syke er bestemt av forskeren", "Relativ risiko, siden gruppene sammenlignes på utfallet direkte", "Prevalensforhold, siden alt er registrert på ett og samme tidspunkt", "Risikodifferanse, siden den viser forskjellen i absolutte tall"],
      explanation: "Fordi forskeren selv velger hvor mange kasus og kontroller som inkluderes, sier andelen syke i materialet ingenting om forekomsten i befolkningen, og bare oddsforholdet er upåvirket av dette valget. Relativ risiko og risikodifferanse krever at risikoen kan beregnes, altså kohort eller forsøk.",
    },
    {
      question: "Hva er det riktige effektmålet i en tverrsnittsstudie?",
      options: ["Prevalensforhold, fordi alt er målt på ett og samme tidspunkt", "Relativ risiko, fordi de to gruppene sammenlignes direkte", "Insidensrate, fordi målingene dekker en avgrenset periode", "Risikodifferanse, fordi forskjellen kan leses av i tabellen"],
      explanation: "Et tverrsnitt gir et øyeblikksbilde og dermed prevalens, ikke hendelser over tid. Å bruke risikospråk om et tverrsnitt er en klassisk feil nettopp fordi regnestykket for prevalensforhold ser ut som det for relativ risiko.",
    },
    {
      question: "Når ligger oddsforholdet nær den relative risikoen?",
      options: ["Når utfallet er sjeldent i begge gruppene som sammenlignes", "Når utvalget er stort nok til at usikkerheten blir liten", "Når eksponeringen er jevnt fordelt mellom de to gruppene", "Når studien er randomisert, slik at gruppene er sammenlignbare"],
      explanation: "Ved lav risiko er nevnerne i odds og risiko nesten like, og avviket blir lite — rundt én prosent ved en risiko på én prosent, men over tretti prosent ved tjue prosent. Verken utvalgsstørrelse eller randomisering påvirker forholdet mellom de to målene.",
    },
    {
      question: "Risikoen er 40 prosent blant eksponerte og 20 prosent blant ueksponerte. Hva er relativ risiko?",
      options: ["2,0", "2,7", "1,3", "0,5"],
      explanation: "Relativ risiko er 0,40 delt på 0,20, altså 2,0. Tallet 2,67 er oddsforholdet for de samme dataene, og forskjellen mellom de to er stor nettopp fordi utfallet er hyppig.",
    },
    {
      question: "Hva er hovedstyrken ved randomisering?",
      options: ["Den fordeler også ukjente bakgrunnsfaktorer jevnt mellom gruppene", "Den fjerner behovet for å måle utfallet på en standardisert måte", "Den gjør at resultatet uten videre kan overføres til andre grupper", "Den øker presisjonen ved å redusere den tilfeldige variasjonen i data"],
      explanation: "Fordi gruppetilhørighet avgjøres av tilfeldigheten alene, blir alle personkjennetegn jevnt fordelt, også de som ingen har målt — og det er noe ingen statistisk justering kan få til. Overførbarhet til andre grupper er ekstern validitet, som randomisering ikke sikrer.",
    },
    {
      question: "Hva er forskjellen på bias og konfundering?",
      options: ["Bias er en feil i innsamlingen, konfundering er en tredje faktor i virkeligheten", "Bias er en tredje faktor i virkeligheten, konfundering er en feil i innsamlingen", "Bias gjelder observasjonsstudier, mens konfundering bare gjelder forsøk", "Bias oppstår tilfeldig i utvalget, mens konfundering oppstår systematisk"],
      explanation: "Konfundering kan foreligge selv om dataene er perfekt innsamlet, fordi problemet ligger i tolkningen av en reell sammenheng. Det er også grunnen til at bare konfundering kan justeres for i analysen, og bare når faktoren faktisk er målt.",
    },
    {
      question: "Hvorfor hjelper det ikke å inkludere flere deltakere når det foreligger seleksjonsbias?",
      options: ["Fordi hver ny deltaker er valgt ut på den samme skjeve måten", "Fordi frafallet øker proporsjonalt når studien blir større", "Fordi den statistiske styrken uansett er begrenset av utfallet", "Fordi flere deltakere gjør det vanskeligere å måle eksponeringen"],
      explanation: "Systematisk skjevhet jevner seg ikke ut med økende antall, slik tilfeldig variasjon gjør — utvalget blir bare mer presist skjevt. Dette skillet mellom systematisk og tilfeldig feil er selve grunnen til at bias må forebygges i designet.",
    },
    {
      question: "Hva er recall bias?",
      options: ["At personer med utfallet husker tidligere eksponering grundigere enn friske", "At personer med utfallet oftere trekker seg fra studien underveis i forløpet", "At forskeren husker feil hvilke deltakere som tilhørte hvilken gruppe", "At måleinstrumentet gir litt ulike verdier fra gang til gang det brukes"],
      explanation: "Recall bias er en form for informasjonsbias og er en fast svakhet ved kasus-kontroll-designet, fordi eksponeringen må hentes fra hukommelsen i ettertid. Frafall underveis er derimot seleksjonsbias, og ustabile måleinstrumenter er et reliabilitetsproblem.",
    },
    {
      question: "Hva kjennetegner en økologisk studie?",
      options: ["Data er samlet på gruppenivå, ikke for enkeltpersoner", "Data er samlet prospektivt over en lang oppfølgingstid", "Eksponeringen er tilfeldig fordelt mellom de deltakende gruppene", "Deltakerne er valgt ut fordi de allerede har det aktuelle utfallet"],
      explanation: "Økologiske studier sammenligner gjennomsnitt for land, kommuner eller årskull, og kan derfor ikke koble eksponering og utfall i samme person. Det er nettopp den koblingen som mangler når man risikerer den økologiske feilslutningen.",
    },
    {
      question: "Hva må være oppfylt for at en faktor skal være en konfunder?",
      options: ["Den må henge sammen med eksponeringen, forårsake utfallet og ikke være et mellomledd", "Den må være målt i studien og være jevnt fordelt mellom de to gruppene", "Den må henge sammen med utfallet og være ukjent for dem som utfører studien", "Den må være en biologisk faktor som virker direkte på den aktuelle mekanismen"],
      explanation: "Alle tre kravene må være oppfylt samtidig, og særlig det siste er lett å glemme: en faktor som ligger på veien fra eksponering til utfall er et mellomledd, ikke en konfunder. At faktoren er målt er en forutsetning for å justere for den, men ikke en del av definisjonen.",
    },
    {
      question: "En vekt er kalibrert to kilo for høyt, men gir samme verdi hver gang. Hva beskriver dette?",
      options: ["Høy reliabilitet og lav validitet", "Høy validitet og lav reliabilitet", "Lav reliabilitet og lav validitet", "Høy reliabilitet og høy validitet"],
      explanation: "Målingen er repeterbar, altså reliabel, men systematisk feil, altså ikke valid. Kombinasjonen viser at reliabilitet er en nødvendig, men ikke tilstrekkelig betingelse for validitet.",
    },
    {
      question: "Hvilken formulering er mest presis om et funn fra en observasjonsstudie?",
      options: ["Studien fant en assosiasjon mellom eksponeringen og utfallet", "Studien beviste at eksponeringen forårsaker det aktuelle utfallet", "Studien viste at utfallet kan forebygges ved å unngå eksponeringen", "Studien fastslo at det ikke finnes andre forklaringer på sammenhengen"],
      explanation: "En observasjonsstudie påviser en statistisk sammenheng, mens en årsakspåstand krever mer enn det ett enkelt materiale kan gi. Fagets varsomme språk er ikke en formalitet — det er nettopp presisjonen sensor ser etter i essaysvarene.",
    },
    {
      question: "Hva beskytter blinding mot?",
      options: ["Informasjonsbias, fordi vurderingen av utfallet kan påvirkes av gruppekjennskap", "Konfundering, fordi ukjente faktorer da fordeles jevnt mellom gruppene", "Seleksjonsbias, fordi deltakerne ikke kan velge gruppe når de ikke vet noe", "Tilfeldig variasjon, fordi målingene blir mer stabile når vurdereren er blindet"],
      explanation: "Blinding beskytter selve målingen, mens randomisering beskytter fordelingen mellom gruppene — de løser hver sin type problem. En studie kan derfor være randomisert uten å være blindet, og resultatet er da fortsatt sårbart for skjev vurdering av utfallet.",
    },
  ],
  'med1100-3-3': [
    {
      question: "Hva er forskjellen på prevalens og insidens?",
      options: ["Prevalens teller dem som har tilstanden, insidens dem som får den", "Prevalens teller dem som får tilstanden, insidens dem som har den", "Prevalens gjelder kroniske tilstander, insidens gjelder akutte tilstander", "Prevalens måles i en befolkning, insidens måles i et utvalg av den"],
      explanation: "Prevalens er et øyeblikksbilde av hvor mange som har tilstanden, mens insidens krever en tidsakse og teller nye tilfeller. Skillet mellom kroniske og akutte tilstander er irrelevant for begrepene, selv om varigheten påvirker hvor stor prevalensen blir.",
    },
    {
      question: "En kohort har 210 personer fulgt i 6 år og 40 personer fulgt i 2 år. Hva er samlet persontid?",
      options: ["1 340 personår", "1 500 personår", "1 260 personår", "1 000 personår"],
      explanation: "Persontid er 210 ganger 6 pluss 40 ganger 2, altså 1 260 pluss 80 lik 1 340 personår. Svaret 1 260 utelater den andre gruppen helt, og 1 500 kommer av å gi alle 250 deltakerne seks år.",
    },
    {
      question: "Hvilken enhet skal en insidensrate oppgis med?",
      options: ["Hendelser per personår, ofte skalert til per 1 000 personår", "Prosent av befolkningen på det aktuelle måletidspunktet", "Antall tilfeller per person i løpet av hele studieperioden", "Andel mellom null og én, på samme måte som en prevalens"],
      explanation: "En rate har alltid tid i nevneren, og det er nettopp det som skiller den fra en andel. Å oppgi en insidensrate som en ren prosentandel er derfor et ufullstendig svar, og enheten er poenggivende.",
    },
    {
      question: "Prevalensen dobles mens insidensen er uendret. Hva er den mest presise forklaringen?",
      options: ["Varigheten av tilstanden har økt, slik at flere lever med den samtidig", "Flere personer får tilstanden nå enn tidligere i den samme befolkningen", "Befolkningen har vokst, slik at antallet tilfeller er blitt større enn før", "Diagnostikken er blitt bedre, slik at flere tilfeller nå blir registrert"],
      explanation: "Sammenhengen mellom prevalens, insidens og varighet gir at når prevalensen stiger og insidensen står stille, må varigheten ha økt. Alternativet om at flere får tilstanden beskriver nettopp en økt insidens, som oppgaven utelukker.",
    },
    {
      question: "Hva menes med en sosial gradient i helse?",
      options: ["At helsen blir trinnvis bedre for hvert trinn oppover i sosial posisjon", "At de med aller lavest inntekt har vesentlig dårligere helse enn resten", "At helseforskjeller mellom grupper øker jevnt over tid i en befolkning", "At helsetjenester er ulikt fordelt mellom by og distrikt i et gitt land"],
      explanation: "Ordet gradient betegner en helning, ikke en terskel: forskjellen finnes mellom hvert trinn hele veien opp. Alternativet om de aller dårligst stilte er delvis sant, men gjør ulikhet til et spørsmål om én gruppe og mister nettopp gradienten.",
    },
    {
      question: "Hvilken av forklaringsmodellene for sosiale helseulikheter er delvis et resultat av de andre?",
      options: ["Helseatferd, siden kosthold og aktivitet formes av materielle vilkår", "Materielle forhold, siden inntekt følger av utdanning og av yrkesvalg", "Livsløpsperspektivet, siden barndommen formes av foreldrenes helse", "Psykososiale forhold, siden opplevd kontroll varierer med personlighet"],
      explanation: "Helseatferd er sosialt fordelt fordi den formes av økonomi, arbeidstid, bomiljø og tilgjengelighet, og er derfor delvis avledet av de øvrige modellene. Å presentere atferd som en frittstående forklaring er å beskrive mekanismen nærmest overflaten og la betingelsene stå uforklart.",
    },
    {
      question: "Hvilket forvaltningsnivå har ansvaret for den offentlige tannhelsetjenesten?",
      options: ["Fylkeskommunen", "Kommunen", "Staten ved helseforetakene", "Kommunen sammen med staten"],
      explanation: "Tannhelse er i praksis det eneste helseansvaret som ligger på fylkesnivået, og det er nettopp derfor det oftest plasseres feil. Kommunen har fastlegeordningen og de allmenne tjenestene, mens helseforetakene har spesialisthelsetjenesten.",
    },
    {
      question: "Hva betyr LEON-prinsippet?",
      options: ["At en oppgave skal løses på lavest effektive omsorgsnivå", "At en oppgave skal løses på det laveste nivået uansett kompetanse", "At spesialisthelsetjenesten skal overta oppgaver fra kommunene", "At pasienten selv skal velge hvilket nivå som skal utføre oppgaven"],
      explanation: "Begge ordene i prinsippet bærer mening: nivået skal være lavt, men det må faktisk holde faglig mål. Alternativet som utelater ordet effektive gjør prinsippet til et krav om at alt skal gjøres lokalt, uansett om det er forsvarlig.",
    },
    {
      question: "Hva kjennetegner overdiagnostikk?",
      options: ["Funnet er riktig, men tilstanden ville aldri gitt plager i personens levetid", "Funnet er feil, siden personen ikke har den tilstanden testen indikerte", "Funnet er riktig, men tilstanden ble oppdaget for sent til å ha betydning", "Funnet er usikkert, siden testen har for lav sensitivitet i denne gruppen"],
      explanation: "Ved overdiagnostikk har testen rett — tilstanden finnes — men den ville ikke hatt konsekvenser for personen. Alternativet om et feil funn beskriver en falsk positiv, og forvekslingen er viktig fordi bare falske positive kan reduseres med en bedre test.",
    },
    {
      question: "Hvorfor kan overdiagnostikk ikke løses med en mer treffsikker test?",
      options: ["Fordi testen allerede har rett — tilstanden er der, men uten betydning", "Fordi tester alltid vil ha en viss andel feil uansett hvor gode de er", "Fordi problemet oppstår først i behandlingen, ikke i selve undersøkelsen", "Fordi terskelen for et positivt svar ikke lar seg justere i praksis"],
      explanation: "Overdiagnostikk handler ikke om måleteknikk, men om at det finnes reelle funn som aldri utvikler seg. En mer spesifikk test fjerner falske positive, men den kan ikke skille et ekte funn som vil utvikle seg fra et ekte funn som ikke vil det.",
    },
    {
      question: "Hva dekker WHOs begrep feilernæring?",
      options: ["Både underernæring og overvekt med kostrelaterte sykdommer", "Utelukkende underernæring og mangel på enkeltnæringsstoffer", "Utelukkende overvekt og fedme med tilhørende følgetilstander", "Ubalanse mellom energiinntak og fysisk aktivitet over lengre tid"],
      explanation: "Begrepet er bevisst tosidig, fordi begge formene i dag opptrer i de samme landene og noen ganger i samme husholdning. Å bruke ordet bare om underernæring er en vanlig upresishet som koster poeng i essayet.",
    },
    {
      question: "Hva er den vanligste innvendingen mot WHOs helsedefinisjon?",
      options: ["At ordet «fullstendig» setter listen så høyt at nesten ingen oppfyller den", "At definisjonen utelater psykiske og sosiale sider ved menneskers helse", "At den bare gjelder befolkninger og ikke lar seg anvende på enkeltpersoner", "At den er utformet for høyinntektsland og ikke passer i andre sammenhenger"],
      explanation: "Kravet om fullstendig velvære gjør at definisjonen i praksis beskriver en tilstand nesten ingen har til enhver tid, og den sier lite om det å leve godt med en kronisk tilstand. At definisjonen skulle utelate psykiske og sosiale sider er direkte feil — det er nettopp dem den tar inn.",
    },
    {
      question: "Hva er hovedgrunnen til å bruke persontid framfor antall personer i nevneren?",
      options: ["Fordi deltakerne følges ulikt lenge og skal veies etter observasjonstiden", "Fordi antallet deltakere sjelden er kjent med tilstrekkelig nøyaktighet", "Fordi persontid gjør at raten kan sammenlignes direkte med en prevalens", "Fordi metoden gjør det unødvendig å ta hensyn til frafall underveis"],
      explanation: "Uten persontid ville en deltaker fulgt i seks måneder telt like tungt som en fulgt i seks år. Raten kan fortsatt ikke sammenlignes direkte med en prevalens — de har ulike enheter og må knyttes sammen gjennom varigheten.",
    },
    {
      question: "Hva kreves i et samfunnsmedisin-essay som ber om definisjon, eksempel og tre punkter?",
      options: ["En presis definisjon, ett konkret eksempel og nøyaktig tre punkter", "En presis definisjon, flere eksempler og så mange punkter som mulig", "En kort definisjon og en grundig drøfting av hvert av de tre punktene", "En oppramsing av tre punkter med definisjonen bakt inn i det første"],
      explanation: "Malen følger oppgaveteksten bokstavelig, og et fjerde punkt gir ingen ekstra uttelling når det spørres om tre. Essayet er dessuten ofte begrenset til en halv side, så tiden er bedre brukt på presisjon enn på volum.",
    },
  ],
  'med1100-4-1': [
    {
      question: "Hva beskriver standardfeilen til et estimat?",
      options: ["Hvor mye estimatet ville variert mellom gjentatte utvalg av samme størrelse", "Hvor mye enkeltmålingene sprer seg rundt gjennomsnittet i det utvalget vi har", "Hvor stor andel av observasjonene som havner innenfor konfidensintervallet", "Hvor stort avvik fra den sanne verdien som er faglig akseptabelt i studien"],
      explanation: "Standardfeilen er standardavviket til selve estimatet og krymper som én delt på kvadratroten av n. Alternativet om spredningen mellom enkeltmålinger beskriver standardavviket s, som ikke krymper når utvalget vokser — det er nettopp den forskjellen som avgjør hvorfor større studier gir smalere intervaller.",
    },
    {
      question: "Hvilken kritisk verdi hører til et tosidig 95 prosent konfidensintervall?",
      options: ["1,96", "1,645", "2,576", "2,326"],
      explanation: "Mellom minus 1,96 og pluss 1,96 ligger de midterste 95 prosentene av standardnormalfordelingen, med 2,5 prosent i hver hale. Verdien 1,645 hører til 90 prosent tosidig og 2,576 til 99 prosent, mens 2,326 er den ensidige verdien for 1 prosent.",
    },
    {
      question: "Hva er forutsetningen for å bruke normaltilnærmingen i et konfidensintervall for en andel?",
      options: ["Både antallet med og antallet uten egenskapen må være minst fem", "Utvalget må være trukket fra en populasjon som selv er normalfordelt", "Andelen i utvalget må ligge et sted mellom 0,05 og 0,95 i alle tilfeller", "Standardavviket i populasjonen må være kjent fra en tidligere studie"],
      explanation: "Kravet er at både n ganger andelen og n ganger komplementet er minst fem, altså minst fem personer i hver av de to gruppene. Kravet om at populasjonen selv skal være normalfordelt gjelder ikke: sentralgrensesetningen sørger for at andelen blir tilnærmet normalfordelt uansett.",
    },
    {
      question: "I et utvalg på 250 personer har 40 en gitt egenskap. Hva blir det 95 prosent konfidensintervallet for andelen?",
      options: ["0,115 til 0,205", "0,122 til 0,198", "0,100 til 0,220", "0,157 til 0,163"],
      explanation: "Andelen er 0,16 og standardfeilen er kvadratroten av 0,16 ganger 0,84 delt på 250, altså 0,0232; marginen blir 1,96 ganger dette, som er 0,045. Intervallet 0,122 til 0,198 kommer av å bruke 1,645, intervallet 0,100 til 0,220 av å bruke 2,576, og det smaleste av å glemme kvadratroten.",
    },
    {
      question: "Når skal du bruke en t-verdi fra tabellen i stedet for 1,96?",
      options: ["Når standardavviket er estimert fra utvalget og utvalget er lite", "Når andelen i utvalget ligger nær null eller nær hundre prosent", "Når de to gruppene som sammenlignes har ulik størrelse i studien", "Når konfidensnivået settes høyere enn de vanlige 95 prosentene"],
      explanation: "t-fordelingen kompenserer for at s er estimert fra de samme dataene, og korreksjonen betyr mest når frihetsgradene er få. Ekstreme andeler er et problem for normaltilnærmingen i andelsintervallet, ikke for valget mellom t og z.",
    },
    {
      question: "Hvor mange frihetsgrader har et konfidensintervall for gjennomsnittet i et utvalg på 16 personer?",
      options: ["15", "16", "14", "8"],
      explanation: "Frihetsgradene for ett gjennomsnitt er n minus én, altså 15, fordi gjennomsnittet allerede har bundet opp én informasjonsbit. Å lese raden for 16 gir en litt for liten t-verdi og dermed et litt for smalt intervall.",
    },
    {
      question: "Et 95 prosent konfidensintervall for en risikodifferanse går fra minus 2 til pluss 9 prosentpoeng. Hva følger av det?",
      options: ["Forskjellen er ikke statistisk signifikant på 5 prosent nivå", "Forskjellen er statistisk signifikant, siden estimatet er positivt", "Det er vist at de to gruppene har helt lik risiko for utfallet", "Intervallet er regnet feil, siden en risiko ikke kan bli negativ"],
      explanation: "Nullverdien for en differanse er 0, og siden intervallet dekker 0, kan vi ikke utelukke at det ikke er noen forskjell. At intervallet strekker seg under null er helt normalt for en differanse — det er differansen, ikke risikoen i hver gruppe, som er negativ i den enden.",
    },
    {
      question: "Hva må til for å halvere bredden på et konfidensintervall når spredningen er den samme?",
      options: ["Utvalget må firedobles, siden bredden krymper som én delt på roten av n", "Utvalget må dobles, siden bredden krymper i takt med utvalgsstørrelsen", "Konfidensnivået må heves fra 95 til 99 prosent i beregningen av margin", "Standardavviket i utvalget må halveres ved å måle mer nøyaktig enn før"],
      explanation: "Bredden er proporsjonal med én delt på kvadratroten av n, så å halvere den krever fire ganger så mange. Å heve konfidensnivået virker motsatt vei og gjør intervallet bredere, siden den kritiske verdien øker fra 1,96 til 2,576.",
    },
    {
      question: "Hvilken formulering er en riktig tolkning av et 95 prosent konfidensintervall?",
      options: ["Vi er 95 prosent sikre på at den sanne verdien ligger mellom grensene", "Nitti fem prosent av personene i utvalget ligger mellom de to grensene", "Sannsynligheten for at estimatet er helt riktig er nitti fem prosent", "Nitti fem prosent av alle mulige utvalg vil gi nøyaktig dette estimatet"],
      explanation: "Intervallet er en usikkerhetsangivelse for den ukjente populasjonsverdien, ikke en beskrivelse av hvor enkeltpersonene ligger. Formuleringen om at 95 prosent av personene ligger innenfor blander sammen spredning mellom individer med presisjonen i estimatet.",
    },
    {
      question: "Hvordan regnes standardfeilen til forskjellen mellom to uavhengige andeler?",
      options: ["Variansbidraget fra hver gruppe legges sammen, og så tas kvadratroten", "Standardfeilene i de to gruppene legges sammen direkte til en sum", "Den største av de to standardfeilene brukes, siden den dominerer", "Standardfeilene trekkes fra hverandre, slik andelene selv trekkes fra"],
      explanation: "Det er variansene som er additive, så de to brøkene legges sammen under samme rottegn. Å legge sammen standardfeilene direkte gir et for stort tall og dermed et for bredt intervall, fordi summen av to kvadratrøtter er større enn kvadratroten av summen.",
    },
    {
      question: "Hvilken verdi skal et konfidensintervall for et forholdstall som relativ risiko vurderes mot?",
      options: ["1", "0", "0,5", "1,96"],
      explanation: "Et forholdstall på 1 betyr at de to gruppene er like, så det er 1 som er nullverdien for en ratio. Verdien 0 er nullverdien for en differanse, og å bruke feil av de to er en klassisk tolkningsfeil når man går fra risikodifferanse til relativ risiko.",
    },
    {
      question: "En studie finner en forskjell som ikke er statistisk signifikant. Hva er den riktige konklusjonen?",
      options: ["Forskjellen er ikke påvist, og studien kan ha vært for liten til å avgjøre", "Det er dokumentert at det ikke finnes noen forskjell mellom gruppene", "Resultatet er ubrukelig og bør ikke rapporteres i noen sammenheng", "Forskjellen finnes, men er for liten til å ha noen faglig betydning"],
      explanation: "Et ikke-signifikant funn betyr ikke påvist, ikke fraværende, og et bredt intervall er som regel et tegn på for lite utvalg. Å lese det som bevis for at det ikke er noen forskjell er feilkode E4, en av de hyppigst påpekte feilene i statistikkdelen.",
    },
    {
      question: "En studie med 40 000 deltakere finner en forskjell på 0,2 prosentpoeng, med et intervall som ikke dekker null. Hva er den mest presise tolkningen?",
      options: ["Forskjellen er trolig reell, men om den betyr noe er et faglig spørsmål", "Forskjellen er både reell og viktig, siden intervallet ikke dekker null", "Forskjellen skyldes trolig at utvalget er så stort at feil oppstår", "Forskjellen bør regnes om til relativ risiko før den kan tolkes riktig"],
      explanation: "Med svært store utvalg blir standardfeilen liten, og selv en ubetydelig forskjell blir signifikant. Å lese signifikans som relevans er feilkode E3: signifikans handler om hvorvidt forskjellen er reell, ikke om hvor stor den er.",
    },
    {
      question: "Hva skjer med standardavviket s og standardfeilen når utvalget blir mye større?",
      options: ["Standardavviket holder seg omtrent likt, mens standardfeilen krymper", "Begge krymper omtrent like mye, siden begge avhenger av antallet", "Standardavviket krymper, mens standardfeilen holder seg omtrent lik", "Begge holder seg like, siden ingen av dem avhenger av utvalgets størrelse"],
      explanation: "Standardavviket måler hvor ulike personene er, og folk blir ikke likere av at man måler flere av dem. Standardfeilen er s delt på roten av n og krymper derfor med utvalget — det er hele grunnen til at store studier gir presise estimater.",
    },
    {
      question: "Et utvalg på 25 personer har gjennomsnitt 5,60 og standardavvik 0,80. Hva blir feilmarginen i et 95 prosent konfidensintervall?",
      options: ["0,330", "0,314", "0,160", "1,651"],
      explanation: "Standardfeilen er 0,80 delt på roten av 25, altså 0,160, og t-verdien ved 24 frihetsgrader er 2,064; produktet blir 0,330. Verdien 0,314 kommer av å bruke 1,96 i stedet for t, 0,160 av å glemme den kritiske verdien helt, og 1,651 av å gange t med s uten å dele på roten av n.",
    },
    {
      question: "En stor undersøkelse har svært lav svarprosent, men gir et smalt konfidensintervall. Hva sier det?",
      options: ["Estimatet er presist, men kan likevel ligge systematisk feil", "Estimatet er både presist og trolig nær den sanne verdien", "Det smale intervallet kompenserer for den lave svarprosenten", "Intervallet må være regnet feil når svarprosenten er så lav"],
      explanation: "Konfidensintervallet tar bare høyde for tilfeldig variasjon, ikke for at de som svarte kan skille seg fra dem som ikke svarte. Et stort, skjevt utvalg gir et presist mål på feil størrelse — mer data hjelper mot upresishet, aldri mot systematisk skjevhet.",
    },
  ],
  'med1100-4-2': [
    {
      question: "Hvorfor skrives nullhypotesen alltid med likhetstegn?",
      options: ["Fordi man må ha én bestemt verdi å regne sannsynligheter ut fra", "Fordi den alltid er den hypotesen forskeren faktisk håper er sann", "Fordi et ulikhetstegn er forbeholdt tosidige alternativhypoteser", "Fordi likhet er det mest sannsynlige utfallet før data er samlet"],
      explanation: "Testen regner ut hvor uvanlig det observerte resultatet er gitt at nullhypotesen er sann, og det krever én bestemt tallverdi å regne fra. Alternativhypotesen peker på uendelig mange verdier og gir ingen fordeling å regne i.",
    },
    {
      question: "Hvilken andel skal stå i nevneren i en ett-proporsjons z-test?",
      options: ["Andelen fra nullhypotesen, siden alt regnes under den antakelsen", "Andelen observert i utvalget, siden det er den vi faktisk har målt", "Gjennomsnittet av observert andel og andelen fra nullhypotesen", "Andelen fra en tidligere studie, dersom en slik verdi foreligger"],
      explanation: "Testen spør hvor rart resultatet er gitt at nullhypotesen er sann, så både forventet antall og standardavviket regnes fra hypotesens andel. Den observerte andelen brukes derimot i konfidensintervallet, der det ikke finnes noen hypotese å regne under.",
    },
    {
      question: "I et utvalg på 300 personer finnes en egenskap hos 78, mot en hypotese om 20 prosent. Hva blir teststatistikken?",
      options: ["2,60", "2,25", "0,90", "18,0"],
      explanation: "Forventet antall er 300 ganger 0,20, altså 60, og standardavviket er kvadratroten av 300 ganger 0,20 ganger 0,80, altså 6,93; differansen 18 delt på 6,93 gir 2,60. Verdien 18,0 er telleren alene, og 0,90 kommer av å sette inn andeler der formelen krever antall.",
    },
    {
      question: "Når skal en parret t-test brukes?",
      options: ["Når de samme individene er målt to ganger, eller ved matchede par", "Når de to gruppene som sammenlignes har nøyaktig lik størrelse", "Når spredningen er svært ulik i de to gruppene som undersøkes", "Når utvalget er så lite at normalfordelingen ikke kan brukes"],
      explanation: "Parring handler om at observasjonene hører sammen to og to, slik at differansen fjerner variasjonen mellom individer. At to uavhengige grupper tilfeldigvis er like store gjør dem ikke parrede — der skal to-utvalgstesten brukes.",
    },
    {
      question: "Hva skjer hvis en uavhengig t-test brukes på parrede data?",
      options: ["Variasjonen mellom individer blir stående igjen og skjuler effekten", "Teststatistikken blir for stor, slik at falske funn oppstår lettere", "Frihetsgradene blir for få, og terskelen blir dermed altfor streng", "Resultatet blir det samme, siden begge tester samme differanse"],
      explanation: "Den parrede testen regner på differansene og eliminerer forskjellene mellom personer, mens den uavhengige må bære hele spredningen i nevneren. Feilen gjør teststatistikken for liten, så den skjuler reelle effekter — den gir aldri falske funn, som er feilkode E5 i sin typiske form.",
    },
    {
      question: "Et utvalg på 16 personer gir teststatistikken 2,05 i en ett-utvalgs t-test. Hva er konklusjonen på 5 prosent nivå?",
      options: ["Nullhypotesen beholdes, siden kritisk verdi ved 15 frihetsgrader er 2,131", "Nullhypotesen forkastes, siden teststatistikken er større enn verdien 1,96", "Nullhypotesen forkastes, siden kritisk verdi ved 16 frihetsgrader er 2,000", "Testen kan ikke gjennomføres, fordi utvalget er for lite til en t-test"],
      explanation: "Med 16 personer er frihetsgradene 15, og kritisk verdi er 2,131, så 2,05 når ikke opp. Å sammenligne med 1,96 på et så lite utvalg er feilkode E6, og den snur konklusjonen i nettopp slike grensetilfeller.",
    },
    {
      question: "Tabellen gir halesannsynligheten 0,0047 for den observerte teststatistikken. Hva er den tosidige p-verdien?",
      options: ["0,0094", "0,0047", "0,0024", "0,9906"],
      explanation: "En tosidig test regner med avvik i begge retninger, så halesannsynligheten skal ganges med to. Å rapportere 0,0047 er feilkode E11, og feilen halverer p-verdien slik at ikke-signifikante funn kan se signifikante ut.",
    },
    {
      question: "Hva er den korrekte tolkningen av en p-verdi på 0,03?",
      options: ["Under nullhypotesen ville et så ekstremt resultat kommet i 3 prosent av forsøk", "Det er 3 prosent sannsynlighet for at nullhypotesen faktisk er den som er sann", "Effekten er så liten at den bare utgjør 3 prosent av den totale variasjonen", "Det er 97 prosent sannsynlighet for at funnet lar seg gjenta i en ny studie"],
      explanation: "p-verdien er en sannsynlighet regnet under antakelsen om at nullhypotesen er sann, ikke en sannsynlighet for at hypotesen er sann. Å snu betingelsen er samme feiltype som å forveksle sensitivitet med positiv prediktiv verdi.",
    },
    {
      question: "Hva betyr det at nullhypotesen beholdes?",
      options: ["Forskjellen er ikke påvist, og studien kan ha vært for liten", "Det er dokumentert at det ikke finnes noen forskjell i det hele tatt", "Testen er ugyldig og bør gjentas med et annet signifikansnivå", "Forskjellen finnes, men er for liten til å være faglig interessant"],
      explanation: "En test kan ikke bevise fravær av effekt, bare unnlate å påvise den, og et bredt konfidensintervall avslører gjerne at utvalget var for lite. Å lese behold som bevist fravær er feilkode E4.",
    },
    {
      question: "Hvor mange frihetsgrader har en parret t-test der 12 personer er målt to ganger?",
      options: ["11", "12", "22", "23"],
      explanation: "Antall par er 12, og frihetsgradene er antall par minus én, altså 11. Å telle de 24 målingene i stedet for de 12 parene gir feil rad i tabellen og en for lav kritisk verdi.",
    },
    {
      question: "Hva er en type I-feil?",
      options: ["Å forkaste en nullhypotese som faktisk er sann, altså en falsk alarm", "Å beholde en nullhypotese som faktisk er falsk, altså å overse en effekt", "Å velge ensidig test der oppgaven forutsetter en tosidig hypotese", "Å bruke normalfordelingen der t-fordelingen skulle vært anvendt"],
      explanation: "Sannsynligheten for en type I-feil er nøyaktig signifikansnivået, altså 5 prosent ved vanlig praksis. Å overse en reell effekt er type II-feil, og den styres av utvalgsstørrelsen gjennom studiens styrke.",
    },
    {
      question: "En tosidig test på 5 prosent nivå forkaster nullhypotesen. Hva vet du da om det tilhørende 95 prosent konfidensintervallet?",
      options: ["Det dekker ikke verdien fra nullhypotesen", "Det dekker verdien fra nullhypotesen med god margin", "Det er alltid smalere enn to standardfeil i hver retning", "Det kan ikke regnes ut når nullhypotesen er forkastet"],
      explanation: "Testen og intervallet bruker samme estimat, samme standardfeil og samme kritiske verdi, så de gir alltid samme konklusjon. Å forkaste betyr nettopp at hypoteseverdien faller utenfor intervallet.",
    },
    {
      question: "En studie med 40 000 deltakere finner p mindre enn 0,001 for en forskjell på 0,1 prosentpoeng. Hva er den mest presise konklusjonen?",
      options: ["Forskjellen er trolig reell, men svært liten, og relevansen avgjøres faglig", "Forskjellen er både reell og betydelig, siden p-verdien er så liten", "Den lave p-verdien viser at effekten er sterk i hele den undersøkte befolkningen", "Resultatet er trolig en regnefeil, siden så små forskjeller ikke kan påvises"],
      explanation: "Med svært store utvalg blir standardfeilen liten, og selv ubetydelige forskjeller gir små p-verdier. Å lese signifikans som viktighet er feilkode E3: p-verdien sier noe om hvorvidt forskjellen er reell, ikke om hvor stor den er.",
    },
    {
      question: "Når er det legitimt å bruke en ensidig alternativhypotese?",
      options: ["Når retningen var faglig begrunnet og valgt før dataene ble sett", "Når resultatet peker tydelig i én retning når man ser på tallene i studien", "Når utvalget er lite og man trenger å øke sjansen for et funn", "Når nullhypotesen omhandler en andel og ikke et gjennomsnitt"],
      explanation: "Ensidig test halverer terskelen, og valget må derfor være tatt uavhengig av dataene. Å velge side etter å ha sett hvilken vei tallene peker gir en skjult halvering av signifikansnivået, og tosidig test er standarden i medisin.",
    },
    {
      question: "To grupper på 25 personer har gjennomsnitt 118 og 110 med standardavvik 14 og 12. Hva blir det felles standardavviket?",
      options: ["13,04", "13,00", "26,08", "170,0"],
      explanation: "Det felles standardavviket er kvadratroten av det vektede gjennomsnittet av variansene, altså roten av 170, som er 13,04. Tallet 170 er variansen og ikke standardavviket, og 13,00 er det uvektede snittet av 14 og 12.",
    },
    {
      question: "Hvilket ledd i føringen av en statistikkoppgave i blokk 1 glemmes oftest, og koster mest?",
      options: ["Konklusjonen i klartekst, knyttet til den stilte problemstillingen", "Kvadratroten i nevneren når standardfeilen skal regnes ut riktig", "Angivelsen av hvilken kalkulatormodell som er brukt i utregningen", "Omregningen fra andel til prosent i det aller siste regnetrinnet"],
      explanation: "Sensorkravet i blokk 1 er at svaret avsluttes med en tolkning i ord knyttet til spørsmålet, og et bart tall regnes som et halvferdig svar. Dette er feilkode E12, og leddet koster ingenting i tid siden det ikke krever regning.",
    },
  ],
  'med1100-4-3': [
    {
      question: "Hvordan leses risikoen i den eksponerte gruppen ut av en 2x2-tabell med eksponering i radene?",
      options: ["Antall eksponerte med utfall delt på alle eksponerte, altså bortover i raden", "Antall eksponerte med utfall delt på alle med utfall, altså nedover i kolonnen", "Antall eksponerte med utfall delt på antall eksponerte uten utfallet i tabellen", "Antall eksponerte med utfall delt på det totale antallet personer i tabellen"],
      explanation: "Risiko spør hvor mange av de eksponerte som fikk utfallet, så nevneren må være hele radsummen. Å dele på alle med utfallet gir andelen av de syke som var eksponert, som avhenger av hvor mange av hver type studien tilfeldigvis inkluderte.",
    },
    {
      question: "En tabell har a lik 60, b lik 140, c lik 30 og d lik 170. Hva blir relativ risiko?",
      options: ["2,00", "2,43", "0,50", "1,50"],
      explanation: "Risikoene er 60 av 200 og 30 av 200, altså 0,30 og 0,15, og forholdet blir 2,00. Verdien 2,43 er odds ratio for samme tabell, og forskjellen skyldes at utfallet ikke er sjeldent her.",
    },
    {
      question: "Hva er den korrekte tolkningen av en odds ratio på 2,43?",
      options: ["Oddsen for utfallet er 2,43 ganger så høy blant de eksponerte", "Risikoen for utfallet er 2,43 ganger så høy blant de eksponerte", "Det er 2,43 flere tilfeller per hundre blant de eksponerte i studien", "Prevalensen av utfallet er 143 prosent høyere blant de eksponerte"],
      explanation: "Odds ratio er et forhold mellom odds, ikke mellom risikoer, og verbet må gjenspeile det. Å kalle det risiko er feilkode E1, og feilen er særlig alvorlig når utfallet er vanlig, siden odds ratio da ligger merkbart lenger fra 1 enn relativ risiko.",
    },
    {
      question: "Når kan odds ratio brukes som en brukbar tilnærming til relativ risiko?",
      options: ["Når utfallet er sjeldent, i praksis under rundt fem prosent i referansegruppen", "Når de to gruppene som sammenlignes er omtrent like store i studien", "Når studien har fulgt deltakerne over en tilstrekkelig lang tidsperiode", "Når utvalget er stort nok til at kji-kvadrattesten blir statistisk sikker"],
      explanation: "Odds er nær risiko bare når risikoen er liten, siden odds er risiko delt på én minus risiko. Gruppestørrelsene og utvalgets totale størrelse påvirker ikke forholdet mellom de to målene i det hele tatt.",
    },
    {
      question: "Med en relativ risiko på 2,0 og en risiko i referansegruppen på 20 prosent, hvor stor blir odds ratio?",
      options: ["2,67", "2,00", "2,02", "1,50"],
      explanation: "Oddsen blir 0,40 delt på 0,60 mot 0,20 delt på 0,80, altså 0,667 mot 0,250, som gir 2,67. Ved en risiko på 1 prosent hadde odds ratio vært 2,02, og forskjellen viser at tilnærmingen bryter sammen ved vanlige utfall.",
    },
    {
      question: "Hva er den kritiske verdien for en kji-kvadrattest på en 2x2-tabell ved 5 prosent nivå?",
      options: ["3,84", "1,96", "6,63", "5,99"],
      explanation: "En 2x2-tabell har én frihetsgrad, og kritisk verdi er da 3,84, som er kvadratet av 1,96. Verdien 6,63 hører til 1 prosent nivå, og 5,99 til to frihetsgrader.",
    },
    {
      question: "Hvorfor har en 2x2-tabell bare én frihetsgrad?",
      options: ["Fordi de tre andre cellene følger av subtraksjon når marginalsummene er gitt", "Fordi tabellen bare har to rader og derfor bare kan variere i én retning", "Fordi kji-kvadrattesten alltid regnes med én frihetsgrad uansett tabellstørrelse", "Fordi bare én av de fire cellene inneholder personer med selve utfallet"],
      explanation: "Med gitte rad- og kolonnesummer bestemmer ett celletall alle de tre andre, så bare én celle kan velges fritt. Den generelle regelen er antall rader minus én ganget med antall kolonner minus én, som for en 2x2 gir én.",
    },
    {
      question: "En kji-kvadrattest gir verdien 3,69. Hva er konklusjonen på 5 prosent nivå?",
      options: ["Sammenhengen er ikke påvist, siden verdien er under terskelen 3,84", "Sammenhengen er påvist, siden verdien er godt over terskelen på 1,96", "Det er vist at det ikke finnes noen sammenheng mellom de to variablene", "Testen er ugyldig, siden verdien ligger så nær den kritiske grensen"],
      explanation: "Verdien 3,69 er under 3,84, så nullhypotesen beholdes og sammenhengen er ikke påvist. Å lese dette som bevis for at ingen sammenheng finnes er feilkode E4, og et resultat så nær terskelen bør omtales som uavklart.",
    },
    {
      question: "Hvilket effektmål kan alltid regnes ut, uansett hvordan utvalget er trukket?",
      options: ["Odds ratio", "Relativ risiko", "Risikodifferanse", "Prevalensratio"],
      explanation: "Kryssproduktet i odds ratio er upåvirket av om forskeren har fastsatt radsummene eller kolonnesummene på forhånd. De tre andre målene forutsetter at radandelene faktisk gjenspeiler risiko eller forekomst i befolkningen.",
    },
    {
      question: "En studie måler forekomst på ett tidspunkt og finner at 20 prosent av de eksponerte og 10 prosent av de ikke-eksponerte har tilstanden. Hva heter effektmålet 2,0?",
      options: ["Prevalensratio, siden studien måler hvem som har tilstanden nå", "Relativ risiko, siden det er et forhold mellom to andeler i grupper", "Odds ratio, siden tverrsnittsdata alltid analyseres med odds", "Risikodifferanse, siden de to andelene sammenlignes med hverandre"],
      explanation: "Et tverrsnitt måler hvem som har tilstanden, ikke hvem som får den, og målet heter derfor prevalensratio selv om regnestykket er identisk med relativ risiko. Å bruke risikospråk her er en variant av feilkode E1.",
    },
    {
      question: "Hva er nullverdien for et konfidensintervall rundt en odds ratio?",
      options: ["1", "0", "1,96", "3,84"],
      explanation: "Et forholdstall på 1 betyr at gruppene er like, så det er 1 som markerer ingen sammenheng. Nullverdien 0 hører til differanser som risikodifferansen, og å bruke feil av de to er en klassisk tolkningsfeil.",
    },
    {
      question: "Hva sier størrelsen på en kji-kvadratverdi om sammenhengen?",
      options: ["Hvor sikre vi er på at sammenhengen finnes, ikke hvor sterk den er", "Hvor sterk sammenhengen er, målt på en skala fra null og oppover", "Hvor stor risikodifferansen mellom de to gruppene er i prosentpoeng", "Hvor mange prosent av variasjonen som forklares av eksponeringen"],
      explanation: "Teststatistikken vokser både med effektstørrelsen og med utvalget, så en svak sammenheng i et enormt materiale gir høy verdi. Styrken må leses av effektmålet, og å lese signifikans som styrke er feilkode E3.",
    },
    {
      question: "Hvordan regnes forventet antall i en celle under nullhypotesen?",
      options: ["Radsummen ganget med kolonnesummen, delt på totalantallet", "Radsummen ganget med kolonnesummen, delt på antall celler", "Gjennomsnittet av radsummen og kolonnesummen for den cellen", "Totalantallet delt på fire, siden tabellen har fire like celler"],
      explanation: "Under uavhengighet er forventet antall produktet av de to marginalsummene delt på N. Det er dette tallet som må være minst fem i alle fire cellene for at kji-kvadrattesten skal kunne brukes.",
    },
    {
      question: "Hva er sammenhengen mellom kji-kvadrattesten og en z-test for to andeler på samme 2x2-tabell?",
      options: ["Kji-kvadrat er kvadratet av z, og testene gir alltid samme konklusjon", "Kji-kvadrat er strengere enn z-testen og forkaster nullhypotesen sjeldnere", "De to testene måler helt ulike ting og kan gi motstridende konklusjoner", "Z-testen kan bare brukes når begge gruppene er nøyaktig like store"],
      explanation: "Ved én frihetsgrad er kji-kvadratfordelingen kvadratet av standardnormalfordelingen, og terskelverdiene henger sammen på samme måte siden 1,96 i annen er 3,84. Sensorveiledningen i blokk 1-settene godtar derfor begge metodene.",
    },
    {
      question: "En relativ risiko på 2,0 og en risikodifferanse på 0,3 prosentpoeng er regnet fra samme data. Hva viser det?",
      options: ["At forholdstallet ikke sier noe om hvor stor den absolutte forskjellen er", "At det må være gjort en regnefeil, siden målene spriker så kraftig", "At risikodifferansen bør droppes når relativ risiko allerede er oppgitt", "At sammenhengen er svak, siden risikodifferansen er så liten i tallverdi"],
      explanation: "En dobling av noe som forekommer hos tre av tusen gir tre flere tilfeller per tusen, mens en dobling fra 30 til 60 prosent gir tretti flere per hundre. Begge målene er riktige, og det er derfor gode besvarelser oppgir både forholdstallet og den absolutte forskjellen.",
    },
    {
      question: "Hva følger av at en kji-kvadrattest er signifikant?",
      options: ["At sammenhengen trolig er reell, ikke at eksponeringen er årsaken", "At eksponeringen med stor sannsynlighet forårsaker utfallet", "At sammenhengen er sterk nok til å ha praktisk betydning", "At de to gruppene er like på alle andre kjennetegn enn eksponeringen"],
      explanation: "Testen sier bare at fordelingen avviker mer fra det tilfeldige enn slingringsmonnet tilsier. Gruppene kan skille seg på andre måter samtidig, og et tverrsnitt kan i tillegg ikke fastslå hva som kom først i tid.",
    },
  ],
  'med1100-4-4': [
    {
      question: "Hva er styrken til en studie?",
      options: ["Sannsynligheten for å påvise en effekt som faktisk er til stede", "Sannsynligheten for å slå falsk alarm om en effekt som ikke er der", "Andelen av deltakerne som fullfører hele studien uten å falle fra", "Hvor stor forskjellen mellom gruppene viste seg å være i studien"],
      explanation: "Styrken er én minus sannsynligheten for type II-feil, altså sjansen for å oppdage en reell effekt av den planlagte størrelsen. Sannsynligheten for falsk alarm er signifikansnivået, og de to tallene styrer hver sin feiltype.",
    },
    {
      question: "Hvilken styrkekonstant hører til 90 prosent styrke ved tosidig 5 prosent nivå?",
      options: ["10,5", "7,9", "1,96", "3,84"],
      explanation: "Konstanten 10,5 gir 90 prosent styrke, mens 7,9 gir 80 prosent. Verdiene 1,96 og 3,84 er kritiske verdier for henholdsvis en z-test og en kji-kvadrattest og hører ikke hjemme i utvalgsstørrelsesformelen.",
    },
    {
      question: "Med standardavvik 15, minste relevante forskjell 5 og 90 prosent styrke: hvor mange trengs per gruppe?",
      options: ["189", "143", "95", "378"],
      explanation: "Regnestykket er 2 ganger 3 i annen ganger 10,5, altså 189 per gruppe. Verdien 143 svarer til 80 prosent styrke, og 378 er totalen for begge gruppene til sammen.",
    },
    {
      question: "Hva skjer med nødvendig utvalgsstørrelse når den minste relevante forskjellen halveres?",
      options: ["Den firedobles, siden forskjellen står kvadrert i nevneren", "Den dobles, siden forskjellen inngår lineært i nevneren", "Den halveres, siden mindre forskjeller er lettere å påvise", "Den er uendret, siden bare styrken påvirker utvalgsstørrelsen"],
      explanation: "Forholdet mellom standardavvik og forskjell står kvadrert, så en halvering av nevneren firedobler hele uttrykket. Det er samme kvadratrotlov som gjør at feilmarginen bare halveres når utvalget firedobles.",
    },
    {
      question: "En beregning gir 142,2 personer per gruppe. Hva skal føres som svar?",
      options: ["143", "142", "142,2", "284"],
      explanation: "Utvalgsstørrelser rundes alltid opp til hele personer, siden avrunding nedover gir lavere styrke enn den man nettopp regnet ut. Tallet 284 er totalen for to grupper og besvarer ikke spørsmålet om antall per gruppe.",
    },
    {
      question: "En studie trenger 84 fullførere per gruppe og regner med 20 prosent frafall. Hvor mange må rekrutteres per gruppe?",
      options: ["105", "101", "84", "168"],
      explanation: "Man deler på andelen som blir igjen, altså 84 delt på 0,80, som gir 105. Å gange med 1,20 gir 101, og av dem faller 20 personer fra slik at bare 81 står igjen — for få til den styrken studien ble dimensjonert for.",
    },
    {
      question: "Hva er den minste klinisk relevante forskjellen?",
      options: ["Den minste forskjellen som ville hatt praktisk betydning", "Den forskjellen forskergruppen håper å finne i studien", "Den forskjellen en tidligere pilotstudie faktisk observerte", "Den forskjellen som gjør at antall deltakere blir håndterbart"],
      explanation: "Denne størrelsen er et faglig valg om hva man ikke vil risikere å overse, ikke en gjetning på hva resultatet blir. Å sette den ut fra hva regnestykket tåler gir en studie som bare kan oppdage forskjeller ingen tvilte på.",
    },
    {
      question: "Hvor mye dyrere er 90 prosent styrke enn 80 prosent, alt annet likt?",
      options: ["Rundt en tredel flere deltakere, siden konstanten går fra 7,9 til 10,5", "Rundt dobbelt så mange deltakere, siden styrken øker med ti prosentpoeng", "Rundt fire ganger så mange deltakere, som når forskjellen halveres", "Ingen forskjell, siden styrken ikke inngår i utvalgsstørrelsesformelen"],
      explanation: "Forholdet mellom konstantene er 10,5 delt på 7,9, altså rundt 1,33. En firedobling hører til en halvering av den minste relevante forskjellen, som er en helt annen og langt dyrere endring.",
    },
    {
      question: "Hva er forventet antall i en binomisk fordeling med n lik 200 og p lik 0,15?",
      options: ["30,0 personer", "5,05 personer", "0,15 personer", "170,0 personer"],
      explanation: "Forventningen er n ganget med p, altså 30 personer, og enheten er antall og ikke andel. Verdien 5,05 er standardavviket, som er kvadratroten av n ganger p ganger én minus p.",
    },
    {
      question: "Hva er betingelsen for å bruke normaltilnærmingen til en binomisk fordeling?",
      options: ["Både n ganger p og n ganger én minus p må være minst fem personer", "Antall forsøk n må være minst tretti i den aktuelle studien", "Sannsynligheten p må ligge mellom 0,40 og 0,60 i hvert forsøk", "Standardavviket må være mindre enn halvparten av forventningen"],
      explanation: "Kravet er minst fem forventede i hver av de to kategoriene, som er samme betingelse som for konfidensintervallet for en andel. Er den ene av dem under fem, er fordelingen for skjev til at en symmetrisk normalfordeling passer.",
    },
    {
      question: "I en undersøkelse med n lik 60 og p lik 0,04 vil en kandidat bruke normaltilnærmingen. Er det forsvarlig?",
      options: ["Nei, siden n ganger p bare er 2,4 og dermed er under grensen på fem", "Ja, siden n er over tretti og fordelingen dermed blir glatt nok", "Ja, siden n ganger én minus p er 57,6 og dermed godt over grensen", "Nei, siden standardavviket blir større enn selve forventningen her"],
      explanation: "Begge betingelsene må være oppfylt, og her svikter den ene fordi forventningen bare er 2,4 personer. Fordelingen er da sterkt høyreskjev, og en symmetrisk normalfordeling bommer i begge ender.",
    },
    {
      question: "En studie med lav styrke finner ingen signifikant forskjell. Hva kan konkluderes?",
      options: ["At forskjellen ikke er påvist, ikke at den ikke finnes", "At de to gruppene med rimelig sikkerhet er likeverdige", "At studien bør gjentas med et strengere signifikansnivå", "At forskjellen finnes, men er mindre enn den planlagte"],
      explanation: "En underpowered studie kan ikke skille mellom fravær av effekt og manglende evne til å oppdage den. Å lese det negative resultatet som bevis for likhet er feilkode E4, og en påstand om likeverdighet krever i tillegg et helt annet studiedesign.",
    },
    {
      question: "Hva gir utvalgsstørrelsesformelen svar på?",
      options: ["Antall deltakere i hver av de to gruppene", "Antall deltakere i studien til sammen", "Antall deltakere som må rekrutteres etter frafall", "Antall grupper studien bør deles inn i"],
      explanation: "Faktoren to i formelen dekker at begge gruppene bidrar med usikkerhet, men resultatet er likevel antallet per gruppe. Totalen er det dobbelte, og frafallsjusteringen kommer i tillegg som et eget trinn etterpå.",
    },
    {
      question: "I hvilken rekkefølge skal opprunding og frafallsjustering gjøres?",
      options: ["Rund opp først, juster så for frafall, og rund deretter opp igjen", "Juster for frafall først, og rund så opp én gang til slutt", "Rund opp bare helt til slutt, etter at alt annet er regnet", "Rekkefølgen er likegyldig, siden resultatet blir det samme"],
      explanation: "Antallet som skal fullføre må være et helt tall før frafallet legges på, og resultatet av frafallsjusteringen må rundes opp igjen. Gjør man det motsatt, blir totalen litt for lav, og studien får lavere styrke enn den ble dimensjonert for.",
    },
  ],
  'med1100-4-5': [
    {
      question: "Hva er formelen for flokkimmunitetsterskelen?",
      options: ["Én minus én delt på reproduksjonstallet", "Én delt på reproduksjonstallet, uten mer", "Én minus selve reproduksjonstallet", "Reproduksjonstallet delt på én pluss seg selv"],
      explanation: "Terskelen følger av kravet om at effektivt reproduksjonstall skal under 1, som gir at mottakelig andel må være mindre enn én delt på reproduksjonstallet. Den immune andelen blir da komplementet, altså én minus denne brøken.",
    },
    {
      question: "Et tenkt agens har reproduksjonstall 4. Hva er flokkimmunitetsterskelen?",
      options: ["75 prosent", "80 prosent", "25 prosent", "60 prosent"],
      explanation: "Én minus én firedel gir 0,75, altså 75 prosent. Verdien 80 prosent hører til reproduksjonstall 5, og 25 prosent er den mottakelige andelen og ikke den immune.",
    },
    {
      question: "Hvilken verdi skal effektivt reproduksjonstall sammenlignes med?",
      options: ["1", "0", "Det grunnleggende reproduksjonstallet", "Den mottakelige andelen"],
      explanation: "Ved verdien 1 erstatter hvert tilfelle nøyaktig seg selv, så antallet holder seg konstant. Å sammenligne med det grunnleggende reproduksjonstallet sier ingenting, siden effektivt reproduksjonstall alltid er lavere når noen er immune.",
    },
    {
      question: "Hva menes med at en observasjon i en overlevelsesanalyse er sensurert?",
      options: ["Personen forsvant ut av oppfølgingen uten at utfallet hadde inntruffet", "Personen fikk utfallet, men på et tidspunkt som ikke ble registrert", "Personen ble utelatt fordi dataene var av for dårlig kvalitet", "Personen fullførte studien uten at noen hendelse noen gang kunne skje"],
      explanation: "Sensurering betyr at oppfølgingen opphørte før utfallet inntraff, og at man dermed ikke vet hva som skjedde etterpå. Metoden lar likevel personen telle så lenge vedkommende faktisk ble fulgt, og det er nettopp den informasjonen Kaplan-Meier utnytter.",
    },
    {
      question: "Hva skjer med Kaplan-Meier-kurven ved en sensurering?",
      options: ["Kurven faller ikke, men risikomengden blir mindre til neste hendelse", "Kurven faller like mye som ved en hendelse på samme tidspunkt", "Kurven faller halvparten så mye som ved en vanlig hendelse", "Kurven stiger litt, siden en person uten hendelse forlater studien"],
      explanation: "Bare hendelser gir fall i kurven, mens sensureringer bare markeres og reduserer antallet under risiko. Den mindre risikomengden gjør at hvert påfølgende fall blir større, siden én hendelse da utgjør en større andel.",
    },
    {
      question: "Ti personer følges, og de tre første faktorene i en levetidstabell er 0,900, 0,875 og 0,833. Hva er kumulativ overlevelse etter disse tre?",
      options: ["0,656", "0,869", "2,608", "0,750"],
      explanation: "Kaplan-Meier-estimatet er et produkt av faktorene, så 0,900 ganger 0,875 ganger 0,833 blir 0,656. Verdien 0,869 er gjennomsnittet av faktorene og 2,608 er summen, og ingen av dem er en overlevelsesandel.",
    },
    {
      question: "Hvorfor gir den naive andelen hendelser delt på inkluderte for høy overlevelse?",
      options: ["Fordi den behandler sensurerte som om de var fulgt hele veien uten hendelse", "Fordi den ikke tar hensyn til at noen personer fikk utfallet svært tidlig", "Fordi den regner med for få personer i nevneren fra og med første hendelse", "Fordi den ganger sammen andeler i stedet for å legge dem sammen riktig"],
      explanation: "De sensurerte telles som overlevere selv om man ikke vet hva som skjedde etter at de forsvant, og det tilfører informasjon man ikke har. Kaplan-Meier lar dem i stedet telle bare så lenge de faktisk ble fulgt.",
    },
    {
      question: "Hva måler en regresjonskoeffisient?",
      options: ["Hvor mye Y endrer seg per enhets økning i X, med enhet", "Hvor tett punktene ligger rundt den tilpassede linja, uten enhet", "Hvor stor andel av variasjonen i Y som modellen forklarer", "Hvor sannsynlig det er at sammenhengen skyldes tilfeldigheter"],
      explanation: "Koeffisienten er linjens stigningstall og har enhet, nemlig Y-enhet per X-enhet. Hvor tett punktene ligger måles av korrelasjonskoeffisienten, og å blande de to er feilkode E7.",
    },
    {
      question: "Et datasett har regresjonskoeffisient 3,0 og korrelasjonskoeffisient 0,25. Hva betyr det?",
      options: ["Sammenhengen er bratt, men punktene ligger spredt rundt linja", "Sammenhengen er både bratt og svært tett rundt den tilpassede linja", "Tallene er uforenlige, så det må foreligge en regnefeil i analysen", "Sammenhengen er flat, siden korrelasjonen er så nær null i verdi"],
      explanation: "De to målene er uavhengige av hverandre: det ene sier hvor bratt linja er, det andre hvor mye spredning det er om den. En bratt linje gjennom en vid punktsky er en helt vanlig situasjon.",
    },
    {
      question: "Hvilken verdi skal et konfidensintervall for en regresjonskoeffisient vurderes mot?",
      options: ["0", "1", "1,96", "Korrelasjonskoeffisienten"],
      explanation: "En koeffisient på null betyr ingen sammenheng, så det er null som er nullverdien her. Verdien 1 er nullverdien for forholdstall som odds ratio og relativ risiko, og å bruke feil av de to er en klassisk tolkningsfeil.",
    },
    {
      question: "Hva er sannsynligheten for minst én falsk positiv ved 20 uavhengige tester på 5 prosent nivå?",
      options: ["64 prosent", "40 prosent", "5 prosent", "95 prosent"],
      explanation: "Regnestykket er én minus 0,95 opphøyd i 20, som blir 0,64. Verdien 40 prosent hører til ti tester, og 5 prosent er sannsynligheten for falsk positiv i én enkelt test.",
    },
    {
      question: "Hva gjør en Bonferroni-korreksjon?",
      options: ["Deler signifikansnivået på antall tester som er utført", "Ganger signifikansnivået med antall tester som er utført", "Fjerner de testene som ga de minste p-verdiene i materialet", "Øker utvalgsstørrelsen slik at styrken holdes uendret"],
      explanation: "Korreksjonen strammer terskelen ved å dele nivået på antall tester, slik at sannsynligheten for minst én falsk positiv holdes nede. Prisen er lavere styrke, siden reelle funn lettere kan bli oversett.",
    },
    {
      question: "En studie med 80 000 deltakere finner en forskjell på 0,3 prosentpoeng med p under 0,001. Hva er den mest presise tolkningen?",
      options: ["Forskjellen er trolig reell, men størrelsen er svært liten", "Forskjellen er både reell og av betydelig praktisk omfang", "Den lave p-verdien viser at forskjellen er viktig å ta hensyn til", "Studien er så stor at resultatet må skyldes en systematisk feil"],
      explanation: "Med svært mange deltakere blir standardfeilen liten, og selv ubetydelige forskjeller passerer terskelen. Å lese signifikans som relevans er feilkode E3, og relevansen må vurderes ut fra effektstørrelsen og hva som står på spill.",
    },
    {
      question: "Hvilken forutsetning hviler Kaplan-Meier-metoden på?",
      options: ["At sensureringen er uavhengig av hvordan det ville gått med personen", "At alle deltakerne følges i nøyaktig like lang tid fra studiestart", "At antall hendelser er minst fem på hvert enkelt tidspunkt i tabellen", "At hendelsene fordeler seg jevnt utover hele oppfølgingsperioden"],
      explanation: "Metoden lar dem som fortsatt følges representere dem som forsvant, og det krever at frafallet ikke henger sammen med utfallet. Forsvinner folk nettopp fordi det går dårlig med dem, blir kurven systematisk for optimistisk uten at det synes på den.",
    },
    {
      question: "Hva menes med medianoverlevelse i en Kaplan-Meier-analyse?",
      options: ["Tidspunktet der kurven krysser en overlevelse på 0,50", "Gjennomsnittlig tid fra studiestart til hendelsen inntreffer", "Overlevelsen ved midtpunktet av oppfølgingsperioden i studien", "Antall måneder halvparten av deltakerne ble fulgt i studien"],
      explanation: "Medianen leses av der kurven passerer halvparten, og den brukes fordi gjennomsnittlig tid ikke kan regnes når noen fortsatt er hendelsesfrie ved studieslutt. Ender kurven over 0,50, er medianen ikke nådd, og det er et helt legitimt svar.",
    },
    {
      question: "En analyse tester femten utfall og rapporterer det ene som fikk p lik 0,03. Hva bør sies om funnet?",
      options: ["Det er hypotesegenererende og må bekreftes i en ny studie", "Det er et etablert funn, siden p-verdien er under 0,05", "Det bør forkastes helt, siden analysen ikke kan brukes til noe", "Det styrkes av at fjorten andre tester ikke ga noe utslag"],
      explanation: "Med femten tester er sannsynligheten for minst ett utslag under 0,05 rundt 54 prosent selv om ingenting er sant, og p-verdien holder ikke mot en korrigert terskel på 0,0033. Funnet kan brukes til å formulere en hypotese for en ny studie der nettopp den er bestemt på forhånd.",
    },
  ],
  'med1100-5-1': [
    {
      question: "Hva binder hematoksylin seg til i et vevssnitt?",
      options: ["Negativt ladde molekyler, først og fremst DNA og RNA", "Positivt ladde molekyler, som kollagen og cytoplasmaprotein", "Karbohydrater, først og fremst mucin og glykogen", "Lipider, først og fremst myelin og membranfett"],
      explanation: "Hematoksylin er en basisk farge og fester seg til det som er negativt ladd — nukleinsyrene. Derfor blir kjernen blå, og cytoplasma blir blåfiolett når det er fullt av ru endoplasmatisk retikulum. Alternativet om positivt ladde molekyler beskriver eosin, som er den sure fargen i det samme snittet.",
    },
    {
      question: "En celle har tydelig blåfiolett cytoplasma i et HE-snitt. Hva er den riktige slutningen?",
      options: ["Cytoplasma er rikt på RNA, altså har cellen mye ru ER og lager mye protein", "Cytoplasma er rikt på kollagen, altså er cellen en fiberdannende bindevevscelle", "Cytoplasma er rikt på glykogen, altså lagrer cellen mye glukose", "Cytoplasma er rikt på lipid, altså er cellen en fettlagrende celle"],
      explanation: "Blåfiolett cytoplasma betyr at hematoksylin har bundet seg der, og det negativt ladde molekylet i cytoplasma er ribosomalt RNA i ru endoplasmatisk retikulum. Alternativet om glykogen peker mot en PAS-positiv struktur, ikke mot en basofil — glykogen er karbohydrat og farges av PAS, ikke av hematoksylin.",
    },
    {
      question: "Hvilken struktur blir kraftig magentarød ved PAS-farging?",
      options: ["Basalmembranen under et epitel", "Cellekjernen i en epitelcelle", "Kollagenfibrene i løst bindevev", "Myelinskjeden rundt en nervefiber"],
      explanation: "PAS slår ut på karbohydrater, og basalmembranen er karbohydratrik — derfor blir den en tydelig magentarød strek. Cellekjernen er negativt ladd og farges av hematoksylin i stedet; PAS gir den ingen nevneverdig farge.",
    },
    {
      question: "Hvilket ett kriterium avgjør om et epitel er enlaget eller flerlaget?",
      options: ["Om alle cellene når helt ned til basalmembranen", "Om kjernene ligger i én eller i flere høyder", "Om cellene er høyere enn de er brede ved lumen", "Om det finnes mikrovilli på den frie overflaten"],
      explanation: "Kontakten med basalmembranen er det definerende kriteriet: når alle cellene den, er epitelet enlaget uansett hvordan det ser ut. Alternativet om kjernehøyder er nettopp den fellen flerradet sylinderepitel og skråsnitt setter opp — kjernene kan ligge i flere høyder i et epitel som likevel er enlaget.",
    },
    {
      question: "Et epitel består av ett lag flate celler der cytoplasma nesten bare ses som en strek. Hvilken type er det?",
      options: ["Enlaget plateepitel, som i lungeblærer og karvegg", "Enlaget kubisk epitel, som i nyretubuli og ganger", "Enlaget sylinderepitel, som i tynntarm og galleblære", "Flerlaget plateepitel, som i munnhule og spiserør"],
      explanation: "Ett lag med svært flate celler er definisjonen på enlaget plateepitel, og den flate formen gir kortest mulig diffusjonsvei der noe skal passere raskt. Enlaget kubisk epitel har celler som er omtrent like høye som brede med rund kjerne midt i, og ser derfor helt annerledes ut.",
    },
    {
      question: "Hva er det sterkeste enkeltkjennetegnet på overgangsepitel (urotel)?",
      options: ["Store, avrundede overflateceller, flere av dem med to kjerner", "Høye, smale celler med kjernene liggende i samme høyde", "Flate overflateceller uten kjerne, dekket av et tørt hornlag av keratin", "Ett lag kubiske celler arrangert i ring rundt et lumen"],
      explanation: "Tokjernede paraplyceller som hvelver seg over cellene under, finnes praktisk talt ikke i andre epiteler, og kjennetegnet overlever også når blæren er fylt og epitelet flates ut. Alternativet med flate, kjerneløse overflateceller og hornlag beskriver forhornet flerlaget plateepitel, altså hud.",
    },
    {
      question: "Hva navngis et flerlaget epitel etter?",
      options: ["Formen på cellene ved den frie overflaten", "Formen på cellene i det nederste laget", "Antall cellelag som ligger over hverandre", "Formen på kjernene i det midterste laget"],
      explanation: "Navnet gis etter overflatecellene — derfor heter epitelet i spiserøret flerlaget plateepitel selv om cellene nederst er kubiske. Å navngi etter det nederste laget er en vanlig feil, og den gjør at samme epitel får to forskjellige navn hos to kandidater.",
    },
    {
      question: "Et endestykke har mørkt blåfiolett cytoplasma, rund kjerne i nedre tredel og trangt lumen. Hva er det?",
      options: ["Et serøst endestykke, som lager proteinrikt sekret", "Et mukøst endestykke, som lager karbohydratrikt slim", "En begercelle, som ligger i et overflateepitel", "En endokrin celleklynge, som lager hormon til blodet"],
      explanation: "Basofilt cytoplasma kommer av mye ru endoplasmatisk retikulum, og proteinsyntese er nettopp det et serøst endestykke driver med; rund kjerne i nedre tredel og trangt lumen peker samme vei. Et mukøst endestykke ville hatt blekt, skummende cytoplasma og en flat kjerne presset helt mot basis.",
    },
    {
      question: "Hvorfor ser cytoplasma i et mukøst endestykke blekt og skummende ut i et vanlig HE-snitt?",
      options: ["Slimet vaskes ut under prepareringen og etterlater tomme rom", "Slimet er surt og binder derfor eosin i stedet for hematoksylin", "Cellen har svært lite cytoplasma igjen etter at sekretet er tømt", "Slimet er så tett pakket at fargen ikke rekker inn i cellen"],
      explanation: "Det bleke, skummende preget er en preparatartefakt: mucin løses ut på veien fra vev til objektglass, og det som står igjen, er hulrommene. Alternativet om at slimet binder eosin, stemmer ikke — en PAS-farging viser tvert imot at mucinet er der, kraftig magentarødt.",
    },
    {
      question: "Hva er hovedforskjellen mellom en eksokrin og en endokrin kjertel?",
      options: ["Eksokrin har utførselsgang til en overflate, endokrin leverer til blodet", "Eksokrin lager protein til fordøyelsen, endokrin lager slim og fett", "Eksokrin ligger alltid nær tarmveggen, endokrin ligger alltid inne i hjernen", "Eksokrin er bygd av epitel, mens endokrin er bygd av bindevev"],
      explanation: "Skillet er anatomisk og går på om forbindelsen til overflaten er beholdt: eksokrin har rør ut, endokrin har blod rundt. Alternativet om at endokrin er bygd av bindevev, er galt — begge kjerteltyper er bygd av epitel, og det er nettopp derfor kjertelvev hører hjemme i et epitelkapittel.",
    },
    {
      question: "Hvorfor har epitelvev ingen blodkar mellom cellene?",
      options: ["Epitel ernæres ved diffusjon fra bindevevet under basalmembranen", "Epitel har så lav omsetning at det ikke trenger oksygen i det hele tatt", "Epitel får all næring fra sekretet som passerer den frie overflaten", "Epitel lager sitt eget oksygen ved hjelp av mitokondriene i cellene"],
      explanation: "Fordi cellene ligger tett i tett uten kar, må næring og oksygen diffundere opp fra det karrike bindevevet under, og det er en av grunnene til at epitel må holdes tynt eller ha stor utskiftingstakt. Påstanden om at epitel ikke trenger oksygen, er gal — tarmepitel er blant kroppens mest omsetningsaktive vev.",
    },
    {
      question: "En fnugget kant mot lumen i et enlaget sylinderepitel svarer til hvilken struktur?",
      options: ["Mikrovilli, som til sammen danner en børstesøm", "Cilier, som slår koordinert og frakter slim videre", "Basalmembranen, som ligger som en karbohydratrik strek", "Glykokalyks, som er et lag av utskilt slim over cellene"],
      explanation: "Enkeltmikrovilli er for små til å skilles i lysmikroskop, så det du ser, er den samlede kanten de danner. Cilier er lengre, færre og bevegelige, og gir en hårete, mer uregelmessig kant — de hører til luftveiene, ikke til tarmens opptaksepitel.",
    },
    {
      question: "Hvorfor er det risikabelt å konkludere «flerlaget» fordi kjernene ligger i flere høyder?",
      options: ["Både skråsnitt og flerradet epitel gir det inntrykket uten grunnlag", "Kjerner ligger alltid i flere høyder i alle epiteltyper som finnes", "Kjernehøyde kan bare vurderes riktig i snitt farget med PAS-metoden", "Flerlaget epitel har alltid alle kjernene liggende i nøyaktig én høyde"],
      explanation: "Et skråsnitt gjennom et enlaget epitel sprer kjernene i høyden rent geometrisk, og flerradet sylinderepitel har kjerner i flere høyder selv om alle cellene når basalmembranen. Påstanden om at flerlaget epitel har kjernene i én høyde, er dessuten motsatt av hvordan det faktisk ser ut.",
    },
    {
      question: "En besvarelse svarer «flerlaget plateepitel» på en oppgave som sier «navngi og begrunn». Hva skjer med poengene?",
      options: ["Omtrent halve uttellingen faller bort, fordi begrunnelsen mangler", "Hele uttellingen faller bort, fordi svaret regnes som ubesvart", "Ingenting faller bort, siden navnet på vevet er helt riktig", "Uttellingen trekkes til minus, fordi svaret er ufullstendig ført"],
      explanation: "Spørreordet «begrunn» ber deg knytte navnet til observerbare kjennetegn, og momentene for begrunnelsen teller omtrent like mye som selve navnet. Svaret trekkes ikke til minus — negativ retting gjelder bare rutenett i blokk 2, ikke fritekst.",
    },
  ],
  'med1100-5-2': [
    {
      question: "Hva forteller mye ru endoplasmatisk retikulum sammen med en stor nukleolus?",
      options: ["At cellen driver høy proteinsyntese for eksport ut av cellen", "At cellen driver høy steroidsyntese og bryter ned fremmedstoff", "At cellen har svært høyt energiforbruk og arbeider uavbrutt", "At cellen er i hvile og har slått av det meste av genomet sitt"],
      explanation: "Ru endoplasmatisk retikulum er stedet proteiner for eksport lages, og nukleolus er der ribosomene settes sammen — de to observasjonene peker uavhengig av hverandre mot samme funksjon. Steroidsyntese ville i stedet gitt mye glatt endoplasmatisk retikulum, altså membraner uten ribosomer langs seg.",
    },
    {
      question: "Hvordan ser heterokromatin ut i et elektronmikroskopibilde, og hva betyr det?",
      options: ["Mørkt og kondensert, og det er transkripsjonsinaktivt", "Mørkt og kondensert, og det er transkripsjonsaktivt", "Lyst og utstrakt, og det er transkripsjonsinaktivt", "Lyst og utstrakt, og det er transkripsjonsaktivt"],
      explanation: "Tettpakket kromatin er utilgjengelig for transkripsjonsmaskineriet, og det tettpakkede er også det mest elektrontette, altså mørkeste. Alternativet som beskriver lyst, utstrakt og aktivt kromatin, er riktig som beskrivelse — men det beskriver eukromatin, ikke heterokromatin.",
    },
    {
      question: "Hva farger osmiumsyre, og hvilken struktur trer derfor tydelig fram?",
      options: ["Lipider, og derfor blir myelinskjeden helt svart", "Nukleinsyrer, og derfor blir cellekjernen svart", "Karbohydrater, og derfor blir basalmembranen svart", "Kollagen, og derfor blir bindevevsfibrene svarte"],
      explanation: "Osmiumsyre binder seg til lipid og gjør det svært elektrontett, og myelinskjeden består nesten bare av lipid. Alternativet om karbohydrater beskriver PAS-farging i lysmikroskopi, som er en helt annen teknikk med et helt annet formål.",
    },
    {
      question: "En muskelcelle er tverrstripet, forgrenet og har glansstriper. Hvilken type er det?",
      options: ["Hjertemuskel, som må trekke seg sammen som én enhet", "Skjelettmuskel, som styres viljestyrt fiber for fiber", "Glatt muskel, som holder en jevn tonus i hulorganvegger", "Skjelettmuskel av langsom type, som tåler vedvarende arbeid"],
      explanation: "Glansstripene finnes bare i hjertemuskel, og de inneholder koblingene som lar det elektriske signalet gå direkte fra celle til celle. Skjelettmuskel er også tverrstripet, men er verken forgrenet eller utstyrt med glansstriper — hver fiber får sin egen nerveende i stedet.",
    },
    {
      question: "Hvor ligger kjernene i en tverrstripet skjelettmuskelcelle, og hvor mange er det?",
      options: ["Mange kjerner, som ligger helt ute i cellens kant", "Én til to kjerner, som ligger midt inne i cellen", "Én kjerne, som ligger midt i den spolformede cellen", "Mange kjerner, som ligger samlet midt inne i cellen"],
      explanation: "Muskelfiberen dannes ved at mange celler smelter sammen, og de kontraktile proteinene fyller cellen så tett at kjernene presses helt ut mot membranen. Alternativet med én til to sentrale kjerner beskriver hjertemuskel, som også er tverrstripet og derfor er den nærmeste forvekslingen.",
    },
    {
      question: "Hvorfor mangler glatt muskulatur tverrstriper?",
      options: ["De kontraktile proteinene ligger i skrå bunter, ikke i ordnede rader", "Glatt muskulatur mangler kontraktile proteiner og trekker seg ikke sammen", "Cellene er for små til at stripene kan skilles i et lysmikroskop", "Prepareringen løser ut proteinene før snittet blir farget og lest"],
      explanation: "Striper oppstår først når like partier av de kontraktile enhetene stiller seg opp ved siden av hverandre på tvers av cellen, og den oppstillingen mangler i glatt muskel. Påstanden om at glatt muskulatur ikke trekker seg sammen, er gal — den holder blant annet tonus i tarm og karvegg.",
    },
    {
      question: "Hva er den underliggende forskjellen som forklarer alle de andre forskjellene mellom benvev og bruskvev?",
      options: ["Benmatriks er forkalket og hard, mens bruskmatriks ikke er det", "Benvev har kollagen i matriks, mens bruskvev mangler kollagen", "Benceller deler seg raskt, mens bruskceller ikke deler seg i det hele tatt", "Benvev dannes fra mesoderm, mens bruskvev dannes fra ektoderm"],
      explanation: "Forkalkningen gjør at ingenting kan diffundere gjennom benmatriks, og derfor må benvev ha blodkar inne i seg og canaliculi mellom cellene; brusk klarer seg med diffusjon fordi matriks ikke er forkalket. Påstanden om kollagen er feil — begge vevene har kollagen i matriks, og det er ikke der skillet går.",
    },
    {
      question: "To celler ligger i samme lakune, omgitt av homogen matriks uten kanaler. Hvilket vev er dette?",
      options: ["Bruskvev, der cellene danner isogene grupper", "Benvev, der cellene ligger i lameller rundt kar", "Nervevev, der gliaceller omgir hvert nevron tett", "Fettvev, der cellene ligger tett i store grupper"],
      explanation: "To eller flere kondrocytter i samme lakune er en isogen gruppe, altså datterceller etter en deling, og fraværet av canaliculi bekrefter at matriks ikke er forkalket. Benvev har som regel én osteocytt per lakune, med canaliculi ut fra hver av dem.",
    },
    {
      question: "Hvorfor må benvev ha canaliculi, mens bruskvev klarer seg uten?",
      options: ["Forkalket matriks slipper ingenting gjennom ved fri diffusjon", "Benceller har langt høyere energiforbruk enn bruskceller har", "Benvev har ingen bindevevshinne utenpå seg som kan gi næring", "Bruskvev henter all næring fra leddvæsken som omgir brusken"],
      explanation: "Når matriks er mineralisert, kan næring og oksygen ikke diffundere gjennom den, og osteocyttene ville dø uten en fysisk forbindelse til blodet. Påstanden om at benvev mangler bindevevshinne, er gal — benvev har periost, men hinnen alene rekker ikke inn gjennom en forkalket matriks.",
    },
    {
      question: "Hva er Nissl-substans i en nervecelle?",
      options: ["Ru endoplasmatisk retikulum i svært store mengder", "Opphopning av lysosomer med nedbrytende enzym", "Tett pakket heterokromatin like ved kjernemembranen", "Sekretgranula med ferdig signalstoff klart til bruk"],
      explanation: "Det grovkornede, basofile materialet i nervecellens cytoplasma er ruER, og det basofile preget skyldes det ribosomale RNA-et. Alternativet om heterokromatin plasserer strukturen feil — Nissl-substans ligger i cytoplasma, ikke i kjernen.",
    },
    {
      question: "Hvordan kjenner du igjen nervevev i et vanlig snitt?",
      options: ["Få store, lyse kjerner med nukleolus, omgitt av mange små, mørke kjerner", "Mange like store kjerner som ligger jevnt fordelt i hele bildet", "Celler i lakuner omgitt av en homogen og kraftig basofil matriks", "Tett i tett med celler over en tydelig og PAS-positiv basalmembran"],
      explanation: "Kontrasten mellom de få store nevronkjernene og de mange små gliakjernene er selve signaturen på nervevev. Alternativet om celler over en basalmembran beskriver epitel, som er organisert helt annerledes: der ligger cellene tett sammen uten matriks imellom.",
    },
    {
      question: "En celle har cytoplasma dominert av membranrør uten ribosomer, og mange mitokondrier. Hva produserer den?",
      options: ["Steroidhormon, siden glatt ER lager lipider og steroider", "Proteinhormon, siden glatt ER lager proteiner for eksport", "Slim, siden glatt ER lager karbohydratrike sekreter", "Antistoff, siden glatt ER lager immunglobuliner til blodet"],
      explanation: "Membranrør uten ribosomer er glatt endoplasmatisk retikulum, og der lages lipider og steroider; mitokondriene støtter slutningen, siden flere trinn i steroidsyntesen foregår der. Antistoff er et protein, og protein for eksport lages på ru endoplasmatisk retikulum — den cellen ville sett helt annerledes ut.",
    },
    {
      question: "Hva er riktig om fargene i et elektronmikroskopibilde?",
      options: ["Bildet er svart-hvitt, og mørkt betyr høy elektrontetthet", "Bildet er farget med hematoksylin og eosin som ellers", "Bildet er farget, men bare strukturer med lipid får farge", "Bildet er svart-hvitt, og mørkt betyr lav elektrontetthet"],
      explanation: "Elektronmikroskopi bruker elektroner, ikke lys, og gir derfor ingen farger; det du kaller mørkt, er der flest elektroner stoppes. Alternativet som snur elektrontettheten, er nettopp forvekslingen som gjør at kondensert kromatin blir feiltolket som lyst.",
    },
    {
      question: "Hvilken rute følger et protein som skal skilles ut av cellen?",
      options: ["Ru ER, så Golgi, så sekretgranula, så ut av cellen", "Glatt ER, så Golgi, så lysosom, så ut av cellen", "Golgi, så ru ER, så sekretgranula, så ut av cellen", "Ru ER, så lysosom, så Golgi, så ut av cellen"],
      explanation: "Proteinet lages på ruER, bearbeides og pakkes i Golgi, og ligger i sekretgranula til det skilles ut — rekkefølgen er fast og er verdt å kunne utenat. Alternativet som setter Golgi først, snur kjeden: Golgi mottar fra ru ER, ikke omvendt.",
    },
  ],
  'med1100-6-1': [
    {
      question: "Hva er nettoutbyttet av glykolysen per molekyl glukose?",
      options: ["2 ATP, 2 NADH og 2 pyruvat", "4 ATP, 2 NADH og 2 pyruvat", "2 ATP, 4 NADH og 1 pyruvat", "4 ATP, 4 NADH og 4 pyruvat"],
      explanation: "Fire ATP høstes i gevinstfasen, men to er allerede investert i de to fosforyleringene, så netto blir to. Alternativet med 4 ATP oppgir bruttotallet, og det er den vanligste enkeltfeilen i denne sjangeren.",
    },
    {
      question: "Hvor mange ATP investerer glykolysen før gevinstfasen, og i hvilke trinn?",
      options: ["2 ATP: i heksokinasetrinnet og i PFK-1-trinnet", "1 ATP: bare i heksokinasetrinnet helt i starten", "4 ATP: ett i hvert av de fire første trinnene", "0 ATP: glykolysen bruker ikke ATP i det hele tatt"],
      explanation: "Glukose fosforyleres til glukose-6-fosfat, og fruktose-6-fosfat fosforyleres videre til fruktose-1,6-bisfosfat — begge trinn koster ett ATP hver. Påstanden om at glykolysen ikke bruker ATP, overser nettopp den investeringen som gjør netto og brutto forskjellig.",
    },
    {
      question: "Hvorfor gir gevinstfasen 4 ATP og ikke 2?",
      options: ["Fordi molekylet er spaltet i to, så alt videre skjer i to eksemplarer", "Fordi hvert trinn i gevinstfasen gir dobbelt så mye ATP som vanlig", "Fordi cellen får tilbake de to ATP-ene den investerte i starten", "Fordi NADH fra gevinstfasen regnes om til to ekstra ATP her"],
      explanation: "Fruktose-1,6-bisfosfat spaltes i to tre-karbonmolekyler, og hvert av dem gir to ATP videre nedover. Alternativet om at cellen «får tilbake» investeringen, blander to regnskapsposter: investeringen trekkes fra gevinsten, den legges ikke til den.",
    },
    {
      question: "Hva er nettoutbyttet av anaerob glykolyse til laktat per glukose?",
      options: ["2 ATP og 0 NADH", "2 ATP og 2 NADH", "4 ATP og 0 NADH", "0 ATP og 2 NADH"],
      explanation: "ATP-tallet er uendret, fordi laktattrinnet verken lager eller bruker ATP, men de to NADH-ene forbrukes når pyruvat reduseres til laktat. Alternativet med 2 ATP og 2 NADH er nettopp den fellen som testes: det overser NADH-forbruket i siste trinn.",
    },
    {
      question: "Hva er hensikten med å omdanne pyruvat til laktat når oksygen mangler?",
      options: ["Å regenerere NAD⁺ slik at glykolysen kan fortsette", "Å produsere ekstra ATP utenom det glykolysen gir", "Å kvitte seg med et giftig avfallsstoff fra cellen", "Å frigjøre oksygen til elektrontransportkjeden"],
      explanation: "Glykolysens gevinstfase krever fritt NAD⁺, og uten oksygen kan ikke NADH tømmes i elektrontransportkjeden — uten laktattrinnet ville cellen gå tom for NAD⁺ og glykolysen stoppe. Laktattrinnet lager ikke ATP; det er prisen for å holde de to ATP-ene rennende.",
    },
    {
      question: "Hvorfor er modne røde blodceller helt avhengige av anaerob glykolyse?",
      options: ["De mangler mitokondrier og har ingen annen energikilde", "De mangler glykolyseenzymer og må gå en annen vei rundt", "De har for lite oksygen tilgjengelig inne i cytoplasma", "De mangler cellemembran og kan ikke ta opp næring utenfra"],
      explanation: "Uten mitokondrier finnes verken sitronsyresyklus eller elektrontransportkjede, så glykolysen i cytosol er alt cellen har. Påstanden om oksygenmangel er misvisende — røde blodceller er fulle av oksygen, de mangler bare apparatet til å bruke det.",
    },
    {
      question: "Hvor foregår glukoneogenesen?",
      options: ["I hovedsak i leveren, og dessuten i nyrebarken", "I alle celler i kroppen, på linje med glykolysen", "I hovedsak i skjelettmuskulaturen under hvile", "I mitokondriene i alle vev med høyt energibehov"],
      explanation: "Bare lever og nyrebark har hele enzymapparatet for nydannelse av glukose, og det er derfor leveren som holder blodsukkeret oppe under faste. Glykolysen går derimot i alle celler — det er nettopp asymmetrien mellom de to veiene som gjør lokalisasjonen til et eksamensspørsmål.",
    },
    {
      question: "Hvorfor kan ikke skjelettmuskulatur bidra direkte til blodsukkeret?",
      options: ["Muskel mangler glukose-6-fosfatase og får ikke glukosen ut", "Muskel har ingen glykogenlagre å bryte ned til glukose", "Muskel bruker all glukosen sin opp før den kan skilles ut", "Muskel mangler transportproteiner for glukose i membranen"],
      explanation: "Glykogen brytes ned til glukose-6-fosfat, som er ladet og derfor ikke kommer gjennom membranen; enzymet som fjerner fosfatgruppen, finnes kun i lever og nyrebark. Påstanden om at muskel ikke har glykogenlagre, er gal — muskelen har store lagre, men de er et privat lager for muskelen selv.",
    },
    {
      question: "Hva er fruktose-2,6-bisfosfat?",
      options: ["Et signalmolekyl som styrer retningen på fluksen", "Et mellomprodukt på veien fra glukose til pyruvat", "En energivaluta som cellen bruker på linje med ATP", "Et lagringsmolekyl for glukose i lever og i muskel"],
      explanation: "F2,6BP ligger ikke på veien mellom glukose og pyruvat — det lages og fjernes utelukkende for å regulere. Alternativet om mellomprodukt beskriver fruktose-1,6-bisfosfat, som er noe helt annet, og navnelikheten er selve fellen her.",
    },
    {
      question: "Hva gjør fruktose-2,6-bisfosfat med PFK-1 og FBPase-1?",
      options: ["Aktiverer PFK-1 og hemmer FBPase-1, samtidig", "Hemmer PFK-1 og aktiverer FBPase-1, samtidig", "Aktiverer begge to, slik at flukset øker begge veier", "Hemmer begge to, slik at flukset stopper helt opp"],
      explanation: "Ett molekyl som stiger, skrur opp glykolysen og ned glukoneogenesen på én gang, og derfor snur flukset entydig i én retning. Alternativet der begge aktiveres, ville gitt et tomgangsløp der ATP brennes uten netto resultat — nettopp det reguleringen finnes for å hindre.",
    },
    {
      question: "Hva skjer med fruktose-2,6-bisfosfat når insulin skilles ut?",
      options: ["Nivået stiger, fordi enzymet avfosforyleres og lager F2,6BP", "Nivået faller, fordi enzymet fosforyleres og bryter ned F2,6BP", "Nivået er uendret, siden insulin virker på helt andre enzymer", "Nivået stiger, fordi insulin selv omdannes til F2,6BP i cellen"],
      explanation: "Insulinsignalet avfosforylerer det bifunksjonelle enzymet PFK-2/FBPase-2, som da virker som PFK-2 og lager F2,6BP. Alternativet der nivået faller, beskriver riktig kjede — men for glukagon, som er insulinets motstykke.",
    },
    {
      question: "Hvilken vei går flukset i leveren når fruktose-2,6-bisfosfat er lavt?",
      options: ["Mot glukoneogenese, siden FBPase-1 slipper fri fra hemmingen", "Mot glykolyse, siden PFK-1 da blir kraftigere aktivert enn ellers", "Begge veier samtidig, siden ingen av enzymene lenger påvirkes", "Ingen av veiene, siden begge enzymene står helt uten regulering"],
      explanation: "Lavt F2,6BP betyr at PFK-1 mister aktivatoren sin og FBPase-1 slipper fri fra hemmingen, så nydannelsen av glukose går raskere. Alternativet om glykolyse snur sammenhengen: det er høyt F2,6BP som aktiverer PFK-1, ikke lavt.",
    },
    {
      question: "Hva gir pentosefosfatshunten?",
      options: ["NADPH og ribose-5-fosfat, men ikke noe ATP", "ATP og NADH, på samme måte som glykolysen", "ATP og ribose-5-fosfat, men ikke noe NADPH", "Bare laktat, som føres videre til leveren"],
      explanation: "Shunten er en forsyningsvei som leverer reduksjonskraft til biosyntese og sukkerdelen til nukleotider, ikke en energivei. Alternativet med ATP og NADH beskriver glykolysen, og forvekslingen kommer lett fordi shunten starter fra et glykolysemellomprodukt.",
    },
    {
      question: "Hva er forskjellen på NADH og NADPH?",
      options: ["NADH gir ATP i elektrontransportkjeden, NADPH gir kraft til biosyntese", "NADH gir kraft til biosyntese, NADPH gir ATP i elektrontransportkjeden", "De er samme molekyl, og navnene brukes helt om hverandre i faget", "NADH finnes bare i mitokondriet, NADPH finnes bare i cellekjernen"],
      explanation: "Cellen holder de to atskilt med vilje, slik at energiproduksjon og biosyntese kan gå uavhengig av hverandre. Alternativet som bytter om rollene, er den vanligste feilen — ser du NADPH i en oppgavetekst, er svaret aldri energiproduksjon.",
    },
    {
      question: "Hva koster glukoneogenesen per molekyl glukose?",
      options: ["6 høyenergifosfat, altså 4 ATP og 2 GTP, pluss 2 NADH", "2 høyenergifosfat, altså nøyaktig det glykolysen ga tilbake", "0 høyenergifosfat, siden veien er glykolysen kjørt baklengs", "12 høyenergifosfat, altså det dobbelte av glykolysens brutto"],
      explanation: "Tre av glykolysens trinn er praktisk talt enveiskjørte og må omgås av egne enzymer, og omveien koster mer enn glykolysen ga. Alternativet om null kostnad hviler på at veien er en ren reversering, og det er nettopp det den ikke er.",
    },
    {
      question: "Hvilket trinn i glykolysen er hastighetsbestemmende og hovedpunkt for regulering?",
      options: ["PFK-1-trinnet: fruktose-6-fosfat til fruktose-1,6-bisfosfat", "Heksokinasetrinnet: glukose til glukose-6-fosfat i starten", "Spaltingen av fruktose-1,6-bisfosfat i to tre-karbonbiter", "Laktattrinnet: pyruvat til laktat helt til slutt i cytosol"],
      explanation: "PFK-1-trinnet er praktisk talt enveiskjørt, og derfor kan cellen bestemme flukset her uten at reaksjonen sklir tilbake — det er også her F2,6BP griper inn. Heksokinasetrinnet fosforylerer også med ATP, men det er ikke der retningen på fluksen avgjøres.",
    },
  ],
  'med1100-6-2': [
    {
      question: "Hva dannes per runde i beta-oksidasjonen?",
      options: ["1 acetyl-CoA, 1 FADH₂ og 1 NADH", "2 acetyl-CoA, 1 FADH₂ og 1 NADH", "1 acetyl-CoA, 2 FADH₂ og 2 NADH", "1 acetyl-CoA, 1 FADH₂ og 2 ATP"],
      explanation: "Hver runde kutter av to karbon og gir én av hver av de tre. Alternativet med 2 acetyl-CoA beskriver bare den aller siste runden, der et fire-karbonmolekyl spaltes i to på én gang — og det er nettopp derfor antall acetyl-CoA er én mer enn antall runder.",
    },
    {
      question: "Hvor mange runder gjennomgår palmitat, en mettet fettsyre med 16 karbon?",
      options: ["7 runder", "8 runder", "9 runder", "16 runder"],
      explanation: "Antall runder er karbontallet delt på to, minus én — altså 16/2 − 1 = 7. Alternativet med 8 er resultatet av å glemme minus én, og det er den vanligste tellefeilen i sjangeren.",
    },
    {
      question: "Hvor mange acetyl-CoA gir fullstendig beta-oksidasjon av palmitat med 16 karbon?",
      options: ["8 acetyl-CoA", "7 acetyl-CoA", "9 acetyl-CoA", "16 acetyl-CoA"],
      explanation: "Karbontallet delt på to gir 8, og kontrollregningen 2 · 8 = 16 karbon stemmer med utgangspunktet. Alternativet 7 setter acetyl-CoA lik antall runder, og overser at siste runde gir to acetyl-CoA på én gang.",
    },
    {
      question: "Hva koster aktiveringen av en fettsyre, og hvor mange ganger påløper kostnaden?",
      options: ["Tilsvarende 2 ATP, én gang per fettsyre", "Tilsvarende 1 ATP, én gang per fettsyre", "Tilsvarende 2 ATP, én gang per runde", "Tilsvarende 1 ATP, én gang per runde"],
      explanation: "ATP spaltes helt til AMP, altså to høyenergibindinger på én gang, og fettsyren aktiveres bare før første runde. Alternativet som ganger med antall runder, gir et helt annet svar for lange fettsyrer, og er derfor en dyr feil.",
    },
    {
      question: "Hvor i cellen foregår beta-oksidasjonen?",
      options: ["I mitokondriematriks, inne i mitokondriet", "I cytosol, som glykolysen", "I det glatte endoplasmatiske retikulum", "På ribosomene i det ru endoplasmatiske retikulum"],
      explanation: "Fettsyrene må derfor fraktes inn gjennom mitokondriemembranen, og det er nettopp den transporten CPT-1 står for. Glykolysen går i cytosol — den forskjellen er grunnen til at celler uten mitokondrier kan gjøre det ene, men ikke det andre.",
    },
    {
      question: "Hva gjør malonyl-CoA med CPT-1?",
      options: ["Hemmer, slik at nytt fett ikke brytes ned med en gang", "Aktiverer, slik at nytt fett brytes ned med en gang", "Hemmer, slik at fettsyresyntesen stopper helt opp", "Aktiverer, slik at glykogenlageret bygges opp raskere"],
      explanation: "Malonyl-CoA er byggesteinen i fettsyresyntesen, så nivået er høyt nettopp når cellen bygger fett — og da må porten inn i mitokondriet stenges. Uten den hemmingen ville cellen bygge og bryte ned fettsyrer samtidig, med tap av energi og ingen netto endring.",
    },
    {
      question: "Hvorfor kan leverglykogen bidra til blodsukkeret mens muskelglykogen ikke kan?",
      options: ["Bare leveren har glukose-6-fosfatase og får glukosen ut", "Bare leveren har glykogenfosforylase og får brutt ned lageret", "Muskelglykogen er kjemisk forskjellig fra leverglykogen", "Muskelen har for små glykogenlagre til å kunne bidra noe"],
      explanation: "Glykogen brytes ned til glukose-6-fosfat, som er ladet og ikke kommer gjennom membranen; enzymet som fjerner fosfatgruppen, finnes bare i lever og nyrebark. Alternativet om glykogenfosforylase er galt — muskelen har det enzymet og bryter ned glykogenet sitt, men bruker glukosen selv.",
    },
    {
      question: "Hvordan bidrar arbeidende muskel likevel indirekte til blodsukkeret?",
      options: ["Laktat fra muskelen brukes av leveren i glukoneogenesen", "Muskelen skiller ut glukose-6-fosfat som leveren tar opp", "Muskelen sender glykogen med blodet direkte over til leveren", "Muskelen skiller ut insulin som får leveren til å lage glukose"],
      explanation: "Laktat er et fullverdig substrat som leveren kan bygge tilbake til glukose, så omveien går via blodet og leveren. Alternativet om glukose-6-fosfat faller på ladningsargumentet: et fosforylert molekyl kommer ikke ut gjennom cellemembranen i det hele tatt.",
    },
    {
      question: "Hva skjer med glykogensyntase og glykogenfosforylase når enzymene fosforyleres?",
      options: ["Syntase blir inaktiv, fosforylase blir aktiv", "Syntase blir aktiv, fosforylase blir inaktiv", "Begge blir aktive, slik at omsetningen øker kraftig", "Begge blir inaktive, slik at glykogenet står urørt"],
      explanation: "Samme fosforylering styrer de to enzymene i motsatt retning, og derfor kan bygging og nedbrytning aldri gå samtidig. Alternativet der begge blir aktive, ville gitt et tomgangsløp der cellen bygger og river det samme molekylet med tap av energi.",
    },
    {
      question: "Hvilket hormon skilles ut ved høyt blodsukker, og hvilken retning gir det?",
      options: ["Insulin, og retningen er anabol: bygge og lagre", "Glukagon, og retningen er anabol: bygge og lagre", "Insulin, og retningen er katabol: bryte ned og frigi", "Glukagon, og retningen er katabol: bryte ned og frigi"],
      explanation: "Insulin er kroppens anabole signal og slår på glykogensyntese, fettsyntese og glukoseopptak samtidig. Alternativet med glukagon og anabol retning kombinerer to riktige begreper feil — glukagon hører til lavt blodsukker og katabol retning.",
    },
    {
      question: "Hva gjør insulin med GLUT4?",
      options: ["Flytter transportøren opp i cellemembranen i muskel og fettvev", "Bryter ned transportøren, slik at glukoseopptaket går ned", "Flytter transportøren fra membranen og inn i cellen igjen", "Bygger om transportøren slik at den frakter fettsyrer i stedet"],
      explanation: "Uten insulin ligger GLUT4 lagret i blærer inne i cellen, og insulinsignalet får blærene til å smelte sammen med membranen. Alternativet der transportøren flyttes inn igjen, beskriver det som skjer når insulinnivået faller, ikke når det stiger.",
    },
    {
      question: "Hvilket lager tømmes først under faste, og hvorfor?",
      options: ["Leverglykogen, fordi det er raskest og billigst å bruke", "Fettlageret, fordi det er størst og varer aller lengst", "Muskelglykogen, fordi det ligger nærmest arbeidende vev", "Aminosyrer fra muskel, fordi de er lettest å omdanne"],
      explanation: "Glukoseenheten kommer ut allerede fosforylert, så cellen slipper å bruke ATP på det, mens glukoneogenesen koster seks høyenergifosfat per glukose. Fettlageret er riktignok størst, men det kan ikke omdannes til glukose og tas i bruk like raskt.",
    },
    {
      question: "Hva er ketonlegemer, og hvor lages de?",
      options: ["Vannløselige molekyler laget fra acetyl-CoA i leveren", "Vannløselige molekyler laget fra acetyl-CoA i muskelen", "Fettsyrer bundet til protein og fraktet ut fra fettvevet", "Glukosemolekyler laget fra aminosyrer i nyrebarken"],
      explanation: "Ved langvarig faste hoper acetyl-CoA seg opp i leveren, som pakker overskuddet som ketonlegemer og sender dem ut i blodet. Alternativet om fettsyrer bundet til protein beskriver frie fettsyrer, som er noe helt annet — de er nettopp ikke vannløselige.",
    },
    {
      question: "Hvorfor er glykogen forgrenet?",
      options: ["Flere frie ender gjør at lageret kan tømmes raskere", "Forgreningen gjør at molekylet lagrer mer energi per gram", "Forgreningen hindrer at enzymene får tak i molekylet i det hele tatt", "Uten forgrening ville glykogen ikke kunne bygges av glukose"],
      explanation: "Nedbrytningen starter i endene, så mange grener betyr at mange enzymer kan arbeide samtidig; i tillegg tar den kompakte kulen mindre plass osmotisk. Påstanden om mer energi per gram er gal — energien ligger i glukoseenhetene, ikke i hvordan de er koblet sammen.",
    },
    {
      question: "Hvor mange FADH₂ og NADH gir stearat, en mettet fettsyre med 18 karbon?",
      options: ["8 FADH₂ og 8 NADH", "9 FADH₂ og 9 NADH", "7 FADH₂ og 7 NADH", "9 FADH₂ og 8 NADH"],
      explanation: "Antall runder er 18/2 − 1 = 8, og det dannes én av hver per runde. Alternativet med 9 av hver er antall acetyl-CoA, ikke antall runder — og det er nettopp den forvekslingen tabellen i kapitlet er laget for å hindre.",
    },
    {
      question: "Hvilket prinsipp deler F2,6BP, glykogenenzymene og malonyl-CoA?",
      options: ["Ett signal virker motsatt på to motsatte prosesser", "Ett signal virker likt på to prosesser som går samme vei", "To ulike signaler kreves for å styre hver enkelt prosess", "Signalet forbrukes i reaksjonen det er med på å styre"],
      explanation: "Ved å koble en byggende og en nedbrytende vei til samme signal med motsatt fortegn, gjøres tomgangsløp umulig. Alternativet om at signalet forbrukes, er galt — regulatoriske molekyler som F2,6BP er nettopp signalmolekyler, ikke mellomprodukter.",
    },
  ],
  'med1100-6-3': [
    {
      question: "Hva er Km?",
      options: ["Substratkonsentrasjonen som gir halvparten av Vmax", "Den høyeste hastigheten enzymet kan nå ved metning", "Antall substratmolekyler ett enzymmolekyl omsetter per sekund", "Hastigheten enzymet har når substratet akkurat er brukt opp"],
      explanation: "Km er en substratkonsentrasjon og har derfor konsentrasjonsenhet, ikke hastighetsenhet. Alternativet om høyeste hastighet beskriver Vmax, og forvekslingen mellom de to er nettopp det som gjør at mange oppgir Km med feil enhet.",
    },
    {
      question: "Hvilken enhet har Km?",
      options: ["Konsentrasjonsenhet, altså mM eller M", "Hastighetsenhet, altså mikromol per liter per minutt", "Invers tidsenhet, altså per sekund eller per minutt", "Enhetsløs, siden Km er et forholdstall mellom to størrelser"],
      explanation: "Km er definert som den substratkonsentrasjonen som gir halv Vmax, og har derfor samme enhet som substratkonsentrasjonen. Alternativet med invers tidsenhet beskriver omsetningstallet kcat, som er en helt annen størrelse.",
    },
    {
      question: "Hva betyr lav Km?",
      options: ["Høy affinitet: enzymet binder substratet godt", "Lav affinitet: enzymet binder substratet dårlig", "Høy Vmax: enzymet omsetter substrat svært raskt", "Lav Vmax: enzymet omsetter substrat svært langsomt"],
      explanation: "Trengs det lite substrat for å komme opp i halv fart, binder enzymet substratet godt — sammenhengen er altså omvendt. Alternativene om Vmax blander to uavhengige størrelser: Km sier noe om binding, Vmax om kapasitet.",
    },
    {
      question: "Hva er y-skjæringen i et Lineweaver-Burk-plott?",
      options: ["Verdien 1 delt på Vmax", "Minus 1 delt på Km", "Km delt på Vmax", "Vmax delt på Km"],
      explanation: "Ved uendelig høy substratkonsentrasjon er 1/[S] lik null, og hastigheten er da Vmax. Alternativet med minus 1 delt på Km er x-skjæringen, og forvekslingen mellom de to skjæringene er en vanlig kilde til feil Km-verdi.",
    },
    {
      question: "Hvordan finner du Km fra et Lineweaver-Burk-plott, uten å bruke x-skjæringen?",
      options: ["Gang stigningstallet med Vmax", "Del stigningstallet på Vmax", "Ta den omvendte verdien av stigningstallet", "Ta den omvendte verdien av y-skjæringen"],
      explanation: "Stigningstallet er Km delt på Vmax, så Km er stigningstallet ganget med Vmax. Å ta den omvendte verdien av stigningstallet er en vanlig feil, og den gir et svar som er galt med kvadratet av Vmax.",
    },
    {
      question: "Hva skjer med Km og Vmax ved kompetitiv hemming?",
      options: ["Km øker, mens Vmax er uendret", "Vmax synker, Km er uendret", "Både Km og Vmax øker samtidig", "Både Km og Vmax synker samtidig"],
      explanation: "Hemmeren konkurrerer om det aktive setet, så det må mer substrat til for halv fart, men et stort nok substratoverskudd fortrenger hemmeren helt og taket er derfor uendret. Alternativet der Vmax synker, beskriver ikke-kompetitiv hemming.",
    },
    {
      question: "Hva skjer med Km og Vmax ved ikke-kompetitiv hemming?",
      options: ["Vmax synker, Km er uendret", "Km øker, Vmax er uendret", "Km synker, Vmax er uendret", "Både Km og Vmax synker samtidig"],
      explanation: "Hemmeren binder et annet sted enn det aktive setet og setter en andel av enzymmolekylene ut av spill uansett substratmengde, mens de som virker, binder like godt som før. Alternativet der Km øker og Vmax står stille, er den kompetitive hemmingen, og å bytte dem om er den vanligste feilen i sjangeren.",
    },
    {
      question: "Hvilken hemmertype kan overvinnes ved å øke substratkonsentrasjonen?",
      options: ["Kompetitiv, fordi det er en konkurranse om samme plass", "Ikke-kompetitiv, fordi hemmeren fortrenges av substratet", "Begge, siden nok substrat alltid fortrenger enhver hemmer", "Ingen av dem, siden hemming aldri lar seg oppheve helt"],
      explanation: "Kompetitiv hemming er en konkurranse om det aktive setet, og et stort nok substratoverskudd vinner den — derfor er Vmax uendret. En ikke-kompetitiv hemmer sitter et annet sted, så mer substrat endrer ikke forholdet mellom hemmer og enzym.",
    },
    {
      question: "En hemmer endrer BÅDE Km og Vmax. Hva er riktig svar?",
      options: ["Hemmingen kan ikke klassifiseres i denne modellen", "Hemmingen er kompetitiv, siden Km har endret seg", "Hemmingen er ikke-kompetitiv, siden Vmax har endret seg", "Målingen må være feil, siden bare én verdi kan endre seg"],
      explanation: "De to grunntypene er definert ved at nøyaktig én av parametrene endres, så data der begge endres, passer i ingen av dem. Å velge den typen som passer best, er å påstå mer enn tallene gir grunnlag for — og målingen er ikke dermed feil, den beskriver bare en mer sammensatt hemming.",
    },
    {
      question: "Hvilken kurveform gir et allosterisk enzym?",
      options: ["Sigmoid, altså S-formet", "Hyperbolsk, som andre enzymer", "Rett linje gjennom origo", "Fallende kurve mot en nedre grense"],
      explanation: "Bindingssetene påvirker hverandre, slik at de neste substratmolekylene binder seg lettere enn det første, og det gir en bratt midtdel. Michaelis-Menten-likningen gjelder derfor ikke for disse enzymene, og Km i vanlig forstand er ikke definert.",
    },
    {
      question: "Hvorfor er en sigmoid kurve nyttig i et reguleringspunkt?",
      options: ["Liten endring i substratmengde gir stor endring i hastighet", "Kurven når Vmax ved langt lavere substratkonsentrasjon", "Enzymet blir helt uavhengig av hvor mye substrat som finnes", "Hastigheten holder seg konstant over hele konsentrasjonsområdet"],
      explanation: "Den bratte midtdelen gjør enzymet til en bryter som kan skrus av og på skarpt, og det er nettopp det man vil ha i et reguleringspunkt som PFK-1. Påstanden om konstant hastighet beskriver ingen enzymkurve i det hele tatt.",
    },
    {
      question: "Hvordan regner du ut kcat?",
      options: ["Vmax delt på total enzymkonsentrasjon", "Total enzymkonsentrasjon delt på Vmax", "Vmax delt på Km ved den aktuelle konsentrasjonen", "Km delt på total enzymkonsentrasjon i prøven"],
      explanation: "Ved å dele bort enzymmengden får du hvor mange reaksjoner ett enzymmolekyl utfører per tid, og enheten blir derfor en invers tidsenhet. Uten oppgitt enzymkonsentrasjon kan kcat ikke regnes ut, og da skal du si det i stedet for å gjette.",
    },
    {
      question: "Hva skjer med Km, Vmax og kcat når enzymkonsentrasjonen dobles?",
      options: ["Vmax dobles, mens Km og kcat er uendret", "Alle tre dobles, siden de henger sammen", "Km dobles, mens Vmax og kcat er uendret", "Vmax og kcat dobles, mens Km er uendret"],
      explanation: "Dobbelt så mange enzymmolekyler omsetter dobbelt så mye per tid ved metning, mens både Km og kcat er egenskaper ved selve enzymmolekylet. I brøken Vmax delt på enzymkonsentrasjon dobles både teller og nevner, så kcat står stille.",
    },
    {
      question: "Hva måler katalytisk effektivitet, kcat delt på Km?",
      options: ["Hvor godt enzymet arbeider når substratet er knapt", "Hvor godt enzymet arbeider når det er fullt mettet", "Hvor mye enzym som må til for å omsette alt substratet", "Hvor lang tid enzymet bruker på å nå likevekt i prøven"],
      explanation: "Ved lave substratkonsentrasjoner teller både høy kcat og lav Km, og forholdstallet fanger begge deler. Ved full metning er det kcat alene som avgjør — og det er nettopp derfor et raskt enzym med høy Km kan være mindre effektivt enn et langsommere med lav Km.",
    },
    {
      question: "Ved hvilken substratkonsentrasjon når et enzym 90 prosent av Vmax?",
      options: ["Ved ni ganger Km", "Ved to ganger Km", "Ved nitti prosent av Km", "Ved ti ganger Vmax"],
      explanation: "Setter man 0,90 inn i Michaelis-Menten-likningen og løser for substratkonsentrasjonen, kommer man ut på ni ganger Km. Alternativet med ti ganger Vmax blander enhetene: Vmax er en hastighet, ikke en konsentrasjon.",
    },
    {
      question: "Hvorfor kan du ikke lese av Vmax som den høyeste målte hastigheten?",
      options: ["Kurven nærmer seg taket uten noen gang å nå det", "Den høyeste målingen er alltid den mest unøyaktige målingen", "Vmax måles i en annen enhet enn de målte hastighetene", "Vmax kan bare bestemmes når enzymkonsentrasjonen er kjent"],
      explanation: "Michaelis-Menten-kurven flater ut asymptotisk, så selv ved høye konsentrasjoner ligger målingen under taket — i eksempelet i kapitlet var høyeste måling 88,9 mens Vmax var 100. Påstanden om enhet er gal: Vmax har nøyaktig samme enhet som de målte hastighetene.",
    },
  ],
  'med1100-6-4': [
    {
      question: "Hvor mange osmotisk aktive partikler gir NaCl?",
      options: ["2 partikler: Na⁺ og Cl⁻", "1 partikkel, siden molekylet holder seg samlet", "3 partikler: Na⁺, Cl⁻ og ett vannmolekyl", "Det varierer med hvor konsentrert løsningen er"],
      explanation: "Saltet løses fullstendig opp i de to ionene sine, og hvert ion teller like mye osmotisk. Alternativet med én partikkel gjelder stoffer som glukose og urea, som ikke spaltes i ioner — og å bruke den regelen på et salt halverer svaret.",
    },
    {
      question: "Hvor mange osmotisk aktive partikler gir glukose?",
      options: ["1 partikkel, siden molekylet ikke spaltes i ioner", "2 partikler, på samme måte som natriumklorid gjør", "6 partikler, ett for hvert karbonatom i molekylet", "Det avhenger av hvilken temperatur løsningen har"],
      explanation: "Glukose er ikke et salt og blir værende som hele molekyler i løsningen. Alternativet med 2 er nettopp fellen: mange bruker faktoren fra NaCl på alt, og får da dobbelt så høy osmolaritet som riktig.",
    },
    {
      question: "Hvor mange osmotisk aktive partikler gir CaCl₂?",
      options: ["3 partikler: ett Ca²⁺ og to Cl⁻", "2 partikler: ett Ca²⁺ og ett Cl⁻", "2 partikler, siden kalsium har ladning to pluss", "1 partikkel, siden formelenheten holder seg samlet"],
      explanation: "Senkeskriften forteller at det er to kloridioner, så formelenheten faller fra hverandre i tre partikler til sammen. Alternativet som teller ladningen i stedet for antall ioner, er en vanlig feil — det er partikkelantallet som teller osmotisk, ikke ladningen.",
    },
    {
      question: "En løsning inneholder 0,10 mol/L NaCl. Hva er osmolariteten?",
      options: ["0,20 osmol/L", "0,10 osmol/L", "0,05 osmol/L", "0,30 osmol/L"],
      explanation: "Molariteten ganges med partikkeltallet 2, siden saltet gir Na⁺ og Cl⁻. Alternativet 0,10 setter osmolariteten lik molariteten, og det gjelder bare for stoffer som ikke spaltes i ioner.",
    },
    {
      question: "Hva er formelen for dose når dosen er oppgitt per kilo kroppsvekt?",
      options: ["Dose per kilo ganget med kroppsvekt i kilo", "Dose per kilo delt på kroppsvekt i kilo", "Kroppsvekt i kilo delt på dose per kilo", "Dose per kilo ganget med volumet av løsningen"],
      explanation: "Enhetskontrollen viser det: kilo forkortes bort, og milligram står igjen. Setter du opp brøken motsatt vei, kommer det ut en enhet som ikke gir mening, og det oppdager du med en gang hvis du fører enhetene med.",
    },
    {
      question: "Hvordan finner du volumet når dosen i mg og konsentrasjonen i mg/mL er kjent?",
      options: ["Del dosen på konsentrasjonen", "Gang dosen med konsentrasjonen", "Del konsentrasjonen på dosen", "Gang dosen med kroppsvekten i kilo"],
      explanation: "Milligram forkortes bort og milliliter står igjen, akkurat som forventet. Ganger du i stedet, kommer det ut mg i andre potens per mL, som ikke er en volumenhet — enhetene avslører feilen umiddelbart.",
    },
    {
      question: "Hvordan går du fra molaritet til masse per volum?",
      options: ["Gang med molar masse i gram per mol", "Del på molar masse i gram per mol", "Gang med volumet av løsningen i liter", "Del på antall osmotisk aktive partikler"],
      explanation: "Mol per liter ganget med gram per mol gir gram per liter — mol forkortes bort. Deler du i stedet, får du et svar som er feil med kvadratet av den molare massen, og størrelsesordenen avslører det med en gang.",
    },
    {
      question: "Hvor mange mg/mL er 1 g/L?",
      options: ["1 mg/mL, siden begge ledd ganges med tusen", "1000 mg/mL, siden ett gram er tusen milligram", "0,001 mg/mL, siden én liter er tusen milliliter", "Det avhenger av hvilket stoff løsningen inneholder"],
      explanation: "Teller og nevner endres med samme faktor, så tallverdien står stille — denne identiteten sparer et konverteringstrinn i nesten hver oppgave. Alternativene med tusen eller en tusendel tar hensyn til bare det ene leddet av brøken.",
    },
    {
      question: "Hva sier fortynningslikningen c₁V₁ = c₂V₂ egentlig?",
      options: ["At massen er den samme før og etter fortynningen", "At konsentrasjonen er den samme før og etter fortynningen", "At volumet er det samme før og etter fortynningen", "At antall partikler dobles når volumet dobles"],
      explanation: "Begge sider er den samme mengden stoff, bare uttrykt gjennom to ulike par av konsentrasjon og volum. Nettopp derfor gjelder likningen bare når ingenting av stoffet tilsettes eller fjernes — blandes to løsninger som begge inneholder stoffet, må massene legges sammen i stedet.",
    },
    {
      question: "Hvorfor skal enhetskonverteringen skrives som eget ledd i blokk 2?",
      options: ["Fordi konverteringen er poenggivende i seg selv", "Fordi sensor ellers regner besvarelsen som ubesvart", "Fordi svaret ellers blir trukket til minuspoeng", "Fordi konverteringen er den eneste delen som rettes"],
      explanation: "Sensorveiledningene som ligger i blokk 2-settene, markerer enhetskonvertering som et eget moment i moment-for-moment-rettingen. Minuspoeng gjelder bare rutenett i blokk 2, aldri fritekst — så et manglende ledd koster et poeng, det trekker ikke besvarelsen under null.",
    },
    {
      question: "En løsning inneholder 0,050 mol/L NaCl og 0,030 mol/L glukose. Hva er osmolariteten?",
      options: ["0,130 osmol/L", "0,080 osmol/L", "0,160 osmol/L", "0,110 osmol/L"],
      explanation: "NaCl bidrar med 0,050 ganget med 2, altså 0,100, og glukose med 0,030 ganget med 1 — til sammen 0,130. Alternativet 0,080 legger bare sammen molaritetene og glemmer partikkeltallet for saltet.",
    },
    {
      question: "Hvilken størrelsesorden ligger osmolariteten i kroppens egne væsker rundt?",
      options: ["Rundt 0,3 osmol/L", "Rundt 0,03 osmol/L", "Rundt 3 osmol/L", "Rundt 30 osmol/L"],
      explanation: "Verdien er nyttig som kontroll av størrelsesorden: får du et svar som ligger en faktor ti unna, ligger det sannsynligvis en enhetsfeil i konverteringene. De øvrige alternativene er nettopp de verdiene en glemt eller doblet tusenfaktor ville gitt.",
    },
  ],
  'med1100-7-1': [
    {
      question: "Hva er et intron?",
      options: ["En del av genet som klippes bort før avskriften forlater kjernen", "En del av genet som blir med i avskriften og oversettes til protein", "En del av avskriften som ligger foran startkodonet og ikke oversettes", "En del av avskriften som beskytter enden mot nedbryting i cytosol"],
      explanation: "Introner er de innskutte delene som fjernes ved spleising, slik at bare eksonene blir med i den modne avskriften. Alternativet om delen som blir med og oversettes beskriver et ekson, og det er nettopp den forvekslingen oppgavene tester.",
    },
    {
      question: "Et gen har 13 eksoner på rad og begynner og slutter med et ekson. Hvor mange introner har det?",
      options: ["12", "13", "14", "26"],
      explanation: "Intronene ligger i mellomrommene mellom eksonene, og tretten ledd på rad har tolv mellomrom. Svaret 13 kommer av å telle like mange introner som eksoner, som ville krevd at genet sluttet med et intron.",
    },
    {
      question: "Et protein har 400 aminosyrer. Hvor langt er det kodende området, stoppkodonet medregnet?",
      options: ["1 203 nt", "1 200 nt", "1 197 nt", "1 206 nt"],
      explanation: "Regelen er tre nukleotider per aminosyre pluss tre for stoppkodonet: 3 · 400 + 3 = 1 203 nt. Svaret 1 200 nt er samme regnestykke uten de tre for stoppkodonet, og det er den vanligste feilen i sjangeren.",
    },
    {
      question: "Et kodende område er 2 100 nukleotider langt, stoppkodonet medregnet. Hvor mange aminosyrer får proteinet?",
      options: ["699", "700", "701", "697"],
      explanation: "Stoppkodonet trekkes fra først: (2 100 − 3)/3 = 699 aminosyrer. Svaret 700 kommer av å dele på tre uten å trekke fra stoppkodonet, som ikke gir noen aminosyre.",
    },
    {
      question: "Startkodonets første base ligger i posisjon 212. Hvor langt er det 5′-utranslaterte området?",
      options: ["211 nt", "212 nt", "213 nt", "209 nt"],
      explanation: "Startkodonet ligger i posisjon 212, så det utranslaterte forstykket slutter i posisjon 211 og er 211 nukleotider langt. Svaret 212 nt teller startkodonets første base med i forstykket, som er en av-for-én-feil.",
    },
    {
      question: "Et modent mRNA er 2 000 nt, forstykket er 150 nt og det kodende området er 1 500 nt. Hvor langt er 3′-området?",
      options: ["350 nt", "500 nt", "1 850 nt", "347 nt"],
      explanation: "Det 3′-utranslaterte området er restleddet: 2 000 − 150 − 1 500 = 350 nt. Svaret 500 nt trekker bare fra det kodende området og glemmer forstykket.",
    },
    {
      question: "Hva er funksjonen til et stoppkodon?",
      options: ["Det signaliserer at kjeden er ferdig, og gir selv ingen aminosyre", "Det gir den siste aminosyren i kjeden før ribosomet slipper taket", "Det markerer hvor det 3′-utranslaterte området begynner å oversettes", "Det binder ribosomet til avskriften og fastsetter hvilken ramme som leses"],
      explanation: "Stoppkodonet er et rent signal om avslutning og bidrar ikke med noen aminosyre — derfor trekkes de tre nukleotidene fra før du deler på tre. Alternativet om at det gir den siste aminosyren er nettopp feilen som gir én aminosyre for mye.",
    },
    {
      question: "Hvilken påstand om eksoner og kodende sekvens er riktig?",
      options: ["Alt kodende ligger i eksoner, men eksonene inneholder også utranslatert stoff", "Alt i eksoner er kodende, siden intronene allerede er fjernet ved spleising", "Kodende sekvens ligger i introner, mens eksonene bare styrer avlesningen", "Eksoner og kodende sekvens er to navn på nøyaktig det samme stykket"],
      explanation: "De ytterste eksonene inneholder de utranslaterte områdene i begge ender, så eksonene er større enn det kodende området. Påstanden om at alt i eksoner er kodende overser nettopp disse to endestykkene.",
    },
    {
      question: "Hva er det PCR faktisk gjør?",
      options: ["Lager svært mange kopier av et avgrenset DNA-stykke", "Leser rekkefølgen av byggesteinene i et DNA-stykke", "Fjerner intronene fra en fersk avskrift av et gen", "Sorterer DNA-fragmenter etter lengde i et elektrisk felt"],
      explanation: "PCR kopierer; den leser ingen rekkefølge. Alternativet om å lese rekkefølgen beskriver sekvensering, og sammenblandingen av kopiering og avlesning er en fast felle i denne sjangeren.",
    },
    {
      question: "Hva er det som bestemmer nøyaktig hvilket DNA-stykke en PCR kopierer?",
      options: ["De to primerne, som binder seg i hver sin ende av stykket", "Polymerasen, som gjenkjenner starten på det aktuelle genet", "Temperaturen i forlengelsestrinnet, som velger ut riktig mal", "Mengden frie byggesteiner som er tilsatt i reaksjonsrøret"],
      explanation: "Primerne avgrenser stykket i begge ender, og valget av primere er derfor selve presisjonen i metoden. Polymerasen har ingen gjenkjenning av gener — den bygger videre der en primer allerede sitter.",
    },
    {
      question: "En PCR kjøres i 30 sykluser med full dobling hver runde. Hvor mange ganger er mengden økt?",
      options: ["2³⁰ ganger, altså over en milliard", "30² ganger, altså rundt ni hundre", "2 · 30 ganger, altså seksti", "30 ganger, én per syklus"],
      explanation: "Hver syklus dobler mengden fordi begge tråder brukes som mal, så faktoren er to opphøyd i antall sykluser. Alternativet som ganger to med antall sykluser, behandler doblingen som noe som legges til hver runde, ikke som noe som ganges.",
    },
    {
      question: "Hva er prinsippet i Sanger-sekvensering?",
      options: ["Kjedeavsluttende byggesteiner stopper kjedene på ulike steder", "Kjedene kuttes av enzymer som gjenkjenner bestemte sekvenser", "Kjedene varmes opp til trådene skiller lag og kan telles enkeltvis", "Kjedene merkes i begge ender og måles i et elektronmikroskop"],
      explanation: "En liten andel byggesteiner kan ikke bygges videre på, så kjedene stopper på tilfeldige steder og gir fragmenter av alle lengder, som sorteres og leses. Alternativet om kutting med enzymer beskriver en helt annen teknikk og gir ingen avlesning av rekkefølgen.",
    },
    {
      question: "Hva er hovedforskjellen mellom Sanger-sekvensering og massiv parallell sekvensering?",
      options: ["Skalaen: den ene leser ett stykke, den andre svært mange samtidig", "Nøyaktigheten: bare den ene kan lese rekkefølgen base for base", "Materialet: den ene leser RNA direkte, den andre må ha DNA først", "Formålet: den ene lager kopier, den andre leser av rekkefølgen"],
      explanation: "Begge metodene leser rekkefølge; forskjellen er hvor mange fragmenter som leses i én runde. Alternativet om at den ene lager kopier blander sekvensering med PCR.",
    },
    {
      question: "Hvorfor er tap av ett enkelt nukleotid i det kodende området som regel verre enn bytte av én base?",
      options: ["Inndelingen i kodoner forskyves, så alt etter bruddstedet leses feil", "Et tapt nukleotid ødelegger startkodonet og hindrer all oversettelse", "Et tapt nukleotid gjør avskriften for kort til å forlate cellekjernen", "Et byttet nukleotid rettes alltid opp av cellen før oversettelsen skjer"],
      explanation: "Ett nukleotid er ikke delelig med tre, så leserammen forskyves og alle kodoner etter bruddstedet blir feil, ofte med et for tidlig stoppsignal. Et basebytte holder rammen og endrer høyst én aminosyre.",
    },
  ],
  'med1100-7-2': [
    {
      question: "Hvilket funn i et slektstre utelukker med sikkerhet begge de X-bundne mønstrene?",
      options: ["At en affisert far har en affisert sønn", "At en affisert mor har en affisert sønn", "At to friske foreldre får en affisert datter", "At mønsteret hopper over en hel generasjon"],
      explanation: "Sønner får Y-kromosomet fra faren og X fra moren, så et gen på X kan aldri gå fra far til sønn. At to friske foreldre får et affisert barn utelukker derimot dominante mønstre, ikke X-binding.",
    },
    {
      question: "To friske foreldre får et affisert barn. Hva utelukker dette?",
      options: ["Dominante mønstre, med mindre det er en helt ny mutasjon", "Recessive mønstre, siden begge foreldrene ville vært affisert", "X-bundne mønstre, siden faren ville gitt allelet til datteren", "Alle mønstre unntatt mitokondriell arvegang fra morssiden"],
      explanation: "Ved et dominant mønster er ett allel nok, så minst én forelder måtte vært affisert. Ved et recessivt mønster er dette derimot nettopp det forventede: to friske bærere kan få et affisert barn.",
    },
    {
      question: "En kvinne er affisert, og faren hennes er frisk. Hvilket mønster er dermed utelukket?",
      options: ["X-bundet recessiv, siden hun får farens ene X-kromosom", "Autosomal recessiv, siden faren måtte vært bærer av allelet", "Autosomal dominant, siden hun har fått allelet fra moren", "X-bundet dominant, siden faren gir X-kromosomet til alle døtre"],
      explanation: "En affisert kvinne i et X-bundet recessivt mønster må ha sykdomsallelet på begge X-kromosomer, og det ene kommer alltid fra faren — som er frisk. Autosomal recessiv er derimot fullt forenlig, med to friske bærerforeldre.",
    },
    {
      question: "Hva er sannsynligheten for at et friskt søsken av et affisert barn er bærer, ved autosomal recessiv arvegang?",
      options: ["2/3", "1/2", "1/4", "3/4"],
      explanation: "De fire like sannsynlige utfallene fra to bærerforeldre er redusert til tre fordi vi vet personen er frisk, og to av de tre er bærere. Svaret 1/2 gjelder et ufødt barn, der ingen utfall ennå er strøket.",
    },
    {
      question: "En bærermor og en frisk far, X-bundet recessivt mønster: hva er sannsynligheten for at et barn blir affisert?",
      options: ["1/4", "1/2", "1/8", "3/4"],
      explanation: "Ett av de fire like sannsynlige utfallene i krysningsskjemaet er en affisert gutt. Svaret 1/2 gjelder bare hvis du allerede vet at barnet blir en gutt.",
    },
    {
      question: "Hva kjennetegner et autosomalt dominant mønster i et slektstre?",
      options: ["Affiserte i hver generasjon, og hvert affisert barn har en affisert forelder", "Affiserte bare i annenhver generasjon, og alltid klart flest menn blant dem", "Affiserte bare blant døtrene til en affisert far, aldri blant sønnene", "Affiserte barn av friske foreldre, med begge kjønn omtrent like ofte rammet"],
      explanation: "Ved et dominant mønster er ett allel nok, så egenskapen dukker opp i hver generasjon og kan spores til en affisert forelder. At affiserte barn har friske foreldre er derimot signaturen for et recessivt mønster.",
    },
    {
      question: "Hvorfor gjør slektskap mellom foreldrene et autosomalt recessivt mønster mer sannsynlig?",
      options: ["Fordi begge kan ha arvet det samme allelet fra en felles forfar", "Fordi slektskap øker antallet nye mutasjoner i kjønnscellene", "Fordi recessive alleler uttrykkes sterkere når foreldrene er i slekt", "Fordi barnet da får dobbelt så mange alleler fra hver av foreldrene"],
      explanation: "Slektskap øker sannsynligheten for at de to bærer nøyaktig det samme allelet, og det er akkurat det som kreves for et recessivt uttrykk. Slektskap påvirker ikke mutasjonsraten og ikke hvor sterkt et allel uttrykkes.",
    },
    {
      question: "Hva betyr det at en person er obligat bærer?",
      options: ["At slektstreet viser at personen må ha allelet, uansett testresultat", "At personen har fått påvist allelet ved en genetisk undersøkelse", "At personen har to sykdomsalleler, men ennå ikke viser noen av kjennetegnene", "At personen gir allelet videre til samtlige av barna sine"],
      explanation: "Betegnelsen kommer av slutninger fra slektstreet, ikke fra en undersøkelse — foreldrene til et affisert barn i et recessivt mønster må ha ett allel hver. En obligat bærer er heterozygot og gir allelet videre til halvparten av barna.",
    },
    {
      question: "To bærere har fått ett affisert barn. Hva er sannsynligheten for at neste barn blir affisert?",
      options: ["1/4, uendret fra forrige gang", "1/8, siden ett utfall er brukt opp", "1/2, siden begge er bærere", "1/16, siden to barn inngår"],
      explanation: "Hvert barn er et uavhengig trekk, og allelene fordeles på nytt i hver meiose. Alternativet om at ett utfall er brukt opp behandler barna som trekk uten tilbakelegging, noe de ikke er.",
    },
    {
      question: "Hva sier redusert penetrans om et dominant mønster?",
      options: ["Ikke alle med allelet viser egenskapen, så mønsteret kan se ut til å hoppe", "Alle med allelet viser egenskapen, men i svært ulik grad fra person til person", "Sannsynligheten for å arve allelet synker fra en halv til en firedel", "Egenskapen viser seg først i voksen alder hos alle som har allelet"],
      explanation: "Penetrans er andelen med genotypen som faktisk viser egenskapen, og lav penetrans forklarer at en frisk person kan bære allelet og gi det videre. Alternativet om ulik grad beskriver variabel uttrykksgrad, som er et gradsspørsmål og ikke et ja/nei-spørsmål.",
    },
    {
      question: "Hva er den vanligste poengtapende feilen i genetikkoppgaven i blokk 2?",
      options: ["Å navngi arvegangen uten å begrunne den med observasjoner fra treet", "Å begrunne arvegangen så bredt og grundig at hele svaret blir altfor langt", "Å tegne krysningsskjema i stedet for å regne direkte med brøker", "Å oppgi sannsynligheten som brøk i stedet for som prosent"],
      explanation: "Oppgaven ber alltid om at du begrunner, og et navn uten begrunnelse høster omtrent halvparten av poengene på deloppgaven. Å tegne krysningsskjema er tvert imot en anbefalt kontroll.",
    },
    {
      question: "En affisert mann i et X-bundet dominant mønster får barn med en frisk kvinne. Hva skjer med barna?",
      options: ["Alle døtrene blir affisert, ingen av sønnene", "Alle sønnene blir affisert, ingen av døtrene", "Halvparten av barna blir affisert, uansett kjønn", "Ingen av barna blir affisert, men døtrene blir bærere"],
      explanation: "Faren gir sitt eneste X-kromosom til alle døtrene og Y til alle sønnene, så alle døtre arver allelet og ingen sønner. At halvparten blir affisert uansett kjønn er signaturen for et autosomalt dominant mønster.",
    },
    {
      question: "Hvorfor må et sannsynlighetsregnestykke ofte ha tre ledd og ikke to?",
      options: ["Fordi begge foreldrenes bærerstatus må med, i tillegg til utfallet for barnet", "Fordi både arv fra mor og arv fra far må ganges med antallet søsken", "Fordi svaret alltid skal oppgis både som brøk, som desimaltall og som prosent", "Fordi sannsynligheten må korrigeres for kjønnsfordelingen blant barna"],
      explanation: "Et komplett regnestykke spør om den ene forelderen er bærer, om den andre er det, og om barnet arver begge allelene. Å hoppe over partnerens bærersannsynlighet er det som typisk gjør svaret titalls ganger for høyt.",
    },
    {
      question: "Hva kjennetegner et mitokondrielt arvemønster?",
      options: ["Bare mødre gir egenskapen videre, men da til alle barna sine", "Bare fedre gir egenskapen videre, og da bare til sønnene sine", "Egenskapen går fra far til sønn i alle generasjoner uten unntak", "Egenskapen viser seg bare hos døtre av affiserte kvinner"],
      explanation: "Nesten alle mitokondrier i zygoten kommer fra eggcellen, så mønsteret følger morslinjen og rammer begge kjønn. En affisert far gir mønsteret videre til ingen av barna.",
    },
  ],
  'med1100-7-3': [
    {
      question: "En autosomalt recessiv tilstand rammer 1 av 10 000. Hva er allelfrekvensen q?",
      options: ["0,01", "0,0001", "0,1", "0,0002"],
      explanation: "Det oppgitte tallet er andelen affiserte, altså q i andre, så allelfrekvensen er kvadratroten av 0,0001. Svaret 0,0001 bruker forekomsten direkte som allelfrekvens, og gir dermed hundre ganger for lav bærerfrekvens.",
    },
    {
      question: "Med q = 0,01 og p = 0,99: hva er bærerfrekvensen ved Hardy-Weinberg-likevekt?",
      options: ["0,0198", "0,0001", "0,9801", "0,0099"],
      explanation: "Bærerfrekvensen er 2pq = 2 · 0,99 · 0,01 = 0,0198, altså rundt én av femti. Verdien 0,0001 er andelen affiserte og ikke andelen bærere.",
    },
    {
      question: "Hva uttrykker leddet q² i Hardy-Weinberg-likningen?",
      options: ["Andelen av individene som er homozygote for det ene allelet", "Andelen av allelene i populasjonen som er av den ene varianten", "Andelen av individene som bærer allelet uten å vise egenskapen", "Andelen av parene der begge partene bærer det samme allelet"],
      explanation: "Leddene i likningen er genotypefrekvenser, altså andeler av individer, og q² er de homozygote for sykdomsallelet. Andelen av allelene er q selv, uten kvadrat.",
    },
    {
      question: "Hvorfor står det en toer foran pq i uttrykket 2pq?",
      options: ["Fordi en heterozygot kan oppstå på to måter i krysningsskjemaet", "Fordi hver heterozygot person bærer to kopier av sykdomsallelet", "Fordi frekvensen må dobles for å dekke begge kjønn i populasjonen", "Fordi to generasjoner må gå før likevekten faktisk innstiller seg"],
      explanation: "Kombinasjonen A fra mor og a fra far og den motsatte gir samme genotype, så to av de fire rutene bidrar. En heterozygot har for øvrig bare én kopi av sykdomsallelet.",
    },
    {
      question: "Hvilken av forutsetningene for Hardy-Weinberg brytes av et letalt recessivt allel?",
      options: ["Ingen seleksjon mellom genotypene", "Tilfeldig paring i populasjonen", "Ingen inn- eller utvandring", "Ingen nye mutasjoner i genet"],
      explanation: "De homozygote fører ikke allelene sine videre, og det er per definisjon seleksjon. Tilfeldig paring gjelder partnervalg og er en helt annen forutsetning.",
    },
    {
      question: "Et letalt recessivt allel har q = 0,01. Hva skjer med frekvensen fra en generasjon til neste?",
      options: ["Den synker med under én prosent, fordi bærerne ikke rammes", "Den synker til om lag halvparten, fordi seleksjonen er fullstendig", "Den holder seg helt konstant, siden likevekten alltid gjenopprettes", "Den stiger svakt, fordi nye mutasjoner erstatter de tapte allelene"],
      explanation: "Med fullstendig seleksjon blir ny frekvens q/(1+q) = 0,0099, altså en nedgang på under én prosent. Frekvensen holder seg ikke konstant, for likevektsforutsetningen om ingen seleksjon er nettopp brutt.",
    },
    {
      question: "Hvor stor andel av sykdomsallelene ligger hos friske bærere når q = 0,01?",
      options: ["Rundt 99 prosent", "Rundt 50 prosent", "Rundt 25 prosent", "Rundt 2 prosent"],
      explanation: "Bærerne har ett allel hver og er langt flere enn de affiserte, som har to hver; andelen blir 2pq/(2pq + 2q²) = p = 0,99. Å tro at det er en mindre andel er feilkode E14, som er å glemme de friske bærerne.",
    },
    {
      question: "En populasjon har færre heterozygote enn Hardy-Weinberg forutsier. Hvilken forutsetning peker det mot?",
      options: ["Ikke-tilfeldig paring, for eksempel partnervalg blant slektninger", "Seleksjon mot de heterozygote, som da får færre barn enn andre", "Nye mutasjoner som stadig lager flere homozygote i populasjonen", "Innvandring av individer som bare bærer den ene av variantene"],
      explanation: "Underskudd av heterozygote og overskudd av begge homozygote er signaturen på ikke-tilfeldig paring eller på at gruppen egentlig er flere populasjoner. Seleksjon mot heterozygote er sjelden og ville i tillegg endret allelfrekvensene.",
    },
    {
      question: "Hva er forskjellen mellom seleksjon og genetisk drift?",
      options: ["Seleksjon virker i en bestemt retning, mens drift er ren tilfeldighet", "Seleksjon virker bare i små grupper, mens drift virker i store grupper", "Seleksjon endrer genotypefrekvenser, mens drift endrer allelfrekvenser", "Seleksjon virker på heterozygote, mens drift virker på homozygote"],
      explanation: "Seleksjon favoriserer eller straffer bestemte genotyper systematisk, mens drift er tilfeldige svingninger uten retning. Drift slår sterkest ut i små populasjoner, ikke i store.",
    },
    {
      question: "I en populasjon på 1 000 er 640 AA, 320 Aa og 40 aa. Hva er allelfrekvensen p?",
      options: ["0,80", "0,64", "0,32", "0,90"],
      explanation: "Med to alleler per person er p = (2 · 640 + 320)/2 000 = 0,80. Verdien 0,64 er genotypefrekvensen for AA, altså p i andre, og ikke allelfrekvensen selv.",
    },
    {
      question: "Når er tilnærmingen 2pq ≈ 2q god nok til å brukes?",
      options: ["Når allelet er sjeldent, slik at p ligger nær 1", "Når allelet er vanlig, slik at p og q ligger nær hverandre", "Alltid, siden de to uttrykkene er matematisk identiske", "Bare når populasjonen er stor nok til å unngå drift"],
      explanation: "Tilnærmingen setter p lik 1, og feilen blir omtrent lik q selv: ved q = 0,01 bommer den med én prosent, ved q = 0,2 med tjuefem. Den har ingenting med populasjonsstørrelse å gjøre.",
    },
    {
      question: "For et X-bundet recessivt allel: hva er andelen affiserte menn?",
      options: ["q, siden menn bare har ett X-kromosom", "q², på samme måte som for kvinner", "2pq, som for bærerne blant kvinnene", "p², siden det vanlige allelet dominerer"],
      explanation: "Menn har ett X og blir affisert av ett enkelt allel, så andelen er allelfrekvensen selv. At andelen skulle være q² gjelder kvinner, som trenger allelet på begge X-kromosomer.",
    },
    {
      question: "Hvor mange generasjoner med tilfeldig paring trengs for å nå Hardy-Weinberg-fordelingen?",
      options: ["Én, forutsatt at de øvrige betingelsene er oppfylt", "To, siden begge foreldregenerasjonene må blandes", "Mange, siden likevekten bygges opp gradvis over tid", "Ingen, siden fordelingen alltid er oppfylt i enhver gruppe"],
      explanation: "Kjønnscellene trekkes uavhengig fra den samme allelpuljen, og produktet (p+q)² er dermed på plass allerede i første avkomsgenerasjon. Fordelingen er ikke automatisk oppfylt i enhver gruppe — den krever at forutsetningene holder.",
    },
    {
      question: "Hvorfor er det langt flere bærere enn affiserte ved en sjelden recessiv tilstand?",
      options: ["Fordi det trengs to alleler for å bli affisert, men bare ett for å bære", "Fordi bærerne får flere barn enn de affiserte gjør i samme populasjon", "Fordi allelet muterer tilbake til den vanlige varianten hos de fleste", "Fordi de heterozygote arver allelet fra begge foreldrene sine samtidig"],
      explanation: "Å være affisert krever en sjelden dobbelthendelse, mens å bære krever bare én, og forholdet 2pq/q² blir derfor stort når q er liten. Forskjellen har ingenting med hvor mange barn gruppene får.",
    },
  ],
  'med1100-7-4': [
    {
      question: "Hva skilles fra hverandre i meiose I?",
      options: ["De homologe kromosomene, ett fra mor og ett fra far", "Søsterkromatidene, altså de to like kopiene av kromosomet", "Kjønnskromosomene, som fordeles på hver sin dattercelle", "Kromatinet i kjernen, som pakkes ut før avlesningen"],
      explanation: "Meiose I er reduksjonsdelingen der homologene skilles og kromosomtallet halveres. Søsterkromatidene skilles først i meiose II, og det trinnet endrer ikke kromosomtallet.",
    },
    {
      question: "Non-disjunction skjer i meiose I. Hvor mange av de fire kjønnscellene blir avvikende?",
      options: ["Alle fire, to med n+1 og to med n−1", "To, mens de to andre er helt normale", "Én, mens de tre andre er helt normale", "Tre, mens den siste er helt normal"],
      explanation: "Begge dattercellene etter meiose I er allerede avvikende, og meiose II deler begge i to. Svaret to gjelder når feilen skjer i meiose II, der bare den ene dattercellen er berørt.",
    },
    {
      question: "Non-disjunction skjer i meiose II. Hvordan fordeler de fire kjønnscellene seg?",
      options: ["Én med n+1, én med n−1 og to normale", "To med n+1 og to med n−1, ingen normale", "To med n+1 og to normale, ingen med n−1", "Fire normale, siden meiose I gikk riktig"],
      explanation: "Meiose I går normalt, så bare den ene av de to dattercellene rammes, og den gir én celle med for mye og én med for lite. Fordelingen to og to uten normale gjelder feil i meiose I.",
    },
    {
      question: "En zygote har 47 kromosomer der det ekstra er en nøyaktig kopi av et av de andre. Når skjedde feilen?",
      options: ["I meiose II, der søsterkromatidene ikke skilte lag", "I meiose I, der de homologe kromosomene ikke skilte lag", "Etter befruktningen, i en av de tidlige celledelingene", "Under kopieringen av DNA-et før meiosen startet"],
      explanation: "Søsterkromatider er identiske kopier, mens homologer er ulike kromosomer med samme gener. At det ekstra er identisk peker derfor entydig på meiose II.",
    },
    {
      question: "Hva kjennetegner mosaikk?",
      options: ["Kroppen har to cellelinjer, fordi feilen skjedde etter befruktningen", "Kroppen har ett avvikende kromosomtall i samtlige av sine celler", "Kroppen har et helt ekstra kromosomsett i alle celler i kroppen", "Kroppen har et stykke flyttet fra ett kromosom til et annet"],
      explanation: "Mosaikk krever at feilen oppsto i en celledeling etter befruktningen, slik at bare en del av cellene rammes. Er feilen i kjønnscellen, har alle cellene avviket fra første deling.",
    },
    {
      question: "Hva er forskjellen på aneuploidi og polyploidi?",
      options: ["Aneuploidi gjelder enkeltkromosomer, polyploidi hele kromosomsett", "Aneuploidi gjelder hele kromosomsett, polyploidi enkeltkromosomer", "Aneuploidi gjelder autosomer, polyploidi gjelder kjønnskromosomer", "Aneuploidi oppstår i meiosen, polyploidi bare etter befruktningen"],
      explanation: "Aneuploidi er ett eller noen få kromosomer for mye eller for lite, mens polyploidi er et helt ekstra sett som 3n. Begge kan oppstå både før og etter befruktning, så tidspunktet skiller dem ikke.",
    },
    {
      question: "Hva skiller en translokasjon fra en delesjon?",
      options: ["Ved translokasjon er materialet flyttet, ved delesjon er det borte", "Ved translokasjon er materialet borte, ved delesjon er det flyttet", "Ved translokasjon endres antall kromosomer, ved delesjon ikke", "Ved translokasjon rammes bare autosomene, ved delesjon alle"],
      explanation: "Translokasjon flytter et stykke til et annet kromosom uten at noe nødvendigvis går tapt, mens delesjon er et tap av materiale. Ingen av dem endrer antallet kromosomer i cellen.",
    },
    {
      question: "Hva gjør DNA-metylering i et gens styringsområde?",
      options: ["Pakker området tettere, slik at genet leses av mindre eller ikke", "Åpner området, slik at genet leses av langt kraftigere enn før", "Bytter ut cytosin med en annen base i selve genets sekvens", "Kutter ut styringsområdet, slik at genet mister startsignalet"],
      explanation: "Metylgruppene trekker til seg proteiner som pakker området tettere, og avlesningsmaskineriet kommer ikke til. Basen byttes ikke ut — sekvensen er uendret, og det er nettopp derfor merket kan fjernes igjen.",
    },
    {
      question: "Hvilken påstand om epigenetiske endringer er riktig?",
      options: ["De endrer genuttrykket uten å endre rekkefølgen av basene", "De endrer rekkefølgen av basene på en reverserbar måte", "De oppstår bare i kjønnsceller og aldri i vanlige kroppsceller", "De forsvinner alltid ved første celledeling etter at de er satt"],
      explanation: "Epigenetiske merker ligger på DNA-et og på histonene og lar sekvensen stå urørt, noe som er selve definisjonen. Merkene kopieres dessuten til dattercellene ved celledeling, i stedet for å forsvinne.",
    },
    {
      question: "Hva innebærer imprinting?",
      options: ["At uttrykket avhenger av hvilken forelder allelet kom fra", "At uttrykket avhenger av hvilket av allelene som er dominant", "At uttrykket avhenger av hvor mange kopier av genet som finnes", "At uttrykket avhenger av om genet ligger på X eller på et autosom"],
      explanation: "Ved imprinting er den ene foreldrekopien merket og slått av allerede i kjønnscellen, så foreldreopphavet avgjør uttrykket. Spørsmålet om hvilket allel som er dominant, er et helt annet og uavhengig spørsmål.",
    },
    {
      question: "Hva er konsekvensen av at et gen er preget, altså underlagt imprinting?",
      options: ["Personen har i praksis bare én fungerende kopi av genet", "Personen har i praksis fire fungerende kopier av genet", "Personen uttrykker genet dobbelt så kraftig som ellers", "Personen kan ikke gi genet videre til sine egne barn"],
      explanation: "Den ene foreldrekopien er slått av med hensikt, så reservekopien som ellers ville trådt inn, er ikke tilgjengelig. Genet gis videre helt normalt — det er bare merkingen som settes på nytt i hver generasjon.",
    },
    {
      question: "Hva er hensikten med X-inaktivering hos kvinner?",
      options: ["At begge kjønn i praksis har én aktiv kopi av X-genene", "At begge X-kromosomene kan leses av samtidig i alle celler", "At kvinner får dobbelt så mye produkt fra X-genene som menn", "At X-kromosomet fra faren alltid slås av i alle kroppens celler"],
      explanation: "Det ene X-kromosomet slås av tidlig i utviklingen, slik at genmengden blir sammenliknbar hos begge kjønn. Valget av hvilket X som slås av, gjøres tilfeldig i hver celle og gjelder ikke alltid farens.",
    },
    {
      question: "På et rutenett i blokk 2 gir riktig +0,5, galt −0,5 og blankt 0. Når lønner det seg å svare?",
      options: ["Når du er mer enn femti prosent sikker på svaret", "Alltid, siden et forsøk aldri kan gjøre situasjonen verre", "Aldri, siden risikoen for trekk overstiger enhver gevinst", "Bare når du er helt sikker og kan begrunne svaret fullt ut"],
      explanation: "Med symmetrisk poengmodell er forventet uttelling positiv så snart sannsynligheten for riktig overstiger en halv. Å svare alltid er feilkode E20 og er den eneste feilen som tar fra deg poeng du allerede hadde.",
    },
    {
      question: "Du skal plassere hvert utsagn i én av tre klasser på et negativt rettet rutenett, og gjetter blindt. Hva er forventet uttelling?",
      options: ["Rundt −0,17 per felt, altså et systematisk tap", "Rundt +0,17 per felt, altså en systematisk gevinst", "Nøyaktig 0 per felt, altså det samme som blankt", "Rundt −0,50 per felt, altså full straff hver gang"],
      explanation: "En blind gjetning treffer i en av tre tilfeller: 1/3 · 0,5 − 2/3 · 0,5 = −0,17. Nøyaktig null gjelder bare et rutenett med to valg, der sjansen er en halv.",
    },
  ],
  'med1100-8-1': [
    {
      question: "Hvilket ledd kommer rett etter at insulinreseptoren har autofosforylert seg?",
      options: ["IRS festes til de påsatte fosfatgruppene", "PI3K festes direkte til selve reseptoren", "PIP₃ dannes i innsiden av cellemembranen", "Akt aktiveres og starter flyttingen av GLUT4"],
      explanation: "IRS er stillaset som festes til den autofosforylerte reseptoren, og PI3K rekrutteres først til IRS. Å hoppe over IRS er den vanligste utelatelsen, og siden rekkefølgen er selve svaret, koster det et moment.",
    },
    {
      question: "Hva er den riktige rekkefølgen i insulinveien fram til GLUT4?",
      options: ["RTK → IRS → PI3K → PIP₃ → Akt → GLUT4", "RTK → PI3K → IRS → Akt → PIP₃ → GLUT4", "RTK → cAMP → PKA → IRS → Akt → GLUT4", "RTK → G-protein → PI3K → PIP₃ → Akt → GLUT4"],
      explanation: "Stillaset IRS kommer først, deretter PI3K som lager PIP₃, som igjen trekker Akt til membranen. Alternativet med cAMP og PKA blander inn GPCR-veien, som er en helt annen reseptortype.",
    },
    {
      question: "Hva gjør insulin med GLUT4-transportørene?",
      options: ["Flytter ferdige transportører fra vesikler ut i membranen", "Setter i gang produksjon av helt nye transportørmolekyler", "Åpner transportører som allerede står lukket i membranen", "Hindrer at transportørene brytes ned inne i cytosolen"],
      explanation: "Transportørene finnes ferdig produsert i vesikler, og insulin utløser at vesiklene smelter sammen med membranen. Det er nettopp derfor svaret kommer på minutter og ikke på timer, slik nyproduksjon ville krevd.",
    },
    {
      question: "Hva kjennetegner en G-proteinkoblet reseptor?",
      options: ["Den har ingen enzymaktivitet, men aktiverer et koblingsprotein", "Den er selv en kinase og fosforylerer sine egne tyrosiner", "Den ligger i cytoplasma og flytter inn i kjernen med liganden", "Den slipper signalmolekylet gjennom membranen og inn i cellen"],
      explanation: "GPCR virker ved at en formendring aktiverer et G-protein, som igjen slår på et effektorenzym. At reseptoren selv er en kinase, gjelder derimot reseptortyrosinkinasene.",
    },
    {
      question: "Hvilken rekkefølge er riktig i GPCR-veien?",
      options: ["G-protein → adenylatcyklase → cAMP → PKA", "G-protein → cAMP → adenylatcyklase → PKA", "adenylatcyklase → G-protein → PKA → cAMP", "cAMP → G-protein → PKA → adenylatcyklase"],
      explanation: "G-proteinet aktiverer enzymet adenylatcyklase, som lager cAMP, som så aktiverer PKA. Å sette cAMP før adenylatcyklase snur årsak og virkning: cAMP er produktet av enzymet.",
    },
    {
      question: "Hva er en andre budbringer?",
      options: ["Et lite molekyl som bærer signalet videre inne i cellen", "Et hormon som skilles ut like etter det første hormonet", "En reseptor som overtar når den første reseptoren er brukt", "Et protein som frakter signalmolekylet gjennom membranen"],
      explanation: "cAMP er det klassiske eksempelet: det lages inne i cellen når reseptoren aktiveres, og sprer signalet videre. Signalmolekylet utenfor er den første budbringeren og krysser aldri membranen.",
    },
    {
      question: "Hvor befinner en kjernereseptor av klasse 1 seg før signalmolekylet kommer?",
      options: ["I cytoplasma, holdt tilbake av hjelpeproteiner", "I cellekjernen, ofte allerede bundet til DNA", "I cellemembranen, med sju passasjer gjennom den", "I vesikler like under cellemembranens innside"],
      explanation: "Klasse 1 ligger i cytoplasma og flytter inn i kjernen sammen med hormonet. Å ligge ferdig i kjernen bundet til DNA er kjennetegnet på klasse 2, og det er nettopp dette skillet rutenettene tester.",
    },
    {
      question: "Hvilken egenskap gjelder BEGGE klasser av kjernereseptorer?",
      options: ["De har et DNA-bindende område i proteinstrukturen", "De må flytte seg fra cytoplasma og inn i cellekjernen", "De ligger bundet til DNA allerede før signalet kommer", "De aktiveres av vannløselige hormoner fra blodbanen"],
      explanation: "Domenestrukturen er felles for begge klasser — det er plasseringen i cellen som skiller dem. Flyttingen inn i kjernen gjelder bare klasse 1, og signalmolekylene må være fettløselige for begge.",
    },
    {
      question: "Hvorfor tar et svar via en kjernereseptor timer, mens insulinsvaret tar minutter?",
      options: ["Fordi nye proteiner må lages, mens insulin bare flytter det som finnes", "Fordi kjernereseptorer binder hormonet langt saktere enn membranreseptorer", "Fordi hormonet må fraktes aktivt gjennom membranen av egne bærerproteiner", "Fordi kjernen ligger lenger fra membranen enn de øvrige organellene gjør"],
      explanation: "Kjernereseptorer endrer avlesningen av gener, og både ny avskrift og nytt protein må lages før virkningen ses. Insulinveien slår derimot bare på proteiner som allerede finnes og flytter ferdige transportører.",
    },
    {
      question: "Hva menes med amplifisering i en signalvei?",
      options: ["Ett bundet signalmolekyl gir mange aktiverte molekyler nedstrøms", "Signalet gjentas flere ganger slik at responsen varer mye lenger", "Flere ulike hormoner binder samme reseptor og forsterker hverandre", "Reseptorene samles i klynger slik at bindingen blir langt sterkere"],
      explanation: "Hvert ledd i kjeden er et enzym som behandler mange substratmolekyler, og forsterkningene fra leddene ganges sammen. Det handler altså om antall molekyler per ledd, ikke om at signalet gjentas.",
    },
    {
      question: "En celle mangler evnen til å danne PIP₃. Hvilket ledd svikter først?",
      options: ["Akt aktiveres ikke, fordi festepunktet i membranen mangler", "IRS festes ikke, fordi reseptoren ikke lenger fosforyleres", "Reseptoren autofosforylerer ikke, siden signalet aldri når fram", "PI3K rekrutteres ikke, fordi den binder direkte til PIP₃"],
      explanation: "PIP₃ er festepunktet som trekker Akt ned til membranen der den aktiveres, så Akt er det første leddet som stopper. PI3K rekrutteres derimot via IRS og er selve enzymet som lager PIP₃.",
    },
    {
      question: "Hvilket av de fem prinsippene beskriver at bare noen celler svarer på et hormon i blodet?",
      options: ["Spesifisitet, siden bare celler med riktig reseptor reagerer", "Amplifisering, siden signalet forsterkes i utvalgte celletyper", "Integrasjon, siden cellene sammenholder flere ulike signaler", "Desensitisering, siden cellene venner seg til vedvarende signal"],
      explanation: "Hormonet er i blodet overalt, og det er reseptorfordelingen som avgjør hvem som reagerer. Integrasjon handler derimot om hva cellen gjør når den mottar flere signaler samtidig.",
    },
    {
      question: "Hva gjør en fosfatase i en signalvei?",
      options: ["Fjerner fosfatgrupper og bidrar til å slå signalet av", "Setter på fosfatgrupper og bidrar til å slå signalet på", "Bryter ned den andre budbringeren etter at den er brukt", "Trekker reseptoren inn fra membranen ved lang stimulering"],
      explanation: "Fosfataser er kinasenes motsatte og gjør at signalet slås av når kilden forsvinner. Å bryte ned den andre budbringeren er en annen avslutningsmekanisme, utført av egne nedbrytende enzymer.",
    },
    {
      question: "I en negativ tilbakekoblingssløyfe: hva skjer med styringshormonet hvis målkjertelen slutter å produsere sitt hormon?",
      options: ["Styringshormonet stiger, fordi hemmingen på kjertelen faller bort", "Styringshormonet synker, fordi hele aksen dempes samtidig", "Styringshormonet holder seg konstant, siden sløyfen er brutt", "Styringshormonet svinger raskt mellom svært høye og lave nivåer"],
      explanation: "Det ferdige hormonet er det som hemmer den overordnede kjertelen, så når det faller bort, øker utskillelsen av styringshormonet. At begge synker samtidig ville pekt mot at feilen ligger lenger opp i kjeden.",
    },
    {
      question: "Hvorfor må et vannløselig hormon ha reseptoren sin i cellemembranen?",
      options: ["Fordi det ikke passerer det fettløselige midtpartiet i membranen", "Fordi det brytes ned av enzymer så snart det kommer inn i cytosol", "Fordi det er for stort til å binde en reseptor inne i cellekjernen", "Fordi det bare kan binde reseptorer som er koblet til et G-protein"],
      explanation: "Membranens fettløselige midtparti slipper gjennom det som ligner på fett og stopper det som ikke gjør det. Fettløselige hormoner passerer derimot og kan bruke reseptorer inne i cellen.",
    },
    {
      question: "Du skal krysse av klasse 1, klasse 2 eller begge på et rutenett med negativ retting, og er helt usikker. Hva bør du gjøre?",
      options: ["La feltet stå blankt, siden blind gjetning taper i forventning", "Krysse av uansett, siden et forsøk aldri kan koste deg noe", "Krysse av begge, siden det er det mest sannsynlige svaret", "Krysse av klasse 1, siden den nevnes oftest i pensumteksten"],
      explanation: "Med tre klasser treffer en blind gjetning i ett av tre tilfeller, og forventet uttelling blir 1/3 · 0,5 − 2/3 · 0,5 = −0,17 per felt. Å krysse av uansett er feilkode E20, som er den eneste feilen som tar fra deg poeng du allerede hadde.",
    },
  ],
  'med1100-8-2': [
    {
      question: "Hvilken gruppe består bare av tumorsuppressorer?",
      options: ["pRB, p53, p21 og p16", "Cyklin, CDK, E2F og RTK", "pRB, cyklin, p21 og E2F", "p53, CDK, p16 og RTK"],
      explanation: "Alle fire holder igjen celledeling, og kreft fremmes ved tap av funksjonen deres. Gruppen med cyklin, CDK, E2F og RTK består derimot av proto-onkogener, som driver syklusen framover.",
    },
    {
      question: "Hva skjer når CDK fosforylerer pRB?",
      options: ["pRB slipper E2F, som setter i gang S-fase-genene", "pRB binder E2F langt fastere, og cellen stanser i G1-fasen", "pRB brytes ned, og cellen går ut i hvilefasen G0", "pRB fosforylerer i sin tur p53 og starter celledøden"],
      explanation: "Fosforyleringen endrer formen på pRB slik at grepet om E2F løsner og S-fasen kan starte. At bindingen skulle bli fastere er det motsatte av mekanismen og ville gitt stans i stedet for deling.",
    },
    {
      question: "Hvilken rolle har cyklin i cellesyklusen?",
      options: ["Det aktiverer CDK, og mengden svinger gjennom syklusen", "Det hemmer CDK, slik at syklusen stanser ved skade", "Det binder DNA og setter i gang avlesningen av S-fase-gener", "Det fosforylerer pRB direkte uten hjelp av andre proteiner"],
      explanation: "CDK er inaktiv alene og slås på når et cyklin binder til den, og cyklinmengden avgjør derfor når hver fase inntreffer. Å hemme CDK er derimot oppgaven til p21 og p16.",
    },
    {
      question: "Hva er de to utgangene i p53-responsen på DNA-skade?",
      options: ["Stans via p21, eller celledød via BAX", "Stans via p16, eller vekst via E2F", "Reparasjon via p21, eller deling via cyklin", "Celledød via p21, eller stans via BAX"],
      explanation: "p53 setter i gang enten p21, som hemmer CDK og gir stans, eller BAX, som starter den mitokondrielle celledødsveien. Alternativet som bytter om på p21 og BAX snur begge utgangene.",
    },
    {
      question: "Reparerer p53 selv det skadede DNA-et?",
      options: ["Nei, den stanser syklusen slik at andre får tid til å reparere", "Ja, den kutter ut og erstatter de skadede basene i tråden", "Ja, men bare i G1-fasen og aldri senere i cellesyklusen", "Nei, den kopierer det skadede området på nytt og retter opp feilen"],
      explanation: "p53 stanser eller fjerner cellen; selve reparasjonen utføres av egne reparasjonssystemer. Betegnelsen genomets vokter fanger nettopp dette — vokteren stopper deg i døra og rydder ikke rommet.",
    },
    {
      question: "Hvorfor må begge kopier av et tumorsuppressorgen slås ut før funksjonen faller bort?",
      options: ["Fordi én fungerende kopi lager nok protein til at bremsen virker", "Fordi de to kopiene må virke sammen for å lage ett protein", "Fordi den ene kopien alltid er slått av ved genomisk preging", "Fordi proteinet bare dannes når begge kopier leses av samtidig"],
      explanation: "Problemet er tap av funksjon, og én kopi som fortsatt produserer protein er nok til å holde igjen. For et proto-onkogen holder derimot én endret kopi, siden problemet der er økt funksjon.",
    },
    {
      question: "Hvor i cellesyklusen ligger restriksjonspunktet?",
      options: ["Sent i G1, før cellen forplikter seg til hele runden", "Tidlig i S, rett etter at kopieringen har begynt", "I overgangen mellom G2 og M, rett før delingen", "Midt i M-fasen, når kromosomene skal skilles"],
      explanation: "Etter restriksjonspunktet fullfører cellen runden uten å spørre om vekstsignaler igjen, og det er her pRB-bremsen står. Kontrollen før selve delingen er et annet sjekkpunkt, i G2.",
    },
    {
      question: "Hva er et proto-onkogen?",
      options: ["Et normalt gen som driver deling, og som skader ved økt funksjon", "Et unormalt gen som bare finnes i celler som allerede er syke", "Et normalt gen som bremser deling, og som skader ved tap", "Et gen som bare uttrykkes fra den ene foreldrekopien"],
      explanation: "Proto-onkogener er helt normale og nødvendige gener, og det er endringen som gjør dem til onkogener. Beskrivelsen av et gen som bremser deling gjelder tumorsuppressorene.",
    },
    {
      question: "Hva gjør p21 etter at p53 har satt i gang produksjonen?",
      options: ["Hemmer cyklin-CDK, slik at pRB ikke blir fosforylert", "Fosforylerer pRB, slik at E2F slippes fri og S-fasen starter", "Danner porer i mitokondriemembranen og starter celledøden", "Binder DNA og setter i gang avlesningen av gener for reparasjon"],
      explanation: "p21 er en CDK-hemmer, og med CDK slått av forblir pRB ufosforylert og holder E2F fast. Å danne porer i mitokondriemembranen er derimot BAX sin oppgave i den andre utgangen.",
    },
    {
      question: "En celle har mistet p53 helt, men har normal pRB. Kan den gå inn i S-fase uten vekstsignal?",
      options: ["Nei, pRB holder E2F fast så lenge CDK ikke aktiveres", "Ja, siden tap av p53 gjør at alle sjekkpunkter faller bort", "Ja, siden pRB uten p53 ikke lenger kan binde E2F i det hele tatt", "Nei, men bare fordi p21 fortsatt lages uavhengig av p53"],
      explanation: "De to bremsene svarer på ulike spørsmål: p53 på om DNA-et er helt, pRB på om det er gitt vekstsignal. Uten cyklin dannes ingen aktiv CDK, pRB blir ikke fosforylert, og E2F slippes ikke.",
    },
    {
      question: "Hva er genominstabilitet?",
      options: ["At endringer i arvestoffet hoper seg opp raskere enn normalt", "At hele kromosomer bytter plass med hverandre under hver deling", "At cellen mister ett kromosom i hver eneste celledeling", "At epigenetiske merker nullstilles ved hver celledeling"],
      explanation: "Når kontroll- og reparasjonssystemene svikter, kopieres gamle skader videre og nye legges til for hver deling. Det er nettopp derfor tap av p53 får så mye større følger over tid enn tap av et vanlig syklusprotein.",
    },
    {
      question: "Hvilken rolle har E2F?",
      options: ["Setter i gang avlesningen av genene som trengs i S-fasen", "Holder pRB inaktivt til cellen har fått godkjenning for å dele seg", "Hemmer CDK ved restriksjonspunktet sent i G1-fasen", "Fosforylerer cyklin slik at komplekset blir aktivt"],
      explanation: "E2F er den som faktisk utløser S-fasen, mens pRB er vokteren som holder det tilbake. De to sitter i samme mekanisme, men tilhører motsatte klasser.",
    },
    {
      question: "Hvorfor virker p53-veien gjennom pRB-bremsen?",
      options: ["Fordi p21 hemmer CDK, som ellers ville fosforylert pRB", "Fordi p53 binder direkte til pRB og forsterker grepet om E2F", "Fordi pRB setter i gang produksjonen av p53 ved DNA-skade", "Fordi p53 og pRB er to navn på det samme kontrollproteinet"],
      explanation: "p53 har ingen egen mekanisme for å stanse syklusen — den slår av den samme kinasen som ellers ville tatt pRB-bremsen av. Derfor kan en celle med intakt p53, men ødelagt pRB, likevel gå inn i S-fase.",
    },
    {
      question: "Du skal krysse av tumorsuppressor eller proto-onkogen på et rutenett med negativ retting. Hva er den beste strategien?",
      options: ["Bruk regelen om brems eller gasspedal og svar på alle feltene", "La alle feltene stå blanke, siden negativ retting er for risikabelt", "Kryss av tumorsuppressor overalt, siden den gruppen er størst", "Gjett på annenhver klasse for å sikre halvparten av poengene"],
      explanation: "Med regelen om hvilken vei proteinet virker, er du langt over femti prosent sikker på hvert felt, og da er forventet uttelling positiv. Å la alt stå blankt gir null når du faktisk kan stoffet, og systematisk gjetting er feilkode E20.",
    },
  ],
  'med1100-8-3': [
    {
      question: "Hva er riktig rekkefølge i den indre apoptoseveien?",
      options: ["Bax → cytokrom c → APAF-1 → caspase-9 → effektorcaspaser", "Bax → APAF-1 → cytokrom c → caspase-9 → effektorcaspaser", "Cytokrom c → Bax → apoptosom → effektorcaspaser → caspase-9", "Bcl-2 → cytokrom c → APAF-1 → caspase-9 → effektorcaspaser"],
      explanation: "Bax lager porene som slipper cytokrom c ut, og først da kan APAF-1 binde det og bygge apoptosomet. Alternativet som starter med Bcl-2 setter hemmeren i pådriverens plass.",
    },
    {
      question: "Hva gjør Bax?",
      options: ["Danner porer i mitokondriens ytre membran", "Hindrer at det dannes porer i mitokondrien", "Kutter DNA-et mellom nukleosomene i kjernen", "Binder cytokrom c og bygger apoptosomet"],
      explanation: "Bax er den pro-apoptotiske faktoren som åpner mitokondriens ytre membran. Å hindre poredannelsen er derimot Bcl-2 sin oppgave, og forvekslingen av de to er den vanligste enkeltfeilen i sjangeren.",
    },
    {
      question: "I hvilken membran dannes porene som slipper cytokrom c ut?",
      options: ["Mitokondriens ytre membran", "Mitokondriens indre membran", "Kjernemembranen rundt arvestoffet", "Cellemembranen mot omgivelsene"],
      explanation: "Cytokrom c ligger mellom mitokondriens to membraner, så barrieren mot cytosol er den ytre. En pore i den indre membranen ville ikke sluppet det ut i cytosol i det hele tatt.",
    },
    {
      question: "Hvorfor gir nekrose betennelse, mens apoptose ikke gjør det?",
      options: ["Ved nekrose ryker membranen og innholdet lekker ut i vevet", "Ved nekrose lages det egne signalstoffer som tiltrekker immunceller", "Ved apoptose brytes betennelsesmolekylene raskt ned av caspasene", "Ved apoptose dør cellene så langsomt at responsen ikke rekker å starte"],
      explanation: "Molekyler som normalt bare finnes inne i celler, leses som et faresignal når de havner fritt i vevet. Ved apoptose pakkes alt i membrankledde legemer og tas opp uten at noe slipper ut.",
    },
    {
      question: "Hvorfor krever apoptose ATP?",
      options: ["APAF-1 binder cytokrom c sammen med ATP når apoptosomet dannes", "Caspasene bruker ATP direkte til å kutte cellens strukturproteiner", "Porene i mitokondriemembranen holdes åpne av vedvarende ATP-bruk", "DNA-et må kopieres på nytt før det kan kuttes av nukleasen CAD"],
      explanation: "Uten ATP dannes ikke apoptosomet, og kjeden stopper der. Det er nettopp derfor en celle uten energi ikke kan gjennomføre apoptose og går i nekrose i stedet.",
    },
    {
      question: "Hva er apoptosomet?",
      options: ["En plattform av APAF-1 der caspase-9 aktiveres", "En membrankledd blære cellen deles opp i til slutt", "Et enzym som kutter DNA mellom nukleosomene", "En pore i mitokondriens ytre membran laget av Bax"],
      explanation: "Apoptosomet er samlingsstedet der caspase-9-molekyler kommer tett nok på hverandre til å aktiveres. De membrankledde blærene heter derimot apoptotiske legemer og dannes helt til slutt.",
    },
    {
      question: "Hvorfor gir apoptose et stigemønster når DNA sorteres etter lengde?",
      options: ["CAD kutter bare i de frie stykkene mellom nukleosomene", "CAD kutter DNA-et i helt tilfeldige posisjoner langs tråden", "Kromosomene skilles fra hverandre og måles hver for seg", "DNA-et kopieres opp i biter av fast lengde før nedbrytingen"],
      explanation: "Avstanden mellom nukleosomene er regelmessig, rundt 200 basepar, og fragmentene blir derfor multipler av den. Tilfeldig kutting ville gitt alle mulige lengder og en jevn utsmøring, slik man ser ved nekrose.",
    },
    {
      question: "Hvilken faktor er anti-apoptotisk?",
      options: ["Bcl-2", "Bax", "APAF-1", "Caspase-9"],
      explanation: "Bcl-2 hindrer at Bax danner porer og holder dermed cellen i live. De tre andre driver alle kjeden videre og er pro-apoptotiske.",
    },
    {
      question: "Hva kjennetegner nekrose sammenliknet med apoptose?",
      options: ["Cellen svulmer og membranen ryker, ofte i hele områder", "Cellen krymper og pakkes i membrankledde små blærer", "Cellen kutter DNA-et sitt regelmessig mellom nukleosomene", "Cellen bruker ATP på en styrt og trinnvis avvikling av seg selv"],
      explanation: "Nekrose er et sammenbrudd etter ytre skade, med svulming, membranbrudd og som regel et helt område rammet. De tre andre beskrivelsene er kjennetegn ved apoptose.",
    },
    {
      question: "Hvorfor kan apoptosen ikke reverseres etter at caspasene er aktivert?",
      options: ["Caspaser aktiveres ved kutting, og et kutt kan ikke settes sammen igjen", "Caspaser aktiveres ved fosforylering, som ingen fosfatase kan fjerne", "Caspaser brytes ned av cellen straks de har utført sin oppgave", "Caspaser binder DNA-et permanent og hindrer all videre avlesning"],
      explanation: "Der fosforylering kan reverseres av en fosfatase, er et kutt i en aminosyrekjede endelig. Cellen har derfor lagt beslutningen om liv eller død oppstrøms, i balansen mellom Bax og Bcl-2.",
    },
    {
      question: "Hva skiller den ytre apoptoseveien fra den indre?",
      options: ["Den starter med en dødsreseptor på celleoverflaten", "Den ender i helt andre effektorcaspaser enn den indre", "Den krever ikke ATP i noen av trinnene sine", "Den kutter DNA uten å aktivere nukleasen CAD"],
      explanation: "Den ytre veien utløses av et signal fra en annen celle og går ikke om mitokondriene i første ledd. Begge veier ender likevel i de samme effektorcaspasene — to innganger, én felles utgang.",
    },
    {
      question: "Hva er cytokrom c sin rolle inne i en frisk mitokondrie?",
      options: ["Det deltar i energiproduksjonen mellom de to membranene", "Det holder Bax bundet slik at porer ikke kan dannes", "Det aktiverer caspase-9 direkte inne i mitokondrien", "Det binder ATP og lagrer energi til senere bruk"],
      explanation: "Samme molekyl har to helt ulike roller avhengig av hvor det er: energiproduksjon inne i mitokondrien, dødssignal ute i cytosol. Å binde Bax er derimot Bcl-2 sin funksjon.",
    },
    {
      question: "En celle produserer svært mye Bcl-2. Hvor stopper den indre apoptoseveien?",
      options: ["Ved poredannelsen, så cytokrom c slipper aldri ut", "Ved apoptosomet, som ikke kan settes sammen riktig", "Ved caspase-9, som blir aktivert men straks hemmet", "Ved CAD, som ikke lenger kommer til mellom nukleosomene"],
      explanation: "Bcl-2 virker på det aller første trinnet ved å hindre at Bax danner porer, og alt nedstrøms uteblir dermed. En hemmer lenger nede ville kommet etter at cytokrom c allerede var ute.",
    },
    {
      question: "Hvilket enzym kutter DNA-et under apoptosen?",
      options: ["CAD, som aktiveres av effektorcaspasene", "APAF-1, som binder cytokrom c i cytosol", "Bax, etter at det har dannet porer i membranen", "Caspase-9, rett etter at apoptosomet er dannet"],
      explanation: "CAD ligger inaktiv i cellen og settes i gang av effektorcaspasene helt mot slutten av kaskaden. APAF-1 og caspase-9 er ledd tidligere i kjeden og kutter ikke DNA.",
    },
  ],
  'med1100-9-1': [
    {
      question: "Hva flytter Na⁺/K⁺-ATPasen per ATP-molekyl den spalter?",
      options: ["Tre natriumioner ut og to kaliumioner inn", "To natriumioner ut og tre kaliumioner inn", "Tre kaliumioner ut og to natriumioner inn", "To natriumioner inn og tre kaliumioner ut"],
      explanation: "Pumpa sender natrium UT og kalium INN, i forholdet 3 mot 2. Alternativet som bytter om tallene beholder riktige retninger, men gir feil ladningsregnskap — det er nettopp fordi tre positive går ut og bare to inn at pumpa er elektrogen.",
    },
    {
      question: "Hva er et likevektspotensial for et ion?",
      options: ["Spenningen der ionets to drivkrefter opphever hverandre", "Spenningen cellen har når alle ionekanaler er lukket", "Spenningen der ionekonsentrasjonen er lik på begge sider", "Spenningen der pumpa slutter å bruke ATP for ionet"],
      explanation: "Ved likevektspotensialet er konsentrasjonskraften og den elektriske kraften like store og motsatt rettet, så netto transport er null. Alternativet om lik konsentrasjon på begge sider beskriver noe annet: ved likevekt består gradienten, den balanseres bare av spenningen.",
    },
    {
      question: "I den forenklede Nernst-likningen: hvilken konsentrasjon står i telleren?",
      options: ["Konsentrasjonen utenfor cellen", "Konsentrasjonen inne i cellen", "Den høyeste av de to konsentrasjonene", "Den laveste av de to konsentrasjonene"],
      explanation: "Brøken er ute delt på inne, i den rekkefølgen, og det er denne rekkefølgen som gir riktig fortegn. Alternativet som setter inne i telleren snur logaritmens fortegn og gjør et negativt kaliumpotensial positivt.",
    },
    {
      question: "Hva blir fortegnet på likevektspotensialet for et positivt ion som er mest konsentrert inne i cellen?",
      options: ["Negativt, fordi brøken ute over inne er mindre enn 1", "Positivt, fordi brøken ute over inne er større enn 1", "Negativt, fordi ionets ladningstall er negativt", "Positivt, fordi ionet strømmer inn i cellen"],
      explanation: "Er det mest av ionet inne, blir brøken ute over inne mindre enn 1, og logaritmen negativ. Alternativet som knytter fortegnet til ladningstallet blander to ting: ladningstallet for kalium og natrium er positivt, og det er brøken som gir minustegnet.",
    },
    {
      question: "Hvilken temperatur svarer konstanten 61 mV i Nernst-likningen til?",
      options: ["Kroppstemperatur, altså omtrent 310 kelvin", "Romtemperatur, altså omtrent 293 kelvin", "Frysepunktet for vann, altså 273 kelvin", "Enhver temperatur — konstanten er uavhengig av den"],
      explanation: "Konstanten er 2,303·RT/F regnet ut ved 310 K og blir da 61,5 mV, som rundes til 61. Alternativet om romtemperatur gir 58 mV i stedet, og alternativet om at konstanten er temperaturuavhengig overser at T står i formelen.",
    },
    {
      question: "Hvorfor må temperaturen settes inn i kelvin når du regner ut konstanten selv?",
      options: ["Fordi formelen bruker absolutt temperatur, ikke grader", "Fordi kelvin gir riktig enhet på ionekonsentrasjonene", "Fordi gasskonstanten bare gjelder over frysepunktet", "Fordi Faradays konstant endrer seg med celsiusgrader"],
      explanation: "T i uttrykket 2,303·RT/F er absolutt temperatur, og 37 i stedet for 310 gjør svaret nesten ti ganger for lite. Alternativet om enheten på konsentrasjonene bommer: de står i en brøk og forkortes bort uansett enhet.",
    },
    {
      question: "Hva må være oppfylt for de to konsentrasjonene du setter inn i Nernst-likningen?",
      options: ["De må være oppgitt i samme enhet som hverandre", "De må være oppgitt i millimol per liter", "De må være omregnet til mol per liter først", "De må gjelde samme temperatur som pumpa arbeider ved"],
      explanation: "Konsentrasjonene står i en brøk, så enheten forkortes bort — kravet er bare at de er like. Alternativet som krever millimol per liter er unødvendig strengt, men konvertering mellom ulike enheter er et poenggivende steg når de faktisk er ulike.",
    },
    {
      question: "Hvor ligger hvilepotensialet i en nervecelle i forhold til kaliums likevektspotensial?",
      options: ["Nær det, men litt nærmere null på grunn av lekkasje", "Nøyaktig på det, siden bare kalium slipper gjennom", "Langt under det, fordi pumpa trekker potensialet nedover", "Nær natriums likevektspotensial i stedet, altså positivt"],
      explanation: "Membranen i hvile er mest gjennomtrengelig for kalium, men ikke helt tett for natrium, og lekkasjen trekker potensialet oppover. Alternativet som setter dem nøyaktig like ville betydd null drivkraft på kalium i hvile, og da ville kalium ikke lekket ut.",
    },
    {
      question: "Hvordan regner du ut den elektrokjemiske drivkraften på et ion?",
      options: ["Membranpotensialet minus ionets likevektspotensial", "Ionets likevektspotensial minus membranpotensialet", "Summen av membranpotensialet og likevektspotensialet", "Forholdet mellom de to konsentrasjonene av ionet"],
      explanation: "Drivkraften er Vm minus E for ionet, og fortegnet forteller retningen. Alternativet som snur subtraksjonen gir riktig tallstørrelse, men motsatt fortegn — og dermed motsatt konklusjon om hvilken vei ionet går.",
    },
    {
      question: "Et positivt ion har positiv elektrokjemisk drivkraft. Hvilken vei går det?",
      options: ["Ut av cellen, og virkningen er hyperpolariserende", "Inn i cellen, og virkningen er sterkt depolariserende", "Ut av cellen, og virkningen er depolariserende", "Ingen vei — positiv drivkraft betyr likevekt"],
      explanation: "Positiv drivkraft på et positivt ion betyr utstrømning, og positiv ladning som forlater cellen gjør innsiden mer negativ. Alternativet som kaller utstrømningen depolariserende har riktig retning, men snudd virkning.",
    },
    {
      question: "Hva skjer med kaliums likevektspotensial når konsentrasjonen utenfor cellen dobles?",
      options: ["Det flyttes rundt 18 mV oppover, mot null", "Det flyttes rundt 18 mV nedover, bort fra null", "Det flyttes rundt 61 mV oppover, mot null", "Det endres ikke, siden konsentrasjonen inne er uendret"],
      explanation: "En dobling gir 61 mV ganger log10(2), altså rundt 18 mV i positiv retning. Alternativet med 61 mV gjelder en tidobling, siden log10(10) er 1 — det er forholdet, ikke differansen, logaritmen ser.",
    },
    {
      question: "Hva kalles det når membranpotensialet flyttes fra −70 mV til −55 mV?",
      options: ["Depolarisering, fordi potensialet blir mindre negativt", "Hyperpolarisering, fordi potensialet fortsatt er negativt", "Repolarisering, fordi potensialet nærmer seg hvileverdien", "Likevekt, fordi drivkraften på kalium blir null"],
      explanation: "Depolarisering betyr at potensialet flyttes oppover mot null, uansett om det fortsatt er negativt. Alternativet som kaller det hyperpolarisering fordi tallet er negativt, forveksler fortegn med retning på endringen.",
    },
    {
      question: "Hva skjer med sekundær aktiv transport hvis Na⁺/K⁺-ATPasen blokkeres?",
      options: ["Den svekkes, fordi natriumgradienten den lever av, flater ut", "Den fortsetter uendret, siden den ikke bruker ATP direkte", "Den øker, fordi mer natrium blir tilgjengelig utenfor cellen", "Den snur retning og pumper stoffet ut av cellen i stedet"],
      explanation: "Sekundær aktiv transport henter energien fra natriumgradienten, og den gradienten vedlikeholdes av pumpa. Alternativet om at transporten fortsetter fordi den ikke bruker ATP, overser at ATP betalte for gradienten i første omgang.",
    },
    {
      question: "Hvilken av disse transportformene er alltid passiv?",
      options: ["Transport gjennom en ionekanal", "Transport med Na⁺/K⁺-ATPasen", "Transport av glukose sammen med natrium", "All transport som krever et membranprotein"],
      explanation: "En kanal åpner bare en vei gjennom membranen og kan ikke drive et ion mot gradienten. Alternativet om glukose sammen med natrium er sekundær aktiv transport: glukosen går mot sin gradient, drevet av at natrium går med sin.",
    },
  ],
  'med1100-9-2': [
    {
      question: "Hvilken adresselapp sender et protein til ru endoplasmatisk retikulum?",
      options: ["Et signalpeptid i den første enden av kjeden", "Et mannose-6-fosfat satt på i Golgi", "En kjede av ubikvitin festet til proteinet", "En fosfatgruppe satt på av et kinase i cytosol"],
      explanation: "Signalpeptidet ligger fremst i kjeden og gjenkjennes mens proteinet fortsatt lages. Alternativet med mannose-6-fosfat er også en ekte adresselapp, men den settes på senere, i Golgi, og den sender proteinet videre til lysosomet.",
    },
    {
      question: "Hva gjør SRP når den binder seg til et signalpeptid?",
      options: ["Stanser oversettelsen og fører komplekset fram til ER", "Åpner kanalen i ER-membranen som kjeden tres gjennom", "Klipper av signalpeptidet før proteinet brettes ferdig", "Setter mannose-6-fosfat på proteinets sukkerkjede"],
      explanation: "Pausen er nødvendig fordi et ferdigbrettet protein ikke kommer gjennom den smale kanalen. Alternativet om å åpne kanalen beskriver translokonet, som SRP overleverer kjeden til — SRP viser vei, translokonet slipper inn.",
    },
    {
      question: "Hvor blir signalpeptidet av etter at proteinet har kommet inn i ER?",
      options: ["Det klippes av, så det ferdige proteinet mangler det", "Det blir sittende og styrer proteinet videre i Golgi", "Det byttes ut med et mannose-6-fosfat i samme trinn", "Det festes til translokonet og gjenbrukes ved neste kjede"],
      explanation: "Signalpeptidet fjernes inne i ER, og det utskilte proteinet har det derfor ikke. Alternativet om at det blir sittende og styrer videre transport, forveksler signalpeptidet med de merkene Golgi setter på senere.",
    },
    {
      question: "Hvilket merke sender et enzym til lysosomet?",
      options: ["Mannose-6-fosfat, som settes på i Golgi", "En ubikvitinkjede, satt på i cytosol", "Et signalpeptid i den første enden av kjeden", "En fosfatgruppe på en serin i C-enden"],
      explanation: "Mannose-6-fosfat er en adresse til lysosomet, der enzymet skal arbeide. Alternativet med ubikvitin er et nedbrytningsmerke for proteasomet — det sender proteinet inn i riveverket, ikke til en arbeidsplass.",
    },
    {
      question: "Hva løsner et lysosomalt enzym fra M6P-reseptoren ved framkomst?",
      options: ["Den lave pH-en i lysosomets indre rom", "At mannose-6-fosfat klippes av enzymet", "At reseptoren brytes ned av proteasomet", "At kalsiumkonsentrasjonen stiger i blæra"],
      explanation: "Surheten svekker bindingen, slik at lasten slippes og reseptoren kan gå tilbake til Golgi. Alternativet om at reseptoren brytes ned, ville gjort systemet dyrt — poenget er nettopp at reseptoren gjenbrukes.",
    },
    {
      question: "Hvor havner et protein som ikke har noen adresselapp i det hele tatt?",
      options: ["Det blir liggende i cytosol, der det ble laget", "Det fraktes til Golgi som standardvei", "Det brytes ned i lysosomet umiddelbart", "Det skilles ut av cellen sammen med sekretproteiner"],
      explanation: "Cytosol er standardutfallet: uten signal skjer ingen omdirigering. Alternativet om Golgi overser at veien dit alltid går via ER, og at inngangen til ER krever signalpeptid.",
    },
    {
      question: "Hva kjennetegner nedbrytning i proteasomet?",
      options: ["Ubikvitinmerkede proteiner brettes ut og mates inn med ATP", "Materiale tatt opp utenfra brytes ned ved lav pH i en blære", "Proteiner med mannose-6-fosfat samles og klippes opp i Golgi", "Hele organeller pakkes inn og fordøyes av nabocellene"],
      explanation: "Proteasomet gjenkjenner ubikvitinkjeden, og utbrettingen er energikrevende. Alternativet om lav pH i en blære beskriver lysosomet, som er den andre nedbrytningsveien — den håndterer materiale utenfra og slitte organeller.",
    },
    {
      question: "Hvilken vei går kinesin langs en mikrotubulus?",
      options: ["Mot plussenden, altså utover mot celleperiferien", "Mot minusenden, altså innover mot cellesentrum", "Mot plussenden, altså innover mot cellesentrum", "Begge veier, avhengig av hvilken last den frakter"],
      explanation: "Kinesin er den anterograde motoren og går mot plussenden, som peker ut mot periferien. Alternativet som setter plussenden innover, bytter om hvor mikrotubulienes minusende er forankret — den ligger nær cellesentrum.",
    },
    {
      question: "Hvilken vei går dynein langs en mikrotubulus?",
      options: ["Mot minusenden, altså innover mot cellesentrum", "Mot plussenden, altså utover mot celleperiferien", "Langs aktinfilamenter, ikke langs mikrotubuli", "Mot minusenden, altså utover mot celleperiferien"],
      explanation: "Dynein er den retrograde motoren og går innover, mot minusenden som er forankret nær cellesentrum. Alternativet om aktinfilamenter bytter skinne: aktin har myosin som motorprotein, ikke dynein.",
    },
    {
      question: "Hvor er mikrotubulienes minusende som regel forankret?",
      options: ["Nær cellekjernen, altså i sentrosomet", "Ute ved celleoverflaten, i cellemembranen", "I ER-membranen, ved translokonene", "Fritt i cytosol, uten forankring"],
      explanation: "Sentrosomet nær kjernen holder minusendene, og rørene stråler derfra utover. Det er nettopp denne forankringen som gjør at mot minusenden og innover betyr det samme — alternativet om forankring ved celleoverflaten snur begge retningene.",
    },
    {
      question: "Hva er hovedoppgaven til intermediærfilamentene?",
      options: ["Å gi cellen mekanisk styrke og form", "Å frakte blærer mellom organellene", "Å drive cellens bevegelse over et underlag", "Å danne skinnen kinesin og dynein går på"],
      explanation: "Intermediærfilamentene har ingen motorproteiner og driver ingen transport — jobben er ren styrke. Alternativet om skinnen for kinesin og dynein beskriver mikrotubuli, som er den grove trådtypen i cytoskjelettet.",
    },
    {
      question: "Hvilken modifikasjon av kollagenkjedene skjer inne i ER?",
      options: ["Hydroksylering av prolinrester og lysin", "Avklipping av endestykkene på molekylet", "Tverrbinding av molekylene til en fiber", "Fosforylering av serin i den tunge kjeden"],
      explanation: "Hydroksyleringen skjer i ER og krever vitamin C som hjelpestoff. Alternativet om avklipping av endestykkene er et ekte trinn, men det skjer utenfor cellen, etter at molekylet er skilt ut.",
    },
    {
      question: "Hvorfor svekker mangel på vitamin C bindevevet?",
      options: ["Fordi hydroksyleringen svikter og helikset blir ustabilt", "Fordi kollagenet ikke lenger kan skilles ut av cellen", "Fordi signalpeptidet på kollagenet ikke blir klippet av", "Fordi endestykkene ikke blir klippet av utenfor cellen"],
      explanation: "Enzymene som setter hydroksylgrupper på prolin og lysin, trenger vitamin C, og uten hydroksylering holder ikke trippelhelikset. Alternativet om at kollagenet ikke kan skilles ut, plasserer feilen i sekresjonen i stedet for i modifikasjonen i ER.",
    },
    {
      question: "Hvor skjer den siste sammenkoblingen av kollagenmolekyler til en fiber?",
      options: ["Utenfor cellen, etter at de er skilt ut", "Inne i ER, rett etter hydroksyleringen", "I Golgi, samtidig med at sukkerkjedene bygges", "I transportblæra på vei ut av cellen"],
      explanation: "Endestykkene klippes av utenfor cellen, og først da legger molekylene seg forskjøvet og tverrbindes. Alternativet om ER ville betydd ferdige kollagenfibrer inne i cellen, noe som ville ødelagt den.",
    },
  ],
  'med1100-9-3': [
    {
      question: "Hva utløser akrosomreaksjonen i en sædcelle?",
      options: ["At sædcellen binder seg til zona pellucida", "At sædcellen kommer i kontakt med eggcellens membran", "At kortikalreaksjonen starter i eggcellen", "At sædcellen forlater sædlederen og møter vevsvæske"],
      explanation: "Bindingen til zona pellucida er signalet som frigjør enzymene, og de baner vei gjennom sonen. Alternativet om kontakt med eggcellens membran kommer for sent i rekkefølgen: sonen må passeres først.",
    },
    {
      question: "Hva er den varige blokken mot polyspermi?",
      options: ["Kortikalreaksjonen, som endrer zona pellucida kjemisk", "En rask endring av eggcellens membranspenning", "At akrosomreaksjonen bare kan skje én gang per eggcelle", "At zona pellucida løses helt opp etter befruktningen"],
      explanation: "Kortikalreaksjonen endrer sonen slik at flere sædceller verken kan binde seg eller trenge gjennom. Alternativet om membranspenningen er også en ekte sperre, men den er kortvarig og kommer først — den varige er den kjemiske.",
    },
    {
      question: "Hva er sluttproduktet av selve befruktningen?",
      options: ["En zygote med to sett kromosomer", "En morula med flere små celler", "En blastocyst med indre cellemasse", "En tre-lags kimskive"],
      explanation: "Zygoten er den ene cellen som oppstår når de to kjernene smelter sammen. Alternativet med morula beskriver stadiet etter flere runder kløyving, altså dager senere — alle de gale alternativene er riktige stadier på feil tidspunkt.",
    },
    {
      question: "Hva kjennetegner kløyvingen etter befruktningen?",
      options: ["Flere og mindre celler, uten at helheten vokser", "Cellene blir flere og beholder samme størrelse hver", "Cellene vokser kraftig mellom hver deling", "Bare den indre cellemassen deler seg videre"],
      explanation: "Delingene skjer uten vekst imellom, så en stor celle blir mange små med samme totalvolum. Alternativet om at cellene beholder størrelsen ville krevd vekst mellom delingene, og det er nettopp det som ikke skjer her.",
    },
    {
      question: "Hvilken del av blastocysten blir til selve fosteret?",
      options: ["Embryoblasten, den indre cellemassen", "Trofoblasten, altså det ytre cellelaget", "Hulrommet mellom de to cellegruppene", "Zona pellucida, som fortsatt omgir kula"],
      explanation: "Den indre cellemassen gir opphav til fosteret, mens trofoblasten fester blastocysten og danner fosterets del av morkaken. Å bytte om de to er den vanligste feilen på dette stadiet, fordi begge er celler i samme struktur.",
    },
    {
      question: "Hva dannes under gastruleringen?",
      options: ["Tre kimlag fra en to-lags kimskive", "Nevralrøret fra en fortykket ektoderm", "Blastocysten fra en morula", "Nevrallisten fra kanten av nevralplaten"],
      explanation: "Gastruleringen gjør en to-lags skive om til tre lag: ektoderm, mesoderm og endoderm. Alternativet om nevralrøret beskriver nevruleringen, som kommer etterpå og bygger på at kimlagene allerede finnes.",
    },
    {
      question: "Hvilket kimlag gir opphav til muskulatur, skjelett og blodkar?",
      options: ["Mesoderm", "Ektoderm", "Endoderm", "Nevrallisten"],
      explanation: "Mesodermen er midtlaget og lager det som bærer, beveger og transporterer. Alternativet endoderm er den vanligste forvekslingen, men endodermen gir epitelkledningen i fordøyelseskanal og luftveier, ikke støttevev.",
    },
    {
      question: "Hvilket kimlag gir opphav til epitelet i fordøyelseskanalen?",
      options: ["Endoderm", "Mesoderm", "Ektoderm", "Både ektoderm og mesoderm"],
      explanation: "Endodermen er det innerste laget og gir epitelkledningen i tarm og luftveier. Merk presisjonen: muskellaget i den samme tarmveggen er mesodermalt, så et organ kan ha bidrag fra to kimlag.",
    },
    {
      question: "Hvilket kimlag gir opphav til overhuden og nervesystemet?",
      options: ["Ektoderm", "Mesoderm", "Endoderm", "Nevralrøret alene"],
      explanation: "Ektodermen er det ytterste laget, og nervesystemet dannes ved at det folder seg innover som nevralplate. Alternativet om nevralrøret alene bytter ut et kimlag med en struktur som selv stammer fra ektodermen.",
    },
    {
      question: "Hva blir nevralrøret til?",
      options: ["Sentralnervesystemet, hjerne og ryggmarg", "Det perifere nervesystemet og pigmentcellene", "Ansiktets brusk og bein", "Binyrenes marg og nerveknutene"],
      explanation: "Røret lukker seg og blir hjerne og ryggmarg. Alle de gale alternativene lister ekte derivater av nevrallisten, altså cellene som blir liggende igjen på kanten og vandrer ut — og det er nettopp de to strukturene som forveksles.",
    },
    {
      question: "Hva skjer med nevrallistcellene etter at nevralrøret er lukket?",
      options: ["De gjennomgår EMT, løsner og vandrer ut i kroppen", "De blir liggende igjen og danner rørets tak", "De brytes ned, siden røret allerede er ferdig", "De deler seg og fortykker nevralplaten videre"],
      explanation: "EMT gjør en fastsittende epitelcelle om til en vandrende celle, og det er dette som gjør utvandringen mulig. Alternativet om at de blir liggende i taket overser at listcellenes kjennetegn nettopp er at de forlater røret.",
    },
    {
      question: "Hvor skilles Shh ut fra i forhold til nevralrøret?",
      options: ["Fra ryggstrengen, ventralt for røret", "Fra taket av røret, altså dorsalt", "Fra ektodermen over røret, altså dorsalt", "Fra hele røret jevnt, uten noen gradient"],
      explanation: "Ryggstrengen ligger på magesiden av røret, så Shh-konsentrasjonen er høyest ventralt og faller oppover. Alternativene som legger kilden dorsalt, snur hele mønstringen — de beskriver signalene som virker fra motsatt kant.",
    },
    {
      question: "Hvordan gir en signalgradient cellene informasjon om hvor de er?",
      options: ["Konsentrasjonen faller med avstanden, og cellene leser den", "Bare cellene nærmest kilden mottar signalet i det hele tatt", "Signalet flytter cellene fysisk til riktig posisjon", "Alle celler mottar samme mengde og svarer likt"],
      explanation: "Ulik konsentrasjon gir ulikt svar i cellen, og dermed ulike celletyper i et ordnet mønster. Alternativet om at bare de nærmeste mottar noe, ville gitt to grupper og ikke et mønster — gradientens poeng er nettopp den gradvise overgangen.",
    },
    {
      question: "Hva menes med et teratogen?",
      options: ["En påvirkning som kan forstyrre normal utvikling", "Et signalmolekyl som styrer kimlagenes dannelse", "En celletype som vandrer ut fra nevrallisten", "Et enzym som klipper endestykkene av kollagen"],
      explanation: "Ordet betegner en kategori påvirkninger, ikke ett bestemt stoff, og sårbarheten er størst mens organene anlegges. Alternativet om et signalmolekyl beskriver noe kroppen bruker selv, som Shh — ikke noe som forstyrrer utviklingen.",
    },
  ],
};

export default quizData_med1100;
