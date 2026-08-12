import type { QuizQuestion } from './quiz-data';

const quizData_svmet1010: Record<string, QuizQuestion[]> = {
  'svmet1010-0-1': [
    {
      question: "Hvordan er dagens eksamen i SVMET1010 bygd opp?",
      options: ["Som en firetimers digital skoleeksamen med to deler som begge må bestås hver for seg", "Som en firetimers digital skoleeksamen der delene vektes sammen til én samlet karakter", "Som en innlevert emneoppgave basert på eget feltarbeid og egne intervjuer", "Som en muntlig prøve der kandidaten forsvarer et selvvalgt kvalitativt forskningsopplegg"],
      explanation: "Riktig svar er firetimers digital skoleeksamen med to deler som må bestås hver for seg. At delene bare vektes sammen er den nære fellen: da kunne en sterk del reddet en svak, og det kan den ikke. Emneoppgaven var vurderingsform fra 2016 til 2021, men er i dag kursets arbeidsform, ikke eksamen.",
    },
    {
      question: "Hva er nevneren når denne boka oppgir hvor ofte et tema har vært prøvd?",
      options: ["31 oppgavesett, altså antallet oppgavesett som finnes i arkivet fra 2004 til 2025", "32 eksamensterminer, altså antallet terminer emnet har hatt eksamen i arkivperioden", "11 sensorveiledninger, altså antallet veiledninger arkivet inneholder fra 2016 til 2025", "Antallet enkeltoppgaver, slik at et tema kan telles flere ganger i samme sett"],
      explanation: "Riktig svar er 31 oppgavesett. De 32 terminene brukes bare til å beskrive arkivets bredde, siden fire av dem er emneoppgave-semestre uten oppgavesett. De 11 sensorveiledningene brukes til påstander om hva sensor ser etter, ikke til temafrekvens. Å telle enkeltoppgaver ville blåst opp alle tall uten å si mer om sannsynligheten.",
    },
    {
      question: "Hvilket tema står i flest av oppgavesettene?",
      options: ["Forskningsdesign, altså oppgaven om å utforme et komplett forskningsopplegg", "Deltagende observasjon og deltakerroller, med rollekontinuumet som kjerne", "Forskningsetikk, som også er obligatorisk komponent i alle designoppgavene", "Analyse av kvalitative data, med fasemodellen fra koding til begrepsutvikling"],
      explanation: "Riktig svar er forskningsdesign, med 20 av 31 oppgavesett. Deltakerroller følger tett på med 19 av 31 oppgavesett, etikk står i 15 av 31 oppgavesett og analyse i 13 av 31 oppgavesett. Alle fire er kjernetemaer, men rangeringen avgjør hvor lesetiden bør gå først.",
    },
    {
      question: "Hva kjennetegner kortsvarssjangeren, som denne boka koder T1?",
      options: ["Presis definisjon med navngitt pensumforfatter, typologi, eksempel og en løftesetning", "Kort drøfting der to posisjoner settes opp mot hverandre før svaret lander på én av dem", "Analyse av utlevert materiale der hver påstand belegges med et konkret sted i teksten", "Sammenligning av flere metoder langs akser som datatype og forskerrolle"],
      explanation: "Riktig svar er definisjon med avsender, typologi, eksempel og løftesetning. Kort drøfting hører til langsvarssjangrene, analyse av utlevert materiale er vedleggsanalysen, og sammenligning langs akser er metodesammenligningen. Kortsvaret måler presisjon, ikke drøftingsevne.",
    },
    {
      question: "Hvorfor kan ikke flervalgsdelen forberedes ved å lese gamle flervalgsspørsmål?",
      options: ["Spørsmålene publiseres aldri, nettopp fordi de gjenbrukes fra termin til termin", "Spørsmålene byttes helt ut hvert år, slik at gamle spørsmål raskt blir uaktuelle", "Flervalgsdelen har bare vært brukt én gang og regnes derfor som utfaset i emnet", "Flervalgsdelen dekker et annet pensum enn den store langsvarsdelen gjør"],
      explanation: "Riktig svar er at spørsmålene aldri publiseres fordi de gjenbrukes. At de skulle skiftes helt ut hvert år er den nære fellen — det er nettopp fordi de ikke skiftes ut at de holdes hemmelige. Flervalg er dokumentert i 1 av 31 oppgavesett, men delen telte 40 prosent der den ble brukt, og den dekker samme pensum som resten.",
    },
    {
      question: "Hva er forskjellen på et konstatert og et begrunnet metodevalg?",
      options: ["Det begrunnede sier hvorfor metoden passer akkurat dette spørsmålet, det konstaterte sier bare hva", "Det begrunnede står i flere setninger, mens det konstaterte er presset sammen til én enkelt kort setning", "Det begrunnede kombinerer flere metoder, mens det konstaterte holder seg til én enkelt metode", "Det begrunnede viser til pensum med forfatternavn, mens det konstaterte skriver helt fritt"],
      explanation: "Riktig svar er at begrunnelsen svarer på hvorfor metoden passer akkurat dette spørsmålet. Lengde er ikke kriteriet, og en begrunnelse kan stå i samme setning som valget. Å kombinere metoder gir ingen bonus i seg selv. Pensumforankring er et eget krav, og kan finnes i et helt ubegrunnet valg.",
    },
    {
      question: "En oppgave ber deg undersøke hvorfor folk melder seg som frivillige og hvordan arbeidet fordeles. Hva er det viktigste grepet før du skriver?",
      options: ["Å se at caset har to dimensjoner, og velge en egen metode for hver av dem", "Å bestemme hvor mange informanter opplegget skal ha, og hvordan de rekrutteres", "Å velge et teoretisk begrep som kan brukes gjennom hele analysedelen", "Å avklare hvilke etiske krav som gjelder for gruppen du skal undersøke"],
      explanation: "Riktig svar er å se de to dimensjonene og velge metode per dimensjon. Utvalg, teoribegrep og etikk er alle nødvendige komponenter i svaret, men de kommer etter at splitten er sett — å overse den er den dokumenterte feilen nummer 9, og den forplanter seg til alle de andre komponentene.",
    },
    {
      question: "Hva skjer hvis du besvarer begge de valgfrie langsvarsalternativene?",
      options: ["Bare den beste besvarelsen telles, så tiden brukt på den andre er tapt", "Begge besvarelsene telles, og gjennomsnittet av dem blir karakteren din", "Begge besvarelsene telles, og den svakeste trekker ned helhetsinntrykket", "Den først besvarte oppgaven telles, uansett hvilken som er best"],
      explanation: "Riktig svar er at bare den beste telles. Verken gjennomsnitt, trekk for den svakeste eller rekkefølgen avgjør. Poenget er praktisk: to halve svar tar like lang tid som ett helt, og gir mindre uttelling enn det ene hele ville gitt.",
    },
    {
      question: "Hva ligger i at vedleggsdrøfting av deltakerroller er den hyppigste vedleggssjangeren?",
      options: ["Den står i 5 av 31 oppgavesett, flere enn noen annen sjanger som bygger på utlevert materiale", "Den står i 20 av 31 oppgavesett, altså i omtrent to av tre sett gjennom hele arkivperioden 2004 til 2025", "Den er den eneste sjangeren som har vært i bruk i alle de tre eksamensregimene", "Den er den sjangeren de elleve sensorveiledningene bruker mest plass på å beskrive"],
      explanation: "Riktig svar er 5 av 31 oppgavesett, som er mer enn vedleggsanalysen med 3 av 31 oppgavesett. Tallet 20 av 31 oppgavesett hører til designsjangeren, som ikke bygger på vedlegg. Vedlegg kom først i 2015, så ingen vedleggssjanger kan ha vært med i alle regimene.",
    },
    {
      question: "Hva er poenget med å kjenne igjen sjangeren i en oppgaveformulering?",
      options: ["Sjangeren bestemmer hvilken struktur svaret skal ha, selv når temaet er det samme", "Sjangeren bestemmer hvor mange minutter oppgaven er verdt, uavhengig av vektingen", "Sjangeren bestemmer hvilken pensumforfatter du skal bygge hele svaret ditt på", "Sjangeren bestemmer om oppgaven er obligatorisk eller valgfri i det aktuelle settet"],
      explanation: "Riktig svar er at sjangeren styrer strukturen: samme tema kan bestilles som kortsvar, som design, som vedleggsdrøfting eller som sammenligning, og de fire svarene ser helt forskjellige ut. Tidsbruken følger av vektingen som står i settet, forfatterne følger av temaet, og om en oppgave er valgfri står i instruksen.",
    },
  ],
  'svmet1010-0-2': [
    {
      question: "Hva beskriver sensorveiledningene som vippekriteriet mellom to karakterer?",
      options: ["Om og hvordan kandidaten argumenterer for metodevalgene sine i besvarelsen", "Om kandidaten bruker flere metoder i kombinasjon i det samme forskningsopplegget", "Om kandidaten kjenner og gjengir alle de sju designkomponentene korrekt", "Om kandidaten bruker avansert teori fra litteratur utenfor emnets pensum"],
      explanation: "Riktig svar er argumentasjonen for metodevalgene. Metodekombinasjon gir ingen bonus i seg selv. Å gjengi komponentene korrekt er C-nivå så lenge de bare konstateres. Og avansert ekstern teori trekker ned dersom pensum ikke er hovedgrunnlaget.",
    },
    {
      question: "Hva kjennetegner C-besvarelsen i dette emnet?",
      options: ["Den er adekvat, men deskriptiv: gjør greit rede for stoffet uten å drøfte eller begrunne", "Den er faglig feil på flere punkter, men ryddig disponert og gjennomgående godt skrevet i språket", "Den mangler problemstilling og bygger på punktlister uten noen form for forklaring", "Den bruker kvantitativ logikk om kvalitative funn gjennom hele besvarelsen sin"],
      explanation: "Riktig svar er adekvat, men deskriptiv. Rene punktlister uten forklaring hører til D- og E-nivået, og gjennomgående kvantitativ logikk beskrives som strykgrunn. En C er faglig riktig — det er nettopp det som gjør den til en C og ikke lavere.",
    },
    {
      question: "Hva sier teoriterskelen i vektingsreglene?",
      options: ["Minst ett relevant begrep må brukes meningsfullt i analysen, ellers gir teorien ingen uttelling", "Minst tre teoretiske perspektiver må presenteres i innledningen for at svaret skal nå toppen av skalaen", "Teori er valgfritt i designoppgaven, siden metoden og datainnsamlingen veier tyngst", "Avansert teori premieres alltid høyere enn enkle begreper som normer og sanksjoner"],
      explanation: "Riktig svar er at minst ett begrep må brukes meningsfullt. Terskelen er lav, men absolutt, og teori er ikke valgfritt. Avansert teori som ikke brukes i analysen gir null uttelling, mens et enkelt begrep brukt konsekvent teller fullt.",
    },
    {
      question: "Hva innebærer etikk-asymmetrien i vurderingen?",
      options: ["Tynn etikk trekker ned bare der etikken er åpenbart relevant, men gode grep trekker alltid opp", "Tynn etikk trekker ned i alle oppgaver uansett tema, mens gode etikkgrep bare teller i sensitive case", "Etikk vurderes likt uansett case, fordi kravene i retningslinjene gjelder all forskning", "Etikk vurderes bare i frittstående etikkoppgaver, ikke som del av en designoppgave"],
      explanation: "Riktig svar er at asymmetrien går én vei: manglende etikk straffes der den åpenbart trengs, mens gode konkrete grep trekker opp overalt. Etikk er dessuten obligatorisk komponent i designoppgaven, ikke bare i frittstående etikkoppgaver.",
    },
    {
      question: "Hva sier sjekkliste-forbudet i sensorveiledningene?",
      options: ["Sensor skal ikke bruke kriteriene som avkrysningsliste — dybde og bredde er likeverdige veier til A", "Sensor skal ikke bruke kriteriene i det hele tatt, men vurdere det samlede helhetsinntrykket av besvarelsen", "Kandidaten skal ikke sette opp en sjekkliste over designkomponentene i selve besvarelsen", "Kandidaten skal ikke krysse av komponentene, men presentere dem i en fri og valgt rekkefølge"],
      explanation: "Riktig svar er at kriteriene ikke skal brukes som avkrysningsliste, og at dybde og bredde er likeverdige veier til toppkarakter. Kriteriene skal fortsatt brukes, bare ikke mekanisk. At kandidaten ikke skal sette opp en sjekkliste i teksten, eller skal velge rekkefølge fritt, er påstander om kandidatens tekst — mens regelen er en instruks til sensor.",
    },
    {
      question: "En besvarelse er svært god på metode og datainnsamling, men tynn på teori, etikk og funn. Hva blir resultatet?",
      options: ["Den lander typisk på C, fordi styrke på én komponent ikke oppveier mangler i flere", "Den lander typisk på B, fordi den ene komponenten alene er utført på et klart toppnivå", "Den lander typisk på B, fordi metodedelen veier tyngst i et metodefag", "Den lander typisk på E, fordi tre av de sju komponentene er mangelfulle"],
      explanation: "Riktig svar er C. Ubalanse er uttrykkelig beskrevet som en C-profil, ikke en B. At metodedelen skulle veie tyngst er den nære fellen — den er viktig, men den kompenserer ikke. E krever betydelige mangler uten kompenserende styrker, og her finnes en klar styrke.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom å beskrive og å begrunne et valg?",
      options: ["Begrunnelsen sier hvorfor valget passer akkurat dette spørsmålet, gjerne med alternativet nevnt", "Begrunnelsen bruker fagbegreper, mens beskrivelsen holder seg til hverdagslige og enkle formuleringer", "Begrunnelsen kommer i konklusjonen, mens beskrivelsen hører hjemme i innledningen", "Begrunnelsen viser til pensumforfatteren, mens beskrivelsen står uten noen referanse"],
      explanation: "Riktig svar er at begrunnelsen svarer på hvorfor akkurat dette valget passer akkurat dette spørsmålet. Fagbegreper, plassering i teksten og pensumreferanser kan alle være til stede i et helt ubegrunnet valg — de er andre krav, og de erstatter ikke begrunnelsen.",
    },
    {
      question: "Hva er bokas andre mantra om definisjoner?",
      options: ["En definisjon uten avsender er C-stoff, fordi begrepene peker på konkrete pensumsteder", "En definisjon uten eksempel er C-stoff, fordi eksempler trekker opp i alle sjangre", "En definisjon uten typologi er C-stoff, fordi variantene er det som testes i flervalget", "En definisjon uten drøfting er C-stoff, fordi drøfting er det som skiller nivåene"],
      explanation: "Riktig svar er at definisjonen mangler avsender. Eksempel, typologi og drøfting er alle nyttige, og de to første inngår i kortsvarsoppskriften, men det er koblingen begrep og forfatter som er selve mantraet — begrepene er den forfatterens begreper.",
    },
    {
      question: "Hvor mye tid anbefaler tidsbudsjettet i H2025-formatet på selve metodevalget med begrunnelse og bortvalg?",
      options: ["Omtrent 25 minutter av de rundt 150 minuttene langsvaret har til rådighet", "Omtrent 45 minutter, siden metodevalget er det viktigste enkeltvalget i besvarelsen", "Omtrent 10 minutter, siden selve valget er kort og resten er datainnsamlingsplanen", "Omtrent 60 minutter, siden bortvalget krever en egen drøfting av alternativene"],
      explanation: "Riktig svar er omtrent 25 minutter. Datainnsamlingsplanen har den største enkeltposten med 30 minutter. At metodevalget skulle kreve 45 eller 60 minutter er den nære fellen: valget er avgjørende, men begrunnelsen er kort — det er planen under som tar plass.",
    },
    {
      question: "Hva er riktig måte å bruke egen yrkeserfaring på i en besvarelse?",
      options: ["Som illustrasjon av et begrep som først er definert med avsender, aldri som belegg alene", "Som belegg for en påstand, siden førstehåndserfaring er en form for kvalitative data", "Som innledning til besvarelsen, slik at leseren straks forstår hvor engasjementet kommer fra", "Som erstatning for et pensumeksempel når du ikke husker noen relevant studie"],
      explanation: "Riktig svar er som illustrasjon, etter at begrepet er definert. Egen erfaring er ikke datamateriale i en eksamensbesvarelse og kan ikke etterprøves av sensor, så den kan verken bære en påstand eller erstatte et pensumeksempel. Å bruke den som belegg alene er synsing uten belegg.",
    },
    {
      question: "Hva er det hyppigst nevnte kjennetegnet på D- og E-nivå?",
      options: ["Uklar eller uforskbar problemstilling", "Manglende referanser til litteratur utenfor pensum", "For kort besvarelse i forhold til tiden som var satt av", "Manglende bruk av flere metoder i samme forskningsopplegg"],
      explanation: "Riktig svar er uklar eller uforskbar problemstilling. Det er dessuten den feilen som er billigst å rette, siden alle de andre komponentene henger av problemstillingen. Ekstern litteratur er ikke et krav, lengde er ikke et kriterium, og metodekombinasjon gir ingen bonus i seg selv.",
    },
    {
      question: "Hva menes med at et pensumeksempel skal «gjøre en jobb i argumentet»?",
      options: ["Eksempelet skal belegge eller illustrere en påstand du faktisk fremmer, ikke stå som pynt", "Eksempelet skal gjengis så detaljert at leseren kan følge hele studiens gjennomføring trinn for trinn", "Eksempelet skal hentes fra den nyeste studien på pensumlista for terminen din", "Eksempelet skal plasseres i konklusjonen, der det oppsummerer hovedpoenget ditt"],
      explanation: "Riktig svar er at eksempelet skal belegge eller illustrere en påstand du fremmer. Detaljnivå, alder på studien og plassering er ikke kriteriene — et kort eksempel midt i argumentet teller mer enn en fyldig gjengivelse som ikke er koblet til noe.",
    },
    {
      question: "Hva er problemet med en konklusjon som sier at «det kommer an på»?",
      options: ["Den er bare gyldig når den sier hva det kommer an på, ellers er forbeholdet ubegrunnet", "Den er alltid feil, fordi en besvarelse skal ta klart standpunkt i alle drøftingsoppgaver", "Den er alltid riktig i metodefag, fordi metodevalg alltid avhenger av problemstillingen", "Den trekker ned fordi sensor ikke får vite hvilken pensumforfatter du bygger på"],
      explanation: "Riktig svar er at forbeholdet må spesifiseres. Et forbehold er et verktøy, ikke pynt, og et ubegrunnet forbehold er samme feil som en ubegrunnet påstand. En skarp, begrunnet konklusjon er samtidig en fullgod toppform — det er ikke slik at avveining alltid er finere.",
    },
    {
      question: "Hva kjennetegner den prinsipielle rammen som toppbesvarelser legger først?",
      options: ["Fremgangsmåten plasseres i et bredere metodisk landskap før det konkrete valget drøftes", "Besvarelsen åpner med en definisjon av alle begrepene som skal brukes senere i selve teksten", "Besvarelsen åpner med en oversikt over hvilke deler av pensum den kommer til å bruke", "Besvarelsen åpner med en presentasjon av caset og hvorfor det er samfunnsaktuelt"],
      explanation: "Riktig svar er at fremgangsmåten plasseres i et bredere landskap, for eksempel hele rollekontinuumet før den ene rollen drøftes. En ren definisjonsliste, en pensumoversikt eller en samfunnsaktuell innledning gjør ikke den jobben — de sier hva du kan, ikke hvor valget hører hjemme.",
    },
    {
      question: "Hvorfor er det ikke sant å skrive at sensor «i tjue år har sett etter begrunnelse»?",
      options: ["Ingen sensorveiledning i arkivet er eldre enn V2016, så det er dokumentert fra og med da", "Kravet om begrunnelse ble innført først med den nye skoleeksamen fra og med H2024, og gjelder ikke eldre sett", "Kravet gjelder bare emneoppgave-semestrene, altså perioden fra 2016 til 2021", "Sensorveiledningene beskriver bare karakternivåene, aldri hva som skiller dem"],
      explanation: "Riktig svar er at arkivet ikke har noen veiledning eldre enn V2016. Kravet er godt dokumentert fra og med da, og gjennom alle tre vurderingsformene i perioden — det ble altså verken innført i 2024 eller begrenset til emneoppgavene. Veiledningene beskriver nettopp hva som skiller nivåene.",
    },
  ],
  'svmet1010-1-1': [
    {
      question: "Hva er kvalitative data?",
      options: ["Materiale som foreligger som tekst, tale, bilder og observerte handlinger, ikke som tall", "Materiale som er samlet inn fra få enheter, og som derfor ikke kan behandles statistisk i det hele tatt", "Materiale som beskriver hvor utbredt et fenomen er i en avgrenset del av befolkningen", "Materiale som er samlet inn uten at forskeren har lagt noen plan for hva som skal måles"],
      explanation: "Riktig svar er materialets form: tekst, tale, bilder og handlinger. At det er få enheter er en følge, ikke definisjonen — et kvantitativt materiale kan også være lite. Utbredelse er kvantitativ metodes område, og fravær av plan er ikke kvalitativ metode, men fravær av design.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom tilfeldig og strategisk utvalg?",
      options: ["Hvem som avgjør hvem som kommer med: en tilfeldighetsmekanisme eller forskerens vurdering av relevans", "Hvor mange enheter utvalget består av, siden strategiske utvalg alltid er vesentlig mindre enn tilfeldige", "Hvor grundig forskeren har tenkt gjennom sammensetningen før innsamlingen starter", "Om utvalget er trukket fra en liste over befolkningen eller rekruttert gjennom en portvakt"],
      explanation: "Riktig svar er hvem som avgjør sammensetningen. Størrelse er en tendens, ikke definisjonen. Grundighet er ikke kriteriet — et tilfeldig utvalg er ikke mindre gjennomtenkt. Og rekrutteringsvei er noe annet enn utvalgstype: en portvakt kan brukes i begge tilfeller.",
    },
    {
      question: "Hva er den vanligste feilen når representativitet brukes i en kvalitativ besvarelse?",
      options: ["At kandidaten beklager at utvalget er for lite til å være representativt", "At kandidaten oppgir hvor mange informanter utvalget faktisk består av", "At kandidaten beskriver hvordan informantene ble rekruttert til studien", "At kandidaten sier at utvalget er satt sammen for å gi variasjon i erfaringer"],
      explanation: "Riktig svar er beklagelsen, fordi den bruker et kvantitativt kvalitetskrav på et kvalitativt opplegg — utvalget er ikke ment å være representativt. Å oppgi antall og rekrutteringsvei er derimot krav om transparens, og variasjon er en helt riktig begrunnelse for et strategisk utvalg.",
    },
    {
      question: "Hva er forskjellen på overførbarhet og statistisk generalisering?",
      options: ["Overførbarhet hviler på beskrivelsen av det studerte, statistisk generalisering på trekkemåten", "Overførbarhet gjelder små utvalg, statistisk generalisering gjelder utvalg over en viss størrelse", "Overførbarhet er en svakere form for generalisering som brukes når materialet er begrenset", "Overførbarhet vurderes av forskeren selv, mens statistisk generalisering vurderes av leseren"],
      explanation: "Riktig svar er grunnlaget: beskrivelse mot trekkemåte. Størrelse er ikke skillet, og overførbarhet er ikke en svakere versjon av det samme, men en annen operasjon. Hvem som vurderer overføringen er et eget drøftingsspørsmål i faget, ikke det som skiller de to begrepene.",
    },
    {
      question: "Hva er hovedforskjellen på en fokusgruppe og et gruppeintervju?",
      options: ["I fokusgruppen er samspillet mellom deltakerne selve dataene, ikke bare svarene deres", "I fokusgruppen deltar flere personer samtidig, mens gruppeintervjuet tar én om gangen", "I fokusgruppen er temaene bestemt på forhånd, mens gruppeintervjuet er helt åpent", "I fokusgruppen er deltakerne ukjente for hverandre, mens gruppeintervjuet samler bekjente"],
      explanation: "Riktig svar er at interaksjonen er dataene. Begge former har flere deltakere samtidig, og begge kan ha forhåndsbestemte temaer. Gruppesammensetningen, altså om deltakerne kjenner hverandre, er et designvalg innenfor fokusgruppen, ikke det som definerer den.",
    },
    {
      question: "En oppgave spør hvorfor folk melder seg som frivillige og hvordan arbeidet fordeles. Hva peker de to spørreordene mot?",
      options: ["«Hvorfor» peker mot intervju om motiver, «hvordan» peker mot observasjon av praksis", "«Hvorfor» peker mot observasjon av årsaker, «hvordan» peker mot intervju om fremgangsmåte", "Begge peker mot intervju, siden begge gjelder forhold deltakerne selv kan gjøre rede for", "Begge peker mot observasjon, siden begge gjelder forhold som utspiller seg i praksis"],
      explanation: "Riktig svar er motiver til intervju og praksis til observasjon. Motiver er noe folk kan formulere selv; praksis er vanemessig og beskrives derfor upresist i ettertid. Å legge begge til én metode er den vanligste måten å overse den ene dimensjonen på.",
    },
    {
      question: "Hva menes med tykke beskrivelser?",
      options: ["Beskrivelser som tar med konteksten som gjør handlingen forståelig for leseren", "Beskrivelser som er lange og detaljerte, slik at ingenting av det observerte utelates", "Beskrivelser som er skrevet av flere forskere i felt, slik at flere blikk er representert", "Beskrivelser som gjengir informantenes egne ord ordrett, uten forskerens tolkninger"],
      explanation: "Riktig svar er konteksten som gjør handlingen tolkbar. Lengde er ikke kriteriet — en tykk beskrivelse kan være kort. Flere observatører og ordrette sitater er andre grep, og et ordrett sitat uten kontekst er nettopp en tynn beskrivelse.",
    },
    {
      question: "Hva er problemet med å skrive «sju av ti informanter nevnte tidspress, altså gjelder dette for 70 prosent»?",
      options: ["Kvalitative materialer kan ikke regnes om til andeler, og det som ikke nevnes er ikke dermed fraværende", "Sju informanter er for få til at prosentregning gir mening; med tjue informanter ville regnestykket holdt", "Prosentangivelser hører ikke hjemme i akademisk tekst uten et mål på statistisk usikkerhet", "Informantene kan ha ulik forståelse av tidspress, så begrepet må defineres før det telles"],
      explanation: "Riktig svar er at kvalitative materialer ikke bærer andeler, og at et tema som ikke ble nevnt kan skyldes at samtalen tok en annen retning. Antallet er ikke poenget — heller ikke tjue informanter gir grunnlag for prosent. Kravet om usikkerhetsmål og behovet for å definere tidspress er reelle forhold, men ingen av dem er kjernefeilen.",
    },
    {
      question: "Hva kjennetegner et eksplorerende forskningsspørsmål?",
      options: ["Det utforsker et felt vi vet lite om, og er formulert åpent nok til at svaret kan overraske", "Det er formulert uten avgrensning i tid og sted, slik at undersøkelsen kan følge det som dukker opp", "Det tester en antakelse forskeren har formulert på forhånd, mot et materiale hun samler inn", "Det er formulert som et spørsmål om hva som bør gjøres på et område der praksis varierer"],
      explanation: "Riktig svar er åpenhet for det uventede i et lite kjent felt. Åpen betyr likevel ikke uavgrenset — et spørsmål uten avgrensning er uforskbart. Å teste en forhåndsformulert antakelse er den motsatte typen spørsmål, og et spørsmål om hva som bør gjøres er normativt og kan ikke besvares empirisk.",
    },
    {
      question: "Hvorfor er dybde og bredde et bytteforhold?",
      options: ["Mye informasjon om få enheter utelukker lite informasjon om mange, innenfor samme undersøkelse", "Dybde krever lang tid i felt, mens bredde krever mange forskere som samler inn parallelt", "Dybde gir mer pålitelige data enn bredde, siden forskeren kan kontrollere hvert enkelt svar", "Bredde gir mer pålitelige data enn dybde, siden flere enheter reduserer betydningen av tilfeldigheter"],
      explanation: "Riktig svar er at de to trekker på samme ressurs innenfor én undersøkelse. Ressursbruk og bemanning er praktiske forhold, ikke selve bytteforholdet. Og ingen av de to gir mer pålitelige data enn den andre — de gir ulike typer kunnskap, og det er hele poenget.",
    },
    {
      question: "Hva er analytisk generalisering?",
      options: ["Å slutte fra et konkret tilfelle til et begrep eller en mekanisme som kan brukes videre", "Å slutte fra et tilfeldig trukket utvalg til befolkningen ved hjelp av sannsynlighetsregning", "Å sammenligne funnene sine med resultater fra tidligere studier på samme område", "Å samle flere kvalitative studier og telle hvor mange av dem som fant det samme"],
      explanation: "Riktig svar er slutningen til begrep eller mekanisme. Slutning ved sannsynlighetsregning er statistisk generalisering. Sammenligning med tidligere studier er en del av enhver forskningsprosess, og å telle på tvers av studier er en helt annen operasjon som forutsetter sammenlignbare mål.",
    },
    {
      question: "Hva skiller en kohortundersøkelse fra en longitudinell undersøkelse generelt?",
      options: ["Kohorten er avgrenset ved en felles inngangshendelse i samme tidsrom", "Kohorten følges over lengre tid enn andre longitudinelle undersøkelser gjør", "Kohorten består av personer i samme alder, mens longitudinelle studier blander aldersgrupper", "Kohorten undersøkes med kvantitative metoder, mens longitudinelle studier kan være kvalitative"],
      explanation: "Riktig svar er den felles inngangshendelsen. Varighet er ikke skillet, og felles alder er bare ett eksempel på en slik hendelse — å begynne i samme utdanning teller også. Begge typer kan gjennomføres med begge metodetradisjoner.",
    },
    {
      question: "Hva er en case-studie?",
      options: ["Et design som avgrenser undersøkelsen til ett eller få tilfeller, ofte med flere datakilder", "En datainnsamlingsmetode der forskeren følger én enkelt person tett over en lengre sammenhengende periode", "En studie med få informanter, valgt fordi det ikke var mulig å rekruttere flere", "En studie der ett funn brukes som eksempel på et mønster som allerede er kjent"],
      explanation: "Riktig svar er at case-studien er et design, ikke en datainnsamlingsmetode: innenfor caset kan du intervjue, observere og lese dokumenter. Den er heller ikke definert ved få informanter eller ved nødløsning — avgrensningen går rundt et tilfelle med grenser, og du skal kunne si hva tilfellet er et tilfelle av.",
    },
    {
      question: "Hva er den viktigste begrensningen ved deltagende observasjon?",
      options: ["Den viser hva som skjer, men ikke hvorfor den enkelte gjorde det", "Den krever at forskeren skjuler sin rolle for å unngå å påvirke feltet", "Den gir for lite materiale til at analysen kan bli tilstrekkelig grundig", "Den kan bare brukes i miljøer der forskeren allerede er kjent fra før"],
      explanation: "Riktig svar er at motiver ikke er synlige — de må det spørres om. Skjult rolle er ikke et krav, men et etisk valg med tunge motforestillinger. Observasjon over tid gir svært mye materiale, og forkunnskap om feltet er en fordel, ikke en betingelse.",
    },
    {
      question: "Hva menes med at forskeren er redskapet i kvalitativ forskning?",
      options: ["Det er forskerens oppmerksomhet og tolkning som avgjør hva som blir data", "Det er forskerens egne meninger om temaet som utgjør analysens hovedinnhold", "Det er forskeren som må gjennomføre alle deler av undersøkelsen personlig", "Det er forskerens faglige bakgrunn som avgjør om studien blir godkjent"],
      explanation: "Riktig svar er at oppmerksomhet og tolkning avgjør hva som blir data. Det betyr ikke at funnene er forskerens meninger — det betyr at posisjonen må gjøres rede for. At arbeidet må gjøres alene, eller at bakgrunn avgjør godkjenning, er noe helt annet.",
    },
    {
      question: "Hva er riktig formulering om hva en kvalitativ studie av åtte informanter kan si?",
      options: ["Den kan vise at et mønster finnes og hvordan det arter seg, men ikke hvor vanlig det er", "Den kan vise at et mønster er vanlig i gruppen, men ikke hvorfor det oppstår hos den enkelte", "Den kan vise at et mønster gjelder alle i lignende situasjon, forutsatt at utvalget er variert", "Den kan vise hvordan mønsteret fordeler seg, forutsatt at informantene er valgt strategisk"],
      explanation: "Riktig svar er at studien viser at noe finnes og hvordan det arter seg. De tre andre bruker alle fordelingsspråk: vanlig, gjelder alle, fordeler seg. Verken variasjon i utvalget eller strategisk sammensetning gir grunnlag for slike påstander — det ville krevd en annen trekkemåte.",
    },
    {
      question: "Hva er forskjellen på egengenererte og foreliggende data?",
      options: ["Egengenererte data skapes i møtet med forskeren, foreliggende finnes uavhengig av henne", "Egengenererte data er kvalitative, mens foreliggende data alltid er kvantitative", "Egengenererte data er samlet inn av forskeren selv, foreliggende av andre forskere", "Egengenererte data er nyere enn foreliggende data, som typisk er eldre historisk materiale"],
      explanation: "Riktig svar er om materialet finnes uavhengig av forskeren. Foreliggende data kan være både kvalitative og kvantitative, og de er ofte ikke laget av forskere i det hele tatt — et ordensreglement eller en forumtråd er foreliggende data. Alder er heller ikke skillet.",
    },
    {
      question: "Hvorfor er fleksibiliteten i kvalitative design både en styrke og en kostnad?",
      options: ["Den lar undersøkelsen følge materialet, men gjør den umulig å gjenta nøyaktig", "Den lar forskeren endre problemstillingen fritt, men gjør analysen mer tidkrevende", "Den lar forskeren droppe komponenter underveis, men svekker sammenhengen i designet", "Den lar utvalget vokse underveis, men gjør det vanskelig å beregne utvalgets størrelse"],
      explanation: "Riktig svar er at fleksibiliteten gir tilpasning på bekostning av repeterbarhet, og at svaret på det er transparens. De tre andre beskriver ikke fleksibilitet, men mangler: fri endring av problemstillingen, kutt i komponenter og ukontrollert vekst i utvalget er alle noe annet enn begrunnet justering.",
    },
    {
      question: "Hva er poenget med å skrive ut hva studien ikke kan si noe om?",
      options: ["Det presiserer gyldighetsområdet, og er et kjennetegn ved besvarelser på toppnivå", "Det er en høflighetsformulering som forventes i akademisk skriving generelt", "Det beskytter forskeren mot kritikk hvis andre studier senere finner noe annet", "Det erstatter kravet om å begrunne metodevalget, siden begrensningene forklarer valget"],
      explanation: "Riktig svar er at det presiserer gyldighetsområdet, som veiledningene beskriver som et toppnivåtrekk. Det er verken en høflighetsfrase eller en ansvarsfraskrivelse, og det erstatter ingenting — begrunnelsen for metodevalget er et eget krav som fortsatt må oppfylles.",
    },
    {
      question: "Hvilken påstand om forholdet mellom kvalitativ og kvantitativ metode er faglig riktig?",
      options: ["De svarer på ulike spørsmål, og valget mellom dem følger av hva du vil vite", "Den kvalitative gir dypere innsikt, mens den kvantitative gir en mer overfladisk oversikt", "Den kvantitative er mer vitenskapelig, siden funnene kan etterprøves av andre forskere", "De gir samme type kunnskap, men den kvalitative er billigere å gjennomføre i praksis"],
      explanation: "Riktig svar er at de svarer på ulike spørsmål. Både rangeringen den ene og den andre veien er faglig gale, og de avslører den samme manglende forståelsen. At de skulle gi samme type kunnskap er nettopp det de ikke gjør — det er hele grunnlaget for å velge.",
    },
    {
      question: "Hva kjennetegner en survey som datainnsamlingsform?",
      options: ["Standardiserte spørsmål med faste svaralternativer, slik at svarene kan sammenlignes og telles", "Åpne spørsmål stilt til svært mange, slik at bredden i formuleringene kan analyseres kvalitativt", "En samtale der temaene er faste, mens rekkefølgen tilpasses den enkelte som svarer", "En innsamling av foreliggende opplysninger fra registre, uten kontakt med dem det gjelder"],
      explanation: "Riktig svar er standardiseringen. Åpne spørsmål til mange forekommer, men de bryter med det som gir surveyen dens styrke. En samtale med fast tema og fleksibel rekkefølge er et semistrukturert intervju, og registerinnsamling er en helt annen datakilde.",
    },
    {
      question: "Hva er en undersøkelsesenhet?",
      options: ["Den enheten undersøkelsen henter data om, enten det er en person, en situasjon eller en tekst", "Den enkeltpersonen som gir informasjon til forskeren gjennom et intervju eller en lengre samtale", "Den avgrensede gruppen som utvalget trekkes fra i en kvantitativ undersøkelse", "Den delen av materialet som kodes samlet i den første fasen av analysen"],
      explanation: "Riktig svar er at enheten er det data hentes om, og at den ikke behøver å være en person. Informant er et snevrere begrep, gruppen det trekkes fra kalles noe annet, og en kodeenhet i analysen er et tredje begrep. Å avklare hva som er én enhet, endrer både utvalg og analyse.",
    },
    {
      question: "Hva er den eksamenskritiske distinksjonen i dokumentanalyse?",
      options: ["Om teksten leses som beretning om noe, eller som levning etter situasjonen som frembrakte den", "Om teksten er offentlig tilgjengelig eller må innhentes med særskilt tillatelse fra en institusjon", "Om teksten er skrevet av en enkeltperson eller vedtatt av et organ på vegne av flere", "Om teksten er samtidig med hendelsen den omtaler, eller skrevet ned lenge etterpå"],
      explanation: "Riktig svar er skillet mellom beretning og levning, altså mellom å lese teksten for det den forteller om og for det den er et spor av. Tilgjengelighet, forfatterskap og nærhet i tid er alle relevante kildekritiske forhold, men de er ikke det funksjonelle skillet begrepsparet handler om.",
    },
    {
      question: "Hvorfor er en intervjuguide med faste formuleringer i fast rekkefølge et problem?",
      options: ["Den gjør intervjuet til et muntlig spørreskjema, og fjerner muligheten til å følge opp", "Den gjør intervjuene for like hverandre, slik at analysen blir ensformig å gjennomføre", "Den gjør intervjuet for langt, siden alle spørsmål må stilles til alle informanter", "Den gjør det vanskelig for informanten å forstå sammenhengen mellom spørsmålene"],
      explanation: "Riktig svar er at guiden da fungerer som et kvantitativt instrument, uten mulighet for oppfølging. Sammenlignbarhet mellom intervjuer er faktisk et argument FOR en viss struktur, så ensformighet er ikke problemet. Lengde og forståelighet er praktiske forhold, ikke det metodiske.",
    },
    {
      question: "Hva er den riktige responsen når et kvalitativt funn skal si noe utover de studerte?",
      options: ["Å beskrive det studerte grundig, slik at leseren kan vurdere hvilke lignende tilfeller det kan belyse", "Å øke antallet informanter til materialet er stort nok til at slutninger kan trekkes", "Å supplere med en spørreundersøkelse som bekrefter at funnene gjelder i befolkningen", "Å begrense konklusjonen til de studerte informantene, siden kvalitative funn ikke sier noe utover dem"],
      explanation: "Riktig svar er grundig beskrivelse som grunnlag for leserens vurdering — det er overførbarhet. Flere informanter endrer ikke logikken. Et supplerende survey er en annen undersøkelse, ikke et grep i denne. Og å nekte for at funnene betyr noe utover utvalget, er å gi fra seg poenget med analytisk generalisering.",
    },
    {
      question: "Hva gir webetnografi som et dybdeintervju ikke gir?",
      options: ["Praksisen slik den utspiller seg mellom deltakerne, uten at noen har spurt dem om den", "Sikker kunnskap om hvem deltakerne er, siden skriftlig materiale kan etterprøves", "Deltakernes egne begrunnelser for hvorfor de handler slik de gjør på plattformen", "Muligheten til å be om utdyping når noe i materialet er uklart eller direkte motsetningsfylt"],
      explanation: "Riktig svar er praksisen slik den utspiller seg uten forskerens spørsmål. Hvem som står bak er nettopp usikkert på nett. Begrunnelser og oppfølging er derimot intervjuets styrker — det er de to metodene bytter mot hverandre.",
    },
    {
      question: "Hva er riktig om nærhet til feltet i kvalitativ forskning?",
      options: ["Den er selve datakilden, men påvirker det den studerer og må derfor gjøres rede for", "Den er en feilkilde som skal fjernes ved å standardisere forskerens egen fremgangsmåte", "Den er et etisk problem som løses ved at forskeren holder seg anonym i feltet", "Den er nødvendig bare i observasjonsstudier, ikke i intervjubaserte opplegg"],
      explanation: "Riktig svar er at nærheten er datakilden og samtidig må håndteres. Å fjerne den ved standardisering er den kvantitative løsningen på et annet problem. Anonymitet løser ikke påvirkningen, og nærhet gjelder også intervjuer — en samtale er et møte mellom to.",
    },
    {
      question: "Hvorfor er «utbredelse» et ord du ikke skal bruke om dine egne kvalitative funn?",
      options: ["Fordi utbredelse er en påstand om hvor vanlig noe er, og det krever et tellbart materiale", "Fordi ordet er upresist og bør erstattes med et mer faglig presist uttrykk uansett metodetype", "Fordi utbredelse bare kan fastslås av registerdata, ikke av spørreundersøkelser", "Fordi ordet forutsetter at fenomenet er negativt, og det er en verdivurdering"],
      explanation: "Riktig svar er at utbredelse er en fordelingspåstand som krever et materiale som kan telles. Ordet er ikke upresist i kvantitativ sammenheng, og både registerdata og surveyer kan brukes til å fastslå det. Noen verdivurdering ligger ikke i ordet.",
    },
    {
      question: "En studie følger de samme ansatte gjennom tre år med gjentatte intervjuer. Hva er dette?",
      options: ["Et longitudinelt opplegg, fordi de samme enhetene følges over tid", "Et tverrsnittsopplegg, fordi hvert intervju gir et bilde av situasjonen der og da", "En kohortundersøkelse, fordi de ansatte deler samme arbeidsplass", "En case-studie, fordi undersøkelsen er avgrenset til én arbeidsplass"],
      explanation: "Riktig svar er longitudinelt, siden de samme enhetene følges over tid. Tverrsnitt er det motsatte. Felles arbeidsplass er ikke en inngangshendelse i samme tidsrom, så det gjør det ikke til en kohort. Og designet kan godt være en case-studie i tillegg — men det er ikke det spørsmålet gjelder.",
    },
    {
      question: "Hva er den sikreste måten å begrunne et kvalitativt metodevalg på?",
      options: ["Å si hva den kvantitative varianten av undersøkelsen ville gitt i stedet, og hvorfor det ikke er nok", "Å vise til at kvalitative metoder er godt egnet til å studere mennesker og deres livsverden på nært hold", "Å vise til at flere sentrale pensumforfattere anbefaler metoden for denne typen spørsmål", "Å vise til at metoden er praktisk gjennomførbar innenfor rammene prosjektet har"],
      explanation: "Riktig svar er å nevne hva alternativet ville gitt. At kvalitative metoder er godt egnet til å studere mennesker på nært hold, og at pensumforfattere anbefaler metoden, er sanne påstander, men de kunne stått i en hvilken som helst besvarelse om et hvilket som helst tema, og en begrunnelse som kan flyttes fritt er ikke en begrunnelse. Gjennomførbarhet er et reelt hensyn, men det sier ikke at metoden passer spørsmålet.",
    },
  ],
  'svmet1010-1-2': [
    {
      question: "Hva er overførbarhet slik Fangen bruker begrepet?",
      options: ["At funn kan belyse lignende fenomener når kjennetegnene ved det studerte er identifisert", "At funn kan overføres til befolkningen når utvalget er stort nok til å dekke variasjonen", "At funn kan brukes videre dersom flere uavhengige studier har kommet til det samme", "At funn kan anvendes praktisk av dem som arbeider i feltet undersøkelsen handler om"],
      explanation: "Riktig svar er belysning av lignende fenomener gjennom identifiserte kjennetegn. Utvalgsstørrelse er den nære fellen — mekanismen er beskrivelse, ikke antall. Gjentakelse i flere studier er noe annet, og praktisk anvendbarhet hører til pragmatisk validitet.",
    },
    {
      question: "Hva hviler statistisk generalisering på, som overførbarhet ikke hviler på?",
      options: ["Trekkemåten, altså at enhetene er valgt ved en tilfeldighetsmekanisme", "Antallet enheter, altså at utvalget er stort nok til at slutningen blir sikker", "Beskrivelsen av enhetene, altså at leseren kan vurdere om noe ligner", "Analysemetoden, altså at materialet er behandlet med et standardisert opplegg"],
      explanation: "Riktig svar er trekkemåten. Antall er ikke tilstrekkelig: femti informanter valgt strategisk gir ikke statistisk generalisering. Beskrivelsen er nettopp det overførbarhet hviler på, og standardisert analyse endrer ikke grunnlaget for slutningen.",
    },
    {
      question: "Hva er analytisk generalisering?",
      options: ["Å slutte fra et konkret tilfelle til et begrep eller en mekanisme som kan prøves andre steder", "Å slutte fra et konkret tilfelle til hvor vanlig fenomenet er i en tilsvarende gruppe", "Å slutte fra flere kvalitative studier samlet, ved å telle hvor mange av dem som fant det samme mønsteret", "Å slutte fra teorien til det konkrete tilfellet, ved å utlede forventninger på forhånd"],
      explanation: "Riktig svar er slutningen til begrep eller mekanisme. Utbredelse er en fordelingspåstand materialet ikke bærer. Å telle på tvers av studier er en helt annen operasjon, og å utlede forventninger fra teori er deduksjon, som går motsatt vei.",
    },
    {
      question: "Hva er de to trinnene i mekanismen bak overførbarhet?",
      options: ["Identifisere kjennetegnene ved det studerte, og deretter lete etter paralleller", "Beskrive utvalget grundig, og deretter sammenligne det med befolkningen det er hentet fra", "Kode materialet tematisk, og deretter formulere en generell påstand om gruppen", "Kontrollere funnene med informantene, og deretter justere konklusjonen etter innspillene"],
      explanation: "Riktig svar er kjennetegn og paralleller. Sammenligning med befolkningen forutsetter en trekkemåte som ikke finnes her. Koding og tematisk analyse er analysearbeid, ikke overføring, og tilbakespill til informantene hører til kommunikativ validitet.",
    },
    {
      question: "Hva er kommunikativ validitet?",
      options: ["Gyldighet prøvd gjennom dialog og gjennomsiktig argumentasjon om tolkningene", "Gyldighet prøvd gjennom at deltakerne godkjenner forskerens ferdige konklusjoner", "Gyldighet prøvd gjennom at teksten er skrevet i et klart og tilgjengelig språk", "Gyldighet prøvd gjennom at flere forskere koder det samme materialet uavhengig"],
      explanation: "Riktig svar er dialog og gjennomsiktig argumentasjon. Godkjenning fra deltakerne er den nære fellen: dialogen prøver tolkningen, den avgjør den ikke, og forskeren kan se noe deltakerne ikke ser. Språklig klarhet og flere kodere er andre kvalitetsgrep.",
    },
    {
      question: "Hva er pragmatisk validitet?",
      options: ["Gyldighet prøvd gjennom om forståelsen faktisk lar seg bruke i det den handler om", "Gyldighet prøvd gjennom om undersøkelsen var praktisk gjennomførbar med de ressursene som fantes", "Gyldighet prøvd gjennom om metoden er anerkjent innenfor den aktuelle forskningstradisjonen", "Gyldighet prøvd gjennom om funnene kan brukes som grunnlag for politiske anbefalinger"],
      explanation: "Riktig svar er prøven i møte med det tolkningen handler om. Gjennomførbarhet er et praktisk hensyn i planleggingen, ikke en validitetsform. Anerkjennelse av metoden er noe annet, og politisk anvendelse er verken et krav eller et kriterium.",
    },
    {
      question: "Hva er hovedinnvendingen mot å bruke reliabilitetsbegrepet i kvalitativ forskning?",
      options: ["Begrepet forutsetter stabil gjentakelse med samme instrument, og instrumentet er her forskeren selv", "Begrepet er utviklet i psykologisk testteori og hører ikke hjemme i samfunnsvitenskapelig forskning", "Begrepet krever at materialet er tallfestet før stabiliteten i det hele tatt kan vurderes", "Begrepet forutsetter at flere forskere er til stede samtidig under datainnsamlingen"],
      explanation: "Riktig svar er forutsetningen om stabil gjentakelse med samme instrument. Fagopprinnelse er ikke argumentet, og begrepet krever verken tallfesting eller flere forskere. Merk at uenigheten gjelder ordet, ikke om fremgangsmåten kan være tilfeldig — det kan den ikke.",
    },
    {
      question: "Hva setter kvalitativ forskning i stedet for repeterbarhet?",
      options: ["Transparens, altså innsyn i fremgangsmåte, data og valg underveis", "Triangulering, altså at flere metoder brukes på det samme forskningsspørsmålet", "Metning, altså at innsamlingen fortsetter til nye data ikke tilfører noe nytt", "Anonymisering, altså at deltakernes identitet skjules i den publiserte teksten"],
      explanation: "Riktig svar er transparens: kontrollen flyttes fra å gjøre om igjen til å granske grunnlaget. Å bruke flere metoder gir ingen bonus i seg selv. Metning er en stoppregel for innsamlingen, og anonymisering er et etisk grep — ingen av dem svarer på etterprøvbarhet.",
    },
    {
      question: "Hvorfor leter man etter negative tilfeller?",
      options: ["Fordi et mønster som overlever et forsøk på å motsi det, står sterkere enn et uprøvd mønster", "Fordi alle grupper inneholder noen avvikere, og analysen bør nevne at det fantes unntak i materialet", "Fordi utvalget må dekke hele variasjonsbredden for at funnene skal kunne overføres", "Fordi sensor forventer at kandidaten viser kjennskap til Weiss' begrepsapparat"],
      explanation: "Riktig svar er holdbarhetsargumentet. Å nevne at unntak fantes er ikke poenget — unntaket skal brukes til å avgrense eller justere påstanden. Full variasjonsbredde er et utvalgsspørsmål, og å gjøre noe fordi sensor forventer det er ikke en faglig begrunnelse.",
    },
    {
      question: "Hva er forskjellen på refleksivitet og transparens?",
      options: ["Refleksivitet gjelder hvem forskeren var, transparens gjelder hva hun faktisk gjorde", "Refleksivitet gjelder analysen, transparens gjelder datainnsamlingen", "Refleksivitet er et krav i alle fag, transparens bare i kvalitativ forskning", "Refleksivitet handler om å innrømme svakheter, mens transparens handler om å fremheve styrker"],
      explanation: "Riktig svar er skillet mellom posisjon og prosedyre. Begge gjelder hele forskningsprosessen, ikke hver sin fase. Og refleksivitet er ikke å innrømme svakheter — det er å analysere instrumentet, som i kvalitativ forskning er forskeren selv.",
    },
    {
      question: "Hvilke opplysninger dekker minstekravet til transparens?",
      options: ["Tid, sted, varighet, antall informanter og relasjonen til dem", "Problemstilling, metodevalg, analysestrategi og forventede funn", "Utvalgstype, teoretisk rammeverk, kodingsprosedyre og funn", "Finansiering, godkjenninger, samtykkeform og lagringsrutiner"],
      explanation: "Riktig svar er de fem opplysningene om omstendighetene. Problemstilling, metode og analysestrategi er designkomponenter; utvalgstype, teori og koding er analysens deler; finansiering, godkjenning og lagring er formelle og etiske forhold. Alle er viktige, men ingen av dem svarer på hva som faktisk ble gjort under innsamlingen.",
    },
    {
      question: "Hva gjør «utvalget mitt er for lite til å være representativt» til en problematisk setning?",
      options: ["Den måler et kvalitativt opplegg med et kvantitativt kvalitetskrav", "Den underslår at utvalget kunne vært utvidet med flere informanter", "Den røper at forskeren ikke har begrunnet utvalgssammensetningen sin", "Den er unødvendig, siden leseren allerede vet hvor mange informanter det er"],
      explanation: "Riktig svar er den feilaktige målestokken: et strategisk utvalg er ikke ment å være representativt. At utvalget kunne vært større er ikke poenget — logikken endres ikke av antallet. Og setningen sier ingenting om hvorvidt sammensetningen er begrunnet.",
    },
    {
      question: "Hva er testen på om en selvkritikk er faglig eller en unnskyldning?",
      options: ["Om innvendingen kunne vært rettet med et annet valg innenfor samme metodetradisjon", "Om innvendingen er formulert høflig og uten å svekke tilliten til studiens funn", "Om innvendingen viser til en konkret pensumforfatter som har behandlet nettopp dette problemet", "Om innvendingen står i metodedelen og ikke først i besvarelsens avslutning"],
      explanation: "Riktig svar er om innvendingen kan rettes innenfor samme tradisjon. Formuleringsstil, pensumreferanse og plassering er ikke kriteriet — en høflig, pensumforankret unnskyldning midt i metodedelen er fortsatt en unnskyldning.",
    },
    {
      question: "Hva menes med belegg i materialet?",
      options: ["At hver påstand i analysen kan knyttes til et konkret sted i dataene", "At analysen bygger på tilstrekkelig mange sitater fra hver enkelt informant", "At funnene støttes av tidligere forskning på det samme temaet", "At materialet er stort nok til at slutningene ikke hviler på enkelttilfeller"],
      explanation: "Riktig svar er koblingen mellom påstand og sted i dataene. Antall sitater er ikke kriteriet, og et sitat uten angitt funksjon er illustrasjon, ikke belegg. Tidligere forskning og materialets størrelse er andre forhold.",
    },
    {
      question: "Hva innebærer Grues krav om at analysen må stå sin prøve?",
      options: ["At analysen skal kunne forsvares når noen går tilbake til materialet og etterprøver den", "At analysen skal ha vært vurdert av fagfeller før den publiseres i et tidsskrift", "At analysen skal kunne gjentas av en annen forsker med det samme resultatet", "At analysen skal bygge på en anerkjent analysetradisjon med en fastlagt og beskrevet fremgangsmåte"],
      explanation: "Riktig svar er at analysen skal tåle en prøve mot materialet. Fagfellevurdering er en institusjonell ordning, ikke kravet selv. Identisk gjentakelse er repeterbarhet, som kvalitativ forskning ikke oppfyller, og kravet gjelder uansett analysetradisjon.",
    },
    {
      question: "En besvarelse gjør grundig rede for validitetsbegrepet, men planen for datainnsamling nevner det aldri igjen. Hva er problemet?",
      options: ["Begrepet presenteres uten å brukes, og gir dermed ingen uttelling", "Begrepet er for avansert for en designoppgave på dette nivået", "Begrepet hører hjemme i analysedelen, ikke i datainnsamlingsplanen", "Begrepet må defineres med avsender for å kunne telles som pensumforankring"],
      explanation: "Riktig svar er at ubrukt teori ikke gir uttelling — det er avstand mellom empiri og teori. Begrepet er ikke for avansert, og det hører hjemme i flere deler av besvarelsen. Manglende avsender er en egen svakhet, men her er hovedproblemet at begrepet ikke brukes.",
    },
    {
      question: "Hva er forskereffekt i kvalitativ forskning?",
      options: ["At forskerens tilstedeværelse påvirker det som studeres, og må gjøres rede for", "At forskerens faglige bakgrunn avgjør hvilke funn som blir publisert", "At forskerens tolkninger overstyrer informantenes egen forståelse av situasjonen", "At forskerens nærvær må minimeres gjennom standardiserte prosedyrer"],
      explanation: "Riktig svar er påvirkningen som må gjøres rede for og brukes analytisk. Å minimere den gjennom standardisering er den kvantitative løsningen. At tolkningen overstyrer deltakernes forståelse er et spørsmål om fortolkningsgrad, og publiseringsvalg er noe helt annet.",
    },
    {
      question: "Hva er poenget med å formulere funn som tentative påstander med forbehold?",
      options: ["En påstand som angir sine egne betingelser kan prøves, og er derfor mer presis", "Forbehold er en akademisk konvensjon som viser at forfatteren er ydmyk", "Forbehold gjør det vanskeligere for sensor å finne feil i konklusjonen", "Kvalitative funn er alltid usikre og bør derfor presenteres med stor forsiktighet"],
      explanation: "Riktig svar er at betingede påstander kan prøves. Ydmykhet er ikke poenget, og et forbehold uten innhold er en tom setning. At kvalitative funn skulle være generelt usikre er dessuten feil — de er presise om noe annet enn fordeling.",
    },
    {
      question: "Hvem skal avgjøre om kvalitative funn kan overføres til en ny situasjon?",
      options: ["Det er et drøftingsspørsmål i faget, med gode argumenter for både forsker og leser", "Forskeren alene, siden bare hun kjenner materialet og de betingelsene det ble til under", "Leseren, siden forskeren ikke har noe ansvar for hvordan funnene brukes videre", "Ingen av dem, siden overføring krever en ny undersøkelse i den nye situasjonen"],
      explanation: "Riktig svar er at dette er en reell faglig uenighet Fangen tar opp uten å avslutte. Svarene som utpeker forskeren alene eller leseren alene, er hver sin posisjon fremstilt som fasit, og de utelater den andre sidens beste argument. Å kreve en ny undersøkelse ville gjøre begrepet overflødig.",
    },
    {
      question: "Hva gjør en tykk beskrivelse tykk?",
      options: ["At den tar med den konteksten som gjør handlingen forståelig og tolkbar", "At den er lang nok til å dekke hele observasjonsøkten i detalj, fra start til slutt", "At den gjengir informantenes egne ord uten forskerens omskrivinger", "At den bygger på flere datakilder som beskriver den samme hendelsen"],
      explanation: "Riktig svar er konteksten som gjør handlingen tolkbar. Lengde er ikke kriteriet, og detaljer som ikke gjør den jobben, gjør beskrivelsen lang uten å gjøre den tykk. Ordrette sitater og flere kilder er andre grep.",
    },
    {
      question: "Hvorfor er tykke beskrivelser et kvalitetskrav og ikke bare en stilform?",
      options: ["Fordi de er grunnlaget leseren trenger for å vurdere om funnene kan overføres", "Fordi de gjør teksten mer engasjerende å lese for dem som ikke kjenner feltet", "Fordi de dokumenterer at forskeren faktisk har vært til stede i feltet", "Fordi de gjør det mulig å telle hvor ofte et mønster gjentar seg i materialet"],
      explanation: "Riktig svar er at beskrivelsen bærer overførbarheten. Leservennlighet er en bieffekt, dokumentasjon av tilstedeværelse er et transparensspørsmål, og telling er nettopp ikke det kvalitative materialer skal brukes til.",
    },
    {
      question: "Hva er samsvarskravet mellom spørsmål, data og analyse?",
      options: ["At det du spør om, det du samler inn og det du gjør med materialet hører sammen", "At analysen bekrefter de forventningene som ble formulert i selve problemstillingen", "At datamengden står i forhold til hvor omfattende problemstillingen er", "At metoden er den samme gjennom hele undersøkelsen, uten endringer underveis"],
      explanation: "Riktig svar er at delene passer sammen. Bekreftelse av forventninger er ikke et krav — funn som motsier antakelsen er like gode. Datamengde er et ressursspørsmål, og krav om uendret metode ville oppheve fleksibiliteten som er et kjennetegn ved kvalitative design.",
    },
    {
      question: "Hvordan bør kvalitetskriteriene stå i en designoppgave?",
      options: ["Innbakt i valgene: i utvalget, i analysestrategien og i formuleringen av forventede funn", "Som en egen teoriseksjon rett etter metodevalget, med definisjoner og navngitte avsendere", "Som en avsluttende drøfting av studiens svakheter, etter forventede funn", "Som en innledende avklaring av hvilke krav besvarelsen kommer til å oppfylle"],
      explanation: "Riktig svar er innbakt i valgene. En egen teoriseksjon som ikke får konsekvenser for planen, er avstand mellom empiri og teori. Et rent svakhetsavsnitt til slutt og en innledende programerklæring er begge former for å presentere kriteriene i stedet for å bruke dem.",
    },
    {
      question: "Hva er en presis formulering av gyldighetsområdet?",
      options: ["En setning om hva funnene gjelder for og én om hva de ikke gjelder for, begge spesifikke", "En generell setning om at funnene ikke kan generaliseres, plassert helt til slutt i avslutningen", "En setning om at studien er kvalitativ og derfor har andre kvalitetskriterier", "En setning om at flere studier trengs før man kan si noe sikkert om temaet"],
      explanation: "Riktig svar er to spesifikke setninger. «Funnene kan ikke generaliseres» er en tom formel og attpåtil upresis. Å opplyse at studien er kvalitativ sier ingenting om gyldighetsområdet, og etterlysning av flere studier er en avslutningsfrase, ikke en angivelse.",
    },
    {
      question: "En student har intervjuet ti personer rekruttert gjennom én organisasjon. Hva er det viktigste å skrive om dette?",
      options: ["At rekrutteringsveien former hvem som er med, og hvilke stemmer som dermed mangler", "At ti informanter er godt innenfor det vanlige antallet for en kvalitativ intervjustudie", "At organisasjonen har godkjent at studien gjennomføres blant medlemmene", "At informantene har fått informasjon om studiens formål på forhånd"],
      explanation: "Riktig svar er skjevheten rekrutteringsveien skaper, og hva den betyr for funnene. Antallet er ikke i seg selv informativt. Godkjenning og informasjon er etiske forhold som skal med i etikkdelen, men de sier ingenting om hvem materialet representerer.",
    },
  ],
  'svmet1010-2-1': [
    {
      question: "Hva er et tema, sammenlignet med en problemstilling?",
      options: ["Området studien ligger i, som avgrenser saksfeltet men ikke kan besvares", "Det ene spørsmålet undersøkelsen er innrettet for å kunne besvare empirisk", "De konkrete spørsmålene datainnsamlingen i praksis skal gi svar på", "Den påstanden studien setter opp på forhånd for å kunne etterprøve den"],
      explanation: "Riktig svar er at temaet avgrenser et område og ikke kan besvares. Distraktoren om det ene spørsmålet beskriver problemstillingen, som er nivået under; distraktoren om de konkrete spørsmålene beskriver forskningsspørsmålene, som er nivået under der igjen. Distraktoren om påstanden som settes opp på forhånd, beskriver en hypotese, som hører hjemme i et etterprøvende design.",
    },
    {
      question: "Hva er problemstillingens funksjon i et forskningsopplegg hos Tellmann og Leseth?",
      options: ["Den styrer designet ved å binde sammen enheter, metode, utvalg og analyse", "Den viser leseren at forskeren har oversikt over eksisterende litteratur på feltet", "Den fastsetter hvilke teoretiske begreper som skal presenteres i innledningen", "Den avgjør hvor mange informanter prosjektet trenger for å bli holdbart"],
      explanation: "Riktig svar er at problemstillingen er designets styringsverktøy og binder sammen undersøkelsesenheter, metode, utvalg og analyse. Å vise litteraturoversikt er en annen del av en rapport og ikke problemstillingens oppgave. Antallet informanter følger av utvalgsvurderingen og av metning, ikke av problemstillingen alene.",
    },
    {
      question: "Hvilke tre krav må være oppfylt samtidig for at en problemstilling skal være forskbar?",
      options: ["Avgrenset, empirisk besvarbar og egnet for den valgte metodefamilien", "Original, samfunnsmessig relevant og forankret i tidligere forskning på feltet", "Kort formulert, fri for fagbegreper og forståelig for folk utenfor faget", "Godkjent av veileder, meldt til personverntjenesten og finansielt gjennomførbar"],
      explanation: "Riktig svar er avgrensning, empirisk besvarbarhet og kvalitativ egnethet. Originalitet og relevans er viktige, men er vurderinger av spørsmålets verdi og ikke av om det kan besvares. Formalitetene rundt godkjenning og melding er praktiske krav til prosjektet, ikke egenskaper ved selve spørsmålet.",
    },
    {
      question: "Hvorfor er «Bør energidrikk forbys på ungdomsskolen?» ikke en forskbar problemstilling?",
      options: ["Den spør hva som bør gjelde, og verdispørsmål kan ikke avgjøres av data", "Den er for smalt avgrenset, slik at materialet blir for lite til å analysere", "Den handler om mindreårige, og forskning på mindreårige krever eget samtykke", "Den bruker et begrep som ikke er definert av noen navngitt pensumforfatter"],
      explanation: "Riktig svar er at spørsmålet er normativt: det spør hva som bør gjelde, og ingen mengde data avgjør det. Avgrensningen er faktisk god i dette spørsmålet, så det er ikke der problemet ligger. Samtykke fra mindreårige er et ekte etisk krav, men det gjør et spørsmål vanskelig å gjennomføre, ikke uforskbart.",
    },
    {
      question: "Hvordan kan et normativt spørsmål gjøres forskbart?",
      options: ["Ved å flytte verdivurderingen fra forskeren til deltakerne det spørres om", "Ved å legge til en presis avgrensning i tid, sted og enhet i formuleringen", "Ved å bytte ut den kvalitative metoden med et representativt survey-design", "Ved å hente inn en teoretisk posisjon som allerede har avklart verdispørsmålet"],
      explanation: "Riktig svar er å flytte normativiteten til deltakerne: ikke om noe bør forbys, men hvordan de berørte begrunner sine syn på et forbud. Da blir standpunktene til data. Bedre avgrensning hjelper på et vagt spørsmål, men fjerner ikke normativiteten, og et survey ville bare telt normative meninger i stedet for å avgjøre dem.",
    },
    {
      question: "Hva kjennetegner et spørsmål som er kvalitativt egnet?",
      options: ["Det etterspør mening, motiv, prosess eller praksis, altså det tekst og tale gir", "Det etterspør fordelingen av et fenomen i en klart avgrenset befolkning", "Det etterspør samvariasjon mellom to forhold når andre forhold holdes like", "Det etterspør en andel som kan sammenlignes mellom to ulike tidspunkter"],
      explanation: "Riktig svar er at spørsmålet etterspør mening, motiv, prosess eller praksis. De tre andre etterspør fordeling, samvariasjon og endring i andeler, som krever tilfeldig utvalg og statistisk behandling. Ingen av dem er dårlige spørsmål — de hører hjemme i en annen metodefamilie.",
    },
    {
      question: "Hva er hvorfor-dimensjonen i et case?",
      options: ["Deltakernes egne begrunnelser og motiver for det de gjør, slik de forstår det", "Den praktiske rekkefølgen handlingene faktisk utføres i, sett fra utsiden", "Årsakssammenhengen mellom to forhold, målt ved å sammenligne to grupper", "Forskerens egen teoretiske forklaring på mønsteret som materialet viser"],
      explanation: "Riktig svar er deltakernes egne begrunnelser og motiver. Den praktiske rekkefølgen er hvordan-dimensjonen, som krever en annen metode. Å måle en årsakssammenheng ved gruppesammenligning er kvantitativ logikk, og forskerens egen forklaring er analysens resultat og ikke selve dimensjonen i caset.",
    },
    {
      question: "Hvorfor egner observasjon seg bedre enn intervju for hvordan-dimensjonen?",
      options: ["Fordi rutiner er selvfølgelige for utøveren og derfor beskrives upresist i etterkant", "Fordi observasjon gir et langt større datamateriale på kortere tid enn intervjuer", "Fordi observasjon er en mer objektiv metode som ikke påvirkes av forskerens rolle", "Fordi informanter i intervju systematisk holder tilbake informasjon om praksis"],
      explanation: "Riktig svar er at rutiner oppleves som selvfølgelige av den som utfører dem, og derfor huskes og gjengis dårlig når man blir spurt. Observasjon er ikke mer objektiv — forskerens tilstedeværelse påvirker feltet, og det er nettopp derfor deltakerroller er et eget tema. At informanter alltid holder tilbake, er en for sterk påstand: problemet er hukommelse og selvfølgelighet, ikke uærlighet.",
    },
    {
      question: "Hva er undersøkelsesenheter hos Tellmann og Leseth?",
      options: ["De enhetene studien henter data om: personer, situasjoner, tekster eller hendelser", "De konkrete informantene som til slutt takker ja til å delta i det aktuelle prosjektet", "De kategoriene forskeren koder materialet i når analysearbeidet begynner", "De teoretiske begrepene som brukes til å tolke materialet i analysedelen"],
      explanation: "Riktig svar er at undersøkelsesenhetene er det studien henter data om — og de kan være situasjoner eller tekster, ikke bare personer. De som faktisk takker ja, utgjør utvalget, som er et annet ledd. Kodekategorier og teoretiske begreper hører til analysen, ikke til enhetsvalget.",
    },
    {
      question: "Hva er forskjellen på et eksplorerende og et uklart forskningsspørsmål?",
      options: ["Det eksplorerende er avgrenset i enhet, sted og tid, men åpent i aspekt", "Det eksplorerende er formulert uten spørsmålstegn og som en løs tematisk ramme", "Det eksplorerende brukes i kvalitative studier, det uklare i kvantitative studier", "Det eksplorerende kan endres underveis, mens det uklare må stå urørt i prosjektet"],
      explanation: "Riktig svar er at et eksplorerende spørsmål er avgrenset i ramme og åpent i aspekt, mens et uklart spørsmål er åpent i alt. Formen på setningen avgjør ingenting, og skillet går ikke mellom metodefamilier: et uklart spørsmål er like ubrukelig i et survey. At spørsmålet kan justeres underveis, gjelder kvalitative prosjekter generelt.",
    },
    {
      question: "Hva skiller en legitim justering av problemstillingen fra drift?",
      options: ["Justeringen er begrunnet i noe materialet viste, og den blir dokumentert", "Justeringen skjer før datainnsamlingen starter, mens drift skjer etter at den er ferdig", "Justeringen godkjennes av veileder, mens drift er noe forskeren gjør på egen hånd", "Justeringen gjelder aspektet i spørsmålet, mens drift alltid gjelder utvalget"],
      explanation: "Riktig svar er at en justering er begrunnet i materialet og skrives ned, mens drift bare skjer. Tidspunktet avgjør ingenting: nettopp fleksibiliteten gjør at justering underveis er lovlig. Godkjenning er en formalitet, og drift kan ramme både aspekt og utvalg.",
    },
    {
      question: "Hva menes med at et forskningsspørsmål impliserer metode?",
      options: ["At formuleringen peker mot hva slags materiale som kan utgjøre et svar", "At metodevalget dermed er ferdig begrunnet og ikke trenger nærmere omtale", "At spørsmålet må skrives om dersom den ønskede metoden ikke passer det", "At metodekapitlet kan kortes ned fordi valget allerede står i innledningen"],
      explanation: "Riktig svar er at formuleringen peker mot datatypen: «hvordan foregår» peker mot observasjon, «hvordan snakker de om» mot intervju. Det fritar deg ikke fra å begrunne valget — å konstatere at en metode passer, er nettopp det som stopper på C-nivå. Og spørsmålet skal styre metoden, ikke omvendt.",
    },
    {
      question: "Hva er den vanligste konsekvensen av en uklar problemstilling i en designbesvarelse?",
      options: ["Alle de øvrige komponentene mister målestokken de skulle vurderes mot", "Besvarelsen blir for kort, fordi det finnes lite å skrive om et vagt spørsmål", "Analysestrategien blir riktig, men datainnsamlingen blir umulig å gjennomføre", "Sensor trekker for språket, siden uklarhet regnes som en formuleringssvakhet"],
      explanation: "Riktig svar er at uklarheten forplanter seg: utvalget kan ikke begrunnes, analysestrategien mister retning, og forventede funn kan ikke formuleres. Vage spørsmål gir gjerne lange og ikke korte besvarelser. Og trekket handler ikke om språk, men om at ingenting lenger kan vurderes mot spørsmålet.",
    },
    {
      question: "Hvilken form har en begrunnelse som holder A-nivå i et metodevalg?",
      options: ["Den sier hva metoden gir, og hva alternativet man velger bort ikke ville fanget", "Den viser til at metoden er den mest brukte i faglitteraturen på dette feltet", "Den viser til at temaet er samfunnsmessig viktig og derfor må studeres grundig", "Den viser til at kvalitativ metode gir dypere innsikt enn andre metodefamilier"],
      explanation: "Riktig svar er at begrunnelsen må si hva metoden gir og hva bortvalget ville mistet. At en metode er utbredt, sier ingenting om at den passer akkurat dette spørsmålet. At temaet er viktig, er relevans og ikke metodebegrunnelse — og en rangering av metodefamilier mot hverandre er faglig gal, siden de svarer på ulike spørsmål.",
    },
    {
      question: "Hva er den typiske formen på feilen «kvantitativ logikk i kvalitativ kontekst» i en problemstilling?",
      options: ["Verb som lover en effekt eller en andel, som «påvirker» eller «fører til»", "Bruk av fagbegreper fra pensum uten at avsenderen er navngitt i teksten", "Manglende avgrensning i tid og sted, slik at materialet aldri blir avsluttet", "For mange forskningsspørsmål, slik at datainnsamlingen blir uoversiktlig"],
      explanation: "Riktig svar er verbene som lover effekt eller andel: de forplikter besvarelsen på noe et lite, strategisk valgt materiale ikke kan levere. Manglende avsender er en annen feil, som gjelder presisjon i begrepsbruk. Manglende avgrensning og for mange spørsmål er reelle svakheter, men de hører til avgrensningskravet og ikke til metodelogikken.",
    },
  ],
  'svmet1010-2-2': [
    {
      question: "Hva er hovedpoenget med et strategisk utvalg?",
      options: ["Enhetene velges fordi egenskapene deres gjør dem informative for spørsmålet", "Enhetene trekkes slik at hver av dem har en kjent sjanse for å komme med", "Enhetene settes sammen så gruppen speiler befolkningen på sentrale kjennetegn", "Enhetene hentes der de er lettest tilgjengelige for forskeren i praksis"],
      explanation: "Riktig svar er at egenskapene avgjør: utvalget skal maksimere informasjonsverdi, ikke speile en fordeling. Kjent trekkesannsynlighet beskriver tilfeldig utvalg, og speiling av befolkningen er kvotetenkning fra kvantitativ metode. Å hente der det er lettest, er et bekvemmelighetsutvalg, som er noe annet enn en strategi.",
    },
    {
      question: "Hvem står bak typologien med ekstremt utvalg, maksimal variasjon, homogent utvalg, snøballutvalg og teoribasert utvalg?",
      options: ["Tellmann og Leseth, i framstillingen av forskningens design", "Weiss, i framstillingen av det kvalitative forskningsintervjuet", "Fangen, i framstillingen av deltagende observasjon som metode", "Kjeldstadli, i framstillingen av kildetyper og kildekritikk"],
      explanation: "Riktig svar er Tellmann og Leseth, som gir den norske utvalgstypologien. Weiss har sin egen engelske typologi med probability sampling, maximize range og convenience sampling — beslektet, men et annet begrepssett. Fangen eier deltakerrollene, og Kjeldstadli eier kildetypologien.",
    },
    {
      question: "Hva er logikken bak et ekstremt utvalg?",
      options: ["Ytterpunktene viser mekanismen i forstørret form og gjør den lettere å se", "Ytterpunktene er de eneste tilfellene som gir tilstrekkelig sikre konklusjoner", "Ytterpunktene gjør det mulig å beregne hvor stor spredningen i gruppen er", "Ytterpunktene er som regel de eneste som er villige til å stille opp til intervju"],
      explanation: "Riktig svar er at ytterpunktene forstørrer mekanismen: det som er utydelig i et vanlig tilfelle, er ofte tydelig der presset er størst. Ingen utvalgstype gir sikre konklusjoner i seg selv, og spredning er en statistisk størrelse som ikke beregnes her. At ytterpunktene er lettest å rekruttere, er en ren påstand uten grunnlag.",
    },
    {
      question: "Når er maksimal variasjon et velbegrunnet valg?",
      options: ["Når du vil se om et mønster holder på tvers av svært ulike tilfeller", "Når du vil kunne anslå hvor mange i gruppen som deler en bestemt erfaring", "Når du vil holde bakgrunnen lik så variasjonen i det sentrale blir tydelig", "Når du har et teoretisk begrep som peker ut hvilken forskjell som betyr noe"],
      explanation: "Riktig svar er at spredningen prøver mønsteret mot ulikhet: holder det på tvers, er det mer robust. Å anslå hvor mange som deler noe, krever et helt annet design. Å holde bakgrunnen lik er homogent utvalg, og å peke ut én avgjørende forskjell på forhånd er teoribasert utvalg.",
    },
    {
      question: "Hva er den viktigste prisen ved et homogent utvalg?",
      options: ["Du mangler sammenligningsgrunnlag og vet ikke om mønsteret gjelder ut over gruppen", "Du får for få informanter til at analysen kan bli tilstrekkelig grundig", "Du kan ikke bruke det i designoppgaver, siden variasjon alltid kreves der", "Du risikerer at informantene kjenner hverandre og dermed sensurerer seg selv"],
      explanation: "Riktig svar er at manglende sammenligningsgrunnlag gjør det uklart om funnet er noe ved gruppen eller ved fenomenet. Homogent utvalg sier ingenting om antallet, og det er et fullt lovlig valg i en designoppgave når det er begrunnet. At informanter kjenner hverandre, er et konfidensialitetsproblem og ikke en analytisk begrensning ved typen.",
    },
    {
      question: "Hva er den prinsipielle svakheten ved et snøballutvalg?",
      options: ["Utvalget følger nettverkets form, så de utenfor nettverket blir aldri spurt", "Utvalget blir alltid for lite, fordi kjeden stopper opp etter få ledd", "Utvalget kan ikke brukes i sårbare felt, siden anbefalinger røper identitet", "Utvalget bygges av informantene selv, så forskeren mister styringen helt"],
      explanation: "Riktig svar er nettverksskjevheten: folk anbefaler folk de kjenner og ligner. At kjeden stopper, er et praktisk problem som løses med flere startpunkter. Snøball brukes nettopp mye i sårbare felt, fordi tilliten følger med kontakten — og forskeren bestemmer fortsatt kriteriene for hvem som kan komme med.",
    },
    {
      question: "Hva er motgrepet mot nettverksskjevhet i et snøballutvalg?",
      options: ["Å starte flere snøballer fra ulike inngangspunkter, og skrive hvorfor", "Å øke antallet informanter til kjeden dekker hele det aktuelle miljøet", "Å supplere med et tilfeldig trukket utvalg fra samme miljø i tillegg", "Å be informantene om bare å anbefale personer de ikke kjenner godt"],
      explanation: "Riktig svar er flere uavhengige inngangspunkter, kombinert med at grepet begrunnes i teksten. Flere informanter i samme kjede utvider bare den samme kretsen. Et tilfeldig utvalg forutsetter en oversikt over miljøet som sjelden finnes, og å styre hvem informantene anbefaller, undergraver selve tillitsmekanismen snøballen bygger på.",
    },
    {
      question: "Hva skiller teoribasert utvalg fra de øvrige strategiske typene?",
      options: ["Det bygges rundt én dimensjon som et begrep har pekt ut på forhånd", "Det krever at forskeren har lest all tidligere forskning på feltet først", "Det brukes bare når problemstillingen er formulert som en testbar hypotese", "Det forutsetter at informantene selv kjenner til den aktuelle teorien"],
      explanation: "Riktig svar er at et teoretisk begrep peker ut den ene dimensjonen utvalget bygges rundt. Kravet om full litteraturoversikt gjelder ikke utvalgstypen. Hypoteseprøving hører til et annet design, og informantene trenger selvsagt ikke å kjenne teorien for å inngå i et teoribasert utvalg.",
    },
    {
      question: "Hva er convenience sampling hos Weiss?",
      options: ["Utvalg satt sammen av dem som var lettest tilgjengelige for forskeren", "Utvalg trukket slik at hver enhet har kjent sannsynlighet for å komme med", "Utvalg satt sammen for å dekke mest mulig av variasjonen i fenomenet", "Utvalg der informantene setter forskeren i kontakt med nye deltakere"],
      explanation: "Riktig svar er utvalget av det lett tilgjengelige. Kjent trekkesannsynlighet er probability sampling, og bred dekning av variasjonen er maximize range — begge hos Weiss. Kjeden av anbefalinger er snøballutvalg, som hører til den norske typologien hos Tellmann og Leseth.",
    },
    {
      question: "Når er et bekvemmelighetsutvalg faglig forsvarlig?",
      options: ["Når det kalles ved sitt navn, skjevheten beskrives og påstandene begrenses", "Når forskeren har forsøkt strategisk rekruttering først uten å lykkes med det", "Når utvalget er stort nok til at skjevhetene jevner seg ut mellom deltakerne", "Når temaet er så lite sensitivt at deltakerne uansett svarer likt på alt"],
      explanation: "Riktig svar er at erkjennelse, beskrivelse og avgrensede påstander gjør det forsvarlig. Et mislykket forsøk på strategisk rekruttering er ikke i seg selv en begrunnelse. Skjevheter jevner seg ikke ut med størrelsen i kvalitative utvalg, og temaets følsomhet endrer ikke hvem som kom med i utvalget.",
    },
    {
      question: "Hva er maximize range hos Weiss?",
      options: ["Rådet om å bruke de få intervjuplassene på mest mulig ulike posisjoner", "Rådet om å intervjue så mange som mulig innenfor prosjektets tidsramme", "Rådet om å velge tilfeller som ligger ytterst på en relevant skala", "Rådet om å fortsette til nye intervjuer bare gjentar det man alt vet"],
      explanation: "Riktig svar er å bruke plassene på ulike posisjoner slik at hver ny informant legger til noe nytt. Antallet i seg selv er ikke poenget hos Weiss. Ytterpunktene er ekstremt utvalg, og stoppregelen der nytt materiale gjentar seg, er metning.",
    },
    {
      question: "Hvorfor anbefaler Weiss å ta negative tilfeller inn i utvalget?",
      options: ["Fordi en analyse som bare ser bekreftelser, ikke vet hvor mønsteret slutter å gjelde", "Fordi kritiske informanter gir et mer balansert bilde av det aktuelle feltet", "Fordi utvalget da blir mer likt befolkningen studien ønsker å uttale seg om", "Fordi det er et krav i forskningsetikken at motstemmer skal komme til orde"],
      explanation: "Riktig svar er at tilfeller som taler mot mønsteret, viser hvor grensene for det går. Et negativt tilfelle er ikke det samme som en kritisk informant — det er et tilfelle som burde vist mønsteret, men ikke gjør det. Og grepet handler om holdbarhet i analysen, ikke om likhet med en befolkning eller om etiske krav.",
    },
    {
      question: "Hva er en portvakt?",
      options: ["En person eller instans som kontrollerer adgangen til et felt eller til deltakere", "En informant som gir forskeren særlig god oversikt over feltets uskrevne regler", "En instans som vurderer om prosjektet oppfyller kravene til personvern", "En deltaker som formidler forskerens spørsmål videre til de andre i miljøet"],
      explanation: "Riktig svar er den som kontrollerer adgangen — og som dermed også kan si nei. En informant med god oversikt har kunnskap, men ikke nødvendigvis makt over inngangen. Personvernvurdering er en formell godkjenning, og en som bare videreformidler spørsmål, kontrollerer ingen dør.",
    },
    {
      question: "Hva menes med portvakten som filter?",
      options: ["At den som gir tilgang, også former utvalget ved å velge hvem du får møte", "At portvakten kontrollerer hvilke funn forskeren kan publisere i etterkant", "At portvakten stiller krav om anonymisering før feltarbeidet kan begynne", "At portvakten avgjør hvor lang tid forskeren får være til stede i feltet"],
      explanation: "Riktig svar er at portvakten former utvalget gjennom hvem hun sender videre, og som regel med gode grunner. Kontroll over publisering og krav om anonymisering er reelle forhold i noen felt, men de handler om vilkår for bruk av data. Tid i feltet er en praktisk ramme, ikke selve filtermekanismen.",
    },
    {
      question: "Hva er et godt grep når portvakten trolig filtrerer bort kritiske stemmer?",
      options: ["Å skaffe flere inngangspunkter, og ellers skrive hvilke stemmer som mangler", "Å be portvakten om en fullstendig liste over alle aktuelle deltakere i feltet", "Å utelate portvakten fra beskrivelsen, siden den svekker studiens troverdighet", "Å øke antallet informanter fra samme kanal til bildet blir mer nyansert"],
      explanation: "Riktig svar er flere inngangspunkter, supplert med en åpen setning om hva materialet trolig mangler. En fullstendig liste er sjelden mulig og løser uansett ikke filterproblemet. Å utelate portvakten er brudd på transparenskravet, og flere informanter fra samme kanal reproduserer bare filteret.",
    },
    {
      question: "Hva er selvseleksjon?",
      options: ["At deltakerne melder seg selv, slik at engasjerte kommer med og likegyldige ikke", "At forskeren velger deltakere ut fra hvilke egenskaper problemstillingen krever", "At deltakerne velger hvilke av spørsmålene i intervjuguiden de vil svare på", "At portvakten velger ut hvilke av de ansatte som skal få tilbud om å delta"],
      explanation: "Riktig svar er at deltakerne velger seg selv inn, med den skjevheten det gir. At forskeren velger ut fra egenskaper, er strategisk utvalg. At man kan la være å svare, er en rettighet i intervjusituasjonen, og portvaktens utvelgelse er filterproblemet — en beslektet, men annen mekanisme.",
    },
    {
      question: "Hvorfor er de som takker nei, analytisk interessante?",
      options: ["Fordi avslagene sjelden er tilfeldige og sier noe om hvem materialet dekker", "Fordi antallet avslag kan brukes til å beregne hvor skjevt utvalget er blitt", "Fordi de som takker nei, ofte har sterkere meninger enn de som takker ja", "Fordi forskningsetikken krever at avslag dokumenteres og begrunnes skriftlig"],
      explanation: "Riktig svar er at avslagene har mønster, og at mønsteret sier noe om utvalgets gyldighetsområde. Skjevhet lar seg ikke beregne fra antall avslag i et kvalitativt design. Å hevde at nei-siden har sterkere meninger, er en gjetning, og etikken krever ikke at avslag begrunnes skriftlig.",
    },
    {
      question: "Hva er metning i en kvalitativ studie?",
      options: ["At nye enheter i hovedsak gjentar mønstre materialet allerede inneholder", "At forskeren har nådd det antallet informanter som ble oppgitt i planen", "At alle relevante posisjoner i feltet er dekket av minst én informant", "At materialet er stort nok til at funnene kan overføres til andre felt"],
      explanation: "Riktig svar er gjentakelsen: nye enheter tilfører lite nytt. Metning er ikke et planlagt tall, og den garanterer verken full dekning av feltet eller overførbarhet — den sier bare at akkurat dette utvalget har begynt å gjenta seg langs de dimensjonene det er bygget på.",
    },
    {
      question: "Hvordan bør antallet informanter behandles i en designbesvarelse?",
      options: ["Som et anslag knyttet til metning og til hvilken spredning utvalget skal ha", "Som et fast tall satt ut fra hvor mange intervjuer tidsrammen tillater", "Som et minstekrav på rundt tjue, slik at materialet blir tilstrekkelig bredt", "Som et tall utledet av hvor stor gruppen studien handler om, faktisk er"],
      explanation: "Riktig svar er et anslag knyttet til metning og spredning, ikke et løsrevet tall. Tidsrammen er en reell begrensning, men den er ikke en faglig begrunnelse. Det finnes ikke noe minstekrav på tjue, og å utlede antallet fra gruppens størrelse er å importere logikken fra utvalgsberegning i kvantitative undersøkelser.",
    },
    {
      question: "Hvorfor er en presis utvalgsbeskrivelse et overførbarhetsgrep?",
      options: ["Fordi leseren da kan vurdere om hennes eget tilfelle ligner nok til å bruke funnene", "Fordi presise beskrivelser gjør det mulig å beregne feilmarginen i materialet", "Fordi en presis beskrivelse gjør at studien kan gjentas identisk av andre forskere", "Fordi sensor da kan kontrollere at antallet informanter er høyt nok til analysen"],
      explanation: "Riktig svar er at leseren trenger kjennetegnene ved de studerte for å vurdere likheten med sitt eget tilfelle. Feilmarginer finnes ikke i kvalitative design, og identisk gjentakelse er verken mulig eller målet — kompensasjonen der heter transparens. Antallet er ikke det som avgjør overførbarhet.",
    },
    {
      question: "Hva er den korrekte måten å omtale et lite kvalitativt utvalgs begrensninger på?",
      options: ["Å si hva materialet kan belyse, og hva som ligger utenfor det studien dekker", "Å presisere at funnene ikke er representative, men likevel gir en pekepinn", "Å opplyse om at et større utvalg ville gitt sikrere konklusjoner om feltet", "Å understreke at kvalitative studier uansett bare er forberedelse til survey"],
      explanation: "Riktig svar er å angi gyldighetsområdet positivt: hva materialet dekker og hva det ikke dekker. Å skrive at funnene ikke er representative, men gir en pekepinn, måler studien med kvantitativ målestokk. Det samme gjør tanken om at flere informanter gir sikrere konklusjoner, og å redusere kvalitativ forskning til forarbeid er faglig feil.",
    },
    {
      question: "Hva er forskjellen på en undersøkelsesenhet og en informant?",
      options: ["Enheten kan være en situasjon eller en tekst; informanten er alltid en person", "Enheten er den som samtykker til deltakelse; informanten er den som svarer", "Enheten brukes i kvantitative design; informanten brukes i kvalitative design", "Enheten er hele gruppen som studeres; informanten er den enkelte i gruppen"],
      explanation: "Riktig svar er at enheten kan være noe annet enn en person, mens informanten alltid er en. Samtykke gis av personer og skiller ikke de to begrepene. Begge begrepene brukes i kvalitative design, og enheten er ikke det samme som gruppen — den er det studien henter data om.",
    },
    {
      question: "Hva innebærer koblingen utvalg, design og validitet hos Tellmann og Leseth?",
      options: ["At utvalget ikke kan vurderes for seg, men henger sammen med spørsmål og analyse", "At validiteten kan beregnes når utvalgets sammensetning er kjent i detalj", "At utvalget må godkjennes før designet kan ferdigstilles og settes i verk", "At validitet er et eget avsnitt som skrives til slutt i metodekapitlet"],
      explanation: "Riktig svar er at sammenhengen mellom leddene er det som avgjør om studien holder. Validitet lar seg ikke beregne i et kvalitativt design. Godkjenning er en formalitet, og nettopp poenget er at validiteten bygges inn i valgene underveis i stedet for å legges til på slutten.",
    },
    {
      question: "Hva er hovedproblemet med å rekruttere gjennom en arbeidsgiver?",
      options: ["Deltakelsen kan oppleves som mindre frivillig, og lederen former hvem du møter", "Arbeidsgiveren krever som regel innsyn i det ferdige materialet før publisering", "Ansatte som deltar i arbeidstiden, gir kortere og mindre utfyllende svar", "Rekrutteringsveien er så treg at prosjektet sjelden lar seg gjennomføre i tide"],
      explanation: "Riktig svar peker på to sider av samme sak: samtykket blir mindre fritt når forespørselen kommer ovenfra, og lederen fungerer som filter. Innsynskrav forekommer, men er ikke hovedproblemet. Svarlengde og tidsbruk er praktiske forhold som ikke berører utvalgets og samtykkets gyldighet.",
    },
    {
      question: "Hva kjennetegner en utvalgsbegrunnelse som holder A-nivå?",
      options: ["Den navngir type og dimensjon, gir antakelsen bak, og nevner bortvalget", "Den oppgir antall informanter, kjønnsfordeling og aldersspenn i utvalget", "Den viser til at utvalgstypen er den vanligste innenfor denne typen studier", "Den understreker at utvalget er så variert som prosjektets ressurser tillot"],
      explanation: "Riktig svar er formen type, dimensjon, antakelse og bortvalg — den sier hvorfor akkurat disse enhetene kan belyse akkurat dette spørsmålet. Demografiske opplysninger er beskrivelse uten begrunnelse. At en type er vanlig, sier ingenting om at den passer her, og ressursbegrensninger er en forklaring, ikke en faglig begrunnelse.",
    },
  ],
  'svmet1010-2-3': [
    {
      question: "Hvilken komponent kommer først i et kvalitativt forskningsopplegg?",
      options: ["Forskningsspørsmålet, som alle de øvrige komponentene utledes av", "Metodevalget, som avgjør hva slags data prosjektet kan skaffe seg", "Det teoretiske rammeverket, som setter rammen for hele undersøkelsen", "Utvalget, siden tilgangen til informanter bestemmer hva som er mulig"],
      explanation: "Riktig svar er forskningsspørsmålet: det bestemmer hvilke data som kan svare, og dermed metoden. Å begynne med metoden snur utledningen, og teorien velges ut fra hva spørsmålet skal belyses med. Tilgang er en reell begrensning, men den er ikke komponent nummer én.",
    },
    {
      question: "Hva er kravet til teori i en designoppgave i dette emnet?",
      options: ["Minst ett relevant begrep som faktisk brukes i analysen av materialet", "Minst tre ulike teoretiske perspektiver som drøftes grundig opp mot hverandre", "Et rammeverk hentet fra en av de klassiske sosiologiske tradisjonene", "En teoretisk posisjon som er avklart før datainnsamlingen begynner"],
      explanation: "Riktig svar er ett begrep brukt meningsfullt. Terskelen er lav, men absolutt: avansert teori som ikke brukes, gir ingen uttelling. Hverken antall perspektiver, klassisk opphav eller tidspunktet for avklaring er det som vurderes.",
    },
    {
      question: "Hva kjennetegner et analytisk begrep, til forskjell fra et beskrivende ord?",
      options: ["Det sier hva du skal lete etter, og hva som ville telle som et eksempel", "Det er hentet fra en anerkjent teoretiker og har en fast, omforent definisjon", "Det er formulert på et abstraksjonsnivå som ligger over informantenes eget språk", "Det brukes i innledningen for å plassere studien i en faglig sammenheng"],
      explanation: "Riktig svar er at begrepet peker ut hva som skal letes etter i materialet. Opphav og abstraksjonsnivå avgjør ingenting — normer og sanksjoner er enkelt og fungerer utmerket. Å plassere studien i en sammenheng er en annen funksjon enn å ordne materialet.",
    },
    {
      question: "Hva innebærer bortvalget i en metodebegrunnelse?",
      options: ["Å nevne metoden du vurderte, og si hva den ikke ville fanget for dette spørsmålet", "Å nevne de temaene du bevisst valgte bort fordi de lå utenfor problemstillingen", "Å forklare hvorfor du ikke inkluderte flere informanter enn du gjorde", "Å redegjøre for hvilke deler av materialet som ble utelatt fra analysen"],
      explanation: "Riktig svar gjelder den fravalgte metoden og hva den ikke ville fanget her. Avgrensning av tema hører til problemstillingen, antall informanter til utvalgsbegrunnelsen, og utelatt materiale til analysen. Bortvalget viser at metodevalget faktisk var et valg.",
    },
    {
      question: "Hva sier sensorveiledningene om metodekombinasjon?",
      options: ["Kombinasjon gir ingen bonus i seg selv; samsvar metode og spørsmål avgjør", "Kombinasjon av intervju og observasjon trekker opp i alle designoppgaver", "Kombinasjon bør unngås i en firetimers eksamen fordi den tar for mye plass", "Kombinasjon kreves når caset har både en hvorfor- og en hvordan-dimensjon"],
      explanation: "Riktig svar er at kombinasjonen ikke gir bonus i seg selv — det er samsvaret mellom metode og problemstilling som teller. Den skal verken unngås eller kreves som regel; kombinasjonen er riktig når spørsmålet faktisk har to dimensjoner med hver sin datatype, og da fordi den følger av spørsmålet.",
    },
    {
      question: "Hva skal en datainnsamlingsplan inneholde?",
      options: ["Utvalgstype, rekrutteringsvei, sted, omfang og enten intervjuguide eller feltrolle", "En fullstendig intervjuguide der alle spørsmålene står i endelig formulering", "En framdriftsplan med milepæler og et budsjett for prosjektets kostnader", "En oversikt over tidligere studier som har brukt de samme metodene"],
      explanation: "Riktig svar er de fem elementene: utvalg, rekruttering, sted, omfang og guide eller rolle. En ferdig guide kreves ikke — tre til fem temaområder holder. Framdrift, budsjett og litteraturoversikt hører til en prosjektbeskrivelse, ikke til designets komponent fire.",
    },
    {
      question: "Hvorfor er stedet for datainnsamlingen en faglig og ikke bare praktisk beslutning?",
      options: ["Fordi stedet former hva som kan sies, og dermed hva slags materiale du får", "Fordi stedet avgjør hvor mange informanter det er mulig å rekruttere", "Fordi stedet må godkjennes av institusjonen før datainnsamlingen kan starte", "Fordi stedet bestemmer om samtalen kan tas opp med lydopptaker eller ikke"],
      explanation: "Riktig svar er at stedet former hva som lar seg si — et intervju om arbeidsforhold på arbeidsplassen gir et annet materiale enn samme intervju et annet sted. Rekrutteringstall, godkjenning og opptaksmuligheter er praktiske forhold som ikke berører selve datainnholdet på samme måte.",
    },
    {
      question: "Hva er den asymmetriske vurderingsregelen for etikk i sensorveiledningene?",
      options: ["Tynn etikk trekker ned bare der etikken er åpenbart relevant, men gode grep trekker alltid opp", "Etikk teller nøyaktig like mye i alle oppgaver og vurderes etter en fast og oppgitt vekt i helheten", "Etikk trekker ned i alle oppgaver, men kan kompenseres av sterk metodedel", "Etikk vurderes bare i oppgaver som eksplisitt ber om en etisk vurdering"],
      explanation: "Riktig svar beskriver asymmetrien: manglende refleksjon trekker ned der den er åpenbart relevant, mens gode konkrete grep alltid trekker opp. Etikken har altså ikke fast vekt, den lar seg ikke veksle mot metodedelen, og den vurderes også når oppgaven ikke nevner den.",
    },
    {
      question: "Hva kjennetegner case-tilpasset etikk?",
      options: ["Vurderingene gjelder nettopp dette caset og kan ikke limes inn i en annen besvarelse", "Vurderingene bygger på de forskningsetiske retningslinjene og gjengir kjernekravene", "Vurderingene er plassert i et eget avsnitt slik at de er lette å finne for sensor", "Vurderingene er formulert som prinsipper som gjelder for all kvalitativ forskning"],
      explanation: "Riktig svar er at vurderingene er unike for caset — testen er nettopp om avsnittet kunne stått i en annen besvarelse. Å gjengi kjernekravene og formulere prinsipper er generell etikk, og plasseringen i teksten avgjør ingenting.",
    },
    {
      question: "Hva menes med at etikken skal gjelde alle prosjektfaser?",
      options: ["Fra utformingen av spørsmålet, via innsamling og behandling, til publisering", "Fra søknad om godkjenning til prosjektet er formelt avsluttet og rapportert", "Fra første kontakt med portvakten til siste informant har trukket samtykket", "Fra pilotintervjuet til det ferdige materialet er slettet etter prosjektslutt"],
      explanation: "Riktig svar er de fire fasene fra spørsmålsformulering til publisering. De øvrige alternativene beskriver deler av forløpet — søknad, kontakt, sletting — men utelater at også måten spørsmålet stilles på, og måten funnene publiseres på, er etiske valg.",
    },
    {
      question: "Hva skal en analysestrategi i en designoppgave si noe om?",
      options: ["Hvordan materialet kodes og kategoriseres, og hva det analytiske begrepet brukes til", "Hvilket dataprogram som skal brukes til å håndtere, sortere og systematisere materialet", "Hvor lang tid analysearbeidet vil ta sammenlignet med datainnsamlingen", "Hvilke funn som vil bli lagt fram først i den ferdige rapporten fra prosjektet"],
      explanation: "Riktig svar er kodingen, kategoriseringen og bruken av begrepet. Programvarevalg er en praktisk detalj. Tidsbruk hører til framdriften, og rekkefølgen på funnene i rapporten er et formidlingsvalg og ikke en analysestrategi.",
    },
    {
      question: "Hva er et tentativt svar?",
      options: ["En foreløpig påstand som holdes åpen for at materialet kan vise noe annet", "En hypotese som settes opp for å prøves systematisk mot innsamlede data", "En konklusjon som formuleres etter at analysen er fullstendig gjennomført", "En påstand som bare gjelder for de informantene som faktisk ble intervjuet"],
      explanation: "Riktig svar er den foreløpige påstanden som kan revideres. En hypotese hører til et etterprøvende design, en konklusjon kommer etter analysen, og avgrensningen til de intervjuede er en presisering av gyldighetsområdet — ikke det som gjør svaret tentativt.",
    },
    {
      question: "Hvorfor trekker forbehold opp i en designbesvarelse?",
      options: ["Fordi de viser at du kjenner grensene for hva ditt eget design kan gi", "Fordi de gjør besvarelsen mindre angripelig og dermed tryggere å vurdere", "Fordi de er et formkrav i akademisk skriving på alle nivåer i faget", "Fordi de erstatter behovet for å oppgi gyldighetsområdet til slutt"],
      explanation: "Riktig svar er at forbeholdene viser innsikt i designets grenser. De er ikke et forsvarsverk, og de er ikke et rent formkrav. De erstatter heller ikke gyldighetsområdet — det er en egen presisering som fortsatt må skrives.",
    },
    {
      question: "Hva er rammedisiplin i en designoppgave?",
      options: ["Å tilpasse omfanget til den tiden og de ressursene oppgaven faktisk oppgir", "Å holde besvarelsen innenfor det ordantallet eksamensoppgaven angir", "Å begrense antall teoretiske begreper til det som kan brukes i analysen", "Å strukturere besvarelsen etter de sju komponentene i fast rekkefølge"],
      explanation: "Riktig svar er å tilpasse ambisjonsnivået til rammen — én måned betyr ikke et halvt års feltarbeid. Ordantall er et formkrav, begrensning av teori er et eget råd, og strukturen etter komponentene er en disposisjonsvane.",
    },
    {
      question: "Hva er det vanligste bruddet på designets rekkefølgelogikk?",
      options: ["At metoden er valgt først, og at spørsmålet deretter formes så det passer metoden", "At etikkomponenten plasseres helt til slutt i stedet for rett etter datainnsamlingsplanen", "At analysestrategien beskrives før utvalget er endelig bestemt i teksten", "At forventede funn nevnes allerede i innledningen til besvarelsen"],
      explanation: "Riktig svar er at metoden er valgt før spørsmålet, slik at utledningen snus — det synes som regel på at spørsmålet blir vagt. De øvrige er spørsmål om rekkefølge på arket, og de er uproblematiske så lenge utledningen mellom komponentene holder.",
    },
    {
      question: "Hvorfor er det ikke nok at alle sju komponentene er til stede?",
      options: ["Fordi det er sammenhengen mellom dem som vurderes, ikke bare fullstendigheten", "Fordi komponentene må ha omtrent lik lengde for at helheten skal virke balansert", "Fordi sensor ser etter minst én komponent som er drevet betydelig lengre enn de andre", "Fordi rekkefølgen på komponentene må følge sensorveiledningens egen oppstilling"],
      explanation: "Riktig svar er at sammenhengen er vurderingskriteriet: sju gode, urelaterte avsnitt er ikke et design. Verken lik lengde, én særlig dyp komponent eller en bestemt rekkefølge er krav — dybde og bredde er likeverdige veier til toppkarakter.",
    },
    {
      question: "Hva er symbolske grenser hos Fjær, Pedersen og Sandberg?",
      options: ["Skillene folk trekker mellom seg selv og andre for å plassere seg moralsk", "Reglene for hva som regnes som passende oppførsel i en bestemt sosial gruppe", "De ferdighetene som gir status og handlingsrom i et gatemiljø", "De sanksjonene som følger når en uskreven regel blir brutt av noen"],
      explanation: "Riktig svar er grensedragningen mellom seg selv og andre. Regler for passende oppførsel er normer, ferdigheter som gir status i gatemiljø er gatekapital hos Sandberg og Pedersen, og reaksjoner på regelbrudd er sanksjoner.",
    },
    {
      question: "Hva er gatekapital hos Sandberg og Pedersen?",
      options: ["Ferdigheter, kunnskap og anseelse som gir status og handlingsrom i et gatemiljø", "Den økonomiske gevinsten som salg av ulovlige varer kan gi i et større bymiljø", "De skillene deltakerne trekker mellom sitt eget miljø og andre miljøer", "De uskrevne reglene som styrer hvordan konflikter løses i et gatemiljø"],
      explanation: "Riktig svar er kompetansen og anseelsen som gir handlingsrom — begrepet gjør ferdigheter i et marginalisert miljø til kompetanse i stedet for mangel. Økonomisk gevinst er noe annet enn kapital i denne betydningen, grensedragning er symbolske grenser, og uskrevne regler er normer.",
    },
    {
      question: "Hva er den vanligste svakheten ved en etikkdel i en designbesvarelse?",
      options: ["Den er generell og kunne stått uendret i en helt annen besvarelse", "Den er for lang og tar plass fra analysestrategien og de forventede funnene", "Den nevner personvernregler uten å vise til korrekt lovhjemmel for behandlingen", "Den kommer for sent i besvarelsen til at sensor rekker å lese den"],
      explanation: "Riktig svar er generalitet: en etikkdel som passer overalt, passer ingen steder, og den regnes som vag etikk uten operasjonelle tiltak. Lengde og plassering er ikke problemet, og juridisk presisjon om hjemmel er ikke det som etterspørres i et metodefag.",
    },
    {
      question: "Hvordan bør forventede funn formuleres?",
      options: ["Som to til fire antakelser med forbehold, avsluttet med et uttalt gyldighetsområde", "Som en kortfattet og tydelig konklusjon om hva studien mest sannsynlig vil vise", "Som et anslag over hvor stor andel av utvalget som vil dele et bestemt syn", "Som en beskrivelse av hvilke funn som ville gjort prosjektet mislykket"],
      explanation: "Riktig svar er antakelser med forbehold og et uttalt gyldighetsområde. En ferdig konklusjon foregriper analysen, andelsanslag importerer kvantitativ logikk, og et kvalitativt prosjekt er ikke mislykket fordi antakelsene viser seg å være feil.",
    },
    {
      question: "Hva er en intervjuguide i en designoppgave?",
      options: ["Tre til fem temaområder, en angitt grad av struktur, og en plan om utprøving", "En ferdig utformet liste med alle spørsmål i den rekkefølgen de skal stilles i", "Et skjema med svarkategorier som gjør materialet lettere å sammenligne", "En oversikt over hvilke begreper fra pensum som skal nevnes i samtalen"],
      explanation: "Riktig svar er tre til fem temaområder, strukturgrad og utprøving — du skal ikke skrive hele guiden. Et skjema med svarkategorier er i realiteten et spørreskjema, altså et kvantitativt design i forkledning, og en liste over pensumbegreper hører hjemme i analysen, ikke i samtalen.",
    },
    {
      question: "Hva er feltrollens plass i et design?",
      options: ["Den er observasjonsstudiens motstykke til intervjuguiden i datainnsamlingsplanen", "Den hører til analysestrategien, siden rollen påvirker hvordan materialet tolkes", "Den hører til etikkomponenten, siden åpenhet om rollen er et samtykkespørsmål", "Den hører til teoridelen, siden rollene er hentet fra et teoretisk rammeverk"],
      explanation: "Riktig svar er at feltrollen er datainnsamlingsplanens element for observasjonsstudier. Rollen har riktignok både analytiske og etiske sider, men den er først og fremst et valg om hvordan data skal skaffes — uten rolle er observasjonsplanen tom.",
    },
    {
      question: "Hva er kravet om transparens i et forskningsopplegg?",
      options: ["At leseren får vite tid, sted, varighet, antall og forskerens relasjon til deltakerne", "At alle rådata gjøres fritt tilgjengelige for andre forskere etter at prosjektet er avsluttet", "At forskeren oppgir sine egne meninger om det temaet som undersøkes", "At analysen kan gjentas av en annen forsker med det samme resultatet"],
      explanation: "Riktig svar er redegjørelsen for omstendighetene rundt datainnsamlingen. Deling av rådata er ofte umulig av hensyn til konfidensialitet. Egne meninger er ikke poenget, og identisk gjentakelse er verken mulig eller målet i kvalitativ forskning — transparensen er nettopp kompensasjonen for det.",
    },
    {
      question: "Hva er den beste testen på om et design henger sammen?",
      options: ["Å skrive én «fordi»-setning per komponent og se hvor setningen ikke lar seg fullføre", "Å telle etter om alle de sju komponentene har fått omtrent like mye plass i teksten", "Å sjekke at alle begrepene i besvarelsen er hentet fra pensumlitteraturen", "Å kontrollere at komponentene står i den rekkefølgen sensorveiledningen bruker"],
      explanation: "Riktig svar er «fordi»-testen: der setningen stopper, ligger bruddet. Lik plass er ikke et krav, siden dybde og bredde er likeverdige profiler. Pensumforankring og rekkefølge er egne krav, men de avslører ikke om utledningen mellom komponentene holder.",
    },
    {
      question: "Hvorfor er «kvalitativ metode gir dypere innsikt» en dårlig metodebegrunnelse?",
      options: ["Fordi den beskriver metodefamilien generelt i stedet for å svare på dette spørsmålet", "Fordi den er altfor kort til å kunne telle som en begrunnelse i en langsvarsoppgave", "Fordi den mangler henvisning til den pensumforfatteren som står bak formuleringen", "Fordi dybde ikke er et anerkjent kjennetegn ved kvalitative framgangsmåter"],
      explanation: "Riktig svar er at setningen sier hva metodefamilien heter, ikke hvorfor den passer akkurat dette spørsmålet — og den rangerer dessuten to metodefamilier som svarer på ulike spørsmål. Lengde og manglende henvisning er ikke kjernen, og dybde er et reelt kjennetegn; problemet er at det ikke begrunner valget.",
    },
    {
      question: "Hva er den riktige rekkefølgen på komponent tre til fem?",
      options: ["Metodevalg med begrunnelse, plan for datainnsamling, etiske vurderinger", "Plan for datainnsamling, metodevalg med begrunnelse, etiske vurderinger", "Etiske vurderinger, metodevalg med begrunnelse, plan for datainnsamling", "Metodevalg med begrunnelse, etiske vurderinger, plan for datainnsamling"],
      explanation: "Riktig svar er metodevalg, deretter datainnsamlingsplan, deretter etikk. Logikken er at metoden bestemmer hva som må planlegges, og at planen bestemmer hvilke etiske spørsmål som faktisk oppstår. Å sette etikken før metoden gjør den nødvendigvis generell.",
    },
    {
      question: "Hva vil det si at et design er gjennomførbart?",
      options: ["At det kan settes ut i livet med den tilgangen, tiden og de ressursene som finnes", "At det bygger på en metode som forskeren selv har brukt i et tidligere prosjekt", "At det er godkjent av veileder og av personverntjenesten før oppstart", "At det bruker en metode som er vanlig innenfor det aktuelle fagområdet"],
      explanation: "Riktig svar er samsvaret mellom plan og reelle muligheter. Tidligere erfaring, formell godkjenning og metodens utbredelse i faget sier ingenting om at akkurat dette opplegget kan gjennomføres innenfor akkurat disse rammene.",
    },
    {
      question: "Hva er feilen når et begrep presenteres i innledningen og aldri kommer igjen?",
      options: ["Avstand mellom empiri og teori, som er et typisk kjennetegn på C-nivået", "Manglende pensumforankring, siden begrepet ikke er belagt med kilde", "Uklar problemstilling, siden begrepet ikke er innarbeidet i spørsmålet", "Punktvis skjemasvar, siden begrepet står som et løsrevet punkt i teksten"],
      explanation: "Riktig svar er avstanden mellom empiri og teori: begrepet nevnes, men brukes ikke i analysen. Manglende kilde er en annen feil, uklar problemstilling gjelder komponent én, og punktvise skjemasvar handler om fravær av begrunnelser gjennom hele besvarelsen.",
    },
    {
      question: "Hvordan bør en A-besvarelse behandle et bortvalgt alternativ?",
      options: ["Ved å si hva alternativet ikke fanger her, ikke at metoden er dårlig", "Ved å vise til at alternativet er lite brukt i nyere forskning på feltet", "Ved å påpeke at alternativet ville krevd mer tid enn prosjektet har", "Ved å nevne at alternativet er mindre egnet for kvalitative problemstillinger"],
      explanation: "Riktig svar er å si hva alternativet ikke fanger for dette spørsmålet — en spørreundersøkelse er ikke dårlig, den svarer på noe annet. Utbredelse i litteraturen og tidsbruk er ikke faglige begrunnelser, og en generell dom over metodefamilier bryter med at de svarer på ulike spørsmål.",
    },
    {
      question: "Hva bør stå til slutt i komponenten om forventede funn?",
      options: ["En setning om hva materialet kan belyse og hva som ligger utenfor designet", "En vurdering av hvor sannsynlig det er at antakelsene viser seg å stemme", "En påminnelse om at kvalitative funn alltid er usikre og må tolkes varsomt", "En henvisning til hvilke videre studier funnene kunne danne grunnlag for"],
      explanation: "Riktig svar er gyldighetsområdet, formulert positivt: hva materialet dekker, og hva det ikke dekker. Sannsynlighetsvurderinger hører til et annet design, en generell påminnelse om usikkerhet sier ingenting spesifikt, og forslag til videre forskning er en avslutningsfrase og ikke en avgrensning.",
    },
  ],
  'svmet1010-3-1': [
    {
      question: "Hvem står bak rollekontinuumet slik det brukes i dette emnet?",
      options: ["Fangen, i framstillingen av deltagende observasjon som metode", "Weiss, i framstillingen av det kvalitative forskningsintervjuet", "Ugelvik, i artikkelen om feltarbeid bak murene i et fengsel", "Tellmann og Leseth, i kapitlet om forskningens design og utvalg"],
      explanation: "Riktig svar er Fangen, som eier rollekontinuumet, «go native» og fortolkningsgradene. Weiss eier intervjubegrepene som markør og intervjuguide, Ugelvik eier feltarbeidsforløpet og uttrykket om å henge med over tid, og Tellmann og Leseth eier utvalgstypologien.",
    },
    {
      question: "Hva er den riktige rekkefølgen på posisjonene i rollekontinuumet?",
      options: ["Ikke-deltakende observatør, delvis deltakende, fullt deltakende, ikke-observerende deltaker", "Ikke-observerende deltaker, ikke-deltakende observatør, delvis deltakende, fullt deltakende", "Delvis deltakende, ikke-deltakende observatør, fullt deltakende, ikke-observerende deltaker", "Fullt deltakende, delvis deltakende, ikke-deltakende observatør, ikke-observerende deltaker"],
      explanation: "Riktig svar går fra minst til mest deltakelse og ender i den ikke-observerende deltakeren, der forskerrollen i praksis er borte. De øvrige rekkefølgene bryter med at skalaen måler én ting: hvor mye forskeren deltar i det som foregår.",
    },
    {
      question: "Hvorfor er deltakerrollene et kontinuum og ikke en firedelt typologi?",
      options: ["Fordi en forsker kan ligge mellom to posisjoner og flytte seg gjennom feltarbeidet", "Fordi antallet posisjoner varierer mellom de ulike framstillingene av modellen", "Fordi rollene overlapper med hverandre i alle felt og derfor ikke kan skilles", "Fordi forskeren sjelden vet hvilken posisjon hun faktisk har inntatt i feltet"],
      explanation: "Riktig svar er at posisjonen kan ligge mellom trinn og endre seg over tid. Antallet hovedposisjoner er stabilt hos Fangen, rollene lar seg godt skille i konkrete tilfeller, og en forsker skal nettopp kunne gjøre rede for hvilken posisjon hun har.",
    },
    {
      question: "Hva kjennetegner den ikke-deltakende observatøren?",
      options: ["Hun er til stede i feltet, men inngår ikke i den aktiviteten som studeres", "Hun er til stede i feltet uten at deltakerne vet at hun er der som forsker", "Hun deltar i det sosiale rundt aktiviteten, men ikke i selve aktiviteten", "Hun deltar i alt, men har sluttet å registrere det som skjer analytisk"],
      explanation: "Riktig svar er tilstedeværelse uten deltakelse i aktiviteten. Skjult tilstedeværelse er en annen akse, nemlig grad av åpenhet. Deltakelse i det sosiale rundt aktiviteten er allerede delvis deltakende, og den som har sluttet å registrere, er ikke-observerende deltaker.",
    },
    {
      question: "Hva skiller fullt deltakende fra ikke-observerende deltaker?",
      options: ["Om den analytiske avstanden fortsatt er i behold hos forskeren", "Om forskeren deltar i alle aktiviteter eller bare i de fleste av dem", "Om deltakerne i feltet vet at forskeren er der for å forske på dem", "Om forskeren har fått en formell rolle eller bare en uformell posisjon"],
      explanation: "Riktig svar er den analytiske avstanden: en forsker kan delta i alt og fortsatt observere. Det er når undringen forsvinner, at hun har passert grensen. Antall aktiviteter, åpenhet og formell rolle er andre forhold som ikke avgjør dette skillet.",
    },
    {
      question: "Hva betyr «go native» hos Fangen?",
      options: ["At forskeren overtar feltets perspektiv og mister den analytiske undringen", "At forskeren skjuler forskerrollen for å komme nærmere deltakerne i feltet", "At forskeren tar parti for feltet i en konflikt med utenforstående parter", "At forskeren blir så godt likt at deltakerne slutter å se henne som forsker"],
      explanation: "Riktig svar er tapet av analytisk undring: det som først virket rart, er blitt selvfølgelig. Å skjule rollen er skjult observasjon, en helt annen sak. Å ta parti er et etisk og relasjonelt problem, og å bli godt likt er verken nødvendig eller tilstrekkelig for at undringen forsvinner.",
    },
    {
      question: "Hvorfor virker motgrepene mot å gå helt opp i rollen bare når de er strukturelle?",
      options: ["Fordi bevegelsen skjer gradvis og ikke merkes av den det gjelder", "Fordi forskeren sjelden har tid til å reflektere over noe mens feltarbeidet pågår", "Fordi feltet aktivt motarbeider forsøk på å opprettholde analytisk avstand", "Fordi rutiner er det eneste forskningsetikken godtar som dokumentasjon"],
      explanation: "Riktig svar er at bevegelsen er umerkelig for den som gjennomgår den, og derfor må møtes med rutiner og ikke med vilje. Tidsmangel er et praktisk problem, feltet motarbeider sjelden noe slikt bevisst, og etikken stiller ingen krav om denne typen rutiner.",
    },
    {
      question: "Hvor ligger den intervenerende rollen i forhold til kontinuumet?",
      options: ["På en egen akse, siden den handler om aktiv påvirkning og ikke om deltakelsesgrad", "Mellom delvis deltakende og fullt deltakende, som et femte og siste mellomtrinn", "Ytterst på skalaen, som den mest deltakende av alle posisjonene", "Utenfor modellen, siden inngripen i feltet ikke regnes som en forskerrolle"],
      explanation: "Riktig svar er at intervensjon er en egen akse: kontinuumet måler deltakelse, mens intervensjon måler bevisst påvirkning, og de kan kombineres. Den er verken et mellomtrinn, det mest deltakende ytterpunktet eller noe utenfor modellen — Fangen behandler den som en egen rolle.",
    },
    {
      question: "Hva er hovedgevinsten ved å bevege seg mot mer deltakelse på kontinuumet?",
      options: ["Førstehåndserfaring og tillit, altså tilgang til det som ikke sies til fremmede", "Bedre oversikt over hele feltet og muligheten til å notere helt kontinuerlig", "Mindre påvirkning av det som foregår, siden forskeren blir en av mange", "Enklere etiske vurderinger, siden deltakerne blir vant til å ha henne der"],
      explanation: "Riktig svar er førstehåndserfaring og tillit. Oversikt og notatmuligheter går den motsatte veien og er nettopp det man mister. Påvirkningen øker med deltakelsen, og etikken blir vanskeligere og ikke enklere, fordi forskeren får vite ting hun ikke ba om.",
    },
    {
      question: "Hva er en blindsone ved en rolle?",
      options: ["Det posisjonen systematisk ikke gir tilgang til, uansett hvor lenge man blir", "Det forskeren ikke rakk å observere fordi feltarbeidet ble for kort", "De situasjonene forskeren bevisst valgte bort av etiske hensyn", "De delene av materialet som ble utelatt fordi de ikke var relevante"],
      explanation: "Riktig svar er det posisjonen utelukker. Manglende tid løses med mer tid; en blindsone løses bare med en annen rolle eller med en ærlig setning om hva materialet ikke dekker. Bevisste bortvalg og utelatt materiale er andre ting.",
    },
    {
      question: "Hva er forskereffekt?",
      options: ["At forskerens tilstedeværelse endrer det som skjer i feltet", "At forskerens egne forhåndsantakelser styrer hva hun legger merke til i feltet", "At forskerens tolkning påvirker hvordan leseren forstår funnene", "At forskerens rolle avgjør hvilke informanter hun får tilgang til"],
      explanation: "Riktig svar er at tilstedeværelsen endrer feltet. At antakelser styrer oppmerksomheten, er et spørsmål om refleksivitet; tolkningens virkning på leseren gjelder framstillingen; og rollens betydning for tilgang er et utvalgsspørsmål. Alle tre er ekte forhold, men de er ikke forskereffekt.",
    },
    {
      question: "Hvorfor kan ikke forskereffekten fjernes?",
      options: ["Fordi enhver tilstedeværelse påvirker; den kan bare beskrives og tas hensyn til", "Fordi forskeren umulig kan vite hvordan feltet ville sett ut uten henne til stede", "Fordi deltakerne alltid vil opptre annerledes når de blir studert åpent", "Fordi effekten er størst i begynnelsen og deretter avtar med tiden"],
      explanation: "Riktig svar er at all tilstedeværelse påvirker, og at oppgaven derfor er å kjenne og beskrive effekten. At man ikke kan vite hvordan feltet ville vært, er en konsekvens og ikke grunnen. De to siste utsagnene beskriver reaktivitet ved åpen observasjon, som er én form for forskereffekt, ikke hele fenomenet.",
    },
    {
      question: "Hva er rollekonflikt i et feltarbeid?",
      options: ["At forskerrollen og rollen forskeren har fått i feltet, stiller uforenlige krav", "At forskeren og deltakerne er uenige om hvilken rolle hun skal ha", "At forskeren skifter posisjon på kontinuumet uten å gjøre rede for det", "At to forskere i samme felt har inntatt roller som utelukker hverandre"],
      explanation: "Riktig svar er at de to rollene krever noe ulikt av samme person — kollega og observatør på én gang. Uenighet om rollen er et forhandlingsspørsmål, udokumentert rolleskifte er et transparensproblem, og flere forskere i samme felt er en helt annen situasjon.",
    },
    {
      question: "Hva menes med feltets rolletilbud?",
      options: ["De posisjonene miljøet selv gjør tilgjengelige for en nykommer", "De oppgavene forskeren blir bedt om å utføre mens hun er til stede", "Den formelle avtalen om adgang som inngås med ledelsen på forhånd", "De rollene forskeren har vurdert og valgt mellom før feltarbeidet startet"],
      explanation: "Riktig svar er posisjonene feltet gjør tilgjengelige — forskeren velger ikke rolle alene. Konkrete oppgaver er én måte et rolletilbud kommer til uttrykk på, men ikke selve begrepet. Formell avtale gjelder adgang, og forskerens egne vurderinger er den andre siden av valget.",
    },
    {
      question: "Hva er forskjellen på nærhet og deltakelse?",
      options: ["Nærhet handler om relasjon og fortrolighet, deltakelse om aktivitet", "Nærhet handler om fysisk avstand, mens deltakelse handler om varigheten i feltet", "Nærhet er en holdning hos forskeren, deltakelse er et krav fra feltet", "Nærhet gjelder enkeltpersoner, deltakelse gjelder gruppen som helhet"],
      explanation: "Riktig svar er skillet mellom relasjon og aktivitet: en forsker kan delta mye og likevel ha lav tillit, eller delta lite og stå nær enkeltpersoner. Fysisk avstand og varighet er andre forhold, nærhet er ingen holdning, og begge deler kan gjelde både enkeltpersoner og grupper.",
    },
    {
      question: "Hva er analytisk avstand?",
      options: ["Posisjonen som gjør det mulig å undre seg over det deltakerne tar for gitt", "Den følelsesmessige distansen som hindrer forskeren i å bli for involvert", "Tiden som går fra observasjonen gjøres til feltnotatet blir skrevet ned", "Skillet mellom forskerens beskrivelse og informantenes egne forklaringer"],
      explanation: "Riktig svar er evnen til å undre seg over det selvfølgelige, som er motoren i etnografisk analyse. Avstand er ikke det motsatte av å bry seg, og det er verken et tidsintervall eller et skille mellom beskrivelsesnivåer.",
    },
    {
      question: "Hva er den viktigste prisen ved åpen observasjon?",
      options: ["At folk oppfører seg annerledes når de vet at de blir studert", "At forskeren ikke kan notere noe underveis uten å forstyrre hele situasjonen", "At samtykke må innhentes fra alle som befinner seg i feltet", "At forskeren mister muligheten til å delta fullt i aktiviteten"],
      explanation: "Riktig svar er reaktiviteten, som i de fleste felt avtar over tid. Åpenhet gjør det tvert imot lettere å notere åpent, samtykke er et krav og ikke en pris ved metoden i denne forstand, og åpenhet utelukker ikke full deltakelse.",
    },
    {
      question: "Hva er det sterkeste argumentet FOR at skjult observasjon kan være forsvarlig?",
      options: ["At åpenhet i enkelte felt ville gjort kunnskapen umulig å skaffe i det hele tatt", "At deltakerne uansett glemmer at forskeren er der etter kort tid i feltet", "At skjult observasjon gir mer nøyaktige data enn åpen observasjon gjør", "At forskeren kan innhente samtykke i etterkant når materialet er samlet inn"],
      explanation: "Riktig svar er argumentet om at enkelte felt ellers ville forblitt ubeskrevet. At deltakerne glemmer forskeren, er et argument for åpen observasjon over tid. Påstanden om mer nøyaktige data er for sterk, og etterfølgende samtykke løser ikke at folk ble studert uten å kunne si nei.",
    },
    {
      question: "Hva er det sterkeste argumentet MOT skjult observasjon?",
      options: ["At informert samtykke settes til side, og deltakerne aldri får si nei", "At forskeren risikerer å bli avslørt og dermed miste tilgangen til feltet", "At materialet ikke kan publiseres uten at deltakerne kan gjenkjennes", "At skjult observasjon gjør det umulig å stille oppfølgende spørsmål"],
      explanation: "Riktig svar er at et bærende etisk krav settes til side. De tre andre er reelle praktiske ulemper — avsløring, publiseringsproblemer og manglende mulighet til å spørre — men de er praktiske innvendinger, ikke den prinsipielle.",
    },
    {
      question: "Hva kreves når forskeren skifter rolle underveis?",
      options: ["At skiftet beskrives og tidfestes, slik at leseren vet hvor data kommer fra", "At forskeren informerer hele feltet skriftlig om at posisjonen er blitt endret", "At det tidligere materialet forkastes, siden det er samlet fra en annen posisjon", "At skiftet begrunnes overfor veileder før det gjennomføres i praksis"],
      explanation: "Riktig svar er beskrivelse og tidfesting: materiale fra ulike faser er samlet fra ulike posisjoner, og det bør leseren vite. Skriftlig varsling er ikke et krav, tidligere materiale er fortsatt gyldig, og formell forhåndsgodkjenning av et rolleskifte finnes ikke.",
    },
    {
      question: "Hvorfor understreker Fangen at rollen bør passe forskerens egne ferdigheter?",
      options: ["Fordi en rolle forskeren ikke mestrer, gir dårligere data og delt oppmerksomhet", "Fordi feltet uvegerlig vil avvise en forsker som ikke behersker aktiviteten godt nok", "Fordi forskningsetikken krever at forskeren ikke utsetter seg selv for risiko", "Fordi rollevalget ellers ikke kan begrunnes overfor sensor i en besvarelse"],
      explanation: "Riktig svar er at manglende mestring gjør at oppmerksomheten går til forskeren selv i stedet for til feltet. Feltet avviser ikke nødvendigvis en klosset nykommer — mange felt tåler lærlingen godt. Egen risiko er et annet spørsmål, og begrunnelsen overfor sensor er en konsekvens, ikke grunnen.",
    },
    {
      question: "Hva er kravet til tekstbelegg i en rolleplassering?",
      options: ["At påstanden knyttes til en konkret formulering om hva forskeren gjorde", "At vedlegget gjengis i sin helhet før analysen av det begynner", "At hvert sitat følges av en henvisning til linjenummer i teksten", "At forskerens egen vurdering av rollen siteres direkte fra vedlegget"],
      explanation: "Riktig svar er koblingen mellom påstand og et konkret sted i teksten. Full gjengivelse er ren deskripsjon og trekker ned, linjenummer er en praktisk detalj og ikke et krav i seg selv, og forskerens egen vurdering finnes ofte ikke i utdraget.",
    },
    {
      question: "Hvorfor skal hele kontinuumet presenteres før den ene rollen drøftes?",
      options: ["Fordi fremgangsmåten da plasseres i et bredere metodisk landskap", "Fordi sensor ellers ikke kan se om kandidaten faktisk kjenner alle posisjonene", "Fordi rekkefølgen er et formkrav i alle vedleggsbaserte oppgavetyper", "Fordi den ene rollen ellers ikke kan plasseres riktig på skalaen"],
      explanation: "Riktig svar er å plassere fremgangsmåten i et bredere metodisk landskap, som er et av kjennetegnene på de beste besvarelsene. At sensor får sjekket kunnskapen, er en bivirkning. Rekkefølgen er ikke et generelt formkrav, og plasseringen kan i prinsippet gjøres riktig uansett.",
    },
    {
      question: "Hva er en kontrafaktisk rolledrøfting?",
      options: ["En gjennomgang av hva et annet rollevalg ville gjort med data, relasjoner og etikk", "En vurdering av om forskeren burde ha valgt en annen metode enn observasjon", "En sammenligning av forskerens rolle med rollene i andre pensumstudier", "En drøfting av hva som ville skjedd om feltarbeidet hadde vart lenger"],
      explanation: "Riktig svar er alternativrollen gjennomgått langs de tre dimensjonene. Å bytte metode er et annet spørsmål, sammenligning med pensumstudier er eksempelbruk, og varighet er én av mange faktorer — men ingen av dem er det kontrafaktiske grepet.",
    },
    {
      question: "Hvilke tre dimensjoner skal en kontrafaktisk rolledrøfting dekke?",
      options: ["Data, relasjoner og etikk", "Tid, sted og omfang", "Nærhet, avstand og åpenhet", "Tilgang, tillit og transparens"],
      explanation: "Riktig svar er data, relasjoner og etikk: hva hadde hun sett, hvordan ville feltet oppfattet henne, og hvilke etiske problemer ville oppstått eller falt bort. De øvrige tre trioene er ekte begreper i faget, men de utgjør ikke strukturen i denne drøftingen.",
    },
    {
      question: "Hvorfor er rollevalget også et etisk valg?",
      options: ["Fordi det avgjør hvor tett forskeren kommer på folk og hva de betror henne", "Fordi enkelte roller krever en godkjenning fra personverntjenesten på forhånd", "Fordi noen roller innebærer at forskeren bryter regler som gjelder i feltet", "Fordi rollen bestemmer om forskeren kan love deltakerne anonymitet"],
      explanation: "Riktig svar er nærheten og fortroligheten som følger av rollen, og som gjør at samtykket må fornyes i praksis underveis. Godkjenning følger av datatypen og ikke av rollen, regelbrudd er ikke et vanlig trekk ved rollevalg, og anonymitet kan loves uansett posisjon.",
    },
    {
      question: "Hva er den vanligste svakheten i en rolledrøftingsbesvarelse?",
      options: ["At den beskriver hvordan feltarbeid gjøres, uten å ta opp dilemmaer og kostnader", "At den bruker altfor mye plass på å gjengi hele kontinuumet før selve plasseringen", "At den tar med poenger som ikke står i det utleverte vedlegget", "At den konkluderer for skarpt om hvilken rolle som var den riktige"],
      explanation: "Riktig svar er oppskriften uten dilemmaer: modellen er en skala med kostnader i begge ender, og kostnadene er drøftingsstoffet. Å gjengi hele kontinuumet først er et krav og ikke en svakhet, poenger utenfra trekker opp, og en skarp begrunnet konklusjon er en fullgod toppform.",
    },
    {
      question: "Hva er den presise formen på feilen «upresis gjengivelse av kontinuumet»?",
      options: ["Å hoppe over et mellomtrinn eller å glemme at rollen kan skiftes underveis", "Å bruke norske betegnelser der pensum bruker engelske uttrykk", "Å plassere den intervenerende rollen mellom to av hovedposisjonene", "Å bruke modellen på et digitalt felt der den ikke uten videre lar seg anvende"],
      explanation: "Riktig svar er manglende mellomtrinn og glemte presiseringer. Norske betegnelser er helt i orden. Å plassere den intervenerende rollen på skalaen er riktignok en feil, men den er sjeldnere, og modellens anvendelse på digitale felt er en egen faglig diskusjon.",
    },
    {
      question: "Hvilket metodegrep eier Ugelviks fengselsfeltarbeid?",
      options: ["Å henge med over tid uten offisiell rolle, et uttrykk hentet fra Geertz", "Å bruke egen kroppslig erfaring som inngang til å forstå utøvernes verden", "Å delta som medspiller i et lag og få tilgang gjennom selve spillet", "Å arbeide som lærling i en virksomhet for å lære praksisen innenfra"],
      explanation: "Riktig svar er å henge med over tid, som Ugelvik henter fra Geertz. Kroppen som metoderedskap er Øygardens grep blant boksere, medspillerrollen er Brochs i håndballmiljøet, og lærlingrollen hører til Wadels work-along.",
    },
    {
      question: "Hva kan et feltarbeid i ett miljø aldri fortelle oss?",
      options: ["Hvor vanlig det observerte er, siden utbredelse krever et helt annet design", "Hvordan deltakerne selv forstår det som foregår i den aktuelle situasjonen", "Hvilke uskrevne regler som gjelder mellom deltakerne i miljøet", "Hvordan rutiner utføres når ingen forklarer noe for forskeren"],
      explanation: "Riktig svar er utbredelse: spørsmål om hvor vanlig noe er, krever tilfeldig utvalg og statistisk behandling. De tre andre er nettopp det deltakende observasjon er sterkest på — mening, uskrevne regler og praksis slik den faktisk utføres.",
    },
  ],
  'svmet1010-3-2': [
    {
      question: "Hva skiller formell adgang fra sosial adgang i et feltarbeid?",
      options: ["Formell adgang gis av en instans med myndighet, sosial adgang av dem som er der", "Formell adgang gjelder lokalet, mens sosial adgang gjelder retten til å notere", "Formell adgang søkes skriftlig, mens sosial adgang avtales muntlig underveis", "Formell adgang varer hele prosjektet, mens sosial adgang må fornyes hver uke"],
      explanation: "Riktig svar er hvem som gir hva: tillatelsen kommer ovenfra, aksepten nedenfra. Skillet gjelder ikke lokale mot notatrett, ikke skriftlig mot muntlig form, og ikke varighet — sosial adgang opparbeides over tid, den fornyes ikke etter en fast rytme.",
    },
    {
      question: "Hvorfor kan formell tillatelse gjøre tilliten i feltet vanskeligere?",
      options: ["Fordi en forsker sluppet inn av ledelsen kan leses som ledelsens forlengede arm", "Fordi ledelsen som regel setter betingelser som begrenser hva som kan observeres", "Fordi deltakerne da mister muligheten til å reservere seg mot å bli observert", "Fordi tillatelsen ofte kommer så sent at feltarbeidet må kortes ned i tid"],
      explanation: "Riktig svar er mistanken om hvem forskeren egentlig representerer. Betingelser fra ledelsen forekommer, men er et annet problem. Deltakerne beholder sin rett til å reservere seg uansett, og forsinkelser er en praktisk og ikke en tillitsmessig sak.",
    },
    {
      question: "Hva er en nøkkelinformant?",
      options: ["En person i feltet som har oversikt og forklarer sammenhenger for forskeren", "En person som kontrollerer adgangen til feltet og kan nekte forskeren innpass", "Den informanten som blir intervjuet flest ganger i løpet av prosjektet", "Den første personen forskeren kommer i kontakt med i et nytt felt"],
      explanation: "Riktig svar er personen som forklarer feltet. Den som kontrollerer adgangen, er en portvakt — han kan si nei, mens nøkkelinformanten bare forklarer. Antall intervjuer og rekkefølgen på kontakter avgjør ingenting.",
    },
    {
      question: "Hva er faren ved å støtte seg tungt på én nøkkelinformant?",
      options: ["At forskeren arver informantens posisjon, perspektiv og konflikter i feltet", "At informanten kan trekke seg og etterlate forskeren uten data å arbeide med", "At informanten får for stor innflytelse over hvordan funnene blir formulert", "At forskeren bruker for mye tid på én person og for lite på resten av feltet"],
      explanation: "Riktig svar er at posisjonen arves: perspektivet og fiendskapene følger med. At informanten kan trekke seg, er en praktisk risiko. Innflytelse over formuleringene er et annet forhold, og tidsbruk er et disponeringsspørsmål.",
    },
    {
      question: "Hva betyr «deep hanging out», og hvem stammer uttrykket fra?",
      options: ["Å henge med over tid uten fast agenda; uttrykket stammer fra Geertz", "Å delta fullt i alle aktiviteter over lang tid; uttrykket stammer fra Fangen", "Å bo i feltet gjennom hele feltarbeidet; uttrykket stammer fra Ugelvik", "Å følge deltakerne på tvers av flere steder; uttrykket stammer fra Wadel"],
      explanation: "Riktig svar er å henge med over tid, med Geertz som opphav og Ugelvik som den som bruker det om sitt fengselsfeltarbeid. Å tilskrive uttrykket til Ugelvik eller Fangen alene er en dokumentert glidning, og å følge deltakere på tvers av steder er multilokalt feltarbeid.",
    },
    {
      question: "Hva er en tykk beskrivelse?",
      options: ["En beskrivelse som også får med hva handlingen betyr i sin sammenheng", "En beskrivelse som er så detaljert at ingenting av det observerte utelates", "En beskrivelse som gjengir informantenes egne ord uten forskerens tolkning", "En beskrivelse som er skrevet ut i full tekst rett etter at observasjonen skjedde"],
      explanation: "Riktig svar er at betydningen i sammenhengen er med — blunket som signal og ikke bare som en trekning i øyelokket. Detaljmengde alene gjør ikke en beskrivelse tykk, ordrett gjengivelse er noe annet, og tidspunktet for nedskriving er et spørsmål om feltnotatpraksis.",
    },
    {
      question: "Hva er den første akten i Ugelviks faseforløp?",
      options: ["Å være den mistenkelige fremmede som ingen vet hvem arbeider for", "Å forhandle med institusjonen om tillatelse til å oppholde seg i feltet", "Å prøve ut posisjoner og lære kodene for hva som er passende", "Å bli en betrodd fortrolig som får vite ting han ikke ba om"],
      explanation: "Riktig svar er den mistenkelige fremmede: han er sluppet inn ovenfra, og alle vurderer hvem han egentlig representerer. Forhandlingen om tillatelse skjer før forløpet begynner, mens de to øvrige alternativene er akt to og akt tre.",
    },
    {
      question: "Hva er hovedpoenget med Ugelviks tre-akters forløp?",
      options: ["At posisjonen forhandles fram over tid og ikke velges én gang på forhånd", "At ethvert feltarbeid må gjennom nøyaktig tre faser for i det hele tatt å lykkes", "At forskeren bør sikte mot å bli betrodd fortrolig så raskt som mulig", "At tillit i institusjoner bare kan bygges gjennom ledelsens medvirkning"],
      explanation: "Riktig svar er at rollen har en historie: den blir til i møtet mellom det forskeren ønsker og det feltet tilbyr. Antallet faser er en beskrivelse og ikke en regel, hastighet er ikke et mål i seg selv, og ledelsens medvirkning var nettopp det som gjorde tilliten vanskelig i Ugelviks tilfelle.",
    },
    {
      question: "Hva er den viktigste kostnaden ved å bli betrodd fortrolig i et felt?",
      options: ["At det som betros, ofte er delt med en person og ikke med et prosjekt", "At forskeren får altfor mye materiale til å kunne analysere alt sammen grundig", "At deltakerne forventer at forskeren tar parti i interne konflikter", "At forskeren mister muligheten til å stille grunnleggende spørsmål"],
      explanation: "Riktig svar er at fortroligheten skaper et vanskelig spørsmål om hva som kan brukes. Materialmengde er et praktisk problem, forventninger om partiskhet er en form for rollekonflikt, og gode feltarbeidere kan fortsatt stille naive spørsmål lenge.",
    },
    {
      question: "Hva er autoetnografi slik Ugelvik bruker skrivemåten?",
      options: ["At forskerens egne erfaringer i feltet inngår som en del av materialet", "At forskeren skriver om sitt eget miljø i stedet for om et miljø som er fremmed", "At forskeren fører en personlig dagbok ved siden av feltnotatene", "At forskeren lar informantene lese og kommentere den ferdige teksten"],
      explanation: "Riktig svar er at egne erfaringer inngår analytisk i materialet. Å studere sitt eget miljø er noe annet, en personlig dagbok er en notatpraksis, og å la informantene lese teksten er en form for tilbakeføring av funn.",
    },
    {
      question: "Hva er grensen for hvordan forskerens egen erfaring kan brukes?",
      options: ["Den er en inngang til forståelse, ikke et belegg for hva andre føler", "Den kan bare brukes dersom forskeren har deltatt i minst ett år", "Den må alltid støttes av intervjuer med minst tre andre deltakere", "Den hører hjemme i metodekapitlet og ikke i analysen av materialet"],
      explanation: "Riktig svar er skillet mellom inngang og belegg: forskeren er én person, og hun deltar på andre vilkår enn de andre. Det finnes ingen tidsgrense eller kvote for støttende intervjuer, og erfaringen kan godt brukes analytisk og ikke bare metodisk.",
    },
    {
      question: "Hvilket metodegrep eier Brochs håndballfeltarbeid?",
      options: ["Medspillerrollen, som gir tilgang til det som skjer i selve utøvelsen", "Kroppen som metoderedskap, brukt til å forstå smerte og risiko", "Lærlingrollen, som gir en legitim grunn til å spørre om det selvfølgelige", "Å henge med over tid uten fast agenda i en lukket institusjon"],
      explanation: "Riktig svar er medspillerrollen. Kroppen som metoderedskap er Øygardens grep blant boksere, lærlingrollen hører til Wadels work-along, og å henge med over tid er Ugelviks bruk av Geertz' uttrykk.",
    },
    {
      question: "Hva gir kroppen som metoderedskap tilgang til hos Øygarden?",
      options: ["Forholdet til smerte, frykt og disiplin, som utøverne selv mangler ord for", "Den formelle organiseringen av treningen og av konkurransene i det aktuelle miljøet", "Utøvernes egne forklaringer på hvorfor de begynte med idretten", "Statusforskjellene mellom utøverne slik de kommer til uttrykk i samtaler"],
      explanation: "Riktig svar er det kroppslige og innarbeidede, som er utilgjengelig i intervju nettopp fordi utøverne har sluttet å tenke over det. Organisering, begrunnelser og samtalebasert status kan alle nås med andre metoder, og de er ikke det grepet eier.",
    },
    {
      question: "Hva brukes Bourgois' feltarbeid til som eksempel i dette emnet?",
      options: ["At tilgang i kriminaliserte miljøer må bygges over år, og at tilliten selv siler utvalget", "At skjult observasjon er helt nødvendig når virksomheten som studeres, er ulovlig", "At intervjuer er å foretrekke framfor observasjon når temaet er sensitivt", "At forskeren bør avstå fra å studere miljøer der det foregår lovbrudd"],
      explanation: "Riktig svar er sammenhengen mellom tid, tilgang og tillit — og at tilliten fungerte som en utvalgsmekanisme. Forskerrollen var åpen og ikke skjult, studien er et observasjonsarbeid og ikke et argument for intervju, og den er nettopp et eksempel på at slike miljøer kan studeres.",
    },
    {
      question: "Hva skiller å bruke en studie som eksempel fra å nevne den?",
      options: ["At metodepoenget hentes ut og brukes til å begrunne noe i din egen tekst", "At studien beskrives med årstall, tittel og utgivelsessted i teksten", "At studien får et eget avsnitt i stedet for å nevnes i en bisetning", "At studien sammenlignes med minst én annen studie fra pensumlista"],
      explanation: "Riktig svar er at metodepoenget gjør arbeid i teksten. Bibliografiske detaljer, avsnittslengde og sammenligninger er formelle grep — et forskernavn uten et metodepoeng er fortsatt ikke pensumbruk.",
    },
    {
      question: "Hva er work-along, og hvem står bak begrepet?",
      options: ["Å arbeide sammen med dem man studerer, i deres eget arbeid; Wadel", "Å gå ved siden av en deltaker og samtale underveis på ruten; Wadel", "Å følge et fenomen på tvers av flere steder over tid; Fangen", "Å delta fullt i en aktivitet uten å skjule forskerrollen; Fangen"],
      explanation: "Riktig svar er å arbeide sammen med dem man studerer, hos Wadel. Å gå ved siden av er walk-along, å følge et fenomen på tvers av steder er multilokalt feltarbeid, og full åpen deltakelse er en posisjon på Fangens kontinuum — ikke work-along.",
    },
    {
      question: "Hvorfor er lærlingrollen metodisk gunstig?",
      options: ["Den gir en legitim grunn til å spørre om det som ellers er for selvfølgelig å spørre om", "Den gjør at forskeren raskt får tildelt de mest sentrale oppgavene i virksomheten", "Den fritar forskeren fra å delta i situasjoner som er etisk vanskelige", "Den gjør at deltakerne oppfatter forskeren som en kollega på like fot"],
      explanation: "Riktig svar er nybegynnerens rett til å spørre om det selvfølgelige. Lærlingen får tvert imot de perifere oppgavene, rollen fritar ikke for etiske vurderinger, og en lærling er nettopp ikke en kollega på like fot.",
    },
    {
      question: "Hva er walk-along?",
      options: ["Å følge en deltaker gjennom en rute og samtale mens man går", "Å arbeide sammen med deltakeren i hennes eget arbeid over tid", "Å observere bevegelsesmønstre i et område uten å snakke med noen", "Å intervjue flere deltakere etter hverandre på samme sted i felten"],
      explanation: "Riktig svar er å gå ved siden av, der omgivelsene utløser fortellinger. Å arbeide sammen er work-along, ren observasjon av bevegelser mangler samtaledelen, og en rekke intervjuer på samme sted er noe helt annet.",
    },
    {
      question: "Hvorfor er avslutningen av et feltarbeid også en etisk oppgave?",
      options: ["Fordi deltakerne har investert tid og fortrolighet og ikke bare er en datakilde", "Fordi hele materialet må slettes innen en bestemt frist etter siste feltdag i prosjektet", "Fordi forskeren plikter å gi deltakerne rett til å godkjenne den ferdige teksten", "Fordi feltet ellers kan nekte andre forskere adgang i framtidige prosjekter"],
      explanation: "Riktig svar er at deltakerne har gitt av seg selv og fortjener en ordentlig avslutning. Sletting følger av andre regler, deltakerne har ingen godkjenningsrett over teksten, og hensynet til framtidige forskere er et praktisk og ikke et etisk argument.",
    },
    {
      question: "Hvorfor må både varighet og intensitet oppgis om et feltarbeid?",
      options: ["Fordi ett år med månedlige besøk er noe annet enn tre måneder med daglig nærvær", "Fordi forskningsetikken krever at all tid i feltet dokumenteres nøyaktig", "Fordi antall timer i feltet avgjør hvor mange informanter som trengs", "Fordi leseren trenger tallene for å vurdere om utvalget er stort nok"],
      explanation: "Riktig svar er at kombinasjonen avgjør hvor langt forskeren rekker i forløpet. Etikken stiller ingen slike dokumentasjonskrav, antall timer bestemmer ikke antall informanter, og utvalgsstørrelse måles ikke i kvalitative studier på den måten.",
    },
  ],
  'svmet1010-3-3': [
    {
      question: "Hva er et feltnotat?",
      options: ["Forskerens nedtegnelse av det hun har sett, hørt, gjort og tenkt i feltet", "Den ordrette utskriften av lydopptak gjort i løpet av et feltarbeid", "Oppsummeringen forskeren skriver når hele feltarbeidet er avsluttet", "Den loggen som føres over hvem som har samtykket til å delta i studien"],
      explanation: "Riktig svar er nedtegnelsen ført nær hendelsen i tid. En ordrett utskrift er en transkripsjon av noe som finnes på opptak. En sluttoppsummering er skrevet fra hukommelsen, og en samtykkelogg er et administrativt dokument.",
    },
    {
      question: "Hvem gir den mest detaljerte inndelingen av feltnotattyper i pensum?",
      options: ["Tjora, som opererer med ti ulike typer notater", "Fangen, som opererer med fire ulike typer notater", "Ugelvik, som opererer med tre ulike typer notater", "Weiss, som opererer med to ulike typer notater"],
      explanation: "Riktig svar er Tjora med ti typer. Fangen gir råd om nedtegning, men ikke typologien. Ugelvik bruker feltnotater som empiri, og Weiss skriver om intervju og ikke om observasjon.",
    },
    {
      question: "Hva forventes en kandidat å kunne om Tjoras ti notattyper?",
      options: ["Hovedskillet og hensikten, ikke alle ti typene ramset opp", "Alle ti typene i riktig rekkefølge, med ett eksempel per type", "De fem viktigste av typene, med begrunnelse for hvorfor de er viktigst", "Hvilke av typene som er obligatoriske og hvilke som er valgfrie"],
      explanation: "Riktig svar er hovedskillet og hensikten: ingen forventes å ramse opp alle ti. Å liste typene uten å si hva de er til for, er skjema uten forståelse. Det finnes verken en rangering av de viktigste eller en inndeling i obligatoriske og valgfrie.",
    },
    {
      question: "Hva er hovedskillet mellom feltnotattypene?",
      options: ["Deskriptive, teoretiske og metodiske notater", "Skriftlige, muntlige og visuelle notater", "Notater fra felt, fra intervju og fra dokumenter", "Foreløpige, bearbeidede og publiseringsklare notater"],
      explanation: "Riktig svar er tredelingen etter hva notatet handler om: hendelsen, betydningen eller framgangsmåten. De øvrige inndelingene finnes, men de er inndelinger etter medium, kilde eller bearbeidingsgrad — ikke etter notatets funksjon.",
    },
    {
      question: "Hva kjennetegner et deskriptivt notat?",
      options: ["Det gjengir hva som skjedde, så konkret at leseren kan se situasjonen", "Det gjengir forskerens vurdering av hva situasjonen betydde for deltakerne", "Det gjengir hvordan datainnsamlingen gikk og hva som eventuelt gikk galt", "Det gjengir informantenes egne forklaringer på hvorfor de handlet slik"],
      explanation: "Riktig svar er den konkrete gjengivelsen av hendelsen. Vurderinger hører til teoretiske notater, opplysninger om datainnsamlingen til metodiske, og informantenes egne forklaringer er utsagn som også må gjengis deskriptivt for å kunne brukes.",
    },
    {
      question: "Hva er et metodisk notat?",
      options: ["Et notat om selve datainnsamlingen: varighet, sted, hvem som var der, hva som gikk galt", "Et notat om hvilken analysemetode som skal brukes når materialet er ferdig", "Et notat om hvilke teoretiske begreper som passer på det observerte", "Et notat om hvilke metodiske svakheter som bør nevnes i det ferdige arbeidet"],
      explanation: "Riktig svar gjelder omstendighetene rundt innsamlingen. Valg av analysemetode hører til designet, teoretiske begreper til de teoretiske notatene, og en liste over svakheter er noe man senere skriver ut fra de metodiske notatene.",
    },
    {
      question: "Hvorfor er de metodiske notatene grunnlaget for transparens?",
      options: ["Fordi opplysningene om tid, sted, varighet og relasjoner faktisk oppstår der", "Fordi de er de eneste notatene som kan siteres direkte i den ferdige teksten", "Fordi de dokumenterer at forskeren har fulgt de etiske retningslinjene", "Fordi de gjør det mulig for en annen forsker å gjenta studien identisk"],
      explanation: "Riktig svar er at metodekapitlets opplysninger hentes derfra. Alle notattyper kan siteres, etterlevelse av etiske krav dokumenteres på andre måter, og identisk gjentakelse er verken mulig eller målet i kvalitativ forskning — transparens er nettopp kompensasjonen for det.",
    },
    {
      question: "Hva menes med at analysen begynner allerede i felt?",
      options: ["At de teoretiske notatene formulerer mønstre som kan prøves mens materialet vokser", "At forskeren koder materialet fortløpende i det programmet hun skal bruke senere", "At forskeren avslutter datainnsamlingen så snart et mønster har vist seg tydelig", "At de første observasjonene avgjør hvilken analysemetode som skal velges"],
      explanation: "Riktig svar er at tidlige tolkninger kan prøves videre mens feltarbeidet pågår — det er nettopp kvalitativ fleksibilitet i praksis. Systematisk koding hører til etter innsamlingen, og verken avslutningstidspunktet eller metodevalget avgjøres av de første observasjonene.",
    },
    {
      question: "Hva innebærer det at feltnotater brukes som empiri hos Ugelvik?",
      options: ["At utdrag fra notatene siteres direkte og analyseres i den ferdige teksten", "At notatene arkiveres og gjøres tilgjengelige for andre forskere i ettertid", "At notatene erstatter intervjuer som eneste datakilde i studien", "At notatene skrives i en form som ligner mest mulig på ferdig tekst"],
      explanation: "Riktig svar er at notatene siteres og analyseres, også notatene om forskerens egen posisjon. Arkivering og deling er noe annet, notatene erstatter ikke andre datakilder som prinsipp, og skrivestilen er en konsekvens av at de skal kunne siteres, ikke definisjonen.",
    },
    {
      question: "Hva er gevinsten ved å notere underveis i situasjonen?",
      options: ["Presisjon: ordvalg, rekkefølge og detaljer er intakte i notatet", "Objektivitet: notatet blir upåvirket av forskerens egne tolkninger", "Fullstendighet: alt som skjer, blir registrert i sanntid", "Effektivitet: forskeren slipper å bruke tid på skriving om kvelden"],
      explanation: "Riktig svar er presisjonen. Objektivitet oppnås ikke — også et notat ført i situasjonen er et utvalg forskeren gjør. Fullstendighet er umulig, og tiden om kvelden går uansett med til å skrive ut.",
    },
    {
      question: "Hva er den viktigste prisen ved å notere underveis?",
      options: ["Notatblokka er synlig og påvirker det som skjer i situasjonen", "Notatene blir mindre lesbare fordi de skrives raskt og under press", "Forskeren rekker ikke å tolke det hun ser mens hun skriver ned", "Feltet oppfatter forskeren som mer profesjonell enn hun ønsker"],
      explanation: "Riktig svar er at registreringen påvirker situasjonen, og at den i tillegg signaliserer avstand i en fase der tillit skal bygges. Lesbarhet er en praktisk detalj, tolkning kan gjøres etterpå, og hvordan forskeren framstår, er ikke hovedproblemet.",
    },
    {
      question: "Hva er motgrepet når rollen gjør det umulig å notere underveis?",
      options: ["Korte stikkord i felten som skrives ut i full tekst så snart som mulig", "Å be en kollega i feltet om å notere på forskerens vegne underveis", "Å ta lydopptak av alt som skjer og skrive ut opptakene i etterkant", "Å begrense observasjonen til situasjoner der notering er mulig"],
      explanation: "Riktig svar er stikkord pluss rask utskriving. Å la en deltaker notere flytter utvalget over til noen andre, kontinuerlig lydopptak reiser store etiske og praktiske problemer, og å velge bort situasjoner der notering er vanskelig, ville utelukket nettopp det studien handler om.",
    },
    {
      question: "Hvorfor bør beskrivelsen i et feltnotat holdes fri for tolkning?",
      options: ["Fordi en beskrivelse kan tolkes på nytt senere, mens en tolkning bare kan bekreftes", "Fordi tolkninger i notatene regnes som en metodisk feil i kvalitativ forskning", "Fordi sensor krever at feltnotater er rene beskrivelser uten forskerens stemme", "Fordi tolkninger gjør notatene for lange til å kunne brukes i analysen"],
      explanation: "Riktig svar er gjenbrukbarheten: beskrivelsen kan leses med et hvilket som helst begrep senere. Tolkning i notatene er ikke en feil — den er analysens første fase, så lenge den er merket. Verken sensorkrav eller lengde er poenget.",
    },
    {
      question: "Hva er den vanligste feilen i et kortsvar om feltnotater?",
      options: ["Å ramse opp typene uten å forklare hovedskillet og hensikten med dem", "Å bruke for lang tid på å forklare forskjellen mellom felt og laboratorium", "Å nevne at notatene kan brukes som empiri, noe som regnes som en overdrivelse", "Å oppgi et annet antall notattyper enn det pensumforfatteren opererer med"],
      explanation: "Riktig svar er lista uten forklaring — skjema uten forståelse. At notatene kan være empiri, er tvert imot et pluss og kan belegges med Ugelvik. Antallet typer er ikke det som testes, og laboratoriesammenligningen hører ikke hjemme her.",
    },
    {
      question: "Hvordan henger notatpraksis sammen med rollevalget?",
      options: ["Jo mer forskeren deltar, jo mindre mulig er det å notere underveis", "Jo mer forskeren deltar, jo flere notattyper må hun føre parallelt", "Jo mer forskeren deltar, jo mindre behov har hun for metodiske notater", "Jo mer forskeren deltar, jo mer detaljerte blir notatene automatisk"],
      explanation: "Riktig svar er at deltakelsen tar hendene og oppmerksomheten, slik at notering underveis blir umulig. Antall notattyper avhenger ikke av rollen; behovet for metodiske notater øker snarere med deltakelsen; og detaljnivået blir dårligere, ikke bedre, når alt må skrives fra hukommelsen.",
    },
  ],
  'svmet1010-4-1': [
    {
      question: "Hva er en markør slik Weiss bruker begrepet?",
      options: ["Et flyktig hint informanten selv slipper om noe viktig eller sensitivt", "Et oppfølgingsspørsmål forskeren stiller for å få informanten til å utdype", "En merking i transkripsjonen som viser hvor et nytt tema begynner i teksten", "Et fast punkt i intervjuguiden som alle informantene skal innom i samtalen"],
      explanation: "Riktig svar er at markøren er et flyktig hint informanten selv slipper, ofte en halv setning midt i noe annet. Distraktoren om oppfølgingsspørsmål beskriver proben, som er forskerens handling — det er den vanligste sammenblandingen. De to øvrige flytter begrepet til transkripsjon og guide, der det ikke hører hjemme.",
    },
    {
      question: "Hva er en probe?",
      options: ["Et oppfølgingsgrep fra intervjueren som ber informanten utdype det hun sa", "Et signal fra informanten om at et tema er vanskelig eller føles sensitivt", "Et prøveintervju som gjennomføres før den egentlige datainnsamlingen starter", "En skalavariabel som brukes til å måle hvor viktig et tema er for informanten"],
      explanation: "Riktig svar er at proben er noe intervjueren gjør: hun ber om mer av det som allerede er sagt. Signalet fra informanten er markøren, og prøveintervjuet er pilotintervjuet. Skalavariabelen hører til kvantitativ datainnsamling.",
    },
    {
      question: "Hvem er avsenderen for begrepene markør, intervjuguide og pilotintervju i dette emnet?",
      options: ["Weiss", "Fangen", "Tellmann og Leseth", "Tjora"],
      explanation: "Riktig svar er Weiss, som er emnets faste anker for intervjuhåndverket. Fangen eier deltakerrollene og overførbarhet, Tellmann og Leseth eier utvalgstypene, og Tjora eier feltnotattypene. Kortsvarene lever av at avsenderen stemmer.",
    },
    {
      question: "Hva kjennetegner en semistrukturert intervjuguide?",
      options: ["Faste temaer, men fri rekkefølge og fri oppfølging underveis i samtalen", "Faste spørsmål i fast rekkefølge, stilt helt likt til alle informantene", "Ett åpningsspørsmål, og deretter styrer informanten hele samtalens gang", "Faste svarkategorier som informanten plasserer sine egne erfaringer i"],
      explanation: "Riktig svar er at temaene ligger fast mens rekkefølge og oppfølging er fri. Den andre beskrivelsen er den strukturerte guiden, den tredje er den åpne, og den fjerde er et spørreskjema — altså feil #2 i praksis.",
    },
    {
      question: "Hva er hovedargumentet FOR å bruke en stram struktur i intervjuguiden?",
      options: ["At informantene kan sammenlignes på tvers, fordi de har snakket om det samme", "At samtalen blir kortere, og at forskeren dermed rekker flere informanter", "At informanten får styre hva som er viktig, og bringer inn nye temaer selv", "At materialet kan telles opp og gi et presist anslag på hvor utbredt noe faktisk er"],
      explanation: "Riktig svar er sammenlignbarhet: mønstre på tvers krever at informantene har vært innom noe av det samme. Tidsbesparelse er ikke et faglig argument, informantstyring er argumentet for åpenhet, og opptelling av utbredelse hører til kvantitativ logikk og er nettopp fellen.",
    },
    {
      question: "Hva er et pilotintervju?",
      options: ["Et prøveintervju som tester om guiden fungerer før datainnsamlingen starter", "Det første intervjuet i det ferdige materialet, som analyseres grundigst av alle", "Et intervju med en portvakt for å få adgang til resten av feltet man studerer", "En kort telefonsamtale der informanten samtykker til å delta i prosjektet"],
      explanation: "Riktig svar er prøveintervjuet som tester guiden: forstås spørsmålene, holder rekkefølgen, mangler noe? Hos Weiss er guiden ikke ferdig før den er prøvd. De øvrige beskriver et analysevalg, en adgangsforhandling og en samtykkeprosedyre.",
    },
    {
      question: "Hva advarer Weiss mot når han skriver om å bli fanget av guiden?",
      options: ["At intervjueren følger neste punkt på lista og går glipp av et viktigere spor", "At intervjueren improviserer så mye at temaene i guiden aldri blir ordentlig dekket", "At guiden blir skrevet om så ofte at intervjuene ikke kan sammenlignes", "At informanten får se guiden på forhånd og forbereder svarene sine på den"],
      explanation: "Riktig svar er at intervjueren holder fast ved lista når informanten nettopp har åpnet noe viktigere. Resultatet er et materiale der alt er dekket og ingenting utdypet. De andre beskriver reelle problemer, men ikke det Weiss advarer mot her.",
    },
    {
      question: "Hva er kjennetegnet på et konstaterende spørsmål?",
      options: ["Det ber informanten fastslå hva som skjedde, altså noe som forutsettes å foreligge", "Det ber informanten tolke og vurdere, slik at svaret først blir til mens hun snakker", "Det inneholder allerede vurderingen som informanten forventes å bekrefte", "Det kan besvares med ja eller nei, og gir derfor svært korte svar i materialet"],
      explanation: "Riktig svar er at spørsmålet ber om noe som allerede foreligger: hva skjedde, hvem var der, hva gjorde du. Det andre beskriver konstruktive spørsmål, det tredje ledende spørsmål, og det fjerde lukkede spørsmål — som er en annen akse enn konstaterende og konstruktiv.",
    },
    {
      question: "Hvem er avsenderen for begrepsparet konstaterende og konstruktive spørsmål?",
      options: ["Ingen enkelt pensumforfatter — det er norsk undervisningsterminologi", "Weiss, som innfører paret i sitt kapittel om intervjuguidens oppbygning", "Fangen, som bruker paret i sammenheng med fortolkningsgradene sine", "Corbin og Strauss, som knytter paret til kodingen i grounded theory"],
      explanation: "Riktig svar er at paret ikke har én pensumforfatter: det er norsk terminologi fra forelesning og antologistoff, og skal skrives uten forfatternavn. Å tilskrive det Weiss er en dokumentert glidning sensor merker.",
    },
    {
      question: "Hva er problemet med et ledende spørsmål?",
      options: ["Vurderingen kommer fra intervjueren, og forskeren får sin antakelse i sitatform", "Det er så åpent formulert at informanten ikke vet hva hun skal svare på", "Det krever et ja eller nei, og gir dermed for lite tekst til å kunne tolkes", "Det handler om et forhold informanten ikke har førstehåndskunnskap om i det hele tatt"],
      explanation: "Riktig svar er at forskeren legger vurderingen inn i spørsmålet og får den bekreftet. Distraktoren om åpenhet snur problemet på hodet, den om ja eller nei beskriver lukkede spørsmål, og den siste beskriver et relevansproblem.",
    },
    {
      question: "Hvorfor legges de sensitive temaene sent i intervjuguiden?",
      options: ["Fordi et sensitivt spørsmål stilt tidlig får et kort svar som sjelden kan tas igjen", "Fordi informanten da er sliten og svarer mer spontant enn tidlig i samtalen", "Fordi opptaket ellers blir altfor langt til å kunne skrives ut i sin helhet etterpå", "Fordi forskeren trenger tid til å bestemme hvilke temaer som er sensitive"],
      explanation: "Riktig svar er at rekkefølgen er et datakvalitetsgrep: tillit tar tid, og samme spørsmål gir et helt annet svar etter tjue minutters konkret beskrivelse. De øvrige er praktiske hensyn uten faglig dekning.",
    },
    {
      question: "Hva er hovedsvakheten ved dybdeintervjuet som datakilde?",
      options: ["Dataene er selvrapporterte, og fortelling om handling er ikke det samme som handling", "Dataene er for mange til at én forsker kan lese gjennom hele materialet alene", "Dataene kan ikke skrives ut til tekst, og må derfor analyseres direkte fra lyd", "Dataene mangler kontekst, fordi informanten aldri får fortelle om egne erfaringer"],
      explanation: "Riktig svar er selvrapporteringen: informanten forteller det hun husker og vil dele, og avstanden til faktisk praksis er et kjent metodeproblem. De tre øvrige beskriver situasjoner som ikke er kjennetegn ved metoden.",
    },
    {
      question: "Hva menes med at intervjuet er en reaktiv datakilde?",
      options: ["Dataene blir til fordi forskeren er til stede og spør, og formes av situasjonen", "Informanten reagerer følelsesmessig på spørsmålene og avbryter intervjuet", "Materialet må analyseres raskt, ellers reagerer det ikke lenger på kodingen", "Forskeren reagerer på det informanten sier, og endrer forskningsspørsmålet"],
      explanation: "Riktig svar er at dataene skapes i møtet: spørsmålsformulering, rom og relasjon virker inn. Det er derfor transparens om omstendighetene er et krav. De andre gir ordet reaktiv en betydning det ikke har i metodefaget.",
    },
    {
      question: "Hva er et skjult spørreskjema i en intervjustudie?",
      options: ["En guide med skalaer og faste kategorier som gir tall forkledd som samtale", "En guide informanten ikke får se, slik at spørsmålene kommer overraskende", "Et sett tilleggsspørsmål forskeren bare stiller til noen av informantene", "En liste over bakgrunnsopplysninger som fylles ut etter at intervjuet er over"],
      explanation: "Riktig svar er guiden som ser kvalitativ ut, men fungerer kvantitativt: skalaspørsmål, faste kategorier, ingen plass til oppfølging. Dette er feil #2. De øvrige beskriver praksiser som kan være uheldige, men som ikke er den feilen.",
    },
    {
      question: "Hvordan skriver du om spørsmålet «hvor ofte opplever du tidspress?» i kvalitativ retning?",
      options: ["«Kan du fortelle om en vakt der tidspresset ble merkbart, og hva som skjedde?»", "«Vil du si at du opplever tidspress ofte, av og til, sjelden eller aldri?»", "«Hvor stort er tidspresset ditt på en skala fra én til fem, der fem er høyest?»", "«Er du enig i at tidspresset i denne sektoren har økt de siste ti årene?»"],
      explanation: "Riktig svar er å be om en konkret hendelse i stedet for en frekvens. Da får du et forløp du kan tolke, og informantens egen vurdering på kjøpet. De tre øvrige er frekvens-, skala- og holdningsspørsmål — altså den samme feilen i tre drakter.",
    },
    {
      question: "Hva kjennetegner det biografiske intervjuet?",
      options: ["Livsløpet er datastrukturen, og forskeren følger informantens kronologi", "Forskerens temaliste er datastrukturen, og kronologien spiller ingen rolle", "Flere informanter forteller sammen, og samspillet mellom dem blir data", "Informanten skriver sin egen livshistorie, og forskeren analyserer teksten"],
      explanation: "Riktig svar er at kronologien styrer: informanten forteller sammenhengende om et livsløp. Temalisten hører til dybdeintervjuet, samspillet til fokusgruppen, og den siste beskrivelsen er et skriftlig materiale, ikke et intervju.",
    },
    {
      question: "Hva er etterrasjonalisering i intervjusammenheng?",
      options: ["At informanten forteller om egne valg som mer planlagte enn de var der og da", "At forskeren endrer tolkningen sin etter at analysen formelt er avsluttet", "At informanten trekker samtykket sitt tilbake når intervjuet er gjennomført", "At forskeren regner om kvalitative funn til tall for å kunne sammenligne dem"],
      explanation: "Riktig svar er at fortellingen om et valg blir ryddigere enn valget var. Det er ikke bare et problem: hvordan informanten forstår valget nå, er selv et funn. De øvrige beskriver andre forhold ved forskningsprosessen.",
    },
    {
      question: "Når er lydopptak et nødvendig metodevalg, ikke bare et praktisk?",
      options: ["Når analysen gjelder hvordan noe sies, ikke bare hva som sies", "Når intervjuene varer mer enn førtifem minutter hver gang", "Når informantene er flere enn ti, og materialet blir uoversiktlig", "Når intervjuet foregår hjemme hos informanten i stedet for på et kontor"],
      explanation: "Riktig svar er at formuleringer, nøling og pauser bare finnes i opptaket. Skal du analysere måten noe sies på, kreves det derfor opptak. De øvrige er praktiske forhold som ikke i seg selv avgjør datatypen.",
    },
    {
      question: "Hvorfor er transkripsjonen ikke en nøytral kopi av intervjuet?",
      options: ["Fordi valgene om pauser, latter og dialekt avgjør hva analysen kan få øye på", "Fordi automatisk utskrift alltid inneholder feil som forskeren ikke fanger opp", "Fordi informanten godkjenner utskriften og fjerner det hun ikke vil stå for", "Fordi utskriften anonymiseres, og navn dermed byttes ut med oppdiktede navn"],
      explanation: "Riktig svar er at detaljnivået er et analytisk valg: det du ikke skriver ut, kan du ikke analysere. De andre beskriver reelle forhold ved arbeidet, men de handler om nøyaktighet, samtykke og anonymisering, ikke om utskriftens analytiske form.",
    },
    {
      question: "Hvorfor er stedet intervjuet foregår på en del av datainnsamlingen?",
      options: ["Fordi hvem som kan høre og hvor trygt det føles, endrer hva som blir sagt", "Fordi reisetiden til stedet må trekkes fra tiden som er satt av til intervjuet", "Fordi lydkvaliteten i opptaket avgjør hvor nøyaktig utskriften kan bli", "Fordi forskeren må avtale sted for å kunne dokumentere at intervjuet fant sted"],
      explanation: "Riktig svar er at rommet påvirker hva informanten kan si og hvilken rolle hun snakker fra. Lydkvalitet og logistikk er praktiske hensyn; her er poenget at stedet former dataene og derfor skal beskrives åpent.",
    },
    {
      question: "Hva er hovedforskjellen mellom dybdeintervjuet og en spørreundersøkelse?",
      options: ["Kategoriene utvikles underveis hos få, i stedet for å ligge fast for mange", "Intervjuet gjennomføres muntlig, mens spørreundersøkelsen alltid er skriftlig", "Intervjuet krever samtykke, mens spørreundersøkelser kan gjennomføres anonymt", "Intervjuet gir sikrere svar, fordi forskeren kan sjekke at informanten er ærlig"],
      explanation: "Riktig svar gjelder hvor kategoriene kommer fra: dybdeintervjuet utvikler dem underveis, spørreundersøkelsen har dem klare. Form og samtykke er ikke det avgjørende skillet, og påstanden om sikrere svar er feil — begge metodene bygger på selvrapportering.",
    },
    {
      question: "Hva er kravet til et A-svar i sjangeren metodesammenligning?",
      options: ["Både kjennetegn, styrker og svakheter, og likheter og forskjeller må være med", "Metodene må presenteres etter hverandre, hver med sin egen grundige seksjon", "Minst fem metoder må dekkes, ellers regnes sammenligningen som for smal", "Én metode må velges til slutt, og de andre må avvises som uegnede"],
      explanation: "Riktig svar er at alle tre delene kreves; å være overbevisende på bare én gir et adekvat, men deskriptivt svar. Metode-for-metode-remsen er nettopp det strukturgrepet sjangeren straffer, og antall metoder følger av oppgaveteksten.",
    },
    {
      question: "Hva betyr det at metodekombinasjon ikke gir bonus i seg selv?",
      options: ["Det som teller er samsvaret mellom metode og problemstilling, ikke antall metoder", "Det er alltid bedre å velge én metode, fordi kombinasjoner blir for arbeidskrevende", "Kombinasjoner er bare tillatt når oppgaveteksten uttrykkelig ber om dem", "Kombinasjoner trekker ned, fordi de gjør analysen vanskeligere å gjennomføre"],
      explanation: "Riktig svar er at samsvaret er kriteriet: to metoder som hver svarer på sin dimensjon er godt, to metoder valgt for bredde er ikke. Distraktorene gjør regelen til et forbud eller et påbud, og det er den ikke.",
    },
    {
      question: "Hvilket metodepoeng eier studien «Gatekapital» av Sandberg og Pedersen?",
      options: ["At et analytisk begrep kan utvikles ut av materialet og forklare praksis innenfra", "At anonymisering krever at alder, reiserute og navn endres i publikasjonen", "At forskeren kan bli fortrolig i et lukket felt gjennom lang tids tilstedeværelse", "At gruppesamtaler gir tilgang til normer som enkeltintervjuer ikke får frem"],
      explanation: "Riktig svar er begrepsutvikling ut av materialet. Anonymiseringspoenget eies av Skilbrei, Tveit og Brunovskis, det lange feltoppholdet av Ugelvik, og gruppesamtale-poenget hører til fokusgruppelitteraturen.",
    },
    {
      question: "Hvilket metodepoeng eier Skilbrei, Tveit og Brunovskis sin studie?",
      options: ["At anonymisering er aktiv bearbeiding med en kostnad, ikke bare en formalitet", "At symbolske grenser kan brukes som arbeidsbegrep i analysen av intervjuer", "At intervjuguiden må piloteres før den egentlige datainnsamlingen begynner", "At forskeren bør veksle mellom nærhet og avstand gjennom hele feltarbeidet"],
      explanation: "Riktig svar er anonymiseringen: alder, reiserute og navn ble endret, også navnene informantene brukte i feltet. Symbolske grenser hører til Fjær, Pedersen og Sandberg, piloteringen til Weiss, og nærhet og avstand til rollestoffet hos Fangen.",
    },
    {
      question: "Hva er forskjellen på aksene åpen–lukket og konstaterende–konstruktiv?",
      options: ["Den første gjelder svarets form, den andre hva slags arbeid informanten bes gjøre", "Den første gjelder guiden som helhet, den andre gjelder det enkelte spørsmålet", "Den første gjelder sensitive tema, den andre gjelder ufarlige åpningsspørsmål", "Den første brukes i kvalitative studier, den andre bare i kvantitative studier"],
      explanation: "Riktig svar er at aksene måler ulike ting: om svaret krever en beskrivelse eller ett ord, mot om informanten skal rapportere eller tolke. Et konstaterende spørsmål kan godt være åpent, og det er nettopp den kombinasjonen som gir gode hendelsesbeskrivelser.",
    },
    {
      question: "Hva bør datainnsamlingsdelen i en designoppgave inneholde om intervjuene?",
      options: ["Utvalgstype, rekrutteringsvei, omfang, grad av struktur og hvordan de dokumenteres", "En fullstendig intervjuguide med alle spørsmålene skrevet ut i endelig form", "En oversikt over hvor mange prosent av populasjonen utvalget dekker", "En begrunnelse for hvorfor observasjon og webetnografi ikke finnes som metoder"],
      explanation: "Riktig svar er de fem konkrete opplysningene som gjør planen etterprøvbar. En full guide er verken mulig eller ventet på eksamen, dekningsgrad hører til kvantitativ logikk, og bortvalget skal begrunnes kort — ikke som et angrep på andre metoder.",
    },
    {
      question: "Hva er poenget med oppvarmingsspørsmålet?",
      options: ["Å etablere at informanten snakker og forskeren lytter, før noe krevende kommer", "Å avklare om informanten har forstått samtykkeskrivet hun har signert", "Å måle hvor lang tid informanten bruker på å svare på et enkelt spørsmål", "Å kontrollere at opptakeren virker før de viktige spørsmålene blir stilt"],
      explanation: "Riktig svar er at tonen settes tidlig: et intervju som åpner med det vanskeligste, får ofte korte svar hele veien. Samtykke, tidtaking og teknikk er praktiske forhold som ikke er begrunnelsen for spørsmålet.",
    },
    {
      question: "Hva innebærer feil #1 i intervjustoffet?",
      options: ["Å hevde at funnene gjelder generelt, ut fra beskrivelser fra få informanter", "Å gjengi informantenes utsagn uten å tolke dem eller gi dem noen retning", "Å bruke et analytisk begrep i innledningen uten å bruke det i analysen", "Å unnlate å drøfte at man har intervjuet personer man kjenner fra før"],
      explanation: "Riktig svar er kvantitativ logikk i kvalitativ kontekst — påstander om utbredelse fra et lite, strategisk utvalg. Riktig språk er overførbarhet. De tre andre er også dokumenterte feil, men de er henholdsvis ren deskripsjon, avstand mellom empiri og teori, og udrøftet nærhet til informantene.",
    },
    {
      question: "Hvorfor er intervjuguiden også et transparensverktøy?",
      options: ["Fordi å redegjøre for hvordan den ble til og endret gjør innsamlingen etterprøvbar", "Fordi den viser leseren hvilke informanter som svarte hva på hvilket spørsmål", "Fordi den dokumenterer at alle informantene fikk nøyaktig samme spørsmål", "Fordi den erstatter kravet om å beskrive tid, sted og varighet for intervjuene"],
      explanation: "Riktig svar er at guidens tilblivelse og endringer er en del av det leseren trenger for å vurdere materialet. Guiden erstatter ikke redegjørelsen for omstendighetene, og lik ordlyd til alle er verken målet eller kravet i et kvalitativt design.",
    },
  ],
  'svmet1010-4-2': [
    {
      question: "Hva betyr asymmetri mellom forsker og informant?",
      options: ["At forholdet mellom de to ikke er likestilt, selv om samtalen ser dagligdags ut", "At forskeren og informanten har ulik faglig bakgrunn og utdanningsnivå", "At intervjuene varer ulikt lenge, og at noen informanter sier mer enn andre", "At forskeren stiller flere spørsmål enn hun rekker å få svar på i løpet av tiden"],
      explanation: "Riktig svar er at forholdet er skjevt: én setter temaet, styrer samtalen og bestemmer til slutt hva materialet betyr. Ulik utdanning kan finnes, men er ikke begrepet. De to øvrige beskriver praktiske forhold ved gjennomføringen.",
    },
    {
      question: "Hva er definisjonsmakt i et forskningsintervju?",
      options: ["Forskerens makt til å bestemme hva informantens fortelling betyr til slutt", "Forskerens rett til å velge hvilke informanter som skal få delta i studien", "Informantens mulighet til å definere hvilke temaer intervjuet skal handle om", "Forskerens plikt til å definere alle fagbegreper hun bruker i besvarelsen sin"],
      explanation: "Riktig svar gjelder tolkningen etterpå: forskeren plasserer fortellingen i et begrepsapparat informanten ikke har valgt. Utvalgsvalg er noe annet, informantstyring er det motsatte, og begrepsavklaring er en skriveregel, ikke maktforhold.",
    },
    {
      question: "Hva sier vurderingskriteriene om å intervjue bekjente?",
      options: ["Det er lov, men fravær av drøfting trekker ned og god refleksjon trekker opp", "Det er ikke tillatt, fordi nærheten gjør materialet metodisk ubrukelig", "Det er uproblematisk, siden tillit alltid gir bedre og mer ærlige data", "Det er tillatt bare når forskeren har fått godkjenning fra en veileder først"],
      explanation: "Riktig svar er regelen slik den faktisk står: valget er tillatt, og det er drøftingen som vurderes. Forbudsvarianten og fribillett-varianten er begge for absolutte, og kravet om godkjenning finnes ikke.",
    },
    {
      question: "Hva er selvsensur i en intervjustudie?",
      options: ["At informanten holder tilbake det hun ikke vil at akkurat denne forskeren skal vite", "At forskeren stryker deler av materialet fordi det ikke passer analysen hennes", "At forskeren unnlater å stille spørsmål hun tror informanten synes er ubehagelige", "At informanten trekker samtykket sitt tilbake etter at intervjuet er gjennomført"],
      explanation: "Riktig svar handler om informantens tilbakeholdenhet, og den forsterkes når partene skal møtes igjen. Det andre beskriver selektiv analyse, det tredje forskerens forsiktighet, og det fjerde en samtykketrekking.",
    },
    {
      question: "Hva er rollesammenblanding?",
      options: ["At det blir uklart for begge om samtalen er et intervju eller en vanlig prat", "At forskeren tar to roller i feltet samtidig, for eksempel både ansatt og leder", "At informanten tror forskeren jobber for arbeidsgiveren i stedet for universitetet", "At flere forskere i samme prosjekt bruker ulike intervjuguider på samme informant"],
      explanation: "Riktig svar er uklarheten om når intervjuet pågår, og den svekker samtykket selv om skjemaet er signert. De øvrige beskriver andre rolleproblemer, men ikke det begrepet dekker her.",
    },
    {
      question: "Hvorfor er forskerens forhåndsforståelse både en styrke og en svakhet?",
      options: ["Den gir gode spørsmål, men gjør henne blind for det som er selvsagt i feltet", "Den sparer tid i analysen, men gjør transkripsjonen mindre nøyaktig", "Den gjør rekrutteringen enklere, men gir færre informanter å velge mellom", "Den styrker samtykket, men gjør anonymiseringen vanskeligere å gjennomføre"],
      explanation: "Riktig svar er tveeggetheten: du ser mer og du overser mer, samtidig. Motgrepet er å skrive ned antakelsene før første intervju og lete etter tilfeller som taler mot dem. De øvrige kobler forhåndsforståelse til forhold den ikke styrer.",
    },
    {
      question: "Hva er formålet med å lete etter negative tilfeller, slik Weiss beskriver det?",
      options: ["Å ta inn tilfeller som ikke passer, slik at det man sitter igjen med, blir holdbart", "Å finne informanter som er misfornøyde, slik at kritikk blir representert", "Å sikre at utvalget speiler fordelingen i befolkningen på sentrale kjennetegn", "Å luke ut intervjuer som avviker så mye at de forstyrrer den samlede analysen"],
      explanation: "Riktig svar er at avvikende tilfeller styrker holdbarheten, fordi påstanden må tåle dem. Å speile en fordeling er kvantitativ logikk, og å luke ut avvik er det motsatte av grepet.",
    },
    {
      question: "Hva er tilbakespill til informanten IKKE?",
      options: ["En test på om analysen er riktig", "En måte å rette opp misforståelser på", "Et grep som gir informanten litt kontroll", "En mulighet til å kommentere forståelsen"],
      explanation: "Riktig svar er at tilbakespill ikke er en sannhetstest: analysen skal ofte se noe informanten selv ikke ser, og gjenkjennelse gjør den verken riktig eller gal. De tre andre er nettopp det tilbakespill faktisk er godt for.",
    },
    {
      question: "Hva er refleksivitet i en metodedel?",
      options: ["Å vise hvordan din egen posisjon virket inn på det materialet du fikk", "Å beskrive hvordan arbeidet med prosjektet opplevdes for deg underveis", "Å gjenta forskningsspørsmålet i konklusjonen for å vise at det er besvart", "Å regne ut hvor mange informanter som trengs før materialet er mettet"],
      explanation: "Riktig svar er koblingen mellom posisjon og data. Distraktoren om egen opplevelse er den vanligste forvekslingen — den er selvbiografi, ikke refleksivitet. De to siste handler om struktur og om metning.",
    },
    {
      question: "Hvilke opplysninger krever transparens om omstendighetene rundt datainnsamlingen?",
      options: ["Tid, sted, varighet, antall informanter og hvilken relasjon forskeren hadde til dem", "Informantenes navn, alder, yrke og bosted, slik at leseren kan vurdere troverdigheten", "Alle spørsmålene fra intervjuguiden, gjengitt ordrett i et vedlegg til teksten", "Hvor mange informanter som takket nei, og hvilken begrunnelse hver av dem ga"],
      explanation: "Riktig svar er de fem opplysningene som gjør materialet vurderbart. Å oppgi navn ville brutt konfidensialiteten, og de to siste er verken krav eller vanlig praksis. Fravær av redegjørelsen er feil #13.",
    },
    {
      question: "Hva innebærer feil #14?",
      options: ["Å intervjue bekjente uten å drøfte hva relasjonen gjør med dataene man får", "Å bruke en intervjuguide som i realiteten er et strukturert spørreskjema med skalaer", "Å hevde at funn fra få informanter gjelder for en hel gruppe mennesker", "Å presentere et analytisk begrep i innledningen uten å bruke det senere"],
      explanation: "Riktig svar er den udrøftede nærheten. De tre andre er også dokumenterte feil — skjult kvantitativ tilnærming, kvantitativ logikk i kvalitativ kontekst, og avstand mellom empiri og teori — men de har hvert sitt nummer.",
    },
    {
      question: "Hva kjennetegner sårbarhet slik begrepet brukes analytisk i metodefaget?",
      options: ["Det er et trekk ved situasjonen, ikke en fast egenskap ved mennesket", "Det er en egenskap ved bestemte grupper, som derfor krever egne regler", "Det gjelder bare mindreårige, siden de ikke kan samtykke på egne vegne", "Det avgjøres av om temaet oppleves som ubehagelig å snakke om for de fleste"],
      explanation: "Riktig svar er at sårbarhet er situasjonsbestemt: samme person kan være sårbar i én forskningssituasjon og ikke i en annen. Å behandle det som en gruppeegenskap er både upresist og nedvurderende, og temaets karakter er en egen vurdering.",
    },
    {
      question: "Hva er forskjellen på frivillighet og informert samtykke?",
      options: ["Frivillighet gjelder om hun reelt kunne sagt nei; samtykket gjelder hva hun vet", "Frivillighet gjelder skriftlig avtale; samtykket gjelder muntlig bekreftelse", "Frivillighet gjelder selve intervjuet; samtykket gjelder bare lagring av data", "Frivillighet gjelder voksne informanter; samtykket gjelder bare mindreårige"],
      explanation: "Riktig svar skiller de to kravene: informasjon på den ene siden, reell valgfrihet på den andre. Begge må være på plass. De øvrige gjør skillet til et spørsmål om form, om fase eller om alder, og det er det ikke.",
    },
    {
      question: "Hva er et konkret grep mot press i rekrutteringen?",
      options: ["La forespørselen gå gjennom noen som ikke har makt over informanten", "Understreke i samtykkeskrivet at prosjektet er faglig viktig og haster", "Spørre flere om gangen, slik at ingen føler seg utpekt av forskeren", "Love informanten å få lese hele oppgaven før den leveres inn til vurdering"],
      explanation: "Riktig svar bryter koblingen mellom deltakelse og avhengighet, som er selve risikoen. Å understreke viktighet og hast øker presset, og å spørre i gruppe gjør det vanskeligere å si nei — begge er det motsatte av et grep.",
    },
    {
      question: "Hva endrer seg metodisk når intervjuet gjennomføres digitalt?",
      options: ["Kroppsspråk og romlig kontekst faller bort, og pauser blir vanskeligere å tolke", "Materialet blir kvantitativt, siden opptaket behandles av programvare", "Samtykket bortfaller, fordi informanten ikke kan signere på papir", "Analysen må gjøres direkte fra lyd, siden utskrift ikke er mulig ved videoopptak"],
      explanation: "Riktig svar er tapet av kroppsspråk og kontekst, mot en lavere terskel for å delta. Digital form gjør verken materialet kvantitativt, samtykket ugyldig eller utskrift umulig — presedensen fra 2020 var at formen ble godtatt, men burde reflekteres over.",
    },
  ],
  'svmet1010-4-3': [
    {
      question: "Hva skiller en fokusgruppe fra et gruppeintervju?",
      options: ["At samspillet mellom deltakerne er data og ikke en forstyrrelse som skal dempes", "At deltakerne er flere, mens et gruppeintervju bare har to informanter til stede", "At fokusgruppen varer lenger, slik at alle temaene i guiden rekker å bli dekket", "At fokusgruppen tas opp på lyd, mens et gruppeintervju noteres underveis av forskeren"],
      explanation: "Riktig svar er interaksjonspoenget: i fokusgruppen skal deltakerne snakke med hverandre, i gruppeintervjuet svarer de forskeren etter tur. Antall, varighet og dokumentasjonsform skiller dem ikke — å definere fokusgruppen som et gruppeintervju er feil #16.",
    },
    {
      question: "Hvem er avsenderen for fokusgruppen og moderatorrollen i dette emnet?",
      options: ["Wibeck", "Weiss", "Fangen", "Bengtsson"],
      explanation: "Riktig svar er Wibeck. Weiss eier det individuelle intervjuhåndverket, Fangen deltakerrollene, og Bengtsson webetnografien. Å tilskrive Weiss moderatorrollen er en dokumentert glidning.",
    },
    {
      question: "Hva er interaksjonsdata i en fokusgruppe?",
      options: ["Data om hvem som korrigerer hvem, hva som møter motstand og hva som får stå", "Data om hvor mange ganger hver deltaker tar ordet i løpet av gruppesamtalen", "Data om hvordan deltakerne svarer moderatoren når hun stiller dem spørsmål", "Data om hvor lang tid gruppa bruker på hvert av temaene i moderatorens guide"],
      explanation: "Riktig svar gjelder samspillet: motstand, støtte og forhandling. Opptelling av taletid er en kvantifisering av materialet, svar til moderatoren er gruppeintervjuets form, og tidsbruk per tema er en praktisk registrering.",
    },
    {
      question: "Hva er moderatorens hovedoppgave?",
      options: ["Å få deltakerne til å snakke med hverandre, og deretter trekke seg tilbake", "Å stille alle spørsmålene fra guiden til hver deltaker i tur og orden", "Å oppsummere gruppas syn til slutt, slik at deltakerne kan godkjenne det", "Å notere ned hvem som mener hva, slik at utsagn kan fordeles på personer"],
      explanation: "Riktig svar er å sette i gang samtalen mellom deltakerne og så tre til side. Å gå runden er gruppeintervjuets form, og de to øvrige beskriver oppgaver som ikke er moderatorens kjerne.",
    },
    {
      question: "Hva gir en homogen gruppesammensetning?",
      options: ["Trygghet, og tilgang til det deltakerne tar for gitt seg imellom", "Friksjon, og dermed begrunnelser som deltakerne må formulere", "Bredde, slik at funnene kan overføres til hele yrkesgruppen etterpå", "Uavhengighet, siden deltakerne ikke kjenner hverandre fra før av"],
      explanation: "Riktig svar er tryggheten og det selvfølgelige. Friksjonen hører til den heterogene gruppa, bredde-påstanden er kvantitativ logikk i kvalitativ innpakning, og hvorvidt deltakerne kjenner hverandre er en egen dimensjon.",
    },
    {
      question: "Hva er hovedargumentet for en heterogen gruppesammensetning?",
      options: ["At uenighet tvinger deltakerne til å begrunne seg, og begrunnelsene er dataen", "At gruppa da speiler befolkningen bedre, slik at funnene blir mer representative", "At forskeren slipper å rekruttere deltakere fra samme miljø eller arbeidsplass", "At samtalen blir kortere, fordi deltakerne raskere kommer til kjernen i uenigheten"],
      explanation: "Riktig svar er friksjonen som fremtvinger begrunnelser. Representativitetsargumentet hører til kvantitativ logikk og er en felle her, og de to øvrige er praktiske hensyn uten faglig dekning.",
    },
    {
      question: "Hva er samkonstruksjon i en fokusgruppe?",
      options: ["At forståelser blir til i fellesskap, slik at resultatet er noe ingen sa alene", "At forskeren og informanten sammen bestemmer hva forskningsspørsmålet skal være", "At flere forskere modererer sammen for å fange opp mest mulig av samtalen", "At deltakerne får lese analysen og sammen komme til enighet om hva den betyr"],
      explanation: "Riktig svar er at dataene skapes i samtalen — det konstruktivistiske aspektet ved metoden. Det er metodens grunnlag, ikke en feilkilde. De øvrige flytter begrepet til problemformulering, bemanning og tilbakespill.",
    },
    {
      question: "Hva kan du IKKE konkludere med fra et fokusgruppemateriale?",
      options: ["Hva den enkelte deltakeren egentlig mener når hun er alene", "Hvilke posisjoner som er tilgjengelige i en gruppe som denne", "Hvordan et tema forhandles når flere hører på hverandre", "Hva som møter motstand og hva som får stå uimotsagt"],
      explanation: "Riktig svar er den enkeltes egentlige mening: utsagnene er formet av at andre hører på. De tre andre er nettopp det metoden gir tilgang til, og grensen bør skrives inn i besvarelsen som transparens om gyldighetsområdet.",
    },
    {
      question: "Hva innebærer Wibecks skille mellom hva og hvordan i analysen?",
      options: ["Innholdet analyseres for temaer, formen for hvem som avbryter, støtter og ler", "Innholdet analyseres av forskeren, mens formen vurderes av en medforsker", "Innholdet kodes først, og formen brukes bare hvis kodingen ikke gir mønstre", "Innholdet gjelder gruppa som helhet, mens formen gjelder hver enkelt deltaker"],
      explanation: "Riktig svar er de to analysenivåene: temaer på den ene siden, dynamikk på den andre. En ren innholdsanalyse kaster nettopp den dataen gruppeformen ga. De øvrige gjør skillet til en arbeidsdeling, en reservestrategi eller et nivåspørsmål.",
    },
    {
      question: "Når er konformitetspress i en fokusgruppe en kilde til data snarere enn et problem?",
      options: ["Når det er normene i gruppa du undersøker, ikke den enkeltes egne erfaringer", "Når gruppa er så stor at ingen enkeltdeltaker rekker å dominere samtalen", "Når moderatoren har bedt deltakerne om å være enige for å spare tid", "Når deltakerne ikke kjenner hverandre og derfor ikke har noe å tape på å si nei"],
      explanation: "Riktig svar er at pressets retning viser hva normen er — og normen kan være det du studerer. Gruppestørrelse og kjennskap påvirker presset, men avgjør ikke om det er data, og ingen moderator ber om enighet.",
    },
    {
      question: "Hvorfor kan forskeren ikke garantere konfidensialitet i en fokusgruppe?",
      options: ["Fordi deltakerne hører hverandre, og hun styrer ikke hva de sier videre etterpå", "Fordi gruppesamtaler ikke kan anonymiseres når de skrives ut til tekst", "Fordi meldeplikten krever at deltakerlisten oppbevares sammen med opptaket", "Fordi forskeren må oppgi hvem som deltok i metodedelen av publikasjonen"],
      explanation: "Riktig svar er at kontrollen ligger hos deltakerne, ikke hos forskeren. Utskrift kan anonymiseres, og de to siste påstandene om meldeplikt og publisering er ikke riktige framstillinger av kravene.",
    },
    {
      question: "Hva er et operasjonelt tiltak mot konfidensialitetsproblemet i en fokusgruppe?",
      options: ["En uttalt taushetsavtale i gruppa, med beskjed om at den ikke kan garanteres", "En setning i metodedelen om at konfidensialiteten er ivaretatt på vanlig måte", "At forskeren lover deltakerne at ingenting av det som sies, blir skrevet ned", "At deltakerne signerer samtykke etter at gruppesamtalen er gjennomført"],
      explanation: "Riktig svar er avtalen kombinert med det ærlige forbeholdet, gitt før deltakelsen bestemmes. Å skrive at konfidensialitet «er ivaretatt» er feil #8 — vag etikk uten tiltak. De to siste er henholdsvis et umulig løfte og en feil rekkefølge.",
    },
    {
      question: "Hvilken gruppestørrelse er vanlig i fokusgrupper, og hva styrer valget?",
      options: ["Fire til åtte, og temaets sensitivitet avgjør hvor i spennet du legger deg", "Ti til tolv, slik at det finnes nok stemmer til at mønstre kan telles opp", "To til tre, slik at moderatoren rekker å følge opp alle utsagn grundig", "Det finnes ingen anbefaling; antallet bestemmes av hvem som takker ja"],
      explanation: "Riktig svar gir både spennet og styringsregelen: sensitive tema tåler færre deltakere. Ti til tolv gjør at få slipper til, to til tre gir en sårbar samtale, og at antallet skulle være tilfeldig er et bekvemmelighetsvalg uten begrunnelse.",
    },
    {
      question: "Hva er argumentet FOR å bruke fokusgrupper på et normativt ladet tema?",
      options: ["At den kollektive forhandlingen om hva som er greit, i seg selv er dataen", "At deltakerne føler seg tryggere i gruppe enn alene med en fremmed forsker", "At gruppa gir flere informanter på kortere tid enn enkeltintervjuer gjør", "At moderatoren kan kontrollere at ingen sier noe de vil angre på etterpå"],
      explanation: "Riktig svar er at forhandlingen er fenomenet: hva som kan sies når andre hører på, er en annen opplysning enn hva den enkelte sier alene. Effektivitet er et praktisk hensyn, og de to øvrige beskriver noe metoden ikke kan love.",
    },
    {
      question: "Hva er den vanligste definisjonsfeilen i kortsvar om fokusgrupper?",
      options: ["Å definere metoden som et intervju med flere deltakere til stede samtidig", "Å nevne moderatorrollen uten å si hvor mange deltakere gruppa bør ha", "Å oppgi Wibeck som avsender uten å oppgi hvilket verk begrepet står i", "Å skrive at deltakerne bør kjenne hverandre fra før av for å bli trygge"],
      explanation: "Riktig svar er at interaksjonspoenget faller ut — da har du beskrevet et gruppeintervju, og det er feil #16. De øvrige er mangler eller diskutable råd, men de rammer ikke selve definisjonen.",
    },
  ],
  'svmet1010-5-1': [
    {
      question: "Hva er webetnografi?",
      options: ["Etnografisk feltarbeid der forskeren er til stede over tid i et digitalt miljø", "Analyse av et ferdig nedlastet materiale av innlegg fra en åpen nettside", "Intervjuer gjennomført over video i stedet for ansikt til ansikt med informanten", "Måling av hvor mange som klikker på et innhold, brutt ned på ulike brukergrupper"],
      explanation: "Riktig svar er tilstedeværelsen over tid i et digitalt felt. Å analysere et nedlastet materiale er dokumentanalyse, videointervju er et intervju, og klikkmåling er kvantitativ metode.",
    },
    {
      question: "Hvem er avsenderen for webetnografien i dette emnet?",
      options: ["Bengtsson", "Fangen", "Wibeck", "Kjeldstadli"],
      explanation: "Riktig svar er Bengtsson, som skriver om etnografi på nett i antologien Mange ulike metoder. Fangen eier deltakerrollene, Wibeck fokusgruppen og Kjeldstadli kildebegrepene. Å tilskrive Fangen webetnografien er en dokumentert glidning.",
    },
    {
      question: "Hva menes med at nettet er en kontekst og ikke bare en kanal?",
      options: ["At digitale rom har egne normer og sjangre, ikke bare formidler noe utenfra", "At internett når flere mennesker enn andre former for kommunikasjon gjør", "At all data på nett må lastes ned før den kan analyseres på en forsvarlig måte", "At forskeren må beskrive hvilken plattform hun brukte i metodedelen av teksten"],
      explanation: "Riktig svar er at det digitale rommet har egne måter å være sammen på, og at en tråd ikke skal leses som en dårlig gjengivelse av en samtale. De øvrige handler om rekkevidde, praktisk arbeid og dokumentasjonskrav.",
    },
    {
      question: "Hva tilsvarer det å ligge lavt i tråden på Fangens rollekontinuum?",
      options: ["Den ikke-deltakende observatøren", "Den delvis deltakende forskeren", "Den fullt deltakende forskeren", "Den ikke-observerende deltakeren"],
      explanation: "Riktig svar er den ikke-deltakende observatøren: forskeren følger med uten å delta. Å si dette eksplisitt er et billig grep som viser at webetnografien er etnografi, ikke en helt egen metode.",
    },
    {
      question: "Hvilke tre kriterier brukes for å vurdere om et digitalt felt er offentlig eller privat?",
      options: ["Teknisk tilgang, gruppens størrelse og karakter, og deltakernes egen forventning", "Plattformens brukervilkår, antall innlegg per dag, og forskerens egen vurdering", "Om innholdet er lovlig å lese, om det er søkbart, og om det er lagret over tid", "Om deltakerne bruker fullt navn, om de er myndige, og om temaet er politisk"],
      explanation: "Riktig svar gir de tre kriteriene som brukes sammen. Det tredje er det vanskeligste og viktigste. Brukervilkår og lovlighet avgjør juss, ikke forskningsetikk, og de øvrige er ikke kriterier for skillet.",
    },
    {
      question: "Hva er forventet privathet?",
      options: ["Deltakernes egen rimelige antakelse om hvem som ser det de skriver", "Plattformens innstilling for hvem som teknisk sett har tilgang til innholdet", "Forskerens plikt til å holde informantenes identitet skjult i publikasjonen", "Kravet om at data lagres kryptert og slettes når prosjektet er avsluttet"],
      explanation: "Riktig svar flytter vurderingen fra plattformens innstillinger til menneskene som bruker den. De øvrige beskriver teknisk tilgang, konfidensialitet og datalagring — tre andre ting.",
    },
    {
      question: "Hvorfor er et ordrett sitat fra nettet et anonymiseringsproblem?",
      options: ["Fordi teksten kan søkes opp og føre rett tilbake til den som skrev den", "Fordi sitater fra nettet ikke kan gjengis uten tillatelse fra plattformen", "Fordi digitale sitater ofte er skrevet med forkortelser som må oversettes", "Fordi lengre sitater tar for mye plass i en besvarelse med begrenset omfang"],
      explanation: "Riktig svar er sporbarheten: ordlyden er identifikatoren, og å bytte ut brukernavnet hjelper ikke. Grepet er å omskrive sitatet og oppgi at man har gjort det. De øvrige er formelle eller praktiske hensyn.",
    },
    {
      question: "Hva er problemet med å bruke skjermdumper i en publisert oppgave?",
      options: ["De inneholder brukernavn, tidspunkter og andres innlegg, altså personopplysninger", "De har for lav oppløsning til å kunne leses når teksten skrives ut på papir", "De kan ikke kodes eller kategoriseres, og er derfor ubrukelige i en analyse", "De regnes ikke som kvalitative data, siden de er bilder og ikke løpende tekst"],
      explanation: "Riktig svar er at skjermdumpen inneholder alt som sto der, også det som identifiserer andre. Den kan brukes som arbeidsmateriale, men innholdet må skrives om ved publisering. De øvrige påstandene er ikke riktige.",
    },
    {
      question: "Hva skiller digitale spor fra selvpresentasjon?",
      options: ["Sporene legges igjen uten å være ment som ytring; selvpresentasjonen er laget", "Sporene er kvantitative data, mens selvpresentasjon alltid er kvalitative data", "Sporene er offentlige, mens selvpresentasjon alltid ligger bak innlogging", "Sporene samles inn av forskeren, mens selvpresentasjon leveres av plattformen"],
      explanation: "Riktig svar er skillet mellom det man legger igjen og det man lager for å bli sett. Å tolke selvpresentasjon som atferd er å forveksle fremvisning med handling. De øvrige gjør skillet til et spørsmål om datatype, tilgang eller innsamlingsmåte.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom webetnografi og dokumentanalyse av nettinnhold?",
      options: ["Webetnografien følger noe som pågår, med tilstedeværelse over tid som metode", "Webetnografien bruker bilder, mens dokumentanalysen bare arbeider med tekst", "Webetnografien krever samtykke, mens dokumentanalysen aldri gjør det", "Webetnografien er kvalitativ, mens dokumentanalysen alltid teller forekomster"],
      explanation: "Riktig svar er tilstedeværelsen: dokumentanalysen arbeider med et avsluttet materiale. De øvrige skillene finnes ikke — begge kan bruke bilder, begge kan reise samtykkespørsmål, og begge er kvalitative.",
    },
    {
      question: "Hva er hovedfeilen sensor ser etter i digitale designcase?",
      options: ["At de etiske følgene av at feltet er digitalt, er oversett i besvarelsen", "At kandidaten ikke oppgir hvilken plattform hun har hentet data fra", "At kandidaten kombinerer webetnografi med intervju i samme opplegg", "At kandidaten bruker for få informanter til at funnene kan generaliseres"],
      explanation: "Riktig svar er den case-tilpassede etikken — skillet offentlig og privat, samtykke og sporbarhet. Det er en eksplisitt sensorsjekk i de digitale alternativene. Kombinasjon er tillatt, og kravet om generalisering hører til kvantitativ logikk.",
    },
    {
      question: "Hva er et operasjonelt samtykkegrep i et åpent nettforum med tusenvis av brukere?",
      options: ["Tillatelse fra moderatorene og en åpen melding om prosjektet i miljøet", "En setning i metodedelen om at samtykke er innhentet på vanlig måte", "At forskeren siterer alle brukerne anonymt uten å kontakte noen av dem", "At forskeren venter til studien er ferdig og deretter informerer forumet"],
      explanation: "Riktig svar kombinerer portvakten med åpenhet i miljøet, og det skal sies hva løsningen ikke dekker. Å skrive at samtykke «er innhentet» uten tiltak er feil #8, og etterhåndsinformasjon er ikke samtykke.",
    },
    {
      question: "Hvorfor er digitale data både lite reaktive og performative på samme tid?",
      options: ["De oppstår uten forskerens inngripen, men er skrevet for et publikum", "De er skrevet av mange, men leses bare av dem som er logget inn", "De lagres automatisk, men kan slettes av brukeren når som helst", "De er lette å hente inn, men vanskelige å kode og kategorisere etterpå"],
      explanation: "Riktig svar holder begge sider oppe: ingen forsker utløste ytringen, men den ble laget for å bli sett. Det er nettopp denne dobbeltheten en presis metodedel skriver ut. De øvrige beskriver praktiske forhold.",
    },
    {
      question: "Hva bør sies om plattformens arkitektur i en webetnografisk metodedel?",
      options: ["At den er en betingelse for dataene: hva som lagres, søkes og vises til hvem", "At den er irrelevant, siden innholdet er det samme uansett hvor det står", "At den bare har betydning når forskeren selv publiserer noe i feltet", "At den avgjør om studien er kvalitativ eller kvantitativ i sin innretning"],
      explanation: "Riktig svar er at arkitekturen former hva som er mulig i feltet — et rom der meldinger forsvinner, får andre normer enn et arkivert rom. De øvrige avviser eller feilplasserer poenget.",
    },
    {
      question: "Hvilken av disse er en riktig avgrensning av hva webetnografisk materiale kan si noe om?",
      options: ["Hvordan noe foregår og hvilke normer som gjelder i det miljøet som er fulgt", "Hvor mange i befolkningen som deltar i lignende miljøer på nettet i dag", "Hva den enkelte deltakeren egentlig mener når hun ikke skriver noe sted", "Hvilke tiltak som virker mot den atferden miljøet organiserer seg rundt"],
      explanation: "Riktig svar er praksis og normer i det fulgte miljøet. Utbredelse hører til kvantitativ logikk, den enkeltes egentlige mening krever intervju, og tiltakseffekt krever et helt annet design.",
    },
    {
      question: "Hvordan endres feltnotatenes rolle når feltet er digitalt?",
      options: ["De blir viktigere, fordi materialet ellers reduseres til en tekstsamling", "De blir overflødige, siden alt som skjer allerede finnes lagret som tekst", "De erstattes av skjermdumper, som dokumenterer situasjonen mer nøyaktig", "De skrives først etter at analysen er ferdig, som en oppsummering av funn"],
      explanation: "Riktig svar er at notatene fanger det materialet ikke har: hva som slo deg som uvanlig, hva som ikke skjedde, og hva du selv gjorde. Skillet mellom deskriptive, teoretiske og metodiske notater hører til Tjora og gjelder også her.",
    },
    {
      question: "Hva er den viktigste likheten mellom webetnografi og fysisk deltagende observasjon?",
      options: ["Begge krever tilstedeværelse over tid og et rollevalg som må begrunnes", "Begge gir tilgang til informantenes motiver og begrunnelser for det de gjør", "Begge krever at forskeren gir seg til kjenne for alle som er til stede", "Begge gir materiale som kan telles opp og sammenlignes mellom grupper"],
      explanation: "Riktig svar er slektskapet: begge er etnografi, med feltnotater og rollevalg. Motiver krever intervju, kravet om å gi seg til kjenne varierer, og opptelling hører til kvantitativ logikk.",
    },
    {
      question: "Hvorfor er terskelen for skjult observasjon lavere på nett enn i et fysisk felt?",
      options: ["Fordi forskeren ikke er synlig i rommet, og ingen merker at hun følger med", "Fordi digitale felt ikke er omfattet av forskningsetiske retningslinjer", "Fordi nettdata er unntatt fra kravet om melding av personopplysninger", "Fordi deltakerne på nett har samtykket til overvåking gjennom brukervilkårene"],
      explanation: "Riktig svar er den praktiske forskjellen: å la være å si noe koster ingenting på nett. Nettopp derfor må valget begrunnes ekstra tydelig. De øvrige påstandene om regelverk og samtykke er ikke riktige.",
    },
    {
      question: "Hva er et grensetilfelle mellom offentlig og privat, typisk sett?",
      options: ["Et åpent forum med noen hundre medlemmer der folk skriver til hverandre", "Et kommentarfelt under en artikkel på en åpen og mye lest nyhetsside", "Direktemeldinger mellom to personer som den ene har vist til forskeren", "En pressemelding publisert på nettsidene til en offentlig etat eller kommune"],
      explanation: "Riktig svar er det halvoffentlige miljøet der kriteriene peker i ulik retning. Kommentarfeltet er offentlig, direktemeldingene er private uansett — der finnes en tredjepart som ikke er spurt — og pressemeldingen er et offentlig dokument.",
    },
    {
      question: "Hva innebærer feil #5 i det digitale stoffet?",
      options: ["Å gjengi innhold fra nettet uten analytisk retning eller belegg for påstandene", "Å hevde at åtti prosent av innleggene handlet om ett bestemt tema", "Å bruke en intervjuguide som i realiteten er et strukturert spørreskjema", "Å intervjue bekjente uten å drøfte hva relasjonen gjør med dataene"],
      explanation: "Riktig svar er ren deskripsjon: gjenfortelling uten retning. Opptellingen er feil #1, spørreskjemaguiden er feil #2, og den udrøftede nærheten er feil #14 — tre andre koder i det samme registeret.",
    },
  ],
  'svmet1010-6-1': [
    {
      question: "Hva står NESH for i dette emnet?",
      options: ["Den nasjonale forskningsetiske komité for samfunnsvitenskap og humaniora", "En pensumforfatter som har skrevet om etikk i kvalitativ metode i antologien", "Et lovverk som regulerer behandling av personopplysninger i norsk forskning", "Et organ som godkjenner den enkelte studentens prosjekt før oppstart"],
      explanation: "Riktig svar er at NESH er en komité, altså en institusjon og ikke en pensumforfatter. Den utarbeider retningslinjer, men godkjenner ikke enkeltprosjekter, og retningslinjene er ikke en lov.",
    },
    {
      question: "Hvilke fire ledd må være på plass for at et samtykke skal være informert?",
      options: ["Informasjon, forståelse, frivillighet og rett til å trekke seg underveis", "Skriftlighet, signatur, vitne og oppbevaring av dokumentet i fem år", "Alder, samtykkekompetanse, foreldretillatelse og godkjenning fra veileder", "Anonymitet, konfidensialitet, sletting av data og melding til rett instans"],
      explanation: "Riktig svar gir de fire leddene i selve samtykket. De øvrige beskriver formelle rutiner, vilkår som bare gjelder mindreårige, og andre etiske krav som gjelder i tillegg.",
    },
    {
      question: "Hva er forskjellen på informert samtykke og konfidensialitet?",
      options: ["Samtykket gjelder deltakerens beslutning, konfidensialiteten hva som skjer med data", "Samtykket gjelder voksne informanter, konfidensialiteten gjelder mindreårige", "Samtykket gjelder intervjuer, mens konfidensialiteten bare gjelder observasjon", "Samtykket er en etisk norm, mens konfidensialiteten er et rent juridisk krav"],
      explanation: "Riktig svar skiller beslutningen fra behandlingen av opplysningene. De to kan svikte hver for seg: et gyldig samtykke hjelper ikke om informanten kan gjenkjennes i teksten. De øvrige gjør skillet til et spørsmål om alder, metode eller rettsgrunnlag.",
    },
    {
      question: "Hva er forskjellen på konfidensialitet og anonymisering?",
      options: ["Konfidensialitet er plikten; anonymisering er ett av tiltakene som oppfyller den", "Konfidensialitet gjelder under innsamlingen; anonymisering gjelder ved lagring", "Konfidensialitet gjelder navn; anonymisering gjelder alder, yrke og bosted", "Konfidensialitet gjelder i intervjuer; anonymisering gjelder i fokusgrupper"],
      explanation: "Riktig svar skiller kravet fra virkemiddelet. De øvrige gjør skillet til et spørsmål om fase, opplysningstype eller metode, og treffer da ingen av delene.",
    },
    {
      question: "Hvorfor er navnebytte sjelden nok som anonymisering?",
      options: ["Fordi det er kombinasjonen av detaljer som identifiserer en person", "Fordi navn kan søkes opp i offentlige registre og dermed gjenfinnes", "Fordi informanten selv husker hvilket navn hun har fått i teksten", "Fordi lydopptaket uansett inneholder informantens ekte navn i filen"],
      explanation: "Riktig svar er de indirekte identifiserende opplysningene: arbeidssted, alder, familiesituasjon og en uvanlig hendelse peker til sammen på én person. De øvrige beskriver forhold som ikke er kjernen i problemet.",
    },
    {
      question: "Hva er en konsekvensvurdering?",
      options: ["En forhåndsvurdering av hva deltakelsen kan koste den enkelte deltakeren", "En vurdering av hvor mye tid og penger prosjektet vil kreve å gjennomføre", "En vurdering av om funnene har betydning for politikk og samfunnsdebatt", "En etterhåndsvurdering av om metoden fungerte slik forskeren hadde planlagt"],
      explanation: "Riktig svar er vurderingen av risiko for deltakerne, gjort før datainnsamlingen. De øvrige beskriver et budsjett, en relevansvurdering og en metodeevaluering — tre andre ting.",
    },
    {
      question: "Hva er meldeplikt i forskningssammenheng?",
      options: ["At behandling av personopplysninger skal meldes før datainnsamlingen begynner", "At forskeren skal melde fra til informantene med en gang prosjektet er avsluttet", "At forskeren plikter å melde ulovlige forhold hun får kjennskap til i feltet", "At funn som er til ulempe for oppdragsgiver, likevel skal publiseres åpent"],
      explanation: "Riktig svar er meldingen av personopplysningsbehandlingen. Meldeplikten er en plikt overfor systemet, mens samtykket er en avtale med deltakeren — det skillet er et typisk flervalgsspørsmål.",
    },
    {
      question: "Hva er en personopplysning?",
      options: ["Enhver opplysning som direkte eller indirekte kan knyttes til en person", "Kun de opplysningene der navn eller fødselsnummer er uttrykkelig oppgitt", "Opplysninger om helse, religion, seksualitet eller politisk oppfatning", "Opplysninger informanten selv har bedt om å få holdt utenfor teksten"],
      explanation: "Riktig svar er den vide definisjonen: et lydopptak, et bilde eller et brukernavn er personopplysninger. Alternativet om helse og religion beskriver de sensitive kategoriene, som er en undergruppe.",
    },
    {
      question: "Hva kjennetegner sensitive personopplysninger?",
      options: ["At konsekvensene av spredning er alvorligere, som ved helse eller lovbrudd", "At de er samlet inn uten at informanten har rukket å samtykke til akkurat dem", "At de er hentet fra et lukket felt som forskeren ikke hadde adgang til", "At de gjelder tredjepersoner som ikke selv deltar i undersøkelsen"],
      explanation: "Riktig svar er kategoriene der spredning kan skade mest — helse, seksuelle forhold, religion, politisk oppfatning, etnisk bakgrunn og straffbare forhold. De øvrige beskriver andre problemer ved materialet.",
    },
    {
      question: "Hva sier asymmetri-regelen om etikk i vurderingen?",
      options: ["Manglende etikk trekker ned der den er relevant; gode grep trekker alltid opp", "Etikk teller like mye i alle oppgaver, uansett hva caset handler om", "Etikk trekker bare opp i etikkoppgaver, ikke i designoppgaver eller kortsvar", "Etikk vurderes ikke særskilt, men inngår i helhetsinntrykket av besvarelsen"],
      explanation: "Riktig svar gjengir regelen slik den står i veiledningene: den er asymmetrisk. Konsekvensen er at du sjelden taper på å skrive etikk, og kan tape mye på å la være når caset krever det.",
    },
    {
      question: "Når er etikk åpenbart relevant i et case?",
      options: ["Når informantene er utsatte, temaet er sensitivt, eller de kan identifiseres", "Når prosjektet varer lenger enn tre måneder og har mange informanter", "Når forskeren bruker observasjon i stedet for intervju som datakilde", "Når oppgaveteksten uttrykkelig ber kandidaten drøfte etiske hensyn"],
      explanation: "Riktig svar gir kjennetegnene: utsatt posisjon, sensitivt tema, identifiserbarhet, mindreårige. Varighet og metodevalg avgjør ikke dette, og etikk er en obligatorisk komponent i designoppgaven selv når den ikke er nevnt.",
    },
    {
      question: "Hva er et operasjonelt etikktiltak?",
      options: ["Noe forskeren gjør, som svarer på en bestemt risiko i akkurat dette caset", "En setning i innledningen om at alle etiske hensyn er ivaretatt i prosjektet", "En henvisning til de forskningsetiske retningslinjene fra rett komité", "En erklæring om at informantene er behandlet med respekt hele veien"],
      explanation: "Riktig svar er handlingen koblet til risikoen. Testen: kan setningen stå i et hvilket som helst prosjekt, er den en holdning — og holdningsvarianten er feil #8.",
    },
    {
      question: "Hva er problemet med formuleringen «data behandles konfidensielt og anonymiseres»?",
      options: ["Den sier at noe skal gjøres, men ikke hva som faktisk gjøres med materialet", "Den bruker to begreper som betyr det samme, og er derfor en gjentakelse", "Den lover noe forskeren ikke har lov til å love uten godkjenning først", "Den mangler henvisning til den komiteen som har fastsatt retningslinjene"],
      explanation: "Riktig svar er at setningen er en forsikring uten innhold — feil #8, vag etikk uten operasjonelle tiltak. De to begrepene betyr ikke det samme, og setningen er ikke i seg selv et løftebrudd.",
    },
    {
      question: "Hva er prosessuelt samtykke, og hvem er avsenderen?",
      options: ["Et samtykke som holdes levende gjennom feltarbeidet — begrepet er Fangens", "Et samtykke som innhentes skriftlig i flere omganger — begrepet er Weiss'", "Et samtykke gitt av en portvakt på vegne av feltet — begrepet er Wadels", "Et samtykke som gjelder lagring av data etterpå — begrepet er Tjoras"],
      explanation: "Riktig svar er Fangens begrep om at man i feltarbeid ikke kan stanse feltet for å informere hver ny person. Weiss eier intervjuhåndverket, Wadel work-along og Tjora feltnotattypene.",
    },
    {
      question: "Hvorfor gir kvalitativ metode egne etiske utfordringer?",
      options: ["Fordi nærheten gir detaljerte data og en relasjon der det er vanskelig å si nei", "Fordi utvalgene er små og derfor ikke representative for befolkningen", "Fordi forskeren ofte mangler formell kompetanse på temaet hun studerer", "Fordi analysen tar lang tid og materialet må lagres lenger enn ellers"],
      explanation: "Riktig svar er nærheten: detaljrike data kan identifisere, og den personlige relasjonen svekker terskelen for å si nei. Utvalgsstørrelse er et spørsmål om overførbarhet, ikke om etikk.",
    },
    {
      question: "Hva er en tredjeperson i forskningsetisk forstand?",
      options: ["En som omtales i materialet uten selv å delta eller ha samtykket", "En medforsker som har tilgang til materialet uten å ha samlet det inn", "En veileder som leser materialet for å vurdere kvaliteten på analysen", "En portvakt som har gitt forskeren adgang til feltet hun studerer"],
      explanation: "Riktig svar er de omtalte som ikke er spurt — kolleger, familiemedlemmer, elever. Hensynet gjelder også dem, og å se det er et tydelig tegn på at caset er lest nøye.",
    },
    {
      question: "Hva skjerpes når forskningen involverer barn og unge?",
      options: ["Kravene til samtykke, til informasjonens form og til reell frivillighet", "Kravet om at studien må ha en klar og påviselig nytteverdi for barna som deltar", "Kravet om at all datainnsamling må foregå på skolen eller i hjemmet", "Kravet om at forskeren må ha politiattest før hun kan møte deltakerne"],
      explanation: "Riktig svar er de tre forholdene som skjerpes. De øvrige beskriver hensyn og rutiner som kan gjelde i praksis, men som ikke er de forskningsetiske kravene som skjerpes.",
    },
    {
      question: "Hva er akademisk redelighet?",
      options: ["At data ikke fabrikkeres eller forvrenges, og at andres arbeid krediteres", "At forskeren oppgir hvilke deler av oppgaven hun selv synes er svakest", "At forskeren bare bruker kilder som er fagfellevurdert og publisert på norsk", "At forskeren følger de formelle kravene til oppsett og referansestil"],
      explanation: "Riktig svar dekker redelighetens kjerne. De tre grove bruddene er fabrikkering, forfalskning og plagiering. Referansestil er et formkrav, ikke et etisk krav i seg selv.",
    },
    {
      question: "Hva er fagfellekontroll?",
      options: ["At andre forskere med kompetanse vurderer et arbeid før det publiseres", "At forskeren lar informantene lese og godkjenne analysen sin på forhånd", "At veilederen kontrollerer at studenten har fulgt retningslinjene korrekt", "At flere forskere koder det samme materialet for å teste om de er enige"],
      explanation: "Riktig svar er ordningen med uavhengig vurdering før publisering. Å la informantene lese er tilbakespill, og at flere koder samme materiale er et helt annet grep.",
    },
    {
      question: "Hva er henvisningsskikk et krav om?",
      options: ["At kilder oppgis og at det er tydelig hva som er eget og hva som er hentet", "At alle påstander i en besvarelse har en presis referanse til en gitt kilde", "At kilder skal være publisert de siste ti årene for å regnes som gyldige", "At forskeren skal kontakte forfatterne av tekstene hun bruker i arbeidet"],
      explanation: "Riktig svar dekker både kreditt og etterprøvbarhet. Kravet handler ikke om alder på kilder eller om kontakt med forfattere, og sidetall er ikke et krav i en eksamensbesvarelse.",
    },
    {
      question: "Hvorfor gjelder etikk også i analysefasen?",
      options: ["Fordi tolkningen kan gjøre informanten til noe hun ikke ville kjent seg igjen i", "Fordi kodingen må gjøres av flere personer for å være etisk forsvarlig", "Fordi analysen må godkjennes av den instansen prosjektet er meldt til", "Fordi materialet må slettes så snart kodingen av det er gjennomført"],
      explanation: "Riktig svar peker på tolkningens makt over informantens fortelling. De øvrige beskriver krav som ikke finnes. Å ha med etikk i analyse- og publiseringsfasen er en gjennomgående A-markør.",
    },
    {
      question: "Hva bør en sletteplan inneholde?",
      options: ["En konkret dato eller hendelse, ikke bare «når prosjektet er ferdig»", "En begrunnelse for hvorfor materialet ikke kan oppbevares permanent etterpå", "En oversikt over hvilke informanter som har bedt om å bli slettet", "En bekreftelse fra veilederen på at materialet faktisk er slettet"],
      explanation: "Riktig svar er at planen må være konkret nok til å kunne kontrolleres. De øvrige beskriver dokumentasjon og begrunnelser som ikke er det sletteplanen skal gi.",
    },
    {
      question: "Hva er spenningen mellom regeletterlevelse og situert dømmekraft?",
      options: ["Regler gir forutsigbarhet, men fanger dårlig felt som utvikler seg underveis", "Regler er juridiske, mens dømmekraft bare gjelder i medisinsk forskning", "Regler gjelder studenter, mens erfarne forskere utøver dømmekraft i stedet", "Regler gjelder kvantitativ metode, mens dømmekraft gjelder kvalitativ metode"],
      explanation: "Riktig svar setter opp de to styrkene mot hverandre. Dømmekraft alene er sårbart fordi forskeren vurderer sitt eget prosjekt, og rammen setter derfor grensene mens dømmekraften fyller dem.",
    },
    {
      question: "Hvilken studie er emnets standardeksempel på anonymiseringspraksis?",
      options: ["Skilbrei, Tveit og Brunovskis om kvinner som selger seksuelle tjenester", "Ugelviks feltarbeid i et norsk fengsel over lengre tid uten offisiell rolle", "Fjær, Pedersen og Sandbergs intervjustudie om hvordan unge snakker om moral", "Wadels arbeid om lærlingrollen og det å arbeide sammen med dem man studerer"],
      explanation: "Riktig svar er Skilbrei, Tveit og Brunovskis, der alder, reiserute og navn ble endret — også navnene informantene brukte i feltet. De tre øvrige eier andre metodepoenger.",
    },
    {
      question: "Hva viser Ugelviks fengselsfeltarbeid IKKE?",
      options: ["At skjult observasjon er forsvarlig, siden rollen hans var kjent i feltet", "At forskerens posisjon i et felt kan endre seg gjennom lang tids nærvær", "At tilstedeværelse over tid gir tilgang til det ingen forklarer for forskeren", "At forløpet fra fremmed til fortrolig i seg selv er noe å skrive om"],
      explanation: "Riktig svar er den vanligste feilbruken av studien: rollen var kjent, så den kan ikke brukes som argument for skjult observasjon. De tre øvrige er nettopp det studien viser.",
    },
    {
      question: "Hva er samtykkeskrivets funksjon?",
      options: ["Å dokumentere samtykket og gi informasjonen som gjør det informert", "Å frita forskeren fra ansvar dersom informanten senere angrer", "Å erstatte meldingen av personopplysninger til rett instans", "Å gi informanten rett til å lese og godkjenne hele den ferdige teksten"],
      explanation: "Riktig svar er dokumentasjon pluss informasjon. Signaturen skaper ikke samtykket — har informanten ikke forstått hva hun sa ja til, hjelper ikke skjemaet. Skrivet erstatter verken meldeplikt eller ansvar.",
    },
    {
      question: "Hva innebærer retten til å trekke seg?",
      options: ["At deltakeren kan avslutte når som helst, uten grunn og uten følger", "At deltakeren kan kreve å lese analysen før den blir levert inn", "At deltakeren kan endre uttalelsene sine i den ferdige transkripsjonen", "At deltakeren kan kreve at materialet slettes også etter publisering"],
      explanation: "Riktig svar gir rettens innhold. Grensen som må opplyses om, er at publiserte data ikke kan trekkes tilbake. De to øvrige beskriver rettigheter som ikke følger av kravet.",
    },
    {
      question: "Hva er hovedfeilen i etikkdelen av en designbesvarelse?",
      options: ["Generelle prinsipper i stedet for tiltak knyttet til dette casets risikoer", "For mange konkrete tiltak, slik at etikkdelen tar plass fra analysedelen", "Henvisning til retningslinjer i stedet for til en navngitt pensumforfatter", "At etikken plasseres til slutt i besvarelsen i stedet for i innledningen"],
      explanation: "Riktig svar er feil #8 i sin vanligste form: case-tilpasningen mangler. Plassering i teksten er ikke avgjørende, og retningslinjene er riktig forankring — det er en institusjon som eier dem.",
    },
    {
      question: "Hva er forskningens samfunnsverdi brukt til i en etisk avveining?",
      options: ["Å veie kunnskapsgevinsten mot belastningen forskningen påfører deltakerne", "Å avgjøre om prosjektet skal kunne få finansiering fra offentlige kilder", "Å begrunne hvorfor funnene bør føre til bestemte politiske tiltak", "Å vurdere om temaet er tilstrekkelig aktuelt til å kunne publiseres"],
      explanation: "Riktig svar er avveiningen mot belastningen. Motargumentet som hører med i en drøfting, er at forskeren selv vurderer verdien av sitt eget prosjekt — derfor er vurderingen underlagt retningslinjer og meldeordninger.",
    },
    {
      question: "Hvilke faser skal en A-besvarelse dekke i etikkdelen?",
      options: ["Alle faser, fra formulering av spørsmålet til publisering og sletting", "Datainnsamlingen, som er den fasen deltakerne faktisk er involvert i", "Datainnsamling og lagring, siden det er der personopplysninger oppstår", "Analysen og publiseringen, siden det er der materialet blir offentlig"],
      explanation: "Riktig svar er alle-faser-poenget, som flere veiledninger fremhever. De fleste besvarelser dekker datainnsamlingen; det er etikk i analysen og i publiseringen som skiller.",
    },
  ],
  'svmet1010-6-2': [
    {
      question: "Hva er prosessuelt samtykke?",
      options: ["Samtykke som holdes levende gjennom hele feltarbeidet i stedet for én gang", "Samtykke som innhentes skriftlig fra alle som er til stede i feltet en dag", "Samtykke gitt av en portvakt på vegne av dem som befinner seg i feltet", "Samtykke som gjelder lagringen av data etter at prosjektet er avsluttet"],
      explanation: "Riktig svar er samtykket som praksis over tid — Fangens begrep. De øvrige beskriver en umulig prosedyre, et stedfortredende samtykke og en lagringsavtale, som er tre andre ting.",
    },
    {
      question: "Hva er prosessuelt samtykke IKKE?",
      options: ["En fritakelse fra kravet om samtykke i felt der mange er til stede", "En praksis der forskeren gjentar hvem hun er når nye personer kommer til", "En håndtering av at feltet ikke kan stanses for å informere hver enkelt", "Et begrep som hører til Fangens fremstilling av deltagende observasjon"],
      explanation: "Riktig svar er at begrepet ikke fritar noen fra samtykkekravet, og det løser ikke problemet med dem som aldri blir informert. De tre andre beskriver nettopp det begrepet er.",
    },
    {
      question: "Hva er tilpasset informasjon?",
      options: ["At informasjonen gis i en form mottakeren faktisk kan ta stilling til", "At informasjonen tilpasses det forskeren ønsker å undersøke i prosjektet", "At informasjonen gis muntlig i stedet for skriftlig for å spare tid", "At informasjonen forkortes slik at informanten rekker å lese den ferdig"],
      explanation: "Riktig svar handler om at informasjonen skal nå frem, ikke bare gis. Grepene er klarspråk, muntlig gjennomgang og en kontrollsjekk. De øvrige gjør kravet til et spørsmål om forskerens interesser eller om form.",
    },
    {
      question: "Hva kjennetegner skjult observasjon?",
      options: ["At de som studeres, ikke vet at det foregår forskning i det hele tatt", "At forskeren ikke deltar i aktiviteten, men bare ser på fra sidelinjen", "At forskeren har gitt seg til kjenne for ledelsen, men ikke for alle ansatte", "At forskeren skjuler hvilket tema prosjektet egentlig handler om for feltet"],
      explanation: "Riktig svar er at forskningen er ukjent for feltet. Å ikke delta er en rolleplassering, åpenhet overfor ledelsen er trinn to i graderingen av åpenhet, og å skjule temaet er en tredje, delvis åpen variant.",
    },
    {
      question: "Hvilke vilkår må være oppfylt før skjult observasjon i det hele tatt vurderes?",
      options: ["Vesentlig samfunnsverdi, ingen annen mulig tilgang og lav skaderisiko", "Godkjenning fra veileder, kort varighet og et lite antall observasjoner", "At feltet er et offentlig rom, og at ingen enkeltpersoner blir omtalt", "At forskeren informerer feltet i ettertid og lar deltakerne trekke seg"],
      explanation: "Riktig svar gir de tre tyngste vilkårene, og det andre — at temaet ikke kan belyses på annen måte — er det som oftest ikke er oppfylt. Etterhåndsinformasjon er en del av planen, men ikke et vilkår som alene forsvarer valget.",
    },
    {
      question: "Hva viser Ugelviks fengselsfeltarbeid om åpenhet?",
      options: ["At en kjent rolle over tid kan gi tilgang til det ingen forklarer for forskeren", "At skjult observasjon er nødvendig for å komme innenfor i et lukket felt", "At forskeren bør ta en offisiell rolle i institusjonen hun studerer", "At feltarbeid i institusjoner krever samtykke fra ledelsen og ingen andre"],
      explanation: "Riktig svar er at rollen var kjent, og at åpenhet derfor ikke stengte for tilgang — den utsatte den. Å bruke studien som argument for skjult observasjon er den vanligste feilbruken av den.",
    },
    {
      question: "Hva menes med graderinger av åpenhet i feltarbeid?",
      options: ["At åpenhet finnes i flere trinn mellom fullt åpen og helt skjult rolle", "At forskeren kan velge hvor mye av analysen hun deler med feltet etterpå", "At samtykket kan gis i flere omganger etter hvert som prosjektet skrider frem", "At noen felt krever skriftlig informasjon mens andre klarer seg med muntlig"],
      explanation: "Riktig svar er skalaen fra fullt åpen, via åpen overfor portvakter og delvis åpen, til skjult. Den vanligste posisjonen i praksis er trinn to, og den er ikke det samme som skjult observasjon.",
    },
    {
      question: "Hva er et cases risikoprofil?",
      options: ["Summen av hva som kan gå galt, hvor sannsynlig det er og hvor alvorlig", "Sannsynligheten for at forskeren ikke får tilgang til feltet hun har valgt", "Vurderingen av om prosjektet lar seg gjennomføre innenfor tidsrammen", "Andelen av informantene som forventes å trekke seg underveis i studien"],
      explanation: "Riktig svar gir de tre elementene, og profilen styrer hvor mye plass etikkdelen skal få. De øvrige beskriver gjennomførbarhet og frafall, som er praktiske vurderinger.",
    },
    {
      question: "Hvorfor er gjenkjennelighet et større problem enn navnebruk i små miljøer?",
      options: ["Fordi kolleger og nærmiljø kan fylle inn resten ut fra få detaljer", "Fordi navn uansett må oppgis i vedlegget til den ferdige oppgaven", "Fordi små miljøer er mer opptatt av hva som skrives om dem enn store", "Fordi anonymisering ikke er tillatt når utvalget er under ti personer"],
      explanation: "Riktig svar peker på hvem som gjenkjenner: de som allerede vet nok. På en avdeling med tolv ansatte er «den eneste mannlige nattevakten» én person uansett navn. De øvrige påstandene er ikke riktige.",
    },
    {
      question: "Hva gjorde Skilbrei, Tveit og Brunovskis i sin anonymiseringspraksis?",
      options: ["Endret alder, reiserute og navn, også navnene informantene brukte i feltet", "Utelot alle sitater fra publikasjonen og gjenga bare sammenfatninger", "Lot informantene godkjenne hvert sitat før det ble tatt inn i teksten", "Slettet materialet umiddelbart etter at analysen var gjennomført"],
      explanation: "Riktig svar er de tre typene detaljer som ble endret — også feltnavnene, siden også de kunne identifisere. Poenget er at anonymisering er aktiv bearbeiding med en kostnad, ikke et hakeavkryss.",
    },
    {
      question: "Hva innebærer det at sårbarhet er situasjonsbestemt?",
      options: ["At samme person kan være sårbar i ett prosjekt og ikke i et annet", "At sårbarhet avhenger av hvor lenge datainnsamlingen varer i prosjektet", "At bare mindreårige og personer med sykdom regnes som sårbare deltakere", "At sårbarheten avtar etter hvert som informanten blir kjent med forskeren"],
      explanation: "Riktig svar er at sårbarhet er et trekk ved situasjonen, ikke en fast egenskap ved mennesket. Å behandle det som en gruppeegenskap er både faglig upresist og nedvurderende.",
    },
    {
      question: "Hva er medvirkningsnærhet?",
      options: ["Hvor tett forskerrollen plasserer deg på handlinger som kan skade noen", "Hvor godt forskeren kjenner informantene sine fra før prosjektet startet", "Hvor mange av deltakerne som medvirker aktivt i utformingen av studien", "Hvor stor del av materialet som er samlet inn av andre enn forskeren selv"],
      explanation: "Riktig svar gjelder nærheten til skadelige handlinger, og den følger av rollevalget på kontinuumet. Å delta selv fordi adgangen krever det, er som hovedregel utelukket når handlingen rammer noen.",
    },
    {
      question: "Hva er statusen til kildevern i forskning?",
      options: ["Et forskningsetisk krav og en posisjon i en debatt, ikke en rettslig garanti", "En lovfestet rett som gir forskeren samme vern som pressen har", "En avtale mellom forsker og informant som binder begge parter rettslig", "En ordning som administreres av den instansen prosjektet er meldt til"],
      explanation: "Riktig svar er presisjonen som hindrer at du lover informantene for mye. Det sikreste vernet er praktisk: det du ikke har lagret, kan ikke røpes.",
    },
    {
      question: "Hva er spenningen i spørsmålet om hvem som eier fortellingen?",
      options: ["Beskyttelse mot informantens ønske om å stå frem med sin egen historie", "Forskerens tolkning mot veilederens vurdering av hva som bør publiseres", "Om materialet tilhører forskeren eller institusjonen hun er tilknyttet", "Om informanten skal få lese analysen før eller etter at den er levert"],
      explanation: "Riktig svar setter opp vernet mot informantens egen stemme. Landingen som holder: ønsket veier tungt, men opphever verken forskerens selvstendige ansvar eller hensynet til tredjepersoner.",
    },
    {
      question: "Hva kan forskeren gjøre med konfidensialitetsproblemet i en fokusgruppe?",
      options: ["Be om taushetsavtale i gruppa og si tydelig at den ikke kan garanteres", "Love full konfidensialitet, siden alle deltakerne har signert samtykke", "Utelate alle sitater fra fokusgruppene i den ferdige publikasjonen", "Overlate til deltakerne å avgjøre hva som kan gjengis i etterkant"],
      explanation: "Riktig svar kombinerer avtalen med det ærlige forbeholdet, gitt før deltakelsen bestemmes. Å love konfidensialitet i en gruppe er feil #8 — et løfte forskeren ikke kan holde.",
    },
    {
      question: "Hvorfor er avslutningen av et feltarbeid en etisk fase?",
      options: ["Fordi forskeren forsvinner ut av relasjoner hun selv har bygget opp", "Fordi materialet skal slettes samme dag som feltarbeidet avsluttes", "Fordi analysen ikke kan begynne før feltet har godkjent notatene", "Fordi deltakerne mister retten til å trekke seg når feltet forlates"],
      explanation: "Riktig svar peker på relasjonene og på forventninger som kan ha oppstått. To setninger om avslutning og tilbakeføring viser at du har forstått at etikk gjelder alle prosjektfaser.",
    },
    {
      question: "Hva er den holdbare formen for tilbakeføring til feltet?",
      options: ["Å gi noe tilbake, men være tydelig på at analysen er forskerens ansvar", "Å la feltet godkjenne konklusjonene før teksten leveres inn til vurdering", "Å gi tilbake bare de delene av analysen som feltet vil oppleve som positive", "Å avstå fra tilbakeføring, siden analysen uansett er forskerens eget arbeid"],
      explanation: "Riktig svar holder både respekten og uavhengigheten oppe. En analyse som bare inneholder det feltet liker, er ikke lenger uavhengig — og å avstå helt går glipp av korrigeringer og respekt.",
    },
    {
      question: "Hva er hovedfeilen i etikkdelen når caset er sensitivt?",
      options: ["Generelle prinsipper i stedet for tiltak som svarer på dette casets risikoer", "For mange tiltak, slik at etikkdelen tar plass fra analysestrategien", "At retningslinjene siteres i stedet for å bli parafrasert med egne ord", "At etikken behandles før metodevalget i stedet for etter det i teksten"],
      explanation: "Riktig svar er den manglende case-tilpasningen, som er feil #8 i sin dyreste form. Sensor sjekker eksplisitt om kandidaten har sett de etiske følgene av det valgte caset.",
    },
    {
      question: "Hva er den etiske forskjellen mellom å høre om en handling og å være til stede når den skjer?",
      options: ["Tilstedeværelsen gjør forskeren til en aktør med ansvar overfor tredjepersoner", "Tilstedeværelsen gir sikrere data, og etikken blir dermed mindre viktig", "Tilstedeværelsen krever samtykke, mens intervjuet om samme handling ikke gjør det", "Tilstedeværelsen utløser meldeplikt, mens intervjuet kan gjennomføres uten"],
      explanation: "Riktig svar er ansvaret som følger av å være der. Begge former krever samtykke og melding, og bedre data er et metodisk argument som ikke opphever det etiske.",
    },
    {
      question: "Hva bør en besvarelse si om det den ikke kan løse etisk?",
      options: ["Si det åpent, og stramme inn hva materialet brukes til som følge av det", "Utelate det, siden en uttalt svakhet trekker ned i vurderingen", "Vise til at retningslinjene ikke gir svar på akkurat det spørsmålet", "Overlate spørsmålet til den instansen prosjektet er meldt til å avgjøre"],
      explanation: "Riktig svar er den ærlige grensen kombinert med en konsekvens for designet. En uttalt begrensning trekker ikke ned — den viser at du har sett hva som faktisk står på spill.",
    },
  ],
  'svmet1010-7-1': [
    {
      question: "Hva er koding i kvalitativ analyse?",
      options: ["Å feste korte etiketter til biter av materialet slik at like biter kan samles", "Å telle hvor ofte informantene nevner de ulike temaene i intervjuguiden", "Å skrive ut lydopptakene til tekst før selve analysearbeidet begynner", "Å sortere informantene i grupper etter bakgrunn før materialet leses"],
      explanation: "Koding er å merke steder i materialet med etiketter som sier hva stedet er et tilfelle av, slik at spredte steder kan samles. Å telle forekomster er den skjulte kvantitative fellen: kodefrekvens er ikke et funn. Utskriving av opptak er transkripsjon, og gruppering av informanter er et utvalgsgrep, ikke en analyse.",
    },
    {
      question: "Hvem er pensumankeret for koding og grounded theory i dette emnet?",
      options: ["Corbin og Strauss, som står bak grounded theory-tradisjonens kodehåndverk", "Weiss, som skrev pensumets kapittel om det kvalitative dybdeintervjuet", "Fangen, som skrev emnets ryggradsbok om deltagende observasjon", "Tellmann og Leseth, som står bak framstillingen av forskningens design"],
      explanation: "Koding og grounded theory tilskrives Corbin og Strauss. Weiss eier intervjuhåndverket og begrepet negative tilfeller, Fangen eier deltakerrollene og fortolkningsgradene, og Tellmann og Leseth eier utvalgstypologien. Å bytte om på disse koblingene er en av de mest synlige feilene i et kortsvar.",
    },
    {
      question: "Hva er forskjellen på en kode og en kategori?",
      options: ["Koden ligger tett på materialet, kategorien samler flere koder på et høyere nivå", "Koden er valgt på forhånd, mens kategorien alltid vokser fram av materialet selv", "Koden gjelder ett intervju, mens kategorien alltid gjelder alle informantene", "Koden er forskerens ord, mens kategorien alltid er informantens eget uttrykk"],
      explanation: "En kode merker ett sted; kategorien er navnet på samlingen av koder som hører sammen. Både koder og kategorier kan være datastyrte eller teoristyrte, så opphavet skiller dem ikke. Og en kategori kan godt gjelde bare noen av informantene.",
    },
    {
      question: "Hva kjennetegner datastyrt koding?",
      options: ["Kodene vokser fram av materialet og ligger tett på informantenes eget språk", "Kodene hentes fra teorien og fylles med det materialet som passer i dem", "Kodene bestemmes av intervjuguidens temaer og følger dens rekkefølge", "Kodene fastsettes av forskningsspørsmålet før materialet er samlet inn"],
      explanation: "Datastyrt koding lar materialet bestemme etikettene. De tre andre beskriver ulike former for forhåndsbestemte kategorier, altså teoristyrt arbeid. Styrken ved den datastyrte varianten er at du kan finne noe du ikke visste at du lette etter; svakheten er at den er tidkrevende.",
    },
    {
      question: "Hva er hovedsvakheten ved rent teoristyrt koding?",
      options: ["Du finner det du leter etter, og overser det du ikke hadde en kategori for", "Du får så mange koder at materialet blir uoversiktlig å arbeide med", "Du kan ikke bruke et teoretisk begrep i analysen slik designet krever", "Du mister muligheten til å sammenligne informantene med hverandre"],
      explanation: "Teoristyrt koding er rask og fokusert, men den ser bare det kategoriene rommer. Mange koder er tvert imot et kjennetegn ved datastyrt arbeid. Teoristyrt koding gjør det lettere, ikke vanskeligere, å bruke et begrep i analysen, og sammenligning er mulig uansett kodeform.",
    },
    {
      question: "Hva er hensikten med kontekstualisering som analysefase?",
      options: ["Å sette de kodede bitene tilbake i sammenhengen de faktisk ble sagt i", "Å plassere funnene i en større samfunnsmessig og historisk sammenheng", "Å knytte materialet til den teoretiske litteraturen på fagfeltet", "Å beskrive stedet og tidspunktet der datainnsamlingen ble gjennomført"],
      explanation: "Koding river materialet fra hverandre; kontekstualisering setter bitene tilbake i sammenhengen de ble sagt i, slik at et svar på et ledende spørsmål ikke leses som en generell holdning. De tre andre er gode ting å gjøre, men de er ikke det denne fasen betyr.",
    },
    {
      question: "Hva er et tentativt svar i analysen?",
      options: ["En foreløpig, skarpt formulert påstand om hva materialet viser", "Et forbehold om at funnene ikke kan overføres til andre kontekster", "En hypotese formulert før datainnsamlingen som skal prøves statistisk", "Et sammendrag av hva hver enkelt informant fortalte i sitt intervju"],
      explanation: "Et tentativt svar er en påstand som er skarp nok til å kunne felles av materialet, men holdt åpen for justering. Forbehold om gyldighetsområde er noe annet, og en forhåndsformulert hypotese som prøves statistisk hører til en annen forskningslogikk.",
    },
    {
      question: "Hvorfor sammenligner man deler av materialet med hverandre?",
      options: ["For å avgjøre om et mønster er et mønster eller bare én persons særtrekk", "For å finne ut hvor mange av informantene som deler den samme oppfatningen", "For å kunne rangere informantene etter hvor typiske svarene deres er", "For å kontrollere at intervjuene ble gjennomført på samme måte hver gang"],
      explanation: "Ett utsagn kan alltid forklares med at nettopp denne personen er slik; flere utsagn i samme retning fra ulike informanter kan ikke det. Sammenligning handler altså om mønster mot særtrekk, ikke om opptelling, rangering eller kontroll av gjennomføringen.",
    },
    {
      question: "Hva er negative tilfeller i kvalitativ analyse?",
      options: ["Steder i materialet som taler mot påstanden forskeren er i ferd med å bygge", "Informanter som takket nei til å delta og derfor ikke kom med i utvalget", "Utsagn der informanten uttrykker en negativ holdning til det som studeres", "Deler av materialet som viste seg irrelevante for forskningsspørsmålet"],
      explanation: "Negative tilfeller er materialets motstand mot din egen påstand, og Weiss er avsenderen av begrepet. Det handler verken om frafall i utvalget, om negative holdninger hos informantene eller om irrelevant materiale — det er en fast forvekslingsfelle.",
    },
    {
      question: "Hvem er avsenderen av poenget om å ta negative tilfeller inn i arbeidet?",
      options: ["Weiss, som fremhever grepet som en måte å styrke holdbarheten på", "Kjeldstadli, som skiller mellom levning og beretning som kildebruk", "Wibeck, som beskriver moderatorrollen og gruppesammensetningen", "Bengtsson, som beskriver adgang til digitale felt og nettet som kontekst"],
      explanation: "Weiss står bak poenget om negative tilfeller, og Fangen fremhever det samme i sin behandling av analysen. Kjeldstadli eier kildebegrepene, Wibeck fokusgruppene og Bengtsson webetnografien — koblingene er faste, og sensor merker en feilplassering med en gang.",
    },
    {
      question: "Hva er forskjellen på å nevne et unntak og å analysere et negativt tilfelle?",
      options: ["Analysen bruker tilfellet til å endre eller innsnevre selve påstanden", "Analysen teller hvor mange unntak materialet inneholder til sammen", "Analysen fjerner tilfellet fra materialet for at mønsteret skal bli klart", "Analysen forklarer unntaket med at informanten misforsto spørsmålet"],
      explanation: "Å nevne at «noen gjorde motsatt» er en notis. Å bruke tilfellet analytisk vil si å spørre hva ved denne personen eller situasjonen som gjør at mønsteret ikke gjelder — og så justere påstanden. Å telle, fjerne eller bortforklare avvik er alle former for å unngå prøven.",
    },
    {
      question: "Hva kjennetegner analytisk induksjon?",
      options: ["Forklaringen justeres til den holder for alle tilfellene som er undersøkt", "Et tilfeldig utvalg av tilfeller undersøkes for å sikre bredde i materialet", "Forklaringen bygges opp ved å samle stadig flere tilfeller som støtter den", "Tilfellene sorteres etter hvor godt de passer med teorien man startet med"],
      explanation: "Analytisk induksjon lar hvert avvikende tilfelle tvinge fram enten en endring av forklaringen eller en innsnevring av rekkevidden. Å samle støtte, trekke tilfeldig eller sortere etter passform er alle det motsatte av å prøve forklaringen.",
    },
    {
      question: "Hva betyr metning i analysearbeidet?",
      options: ["Nye deler av materialet gir ikke lenger nye koder eller nyanser", "Antallet informanter er høyt nok til at funnene gjelder for gruppen", "Alle temaene i intervjuguiden er dekket av minst én informant hver", "Forskeren har brukt opp den tiden prosjektet hadde til rådighet"],
      explanation: "Metning er en observasjon om materialet: det slutter å tilføre noe nytt. Det er verken en uttalelse om hvor mange informanter som trengs for at funn skal gjelde alle, en sjekkliste over guidens temaer, eller en beskrivelse av kalenderen din.",
    },
    {
      question: "Hva er begrepsutvikling som analysefase?",
      options: ["Å gi funnet et navn som gjør det gjenkjennelig ut over ditt eget materiale", "Å definere de sentrale pensumbegrepene før analysen settes i gang", "Å velge et teoretisk begrep fra litteraturen som analysen skal bruke", "Å oversette informantenes egne uttrykk til akademisk terminologi"],
      explanation: "Begrepsutvikling er den siste fasen: funnet får et navn som griper noe de etablerte begrepene ikke fanget. Å definere pensumbegreper eller velge et begrep fra litteraturen er begrepsanvendelse, som er en annen operasjon med andre krav.",
    },
    {
      question: "Hva er grounded theory, sammenlignet med tematisk analyse?",
      options: ["Teorien skal vokse fram av materialet, ikke bare temaene beskrives", "Materialet ordnes i temaer som beskrives hver for seg i analysen", "Analysen prøver en forhåndsformulert teori mot et nytt datamateriale", "Analysen bygger på foreliggende dokumenter i stedet for på intervjuer"],
      explanation: "Grounded theory har et sterkere krav enn tematisk analyse: arbeidet skal ende i en teoretisk forklaring, og innsamling og analyse veksler underveis. Å skrive «grounded theory» og så levere en tematisk sortering er den vanligste feilen i denne delen av pensum.",
    },
    {
      question: "Hva er memoskriving?",
      options: ["Korte notater til deg selv om hva du ser mens du koder materialet", "Notater om hva som skjedde i feltet, ført like etter observasjonen", "Sammendrag av hvert intervju som sendes til informanten for godkjenning", "Nedtegnelser av de avtalene som er gjort med portvakter og informanter"],
      explanation: "Memoer dokumenterer analysen din og hører til grounded theory-tradisjonen. Feltnotater dokumenterer feltet, og det er viktig å holde de to fra hverandre — ellers mister du sporet av hva som var observasjon og hva som var din egen tolkning.",
    },
    {
      question: "Hva er en temasentrert tilnærming?",
      options: ["Materialet analyseres tema for tema på tvers av alle informantene", "Hver informants fortelling analyseres som en helhet før sammenligning", "Analysen følger rekkefølgen av temaer slik de sto i intervjuguiden", "Analysen konsentreres om det ene temaet som ble hyppigst nevnt"],
      explanation: "Den temasentrerte tilnærmingen arbeider på tvers av informantene, mens den personsentrerte bevarer den enkeltes fortelling som helhet. Valget har konsekvenser: mønstre på tvers mot sammenheng i forløpet. Guidens rekkefølge og temaenes hyppighet er noe helt annet.",
    },
    {
      question: "Hva er hovedpoenget med at fasemodellen kalles en verktøykasse?",
      options: ["Du må kunne begrunne hvilke faser du bruker, ikke bruke alle sju", "Fasene kan gjennomføres i hvilken som helst rekkefølge du ønsker", "Modellen gjelder bare for intervjumateriale, ikke for feltnotater", "Hver fase kan erstattes av et digitalt analyseverktøy om du vil"],
      explanation: "Verktøykassepoenget betyr at fasene velges og begrunnes ut fra materialet og spørsmålet. Det betyr ikke at rekkefølgen er likegyldig — den er en logikk — og modellen er ikke begrenset til én datatype eller avhengig av programvare.",
    },
    {
      question: "Hva er transkripsjon, og hvorfor er den analytisk?",
      options: ["Utskriving av opptak til tekst, der du bestemmer hva som blir med", "Oversetting av informantenes dialekt til skriftlig standardnorsk", "Sammendrag av intervjuet, skrevet mens samtalen fortsatt er fersk", "Anonymisering av navn og steder før materialet gjøres tilgjengelig"],
      explanation: "Transkripsjon er utskriving av opptak, og valgene du tar der — pauser, nøling, hvilke partier du skriver ut — bestemmer hva materialet senere kan brukes til. Sammendrag er referat, ikke transkripsjon, og anonymisering er et etisk grep i tillegg.",
    },
    {
      question: "Hva vil det si å belegge en påstand i en vedleggsanalyse?",
      options: ["Å vise nøyaktig hvor i materialet påstanden kan leses, sted for sted", "Å vise til den pensumforfatteren som har brukt begrepet tidligere", "Å gjengi et langt sitat fra vedlegget innledningsvis i analysen", "Å oppgi hvor mange av informantene som uttrykte det samme synet"],
      explanation: "Belegg er henvisning til konkrete steder i materialet, gjerne med linjenummer der oppgaven gir dem. Pensumhenvisning er noe annet, sitatpynt er ikke belegg, og opptelling av informanter er kvantitativ logikk brukt på kvalitativt materiale.",
    },
    {
      question: "Hva er datareduksjon i kvalitativ analyse?",
      options: ["Å velge bort deler av materialet etter et kriterium du kan gjøre rede for", "Å slette de opptakene som ikke lenger trengs, av hensyn til personvernet", "Å forkorte informantenes utsagn slik at de blir lettere å sitere i teksten", "Å redusere antall informanter underveis fordi materialet blir for stort"],
      explanation: "Datareduksjon er en styrt og synliggjort utvelgelse: kriteriet følger av forskningsspørsmålet, og det oppgis. Sletting av opptak er en etisk og juridisk operasjon, forkorting av sitater er redigering, og å kutte informanter er et utvalgsgrep.",
    },
    {
      question: "Hva er analysestrategien i en designbesvarelse?",
      options: ["Komponenten som sier hva du skal gjøre med materialet når det er samlet", "Komponenten som sier hvordan du skal skaffe deg materialet i første omgang", "Komponenten som sier hvilke etiske hensyn prosjektet må ta underveis", "Komponenten som sier hvilke funn du forventer å finne i materialet"],
      explanation: "Analysestrategien er den sjette av de sju designkomponentene og handler om behandlingen av materialet. Datainnsamlingsplanen, de etiske vurderingene og de forventede funnene er tre andre komponenter, og de skal ikke slås sammen med denne.",
    },
    {
      question: "En kandidat skriver at materialet skal analyseres med grounded theory, og gjennomfører en enkel tematisk sortering. Hvilken feil er dette?",
      options: ["Manglende samsvar mellom beskrevet analysemetode og gjennomført analyse", "Kvantitativ logikk brukt i en kvalitativ sammenheng uten forbehold", "Manglende transparens om omstendighetene rundt datainnsamlingen", "Ren deskripsjon av materialet uten belegg i konkrete tekststeder"],
      explanation: "Feilen er at metodenavnet ikke svarer til arbeidet som faktisk gjøres. Kvantitativ logikk gjelder påstander om utbredelse, manglende transparens gjelder opplysninger om tid, sted og relasjoner, og ren deskripsjon gjelder gjenfortelling uten analyse.",
    },
    {
      question: "En kandidat skriver at fem av åtte informanter nevnte usikkerhet, og konkluderer med at dette er det mest fremtredende temaet. Hva er problemet?",
      options: ["Kodefrekvens brukes som argument, og det er kvantitativ logikk på kvalitativt materiale", "Materialet er for lite til at et tema i det hele tatt kan kalles fremtredende", "Temaet burde vært kodet teoristyrt i stedet for datastyrt fra begynnelsen", "Konklusjonen mangler henvisning til den pensumforfatteren begrepet er hentet fra"],
      explanation: "At fem av åtte nevnte noe, kan like gjerne skyldes intervjuguiden som materialet, og et kvalitativt materiale kan aldri bære påstander om hvor utbredt noe er. Problemet ligger i argumentformen, ikke i utvalgsstørrelsen, kodeformen eller manglende referanse.",
    },
    {
      question: "Hva skiller en deskriptiv fra en analytisk setning?",
      options: ["Den analytiske viser hva utsagnet er et tilfelle av, med begrep eller sammenligning", "Den analytiske er lengre og bruker flere fagtermer enn den deskriptive gjør", "Den analytiske gjengir informantens ord ordrett, mens den deskriptive parafraserer", "Den analytiske står i konklusjonen, mens den deskriptive står i innledningen"],
      explanation: "Prøven er om setningen kunne stått i et referat fra intervjuet. Er den bare en omskrivning av det som ble sagt, er den deskriptiv. Analysen krever et begrep eller en sammenligning — ikke flere fagord, en bestemt sitatform eller en bestemt plassering i teksten.",
    },
    {
      question: "Hva menes med at en analyse har retning?",
      options: ["Hver kategori og hvert sitat er der fordi det bringer svaret nærmere", "Analysen følger de sju fasene i den rekkefølgen modellen setter opp", "Analysen beveger seg fra det konkrete materialet til den generelle teorien", "Analysen konkluderer med et entydig svar uten forbehold av noe slag"],
      explanation: "Retning betyr at forskningsspørsmålet styrer utvalget av kategorier og sitater. Å følge fasenes rekkefølge er noe annet, bevegelsen fra empiri til teori sier ingenting om relevans, og forbehold er et krav, ikke et tegn på manglende retning.",
    },
    {
      question: "Hvorfor kalles letingen etter negative tilfeller en slektning av falsifikasjonstanken?",
      options: ["Påstanden prøves ved at man oppsøker det som kunne vist at den er gal", "Påstanden forkastes formelt dersom materialet ikke støtter den godt nok", "Påstanden testes mot et beregnet mål på hvor sannsynlig mønsteret er", "Påstanden formuleres på forhånd og holdes uendret gjennom analysen"],
      explanation: "Slektskapet ligger i prøven: du oppsøker motstanden i stedet for å samle mer støtte. Men ingenting regnes ut, ingen hypotese forkastes formelt, og påstanden i kvalitativ analyse formuleres underveis og justeres — den er tentativ, ikke fastlåst.",
    },
    {
      question: "Hva er den viktigste grunnen til å oppgi hvordan du vil transkribere?",
      options: ["Det gjør datagrunnlaget etterprøvbart, og transparens er et uttalt sensorkrav", "Det viser at du har satt deg inn i den tekniske siden av forskningsarbeidet", "Det er et krav i personvernregelverket at behandlingen av opptak beskrives", "Det gjør det lettere for medstudenter å bruke materialet ditt i egne arbeider"],
      explanation: "Transkripsjonsvalgene bestemmer hva materialet kan brukes til, og å oppgi dem er transparens — et krav sensorveiledningene fra V2016 og framover fremhever. Personvern gjelder lagring og behandling, som er en annen og selvstendig plikt.",
    },
    {
      question: "Hva er det tydeligste kjennetegnet på nedre del av skalaen i en vedleggsoppgave?",
      options: ["Gjenfortelling av materialet og påstander uten belegg i teksten", "For mange sitater fra vedlegget i forhold til egen tekstmengde", "At kandidaten bruker et pensumbegrep som ikke sto i oppgaveteksten", "At kandidaten sammenligner informanter oppgaven ikke ba om"],
      explanation: "Ren deskripsjon og synsing uten belegg er det som plasserer en vedleggsbesvarelse nederst. Å bruke egne pensumbegreper og å sammenligne informanter på eget initiativ trekker tvert imot opp, så lenge grepene er begrunnet.",
    },
    {
      question: "Hva løfter en analysedel fra adekvat til fremragende, ifølge sensorveiledningene fra V2016 til H2025?",
      options: ["At hensikten med hvert grep forklares, ikke bare at grepet navngis", "At alle de sju fasene i modellen er gjennomført på materialet", "At analysen bruker en avansert teoretisk tradisjon fremfor en enkel", "At antallet informanter er stort nok til å dekke hele bredden i feltet"],
      explanation: "Skillet ligger i forklart hensikt: hvorfor sammenligne, hvorfor lete etter negative tilfeller. Å kjøre alle fasene mekanisk er et skjemasvar, avansert teori som ikke brukes gir ingen uttelling, og utvalgsstørrelse er ikke et kvalitetskriterium i denne logikken.",
    },
  ],
  'svmet1010-7-2': [
    {
      question: "Hvem er avsenderen av de tre fortolkningsgradene i dette emnet?",
      options: ["Fangen, som skiller mellom første-, andre- og tredjegrads fortolkning", "Weiss, som skrev pensumets framstilling av det kvalitative intervjuet", "Grue, som står bak framstillingen av kritisk diskursanalyse i pensum", "Tjora, som står bak typologien over de ulike formene for feltnotater"],
      explanation: "Fortolkningsgradene er Fangens. Weiss eier intervjuhåndverket, Grue diskursanalysen og Tjora feltnotattypene. Å plassere gradene hos feil forfatter er den typen upresishet et kortsvar straffes for, fordi begrepene peker på bestemte pensumsteder.",
    },
    {
      question: "Hva er førstegrads fortolkning?",
      options: ["Deltakernes egen forståelse av hva de gjør og hvorfor de gjør det", "Forskerens tolkning av hva som foregår, ut fra sammenhengen rundt", "En teoretisk lesning som plasserer materialet i en større sammenheng", "Den første tolkningen forskeren gjorde, før materialet var ferdig kodet"],
      explanation: "Førstegrads fortolkning gjengir deltakernes eget perspektiv. Forskerens kontekstuelle tolkning er andre grad, og den teoretiske lesningen er tredje. Gradene handler om avstand til selvforståelsen, ikke om når i prosessen tolkningen ble gjort.",
    },
    {
      question: "Hva kjennetegner andregrads fortolkning?",
      options: ["Tolkningen går ut over det som ble sagt, men holder seg til konteksten", "Tolkningen gjengir informantens forklaring så tett på ordlyden som mulig", "Tolkningen bygger på en teori informantene ikke selv kjenner eller deler", "Tolkningen bekreftes av informanten selv før den skrives inn i analysen"],
      explanation: "På andre grad setter forskeren sammen det informanten sa med sammenhengen rundt, og kommer til noe informanten ikke sa, men lett kunne kjent seg igjen i. Tett gjengivelse er første grad, teoretisk lesning er tredje, og godkjenning fra informanten er et helt annet grep.",
    },
    {
      question: "Hva er den viktigste faren ved tredjegrads fortolkning?",
      options: ["Å tillegge deltakerne noe som verken er belagt eller gjenkjennelig", "At tolkningen blir for tett på informantenes egne formuleringer", "At analysen ikke kan brukes til å si noe ut over det ene materialet", "At forskeren må oppgi hvilken teoretisk retning hun tilhører selv"],
      explanation: "Faren er overkjøring: tolkningen går så langt fra selvforståelsen at den blir udekket. Å ligge tett på informantene er første grads kjennetegn, ikke tredjes, og manglende rekkevidde er nettopp problemet tredjegradstolkning skal løse.",
    },
    {
      question: "Hva er det riktige forholdet mellom de tre fortolkningsgradene?",
      options: ["De er nivåer med ulik rekkevidde og risiko, ikke et kvalitetshierarki", "De er et hierarki der tredje grad alltid gir den beste analysen", "De er faser som må gjennomføres i rekkefølge i ethvert prosjekt", "De er alternativer der bare én kan brukes i det samme prosjektet"],
      explanation: "Gradene rangerer ikke kvalitet. Hvilken som passer, avgjøres av forskningsspørsmålet, og de kan godt brukes ved siden av hverandre i samme analyse så lenge nivået merkes. En analyse som alltid går høyest, er ikke best — den er bare mest utsatt.",
    },
    {
      question: "Hvem er opphavet til uttrykket tykke beskrivelser?",
      options: ["Geertz, formidlet inn i dette pensumet via Fangen og Ugelvik", "Fangen, som innførte uttrykket i sin bok om deltagende observasjon", "Ugelvik, som brukte det om sitt eget feltarbeid i norsk fengsel", "Corbin og Strauss, som bruker det om kodingens tetteste nivå"],
      explanation: "Uttrykket kommer fra Geertz og formidles til dette pensumet gjennom Fangen og Ugelvik. Å skrive at det er Fangens eller Ugelviks eget begrep, er en dokumentert glidning — begge bruker det, ingen av dem er opphavet.",
    },
    {
      question: "Hva skiller en tykk fra en tynn beskrivelse?",
      options: ["Den tykke sier hva handlingen betydde i sammenhengen den skjedde i", "Den tykke er lengre og inneholder flere detaljer om omgivelsene", "Den tykke bygger på flere informanter enn den tynne gjør", "Den tykke er skrevet av forskeren selv, ikke gjengitt fra en informant"],
      explanation: "Forskjellen er betydning, ikke lengde: den tynne sier at et øye ble lukket, den tykke om det var et blunk, et rykk eller en parodi — og hvordan de andre til stede forsto det. Antall informanter og hvem som skriver, har ingenting med skillet å gjøre.",
    },
    {
      question: "Hva er tematisk analyse?",
      options: ["Materialet ordnes i mønstre som går igjen, og disse beskrives og tolkes", "Materialet analyseres slik at en teoretisk forklaring vokser fram av det", "Materialet leses for å finne ut hvordan den enkelte bygger opp historien sin", "Materialet leses som opplysning om hendelser som ligger utenfor teksten"],
      explanation: "Tematisk analyse ordner og tolker mønstre på tvers. Teoriutvikling gjennom veksling mellom innsamling og analyse er grounded theory, fortellingens oppbygning er fortellingsanalyse, og innhold om noe utenfor teksten er beretningsanalyse.",
    },
    {
      question: "Hva skiller grounded theory fra tematisk analyse?",
      options: ["Innsamling og analyse veksler, og arbeidet skal ende i en forklaring", "Kodene utvikles datastyrt i stedet for å hentes fra teorien på forhånd", "Materialet må bestå av feltnotater og ikke bare av intervjuutskrifter", "Analysen krever et større antall informanter enn tematisk analyse gjør"],
      explanation: "Grounded theory har både en annen arbeidsform, med veksling mellom innsamling og analyse, og en høyere ambisjon: en teoretisk forklaring. Datastyrt koding brukes i begge, og verken datatype eller utvalgsstørrelse skiller dem.",
    },
    {
      question: "Hva er en fenomenologisk analyse innrettet mot?",
      options: ["Å beskrive hvordan et fenomen erfares fra innsiden av den som erfarer det", "Å avdekke de strukturene deltakerne selv ikke er klar over at de er underlagt", "Å beskrive praksiser og meningsmønstre i et bestemt sosialt miljø", "Å undersøke hvordan folk får hverdagen til å fremstå som normal og ordnet"],
      explanation: "Fenomenologien retter seg mot erfaringen slik den oppleves. Å avdekke strukturer deltakerne ikke ser, er en tredjegradsambisjon fra en annen tradisjon; miljøets praksiser er etnografi; og hvordan orden produseres, er etnometodologi.",
    },
    {
      question: "Hva skiller etnografisk analyse fra tematisk analyse?",
      options: ["Konteksten er en del av analyseobjektet, ikke bare en ramme rundt det", "Analysen bygger utelukkende på observasjon og aldri på intervjuer", "Analysen leser materialet som fortellinger heller enn som utsagn", "Analysen krever at forskeren selv har deltatt fullt ut i miljøet"],
      explanation: "Den etnografiske analysen er stedbunden: den handler om dette miljøet, og konteksten analyseres. Tematisk analyse ordner utsagn på tvers uavhengig av opphav. Etnografisk materiale kan godt inneholde intervjuer, og rollen kan variere.",
    },
    {
      question: "Hva er fortellingsanalyse?",
      options: ["Analyse av hvordan noe fortelles: oppbygning, aktører og vendepunkter", "Analyse av hva materialet forteller om hendelser utenfor selve teksten", "Analyse av hvordan språket i teksten er med på å skape virkeligheten", "Analyse av hvordan informantene forstår sine egne handlinger og motiver"],
      explanation: "Fortellingsanalysen behandler formen som data. Innholdet om noe utenfor teksten er beretningsanalyse, språkets konstituerende kraft er diskursanalyse, og selvforståelsen alene er førstegrads fortolkning.",
    },
    {
      question: "Hva er beretningsanalyse?",
      options: ["Materialet brukes som opplysning om hendelser eller forhold utenfor teksten", "Materialet leses for å se hvordan fortellingen er bygd opp og hvem som handler", "Materialet leses for å avdekke hvilke maktforhold språket bærer med seg", "Materialet leses som uttrykk for et bestemt miljøs kultur og praksiser"],
      explanation: "Beretningsanalysen spør hva det fortelles om, og de kildekritiske spørsmålene melder seg. Fortellingens oppbygning er fortellingsanalyse, maktforhold i språket er diskursanalyse, og miljøets kultur er etnografi. De to første er hverandres nabobegreper.",
    },
    {
      question: "Hva studerer etnometodologien?",
      options: ["Metodene folk selv bruker for å få hverdagen til å henge sammen", "Metodene forskeren bruker for å studere et ukjent kulturelt miljø", "Metodene som brukes til å analysere kvalitative data systematisk", "Metodene et fagfellesskap bruker for å kontrollere hverandres arbeid"],
      explanation: "Etnometodologien handler om deltakernes egne metoder for å produsere sosial orden, situasjon for situasjon. Navnet forleder mange til å tro at det dreier seg om forskerens metoder eller om analyseteknikk, og nettopp derfor er begrepet en god flervalgsdistraktor.",
    },
    {
      question: "Hva er kulturanalytisk bricolage?",
      options: ["En arbeidsmåte der ulike datatyper og innfallsvinkler settes sammen", "En analyse som følger én tradisjon konsekvent gjennom hele prosjektet", "En analyse av hvordan kulturelle uttrykk gjenbrukes av deltakerne selv", "En metode der forskeren bygger sitt materiale utelukkende av dokumenter"],
      explanation: "Bricolage er sammenstillingen av ulike grep etter hva materialet krever. Det er altså det motsatte av rendyrket tradisjonstroskap, og sammensetningen må begrunnes minst like grundig som et rendyrket valg ville vært.",
    },
    {
      question: "Hva kjennetegner en stedsanalyse?",
      options: ["Stedet er det analysen handler om, ikke bare der forskningen foregår", "Analysen gjennomføres på stedet i stedet for i etterkant ved skrivebordet", "Analysen sammenligner flere steder for å finne ut hvilket som er typisk", "Analysen bygger på kart og planer i stedet for på observasjon og samtale"],
      explanation: "I en stedsanalyse er stedets innretning, bruk og betydninger selve objektet. I vanlig feltarbeid er stedet der forskningen foregår. Materialet er dessuten sammensatt: observasjon, intervjuer og av og til foreliggende materiale.",
    },
    {
      question: "Hva menes med pynteteori i en besvarelse?",
      options: ["Et begrep som presenteres i innledningen og aldri brukes i analysen", "Et begrep som er så avansert at leseren ikke forstår framstillingen", "Et begrep som er hentet fra litteratur utenfor emnets pensumliste", "Et begrep som brukes i analysen uten at det er definert på forhånd"],
      explanation: "Pynteteori er ubrukt teori, og den gir ingen uttelling i det hele tatt i dette emnet. Terskelen er lav — ett relevant begrep, brukt meningsfullt — men absolutt. Prøven er å stryke teoriavsnittet og se om analysen endrer seg.",
    },
    {
      question: "Hva forplikter du deg til når du navngir en analysetradisjon i et design?",
      options: ["At datainnsamlingsplan og analysebeskrivelse samsvarer med navnet", "At du gjennomfører alle fasene i analysemodellen på materialet ditt", "At du bruker den samme tradisjonen i alle deler av oppgaven din", "At du gjør rede for tradisjonens vitenskapsteoretiske bakgrunn først"],
      explanation: "Navnet er en forpliktelse om arbeidsform. Du kan for øvrig skrive en fullgod analysestrategi uten å oppgi noe tradisjonsnavn — det som ikke går, er å oppgi et navn i stedet for en beskrivelse av hva du faktisk skal gjøre.",
    },
    {
      question: "Når fungerer et sitat som belegg og ikke som pynt?",
      options: ["Når det står sammen med en forklaring av hva i det som bærer påstanden", "Når det er hentet fra den informanten som uttrykte seg klarest av alle", "Når det gjengis ordrett med pauser og nøling slik det ble sagt", "Når det er langt nok til at leseren får hele sammenhengen med"],
      explanation: "Belegg krever at leseren kan se hva ved utsagnet tolkningen hviler på. Praktisk regel: kunne du byttet sitatet med et hvilket som helst annet fra samme kategori uten at teksten din endret seg, brukes det som illustrasjon.",
    },
    {
      question: "En student skriver at analysen er fenomenologisk, og at målet er å avdekke maktstrukturer informantene ikke ser. Hva er problemet?",
      options: ["Tradisjonen og målet står i motsetning til hverandre i beskrivelsen", "Fenomenologisk analyse kan ikke brukes på intervjumateriale i det hele tatt", "Maktstrukturer kan ikke studeres med kvalitative metoder på noe nivå", "Studenten har ikke oppgitt hvilken pensumforfatter tradisjonen er hentet fra"],
      explanation: "En fenomenologisk analyse er innrettet mot erfaringen fra innsiden, mens det å avdekke strukturer deltakerne ikke ser, er en tredjegradsambisjon fra en annen type analyse. Enten må målet justeres eller tradisjonen byttes; motsetningen er selve feilen.",
    },
  ],
  'svmet1010-8-1': [
    {
      question: "Hva er en levning slik begrepet brukes i pensum?",
      options: ["Alt som er overlevert fra fortiden, uavhengig av om noen ville fortelle noe", "Et dokument som er skrevet med tanke på å informere ettertiden om noe", "Et materiale som forskeren selv har frembrakt gjennom intervju og observasjon", "En kilde som er vurdert som troverdig etter en kildekritisk gjennomgang"],
      explanation: "Levningen er alt overlevert, uansett hensikt — Kjeldstadli er avsenderen. Å definere den som noe skrevet for ettertiden gjør den til en beretning, egengenererte data er det motsatte, og troverdighet er et resultat av kildekritikk, ikke en del av definisjonen.",
    },
    {
      question: "Hva gjør en levning til en kilde?",
      options: ["At den tas i bruk for å svare på et bestemt spørsmål", "At den er eldre enn en viss alder og derfor er bevaringsverdig", "At den er skrevet av en person med førstehåndskjennskap til saken", "At den er arkivert av en offentlig instans og dermed er autentisk"],
      explanation: "Kildestatusen er funksjonell: den samme gjenstanden er levning i seg selv og kilde i det øyeblikket noen bruker den til noe. Alder, opphavspersonens nærhet og arkivstatus er egenskaper ved materialet, ikke det som gjør det til en kilde.",
    },
    {
      question: "Hvem er avsenderen av begrepene levning, kilde, spor og beretning i dette emnet?",
      options: ["Kjeldstadli, som står bak framstillingen av kildetypene i pensum", "Fangen, som skrev emnets ryggradsbok om deltagende observasjon", "Tjora, som står bak typologien over de ulike feltnotattypene", "Bengtsson, som beskriver adgang til digitale felt og nettet som kontekst"],
      explanation: "Kildebegrepene er Kjeldstadlis. Fangen eier deltakerrollene og fortolkningsgradene, Tjora feltnotattypene og Bengtsson webetnografien. Koblingene er faste, og en feilplassering er blant de mest synlige feilene i et kortsvar.",
    },
    {
      question: "Hva vil det si å bruke en kilde som beretning?",
      options: ["Å lese den for det den forteller om noe som ligger utenfor teksten selv", "Å lese den som et spor etter den situasjonen som frembrakte den", "Å lese den for å se hvordan språket i den er bygd opp og virker", "Å lese den sammen med andre kilder for å kontrollere opplysningene"],
      explanation: "Beretningsbruken leser gjennom teksten, ut mot verden den handler om. Å lese den som spor etter tilblivelsen er levningsbruk, språkets oppbygning er tekstanalyse, og sammenstilling av kilder er et kildekritisk grep i tillegg.",
    },
    {
      question: "Hvorfor er levningsbruken ofte den sterkeste av de to?",
      options: ["Den leser trekk som opphavspersonen ikke la der med hensikt", "Den bruker eldre materiale, som er vanskeligere å forfalske", "Den krever ikke at forskeren kjenner dokumentets tilblivelse", "Den bygger på flere kilder og gir dermed et bredere grunnlag"],
      explanation: "Levningsbruken er vanskelig å manipulere fordi den leser det utilsiktede: hva som måtte presiseres, hvordan språket er, hva som mangler. Den forutsetter tvert imot god kjennskap til tilblivelsen, og den handler ikke om materialets alder eller antall.",
    },
    {
      question: "Hva kjennetegner en normativ kilde?",
      options: ["Den foreskriver hvordan noe skal være, som et reglement eller en instruks", "Den beskriver hvordan noe var, som et referat eller en tilsynsrapport", "Den er skrevet uten hensikt om å formidle noe til noen mottaker", "Den er avsatt av naturprosesser og ikke frembrakt av mennesker"],
      explanation: "Normative kilder foreskriver; deskriptive beskriver. Kilder uten formidlingshensikt er ikke-meddelende, og naturprosesser gir naturspor. Poenget med den normative kilden er at den er dårlig som beretning om praksis og god som levning etter bekymringer.",
    },
    {
      question: "En forsker leser et ordensreglement for å finne ut hva skolen har vært bekymret for. Hva slags bruk er dette?",
      options: ["Levningsbruk, siden regelen leses som spor etter noe som må ha forekommet", "Beretningsbruk, siden reglementet forteller hva som gjelder ved skolen", "Tekstanalyse, siden det er formuleringene i reglementet som studeres", "Diskursanalyse, siden språket antas å skape det fenomenet det beskriver"],
      explanation: "Å lese regelen som spor etter et problem er levningsbruk: ingen skriver en regel om noe som ikke skjer. Beretningsbruken ville gjengitt hvilke regler som gjelder, og tekst- og diskursanalyse er analysemåter, ikke former for kildebruk.",
    },
    {
      question: "Hva betyr det at foreliggende data er ikke-reaktive?",
      options: ["De påvirkes ikke av at forskeren studerer dem, siden de fantes fra før", "De er nøytrale opplysninger uten preg av hvem som laget dem", "De kan brukes uten at det innhentes samtykke fra dem de gjelder", "De gir like resultater uansett hvilken forsker som analyserer dem"],
      explanation: "Ikke-reaktiv betyr upåvirket av forskeren, ikke upåvirket av alt annet. Dokumentet ble laget for en mottaker, med en hensikt. Sammenblandingen med nøytralitet er en klassisk feil, og materialet er heller ikke etisk fritt fordi det allerede finnes.",
    },
    {
      question: "Hva er den viktigste svakheten ved foreliggende data?",
      options: ["Materialet er laget til andre formål og kan ikke følges opp med spørsmål", "Materialet er alltid eldre enn prosjektet og derfor lite aktuelt", "Materialet er dyrt å skaffe og krever tilgang gjennom en portvakt", "Materialet påvirkes av at de som laget det, visste at det ble studert"],
      explanation: "Du får det som finnes, ikke det du trenger, og du kan ikke stille oppfølgingsspørsmål. Tilgjengelighet og lav kostnad er tvert imot styrker, og at materialet påvirkes av å bli studert, er det egengenererte materialets problem.",
    },
    {
      question: "Hva er et spor i kildeterminologien?",
      options: ["Noe en hendelse har etterlatt seg uten at det var ment å fortelle noe", "En kilde som er skrevet ned kort tid etter at hendelsen fant sted", "Et dokument som viser hvem som har hatt tilgang til et arkiv", "En henvisning i en tekst til en annen tekst som forskeren kan oppsøke"],
      explanation: "Sporet oppsto som bivirkning av at noe skjedde — slitasjen i gresset, nøkkelloggen — og er derfor vanskelig å pynte på. Det handler verken om nedtegnelsens tidspunkt, om arkivadgang eller om henvisninger mellom tekster.",
    },
    {
      question: "Hva er kildekritikk i denne sammenhengen?",
      options: ["En vurdering av hva kilden kan brukes til, ut fra hvem som laget den og hvorfor", "En avgjørelse av om kilden er god eller dårlig, uavhengig av spørsmålet", "En kontroll av at kilden er korrekt gjengitt og henvist til i teksten", "En vurdering av om kilden er relevant nok til å tas med i utvalget"],
      explanation: "Kildekritikk avgjør hva kilden er god TIL, og den er derfor alltid spørsmålsavhengig. En partisk kilde er ofte den beste kilden til partiskheten. Riktig gjengivelse er henvisningsskikk, og relevansvurdering er et utvalgsspørsmål.",
    },
    {
      question: "Hva er hovedproblemet med at bare noen dokumenter er bevart?",
      options: ["Utvalget er gjort på forhånd, og det er skjevt mot det formelle og vellykkede", "Materialet blir for lite til at analysen kan si noe med tyngde", "De bevarte dokumentene er som regel de eldste og dermed minst relevante", "Forskeren må søke om innsyn og risikerer at søknaden blir avslått"],
      explanation: "Noen har valgt for deg, med andre hensyn enn dine, og det som overlever fra en organisasjon, er systematisk skjevt. Motgrepet er å gjøre skjevheten eksplisitt. Utvalgsstørrelse, alder og innsynsprosedyrer er andre og mindre grunnleggende problemer.",
    },
    {
      question: "Hva skiller dokumentanalyse fra webetnografi når materialet er hentet fra nett?",
      options: ["Dokumentanalysen leser innholdet som foreliggende tekst, uten å følge feltet", "Dokumentanalysen krever samtykke fra dem som har skrevet innleggene", "Dokumentanalysen kan bare brukes på offentlige nettsider, ikke på fora", "Dokumentanalysen forutsetter at forskeren deltar aktivt i diskusjonene"],
      explanation: "Å analysere nettinnhold som foreliggende dokumenter er dokumentanalyse; å følge eller delta i et digitalt felt over tid er webetnografi. De kan kombineres, men er ikke det samme. Deltakelse hører til den andre, og samtykkespørsmål gjelder begge.",
    },
    {
      question: "Hvordan bør foreliggende materiale begrunnes i en designbesvarelse?",
      options: ["Med hva det svarer på som intervjuene eller observasjonen ikke kan svare på", "Med at flere datakilder gjør prosjektet mer solid enn bare én kilde", "Med at materialet er lett tilgjengelig og ikke krever etiske vurderinger", "Med at dokumentene gir et større antall enheter enn intervjuer gjør"],
      explanation: "Arbeidsdelingen er begrunnelsen: hva dokumentene svarer på som det egengenererte ikke kan. Metodekombinasjon gir ingen bonus i seg selv, dokumenter er ikke etisk fritt vilt, og antall enheter er ikke et kvalitetsmål i kvalitativ logikk.",
    },
    {
      question: "En kandidat vil bruke kommunens vedtak for å finne ut hva saksbehandlerne egentlig tenkte. Hva er problemet?",
      options: ["Vedtaket viser hvilken begrunnelse som ble skrevet, ikke vurderingen bak", "Vedtak er unntatt offentlighet og kan derfor ikke brukes som materiale", "Vedtak er normative kilder og kan bare leses som beretning om regelverket", "Vedtak er for mange til at et kvalitativt utvalg kan gjøres forsvarlig"],
      explanation: "Materialet er en dårlig beretning om vurderingene og en god levning etter hvilke begrunnelser som regnes som gyldige i etaten. Skal spørsmålet om tenkningen besvares, trengs intervjuer i tillegg — det er matchen mellom spørsmål og materiale som svikter.",
    },
  ],
  'svmet1010-8-2': [
    {
      question: "Hva kjennetegner en positivistisk posisjon?",
      options: ["Gyldig kunnskap bygger på det som kan observeres og etterprøves", "Sosiale fenomener blir til gjennom samhandling og benevnelse", "Menneskelige uttrykk må forstås gjennom tolkning i sin kontekst", "Hendelser er fullt ut bestemt av forutgående årsaker og betingelser"],
      explanation: "Positivismen legger vekt på observasjon, måling og etterprøvbarhet. De tre andre beskriver konstruktivisme, hermeneutikk og determinisme. Posisjonen skal presenteres som en posisjon med egen logikk, ikke som en feiltakelse noen har vokst fra.",
    },
    {
      question: "Hva er kjernen i en konstruktivistisk posisjon?",
      options: ["Sosiale fenomener blir til gjennom samhandling, forståelser og benevnelser", "Sosiale fenomener finnes uavhengig av hvordan de omtales og oppfattes", "Sosiale fenomener kan bare studeres med kvalitative metoder og ikke andre", "Sosiale fenomener er så sammensatte at sikker kunnskap er umulig å få"],
      explanation: "Konstruktivismen hevder at fenomenene blir til gjennom menneskers samhandling og benevnelse. Uavhengig eksistens er den positivistiske antakelsen. Posisjonen binder ikke til én metode, og den innebærer ikke at kunnskap er umulig — det ville vært relativisme.",
    },
    {
      question: "Hva betyr det at noe er sosialt konstruert?",
      options: ["At fenomenet er blitt til gjennom menneskers samhandling og kategorier", "At fenomenet er innbilt og derfor uten virkelige konsekvenser", "At fenomenet varierer så mye at det ikke lar seg studere systematisk", "At fenomenet bare finnes i den enkeltes personlige opplevelse av det"],
      explanation: "Sosialt konstruert betyr blitt til gjennom mennesker, ikke uvirkelig. Kategorien arbeidsledig er laget av mennesker og har svært virkelige følger. Sammenblandingen med at noe er innbilt eller rent individuelt er den vanligste feilen i dette begrepet.",
    },
    {
      question: "Hva er hermeneutikk?",
      options: ["Læren om fortolkning, der uttrykk forstås i lys av sin sammenheng", "Læren om hvordan vitenskapelige hypoteser kan prøves og forkastes", "Læren om hvilke kategorier som finnes i den sosiale virkeligheten", "Læren om hvordan språket er med på å skape det det beskriver"],
      explanation: "Hermeneutikk er fortolkningslære. Prøving av hypoteser hører til en annen vitenskapsteoretisk tradisjon, spørsmålet om hva som finnes er ontologi, og påstanden om språkets skapende kraft er diskursanalysens.",
    },
    {
      question: "Hva går den hermeneutiske sirkelen ut på?",
      options: ["Delen forstås i lys av helheten, og helheten gjennom delene", "Forskeren gjentar undersøkelsen til resultatene blir de samme", "Tolkningen bekreftes ved at informanten leser og godkjenner den", "Analysen veksler mellom innsamling og tolkning i flere runder"],
      explanation: "Sirkelen beskriver bevegelsen mellom del og helhet i forståelsen. Gjentakelse for like resultater er et reliabilitetskrav fra en annen logikk, godkjenning fra informanten er et annet grep, og veksling mellom innsamling og analyse er grounded theorys arbeidsform.",
    },
    {
      question: "Hva er forforståelse, og hva skal forskeren gjøre med den?",
      options: ["Det du vet og forventer på forhånd, og det skal gjøres eksplisitt", "Det du vet og forventer på forhånd, og det skal legges bort før feltet", "Den forståelsen informantene har av sin egen situasjon, og den skal gjengis", "Den teorien du har valgt på forhånd, og den skal prøves mot materialet"],
      explanation: "Forforståelsen kan ikke fjernes — uten den ville et intervju vært lyd — og kravet er derfor at den gjøres eksplisitt. Informantenes egen forståelse er noe annet, og en forhåndsvalgt teori som prøves, er en deduktiv tilnærming.",
    },
    {
      question: "Hva er determinisme?",
      options: ["Antakelsen om at hendelser er fullt ut bestemt av forutgående årsaker", "Antakelsen om at mennesker handler ut fra grunner de selv kan gjøre rede for", "Antakelsen om at forskeren kan forutsi utfallet av en kvalitativ studie", "Antakelsen om at all kunnskap er bestemt av forskerens eget ståsted"],
      explanation: "Determinisme er årsaksbestemthet. Motposisjonen legger vekt på aktørenes handlingsrom og egne grunner. De to siste beskriver noe annet: prediksjon, som ikke er kvalitativ metodes ærend, og en sterk form for ståstedsavhengighet.",
    },
    {
      question: "Hva er skillet mellom å forklare og å forstå?",
      options: ["Forklaringen viser årsaker, forståelsen viser hva noe betyr for de involverte", "Forklaringen er kvantitativ, mens forståelsen alltid krever kvalitativ metode", "Forklaringen er forskerens tolkning, forståelsen er informantens egen versjon", "Forklaringen gjelder mønstre, mens forståelsen bare gjelder enkelttilfeller"],
      explanation: "Skillet går mellom årsak og mening, ikke mellom metoder. Kvalitative studier kan bidra til begge deler, og skillet mellom forskerens og informantens versjon er fortolkningsgradene — et beslektet, men annet skille.",
    },
    {
      question: "Hva er forskjellen på ontologi og epistemologi?",
      options: ["Ontologi spør hva som finnes, epistemologi hvordan vi kan vite noe om det", "Ontologi spør hvordan vi kan vite noe, epistemologi hva som finnes", "Ontologi gjelder naturvitenskap, mens epistemologi gjelder samfunnsfag", "Ontologi gjelder teorien, mens epistemologi gjelder den praktiske metoden"],
      explanation: "Ontologi handler om hva slags virkelighet vi studerer; epistemologi om hva vi kan vite om den. De henger sammen i praksis, men de er ikke det samme, og begrepene er bare verdt plass i en besvarelse når de faktisk begrunner et metodevalg.",
    },
    {
      question: "Hva er forskjellen på metode og metodologi?",
      options: ["Metoden er fremgangsmåten, metodologien er begrunnelsen for at den holder", "Metoden er kvalitativ, mens metodologien alltid er kvantitativ i sin form", "Metoden er det du planlegger, mens metodologien er det du faktisk gjorde", "Metoden gjelder datainnsamling, mens metodologien gjelder analysearbeidet"],
      explanation: "Metodologien er læren om og begrunnelsen for fremgangsmåtene. Skillet er nyttig fordi det er metodologien som gjør at et valg kan begrunnes framfor konstateres — og begrunnelse framfor konstatering er emnets gjennomgående vippekriterium.",
    },
    {
      question: "Hva er en diskurs?",
      options: ["En bestemt måte å snakke om og forstå et fenomen på, med egne kategorier", "Et tema som gjentar seg i flere av intervjuene i et datamateriale", "En samtale mellom to eller flere parter om et omstridt spørsmål", "Den enkeltes personlige forståelse av hva et fenomen innebærer"],
      explanation: "En diskurs er en felles ramme i språket som gjør noen utsagn mulige og andre nesten utenkelige. Den er ikke det samme som et tema — temaet er hva det handler om, diskursen er hvordan det kan handle om det — og den ligger ikke i hodet på den enkelte.",
    },
    {
      question: "Hva skiller diskursanalyse fra tematisk analyse?",
      options: ["Diskursanalysen spør hvordan noe sies, og hva den måten gjør med fenomenet", "Diskursanalysen bruker bare foreliggende tekster og aldri intervjumateriale", "Diskursanalysen krever et større tekstutvalg enn tematisk analyse gjør", "Diskursanalysen beskriver mønstre i materialet uten å tolke dem videre"],
      explanation: "Diskursanalysen spør etter framstillingsmåten og dens virkning; den tematiske spør hva som sies om et tema. Begge kan brukes på intervjumateriale, og utvalgsstørrelse skiller dem ikke — men et begrunnet tekstutvalg er en forutsetning for den første.",
    },
    {
      question: "Hva legger kritisk diskursanalyse til, og hvem er pensumankeret?",
      options: ["Et spørsmål om makt, og Grue er pensumankeret for framstillingen", "Et krav om etterprøvbare kategorier, og Fangen er pensumankeret", "Et krav om tallfesting av ordbruk, og Weiss er pensumankeret", "Et spørsmål om forskerens rolle, og Ugelvik er pensumankeret"],
      explanation: "Den kritiske varianten legger til maktspørsmålet, og Grue er ankeret. Fangen eier fortolkningsgradene og deltakerrollene, Weiss intervjuhåndverket og Ugelvik fengselsfeltarbeidet — koblingene er faste og lett gjenkjennelige for sensor.",
    },
    {
      question: "Hva innebærer kravet om at analysen må stå sin prøve?",
      options: ["Påstandene skal belegges i tekstene, ikke i forhåndsantakelsen om makt", "Analysen skal kunne gjentas av en annen forsker med samme resultat", "Analysen skal legges fram for dem som har skrevet tekstene, til uttalelse", "Analysen skal bygge på et tilfeldig trukket utvalg av tekster fra perioden"],
      explanation: "Kravet er etterprøvbarhet i materialet: vis tekststedene, gjør rede for utvalget, og let etter formuleringer som taler mot lesningen. Nøyaktig gjentakelse er et reliabilitetskrav fra en annen logikk, og utvalget i kvalitative studier er strategisk, ikke tilfeldig.",
    },
    {
      question: "Hva betyr det at språket er konstituerende?",
      options: ["Måten noe omtales på, er med på å gjøre fenomenet til det det er", "Språket beskriver virkeligheten presist når begrepene er godt definert", "Fenomenet finnes bare i språket og har ingen virkning utenfor det", "Alle beskrivelser av et fenomen er like gyldige, siden alt er språk"],
      explanation: "Konstituerende betyr medskapende: om noe kalles en ulykke eller en følge av manglende vedlikehold, følger ulike ansvarsforhold og tiltak. Det betyr verken at fenomenet bare er språk, eller at alle beskrivelser er like gode — skader og fattigdom er virkelige uansett.",
    },
    {
      question: "Hva var Chicago-skolens bidrag til kvalitativ metode?",
      options: ["Feltarbeidet i eget samfunn, med langvarig opphold i miljøene som studeres", "Det systematiske intervjuet med standardiserte spørsmål til alle deltakere", "Kravet om at forskeren skal holde seg helt utenfor det som studeres", "Utviklingen av statistiske metoder for å studere byer og bydeler"],
      explanation: "Chicago-skolens bysosiologi etablerte feltarbeidet i eget samfunn og ideen om at et miljø må forstås innenfra. Standardiserte spørsmål og statistiske metoder hører til en annen linje, og distanse er nettopp det tradisjonen brøt med.",
    },
    {
      question: "Hva er hjemmelen i grunnmodellen for et argument?",
      options: ["Forbindelsen som gjør at belegget faktisk støtter påstanden", "Materialet du støtter deg på når du fremmer en påstand", "Selve påstanden, slik den formuleres i konklusjonen", "Kilden du henviser til når du bruker andres arbeid"],
      explanation: "Hjemmelen er koblingen mellom belegg og påstand, og det er dette leddet som oftest mangler i en besvarelse. Materialet er belegget, og henvisning til kilder er henvisningsskikk — et annet krav som gjelder i tillegg.",
    },
    {
      question: "Hva sikrer fagfellekontroll, og hva sikrer den ikke?",
      options: ["Den kontrollerer håndverket, men garanterer ikke at resultatene er riktige", "Den garanterer at resultatene er riktige, siden flere forskere har lest arbeidet", "Den sikrer at forfatteren har henvist korrekt til alle kilder som er brukt", "Den sikrer at undersøkelsen er gjentatt minst én gang før publisering"],
      explanation: "Ordningen vurderer framgangsmåte, dekning og litteraturkjennskap før publisering. Den fanger sjelden feil som krever at noen gjentar undersøkelsen, og den er ikke en kontroll av henvisninger eller en gjentakelsesordning.",
    },
    {
      question: "Hvorfor er henvisningsskikk et metodespørsmål og ikke bare en formalitet?",
      options: ["Henvisningen gjør påstandene etterprøvbare for den som leser dem", "Henvisningen viser hvor mye litteratur forfatteren har lest på feltet", "Henvisningen er et krav i personvernregelverket for forskningsarbeid", "Henvisningen er nødvendig bare når du siterer ordrett fra en tekst"],
      explanation: "Leseren skal kunne gå til kilden og vurdere om den bærer det du bruker den til. Parafrasering krever også henvisning — at du har skrevet om setningen, gjør ikke tanken til din. Mengde lest litteratur er ikke poenget, og personvern er et annet regelverk.",
    },
    {
      question: "En kandidat bruker halvannen av fire sider på vitenskapsteoriens historie i en designoppgave, og utelater forventede funn. Hva følger av det?",
      options: ["Besvarelsen blir ubalansert, og manglende komponenter kompenseres ikke av dybde", "Besvarelsen løftes, siden vitenskapsteoretisk bredde regnes som en styrke", "Besvarelsen vurderes bare på de komponentene som faktisk er besvart", "Besvarelsen strykes, siden en designoppgave krever alle sju komponentene"],
      explanation: "Ubalanse gir en god, men ikke fremragende karakter: sterk på én del og svak på resten kompenseres ikke. Teori som ikke får konsekvenser for noe valg, gir dessuten ingen uttelling i det hele tatt. Manglende komponenter trekker ned, men utløser ikke automatisk stryk.",
    },
  ],
  'svmet1010-9-1': [
    {
      question: "Hva er første trinn i kortsvarsoppskriften?",
      options: ["En definisjon på én til to setninger der pensumforfatteren navngis", "En kort innledning som plasserer begrepet i fagets historiske utvikling", "Et eksempel fra en pensumstudie som viser begrepet brukt i praksis", "En avgrensning mot de begrepene oppgaven ikke ber deg gjøre rede for"],
      explanation: "Kortsvaret åpner med definisjonen og avsenderen, fordi det er den opplysningen som viser hvilken bruk av begrepet du sikter til. Eksempelet hører hjemme i trinn 3, ikke først. En historisk innledning og en avgrensning koster tid uten å gi uttelling.",
    },
    {
      question: "Hvem bruker begrepet markør slik faget legger til grunn?",
      options: ["Weiss, om et flyktig hint informanten selv slipper om noe viktig", "Fangen, om et signal i feltet på at forskerrollen bør endres", "Tjora, om en merknad forskeren setter i margen på et feltnotat", "Tellmann og Leseth, om et kjennetegn som styrer utvalgets sammensetning"],
      explanation: "Markøren er Weiss' begrep om hintet informanten slipper i forbifarten. De tre andre er korrekte beskrivelser av noe helt annet, satt på feil begrep — det er nettopp den fellen eierskapsspørsmål tester.",
    },
    {
      question: "Hva skiller en probe fra en markør?",
      options: ["Proben stiller intervjueren, mens markøren kommer fra informanten selv", "Proben brukes i strukturerte intervjuer, mens markøren brukes i åpne samtaler", "Proben er et notat i etterkant, mens markøren er en observasjon under intervjuet", "Proben gjelder følsomme tema, mens markøren gjelder rene faktaopplysninger"],
      explanation: "Hele skillet ligger i hvem som gjør hva: markøren slippes av informanten, proben stilles av intervjueren. De andre alternativene innfører skiller mellom intervjutyper og tidspunkter som ikke definerer begrepsparet.",
    },
    {
      question: "Hvem eier rollekontinuumet fra ikke-deltakende observatør til ikke-observerende deltaker?",
      options: ["Fangen", "Weiss", "Wadel", "Bengtsson"],
      explanation: "Kontinuumet er Fangens, og hun eier også go native-begrepet i enden av skalaen. Weiss eier intervjuhåndverket, Wadel work-along og lærlingrollen, Bengtsson webetnografien.",
    },
    {
      question: "Hvem eier den norske utvalgstypologien med ekstremt utvalg, maksimal variasjon, homogent utvalg, snøball og teoribasert utvalg?",
      options: ["Tellmann og Leseth, i kapitlet om forskningens design", "Weiss, i framstillingen av intervju som håndverk", "Corbin og Strauss, i framstillingen av koding og teoriutvikling", "Kjeldstadli, i framstillingen av kilder og kildekritikk"],
      explanation: "Den norske typologien er Tellmann og Leseths. Weiss har sin egen engelske typologi som delvis overlapper, Corbin og Strauss eier koding og grounded theory, og Kjeldstadli kildebegrepene.",
    },
    {
      question: "Hvem eier begrepsparet levning og beretning?",
      options: ["Kjeldstadli, i framstillingen av kilder og kildekritikk", "Fangen, i framstillingen av deltakerroller og fortolkning", "Grue, i framstillingen av kritisk diskursanalyse", "Wibeck, i framstillingen av fokusgrupper og moderatorrollen"],
      explanation: "Levning, kilde, spor og beretning er Kjeldstadlis kildeapparat. Fangen eier rolle- og fortolkningsapparatet, Grue diskursanalysen og Wibeck fokusgruppene.",
    },
    {
      question: "Hvem eier typologien over feltnotater?",
      options: ["Tjora", "Fangen", "Ugelvik", "Weiss"],
      explanation: "De ti feltnotattypene er Tjoras, og hovedskillet mellom deskriptive, teoretiske og metodiske notater er det sensor forventer. Fangen gir råd om nedtegning, Ugelvik bruker feltnotater som empiri, og Weiss skriver om intervju.",
    },
    {
      question: "Hvem eier moderatorrollen og analysen av både hva og hvordan noe sies i fokusgrupper?",
      options: ["Wibeck", "Weiss", "Fangen", "Bourgois"],
      explanation: "Fokusgruppeapparatet med moderatorrolle og gruppesammensetning er Wibecks. Weiss eier det individuelle dybdeintervjuet, Fangen observasjonen, og Bourgois er en eksempelstudie fra feltarbeid blant crackselgere.",
    },
    {
      question: "Hvem eier webetnografien i pensum, altså fremgangsmåtene for etnografisk arbeid på nett?",
      options: ["Bengtsson, i kapitlet om etnografisk arbeid på nett", "Fangen, i kapitlet om deltakende observasjon i felt", "Tjora, i kapitlet om feltnotater og bruken av dem i analysen", "Grue, i kapitlet om språk og diskurs i tekstmateriale"],
      explanation: "Webetnografikapitlet er Bengtssons, og det handler om adgang til digitale felt og nettet som kontekst. Fangen kan brukes som bro fordi den etnografiske logikken er den samme, men begrepet er ikke hennes.",
    },
    {
      question: "Hva sier faget om kvalitative funn og utbredelse?",
      options: ["Funnene sier ingenting om hvor mange, og kvalitetskriteriet heter derfor overførbarhet", "Funnene sier noe om utbredelse dersom utvalget er sammensatt med maksimal variasjon i bakgrunn", "Funnene kan si noe om utbredelse når materialet er stort nok til at metning er nådd", "Funnene kan omregnes til andeler når kategoriene fra kodingen er tellet opp"],
      explanation: "Å hevde utbredelse fra kvalitative data er den mest fremhevede strykfeilen i faget, og riktig språk er overførbarhet eller analytisk generalisering. Både maksimal variasjon og metning er utvalgsgrep, ikke veier til tall — og opptelling av koder er nettopp den skjulte kvantitative tilnærmingen sensor ser etter.",
    },
    {
      question: "Hva gjør du med trinn 2 i kortsvaret når begrepet ikke har noen typologi?",
      options: ["Erstatter det med distinksjonen mot nabobegrepet som lett forveksles med det", "Hopper over det og går rett videre til eksempelet fra en pensumstudie", "Erstatter det med en kort gjennomgang av begrepets historie i faget", "Erstatter det med en drøfting av begrepets styrker og svakheter"],
      explanation: "Trinn 2 skal vise at du kjenner begrepets innside, og distinksjonen gjør den jobben når typologien mangler. Å hoppe over trinnet gir et tynnere svar, og en historisk eller drøftende omvei koster tid uten uttelling i denne sjangeren.",
    },
    {
      question: "Hva er løftesetningen i et kortsvar?",
      options: ["Én setning som kobler begrepet til design, validitet eller etikk", "Én setning som oppsummerer det du nettopp har skrevet i svaret", "Én setning som sier hvilken pensumforfatter begrepet er hentet fra", "Én setning som avgrenser begrepet mot temaet i neste deloppgave"],
      explanation: "Løftesetningen skal legge til noe nytt: hva begrepet er godt for i et forskningsopplegg, for holdbarheten eller for de etiske valgene. En oppsummering gjentar bare, og avsenderen hører hjemme i trinn 1.",
    },
    {
      question: "Oppgaven ber deg gjøre rede for tre av fire begreper. Hva skjer om du svarer på alle fire?",
      options: ["Det fjerde svaret gir ingen ekstrauttelling, og tiden er tatt fra de tre som teller", "Alle fire vurderes, og gjennomsnittet av dem avgjør uttellingen på oppgaven som helhet", "Det fjerde svaret regnes som en bonus som kan kompensere for et svakt svar", "Besvarelsen blir underkjent fordi den bryter med oppgavens instruksjon"],
      explanation: "Å svare på flere valgfrie oppgaver enn påkrevd er feil #10 i registeret: det gir ingen uttelling, og minuttene går fra svarene som faktisk teller. Besvarelsen underkjennes ikke, men den blir svakere enn den kunne vært.",
    },
    {
      question: "Hvor mange spørsmål besto flervalgsdelen av i H2024-formatet, og hvor mye telte den?",
      options: ["Ti spørsmål, som til sammen utgjorde 40 % av karakteren", "Ti spørsmål, som til sammen utgjorde 20 % av karakteren", "Tjue spørsmål, som til sammen utgjorde 40 % av karakteren", "Fem spørsmål, som til sammen utgjorde 60 % av karakteren"],
      explanation: "H2024-settet hadde ti flervalgsspørsmål som veide 40 %, mens de to obligatoriske langsvarene veide 60 %. Begge deler måtte bestås, så en sterk langsvarsdel kompenserer ikke for en strøket flervalgsdel.",
    },
    {
      question: "Hvorfor finnes de faktiske flervalgsspørsmålene fra H2024 ikke i noe arkiv?",
      options: ["Spørsmålene holdes tilbake fordi de skal kunne gjenbrukes i senere eksamener", "Spørsmålene ble slettet da den digitale eksamensplattformen ble byttet ut", "Spørsmålene regnes som sensorinternt materiale og deles bare med sensorene", "Spørsmålene ble aldri skrevet ned samlet, men trukket enkeltvis under eksamen"],
      explanation: "Gjenbruk er grunnen til at spørsmålene ikke publiseres, og det betyr at en bred begrepsbank er den eneste mulige treningen. Alle flervalgsoppgaver i denne boka er derfor nyskrevne.",
    },
    {
      question: "Hva kjennetegner en typisk distraktor i denne fagets flervalgsspørsmål?",
      options: ["Den er en korrekt definisjon av nabobegrepet, satt inn på feil plass", "Den er en påstand som er åpenbart gal for alle som har lest pensum", "Den er en definisjon hentet fra et annet fag enn kvalitativ metode", "Den er en riktig definisjon som er gjort gal ved at et ord er byttet ut"],
      explanation: "Nabobegrepsdistraktoren er faglig korrekt, men handler om noe annet enn spørsmålet gjelder — for eksempel probe der spørsmålet gjelder markør. Åpenbart gale alternativer skiller ingen, og en distraktor skal aldri gjøre en riktig presisering om til et galt svar.",
    },
    {
      question: "Hvor mye telte kortsvarsdelen i H2025-formatet?",
      options: ["40 %, fordelt på to obligatoriske kortsvar med anbefalt tid på rundt halvannen time", "60 %, fordelt på tre kortsvar valgt blant fire mulige begreper", "En tredjedel, fordelt på tre korte begrepsredegjørelser uten valgfrihet", "20 %, som en innledende del før langsvaret om forskningsdesign"],
      explanation: "H2025-settet hadde to obligatoriske kortsvar til 40 % og et designlangsvar til 60 %. Tredjedelsvektingen hører til det klassiske formatet fra 2004 til 2018, der Oppgave 1 gjerne ba om tre av fire begreper.",
    },
    {
      question: "Hva innebærer feil #16 i bokas feilregister?",
      options: ["Definisjoner som er upresise og ikke treffer pensumforfatterens bruk av begrepet", "Besvarelser som bruker kvantitativ logikk på et kvalitativt datamateriale", "Besvarelser som svarer på flere valgfrie oppgaver enn oppgaven ber om", "Analyser der et begrep presenteres i innledningen og aldri brukes videre"],
      explanation: "Feil #16 er kortsvarssjangerens egen feil: definisjonen er ikke gal, men den er ikke fagets. Kvantitativ logikk er feil #1, å svare på for mange valgfrie oppgaver er #10, og ubrukt teori er #6.",
    },
    {
      question: "Hvem eier begrepsparet konstaterende og konstruktive spørsmål?",
      options: ["Ingen enkelt pensumforfatter — det er norsk terminologi fra forelesning og antologi", "Weiss, som en del av apparatet rundt intervjuguiden, proben, markøren og pilotintervjuet", "Fangen, som en del av apparatet rundt fortolkningsgrader", "Corbin og Strauss, som en del av kodingsprosessen i grounded theory"],
      explanation: "Begrepsparet er norsk fagterminologi uten én bestemt avsender i pensum, og å tilskrive det Weiss er en dokumentert glidning. Weiss eier probe, markør og intervjuguide, men ikke dette paret.",
    },
    {
      question: "Hvor kommer uttrykket deep hanging out fra?",
      options: ["Fra Geertz, og det er formidlet videre til dette faget gjennom Ugelvik", "Fra Ugelvik, som utviklet det under feltarbeidet sitt i et norsk fengsel", "Fra Fangen, som bruker det om den fullt deltakende posisjonen på kontinuumet", "Fra Wadel, som bruker det om lærlingrollen i work-along-studier"],
      explanation: "Uttrykket er Geertz', og Ugelvik henter det inn når han beskriver feltarbeidet sitt. Å tilskrive det Ugelvik alene er en vanlig, men unødvendig, presisjonsfeil.",
    },
    {
      question: "Hva skiller et strategisk utvalg fra et tilfeldig utvalg?",
      options: ["Det strategiske velges ut fra hva forskeren vil belyse, det tilfeldige ut fra sannsynlighet", "Det strategiske velges av en portvakt i feltet, det tilfeldige av forskeren selv", "Det strategiske er alltid mindre enn tjue personer, det tilfeldige alltid større", "Det strategiske settes sammen underveis i prosjektet, det tilfeldige før datainnsamlingen starter"],
      explanation: "Skillet går på begrunnelsen for sammensetningen: strategisk utvalg begrunnes i problemstillingen, tilfeldig utvalg i sannsynlighet. Størrelse, tidspunkt og portvakter er praktiske forhold som ikke definerer typen.",
    },
    {
      question: "Hva er hovedskillet mellom feltnotattyper som sensor forventer at du kjenner?",
      options: ["Deskriptive, teoretiske og metodiske notater", "Åpne, semistrukturerte og strukturerte notater", "Notater skrevet i felten, rett etterpå og senere samme dag", "Notater om personer, notater om steder og notater om hendelser"],
      explanation: "Tjora har ti typer, men hovedskillet mellom deskriptive, teoretiske og metodiske notater er det som gir uttelling. Åpen og strukturert er guidetyper i intervju, ikke notattyper.",
    },
    {
      question: "Hva er en god arbeidsmåte i flervalgsdelen?",
      options: ["Avgjøre hvem som eier begrepet, og deretter finne alternativet som beskriver nabobegrepet", "Lese alle alternativene og velge det som inneholder flest presise fagtermer", "Velge det lengste alternativet, siden det som regel er det mest fullstendige og presise", "Hoppe over spørsmål du er usikker på, siden feil svar trekker mer enn blanke"],
      explanation: "Utelukkelse i to trinn fjerner først eierskapsfeilene og deretter nabobegrepet. Lengde og tetthet av fagord er ikke signaler, og et ubesvart spørsmål gir alltid null.",
    },
    {
      question: "Hva menes med at en definisjon uten avsender er C-stoff?",
      options: ["Den er riktig, men mangler det som skulle løftet svaret over midten av skalaen", "Den er gal, fordi et begrep ikke kan defineres uten at kilden oppgis", "Den er upresis, fordi definisjoner uten kilde nesten alltid inneholder feil", "Den er ubrukelig, fordi sensor da ikke kan vite om kandidaten har lest pensum"],
      explanation: "Uttrykket peker på et svar som er korrekt, men som ikke viser hvilken bruk av begrepet du sikter til. Definisjonen er altså ikke gal — den stopper bare der den er, og det er derfor mantraet finnes.",
    },
    {
      question: "Hvorfor lønner det seg å bruke de siste minuttene av et kortsvar på å skjerpe det som allerede står, i stedet for å legge til mer?",
      options: ["Fordi sjangeren belønner treffsikkerhet, mens bredde belønnes i langsvaret", "Fordi sensor bare leser de tre første setningene i hvert kortsvar", "Fordi et for langt kortsvar regnes som brudd på oppgavens instruksjon", "Fordi ekstra poeng i kortsvaret gir uttelling først når alle begrepene er besvart"],
      explanation: "Kortsvaret måler presisjon, og et skarpere skille er verdt mer enn et poeng til. Sensor leser hele svaret, og lengde er verken forbudt eller belønnet i seg selv.",
    },
  ],
  'svmet1010-9-10': [
    {
      question: "Hva er en markør slik Weiss bruker begrepet?",
      options: ["Et flyktig hint om noe viktig som informanten selv slipper uten å utdype det", "Et oppfølgingsspørsmål intervjueren stiller for å få informanten til å utdype", "En merking i intervjuguiden av de temaene som er særlig sensitive", "En kode forskeren setter på et utsagn i den første fasen av analysen"],
      explanation: "Markøren kommer fra informanten og er ferskvare — fanges den ikke opp, er den borte. Intervjuerens eget oppfølgingsspørsmål heter probe, merking i guiden er planlegging, og koding er et analysegrep.",
    },
    {
      question: "Hvilke tre dimensjoner må en metodesammenligning ha for de to øverste karakterene?",
      options: ["Kjennetegn ved metodene, styrker og svakheter, og likheter og forskjeller", "Kjennetegn ved metodene, historisk bakgrunn, og eksempler fra pensumstudier", "Datatype, utvalgsstørrelse og analysestrategi for hver av metodene", "Styrker og svakheter, etiske hensyn og en anbefaling av den beste metoden"],
      explanation: "Alle tre dimensjonene kreves; å være god på én av dem, eller jevnt grunn på alle, er den midtre karakteren. Historikk og pensumeksempler er ikke krav i seg selv, og en anbefaling erstatter ikke likhets- og forskjellsdimensjonen.",
    },
    {
      question: "Hva skiller en fokusgruppe fra et gruppeintervju hos Wibeck?",
      options: ["I fokusgruppen er samtalen mellom deltakerne selve datamaterialet", "I fokusgruppen deltar flere informanter samtidig i stedet for én om gangen", "I fokusgruppen er deltakerne rekruttert homogent i stedet for med maksimal variasjon", "I fokusgruppen er samtalen tatt opp på lyd og transkribert i sin helhet"],
      explanation: "Poenget er interaksjonen: analysen gjelder både hva som sies og hvordan det sies mellom deltakerne. At flere er til stede samtidig gjelder begge former, gruppesammensetningen kan variere, og opptak er en praktisk løsning uten definisjonskraft.",
    },
    {
      question: "Hvorfor gir det ikke uttelling å skrive at man vil bruke alle tre metodene for å få et rikere materiale?",
      options: ["Fordi metodekombinasjon ikke gir bonus i seg selv — bare samsvar med problemstillingen teller", "Fordi tre metoder aldri lar seg gjennomføre innenfor rammene en oppgave setter", "Fordi kvalitative metoder ikke kan kombineres uten at materialene blir usammenlignbare", "Fordi valg av flere metoder krever at hver av dem forankres i hver sin pensumforfatter"],
      explanation: "Det avgjørende er at hver metode svarer på en bestemt del av spørsmålet, og at koblingen er skrevet ut. Kombinasjon er verken umulig i praksis eller faglig forbudt, og kravet gjelder begrunnelsen, ikke antallet forfattere.",
    },
    {
      question: "Hva er problemet med å skrive at et kvalitativt utvalg «ikke er representativt for befolkningen»?",
      options: ["Rammen er kvantitativ, og kvalitative funn vurderes i stedet som overførbare", "Påstanden er feil, siden et strategisk utvalg kan være representativt når det er stort nok", "Formuleringen hører hjemme i etikkdelen og ikke i redegjørelsen for metoden", "Den mangler avsender, og en påstand om utvalg må forankres hos Tellmann og Leseth"],
      explanation: "Setningen er riktig i sak, men vurderer materialet etter kriterier det ikke skal måles mot. Riktig ramme er hva funnene kan belyse, altså overførbarhet. Størrelse gjør ikke et strategisk utvalg representativt, og problemet er rammen, ikke plasseringen eller avsenderen.",
    },
    {
      question: "I hvor mange oppgavesett i arkivet vårt er metodesammenligning dokumentert?",
      options: ["I 4 av 31 oppgavesett, og to av dem er de to aller nyeste settene", "I 20 av 31 oppgavesett, siden sammenligning inngår i alle designoppgaver", "I 13 av 31 oppgavesett, jevnt fordelt gjennom hele perioden fra 2004", "I 2 av 31 oppgavesett, begge fra tiden før vurderingsformen ble endret"],
      explanation: "Sjangeren er telt i 4 av 31 oppgavesett, og at to av dem er de nyeste gjør den til obligatorisk trening mot gjeldende form. Tallet 20 hører til designoppgaven og 13 til intervju som tema.",
    },
  ],
  'svmet1010-9-2': [
    {
      question: "I hvor mange av oppgavesettene i SVMET1010-arkivet har designoppgaven vært et alternativ?",
      options: ["I 20 av 31 oppgavesett, og den er langsvaret i begge de to nyeste settene", "I 9 av 31 oppgavesett, med hovedvekt på årene før 2010 i arkivet", "I 31 av 31 oppgavesett, altså i hvert eneste sett som finnes i arkivet", "I 4 av 31 oppgavesett, alle fra perioden etter at emneoppgaven ble avviklet"],
      explanation: "Designoppgaven står i 20 av 31 oppgavesett og er dermed fagets desidert hyppigste langsvarstype. Den er ikke i hvert eneste sett, men den er langsvaret i både H2024 og H2025.",
    },
    {
      question: "Hva er rekkefølgen på de tre første designkomponentene?",
      options: ["Forskningsspørsmål, teoretisk rammeverk, metodevalg med begrunnelse", "Metodevalg, forskningsspørsmål, plan for datainnsamling og rekruttering", "Teoretisk rammeverk, forskningsspørsmål, etiske vurderinger av caset", "Forskningsspørsmål, plan for datainnsamling, teoretisk rammeverk og begreper"],
      explanation: "Spørsmålet kommer først fordi det bestemmer alt annet, deretter begrepet som skal brukes, og så metoden som følger av begge. Å velge metode før spørsmålet er formulert, gir et opplegg som ikke svarer på noe bestemt.",
    },
    {
      question: "Hvorfor er det lønnsomt å splitte caset i en hvorfor-dimensjon og en hvordan-dimensjon?",
      options: ["Fordi splitten i seg selv begrunner metodevalget: motiver nås gjennom det folk sier, praksis gjennom det de gjør", "Fordi to metoder alltid gir bedre uttelling enn én metode, uansett hvordan caset er formulert i oppgaven", "Fordi oppgavene krever at minst to ulike datakilder inngår i forskningsopplegget", "Fordi splitten sparer tid ved at problemstillingen kan skrives i to korte setninger"],
      explanation: "Når hver dimensjon får sin metode, ligger begrunnelsen allerede i splitten. Metodekombinasjon gir ingen bonus i seg selv, og har caset bare én dimensjon, er én metode det riktige valget.",
    },
    {
      question: "Hva er et bortvalg i en designbesvarelse?",
      options: ["En kort begrunnelse for hvilken metode du IKKE bruker, knyttet til dette caset", "En liste over de generelle svakhetene ved metodene du ikke har valgt å bruke", "En avgrensning av hvilke deler av caset besvarelsen ikke kommer til å dekke", "En vurdering av hvilke informanter du velger bort under rekrutteringen"],
      explanation: "Bortvalget viser at du har sett et landskap av muligheter og navigert i det. Generelle svakheter uten kobling til caset er utenomsnakk, og avgrensning av caset og av utvalget er andre grep.",
    },
    {
      question: "Hva sier veiledningene om teori i designbesvarelsen?",
      options: ["Terskelen er lav, men absolutt: minst ett begrep må brukes meningsfullt i analysen", "Terskelen er høy: uten en etablert teoretisk tradisjon i bunn kan svaret ikke nå B", "Teori er valgfritt, og et rent metodisk opplegg vurderes på samme måte som et med teori", "Teori bør nevnes bredt, siden flere begreper viser større faglig oversikt hos kandidaten"],
      explanation: "Ett enkelt begrep som faktisk arbeider i analysen, holder til toppkarakter, mens avansert teori som bare nevnes, gir null. Å presentere flere begreper uten å bruke dem er feil #6, avstand mellom empiri og teori.",
    },
    {
      question: "Hva innebærer rammedisiplin?",
      options: ["Å tilpasse opplegget til de praktiske grensene oppgaven gir, og si hva de koster", "Å holde besvarelsen innenfor det antallet sider oppgaven angir som maksimum", "Å begrense seg til én metode, slik at prosjektet med sikkerhet lar seg gjennomføre", "Å beskrive et mindre ambisiøst prosjekt enn du egentlig mener er nødvendig"],
      explanation: "Rammer som «én måned» eller «ti sider» er en del av oppgaven, og urealistiske opplegg plasseres nederst på skalaen. Disiplinen er ikke å love mindre, men å vise hva de valgte grensene gjør med hva prosjektet kan svare på.",
    },
    {
      question: "Hva er emneoppgavens rolle i dagens SVMET1010?",
      options: ["Den er ikke vurderingsform lenger, men er fortsatt arbeidsform på seminar og mal for designoppgaven", "Den er fortsatt en obligatorisk innlevering som må være bestått før kandidaten kan gå opp til skoleeksamen", "Den er erstattet av flervalgsdelen og har ingen betydning for dagens eksamen", "Den er et frivillig tilbud til studenter som ønsker å øve på metodearbeid"],
      explanation: "Emneoppgaven var vurderingsform fra 2016 til 2021, og H2024-veiledningen sier at designoppgaven skal løses slik som i emneoppgaven og på seminar. Du skal ikke levere noen emneoppgave i dag.",
    },
    {
      question: "Hvorfor har de fire terminene H2018, V2019, H2020 og H2021 ingen oppgavesett i arkivet?",
      options: ["Fordi vurderingen i de terminene var emneoppgave, så det finnes bare veiledninger til den", "Fordi settene fra de terminene er gått tapt i en overgang mellom to ulike digitale eksamenssystemer", "Fordi eksamen i de terminene ble avlyst og erstattet av bestått eller ikke bestått", "Fordi settene fra de terminene holdes tilbake for å kunne gjenbrukes senere"],
      explanation: "I emneoppgaveregimet var det ikke noe skriftlig oppgavesett å publisere, bare instrukser og vurderingskriterier i veiledningene. Terminene kan derfor aldri inngå i en brøk over oppgavesett.",
    },
    {
      question: "Hva kjennetegner et case-tilpasset etikkavsnitt?",
      options: ["Det ville måttet skrives om dersom caset ble byttet ut med et annet", "Det viser til NESH og gjengir kjernekravene i riktig rekkefølge", "Det er langt nok til å dekke samtykke, konfidensialitet og meldeplikt", "Det plasseres til slutt i besvarelsen, etter analysestrategien og funnene"],
      explanation: "Testen er byttetesten: kunne avsnittet stått uendret i en besvarelse om noe helt annet, er det rituelt. Rammeverket skal med, men rammeverket alene er ikke case-tilpasning.",
    },
    {
      question: "Hva sier asymmetriregelen om etikk i vurderingen?",
      options: ["Tynn etikk trekker ned der etikken er åpenbart relevant, men straffes ikke ved ufarlige tema", "Etikk vektes likt i alle case, uansett hvor sensitivt temaet i oppgaven er", "Etikk kan trekke ned, men kan aldri trekke opp, siden den regnes som et minstekrav", "Etikk vurderes bare i de oppgavene som eksplisitt ber kandidaten om å gjøre etiske vurderinger"],
      explanation: "Regelen er asymmetrisk i to retninger: fraværet straffes selektivt, men gode konkrete grep trekker alltid opp. Derfor lønner det seg med noen få operasjonelle tiltak selv i ufarlige case.",
    },
    {
      question: "Hva er kravet til analysestrategien i et design?",
      options: ["At den beskriver hva du faktisk skal gjøre med materialet, og samsvarer med resten av opplegget", "At den navngir en anerkjent analysetradisjon, siden navnet viser hvilken retning arbeidet tar", "At den redegjør for alle fasene i den generelle analysemodellen i riktig rekkefølge", "At den beskriver hvordan materialet skal transkriberes og oppbevares underveis"],
      explanation: "Manglende samsvar mellom beskrevet analysemetode og faktisk analyse er feil #12. Å navngi en tradisjon er ikke en strategi, og en fullstendig fasegjennomgang er en redegjørelse, ikke en plan.",
    },
    {
      question: "Hva skal komponenten forventede funn inneholde?",
      options: ["Tentative svar med forbehold, og gjerne hva som ville rokket ved dem", "En oppsummering av hva tidligere forskning på feltet har kommet frem til", "En hypotese som skal bekreftes eller avkreftes gjennom datainnsamlingen", "En vurdering av hvor sikre resultatene vil bli med det valgte utvalget"],
      explanation: "Forventede funn er en foreløpig forståelse du er villig til å endre, ikke en hypotese som skal testes. Forbeholdet skal stå der, og gjerne sammen med en setning om rekkevidde.",
    },
    {
      question: "Hvorfor gir en glimrende metodedel alene sjelden mer enn C?",
      options: ["Fordi ubalanse mellom delene gir C: styrke på én komponent kompenserer ikke for svakhet i resten", "Fordi metodedelen teller mindre enn de andre komponentene i vurderingen", "Fordi metodedelen regnes som den enkleste komponenten å skrive godt", "Fordi sensor leser komponentene i den rekkefølgen de står, og stopper å gi uttelling ved den første svake delen"],
      explanation: "Veiledningene sier eksplisitt at svært god på én del og svak på resten gir C, ikke B. Har du dårlig tid, er alle sju komponenter kort skrevet et bedre valg enn tre grundige.",
    },
    {
      question: "Hva er den praktiske testen på om et valg er begrunnet eller bare konstatert?",
      options: ["Om setningen kan fullføres med et fordi som viser til dette spørsmålet", "Om setningen inneholder en henvisning til en navngitt pensumforfatter", "Om setningen er lengre enn to linjer og bruker presise fagbegreper", "Om setningen står i metodedelen og ikke i innledningen til besvarelsen"],
      explanation: "Begrunnelsen må inneholde dette spørsmålet, ikke bare en definisjon av metoden. Pensumforankring er et eget krav, men en henvisning gjør ikke i seg selv et valg begrunnet.",
    },
    {
      question: "Hvordan bør de 2,5 timene til designlangsvaret fordeles?",
      options: ["Tyngdepunktet på metodevalg og datainnsamling, som til sammen tar rundt 55 minutter", "Jevnt fordelt med rundt 20 minutter på hver av de sju komponentene", "Tyngdepunktet på teoridelen, som bør ta rundt en tredjedel av den samlede skrivetiden", "Mest tid på innledning og problemstilling, siden de styrer resten av svaret"],
      explanation: "Metodevalg med begrunnelse og bortvalg tar rundt 25 minutter, datainnsamlingsplanen rundt 30 — det er der begrunnelsene bor. Problemstillingen er viktig, men den er skrevet på et kvarter.",
    },
  ],
  'svmet1010-9-3': [
    {
      question: "I hvor mange av oppgavesettene i arkivet står vedleggsanalysen av intervjudata?",
      options: ["I 3 av 31 oppgavesett, alle fra vedleggsperioden mellom 2015 og 2018", "I 20 av 31 oppgavesett, jevnt fordelt over hele perioden fra 2004 til 2025", "I 11 av 31 oppgavesett, i hovedsak fra settene etter at flervalg ble innført", "I 5 av 31 oppgavesett, og alltid sammen med en oppgave om deltakerroller"],
      explanation: "Sjangeren er dokumentert i H2015, H2016 og V2018, altså 3 av 31 oppgavesett. Tallet 20 hører til designoppgaven, og 5 hører til rolledrøftingen på feltarbeidsutdrag.",
    },
    {
      question: "Hva er de tre leddene i et toppsvar på vedleggsanalysen?",
      options: ["Fasene som verktøykasse, den gjennomførte analysen, og forklaringen av hvorfor grepene gjøres", "Redegjørelse for metoden, gjengivelse av vedlegget, og en konklusjon om påstanden", "Problemstilling, valg av analysetradisjon, og en vurdering av materialets kvalitet", "Koding, kategorisering og kontekstualisering, gjennomført i nøyaktig den rekkefølgen modellen angir"],
      explanation: "Det tredje leddet står ikke i oppgaveteksten, men er det veiledningene etterspør: forståelse framfor skjema. Gjengivelse av vedlegget er nettopp den feilen sjangeren straffer hardest.",
    },
    {
      question: "Hva betyr det at analysefasene er en verktøykasse og ikke en tvangstrøye?",
      options: ["At du ikke må bruke alle fasene, men må kunne begrunne dem du velger å bruke", "At rekkefølgen på fasene kan endres fritt så lenge alle sju er gjennomført", "At fasene bare gjelder intervjumateriale, og ikke observasjonsmateriale", "At du kan bytte ut fasemodellen med en annen analysetradisjon du kjenner bedre"],
      explanation: "Presiseringen handler om utvalg og begrunnelse, ikke om rekkefølge eller om hvilke datatyper modellen dekker. Med et lite materiale er det ofte urealistisk å komme til begrepsutvikling, og det skal du si.",
    },
    {
      question: "Hva vil det si å belegge en påstand i en vedleggsanalyse?",
      options: ["Å knytte påstanden til et bestemt sted i materialet, slik at leseren kan etterprøve den", "Å underbygge påstanden med en henvisning til den pensumforfatteren som har ment noe tilsvarende", "Å gjengi et langt sitat fra vedlegget før du formulerer påstanden din", "Å vise at påstanden stemmer for alle informantene i det utleverte materialet"],
      explanation: "Belegget er den korte pekingen på et sted, ikke et langt sitat og ikke en pensumhenvisning. En påstand trenger heller ikke gjelde alle — men den må kunne spores.",
    },
    {
      question: "Hva kjennetegner et arbeidsbegrep i denne sjangeren?",
      options: ["Det skiller mellom to ting i materialet som ellers ville sett like ut", "Det er hentet fra en anerkjent teoretisk tradisjon og presenteres i innledningen", "Det er så generelt at det kan dekke alle utsagnene i det utleverte materialet", "Det er definert grundig med henvisning til flere av pensumforfatterne"],
      explanation: "Terskelen er lav, men begrepet må gjøre en jobb. Et begrep som dekker alt, skiller ingenting, og et begrep som bare presenteres, er nettopp avstanden mellom empiri og teori.",
    },
    {
      question: "Hva er hensikten med å sammenligne informanter i et materiale?",
      options: ["Å få frem variasjonen rundt mønsteret, siden en forskjell ofte er et sterkere funn enn en likhet", "Å sikre at alle informantene er dekket like grundig i besvarelsen", "Å avgjøre hvilken av informantene som er mest troverdig i materialet", "Å telle opp hvor mange av informantene i materialet som støtter den påstanden oppgaven har gitt deg"],
      explanation: "Sammenligningen gjør en gjenfortelling om til en analyse ved å vise hva mønsteret står i kontrast til. Å telle opp hvor mange som mener hva, er derimot en skjult kvantitativ tilnærming.",
    },
    {
      question: "Hva gjør du når du finner et negativt tilfelle i materialet?",
      options: ["Arbeider med det, og lar det presisere påstanden i stedet for å legge det bort", "Forkaster påstanden, siden den nå er motbevist av materialet", "Nevner det kort som et unntak og går videre med den opprinnelige påstanden", "Utelater det, siden ett avvikende sitat ikke kan endre et mønster som går igjen hos flere informanter"],
      explanation: "Det vanligste og beste utfallet er en skjerpet påstand: den gjaldt ikke alle, den gjaldt dem med en bestemt posisjon. Å nevne tilfellet i forbifarten er en fotnote, ikke analyse.",
    },
    {
      question: "Hva skiller toppkarakteren fra en middels besvarelse i vedleggsoppgavene, ifølge veiledningene?",
      options: ["Forståelse framfor skjematisk kunnskap: at hensikten med hvert grep forklares", "At alle sju analysefasene er gjennomført på det utleverte materialet", "At besvarelsen inneholder flere teoretiske begreper enn det oppgaven ber om", "At redegjørelsen for analysemetoden er grundig og dekker hele fasemodellen"],
      explanation: "Å forklare hvorfor man sammenligner og hvorfor man leter etter negative tilfeller, er det synlige beviset på forståelse. En grundig fasegjennomgang uten anvendelse er derimot skjema.",
    },
    {
      question: "Hva er den vanligste feilen i denne sjangeren?",
      options: ["Ren deskripsjon: sitatene gjengis i rekkefølge, gjerne med en oppsummering til slutt", "Overtolkning: kandidaten leser mer inn i materialet enn det er dekning for", "For mye teori: begrepsapparatet tar plassen fra selve analysen av materialet", "For få sitater brukt: kandidaten dekker bare halvparten av det utleverte materialet"],
      explanation: "Feil #5 er sjangerens hovedfeil, og varsellampen er at analysen følger sitatenes rekkefølge. Overtolkning forekommer, men er langt sjeldnere enn gjenfortelling.",
    },
    {
      question: "Hvor bør tyngdepunktet i tid ligge i en vedleggsanalyse?",
      options: ["På den gjennomførte analysen, mens redegjørelsen for fasene holdes kort", "På redegjørelsen for fasemodellen, siden den viser pensumforankringen", "Jevnt fordelt mellom redegjørelsen og analysen, med omtrent halvparten av tiden på hver av delene", "På gjengivelsen av vedlegget, slik at leseren vet hva som analyseres"],
      explanation: "Redegjørelsen er inngangsbilletten, analysen er svaret. Å bruke halve tiden på fasene er en av de vanligste måtene å havne på midten av skalaen i denne sjangeren.",
    },
  ],
  'svmet1010-9-4': [
    {
      question: "I hvor mange av oppgavesettene i arkivet står rolledrøftingen på et feltarbeidsutdrag?",
      options: ["I 5 av 31 oppgavesett, noe som gjør den til den hyppigste vedleggssjangeren", "I 3 av 31 oppgavesett, alle fra det siste året før vedleggene ble faset ut", "I 19 av 31 oppgavesett, siden observasjon er tema i så mange av settene", "I 2 av 31 oppgavesett, begge fra perioden med emneoppgave som vurderingsform"],
      explanation: "Sjangeren står i H2015, V2016, V2017, H2017 og V2018. Tallet 19 gjelder observasjon og deltakerroller som tema, ikke vedleggssjangeren, og 3 gjelder vedleggsanalysen av intervjudata.",
    },
    {
      question: "Hva skal stå først i et toppsvar på rolledrøftingen?",
      options: ["Hele rollekontinuumet, altså den prinsipielle rammen, før den ene rollen drøftes", "Plasseringen av forskeren i utdraget, slik at leseren vet hva som skal drøftes", "En kort gjengivelse av hva utdraget handler om og hvem forskeren er", "En vurdering av om rollen forskeren valgte, var den riktige for prosjektet"],
      explanation: "Rammen først gjør plasseringen til en vurdering i stedet for en påstand, og veiledningene beskriver nettopp det å plassere fremgangsmåten i et bredere metodisk landskap som typisk for de beste besvarelsene. Et referat av utdraget er dessuten gjenfortelling.",
    },
    {
      question: "Hva skiller en fullt deltakende forsker fra en som har gått helt opp i rollen?",
      options: ["Den fullt deltakende observerer fortsatt, mens forskerblikket er borte hos den andre", "Den fullt deltakende har en formell rolle i feltet, mens den andre deltar uformelt", "Den fullt deltakende har gitt seg til kjenne som forsker, mens den andre er skjult", "Den fullt deltakende deltar bare i deler av aktiviteten, mens den andre deltar i alt"],
      explanation: "Kriteriet er om det analytiske arbeidet fortsatt pågår, ikke hvor formell rollen er eller hvor åpen forskeren har vært. Å delta i bare deler av aktiviteten er derimot beskrivelsen av den delvis deltakende.",
    },
    {
      question: "Hva er den intervenerende rollen?",
      options: ["En posisjon der forskeren aktivt griper inn og endrer noe i feltet hun studerer", "En posisjon der forskeren avbryter feltarbeidet for å innhente nytt samtykke", "En posisjon mellom delvis og fullt deltakende på Fangens kontinuum", "En posisjon der forskeren stiller spørsmål underveis i observasjonen"],
      explanation: "Den intervenerende rollen ligger på siden av skalaen: forskeren endrer feltet, for eksempel ved å foreslå et tiltak. Å stille spørsmål underveis er vanlig i all deltakende observasjon og flytter ikke posisjonen.",
    },
    {
      question: "Hva vil det si å belegge plasseringen av forskeren?",
      options: ["Å peke på konkrete steder i utdraget som viser hvorfor posisjonen er den du sier", "Å vise til Fangens egen definisjon av nettopp den posisjonen du har plassert forskeren i", "Å gjengi et langt sitat fra utdraget før du sier hvilken posisjon det er", "Å vise at forskeren selv beskriver rollen sin med det samme begrepet"],
      explanation: "Belegget er koblingen mellom et sted i teksten og posisjonen. En definisjon fra pensum er ikke belegg for hva som skjer i utdraget, og forskere i utdrag bruker sjelden kontinuumets begreper om seg selv.",
    },
    {
      question: "Hva menes med poenget som ikke står i utdraget?",
      options: ["Et argument fra pensum eller metodelogikken som du henter inn i drøftingen", "En opplysning om feltarbeidet som oppgaven forutsetter at du kjenner fra før", "En vurdering av hva forskeren burde ha skrevet i feltnotatene sine", "Et hypotetisk scenario om hva som kunne skjedd senere i feltarbeidet"],
      explanation: "Alle kandidatene leser det samme utdraget, så det som skiller dem, er hva de tar med inn — for eksempel Ugelviks forløp eller Øygardens kropp som metoderedskap. Det hypotetiske hører til den kontrafaktiske delen, som er noe annet.",
    },
    {
      question: "Hvilke tre dimensjoner bør den kontrafaktiske drøftingen gå gjennom?",
      options: ["Data, relasjoner og etikk", "Tid, sted og omfang", "Validitet, reliabilitet og overførbarhet", "Utvalg, rekruttering og tilgang"],
      explanation: "Spørsmålet er hva en annen posisjon ville gjort med hva du får se, med tilliten i feltet, og med hva som lar seg forsvare. De fleste kandidatene husker den første og glemmer de to andre.",
    },
    {
      question: "Hva er sjangerens hovedfeil?",
      options: ["Oppskrift i stedet for drøfting: rollen plasseres riktig, men bare fordelene listes", "Overtolkning: kandidaten leser langt mer inn i feltutdraget enn det finnes dekning for i teksten", "For mye pensum: drøftingen drukner i henvisninger til andre feltarbeid", "For lang gjengivelse av kontinuumet på bekostning av plasseringen"],
      explanation: "Feil #4 er å ramse opp hvordan man gjør feltarbeid uten å ta opp dilemmaene, og i denne sjangeren viser den seg som en ren fordelsliste. Varsellampen er at fordelene er flere enn ulempene.",
    },
    {
      question: "Hvorfor er det viktig å nevne at rollen kan skiftes underveis?",
      options: ["Fordi kontinuumet beskriver posisjoner én forsker kan innta til ulike tider, ikke fire typer forskere", "Fordi et rolleskifte alltid er nødvendig for å komme innenfor i et lukket felt", "Fordi sensor forventer at du nevner alle detaljene i Fangens framstilling", "Fordi et feltarbeidsutdrag så å si alltid beskriver minst to ulike roller hos den samme forskeren"],
      explanation: "Å utelate rolleskiftet er en av de vanligste upresishetene i gjengivelsen av kontinuumet, altså feil #16. Skifte er verken alltid nødvendig eller alltid til stede i et utdrag.",
    },
    {
      question: "Hva bør en drøfting av rollevalget til slutt knytte seg til?",
      options: ["Til spørsmålet studien stiller, siden riktig rolle avhenger av hva som skal undersøkes", "Til hvor mye tilgang rollen ga, siden mer tilgang gir bedre data", "Til hvor etisk forsvarlig rollen er, siden etikken går foran metodiske hensyn", "Til hvor mye rollen liknet på den rollen forskeren hadde i den mest kjente pensumstudien på feltet"],
      explanation: "Ingen posisjon på kontinuumet er riktig i seg selv, og det er samsvaret mellom rolle og spørsmål som skal drøftes. Mer tilgang er ikke automatisk bedre, siden nærhet koster analytisk avstand.",
    },
  ],
  'svmet1010-9-5': [
    {
      question: "I hvor mange av oppgavesettene i arkivet står metodesammenligningen?",
      options: ["I 4 av 31 oppgavesett, blant dem begge de to nyeste settene", "I 2 av 31 oppgavesett, begge fra perioden før vedleggene ble innført", "I 15 av 31 oppgavesett, siden metodekjennskap testes i nesten hvert sett", "I 9 av 31 oppgavesett, jevnt fordelt over hele perioden fra 2004 til 2025"],
      explanation: "Sjangeren står i V2011, V2013, H2024 og H2025. At to av dem er de nyeste settene, er grunnen til at den må trenes selv om det historiske tallet er lavt.",
    },
    {
      question: "Hvilke tre dimensjoner kreves for toppkarakter i metodesammenligningen?",
      options: ["Kjennetegn, styrker og svakheter, og likheter og forskjeller", "Datatype, forskerrolle og ressursbruk, behandlet for hver metode", "Definisjon, pensumforankring og eksempel, slik som i kortsvaret", "Historikk, gjeldende bruk og fremtidig relevans for hver av metodene"],
      explanation: "H2024-veiledningen er eksplisitt: alle tre kreves, og en besvarelse som er sterk på én eller jevn men grunn på alle, er C. Datatype og forskerrolle er akser du kan sammenligne langs, ikke selve kravet.",
    },
    {
      question: "Hva er hovedgrunnen til å strukturere sammenligningen langs akser?",
      options: ["Fordi likheter og forskjeller da kommer av seg selv, siden metodene står i samme avsnitt", "Fordi det gir en ryddigere disposisjon som er lettere for sensor å følge", "Fordi det gjør det mulig å skrive mer om hver enkelt metode enn ellers", "Fordi oppgaveteksten som regel angir hvilke akser besvarelsen skal struktureres etter"],
      explanation: "Aksestrukturen leverer den tredje dimensjonen automatisk, mens metode-for-metode-strukturen gjør den nesten umulig. Ryddighet er en bieffekt, ikke hovedgrunnen.",
    },
    {
      question: "Hva er metode-for-metode-remsen?",
      options: ["En besvarelse som tar metodene i tur og orden, slik at likheter og forskjeller aldri får plass", "En besvarelse som bruker for mange metoder og derfor blir overfladisk", "En besvarelse som rangerer metodene fra best til dårligst uten begrunnelse", "En besvarelse som gjentar de samme poengene på nytt under hver eneste av metodene den dekker"],
      explanation: "Symptomet er at ett avsnitt kan slettes uten at resten endrer seg. En kort presentasjon av metodene i starten er derimot både lov og ryddig — feilen oppstår når hele besvarelsen er bygget slik.",
    },
    {
      question: "Hva menes med reaktivitet som sammenligningsakse?",
      options: ["Hvor mye forskerens tilstedeværelse endrer det som studeres", "Hvor raskt informantene svarer på henvendelser fra forskeren", "Hvor følsomt materialet er for endringer i intervjuguiden underveis", "Hvor sterkt deltakerne reagerer følelsesmessig på temaet i studien"],
      explanation: "Reaktiviteten er høyest der forskeren har skapt hele situasjonen, som i fokusgruppen, og lavest i webetnografi der materialet ble til uten henne. Den er en egenskap, ikke en feil — lav reaktivitet koster målrettethet.",
    },
    {
      question: "Hvorfor er en fokusgruppe ikke det samme som et gruppeintervju?",
      options: ["Fordi samspillet mellom deltakerne er selve dataen, ikke bare en måte å hente flere svar på", "Fordi fokusgruppen alltid ledes av en moderator, mens gruppeintervjuet ledes av deltakerne selv i fellesskap", "Fordi fokusgruppen alltid har flere deltakere enn et gruppeintervju har", "Fordi fokusgruppen følger en fast temaliste, mens gruppeintervjuet er åpent"],
      explanation: "Interaksjonspoenget er hele grunnen til at fokusgruppen er en egen metode hos Wibeck. Antall deltakere og graden av struktur er praktiske forhold som ikke definerer skillet.",
    },
    {
      question: "Hvor mange av oppgavesettene har den frittstående etikkoppgaven?",
      options: ["2 av 31 oppgavesett, nemlig V2009 og H2025", "6 av 31 oppgavesett, spredt over arkivet", "15 av 31 oppgavesett, altså i nesten halvparten", "4 av 31 oppgavesett, alle med vedlegg"],
      explanation: "Den frittstående varianten står i V2009 og H2025. Tallet 15 gjelder etikk som tema i settene generelt, i tillegg til at etikk er en obligatorisk komponent i alle designoppgaver.",
    },
    {
      question: "Hva er de fire forskningsetiske kjernekravene?",
      options: ["Informert samtykke, konfidensialitet og anonymisering, konsekvensvurdering og meldeplikt", "Frivillighet, nøytralitet, etterprøvbarhet og åpenhet om finansieringen", "Samtykke, taushetsplikt, oppbevaringsplikt og plikten til å publisere funnene sine åpent", "Respekt, ærlighet, uavhengighet og ansvar overfor forskersamfunnet"],
      explanation: "Kravene er hentet fra NESH-retningslinjene og er referansen i faget. De øvrige alternativene inneholder verdier og plikter som finnes i forskningsetikken, men som ikke er kjernekravene overfor deltakerne.",
    },
    {
      question: "Hva kjennetegner et metodespesifikt etisk dilemma?",
      options: ["Det oppstår fordi metoden er kvalitativ, ikke fordi forskeren er uforsiktig", "Det oppstår når forskeren bryter et av kjernekravene i NESH-retningslinjene", "Det oppstår bare i studier der informantene tilhører en sårbar gruppe", "Det oppstår når to av kjernekravene ikke kan oppfylles samtidig i prosjektet"],
      explanation: "Prosessuelt samtykke, konfidensialitet i fokusgrupper og problemet med tykke data følger av hvordan metodene fungerer. De er ikke brudd, men vilkår som gjør at kravene ikke kan følges mekanisk.",
    },
    {
      question: "Hva er alle-faser-poenget?",
      options: ["At etikken gjelder fra spørsmålet formuleres til resultatene publiseres, med tiltak i hver fase", "At alle deltakerne må informeres på nytt i hver fase av datainnsamlingen", "At alle prosjektets faser skal beskrives i metodekapitlet i den ferdige forskningsrapporten", "At etiske vurderinger må godkjennes på nytt hver gang prosjektet endres"],
      explanation: "Kravet er at hver fase reiser sitt eget etiske spørsmål, og at svaret er et konkret tiltak. Gjentatt informasjon er prosessuelt samtykke, som er ett av tiltakene, ikke hele poenget.",
    },
    {
      question: "Hva skiller et operasjonelt tiltak fra moralprat?",
      options: ["At noen kan gjøre det du beskriver, på en bestemt dag", "At tiltaket er hjemlet i NESH og kan dokumenteres", "At tiltaket er beskrevet med fagbegreper", "At tiltaket gjelder alle informantene"],
      explanation: "Testen er gjennomførbarhet: «informantene får lese sitatene før publisering» er et tiltak, «vi må ivareta informantene» er ikke det. Vag etikk uten tiltak er feil #8 i registeret.",
    },
    {
      question: "Hva er den vanligste C-profilen i etikkoppgaven?",
      options: ["Alt er riktig, men ingenting kan gjøres med det — kravene er der og tiltakene mangler", "Tiltakene er konkrete, men rammeverket er ikke nevnt i det hele tatt", "Besvarelsen drøfter for mange dilemmaer og rekker ikke å gå i dybden", "Besvarelsen bruker eksempler hentet fra pensum i stedet for eksempler knyttet til oppgavens eget case"],
      explanation: "Kravene er lette å gjengi, og det er anvendelsen som skiller nivåene. Pensumeksempler trekker dessuten opp i alle sjangre, så det å bruke dem er en styrke og ikke en svakhet.",
    },
  ],
  'svmet1010-9-6': [
    {
      question: "Hvor mange feil har bokas feilregister, og hvor kommer de fra?",
      options: ["Seksten, destillert fra de elleve sensorveiledningene i arkivet", "Tjue, destillert fra de trettien oppgavesettene i arkivet", "Tolv, hentet fra emnets offisielle læringsutbyttebeskrivelse", "Seksten, hentet fra pensumlitteraturens egne metodekapitler"],
      explanation: "Registeret har nøyaktig seksten koder, og kilden er veiledningenes egne feilbeskrivelser fra V2016 til H2025. Oppgavesettene sier hva som spørres om, ikke hva kandidatene gjør galt.",
    },
    {
      question: "Hvilken feil beskriver veiledningene som strykgrunn når den er gjennomgående?",
      options: ["Kvantitativ logikk brukt på et kvalitativt materiale", "Punktvise skjema-svar uten begrunnelse for valgene", "Manglende pensumforankring i metodedelen av besvarelsen", "Uklar problemstilling som ikke lar seg undersøke empirisk"],
      explanation: "Å ikke forstå skillet mellom kvalitativt og kvantitativt er det som beskrives på nederste nivå. De tre andre er alvorlige og trekker ned, men de plasserer i nedre halvdel snarere enn på stryk.",
    },
    {
      question: "Hva er varsellampen for feil 3, punktvise skjema-svar?",
      options: ["Mange kolon: en tekst full av overskrifter som Metode og Utvalg uten begrunnelser mellom", "Mange sitater: en tekst der det utleverte materialet gjengis langt oftere enn det faktisk tolkes", "Mange fagbegreper: en tekst der terminologien tar plassen fra innholdet", "Mange avsnitt: en tekst som er oppdelt i for korte deler til å henge sammen"],
      explanation: "Kolonet avslører listeformen, og listen er problemet fordi den ikke har plass til noe «fordi». Mange sitater peker mot ren deskripsjon, som er en annen feil.",
    },
    {
      question: "Hva kjennetegner feil 2, den skjulte kvantitative tilnærmingen?",
      options: ["Språket er kvalitativt, men fremgangsmåten teller opp der tolkning var poenget", "Kandidaten sier helt eksplisitt at funnene i studien er representative for en større gruppe", "Kandidaten bruker en survey i tillegg til de kvalitative intervjuene", "Kandidaten oppgir hvor mange informanter som deltok i undersøkelsen"],
      explanation: "Feilen ligger i praksisen: like spørsmål i lik rekkefølge, og en analyse som består i opptelling. Å oppgi antall informanter er derimot transparens, altså det motsatte av en feil.",
    },
    {
      question: "Hva sier veiledningene om teori som presenteres, men aldri brukes?",
      options: ["Den gir null uttelling, uansett hvor avansert den er", "Den gir delvis uttelling så lenge den er korrekt gjengitt", "Den trekker ned bare dersom den er hentet utenfor pensum", "Den vurderes som et pluss fordi den viser teoretisk oversikt"],
      explanation: "Teoriterskelen er lav, men absolutt: minst ett begrep må brukes meningsfullt i analysen. Ett enkelt begrep i arbeid er verdt mer enn tre avanserte som ligger stille.",
    },
    {
      question: "Hva er varsellampen for feil 5, ren deskripsjon av materialet?",
      options: ["At avsnittene dine følger sitatenes rekkefølge", "At du bruker for få sitater fra det utleverte materialet", "At du tolker mer enn det finnes dekning for i teksten", "At du ikke har redegjort for analysefasene innledningsvis"],
      explanation: "Følger strukturen materialet i stedet for analysen, har du skrevet et sammendrag. Overtolkning er en annen og langt sjeldnere svakhet.",
    },
    {
      question: "Hva sier veiledningene om å intervjue bekjente?",
      options: ["Det er lov, men fravær av drøfting trekker ned, og god refleksjon trekker opp", "Det bør unngås, siden nærheten til informantene svekker materialets holdbarhet", "Det er uproblematisk så lenge informantene har gitt informert samtykke", "Det trekker ned i alle tilfeller, fordi utvalget da ikke er strategisk begrunnet"],
      explanation: "Regelen er asymmetrisk: praksisen er tillatt, men den må drøftes. Både tilgangen og selvsensuren skal med, og det som ikke blir forklart fordi begge parter tror det er kjent, er et eget poeng.",
    },
    {
      question: "Hva er den vanligste konsekvensen av en ubalansert besvarelse?",
      options: ["C i stedet for B: styrke på én del kompenserer ikke for svakhet i resten", "B i stedet for A: bare de aller beste klarer å holde alle deler jevnt sterke", "Ingen konsekvens, siden dybde og bredde er likeverdige veier til toppkarakter", "Stryk, dersom den svake delen gjelder etikk eller problemstilling"],
      explanation: "Veiledningene sier det direkte, og det finnes ingen kompensasjon oppover. At dybde og bredde er likeverdige, gjelder når alle komponentene er til stede — dybde forutsetter at de andre ikke er tomme.",
    },
    {
      question: "Hvilket kjennetegn nevnes hyppigst på svake besvarelser i veiledningene?",
      options: ["Uklar eller uforskbar problemstilling", "Manglende etiske vurderinger i designet", "For få henvisninger til pensumlitteraturen", "Manglende sammenligning av informantene i analysen"],
      explanation: "Er spørsmålet uklart, kan ingen av de andre komponentene begrunnes, og feilen smitter derfor gjennom hele besvarelsen. De øvrige trekker ned, men nevnes sjeldnere som kjennetegn på nedre nivå.",
    },
    {
      question: "Hva skjer om du svarer på begge alternativene når oppgaven ber om ett?",
      options: ["Det gir ingen ekstrauttelling, og tiden er tatt fra svaret som faktisk teller", "Begge svarene vurderes, og gjennomsnittet av dem avgjør uttellingen på oppgaven som helhet", "Det beste svaret teller, og det andre gir et lite tillegg dersom det er godt", "Besvarelsen underkjennes fordi den bryter med oppgavens instruksjon"],
      explanation: "Sensor teller den beste, og resten er ren tidsbruk. Dette er den feilen i registeret som er billigst å fjerne — det tar tretti sekunder å telle svarene mot oppgaveteksten.",
    },
    {
      question: "Hva er testen på om et etikkavsnitt er case-tilpasset?",
      options: ["Om det ville måttet skrives om dersom caset ble byttet ut", "Om det viser til NESH og gjengir kjernekravene korrekt", "Om det dekker både samtykke, konfidensialitet og meldeplikt", "Om det står som en egen seksjon etter datainnsamlingsplanen"],
      explanation: "Byttetesten avslører det rituelle avsnittet umiddelbart. Rammeverket skal med, men rammeverket alene kunne stått i en hvilken som helst besvarelse.",
    },
    {
      question: "Hva innebærer feil 12?",
      options: ["At den analysemetoden som beskrives, ikke er den som faktisk gjennomføres", "At analysen mangler belegg i konkrete steder i det utleverte materialet", "At kandidaten bruker en analysetradisjon som ikke står på pensum", "At analysen kommer før metodedelen i besvarelsens disposisjon"],
      explanation: "Klassisk eksempel: grounded theory loves, og kodingen skjer etter kategorier satt opp på forhånd. Begge fremgangsmåter er legitime hver for seg — feilen er misforholdet mellom navnet og praksisen.",
    },
    {
      question: "Hvilke opplysninger krever transparenskravet?",
      options: ["Tid, sted, varighet, antall informanter og relasjonen til dem", "Navn, alder og yrke på hver enkelt av informantene i studien", "Fullstendig intervjuguide og alle transkripsjoner som vedlegg", "Finansiering, institusjonstilknytning og godkjenninger fra instansene"],
      explanation: "Uten disse opplysningene kan ingen vurdere hva materialet er verdt, og overførbarhet hviler nettopp på den vurderingen. Personopplysninger om informantene er derimot det motsatte av det kravet ber om.",
    },
    {
      question: "Hva er varsellampen for feil 4, oppskrift i stedet for drøfting?",
      options: ["Formuleringene «man bør» og «det er viktig å»", "Formuleringene «jeg velger» og «jeg vil bruke»", "Formuleringene «ifølge Fangen» og «hos Weiss»", "Formuleringene «kanskje» og «det kan tenkes at»"],
      explanation: "De to første signaliserer at teksten er blitt en instruksjon, og instruksjoner har ingen motforestillinger. «Jeg velger» er derimot begynnelsen på et valg som kan begrunnes.",
    },
    {
      question: "Hva er varsellampen for feil 16, upresise definisjoner?",
      options: ["At definisjonen din også kunne passe på nabobegrepet", "At definisjonen er kortere enn to fulle setninger", "At definisjonen mangler et eksempel fra en pensumstudie", "At definisjonen er formulert med dine egne ord i stedet for pensums"],
      explanation: "Presisjon måles mot nabobegrepet: en definisjon av markør som også dekker probe, treffer ikke. Egne ord er tvert imot ønskelig, så lenge de treffer forfatterens bruk.",
    },
    {
      question: "Hva er varsellampen for feil 7, manglende pensumbruk?",
      options: ["At en hel side går uten et eneste egennavn", "At du bruker litteratur fra andre emner i tillegg til pensum", "At henvisningene mangler sidetall og utgivelsesår", "At du bruker mange sitater fra pensumbøkene direkte"],
      explanation: "Egennavnstesten er rask og treffsikker, siden pensumforankring i praksis betyr navngitte avsendere. Ekstern litteratur er dessuten greit som supplement — det er hovedvekt på den som trekker ned.",
    },
    {
      question: "Hvorfor er en feilfri besvarelse ikke automatisk en toppbesvarelse?",
      options: ["Fordi feilfrihet er et gulv: en korrekt og flat besvarelse er nettopp det C beskriver", "Fordi sensor uansett vil finne noe å trekke for når besvarelsen er lang nok til å bli lest nøye", "Fordi feilene i registeret er de minst alvorlige svakhetene som finnes", "Fordi toppkarakter krever at alle sju designkomponentene er like lange"],
      explanation: "Det som løfter, er de valgfrie grepene: bortvalget, det negative tilfellet, pensumeksempelet, gyldighetsområdet. Feilfrihet fjerner trekk, men legger ingenting til.",
    },
    {
      question: "Hvor mange av de seksten feilene handler om at noe MANGLER i besvarelsen?",
      options: ["Fem — pensum, etikk, transparens, drøfting av bekjente og den fjerde komponenten", "To — nemlig pensumforankringen og de etiske vurderingene av det konkrete caset i oppgaven", "Alle seksten, siden enhver feil kan beskrives som noe som mangler", "Ingen — samtlige feil handler om noe som står galt i besvarelsen"],
      explanation: "Fraværsfeilene er de billigste å rette, fordi de ikke krever at du kan mer — bare at du skriver ned noe du allerede vet. Å kalle alle feil for fravær ville gjort skillet ubrukelig.",
    },
    {
      question: "Hva bør du bruke de siste ti minuttene av eksamen på?",
      options: ["Tre kontrollspørsmål: egennavn på hver side, etikk som kan gjøres, og et fordi per valg", "Å skrive en fyldigere konklusjon som oppsummerer hele besvarelsen", "Å legge til et ekstra teoretisk begrep for å vise faglig bredde", "Å besvare et av de valgfrie alternativene du ikke rakk å komme til tidligere i eksamenstiden"],
      explanation: "De tre spørsmålene treffer de billigste feilene i registeret. Et ekstra begrep uten bruk gir null, og et halvferdig ekstrasvar på et valgfritt alternativ gir ingen uttelling i det hele tatt.",
    },
    {
      question: "Hvorfor skal feilkodene aldri stå i selve eksamensbesvarelsen?",
      options: ["Fordi kodene er bokas interne merkelapper, og sensor kjenner ikke registeret", "Fordi det regnes som en form for meta-kommentar som trekkes for", "Fordi kodene endres fra semester til semester og fort blir utdaterte", "Fordi de hører til kortsvarssjangeren og ikke til langsvarene"],
      explanation: "Kodene er et arbeidsverktøy for deg, ikke et faguttrykk. Å skrive «her unngår jeg feil 8» sier ingenting til en leser som ikke har lest denne boka.",
    },
  ],
  'svmet1010-9-7': [
    {
      question: "Hva er det som først og fremst vurderes i en designoppgave, ifølge sensorveiledningene i SVMET1010?",
      options: ["Sammenhengen mellom komponentene — at metoden følger av spørsmålet og at begrepet brukes videre", "Antallet komponenter som er nevnt, slik at ingen av de sju punktene mangler i teksten", "Omfanget av det teoretiske rammeverket, altså hvor mange perspektiver som presenteres", "Antallet metoder som kombineres, siden flere datakilder gir et rikere materiale"],
      explanation: "Vurderingen gjelder sammenhengen mellom komponentene, ikke antallet. Å telle avkryssede punkter er nettopp skjema-svaret veiledningene plasserer nederst. Flere perspektiver hjelper ikke hvis de ikke brukes, og metodekombinasjon gir ingen bonus i seg selv — bare samsvar mellom metode og problemstilling teller.",
    },
    {
      question: "En kandidat skriver: «Jeg vil bruke dybdeintervju fordi kvalitativ metode går i dybden.» Hva er problemet?",
      options: ["Begrunnelsen er generell og kunne stått i en besvarelse om et hvilket som helst tema", "Dybdeintervju er feil metode når problemstillingen inneholder en hvordan-dimensjon", "Begrunnelsen mangler en pensumforfatter, og uten avsender teller metodevalget ikke", "Kandidaten burde ha kombinert intervju med observasjon for å få et rikere materiale"],
      explanation: "En begrunnelse som passer på alle case, begrunner ingen. Metodevalget skal knyttes til akkurat dette spørsmålet. Dybdeintervju er ikke feil metode, avsender kreves for begreper og ikke for metodevalg, og metodekombinasjon gir ingen uttelling i seg selv.",
    },
    {
      question: "Hva betyr det at etikkens vekt i vurderingen er asymmetrisk?",
      options: ["Tynn etikk trekker ned der caset er sensitivt, men gode grep trekker opp uansett case", "Etikken teller mer i langsvar enn i kortsvar, fordi langsvaret har flere komponenter", "Etikken vurderes strengere hos kandidater som har valgt observasjon enn hos dem med intervju", "Etikken teller kun i planleggingsfasen, mens analysefasen vurderes på faglige kriterier"],
      explanation: "Asymmetrien går mellom straff og belønning: manglende etikkrefleksjon trekker ned bare der den er åpenbart relevant, mens konkrete etikkgrep trekker opp også i ufarlige case. Den handler verken om sjanger, metodevalg eller prosjektfase.",
    },
    {
      question: "I hvor mange av oppgavesettene i arkivet vårt har designoppgaven vært langsvarsalternativ?",
      options: ["I 20 av 31 oppgavesett, og den er langsvaret i begge de to nyeste settene", "I 31 av 31 oppgavesett, altså i samtlige sett arkivet inneholder fra 2004 til 2025", "I 3 av 31 oppgavesett, og den er dermed en av de sjeldnere langsvarsformene", "I 9 av 31 oppgavesett, jevnt fordelt over årene før vurderingsformen ble endret"],
      explanation: "Designoppgaven er telt i 20 av 31 oppgavesett og er langsvaret i begge de to nyeste. Den er dermed den klart hyppigste langsvarssjangeren, men den finnes ikke i samtlige sett. Tallet 3 hører til vedleggsanalysen, og 9 til overførbarhet og validitet som tema.",
    },
    {
      question: "Hva kjennetegner en breddebesvarelse på toppnivå i designsjangeren?",
      options: ["Alle sju komponentene er solide og jevne, uten at noen av dem er drevet ekstremt langt", "Alle sju komponentene er nevnt, og de to viktigste er behandlet grundig på de andres bekostning", "Komponentene er listet opp i punkter, slik at sensor raskt ser at ingenting mangler", "Besvarelsen dekker flere metoder enn oppgaven krever, slik at bredden i faget vises"],
      explanation: "Bredde betyr jevn soliditet i alle komponentene. Å være sterk på to og tynn på resten er ubalanse, som gir midtre karakter. Punktlister uten forklaring plasseres nederst, og ekstra metoder gir ingen uttelling uten samsvar med problemstillingen.",
    },
    {
      question: "Hvorfor leter man aktivt etter negative tilfeller i analysen av et kvalitativt materiale?",
      options: ["Fordi en påstand som bare hviler på tilfeller som støtter den, ikke er prøvd", "Fordi utvalget da blir mer variert, og variasjon styrker overføringen til andre miljøer", "Fordi sensor krever at alle fasene i analysemodellen er gjennomført i riktig rekkefølge", "Fordi avvikende informanter ofte er de mest interessante å sitere i rapporten"],
      explanation: "Hensikten er å prøve påstanden: finner man et tilfelle som ikke passer, må påstanden begrenses eller endres. Å kunne forklare denne hensikten er et uttalt skille mot lavere nivå. Variasjon i utvalget er et annet spørsmål, fasene er en verktøykasse og ikke en tvangstrøye, og sitatverdi er ikke et analytisk kriterium.",
    },
  ],
  'svmet1010-9-8': [
    {
      question: "Hva skal du gjøre med en påstand du får oppgitt i en vedleggsanalyse?",
      options: ["Prøve den mot materialet, slik at den kan bekreftes, begrenses eller endres", "Bekrefte den med de sitatene i materialet som støtter den best", "Gjengi den i innledningen og la analysen av materialet stå for seg selv", "Erstatte den med en egen påstand som passer materialet bedre enn den gitte"],
      explanation: "En oppgitt påstand er noe som skal prøves, og utfallet avgjøres av materialet. Å lete bare etter støtte er å la være å prøve, å hoppe over påstanden er å svare på en annen oppgave, og å bytte den ut er å ignorere instruksjonen.",
    },
    {
      question: "Hva er kjennetegnet på ren deskripsjon i en vedleggsanalyse?",
      options: ["Materialet gjenfortelles i sin egen rekkefølge, uten retning og uten belegg", "Analysen bruker for mange begreper, slik at materialet forsvinner bak teorien", "Analysen henviser til linjenumre i stedet for å gjengi hva informantene sier", "Analysen sammenligner informantene i stedet for å behandle dem hver for seg"],
      explanation: "Deskripsjon kjennes på at avsnittene følger vedleggets rekkefølge og bare refererer innholdet. Henvisninger til linjenumre og sammenligning på tvers er derimot analysegrep, og mange begreper er et annet problem enn ingen retning.",
    },
    {
      question: "Hvilken jobb gjør begrepet symbolske grenser i en analyse av utsagn som «jeg er ikke en sånn fitnessjente»?",
      options: ["Det viser at informanten plasserer seg utenfor en kategori og samtidig bekrefter at den finnes", "Det viser at informanten er blitt stemplet av andre og forsvarer seg mot merkelappen de har fått", "Det viser at informanten har lavere status i miljøet enn dem hun sammenligner seg med", "Det viser at informanten mangler et språk for å beskrive sin egen treningspraksis"],
      explanation: "Symbolske grenser er skillene folk selv trekker mellom seg og andre for å plassere seg moralsk, og utsagnet gjør begge deler på én gang. Stempling er derimot merkelappen andre fester utenfra, og verken status eller manglende språk er det begrepet handler om.",
    },
    {
      question: "Hvorfor er det ikke nok å nevne et negativt tilfelle i analysen?",
      options: ["Fordi funnet skal få en konsekvens: påstanden må begrenses, presiseres eller endres", "Fordi et negativt tilfelle bare teller når det finnes flere av dem i materialet", "Fordi negative tilfeller skal håndteres i utvalget og ikke i analysen av materialet", "Fordi tilfellet må sammenlignes med et tilsvarende tilfelle i en pensumstudie"],
      explanation: "Å se innvendingen og gå videre som om den ikke fantes, er svakere enn ikke å ha lett — hele hensikten er at påstanden skal kunne felles. Ett tilfelle er nok, grepet hører hjemme både i utvalg og analyse, og noen sammenligning med pensum kreves ikke.",
    },
    {
      question: "I hvor mange oppgavesett i arkivet vårt er vedleggsanalyse av intervjudata dokumentert?",
      options: ["I 3 av 31 oppgavesett, alle fra en sammenhengende periode mellom 2015 og 2018", "I 20 av 31 oppgavesett, jevnt fordelt over hele perioden fra 2004 til 2025", "I 15 av 31 oppgavesett, med en tydelig topp i de siste årene før 2020", "I 5 av 31 oppgavesett, alle fra tiden etter at skoleeksamen ble gjeninnført"],
      explanation: "Sjangeren er telt i 3 av 31 oppgavesett, samlet i årene 2015 til 2018, og den mangler i de to nyeste settene. Tallet 20 hører til designoppgaven og 5 til deltakerrolle-drøftingen på vedlegg.",
    },
    {
      question: "Hva er forskjellen på andregrads og tredjegrads fortolkning hos Fangen?",
      options: ["Andre grad setter deltakernes forståelse i en sammenheng, tredje grad legger et kritisk lag over", "Andre grad gjengir hva deltakerne selv mener om det som skjer, tredje grad setter det i sammenheng", "Andre grad brukes på intervjudata, mens tredje grad er forbeholdt observasjonsmateriale", "Andre grad krever belegg i teksten, mens tredje grad kan bygge på forskerens inntrykk"],
      explanation: "Deltakernes egen forståelse er første grad; forskerens kontekstualisering er andre grad, og et kritisk eller teoretisk lag over igjen er tredje grad. Gradene gjelder alle datatyper, og kravet om belegg forsvinner ikke jo høyere man kommer — det blir tvert imot viktigere.",
    },
  ],
  'svmet1010-9-9': [
    {
      question: "Hva skiller en fullt deltakende forsker fra en ikke-observerende deltaker?",
      options: ["Den analytiske avstanden er i behold hos den ene og tapt hos den andre", "Den ene deltar i arbeidet, mens den andre bare er til stede i feltet uten å delta", "Den ene har gitt seg til kjenne i feltet, mens den andre observerer skjult", "Den ene fører feltnotater underveis, mens den andre skriver dem i etterkant"],
      explanation: "Begge gjør det de andre gjør, og forskjellen ligger i om forskeren fortsatt ser feltet analytisk. Å være til stede uten å delta er den ikke-deltakende observatøren, og verken åpen eller skjult rolle eller notatpraksis definerer skillet.",
    },
    {
      question: "Hva er en kontrafaktisk drøfting i en oppgave om deltakerroller?",
      options: ["En drøfting av hva andre roller ville gjort med dataene, relasjonene og etikken", "En drøfting av hvorvidt forskerens plassering på kontinuumet er riktig belagt", "En drøfting av de innvendingene forskeren selv reiser i sine egne feltnotater", "En drøfting av hvordan feltet ville sett ut uten forskerens tilstedeværelse"],
      explanation: "Grepet består i å ta hver alternative posisjon og spørre hva den ville endret langs de tre aksene, forankret i utdraget. Å kontrollere belegget for plasseringen er et annet krav, og forskerens egne forbehold er noe hun skriver, ikke en drøfting du utfører.",
    },
    {
      question: "Hvem er begrepet work-along hentet fra, og hva innebærer det?",
      options: ["Wadel — å delta i et arbeid og bruke selve opplæringen som datakilde", "Fangen — å skifte posisjon på rollekontinuumet mens feltarbeidet pågår", "Ugelvik — å henge med i et felt over tid uten noen offisiell rolle", "Weiss — å følge informanten gjennom arbeidsdagen og la stedet styre samtalen"],
      explanation: "Work-along og lærlingrollen er Wadels, og poenget er at det å bli lært opp gir tilgang til regler ingen formulerer før de brytes. Rolleskiftet er Fangens, det å henge med over tid er Ugelviks uttrykk med opphav hos Geertz, og Weiss skriver om intervjuhåndverket.",
    },
    {
      question: "Hva er markøren som løfter mest i en drøfting av deltakerroller på et vedlegg?",
      options: ["Å ta inn minst ett poeng som ikke står i utdraget, typisk hva rollen gjør forskeren blind for", "Å gjengi alle detaljene i utdraget slik at plasseringen på kontinuumet blir grundig belagt", "Å knytte forskerens rolle til minst tre ulike pensumstudier med feltarbeid", "Å konkludere med at rollevalget var riktig, siden forskeren selv har begrunnet det"],
      explanation: "Utdraget viser hva rollen ga tilgang til, men aldri hva den stengte for, og derfor er poenget utenfra det som skiller mest. Grundig belegg er en terskel og ikke en markør, flere studier gir ingen bonus i seg selv, og en konklusjon skal begrunnes selvstendig.",
    },
    {
      question: "I hvor mange oppgavesett i arkivet vårt er drøfting av deltakerroller på et vedlegg dokumentert?",
      options: ["I 5 av 31 oppgavesett, og det gjør den til den hyppigste vedleggssjangeren", "I 3 av 31 oppgavesett, og det gjør den til den sjeldneste av vedleggssjangrene", "I 19 av 31 oppgavesett, siden temaet observasjon inngår i alle designoppgaver", "I 11 av 31 oppgavesett, ett for hver sensorveiledning som finnes i arkivet"],
      explanation: "Sjangeren er telt i 5 av 31 oppgavesett og er dermed den hyppigste av vedleggssjangrene. Tallet 3 hører til vedleggsanalysen av intervjudata, 19 er temaet observasjon totalt, og 11 er antallet sensorveiledninger — ikke et antall sett.",
    },
    {
      question: "En forsker som er ansatt i feltet, sier fra til sykepleier når en beboer ikke har fått drikke. Hva er dette metodisk?",
      options: ["Et skifte til den intervenerende rollen, som bør noteres og drøftes som en betingelse for dataene", "Et brudd på forskerrollen som gjør de øvrige observasjonene fra vakten ubrukelige", "Et uttrykk for at forskeren har gått helt opp i rollen og mistet den analytiske avstanden", "Et etisk valg uten metodiske følger, siden hendelsen ikke handler om forskningsspørsmålet"],
      explanation: "Å gripe inn og endre forløpet er den intervenerende rollen, og en registrert og drøftet intervensjon er transparens. Materialet blir ikke ubrukelig, det å gripe inn er ikke det samme som å miste avstanden, og hendelsen har metodiske følger fordi den setter en grense for hva som kan observeres.",
    },
  ],
};

export default quizData_svmet1010;
