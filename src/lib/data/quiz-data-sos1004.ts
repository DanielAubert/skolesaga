import type { QuizQuestion } from './quiz-data';

const quizData_sos1004: Record<string, QuizQuestion[]> = {
  'sos1004-0-1': [
    {
      question: "Hvor mye teller langsvarsdelen (Del II) av karakteren i SOS1004?",
      options: ["To tredeler av den samlede karakteren i emnet", "En tredel av den samlede karakteren i emnet", "Halvparten av den samlede karakteren i emnet", "Tre firedeler av den samlede karakteren i emnet"],
      explanation: "Langsvaret teller to tredeler, og flervalgsdelen teller en tredel. Svaret om en tredel tester at man husker vektingen, men bytter om på de to delene. Svarene om halvparten og tre firedeler er de to vanligste gjettene når man husker at langsvaret veier tyngst, uten å huske hvor mye.",
    },
    {
      question: "Hva skjer hvis en kandidat får F på flervalgsdelen, men leverer et sterkt langsvar?",
      options: ["Hele eksamen er strøket, ettersom begge deler må bestås hver for seg", "Karakteren settes ut fra langsvaret, siden det veier tyngst av de to", "Karakteren beregnes som et vektet snitt av de to delene som vanlig", "Kandidaten får bestått, men uten mulighet til å forbedre karakteren"],
      explanation: "Begge deler må bestås for seg i SOS1004, så stryk på den ene gir stryk på hele eksamen. Svaret om at langsvaret avgjør, forveksler vekting med beståelse — vektingen sier hvor karakteren kommer fra, ikke om eksamen er bestått. Svaret om vektet snitt beskriver den vanlige ordningen i andre emner.",
    },
    {
      question: "Hva gir et ubesvart flervalgsspørsmål på Del I?",
      options: ["0 poeng, verken pluss eller minus i den samlede poengsummen", "−0,5 poeng, på samme måte som et galt svar", "−0,25 poeng, altså halvparten av straffen for galt", "+0,25 poeng, som en liten uttelling for ærlighet"],
      explanation: "Ubesvart gir 0. Det er nettopp derfor avståelse kan lønne seg: null er bedre enn den forventede uttellingen ved blind gjetting. Svaret om −0,5 forveksler ubesvart med galt svar, og svaret om −0,25 er en vanlig antakelse om at det finnes en mellomstraff.",
    },
    {
      question: "Hvilket hjelpemiddel er tillatt på eksamen i SOS1004?",
      options: ["Bare en forhåndskontrollert ordbok, og ingen andre hjelpemidler", "Alle trykte hjelpemidler, men ingen digitale ressurser", "Pensumlitteratur og egne notater, men ingen ordbok", "Ingen hjelpemidler i det hele tatt, heller ikke ordbok"],
      explanation: "Eksamen er en skoleeksamen der eneste tillatte hjelpemiddel er en forhåndskontrollert ordbok. Svaret om pensum og notater beskriver hjemmeeksamensformen fra H2021, som var et unntaksår. Svaret om ingen hjelpemidler i det hele tatt er nær sannheten, men overser nettopp ordboka.",
    },
    {
      question: "Hvor mange langsvarsoppgaver står i settet, og hvor mange skal besvares?",
      options: ["To står der, og du besvarer én av dem", "To står der, og du besvarer begge to", "Tre står der, og du besvarer to av dem", "Én står der, og alle besvarer den samme"],
      explanation: "Del II gir deg to alternativer, A og B, og du velger ett av dem. Svaret om å besvare begge to overser valget, som er selve grunnen til at det lønner seg å beherske to temaområder. Svaret om tre oppgaver beskriver formen i andre emner, ikke i SOS1004.",
    },
    {
      question: "Hvor mange poeng på flervalgsdelen gir typisk karakteren C, dokumentert for H2023 til H2025?",
      options: ["Mellom 9 og 12 poeng av 20 mulige", "Mellom 13 og 16 poeng av 20 mulige", "Mellom 6 og 8 poeng av 20 mulige", "Mellom 17 og 20 poeng av 20 mulige"],
      explanation: "C-sonen ligger typisk på 9 til 12 poeng. Sonen 13 til 16 er B, sonen 6 til 8 er D, og 17 til 20 er A. Merk at det er poeng og ikke antall riktige — med minuspoeng kan de to være svært forskjellige.",
    },
    {
      question: "Hva må et langsvar i SOS1004 alltid inneholde for å nå C?",
      options: ["Både en redegjørelsesdel og en drøftingsdel, og begge må være greit besvart", "En redegjørelsesdel som dekker minst tre av pensumforfatterne i temaet", "En drøftingsdel som lander på en klar og entydig konklusjon til slutt", "Både en innledning, en hoveddel og en avslutning med egen overskrift"],
      explanation: "C-terskelen er at begge ledd er til stede og greit besvart; det ene kan kompensere for det andre, men ingen av dem kan mangle. Svaret om en klar konklusjon beskriver noe som er lov, men ikke påkrevd — en drøfting kan lande avveiende. Svaret om tre pensumforfattere finner opp et krav som ikke finnes.",
    },
    {
      question: "Hva var spesielt med eksamensterminen H2021 i SOS1004?",
      options: ["Eksamen var en hjemmeeksamen med hjelpemidler, på grunn av korona", "Eksamen hadde bare langsvar, uten noen flervalgsdel i det hele tatt", "Eksamen ble avholdt om våren, som eneste gang i emnets historie", "Eksamen varte i seks timer i stedet for de vanlige fire timene"],
      explanation: "H2021 var emnets første termin, og eksamen ble avholdt som hjemmeeksamen med hjelpemidler. Strukturen med flervalg og langsvar var den samme, så svaret om at flervalgsdelen manglet, stemmer ikke. Svaret om våreksamen bommer på at emnet bare undervises i høstsemesteret.",
    },
    {
      question: "Hvor lang tid har du på eksamen i SOS1004, og hvordan er den fordelt?",
      options: ["Fire timer på begge deler samlet, uten noe fast skille mellom dem", "Fire timer, der Del I har en egen frist etter de første 30 minuttene", "Seks timer på begge deler samlet, slik forgjengeremnene hadde det", "Tre timer på langsvaret og en egen time avsatt til flervalgsdelen"],
      explanation: "Eksamen varer fire timer, og du disponerer tiden fritt mellom de to delene — anbefalingen om rundt 30 minutter på Del I er et råd, ikke en regel. Svaret om seks timer beskriver formatet i forgjengeremnene SOS1000 og SOS1001 før 2021, som er formhistorikk og ikke gjeldende form.",
    },
    {
      question: "Hvorfor gjengir ikke denne boka eksamens egne flervalgsspørsmål?",
      options: ["Fordi spørsmålene aldri publiseres — de gjenbrukes fra år til år", "Fordi de er for vanskelige til å brukes som treningsmateriale", "Fordi opphavsretten hindrer gjengivelse av eldre eksamensoppgaver", "Fordi spørsmålene skiftes helt ut hvert år og blir raskt utdaterte"],
      explanation: "Flervalgsspørsmålene publiseres ikke i etterkant, fordi de gjenbrukes. Boka trener derfor formen og poengmodellen med egne, nyskrevne spørsmål. Svaret om at spørsmålene skiftes ut hvert år er den motsatte påstanden av det som faktisk er tilfellet — det er nettopp gjenbruken som gjør at de holdes tilbake.",
    },
    {
      question: "Hva betyr mantraet «funn, ikke navn»?",
      options: ["At du skal skrive hva studien faktisk fant, ikke bare hvem som gjorde den", "At du skal unngå å navngi forskere og heller beskrive funnene anonymt", "At du skal prioritere nyere studier framfor eldre og mer siterte arbeider", "At du skal telle antall studier du bruker og sikte på minst fire av dem"],
      explanation: "Mantraet krever at forskningsfunnet brukes i selve argumentet — et forskernavn uten et resultat er ikke pensumbruk. Svaret om å unngå navn er den motsatte lesningen: navngiving gir uttelling, den skal bare ikke stå alene. Svaret om nyere studier innfører et krav om aktualitet som ikke finnes.",
    },
    {
      question: "Hvor mange langsvar-slots finnes det i hele arkivet for SOS1004?",
      options: ["Ti — to alternativer i hver av de fem terminene H2021 til H2025", "Fem — ett alternativ i hver av de fem terminene H2021 til H2025", "Tjue — to alternativer i hver av ti terminer siden emnet startet", "Femten — tre alternativer i hver av de fem terminene siden 2021"],
      explanation: "Emnet har hatt fem eksamensterminer, hver med to langsvarsalternativer, altså ti slots til sammen. Svaret om fem overser at det er to alternativer per termin. Svaret om tjue forutsetter dobbelt så mange terminer som emnet faktisk har hatt — det startet i 2021.",
    },
  ],
  'sos1004-0-2': [
    {
      question: "Hva er riktig rekkefølge på de fire trinnene i et langsvar?",
      options: ["Rammesetting, redegjørelse, drøfting, sluttgrep", "Redegjørelse, rammesetting, sluttgrep, drøfting", "Drøfting, redegjørelse, rammesetting, sluttgrep", "Rammesetting, drøfting, redegjørelse, sluttgrep"],
      explanation: "Rammesettingen navngir hva oppgaven spør om, redegjørelsen avklarer begrepene, drøftingen prøver påstanden med funn, og sluttgrepet lander kritisk. Svarene som setter drøftingen før redegjørelsen beskriver den motsatte varianten av feil #1: å drøfte løst uten å ha beredt grunnen først.",
    },
    {
      question: "Hvordan bør et langsvar omtrent fordeles mellom de to leddene?",
      options: ["Cirka en tredel redegjørelse og to tredeler drøfting", "Cirka to tredeler redegjørelse og en tredel drøfting", "Cirka halvparten på hvert av de to leddene i svaret", "Cirka tre firedeler drøfting og en firedel redegjørelse"],
      explanation: "Fordelingen er omtrent en tredel til to tredeler, i drøftingens favør. Svaret med to tredeler redegjørelse beskriver den vanligste faktiske skjevheten, og den er nettopp problemet: drøftingen blir for kort. Svaret om halvparten på hver er nær nok til å friste, men gir for lite plass til drøftingen.",
    },
    {
      question: "Hva er C-terskelen i et langsvar i SOS1004?",
      options: ["At både redegjørelse og drøfting er til stede og greit besvart", "At redegjørelsen er presis, uansett hvor kort drøftingen blir", "At drøftingen bruker minst tre navngitte studier i argumentet", "At svaret holder seg innenfor rammen på 1200 til 1800 ord"],
      explanation: "Begge ledd må være der; det ene kan kompensere for det andre, men ingen av dem kan mangle. Svaret om at redegjørelsen holder alene, beskriver nettopp den situasjonen som sperrer for C. Svaret om tre studier er et B-krav i praksis, ikke en C-terskel, og ordrammen er ikke et formelt krav.",
    },
    {
      question: "Hva måler Akse 2 i sensorenes vurdering av et langsvar?",
      options: ["Om konkrete funn fra navngitte studier brukes i selve argumentet", "Om antallet pensumreferanser i besvarelsen er tilstrekkelig høyt", "Om begrepene er avgrenset mot nabobegrepene sine på riktig måte", "Om drøftingen holder begge sider av spenningen i live til slutt"],
      explanation: "Akse 2 er aktiv empiribruk, altså «funn, ikke navn». Svaret om begrepsavgrensning beskriver Akse 1, og svaret om begge sider beskriver Akse 3 — begge er ekte akser, bare ikke denne. Svaret om antall referanser gjør en kvalitetsvurdering om til en telleøvelse.",
    },
    {
      question: "Hva måler Akse 3 i sensorenes vurdering av et langsvar?",
      options: ["Om begge sider av temaets spenning bæres gjennom hele drøftingen", "Om besvarelsen unngår å konkludere og heller lar spørsmålet stå åpent", "Om studiene som brukes er hentet fra norsk og ikke internasjonal forskning", "Om begrepene brukes slik den pensumforfatteren som eier dem bruker dem"],
      explanation: "Akse 3 er nyanse og dobbelthet: begge sider skal fortsatt stå i nest siste avsnitt. Svaret om å unngå å konkludere er en vanlig misforståelse — landingen kan være skarp, den skal bare ikke oppnås ved å glemme den ene siden. Svaret om pensumforfatterens bruk beskriver Akse 1.",
    },
    {
      question: "Hva måler Akse 4 i sensorenes vurdering av et langsvar?",
      options: ["Om svaret sier noe eget om forskningens grenser eller metodens svakhet", "Om svaret dekker alle temaene i pensumbolken oppgaven er hentet fra", "Om språket er akademisk og fritt for muntlige og upresise formuleringer", "Om konkrete funn fra navngitte studier brukes aktivt i argumentasjonen"],
      explanation: "Akse 4 er det selvstendige og kritiske sluttgrepet, og den er markøren for A. Svaret om konkrete funn beskriver Akse 2. Svaret om å dekke hele pensumbolken belønner bredde der aksen belønner et grep, og svaret om språk måler noe sensor ikke vurderer som egen akse.",
    },
    {
      question: "Hva måler Akse 1 i sensorenes vurdering av et langsvar?",
      options: ["Om redegjørelsen treffer forfatterens egen distinksjon mot nabobegrepet", "Om besvarelsen inneholder tilstrekkelig mange fagtermer fra pensum", "Om svaret bruker et konkret forskningsfunn til å bygge argumentet sitt", "Om innledningen plasserer temaet i en større samfunnsmessig sammenheng"],
      explanation: "Akse 1 er presis begrepsbruk, og kjernen er distinksjonen mot nabobegrepet. Svaret om mange fagtermer forveksler terminologi med presisjon — en tekst kan være full av fagord og likevel flat. Svaret om forskningsfunn beskriver Akse 2.",
    },
    {
      question: "Når er et forskningsfunn konkret nok til å telle i drøftingen?",
      options: ["Når hvem, hvilket design, hvilket resultat og hvilken betydning står der", "Når forskeren er navngitt og studien er publisert i et fagtidsskrift", "Når funnet er hentet fra en norsk studie og ikke fra internasjonal forskning", "Når det er gjengitt med tall og prosentandeler fra den opprinnelige studien"],
      explanation: "Fire ting må stå der: hvem som gjorde studien, hvilket design den brukte, hva den fant, og hva funnet betyr for argumentet. Svaret om navn og publisering stopper ved navnedropping, som er feil #4. Svaret om tall er direkte risikabelt: et tall du er usikker på, svekker svaret mer enn det styrker.",
    },
    {
      question: "Hva er forskjellen på «drøft om diskriminering forekommer» og «drøft hvor godt diskriminering forklarer»?",
      options: ["Den første ber om et begrunnet ja eller nei, den andre om en vekt", "Den første er en drøftingsoppgave, den andre er en redegjørelsesoppgave", "Den første krever to studier i argumentet, den andre krever minst fire", "Den første gjelder norske forhold, den andre åpner for internasjonale funn"],
      explanation: "«Om» ber om et standpunkt med begrunnelse; «hvor godt» ber om et anslag på hvor mye noe forklarer. Å svare at fenomenet finnes på et «hvor godt»-spørsmål er å svare på nabospørsmålet, altså feil #6. Svaret om at den ene er en redegjørelse overser at begge inneholder ordet drøft.",
    },
    {
      question: "Hva er nøkkelvariabelen i en langsvarsoppgave?",
      options: ["Utfallet oppgaven ber deg forklare eller vurdere, ikke temaet", "Det pensumbegrepet redegjørelsesdelen skal ta utgangspunkt i", "Den studien sensorveiledningen anser som viktigst for oppgaven", "Det paradokset drøftingsdelen er ment å bære gjennom teksten"],
      explanation: "Nøkkelvariabelen er selve utfallet: «muligheter», «utfallsforskjeller», «bærekraft». Temaet kan være rasisme, mens nøkkelvariabelen er minoriteters muligheter — og det er den siste sensor måler. Svaret om paradokset beskriver Akse 3, som er en annen del av oppgaven.",
    },
    {
      question: "Hva skiller en A-besvarelse fra en B-besvarelse i langsvaret?",
      options: ["Et selvstendig og kritisk grep om drøftingen, i tillegg til alt annet", "Større omfang, slik at flere sider av temaet rekker å bli behandlet", "Flere navngitte pensumforfattere i både redegjørelsen og drøftingen", "En tydeligere og mer bastant konklusjon på slutten av besvarelsen"],
      explanation: "B krever presise begreper, aktiv empiri og båret dobbelthet. A krever alt dette pluss et selvstendig, kritisk grep. Svaret om større omfang er den vanligste misforståelsen — en A kan godt være kortere enn en C. Svaret om en mer bastant konklusjon forveksler skarphet med selvstendighet.",
    },
    {
      question: "Hva er feil #1 i bokas feilregister?",
      options: ["Manglende eller marginal drøftingsdel, som i seg selv sperrer for C", "Å svare på nabospørsmålet i stedet for det som faktisk ble spurt om", "Å nevne forskere uten å bruke resultatene deres i argumentet", "Å importere klassikerstoff som oppgaven ikke etterspør i det hele tatt"],
      explanation: "Feil #1 er at det ene av de to leddene mangler eller er redusert til noen linjer, og den sperrer for C uansett hvor god resten er. Å svare på nabospørsmålet er feil #6, navn uten funn er feil #4, og klassikerimport er feil #10 — alle ekte koder i registeret, bare ikke denne.",
    },
    {
      question: "Hva er feil #4 i bokas feilregister?",
      options: ["Å nevne forskeren uten å bruke resultatet i argumentet", "Å bruke et funn uten å oppgi hvem som står bak studien", "Å drøfte uten å ha beredt grunnen med en redegjørelse først", "Å velge side i en spenning i stedet for å holde begge i live"],
      explanation: "Feil #4 er navn uten funn, og den er den vanligste grunnen til at et ellers ryddig svar stopper på C. Å drøfte uten redegjørelse er en variant av feil #1, og å velge side er feil #5. Svaret om funn uten navn er den motsatte feilen, og den er langt sjeldnere.",
    },
    {
      question: "Hva er feil #6 i bokas feilregister?",
      options: ["Å svare på nabospørsmålet i stedet for på nøkkelvariabelen", "Å bruke et nabobegrep i stedet for det begrepet oppgaven gjelder", "Å behandle bare én ulikhetsdimensjon der oppgaven åpner for flere", "Å bruke for lang tid på innledningen i et format med fire timer"],
      explanation: "Feil #6 er å levere en mobilitetsanalyse når oppgaven spør om muligheter, eller å svare «det forekommer» på et «hvor godt forklarer»-spørsmål. Å behandle bare én dimensjon er feil #7, og tidsbruken i innledningen er feil #9. Nabobegrepsvarianten hører til feil #3, begrepsforflatning.",
    },
    {
      question: "Hva kjennetegner begrepsredegjørelsen, sjangerkoden B, i denne boka?",
      options: ["Den er bokas øvingssjanger og ikke en eksamensdel i SOS1004 i dag", "Den er den korte oppgavetypen som innleder Del II på eksamen", "Den er en variant av flervalgsspørsmålene, bare med skriftlig svar", "Den er den formen sensorveiledningene bruker når de beskriver nivåene"],
      explanation: "Begrepsredegjørelsen er arvet fra forgjengeremnene SOS1000 og SOS1001, der «redegjør kort for tre av fire begreper» var en fast oppgavetype før 2021. I dag er den en øvingssjanger, ikke en eksamensdel. Svaret om at den innleder Del II beskriver en form emnet ikke har.",
    },
    {
      question: "Hvordan bør de omtrent to og en halv timene på langsvaret disponeres?",
      options: ["Rundt 10 minutter disponering, rundt 2 timer skriving, rundt 10 minutter kontroll", "Rundt 30 minutter disponering, rundt 90 minutter skriving, resten til kontroll", "Rundt 5 minutter disponering og resten av tiden til sammenhengende skriving", "Rundt 45 minutter til hver av de to delene, og resten til gjennomlesing"],
      explanation: "Ti minutter på disponering er den best investerte tiden i hele eksamen, fordi den forhindrer at redegjørelsen spiser opp plassen til drøftingen. Svaret om fem minutter og rett i gang beskriver den vanligste faktiske praksisen, og den fører typisk til feil #1. Svaret om 30 minutter disponering tar for mye fra skrivetiden.",
    },
  ],
  'sos1004-0-3': [
    {
      question: "Hvor mange poeng trekkes for et galt svar på flervalgsdelen?",
      options: ["0,5 poeng trekkes fra summen for hvert gale svar som er avgitt", "0,25 poeng trekkes fra summen for hvert gale svar", "1 poeng trekkes fra den samlede summen for hvert gale svar", "Ingenting trekkes, men riktige svar gir bare et halvt poeng"],
      explanation: "Modellen er +1 for riktig, −0,5 for galt og 0 for ubesvart. Svaret om 1 poeng gjør straffen like stor som belønningen, og da ville selv kvalifisert gjetting vært ulønnsomt. Svaret om at ingenting trekkes beskriver en flervalgsprøve uten minuspoeng, der det aldri er feil å krysse av.",
    },
    {
      question: "Hva er forventet uttelling ved blind gjetting på et spørsmål med fire svaralternativer?",
      options: ["−0,125 poeng, som er dårligere enn å la spørsmålet stå ubesvart", "0 poeng, altså nøyaktig det samme som å la spørsmålet stå", "+0,25 poeng, fordi sjansen for å treffe alltid er til stede", "−0,5 poeng, fordi et gjett i praksis nesten alltid slår feil"],
      explanation: "Regnestykket er en fjerdedel ganger pluss én pluss tre fjerdedeler ganger minus et halvt, altså −0,125. Svaret om 0 gjelder situasjonen der ett alternativ er utelukket, og svaret om +0,25 gjelder der to er utelukket. Svaret om −0,5 forveksler forventet uttelling med straffen for ett gale svar.",
    },
    {
      question: "Hva er forventet uttelling når du har utelukket to av fire svaralternativer?",
      options: ["+0,25 poeng, så du bør svare selv om du er i tvil", "0 poeng, så det er likegyldig om du svarer eller ikke", "−0,125 poeng, så du bør fortsatt la spørsmålet stå", "+0,5 poeng, som er halvparten av et fullt riktig svar"],
      explanation: "Med to igjen er sjansen femti femti: et halvt ganger pluss én pluss et halvt ganger minus et halvt gir +0,25. Svaret om 0 gjelder når bare ett alternativ er utelukket, og svaret om −0,125 gjelder blind gjetting. Svaret om +0,5 overser at det gale utfallet også trekker.",
    },
    {
      question: "Hva er forventet uttelling når du har utelukket nøyaktig ett av fire svaralternativer?",
      options: ["0 poeng, så det er likegyldig om du svarer eller lar stå", "+0,25 poeng, så du bør svare på spørsmålet uansett tvil", "−0,125 poeng, så du bør fortsatt la spørsmålet stå ubesvart", "+0,5 poeng, fordi ett utelukket alternativ halverer risikoen"],
      explanation: "Med tre igjen blir regnestykket en tredel ganger pluss én pluss to tredeler ganger minus et halvt, som går nøyaktig i null. Da kan magefølelsen få avgjøre, og under tidspress kan du trygt la det stå. Svaret om +0,25 gjelder når to alternativer er utelukket.",
    },
    {
      question: "Du klarer ikke å utelukke et eneste alternativ. Hva sier beslutningsregelen?",
      options: ["La spørsmålet stå, siden 0 poeng er bedre enn forventet uttelling", "Svar likevel, siden en fjerdedels sjanse er bedre enn ingen sjanse", "Svar hvis du har god tid igjen, og la stå hvis du er i tidsnød", "Velg det lengste alternativet, som statistisk sett oftest er riktig"],
      explanation: "Uten eliminasjon er forventet uttelling −0,125, og ubesvart gir 0. Svaret om en fjerdedels sjanse ser bort fra at de tre andre fjerdedelene koster. Svaret om det lengste alternativet er en gjettestrategi som ikke virker her — quizene i denne boka er nettopp bygget for at den ikke skal virke.",
    },
    {
      question: "Du har utelukket to alternativer, men er i reell tvil mellom de to siste. Hva bør du gjøre?",
      options: ["Svare, fordi forventet uttelling nå er klart positiv for deg", "La stå, fordi du fortsatt ikke vet hva som er riktig svar", "Svare bare hvis du kan begrunne valget mellom de to siste", "La stå hvis du allerede har svart på mange av spørsmålene"],
      explanation: "Med to igjen er forventet uttelling +0,25, og det er her poengene ligger. Kravet om begrunnelse gjelder elimineringen, ikke det endelige valget mellom de gjenværende. Svaret om hvor mange du allerede har svart på er irrelevant, siden hvert spørsmål regnes for seg.",
    },
    {
      question: "En kandidat svarer på alle 20 spørsmål og har 12 riktige. Hva blir poengsummen?",
      options: ["8 poeng, fordi de 8 gale trekker 4 poeng fra de 12 riktige", "12 poeng, fordi bare de riktige svarene telles med i summen", "4 poeng, fordi hvert gale svar trekker et helt poeng fra summen", "10 poeng, fordi minuspoengene rundes av til nærmeste hele poeng"],
      explanation: "12 riktige gir 12 poeng, og 8 gale trekker 8 ganger 0,5, altså 4 poeng. Summen blir 8. Svaret om 12 poeng overser minuspoengene helt, og svaret om 4 poeng bruker feil trekk per gale svar. Legg merke til at forskjellen mellom 8 og 12 er forskjellen mellom D og C.",
    },
    {
      question: "Hva er den viktigste konsekvensen av at terskeltabellen er oppgitt i poeng og ikke i antall riktige?",
      options: ["To kandidater med like mange riktige svar kan ende på ulik karakter", "Antall riktige svar er uten betydning så lenge summen er høy nok", "Kandidater som svarer på alle spørsmålene får en systematisk fordel", "Karakteren kan ikke beregnes før alle besvarelsene er rettet ferdig"],
      explanation: "Forskjellen ligger i hva de gjorde med spørsmålene de ikke kunne: den som gjettet blindt, mister poeng den som lot stå beholder. Svaret om at kandidater som svarer på alt får en fordel er den motsatte påstanden — med minuspoeng er det typisk en ulempe.",
    },
    {
      question: "Hvilken forutsetning bygger regnestykket om forventet uttelling på?",
      options: ["At hvert spørsmål har fire svaralternativer, noe som ikke er dokumentert", "At alle spørsmålene har omtrent samme vanskelighetsgrad gjennom settet", "At kandidaten svarer på spørsmålene i den rekkefølgen de står i settet", "At antallet riktige svar fordeler seg jevnt utover de fire alternativene"],
      explanation: "Tallene −0,125, 0 og +0,25 forutsetter fire alternativer. Hvor mange alternativer eksamen faktisk bruker, står ikke i noe materiale — veiledningene sier bare at ett av flere er riktig. Er det flere, blir blind gjetting enda mer ulønnsomt, men beslutningsregelen holder uansett.",
    },
    {
      question: "Hva er en nabobegrep-distraktor?",
      options: ["Et alternativ som beskriver et annet og nærliggende begrep helt korrekt", "Et alternativ som er sant om hele feltet og derfor for generelt", "Et alternativ der årsak og virkning er byttet om i forhold til funnet", "Et alternativ som beskriver noe man måler med en helt annen metode"],
      explanation: "Nabobegrep-distraktoren er farlig nettopp fordi den ikke er gal — den er sann, bare om noe annet, typisk det andre begrepet i samme par. De tre andre svarene beskriver de øvrige distraktortypene: det for generelle, den snudde mekanismen og feil metode.",
    },
    {
      question: "Hva kjennetegner distraktortypen «den snudde mekanismen»?",
      options: ["Retningen eller årsaksforholdet går motsatt vei av det funnet viser", "Beskrivelsen passer på et annet begrep i den samme pensumbolken", "Utsagnet er sant om hele feltet og fanger ikke noe særegent", "Utsagnet forutsetter data som en annen metode måtte samlet inn"],
      explanation: "Et typisk eksempel er «katastrofen jevnet ut forskjeller» der funnet er at den forsterket dem. Beskrivelsen av et annet begrep er nabobegrep-distraktoren, og utsagnet som er sant om hele feltet er det for generelle alternativet.",
    },
    {
      question: "Hva kjennetegner distraktortypen «det for generelle alternativet»?",
      options: ["Det er sant om hele feltet og fanger ikke det særegne ved begrepet", "Det gjengir et nabobegrep i samme pensumbolk på en korrekt måte", "Det snur retningen i forhold til det studien faktisk har funnet", "Det beskriver et utfall som må måles med en annen forskningsmetode"],
      explanation: "«Diskriminering er når noen behandles dårligere» er sant og innholdsløst — det ville vært riktig svar på nesten hvilket som helst spørsmål om temaet, og det er nettopp gjenkjenningstegnet. De tre andre svarene beskriver de øvrige distraktortypene.",
    },
    {
      question: "Et alternativ beskriver hvordan søkere opplever en ansettelsesprosess, på et spørsmål om hva et felteksperiment kan vise. Hvilken distraktortype er dette?",
      options: ["Feil metode — opplevelser måles med en helt annen datainnsamling", "Nabobegrepet — opplevelse er nabobegrepet til diskriminering her", "Den snudde mekanismen — retningen i utsagnet går motsatt vei", "Det for generelle alternativet — utsagnet er sant om hele feltet"],
      explanation: "Opplevd forskjellsbehandling måles med spørreundersøkelse eller intervju, mens et felteksperiment måler arbeidsgiveres faktiske handlinger. Gjenkjenningsspørsmålet er «hvilke data måtte man samlet inn for at dette skulle være mulig å måle?». Alternativet er sant om noe, bare målt på en annen måte.",
    },
    {
      question: "Hva går to-runders-metoden på flervalgsdelen ut på?",
      options: ["Første runde svarer og merker, andre runde tar avståelsesbeslutningene", "Første runde leser alle spørsmålene, andre runde svarer på alle sammen", "Første runde tar de lette spørsmålene, andre runde tar de vanskelige", "Første runde svarer raskt, andre runde kontrollerer alle svarene på nytt"],
      explanation: "Poenget er å skille to jobber som går tregere når de blandes: å finne svar og å veie risiko. En tilleggsgevinst er at senere spørsmål ofte minner deg om begreper du trengte tidligere. Svaret om å ta lette først og vanskelige sist beskriver en annen og vanlig, men mindre presis, strategi.",
    },
    {
      question: "Hvor mye av de 240 minuttene bør flervalgsdelen ta?",
      options: ["Rundt 30 minutter, altså omtrent halvannet minutt per spørsmål", "Rundt 80 minutter, siden delen teller en tredel av karakteren", "Rundt 60 minutter, altså omtrent tre minutter per spørsmål i snitt", "Rundt 15 minutter, siden svarene enten sitter med en gang eller ikke"],
      explanation: "Anbefalingen er rundt 30 minutter, fordelt på to runder. Svaret om 80 minutter fordeler tiden etter vektingen, og det er nettopp feilen: flervalg er gjenkjenning, mens langsvaret er produksjon. Svaret om 15 minutter gir ikke rom for den andre runden der beslutningene faktisk tas.",
    },
    {
      question: "Hvorfor kan overforsiktighet på flervalgsdelen koste mer enn blind gjetting?",
      options: ["Fordi hvert spørsmål der to er utelukket er verdt +0,25 i forventning", "Fordi ubesvarte spørsmål trekker et halvt poeng på samme måte som gale", "Fordi sensor merker seg hvor mange spørsmål kandidaten har latt stå", "Fordi terskelverdiene beregnes ut fra hvor mange spørsmål som er besvart"],
      explanation: "Å la stå der du faktisk hadde eliminert to, er å gi bort en kvart poeng hver gang, og en godt forberedt kandidat er ofte i den situasjonen mange ganger. Svaret om at ubesvarte trekker, er direkte galt — ubesvart gir 0. Svaret om at sensor merker seg avståelser overser at delen rettes automatisk.",
    },
    {
      question: "Hva er den vanligste kalibreringsfeilen på en flervalgsdel i et begrepstungt fag?",
      options: ["Å forveksle gjenkjenning av fagord med faktisk kunnskap om begrepet", "Å bruke for lite tid på de spørsmålene man er helt sikker på", "Å endre svar i andre runde etter først å ha valgt riktig alternativ", "Å svare i den rekkefølgen spørsmålene står i stedet for å hoppe rundt"],
      explanation: "Fire alternativer som alle inneholder fagord du har lest, skaper en sterk følelse av å kunne noe — men følelsen er ikke informasjon. Testen er om du kan si hvorfor et alternativ er galt. Svaret om å endre svar beskriver en reell, men langt mindre kostbar vane.",
    },
    {
      question: "Hvorfor er flervalgsoppgavene i denne boka skrevet av oss?",
      options: ["Fordi eksamens egne spørsmål aldri publiseres og gjenbrukes i Inspera", "Fordi eksamens egne spørsmål er for lette til å fungere som trening", "Fordi eldre spørsmål bygger på et pensum som er skiftet ut siden 2021", "Fordi boka trener et bredere pensum enn det eksamen faktisk dekker"],
      explanation: "Spørsmålene holdes tilbake fordi de gjenbrukes fra år til år, så det finnes ikke noe publisert materiale å bygge på. Boka kalibrerer derfor formen og poengmodellen eksakt, og lager spørsmålene ut fra pensumbredden og distinksjonene. Svaret om at boka trener bredere pensum enn eksamen stemmer ikke — hele pensum er nedslagsfelt på Del I.",
    },
  ],
  'sos1004-1-1': [
    {
      question: "Hva er den sosiologiske fantasien hos Mills?",
      options: ["Evnen til å se sammenhengen mellom et livsløp og samfunnets historie og struktur", "Evnen til å forestille seg samfunn som er innrettet helt annerledes enn vårt eget", "Evnen til å forutse hvordan sosiale mønstre vil endre seg i tiårene som kommer", "Evnen til å beskrive en gruppes levemåte uten å bygge på egne forutsetninger"],
      explanation: "Riktig svar er at begrepet betegner koblingen mellom biografi og historie, og at bevegelsen går begge veier. Å forestille seg alternative samfunn er utopisk tenkning, ikke en analytisk operasjon. Å forutsi utviklingen er prognosearbeid, og å beskrive en fremmed gruppe uten egne forutsetninger er et etnografisk ideal fra et annet fag.",
    },
    {
      question: "Hva er Mills' prøve på om noe er et offentlig anliggende?",
      options: ["Om utfallet rammer en systematisk andel av en gruppe, ikke bare én i én situasjon", "Om saken er blitt omtalt i offentlig debatt og dermed er blitt allment kjent i landet", "Om myndighetene rår over et virkemiddel som faktisk kan påvirke utfallet", "Om den som rammes, selv opplever problemet som noe mer enn sitt eget"],
      explanation: "Riktig svar er skalaprøven: gjelder det én person i en gitt situasjon, eller en systematisk andel av en hel gruppe. Offentlig oppmerksomhet og politiske virkemidler er noe annet enn kategorien selv. At opplevelsen avgjør, er den vanligste misforståelsen — et personlig problem oppleves like sterkt uansett skala.",
    },
    {
      question: "Hva betyr det at biografi og historie er to koordinater, ikke to årsaker?",
      options: ["At de er to nivåer i samme beskrivelse, ikke to forklaringer som konkurrerer", "At de virker på hverandre i tur og orden, først den ene og deretter den andre", "At den ene forklarer det som er individuelt, mens den andre forklarer resten", "At begge må måles før en sosiologisk forklaring kan regnes som fullstendig"],
      explanation: "Riktig svar er at de utgjør to nivåer i én og samme beskrivelse. Spørsmålet «var det ham eller var det samfunnet» er derfor stilt feil. Å dele forklaringsrommet mellom dem, eller å behandle dem som virkninger i tur og orden, gjør paret om til to konkurrerende årsaker — som er nettopp det Mills avviser.",
    },
    {
      question: "Hvilket utsagn beskriver en aktør i sosiologisk forstand?",
      options: ["Arbeidsgiveren vurderte søkerne og valgte å innkalle den hun kjente fra før", "Arbeidsmarkedet belønner formell kompetanse høyere enn det gjorde tidligere", "Ansettelsesrutinen krever at minst tre søkere innkalles til hver stilling", "Bransjen har over tid utviklet en praksis for rekruttering gjennom nettverk"],
      explanation: "Riktig svar beskriver en identifiserbar handlende som vurderte og valgte, og som kunne ha valgt annerledes. De tre andre beskriver mønstre, regler eller praksiser som ligger der før den enkelte handlingen — altså strukturer. Merk at et arbeidsmarked ikke er en aktør, selv om setningen gir det et verb.",
    },
    {
      question: "Hva er den doble siden ved strukturbegrepet?",
      options: ["At strukturer både begrenser hva som er mulig og gjør handling mulig i det hele tatt", "At strukturer virker på forskjellig måte på ulike personer alt etter posisjonen de har", "At strukturer både kan være formelle regler og uskrevne forventninger", "At strukturer endrer seg over tid samtidig som de oppleves som uforanderlige"],
      explanation: "Riktig svar er at strukturen begrenser og muliggjør på én gang. Språket er standardeksemplet: det setter grenser for hva du kan si og er samtidig det eneste som gjør at du kan si noe. De tre andre utsagnene er riktige om strukturer, men ingen av dem er den doble siden begrepet måles på.",
    },
    {
      question: "Hva er handlingsrom?",
      options: ["De handlingsalternativene som faktisk står åpne for en aktør i en gitt posisjon", "Den formelle retten hver enkelt har til å velge fritt mellom alternativene som finnes", "Det spillerommet en organisasjon har til å tolke regler den er bundet av", "Den friheten fra ytre begrensninger som kjennetegner moderne samfunn"],
      explanation: "Riktig svar er at handlingsrom er et beskrivende begrep om hva som er mulig for den som står i posisjonen. Formell rett hører til begrepet valgfrihet, som er normativt og handler om hva folk bør ha lov til. Å bytte om de to er å gli fra sosiologi over i politisk standpunkt.",
    },
    {
      question: "Hva kjennetegner en strukturforklaring, til forskjell fra en aktørforklaring?",
      options: ["Den viser til posisjoner og fordelinger uavhengig av hva den enkelte ville", "Den viser til hva de handlende visste, vurderte og ønsket å oppnå", "Den viser til hvilke formelle regler som gjaldt på det aktuelle tidspunktet", "Den viser til langsiktige utviklingstrekk framfor til enkelthendelser"],
      explanation: "Riktig svar er at strukturforklaringen forklarer hvorfor utfallet blir systematisk, uavhengig av hvem som fyller posisjonen. Å vise til hva de handlende ville, er nettopp aktørforklaringen. De to er ikke rivaler: den ene sier hvordan mekanismen virker i det enkelte tilfellet, den andre hvorfor mønsteret gjentar seg.",
    },
    {
      question: "Hva er mesonivået i sosiologisk analyse?",
      options: ["Analysenivået for organisasjoner, grupper og lokalsamfunn", "Analysenivået for samhandling mellom enkeltpersoner ansikt til ansikt", "Analysenivået for samfunnets store institusjoner og fordelinger", "Analysenivået for de formelle reglene som gjelder i et samfunn"],
      explanation: "Riktig svar er organisasjoner, grupper og lokalsamfunn — en skole, en bedrift, et nabolag. Samhandling ansikt til ansikt er mikro, og institusjoner og fordelinger er makro. Mesonivået er det som oftest utelates, og det er ofte der forklaringen ligger, fordi det er organisasjonene som oversetter samfunnsforhold til rutiner.",
    },
    {
      question: "Hva kreves for at noe skal telle som en nivåkobling?",
      options: ["At retningen virkningen går og mekanismen den går gjennom, skrives ut", "At alle tre analysenivåene får omtrent like mye plass i framstillingen", "At funnet blir liggende på det nivået der det opprinnelig ble målt", "At det høyeste og laveste nivået behandles før mellomnivået tas opp"],
      explanation: "Riktig svar er at koblingen må ha både retning og mekanisme. Å ramse opp mikro, meso og makro gir ingenting i seg selv. Å la funnet bli liggende på sitt eget nivå er en god regel, men den beskriver vern mot nivåforveksling og ikke en kobling.",
    },
    {
      question: "«Jeg kjenner tre som fikk jobb med en gang, altså finnes det ikke diskriminering.» Hva er dette?",
      options: ["Nivåforveksling fra mikro til makro", "Nivåforveksling fra makro til mikro", "En spuriøs sammenheng mellom nettverk og ansettelse", "En gyldig innvending så lenge eksemplene er korrekte"],
      explanation: "Riktig svar er at slutningen går fra noen enkelttilfeller til en påstand om et samfunnsmønster. Den motsatte retningen ville vært å slutte fra en fordeling til en bestemt person. Et moteksempel opphever ikke et mønster, fordi et mønster kan være sterkt uten å gjelde for hvert enkelt tilfelle.",
    },
    {
      question: "Hva er det motsatte av at noe er sosialt konstruert?",
      options: ["At det er naturgitt", "At det er virkelig", "At det er objektivt målbart", "At det er allment anerkjent"],
      explanation: "Riktig svar er naturgitt, altså noe som ville vært det samme uansett hvordan mennesker organiserte seg. Å bruke konstruert som synonym for innbilt er den enkeltfeilen som oftest felles i flervalgsdelen. Konstruerte fenomener kan være både virkelige, målbare og anerkjente.",
    },
    {
      question: "Hva vil det si at en konstruert kategori er virkelig i sine følger?",
      options: ["At den får reelle konsekvenser når den legges til grunn for handling i institusjoner", "At den etter hvert blir så innarbeidet at folk flest opplever den som helt naturgitt", "At den lar seg måle empirisk selv om den ikke har grunnlag i naturen", "At den er vedtatt av myndighetene og derfor har rettslige virkninger"],
      explanation: "Riktig svar er at virkningen går gjennom etablert praksis, uansett hvor tilfeldig kategoriens opphav er. Dette er presiseringen som gjør at sosiologien kan behandle kategorier som konstruerte og likevel måle virkningene deres. At noe oppleves som naturgitt, er en mulig følge, ikke selve poenget.",
    },
    {
      question: "Hva skiller en institusjon fra en organisasjon?",
      options: ["Institusjonen er mønsteret for hvordan en oppgave løses; organisasjonen realiserer det", "Institusjonen er offentlig eid, mens organisasjonen kan være privat eller offentlig", "Institusjonen varer over lang tid, mens organisasjonen opprettes for et avgrenset formål", "Institusjonen er formelt regulert, mens organisasjonen bygger på uskrevne forventninger"],
      explanation: "Riktig svar er at skolen som institusjon er mønsteret av forventninger, roller og regler, mens en bestemt skole er organisasjonen som realiserer mønsteret. Alternativet om eierskap bygger på dagligtalens bruk av ordet institusjon om offentlige virksomheter, som er noe annet enn den faglige betydningen.",
    },
    {
      question: "Hva er en norm i sosiologisk forstand?",
      options: ["En delt forventning om atferd i en situasjon, som det får følger å bryte", "En nedskrevet regel som håndheves av en instans med formell myndighet", "En verdi som et flertall i befolkningen slutter opp om på et tidspunkt", "En vane som gjentas så ofte at den ikke lenger krever bevisst valg"],
      explanation: "Riktig svar er den delte forventningen med sanksjon. Sanksjonen trenger ikke være formell: de fleste normer håndheves med blikk, taushet og små justeringer i hvordan folk møter deg. Nedskrevne regler med formell håndheving er lover, og de to overlapper uten å falle sammen.",
    },
    {
      question: "Hva er poenget med rollebegrepet?",
      options: ["At det skiller forventningene til posisjonen fra egenskapene til personen i den", "At det viser hvordan folk spiller ulike roller avhengig av hvem de er sammen med", "At det forklarer hvorfor to personer i samme stilling gjør jobben ulikt", "At det knytter den enkeltes atferd til hennes plassering i en organisasjon"],
      explanation: "Riktig svar er skillet mellom person og posisjon: forventningene ville møtt hvem som helst som fylte stillingen. Nettopp derfor forklarer rollebegrepet at atferd er forutsigbar på tvers av personer — det forklarer ikke variasjonen mellom to personer i samme rolle, som hører til handlingsrommet.",
    },
    {
      question: "Hva skiller primær- fra sekundærsosialisering?",
      options: ["Den første skjer i nære relasjoner i barndommen; den andre senere, i skole og arbeidsliv", "Den første gjelder normer og verdier; den andre gjelder ferdigheter og kunnskap", "Den første er bevisst tilsiktet fra omgivelsenes side, mens den andre skjer utilsiktet", "Den første gjelder alle i et samfunn; den andre bare dem som tar utdanning"],
      explanation: "Riktig svar er at skillet går på når og hvor prosessen skjer. Primærsosialiseringen legger det som oppleves som selvsagt; sekundærsosialiseringen oppleves oftere som noe man lærer seg. Begge omfatter både normer og ferdigheter, og begge gjelder alle — skillet er ikke innholdet.",
    },
    {
      question: "Hva skiller sosiologisk teori fra en velbegrunnet mening om samfunnet?",
      options: ["At det må kunne sies hva som ville tale mot den, og at den bygger på systematiske data", "At den er formulert av en forsker med formell kompetanse på det aktuelle feltet", "At den er publisert i et vitenskapelig tidsskrift og dermed har vært til vurdering", "At den beskriver samfunnet slik det er, uten innslag av forskerens egne verdier"],
      explanation: "Riktig svar er prøvbarheten: en påstand som er forenlig med alt som kan skje, forklarer ingenting. Formell kompetanse og publisering er kjennetegn ved forskningssystemet, ikke ved teorien. Kravet om verdinøytralitet gjelder framgangsmåten, ikke at forskeren skal være uten standpunkter.",
    },
    {
      question: "Hva er en sosial mekanisme?",
      options: ["Den konkrete prosessen som forbinder en årsak med en virkning", "Den statistiske sammenhengen mellom to variabler i et datamateriale", "Den regelen som gjør at bestemte handlinger blir sanksjonert i et samfunn", "Den delen av en teori som beskriver hvordan samfunnet henger sammen"],
      explanation: "Riktig svar er prosessen som svarer på hvordan det går til, når du allerede vet at to ting henger sammen. Den statistiske sammenhengen er korrelasjonen, som er nettopp det mekanismen skal forklare. Oppgaver som spør hvordan noe påvirker noe annet, ber om mekanismen.",
    },
    {
      question: "Hva er forskjellen på en teori og et teoretisk perspektiv?",
      options: ["Teorien kan prøves mot data; perspektivet er rammen forklaringen formuleres innenfor", "Teorien gjelder ett felt; perspektivet gjelder samfunnet som helhet", "Teorien er formulert av én forsker; perspektivet deles av en hel forskningstradisjon", "Teorien beskriver hva som skjer; perspektivet vurderer om det er ønskelig"],
      explanation: "Riktig svar er at perspektivet ikke kan prøves på samme måte som en teori, men vurderes etter hvor fruktbart det er. At perspektivene er flere, betyr ikke at alt er like godt: innenfor et perspektiv gjelder de vanlige kravene til belegg. Derfor er «alt er jo perspektiver» aldri et gyldig sluttpunkt.",
    },
    {
      question: "Hva innebærer kravet om etterprøvbarhet i sosiologien?",
      options: ["At framgangsmåten er beskrevet slik at andre kan gjenta undersøkelsen", "At funnene er bekreftet av minst to uavhengige forskergrupper", "At dataene er gjort offentlig tilgjengelige for alle som ønsker innsyn", "At forskeren ikke har hatt noen forhåndsoppfatning om hva hun ville finne"],
      explanation: "Riktig svar er at framgangsmåten må være beskrevet godt nok til at undersøkelsen kan gjentas. Gjentatt bekreftelse og åpne data er ønskelige, men de er følger av kravet og ikke kravet selv. Kravet gjelder heller ikke forskerens forhåndsoppfatninger, som alltid er der og som styrer temavalget.",
    },
    {
      question: "Hvorfor er et moteksempel ingen innvending mot et statistisk mønster?",
      options: ["Fordi et mønster kan være sterkt uten å gjelde for hvert enkelt tilfelle i det", "Fordi enkelttilfeller sjelden er representative for gruppen de er hentet fra", "Fordi den som kommer med moteksemplet, som regel har et motiv for å gjøre det", "Fordi statistiske mønstre er sikrere kunnskap enn observasjoner av enkelttilfeller"],
      explanation: "Riktig svar er at mønsteret og enkelttilfellet er utsagn på to nivåer. At en gruppe har systematisk lavere innkallingsrate, er fullt forenlig med at en person i gruppen fikk jobben på første forsøk. Moteksemplet er derfor en innvending mot en påstand ingen har fremsatt.",
    },
    {
      question: "Hva er fagets grunnspørsmål slik emnet selv formulerer det?",
      options: ["Hvordan sosial orden opprettholdes samtidig som konflikt og endring stadig skjer", "Hvordan samfunnet kan innrettes slik at ulikheten mellom grupper blir minst mulig", "Hvordan individet formes av samfunnet det vokser opp i, fra fødsel til voksen alder", "Hvordan moderne samfunn skiller seg fra de samfunnene som gikk forut for dem"],
      explanation: "Riktig svar er dobbeltheten mellom orden og endring, og formen på spørsmålet er ikke tilfeldig: den er den samme som i alle bokas drøftingsakser. Å spørre hvordan samfunnet bør innrettes, er et normativt spørsmål og ikke fagets analytiske grunnspørsmål.",
    },
    {
      question: "Hva viser Hermansen og Midtbøens registerbaserte funn om etterkommere?",
      options: ["Et betydelig oppadgående sprang i utdanning og yrkesposisjon fra foreldregenerasjonen", "At ellers like søknader innkalles sjeldnere når navnet signaliserer minoritetsbakgrunn", "At etterkommeres holdninger til utdanning skiller seg fra majoritetsbefolkningens", "At etterkommere i mindre grad enn foreldrene bosetter seg i de store byene"],
      explanation: "Riktig svar er den oppadgående mobiliteten målt i registerdata. Innkallingsraten er korrespondansetestens funn og måler noe annet — de to studiene utgjør sammen de to sidene av integreringsparadokset. Registerdata sier hva som skjedde, ikke hvorfor det skjedde.",
    },
    {
      question: "Hvorfor er begrepsparet aktør og struktur grunnmotoren under bokas senere paradokser?",
      options: ["Fordi de fleste paradoksene har form av to belagte sider som må holdes i live samtidig", "Fordi alle sosiologiske forklaringer til slutt kan føres tilbake til strukturelle forhold", "Fordi paradokser i faget alltid oppstår når data på ulike nivåer sammenlignes direkte", "Fordi begrepsparet er det eneste som brukes i alle emnets temakapitler uten unntak"],
      explanation: "Riktig svar er formen på resonnementet: to ting som begge er godt belagt og trekker i hver sin retning, holdes i live i stedet for at den ene velges bort. Å føre alt tilbake til strukturen er å velge side, og det er nettopp den feilen paradoks-motoren skal hindre.",
    },
  ],
  'sos1004-1-2': [
    {
      question: "Hva er et forskningsdesign?",
      options: ["Den samlede planen som avgjør hvilke svar en undersøkelse kan gi", "Den teknikken som brukes til å samle inn data i en undersøkelse", "Den teorien som styrer hvilke begreper undersøkelsen bygger på", "Den framstillingsformen resultatene presenteres i når de publiseres"],
      explanation: "Riktig svar er hele arkitekturen rundt undersøkelsen: spørsmål, enheter, datainnsamling og analyse. Teknikken for datainnsamling er metoden, og to studier kan bruke samme metode med helt ulike design. Det er designet, ikke metoden, som avgjør hva som kan konkluderes.",
    },
    {
      question: "Hva svarer kvalitativ metode typisk på?",
      options: ["Hva noe betyr for dem det gjelder, og hvordan de forstår situasjonen sin", "Hvor utbredt et fenomen er i befolkningen på et gitt tidspunkt", "Hvilke bakenforliggende variabler som forklarer en observert forskjell", "Hvor stor sannsynligheten er for at et funn skyldes tilfeldigheter"],
      explanation: "Riktig svar er mening og kontekst hos dem som studeres. Utbredelse og fordeling er kvantitative spørsmål. Valget mellom sporene følger av spørsmålet, ikke av at det ene er mer vitenskapelig enn det andre — begge har styrker og svakheter.",
    },
    {
      question: "Hva er metodetriangulering?",
      options: ["Å belyse samme spørsmål med design som har forskjellige svakheter", "Å gjenta den samme undersøkelsen i flere ulike befolkningsgrupper", "Å samle inn mer data av samme type for å gjøre anslaget sikrere", "Å la flere forskere analysere det samme materialet uavhengig av hverandre"],
      explanation: "Riktig svar er at svakhetene ved det ene designet dekkes av styrkene ved det andre. To store spørreundersøkelser er ikke triangulering, siden de deler alle de samme begrensningene. Flere uavhengige kodere er en kontroll av reliabiliteten, som er noe annet.",
    },
    {
      question: "Hva er operasjonalisering?",
      options: ["Å oversette et abstrakt begrep til noe som faktisk kan måles eller observeres", "Å bestemme hvilke enheter som skal trekkes ut til å inngå i undersøkelsen", "Å gjennomføre datainnsamlingen etter den planen som er lagt på forhånd", "Å beskrive framgangsmåten så nøyaktig at andre kan gjenta undersøkelsen"],
      explanation: "Riktig svar er oversettelsen fra begrep til målbar størrelse. Sosial klasse kan ikke måles direkte og må gjøres om til yrke, inntekt, utdanning eller en kombinasjon — og valget avgjør hva undersøkelsen kan finne. Å beskrive framgangsmåten hører til kravet om etterprøvbarhet.",
    },
    {
      question: "Hva måler en survey som spør om opplevd forskjellsbehandling?",
      options: ["Respondentenes egne erfaringer og hvordan de har tolket dem", "Omfanget av faktisk forskjellsbehandling i det aktuelle feltet", "Arbeidsgiveres holdninger til søkere med ulik bakgrunn", "Andelen søknader som avvises allerede ved første sortering"],
      explanation: "Riktig svar er erfaringer og tolkninger. Selvrapportering er den eneste tilgangen til opplevelser, men den er ikke et mål på hva som faktisk skjedde. Andelen avviste søknader måles med et helt annet design, og de to størrelsene kan avvike uten at noen av dem er gale.",
    },
    {
      question: "Hvorfor retter ikke flere svar opp skjevheten i et selvrekruttert utvalg?",
      options: ["Fordi skjevheten er systematisk og følger av hvem som velger å delta", "Fordi antallet svar aldri blir stort nok til å dekke hele befolkningen", "Fordi svarene i slike undersøkelser er mindre pålitelig registrert", "Fordi frafallet blant dem som er invitert, alltid er høyere på nett"],
      explanation: "Riktig svar er at skjevheten er systematisk, ikke tilfeldig: de som melder seg til en undersøkelse om et tema, har som regel et sterkere engasjement i det enn andre. Størrelse er ikke det samme som representativitet, og mer av et skjevt utvalg gir bare mer skjevhet.",
    },
    {
      question: "Når er selvrapporterte data et problem?",
      options: ["Når de brukes som mål på faktisk atferd i stedet for på opplevelser", "Når de samles inn i store utvalg der oppfølgingsspørsmål er umulig", "Når respondentene ikke er anonymisert i det publiserte materialet", "Når undersøkelsen gjennomføres på nett i stedet for ansikt til ansikt"],
      explanation: "Riktig svar er at problemet oppstår ved bruken, ikke ved datatypen. For holdninger og opplevelser er selvrapportering den eneste tilgjengelige kilden. To systematiske skjevheter er verdt å kunne: folk svarer det de tror er sosialt akseptabelt, og de husker fortiden i lys av hvordan det gikk.",
    },
    {
      question: "Hva avgjør om en variabel er avhengig eller uavhengig?",
      options: ["Hvilket spørsmål studien stiller, altså hva som skal forklares", "Hvilken av variablene som er målt først i tid", "Hvilken av variablene som varierer mest i datamaterialet", "Hvilken av variablene som er lettest å operasjonalisere presist"],
      explanation: "Riktig svar er at rollen følger av spørsmålet, ikke av variabelen selv. Utdanning er avhengig variabel i en studie av hvem som tar høyere utdanning, og uavhengig variabel i en studie av hvem som får jobb. Tidsrekkefølge er et krav for kausalitet, men det avgjør ikke rollefordelingen.",
    },
    {
      question: "Hva er avgjørende for at et eksperiment skal kunne gi kausalt belegg?",
      options: ["At forskeren varierer én betingelse og holder alt annet likt", "At undersøkelsen foregår i en virkelig situasjon og ikke i et laboratorium", "At antallet enheter er stort nok til at tilfeldige utslag jevnes ut", "At deltakerne ikke vet at de er med i en undersøkelse"],
      explanation: "Riktig svar er kontrollen over hva som varieres. Er to enheter like på alt annet, finnes det ingen annen egenskap forskjellen kan skyldes. At studien foregår i en virkelig situasjon, gjør den til et felteksperiment, men det er ikke det som gjør den kausal.",
    },
    {
      question: "Hva varieres i en korrespondansetest i arbeidsmarkedet?",
      options: ["Én egenskap ved søknaden, typisk hva navnet signaliserer om bakgrunn", "Kvalifikasjonene i søknaden, slik at ulike nivåer kan sammenlignes", "Hvilke bransjer og stillingstyper søknadene blir sendt til", "Tidspunktet søknadene sendes inn på i utlysningsperioden"],
      explanation: "Riktig svar er at bare én egenskap varieres, mens utdanning, erfaring, språk og oppsett holdes likt. Varieres flere ting samtidig, kan forskjellen i utfall ikke tilskrives noen av dem. Bransje og tidspunkt er forhold som holdes like eller fordeles likt mellom parene.",
    },
    {
      question: "Hva er innkallingsgapet?",
      options: ["Forskjellen i andel som innkalles til intervju mellom to ellers like søknader", "Forskjellen i lønn mellom to grupper med samme utdanning og like lang yrkeserfaring", "Andelen i en gruppe som oppgir å ha blitt forbigått ved ansettelse", "Tiden som går fra en søknad sendes inn til søkeren får svar"],
      explanation: "Riktig svar er forskjellen i innkallingsrate mellom søknader som bare skiller seg på én egenskap. Lønnsforskjeller måles med andre data og gjelder et senere trinn i forløpet. Andelen som oppgir å ha blitt forbigått, er en survey-størrelse og måler opplevelse, ikke handling.",
    },
    {
      question: "Hva kan et innkallingsgap ikke fortelle oss?",
      options: ["Hvilket motiv som lå bak arbeidsgiverens sortering av søknadene", "Om forskjellsbehandling forekommer ved første sortering av søknader", "Om forskjellen kan tilskrives den egenskapen som ble variert", "Om ellers like søknader behandles ulikt i den aktuelle bransjen"],
      explanation: "Riktig svar er motivet: det var ikke blant det som ble variert, og kan derfor ikke leses ut av utfallet. De tre andre er nettopp det designet er laget for å svare på. Å lese et motiv ut av et utfall er den vanligste overtolkningen av denne studietypen.",
    },
    {
      question: "Hva er selvseleksjon?",
      options: ["At enhetene sorterer seg selv inn i eller ut av det som undersøkes", "At forskeren velger ut hvilke enheter som skal inngå i undersøkelsen", "At deltakerne endrer atferd fordi de vet at de blir observert", "At de som svarer, oppgir noe annet enn det de faktisk mener"],
      explanation: "Riktig svar er at enhetene sorterer seg selv. Dette er felteksperimentets blindsone: testen måler bare de stillingene noen faktisk søker på, så de som har sluttet å søke i en bransje, forsvinner ut av materialet — og virkningen kan dermed underdrives.",
    },
    {
      question: "Hva er en korrelasjon?",
      options: ["At to størrelser varierer systematisk sammen i et datamateriale", "At en endring i den ene størrelsen frembringer en endring i den andre", "At to størrelser henger sammen fordi begge påvirkes av en tredje", "At en observert sammenheng er sterk nok til å utelukke tilfeldigheter"],
      explanation: "Riktig svar er samvariasjonen som sådan. Den kan bety at det ene forårsaker det andre, at det andre forårsaker det ene, at en tredje faktor forårsaker begge, eller at sammenhengen er tilfeldig. Observasjonen alene skiller ikke mellom de fire mulighetene.",
    },
    {
      question: "Hvilke tre krav må være innfridd for at en sammenheng skal kunne kalles kausal?",
      options: ["Samvariasjon, riktig tidsrekkefølge, og at andre forklaringer er utelukket", "Samvariasjon, stort utvalg, og at funnet er gjentatt i en ny undersøkelse", "Samvariasjon, høy reliabilitet, og at variablene er presist operasjonalisert", "Samvariasjon, teoretisk begrunnelse, og at retningen er faglig plausibel"],
      explanation: "Riktig svar er de tre klassiske kravene, der det siste er det vanskelige — og det er nettopp det eksperimentelle design er laget for å innfri. Stort utvalg, høy reliabilitet og teoretisk begrunnelse er verdifullt, men ingen av delene utelukker alternative forklaringer.",
    },
    {
      question: "Hva er en spuriøs sammenheng?",
      options: ["En korrelasjon som skyldes at begge størrelsene henger sammen med en tredje", "En korrelasjon som er for svak til å kunne skilles fra tilfeldig variasjon i utvalget", "En sammenheng som går i motsatt retning av det forskeren antok", "En sammenheng som ikke lar seg gjenfinne når studien gjentas"],
      explanation: "Riktig svar er den bakenforliggende tredje faktoren. Iskremsalg og drukningsulykker følger hverandre gjennom året fordi begge følger temperaturen. Et godt svar navngir den tredje faktoren i stedet for bare å nevne at en slik kan finnes.",
    },
    {
      question: "Hva er den kontrafaktiske sammenligningen et kausalt design forsøker å svare på?",
      options: ["Hva som ville skjedd med samme enhet dersom betingelsen hadde vært en annen", "Hva som skjer med gjennomsnittet i gruppen når betingelsen endres over tid", "Hva som skiller de enhetene som fikk betingelsen fra dem som ikke fikk den", "Hva som ville skjedd dersom undersøkelsen var gjennomført i et annet land"],
      explanation: "Riktig svar er spørsmålet om det utfallet enheten ikke fikk. Ingen kan observere begge utfallene for samme enhet, så sammenligningen konstrueres: to enheter som er like på alt annet enn den ene betingelsen. I korrespondansetesten er de to søknadene laget like, ikke funnet like.",
    },
    {
      question: "Hva er validitet?",
      options: ["Om målingen treffer det begrepet den er ment å måle", "Om målingen gir samme resultat når den gjentas under like forhold", "Om resultatene kan generaliseres til hele den aktuelle befolkningen", "Om datamaterialet er stort nok til å gi sikre anslag"],
      explanation: "Riktig svar er treffsikkerheten mot begrepet. Et instrument kan måle svært presist og likevel måle noe annet enn det du var ute etter. Å gi samme resultat ved gjentakelse er reliabilitet, og det er en forutsetning for validitet uten å være nok.",
    },
    {
      question: "En vekt viser konsekvent tre kilo for mye. Hvordan beskrives dette?",
      options: ["Høy reliabilitet og lav validitet", "Høy validitet og lav reliabilitet", "Lav reliabilitet og lav validitet", "Høy reliabilitet og høy validitet"],
      explanation: "Riktig svar er at målingen er pålitelig fordi den gir samme resultat hver gang, men ikke treffsikker mot den størrelsen den skal måle. Det motsatte tilfellet ville vært en vekt som viser tilfeldige tall omkring riktig verdi — da er selv påliteligheten borte.",
    },
    {
      question: "Hvordan generaliserer kvalitative studier vanligvis?",
      options: ["Til begreper og mekanismer, ikke til utbredelse i en befolkning", "Til den befolkningen informantene er trukket fra, med et usikkerhetsmål", "Til andre studier som har brukt tilsvarende framgangsmåte", "Til de situasjonene som ligner mest på den som ble observert"],
      explanation: "Riktig svar er at slike studier viser at en bestemt prosess finnes og hvordan den virker, ikke hvor utbredt den er. Kritikken om manglende generaliserbarhet er derfor ofte upresis: spørsmålet er alltid hva det skal generaliseres til.",
    },
    {
      question: "Hva er registerdatas viktigste begrensning?",
      options: ["De inneholder utfall, men ikke prosessene eller begrunnelsene bak dem", "De dekker bare et utvalg av befolkningen og må derfor vektes", "De er samlet inn av forskere og bærer preg av forskernes spørsmål", "De kan ikke sammenlignes over tid fordi definisjonene stadig endres"],
      explanation: "Riktig svar er at registrene inneholder det myndighetene hadde grunn til å registrere — inntekt, yrke, utdanning, bosted — og ingenting om motiver, opplevelser eller relasjoner. At de dekker hele befolkningen og går langt tilbake, er nettopp fortrinnet deres.",
    },
    {
      question: "Hva avgjør hva populasjonen i en studie er?",
      options: ["Spørsmålet studien stiller, altså hvem konklusjonen skal gjelde for", "De dataene forskeren faktisk har fått tilgang til", "Størrelsen på det utvalget som er trukket fra befolkningen studien handler om", "Hvilken metode som er valgt for datainnsamlingen"],
      explanation: "Riktig svar er at populasjonen defineres av spørsmålet. Har du data om sysselsatte i én bransje, er populasjonen din den bransjen — også om du skulle ønske den var hele arbeidsmarkedet. Å la dataene definere populasjonen er en vanlig, og alvorlig, forveksling.",
    },
    {
      question: "Hva skiller deltakende observasjon fra et felteksperiment?",
      options: ["I observasjonsstudien varierer forskeren ingenting, men registrerer det som skjer", "I observasjonsstudien er forskeren til stede, mens eksperimentet skjer på avstand", "I observasjonsstudien er utvalget mindre enn i et felteksperiment", "I observasjonsstudien er dataene kvalitative, mens eksperimentets er kvantitative"],
      explanation: "Riktig svar er fraværet av kontrollert variasjon. Begge foregår i virkelige situasjoner, men bare eksperimentet varierer noe. Derfor gir observasjonsstudien rike beskrivelser av hva folk faktisk gjør, uten å kunne gi kausalt belegg.",
    },
    {
      question: "Hva er styrken ved et komparativt design?",
      options: ["At det synliggjør hva som er særegent og hva som er allment ved et fenomen", "At det gir et større samlet utvalg og dermed sikrere anslag enn en enkeltstudie", "At det kan gjennomføres uten tilgang til data om enkeltpersoner", "At det gjør det mulig å følge de samme enhetene over lang tid"],
      explanation: "Riktig svar er sammenligningens evne til å skille det særegne fra det allmenne. At et fenomen finnes i Norge, sier lite alene; at det finnes her og ikke i et land med annen institusjonell innretning, peker på institusjonen som mulig forklaring.",
    },
    {
      question: "Hvorfor må en korrespondansetest være skjult for arbeidsgiveren?",
      options: ["Fordi den som vet at han måles, ville sortert annerledes enn ellers", "Fordi åpne studier krever skriftlig samtykke fra alle deltakerne", "Fordi arbeidsgiverne ellers ville brukt mer tid på hver enkelt søknad", "Fordi forskeren ellers måtte oppgi hvilke søknader som var fiktive"],
      explanation: "Riktig svar er at kunnskap om målingen ville endret det som måles, og designet ville dermed vært verdiløst. Nettopp derfor er det en etisk avveining i saken: ulempen for den enkelte arbeidsgiver er liten og kortvarig, mens kunnskapen ikke kan skaffes på annen måte.",
    },
    {
      question: "Hva er den mest gjenbrukbare måten å gjøre et kritisk sluttgrep på i en drøfting?",
      options: ["Å navngi én ting funnet ikke dekker, og ett design som ville dekket den", "Å påpeke at all forskning har svakheter og at funnene derfor er usikre", "Å vise til at studien er gjennomført i ett land og ett tidsrom", "Å etterlyse mer forskning på området før konklusjoner trekkes"],
      explanation: "Riktig svar er å være konkret om både grensen og botemidlet. Å påpeke at metoder har svakheter, klarer de fleste; å si hvilken grense og hva som skulle til for å komme forbi den, viser at du har forstått designet innenfra. Generelle etterlysninger av mer forskning gir ingen uttelling.",
    },
  ],
  'sos1004-1-3': [
    {
      question: "Hvilken rolle har faghistorien i SOS1004?",
      options: ["Den er et gjenkjenningslag som testes i flervalgsdelen", "Den er et teorigrunnlag som forventes brukt i langsvaret", "Den er bakgrunnsstoff som ikke inngår i vurderingen", "Den er valgfritt fordypningsstoff for særlig interesserte"],
      explanation: "Riktig svar er at stoffet testes i flervalgsdelen, der hele pensum er nedslagsfelt. Ingen av de ti langsvar-slotene H2021 til H2025 har hatt faghistorie som tema, og å importere klassikerstoff i et langsvar er feil #10. Men stoffet inngår i vurderingen, og flervalgsdelen må bestås for seg.",
    },
    {
      question: "Hvilken samfunnsendring ble sosiologien til for å forstå?",
      options: ["Overgangen til det moderne samfunnet med industri, byer, marked og statsapparat", "Framveksten av demokratiske styreformer i Europa etter revolusjonene", "Utbredelsen av allmenn skolegang og økende utdanningsnivå i befolkningen", "Utviklingen av velferdsordninger som sikret befolkningen mot inntektsbortfall"],
      explanation: "Riktig svar er den samlede omveltningen der folk flyttet fra bygd til by, arbeid ble flyttet fra gård til fabrikk, og gamle bånd ble erstattet av lønnsarbeid og kontrakt. Grunnleggerne stilte alle det samme spørsmålet: hva holder et samfunn sammen når det gamle limet er borte.",
    },
    {
      question: "Hva beskriver begrepet fremmedgjøring?",
      options: ["Arbeiderens tap av kontroll over og sammenheng i sitt eget arbeid", "Tilstanden der samfunnets normer er uklare eller motstridende", "Følelsen av å ikke høre hjemme i det samfunnet man lever i", "Avstanden mellom de ulike klassene i et industrisamfunn"],
      explanation: "Riktig svar er tapet av kontroll og sammenheng i arbeidsforholdet: arbeideren bestemmer ikke hva som lages, hvordan, eller hva som skjer med produktet. Beskrivelsen av uklare normer hører til anomi, og forvekslingen mellom de to er den vanligste fellen i faghistoriske spørsmål.",
    },
    {
      question: "Hva er anomi?",
      options: ["En tilstand der samfunnets normer er uklare, svekkede eller motstridende", "En tilstand der arbeideren ikke rår over sitt eget arbeid eller dets produkt", "En tilstand der samfunnet holdes sammen fordi medlemmene ligner hverandre", "En tilstand der den enkelte er isolert fra sosiale fellesskap over tid"],
      explanation: "Riktig svar er normløsheten som en egenskap ved situasjonen, ikke ved personen, knyttet til perioder med rask endring der de gamle reglene har mistet kraft før nye har festet seg. Beskrivelsen av arbeidsforholdet er fremmedgjøring — nøkkelordet som skiller dem, er normer mot arbeid.",
    },
    {
      question: "Hva bygger organisk solidaritet på?",
      options: ["At folk gjør forskjellige ting og derfor er avhengige av hverandre", "At folk ligner hverandre og deler både arbeid, tro og livsform", "At folk er bundet sammen av slektskap og felles bosted", "At folk inngår frivillige kontrakter med hverandre om bytte"],
      explanation: "Riktig svar er gjensidig avhengighet gjennom arbeidsdeling. Knaggen ligger i ordet organisk: en organisme består av ulike organer som gjør ulike ting og ikke kan klare seg uten hverandre. Samhold gjennom likhet er mekanisk solidaritet, og de to navnene byttes lett om.",
    },
    {
      question: "Hva er sosiale fakta?",
      options: ["Måter å handle og tenke på som finnes utenfor individet og virker tvingende på det", "Opplysninger om samfunnet som er samlet inn etter en systematisk og beskrevet framgangsmåte", "De holdningene et flertall i befolkningen deler på et gitt tidspunkt", "De sidene ved samfunnslivet som lar seg måle og etterprøve kvantitativt"],
      explanation: "Riktig svar er språk, rettsregler, moral og skikker: forhold som er der før den enkelte og består etter henne. Den metodiske regelen som følger, er at sosiale fakta skal forklares med andre sosiale fakta. Alternativet om innsamlede opplysninger utnytter dagligtalens betydning av ordet fakta.",
    },
    {
      question: "Hva var grepet i Durkheims selvmordsstudie?",
      options: ["Å forklare variasjonen i rater mellom grupper i stedet for enkelttilfeller", "Å intervjue etterlatte for å kartlegge de bakenforliggende årsakene", "Å sammenligne kliniske diagnoser på tvers av flere europeiske land", "Å følge en gruppe personer over tid for å registrere hva som faktisk skjedde med dem"],
      explanation: "Riktig svar er skiftet fra enkelttilfellet til raten: variasjonen mellom grupper og perioder fulgte grad av sosial integrasjon og regulering. Studien er et tidlig eksempel på nivåkobling, der fenomenet oppleves på mikronivå og forklares på makronivå.",
    },
    {
      question: "Hva er kjernen i Webers byråkratibegrep?",
      options: ["En organisasjonsform med hierarki, skrevne regler og upersonlig saksbehandling", "En forvaltning som er blitt så stor at saksbehandlingen tar unødig lang tid", "Den delen av statsapparatet som iverksetter vedtak uten selv å fatte dem", "Et system der stillinger tildeles etter ansiennitet framfor kvalifikasjoner"],
      explanation: "Riktig svar er organisasjonsformen. Poenget er at den er teknisk overlegen for store oppgaver nettopp fordi den er upersonlig: likebehandling forutsetter at saksbehandleren ser bort fra hvem søkeren er. Lang saksbehandlingstid er dagligtalens betydning og beskriver en mulig følge.",
    },
    {
      question: "Hva menes med rasjonalisering hos Weber?",
      options: ["At stadig flere livsområder innrettes etter beregning av midler mot mål", "At befolkningen gradvis blir mer opplyst og tar mer fornuftige valg", "At virksomheter effektiviseres ved at unødvendige ledd fjernes", "At tradisjonelle forklaringer erstattes av vitenskapelige forklaringer"],
      explanation: "Riktig svar er utbredelsen av én bestemt tenkemåte til stadig nye områder, med både effektivitet og en egen form for ufrihet som følge. Begrepet sier ingenting om at folk blir klokere. Alternativet om opplysning er den vanligste distraktoren, fordi ordet i dagligtale er positivt ladet.",
    },
    {
      question: "Hva er poenget i Webers studie av den protestantiske etikk?",
      options: ["At en religiøs livsholdning kan ha hatt økonomiske virkninger ingen tilsiktet", "At religionens betydning avtar etter hvert som samfunnet moderniseres", "At økonomiske forhold avgjør hvilke religiøse forestillinger som får fotfeste", "At land med protestantisk flertall har hatt sterkere vekst enn andre land"],
      explanation: "Riktig svar er at forestillinger og verdier kan ha materielle konsekvenser, ikke bare omvendt. Studien er dermed et motargument mot en rent økonomisk forklaring av historisk endring. Alternativet om at økonomien bestemmer forestillingene, snur argumentet på hodet.",
    },
    {
      question: "Hva krever prinsippet om verdifri vitenskap?",
      options: ["At forskeren skiller mellom å forklare hvordan noe er og å mene noe om det", "At forskeren velger forskningstema uten å la egne interesser styre valget", "At forskeren avstår fra å delta i offentlig debatt om sitt eget fagfelt", "At forskningen finansieres uavhengig av parter med interesser i utfallet"],
      explanation: "Riktig svar er skillet mellom beskrivelse og vurdering. Weber mente at temavalget alltid er styrt av hva forskeren finner viktig, og at det er uunngåelig. Det som kan kreves, er at vurderingen ikke smugles inn under dekke av en beskrivelse.",
    },
    {
      question: "Hva er det klassiske klassebegrepet basert på?",
      options: ["Posisjon i produksjonen — om du eier produksjonsmidlene eller selger arbeidskraft", "Inntektsnivå, målt som samlet årsinntekt før skatt og overføringer", "Yrkestype, gruppert etter hvilke økonomiske og kulturelle ressurser posisjonen bygger på", "Livsstil og forbruksmønster, kartlagt gjennom holdningsundersøkelser"],
      explanation: "Riktig svar er eiendomsforholdet i produksjonen. Det er et snevrere begrep enn det yrkesbaserte som moderne norsk klasseforskning bruker, der både økonomiske og kulturelle ressurser inngår. Skillet mellom de to begrepene er en typisk flervalgsdistinksjon.",
    },
    {
      question: "Hva beskriver Tönnies' begrepspar Gemeinschaft og Gesellschaft?",
      options: ["To former for sosial tilknytning: nære personlige bånd mot kontrakt og bytte", "To former for samhold: likhet mellom medlemmene mot avhengighet gjennom arbeidsdeling", "To former for makt: den som forbyr mot den som virker gjennom rutiner", "To former for fellesskap: det lokale mot det nasjonale"],
      explanation: "Riktig svar er typer av tilknytning mellom mennesker. Paret ligner Durkheims solidaritetsformer og blandes lett med dem, men vinklingen er ulik: Durkheim spør hva som holder samfunnet sammen, mens Tönnies beskriver hvordan båndene mellom mennesker er.",
    },
    {
      question: "Hva er Simmels plass i faghistorien?",
      options: ["Han studerte samhandlingsformene på mikronivå, med storbyen som ramme", "Han studerte hvordan arbeidsdelingen skaper nye former for samhold", "Han studerte hvordan religiøse forestillinger fikk økonomiske virkninger", "Han studerte hvordan eierskapet til produksjonsmidlene skaper klasser"],
      explanation: "Riktig svar er mikroperspektivet: der de tre store navnene arbeider på makronivå, studerer Simmel de små, gjentatte samhandlingsformene. Linjen fra ham går videre til Goffman. De tre andre alternativene beskriver hver sin av de tre store klassikerne.",
    },
    {
      question: "Hva er kulturell kapital?",
      options: ["Ressurser i form av utdanning, kunnskap og fortrolighet med det som verdsettes", "Ressurser i form av nyttige forbindelser og nettverk som kan mobiliseres ved behov", "Ressurser i form av penger, eiendom og andre omsettelige verdier", "Ressurser i form av rettigheter som følger av statsborgerskap og bosted"],
      explanation: "Riktig svar er de utdannings- og kunnskapsbaserte ressursene. Poenget er at ulikhet ikke bare handler om penger: to familier med lik inntekt kan ha svært ulike forutsetninger for å hjelpe barna gjennom utdanningssystemet. Nettverksressurser er sosial kapital.",
    },
    {
      question: "Hva kjennetegner Foucaults maktbegrep?",
      options: ["Makt som virker gjennom rutiner og kategorisering, ikke bare gjennom forbud", "Makt som én part besitter og bruker til å tvinge gjennom sin vilje", "Makt som følger av kontroll over produksjonsmidlene i en økonomi", "Makt som utøves gjennom formelle beslutningsprosedyrer i offentlige organer"],
      explanation: "Riktig svar er den produktive og spredte makten, som virker gjennom tidsplaner, journalføring og inndeling av mennesker i kategorier. Alternativet om at én part besitter og bruker makt, er nettopp det klassiske maktbegrepet Foucault stiller et alternativ til.",
    },
    {
      question: "Hvilke tre klassikere står i SOS1004-pensum og kan brukes i et langsvar?",
      options: ["Goffman, Beck og Berger", "Marx, Weber og Durkheim", "Bourdieu, Foucault og Simmel", "Tönnies, Simmel og Goffman"],
      explanation: "Riktig svar er de tre hvis begreper lever videre i emnets egne temakapitler: stigma, risikosamfunnet og sekulariseringstesen. Alternativet med de tre store navnene i faghistorien er den mest fristende gjettingen, og nettopp de tre utløser feil #10 når de trekkes inn i et langsvar.",
    },
    {
      question: "Hva er Goffmans bidrag til stigmabegrepet?",
      options: ["Beskrivelsen av hvordan et diskrediterende kjennetegn virker i samhandlingen", "Beskrivelsen av stigmatisering som en strukturell mekanisme forutsatt makt", "Beskrivelsen av stigma som en egenskap ved den som bærer kjennetegnet", "Beskrivelsen av hvordan lovgivning skaper skiller mellom grupper av borgere"],
      explanation: "Riktig svar er interaksjonsnivået: stigmaet virker i møtet mellom mennesker, i blikk, unnvikelser og forsøk på å håndtere kjennetegnet. Merking, stereotypi, atskillelse, statustap og diskriminering forutsatt makt er Link og Phelans senere tilføyelse, og å tilskrive Goffman makt-premisset er en faglig feil.",
    },
    {
      question: "Hva er kjernen i Becks begrep om risikosamfunnet?",
      options: ["At moderne samfunn må håndtere risikoer det selv har frembrakt", "At moderne samfunn er farligere å leve i enn tidligere tiders samfunn", "At risikoer i moderne samfunn fordeles jevnere enn goder gjør", "At moderne samfunn har bygget ut forsikringsordninger mot de fleste farer"],
      explanation: "Riktig svar er at risikoene er selvproduserte, at de ikke stanser ved landegrenser, og at de ofte er usynlige for sansene slik at kunnskapen om dem hviler på vitenskapelig måling. Alternativet om at samfunnet er farligere, er den vanligste forenklingen av tesen.",
    },
    {
      question: "Hvilket skille må skrives ut når Becks begrep brukes i en besvarelse?",
      options: ["Skillet mellom risiko-produksjon og risiko-fordeling", "Skillet mellom risiko og usikkerhet i økonomisk forstand", "Skillet mellom naturskapte og menneskeskapte hendelser", "Skillet mellom individuell og kollektiv håndtering av fare"],
      explanation: "Riktig svar er at det at samfunnet frembringer nye farer, er ett spørsmål, og at farene rammer ulikt, er et annet. Risikoer fordeles ikke som goder. Uten dette skillet blir begrepet en generell påstand om at verden er utrygg, og det gir ingen uttelling.",
    },
    {
      question: "Hva står Berger for i faghistorien?",
      options: ["Den klassiske formuleringen av tanken om at religionens betydning ville avta", "Kartleggingen av hvordan religiøsiteten i Norge har utviklet seg over tid", "Analysen av hvordan religiøs tilhørighet virker inn på arbeidsmarkedsutfall", "Beskrivelsen av hvordan trossamfunn organiserer seg i moderne samfunn"],
      explanation: "Riktig svar er sekulariseringstesen. Det som gjør posisjonen interessant i dag, er at den er blitt prøvd mot data og har måttet justeres: utviklingen har vist seg mer sammensatt enn tesen forutsa. Kartleggingen av norsk religiøsitet står Furseth for.",
    },
    {
      question: "Hva er forskjellen på sekularisering i klassisk forstand og religiøs kompleksitet?",
      options: ["Den ene er én prosess med én retning; den andre er flere som kan gå ulikt", "Den ene gjelder samfunnet som helhet; den andre gjelder den enkelte troende", "Den ene er en teoretisk tese; den andre er en politisk posisjon om religion", "Den ene gjelder kristendommen; den andre gjelder religiøst mangfold generelt"],
      explanation: "Riktig svar er at tro og praksis kan svekkes på individnivå samtidig som samfunnet blir mer religiøst sammensatt — flere prosesser som beveger seg i ulike retninger. Å kjenne begge begrepene og si hva som skiller dem, er redegjørelseskravet i religionskapitlet.",
    },
    {
      question: "Hva viser Hansen og Uvaags skille mellom absolutt og relativ mobilitet?",
      options: ["At levekårene er løftet for de fleste, mens sjansene mellom klasser er stabile", "At mobiliteten har økt i alle deler av befolkningen gjennom de siste tiårene", "At mobiliteten er høyere i Norge enn i sammenlignbare europeiske land", "At mobiliteten avhenger mer av utdanning enn av foreldrenes yrke"],
      explanation: "Riktig svar er at begge deler er sanne samtidig: bunnen er løftet, og de relative sjansene består. Distinksjonen oppløser debatten om hvorvidt Norge er et klassesamfunn, som ofte hviler på at de to størrelsene forveksles. Å velge én side er feil #5.",
    },
    {
      question: "Hva er prøven på om en klassikerreferanse hører hjemme i et langsvar?",
      options: ["Om svaret blir dårligere eller bare kortere når avsnittet strykes", "Om forfatteren står oppført på pensumlisten for det aktuelle semesteret", "Om begrepet er blitt brukt i minst én tidligere eksamensoppgave", "Om referansen er formulert kort nok til ikke å ta unødig plass"],
      explanation: "Riktig svar er nytteprøven: gjør avsnittet en jobb i argumentet, eller viser det bare hva du kan. Å stå på pensumlisten er ikke nok — et pensumforankret begrep brukt på feil tema gjør ikke mer nytte enn et som ikke står i pensum, og det er nettopp derfor feil #10 er så lett å begå.",
    },
  ],
  'sos1004-2-1': [
    {
      question: "Hva kjennetegner integrasjon slik begrepet brukes i sosiologien?",
      options: ["Deltakelse i sentrale institusjoner samtidig som noe eget særpreg beholdes", "Gradvis kulturell tilnærming til majoriteten i språk, skikker og verdier", "Systematisk atskillelse mellom grupper i bosted, skole og arbeidsmarked", "Formell tildeling av statsborgerskap etter et gitt antall år i landet"],
      explanation: "Integrasjon er deltakelse i arbeid, utdanning og samfunnsliv kombinert med bevart særpreg. Svaret om kulturell tilnærming beskriver assimilering, der kravet er likhet og ikke deltakelse. Svaret om atskillelse beskriver segregering. Statsborgerskap er en rettslig status og følger ikke automatisk av sosial deltakelse.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom integrasjon og assimilering?",
      options: ["Integrasjon krever deltakelse, mens assimilering krever kulturell likhet", "Integrasjon krever likhet, mens assimilering krever bevart særpreg", "Integrasjon gjelder etterkommere, mens assimilering gjelder nyankomne innvandrere", "Integrasjon er et politisk mål, mens assimilering er et rettslig krav"],
      explanation: "Skillet er at integrasjon måler deltakelse i institusjonene, mens assimilering måler hvor lik minoriteten er blitt majoriteten. Svaret som snur de to på hodet er den vanligste forvekslingen. Begrepene er heller ikke bundet til hver sin generasjon, og assimilering er ingen rettslig kategori.",
    },
    {
      question: "Hva menes med identifikasjonell assimilering?",
      options: ["At man opplever seg som del av storsamfunnet og blir regnet som det", "At man behersker majoritetsspråket flytende i alle sammenhenger", "At man har samme sysselsettingsrate som resten av befolkningen", "At man har fått innvilget varig oppholdstillatelse i landet"],
      explanation: "Identifikasjonell assimilering er tilhørighetsdimensjonen: å føle seg som en del av samfunnet og bli regnet med av andre. Språkbeherskelse og sysselsetting er målbare former for tilpasning, og poenget er nettopp at de kan være på plass mens tilhørigheten ikke er det. Oppholdstillatelse er en rettslig status.",
    },
    {
      question: "Hva skiller en innvandrer fra en etterkommer i faglig terminologi?",
      options: ["Innvandreren har selv flyttet hit, mens etterkommeren er født i Norge", "Innvandreren mangler statsborgerskap, mens etterkommeren har fått det", "Innvandreren kom som voksen, mens etterkommeren kom som mindreårig", "Innvandreren har utenlandsk utdanning, mens etterkommeren har norsk"],
      explanation: "Kategoriene bestemmes av hvem som selv har migrert: innvandreren er født i utlandet og har flyttet hit, etterkommeren er født i Norge av to innvandrerforeldre. Svarene om statsborgerskap, alder ved ankomst og utdanningsland beskriver forhold som varierer innenfor begge gruppene og som derfor ikke definerer skillet.",
    },
    {
      question: "Hvorfor er det en faglig feil å kalle etterkommere for innvandrere?",
      options: ["Det sletter generasjonsforskjellen forskningen finner størst effekter av", "Det bryter med reglene for hvordan offentlig statistikk skal presenteres", "Etterkommere har sjelden foreldre som selv er født i et annet land", "Kategorien innvandrer brukes bare om personer med flukt som grunn"],
      explanation: "Sammenslåingen visker ut nettopp den generasjonsforskjellen som gir de tydeligste funnene, blant annet etterkommernes oppadgående utdannings- og yrkesmobilitet. Etterkommere har per definisjon to utenlandsfødte foreldre, og innvandrerkategorien omfatter alle innvandringsgrunner, ikke bare flukt.",
    },
    {
      question: "Hva er poenget med å bryte sysselsettingstall ned på innvandringsgrunn?",
      options: ["Arbeidsinnvandrere og flyktninger møter helt ulike vilkår ved inngangen", "Innvandringsgrunn er den eneste variabelen som er registrert i statistikken", "Statistikken blir uten en slik nedbryting for liten til å si noe sikkert", "Nedbrytingen er et krav som følger av personvernreglene for registerdata"],
      explanation: "En arbeidsinnvandrer har som regel jobb før ankomst, mens den som kom som flyktning ofte har udokumentert kompetanse og et yrkesavbrudd bak seg. Et samlet gjennomsnitt beskriver derfor ingen av dem. Botid og generasjon er også registrert, og nedbrytingen følger av faglig presisjon, ikke av personvernregler.",
    },
    {
      question: "Hva er kjernen i Brochmanns kobling mellom velferdsstat og innvandringspolitikk?",
      options: ["Universelle rettigheter finansiert av arbeid gjør inngangsvilkårene sentrale", "Sjenerøse ytelser gjør at innvandring alltid lønner seg samfunnsøkonomisk", "Innvandringspolitikken bestemmer hvilke velferdsordninger som er mulige", "Velferdsstat og innvandringspolitikk er to helt uavhengige politikkområder"],
      explanation: "Argumentet er at universelle ordninger gir omfattende rettigheter fra medlemskapets første dag og finansieres av høy yrkesdeltakelse, slik at arbeidsmarkedsintegrering blir politikkens kjerne. Analysen sier ingenting om at innvandring alltid lønner seg, og den snur ikke årsaksretningen. At feltene er uavhengige er nettopp det koblingen bestrider.",
    },
    {
      question: "Hva er en universell velferdsordning?",
      options: ["En ordning som tildeles på grunnlag av medlemskap i samfunnet", "En ordning som tildeles etter dokumentert behov hos mottakeren", "En ordning som tildeles ut fra hva mottakeren har betalt inn", "En ordning som tildeles etter søknad i hvert enkelt tilfelle"],
      explanation: "Universalisme betyr tildeling på grunnlag av medlemskap i samfunnet, ikke etter behovsprøving eller innbetaling. Svaret om dokumentert behov beskriver behovsprøvde ordninger, som er det viktigste nabobegrepet, og svaret om innbetaling beskriver forsikringsbaserte ordninger.",
    },
    {
      question: "Hvorfor forutsetter den norske modellen høy sysselsetting i hele befolkningen?",
      options: ["Universelle ordninger finansieres løpende av dem som til enhver tid er i arbeid", "Loven krever at alle voksne i yrkesaktiv alder står tilmeldt som arbeidssøkere hele året", "Ytelsene beregnes ut fra gjennomsnittslønnen i hver enkelt næring i landet", "Arbeidsgiverne betaler velferdsordningene direkte til sine egne ansatte"],
      explanation: "Modellen hviler på at et bredt flertall er i arbeid og betaler skatt, fordi ordningene finansieres løpende. Det er derfor en gruppe med vedvarende lav sysselsetting blir et spørsmål for modellen som konstruksjon. De øvrige svarene beskriver plikter og finansieringsmåter som ikke er en del av den norske modellen.",
    },
    {
      question: "Hva menes med en komprimert lønnsstruktur?",
      options: ["At avstanden mellom lavest og høyest lønnede er liten i internasjonal målestokk", "At lønnsnivået i landet ligger høyt sammenliknet med andre europeiske land", "At lønningene forhandles lokalt i hver enkelt bedrift uten sentrale rammer i bunnen", "At lønnen justeres automatisk etter prisveksten to ganger i løpet av året"],
      explanation: "Det avgjørende er sammenpressingen, altså den lille avstanden mellom bunn og topp. Konsekvensen er at det finnes få jobber der lav produktivitet i en innkjøringsfase kan kompenseres med lav lønn. Et høyt lønnsnivå generelt er noe annet, og lokale forhandlinger uten sentrale rammer gir tvert imot større spredning.",
    },
    {
      question: "Hva er kompetanseterskelen i norsk arbeidsmarked?",
      options: ["Kravene til formell utdanning, dokumentert erfaring og språk for å komme inn", "Kravet om at arbeidsgivere må lyse ut alle ledige stillinger offentlig før ansettelse", "Grensen for hvor mange ansatte en bedrift kan ha uten å ha tariffavtale", "Nivået der en arbeidstaker går fra deltid til full stilling etter tariffen"],
      explanation: "Terskelen er summen av krav til godkjent utdanning, dokumentert erfaring og språk. Den er strukturell og gjelder alle som mangler disse tre, også i majoritetsbefolkningen. De øvrige svarene beskriver regler om utlysning, tariff og stillingsbrøk, som er andre forhold ved arbeidslivet.",
    },
    {
      question: "Hva består det velferdsstatlige integreringsparadokset i?",
      options: ["Modellen er terskel ved inngang for nyankomne og springbrett for etterkommerne", "Modellen gir svært høy sysselsetting samtidig som den gir høy inntektsulikhet", "Modellen er sjenerøs mot innvandrere men streng mot majoritetsbefolkningen", "Modellen krever kulturell tilpasning og finansierer samtidig morsmålsopplæring i skolen"],
      explanation: "Paradokset er at de samme institusjonelle trekkene gjør inngangen tung for nyankomne og oppstigningen lett i neste generasjon. Det er altså én modell sett fra to generasjoner, ikke en uenighet mellom forskere. De andre svarene beskriver spenninger som ikke er den dokumenterte dobbeltheten i dette temaet.",
    },
    {
      question: "Hvilket trekk ved sysselsettingsgapet støtter tolkningen at det er en inngangsterskel?",
      options: ["At gapet krymper jo lengre botid gruppen har i landet", "At gapet er størst i den eldste delen av arbeidsstyrken", "At gapet varierer mellom ulike landsdeler og bykommuner", "At gapet er noe mindre for menn enn det er for kvinner"],
      explanation: "At gapet avtar jo lengre tid en person har vært i landet, peker mot at det er tilgangen som er treg snarere enn at motivasjonen mangler. Aldersfordeling, geografisk variasjon og kjønnsforskjeller er reelle mønstre, men ingen av dem sier noe om hvorvidt hindringen ligger ved inngangen.",
    },
    {
      question: "Hva er springbretteffekten slik den brukes om velferdsordningene?",
      options: ["At universelle ordninger gjør oppadgående mobilitet lettere for dem som starter lavest", "At nyankomne kommer raskere ut i arbeid når ytelsene holdes lave i den aller første fasen", "At arbeidsinnvandrere får utdanningen sin godkjent raskere enn andre grupper gjør", "At etterkommere flytter til de større byene og dermed får flere jobbmuligheter"],
      explanation: "Effekten består i at gratis utdanning, helsetjenester uavhengig av foreldrenes inntekt og en komprimert lønnsstruktur virker sterkest for barn som starter lavt. De andre svarene beskriver mekanismer som gjelder inngangen for voksne eller geografisk mobilitet, ikke ordningenes virkning over et oppvekstløp.",
    },
    {
      question: "Hva skiller sysselsettingsgap fra ledighetsgap?",
      options: ["Sysselsetting teller alle i yrkesaktiv alder, ledighet bare aktive arbeidssøkere", "Sysselsetting teller bare heltidsstillinger, mens ledighet også teller alle på deltid", "Sysselsetting måles i registeret, mens ledighet måles gjennom spørreskjema", "Sysselsetting gjelder privat sektor, mens ledighet gjelder hele arbeidslivet"],
      explanation: "Sysselsettingsraten omfatter alle i yrkesaktiv alder, også de som står helt utenfor arbeidsstyrken, mens ledighetstallet bare fanger dem som aktivt søker arbeid. Forskjellen er stor nettopp for grupper med lav yrkesdeltakelse. Stillingsbrøk, målemetode og sektor definerer ikke skillet.",
    },
    {
      question: "Hva kan et sysselsettingsgap alene ikke fortelle oss noe om?",
      options: ["Hva som er årsaken til at gapet finnes", "Hvor stor forskjellen mellom gruppene er", "Hvordan gapet har utviklet seg over tid", "Hvilken aldersgruppe forskjellen gjelder"],
      explanation: "Et gap er en beskrivelse av en forskjell, ikke en årsaksforklaring: det kan skyldes kvalifikasjoner, helse, omsorgsansvar, nettverk eller diskriminering. Størrelse, utvikling over tid og aldersgruppe er derimot nettopp det registerdata kan beskrive presist. Det er denne begrensningen felteksperimentene er laget for å omgå.",
    },
    {
      question: "Hva kjennetegner innvandrernisjer i arbeidsmarkedet?",
      options: ["Vedvarende konsentrasjon av samme landbakgrunn, holdt oppe av rekrutteringsveiene", "Bransjer der arbeidsgiverne bevisst velger bort søkere med minoritetsbakgrunn i utlysningen", "Yrker der utenlandsk utdanning godkjennes raskere enn i resten av arbeidslivet", "Deler av arbeidslivet der lønnen forhandles individuelt og uten tariffavtale"],
      explanation: "Nisjen kjennetegnes av at den reproduserer seg selv gjennom nettverksrekruttering, slik at konsentrasjonen består selv når enkeltpersoner går ut av bransjen. Svaret om bevisst utvelgelse beskriver diskriminering, som er en annen mekanisme, og de øvrige beskriver godkjenningsordninger og lønnsdannelse.",
    },
    {
      question: "Hvorfor er innvandrernisjer et godt drøftingstema?",
      options: ["De er ressurs og begrensning samtidig, målt på hver sin tidshorisont", "De er entydig negative og gir derfor en klar konklusjon i drøftingen", "De er entydig positive fordi de gir rask inngang til arbeidslivet", "De forsvinner helt i andre generasjon og kan derfor avskrives"],
      explanation: "Nisjen gir rask inngang og praktisk hjelp for den som har nettverket, og kanaliserer samtidig den samme personen inn i et smalt segment med lav lønnsvekst. Dobbeltheten er poenget. Å beskrive nisjen som entydig negativ eller entydig positiv er å miste den, og konsentrasjonen forsvinner ikke automatisk mellom generasjonene.",
    },
    {
      question: "Hva er nettverksrekruttering?",
      options: ["At stillinger fylles gjennom personlige forbindelser i stedet for åpen utlysning", "At arbeidsgivere bruker eksterne rekrutteringsbyråer i stedet for å ansette på egen hånd", "At ansatte anbefaler kandidater som deretter går gjennom en vanlig utlysning", "At arbeidssøkere bruker digitale plattformer for å finne ledige stillinger"],
      explanation: "Mekanismen er at informasjonen om jobben aldri når fram til dem som står utenfor nettverket. Det skiller den fra diskriminering, der søkeren faktisk er vurdert og valgt bort. De øvrige svarene beskriver formidling gjennom byråer eller plattformer, og en anbefaling inn i en åpen prosess er noe annet enn at prosessen erstattes.",
    },
    {
      question: "Hva skiller nettverksrekruttering fra diskriminering som forklaring?",
      options: ["Ved nettverksrekruttering blir søkeren aldri vurdert i det hele tatt", "Ved nettverksrekruttering er utfallet tilfeldig og aldri systematisk", "Ved nettverksrekruttering rammes bare søkere uten formell utdanning", "Ved nettverksrekruttering er virkningen alltid mindre enn ved fordommer"],
      explanation: "Skillet ligger i om noen har vurdert søkeren: diskriminering forutsetter forskjellsbehandling av ellers like søkere, mens nettverksrekruttering stenger informasjonen ute før vurderingen. Utfallet kan likevel bli systematisk skjevt, og det gjelder også søkere med formell utdanning. Hvilken mekanisme som veier tyngst, er et empirisk spørsmål.",
    },
    {
      question: "Hva menes med mulighetsstruktur?",
      options: ["Summen av åpninger og stengsler samfunnet stiller opp for en gruppe", "Summen av de ressursene og den motivasjonen den enkelte selv har", "Rangeringen av yrker etter status i befolkningen sett under ett", "Fordelingen av inntekt mellom de rikeste og de fattigste i landet"],
      explanation: "Mulighetsstrukturen er de institusjonelle åpningene og stengslene: hvilke jobber som finnes, hvilke krav de stiller og hvor rekrutteringen foregår. Begrepet er sosiologiens motvekt mot forklaringer som stopper ved den enkeltes innsats. Yrkesprestisje og inntektsfordeling er andre størrelser.",
    },
    {
      question: "Hva skiller innvandringsregulering fra integreringspolitikk?",
      options: ["Regulering gjelder vilkårene for å komme og bli, integrering tiltakene etterpå", "Regulering gjelder arbeidsinnvandrere, mens integrering gjelder flyktninger og familie", "Regulering er statlig politikk, mens integrering er kommunenes ansvar alene", "Regulering handler om språkkrav, mens integrering handler om oppholdsrett"],
      explanation: "Regulering handler om inngangen, integreringspolitikk om tiltakene rettet mot dem som allerede er her. Feltene henger sammen gjennom sysselsettingsforutsetningen, men de er ikke det samme. De øvrige svarene deler feltene etter innvandringsgrunn, forvaltningsnivå eller virkemiddel, og ingen av delingene treffer.",
    },
    {
      question: "Hvorfor er «vellykket integrering» et måleproblem?",
      options: ["Ulike mål som sysselsetting og tilhørighet gir systematisk ulike svar", "Det finnes ingen registerdata som kan belyse integrering i Norge", "Forskerne er uenige om integrering i det hele tatt kan studeres", "Begrepet er politisk og kan derfor ikke brukes i forskning"],
      explanation: "Sysselsetting er lett å måle og finnes for hele befolkningen, mens opplevd tilhørighet ikke finnes i noe register. Operasjonaliseringen dreier derfor begrepet mot det som lar seg telle. Det finnes rikelig med registerdata, og begrepet brukes bredt i forskningen, så svarene om manglende data og uenighet om studerbarhet treffer ikke.",
    },
    {
      question: "Hva er den vanligste feilen i en drøfting av om den norske modellen fremmer integrering?",
      options: ["Å velge én side og dermed miste dobbeltheten i paradokset", "Å bruke for mange kilder slik at teksten blir uoversiktlig", "Å skrive redegjørelsen lengre enn selve drøftingsdelen", "Å bruke registerdata i stedet for kvalitative studier"],
      explanation: "Feilen er å skrive ensidig, altså å svare enten at modellen hemmer eller at den fremmer, når begge halvdelene er dokumentert. Testen er om begge sidene fortsatt står i nest siste avsnitt. Kildebruk, avsnittslengde og datatype er stilspørsmål av en helt annen vekt i vurderingen.",
    },
    {
      question: "Hvorfor er generasjon en sterk organiserende variabel i dette temaet?",
      options: ["Motstridende funn blir konsistente når de sorteres etter generasjon", "Generasjon er den eneste variabelen som er tilgjengelig i registrene", "Generasjon avgjør hvilken innvandringsgrunn en person registreres med", "Generasjon bestemmer hvilke velferdsordninger en person har rett til"],
      explanation: "Terskelfunnene og springbrettfunnene ser motstridende ut helt til de sorteres etter generasjon, og da beskriver de samme modell sett fra to posisjoner. Registrene inneholder mange andre variabler, innvandringsgrunn gjelder bare dem som selv har migrert, og rettighetene følger av medlemskap i samfunnet.",
    },
    {
      question: "Hva er forskjellen på botid og generasjon som forklaringsvariabler?",
      options: ["Botid er tid i landet for den som flyttet hit, generasjon er hvor man er født", "Botid gjelder etterkommere, mens generasjon gjelder dem som selv har migrert hit", "Botid måles i registeret, mens generasjon må kartlegges gjennom intervjuer", "Botid og generasjon måler det samme og brukes om hverandre i forskningen"],
      explanation: "Botid er tid i landet for den som selv har flyttet hit, mens generasjon skiller mellom dem som migrerte og dem som er født her. En etterkommer har ikke botid, hun har hele livet sitt i landet. Begge variablene finnes i registerdata, og de forklarer ulike ting og skal derfor ikke brukes om hverandre.",
    },
  ],
  'sos1004-2-2': [
    {
      question: "Hva kjennetegner statistisk diskriminering?",
      options: ["Gruppetilhørighet brukes som informasjonssnarvei under usikkerhet", "Arbeidsgiveren har en motvilje mot gruppen søkeren tilhører og handler på den", "Arbeidsgiveren bygger på en forestilling om gruppen som er direkte uriktig", "En nøytralt formulert regel rammer i praksis én gruppe systematisk hardere"],
      explanation: "Definisjonen er at gruppen brukes som erstatning for informasjon om individet når informasjonen er svak. Svaret om motvilje beskriver smaksdiskriminering, svaret om uriktig forestilling beskriver stereotypidiskriminering, og svaret om den nøytrale regelen beskriver indirekte diskriminering.",
    },
    {
      question: "Hva er hovedskillet mellom statistisk og smaksbasert diskriminering?",
      options: ["Mekanismen: informasjon i det ene tilfellet, preferanse i det andre", "Hvem de rammer: den ene rammer kvinner, den andre etniske minoriteter", "Rettsstillingen: den ene er lovlig i Norge, den andre er forbudt ved lov", "Tidspunktet: den ene skjer ved ansettelse, den andre ved lønnsfastsettelse"],
      explanation: "Skillet ligger i hva som driver handlingen, ikke i hvem den rammer eller når den skjer. Statistisk diskriminering springer ut av et informasjonsproblem, smaksdiskriminering av en preferanse. Typologien handler om mekanisme, ikke om lovlighet, og begge formene kan ramme hvilken som helst gruppe.",
    },
    {
      question: "Hva skiller stereotypidiskriminering fra statistisk diskriminering?",
      options: ["Om forestillingen om gruppen faktisk stemmer med virkeligheten", "Om arbeidsgiveren misliker gruppen eller er nøytralt innstilt til den", "Om forskjellsbehandlingen skjer bevisst eller helt uten bevissthet", "Om praksisen rammer et flertall eller bare et lite mindretall"],
      explanation: "Begge bruker gruppen som informasjon om individet; forskjellen er om informasjonen er korrekt. Statistisk diskriminering hviler på et gjennomsnitt som finnes, stereotypidiskriminering på et som ikke gjør det. Motvilje beskriver skillet mot smaksdiskriminering, og bevissthet og gruppestørrelse inngår ikke i typologien.",
    },
    {
      question: "En arbeidsgiver ville ansatt søkeren dersom hun hadde hatt en referanse hun stolte på. Hva peker det mot?",
      options: ["Statistisk diskriminering", "Smaksbasert diskriminering", "Stereotypidiskriminering", "Indirekte diskriminering"],
      explanation: "At mer informasjon om individet ville endret utfallet, er signaturen på et informasjonsproblem. En preferanse lar seg ikke oppveie av en referanse, og en uriktig forestilling om gruppen ville krevd korrigering av gruppebildet. Indirekte diskriminering handler ikke om vurdering av enkeltsøkere i det hele tatt.",
    },
    {
      question: "Hva betyr det at statistisk diskriminering er «rasjonell» for arbeidsgiveren?",
      options: ["At snarveien reduserer hennes usikkerhet billig, gitt informasjonen hun har", "At praksisen er faglig forsvarlig og derfor ikke regnes som diskriminering", "At arbeidsgiveren har rett i sin antakelse om den enkelte søkerens evner", "At handlingen er lovlig så lenge den bygger på korrekt gruppestatistikk"],
      explanation: "Ordet står i anførselstegn fordi det beskriver en kalkyle, ikke en dom over praksisen. Snarveien er billig for arbeidsgiveren og samtidig urettferdig for individet, som vurderes etter andres egenskaper. Å lese «rasjonell» som at praksisen er forsvarlig eller lovlig, er nettopp misforståelsen begrepet er formulert for å unngå.",
    },
    {
      question: "Hva er forskjellen på direkte og indirekte diskriminering?",
      options: ["Direkte har egenskapen som grunn, indirekte har en nøytral regel som virkning", "Direkte skjer i arbeidslivet, mens indirekte skjer i bolig- og utdanningsmarkedet", "Direkte kan bevises i retten, mens indirekte bare kan påvises statistisk", "Direkte utføres av arbeidsgiveren, mens indirekte utføres av kollegene"],
      explanation: "Direkte diskriminering har egenskapen som grunn til behandlingen. Indirekte diskriminering har en tilsynelatende nøytral regel som i realiteten stiller en gruppe dårligere, og der er det virkningen som teller. Arena, bevisform og hvem som handler er andre inndelinger som ikke definerer skillet.",
    },
    {
      question: "Hva er saklig forskjellsbehandling?",
      options: ["Ulik behandling på grunnlag som faktisk er relevante for det som avgjøres", "Ulik behandling som er tillatt fordi den rammer et lite antall personer", "Ulik behandling som skjer uten at den som handler er klar over det", "Ulik behandling som er avtalt mellom partene i arbeidslivet på forhånd"],
      explanation: "Kriteriet må være relevant for det som skal avgjøres, som når førerkort kreves til en sjåførstilling. Uten dette begrepet ville diskriminering blitt det samme som forskjell, og begrepet ville mistet sin analytiske kraft. Antall rammede, bevissthet og avtaler avgjør ikke saklighet.",
    },
    {
      question: "Hva skiller en fordom fra diskriminering?",
      options: ["Fordom er noe man har, mens diskriminering er noe man gjør", "Fordom rammer grupper, mens diskriminering rammer enkeltpersoner", "Fordom er bevisst, mens diskriminering som regel er helt ubevisst", "Fordom er et hverdagsord, mens diskriminering er en rettslig term"],
      explanation: "Fordom er en holdning, diskriminering en handling eller praksis. De henger ofte sammen, men verken forutsetter eller garanterer hverandre: statistisk diskriminering forutsetter ingen fordom, og en arbeidsgiver med fordommer kan la være å handle på dem. Nivå, bevissthet og språkbruk definerer ikke skillet.",
    },
    {
      question: "Hva er en korrespondansetest?",
      options: ["Fiktive, men realistiske søknader sendes til ekte stillinger med én variert egenskap", "Arbeidsgivere intervjues om hvordan de vurderer søkere med minoritetsbakgrunn i praksis", "Arbeidssøkere følges over tid for å kartlegge hvor mange jobber de faktisk får", "Registerdata kobles sammen for å sammenlikne sysselsetting mellom to grupper"],
      explanation: "Designet er å sende ellers identiske søknader der bare én egenskap varierer, typisk navnet, og måle hvem som blir kontaktet. Intervjuer måler hva arbeidsgivere sier, oppfølging over tid gir utfall uten kontrollert variasjon, og registerkoblinger gir korrelasjoner og ikke kausalt belegg.",
    },
    {
      question: "Hvorfor gir en korrespondansetest kausalt belegg?",
      options: ["Alt annet er holdt likt ved konstruksjon, så bare den varierte egenskapen står igjen", "Utvalget er så stort at alle tilfeldige forskjeller mellom søkerne jevner seg ut over tid", "Arbeidsgiverne vet ikke at de deltar, og svarer derfor mer ærlig enn ellers", "Studien følger de samme arbeidsgiverne gjennom flere ansettelser over tid"],
      explanation: "Kausaliteten følger av at forskeren selv har konstruert likheten mellom søknadene, slik at forskjellen i respons ikke kan skyldes noe annet enn det som ble variert. Store utvalg fjerner støy, men ikke systematiske forskjeller, og at deltakerne ikke vet noe handler om at atferden er ekte, ikke om årsak.",
    },
    {
      question: "Hva er innkallingsgapet?",
      options: ["Forskjellen mellom to ellers like søkergrupper i andelen som blir kontaktet", "Forskjellen mellom to grupper i hvor stor andel som er i arbeid til enhver tid", "Forskjellen mellom søkte og faktisk tildelte stillinger i en gitt bransje", "Forskjellen mellom antall utlyste og antall besatte stillinger i en periode"],
      explanation: "Gapet måler responsen på søknader fra ellers identiske søkere som skiller seg på én markør. Svaret om andelen i arbeid beskriver et sysselsettingsgap, som er en helt annen og langt svakere form for belegg. De øvrige svarene beskriver forhold ved stillingsmarkedet, ikke ved vurderingen av søkere.",
    },
    {
      question: "Hva er funnet i norske korrespondansetester av etnisk diskriminering?",
      options: ["Systematisk lavere innkallingsrate for minoritetsnavn i ellers like søknader", "Ingen målbar forskjell mellom søkerne når kvalifikasjonene deres holdes helt like", "Lavere innkallingsrate bare for søkere med utdanning tatt i utlandet", "Lavere innkallingsrate bare i bransjer med direkte kundekontakt til daglig"],
      explanation: "Funnet er robust og gjentar seg på tvers av bransjer, og det gjelder også søkere som er født og utdannet i Norge. Nettopp derfor kan forklaringen om utenlandsk utdanning utelukkes, og nettopp derfor er funnet ikke begrenset til bransjer med kundekontakt.",
    },
    {
      question: "Hvorfor er det viktig at innkallingsgapet også gjelder søkere født og utdannet i Norge?",
      options: ["Det utelukker manglende norske kvalifikasjoner som forklaring på forskjellen", "Det viser at diskriminering er mer utbredt blant etterkommere enn blant innvandrere", "Det betyr at statistisk diskriminering er utelukket som mulig mekanisme her", "Det gjør at funnet kan overføres direkte til lønns- og forfremmelsessituasjoner"],
      explanation: "Poenget er at en nærliggende alternativ forklaring faller bort når søkeren har hele utdanningen og erfaringen fra Norge. Funnet sier ingenting om hvilken av diskrimineringstypene som virket, og det gjelder første ansettelsessteg, ikke senere ledd i arbeidsforholdet.",
    },
    {
      question: "Hva er kontrollert variasjon i et felteksperiment?",
      options: ["At alt som kan påvirke utfallet holdes likt, mens nøyaktig én ting varieres", "At forskeren gjentar undersøkelsen flere ganger for å kontrollere resultatet", "At deltakerne fordeles tilfeldig på grupper etter at studien er avsluttet", "At de viktigste bakgrunnsvariablene kontrolleres for i den statistiske modellen"],
      explanation: "Grepet er å konstruere likhet og variere én egenskap, slik at forskjellen i utfall bare kan tilskrives den ene. Å kontrollere statistisk for bakgrunnsvariabler i etterkant er noe annet og svakere, siden uobserverte forhold står igjen. Gjentakelse og etterfølgende fordeling er ikke det designet bygger på.",
    },
    {
      question: "Hva er forskjellen på et sysselsettingsgap og et innkallingsgap som belegg?",
      options: ["Sysselsettingsgapet er en korrelasjon, mens innkallingsgapet er kausalt belegg", "Sysselsettingsgapet gjelder innvandrere, mens innkallingsgapet gjelder etterkommere", "Sysselsettingsgapet måles i survey, mens innkallingsgapet måles i registerdata", "Sysselsettingsgapet er offentlig statistikk, mens innkallingsgapet er anslag"],
      explanation: "Sysselsettingsgapet sier at gruppe og utfall henger sammen, ikke hvorfor, mens innkallingsgapet stammer fra et design der alt annet er holdt likt. Begge kan gjelde begge generasjoner, og forskjellen ligger i designet, ikke i datakilden eller i hvor offisielle tallene er.",
    },
    {
      question: "Hva kan en korrespondansetest ikke vise?",
      options: ["Hvilken av de tre diskrimineringstypene som drev beslutningen", "Om ellers like søkere behandles ulikt ved første ansettelsessteg", "Om forskjellen i respons er systematisk eller bare tilfeldig støy", "Om mønsteret gjentar seg på tvers av flere ulike bransjer"],
      explanation: "Motivet observeres aldri, bare responsen, og derfor kan ikke designet skille statistisk fra smaksbasert diskriminering. Om ellers like søkere behandles ulikt, om forskjellen er systematisk og om mønsteret gjentar seg på tvers av bransjer, er derimot nettopp det designet kan besvare.",
    },
    {
      question: "Hva er informasjonstesten i diskrimineringsforskningen?",
      options: ["Å variere hvor mye individuell informasjon søknaden gir, og se om gapet krymper", "Å informere arbeidsgiverne om studien i etterkant og be dem forklare sine egne valg", "Å måle hvor mye informasjon arbeidsgivere selv oppgir at de innhenter", "Å teste om søkerne har fått riktig informasjon om stillingen på forhånd"],
      explanation: "Resonnementet er at et gap som krymper når arbeidsgiveren får sterkere signaler om individet, peker mot et informasjonsproblem, altså statistisk diskriminering, mens et gap som holder seg peker mot en preferanse. Å spørre arbeidsgiverne i etterkant ville gjeninnført problemet designet var laget for å unngå.",
    },
    {
      question: "Hva er en indikasjon på smaksdiskriminering i en informasjonstest?",
      options: ["At gapet holder seg uendret selv når søknaden får sterkere kvalitetssignaler", "At gapet forsvinner helt så snart søkeren legger ved en god referanse fra en tidligere jobb", "At gapet varierer mye mellom bransjer med og uten kundekontakt", "At gapet er større for kvinner enn for menn i den samme bransjen"],
      explanation: "En preferanse lar seg ikke oppveie av dokumentasjon, så et gap som består tross bedre informasjon, peker mot smaksdiskriminering. At gapet forsvinner peker motsatt vei, mot et informasjonsproblem. Variasjon mellom bransjer og mellom kjønn er interessante mønstre, men de skiller ikke mekanismene.",
    },
    {
      question: "Hva fant Larsen og Di Stasio da de varierte religiøs markør i søknaden?",
      options: ["Religiøs markør har selvstendig målbar effekt på innkallingsraten", "Religiøs markør har ingen effekt når navnet holdes konstant i søknaden", "Religiøs markør virker bare i offentlig sektor og ikke i privat sektor", "Religiøs markør virker bare sammen med utenlandsk utdanningsbakgrunn"],
      explanation: "Funnet er at religion er et selvstendig diskrimineringsgrunnlag som ikke faller sammen med etnisitet, og at effekten varierer mellom grupper og kontekster. At markøren skulle være uten effekt, eller bare virke i én sektor eller sammen med utenlandsk utdanning, er nettopp det funnet motsier.",
    },
    {
      question: "Hva viser Larsen og Di Stasios funn om kategorien «minoritetsbakgrunn»?",
      options: ["At den ikke er én enhetlig egenskap, siden religion virker selvstendig", "At den er godt egnet som samlekategori i all diskrimineringsforskning", "At den bør erstattes helt av landbakgrunn i statistiske analyser", "At den bare har betydning for førstegenerasjons innvandrere i arbeid"],
      explanation: "Poenget er at etnisitet og religion er analytisk atskilte grunnlag som ofte opptrer sammen, og at presisjonen gir bedre drøftinger. Funnet gjør ikke samlekategorien ubrukelig og sier ingenting om at landbakgrunn alene skulle være tilstrekkelig eller at effekten er begrenset til én generasjon.",
    },
    {
      question: "Hva menes med første ansettelsessteg?",
      options: ["Overgangen fra innsendt søknad til kontakt eller innkalling til intervju", "Den første arbeidsdagen etter at kontrakten mellom partene er signert", "Det tidspunktet arbeidsgiveren bestemmer seg for å lyse ut stillingen", "Prøvetiden, der arbeidsforholdet kan avsluttes på kortere varsel"],
      explanation: "Det er dette ene punktet korrespondansetesten måler, og derfor er «diskriminering ved første ansettelsessteg» en mer presis påstand enn «diskriminering». Utlysningstidspunkt, oppstart og prøvetid ligger henholdsvis før og etter det leddet designet dekker.",
    },
    {
      question: "Hvorfor kompliserer selvseleksjon målingen av diskriminering?",
      options: ["Søknader som aldri blir sendt, kommer heller aldri inn i undersøkelsen", "Søkere som velger bort en bransje, blir talt dobbelt i registerstatistikken", "Arbeidsgivere velger bort søkere før søknadene i det hele tatt registreres", "Forskeren kan ikke vite hvilke stillinger som ble lyst ut i perioden"],
      explanation: "Selvseleksjon skjer utenfor designet: den som forventer motstand og lar være å søke, blir aldri observert. Det kan bety at den samlede virkningen er større enn innkallingsgapet alene tilsier. De øvrige svarene beskriver tellefeil og arbeidsgiveratferd, ikke søkerens eget bortvalg.",
    },
    {
      question: "Hva er forskjellen på intern og ekstern validitet i denne sammenhengen?",
      options: ["Intern gjelder om studien måler riktig, ekstern gjelder hvor langt funnet rekker", "Intern gjelder studier gjort i Norge, mens ekstern gjelder studier gjort i andre land", "Intern gjelder kvantitative data, mens ekstern gjelder kvalitative data", "Intern gjelder forskerens egen vurdering, ekstern gjelder fagfellevurdering"],
      explanation: "Intern validitet handler om at målingen er riktig innenfor eget oppsett, og der står korrespondansetesten sterkt. Ekstern validitet handler om overførbarhet, og der er den svakere, siden den dekker utlyste stillinger og bare første ansettelsessteg. Land, datatype og vurderingsprosess er andre skiller.",
    },
    {
      question: "Hva skiller individuell fra strukturell diskriminering?",
      options: ["Individuell har en identifiserbar handlende, strukturell virker gjennom ordninger", "Individuell rammer én person, mens strukturell rammer hele grupper samtidig", "Individuell er alltid bevisst, mens strukturell alltid er utilsiktet fra alle parter", "Individuell er ulovlig, mens strukturell ikke er regulert av lovverket"],
      explanation: "Skillet går på om det finnes en handling og en handlende å peke på, eller om skjevheten ligger i regler, rutiner og rekrutteringsveier. Individuell diskriminering kan ramme systematisk og mange, og bevissthet og rettslig regulering er andre dimensjoner som ikke definerer skillet.",
    },
    {
      question: "Hvordan kan statistisk diskriminering virke selvforsterkende?",
      options: ["Uteblitt innkalling gir mindre erfaring, som forskyver gruppegjennomsnittet", "Arbeidsgivere kopierer hverandres praksis gjennom bransjeorganisasjonene", "Søkerne tilpasser søknadene sine slik at forskjellene mellom dem øker", "Myndighetene registrerer gruppen i statistikk som arbeidsgiverne leser"],
      explanation: "Mekanismen er at snarveien bidrar til å skape det gjennomsnittet den bygger på, gjennom mange små og hver for seg forståelige beslutninger. Det gjør skillet mellom «riktig» og «feil» gjennomsnitt mindre stabilt. De øvrige svarene beskriver spredning og registrering, ikke en tilbakevirkning på gruppens faktiske erfaring.",
    },
    {
      question: "Hva er det faglig dekkede svaret på hvor mye diskriminering forklarer av etterkommeres arbeidsmarkedsutfall?",
      options: ["Delvis: diskriminering er dokumentert, men andre mekanismer virker samtidig", "Alt: utfallsforskjellene mellom gruppene skyldes i hovedsak forskjellsbehandling", "Ingenting: forskjellene forsvinner helt når man kontrollerer for utdanningsnivået deres", "Det er umulig å si noe om, siden motivet bak beslutningene ikke kan måles"],
      explanation: "Innkallingsgapet er kausalt dokumentert, samtidig som etterkommernes mobilitet er reell og utfallene spriker mer mellom grupper enn diskrimineringsfunnene alene kan bære. Begge ytterpunktene lar seg motbevise, og at motivet ikke kan måles hindrer ikke at forskjellsbehandlingen er påvist.",
    },
    {
      question: "Hva er integreringsparadokset?",
      options: ["Etterkommerne viser tydelig mobilitet og møter dokumentert diskriminering samtidig", "Innvandrere har lavere sysselsetting samtidig som de har høyere utdanning", "Velferdsstaten er en terskel for nyankomne og et springbrett for etterkommerne", "Diskriminering er ulovlig samtidig som den er godt dokumentert i forskningen"],
      explanation: "Paradokset er at mobiliteten fra foreldregenerasjonen er betydelig og at forskjellsbehandlingen av ellers like søkere er dokumentert, samtidig. Terskelen og springbrettet beskriver derimot velferdsstatsparadokset, som er et annet av bokas paradokser og hører til kapitlet om innvandring og velferdsstat.",
    },
    {
      question: "Hvordan henger diskriminering og rasisme sammen?",
      options: ["Overlappende, men ikke identiske: handling og praksis mot meningssystem", "Identiske begreper som brukes om hverandre i norsk forskningslitteratur", "Helt atskilte fenomener som ikke har noen forbindelse med hverandre", "Rasisme er den juridiske termen, mens diskriminering er den sosiologiske"],
      explanation: "Diskriminering er en handling eller praksis med målbart utfall, mens rasisme er et meningssystem som kan virke både gjennom personer og gjennom institusjoner. Diskriminering kan forekomme uten rasisme, og de to begrepene skal begge holdes i live i en besvarelse. Skillet er ikke juridisk mot sosiologisk.",
    },
    {
      question: "Hvordan skal anonymiserte søknader behandles i en faglig besvarelse?",
      options: ["Som en posisjon med argumenter for og mot, ikke som en følge av funnet", "Som den nødvendige konsekvensen av at innkallingsgapet er dokumentert", "Som et tiltak forskningen har vist at ikke har noen effekt overhodet", "Som et rent juridisk spørsmål som ligger utenfor sosiologiens område"],
      explanation: "Et forskningsfunn og et spørsmål om hva vi bør gjøre er to ulike slags utsagn, og et tiltak følger ikke automatisk av et funn. Skriv derfor at tiltaket har vært foreslått, og gjengi argumentene på begge sider. Å presentere det som en nødvendig konsekvens eller som virkningsløst ville vært to speilvendte overtolkninger.",
    },
    {
      question: "Hvilken feil begår en kandidat som skriver at et sysselsettingsgap viser at det diskrimineres?",
      options: ["Sprang fra korrelasjon til årsak uten et design som holder alt annet likt", "Bruk av registerdata i en oppgave der bare eksperimentelle studier er relevante", "Sammenblanding av direkte og indirekte diskriminering i samme setning", "Bruk av en kilde som ikke står oppført i emnets offisielle pensumliste"],
      explanation: "Et gap er en utfallsforskjell som kan skyldes kvalifikasjoner, helse, nettverk eller diskriminering, og å hoppe rett til årsak er å hoppe over hele bevisbyrden. Registerdata er helt legitime som utgangspunkt, og feilen har ingenting med typologien eller kildevalget å gjøre.",
    },
    {
      question: "Hva er «navnet som markør» i et korrespondansedesign?",
      options: ["Et signal arbeidsgiveren leser, ikke en egenskap ved søkeren som person", "En kontrollvariabel som holdes konstant mellom de to søkerprofilene", "En metode for å måle hvor godt arbeidsgivere husker enkeltsøkere", "En juridisk kategori som avgjør hvilket vern søkeren har mot avslag"],
      explanation: "Studien måler ikke hva søkeren er, men hva arbeidsgiveren antar ut fra ett signal i søknaden, og det er nettopp den antakelsen som driver beslutningen. Navnet er den varierte egenskapen og altså ikke holdt konstant, og markøren er et forskningsgrep, ikke en rettslig kategori.",
    },
  ],
  'sos1004-2-3': [
    {
      question: "Hva er sosial mobilitet?",
      options: ["Bevegelse mellom sosiale posisjoner målt i utdanning, yrke eller inntekt", "Flytting mellom kommuner og landsdeler i løpet av et yrkesaktivt liv her", "Endring i en gruppes samlede inntektsnivå fra ett tiår til det neste", "Bevegelse mellom ulike arbeidsgivere innenfor den samme bransjen"],
      explanation: "Mobilitet betyr her bevegelse i det sosiale rommet, ikke i landskapet. Svaret om flytting forveksler sosial med geografisk mobilitet, og de to øvrige beskriver inntektsutvikling og jobbskifte, som er andre størrelser enn bevegelse mellom sosiale posisjoner.",
    },
    {
      question: "Hva er absolutt mobilitet?",
      options: ["Hvor mange som faktisk beveger seg oppover eller nedover i hierarkiet", "Hvordan sjansene til å nå en posisjon fordeler seg mellom ulike utgangspunkt", "Hvor stor andel som ender i nøyaktig samme yrke som sine egne foreldre", "Hvor stor inntektsforskjellen er mellom den øverste og den nederste tidelen"],
      explanation: "Absolutt mobilitet teller bevegelser, uavhengig av hvordan sjansene fordeler seg. Svaret om sjansefordeling beskriver relativ mobilitet, som er det viktigste nabobegrepet. Andel i samme yrke beskriver immobilitet, og inntektsspredning er et ulikhetsmål, ikke et mobilitetsmål.",
    },
    {
      question: "Hva er relativ mobilitet?",
      options: ["Hvor mye utgangspunktet fortsatt betyr for sjansen til å nå en posisjon", "Hvor mange som beveger seg oppover når strukturen i arbeidsmarkedet endrer seg", "Hvor stor andel av en generasjon som tar lengre utdanning enn foreldrene sine", "Hvor raskt en person beveger seg oppover i løpet av sitt eget yrkesliv"],
      explanation: "Relativ mobilitet måler sjanselikhet, altså hvor sterkt utgangspunktet bestemmer utfallet. Svarene som teller hvor mange som beveger seg oppover, beskriver absolutt mobilitet, og svaret om hvor raskt en person stiger i eget yrkesliv beskriver mobilitet innenfor et livsløp i stedet for mellom generasjoner.",
    },
    {
      question: "Hvordan kan et samfunn ha høy absolutt og stabil relativ mobilitet samtidig?",
      options: ["Strukturen endrer seg, så mange flytter oppover uten at sjansene omfordeles", "Befolkningen vokser, slik at det blir flere personer i alle posisjoner samtidig", "Utdanningsnivået synker, slik at konkurransen om de beste jobbene blir mindre", "Inntektsforskjellene øker, slik at avstanden mellom posisjonene blir tydeligere"],
      explanation: "Når det blir flere jobber som krever høy utdanning og færre ufaglærte jobber, må mange bevege seg oppover uten at noen bytter plass. Sjansefordelingen kan da stå helt stille mens bevegelsen er stor. Befolkningsvekst, utdanningsnivå og inntektsspredning forklarer ikke denne kombinasjonen.",
    },
    {
      question: "Hva er sosial reproduksjon?",
      options: ["At sosiale posisjoner videreføres fra en generasjon til den neste", "At en gruppe vokser i antall gjennom høyere fruktbarhet over tid", "At utdanningssystemet gjentar det samme pensumet på flere nivåer", "At arbeidsmarkedet gjenskaper de samme yrkene i hver ny konjunktur"],
      explanation: "Reproduksjon er mobilitetens motstykke: der reproduksjonen er sterk, er den relative mobiliteten lav. Svaret om fruktbarhet forveksler sosial reproduksjon med biologisk, og de to øvrige beskriver forhold ved pensum og konjunkturer som ikke har med posisjonsoverføring å gjøre.",
    },
    {
      question: "Hvorfor bryter etterkommernes utdanningsdriv med vanlig mobilitetsteori?",
      options: ["De tar lengre utdanning enn foreldrenes ressursnivå skulle tilsi", "De velger de samme yrkene som foreldrene sine i uvanlig stor grad", "De begynner i høyere utdanning senere enn jevnaldrende gjør ellers", "De fullfører videregående i samme takt som majoritetsbefolkningen"],
      explanation: "Reproduksjonsteorien forutsier at barn av foreldre med kort utdanning selv tar kort utdanning, fordi ressursene og systemkjennskapen mangler. Utdanningsdrivet er interessant nettopp fordi det bryter med den forutsigelsen. De øvrige svarene beskriver mønstre som enten er det motsatte av funnet eller ikke bryter med noen teori.",
    },
    {
      question: "Hvilken kombinasjon forklarer utdanningsdrivet i mange innvandrerfamilier?",
      options: ["Høye aspirasjoner kombinert med begrensede ressurser", "Høye aspirasjoner kombinert med svært store ressurser", "Lave aspirasjoner kombinert med begrensede ressurser", "Lave aspirasjoner kombinert med god systemkjennskap"],
      explanation: "Kombinasjonen er uvanlig i mobilitetsforskningen, som ellers finner at aspirasjoner og ressurser følger hverandre, og den gir et annet utdanningsløp enn ressursnivået alene skulle tilsi. De øvrige kombinasjonene beskriver enten den vanlige samvariasjonen eller mønstre som ikke ville gitt et utdanningsdriv.",
    },
    {
      question: "Hva menes med seleksjon blant migranter?",
      options: ["At de som migrerer ikke er et tilfeldig utvalg av befolkningen de kom fra", "At myndighetene velger ut hvem som får opphold ut fra kompetansebehov", "At arbeidsgivere velger bort søkere som har innvandret som voksne", "At migranter velger å bosette seg der andre fra samme land allerede bor"],
      explanation: "Migrasjon krever ressurser, informasjon og som regel et nettverk, så gruppen som flytter skiller seg fra dem som blir igjen. Svaret om myndighetenes utvelgelse beskriver innvandringsregulering, svaret om arbeidsgivere beskriver diskriminering, og det siste beskriver bosettingsmønstre.",
    },
    {
      question: "Hvorfor er seleksjon relevant når man tolker etterkommeres mobilitet?",
      options: ["Foreldrenes posisjon i Norge kan undervurdere familiens posisjon før migrasjonen", "Foreldrenes posisjon i Norge er den eneste opplysningen registrene mangler helt", "Seleksjonen gjør at etterkommere oftere faller fra i videregående opplæring", "Seleksjonen betyr at alle migranter har høyere utdanning enn dem de forlot"],
      explanation: "En del av det som ser ut som oppsiktsvekkende mobilitet, kan være gjenvinning av en posisjon familien hadde før migrasjonen, blant annet fordi utdanning tatt i utlandet ofte ikke ble godkjent. Foreldrenes yrke i Norge finnes derimot i registrene, seleksjonen går ikke alltid samme vei, og frafall er en annen mekanisme.",
    },
    {
      question: "Hva er den viktigste styrken ved registerdata som design?",
      options: ["Dekningen er tilnærmet fullstendig og kan følges over lang tid", "Forskeren kan variere én egenskap og holde alt annet helt likt", "Deltakerne vet ikke at de studeres og oppfører seg derfor naturlig", "Utvalget trekkes tilfeldig, slik at resultatene kan generaliseres trygt"],
      explanation: "Registerdata dekker hele befolkningen og kan kobles over tid, uten frafall slik utvalgsundersøkelser har. Kontrollert variasjon er derimot felteksperimentets grep, og siden registerdata er observasjonsdata gir de korrelasjoner og ikke kausalt belegg. Det er ikke et trukket utvalg i det hele tatt.",
    },
    {
      question: "Hva finner registerstudier av etterkommeres utdanning og yrke i Norge?",
      options: ["Betydelig oppadgående mobilitet fra innvandrergenerasjonen", "Ingen målbar bevegelse i forhold til foreldrenes utdanningsnivå", "Nedadgående mobilitet i de fleste gruppene som er undersøkt", "Bevegelse oppover kun blant dem med foreldre fra Europa"],
      explanation: "Funnet er at utdanningsnivået ligger langt over foreldrenes og at yrkesposisjonene følger etter, med et sterkt utdanningsdriv. Bevegelsen er altså både reell og rask. At det skulle være stillstand, tilbakegang eller bevegelse bare i én gruppe, er nettopp det funnet motsier.",
    },
    {
      question: "Hva er forholdet mellom utdanningsmobilitet og yrkesmobilitet blant etterkommere?",
      options: ["Utdanningsmobiliteten er sterkere enn yrkesmobiliteten", "Yrkesmobiliteten er sterkere enn utdanningsmobiliteten", "De to formene er like sterke når man måler dem samlet", "Yrkesmobiliteten kan ikke måles med tilgjengelige registerdata"],
      explanation: "Mobiliteten er tydeligst i utdanning og svakere i yrke, og forskjellen er selve pekepinnen på hvor terskelen ligger: der etterkommeren selv presterer går det bra, der en annen skal vurdere henne oppstår gapet. Begge formene lar seg måle i registerdata.",
    },
    {
      question: "Hva er det etniske mobilitetsparadokset?",
      options: ["Høyere utdanning enn ressursnivået tilsier, uten full uttelling i arbeidsmarkedet", "Sterk mobilitet i første generasjon som avtar kraftig i andre generasjon", "Høyere sysselsetting enn majoritetsbefolkningen tross lavere utdanning", "Store forskjeller i inntekt mellom etterkommere med samme utdanning"],
      explanation: "Paradokset har to ledd som må stå sammen: oppover i utdanningssystemet gjør gruppen det bedre enn teorien forutsier, og ut i arbeidsmarkedet gjør den det dårligere enn utdanningsnivået skulle tilsi. De øvrige svarene beskriver mønstre som verken er funnet eller utgjør et paradoks.",
    },
    {
      question: "Hva er integreringsparadokset?",
      options: ["Etterkommerne viser tydelig mobilitet og møter dokumentert diskriminering samtidig", "Velferdsstaten er en terskel for nyankomne og et springbrett for etterkommerne", "Innvandrere har både høyere utdanning og lavere sysselsetting enn majoriteten", "Integrering går raskt i utdanning men langsomt i språk og kulturell tilpasning"],
      explanation: "De to funnene måler mot ulike sammenlikningsgrunnlag og gjelder samtidig: mobiliteten måles mot foreldregenerasjonen, diskrimineringen mot jevnaldrende med samme kvalifikasjoner. Terskelen og springbrettet beskriver derimot velferdsstatsparadokset, som er et annet av bokas paradokser.",
    },
    {
      question: "Hvorfor er integreringsparadokset ikke en selvmotsigelse?",
      options: ["De to funnene måles mot hvert sitt sammenlikningsgrunnlag", "Det ene funnet gjelder innvandrere og det andre gjelder etterkommere", "Det ene funnet er nyere og har erstattet det eldre i forskningen", "Det ene funnet gjelder menn og det andre gjelder kvinner i gruppen"],
      explanation: "Mobiliteten måles mot foreldregenerasjonen, mens diskrimineringen måles mot jevnaldrende med samme kvalifikasjoner. Det er to spørsmål med hvert sitt svar. Begge funnene gjelder etterkommere, begge står ved lag, og ingen av dem er begrenset til ett kjønn.",
    },
    {
      question: "Hvilke tre regler gjelder for å bruke et paradoks riktig i en drøfting?",
      options: ["Bær det gjennom hele teksten, gi hver side et funn, og konkluder likevel", "Nevn det i innledningen, gjenta det i konklusjonen, og unngå å ta stilling", "Presenter én side først, avvis den andre, og begrunn avvisningen grundig", "Beskriv begge sider kort, og la leseren selv avgjøre hva som veier tyngst"],
      explanation: "Paradokset er en akse gjennom hele drøftingen, hver side må ha sitt eget funn, og landingen kan være skarp så lenge vektingen begrunnes. Å bare nevne det i innledning og konklusjon gjør det til en frase, og å avvise den ene siden er nettopp å miste dobbeltheten.",
    },
    {
      question: "Hva er det faglig dekkede svaret på hvor mye diskriminering forklarer av etterkommeres arbeidsmarkedsutfall?",
      options: ["Delvis, fordi flere mekanismer virker samtidig ved siden av diskriminering", "Alt, fordi innkallingsgapet er kausalt dokumentert i norske felteksperimenter", "Ingenting, fordi forskjellene forsvinner når man kontrollerer for utdanning", "Umulig å si, fordi motivet bak arbeidsgivernes beslutninger ikke kan måles"],
      explanation: "Innkallingsgapet er kausalt dokumentert, og samtidig spriker utfallene mellom grupper mer enn diskrimineringsfunnene alene kan bære. Begge ytterpunktene lar seg motbevise, og at motivet ikke kan måles hindrer ikke at selve forskjellsbehandlingen er påvist.",
    },
    {
      question: "Hvorfor er innkallingsgapet særlig tungtveiende når det gjelder etterkommere?",
      options: ["Forklaringen om manglende norske kvalifikasjoner er utelukket ved konstruksjon", "Etterkommere søker på flere stillinger enn andre grupper gjør i gjennomsnitt", "Gapet er dokumentert som klart større for etterkommere enn for innvandrere", "Etterkommere er den eneste gruppen som er undersøkt med dette designet her"],
      explanation: "Etterkommere er født og utdannet i Norge, så forklaringene som virker for førstegenerasjon faller bort: ikke godkjent utdanning, manglende språk eller avbrudd i yrkeslivet. De øvrige svarene beskriver søkeatferd og undersøkelsesomfang, som ikke er det som gjør funnet vanskelig å bortforklare.",
    },
    {
      question: "Hva menes med «den usynlige andregenerasjonen»?",
      options: ["At etterkommere som lykkes i liten grad blir synlige i offentligheten og i toppstillinger", "At etterkommere ikke registreres som egen kategori i offentlig statistikk i Norge", "At etterkommere sjelden deltar i frivillige organisasjoner og i lokalpolitikken", "At etterkommere velger yrker der de arbeider utenfor offentlighetens søkelys"],
      explanation: "Uttrykket har to lag: suksesshistoriene preger ikke den offentlige samtalen, og gruppen er underrepresentert i synlige posisjoner tross høyt utdanningsnivå. Etterkommere er en egen kategori i statistikken, og poenget handler ikke om yrkesvalg eller organisasjonsdeltakelse.",
    },
    {
      question: "Hva finner Friberg om tilpasning i andre generasjon?",
      options: ["Tilpasningen er selektiv og går ulikt fort på ulike livsområder", "Tilpasningen er total og fullføres i løpet av én enkelt generasjon", "Tilpasningen uteblir, og verdiene forblir som i foreldregenerasjonen", "Tilpasningen går raskest der foreldrene har høyest utdanningsnivå"],
      explanation: "Orienteringene beveger seg tydelig i retning av jevnaldrende i majoritetsbefolkningen på noen områder, mens tilknytningen til foreldrenes bakgrunn består på andre. Verken full assimilering eller fravær av endring beskriver funnbildet, og tempoet varierer mellom grupper og livsområder.",
    },
    {
      question: "Hva viser IKKE Fribergs funn om verdiendring?",
      options: ["At verdiendring i seg selv gir bedre utfall i arbeidsmarkedet", "At tilpasningen går ulikt fort på ulike områder av livet", "At orienteringene nærmer seg majoritetsungdommens på noen felt", "At tilknytningen til foreldrenes bakgrunn består på andre felt"],
      explanation: "Å anta at det å bli mer lik majoriteten i seg selv gir uttelling, ville vært å smugle inn en assimileringsantakelse — og den er nettopp det innkallingsgapet gjør vanskelig å opprettholde. De øvrige påstandene er derimot beskrivelser av det funnet faktisk viser.",
    },
    {
      question: "Hvorfor er gruppens heterogenitet mer enn et forbehold?",
      options: ["Er variasjonen innad større enn forskjellen utad, er kategorien en samlepost", "Er variasjonen innad stor, kan kategorien ikke brukes i forskning i det hele tatt", "Er variasjonen innad stor, betyr det at registerdataene har målefeil i seg", "Er variasjonen innad stor, gjelder diskrimineringsfunnene bare enkelte grupper"],
      explanation: "Når spriket innad overstiger forskjellen mot majoritetsbefolkningen, forteller gjennomsnittet lite, og kategorien beskriver snarere enn forklarer. Kategorien er likevel nyttig fordi den fanger noe felles, og variasjon er ikke det samme som målefeil eller som at funnene bare gjelder noen.",
    },
    {
      question: "Hva er kohortpoenget om etterkommere i Norge?",
      options: ["Gruppen er ung, så et øyeblikksbilde kan ikke skille alder fra barrierer", "Gruppen er liten, så statistiske analyser blir upresise for de fleste land", "Gruppen er ny, så registerdata finnes bare for de siste fem årgangene", "Gruppen er spredt, så geografiske sammenlikninger blir lite pålitelige"],
      explanation: "Toppen av et karriereløp nås sent, så underrepresentasjon i lederstillinger blant en gruppe der de fleste er unge, er delvis en alderseffekt. Poenget er ikke at underrepresentasjonen forsvinner av seg selv, men at et øyeblikksbilde ikke kan skille de to årsakene fra hverandre.",
    },
    {
      question: "Hvorfor virker kjønn og minoritetsbakgrunn sammen og ikke bare ved siden av hverandre?",
      options: ["Kombinasjonen gir en egen posisjon, ikke summen av to uavhengige hindre", "Kjønn er alltid den sterkeste av de to dimensjonene i norsk arbeidsliv", "Minoritetsbakgrunn har bare betydning for kvinner og ikke for menn", "De to dimensjonene måles med det samme spørsmålet i registerdataene"],
      explanation: "Dette er kjernen i det interseksjonelle blikket: dimensjonene skaper en egen kombinert posisjon i stedet for å legges sammen. At den ene alltid dominerer, eller at bakgrunn bare betyr noe for ett kjønn, er nettopp de forenklingene begrepet er formulert mot.",
    },
    {
      question: "Hva er den enkleste motgiften mot å svare på nabospørsmålet i denne oppgavetypen?",
      options: ["Én setning tidlig som sier hvilken betydning du legger i nøkkelordet", "En lengre innledning som gjør rede for hele forskningsfeltets historie", "En konklusjon som oppsummerer alle momentene som er nevnt underveis", "En disposisjon som følger pensumlitteraturens egen rekkefølge tett"],
      explanation: "Å si tidlig hva «muligheter» eller «utfall» skal bety i ditt svar, gjør at hele teksten svarer på det spørsmålet som faktisk ble stilt. Lange innledninger er derimot tidsfellen, og verken en oppsummerende konklusjon eller pensumrekkefølgen løser problemet med hva svaret handler om.",
    },
    {
      question: "Hvordan bør det komparative poenget om integrering brukes i et langsvar?",
      options: ["Som et kort kritisk sluttgrep, ikke som en del av redegjørelsen", "Som hovedstrukturen i drøftingen, med ett land per hovedavsnitt", "Som innledning, for å plassere det norske tilfellet i en større ramme", "Som erstatning for de norske funnene der disse er usikre eller mangler"],
      explanation: "At målestokken for vellykket integrering varierer mellom nasjonale forskningstradisjoner, er et kritisk poeng om begrepet, og to setninger til slutt gjør jobben. Å bygge hele drøftingen eller innledningen på komparasjon er en teorihistorisk omvei som spiser av tiden drøftingen trenger.",
    },
  ],
  'sos1004-2-4': [
    {
      question: "Hva kjennetegner biologisk rasisme?",
      options: ["Mennesker deles inn i raser med medfødte egenskaper som rangeres i et hierarki", "Kultur og religion framstilles som uforanderlige kjennetegn ved en hel gruppe", "Ulikhet er innebygd i institusjonenes rutiner uavhengig av holdningene der", "Arbeidsgivere bruker gruppetilhørighet som informasjonssnarvei under usikkerhet"],
      explanation: "Biologisk rasisme begrunner rangeringen av grupper med arvelige, medfødte egenskaper. Beskrivelsen av kultur som uforanderlig er kulturell eller ny rasisme, der biologien nettopp er byttet ut med kultur. Rutinesvaret beskriver strukturell rasisme, og informasjonssnarveien er statistisk diskriminering, som ikke forutsetter noe hierarki i det hele tatt.",
    },
    {
      question: "Hva kjennetegner kulturell rasisme, også kalt ny rasisme?",
      options: ["Kultur eller religion framstilles som uforanderlig og underlegen for hele gruppen", "Grupper rangeres eksplisitt etter antatte arvelige og medfødte egenskaper", "Systematisk skjeve utfall produseres av institusjonenes egne rutiner uten uttalt hensikt", "Bestemte grupper holdes atskilt fra majoriteten i bosted og arbeidsmarked"],
      explanation: "Kulturell rasisme bytter ut den biologiske begrunnelsen med en kulturell, men beholder tanken om at egenskapen er uforanderlig og gjelder hele gruppen. Svaret om arvelige egenskaper beskriver den eldre, biologiske formen. Rutinesvaret beskriver strukturell rasisme, og atskillelse er segregering, som er et beskrivende begrep om avstand og ikke en rasismeforståelse.",
    },
    {
      question: "Hva kjennetegner strukturell rasisme?",
      options: ["Systematisk ulikhet innebygd i institusjoner og rutiner, uavhengig av holdninger", "Negative holdninger til en gruppe som deles av mange i befolkningen samtidig", "Bevisst forskjellsbehandling utført av ledere som ønsker et bestemt resultat", "Politisk mobilisering mot en minoritet med utgangspunkt i kulturell ulikhet"],
      explanation: "Poenget med strukturell rasisme er at rasismen sitter i mønsteret og ikke i hodene: mekanismen virker også der ingen har rasistiske holdninger. Svarene om utbredte holdninger og bevisst forskjellsbehandling tester nettopp den individorienterte forståelsen, der det må finnes en aktør med en hensikt. Politisk mobilisering er et annet fenomen enn en institusjonell mekanisme.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom rasisme og diskriminering som begreper?",
      options: ["Rasisme er et meningssystem, mens diskriminering er en handling og et utfall", "Rasisme er et utfall som kan måles, mens diskriminering er en forestilling", "Rasisme gjelder hudfarge, mens diskriminering gjelder religion og språk", "Rasisme er et rettslig begrep, mens diskriminering er et rent faglig begrep"],
      explanation: "Diskriminering spør hva som skjedde, rasisme spør hvilken forståelse av mennesker som ligger under. Svaret som snur de to på hodet er den vanligste forvekslingen. Begrepene er heller ikke fordelt på hvert sitt grunnlag, og det er diskriminering som er rettslig regulert i Norge, ikke omvendt.",
    },
    {
      question: "Hva menes med rasialisering?",
      options: ["Prosessen der ytre kjennetegn gjøres til tegn på en antatt felles natur", "Prosessen der en minoritet gradvis blir kulturelt lik majoritetsbefolkningen", "Prosessen der myndighetene registrerer befolkningen etter rasekategorier", "Prosessen der en gruppe organiserer seg politisk rundt sin egen bakgrunn"],
      explanation: "Rasialisering peker på at kategorien blir laget gjennom sosial praksis, ikke at den ligger der på forhånd. Svaret om kulturell tilnærming beskriver assimilering. Registrering av kategorier er et forvaltningsspørsmål som skiller de nasjonale forskningstradisjonene, og politisk organisering er noe helt annet enn å bli tilskrevet en natur utenfra.",
    },
    {
      question: "Hva betyr det at «rase» i samfunnsforskningen behandles som en sosial konstruksjon?",
      options: ["At kategorien er skapt sosialt, men får reelle konsekvenser for folks liv", "At kategorien er innbilt og derfor uten praktisk betydning i samfunnet", "At kategorien har et biologisk grunnlag som forskningen ennå ikke kjenner", "At kategorien bare kan brukes i land som registrerer den i sin statistikk"],
      explanation: "En sosial konstruksjon er ikke det samme som noe innbilt: penger og statsborgerskap er også konstruksjoner med store konsekvenser. At kategorien mangler biologisk grunnlag er nettopp poenget, ettersom den genetiske variasjonen innad i gruppene er større enn mellom dem. Bruken av begrepet er heller ikke avhengig av at staten registrerer det.",
    },
    {
      question: "Hva er den analytiske forskjellen mellom etnisitet og rasekategorien?",
      options: ["Etnisitet peker på kultur og opphav, rasekategorien på antatt medfødte trekk", "Etnisitet peker på medfødte trekk, rasekategorien på kultur og livsstil", "Etnisitet gjelder minoriteter, mens rasekategorien også gjelder majoriteten", "Etnisitet er et rettslig begrep, mens rasekategorien er et statistisk begrep"],
      explanation: "Etnisitet handler om felles opphav, språk og kulturell praksis, mens rasekategorien tilskriver gruppen uforanderlige og medfødte kjennetegn. Svaret som bytter om på de to er den nære fellen. Begge kategoriene er dessuten relasjonelle og gjelder majoritet og minoritet like mye, og ingen av dem er avgrenset til jus eller statistikk.",
    },
    {
      question: "Hva er hovedpoenget i påstanden om nasjonale forskningstradisjoner?",
      options: ["At landets historie og forvaltningspraksis former hvilke begreper forskningen bruker", "At forskere i ulike land er uenige med hverandre fordi de leser helt ulik faglitteratur", "At rasisme faktisk arter seg helt forskjellig i ulike deler av verden", "At internasjonale sammenlikninger av rasisme ikke lar seg gjennomføre"],
      explanation: "Påstanden gjelder kategoriene selv: der staten har registrert rasekategorier i lang tid, ligger begrepet klart til bruk, og der det er fjernet fra lovverket, må forskningen finne andre ord. Det er noe annet enn at forskere er ulikt orientert eller at fenomenet varierer. Poenget utelukker heller ikke sammenlikning, men forklarer hvorfor sammenlikning krever varsomhet.",
    },
    {
      question: "Hva kjennetegner den franske republikanske tradisjonen i denne sammenhengen?",
      options: ["Staten forholder seg til borgere og registrerer i liten grad gruppetilhørighet", "Staten registrerer gruppetilhørighet for å kunne måle ulikhet mellom grupper", "Staten har egen lovgivning om race relations og krav om etnisk rapportering", "Staten anerkjenner minoriteter som egne rettssubjekter med kollektive rettigheter"],
      explanation: "Fransk republikansk universalisme innebærer at borgeren møtes som individ, at rasekategorier er fjernet fra lovtekster, og at etnisk registrering i offentlig statistikk er svært begrenset. Svaret om registrering for å måle ulikhet beskriver den amerikanske posisjonen, og race relations-lovgivningen er britisk. Kollektive rettigheter for grupper er nærmest det motsatte av modellen.",
    },
    {
      question: "Hva kjennetegner den amerikanske forskningstradisjonen på dette feltet?",
      options: ["Rase brukes som sentral analytisk kategori og registreres i offentlig statistikk", "Rase er fjernet fra lovtekster og registreres ikke i offentlig statistikk", "Rasisme studeres først og fremst som et spørsmål om innvandring og botid", "Rasisme studeres der nesten utelukkende gjennom felteksperimenter i arbeidsmarkedet"],
      explanation: "Bakgrunnen for den amerikanske tradisjonen er slaveri, formell segregeringslovgivning og folketellinger som lenge har registrert rasekategorier, noe som gjør ulikhet målbar langs kategorien. Svaret om at kategorien er fjernet beskriver den franske modellen. Innvandring og botid er en annen analyseramme, og felteksperimentet er en metode som brukes i flere tradisjoner.",
    },
    {
      question: "Hva har den britiske tradisjonen særlig bidratt med til rasismebegrepet?",
      options: ["Begrepet institusjonell rasisme, kjent fra en offentlig granskning av politiet", "Begrepet rasialisering, utviklet for å beskrive hvordan kategorier skapes", "Begrepet fargeblindhet, utviklet som et prinsipp for statens møte med borgeren", "Begrepet statistisk diskriminering, utviklet i økonomisk forskning på arbeidsmarkedet"],
      explanation: "Institusjonell rasisme i dagens betydning ble allment kjent gjennom en britisk offentlig granskning av politiets arbeid på slutten av 1990-tallet. Rasialisering er et bredere begrep uten samme nasjonale opphav, fargeblindhet som statsprinsipp hører til den franske modellen, og statistisk diskriminering kommer fra en helt annen faglig tradisjon.",
    },
    {
      question: "Hva er forskjellen mellom institusjonell og strukturell rasisme?",
      options: ["Institusjonell peker på én bestemt organisasjon, strukturell på mønstre på tvers", "Institusjonell peker på mønstre på tvers, strukturell på én bestemt organisasjon", "Institusjonell krever uttalt hensikt, mens strukturell kan virke uten hensikt", "Institusjonell gjelder offentlig sektor, mens strukturell gjelder privat sektor"],
      explanation: "Forskjellen er nivået: institusjonell rasisme kan undersøkes og endres i en identifiserbar organisasjon, mens strukturell rasisme går på tvers av institusjoner. Svaret som bytter om på nivåene er den nære fellen. Ingen av dem krever uttalt hensikt, og skillet følger ikke grensen mellom offentlig og privat sektor.",
    },
    {
      question: "Hvorfor er fargeblindhet omstridt som forskningsposisjon?",
      options: ["Fordi kategorier som ikke måles, gjør forskjellsbehandling vanskelig å dokumentere", "Fordi normen om å møte alle som individer mangler oppslutning i befolkningen", "Fordi den forutsetter at rasekategorier har et biologisk grunnlag som kan måles", "Fordi den ble utviklet av forskere som selv arbeidet med raseteorier før krigen"],
      explanation: "Kritikken går ut på at et ideal om ikke å se kategorien også gjør ulikhet langs kategorien usynlig, siden det som ikke registreres, ikke kan telles. Motargumentet er at det å måle kategorien gjør den til en sosial realitet, og begge posisjonene har forsvarlige begrunnelser. Normen har bred oppslutning, og den bygger nettopp på avvisningen av biologiske raseteorier.",
    },
    {
      question: "Hva er skillet mellom intensjon og virkning i denne sammenhengen?",
      options: ["Intensjon er hva aktøren ville oppnå, virkning er hva som faktisk ble resultatet", "Intensjon er hva loven krever bevist, virkning er hva forskningen kan observere", "Intensjon gjelder enkeltpersoner, mens virkning bare gjelder offentlige etater", "Intensjon er et moralsk begrep, mens virkning er et rent statistisk begrep"],
      explanation: "Skillet er avgjørende fordi den strukturelle rasismeforståelsen handler om virkninger uten intensjon, mens de to andre forståelsene i praksis forutsetter at noen mener noe. Svaret om lov og forskning blander sammen to ulike skiller. Virkninger gjelder like mye private aktører som offentlige, og begge begrepene brukes analytisk, ikke bare moralsk eller statistisk.",
    },
    {
      question: "En kandidat skriver at rasisme er negative holdninger til andre grupper, og stopper der. Hvilken feil er dette et eksempel på?",
      options: ["Begrepsforflatning — å bruke «rasisme» uten å skille de tre forståelsene", "Å svare på nabospørsmålet — å levere en analyse av noe like ved siden av", "Navn uten funn — å nevne forskere uten å bruke resultatene deres i argumentet", "Å miste dobbeltheten — å skrive ensidig slik at spenningen forsvinner helt"],
      explanation: "Feilen er at bare den individorienterte siden av begrepet står igjen, slik at både den kulturelle og den strukturelle forståelsen forsvinner. Å svare på nabospørsmålet ville vært å levere en ren diskrimineringsanalyse i stedet. Navn uten funn handler om manglende empiribruk, og å miste dobbeltheten handler om en ensidig drøfting.",
    },
    {
      question: "En kandidat besvarer en oppgave om rasisme og muligheter med en presis gjennomgang av de tre diskrimineringstypene, og stopper der. Hvilken feil er dette?",
      options: ["Å svare på nabospørsmålet — oppgaven spurte om rasisme og om muligheter", "Begrepsforflatning — diskrimineringstypene er ikke skilt fra hverandre", "Synsing uten pensum — svaret bygger på avisdebatten i stedet for på forskning", "Flervalgs-gambling — kandidaten satser på et svar uten å eliminere alternativer"],
      explanation: "Gjennomgangen kan være helt korrekt og likevel svare på et spørsmål som ligger like ved siden av det som ble stilt: rasismebegrepets egenart og mulighetsdimensjonene mangler. Begrepsforflatning ville vært at typene ikke ble skilt, men her er de skilt. Svaret er pensumforankret, og gambling er en flervalgsfeil uten relevans her.",
    },
    {
      question: "Hva finner norske korrespondansetester i arbeidsmarkedet?",
      options: ["Systematisk lavere innkallingsrate for ellers like søkere med minoritetsnavn", "At søkere med minoritetsnavn får lavere lønn enn andre i samme stilling", "At arbeidsgivere oppgir motvilje mot minoriteter som grunn for sine valg", "At forskjellene forsvinner helt når søkerne har norsk utdanning og erfaring"],
      explanation: "Designet varierer bare navnet i ellers like søknader, og finner at søkere med minoritetsnavn kalles inn systematisk sjeldnere. Lønnsforskjeller i samme stilling er noe designet ikke måler i det hele tatt. Arbeidsgiverne begrunner i liten grad valgene med motvilje, og forskjellene gjelder også søkere med norsk utdanning, som er en del av poenget.",
    },
    {
      question: "Hva kan en korrespondansetest ikke fortelle oss?",
      options: ["Hvilket motiv som ligger bak forskjellsbehandlingen ved ansettelsen", "Om det finnes forskjellsbehandling ved første ansettelsessteg i det hele tatt", "Om forskjellen kan tilskrives den egenskapen som ble variert i søknaden", "Om designet gir kausalt belegg eller bare viser en tilfeldig samvariasjon"],
      explanation: "Statistisk og smaksbasert diskriminering gir identiske utfall i et slikt design, så motivet ligger utenfor rekkevidde. De tre andre spørsmålene er nettopp det metoden svarer på: den viser at forskjellsbehandling forekommer, den isolerer den varierte egenskapen, og fordi alt annet holdes likt, gir den kausalt belegg og ikke bare samvariasjon.",
    },
    {
      question: "Hva viser Larsen og Di Stasios komparative felteksperiment?",
      options: ["At religiøs markering har selvstendig betydning, med ulikt mønster i to land", "At etnisk bakgrunn er den eneste markøren som påvirker innkallingsraten", "At religiøs markering bare har betydning i land med statskirkeordning", "At forskjellsbehandlingen forsvinner når arbeidsgiveren kjenner søkeren"],
      explanation: "Studien varierer religiøs markering blant søkere med samme etniske bakgrunn og kjører samme design i Norge og Storbritannia, og finner at markøren betyr noe i seg selv og at mønsteret ikke er identisk. Svaret om at etnisk bakgrunn er eneste markør er nettopp det studien motbeviser. Statskirkeordning er ikke forklaringsvariabelen, og designet måler søknader fra ukjente søkere.",
    },
    {
      question: "Hva menes med reifisering i drøftingen av rasebegrepet?",
      options: ["Å behandle noe sosialt skapt som om det var en naturgitt og virkelig ting", "Å avvise et begrep fordi det oppleves som ubehagelig i offentlig debatt", "Å måle en kategori i offentlig statistikk for å kunne dokumentere ulikhet", "Å erstatte et omstridt begrep med et mer nøytralt og analytisk begrep"],
      explanation: "Reifisering er innvendingen om at bruk av en kategori i forskning og statistikk kan gjøre den mer virkelig for dem som lever i samfunnet. Å måle kategorien er nettopp den handlingen innvendingen retter seg mot, ikke innvendingen selv. Å avvise et begrep av ubehag er ikke et faglig argument, og begrepsbytte er en mulig konsekvens av innvendingen, ikke dens innhold.",
    },
    {
      question: "Hva er måleproblemet i norsk forskning på etnisk forskjellsbehandling?",
      options: ["Registrene inneholder landbakgrunn, ikke hudfarge eller religiøs synlighet", "Registrene inneholder rasekategorier som forskerne ikke har lov til å bruke", "Registrene mangler opplysninger om utdanning og yrke for store grupper", "Registrene dekker bare arbeidslivet og ikke bolig, skole eller helsetjenester"],
      explanation: "Norsk statistikk registrerer landbakgrunn og kategoriene innvandrer og etterkommer, mens de markørene forskningen finner at forskjellsbehandlingen følger, ikke registreres. Rasekategorier finnes ikke i norske registre i det hele tatt. Utdanning og yrke er derimot godt dekket, og registerdekningen er ikke begrenset til arbeidslivet.",
    },
    {
      question: "Hvordan kommer felteksperimentet rundt måleproblemet?",
      options: ["Det skaper variasjonen selv ved å variere markører i søknaden", "Det henter opplysninger om markører fra offentlige registre", "Det spør deltakerne direkte om hvilke markører de mener betyr noe", "Det sammenlikner grupper med ulik botid og ulik innvandringsgrunn"],
      explanation: "Metoden trenger ingen registeropplysning om kjennetegnet, fordi forskeren selv bestemmer hva søknaden skal signalisere. Å hente markører fra registre er nettopp det som ikke er mulig. Å spørre deltakerne er en surveytilnærming som måler holdninger og ikke handlinger, og botidssammenlikninger er registerforskning uten eksperimentell variasjon.",
    },
    {
      question: "Hvorfor bør «muligheter» avgrenses tidlig i et langsvar om rasisme og minoriteters muligheter?",
      options: ["Fordi tilgang til jobb, karriere, bolig og anerkjennelse måles med ulike metoder", "Fordi begrepet ikke finnes i pensumlitteraturen og derfor må defineres av kandidaten", "Fordi sensor krever at alle sentrale begreper defineres i første avsnitt", "Fordi ordet betyr noe annet i sosiologien enn det gjør i dagligtalen"],
      explanation: "De ulike mulighetsdimensjonene har hvert sitt kunnskapsgrunnlag, og innkallingsgapet sier mye om den første og nesten ingenting om de andre. Uten avgrensningen brukes ett funn som om det gjaldt alt. Begrepet er verken fraværende fra litteraturen eller et fagord med en avvikende betydning, og poenget er ikke en formregel om definisjoner.",
    },
    {
      question: "Hvilken formulering gjengir stridsspørsmålet om rasebegrepet i Norge riktig?",
      options: ["Uenigheten gjelder hvilket begrep som fanger fenomenet, ikke om det finnes", "Uenigheten gjelder om etnisk forskjellsbehandling finnes i norsk arbeidsliv", "Uenigheten gjelder om felteksperimenter er en gyldig metode i samfunnsfag", "Uenigheten gjelder om Norge skal følge fransk eller amerikansk lovgivning"],
      explanation: "Begge sider godtar funnene om forskjellsbehandling; de er uenige om «rase» er det beste analytiske verktøyet, og om hva bruken av begrepet gjør med samfunnet. Å framstille uenigheten som empirisk er den vanligste feillesningen. Metodens gyldighet er ikke omstridt på denne måten, og spørsmålet er begrepsmessig og ikke et valg mellom to lands lovverk.",
    },
    {
      question: "Hvorfor er sosiologiens egen fortid relevant i et kapittel om rasisme?",
      options: ["Fordi faget selv produserte raseteorier, noe som forklarer avstanden til ordet", "Fordi faget alltid har avvist raseteorier og derfor står fritt til å bruke ordet", "Fordi faget først tok opp temaet etter at innvandringen til Norge økte", "Fordi faget henter rasismebegrepet direkte fra biologien og genetikken"],
      explanation: "Samfunnsvitenskapene deltok i å produsere raseteorier i første halvdel av 1900-tallet, også i Norden, og oppgjøret med denne fortiden er en del av forklaringen på at rasebegrepet ble lagt bort her. Påstanden om at faget alltid har avvist teoriene er historisk gal. Temaet er langt eldre enn etterkrigstidens innvandring, og begrepet er samfunnsvitenskapelig, ikke biologisk.",
    },
    {
      question: "Du klarer å utelukke to av fire alternativer på et flervalgsspørsmål, men er usikker på resten. Hva lønner seg?",
      options: ["Å svare, fordi forventet uttelling da er positiv med denne poengmodellen", "Å la spørsmålet stå, fordi null poeng alltid er tryggere enn et minuspoeng", "Å svare bare dersom du også kan begrunne valget faglig for deg selv", "Å la spørsmålet stå til slutt og heller bruke tiden på de neste spørsmålene"],
      explanation: "Med to alternativer eliminert er sjansen for riktig svar femti prosent, og forventet uttelling blir positiv med modellen +1 for riktig og −0,5 for galt. Å la stå gir null og er derfor svakere her, selv om det er riktig valg når ingen alternativer kan utelukkes. Kravet om full faglig begrunnelse er strengere enn beslutningsregelen, og å utsette spørsmålet endrer ikke regnestykket.",
    },
  ],
  'sos1004-2-5': [
    {
      question: "Hva menes med strukturell integrering?",
      options: ["Deltakelse i kjerneinstitusjonene målt i utfall som utdanning, jobb og inntekt", "Å bli regnet som en selvfølgelig og fullverdig deltaker av dem man møter til daglig", "Gradvis tilnærming til majoritetens språk, skikker og verdier over generasjoner", "Den rettslige statusen som følger av innvilget norsk statsborgerskap ved fødsel"],
      explanation: "Strukturell integrering måler deltakelse i arbeid, utdanning og samfunnsliv, og den finnes i registrene. Å bli regnet med av andre er symbolsk anerkjennelse, som er en relasjonell dimensjon uten registervariabel. Kulturell tilnærming beskriver assimilering, og statsborgerskap er en rettslig kategori som ikke måler deltakelse.",
    },
    {
      question: "Hva kjennetegner symbolsk anerkjennelse?",
      options: ["At man regnes som en selvfølgelig og fullverdig deltaker av dem man møter", "At man deltar i arbeid og utdanning på linje med resten av befolkningen", "At man har oppnådd inntekt og utdanningsnivå over medianen i befolkningen", "At man selv opplever en sterk følelsesmessig tilknytning til landet man bor i"],
      explanation: "Anerkjennelse er et sosialt forhold: den handler om hva omgivelsene faktisk gjør, ikke bare om hva den enkelte føler. Deltakelse i arbeid og utdanning og gode utfall på inntekt hører til den strukturelle dimensjonen. Selvrapportert tilknytning er én side av saken, men anerkjennelse krever i tillegg at tilhørigheten tilskrives utenfra.",
    },
    {
      question: "Hva er norskhet som analytisk begrep i sosiologien?",
      options: ["Den symbolske grensen for hvem som regnes som egentlig norsk", "Den rettslige statusen som følger av norsk statsborgerskap og bosted", "Graden av kulturell likhet med majoritetsbefolkningen på sentrale mål", "Den enkeltes egen opplevelse av å være tilknyttet Norge som land"],
      explanation: "Norskhet er en sosial kategori uten formelle kriterier, og den tildeles av andre. Statsborgerskap er derimot en rettslig status med dokumenterbare kriterier, og poenget er nettopp at de to kan sprike. Kulturell likhet er målestokken i assimilering, og egen opplevelse er hevdet identitet snarere enn tilskrevet tilhørighet.",
    },
    {
      question: "Hva skiller en symbolsk grense fra en sosial grense?",
      options: ["Den symbolske er en klassifikasjon, den sosiale er ulikhet i tilgang", "Den symbolske er en holdning hos enkeltpersoner, den sosiale er et lovbrudd", "Den symbolske gjelder minoriteter, den sosiale gjelder hele befolkningen", "Den symbolske lar seg lese ut av registerdata, den sosiale gjør det ikke"],
      explanation: "Symbolske grenser er måter å sortere folk på, og de blir sosiale grenser først når klassifikasjonen omsettes i ulik tilgang til jobber, boliger og nettverk. En holdning hos en enkeltperson er en fordom, og poenget med begrepet er at mønsteret er delt og virker uavhengig av holdninger. Begge typer grenser trekkes i alle deler av befolkningen.",
    },
    {
      question: "Hva menes med at majoritetsbefolkningen er en umarkert kategori?",
      options: ["At den regnes som normalen og derfor sjelden må forklare seg", "At den er tallmessig større enn hver av minoritetsgruppene i landet", "At den ikke registreres med landbakgrunn i offentlig statistikk", "At den er uten kulturelle særtrekk og derfor vanskelig å beskrive"],
      explanation: "Å være umarkert er en posisjon i strukturen, ikke fravær av en posisjon: den umarkerte får ikke spørsmål om hvor hun egentlig kommer fra. Det handler verken om gruppestørrelse eller om hvordan statistikken føres. Og majoriteten har selvsagt kulturelle særtrekk — de framstår bare som selvfølgelige og trenger derfor ikke navn.",
    },
    {
      question: "Hva er tilskrevet tilhørighet?",
      options: ["At kategorien man plasseres i, bestemmes av andre enn en selv", "At tilhørigheten følger av formelle kriterier som kan dokumenteres", "At man selv gjør krav på en bestemt gruppetilhørighet i møter", "At tilhørigheten endrer seg gjennom livsløpet etter hvert som man flytter"],
      explanation: "Tilskrevet tilhørighet er den kategorien omgivelsene leser en inn i, uavhengig av hva man selv oppgir. Å gjøre krav på en tilhørighet er den motsatte siden, altså hevdet identitet, og det er avstanden mellom de to som er analyseobjektet. Formelle kriterier kjennetegner rettslige statuser, ikke sosiale kategorier.",
    },
    {
      question: "Hvordan analyserer Fukuyama anerkjennelse?",
      options: ["Som en selvstendig drivkraft ved siden av de materielle interessene", "Som en holdning enkeltpersoner har til grupper de ikke tilhører selv", "Som en politisk retning han tar tydelig avstand fra i sine analyser", "Som en velferdsordning som fordeler goder mellom ulike samfunnsgrupper"],
      explanation: "Hos Fukuyama handler mennesker ikke bare for å få mer, men for å bli regnet med — anerkjennelse er derfor en egen drivkraft i politikk og samfunnsliv. Å skrive at han er for eller mot identitetspolitikk er en tilskrivningsfeil: oppgaven er å gjengi analysen, ikke å plassere forfatteren politisk. Anerkjennelse er heller ikke en holdning eller en fordelingsordning.",
    },
    {
      question: "Hva skiller anerkjennelsesdimensjonen fra fordelingsdimensjonen?",
      options: ["Anerkjennelse gjelder status, fordeling gjelder tilgang til materielle goder", "Anerkjennelse gjelder minoriteter, fordeling gjelder hele befolkningen", "Anerkjennelse er et normativt spørsmål, fordeling er et empirisk spørsmål", "Anerkjennelse måles i registerdata, fordeling må undersøkes kvalitativt"],
      explanation: "Fordelingsdimensjonen handler om jobb, lønn og bolig, mens anerkjennelsesdimensjonen handler om hvem som regnes som en likeverdig deltaker. Begge dimensjonene gjelder alle grupper, og begge kan undersøkes empirisk. Det er dessuten fordelingsutfallene som finnes i registrene, mens anerkjennelse er den dimensjonen registrene ikke har noen variabel for.",
    },
    {
      question: "Hva varieres i felteksperimentene til Larsen og Di Stasio?",
      options: ["En religiøs markør i søknaden, med etnisk bakgrunn holdt konstant", "Søkerens utdanningsnivå og arbeidserfaring, med navnet holdt konstant", "Arbeidsgiverens bransje og størrelse, med søknadene holdt helt like", "Søkerens navn og fødeland, med religiøs tilhørighet holdt konstant"],
      explanation: "Poenget med designet er at religion kan skilles fra opprinnelse: bare den religiøse markøren varieres, mens etnisk bakgrunn holdes fast. Varierer man i stedet kvalifikasjoner eller navn, måler man noe annet enn religionens selvstendige effekt. Bransje og virksomhetsstørrelse er ikke det som varieres i selve søknaden.",
    },
    {
      question: "Hva fant Larsen og Di Stasio om religiøs markør i arbeidsmarkedet?",
      options: ["Markøren har selvstendig effekt, og utslaget er størst for muslimsk markør", "Markøren har ingen målbar effekt når kvalifikasjonene ellers er like", "Markøren virker bare i offentlig sektor, der kravene er formaliserte", "Markøren virker likt for alle religiøse grupper når alt annet holdes likt"],
      explanation: "Funnet er at religiøs tilhørighet virker i tillegg til etnisk bakgrunn, og at effekten er ujevnt fordelt: søkere med muslimsk markør møter systematisk lavere innkallingsrate. At effekten skulle være lik for alle religiøse grupper er nettopp det funnet motsier. Og at markøren ikke virker, eller bare virker i én sektor, er ikke det designet viser.",
    },
    {
      question: "Hva kan en korrespondansetest IKKE si noe om?",
      options: ["Hvilket motiv som ligger bak forskjellsbehandlingen ved ansettelse", "Om ellers like søknader gir ulik sannsynlighet for å bli innkalt", "Om forskjellen kan tilskrives arbeidsgiverens vurdering av søkeren", "Om en variert markør i søknaden endrer responsen fra arbeidsgiver"],
      explanation: "Testen viser at det diskrimineres ved første ansettelsessteg, men ikke hvorfor: statistisk diskriminering, smaksdiskriminering og stereotypidiskriminering gir samme utfall i designet. Det testen nettopp er sterk på, er å måle om ellers like søknader behandles ulikt og å tilskrive forskjellen til vurderingen, siden bare markøren varieres.",
    },
    {
      question: "Hva viser Fribergs undersøkelser blant etterkommere i Norge?",
      options: ["Tilpasningen skjer, men grensen for hvem som regnes som norsk trekkes snevrere", "Tilpasningen uteblir, og etterkommerne orienterer seg bort fra jevnaldrende", "Tilpasningen skjer, og anerkjennelsen følger automatisk med i neste generasjon", "Tilpasningen varierer bare med foreldrenes utdanningsnivå og inntekt i Norge"],
      explanation: "Etterkommerne beveger seg mot jevnaldrendes verdier og rapporterer sterk tilknytning til Norge, mens grensen for hvem som regnes som norsk trekkes snevrere enn både statsborgerskap og faktisk tilpasning skulle tilsi. At anerkjennelsen skulle følge automatisk er nettopp det funnet taler mot: de to prosessene går i ulik takt.",
    },
    {
      question: "Hva er paradoks-aksen i dette kapitlet?",
      options: ["Man kan være strukturelt integrert og samtidig symbolsk ekskludert", "Man kan ha høy utdanning og samtidig lav inntekt i samme yrke", "Man kan møte diskriminering og samtidig ha oppadgående mobilitet", "Man kan ha statsborgerskap og samtidig bo utenfor landets grenser"],
      explanation: "Kapitlets paradoks setter de to mulighetsdimensjonene mot hverandre: full deltakelse i arbeid og utdanning kan gå sammen med en vedvarende erfaring av å bli plassert utenfor kategorien. Å sette diskriminering mot mobilitet er integreringsparadokset, som er beslektet, men som holder seg innenfor arbeidsmarkedet og altså sammenlikner to funn i samme dimensjon.",
    },
    {
      question: "En oppgave spør om anerkjennelse, og kandidaten svarer med sysselsettingstall. Hvilken feil er dette?",
      options: ["Å svare på nabospørsmålet — riktig kunnskap om feil dimensjon", "Å synse uten pensum — å besvare spørsmålet fra egne meninger", "Å miste dobbeltheten — å skrive ensidig så paradokset forsvinner", "Å importere klassikerstoff som oppgaven ikke har bedt om"],
      explanation: "Feilen er at svaret måler strukturell integrering når spørsmålet gjaldt tilhørighet: kunnskapen er korrekt, men dimensjonen er feil. Synsing uten pensum forutsetter at pensumtilknytningen mangler, og her er den til stede. Å miste dobbeltheten handler om å velge én side av et paradoks, ikke om å bomme på nøkkelvariabelen.",
    },
    {
      question: "Hva innebærer feilen «navn uten funn» i dette temaet?",
      options: ["Anerkjennelse brukes som slagord uten at noen studie kobles til det", "Forskere fra andre fagfelt trekkes inn i en sosiologisk drøfting", "Begrepet anerkjennelse brukes uten at avsenderen navngis i teksten", "Funn gjengis presist, men uten at forfatteren bak dem nevnes ved navn"],
      explanation: "Feilen består i at forskeren nevnes mens resultatet aldri brukes i argumentet, og varianten som rammer dette kapitlet er anerkjennelse gjentatt som et honnørord uten empirisk forankring. Å utelate navnet mens funnet faktisk brukes er en mindre alvorlig svakhet, og det er noe annet enn å bruke navnet som erstatning for argumentet.",
    },
    {
      question: "Hva er et interseksjonelt blikk i en drøfting?",
      options: ["At kategorier som kjønn og religion analyseres som virksomme sammen", "At flere kategorier nevnes i samme setning tidlig i besvarelsen", "At ulempene ved hver kategori legges sammen til en samlet ulempe", "At analysen behandler den kategorien som gir størst utslag i dataene"],
      explanation: "Interseksjonalitet krever at du viser hvordan kategoriene virker på hverandre i den situasjonen du analyserer, slik at kombinasjonen kan gi en egen posisjon med egne mekanismer. Å legge ulemper sammen er addisjon og bommer på poenget, og en oppramsing av kategorier er pynt som ikke endrer analysen.",
    },
    {
      question: "Hva menes med kompetansemismatch?",
      options: ["At kompetansen en person har, ikke svarer til kravene i jobben", "At utdanning tatt i utlandet ikke godkjennes av norske myndigheter", "At en person står helt utenfor arbeidsstyrken over lengre tid", "At arbeidsgiver og søker vurderer den samme kompetansen ulikt"],
      explanation: "Kompetansemismatch handler om forholdet mellom kompetanse og stillingens krav, og overkvalifisering er den ene retningen av det. Manglende godkjenning av utdanning kan være én årsak til mismatch, men er ikke det samme fenomenet. Å stå utenfor arbeidsstyrken er noe annet igjen, siden mismatch forutsetter at man er i jobb.",
    },
    {
      question: "Hvorfor er sysselsettingsstatistikk et smalt mål på muligheter?",
      options: ["Den teller om man er i arbeid, ikke om arbeidet svarer til kompetansen", "Den er beheftet med stor usikkerhet fordi utvalgene er små i Norge", "Den skiller ikke mellom innvandrere og etterkommere i sine oppgaver", "Den oppdateres for sjelden til å fange endringer over korte tidsrom"],
      explanation: "To personer kan telle likt i statistikken og ha svært ulik uttelling for samme utdanning, og derfor skiller muligheter til jobb og muligheter til karriere og lønn lag. Norsk sysselsettingsstatistikk bygger på befolkningsdekkende registre og kan brytes ned på generasjon og landbakgrunn, så verken utvalgsusikkerhet eller manglende kategorier er problemet her.",
    },
    {
      question: "Hva er forskjellen på tilgang og avansement som mulighetsdimensjoner?",
      options: ["Tilgang er å komme inn, avansement er det som skjer i årene etterpå", "Tilgang gjelder offentlig sektor, avansement gjelder privat sektor", "Tilgang er formelle krav, avansement er uformelle vurderinger av folk", "Tilgang gjelder nyankomne innvandrere, avansement gjelder etterkommere"],
      explanation: "Tilgang er innkalling og ansettelse; avansement er forfremmelser, lønnsutvikling og lederansvar. Skillet er metodisk viktig fordi korrespondansetesten bare virker på tilgangsleddet. Både formelle krav og uformelle vurderinger opptrer i begge ledd, og begge dimensjonene gjelder alle grupper uansett generasjon.",
    },
    {
      question: "Hvorfor er anerkjennelse dårligere dokumentert enn tilgang til jobb?",
      options: ["Ingen av metodene som brukes, dekker hele begrepet alene", "Feltet er for nytt til at det finnes studier ennå", "Anerkjennelse er et normativt begrep og lar seg ikke undersøke", "Norske registre mangler opplysninger om religiøs tilhørighet"],
      explanation: "Felteksperimentet måler en konsekvens i ett ledd, spørreundersøkelsen måler selvrapportert opplevelse, og de kvalitative studiene måler mekanismen uten å kunne tallfeste utbredelsen. Anerkjennelse kan altså undersøkes, bare ikke med ett instrument. Asymmetrien ligger i kunnskapsgrunnlaget og ikke i at begrepet skulle være normativt.",
    },
    {
      question: "Hvorfor skal minoriteter beskrives som aktører i en sosiologisk analyse?",
      options: ["Fordi tilpasningsstrategier former det forskningen i det hele tatt måler", "Fordi strukturelle forklaringer er avleggs i moderne sosiologisk forskning", "Fordi ansvaret for utfallet da plasseres hos den enkelte søkeren selv", "Fordi kvalitative studier alltid veier tyngre enn registerbaserte studier"],
      explanation: "Mennesker navigerer og velger innenfor strukturelle begrensninger, og hvilke opplysninger som tas med i en søknad og hvilke jobber det søkes på, påvirker det vi måler som effekt av markør. Poenget er altså metodisk så vel som menneskelig. Det innebærer verken at strukturforklaringer er avleggs eller at ansvaret flyttes til den enkelte.",
    },
    {
      question: "Du klarer å utelukke to av fire alternativer på et flervalgsspørsmål. Hva lønner seg?",
      options: ["Å svare, siden forventet uttelling per spørsmål er positiv", "Å la spørsmålet stå, siden null er tryggere enn et minus", "Å svare bare hvis du også kjenner igjen begrepet fra pensum", "Å la det stå og heller bruke tiden på å kontrollere langsvaret"],
      explanation: "Med to alternativer igjen gir et svar en forventet uttelling på +0,25 per spørsmål, mens ubesvart gir 0. Blind gjetting uten eliminering er derimot ulønnsom, og der er regelen å la spørsmålet stå. Regelen er «elimineres to, gjett; elimineres null, la stå», og den er utledet i kapitlet om flervalgshåndverket.",
    },
  ],
  'sos1004-3-1': [
    {
      question: "Hva er det avgjørende ved en velferdsstat, analytisk sett?",
      options: ["At risiko flyttes fra individet til fellesskapet gjennom rettigheter", "At staten driver et bredt spekter av virksomheter for innbyggerne sine", "At det offentlige budsjettet er stort sammenliknet med andre land", "At staten eier og styrer viktige deler av den nasjonale økonomien"],
      explanation: "Det som gjør en ordning til velferdspolitikk, er at den flytter risiko fra den enkelte til fellesskapet gjennom rettighetsfestede overføringer og tjenester. Veier, forsvar og domstoler er statlige oppgaver som ikke fordeler risiko mellom borgere. Budsjettstørrelse og statlig eierskap er heller ikke det som definerer begrepet.",
    },
    {
      question: "Hva skiller en sosial rettighet fra veldedighet?",
      options: ["Rettigheten kan prøves, mens almissen gis etter giverens skjønn", "Rettigheten er skattefinansiert, mens almissen kommer fra private givere", "Rettigheten gjelder alle borgere, mens almissen gjelder utsatte grupper", "Rettigheten utbetales i penger, mens almissen gis som varer og tjenester"],
      explanation: "Poenget er at et lovfestet krav kan gjøres gjeldende og prøves, mens en almisse avhenger av giverens velvilje og kan trekkes tilbake. Forskjellen er sosiologisk fordi den avgjør om mottakeren står i et avhengighetsforhold. Finansieringskilde, mottakergruppe og utbetalingsform er andre spørsmål og skiller ikke de to.",
    },
    {
      question: "Hva er tildelingsgrunnlaget i en universell ordning?",
      options: ["Tilhørighet til en definert gruppe, som alle bosatte eller alle barn", "Dokumentert behov etter prøving av inntekt og formue i husholdningen", "Innbetaling til en ordning som er knyttet til yrket eller bransjen", "Vedtak etter en individuell faglig vurdering av søkerens situasjon og behov"],
      explanation: "Universalisme tildeler etter tilhørighet til en definert gruppe og spør ikke om behov eller innbetaling. Svaret om dokumentert behov beskriver behovsprøving, og svaret om innbetaling beskriver forsikringsprinsippet. En individuell faglig vurdering er en saksbehandlingsform og ikke et tildelingsprinsipp.",
    },
    {
      question: "Hva er hovedinnvendingen mot behovsprøvde ordninger?",
      options: ["De kan skape terskeleffekt og virke stigmatiserende på mottakeren", "De koster mer per utbetalt krone enn universelle ordninger gjør", "De er ulovlige etter norsk lovgivning om sosiale rettigheter", "De treffer for mange mottakere som klarer seg godt på egen hånd"],
      explanation: "Fordi ytelsen faller bort når inntekten stiger, kan en ekstra arbeidstime lønne seg svært lite, og fordi mottakeren må dokumentere sin egen utilstrekkelighet, kan ordningen virke stigmatiserende. At ordningen treffer for mange som klarer seg selv, er derimot innvendingen mot universelle ordninger. Behovsprøving er verken ulovlig eller dyrere per utbetalt krone.",
    },
    {
      question: "Hva kjennetegner forsikringsprinsippet som tildelingsgrunnlag?",
      options: ["Ytelsen følger av innbetaling og er knyttet til yrke eller bransje", "Ytelsen tildeles alle bosatte uavhengig av arbeidsforhold og inntekt", "Ytelsen faller bort dersom husholdningens inntekt overstiger en grense", "Ytelsen fastsettes politisk hvert år ut fra statsbudsjettets størrelse"],
      explanation: "I en forsikringsbasert ordning gir innbetaling gjennom yrket rett til ytelse, og størrelsen følger av hva som er betalt inn. Tildeling til alle bosatte er universalisme, og bortfall ved en inntektsgrense er behovsprøving. At beløpet justeres i budsjettet, sier ingenting om selve tildelingsgrunnlaget.",
    },
    {
      question: "Hva er velferdstrekanten hos Esping-Andersen?",
      options: ["Arbeidsdelingen mellom stat, marked og familie i produksjonen av velferd", "Samarbeidet mellom staten, arbeidsgiverne og fagbevegelsen om lønnsdannelsen", "Balansen mellom skatt, overføringer og offentlige tjenester i budsjettet", "Forholdet mellom kommunen, fylket og staten i finansieringen av velferd"],
      explanation: "Velferd produseres alltid av tre kilder samtidig, og et regime er en bestemt arbeidsdeling mellom stat, marked og familie. Trepartssamarbeidet er en arbeidslivsordning og hører til den norske modellens andre bein. Skatt og forvaltningsnivåer handler om finansiering og administrasjon, ikke om hvem som utfører velferdsarbeidet.",
    },
    {
      question: "Hva betyr det at arbeidskraft er kommodifisert?",
      options: ["At livsoppholdet avhenger av å selge sin egen arbeidsevne i et marked", "At arbeidstakeren har en formell kontrakt med en registrert arbeidsgiver", "At arbeidet utføres mot betaling i stedet for som ubetalt innsats i hjemmet", "At lønnen fastsettes gjennom forhandlinger mellom organiserte parter"],
      explanation: "Kommodifisering betyr at arbeidskraften er blitt en vare, slik at inntekten stopper dersom salget stopper. Kontraktsform og lønnsforhandling sier ingenting om hva som skjer når man ikke kan arbeide. At arbeid utføres mot betaling er en beskrivelse av lønnsarbeid, ikke av avhengighetsforholdet begrepet peker på.",
    },
    {
      question: "Hva måler de-kommodifisering?",
      options: ["Graden av at man klarer seg uten å måtte selge arbeidskraften sin", "Graden av at man klarer seg uten å være avhengig av familien sin", "Andelen av det samlede statsbudsjettet som brukes på sosiale formål i et land", "Andelen av velferdstjenestene som utføres av offentlig ansatte"],
      explanation: "De-kommodifisering måler uavhengighet av markedet, altså i hvilken grad sosiale rettigheter gjør at man kan opprettholde en akseptabel levestandard uten å selge arbeidskraften. Uavhengighet av familien er de-familisering, som er den vanligste forvekslingen. Utgiftsnivå og produksjonsform er andre størrelser, og typologien er nettopp laget for å komme bort fra mengdetenkningen.",
    },
    {
      question: "Hva måles de-kommodifiseringsgraden på?",
      options: ["Hvor lett en ytelse er å få, hvor mye den erstatter og hvor lenge den varer", "Hvor stor andel av befolkningen som til enhver tid mottar en ytelse fra staten", "Hvor høyt skattenivået er sammenliknet med andre land i samme region", "Hvor mange ulike ordninger som finnes i det samlede trygdesystemet"],
      explanation: "Målestokken er tilgang, kompensasjonsgrad og varighet i den enkelte ordningen. Antall mottakere sier mer om konjunkturer og befolkning enn om rettighetenes styrke. Skattenivå og antall ordninger er mengdemål, og poenget hos Esping-Andersen er at mengde ikke er det samme som frigjøring.",
    },
    {
      question: "Hva måler de-familisering?",
      options: ["Graden av at man klarer seg uavhengig av familierelasjoner", "Graden av at man klarer seg uavhengig av arbeidsmarkedet", "Andelen av barn i et land som går i offentlig finansiert barnehage", "Andelen av husholdningene som består av bare én voksen person"],
      explanation: "De-familisering måler i hvilken grad ordninger avlaster familien for omsorgsansvar og dermed frigjør den enkelte, særlig kvinner, fra familieavhengighet. Uavhengighet av arbeidsmarkedet er de-kommodifisering. Barnehagedekning er en av indikatorene, men ikke selve begrepet, og husholdningsstørrelse er demografi og ikke velferdspolitikk.",
    },
    {
      question: "Hvorfor kan et regime ha høy de-kommodifisering og lav de-familisering samtidig?",
      options: ["Fordi de to måler forholdet til hver sin institusjon, marked og familie", "Fordi de to måles på ulike tidspunkter i den enkeltes livsløp", "Fordi de to bygger på data fra ulike land og derfor ikke er direkte sammenliknbare", "Fordi de to alltid utvikler seg i motsatt retning av hverandre"],
      explanation: "Begrepene måler uavhengighet av to helt ulike institusjoner, og de er derfor uavhengige dimensjoner. Det konservative regimet er standardeksempelet: sjenerøs yrkesbasert inntektssikring kombinert med at omsorgen forutsettes utført i familien. Dimensjonene måles på samme materiale, og de beveger seg ikke systematisk i motsatt retning.",
    },
    {
      question: "Hva kjennetegner en familialistisk velferdsordning?",
      options: ["Den forutsetter at familien bærer hovedansvaret for omsorgsarbeidet", "Den gir høyere ytelser til husholdninger med barn enn til andre", "Den utbetales til den enkelte og prøves mot individets egen inntekt", "Den finansieres av foreldrenes egenbetaling framfor av skatteseddelen"],
      explanation: "En familialistisk ordning bygger på forutsetningen om at omsorgen utføres i familien, typisk gjennom husholdningsprøving, kontantytelser for omsorg i hjemmet og svakt utbygde tjenester. Individuell prøving peker motsatt vei og er et de-familiserende trekk. At en ytelse er høyere for barnefamilier eller delvis egenbetalt, sier ikke hvor omsorgsansvaret er plassert.",
    },
    {
      question: "Hva er mekanismen i den kvinnevennlige velferdsstaten?",
      options: ["Offentlig omsorg avlaster familien og er samtidig arbeidsplassen kvinner går til", "Kvotering sikrer at kvinner får en fastsatt andel av lederstillingene", "Ytelsene er høyere for kvinner enn for menn i de samme ordningene", "Lovverket forbyr all forskjellsbehandling på grunnlag av kjønn ved ansettelse og lønn"],
      explanation: "Mekanismen har to ledd: tjenestene frigjør kvinner fra ulønnet omsorgsarbeid, og de samme tjenestene er en stor kvinnedominert arbeidsplass. Begrepet handler om statens rolle, ikke om kvotering, diskrimineringsvern eller ulike satser. Baksiden er at ordningen samtidig kan sementere et kjønnsdelt arbeidsmarked.",
    },
    {
      question: "Hva er samspillet mellom de-familisering og de-kommodifisering i den nordiske modellen?",
      options: ["Omsorgstjenester gir høy yrkesdeltakelse, som finansierer de universelle ytelsene", "Sjenerøse ytelser gir lavere yrkesdeltakelse, som igjen krever mer omsorg i familien", "De to er alternative strategier, slik at et land må velge én av dem", "De to måles på samme indikator og gir derfor alltid samme resultat"],
      explanation: "Utbygd omsorg frigjør kvinner fra ubetalt arbeid, det gir en yrkesdeltakelse som er blant Europas høyeste, og den yrkesdeltakelsen er skattegrunnlaget som bærer de universelle ytelsene. De er altså forutsetninger for hverandre, ikke alternativer. De måles på hver sin indikator, og et land kan ha mye av det ene og lite av det andre.",
    },
    {
      question: "Hva er et velferdsregime?",
      options: ["Arbeidsdelingen mellom stat, marked og familie og virkningene av den", "Den delen av offentlig sektor som forvalter trygder og sosiale tjenester", "Det regelverket som styrer hvem som har rett på hvilke ytelser", "Den politiske koalisjonen som til enhver tid styrer velferdspolitikken"],
      explanation: "Regimet er helheten, inkludert det markedet leverer og det familien utfører ubetalt, sammen med de fordelingsvirkningene arbeidsdelingen har. Velferdsstaten er bare statens del av dette. Regelverk og regjeringssammensetning er noe annet igjen, og regimer er trege strukturer som ikke skifter med en valgperiode.",
    },
    {
      question: "Hva kjennetegner det liberale velferdsregimet?",
      options: ["Behovsprøving dominerer, og markedet leverer trygghet til dem som har råd", "Universelle rettigheter dominerer, og tjenestesektoren er stor og utbygd", "Yrkesbaserte forsikringsordninger dominerer, og familien bærer omsorgsansvaret selv", "Familien dominerer som velferdsprodusent, og staten har ingen ordninger"],
      explanation: "Det liberale regimet lar staten tre inn som en restkategori når marked og familie har sviktet, og de prøvde ytelsene er beskjedne. Universelle rettigheter kjennetegner det sosialdemokratiske regimet og yrkesbasert forsikring det konservative. Ingen av regimene mangler statlige ordninger helt.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom det konservative og det sosialdemokratiske regimet?",
      options: ["De-familiseringen, siden begge kan ha høy de-kommodifisering", "De-kommodifiseringen, siden begge har lav de-familisering", "Utgiftsnivået, siden det ene bruker langt mer enn det andre", "Behovsprøvingen, siden bare det ene bruker prøvde ytelser"],
      explanation: "Begge regimene kan gi god inntektssikring, men det konservative forutsetter at omsorgen utføres i familien, mens det sosialdemokratiske bygger ut tjenestene. Det er derfor de-familiseringen som skiller dem. Utgiftsnivå er ikke det typologien sorterer etter, og behovsprøving finnes i begge som en ordning i bunnen.",
    },
    {
      question: "Hva er stratifiseringsdimensjonen i regimeanalysen?",
      options: ["At velferdsordningene selv produserer bestemte mønstre av ulikhet", "At ulikhet mellom grupper kan måles langs klasse, kjønn og etnisitet samtidig", "At ytelser fordeles i sjikt etter hvor lenge man har bidratt", "At land kan rangeres etter hvor mye de bruker på velferd"],
      explanation: "Stratifisering er poenget om at ordningene bygger inn sine egne ulikhetsmønstre og ikke bare reagerer på ulikhet. Å se flere ulikhetsdimensjoner sammen er interseksjonalitet, som er et annet begrep. Sjiktdeling etter bidrag beskriver forsikringsprinsippet, og rangering etter utgifter er mengdetenkningen typologien erstatter.",
    },
    {
      question: "Hvordan stratifiserer det sosialdemokratiske regimet?",
      options: ["I utjevnende retning, ved å gi alle samme høye standard", "Det stratifiserer ikke, siden alle får den samme ytelsen", "Ved å bevare yrkeshierarkiet inn i sykdom og alderdom", "Ved å skille markedsforsørgede fra prøvde mottakere"],
      explanation: "Også det universelle regimet stratifiserer, men i utjevnende retning: en høy felles standard holder middelklassen inne i de samme ordningene som alle andre. Å si at regimet ikke stratifiserer er å lese begrepet som et skjellsord i stedet for som et mål. Statusbevaring hører til det konservative regimet og todelingen til det liberale.",
    },
    {
      question: "Hva er en idealtype?",
      options: ["En forenklet modell som fremhever trekk framfor å beskrive uttømmende", "En beskrivelse av det landet som skårer høyest på en gitt dimensjon", "Et politisk mål for hvordan et velferdssystem bør være innrettet", "Et gjennomsnitt av de landene som inngår i en sammenlikning"],
      explanation: "En idealtype skal skjerpe analysen, ikke stemme i detalj, og derfor er det ingen innvending mot typologien at et land ikke passer perfekt. Den er verken et forbilde, et gjennomsnitt eller en beskrivelse av et bestemt land. Norge plasseres i det sosialdemokratiske regimet som hovedtendens, med innslag av alle tre logikkene.",
    },
    {
      question: "Hva omfatter «den nordiske modellen» ut over velferdsordningene?",
      options: ["Et organisert arbeidsliv med sterke parter og koordinert lønnsdannelse", "Et skattesystem der de høyeste inntektene beskattes særlig hardt", "Et utdanningssystem uten private alternativer på noe nivå", "Et politisk system med forholdstallsvalg og flerpartiregjeringer"],
      explanation: "Modellen har to bein: den universelle velferdsstaten og et organisert arbeidsliv med koordinert lønnsdannelse. Arbeidslivsdelen er ikke pynt, fordi den komprimerte lønnsstrukturen utjevner allerede før skatt og overføringer. Skatteprogresjon, skolestruktur og valgordning er andre trekk ved landene og ikke det begrepet peker på.",
    },
    {
      question: "Hva er arbeidslinja i norsk velferdspolitikk?",
      options: ["Prinsippet om at arbeid skal lønne seg og at ytelser skal føre tilbake til jobb", "Prinsippet om at alle ytelser skal knyttes til innbetaling gjennom yrket man har", "Prinsippet om at offentlig sektor skal være den største arbeidsgiveren", "Prinsippet om at lønnsveksten skal settes av konkurranseutsatt sektor"],
      explanation: "Arbeidslinja handler om at velferdspolitikken skal utformes slik at arbeid lønner seg, og at ytelser kombineres med tiltak som fører mottakeren tilbake i arbeid. Den kan realiseres både med lavere ytelser og med mer kvalifisering, og valget mellom veiene er politisk omstridt. Frontfagsmodellen og forsikringsprinsippet er andre ordninger.",
    },
    {
      question: "Hvilken spenning ligger det i arbeidslinja?",
      options: ["Den trekker motsatt vei av de-kommodifisering", "Den trekker motsatt vei av stratifiseringsmålet", "Den forutsetter behovsprøving av alle ytelser", "Den krever at lønnsstrukturen komprimeres ytterligere"],
      explanation: "Jo mer en ytelse frigjør deg fra arbeidsmarkedet, desto svakere blir den økonomiske drivkraften tilbake til det, og arbeidslinja peker derfor i motsatt retning av de-kommodifisering. At begge hensyn finnes i samme modell er en avveining og ikke en inkonsekvens. Arbeidslinja krever verken behovsprøving av alt eller endringer i lønnsdannelsen.",
    },
    {
      question: "Hvorfor virker en øremerket permisjonskvote annerledes enn en fritt delbar permisjon?",
      options: ["Fordi kvoten faller bort dersom den ikke brukes av den den er tiltenkt", "Fordi kvoten gir høyere utbetaling enn den fritt delbare delen av permisjonen gjør", "Fordi kvoten bare kan tas ut sammenhengende og ikke stykkevis", "Fordi kvoten er hjemlet i arbeidsmiljøloven og ikke i folketrygden"],
      explanation: "En kvote som forsvinner om den ikke brukes, endrer hva som er det økonomisk rasjonelle valget for husholdningen, og det er derfor uttaket flyttet seg raskt etter innføringen. Utbetalingsnivå, uttaksmønster og lovhjemmel er ikke det som driver virkningen. Dette er de-familisering omsatt i en konkret ordning.",
    },
    {
      question: "Hva er legitimitetsargumentet for universelle ordninger?",
      options: ["At de som betaler mest også mottar, slik at oppslutningen holder over tid", "At de er billigere å administrere enn ordninger som må prøves individuelt", "At de gir mer utjevning per utbetalt krone enn målrettede ordninger gjør", "At de er nedfelt i internasjonale konvensjoner om sosiale rettigheter"],
      explanation: "Universelle ordninger drar middelklassens interesse med seg, og det er argumentet for at brede ordninger kan holde seg sjenerøse over tid, mens smale kan forvitre. Målrettede ordninger gir derimot mer utjevning per krone, og det er nettopp derfor avveiningen er reell. Administrasjonskostnader og konvensjoner er andre argumenter.",
    },
    {
      question: "Hva består universalismens dobbelthet i?",
      options: ["Modellen utjevner for dem innenfor og gir terskler for dem utenfor", "Modellen er billig å drive, men vanskelig å forklare for velgerne", "Modellen gir like rettigheter, men ulike ytelser til ulike grupper", "Modellen virker godt i gode tider, men bryter sammen i nedgangstider"],
      explanation: "Det avgjørende er at det er én og samme institusjonelle egenskap som gir begge virkningene: den komprimerte lønnsstrukturen løfter bunnen og fjerner samtidig jobbene med lave kompetansekrav. Det er derfor ikke en liste med fordeler og ulemper. Universelle ordninger er heller ikke billige, og de gir per definisjon samme ytelse innenfor gruppen.",
    },
    {
      question: "Hva var kjernen i kjønnskritikken av den opprinnelige regimetypologien?",
      options: ["At et mål bygget på forholdet arbeidstaker og marked overså omsorgsarbeidet", "At kvinner ikke var med i utvalget av respondenter i undersøkelsene", "At typologien plasserte de nordiske landene i feil regime fra starten", "At kvinner og menn ble slått sammen i de statistiske sammenlikningene av land"],
      explanation: "Kritikken var at en typologi bygget på relasjonen mellom arbeidstaker og marked var blind for det ubetalte omsorgsarbeidet, som i hovedsak har vært utført av kvinner. Resultatet ble ikke at typologien ble forkastet, men at de-familisering kom inn som egen måledimensjon. Kritikken gjaldt måleapparatet, ikke utvalg eller plassering.",
    },
    {
      question: "Du har utelukket to av fire alternativer på et flervalgsspørsmål, men er usikker på de to siste. Hva lønner seg?",
      options: ["Å svare, siden forventet uttelling da er positiv", "Å la stå, siden du fortsatt kan svare galt", "Å svare bare dersom du kjenner igjen begrepet", "Å la stå og heller bruke tiden på langsvaret"],
      explanation: "Med to alternativer igjen gir et riktig svar +1 og et galt −0,5, og den forventede uttellingen blir positiv. Regelen er at man svarer når to er eliminert og lar stå når ingen er det. At man fortsatt kan svare galt, endrer ikke regnestykket, og gjenkjennelse av et begrep er nettopp det som ikke er kunnskap nok til å avgjøre.",
    },
  ],
  'sos1004-3-2': [
    {
      question: "Hva er forskjellen på resultatlikhet og mulighetslikhet?",
      options: ["Den ene måler hvor folk havner, den andre måler hvor lett det var å komme dit", "Den ene måler inntekt, den andre måler utdanningsnivået i befolkningen", "Den ene er et politisk mål, mens den andre er en rettslig garanti for alle", "Den ene måles på ett tidspunkt, den andre måles over flere generasjoner"],
      explanation: "Resultatlikhet handler om hvor folk faktisk havner, mulighetslikhet om hvor lett det var å komme dit. Svaret om en rettslig garanti beskriver formallikhet, som er en egenskap ved reglene. At mulighetslikhet ofte måles over generasjoner gjennom relativ mobilitet er en målemetode, ikke definisjonen.",
    },
    {
      question: "Hva er formallikhet?",
      options: ["Likhet i regler og rettigheter, uavhengig av utfall og sjanser", "Likhet i utfall mellom grupper som måles i inntekt eller yrke", "Likhet i sjanser når man tar hensyn til foreldrenes posisjon", "Likhet i tilgang til de universelle velferdsordningene i et land"],
      explanation: "Formallikhet er en egenskap ved reglene: at loven gjelder likt og at ingen formelt utestenges. Likhet i utfall er resultatlikhet, og likhet i sjanser er mulighetslikhet. Tilgang til universelle ordninger er en konkret ordningsegenskap og ikke selve likhetsbegrepet.",
    },
    {
      question: "Hva måler absolutt utjevning?",
      options: ["Nivået, altså om levestandarden er løftet for dem som hadde minst", "Avstanden mellom dem som har mest og dem som har minst i samfunnet", "Andelen av befolkningen som lever under en fastsatt fattigdomsgrense", "Sammenhengen mellom foreldrenes posisjon og barnas posisjon senere"],
      explanation: "Absolutt utjevning måler et nivå: at levestandarden er hevet, særlig i bunnen. Avstanden mellom gruppene er relativ utjevning, og sammenhengen mellom generasjoner er relativ mobilitet. En fattigdomsgrense er en operasjonalisering og ikke selve begrepet.",
    },
    {
      question: "Hva er hovedbildet i norsk mobilitetsforskning hos Hansen og Uvaag?",
      options: ["Betydelig absolutt oppgang, men seig relativ sammenheng mellom generasjonene", "Betydelig relativ utjevning, men uendret absolutt levestandard i bunnen", "Både den absolutte og den relative mobiliteten har økt kraftig over tid", "Verken den absolutte eller den relative mobiliteten har endret seg nevneverdig"],
      explanation: "Funnet er dobbelt: bunnen er løftet kraftig, mens sammenhengen mellom foreldrenes og barnas posisjon har holdt seg og er sterkest i toppen. De to funnene motsier ikke hverandre, fordi de måler ulike ting. Det er nettopp derfor spørsmålet om velferdsstaten har lyktes, har to riktige svar.",
    },
    {
      question: "Hvorfor kan absolutt mobilitet være høy uten at sjansene er jevnere fordelt?",
      options: ["Fordi yrkesstrukturen selv endret seg og skapte flere plasser i toppen", "Fordi flere flytter mellom landsdeler enn tidligere generasjoner gjorde", "Fordi registerdata ikke fanger opp bevegelser innenfor én generasjon", "Fordi utdanningsnivået i befolkningen som helhet har steget over tid"],
      explanation: "Da industriarbeidsplasser ble erstattet av yrker som krever utdanning, måtte mange barn havne et annet sted enn foreldrene fordi rommet endret form. At utdanningsnivået har steget er en følge av den samme strukturendringen og ikke selve mekanismen. Geografisk flytting og datakvalitet er andre spørsmål.",
    },
    {
      question: "Hva er sosial reproduksjon?",
      options: ["At posisjoner overføres mellom generasjoner uten at noen bestemmer det", "At samme yrke går i arv fordi barn formelt overtar foreldrenes bedrift", "At fødselstallet i en gruppe holder gruppens størrelse stabil over tid", "At skolesystemet gjentar det samme pensumet for hvert nytt årskull"],
      explanation: "Sosial reproduksjon virker gjennom økonomisk kapital, kulturell kapital og nettverk, og overføringen skjer uten at noe testamente er involvert. Det er derfor gratis utdanning ikke er nok til å oppheve mekanismen. Formell overtakelse av virksomhet, demografi og pensumstruktur er andre fenomener.",
    },
    {
      question: "Hvilken dobbelthet ligger i utdanningssystemet som utjevningsinstrument?",
      options: ["Det utjevner tilgangen og reproduserer samtidig rangeringen mellom dem", "Det utjevner i grunnskolen og skaper ulikhet i videregående", "Det utjevner i offentlig sektor, men ikke i det private arbeidsmarkedet", "Det utjevner mellom kjønn, men ikke mellom sosiale klasser i samfunnet"],
      explanation: "Da tilgangen ble universell, flyttet konkurransen seg oppover i systemet, til studium, institusjon og karakterer, og der virker den kulturelle kapitalen videre. Det er én mekanisme med to virkninger, ikke to atskilte nivåer eller sektorer. Utdanningssystemet har dessuten utjevnet mye langs klasse i absolutt forstand.",
    },
    {
      question: "Hva er mekanismen bak kjønnsutjevningen i den nordiske modellen?",
      options: ["De-familisering: omsorgstjenester gjorde yrkesarbeid og omsorg forenlig", "De-kommodifisering: inntektssikring gjorde kvinner uavhengige av markedet", "Behovsprøving: ytelsene ble rettet mot husholdninger med lav inntekt", "Formallikhet: lovverket forbød forskjellsbehandling ved ansettelse"],
      explanation: "Utbygde omsorgstjenester flyttet ansvar fra ubetalt arbeid i hjemmet til lønnet arbeid i offentlig sektor, og gjorde det mulig å kombinere yrkesarbeid og omsorg. Inntektssikring frigjør fra markedet, ikke fra familien. Diskrimineringsvern og behovsprøving er andre virkemidler med andre virkninger.",
    },
    {
      question: "Hva er horisontal kjønnsdeling?",
      options: ["At kvinner og menn arbeider i ulike yrker og ulike sektorer", "At kvinner og menn fordeler seg ulikt oppover i stillingshierarkiene", "At kvinner og menn får ulik lønn for arbeid som er av samme verdi", "At kvinner og menn tar ut ulike andeler av den betalte permisjonen"],
      explanation: "Horisontal deling handler om hvilke yrker og sektorer folk arbeider i. Fordelingen oppover i hierarkiet er vertikal kjønnsdeling, som er det direkte nabobegrepet. Lønnsforskjeller og permisjonsuttak er virkninger og indikatorer, ikke selve begrepet.",
    },
    {
      question: "Hva er vertikal kjønnsdeling?",
      options: ["At kvinner og menn fordeler seg ulikt oppover i yrkeshierarkiene", "At kvinner og menn velger ulike utdanningsprogrammer og fag", "At kvinner og menn arbeider i ulike sektorer av arbeidsmarkedet", "At kvinner og menn har ulik gjennomsnittlig arbeidstid per uke"],
      explanation: "Vertikal deling handler om posisjoner: hvem som sitter i ledelse og i de best betalte stillingene innenfor samme sektor. Ulike sektorer og utdanningsvalg hører til den horisontale delingen. Arbeidstid er en tredje dimensjon som virker inn på begge, men er ikke det begrepet peker på.",
    },
    {
      question: "Hva beskriver det doble skiftet?",
      options: ["At yrkesaktive kvinner i tillegg tar mest av det ubetalte arbeidet", "At mange kvinner har to deltidsstillinger i stedet for én hel stilling", "At omsorgsarbeid utføres av både familien og av offentlig sektor", "At kvinners yrkesdeltakelse steg i to atskilte historiske perioder"],
      explanation: "Begrepet forutsetter at kvinner er i arbeid, og peker på at den samlede arbeidsbelastningen ikke fanges av sysselsettingstall. Deltid er et annet fenomen, og arbeidsdelingen mellom stat og familie hører til velferdstrekanten. Fordelingen av ubetalt arbeid har dessuten blitt jevnere over tid.",
    },
    {
      question: "Hva består likestillingsparadokset i?",
      options: ["Høy formell likestilling sammen med et sterkt kjønnsdelt arbeidsmarked", "Høy yrkesdeltakelse blant kvinner sammen med lav fruktbarhet i befolkningen", "Sterk likestillingspolitikk sammen med lav oppslutning om den blant velgerne", "Store forskjeller mellom kjønnene i lønn på tross av et strengt lovverk"],
      explanation: "Paradokset er at landene med mest utbygde ordninger og høyest formell likestilling også har blant Europas mest kjønnsdelte arbeidsmarkeder, horisontalt og vertikalt. Lønnsforskjeller er en virkning av delingen og ikke selve paradokset. Fruktbarhet og velgeroppslutning hører til andre temaer.",
    },
    {
      question: "Hvilke to forklaringstyper står mot hverandre i drøftingen av likestillingsparadokset?",
      options: ["Strukturelle barrierer på den ene siden og preferanser og valg på den andre", "Biologiske forskjeller mot kulturelle forskjeller mellom landene", "Offentlig sektor mot privat sektor som arbeidsgiver for kvinner", "Utdanningsnivå mot arbeidserfaring som forklaring på lønnsgapet"],
      explanation: "Den ene forklaringstypen peker på at velferdsstaten selv skapte de kvinnedominerte yrkene og at permisjons- og deltidsordninger former karriereløp. Den andre peker på at andre hensyn får større plass når økonomisk nødvendighet ikke tvinger valget. Begge posisjonene har forskere bak seg, og materialet avgjør ikke mellom dem.",
    },
    {
      question: "Hva er forskjellen på et utfallsgap og diskriminering?",
      options: ["Utfallsgapet er en korrelasjon mellom grupper, mens diskriminering er én mulig årsak blant flere", "Utfallsgapet gjelder grupper, mens diskriminering alltid gjelder enkeltpersoner", "Utfallsgapet måles i registerdata, mens diskriminering måles i spørreundersøkelser", "Utfallsgapet gjelder inntekt, mens diskriminering gjelder ansettelse og forfremmelse"],
      explanation: "Et gap i sysselsetting eller inntekt kan skyldes kvalifikasjoner, botid, helse, nettverk, diskriminering eller flere av delene samtidig, og diskriminering må derfor vises særskilt. Diskriminering kan godt være systematisk og ramme mange. Spørreundersøkelser er dessuten et svakt design for å måle den.",
    },
    {
      question: "Hva finner den registerbaserte forskningen til Hermansen og Midtbøen om etterkommere?",
      options: ["Betydelig oppadgående utdannings- og yrkesmobilitet fra foreldregenerasjonen", "At etterkommere har samme sysselsettingsrate som innvandrergenerasjonen har", "At etterkommere i hovedsak ender i de samme yrkene som foreldrene sine gjorde", "At forskjellene mellom etterkommere og majoriteten er helt borte i dag"],
      explanation: "Funnet er en tydelig oppadgående mobilitet målt mot foreldregenerasjonen. Målt mot jevnaldrende i majoritetsbefolkningen gjenstår det derimot et gap, og de to målingene svarer på ulike spørsmål. Etterkommere er dessuten født i Norge og skal ikke slås sammen med innvandrergenerasjonen.",
    },
    {
      question: "Hvorfor er det avgjørende at innkallingsgapet også gjelder søkere født og utdannet i Norge?",
      options: ["Fordi gapet da ikke kan forklares med kvalifikasjoner eller kort botid", "Fordi det viser at diskrimineringen har økt i omfang de siste årene", "Fordi det gjør at gapet kan måles i registerdata i stedet for i eksperiment", "Fordi det viser hvilket motiv som ligger bak arbeidsgiverens beslutning"],
      explanation: "Når søkeren har norsk skolegang og norsk utdanning, faller de vanligste alternative forklaringene bort, og det styrker tolkningen av gapet som diskriminering. Designet sier fortsatt ingenting om motivet, og det måler ett ledd i prosessen. Funnet handler om nivå, ikke om utvikling over tid.",
    },
    {
      question: "Hva betyr det at sammenlikningsgrunnlaget avgjør konklusjonen?",
      options: ["At samme data gir ulikt svar målt mot foreldrene og mot jevnaldrende", "At data fra ulike land ikke kan brukes i den samme analysen", "At registerdata og survey gir systematisk forskjellige resultater", "At konklusjonen avhenger av hvilket år undersøkelsen ble gjennomført"],
      explanation: "Måler man etterkommerne mot foreldregenerasjonen, ser man kraftig mobilitet; måler man mot jevnaldrende i majoritetsbefolkningen, ser man et gjenstående gap. Begge målingene er korrekte og svarer på hvert sitt spørsmål. Datakilde og undersøkelsesår er andre metodespørsmål.",
    },
    {
      question: "Hva er integreringsparadokset i utjevningsversjon?",
      options: ["Utgangspunktet utjevnes, mens mottakelsen i arbeidsmarkedet ikke gjør det", "Innvandrere får flere rettigheter enn etterkommere gjør i samme situasjon", "Integreringen går raskere i storbyene enn i resten av landet", "Utdanningsnivået stiger samtidig som sysselsettingen faller i befolkningen"],
      explanation: "Velferdsstaten kan utjevne kvalifikasjoner og skolegang, men ikke hva som skjer når en søknad leses, og derfor står mobilitetsfunnet og diskrimineringsfunnet side om side. De to måles mot hvert sitt sammenlikningsgrunnlag og på hvert sitt ledd i løpet. De øvrige svarene beskriver andre forhold.",
    },
    {
      question: "Hva skiller en interseksjonell fra en additiv analyse?",
      options: ["Den interseksjonelle spør om krysningspunktet har egne mekanismer", "Den interseksjonelle tar med flere dimensjoner enn den additive gjør", "Den interseksjonelle bruker kvalitative data der den additive bruker tall", "Den interseksjonelle ser på grupper der den additive ser på enkeltpersoner"],
      explanation: "En additiv analyse legger ulempene oppå hverandre, mens en interseksjonell spør om krysningspunktet utgjør en egen posisjon med egne mekanismer. Antall dimensjoner er ikke det avgjørende, og begge tilnærmingene kan bruke både tall og kvalitative data.",
    },
    {
      question: "Når er det en feil å nevne interseksjonalitet i en besvarelse?",
      options: ["Når begrepet ikke endrer noe av det du faktisk kan si om materialet", "Når oppgaven bare nevner én ulikhetsdimensjon i teksten", "Når du ikke oppgir hvem som først innførte begrepet i faget", "Når analysen bygger på registerdata i stedet for på intervjuer"],
      explanation: "Et begrep som bare nevnes uten å avdekke noe, er navn uten funn i ny drakt, og det gir ingen uttelling. Begrepet kan godt brukes selv om oppgaven nevner én dimensjon, så lenge det gjør en jobb. Verken opphavsangivelse eller datatype avgjør om bruken er meningsfull.",
    },
    {
      question: "Hva er målestokkproblemet i utjevningsspørsmålet?",
      options: ["At spørsmålet har flere riktige svar avhengig av hva som måles", "At det ikke finnes gode nok data til å måle ulikhet i Norge", "At ulike forskere bruker ulike definisjoner av begrepet ulikhet", "At måling av ulikhet alltid innebærer en politisk vurdering"],
      explanation: "Absolutt mot relativt, utgangspunkt mot mottakelse, mot foreldrene mot mot jevnaldrende: hver måling har sitt eget svar med sitt eget belegg. Det er ikke en påstand om at alt er like sant, og heller ikke om at data mangler. Poenget er at spørsmålet er underspesifisert til målestokken er oppgitt.",
    },
    {
      question: "Hva menes med nye ulikhetslinjer?",
      options: ["Forskjeller som vokser fram etter hvert som de gamle jevnes ut", "Forskjeller som først oppstår etter at en person er kommet i arbeid", "Forskjeller mellom landsdeler som avløser klasseforskjeller", "Forskjeller som bare kan måles med kvalitative forskningsmetoder"],
      explanation: "Skillet mellom innenfor og utenfor arbeidslivet, fast mot løs tilknytning, og helse og funksjonsevne er eksempler på dimensjoner som de etablerte målene ikke nødvendigvis fanger. Poenget er ikke at ulikhet er uendelig komplekst, men at et prosjekt kan lykkes på sin egen dimensjon og etterlate andre. Geografi og metodevalg er andre spørsmål.",
    },
    {
      question: "Hva er Grues poeng om funksjonshemming?",
      options: ["At den er samfunnsskapt gjennom barrierer og forventninger", "At den er en egenskap ved kroppen som medisinen kan avhjelpe", "At den rammer først og fremst grupper med lav utdanning", "At den bør regnes som en egen sosial klasse i mobilitetsanalyser"],
      explanation: "Grue viser at funksjonshemming ikke bare følger av en diagnose, men av hvordan omgivelsene er innrettet og hva som forventes. En rent medisinsk forståelse er nettopp det begrepet er formulert mot. Funksjonshemming er heller ikke en klasseposisjon eller en egenskap ved en utdanningsgruppe.",
    },
    {
      question: "Hvilken sammenlikning kan forskningen ikke gjøre direkte når den vurderer velferdsstatens utjevning?",
      options: ["Hva forskjellene ville vært uten de universelle ordningene", "Hvordan forskjellene i Norge er sammenliknet med andre land", "Hvordan forskjellene har utviklet seg over flere tiår", "Hvor stor forskjellen er mellom øverste og nederste inntektsgruppe"],
      explanation: "Det finnes ingen norsk befolkning uten universelle ordninger å sammenlikne med, og derfor er den mest nærliggende kontrafaktiske sammenlikningen utilgjengelig. Sammenlikning over tid, mellom land og mellom inntektsgrupper er derimot fullt mulig. Å peke på nettopp denne grensen er et sluttgrep som gir uttelling.",
    },
  ],
  'sos1004-3-3': [
    {
      question: "Hva er forsørgerbrøken?",
      options: ["Forholdet mellom dem som forsørges og dem som forsørger i en befolkning", "Andelen av befolkningen som lever under en fastsatt fattigdomsgrense", "Andelen av statens utgifter som går til trygder og sosiale ytelser", "Forholdet mellom skatteinntekter og utgifter i det årlige statsbudsjettet"],
      explanation: "Brøken er et forholdstall mellom den delen av befolkningen som ikke er yrkesaktiv og den delen som er det, og i en løpende finansiert modell avgjør den hvor mye velferd hver skattekrone må dekke. Den er verken et fattigdomsmål eller et budsjettmål. Barn inngår på forsørgersiden på samme måte som eldre.",
    },
    {
      question: "Hva skiller den demografiske fra den økonomiske forsørgerbrøken?",
      options: ["Den ene deler etter alder, den andre etter faktisk yrkesdeltakelse", "Den ene måles i dag, den andre er en framskriving av framtiden", "Den ene gjelder hele landet, den andre gjelder den enkelte kommunen", "Den ene regner med barn, mens den andre bare regner med eldre personer"],
      explanation: "Den demografiske varianten deler befolkningen etter aldersgrenser, mens den økonomiske deler etter om folk faktisk er i arbeid. Derfor teller en person i yrkesaktiv alder uten jobb på hver sin side i de to brøkene. Skillet mellom måling og framskriving og spørsmålet om geografisk nivå er andre distinksjoner.",
    },
    {
      question: "Hvorfor kan sysselsettingspolitikk endre forsørgerbrøken raskere enn befolkningspolitikk?",
      options: ["Fordi en som går fra ledig til sysselsatt bytter side i brøken umiddelbart", "Fordi skatteinntektene fra nye arbeidstakere er høyere enn fra andre grupper", "Fordi framskrivinger av befolkningen alltid inneholder betydelig usikkerhet", "Fordi befolkningspolitikk krever politiske vedtak som tar tid å gjennomføre"],
      explanation: "Virkningen er dobbel og umiddelbar: personen forsvinner fra den forsørgede siden og legges til den forsørgende. Fødselstall og innvandring virker først etter tiår, fordi barn må vokse opp og innvandrere må komme inn i arbeid. Usikkerhet i framskrivinger og politisk saksbehandlingstid er andre forhold.",
    },
    {
      question: "Hva er aldring i demografisk forstand?",
      options: ["At andelen eldre i befolkningen øker, drevet av levealder og fruktbarhet", "At den enkelte lever lenger enn foreldregenerasjonen sin gjorde", "At antallet personer over pensjonsalder i landet stiger fra år til år", "At det er flere pensjonister enn barn i befolkningen på et gitt tidspunkt"],
      explanation: "Aldring handler om befolkningens sammensetning, og drives både av at levealderen stiger og av at det fødes færre barn. En befolkning kan eldes selv om ingen enkeltperson lever lenger enn før, hvis fødselstallet faller nok. De øvrige svarene beskriver enkelttall og ikke sammensetningen.",
    },
    {
      question: "Hvorfor er skillet mellom levealder og friske leveår viktig for bærekraftsregnestykket?",
      options: ["Fordi det avgjør om de tilføyde årene gir omsorgsbehov eller lengre karriere", "Fordi friske leveår er lettere å måle presist enn forventet levealder er", "Fordi pensjonsalderen fastsettes ut fra antallet friske leveår i et årskull", "Fordi levealderen varierer mer mellom yrkesgrupper enn friske leveår gjør"],
      explanation: "Stiger levealderen uten at friske leveår følger med, blir flere år med omsorgsbehov; stiger de i takt, kan yrkeskarrieren bli lengre. Aldringens kostnad avhenger altså av hvilke år som legges til, ikke bare av hvor mange. Om økningen i friske leveår holder følge, er et åpent spørsmål i forskningen.",
    },
    {
      question: "Hvilke tre størrelser bestemmer befolkningens sammensetning?",
      options: ["Fruktbarhet, levealder og nettoflytting mellom land", "Fruktbarhet, sysselsetting og skattenivå", "Levealder, utdanningsnivå og bosettingsmønster", "Fødselstall, dødelighet og andelen i yrkesaktiv alder"],
      explanation: "De tre driverne er hvor mange barn som fødes, hvor lenge folk lever, og forskjellen mellom inn- og utvandring. Sysselsetting og skattenivå påvirker økonomien, men ikke befolkningens sammensetning. Andelen i yrkesaktiv alder er et resultat av de tre driverne og ikke en driver i seg selv.",
    },
    {
      question: "Hva menes med velferdsstatens bærekraft?",
      options: ["Om ordningene kan opprettholdes på dagens nivå over tid", "Om ordningene tar tilstrekkelig hensyn til klima og miljø", "Om ordningene er populære nok til å overleve et regjeringsskifte", "Om ordningene når fram til alle grupper som har rett på dem"],
      explanation: "Bærekraft handler om at ordningene kan videreføres uten kraftig nedbygging eller uholdbar finansiering, og begrepet har både en økonomisk og en legitimitetsmessig del. Ordet er lånt fra miljødebatten, men brukes her om noe annet. Måloppnåelse og popularitet er andre spørsmål.",
    },
    {
      question: "Hva er økonomisk bærekraft i velferdssammenheng?",
      options: ["Om inntektene over tid kan dekke utgiftene til de lovede ordningene", "Om staten har spart opp nok kapital til å dekke framtidige pensjoner", "Om ytelsene er høye nok til at mottakerne kommer over fattigdomsgrensen", "Om utgiftene til velferd holder seg under et fastsatt tak i budsjettet"],
      explanation: "Fordi ordningene er løpende finansiert, avgjøres den økonomiske bærekraften av forholdet mellom hvor mange som betaler og hvor mange som mottar. En oppspart formue endrer tidshorisonten, men ikke mekanismen. Ytelsesnivå og budsjettak er politiske størrelser og ikke selve begrepet.",
    },
    {
      question: "Hva er legitimitetsmessig bærekraft?",
      options: ["Om oppslutningen om ordningene holder seg over tid blant velgerne", "Om ordningene er hjemlet i gyldige lover og forskrifter", "Om ordningene behandler alle mottakere likt i saksbehandlingen", "Om ordningene har støtte i internasjonale konvensjoner om rettigheter"],
      explanation: "Legitimitetsmessig bærekraft handler om at folk flest fortsatt opplever at de får noe igjen og at de andre mottakerne er berettiget. Lovhjemmel og likebehandling er rettslige spørsmål, ikke sosiologiske om oppslutning. En ordning kan være fullt lovlig og finansierbar og likevel miste politisk støtte.",
    },
    {
      question: "Hvorfor er universelle ordninger selvforsterkende i legitimitet?",
      options: ["Fordi alle er både bidragsytere og mottakere, slik at skillet blir svakt", "Fordi de er billigere å administrere enn behovsprøvde ordninger er", "Fordi de er vedtatt med bredere flertall i nasjonalforsamlingen", "Fordi de gir mest utjevning per krone som utbetales til mottakerne"],
      explanation: "Når alle mottar og alle betaler, blir skillet mellom de som betaler og de som mottar svakt, og ordningen framstår som noe felles. Behovsprøvde ordninger produserer nettopp det skillet som en bivirkning. Målrettede ordninger gir dessuten mer utjevning per krone, og det er derfor avveiningen er reell.",
    },
    {
      question: "Hva er sysselsettingskravet i den universelle modellen?",
      options: ["At sysselsettingen må være høy i hele befolkningen, ikke bare i snitt", "At alle mottakere av ytelser må være aktivt arbeidssøkende", "At offentlig sektor må sysselsette en stor del av arbeidsstyrken", "At yrkesdeltakelsen må ligge over gjennomsnittet i sammenliknbare land"],
      explanation: "Fordi ordningene finansieres løpende, må sysselsettingen være høy også i de gruppene som ellers ville hatt lav yrkesdeltakelse, siden et høyt gjennomsnitt kan skjule store gruppeforskjeller. Aktivitetsplikt for mottakere er et politisk virkemiddel, ikke selve mekanismen. Andelen i offentlig sektor er en annen størrelse.",
    },
    {
      question: "Hvorfor er den universelle modellen mer sårbar for lav sysselsetting enn en residual modell?",
      options: ["Fordi den lover mer, slik at rettighetene løper også når bidraget er lavt", "Fordi den har færre kilder til finansiering enn en residual modell har", "Fordi den krever at ytelsene prøves individuelt mot søkerens inntekt", "Fordi den finansieres av avgifter og ikke av alminnelig inntektsskatt"],
      explanation: "Rettighetene utløses av medlemskap i samfunnet, mens finansieringen kommer fra dem som er i arbeid, og den asymmetrien er sårbarheten. En residual modell med beskjedne, behovsprøvde ytelser har rett og slett mindre å dekke. Individuell prøving er nettopp det den universelle modellen ikke gjør.",
    },
    {
      question: "Hva er innvandringens aldersprofil, og hvorfor betyr den noe?",
      options: ["De som kommer er yngre, så befolkningen i yrkesaktiv alder vokser", "De som kommer er eldre, så antallet mottakere av pensjon stiger raskt", "De som kommer har flere barn, så fruktbarhetstallet i landet stiger", "De som kommer bosetter seg i byene, så presset på tjenestene flyttes"],
      explanation: "Innvandrere er i gjennomsnitt yngre enn befolkningen de kommer til, og de fleste er i yrkesaktiv alder, slik at den demografiske forsørgerbrøken bedres umiddelbart uten at mottakerlandet har finansiert oppveksten. Bosettingsmønster og fruktbarhet er andre virkninger. Aldersprofilen sier ingenting om hvor mange som faktisk kommer i arbeid.",
    },
    {
      question: "Hva er hovedforbeholdet mot innvandring som svar på aldringen?",
      options: ["At hvert kull som kommer, selv blir eldre i landet med opparbeidede rettigheter", "At innvandrere i gjennomsnitt lever kortere enn majoriteten", "At framskrivinger ikke kan ta hensyn til nettoflytting i beregningene", "At arbeidsinnvandrere sjelden blir boende i landet over lengre tid"],
      explanation: "Avlastningen er midlertidig for hvert enkelt kull, fordi de som kommer som unge voksne, blir eldre med opparbeidede rettigheter. Mekanismen omtales derfor som en utsettelse snarere enn en løsning. Nettoflytting er en av forutsetningene framskrivinger bygger på, og en betydelig del av arbeidsinnvandrerne bosetter seg permanent.",
    },
    {
      question: "Hvorfor er innvandringsgrunn viktig i en bærekraftsdrøfting?",
      options: ["Fordi sysselsettingen skiller seg sterkt mellom gruppene fra starten", "Fordi ulike innvandringsgrunner gir rett til ulike velferdsytelser", "Fordi bare arbeidsinnvandrere betaler skatt de første årene i landet", "Fordi statistikken bare finnes brutt ned på innvandringsgrunn i Norge"],
      explanation: "Arbeidsinnvandrere har høy sysselsetting fra første dag, mens sysselsettingen blant dem som kom som flyktninger ligger markant lavere de første årene og stiger med botid. Et gjennomsnitt over alle grunner beskriver derfor ingen av gruppene. Skatteplikt følger av arbeid og bosetting, ikke av innvandringsgrunn.",
    },
    {
      question: "Hva hører alltid med når sysselsettingsgapet blant nyankomne omtales?",
      options: ["At gapet krymper med økende botid i landet", "At gapet er størst blant arbeidsinnvandrere fra europeiske land", "At gapet skyldes diskriminering i ansettelsesprosessen", "At gapet er like stort blant etterkommere som blant innvandrere"],
      explanation: "At gapet krymper med botid, er en del av funnet og peker på at hovedmekanismen er en treg inngang og ikke en varig tilstand. Sysselsettingstall kan ikke i seg selv fastslå årsaken, og diskriminering er én mulig årsak blant flere. Blant etterkommere er gapet mot jevnaldrende langt mindre.",
    },
    {
      question: "Hvorfor er beregninger av nettobidrag over livsløpet omstridte?",
      options: ["Fordi resultatet avhenger av tidshorisont, gruppeinndeling og fordeling av felles goder", "Fordi det ikke finnes registerdata over skatteinnbetalinger i Norge", "Fordi metoden bare kan brukes på grupper med lang botid i landet", "Fordi beregningene alltid utføres av forskere med politiske bindinger"],
      explanation: "Alle mennesker mottar mer enn de betaler i barndom og alderdom, felles goder som forsvar og veinett må fordeles på enkeltpersoner etter en valgt nøkkel, og gjennomsnitt over alle innvandringsgrunner skjuler store forskjeller. Datagrunnlaget er derimot godt. Slike tall er regnskapstall under forutsetninger, ikke etablerte funn.",
    },
    {
      question: "Hva er velferdsstatsparadokset i bærekraftsversjon?",
      options: ["At innvandring både avlaster og belaster den samme forsørgerbrøken", "At velferdsstaten både utjevner klasse og forsterker kjønnsforskjeller", "At de eldre både mottar tjenester og betaler skatt av pensjonen sin", "At høyere ytelser både øker forbruket og svekker statsfinansene"],
      explanation: "Aldersprofilen og arbeidsinnvandrernes sysselsetting avlaster, mens lav sysselsetting blant nyankomne belaster, og begge deler er funn i det samme registermaterialet sortert etter innvandringsgrunn, botid og generasjon. Det er ikke to politiske syn som balanseres, men to grupper i samme data. De øvrige svarene beskriver andre spenninger.",
    },
    {
      question: "Hva gjør levealdersjusteringen i pensjonssystemet?",
      options: ["Fordeler opptjent pensjon over flere år når et årskull lever lenger", "Hever den formelle pensjonsalderen hvert år levealderen stiger", "Reduserer den samlede pensjonsopptjeningen for yngre årskull", "Gir høyere pensjon til dem som har hatt fysisk krevende yrker"],
      explanation: "Mekanismen kobler pensjonsutgiftene automatisk til levealderen ved at årlig utbetaling justeres, med mindre den enkelte står lenger i arbeid. Den samlede opptjeningen reduseres ikke, og den formelle pensjonsalderen er en annen størrelse. At virkningen slår ulikt ut etter yrke og helse, er nettopp en innvending mot mekanismen.",
    },
    {
      question: "Hva er hovedbegrensningen ved å øke yrkesdeltakelsen som virkemiddel?",
      options: ["Yrkesdeltakelsen er allerede høy, og potensialet er ulikt fordelt i dag", "Økt yrkesdeltakelse gir lavere lønn og dermed lavere skatteinntekter", "Virkemidlet virker først etter flere tiår, som befolkningspolitikk gjør", "Virkemidlet krever at pensjonsalderen settes ned for de eldste kullene"],
      explanation: "Norge har høy yrkesdeltakelse i internasjonal sammenlikning, så rommet for økning er begrenset, og det som finnes, ligger særlig i grupper som møter kompetanse- og terskeleffekter. Til gjengjeld virker virkemidlet raskt, i motsetning til befolkningspolitikk. De øvrige svarene beskriver sammenhenger som ikke følger.",
    },
    {
      question: "Hvordan behandler boka valget mellom innstramming og investering?",
      options: ["Som et posisjonspar der begge har sammenhengende begrunnelser", "Som et spørsmål forskningen har avgjort til fordel for investering", "Som et spørsmål forskningen har avgjort til fordel for innstramming", "Som et rent teknisk spørsmål om beregning av framtidige budsjetter"],
      explanation: "Innstrammingsposisjonen begrunnes med at en ordning som ikke kan finansieres, ikke hjelper noen på sikt; investeringsposisjonen med at et menneske i arbeid bytter side i forsørgerbrøken. Hvor mye hvert virkemiddel kan utrette, er empirisk uavklart, og hvilke verdier som skal veie tyngst, besvares ikke av dataene.",
    },
    {
      question: "Hva er den viktigste innvendingen mot metaforen «eldrebølgen»?",
      options: ["En bølge går over, mens aldringen gir et varig høyere nivå", "Metaforen overdriver hvor mange eldre det faktisk blir", "Metaforen brukes bare i Norge og ikke i andre nordiske land", "Metaforen forutsetter at levealderen vil fortsette å stige"],
      explanation: "Aldringen fører til et nytt normalnivå fordi levealderen har steget permanent og fruktbarheten har falt, og bildet av en bølge antyder feilaktig en midlertidig hendelse. Metaforen plasserer dessuten eldre entydig på mottakersiden av forsørgerbrøken. Den overdriver ikke omfanget, og innvendingen er faglig, ikke språkgeografisk.",
    },
  ],
  'sos1004-4-1': [
    {
      question: "Hvilke fire komponenter utgjør befolkningsregnskapet?",
      options: ["Fødte, døde, innvandrede og utvandrede", "Fødte, døde, inngåtte og oppløste ekteskap", "Fruktbarhet, dødelighet, levealder og alder", "Barn, voksne i arbeid, eldre og innflyttere"],
      explanation: "All endring i et folketall går gjennom disse fire strømmene, og alt annet virker gjennom en av dem. Ekteskap og skilsmisser endrer ikke folketallet. Fruktbarhet og levealder er mål på strømmene og ikke strømmer, og aldersgrupper er en inndeling av befolkningen.",
    },
    {
      question: "Hva er fødselsoverskuddet i en befolkning?",
      options: ["Antall fødte minus antall døde i perioden", "Antall fødte minus antall utvandrede", "Antall fødte utover det reproduksjonsnivået tilsier", "Den samlede veksten i folketallet i perioden"],
      explanation: "Fødselsoverskuddet setter fødte opp mot døde, og er negativt når det dør flere enn det fødes. Den samlede folketallsveksten er noe annet, siden den også inneholder nettoinnvandringen. Utvandring hører til migrasjonskomponenten, og reproduksjonsnivået er en terskel.",
    },
    {
      question: "Hva er nettoinnvandring?",
      options: ["Antall innvandrede minus antall utvandrede", "Antall innvandrede i løpet av året", "Andelen innvandrere i den samlede befolkningen", "Antall innvandrede som fortsatt bor her etter fem år"],
      explanation: "Nettoinnvandring er differansen mellom inn- og utflytting, og bare den påvirker folketallet. Bruttotallet for innvandring sier ingenting alene, siden mange flytter ut igjen. Andelen innvandrere er en beholdning og ikke en strøm, og botid er et annet mål.",
    },
    {
      question: "Hvorfor kan et land ha fødselsunderskudd og likevel vokse i folketall?",
      options: ["Fordi nettoinnvandringen kan overstige underskuddet", "Fordi levealderen stiger og færre dør enn statistikken viser", "Fordi fødselsoverskuddet regnes ut på nytt hvert tiår", "Fordi barn født i utlandet telles med i fødselstallet"],
      explanation: "Befolkningsveksten er fødselsoverskuddet pluss nettoinnvandringen, så en stor netto innflytting kan veie opp for at det dør flere enn det fødes. Stigende levealder er allerede innbakt i antall døde. De to siste beskriver ingen praksis som finnes i statistikken.",
    },
    {
      question: "På hvilke måter virker migrasjon på en befolkning?",
      options: ["Den endrer folketallet, alderssammensetningen og fødselstallet", "Den endrer folketallet, men ikke sammensetningen av det", "Den endrer folketallet og fruktbarheten per kvinne i landet", "Den endrer alderssammensetningen, men ikke antallet fødsler i året"],
      explanation: "Migrasjon virker direkte på folketallet, forskyver alderssammensetningen fordi de som flytter er unge voksne, og løfter antall fødsler fordi det blir flere kvinner i fødedyktig alder. Den endrer altså ikke fruktbarheten per kvinne, men antallet kvinner som kan føde.",
    },
    {
      question: "Hva er befolkningsmomentum?",
      options: ["At befolkningen beveger seg videre en tid etter at fruktbarheten endres", "At fruktbarheten stiger igjen etter en periode med lave fødselstall", "At innvandringen øker når arbeidsmarkedet i landet blir strammere", "At store kull alltid gir enda større kull i neste generasjon enn i forrige"],
      explanation: "Momentum er tregheten som ligger i alderssammensetningen: en befolkning med mange kvinner i fødedyktig alder kan vokse i tiår selv med fruktbarhet under reproduksjonsnivå. Det er verken en påstand om at fruktbarheten snur, om arbeidsmarkedet eller om kullenes vekst.",
    },
    {
      question: "Hva forteller formen på en befolkningspyramide?",
      options: ["Spor av tidligere fødsler, dødsfall og flyttinger, kull for kull", "Hvor stor andel av befolkningen som er i arbeid akkurat nå", "Hvordan folketallet vil utvikle seg under gitte forutsetninger", "Hvor mange barn kvinnene i landet i gjennomsnitt kommer til å få totalt"],
      explanation: "Hvert trinn i pyramiden er en kohort, og formen bærer historien til det årskullet. Beregningen av framtidig folketall under gitte forutsetninger er en framskriving og ikke pyramiden i seg selv. Sysselsetting og forventet barnetall er helt andre størrelser.",
    },
    {
      question: "Hva er samlet fruktbarhetstall for et gitt år?",
      options: ["Barn per kvinne, som summen av årets aldersspesifikke rater", "Det absolutte antallet barn som ble født i landet i året", "Barn per kvinne blant dem som fikk minst ett barn i løpet av året", "Antall barn kvinnene i landet i gjennomsnitt hadde ved årets slutt"],
      explanation: "Samlet fruktbarhetstall er en rate per kvinne, bygget av fødselsratene for hver aldersgruppe det ene året. Det absolutte antallet fødte er fødselstallet, en helt annen størrelse. Å begrense målet til dem som fikk barn utelater de barnløse, og en beholdning ved årets slutt er ikke årets fruktbarhet.",
    },
    {
      question: "Hvorfor kalles samlet fruktbarhetstall et syntetisk mål?",
      options: ["Fordi det setter sammen et tenkt livsløp av ett års fødemønster", "Fordi det bygger på et utvalg og ikke på hele befolkningen", "Fordi det justeres i ettertid når kohortene er ferdige med å føde", "Fordi det slår sammen fruktbarhet og dødelighet i ett enkelt tall"],
      explanation: "Målet beskriver et år og ikke en kvinne: ingen er tjue og trettifem samtidig, og ingen har levd det livsløpet tallet beskriver. Det bygger på registrerte fødsler for hele befolkningen og ikke på et utvalg, det revideres ikke etter kohortene, og dødelighet inngår ikke i det.",
    },
    {
      question: "Hva er fødselstallet?",
      options: ["Det absolutte antallet barn født i en periode", "Antall barn per kvinne i fødedyktig alder i perioden", "Antall fødte minus antall døde i løpet av perioden", "Antall barn per kvinne målt for et helt årskull kvinner"],
      explanation: "Fødselstallet er en telling av mennesker og ikke en rate. Barn per kvinne i ett år er samlet fruktbarhetstall, barn per kvinne for et helt årskull er kohortfruktbarhet, og fødte minus døde er fødselsoverskuddet. Fire nærliggende størrelser, fire ulike betydninger.",
    },
    {
      question: "Hvorfor kan fødselstallet holde seg oppe i et år der samlet fruktbarhetstall faller?",
      options: ["Fordi mange kvinner er i fødedyktig alder samtidig", "Fordi spedbarnsdødeligheten faller i den samme perioden", "Fordi nettoinnvandringen inngår i fødselstallet", "Fordi reproduksjonsnivået justeres opp når fruktbarheten faller"],
      explanation: "Antall fødsler avhenger både av barn per kvinne og av hvor mange kvinner som kan få barn, så en stor kohort i de mest fødeaktive årene kan holde tallet oppe. Spedbarnsdødelighet påvirker ikke antall fødte, innvandring er en egen komponent i regnskapet, og reproduksjonsnivået følger av dødeligheten.",
    },
    {
      question: "Hva er reproduksjonsnivået?",
      options: ["Nivået som på sikt holder befolkningen stabil uten innvandring", "Det nivået landet har hatt i gjennomsnitt over tid", "Det antallet fødsler som trengs for å dekke arbeidskraftbehovet", "Det nivået som gir like mange fødte som døde i hvert enkelt år"],
      explanation: "Reproduksjonsnivået er terskelen for at hver generasjon skal erstatte den forrige uten tilflytting, og det ligger på om lag 2,1 barn per kvinne i land med lav barnedødelighet. Det er verken et historisk gjennomsnitt, et arbeidsmarkedsbehov eller et krav om årlig balanse.",
    },
    {
      question: "Hvorfor ligger reproduksjonsnivået litt over to barn per kvinne?",
      options: ["Fordi det fødes flere gutter enn jenter, og ikke alle blir voksne", "Fordi noen kvinner ikke får barn i det hele tatt i løpet av livet", "Fordi utvandring må kompenseres av et tilsvarende antall fødsler", "Fordi tallet er rundet opp fra to for å gi en viss sikkerhetsmargin"],
      explanation: "Påslaget over to følger av kjønnsfordelingen ved fødselen og av dødsfall før fødedyktig alder, og det er derfor høyere i land med høy barnedødelighet. Barnløshet er allerede innbakt i et gjennomsnitt per kvinne, migrasjon holdes utenfor definisjonen, og tallet er beregnet og ikke avrundet.",
    },
    {
      question: "Hvordan har samlet fruktbarhetstall i Norge utviklet seg?",
      options: ["Det lå nær 2 rundt 2009 og har falt til rundt 1,4 på 2020-tallet", "Det har ligget stabilt like over reproduksjonsnivået siden 2009", "Det falt kraftig fram til 2009 og har siden tatt seg opp igjen", "Det har svingt rundt reproduksjonsnivået uten noen tydelig retning"],
      explanation: "Utviklingen går fra like under til godt under reproduksjonsnivået på om lag 2,1 barn per kvinne. Beskrivelsene av stabilitet, av en oppgang etterpå og av retningsløs svingning stemmer ikke med tidsserien, som viser et sammenhengende fall etter det høyeste nivået.",
    },
    {
      question: "Hva er et periodemål for fruktbarhet?",
      options: ["Et mål som beskriver ett kalenderår på tvers av aldersgruppene", "Et mål som følger et årskull gjennom hele fødedyktig alder", "Et mål som beregnes for en tiårsperiode om gangen", "Et mål som viser fødslene i den mest fødeaktive aldersgruppen"],
      explanation: "Periodemålet er et tverrsnitt av ett år, og samlet fruktbarhetstall er det viktigste av dem. Å følge et årskull gjennom livet er kohortmålet. Perioden er ett år og ikke ti, og målet dekker alle aldersgrupper og ikke bare den mest fødeaktive.",
    },
    {
      question: "Hva er kohortfruktbarhet?",
      options: ["Antall barn kvinner født samme år fikk til slutt", "Antall barn per kvinne i landet i et bestemt kalenderår", "Antall barn per kvinne i en bestemt aldersgruppe i dag", "Antall barn per kvinne blant dem som selv er født i utlandet"],
      explanation: "Kohortfruktbarhet følger et årskull gjennom hele fødedyktig alder og beskriver kvinner som virkelig har levd. Barn per kvinne i ett kalenderår er samlet fruktbarhetstall, altså et periodemål. En enkelt aldersgruppe i dag er en aldersspesifikk rate, og fødeland er en annen inndeling.",
    },
    {
      question: "Hva gjør en tempoeffekt med samlet fruktbarhetstall?",
      options: ["Den trekker periodemålet ned mens utsettelsen av fødsler pågår", "Den trekker tallet opp fordi fødslene samler seg i færre årganger", "Den gjør tallet mer treffsikkert som mål på kohortenes barnetall", "Den påvirker ikke tallet, siden fødslene uansett blir registrert"],
      explanation: "Når fødsler forskyves til senere år, blir periodemålet for årene forskyvningen pågår, lavere enn det kohortene ender med. Målet blir dermed mindre og ikke mer treffsikkert som uttrykk for kohortenes barnetall, og virkningen er reell selv om hver fødsel registreres i det året den skjer.",
    },
    {
      question: "Hva kan et fall i samlet fruktbarhetstall bety?",
      options: ["Enten at barna kommer senere, eller at det blir færre barn i alt", "Bare at kvinnene i landet ender opp med færre barn enn før", "Bare at fødslene forskyves til senere år i livsløpet", "At antall fødte i absolutte tall må ha gått ned det samme året"],
      explanation: "Et periodemål kan ikke i seg selv skille tempo fra nivå, og derfor er begge lesningene åpne til kohortene er ferdige. Å låse svaret til bare den ene er nettopp fella. Antallet fødte er en egen størrelse som også avhenger av hvor mange kvinner som er i fødedyktig alder.",
    },
    {
      question: "Hvorfor er det viktig å skille fruktbarhet fra fødselstall?",
      options: ["Fordi den ene er en rate per kvinne og den andre en telling", "Fordi den ene måles årlig og den andre hvert tiår", "Fordi den ene gjelder kvinner og den andre gjelder begge kjønn", "Fordi den ene brukes i Norge og den andre i internasjonale tall"],
      explanation: "Samlet fruktbarhetstall er barn per kvinne, mens fødselstallet er antallet fødte i alt, og det siste avhenger også av hvor mange kvinner som er i fødedyktig alder. Derfor kan de bevege seg i hver sin retning. Begge måles årlig, begge gjelder fødsler, og begge brukes både nasjonalt og internasjonalt.",
    },
    {
      question: "Hva beskriver den demografiske overgangen?",
      options: ["Bevegelsen fra høye til lave fødsels- og dødstall", "Bevegelsen fra ekteskap til samboerskap som ramme rundt barn", "Bevegelsen fra landsbygd til by i takt med industrialiseringen", "Bevegelsen fra stor til liten husholdning gjennom generasjonene"],
      explanation: "Overgangen handler om balansen mellom to strømmer, fødsler og dødsfall, og om at de ikke endrer seg samtidig. Endringen i samlivsform hører til den andre demografiske overgangen. Urbanisering og husholdningsstørrelse er beslektede prosesser, men ikke det begrepet betegner.",
    },
    {
      question: "Hvilken rekkefølge har endringene i den demografiske overgangen?",
      options: ["Dødeligheten faller først, og fødselstallene følger etter", "Fødselstallene faller først, og dødeligheten følger etter", "Begge faller samtidig, men dødeligheten raskest av de to", "Dødeligheten faller, mens fødselstallene holder seg høye hele veien"],
      explanation: "Rekkefølgen er selve innholdet i modellen: dødeligheten kan senkes utenfra gjennom levekår og infrastruktur, mens fødselstallene forutsetter at mange endrer livene sine, og det tar tid. Uten forsinkelsen mellom de to ville det ikke oppstått noen vekstpuls, og fødselstallene faller til slutt de også.",
    },
    {
      question: "Hva skyldes vekstpulsen i den demografiske overgangen?",
      options: ["At dødeligheten falt tidligere enn fødselstallene gjorde det", "At folk begynte å få flere barn enn de hadde gjort tidligere", "At innvandringen økte kraftig i den samme perioden", "At levealderen steg fordi flere nådde en svært høy alder"],
      explanation: "Veksten er et etterslep mellom to fallende kurver: det fødes omtrent like mange som før, mens langt flere overlever. Barnetallet steg altså ikke. Migrasjon inngår nesten ikke i modellen, og de tidlige levealdergevinstene kom av at færre barn døde og ikke av at flere ble svært gamle.",
    },
    {
      question: "Hva drev dødelighetsfallet tidlig i den demografiske overgangen?",
      options: ["Bedre ernæring, rent vann og avløp, og deretter vaksinasjon", "Moderne sykehusbehandling og legemidler mot kroniske lidelser", "At folk fikk færre barn og dermed kunne stelle bedre med hvert", "At befolkningen flyttet fra byene og ut på landsbygda igjen"],
      explanation: "De tidligste og største bidragene kom fra levekår og infrastruktur og ikke fra behandling; medisinen ble en hoveddriver først da gevinstene begynte å komme i høy alder. Fødselstallene falt etter dødeligheten og ikke før, og overgangen fulgte urbanisering og ikke det motsatte.",
    },
    {
      question: "Hva kjennetegner etterovergangsfasen slik den faktisk har blitt i rike land?",
      options: ["Lave fødselstall og lav dødelighet, med fruktbarhet under reproduksjonsnivå", "Lave fødselstall og lav dødelighet, som holder hverandre i en ny likevekt", "Lave fødselstall, mens dødeligheten stiger igjen i takt med aldringen", "Fruktbarheten tar seg opp igjen når velstanden har nådd et visst nivå"],
      explanation: "Modellen forutsatte en ny likevekt på lavt nivå, men i mange rike land har fruktbarheten lagt seg varig under reproduksjonsnivået, slik at hver generasjon er mindre enn den forrige. At dødeligheten skulle stige igjen eller at fruktbarheten skulle snu med velstand, er ikke det som er observert.",
    },
    {
      question: "Hva er en aldrende befolkning?",
      options: ["En befolkning der andelen eldre stiger over tid", "En befolkning der antallet eldre stiger", "En befolkning der levealderen for den enkelte stiger", "En befolkning der pensjonsalderen stadig blir høyere"],
      explanation: "Aldring er en endring i sammensetning, altså i forholdstallet mellom aldersgruppene. Antallet eldre kan stige uten aldring dersom antallet yngre stiger like mye. Individuell levealder og politisk fastsatt pensjonsalder er andre størrelser, selv om den første bidrar til aldringen.",
    },
    {
      question: "Fra hvilke to kanter aldres en befolkning?",
      options: ["Nedenfra ved lavere fruktbarhet og ovenfra ved lavere dødelighet", "Nedenfra ved høyere fruktbarhet og ovenfra ved høyere dødsrate", "Nedenfra ved utvandring av unge og ovenfra ved innvandring av eldre", "Nedenfra ved senere barnefødsler og ovenfra ved tidligere pensjonering"],
      explanation: "Kullene i bunnen av pyramiden blir mindre fordi fruktbarheten faller, og toppen blir tyngre fordi flere lever lenge. Høyere fruktbarhet og høyere dødelighet ville virket motsatt. Utsatt barnefødsel og pensjonsalder påvirker andre forhold enn selve alderssammensetningen.",
    },
    {
      question: "Hvorfor er forventet levealder ved fødsel et periodemål?",
      options: ["Fordi det bygger på dødeligheten slik den er i beregningsåret", "Fordi det beregnes for hvert årskull etter at kullet er dødd ut", "Fordi det oppdateres bare hvert tiende år i offisiell statistikk", "Fordi det gjelder en periode av livet og ikke hele livsløpet"],
      explanation: "Målet setter sammen et tenkt livsløp av ett års dødelighet, akkurat som samlet fruktbarhetstall gjør med fødsler, og ingen har levd under akkurat de forholdene hele livet. Å vente til et kull er dødd ut ville gitt et kohortmål, og målet gjelder hele livsløpet og oppdateres årlig.",
    },
    {
      question: "Hva er den vanligste feillesningen av historisk lav forventet levealder?",
      options: ["At få mennesker ble gamle, når barnedødeligheten trakk snittet ned", "At mange ble svært gamle, når gjennomsnittet egentlig var høyt", "At tallet gjaldt bare menn og ikke kvinner i den samme perioden", "At tallet ble beregnet på et lite utvalg og derfor er upålitelig"],
      explanation: "Et lavt gjennomsnitt skyldes først og fremst mange dødsfall i spedbarns- og barneårene; den som overlevde barndommen, hadde langt flere år igjen enn gjennomsnittet antyder. Målet gjelder begge kjønn, og problemet er tolkningen av gjennomsnittet og ikke datagrunnlaget.",
    },
    {
      question: "Hvilken begrensning har den demografiske overgangsmodellen?",
      options: ["Den er laget på europeisk materiale og har knapt med migrasjon", "Den gjelder bare land som har gjennomført en industriell revolusjon", "Den kan ikke brukes på land der dødeligheten fortsatt er høy", "Den forutsetter at fødselstallene faller før dødeligheten gjør det"],
      explanation: "Modellen beskriver fødsler og dødsfall i en nokså lukket befolkning, og migrasjonen som i dag avgjør utviklingen i mange rike land, er knapt med. Den brukes også på land i tidlige faser, og rekkefølgen i modellen er nettopp at dødeligheten faller først.",
    },
    {
      question: "Hva er vekstpulsen et uttrykk for?",
      options: ["Et etterslep mellom to kurver som faller etter hverandre", "En midlertidig oppgang i barn per kvinne", "En periode der innvandringen overstiger utvandringen kraftig", "En fase der dødeligheten stiger raskere enn fødselstallene"],
      explanation: "Vekstpulsen oppstår fordi dødeligheten faller først og fødselstallene følger etter, slik at avstanden mellom dem øker en periode. Barnetallet per kvinne stiger altså ikke. Migrasjon inngår nesten ikke i modellen, og dødeligheten stiger ikke i noen av fasene.",
    },
    {
      question: "Hva betegner den andre demografiske overgangen?",
      options: ["Endringen i familieformer og familieverdier etter den første", "Den andre store nedgangen i dødelighet i rike land etter krigen", "Overgangen fra fødselsoverskudd til innvandring som vekstkilde", "Nedgangen i fruktbarhet fra mange barn per kvinne til omtrent to"],
      explanation: "Begrepet dekker samboerskap, hyppigere samlivsbrudd, individualisering og utsatt førstefødsel — altså rammene rundt barnefødslene. Fallet fra mange barn til om lag to tilhører den første overgangen, og hverken dødelighetsutvikling eller vekstkilde er det begrepet betegner.",
    },
    {
      question: "Hvilke fire trekk opptrer sammen i den andre demografiske overgangen?",
      options: ["Samboerskap, samlivsbrudd, individualisering og utsatt fødsel", "Urbanisering, prevensjon, kvinners yrkesdeltakelse og barnedødelighet", "Lavere fruktbarhet, lavere dødelighet, lengre levealder og aldring", "Innvandring, utvandring, indre flytting og økt bostedsmobilitet"],
      explanation: "De fire trekkene gjelder alle rammene rundt familiedannelsen. Urbanisering, prevensjon og fallende barnedødelighet er mekanismer i den første overgangen, mens fruktbarhet, dødelighet og aldring er nivåstørrelser og ikke familieformer. Flytting hører til migrasjonskomponenten.",
    },
    {
      question: "Hva er hovedskillet mellom den første og den andre demografiske overgangen?",
      options: ["Den første gjelder nivåene, den andre gjelder rammene rundt familien", "Den første gjelder rike land, den andre land i tidlige faser", "Den første er beskrevet av demografer, den andre av familiesosiologer", "Den første handler om fruktbarhet, den andre om dødelighet og levealder"],
      explanation: "Den første forklarer hvorfor barnetallet gikk fra mange til om lag to; den andre forklarer i hvilke former og på hvilket tidspunkt i livet barna kommer. Begge er beskrevet innenfor demografien, begge gjelder rike land, og ingen av dem handler primært om dødelighet.",
    },
    {
      question: "Hva har skjedd med samboerskapet i Norge?",
      options: ["Det er gått fra en kort fase før ekteskap til en varig samlivsform", "Det har erstattet ekteskapet helt som samlivsform i barnefamilier", "Det har blitt sjeldnere etter hvert som ekteskapet har fått ny kraft", "Det er blitt juridisk likestilt med ekteskap på alle vesentlige punkt"],
      explanation: "Samboerskapet er blitt en etablert samlivsform også med barn, samtidig som ekteskapet fortsatt finnes og har flyttet seg senere i livsløpet. De to formene er dessuten ulikt regulert juridisk og økonomisk, og forskjellen slår ut ved brudd og ved dødsfall.",
    },
    {
      question: "Hva er utsatt førstefødsel?",
      options: ["At gjennomsnittsalderen ved første barn stiger over tid", "At flere velger å ikke få barn i det hele tatt", "At tiden mellom første og andre barn blir lengre", "At barn i økende grad fødes utenfor ekteskapet"],
      explanation: "Begrepet gjelder alderen ved det første barnet, og mekanismene er lengre utdanning, senere inngang i stabilt arbeid og senere boligetablering. Økende barnløshet, avstand mellom fødsler og fødsler utenfor ekteskap er tre andre trekk ved familieutviklingen.",
    },
    {
      question: "Hvorfor kan utsettelse av barnefødsler delvis bli til fravalg?",
      options: ["Fordi den fødedyktige perioden er biologisk begrenset", "Fordi ønsket barnetall alltid faller når folk blir eldre", "Fordi utsettelse gjør at par oftere går fra hverandre", "Fordi periodemålet ikke registrerer sent fødte barn"],
      explanation: "En utsettelse som varer lenge, kan ende med at planlagte barn ikke blir realisert, uten at noen har tatt en beslutning om det. At ønsket alltid faller med alderen er en påstand utsettelse i seg selv ikke viser, og et periodemål registrerer fødsler uansett når de skjer.",
    },
    {
      question: "Hva betyr individualisering i denne sammenhengen?",
      options: ["At livsløpet i økende grad må begrunnes av den enkelte selv", "At folk bryr seg mindre om familie og om forpliktelser enn før", "At flere bor alene i stedet for å bo sammen med andre", "At den enkelte får flere rettigheter overfor staten enn før"],
      explanation: "Individualisering gjelder at valgene om samliv og barn ikke lenger følger automatisk av posisjon og tradisjon, men må velges. Det er ikke en påstand om svakere forpliktelser — en sterkt forpliktende familie kan godt være et valgt prosjekt. Aleneboende og rettighetsutvikling er andre fenomener.",
    },
    {
      question: "Hva skiller en verdiforklaring fra en strukturell forklaring på familieatferd?",
      options: ["Den ene sier at folk vil noe annet, den andre at vilkårene er endret", "Den ene bygger på survey, den andre på kvalitative dybdeintervjuer", "Den ene gjelder makronivået, mens den andre gjelder mikronivået", "Den ene er normativ, mens den andre er empirisk etterprøvbar"],
      explanation: "De to forklaringstypene predikerer ulike ting og testes ulikt: den ene på ønsket barnetall, den andre på avstanden mellom ønske og utfall. Begge er empiriske og etterprøvbare, begge kan undersøkes med flere datatyper, og begge kan formuleres på ulike analysenivåer.",
    },
    {
      question: "Hvorfor er barnløshet en analytisk vanskelig størrelse?",
      options: ["Fordi registrene ser samme utfall enten den var valgt eller ikke", "Fordi barnløshet ikke registreres i befolkningsstatistikken i det hele tatt", "Fordi den bare kan måles etter at hele årskullet er dødd ut", "Fordi den varierer så mye mellom år at tidsserien blir ubrukelig"],
      explanation: "Utfallet er identisk i de to tilfellene, og å skille dem krever data om ønsker og planer, som har sine egne svakheter. Barnløshet lar seg måle fra fødselsregistre når kullet har passert fødedyktig alder, altså lenge før kullet er dødd ut, og tidsserien er stabil nok til å vise en utvikling.",
    },
    {
      question: "Hvordan bør samlivsbrudd beskrives faglig?",
      options: ["Som en endring i familieformenes organisering", "Som et tegn på at familien er i oppløsning", "Som en direkte følge av kvinners yrkesdeltakelse", "Som et fenomen uten betydning for fruktbarheten"],
      explanation: "Det som er dokumentert, er at formene er blitt flere — delt bosted, stefamilier, halvsøsken — altså en endring i organisering. Å kalle det oppløsning er en normativ vurdering og ikke et funn. Årsaksbildet er sammensatt, og brudd påvirker fruktbarheten i begge retninger.",
    },
    {
      question: "Hva er drøftingsaksen i dette kapitlet?",
      options: ["Forbindelsen mellom økt valgfrihet og fallende fruktbarhet", "Forbindelsen mellom levealder og forsørgerbrøk", "Forbindelsen mellom innvandring og oppslutning om velferdsstaten", "Forbindelsen mellom familiepolitikk og kvinners yrkesdeltakelse"],
      explanation: "Aksen er at de samme endringene som ga den enkelte stor frihet til å bestemme om og når hun får barn, har fulgt med et fruktbarhetsnivå under reproduksjonsnivået. Forsørgerbrøk, oppslutning om velferdsstaten og familiepolitikkens virkninger er drøftingsakser i andre kapitler.",
    },
    {
      question: "Hva er en befolkningsframskriving?",
      options: ["En beregning av hva som følger av bestemte forutsetninger", "En prognose for hvordan folketallet mest sannsynlig vil bli", "En registrering av hvordan befolkningen har utviklet seg til nå", "En modell for hvor mange innvandrere et land kan ta imot"],
      explanation: "En framskriving er et betinget utsagn og publiseres i alternativer nettopp fordi forutsetningene om fruktbarhet, dødelighet og flytting ikke er kjent. Å lese ett alternativ som det som vil skje, fjerner betingelsen. Historisk registrering er noe annet, og kapasitetsberegninger er ikke framskrivinger.",
    },
    {
      question: "Hvordan er usikkerheten fordelt i en befolkningsframskriving?",
      options: ["Antallet eldre er nesten lagt, mens fødsler og flytting er usikre", "Alle komponentene er omtrent like usikre langt fram i tid", "Antallet fødte er nesten lagt, mens antallet eldre er usikkert", "Usikkerheten er lav på kort sikt og forsvinner helt på lang sikt"],
      explanation: "De som er eldre om noen tiår, er allerede født, så bare dødelighet og flytting kan endre antallet. Fruktbarhet og migrasjon er derimot genuint usikre og kan snu raskt. Usikkerheten vokser med tidshorisonten, den forsvinner ikke.",
    },
    {
      question: "Hvem står for framstillingen av den norske befolkningsutviklingen i pensum?",
      options: ["Lyngstad og Tønnessen", "Trude Lappegård", "Grete Brochmann", "Alsos og Dølvik"],
      explanation: "Lyngstad og Tønnessen står for utviklingstrekkene og måltallene i befolkningsutviklingen. Lappegård eier forklaringen på fruktbarhetsfallet med sine tre mekanismer, Brochmann kobler velferdsstat og innvandringspolitikk, og Alsos og Dølvik behandler arbeidslivets megatrender.",
    },
    {
      question: "Hvorfor kan «under reproduksjonsnivå» ikke leses som «befolkningen krymper»?",
      options: ["Fordi alderssammensetning og innvandring også virker inn", "Fordi reproduksjonsnivået varierer for mye mellom år til å brukes slik", "Fordi samlet fruktbarhetstall alltid revideres kraftig i ettertid", "Fordi krymping først kan slås fast når kohortene er ferdige"],
      explanation: "Under reproduksjonsnivå betyr at hver generasjon blir mindre enn den forrige, men folketallet avgjøres av hele befolkningsregnskapet, medregnet momentum. Reproduksjonsnivået er stabilt der barnedødeligheten er lav, og periodemålet revideres ikke i ettertid.",
    },
    {
      question: "Hvordan gir demografi uttelling i en oppgave om velferdsstatens bærekraft?",
      options: ["Ved at en demografisk størrelse brukes til å avgjøre noe i svaret", "Ved at befolkningsutviklingen beskrives grundig i innledningen", "Ved at flest mulig demografiske begreper nevnes underveis", "Ved at framskrivingens hovedalternativ siteres som det som vil skje"],
      explanation: "Demografi er nesten alltid premisset og ikke hovedsaken, så uttellingen kommer av at forsørgerbrøken eller aldringen brukes til å begrunne en påstand. Beskrivelse for beskrivelsens skyld, begrepslister og en framskriving lest som en spådom gir ingen av delene.",
    },
    {
      question: "Hva er en kohort i demografisk forstand?",
      options: ["En gruppe som har en hendelse felles i tid, oftest fødselsåret", "En gruppe som deler bosted og sosial bakgrunn i et bestemt område", "En gruppe som blir fulgt over tid i en utvalgsundersøkelse", "En gruppe som er i samme alder på et gitt måletidspunkt"],
      explanation: "Kohortbegrepet knytter mennesker sammen gjennom en felles hendelse i tid, og i demografien er det som regel fødselsåret. Bosted og bakgrunn definerer andre grupper, et panel er en undersøkelsesform og ikke et demografisk begrep, og en aldersgruppe i dag skifter medlemmer fra år til år.",
    },
  ],
  'sos1004-4-2': [
    {
      question: "Hva kjennetegner fruktbarhetsfallet i Norge etter omkring 2010?",
      options: ["En nedgang som er langvarig, bred og går godt under reproduksjonsnivået", "En kortvarig nedgang som allerede har snudd tilbake til utgangspunktet", "En nedgang som er avgrenset til de yngste kvinnene i utdanningsløp", "En nedgang i det absolutte antallet fødsler, ikke i barn per kvinne"],
      explanation: "Fallet skiller seg fra vanlige svingninger ved at det har vart sammenhengende over mange år, vist seg i de fleste alders- og utdanningsgruppene, og passert reproduksjonsnivået med god margin. Det har ikke snudd, og det er ikke avgrenset til én gruppe. At antallet fødsler synker, er dessuten en annen størrelse enn at fruktbarheten faller.",
    },
    {
      question: "Hvilke to nivåer har det samlede fruktbarhetstallet i Norge gått mellom?",
      options: ["Fra nær 2 rundt 2009 til rundt 1,4 tidlig på 2020-tallet", "Fra rundt 2,1 rundt 2009 til nær 1,8 tidlig på 2020-tallet", "Fra nær 1,8 rundt 2009 til rundt 1,6 tidlig på 2020-tallet", "Fra rundt 2,4 rundt 2009 til nær 2,0 tidlig på 2020-tallet"],
      explanation: "Norsk fruktbarhet lå nær 2 rundt 2009 og har falt til rundt 1,4 tidlig på 2020-tallet. Tallet 2,1 er reproduksjonsnivået og ikke utgangspunktet for fallet, og det er en vanlig forveksling. De to øvrige tallparene undervurderer henholdsvis fallets dybde og dets utgangsnivå.",
    },
    {
      question: "Hva er reproduksjonsnivået?",
      options: ["Nivået som holder en befolkning stabil uten innvandring, rundt 2,1 barn", "Det nivået fruktbarheten i et land historisk har svingt omkring over lang tid", "Nivået der antallet fødsler i et år er like høyt som antallet dødsfall", "Nivået myndighetene setter som mål for befolkningsutviklingen framover"],
      explanation: "Reproduksjonsnivået er det fruktbarhetsnivået som skal til for at en befolkning erstatter seg selv over tid uten tilflytting, og det ligger på om lag 2,1 barn per kvinne. Det er ikke et historisk gjennomsnitt og ikke et politisk mål. At fødsler og dødsfall balanserer i et enkelt år, avhenger dessuten av alderssammensetningen og er noe annet.",
    },
    {
      question: "Hva er en tempoeffekt i fruktbarhetsforskningen?",
      options: ["At fødslene utsettes i tid uten at endelig barnetall må bli lavere", "At det endelige antallet barn en årgang får gjennom livet, blir lavere", "At andelen i en årgang som aldri får barn, blir høyere enn før", "At antallet fødsler stiger fordi mange kvinner er i fødedyktig alder"],
      explanation: "En tempoeffekt er en forskyvning i tid: fødslene kommer senere, og det samlede fruktbarhetstallet faller i måleåret, men det endelige barnetallet kan være uendret. Lavere endelig barnetall er kvantumseffekten, og høyere barnløshet er én av måtene et lavere kvantum kan oppstå på. Alderssammensetningens virkning på antall fødsler er et spørsmål om fødselstall, ikke om fruktbarhet.",
    },
    {
      question: "Hva er en kvantumseffekt?",
      options: ["At endelig barnetall i en årgang blir lavere, altså en reell nedgang", "At tidspunktet for den første fødselen forskyves til senere i livet enn før", "At fruktbarhetstallet svinger fra år til år uten en klar retning", "At måleåret gir et lavere tall enn det årgangen ender opp med"],
      explanation: "Kvantum handler om hvor mange barn det til slutt blir, ikke om når de kommer. Forskyvning av førstefødselen og et måleår som undervurderer årgangens endelige tall, beskriver begge tempoeffekten. Tilfeldige svingninger fra år til år er verken tempo eller kvantum, men støy i målingen.",
    },
    {
      question: "Hvordan kan en tempoeffekt bli til en kvantumseffekt?",
      options: ["Lang utsettelse gjør tidsvinduet kortere, så flere ender med færre barn", "Utsatte fødsler blir talt to ganger når årgangen måles på nytt senere", "Myndighetene endrer beregningsmåten når nedgangen har vart lenge nok", "Utsettelse fører til at flere ombestemmer seg om hvor mange de ønsker"],
      explanation: "Jo senere førstefødselen kommer, desto kortere blir tiden igjen til flere barn, og desto større er sjansen for at biologiske eller samlivsmessige forhold kommer i veien — utsettelsen blir dermed reell nedgang uten at noen har ombestemt seg. At folk endrer ønsker, motsies av at fruktbarhetsidealene har holdt seg stabile. De to øvrige svarene beskriver måletekniske forhold som ikke er mekanismen.",
    },
    {
      question: "Hva viser det at fruktbarhetsidealene har holdt seg stabile mens fruktbarheten har falt?",
      options: ["At forklaringen ligger mellom ønsket og utfallet, ikke i endrede ønsker", "At folk oppgir andre tall i undersøkelser enn de faktisk mener selv", "At fallet i hovedsak rammer dem som aldri ønsket seg barn i det hele tatt", "At måleinstrumentene for fruktbarhet har endret seg i samme periode"],
      explanation: "Når ønskene står stille og den realiserte fruktbarheten faller, kan ikke en verdiendring være forklaringen — den må ligge i det som skjer mellom ønske og utfall, altså i mulighetsstruktur, pardannelse og livsløp. De øvrige svarene forsøker å redde en verdiforklaring ved å mistenkeliggjøre tallene eller å omdefinere hvem fallet rammer, og ingen av delene stemmer med at fallet er bredt.",
    },
    {
      question: "Hvilken form for barnløshet er den sosiologisk mest interessante?",
      options: ["Den som blir til underveis uten at noen beslutning om å la være tas", "Den ufrivillige barnløsheten som skyldes medisinske forhold hos paret", "Den valgte barnløsheten hos personer som ikke ønsker seg barn", "Den som følger av at paret utsetter til begge har fast ansettelse"],
      explanation: "Barnløshet som blir til underveis, er verken et valg eller en medisinsk tilstand, men et utfall av en livsløpsstruktur — og det er derfor den knytter barnløshet til utsettelse og til mekanismene bak fallet. Medisinsk og valgt barnløshet er egne kategorier med helt andre årsaker. Å utsette til fast ansettelse er en del av mekanismen, ikke en egen form for barnløshet.",
    },
    {
      question: "Hvem forklarer fruktbarhetsfallet gjennom tre mekanismer i SOS1004-pensum?",
      options: ["Trude Lappegård", "Lyngstad og Tønnessen", "Gøsta Esping-Andersen", "Teigen og Skjeie"],
      explanation: "Lappegård leverer forklaringen på fallet gjennom de tre mekanismene. Lyngstad og Tønnessen beskriver befolkningsutviklingen og de demografiske overgangene, men forklarer ikke fallet — den forvekslingen er en typisk flervalgsfelle. Esping-Andersen eier velferdsregimebegrepene, og Teigen og Skjeie det kjønnsdelte arbeidsmarkedet.",
    },
    {
      question: "Hva består Lappegårds første mekanisme i?",
      options: ["Endret mulighetsstruktur: lengre utdanning, usikker jobb og høye boligkrav", "Endret pardannelse: par dannes senere og partnervalget er blitt mer likt", "Endret overgang til voksenlivet: sekvensen er lengre og mer reversibel", "Endret familiepolitikk: permisjon og barnehage har flyttet foreldrenes valg"],
      explanation: "Den første mekanismen handler om ressurser og risiko: at utdanningsløpene er lengre, inngangen til arbeidslivet mindre forutsigbar og boligmarkedet mer krevende. Pardannelse er den andre mekanismen og livsløpets form den tredje. Familiepolitikken er ikke en av mekanismene — den er det fallet skal drøftes mot.",
    },
    {
      question: "Hva betyr «økonomisk usikkerhet» i Lappegårds første mekanisme?",
      options: ["Manglende forutsigbarhet om egen situasjon noen år fram i tid", "At inntekten er lav sammenliknet med resten av befolkningen", "At direkte kostnader ved barn er høye i internasjonal sammenheng", "At husholdningen mangler oppsparte midler til uforutsette utgifter"],
      explanation: "Mekanismen handler om forutsigbarhet og ikke om nivå: en moderat, men trygg inntekt kan planlegges med, mens en høyere, men ustabil inntekt er vanskeligere å planlegge en barnefødsel på. Å oversette begrepet til lav inntekt eller manglende oppsparte midler gjør det umulig å forklare at fallet også rammer grupper med god økonomi. Direkte kostnader ved barn er dessuten lave i Norge.",
    },
    {
      question: "Hva består Lappegårds andre mekanisme i?",
      options: ["Endret pardannelse: par dannes senere, brytes oftere, partnervalget er likere", "Endret mulighetsstruktur: lengre utdanning, usikker jobb, høye boligkrav", "Endret verdisyn: karriere og selvrealisering går foran familieetablering", "Endret aldersstruktur: det er blitt færre kvinner i de mest fødedyktige aldersgruppene"],
      explanation: "Den andre mekanismen handler om relasjoner: senere pardannelse, hyppigere brudd og økt utdanningshomogami. Mulighetsstruktur er den første mekanismen. En verdiforklaring er ikke Lappegårds og motsies av stabile fruktbarhetsidealer, og endret aldersstruktur påvirker fødselstall, ikke fruktbarhetstallet.",
    },
    {
      question: "Hva betyr utdanningshomogami?",
      options: ["At folk i økende grad danner par med noen på samme utdanningsnivå", "At foreldrenes utdanningsnivå går i arv til barna gjennom oppveksten", "At personer med lang utdanning i snitt får færre barn enn andre gjør", "At utdanningsnivået jevner seg ut mellom kvinner og menn over tid"],
      explanation: "Homogami betyr å finne sammen med noen som ligner en selv, her langs utdanning, og virkningen er at partnermarkedet snevres inn. At utdanning går i arv, er sosial reproduksjon, og at lang utdanning gir færre barn, er en utdanningsgradient i fruktbarhet. At utdanningsfordelingen mellom kjønnene endrer seg, er en forutsetning for homogamiens virkninger, men ikke det samme som homogami.",
    },
    {
      question: "Hva består Lappegårds tredje mekanisme i?",
      options: ["At overgangen til voksenlivet er blitt lengre, oppdelt og reversibel", "At unge voksne bor hjemme lenger enn tidligere generasjoner gjorde", "At utdanningsløpene er blitt lengre og mer kostbare enn tidligere", "At det er blitt vanligere å bo alene i store deler av tjueårene"],
      explanation: "Den tredje mekanismen handler om selve sekvensen fra ungdom til voksen: at rekkefølgen og tidsplanen er borte, slik at det ikke lenger finnes et opplagt punkt der barn er neste trinn. Lengre utdanning hører til den første mekanismen, og å bo alene i tjueårene er en del av den andre. Å bo hjemme lenger er et enkelttrekk, ikke sekvensens form.",
    },
    {
      question: "Hva menes med at de tre mekanismene forsterker hverandre?",
      options: ["Usikkerhet utsetter etablering, som utsetter pardannelse og korter tidsvinduet", "At alle tre virker samtidig og kan legges sammen til en samlet effekt", "At de tre er tre måter å beskrive det samme forholdet på i faget", "At hver av de tre mekanismene forklarer sin egen avgrensede del av befolkningen"],
      explanation: "Kjeden er at et lengre og mer usikkert etableringsløp skyver etableringen ut, at senere etablering gir senere pardannelse, og at senere pardannelse gjør tidsvinduet for barn kortere. Å legge dem sammen additivt er den flate framstillingen som mangler mekanismen. De er heller ikke tre ord for det samme, og de er ikke fordelt på hver sin gruppe.",
    },
    {
      question: "Hvorfor holder det ikke å forklare fruktbarhetsfallet med økonomi alene?",
      options: ["Fordi fallet også rammer grupper med god og stabil økonomi", "Fordi økonomiske forhold ikke lar seg måle presist i registerdata", "Fordi de direkte kostnadene ved barn har gått ned i samme periode", "Fordi økonomi er en forklaring som hører hjemme i et annet fag"],
      explanation: "Fallet er bredt og viser seg også der økonomien er trygg, og en ren økonomiforklaring kan derfor ikke gjøre rede for det — det er dette som gjør begrepsforflatning til den dyreste feilen i temaet. Økonomiske forhold lar seg godt måle, og økonomi er en fullt legitim sosiologisk forklaringstype. At kostnadene har gått ned, er ikke det bærende argumentet her.",
    },
    {
      question: "Hva er sosial ulikhet i fertilitet?",
      options: ["Systematiske forskjeller i hvem som får barn og hvem som forblir barnløse", "Forskjellen mellom hvor mange barn folk ønsker seg og hvor mange de ender med", "Forskjellen i fruktbarhetsnivå mellom land med ulik familiepolitikk", "Ulik tilgang til medisinsk behandling ved ufrivillig barnløshet"],
      explanation: "Begrepet handler om fordelingen bak gjennomsnittet: at barnetall og barnløshet følger sosiale skillelinjer som utdanning, arbeidsmarkedstilknytning og kjønn. Avstanden mellom ønske og utfall er gapet ned til realisert fruktbarhet, og forskjeller mellom land er komparativ demografi. Ulik tilgang til behandling er et helsepolitisk spørsmål og ikke det samfunnsfaglige fertilitetsbegrepet.",
    },
    {
      question: "Hvordan har klasseprofilen i norsk fruktbarhet endret seg?",
      options: ["Det klassiske mønsteret der lang utdanning ga færrest barn, er svekket", "Barnløsheten er blitt høyest i toppen av utdanningsfordelingen", "Forskjellene mellom utdanningsgrupper er i praksis helt forsvunnet", "Sammenhengen mellom utdanning og barnetall har alltid vært svak i Norge"],
      explanation: "Endringen er at det gamle mønsteret er svekket og for enkelte grupper snudd: barnløsheten har steget mest der arbeidsmarkedstilknytningen er svakest, ikke i toppen av utdanningsfordelingen. Forskjellene er ikke borte, de har endret retning. Og sammenhengen var historisk en av de mest robuste i demografien.",
    },
    {
      question: "Hva er forskjellen på de to utdanningsgradientene i fruktbarhet?",
      options: ["Den ene gjelder når man får barn, den andre om og hvor mange man får", "Den ene gjelder kvinner og den andre gjelder menn i samme årskull", "Den ene bygger på registerdata og den andre på spørreundersøkelser", "Den ene gjelder ekteskap og den andre gjelder samboerskap"],
      explanation: "Gradienten i timing — at lengre utdanning gir senere førstefødsel — er stabil, mens gradienten i endelig barnetall og barnløshet er den som har endret seg. Å slå de to sammen gjør at man sier noe galt om minst den ene. Kjønn, datakilde og samlivsform er relevante forhold, men de definerer ikke skillet mellom de to gradientene.",
    },
    {
      question: "Hvorfor er barnløsheten særlig høy blant menn med kort utdanning?",
      options: ["Fordi utdanningshomogami gjør partnermarkedet trangest for denne gruppen", "Fordi denne gruppen i undersøkelser oppgir at de ønsker seg færre barn enn andre", "Fordi de i større grad velger bort barn av økonomiske grunner", "Fordi de oftere har helseforhold som gjør det vanskelig å få barn"],
      explanation: "Mekanismen er strukturell og går gjennom partnermarkedet: sterk utdanningshomogami i en befolkning der kvinner i snitt tar lengre utdanning enn menn, gjør gruppen av aktuelle partnere minst for menn med kort utdanning og svak arbeidsmarkedstilknytning. Det er verken et uttrykk for andre ønsker, et aktivt fravalg eller et medisinsk forhold.",
    },
    {
      question: "Hva er en sammensetningseffekt?",
      options: ["At gjennomsnittet flytter seg fordi befolkningen er satt sammen annerledes", "At menneskene i en gitt posisjon faktisk gjør noe annet enn de gjorde tidligere", "At flere mekanismer virker samtidig og forsterker hverandres virkninger", "At et måleår gir et annet resultat enn en årgang ender opp med til slutt"],
      explanation: "En sammensetningseffekt oppstår når befolkningens sammensetning endrer seg, slik at gjennomsnittet flytter seg uten at noen har endret atferd. Endret atferd i en gitt posisjon er nettopp det motsatte, altså en atferdsendring. De to øvrige svarene beskriver samvirket mellom mekanismene og forskjellen mellom periode- og kohortmåling.",
    },
    {
      question: "Hva har vært hovedformålet med norsk familiepolitikk?",
      options: ["Å gjøre det mulig å kombinere yrkesarbeid og omsorg, og fremme likestilling", "Å heve fruktbarheten slik at befolkningen holder seg over reproduksjonsnivå", "Å sikre familier med lav inntekt en akseptabel materiell levestandard", "Å redusere de offentlige utgiftene til omsorg for de yngste barna"],
      explanation: "Norsk familiepolitikk er bygget rundt toforsørgermodellen og har hatt kombinasjonen av arbeid og omsorg og likestilling mellom foreldrene som sine fremste formål, ikke fruktbarhet. Å måle politikken mot et fruktbarhetsmål den ikke hadde, er å bytte målestokk uten å si det. Inntektssikring og utgiftskutt er heller ikke det bærende formålet.",
    },
    {
      question: "Hva ble innført i 1993, og hva flyttet det?",
      options: ["Fedrekvoten, som flyttet en del av permisjonstiden fra mor til far", "Fedrekvoten, som økte den samlede lengden på foreldrepermisjonen", "Kontantstøtten, som gjorde det lettere å være hjemme med små barn", "Retten til barnehageplass, som gjorde tilbakevending til arbeid enklere"],
      explanation: "Fedrekvoten kom i 1993 og endret fordelingen av permisjonstiden mellom foreldrene, ikke nødvendigvis den samlede lengden — det er nettopp derfor den er et eksempel på at utformingen betyr mer enn størrelsen. Kontantstøtten kom på slutten av 1990-tallet, og den lovfestede retten til barnehageplass kom i 2009.",
    },
    {
      question: "Hvorfor virker en øremerket kvote annerledes enn en fritt delbar permisjon?",
      options: ["Fordi tid som faller bort om den ikke brukes, endrer forhandlingen hjemme", "Fordi øremerket tid gir høyere utbetaling per dag enn delbar tid gjør", "Fordi øremerket tid er lengre enn den delen som kan deles fritt", "Fordi arbeidsgiveren har plikt til å innvilge øremerket tid uten forhåndsvarsel"],
      explanation: "En kvote som går tapt om den ikke tas ut, gjør spørsmålet til om noe skal gå til spille i stedet for hvem som skal ta av en felles pott — og det er den konstruksjonen som flyttet uttaket raskt. Forskjellen ligger altså i utformingen, ikke i satsen, lengden eller arbeidsgiverens plikter.",
    },
    {
      question: "Hva er poenget med at retten til barnehageplass ble lovfestet i 2009?",
      options: ["At en rettighet kan planlegges med, mens et tilbud bare kan håpes på", "At kommunene fra da av fikk ansvaret for å drive alle barnehagene", "At foreldrebetalingen fra da av ble den samme i hele landet", "At barnehagesektoren fra da av vokste raskere enn tidligere"],
      explanation: "For en beslutning som strekker seg over år, er forutsigbarheten selve virkemidlet: en rettighet fjerner usikkerhet på en måte et tilbud ikke gjør. Endringen gjaldt rettighetens karakter, ikke eierskap, prisstruktur eller utbyggingstakt — utbyggingen hadde dessuten pågått over lang tid før lovfestingen.",
    },
    {
      question: "Hvilken retning trekker kontantstøtten i, sammenliknet med barnehagen?",
      options: ["Den familialiserer, mens barnehagen de-familiserer omsorgsarbeidet", "Den de-familiserer, mens barnehagen de-kommodifiserer omsorgsarbeidet", "Den de-kommodifiserer, mens barnehagen familialiserer omsorgsarbeidet", "Begge de-familiserer, men kontantstøtten gjør det i mindre omfang"],
      explanation: "Barnehagen flytter omsorg fra ubetalt arbeid i hjemmet til lønnet arbeid og de-familiserer dermed, mens en ytelse for å være hjemme flytter ansvaret tilbake til familien og familialiserer. De-kommodifisering handler om uavhengighet av markedet og er et annet begrep. At begge skulle trekke samme vei, er nettopp det som ikke stemmer.",
    },
    {
      question: "Hva er toforsørgermodellen?",
      options: ["En familiemodell der begge foreldre er i lønnet arbeid, støttet av tjenester", "En familiemodell der én forsørger er i arbeid og den andre har omsorgsansvaret", "En velferdsmodell der både stat og marked leverer velferdstjenester", "En ordning der foreldrene deler foreldrepermisjonen helt likt mellom seg"],
      explanation: "Toforsørgermodellen forutsetter at begge foreldre er i lønnet arbeid, og at offentlige ordninger gjør kombinasjonen mulig — det er rammen norsk familiepolitikk er bygget rundt. Én yrkesaktiv og én hjemme er enforsørgermodellen. De to øvrige svarene beskriver velferdstrekanten og en bestemt permisjonsdeling, ikke familiemodellen.",
    },
    {
      question: "Hva er fruktbarhetsparadokset?",
      options: ["At fruktbarheten faller tross en av verdens mest familievennlige politikker", "At folk ønsker seg flere barn i undersøkelser enn de sier de har råd til", "At fødselstallet kan stige samtidig som fruktbarhetstallet faller i landet", "At land med sjenerøs familiepolitikk har lavere barnløshet enn andre land"],
      explanation: "Paradokset er at fallet skjer i et land med et av verdens mest utbygde apparater for å kombinere barn og arbeid, og begge sider har belegg: virkemidlene virker på det de er innrettet mot, og fruktbarheten faller likevel. Gapet mellom ideal og realisering er et annet funn, og forholdet mellom fødselstall og fruktbarhet er en måleteknisk distinksjon.",
    },
    {
      question: "Hvorfor reverserer ikke familiepolitikken fruktbarhetsfallet?",
      options: ["Fordi virkemidlene når den første mekanismen, men ikke de to andre", "Fordi virkemidlene er for beskjedne til å påvirke folks beslutninger", "Fordi ordningene ble innført for sent til å rekke å virke på fallet", "Fordi ordningene i praksis gjør det mer lønnsomt å utsette barnefødsel"],
      explanation: "Permisjon, barnehage og overføringer griper et stykke inn i mulighetsstrukturen, men de påvirker verken hvem som finner sammen med hvem eller livsløpets form — og det er der de to andre mekanismene ligger. Virkemidlene er altså ikke for svake, og de har vært på plass lenge. At permisjon knyttet til arbeidsforhold kan bidra til utsettelse, er et poeng ved siden av, ikke hovedforklaringen.",
    },
    {
      question: "Hva er forskjellen på et insentiv og en struktur i denne sammenhengen?",
      options: ["Insentivet endrer regnestykket for en beslutning; strukturen er rammene rundt", "Insentivet er økonomisk, mens strukturen alltid er kulturelt bestemt", "Insentivet virker på kort sikt, mens strukturen først virker på lang sikt", "Insentivet er offentlig vedtatt, mens strukturen oppstår i markedet"],
      explanation: "Et insentiv forutsetter at det finnes en beslutningssituasjon å påvirke, mens en struktur er de rammene beslutningen tas innenfor og som den enkelte ikke kan endre. Poenget er at insentiver flytter beslutninger, ikke strukturer. Skillet går verken på økonomi mot kultur, på tidshorisont eller på hvem som har vedtatt hva.",
    },
    {
      question: "Du klarer å utelukke to av fire alternativer på et flervalgsspørsmål. Hva lønner seg?",
      options: ["Å svare, fordi forventet uttelling da er positiv", "Å la spørsmålet stå, fordi 0 er tryggere enn et minuspoeng", "Å svare bare dersom du også har god tid igjen på settet", "Å la det stå, siden gjetting alltid har negativ forventet uttelling"],
      explanation: "Med to alternativer utelukket er sjansen 50 prosent, og forventet uttelling blir positiv — da lønner det seg å svare. Blind gjetting uten eliminering har derimot negativ forventet uttelling, og det er der man lar stå. Tidsbruk påvirker hvor mye du rekker, ikke om det enkelte svaret lønner seg.",
    },
    {
      question: "En besvarelse konkluderer med at norsk familiepolitikk har mislyktes fordi fruktbarheten falt. Hvilken feil er dette nærmest?",
      options: ["Å miste dobbeltheten i paradokset ved å velge én side av det", "Å svare på nabospørsmålet i stedet for det som faktisk ble spurt om", "Å synse uten pensum ved å bygge svaret på egne oppfatninger", "Å importere klassikerstoff som oppgaven ikke etterspør i det hele tatt"],
      explanation: "Feilen er å skrive ensidig: politikken har dokumenterte virkninger på det den var innrettet mot, og fruktbarheten har likevel falt, og begge halvdelene skal bæres gjennom drøftingen. Å svare på nabospørsmålet ville vært å analysere noe annet enn oppgaven ba om, og synsing forutsetter fravær av pensumforankring. Klassikerstoff er ikke involvert her.",
    },
  ],
  'sos1004-5-1': [
    {
      question: "Hva kjennetegner en megatrend, til forskjell fra en konjunktur?",
      options: ["Den har en retning som fortsetter, i stedet for en svingning som snur", "Den rammer flere bransjer samtidig og ikke bare én enkelt næring", "Den er utløst av en bestemt hendelse som gjør virkningen synlig", "Den blir styrt av politiske vedtak som fastsetter en langsiktig kurs"],
      explanation: "En megatrend er en langsiktig strukturell drivkraft med retning, mens en konjunktur er en svingning som snur tilbake. Bredde over flere bransjer følger ofte med, men er ikke det som skiller de to — også et konjunkturomslag treffer bredt. Utløsende hendelser forklarer tidspunktet og ikke retningen, og en megatrend kjennetegnes nettopp av at ingen enkeltaktør styrer den.",
    },
    {
      question: "Hva er en konjunktur i arbeidslivssammenheng?",
      options: ["En svingning i aktivitet og sysselsetting som snur etter noen år", "En varig forskyvning av oppgaver fra mennesker over til digitale systemer", "En endring i måten partene i arbeidslivet forhandler om lønn og avtaler på", "En langsiktig omlegging av næringsstrukturen mellom landsdeler og bransjer"],
      explanation: "Konjunkturen flytter arbeidsmarkedet opp og ned langs den samme skalaen og kommer tilbake dit den var. Varig oppgaveforskyvning og langsiktig næringsomlegging er derimot megatrender, fordi de har retning og ikke snur. Endringer i forhandlingsformen er institusjonelle endringer, som er noe annet enn en svingning i aktivitet.",
    },
    {
      question: "Hva er forholdet mellom en strukturell driver og en utløsende hendelse?",
      options: ["Hendelsen forklarer tidspunktet, mens driveren forklarer retningen", "Hendelsen forklarer selve retningen, mens driveren forklarer tidspunktet", "Hendelsen er en megatrend, mens driveren er en konjunktur", "Hendelsen virker på makronivå, mens driveren virker på mikronivå"],
      explanation: "Den underliggende driveren gir retningen over lang tid, mens en hendelse som en pandemi eller en energikrise avgjør når virkningen blir synlig. Å bytte om på de to gjør en enkelthendelse til forklaring på en varig utvikling. Skillet handler heller ikke om nivå i samfunnet, men om hva de to forklarer.",
    },
    {
      question: "Hvilke fire megatrender peker Alsos og Dølvik ut i nordisk arbeidsliv?",
      options: ["Digitalisering, globalisering, klimaomstilling og demografisk endring", "Digitalisering, urbanisering, individualisering og globalisering", "Globalisering, sekularisering, demografi og teknologisk arbeidsledighet", "Automatisering, migrasjon, konjunkturer og næringsomstilling"],
      explanation: "De fire drivkreftene i analysen er digitalisering og teknologiendring, globalisering, klimaomstilling og demografi. Urbanisering, individualisering og sekularisering er samfunnsendringer, men inngår ikke i denne firedelingen. Konjunktursvingninger hører per definisjon ikke hjemme i en oppstilling over megatrender.",
    },
    {
      question: "Hva er hovedpoenget i påstanden om at megatrendene virker sammen?",
      options: ["At den ene trenden endrer virkningen av den andre, ikke bare legges til", "At de fire trendene har omtrent like stor virkning på arbeidslivet", "At trendene inntreffer samtidig i alle nordiske land og i samme tempo", "At de fire til sammen bestemmer hvordan arbeidslivet blir framover"],
      explanation: "Samvirkepoenget er at trendene betinger og forsterker hverandre — digital teknologi gjør for eksempel globalisering av tjenestearbeid mulig. Analysen rangerer ikke drivkreftene og hevder ikke at de er like sterke. Den er heller ikke en prognose: hvordan trendene slår ut, avhenger av hvordan institusjonene svarer.",
    },
    {
      question: "Hva er den mest presise beskrivelsen av digitaliseringens virkning på arbeidet?",
      options: ["Teknologien erstatter oppgaver og endrer dermed jobbers innhold", "Teknologien erstatter hele yrker, slik at sysselsettingen faller varig", "Teknologien rammer i hovedsak de lavest lønnede delene av arbeidsmarkedet", "Teknologien virker mest i offentlig sektor, der oppgavene er ensartede"],
      explanation: "En jobb består av mange oppgaver, og når noen av dem automatiseres, endres jobben oftere enn den forsvinner. Å skrive at maskinene tar yrkene er en upresis gjengivelse av det som faktisk hevdes. Det er heller ikke lønnsnivået eller sektortilhørigheten som avgjør, men hvor rutinepreget oppgaven er.",
    },
    {
      question: "Hvilke oppgaver står lengst imot automatisering?",
      options: ["Oppgaver som krever skjønn, omsorg og improvisasjon i uryddige omgivelser", "Oppgaver som utføres av ansatte med høy utdanning og lang erfaring i faget", "Oppgaver som er godt beskrevet i rutiner og gjentas mange ganger daglig", "Oppgaver som utføres i offentlig sektor og er dekket av tariffavtale"],
      explanation: "Det er graden av rutinepreg som avgjør: det lett beskrivbare automatiseres først, mens skjønn, omsorg og fysisk improvisasjon står imot. Derfor har deler av kontor- og saksbehandlingsarbeid vært utsatt selv om det verken er lavtlønt eller ufaglært. Utdanningsnivå, sektor og avtaledekning avgjør ikke hva teknologien kan overta.",
    },
    {
      question: "Hva er den andre hovedvirkningen av digitalisering, ved siden av oppgaveforskyvning?",
      options: ["At arbeidet blir målbart og styrbart gjennom løpende registrering", "At arbeidsgivere får plikt til å tilby opplæring i nye digitale verktøy", "At antallet arbeidstimer per ansatt faller jevnt i alle bransjer", "At arbeidstakerne får mer innflytelse over hvordan de utfører arbeidet"],
      explanation: "Når hvert steg registreres, flyttes kontrollen fra en leder som ser den ansatte av og til, til et system som registrerer hele tiden. Det er en endring i selve arbeidsrelasjonen. Opplæringsplikter og arbeidstidens lengde er andre spørsmål, og økt registrering peker snarere mot mer styring enn mot mer innflytelse for den enkelte.",
    },
    {
      question: "Hvilke to kanaler virker globaliseringen gjennom i arbeidslivet?",
      options: ["Arbeidet flyttes til arbeidskraften, eller arbeidskraften flyttes til arbeidet", "Kapitalen flyttes til utlandet, eller den investeres i norsk industri", "Lønningene presses ned, eller arbeidstiden forlenges i utsatte bransjer", "Handelen med varer øker, eller handelen med tjenester øker tilsvarende"],
      explanation: "Den ene kanalen er utsetting av produksjon og tjenester til land med lavere kostnader, den andre er at folk søker arbeid på tvers av grenser. De to gir ulike utfordringer, og et presist svar sier hvilken det snakker om. Kapitalbevegelser og handelsvekst er del av bildet, men beskriver ikke selve arbeidskraftkanalene.",
    },
    {
      question: "Hvor treffer presset fra globaliseringen hardest i norsk arbeidsliv?",
      options: ["Der avtaledekningen er svakest og kontraktkjedene lengst", "I de næringene som selger sine varer i et internasjonalt marked", "I de yrkene som krever høyest formell kompetanse og utdanning", "I offentlig sektor, der lønnsveksten er sterkest bundet av rammen"],
      explanation: "Presset konsentreres i de segmentene der avtaler ikke rekker og ansvaret er spredt gjennom lange kjeder av underleverandører. At en næring er konkurranseutsatt, er noe annet: det er nettopp de næringene som forhandler først i frontfagsmodellen. Verken høyt kompetansenivå eller offentlig tilknytning avgjør hvor presset sitter.",
    },
    {
      question: "Hva er klimaomstilling som megatrend i arbeidslivet?",
      options: ["At utslippskrav flytter aktivitet og kompetansebehov mellom næringer", "At endret vær og temperatur gjør enkelte typer utearbeid vanskeligere", "At bedrifter frivillig rapporterer utslipp og setter seg egne klimamål", "At arbeidstakere velger arbeidsgiver ut fra miljøprofil"],
      explanation: "I arbeidslivssammenheng er drivkraften politikken, prisene og investeringene som svarer på klimaproblemet, ikke klimaendringene i seg selv. Rapportering og individuelle jobbvalg er virkninger på virksomhets- og mikronivå, og de forklarer ikke forskyvningen av arbeidsplasser mellom næringer og landsdeler.",
    },
    {
      question: "Hva gjør klimaomstillingen til et sosiologisk spørsmål og ikke bare et teknisk?",
      options: ["At jobbene som bygges ned og opp treffer ulike grupper og steder", "At omstillingen krever teknologi som ennå ikke er ferdig utviklet", "At utslippene må kuttes raskere enn næringslivet selv ønsker", "At internasjonale avtaler forplikter Norge til bestemte utslippsmål"],
      explanation: "Fordelingssiden er det sosiologiske: kompetansekrav og bosted flytter seg ikke like lett som kapital, og spørsmålet om hvem som bærer kostnaden ved en omstilling er et klassisk sosiologisk spørsmål. Teknologistatus, tempo og traktatforpliktelser er politiske og tekniske sider ved den samme prosessen.",
    },
    {
      question: "Hvilke to komponenter består demografitrenden av?",
      options: ["Aldring av befolkningen og migrasjon som endrer arbeidsstyrkens sammensetning", "Aldring av befolkningen og økende utdanningsnivå i yngre årskull", "Fallende fruktbarhet og økende yrkesdeltakelse blant kvinner", "Flytting fra distrikt til by og økende andel som bor alene"],
      explanation: "Demografitrenden rommer både at en større del av befolkningen er utenfor yrkesaktiv alder, og at innvandring endrer hvem arbeidsstyrken består av. Utdanningsnivå, fruktbarhet, flyttemønstre og husholdningsformer er beslektede utviklingstrekk, men de er ikke de to komponentene i denne megatrenden.",
    },
    {
      question: "Hvorfor sies det at aldring og migrasjon ikke løser hverandre ut?",
      options: ["Fordi de treffer ulike deler av arbeidsmarkedet", "Fordi innvandringen er for liten til å veie opp for antallet eldre", "Fordi innvandrere med tiden selv blir eldre og trenger omsorg", "Fordi aldring er varig, mens migrasjon svinger med konjunkturene"],
      explanation: "De to trekker i hver sin retning på arbeidsstyrkens størrelse, men treffer ulike bransjer og kompetanseområder, og derfor kan ikke det ene uten videre kompensere for det andre. De øvrige forklaringene bygger på antakelser om størrelser og tidsforløp som ikke er belagt i pensum.",
    },
    {
      question: "Hvilke fire trekk kjennetegner den norske arbeidslivsmodellen?",
      options: ["Trepartssamarbeid, koordinert lønnsdannelse, høy organisasjonsgrad og lav lønnsspredning", "Trepartssamarbeid, lovfestet minstelønn, høy organisasjonsgrad og sterkt stillingsvern for alle", "Lokal lønnsdannelse, høy avtaledekning, sterkt stillingsvern og lav ledighet", "Statlig lønnsfastsettelse, universelle ytelser, høy sysselsetting og lav lønnsspredning"],
      explanation: "De fire byggesteinene er trepartssamarbeidet, den koordinerte lønnsdannelsen, den høye organisasjonsgraden og den lave lønnsspredningen. Norge har ikke lovfestet generell minstelønn, og lønn fastsettes ikke av staten, men gjennom forhandlinger. Lokal lønnsdannelse er nettopp motstykket til koordinering.",
    },
    {
      question: "Hva skiller trepartssamarbeid fra vanlige lønnsforhandlinger?",
      options: ["At staten deltar som tredje part med virkemidler utenfor forhandlingsbordet", "At forhandlingene omfatter både privat og offentlig sektor på samme tid", "At resultatet blir bindende for alle arbeidstakere i hele arbeidslivet uansett", "At avtalene inngås for flere år av gangen i stedet for hvert år"],
      explanation: "Partene forhandler for seg om lønn og avtaler, mens trepartssamarbeidet i tillegg har staten inne med lovgivning, pensjonsordninger og arbeidsmarkedstiltak. Sektorbredde, avtalelengde og hvem som blir bundet, varierer fra oppgjør til oppgjør og er ikke det som definerer trepartsmodellen.",
    },
    {
      question: "Hva er kjernen i frontfagsmodellen?",
      options: ["De konkurranseutsatte næringene forhandler først og setter en ramme for de øvrige", "De gruppene som har hatt lavest lønnsvekst, forhandler først i oppgjøret", "Staten fastsetter en øvre grense for hvor mye lønningene kan stige i året", "Lønnstilleggene gis som et likt kronebeløp til alle grupper i arbeidslivet"],
      explanation: "Fordi de konkurranseutsatte næringene selger i et internasjonalt marked og ikke kan velte lønnsvekst over på kundene, får hele arbeidslivet en ramme avstemt mot det økonomien tåler. Rammen er en norm partene opprettholder, ikke en grense staten fastsetter. Rekkefølgen følger konkurranseutsattheten og ikke etterslepet, og fordelingsprofilen i et oppgjør er et annet spørsmål.",
    },
    {
      question: "Hvorfor er frontfagsrammen sårbar?",
      options: ["Fordi den er en norm og ikke en juridisk bindende grense", "Fordi den fastsettes av staten og kan endres ved regjeringsskifte", "Fordi den bare gjelder i privat sektor og ikke i offentlig virksomhet", "Fordi den forutsetter at lønnsveksten blir helt lik i alle bransjer"],
      explanation: "Rammen holder fordi partene velger å opprettholde den, og en norm som nok grupper går utenom, slutter å være en norm. Den er ikke et politisk vedtak, den er ment å virke for hele arbeidslivet, og den er en ramme for veksten og ikke et krav om identiske tillegg.",
    },
    {
      question: "Hva er organisasjonsgraden i norsk arbeidsliv, og hvordan har den utviklet seg?",
      options: ["Om lag halvparten er organisert, og andelen har falt gradvis siden 1990-tallet", "Om lag halvparten er organisert, og andelen har ligget stabilt siden 1990-tallet", "Et klart flertall er organisert, og andelen stiger", "Et lite mindretall er organisert, og andelen faller raskt i alle bransjer"],
      explanation: "Om lag halvparten av arbeidstakerne er fagorganisert, og andelen har falt gradvis siden 1990-tallet. Både nivået og retningen hører med: nivået er fortsatt høyt i internasjonal sammenheng, men det er den gradvise nedgangen som er poenget i en drøfting av modellens grunnmur.",
    },
    {
      question: "Hva er forskjellen på organisasjonsgrad og avtaledekning?",
      options: ["Organisasjonsgrad teller medlemmer, avtaledekning teller hvem avtalen omfatter", "Organisasjonsgrad gjelder privat sektor, mens avtaledekning gjelder offentlig sektor", "Organisasjonsgrad måles av staten, mens avtaledekning måles av partene", "Organisasjonsgrad gjelder arbeidstakere, avtaledekning gjelder arbeidsgivere"],
      explanation: "En tariffavtale kan omfatte også uorganiserte i samme bedrift, og derfor følger de to størrelsene hverandre uten å være like. Begge finnes i både privat og offentlig sektor, begge gjelder arbeidstakersiden, og hvem som produserer statistikken er uten betydning for hva begrepene måler.",
    },
    {
      question: "Hvorfor bør lav lønnsspredning forstås som et resultat snarere enn en selvstendig egenskap?",
      options: ["Fordi den i stor grad følger av at lønnsoppgjørene er samordnet på tvers av bransjene", "Fordi den er fastsatt i lov og dermed er en politisk beslutning", "Fordi den skyldes at Norge har jevnere formuesfordeling enn andre land", "Fordi den følger av skatte- og overføringssystemet framfor av lønnsdannelsen"],
      explanation: "Koordineringen komprimerer strukturen fra begge kanter: bunnen løftes av en felles ramme, og toppen dempes fordi de sterkeste gruppene ikke tar ut alt de kunne fått alene. Utjevningen skjer altså i markedet, før skatt og overføringer. Lønnsspredning gjelder dessuten lønn fra arbeid, som er noe annet enn formuesfordeling.",
    },
    {
      question: "Hva kjennetegner den nordiske modellens måte å regulere arbeidslivet på?",
      options: ["Den lener seg tungt på avtaler mellom partene, mindre på lov", "Den lener seg tungt på lovgivning, med en svakere rolle for avtalene", "Den overlater reguleringen til den enkelte bedrift og dens ansatte", "Den bygger på internasjonale konvensjoner framfor nasjonale ordninger"],
      explanation: "Mye er avtalt og relativt mindre er lovfestet, og avtalene håndheves av partene selv. Nettopp derfor blir modellen sårbar der ingen av partene er organisert. Bedriftsintern regulering og internasjonale konvensjoner finnes ved siden av, men er ikke bærebjelken i den nordiske reguleringsformen.",
    },
    {
      question: "Hva betegner sosial dumping?",
      options: ["Vilkår vesentlig under bransjens nivå, ofte med et skjevt maktforhold", "All lav lønn i bransjer med mange ansatte uten fagbrev", "Enhver overtredelse av arbeidsmiljølovens regler om arbeidstid og pauser", "At norske bedrifter flytter produksjonen til land med lavere lønn"],
      explanation: "Begrepet peker på et avvik fra det etablerte nivået i bransjen, ofte kombinert med at arbeidstakeren står svakt til å kreve noe annet. Ikke all lav lønn er sosial dumping, og ikke alt som rammes er lovbrudd — mye skjer innenfor regelverket der avtaledekningen mangler. Utflagging er en annen mekanisme.",
    },
    {
      question: "Hva er allmenngjøring av tariffavtaler?",
      options: ["At deler av en tariffavtale gjøres til minstevilkår for alle i bransjen", "At en politisk fastsatt minstelønn innføres som gulv for hele arbeidsmarkedet", "At tariffavtalen forlenges automatisk når partene ikke blir enige", "At staten overtar forhandlingsansvaret der organiseringen er svak"],
      explanation: "Ordningen tar utgangspunkt i partenes egen avtale og utvider dens rekkevidde i utvalgte bransjer, og er dermed et skifte fra avtalespor til lovspor. En lovfestet minstelønn er derimot en generell sats fastsatt politisk. Ordningen handler verken om automatisk forlengelse eller om at staten overtar forhandlingene.",
    },
    {
      question: "Hvor ligger tryggheten i en modell bygget på fleksibilitet og trygghet, altså flexicurity?",
      options: ["I overgangen mellom jobber, gjennom inntektssikring og hjelp til nytt arbeid", "I den enkelte stillingen, gjennom et sterkt vern mot oppsigelse", "I tariffavtalen, gjennom bestemmelser om ansiennitet ved nedbemanning", "I bedriften, gjennom plikt til å tilby omplassering før oppsigelse"],
      explanation: "Ideen er at du ikke er sikret akkurat denne jobben, men at det å miste den ikke velter livet ditt. De øvrige svarene plasserer tryggheten i stillingen eller i virksomheten, som er den motsatte løsningen — og nettopp derfor er det upresist å si at alle nordiske land har flexicurity.",
    },
    {
      question: "Hva skiller numerisk fra funksjonell fleksibilitet?",
      options: ["Numerisk gjelder hvor mange, funksjonell gjelder hva de gjør", "Numerisk gjelder privat sektor, funksjonell gjelder offentlig sektor", "Numerisk bestemmes av arbeidsgiver, funksjonell forhandles med de ansatte", "Numerisk gjelder lønn og arbeidstid, funksjonell gjelder arbeidsmiljøet"],
      explanation: "Numerisk fleksibilitet er å endre bemanning og arbeidstid gjennom innleie, midlertidighet og deltid, mens funksjonell fleksibilitet er bred kompetanse og omstilling internt. Skillet er hvem som bærer omstillingskostnaden: den enkelte arbeidstakeren eller virksomheten. Sektor, forhandlingsform og arbeidsmiljø er andre spørsmål.",
    },
    {
      question: "Hva menes med segmentering av arbeidsmarkedet?",
      options: ["At deler av arbeidsmarkedet har systematisk ulike regler og vilkår", "At lønnsforskjellen mellom de best og de dårligst betalte øker over tid", "At arbeidsmarkedet deles i bransjer med hver sin tariffavtale", "At arbeidssøkere sorteres etter utdanningsnivå av arbeidsgiverne"],
      explanation: "Segmentering handler om hvilke regler og relasjoner som gjelder, ikke bare om hvor mye som utbetales: to personer kan tjene det samme og likevel ha helt ulikt oppsigelsesvern og avtaledekning. Det er dette som forklarer hvorfor presset fra megatrendene fordeler seg ujevnt. Bransjeinndeling og utdanningssortering er andre fenomener.",
    },
    {
      question: "Hvilket belegg taler for at den norske modellen har omstillingsevne?",
      options: ["Frontfagsrammen har holdt som norm mens organisasjonsgraden har falt", "Organisasjonsgraden har tatt seg opp igjen etter nedgangen på 1990-tallet", "Sosial dumping er blitt sjeldnere i de mest utsatte bransjene", "Antallet tariffavtaler har vokst i takt med at nye næringer kom til"],
      explanation: "At koordineringsmekanismen har holdt gjennom både oppgangstider og kriser, samtidig som organisasjonsgraden har falt gradvis, er nettopp det som taler for at modellen tåler mer enn medlemstallene alene skulle tilsi. Organisasjonsgraden har ikke tatt seg opp igjen, og de øvrige påstandene er ikke belagt i pensum.",
    },
    {
      question: "Hva er den mest presise beskrivelsen av presset megatrendene utøver på modellen?",
      options: ["Det er ujevnt fordelt og treffer først der avtaledekningen er svakest", "Det er jevnt fordelt og svekker alle deler av arbeidslivet like mye", "Det rammer først og fremst de konkurranseutsatte næringene", "Det rammer først og fremst offentlig sektor, der omstilling tar tid"],
      explanation: "Presset konsentreres i segmentene med svakest avtaledekning og lengst kontraktkjeder, og det er derfra det eventuelt brer seg. En generell krisepåstand er både mindre presis og lettere å motsi. De konkurranseutsatte næringene er nettopp de som forhandler først i modellen, og offentlig sektor har høy avtaledekning.",
    },
    {
      question: "Hva innebærer skillet mellom modellen som forutsetning og modellen som resultat?",
      options: ["Om modellen letter omstilling, eller hører til en svunnen økonomi", "Om modellen er skapt av politiske vedtak, eller vokste fram nedenfra", "Om modellen gjelder hele arbeidslivet, eller bare de organiserte delene", "Om modellen er særnorsk, eller felles for alle de nordiske landene"],
      explanation: "Forutsetningslesningen sier at organiserte parter gjør omstilling billigere fordi endring kan forhandles; resultatlesningen sier at modellen vokste fram under forhold som nå er i endring. Skillet gjør drøftingen om fra et spørsmål om optimisme til et spørsmål om årsaksretning, som kan prøves. De øvrige svarene beskriver andre skiller.",
    },
    {
      question: "Hva viser megatrendanalysen ikke?",
      options: ["Hvilken av drivkreftene som virker sterkest og hvor raskt", "Hvilke drivkrefter som endrer nordisk arbeidsliv over tid", "At drivkreftene virker samtidig og forsterker hverandre", "At endringene treffer den institusjonelle rammen rundt arbeidslivet"],
      explanation: "Analysen rangerer ikke drivkreftene og er ingen prognose — hvordan de slår ut, avhenger av hvordan institusjonene svarer. Hvilke drivkrefter det gjelder, at de virker sammen, og at de treffer de institusjonelle rammene, er derimot nettopp det analysen sier.",
    },
    {
      question: "Hvorfor er det problematisk å påstå at organisasjonsgraden er blitt for lav til at modellen virker?",
      options: ["Fordi ingen studie i pensum fastsetter et nivå der koordineringen svikter", "Fordi organisasjonsgraden ikke har falt de siste tiårene", "Fordi avtaledekningen betyr mer for koordineringen enn antallet medlemmer gjør", "Fordi koordineringen bygger på lovgivning og ikke på medlemstall"],
      explanation: "Det finnes ikke belegg i pensum for en terskelverdi, og en besvarelse som antyder en slik grense, har gått lenger enn kunnskapsgrunnlaget rekker. Organisasjonsgraden har faktisk falt gradvis siden 1990-tallet, og koordineringen hviler nettopp på organisering og ikke på lovgivning.",
    },
    {
      question: "Hvorfor skal «den norske modellen» brukes analytisk og ikke normativt i en besvarelse?",
      options: ["Fordi en påstand om modellen må kunne prøves mot data for å telle faglig", "Fordi uttrykket er politisk omstridt og derfor bør unngås helt", "Fordi modellen bare kan beskrives av dem som forsker på arbeidsliv", "Fordi normative påstander alltid er uriktige i samfunnsvitenskapen"],
      explanation: "At organisasjonsgraden har falt gradvis siden 1990-tallet kan prøves mot data; at modellen er en suksess kan det ikke. En normativ påstand kan stå i en besvarelse, men bare merket som en posisjon og gjerne med motposisjonen ved siden av. Uttrykket skal altså ikke unngås, og normative utsagn er ikke i seg selv uriktige.",
    },
    {
      question: "Hva er den vanligste formen for feilen «å svare på nabospørsmålet» i arbeidslivsoppgaver?",
      options: ["Å levere to trender når oppgaven ber om minst tre", "Å bruke for mye plass på redegjørelsen og for lite på drøftingen", "Å nevne forskerne uten å bruke funnene deres i argumentet", "Å velge side i drøftingen i stedet for å bære begge sidene"],
      explanation: "Antallskravet er en del av oppgaven på linje med temaet, og en besvarelse med to trender har ikke besvart den oppgaven som ble gitt. Skjev fordeling mellom delene, navn uten funn og å miste dobbeltheten er også feil, men de har hver sine egne betegnelser i bokas register.",
    },
  ],
  'sos1004-5-2': [
    {
      question: "Hva kjennetegner arbeid i plattformøkonomien?",
      options: ["At arbeidet formidles gjennom en digital plattform og organiseres som enkeltoppdrag", "At arbeidet utføres digitalt hjemmefra, uten at partene noen gang møtes fysisk", "At den som arbeider, er midlertidig ansatt i et bemanningsforetak som leier henne ut", "At den som arbeider, forhandler pris og vilkår direkte med hver enkelt kunde"],
      explanation: "Definisjonen består av to ledd: formidling gjennom en digital plattform, og oppdraget som enhet framfor stillingen. Mye plattformarbeid er fysisk, som transport og levering, så fjernarbeid er noe annet. Innleie fra bemanningsforetak har en reell arbeidsgiver, og direkte prisforhandling med kunden er frilansarbeid.",
    },
    {
      question: "Hva er enheten arbeidet betales i, i gig-økonomien?",
      options: ["Det enkelte fullførte oppdraget, ikke tiden som er brukt på å vente", "Den avtalte arbeidstiden, slik at ventetid mellom oppdrag også betales", "Den avtalte månedslønnen, som er uavhengig av hvor mange oppdrag som kom inn", "Den samlede omsetningen i bransjen, fordelt etter en avtalt nøkkel mellom partene"],
      explanation: "Oppdragsbetaling betaler for et resultat, mens timelønn betaler for tilgjengelig tid og fastlønn for et løpende arbeidsforhold. Forskjellen avgjør hvem som taper på en stille ettermiddag: i et oppdragsforhold er ventetiden den enkeltes problem. Fordeling etter en bransjenøkkel beskriver ingen av delene.",
    },
    {
      question: "Hva er det plattformen økonomisk sett selger?",
      options: ["Koblingen mellom kjøper og utfører, altså lavere transaksjonskostnader", "Selve tjenesten som utføres, med utføreren som en av sine ansatte", "Retten til å bruke et varemerke, slik en franchisetaker kjøper et konsept", "Tilgang til opplæring og godkjenning som bransjen ellers ville krevd"],
      explanation: "Transaksjonskostnader er alt det koster å få en handel i stand utover selve prisen, og plattformens logikk er at den senker dem kraftig gjennom søk, tillit og betaling i ett system. At plattformen skulle selge tjenesten som arbeidsgiver, er nettopp den motsatte posisjonen i stridsspørsmålet. Varemerkelisens og opplæring beskriver andre forretningsformer.",
    },
    {
      question: "Hva menes med at plattformen senker inngangsterskelen til arbeid?",
      options: ["At man kan begynne å ta oppdrag uten at en arbeidsgiver først må velge en ut", "At man slipper å skaffe eget utstyr, fordi plattformen stiller det til rådighet", "At man får dekket kostnadene sine inntil oppdragsmengden er blitt stabil nok", "At alle krav om løyver og godkjenninger faller bort i de aktuelle bransjene"],
      explanation: "Poenget er at behovet for en arbeidsgiver som først velger deg ut, faller bort, og at arbeidet dermed blir tilgjengelig for folk som står lenger fra det ordinære arbeidsmarkedet. Terskelen er lav, ikke fraværende: utstyret er som regel ens eget, og løyvekrav gjelder fortsatt i regulerte bransjer. Kostnadsdekning i en oppstartsfase er ikke en del av begrepet.",
    },
    {
      question: "Hva er algoritmisk styring?",
      options: ["At oppdrag fordeles, priser settes og utførelse måles og sanksjoneres av programvare", "At arbeidsoppgaver overtas av maskiner i stedet for å bli utført av mennesker", "At kunder gir vurderinger etter kjøp, og at vurderingene gjøres offentlig kjent", "At en leder bruker digitale verktøy for å planlegge bemanningen i en virksomhet"],
      explanation: "Algoritmisk styring er at selve ledelsesfunksjonene utøves gjennom programvare framfor av en person med et kontor. Automatisering handler derimot om at arbeidet forsvinner, og rangeringssystemer er ett virkemiddel i slik styring og ikke hele begrepet. En leder som bruker planleggingsverktøy, tar fortsatt beslutningene selv.",
    },
    {
      question: "Hvilken dobbeltfunksjon har rangeringssystemer i plattformarbeid?",
      options: ["De løser et tillitsproblem utad og virker disiplinerende på atferden innad", "De måler kvalitet objektivt og gir grunnlag for lønnsforhandlinger mellom parter", "De dokumenterer kompetanse formelt og kan brukes som attest hos nye oppdragsgivere", "De fordeler oppdragene likt og hindrer at enkelte utførere favoriseres av systemet"],
      explanation: "Utad gjør tallet at kunden slipper å kjenne den enkelte, og innad styrer det atferd fordi tilgangen til oppdrag kan avhenge av det. Rangeringen er ikke et objektivt kvalitetsmål: vurderingene gis uten opplæring, uten begrunnelse og uten mulighet til å imøtegå dem. Den fordeler heller ikke oppdrag likt, og den er ikke en formell kompetansedokumentasjon.",
    },
    {
      question: "Hva kjennetegner en arbeidstaker i arbeidsrettslig og sosiologisk forstand?",
      options: ["At arbeidet utføres i en annens tjeneste, under den andres ledelse og kontroll", "At arbeidet er hovedinntektskilden og utgjør en full stilling over tid", "At arbeidet utføres etter en skriftlig avtale som partene har kalt en arbeidsavtale", "At arbeidet er fast og ikke tidsavgrenset, i motsetning til et vikariat"],
      explanation: "Kjernen er underordning: å arbeide i en annens tjeneste, mot vederlag, under den andres ledelse og kontroll. Hvor stor inntekten er og om stillingen er full, avgjør ikke statusen, og en midlertidig ansatt er utvilsomt arbeidstaker. Avtalens overskrift avgjør heller ikke, siden det er realiteten i forholdet som teller.",
    },
    {
      question: "Hva er en oppdragstaker, sammenliknet med en arbeidstaker?",
      options: ["En som leverer et resultat for egen regning og risiko, uten ansettelsesforhold", "En som er ansatt for et bestemt prosjekt og sies opp når prosjektet er ferdig", "En som arbeider deltid hos flere arbeidsgivere og fordeler tiden mellom dem", "En som utfører ulønnet arbeid eller mottar symbolsk godtgjøring i frivillig sektor"],
      explanation: "Oppdragstakeren leverer et resultat for egen regning og risiko og står utenfor ansettelsesforholdet, med den friheten og den mangelen på vern det innebærer. Prosjektansettelse og deltid hos flere er begge former for ansettelse, altså arbeidstakerforhold. Ulønnet frivillig innsats er en helt annen kategori.",
    },
    {
      question: "Hva følger av at noen klassifiseres som oppdragstaker framfor arbeidstaker?",
      options: ["Stillingsvern, sykepenger, feriepenger og pensjon fra arbeidsgiver følger ikke med", "Skattesatsen på inntekten blir vesentlig lavere enn den er for lønnsmottakere", "Arbeidstidsbestemmelsene gjelder fortsatt, men uten adgang til å avtale overtid", "Retten til dagpenger ved ledighet gjelder, men bare etter et helt års opptjening"],
      explanation: "Klassifiseringen virker som en bryter for hele rettighetspakken: stillingsvern, sykepenger, feriepenger, pensjonsopptjening, arbeidstidsvern og kollektiv forhandlingsrett henger i arbeidstakerstatusen. Det handler altså ikke om en gunstigere skattesats, og arbeidstidsvernet følger ikke automatisk med. Trygderettigheter er heller ikke de samme som for arbeidstakere.",
    },
    {
      question: "Hvilket kjennetegn veier tyngst når arbeidstakerstatus skal avgjøres?",
      options: ["Om arbeidet ledes, fordeles og kontrolleres av den andre parten", "Om vedkommende henter inntekt fra flere oppdragsgivere samtidig", "Om avtalen mellom partene kaller forholdet et oppdrag eller en ansettelse", "Om arbeidet utgjør hovedinntekten eller kommer i tillegg til annet arbeid"],
      explanation: "Underordningen veier tyngst i den samlede vurderingen av kjennetegnene. At avtalen kaller forholdet et oppdrag, avgjør ingenting, siden realiteten i forholdet er det som teller. Eksklusivitet og inntektens betydning teller med i vurderingen, men er ikke det tyngste og kan slå ut i begge retninger.",
    },
    {
      question: "Hva sier realitetsprinsippet i klassifiseringsspørsmålet?",
      options: ["At det er hvordan forholdet faktisk fungerer, som avgjør statusen", "At partene står fritt til å avtale hvilken status forholdet skal ha", "At den som utfører arbeidet, selv velger om hun vil regnes som ansatt", "At statusen avgjøres av hvordan virksomheten er registrert i offentlige registre"],
      explanation: "Prinsippet er at realiteten i forholdet avgjør, ikke hva avtalen kaller det, fordi et vern som den sterkeste parten kan avtale seg bort fra, ikke verner noen. Verken partenes avtalefrihet, den enkeltes eget valg eller registreringsformen er derfor avgjørende. Merk at prinsippet sier hvordan spørsmålet skal avgjøres, ikke hva svaret blir.",
    },
    {
      question: "Hvorfor er plattformarbeid vanskelig å plassere i en av de to statuskategoriene?",
      options: ["Fordi kjennetegnene peker mot arbeidstaker og oppdragstaker på én gang", "Fordi plattformene som regel er registrert utenfor norsk jurisdiksjon", "Fordi arbeidet er nytt, og fordi lovgivningen ennå ikke har fastsatt kriterier", "Fordi de som utfører arbeidet, sjelden ønsker å bli regnet som ansatte"],
      explanation: "Prissetting, oppdragstildeling og kontroll gjennom appen trekker mot arbeidstaker, mens eget utstyr, frivillig pålogging og arbeid for flere plattformer trekker mot oppdragstaker. Kriteriene finnes altså og er godt etablerte — problemet er at det samme forholdet skårer høyt på begge sider. Registreringssted og den enkeltes ønske avgjør ikke statusen.",
    },
    {
      question: "Hva er kjernen i partsstrukturens problem i plattformøkonomien?",
      options: ["At det er uavklart hvem som kan forhandle kollektivt for dem som ikke er ansatte", "At organisasjonsgraden alltid er lav i bransjer som nettopp har vokst fram", "At plattformene betaler skatt i andre land enn der arbeidet faktisk utføres", "At kundene, og ikke partene i arbeidslivet, bestemmer prisen på tjenesten"],
      explanation: "Den norske modellen fordeler goder gjennom forhandlinger og forutsetter en organiserbar arbeidstakerside, en arbeidsgiverside som kan forpliktes og en bindende avtaleform. Lav organisasjonsgrad er derimot et mobiliseringsproblem, mens dette er strukturelt. Skattespørsmål hører til et annet felt, og prisen settes i praksis av plattformen.",
    },
    {
      question: "Hva betyr prekarisering?",
      options: ["At arbeidsvilkårene blir mer usikre og mindre forutsigbare over tid", "At lønnsnivået i en bransje faller under det som er vanlig ellers", "At en gruppe arbeidere danner en egen samfunnsklasse med felles interesser", "At stadig flere ansettelser inngås for en avgrenset periode framfor fast"],
      explanation: "Prekarisering er en prosess som handler om usikkerhet: svingende inntekt, uforutsigbar arbeidstid, svakt vern og risiko båret av den enkelte. Lavt lønnsnivå er noe annet, siden en godt betalt jobb kan være prekær og en lavtlønnet jobb kan være trygg. Gruppepåstanden er prekariatet, og økt bruk av tidsavgrensede ansettelser er midlertidighet.",
    },
    {
      question: "Hva er forskjellen mellom prekarisering og prekariat?",
      options: ["Det første er en prosess med vilkårene, det andre en påstand om en gruppe", "Det første gjelder privat sektor, det andre gjelder offentlig sektor", "Det første er et norsk begrep, det andre er den engelskspråklige varianten", "Det første beskriver lønnsnivået, det andre beskriver arbeidstidsordningene"],
      explanation: "Prekarisering beskriver at vilkår blir mer usikre, mens prekariat er forslaget om at de berørte utgjør en egen samfunnsgruppe med felles posisjon og interesser. Gruppepåstanden er langt mer omstridt, fordi studenten med biarbeid og den nyankomne uten godkjent kompetanse deler en kontraktsform og lite annet. Sektor, språk og lønnsnivå skiller ikke de to.",
    },
    {
      question: "Hva skiller midlertidighet fra plattformarbeid?",
      options: ["Den midlertidig ansatte er arbeidstaker, mens plattformarbeid ofte er oppdrag", "Den midlertidig ansatte har lavere lønn enn den som arbeider via plattform", "Den midlertidig ansatte arbeider i offentlig sektor, plattformarbeid i privat", "Den midlertidig ansatte er organisert, mens plattformarbeidere ikke kan være det"],
      explanation: "Midlertidighet er en kontraktsform innenfor ansettelse, og den midlertidig ansatte har sykepenger, feriepenger og pensjonsopptjening som andre arbeidstakere. Plattformarbeid er verken fast eller midlertidig ansettelse, men ligger utenfor aksen. Lønnsnivå og sektor skiller ikke begrepene, og organisering er heller ikke skillet.",
    },
    {
      question: "Hva var utfallet av Uber-saken i Norge, slik forskningen beskriver det?",
      options: ["UberPOP ble avviklet i 2017, og selskapet fortsatte i tilpasset form", "Uber ble utestengt fra det norske markedet og har ikke vært tilbake senere", "Sjåførene ble slått fast å være arbeidstakere, og selskapet ble arbeidsgiver", "Løyvekravene ble opphevet, slik at tjenesten kunne drives uten godkjenning"],
      explanation: "Tjenesten der privatpersoner kjørte passasjerer i egen bil ble avviklet i Norge i 2017 etter regulatorisk og rettslig strid, mens selskapet fortsatte i en form tilpasset løyveregelverket. Det var altså verken full utestengelse eller en omforming av markedet. Klassifiseringsspørsmålet ble ikke avgjort gjennom dette forløpet.",
    },
    {
      question: "Hva er det sosiologiske poenget i Uber-forløpet i Norge?",
      options: ["At institusjonene formet plattformen mer enn plattformen formet institusjonene", "At teknologi alltid vil vinne over nasjonal regulering på lengre sikt", "At norske forbrukere viste seg mindre interesserte i tjenesten enn ventet", "At plattformøkonomien ikke har fått noe fotfeste i Norge i det hele tatt"],
      explanation: "Poenget er at plattformøkonomien ikke virker likt overalt, men formes av institusjonene den møter: løyveregime, organisert bransje og håndheving. Forløpet viser altså tilpasning fra plattformens side, ikke at teknologien uvegerlig vinner. Det handler ikke om forbrukernes interesse, og plattformarbeid finnes i Norge.",
    },
    {
      question: "Hva kan Uber-casen som forskningsdesign ikke vise?",
      options: ["Hvor utbredt plattformarbeid er, og hva som skjer i uregulerte bransjer", "Hvordan reguleringen faktisk virket inn på plattformens forretningsmodell", "Hvilke mekanismer som var i sving da tjenesten møtte løyveregelverket", "Hvordan aktørene i bransjen og myndighetene handlet gjennom forløpet"],
      explanation: "En casestudie av én plattform i ett marked er godt egnet til å vise mekanismer og forløp, men den kan verken tallfeste utbredelse eller uten videre overføres til bransjer med svakere regulering. Nettopp mekanismene, reguleringens virkning og aktørenes handlinger er det designet er sterkt på. Å bruke casen som anslag over omfang er derfor en overtolkning.",
    },
    {
      question: "Hvorfor er omfanget av plattformarbeid i Norge omstridt?",
      options: ["Fordi avgrensningen er uklar, mye er biarbeid og gjennomtrekken er høy", "Fordi plattformene nekter å svare på henvendelser fra norske forskere", "Fordi arbeidet er ulovlig, slik at ingen vil oppgi at de utfører det", "Fordi tallene bare finnes i andre land og ikke lar seg overføre til norske forhold"],
      explanation: "Ulike avgrensninger av hva som teller gir svært ulike tall, spørsmålsformuleringen avgjør fordi mye er biarbeid, og høy gjennomtrekk gjør at øyeblikksbilder og årsanslag spriker. I tillegg sorterer registerdata etter bransje og organisasjonsform, ikke etter formidlingsform. Plattformarbeid er ikke ulovlig, og problemet er ikke at data bare finnes utenlands.",
    },
    {
      question: "Hva er den sterkeste begrunnelsen for å se plattformen som en markedsplass?",
      options: ["At den kobler kjøper og selger og senker kostnadene ved å få handelen i stand", "At den ikke tjener penger på hvert av de enkelte oppdragene som formidles gjennom den", "At den ikke har noen mulighet til å påvirke hvordan arbeidet faktisk utføres", "At den er registrert som et teknologiselskap og ikke som et transportselskap"],
      explanation: "Posisjonen bygger på at aktøren leverer en koblingstjeneste og senker transaksjonskostnadene mellom to andre parter, slik en markedsplass har regler for å fungere. Plattformen tjener nettopp penger på oppdragene, og den påvirker utførelsen gjennom tildeling, prissetting og måling. Hvordan selskapet er registrert, er ikke et argument, siden realiteten avgjør.",
    },
    {
      question: "Hva er den sterkeste begrunnelsen for å se plattformen som arbeidsgiver?",
      options: ["At den setter pris, fordeler oppdrag, måler utførelse og kan stenge tilgangen", "At de som arbeider gjennom den, ønsker seg fast ansettelse framfor oppdrag", "At arbeidet den formidler, likner arbeid som ellers utføres av ansatte", "At virksomheten er stor og har mange som utfører oppdrag for seg samtidig"],
      explanation: "Argumentet er at dette i innhold er å lede arbeid, og at underordning er det tyngste kjennetegnet på et ansettelsesforhold. Hva de som arbeider ønsker seg, avgjør ikke statusen, og likhet med annet arbeid er ikke i seg selv et kriterium. Virksomhetens størrelse og antall utførere er heller ikke det vurderingen bygger på.",
    },
    {
      question: "Hva skiller plattformformidling fra automatisering som utfordring for arbeidslivet?",
      options: ["Plattformformidling omorganiserer arbeidet, mens automatisering fjerner det", "Plattformformidling gjelder tjenester, mens automatisering gjelder industri", "Plattformformidling er ny, mens automatisering har pågått i mange tiår alt", "Plattformformidling rammer ufaglærte, mens automatisering rammer faglærte"],
      explanation: "Ved automatisering overtas oppgaver av maskiner, slik at arbeidet forsvinner, mens plattformformidling flytter koblingen mellom behov og utfører inn i et system uten at arbeidet forsvinner. De to peker derfor på helt ulike utfordringer for modellen. Bransje, alder på fenomenet og hvem som rammes, er ikke det begrepsmessige skillet.",
    },
    {
      question: "Hva er forskjellen på nisjeposisjonen og den systemiske posisjonen i denne debatten?",
      options: ["Den ene måler hvor utbredt fenomenet er, den andre hvilken presedens det setter", "Den ene gjelder Norge, mens den andre gjelder land med svakere regulering", "Den ene bygger på registerdata, mens den andre bygger på intervjuer med utførere", "Den ene handler om transport, mens den andre handler om digitale mikrooppgaver"],
      explanation: "Nisjeposisjonen peker på at segmentet er lite, mye er tilleggsinntekt og gjennomtrekken høy, mens den systemiske posisjonen peker på at formen viser at rettighetspakken kan falle bort uten regelbrudd. Fordi de måler ulike ting, kan begge være riktige samtidig. Skillet går altså ikke mellom land, datakilder eller bransjer.",
    },
    {
      question: "Hvordan berører plattformarbeid velferdsstatens de-kommodifiserende virkning?",
      options: ["De arbeidsrelaterte ytelsene faller bort, mens universelle tjenester består", "Hele velferdsstatens tilbud faller bort for den som arbeider gjennom plattform", "Ingenting endres, siden alle bosatte har de samme rettighetene uansett", "Ytelsene blir behovsprøvd i stedet for å bli tildelt etter opptjening"],
      explanation: "Sykepenger, stillingsvern og pensjonsopptjening henger i arbeidstakerstatusen, og faller derfor bort, mens universelle tjenester som helse, utdanning og barnehage tildeles etter bosted og treffer som før. Det er altså inngangen til en del av ordningene som er flyttet, ikke velferdsstaten som helhet. Tildelingsprinsippet endres heller ikke til behovsprøving.",
    },
  ],
  'sos1004-5-3': [
    {
      question: "Hva skiller klasse fra inntekt som analytisk størrelse?",
      options: ["Klasse er en posisjon i arbeidsdelingen, mens inntekt er et beløp på et tidspunkt", "Klasse er et mål på levestandard, mens inntekt er et mål på kjøpekraften i et år", "Klasse gjelder husholdningen samlet, mens inntekt alltid gjelder den enkelte person", "Klasse er en subjektiv selvplassering, mens inntekt er en objektivt registrert størrelse"],
      explanation: "Klasse er bestemt av eierskap, autoritet, kvalifikasjonskrav og tilknytning til arbeidsmarkedet, og den varer ved over tid. En student og en langtidsledig med samme inntekt står i helt ulike posisjoner, og det er nettopp derfor inntektsdesiler ikke kan erstatte et klassemål. Selvplassering er klasseidentitet, som er noe annet enn posisjon.",
    },
    {
      question: "Hva er klassestrukturasjon?",
      options: ["At klasseposisjoner blir sosialt virkelige grupper gjennom bosetting, samliv og levemåte", "At forskeren grupperer yrker i klasser etter eierskap, autoritet og krav til kvalifikasjon", "At forskjellene mellom klassene i et samfunn vokser fordi formuen samler seg på færre hender", "At folk selv oppgir hvilken klasse de mener at de tilhører når de blir spurt om det"],
      explanation: "Strukturasjon er den sosiale prosessen som gjør kategorier til grupper med gjenkjennelige levemåter og omgangskretser. Å gruppere yrker i klasser er derimot klasseskjemaet, altså forskerens operasjonalisering. Voksende formuesulikhet er et fordelingsspørsmål, og selvrapportert tilhørighet er klasseidentitet.",
    },
    {
      question: "Hvorfor bruker klasseforskningen yrke som indikator på klasseposisjon?",
      options: ["Fordi yrket bærer mest informasjon om plasseringen i arbeidsdelingen og er registrert for alle", "Fordi yrket henger tettest sammen med inntekten og dermed med levestandarden i husholdningen", "Fordi yrket er den opplysningen folk selv oppgir mest presist når de blir spurt i en undersøkelse", "Fordi yrket endrer seg sjelden gjennom livet og derfor gir et stabilt mål over lang tid"],
      explanation: "Yrket er valgt både av teoretisk grunn, fordi det sier hvor du står i arbeidsdelingen, og av praktisk grunn, fordi det finnes i registrene for hele befolkningen. Sammenhengen med inntekt er ikke poenget, siden klasse måler hva slags posisjon og ikke hvor mye. At folk oppgir yrke presist gjelder survey-data, og yrker skifter oftere enn en stabilitetsbegrunnelse ville tilsi.",
    },
    {
      question: "Hva er den sosiologiske hovedfunksjonen til økonomisk kapital?",
      options: ["Den gir risikoevne og avgjør hvilke satsinger og feilvalg husholdningen tåler", "Den gir status og avgjør hvordan husholdningen blir vurdert av folk rundt seg", "Den gir kjøpekraft og avgjør hvilket forbruksnivå husholdningen kan holde over tid", "Den gir tilgang til utdanning og avgjør hvilke studier husholdningen har råd til"],
      explanation: "Det som gjør de materielle ressursene til en klasseressurs, er at de bestemmer hva du tåler å prøve: å flytte, å bytte bransje, å ta en lang utdanning uten inntekt. Forbruksnivå og status er virkninger som ikke i seg selv forklarer mobilitet. Utdanning i Norge er gratis, så det er risikoen ved tapt inntekt og flytting, ikke studieavgiften, som virker.",
    },
    {
      question: "Hvordan virker kulturell kapital som klasseressurs i skolen?",
      options: ["Skolen belønner koder og språkformer den ikke selv har lært bort, og leser fortrolighet som evne", "Skolen krever utstyr og materiell som noen familier har råd til å skaffe og andre ikke har", "Skolen gir bedre karakterer til elever som har foreldre med kontakter i utdanningssystemet", "Skolen vurderer elever etter interesser og fritidsaktiviteter i tillegg til faglige resultater"],
      explanation: "Mekanismen er at hjemmets språk og selvfølge i møte med institusjoner registreres som faglig nivå, uten at noen jukser eller forskjellsbehandler bevisst. Materielle ressurser hører til økonomisk kapital, og kontakter hører til nettverkskanalen. Skolen vurderer faglige prestasjoner, men prestasjonene måler blant annet en fortrolighet som er ulikt fordelt før målingen begynner.",
    },
    {
      question: "Hva kjennetegner arbeiderklassen som empirisk kategori i norsk klasseforskning?",
      options: ["Manuelle og rutinepregede yrker med lite autoritet og lave krav til formell kvalifikasjon", "Husholdninger med inntekt under en fastsatt grense, uavhengig av hvilket arbeid de utfører", "Ansatte i industrien, som er den næringen kategorien opprinnelig ble utviklet for å beskrive", "Personer som selv oppgir at de tilhører arbeiderklassen når de blir spurt om tilhørighet"],
      explanation: "Kategorien er definert ved posisjonen i arbeidsdelingen, ikke ved næring, inntektsnivå eller selvforståelse. Hansen og Uvaag viser at posisjonen består selv om tyngdepunktet har flyttet seg fra industri til tjenesteyting, transport, bygg og pleie. Å definere den ved lav inntekt gjør den til en fattigdomskategori, som er noe annet.",
    },
    {
      question: "Hva er forskjellen på sosial ulikhet og sosial mobilitet?",
      options: ["Ulikhet er avstanden mellom posisjonene, mobilitet er hvor lett det er å bevege seg mellom dem", "Ulikhet gjelder inntekt og formue, mens mobilitet gjelder utdanning og yrkeskarriere", "Ulikhet måles på ett tidspunkt, mens mobilitet alltid måles innenfor ett menneskes livsløp", "Ulikhet er et strukturelt fenomen, mens mobilitet er summen av enkeltmenneskers valg"],
      explanation: "De to er logisk uavhengige: et samfunn kan ha store avstander og høy bevegelighet, og et annet kan ha små forskjeller og likevel være låst. Begge måles på flere variabler, og mobilitet måles både innenfor et livsløp og mellom generasjoner. Mobilitetsrater er dessuten strukturtrekk, ikke bare en sum av valg.",
    },
    {
      question: "Hva måler absolutt mobilitet?",
      options: ["Andelen av en generasjon som ender i en annen klasseposisjon enn foreldrene sine", "Hvor sterkt foreldrenes klasseposisjon henger sammen med barnas voksne posisjon", "Hvor stor avstanden er mellom den høyeste og den laveste klasseposisjonen i landet", "Hvor stor andel av befolkningen som beveger seg oppover i løpet av yrkeskarrieren sin"],
      explanation: "Absolutt mobilitet teller bevegelser mellom generasjoner uten å ta hensyn til hva som har skjedd med fordelingen. Sammenhengen mellom foreldre og barn er derimot relativ mobilitet, og avstanden mellom posisjonene er ulikhet. Karrierebevegelse innenfor ett livsløp er intragenerasjonell mobilitet, som er en tredje størrelse.",
    },
    {
      question: "Hvorfor kan absolutt mobilitet være høy uten at sjansene er blitt jevnere fordelt?",
      options: ["Fordi strukturendring gir flere posisjoner oppe, slik at mange nødvendigvis må ende et annet sted", "Fordi mange bytter yrke flere ganger i løpet av livet og dermed blir registrert som mobile i statistikken", "Fordi utdanningsnivået i befolkningen stiger og alle derfor får en høyere posisjon enn før", "Fordi målemetoden bygger på et utvalg og derfor overdriver hvor mye bevegelse som finnes"],
      explanation: "Når industriarbeidsplasser blir færre og yrker med krav om utdanning blir flere, finnes det ikke nok posisjoner nederst til at alle kan bli værende der. Bevegelsen kommer da av at rommet har endret form, ikke av jevnere konkurranse. Yrkesbytte innenfor et livsløp er en annen størrelse, og norsk mobilitetsforskning bygger på registerdata for hele befolkningen, ikke på utvalg.",
    },
    {
      question: "Hva svarer relativ mobilitet på?",
      options: ["Hvor mye lettere et barn fra toppen har for å ende på toppen enn et barn fra bunnen", "Hvor mange i en generasjon som ender høyere enn foreldrene sine i klassestrukturen", "Hvor stor del av inntektsforskjellene i befolkningen som kan forklares av utdanning", "Hvor raskt en person beveger seg oppover i hierarkiet i løpet av sin egen karriere"],
      explanation: "Relativ mobilitet sammenlikner sjanser mellom utgangsposisjoner og er upåvirket av at det er blitt flere plasser oppe. Å telle hvor mange som ender høyere, er absolutt mobilitet. Forklaring av inntektsforskjeller er en fordelingsanalyse, og karrieretempo er intragenerasjonell mobilitet.",
    },
    {
      question: "Hva finner norsk mobilitetsforskning om den relative mobiliteten i Norge?",
      options: ["At sammenhengen mellom foreldrenes og barnas posisjon har holdt seg stabil, sterkest i toppen", "At sammenhengen mellom foreldrenes og barnas klasseposisjon er blitt klart svakere i nyere generasjoner", "At sammenhengen er sterkest i bunnen, fordi det er der reproduksjonskanalene virker hardest", "At sammenhengen har forsvunnet i generasjonene som vokste opp etter utdanningsekspansjonen"],
      explanation: "Hansen og Uvaag finner at koblingen mellom foreldre og barn har holdt seg påfallende stabil gjennom en periode med kraftig utdanningsekspansjon, og at den er særlig sterk i toppen: det er lettere å bli værende oppe enn å komme seg dit. At sammenhengen skulle være sterkest i bunnen, er en vanlig antakelse som funnene ikke støtter. Den absolutte oppgangen er reell, men den gjelder en annen størrelse.",
    },
    {
      question: "En person begynner i en rutinepreget jobb og ender som mellomleder tjue år senere. Hva er dette?",
      options: ["Intragenerasjonell mobilitet, fordi bevegelsen skjer innenfor ett menneskes yrkesliv", "Absolutt mobilitet, fordi personen har endt i en annen posisjon enn utgangspunktet sitt", "Relativ mobilitet, fordi personen har passert andre som startet i samme posisjon", "Sosial reproduksjon, fordi bevegelsen skjedde uten at noen hadde bestemt at den skulle skje"],
      explanation: "Bevegelsen måles mot personens eget utgangspunkt og er derfor intragenerasjonell. Absolutt mobilitet måles mot foreldrenes posisjon, ikke mot ens eget startpunkt, og relativ mobilitet er en sammenlikning av sjanser mellom utgangsposisjoner i hele årskull. Reproduksjon er overføring mellom generasjoner.",
    },
    {
      question: "Hvilken variant av mobilitet handler norske funn om stabile sjanser først og fremst om?",
      options: ["Intergenerasjonell mobilitet, altså forholdet mellom foreldrenes og barnas posisjon", "Intragenerasjonell mobilitet, altså bevegelse innenfor den enkeltes egen yrkeskarriere", "Geografisk mobilitet, altså flytting mellom landsdeler og mellom by og distrikt", "Utdanningsmobilitet alene, altså forskjellen i antall år med skolegang mellom kull"],
      explanation: "Funnene om at sammenhengen har holdt seg stabil, gjelder forholdet mellom generasjoner, og å si det eksplisitt viser at du vet hva funnet er et funn om. Karrierebevegelse innenfor ett livsløp er en annen størrelse som kan peke motsatt vei. Flytting og utdanningslengde er egne variabler som ikke i seg selv er klassemobilitet.",
    },
    {
      question: "Gjennom hvilke kanaler virker sosial reproduksjon?",
      options: ["Økonomiske ressurser, kulturell fortrolighet, nettverk og forventninger, samtidig", "Arv og gaver mellom generasjoner, som overføres gjennom testamenter og skifteoppgjør", "Bevisst opplæring i hjemmet, der foreldrene lærer barna hvordan de skal nå bestemte yrker", "Utdanningssystemets rangering av elever etter prestasjoner på nasjonale prøver og eksamener"],
      explanation: "Reproduksjonen går gjennom flere kanaler på én gang, og ingen av dem forutsetter en beslutning om å overføre noe. Juridisk arv er bare én liten del av den økonomiske kanalen. At mekanismen ikke krever bevisst opplæring, er nettopp grunnen til at gratis utdanning ikke opphever den.",
    },
    {
      question: "Hva menes med at utdanningssystemet både er en mobilitetskanal og en reproduksjonskanal?",
      options: ["At det jevner ut tilgangen og viderefører rangeringen gjennom én og samme bevegelse", "At det virker utjevnende i grunnskolen og reproduserende i høyere utdanning", "At det gir mobilitet til dem som lykkes og reproduksjon til dem som faller fra", "At det utjevner i perioder med reformer og reproduserer i perioder uten reformer"],
      explanation: "Poenget er at åpen tilgang flytter det som sorterer, innover i systemet: til hvilket program, hvilken institusjon og hvilke karakterer. Det er én mekanisme med to virkninger, ikke to atskilte trinn, to grupper eller to tidsperioder. Å skrive det som ett poeng i stedet for som en fordel og en ulempe er selve løftegrepet i temaet.",
    },
    {
      question: "Hva er mekanismen bak at utdanningsekspansjonen ikke utjevnet de relative sjansene tilsvarende?",
      options: ["Konkurransen flyttet seg oppover i systemet etter hvert som hvert trinn ble vanlig", "Utdanningen ble dyrere å ta, slik at familier med lite midler ikke lenger kunne satse", "Kvaliteten sank i takt med at flere ble tatt opp, slik at gradene mistet sin verdi", "Arbeidsgiverne sluttet å vektlegge utdanning og gikk over til å vektlegge erfaring"],
      explanation: "Da videregående ble noe alle tar, sluttet videregående å skille, og skillet flyttet til hvilken grad, hvilket studium og hvilken institusjon — der reproduksjonskanalene virker på nytt. Høyere utdanning i Norge er ikke blitt dyrere i form av studieavgifter, og forklaringen krever verken kvalitetsfall eller at arbeidsgiverne endret vurdering.",
    },
    {
      question: "Hva er det mest interessante funnet ved seleksjonspunktene i utdanningsløpet?",
      options: ["At elever med like prestasjoner velger systematisk ulikt etter bakgrunnen sin", "At elever med ulike prestasjoner ender i ulike utdanningsløp etter hvert som de velger", "At elever med minoritetsbakgrunn velger yrkesfag oftere enn andre elever gjør", "At elever bytter studieretning oftere nå enn de gjorde i tidligere generasjoner"],
      explanation: "Forskjeller i valg gitt like prestasjoner er den delen som ikke lar seg forklare med ferdigheter, og derfor den som krever en egen mekanismeforklaring: risiko, kjennskap og forventning. At ulike prestasjoner gir ulike løp, er ventet og forklarer lite. De to andre påstandene handler om andre spørsmål enn klasseseleksjon.",
    },
    {
      question: "Hva er den viktigste styrken ved registerdata i mobilitetsforskningen?",
      options: ["De dekker hele befolkningen og kan koble foreldre og barn over lange tidsrom", "De er samlet inn til forskningsformål og er derfor tilpasset forskerens egne spørsmål", "De inneholder opplysninger om holdninger og vurderinger hos hele befolkningen", "De er innsamlet på ett tidspunkt og gir derfor et presist bilde av situasjonen nå"],
      explanation: "Fordi registrene omfatter alle, finnes det ingen utvalgsusikkerhet og ingen skjevhet fra dem som ikke svarer, og koblingen mellom generasjoner er nettopp det intergenerasjonell mobilitet krever. Registre er samlet inn til forvaltningsformål, ikke til forskning, og de inneholder posisjoner og utfall, ikke holdninger. Verdien ligger i tidsdybden, ikke i et øyeblikksbilde.",
    },
    {
      question: "Hva kan registerdata ikke vise om klassereproduksjon?",
      options: ["Hvorfor sammenhengen består, altså motiver, opplevelser og vurderinger bak utfallene", "Hvor sterk sammenhengen mellom foreldrenes og barnas posisjon faktisk er", "Hvordan sammenhengen har utviklet seg over flere tiår og flere generasjoner", "Hvor stor del av befolkningen som ender i en annen posisjon enn foreldrene"],
      explanation: "Registre inneholder posisjoner og utfall, ikke mening: de viser at koblingen består, men ikke hva som ble sagt rundt kjøkkenbordet eller hvordan en avvisning ble opplevd. Styrken, altså utviklingen over tid og andelen som beveger seg, er nettopp det registrene måler godt. Mekanismen må derfor hentes fra reproduksjonsteorien og merkes som forklaring, ikke som funn.",
    },
    {
      question: "Hva er den analytiske innvendingen mot å bruke en enkelt klassereise som argument?",
      options: ["Enkelttilfellet sier ingenting om hvor systematisk fordelt bevegelsene er", "Enkelttilfellet er som regel husket feil av den som forteller om det", "Enkelttilfellet gjelder bare intragenerasjonell mobilitet og ikke klasse", "Enkelttilfellet handler om opplevelser, som ikke lar seg måle i sosiologisk forskning"],
      explanation: "At noen beveger seg langt, er fullt forenlig med at de relative sjansene er stabile, for spørsmålet er aldri om det skjer, men hvordan bevegelsene fordeler seg. Erfaringer er verdifulle som illustrasjon av et begrep, men kan ikke erstatte et funn. Klassereiser er dessuten typisk mobilitet mellom generasjoner, og opplevelser er et fullverdig sosiologisk materiale når de brukes riktig.",
    },
    {
      question: "Hva er kjernen i klasse- og mobilitetsparadokset?",
      options: ["Den absolutte mobiliteten er høy, mens den relative mobiliteten er seig", "Ulikheten i inntekt er lav, mens ulikheten i formue og eierskap er høy", "Folk opplever seg som middelklasse, mens de faktisk står i ulike posisjoner", "Utdanningsnivået stiger i befolkningen, mens sysselsettingen faller i bunnen"],
      explanation: "Paradokset er at bunnen er løftet og mange har endt et annet sted enn foreldrene, samtidig som sjansene mellom klasseposisjonene består. De to måltallene svarer på hvert sitt spørsmål og kan derfor peke i hver sin retning uten motsigelse. De andre spenningene er reelle observasjoner, men de er ikke den distinksjonen som oppløser klassedebatten.",
    },
    {
      question: "Hvordan bør påstanden om at Norge er klasseløst behandles faglig?",
      options: ["Den må presiseres før den prøves, siden den kan bety avstand, posisjon eller sjanser", "Den bør avvises direkte, siden klasseforskningen har vist at klasser fortsatt finnes", "Den bør bekreftes med forbehold, siden avstandene i Norge er små i internasjonal målestokk", "Den bør behandles som et verdispørsmål som ikke kan prøves mot forskningsfunn"],
      explanation: "Uten presisering er påstanden uavgjørbar: målt som avstand og levekår har den en kjerne, målt som sammenheng mellom bakgrunn og bestemmelsessted faller den. Å avvise eller bekrefte direkte er å velge side i en debatt som er uklar fordi begrepene mangler. Deler av påstanden kan dessuten prøves mot data, selv om ordet også brukes normativt.",
    },
    {
      question: "Hva skiller en interseksjonell analyse fra en additiv?",
      options: ["Den spør om skjæringspunktet har egne mekanismer, ikke bare summen av ulempene", "Den undersøker flere ulikhetsdimensjoner samtidig i stedet for bare én av gangen", "Den bruker kvalitative data om opplevelser i stedet for kvantitative data om utfall", "Den legger vekt på etnisitet og kjønn framfor klasse, som den regner som utdatert"],
      explanation: "Additiv analyse legger ulemper oppå hverandre og antar at de virker uavhengig; interseksjonell analyse spør om posisjonen i skjæringspunktet er kvalitativt annerledes. Å se på flere dimensjoner er en forutsetning, men ikke i seg selv det som skiller de to. Begrepet er heller ikke knyttet til én datatype eller til en rangering av dimensjonene.",
    },
    {
      question: "Hvorfor er svak klasseidentitet ikke et argument mot at klasse virker?",
      options: ["Strukturasjonen går gjennom bosetting, samliv og institusjoner uansett hva folk kaller seg", "Folk underrapporterer systematisk sin egen bakgrunn når de blir spurt om tilhørighet", "Klasseidentitet måles med metoder som er for upresise til å si noe om posisjoner", "Identitet regnes som et mikrofenomen, og klasseanalysen handler bare om makronivået"],
      explanation: "Mekanismene som fordeler posisjoner, virker gjennom hvem du bor blant, lever med og møter i institusjonene, og de er uavhengige av selvforståelse. Å svare på et spørsmål om posisjon med et funn om identitet er å svare på nabospørsmålet. Klasseanalysen avviser heller ikke mikronivået — den kobler nivåene.",
    },
    {
      question: "Hvorfor bør sammenlikningsgrunnlaget navngis i en drøfting om mobilitet?",
      options: ["Fordi de samme funnene gir ulike konklusjoner målt mot land, mot fortiden eller mot idealet", "Fordi sammenlikninger mellom land alltid er mer pålitelige enn tidsserier for ett enkelt land", "Fordi tallene fra ulike land er samlet inn med metoder som ikke lar seg sammenlikne", "Fordi mobilitet bare kan måles meningsfullt når to land settes opp mot hverandre"],
      explanation: "Målt mot andre land framstår Norge som åpent, målt mot etterkrigstiårene som mindre mobilt, og målt mot idealet om mulighetslikhet som langt fra målet. To kandidater kan derfor bruke samme funn og lande ulikt uten at noen tar feil. Å si hvilket grunnlag du bruker, er et selvstendig grep, ikke en metodisk innvending mot datakvaliteten.",
    },
    {
      question: "Hvilket begrepspar eier Hansen og Uvaag i denne bokas pensumkart?",
      options: ["Absolutt og relativ mobilitet, med arbeiderklassen som empirisk kategori", "Klassestrukturasjon og den norske klassestrukturen slik den er kartlagt", "Kulturell og økonomisk kapital som to innbyrdes uavhengige ressursformer", "Horisontal og vertikal kjønnsdeling slik den finnes i norsk arbeidsliv"],
      explanation: "Hansen og Uvaag er referansen for mobilitetsbegrepene og for arbeiderklassen som målbar posisjon. Klassestrukturasjonen og kartleggingen av den norske klassestrukturen hører til Flemmen, og kjønnsdelingen hører til Teigen og Skjeie. Kapitalformene er etablerte grunnbegreper i ulikhetsforskningen og tilskrives ingen av disse.",
    },
    {
      question: "På flervalgsdelen klarer du å utelukke to av fire alternativer, men er usikker på resten. Hva lønner seg?",
      options: ["Å svare, fordi forventet uttelling da er positiv med poengmodellen som gjelder", "Å la spørsmålet stå, fordi null poeng alltid er tryggere enn risikoen for et galt svar", "Å svare bare hvis du rekker å lese hele pensumavsnittet om temaet på nytt", "Å la det stå og markere det, fordi minuspoeng gjør all gjetting ulønnsom"],
      explanation: "Med +1 for riktig, −0,5 for galt og 0 for ubesvart er forventet uttelling positiv når to av fire er utelukket, og da lønner det seg å svare. Blind gjetting uten eliminering gir derimot negativ forventet uttelling, og det er der avståelse er riktig. Regelen er at eliminering av to gjør gjetting lønnsom, ikke at all gjetting er farlig.",
    },
  ],
  'sos1004-5-4': [
    {
      question: "Hva er sosialt kjønn?",
      options: ["Forventningene og rollene et samfunn knytter til kroppslige kjennetegn", "De kroppslige og reproduktive kjennetegnene et menneske er født med", "Den kjønnsidentiteten den enkelte selv opplever at hun eller han har", "Fordelingen av kvinner og menn på yrker og posisjoner i arbeidslivet"],
      explanation: "Sosialt kjønn er det innholdet et samfunn legger i kategoriene kvinne og mann: forventninger, roller, arbeidsoppgaver og posisjoner. Kroppslige kjennetegn er biologisk kjønn, som er nabobegrepet distinksjonen bygger på. Fordelingen på yrker og posisjoner er kjønnsdelt arbeidsmarked, altså et utfall og ikke selve begrepet.",
    },
    {
      question: "Hva er det sterkeste argumentet for at kjønnsforskjeller i yrkesvalg ikke er biologisk bestemt?",
      options: ["At mønsteret varierer mellom land og over tid mens biologien er den samme", "At forskning ikke har påvist biologiske forskjeller mellom kjønnene", "At kvinner og menn presterer likt i de fleste utdanningsløpene de begynner på", "At lovverket forbyr forskjellsbehandling på grunnlag av kjønn i arbeidslivet"],
      explanation: "Noe som er konstant, kan ikke forklare noe som varierer: mønsteret ser ulikt ut i land med samme biologi og har endret seg raskt i Norge. Argumentet forutsetter ikke at biologiske forskjeller mangler, bare at de ikke forklarer variasjonen. Like prestasjoner og lovforbud er andre observasjoner og treffer ikke det logiske poenget.",
    },
    {
      question: "Hva betyr det at kjønn er sosialt konstruert?",
      options: ["At innholdet i kategoriene skapes og holdes ved like gjennom sosialt samspill", "At kjønn er en innbilning uten virkelige konsekvenser for menneskers liv", "At kroppslige forskjeller mellom kvinner og menn er overdrevet i forskningen", "At den enkelte fritt kan velge hvilken av kjønnskategoriene hun vil tilhøre"],
      explanation: "En sosial konstruksjon er ikke en illusjon: penger er også sosialt konstruert og virker med stor kraft. Poenget er at innholdet i kategorien er skapt av mennesker og derfor kan endres av mennesker. Påstanden gjelder kategorienes innhold, ikke kroppens eksistens og ikke den enkeltes valgfrihet.",
    },
    {
      question: "Hva skiller kjønnet arbeidsdeling fra kjønnsdelt arbeidsmarked?",
      options: ["Arbeidsdelingen omfatter også det ubetalte omsorgsarbeidet i hjemmet", "Arbeidsdelingen gjelder bare offentlig sektor og ikke privat næringsliv", "Arbeidsdelingen måles på husholdningsnivå og ikke på individnivå", "Arbeidsdelingen er et historisk begrep som ikke lenger brukes i faget"],
      explanation: "Kjønnet arbeidsdeling er det videre begrepet og dekker omsorgs- og husarbeid som aldri er blitt lønnet, mens kjønnsdelt arbeidsmarked gjelder den delen som viser seg i lønnet arbeid. Skillet mellom sektorer og valget av analysenivå er andre spørsmål. Begge begrepene er i aktiv bruk i faget.",
    },
    {
      question: "Hva kjennetegner en kjønnsessensialistisk forklaring?",
      options: ["Den forklarer mønsteret med iboende egenskaper hos kvinner og menn", "Den forklarer mønsteret med hvordan utdanningsløpene er organisert", "Den forklarer mønsteret med at valgene tas under ulike økonomiske vilkår", "Den forklarer mønsteret med at forventninger læres tidlig i oppveksten"],
      explanation: "Kjønnsessensialisme forutsetter det den skal forklare ved å vise til faste, medfødte egenskaper, og den kan derfor verken forklare variasjon mellom land eller endring over tid. Organiseringen av utdanningsløp er den strukturelle forklaringen. Ulike økonomiske vilkår og tidlig læring peker mot valgforklaringen og mot kjønnssosialisering.",
    },
    {
      question: "Hva forklarer begrepet kjønnssosialisering?",
      options: ["At kjønnsdeling kan bestå uten ytre tvang, fordi valget kjennes fritt", "At kvinner og menn har ulike interesser fra fødselen av og velger deretter", "At arbeidsgivere velger søkere som likner dem de allerede har ansatt", "At kjønnsdelte mønstre endrer seg raskt når institusjonene endres"],
      explanation: "Sosialisering virker ved at forventninger innarbeides så grundig at de oppleves som egne preferanser, og det forklarer hvorfor mønstre reproduserer seg uten at noen presser noen. Medfødte interesser er kjønnsessensialisme, ikke sosialisering. Rask endring etter en institusjonell reform er nettopp det sosialisering forklarer dårlig, og rekrutteringsmønstre er en annen mekanisme.",
    },
    {
      question: "Hvilke tre elementer består den nordiske likestillingsmodellen av hos Teigen og Skjeie?",
      options: ["Offentlig omsorg, øremerket fedrekvote og høy yrkesdeltakelse blant kvinner", "Lovfestet diskrimineringsvern, styrekvotering og likelønnsoppgjør", "Gratis utdanning, universell barnetrygd og skattefradrag for kjøp av barnepass", "Fleksible arbeidstidsordninger, rett til redusert stilling og utbygd eldreomsorg"],
      explanation: "Modellen består av offentlig finansiert omsorg, en foreldrepermisjon med kvote som faller bort om den ikke brukes, og en kvinnelig yrkesdeltakelse som både følger av de to første og finansierer dem. Diskrimineringsvern og kvotering er formallikhet og representasjonstiltak, ikke selve modellen. De øvrige ordningene finnes, men inngår ikke i beskrivelsen.",
    },
    {
      question: "Hva er det avgjørende ved den nordiske likestillingsmodellen som struktur?",
      options: ["At de tre elementene forutsetter hverandre og ikke bare finnes side om side", "At den bygger på et bredt kompromiss mellom partene i arbeidslivet og staten", "At den kombinerer offentlige velferdsordninger med et stort privat tilbud", "At den bygger på holdninger til likestilling som er blant de mest positive i Europa"],
      explanation: "Poenget er koblingen: omsorgen frigjør til yrkesarbeid, yrkesarbeidet finansierer omsorgen, og kvoten omfordeler ansvaret inne i familien. En besvarelse som lister elementene uten koblingen, er korrekt og flat. Modellen er en struktur og ikke en holdning, og det er nettopp forvekslingen som mister mekanismen.",
    },
    {
      question: "Hvordan virker offentlig omsorg som likestillingspolitikk?",
      options: ["Den avlaster familien og er samtidig en stor kvinnedominert arbeidsplass", "Den avlaster familien og gjør dermed private omsorgstjenester overflødige", "Den senker kostnaden ved barnepass og hever dermed fruktbarheten i befolkningen", "Den gir rett til permisjon og vern mot oppsigelse i omsorgsfasen"],
      explanation: "Mekanismen har to trinn: omsorgsarbeid flyttes fra ubetalt arbeid hjemme til lønnet arbeid, og den samme sektoren er selv en kvinnedominert arbeidsgiver. Å bare nevne avlastningen er den vanligste ufullstendigheten, og da mister du forklaringen på den horisontale kjønnsdelingen. Fruktbarhet og stillingsvern er andre virkninger og hører til andre begreper.",
    },
    {
      question: "Hva er det som gjør en øremerket fedrekvote virksom, sosiologisk sett?",
      options: ["At tiden faller bort dersom den ikke blir brukt av den den er reservert for", "At den samlede permisjonstiden blir lengre når begge foreldrene får en egen del", "At foreldrene selv kan fordele hele permisjonen etter eget ønske og behov", "At den gir en høyere utbetaling i den perioden faren er hjemme med barnet"],
      explanation: "Innretningen er poenget: en kvote som ikke kan overføres, gjør at alternativet til å bruke den er å miste den, og det er derfor uttaket endret seg raskt etter at kvoten kom. En kvote gjør ikke permisjonen lengre, den er det motsatte av fri fordeling mellom foreldrene, og den innebærer ingen høyere ytelse.",
    },
    {
      question: "Hva er det ved fedrekvoten som gjør at den virker?",
      options: ["At den øremerkede tiden faller bort dersom den ikke blir tatt ut", "At den utbetales med en høyere kompensasjonsgrad enn resten av permisjonen", "At den kan tas ut i flere perioder fram til barnet begynner på skolen", "At den gjelder likt i privat og offentlig sektor uansett tariffavtale"],
      explanation: "Bortfallet endrer hva familien forhandler om: alternativet er ikke lenger at mor tar tiden, men at familien mister den. Sats, fleksibilitet og dekningsområde er reelle egenskaper ved permisjonsordninger, men ingen av dem er den mekanismen forskningen fremhever som avgjørende.",
    },
    {
      question: "Hvilket funn er knyttet til innføringen av fedrekvoten?",
      options: ["Uttaket av permisjon flyttet seg raskt fra mor til far etter innføringen", "Kvinners yrkesdeltakelse steg markant i årene like etter innføringen", "Fruktbarheten i Norge stabiliserte seg på reproduksjonsnivå etter innføringen", "Andelen kvinner i lederstillinger økte jevnt i tiåret etter innføringen"],
      explanation: "Registerbaserte studier viser at permisjonsuttaket flyttet seg raskt og merkbart fra mor til far, og at bevegelsen skiller seg fra utviklingen under fritt delbare ordninger. Yrkesdeltakelse, fruktbarhet og lederandel er andre størrelser som ordningen ikke er dokumentert å ha flyttet på samme måte, og å tilskrive kvoten dem er å strekke funnet.",
    },
    {
      question: "Hvorfor kan fedrekvoten kalles et de-familiseringstiltak?",
      options: ["Den løsner koblingen mellom det å være kvinne og det å ha omsorgsansvaret", "Den gjør familien mindre avhengig av inntekt fra arbeidsmarkedet i permisjonstiden", "Den flytter omsorgsarbeidet ut av familien og over til en offentlig tjeneste", "Den gir begge foreldrene rett til å være hjemme samtidig med små barn"],
      explanation: "De-familisering er graden av at man kan klare seg uavhengig av familierelasjoner, og kvoten virker ved å omfordele omsorgsansvaret inne i familien. Å gjøre familien uavhengig av markedsinntekt er de-kommodifisering, altså nabobegrepet. Å flytte arbeidet ut av familien er barnehagens virkemåte, ikke kvotens.",
    },
    {
      question: "Hva måler de-familisering?",
      options: ["I hvilken grad man kan klare seg uavhengig av familierelasjoner", "I hvilken grad velferd frigjør individet fra å måtte selge arbeidskraften", "Hvor stor del av omsorgstjenestene i et land som drives i offentlig regi", "Hvor jevnt to voksne deler det ubetalte hjemmearbeidet"],
      explanation: "De-familisering måler avstanden til familien som forsørger- og omsorgsenhet. Frigjøring fra markedet er de-kommodifisering, og forvekslingen mellom de to er den vanligste på dette stoffet. Driftsform og fordelingen mellom to voksne er virkninger eller egenskaper ved ordninger, ikke det begrepet måler.",
    },
    {
      question: "Hvorfor er høy kvinnelig yrkesdeltakelse en betingelse for den nordiske modellen?",
      options: ["Fordi yrkesdeltakelsen gir skattegrunnlaget som finansierer omsorgstjenestene", "Fordi modellen forutsetter at begge foreldrene har opptjent rett til permisjon", "Fordi høy sysselsetting er et uttrykt mål i den nordiske likestillingspolitikken", "Fordi omsorgstjenestene bare kan bemannes dersom kvinner søker seg til dem"],
      explanation: "Sirkelen er at omsorgen frigjør til yrkesarbeid, yrkesarbeidet finansierer omsorgen, og de finansierte tjenestene holder yrkesdeltakelsen oppe. Opptjeningsregler og politiske målsettinger er reelle, men de gjør ikke deltakelsen til en økonomisk betingelse. Bemanningsargumentet snur årsaksretningen og forklarer ikke finansieringen.",
    },
    {
      question: "Hva er formallikhet?",
      options: ["Likhet i regler og rettigheter, slik at ingen formelt utestenges", "Likhet i faktiske utfall mellom kvinner og menn i arbeidslivet", "Likhet i sjansene til å nå en posisjon uavhengig av utgangspunktet", "Likhet i behandlingen av like kvalifiserte søkere til samme stilling"],
      explanation: "Formallikhet er en egenskap ved reglene og ikke ved utfallene eller sjansene. Likhet i utfall er resultatlikhet, og like sjanser er mulighetslikhet — de tre gir ulike svar på om likestillingen har lyktes. Lik behandling i en enkelt ansettelse er en anvendelse av regelen, ikke selve begrepet.",
    },
    {
      question: "Hvorfor trengs resultatlikhet som begrep selv om ingen har full resultatlikhet som mål?",
      options: ["Fordi det er målestokken som gjør avstanden til likt utfall målbar", "Fordi det er den eneste formen for likhet som lar seg lovfeste i praksis", "Fordi det er den formen for likhet velferdsstaten er innrettet mot å skape", "Fordi det er begrepet likestillingspolitikken selv bruker"],
      explanation: "Begrepet brukes som målestokk og ikke som krav: uten det kan man ikke si hvor langt fra likt utfall vi ligger eller om avstanden har endret seg. At det skulle være lovfestbart eller velferdsstatens uttrykte mål, er påstander begrepet ikke bærer. Å tillegge politikken denne ordbruken er også unøyaktig.",
    },
    {
      question: "Hvilke to dimensjoner har begrepet kjønnsdelt arbeidsmarked?",
      options: ["Horisontal og vertikal kjønnsdeling", "Direkte og indirekte kjønnsdeling", "Formell og reell kjønnsdeling", "Absolutt og relativ kjønnsdeling"],
      explanation: "Horisontal deling er hvilke yrker og sektorer, vertikal deling er hvilke posisjoner i hierarkiet. De øvrige begrepsparene finnes i faget, men hører til diskriminering, til likhetsbegrepene og til mobilitetsanalysen — å importere dem hit er å bytte ut den distinksjonen som faktisk måles.",
    },
    {
      question: "Hva beskriver horisontal kjønnsdeling?",
      options: ["At kvinner og menn arbeider i ulike yrker og i ulike sektorer", "At kvinner og menn fordeler seg ulikt oppover i hierarkiene", "At kvinner og menn har ulik arbeidstid i den samme stillingen", "At kvinner og menn får ulik lønn for arbeid av lik verdi"],
      explanation: "Horisontal deling handler om hvilke yrker og sektorer, og kan beskrives uten å nevne at noen er sjef for noen. Fordelingen oppover i hierarkiet er den vertikale dimensjonen, og forvekslingen mellom dem er kapitlets viktigste felle. Arbeidstid og lønn er virkninger og andre målestørrelser.",
    },
    {
      question: "Hvilken mekanisme forklarer den horisontale kjønnsdelingen i Norge særlig godt?",
      options: ["At velferdsstaten selv er den store arbeidsgiveren i omsorgssektoren", "At arbeidsgivere systematisk foretrekker søkere av ett bestemt kjønn", "At kvinner i større grad enn menn arbeider deltid gjennom yrkeslivet", "At karriereløp forutsetter sammenhengende tilstedeværelse i småbarnsfasen"],
      explanation: "Den samme utbyggingen som frigjorde kvinner til arbeidsmarkedet, skapte også de kvinnedominerte yrkene de gikk inn i — én mekanisme med to virkninger. Deltid og karriereløpenes tidsstruktur forklarer den vertikale delingen, ikke den horisontale. Bevisst forskjellsbehandling er en annen forklaringstype og forutsetter noe strukturforklaringen ikke gjør.",
    },
    {
      question: "Hva beskriver vertikal kjønnsdeling?",
      options: ["At kvinner og menn fordeler seg ulikt i ledelse og toppstillinger", "At kvinner og menn arbeider i ulike sektorer av arbeidsmarkedet", "At kvinner i større grad enn menn har omsorgsansvar i hjemmet", "At kvinnedominerte yrker har lavere lønnsnivå enn mannsdominerte"],
      explanation: "Vertikal deling handler om posisjoner innenfor samme yrke eller sektor, altså hvem som når toppen. Sektorfordelingen er den horisontale dimensjonen. Omsorgsansvar hjemme er det doble skiftet, og lønnsnivået mellom sektorer er en av komponentene i lønnsforskjellen.",
    },
    {
      question: "Hva er problemet med å bruke glasstaket som forklaring?",
      options: ["Begrepet beskriver et mønster og navngir ikke mekanismene bak det", "Begrepet stammer fra amerikansk forskning og passer dårlig på norske forhold", "Begrepet forutsetter at det finnes et formelt hinder i regelverket", "Begrepet gjelder bare toppstillinger og sier ingenting om mellomledernivået"],
      explanation: "Glasstaket er en overskrift over et utfall, og årsakene må skrives ut: karriereløpenes tidsstruktur, omsorgsbelastningen i småbarnsfasen og seleksjonen i rekrutteringen. Taket er nettopp av glass fordi det ikke står i noe reglement, så et formelt hinder er det motsatte av det begrepet beskriver.",
    },
    {
      question: "Hva er skillet mellom deltid som strukturelt og som valgt fenomen?",
      options: ["Om deltiden ligger i stillingsstrukturen eller i den ansattes tilpasning", "Om deltiden er avtalt i tariffavtale eller i den individuelle arbeidskontrakten", "Om deltiden varer i en avgrenset livsfase eller gjennom hele yrkeskarrieren", "Om deltiden gir rett til pensjonsopptjening og feriepenger på vanlig måte"],
      explanation: "Er deltiden en egenskap ved turnus og bemanningsplan, må den som vil ha hel stilling, lete etter den, og da er den strukturell. Er den en tilpasning til omsorgsansvar i en livsfase, er den valgt — men valget tas innenfor en kjønnet arbeidsdeling hjemme. Avtaleform, varighet og opptjeningsregler er andre spørsmål.",
    },
    {
      question: "Hva forutsetter begrepet det doble skiftet?",
      options: ["At kvinnene det gjelder allerede er i lønnet arbeid utenfor hjemmet", "At begge foreldrene i husholdningen arbeider i full stilling", "At omsorgsarbeidet hjemme ikke er blitt jevnere fordelt over tid", "At arbeidsgiveren pålegger de ansatte skift ut over normal arbeidstid"],
      explanation: "Begrepet beskriver at arbeidsdagen fortsetter etter arbeidsdagen, og det forutsetter altså yrkesaktivitet — det beskriver ikke fravær fra arbeidslivet. Fordelingen av ubetalt arbeid har faktisk blitt jevnere over tid, og det skal med i framstillingen. Skiftarbeid i vanlig forstand er noe annet enn begrepet viser til.",
    },
    {
      question: "Hva utgjør hoveddelen av lønnsforskjellen mellom kvinner og menn?",
      options: ["At kvinner og menn har ulike yrker, ulike posisjoner og ulik stillingsandel", "At kvinner og menn får ulik lønn for det samme arbeidet hos samme arbeidsgiver", "At kvinner oftere enn menn har avbrudd i yrkeskarrieren på grunn av sykdom", "At kvinner i mindre grad enn menn forhandler om lønnen ved ansettelsen"],
      explanation: "Hovedtyngden av forskjellen ligger i hvem som arbeider hvor, i hvilken stilling og hvor mye — altså i horisontal deling, vertikal deling og arbeidstid. Ulik lønn for samme arbeid hos samme arbeidsgiver er forbudt og utgjør en liten del av bildet. Sykdomsavbrudd og forhandlingsatferd er andre forhold som ikke bærer hoveddelen.",
    },
    {
      question: "Hva er kjernen i likestillingsparadokset?",
      options: ["At land med høyest formell likestilling har svært kjønnsdelte arbeidsmarkeder", "At holdningene til likestilling er mer positive enn praksisen i arbeidslivet er", "At likestillingen har kommet lenger for kvinner med høy utdanning enn for andre", "At politiske likestillingstiltak virker godt på kort sikt og svakere over tid"],
      explanation: "Paradokset er kombinasjonen av høy formell likestilling og sterk kjønnsdeling, og det skjerpes av at de samme institusjonene ga begge deler. Sprik mellom holdning og praksis er en reell observasjon, men den fanger ikke at suksessen og delingen har samme opphav. De øvrige beskriver et klasseskille og et tiltaksforløp.",
    },
    {
      question: "Hva er den strukturelle forklaringens sterkeste argument?",
      options: ["At mønsteret består mens holdninger, rettigheter og utdanningsnivå endrer seg", "At kvinner og menn oppgir ulike grunner når de begrunner sine yrkesvalg", "At kjønnsdelingen er sterkere i Norge enn i de fleste andre europeiske land", "At arbeidsgivere ofte foretrekker søkere som likner dem de allerede har ansatt"],
      explanation: "Endrer alt annet seg mens mønsteret består, peker det mot at noe ligger i strukturen. At delingen er sterk i Norge, er selve observasjonen som skal forklares og ikke et argument for én forklaring. Egne begrunnelser trekker mot valgforklaringen, og rekrutteringspreferanser er en tredje mekanisme.",
    },
    {
      question: "Hva er preferanse- og valgforklaringens sterkeste argument?",
      options: ["At kjønnsdelte valg kan bli mer utbredt når nødvendighet ikke styrer valget", "At kvinner og menn har medfødte forskjeller i interesser og i evner", "At mønsteret har holdt seg stabilt gjennom flere tiår med reformer", "At utdanningene formelt har vært åpne for begge kjønn i lang tid"],
      explanation: "Poenget er kontraintuitivt: når et sikkerhetsnett gjør det mulig å velge etter interesse framfor etter inntekt, kan kjønnsdelte valg forsterkes, og de mest likestilte landene kan derfor være de mest kjønnsdelte. En forklaring som bygger på medfødte egenskaper, er kjønnsessensialisme og forutsetter det den skal forklare. Stabiliteten er den strukturelle forklaringens kort.",
    },
    {
      question: "Hva kreves for at bruken av interseksjonalitet skal telle i en besvarelse?",
      options: ["At begrepet endrer hva besvarelsen faktisk kan si om gruppene den omtaler", "At alle relevante ulikhetsdimensjoner nevnes minst én gang i teksten", "At begrepet knyttes til den forskningstradisjonen det opprinnelig kommer fra", "At analysen bygger på et materiale som kan brytes ned på flere kjennetegn"],
      explanation: "Begrepet må gjøre en jobb: klarer du å vise at én av påstandene dine gjelder for noen kvinner og ikke for andre, har du brukt det riktig. Å nevne ordet uten den virkningen er navn uten funn i ny drakt. Å ramse opp dimensjoner, å oppgi opphavet eller å ha finmasket materiale er ikke i seg selv det begrepet krever.",
    },
    {
      question: "Hva skiller en interseksjonell analyse fra en additiv?",
      options: ["Den spør om posisjonen er kvalitativt annen, ikke summen av to ulemper", "Den tar med flere ulikhetsdimensjoner enn den additive analysen gjør", "Den bygger på kvalitative data, mens den additive bygger på registerdata", "Den måler ulikhet på gruppenivå, mens den additive måler på individnivå"],
      explanation: "En additiv analyse legger kjønnsulempen og den etniske ulempen sammen, mens en interseksjonell analyse spør om posisjonen har egne mekanismer som ingen av forskningstradisjonene fanger hver for seg. Antallet dimensjoner er ikke skillet, og heller ikke valget av datatype eller analysenivå.",
    },
    {
      question: "Hvorfor rammer det kjønnsdelte arbeidsmarkedet ulike grupper kvinner ulikt?",
      options: ["Glasstaket gjelder posisjoner de færreste konkurrerer om, deltid treffer bredere", "Kvinner med høy utdanning arbeider sjeldnere i de kvinnedominerte sektorene", "Lønnsforskjellen mellom kjønnene er større i privat enn i offentlig sektor", "Kvinner med minoritetsbakgrunn har lavere yrkesdeltakelse enn andre kvinner"],
      explanation: "Den vertikale delingen handler om toppstillinger som de færreste konkurrerer om, mens deltid og turnusbelastning treffer bredere og lenger ned i klassestrukturen. En konklusjon bygget på det ene mønsteret gjelder derfor ikke for dem som lever i det andre. De øvrige påstandene er andre observasjoner og forklarer ikke hvorfor konklusjonen deles.",
    },
    {
      question: "Hva står fortsatt åpent i forskningen på det kjønnsdelte arbeidsmarkedet?",
      options: ["Hvilken av de to forklaringstypene som best forklarer at delingen består", "Om det norske arbeidsmarkedet er kjønnsdelt sammenliknet med andre land", "Om kvinners yrkesdeltakelse i Norden er høy sammenliknet med andre land", "Om fedrekvoten førte til et skifte i hvordan foreldrepermisjonen tas ut"],
      explanation: "Både den strukturelle forklaringen og preferanseforklaringen er forenlige med mønsteret, og ingen studie i pensum avgjør striden. De øvrige spørsmålene er derimot godt dokumentert: kjønnsdelingen er sterk, yrkesdeltakelsen er høy, og permisjonsuttaket flyttet seg etter kvoten. Å behandle det dokumenterte som åpent er like unøyaktig som det motsatte.",
    },
    {
      question: "Hvorfor avhenger svaret på om likestillingen har lyktes av målestokken?",
      options: ["Fordi formallikhet, mulighetslikhet og resultatlikhet gir ulike svar", "Fordi ulike land måler likestilling med ulike statistiske indikatorer", "Fordi forskerne er uenige om hvordan kjønnsdeling bør operasjonaliseres", "Fordi utviklingen har gått i ulik retning i privat og i offentlig sektor"],
      explanation: "Målt som formallikhet er svaret nesten ubetinget ja, målt som resultatlikhet er det nei, og en besvarelse som ikke sier hvilken målestokk den bruker, kan ikke etterprøves. Ulike indikatorer og uenighet om operasjonalisering er reelle problemer, men de forklarer ikke hvorfor spørsmålet har flere riktige svar. Sektorforskjeller er en annen observasjon.",
    },
    {
      question: "Hva slags spørsmål er det om kjønnsdeling i arbeidslivet i seg selv er et problem?",
      options: ["Et normativt spørsmål som forskningen ikke kan avgjøre", "Et empirisk spørsmål som kan avgjøres med registerdata", "Et metodisk spørsmål om hvordan deling best kan måles", "Et juridisk spørsmål om hvordan likestillingsvernet tolkes"],
      explanation: "Forskningen kan si hva delingen gjør med inntekt, pensjon og makt, men om konsekvensene er akseptable, er en verdivurdering utenfor det studiene måler. Å blande det normative med det empiriske er nettopp den glidningen som gjør en drøfting til synsing. Måling og rettsanvendelse er andre spørsmål.",
    },
    {
      question: "Du klarer å utelukke to av fire alternativer på et flervalgsspørsmål om kjønnsdeling. Hva lønner seg?",
      options: ["Å svare, fordi den forventede uttellingen da er positiv", "Å la spørsmålet stå, fordi et galt svar koster mer enn et riktig gir", "Å svare bare dersom du også kjenner igjen forskeren bak begrepet", "Å la spørsmålet stå og heller bruke tiden på de øvrige spørsmålene"],
      explanation: "Med to utelukkede alternativer er sjansen for riktig svar halvparten, og forventet uttelling blir positiv med poengmodellen +1, −0,5 og 0. Mantraet er at du gjetter når to er eliminert og lar stå når ingen er det. At feil koster mer enn riktig gir, stemmer ikke i denne modellen, og forfatterkjennskap er ikke det beslutningsregelen bygger på.",
    },
  ],
  'sos1004-6-1': [
    {
      question: "Hva menes med religiøs kompleksitet hos Furseth?",
      options: ["At religion beveger seg i flere retninger samtidig i samme samfunn", "At religionen mister betydning i takt med at samfunnet moderniseres", "At religiøs tro blir mer sammensatt og personlig hos den enkelte", "At mange religioner konkurrerer om de samme medlemmene i et marked"],
      explanation: "Religiøs kompleksitet betyr at individuell tro og praksis svekkes samtidig som mangfoldet og religionens synlighet øker. Beskrivelsen av religion som avtakende med modernisering er den klassiske sekulariseringstesen, som er én prosess med én retning. Begrepet gjelder samfunnsnivået og ikke bare innholdet i den enkeltes tro.",
    },
    {
      question: "Hvilke tre dimensjoner utgjør de tre B-ene hos Furseth?",
      options: ["Tilhørighet, tro og religiøs praksis", "Tilhørighet, tradisjon og fellesskap", "Tro, tvil og religiøs oppdragelse", "Praksis, ritualer og religiøs identitet"],
      explanation: "De tre B-ene er belonging, belief og behaviour, altså tilhørighet, tro og praksis. Tradisjon, tvil, fellesskap og oppdragelse er relevante fenomener, men de er ikke de tre målene Furseth bruker. Poenget med nettopp disse tre er at de kan måles hver for seg og bevege seg i ulik retning.",
    },
    {
      question: "Hva måler dimensjonen tilhørighet?",
      options: ["Medlemskap i et trossamfunn og identifikasjon med en tradisjon", "Hvor ofte en person ber eller deltar i religiøse samlinger", "Hva en person faktisk holder for sant om Gud og livet etter døden", "Hvor sterkt en person opplever at troen betyr noe i hverdagen"],
      explanation: "Tilhørighet er en relasjon til et fellesskap: formelt medlemskap og identifikasjon med en tradisjon. Deltakelse og bønn hører til praksis, mens overbevisninger hører til tro. Opplevd betydning er en variant av trosdimensjonen og ikke et mål på medlemskap.",
    },
    {
      question: "Hva måler dimensjonen praksis?",
      options: ["Handlinger som bønn, deltakelse og religiøs markering av høytider", "Formelt medlemskap i et trossamfunn og betaling av medlemsavgift", "Overbevisninger om Gud, om en åndelig dimensjon og om et liv etter døden", "Oppslutning om religiøse verdier i spørsmål om familie og samliv"],
      explanation: "Praksis er det den enkelte gjør: ber, deltar, markerer høytider og livsritualer religiøst. Medlemskap er tilhørighet, og overbevisninger er tro. Verdioppslutning er heller ikke praksis, siden dimensjonen gjelder handlinger og ikke holdninger.",
    },
    {
      question: "Hva er kjernepåstanden i at de tre B-ene kan bevege seg i ulik retning?",
      options: ["At et fall på ett av målene ikke innebærer et fall på de to andre", "At de tre målene alltid endrer seg i samme retning, men i ulikt tempo", "At tro er det eneste av de tre målene som endrer seg over tid", "At de tre målene ikke kan sammenliknes fordi de bruker ulike data"],
      explanation: "Poenget er at dimensjonene måler ulike ting og derfor kan gå hver sin vei samtidig — for eksempel tilhørighet uten tro. Påstanden er ikke at de endrer seg i samme retning i ulikt tempo, og heller ikke at bare troen endrer seg. At målene bruker ulike data hindrer ikke sammenlikning, men er nettopp grunnen til at de holdes fra hverandre.",
    },
    {
      question: "Hva kjennetegner nominell tilhørighet?",
      options: ["Medlemskap som består uten at det følges av tro eller deltakelse", "Deltakelse i religiøse samlinger uten formelt medlemskap noe sted", "Tro på en åndelig dimensjon uten tilknytning til en bestemt tradisjon", "Medlemskap i flere trossamfunn samtidig uten aktiv tilknytning til noe av dem"],
      explanation: "Nominell tilhørighet er medlemskap som står på papiret og i selvforståelsen uten å følges av tro eller praksis. Deltakelse uten medlemskap og tro uten tilknytning er andre kombinasjoner av de tre B-ene. Begrepet forklarer hvorfor tilhørigheten faller langsommere enn praksisen.",
    },
    {
      question: "Hva er forskjellen på sekularisering på individnivå og på samfunnsnivå?",
      options: ["Den første gjelder hva enkeltmennesker tror og gjør, den andre gjelder institusjonene", "Den første gjelder institusjonene, den andre gjelder hva enkeltmennesker tror og gjør", "Den første gjelder majoritetsbefolkningen, den andre gjelder religiøse minoriteter", "Den første gjelder tro og tilhørighet, den andre gjelder religiøs praksis og ritualer"],
      explanation: "På individnivå er enheten personen: hvor mange som tror, ber og deltar. På samfunnsnivå er enheten institusjonen: i hvilken grad skole, rett og politikk styres av religiøse normer. Skillet går altså mellom personer og institusjoner, ikke mellom befolkningsgrupper eller mellom ulike av de tre B-ene.",
    },
    {
      question: "Hva menes med differensiering i religionssosiologien?",
      options: ["At samfunnsområder skilles ut som egne felt med egne regler og egen myndighet", "At befolkningen fordeler seg på stadig flere trossamfunn og religiøse tradisjoner", "At religiøs tro blir mer personlig og mindre knyttet til felles rammer", "At religiøse grupper får ulik status og ulike muligheter i samfunnet"],
      explanation: "Differensiering er mekanismen bak sekulariseringen på samfunnsnivå: utdanning, rettspleie og medisin får egne regler og egen myndighet. Økende antall trossamfunn er religiøst mangfold, og at troen blir personlig er privatisering. Ulik status mellom grupper er et spørsmål om posisjon og diskriminering.",
    },
    {
      question: "Hva menes med privatisering av religion?",
      options: ["At religionen flyttes fra det felles og offentlige til det personlige", "At religiøse organisasjoner overtar oppgaver som staten tidligere hadde", "At religiøse spørsmål får mindre plass i mediene og i offentlig debatt", "At antallet trossamfunn øker mens medlemstallet i hvert av dem faller"],
      explanation: "Privatisering betyr at troen skifter plass — den blir noe den enkelte velger og holder for seg selv — og ikke at den forsvinner. Det er ikke et utsagn om hvem som driver velferdstjenester, og heller ikke om mediedekning, som gjelder synlighet. Flere trossamfunn med færre medlemmer i hvert er en beskrivelse av mangfold.",
    },
    {
      question: "Hva er sekulariseringsparadokset slik boka bruker det?",
      options: ["At religiøsiteten svekkes på individnivå mens samfunnet blir mer religiøst komplekst", "At religiøsiteten øker på individnivå mens institusjonene blir stadig mer verdslige", "At troen holder seg stabil mens både tilhørighet og praksis faller kraftig", "At religion mister myndighet i institusjonene mens trossamfunnene vokser i medlemstall"],
      explanation: "Paradokset er at tro og praksis faller hos den enkelte samtidig som samfunnet får flere trossamfunn, større mangfold og mer religiøs synlighet. Det er ikke individuell religiøsitet som øker, og troen er ikke den stabile dimensjonen. Poenget gjelder samfunnets sammensetning og synlighet, ikke medlemsvekst i etablerte trossamfunn.",
    },
    {
      question: "Hva er den vanligste årsaken til at det religiøse mangfoldet i Norge har økt?",
      options: ["Innvandring, som har gjort befolkningen religiøst mer sammensatt", "Konvertering, ved at mange skifter tradisjon i løpet av livet", "Høyere fødselstall i religiøse trossamfunn enn i befolkningen ellers", "At majoritetskirken har delt seg opp i flere selvstendige trossamfunn"],
      explanation: "Økningen i antall trossamfunn og i religiøs bredde henger i stor grad sammen med innvandring. Konvertering forekommer, men forklarer ikke hovedmønsteret, og oppsplitting av majoritetskirken er ikke det som har drevet mangfoldet. Poenget er at mangfoldet gjelder sammensetningen i befolkningen.",
    },
    {
      question: "Hva hevdet den klassiske sekulariseringstesen?",
      options: ["At religionens samfunnsmessige betydning ville avta med moderniseringen", "At religionen ville bli mer synlig etter hvert som samfunn ble mer mangfoldige", "At religiøs tro ville bestå mens tilhørighet og praksis ville falle bort", "At religionen ville flytte seg fra institusjonene og over i familielivet"],
      explanation: "Tesen var en generell forventning om at modernisering — vitenskap, utdanning, byvekst, differensiering — ville svekke religionens samfunnsmessige betydning. Den forutsa ikke økt synlighet, og den var ikke en påstand om at bare tro ville bestå. At religionen flytter seg inn i familielivet er nærmere en beskrivelse av privatisering.",
    },
    {
      question: "Hva menes med desekularisering?",
      options: ["At religionens betydning ikke avtok slik den klassiske tesen forutsa", "At sekulariseringen i Vest-Europa er reversert de siste tiårene", "At religiøse institusjoner har fått tilbake myndighet over skole og rettsvesen", "At religiøs praksis øker mens tilhørighet og tro fortsetter å falle"],
      explanation: "Desekularisering er betegnelsen på at religionen ikke forsvant slik den generelle tesen ventet, og at religiøse bevegelser i store deler av verden er blitt mer framtredende. Vendingen gjelder tesen som teori om moderne samfunn, ikke en reversering av de vesteuropeiske eller norske individmålene. Den handler heller ikke om at institusjonell myndighet er gjenvunnet.",
    },
    {
      question: "Hva er den presise forskjellen mellom Bergers tese og Furseths begrep?",
      options: ["Tesen beskriver én prosess med én retning, begrepet flere prosesser med ulike retninger", "Tesen beskriver flere prosesser samtidig, begrepet samler dem til én utvikling", "Tesen gjelder Norge, mens begrepet gjelder moderne samfunn generelt", "Tesen bygger på spørreundersøkelser, mens begrepet bygger på institusjonell analyse"],
      explanation: "Forskjellen er hvor mange retninger religion kan bevege seg i samtidig: den klassiske tesen tillater én, mens religiøs kompleksitet tillater flere. Det er tesen som er den generelle teorien om moderne samfunn, ikke begrepet. Begge deler bygger dessuten på flere typer data, så skillet ligger ikke i metoden.",
    },
    {
      question: "Hvilket design bruker Larsen og Di Stasio for å måle religiøs markør i arbeidsmarkedet?",
      options: ["Korrespondansetest der markøren varieres og etnisk bakgrunn holdes konstant", "Spørreundersøkelse blant arbeidsgivere om holdninger til religiøse søkere", "Registerdata om sysselsetting blant medlemmer av ulike trossamfunn", "Intervjuer med søkere som har opplevd å bli avvist i ansettelsesprosesser"],
      explanation: "Designet er et felteksperiment der ellers like søknader sendes til ekte stillinger, mens en religiøs markør varieres og etnisiteten holdes fast. Spørreundersøkelser om holdninger måler noe annet enn faktisk atferd, og registerdata gir samvariasjon uten kontroll. Intervjuer med avviste søkere kan ikke isolere effekten av markøren.",
    },
    {
      question: "Hva fant Larsen og Di Stasio om religiøs markør i søknader?",
      options: ["Markøren har selvstendig effekt på innkalling, størst utslag for muslimsk markør", "Markøren har ingen effekt når etnisk bakgrunn først er holdt konstant", "Markøren virker bare i stillinger med utstrakt kundekontakt og publikumsarbeid", "Markøren har lik effekt for alle religiøse tradisjoner som ble testet"],
      explanation: "Funnet er at en religiøs markør påvirker innkallingsraten i tillegg til etnisk bakgrunn, og at søkere med muslimsk markør møter systematisk lavere innkallingsrate enn ellers like søkere med andre religiøse markører. Effekten forsvinner altså ikke når etnisiteten holdes fast, og den er ikke lik for alle markører. Hvilke stillingstyper som driver utslaget, er ikke det designet avgjør.",
    },
    {
      question: "Hvorfor er skillet mellom religion og etnisitet som diskrimineringsgrunnlag viktig?",
      options: ["Fordi minoritetsbakgrunn er for grovt: sorteringen skjer også mellom minoriteter", "Fordi religiøs diskriminering er forbudt mens etnisk diskriminering er lovlig", "Fordi etnisk bakgrunn er en objektiv egenskap mens religion er et personlig valg", "Fordi de to grunnlagene aldri opptrer sammen i det samme arbeidsmarkedet"],
      explanation: "Skillet gir presisjon: det er mulig å si hvilken markør som virker, i stedet for å si at minoriteter generelt forskjellsbehandles, og sorteringen følger også linjer mellom minoritetsgrupper. Poenget er analytisk og ikke juridisk. De to grunnlagene opptrer dessuten ofte sammen i praksis, og det er nettopp derfor et design som skiller dem er verdifullt.",
    },
    {
      question: "Hva viser korrespondansetesten om religiøs markør IKKE?",
      options: ["Hvorfor markøren virker, altså hvilket motiv som ligger bak beslutningen", "At markøren har en effekt på om søkeren blir innkalt til intervju", "At effekten varierer mellom ulike religiøse markører i samme arbeidsmarked", "At søknadene var like på utdanning, erfaring og andre målbare kjennetegn"],
      explanation: "Designet gir kausalt belegg for at markøren virker ved første ansettelsessteg, men det kan ikke skille mellom en antakelse om gruppegjennomsnitt, en motvilje og en feilaktig generalisering. At markøren har effekt, at effekten varierer mellom markører, og at søknadene var like ved konstruksjon, er derimot nettopp det designet viser. Metodegrensen gjelder motivet.",
    },
    {
      question: "Hva er kjernen i feilen boka kaller begrepsforflatning i dette temaet?",
      options: ["Å skrive om sekularisering uten å presisere dimensjon og nivå", "Å nevne Furseth uten å oppgi hvilket år analysen ble publisert", "Å bruke religiøs kompleksitet i stedet for sekularisering i redegjørelsen", "Å skrive om religiøst mangfold uten å nevne innvandring som årsak"],
      explanation: "Begrepsforflatning i dette temaet er å behandle sekularisering som én størrelse i stedet for å si hvilken av de tre B-ene og hvilket nivå som menes. Manglende årstall er ikke det feilen handler om, og å bruke begrepet religiøs kompleksitet er nettopp det motsatte av forflatning. Innvandring som årsak er et poeng, men ikke selve feilen.",
    },
    {
      question: "Hva er kjernen i feilen boka kaller navn uten funn?",
      options: ["At forskeren nevnes, men at resultatet aldri brukes til å avgjøre noe", "At funnet gjengis uten at forskeren bak det blir navngitt i teksten", "At forskeren siteres ordrett i stedet for å bli parafrasert med egne ord", "At flere forskere nevnes i samme avsnitt uten at de skilles fra hverandre"],
      explanation: "Feilen er at navnet står der som en referanse mens resultatet aldri arbeider i argumentet — for eksempel å nevne Furseth uten å si hvilken vei de tre B-ene beveger seg. Å gjengi et funn uten navn er en annen svakhet, og ordrett sitering er et formspørsmål. Testen er om argumentet ville endret seg dersom navnet ble strøket.",
    },
    {
      question: "Hva vil det si å miste dobbeltheten i en drøfting av religiøs endring?",
      options: ["Å skrive enten en ren nedgangsfortelling eller en ren mangfoldsfortelling", "Å nevne begge sider innledningsvis og deretter velge den best belagte", "Å konkludere med at utviklingen er sammensatt uten å vekte sidene", "Å bruke to ulike datakilder som gir motstridende bilder av samme utvikling"],
      explanation: "Feilen er å velge én side av paradokset og skrive ensidig, når begge utviklingene er belagt og gjelder samtidig. Kravet er at begge sidene fortsatt står i nest siste avsnitt, ikke at man unnlater å konkludere — en begrunnet vekting er tvert imot ønsket. At to datakilder gir ulike bilder er selve grunnlaget for paradokset, ikke en feil.",
    },
    {
      question: "Hvorfor faller religiøs praksis typisk raskere enn tilhørighet i Norge?",
      options: ["Fordi det er lettere å slutte å delta enn å melde seg ut av et trossamfunn", "Fordi deltakelse måles oftere og derfor fanger opp endringer tidligere", "Fordi trossamfunnene har blitt strengere med hvem de regner som medlemmer", "Fordi praksis er den dimensjonen som er sterkest knyttet til hva folk tror"],
      explanation: "Medlemskapet i majoritetskirken er i stor grad nominelt og videreført gjennom familie og tradisjon, mens deltakelse krever en aktiv handling hver gang. Forskjellen skyldes altså terskelen for å endre atferd, ikke måleintervallet eller medlemsreglene. Praksis kan dessuten være sosial like mye som trosbasert, og henger derfor ikke tettest sammen med tro.",
    },
    {
      question: "Hvorfor er målene på tro mer usikre enn retningen de peker i?",
      options: ["Fordi svarene avhenger sterkt av hvordan spørsmålet om tro er formulert", "Fordi tro er den dimensjonen som endrer seg langsomst over tid", "Fordi færre svarer på spørsmål om tro enn på spørsmål om deltakelse", "Fordi troen varierer mer mellom landsdeler enn mellom aldersgrupper"],
      explanation: "Spørsmål om tro på Gud og spørsmål om tro på noe større gir svært ulike svar fra de samme menneskene, og det gjør nivået mer usikkert enn den langsiktige retningen. Usikkerheten skyldes altså operasjonaliseringen, ikke endringstakten eller geografisk variasjon. Svarprosent er heller ikke hovedproblemet her.",
    },
    {
      question: "Hva er poenget med skillet mellom majoritetsreligion og minoritetsreligion?",
      options: ["At posisjonen i samfunnets rutiner betyr mer enn antallet utøvere", "At majoritetsreligionen alltid har flest aktivt praktiserende medlemmer", "At minoritetsreligioner er mindre påvirket av sekulariseringen enn majoriteten", "At skillet følger av lovverket og av hvilke trossamfunn som får statsstøtte"],
      explanation: "Skillet handler om hvilken tradisjon som har formet kalenderen, helligdagene og selvfølgelighetene, ikke om ren opptelling — en minoritetsreligion kan ha mange utøvere og likevel ikke være innskrevet i rutinene. Majoritetstradisjonen kan tvert imot ha lav aktiv deltakelse. Skillet er sosiologisk og følger ikke av støtteordninger.",
    },
    {
      question: "Hva er den empiriske broen mellom anerkjennelse og fordeling i dette temaet?",
      options: ["At en vurdering av hvem noen er, gir målbar virkning på tilgangen til arbeid", "At religiøse minoriteter organiserer seg for å kreve økonomisk omfordeling", "At religiøs tilhørighet henger sammen med utdanningsnivå og inntekt", "At anerkjennelse og fordeling er to navn på den samme underliggende prosessen"],
      explanation: "Broen er at en statusmarkør som religiøs tilhørighet gir en materiell konsekvens: innkallingsraten endres når markøren endres. Det er ikke et poeng om mobilisering, og ikke bare en samvariasjon mellom tilhørighet og sosial posisjon. De to dimensjonene er dessuten analytisk atskilte, og det er nettopp derfor koblingen mellom dem er interessant.",
    },
    {
      question: "Hva bør en langsvarsoppgave om religiøs kompleksitet inneholde for å nå C-terskelen?",
      options: ["Både et redegjørelsesledd og et drøftingsledd, begge greit besvart", "Et grundig redegjørelsesledd som dekker alle tre dimensjonene i detalj", "Et drøftingsledd som lander klart på én av sidene i paradokset", "En gjennomgang av forskningen på feltet med alle sentrale navn nevnt"],
      explanation: "C-terskelen krever at begge ledd er til stede og greit besvart; en god drøfting kan kompensere en svakere redegjørelse og omvendt, men ingen av delene kan mangle. Et grundig redegjørelsesledd alene er derfor ikke nok, og en klar landing er et pluss og ikke et minstekrav. En navneoppramsing uten funn er dessuten den feilen boka kaller navn uten funn.",
    },
  ],
  'sos1004-6-2': [
    {
      question: "Hva menes med avvik i sosiologisk forstand?",
      options: ["Handlinger eller kjennetegn som i en gitt sammenheng defineres som brudd og møtes med reaksjon", "Handlinger som bryter med det gjeldende lovverket, og som håndheves av politi og domstoler", "Egenskaper ved en person som gjør at hun skiller seg tydelig ut fra flertallet i befolkningen", "Atferd som undersøkelser har vist at et klart flertall i befolkningen misliker sterkt"],
      explanation: "Avvik er relativt og sosialt definert: det er reaksjonen og definisjonen som gjør en handling avvikende, ikke handlingen i seg selv. Lovbrudd er bare den delen av avviket som er regulert i lov, og det aller meste av avvik er aldri i nærheten av en paragraf. Å behandle avvik som en egenskap ved personen eller som noe flertallet misliker, gjør begrepet til en beskrivelse i stedet for en analyse.",
    },
    {
      question: "Hva skiller et normbrudd fra avvik?",
      options: ["Normbruddet blir til avvik først når det legges merke til, defineres og reageres på", "Normbruddet gjelder uskrevne regler, mens avvik alltid gjelder regler som er nedfelt i lov", "Normbruddet skjer på mikronivå, mens avvik er en betegnelse forbeholdt makronivået", "Normbruddet er en enkelthendelse, mens avvik krever at handlingen gjentas over tid"],
      explanation: "Et brudd ingen legger merke til, eller som alle ser og ingen bryr seg om, produserer ikke avvik. Det er reaksjonen som gjør bruddet til avvik, og det er derfor to personer kan gjøre nøyaktig det samme og bare den ene bli avviker. Skillet handler verken om lovfesting, om nivå i samfunnet eller om hvor mange ganger handlingen gjentas.",
    },
    {
      question: "Hva er forskjellen på formell og uformell sosial kontroll?",
      options: ["Den formelle utøves av institusjoner med mandat til å reagere, den uformelle av menneskene rundt", "Den formelle gjelder alvorlige handlinger, mens den uformelle gjelder de mindre alvorlige bruddene", "Den formelle virker på forhånd gjennom frykt, mens den uformelle virker etter at bruddet er skjedd", "Den formelle er den kontrollen vi utøver på oss selv, den uformelle den andre utøver på oss"],
      explanation: "Skillet går på om det finnes et apparat med mandat til å reagere: politi, domstol, arbeidsgiver og forvaltning på den ene siden, blikk, sladder og utestengning på den andre. Alvorlighetsgrad avgjør ikke hvilken form som virker, og det er nettopp den uformelle kontrollen som i hovedsak virker på forhånd, gjennom forventningen om en reaksjon som ofte aldri kommer.",
    },
    {
      question: "Hva innebærer definisjonsmakt over avvik?",
      options: ["Å få sin egen forståelse av hva som er normalt og avvikende lagt til grunn av institusjoner", "Å ha rett til å ilegge formelle sanksjoner mot personer som har brutt gjeldende regler", "Å kunne bestemme hvilke handlinger som skal være straffbare gjennom vedtak i lovgivende organ", "Å ha en sterk oppfatning av hva som er akseptabelt, og gi tydelig uttrykk for den til andre"],
      explanation: "Definisjonsmakt foreligger når én parts forståelse blir lagt til grunn av skoler, arbeidsgivere, helsevesen og lovverk, altså når den får institusjonelle følger. Vanlig uenighet om hva som er greit gir ingen definisjonsmakt. Sanksjonsmyndighet og lovgivningsmyndighet er former for makt, men begrepet er videre og omfatter blant annet yrkesgrupper som kategoriserer uten å straffe.",
    },
    {
      question: "Hvordan definerer Goffman stigma?",
      options: ["Som et dypt diskrediterende kjennetegn som reduserer bæreren fra hel person til besmittet", "Som en samfunnsmessig prosess der merking og nedvurdering får følger for folks livssjanser", "Som en negativ holdning til en gruppe, delt av mange og overført gjennom oppdragelsen", "Som en formell kategori tildelt av institusjoner med myndighet til å fatte vedtak"],
      explanation: "Goffmans definisjon handler om et kjennetegn som i en gitt sammenheng er dypt diskrediterende, og som får bæreren nedvurdert fra en hel og alminnelig person til en besmittet en. Beskrivelsen av stigma som en samfunnsmessig prosess med følger for livssjanser er Link og Phelans videreutvikling, ikke Goffmans. Holdninger og formelle kategorier kan inngå i stigmatisering, men er ikke definisjonen.",
    },
    {
      question: "Hvorfor sier boka at stigma er en relasjon og ikke en egenskap?",
      options: ["Fordi kjennetegnet blir stigma i forholdet mellom stedets forventninger og den som ikke svarer til dem", "Fordi stigmaet oppstår i nære relasjoner som familie, venner og kolleger, og ikke blant fremmede", "Fordi det alltid er minst to parter til stede i den situasjonen der kjennetegnet blir kjent", "Fordi stigmaet forutsetter at den som bærer kjennetegnet selv opplever det som noe negativt"],
      explanation: "Ingenting er stigmatiserende i seg selv: det samme kjennetegnet kan være uten betydning ett sted og altoverskyggende et annet, avhengig av hvilke forventninger som gjelder. Relasjonen det er tale om, er altså forholdet mellom forventninger og person, ikke et nært forhold mellom to mennesker. Stigmaet virker dessuten uavhengig av om bæreren selv deler nedvurderingen.",
    },
    {
      question: "Hvilke tre stigmatyper skiller Goffman mellom?",
      options: ["Kroppslige stigma, karaktermessige stigma og gruppebaserte stigma", "Synlige stigma, usynlige stigma og stigma som lett kan skjules", "Individuelle stigma, institusjonelle stigma og strukturelle stigma", "Medfødte stigma, ervervede stigma og tilskrevne gruppestigma"],
      explanation: "Typologien består av kjennetegn ved kroppen, kjennetegn som leses som en brist ved personens karakter, og kjennetegn som følger av gruppetilhørighet og overføres mellom generasjoner. Inndelingen etter synlighet er noe annet hos Goffman og går på skillet mellom den diskrediterte og den diskrediterbare. Individ-, institusjons- og strukturnivå hører til den strukturelle stigmalitteraturen, ikke til typologien.",
    },
    {
      question: "Hva kjennetegner karaktermessige stigma hos Goffman?",
      options: ["Kjennetegnet leses som en brist ved personen selv og bærer en moralsk bebreidelse", "Kjennetegnet er alltid usynlig for omgivelsene og kan derfor holdes skjult uten kostnad", "Kjennetegnet følger av tilhørighet til en gruppe og overføres mellom generasjoner", "Kjennetegnet er knyttet til en diagnose som er stilt av helsepersonell med myndighet"],
      explanation: "Rusproblemer, psykiske lidelser, soning og langvarig arbeidsledighet leses ofte som tegn på svak vilje eller upålitelighet, og det er den moralske bebreidelsen som gir typen sin særlige tyngde. Overføring mellom generasjoner hører til de gruppebaserte stigmaene. Karaktermessige kjennetegn kan riktignok ofte skjules, men skjulingen er kostbar og typen er ikke definert ved usynlighet.",
    },
    {
      question: "Hva kjennetegner gruppebaserte stigma hos Goffman?",
      options: ["Kjennetegnet følger av tilhørighet til en gruppe og overføres mellom generasjoner", "Kjennetegnet oppstår hos den enkelte gjennom handlinger hun selv har valgt å utføre", "Kjennetegnet er knyttet til kroppen og er derfor synlig for alle som møter personen", "Kjennetegnet gjelder bare grupper som utgjør et mindretall i befolkningen der de bor"],
      explanation: "Denne typen er ikke noe personen har gjort eller pådratt seg: den følger med tilhørigheten til for eksempel etnisitet, nasjonal bakgrunn eller religion, og rammer familier og slektslinjer samtidig. Det skiller den både fra kjennetegn som tilskrives personens egne valg og fra kroppslige kjennetegn. Størrelsen på gruppen inngår ikke i definisjonen.",
    },
    {
      question: "Hva er forskjellen på den diskrediterte og den diskrediterbare hos Goffman?",
      options: ["Om de andre i situasjonen allerede vet om kjennetegnet, eller om det ennå ikke er kjent", "Om kjennetegnet er kroppslig og dermed synlig, eller om det er karaktermessig og skjult", "Om personen selv har akseptert kjennetegnet, eller om hun fortsatt kjemper imot det", "Om kjennetegnet er formelt registrert av en institusjon, eller bare kjent i nærmiljøet"],
      explanation: "Skillet går på hva de andre i situasjonen vet, og gjelder derfor situasjoner og ikke persontyper: den samme personen kan være diskreditert på jobben og diskrediterbar i et nytt nabolag samme dag. Det er ikke synligheten i seg selv som avgjør, og heller ikke om noe er registrert. Den diskrediterte håndterer spenningen i møtet, den diskrediterbare driver informasjonskontroll.",
    },
    {
      question: "Hva innebærer skjuling, på engelsk «passing», som stigmahåndtering?",
      options: ["At det diskrediterende kjennetegnet holdes skjult, slik at man blir møtt som en uten det", "At kjennetegnet er kjent, men at man forsøker å la det ta minst mulig plass i møtet", "At man søker sammen med andre i samme situasjon for å slippe å forklare seg", "At man kommer andre i forkjøpet ved å nevne kjennetegnet tidlig i en samtale"],
      explanation: "Skjuling er informasjonskontroll: kjennetegnet holdes hemmelig, og personen blir møtt som en uten det. Å dempe et kjennetegn som allerede er kjent er en beslektet, men annen strategi, siden det da ikke er hemmelig. Å søke fellesskap eller å komme andre i forkjøpet er også stigmahåndtering, men ikke skjuling. Skjuling er en aktiv strategi med reelle kostnader, ikke passivitet.",
    },
    {
      question: "Hva er en stigmamarkør?",
      options: ["Det tegnet som gjør at andre plasserer noen i en stigmatisert kategori", "Den negative egenskapen som knyttes til kategorien når merkelappen først er satt", "Den formelle registreringen som gjør et kjennetegn kjent for offentlige instanser", "Den reaksjonen omgivelsene gir når kjennetegnet blir kjent i en gitt situasjon"],
      explanation: "Markøren er inngangen til at kategorien aktiveres — et navn, en aksent, et hjelpemiddel, et hull i en søknad — og den er ikke stigmaet selv. Innholdet som knyttes til kategorien er stereotypien, et eget ledd i stigmaprosessen. Markøren kan dessuten være helt feilaktig: folk stigmatiseres på grunnlag av markører som peker mot noe de ikke har.",
    },
    {
      question: "Hvilke fem komponenter inngår i Link og Phelans stigmabegrep?",
      options: ["Merking, stereotypi, atskillelse, statustap og diskriminering", "Merking, sanksjon, atskillelse, statustap og utstøting fra fellesskapet", "Kategorisering, fordom, avstand, nedvurdering og formell registrering", "Skjuling, stereotypi, atskillelse, diskriminering og sosial kontroll"],
      explanation: "Kjeden går fra at en forskjell plukkes ut og navngis, via at merkelappen kobles til negative egenskaper og at de merkede plasseres som «de andre», til at de rangeres lavere og at det får følger i form av dårligere behandling. Sanksjon, utstøting og formell registrering er beslektede fenomener, men inngår ikke i oppstillingen. Skjuling hører hjemme hos Goffman som håndteringsstrategi.",
    },
    {
      question: "Hvilken plass har makt i Link og Phelans stigmabegrep?",
      options: ["Makt er en forutsetning for at de fem komponentene skal kunne virke", "Makt er den sjette og siste komponenten i prosessen, og den kommer til slutt", "Makt er en av flere mulige forklaringer på hvorfor stigmatisering oppstår", "Makt er det som gjør at den stigmatiserte klarer å motsette seg merkelappen"],
      explanation: "Uten tilgang til sosial, økonomisk og politisk makt fester merkelappen seg ikke og får ingen følger, og da er det ikke stigmatisering i sosiologisk forstand. Makt er derfor en betingelse for hele kjeden og ikke et element i den. Å plassere makt som et sjette punkt er en vanlig og lett gjenkjennelig unøyaktighet i besvarelser om dette stoffet.",
    },
    {
      question: "Hvilken av disse påstandene tilskriver Goffman noe som ikke er hans?",
      options: ["At Goffman viser at stigmatisering forutsetter makt, og ikke finnes uten den", "At Goffman beskriver stigma som et dypt diskrediterende kjennetegn i samhandling", "At Goffman skiller mellom den diskrediterte og den diskrediterbare situasjonen", "At Goffman deler stigma i kroppslige, karaktermessige og gruppebaserte typer"],
      explanation: "Makt-premisset er Link og Phelans tilføyelse: Goffman analyserer stigma i interaksjonen og gjør ikke maktforholdet til en forutsetning i definisjonen. Fellen er virksom nettopp fordi påstanden i seg selv er faglig riktig — det er avsenderen som er feil. Definisjonen, skillet mellom diskreditert og diskrediterbar og de tre typene er derimot Goffmans egne.",
    },
    {
      question: "Hva er merking i Link og Phelans forstand?",
      options: ["At én av mange mulige forskjeller plukkes ut, navngis og gjøres sosialt betydningsfull", "At personen får en negativ egenskap tilskrevet seg på grunnlag av kategorien hun tilhører", "At personen registreres formelt i et system som gir grunnlag for vedtak og tiltak", "At personen selv tar til seg kategorien og begynner å forstå seg selv gjennom den"],
      explanation: "Mennesker er forskjellige på uendelig mange måter, og de fleste forskjellene er sosialt likegyldige — det er utvelgelsen som er det sosiologiske spørsmålet. Å knytte negative egenskaper til merkelappen er neste ledd i kjeden, altså stereotypien. Formell registrering kan være en måte å merke på, men merking er et videre begrep, og det er ikke det samme som at personen tar kategorien inn over seg.",
    },
    {
      question: "Hva menes med stereotypi som ledd i stigmaprosessen?",
      options: ["At merkelappen kobles til negative egenskaper i en kulturelt delt forestilling", "At en enkeltperson har en negativ holdning til en gruppe hun ikke tilhører selv", "At de merkede plasseres som en gruppe av andre, tydelig skilt fra fellesskapet", "At merkelappen brukes som grunnlag for å nekte noen en jobb eller en tjeneste"],
      explanation: "Stereotypien er en kulturelt delt kobling som ligger i språket og i institusjonene, og som virker også hos folk som ikke opplever seg som fordomsfulle. Det er nettopp derfor stigmatisering kan fortsette i et samfunn der holdningsundersøkelser viser at folk mener det riktige. Atskillelse og diskriminering er egne ledd i kjeden og kommer etter stereotypien.",
    },
    {
      question: "Hva består atskillelse i, som ledd i Link og Phelans kjede?",
      options: ["At de merkede plasseres som «de andre», grunnleggende forskjellige fra «oss»", "At de merkede får dårligere tilgang til arbeid, bolig og helsetjenester enn andre", "At de merkede rangeres lavere, slik at deres versjon blir mindre trodd enn andres", "At de merkede trekker seg tilbake fra sammenhenger der de risikerer å bli avslørt"],
      explanation: "Atskillelsen viser seg i språket, ved at kategorien brukes om personen i stedet for som en opplysning om henne, og i praksis, ved egne rom og egne ordninger. Det avgjørende er at forskjellen leses som grunnleggende. Redusert tilgang til goder er diskrimineringsleddet, lavere troverdighet er statustapet, og tilbaketrekning er en håndteringsstrategi hos den stigmatiserte selv.",
    },
    {
      question: "Hva skiller statustap fra diskriminering i Link og Phelans kjede?",
      options: ["Statustapet er en rangering i den sosiale ordenen, diskrimineringen er handlinger og utfall", "Statustapet gjelder personens eget selvbilde, mens diskrimineringen gjelder andres holdninger", "Statustapet skjer i uformelle sammenhenger, mens diskrimineringen krever et formelt vedtak", "Statustapet rammer hele gruppen, mens diskrimineringen bare rammer enkeltpersoner"],
      explanation: "Statustapet betyr at de merkede plasseres lavere i rangordenen, slik at de veier mindre og blir mindre trodd, mens diskrimineringen er den dårligere behandlingen og de reduserte mulighetene som følger. Statustap er en sosial plassering og ikke en følelse, selv om det påvirker selvbildet. Diskriminering kan dessuten virke gjennom rutiner uten noe formelt vedtak og uten en enkelt avsender.",
    },
    {
      question: "Hva er situasjonen når merking, stereotypi og atskillelse finnes, men gruppen som merker mangler makt?",
      options: ["Da er det motvilje, men ikke stigmatisering i Link og Phelans forstand", "Da er det stigmatisering, men i en svakere form enn når makten er til stede", "Da er det diskriminering, siden handlingene er de samme uansett maktforhold", "Da er det avvik, siden merkelappen fortsatt definerer noen som utenfor det normale"],
      explanation: "Uten makt fester merkelappen seg ikke, den legges ikke til grunn av institusjoner, og den reduserer ikke den andre gruppens muligheter. Prøven Link og Phelan bruker er nettopp denne: en maktesløs gruppe kan se ned på en mektig uten at vi kaller det stigmatisering. Det er heller ikke diskriminering, siden det ikke gir dårligere behandling med reelle følger.",
    },
    {
      question: "Hva viser Pedersens forskning om hvordan rusbruk foregår blant norsk ungdom?",
      options: ["At bruk som utenfra ser ukontrollert ut, innenfra er tett regulert av normer og ritualer", "At bruken i hovedsak styres av den formelle kontrollen fra politi og hjelpeapparat", "At bruken er blitt akseptert i de fleste miljøer, slik at stigmaet i praksis er borte", "At bruken er tilfeldig fordelt i ungdomsbefolkningen og følger få sosiale mønstre"],
      explanation: "Bruken følger uskrevne regler for anledning, mengde, selskap og oppførsel, og miljøet reagerer mot dem som bryter reglene — det er uformell sosial kontroll der den formelle ikke når inn. Materialet viser altså ikke at stigmaet er borte, og heller ikke at bruken mangler sosiale mønstre. Poenget er at rusbruk er en sosialt organisert praksis, ikke fravær av styring.",
    },
    {
      question: "Hva menes med at normaliseringen av rusbruk er ujevn?",
      options: ["At den samme bruken kan møtes udramatisk i ett miljø og sterkt stigmatiserende i et annet", "At normaliseringen har gått raskere for enkelte rusmidler enn for andre over tid", "At bruken har spredt seg til flere aldersgrupper enn den omfattet tidligere", "At normaliseringen gjelder holdninger, mens lovverket har utviklet seg i motsatt retning"],
      explanation: "Prosessen er reell og ujevnt fordelt samtidig: bruk kan være avdramatisert blant venner og alvorlig overfor arbeidsgivere og myndigheter. Normalisering betyr altså ikke aksept overalt. Endringer i lovverk er avkriminalisering, som er noe annet enn normalisering, og de to kan bevege seg hver sin vei.",
    },
    {
      question: "Hva er forskjellen på funksjonsnedsettelse og funksjonshemming?",
      options: ["Nedsettelsen gjelder kropp eller sanser, hemmingen oppstår i møtet med omgivelsenes innretning", "Nedsettelsen er varig og medfødt, mens hemmingen er forbigående og kan behandles", "Nedsettelsen er den medisinske diagnosen, mens hemmingen er personens egen opplevelse", "Nedsettelsen gir rett til ytelser, mens hemmingen er en betegnelse brukt i dagligtalen"],
      explanation: "Samme kropp gir ulik grad av funksjonshemming i ulike omgivelser, fordi hemmingen oppstår når omgivelser og forventninger er innrettet slik at nedsettelsen får store følger for deltakelse. Skillet handler verken om varighet, om opplevelse eller om rettighetsstatus. Å bruke ordene om hverandre er den vanligste unøyaktigheten i temaet.",
    },
    {
      question: "Hvilke typer barrierer peker Grues arbeid om funksjonshemming på?",
      options: ["Fysiske omgivelser, organisatoriske ordninger og forventninger om hva personen kan", "Fysiske omgivelser, økonomiske kostnader og manglende medisinsk behandlingstilbud", "Juridiske hindringer, språklige hindringer og geografisk avstand til tjenestene", "Manglende hjelpemidler, manglende diagnose og manglende oppfølging fra helsevesenet"],
      explanation: "Barrierene er både bygninger og transport, arbeidstider og saksbehandlingsrutiner, og holdninger om hva den enkelte kan og vil. Forventningene er den delen som oftest undervurderes, fordi de virker uten at noen opplever å hindre noen. Kostnader, diagnose og behandlingstilbud kan ha betydning, men det er ikke dem den relasjonelle forståelsen peker på som mekanismen.",
    },
    {
      question: "Hvorfor er det et sosiologisk poeng at deltakelsesgapet for funksjonshemmede består ved sammenliknbart utdanningsnivå?",
      options: ["Fordi gapet da ikke kan forklares av kvalifikasjoner alene, og peker mot barrierer og forventninger", "Fordi det viser at utdanningsnivå ikke har noen betydning for hvem som kommer seg i arbeid", "Fordi det beviser at arbeidsgivere bevisst velger bort alle søkere med en funksjonsnedsettelse", "Fordi det viser at helsetilstanden må være den eneste gjenværende forklaringen på gapet"],
      explanation: "Når utdanningsnivået er sammenliknbart og gapet består, må forklaringen søkes i omgivelsenes innretning og i forventningene om hva den enkelte kan bidra med. Funnet viser ikke at utdanning er uten betydning, og det identifiserer ikke bevisste valg hos den enkelte arbeidsgiver. Hvor stor del av gapet som skyldes helsetilstand, er nettopp det analysen ikke kan tallfeste.",
    },
    {
      question: "Hva er det sterkeste argumentet for at stigma forutsetter makt?",
      options: ["At listen over hva som stigmatiseres endrer seg uten at kjennetegnene selv endrer seg", "At stigmatiserte personer opplever sterke reaksjoner fra omgivelsene i mange situasjoner", "At de fleste stigmatiserte kjennetegn er knyttet til grupper med lav inntekt og utdanning", "At stigmatisering får målbare følger for deltakelse i arbeid, bolig og helsetjenester"],
      explanation: "Bevegelsen i hva som stigmatiseres kan ikke forklares av at møter mellom mennesker er blitt hyggeligere — den forutsetter at definisjonsmakten har flyttet seg. At reaksjonene er sterke og at følgene er målbare, viser at stigma virker, men ikke at makt er en forutsetning. Sammenhengen med inntekt og utdanning er en observasjon som selv trenger en forklaring.",
    },
    {
      question: "Hvordan henger Goffmans og Link og Phelans analyser sammen?",
      options: ["Makten avgjør hvilke kjennetegn som blir markører, og møtet er der markøren aktiveres", "De er konkurrerende teorier om samme nivå, og forskningen har avgjort til fordel for den ene", "Goffman beskriver de alvorlige stigmaene, mens Link og Phelan beskriver de mildere formene", "Goffman gjelder for kroppslige kjennetegn, mens Link og Phelan gjelder for gruppetilhørighet"],
      explanation: "De to arbeider på ulike nivåer av samme fenomen: strukturen leverer råstoffet ved å avgjøre hvilke forskjeller som blir markører, og samhandlingen er der virkningen faktisk skjer. De er derfor ikke rivaliserende forklaringer som skal avgjøres til fordel for én, og skillet mellom dem går verken på hvor alvorlig stigmaet er eller på hvilken stigmatype det gjelder.",
    },
    {
      question: "Hvilke tre navn fra faghistorien står i SOS1004-pensum og kan brukes i et langsvar?",
      options: ["Goffman, Beck og Berger", "Goffman, Simmel og Bourdieu", "Beck, Berger og Tönnies", "Goffman, Berger og Foucault"],
      explanation: "Emnet behandler klassikerlaget som faghistorie og flervalgsstoff, med tre uttrykkelige unntak som står i pensum: stigma, risikosamfunnet og sekulariseringstesen. Det er derfor stigmastoffet trygt kan brukes i en langsvarsoppgave. De øvrige navnene hører hjemme i faghistorien og i flervalgsdelen, ikke som bærende stoff i et langsvar.",
    },
    {
      question: "Hva kan Link og Phelans begrepsanalyse ikke si noe om?",
      options: ["Hvor utbredt stigmatisering er, og hvilke kjennetegn som er mest utsatt i et samfunn", "Hvilke elementer som må være til stede for at vi skal kalle noe stigmatisering", "Hvorfor makt er nødvendig for at en merkelapp skal feste seg og få følger", "Hvordan merking og stereotypi henger sammen i en samlet stigmaprosess"],
      explanation: "En begrepsanalyse fastsetter hva vi skal kalle noe, ikke hvor mye av det som finnes eller hvordan det fordeler seg. Den gjør nettopp det de øvrige punktene beskriver: den navngir elementene, begrunner maktforutsetningen og viser hvordan leddene henger sammen. Å kjenne denne grensen er råstoff for det kritiske sluttgrepet i en drøfting.",
    },
  ],
  'sos1004-6-3': [
    {
      question: "Hva er anerkjennelse som politisk drivkraft hos Fukuyama?",
      options: ["Kravet om å bli sett og behandlet som en likeverdig deltaker av andre", "Kravet om en rettferdig andel av de materielle godene i samfunnet", "Kravet om at flertallet skal respektere mindretallets stemmerett", "Kravet om at staten skal være nøytral i spørsmål om kultur og religion"],
      explanation: "Anerkjennelse gjelder status: å bli regnet med som en fullverdig deltaker, og det er en selvstendig drivkraft ved siden av materielle interesser. Kravet om en andel av godene er derimot et fordelingskrav, som i prinsippet kan avgjøres med et kompromiss. Verken formelle rettigheter eller statlig nøytralitet fanger det som gjør anerkjennelse til noe eget.",
    },
    {
      question: "Hva skiller identitetspolitikk fra interessepolitikk?",
      options: ["Identitetspolitikk mobiliserer rundt hvem gruppen er, interessepolitikk rundt hva den vil ha", "Identitetspolitikk mobiliserer minoriteter, mens interessepolitikk mobiliserer flertallet i samfunnet", "Identitetspolitikk føres av bevegelser, mens interessepolitikk alltid føres av etablerte partier", "Identitetspolitikk er et moderne fenomen, mens interessepolitikk er en langt eldre politikkform"],
      explanation: "Skillet går på hva kravet handler om: status og identitet mot fordeling av goder. Å knytte de to til bestemte grupper er feil, siden begge former kan brukes av minoriteter og flertall. Skillet handler heller ikke om hvem som fremmer kravet eller om hvor gammel formen er.",
    },
    {
      question: "Hva er forskjellen på isotymi og megalotymi hos Fukuyama?",
      options: ["Isotymi er kravet om å bli anerkjent som likeverdig, megalotymi kravet om overlegenhet", "Isotymi er kravet om materiell likhet, megalotymi kravet om størst mulig innflytelse", "Isotymi gjelder enkeltmennesket alene, megalotymi gjelder gruppen som kollektiv aktør", "Isotymi er en følelse av stolthet ved fellesskapet, megalotymi en følelse av krenkelse"],
      explanation: "De to greske ordene betyr «lik verdighet» og «stor verdighet», altså krav om likeverd mot krav om overlegenhet. Begge gjelder status og ikke materiell fordeling, og begge kan gjelde både enkeltmennesker og grupper. De er drivkrefter, ikke navn på bestemte følelser.",
    },
    {
      question: "Hva viser Fukuyama til som de historiske røttene til identitetspolitikken?",
      options: ["1960-tallets sosiale bevegelser for borgerrettigheter, kvinner og seksuelle minoriteter", "Arbeiderbevegelsens kamp for tariffavtaler, kortere arbeidstid og alminnelig stemmerett for alle", "Nasjonalstatenes framvekst og nasjonsbyggingen i Europa gjennom hele 1800-tallet", "Etterkrigstidens oppbygging av universelle velferdsordninger i de vestlige industrilandene"],
      explanation: "Analysen peker på bevegelsene for like rettigheter i praksis, altså isotymi satt i politisk form. Arbeiderbevegelsen og velferdsstatsbyggingen mobiliserte først og fremst rundt fordeling, og nasjonsbyggingen er en eldre prosess med en annen logikk. Poenget er at formen fra 1960-tallet siden er tatt i bruk av grupper med helt andre saker.",
    },
    {
      question: "Hva menes med thymos i Fukuyamas analyse?",
      options: ["Den delen av mennesket som krever verdighet og reagerer når den blir oversett", "Den delen av mennesket som beregner nytte og velger det mest lønnsomme", "Den kollektive identiteten en gruppe bygger opp gjennom felles historie", "Den emosjonelle bindingen mellom mennesket og det politiske fellesskapet"],
      explanation: "Thymos er hentet fra gresk filosofi og betegner verdighetsdriften, som Fukuyama skiller fra både fornuft og begjær. Nyttekalkyle hører til begjærs- og interessesiden, ikke til thymos. Begrepet gjelder en drivkraft i mennesket, ikke gruppens historie eller båndet til fellesskapet.",
    },
    {
      question: "Hva skiller verdighet fra ære, slik begrepene brukes i dette kapitlet?",
      options: ["Verdighet tilkommer i utgangspunktet alle, mens ære var knyttet til posisjon i en rangorden", "Verdighet er en juridisk rettighet, mens ære er en uformell forventning i et bestemt miljø", "Verdighet er en moderne følelse, mens ære er en holdning man tillegger andre mennesker utenfra", "Verdighet knytter seg til gruppen man tilhører, mens ære knytter seg til det enkelte mennesket"],
      explanation: "Overgangen fra ære til verdighet gjør anerkjennelseskravet prinsipielt uendelig utvidbart, og dermed til en massepolitisk kraft. Verdighet er ikke primært en juridisk kategori, men en forventning om bekreftelse av et indre selv. Begge begrepene kan dessuten gjelde både enkeltmennesker og grupper.",
    },
    {
      question: "Hva er formallikhet?",
      options: ["Likhet i regler og rettigheter: at loven gjelder likt og at ingen formelt utestenges", "Likhet i utfall: at grupper faktisk kommer likt ut på inntekt, posisjoner og levealder", "Likhet i utgangspunkt: at bakgrunnen din ikke avgjør hvor langt du kan komme i livet", "Likhet i behandling: at alle møtes med den samme respekten i det daglige livet"],
      explanation: "Formallikhet gjelder reglene, ikke fordelingen. Likhet i utfall er resultatlikhet, og likhet i utgangspunkt er mulighetslikhet — tre former som stadig forveksles. Likeverdig behandling i det daglige er anerkjennelsesdimensjonen, som er noe annet igjen.",
    },
    {
      question: "Hvorfor kan formallikhet og resultatlikhet kreve motsatte virkemidler?",
      options: ["Fordi like regler i et samfunn med ulike utgangspunkt gir ulike utfall", "Fordi resultatlikhet alltid krever at rettigheter innskrenkes for noen grupper", "Fordi formallikhet er et rettslig mål og resultatlikhet et rent økonomisk mål", "Fordi de to formene ble utviklet i hver sin faglige tradisjon med ulike metoder"],
      explanation: "Å behandle alle likt gir ikke like utfall når utgangspunktene er ulike, og å utjevne utfall krever derfor ofte at grupper behandles ulikt. Poenget er ikke at rettigheter må innskrenkes, men at virkemidlene trekker i hver sin retning. Skillet er analytisk, ikke et spørsmål om fagtradisjon eller om jus mot økonomi.",
    },
    {
      question: "Hva er mulighetslikhet, og hva er måleproblemet ved den?",
      options: ["Likhet i utgangspunkt, som ikke kan observeres direkte og må sluttes fra utfall", "Likhet i utfall, som lar seg måle direkte i statistikken over inntekt og posisjoner", "Likhet i regler, som er vanskelig å måle fordi lovverket endrer seg over tid", "Likhet i anerkjennelse, som bare lar seg måle gjennom kvalitative dybdeintervjuer"],
      explanation: "Mulighetslikhet gjelder startpunktet, og problemet er at bare utfallene er observerbare — mulighetene må sluttes bakover. Likhet i utfall er resultatlikhet, og likhet i regler er formallikhet. Anerkjennelse er en egen dimensjon og ikke en av de tre likhetsformene.",
    },
    {
      question: "Hva er en følelsesmessig grunnfortelling (deep story) hos Hochschild?",
      options: ["Fortellingen om hvordan verden henger sammen som ligger under en gruppes politiske syn", "Den sammenhengende ideologien som en politisk bevegelse bygger hele programmet sitt på", "Den offisielle fortellingen et samfunn forteller om sin egen opprinnelse og sitt samhold", "Den personlige livshistorien som forklarer den enkeltes valg av parti ved et valg"],
      explanation: "Grunnfortellingen er før-politisk: den forteller hvordan situasjonen kjennes, og den føles sann uavhengig av om den lar seg etterprøve. En ideologi er derimot et begrunnet sett standpunkter som kan diskuteres punkt for punkt. Begrepet gjelder heller ikke nasjonens offisielle selvforståelse eller den enkeltes biografi.",
    },
    {
      question: "Hva er den metodiske regelen når en grunnfortelling skal gjengis?",
      options: ["Den gjengis uten faktasjekk og uten dom, slik at den blir gjenkjennelig innenfra", "Den gjengis med løpende korrigering av de påstandene som ikke stemmer med kildene", "Den gjengis bare når forskeren selv deler det politiske ståstedet til gruppen", "Den gjengis i sammendrag, slik at følelsesuttrykkene ikke farger analysen"],
      explanation: "Poenget er å finne ut hva verden ser ut som fra et bestemt ståsted, og det krever at fortellingen får stå som den er. Å korrigere underveis gjør gjengivelsen til en debatt i stedet for en analyse. Metoden forutsetter ikke enighet med gruppen, og følelsesuttrykkene er nettopp det materialet som skal fram.",
    },
    {
      question: "Hva er empati-murer (empathy walls)?",
      options: ["Hindringer som gjør at man ikke kan forestille seg hvordan verden ser ut for den andre", "Mangel på kunnskap om hvilke argumenter den andre siden faktisk bruker i saken det gjelder", "Avstanden mellom de politiske posisjonene i et samfunn der midten gradvis tømmes ut", "Reglene for hvilke følelser man har lov til å vise fram i en offentlig debatt"],
      explanation: "Muren består av manglende forestillingsevne om følelser, ikke av manglende informasjon: man kan kjenne motpartens argumenter godt og likevel ikke se hvorfor de føles rimelige. Avstanden mellom posisjonene er polarisering, som er noe annet. Regler for tillatte følelser er følelsesregler, et eget begrep hos samme forfatter.",
    },
    {
      question: "Hva skiller empati-murer fra polarisering?",
      options: ["Empati-murer gjelder forståelsesbarrieren, polarisering gjelder avstanden mellom posisjonene", "Empati-murer gjelder enkeltmennesker, mens polarisering gjelder forholdet mellom partiene", "Empati-murer oppstår i kvalitative studier, mens polarisering måles i spørreundersøkelser", "Empati-murer er et amerikansk fenomen, mens polarisering er beskrevet i alle demokratier"],
      explanation: "To grupper kan stå langt fra hverandre og likevel forstå hverandre godt, og de kan stå nær hverandre og ikke forstå hverandre i det hele tatt — derfor er de to begrepene ikke to navn på samme sak. Skillet handler ikke om analysenivå eller om hvilket måleinstrument som brukes, og ingen av fenomenene er bundet til ett land.",
    },
    {
      question: "Hva beskriver Hochschild med det store paradokset (the great paradox)?",
      options: ["At velgere kan slutte opp om politikk som går mot deres egne materielle interesser", "At de mest utsatte gruppene deltar minst i valg, høringer og organisasjonsliv ellers", "At den politiske tilliten synker samtidig som levestandarden i samfunnet fortsetter å stige", "At de som har mest å tjene på en reform, er de som kjenner innholdet i den dårligst"],
      explanation: "Paradokset gjelder forholdet mellom materiell interesse og politisk oppslutning, og det oppløses når verdighet og tilhørighet regnes som selvstendige hensyn. Lav deltakelse blant utsatte grupper og fallende tillit er andre fenomener med egne forklaringer. Begrepet handler heller ikke om hvor godt en reform er kjent.",
    },
    {
      question: "Hva er den vanligste feilgjengivelsen av det store paradokset?",
      options: ["Å si at det viser at velgere stemmer feil eller er villedet", "Å si at det utvider hva som kan telle som en interesse", "Å si at det bygger på et langvarig kvalitativt feltarbeid", "Å si at det knytter oppslutning til verdighet og tilhørighet"],
      explanation: "Begrepet er en beskrivelse av en mekanisme, ikke en dom over velgerne — formuleringen om at noen stemmer feil forutsetter at bare materielle interesser er ekte interesser. De tre andre påstandene er korrekte gjengivelser: begrepet utvider interessebegrepet, det hviler på langvarig feltarbeid, og det kobler oppslutning til verdighet og tilhørighet.",
    },
    {
      question: "Hva er følelsesregler (feeling rules)?",
      options: ["Sosiale regler for hva man har lov til å føle i en gitt situasjon", "Sosiale regler for hvordan man skal opptre i formelle sammenhenger", "Reglene et forskningsmiljø følger når følelser skal registreres i data", "Normene som avgjør hvilke saker som kan tas opp i en offentlig debatt"],
      explanation: "Følelsesregler regulerer opplevelse, mens vanlige normer regulerer handling — skillet viser at sosial kontroll rekker lenger enn til det som kan observeres utenfra. Begrepet gjelder ikke forskerens registreringspraksis, og det som avgjør hvilke saker som kommer opp, er dagsordenmakt.",
    },
    {
      question: "Hva kjennetegner designet i Hochschilds studie?",
      options: ["Langvarig kvalitativt feltarbeid i ett lokalsamfunn, uten representativt utvalg", "En landsdekkende spørreundersøkelse med gjentatte målinger over flere år på rad", "Et felteksperiment der én egenskap varieres mens alt annet holdes helt likt", "En registerstudie som følger de samme velgerne gjennom flere valgperioder etter hverandre"],
      explanation: "Studien bygger på gjentatte besøk, lange samtaler og deltakelse over år, med et uttalt mål om å komme over sin egen empati-mur. Survey, felteksperiment og registerdata er helt andre design med helt andre styrker. Nettopp fordi utvalget ikke er representativt, kan studien si mye om mekanisme og lite om utbredelse.",
    },
    {
      question: "Hva viser Hochschilds studie IKKE?",
      options: ["Hvor utbredt grunnfortellingen er, og hvilken vei årsaken går", "Hvordan en grunnfortelling er bygget opp for dem som bærer den", "At verdighet og tilhørighet kan veie tyngre enn materiell interesse", "At forståelsesbarrierer kan være sterkere enn uenigheten om fakta"],
      explanation: "Et kvalitativt dybdestudium er sterkt på mekanisme og svakt på utbredelse og årsaksretning, og det er nettopp den grensen som skal skrives ut i en besvarelse. De tre andre punktene er derimot innenfor det studien faktisk viser, og de kan brukes aktivt i et argument.",
    },
    {
      question: "Hva lar seg overføre fra Hochschilds amerikanske studie til norsk sammenheng?",
      options: ["De analytiske redskapene, men ikke innholdet i den konkrete grunnfortellingen", "Både redskapene og innholdet, siden mekanismene er de samme i vestlige land", "Innholdet i grunnfortellingen, men ikke begrepet om empati-murer", "Verken redskapene eller innholdet, siden funnene er bundet til ett lokalsamfunn"],
      explanation: "Begrepene kan settes i arbeid hvor som helst, men hvem som opplever seg forbigått i Norge, av hvem og med hvilken begrunnelse, er et selvstendig empirisk spørsmål. Å anta at innholdet følger med er en overføringsfeil. Samtidig ville det vært for strengt å si at ingenting kan brukes — det er nettopp redskapene som er studiens varige bidrag.",
    },
    {
      question: "Hvilke to presiseringer legger Engelstad til den klassiske maktdefinisjonen?",
      options: ["At makt ofte virker gjennom posisjon og samarbeid, og at den også er felles handlingsevne", "At makt alltid forutsetter en åpen konflikt, og at den kan telles i økonomiske ressurser", "At makt er knyttet til staten alene, og at den utøves gjennom lov og formell myndighet", "At makt er en egenskap ved enkeltpersoner, og at den arves videre gjennom posisjoner"],
      explanation: "Poenget er at den som sitter der beslutninger forberedes, sjelden trenger å tvinge noen, og at organisasjoner og bevegelser skaper handlingsevne ingen har alene. Å lete etter makt bare der det er åpen konflikt er å lete de fleste stedene forbi. Makt er dessuten verken begrenset til staten eller en egenskap ved enkeltpersoner.",
    },
    {
      question: "Hva er dagsordenmakt?",
      options: ["Makten over hvilke saker som i det hele tatt kommer opp til behandling", "Makten over utfallet når en sak kommer opp til åpen avgjørelse", "Makten over hvordan en sak forstås og hva som framstår som rimelig", "Makten over hvilke aktører som får plass i offentlige utvalg og høringer"],
      explanation: "Dagsordenmakt er den andre av maktens tre dimensjoner: en sak som aldri når dagsordenen, taper uten at noen har stemt. Makt over utfallet i åpne avgjørelser er beslutningsmakt, og makt over forståelsen er definisjonsmakt. Tilgang til utvalg og høringer er et spørsmål om kanal, ikke en egen maktdimensjon.",
    },
    {
      question: "Hva er definisjonsmakt?",
      options: ["Makten over hva som framstår som naturlig, nødvendig eller urimelig å kreve", "Makten til å avgjøre hvilke begreper som skal brukes i den offentlige statistikken", "Makten til å bestemme hvem som får uttale seg på vegne av en bestemt gruppe", "Makten til å fastsette hvilke saker som skal utredes før de behandles politisk"],
      explanation: "Definisjonsmakt er den tredje og vanskeligst observerbare dimensjonen, fordi den virker gjennom premisser som aldri blir diskutert. Kontroll over hvilke saker som utredes hører til dagsordenmakten. Verken statistikkens begrepsbruk eller talspersonsrollen fanger det som gjør denne dimensjonen egen.",
    },
    {
      question: "Hva er forskjellen på makt som ressurs og makt som relasjon?",
      options: ["Ressursen er en beholdning hos aktøren, relasjonen avgjør om beholdningen gir gjennomslag", "Ressursen er økonomisk, mens relasjonen er politisk og handler om allianser og byttehandel", "Ressursen er formell og lar seg måle, mens relasjonen er uformell og forblir skjult for andre", "Ressursen tilhører organisasjoner, mens relasjonen tilhører de enkelte medlemmene"],
      explanation: "Den samme ressursen gir ulik makt avhengig av hvem man står overfor og hva som står på spill — derfor kan små grupper i nøkkelposisjoner slå store grupper uten et slikt punkt. Skillet går ikke mellom økonomi og politikk, mellom formelt og uformelt, eller mellom kollektive og individuelle aktører.",
    },
    {
      question: "Hva skiller den numeriske fra den korporative kanalen i norsk politikk?",
      options: ["Den numeriske teller stemmer og flertall, den korporative teller organisert styrke", "Den numeriske gjelder det nasjonale nivået, den korporative gjelder det kommunale nivået", "Den numeriske brukes av partier, mens den korporative brukes av sosiale bevegelser", "Den numeriske er formelt regulert, mens den korporative bygger på uformelle nettverk"],
      explanation: "Valgkanalen favoriserer det som er tallrikt, mens organisasjonskanalen favoriserer det som er organisert og har noe motparten trenger. Skillet følger verken forvaltningsnivå eller aktørtype, og den korporative kanalen er i høy grad formalisert gjennom utvalg, høringer og forhandlinger.",
    },
    {
      question: "Hvordan beskriver Engelstad makt i det norske samfunnet?",
      options: ["Fordelt på flere arenaer med hver sin logikk, og med organisering som en hovedvei inn", "Samlet hos et lite sjikt som går igjen i politikk, næringsliv og offentlig forvaltning", "Konsentrert i de folkevalgte organene, som styrer alle de øvrige arenaene ovenfra", "Jevnt fordelt mellom borgerne, siden valgkanalen står åpen for alle på samme vilkår"],
      explanation: "Bildet er flere arenaer med ulik logikk — politikk, økonomi, organisasjonsliv og symbolsk makt — der tilgangen i uvanlig stor grad går gjennom å være organisert. Verken en elitetese, en tese om folkevalgt overhøyhet eller en påstand om jevn fordeling gjengir framstillingen riktig.",
    },
    {
      question: "Hvordan skal diagnosen om at det folkevalgte rommet krymper, gjengis i en besvarelse?",
      options: ["Som en omstridt posisjon med en motposisjon, ikke som et etablert funn", "Som et etablert forskningsfunn med bred oppslutning i faget", "Som en politisk påstand uten forankring i norsk maktforskning", "Som en observasjon som gjelder internasjonalt, men ikke i Norge"],
      explanation: "Diagnosen er reist i norsk maktforskning, men den er omdiskutert: motposisjonen holder at rettsliggjøring og internasjonale forpliktelser også binder makt og verner mindretall. Å gjengi den som etablert funn overdriver belegget, og å avvise den som ren politikk underslår at den kommer fra faget selv.",
    },
    {
      question: "Hvordan brukes begrepet høyrepopulisme i denne boka?",
      options: ["Som en analytisk merkelapp på en mobiliseringsform, definert før den brukes", "Som en samlebetegnelse på partier som ønsker strengere innvandringspolitikk", "Som en karakteristikk av velgere som stemmer mot egne materielle interesser", "Som et synonym for nasjonalisme slik begrepet brukes i statsvitenskapen"],
      explanation: "Begrepet betegner en form for mobilisering: appell til «folket» mot en elite, kombinert med et nasjonalt eller kulturelt avgrenset fellesskap. Boka karakteriserer verken partier eller velgere, og bruker ingen partinavn som eksempel. Nasjonalisme er dessuten en lære om nasjonens politiske betydning og ikke det samme som mobiliseringsformen.",
    },
    {
      question: "Hvorfor skriver boka om mobiliseringsformer i stedet for om partier og velgere?",
      options: ["Fordi formen kan observeres presist, mens velgere stemmer av mange grunner samtidig", "Fordi partiene skifter navn og program for ofte til at en analyse av dem holder seg", "Fordi velgerundersøkelser ikke er en del av pensum i akkurat dette emnet på UiO", "Fordi analyser av partier hører hjemme i statsvitenskapen og ikke i sosiologien"],
      explanation: "En mobiliseringsform er en observerbar egenskap ved hvordan krav settes fram, mens karakteristikker av velgergrupper både er empirisk risikable og analytisk lite nyttige. Begrunnelsen er altså faglig presisjon, ikke at partier endrer seg eller at temaet tilhører et annet fag.",
    },
    {
      question: "Hva er felles for identitetspolitikk fra venstre og fra høyre?",
      options: ["Begge mobiliserer på identitet og krever anerkjennelse for gruppens status", "Begge fremmes av grupper som er dokumentert forskjellsbehandlet", "Begge krever at ressurser omfordeles fra flertallet til gruppen selv", "Begge har vokst fram i kjølvannet av 1960-tallets sosiale bevegelser"],
      explanation: "Mekanismen er den samme: en gruppeidentitet mobiliseres, og kravet gjelder status som ikke svarer til det gruppen mener å ha krav på. Det som skiller, er posisjonen kravet fremmes fra — dokumentert marginalisering mot flertallets institusjonelle stilling. Kravene er heller ikke primært omfordelingskrav, og formen er eldre enn den ene av variantene.",
    },
    {
      question: "Hva er innholdet i høyrepopulisme-paradokset?",
      options: ["At bevegelser som avviser identitetspolitikk selv mobiliserer på identitet og anerkjennelse", "At velgere med høy utdanning oftere slutter opp om anerkjennelseskrav enn andre velgere gjør", "At kravene om anerkjennelse øker i styrke samtidig som de formelle rettighetene styrkes", "At mobilisering mot en elite oftest ledes av personer som selv tilhører den samme eliten"],
      explanation: "Paradokset ligger i at merkelappen avvises mens formen brukes, og det er nettopp den observasjonen H2022-oppgaven ba om å få drøftet. At kravene øker med formelle rettigheter er en annen mekanisme i kapitlet, knyttet til skillet mellom formallikhet og resultatlikhet. De to øvrige påstandene handler om hvem som deltar, ikke om formen.",
    },
    {
      question: "Hva er det sterkeste argumentet for at fundamentet er identitetspolitisk?",
      options: ["Formlikheten: gruppebasert mobilisering med krav om status som ikke lar seg utbetale", "At bevegelsene selv beskriver kravene sine som krav om anerkjennelse og gjensidig respekt", "At oppslutningen er størst i de områdene som har lavest gjennomsnittsinntekt i landet", "At kravene rettes mot en elite som selv har mye å tape på at noe endrer seg"],
      explanation: "Argumentet hviler på at kravet er organisert rundt tilhørighet og gjelder status som ikke kan innfris med overføringer — akkurat den formen Fukuyamas analyse beskriver. Bevegelser avviser tvert imot ofte merkelappen selv. Inntektsnivå og elitens interesser er andre observasjoner som ikke sier noe om hva kravet består i.",
    },
    {
      question: "Hva er det sterkeste argumentet mot at fundamentet er identitetspolitisk?",
      options: ["Asymmetrien i posisjon, og at mye av grunnlaget lar seg forklare uten identitetsbegrepet", "At begrepet identitetspolitikk er for politisk ladet til å kunne brukes i forskning i det hele tatt", "At de fleste velgere ikke kjenner begrepet anerkjennelse fra faglitteraturen på området", "At mobiliseringen mangler den varige organiseringen som kjennetegner en sosial bevegelse"],
      explanation: "Innvendingen har to ledd: et krav fra en gruppe med flertallets institusjonelle stilling er ikke det samme som fra en dokumentert marginalisert gruppe, og næringsomlegging, sentralisering og institusjonstillit har egne forklaringer. At et begrep er ladet, avgjør ikke om det treffer, og velgeres kjennskap til fagtermer er uten betydning for analysen.",
    },
    {
      question: "Hva kan anerkjennelsesforklaringen IKKE avgjøre?",
      options: ["Hvor stor del av en politisk oppslutning som skyldes anerkjennelseshensyn", "At krav om status kan mobilisere uavhengig av materiell interesse", "At tilhørighet kan tildeles av andre og få målbare konsekvenser", "At mobiliseringsformen kan brukes av grupper i ulike politiske retninger"],
      explanation: "Ingen studie i pensum fastsetter en slik andel, og en besvarelse som antyder et forholdstall, har gått lenger enn belegget rekker. De tre andre påstandene er derimot innenfor det analysen og de norske funnene faktisk dekker, og de kan brukes aktivt i et argument.",
    },
    {
      question: "Hva er opplevd statustap?",
      options: ["Erfaringen av å ha rykket ned i forhold til andre, uavhengig av absolutt levestandard", "Erfaringen av å ha fått lavere inntekt enn i hvert av de foregående årene på rad", "Erfaringen av å ha mistet de formelle rettighetene som gruppen tidligere hadde i lovverket", "Erfaringen av å bli behandlet urettferdig i en enkelt og helt konkret situasjon"],
      explanation: "Statustap gjelder relativ posisjon: en gruppe kan ha stabil levestandard og likevel oppleve at plassen i samfunnet er blitt lavere. Inntektsfall og tap av rettigheter er andre og målbare størrelser som ikke uten videre følger med. Og begrepet gjelder en vedvarende gruppeerfaring, ikke en enkelthendelse.",
    },
    {
      question: "Hvordan skal Fukuyamas egen normative konklusjon behandles i en besvarelse?",
      options: ["Som en posisjon med en motposisjon, ikke som resultatet av analysen", "Som analysens konklusjon, siden den følger av begrepene han bruker", "Som stoff man bør utelate, siden boka ikke tar politisk stilling", "Som en beskrivelse av hvordan nasjonale fellesskap faktisk fungerer"],
      explanation: "Han argumenterer for brede, prinsippbaserte nasjonale identiteter framfor stadig smalere gruppetilhørighet, og det er hans standpunkt — ikke det analysen viser. Å utelate det ville gjøre gjengivelsen ufullstendig, og å presentere det som en beskrivelse av faktiske forhold ville forveksle et normativt argument med et empirisk funn.",
    },
    {
      question: "Hva skiller en sosial bevegelse fra en organisasjon?",
      options: ["Bevegelsen kan mangle et fast sentrum og romme flere organisasjoner samtidig", "Bevegelsen arbeider utenfor loven, mens organisasjonen alltid holder seg innenfor den", "Bevegelsen er alltid kortvarig, mens organisasjonen er varig av natur og består", "Bevegelsen har politiske mål, mens organisasjonen utelukkende har økonomiske mål"],
      explanation: "En organisasjon har medlemsregister, vedtekter og en ledelse som kan forplikte; en bevegelse er en vedvarende kollektiv innsats som kan være løsere organisert. Skillet handler verken om lovlighet eller om målenes art, og bevegelser kan vare lenge — det er nettopp varigheten og identitetsbyggingen som gjør dem sosiologisk interessante.",
    },
    {
      question: "Hvilken pensumforfatter «eier» begrepene deep story og empathy walls?",
      options: ["Hochschild, gjennom studien av politiske følelser i et amerikansk lokalsamfunn", "Fukuyama, gjennom analysen av anerkjennelse og identitetspolitikkens historikk", "Engelstad, gjennom framstillingen av makt og maktfordeling i det norske samfunnet", "Goffman, gjennom studien av stigma og av hvordan inntrykk styres i møter mellom folk"],
      explanation: "Begge begrepene stammer fra Hochschilds studie av politiske følelser i et amerikansk lokalsamfunn. Fukuyama eier anerkjennelse og identitetspolitikk, Engelstad eier maktbegrepet og bildet av makt i Norge, og Goffman eier stigmabegrepet fra et annet kapittel. Å bytte om på koblingene er en typisk felle i flervalgsdelen.",
    },
    {
      question: "Hva er den vanligste tilskrivningsfeilen når Fukuyama brukes?",
      options: ["Å skrive at han tar stilling for eller mot identitetspolitikk framfor å analysere den", "Å skrive at han knytter identitetspolitikken til bevegelsene på 1960-tallet i USA", "Å skrive at han skiller mellom krav om likeverd og krav om å være andre overlegen", "Å skrive at han behandler anerkjennelse som en selvstendig politisk drivkraft i samfunnet"],
      explanation: "Feilen er å bytte ut analysen med et standpunkt, og den er dyr fordi begrepet er det oppgaven ber om. De tre andre påstandene gjengir analysen riktig: historikken fra 1960-tallet, begrepsparet isotymi og megalotymi, og anerkjennelse som drivkraft ved siden av materielle interesser.",
    },
  ],
  'sos1004-7-1': [
    {
      question: "Hva er kjernen i Becks begrep om risikosamfunnet?",
      options: ["At de store risikoene er produsert av samfunnets egne beslutninger", "At farenivået i moderne samfunn er høyere enn i tidligere samfunn", "At risiko fordeler seg på samme måte som goder fordeler seg i et marked", "At naturkatastrofer inntreffer hyppigere enn de gjorde i tidligere tider"],
      explanation: "Kjernen er risikoens opphav: de sentrale farene er beslutningsavhengige bivirkninger av moderniseringen selv. At farenivået skulle være høyere, er den vanligste feillesningen — på mange mål er moderne samfunn tryggere, og Beck sier ikke noe om nivået. At risiko fordeles som goder, er det motsatte av hans påstand, og hyppigere naturkatastrofer er en empirisk påstand om naturhendelser.",
    },
    {
      question: "Hva menes med refleksiv modernitet hos Beck?",
      options: ["At moderniseringen konfronteres med følgene av sin egen utvikling", "At folk i moderne samfunn tenker grundigere over egne handlinger", "At moderniseringen går raskere enn den gjorde i tidligere faser", "At samfunnet vender tilbake til tradisjonelle måter å organisere seg på"],
      explanation: "Refleksiv modernitet betyr selvkonfrontasjon: samfunnet må håndtere problemer som er skapt av forrige runde med framskritt, med de samme institusjonene som frembrakte dem. Økt ettertanke hos den enkelte er en mulig konsekvens, men ikke definisjonen. Begrepet sier heller ingenting om tempo, og det beskriver ikke en tilbakevending til tradisjon.",
    },
    {
      question: "Hva er forskjellen på risiko-produksjon og risiko-fordeling?",
      options: ["Produksjon svarer på hvor risikoen kommer fra, fordeling på hvem den treffer", "Produksjon gjelder utslipp av klimagasser, fordeling gjelder tildeling av kvoter", "Produksjon gjelder høyinntektsland, mens fordeling gjelder lavinntektsland", "Produksjon er et økonomisk begrep, mens fordeling er et rettferdighetsbegrep"],
      explanation: "De to leddene svarer på hvert sitt spørsmål: opphavet og nedslagsfeltet. Land-varianten ligger nær sannheten og faller likevel — at høyinntektsland står for mye av produksjonen er en observasjon som illustrerer skillet, mens skillet selv er analytisk og gjelder uansett hvilke land man ser på. Utslipp og kvoter er klimapolitiske virkemidler, ikke det sosiologiske skillet, og å dele begrepene etter fag treffer heller ikke.",
    },
    {
      question: "Hva mener Beck når han sier at risiko ikke fordeles som goder?",
      options: ["At byrdene følger utsatthet og handlingsrom, ikke bare kjøpekraft", "At byrdene fordeles helt likt mellom alle grupper i et moderne samfunn", "At byrdene alltid legger seg tyngst på dem som har høyest inntekt", "At byrdene fordeles av staten i stedet for gjennom markedet og prisene"],
      explanation: "Goder kan kjøpes og akkumuleres; risiko følger en delvis annen logikk, der bosted, yrke, tid og handlingsrom betyr like mye som inntekt. Påstanden om helt lik fordeling er den forvekslingen kapitlet advarer mot: rekkevidde er ikke det samme som fordeling. At byrdene alltid rammer de rikeste hardest, snur mønsteret, og fordelingen skjer ikke primært ved politisk tildeling.",
    },
    {
      question: "Hva skiller en ytre fare fra en produsert risiko?",
      options: ["Den ytre faren kommer til samfunnet, den produserte er skapt av beslutninger", "Den ytre faren rammer bredt, mens den produserte rammer avgrensede grupper", "Den ytre faren er fysisk målbar, mens den produserte bare er sosialt definert", "Den ytre faren gjelder fortiden, mens den produserte gjelder vår egen samtid"],
      explanation: "Skillet går på opphav: uvær og jordskjelv kommer utenfra, mens produserte risikoer har en adresse i bestemte beslutninger. Det åpner et nytt spørsmål etterpå — ikke bare hvordan man beskytter seg, men hvem som svarer for det. Begge typer kan måles fysisk, begge kan ramme bredt eller smalt, og ytre farer finnes fortsatt i dag.",
    },
    {
      question: "Hva innebærer påstanden om at klimarisikoen er grenseløs?",
      options: ["At den ikke lar seg avgrense i tid, rom eller ansvar slik ulykker kan", "At den treffer alle samfunnsgrupper omtrent like hardt og på samme tid", "At den ikke kan måles med de metodene naturvitenskapen har til rådighet", "At den er større i omfang enn de risikoene industrisamfunnet frembrakte"],
      explanation: "Grenseløshet er en påstand om rekkevidde: risikoen krysser landegrenser, virker over generasjoner og sprenger ordninger som forsikring og erstatningsansvar. Den sier ingenting om at alle rammes likt — nettopp den forvekslingen er kapitlets paradoks. Den er heller ikke en påstand om målbarhet eller om samlet omfang.",
    },
    {
      question: "Hva er risikodefinisjonsmakt?",
      options: ["Makt over hva som skal telle som risiko og hvilken kunnskap som gjelder", "Makt til å bestemme hvilke tiltak myndighetene faktisk skal sette i verk", "Makt over hvordan mediene omtaler en miljøsak i den offentlige debatten", "Makt til å fordele kostnadene ved tilpasning mellom grupper og næringer"],
      explanation: "Definisjonsmakten gjelder premissene: hva som regnes som en risiko, hvilken kunnskap som er gyldig, og hvor mye usikkerhet som er akseptabel. Den som får gjennomslag for at noe ennå ikke er godtgjort, har vunnet saken uten en avstemning. Makt over tiltak, medieomtale og kostnadsfordeling er virkninger som kan følge, men de er ikke det begrepet navngir.",
    },
    {
      question: "Hva undersøker miljøsosiologien som naturvitenskapelig miljøforskning ikke undersøker?",
      options: ["Hvem som definerer problemet, hvem det rammer, og hvem som betaler", "Hvor raskt de fysiske endringene skjer, og hvilke områder de treffer", "Hvilke tekniske løsninger som mest effektivt kan redusere utslippene", "Hvordan økosystemer reagerer når belastningen på dem øker over tid"],
      explanation: "Sosiologien overtar der det fysiske spørsmålet er avklart og fordelings- og definisjonsspørsmålene begynner: hvem som bestemmer at noe er et problem, hvem som rammes, og hvilke institusjoner som svarer. Endringstakt, geografisk nedslagsfelt, teknisk effektivitet og økosystemrespons hører til den naturvitenskapelige og tekniske siden av arbeidsdelingen.",
    },
    {
      question: "Hva betyr det at miljøproblemer er sosialt definerte?",
      options: ["At alvorlighetsgrad og akseptabel risiko fastsettes i sosiale prosesser", "At de fysiske endringene er skapt av samfunnet og ikke av naturen selv", "At problemene bare finnes i den grad noen faktisk opplever dem som et problem", "At det er uenighet i befolkningen om hvorvidt miljøproblemene finnes"],
      explanation: "Definisjonsleddet gjelder hva som teller som et problem, hvor alvorlig det er, og hvilken usikkerhet man skal handle på — spørsmål måledata ikke besvarer alene. At endringene er samfunnsskapte, er et annet poeng, nemlig produksjonsleddet hos Beck. At problemet bare finnes når noen opplever det, er den overtolkningen feltet advarer mot: sosialt definert betyr ikke fysisk innbilt, og uenighet i debatten er ikke selve begrepet.",
    },
    {
      question: "Hva betyr det at miljøproblemer er sosialt fordelte?",
      options: ["At både belastningen og evnen til å håndtere den følger sosiale skiller", "At myndighetene fordeler kostnadene ved miljøtiltak mellom ulike grupper", "At miljøproblemer oppstår ulike steder avhengig av hvor industrien ligger", "At holdninger til miljøspørsmål varierer mellom lag i befolkningen"],
      explanation: "Fordelingsleddet handler om hvem belastningen går ut over, og om at ressursene til å tåle den er ujevnt fordelt fra før. Politisk kostnadsfordeling er et virkemiddel og ikke begrepet. Hvor industrien ligger, forklarer eksponering, men ikke håndteringsevne, og variasjon i holdninger er et helt annet spørsmål.",
    },
    {
      question: "Hvorfor er skillet mellom natur og samfunn problematisk i klimastoffet?",
      options: ["Fordi klimaendringene er fysiske prosesser produsert av samfunnsaktivitet", "Fordi naturvitenskapen ikke har tilstrekkelig sikker kunnskap om klimaet", "Fordi sosiologien mener at naturen bør forstås som en sosial konstruksjon", "Fordi klimaendringene rammer naturen langt hardere enn de rammer samfunn"],
      explanation: "Klimaendringene lar seg ikke plassere på én side av skillet: de er fysiske prosesser skapt av samfunnsmessig aktivitet, som virker tilbake på samfunnet gjennom sosialt fordelte konsekvenser. Skillet er en analytisk konstruksjon, ikke en beskrivelse av virkeligheten. Poenget hviler verken på kunnskapsmangel eller på en påstand om at naturen selv er sosialt skapt.",
    },
    {
      question: "Hva er klimarettferdighet et begrep om?",
      options: ["Forholdet mellom hvem som har bidratt og hvem som bærer konsekvensene", "Kravet om at alle land skal kutte utslippene sine i om lag samme takt", "Retten til erstatning for skade som skyldes ekstremvær og naturhendelser", "Prinsippet om at klimatiltak skal utformes uten å øke ulikheten i et land"],
      explanation: "Begrepet navngir forholdet mellom to fordelinger — bidrag og konsekvenser — langs tre akser: mellom land, innad i land og mellom generasjoner. Det er en analytisk inngang, ikke et bestemt krav. Like kutt, erstatningsordninger og fordelingsnøytrale tiltak er mulige posisjoner innenfor debatten, men de er ikke det begrepet betyr.",
    },
    {
      question: "Hva er ansvarsasymmetrien i klimaspørsmålet?",
      options: ["At fordelingen av utslipp og fordelingen av utsatthet er ulike fordelinger", "At de landene som slipper ut mest, også er de som rammes aller hardest", "At ingen enkeltaktør kan holdes ansvarlig for de samlede klimaendringene", "At ansvaret for utslipp er delt mellom produsenter og forbrukere av energi"],
      explanation: "Asymmetrien er at de som bidrar mest, i hovedsak ikke er de samme som rammes tidligst og hardest — utslipp per person stiger med inntekt, mens utsattheten i stor grad går motsatt vei. Å si at de samme rammes hardest, snur mønsteret. At ingen enkeltaktør kan stilles til ansvar, er et annet poeng, og delingen mellom produsent og forbruker er en regnskapsdiskusjon.",
    },
    {
      question: "Hva skiller sårbarhet fra eksponering i klimasammenheng?",
      options: ["Sårbarhet er eksponering pluss ressursene til å tåle og komme tilbake", "Sårbarhet gjelder mennesker, mens eksponering gjelder bygninger og natur", "Sårbarhet måles etter en hendelse, mens eksponering måles på forhånd", "Sårbarhet er en opplevd følelse, mens eksponering er en objektiv størrelse"],
      explanation: "Eksponering er hvor utsatt et sted fysisk er; sårbarhet legger til inntekt, forsikring, boligtype, nettverk og tilgang på offentlige ordninger. Derfor kan to husholdninger i samme gate ha lik eksponering og svært ulik sårbarhet. Skillet går ikke mellom mennesker og bygninger, ikke mellom måletidspunkt, og ikke mellom opplevelse og objektivitet.",
    },
    {
      question: "Hva skiller klimatilpasning fra utslippskutt?",
      options: ["Tilpasning virker på konsekvensen der den gjøres, kutt virker på årsaken", "Tilpasning gjøres av private aktører, mens kutt gjøres av myndighetene", "Tilpasning er et kortsiktig tiltak, mens kutt er et langsiktig virkemiddel", "Tilpasning gjelder rike land, mens kutt er hovedsaken i fattigere land"],
      explanation: "Utslippskutt virker på årsaken og har global virkning uansett hvor de gjøres; tilpasning virker på konsekvensen og virker der den gjennomføres. Nettopp derfor er tilpasning nesten alltid et fordelingsspørsmål. Begge typer tiltak gjennomføres av både private og offentlige aktører, begge har kort- og langsiktige former, og begge finnes i land på alle inntektsnivåer.",
    },
    {
      question: "Hva hevder posisjonen økologisk modernisering?",
      options: ["At miljøhensyn kan bygges inn i økonomiens institusjoner og virkemidler", "At markedet vil løse miljøproblemene av seg selv uten politiske inngrep", "At økonomisk vekst må stanses for at klimamålene skal kunne nås i tide", "At miljøproblemer først kan løses gjennom endrede holdninger hos den enkelte"],
      explanation: "Kjernen er at prising, standarder, teknologikrav og innovasjonspolitikk kan gjøre det lønnsomme sammenfallende med det som reduserer belastningen — altså mer moderne institusjoner, ikke færre. At markedet ordner opp av seg selv, er en karikatur av posisjonen. Vekststans er den motsatte posisjonen, og holdningsendring hos den enkelte er et tredje og annet svar.",
    },
    {
      question: "Hva er det sterkeste argumentet for økologisk modernisering?",
      options: ["At andre store miljøproblemer faktisk er redusert innenfor samme system", "At teknologisk utvikling historisk har gått raskere enn noen har forventet", "At markedsbaserte virkemidler er billigere å innføre enn direkte forbud", "At det ikke finnes politisk flertall for å endre den økonomiske modellen"],
      explanation: "Argumentet er historisk: lokal luftforurensning, forurensning av vassdrag og nedbrytning av ozonlaget ble kraftig redusert i rike land med teknologikrav, prising og internasjonale avtaler, uten at den økonomiske modellen ble byttet ut. Påstander om teknologisk tempo, om kostnadseffektivitet og om politiske flertall kan støtte posisjonen, men de er ikke det belegget den hviler på.",
    },
    {
      question: "Hva er forskjellen på relativ og absolutt avkobling?",
      options: ["Relativ er belastning per enhet, absolutt er den samlede belastningen", "Relativ gjelder ett land alene, absolutt gjelder verdensøkonomien samlet", "Relativ måles i utslipp, mens absolutt måles i samlet ressursbruk", "Relativ gjelder kort sikt, mens absolutt først kan måles over flere tiår"],
      explanation: "Relativ avkobling er at belastningen per produsert enhet faller; absolutt avkobling er at den samlede belastningen faller mens økonomien vokser. Skillet er stridens kjerne, fordi relativ avkobling er godt dokumentert mens absolutt er langt mer krevende. Skillet handler verken om geografisk nivå, om måleenhet eller om tidshorisont.",
    },
    {
      question: "Hva er poenget med innvendingen om utflagging av utslipp?",
      options: ["At en nasjonal nedgang kan skyldes at produksjonen er flyttet til utlandet", "At bedrifter flytter virksomhet dit miljøkravene er strengest og mest stabile", "At utslipp fra internasjonal transport ikke telles i noe lands klimaregnskap", "At utslipp fra offentlig sektor holdes utenfor de nasjonale utslippstallene"],
      explanation: "Innvendingen er at regnskapet kan endre seg uten at utslippene gjør det, fordi produksjonen er flyttet til et annet land mens forbruket består. Bedrifter flytter i så fall bort fra strenge krav, ikke mot dem. Uttellingen av internasjonal transport og av offentlig sektor er egne regnskapsdiskusjoner, men de er ikke denne innvendingen.",
    },
    {
      question: "Hva er poenget med innvendingen om effektiviseringens tilbakeslag?",
      options: ["At det som blir billigere å bruke, ofte brukes mer, slik at gevinsten spises opp", "At effektivisering krever ny teknologi som selv er kostbar å produsere", "At effektiviseringen går saktere enn den økonomiske veksten gjør over tid", "At effektiviseringstiltak i hovedsak treffer produksjon og ikke forbruk"],
      explanation: "Poenget er en atferdsmekanisme: når en tjeneste blir rimeligere per enhet, øker forbruket av den, og den samlede gevinsten blir mindre enn den tekniske gevinsten skulle tilsi. At ny teknologi koster ressurser å lage, at veksten kan løpe fra effektiviseringen, og at tiltak treffer skjevt mellom produksjon og forbruk, er beslektede innvendinger — men de beskriver ikke denne mekanismen.",
    },
    {
      question: "Hvem er pensumankeret for at miljøproblemer er både sosialt definerte og sosialt fordelte?",
      options: ["Rolf Lidskog og Göran Sundqvist, i deres framstilling av miljøsosiologien", "Ulrich Beck, i hans analyse av risikosamfunnet og refleksiv modernitet", "Kristin Alsos og Jon Erik Dølvik, i deres analyse av nordisk arbeidsliv", "Grete Brochmann, i hennes arbeider om velferdsstat og innvandring"],
      explanation: "De to leddene hører til framstillingen av miljøsosiologien som felt, og det er også der forklaringen på fagets sene fremvekst ligger. Beck eier risikobegrepene — produksjon, fordeling, grenseløshet og definisjonsmakt — men ikke selve feltbeskrivelsen. Megatrendanalysen gjelder arbeidsliv, og velferdsstat og innvandring er et annet tema i emnet.",
    },
    {
      question: "Hvordan skal Beck brukes i et langsvar i dette emnet?",
      options: ["Som et anvendt begrep som gjør arbeid på oppgavens konkrete spørsmål", "Som en teorihistorisk gjennomgang av forfatterskapet og dets bakgrunn", "Som en klassiker på linje med det øvrige faghistoriske stoffet i emnet", "Som en kilde det er nok å vise til uten å gjengi innholdet i begrepene"],
      explanation: "Beck er ett av tre navn som står i emnets eget pensum og derfor kan brukes i en besvarelse, men unntaket gjelder begrepet og ikke forfatterskapet. Testen er om avsnittet fortsatt gir mening når navnet strykes. Teorihistorie koster tid uten uttelling i et firetimersformat, og en ren henvisning uten innhold er navn uten funn.",
    },
    {
      question: "En kandidat skriver at moderne samfunn produserer sine egne risikoer, og stopper der. Hva er problemet?",
      options: ["Fordelingsleddet mangler, og da kan begrepet ikke bære en drøfting", "Produksjonsleddet er feil gjengitt, siden risikoene også kommer utenfra", "Beck hører til faghistorien og bør ikke brukes i et langsvar her", "Påstanden er for generell, siden den gjelder alle samfunn til alle tider"],
      explanation: "Halve begrepet er der: risikoen er produsert. Det som mangler, er at risiko ikke fordeles som goder — og en oppgave om klimaets sosiale sider ligger nesten i sin helhet i det leddet. Produksjonsleddet er korrekt gjengitt så langt det rekker, Beck er ett av de pensumforankrede unntakene, og påstanden gjelder nettopp moderne samfunn.",
    },
    {
      question: "Hvilken av disse påstandene er et forskningsfunn og ikke en posisjon?",
      options: ["At utsatthet for klimakonsekvenser henger sammen med økonomiske ressurser", "At kostnaden ved omstilling bør legges på dem med de høyeste utslippene", "At markedsbaserte virkemidler er å foretrekke framfor direkte reguleringer", "At omstillingen bør skje raskere enn den gjør under dagens virkemidler"],
      explanation: "Sammenhengen mellom ressurser og utsatthet er en påstand om hva som er tilfelle, med et design bak seg og kjente grenser. De tre andre er normative: de sier hva som bør gjøres, og hviler på verdivalg. Skillet er faglig og ikke bare forsiktig — den vanligste feilen i klimastoffet er å gli fra fordelingsfunn til politisk anbefaling uten å markere overgangen.",
    },
  ],
  'sos1004-7-2': [
    {
      question: "Hva er den sosiologiske forskjellen på en naturhendelse og en katastrofe?",
      options: ["Katastrofens omfang avgjøres av samfunnet hendelsen treffer, ikke av hendelsen alene", "Katastrofen strekker seg over lengre tid enn naturhendelsen gjør i det rammede området", "Naturhendelsen kan måles fysisk, mens katastrofen bare kan beskrives i ettertid", "Naturhendelsen rammer en hel region, mens katastrofen rammer enkelte husholdninger"],
      explanation: "Skillet ligger i at samme hendelse gir ulik katastrofe i ulike samfunn, og ulik katastrofe for ulike grupper i samme samfunn. Varighet og målbarhet følger ofte med, men er ikke det som gjør skillet sosiologisk. Og en katastrofe kan godt treffe en hel region — poenget er hva den treffer, ikke hvor stort området er.",
    },
    {
      question: "Hva er forskjellen på eksponering og sårbarhet?",
      options: ["Eksponering handler om hvor du befinner deg, sårbarhet om hvor mye du tåler", "Eksponering handler om hvor mye du tåler, sårbarhet om hvor du befinner deg", "Eksponering gjelder husholdninger, mens sårbarhet gjelder nabolag og bydeler", "Eksponering gjelder selve hendelsen, mens sårbarhet gjelder tiden etter den"],
      explanation: "Eksponering er å befinne seg der hendelsen slår inn, sårbarhet er hvor lite som skal til før påkjenningen blir varig skadelig. To husholdninger i samme gate kan være like eksponert og ha helt ulik sårbarhet. Sårbarhet er heller ikke forbeholdt et bestemt nivå, og den virker både under og etter hendelsen.",
    },
    {
      question: "Hvorfor er «de fattige bodde i de utsatte områdene» en utilstrekkelig analyse?",
      options: ["Den forklarer hvem vannet nådde, men ikke hvem som kom seg videre etterpå", "Den er sjelden riktig, siden bosettingsmønsteret varierer mye mellom byer", "Den forveksler nabolagets egenskaper med den enkelte husholdningens økonomi", "Den bygger på registerdata som ikke sier noe om den enkeltes livssituasjon"],
      explanation: "Påstanden gjelder eksponering, mens hovedpoenget ligger i sårbarhet og gjenreisningsevne — altså i hva som skjedde i årene etterpå. Påstanden er som regel empirisk riktig, og problemet er ikke datakilden eller nivåforvekslingen, men at forklaringen stopper for tidlig i kjeden.",
    },
    {
      question: "Hva gjør designet i Waters' Katrina-studie uvanlig?",
      options: ["Deltakerne var kartlagt før orkanen og ble fulgt opp i årene etter den", "Deltakerne ble intervjuet i evakueringssentrene mens hendelsen fortsatt pågikk", "Deltakerne ble trukket tilfeldig fra hele befolkningen i den rammede byen", "Deltakerne ble sammenliknet med en tilsvarende gruppe i en by uten flom"],
      explanation: "Kombinasjonen av opplysninger fra før hendelsen og oppfølging etterpå er det som skiller studien fra vanlige katastrofestudier, som begynner etter at katastrofen er et faktum. Deltakerne var lavinntektsforeldre under utdanning og ikke et tilfeldig tverrsnitt, og studien bygger ikke på en sammenlikningsby.",
    },
    {
      question: "Hva betegner hopingseffekter?",
      options: ["At ulemper akkumuleres, slik at katastrofen etterlater ulikheten større enn den var", "At mange mennesker samles på få steder etter at et større område er evakuert", "At de samme områdene rammes gjentatte ganger av liknende naturhendelser over tid", "At skadene blir størst der bebyggelsen er tettest og bygningsmassen er eldst"],
      explanation: "Begrepet peker på at tapene henger sammen og utløser hverandre for dem som hadde minst fra før, slik at avstanden mellom grupper vokser etterpå. Det handler verken om ansamling av mennesker, om gjentatte hendelser i samme område eller om bygningsmassens tetthet og alder.",
    },
    {
      question: "Hva er kjernen i mekanismen bak hopingseffekter?",
      options: ["At tapene er koblet, slik at hvert tap gjør det neste vanskeligere å bære", "At tapene er mange, slik at den samlede belastningen blir uvanlig stor", "At tapene rammer flere husholdninger i samme nabolag på samme tidspunkt", "At tapene kommer over lang tid, slik at de er vanskelige å se i statistikken"],
      explanation: "Poenget er kjeden og ikke summen: bolig og adresse, adresse og skole, arbeid og helsedekning henger sammen, slik at ett tap utløser det neste. At tapene er mange, at flere rammes samtidig, eller at de fordeler seg over tid, beskriver omfang og forløp, men ikke selve mekanismen.",
    },
    {
      question: "Hva er hovedfunnet om utgangsposisjon i Katrina-studien?",
      options: ["Situasjonen før orkanen henger systematisk sammen med forløpet i årene etterpå", "Situasjonen før orkanen hadde liten betydning når først evakueringen var i gang", "Situasjonen etter orkanen var jevnere fordelt enn den hadde vært på forhånd", "Situasjonen etter orkanen var mest avhengig av hvor mye vann boligen fikk"],
      explanation: "Studien kan sammenlikne den enkelte før og etter, og finner at de som hadde minst av ressurser, helse og stabile boforhold i forkant, fikk de tyngste årene etterpå. Det er nettopp derfor katastrofen forsterket ulikhet i stedet for å jevne den ut, og derfor skadeomfanget på boligen alene ikke forklarer forløpet.",
    },
    {
      question: "Hvilken påstand om katastrofer og ulikhet har Katrina-studien ikke støtte for?",
      options: ["At store kriser jevner ut forskjeller fordi alle sitter i samme båt", "At store kriser rammer et helt område uavhengig av hvem som bor der", "At store kriser gir varige helsemessige belastninger for mange rammede", "At store kriser fører til at deler av befolkningen flytter permanent"],
      explanation: "Forskjellene i levekår var større etterpå enn før, og utjevningstanken får derfor ikke støtte som generell regel. At hendelsen treffer et område bredt, at helsebelastninger holdt seg over tid, og at mange flyttet permanent, er derimot i tråd med materialet.",
    },
    {
      question: "Hva menes med at forløpene etter Katrina var sammensatte?",
      options: ["Belastningene var langvarige for mange, mens noen fikk bedre nabolagsforhold der de ble værende", "Belastningene var kortvarige for de fleste, mens et lite mindretall av de evakuerte aldri kom tilbake", "Belastningene rammet omtrent like hardt i alle grupper, men ble håndtert på svært ulike måter", "Belastningene var størst i den aller første tiden og var i all hovedsak borte etter et par år"],
      explanation: "Bildet er verken entydig nedgang eller en lyspunkt-fortelling: helsemessige og psykiske belastninger holdt seg lenge for mange, samtidig som noen av dem som ble værende der de var evakuert til, endte i nabolag med bedre skoler og mindre kriminalitet. Nyansen opphever ikke hopingseffekten, men viser at de rammede er aktører.",
    },
    {
      question: "Hva var det avgjørende ved sosiale nettverk under og etter Katrina?",
      options: ["Hvor langt utenfor det rammede området nettverket strakk seg", "Hvor mange mennesker den enkelte hadde regelmessig kontakt med", "Hvor tett nettverket var, altså i hvilken grad alle kjente alle", "Hvor lenge den enkelte hadde bodd i nabolaget sitt fra før"],
      explanation: "Et nettverk som lå helt innenfor det oversvømte området, ble slått ut samtidig med boligen, mens et nettverk med rekkevidde utenfor ga et sted å dra. Antall kontakter, tetthet og botid kan være verdifullt i hverdagen, men i en hendelse som rammer geografisk, er det rekkevidden som avgjør.",
    },
    {
      question: "Hvorfor kan tette lokale nettverk bli en sårbarhet i en katastrofe?",
      options: ["Fordi alle i nettverket rammes av den samme hendelsen samtidig", "Fordi tette nettverk gir mindre informasjon om arbeid og bolig", "Fordi tette nettverk gjør det vanskeligere å be andre om hjelp", "Fordi tette nettverk er mindre stabile over tid enn spredte nettverk"],
      explanation: "En flom eller orkan rammer et område, og et nettverk som ligger helt innenfor området, faller bort i samme øyeblikk som man trenger det. Tette nettverk er ofte en styrke i hverdagen, og poenget er ikke at de gir dårligere informasjon, er vanskeligere å bruke eller er mindre stabile.",
    },
    {
      question: "Hvorfor beskrives evakuering som en ressurskrevende handling?",
      options: ["Fordi den krever transport, penger, et sted å dra og et ansvar som kan settes på vent", "Fordi den krever at myndighetene varsler tidlig nok til at alle rekker å komme seg ut", "Fordi den krever at den enkelte forstår hvor alvorlig situasjonen kommer til å bli", "Fordi den krever at boligen kan sikres og verdisakene flyttes før husstanden reiser"],
      explanation: "Å reise forutsetter flere ressurser samtidig, og alle er ulikt fordelt — derfor er det systematisk hvem som blir igjen. Varsling, risikoforståelse og sikring av bolig spiller inn, men å forklare at noen ble igjen med manglende vilje eller innsikt er en aktørforklaring uten struktur.",
    },
    {
      question: "Hvorfor er returen sosiologisk mer interessant enn selve evakueringen?",
      options: ["Fordi den avgjøres over år av bolig, arbeid, skole og nettverk, og ikke av hendelsen", "Fordi den gjelder flere mennesker enn evakueringen gjorde i det aktuelle området", "Fordi den er bedre dokumentert i offentlige registre enn evakueringen vanligvis er", "Fordi den viser hvor godt varslingen og redningsarbeidet fungerte i døgnene rundt hendelsen"],
      explanation: "Evakueringen prøves i timer og døgn, mens returen prøves i måneder og år og avhenger av om boligen finnes, om jobben er der og om nok andre kommer tilbake. Det er der ulikheten fester seg. Beredskapen gjelder derimot nettopp de første døgnene, og blandes ofte sammen med gjenoppbyggingen.",
    },
    {
      question: "Hva betegner gentrifisert gjenoppbygging?",
      options: ["At gjenreisningen gjør området dyrere, slik at de med minst ikke har råd til å komme tilbake", "At gjenreisningen skjer så sent at de tidligere beboerne allerede har etablert seg andre steder", "At gjenreisningen prioriterer næringsbygg framfor nye boliger i de mest utsatte områdene", "At gjenreisningen følger nye byggeforskrifter som gjør boligene langt tryggere mot flom"],
      explanation: "Boligmassen reduseres og erstattes i et høyere prissjikt, prisene stiger, og returandelen blir lavest blant dem med færrest ressurser. Forsinkelse, næringsprioritering og strengere byggekrav kan forekomme samtidig, men det er prisnivået og hvem som kan komme tilbake, som er selve begrepet.",
    },
    {
      question: "Hva skiller gentrifisert gjenoppbygging fra vanlig gentrifisering?",
      options: ["Den skjer raskt etter et vedtak, mens de berørte er spredt og ikke til stede", "Den skjer i utkantstrøk, mens vanlig gentrifisering skjer i sentrale bydeler", "Den drives av offentlige midler, mens vanlig gentrifisering drives av private", "Den rammer leietakere, mens vanlig gentrifisering også rammer boligeiere"],
      explanation: "Vanlig gentrifisering skjer gradvis gjennom tilflytting og prisstigning over tiår, mens gjenoppbygging etter en katastrofe avgjøres raskt og i en situasjon der de som skulle protestert, er evakuert bort. Geografisk plassering og finansieringsform er ikke det som skiller, og begge former treffer leietakere hardest.",
    },
    {
      question: "Hva er forskjellen på fortrengning og flytting?",
      options: ["Fortrengning er at det alternativet man ville valgt, ikke lenger finnes", "Fortrengning er at et vedtak pålegger husstanden å forlate boligen sin", "Fortrengning er at husstanden flytter til et dyrere område enn før", "Fortrengning er at flyttingen skjer raskere enn husstanden hadde tenkt"],
      explanation: "Den som ikke har råd til å komme tilbake, har formelt sett flyttet frivillig og er reelt sett fortrengt, fordi valgmuligheten er borte. Begrepet krever verken et vedtak, en bestemt retning på flyttingen eller et bestemt tempo — det kan oppstå som samlet resultat av mange enkeltbeslutninger.",
    },
    {
      question: "Hvorfor kalles gjenoppbygging en politisk beslutning og ikke en teknisk oppgave?",
      options: ["Fordi det avgjøres hva som reises igjen, hvor, i hvilken eierform og for hvem", "Fordi arbeidet finansieres over offentlige budsjetter og ikke av forsikring", "Fordi vedtakene fattes av folkevalgte organer og ikke av fagetatene alene", "Fordi utfallet avhenger av hvor mye politisk oppmerksomhet katastrofen fikk"],
      explanation: "Gjenoppbygging er fordelingspolitikk: den avgjør hvem stedet blir til for etterpå. Finansieringskilden og hvilket organ som formelt vedtar, endrer ikke dette, og oppmerksomhet er en betingelse for prosessen snarere enn det som gjør den fordelende.",
    },
    {
      question: "Hva er sosial infrastruktur i Klinenbergs forstand?",
      options: ["De fysiske stedene og ordningene som gjør at sosiale bånd oppstår og vedlikeholdes", "De uformelle relasjonene mellom naboer som utveksler hjelp og tjenester i hverdagen", "De offentlige tjenestene som trer i kraft når en krise er erklært i et bestemt område", "De tekniske anleggene som sikrer vann, strøm og transport under en påkjenning"],
      explanation: "Begrepet peker på biblioteker, butikker, parker og møteplasser — forutsetningene for at relasjoner kan finnes. Relasjonene selv er nettverk og noe annet, krisetjenester er beredskap, og tekniske anlegg er fysisk infrastruktur i vanlig forstand.",
    },
    {
      question: "Hva fant Klinenberg da han sammenliknet nabolag under hetebølgen i Chicago?",
      options: ["Dødeligheten var sosialt mønstret også mellom nabolag som liknet hverandre", "Dødeligheten fulgte inntektsnivået tett, slik at de fattigste områdene kom dårligst ut", "Dødeligheten var jevnt fordelt, siden varmen la seg likt over hele byen", "Dødeligheten var høyest der bygningsmassen var nyest og tettest bebygd"],
      explanation: "Poenget er nettopp at nabolag som liknet hverandre på inntekt og alderssammensetning, kom svært ulikt ut, og at forskjellen henger sammen med om det fantes levende gatemiljø og møteplasser. Verken inntekt alene, jevn fordeling eller bygningsmassens alder fanger det mønsteret.",
    },
    {
      question: "Hva er forskjellen på nettverk og sosial infrastruktur?",
      options: ["Nettverk er relasjonene, mens infrastrukturen er forutsetningene for at de kan finnes", "Nettverk er forutsetningene, mens infrastrukturen er relasjonene som oppstår av dem", "Nettverk gjelder familie og venner, mens infrastrukturen gjelder offentlige tjenester", "Nettverk virker på mikronivå, mens infrastrukturen bare virker på makronivå"],
      explanation: "Skillet er viktig i en drøfting fordi infrastruktur kan bygges og vedlikeholdes politisk, mens nettverk ikke kan vedtas. Infrastrukturen omfatter mer enn offentlige tjenester, og begge fenomener virker på tvers av nivåene snarere enn å høre hjemme på hvert sitt.",
    },
    {
      question: "Hva kjennetegner en nivåkobling, til forskjell fra en nivåliste?",
      options: ["Den sier hvilken vei virkningen går mellom nivåene i stedet for å ramse dem opp", "Den bruker alle de tre nivåene i analysen i stedet for å nøye seg med ett eller to", "Den plasserer hvert enkelt funn på riktig nivå før det brukes videre i drøftingen", "Den knytter hvert nivå til en egen studie som belegger påstanden på det nivået"],
      explanation: "En kobling sier at et gjenoppbyggingsvedtak avgjorde om nabolaget fikk tilbake beboerne, som avgjorde om den enkelte hadde et sted å returnere til. Å bruke alle tre nivåene, å plassere funn riktig og å ha belegg per nivå er nyttig, men uten retning mellom leddene er det fortsatt en liste.",
    },
    {
      question: "På hvilket nivå ligger et vedtak om at kommunal boligmasse ikke skal gjenreises?",
      options: ["Makronivå, siden det gjelder byens boligmarked og forvaltning", "Mikronivå, siden det avgjør hvor den enkelte husstanden kan bo", "Mesonivå, siden det gjelder nabolaget der boligene sto", "Alle tre nivåene likt, siden vedtaket berører hele befolkningen"],
      explanation: "Vedtaket hører hjemme på makronivået, der boligmarked, forvaltning og politikk ligger. At det får følger for nabolaget og for den enkelte husstanden, er nettopp koblingen nedover — men følgene på lavere nivå gjør ikke vedtaket til et meso- eller mikrofenomen.",
    },
    {
      question: "Hva består paradokset i dette kapitlet i?",
      options: ["Risikoen treffer bredt, mens sårbarhet og gjenreisning fordeler seg systematisk skjevt", "Risikoen treffer skjevt, mens tilpasningstiltakene fordeler seg jevnt i befolkningen", "Risikoen er global, mens ansvaret for å håndtere den ligger hos lokale myndigheter", "Risikoen er kjent på forhånd, mens virkningene likevel kommer overraskende på mange"],
      explanation: "De to påstandene gjelder ulike ledd: bredden gjelder eksponeringen, skjevheten gjelder hva hendelsen gjør med den enkelte og hvor lang vei det er tilbake. Å beholde begge er selve drøftingsaksen, og verken ansvarsfordeling eller varslingsgrad er det spenningen handler om.",
    },
    {
      question: "Hva innebærer det at sårbarhet er sosialt fordelt og ikke naturgitt?",
      options: ["At utfallene følger inntekt, kontraktsform, eierform, helse og nettverk", "At naturens egenskaper er uten betydning for hva som blir ødelagt", "At sårbarheten er den samme overalt i et land med like velferdsordninger", "At sårbarheten kan avleses av hvor i landskapet en husstand bor"],
      explanation: "Påstanden er etterprøvbar: den forutsier at utfall skal henge sammen med opplysninger samlet inn før hendelsen. Den benekter ikke at vindstyrke og vannstand avgjør hva som ødelegges, og den sier heller ikke at like ordninger gir lik sårbarhet — plassering i landskapet er dessuten eksponering og ikke sårbarhet.",
    },
    {
      question: "Hvordan brukes klimarettferdighet på en enkelt katastrofe?",
      options: ["Byrden falt tyngst på husholdningene som hadde bidratt minst til risikoen, i samme by", "Byrden ble fordelt mellom landene etter hvor store utslipp de historisk har hatt", "Byrden ble båret av forsikringsselskapene og dermed spredt utover på alle kundene", "Byrden ble størst i de landene som har den svakeste beredskapen mot ekstremvær"],
      explanation: "Poenget med eksempelet er at logikken finnes innad i et rikt land, mellom nabolag i samme by, og ikke bare mellom stater. Den globale lesningen og beredskapsforskjeller mellom land er reelle spørsmål, men de gjør begrepet lettere å avfeie som et spørsmål om bistand.",
    },
    {
      question: "Hva er den presise formuleringen om overføring av Katrina-funnene til norske forhold?",
      options: ["Mekanismen overføres som hypotese, mens styrken er et empirisk spørsmål", "Mekanismen overføres direkte, siden ulikhet finnes i alle rike samfunn", "Mekanismen kan ikke overføres, siden institusjonene er for ulike til det", "Mekanismen overføres bare til de delene av arbeidslivet som mangler avtaler"],
      explanation: "Flere ledd i kjeden hviler på amerikanske ordninger, som at helsedekning følger arbeidsforholdet, mens selve koblingen av tap ikke er bundet til ett lands institusjoner. Et velferdsregime demper flere ledd samtidig, og derfor er forventningen at effekten finnes, men er svakere.",
    },
    {
      question: "Hva er feilen «navn uten funn» i dette temaet?",
      options: ["At Waters nevnes uten at resultatet gjør arbeid i argumentet", "At Waters nevnes uten at studiens publiseringsår oppgis", "At funnet gjengis uten at forskeren bak det blir navngitt", "At funnet gjengis med for mange detaljer om studiens metode"],
      explanation: "Testen er om argumentet ville endret seg dersom navnet ble strøket. Kuren er å ta med designet i én setning og mekanismen i to. Publiseringsår er ikke det som mangler, og metodedetaljer er nettopp det som løfter svaret snarere enn å tynge det.",
    },
    {
      question: "Hvordan vet du at du har mistet dobbeltheten i en klimabesvarelse?",
      options: ["Bare den ene siden av paradokset står igjen i nest siste avsnitt", "Konklusjonen er skarp i stedet for å holde spørsmålet åpent", "Drøftingen bruker færre enn tre navngitte studier som belegg", "Redegjørelsen fyller mer enn en tredel av den samlede teksten"],
      explanation: "Paradokset er en akse gjennom hele drøftingen, ikke en åpningsfrase, og testen er om begge sider fortsatt står mot slutten. En skarp landing er derimot ønskelig — å bære dobbeltheten er ikke det samme som å nekte å konkludere.",
    },
  ],
  'sos1004-8-1': [
    {
      question: "Hva måler Akse 3 i sensorveiledningenes vurdering av et langsvar?",
      options: ["At drøftingen bærer begge sider av temaets spenning gjennom hele svaret i stedet for å velge én side", "At redegjørelsen treffer pensumforfatterens egne distinksjoner og ikke bare temaet oppgaven handler om", "At konkrete funn fra navngitte studier brukes aktivt i argumentet og ikke bare nevnes med forskerens navn", "At svaret avsluttes med et kritisk grep om hva forskningen på feltet ennå ikke har klart å avgjøre"],
      explanation: "Akse 3 er nyanse og dobbelthet: begge sider av spenningen skal stå med belegg gjennom hele drøftingen. De nære distraktorene er de tre andre aksene — presis begrepsbruk er Akse 1, aktiv empiribruk er Akse 2, og det kritiske sluttgrepet er Akse 4. Den vanligste forvekslingen er å tro at mange funn i seg selv gir uttelling på Akse 3.",
    },
    {
      question: "Hva skiller et paradoks som er en drøfting fra et paradoks som bare er en påstand?",
      options: ["At det står minst ett konkret forskningsfunn på hver av de to sidene, ikke bare på den ene", "At begge sidene er formulert med omtrent samme antall setninger og med like sterke formuleringer", "At paradokset nevnes både i innledningen og i konklusjonen slik at leseren husker det gjennom hele svaret", "At de to sidene tilskrives hver sin navngitte pensumforfatter i drøftingsdelen av svaret"],
      explanation: "Empirikravet er at hver side har sitt eget konkrete funn med hvem, design og resultat. Å nevne en forfatter på hver side er den nære fella: navn uten funn er feilen boka nummererer som nummer fire, og den blir ikke bedre av å opptre to ganger. Balansert lengde og gjentakelse i innledning og konklusjon er formgrep, ikke belegg.",
    },
    {
      question: "Hvor i langsvaret er kontrollen på at dobbeltheten faktisk er båret gjennom?",
      options: ["I nest siste avsnitt: står begge sider fortsatt der, med hvert sitt belegg?", "I innledningen: er spenningen navngitt før redegjørelsen i det hele tatt begynner å rulle?", "I redegjørelsesdelen: er begge sider definert med avsender og distinksjon?", "I siste avsnitt: kommer konklusjonen fram til at spørsmålet er sammensatt?"],
      explanation: "Testen er å lese nest siste avsnitt alene, fordi det er der en tapt side avslører seg. At spenningen er navngitt i innledningen sier ingenting om den ble båret, og en konklusjon om at noe er sammensatt er nettopp det å nekte å konkludere. Redegjørelsen definerer begreper, den bærer ikke aksen.",
    },
    {
      question: "Hvilke to funn utgjør de to sidene i integreringsparadokset?",
      options: ["Etterkommernes oppadgående utdanningsmobilitet i registerdata, og innkallingsgapet i korrespondansetester", "Sysselsettingsgapet blant nyankomne flyktninger, og etterkommernes svakere karakterer i videregående skole", "Innvandrernisjenes nettverksrekruttering, og majoritetsbefolkningens holdninger målt i store surveyer", "Utdanningshomogami blant unge voksne, og religiøse markørers effekt i ansettelsesprosessen"],
      explanation: "Paradokset settes sammen av mobilitetsfunnet fra Hermansen og Midtbøens registerstudier og av innkallingsgapet fra Midtbøens korrespondansetester, som også rammer søkere født og utdannet i Norge. Sysselsettingsgapet blant nyankomne hører til velferdsstatsparadokset, ikke til dette. Nisjer, holdninger og homogami er beslektede temaer, men de er ikke de to sidene her.",
    },
    {
      question: "Hva er de to sidene i velferdsstatsparadokset?",
      options: ["Terskler ved inngangen for nyankomne, og springbretteffekt for etterkommerne i neste generasjon", "Høy sysselsetting i majoritetsbefolkningen, og markant lavere sysselsetting blant innvandrede kvinner", "Sjenerøse ytelser i nord, og strengere behovsprøving i de mellomeuropeiske velferdsmodellene", "Universelle rettigheter i lovverket, og manglende oppslutning om ordningene i befolkningen"],
      explanation: "Paradokset er at samme universelle modell stenger ved inngangen gjennom høye kompetansekrav og komprimert lønnsstruktur, og løfter i neste ledd gjennom gratis utdanning og små forskjeller. Sammenlikningen mellom velferdsregimer er en annen analyse, og oppslutningsspørsmålet hører til den legitimitetsmessige bærekraften. Kjønnsforskjellen i sysselsetting er et eget tema.",
    },
    {
      question: "Hva er spenningen i fruktbarhetsparadokset?",
      options: ["Fruktbarheten faller bredt, mens familiepolitikken er omfattende og barneønskene holder seg stabile", "Fruktbarheten faller i byene, mens den holder seg oppe i distriktene med kortere reisevei til barnehage", "Fruktbarheten faller blant høyt utdannede, mens den stiger blant dem med kortest utdanning", "Fruktbarheten faller i Norge, mens den stiger i de øvrige nordiske landene i samme periode"],
      explanation: "Paradokset er at fallet kommer tross en av verdens mest omfattende familiepolitikker, og at de uttrykte barneønskene ikke har falt med det realiserte barnetallet. Fallet er dessuten bredt og viser seg i de fleste alders- og utdanningsgruppene samtidig, så en distraktor som gjør det til et spørsmål om én gruppe eller ett geografisk område treffer feil.",
    },
    {
      question: "Hva er spenningen i høyrepopulisme-paradokset slik boka beskriver den analytisk?",
      options: ["Mobiliseringsformer som avviser identitetspolitikk, hviler selv på identitet og krav om anerkjennelse", "Bevegelser som krever mer velferd, stemmer samtidig for lavere skatter og for en mindre offentlig sektor", "Velgere som er skeptiske til innvandring, arbeider samtidig i bransjer med høy arbeidsinnvandring", "Grupper som krever nasjonal selvråderett, er samtidig avhengige av internasjonale handelsavtaler"],
      explanation: "Paradokset er at anerkjennelseslogikken som avvises som venstresidens identitetspolitikk, er den samme logikken mobiliseringen selv bygger på — Fukuyamas anerkjennelsesbegrep og Hochschilds fortelling om verdighet. De øvrige spenningene kan være reelle politiske forhold, men de er ikke det paradokset pensum navngir, og de hviler ikke på begrepene i faget.",
    },
    {
      question: "Hva er poenget med Furseths tre B-er i sekulariseringsparadokset?",
      options: ["At tilhørighet, tro og praksis er tre størrelser som kan bevege seg i hver sin retning samtidig", "At tilhørighet, tro og praksis alltid følger hverandre, slik at ett mål kan stå for de andre to", "At tilhørighet, tro og praksis måler religiøsitet på henholdsvis makro-, meso- og mikronivå", "At tilhørighet, tro og praksis er tre stadier alle trossamfunn går gjennom over generasjoner"],
      explanation: "De tre B-ene bryter religiøsitet ned i tilhørighet, tro og praksis nettopp fordi de ikke beveger seg likt, og fordi ett samlemål ville skjult forskjellen. Den nære fella er å tro at de kan brukes om hverandre. De er heller ikke nivåer eller utviklingsstadier, men tre målbare dimensjoner ved det samme fenomenet.",
    },
    {
      question: "Hva er forskjellen på horisontal og vertikal kjønnsdeling i likestillingsparadokset?",
      options: ["Horisontal deling gjelder hvilke yrker og sektorer folk arbeider i, vertikal gjelder hvem som når toppen", "Horisontal deling gjelder forskjeller innad i én bedrift, vertikal gjelder forskjellene mellom bedrifter", "Horisontal deling gjelder lønnsforskjeller mellom kjønn, vertikal gjelder forskjeller i arbeidstid", "Horisontal deling gjelder offentlig sektor, vertikal gjelder privat sektor og de børsnoterte selskapene"],
      explanation: "Horisontal kjønnsdeling handler om fordelingen mellom yrker og sektorer, vertikal om fordelingen mellom posisjoner oppover i hierarkiet. Distinksjonen betyr noe i praksis fordi de to har ulike årsaker og flyttes av ulike tiltak. Lønn og arbeidstid er virkninger av delingen, ikke selve dimensjonene.",
    },
    {
      question: "Hva skiller absolutt fra relativ sosial mobilitet i klasse- og mobilitetsparadokset?",
      options: ["Absolutt mobilitet måler hvor mange som endrer posisjon, relativ måler sjansen gitt foreldrenes posisjon", "Absolutt mobilitet måler bevegelse oppover, relativ mobilitet måler bevegelse nedover i klassestrukturen", "Absolutt mobilitet måles i inntekt over tid, relativ mobilitet måles i yrkesposisjon ved fylte førti år", "Absolutt mobilitet gjelder én generasjon, relativ mobilitet gjelder bevegelse over tre generasjoner"],
      explanation: "Absolutt mobilitet øker når hele samfunnet løftes og det blir flere posisjoner høyt oppe, mens relativ mobilitet er sjansen for å havne i en gitt posisjon gitt foreldrenes — og den er upåvirket av at alle får det bedre samtidig. Den nære fella er å tro at forskjellen gjelder retning oppover eller nedover, eller at den handler om hvilken variabel som måles.",
    },
    {
      question: "Hva er forskjellen på å bære dobbeltheten og å nekte å konkludere?",
      options: ["Å bære dobbeltheten ender i en vekting med begrunnelse, å nekte å konkludere ender i at det er sammensatt", "Å bære dobbeltheten krever like mye plass til hver side, å nekte å konkludere gir den ene siden mer plass", "Å bære dobbeltheten hører hjemme i drøftingen, å nekte å konkludere hører hjemme i redegjørelsen", "Å bære dobbeltheten er et krav på toppnivået, å nekte å konkludere er akseptabelt på terskelnivået"],
      explanation: "Begge former holder to sider i live, og de ser like ut helt til siste avsnitt — forskjellen er om det finnes en vekting med begrunnelse og vilkår. Landingen kan derfor være skarp uten at dobbeltheten går tapt. Plassfordeling og plassering i besvarelsen er formspørsmål og avgjør ingenting her.",
    },
    {
      question: "Hva skal tredje ledd i drøftingsformelen, «dette betyr at», gjøre?",
      options: ["Si hva som følger av at begge sider er sanne, for eksempel at spørsmålet måler to ulike størrelser", "Oppsummere de to foregående leddene i én setning slik at leseren husker begge sidene", "Innføre et tredje funn som verken støtter side A eller side B, men peker i en ny retning", "Varsle konklusjonen ved å si hvilken av de to sidene som kommer til å veie tyngst i det siste avsnittet"],
      explanation: "Tredje ledd trekker konsekvensen av at begge sider er sanne — typisk at spørsmålet er feil stilt før målestokken er oppgitt, at svaret avhenger av en navngitt variabel, eller at sidene har samme opphav. Den nære fella er oppsummeringen: hvis leddet kunne vært skrevet uten å ha lest de to første, er det ikke tredje ledd. Å varsle konklusjonen er noe annet enn å drøfte.",
    },
    {
      question: "Hvilket av kravene i tretrinnstesten faller når en kandidat skriver at «på den ene siden er diskriminering urettferdig, på den andre siden må arbeidsgivere kunne velge fritt»?",
      options: ["Kravet om at begge sider må være påstander om verden og ikke verdivurderinger", "Kravet om at minst ett konkret forskningsfunn må stå på hver av de to sidene", "Kravet om at en fagperson skulle blitt overrasket over at begge er sanne samtidig", "Kravet om at de to sidene må høre hjemme i det samme kapitlets begrepsapparat"],
      explanation: "Begge sidene her er normative posisjoner, så det første trinnet faller, og drøftingen blir en meningsutveksling i stedet for en faglig analyse. Funnkravet og overraskelseskravet er de to andre trinnene i testen, men de blir ikke aktuelle når formuleringen allerede har falt på det første. At sidene hører til samme kapittel er ikke et krav i testen.",
    },
    {
      question: "Hva er innholdet i feilen boka nummererer som nummer fem?",
      options: ["Å miste dobbeltheten ved å velge side tidlig og argumentere ensidig gjennom hele drøftingen", "Å nevne en forsker ved navn uten å bruke resultatet fra studien noe sted i selve argumentet", "Å svare på nabospørsmålet ved å levere en mobilitetsanalyse når oppgaven spurte om muligheter", "Å importere klassikerstoff som oppgaven ikke ber om, i stedet for pensumets egne tekster"],
      explanation: "Feil nummer fem er å miste dobbeltheten, altså å velge side i stedet for å bære begge gjennom drøftingen. De øvrige er nabofeilene i registeret: navn uten funn er nummer fire, å svare på nabospørsmålet er nummer seks, og å importere klassikerstoff er nummer ti. Registeret har nøyaktig ti koder.",
    },
    {
      question: "Hva er den følelsesmessige grunnfortellingen, «deep story», hos Hochschild?",
      options: ["Fortellingen om hvordan verden føles for en gruppe, og som gir politiske posisjoner mening innenfra", "Fortellingen et politisk parti forteller om seg selv i en valgkamp for å samle sine egne velgere bak seg", "Fortellingen forskeren konstruerer av intervjumaterialet for å oppsummere alle informantene", "Fortellingen om nasjonens historie som brukes til å begrunne krav om nasjonal selvråderett"],
      explanation: "Den følelsesmessige grunnfortellingen er hvordan situasjonen føles for en gruppe, og den forklarer hvorfor bestemte politiske posisjoner oppleves som rimelige innenfra. Hochschild prøvde dessuten fortellingen mot informantenes egne reaksjoner, så den er ikke bare forskerens sammendrag. Den er heller ikke partienes egen retorikk eller en nasjonal historiefortelling.",
    },
    {
      question: "Hvilken formulering i en oppgavetekst er det sikreste signalet om at drøftingsdelen skal bære et paradoks?",
      options: ["«Drøft om» eller «drøft hvorvidt», som sier at det finnes forsvarlige svar i begge retninger", "«Gjør rede for», som ber om en presis gjengivelse av forfatterens egne distinksjoner og typologier", "«Forklar kort», som ber om en avgrenset definisjon med avsender og nabobegrep", "«Beskriv utviklingen», som ber om et forløp over tid med de viktigste vendepunktene"],
      explanation: "Formuleringene «drøft om» og «drøft hvorvidt» ber deg prøve en påstand i stedet for å bekrefte den, og det er der aksen bor. De øvrige er redegjørelsesverb: de ber om gjengivelse, definisjon eller forløp. Et paradoks presset inn i redegjørelsesdelen stjeler plass fra distinksjonene som skal stå der.",
    },
  ],
  'sos1004-8-2': [
    {
      question: "En besvarelse definerer statistisk diskriminering presist, viser til to studier og avslutter med at temaet er sammensatt og bør forskes videre på. Hva er hovedproblemet?",
      options: ["Drøftingsdelen mangler, og et langsvar uten en drøftingsdel når ikke terskelen for C", "Empirien er for tynn, siden to studier ikke kan belegge en påstand om arbeidsmarkedet", "Begrepsbruken er for smal, siden statistisk diskriminering krever hele typologien", "Avslutningen er for forsiktig, og et svar uten skarp konklusjon plasseres alltid lavt"],
      explanation: "Sluttavsnittet oppsummerer i stedet for å prøve noe mot noe, og da er oppgavens andre ledd ikke utført. Kravet er både redegjørelse og drøfting, og en manglende del kan ikke kompenseres av at den andre er sterk. At en konklusjon er avveiende er derimot fullt lovlig, så lenge avveiningen er begrunnet.",
    },
    {
      question: "Hva er den sikreste testen på at et forskernavn faktisk er brukt i argumentet, og ikke bare nevnt?",
      options: ["At argumentet i seg selv endrer seg dersom navnet og resultatet strykes ut av teksten", "At studien er omtalt med både forfatter, årstall og hvilket datamateriale den bygger på", "At navnet står i redegjørelsesdelen, der pensumforankringen hører hjemme i et langsvar", "At studien nevnes flere ganger, slik at leseren ser at den er sentral i besvarelsen"],
      explanation: "Empiri er aktiv når den bærer et ledd i resonnementet, typisk ved å utelukke en konkurrerende forklaring. Fullstendige referanseopplysninger, plassering i redegjørelsen og gjentakelse sier alle noe om formen, men ingenting om hvorvidt funnet gjør arbeid i argumentet.",
    },
    {
      question: "Hvorfor er blind gjetting ulønnsomt på et flervalgsspørsmål med fire alternativer i denne poengmodellen?",
      options: ["Fordi forventet uttelling blir −0,125 per spørsmål, mens et ubesvart spørsmål gir 0", "Fordi et galt svar trekker like mye som et riktig svar gir, altså −1 mot +1 poeng", "Fordi gjetting bare lønner seg når minst tre av de fire alternativene er utelukket", "Fordi ubesvarte spørsmål teller som halve poeng når terskelverdiene regnes ut"],
      explanation: "Med fire alternativer treffer du i ett av fire tilfeller og bommer i tre, og +1 mot −0,5 gir da en forventet uttelling på −0,125. Trekket er halvparten av gevinsten, ikke like stort, og et blankt svar gir null poeng og ikke halve. Grensen for å svare går ved to utelukkede alternativer, ikke tre.",
    },
    {
      question: "Du har utelukket to av fire alternativer på faglig grunnlag, men er usikker mellom de to som står igjen. Hva lønner seg?",
      options: ["Svar — forventet uttelling er +0,25, altså bedre enn de 0 poengene et blankt svar gir", "La stå — med to alternativer igjen er sjansen for å bomme fortsatt større enn gevinsten", "Svar bare dersom du i tillegg har en klar magefølelse for hvilket av de to som stemmer", "La stå — regelen er at du skal svare på de spørsmålene du kan besvare med sikkerhet"],
      explanation: "Med to alternativer igjen treffer du i halvparten av tilfellene, og ½ · (+1) pluss ½ · (−0,5) gir +0,25. Å la et slikt spørsmål stå er derfor et sikkert tap på 0,25 poeng. Overforsiktighet koster like reelt som gambling, bare mindre synlig.",
    },
    {
      question: "Hva vil det si at velferdsstatsbegrepet står flatt i en besvarelse?",
      options: ["At velferdsstaten omtales uten at både de-kommodifisering og de-familisering skrives ut", "At velferdsstaten omtales uten at de tre regimetypene navngis og plasseres geografisk", "At velferdsstaten omtales uten at utgiftsnivået og finansieringen av ordningene tallfestes", "At velferdsstaten omtales uten at forholdet til arbeidslinja og aktivitetskravene berøres"],
      explanation: "Begrepsforflatning måles mot forfatterens distinksjoner, og hos Esping-Andersen er det de to frigjøringsbegrepene som gjøres til prøve: frigjøring fra markedet og frigjøring fra familien. Å ramse opp de tre regimetypene er en klassifikasjon og ikke det samme, og tallfesting av utgifter er ikke et sosiologisk begrepskrav i det hele tatt.",
    },
    {
      question: "En besvarelse dokumenterer innkallingsgapet grundig og konkluderer med at det norske arbeidsmarkedet i praksis er lukket for etterkommere av innvandrere. Hva er problemet?",
      options: ["Mobilitetsfunnene som peker motsatt vei er utelatt, og konklusjonen blir sterkere enn belegget", "Innkallingsgapet er et korrelasjonsfunn, og et felteksperiment kan ikke brukes kausalt i et langsvar", "Diskriminering er et for bredt begrep til å kunne belegges med ett enkelt studiedesign", "Konklusjonen er for skarp, og en drøfting skal alltid ende i en avveiende formulering"],
      explanation: "Feilen er at halve empirien mangler: etterkommere viser samtidig betydelig utdannings- og yrkesmobilitet, og et lukket arbeidsmarked ville ikke gitt den bevegelsen. Korrespondansetesten gir nettopp kausalt belegg fordi den varierer én egenskap, så designet er ikke problemet, og en skarp konklusjon er lovlig når begge sider først er prøvd.",
    },
    {
      question: "Oppgaven ber om å drøfte hvilke muligheter minoriteter har i Norge, og kandidaten leverer en grundig analyse av etterkommernes yrkesmobilitet. Hva er feilen?",
      options: ["Svaret treffer nabospørsmålet: mobilitet er registrert bevegelse, muligheter er hva som står åpent", "Svaret mangler pensumforankring, siden mobilitetsforskningen ligger helt utenfor emnets eget pensum", "Svaret bruker et for snevert mobilitetsbegrep, siden bare den absolutte formen er behandlet", "Svaret mangler en redegjørelsesdel, siden mobilitetsbegrepene aldri blir definert underveis"],
      explanation: "Analysen kan være både presis og godt belagt og likevel treffe feil adresse, fordi nøkkelvariabelen i oppgaven er mulighetene og ikke bevegelsen. Mobilitetsforskningen er godt innenfor pensum, og problemet forsvinner ikke ved å definere flere mobilitetsbegreper — det forsvinner ved å knytte funnene til det oppgaven spurte om.",
    },
    {
      question: "Hvilke tre navn er pensumforankret i emnet og kan bæres inn i et langsvar, selv om de også er faghistoriske størrelser?",
      options: ["Goffman, Beck og Berger, som eier stigma, risikosamfunnet og sekulariseringstradisjonen", "Marx, Weber og Durkheim, som utgjør klassikerlaget og er felles referanser i alle temaer", "Mills, Bourdieu og Foucault, som klassikere med begreper om makt, kapital og disiplin", "Simmel, Tönnies og Durkheim, som klassikere med begreper om bånd, form og solidaritet"],
      explanation: "Riktig svar er de tre som står i emnets eget pensum med hvert sitt begrep: stigma i samhandlingen, risikosamfunnet med skillet mellom produksjon og fordeling av risiko, og sekulariseringstradisjonen. Den øvrige klassikerkanonen er faghistorie- og flervalgsstoff i dette emnet, og systematisk gjennomgang av den hører til i teoriemnet SOS2001.",
    },
    {
      question: "Hva er den beste testen på om innledningen i et langsvar er for lang?",
      options: ["Tell ordene som står før det første pensumbegrepet dukker opp — over 150 er for mye", "Tell setningene i første avsnitt — flere enn fem er for mye i et fire timers format", "Tell hvor mange minutter du brukte på å skrive den — over fem minutter er for mye", "Tell hvor mange ganger oppgaveteksten gjentas — mer enn én gjengivelse er for mye"],
      explanation: "Testen måler det som faktisk koster, nemlig hvor lenge svaret går uten å gjøre noe som vurderingsaksene måler. Antall setninger og skrivetid sier lite når en kort innledning kan være tett og en lang kan være tom, og gjentakelse av oppgaveteksten er et annet og mindre problem.",
    },
    {
      question: "Hva må til for at et paradoks er båret gjennom en drøfting, og ikke bare pyntet på?",
      options: ["Begge sider står fortsatt i nest siste avsnitt, med hvert sitt konkrete funn", "Spenningen er formulert i innledningen og gjentatt presist i konklusjonen", "Begge posisjonene er beskrevet grundig etter hverandre, hver i sitt eget avsnitt", "Konklusjonen unngår å velge side, slik at begge lesninger forblir mulige for leseren"],
      explanation: "Kravet er at dobbeltheten fortsatt er i arbeid der drøftingen lander, og at begge sidene har empirisk belegg — et paradoks med funn på den ene siden og en påstand på den andre er navn uten funn forkledd som nyanse. Å nevne spenningen i ytterpunktene, eller å beskrive to posisjoner uten å prøve dem mot hverandre, er nettopp de to formene feilen tar. Å lande skarpt er lovlig og ofte en styrke.",
    },
    {
      question: "Hvilke fire ledd må stå der før et funn er konkret nok til å bære et argument?",
      options: ["Hvem som gjorde studien, hvilket design den brukte, hva den fant, og hva det betyr i svaret", "Hvem som gjorde studien, når den ble publisert, hvor stort utvalget var, og hva den fant", "Hvilket begrep den prøver, hvilken metode den brukte, hva den fant, og hvem som kritiserte den", "Hvem som gjorde studien, hvilket land den gjaldt, hva den fant, og hva som er gjort senere"],
      explanation: "Det siste leddet er det som skiller aktiv empiri fra pynt: funnet skal gjøre noe for påstanden i din tekst, typisk utelukke en konkurrerende forklaring. Årstall, utvalgsstørrelse, land og senere forskning er nyttige detaljer, men ingen av dem gjør at funnet arbeider i argumentet.",
    },
    {
      question: "Oppgaven navngir klasse, kjønn og etnisitet. Kandidaten skriver flere sider om klasse og nevner de to andre i en sluttsetning. Hva er den faglige innvendingen?",
      options: ["To av dimensjonene er nevnt uten mekanisme og uten et funn, og er dermed ikke behandlet", "Klassedimensjonen er behandlet for grundig, og et langsvar skal fordele plassen jevnt", "Interseksjonalitet er ikke nevnt, og begrepet er obligatorisk når flere akser står sammen", "Rekkefølgen er gal, siden dimensjonene skal behandles i den rekkefølgen oppgaven angir"],
      explanation: "Kravet er at hver navngitt dimensjon får en mekanisme og et belegg, ikke at plassen fordeles likt — en uttalt prioritering er lovlig når den betales med dybde. Interseksjonalitet er et sterkt grep, men gjør bare arbeid når et konkret møtepunkt skrives ut, og rekkefølgen i seg selv er uten betydning.",
    },
    {
      question: "Hvordan konverteres egen erfaring til noe som teller i et sosiologisvar?",
      options: ["Begrepet først, erfaringen som illustrasjon av mekanismen, og deretter et navngitt funn", "Erfaringen først som utgangspunkt, deretter begrepet som forklaring på det du opplevde", "Erfaringen brukt som belegg, med et pensumbegrep satt inn som støtte i samme avsnitt", "Erfaringen holdt helt utenfor, siden personlige eksempler ikke hører hjemme i besvarelser"],
      explanation: "Rekkefølgen er selve poenget: erfaringen viser hva mekanismen ser ut som, men den beviser ingenting, og derfor må begrepet stå foran og funnet bak. Å starte i erfaringen gjør lett hele avsnittet til synsing, og å bruke den som belegg er nettopp det som ikke er lov. Å utelate erfaringen helt er unødvendig — den er lovlig som illustrasjon.",
    },
    {
      question: "Hva innebærer det at begge eksamensdelene må bestås hver for seg?",
      options: ["Stryk på flervalgsdelen gir stryk på hele eksamen, selv med et svært sterkt langsvar", "Karakteren settes som et gjennomsnitt, slik at en svak del kan trekkes opp av en sterk", "Flervalgsdelen må bestås først, og langsvaret rettes bare dersom den delen er bestått", "Begge delene må ha samme karakter for at eksamen skal regnes som bestått i emnet"],
      explanation: "Delene vektes ulikt, med en tredel på flervalg og to tredeler på langsvar, men vektingen gjelder bare mellom to beståtte deler — en strøket del kan ikke reddes av den andre. Rettingen skjer ikke sekvensielt, og delene trenger selvsagt ikke ende på samme karakter.",
    },
    {
      question: "Hvorfor fører tidsfellen så ofte til at drøftingsdelen mangler?",
      options: ["Drøftingen skrives sist, og det er derfor nettopp den krymper når skrivetiden tar slutt", "Drøftingen krever mer kildearbeid, og kildene er det som tar lengst tid å hente fram", "Drøftingen er den vanskeligste delen, og vanskelige deler utsettes systematisk av kandidater", "Drøftingen har ingen fast form, og formløse deler tar alltid lengre tid enn strukturerte"],
      explanation: "Sammenhengen er strukturell og ikke psykologisk: langsvaret bygges med redegjørelsen først, så når innledningen og begrepshistorien har spist av tiden, er det den siste delen som blir stående halvferdig. Drøftingen har dessuten en fast form i denne boka, og eksamen er uten hjelpemidler utover ordbok, så kildearbeid underveis er ikke tidstyven.",
    },
    {
      question: "Hvilken av vurderingsaksene rammes direkte når en forsker nevnes uten at resultatet brukes?",
      options: ["Aktiv empiribruk, altså kravet om funn og ikke bare navn, som skiller B og A fra C", "Presis begrepsbruk fra riktig pensumtekst, som er grunnkravet i enhver redegjørelse", "Nyanse og dobbelthet, altså kravet om at paradokset bæres gjennom hele drøftingen", "Det selvstendige og kritiske sluttgrepet, som er markøren for beste karakter"],
      explanation: "Aksen for empiribruk måler om konkrete funn er i arbeid i argumentet, og et navn uten resultat er nettopp det den fanger. Begrepsaksen rammes av flate definisjoner, dobbelthetsaksen av ensidighet, og sluttgrepsaksen av at svaret mangler et kritisk siste ledd — tre andre feil med tre andre navn.",
    },
  ],
  'sos1004-8-3': [
    {
      question: "Hva er kjernen i statistisk diskriminering, slik begrepet brukes i norsk arbeidsmarkedsforskning?",
      options: ["Gruppetilhørighet brukes som informasjonssnarvei når arbeidsgiveren er usikker på den enkelte", "Motvilje mot gruppen gjør at arbeidsgiveren heller vil ansette en søker med annen bakgrunn", "Feilaktige forestillinger om gruppen legges til grunn selv om gjennomsnittet ikke stemmer", "En regel som virker lik for alle slår systematisk skjevt ut for én bestemt gruppe søkere"],
      explanation: "Statistisk diskriminering er at et antatt gruppegjennomsnitt settes inn der informasjonen om den enkelte er tynn. Motvilje mot gruppen er smaksdiskriminering, altså fordomsbasert diskriminering, og et gjennomsnitt som ikke stemmer er stereotypidiskriminering. En tilsynelatende nøytral regel med skjev virkning er indirekte diskriminering, som er en annen kategori.",
    },
    {
      question: "Hva skiller stereotypidiskriminering fra statistisk diskriminering?",
      options: ["Om forestillingen om gruppen stemmer med et gjennomsnitt som faktisk finnes", "Om arbeidsgiveren føler motvilje mot gruppen eller er nøytralt innstilt til den", "Om forskjellsbehandlingen skjer ved første sortering eller senere i ansettelsen", "Om beslutningen tas av et enkeltmenneske eller følger av rutinene i selskapet"],
      explanation: "Begge former bruker gruppen som informasjon om individet, og forskjellen ligger i om informasjonen er riktig. Motvilje er kjennetegnet på smaksdiskriminering og ikke det som skiller disse to. Hvor i prosessen forskjellsbehandlingen skjer, og om den er individuell eller strukturell, er andre inndelinger som går på tvers av typologien.",
    },
    {
      question: "Hva kan en korrespondansetest fastslå, og hva kan den ikke fastslå?",
      options: ["At det forskjellsbehandles ved første ansettelsessteg, men ikke hvilket motiv som lå bak", "Hvilket motiv arbeidsgiveren hadde, men ikke hvor omfattende forskjellsbehandlingen er", "At forskjellene i sysselsetting er reelle, men ikke om de også gjelder lønnsnivået", "At holdningene i befolkningen har endret seg, men ikke om praksis har endret seg"],
      explanation: "Designet holder alt annet likt og varierer én egenskap, og gir dermed kausalt belegg for at det forskjellsbehandles ved overgangen fra søknad til kontakt. Motivet observeres aldri, bare responsen, så et innkallingsgap er like forenlig med en informasjonssnarvei som med en preferanse. Testen måler heller ikke holdninger, men faktisk atferd hos arbeidsgivere.",
    },
    {
      question: "Hvorfor er det avgjørende for drøftingen at innkallingsgapet også gjelder søkere som er født og utdannet i Norge?",
      options: ["Fordi forklaringen om manglende norske kvalifikasjoner da er utelukket ved konstruksjon", "Fordi gapet da må skyldes motvilje og ikke en snarvei bygget på antatte gjennomsnitt", "Fordi funnet da gjelder alle ledd i ansettelsen og ikke bare den aller første sorteringen", "Fordi gruppen da blir stor nok til at forskjellen lar seg måle med god statistisk presisjon"],
      explanation: "Nettopp for den gruppen oppgaven spør om, faller den vanligste alternative forklaringen bort: kvalifikasjonene er norske og identiske i søknadsparene. Funnet sier fortsatt ingenting om motivet, og det gjelder fortsatt bare det første ansettelsessteget. Utvalgsstørrelse er et helt annet spørsmål enn hvilke forklaringer designet utelukker.",
    },
    {
      question: "Hva består integreringsparadokset i?",
      options: ["Betydelig oppadgående mobilitet og dokumentert forskjellsbehandling finnes i samme gruppe", "Utdanningsnivået stiger raskt, mens tilknytningen til norsk arbeidsliv svekkes tilsvarende mye", "Innvandrergenerasjonen lykkes bedre enn etterkommerne, stikk i strid med det teorien sier", "Forskjellsbehandlingen øker i takt med at gruppens utdanningsnivå nærmer seg majoritetens"],
      explanation: "Paradokset er at etterkommerne beveger seg tydelig oppover i utdanning og yrke samtidig som forskjellsbehandling ved ansettelser er kausalt dokumentert. Det handler ikke om at tilknytningen svekkes, og heller ikke om at innvandrergenerasjonen skulle klare seg bedre enn barna. En påstand om at forskjellsbehandlingen øker med utdanningsnivået er noe annet enn at de to funnene gjelder samtidig.",
    },
    {
      question: "Hvorfor motsier ikke mobilitetsfunnene og innkallingsgapet hverandre?",
      options: ["De måler mot ulike sammenlikningsgrunnlag: foreldregenerasjonen og jevnaldrende med like kvalifikasjoner", "De gjelder ulike tidsrom, slik at gapet ble dokumentert lenge før mobiliteten ble målt i registrene", "De gjelder ulike grupper, slik at mobiliteten er målt blant innvandrere og gapet blant etterkommere", "De bruker ulike utfallsmål, slik at det ene handler om lønnsnivået og det andre utelukkende om yrke"],
      explanation: "Mobiliteten måles mot der familien startet, mens forskjellsbehandlingen måles mot jevnaldrende med identiske kvalifikasjoner. To sammenlikninger gir to svar, og begge er sanne. Forklaringer som bygger på ulike tidsrom, ulike grupper eller ulike utfallsmål bommer på at begge funnene gjelder den samme gruppen i det samme tidsrommet.",
    },
    {
      question: "Hva kjennetegner aktiv empiribruk i et langsvar, til forskjell fra å nevne forskningen?",
      options: ["Funnet brukes til å utelukke eller svekke en konkurrerende forklaring i selve argumentet", "Forskeren navngis presist, slik at sensor ser at pensumlitteraturen faktisk er lest gjennom", "Flere studier på samme tema listes opp, slik at bredden i forskningen kommer tydelig fram", "Designet beskrives i detalj, slik at leseren kan vurdere kvaliteten på selve undersøkelsen"],
      explanation: "Aktiv empiribruk er at resultatet gjør en jobb i argumentet, typisk ved å fjerne en alternativ forklaring. Å navngi forskeren eller liste opp flere studier viser lesing, men avgjør ingenting. En grundig designbeskrivelse er nyttig som støtte, men blir passiv hvis funnet aldri kobles til det spørsmålet oppgaven stiller.",
    },
    {
      question: "En besvarelse skriver: «Hermansen og Midtbøen har også forsket på etterkommere i Norge.» Hvilken feil er dette?",
      options: ["Navn uten funn — forskeren nevnes, men resultatet brukes aldri i argumentet", "Å miste dobbeltheten — drøftingen velger side, og paradokset forsvinner ut", "Å svare på nabospørsmålet — svaret behandler et spørsmål som ligger like ved", "Begrepsforflatning — fagbegrepet brukes uten distinksjonen mot nabobegrepet"],
      explanation: "Setningen forteller hvem som har forsket, ikke hva forskningen fant, og gjør derfor ingen jobb i argumentet. Å miste dobbeltheten handler om at den ene siden av paradokset forsvinner, og å svare på nabospørsmålet handler om å behandle feil variabel. Begrepsforflatning gjelder redegjørelsen, ikke bruken av en studie.",
    },
    {
      question: "Hva mangler typisk i en besvarelse som stopper på C i stedet for å nå B på denne oppgaven?",
      options: ["Ett funn til brukt aktivt, og en dobbelthet som bæres med eget belegg på begge sider", "En presis redegjørelse for de tre diskrimineringstypene og mekanismen i hver enkelt av dem", "En tydelig konklusjon til slutt som sier hva som veier tyngst i det samlede bildet", "Et større omfang, slik at besvarelsen kommer opp i det ordantallet formatet krever"],
      explanation: "C-nivået har som regel både redegjørelse og drøfting på plass, og det som mangler er aktiv empiri utover det første funnet og en spenning som bæres helt fram. En besvarelse på C kan godt ha både en riktig begrepsgjennomgang og en klar konklusjon. Omfang er ikke kriteriet — et kortere svar med to aktive funn slår et langt svar med ett.",
    },
    {
      question: "Hva er et sluttgrep som treffer den fjerde vurderingsaksen på denne oppgaven?",
      options: ["At metoden dokumenterer ett ledd i prosessen, slik at kunnskapen er skjevt fordelt", "At forskjellsbehandling er dokumentert i flere studier med det samme robuste resultatet", "At temaet er sammensatt, og at det derfor trengs mer forskning på hele dette feltet", "At tiltak mot forskjellsbehandling bør rettes inn mot den første sorteringen av søknader"],
      explanation: "Et kritisk sluttgrep peker på noe bestemt, som at belegget er sterkest der metoden rekker, ikke nødvendigvis der problemet er størst. Å gjenta at funnet er robust er en oppsummering, og «det trengs mer forskning» er en tomgangssetning uten adresse. Et tiltaksforslag er en normativ posisjon og ikke en kritisk observasjon om kunnskapsgrunnlaget.",
    },
    {
      question: "Hvorfor bør nøkkelvariabelen avgrenses tidlig i denne besvarelsen?",
      options: ["Fordi belegget er ulikt sterkt for innkalling, sysselsetting og posisjon i yrkeslivet", "Fordi en besvarelse alltid skal åpne med en presis definisjon av temaet den behandler", "Fordi drøftingen ellers blir for lang i forhold til den tiden formatet gir kandidaten", "Fordi begrepene i redegjørelsen ellers ikke lar seg knytte til norske forskningsfunn"],
      explanation: "Arbeidsmarkedsutfall er flere størrelser, og de er dekket av ulike metoder med ulik styrke, så konklusjonen avhenger av hvilket utfall som måles. En definisjon av temaet er noe annet enn en avgrensning av utfallet. Avgrensningen handler heller ikke om tidsbruk eller om hvorvidt begrepene kan kobles til forskning.",
    },
    {
      question: "Hvorfor er etterkommernes bevegelse fra foreldregenerasjonen i stor grad absolutt mobilitet?",
      options: ["Fordi den teller faktisk bevegelse oppover, uten å måle hvordan sjansene er fordelt", "Fordi den måler sjanselikhet mellom grupper med ulikt utgangspunkt i samme kohort", "Fordi den gjelder utdanning og ikke yrke, og utdanning er lettere å måle i registrene", "Fordi den er målt med registerdata, som gir kausalt belegg for bevegelsen som skjer"],
      explanation: "Absolutt mobilitet er den rå bevegelsen, drevet blant annet av at yrkesstrukturen selv har endret seg og gitt flere posisjoner som krever lang utdanning. Sjanselikhet mellom ulike utgangspunkt er relativ mobilitet, som er det andre begrepet i paret. Skillet handler verken om hvilken variabel som måles eller om registerdata gir kausalt belegg, for observasjonsdata viser samvariasjon.",
    },
  ],
  'sos1004-8-4': [
    {
      question: "Hva er den presise forskjellen mellom de-kommodifisering og de-familisering hos Esping-Andersen?",
      options: ["De-kommodifisering måler uavhengighet av markedet, mens de-familisering måler uavhengighet av familierelasjoner", "De-kommodifisering måler uavhengighet av familien, mens de-familisering måler uavhengighet av selve arbeidsmarkedet", "De-kommodifisering måler ytelsenes samlede størrelse, mens de-familisering måler hvor mange som mottar dem", "De-kommodifisering gjelder rettigheter til alle, mens de-familisering gjelder rettigheter til yrkesaktive"],
      explanation: "De-kommodifisering er graden av at man kan leve akseptabelt uten å måtte selge arbeidskraften sin, altså uavhengighet av markedet; de-familisering er graden av at man kan gjøre det uavhengig av familierelasjoner. Den nære fellen er å bytte om de to relasjonene, som er den vanligste enkeltfeilen på begrepsparet. Å måle begrepene på ytelsenes størrelse eller på mottakerantall er heller ikke riktig: de måles på henholdsvis erstatningsgrad og varighet, og på tjenestetilbud.",
    },
    {
      question: "Hvilken kombinasjon kjennetegner det sosialdemokratiske regimet, og hva skiller det fra det konservative?",
      options: ["Høy de-kommodifisering og høy de-familisering; det konservative har høy de-kommodifisering, men lav de-familisering", "Høy de-kommodifisering og lav de-familisering; det konservative har høy de-familisering, men lav de-kommodifisering", "Lav de-kommodifisering og høy de-familisering; det konservative har høy skår på begge dimensjonene", "Høy skår på begge dimensjonene; det konservative har lav skår på begge og bygger på markedet"],
      explanation: "Begge de sjenerøse regimene kan ha høy de-kommodifisering, så det er de-familiseringen som skiller dem: det konservative forutsetter at familien tar omsorgsansvaret. Fellen er å tro at forskjellen ligger i sjenerøsiteten. Regimet med lav skår på begge dimensjonene og markedet som hovedleverandør er det liberale, ikke det konservative.",
    },
    {
      question: "Hva finner Hansen og Uvaag om sosial mobilitet i Norge?",
      options: ["Den absolutte mobiliteten har vært betydelig, mens den relative mobiliteten har holdt seg seig, særlig i toppen", "Den relative mobiliteten har økt kraftig, mens den absolutte mobiliteten har stått stille siden etterkrigstiden", "Både den absolutte og den relative mobiliteten har økt jevnt gjennom hele etterkrigstiden i alle klasseposisjoner", "Både den absolutte og den relative mobiliteten er lav, slik at Norge skiller seg lite fra det liberale regimet"],
      explanation: "Registerdata som kobler foreldre og barn over flere fødselskull, gir et dobbelt bilde: nivået er løftet, også i bunnen, mens sammenhengen mellom foreldrenes og barnas posisjon består og er sterkest i toppen. Fellen er å velge én av de to sidene, noe som gjør et paradoks om til en ensidig påstand. Å hevde at begge deler har økt jevnt, eller at begge er lave, går på tvers av funnet i hver sin retning.",
    },
    {
      question: "Hva er forskjellen på horisontal og vertikal kjønnsdeling hos Teigen og Skjeie?",
      options: ["Horisontal deling er at kvinner og menn arbeider i ulike sektorer, vertikal at de fordeler seg ulikt oppover i hierarkiene", "Horisontal deling er at kvinner og menn når ulike posisjoner, vertikal at de arbeider i ulike sektorer og yrker", "Horisontal deling gjelder lønnsforskjeller i samme yrke, vertikal gjelder forskjeller i samlet arbeidstid mellom kjønnene", "Horisontal deling gjelder offentlig sektor, mens vertikal gjelder privat sektor og de delene som er utsatt for konkurranse"],
      explanation: "Horisontal deling handler om hvilke yrker og sektorer folk arbeider i, vertikal om hvilke posisjoner de når innenfor samme sektor. Fellen er å bytte om de to, siden begge begrepene beskriver kjønnsdeling og lett glir over i hverandre. Lønnsforskjeller i samme yrke og skillet mellom offentlig og privat sektor er andre fenomener, som ingen av begrepene navngir.",
    },
    {
      question: "Hvilket funn eier Hermansen og Midtbøen i utjevningsdrøftingen, og hvilket eier korrespondansetestene?",
      options: ["Hermansen og Midtbøen viser etterkommernes oppadgående mobilitet; korrespondansetestene viser innkallingsgapet ved ansettelse", "Hermansen og Midtbøen viser innkallingsgapet ved ansettelse; korrespondansetestene viser etterkommernes oppadgående mobilitet", "Hermansen og Midtbøen viser lønnsforskjeller mellom sektorer; korrespondansetestene viser hvilket motiv arbeidsgiveren har", "Hermansen og Midtbøen viser at gapet mot majoriteten er lukket; korrespondansetestene viser at diskriminering forklarer hele gapet"],
      explanation: "Den registerbaserte forskningen følger etterkommere gjennom utdanning og tidlig karriere og finner betydelig oppadgående mobilitet, mens korrespondansetestene varierer bare navnet i ellers like søknader og finner systematisk lavere innkallingsrate. Fellen er å bytte om hvilken studie som eier hvilket funn. Verken lukket gap eller motivet bak diskrimineringen følger av noen av designene.",
    },
    {
      question: "En kandidat nevner klasse, kjønn og etnisitet i hvert sitt korte avsnitt uten funn under noen av dem. Hvilken feil er dette?",
      options: ["Feil #7 — flere dimensjoner behandlet uten dybde og uten at det vises hvordan de virker sammen", "Feil #3 — begrepsforflatning, fordi fagbegrepene brukes uten distinksjonen som gjør dem presise", "Feil #6 — å svare på nabospørsmålet, fordi nøkkelvariabelen aldri blir navngitt eller avgrenset", "Feil #1 — manglende drøftingsdel, fordi svaret bare redegjør og aldri kommer til en vurdering"],
      explanation: "Oppgaveformen åpner for én eller flere dimensjoner: velger man flere, kreves det at de virker sammen, og det er nettopp dette kravet som brytes her. Fellen er å lese feilen som begrepsforflatning, men problemet er ikke at begrepene er upresise — det er at bredden ikke er fulgt av dybde. Nøkkelvariabelen kan være navngitt, og en drøftingsdel kan finnes, uten at det redder bredden.",
    },
    {
      question: "Hva skiller en besvarelse på terskelen fra en besvarelse på nest beste nivå i denne oppgaven?",
      options: ["At funnene brukes aktivt i argumentet og at begge sidene av målestokkproblemet står igjen i nest siste avsnitt", "At besvarelsen er vesentlig lengre og trekker inn atskillig flere pensumforfattere enn den rekker å bruke aktivt", "At redegjørelsen får vesentlig mer plass enn drøftingen, slik at begrepsapparatet gjennomgås grundig først", "At konklusjonen er forsiktig formulert og lander på at bildet er sammensatt framfor å ta et klart standpunkt"],
      explanation: "Aktiv empiribruk og båret dobbelthet er de to aksene som skiller nest beste nivå fra terskelen, og dobbeltheten testes på nest siste avsnitt. Fellen er å tro at lengde og antall navn løfter svaret, siden et navn uten funn ikke teller som pensumbruk. En overvekt av redegjørelse og en forsiktig landing trekker snarere ned, fordi drøftingen skal ha om lag to tredeler av plassen.",
    },
    {
      question: "Hva kreves for at interseksjonalitet skal telle som et løftegrep i en utjevningsdrøfting?",
      options: ["At krysningspunktet avdekker en egen mekanisme som analysen av hver dimensjon for seg ikke ville fanget", "At alle de tre dimensjonene klasse, kjønn og etnisitet er nevnt, slik at bredden i oppgaven blir dekket", "At ulempene fra hver dimensjon summeres, slik at den samlede belastningen på posisjonen kommer fram", "At begrepet defineres tidlig i besvarelsen og knyttes til forskningstradisjonen det opprinnelig kommer fra"],
      explanation: "Kravet er at begrepet gjør en jobb: krysningspunktet må endre hva som kan sies, ikke bare navngis. Fellen er den additive lesningen, der ulemper legges sammen — en interseksjonell analyse spør om posisjonen har egne mekanismer. Å nevne alle dimensjonene eller å plassere begrepet historisk er heller ikke nok, siden ingen av delene viser hva krysningspunktet avdekker.",
    },
  ],
  'sos1004-8-5': [
    {
      question: "Hva er nøkkelvariabelen i oppgaven «… drøft deretter fruktbarhetsfallet det siste tiåret i lys av endret sosial ulikhet i fertilitet»?",
      options: ["Hvordan barnetall og barnløshet fordeler seg mellom sosiale posisjoner", "Nivået på det samlede fruktbarhetstallet og hvor raskt det har falt", "Familiepolitikkens virkemidler og hvordan de er bygget ut siden 1970-tallet", "Den biologiske evnen til å få barn og hvordan den varierer med alder"],
      explanation: "Oppgaven navngir fordelingen selv: hvem som får barn, hvor mange, og hvem som forblir barnløse, etter utdanning, arbeidsmarkedstilknytning og kjønn. Å levere en analyse av fruktbarhetsnivået i stedet er den nære fellen, og den koster karakter selv om analysen er god. Politikken hører til redegjørelsesleddet, og «fertilitet» betyr her realisert barnetall, ikke biologisk evne.",
    },
    {
      question: "Hvilken av Lappegårds mekanismer forklarer best at barnløsheten har steget mest blant menn med kort utdanning?",
      options: ["Endret pardannelse og utdanningshomogami, som snevrer inn partnermarkedet", "Endret mulighetsstruktur og økonomisk usikkerhet i etableringsfasen", "Strukturelle endringer i overgangen til voksenlivet, som mister sin faste sekvens", "Endret verdisyn, der yngre menn prioriterer arbeid framfor familieliv"],
      explanation: "Sterk utdanningshomogami i en befolkning der kvinner i gjennomsnitt tar lengre utdanning enn menn, gjør gruppen av aktuelle partnere minst for menn med kort utdanning og svak arbeidsmarkedstilknytning. Usikkerhetsmekanismen og livsløpsmekanismen virker også, men ingen av dem forklarer den kjønnede skjevheten. En verdiforklaring er ikke Lappegårds, og den motsies av at fruktbarhetsidealene har holdt seg stabile.",
    },
    {
      question: "Hvorfor er det et poeng i drøftingen at de uttrykte fruktbarhetsidealene har holdt seg stabile?",
      options: ["Fordi det utelukker at fallet skyldes at befolkningen ønsker færre barn", "Fordi det viser at spørreundersøkelser om barneønsker er lite pålitelige", "Fordi det viser at fallet er konsentrert blant dem som aldri ønsket barn", "Fordi det viser at det samlede fruktbarhetstallet er et upresist mål"],
      explanation: "Hadde fallet skyldtes en verdiendring, skulle idealene ha falt sammen med den realiserte fruktbarheten. Når ønskene står stille og utfallet faller, må forklaringen ligge mellom ønske og utfall, altså i mulighetsstruktur, pardannelse og livsløp. Å mistenkeliggjøre tallene eller å omdefinere hvem fallet rammer, er begge forsøk på å redde verdiforklaringen, og de stemmer ikke med at fallet er bredt.",
    },
    {
      question: "Hva sier fruktbarhetsparadokset?",
      options: ["At fruktbarheten faller tross en av verdens mest familievennlige politikker", "At familiepolitiske virkemidler er uten dokumentert virkning på atferd", "At det absolutte fødselstallet stiger i en periode der barn per kvinne går ned", "At folk ønsker seg flere barn i de landene der barn koster mest å ha"],
      explanation: "Paradokset er at politikken har dokumenterte virkninger på det den var innrettet mot, og at fruktbarheten likevel har falt gjennom den perioden apparatet har vært mest komplett. Det er ikke en påstand om at virkemidlene er uten effekt. At fødselstall og fruktbarhetstall kan bevege seg ulikt, er en annen distinksjon, og den handler om alderssammensetning.",
    },
    {
      question: "Hva er hovedgrunnen til at familiepolitikken ikke kan reversere fruktbarhetsfallet?",
      options: ["Virkemidlene griper i én mekanisme, mens to av tre ligger utenfor rekkevidden", "Virkemidlene er for små i omfang sammenliknet med dem i de andre nordiske landene", "Virkemidlene ble innført for sent til å kunne påvirke de berørte årgangene", "Virkemidlene virker bare på husholdninger der begge foreldrene er i arbeid"],
      explanation: "Permisjon, barnehageplass og overføringer reduserer kostnaden og usikkerheten ved å få barn, men de påvirker verken hvem som finner sammen med hvem eller formen på overgangen til voksenlivet. Insentiver flytter beslutninger, ikke strukturer. Norsk familiepolitikk er dessuten blant de mest utbygde som finnes, så omfang er ikke forklaringen.",
    },
    {
      question: "Hva kjennetegner den endrede klasseprofilen i norsk fruktbarhet?",
      options: ["Det klassiske mønsteret er svekket, og barnløsheten er høyest der arbeidstilknytningen er svakest", "Det klassiske mønsteret er forsterket, slik at de høyest utdannede nå får klart færrest barn av alle", "Barnløsheten har steget helt jevnt i alle utdanningsgrupper, slik at profilen er blitt flat", "Barnløsheten har steget mest blant kvinner i toppen av utdannings- og inntektsfordelingen"],
      explanation: "Mønsteret der lang utdanning fulgtes av færrest barn, er svekket og for enkelte grupper snudd, mens barnløsheten har steget mest der arbeidsmarkedstilknytningen er svakest, og markert mer blant menn enn blant kvinner. Å beskrive profilen som uendret eller forsterket er den vanligste feilretningen. En helt flat utvikling ville dessuten fjernet nettopp det fordelingsfunnet oppgaven ber om.",
    },
    {
      question: "En besvarelse har riktige tall, riktige årstall og nevner Lappegård, men bruker bare mekanismen om økonomisk usikkerhet og roser familiepolitikken uten å sette den mot fallet. Hvilke to feil er dette?",
      options: ["Begrepsforflatning og det å miste dobbeltheten", "Navn uten funn og det å svare på nabospørsmålet", "Synsing uten pensum og manglende drøftingsdel", "Tidsfellen og import av klassikerstoff utenfor pensum"],
      explanation: "Å redusere tre mekanismer til én i hverdagsform er begrepsforflatning, og å rose politikken uten å stille den mot fallet gjør at paradokset aldri blir en spenning å bære. Besvarelsen har både redegjørelse og drøfting, og den bygger på pensum, så den er ikke et tilfelle av synsing eller manglende ledd. Den svarer heller ikke på et nabospørsmål, siden fordelingen faktisk er berørt.",
    },
    {
      question: "Hva er forholdet mellom en skarp konklusjon og kravet om å bære dobbeltheten i et langsvar?",
      options: ["Dobbeltheten krever at begge sider står med belegg, ikke at man lar være å veie", "Dobbeltheten krever at svaret avslutter uten å si hvilken av sidene som veier tyngst", "Dobbeltheten krever at begge sidene får nøyaktig like mye plass i besvarelsen", "Dobbeltheten krever at motargumentet presenteres etter selve konklusjonen"],
      explanation: "Kravet er at begge sidene fortsatt står med hvert sitt funn i nest siste avsnitt; deretter er en begrunnet vekting selve toppformen. Å nekte å konkludere er ikke det samme som å nyansere, og verken lik plassfordeling eller en bestemt rekkefølge er noe krav. Det som vurderes, er begrunnelsen, aldri retningen på landingen.",
    },
  ],
  'sos1004-8-6': [
    {
      question: "Hva er det analytiske kjennetegnet på kulturell rasisme, også kalt ny rasisme?",
      options: ["At kultur eller religion framstilles som uforanderlig og underlegen for hele gruppen", "At mennesker deles inn i grupper med medfødte, arvelige egenskaper som rangeres", "At ulikhet er innebygd i institusjoners rutiner uavhengig av hva folk mener", "At en arbeidsgiver bruker gruppetilhørighet som en informasjonssnarvei under usikkerhet"],
      explanation: "Kulturell rasisme bytter ut begrunnelsen, men beholder funksjonen: gruppens medlemmer tilskrives en egenskap de ikke kan tre ut av. Arvelige egenskaper i et hierarki er biologisk rasisme, og ulikhet innebygd i rutiner er strukturell rasisme. Bruk av gruppetilhørighet som informasjonssnarvei er statistisk diskriminering, som ikke forutsetter noe hierarki i det hele tatt.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom rasisme og diskriminering som begreper?",
      options: ["Rasisme er et meningssystem, mens diskriminering er en handling og et utfall", "Rasisme gjelder hudfarge og opphav, mens diskriminering gjelder kjønn og alder", "Rasisme er et politisk begrep, mens diskriminering er et rettslig og faglig begrep", "Rasisme forutsetter alltid hensikt, mens diskriminering kan skje utilsiktet"],
      explanation: "Diskriminering spør hva som skjedde, rasisme spør hvilken forståelse av mennesker som ligger under. Begge begreper kan gjelde etnisitet, og diskrimineringsbegrepet er ikke avgrenset til kjønn og alder. Begge er dessuten faglige begreper, og den strukturelle rasismeforståelsen forutsetter nettopp ikke hensikt.",
    },
    {
      question: "Hva er kjernen i påstanden om nasjonale forskningstradisjoner hos Andersson og Midtbøen?",
      options: ["At kategoriene selv har en historie formet av statsform og forvaltningspraksis", "At forskere i ulike land er uenige fordi de leser forskjellig faglitteratur om temaet", "At rasisme forekommer i ulikt omfang i USA, Frankrike og Storbritannia", "At begrepsvalget avhenger av hvilke metoder forskerne har tilgang til"],
      explanation: "Poenget er ikke at noen tar feil, men at det landet forskningen springer ut av, avgjør hvilke kategorier som ligger klare til bruk. Der staten har registrert kategorien lenge, kan ulikhet måles direkte langs den; der den er fjernet, må forskningen finne andre ord. Gjennomgangen sier ingenting om hvor mye rasisme det finnes i hvert land, og metodetilgang er en følge av kategoriene, ikke opphavet til dem.",
    },
    {
      question: "Hvorfor er det norske begrepsfraværet et funn og ikke en mangel ved kunnskapsgrunnlaget?",
      options: ["Fordi fraværet har en historisk forklaring, mens forskjellsbehandlingen er dokumentert", "Fordi norsk forskning ikke har hatt tilgang til gode data om etniske forskjeller i utfall", "Fordi fenomenet begrepet skulle beskrive, ikke lar seg påvise i norske studier", "Fordi norsk lovgivning forbyr registrering av opplysninger om etnisk bakgrunn"],
      explanation: "At rasekategorier er borte fra forvaltning og dagligtale, henger sammen med et etterkrigsoppgjør der avstanden til rasetenkningens fortid var poenget — samtidig som norsk forskning har dokumentert etnisk forskjellsbehandling grundig med andre begreper. Datagrunnlaget er altså godt, ikke tynt, og felteksperimentet kommer rundt måleproblemet ved å skape variasjonen selv.",
    },
    {
      question: "En oppgave ber om å drøfte hvordan rasisme former etniske minoriteters muligheter. Hvorfor er en ren analyse av etterkommeres mobilitet et utilstrekkelig svar?",
      options: ["Fordi mobilitet er bevegelse mellom posisjoner over tid, mens muligheter er hva som står åpent nå", "Fordi mobilitetsforskningen bygger på registerdata som ikke kan tolkes kausalt slik et eksperiment kan", "Fordi etterkommeres mobilitet er dårlig dokumentert sammenliknet med innkallingsgapet", "Fordi mobilitet handler om klasse og ikke om etnisitet, og derfor er et annet tema"],
      explanation: "Mulighetsbegrepet dekker minst fire dimensjoner som måles hver for seg: jobb, karriere, lønn og anerkjennelse. En mobilitetsanalyse kan være helt korrekt og likevel svare på et spørsmål som ligger ved siden av. Mobilitetsfunnene er godt dokumentert med registerdata, og de gjelder nettopp etniske grupper — problemet er ikke kvaliteten, men at spørsmålet er et annet.",
    },
    {
      question: "Hvilket funn taler sterkest for at en individorientert rasismeforståelse er utilstrekkelig i Norge?",
      options: ["At forskjellsbehandling er dokumentert også der arbeidsgiverne ikke uttrykker motvilje", "At holdningsundersøkelser viser en økning i negative holdninger til minoriteter", "At norsk forvaltning ikke registrerer hudfarge eller religiøs synlighet i offentlig statistikk", "At etterkommere med høyere utdanning oftere arbeider i offentlig enn i privat sektor"],
      explanation: "Et samfunn med positive uttalte holdninger og vedvarende skjeve utfall er nettopp det tilfellet den strukturelle forståelsen ble utviklet for, og korrespondansetestenes intervjudel viser at begrunnelsene oftere handler om usikkerhet enn om motvilje. At registrene mangler kjennetegn, er et måleproblem og ikke et argument om hvor rasismen sitter. En eventuell holdningsendring ville tvert imot styrke den individorienterte forståelsen.",
    },
    {
      question: "Hva er den sterkeste innvendingen mot et strukturelt rasismebegrep?",
      options: ["At et begrep uten krav om hensikt blir så vidt at det slutter å skille mellom fenomener", "At strukturell rasisme er en marginal posisjon i faget som svært få forskere støtter", "At mekanismene begrepet peker på, ikke lar seg dokumentere med kvantitative metoder", "At begrepet stammer fra en amerikansk kontekst og derfor ikke passer i Europa i dag"],
      explanation: "Innvendingen er at det samme ordet da dekker både den som hater og den som ansetter gjennom bekjentskaper uten å tenke seg om, og at ansvarsspørsmålet blir uklart. Strukturell rasisme er en etablert forskningsposisjon, ikke en marginal påstand, og mekanismene som nettverksrekruttering er godt dokumentert i arbeidslivsforskningen. Begrepet institusjonell rasisme fikk dessuten sitt gjennombrudd i britisk sammenheng.",
    },
    {
      question: "Hva viser Fribergs undersøkelser blant unge i Norge?",
      options: ["At etterkommere nærmer seg jevnaldrendes verdier, mens grensen for norskhet trekkes snevrere", "At etterkommere skiller seg stadig mer fra jevnaldrende både i verdier og i orienteringer", "At etterkommere med sterk tilknytning til Norge sjeldnere møter et innkallingsgap i arbeidslivet", "At etterkommere som rapporterer sterk tilknytning til Norge, oftere tar høyere utdanning"],
      explanation: "Tilpasningen skjer, og tilknytningen til Norge rapporteres som sterk, men grensen for hvem som regnes som norsk trekkes snevrere enn både statsborgerskap og faktisk tilpasning skulle tilsi. Det er belegget for at anerkjennelse er en egen dimensjon og ikke en forsinket refleks av strukturell integrering. Innkallingsgapet måles med felteksperiment og ikke med spørreundersøkelser om tilknytning.",
    },
  ],
  'sos1004-8-7': [
    {
      question: "Hvorfor får Del II mest tid i tidsbudsjettet, når Del I også må bestås for seg?",
      options: ["Fordi langsvaret er produksjon der tid omsettes i kvalitet, mens Del I er rekognosering", "Fordi Del II teller to tredeler, og tiden fordeles i samme forhold som vektingen gjør her", "Fordi flervalgsdelen rettes automatisk og teller mindre for den endelige karakteren", "Fordi flervalgsspørsmålene er lettere, og de fleste blir ferdige lenge før tiden er ute"],
      explanation: "Skillet er hva de to delene krever: på flervalgsdelen gjør mer tid sjelden et usikkert spørsmål sikkert, mens disponering, empiri og sluttgrep i langsvaret nesten alltid blir bedre av flere minutter. Vektingen er ikke grunnen, for begge deler må bestås uansett vekt, og at en del rettes automatisk sier ingenting om hvor mye arbeid den krever.",
    },
    {
      question: "Du klarer å utelukke ett av fire alternativer, og står igjen med tre du ikke kan skille. Hva sier regnestykket bak beslutningsregelen?",
      options: ["Forventet uttelling er null, så valget mellom å svare og å la det stå er likegyldig", "Forventet uttelling er positiv, så du bør svare på alle spørsmål av denne typen", "Forventet uttelling er negativ, så du bør konsekvent la slike spørsmål stå ubesvart", "Forventet uttelling kan ikke regnes ut, siden antall alternativer ikke er dokumentert"],
      explanation: "Med ett alternativ utelukket er sjansen én av tre, og gevinsten på +1 veier akkurat opp for to tredelers risiko for −0,5. Den positive forventningen kommer først når to er utelukket, og den negative gjelder blind gjetting uten eliminering. At antallet alternativer på ekte eksamen ikke er dokumentert, endrer ikke regnestykket for fire alternativer, som er det oppgavene her bruker.",
    },
    {
      question: "En kandidat får A på langsvaret, men havner på F på flervalgsdelen. Hva blir resultatet?",
      options: ["Stryk på hele eksamen, fordi hver av de to delene må bestås for seg selv", "Bestått med lav karakter, siden langsvaret teller to tredeler av helheten", "Bestått, fordi et sterkt langsvar kompenserer for en svak flervalgsdel her", "Stryk bare på flervalgsdelen, som kan tas opp igjen som en deleksamen"],
      explanation: "Kravet er at begge deler bestås hver for seg, og vektingen er derfor ikke en gjennomsnittsregning som lar den ene delen bære den andre. Nettopp fordi omtrent 9 av 20 riktige holder til C på Del I, unngås flervalgsstryk med bredde over hele pensum framfor med dybde i noen få temaer.",
    },
    {
      question: "Hvordan er de to langsvarsalternativene i Del II typisk satt sammen, og hva følger av det for lesingen?",
      options: ["Ett alternativ fra hver akse de fleste terminene, så behersk én akse i dybden og den andre til C-nivå", "Ett alternativ fra hver akse i alle terminene, så du kan konsentrere hele lesingen om den ene aksen", "Begge alternativene fra samme akse, som varierer fra år til år, så all lesing må være like grundig", "Ett teoretisk og ett empirisk alternativ hver gang, så du velger ut fra hvilken sjanger du skriver best"],
      explanation: "Mønsteret er at alternativene deler seg mellom velferds- og samfunnsaksen og kultur- og forskjellsaksen, men H2022 var unntaket der begge lå på kultursiden. Derfor holder ikke rådet om å lese bare én akse, og fordelingen følger heller ikke et skille mellom teori og empiri.",
    },
    {
      question: "En oppgave ber deg drøfte om rasisme former etniske minoriteters muligheter i Norge. Hva er nøkkelvariabelen du må avgrense først?",
      options: ["Hva slags muligheter det gjelder — innkalling, avansement, lønn eller anerkjennelse", "Hvilken av de tre rasismeforståelsene du velger å legge til grunn i hele drøftingen din", "Hvilke minoritetsgrupper i Norge du velger å avgrense analysen din til å gjelde for", "Hvilken periode i norsk innvandringshistorie drøftingen din skal handle om her"],
      explanation: "Oppgaven navngir mulighetene selv, og de fire avgrensningene gir ulike svar: mobilitetsfunnene er sterkest på tilgang og avansement, mens de symbolske grensene står igjen på anerkjennelse. Valg av forståelse, gruppe og periode er nyttige avgrensninger i teksten, men ingen av dem er variabelen oppgaven ber deg drøfte.",
    },
    {
      question: "Hva innebærer det å bære velferdsstatsparadokset i en drøfting av bærekraft under aldring og innvandring?",
      options: ["Å holde inngangsterskelen for nyankomne og springbretteffekten for etterkommerne i live hele veien", "Å beskrive først alle argumentene for at modellen er bærekraftig og deretter alle argumentene mot", "Å unngå å konkludere, siden begge sidene av spørsmålet har dokumentert belegg bak seg i forskningen", "Å vise at den økonomiske bærekraften og oppslutningen om modellen alltid følger hverandre tett"],
      explanation: "Paradokset er at den samme universelle modellen gir høye terskler ved inngang og samtidig virker utjevnende for neste generasjon, og begge halvdelene skal fortsatt stå i nest siste avsnitt. En blokkdisposisjon med argumenter for og mot er ikke det samme som å bære dobbeltheten, og en skarp, begrunnet landing er fullt forenlig med den — mens økonomisk og legitimitetsmessig bærekraft nettopp kan bevege seg i hver sin retning.",
    },
  ],
  'sos1004-8-8': [
    {
      question: "Hva innebærer begge-bestått-kravet på eksamen i SOS1004?",
      options: ["At flervalgsdelen og langsvaret vurderes hver for seg, og at stryk på én av dem gir stryk på hele eksamen", "At begge deler må leveres innen fristen, men at bare den samlede poengsummen avgjør karakteren til slutt", "At langsvaret må bestås mens flervalgsdelen bare justerer karakteren opp eller ned med ett trinn", "At kandidaten må besvare begge langsvarsalternativene før flervalgsdelen kan telles med i vurderingen"],
      explanation: "Delene vurderes separat, og en strøket del kan ikke reddes av den andre uansett hvor sterk den er. Vektingen på en tredel og to tredeler sier hvor mye hver del flytter karakteren, ikke hva som skjer ved stryk — det er nettopp den forvekslingen kravet tester. På Del II velges én av to oppgaver, aldri begge.",
    },
    {
      question: "Hvor mye av de fire timene setter tidsbudsjettet i boka av til selve skrivingen av langsvaret?",
      options: ["Omtrent to timer, med disponering, kontroll og buffer lagt utenom", "Omtrent to og en halv time, der disponering og kontroll er regnet med", "Omtrent tre timer, siden langsvaret teller to tredeler av karakteren", "Omtrent halvannen time, slik at halvparten av tiden blir igjen til flervalget"],
      explanation: "Skrivetiden er omtrent to timer; rundt ti minutter går til disponering og rundt ti til kontroll, i tillegg til tjue til tretti minutters buffer og en halvtime på flervalgsdelen. Å regne disponering og kontroll inn i skrivetiden er den vanlige feilen, og den gjør budsjettet for optimistisk.",
    },
    {
      question: "Hva bør avgjøre hvilken av de to langsvarsoppgavene du velger?",
      options: ["Hvilken oppgave du har konkrete funn til, med design og resultat du kan gjengi", "Hvilken oppgave som ligger på temaaksen du har lest sist og derfor husker best", "Hvilken oppgave som har den korteste og minst sammensatte oppgaveteksten", "Hvilken oppgave som gjelder det temaet som har kommet oftest på tidligere sett"],
      explanation: "Valget avgjøres av hva du kan bruke aktivt, og aktiv empiribruk er det som skiller en god besvarelse fra en middels. Et tema du kjenner igjen uten å ha funn til, blir dyrt: gjenkjennelse gir en redegjørelse, men ikke en drøfting. Oppgavens lengde og temaets historikk sier ingenting om hva du selv har klart.",
    },
    {
      question: "Du klarer ikke å utelukke noen av de fire alternativene på et flervalgsspørsmål. Hva sier avståelsesregelen?",
      options: ["La spørsmålet stå, siden blind gjetting gir en forventet uttelling på −0,125", "Svar likevel, siden en fjerdedels sjanse for +1 veier opp for trekket på −0,5", "Svar dersom du kjenner igjen begrepene, siden gjenkjennelse teller som eliminering", "La spørsmålet stå bare dersom det gjenstår tid til å kontrollere de øvrige svarene"],
      explanation: "Med fire alternativer og ingen eliminering blir forventet uttelling negativ, og null er bedre enn et negativt tall. Å kjenne igjen ordene i et alternativ er ikke det samme som å kunne si hvorfor et annet er galt, og det er bare det siste som er en eliminering. Regelen gjelder uavhengig av hvor mye tid som er igjen.",
    },
    {
      question: "Hva er dobbeltheten en drøfting av megatrendenes effekt på den norske arbeidslivsmodellen skal bære?",
      options: ["At trendene presser modellen samtidig som modellen har dokumentert omstillingsevne", "At trendene virker likt i alle nordiske land selv om modellene deres er ulike", "At trendene rammer privat sektor hardt mens offentlig sektor står nesten uberørt", "At trendene er drevet av teknologi mens motstanden mot dem er politisk begrunnet"],
      explanation: "Drøftingsaksen er trussel mot tilpasning, og begge sidene skal ha belegg og stå igjen til slutt. De øvrige utsagnene er sammenlikninger og avgrensninger som kan inngå i et svar, men ingen av dem er spenningen oppgaven hviler på. Å velge én side av dobbeltheten er den feilen som stopper svaret under toppnivået.",
    },
    {
      question: "Hvorfor kan etterkommeres oppadgående mobilitet og et dokumentert innkallingsgap stemme samtidig?",
      options: ["Fordi mobiliteten måles mot foreldregenerasjonen og gapet mot jevnaldrende med like kvalifikasjoner", "Fordi mobiliteten gjelder utdanning mens innkallingsgapet bare er dokumentert for ufaglærte yrker", "Fordi mobiliteten bygger på registerdata mens innkallingsgapet bygger på hva søkerne selv rapporterer", "Fordi mobiliteten gjelder etterkommere mens innkallingsgapet i hovedsak gjelder nyankomne innvandrere"],
      explanation: "De to funnene bruker hvert sitt sammenlikningsgrunnlag, og derfor er de forenlige — det er kjernen i integreringsparadokset. Innkallingsgapet er dokumentert også for søkere som er født og utdannet i Norge, altså for etterkommere, og korrespondansetester måler faktiske svar fra arbeidsgivere og ikke selvrapportering.",
    },
  ],
  'sos1004-8-9': [
    {
      question: "Du har utelukket to av fire alternativer på et flervalgsspørsmål, men klarer ikke å skille de to siste. Hva sier poengmodellen +1 / −0,5 / 0 at du bør gjøre?",
      options: ["Svare, fordi forventet uttelling er positiv når halvparten av alternativene er ute", "La spørsmålet stå, fordi du fortsatt har femti prosent sjanse for å svare galt", "Svare bare dersom du kjenner igjen begrepet fra pensumlitteraturen du har lest", "La det stå og heller bruke tiden på å kontrollere svarene du allerede har gitt"],
      explanation: "Med to alternativer igjen gir riktig svar +1 og galt −0,5, og forventet uttelling blir +0,25. Fella er å lese risikoen for å bomme som et argument mot å svare — sannsynligheten er allerede med i regnestykket. Gjenkjennelse av et begrep er heller ikke det samme som en faglig eliminering.",
    },
    {
      question: "Hva menes med religiøs kompleksitet slik Furseth bruker begrepet?",
      options: ["At religion beveger seg i flere retninger samtidig: svakere individuell tro og økt mangfold", "At religionen mister myndighet over samfunnsområder som skole, rettsvesen, medisin og politikk over tid", "At troen flyttes fra det felles og offentlige til det personlige, og settes sammen av den enkelte", "At antallet trossamfunn i befolkningen øker, slik at flere tradisjoner er varig til stede samtidig"],
      explanation: "Religiøs kompleksitet er nettopp flerretningen: individuell tro og praksis svekkes mens mangfoldet og synligheten øker. Differensiering, privatisering og religiøst mangfold er hver for seg ekte begreper, men de beskriver hver sin enkeltbevegelse — og et svar som bare har én av dem, har bare en del av bildet.",
    },
    {
      question: "Hva er forskjellen mellom absolutt og relativ sosial mobilitet?",
      options: ["Absolutt teller hvor mange som ender et annet sted enn foreldrene, relativ sammenlikner sjansene", "Absolutt gjelder bevegelse mellom generasjoner, mens relativ gjelder bevegelse i løpet av ett yrkesliv", "Absolutt måler mobiliteten i Norge, mens relativ måler den sammenliknet med mobiliteten i andre land", "Absolutt beskriver oppadgående bevegelse, mens relativ beskriver både oppadgående og nedadgående"],
      explanation: "Absolutt mobilitet teller faktiske bevegelser og drives i stor grad av at klassestrukturen selv endrer seg; relativ mobilitet spør hvor mye utgangspunktet betyr når strukturendringen holdes utenfor. Fellene er å forveksle skillet med skillet mellom generasjoner og livsløp, eller med en sammenlikning mellom land — begge er ekte skiller, men andre skiller.",
    },
    {
      question: "Hva innebærer det at begge delene av eksamen i SOS1004 må bestås?",
      options: ["At stryk på flervalgsdelen gir stryk samlet, selv om langsvaret skulle være sterkt", "At de to delene vektes likt, slik at hver av dem teller halvparten av karakteren", "At du må levere begge delene innen samme frist for at besvarelsen skal bli vurdert", "At et svakt resultat på den ene delen kan hentes inn av et sterkt resultat på den andre"],
      explanation: "Kravet gjelder hver del for seg: F på flervalgsdelen gir stryk uansett hvor godt langsvaret er, og omvendt. Vektingen er en tredel på Del I og to tredeler på Del II, men vekting og bestått-krav er to ulike ting — og nettopp derfor kan en svak del ikke kompenseres av en sterk.",
    },
    {
      question: "Hva kreves for at redegjørelsen for de tre B-ene skal treffe Furseths poeng?",
      options: ["At hver av dimensjonene tilhørighet, tro og praksis får sin egen retning i utviklingen", "At de tre dimensjonene listes opp i riktig rekkefølge med de engelske betegnelsene", "At tilhørighet behandles som det sikreste målet, siden medlemskap kan telles i registre", "At alle tre dimensjonene tolkes som uttrykk for den samme underliggende religiøsiteten"],
      explanation: "Kjernepåstanden er at dimensjonene kan bevege seg i ulik retning samtidig — praksis faller raskest, tilhørigheten holder seg lenger fordi mye av den er nominell, og troen er den vanskeligste å måle. Å liste de tre uten å gi dem hver sin retning er en redegjørelse på laveste nivå, og å behandle dem som ett mål er å miste selve funnet.",
    },
    {
      question: "Hvorfor får langsvaret mest tid i tidsbudsjettet selv om flervalgsdelen også må bestås?",
      options: ["Fordi tjue flervalgsspørsmål er rekognosering, mens ett langsvar må disponeres og skrives fra bunnen", "Fordi flervalgsdelen kan gjøres ferdig hjemme, mens langsvaret må skrives i eksamenslokalet", "Fordi flervalgsdelen ikke teller med i karakteren dersom langsvaret er godt nok besvart", "Fordi langsvaret rettes av en sensor, mens flervalgsdelen rettes automatisk og derfor går raskere"],
      explanation: "Fordelingen følger av hva de to delene krever av kandidaten: å kjenne igjen en distinksjon tar sekunder, å bygge et argument med redegjørelse, drøfting og landing tar timer. Flervalgsdelen får likevel aldri null forberedelse, nettopp fordi den må bestås for seg — og den rettes automatisk uansett hvordan langsvaret gikk.",
    },
  ],
};

export default quizData_sos1004;
