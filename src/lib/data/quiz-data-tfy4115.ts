import type { QuizQuestion } from './quiz-data';

const quizData_tfy4115: Record<string, QuizQuestion[]> = {
  'tfy4115-0-1': [
    {
      question: "Hvor mange svaralternativer har hvert spørsmål på eksamen i den nyeste formen som er dokumentert i arkivet, altså settene fra 2019 og 2020?",
      options: ["Seks alternativer, merket A til F", "Fem alternativer, merket A til E", "Fire alternativer, merket A til D", "Tre alternativer, merket A til C"],
      explanation: "Settene fra 2019 og 2020 har rundt 40 spørsmål med seks alternativer hver. Fem alternativer er den eldre formen fra 2013, 2017 og 2018, så det alternativet var riktig én gang, men er ikke det nyeste vi kan dokumentere. Fire alternativer er formatet den interaktive quizen i denne boka bruker, og det er en teknisk begrensning i plattformen, ikke en påstand om eksamen.",
    },
    {
      question: "Hva er sannsynligheten for å treffe riktig ved rent gjett på ett spørsmål i den nyeste eksamensformen?",
      options: ["Omtrent 17 prosent, fordi det er seks alternativer", "Omtrent 20 prosent, fordi det er fem alternativer", "Omtrent 25 prosent, fordi det er fire alternativer", "Omtrent 50 prosent, fordi svaret er riktig eller galt"],
      explanation: "Med seks alternativer er sjansen én av seks, altså 0,167 eller omtrent 17 prosent. Tjue prosent gjelder den eldre formen med fem alternativer, og 25 prosent gjelder quizen i denne boka, som har fire — det er nettopp derfor forskjellen står i klartekst i kapitlet. På 40 spørsmål er forskjellen mellom 17 og 25 prosent over tre poeng i forventning.",
    },
    {
      question: "Hvor mange poeng gir et spørsmål du lar stå blankt?",
      options: ["Null poeng, akkurat det samme som et galt svar", "Minus ett poeng, altså dårligere enn et galt svar", "Et halvt poeng, som delvis uttelling", "Null poeng, men bare dersom hele settet står tomt"],
      explanation: "Retteregelen er ett poeng for riktig og null for feil eller blankt, uten minuspoeng. Fordi blankt og galt teller helt likt, koster et gjett deg ingenting, og du skal aldri levere et spørsmål tomt. Alternativet med minuspoeng er en regel som finnes i andre lands eksamenssystemer, men ikke her — og det er den vanligste misforståelsen om formen.",
    },
    {
      question: "Hva handler spørsmål 21 til 40 om i den nyeste eksamensformen?",
      options: ["Termisk fysikk", "Mekanikk", "Elektromagnetisme", "Bølger og optikk"],
      explanation: "Todelingen har ligget fast fra 2004 til 2020: mekanikk i første halvdel, termisk fysikk i andre. Mekanikk er derfor riktig for spørsmål 1 til 20, men ikke for 21 til 40. Elektromagnetisme og bølger og optikk har 0 treff i hele arkivet og er aldri pensum i dette emnet — elektromagnetisme er andre halvdel i søsteremnet TFY4125, ikke her.",
    },
    {
      question: "Hvilke hjelpemidler er dokumentert tillatt på eksamen i TFY4115?",
      options: ["Rottmann matematisk formelsamling, et utdelt fysikk-formelark og en enkel kalkulator", "Egne håndskrevne notater, en lærebok etter eget valg og en enkel kalkulator", "Alle trykte hjelpemidler samt en grafisk og programmerbar kalkulator", "Ingen skriftlige hjelpemidler, kun en enkel kalkulator uten minne"],
      explanation: "Hjelpemiddelkode C betyr spesifiserte hjelpemidler, og spesifikasjonen i settene arkivet inneholder er Rottmann pluss et formelark som deles ut sammen med oppgavene. Alternativet med egne notater er den vanligste og dyreste misforståelsen: koden gir ingen generell rett til å ta med det du selv har skrevet. En grafisk eller programmerbar kalkulator er heller ikke forutsatt noe sted, og det er derfor den numeriske iterasjonen i boka gjøres for hånd.",
    },
    {
      question: "Hvilket av disse temaene har null treff i hele eksamensarkivet fra 2004 til 2020?",
      options: ["Elektromagnetisme", "Entropi", "Treghetsmoment", "Varmestråling"],
      explanation: "Elektromagnetisme er aldri pensum i TFY4115 og har 0 treff ved maskinsøk i hele arkivet — det er den skarpeste forskjellen mot søsteremnet TFY4125. De tre andre er kjernepensum: entropi og treghetsmoment står i praktisk talt hvert sett, og varmestråling i rundt sju av ti. Varmestråling er faktisk et av temaene som er unike for dette emnet.",
    },
    {
      question: "Hva betyr symbolet gamma i termofysikkdelen av boka?",
      options: ["Adiabateksponenten, altså forholdet mellom de to varmekapasitetene", "Dempingskoeffisienten i en svingning, altså halve friksjonstallet delt på massen", "Krumningsradien til en bane, altså den inverse av krumningen i et punkt", "Virkningsgraden til en kretsprosess, altså arbeid delt på tilført varme"],
      explanation: "Dette er en av bokas fem symbolkollisjoner: gamma er adiabateksponenten i termofysikken og dempingskoeffisienten i mekanikken. Dempingskoeffisienten er derfor riktig betydning, men i den andre halvdelen av faget, og det er nettopp derfor hvert delkapittel oppgir hvilken betydning som gjelder der. Virkningsgraden skrives eta, og krumningsradien skrives rho.",
    },
    {
      question: "Hvilken temperaturskala skal brukes i gasslov, adiabatrelasjoner og strålingsuttrykk?",
      options: ["Kelvin, altså absolutt temperatur, i alle disse uttrykkene", "Celsius, siden det er den skalaen oppgavetekstene vanligvis bruker", "Kelvin i gassloven, men celsius er trygt i strålingsuttrykkene", "Valgfritt, siden en temperatur er en temperatur uansett skala"],
      explanation: "Alle disse uttrykkene krever absolutt temperatur, fordi de inneholder temperaturen selv og ikke bare en differanse. Alternativet som tillater celsius i strålingsuttrykk er nær sant på ett punkt og helt galt på et annet: celsius er trygt der bare en temperaturdifferanse inngår, som i varmeledning og termisk utvidelse, men i et uttrykk med fjerde potens av temperaturen er det katastrofalt. Kelvin-slurv er den enkeltfeilen som koster mest i termodelen.",
    },
    {
      question: "Hvor mange gjeldende siffer bør du beholde i mellomresultatene i en regnekjede?",
      options: ["Tre til fire, og runde først i sluttsvaret", "To, for å spare tid når du har seks minutter per spørsmål", "Alle sifrene kalkulatoren viser, også i sluttsvaret", "Ett, siden svaralternativene alltid er tydelig forskjellige"],
      explanation: "Regelen er tre til fire siffer gjennom kjeden og to til tre i sluttsvaret. Alternativet om å spare tid med to siffer er nettopp fella: svaralternativene på eksamen ligger tett og systematisk, og en avrunding underveis lander deg på nabo-alternativet. Å oppgi alle sifrene kalkulatoren viser er en annen feil, men en billigere en — den koster presisjon i framstillingen, ikke poeng.",
    },
    {
      question: "Hva er termofysikkens signatursjanger, altså den som går igjen i praktisk talt hvert sett og ofte som flere koblede spørsmål?",
      options: ["Kretsprosessen med virkningsgrad", "Termisk utvidelse av et fast stoff", "Wiens forskyvningslov", "Konveksjon som varmetransport"],
      explanation: "Kretsprosessen står i praktisk talt hvert sett og kommer typisk som en klynge på tre til fire koblede spørsmål om samme syklus, der ett felles oppsett gir flere poeng. Termisk utvidelse er med i rundt tre av ti sett, og Wiens lov og konveksjon opptrer bare sporadisk. Det er derfor Del 8 har fått et helt kapittel til kretsprosessen alene.",
    },
    {
      question: "Hvilket år stopper eksamensarkivet som prioriteringene i denne boka bygger på?",
      options: ["I 2020, så et nyere sett bør skaffes for å bekrefte formen", "I 2026, altså med samme semester som eksamen holdes i", "I 2013, det året den første rene flervalgseksamenen ble holdt", "I 2004, det eldste settet som finnes i samlingen"],
      explanation: "Arkivet dekker 2004 til 2020, altså 25 sett med tilhørende løsningsforslag. Boka påstår derfor aldri at formen er bekreftet etter 2020, og forbeholdet står i kildenoten. Året 2004 er riktig for den eldste enden av arkivet, ikke den nyeste, og 2013 er året for det første rene flervalgssettet — et unntak midt i hybridperioden.",
    },
    {
      question: "Hva betyr det at et tema har en gjenganger-score på omtrent 100 prosent?",
      options: ["Temaet inngår i praktisk talt hvert eksamenssett", "Temaet gir omtrent hele poengsummen på eksamen", "Praktisk talt alle kandidater svarer riktig på temaet", "Temaet har vært prøvd omtrent hundre ganger i arkivet"],
      explanation: "Gjenganger-scoren er andelen av settene der temaet inngår med minst ett spørsmål, ikke en andel av poengsummen og ikke noe mål på hvor godt studenter presterer. Boka bruker denne formen fordi settene har en fast halv-halv-struktur som gjør at kjernetemaene gjentar seg nesten hver gang. Å lese scoren som en poengandel er en nærliggende feil, men den ville gjort tabellene meningsløse, siden flere temaer står på 100 prosent samtidig.",
    },
    {
      question: "Omtrent hvor mye tid har du per spørsmål på eksamen?",
      options: ["Rundt seks minutter, når 40 spørsmål skal gjøres på fire timer", "Rundt tolv minutter, siden bare halvparten av spørsmålene er tunge", "Rundt to minutter, siden bare bokstavsvaret skal føres", "Rundt tjue minutter på hvert av de viktigste spørsmålene"],
      explanation: "Fire timer er 240 minutter, og med 40 spørsmål blir det seks minutter hver, litt mindre om du setter av tid til gjennomgang. I praksis bør de ikke fordeles jevnt: en drillet sjanger tar to til tre minutter, mens en koblet kretsprosess-klynge fortjener tolv til femten samlet. Alternativet med to minutter forveksler tiden det tar å føre svaret med tiden det tar å finne det.",
    },
    {
      question: "Hva er den viktigste faglige forskjellen mellom TFY4115 og søsteremnet TFY4125?",
      options: ["Andre halvdel av settet er termisk fysikk her, mens den er elektromagnetisme der", "Mekanikkdelen er betydelig enklere her enn i søsteremnet", "Eksamen har åpne utledningsoppgaver her og ren flervalg der", "Numeriske metoder er faset helt ut her, men fortsatt pensum der"],
      explanation: "De to emnene deler en nesten identisk mekanikk-kjerne, men andre halvdel skiller dem: termisk fysikk i TFY4115, elektromagnetisme i TFY4125, som har 0 treff i hele TFY4115-arkivet og aldri er pensum her. Alternativet om numeriske metoder er byttet om: numerisk iterasjon lever fremdeles i TFY4115 og var siste spørsmål i både 2019- og 2020-settene, mens den er faset ut i søsteremnet. Begge emnene har flervalgsform i dag.",
    },
    {
      question: "Hva bør du gjøre med en formel som står på det utdelte formelarket?",
      options: ["Trene på å finne den raskt og sette den inn riktig, ikke pugge den", "Pugge den utenat, for det er ikke sikkert arket faktisk deles ut", "Skrive den av på kladdearket i starten så du slipper å lete siden", "Unngå å bruke den, og heller utlede den selv hver gang"],
      explanation: "Fordi arket deles ut, ligger poengene i å velge riktig lov, begrunne at den gjelder og regne raskt — ikke i å huske formelen. Alternativet om å skrive av formlene i starten er ikke galt i seg selv, men det bruker minutter du ikke har, og det løser ikke problemet: du må fortsatt kjenne igjen hvilken formel situasjonen krever. Å utlede alt selv er sløsing med tid på en eksamen uten delpoeng.",
    },
    {
      question: "Hva er standardfeilen til middelverdien av N målinger?",
      options: ["Standardavviket dividert på kvadratroten av antall målinger", "Standardavviket dividert på antall målinger", "Standardavviket multiplisert med kvadratroten av antall målinger", "Det samme som det empiriske standardavviket i måleserien"],
      explanation: "Standardfeilen er standardavviket delt på kvadratroten av antall målinger, så usikkerheten i gjennomsnittet avtar som én over kvadratroten av N — firedobler du antall målinger, halverer du usikkerheten. Å dele på N i stedet for på kvadratroten av N er den nærliggende feilen, og den gjør usikkerheten for liten. Det empiriske standardavviket måler noe annet, nemlig spredningen i en enkelt måling, og det blir ikke mindre av at du måler flere ganger.",
    },
  ],
  'tfy4115-1-1': [
    {
      question: "En båt starter fra ro med fartsmodellen $v(t)=v_0(1-e^{-t/\\tau})$, der $v_0=28{,}0\\,\\text{m/s}$ og $\\tau=7{,}00\\,\\text{s}$. Hvor stor er den største akselerasjonen?",
      options: ["$4{,}00\\,\\text{m/s}^2$", "$2{,}00\\,\\text{m/s}^2$", "$1{,}47\\,\\text{m/s}^2$", "$0{,}571\\,\\text{m/s}^2$"],
      explanation: "Akselerasjonen er $a(t)=(v_0/\\tau)e^{-t/\\tau}$, som avtar monotont, så maksimum ligger i randpunktet $t=0$ og er $4{,}00\\,\\text{m/s}^2$. Halvparten av dette kommer av en faktor 2 for mye i nevneren, altså $v_0/2\\tau$. Alternativet som er $e^{-1}$ ganger fasiten, er riktig regning på feil tidspunkt, nemlig ved $t=\\tau$, og alternativet med den minste verdien har en tidskonstant for mye i nevneren, altså $v_0/\\tau^2$.",
    },
    {
      question: "En båt starter fra ro med fartsmodellen $v(t)=v_0(1-e^{-t/\\tau})$, der $v_0=54{,}0\\,\\text{m/s}$ og $\\tau=12{,}0\\,\\text{s}$. Hvor stor er den største akselerasjonen?",
      options: ["$4{,}50\\,\\text{m/s}^2$", "$2{,}25\\,\\text{m/s}^2$", "$1{,}66\\,\\text{m/s}^2$", "$0{,}375\\,\\text{m/s}^2$"],
      explanation: "Akselerasjonen er $a(t)=(v_0/\\tau)e^{-t/\\tau}$, som avtar monotont, så maksimum ligger i randpunktet $t=0$ og er $4{,}50\\,\\text{m/s}^2$. Halvparten av dette kommer av en faktor 2 for mye i nevneren, altså $v_0/2\\tau$. Alternativet som er $e^{-1}$ ganger fasiten, er riktig regning på feil tidspunkt, nemlig ved $t=\\tau$, og alternativet med den minste verdien har en tidskonstant for mye i nevneren, altså $v_0/\\tau^2$.",
    },
    {
      question: "En båt starter fra ro med fartsmodellen $v(t)=v_0(1-e^{-t/\\tau})$, der $v_0=16{,}5\\,\\text{m/s}$ og $\\tau=5{,}50\\,\\text{s}$. Hvor stor er den største akselerasjonen?",
      options: ["$3{,}00\\,\\text{m/s}^2$", "$1{,}50\\,\\text{m/s}^2$", "$1{,}10\\,\\text{m/s}^2$", "$0{,}545\\,\\text{m/s}^2$"],
      explanation: "Akselerasjonen er $a(t)=(v_0/\\tau)e^{-t/\\tau}$, som avtar monotont, så maksimum ligger i randpunktet $t=0$ og er $3{,}00\\,\\text{m/s}^2$. Halvparten av dette kommer av en faktor 2 for mye i nevneren, altså $v_0/2\\tau$. Alternativet som er $e^{-1}$ ganger fasiten, er riktig regning på feil tidspunkt, nemlig ved $t=\\tau$, og alternativet med den minste verdien har en tidskonstant for mye i nevneren, altså $v_0/\\tau^2$.",
    },
    {
      question: "En båt starter fra ro med fartsmodellen $v(t)=v_0(1-e^{-t/\\tau})$, der $v_0=72{,}0\\,\\text{m/s}$ og $\\tau=9{,}00\\,\\text{s}$. Hvor stor er den største akselerasjonen?",
      options: ["$8{,}00\\,\\text{m/s}^2$", "$4{,}00\\,\\text{m/s}^2$", "$2{,}94\\,\\text{m/s}^2$", "$0{,}889\\,\\text{m/s}^2$"],
      explanation: "Akselerasjonen er $a(t)=(v_0/\\tau)e^{-t/\\tau}$, som avtar monotont, så maksimum ligger i randpunktet $t=0$ og er $8{,}00\\,\\text{m/s}^2$. Halvparten av dette kommer av en faktor 2 for mye i nevneren, altså $v_0/2\\tau$. Alternativet som er $e^{-1}$ ganger fasiten, er riktig regning på feil tidspunkt, nemlig ved $t=\\tau$, og alternativet med den minste verdien har en tidskonstant for mye i nevneren, altså $v_0/\\tau^2$.",
    },
    {
      question: "For fartsmodellen $v(t)=v_0(1-e^{-t/\\tau})$ med $v_0=30{,}0\\,\\text{m/s}$ og $\\tau=5{,}00\\,\\text{s}$, hvor stor er akselerasjonen ved $t=10{,}0\\,\\text{s}$?",
      options: ["$0{,}812\\,\\text{m/s}^2$", "$6{,}00\\,\\text{m/s}^2$", "$5{,}19\\,\\text{m/s}^2$", "$0{,}110\\,\\text{m/s}^2$"],
      explanation: "Sett $t/\\tau=2{,}00$ inn i $a(t)=(v_0/\\tau)e^{-t/\\tau}$, som gir $0{,}812\\,\\text{m/s}^2$. Alternativet som er $v_0/\\tau$ alene, er akselerasjonen ved $t=0$ og altså riktig formel med eksponentialleddet glemt. Ett av de andre bruker $1-e^{-t/\\tau}$ i stedet for $e^{-t/\\tau}$, altså fartsuttrykkets parentes i akselerasjonens formel, og alternativet med den minste verdien bruker $e^{-2t/\\tau}$, altså dobbelt så stor eksponent.",
    },
    {
      question: "For fartsmodellen $v(t)=v_0(1-e^{-t/\\tau})$ med $v_0=48{,}0\\,\\text{m/s}$ og $\\tau=8{,}00\\,\\text{s}$, hvor stor er akselerasjonen ved $t=8{,}00\\,\\text{s}$?",
      options: ["$2{,}21\\,\\text{m/s}^2$", "$6{,}00\\,\\text{m/s}^2$", "$3{,}79\\,\\text{m/s}^2$", "$0{,}812\\,\\text{m/s}^2$"],
      explanation: "Sett $t/\\tau=1{,}00$ inn i $a(t)=(v_0/\\tau)e^{-t/\\tau}$, som gir $2{,}21\\,\\text{m/s}^2$. Alternativet som er $v_0/\\tau$ alene, er akselerasjonen ved $t=0$ og altså riktig formel med eksponentialleddet glemt. Ett av de andre bruker $1-e^{-t/\\tau}$ i stedet for $e^{-t/\\tau}$, altså fartsuttrykkets parentes i akselerasjonens formel, og alternativet med den minste verdien bruker $e^{-2t/\\tau}$, altså dobbelt så stor eksponent.",
    },
    {
      question: "En vogn har farten $v(t)=v_0(1-e^{-t/\\tau})$ med $v_0=36{,}0\\,\\text{m/s}$ og $\\tau=9{,}00\\,\\text{s}$. Hvor stor er farten ved $t=18{,}0\\,\\text{s}$?",
      options: ["$31{,}1\\,\\text{m/s}$", "$4{,}87\\,\\text{m/s}$", "$36{,}0\\,\\text{m/s}$", "$15{,}6\\,\\text{m/s}$"],
      explanation: "Med $t/\\tau=2{,}00$ er $e^{-t/\\tau}=0{,}1353$, og farten blir $31{,}1\\,\\text{m/s}$. Alternativet som mangler parentesen, altså $v_0e^{-t/\\tau}$, er den avtakende modellen og ikke den mettende — det er en forveksling av de to standardmodellene. Grensefarten $v_0$ nås formelt aldri, og halvparten av det riktige svaret svarer til ingen kjent feil i regningen, bare en tapt faktor.",
    },
    {
      question: "En vogn har farten $v(t)=v_0(1-e^{-t/\\tau})$ med $v_0=25{,}0\\,\\text{m/s}$ og $\\tau=4{,}00\\,\\text{s}$. Hvor stor er farten ved $t=4{,}00\\,\\text{s}$?",
      options: ["$15{,}8\\,\\text{m/s}$", "$9{,}20\\,\\text{m/s}$", "$25{,}0\\,\\text{m/s}$", "$7{,}90\\,\\text{m/s}$"],
      explanation: "Med $t/\\tau=1{,}00$ er $e^{-t/\\tau}=0{,}3679$, og farten blir $15{,}8\\,\\text{m/s}$. Alternativet som mangler parentesen, altså $v_0e^{-t/\\tau}$, er den avtakende modellen og ikke den mettende — det er en forveksling av de to standardmodellene. Grensefarten $v_0$ nås formelt aldri, og halvparten av det riktige svaret svarer til ingen kjent feil i regningen, bare en tapt faktor.",
    },
    {
      question: "En bil kjører etter $v(t)=v_0(1-e^{-t/\\tau})$ med $v_0=24{,}0\\,\\text{m/s}$ og $\\tau=6{,}00\\,\\text{s}$. Hvor langt har den kommet etter $t=12{,}0\\,\\text{s}$?",
      options: ["$163\\,\\text{m}$", "$288\\,\\text{m}$", "$144\\,\\text{m}$", "$125\\,\\text{m}$"],
      explanation: "Integrasjon gir $s(t)=v_0[t-\\tau(1-e^{-t/\\tau})]$, som her blir $163\\,\\text{m}$. Alternativet $v_0t$ antar konstant fart hele veien og er derfor for stort — det er den vanligste feilen i sjangeren. Alternativet $v_0(t-\\tau)$ er den asymptotiske formen, som først stemmer etter flere tidskonstanter, og alternativet $v_0\\tau(1-e^{-t/\\tau})$ har tidskonstanten på plassen der tiden skulle stått.",
    },
    {
      question: "En bil kjører etter $v(t)=v_0(1-e^{-t/\\tau})$ med $v_0=40{,}0\\,\\text{m/s}$ og $\\tau=10{,}0\\,\\text{s}$. Hvor langt har den kommet etter $t=20{,}0\\,\\text{s}$?",
      options: ["$454\\,\\text{m}$", "$800\\,\\text{m}$", "$400\\,\\text{m}$", "$346\\,\\text{m}$"],
      explanation: "Integrasjon gir $s(t)=v_0[t-\\tau(1-e^{-t/\\tau})]$, som her blir $454\\,\\text{m}$. Alternativet $v_0t$ antar konstant fart hele veien og er derfor for stort — det er den vanligste feilen i sjangeren. Alternativet $v_0(t-\\tau)$ er den asymptotiske formen, som først stemmer etter flere tidskonstanter, og alternativet $v_0\\tau(1-e^{-t/\\tau})$ har tidskonstanten på plassen der tiden skulle stått.",
    },
    {
      question: "En bil kjører etter $v(t)=v_0(1-e^{-t/\\tau})$ med $v_0=18{,}0\\,\\text{m/s}$ og $\\tau=3{,}00\\,\\text{s}$. Hvor langt har den kommet etter $t=9{,}00\\,\\text{s}$?",
      options: ["$111\\,\\text{m}$", "$162\\,\\text{m}$", "$108\\,\\text{m}$", "$51{,}3\\,\\text{m}$"],
      explanation: "Integrasjon gir $s(t)=v_0[t-\\tau(1-e^{-t/\\tau})]$, som her blir $111\\,\\text{m}$. Alternativet $v_0t$ antar konstant fart hele veien og er derfor for stort — det er den vanligste feilen i sjangeren. Alternativet $v_0(t-\\tau)$ er den asymptotiske formen, som først stemmer etter flere tidskonstanter, og alternativet $v_0\\tau(1-e^{-t/\\tau})$ har tidskonstanten på plassen der tiden skulle stått.",
    },
    {
      question: "Et hjul bremses ned etter $\\omega(t)=\\omega_0e^{-t/\\tau}$ med $\\omega_0=150\\,\\text{rad/s}$ og $\\tau=4{,}00\\,\\text{s}$. Hvor mange **hele** omdreininger gjør hjulet før det står stille?",
      options: ["$95$", "$96$", "$600$", "$190$"],
      explanation: "Totalvinkelen er $\\varphi_\\text{tot}=\\omega_0\\tau=600{,}0\\,\\text{rad}$, og delt på $2\\pi=6{,}28319$ gir det $95{,}493$. Antall hele omdreininger er heltallsdelen, altså 95 — den påbegynte runden teller ikke. Nabotallet over kommer av vanlig avrunding i stedet for heltallsdel, ett alternativ er totalvinkelen i radianer uten omregning i det hele tatt, og alternativet som er omtrent dobbelt så stort som fasiten, kommer av å dele på $\\pi$ i stedet for på $2\\pi$.",
    },
    {
      question: "Et hjul bremses ned etter $\\omega(t)=\\omega_0e^{-t/\\tau}$ med $\\omega_0=88{,}0\\,\\text{rad/s}$ og $\\tau=2{,}30\\,\\text{s}$. Hvor mange **hele** omdreininger gjør hjulet før det står stille?",
      options: ["$32$", "$33$", "$202$", "$64$"],
      explanation: "Totalvinkelen er $\\varphi_\\text{tot}=\\omega_0\\tau=202{,}4\\,\\text{rad}$, og delt på $2\\pi=6{,}28319$ gir det $32{,}213$. Antall hele omdreininger er heltallsdelen, altså 32 — den påbegynte runden teller ikke. Nabotallet over kommer av vanlig avrunding i stedet for heltallsdel, ett alternativ er totalvinkelen i radianer uten omregning i det hele tatt, og alternativet som er omtrent dobbelt så stort som fasiten, kommer av å dele på $\\pi$ i stedet for på $2\\pi$.",
    },
    {
      question: "Et hjul bremses ned etter $\\omega(t)=\\omega_0e^{-t/\\tau}$ med $\\omega_0=210\\,\\text{rad/s}$ og $\\tau=2{,}50\\,\\text{s}$. Hvor mange **hele** omdreininger gjør hjulet før det står stille?",
      options: ["$83$", "$84$", "$525$", "$167$"],
      explanation: "Totalvinkelen er $\\varphi_\\text{tot}=\\omega_0\\tau=525{,}0\\,\\text{rad}$, og delt på $2\\pi=6{,}28319$ gir det $83{,}556$. Antall hele omdreininger er heltallsdelen, altså 83 — den påbegynte runden teller ikke. Nabotallet over kommer av vanlig avrunding i stedet for heltallsdel, ett alternativ er totalvinkelen i radianer uten omregning i det hele tatt, og alternativet som er omtrent dobbelt så stort som fasiten, kommer av å dele på $\\pi$ i stedet for på $2\\pi$.",
    },
    {
      question: "Et hjul bremses ned etter $\\omega(t)=\\omega_0e^{-t/\\tau}$ med $\\omega_0=63{,}0\\,\\text{rad/s}$ og $\\tau=1{,}60\\,\\text{s}$. Hvor mange **hele** omdreininger gjør hjulet før det står stille?",
      options: ["$16$", "$17$", "$101$", "$32$"],
      explanation: "Totalvinkelen er $\\varphi_\\text{tot}=\\omega_0\\tau=100{,}8\\,\\text{rad}$, og delt på $2\\pi=6{,}28319$ gir det $16{,}043$. Antall hele omdreininger er heltallsdelen, altså 16 — den påbegynte runden teller ikke. Nabotallet over kommer av vanlig avrunding i stedet for heltallsdel, ett alternativ er totalvinkelen i radianer uten omregning i det hele tatt, og alternativet som er omtrent dobbelt så stort som fasiten, kommer av å dele på $\\pi$ i stedet for på $2\\pi$.",
    },
    {
      question: "Et hjul bremses ned etter $\\omega(t)=\\omega_0e^{-t/\\tau}$ med $\\omega_0=120\\,\\text{rad/s}$ og $\\tau=3{,}20\\,\\text{s}$. Hvor mange **hele** omdreininger gjør hjulet før det står stille?",
      options: ["$61$", "$62$", "$384$", "$122$"],
      explanation: "Totalvinkelen er $\\varphi_\\text{tot}=\\omega_0\\tau=384{,}0\\,\\text{rad}$, og delt på $2\\pi=6{,}28319$ gir det $61{,}115$. Antall hele omdreininger er heltallsdelen, altså 61 — den påbegynte runden teller ikke. Nabotallet over kommer av vanlig avrunding i stedet for heltallsdel, ett alternativ er totalvinkelen i radianer uten omregning i det hele tatt, og alternativet som er omtrent dobbelt så stort som fasiten, kommer av å dele på $\\pi$ i stedet for på $2\\pi$.",
    },
    {
      question: "En rotor bremses ned etter $\\omega(t)=\\omega_0e^{-t/\\tau}$ med $\\omega_0=63{,}0\\,\\text{rad/s}$ og $\\tau=1{,}60\\,\\text{s}$. Hvor mange hele omdreininger er gjort etter $t=2\\tau$?",
      options: ["$13$", "$16$", "$87{,}16$", "$2$"],
      explanation: "Ved et endelig tidspunkt gjelder $\\varphi(t)=\\omega_0\\tau(1-e^{-t/\\tau})$, som her gir $87{,}16\\,\\text{rad}$ og heltallsdelen 13. Alternativet som er heltallsdelen av $\\omega_0\\tau/2\\pi$, svarer på et annet spørsmål, nemlig totalen over hele nedbremsingen — det er den vanligste feilen her. Det store tallet er vinkelen i radianer, og det minste kommer av å bruke $e^{-t/\\tau}$ som faktor i stedet for $1-e^{-t/\\tau}$.",
    },
    {
      question: "En rotor bremses ned etter $\\omega(t)=\\omega_0e^{-t/\\tau}$ med $\\omega_0=132\\,\\text{rad/s}$ og $\\tau=2{,}75\\,\\text{s}$. Hvor mange hele omdreininger er gjort etter $t=3\\tau$?",
      options: ["$54$", "$57$", "$344{,}9$", "$2$"],
      explanation: "Ved et endelig tidspunkt gjelder $\\varphi(t)=\\omega_0\\tau(1-e^{-t/\\tau})$, som her gir $344{,}9\\,\\text{rad}$ og heltallsdelen 54. Alternativet som er heltallsdelen av $\\omega_0\\tau/2\\pi$, svarer på et annet spørsmål, nemlig totalen over hele nedbremsingen — det er den vanligste feilen her. Det store tallet er vinkelen i radianer, og det minste kommer av å bruke $e^{-t/\\tau}$ som faktor i stedet for $1-e^{-t/\\tau}$.",
    },
    {
      question: "En rotor følger $\\omega(t)=\\omega_0(t/\\tau)e^{-t/\\tau}$ med $\\omega_0=96{,}0\\,\\text{rad/s}$ og $\\tau=3{,}00\\,\\text{s}$. Hvor stor er den største vinkelfarten?",
      options: ["$35{,}3\\,\\text{rad/s}$", "$96{,}0\\,\\text{rad/s}$", "$32{,}0\\,\\text{rad/s}$", "$13{,}0\\,\\text{rad/s}$"],
      explanation: "Den deriverte er $(\\omega_0/\\tau)(1-t/\\tau)e^{-t/\\tau}$, som er null ved $t=\\tau$, og der er $\\omega=\\omega_0/e=35{,}3\\,\\text{rad/s}$. Alternativet som er $\\omega_0$ selv, er å lese konstanten i uttrykket som toppfarten — men $\\omega_0$ er bare en skaleringsfaktor, og rotoren når aldri mer enn 37 prosent av den. Ett alternativ er $\\omega_0/\\tau$, som er vinkelakselerasjonen ved $t=0$ og altså svaret på et annet spørsmål, og alternativet som er $e^{-2}$ ganger konstanten $\\omega_0$, er maksimum lett på feil sted, ved $t=2\\tau$.",
    },
    {
      question: "En rotor følger $\\omega(t)=\\omega_0(t/\\tau)e^{-t/\\tau}$ med $\\omega_0=60{,}0\\,\\text{rad/s}$ og $\\tau=2{,}00\\,\\text{s}$. Hvor stor er den største vinkelfarten?",
      options: ["$22{,}1\\,\\text{rad/s}$", "$60{,}0\\,\\text{rad/s}$", "$30{,}0\\,\\text{rad/s}$", "$8{,}12\\,\\text{rad/s}$"],
      explanation: "Den deriverte er $(\\omega_0/\\tau)(1-t/\\tau)e^{-t/\\tau}$, som er null ved $t=\\tau$, og der er $\\omega=\\omega_0/e=22{,}1\\,\\text{rad/s}$. Alternativet som er $\\omega_0$ selv, er å lese konstanten i uttrykket som toppfarten — men $\\omega_0$ er bare en skaleringsfaktor, og rotoren når aldri mer enn 37 prosent av den. Ett alternativ er $\\omega_0/\\tau$, som er vinkelakselerasjonen ved $t=0$ og altså svaret på et annet spørsmål, og alternativet som er $e^{-2}$ ganger konstanten $\\omega_0$, er maksimum lett på feil sted, ved $t=2\\tau$.",
    },
    {
      question: "En rotor følger $\\omega(t)=\\omega_0(t/\\tau)e^{-t/\\tau}$ med $\\omega_0=54{,}0\\,\\text{rad/s}$ og $\\tau=2{,}50\\,\\text{s}$. Hvor stor er den største vinkelfarten?",
      options: ["$19{,}9\\,\\text{rad/s}$", "$54{,}0\\,\\text{rad/s}$", "$21{,}6\\,\\text{rad/s}$", "$7{,}31\\,\\text{rad/s}$"],
      explanation: "Den deriverte er $(\\omega_0/\\tau)(1-t/\\tau)e^{-t/\\tau}$, som er null ved $t=\\tau$, og der er $\\omega=\\omega_0/e=19{,}9\\,\\text{rad/s}$. Alternativet som er $\\omega_0$ selv, er å lese konstanten i uttrykket som toppfarten — men $\\omega_0$ er bare en skaleringsfaktor, og rotoren når aldri mer enn 37 prosent av den. Ett alternativ er $\\omega_0/\\tau$, som er vinkelakselerasjonen ved $t=0$ og altså svaret på et annet spørsmål, og alternativet som er $e^{-2}$ ganger konstanten $\\omega_0$, er maksimum lett på feil sted, ved $t=2\\tau$.",
    },
    {
      question: "For $\\omega(t)=\\omega_0(t/\\tau)e^{-t/\\tau}$ med $\\omega_0=84{,}0\\,\\text{rad/s}$ og $\\tau=3{,}50\\,\\text{s}$, hvor stor er vinkelakselerasjonen ved $t=0$?",
      options: ["$24{,}0\\,\\text{rad/s}^2$", "$0$", "$30{,}9\\,\\text{rad/s}^2$", "$294\\,\\text{rad/s}^2$"],
      explanation: "Derivasjon med produktregelen gir $\\alpha(t)=(\\omega_0/\\tau)(1-t/\\tau)e^{-t/\\tau}$, og ved $t=0$ er parentesen 1, så $\\alpha(0)=\\omega_0/\\tau=24{,}0\\,\\text{rad/s}^2$. Alternativet null gjelder for modellen med $(t/\\tau)^2$, der begge faktorer i den deriverte forsvinner i startøyeblikket — en nær-sann forveksling av de to potensmodellene. To av alternativene er maksimal vinkelfart og totalvinkelen, altså svar på andre spørsmål.",
    },
    {
      question: "En turbin følger $\\omega(t)=\\omega_0(t/\\tau)^2e^{-t/\\tau}$ med $\\omega_0=25{,}0\\,\\text{rad/s}$ og $\\tau=3{,}00\\,\\text{s}$. Hvor stor er den totale dreievinkelen?",
      options: ["$150\\,\\text{rad}$", "$75{,}0\\,\\text{rad}$", "$450\\,\\text{rad}$", "$37{,}5\\,\\text{rad}$"],
      explanation: "Substitusjonen $u=t/\\tau$ gir $\\varphi_\\text{tot}=\\omega_0\\tau\\int_0^\\infty u^2e^{-u}du=2\\omega_0\\tau=150\\,\\text{rad}$, siden standardintegralet er $2!=2$. Alternativet $\\omega_0\\tau$ er totalvinkelen for modellene uten kvadrat, og er derfor riktig formel til feil modell — det er fella her. Alternativet med faktor 6 bruker $3!$ i stedet for $2!$, og det minste halverer i stedet for å doble.",
    },
    {
      question: "En kajakk har farten $v(t)=v_0-bt^2$ med $v_0=18{,}0\\,\\text{m/s}$ og $b=2{,}00\\,\\text{m/s}^3$. Hvor langt har den kommet når den snur?",
      options: ["$36{,}0\\,\\text{m}$", "$54{,}0\\,\\text{m}$", "$13{,}5\\,\\text{m}$", "$27{,}0\\,\\text{m}$"],
      explanation: "Snupunktet er ved $v=0$, altså $t=\\sqrt{v_0/b}=3{,}00\\,\\text{s}$, og strekningen er $\\int_0^t(v_0-bu^2)du=36{,}0\\,\\text{m}$. Alternativet $v_0t$ antar at farten holdes konstant til snupunktet, og er derfor for stort. Ett alternativ bruker konstant-akselerasjonsformelen med akselerasjonen i snupunktet, som er ugyldig fordi akselerasjonen vokser med tiden; alternativet som er halvparten av $v_0t$, bruker middelfarten til en jevn bremsing.",
    },
    {
      question: "En kajakk har farten $v(t)=v_0-bt^2$ med $v_0=27{,}0\\,\\text{m/s}$ og $b=3{,}00\\,\\text{m/s}^3$. Hvor langt har den kommet når den snur?",
      options: ["$54{,}0\\,\\text{m}$", "$81{,}0\\,\\text{m}$", "$20{,}2\\,\\text{m}$", "$40{,}5\\,\\text{m}$"],
      explanation: "Snupunktet er ved $v=0$, altså $t=\\sqrt{v_0/b}=3{,}00\\,\\text{s}$, og strekningen er $\\int_0^t(v_0-bu^2)du=54{,}0\\,\\text{m}$. Alternativet $v_0t$ antar at farten holdes konstant til snupunktet, og er derfor for stort. Ett alternativ bruker konstant-akselerasjonsformelen med akselerasjonen i snupunktet, som er ugyldig fordi akselerasjonen vokser med tiden; alternativet som er halvparten av $v_0t$, bruker middelfarten til en jevn bremsing.",
    },
    {
      question: "Et hjul dreier med $1\\,500$ omdreininger per minutt. Hvor stor er vinkelfarten?",
      options: ["$157\\,\\text{rad/s}$", "$25{,}0\\,\\text{rad/s}$", "$9\\,425\\,\\text{rad/s}$", "$239\\,\\text{rad/s}$"],
      explanation: "Én omdreining er $2\\pi$ radianer og ett minutt er 60 sekunder, så $\\omega=n\\cdot 2\\pi/60=157\\,\\text{rad/s}$. Alternativet som bare deler på 60, gir omdreininger per sekund og har glemt omregningen til radianer — det er en faktor $2\\pi$ for lite. To av alternativene har droppet minuttomregningen, eller dividert med $2\\pi$ der man skulle multiplisert.",
    },
    {
      question: "Et hjul dreier med $2\\,400$ omdreininger per minutt. Hvor stor er vinkelfarten?",
      options: ["$251\\,\\text{rad/s}$", "$40{,}0\\,\\text{rad/s}$", "$15\\,080\\,\\text{rad/s}$", "$382\\,\\text{rad/s}$"],
      explanation: "Én omdreining er $2\\pi$ radianer og ett minutt er 60 sekunder, så $\\omega=n\\cdot 2\\pi/60=251\\,\\text{rad/s}$. Alternativet som bare deler på 60, gir omdreininger per sekund og har glemt omregningen til radianer — det er en faktor $2\\pi$ for lite. To av alternativene har droppet minuttomregningen, eller dividert med $2\\pi$ der man skulle multiplisert.",
    },
    {
      question: "Et eksponentialledd $e^{-t/\\tau}$ har tidskonstant $\\tau=6{,}00\\,\\text{s}$. Hvor lang tid går det før leddet er halvert?",
      options: ["$4{,}16\\,\\text{s}$", "$6{,}00\\,\\text{s}$", "$3{,}00\\,\\text{s}$", "$8{,}66\\,\\text{s}$"],
      explanation: "Fra $e^{-t/\\tau}=1/2$ følger $t=\\tau\\ln 2=4{,}16\\,\\text{s}$. Å svare tidskonstanten selv er den vanligste forvekslingen, men etter én tidskonstant er leddet nede på 0,368 og altså mer enn halvert. Halve tidskonstanten er et rent overslag uten grunnlag, og den største tiden i lista kommer av å dividere med $\\ln 2$ i stedet for å multiplisere.",
    },
    {
      question: "For hvilken av disse modellene ligger den største akselerasjonen **ikke** i startøyeblikket?",
      options: ["$\\omega(t)=\\omega_0(t/\\tau)^2e^{-t/\\tau}$", "$v(t)=v_0(1-e^{-t/\\tau})$", "$\\omega(t)=\\omega_0e^{-t/\\tau}$", "$v(t)=v_0e^{-t/\\tau}$"],
      explanation: "For modellen med kvadratet er vinkelakselerasjonen null i startøyeblikket og har sitt maksimum inne i intervallet, fordi den deriverte inneholder faktoren $u(2-u)$. De tre andre er enten mettende eller rent avtakende, og for dem er den deriverte av akselerasjonen negativ overalt, slik at maksimum ligger i randpunktet $t=0$. Regelen som alltid holder, er å derivere og sette lik null — og sjekke randen hvis ligningen ikke har løsning.",
    },
    {
      question: "En rotor har dreid seg totalt 16,04 omdreininger før den stopper. Hvor mange **hele** omdreininger har den gjort?",
      options: ["16", "17", "16,04", "15"],
      explanation: "Antall hele omdreininger er heltallsdelen, altså 16 — den 17. runden ble påbegynt, men aldri fullført. Alternativet 17 er vanlig avrunding, som ikke er det samme som heltallsdel, og desimaltallet er svaret på et annet spørsmål enn det som ble stilt. Alternativet 15 er hva du får hvis du runder totalvinkelen til to gjeldende siffer før du deler på $2\\pi$, og det er nettopp derfor kravet om fire siffer finnes.",
    },
    {
      question: "Når kan du bruke formelen $v^2-v_0^2=2as$?",
      options: ["Bare når akselerasjonen er konstant", "Alltid, siden den står på det utdelte formelarket", "Bare når farten er konstant", "Bare når bevegelsen er en rotasjon"],
      explanation: "Formelen er utledet under forutsetningen om konstant akselerasjon, og den gjelder ikke ellers — dette er felle nummer 3 i bokas feilregister. At den står på formelarket sier ingenting om gyldighetsområdet: arket oppgir formler, ikke betingelser, og det er kandidatens jobb å sjekke dem. Er farten konstant, er akselerasjonen null og formelen triviell, og rotasjon har sine egne tilsvarende uttrykk med vinkelstørrelser.",
    },
    {
      question: "Hvorfor er den totale dreievinkelen endelig for $\\omega(t)=\\omega_0e^{-t/\\tau}$, selv om vinkelfarten aldri blir null?",
      options: ["Fordi arealet under en eksponentielt avtakende kurve er endelig", "Fordi vinkelfarten blir eksakt null etter noen få tidskonstanter", "Fordi rotasjonen stopper når vinkelfarten er under én radian per sekund", "Fordi integrasjonsgrensen alltid settes til fem tidskonstanter"],
      explanation: "Integralet $\\int_0^\\infty \\omega_0e^{-t/\\tau}dt$ konvergerer til $\\omega_0\\tau$, og det er derfor spørsmålet om antall runder har et fornuftig svar. Alternativet om at farten blir eksakt null er nær sant i praksis, men matematisk galt: etter fem tidskonstanter er den nede på 0,7 prosent, ikke null. Grensen på én radian per sekund og grensen på fem tidskonstanter er praktiske konvensjoner, ikke begrunnelser.",
    },
  ],
  'tfy4115-1-2': [
    {
      question: "En bakketopp har profilen $y=h-0{,}0500x^2$ med lengder i meter. Hva er krumningsradien i toppunktet?",
      options: ["$10{,}0\\,\\text{m}$", "$20{,}0\\,\\text{m}$", "$5{,}00\\,\\text{m}$", "$0{,}100\\,\\text{m}$"],
      explanation: "I toppunktet er $y'=0$, og krumningsradien forenkles til $\\rho=1/|y''|$. Her er $|y''|=2a=0{,}100\\,\\text{m}^{-1}$, altså $\\\\rho=10{,}0\\,\\text{m}$. Det dobbelt så store alternativet kommer av å bruke koeffisienten $a$ direkte og glemme faktoren 2 fra derivasjonen — den hyppigste feilen i sjangeren. To av alternativene kommer av å dividere med 2 én gang for mye, eller av å oppgi $|y''|$ som om det var en radius.",
    },
    {
      question: "En bakketopp har profilen $y=h-0{,}125x^2$ med lengder i meter. Hva er krumningsradien i toppunktet?",
      options: ["$4{,}00\\,\\text{m}$", "$8{,}00\\,\\text{m}$", "$2{,}00\\,\\text{m}$", "$0{,}250\\,\\text{m}$"],
      explanation: "I toppunktet er $y'=0$, og krumningsradien forenkles til $\\rho=1/|y''|$. Her er $|y''|=2a=0{,}250\\,\\text{m}^{-1}$, altså $\\\\rho=4{,}00\\,\\text{m}$. Det dobbelt så store alternativet kommer av å bruke koeffisienten $a$ direkte og glemme faktoren 2 fra derivasjonen — den hyppigste feilen i sjangeren. To av alternativene kommer av å dividere med 2 én gang for mye, eller av å oppgi $|y''|$ som om det var en radius.",
    },
    {
      question: "En bakketopp har profilen $y=h-0{,}0800x^2$ med lengder i meter. Hva er krumningsradien i toppunktet?",
      options: ["$6{,}25\\,\\text{m}$", "$12{,}5\\,\\text{m}$", "$3{,}12\\,\\text{m}$", "$0{,}160\\,\\text{m}$"],
      explanation: "I toppunktet er $y'=0$, og krumningsradien forenkles til $\\rho=1/|y''|$. Her er $|y''|=2a=0{,}160\\,\\text{m}^{-1}$, altså $\\\\rho=6{,}25\\,\\text{m}$. Det dobbelt så store alternativet kommer av å bruke koeffisienten $a$ direkte og glemme faktoren 2 fra derivasjonen — den hyppigste feilen i sjangeren. To av alternativene kommer av å dividere med 2 én gang for mye, eller av å oppgi $|y''|$ som om det var en radius.",
    },
    {
      question: "En bakketopp har profilen $y=h-0{,}0250x^2$ med lengder i meter. Hva er krumningsradien i toppunktet?",
      options: ["$20{,}0\\,\\text{m}$", "$40{,}0\\,\\text{m}$", "$10{,}0\\,\\text{m}$", "$0{,}0500\\,\\text{m}$"],
      explanation: "I toppunktet er $y'=0$, og krumningsradien forenkles til $\\rho=1/|y''|$. Her er $|y''|=2a=0{,}0500\\,\\text{m}^{-1}$, altså $\\\\rho=20{,}0\\,\\text{m}$. Det dobbelt så store alternativet kommer av å bruke koeffisienten $a$ direkte og glemme faktoren 2 fra derivasjonen — den hyppigste feilen i sjangeren. To av alternativene kommer av å dividere med 2 én gang for mye, eller av å oppgi $|y''|$ som om det var en radius.",
    },
    {
      question: "En bakketopp har profilen $y=h-0{,}150x^2$ med lengder i meter. Hva er krumningsradien i toppunktet?",
      options: ["$3{,}33\\,\\text{m}$", "$6{,}67\\,\\text{m}$", "$1{,}67\\,\\text{m}$", "$0{,}300\\,\\text{m}$"],
      explanation: "I toppunktet er $y'=0$, og krumningsradien forenkles til $\\rho=1/|y''|$. Her er $|y''|=2a=0{,}300\\,\\text{m}^{-1}$, altså $\\\\rho=3{,}33\\,\\text{m}$. Det dobbelt så store alternativet kommer av å bruke koeffisienten $a$ direkte og glemme faktoren 2 fra derivasjonen — den hyppigste feilen i sjangeren. To av alternativene kommer av å dividere med 2 én gang for mye, eller av å oppgi $|y''|$ som om det var en radius.",
    },
    {
      question: "En kloss med masse $0{,}800\\,\\text{kg}$ glir uten friksjon over et toppunkt der krumningsradien er $10{,}0\\,\\text{m}$. Farten der er $6{,}00\\,\\text{m/s}$. Hvor stor er normalkraften?",
      options: ["$4{,}97\\,\\text{N}$", "$10{,}7\\,\\text{N}$", "$7{,}85\\,\\text{N}$", "$7{,}37\\,\\text{N}$"],
      explanation: "I et toppunkt peker akselerasjonen ned mot krumningssenteret, så $mg-N=mv^2/\\rho$ og $N=m(g-v^2/\\rho)=4{,}97\\,\\text{N}$. Alternativet med pluss foran sentripetalleddet er bunnpunktsformelen brukt i et toppunkt, altså fortegnsfellen — det gir en normalkraft større enn tyngden, som er umulig på en bakketopp. Ett alternativ er bare tyngden $mg$, med sentripetalleddet glemt, og alternativet der sentripetalleddet er $v/\\rho$, har glemt kvadratet på farten.",
    },
    {
      question: "En kloss med masse $1{,}20\\,\\text{kg}$ glir uten friksjon over et toppunkt der krumningsradien er $6{,}25\\,\\text{m}$. Farten der er $5{,}00\\,\\text{m/s}$. Hvor stor er normalkraften?",
      options: ["$6{,}97\\,\\text{N}$", "$16{,}6\\,\\text{N}$", "$11{,}8\\,\\text{N}$", "$10{,}8\\,\\text{N}$"],
      explanation: "I et toppunkt peker akselerasjonen ned mot krumningssenteret, så $mg-N=mv^2/\\rho$ og $N=m(g-v^2/\\rho)=6{,}97\\,\\text{N}$. Alternativet med pluss foran sentripetalleddet er bunnpunktsformelen brukt i et toppunkt, altså fortegnsfellen — det gir en normalkraft større enn tyngden, som er umulig på en bakketopp. Ett alternativ er bare tyngden $mg$, med sentripetalleddet glemt, og alternativet der sentripetalleddet er $v/\\rho$, har glemt kvadratet på farten.",
    },
    {
      question: "En kloss med masse $2{,}00\\,\\text{kg}$ glir uten friksjon over et toppunkt der krumningsradien er $8{,}00\\,\\text{m}$. Farten der er $4{,}00\\,\\text{m/s}$. Hvor stor er normalkraften?",
      options: ["$15{,}6\\,\\text{N}$", "$23{,}6\\,\\text{N}$", "$19{,}6\\,\\text{N}$", "$18{,}6\\,\\text{N}$"],
      explanation: "I et toppunkt peker akselerasjonen ned mot krumningssenteret, så $mg-N=mv^2/\\rho$ og $N=m(g-v^2/\\rho)=15{,}6\\,\\text{N}$. Alternativet med pluss foran sentripetalleddet er bunnpunktsformelen brukt i et toppunkt, altså fortegnsfellen — det gir en normalkraft større enn tyngden, som er umulig på en bakketopp. Ett alternativ er bare tyngden $mg$, med sentripetalleddet glemt, og alternativet der sentripetalleddet er $v/\\rho$, har glemt kvadratet på farten.",
    },
    {
      question: "En kloss med masse $1{,}50\\,\\text{kg}$ glir uten friksjon over et toppunkt der krumningsradien er $4{,}00\\,\\text{m}$. Farten der er $4{,}00\\,\\text{m/s}$. Hvor stor er normalkraften?",
      options: ["$8{,}71\\,\\text{N}$", "$20{,}7\\,\\text{N}$", "$14{,}7\\,\\text{N}$", "$13{,}2\\,\\text{N}$"],
      explanation: "I et toppunkt peker akselerasjonen ned mot krumningssenteret, så $mg-N=mv^2/\\rho$ og $N=m(g-v^2/\\rho)=8{,}71\\,\\text{N}$. Alternativet med pluss foran sentripetalleddet er bunnpunktsformelen brukt i et toppunkt, altså fortegnsfellen — det gir en normalkraft større enn tyngden, som er umulig på en bakketopp. Ett alternativ er bare tyngden $mg$, med sentripetalleddet glemt, og alternativet der sentripetalleddet er $v/\\rho$, har glemt kvadratet på farten.",
    },
    {
      question: "Et legeme med masse $0{,}500\\,\\text{kg}$ glir gjennom et bunnpunkt der krumningsradien er $1{,}50\\,\\text{m}$ med farten $3{,}00\\,\\text{m/s}$. Hvor stor er normalkraften?",
      options: ["$7{,}91\\,\\text{N}$", "$1{,}91\\,\\text{N}$", "$4{,}91\\,\\text{N}$", "$5{,}91\\,\\text{N}$"],
      explanation: "I et bunnpunkt peker akselerasjonen opp mot krumningssenteret, så $N-mg=mv^2/\\rho$ og $N=m(g+v^2/\\rho)=7{,}91\\,\\text{N}$. Alternativet med minus er toppunktsformelen brukt i et bunnpunkt, og det gir en normalkraft mindre enn tyngden — umulig i en dal, der underlaget både skal bære legemet og bøye banen oppover. To av alternativene er tyngden alene og en variant der farten ikke er kvadrert.",
    },
    {
      question: "Et legeme med masse $78{,}0\\,\\text{kg}$ glir gjennom et bunnpunkt der krumningsradien er $25{,}0\\,\\text{m}$ med farten $7{,}67\\,\\text{m/s}$. Hvor stor er normalkraften?",
      options: ["$949\\,\\text{N}$", "$582\\,\\text{N}$", "$765\\,\\text{N}$", "$789\\,\\text{N}$"],
      explanation: "I et bunnpunkt peker akselerasjonen opp mot krumningssenteret, så $N-mg=mv^2/\\rho$ og $N=m(g+v^2/\\rho)=949\\,\\text{N}$. Alternativet med minus er toppunktsformelen brukt i et bunnpunkt, og det gir en normalkraft mindre enn tyngden — umulig i en dal, der underlaget både skal bære legemet og bøye banen oppover. To av alternativene er tyngden alene og en variant der farten ikke er kvadrert.",
    },
    {
      question: "Et legeme med masse $65{,}0\\,\\text{kg}$ glir gjennom et bunnpunkt der krumningsradien er $40{,}0\\,\\text{m}$ med farten $12{,}0\\,\\text{m/s}$. Hvor stor er normalkraften?",
      options: ["$872\\,\\text{N}$", "$404\\,\\text{N}$", "$638\\,\\text{N}$", "$657\\,\\text{N}$"],
      explanation: "I et bunnpunkt peker akselerasjonen opp mot krumningssenteret, så $N-mg=mv^2/\\rho$ og $N=m(g+v^2/\\rho)=872\\,\\text{N}$. Alternativet med minus er toppunktsformelen brukt i et bunnpunkt, og det gir en normalkraft mindre enn tyngden — umulig i en dal, der underlaget både skal bære legemet og bøye banen oppover. To av alternativene er tyngden alene og en variant der farten ikke er kvadrert.",
    },
    {
      question: "Et legeme med masse $55{,}0\\,\\text{kg}$ glir gjennom et bunnpunkt der krumningsradien er $20{,}0\\,\\text{m}$ med farten $9{,}00\\,\\text{m/s}$. Hvor stor er normalkraften?",
      options: ["$762\\,\\text{N}$", "$317\\,\\text{N}$", "$540\\,\\text{N}$", "$564\\,\\text{N}$"],
      explanation: "I et bunnpunkt peker akselerasjonen opp mot krumningssenteret, så $N-mg=mv^2/\\rho$ og $N=m(g+v^2/\\rho)=762\\,\\text{N}$. Alternativet med minus er toppunktsformelen brukt i et bunnpunkt, og det gir en normalkraft mindre enn tyngden — umulig i en dal, der underlaget både skal bære legemet og bøye banen oppover. To av alternativene er tyngden alene og en variant der farten ikke er kvadrert.",
    },
    {
      question: "Ved hvilken fart mister et legeme kontakten med underlaget i et toppunkt der krumningsradien er $8{,}00\\,\\text{m}$?",
      options: ["$8{,}86\\,\\text{m/s}$", "$12{,}5\\,\\text{m/s}$", "$6{,}26\\,\\text{m/s}$", "$4{,}43\\,\\text{m/s}$"],
      explanation: "Kontakten brytes der normalkraften blir null, altså der $g=v^2/\\rho$, som gir $v=\\sqrt{g\\rho}=8{,}86\\,\\text{m/s}$. Alternativet med faktor 2 under roten blander inn energibevaringens $v^2=2g\\Delta y$, som er en annen relasjon med en annen lengde i seg. Alternativet med $\\rho/2$ under roten kommer av å forveksle den kritiske farten med høydekravet $\\Delta y=\\rho/2$, og den minste farten i lista er den ferdige farten halvert. Merk at massen faller ut av alle variantene — det er en gyldig sluttsjekk.",
    },
    {
      question: "Ved hvilken fart mister et legeme kontakten med underlaget i et toppunkt der krumningsradien er $6{,}25\\,\\text{m}$?",
      options: ["$7{,}83\\,\\text{m/s}$", "$11{,}1\\,\\text{m/s}$", "$5{,}54\\,\\text{m/s}$", "$3{,}92\\,\\text{m/s}$"],
      explanation: "Kontakten brytes der normalkraften blir null, altså der $g=v^2/\\rho$, som gir $v=\\sqrt{g\\rho}=7{,}83\\,\\text{m/s}$. Alternativet med faktor 2 under roten blander inn energibevaringens $v^2=2g\\Delta y$, som er en annen relasjon med en annen lengde i seg. Alternativet med $\\rho/2$ under roten kommer av å forveksle den kritiske farten med høydekravet $\\Delta y=\\rho/2$, og den minste farten i lista er den ferdige farten halvert. Merk at massen faller ut av alle variantene — det er en gyldig sluttsjekk.",
    },
    {
      question: "Ved hvilken fart mister et legeme kontakten med underlaget i et toppunkt der krumningsradien er $4{,}00\\,\\text{m}$?",
      options: ["$6{,}26\\,\\text{m/s}$", "$8{,}86\\,\\text{m/s}$", "$4{,}43\\,\\text{m/s}$", "$3{,}13\\,\\text{m/s}$"],
      explanation: "Kontakten brytes der normalkraften blir null, altså der $g=v^2/\\rho$, som gir $v=\\sqrt{g\\rho}=6{,}26\\,\\text{m/s}$. Alternativet med faktor 2 under roten blander inn energibevaringens $v^2=2g\\Delta y$, som er en annen relasjon med en annen lengde i seg. Alternativet med $\\rho/2$ under roten kommer av å forveksle den kritiske farten med høydekravet $\\Delta y=\\rho/2$, og den minste farten i lista er den ferdige farten halvert. Merk at massen faller ut av alle variantene — det er en gyldig sluttsjekk.",
    },
    {
      question: "Ved hvilken fart mister et legeme kontakten med underlaget i et toppunkt der krumningsradien er $12{,}0\\,\\text{m}$?",
      options: ["$10{,}8\\,\\text{m/s}$", "$15{,}3\\,\\text{m/s}$", "$7{,}67\\,\\text{m/s}$", "$5{,}42\\,\\text{m/s}$"],
      explanation: "Kontakten brytes der normalkraften blir null, altså der $g=v^2/\\rho$, som gir $v=\\sqrt{g\\rho}=10{,}8\\,\\text{m/s}$. Alternativet med faktor 2 under roten blander inn energibevaringens $v^2=2g\\Delta y$, som er en annen relasjon med en annen lengde i seg. Alternativet med $\\rho/2$ under roten kommer av å forveksle den kritiske farten med høydekravet $\\Delta y=\\rho/2$, og den minste farten i lista er den ferdige farten halvert. Merk at massen faller ut av alle variantene — det er en gyldig sluttsjekk.",
    },
    {
      question: "En kloss med masse $2{,}00\\,\\text{kg}$ slippes fra ro $1{,}50\\,\\text{m}$ over et toppunkt og glir friksjonsfritt dit. Krumningsradien i toppunktet er $6{,}00\\,\\text{m}$. Hvor stor er normalkraften der?",
      options: ["$9{,}81\\,\\text{N}$", "$29{,}4\\,\\text{N}$", "$14{,}7\\,\\text{N}$", "$19{,}6\\,\\text{N}$"],
      explanation: "Energibevaring gir $v^2=2g\\Delta y=29{,}43\\,\\text{m}^2/\\text{s}^2$, og toppunktsformelen gir $N=m(g-v^2/\\rho)=9{,}81\\,\\text{N}$. Alternativet med pluss er fortegnsfellen. Ett alternativ har glemt faktoren 2 i energibevaringen og brukt $v^2=g\\Delta y$, som gir en for liten sentripetalkorreksjon, og alternativet som er nøyaktig $mg$, mangler sentripetalleddet helt.",
    },
    {
      question: "En kloss med masse $3{,}00\\,\\text{kg}$ slippes fra ro $2{,}00\\,\\text{m}$ over et toppunkt og glir friksjonsfritt dit. Krumningsradien i toppunktet er $12{,}0\\,\\text{m}$. Hvor stor er normalkraften der?",
      options: ["$19{,}6\\,\\text{N}$", "$39{,}2\\,\\text{N}$", "$24{,}5\\,\\text{N}$", "$29{,}4\\,\\text{N}$"],
      explanation: "Energibevaring gir $v^2=2g\\Delta y=39{,}24\\,\\text{m}^2/\\text{s}^2$, og toppunktsformelen gir $N=m(g-v^2/\\rho)=19{,}6\\,\\text{N}$. Alternativet med pluss er fortegnsfellen. Ett alternativ har glemt faktoren 2 i energibevaringen og brukt $v^2=g\\Delta y$, som gir en for liten sentripetalkorreksjon, og alternativet som er nøyaktig $mg$, mangler sentripetalleddet helt.",
    },
    {
      question: "En kloss med masse $78{,}0\\,\\text{kg}$ slippes fra ro $3{,}00\\,\\text{m}$ over et toppunkt og glir friksjonsfritt dit. Krumningsradien i toppunktet er $25{,}0\\,\\text{m}$. Hvor stor er normalkraften der?",
      options: ["$582\\,\\text{N}$", "$949\\,\\text{N}$", "$673\\,\\text{N}$", "$765\\,\\text{N}$"],
      explanation: "Energibevaring gir $v^2=2g\\Delta y=58{,}86\\,\\text{m}^2/\\text{s}^2$, og toppunktsformelen gir $N=m(g-v^2/\\rho)=582\\,\\text{N}$. Alternativet med pluss er fortegnsfellen. Ett alternativ har glemt faktoren 2 i energibevaringen og brukt $v^2=g\\Delta y$, som gir en for liten sentripetalkorreksjon, og alternativet som er nøyaktig $mg$, mangler sentripetalleddet helt.",
    },
    {
      question: "En bane har profilen $y=1{,}00x-0{,}0500x^2$ med lengder i meter. Hva er banevinkelen ved $x=2{,}00\\,\\text{m}$?",
      options: ["$38{,}7^\\circ$", "$45{,}0^\\circ$", "$51{,}3^\\circ$", "$45{,}8^\\circ$"],
      explanation: "Stigningen er $y'=1{,}00-0{,}100x=0{,}800$, og banevinkelen følger av $\\tan\\beta=y'$, altså $38{,}7^\\circ$. Alternativet som bruker bare den første koeffisienten, har glemt leddet fra derivasjonen av kvadratleddet. Ett alternativ er komplementvinkelen, altså vinkelen målt fra loddrett i stedet for fra vannrett, og alternativet som er stigningstallet omregnet fra radianer til grader, leser stigningstallet som om det var en vinkel i radianer.",
    },
    {
      question: "En bane har profilen $y=0{,}400x-0{,}0250x^2$ med lengder i meter. Hva er banevinkelen ved $x=4{,}00\\,\\text{m}$?",
      options: ["$11{,}3^\\circ$", "$21{,}8^\\circ$", "$78{,}7^\\circ$", "$11{,}5^\\circ$"],
      explanation: "Stigningen er $y'=0{,}400-0{,}0500x=0{,}200$, og banevinkelen følger av $\\tan\\beta=y'$, altså $11{,}3^\\circ$. Alternativet som bruker bare den første koeffisienten, har glemt leddet fra derivasjonen av kvadratleddet. Ett alternativ er komplementvinkelen, altså vinkelen målt fra loddrett i stedet for fra vannrett, og alternativet som er stigningstallet omregnet fra radianer til grader, leser stigningstallet som om det var en vinkel i radianer.",
    },
    {
      question: "En bane har profilen $y=0{,}500x-0{,}0400x^2$ med lengder i meter. Hva er banevinkelen ved $x=3{,}00\\,\\text{m}$?",
      options: ["$14{,}6^\\circ$", "$26{,}6^\\circ$", "$75{,}4^\\circ$", "$14{,}9^\\circ$"],
      explanation: "Stigningen er $y'=0{,}500-0{,}0800x=0{,}260$, og banevinkelen følger av $\\tan\\beta=y'$, altså $14{,}6^\\circ$. Alternativet som bruker bare den første koeffisienten, har glemt leddet fra derivasjonen av kvadratleddet. Ett alternativ er komplementvinkelen, altså vinkelen målt fra loddrett i stedet for fra vannrett, og alternativet som er stigningstallet omregnet fra radianer til grader, leser stigningstallet som om det var en vinkel i radianer.",
    },
    {
      question: "For banen $y=1{,}00x-0{,}0500x^2$ (meter), hva er krumningsradien ved $x=2{,}00\\,\\text{m}$?",
      options: ["$21{,}0\\,\\text{m}$", "$10{,}0\\,\\text{m}$", "$16{,}4\\,\\text{m}$", "$42{,}0\\,\\text{m}$"],
      explanation: "Her er $y'=0{,}800$, altså ikke null, så hele uttrykket må brukes: $\\rho=(1+y'^2)^{3/2}/|y''|=21{,}0\\,\\text{m}$. Alternativet $1/|y''|$ er forenklingen som bare gjelder der banen er vannrett, og den er den vanligste feilen i skrå punkter. Ett alternativ har brukt eksponenten 1 i stedet for 3/2 i telleren, og alternativet som er dobbelt så stort som fasiten, har glemt faktoren 2 i den andrederiverte.",
    },
    {
      question: "For banen $y=0{,}500x-0{,}0400x^2$ (meter), hva er krumningsradien ved $x=3{,}00\\,\\text{m}$?",
      options: ["$13{,}8\\,\\text{m}$", "$12{,}5\\,\\text{m}$", "$13{,}3\\,\\text{m}$", "$27{,}6\\,\\text{m}$"],
      explanation: "Her er $y'=0{,}260$, altså ikke null, så hele uttrykket må brukes: $\\rho=(1+y'^2)^{3/2}/|y''|=13{,}8\\,\\text{m}$. Alternativet $1/|y''|$ er forenklingen som bare gjelder der banen er vannrett, og den er den vanligste feilen i skrå punkter. Ett alternativ har brukt eksponenten 1 i stedet for 3/2 i telleren, og alternativet som er dobbelt så stort som fasiten, har glemt faktoren 2 i den andrederiverte.",
    },
    {
      question: "Hvorfor er normalkraften mindre enn tyngden i et toppunkt?",
      options: ["Fordi akselerasjonen peker ned mot krumningssenteret, så tyngden alene mer enn dekker den", "Fordi tyngden er mindre høyt oppe enn nede i en dal", "Fordi farten er lavere i et toppunkt enn i et bunnpunkt", "Fordi en utoverrettet kraft trekker legemet vekk fra underlaget"],
      explanation: "Krumningssenteret ligger under banen i et toppunkt, så resultanten av kreftene må peke ned: $mg-N=mv^2/\\rho$. Tyngden gjør altså jobben og litt mer, og normalkraften er bare det som er til overs. Forklaringen om at farten er lavere, er irrelevant — normalkraften er mindre enn tyngden for enhver fart i et toppunkt. Og det finnes ingen utoverrettet kraft på legemet: sentripetalakselerasjonen er en virkning av de virkelige kreftene, ikke en ekstra kraft å tegne inn.",
    },
    {
      question: "Fra hvilken høyde over et toppunkt må et legeme slippes fra ro for at det så vidt mister kontakten med underlaget når det kommer dit?",
      options: ["Halve krumningsradien", "Hele krumningsradien", "Den dobbelte krumningsradien", "En fjerdedel av krumningsradien"],
      explanation: "Kravet er $v^2=g\\rho$, og energibevaring fra ro gir $v^2=2g\\Delta y$; sammen blir det $\\Delta y=\\rho/2$. Både tyngdeakselerasjonen og massen faller ut, så grensen avhenger bare av banens form. Alternativet hele krumningsradien kommer av å glemme faktoren 2 i energibevaringen, som er en nær-sann feil siden den gir samme struktur i svaret — men dobbelt så stor høyde.",
    },
    {
      question: "Hvilken av disse størrelsene inneholder massen i svaret?",
      options: ["Normalkraften i et bunnpunkt", "Den kritiske farten i et toppunkt", "Farten etter et fall fra ro", "Krumningsradien i et toppunkt"],
      explanation: "Normalkraften er $m(g+v^2/\\rho)$, altså proporsjonal med massen. Den kritiske farten $\\sqrt{g\\rho}$ og farten $\\sqrt{2g\\Delta y}$ er begge uavhengige av massen, og krumningsradien er en ren egenskap ved banens form. Dette er en billig sluttsjekk: står massen i et fartssvar, eller mangler den i et kraftsvar, har du gjort en feil før du sjekker tallene.",
    },
  ],
  'tfy4115-1-3': [
    {
      question: "Et spørsmål ber om «antall hele omdreininger før rotoren stopper». Hvilket verktøy skal du bruke?",
      options: ["Integrere vinkelfarten, dele på $2\\pi$ og ta heltallsdelen", "Derivere vinkelfarten og sette den deriverte lik null", "Bruke konstant-akselerasjonsformlene for rotasjon", "Dele startvinkelfarten på $2\\pi$ og ta heltallsdelen"],
      explanation: "Antall runder krever totalvinkelen, som er integralet av vinkelfarten, deretter én divisjon med $2\\pi$ og heltallsdelen. Derivasjon gir vinkelakselerasjonen og svarer på et annet spørsmål. Å dele startvinkelfarten på $2\\pi$ gir omdreininger per sekund i startøyeblikket, ikke et antall — og konstant-akselerasjonsformlene gjelder ikke, siden vinkelakselerasjonen her avhenger av tiden.",
    },
    {
      question: "En blander bremses ned etter $\\omega(t)=\\omega_0e^{-t/\\tau}$ med $\\omega_0=44{,}0\\,\\text{rad/s}$ og $\\tau=2{,}30\\,\\text{s}$. Hvor mange hele omdreininger gjør den?",
      options: ["$16$", "$17$", "$15$", "$32$"],
      explanation: "Totalvinkelen er $101{,}2\\,\\text{rad}$, som delt på $2\\pi=6{,}28319$ gir $16{,}106$ og heltallsdelen 16. Nabotallet over kommer av vanlig avrunding i stedet for heltallsdel. Nabotallet under er hva du får hvis du runder totalvinkelen for tidlig, og det er nettopp derfor kapitlet krever fire gjeldende siffer; det største alternativet kommer av å dele på $\\pi$ i stedet for på $2\\pi$.",
    },
    {
      question: "En blander bremses ned etter $\\omega(t)=\\omega_0e^{-t/\\tau}$ med $\\omega_0=75{,}0\\,\\text{rad/s}$ og $\\tau=4{,}40\\,\\text{s}$. Hvor mange hele omdreininger gjør den?",
      options: ["$52$", "$53$", "$51$", "$105$"],
      explanation: "Totalvinkelen er $330{,}0\\,\\text{rad}$, som delt på $2\\pi=6{,}28319$ gir $52{,}521$ og heltallsdelen 52. Nabotallet over kommer av vanlig avrunding i stedet for heltallsdel. Nabotallet under er hva du får hvis du runder totalvinkelen for tidlig, og det er nettopp derfor kapitlet krever fire gjeldende siffer; det største alternativet kommer av å dele på $\\pi$ i stedet for på $2\\pi$.",
    },
    {
      question: "En blander bremses ned etter $\\omega(t)=\\omega_0e^{-t/\\tau}$ med $\\omega_0=120\\,\\text{rad/s}$ og $\\tau=3{,}20\\,\\text{s}$. Hvor mange hele omdreininger gjør den?",
      options: ["$61$", "$62$", "$60$", "$122$"],
      explanation: "Totalvinkelen er $384{,}0\\,\\text{rad}$, som delt på $2\\pi=6{,}28319$ gir $61{,}115$ og heltallsdelen 61. Nabotallet over kommer av vanlig avrunding i stedet for heltallsdel. Nabotallet under er hva du får hvis du runder totalvinkelen for tidlig, og det er nettopp derfor kapitlet krever fire gjeldende siffer; det største alternativet kommer av å dele på $\\pi$ i stedet for på $2\\pi$.",
    },
    {
      question: "Et fartøy følger $v(t)=v_0(1-e^{-t/\\tau})$ med $v_0=45{,}0\\,\\text{m/s}$ og $\\tau=9{,}00\\,\\text{s}$. Hvor langt har det kommet etter én tidskonstant?",
      options: ["$149\\,\\text{m}$", "$405\\,\\text{m}$", "$256\\,\\text{m}$", "$202\\,\\text{m}$"],
      explanation: "Ved $t=\\tau$ forenkles $s(t)=v_0[t-\\tau(1-e^{-t/\\tau})]$ til $v_0\\tau e^{-1}=149\\,\\text{m}$. Alternativet $v_0\\tau$ antar konstant fart lik grensefarten hele veien og er derfor for stort. Ett alternativ har byttet om på hvilken faktor som skal stå — $1-e^{-1}$ i stedet for $e^{-1}$ — og alternativet som er halvparten av $v_0\\tau$, svarer ikke til noe trinn i regningen.",
    },
    {
      question: "Et fartøy følger $v(t)=v_0(1-e^{-t/\\tau})$ med $v_0=50{,}0\\,\\text{m/s}$ og $\\tau=12{,}5\\,\\text{s}$. Hvor langt har det kommet etter én tidskonstant?",
      options: ["$230\\,\\text{m}$", "$625\\,\\text{m}$", "$395\\,\\text{m}$", "$312\\,\\text{m}$"],
      explanation: "Ved $t=\\tau$ forenkles $s(t)=v_0[t-\\tau(1-e^{-t/\\tau})]$ til $v_0\\tau e^{-1}=230\\,\\text{m}$. Alternativet $v_0\\tau$ antar konstant fart lik grensefarten hele veien og er derfor for stort. Ett alternativ har byttet om på hvilken faktor som skal stå — $1-e^{-1}$ i stedet for $e^{-1}$ — og alternativet som er halvparten av $v_0\\tau$, svarer ikke til noe trinn i regningen.",
    },
    {
      question: "En kloss med masse $1{,}20\\,\\text{kg}$ glir over toppunktet på bakken $y=h-0{,}0800x^2$ (meter) med farten $5{,}00\\,\\text{m/s}$. Hvor stor er normalkraften?",
      options: ["$6{,}97\\,\\text{N}$", "$16{,}6\\,\\text{N}$", "$9{,}37\\,\\text{N}$", "$11{,}8\\,\\text{N}$"],
      explanation: "Først $|y''|=2a=0{,}160\\,\\text{m}^{-1}$, altså $\\\\rho=6{,}25\\,\\text{m}$, og deretter $N=m(g-v^2/\\rho)=6{,}97\\,\\text{N}$. Alternativet med pluss er bunnpunktsformelen brukt i et toppunkt, og det gir en normalkraft over tyngden, som er umulig her. Ett alternativ har glemt faktoren 2 i den andrederiverte, og alternativet som er nøyaktig $mg$, mangler sentripetalleddet helt.",
    },
    {
      question: "En kloss med masse $0{,}600\\,\\text{kg}$ glir over toppunktet på bakken $y=h-0{,}125x^2$ (meter) med farten $6{,}50\\,\\text{m/s}$. Hvor stor er normalkraften?",
      options: ["$-0{,}451\\,\\text{N}$", "$12{,}2\\,\\text{N}$", "$2{,}72\\,\\text{N}$", "$5{,}89\\,\\text{N}$"],
      explanation: "Først $|y''|=2a=0{,}250\\,\\text{m}^{-1}$, altså $\\\\rho=4{,}00\\,\\text{m}$, og deretter $N=m(g-v^2/\\rho)=-0{,}451\\,\\text{N}$. Alternativet med pluss er bunnpunktsformelen brukt i et toppunkt, og det gir en normalkraft over tyngden, som er umulig her. Ett alternativ har glemt faktoren 2 i den andrederiverte, og alternativet som er nøyaktig $mg$, mangler sentripetalleddet helt.",
    },
    {
      question: "En syklist med sykkel, til sammen $72{,}0\\,\\text{kg}$, kjører gjennom bunnpunktet på $y=0{,}0100x^2$ (meter) med farten $11{,}0\\,\\text{m/s}$. Hvor stor er normalkraften fra veien?",
      options: ["$881\\,\\text{N}$", "$532\\,\\text{N}$", "$793\\,\\text{N}$", "$706\\,\\text{N}$"],
      explanation: "Med $|y''|=2b=0{,}0200\\,\\text{m}^{-1}$ er $\\\\rho=50{,}0\\,\\text{m}$, og bunnpunktsformelen gir $N=m(g+v^2/\\rho)=881\\,\\text{N}$. Alternativet med minus er fortegnsfellen og gir en normalkraft under tyngden, som ikke kan skje i en dal. Ett alternativ har glemt faktoren 2 i den andrederiverte, og alternativet som er nøyaktig $mg$, mangler sentripetalleddet helt.",
    },
    {
      question: "En syklist med sykkel, til sammen $55{,}0\\,\\text{kg}$, kjører gjennom bunnpunktet på $y=0{,}0250x^2$ (meter) med farten $9{,}00\\,\\text{m/s}$. Hvor stor er normalkraften fra veien?",
      options: ["$762\\,\\text{N}$", "$317\\,\\text{N}$", "$651\\,\\text{N}$", "$540\\,\\text{N}$"],
      explanation: "Med $|y''|=2b=0{,}0500\\,\\text{m}^{-1}$ er $\\\\rho=20{,}0\\,\\text{m}$, og bunnpunktsformelen gir $N=m(g+v^2/\\rho)=762\\,\\text{N}$. Alternativet med minus er fortegnsfellen og gir en normalkraft under tyngden, som ikke kan skje i en dal. Ett alternativ har glemt faktoren 2 i den andrederiverte, og alternativet som er nøyaktig $mg$, mangler sentripetalleddet helt.",
    },
    {
      question: "En turbin bremses ned etter $\\omega(t)=\\omega_0e^{-t/\\tau}$ med $\\omega_0=63{,}0\\,\\text{rad/s}$ og $\\tau=1{,}60\\,\\text{s}$. Hvor mange hele omdreininger er gjort etter $t=2\\tau$?",
      options: ["$13$", "$16$", "$14$", "$2$"],
      explanation: "Ved et endelig tidspunkt gjelder $\\varphi(t)=\\omega_0\\tau(1-e^{-t/\\tau})$, som gir $87{,}16\\,\\text{rad}$ og heltallsdelen 13. Alternativet som svarer til hele nedbremsingen, bruker $\\omega_0\\tau$ og besvarer et annet spørsmål — den vanligste feilen her. To av alternativene er vanlig avrunding oppover, og bruk av $e^{-t/\\tau}$ som faktor i stedet for $1-e^{-t/\\tau}$.",
    },
    {
      question: "For $\\omega(t)=\\omega_0(t/\\tau)e^{-t/\\tau}$ med $\\omega_0=54{,}0\\,\\text{rad/s}$ og $\\tau=2{,}50\\,\\text{s}$: når er vinkelfarten størst?",
      options: ["$t=\\tau$", "$t=0$", "$t=2\\tau$", "$t=\\tau\\ln 2$"],
      explanation: "Den deriverte er $(\\omega_0/\\tau)(1-t/\\tau)e^{-t/\\tau}$, og siden eksponentialleddet aldri er null, må parentesen være det: $t=\\tau$. Ved $t=0$ er vinkelfarten null, ikke maksimal — det er der vinkelakselerasjonen er størst, og forvekslingen av de to spørsmålene er sjangerens vanligste feil. Tidspunktet $2\\tau$ gjelder modellen med kvadratet, og halveringstiden hører til et annet spørsmål.",
    },
    {
      question: "Et legeme glir over et toppunkt der krumningsradien er $6{,}25\\,\\text{m}$. Hvilken av disse fartene gjør at det mister kontakten med underlaget?",
      options: ["$8{,}50\\,\\text{m/s}$", "$7{,}00\\,\\text{m/s}$", "$5{,}00\\,\\text{m/s}$", "$3{,}00\\,\\text{m/s}$"],
      explanation: "Den kritiske farten er $\\sqrt{g\\rho}=\\sqrt{9{,}81\\cdot 6{,}25}=7{,}83\\,\\text{m/s}$, og bare farter **over** denne bryter kontakten. Alternativet på 7,00 m/s er det nærmeste og ligger under grensen — der er normalkraften fortsatt positiv, men bare 20 prosent av tyngden. De to lavere fartene ligger enda tryggere innenfor.",
    },
    {
      question: "Du har regnet ut en normalkraft i et bunnpunkt og fått et svar som er mindre enn $mg$. Hva har gått galt?",
      options: ["Sentripetalleddet er trukket fra i stedet for lagt til", "Krumningsradien er regnet ut med feil fortegn på den andrederiverte", "Massen er glemt i sluttregningen", "Farten er oppgitt i kilometer per time og ikke omregnet"],
      explanation: "I et bunnpunkt er $N=m(g+v^2/\\rho)$, som alltid er større enn $mg$; et svar under tyngden betyr at fortegnet foran sentripetalleddet er galt. Fortegnet på den andrederiverte påvirker bare hvilket punkt du har, ikke størrelsen, siden krumningsradien bruker tallverdien. En glemt masse ville gitt et svar med feil enhet, og en glemt enhetsomregning ville gitt et svar som er altfor stort, ikke for lite.",
    },
    {
      question: "Hvorfor kreves fire gjeldende siffer i totalvinkelen når du teller hele omdreininger?",
      options: ["Fordi svaret er et heltall, så en liten avrunding kan tippe det til nabotallet", "Fordi vinkelen alltid oppgis med fire siffer i oppgaveteksten", "Fordi $2\\pi$ må skrives med fire siffer for at divisjonen skal gå opp", "Fordi antall siffer i svaret må være likt antall siffer i oppgitte data"],
      explanation: "Heltallsdelen er en terskelverdi: en feil på under én prosent i totalvinkelen kan flytte svaret et helt alternativ, slik at 100,8 rad gir 16 runder mens 100 rad gir 15. Alternativet om $2\\pi$ peker på et beslektet, reelt poeng — du bør bruke 6,28319 og ikke 6,28 — men det er ikke divisjonen som «går opp», det er terskelen som avgjør. To av alternativene er regler som ikke finnes.",
    },
    {
      question: "Hva er den raskeste sluttsjekken på en utregnet normalkraft?",
      options: ["Sammenligne den med $mg$: mindre i toppunkt, større i bunnpunkt", "Sjekke at massen står i svaret", "Kontrollere at farten er kvadrert", "Regne hele oppgaven om igjen med samme metode"],
      explanation: "Sammenligningen med tyngden tar under ti sekunder og fanger både fortegnsfeil og en glemt sentripetalkorreksjon — i eksamensoppgaver stryker den typisk to eller tre av seks alternativer. At massen står i svaret, er en nyttig men svakere sjekk, siden den ikke sier noe om fortegnet. Å regne om igjen med samme metode reproduserer stort sett samme feil, og du har ikke tid til det.",
    },
  ],
  'tfy4115-10-1': [
    {
      question: "En gass har van der Waals-konstantene $a = 0{,}137\\,\\text{Pa}\\cdot\\text{m}^6/\\text{mol}^2$ og $b = 3{,}87\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$ (nitrogen). Hva er den kritiske temperaturen?",
      options: ["$126{,}2\\,\\text{K}$", "$47{,}31\\,\\text{K}$", "$15{,}77\\,\\text{K}$", "$1049\\,\\text{K}$"],
      explanation: "$T_c = 8a/(27Rb) = 126{,}2\\,\\text{K}$. Svaret $47{,}31\\,\\text{K}$ har brukt faktoren $3$, som hører til $V_c = 3b$, i stedet for faktoren $8$. Svaret $15{,}77\\,\\text{K}$ har glemt faktoren $8$ helt. Svaret $1049\\,\\text{K}$ har utelatt gasskonstanten $R$ i nevneren, og er derfor et par tierpotenser for stort.",
    },
    {
      question: "En gass har van der Waals-konstantene $a = 0{,}1355\\,\\text{Pa}\\cdot\\text{m}^6/\\text{mol}^2$ og $b = 3{,}201\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$ (argon). Hva er den kritiske temperaturen?",
      options: ["$150{,}9\\,\\text{K}$", "$56{,}57\\,\\text{K}$", "$18{,}86\\,\\text{K}$", "$1254\\,\\text{K}$"],
      explanation: "$T_c = 8a/(27Rb) = 150{,}9\\,\\text{K}$. Svaret $56{,}57\\,\\text{K}$ har brukt faktoren $3$, som hører til $V_c = 3b$, i stedet for faktoren $8$. Svaret $18{,}86\\,\\text{K}$ har glemt faktoren $8$ helt. Svaret $1254\\,\\text{K}$ har utelatt gasskonstanten $R$ i nevneren, og er derfor et par tierpotenser for stort.",
    },
    {
      question: "En gass har van der Waals-konstantene $a = 0{,}2283\\,\\text{Pa}\\cdot\\text{m}^6/\\text{mol}^2$ og $b = 4{,}278\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$ (metan). Hva er den kritiske temperaturen?",
      options: ["$190{,}2\\,\\text{K}$", "$71{,}32\\,\\text{K}$", "$23{,}77\\,\\text{K}$", "$1581\\,\\text{K}$"],
      explanation: "$T_c = 8a/(27Rb) = 190{,}2\\,\\text{K}$. Svaret $71{,}32\\,\\text{K}$ har brukt faktoren $3$, som hører til $V_c = 3b$, i stedet for faktoren $8$. Svaret $23{,}77\\,\\text{K}$ har glemt faktoren $8$ helt. Svaret $1581\\,\\text{K}$ har utelatt gasskonstanten $R$ i nevneren, og er derfor et par tierpotenser for stort.",
    },
    {
      question: "En gass har $a = 0{,}364\\,\\text{Pa}\\cdot\\text{m}^6/\\text{mol}^2$ og $b = 4{,}267\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$ (karbondioksid). Hva er det kritiske trykket?",
      options: ["$7{,}404\\,\\text{MPa}$", "$22{,}21\\,\\text{MPa}$", "$59{,}24\\,\\text{MPa}$", "$0{,}8227\\,\\text{MPa}$"],
      explanation: "$p_c = a/(27b^2) = 7{,}404\\,\\text{MPa}$, med $b^2$ regnet som eget mellomresultat. Svaret $22{,}21\\,\\text{MPa}$ har brukt $9$ i stedet for $27$ i nevneren. Svaret $59{,}24\\,\\text{MPa}$ har tatt med faktoren $8$, som hører til $T_c$. Svaret $0{,}8227\\,\\text{MPa}$ har satt inn $3b$ i kvadratet i stedet for $b$.",
    },
    {
      question: "En gass har $a = 0{,}5536\\,\\text{Pa}\\cdot\\text{m}^6/\\text{mol}^2$ og $b = 3{,}049\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$ (vann). Hva er det kritiske trykket?",
      options: ["$22{,}06\\,\\text{MPa}$", "$66{,}17\\,\\text{MPa}$", "$176{,}4\\,\\text{MPa}$", "$2{,}451\\,\\text{MPa}$"],
      explanation: "$p_c = a/(27b^2) = 22{,}06\\,\\text{MPa}$, med $b^2$ regnet som eget mellomresultat. Svaret $66{,}17\\,\\text{MPa}$ har brukt $9$ i stedet for $27$ i nevneren. Svaret $176{,}4\\,\\text{MPa}$ har tatt med faktoren $8$, som hører til $T_c$. Svaret $2{,}451\\,\\text{MPa}$ har satt inn $3b$ i kvadratet i stedet for $b$.",
    },
    {
      question: "To mol ammoniakk har $b = 3{,}713\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$. Hva er det kritiske volumet?",
      options: ["$0{,}0002228\\,\\text{m}^3$", "$0{,}0001114\\,\\text{m}^3$", "$7{,}426\\cdot10^{-5}\\,\\text{m}^3$", "$0{,}0006683\\,\\text{m}^3$"],
      explanation: "$V_c = 3nb = 3 \\cdot 2{,}00 \\cdot 3{,}713\\cdot10^{-5} = 0{,}0002228\\,\\text{m}^3$. Svaret $0{,}0001114\\,\\text{m}^3$ er det kritiske molarvolumet og har glemt stoffmengden — $V_c$ er den eneste av de tre kritiske størrelsene som avhenger av hvor mye gass du har. Svaret $7{,}426\\cdot10^{-5}\\,\\text{m}^3$ mangler faktoren $3$, og $0{,}0006683\\,\\text{m}^3$ har brukt $9$ i stedet for $3$.",
    },
    {
      question: "Et stoff har $T_c = 405{,}5\\,\\text{K}$ og $p_c = 11{,}35\\,\\text{MPa}$ (ammoniakk). Hva er van der Waals-konstanten $b$?",
      options: ["$3{,}713\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$", "$0{,}000297\\,\\text{m}^3/\\text{mol}$", "$1{,}375\\cdot10^{-6}\\,\\text{m}^3/\\text{mol}$", "$0{,}0001114\\,\\text{m}^3/\\text{mol}$"],
      explanation: "Deler du $T_c$ på $p_c$, faller $a$ ut og du sitter igjen med $T_c/p_c = 8b/R$, altså $b = RT_c/(8p_c) = 3{,}713\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$. Svaret $0{,}000297\\,\\text{m}^3/\\text{mol}$ har glemt faktoren $8$ i nevneren. Svaret $1{,}375\\cdot10^{-6}\\,\\text{m}^3/\\text{mol}$ har tatt med en faktor $27$ som hører til $a$-uttrykket. Svaret $0{,}0001114\\,\\text{m}^3/\\text{mol}$ er det kritiske molarvolumet $3b$, ikke $b$ selv.",
    },
    {
      question: "Et stoff har $T_c = 150{,}7\\,\\text{K}$ og $p_c = 4{,}86\\,\\text{MPa}$ (argon). Hva er van der Waals-konstanten $b$?",
      options: ["$3{,}223\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$", "$0{,}0002578\\,\\text{m}^3/\\text{mol}$", "$1{,}194\\cdot10^{-6}\\,\\text{m}^3/\\text{mol}$", "$9{,}668\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$"],
      explanation: "Deler du $T_c$ på $p_c$, faller $a$ ut og du sitter igjen med $T_c/p_c = 8b/R$, altså $b = RT_c/(8p_c) = 3{,}223\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$. Svaret $0{,}0002578\\,\\text{m}^3/\\text{mol}$ har glemt faktoren $8$ i nevneren. Svaret $1{,}194\\cdot10^{-6}\\,\\text{m}^3/\\text{mol}$ har tatt med en faktor $27$ som hører til $a$-uttrykket. Svaret $9{,}668\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$ er det kritiske molarvolumet $3b$, ikke $b$ selv.",
    },
    {
      question: "Hva blir kompressibilitetsfaktoren $Z_c = p_cV_c/(nRT_c)$ i det kritiske punktet for en van der Waals-gass?",
      options: ["$0{,}375$ for alle stoffer, uansett $a$ og $b$", "$1{,}000$ for alle stoffer, som for en ideell gass", "$0{,}375$ for enatomige og $0{,}274$ for toatomige gasser", "Den avhenger av $a$ og $b$ og må regnes for hvert stoff"],
      explanation: "Setter du inn de tre kritiske uttrykkene, forkortes både $a$ og $b$ bort og du står igjen med $27/72 = 3/8 = 0{,}375$ — eksakt, og likt for alle stoffer. Det er nettopp derfor tallet er en så god kontroll på at alle tre formlene er brukt riktig. Svaret $1{,}000$ ville gjeldt hvis gassen var ideell i det kritiske punktet, og det er den langt fra. Antall atomer i molekylet spiller ingen rolle her; det er frihetsgradene som avhenger av det, ikke tilstandsligningen. Og svaret om at den må regnes per stoff overser nettopp at forkortingen er fullstendig — virkelige gasser ligger riktignok på $0{,}23$–$0{,}29$, som er modellens kjente svakhet.",
    },
    {
      question: "$1$ mol karbondioksid ($a = 0{,}364$, $b = 4{,}267\\cdot10^{-5}$, SI-enheter) holdes i $1\\,\\text{L}$ ved $300\\,\\text{K}$. Hva er trykket etter van der Waals' ligning?",
      options: ["$2{,}241\\,\\text{MPa}$", "$2{,}494\\,\\text{MPa}$", "$2{,}969\\,\\text{MPa}$", "$2{,}13\\,\\text{MPa}$"],
      explanation: "$p = nRT/(V-nb) - an^2/V^2 = 2{,}605 - 0{,}364 = 2{,}241\\,\\text{MPa}$, med volumet gjort om til $\\text{m}^3$ først. Svaret $2{,}494\\,\\text{MPa}$ er den ideelle gassloven $nRT/V$ uten noen av korreksjonene. Svaret $2{,}969\\,\\text{MPa}$ har lagt tiltrekningsleddet TIL i stedet for å trekke det fra — tiltrekning senker trykket, den øker det ikke. Svaret $2{,}13\\,\\text{MPa}$ har tatt med tiltrekningen, men glemt at det er $V-nb$ og ikke $V$ i nevneren.",
    },
    {
      question: "$3$ mol nitrogen ($a = 0{,}137$, $b = 3{,}87\\cdot10^{-5}$, SI-enheter) holdes i $2\\,\\text{L}$ ved $250\\,\\text{K}$. Hva er trykket etter van der Waals' ligning?",
      options: ["$3{,}002\\,\\text{MPa}$", "$3{,}118\\,\\text{MPa}$", "$3{,}618\\,\\text{MPa}$", "$2{,}809\\,\\text{MPa}$"],
      explanation: "$p = nRT/(V-nb) - an^2/V^2 = 3{,}31 - 0{,}3083 = 3{,}002\\,\\text{MPa}$, med volumet gjort om til $\\text{m}^3$ først. Svaret $3{,}118\\,\\text{MPa}$ er den ideelle gassloven $nRT/V$ uten noen av korreksjonene. Svaret $3{,}618\\,\\text{MPa}$ har lagt tiltrekningsleddet TIL i stedet for å trekke det fra — tiltrekning senker trykket, den øker det ikke. Svaret $2{,}809\\,\\text{MPa}$ har tatt med tiltrekningen, men glemt at det er $V-nb$ og ikke $V$ i nevneren.",
    },
    {
      question: "$2$ mol metan ($a = 0{,}2283$, $b = 4{,}278\\cdot10^{-5}$, SI-enheter) holdes i $4\\,\\text{L}$ ved $320\\,\\text{K}$. Hva er trykket etter van der Waals' ligning?",
      options: ["$1{,}302\\,\\text{MPa}$", "$1{,}33\\,\\text{MPa}$", "$1{,}416\\,\\text{MPa}$", "$1{,}273\\,\\text{MPa}$"],
      explanation: "$p = nRT/(V-nb) - an^2/V^2 = 1{,}359 - 0{,}05708 = 1{,}302\\,\\text{MPa}$, med volumet gjort om til $\\text{m}^3$ først. Svaret $1{,}33\\,\\text{MPa}$ er den ideelle gassloven $nRT/V$ uten noen av korreksjonene. Svaret $1{,}416\\,\\text{MPa}$ har lagt tiltrekningsleddet TIL i stedet for å trekke det fra — tiltrekning senker trykket, den øker det ikke. Svaret $1{,}273\\,\\text{MPa}$ har tatt med tiltrekningen, men glemt at det er $V-nb$ og ikke $V$ i nevneren.",
    },
    {
      question: "Hvilke enheter må van der Waals-konstantene $a$ og $b$ ha?",
      options: ["$a$ i $\\text{Pa}\\cdot\\text{m}^6/\\text{mol}^2$ og $b$ i $\\text{m}^3/\\text{mol}$", "$a$ i $\\text{Pa}\\cdot\\text{m}^3/\\text{mol}$ og $b$ i $\\text{m}^3/\\text{mol}^2$", "$a$ i $\\text{Pa}\\cdot\\text{m}^6/\\text{mol}$ og $b$ i $\\text{m}^3$", "$a$ i $\\text{J}/\\text{mol}$ og $b$ i $\\text{m}^3/\\text{mol}$"],
      explanation: "Leddet $an^2/V^2$ må ha enheten trykk, så $[a] = \\text{Pa}\\cdot\\text{m}^6/\\text{mol}^2$; leddet $nb$ må ha enheten volum, så $[b] = \\text{m}^3/\\text{mol}$. Svaret med $a$ i $\\text{Pa}\\cdot\\text{m}^3/\\text{mol}$ ville gjeldt hvis leddet var $an/V$, altså første potens i tettheten — men tiltrekningen krever to molekyler og går derfor som kvadratet. Svaret der $b$ står i $\\text{m}^3$ uten «per mol» glemmer at $b$ multipliseres med stoffmengden. Og $a$ i $\\text{J}/\\text{mol}$ er en molar energi, ikke noe som kan gi pascal når det deles på et kvadrert molarvolum.",
    },
    {
      question: "Hva blir van der Waals-ligningen hvis begge konstantene settes til null, altså $a = 0$ og $b = 0$?",
      options: ["Den ideelle gassloven $pV = nRT$, uten noen korreksjoner igjen", "En gass som fremdeles kan kondensere, men først ved lavere trykk", "Uttrykket $pV = nRT$ med en kritisk temperatur som blir uendelig høy", "En ligning uten løsning, siden begge leddene i produktet blir null"],
      explanation: "Med $a = 0$ forsvinner trykkorreksjonen og med $b = 0$ volumkorreksjonen, og igjen står $pV = nRT$. Det er den raskeste kontrollen på at ligningen er skrevet riktig. En ideell gass kan aldri kondensere: uten tiltrekning finnes ingenting som holder molekylene sammen. Og den kritiske temperaturen $T_c = 8a/(27Rb)$ blir ikke uendelig, men et ubestemt uttrykk som med $a = 0$ går mot null — det finnes ikke noe kritisk punkt i det hele tatt. Ligningen har god løsning; det er bare korreksjonene som er borte.",
    },
    {
      question: "Et rent stoff holdes ved et trykk som ligger UNDER trippeltrykket. Hva skjer når det faste stoffet varmes opp?",
      options: ["Det går rett over i gass — det sublimerer, uten væskefase underveis", "Det smelter først til væske og koker deretter, som ved vanlig lufttrykk", "Det smelter til væske, men først ved en høyere temperatur enn ellers", "Ingenting skjer før trykket øker; faseoverganger krever minst trippeltrykket"],
      explanation: "Under trippeltrykket finnes ingen væskefase ved noen temperatur, så en vannrett ferd i fasediagrammet krysser bare sublimasjonslinjen. Det er derfor tørris ryker i stedet for å bli våt: karbondioksid har trippeltrykk $5{,}18$ atmosfærer, godt over lufttrykket. Svaret om smelting og koking beskriver en ferd OVER trippeltrykket. At smelting bare skjer ved høyere temperatur er også galt: det er ikke temperaturen, men trykket, som utelukker væsken. Og faseoverganger krever ikke trippeltrykk — sublimasjon er en fullverdig faseovergang.",
    },
    {
      question: "Hva kjennetegner det kritiske punktet i et $p$–$T$-fasediagram?",
      options: ["Damptrykkslinjen slutter der; over det er væske og gass ikke lenger å skille", "Tre koeksistenslinjer møtes der, så alle tre fasene finnes samtidig", "Smeltelinjen og sublimasjonslinjen krysser hverandre der", "Det er punktet der stoffet har lavest mulig trykk i væskefasen"],
      explanation: "Det kritiske punktet er enden på væske–gass-linjen: over $T_c$ og $p_c$ finnes ingen skarp overgang, bare et overkritisk fluid. Beskrivelsen med tre linjer som møtes og tre faser samtidig er trippelpunktet — de to forveksles ofte, men trippelpunktet ligger nede til venstre ved lavt trykk, mens det kritiske punktet ligger oppe til høyre ved høyt trykk. Smeltelinjen og sublimasjonslinjen krysser ikke hverandre; de møtes bare i trippelpunktet, sammen med den tredje. Og laveste trykk i væskefasen er nettopp trippeltrykket, ikke det kritiske trykket.",
    },
    {
      question: "Vann har trippelpunkt ved $273{,}16\\,\\text{K}$ og $611{,}7\\,\\text{Pa}$ og kritisk punkt ved $647{,}1\\,\\text{K}$ og $22{,}06\\,\\text{MPa}$. En prøve holder $700\\,\\text{K}$ ved $30\\,\\text{MPa}$. Hva er den?",
      options: ["Et overkritisk fluid — både trykket og temperaturen ligger over de kritiske", "Vanndamp, siden temperaturen er godt over kokepunktet ved én atmosfære", "Flytende vann, siden trykket er langt over trippeltrykket", "Is, siden trykk over det kritiske alltid presser stoffet til fast fase"],
      explanation: "Både $700\\,\\text{K} > 647{,}1\\,\\text{K}$ og $30\\,\\text{MPa} > 22{,}06\\,\\text{MPa}$, så prøven ligger i det overkritiske området der væske og gass ikke er atskilte begreper. Å kalle det damp forutsetter at det finnes en væskefase å skille seg fra, og det gjør det ikke over $T_c$. Å kalle det væske er galt av samme grunn, selv om tettheten kan være væskeaktig. Og høyt trykk presser ikke stoffet til fast fase her: smeltelinjen for vann ligger ved langt lavere temperaturer.",
    },
    {
      question: "Hva er den fysiske forskjellen på trippelpunktet og det kritiske punktet?",
      options: ["I trippelpunktet er tre faser i likevekt; i det kritiske forsvinner væske–gass-skillet", "I trippelpunktet forsvinner væske–gass-skillet; i det kritiske er tre faser i likevekt", "Begge er punkter der tre faser møtes, men ved ulikt trykk og ulik temperatur", "Trippelpunktet gjelder rene stoffer, det kritiske punktet bare for blandinger"],
      explanation: "Trippelpunktet er det ene punktet der fast, flytende og gassform er i likevekt samtidig, og det er der de tre koeksistenslinjene møtes. Det kritiske punktet er der damptrykkslinjen slutter, fordi forskjellen mellom væske og gass er krympet til null. Det ombyttede svaret er nettopp den vanligste forvekslingen i sjangeren. Bare ett av punktene har tre faser; i det kritiske punktet er det to som smelter sammen til én. Og begge begrepene gjelder rene stoffer — for blandinger blir bildet mer sammensatt, ikke mindre.",
    },
    {
      question: "Hvorfor heller smeltelinjen for vann BAKOVER i fasediagrammet, mens den heller forover for nesten alle andre stoffer?",
      options: ["Fordi is er mindre tett enn flytende vann, så trykk favoriserer væskefasen", "Fordi vann har uvanlig høy fordampningsvarme sammenlignet med andre stoffer", "Fordi vannets trippelpunkt ligger ved et uvanlig lavt trykk, bare $611{,}7\\,\\text{Pa}$", "Fordi vannmolekylet er polart, og polare molekyler har alltid negativ helning"],
      explanation: "Clausius–Clapeyron gir $dp/dT = l/(T\\,\\Delta V)$, og for smeltelinjen er $\\Delta V = V_\\text{væske} - V_\\text{fast}$. Is flyter, altså er is minst tett, altså er $\\Delta V < 0$ og helningen negativ. Fordampningsvarmen er høy for vann, men den angår damptrykkslinjen, ikke smeltelinjen. Trippeltrykket er lavt, men det sier ingenting om helningen på linjene som møtes der. Og polaritet i seg selv avgjør ikke fortegnet — det er tetthetsforskjellen mellom de to fasene som gjør det, og den er negativ for svært få stoffer.",
    },
    {
      question: "En van der Waals-isoterm under den kritiske temperaturen har et område der $\\partial p/\\partial V > 0$. Hva betyr det?",
      options: ["Området er mekanisk ustabilt; det virkelige systemet er en væske–damp-blanding der", "Området beskriver overkritisk fluid, som er stabilt ved alle volumer", "Området er der væsken er komprimert så hardt at egenvolumet dominerer", "Fortegnet er en regnefeil; van der Waals-isotermer faller monotont overalt"],
      explanation: "At trykket stiger når volumet øker, betyr at den minste utvidelse ville drevet en enda større utvidelse — ingen virkelig tilstand kan ligge der. Systemet følger i stedet et vannrett platå der væske og damp sameksisterer ved damptrykket. Overkritisk fluid finnes bare over $T_c$, og der er isotermen monotont fallende. Egenvolumet dominerer ved svært små volumer, der kurven stiger bratt oppover og er fullt stabil — det er en annen del av kurven. Og fortegnet er ingen regnefeil: bølgen er en ekte egenskap ved ligningen, og nettopp den som gjør at modellen kan beskrive en faseovergang.",
    },
    {
      question: "Hvilken vei trekker de to korreksjonsleddene i van der Waals-ligningen på trykket?",
      options: ["Egenvolumet $b$ øker trykket, tiltrekningen $a$ senker det", "Egenvolumet $b$ senker trykket, tiltrekningen $a$ øker det", "Begge senker trykket, og derfor ligger vdW-trykket alltid under det ideelle", "Begge øker trykket, og derfor ligger vdW-trykket alltid over det ideelle"],
      explanation: "I formen $p = nRT/(V-nb) - an^2/V^2$ gjør $b$ nevneren mindre, altså trykket høyere: gassen har mindre plass enn du trodde. Tiltrekningsleddet trekkes fra, altså senker det trykket: et molekyl på vei mot veggen dras bakover av naboene. Den ombyttede beskrivelsen er sjangerens vanligste feil. At begge skulle trekke samme vei er også galt — og det er nettopp at de trekker motsatt vei som gjør at det finnes en kritisk temperatur, der den ene akkurat balanserer den andre.",
    },
    {
      question: "Hvorfor går tiltrekningsleddet i van der Waals-ligningen som $n^2/V^2$ og ikke som $n/V$?",
      options: ["Tiltrekningen virker parvis, så bidraget går som kvadratet av tettheten", "Fordi trykket i en gass alltid går som kvadratet av tettheten", "Fordi volumet står i kvadrat i nevneren, og telleren må ha samme potens", "Fordi tiltrekningskreftene mellom molekyler avtar som andre potens av avstanden"],
      explanation: "Et tiltrekkende par krever to molekyler, og sannsynligheten for at to er nær hverandre går som tettheten i annen. Derfor $\\left(n/V\\right)^2$, og derfor $an^2/V^2$. Trykket i en gass går ikke generelt som kvadratet av tettheten — den ideelle gassloven er lineær i tettheten. At telleren må matche nevneren er ingen fysisk begrunnelse; det er kvadratet i tettheten som gir begge deler samtidig. Og avstandsavhengigheten til selve kraften er en annen sak: van der Waals-kreftene avtar mye raskere enn andre potens.",
    },
    {
      question: "Ett mol nitrogen ($b = 3{,}870\\cdot10^{-5}\\,\\text{m}^3/\\text{mol}$) fyller $24{,}5\\,\\text{L}$. Hvor stor brøkdel av volumet er opptatt av molekylenes eget volum?",
      options: ["$0{,}158$ prosent", "$1{,}58$ prosent", "$15{,}8$ prosent", "$0{,}0158$ prosent"],
      explanation: "$nb/V = 3{,}870\\cdot10^{-5}/24{,}5\\cdot10^{-3} = 1{,}580\\cdot10^{-3}$, altså $0{,}158$ prosent. De tre andre svarene er samme siffer med feil tierpotens, og de kommer av at literne ikke ble gjort om til kubikkmeter, eller ble gjort om én gang for mye. Regn alltid om volumet FØRST. Poenget med tallet er at det er så lite: derfor er luft ved romtemperatur og vanlig trykk praktisk talt en ideell gass.",
    },
    {
      question: "Argon har kritisk temperatur $150{,}9\\,\\text{K}$. Kan argon være flytende i en trykkflaske i romtemperatur?",
      options: ["Nei — over den kritiske temperaturen finnes ingen væskefase ved noe trykk", "Ja, hvis trykket kommer over det kritiske trykket på $4{,}90\\,\\text{MPa}$", "Ja, men bare hvis flasken også holdes over trippeltrykket", "Det avhenger av hvor mye argon flasken inneholder"],
      explanation: "Romtemperatur er rundt $293\\,\\text{K}$, nesten dobbelt så høyt som $T_c = 150{,}9\\,\\text{K}$. Over $T_c$ er det ingen væskefase å oppnå, uansett trykk — flasken inneholder komprimert gass. Å øke trykket over $p_c$ gir et overkritisk fluid, ikke en væske med flate. Trippeltrykket er en nedre grense for væske, ikke en betingelse som kan redde deg over $T_c$. Og mengden spiller ingen rolle: $T_c$ er en materialkonstant. Sammenlign med propan, der $T_c = 370\\,\\text{K}$ ligger over romtemperatur — propan KAN være flytende på flaske.",
    },
  ],
  'tfy4115-10-2': [
    {
      question: "Vann koker ved $100\\,^\\circ\\text{C}$ ved $101{,}33\\,\\text{kPa}$ og har molar fordampningsvarme $40{,}7\\,\\text{kJ/mol}$. Hva er damptrykket ved $80\\,^\\circ\\text{C}$?",
      options: ["$48{,}24\\,\\text{kPa}$", "$212{,}8\\,\\text{kPa}$", "$101{,}3\\,\\text{kPa}$", "$482{,}4\\,\\text{kPa}$"],
      explanation: "Med begge temperaturer i kelvin blir eksponenten $-(l/R)(1/T - 1/T_0)$, og $p = p_0e^{\\dots} = 48{,}24\\,\\text{kPa}$. Svaret $212{,}8\\,\\text{kPa}$ har snudd fortegnet i eksponenten — sjekk alltid retningen: damptrykket stiger med temperaturen, for alle stoffer. Svaret $101{,}3\\,\\text{kPa}$ har ekstrapolert lineært med helningen ved kokepunktet i stedet for å bruke eksponentialen; kurven er konveks, så det bommer systematisk. Svaret $482{,}4\\,\\text{kPa}$ er riktig regning med én tierpotens for mye.",
    },
    {
      question: "Vann koker ved $100\\,^\\circ\\text{C}$ ved $101{,}33\\,\\text{kPa}$ og har molar fordampningsvarme $40{,}7\\,\\text{kJ/mol}$. Hva er damptrykket ved $60\\,^\\circ\\text{C}$?",
      options: ["$21\\,\\text{kPa}$", "$488{,}8\\,\\text{kPa}$", "$101{,}2\\,\\text{kPa}$", "$210\\,\\text{kPa}$"],
      explanation: "Med begge temperaturer i kelvin blir eksponenten $-(l/R)(1/T - 1/T_0)$, og $p = p_0e^{\\dots} = 21\\,\\text{kPa}$. Svaret $488{,}8\\,\\text{kPa}$ har snudd fortegnet i eksponenten — sjekk alltid retningen: damptrykket stiger med temperaturen, for alle stoffer. Svaret $101{,}2\\,\\text{kPa}$ har ekstrapolert lineært med helningen ved kokepunktet i stedet for å bruke eksponentialen; kurven er konveks, så det bommer systematisk. Svaret $210\\,\\text{kPa}$ er riktig regning med én tierpotens for mye.",
    },
    {
      question: "Vann koker ved $100\\,^\\circ\\text{C}$ ved $101{,}33\\,\\text{kPa}$ og har molar fordampningsvarme $40{,}7\\,\\text{kJ/mol}$. Hva er damptrykket ved $120\\,^\\circ\\text{C}$?",
      options: ["$197{,}4\\,\\text{kPa}$", "$52{,}02\\,\\text{kPa}$", "$101{,}4\\,\\text{kPa}$", "$1974\\,\\text{kPa}$"],
      explanation: "Med begge temperaturer i kelvin blir eksponenten $-(l/R)(1/T - 1/T_0)$, og $p = p_0e^{\\dots} = 197{,}4\\,\\text{kPa}$. Svaret $52{,}02\\,\\text{kPa}$ har snudd fortegnet i eksponenten — sjekk alltid retningen: damptrykket stiger med temperaturen, for alle stoffer. Svaret $101{,}4\\,\\text{kPa}$ har ekstrapolert lineært med helningen ved kokepunktet i stedet for å bruke eksponentialen; kurven er konveks, så det bommer systematisk. Svaret $1974\\,\\text{kPa}$ er riktig regning med én tierpotens for mye.",
    },
    {
      question: "Etanol koker ved $78{,}4\\,^\\circ\\text{C}$ ved $101{,}33\\,\\text{kPa}$ og har molar fordampningsvarme $38{,}6\\,\\text{kJ/mol}$. Hva er damptrykket ved $50\\,^\\circ\\text{C}$?",
      options: ["$31{,}78\\,\\text{kPa}$", "$323\\,\\text{kPa}$", "$101{,}2\\,\\text{kPa}$", "$317{,}8\\,\\text{kPa}$"],
      explanation: "Med begge temperaturer i kelvin blir eksponenten $-(l/R)(1/T - 1/T_0)$, og $p = p_0e^{\\dots} = 31{,}78\\,\\text{kPa}$. Svaret $323\\,\\text{kPa}$ har snudd fortegnet i eksponenten — sjekk alltid retningen: damptrykket stiger med temperaturen, for alle stoffer. Svaret $101{,}2\\,\\text{kPa}$ har ekstrapolert lineært med helningen ved kokepunktet i stedet for å bruke eksponentialen; kurven er konveks, så det bommer systematisk. Svaret $317{,}8\\,\\text{kPa}$ er riktig regning med én tierpotens for mye.",
    },
    {
      question: "Lufttrykket på toppen av Mount Everest er $34\\,\\text{kPa}$. Ved hvilken temperatur koker vann der? (Kokepunktet ved $101{,}325\\,\\text{kPa}$ er $100{,}0\\,^\\circ\\text{C}$, og $l = 40{,}66\\,\\text{kJ/mol}$.)",
      options: ["$71{,}3\\,^\\circ\\text{C}$", "$133{,}9\\,^\\circ\\text{C}$", "$344{,}5\\,^\\circ\\text{C}$", "$100{,}0\\,^\\circ\\text{C}$"],
      explanation: "Bruk $1/T = 1/T_0 - (R/l)\\ln(p/p_0)$, som gir $T = 344{,}5\\,\\text{K} = 71{,}3\\,^\\circ\\text{C}$. Svaret $133{,}9\\,^\\circ\\text{C}$ har snudd fortegnet foran logaritmen. Svaret $344{,}5\\,^\\circ\\text{C}$ er den riktige temperaturen, men oppgitt i kelvin og merket med celsius — enhetsmerkingen er en del av svaret. Og $100{,}0\\,^\\circ\\text{C}$ er referansepunktet selv, altså svaret hvis du glemte at trykket var et annet.",
    },
    {
      question: "Lufttrykket i en trykkoker er $203\\,\\text{kPa}$. Ved hvilken temperatur koker vann der? (Kokepunktet ved $101{,}325\\,\\text{kPa}$ er $100{,}0\\,^\\circ\\text{C}$, og $l = 40{,}66\\,\\text{kJ/mol}$.)",
      options: ["$120{,}8\\,^\\circ\\text{C}$", "$81{,}26\\,^\\circ\\text{C}$", "$394\\,^\\circ\\text{C}$", "$100{,}0\\,^\\circ\\text{C}$"],
      explanation: "Bruk $1/T = 1/T_0 - (R/l)\\ln(p/p_0)$, som gir $T = 394\\,\\text{K} = 120{,}8\\,^\\circ\\text{C}$. Svaret $81{,}26\\,^\\circ\\text{C}$ har snudd fortegnet foran logaritmen. Svaret $394\\,^\\circ\\text{C}$ er den riktige temperaturen, men oppgitt i kelvin og merket med celsius — enhetsmerkingen er en del av svaret. Og $100{,}0\\,^\\circ\\text{C}$ er referansepunktet selv, altså svaret hvis du glemte at trykket var et annet.",
    },
    {
      question: "Lufttrykket i tre tusen meters høyde er $70\\,\\text{kPa}$. Ved hvilken temperatur koker vann der? (Kokepunktet ved $101{,}325\\,\\text{kPa}$ er $100{,}0\\,^\\circ\\text{C}$, og $l = 40{,}66\\,\\text{kJ/mol}$.)",
      options: ["$89{,}76\\,^\\circ\\text{C}$", "$110{,}8\\,^\\circ\\text{C}$", "$362{,}9\\,^\\circ\\text{C}$", "$100{,}0\\,^\\circ\\text{C}$"],
      explanation: "Bruk $1/T = 1/T_0 - (R/l)\\ln(p/p_0)$, som gir $T = 362{,}9\\,\\text{K} = 89{,}76\\,^\\circ\\text{C}$. Svaret $110{,}8\\,^\\circ\\text{C}$ har snudd fortegnet foran logaritmen. Svaret $362{,}9\\,^\\circ\\text{C}$ er den riktige temperaturen, men oppgitt i kelvin og merket med celsius — enhetsmerkingen er en del av svaret. Og $100{,}0\\,^\\circ\\text{C}$ er referansepunktet selv, altså svaret hvis du glemte at trykket var et annet.",
    },
    {
      question: "Hvor bratt stiger damptrykkskurven for vann ved kokepunktet, altså hva er $dp/dT$ ved $373{,}15\\,\\text{K}$? ($l = 40{,}66\\,\\text{kJ/mol}$, $p = 101{,}325\\,\\text{kPa}$.)",
      options: ["$3559\\,\\text{Pa/K}$", "$161{,}3\\,\\text{Pa/K}$", "$1{,}328\\cdot10^{6}\\,\\text{Pa/K}$", "$13{,}09\\,\\text{Pa/K}$"],
      explanation: "$dp/dT = lp/(RT^2) = 40660 \\cdot 101325/(8{,}314 \\cdot 373{,}15^2) = 3559\\,\\text{Pa/K}$, altså $3{,}5$ prosent av trykket per kelvin. Svaret $161{,}3\\,\\text{Pa/K}$ er helningen ved $20\\,^\\circ\\text{C}$, der både $p$ og $1/T^2$ er mindre — riktig formel, feil punkt på kurven. Svaret $1{,}328\\cdot10^{6}\\,\\text{Pa/K}$ har brukt $T$ i første potens i nevneren i stedet for $T^2$. Og $13{,}09\\,\\text{Pa/K}$ har satt $l$ inn i kilojoule per mol i stedet for joule per mol.",
    },
    {
      question: "Et stoff har damptrykk $18{,}0\\,\\text{kPa}$ ved $310{,}0\\,\\text{K}$ og $101{,}3\\,\\text{kPa}$ ved $355{,}0\\,\\text{K}$. Hva er den molare fordampningsvarmen?",
      options: ["$35{,}1\\,\\text{kJ/mol}$", "$-35{,}1\\,\\text{kJ/mol}$", "$4225\\,\\text{kJ/mol}$", "$4{,}23\\,\\text{kJ/mol}$"],
      explanation: "$l = -R\\ln(p_2/p_1)/(1/T_2 - 1/T_1) = -8{,}314 \\cdot 1{,}72771/(-4{,}08905\\cdot10^{-4}) = 3{,}513\\cdot10^{4}\\,\\text{J/mol}$. Det negative svaret har mistet ett av de to minustegnene: parentesen er negativ når $T_2 > T_1$, og fordampningsvarme er alltid positiv. Svaret $4225\\,\\text{kJ/mol}$ er $l/R$, som har enhet kelvin og ikke energi per mol — den mellomregningen skal ganges med $R$. Og $4{,}23\\,\\text{kJ/mol}$ er samme mellomregning med feil tierpotens. Til sammenligning ligger vanlige væsker mellom $25$ og $45\\,\\text{kJ/mol}$.",
    },
    {
      question: "Vann har spesifikk fordampningsvarme $2{,}26\\cdot10^{6}\\,\\text{J/kg}$ og molar masse $18{,}015\\,\\text{g/mol}$. Hva er den molare fordampningsvarmen?",
      options: ["$40{,}7\\,\\text{kJ/mol}$", "$125\\,\\text{kJ/mol}$", "$40{,}7\\,\\text{MJ/mol}$", "$2{,}26\\,\\text{kJ/mol}$"],
      explanation: "$l = L_vM = 2{,}26\\cdot10^{6} \\cdot 18{,}015\\cdot10^{-3} = 4{,}07\\cdot10^{4}\\,\\text{J/mol}$, og tabellverdien ved kokepunktet er $40{,}66\\,\\text{kJ/mol}$. Svaret $125\\,\\text{kJ/mol}$ har DELT på molmassen i stedet for å gange — retningen avgjøres av enhetene: $\\text{J/kg}$ ganger $\\text{kg/mol}$ gir $\\text{J/mol}$. Svaret $40{,}7\\,\\text{MJ/mol}$ har brukt molmassen i gram per mol uten å gjøre om til kilogram, altså en faktor tusen. Og $2{,}26\\,\\text{kJ/mol}$ har bare byttet enhetsmerke uten å regne — Clausius–Clapeyron med $R$ krever den molare formen.",
    },
    {
      question: "En stålstang er $25\\,\\text{m}$ lang og varmes $35\\,\\text{K}$. Med $\\alpha = 1{,}2\\cdot10^{-5}\\,\\text{K}^{-1}$, hvor mye lengre blir den?",
      options: ["$10{,}5\\,\\text{mm}$", "$31{,}5\\,\\text{mm}$", "$105\\,\\text{mm}$", "$0{,}42\\,\\text{mm}$"],
      explanation: "$\\Delta L = \\alpha L\\Delta T = 10{,}5\\,\\text{mm}$. Temperaturen inngår bare som en differanse, så celsius er trygt her. Svaret $31{,}5\\,\\text{mm}$ har brukt volumkoeffisienten $\\beta = 3\\alpha$ i en lengdeformel — faktoren tre er antall dimensjoner. Svaret $105\\,\\text{mm}$ er riktig regning med én tierpotens for mye. Og $0{,}42\\,\\text{mm}$ har glemt lengden, altså regnet som om stangen var én meter.",
    },
    {
      question: "En aluminiumstang er $8\\,\\text{m}$ lang og varmes $45\\,\\text{K}$. Med $\\alpha = 2{,}3\\cdot10^{-5}\\,\\text{K}^{-1}$, hvor mye lengre blir den?",
      options: ["$8{,}28\\,\\text{mm}$", "$24{,}84\\,\\text{mm}$", "$82{,}8\\,\\text{mm}$", "$1{,}035\\,\\text{mm}$"],
      explanation: "$\\Delta L = \\alpha L\\Delta T = 8{,}28\\,\\text{mm}$. Temperaturen inngår bare som en differanse, så celsius er trygt her. Svaret $24{,}84\\,\\text{mm}$ har brukt volumkoeffisienten $\\beta = 3\\alpha$ i en lengdeformel — faktoren tre er antall dimensjoner. Svaret $82{,}8\\,\\text{mm}$ er riktig regning med én tierpotens for mye. Og $1{,}035\\,\\text{mm}$ har glemt lengden, altså regnet som om stangen var én meter.",
    },
    {
      question: "En kobberstang er $12\\,\\text{m}$ lang og varmes $60\\,\\text{K}$. Med $\\alpha = 1{,}7\\cdot10^{-5}\\,\\text{K}^{-1}$, hvor mye lengre blir den?",
      options: ["$12{,}24\\,\\text{mm}$", "$36{,}72\\,\\text{mm}$", "$122{,}4\\,\\text{mm}$", "$1{,}02\\,\\text{mm}$"],
      explanation: "$\\Delta L = \\alpha L\\Delta T = 12{,}24\\,\\text{mm}$. Temperaturen inngår bare som en differanse, så celsius er trygt her. Svaret $36{,}72\\,\\text{mm}$ har brukt volumkoeffisienten $\\beta = 3\\alpha$ i en lengdeformel — faktoren tre er antall dimensjoner. Svaret $122{,}4\\,\\text{mm}$ er riktig regning med én tierpotens for mye. Og $1{,}02\\,\\text{mm}$ har glemt lengden, altså regnet som om stangen var én meter.",
    },
    {
      question: "En betongstang er $30\\,\\text{m}$ lang og varmes $40\\,\\text{K}$. Med $\\alpha = 1{,}2\\cdot10^{-5}\\,\\text{K}^{-1}$, hvor mye lengre blir den?",
      options: ["$14{,}4\\,\\text{mm}$", "$43{,}2\\,\\text{mm}$", "$144\\,\\text{mm}$", "$0{,}48\\,\\text{mm}$"],
      explanation: "$\\Delta L = \\alpha L\\Delta T = 14{,}4\\,\\text{mm}$. Temperaturen inngår bare som en differanse, så celsius er trygt her. Svaret $43{,}2\\,\\text{mm}$ har brukt volumkoeffisienten $\\beta = 3\\alpha$ i en lengdeformel — faktoren tre er antall dimensjoner. Svaret $144\\,\\text{mm}$ er riktig regning med én tierpotens for mye. Og $0{,}48\\,\\text{mm}$ har glemt lengden, altså regnet som om stangen var én meter.",
    },
    {
      question: "Hva er sammenhengen mellom volumutvidelseskoeffisienten $\\beta$ og lengdeutvidelseskoeffisienten $\\alpha$ for et isotropt fast stoff?",
      options: ["$\\beta \\approx 3\\alpha$, fordi volumet vokser i tre uavhengige retninger", "$\\beta \\approx \\alpha^3$, fordi volumet er lengden opphøyd i tredje", "$\\beta \\approx \\alpha/3$, fordi utvidelsen fordeles på tre retninger", "$\\beta = \\alpha$, siden begge måler relativ endring per kelvin"],
      explanation: "En terning med side $L$ får volumet $L^3(1+\\alpha\\Delta T)^3 = V(1 + 3\\alpha\\Delta T + \\dots)$, og de høyere leddene er forsvinnende når $\\alpha\\Delta T$ er en promille. Altså $\\beta \\approx 3\\alpha$. Svaret $\\alpha^3$ forveksler potenseringen av parentesen med potensering av koeffisienten selv, og ville gitt en $\\beta$ på $10^{-15}$-nivå. Svaret $\\alpha/3$ snur relasjonen: utvidelsen fordeles ikke, den legger seg sammen i tre retninger. Og at de skulle være like, overser at den ene måler én dimensjon og den andre tre.",
    },
    {
      question: "En full glassflaske på $1{,}000\\,\\text{L}$ ($\\beta = 2{,}70\\cdot10^{-5}\\,\\text{K}^{-1}$) fylt med vann ($\\beta = 2{,}10\\cdot10^{-4}\\,\\text{K}^{-1}$) varmes $30{,}0\\,\\text{K}$. Hvor mye renner over?",
      options: ["$5{,}49\\,\\text{mL}$", "$6{,}30\\,\\text{mL}$", "$0{,}810\\,\\text{mL}$", "$7{,}11\\,\\text{mL}$"],
      explanation: "Beholderen utvider seg også, så bare differansen renner over: $(\\beta_\\text{vann} - \\beta_\\text{glass})V\\Delta T = 1{,}830\\cdot10^{-4} \\cdot 1{,}000 \\cdot 30{,}0\\,\\text{L} = 5{,}49\\,\\text{mL}$. Svaret $6{,}30\\,\\text{mL}$ har glemt at flasken vokser, og gir derfor systematisk for mye — det er sjangerens vanligste feil. Svaret $0{,}810\\,\\text{mL}$ er flaskens egen utvidelse alene. Og $7{,}11\\,\\text{mL}$ har LAGT SAMMEN de to koeffisientene i stedet for å trekke dem fra hverandre.",
    },
    {
      question: "Et hull med diameter $25{,}00\\,\\text{mm}$ er boret i en stålplate ($\\alpha = 12\\cdot10^{-6}\\,\\text{K}^{-1}$). Hva skjer med hullet når platen varmes $200\\,\\text{K}$?",
      options: ["Diameteren vokser til $25{,}06\\,\\text{mm}$ — hullet blir større", "Diameteren krymper til $24{,}94\\,\\text{mm}$, fordi materialet utvider seg innover", "Diameteren er uendret, siden det ikke er noe materiale i hullet", "Diameteren vokser til $25{,}18\\,\\text{mm}$, tre ganger så mye som en stang"],
      explanation: "Hver eneste avstand i platen skaleres med $(1+\\alpha\\Delta T)$, også avstander på tvers av et hull: $\\Delta d = 12\\cdot10^{-6} \\cdot 25{,}00 \\cdot 200 = 0{,}0600\\,\\text{mm}$. Tenk deg at sirkelen bare er tegnet på platen — den vokser med materialet rundt, og at materialet faktisk er fjernet, endrer ingenting. At hullet skulle krympe, er sjangerens klassiske felle. At det skulle være uendret, overser at det er platen som setter hullets størrelse. Og faktoren tre hører til volum, ikke til en diameter.",
    },
    {
      question: "I hvilket av disse uttrykkene er det trygt å regne temperaturen i celsius?",
      options: ["$\\Delta L = \\alpha L\\,\\Delta T$, siden bare en differanse inngår", "$p = p_0e^{-(l/R)(1/T-1/T_0)}$, siden forholdet mellom trykkene teller", "$\\eta = 1 - T_k/T_v$, siden det er et forhold mellom to temperaturer", "$P = e\\sigma AT^4$, siden emissiviteten er dimensjonsløs"],
      explanation: "Regelen er: står $T$ alene, kreves kelvin; står den bare i en differanse, er celsius trygt. En oppvarming på $35$ celsiusgrader ER $35$ kelvin. I Clausius–Clapeyron står $T$ i en nevner i eksponenten, og celsius gir feil på flere tierpotenser. I virkningsgraden er det nettopp FORHOLDET mellom to absolutte temperaturer som teller, og et forhold krever felles nullpunkt. Og i strålingsloven er $T^4$ en absolutt størrelse — det er der celsius er aller dyrest.",
    },
    {
      question: "Hvorfor er $dp/dT$ positiv for damptrykkslinjen til ethvert stoff?",
      options: ["Fordi $\\Delta V = V_\\text{gass} - V_\\text{væske}$ alltid er positiv", "Fordi fordampningsvarmen alltid er positiv, uansett stoff", "Fordi absolutt temperatur alltid er positiv i nevneren", "Fordi damp alltid har høyere trykk enn væsken den kommer fra"],
      explanation: "I $dp/dT = l/(T\\Delta V)$ er både $l$ og $T$ positive, så fortegnet bestemmes helt av $\\Delta V$ — og gass er alltid mye mindre tett enn væske, for vann ved kokepunktet en faktor $1700$. At $l$ og $T$ er positive er riktig, men det avgjør ikke fortegnet alene; nettopp derfor kan smeltelinjen for vann ha NEGATIV helning, med samme positive $l$ og $T$, fordi is er mindre tett enn vann. Og at damp skulle ha høyere trykk enn væsken, er ikke meningsfullt: i likevekt har de to fasene samme trykk.",
    },
    {
      question: "Hvorfor heller smeltelinjen for vann bakover i fasediagrammet?",
      options: ["Fordi is er mindre tett enn vann, så $\\Delta V$ er negativ i Clausius–Clapeyron", "Fordi vann har uvanlig lav smeltevarme sammenlignet med andre stoffer", "Fordi vannets trippelpunkt ligger ved uvanlig lav temperatur", "Fordi smeltelinjer generelt heller bakover for alle rene stoffer"],
      explanation: "$dp/dT = l/(T\\Delta V)$ med $\\Delta V = V_\\text{væske} - V_\\text{fast}$. Is flyter, altså er is minst tett, altså er $\\Delta V < 0$ og helningen negativ. Vannets smeltevarme er tvert imot uvanlig HØY, og den påvirker uansett bare hvor bratt linjen er, ikke hvilken vei den heller. Trippelpunktets plassering sier ingenting om helningen på linjene som møtes der. Og for nesten alle andre stoffer heller smeltelinjen forover, siden den faste fasen er tettest — vann er unntaket.",
    },
    {
      question: "Et fjernvarmerør fører $2{,}5\\,\\text{L/s}$ vann som avkjøles $35\\,\\text{K}$ på veien. Med $c = 4186\\,\\text{J/(kg}\\cdot\\text{K)}$ og $\\rho = 1000\\,\\text{kg/m}^3$: hvor stor effekt leveres?",
      options: ["$366{,}3\\,\\text{kW}$", "$3{,}663\\cdot10^{5}\\,\\text{kW}$", "$0{,}3663\\,\\text{kW}$", "$10{,}46\\,\\text{kW}$"],
      explanation: "$P = c\\rho\\dot{V}\\Delta T$, med volumstrømmen gjort om til $\\text{m}^3/\\text{s}$ først: $4186 \\cdot 1000 \\cdot 0{,}0025 \\cdot 35 = 3{,}663\\cdot10^{5}\\,\\text{W} = 366{,}3\\,\\text{kW}$. Svaret $3{,}663\\cdot10^{5}\\,\\text{kW}$ er riktig tall med enheten watt lest av som kilowatt. Svaret $0{,}3663\\,\\text{kW}$ har satt liter per sekund rett inn som kubikkmeter per sekund. Og $10{,}46\\,\\text{kW}$ har glemt temperaturfallet, altså regnet som om $\\Delta T$ var én kelvin.",
    },
    {
      question: "Et fjernvarmerør fører $1{,}2\\,\\text{L/s}$ vann som avkjøles $25\\,\\text{K}$ på veien. Med $c = 4186\\,\\text{J/(kg}\\cdot\\text{K)}$ og $\\rho = 1000\\,\\text{kg/m}^3$: hvor stor effekt leveres?",
      options: ["$125{,}6\\,\\text{kW}$", "$1{,}256\\cdot10^{5}\\,\\text{kW}$", "$0{,}1256\\,\\text{kW}$", "$5{,}023\\,\\text{kW}$"],
      explanation: "$P = c\\rho\\dot{V}\\Delta T$, med volumstrømmen gjort om til $\\text{m}^3/\\text{s}$ først: $4186 \\cdot 1000 \\cdot 0{,}0012 \\cdot 25 = 1{,}256\\cdot10^{5}\\,\\text{W} = 125{,}6\\,\\text{kW}$. Svaret $1{,}256\\cdot10^{5}\\,\\text{kW}$ er riktig tall med enheten watt lest av som kilowatt. Svaret $0{,}1256\\,\\text{kW}$ har satt liter per sekund rett inn som kubikkmeter per sekund. Og $5{,}023\\,\\text{kW}$ har glemt temperaturfallet, altså regnet som om $\\Delta T$ var én kelvin.",
    },
    {
      question: "Et fjernvarmerør fører $3\\,\\text{L/s}$ vann som avkjøles $40\\,\\text{K}$ på veien. Med $c = 4186\\,\\text{J/(kg}\\cdot\\text{K)}$ og $\\rho = 1000\\,\\text{kg/m}^3$: hvor stor effekt leveres?",
      options: ["$502{,}3\\,\\text{kW}$", "$5{,}023\\cdot10^{5}\\,\\text{kW}$", "$0{,}5023\\,\\text{kW}$", "$12{,}56\\,\\text{kW}$"],
      explanation: "$P = c\\rho\\dot{V}\\Delta T$, med volumstrømmen gjort om til $\\text{m}^3/\\text{s}$ først: $4186 \\cdot 1000 \\cdot 0{,}003 \\cdot 40 = 5{,}023\\cdot10^{5}\\,\\text{W} = 502{,}3\\,\\text{kW}$. Svaret $5{,}023\\cdot10^{5}\\,\\text{kW}$ er riktig tall med enheten watt lest av som kilowatt. Svaret $0{,}5023\\,\\text{kW}$ har satt liter per sekund rett inn som kubikkmeter per sekund. Og $12{,}56\\,\\text{kW}$ har glemt temperaturfallet, altså regnet som om $\\Delta T$ var én kelvin.",
    },
  ],
  'tfy4115-10-3': [
    {
      question: "En gass har $a = 0{,}5562$ og $b = 6{,}38\\cdot10^{-5}$ i SI-enheter (etan). Hva er den kritiske temperaturen?",
      options: ["$310{,}7\\,\\text{K}$", "$116{,}5\\,\\text{K}$", "$38{,}84\\,\\text{K}$", "$2583\\,\\text{K}$"],
      explanation: "$T_c = 8a/(27Rb) = 310{,}7\\,\\text{K}$. Svaret $116{,}5\\,\\text{K}$ har brukt faktoren $3$ fra $V_c$-formelen i stedet for $8$. Svaret $38{,}84\\,\\text{K}$ har glemt faktoren $8$ helt. Svaret $2583\\,\\text{K}$ har glemt gasskonstanten i nevneren, og er derfor et par tierpotenser for stort. Kontroller alltid med $Z_c = p_cV_c/(nRT_c) = 0{,}375$, som tester alle tre kritiske formler samtidig.",
    },
    {
      question: "En gass har $a = 0{,}1382$ og $b = 3{,}186\\cdot10^{-5}$ i SI-enheter (oksygen). Hva er den kritiske temperaturen?",
      options: ["$154{,}6\\,\\text{K}$", "$57{,}97\\,\\text{K}$", "$19{,}32\\,\\text{K}$", "$1285\\,\\text{K}$"],
      explanation: "$T_c = 8a/(27Rb) = 154{,}6\\,\\text{K}$. Svaret $57{,}97\\,\\text{K}$ har brukt faktoren $3$ fra $V_c$-formelen i stedet for $8$. Svaret $19{,}32\\,\\text{K}$ har glemt faktoren $8$ helt. Svaret $1285\\,\\text{K}$ har glemt gasskonstanten i nevneren, og er derfor et par tierpotenser for stort. Kontroller alltid med $Z_c = p_cV_c/(nRT_c) = 0{,}375$, som tester alle tre kritiske formler samtidig.",
    },
    {
      question: "En gass har $a = 0{,}9385$ og $b = 9{,}044\\cdot10^{-5}$ i SI-enheter (propan). Hva er den kritiske temperaturen?",
      options: ["$369{,}8\\,\\text{K}$", "$138{,}7\\,\\text{K}$", "$46{,}23\\,\\text{K}$", "$3075\\,\\text{K}$"],
      explanation: "$T_c = 8a/(27Rb) = 369{,}8\\,\\text{K}$. Svaret $138{,}7\\,\\text{K}$ har brukt faktoren $3$ fra $V_c$-formelen i stedet for $8$. Svaret $46{,}23\\,\\text{K}$ har glemt faktoren $8$ helt. Svaret $3075\\,\\text{K}$ har glemt gasskonstanten i nevneren, og er derfor et par tierpotenser for stort. Kontroller alltid med $Z_c = p_cV_c/(nRT_c) = 0{,}375$, som tester alle tre kritiske formler samtidig.",
    },
    {
      question: "Samme gass (etan, $a = 0{,}5562$, $b = 6{,}38\\cdot10^{-5}$ i SI-enheter). Hva er det kritiske trykket?",
      options: ["$5{,}061\\,\\text{MPa}$", "$15{,}18\\,\\text{MPa}$", "$40{,}49\\,\\text{MPa}$", "$0{,}5623\\,\\text{MPa}$"],
      explanation: "$p_c = a/(27b^2) = 5{,}061\\,\\text{MPa}$, med $b^2$ som eget mellomresultat. Svaret $15{,}18\\,\\text{MPa}$ har brukt $9$ i stedet for $27$ i nevneren. Svaret $40{,}49\\,\\text{MPa}$ har tatt med faktoren $8$, som hører til $T_c$ og ikke til $p_c$. Svaret $0{,}5623\\,\\text{MPa}$ har satt det kritiske volumet $3b$ inn i kvadratet i stedet for $b$ selv.",
    },
    {
      question: "Samme gass (nitrogen, $a = 0{,}137$, $b = 3{,}87\\cdot10^{-5}$ i SI-enheter). Hva er det kritiske trykket?",
      options: ["$3{,}388\\,\\text{MPa}$", "$10{,}16\\,\\text{MPa}$", "$27{,}1\\,\\text{MPa}$", "$0{,}3764\\,\\text{MPa}$"],
      explanation: "$p_c = a/(27b^2) = 3{,}388\\,\\text{MPa}$, med $b^2$ som eget mellomresultat. Svaret $10{,}16\\,\\text{MPa}$ har brukt $9$ i stedet for $27$ i nevneren. Svaret $27{,}1\\,\\text{MPa}$ har tatt med faktoren $8$, som hører til $T_c$ og ikke til $p_c$. Svaret $0{,}3764\\,\\text{MPa}$ har satt det kritiske volumet $3b$ inn i kvadratet i stedet for $b$ selv.",
    },
    {
      question: "$2{,}5$ mol karbondioksid ($a = 0{,}364$, $b = 4{,}267\\cdot10^{-5}$, SI-enheter) holdes i $1{,}5\\,\\text{L}$ ved $320\\,\\text{K}$. Hva er trykket etter van der Waals?",
      options: ["$3{,}763\\,\\text{MPa}$", "$4{,}434\\,\\text{MPa}$", "$4{,}369\\,\\text{MPa}$", "$4{,}774\\,\\text{MPa}$"],
      explanation: "To ledd, hvert for seg: $nRT/(V-nb) = 4{,}774$ og $an^2/V^2 = 1{,}011$, altså $p = 3{,}763\\,\\text{MPa}$. Volumet må gjøres om til $\\text{m}^3$ først. Svaret $4{,}434\\,\\text{MPa}$ er den ideelle gassloven uten korreksjoner. Svaret $4{,}369\\,\\text{MPa}$ har brukt $an/V^2$ i stedet for $an^2/V^2$ og får derfor tiltrekningen en faktor $2{,}5$ for liten. Svaret $4{,}774\\,\\text{MPa}$ er bare det første leddet, altså tiltrekningen helt glemt.",
    },
    {
      question: "$4$ mol metan ($a = 0{,}2283$, $b = 4{,}278\\cdot10^{-5}$, SI-enheter) holdes i $6\\,\\text{L}$ ved $300\\,\\text{K}$. Hva er trykket etter van der Waals?",
      options: ["$1{,}61\\,\\text{MPa}$", "$1{,}663\\,\\text{MPa}$", "$1{,}686\\,\\text{MPa}$", "$1{,}712\\,\\text{MPa}$"],
      explanation: "To ledd, hvert for seg: $nRT/(V-nb) = 1{,}712$ og $an^2/V^2 = 0{,}1015$, altså $p = 1{,}61\\,\\text{MPa}$. Volumet må gjøres om til $\\text{m}^3$ først. Svaret $1{,}663\\,\\text{MPa}$ er den ideelle gassloven uten korreksjoner. Svaret $1{,}686\\,\\text{MPa}$ har brukt $an/V^2$ i stedet for $an^2/V^2$ og får derfor tiltrekningen en faktor $4$ for liten. Svaret $1{,}712\\,\\text{MPa}$ er bare det første leddet, altså tiltrekningen helt glemt.",
    },
    {
      question: "Karbondioksid har trippelpunkt ved $216{,}6\\,\\text{K}$ og $518\\,\\text{kPa}$. Hva skjer med tørris i vanlig romluft?",
      options: ["Den sublimerer, siden lufttrykket ligger under trippeltrykket", "Den smelter til flytende CO$_2$ og fordamper deretter", "Den smelter først når temperaturen passerer $216{,}6\\,\\text{K}$", "Ingenting, siden CO$_2$ er stabilt som fast stoff i luft"],
      explanation: "Atmosfæretrykket $101\\,\\text{kPa}$ ligger godt under trippeltrykket $518\\,\\text{kPa}$, og under trippeltrykket finnes ingen væskefase ved noen temperatur. Oppvarming må derfor krysse sublimasjonslinjen, og tørris går rett til gass. Begge alternativene som nevner smelting forutsetter at væskefasen er tilgjengelig, altså at trykket er over $p_t$. Og at ingenting skjer, er galt: tørris forsvinner synlig i romtemperatur, den blir bare ikke våt.",
    },
    {
      question: "En prøve holder $700\\,\\text{K}$ ved $30{,}0\\,\\text{MPa}$ og kjøles til $300\\,\\text{K}$ ved konstant trykk. Vann har kritisk punkt ved $647{,}1\\,\\text{K}$ og $22{,}06\\,\\text{MPa}$. Hvilke faseoverganger passerer ferden?",
      options: ["Ingen — trykket ligger over det kritiske, så ingen linje krysses", "Kondensasjon ved $647{,}1\\,\\text{K}$, der damptrykkslinjen slutter", "Kondensasjon og deretter frysing, siden temperaturen faller mye", "Kondensasjon ved den temperaturen damptrykket er $30{,}0\\,\\text{MPa}$"],
      explanation: "Damptrykkslinjen SLUTTER i det kritiske punktet, så over $22{,}06\\,\\text{MPa}$ finnes ingen linje å krysse. Prøven går kontinuerlig fra overkritisk fluid til væske, uten et øyeblikk der en væskeflate dannes. Alternativet som legger kondensasjonen til $647{,}1\\,\\text{K}$ behandler det kritiske punktet som en overgang; det er nettopp det motsatte av hva punktet betyr. Frysing ville krevd at vi nådde smeltelinjen, og $300\\,\\text{K}$ er godt over den. Og det finnes ingen temperatur der damptrykket er $30{,}0\\,\\text{MPa}$ — kurven stopper på $22{,}06$.",
    },
    {
      question: "Hva er den raskeste måten å avgjøre om væskefasen i det hele tatt er mulig for en gitt tilstand?",
      options: ["Sammenlign trykket med trippeltrykket og temperaturen med den kritiske", "Sammenlign temperaturen med trippelpunktets temperatur alene", "Regn ut van der Waals-trykket og se om det blir positivt", "Sammenlign molarvolumet med det kritiske volumet $3b$"],
      explanation: "To ulikheter avgjør det uten regning: er $p < p_t$, finnes ingen væske ved noen temperatur; er $T > T_c$, finnes ingen væske ved noe trykk. Trippelpunktets temperatur alene sier ingenting — du kan godt være over den og likevel ha bare gass, hvis trykket er lavt nok. Van der Waals-trykket gir alltid et tall, også for tilstander som ikke finnes; det er nettopp derfor ligningen ikke kan brukes som fasetest. Og molarvolumet skiller ikke væske fra gass i seg selv, siden begge fasene finnes på hver sin side av det kritiske volumet.",
    },
    {
      question: "Vann koker ved $373{,}1\\,\\text{K}$ ved $101{,}325\\,\\text{kPa}$ og har molar fordampningsvarme $40{,}66\\,\\text{kJ/mol}$. Hva er damptrykket ved $333{,}1\\,\\text{K}$?",
      options: ["$21\\,\\text{kPa}$", "$488{,}8\\,\\text{kPa}$", "$210\\,\\text{kPa}$", "$101{,}325\\,\\text{kPa}$"],
      explanation: "Sett inn i $p = p_0\\exp[-(l/R)(1/T - 1/T_0)]$ med begge temperaturer i kelvin: $21\\,\\text{kPa}$. Svaret $488{,}8\\,\\text{kPa}$ har snudd fortegnet i eksponenten; sjekk alltid retningen, for damptrykket stiger med temperaturen. Svaret $210\\,\\text{kPa}$ er riktig regning med én tierpotens for mye. Og $101{,}325\\,\\text{kPa}$ er referansepunktet selv, altså svaret hvis eksponenten ble satt til null.",
    },
    {
      question: "Etan koker ved $184{,}6\\,\\text{K}$ ved $101{,}325\\,\\text{kPa}$ og har molar fordampningsvarme $14{,}7\\,\\text{kJ/mol}$. Hva er damptrykket ved $250\\,\\text{K}$?",
      options: ["$1241\\,\\text{kPa}$", "$8{,}271\\,\\text{kPa}$", "$1{,}241\\cdot10^{4}\\,\\text{kPa}$", "$101{,}325\\,\\text{kPa}$"],
      explanation: "Sett inn i $p = p_0\\exp[-(l/R)(1/T - 1/T_0)]$ med begge temperaturer i kelvin: $1241\\,\\text{kPa}$. Svaret $8{,}271\\,\\text{kPa}$ har snudd fortegnet i eksponenten; sjekk alltid retningen, for damptrykket stiger med temperaturen. Svaret $1{,}241\\cdot10^{4}\\,\\text{kPa}$ er riktig regning med én tierpotens for mye. Og $101{,}325\\,\\text{kPa}$ er referansepunktet selv, altså svaret hvis eksponenten ble satt til null.",
    },
    {
      question: "Hvor mange gjeldende siffer bør du beholde i parentesen $1/T - 1/T_0$ når du regner damptrykk?",
      options: ["Minst fem, siden det er en differanse mellom to nesten like tall", "Tre holder, siden sluttsvaret uansett oppgis med tre siffer", "To holder, siden eksponentialen glatter ut små forskjeller", "Antallet spiller ingen rolle, siden feilen forsvinner i logaritmen"],
      explanation: "For vann mellom $60$ og $100\\,^\\circ\\text{C}$ er de to reverstallene $3{,}00165\\cdot10^{-3}$ og $2{,}67989\\cdot10^{-3}$ — like på to siffer. Runder du hvert av dem til tre, mister du all presisjon i differansen, og svaret bommer nok til å treffe nabo-alternativet. Eksponentialen glatter ikke ut noe; den FORSTERKER, siden en liten endring i eksponenten gir en multiplikativ endring i svaret. Og det er ingen logaritme i veien i denne retningen — det er nettopp derfor dette er det ene stedet i termodelen der fire siffer ikke rekker.",
    },
    {
      question: "En stålskinne er $32\\,\\text{m}$ lang og gjennomgår en temperaturvariasjon på $48\\,\\text{K}$. Med $\\alpha = 1{,}2\\cdot10^{-5}\\,\\text{K}^{-1}$: hvor stor må ekspansjonsspalten minst være?",
      options: ["$18{,}43\\,\\text{mm}$", "$55{,}3\\,\\text{mm}$", "$6{,}144\\,\\text{mm}$", "$184{,}3\\,\\text{mm}$"],
      explanation: "$\\Delta L = \\alpha L\\Delta T = 18{,}43\\,\\text{mm}$. Temperaturen inngår bare som en differanse, så celsius er trygt. Svaret $55{,}3\\,\\text{mm}$ har brukt volumkoeffisienten $\\beta = 3\\alpha$ i en lengdeformel — faktoren tre er antall dimensjoner. Svaret $6{,}144\\,\\text{mm}$ har delt på tre i stedet. Og $184{,}3\\,\\text{mm}$ er riktig regning med én tierpotens for mye. Kontroll: relativ utvidelse er $\\alpha\\Delta T = 0{,}000576$, altså i promille-området.",
    },
    {
      question: "En messingskinne er $18\\,\\text{m}$ lang og gjennomgår en temperaturvariasjon på $55\\,\\text{K}$. Med $\\alpha = 1{,}9\\cdot10^{-5}\\,\\text{K}^{-1}$: hvor stor må ekspansjonsspalten minst være?",
      options: ["$18{,}81\\,\\text{mm}$", "$56{,}43\\,\\text{mm}$", "$6{,}27\\,\\text{mm}$", "$188{,}1\\,\\text{mm}$"],
      explanation: "$\\Delta L = \\alpha L\\Delta T = 18{,}81\\,\\text{mm}$. Temperaturen inngår bare som en differanse, så celsius er trygt. Svaret $56{,}43\\,\\text{mm}$ har brukt volumkoeffisienten $\\beta = 3\\alpha$ i en lengdeformel — faktoren tre er antall dimensjoner. Svaret $6{,}27\\,\\text{mm}$ har delt på tre i stedet. Og $188{,}1\\,\\text{mm}$ er riktig regning med én tierpotens for mye. Kontroll: relativ utvidelse er $\\alpha\\Delta T = 0{,}001045$, altså i promille-området.",
    },
    {
      question: "En stålbeholder på $2{,}00\\,\\text{L}$ ($\\alpha = 12\\cdot10^{-6}\\,\\text{K}^{-1}$) fylles helt med kvikksølv ($\\beta = 1{,}80\\cdot10^{-4}\\,\\text{K}^{-1}$) og varmes $40{,}0\\,\\text{K}$. Hvor mye renner over?",
      options: ["$11{,}52\\,\\text{mL}$", "$14{,}40\\,\\text{mL}$", "$13{,}44\\,\\text{mL}$", "$17{,}28\\,\\text{mL}$"],
      explanation: "Beholderens volumkoeffisient er $\\beta = 3\\alpha = 3{,}60\\cdot10^{-5}\\,\\text{K}^{-1}$, og bare differansen renner over: $(1{,}800 - 0{,}360)\\cdot10^{-4} \\cdot 2{,}00 \\cdot 40{,}0\\,\\text{L} = 11{,}52\\,\\text{mL}$. Svaret $14{,}40\\,\\text{mL}$ har glemt at beholderen også vokser, og gir derfor systematisk for mye. Svaret $13{,}44\\,\\text{mL}$ har brukt beholderens $\\alpha$ direkte i stedet for $\\beta = 3\\alpha$. Og $17{,}28\\,\\text{mL}$ har lagt de to koeffisientene sammen i stedet for å trekke dem fra hverandre — da blir svaret større enn væskens egen utvidelse, som er umulig.",
    },
    {
      question: "I hvilke av oppgavesporene i Del 10 er det trygt å regne temperaturen i celsius?",
      options: ["Bare i utvidelsesoppgavene, der temperaturen inngår som en differanse", "I alle sporene, siden celsius og kelvin har samme skrittlengde", "Bare i damptrykksoppgavene, der forholdet mellom trykkene teller", "I ingen av dem; termofysikk krever alltid absolutt temperatur"],
      explanation: "Regelen er: står $T$ alene, kreves kelvin; står den bare i $\\Delta T$, er celsius trygt. I van der Waals, i de kritiske uttrykkene og i Clausius–Clapeyron står temperaturen alene, og der er celsius katastrofalt. At skrittlengden er den samme er riktig, og det er nettopp derfor differanser er trygge — men det redder deg ikke der nullpunktet inngår. Og at kelvin alltid kreves er en overforenkling: utvidelsesformlene, varmeledning og strømmende medium bruker alle bare differanser.",
    },
    {
      question: "Et alternativsett i en kritisk-punkt-oppgave inneholder to tall der det ene er nøyaktig tre ganger det andre. Hva forteller det deg?",
      options: ["Sannsynligvis er ett av dem riktig, og det andre en forvekslet faktor", "Begge er gale, siden ekte alternativer aldri er enkle multipler", "Det tredoble er alltid riktig, siden $V_c = 3b$", "Det sier ingenting; forholdet mellom alternativer er tilfeldig"],
      explanation: "Distraktorer i denne sjangeren er bygget rundt de faste faktorene $3$, $8$ og $27$, så et par som skiller seg med akkurat en av dem er nesten alltid «riktig svar og én forvekslet faktor». Det er et nyttig signal, men ikke en fasit — du må fremdeles regne for å vite hvilket av de to. At ekte alternativer aldri er enkle multipler er galt; det er nettopp slik de konstrueres. Og å velge det tredoble på autopilot ville truffet i akkurat de tilfellene der fellen var å GLEMME faktoren, og bommet i alle de motsatte.",
    },
  ],
  'tfy4115-11-1': [
    {
      question: "Ligningen $x = 5(1-e^{-x})$ itereres fra $x_0 = 3$. Hva er $x_{2}$?",
      options: ["$4{,}956788$", "$4{,}751065$", "$4{,}964823$", "$4{,}965114$"],
      explanation: "Etter 2 iterasjoner fra startverdien står du på $x_{2} = 4{,}956788$. Svaret $4{,}751065$ er $x_{1}$, altså én iterasjon for få — av-for-én i den ene retningen. Svaret $4{,}964823$ er $x_{3}$, én iterasjon for mange. Og $4{,}965114$ er den eksakte roten, altså svaret hvis du iterer til konvergens uten å telle. Husk at $x_0$ er startverdien og ikke en iterasjon.",
    },
    {
      question: "Ligningen $x = 5(1-e^{-x})$ itereres fra $x_0 = 3$. Hva er $x_{3}$?",
      options: ["$4{,}964823$", "$4{,}956788$", "$4{,}965104$", "$4{,}965114$"],
      explanation: "Etter 3 iterasjoner fra startverdien står du på $x_{3} = 4{,}964823$. Svaret $4{,}956788$ er $x_{2}$, altså én iterasjon for få — av-for-én i den ene retningen. Svaret $4{,}965104$ er $x_{4}$, én iterasjon for mange. Og $4{,}965114$ er den eksakte roten, altså svaret hvis du iterer til konvergens uten å telle. Husk at $x_0$ er startverdien og ikke en iterasjon.",
    },
    {
      question: "Ligningen $x = 5(1-e^{-x})$ itereres fra $x_0 = 4$. Hva er $x_{2}$?",
      options: ["$4{,}963079$", "$4{,}908422$", "$4{,}965043$", "$4{,}965114$"],
      explanation: "Etter 2 iterasjoner fra startverdien står du på $x_{2} = 4{,}963079$. Svaret $4{,}908422$ er $x_{1}$, altså én iterasjon for få — av-for-én i den ene retningen. Svaret $4{,}965043$ er $x_{3}$, én iterasjon for mange. Og $4{,}965114$ er den eksakte roten, altså svaret hvis du iterer til konvergens uten å telle. Husk at $x_0$ er startverdien og ikke en iterasjon.",
    },
    {
      question: "Ligningen $x = 5(1-e^{-x})$ itereres fra $x_0 = 6$. Hva er $x_{2}$?",
      options: ["$4{,}96589$", "$4{,}987606$", "$4{,}965141$", "$4{,}965114$"],
      explanation: "Etter 2 iterasjoner fra startverdien står du på $x_{2} = 4{,}96589$. Svaret $4{,}987606$ er $x_{1}$, altså én iterasjon for få — av-for-én i den ene retningen. Svaret $4{,}965141$ er $x_{3}$, én iterasjon for mange. Og $4{,}965114$ er den eksakte roten, altså svaret hvis du iterer til konvergens uten å telle. Husk at $x_0$ er startverdien og ikke en iterasjon.",
    },
    {
      question: "Ligningen $x = 5(1-e^{-x})$ itereres fra $x_0 = 1$. Hva er $x_{3}$?",
      options: ["$4{,}958354$", "$4{,}787999$", "$4{,}964878$", "$4{,}965114$"],
      explanation: "Etter 3 iterasjoner fra startverdien står du på $x_{3} = 4{,}958354$. Svaret $4{,}787999$ er $x_{2}$, altså én iterasjon for få — av-for-én i den ene retningen. Svaret $4{,}964878$ er $x_{4}$, én iterasjon for mange. Og $4{,}965114$ er den eksakte roten, altså svaret hvis du iterer til konvergens uten å telle. Husk at $x_0$ er startverdien og ikke en iterasjon.",
    },
    {
      question: "Hva er konvergensfaktoren $g'(x^*)$ for iterasjonen $x_{n+1} = 5(1-e^{-x_n})$ i fikspunktet $x^* = 4{,}96511$?",
      options: ["$0{,}034886$", "$28{,}66$", "$0{,}178561$", "$4{,}965114$"],
      explanation: "$g(x) = 5(1-e^{-x})$ gir $g'(x) = 5e^{-x}$, og innsatt roten blir det $5 \\cdot 0{,}00697713 = 0{,}034886$. Tallverdien er godt under 1, så iterasjonen konvergerer, og feilen krymper til om lag en trettiendedel per steg. Svaret $28{,}66$ er den deriverte til den INVERSE fikspunktformen $x = \\ln(5/(5-x))$, som divergerer nettopp fordi tallet er over 1. Svaret $0{,}178561$ hører til frekvensformen $x = 3(1-e^{-x})$. Og $4{,}965114$ er roten selv, ikke den deriverte i den.",
    },
    {
      question: "Når konvergerer en fikspunktiterasjon $x_{n+1} = g(x_n)$ mot fikspunktet $x^*$?",
      options: ["Når $\\lvert g'(x^*)\\rvert < 1$ i et område rundt fikspunktet", "Når $g(x^*) < 1$, altså når selve funksjonsverdien er liten", "Når startverdien $x_0$ er større enn fikspunktet", "Alltid, så lenge ligningen har en reell løsning"],
      explanation: "Feilen oppfyller $e_{n+1} = g'(\\xi)e_n$ med $\\xi$ mellom $x_n$ og $x^*$, så den ganges med omtrent $g'(x^*)$ per steg. Er tallverdien under 1, krymper feilen geometrisk; er den over 1, vokser den. Funksjonsverdien $g(x^*)$ er per definisjon lik $x^*$ selv og sier ingenting om konvergens. Startverdiens side spiller ingen rolle for om det konvergerer, bare for hvor mange steg det tar. Og at det alltid virker er direkte galt: den ekvivalente formen $x = \\ln(5/(5-x))$ har samme løsning og divergerer.",
    },
    {
      question: "Ligningen $x - 5 + 5e^{-x} = 0$ kan skrives som $x = 5(1-e^{-x})$ eller som $x = \\ln\\left(5/(5-x)\\right)$. Hva er forholdet mellom de to formene?",
      options: ["De har samme løsning, men den ene konvergerer og den andre divergerer", "De har ulike løsninger, siden omskrivingen ikke er ekvivalent", "Begge konvergerer, men den andre er raskere fordi logaritmen er flatere", "Begge divergerer; ligningen må løses med halveringsmetoden"],
      explanation: "De to formene er hverandres inverse funksjoner, og en invers har den omvendte deriverte: $0{,}0349$ mot $28{,}66$. Derfor konvergerer den ene raskt og den andre divergerer, selv om løsningen er nøyaktig den samme. Omskrivingen er fullt ekvivalent — det er nettopp poenget, og det som gjør fenomenet overraskende. Logaritmeformen er ikke flatere, den er $28$ ganger brattere i roten. Og halveringsmetoden virker riktignok, men den er ikke nødvendig her: den første formen konvergerer på tre steg.",
    },
    {
      question: "Hvor kommer ligningen $x = 5(1-e^{-x})$ fra?",
      options: ["Fra å sette den deriverte av Plancks strålingslov med hensyn på bølgelengde lik null", "Fra å sette Stefan–Boltzmanns lov lik den totale innkommende strålingen", "Fra å løse Wiens forskyvningslov med hensyn på temperaturen", "Fra å sette den deriverte av Plancks lov med hensyn på temperatur lik null"],
      explanation: "Substituerer du $x = hc/(\\lambda k_BT)$ i Plancks lov, får den formen $x^5/(e^x-1)$, og maksimum finnes ved å derivere med hensyn på $x$ og sette lik null. Det gir $5(e^x-1) = xe^x$, som delt på $e^x$ er ligningen. Stefan–Boltzmann gjelder den TOTALE utstrålingen, integrert over alle bølgelengder, og inneholder ingen bølgelengde å maksimere over. Wiens forskyvningslov er RESULTATET av denne regningen, ikke utgangspunktet. Og å derivere med hensyn på temperatur ville svart på et helt annet spørsmål: hvordan utstrålingen ved én fast bølgelengde vokser med $T$.",
    },
    {
      question: "Roten i $x = 5(1-e^{-x})$ er $x^* = 4{,}96511$. Hvordan får du Wien-konstanten fra den?",
      options: ["$b = hc/(x^*k_B) = 2{,}898\\cdot10^{-3}\\,\\text{m}\\cdot\\text{K}$", "$b = x^*hc/k_B = 7{,}14\\cdot10^{-2}\\,\\text{m}\\cdot\\text{K}$", "$b = x^*k_B/(hc) = 3{,}45\\cdot10^{2}\\,\\text{m}\\cdot\\text{K}$", "$b = hc/k_B = 1{,}439\\cdot10^{-2}\\,\\text{m}\\cdot\\text{K}$"],
      explanation: "Substitusjonen var $x = hc/(\\lambda k_BT)$, så i maksimum er $\\lambda_\\text{maks}T = hc/(x^*k_B)$, og det produktet ER Wien-konstanten. Svaret med $x^*$ i telleren har flyttet roten til feil side av brøkstreken og gir en konstant $25$ ganger for stor. Svaret $x^*k_B/(hc)$ er hele uttrykket snudd og har feil enhet — det ville vært $1/(\\text{m}\\cdot\\text{K})$. Og $hc/k_B$ har glemt roten helt, altså brukt $x^* = 1$; da blir konstanten en faktor $4{,}97$ for stor.",
    },
    {
      question: "Hva menes med at Newtons metode har kvadratisk konvergens?",
      options: ["Feilen i neste steg er proporsjonal med kvadratet av feilen i forrige steg", "Metoden krever to funksjonsevalueringer per steg", "Feilen halveres kvadratisk, altså med en faktor fire per steg", "Metoden konvergerer bare for ligninger av andre grad"],
      explanation: "Taylor-utvikling gir $e_{n+1} = \\left(f''(\\xi)/(2f'(x_n))\\right)e_n^2$, altså $\\lvert e_{n+1}\\rvert \\approx C\\lvert e_n\\rvert^2$. Praktisk betyr det at antall riktige desimaler DOBLES per steg: to blir fire, blir åtte. At metoden bruker både $f$ og $f'$ er riktig, men det er ikke det ordet «kvadratisk» viser til — det viser til feilens skalering. En fast faktor fire per steg ville vært lineær konvergens med rate $1/4$, altså noe helt annet. Og metoden er ikke begrenset til andregradsligninger; den brukes nettopp på transcendente.",
    },
    {
      question: "Halveringsmetoden startes på et intervall av lengde $2$. Hvor mange steg trengs for at den garanterte feilen skal komme under $10^{-6}$?",
      options: ["$20$ steg", "$6$ steg", "$3$ steg", "$1000000$ steg"],
      explanation: "Intervallet halveres hvert steg, så etter $n$ steg er lengden $2/2^n$, og midtpunktet bommer med høyst halvparten: $\\lvert e_n\\rvert \\le 2/2^{n+1} \\le 10^{-6}$ gir $2^{n+1} \\ge 2\\cdot10^{6}$, altså $n = 20$. Svaret $6$ er antallet siffer man vil ha, ikke antallet steg — halveringsmetoden gir omtrent $0{,}3$ desimal per steg, ikke én. Svaret $3$ er hva Newtons metode trenger på samme ligning, siden den konvergerer kvadratisk. Og en million steg forveksler antall halveringer med tallet $10^6$ selv.",
    },
    {
      question: "Hvilken av de tre metodene virker uansett hvor dårlig startanslaget er, forutsatt at funksjonen skifter fortegn på intervallet?",
      options: ["Halveringsmetoden, siden en rot alltid må ligge der fortegnet skifter", "Newtons metode, siden tangenten alltid peker mot roten", "Fikspunktiterasjon, siden den bare krever at ligningen har en løsning", "Alle tre, så lenge funksjonen er kontinuerlig"],
      explanation: "Skifter en kontinuerlig funksjon fortegn, må den ha en rot mellom endepunktene, og halveringen beholder alltid den halvdelen som fortsatt har fortegnsskift. Metoden kan derfor ikke divergere — prisen er at den bare bruker fortegnet og derfor er treg. Newtons metode kan kastes langt vekk når $f'(x_n)$ er nær null, altså når tangenten er nesten vannrett. Fikspunktiterasjon divergerer så snart $\\lvert g'\\rvert > 1$ i området, uansett om løsningen finnes. Og at alle tre skulle være trygge, motsies av at den ene formen i denne quizen divergerer med samme løsning som en som konvergerer.",
    },
    {
      question: "Et legeme starter fra ro med akselerasjonen $a = 9{,}81 - v/2$ (SI-enheter). Bruk Eulers metode med $\\Delta t = 1\\,\\text{s}$. Hva er farten etter 4 steg?",
      options: ["$18{,}39\\,\\text{m/s}$", "$17{,}17\\,\\text{m/s}$", "$19{,}01\\,\\text{m/s}$", "$19{,}62\\,\\text{m/s}$"],
      explanation: "Hvert steg er $v_{n+1} = v_n + a_n\\Delta t$ med $a_n$ regnet av $v_n$, og etter 4 steg står du på $18{,}39\\,\\text{m/s}$. Svaret $17{,}17\\,\\text{m/s}$ er ett steg for få, og $19{,}01\\,\\text{m/s}$ ett steg for mange — av-for-én begge veier. Svaret $19{,}62\\,\\text{m/s}$ er terminalfarten, altså verdien du får ved å sette $a = 0$ i stedet for å iterere; farten må ligge under den, men den nås først etter uendelig lang tid.",
    },
    {
      question: "Et legeme starter fra ro med akselerasjonen $a = 12 - v/4$ (SI-enheter). Bruk Eulers metode med $\\Delta t = 1\\,\\text{s}$. Hva er farten etter 3 steg?",
      options: ["$27{,}75\\,\\text{m/s}$", "$21\\,\\text{m/s}$", "$32{,}81\\,\\text{m/s}$", "$48\\,\\text{m/s}$"],
      explanation: "Hvert steg er $v_{n+1} = v_n + a_n\\Delta t$ med $a_n$ regnet av $v_n$, og etter 3 steg står du på $27{,}75\\,\\text{m/s}$. Svaret $21\\,\\text{m/s}$ er ett steg for få, og $32{,}81\\,\\text{m/s}$ ett steg for mange — av-for-én begge veier. Svaret $48\\,\\text{m/s}$ er terminalfarten, altså verdien du får ved å sette $a = 0$ i stedet for å iterere; farten må ligge under den, men den nås først etter uendelig lang tid.",
    },
    {
      question: "Et legeme starter fra ro med akselerasjonen $a = 9{,}81 - v/3$ (SI-enheter). Bruk Eulers metode med $\\Delta t = 1{,}5\\,\\text{s}$. Hva er farten etter 2 steg?",
      options: ["$22{,}07\\,\\text{m/s}$", "$14{,}71\\,\\text{m/s}$", "$25{,}75\\,\\text{m/s}$", "$29{,}43\\,\\text{m/s}$"],
      explanation: "Hvert steg er $v_{n+1} = v_n + a_n\\Delta t$ med $a_n$ regnet av $v_n$, og etter 2 steg står du på $22{,}07\\,\\text{m/s}$. Svaret $14{,}71\\,\\text{m/s}$ er ett steg for få, og $25{,}75\\,\\text{m/s}$ ett steg for mange — av-for-én begge veier. Svaret $29{,}43\\,\\text{m/s}$ er terminalfarten, altså verdien du får ved å sette $a = 0$ i stedet for å iterere; farten må ligge under den, men den nås først etter uendelig lang tid.",
    },
    {
      question: "Hva er sammenhengen mellom feilen i Eulers metode og steglengden $\\Delta t$?",
      options: ["Feilen er proporsjonal med $\\Delta t$: halverer du steget, halveres feilen", "Feilen er proporsjonal med $\\Delta t^2$: halverer du steget, blir feilen fire ganger mindre", "Feilen er uavhengig av $\\Delta t$ så lenge sluttiden er den samme", "Feilen dobles når steget halveres, siden det blir flere avrundinger"],
      explanation: "Eulers metode er av første orden, og det ser du direkte i tallene: for fritt fall med luftmotstand blir avviket ved $t = 4\\,\\text{s}$ $1{,}43$, $0{,}69$, $0{,}34$ og $0{,}17\\,\\text{m/s}$ for $\\Delta t = 1$; $0{,}5$; $0{,}25$ og $0{,}125\\,\\text{s}$ — en halvering hver gang. Kvadratisk avhengighet hører til bedre metoder, som midtpunktsmetoden. At feilen skulle være uavhengig av steget ville gjort hele diskretiseringen meningsløs. Og flere steg gir riktignok flere avrundinger, men den effekten er forsvinnende mot diskretiseringsfeilen.",
    },
    {
      question: "Et legeme faller med luftmotstand, slik at akselerasjonen AVTAR gjennom hvert tidssteg. Hva gjør Eulers metode da?",
      options: ["Overvurderer farten, siden metoden holder den høyeste akselerasjonen fast hele steget", "Undervurderer farten, siden metoden ikke rekker å ta med hele akselerasjonen", "Treffer eksakt, siden feilene fra hvert steg opphever hverandre", "Overvurderer først og undervurderer siden, avhengig av hvor nær terminalfarten man er"],
      explanation: "Framover-Euler bruker raten ved BEGYNNELSEN av steget og holder den fast. Er raten avtakende, er startverdien den største i intervallet, og farten legges på for raskt hvert eneste steg. Feilene hoper seg opp i samme retning. Å undervurdere ville skjedd hvis akselerasjonen var økende. Feilene opphever ikke hverandre; de er systematiske, og det er nettopp derfor de kan forutsis. Og fortegnet snur ikke underveis: så lenge raten er avtakende hele veien, er avviket ensrettet hele veien.",
    },
    {
      question: "En kopp kaffe kjøles etter $dT/dt = -(T-T_\\text{omg})/\\tau$. Hvilken form har Euler-oppdateringen?",
      options: ["$T_{n+1} = T_n - \\left(T_n-T_\\text{omg}\\right)\\Delta t/\\tau$", "$T_{n+1} = T_n - \\left(T_{n+1}-T_\\text{omg}\\right)\\Delta t/\\tau$", "$T_{n+1} = T_n - \\left(T_n-T_\\text{omg}\\right)/(\\tau\\,\\Delta t)$", "$T_{n+1} = T_\\text{omg} + \\left(T_n-T_\\text{omg}\\right)e^{-\\Delta t/\\tau}$"],
      explanation: "Framover-Euler er $y_{n+1} = y_n + \\dot{y}(y_n)\\Delta t$, altså raten regnet av verdien ved starten av steget og ganget med steglengden. Formen med $T_{n+1}$ på høyresiden er bakover-Euler, en annen metode som krever at du løser en ligning i hvert steg. Formen med $\\Delta t$ i nevneren har enhetsfeil: raten skal MULTIPLISERES med tidssteget for å gi en temperaturendring. Og den siste er den eksakte løsningen over ett steg, ikke en diskretisering — den er riktignok bedre, men det er ikke Eulers metode.",
    },
    {
      question: "Hvorfor er det trygt å regne i celsius i avkjølingsoppgaven $dT/dt = -(T-T_\\text{omg})/\\tau$?",
      options: ["Fordi temperaturen bare inngår som differansen $T - T_\\text{omg}$", "Fordi tidskonstanten $\\tau$ gjør uttrykket dimensjonsløst", "Fordi avkjøling alltid skjer ved temperaturer over null grader", "Fordi Eulers metode er en tilnærming uansett, så nullpunktet spiller ingen rolle"],
      explanation: "En temperaturdifferanse er det samme tallet i celsius og kelvin, siden skalaene har samme skrittlengde og bare ulikt nullpunkt. Regelen gjennom hele boka er: står $T$ alene, kreves kelvin; står den bare i en differanse, er celsius trygt. Tidskonstanten gjør ikke uttrykket dimensjonsløst — den har enhet sekund. Om temperaturen er over eller under null spiller ingen rolle for en differanse. Og at metoden er en tilnærming er ingen unnskyldning for enhetsfeil: i Plancks lov i samme kapittel ville celsius vært katastrofalt.",
    },
    {
      question: "Hva er terminalfarten for et legeme med akselerasjonen $a = 9{,}81 - v/2{,}00$ (SI-enheter)?",
      options: ["$19{,}62\\,\\text{m/s}$", "$4{,}905\\,\\text{m/s}$", "$11{,}81\\,\\text{m/s}$", "$9{,}81\\,\\text{m/s}$"],
      explanation: "Terminalfarten er der akselerasjonen blir null: $9{,}81 = v/2{,}00$ gir $v = 19{,}62\\,\\text{m/s}$. Svaret $4{,}905\\,\\text{m/s}$ har DELT på tidskonstanten i stedet for å gange. Svaret $11{,}81\\,\\text{m/s}$ har lagt sammen $9{,}81$ og $2{,}00$. Og $9{,}81\\,\\text{m/s}$ har forvekslet tyngdeakselerasjonens tallverdi med en fart — enhetene skiller dem. Terminalfarten er den beste rimelighetsgrensen i denne sjangeren: et Euler-svar over den er alltid galt.",
    },
    {
      question: "Hvorfor skal du beholde minst seks gjeldende siffer MELLOM iterasjonene i en fikspunktiterasjon?",
      options: ["Fordi avrunding underveis låser en feil som iterasjonen ellers ville krympet bort", "Fordi sluttsvaret skal oppgis med seks siffer", "Fordi kalkulatoren regner unøyaktig med færre siffer", "Fordi konvergensfaktoren må regnes ut med seks siffer for å være gyldig"],
      explanation: "Iterasjonen krymper feilen med en fast faktor per steg, men bare den feilen som faktisk er der. Runder du $x_1$ til tre siffer, innfører du en ny feil på $10^{-3}$ som ingen senere steg kan komme under. Sluttsvaret oppgis derimot med tre eller fire siffer, som ellers i boka. Kalkulatoren regner med langt flere siffer enn du taster inn; problemet er hva DU skriver ned mellom stegene. Og konvergensfaktoren er bare et anslag på hvor raskt det går — den trenger ikke mange siffer i det hele tatt.",
    },
    {
      question: "Frekvensformen av Wien-problemet gir $x = 3(1-e^{-x})$ i stedet for $x = 5(1-e^{-x})$. Hvorfor blir svaret et annet?",
      options: ["Fordi en fordeling ser ulik ut avhengig av om man fordeler over bølgelengde eller frekvens", "Fordi frekvensformen bruker en annen verdi av Plancks konstant", "Fordi den ene formen er en tilnærming og den andre er eksakt", "Fordi frekvens og bølgelengde har ulike enheter, så tallene må skaleres"],
      explanation: "Å gå fra $\\lambda$ til $\\nu = c/\\lambda$ strekker intervallene ulikt, siden $d\\nu = -c\\,d\\lambda/\\lambda^2$. Toppen i fordelingen over bølgelengde ligger derfor ikke på samme fysiske sted som toppen i fordelingen over frekvens — for solen $0{,}50$ mot $0{,}88\\,\\mu\\text{m}$. Plancks konstant er den samme i begge formene. Ingen av dem er en tilnærming; begge er eksakte svar på hvert sitt presise spørsmål. Og enhetsforskjellen alene ville bare gitt en skalering, ikke et annet fysisk maksimum — det er selve strekkingen av intervallene som gjør det.",
    },
  ],
  'tfy4115-12-1': [
    {
      question: "Du har fire timer på et sett med rundt 40 flervalgsspørsmål. Hva er tidsbudsjettet per spørsmål, og hvordan skal tallet brukes?",
      options: ["$6{,}0$ minutter i snitt, brukt som alarm om å merke spørsmålet og gå videre", "$6{,}0$ minutter, som er den tiden hvert spørsmål skal ta før du går videre", "$4{,}0$ minutter i snitt, siden en av de fire timene går bort til lesing og kontroll", "$10$ minutter på de tunge og $2$ på de lette, fastsatt før du har lest settet"],
      explanation: "$240$ minutter delt på 40 spørsmål er $6{,}0$ minutter. Alternativet som gjør tallet til en fast tid per spørsmål bommer på hensikten: budsjettet er et snitt, og en gasslovoppgave tar halvannet minutt mens kretsprosess-klyngen tar tjue. Svaret på fire minutter trekker fra en hel time som ikke finnes i regnestykket — kartlegging og kontroll er 28 minutter til sammen, ikke 60. Og forhåndsfordelingen på ti og to forutsetter at du vet hvilke spørsmål som er tunge før du har sett dem.",
    },
    {
      question: "Eksamen har seks svaralternativer A–F, mens den interaktive quizen her har fire. Hva betyr det for gjettesannsynligheten?",
      options: ["Rundt $17\\ \\%$ på eksamen mot $25\\ \\%$ i quizen, så quizen overvurderer hva et gjett gir", "Rundt $25\\ \\%$ begge steder, siden gjettesannsynligheten ikke avhenger av antall alternativer", "Rundt $17\\ \\%$ begge steder, fordi quizen internt trekker fra to skjulte alternativer", "Rundt $20\\ \\%$ på eksamen og i quizen, siden de nyeste settene har fem alternativer A–E"],
      explanation: "Gjettesannsynligheten er $1/n$: $1/6 \\approx 17\\ \\%$ med seks alternativer og $1/4 = 25\\ \\%$ med fire. Quizens firevalgsformat er plattformens tekniske format, ikke en påstand om eksamen — derfor trenes det ekte formatet i D-prøvene og øvingseksamenene. Alternativet som oppgir $20\\ \\%$ blander tidsrekkefølgen: fem alternativer hørte til de eldre settene fra 2013, 2017 og 2018, mens den nyeste dokumenterte formen har seks. At sannsynligheten skulle være uavhengig av antall alternativer, er direkte galt, og quizen trekker ikke fra noe skjult.",
    },
    {
      question: "En kompakt kule ruller uten å gli ned et fall på $1{,}60\\,\\text{m}$ fra ro. En student svarer $5{,}60\\,\\text{m/s}$ i stedet for $4{,}74\\,\\text{m/s}$. Hvilken feil er gjort?",
      options: ["Rotasjonsleddet er glemt, så farten ble regnet som $\\sqrt{2g\\,\\Delta y}$", "Formfaktoren for et kuleskall er brukt der en kompakt kule var oppgitt", "Faktoren $\\tfrac12$ i $\\tfrac12mv^2$ er utelatt på venstre side av energiregnskapet", "Tyngdeakselerasjonen er avrundet til $10\\,\\text{m/s}^2$ tidlig i regnekjeden"],
      explanation: "Forholdet $5{,}60/4{,}74 = 1{,}183$ er nøyaktig $\\sqrt{1+c} = \\sqrt{1{,}400}$, altså signaturen på at rotasjonsleddet mangler — felle #1. Alternativet med kuleskallets formfaktor ville gitt $4{,}34\\,\\text{m/s}$, altså et **lavere** tall enn fasiten, siden et skall har mer treghet. Utelatt halvfaktor gir $3{,}35\\,\\text{m/s}$, og en avrunding av $g$ til $10$ ville flyttet svaret under to prosent — ikke atten.",
    },
    {
      question: "Hvorfor er avrundingsdisiplin en egen ferdighet i akkurat dette faget?",
      options: ["Fordi alternativene er regnet fram fra konkrete feil og ligger $2$–$15\\ \\%$ fra hverandre", "Fordi antall gjeldende siffer i sluttsvaret vurderes særskilt i rettingen av hvert spørsmål", "Fordi kalkulatoren som er tillatt under kode C bare viser tre siffer om gangen i displayet", "Fordi det utdelte formelarket oppgir naturkonstantene med to siffer og innfører feilen selv"],
      explanation: "Alternativene er konstruert rundt typiske feil og ligger derfor tett; en avrunding underveis flytter svaret $1$–$3\\ \\%$, som er nettopp avstanden til nabo-alternativet. Alternativet om særskilt vurdering av siffer bommer på hele retteregelen: bare bokstavsvaret leses, og ingenting vurderes utover det. Kode C forutsetter en enkel kalkulator, men ikke en som viser tre siffer, og arket oppgir konstantene med fire siffer — for eksempel $\\sigma = 5{,}670\\cdot10^{-8}$.",
    },
    {
      question: "Hvilke fem kontroller utgjør sjekk-før-svar-listen, i den rekkefølgen de tas?",
      options: ["Enhet, tierpotens, fortegn, faktor og kelvin — i den rekkefølgen", "Enhet, fortegn, kelvin, gjeldende siffer og tidsbruken per spørsmål", "Tierpotens, faktor, kelvin, valg av lov og kontrollregning av kjeden", "Fortegn, faktor, enhet, valg av lov og sammenligning med naboen"],
      explanation: "De fem er enhet, tierpotens, fortegn, faktor og kelvin — korte nok til å faktisk gjøres 40 ganger, og til sammen dekker de over halvparten av feilregisteret. Listene som inneholder «valg av lov» eller «kontrollregning av hele kjeden» er ikke gale råd, men de er ikke sjekker: de tar minutter, ikke sekunder, og hører til før utregningen, ikke etter. Å sammenligne med nabo-alternativet hjelper heller ikke, siden nabotallet er konstruert nettopp for å se plausibelt ut.",
    },
    {
      question: "Et spørsmål oppgir en syklus mellom $600\\,\\text{K}$ og $320\\,\\text{K}$. Hvilket svaralternativ kan strykes uten en eneste utregning?",
      options: ["Virkningsgrad $0{,}52$, som ligger over Carnot-grensen $0{,}467$ her", "Virkningsgrad $0{,}44$, som en reell syklus sjelden kommer over", "Virkningsgrad $0{,}47$, som ingen syklus kan treffe helt eksakt", "Virkningsgrad $0{,}12$, som er for lavt for dette temperaturspranget"],
      explanation: "Carnot-grensen er $1 - 320/600 = 0{,}4667$, og en virkningsgrad over den bryter 2. hovedsetning — $0{,}52$ er dermed umulig og strykes gratis. De tre andre er lovlige verdier. At en reell syklus «sjelden» kommer over $0{,}40$ er en erfaringsregel og ikke en fysisk grense, og selv om en virkelig syklus ikke *når* Carnot-grensen, er en idealisert Carnot-syklus i en oppgave nettopp definert til å ligge der. Et lavt tall som $0{,}12$ er fullt mulig for en dårlig maskin.",
    },
    {
      question: "Hvor mange gjeldende siffer må du beholde i mellomresultatet $r^{\\gamma-1} = 8{,}50^{0{,}400}$ når svaralternativene er $0{,}575$ og $0{,}583$?",
      options: ["Minst fire — skriver du $2{,}4$ i stedet for $2{,}3538$, lander du på nabo-alternativet", "To holder, siden sluttsvaret uansett skal oppgis med to gjeldende siffer", "Tre holder, siden feilen i tredje siffer ikke forplanter seg gjennom en divisjon", "Antall siffer spiller ingen rolle her, siden potensen står i nevneren og feilen dermed dempes"],
      explanation: "$8{,}50^{0{,}400} = 2{,}3538$ gir $\\eta = 0{,}5752$, mens den avrundede $2{,}40$ gir $0{,}5833$ — altså nettopp nabotallet. Feilen i potensen er $2{,}0\\ \\%$ og i svaret $1{,}4\\ \\%$, som er nok. Argumentet om at sluttsvaret bare har to siffer forveksler mellomregning med sluttsvar: hele poenget er at mellomregningen skal være mer nøyaktig enn svaret. Og at en divisjon skulle dempe feilen, er galt — den relative feilen føres omtrent uendret gjennom både multiplikasjon og divisjon.",
    },
    {
      question: "Et svinghjul med $\\omega_0\\tau = 572{,}70\\,\\text{rad}$ gir 91 hele omdreininger. En student svarer 90. Hva er mest sannsynlig gjort?",
      options: ["$2\\pi$ er rundet til $6{,}3$, som gir $90{,}9$ og heltallsdelen 90", "Integralet er regnet fra $t = 0$ til $t = \\tau$ i stedet for over all tid", "Vinkelen er delt på $\\pi$ i stedet for på $2\\pi$ før heltallsdelen ble tatt", "Heltallsdelen er tatt av $\\omega_0\\tau$ selv i stedet for av forholdet til $2\\pi$ først"],
      explanation: "$572{,}70/6{,}3 = 90{,}905$, som gir 90 — mens $572{,}70/6{,}28319 = 91{,}148$ gir 91. Dette er felle #16 i sin skarpeste form, siden svaret er et heltall og tipper på en kant. Å integrere bare til $t = \\tau$ ville gitt $362{,}0\\,\\text{rad}$ og dermed 57 runder, ikke 90. Deling på $\\pi$ gir 182, og heltallsdelen av selve vinkelen gir 572 — begge er tall som ligger langt fra 90.",
    },
    {
      question: "En oppgave spør om effektfaktoren for **oppvarming**, og lista inneholder både $5{,}774$ og $6{,}774$. Hva forteller det deg?",
      options: ["At det er $\\varepsilon_K$ og $\\varepsilon_V$, som alltid skiller seg med 1", "At det ene tallet er regnet i celsius og det andre i kelvin i nevneren", "At det ene er effektfaktoren og det andre den inverse virkningsgraden", "At det største tallet må være feil, siden ingen effektfaktor overstiger 6"],
      explanation: "$\\varepsilon_V = \\varepsilon_K + 1$ er en identitet, så et par med differanse nøyaktig 1 er signaturen på felle #13 — og her er $6{,}774$ svaret på oppvarming. Alternativet om celsius bommer: celsiusregning gir her $1{,}083$, altså et helt annet tall. At det ene skulle være $1/\\eta$ er nesten sant, men det er samme tall som $\\varepsilon_V$ og altså ikke det som skiller de to. Og det finnes ingen øvre grense på 6 for en effektfaktor; ved lite temperatursprang blir den vilkårlig stor.",
    },
    {
      question: "En plate stråler netto mot omgivelsene, og en student får $0{,}366\\,\\text{W}$ der fasiten er $123{,}5\\,\\text{W}$. Hvilken feil gir nettopp det tallet?",
      options: ["Differansen er tatt før fjerdepotensen, altså $\\left(T-T_\\text{omg}\\right)^4$", "Emissiviteten er glemt, slik at plata er regnet som et helt svart legeme", "Omgivelsenes stråling er glemt, slik at bare bruttoutstrålingen er regnet", "Temperaturene er satt inn i celsius i stedet for i kelvin i begge ledd"],
      explanation: "Å ta differansen først og deretter opphøye gir en faktor $337$ for lite — det er felle #12, og det er den eneste av de fire som forklarer et svar under ett watt. Å glemme emissiviteten ville gitt $145{,}3\\,\\text{W}$, altså et **større** tall, og å glemme omgivelsene ville gitt $205{,}3\\,\\text{W}$. Celsius gir også et absurd lite tall, men et annet: $0{,}822\\,\\text{W}$. Felles for de to små er at størrelsesordenkontrollen fanger dem uansett hvilken av dem det var.",
    },
    {
      question: "Hva betyr hjelpemiddelkode C konkret for hvordan du bør øve til TFY4115?",
      options: ["Løs oppgaver med det utdelte formelarket og en enkel kalkulator ved siden av deg", "Pugg formlene, siden kode C bare tillater kalkulator og ingen skriftlige hjelpemidler", "Skriv et eget formelark, som du får ta med inn så lenge alt står på ett ark", "Tren på grafisk kalkulator, siden regnetiden er knapp og skjæringspunkter går fort"],
      explanation: "Kode C betyr **spesifiserte** trykte og håndskrevne hjelpemidler pluss en bestemt, enkel kalkulator; for TFY4115 er det Rottmann og et fysikk-formelark som deles ut med settet. Da er oppslagshastighet en ferdighet, og den trenes bare ved å ha arket på bordet. Alternativet om pugging bommer på at arket faktisk deles ut. Alternativet om eget ark er den farligste misforståelsen: «spesifiserte» betyr at emnet bestemmer listen, ikke kandidaten. Og en grafisk eller programmerbar kalkulator er ikke det kode C forutsetter.",
    },
    {
      question: "Du har bommet på sju spørsmål i en øvingseksamen. Hvordan bør bommene føres opp?",
      options: ["Etter hvilken felle som produserer nettopp det alternativet du krysset av", "Etter hvilket tema spørsmålet handlet om, så du kan lese kapitlet på nytt", "Etter hvor lang tid du brukte, så du kan øve tempo på nettopp de sjangrene", "Etter hvilken bokstav du krysset av, for å avdekke et systematisk bokstavvalg hos deg"],
      explanation: "Fem bom på fem ulike temaer, men alle med samme felle, er én arbeidsvane som skal endres — ikke fem kapitler som skal leses om igjen. Temasortering er ikke bortkastet, men den gir feil diagnose når feilen er en vane som avrunding eller kelvin-slurv. Tidsføring hører til tempotreningen og fanger ikke hvorfor svaret ble galt. Og bokstavfordelingen sier ingenting: fasitbokstavene i et sett er stokket, så et mønster i dine egne kryss er tilfeldig støy.",
    },
    {
      question: "Seks målinger av en tid har middelverdi $1{,}8500\\,\\text{s}$ og kvadratsum av avvikene $0{,}009200\\,\\text{s}^2$. Hva er standardfeilen til middelverdien?",
      options: ["$0{,}0175\\,\\text{s}$, fra $s = \\sqrt{0{,}009200/5}$ delt på $\\sqrt6$", "$0{,}0160\\,\\text{s}$, fra $s = \\sqrt{0{,}009200/6}$ delt på $\\sqrt6$", "$0{,}0429\\,\\text{s}$, som er det empiriske standardavviket til måleserien", "$0{,}0392\\,\\text{s}$, fra kvadratsummen delt på antall målinger og så kvadratrot"],
      explanation: "Standardavviket har nevner $N-1 = 5$, altså $s = 0{,}042895\\,\\text{s}$, og standardfeilen er $s/\\sqrt6 = 0{,}017512\\,\\text{s}$. Alternativet med $0{,}0160$ gjør den klassiske feilen å dele på $N = 6$ i standardavviket — en frihetsgrad er allerede brukt på middelverdien. De to øvrige oppgir standardavviket selv, med henholdsvis riktig og feil nevner: det måler spredningen i serien, ikke usikkerheten i gjennomsnittet, og det blir ikke mindre av at du måler flere ganger.",
    },
    {
      question: "Du er midt i en kretsprosess-klynge, og hjørnetabellen går ikke opp: summen av $Q$ er ikke lik summen av $W$. Hva er riktig grep?",
      options: ["Stopp og finn feilen, eller merk hele klyngen — et galt hjørne velter alle spørsmålene", "Regn videre på de hjørnene som stemmer, og la det avvikende hjørnet stå ubrukt", "Velg det alternativet som ligger nærmest, siden avviket uansett er en avrundingsfeil", "Bytt fortegnskonvensjon, siden uenigheten mellom summene alltid skyldes fortegn"],
      explanation: "Over en full sløyfe er $\\Delta U = 0$ og dermed $W_\\text{netto} = Q_\\text{netto}$ — går ikke det opp, er minst ett hjørne galt, og alle spørsmålene i klyngen hviler på de samme hjørnene. Å regne videre konverterer én feil til tre eller fire tapte poeng. Å velge nærmeste alternativ er nettopp det distraktorene er bygget for. Og å bytte konvensjon midtveis gjør vondt verre: uenigheten kan like gjerne komme av en feil temperatur som av et fortegn.",
    },
    {
      question: "Et treghetsmoment skal finnes om en akse gjennom enden av en stang, og $I_\\text{CM} = 0{,}294\\,\\text{kg}\\cdot\\text{m}^2$. Hvilket alternativ kan strykes uten regning?",
      options: ["$0{,}147\\,\\text{kg}\\cdot\\text{m}^2$, siden Steiner-leddet alltid legger til", "$1{,}176\\,\\text{kg}\\cdot\\text{m}^2$, siden det er fire ganger $I_\\text{CM}$", "$0{,}882\\,\\text{kg}\\cdot\\text{m}^2$, siden det er tre ganger $I_\\text{CM}$", "$3{,}528\\,\\text{kg}\\cdot\\text{m}^2$, siden ingen stang har så stort treghetsmoment"],
      explanation: "$I = I_\\text{CM} + Md^2$ er alltid større enn $I_\\text{CM}$, så alt under $0{,}294$ er umulig. De tre andre er alle større og kan ikke strykes på den grensen alene — og $1{,}176$ er faktisk det riktige svaret, siden $\\tfrac13ML^2$ er nøyaktig fire ganger $\\tfrac{1}{12}ML^2$. At et tall er «for stort for en stang» er ingen fysisk grense: $3{,}528$ svarer til hele massen samlet i den fjerne enden, som er et lovlig, men galt, oppsett.",
    },
    {
      question: "Hvilken av disse feilene fanges **ikke** av noen sluttsjekk, og må derfor forebygges i selve regnekjeden?",
      options: ["Avrunding midt i kjeden, som gir riktig enhet, riktig tierpotens og feil bokstav", "Celsius i en gasslov, som flytter svaret nesten en hel tierpotens", "Glemt emissivitet, som gjør svaret større enn et svart legemes utstråling", "Glemt Steiner-ledd, som gir et treghetsmoment mindre enn $I_\\text{CM}$ selv"],
      explanation: "Avrundingsfeil ser riktige ut på alle de fem kontrollene: enhet, tierpotens, fortegn, faktor og kelvin stemmer alle, og svaret ligger noen få prosent unna fasiten. Bare disiplin i kjeden hjelper. De tre andre brytes hver mot en kontrollerbar grense — en tierpotens som er absurd, et svar over det svarte legemets grense, og et treghetsmoment under $I_\\text{CM}$ — og alle tre kan derfor fanges på sekunder etter at regningen er ferdig.",
    },
  ],
  'tfy4115-12-2': [
    {
      question: "På et sett med 40 flervalgsspørsmål er fire av dem koblet til én og samme kretsprosess. Hva er den viktigste arbeidsregelen for den klyngen?",
      options: ["Før hjørnetabellen én gang med fire siffer, og kontroller varmesummen mot netto arbeid før du bruker tabellen videre", "Løs hvert av de fire spørsmålene fra bunnen av og uavhengig av de andre, slik at en feil i det ene umulig kan smitte over", "Ta klyngen helt til slutt, siden den uansett er den mest tidkrevende delen av settet og bør vente til resten er sikret", "Regn bare det spørsmålet som gir virkningsgraden, og les de tre andre svarene ut av alternativlistene bakover"],
      explanation: "Klyngen bygger på én felles hjørnetabell, så en feil der forplanter seg til alle fire; derfor føres den én gang med god presisjon og kontrolleres mot ΣQ = W_netto og ΔU = 0. Å løse hvert spørsmål fra bunnen av dobler arbeidet uten å gi ny sikkerhet. Å utsette klyngen gir ingen beskyttelse mot feilen, og å lese svar bakover ut av alternativlistene er gjetting.",
    },
    {
      question: "En massiv sylinder ruller uten å gli ned et fall på 2,60 m fra ro. Hva blir farten i bunnen?",
      options: ["5,83 m/s", "7,14 m/s", "6,04 m/s", "5,53 m/s"],
      explanation: "Med formfaktor c = ½ gir energibevaring v = √(2gΔy/1,5) = 5,83 m/s. Verdien 7,14 m/s er √(2gΔy), altså rotasjonsenergien glemt — det er den vanligste innebygde fella i mekanikkhalvdelen. Verdien 6,04 m/s bruker c = 2/5 og gjelder en kompakt kule, og 5,53 m/s bruker c = 2/3 og gjelder et kuleskall.",
    },
    {
      question: "En kule på 42,0 g med farten 310 m/s treffer en kloss på 2,85 kg og blir sittende fast. Hva er felles fart etter støtet?",
      options: ["4,50 m/s", "37,4 m/s", "9,01 m/s", "4,57 m/s"],
      explanation: "Bevegelsesmengden er bevart, energien er ikke: v' = mv₀/(m+M) = 4,50 m/s. Verdien 37,4 m/s kommer av å bruke energibevaring i et fullstendig uelastisk støt, som alltid gir altfor stor fart. Verdien 9,01 m/s er formelen for elastisk støt, 2mv₀/(m+M), og 4,57 m/s har glemt kulas masse i totalmassen.",
    },
    {
      question: "En homogen skive dreies om en akse gjennom randen, parallell med symmetriaksen. Hvilket uttrykk gir treghetsmomentet?",
      options: ["3MR²/2", "MR²/2", "MR²", "5MR²/4"],
      explanation: "Steiners sats med d = R gir ½MR² + MR² = 3MR²/2. Uttrykket ½MR² er skivas eget treghetsmoment om symmetriaksen, altså Steiner-leddet glemt. Uttrykket MR² er Steiner-leddet alene, uten skivas eget bidrag, og 5MR²/4 bruker ¼MR², som gjelder om en diameter i skivas plan.",
    },
    {
      question: "En syklus mellom ytterpunktene 240,6 K og 2165 K har virkningsgrad 0,222. Hva sier Carnot-kontrollen?",
      options: ["Grensen er 0,889, så syklusen er lovlig og utnytter rundt en fjerdedel av den", "Grensen er 0,222, så syklusen er nøyaktig på grensen og dermed reversibel", "Grensen er 0,111, så syklusen bryter andre hovedsetning og oppgaven kan ikke løses", "Grensen kan ikke regnes ut uten å kjenne varmene som utveksles i hvert enkelt trinn"],
      explanation: "Carnot-grensen er 1 − T_k/T_v = 1 − 240,6/2165 = 0,889, og 0,222 ligger godt under, altså 25 % av grensen. Verdien 0,111 er T_k/T_v, som er komplementet til grensen, ikke grensen selv. Og grensen avhenger bare av de to ytterpunktstemperaturene — varmene trengs for den faktiske virkningsgraden, ikke for grensen.",
    },
    {
      question: "En flate på 298 K stråler mot omgivelser på 220 K. Hvorfor er (T − T_omg)⁴ galt?",
      options: ["Fordi hver flate stråler etter sin egen absolutte temperatur, så fjerdepotensen må tas før differansen", "Fordi differansen må regnes i celsius når begge temperaturene er oppgitt i kelvin", "Fordi emissiviteten må ganges inn før potensen tas, og ikke etterpå slik uttrykket antyder", "Fordi Stefan–Boltzmanns lov strengt tatt bare gjelder for helt svarte flater, der uttrykket forenkles til σAT⁴"],
      explanation: "Utstrålingen fra hver flate går som dens egen absolutte temperatur i fjerde potens, og nettoregnskapet er differansen mellom to slike ledd — derfor eσA(T⁴ − T_omg⁴). Å bruke celsius er direkte galt her. Emissiviteten er en konstant faktor og kan ganges inn når som helst. Og loven gjelder også for grå flater, med e som faktor.",
    },
  ],
  'tfy4115-12-3': [
    {
      question: "En rotor har vinkelfart ω(t) = ω₀(t/τ)e^(−t/τ). Hva er den største vinkelfarten?",
      options: ["ω₀/e, som inntreffer nøyaktig ved t = τ", "ω₀, siden konstanten foran uttrykket alltid er maksimalverdien", "ω₀τ, som følger av å integrere uttrykket over all tid", "ω₀/2, siden faktoren (t/τ)e^(−t/τ) i snitt er en halv"],
      explanation: "Deriverer du og setter lik null, får du t = τ, og der er faktoren (t/τ)e^(−t/τ) lik 1/e. Svaret ω₀ overser nettopp at potensfaktoren gjør konstanten til noe annet enn maksimalverdien. Produktet ω₀τ er totalvinkelen i radianer, altså en helt annen størrelse, og ω₀/2 er et gjett uten forankring i uttrykket.",
    },
    {
      question: "En bowlingkule settes ned med fart V₀ uten rotasjon. Hvor lang tid går det før den ruller uten å gli?",
      options: ["2V₀/(7μg)", "5V₀/(7μg)", "V₀/(μg)", "7V₀/(2μg)"],
      explanation: "Friksjonen bremser massesenteret og gir samtidig et moment; ren rulling inntreffer når V = ωR, og for en kompakt kule gir det t = 2V₀/(7μg). Uttrykket 5V₀/(7μg) forveksler tiden med sluttfarten 5V₀/7. Uttrykket V₀/(μg) er tiden til kula ville stoppet helt hvis den bare gled, og 7V₀/(2μg) er brøken snudd.",
    },
    {
      question: "En Otto-syklus har kompresjonsforhold 9,00 og γ = 1,40. Hvordan avhenger virkningsgraden av hvor mye varme som tilføres?",
      options: ["Den avhenger ikke av varmemengden: η = 1 − r^(1−γ) er bestemt av kompresjonsforholdet", "Den øker med varmemengden, fordi topptemperaturen og dermed temperaturspennet blir større", "Den synker med varmemengden, fordi mer av varmen må avgis i det isokore kjøletrinnet", "Den kan ikke bestemmes uten å vite hvor mange mol gass syklusen inneholder"],
      explanation: "De to isokore varmene er begge proporsjonale med samme temperaturfaktor r^(γ−1), så varmemengden forkortes bort og η avhenger bare av geometrien. At topptemperaturen stiger med varmemengden er riktig, men det endrer ikke forholdet mellom tilført og avgitt varme. Og stoffmengden faller ut sammen med varmemengden.",
    },
    {
      question: "To like store vannmengder på 350 K og 290 K blandes i en isolert beholder. Hva skjer med entropien?",
      options: ["Den varme halvdelen taper mindre entropi enn den kalde vinner, så summen øker", "De to bidragene er like store med motsatt fortegn, så universets entropi er uendret", "Begge halvdeler får økt entropi, siden begge nærmer seg samme temperatur", "Universets entropi synker, siden systemet blir mer ordnet når temperaturen jevnes ut"],
      explanation: "Samme varmemengde er verdt mer entropi ved lav temperatur, så den kalde halvdelens gevinst overstiger den varmes tap, og summen blir positiv — som den må for en irreversibel prosess. At bidragene skulle være like store, ville krevd at Q/T var lik i begge ender. Den varme halvdelen får redusert entropi, ikke økt. Og en spontan prosess kan aldri senke universets entropi.",
    },
    {
      question: "Tre tynne, svarte strålingsskjermer settes mellom to plater. Hvor stor blir varmefluksen i forhold til uten skjermer?",
      options: ["En fjerdedel", "En tredjedel", "En sjettedel", "En niendedel"],
      explanation: "Med n skjermer blir det n+1 like store sprang i T⁴-skalaen, så fluksen blir j₀/(n+1) = j₀/4. Å svare en tredjedel er å telle skjermene i stedet for mellomrommene — den innebygde av-for-én-fella. En sjettedel og en niendedel svarer til n+3 og (n+1)², som ingen av delene følger av balansen.",
    },
    {
      question: "Vann koker ved 373,15 K og 101,3 kPa. Hva må du passe på når du bruker Clausius–Clapeyron til å finne damptrykket ved 353,15 K?",
      options: ["At temperaturene står i kelvin og fordampningsvarmen i J/mol, og at eksponenten blir negativ", "At temperaturene står i celsius, siden bare differansen mellom dem inngår i uttrykket", "At fordampningsvarmen oppgis per kilogram, siden formelen bruker spesifikk og ikke molar varme", "At referansepunktet velges ved det kritiske punktet og ikke ved kokepunktet"],
      explanation: "Temperaturene står inne i 1/T og må være absolutte; l_f/R skal være i kelvin, altså l_f i J/mol når R er 8,314 J/(mol·K); og eksponenten må bli negativ siden damptrykket synker med temperaturen. Celsius er direkte galt her, i motsetning til i varmeledning der bare differanser inngår. Formen med molar fordampningsvarme krever mol, ikke kilogram. Og kokepunktet er det naturlige referansepunktet — det kritiske punktet ligger langt utenfor gyldighetsområdet for tilnærmingen.",
    },
  ],
  'tfy4115-12-4': [
    {
      question: "En geostasjonær satellitt har omløpstid 86164 s. Hva er den vanligste enkeltfeilen i denne sjangeren?",
      options: ["Å oppgi baneradien når oppgaven spør om høyden over bakken", "Å bruke omløpstiden i timer i stedet for sekunder når radien skal regnes ut", "Å glemme satellittens egen masse, som inngår i uttrykket for baneradien", "Å bruke gravitasjonskonstanten G alene i stedet for produktet GM for jorda"],
      explanation: "Formelen gir radien målt fra jordas sentrum, og høyden er den minus jordradien — en differanse på 6371 km, som ligger ferdig i alternativlista. Tidsenheten er et reelt problem i andre oppgaver, men her er sekunder oppgitt direkte. Satellittens masse faller ut av kraftbalansen. Og GM oppgis normalt samlet, nettopp fordi produktet er kjent mer nøyaktig enn faktorene hver for seg.",
    },
    {
      question: "En jernbaneskinne på 25,0 m varmes 38,0 K. Med α = 1,20·10⁻⁵ K⁻¹, hvor mye lengre blir den?",
      options: ["11,4 mm", "34,2 mm", "0,0114 mm", "93,3 mm"],
      explanation: "ΔL = αLΔT = 1,20·10⁻⁵ · 25,0 · 38,0 = 1,14·10⁻² m, altså 11,4 mm. Verdien 34,2 mm er tre ganger så mye og kommer av å bruke volumutvidelseskoeffisienten β ≈ 3α på en lengde. Verdien 0,0114 mm er svaret i meter feilmerket som millimeter, og 93,3 mm er det du får hvis du legger 273,15 til temperaturendringen — men en differanse er den samme i celsius og kelvin.",
    },
    {
      question: "Hvorfor er det trygt å bruke celsius i termisk utvidelse, men ikke i gassloven?",
      options: ["Fordi utvidelsen avhenger av en differanse, som er lik i begge skalaer", "Fordi utvidelseskoeffisienten α er definert med celsius som referanseskala", "Fordi utvidelsen er så liten at forskjellen mellom skalaene ikke merkes i praksis", "Fordi faste stoffer følger en annen tilstandslikning enn gasser gjør"],
      explanation: "En differanse på 38 grader er 38 K uansett skala, fordi forskyvningen på 273,15 forsvinner i subtraksjonen — mens gassloven inneholder T selv og krever absolutt temperatur. Koeffisienten α er ikke knyttet til noen bestemt skala; den har enheten per kelvin. At forskjellen ikke merkes, er direkte galt: den ville vært en faktor på flere hundre. Og forskjellen ligger i om det er T eller ΔT som inngår, ikke i stoffets tilstandslikning.",
    },
    {
      question: "Et gyroskop spinner med 210 rad/s og preserer med 0,347 rad/s. Hva forteller forholdet mellom de to?",
      options: ["At betingelsen for presesjonsformelen holder: presesjonen er langsommere enn spinnet", "At gyroskopet er ustabilt, siden presesjonen burde ligget i samme størrelsesorden som spinnet", "At kraftmomentet fra tyngden er for lite til at presesjonen kan måles i praksis", "At treghetsmomentet må være regnet feil, siden forholdet skal være omtrent 1"],
      explanation: "Uttrykket Ω = Mgr/(I₀ω) gjelder for raskt spinn, altså når Ω ≪ ω — et forhold på rundt 600 bekrefter at antakelsen holder, og det er en gratis rimelighetskontroll. De tre andre påstår at forholdet burde vært nær 1, noe som ville brutt nettopp den betingelsen formelen hviler på.",
    },
    {
      question: "Framover-Euler brukes på en bevegelse med avtakende akselerasjon. Hvordan ligger Euler-verdien i forhold til den eksakte?",
      options: ["Over den eksakte, fordi metoden holder akselerasjonen fast på startverdien i steget", "Under den eksakte, fordi metoden ikke får med seg akselerasjonen i slutten av hvert steg", "Nøyaktig på den eksakte, siden feilen fra hvert steg kansellerer feilen fra det neste", "Tilfeldig over eller under, avhengig av hvilken steglengde som velges"],
      explanation: "Akselerasjonen avtar gjennom steget, men framover-Euler bruker startverdien hele veien og legger dermed på for mye fart — svaret havner over. Bakover-Euler, som bruker sluttverdien, ville havnet under. Feilene kansellerer ikke; de akkumuleres proporsjonalt med Δt. Og retningen på avviket er systematisk, ikke tilfeldig.",
    },
    {
      question: "Hvordan bør du lese resultatet av generalprøven?",
      options: ["Som en sjangerdekning: finn hvilke sjangre du bommer på, og gå til drillkapitlet for hver av dem", "Som en karakterprognose, siden 40 spørsmål gir et statistisk pålitelig anslag på eksamensresultatet", "Som et mål på tempo alene, siden alle spørsmålene er hentet fra sjangre du allerede har drillet", "Som en test av formelarket, siden alle svarene kan slås opp direkte der"],
      explanation: "Settet er kalibrert til å dekke samtlige sjangre, så bomlisten oversettes direkte til en leseplan via sjangertabellen. En karakterprognose er den ikke: arkivet oppgir ingen karaktergrenser, og et øvingssett er ikke kalibrert mot en sensur. Tempo er én av flere ting settet måler, ikke den eneste. Og formelarket gir formlene, ikke metodevalget eller regnekjeden — det er nettopp forskjellen §H4 handler om.",
    },
  ],
  'tfy4115-2-1': [
    {
      question: "En kloss glir **nedover** et skråplan med helning $25{,}0^\\circ$ og friksjonskoeffisient $\\mu = 0{,}300$. Hvor stor er akselerasjonen?",
      options: ["$1{,}48\\,\\text{m/s}^2$", "$6{,}81\\,\\text{m/s}^2$", "$4{,}15\\,\\text{m/s}^2$", "$7{,}65\\,\\text{m/s}^2$"],
      explanation: "Nedover bevegelse gir minus foran friksjonsleddet: $a = g(\\sin\\theta - \\mu\\cos\\theta)$. Det største alternativet er pluss-varianten, altså formelen for et legeme som går oppover — der bremser både tyngdekomponenten og friksjonen. Alternativet uten friksjonsledd er $g\\sin\\theta$, og ett alternativ kommer av å bytte om $\\sin$ og $\\cos$, som en test med $\\theta = 0$ ville avslørt straks.",
    },
    {
      question: "En kloss glir **nedover** et skråplan med helning $30{,}0^\\circ$ og friksjonskoeffisient $\\mu = 0{,}200$. Hvor stor er akselerasjonen?",
      options: ["$3{,}21\\,\\text{m/s}^2$", "$6{,}60\\,\\text{m/s}^2$", "$4{,}90\\,\\text{m/s}^2$", "$7{,}51\\,\\text{m/s}^2$"],
      explanation: "Nedover bevegelse gir minus foran friksjonsleddet: $a = g(\\sin\\theta - \\mu\\cos\\theta)$. Det største alternativet er pluss-varianten, altså formelen for et legeme som går oppover — der bremser både tyngdekomponenten og friksjonen. Alternativet uten friksjonsledd er $g\\sin\\theta$, og ett alternativ kommer av å bytte om $\\sin$ og $\\cos$, som en test med $\\theta = 0$ ville avslørt straks.",
    },
    {
      question: "En kloss glir **nedover** et skråplan med helning $35{,}0^\\circ$ og friksjonskoeffisient $\\mu = 0{,}400$. Hvor stor er akselerasjonen?",
      options: ["$2{,}41\\,\\text{m/s}^2$", "$8{,}84\\,\\text{m/s}^2$", "$5{,}63\\,\\text{m/s}^2$", "$5{,}79\\,\\text{m/s}^2$"],
      explanation: "Nedover bevegelse gir minus foran friksjonsleddet: $a = g(\\sin\\theta - \\mu\\cos\\theta)$. Det største alternativet er pluss-varianten, altså formelen for et legeme som går oppover — der bremser både tyngdekomponenten og friksjonen. Alternativet uten friksjonsledd er $g\\sin\\theta$, og ett alternativ kommer av å bytte om $\\sin$ og $\\cos$, som en test med $\\theta = 0$ ville avslørt straks.",
    },
    {
      question: "En kloss glir **nedover** et skråplan med helning $20{,}0^\\circ$ og friksjonskoeffisient $\\mu = 0{,}150$. Hvor stor er akselerasjonen?",
      options: ["$1{,}97\\,\\text{m/s}^2$", "$4{,}74\\,\\text{m/s}^2$", "$3{,}36\\,\\text{m/s}^2$", "$8{,}72\\,\\text{m/s}^2$"],
      explanation: "Nedover bevegelse gir minus foran friksjonsleddet: $a = g(\\sin\\theta - \\mu\\cos\\theta)$. Det største alternativet er pluss-varianten, altså formelen for et legeme som går oppover — der bremser både tyngdekomponenten og friksjonen. Alternativet uten friksjonsledd er $g\\sin\\theta$, og ett alternativ kommer av å bytte om $\\sin$ og $\\cos$, som en test med $\\theta = 0$ ville avslørt straks.",
    },
    {
      question: "En kloss glir **nedover** et skråplan med helning $40{,}0^\\circ$ og friksjonskoeffisient $\\mu = 0{,}350$. Hvor stor er akselerasjonen?",
      options: ["$3{,}68\\,\\text{m/s}^2$", "$8{,}94\\,\\text{m/s}^2$", "$6{,}31\\,\\text{m/s}^2$", "$5{,}31\\,\\text{m/s}^2$"],
      explanation: "Nedover bevegelse gir minus foran friksjonsleddet: $a = g(\\sin\\theta - \\mu\\cos\\theta)$. Det største alternativet er pluss-varianten, altså formelen for et legeme som går oppover — der bremser både tyngdekomponenten og friksjonen. Alternativet uten friksjonsledd er $g\\sin\\theta$, og ett alternativ kommer av å bytte om $\\sin$ og $\\cos$, som en test med $\\theta = 0$ ville avslørt straks.",
    },
    {
      question: "En kasse sendes **oppover** et skråplan med helning $18{,}0^\\circ$ og friksjonskoeffisient $\\mu = 0{,}120$. Hvor stor er retardasjonen mens kassen er på vei opp?",
      options: ["$4{,}15\\,\\text{m/s}^2$", "$1{,}91\\,\\text{m/s}^2$", "$3{,}03\\,\\text{m/s}^2$", "$4{,}21\\,\\text{m/s}^2$"],
      explanation: "På vei oppover peker friksjonen nedover langs planet, samme vei som tyngdekomponenten, så $a = g(\\sin\\theta + \\mu\\cos\\theta)$. Det minste alternativet er minus-varianten, som gjelder på vei ned. Alternativet uten friksjonsledd er $g\\sin\\theta$. Ett alternativ kommer av å glemme $\\cos\\theta$ i friksjonsleddet og skrive $\\mu$ alene — en feil som blir merkbar først ved store vinkler.",
    },
    {
      question: "En kasse sendes **oppover** et skråplan med helning $22{,}0^\\circ$ og friksjonskoeffisient $\\mu = 0{,}250$. Hvor stor er retardasjonen mens kassen er på vei opp?",
      options: ["$5{,}95\\,\\text{m/s}^2$", "$1{,}40\\,\\text{m/s}^2$", "$3{,}67\\,\\text{m/s}^2$", "$6{,}13\\,\\text{m/s}^2$"],
      explanation: "På vei oppover peker friksjonen nedover langs planet, samme vei som tyngdekomponenten, så $a = g(\\sin\\theta + \\mu\\cos\\theta)$. Det minste alternativet er minus-varianten, som gjelder på vei ned. Alternativet uten friksjonsledd er $g\\sin\\theta$. Ett alternativ kommer av å glemme $\\cos\\theta$ i friksjonsleddet og skrive $\\mu$ alene — en feil som blir merkbar først ved store vinkler.",
    },
    {
      question: "En kasse sendes **oppover** et skråplan med helning $28{,}0^\\circ$ og friksjonskoeffisient $\\mu = 0{,}180$. Hvor stor er retardasjonen mens kassen er på vei opp?",
      options: ["$6{,}16\\,\\text{m/s}^2$", "$3{,}05\\,\\text{m/s}^2$", "$4{,}61\\,\\text{m/s}^2$", "$6{,}37\\,\\text{m/s}^2$"],
      explanation: "På vei oppover peker friksjonen nedover langs planet, samme vei som tyngdekomponenten, så $a = g(\\sin\\theta + \\mu\\cos\\theta)$. Det minste alternativet er minus-varianten, som gjelder på vei ned. Alternativet uten friksjonsledd er $g\\sin\\theta$. Ett alternativ kommer av å glemme $\\cos\\theta$ i friksjonsleddet og skrive $\\mu$ alene — en feil som blir merkbar først ved store vinkler.",
    },
    {
      question: "En kasse sendes **oppover** et skråplan med helning $32{,}0^\\circ$ og friksjonskoeffisient $\\mu = 0{,}220$. Hvor stor er retardasjonen mens kassen er på vei opp?",
      options: ["$7{,}03\\,\\text{m/s}^2$", "$3{,}37\\,\\text{m/s}^2$", "$5{,}20\\,\\text{m/s}^2$", "$7{,}36\\,\\text{m/s}^2$"],
      explanation: "På vei oppover peker friksjonen nedover langs planet, samme vei som tyngdekomponenten, så $a = g(\\sin\\theta + \\mu\\cos\\theta)$. Det minste alternativet er minus-varianten, som gjelder på vei ned. Alternativet uten friksjonsledd er $g\\sin\\theta$. Ett alternativ kommer av å glemme $\\cos\\theta$ i friksjonsleddet og skrive $\\mu$ alene — en feil som blir merkbar først ved store vinkler.",
    },
    {
      question: "En kasse sendes oppover et plan med helning $20{,}0^\\circ$ og startfart $6{,}00\\,\\text{m/s}$. Friksjonskoeffisienten er $0{,}250$. Hvor langt opp langs planet kommer den?",
      options: ["$3{,}18\\,\\text{m}$", "$17{,}1\\,\\text{m}$", "$5{,}36\\,\\text{m}$", "$6{,}36\\,\\text{m}$"],
      explanation: "Snuavstanden er $x = v_0^2/(2a)$ med $a = g(\\sin\\theta + \\mu\\cos\\theta)$ — pluss, fordi kassen går oppover. Det klart største alternativet kommer av å bruke minus-varianten av akselerasjonen, altså nedturens verdi. Alternativet som dropper friksjonen helt, er $v_0^2/(2g\\sin\\theta)$. Ett alternativ er dobbelt så stort som riktig svar og kommer av å glemme faktoren 2 i nevneren.",
    },
    {
      question: "En kasse sendes oppover et plan med helning $18{,}0^\\circ$ og startfart $12{,}00\\,\\text{m/s}$. Friksjonskoeffisienten er $0{,}120$. Hvor langt opp langs planet kommer den?",
      options: ["$17{,}3\\,\\text{m}$", "$37{,}7\\,\\text{m}$", "$23{,}8\\,\\text{m}$", "$34{,}7\\,\\text{m}$"],
      explanation: "Snuavstanden er $x = v_0^2/(2a)$ med $a = g(\\sin\\theta + \\mu\\cos\\theta)$ — pluss, fordi kassen går oppover. Det klart største alternativet kommer av å bruke minus-varianten av akselerasjonen, altså nedturens verdi. Alternativet som dropper friksjonen helt, er $v_0^2/(2g\\sin\\theta)$. Ett alternativ er dobbelt så stort som riktig svar og kommer av å glemme faktoren 2 i nevneren.",
    },
    {
      question: "En kasse sendes oppover et plan med helning $25{,}0^\\circ$ og startfart $8{,}00\\,\\text{m/s}$. Friksjonskoeffisienten er $0{,}300$. Hvor langt opp langs planet kommer den?",
      options: ["$4{,}70\\,\\text{m}$", "$21{,}6\\,\\text{m}$", "$7{,}72\\,\\text{m}$", "$9{,}39\\,\\text{m}$"],
      explanation: "Snuavstanden er $x = v_0^2/(2a)$ med $a = g(\\sin\\theta + \\mu\\cos\\theta)$ — pluss, fordi kassen går oppover. Det klart største alternativet kommer av å bruke minus-varianten av akselerasjonen, altså nedturens verdi. Alternativet som dropper friksjonen helt, er $v_0^2/(2g\\sin\\theta)$. Ett alternativ er dobbelt så stort som riktig svar og kommer av å glemme faktoren 2 i nevneren.",
    },
    {
      question: "En kasse ligger på en rampe som langsomt heves. Den statiske friksjonskoeffisienten er $0{,}300$. Ved hvilken vinkel begynner kassen å gli?",
      options: ["$16{,}7^\\circ$", "$17{,}5^\\circ$", "$72{,}5^\\circ$", "$73{,}3^\\circ$"],
      explanation: "Glidebetingelsen er $\\tan\\theta > \\mu_s$, så vinkelen er $\\theta = \\arctan\\mu_s$. Alternativet fra $\\arcsin\\mu_s$ ligger nær riktig svar for små $\\mu_s$ og er derfor den farligste distraktoren — det følger av å sette tyngdekomponenten lik friksjonskraften uten å dele på $\\cos\\theta$. To av alternativene kommer av $\\arccos\\mu_s$ og av å snu brøken før du tar arctangens.",
    },
    {
      question: "En kasse ligger på en rampe som langsomt heves. Den statiske friksjonskoeffisienten er $0{,}550$. Ved hvilken vinkel begynner kassen å gli?",
      options: ["$28{,}8^\\circ$", "$33{,}4^\\circ$", "$56{,}6^\\circ$", "$61{,}2^\\circ$"],
      explanation: "Glidebetingelsen er $\\tan\\theta > \\mu_s$, så vinkelen er $\\theta = \\arctan\\mu_s$. Alternativet fra $\\arcsin\\mu_s$ ligger nær riktig svar for små $\\mu_s$ og er derfor den farligste distraktoren — det følger av å sette tyngdekomponenten lik friksjonskraften uten å dele på $\\cos\\theta$. To av alternativene kommer av $\\arccos\\mu_s$ og av å snu brøken før du tar arctangens.",
    },
    {
      question: "En kasse ligger på en rampe som langsomt heves. Den statiske friksjonskoeffisienten er $0{,}750$. Ved hvilken vinkel begynner kassen å gli?",
      options: ["$36{,}9^\\circ$", "$48{,}6^\\circ$", "$41{,}4^\\circ$", "$53{,}1^\\circ$"],
      explanation: "Glidebetingelsen er $\\tan\\theta > \\mu_s$, så vinkelen er $\\theta = \\arctan\\mu_s$. Alternativet fra $\\arcsin\\mu_s$ ligger nær riktig svar for små $\\mu_s$ og er derfor den farligste distraktoren — det følger av å sette tyngdekomponenten lik friksjonskraften uten å dele på $\\cos\\theta$. To av alternativene kommer av $\\arccos\\mu_s$ og av å snu brøken før du tar arctangens.",
    },
    {
      question: "En kasse med masse $12{,}0\\,\\text{kg}$ står på et vannrett gulv og trekkes med kraften $60{,}0\\,\\text{N}$ rettet $30{,}0^\\circ$ over vannrett. Hvor stor er normalkraften fra gulvet?",
      options: ["$87{,}7\\,\\text{N}$", "$118\\,\\text{N}$", "$148\\,\\text{N}$", "$65{,}8\\,\\text{N}$"],
      explanation: "Loddrett likevekt gir $N + F\\sin\\varphi = mg$, altså $N = mg - F\\sin\\varphi$: den oppadrettede komponenten av kraften bærer en del av tyngden. Alternativet som er nøyaktig $mg$, er felle #6 — normalkraften satt til tyngden som om den ytre kraften ikke fantes. Det største alternativet har feil fortegn på den loddrette komponenten, altså en kraft som presser ned. Ett alternativ bruker $\\cos$ der $\\sin$ skal stå.",
    },
    {
      question: "En kasse med masse $28{,}0\\,\\text{kg}$ står på et vannrett gulv og trekkes med kraften $95{,}0\\,\\text{N}$ rettet $25{,}0^\\circ$ over vannrett. Hvor stor er normalkraften fra gulvet?",
      options: ["$235\\,\\text{N}$", "$275\\,\\text{N}$", "$315\\,\\text{N}$", "$189\\,\\text{N}$"],
      explanation: "Loddrett likevekt gir $N + F\\sin\\varphi = mg$, altså $N = mg - F\\sin\\varphi$: den oppadrettede komponenten av kraften bærer en del av tyngden. Alternativet som er nøyaktig $mg$, er felle #6 — normalkraften satt til tyngden som om den ytre kraften ikke fantes. Det største alternativet har feil fortegn på den loddrette komponenten, altså en kraft som presser ned. Ett alternativ bruker $\\cos$ der $\\sin$ skal stå.",
    },
    {
      question: "En kasse med masse $20{,}0\\,\\text{kg}$ står på et vannrett gulv og trekkes med kraften $80{,}0\\,\\text{N}$ rettet $40{,}0^\\circ$ over vannrett. Hvor stor er normalkraften fra gulvet?",
      options: ["$145\\,\\text{N}$", "$196\\,\\text{N}$", "$248\\,\\text{N}$", "$135\\,\\text{N}$"],
      explanation: "Loddrett likevekt gir $N + F\\sin\\varphi = mg$, altså $N = mg - F\\sin\\varphi$: den oppadrettede komponenten av kraften bærer en del av tyngden. Alternativet som er nøyaktig $mg$, er felle #6 — normalkraften satt til tyngden som om den ytre kraften ikke fantes. Det største alternativet har feil fortegn på den loddrette komponenten, altså en kraft som presser ned. Ett alternativ bruker $\\cos$ der $\\sin$ skal stå.",
    },
    {
      question: "En kasse med masse $12{,}0\\,\\text{kg}$ på et vannrett gulv trekkes med kraften $60{,}0\\,\\text{N}$ rettet $30{,}0^\\circ$ over vannrett. Friksjonskoeffisienten er $0{,}350$. Hvor stor er akselerasjonen?",
      options: ["$1{,}77\\,\\text{m/s}^2$", "$0{,}897\\,\\text{m/s}^2$", "$4{,}33\\,\\text{m/s}^2$", "$0{,}0216\\,\\text{m/s}^2$"],
      explanation: "Først normalkraften, $N = mg - F\\sin\\varphi$, så friksjonen $f = \\mu N$, og til slutt $ma = F\\cos\\varphi - f$. Alternativet som bruker $N = mg$, er felle #6 og gir et merkbart for lavt svar. Det største alternativet dropper friksjonen helt. Det minste har feil fortegn på den loddrette komponenten og gir dermed for stor friksjon.",
    },
    {
      question: "En kasse med masse $18{,}0\\,\\text{kg}$ på et vannrett gulv trekkes med kraften $70{,}0\\,\\text{N}$ rettet $20{,}0^\\circ$ over vannrett. Friksjonskoeffisienten er $0{,}300$. Hvor stor er akselerasjonen?",
      options: ["$1{,}11\\,\\text{m/s}^2$", "$0{,}711\\,\\text{m/s}^2$", "$3{,}65\\,\\text{m/s}^2$", "$0{,}312\\,\\text{m/s}^2$"],
      explanation: "Først normalkraften, $N = mg - F\\sin\\varphi$, så friksjonen $f = \\mu N$, og til slutt $ma = F\\cos\\varphi - f$. Alternativet som bruker $N = mg$, er felle #6 og gir et merkbart for lavt svar. Det største alternativet dropper friksjonen helt. Det minste har feil fortegn på den loddrette komponenten og gir dermed for stor friksjon.",
    },
    {
      question: "Hvorfor faller massen ut av uttrykket for akselerasjonen til en kloss som glir ned et skråplan?",
      options: ["Fordi både tyngdekomponenten og friksjonskraften er proporsjonale med massen, så $m$ kan forkortes bort på begge sider av Newtons 2. lov.", "Fordi friksjonskraften er uavhengig av massen, mens tyngdekomponenten øker med den, og de to effektene opphever hverandre i uttrykket.", "Fordi normalkraften er den samme uansett masse, slik at friksjonen blir uavhengig av hvor tung klossen er, og bare vinkelen står igjen.", "Fordi tyngdeakselerasjonen $g$ allerede inneholder massen, slik at en ekstra massefaktor i uttrykket ville regnet effekten to ganger."],
      explanation: "Newtons 2. lov gir $ma = mg\\sin\\theta - \\mu mg\\cos\\theta$, og hvert ledd har faktoren $m$ — derfor forkortes den bort og $a = g(\\sin\\theta - \\mu\\cos\\theta)$. Alternativet om at effektene «opphever hverandre» er nær sant i formen, men galt i innholdet: begge kreftene vokser med massen, ingen av dem er uavhengig av den. Normalkraften er $mg\\cos\\theta$ og altså også masseavhengig, og $g$ inneholder ikke masse.",
    },
    {
      question: "En kasse glir nedover et skråplan med **konstant fart**. Hva kan du slutte om friksjonskoeffisienten?",
      options: ["At $\\mu = \\tan\\theta$, siden akselerasjonen er null bare når $\\sin\\theta = \\mu\\cos\\theta$.", "At $\\mu = \\sin\\theta$, siden friksjonskraften da er like stor som tyngdekomponenten langs planet.", "At $\\mu = \\cos\\theta$, siden friksjonen er proporsjonal med normalkraften og de to må balansere.", "At $\\mu$ ikke kan bestemmes, siden konstant fart bare sier at summen av kreftene er null."],
      explanation: "Konstant fart betyr $a = 0$, altså $g(\\sin\\theta - \\mu\\cos\\theta) = 0$, som gir $\\mu = \\tan\\theta$. Dette er en standard målemetode for friksjonskoeffisienter. De to alternativene med $\\sin\\theta$ og $\\cos\\theta$ glemmer at det er forholdet mellom de to som avgjør. Alternativet om at $\\mu$ ikke kan bestemmes, er nær sant i formuleringen — summen av kreftene ER null — men nettopp den betingelsen bestemmer $\\mu$ entydig.",
    },
    {
      question: "En kasse skyves over et vannrett gulv med en kraft som peker $25^\\circ$ **nedover** i forhold til vannrett. Hva skjer med friksjonskraften sammenlignet med å skyve helt vannrett?",
      options: ["Den øker, fordi kraften presser kassen hardere mot gulvet og dermed gjør normalkraften større.", "Den avtar, fordi bare den vannrette komponenten av kraften virker mot friksjonen, mens den loddrette går til spille.", "Den er uendret, fordi friksjonskraften bare avhenger av materialene og av kontaktflatens areal, ikke av retningen på kraften.", "Den øker eller avtar avhengig av hvor stor massen er, siden tyngden og kraftens loddrette komponent konkurrerer om normalkraften."],
      explanation: "Normalkraften blir $N = mg + F\\sin\\varphi$ når kraften peker nedover, så friksjonen $f = \\mu N$ øker. Det er derfor det er tyngre å skyve enn å dra. Alternativet om at friksjonen er uendret, bygger på en dobbel feil: friksjonen avhenger ikke av arealet, men den avhenger sterkt av normalkraften. Alternativet som gjør svaret masseavhengig, er nær sant i at både tyngden og kraften bidrar til $N$ — men retningen på endringen er den samme uansett masse.",
    },
    {
      question: "En kloss sendes oppover et skråplan med friksjon, snur, og glir tilbake til startpunktet. Hvordan er farten tilbake sammenlignet med startfarten?",
      options: ["Lavere, fordi friksjonen har tatt energi både på vei opp og på vei ned, slik at bare en brøkdel av den kinetiske energien er igjen.", "Lik, fordi klossen er tilbake i samme høyde, og potensiell energi avhenger bare av høyden — ikke av veien den har gått.", "Lavere på vei opp enn på vei ned, siden friksjonen bare virker mot bevegelsen når tyngdekomponenten peker samme vei som den.", "Avhengig av massen, siden en tung kloss taper mer energi til friksjon enn en lett kloss over samme strekning."],
      explanation: "Farten tilbake er $v = v_0\\sqrt{(\\tan\\theta - \\mu)/(\\tan\\theta + \\mu)}$, altså alltid lavere. Alternativet om lik fart bruker energibevaring korrekt for tyngden, men glemmer at friksjonen ikke er en konservativ kraft: den tar energi i begge retninger. Alternativet om masseavhengighet er nær sant i at en tung kloss taper mer energi i joule, men brøkdelen som tapes, er den samme — massen faller ut av forholdet.",
    },
  ],
  'tfy4115-2-2': [
    {
      question: "En kompakt kule ruller uten å gli fra ro ned et høydefall på $2{,}50\\,\\text{m}$. Hvor stor er farten i bunnen?",
      options: ["$5{,}92\\,\\text{m/s}$", "$7{,}00\\,\\text{m/s}$", "$5{,}42\\,\\text{m/s}$", "$5{,}00\\,\\text{m/s}$"],
      explanation: "Energibevaring med rotasjonsleddet gir $v = \\sqrt{2g\\Delta y/(1+c)}$ med $c = I/(mR^2)$ for formen det gjelder. Det største alternativet er farten uten rotasjonsleddet, altså $\\sqrt{2g\\Delta y}$ — felle #1, og det er alltid for høyt. Ett av alternativene bruker formfaktoren til en annen form, og ett alternativ deler på $(1+c)$ to ganger.",
    },
    {
      question: "En massiv sylinder ruller uten å gli fra ro ned et høydefall på $3{,}20\\,\\text{m}$. Hvor stor er farten i bunnen?",
      options: ["$6{,}47\\,\\text{m/s}$", "$7{,}92\\,\\text{m/s}$", "$6{,}70\\,\\text{m/s}$", "$5{,}28\\,\\text{m/s}$"],
      explanation: "Energibevaring med rotasjonsleddet gir $v = \\sqrt{2g\\Delta y/(1+c)}$ med $c = I/(mR^2)$ for formen det gjelder. Det største alternativet er farten uten rotasjonsleddet, altså $\\sqrt{2g\\Delta y}$ — felle #1, og det er alltid for høyt. Ett av alternativene bruker formfaktoren til en annen form, og ett alternativ deler på $(1+c)$ to ganger.",
    },
    {
      question: "En kuleskall ruller uten å gli fra ro ned et høydefall på $1{,}80\\,\\text{m}$. Hvor stor er farten i bunnen?",
      options: ["$4{,}60\\,\\text{m/s}$", "$5{,}94\\,\\text{m/s}$", "$5{,}02\\,\\text{m/s}$", "$3{,}57\\,\\text{m/s}$"],
      explanation: "Energibevaring med rotasjonsleddet gir $v = \\sqrt{2g\\Delta y/(1+c)}$ med $c = I/(mR^2)$ for formen det gjelder. Det største alternativet er farten uten rotasjonsleddet, altså $\\sqrt{2g\\Delta y}$ — felle #1, og det er alltid for høyt. Ett av alternativene bruker formfaktoren til en annen form, og ett alternativ deler på $(1+c)$ to ganger.",
    },
    {
      question: "En kompakt kule ruller uten å gli fra ro ned et høydefall på $4{,}00\\,\\text{m}$. Hvor stor er farten i bunnen?",
      options: ["$7{,}49\\,\\text{m/s}$", "$8{,}86\\,\\text{m/s}$", "$6{,}86\\,\\text{m/s}$", "$6{,}33\\,\\text{m/s}$"],
      explanation: "Energibevaring med rotasjonsleddet gir $v = \\sqrt{2g\\Delta y/(1+c)}$ med $c = I/(mR^2)$ for formen det gjelder. Det største alternativet er farten uten rotasjonsleddet, altså $\\sqrt{2g\\Delta y}$ — felle #1, og det er alltid for høyt. Ett av alternativene bruker formfaktoren til en annen form, og ett alternativ deler på $(1+c)$ to ganger.",
    },
    {
      question: "En massiv sylinder ruller uten å gli fra ro ned et høydefall på $1{,}50\\,\\text{m}$. Hvor stor er farten i bunnen?",
      options: ["$4{,}43\\,\\text{m/s}$", "$5{,}42\\,\\text{m/s}$", "$4{,}58\\,\\text{m/s}$", "$3{,}62\\,\\text{m/s}$"],
      explanation: "Energibevaring med rotasjonsleddet gir $v = \\sqrt{2g\\Delta y/(1+c)}$ med $c = I/(mR^2)$ for formen det gjelder. Det største alternativet er farten uten rotasjonsleddet, altså $\\sqrt{2g\\Delta y}$ — felle #1, og det er alltid for høyt. Ett av alternativene bruker formfaktoren til en annen form, og ett alternativ deler på $(1+c)$ to ganger.",
    },
    {
      question: "En tynn ring ruller uten å gli fra ro ned et høydefall på $2{,}00\\,\\text{m}$. Hvor stor er farten i bunnen?",
      options: ["$4{,}43\\,\\text{m/s}$", "$6{,}26\\,\\text{m/s}$", "$5{,}29\\,\\text{m/s}$", "$3{,}13\\,\\text{m/s}$"],
      explanation: "Energibevaring med rotasjonsleddet gir $v = \\sqrt{2g\\Delta y/(1+c)}$ med $c = I/(mR^2)$ for formen det gjelder. Det største alternativet er farten uten rotasjonsleddet, altså $\\sqrt{2g\\Delta y}$ — felle #1, og det er alltid for høyt. Ett av alternativene bruker formfaktoren til en annen form, og ett alternativ deler på $(1+c)$ to ganger.",
    },
    {
      question: "Hvor stor prosentandel av den totale kinetiske energien ligger i rotasjonen for en kompakt kule som ruller uten å gli?",
      options: ["$28{,}6\\,\\%$", "$71{,}4\\,\\%$", "$40{,}0\\,\\%$", "$70{,}0\\,\\%$"],
      explanation: "Rotasjonsandelen er $c/(1+c)$, ikke $c$ alene. Alternativet som er komplementet til riktig svar, er translasjonsandelen $1/(1+c)$ — bytt om, og du får den. Alternativet som er $c$ selv, glemmer at nevneren skal være hele energien, ikke bare translasjonsdelen. Ett alternativ er $(1+c)/2$ i prosent, som ikke svarer til noen fysisk andel.",
    },
    {
      question: "Hvor stor prosentandel av den totale kinetiske energien ligger i rotasjonen for en massiv sylinder som ruller uten å gli?",
      options: ["$33{,}3\\,\\%$", "$66{,}7\\,\\%$", "$50{,}0\\,\\%$", "$75{,}0\\,\\%$"],
      explanation: "Rotasjonsandelen er $c/(1+c)$, ikke $c$ alene. Alternativet som er komplementet til riktig svar, er translasjonsandelen $1/(1+c)$ — bytt om, og du får den. Alternativet som er $c$ selv, glemmer at nevneren skal være hele energien, ikke bare translasjonsdelen. Ett alternativ er $(1+c)/2$ i prosent, som ikke svarer til noen fysisk andel.",
    },
    {
      question: "Hvor stor prosentandel av den totale kinetiske energien ligger i rotasjonen for en kuleskall som ruller uten å gli?",
      options: ["$40{,}0\\,\\%$", "$60{,}0\\,\\%$", "$66{,}7\\,\\%$", "$83{,}3\\,\\%$"],
      explanation: "Rotasjonsandelen er $c/(1+c)$, ikke $c$ alene. Alternativet som er komplementet til riktig svar, er translasjonsandelen $1/(1+c)$ — bytt om, og du får den. Alternativet som er $c$ selv, glemmer at nevneren skal være hele energien, ikke bare translasjonsdelen. Ett alternativ er $(1+c)/2$ i prosent, som ikke svarer til noen fysisk andel.",
    },
    {
      question: "Ranger disse fire legemene etter hvor stor andel av den kinetiske energien som ligger i rotasjonen når de ruller uten å gli, fra minst til størst andel.",
      options: ["kompakt kule, massiv sylinder, kuleskall, tynn ring", "tynn ring, kuleskall, massiv sylinder, kompakt kule", "massiv sylinder, kompakt kule, tynn ring, kuleskall", "kompakt kule, kuleskall, massiv sylinder, tynn ring"],
      explanation: "Rotasjonsandelen er $c/(1+c)$, og $c$ er $2/5$, $1/2$, $2/3$ og $1$ for de fire formene — altså andelene $2/7$, $1/3$, $2/5$ og $1/2$. Rekkefølgen følger hvor langt fra aksen massen ligger: den kompakte kula har mest masse nær sentrum, ringen har alt i randen. Alternativet med motsatt rekkefølge er den samme innsikten lest baklengs. Ett alternativ bytter om kule og sylinder, som ligger tettest ($2/7 = 0{,}286$ mot $1/3 = 0{,}333$), og ett bytter om sylinder og kuleskall.",
    },
    {
      question: "En kompakt kule med masse $1{,}20\\,\\text{kg}$ ruller uten å gli med farten $3{,}00\\,\\text{m/s}$. Hvor stor er den totale kinetiske energien?",
      options: ["$7{,}56\\,\\text{J}$", "$5{,}40\\,\\text{J}$", "$2{,}16\\,\\text{J}$", "$15{,}1\\,\\text{J}$"],
      explanation: "Den totale kinetiske energien er $K = \\tfrac12(1+c)mv^2$, altså summen av translasjons- og rotasjonsleddet. Alternativet som bare er $\\tfrac12mv^2$, glemmer rotasjonen (felle #1). Alternativet som er $\\tfrac12 c\\,mv^2$, gir bare rotasjonsdelen. Det største alternativet glemmer faktoren $\\tfrac12$.",
    },
    {
      question: "En massiv sylinder med masse $2{,}50\\,\\text{kg}$ ruller uten å gli med farten $4{,}00\\,\\text{m/s}$. Hvor stor er den totale kinetiske energien?",
      options: ["$30{,}0\\,\\text{J}$", "$20{,}0\\,\\text{J}$", "$10{,}0\\,\\text{J}$", "$60{,}0\\,\\text{J}$"],
      explanation: "Den totale kinetiske energien er $K = \\tfrac12(1+c)mv^2$, altså summen av translasjons- og rotasjonsleddet. Alternativet som bare er $\\tfrac12mv^2$, glemmer rotasjonen (felle #1). Alternativet som er $\\tfrac12 c\\,mv^2$, gir bare rotasjonsdelen. Det største alternativet glemmer faktoren $\\tfrac12$.",
    },
    {
      question: "En kuleskall med masse $0{,}80\\,\\text{kg}$ ruller uten å gli med farten $5{,}00\\,\\text{m/s}$. Hvor stor er den totale kinetiske energien?",
      options: ["$16{,}7\\,\\text{J}$", "$10{,}0\\,\\text{J}$", "$6{,}67\\,\\text{J}$", "$33{,}3\\,\\text{J}$"],
      explanation: "Den totale kinetiske energien er $K = \\tfrac12(1+c)mv^2$, altså summen av translasjons- og rotasjonsleddet. Alternativet som bare er $\\tfrac12mv^2$, glemmer rotasjonen (felle #1). Alternativet som er $\\tfrac12 c\\,mv^2$, gir bare rotasjonsdelen. Det største alternativet glemmer faktoren $\\tfrac12$.",
    },
    {
      question: "Et legeme ruller uten å gli med farten $5{,}02\\,\\text{m/s}$, og radien er $0{,}0500\\,\\text{m}$. Hvor stor er vinkelfarten?",
      options: ["$100\\,\\text{rad/s}$", "$0{,}251\\,\\text{rad/s}$", "$0{,}00996\\,\\text{rad/s}$", "$50{,}2\\,\\text{rad/s}$"],
      explanation: "Rullebetingelsen er $v = \\omega R$, altså $\\omega = v/R$. Alternativet som er produktet $vR$, snur regneoperasjonen. Alternativet som er $R/v$, snur brøken og gir en enhet som ikke er rad/s. Ett alternativ bruker diameteren i stedet for radien.",
    },
    {
      question: "Et legeme ruller uten å gli med farten $14{,}70\\,\\text{m/s}$, og radien er $0{,}3500\\,\\text{m}$. Hvor stor er vinkelfarten?",
      options: ["$42{,}0\\,\\text{rad/s}$", "$5{,}14\\,\\text{rad/s}$", "$0{,}0238\\,\\text{rad/s}$", "$21{,}0\\,\\text{rad/s}$"],
      explanation: "Rullebetingelsen er $v = \\omega R$, altså $\\omega = v/R$. Alternativet som er produktet $vR$, snur regneoperasjonen. Alternativet som er $R/v$, snur brøken og gir en enhet som ikke er rad/s. Ett alternativ bruker diameteren i stedet for radien.",
    },
    {
      question: "En kompakt kule ruller uten å gli oppover med startfart $4{,}00\\,\\text{m/s}$. Hvor høyt kommer den, målt loddrett?",
      options: ["$1{,}14\\,\\text{m}$", "$0{,}815\\,\\text{m}$", "$0{,}582\\,\\text{m}$", "$2{,}28\\,\\text{m}$"],
      explanation: "Energibevaring oppover gir $\\Delta y = (1+c)v_0^2/(2g)$: et rullende legeme har rotasjonsenergi i tillegg, og all den energien kan bli høyde. Derfor kommer det HØYERE enn en glidende kloss. Alternativet uten $(1+c)$ er klossens høyde. Alternativet som DIVIDERER med $(1+c)$, bruker sluttfartsformelen baklengs og er den farligste distraktoren. Ett alternativ glemmer faktoren 2.",
    },
    {
      question: "En massiv sylinder ruller uten å gli oppover med startfart $6{,}00\\,\\text{m/s}$. Hvor høyt kommer den, målt loddrett?",
      options: ["$2{,}75\\,\\text{m}$", "$1{,}83\\,\\text{m}$", "$1{,}22\\,\\text{m}$", "$5{,}50\\,\\text{m}$"],
      explanation: "Energibevaring oppover gir $\\Delta y = (1+c)v_0^2/(2g)$: et rullende legeme har rotasjonsenergi i tillegg, og all den energien kan bli høyde. Derfor kommer det HØYERE enn en glidende kloss. Alternativet uten $(1+c)$ er klossens høyde. Alternativet som DIVIDERER med $(1+c)$, bruker sluttfartsformelen baklengs og er den farligste distraktoren. Ett alternativ glemmer faktoren 2.",
    },
    {
      question: "En kraft er konstant $40{,}0\\,\\text{N}$ fra $x = 0$ til $x = 2{,}00\\,\\text{m}$, og avtar deretter rettlinjet til null ved $x = 5{,}00\\,\\text{m}$. Hvor stort er arbeidet over hele strekningen?",
      options: ["$140\\,\\text{J}$", "$200\\,\\text{J}$", "$80{,}0\\,\\text{J}$", "$260\\,\\text{J}$"],
      explanation: "Arbeidet er arealet under $F(x)$: rektangelet $40{,}0 \\cdot 2{,}00 = 80{,}0\\,\\text{J}$ pluss trekanten $\\tfrac12 \\cdot 40{,}0 \\cdot 3{,}00 = 60{,}0\\,\\text{J}$. Alternativet på $200\\,\\text{J}$ leser kraften som konstant hele veien. Alternativet på $80{,}0\\,\\text{J}$ tar bare rektangelet og glemmer trekanten. Ett alternativ regner trekanten som et rektangel og får $80{,}0 + 120\\,\\text{J}$.",
    },
    {
      question: "En kraft avtar rettlinjet fra $60{,}0\\,\\text{N}$ ved $x = 0$ til null ved $x = 3{,}00\\,\\text{m}$. Hvor stort er arbeidet?",
      options: ["$90{,}0\\,\\text{J}$", "$180\\,\\text{J}$", "$45{,}0\\,\\text{J}$", "$20{,}0\\,\\text{J}$"],
      explanation: "Arealet under en rettlinjet avtakende kraft er en trekant: $\\tfrac12 \\cdot 60{,}0 \\cdot 3{,}00 = 90{,}0\\,\\text{J}$. Alternativet på $180\\,\\text{J}$ glemmer faktoren $\\tfrac12$ og regner trekanten som et rektangel — den vanligste feilen. To av alternativene kommer av å halvere en gang for mye, og av å dele kraften på strekningen i stedet for å multiplisere.",
    },
    {
      question: "En syklist møter en luftmotstand $F = bv^2$ med $b = 0{,}250\\,\\text{kg/m}$. Hvor stor effekt trengs for å holde farten $8{,}00\\,\\text{m/s}$?",
      options: ["$128\\,\\text{W}$", "$16{,}0\\,\\text{W}$", "$2{,}00\\,\\text{W}$", "$1\\,020\\,\\text{W}$"],
      explanation: "Effekten mot en kvadratisk motstand er $P = Fv = bv^3$ — den tredje potensen, ikke den andre. Alternativet som er $bv^2$, oppgir kraften i newton i stedet for effekten i watt, og enhetssjekken alene stryker det. To av alternativene er $bv$ og $bv^4$, altså feil potens i hver sin retning.",
    },
    {
      question: "En syklist møter en luftmotstand $F = bv^2$ med $b = 0{,}250\\,\\text{kg/m}$. Hvor stor effekt trengs for å holde farten $16{,}00\\,\\text{m/s}$?",
      options: ["$1\\,020\\,\\text{W}$", "$64{,}0\\,\\text{W}$", "$4{,}00\\,\\text{W}$", "$16\\,400\\,\\text{W}$"],
      explanation: "Effekten mot en kvadratisk motstand er $P = Fv = bv^3$ — den tredje potensen, ikke den andre. Alternativet som er $bv^2$, oppgir kraften i newton i stedet for effekten i watt, og enhetssjekken alene stryker det. To av alternativene er $bv$ og $bv^4$, altså feil potens i hver sin retning.",
    },
    {
      question: "En fallskjermhopper har masse $85{,}0\\,\\text{kg}$, tverrsnittsareal $0{,}700\\,\\text{m}^2$ og motstandskoeffisient $1{,}00$. Luftens tetthet er $1{,}20\\,\\text{kg/m}^3$. Hvor stor er terminalfarten?",
      options: ["$44{,}6\\,\\text{m/s}$", "$31{,}5\\,\\text{m/s}$", "$1\\,990\\,\\text{m/s}$", "$22{,}3\\,\\text{m/s}$"],
      explanation: "Ved terminalfart balanserer luftmotstanden tyngden: $\\tfrac12\\rho A C_d v_t^2 = mg$, altså $v_t = \\sqrt{2mg/(\\rho A C_d)}$. Alternativet uten faktoren 2 glemmer $\\tfrac12$ i luftmotstandsuttrykket. Alternativet uten kvadratrot har enheten $\\text{m}^2/\\text{s}^2$ og strykes av en enhetssjekk. Ett alternativ er halve riktig svar.",
    },
    {
      question: "En fallskjermhopper har masse $85{,}0\\,\\text{kg}$, tverrsnittsareal $25{,}000\\,\\text{m}^2$ og motstandskoeffisient $1{,}40$. Luftens tetthet er $1{,}20\\,\\text{kg/m}^3$. Hvor stor er terminalfarten?",
      options: ["$6{,}30\\,\\text{m/s}$", "$4{,}46\\,\\text{m/s}$", "$39{,}7\\,\\text{m/s}$", "$3{,}15\\,\\text{m/s}$"],
      explanation: "Ved terminalfart balanserer luftmotstanden tyngden: $\\tfrac12\\rho A C_d v_t^2 = mg$, altså $v_t = \\sqrt{2mg/(\\rho A C_d)}$. Alternativet uten faktoren 2 glemmer $\\tfrac12$ i luftmotstandsuttrykket. Alternativet uten kvadratrot har enheten $\\text{m}^2/\\text{s}^2$ og strykes av en enhetssjekk. Ett alternativ er halve riktig svar.",
    },
    {
      question: "Hvorfor kommer en kule som ruller ned en bakke, saktere ned enn en kloss som glir friksjonsfritt ned den samme bakken?",
      options: ["Fordi kula må bruke en del av energien fra fallet på å komme i spinn, slik at bare resten blir framdrift.", "Fordi friksjonen som får kula til å rulle, tar energi ut av systemet og gjør om en del av den til varme i kontaktpunktet.", "Fordi kula har større treghetsmoment enn klossen, og treghetsmomentet gjør massesenteret vanskeligere å akselerere framover.", "Fordi kula følger en litt lengre bane enn klossen når den ruller, og derfor bruker lengre tid på det samme høydefallet."],
      explanation: "Begge får den samme energien $mg\\Delta y$, men kula må fordele den på translasjon og rotasjon: $mg\\Delta y = \\tfrac12(1+c)mv^2$. For en kompakt kule tar rotasjonen $2/7$, og farten blir $\\sqrt{5/7} = 0{,}845$ ganger klossens. Alternativet om friksjon er nær sant i at friksjonen er nødvendig, men galt i at den tar energi: ved ren rulling er friksjonen statisk og gjør ikke arbeid. Klossen har ikke noe treghetsmoment i regnestykket, og banen er den samme for begge.",
    },
    {
      question: "En kule ruller uten å gli, og en identisk kule med dobbelt så stor radius ruller ned den samme bakken. Hvilken kommer først ned?",
      options: ["De kommer samtidig, fordi formfaktoren $c = I/(mR^2)$ er $2/5$ for enhver kompakt kule — radien forkortes bort.", "Den store, fordi den har større masse og dermed mer potensiell energi å omsette til fart nedover bakken.", "Den lille, fordi den har mindre treghetsmoment og derfor bruker mindre av energien på rotasjon underveis.", "Den store, fordi vinkelfarten $\\omega = v/R$ blir lavere, slik at rotasjonsenergien $\\tfrac12I\\omega^2$ blir mindre."],
      explanation: "Sluttfarten er $v = \\sqrt{2g\\Delta y/(1+c)}$, og $c = 2/5$ uansett radius og masse — $R^2$ i telleren forkortes mot $R^2$ i nevneren. Alternativet om større masse er nær sant i at den store kula har mer energi, men den har også mer masse å akselerere, og de to effektene opphever hverandre eksakt. Alternativet om lavere vinkelfart peker på noe riktig — $\\omega$ ER lavere — men $I$ er samtidig større med akkurat samme faktor.",
    },
    {
      question: "Kula ruller fordi det er friksjon mot underlaget. Hvorfor kan vi likevel bruke energibevaring?",
      options: ["Fordi friksjonen ved ren rulling er statisk og virker i et kontaktpunkt som står stille, slik at den ikke gjør arbeid.", "Fordi friksjonskraften er så liten ved rulling at arbeidet den gjør, kan regnes som null i alle praktiske sammenhenger.", "Fordi arbeidet friksjonen gjør på kula, er like stort som arbeidet den gjør på underlaget, slik at de to opphever hverandre.", "Fordi friksjonen virker vinkelrett på bevegelsesretningen til massesenteret og derfor ikke kan overføre energi."],
      explanation: "Ved ren rulling sklir ikke kontaktpunktet, så angrepspunktet for friksjonskraften flytter seg ikke i forhold til underlaget — og en kraft som virker i et punkt som ikke flytter seg, gjør ikke arbeid. Friksjonen formidler dreiemomentet, men tar ingen energi. Alternativet om at kraften er liten, er galt: den kan være stor, men arbeidet er null uansett. Friksjonen på kula ligger dessuten **langs** flaten, altså i massesenterets bevegelsesretning, ikke vinkelrett på den.",
    },
  ],
  'tfy4115-2-3': [
    {
      question: "En kasse glir **nedover** et lasteplan som heller $28{,}0^\\circ$. Den kinetiske friksjonskoeffisienten er $\\mu = 0{,}320$. Hvor stor er akselerasjonen?",
      options: ["$1{,}83\\,\\text{m/s}^2$", "$7{,}38\\,\\text{m/s}^2$", "$4{,}61\\,\\text{m/s}^2$", "$1{,}47\\,\\text{m/s}^2$"],
      explanation: "Nedover peker friksjonen oppover langs planet, så det blir minus: $a = g(\\sin\\theta - \\mu\\cos\\theta) = 9{,}81 \\cdot 0{,}186929\\,\\text{m/s}^2$. Det klart største alternativet er pluss-varianten, altså oppover-formelen brukt på en nedoverbevegelse — der bremser både tyngdekomponenten og friksjonen. Alternativet uten friksjonsledd er $g\\sin\\theta$, og det tetteste av dem alle kommer av å skrive $g(\\sin\\theta - \\mu)$, altså glemme $\\cos\\theta$ i friksjonsleddet.",
    },
    {
      question: "En kjelke sendes **oppover** en bakke med helning $18{,}0^\\circ$ og startfart $6{,}00\\,\\text{m/s}$. Friksjonskoeffisienten er $\\mu = 0{,}220$. Hvor langt kommer kjelken **langs bakken** før den snur?",
      options: ["$3{,}54\\,\\text{m}$", "$18{,}4\\,\\text{m}$", "$5{,}94\\,\\text{m}$", "$7{,}08\\,\\text{m}$"],
      explanation: "Oppover bremser både tyngdekomponenten og friksjonen, så $a = g(\\sin\\theta + \\mu\\cos\\theta) = 5{,}084\\,\\text{m/s}^2$, og $x = v_0^2/(2a)$. Det klart største alternativet er minus-varianten, altså nedover-formelen brukt oppover — her er utslaget over fem ganger, fordi $\\mu$ ligger nær $\\tan\\theta$. Alternativet uten friksjonsledd er den glatte snuavstanden, og ett alternativ kommer av å glemme faktoren 2 i nevneren.",
    },
    {
      question: "En pall glir **nedover** et skråplan med **konstant fart**. Planet heller $22{,}0^\\circ$. Hvor stor er den kinetiske friksjonskoeffisienten?",
      options: ["$0{,}404$", "$0{,}375$", "$0{,}927$", "$0{,}202$"],
      explanation: "Konstant fart betyr $a = 0$, altså at parentesen $\\sin\\theta - \\mu\\cos\\theta$ er null, og dermed $\\mu = \\tan\\theta$. Alternativet $0{,}375$ er $\\sin\\theta$ i stedet for $\\tan\\theta$ — bare sju prosent unna, og derfor det tetteste. Alternativet nær 1 er $\\cos\\theta$, altså brøken snudd, og det minste er $\\tan\\theta/2$.",
    },
    {
      question: "En kloss ligger i ro på et skråplan der den statiske friksjonskoeffisienten er $\\mu_s = 0{,}350$. Ved hvilken helning begynner klossen å gli?",
      options: ["$19{,}3^\\circ$", "$20{,}5^\\circ$", "$69{,}5^\\circ$", "$38{,}6^\\circ$"],
      explanation: "Glidebetingelsen er $\\tan\\theta > \\mu_s$, så grensen er $\\theta = \\arctan 0{,}350 = 19{,}29^\\circ$. Alternativet på $20{,}5^\\circ$ er $\\arcsin$ i stedet for $\\arctan$, og det er den vanligste feilen fordi de to funksjonene ligger tett for små vinkler. Alternativet på rundt $70^\\circ$ er $\\arccos$, og ett alternativ er den doble vinkelen.",
    },
    {
      question: "En kasse skal settes i bevegelse på et vannrett gulv. Er det lettest å dra den med en kraft som peker litt **oppover**, eller å skyve den med en like stor kraft som peker litt **nedover**?",
      options: ["Lettest å dra, fordi den oppadrettede komponenten reduserer normalkraften og dermed friksjonen.", "Lettest å skyve, fordi den nedadrettede komponenten gir bedre grep og dermed mer effektiv framdrift.", "Like lett, fordi det bare er den vannrette komponenten av kraften som kan sette kassen i bevegelse.", "Lettest å dra, men bare hvis kassen er tung nok til at tyngden dominerer over kraftens loddrette del."],
      explanation: "Normalkraften er $N = mg - F\\sin\\varphi$ når kraften trekker oppover, og friksjonen $f = \\mu N$ blir tilsvarende mindre. Den vannrette komponenten er den samme i begge tilfellene, så det er friksjonen som avgjør. Alternativet om at det er like lett, er nær sant i at bare den vannrette komponenten driver bevegelsen framover — men det overser at den loddrette komponenten endrer motstanden. Alternativet som gjør svaret avhengig av massen, er nær sant i at både tyngden og kraftens loddrette komponent bidrar til $N$, men konklusjonen gjelder uansett masse: $F\\sin\\varphi$ trekkes fra på samme måte hver gang.",
    },
    {
      question: "En **massiv sylinder** slippes fra ro og ruller uten å gli ned en bane med høydeforskjell $1{,}60\\,\\text{m}$. Hvor stor er farten i bunnen?",
      options: ["$4{,}57\\,\\text{m/s}$", "$5{,}60\\,\\text{m/s}$", "$4{,}74\\,\\text{m/s}$", "$3{,}96\\,\\text{m/s}$"],
      explanation: "Med $c = I/(mR^2) = 1/2$ er $v = \\sqrt{2g\\,\\Delta y/(1+c)} = \\sqrt{31{,}392/1{,}500}\\,\\text{m/s}$. Det største alternativet er $\\sqrt{2g\\,\\Delta y}$, altså rotasjonsleddet glemt helt — fagets hyppigst innebygde felle. Alternativet på $4{,}74$ er kule-verdien $c = 2/5$, og det minste er tynn ring, $c = 1$.",
    },
    {
      question: "En **kompakt kule** ruller uten å gli fra ro ned et høydefall på $3{,}00\\,\\text{m}$. Hvor stor er farten i bunnen?",
      options: ["$6{,}48\\,\\text{m/s}$", "$7{,}67\\,\\text{m/s}$", "$6{,}26\\,\\text{m/s}$", "$5{,}94\\,\\text{m/s}$"],
      explanation: "Kompakt kule har $c = 2/5$, altså $v = \\sqrt{58{,}86/1{,}400}\\,\\text{m/s}$. Det største alternativet er farten uten rotasjonsledd, som alltid ligger $\\sqrt{1{,}4} = 1{,}183$ ganger for høyt for en kule. To av alternativene er sylinder-verdien $c = 1/2$ og kuleskall-verdien $c = 2/3$ — begge riktig metode med feil formfaktor, og bare tre til åtte prosent unna.",
    },
    {
      question: "Et tynt **kuleskall** ruller uten å gli fra ro ned et høydefall på $2{,}00\\,\\text{m}$. Hvor stor er farten i bunnen?",
      options: ["$4{,}85\\,\\text{m/s}$", "$6{,}26\\,\\text{m/s}$", "$5{,}29\\,\\text{m/s}$", "$5{,}11\\,\\text{m/s}$"],
      explanation: "Kuleskall har $c = 2/3$, altså $v = \\sqrt{39{,}24/1{,}6667}\\,\\text{m/s}$. Det største alternativet er farten uten rotasjonsledd. De to i mellom er kule ($c = 2/5$) og massiv sylinder ($c = 1/2$) — et kuleskall har mer masse langt fra aksen enn begge, og må derfor komme lavest av de tre.",
    },
    {
      question: "Et hjul som kan regnes som en **tynn ring** ruller uten å gli fra ro ned et høydefall på $1{,}20\\,\\text{m}$. Hvor stor er farten i bunnen?",
      options: ["$3{,}43\\,\\text{m/s}$", "$4{,}85\\,\\text{m/s}$", "$4{,}10\\,\\text{m/s}$", "$3{,}96\\,\\text{m/s}$"],
      explanation: "En tynn ring har all masse i avstand $R$ fra aksen, altså $c = 1$, og energien deles likt mellom translasjon og rotasjon: $v = \\sqrt{23{,}544/2{,}000}\\,\\text{m/s}$. Det største alternativet er farten uten rotasjonsledd, som her ligger $\\sqrt{2} = 1{,}414$ ganger for høyt. To av alternativene er kule- og sylinder-verdiene, som begge gir for høy fart fordi de undervurderer hvor mye masse som sitter ytterst.",
    },
    {
      question: "En **massiv sylinder** ruller uten å gli oppover et skråplan med startfarten $5{,}00\\,\\text{m/s}$. Hvilken loddrett høyde kommer den opp i?",
      options: ["$1{,}91\\,\\text{m}$", "$1{,}27\\,\\text{m}$", "$1{,}78\\,\\text{m}$", "$2{,}12\\,\\text{m}$"],
      explanation: "Energibevaring gir $\\Delta y = (1+c)v_0^2/(2g)$ med $c = 1/2$. Det minste alternativet er $v_0^2/(2g)$, altså rotasjonsleddet glemt — merk at fella her gir for LITEN høyde, mens den gir for STOR fart når legemet går nedover. Rotasjonsenergien er også energi som kan løfte legemet. To av alternativene er kule- og kuleskall-verdiene.",
    },
    {
      question: "Hvor stor **prosentandel** av bevegelsesenergien til en massiv sylinder som ruller uten å gli, sitter i rotasjonen?",
      options: ["$33{,}3\\,\\%$", "$28{,}6\\,\\%$", "$40{,}0\\,\\%$", "$50{,}0\\,\\%$"],
      explanation: "Rotasjonsandelen er $c/(1+c)$, som for $c = 1/2$ gir en tredjedel. Andelen er uavhengig av masse, radius og fart — bare formen avgjør. Alternativet på $28{,}6\\,\\%$ er kule-verdien og det på $40{,}0\\,\\%$ er kuleskall-verdien. Alternativet på $50{,}0\\,\\%$ er dels ring-verdien, dels resultatet av å lese formfaktoren $c = 1/2$ direkte som en andel, og det er den vanligste feilen her.",
    },
    {
      question: "En kompakt kule ruller uten å gli fra ro ned et **rett** skråplan med helning $32{,}0^\\circ$. Hvor stor er akselerasjonen langs planet?",
      options: ["$3{,}71\\,\\text{m/s}^2$", "$5{,}20\\,\\text{m/s}^2$", "$3{,}47\\,\\text{m/s}^2$", "$3{,}12\\,\\text{m/s}^2$"],
      explanation: "For et legeme som ruller uten å gli, er $a = g\\sin\\theta/(1+c)$ — rotasjonen må også settes i gang, og det koster akselerasjon. Det største alternativet er $g\\sin\\theta$, altså rotasjonsleddet glemt. To av alternativene er sylinder- og kuleskall-verdiene. Merk at det ikke skal stå noe $\\mu$-ledd her: den statiske friksjonen gjør ikke arbeid, siden kontaktpunktet står stille.",
    },
    {
      question: "Hvor liten kan den statiske friksjonskoeffisienten være og fremdeles holde en kompakt kule i **ren rulling** ned et skråplan med helning $20{,}0^\\circ$?",
      options: ["$0{,}104$", "$0{,}364$", "$0{,}121$", "$0{,}182$"],
      explanation: "Kravet er $\\mu_s \\ge \\tan\\theta \\cdot c/(1+c)$, altså $0{,}36397 \\cdot 0{,}285714$ for en kule. Alternativet på $0{,}364$ er $\\tan\\theta$ alene, altså glidebetingelsen for en kloss brukt på et rullende legeme. Alternativet på $0{,}121$ er sylinder-verdien $c/(1+c) = 1/3$ — det tetteste, og bare 17 prosent unna. Ett alternativ er $\\tan\\theta/2$.",
    },
    {
      question: "En kloss glir fra ro ned en **glatt, buet** renne og faller $1{,}25\\,\\text{m}$. Deretter fortsetter den over et vannrett parti med friksjonskoeffisient $\\mu = 0{,}180$. Hvor langt glir klossen ut før den stopper?",
      options: ["$6{,}94\\,\\text{m}$", "$4{,}96\\,\\text{m}$", "$13{,}9\\,\\text{m}$", "$3{,}47\\,\\text{m}$"],
      explanation: "Rennen er buet, så konstant-akselerasjonsformlene er ubrukelige der — bruk energibevaring: $v^2 = 2g\\,\\Delta y = 24{,}525\\,\\text{m}^2/\\text{s}^2$. Deretter er retardasjonen $\\mu g$, og $d = v^2/(2\\mu g) = \\Delta y/\\mu$, der både $g$ og massen faller ut. Alternativet på $4{,}96\\,\\text{m}$ kommer av å behandle klossen som en rullende kule og dele på $1{,}4$. To av alternativene er faktoren 2 glemt og faktoren 2 tatt med to ganger.",
    },
    {
      question: "Fem legemer med samme masse og samme radius slippes samtidig fra ro i toppen av samme bakke: en kloss som glir friksjonsfritt, en kompakt kule, en massiv sylinder, et tynt kuleskall og en tynn ring — de fire siste ruller uten å gli. Hvem kommer først ned?",
      options: ["Klossen, fordi den ikke har noen rotasjon å sette i gang og derfor får hele energien til framdrift.", "Kula, fordi den er kompakt og derfor har den minste motstanden mot å rulle av de fire som roterer i det hele tatt.", "Alle samtidig, fordi høydefallet er det samme og både masse og radius faller ut av regnskapet for alle fem.", "Ringen, fordi all massen ligger ytterst og gir den største dreieimpulsen og dermed den raskeste bevegelsen."],
      explanation: "Rekkefølgen styres av formfaktoren $c = I/(mR^2)$ gjennom $a = g\\sin\\theta/(1+c)$: klossen har $c = 0$ og vinner alltid, deretter kule, sylinder, kuleskall og ring. Alternativet om kula er nær sant — kula er raskest av de fire som ruller — men klossen er med i utvalget og slår alle. Alternativet om at alle kommer samtidig, bruker riktig at masse og radius faller ut, men overser at formen ikke gjør det.",
    },
    {
      question: "En oppgave lyder: «Et hjul ruller uten å gli nedover en bakke og videre opp den andre siden, som er like glatt. Hvor høyt kommer det?» Hva er svaret?",
      options: ["Nøyaktig samme høyde som det startet i, fordi faktoren $(1+c)$ står på samme side av energiregnskapet før og etter.", "Høyden delt på $(1+c)$, fordi bare translasjonsenergien kan gjøres om til høyde, mens rotasjonsenergien blir værende i hjulet.", "Høyden ganget med $(1+c)$, fordi hjulet på vei ned har fått rotasjonsenergi i tillegg til translasjonsenergien sin.", "Litt lavere enn starthøyden, fordi den statiske friksjonen som holder hjulet i ren rulling, gjør et lite negativt arbeid hele veien."],
      explanation: "Ren rulling taper ingen energi — kontaktpunktet står stille, så friksjonen gjør ikke arbeid — og hjulet ruller på begge sider, så $(1+c)$ opptrer på samme måte i begge endene av regnskapet og forkortes bort. Alternativet med $h/(1+c)$ er den vanligste feilen og kommer av å dele én gang for mye. Alternativet om friksjonens arbeid er nær sant i at friksjonen er nødvendig for rullingen, men et kontaktpunkt i ro flytter seg ikke, og en kraft som ikke flytter sitt angrepspunkt, gjør ikke arbeid.",
    },
  ],
  'tfy4115-3-1': [
    {
      question: "Et legeme med masse $0{,}400\\,\\text{kg}$ og fart $9{,}00\\,\\text{m/s}$ treffer et stillestående legeme med masse $1{,}10\\,\\text{kg}$, og de to blir sittende sammen. Hvor stor er den felles farten?",
      options: ["$2{,}40\\,\\text{m/s}$", "$4{,}65\\,\\text{m/s}$", "$6{,}60\\,\\text{m/s}$", "$4{,}80\\,\\text{m/s}$"],
      explanation: "Bevegelsesmengden er bevart: $mv_0 = (m+M)v'$, altså $v' = mv_0/(m+M)$. Alternativet som kommer av **energibevaring** gjennom støtet, er den farligste distraktoren — energien er ikke bevart når legemene blir sittende sammen. Ett alternativ snur massebrøken til $M/(m+M)$, og ett bruker $2m/(m+M)$, som er det ELASTISKE støtets svar for målklossen.",
    },
    {
      question: "Et legeme med masse $12{,}0\\,\\text{kg}$ og fart $3{,}00\\,\\text{m/s}$ treffer et stillestående legeme med masse $20{,}0\\,\\text{kg}$, og de to blir sittende sammen. Hvor stor er den felles farten?",
      options: ["$1{,}12\\,\\text{m/s}$", "$1{,}84\\,\\text{m/s}$", "$1{,}88\\,\\text{m/s}$", "$2{,}25\\,\\text{m/s}$"],
      explanation: "Bevegelsesmengden er bevart: $mv_0 = (m+M)v'$, altså $v' = mv_0/(m+M)$. Alternativet som kommer av **energibevaring** gjennom støtet, er den farligste distraktoren — energien er ikke bevart når legemene blir sittende sammen. Ett alternativ snur massebrøken til $M/(m+M)$, og ett bruker $2m/(m+M)$, som er det ELASTISKE støtets svar for målklossen.",
    },
    {
      question: "Et legeme med masse $0{,}900\\,\\text{kg}$ og fart $5{,}50\\,\\text{m/s}$ treffer et stillestående legeme med masse $2{,}70\\,\\text{kg}$, og de to blir sittende sammen. Hvor stor er den felles farten?",
      options: ["$1{,}38\\,\\text{m/s}$", "$2{,}75\\,\\text{m/s}$", "$4{,}12\\,\\text{m/s}$", "$5{,}50\\,\\text{m/s}$"],
      explanation: "Bevegelsesmengden er bevart: $mv_0 = (m+M)v'$, altså $v' = mv_0/(m+M)$. Alternativet som kommer av **energibevaring** gjennom støtet, er den farligste distraktoren — energien er ikke bevart når legemene blir sittende sammen. Ett alternativ snur massebrøken til $M/(m+M)$, og ett bruker $2m/(m+M)$, som er det ELASTISKE støtets svar for målklossen.",
    },
    {
      question: "Et legeme med masse $2{,}50\\,\\text{kg}$ og fart $8{,}00\\,\\text{m/s}$ treffer et stillestående legeme med masse $2{,}50\\,\\text{kg}$, og de to blir sittende sammen. Hvor stor er den felles farten?",
      options: ["$4{,}00\\,\\text{m/s}$", "$5{,}66\\,\\text{m/s}$", "$8{,}00\\,\\text{m/s}$", "$16{,}0\\,\\text{m/s}$"],
      explanation: "Bevegelsesmengden er bevart: $mv_0 = (m+M)v'$, altså $v' = mv_0/(m+M)$. Alternativet som kommer av **energibevaring** gjennom støtet, er den farligste distraktoren — energien er ikke bevart når legemene blir sittende sammen. Ett alternativ snur massebrøken til $M/(m+M)$, og ett bruker $2m/(m+M)$, som er det ELASTISKE støtets svar for målklossen.",
    },
    {
      question: "Et legeme med masse $0{,}0120\\,\\text{kg}$ og fart $320\\,\\text{m/s}$ treffer et stillestående legeme med masse $2{,}50\\,\\text{kg}$, og de to blir sittende sammen. Hvor stor er den felles farten?",
      options: ["$1{,}53\\,\\text{m/s}$", "$22{,}1\\,\\text{m/s}$", "$318\\,\\text{m/s}$", "$3{,}06\\,\\text{m/s}$"],
      explanation: "Bevegelsesmengden er bevart: $mv_0 = (m+M)v'$, altså $v' = mv_0/(m+M)$. Alternativet som kommer av **energibevaring** gjennom støtet, er den farligste distraktoren — energien er ikke bevart når legemene blir sittende sammen. Ett alternativ snur massebrøken til $M/(m+M)$, og ett bruker $2m/(m+M)$, som er det ELASTISKE støtets svar for målklossen.",
    },
    {
      question: "Et legeme med masse $0{,}400\\,\\text{kg}$ treffer et stillestående legeme med masse $1{,}10\\,\\text{kg}$ og blir sittende fast. Hvor stor prosentandel av den kinetiske energien går tapt?",
      options: ["$73{,}3\\,\\%$", "$26{,}7\\,\\%$", "$53{,}8\\,\\%$", "$36{,}4\\,\\%$"],
      explanation: "Andelen tapt energi er $M/(m+M)$ — den brøkdelen av totalmassen som sto stille. Den kan finnes uten å regne en eneste fart. Alternativet som er komplementet, er $m/(m+M)$, altså andelen som er IGJEN — de to forveksles ofte, og begge står gjerne i samme alternativliste. Ett alternativ kvadrerer massebrøken, og ett bruker forholdet mellom de to massene i stedet for forholdet til summen.",
    },
    {
      question: "Et legeme med masse $0{,}900\\,\\text{kg}$ treffer et stillestående legeme med masse $2{,}70\\,\\text{kg}$ og blir sittende fast. Hvor stor prosentandel av den kinetiske energien går tapt?",
      options: ["$75{,}0\\,\\%$", "$25{,}0\\,\\%$", "$56{,}2\\,\\%$", "$33{,}3\\,\\%$"],
      explanation: "Andelen tapt energi er $M/(m+M)$ — den brøkdelen av totalmassen som sto stille. Den kan finnes uten å regne en eneste fart. Alternativet som er komplementet, er $m/(m+M)$, altså andelen som er IGJEN — de to forveksles ofte, og begge står gjerne i samme alternativliste. Ett alternativ kvadrerer massebrøken, og ett bruker forholdet mellom de to massene i stedet for forholdet til summen.",
    },
    {
      question: "Et legeme med masse $12{,}0\\,\\text{kg}$ treffer et stillestående legeme med masse $20{,}0\\,\\text{kg}$ og blir sittende fast. Hvor stor prosentandel av den kinetiske energien går tapt?",
      options: ["$62{,}5\\,\\%$", "$37{,}5\\,\\%$", "$39{,}1\\,\\%$", "$60{,}0\\,\\%$"],
      explanation: "Andelen tapt energi er $M/(m+M)$ — den brøkdelen av totalmassen som sto stille. Den kan finnes uten å regne en eneste fart. Alternativet som er komplementet, er $m/(m+M)$, altså andelen som er IGJEN — de to forveksles ofte, og begge står gjerne i samme alternativliste. Ett alternativ kvadrerer massebrøken, og ett bruker forholdet mellom de to massene i stedet for forholdet til summen.",
    },
    {
      question: "Et legeme med masse $0{,}0250\\,\\text{kg}$ treffer et stillestående legeme med masse $1{,}20\\,\\text{kg}$ og blir sittende fast. Hvor stor prosentandel av den kinetiske energien går tapt?",
      options: ["$98{,}0\\,\\%$", "$2{,}04\\,\\%$", "$96{,}0\\,\\%$", "$2{,}08\\,\\%$"],
      explanation: "Andelen tapt energi er $M/(m+M)$ — den brøkdelen av totalmassen som sto stille. Den kan finnes uten å regne en eneste fart. Alternativet som er komplementet, er $m/(m+M)$, altså andelen som er IGJEN — de to forveksles ofte, og begge står gjerne i samme alternativliste. Ett alternativ kvadrerer massebrøken, og ett bruker forholdet mellom de to massene i stedet for forholdet til summen.",
    },
    {
      question: "Et legeme med masse $0{,}200\\,\\text{kg}$ og fart $6{,}00\\,\\text{m/s}$ treffer et stillestående legeme med masse $0{,}500\\,\\text{kg}$ i et **elastisk** støt. Hvor stor fart har det stillestående legemet etter støtet?",
      options: ["$3{,}43\\,\\text{m/s}$", "$1{,}71\\,\\text{m/s}$", "$8{,}57\\,\\text{m/s}$", "$2{,}40\\,\\text{m/s}$"],
      explanation: "For et elastisk støt mot et legeme i ro er målets fart $v_2' = 2m\\,v_0/(m+M)$. Faktoren 2 er grunnen til at et lett mål kan få opptil dobbel fart. Alternativet uten faktoren 2 er felles fart i et **uelastisk** støt. Ett alternativ bytter om massene i telleren, og ett bruker $m/M$ uten summen i nevneren.",
    },
    {
      question: "Et legeme med masse $0{,}150\\,\\text{kg}$ og fart $4{,}00\\,\\text{m/s}$ treffer et stillestående legeme med masse $0{,}450\\,\\text{kg}$ i et **elastisk** støt. Hvor stor fart har det stillestående legemet etter støtet?",
      options: ["$2{,}00\\,\\text{m/s}$", "$1{,}00\\,\\text{m/s}$", "$6{,}00\\,\\text{m/s}$", "$1{,}33\\,\\text{m/s}$"],
      explanation: "For et elastisk støt mot et legeme i ro er målets fart $v_2' = 2m\\,v_0/(m+M)$. Faktoren 2 er grunnen til at et lett mål kan få opptil dobbel fart. Alternativet uten faktoren 2 er felles fart i et **uelastisk** støt. Ett alternativ bytter om massene i telleren, og ett bruker $m/M$ uten summen i nevneren.",
    },
    {
      question: "Et legeme med masse $2{,}00\\,\\text{kg}$ og fart $4{,}00\\,\\text{m/s}$ treffer et stillestående legeme med masse $0{,}500\\,\\text{kg}$ i et **elastisk** støt. Hvor stor fart har det stillestående legemet etter støtet?",
      options: ["$6{,}40\\,\\text{m/s}$", "$3{,}20\\,\\text{m/s}$", "$1{,}60\\,\\text{m/s}$", "$16{,}0\\,\\text{m/s}$"],
      explanation: "For et elastisk støt mot et legeme i ro er målets fart $v_2' = 2m\\,v_0/(m+M)$. Faktoren 2 er grunnen til at et lett mål kan få opptil dobbel fart. Alternativet uten faktoren 2 er felles fart i et **uelastisk** støt. Ett alternativ bytter om massene i telleren, og ett bruker $m/M$ uten summen i nevneren.",
    },
    {
      question: "Et legeme med masse $0{,}300\\,\\text{kg}$ og fart $5{,}00\\,\\text{m/s}$ treffer et stillestående legeme med masse $0{,}300\\,\\text{kg}$ i et **elastisk** støt. Hvor stor fart har det stillestående legemet etter støtet?",
      options: ["$5{,}00\\,\\text{m/s}$", "$2{,}50\\,\\text{m/s}$", "$0\\,\\text{m/s}$", "$1{,}25\\,\\text{m/s}$"],
      explanation: "For et elastisk støt mot et legeme i ro er målets fart $v_2' = 2m\\,v_0/(m+M)$. Faktoren 2 er grunnen til at et lett mål kan få opptil dobbel fart. Alternativet uten faktoren 2 er felles fart i et **uelastisk** støt. Ett alternativ bytter om massene i telleren, og ett bruker $m/M$ uten summen i nevneren.",
    },
    {
      question: "En symmetrisk trekantpuls har toppkraft $240\\,\\text{N}$ og varighet $0{,}0200\\,\\text{s}$. Hvor stor impuls gir den?",
      options: ["$2{,}40\\,\\text{N}\\cdot\\text{s}$", "$4{,}80\\,\\text{N}\\cdot\\text{s}$", "$1{,}20\\,\\text{N}\\cdot\\text{s}$", "$0{,}0960\\,\\text{N}\\cdot\\text{s}$"],
      explanation: "Arealet under en trekant er $\\tfrac12F_\\text{maks}\\tau$, altså halvparten av rektangelet. Det dobbelt så store alternativet regner pulsen som et rektangel — den vanligste feilen i denne varianten. Ett alternativ halverer en gang for mye, og ett multipliserer med $\\tau$ to ganger — en feil en enhetssjekk avslører straks, siden $\\text{N}\\cdot\\text{s}^2$ ikke er en impuls.",
    },
    {
      question: "En symmetrisk trekantpuls har toppkraft $150\\,\\text{N}$ og varighet $0{,}0400\\,\\text{s}$. Hvor stor impuls gir den?",
      options: ["$3{,}00\\,\\text{N}\\cdot\\text{s}$", "$6{,}00\\,\\text{N}\\cdot\\text{s}$", "$1{,}50\\,\\text{N}\\cdot\\text{s}$", "$0{,}240\\,\\text{N}\\cdot\\text{s}$"],
      explanation: "Arealet under en trekant er $\\tfrac12F_\\text{maks}\\tau$, altså halvparten av rektangelet. Det dobbelt så store alternativet regner pulsen som et rektangel — den vanligste feilen i denne varianten. Ett alternativ halverer en gang for mye, og ett multipliserer med $\\tau$ to ganger — en feil en enhetssjekk avslører straks, siden $\\text{N}\\cdot\\text{s}^2$ ikke er en impuls.",
    },
    {
      question: "En symmetrisk trekantpuls har toppkraft $480\\,\\text{N}$ og varighet $0{,}0100\\,\\text{s}$. Hvor stor impuls gir den?",
      options: ["$2{,}40\\,\\text{N}\\cdot\\text{s}$", "$4{,}80\\,\\text{N}\\cdot\\text{s}$", "$1{,}20\\,\\text{N}\\cdot\\text{s}$", "$0{,}0480\\,\\text{N}\\cdot\\text{s}$"],
      explanation: "Arealet under en trekant er $\\tfrac12F_\\text{maks}\\tau$, altså halvparten av rektangelet. Det dobbelt så store alternativet regner pulsen som et rektangel — den vanligste feilen i denne varianten. Ett alternativ halverer en gang for mye, og ett multipliserer med $\\tau$ to ganger — en feil en enhetssjekk avslører straks, siden $\\text{N}\\cdot\\text{s}^2$ ikke er en impuls.",
    },
    {
      question: "Samme trekantpuls med toppkraft $240\\,\\text{N}$ og varighet $0{,}0200\\,\\text{s}$ virker på et legeme med masse $0{,}0580\\,\\text{kg}$ som ligger i ro. Hvor stor fart får legemet?",
      options: ["$41{,}4\\,\\text{m/s}$", "$82{,}8\\,\\text{m/s}$", "$0{,}139\\,\\text{m/s}$", "$4\\,140\\,\\text{m/s}$"],
      explanation: "Impulsen er $J = \\tfrac12F_\\text{maks}\\tau$, og $\\Delta v = J/m$ siden legemet startet i ro. Det dobbelt så store alternativet kommer av å regne trekantarealet som et rektangel. Ett alternativ multipliserer med massen i stedet for å dividere, og ett oppgir $F_\\text{maks}/m$, som er toppakselerasjonen i $\\text{m/s}^2$ — ikke en fart.",
    },
    {
      question: "Samme trekantpuls med toppkraft $150\\,\\text{N}$ og varighet $0{,}0400\\,\\text{s}$ virker på et legeme med masse $0{,}145\\,\\text{kg}$ som ligger i ro. Hvor stor fart får legemet?",
      options: ["$20{,}7\\,\\text{m/s}$", "$41{,}4\\,\\text{m/s}$", "$0{,}435\\,\\text{m/s}$", "$1\\,030\\,\\text{m/s}$"],
      explanation: "Impulsen er $J = \\tfrac12F_\\text{maks}\\tau$, og $\\Delta v = J/m$ siden legemet startet i ro. Det dobbelt så store alternativet kommer av å regne trekantarealet som et rektangel. Ett alternativ multipliserer med massen i stedet for å dividere, og ett oppgir $F_\\text{maks}/m$, som er toppakselerasjonen i $\\text{m/s}^2$ — ikke en fart.",
    },
    {
      question: "I en ballistisk pendel skytes en kule med masse $0{,}0120\\,\\text{kg}$ inn i en kloss med masse $2{,}50\\,\\text{kg}$ og blir sittende fast. Klossen svinger $0{,}119\\,\\text{m}$ opp. Hvor stor var kulas fart?",
      options: ["$320\\,\\text{m/s}$", "$318\\,\\text{m/s}$", "$1{,}53\\,\\text{m/s}$", "$22{,}1\\,\\text{m/s}$"],
      explanation: "Energibevaring gjennom svinget gir $v' = \\sqrt{2gh}$, og impulsbevarelse gjennom støtet gir $v_0 = \\frac{m+M}{m}v'$. Alternativet som bruker $M/m$ i stedet for $(m+M)/m$, ligger svært nær riktig svar når $m \\ll M$ og er den farligste distraktoren. Ett alternativ oppgir bare $v'$, altså farten rett etter støtet, og ett kommer av å bruke energibevaring gjennom støtet — som gir et svar som er størrelsesordener for lavt.",
    },
    {
      question: "I en ballistisk pendel skytes en kule med masse $0{,}0250\\,\\text{kg}$ inn i en kloss med masse $1{,}20\\,\\text{kg}$ og blir sittende fast. Klossen svinger $0{,}688\\,\\text{m}$ opp. Hvor stor var kulas fart?",
      options: ["$180\\,\\text{m/s}$", "$176\\,\\text{m/s}$", "$3{,}67\\,\\text{m/s}$", "$25{,}7\\,\\text{m/s}$"],
      explanation: "Energibevaring gjennom svinget gir $v' = \\sqrt{2gh}$, og impulsbevarelse gjennom støtet gir $v_0 = \\frac{m+M}{m}v'$. Alternativet som bruker $M/m$ i stedet for $(m+M)/m$, ligger svært nær riktig svar når $m \\ll M$ og er den farligste distraktoren. Ett alternativ oppgir bare $v'$, altså farten rett etter støtet, og ett kommer av å bruke energibevaring gjennom støtet — som gir et svar som er størrelsesordener for lavt.",
    },
    {
      question: "I hvilke støt er bevegelsesmengden bevart?",
      options: ["I alle støt, uansett hvor mye kinetisk energi som går tapt, så lenge de ytre kreftene gir en ubetydelig impuls i den korte tiden støtet varer.", "Bare i elastiske støt, siden det er de eneste der ingen energi går tapt til deformasjon og varme i de to legemene.", "Bare i støt der de to legemene har like stor masse, slik at kreftene de utøver på hverandre gir like store fartsendringer.", "I alle støt der de to legemene beveger seg i samme retning før støtet, slik at den totale bevegelsesmengden ikke er null."],
      explanation: "Kreftene mellom legemene er like store og motsatt rettede (Newtons 3. lov) og virker like lenge, så impulsene opphever hverandre og summen av bevegelsesmengdene endres ikke. Det gjelder uansett energitap. Alternativet om elastiske støt forveksler de to bevaringslovene — det er energien som bare er bevart i de elastiske. Massene og retningene spiller ingen rolle for impulsbevarelsen.",
    },
    {
      question: "Hvorfor kan du ikke bruke energibevaring gjennom støtet i en ballistisk pendel?",
      options: ["Fordi kula borer seg inn i klossen, slik at en stor del av den kinetiske energien blir varme og permanent deformasjon.", "Fordi snordraget gjør negativt arbeid på systemet i det øyeblikket kula treffer, og tar dermed energi ut av bevegelsen.", "Fordi tyngden virker på både kula og klossen gjennom støtet, og potensiell energi derfor må inkluderes i regnskapet.", "Fordi bevegelsesmengden er bevart, og de to bevaringslovene ikke kan gjelde samtidig for det samme systemet."],
      explanation: "Støtet er fullstendig uelastisk: legemene henger sammen etterpå, og energien som gikk til å bore hullet, er borte fra det mekaniske regnskapet. Derfor bruker vi bevegelsesmengde gjennom støtet og energi gjennom svinget. Snordraget står vinkelrett på bevegelsen og gjør ikke arbeid; tyngdens bidrag over noen millisekunder er ubetydelig. Og de to lovene kan godt gjelde samtidig — i et elastisk støt gjør de nettopp det.",
    },
    {
      question: "To legemer får det samme kraftstøtet $F\\Delta t$, men har ulik masse. Hva har de til felles etterpå?",
      options: ["Den samme endringen i bevegelsesmengde — men det lette legemet har fått mer kinetisk energi enn det tunge.", "Den samme endringen i kinetisk energi — men det lette legemet har fått mer bevegelsesmengde enn det tunge.", "Den samme farten, siden kraftstøtet bestemmer fartsendringen direkte uavhengig av hvor tungt legemet er.", "Den samme akselerasjonen gjennom hele kraftstøtet, siden kraften og tiden er de samme for begge."],
      explanation: "$\\Delta p = F\\Delta t$ er den samme, så $\\Delta v \\propto 1/m$ og $\\Delta K = p^2/(2m) \\propto 1/m$ — det lette legemet får mest energi. Alternativet om samme energiendring gjelder når legemene får det samme **arbeidet** $F\\Delta x$, ikke det samme kraftstøtet; det er den forvekslingen eksamen tester. Farten og akselerasjonen kan ikke være like, siden massene er ulike.",
    },
    {
      question: "En kule treffer en stillestående kule med tre ganger større masse i et elastisk støt. Hva skjer med den innkommende kula?",
      options: ["Den spretter tilbake, siden $v_1' = (m-M)v_0/(m+M)$ blir negativ når $m < M$.", "Den stopper helt, siden all bevegelsesmengden overføres til den tyngre kula i et elastisk støt mot et legeme i ro.", "Den fortsetter framover med redusert fart, siden en kule ikke kan snu uten at en ytre kraft virker på den.", "Den fortsetter framover med uendret fart, siden energien er bevart og den tyngre kula bare får bevegelsesmengde, ikke energi."],
      explanation: "Telleren $m - M$ er negativ når målet er tyngst, og fortegnet betyr retning: kula spretter tilbake med $\\lvert v_1'\\rvert = v_0/2$ når $M = 3m$. Alternativet om at den stopper helt, gjelder bare når massene er **like** store — det er biljardspillerens grunnstøt. De to siste bryter mot bevaringslovene: uten sprett kan ikke begge regnskapene stemme samtidig, og støtkraften ER en ytre kraft på kula.",
    },
  ],
  'tfy4115-3-2': [
    {
      question: "En satellitt går i sirkelbane med baneradius $r = 7{,}00\\cdot10^{6}\\,\\text{m}$ rundt jorda ($GM = 3{,}986\\cdot10^{14}\\,\\text{m}^3/\\text{s}^2$). Hvor stor er banefarten?",
      options: ["$7\\,546\\,\\text{m/s}$", "$10\\,670\\,\\text{m/s}$", "$8\\,287\\,\\text{m/s}$", "$5\\,336\\,\\text{m/s}$"],
      explanation: "Banebetingelsen $GMm/r^2 = mv^2/r$ gir $v = \\sqrt{GM/r} = 7\\,546\\,\\text{m/s}$. Alternativet på $10\\,670\\,\\text{m/s}$ er unnslipningsfarten $\\sqrt{2GM/r}$, altså $\\sqrt{2}$ ganger for stort — det er farten som kreves for å komme løs fra jorda, ikke for å gå i bane. Alternativet på $8\\,287\\,\\text{m/s}$ er regnet som $\\sqrt{gr}$ med tyngdeakselerasjonen ved bakken, som ikke gjelder i denne høyden, og $5\\,336\\,\\text{m/s}$ har en faktor 2 for mye i nevneren.",
    },
    {
      question: "En romstasjon går i sirkelbane $400\\,\\text{km}$ over jordoverflaten. Jordradien er $6{,}371\\cdot10^{6}\\,\\text{m}$. Hvor stor er banefarten?",
      options: ["$7\\,672\\,\\text{m/s}$", "$31\\,570\\,\\text{m/s}$", "$10\\,850\\,\\text{m/s}$", "$7\\,455\\,\\text{m/s}$"],
      explanation: "Baneradien måles fra jordas sentrum, så $r = 6{,}371\\cdot10^{6} + 4{,}00\\cdot10^{5} = 6{,}771\\cdot10^{6}\\,\\text{m}$, og $v = \\sqrt{GM/r} = 7\\,672\\,\\text{m/s}$. Alternativet på $31\\,570\\,\\text{m/s}$ kommer av å bruke høyden $4{,}00\\cdot10^{5}\\,\\text{m}$ som baneradius, altså å glemme jordradien helt. Alternativet på $10\\,850\\,\\text{m/s}$ er unnslipningsfarten i samme høyde, og $7\\,455\\,\\text{m/s}$ er banefarten i dobbelt så stor høyde — den er lavere, siden farten avtar utover.",
    },
    {
      question: "En satellitt går i sirkelbane med baneradius $1{,}00\\cdot10^{7}\\,\\text{m}$. Hvor lang er omløpstiden, oppgitt i minutter?",
      options: ["$165{,}9\\,\\text{min}$", "$2{,}765\\,\\text{min}$", "$82{,}94\\,\\text{min}$", "$26{,}40\\,\\text{min}$"],
      explanation: "Omløpstiden er $T = 2\\pi\\sqrt{r^3/GM} = 9\\,952\\,\\text{s}$, altså $165{,}9\\,\\text{min}$. Alternativet $2{,}765$ er den samme riktige tiden oppgitt i timer og lest av som minutter — en ren enhetsfeil. Alternativet $82{,}94$ er halvparten, altså faktoren $2\\pi$ erstattet med $\\pi$, og $26{,}40$ mangler faktoren $2\\pi$ helt.",
    },
    {
      question: "En satellitt skal stå stille sett fra bakken, altså ha omløpstid ett døgn. Hvor stor blir baneradien, målt fra jordas sentrum?",
      options: ["$42\\,240\\,\\text{km}$", "$35\\,870\\,\\text{km}$", "$143\\,800\\,\\text{km}$", "$26\\,610\\,\\text{km}$"],
      explanation: "Med $T = 86\\,400\\,\\text{s}$ gir $r = (GMT^2/4\\pi^2)^{1/3} = 42\\,240\\,\\text{km}$. Alternativet $35\\,870\\,\\text{km}$ er høyden over bakken, altså riktig regnet men svar på et annet spørsmål — differansen mellom de to er nøyaktig én jordradius. Alternativet $143\\,800\\,\\text{km}$ kommer av å glemme faktoren $4\\pi^2$ i nevneren, som gjør radien $3{,}4$ ganger for stor, og $26\\,610\\,\\text{km}$ er regnet med et halvt døgn.",
    },
    {
      question: "Hvor høyt over jordoverflaten går en geostasjonær satellitt? (Jordradien er $6\\,371\\,\\text{km}$.)",
      options: ["$35\\,870\\,\\text{km}$", "$42\\,240\\,\\text{km}$", "$20\\,240\\,\\text{km}$", "$29\\,500\\,\\text{km}$"],
      explanation: "Baneradien er $42\\,240\\,\\text{km}$, og høyden over bakken er den minus jordradien: $35\\,870\\,\\text{km}$. Alternativet $42\\,240\\,\\text{km}$ er selve baneradien, som er den vanligste forvekslingen i sjangeren. Alternativet $20\\,240\\,\\text{km}$ er regnet med et halvt døgn som omløpstid, og $29\\,500\\,\\text{km}$ har jordradien trukket fra to ganger.",
    },
    {
      question: "Hvor stor er banefarten til en geostasjonær satellitt, som har baneradius $4{,}224\\cdot10^{7}\\,\\text{m}$ og omløpstid $86\\,400\\,\\text{s}$?",
      options: ["$3\\,072\\,\\text{m/s}$", "$7\\,672\\,\\text{m/s}$", "$6\\,144\\,\\text{m/s}$", "$4\\,344\\,\\text{m/s}$"],
      explanation: "Banefarten er $v = 2\\pi r/T = 3\\,072\\,\\text{m/s}$, og kontrollen $\\sqrt{GM/r}$ gir det samme. Alternativet $7\\,672\\,\\text{m/s}$ er farten i lav bane $400\\,\\text{km}$ opp — farten avtar utover, så en geostasjonær satellitt går langsommere enn en romstasjon. Alternativet $6\\,144\\,\\text{m/s}$ er regnet med et halvt døgn i nevneren, og $4\\,344\\,\\text{m/s}$ er unnslipningsfarten i samme avstand.",
    },
    {
      question: "En satellitt har omløpstid $6{,}00$ timer. Hvor stor er baneradien?",
      options: ["$16\\,760\\,\\text{km}$", "$10\\,390\\,\\text{km}$", "$42\\,240\\,\\text{km}$", "$57\\,080\\,\\text{km}$"],
      explanation: "Med $T = 21\\,600\\,\\text{s}$ gir $r = (GMT^2/4\\pi^2)^{1/3} = 16\\,760\\,\\text{km}$. Alternativet $10\\,390\\,\\text{km}$ er høyden over bakken. Alternativet $42\\,240\\,\\text{km}$ er den geostasjonære radien, altså regnet med ett døgn i stedet for seks timer, og $57\\,080\\,\\text{km}$ mangler faktoren $4\\pi^2$ i nevneren.",
    },
    {
      question: "En satellitt flyttes til en ny sirkelbane der omløpstiden er dobbelt så lang. Med hvilken faktor endres baneradien?",
      options: ["$1{,}587$", "$2{,}000$", "$2{,}828$", "$1{,}260$"],
      explanation: "Keplers tredje lov gir $T^2 \\propto r^3$, altså $r \\propto T^{2/3}$, så en dobling av omløpstiden gir faktoren $2^{2/3} = 1{,}587$. Alternativet $2{,}000$ antar at radien er proporsjonal med omløpstiden, altså at banefarten er den samme i alle baner — men farten avtar utover. Alternativet $2{,}828$ er $2^{3/2}$, altså sammenhengen snudd (det er faktoren omløpstiden endres med når radien dobles), og $1{,}260$ er $2^{1/3}$, med eksponenten $2/3$ forvekslet med $1/3$.",
    },
    {
      question: "En satellitt med masse $1\\,200\\,\\text{kg}$ går i sirkelbane med baneradius $8{,}00\\cdot10^{6}\\,\\text{m}$. Hvor stor er den resulterende kraften inn mot jordas sentrum?",
      options: ["$7\\,473\\,\\text{N}$", "$11\\,770\\,\\text{N}$", "$14\\,950\\,\\text{N}$", "$2\\,316\\,\\text{N}$"],
      explanation: "Den eneste kraften er gravitasjonen, og den ER sentripetalkraften: $F = GMm/r^2 = 7\\,473\\,\\text{N}$. Her skal massen med, siden spørsmålet gjelder en kraft. Alternativet $11\\,770\\,\\text{N}$ er tyngden $mg$ ved bakken, som er for stor fordi gravitasjonen avtar utover. Alternativet $14\\,950\\,\\text{N}$ kommer av å bruke unnslipningsfarten i $mv^2/r$, og $2\\,316\\,\\text{N}$ av å legge jordradien til baneradien en gang for mye.",
    },
    {
      question: "Hvor stor er gravitasjonsakselerasjonen i en bane $400\\,\\text{km}$ over jordoverflaten?",
      options: ["$8{,}694\\,\\text{m/s}^2$", "$9{,}810\\,\\text{m/s}^2$", "$9{,}230\\,\\text{m/s}^2$", "$4{,}347\\,\\text{m/s}^2$"],
      explanation: "Akselerasjonen er $GM/r^2$ med $r = 6{,}771\\cdot10^{6}\\,\\text{m}$, altså $8{,}694\\,\\text{m/s}^2$ — nesten 89 prosent av verdien ved bakken. Alternativet $9{,}810\\,\\text{m/s}^2$ er verdien ved bakken, brukt som om høyden ikke betyr noe. Alternativet $9{,}230\\,\\text{m/s}^2$ lar akselerasjonen avta som $1/r$ i stedet for $1/r^2$, og $4{,}347\\,\\text{m/s}^2$ har en faktor 2 for mye i nevneren. At astronauter flyter, skyldes ikke at akselerasjonen er liten, men at de er i fritt fall.",
    },
    {
      question: "Hvor stor fart må et legeme ha ved jordoverflaten for å slippe helt løs fra jorda, uten videre framdrift?",
      options: ["$11\\,190\\,\\text{m/s}$", "$7\\,910\\,\\text{m/s}$", "$5\\,593\\,\\text{m/s}$", "$15\\,820\\,\\text{m/s}$"],
      explanation: "Unnslipningsfarten er $v = \\sqrt{2GM/R} = 11\\,190\\,\\text{m/s}$. Alternativet $7\\,910\\,\\text{m/s}$ er banefarten i samme avstand — den er en faktor $\\sqrt{2}$ mindre, siden en sirkelbane krever bare halvparten så stor kinetisk energi. Alternativet $5\\,593\\,\\text{m/s}$ har faktoren 2 flyttet til nevneren, og $15\\,820\\,\\text{m/s}$ er banefarten multiplisert med 2 i stedet for med $\\sqrt{2}$.",
    },
    {
      question: "En rakett med utstøtsfart $u = 2\\,800\\,\\text{m/s}$ brenner til startmassen er redusert til en tredjedel. Hvor stor blir fartsøkningen?",
      options: ["$3\\,076\\,\\text{m/s}$", "$8\\,400\\,\\text{m/s}$", "$5\\,600\\,\\text{m/s}$", "$1\\,336\\,\\text{m/s}$"],
      explanation: "Rakettligningen gir $\\Delta v = u\\ln(m_0/m) = 2\\,800 \\cdot \\ln 3 = 3\\,076\\,\\text{m/s}$. Alternativet $8\\,400\\,\\text{m/s}$ er masseforholdet multiplisert inn i stedet for logaritmen av det, altså antakelsen om at hver kilo drivstoff gir like mye fart. Alternativet $5\\,600\\,\\text{m/s}$ er en linearisering, $u(m_0/m - 1)$, og $1\\,336\\,\\text{m/s}$ bruker titallslogaritmen der den naturlige skal stå.",
    },
    {
      question: "En rakett har startmasse $5{,}00\\cdot10^{4}\\,\\text{kg}$ og utstøtsfart $2\\,800\\,\\text{m/s}$. Hvor stor er massen når farten har økt med $3\\,200\\,\\text{m/s}$?",
      options: ["$15\\,950\\,\\text{kg}$", "$156\\,800\\,\\text{kg}$", "$20\\,840\\,\\text{kg}$", "$28\\,240\\,\\text{kg}$"],
      explanation: "Sluttmassen er $m = m_0e^{-\\Delta v/u} = 5{,}00\\cdot10^{4} \\cdot e^{-1{,}143} = 15\\,950\\,\\text{kg}$. Alternativet $156\\,800\\,\\text{kg}$ har positiv eksponent og gir en rakett som er blitt tyngre av å brenne drivstoff — fysisk umulig, og kontrollen $m < m_0$ stryker den straks. Alternativet $20\\,840\\,\\text{kg}$ har eksponenten snudd til $-u/\\Delta v$, og $28\\,240\\,\\text{kg}$ har halv eksponent.",
    },
    {
      question: "En rakettmotor har utstøtsfart $3\\,000\\,\\text{m/s}$ og forbrenner $220\\,\\text{kg}$ drivstoff per sekund. Hvor stor er skyvekraften?",
      options: ["$660\\,000\\,\\text{N}$", "$67\\,280\\,\\text{N}$", "$2\\,158\\,\\text{N}$", "$13{,}64\\,\\text{N}$"],
      explanation: "Skyvekraften er $F = u\\lvert dm/dt\\rvert = 3\\,000 \\cdot 220 = 660\\,000\\,\\text{N}$, og enhetskontrollen bekrefter formen: $\\text{(m/s)}\\cdot\\text{(kg/s)} = \\text{N}$. Alternativet $67\\,280\\,\\text{N}$ har delt på $g$ underveis, altså blandet inn en vekt der den ikke hører. Alternativet $2\\,158\\,\\text{N}$ er massestrømmen ganget med $g$, altså tyngden av ett sekunds drivstoff, og $13{,}64\\,\\text{N}$ er utstøtsfarten delt på massestrømmen.",
    },
    {
      question: "En astronaut flyter fritt inne i en romstasjon i sirkelbane $400\\,\\text{km}$ over jorda. Hva er den fysisk riktige forklaringen?",
      options: ["Både astronauten og stasjonen er i fritt fall langs banen med samme akselerasjon, så det virker ingen kontaktkraft mellom dem.", "Gravitasjonen er så svak i denne høyden at tyngdekraften på astronauten er neglisjerbar sammenlignet med ved bakken.", "Stasjonens dreining rundt jorda gir en utoverrettet kraft som nøyaktig oppveier gravitasjonen der astronauten er.", "Farten gjennom banen er så høy at astronauten holdes svevende av luften som strømmer forbi inne i modulen."],
      explanation: "I $400\\,\\text{km}$ høyde er gravitasjonsakselerasjonen $8{,}69\\,\\text{m/s}^2$, altså nesten 89 prosent av verdien ved bakken — gravitasjonen er slett ikke svak, og det stryker forklaringen om neglisjerbar tyngde. Astronauten flyter fordi hun og stasjonen faller med samme akselerasjon, slik at ingen flate presser på henne. Forklaringen om en utoverrettet kraft er nær sann i dagligtalen, men gal i fysikken: resultanten inn mot sentrum er gravitasjonen selv, og det finnes ingen kraft utover.",
    },
    {
      question: "To satellitter går i samme sirkelbane rundt jorda. Den ene har ti ganger så stor masse som den andre. Hva gjelder for banefartene?",
      options: ["De er like, fordi satellittens masse forkortes bort på begge sider av banebetingelsen.", "Den tunge går fortest, fordi gravitasjonskraften på den er ti ganger så stor som på den lette.", "Den lette går fortest, fordi den samme gravitasjonskraften gir den ti ganger så stor akselerasjon.", "Det avhenger av baneradien, siden massens betydning vokser med avstanden fra jordas sentrum."],
      explanation: "I $GMm/r^2 = mv^2/r$ står satellittmassen $m$ som faktor på begge sider og forkortes bort, så $v = \\sqrt{GM/r}$ er uavhengig av $m$. Alternativet om at den tunge går fortest, er nær sant i første ledd — kraften ER ti ganger større — men tregheten er også ti ganger større, og de to effektene opphever hverandre eksakt. Det er samme grunn som at to steiner av ulik masse faller like fort. Alternativet om at massens betydning vokser med avstanden, blander inn en avhengighet som ikke finnes.",
    },
    {
      question: "Tre satellitter går i sirkelbaner med baneradier $7\\cdot10^{6}$, $2\\cdot10^{7}$ og $4\\cdot10^{7}\\,\\text{m}$. Hvordan er banefart og omløpstid rangert?",
      options: ["Banefarten avtar utover og omløpstiden øker utover, siden farten går som $1/\\sqrt{r}$ og tiden som $r^{3/2}$.", "Både banefarten og omløpstiden øker utover, siden en større bane både er lengre og krever høyere fart.", "Banefarten øker utover mens omløpstiden avtar, siden gravitasjonen er svakere og satellitten møter mindre motstand.", "Banefarten er den samme i alle tre banene, og bare omløpstiden øker, siden omkretsen vokser med radien."],
      explanation: "Banebetingelsen gir $v = \\sqrt{GM/r}$, altså lavere fart lenger ute, og $T = 2\\pi\\sqrt{r^3/GM}$, altså lengre omløpstid: fartene er $7\\,546$, $4\\,464$ og $3\\,157\\,\\text{m/s}$. Alternativet om at begge øker, er nær sant i at banen er lengre, men det overser at farten samtidig faller. Alternativet om lik fart i alle baner er den samme feilen renset for fart, og ville krevd at gravitasjonen var like sterk overalt.",
    },
    {
      question: "Du skal finne baneradien til en satellitt der omløpstiden er oppgitt i timer. Hva er den dyreste enkeltfeilen i regnekjeden?",
      options: ["Å sette omløpstiden inn i timer i stedet for sekunder, som gjør baneradien flere hundre ganger for liten.", "Å runde $4\\pi^2$ av til $39{,}5$ underveis, siden kubikkroten forsterker små avrundingsfeil kraftig.", "Å bruke jordas masse i stedet for produktet $GM$, siden gravitasjonskonstanten da mangler i telleren.", "Å regne banefarten før baneradien, siden farten ikke kan bestemmes før radien er kjent."],
      explanation: "Radien går som $T^{2/3}$, så omløpstiden i timer gir en faktor $3\\,600^{2/3} = 235$ for lite — geostasjonær bane blir $180\\,\\text{km}$ i stedet for $42\\,200\\,\\text{km}$. Alternativet om avrunding er nær sant i formen, men galt i retningen: kubikkroten DEMPER relative feil til en tredjedel, så $39{,}5$ er rikelig presist. Å glemme $G$ er en reell feil, men den avslører seg straks på enheten, og banefarten kan faktisk regnes fra omløpstiden alene om man vil.",
    },
  ],
  'tfy4115-3-3': [
    {
      question: "Et støt der de to legemene blir sittende fast i hverandre. Hvilke størrelser er bevart?",
      options: ["Bevegelsesmengden er bevart, men den kinetiske energien er det ikke", "Både bevegelsesmengden og den kinetiske energien er bevart", "Den kinetiske energien er bevart, men bevegelsesmengden er det ikke", "Verken bevegelsesmengden eller den kinetiske energien er bevart"],
      explanation: "«Blir sittende fast» betyr fullstendig uelastisk støt: bevegelsesmengden er bevart fordi ingen ytre kraft rekker å virke i støtøyeblikket, mens en del av den kinetiske energien går til deformasjon og varme. Alternativet der begge er bevart, beskriver et elastisk støt. Alternativet der energien er bevart og bevegelsesmengden ikke, snur saken på hodet — bevegelsesmengden er den robuste av de to og er bevart i alle støt.",
    },
    {
      question: "En vogn på $0{,}600\\,\\text{kg}$ ruller med $2{,}50\\,\\text{m/s}$ mot en vogn på $0{,}900\\,\\text{kg}$ i ro. De kobles sammen i støtet. Hvor stor er felles fart etterpå?",
      options: ["$1{,}00\\,\\text{m/s}$", "$1{,}67\\,\\text{m/s}$", "$2{,}00\\,\\text{m/s}$", "$1{,}58\\,\\text{m/s}$"],
      explanation: "Bevegelsesmengden $mv_0 = 1{,}50\\,\\text{kg}\\cdot\\text{m/s}$ fordeles på hele massen $1{,}50\\,\\text{kg}$, altså $v' = mv_0/(m+M) = 1{,}00\\,\\text{m/s}$. Alternativet som deler på $M$ alene, glemmer at også den første vognen er i bevegelse etterpå. Det største alternativet er den elastiske fartsformelen $2m/(m+M)\\cdot v_0$, som ikke gjelder når vognene kobles sammen, og ett alternativ er energibevaring brukt i et uelastisk støt — den gir alltid for høy fart.",
    },
    {
      question: "Vognene fra forrige spørsmål ($0{,}600\\,\\text{kg}$ med $2{,}50\\,\\text{m/s}$ mot $0{,}900\\,\\text{kg}$ i ro, koblet sammen): hvor mye kinetisk energi går tapt i støtet?",
      options: ["$1{,}125\\,\\text{J}$", "$0{,}7500\\,\\text{J}$", "$1{,}875\\,\\text{J}$", "$2{,}625\\,\\text{J}$"],
      explanation: "Tapet er differansen $K_0 - K' = 1{,}875 - 0{,}7500\\,\\text{J} = 1{,}125\\,\\text{J}$. Alternativet $0{,}7500\\,\\text{J}$ er energien som er igjen etter støtet, og $1{,}875\\,\\text{J}$ er energien før støtet — begge er riktige tall på gale spørsmål. Det største alternativet er summen av de to i stedet for differansen.",
    },
    {
      question: "En kule med masse $m$ og fart $v_0$ blir sittende fast i et legeme med masse $M$ som er i ro. Hvor stor andel av den kinetiske energien går tapt?",
      options: ["$M/(m+M)$", "$m/(m+M)$", "$m/M$", "$\\tfrac12\\,mM/(m+M)$"],
      explanation: "Tapet er $\\Delta K = \\tfrac12\\frac{mM}{m+M}v_0^2$, og delt på $K_0 = \\tfrac12 mv_0^2$ blir andelen $M/(m+M)$ — uavhengig av farten. Uttrykket $m/(m+M)$ er andelen som er igjen som bevegelse. Uttrykket $m/M$ er ikke begrenset til å ligge under 1 og kan derfor ikke være en andel i det hele tatt. Uttrykket med en halv og et masseprodukt er selve energitapet per kvadrert fart, ikke en andel.",
    },
    {
      question: "En kule på $0{,}200\\,\\text{kg}$ med farten $5{,}00\\,\\text{m/s}$ treffer elastisk en kule på $0{,}500\\,\\text{kg}$ i ro. Hvor stor er farten til den første kula etterpå, med fortegn i forhold til den opprinnelige retningen?",
      options: ["$-2{,}14\\,\\text{m/s}$", "$2{,}14\\,\\text{m/s}$", "$2{,}86\\,\\text{m/s}$", "$1{,}43\\,\\text{m/s}$"],
      explanation: "Fartsformelen er $v_1' = \\frac{m-M}{m+M}v_0$, og siden kula er lettere enn den den treffer, blir svaret negativt: kula spretter tilbake. Det positive alternativet med samme tallverdi er nettopp fortegnsfeilen, altså $(M-m)/(M+m)$ i stedet. Alternativet $2{,}86\\,\\text{m/s}$ er farten til den andre kula, og $1{,}43\\,\\text{m/s}$ er felles fart som om støtet hadde vært uelastisk.",
    },
    {
      question: "Samme elastiske støt: kule på $0{,}200\\,\\text{kg}$ med $5{,}00\\,\\text{m/s}$ mot $0{,}500\\,\\text{kg}$ i ro. Hvor stor fart får den kula som lå i ro?",
      options: ["$2{,}86\\,\\text{m/s}$", "$2{,}14\\,\\text{m/s}$", "$5{,}00\\,\\text{m/s}$", "$1{,}43\\,\\text{m/s}$"],
      explanation: "Her gjelder $v_2' = \\frac{2m}{m+M}v_0 = 2{,}86\\,\\text{m/s}$. Alternativet $2{,}14\\,\\text{m/s}$ er tallverdien til den første kulas fart etter støtet, altså riktig regning på feil kule. Alternativet $5{,}00\\,\\text{m/s}$ er startfarten, som bare ville blitt overført i sin helhet dersom massene var like. Det minste alternativet er felles fart i et uelastisk støt.",
    },
    {
      question: "Hva kjennetegner et elastisk støt mellom to legemer som beveger seg langs samme linje?",
      options: ["Både bevegelsesmengden og den kinetiske energien er bevart, og den relative farten mellom legemene beholder tallverdien", "Bevegelsesmengden er bevart, og begge legemene har samme fart etter støtet som de hadde før", "Den kinetiske energien er bevart, og legemene beveger seg videre med felles fart etter støtet", "Bevegelsesmengden er bevart, og hele den kinetiske energien overføres til legemet som lå i ro"],
      explanation: "Et elastisk støt er definert ved at ingen kinetisk energi går tapt, og en konsekvens er at den relative farten snur men beholder tallverdien — det er den raskeste kontrollen du har. Alternativet om uendrede farter beskriver at ingenting skjedde. Alternativet med felles fart beskriver et fullstendig uelastisk støt, og full energioverføring skjer bare i spesialtilfellet der massene er like.",
    },
    {
      question: "En trekantformet kraftpuls har toppverdi $180\\,\\text{N}$ og total varighet $0{,}0250\\,\\text{s}$. Hvor stor er impulsen?",
      options: ["$2{,}25\\,\\text{N}\\cdot\\text{s}$", "$4{,}50\\,\\text{N}\\cdot\\text{s}$", "$1{,}12\\,\\text{N}\\cdot\\text{s}$", "$90{,}0\\,\\text{N}\\cdot\\text{s}$"],
      explanation: "Impulsen er arealet under $F(t)$, og for en trekant er arealet halve grunnlinjen ganger høyden: $\\tfrac12 \\cdot 180 \\cdot 0{,}0250\\,\\text{N}\\cdot\\text{s} = 2{,}25\\,\\text{N}\\cdot\\text{s}$. Alternativet som er dobbelt så stort, regner arealet som hele rektangelet. Alternativet på det halve bruker tiden til toppunktet i stedet for pulsens varighet, og det største alternativet er middelkraften i newton, ikke impulsen.",
    },
    {
      question: "En ball på $0{,}250\\,\\text{kg}$ treffer gulvet med $9{,}00\\,\\text{m/s}$ nedover og forlater det med $4{,}00\\,\\text{m/s}$ oppover. Kontakten varer $0{,}0250\\,\\text{s}$. Hvor stor er middelkraften på ballen fra sammenstøtet?",
      options: ["$130\\,\\text{N}$", "$50{,}0\\,\\text{N}$", "$90{,}0\\,\\text{N}$", "$40{,}0\\,\\text{N}$"],
      explanation: "Fartsretningen snudde, så fartsendringen er en sum i tallverdi: $\\Delta v = 9{,}00 + 4{,}00 = 13{,}0\\,\\text{m/s}$, og $\\bar F = m\\,\\Delta v/\\tau$. Alternativet $50{,}0\\,\\text{N}$ bruker differansen $9{,}00 - 4{,}00$ og er den vanligste fortegnsfeilen i sjangeren. To av alternativene bruker bare farten inn eller bare farten ut, altså halve regnskapet.",
    },
    {
      question: "En kule på $0{,}0250\\,\\text{kg}$ med farten $260\\,\\text{m/s}$ blir sittende fast i en kloss på $1{,}80\\,\\text{kg}$ som henger i en snor. Hvor høyt svinger klossen med kula?",
      options: ["$0{,}647\\,\\text{m}$", "$0{,}665\\,\\text{m}$", "$1{,}29\\,\\text{m}$", "$2{,}59\\,\\text{m}$"],
      explanation: "To faser: bevegelsesmengden gir $v' = mv_0/(m+M) = 3{,}56\\,\\text{m/s}$, og deretter gir energibevaring $h = v'^2/(2g) = 0{,}647\\,\\text{m}$. Alternativet $0{,}665\\,\\text{m}$ kommer av å dele på $M$ alene i felles-fart-leddet. Alternativet $1{,}29\\,\\text{m}$ glemmer faktoren 2 i høydeformelen, og det største alternativet kommer av å bruke den elastiske fartsformelen på et støt der kula blir sittende fast.",
    },
    {
      question: "En kloss på $2{,}40\\,\\text{kg}$ henger i en snor med lengde $1{,}50\\,\\text{m}$. En kule på $0{,}120\\,\\text{kg}$ blir sittende fast i klossen, og den svinger ut til $18{,}0^\\circ$ fra loddlinjen. Hvor stor var kulas fart før støtet?",
      options: ["$25{,}2\\,\\text{m/s}$", "$24{,}0\\,\\text{m/s}$", "$17{,}8\\,\\text{m/s}$", "$5{,}50\\,\\text{m/s}$"],
      explanation: "Regn baklengs: $h = L(1-\\cos\\alpha) = 0{,}0734\\,\\text{m}$ gir pendelfarten $v' = \\sqrt{2gh} = 1{,}20\\,\\text{m/s}$, og bevegelsesmengden gir $v_0 = \\frac{m+M}{m}v'$. Alternativet $24{,}0\\,\\text{m/s}$ bruker $M/m$ i stedet for $(m+M)/m$. Alternativet $17{,}8\\,\\text{m/s}$ glemmer faktoren 2 under rottegnet, og det minste alternativet bruker energibevaring gjennom støtet, som feilaktig later som at kulas energi er intakt etterpå.",
    },
    {
      question: "En satellitt går i sirkelbane $500\\,\\text{km}$ over jordoverflaten. Med $GM = 3{,}986\\cdot10^{14}\\,\\text{m}^3/\\text{s}^2$ og $R_\\text{jord} = 6\\,371\\,\\text{km}$: hvor stor er banefarten?",
      options: ["$7{,}62\\,\\text{km/s}$", "$10{,}8\\,\\text{km/s}$", "$28{,}2\\,\\text{km/s}$", "$0{,}500\\,\\text{km/s}$"],
      explanation: "Baneradien er jordradien pluss høyden, $6{,}871\\cdot10^6\\,\\text{m}$, og $v = \\sqrt{GM/r} = 7{,}62\\,\\text{km/s}$. Alternativet $10{,}8\\,\\text{km/s}$ er unnslipningsfarten fra den høyden, altså en faktor $\\sqrt2$ for mye. Alternativet $28{,}2\\,\\text{km/s}$ bruker høyden alene som baneradius og glemmer jordradien, og det minste alternativet antar at satellitten bruker ett døgn på runden.",
    },
    {
      question: "En satellitt skal ha omløpstid $24{,}0$ timer. Hvor høyt over jordoverflaten ligger banen? Bruk $GM = 3{,}986\\cdot10^{14}\\,\\text{m}^3/\\text{s}^2$ og $R_\\text{jord} = 6\\,371\\,\\text{km}$.",
      options: ["$35\\,870\\,\\text{km}$", "$42\\,241\\,\\text{km}$", "$48\\,612\\,\\text{km}$", "$20\\,239\\,\\text{km}$"],
      explanation: "Baneradien blir $r = (GM\\,T^2/4\\pi^2)^{1/3} = 42\\,241\\,\\text{km}$, og høyden over bakken er $r$ minus jordradien. Alternativet $42\\,241\\,\\text{km}$ er baneradien selv, altså den siste subtraksjonen glemt. Alternativet $48\\,612\\,\\text{km}$ legger jordradien til i stedet for å trekke den fra, og alternativet $20\\,239\\,\\text{km}$ kommer av å regne med tolv timer i stedet for et døgn.",
    },
    {
      question: "En rakett har startmasse $4{,}00\\cdot10^4\\,\\text{kg}$ og støter ut drivstoff med farten $2\\,500\\,\\text{m/s}$ relativt til raketten. Hvor stor masse er igjen når farten har økt med $1\\,800\\,\\text{m/s}$?",
      options: ["$19\\,470\\,\\text{kg}$", "$20\\,530\\,\\text{kg}$", "$82\\,180\\,\\text{kg}$", "$11\\,200\\,\\text{kg}$"],
      explanation: "Rakettligningen $\\Delta v = u\\ln(m_0/m)$ gir $m = m_0e^{-\\Delta v/u} = 1{,}947\\cdot10^4\\,\\text{kg}$. Alternativet $2{,}053\\cdot10^4\\,\\text{kg}$ er drivstoffet som er brent, altså differansen i stedet for restmassen. Det største alternativet har pluss i eksponenten og gir mer masse etter brenningen enn før, noe som er fysisk umulig, og det minste bruker en lineær tilnærming i stedet for eksponentialfunksjonen.",
    },
    {
      question: "To satellitter går i sirkelbane rundt jorda. Den ene har dobbelt så stor baneradius som den andre. Hvor mye lengre er omløpstiden i den ytre banen?",
      options: ["$2^{3/2} = 2{,}83$ ganger så lang", "$2$ ganger så lang, siden baneradien er dobbelt så stor", "$4$ ganger så lang, siden omløpstiden går som baneradien i annen", "$\\sqrt{2} = 1{,}41$ ganger så lang"],
      explanation: "Kraftbalansen gir $T^2/r^3 = 4\\pi^2/GM$, altså $T \\propto r^{3/2}$, og en dobling av radien gir faktoren $2^{3/2} = 2{,}83$. Alternativet med faktor 2 antar at omløpstiden er proporsjonal med radien, som ville krevd samme banefart i begge baner — men den ytre satellitten går langsommere. Faktoren 4 svarer til $T \\propto r^2$ og $\\sqrt2$ til $T \\propto \\sqrt{r}$; ingen av dem følger av kraftbalansen.",
    },
    {
      question: "Du skal regne baneradien til en satellitt fra omløpstiden med $r = (GM\\,T^2/4\\pi^2)^{1/3}$, der $GM$ er oppgitt i $\\text{m}^3/\\text{s}^2$. Omløpstiden er gitt i timer. Hva må du gjøre, og hvordan ser du at du har glemt det?",
      options: ["Gjøre om omløpstiden til sekunder — glemmer du det, får du en baneradius som er mindre enn jordradien", "Gjøre om omløpstiden til minutter, siden formelen forutsetter minutter i telleren", "Ingenting, siden kubikkroten fjerner tidsenheten fra hele uttrykket", "Gjøre om $GM$ til kubikkilometer per time i annen, og beholde omløpstiden i timer"],
      explanation: "$GM$ er oppgitt med sekunder, så $T$ må inn i sekunder; ellers taper du faktoren $3\\,600^{2/3} = 235$, og en bane på seks timer kommer ut som 71 km fra jordas sentrum, altså dypt inne i jorda. Den kontrollen er nettopp poenget: enhver baneradius under $6\\,371\\,\\text{km}$ er umulig. Kubikkroten demper regnefeil, men ikke enhetsfeil, og det finnes ingen versjon av formelen som forutsetter minutter.",
    },
  ],
  'tfy4115-4-1': [
    {
      question: "To punktmasser sitter på en lett stang: $2{,}00\\,\\text{kg}$ i $x=0$ og $6{,}00\\,\\text{kg}$ i $x=0{,}800\\,\\text{m}$. Hvor ligger massesenteret?",
      options: ["$0{,}600\\,\\text{m}$", "$0{,}400\\,\\text{m}$", "$0{,}200\\,\\text{m}$", "$0{,}800\\,\\text{m}$"],
      explanation: "Massesenteret er det massevektede gjennomsnittet, $x_\\text{CM}=\\sum m_ix_i/\\sum m_i=0{,}600\\,\\text{m}$, og det ligger nærmest den tyngste massen. Alternativet midt mellom de to punktene er det uvektede gjennomsnittet, altså massene glemt. Alternativet som ligger på motsatt side av midten, kommer av å bytte om de to massene i telleren. Alternativet som er lik posisjonen til den andre massen, kommer av å dele på den ene massen i stedet for på totalmassen.",
    },
    {
      question: "To punktmasser sitter på en lett stang: $3{,}00\\,\\text{kg}$ i $x=0$ og $1{,}00\\,\\text{kg}$ i $x=1{,}200\\,\\text{m}$. Hvor ligger massesenteret?",
      options: ["$0{,}300\\,\\text{m}$", "$0{,}600\\,\\text{m}$", "$0{,}900\\,\\text{m}$", "$1{,}20\\,\\text{m}$"],
      explanation: "Massesenteret er det massevektede gjennomsnittet, $x_\\text{CM}=\\sum m_ix_i/\\sum m_i=0{,}300\\,\\text{m}$, og det ligger nærmest den tyngste massen. Alternativet midt mellom de to punktene er det uvektede gjennomsnittet, altså massene glemt. Alternativet som ligger på motsatt side av midten, kommer av å bytte om de to massene i telleren. Alternativet som er lik posisjonen til den andre massen, kommer av å dele på den ene massen i stedet for på totalmassen.",
    },
    {
      question: "To punktmasser sitter på en lett stang: $1{,}50\\,\\text{kg}$ i $x=0$ og $4{,}50\\,\\text{kg}$ i $x=0{,}400\\,\\text{m}$. Hvor ligger massesenteret?",
      options: ["$0{,}300\\,\\text{m}$", "$0{,}200\\,\\text{m}$", "$0{,}100\\,\\text{m}$", "$0{,}400\\,\\text{m}$"],
      explanation: "Massesenteret er det massevektede gjennomsnittet, $x_\\text{CM}=\\sum m_ix_i/\\sum m_i=0{,}300\\,\\text{m}$, og det ligger nærmest den tyngste massen. Alternativet midt mellom de to punktene er det uvektede gjennomsnittet, altså massene glemt. Alternativet som ligger på motsatt side av midten, kommer av å bytte om de to massene i telleren. Alternativet som er lik posisjonen til den andre massen, kommer av å dele på den ene massen i stedet for på totalmassen.",
    },
    {
      question: "En homogen stang med masse $0{,}400\\,\\text{kg}$ og lengde $0{,}500\\,\\text{m}$ har en klump på $0{,}900\\,\\text{kg}$ festet i den ene enden. Hvor langt fra den frie enden ligger massesenteret?",
      options: ["$0{,}423\\,\\text{m}$", "$0{,}250\\,\\text{m}$", "$0{,}500\\,\\text{m}$", "$0{,}375\\,\\text{m}$"],
      explanation: "Stanga bidrar med sin masse i sitt eget massesenter, midt på stanga, og klumpen med sin i enden: $x_\\text{CM}=(0{,}400\\cdot0{,}250+0{,}900\\cdot0{,}500)/1{,}300=0{,}550/1{,}300=0{,}423\\,\\text{m}$ — godt forbi midten, fordi klumpen er mer enn dobbelt så tung som stanga. Alternativet $0{,}250\\,\\text{m}$ er stangens eget massesenter, altså klumpen glemt. Alternativet $0{,}500\\,\\text{m}$ er klumpens posisjon, altså stangens masse glemt. Og verdien midt mellom de to delmassesentrene er gjennomsnittet deres uten vekting.",
    },
    {
      question: "Hvor ligger massesenteret til en homogen, tynn ring?",
      options: ["I sentrum av ringen, altså i et punkt der det ikke finnes masse i det hele tatt", "I et punkt på ringen selv, siden massesenteret alltid må ligge inne i legemet", "Overalt langs ringen, fordi massen er fordelt jevnt rundt hele omkretsen", "Det er udefinert for legemer med hull, og erstattes da av treghetsradien"],
      explanation: "Massesenteret er et vektet gjennomsnitt av posisjonene, og for en symmetrisk ring faller det i symmetrisenteret — som ligger i luften, uten masse. Massesenteret behøver altså ikke ligge inne i legemet; det er nettopp det ringen viser. At massen er jevnt fordelt betyr at gjennomsnittet blir symmetrisenteret, ikke at massesenteret er mange punkter, og størrelsen er godt definert for alle stive legemer, med eller uten hull.",
    },
    {
      question: "Tre like punktmasser på $0{,}500\\,\\text{kg}$ sitter i hjørnene av en likesidet trekant med sidekant $0{,}600\\,\\text{m}$. Hva er treghetsmomentet om en akse gjennom ett hjørne, vinkelrett på trekantplanet?",
      options: ["$0{,}360\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}270\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}540\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}180\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Massen i hjørnet der aksen står har $r=0$ og bidrar ingenting, mens de to andre ligger i den vinkelrette avstanden $a$: $I=2ma^2=0{,}360\\,\\text{kg}\\cdot\\text{m}^2$. Alternativet som er tre fjerdedeler av fasiten, bruker trekantens høyde $a\\sqrt3/2$ som avstand i stedet for sidekanten. Alternativet som er halvannen ganger fasiten, lar også massen i aksen bidra med $ma^2$. Det minste alternativet tar bare med én av de to massene som faktisk ligger i avstanden $a$.",
    },
    {
      question: "Tre like punktmasser på $0{,}250\\,\\text{kg}$ sitter i hjørnene av en likesidet trekant med sidekant $0{,}400\\,\\text{m}$. Hva er treghetsmomentet om en akse gjennom ett hjørne, vinkelrett på trekantplanet?",
      options: ["$0{,}0800\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}0600\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}120\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}0400\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Massen i hjørnet der aksen står har $r=0$ og bidrar ingenting, mens de to andre ligger i den vinkelrette avstanden $a$: $I=2ma^2=0{,}0800\\,\\text{kg}\\cdot\\text{m}^2$. Alternativet som er tre fjerdedeler av fasiten, bruker trekantens høyde $a\\sqrt3/2$ som avstand i stedet for sidekanten. Alternativet som er halvannen ganger fasiten, lar også massen i aksen bidra med $ma^2$. Det minste alternativet tar bare med én av de to massene som faktisk ligger i avstanden $a$.",
    },
    {
      question: "Tre like punktmasser på $1{,}200\\,\\text{kg}$ sitter i hjørnene av en likesidet trekant med sidekant $0{,}300\\,\\text{m}$. Hva er treghetsmomentet om en akse gjennom ett hjørne, vinkelrett på trekantplanet?",
      options: ["$0{,}216\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}162\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}324\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}108\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Massen i hjørnet der aksen står har $r=0$ og bidrar ingenting, mens de to andre ligger i den vinkelrette avstanden $a$: $I=2ma^2=0{,}216\\,\\text{kg}\\cdot\\text{m}^2$. Alternativet som er tre fjerdedeler av fasiten, bruker trekantens høyde $a\\sqrt3/2$ som avstand i stedet for sidekanten. Alternativet som er halvannen ganger fasiten, lar også massen i aksen bidra med $ma^2$. Det minste alternativet tar bare med én av de to massene som faktisk ligger i avstanden $a$.",
    },
    {
      question: "Fire punktmasser på $0{,}300\\,\\text{kg}$ sitter i hjørnene av et kvadrat med sidekant $0{,}500\\,\\text{m}$. Hva er treghetsmomentet om en akse gjennom sentrum, vinkelrett på planet?",
      options: ["$0{,}150\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}300\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}212\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}0750\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Avstanden fra sentrum til hvert hjørne er halve diagonalen, $a/\\sqrt2$, og alle fire massene ligger like langt fra aksen: $I=4m(a/\\sqrt2)^2=2ma^2=0{,}150\\,\\text{kg}\\cdot\\text{m}^2$. Alternativet som er dobbelt så stort, bruker hele sidekanten som avstand for alle fire. Alternativet mellom de to kommer av å glemme å kvadrere kvadratroten av to, altså å dele på $\\sqrt2$ i stedet for på 2. Det minste alternativet tar med bare to av de fire massene.",
    },
    {
      question: "En punktmasse ligger $0{,}300\\,\\text{m}$ fra et punkt på en akse målt langs aksen, og $0{,}400\\,\\text{m}$ fra aksen målt vinkelrett på den. Hvilken avstand skal inn i $I=mr^2$?",
      options: ["$0{,}400\\,\\text{m}$, fordi bare den vinkelrette avstanden til aksen teller", "$0{,}300\\,\\text{m}$, fordi avstanden alltid måles langs rotasjonsaksen", "$0{,}500\\,\\text{m}$, fordi de to avstandene først må settes sammen med Pytagoras", "$0{,}700\\,\\text{m}$, fordi begge avstandene bidrar og derfor skal summeres"],
      explanation: "Treghetsmomentet måler hvor stor sirkel massen går i når legemet roterer, og et punkt som flyttes parallelt med aksen går i akkurat like stor sirkel. Bare den vinkelrette avstanden på $0{,}400\\,\\text{m}$ teller. Avstanden langs aksen er uten betydning, avstanden til et PUNKT på aksen er ikke det samme som avstanden til aksen, og avstander summeres aldri.",
    },
    {
      question: "En homogen stang har masse $1{,}200\\,\\text{kg}$ og lengde $0{,}900\\,\\text{m}$. Hva er treghetsmomentet om en akse gjennom det ene endepunktet, vinkelrett på stanga?",
      options: ["$0{,}3240\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}08100\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}4860\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}5670\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Om endepunktet er $I=\\tfrac13ML^2=0{,}3240\\,\\text{kg}\\cdot\\text{m}^2$, og uttrykket står ferdig på det utdelte arket. Alternativet som er en fjerdedel av fasiten, er $\\tfrac{1}{12}ML^2$, altså stanga om MIDTEN. Alternativet som er halvparten større, er sylinderformelen $\\tfrac12ML^2$ brukt på en stang. Det største alternativet legger et Steiner-ledd til $\\tfrac13ML^2$ — men $\\tfrac13ML^2$ ER stanga om endepunktet, så det blir dobbelttelling.",
    },
    {
      question: "En homogen stang har masse $2{,}000\\,\\text{kg}$ og lengde $0{,}600\\,\\text{m}$. Hva er treghetsmomentet om en akse gjennom det ene endepunktet, vinkelrett på stanga?",
      options: ["$0{,}2400\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}06000\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}3600\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}4200\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Om endepunktet er $I=\\tfrac13ML^2=0{,}2400\\,\\text{kg}\\cdot\\text{m}^2$, og uttrykket står ferdig på det utdelte arket. Alternativet som er en fjerdedel av fasiten, er $\\tfrac{1}{12}ML^2$, altså stanga om MIDTEN. Alternativet som er halvparten større, er sylinderformelen $\\tfrac12ML^2$ brukt på en stang. Det største alternativet legger et Steiner-ledd til $\\tfrac13ML^2$ — men $\\tfrac13ML^2$ ER stanga om endepunktet, så det blir dobbelttelling.",
    },
    {
      question: "En stang med lengde $0{,}900\\,\\text{m}$ og masse $1{,}20\\,\\text{kg}$ har linjetettheten $\\lambda(x)=\\lambda_0(1+x/L)$, altså dobbelt så tett i den ene enden. Hva er treghetsmomentet om aksen i den tynne enden $x=0$?",
      options: ["$0{,}3780\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}3240\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}08100\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}4860\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Integralet $\\int_0^Lx^2\\lambda_0(1+x/L)dx=\\tfrac{7}{12}\\lambda_0L^3$ sammen med $\\lambda_0=2M/(3L)$ gir $I=\\tfrac{7}{18}ML^2$, litt mer enn den homogene stanga fordi massen er forskjøvet mot den fjerne enden. Alternativet som er litt mindre, er den homogene stanga om enden, altså tetthetsfunksjonen ignorert. Det minste alternativet er homogen stang om midten. Det største svarer til $\\lambda\\propto x$, altså en tetthet som starter på null i stedet for å dobles.",
    },
    {
      question: "Hvorfor gir integrasjonsgrensene $0$ til $L$ og $-L/2$ til $L/2$ ulike svar for $\\int r^2\\,dm$ langs samme homogene stang?",
      options: ["Fordi grensene bestemmer hvor aksen ligger, og treghetsmomentet avhenger av aksen", "Fordi den ene regningen får negative bidrag som trekker ned det samlede svaret", "Fordi bare halve massen skal integreres når aksen ligger midt på stanga", "Fordi enhetene blir ulike, og det ene svaret må ganges med to for å bli riktig"],
      explanation: "Grensene ER aksevalget: fra $0$ til $L$ måles $r$ fra endepunktet, fra $-L/2$ til $L/2$ fra midten. Svarene $\\tfrac13ML^2$ og $\\tfrac{1}{12}ML^2$ skiller seg med en faktor fire. Bidragene er aldri negative, siden $r^2$ er positivt uansett fortegn på $x$; hele massen skal alltid med, uansett aksevalg; og begge svarene har enheten $\\text{kg}\\cdot\\text{m}^2$.",
    },
    {
      question: "En kompakt kule har masse $2{,}400\\,\\text{kg}$ og radius $0{,}150\\,\\text{m}$. Hva er treghetsmomentet om en akse som tangerer kuleflaten?",
      options: ["$0{,}07560\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}02160\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}05400\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}09000\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Steiners sats med $d=R$ gir $I=\\tfrac25MR^2+MR^2=\\tfrac75MR^2=0{,}07560\\,\\text{kg}\\cdot\\text{m}^2$. Alternativet som er under en tredjedel av fasiten, er kula om sentrumsaksen — Steiner-leddet glemt, som er den vanligste feilen i sjangeren. Alternativet $MR^2$ er bare Steiner-leddet, med kulas eget treghetsmoment glemt. Alternativet som ligger nærmest over fasiten, bruker kuleskall-formelen $\\tfrac23MR^2$ i stedet for den kompakte kulas $\\tfrac25MR^2$.",
    },
    {
      question: "En kompakt kule har masse $1{,}500\\,\\text{kg}$ og radius $0{,}200\\,\\text{m}$. Hva er treghetsmomentet om en akse som tangerer kuleflaten?",
      options: ["$0{,}08400\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}02400\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}06000\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}1000\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Steiners sats med $d=R$ gir $I=\\tfrac25MR^2+MR^2=\\tfrac75MR^2=0{,}08400\\,\\text{kg}\\cdot\\text{m}^2$. Alternativet som er under en tredjedel av fasiten, er kula om sentrumsaksen — Steiner-leddet glemt, som er den vanligste feilen i sjangeren. Alternativet $MR^2$ er bare Steiner-leddet, med kulas eget treghetsmoment glemt. Alternativet som ligger nærmest over fasiten, bruker kuleskall-formelen $\\tfrac23MR^2$ i stedet for den kompakte kulas $\\tfrac25MR^2$.",
    },
    {
      question: "En homogen skive med masse $2{,}000\\,\\text{kg}$ og radius $0{,}250\\,\\text{m}$ henges opp i et punkt på randen og roterer om en akse gjennom dette punktet, vinkelrett på skiva. Hva er treghetsmomentet?",
      options: ["$0{,}1875\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}06250\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}1250\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}1750\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Skiva har $\\tfrac12MR^2$ om sentrum, og randen ligger $d=R$ unna: $I=\\tfrac32MR^2=0{,}1875\\,\\text{kg}\\cdot\\text{m}^2$. Alternativet som er en tredjedel av fasiten, er skiva om sentrumsaksen, altså Steiner-leddet glemt. Alternativet som er to tredjedeler, er Steiner-leddet alene, uten skivas eget bidrag. Alternativet som ligger bare noen prosent under fasiten, bruker kule-formelen $\\tfrac25MR^2$ i stedet for skiveformelen før Steiner legges til — det er farlig nettopp fordi det ligger så nær.",
    },
    {
      question: "En homogen skive med masse $3{,}000\\,\\text{kg}$ og radius $0{,}400\\,\\text{m}$ roterer om en akse vinkelrett på skiveplanet, gjennom et punkt halvveis mellom sentrum og rand. Hva er treghetsmomentet?",
      options: ["$0{,}3600\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}2400\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}7200\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}4800\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Med $d=R/2$ blir Steiner-leddet $\\tfrac14MR^2$, så $I=\\tfrac34MR^2=0{,}3600\\,\\text{kg}\\cdot\\text{m}^2$. Alternativet som er to tredjedeler av fasiten, er Steiner-leddet glemt. Det største alternativet bruker $d=R$, altså hele radien i stedet for halve. Alternativet mellom dem glemmer å kvadrere en halv, og legger til $\\tfrac12MR^2$ i stedet for $\\tfrac14MR^2$.",
    },
    {
      question: "En homogen stang ($0{,}500\\,\\text{kg}$, $0{,}800\\,\\text{m}$) er hengslet i den ene enden, og en kompakt kule ($1{,}20\\,\\text{kg}$, radius $0{,}100\\,\\text{m}$) er festet i den andre, med kulesentret $0{,}900\\,\\text{m}$ fra hengselet. Hva er treghetsmomentet om hengselaksen?",
      options: ["$1{,}083\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}1115\\,\\text{kg}\\cdot\\text{m}^2$", "$1{,}003\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}8795\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Stanga bidrar med $\\tfrac13M_sL^2$ (allerede om enden), kula med $\\tfrac25M_kR^2+M_k(L+R)^2$: $I=1{,}083\\,\\text{kg}\\cdot\\text{m}^2$. Det klart minste alternativet glemmer kulas Steiner-ledd $M_k(L+R)^2$, som er det største bidraget i hele regningen. Alternativet som er litt mindre enn fasiten, bruker $\\tfrac{1}{12}M_sL^2$ for stanga, altså aksen om stangens midtpunkt i stedet for enden. Verdien som ligger nærmest under fasiten, setter kula i avstanden $L$ i stedet for $L+R$ fra hengselet.",
    },
    {
      question: "Hvilken påstand om Steiners sats $I=I_\\text{CM}+Md^2$ er riktig?",
      options: ["Den krever at aksene er parallelle, og at den ene går gjennom massesenteret", "Den gjelder mellom to vilkårlige akser, så lenge $d$ måles vinkelrett på dem", "Den gir et mindre treghetsmoment når den nye aksen ligger nær mesteparten av massen", "Den gjelder bare for legemer med rotasjonssymmetri, som kuler, skiver og sylindre"],
      explanation: "Begge betingelsene er nødvendige: aksene må være parallelle, og den ene må gå gjennom massesenteret — det er nettopp betingelsen som gjør at kryssleddet forsvinner i utledningen. Mellom to vilkårlige akser gjelder satsen ikke direkte, men du kan gå via massesenteret i to trinn. Leddet $Md^2$ er alltid positivt, så satsen kan aldri gi et mindre svar. Og den gjelder for alle stive legemer, uansett symmetri.",
    },
    {
      question: "Et legeme har treghetsmomentet $I_1$ om en akse i avstanden $d_1$ fra massesenteret. Hvordan finner du treghetsmomentet om en annen, parallell akse i avstanden $d_2$ fra massesenteret?",
      options: ["Regn først $I_\\text{CM}=I_1-Md_1^2$, og deretter $I_2=I_\\text{CM}+Md_2^2$", "Bruk $I_2=I_1+M(d_2-d_1)^2$, siden bare den innbyrdes avstanden mellom aksene teller", "Bruk $I_2=I_1(d_2/d_1)^2$, siden treghetsmomentet vokser med avstanden i annen", "Det er umulig uten å regne integralet $\\int r^2\\,dm$ på nytt for den nye aksen"],
      explanation: "Steiners sats gjelder bare med massesenteret som mellomstasjon, så veien går i to trinn: baklengs til $I_\\text{CM}$, deretter forlengs til den nye aksen. Å bruke satsen direkte mellom to akser der ingen av dem går gjennom massesenteret, er nettopp den feilen betingelsen forbyr. Forslaget med kvadratforholdet er galt fordi $I_\\text{CM}$-leddet ikke skalerer med $d^2$. Og integralet er unødvendig når $I_1$ og $d_1$ er kjent.",
    },
    {
      question: "Fire legemer har samme masse $M$ og samme ytre radius $R$, og roterer om en akse gjennom massesenteret. Hvilken rangering av treghetsmomentene er riktig?",
      options: ["ring, kuleskall, massiv sylinder, kompakt kule — i avtakende rekkefølge", "kompakt kule, massiv sylinder, kuleskall, ring — i avtakende rekkefølge", "massiv sylinder, ring, kompakt kule, kuleskall — i avtakende rekkefølge", "ring, massiv sylinder, kompakt kule, kuleskall — i avtakende rekkefølge"],
      explanation: "Tallene foran $MR^2$ er $1$ for ringen, $\\tfrac23\\approx0{,}667$ for kuleskallet, $\\tfrac12$ for den massive sylinderen og $\\tfrac25=0{,}400$ for den kompakte kula. Rangeringen følger direkte av hvor langt fra aksen massen ligger: ringen har all masse ytterst, kula har den trukket inn mot midten. Rekkefølgene som setter kula eller sylinderen øverst, snur dette prinsippet, og den siste forveksler kuleskallet ($\\tfrac23$) med den kompakte kula ($\\tfrac25$).",
    },
    {
      question: "Hva er treghetsradien til en kompakt kule med radius $R$, om en akse gjennom sentrum?",
      options: ["$0{,}632R$, altså kvadratroten av to femdeler ganger radien", "$0{,}400R$, altså det samme tallet som står foran $MR^2$", "$0{,}707R$, altså radien delt på kvadratroten av to", "$1{,}00R$, siden treghetsradien alltid er legemets ytre radius"],
      explanation: "Treghetsradien er definert ved $I=Mk^2$, så $k=\\sqrt{I/M}=\\sqrt{2/5}\\,R=0{,}632R$. Alternativet $0{,}400R$ er tallet $\\tfrac25$ brukt uten kvadratrot. Alternativet $0{,}707R$ er treghetsradien til en massiv sylinder, $\\sqrt{1/2}\\,R$. Og $k=R$ gjelder bare for en tynn ring, der all massen faktisk ligger i avstanden $R$ fra aksen.",
    },
    {
      question: "En skive har et sirkulært hull boret ut et stykke fra sentrum. Hva er den enkleste riktige måten å finne treghetsmomentet om skivas symmetriakse?",
      options: ["Regn den hele skiva og trekk fra hullet med både eget $\\tfrac12mr^2$ og Steiner-leddet $md^2$", "Regn den hele skiva og trekk fra hullets $\\tfrac12mr^2$, uten noe Steiner-ledd for hullet", "Regn den hele skiva og trekk fra $mR^2$, med $R$ som skivas radius og $m$ hullets masse", "Bruk $\\tfrac12MR^2$ med den reduserte massen, siden hullet bare fjerner masse fra skiva"],
      explanation: "Additiviteten gjelder også med negative bidrag: den utborede biten trekkes fra med både sitt eget $\\tfrac12mr^2$ og sitt Steiner-ledd $md^2$, der $d$ er avstanden fra symmetriaksen til hullets sentrum. Å droppe Steiner-leddet undervurderer det som er fjernet. Å bruke $mR^2$ ville plassert hullet helt i randen som en punktmasse. Og å bare redusere massen i $\\tfrac12MR^2$ forutsetter at massen ble fjernet jevnt over hele skiva, ikke på ett bestemt sted.",
    },
    {
      question: "Hvorfor er $\\tfrac13ML^2$ treghetsmomentet for en stang om endepunktet, når $\\tfrac{1}{12}ML^2$ gjelder om midten?",
      options: ["Fordi $\\tfrac{1}{12}ML^2+M(L/2)^2=\\tfrac13ML^2$ — Steiners sats er allerede regnet inn", "Fordi grensene $0$ til $L$ tar med fire ganger så mye masse i integralet", "Fordi stangens masse dobles når aksen flyttes ut, og bidraget derfor firedobles", "Fordi de to uttrykkene er ulike tilnærminger, og bare det ene tar med tverrsnittet"],
      explanation: "Uttrykket for stanga om endepunktet er Steiners sats ferdig anvendt med $d=L/2$: $\\tfrac{1}{12}+\\tfrac14=\\tfrac13$. Det er også grunnen til at du ikke skal legge til et Steiner-ledd én gang til når du bruker $\\tfrac13ML^2$. Massen er selvsagt den samme uansett akse, og det er avstandene — ikke massemengden — som gir faktoren fire. Begge uttrykkene er eksakte for en tynn stang.",
    },
    {
      question: "Hva sier det om regningen din hvis du får $I=2{,}5\\,MR^2$ for en massiv sylinder som roterer om sin egen symmetriakse?",
      options: ["At noe er galt: ingen masse ligger lenger ute enn $R$, så tallet kan ikke overstige 1", "At sylinderen må være hul, siden bare et tynt skall kan gi et tall over 1", "At svaret kan stemme hvis sylinderen er lang, fordi lengden også bidrar", "At du har blandet meter og centimeter, og svaret bare trenger en enhetsomregning"],
      explanation: "For rotasjon om symmetriaksen ligger ingen masse lenger fra aksen enn $R$, så $I\\le MR^2$ er en hard øvre grense, og $2{,}5\\,MR^2$ betyr regnefeil. Selv et tynt sylinderskall når bare opp til $MR^2$. Utstrekning LANGS aksen bidrar ikke i det hele tatt, fordi den vinkelrette avstanden ikke endres av den. Og en enhetsfeil flytter tierpotensen, ikke det dimensjonsløse tallet foran $MR^2$. Merk at grensen gjelder aksen gjennom massesenteret: med Steiner-leddet kan tallet godt bli større enn 1.",
    },
  ],
  'tfy4115-4-2': [
    {
      question: "En kraft på $25{,}0\\,\\text{N}$ virker i avstanden $0{,}400\\,\\text{m}$ fra en akse, i en vinkel på $30^\\circ$ med linja fra aksen til angrepspunktet. Hvor stort er kraftmomentet?",
      options: ["$5{,}00\\,\\text{N}\\cdot\\text{m}$", "$10{,}0\\,\\text{N}\\cdot\\text{m}$", "$8{,}66\\,\\text{N}\\cdot\\text{m}$", "$12{,}5\\,\\text{N}\\cdot\\text{m}$"],
      explanation: "Momentet er $\\tau=rF\\sin\\phi=5{,}00\\,\\text{N}\\cdot\\text{m}$, der $r\\sin\\phi$ er den vinkelrette avstanden fra aksen til kraftens virkelinje. Alternativet $rF$ bruker hele avstanden som momentarm, altså $\\sin\\phi$ glemt — det er den vanligste momentfeilen. Alternativet med kosinus har byttet om de to trigonometriske funksjonene. Verdien som er kraften alene, har glemt avstanden helt og har dermed feil dimensjon.",
    },
    {
      question: "En kraft på $40{,}0\\,\\text{N}$ virker i avstanden $0{,}250\\,\\text{m}$ fra en akse, i en vinkel på $60^\\circ$ med linja fra aksen til angrepspunktet. Hvor stort er kraftmomentet?",
      options: ["$8{,}66\\,\\text{N}\\cdot\\text{m}$", "$10{,}0\\,\\text{N}\\cdot\\text{m}$", "$5{,}00\\,\\text{N}\\cdot\\text{m}$", "$34{,}6\\,\\text{N}\\cdot\\text{m}$"],
      explanation: "Momentet er $\\tau=rF\\sin\\phi=8{,}66\\,\\text{N}\\cdot\\text{m}$, der $r\\sin\\phi$ er den vinkelrette avstanden fra aksen til kraftens virkelinje. Alternativet $rF$ bruker hele avstanden som momentarm, altså $\\sin\\phi$ glemt — det er den vanligste momentfeilen. Alternativet med kosinus har byttet om de to trigonometriske funksjonene. Verdien som er kraften alene, har glemt avstanden helt og har dermed feil dimensjon.",
    },
    {
      question: "Et hjul med treghetsmoment $0{,}0450\\,\\text{kg}\\cdot\\text{m}^2$ drives av et konstant moment på $1{,}350\\,\\text{N}\\cdot\\text{m}$. Hvor stor er vinkelakselerasjonen?",
      options: ["$30{,}0\\,\\text{rad/s}^2$", "$0{,}0333\\,\\text{rad/s}^2$", "$0{,}0607\\,\\text{rad/s}^2$", "$15{,}0\\,\\text{rad/s}^2$"],
      explanation: "Newtons 2. lov for rotasjon gir $\\alpha=\\tau/I=30{,}0\\,\\text{rad/s}^2$. Det minste alternativet er det omvendte forholdet $I/\\tau$. Alternativet som er produktet $\\tau I$ kommer av å multiplisere i stedet for å dividere. Og alternativet som er halvparten av fasiten, har fått en ekstra faktor 2 i nevneren, typisk fra å blande inn faktoren $\\tfrac12$ fra rotasjonsenergien.",
    },
    {
      question: "Et hjul med treghetsmoment $0{,}2400\\,\\text{kg}\\cdot\\text{m}^2$ drives av et konstant moment på $3{,}600\\,\\text{N}\\cdot\\text{m}$. Hvor stor er vinkelakselerasjonen?",
      options: ["$15{,}0\\,\\text{rad/s}^2$", "$0{,}0667\\,\\text{rad/s}^2$", "$0{,}864\\,\\text{rad/s}^2$", "$7{,}50\\,\\text{rad/s}^2$"],
      explanation: "Newtons 2. lov for rotasjon gir $\\alpha=\\tau/I=15{,}0\\,\\text{rad/s}^2$. Det minste alternativet er det omvendte forholdet $I/\\tau$. Alternativet som er produktet $\\tau I$ kommer av å multiplisere i stedet for å dividere. Og alternativet som er halvparten av fasiten, har fått en ekstra faktor 2 i nevneren, typisk fra å blande inn faktoren $\\tfrac12$ fra rotasjonsenergien.",
    },
    {
      question: "En homogen skive ($4{,}00\\,\\text{kg}$, radius $0{,}250\\,\\text{m}$) roterer om sin symmetriakse. En snor viklet rundt randen trekkes med $12{,}0\\,\\text{N}$ tangentielt. Hvor stor er vinkelakselerasjonen?",
      options: ["$24{,}0\\,\\text{rad/s}^2$", "$12{,}0\\,\\text{rad/s}^2$", "$36{,}0\\,\\text{rad/s}^2$", "$30{,}0\\,\\text{rad/s}^2$"],
      explanation: "Momentet er $\\tau=FR$ fordi snoren virker tangentielt, og $I=\\tfrac12MR^2$: $\\alpha=2F/(MR)=24{,}0\\,\\text{rad/s}^2$. Alternativet som er halvparten, bruker $MR^2$ (ringformelen) i stedet for $\\tfrac12MR^2$. Alternativet som er halvannen ganger fasiten, bruker stangformelen $\\tfrac13MR^2$. Det største alternativet bruker kule-formelen $\\tfrac25MR^2$ for en skive.",
    },
    {
      question: "En kompakt kule ($0{,}450\\,\\text{kg}$, radius $0{,}0800\\,\\text{m}$) glir mot høyre med senterfarten $6{,}00\\,\\text{m/s}$ og har BAKSNURR med vinkelfarten $30{,}0\\,\\text{rad/s}$. Hvor stor er den totale dreieimpulsen om et punkt på gulvet?",
      options: ["$0{,}1814\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}2506\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}2160\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}03456\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$"],
      explanation: "Banebidraget er $mVR=0{,}2160\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$ inn i papiret, og spinnbidraget $\\tfrac25mR^2\\omega=0{,}03456\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$ ut av papiret fordi baksnurr er rotasjon mot klokka. Fordi de peker motsatt vei, subtraheres tallverdiene: $0{,}1814\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$. Det største alternativet er summen, altså svaret man får med toppsnurr — ren fortegnsfeil. Alternativet som er litt større enn fasiten, har glemt spinnbidraget helt. Det minste alternativet er spinnbidraget alene, med banedelen glemt.",
    },
    {
      question: "En kompakt kule ($0{,}600\\,\\text{kg}$, radius $0{,}1200\\,\\text{m}$) glir mot høyre med senterfarten $4{,}50\\,\\text{m/s}$ og har BAKSNURR med vinkelfarten $25{,}0\\,\\text{rad/s}$. Hvor stor er den totale dreieimpulsen om et punkt på gulvet?",
      options: ["$0{,}2376\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}4104\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}3240\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}08640\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$"],
      explanation: "Banebidraget er $mVR=0{,}3240\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$ inn i papiret, og spinnbidraget $\\tfrac25mR^2\\omega=0{,}08640\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$ ut av papiret fordi baksnurr er rotasjon mot klokka. Fordi de peker motsatt vei, subtraheres tallverdiene: $0{,}2376\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$. Det største alternativet er summen, altså svaret man får med toppsnurr — ren fortegnsfeil. Alternativet som er litt større enn fasiten, har glemt spinnbidraget helt. Det minste alternativet er spinnbidraget alene, med banedelen glemt.",
    },
    {
      question: "En kompakt kule ($0{,}500\\,\\text{kg}$, radius $0{,}100\\,\\text{m}$) ruller rent mot høyre med senterfarten $3{,}00\\,\\text{m/s}$. Hvor stor er dreieimpulsen om et punkt på underlaget?",
      options: ["$0{,}2100\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}06000\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}1500\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}1350\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$"],
      explanation: "Ved ren rulling er $\\omega=V/R$, og spinn og bane peker samme vei: $L=\\tfrac25mR^2\\omega+mVR=\\tfrac75mVR=0{,}2100\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$. Merk at $\\tfrac75mR^2$ nettopp er treghetsmomentet om kontaktpunktet, slik Steiners sats gir det. Alternativet som er under en tredjedel av fasiten, er spinnbidraget alene. Alternativet som er fem sjuendedeler, er banebidraget alene. Det minste alternativet har halvert banebidraget.",
    },
    {
      question: "En kompakt kule ($2{,}000\\,\\text{kg}$, radius $0{,}300\\,\\text{m}$) ruller rent mot høyre med senterfarten $1{,}50\\,\\text{m/s}$. Hvor stor er dreieimpulsen om et punkt på underlaget?",
      options: ["$1{,}260\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}3600\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}9000\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}8100\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$"],
      explanation: "Ved ren rulling er $\\omega=V/R$, og spinn og bane peker samme vei: $L=\\tfrac25mR^2\\omega+mVR=\\tfrac75mVR=1{,}260\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$. Merk at $\\tfrac75mR^2$ nettopp er treghetsmomentet om kontaktpunktet, slik Steiners sats gir det. Alternativet som er under en tredjedel av fasiten, er spinnbidraget alene. Alternativet som er fem sjuendedeler, er banebidraget alene. Det minste alternativet har halvert banebidraget.",
    },
    {
      question: "Hvorfor må du oppgi hvilket punkt du regner dreieimpulsen om?",
      options: ["Fordi banebidraget $\\mathbf{R}_\\text{CM}\\times m\\mathbf{V}$ avhenger av hvor punktet ligger", "Fordi spinnbidraget $I_\\text{CM}\\omega$ endrer seg når punktet flyttes", "Fordi treghetsmomentet er en vektor som peker fra punktet mot massesenteret", "Fordi dreieimpulsen bare er definert for punkter som ligger inne i legemet"],
      explanation: "Spinnbidraget er det samme uansett referansepunkt, men banebidraget avhenger av den vinkelrette avstanden fra punktet til massesenterets bane — flytter du punktet, endres bidraget, og for et punkt på selve banen blir det null. Treghetsmomentet er en skalar, ikke en vektor. Og referansepunktet kan ligge hvor som helst, også langt utenfor legemet.",
    },
    {
      question: "En kule med toppsnurr glir mot høyre. Hvilken vei peker spinn- og banedreieimpulsen om et punkt på gulvet, sett fra vår side?",
      options: ["Begge inn i papiret, så tallverdiene legges sammen", "Begge ut av papiret, så tallverdiene legges sammen", "Spinnet inn i papiret og banen ut, så tallverdiene trekkes fra hverandre", "Spinnet ut av papiret og banen inn, så tallverdiene trekkes fra hverandre"],
      explanation: "Toppsnurr betyr at kula roterer med klokka når den beveger seg mot høyre, altså samme rotasjonsretning som ved ren rulling, og høyrehåndsregelen gir da en spinnvektor inn i papiret. Banebidraget peker også inn i papiret, siden massesenteret går mot høyre over referansepunktet. Bidragene summeres derfor. Det er ved BAKSNURR at de peker motsatt vei og skal subtraheres.",
    },
    {
      question: "En person på en friksjonsfri dreieskive har treghetsmoment $4{,}50\\,\\text{kg}\\cdot\\text{m}^2$ og roterer med $2{,}00\\,\\text{rad/s}$. Hun trekker armene inn, slik at treghetsmomentet faller til $1{,}80\\,\\text{kg}\\cdot\\text{m}^2$. Hva blir vinkelfarten?",
      options: ["$5{,}00\\,\\text{rad/s}$", "$0{,}800\\,\\text{rad/s}$", "$2{,}00\\,\\text{rad/s}$", "$3{,}16\\,\\text{rad/s}$"],
      explanation: "Ingen ytre momenter gir bevart dreieimpuls: $I_1\\omega_1=I_2\\omega_2$, altså $\\omega_2=5{,}00\\,\\text{rad/s}$. Alternativet som er lavere enn utgangspunktet, har snudd forholdet $I_1/I_2$. Alternativet som er lik startverdien, forutsetter feilaktig at vinkelfarten er bevart i stedet for dreieimpulsen. Verdien med kvadratroten av forholdet er det du får hvis du bevarer kinetisk energi — men energi er nettopp IKKE bevart her.",
    },
    {
      question: "En person på en friksjonsfri dreieskive har treghetsmoment $3{,}60\\,\\text{kg}\\cdot\\text{m}^2$ og roterer med $1{,}50\\,\\text{rad/s}$. Hun trekker armene inn, slik at treghetsmomentet faller til $1{,}20\\,\\text{kg}\\cdot\\text{m}^2$. Hva blir vinkelfarten?",
      options: ["$4{,}50\\,\\text{rad/s}$", "$0{,}500\\,\\text{rad/s}$", "$1{,}50\\,\\text{rad/s}$", "$2{,}60\\,\\text{rad/s}$"],
      explanation: "Ingen ytre momenter gir bevart dreieimpuls: $I_1\\omega_1=I_2\\omega_2$, altså $\\omega_2=4{,}50\\,\\text{rad/s}$. Alternativet som er lavere enn utgangspunktet, har snudd forholdet $I_1/I_2$. Alternativet som er lik startverdien, forutsetter feilaktig at vinkelfarten er bevart i stedet for dreieimpulsen. Verdien med kvadratroten av forholdet er det du får hvis du bevarer kinetisk energi — men energi er nettopp IKKE bevart her.",
    },
    {
      question: "Samme dreieskive som i forrige spørsmål ($I$ fra $4{,}50$ til $1{,}80\\,\\text{kg}\\cdot\\text{m}^2$, start $2{,}00\\,\\text{rad/s}$). Hvor mye øker den kinetiske energien?",
      options: ["$13{,}5\\,\\text{J}$", "$22{,}5\\,\\text{J}$", "$9{,}00\\,\\text{J}$", "$0\\,\\text{J}$"],
      explanation: "Energien går fra $\\tfrac12I_1\\omega_1^2=9{,}00\\,\\text{J}$ til $\\tfrac12I_2\\omega_2^2=22{,}5\\,\\text{J}$, altså en økning på $13{,}5\\,\\text{J}$ — arbeidet personen gjør med armene. Det største alternativet er sluttenergien, ikke økningen. Alternativet i midten er startenergien. Alternativet null forutsetter at energien er bevart, og det er den ikke: bare dreieimpulsen er det.",
    },
    {
      question: "Hvilken størrelse er bevart når en person på en friksjonsfri dreieskive trekker armene inn?",
      options: ["Dreieimpulsen, men ikke rotasjonsenergien", "Både dreieimpulsen og rotasjonsenergien", "Rotasjonsenergien, men ikke dreieimpulsen", "Vinkelfarten, siden ingen ytre kraft virker på systemet"],
      explanation: "Dreieimpulsen kan bare endres av et ytre kraftmoment, og armbevegelsen er en indre kraft — derfor er $L$ bevart. Energien kan endres av arbeid, og personen gjør et reelt arbeid når hun trekker vektene innover mot aksen; energien øker med $L^2/(2I)$-sammenhengen. Vinkelfarten er den størrelsen som faktisk endrer seg, og det er hele poenget med forsøket.",
    },
    {
      question: "Når gjelder $\\tau=I\\alpha$, og når må du bruke $\\tau=d\\mathbf{L}/dt$ i stedet?",
      options: ["$\\tau=I\\alpha$ krever konstant treghetsmoment; endrer legemet form, må du bruke spinnsatsen", "De to er alltid likeverdige, siden $L=I\\omega$ og $\\alpha=d\\omega/dt$", "$\\tau=I\\alpha$ gjelder bare for rotasjon om massesenteret, spinnsatsen for alle andre akser", "$\\tau=I\\alpha$ gjelder bare i to dimensjoner, spinnsatsen i tre"],
      explanation: "Spinnsatsen $\\tau=d(I\\omega)/dt$ blir $I\\alpha$ bare når $I$ er konstant. Endrer legemet form — en person som trekker armene inn, en satellitt som slipper ut antenner — er $I$ tidsavhengig, og da må spinnsatsen brukes i sin generelle form. Begge gjelder for hvilken som helst fast akse, og begge er vektorlikninger i tre dimensjoner; det er konstansen av $I$ som er skillet.",
    },
    {
      question: "En kompakt kule kastes uten rotasjon med senterfarten $8{,}00\\,\\text{m/s}$ på et vannrett underlag med glidefriksjonskoeffisient $0{,}250$. Hvor lang tid går det før den ruller rent?",
      options: ["$0{,}932\\,\\text{s}$", "$1{,}30\\,\\text{s}$", "$3{,}26\\,\\text{s}$", "$0{,}466\\,\\text{s}$"],
      explanation: "De to Newton-likningene gir $V(t)=V_0-\\mu gt$ og $\\omega(t)=5\\mu gt/(2R)$, og ren rulling nås når $V=R\\omega$: $t=2V_0/(7\\mu g)=0{,}932\\,\\text{s}$. Alternativet som er litt større, har brukt 5 i stedet for 7 i nevneren, altså glemt bidraget fra rotasjonslikningen. Det største alternativet er tiden til kula ville stanset helt hvis den bare ble bremset. Det minste er halve den riktige tiden, fra å glemme faktoren 2 i telleren.",
    },
    {
      question: "En kompakt kule kastes uten rotasjon med senterfarten $6{,}50\\,\\text{m/s}$ på et vannrett underlag med glidefriksjonskoeffisient $0{,}180$. Hvor lang tid går det før den ruller rent?",
      options: ["$1{,}05\\,\\text{s}$", "$1{,}47\\,\\text{s}$", "$3{,}68\\,\\text{s}$", "$0{,}526\\,\\text{s}$"],
      explanation: "De to Newton-likningene gir $V(t)=V_0-\\mu gt$ og $\\omega(t)=5\\mu gt/(2R)$, og ren rulling nås når $V=R\\omega$: $t=2V_0/(7\\mu g)=1{,}05\\,\\text{s}$. Alternativet som er litt større, har brukt 5 i stedet for 7 i nevneren, altså glemt bidraget fra rotasjonslikningen. Det største alternativet er tiden til kula ville stanset helt hvis den bare ble bremset. Det minste er halve den riktige tiden, fra å glemme faktoren 2 i telleren.",
    },
    {
      question: "En kompakt kule kastes uten rotasjon med senterfarten $8{,}00\\,\\text{m/s}$. Hvor stor er senterfarten når den ruller rent?",
      options: ["$5{,}71\\,\\text{m/s}$", "$2{,}29\\,\\text{m/s}$", "$5{,}33\\,\\text{m/s}$", "$4{,}00\\,\\text{m/s}$"],
      explanation: "Overgangen ender ved $V=\\tfrac57V_0=5{,}71\\,\\text{m/s}$, uavhengig av både friksjonstall, radius og masse — friksjonen bestemmer bare hvor lang tid og hvor langt det tar. Alternativet $\\tfrac27V_0$ er den fartsENDRINGEN kula har gjennomgått, ikke sluttfarten. Alternativet $\\tfrac23V_0$ er svaret for en massiv sylinder, altså riktig metode med feil treghetsmoment. Halvparten av startfarten svarer til ingen kjent legemeform.",
    },
    {
      question: "En kompakt kule kastes uten rotasjon med senterfarten $12{,}00\\,\\text{m/s}$. Hvor stor er senterfarten når den ruller rent?",
      options: ["$8{,}57\\,\\text{m/s}$", "$3{,}43\\,\\text{m/s}$", "$8{,}00\\,\\text{m/s}$", "$6{,}00\\,\\text{m/s}$"],
      explanation: "Overgangen ender ved $V=\\tfrac57V_0=8{,}57\\,\\text{m/s}$, uavhengig av både friksjonstall, radius og masse — friksjonen bestemmer bare hvor lang tid og hvor langt det tar. Alternativet $\\tfrac27V_0$ er den fartsENDRINGEN kula har gjennomgått, ikke sluttfarten. Alternativet $\\tfrac23V_0$ er svaret for en massiv sylinder, altså riktig metode med feil treghetsmoment. Halvparten av startfarten svarer til ingen kjent legemeform.",
    },
    {
      question: "En homogen stang med lengde $1{,}200\\,\\text{m}$ er hengslet i den ene enden og slippes fra loddrett stilling. Hvor stor er vinkelfarten når stanga er vannrett?",
      options: ["$4{,}95\\,\\text{rad/s}$", "$4{,}04\\,\\text{rad/s}$", "$3{,}50\\,\\text{rad/s}$", "$7{,}00\\,\\text{rad/s}$"],
      explanation: "Energibevaring med fallhøyden $L/2$ for massesenteret og $I_A=\\tfrac13ML^2$ gir $\\omega=\\sqrt{3g/L}=4{,}95\\,\\text{rad/s}$. Massen faller ut. Alternativet med $\\sqrt{2g/L}$ kommer av å bruke $ML^2$ som treghetsmoment, altså stanga behandlet som en punktmasse i enden. Det minste alternativet har glemt faktoren $\\tfrac12$ i fallhøyden. Det største har brukt full fallhøyde $L$ i stedet for $L/2$.",
    },
    {
      question: "En homogen stang med lengde $0{,}900\\,\\text{m}$ er hengslet i den ene enden og slippes fra loddrett stilling. Hvor stor er vinkelfarten når stanga er vannrett?",
      options: ["$5{,}72\\,\\text{rad/s}$", "$4{,}67\\,\\text{rad/s}$", "$4{,}04\\,\\text{rad/s}$", "$8{,}09\\,\\text{rad/s}$"],
      explanation: "Energibevaring med fallhøyden $L/2$ for massesenteret og $I_A=\\tfrac13ML^2$ gir $\\omega=\\sqrt{3g/L}=5{,}72\\,\\text{rad/s}$. Massen faller ut. Alternativet med $\\sqrt{2g/L}$ kommer av å bruke $ML^2$ som treghetsmoment, altså stanga behandlet som en punktmasse i enden. Det minste alternativet har glemt faktoren $\\tfrac12$ i fallhøyden. Det største har brukt full fallhøyde $L$ i stedet for $L/2$.",
    },
    {
      question: "Et gyroskop har treghetsmoment $4{,}00\\cdot10^{-3}\\,\\text{kg}\\cdot\\text{m}^2$ om spinnaksen og spinner med $180\\,\\text{rad/s}$. Hjulet har masse $0{,}300\\,\\text{kg}$, og massesenteret ligger $0{,}0500\\,\\text{m}$ vannrett fra opplagringspunktet. Hvor stor er presesjonsvinkelfarten?",
      options: ["$0{,}204\\,\\text{rad/s}$", "$0{,}106\\,\\text{rad/s}$", "$0{,}0208\\,\\text{rad/s}$", "$1{,}28\\,\\text{rad/s}$"],
      explanation: "$\\Omega=\\tau/L=Mgr/(I_0\\omega)=0{,}204\\,\\text{rad/s}$, altså mer enn åtte hundre ganger langsommere enn spinnet. Alternativet som er langt større, har multiplisert med $I_0\\omega$ i stedet for å dividere. Alternativet som er lite, har glemt tyngdeakselerasjonen i momentet. Verdien som er $2\\pi$ ganger fasiten, kommer av en omregning som ikke skal gjøres — svaret er allerede en vinkelfart.",
    },
    {
      question: "Hva skjer med presesjonen når spinnet til en snurrebasse langsomt bremses ned av friksjon?",
      options: ["Presesjonen blir raskere, fordi $\\Omega$ er omvendt proporsjonal med spinnets $\\omega$", "Presesjonen blir langsommere, fordi all rotasjon i systemet avtar samtidig", "Presesjonen er uendret, fordi den bare avhenger av tyngden og geometrien", "Presesjonen snur retning når spinnet kommer under en kritisk verdi"],
      explanation: "Uttrykket $\\Omega=Mgr/(I_0\\omega)$ har spinnets $\\omega$ i nevneren, så avtakende spinn gir raskere presesjon — det er nettopp den økende vaggingen du ser før en snurrebasse velter. Til slutt er $\\Omega$ ikke lenger liten mot $\\omega$, og tilnærmingen bryter sammen. Retningen på presesjonen bestemmes av retningen på momentet og spinnet, og den snur ikke av seg selv.",
    },
  ],
  'tfy4115-4-3': [
    {
      question: "En kraft på $80{,}0\\,\\text{N}$ virker i avstanden $0{,}350\\,\\text{m}$ fra et momentpunkt, i vinkelen $50^\\circ$ med linja fra punktet til angrepspunktet. Hvor stort er momentet?",
      options: ["$21{,}4\\,\\text{N}\\cdot\\text{m}$", "$28{,}0\\,\\text{N}\\cdot\\text{m}$", "$18{,}0\\,\\text{N}\\cdot\\text{m}$", "$61{,}3\\,\\text{N}\\cdot\\text{m}$"],
      explanation: "$\\tau=rF\\sin\\phi=21{,}4\\,\\text{N}\\cdot\\text{m}$, der $r\\sin\\phi$ er den vinkelrette avstanden til kraftens virkelinje. Det største alternativet bruker hele avstanden som momentarm, altså $\\sin\\phi$ glemt. Alternativet med kosinus har byttet om de to trigonometriske funksjonene. Verdien uten avstanden har glemt avstanden og har dermed feil dimensjon.",
    },
    {
      question: "En kraft på $45{,}0\\,\\text{N}$ virker i avstanden $0{,}600\\,\\text{m}$ fra et momentpunkt, i vinkelen $25^\\circ$ med linja fra punktet til angrepspunktet. Hvor stort er momentet?",
      options: ["$11{,}4\\,\\text{N}\\cdot\\text{m}$", "$27{,}0\\,\\text{N}\\cdot\\text{m}$", "$24{,}5\\,\\text{N}\\cdot\\text{m}$", "$19{,}0\\,\\text{N}\\cdot\\text{m}$"],
      explanation: "$\\tau=rF\\sin\\phi=11{,}4\\,\\text{N}\\cdot\\text{m}$, der $r\\sin\\phi$ er den vinkelrette avstanden til kraftens virkelinje. Det største alternativet bruker hele avstanden som momentarm, altså $\\sin\\phi$ glemt. Alternativet med kosinus har byttet om de to trigonometriske funksjonene. Verdien uten avstanden har glemt avstanden og har dermed feil dimensjon.",
    },
    {
      question: "Et vippebrett er opplagret i midten. Et barn på $24{,}0\\,\\text{kg}$ sitter $1{,}800\\,\\text{m}$ fra opplagringspunktet. Hvor langt fra midten må et barn på $32{,}0\\,\\text{kg}$ sitte for at brettet skal balansere?",
      options: ["$1{,}35\\,\\text{m}$", "$2{,}40\\,\\text{m}$", "$1{,}80\\,\\text{m}$", "$0{,}450\\,\\text{m}$"],
      explanation: "Momentbalanse om opplagringspunktet gir $m_1x_1=m_2x_2$, altså $x_2=1{,}35\\,\\text{m}$ — det tyngste barnet må sitte nærmest midten. Alternativet som er større enn utgangspunktet, har snudd masseforholdet. Alternativet som er likt utgangspunktet, forutsetter at avstandene skal være like. Det minste alternativet bruker massedifferansen i stedet for masseforholdet. Merk at $g$ faller ut, så svaret ville vært det samme på Månen.",
    },
    {
      question: "Et vippebrett er opplagret i midten. Et barn på $18{,}0\\,\\text{kg}$ sitter $1{,}500\\,\\text{m}$ fra opplagringspunktet. Hvor langt fra midten må et barn på $27{,}0\\,\\text{kg}$ sitte for at brettet skal balansere?",
      options: ["$1{,}00\\,\\text{m}$", "$2{,}25\\,\\text{m}$", "$1{,}50\\,\\text{m}$", "$0{,}500\\,\\text{m}$"],
      explanation: "Momentbalanse om opplagringspunktet gir $m_1x_1=m_2x_2$, altså $x_2=1{,}00\\,\\text{m}$ — det tyngste barnet må sitte nærmest midten. Alternativet som er større enn utgangspunktet, har snudd masseforholdet. Alternativet som er likt utgangspunktet, forutsetter at avstandene skal være like. Det minste alternativet bruker massedifferansen i stedet for masseforholdet. Merk at $g$ faller ut, så svaret ville vært det samme på Månen.",
    },
    {
      question: "En homogen bjelke med masse $40{,}0\\,\\text{kg}$ er festet i veggen med et hengsel og holdes vannrett av en snor fra ytterenden, i vinkelen $35^\\circ$ med bjelken. Hvor stort er strekket i snora?",
      options: ["$342{,}1\\,\\text{N}$", "$684{,}1\\,\\text{N}$", "$239{,}5\\,\\text{N}$", "$196{,}2\\,\\text{N}$"],
      explanation: "Momentpunkt i hengselet gir $S\\sin\\phi\\cdot L=Mg\\cdot L/2$, altså $S=Mg/(2\\sin\\phi)=342{,}1\\,\\text{N}$ — bjelkens lengde faller ut. Det største alternativet har glemt faktoren $\\tfrac12$, altså plassert tyngden i ytterenden i stedet for i midten. Alternativet med kosinus har forvekslet komponenten langs bjelken med den vinkelrette. Det minste alternativet er halve tyngden, altså vinkelen glemt helt.",
    },
    {
      question: "En homogen bjelke med masse $25{,}0\\,\\text{kg}$ er festet i veggen med et hengsel og holdes vannrett av en snor fra ytterenden, i vinkelen $50^\\circ$ med bjelken. Hvor stort er strekket i snora?",
      options: ["$160{,}1\\,\\text{N}$", "$320{,}2\\,\\text{N}$", "$190{,}8\\,\\text{N}$", "$122{,}6\\,\\text{N}$"],
      explanation: "Momentpunkt i hengselet gir $S\\sin\\phi\\cdot L=Mg\\cdot L/2$, altså $S=Mg/(2\\sin\\phi)=160{,}1\\,\\text{N}$ — bjelkens lengde faller ut. Det største alternativet har glemt faktoren $\\tfrac12$, altså plassert tyngden i ytterenden i stedet for i midten. Alternativet med kosinus har forvekslet komponenten langs bjelken med den vinkelrette. Det minste alternativet er halve tyngden, altså vinkelen glemt helt.",
    },
    {
      question: "Samme bjelke ($40{,}0\\,\\text{kg}$, snor i $35^\\circ$). Hvor stor er den loddrette komponenten av hengselkraften?",
      options: ["$196{,}2\\,\\text{N}$", "$392{,}4\\,\\text{N}$", "$280{,}2\\,\\text{N}$", "$0\\,\\text{N}$"],
      explanation: "Fra momentlikningen er $S\\sin\\phi=Mg/2$, så $H_y=Mg-S\\sin\\phi=Mg/2=196{,}2\\,\\text{N}$ — hengselet bærer nøyaktig halve tyngden, og snora den andre halvparten. Alternativet som er hele tyngden, forutsetter at snora ikke bærer noe loddrett. Alternativet som er større enn halve tyngden, er den VANNRETTE komponenten $S\\cos\\phi$. Og null ville betydd at snora bar hele tyngden alene.",
    },
    {
      question: "Hvorfor er det lønnsomt å legge momentpunktet i hengselet når du skal finne snorstrekket i en bjelke?",
      options: ["Fordi begge hengselkomponentene har momentarm null der og faller ut av likningen", "Fordi momentbetingelsen bare gjelder om punkter der en kraft virker", "Fordi tyngden får momentarm null når punktet legges i et hengsel", "Fordi snorstrekket er den eneste kraften som gir moment om et hengsel"],
      explanation: "Kreftene $H_x$ og $H_y$ virker gjennom hengselet, så momentarmen deres om det punktet er null, og begge forsvinner fra momentlikningen samtidig — du står igjen med én ukjent. Momentbetingelsen gjelder om hvilket som helst punkt, ikke bare der krefter virker. Tyngden har momentarmen $L/2$ om hengselet, ikke null. Og både tyngden og snorkraften gir moment om hengselet.",
    },
    {
      question: "Hva skjer med snorstrekket i en bjelke med hengsel når snorvinkelen $\\phi$ med bjelken gjøres mindre?",
      options: ["Strekket øker, fordi $\\sin\\phi$ står i nevneren i $S=Mg/(2\\sin\\phi)$", "Strekket avtar, fordi snora får en lengre momentarm når den legges flatere", "Strekket er uendret, fordi det bare avhenger av bjelkens masse", "Strekket avtar til det halve når vinkelen halveres, siden $S$ er omvendt proporsjonal med $\\phi$"],
      explanation: "Med $S=Mg/(2\\sin\\phi)$ vokser strekket når $\\sin\\phi$ minker: en nesten vannrett snor må dra voldsomt for å gi den samme vinkelrette komponenten. Momentarmen for snorkraften er $L$ uansett; det er komponenten $S\\sin\\phi$ som endres. Strekket avhenger av både masse og vinkel. Og sammenhengen er omvendt proporsjonal med $\\sin\\phi$, ikke med $\\phi$ selv — den er nesten den samme for små vinkler, men ikke for store.",
    },
    {
      question: "Et homogent stupebrett ($30{,}0\\,\\text{kg}$, lengde $4{,}40\\,\\text{m}$) ligger på to opplagringer, i $x=0$ og $x=1{,}500\\,\\text{m}$. En stuper på $60{,}0\\,\\text{kg}$ står i den frie enden. Hvor stor er kraften fra den ytterste opplagringen?",
      options: ["$2158\\,\\text{N}$", "$882{,}9\\,\\text{N}$", "$588{,}6\\,\\text{N}$", "$1079\\,\\text{N}$"],
      explanation: "Momentpunkt i den innerste opplagringen gir $N_B\\cdot x_B=M_pg\\cdot L/2+m_dg\\cdot L$, altså $N_B=2158\\,\\text{N}$ — STØRRE enn den samlede tyngden, fordi den også må balansere nedholdet i den innerste opplagringen. Alternativet som er lik den samlede tyngden, forutsetter at all vekt bæres av den ene opplagringen uten nedhold. Alternativet som er stuperens tyngde alene, glemmer brettet og momentarmene. Det minste alternativet er halve fasiten.",
    },
    {
      question: "Samme stupebrett. Hvor stor er kraften fra den INNERSTE opplagringen, og hvilken vei peker den?",
      options: ["$-1275\\,\\text{N}$", "$1275\\,\\text{N}$", "$294{,}3\\,\\text{N}$", "$0\\,\\text{N}$"],
      explanation: "Kraftbetingelsen loddrett gir $N_A=(M_p+m_d)g-N_B=-1275\\,\\text{N}$, altså et NEGATIVT tall når kraften er regnet positiv oppover: opplagringen må trekke brettet NED. Det er derfor et stupebrett er boltet fast innerst. Alternativet med motsatt fortegn har kastet minustegnet og dermed snudd retningen. Alternativet som er brettets egen tyngde, kommer av å trekke fra bare stuperens vekt. Og null ville betydd at brettet balanserte om den ytterste opplagringen alene.",
    },
    {
      question: "Hva betyr det når du løser for en opplagerkraft og får et negativt tall?",
      options: ["At kraften peker motsatt vei av den du tegnet inn på frilegemediagrammet", "At du har regnet feil, siden krefter aldri kan være negative", "At legemet ikke er i likevekt og vil begynne å rotere", "At du må bytte momentpunkt og regne oppgaven på nytt"],
      explanation: "Fortegnet i svaret måles mot den retningen du valgte å tegne kraften i. Et negativt tall er derfor informasjon, ikke en feil: kraften peker den andre veien. Standardtilfellet er stupebrettet, der den innerste opplagringen må holde brettet ned. Krefter har retning, og et negativt fortegn i en valgt retning er helt legitimt. Likevekten er ikke brutt, og du behøver ikke bytte momentpunkt — svaret er riktig som det står.",
    },
    {
      question: "En homogen stige med masse $18{,}0\\,\\text{kg}$ står mot en GLATT vegg i vinkelen $62^\\circ$ med gulvet. Hvor stor er kraften fra veggen?",
      options: ["$46{,}94\\,\\text{N}$", "$176{,}6\\,\\text{N}$", "$88{,}29\\,\\text{N}$", "$166{,}0\\,\\text{N}$"],
      explanation: "Momentpunkt i stigens fot gir $N_\\text{vegg}L\\sin\\theta=MgL\\cos\\theta/2$, altså $N_\\text{vegg}=Mg/(2\\tan\\theta)=46{,}94\\,\\text{N}$ — lengden faller ut. Alternativet som er hele tyngden, er normalkraften fra GULVET, ikke fra veggen. Alternativet som er halve tyngden, har glemt tangensfaktoren. Verdien med $\\tan\\theta$ i telleren i stedet for i nevneren har sinus og kosinus byttet om.",
    },
    {
      question: "En homogen stige med masse $22{,}0\\,\\text{kg}$ står mot en GLATT vegg i vinkelen $55^\\circ$ med gulvet. Hvor stor er kraften fra veggen?",
      options: ["$75{,}56\\,\\text{N}$", "$215{,}8\\,\\text{N}$", "$107{,}9\\,\\text{N}$", "$154{,}1\\,\\text{N}$"],
      explanation: "Momentpunkt i stigens fot gir $N_\\text{vegg}L\\sin\\theta=MgL\\cos\\theta/2$, altså $N_\\text{vegg}=Mg/(2\\tan\\theta)=75{,}56\\,\\text{N}$ — lengden faller ut. Alternativet som er hele tyngden, er normalkraften fra GULVET, ikke fra veggen. Alternativet som er halve tyngden, har glemt tangensfaktoren. Verdien med $\\tan\\theta$ i telleren i stedet for i nevneren har sinus og kosinus byttet om.",
    },
    {
      question: "En homogen stige står mot en glatt vegg i vinkelen $62^\\circ$ med gulvet. Hva er den minste friksjonskoeffisienten gulvet må ha for at stigen ikke skal skli?",
      options: ["$0{,}266$", "$3{,}76$", "$0{,}940$", "$0{,}532$"],
      explanation: "Friksjonen må balansere veggkraften, og gulvet bærer hele tyngden: $\\mu_s\\ge N_\\text{vegg}/N_\\text{gulv}=1/(2\\tan\\theta)=0{,}266$. Kravet avhenger BARE av vinkelen — verken masse eller lengde inngår. Alternativet som er det største, er $2\\tan\\theta$, altså hele uttrykket snudd. Alternativet $\\tan\\theta/2$ har snudd brøken inne i uttrykket. Og $1/\\tan\\theta$ mangler faktoren 2 fra tyngdens momentarm $L/2$.",
    },
    {
      question: "En homogen stige står mot en glatt vegg i vinkelen $50^\\circ$ med gulvet. Hva er den minste friksjonskoeffisienten gulvet må ha for at stigen ikke skal skli?",
      options: ["$0{,}420$", "$2{,}38$", "$0{,}596$", "$0{,}839$"],
      explanation: "Friksjonen må balansere veggkraften, og gulvet bærer hele tyngden: $\\mu_s\\ge N_\\text{vegg}/N_\\text{gulv}=1/(2\\tan\\theta)=0{,}420$. Kravet avhenger BARE av vinkelen — verken masse eller lengde inngår. Alternativet som er det største, er $2\\tan\\theta$, altså hele uttrykket snudd. Alternativet $\\tan\\theta/2$ har snudd brøken inne i uttrykket. Og $1/\\tan\\theta$ mangler faktoren 2 fra tyngdens momentarm $L/2$.",
    },
    {
      question: "En last på $120{,}0\\,\\text{kg}$ løftes med en talje der fire tau bærer den bevegelige trinsa. Hvor stor kraft må du trekke med?",
      options: ["$294{,}3\\,\\text{N}$", "$1177\\,\\text{N}$", "$588{,}6\\,\\text{N}$", "$147{,}2\\,\\text{N}$"],
      explanation: "Strekket er det samme i hele snora, og fire bærende tau deler lasten: $F=Mg/4=294{,}3\\,\\text{N}$. Alternativet som er hele tyngden, er kraften uten talje. Alternativet som er halvparten av tyngden, teller bare to bærende tau. Det minste alternativet teller åtte. Merk at du må trekke fire ganger så mye snor som lasten heves — arbeidet er uendret.",
    },
    {
      question: "Et skap med bredde $w$ og høyde $h$ skyves vannrett i toppkanten. Når tipper det i stedet for å skli?",
      options: ["Når $\\mu_s>w/(2h)$ — grensen er ren geometri og uavhengig av massen", "Når $\\mu_s>2h/w$, altså når skapet er lavt og bredt", "Når $\\mu_s>mgw/(2h)$, siden tyngden inngår i tippekraften", "Alltid, siden en vannrett kraft i toppen aldri kan gi gliding"],
      explanation: "Tippekraften er $mgw/(2h)$ og glidekraften $\\mu_smg$; skapet tipper først når den første er minst, altså når $\\mu_s>w/(2h)$. Massen faller ut på begge sider, så grensen er ren geometri: høyt og smalt tipper, lavt og bredt sklir. Alternativet med $2h/w$ er forholdet snudd. Alternativet med $mg$ i kriteriet sammenligner en kraft med et dimensjonsløst tall. Og en vannrett kraft kan absolutt gi gliding — det er det som skjer når friksjonen er liten.",
    },
  ],
  'tfy4115-4-4': [
    {
      question: "Et tynt kuleskall har masse $1{,}80\\,\\text{kg}$ og radius $0{,}220\\,\\text{m}$. Hva er treghetsmomentet om en akse som tangerer overflaten?",
      options: ["$0{,}1452\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}05808\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}1220\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}08712\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Steiner med $d=R$: $I=\\tfrac23MR^2+MR^2=\\tfrac53MR^2=0{,}1452\\,\\text{kg}\\cdot\\text{m}^2$. Det minste alternativet er skallet om sentrumsaksen, altså Steiner-leddet glemt. Alternativet som ligger nærmest under fasiten, er $\\tfrac75MR^2$ — svaret for en KOMPAKT kule om tangentaksen, altså feil linje på arket. Alternativet $MR^2$ er Steiner-leddet alene, uten skallets eget bidrag.",
    },
    {
      question: "Et tynt kuleskall har masse $3{,}20\\,\\text{kg}$ og radius $0{,}150\\,\\text{m}$. Hva er treghetsmomentet om en akse som tangerer overflaten?",
      options: ["$0{,}1200\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}04800\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}1008\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}07200\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Steiner med $d=R$: $I=\\tfrac23MR^2+MR^2=\\tfrac53MR^2=0{,}1200\\,\\text{kg}\\cdot\\text{m}^2$. Det minste alternativet er skallet om sentrumsaksen, altså Steiner-leddet glemt. Alternativet som ligger nærmest under fasiten, er $\\tfrac75MR^2$ — svaret for en KOMPAKT kule om tangentaksen, altså feil linje på arket. Alternativet $MR^2$ er Steiner-leddet alene, uten skallets eget bidrag.",
    },
    {
      question: "En homogen skive ($2{,}60\\,\\text{kg}$, radius $0{,}180\\,\\text{m}$) henges opp i randen og roterer om en akse gjennom opphengspunktet, vinkelrett på skiveplanet. Hva er treghetsmomentet?",
      options: ["$0{,}1264\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}04212\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}1179\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}2106\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "$I=\\tfrac12MR^2+MR^2=\\tfrac32MR^2=0{,}1264\\,\\text{kg}\\cdot\\text{m}^2$. Det minste alternativet er skiva om sentrumsaksen (Steiner glemt). Alternativet rett under fasiten bruker kule-formelen $\\tfrac25MR^2$ før Steiner legges til. Det største alternativet legger $MR^2$ til $\\tfrac32MR^2$, altså Steiner brukt to ganger.",
    },
    {
      question: "En homogen stang ($0{,}700\\,\\text{kg}$, lengde $1{,}100\\,\\text{m}$) er hengslet i den ene enden, med en punktmasse på $2{,}00\\,\\text{kg}$ i den andre. Hva er treghetsmomentet om hengselaksen?",
      options: ["$2{,}7023\\,\\text{kg}\\cdot\\text{m}^2$", "$2{,}4906\\,\\text{kg}\\cdot\\text{m}^2$", "$1{,}0890\\,\\text{kg}\\cdot\\text{m}^2$", "$3{,}2670\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "Stanga har $\\tfrac13M_sL^2$ (allerede om enden), punktmassen $m_pL^2$: $I=2{,}7023\\,\\text{kg}\\cdot\\text{m}^2$. Alternativet rett under fasiten bruker $\\tfrac{1}{12}M_sL^2$, altså stanga om midtpunktet. Alternativet med det laveste tallet bruker $\\tfrac13$ på begge leddene — men en punktmasse i avstanden $L$ har $mL^2$. Det største alternativet legger hele massen i enden, altså stanga behandlet som en punktmasse.",
    },
    {
      question: "Når skal du IKKE legge til et Steiner-ledd?",
      options: ["Når uttrykket du slår opp allerede gjelder om den aksen oppgaven spør etter, som $\\tfrac13ML^2$ for en stang om endepunktet", "Når legemet er en punktmasse, siden Steiners sats bare gjelder for utstrakte legemer", "Når avstanden $d$ er mindre enn legemets radius, siden leddet da er neglisjerbart", "Når aksen ligger utenfor legemet, siden satsen bare gjelder for akser gjennom materialet"],
      explanation: "$\\tfrac13ML^2$ ER stanga om endepunktet — Steiner er allerede regnet inn ($\\tfrac{1}{12}+\\tfrac14=\\tfrac13$), og et ekstra ledd blir dobbelttelling. En punktmasse trenger heller ikke satsen, men da er det fordi $mr^2$ dekker alt; satsen ville gitt samme svar med $I_\\text{CM}=0$. Leddet $Md^2$ er aldri neglisjerbart bare fordi $d<R$ — for en skive om randen er det dobbelt så stort som $I_\\text{CM}$. Og satsen gjelder utmerket for akser utenfor legemet.",
    },
    {
      question: "Hvorfor gir en akse LANGS et legeme mindre treghetsmoment enn en akse på tvers, for en lang stang?",
      options: ["Fordi den vinkelrette avstanden fra massen til aksen er liten når aksen ligger langs stanga", "Fordi massen er mindre når den måles langs lengderetningen", "Fordi Steiners sats gir negativt bidrag for akser langs legemet", "Fordi rotasjonsenergien er definert bare for akser på tvers av legemet"],
      explanation: "Treghetsmomentet teller massen med kvadratet av den VINKELRETTE avstanden til aksen. Ligger aksen langs en tynn stang, er alle avstandene små (av størrelsesorden stangens tykkelse), og treghetsmomentet blir nesten null. Massen er selvsagt den samme uansett akse, Steiner-leddet er alltid positivt, og rotasjonsenergien er definert for enhver akse.",
    },
    {
      question: "En massiv sylinder ($3{,}00\\,\\text{kg}$, radius $0{,}150\\,\\text{m}$) ruller rent mot høyre med senterfarten $2{,}40\\,\\text{m/s}$. Hva er dreieimpulsen om et punkt på underlaget?",
      options: ["$1{,}620\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$1{,}080\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}5400\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$1{,}512\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$"],
      explanation: "Ved ren rulling peker spinn og bane samme vei: $L=\\tfrac12mVR+mVR=\\tfrac32mVR=1{,}620\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$ — som også er $I_\\text{kontakt}\\omega$ med $I=\\tfrac32mR^2$ fra Steiner. Alternativet som er to tredjedeler av fasiten, er banebidraget alene. Det minste alternativet er spinnbidraget alene. Alternativet rett under fasiten er $\\tfrac75mVR$, altså kule-formelen brukt på en sylinder.",
    },
    {
      question: "En golfball ($0{,}250\\,\\text{kg}$, radius $0{,}0350\\,\\text{m}$) glir mot høyre med $25{,}00\\,\\text{m/s}$ og har baksnurr på $350\\,\\text{rad/s}$. Hva er den totale dreieimpulsen om et punkt på bakken?",
      options: ["$0{,}1759\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}2616\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}2188\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$0{,}04288\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$"],
      explanation: "Banebidraget $mVR=0{,}2188\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$ peker inn i papiret, spinnbidraget $\\tfrac25mR^2\\omega=0{,}04288\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$ ut av papiret (baksnurr er rotasjon mot klokka), så tallverdiene subtraheres: $0{,}1759\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$. Det største alternativet er summen, altså svaret med toppsnurr — ren fortegnsfeil, og det mest valgte gale alternativet i sjangeren. Alternativet mellom dem er banebidraget alene. Det minste er spinnbidraget alene.",
    },
    {
      question: "En massiv sylinder kastes uten rotasjon med senterfarten $5{,}00\\,\\text{m/s}$ på et vannrett underlag. Hvilken senterfart har den når den ruller rent?",
      options: ["$3{,}333\\,\\text{m/s}$", "$3{,}571\\,\\text{m/s}$", "$1{,}667\\,\\text{m/s}$", "$2{,}500\\,\\text{m/s}$"],
      explanation: "Med $I=cmR^2$ er sluttfarten $V_0/(1+c)$, og for en sylinder er $c=\\tfrac12$: $V=\\tfrac23V_0=3{,}333\\,\\text{m/s}$. Alternativet rett over fasiten er $\\tfrac57V_0$, altså svaret for en kompakt kule ($c=\\tfrac25$) — riktig metode, feil legeme. Det minste alternativet er fartsENDRINGEN $\\tfrac13V_0$, ikke sluttfarten. Og halve startfarten svarer ikke til noe kjent legeme.",
    },
    {
      question: "En massiv sylinder kastes uten rotasjon med senterfarten $9{,}00\\,\\text{m/s}$ på et vannrett underlag. Hvilken senterfart har den når den ruller rent?",
      options: ["$6{,}000\\,\\text{m/s}$", "$6{,}429\\,\\text{m/s}$", "$3{,}000\\,\\text{m/s}$", "$4{,}500\\,\\text{m/s}$"],
      explanation: "Med $I=cmR^2$ er sluttfarten $V_0/(1+c)$, og for en sylinder er $c=\\tfrac12$: $V=\\tfrac23V_0=6{,}000\\,\\text{m/s}$. Alternativet rett over fasiten er $\\tfrac57V_0$, altså svaret for en kompakt kule ($c=\\tfrac25$) — riktig metode, feil legeme. Det minste alternativet er fartsENDRINGEN $\\tfrac13V_0$, ikke sluttfarten. Og halve startfarten svarer ikke til noe kjent legeme.",
    },
    {
      question: "En dreieskive med treghetsmoment $8{,}00\\,\\text{kg}\\cdot\\text{m}^2$ roterer friksjonsfritt med $1{,}80\\,\\text{rad/s}$. En person på $25{,}0\\,\\text{kg}$ setter seg ned i kanten, $1{,}200\\,\\text{m}$ fra aksen. Hva blir vinkelfarten?",
      options: ["$0{,}3273\\,\\text{rad/s}$", "$1{,}800\\,\\text{rad/s}$", "$9{,}900\\,\\text{rad/s}$", "$0{,}3789\\,\\text{rad/s}$"],
      explanation: "Dreieimpulsen er bevart, og personen bidrar med $mR^2=36{,}0\\,\\text{kg}\\cdot\\text{m}^2$: $\\omega=I_1\\omega_1/I_2=0{,}3273\\,\\text{rad/s}$ — farten faller, siden treghetsmomentet økte. Alternativet som er lik startverdien, forutsetter at vinkelfarten er bevart. Det største alternativet har snudd forholdet mellom treghetsmomentene. Verdien som ligger nærmest fasiten ovenfra, bruker $mR$ i stedet for $mR^2$ i personens bidrag.",
    },
    {
      question: "En person på en friksjonsfri dreieskive trekker armene inn. Hva skjer med dreieimpuls, vinkelfart og kinetisk energi?",
      options: ["$L$ uendret, $\\omega$ øker, $K$ øker — økningen er arbeidet personen gjør", "$L$ uendret, $\\omega$ øker, $K$ uendret — energien kan ikke endres uten ytre kraft", "$L$ øker, $\\omega$ øker, $K$ øker — alle tre vokser sammen", "$L$ uendret, $\\omega$ uendret, $K$ øker — bare energien merker formendringen"],
      explanation: "Uten ytre moment er $L=I\\omega$ bevart, så $\\omega$ må øke når $I$ minker. Energien er $K=L^2/(2I)$ og øker derfor også — og økningen er nøyaktig det arbeidet personen gjør når hun trekker vektene innover mot aksen. Dreieimpulsen kan ikke øke uten ytre moment, energien er ikke beskyttet av bevaringsloven, og vinkelfarten må endre seg når $I$ gjør det.",
    },
    {
      question: "En homogen bjelke på $35{,}0\\,\\text{kg}$ er festet i veggen med hengsel og holdes vannrett av en snor fra ytterenden, i $42^\\circ$ med bjelken. Hvor stort er strekket?",
      options: ["$256{,}6\\,\\text{N}$", "$513{,}1\\,\\text{N}$", "$231{,}0\\,\\text{N}$", "$171{,}7\\,\\text{N}$"],
      explanation: "Momentpunkt i hengselet: $S\\sin\\phi\\cdot L=Mg\\cdot L/2$, altså $S=Mg/(2\\sin\\phi)=256{,}6\\,\\text{N}$ — lengden faller ut. Det største alternativet har glemt faktoren $\\tfrac12$, altså plassert tyngden i ytterenden. Alternativet med kosinus har byttet om de to trigonometriske funksjonene. Det minste alternativet er halve tyngden, altså vinkelen glemt.",
    },
    {
      question: "En homogen stige står mot en glatt vegg i $65^\\circ$ med gulvet. Hvor stor må friksjonskoeffisienten i gulvet minst være?",
      options: ["$0{,}2332$", "$4{,}289$", "$1{,}072$", "$0{,}4663$"],
      explanation: "$\\mu_s\\ge N_\\text{vegg}/N_\\text{gulv}=1/(2\\tan\\theta)=0{,}2332$ — uavhengig av både masse og lengde. Det største alternativet er hele uttrykket snudd. Alternativet $\\tan\\theta/2$ har snudd brøken inne i uttrykket. Og $1/\\tan\\theta$ mangler faktoren 2 som kommer fra tyngdens momentarm $L/2$.",
    },
    {
      question: "En homogen skive ($4{,}00\\,\\text{kg}$, radius $0{,}200\\,\\text{m}$) roterer friksjonsfritt om sin akse. En snor om randen bærer en masse på $1{,}500\\,\\text{kg}$ som slippes fra ro. Hvor stor er akselerasjonen?",
      options: ["$4{,}204\\,\\text{m/s}^2$", "$9{,}810\\,\\text{m/s}^2$", "$2{,}675\\,\\text{m/s}^2$", "$1{,}549\\,\\text{m/s}^2$"],
      explanation: "De to Newton-likningene med $a=\\alpha R$ gir $a=mg/(m+M/2)=4{,}204$ m/s². Skivas HALVE masse legger seg til i nevneren, fordi $I=\\tfrac12MR^2$. Alternativet $g$ er fritt fall, altså skiva behandlet som masseløs. Alternativet under fasiten bruker hele skivemassen i nevneren (ringformelen $MR^2$). Det minste alternativet bruker $2M$, altså en faktor 4 feil i treghetsmomentet.",
    },
    {
      question: "Hvorfor er det lurt å regne momentlikningen om et ANNET punkt til slutt i en statikkoppgave?",
      options: ["Fordi det er en nesten uavhengig kontroll som fanger både fortegnsfeil og feil momentarm", "Fordi momentbetingelsen bare er tilnærmet riktig om ett enkelt punkt", "Fordi det gir en ny likning som er nødvendig for å bestemme alle de ukjente", "Fordi de tre likevektslikningene ellers ikke er nok til å bestemme tre ukjente"],
      explanation: "Kontrollen bruker de samme kreftene, men helt andre momentarmer, og avslører derfor både gale fortegn og gale armer — for tjue sekunders arbeid. Momentbetingelsen er eksakt om hvilket som helst punkt, ikke tilnærmet. Og et nytt punkt gir INGEN ny uavhengig likning: de tre likningene $\\sum F_x=0$, $\\sum F_y=0$ og $\\sum\\tau_P=0$ er alt statikken har, og de er nok for tre ukjente.",
    },
  ],
  'tfy4115-5-1': [
    {
      question: "En masse på $0{,}350\\,\\text{kg}$ henger i en fjær med stivhet $85{,}0\\,\\text{N/m}$. Hva er egenfrekvensen $\\omega_0$?",
      options: ["$15{,}58\\,\\text{rad/s}$", "$2{,}480\\,\\text{rad/s}$", "$242{,}9\\,\\text{rad/s}$", "$0{,}06417\\,\\text{rad/s}$"],
      explanation: "$\\omega_0=\\sqrt{k/m}=15{,}58\\,\\text{rad/s}$. Alternativet som er $2\\pi$ ganger mindre, er frekvensen i hertz — riktig regning, feil størrelse, og sjangerens dyreste forveksling. Alternativet som er langt større, er forholdet $k/m$ uten kvadratrot. Det minste alternativet har snudd brøken under rottegnet.",
    },
    {
      question: "En masse på $1{,}200\\,\\text{kg}$ henger i en fjær med stivhet $300{,}0\\,\\text{N/m}$. Hva er egenfrekvensen $\\omega_0$?",
      options: ["$15{,}81\\,\\text{rad/s}$", "$2{,}516\\,\\text{rad/s}$", "$250{,}0\\,\\text{rad/s}$", "$0{,}06325\\,\\text{rad/s}$"],
      explanation: "$\\omega_0=\\sqrt{k/m}=15{,}81\\,\\text{rad/s}$. Alternativet som er $2\\pi$ ganger mindre, er frekvensen i hertz — riktig regning, feil størrelse, og sjangerens dyreste forveksling. Alternativet som er langt større, er forholdet $k/m$ uten kvadratrot. Det minste alternativet har snudd brøken under rottegnet.",
    },
    {
      question: "En masse på $0{,}350\\,\\text{kg}$ svinger i en fjær med stivhet $85{,}0\\,\\text{N/m}$. Hva er frekvensen?",
      options: ["$2{,}480\\,\\text{Hz}$", "$15{,}58\\,\\text{Hz}$", "$97{,}92\\,\\text{Hz}$", "$0{,}06417\\,\\text{Hz}$"],
      explanation: "$f=\\omega_0/(2\\pi)=\\sqrt{k/m}/(2\\pi)=2{,}480\\,\\text{Hz}$. Alternativet som er $2\\pi$ ganger større, er vinkelfrekvensen i rad/s. Det største alternativet har multiplisert med $2\\pi$ i stedet for å dividere, altså faktoren brukt to ganger i gal retning. Det minste alternativet er $1/\\omega_0$, som er perioden delt på $2\\pi$ — ingen av de tre er en frekvens.",
    },
    {
      question: "En masse på $0{,}800\\,\\text{kg}$ svinger i en fjær med stivhet $120{,}0\\,\\text{N/m}$. Hva er frekvensen?",
      options: ["$1{,}949\\,\\text{Hz}$", "$12{,}25\\,\\text{Hz}$", "$76{,}95\\,\\text{Hz}$", "$0{,}08165\\,\\text{Hz}$"],
      explanation: "$f=\\omega_0/(2\\pi)=\\sqrt{k/m}/(2\\pi)=1{,}949\\,\\text{Hz}$. Alternativet som er $2\\pi$ ganger større, er vinkelfrekvensen i rad/s. Det største alternativet har multiplisert med $2\\pi$ i stedet for å dividere, altså faktoren brukt to ganger i gal retning. Det minste alternativet er $1/\\omega_0$, som er perioden delt på $2\\pi$ — ingen av de tre er en frekvens.",
    },
    {
      question: "En masse på $0{,}250\\,\\text{kg}$ svinger i en fjær med frekvensen $3{,}20\\,\\text{Hz}$. Hva er fjærstivheten?",
      options: ["$101{,}1\\,\\text{N/m}$", "$2{,}560\\,\\text{N/m}$", "$5{,}027\\,\\text{N/m}$", "$16{,}08\\,\\text{N/m}$"],
      explanation: "$k=m\\omega_0^2=m(2\\pi f)^2=101{,}1\\,\\text{N/m}$. Alternativet som er nesten førti ganger mindre, er $mf^2$ med faktoren $(2\\pi)^2=39{,}48$ glemt — den vanligste feilen her. Alternativet mellom dem er $m\\cdot2\\pi f$, altså uten kvadrering. Og alternativet som er $2\\pi$ ganger mindre enn fasiten, har dividert bort én faktor $2\\pi$ for mye.",
    },
    {
      question: "En masse på $0{,}500\\,\\text{kg}$ svinger i en fjær med frekvensen $2{,}50\\,\\text{Hz}$. Hva er fjærstivheten?",
      options: ["$123{,}4\\,\\text{N/m}$", "$3{,}125\\,\\text{N/m}$", "$7{,}854\\,\\text{N/m}$", "$19{,}63\\,\\text{N/m}$"],
      explanation: "$k=m\\omega_0^2=m(2\\pi f)^2=123{,}4\\,\\text{N/m}$. Alternativet som er nesten førti ganger mindre, er $mf^2$ med faktoren $(2\\pi)^2=39{,}48$ glemt — den vanligste feilen her. Alternativet mellom dem er $m\\cdot2\\pi f$, altså uten kvadrering. Og alternativet som er $2\\pi$ ganger mindre enn fasiten, har dividert bort én faktor $2\\pi$ for mye.",
    },
    {
      question: "To fjærer med stivhet $240{,}0\\,\\text{N/m}$ og $160{,}0\\,\\text{N/m}$ kobles i SERIE. Hva er den samlede stivheten?",
      options: ["$96{,}00\\,\\text{N/m}$", "$400{,}0\\,\\text{N/m}$", "$200{,}0\\,\\text{N/m}$", "$196{,}0\\,\\text{N/m}$"],
      explanation: "Serie: $1/k=1/k_1+1/k_2$, altså $k=k_1k_2/(k_1+k_2)=96{,}00\\,\\text{N/m}$ — mindre enn den minste av de to, som det alltid må være. Det største alternativet er parallellformelen $k_1+k_2$. Alternativet som er gjennomsnittet av de to stivhetene, er verken serie eller parallell. Og det geometriske gjennomsnittet $\\sqrt{k_1k_2}$ er heller ikke en kobling som finnes.",
    },
    {
      question: "To fjærer med stivhet $320{,}0\\,\\text{N/m}$ og $480{,}0\\,\\text{N/m}$ kobles i SERIE. Hva er den samlede stivheten?",
      options: ["$192{,}0\\,\\text{N/m}$", "$800{,}0\\,\\text{N/m}$", "$400{,}0\\,\\text{N/m}$", "$391{,}9\\,\\text{N/m}$"],
      explanation: "Serie: $1/k=1/k_1+1/k_2$, altså $k=k_1k_2/(k_1+k_2)=192{,}0\\,\\text{N/m}$ — mindre enn den minste av de to, som det alltid må være. Det største alternativet er parallellformelen $k_1+k_2$. Alternativet som er gjennomsnittet av de to stivhetene, er verken serie eller parallell. Og det geometriske gjennomsnittet $\\sqrt{k_1k_2}$ er heller ikke en kobling som finnes.",
    },
    {
      question: "Fjærene i forrige spørsmål ($240{,}0$ og $160{,}0\\,\\text{N/m}$) står i serie og bærer $0{,}600\\,\\text{kg}$. Hva er frekvensen?",
      options: ["$2{,}013\\,\\text{Hz}$", "$4{,}109\\,\\text{Hz}$", "$12{,}65\\,\\text{Hz}$", "$4{,}026\\,\\text{Hz}$"],
      explanation: "Samlet stivhet i serie er $96{,}0\\,\\text{N/m}$, som gir $f=\\sqrt{k/m}/(2\\pi)=2{,}013\\,\\text{Hz}$. Alternativet som er dobbelt så stort, bruker parallellstivheten $k_1+k_2$ på et seriesystem. Det største alternativet er vinkelfrekvensen i rad/s. Og alternativet som er dobbelt fasiten, har delt på $\\pi$ i stedet for på $2\\pi$.",
    },
    {
      question: "Hvorfor blir en seriekobling av to fjærer mykere enn hver av dem alene?",
      options: ["Fordi begge fjærene må strekkes for at massen skal flytte seg, så de to strekkene legges sammen", "Fordi kraften deles på de to fjærene, slik at hver av dem strekkes mindre", "Fordi den lengste fjæren dominerer og bestemmer den samlede stivheten alene", "Fordi seriekobling halverer kraften i hver fjær og dermed halverer stivheten"],
      explanation: "I serie går den **samme** kraften gjennom begge fjærene, og hver strekkes like mye som den ville gjort alene — men massen flytter seg summen av de to strekkene. Dobbelt så mye utslag for samme kraft er nettopp en halvert stivhet. Det er i PARALLELL at kraften deles. Lengden inngår ikke i formelen, bare stivhetene. Og halveringen gjelder bare for to LIKE fjærer.",
    },
    {
      question: "To like fjærer med stivhet $k$ bærer samme masse. Hvor mye raskere svinger parallellkoblingen enn seriekoblingen?",
      options: ["Dobbelt så raskt, siden stivheten er fire ganger større og frekvensen går som kvadratroten", "Fire ganger så raskt, siden stivheten er fire ganger større", "Halvparten så raskt, siden parallellkobling gjør systemet mykere", "Like raskt, siden det er den samme massen og de samme to fjærene"],
      explanation: "Parallell gir $2k$, serie gir $k/2$, altså en faktor 4 i stivhet. Frekvensen går som $\\sqrt k$, så faktoren i frekvens er $\\sqrt4=2$. Fire ganger ville krevd 16 ganger stivheten. Parallellkobling gjør systemet stivere, ikke mykere. Og at det er samme masse og samme fjærer, betyr ikke at koblingen er uten betydning — det er nettopp koblingen som avgjør.",
    },
    {
      question: "En homogen skive med masse $1{,}80\\,\\text{kg}$ og radius $0{,}150\\,\\text{m}$ henges opp i randen og svinger med små utslag. Hva er svingetiden?",
      options: ["$0{,}9516\\,\\text{s}$", "$0{,}5494\\,\\text{s}$", "$0{,}7769\\,\\text{s}$", "$1{,}099\\,\\text{s}$"],
      explanation: "$I_A=\\tfrac32MR^2$ (Steiner) og $d=R$ gir $T=2\\pi\\sqrt{3R/(2g)}=0{,}9516\\,\\text{s}$ — massen faller ut. Det minste alternativet er $2\\pi\\sqrt{R/(2g)}$, altså Steiner-leddet glemt, som gir en for kort periode. Alternativet mellom dem er $2\\pi\\sqrt{R/g}$, skiva behandlet som en punktmasse i avstanden $R$. Det største alternativet svarer til en effektiv lengde $2R$ i stedet for $\\tfrac32R$.",
    },
    {
      question: "En homogen skive med masse $2{,}40\\,\\text{kg}$ og radius $0{,}220\\,\\text{m}$ henges opp i randen og svinger med små utslag. Hva er svingetiden?",
      options: ["$1{,}152\\,\\text{s}$", "$0{,}6653\\,\\text{s}$", "$0{,}9409\\,\\text{s}$", "$1{,}331\\,\\text{s}$"],
      explanation: "$I_A=\\tfrac32MR^2$ (Steiner) og $d=R$ gir $T=2\\pi\\sqrt{3R/(2g)}=1{,}152\\,\\text{s}$ — massen faller ut. Det minste alternativet er $2\\pi\\sqrt{R/(2g)}$, altså Steiner-leddet glemt, som gir en for kort periode. Alternativet mellom dem er $2\\pi\\sqrt{R/g}$, skiva behandlet som en punktmasse i avstanden $R$. Det største alternativet svarer til en effektiv lengde $2R$ i stedet for $\\tfrac32R$.",
    },
    {
      question: "En homogen stang med lengde $1{,}000\\,\\text{m}$ henges opp i den ene enden og svinger med små utslag. Hva er svingetiden?",
      options: ["$1{,}638\\,\\text{s}$", "$2{,}006\\,\\text{s}$", "$1{,}419\\,\\text{s}$", "$1{,}158\\,\\text{s}$"],
      explanation: "$I_A=\\tfrac13ML^2$ og $d=L/2$ gir $T=2\\pi\\sqrt{2L/(3g)}=1{,}638\\,\\text{s}$, altså en effektiv pendellengde $\\tfrac23L$. Det største alternativet er $2\\pi\\sqrt{L/g}$, altså stanga behandlet som en punktmasse i enden (matematisk pendel). De to minste alternativene svarer til effektive lengder $L/2$ og $L/3$, som du får ved å bruke $d=L$ med feil treghetsmoment.",
    },
    {
      question: "En homogen stang med lengde $0{,}600\\,\\text{m}$ henges opp i den ene enden og svinger med små utslag. Hva er svingetiden?",
      options: ["$1{,}269\\,\\text{s}$", "$1{,}554\\,\\text{s}$", "$1{,}099\\,\\text{s}$", "$0{,}8971\\,\\text{s}$"],
      explanation: "$I_A=\\tfrac13ML^2$ og $d=L/2$ gir $T=2\\pi\\sqrt{2L/(3g)}=1{,}269\\,\\text{s}$, altså en effektiv pendellengde $\\tfrac23L$. Det største alternativet er $2\\pi\\sqrt{L/g}$, altså stanga behandlet som en punktmasse i enden (matematisk pendel). De to minste alternativene svarer til effektive lengder $L/2$ og $L/3$, som du får ved å bruke $d=L$ med feil treghetsmoment.",
    },
    {
      question: "Hvilket treghetsmoment skal inn i $T=2\\pi\\sqrt{I/(Mgd)}$ for en fysisk pendel?",
      options: ["Treghetsmomentet om opphengspunktet, funnet med Steiners sats", "Treghetsmomentet om massesenteret, siden tyngden virker der", "Treghetsmomentet om en akse i legemets plan gjennom massesenteret", "Summen av treghetsmomentene om massesenteret og om opphengspunktet"],
      explanation: "Pendelen roterer om opphengspunktet, så $I$ må være om **den** aksen: $I_A=I_\\text{CM}+Md^2$. Å bruke $I_\\text{CM}$ gir en for liten $I$ og dermed en for kort periode — det er sjangerens vanligste feil. Aksen skal dessuten være den pendelen faktisk dreier om (vannrett, gjennom opphengspunktet), og de to treghetsmomentene skal ikke summeres: Steiners sats ER summen av $I_\\text{CM}$ og $Md^2$.",
    },
    {
      question: "Hvorfor faller massen ut av svingetiden til en homogen fysisk pendel?",
      options: ["Fordi både $I_A$ og $Mgd$ er proporsjonale med massen, så den forkortes bort", "Fordi tyngden ikke påvirker rotasjonen, bare translasjonen", "Fordi treghetsmomentet er uavhengig av massen for homogene legemer", "Fordi massen bare påvirker amplituden, ikke perioden"],
      explanation: "$I_A$ inneholder $M$ som faktor, og $Mgd$ gjør det også, så massen forkortes i brøken $I_A/(Mgd)$. Det er samme mekanisme som gjør at alle legemer faller like fort. Tyngden er nettopp det som driver rotasjonen, treghetsmomentet er proporsjonalt med massen (ikke uavhengig av den), og amplituden er bestemt av hvordan pendelen ble satt i gang.",
    },
    {
      question: "En homogen skive ($2{,}20\\,\\text{kg}$, radius $0{,}240\\,\\text{m}$) henges opp i et punkt halvveis mellom sentrum og rand. Hva er treghetsmomentet om opphengspunktet?",
      options: ["$0{,}095040\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}063360\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}19008\\,\\text{kg}\\cdot\\text{m}^2$", "$0{,}12672\\,\\text{kg}\\cdot\\text{m}^2$"],
      explanation: "$I_A=\\tfrac12MR^2+M(R/2)^2=\\tfrac34MR^2=0{,}095040$ kg·m². Alternativet som er to tredjedeler av fasiten, er Steiner-leddet glemt. Det største alternativet bruker $d=R$, altså oppheng i randen i stedet for halvveis ut. Alternativet mellom dem har glemt å kvadrere en halv, og legger til $\\tfrac12MR^2$ i stedet for $\\tfrac14MR^2$.",
    },
    {
      question: "En konisk pendel har snorlengde $1{,}100\\,\\text{m}$, og snora danner $25^\\circ$ med loddlinja. Hva er omløpstiden?",
      options: ["$2{,}003\\,\\text{s}$", "$2{,}104\\,\\text{s}$", "$1{,}368\\,\\text{s}$", "$2{,}210\\,\\text{s}$"],
      explanation: "$T=2\\pi\\sqrt{L\\cos\\theta/g}=2{,}003\\,\\text{s}$, der $L\\cos\\theta$ er den loddrette høyden fra festepunktet ned til kulas plan. Alternativet rett over fasiten er $2\\pi\\sqrt{L/g}$, altså hele snorlengden brukt — det er den lengste perioden systemet kan ha, i grensen der vinkelen går mot null. Alternativet med sinus har byttet om de trigonometriske funksjonene. Og alternativet med kosinus i nevneren har snudd brøken.",
    },
    {
      question: "En konisk pendel har snorlengde $0{,}750\\,\\text{m}$, og snora danner $35^\\circ$ med loddlinja. Hva er omløpstiden?",
      options: ["$1{,}572\\,\\text{s}$", "$1{,}737\\,\\text{s}$", "$1{,}316\\,\\text{s}$", "$1{,}920\\,\\text{s}$"],
      explanation: "$T=2\\pi\\sqrt{L\\cos\\theta/g}=1{,}572\\,\\text{s}$, der $L\\cos\\theta$ er den loddrette høyden fra festepunktet ned til kulas plan. Alternativet rett over fasiten er $2\\pi\\sqrt{L/g}$, altså hele snorlengden brukt — det er den lengste perioden systemet kan ha, i grensen der vinkelen går mot null. Alternativet med sinus har byttet om de trigonometriske funksjonene. Og alternativet med kosinus i nevneren har snudd brøken.",
    },
    {
      question: "En kule på $0{,}250\\,\\text{kg}$ går i en vannrett sirkel i enden av en snor som danner $25^\\circ$ med loddlinja. Hvor stort er strekket i snora?",
      options: ["$2{,}706\\,\\text{N}$", "$2{,}453\\,\\text{N}$", "$2{,}223\\,\\text{N}$", "$5{,}803\\,\\text{N}$"],
      explanation: "Den loddrette likningen $S\\cos\\theta=mg$ gir $S=mg/\\cos\\theta=2{,}706\\,\\text{N}$ — alltid STØRRE enn tyngden $mg=2{,}453\\,\\text{N}$, fordi snora både må bære vekten og krumme banen. Alternativet som er lik tyngden, forutsetter at snora hang loddrett. Alternativet som er mindre enn tyngden, er $mg\\cos\\theta$ og er fysisk umulig. Og alternativet med sinus kommer av å forveksle de to kraftlikningene.",
    },
    {
      question: "En kule på $0{,}600\\,\\text{kg}$ går i en vannrett sirkel i enden av en snor som danner $55^\\circ$ med loddlinja. Hvor stort er strekket i snora?",
      options: ["$10{,}26\\,\\text{N}$", "$5{,}886\\,\\text{N}$", "$3{,}376\\,\\text{N}$", "$7{,}185\\,\\text{N}$"],
      explanation: "Den loddrette likningen $S\\cos\\theta=mg$ gir $S=mg/\\cos\\theta=10{,}26\\,\\text{N}$ — alltid STØRRE enn tyngden $mg=5{,}886\\,\\text{N}$, fordi snora både må bære vekten og krumme banen. Alternativet som er lik tyngden, forutsetter at snora hang loddrett. Alternativet som er mindre enn tyngden, er $mg\\cos\\theta$ og er fysisk umulig. Og alternativet med sinus kommer av å forveksle de to kraftlikningene.",
    },
    {
      question: "Hvilke krefter virker på kula i en konisk pendel?",
      options: ["Snordraget langs snora og tyngden nedover — resultanten peker inn mot sirkelsentret", "Snordraget, tyngden og en utoverrettet kraft som holder kula i banen", "Bare snordraget, siden tyngden er balansert av sirkelbevegelsen", "Snordraget, tyngden og en tangentiell kraft som opprettholder farten"],
      explanation: "Nøyaktig to krefter virker: snordraget og tyngden. Resultanten av dem peker vannrett inn mot sentret og gir sentripetalakselerasjonen $v^2/R$. Det finnes **ingen** utoverrettet kraft — sentripetalkraften er resultanten av de virkelige kreftene, ikke en kraft i tillegg. Tyngden er balansert av snordragets loddrette komponent, ikke av bevegelsen. Og i en jevn sirkelbevegelse er farten konstant, så ingen tangentiell kraft er nødvendig.",
    },
    {
      question: "Hva skjer med en konisk pendel når du øker farten?",
      options: ["Vinkelen med loddlinja øker, perioden avtar og snorstrekket vokser", "Vinkelen øker, perioden øker og snorstrekket avtar", "Vinkelen er uendret, men både periode og strekk øker", "Vinkelen øker mot 90 grader, som snora kan nå ved tilstrekkelig fart"],
      explanation: "Raskere rotasjon krever større sentripetalakselerasjon, altså større vannrett komponent — snora legger seg mer utover. Perioden $T=2\\pi\\sqrt{L\\cos\\theta/g}$ avtar når $\\cos\\theta$ minker, og strekket $S=mg/\\cos\\theta$ vokser. Vinkelen kan aldri nå $90^\\circ$: det ville krevd uendelig strekk, siden $\\cos 90^\\circ=0$.",
    },
  ],
  'tfy4115-5-2': [
    {
      question: "Et dempet system har dempingskonstant $0{,}240\\,\\text{kg/s}$ og masse $0{,}500\\,\\text{kg}$. Hva er dempingskoeffisienten $\\gamma$?",
      options: ["$0{,}240\\,\\text{s}^{-1}$", "$0{,}480\\,\\text{s}^{-1}$", "$0{,}120\\,\\text{s}^{-1}$", "$0{,}960\\,\\text{s}^{-1}$"],
      explanation: "$\\gamma=b/(2m)=0{,}240\\,\\text{s}^{-1}$ — merk faktoren 2 i nevneren, som er innebygd i definisjonen for at løsningen $A_0e^{-\\gamma t}\\cos\\omega't$ skal passe i likningen. Alternativet som er dobbelt så stort, er $b/m$, altså faktoren 2 glemt; det er sjangerens dyreste feil og halverer alle tider. Alternativet som er halvparten av fasiten, har $4m$ i nevneren. Det største alternativet er $2b/m$.",
    },
    {
      question: "Et dempet system har dempingskonstant $0{,}360\\,\\text{kg/s}$ og masse $0{,}900\\,\\text{kg}$. Hva er dempingskoeffisienten $\\gamma$?",
      options: ["$0{,}200\\,\\text{s}^{-1}$", "$0{,}400\\,\\text{s}^{-1}$", "$0{,}100\\,\\text{s}^{-1}$", "$0{,}800\\,\\text{s}^{-1}$"],
      explanation: "$\\gamma=b/(2m)=0{,}200\\,\\text{s}^{-1}$ — merk faktoren 2 i nevneren, som er innebygd i definisjonen for at løsningen $A_0e^{-\\gamma t}\\cos\\omega't$ skal passe i likningen. Alternativet som er dobbelt så stort, er $b/m$, altså faktoren 2 glemt; det er sjangerens dyreste feil og halverer alle tider. Alternativet som er halvparten av fasiten, har $4m$ i nevneren. Det største alternativet er $2b/m$.",
    },
    {
      question: "Et dempet system har dempingskonstant $0{,}480\\,\\text{kg/s}$ og masse $0{,}800\\,\\text{kg}$. Hva er dempingskoeffisienten $\\gamma$?",
      options: ["$0{,}300\\,\\text{s}^{-1}$", "$0{,}600\\,\\text{s}^{-1}$", "$0{,}150\\,\\text{s}^{-1}$", "$1{,}20\\,\\text{s}^{-1}$"],
      explanation: "$\\gamma=b/(2m)=0{,}300\\,\\text{s}^{-1}$ — merk faktoren 2 i nevneren, som er innebygd i definisjonen for at løsningen $A_0e^{-\\gamma t}\\cos\\omega't$ skal passe i likningen. Alternativet som er dobbelt så stort, er $b/m$, altså faktoren 2 glemt; det er sjangerens dyreste feil og halverer alle tider. Alternativet som er halvparten av fasiten, har $4m$ i nevneren. Det største alternativet er $2b/m$.",
    },
    {
      question: "Et system har $m=0{,}500\\,\\text{kg}$, $k=72{,}0\\,\\text{N/m}$ og $b=0{,}240\\,\\text{kg/s}$. Hva er den dempede vinkelfrekvensen $\\omega'$?",
      options: ["$11{,}9976\\,\\text{rad/s}$", "$12{,}0000\\,\\text{rad/s}$", "$12{,}0024\\,\\text{rad/s}$", "$11{,}7600\\,\\text{rad/s}$"],
      explanation: "$\\omega'=\\sqrt{\\omega_0^2-\\gamma^2}=\\sqrt{144{,}00-0{,}0576}=11{,}9976\\,\\text{rad/s}$ — bare 0,02 prosent under $\\omega_0$. Alternativet som er nøyaktig 12 rad/s, er den udempede egenfrekvensen, altså dempingen ignorert. Alternativet som er litt større, har PLUSS under rottegnet. Og alternativet som er merkbart lavere, har trukket $\\gamma$ fra $\\omega_0$ direkte i stedet for å trekke fra kvadratene.",
    },
    {
      question: "Hvilken enhet har dempingskoeffisienten $\\gamma$, og hvorfor er det viktig i denne boka?",
      options: ["$\\text{s}^{-1}$ — og det er nettopp enheten som skiller den fra adiabateksponenten $\\gamma$ i termodelen, som er dimensjonsløs", "$\\text{kg/s}$ — den samme enheten som dempingskonstanten $b$, siden de er proporsjonale", "Ingen enhet, siden $\\gamma$ er et forholdstall mellom demping og masse", "$\\text{rad}$, siden $\\gamma$ inngår i argumentet til en cosinusfunksjon"],
      explanation: "$\\gamma=b/(2m)$ har enheten $(\\text{kg/s})/\\text{kg}=\\text{s}^{-1}$, samme som en vinkelfrekvens — og det er ikke tilfeldig, siden $\\gamma$ sammenlignes direkte med $\\omega_0$ for å avgjøre dempingsregimet. Enheten er også kjennetegnet som skiller dempingskoeffisienten fra adiabateksponenten $C_P/C_V$ i Del 6–10, som er dimensjonsløs. $b$ har enhet kg/s, men $\\gamma$ har ikke. Og $\\gamma$ står i eksponenten $e^{-\\gamma t}$, ikke i cosinusargumentet.",
    },
    {
      question: "Et dempet system har $\\gamma=0{,}240\\,\\text{s}^{-1}$. Hvor lang tid tar det før amplituden er halvert?",
      options: ["$2{,}888\\,\\text{s}$", "$1{,}444\\,\\text{s}$", "$8{,}333\\,\\text{s}$", "$4{,}167\\,\\text{s}$"],
      explanation: "$A_0e^{-\\gamma t}=\\tfrac12A_0$ gir $t=\\ln2/\\gamma=2{,}888\\,\\text{s}$; startamplituden faller ut. Alternativet som er halvparten, er tiden til halv ENERGI (der eksponenten er $2\\gamma$). Alternativet som ligger mellom, er relaksasjonstiden $1/\\gamma$, altså tiden til $1/e=0{,}368$. Det største alternativet, $2/\\gamma$, har erstattet logaritmen med tallet 2.",
    },
    {
      question: "Et dempet system har $\\gamma=0{,}180\\,\\text{s}^{-1}$. Hvor lang tid tar det før amplituden er halvert?",
      options: ["$3{,}851\\,\\text{s}$", "$1{,}925\\,\\text{s}$", "$11{,}11\\,\\text{s}$", "$5{,}556\\,\\text{s}$"],
      explanation: "$A_0e^{-\\gamma t}=\\tfrac12A_0$ gir $t=\\ln2/\\gamma=3{,}851\\,\\text{s}$; startamplituden faller ut. Alternativet som er halvparten, er tiden til halv ENERGI (der eksponenten er $2\\gamma$). Alternativet som ligger mellom, er relaksasjonstiden $1/\\gamma$, altså tiden til $1/e=0{,}368$. Det største alternativet, $2/\\gamma$, har erstattet logaritmen med tallet 2.",
    },
    {
      question: "Et dempet system har $\\gamma=0{,}180\\,\\text{s}^{-1}$. Hvor lang tid tar det før amplituden er redusert til en FJERDEDEL?",
      options: ["$7{,}702\\,\\text{s}$", "$3{,}851\\,\\text{s}$", "$22{,}22\\,\\text{s}$", "$5{,}556\\,\\text{s}$"],
      explanation: "$t=\\ln4/\\gamma=7{,}702\\,\\text{s}$, som er nøyaktig TO halveringstider — to halveringer gir en fjerdedel. Alternativet som er halvparten av fasiten, er én halveringstid. Det største alternativet er $4/\\gamma$, altså brøken satt rett inn i stedet for logaritmen. Og $1/\\gamma$ er relaksasjonstiden, som svarer til $1/e$ og ikke til en fjerdedel.",
    },
    {
      question: "Et dempet system har $\\gamma=0{,}300\\,\\text{s}^{-1}$. Hvor lang tid tar det før amplituden er redusert til en FJERDEDEL?",
      options: ["$4{,}621\\,\\text{s}$", "$2{,}310\\,\\text{s}$", "$13{,}33\\,\\text{s}$", "$3{,}333\\,\\text{s}$"],
      explanation: "$t=\\ln4/\\gamma=4{,}621\\,\\text{s}$, som er nøyaktig TO halveringstider — to halveringer gir en fjerdedel. Alternativet som er halvparten av fasiten, er én halveringstid. Det største alternativet er $4/\\gamma$, altså brøken satt rett inn i stedet for logaritmen. Og $1/\\gamma$ er relaksasjonstiden, som svarer til $1/e$ og ikke til en fjerdedel.",
    },
    {
      question: "Et dempet system har $\\gamma=0{,}200\\,\\text{s}^{-1}$. Hvor lang tid tar det før ENERGIEN er halvert?",
      options: ["$1{,}733\\,\\text{s}$", "$3{,}466\\,\\text{s}$", "$2{,}500\\,\\text{s}$", "$6{,}931\\,\\text{s}$"],
      explanation: "Energien går som $E_0e^{-2\\gamma t}$, så $t=\\ln2/(2\\gamma)=1{,}733\\,\\text{s}$. Alternativet som er dobbelt så stort, er tiden til halv AMPLITUDE — de to skiller seg med akkurat en faktor 2, og det er sjangerens nest vanligste feil. Alternativet mellom dem er $1/(2\\gamma)$, altså tiden til energien er $1/e$. Det største alternativet er tiden til en fjerdedels amplitude.",
    },
    {
      question: "Hvorfor faller energien i en dempet svingning dobbelt så fort som amplituden?",
      options: ["Fordi $E=\\tfrac12kA^2$, så kvadreringen av $e^{-\\gamma t}$ dobler eksponenten", "Fordi dempingskraften gjør arbeid to ganger per periode, én gang i hver retning", "Fordi både den kinetiske og den potensielle energien avtar, og de legges sammen", "Fordi $\\gamma$ er definert med en faktor 2 i nevneren, som slår ut i energien"],
      explanation: "Energien er proporsjonal med amplituden i annen, så $A_0^2e^{-2\\gamma t}$ — eksponenten dobles av kvadreringen. Konkret: når amplituden er halvert, er energien nede på en fjerdedel. Dempingskraften gjør arbeid kontinuerlig, ikke to ganger per periode. At begge energiformene avtar, forklarer ikke faktoren 2 (summen er nettopp $\\tfrac12kA^2$). Og faktoren 2 i definisjonen av $\\gamma$ er en helt annen sak.",
    },
    {
      question: "Et system har $m=0{,}400\\,\\text{kg}$, $k=64{,}0\\,\\text{N/m}$ og $b=0{,}160\\,\\text{kg/s}$. Hvor mange HELE svingninger gjør det før amplituden er halvert?",
      options: ["$6$", "$7$", "$3$", "$13$"],
      explanation: "$\\gamma=0{,}200\\,\\text{s}^{-1}$ gir $t=\\ln2/\\gamma=3{,}466\\,\\text{s}$, og $T'=2\\pi/\\omega'=0{,}4968\\,\\text{s}$, altså $6{,}976$ perioder — og HELE svingninger betyr heltallsdelen, altså 6. Alternativet 7 er vanlig avrunding oppover i stedet for heltallsdel. Alternativet 3 svarer til å bruke $\\gamma=b/m$, altså faktoren 2 glemt. Og 13 er antallet halve svingninger.",
    },
    {
      question: "Et system har $\\omega_0=12{,}0\\,\\text{rad/s}$ og $\\gamma=0{,}240\\,\\text{s}^{-1}$. Hva er kvalitetsfaktoren $Q$?",
      options: ["$25{,}0$", "$50{,}0$", "$0{,}0100$", "$0{,}0400$"],
      explanation: "$Q=\\omega_0/(2\\gamma)=25{,}0$, dimensjonsløs. Alternativet som er dobbelt så stort, har glemt faktoren 2 i nevneren. De to små alternativene er forholdet snudd, med og uten faktoren 2 — de gir verdier langt under 1, som ville betydd en svingning som dør ut i løpet av en brøkdel av en periode.",
    },
    {
      question: "Et system har $\\omega_0=30{,}0\\,\\text{rad/s}$ og $\\gamma=0{,}250\\,\\text{s}^{-1}$. Hva er kvalitetsfaktoren $Q$?",
      options: ["$60{,}0$", "$120$", "$0{,}00417$", "$0{,}0167$"],
      explanation: "$Q=\\omega_0/(2\\gamma)=60{,}0$, dimensjonsløs. Alternativet som er dobbelt så stort, har glemt faktoren 2 i nevneren. De to små alternativene er forholdet snudd, med og uten faktoren 2 — de gir verdier langt under 1, som ville betydd en svingning som dør ut i løpet av en brøkdel av en periode.",
    },
    {
      question: "Hva betyr det at et system har kvalitetsfaktor $Q=200$?",
      options: ["At amplituden faller til $1/e$ etter om lag $200/\\pi \\approx 64$ hele svingninger, og at forsterkningen på resonans er 200", "At amplituden faller til $1/e$ etter 200 sekunder, uansett periode", "At systemet mister 200 ganger mer energi per periode enn det lagrer", "At egenfrekvensen er 200 ganger større enn dempingskonstanten $b$"],
      explanation: "$Q=\\omega_0/(2\\gamma)$ har tre likeverdige tolkninger: antall svingninger til $1/e$ er om lag $Q/\\pi$; forsterkningen på resonans er nøyaktig $Q$ ganger det statiske utslaget; og $Q=2\\pi$ ganger lagret energi delt på tapet per periode — altså mister systemet LITE energi per periode, ikke mye. $Q$ er dimensjonsløs og kan derfor ikke være et antall sekunder, og forholdet er til $\\gamma$, ikke til $b$.",
    },
    {
      question: "Et system drives på resonans. Hva skjer med amplituden hvis dempingskonstanten $b$ halveres?",
      options: ["Den dobles, siden $A(\\omega_0)=F_0/(b\\omega_0)$ er omvendt proporsjonal med $b$", "Den firedobles, siden amplituden går som $1/b^2$ på resonans", "Den er uendret, siden resonansfrekvensen ikke avhenger av dempingen", "Den halveres, siden mindre demping gir mindre energioverføring fra drivkraften"],
      explanation: "På resonans er $A=F_0/(b\\omega_0)$, altså omvendt proporsjonal med $b$: halvert demping gir dobbelt amplitude, og $Q$ dobles tilsvarende. Avhengigheten er $1/b$, ikke $1/b^2$. Resonansfrekvensen endres nesten ikke, men amplituden gjør det dramatisk — det er nettopp dempingen alene som setter topphøyden. Og mindre demping betyr mindre energitap, ikke mindre energiopptak.",
    },
    {
      question: "Tre systemer har samme $\\omega_0$, men $\\gamma=0{,}1\\omega_0$, $\\gamma=\\omega_0$ og $\\gamma=5\\omega_0$. Hvilket kommer raskest til ro?",
      options: ["Det med $\\gamma=\\omega_0$, altså det kritisk dempede", "Det med $\\gamma=5\\omega_0$, siden mest demping alltid stopper bevegelsen raskest", "Det med $\\gamma=0{,}1\\omega_0$, siden det når nulllinja først", "Alle tre bruker like lang tid, siden $\\omega_0$ er den samme"],
      explanation: "Kritisk demping ($\\gamma=\\omega_0$) er nøyaktig det punktet der returtiden har sitt minimum. Mer demping bremser også bevegelsen TILBAKE mot likevekt, så det overkritiske systemet kryper langsommere inn. Det svakt dempede krysser nulllinja først, men fortsetter å svinge lenge etterpå. Og regimet — ikke $\\omega_0$ alene — avgjør forløpet.",
    },
    {
      question: "Et system har $m=1{,}50\\,\\text{kg}$ og $k=24{,}0\\,\\text{N/m}$. Hvor stor må dempingskonstanten være for kritisk demping?",
      options: ["$12{,}00\\,\\text{kg/s}$", "$6{,}000\\,\\text{kg/s}$", "$24{,}00\\,\\text{kg/s}$", "$72{,}00\\,\\text{kg/s}$"],
      explanation: "$b_\\text{krit}=2m\\omega_0=2\\sqrt{km}=12{,}00\\,\\text{kg/s}$. Alternativet som er halvparten, har glemt faktoren 2. Alternativet som er dobbelt, har den to ganger. Og det største alternativet er $2km$, som ikke engang har riktig enhet — enhetssjekken alene stryker det.",
    },
    {
      question: "Et system har $m=2{,}00\\,\\text{kg}$ og $k=50{,}0\\,\\text{N/m}$. Hvor stor må dempingskonstanten være for kritisk demping?",
      options: ["$20{,}00\\,\\text{kg/s}$", "$10{,}00\\,\\text{kg/s}$", "$40{,}00\\,\\text{kg/s}$", "$200{,}0\\,\\text{kg/s}$"],
      explanation: "$b_\\text{krit}=2m\\omega_0=2\\sqrt{km}=20{,}00\\,\\text{kg/s}$. Alternativet som er halvparten, har glemt faktoren 2. Alternativet som er dobbelt, har den to ganger. Og det største alternativet er $2km$, som ikke engang har riktig enhet — enhetssjekken alene stryker det.",
    },
    {
      question: "Et system har $\\gamma>\\omega_0$. Hva kan du si om bevegelsen?",
      options: ["Den svinger ikke, og den bruker LENGRE tid tilbake til likevekt enn ved kritisk demping", "Den svinger med den dempede frekvensen $\\omega'=\\sqrt{\\gamma^2-\\omega_0^2}$", "Den svinger ikke, og den kommer raskere til ro enn ved kritisk demping", "Den svinger, men amplituden faller så fort at bare én periode er synlig"],
      explanation: "For $\\gamma>\\omega_0$ blir $\\omega_0^2-\\gamma^2$ negativ, det finnes ingen reell $\\omega'$ og ingen periode — systemet kryper mot likevekt som en sum av to eksponentialer. Og det gjør det LANGSOMMERE enn ved kritisk demping, fordi den store motstanden også bremser returen; tidskonstanten er om lag $2\\gamma/\\omega_0^2$, som vokser med $\\gamma$. Å bytte om leddene under rottegnet gir ingen svingefrekvens — det gir en av de to eksponentielle tidskonstantene.",
    },
    {
      question: "Et system med $k=72{,}0\\,\\text{N/m}$ og $b=0{,}240\\,\\text{kg/s}$ har $\\omega_0=12{,}0\\,\\text{rad/s}$ og drives på resonans med kraftamplituden $0{,}360\\,\\text{N}$. Hvor stor blir utslagsamplituden?",
      options: ["$0{,}1250\\,\\text{m}$", "$0{,}005000\\,\\text{m}$", "$1{,}500\\,\\text{m}$", "$0{,}06250\\,\\text{m}$"],
      explanation: "På resonans forsvinner leddet $(\\omega_0^2-\\omega^2)$, og $A=F_0/(b\\omega_0)=0{,}1250\\,\\text{m}$ — nøyaktig $Q=25$ ganger det statiske utslaget $F_0/k=0{,}005000\\,\\text{m}$. Det minste alternativet ER det statiske utslaget, altså forsterkningen glemt. Alternativet som er tolv ganger fasiten, har glemt $\\omega_0$ i nevneren. Og alternativet som er halvparten, har en ekstra faktor 2.",
    },
    {
      question: "Hvor ligger toppen på resonanskurven for et svakt dempet system?",
      options: ["Praktisk talt ved $\\omega=\\omega_0$; eksakt ved $\\sqrt{\\omega_0^2-2\\gamma^2}$", "Eksakt ved $\\omega=\\omega_0$, uansett hvor stor dempingen er", "Ved $\\omega=\\omega'=\\sqrt{\\omega_0^2-\\gamma^2}$, altså den dempede egenfrekvensen", "Ved $\\omega=2\\omega_0$, siden systemet svarer sterkest på dobbel frekvens"],
      explanation: "Maksimum ligger ved $\\omega=\\sqrt{\\omega_0^2-2\\gamma^2}$, altså litt under både $\\omega_0$ og $\\omega'$ — men for svak demping er forskjellen forsvinnende: med $\\gamma/\\omega_0=0{,}02$ ligger toppen 0,04 prosent under $\\omega_0$. Den er derfor ikke eksakt ved $\\omega_0$, og heller ikke ved $\\omega'$. Merk grensen: for $\\gamma>\\omega_0/\\sqrt2$ finnes ingen topp i det hele tatt.",
    },
  ],
  'tfy4115-5-3': [
    {
      question: "En masse på $0{,}640\\,\\text{kg}$ svinger i en fjær med stivhet $250{,}0\\,\\text{N/m}$. Hva er FREKVENSEN?",
      options: ["$3{,}146\\,\\text{Hz}$", "$19{,}76\\,\\text{Hz}$", "$6{,}291\\,\\text{Hz}$", "$0{,}3179\\,\\text{Hz}$"],
      explanation: "$\\omega_0=\\sqrt{k/m}=19{,}76\\,\\text{rad/s}$, og frekvensen er $f=\\omega_0/(2\\pi)=3{,}146\\,\\text{Hz}$. Alternativet som er over seks ganger større, er vinkelfrekvensen i rad/s — riktig regning, feil størrelse, og det mest valgte gale svaret i sjangeren. Alternativet som er dobbelt fasiten, har delt på $\\pi$ i stedet for $2\\pi$. Og det minste alternativet er perioden i sekunder.",
    },
    {
      question: "En masse på $0{,}250\\,\\text{kg}$ svinger i en fjær med stivhet $90{,}0\\,\\text{N/m}$. Hva er FREKVENSEN?",
      options: ["$3{,}020\\,\\text{Hz}$", "$18{,}97\\,\\text{Hz}$", "$6{,}040\\,\\text{Hz}$", "$0{,}3312\\,\\text{Hz}$"],
      explanation: "$\\omega_0=\\sqrt{k/m}=18{,}97\\,\\text{rad/s}$, og frekvensen er $f=\\omega_0/(2\\pi)=3{,}020\\,\\text{Hz}$. Alternativet som er over seks ganger større, er vinkelfrekvensen i rad/s — riktig regning, feil størrelse, og det mest valgte gale svaret i sjangeren. Alternativet som er dobbelt fasiten, har delt på $\\pi$ i stedet for $2\\pi$. Og det minste alternativet er perioden i sekunder.",
    },
    {
      question: "To fjærer på $200{,}0\\,\\text{N/m}$ og $300{,}0\\,\\text{N/m}$ kobles i SERIE. Hva er den samlede stivheten?",
      options: ["$120{,}0\\,\\text{N/m}$", "$500{,}0\\,\\text{N/m}$", "$250{,}0\\,\\text{N/m}$", "$244{,}9\\,\\text{N/m}$"],
      explanation: "$k=k_1k_2/(k_1+k_2)=120{,}0\\,\\text{N/m}$ — mindre enn den minste av de to, som seriekobling alltid gir. Det største alternativet er parallellformelen. Alternativet som er gjennomsnittet av stivhetene, hører ikke til noen av koblingene. Og det geometriske gjennomsnittet $\\sqrt{k_1k_2}$ er heller ingen kobling — men det ligger nær nok fasiten til å være farlig.",
    },
    {
      question: "To fjærer på $400{,}0\\,\\text{N/m}$ og $600{,}0\\,\\text{N/m}$ kobles i SERIE. Hva er den samlede stivheten?",
      options: ["$240{,}0\\,\\text{N/m}$", "$1000\\,\\text{N/m}$", "$500{,}0\\,\\text{N/m}$", "$489{,}9\\,\\text{N/m}$"],
      explanation: "$k=k_1k_2/(k_1+k_2)=240{,}0\\,\\text{N/m}$ — mindre enn den minste av de to, som seriekobling alltid gir. Det største alternativet er parallellformelen. Alternativet som er gjennomsnittet av stivhetene, hører ikke til noen av koblingene. Og det geometriske gjennomsnittet $\\sqrt{k_1k_2}$ er heller ingen kobling — men det ligger nær nok fasiten til å være farlig.",
    },
    {
      question: "En masse på $0{,}600\\,\\text{kg}$ svinger med perioden $0{,}400\\,\\text{s}$. Hva er fjærstivheten?",
      options: ["$148{,}0\\,\\text{N/m}$", "$9{,}425\\,\\text{N/m}$", "$3{,}750\\,\\text{N/m}$", "$59{,}22\\,\\text{N/m}$"],
      explanation: "$k=m(2\\pi/T)^2=148{,}0\\,\\text{N/m}$. Regn $2\\pi/T$ som eget mellomresultat — det er vinkelfrekvensen $15{,}71\\,\\text{rad/s}$. Alternativet som er om lag en tiendedel av fasiten, mangler kvadreringen. Alternativet som er $m/T^2$, mangler hele faktoren $(2\\pi)^2=39{,}48$ — den vanligste feilen i denne varianten. Og det største alternativet har bare én potens av $T$ i nevneren.",
    },
    {
      question: "En homogen skive med radius $0{,}200\\,\\text{m}$ henges opp i randen og svinger med små utslag. Hva er svingetiden?",
      options: ["$1{,}099\\,\\text{s}$", "$0{,}6344\\,\\text{s}$", "$0{,}8971\\,\\text{s}$", "$0{,}1749\\,\\text{s}$"],
      explanation: "$I_A=\\tfrac32MR^2$ og $d=R$ gir $T=2\\pi\\sqrt{3R/(2g)}=1{,}099\\,\\text{s}$; massen faller ut. Alternativet som er drøyt halvparten, er Steiner-leddet glemt. Alternativet mellom dem er skiva som punktmasse i avstanden $R$. Det minste alternativet mangler faktoren $2\\pi$ helt — det er altfor kort for noe som svinger synlig.",
    },
    {
      question: "En homogen skive med radius $0{,}250\\,\\text{m}$ henges opp i randen og svinger med små utslag. Hva er svingetiden?",
      options: ["$1{,}228\\,\\text{s}$", "$0{,}7093\\,\\text{s}$", "$1{,}003\\,\\text{s}$", "$0{,}1955\\,\\text{s}$"],
      explanation: "$I_A=\\tfrac32MR^2$ og $d=R$ gir $T=2\\pi\\sqrt{3R/(2g)}=1{,}228\\,\\text{s}$; massen faller ut. Alternativet som er drøyt halvparten, er Steiner-leddet glemt. Alternativet mellom dem er skiva som punktmasse i avstanden $R$. Det minste alternativet mangler faktoren $2\\pi$ helt — det er altfor kort for noe som svinger synlig.",
    },
    {
      question: "En homogen stang med lengde $0{,}850\\,\\text{m}$ henges opp i den ene enden. Hva er svingetiden for små utslag?",
      options: ["$1{,}510\\,\\text{s}$", "$1{,}850\\,\\text{s}$", "$1{,}308\\,\\text{s}$", "$1{,}068\\,\\text{s}$"],
      explanation: "$I_A=\\tfrac13ML^2$ og $d=L/2$ gir $T=2\\pi\\sqrt{2L/(3g)}=1{,}510\\,\\text{s}$, altså effektiv pendellengde $\\tfrac23L$. Det største alternativet er $2\\pi\\sqrt{L/g}$, altså stanga behandlet som en punktmasse i enden. De to minste svarer til effektive lengder $L/2$ og $L/3$, som du får ved å kombinere feil $I$ med feil $d$.",
    },
    {
      question: "En homogen stang med lengde $1{,}200\\,\\text{m}$ henges opp i den ene enden. Hva er svingetiden for små utslag?",
      options: ["$1{,}794\\,\\text{s}$", "$2{,}198\\,\\text{s}$", "$1{,}554\\,\\text{s}$", "$1{,}269\\,\\text{s}$"],
      explanation: "$I_A=\\tfrac13ML^2$ og $d=L/2$ gir $T=2\\pi\\sqrt{2L/(3g)}=1{,}794\\,\\text{s}$, altså effektiv pendellengde $\\tfrac23L$. Det største alternativet er $2\\pi\\sqrt{L/g}$, altså stanga behandlet som en punktmasse i enden. De to minste svarer til effektive lengder $L/2$ og $L/3$, som du får ved å kombinere feil $I$ med feil $d$.",
    },
    {
      question: "En kule på $0{,}350\\,\\text{kg}$ går i vannrett sirkel i enden av en snor som danner $30^\\circ$ med loddlinja. Hvor stort er snorstrekket?",
      options: ["$3{,}965\\,\\text{N}$", "$3{,}433\\,\\text{N}$", "$2{,}973\\,\\text{N}$", "$6{,}867\\,\\text{N}$"],
      explanation: "Den loddrette likningen $S\\cos\\theta=mg$ gir $S=3{,}965\\,\\text{N}$ — alltid større enn tyngden $mg=3{,}433\\,\\text{N}$. Alternativet som er lik tyngden, forutsetter at snora hang loddrett. Alternativet som er mindre enn tyngden, er $mg\\cos\\theta$ og fysisk umulig. Og det største alternativet kommer av å bruke sinus i stedet for kosinus, altså de to kraftlikningene forbyttet.",
    },
    {
      question: "Et system har $b=0{,}256\\,\\text{kg/s}$ og $m=0{,}640\\,\\text{kg}$. Hvor lang tid tar det før amplituden er halvert?",
      options: ["$3{,}466\\,\\text{s}$", "$1{,}733\\,\\text{s}$", "$5{,}000\\,\\text{s}$", "$10{,}00\\,\\text{s}$"],
      explanation: "$\\gamma=b/(2m)=0{,}200\\,\\text{s}^{-1}$, og $t=\\ln2/\\gamma=3{,}466\\,\\text{s}$. Alternativet som er halvparten, får du med $\\gamma=b/m$ (faktoren 2 glemt) — og det er samtidig tiden til halv ENERGI, altså to feil som gir samme tall. Alternativet mellom dem er relaksasjonstiden $1/\\gamma$. Det største alternativet har erstattet logaritmen med tallet 2.",
    },
    {
      question: "Et system har $b=0{,}200\\,\\text{kg/s}$ og $m=0{,}500\\,\\text{kg}$. Hvor lang tid tar det før amplituden er halvert?",
      options: ["$3{,}466\\,\\text{s}$", "$1{,}733\\,\\text{s}$", "$5{,}000\\,\\text{s}$", "$10{,}00\\,\\text{s}$"],
      explanation: "$\\gamma=b/(2m)=0{,}200\\,\\text{s}^{-1}$, og $t=\\ln2/\\gamma=3{,}466\\,\\text{s}$. Alternativet som er halvparten, får du med $\\gamma=b/m$ (faktoren 2 glemt) — og det er samtidig tiden til halv ENERGI, altså to feil som gir samme tall. Alternativet mellom dem er relaksasjonstiden $1/\\gamma$. Det største alternativet har erstattet logaritmen med tallet 2.",
    },
    {
      question: "Et system har $\\omega_0=20{,}0\\,\\text{rad/s}$ og $\\gamma=0{,}400\\,\\text{{s}}^{{-1}}$. Hva er kvalitetsfaktoren, og hvor stor er forsterkningen på resonans?",
      options: ["$25{,}0$", "$50{,}0$", "$0{,}0200$", "$0{,}0400$"],
      explanation: "$Q=\\omega_0/(2\\gamma)=25{,}0$, dimensjonsløs, og forsterkningen på resonans er nøyaktig $Q$ ganger det statiske utslaget. Alternativet som er dobbelt så stort, har glemt faktoren 2 i nevneren. De to små alternativene er forholdet snudd, med og uten faktoren 2, og gir verdier langt under 1 — det ville betydd en svingning som dør ut i løpet av en brøkdel av en periode.",
    },
    {
      question: "Et system har $\\omega_0=12{,}0\\,\\text{rad/s}$ og $\\gamma=0{,}240\\,\\text{{s}}^{{-1}}$. Hva er kvalitetsfaktoren, og hvor stor er forsterkningen på resonans?",
      options: ["$25{,}0$", "$50{,}0$", "$0{,}0200$", "$0{,}0400$"],
      explanation: "$Q=\\omega_0/(2\\gamma)=25{,}0$, dimensjonsløs, og forsterkningen på resonans er nøyaktig $Q$ ganger det statiske utslaget. Alternativet som er dobbelt så stort, har glemt faktoren 2 i nevneren. De to små alternativene er forholdet snudd, med og uten faktoren 2, og gir verdier langt under 1 — det ville betydd en svingning som dør ut i løpet av en brøkdel av en periode.",
    },
    {
      question: "Hva er den raskeste sjekken på at du har brukt riktig formel i en fysisk pendeloppgave?",
      options: ["Regn effektiv pendellengde $I_A/(Md)$ og se om den er av samme størrelsesorden som legemet", "Sjekk at massen står i svaret, siden en tyngre pendel svinger langsommere", "Sjekk at perioden er kortere enn for en matematisk pendel med samme lengde som legemet", "Sjekk at svaret inneholder $g$ i teller, siden tyngden driver bevegelsen"],
      explanation: "Effektiv pendellengde $L_\\text{ekv}=I_A/(Md)$ skal være av samme størrelsesorden som legemet — for en skive i randen $\\tfrac32R$, for en stang i enden $\\tfrac23L$. Er den mye større eller mindre, er $I_A$ eller $d$ galt. For et HOMOGENT legeme faller massen ut av perioden, så den skal IKKE stå i svaret. At perioden er kortere enn den matematiske pendelens, gjelder for stanga men ikke generelt (skiva i randen har $L_\\text{ekv}=\\tfrac32R>R$). Og $g$ står i nevneren under rottegnet.",
    },
    {
      question: "Et system har $\\gamma$ større enn $\\omega_0$. Hva bør du gjøre først?",
      options: ["Slutte å regne perioder — systemet svinger ikke, så $\\omega'$ og $T'$ finnes ikke", "Bruke $\\omega'=\\sqrt{\\gamma^2-\\omega_0^2}$ som svingefrekvens i stedet", "Doble $\\gamma$ for å komme over i det overkritiske regimet", "Regne perioden med $\\omega_0$ i stedet, siden dempingen bare endrer amplituden"],
      explanation: "For $\\gamma>\\omega_0$ blir $\\omega_0^2-\\gamma^2$ negativ: det finnes ingen reell $\\omega'$ og ingen periode. Systemet kryper mot likevekt som en sum av to eksponentialer, med den langsomste tidskonstanten om lag $2\\gamma/\\omega_0^2$. Å bytte om leddene under rottegnet gir ingen svingefrekvens — det gir en av de eksponentielle tidskonstantene. Systemet ER allerede overkritisk. Og å regne en periode med $\\omega_0$ ville beskrevet en svingning som ikke finnes.",
    },
  ],
  'tfy4115-6-1': [
    {
      question: "En beholder på $18{,}0\\,\\text{L}$ inneholder en ideell gass ved $2{,}50\\cdot10^{5}\\,\\text{Pa}$ og $27{,}0\\,^\\circ\\text{C}$. Hvor mange mol gass er det?",
      options: ["$1{,}803\\,\\text{mol}$", "$20{,}05\\,\\text{mol}$", "$1803\\,\\text{mol}$", "$0{,}001803\\,\\text{mol}$"],
      explanation: "Kelvin først: $T = 27{,}0 + 273{,}15 = 300{,}15\\,\\text{K}$, og $n = pV/(RT) = 4500/2495{,}4 = 1{,}803$ mol. Alternativet som er om lag fjorten ganger større, er regnet med celsiustallet $27{,}0$ i nevneren — den dyreste enkeltfeilen i termohalvdelen. Det tusen ganger større alternativet har volumet i liter i stedet for kubikkmeter, og det tusen ganger mindre har delt på tusen én gang for mye.",
    },
    {
      question: "En stiv beholder med gass har trykket $1{,}60\\cdot10^{5}\\,\\text{Pa}$ ved $15{,}0\\,^\\circ\\text{C}$. Beholderen varmes til $75{,}0\\,^\\circ\\text{C}$. Hva blir trykket?",
      options: ["$1{,}933\\cdot10^{5}\\,\\text{Pa}$", "$8{,}000\\cdot10^{5}\\,\\text{Pa}$", "$1{,}324\\cdot10^{5}\\,\\text{Pa}$", "$2{,}200\\cdot10^{5}\\,\\text{Pa}$"],
      explanation: "Fast volum gir $p_2 = p_1T_2/T_1 = 1{,}60\\cdot10^{5}\\cdot 348{,}15/288{,}15 = 1{,}933\\cdot10^{5}\\,\\text{Pa}$. Alternativet på 8{,}000\\cdot10^{5}$\\,\\text{Pa}$ er regnet med celsius i forholdet og gir fem ganger for mye. Det minste alternativet har snudd forholdet, altså regnet som om oppvarming senker trykket. Alternativet på 2{,}200\\cdot10^{5}$\\,\\text{Pa}$ har lagt til tusen pascal per grad — en lineær tilnærming som ikke finnes i gassloven.",
    },
    {
      question: "Hvor mange gassmolekyler er det i $400\\,\\text{mL}$ gass ved $9{,}50\\cdot10^{4}\\,\\text{Pa}$ og $310\\,\\text{K}$?",
      options: ["$8{,}876\\cdot10^{21}$", "$1{,}474\\cdot10^{-2}$", "$5{,}345\\cdot10^{45}$", "$8{,}876\\cdot10^{20}$"],
      explanation: "Oppgaven ber om molekyler, altså $N = pV/(k_BT)$ med Boltzmanns konstant: $38{,}0/(4{,}281\\cdot10^{-21}) = 8{,}876\\cdot10^{21}$. Alternativet rundt $10^{-2}$ er regnet med gasskonstanten $R$ og gir stoffmengden i mol, ikke antall molekyler. Det aller største alternativet har i tillegg ganget med Avogadros tall én gang for mye. Det minste er en faktor ti unna og skyldes en tierpotens tapt i omregningen fra milliliter.",
    },
    {
      question: "Hva er $v_\\text{rms}$ for oksygengass ($M = 32{,}00\\,\\text{g/mol}$) ved $350\\,\\text{K}$?",
      options: ["$522{,}3\\,\\text{m/s}$", "$301{,}6\\,\\text{m/s}$", "$16{,}52\\,\\text{m/s}$", "$2{,}728\\cdot10^{5}\\,\\text{m/s}$"],
      explanation: "$v_\\text{rms} = \\sqrt{3RT/M} = \\sqrt{3\\cdot 8{,}314\\cdot 350/0{,}03200} = 522{,}3\\,\\text{m/s}$. Alternativet på 301{,}6$\\,\\text{m/s}$ mangler faktoren 3 under rottegnet. Alternativet rundt $17\\,\\text{m/s}$ har satt inn den molare massen i gram per mol i stedet for kilogram per mol, som gir en faktor $\\sqrt{1000}$ for lite. Det største alternativet har glemt kvadratrota helt — enheten blir da $\\text{m}^2/\\text{s}^2$.",
    },
    {
      question: "Tre gasser — helium, nitrogen og karbondioksid — er i samme beholder ved samme temperatur. Hvilken påstand er riktig?",
      options: ["Helium har størst $v_\\text{rms}$, og alle tre har samme midlere kinetiske energi", "Karbondioksid har størst $v_\\text{rms}$, og alle tre har samme midlere kinetiske energi", "Helium har størst $v_\\text{rms}$, og karbondioksid har størst midlere kinetisk energi", "Alle tre har samme $v_\\text{rms}$, og karbondioksid har størst midlere kinetisk energi"],
      explanation: "$v_\\text{rms} = \\sqrt{3RT/M}$ er størst for den letteste gassen, mens $\\langle E_k\\rangle = \\tfrac32k_BT$ bare avhenger av temperaturen og er lik for alle. Svaret som gir karbondioksid størst fart, har snudd masseavhengigheten. De to svarene som gir karbondioksid mest energi, bygger på at «tyngst må ha mest energi» — men det tunge molekylet betaler for massen med lavere fart, slik at produktet $\\tfrac12mv^2$ blir det samme.",
    },
    {
      question: "Hva er den midlere kinetiske energien per molekyl i en ideell gass ved $400\\,\\text{K}$?",
      options: ["$8{,}286\\cdot10^{-21}\\,\\text{J}$", "$5{,}524\\cdot10^{-21}\\,\\text{J}$", "$4988\\,\\text{J}$", "$2{,}628\\cdot10^{-21}\\,\\text{J}$"],
      explanation: "$\\langle E_k\\rangle = \\tfrac32k_BT = 1{,}5\\cdot 1{,}381\\cdot10^{-23}\\cdot 400 = 8{,}286\\cdot10^{-21}\\,\\text{J}$. Alternativet som er to tredjedeler av dette, mangler faktoren $\\tfrac32$. Alternativet på noen tusen joule er regnet med gasskonstanten og gir energien per **mol**, ikke per molekyl. Det minste alternativet har brukt celsiustallet $126{,}85$ i stedet for kelvin.",
    },
    {
      question: "Den absolutte temperaturen i en gass firedobles. Hva skjer med $v_\\text{rms}$ og med den midlere kinetiske energien per molekyl?",
      options: ["Farten dobles, og energien firedobles", "Farten firedobles, og energien dobles", "Farten firedobles, og energien firedobles", "Farten dobles, og energien dobles"],
      explanation: "$v_\\text{rms} \\propto \\sqrt{T}$, så en firedobling av $T$ gir $\\sqrt{4} = 2$ ganger farten. Energien er $\\tfrac32k_BT$ og går rett proporsjonalt med $T$, altså fire ganger. Svaret der farten firedobles og energien dobles, har byttet om de to avhengighetene. De to svarene der begge endres like mye, har glemt at energien går med kvadratet av farten.",
    },
    {
      question: "Hvilken av disse formlene tåler at temperaturen settes inn i celsius?",
      options: ["$\\Delta L = \\alpha L\\,\\Delta T$, fordi bare en temperaturdifferanse inngår", "$pV = nRT$, fordi trykket og volumet er i SI-enheter uansett", "$v_\\text{rms} = \\sqrt{3RT/M}$, fordi kvadratrota jevner ut forskjellen", "$\\langle E_k\\rangle = \\tfrac32k_BT$, fordi energien måles fra et valgt nullpunkt"],
      explanation: "En temperaturdifferanse er den samme i celsius og kelvin, fordi gradstørrelsen er lik — derfor går $\\Delta L = \\alpha L\\,\\Delta T$ fint med celsius. De tre andre har $T$ **alene**, og er proporsjonalitetslover som krever et nullpunkt der all termisk bevegelse opphører. Svaret om at kvadratrota jevner ut forskjellen, er nær-sant i den forstand at rota halverer den relative feilen — men feilen forsvinner ikke, den blir bare mindre synlig.",
    },
    {
      question: "Du skal regne ut partikkeltettheten $N/V$ i en gass. Hvilken konstant hører i formelen, og hvorfor?",
      options: ["$k_B$, fordi svaret er et antall molekyler og ikke et antall mol", "$R$, fordi partikkeltetthet alltid oppgis per mol per kubikkmeter", "$N_A$, fordi tettheten er antall partikler delt på volumet", "$k_B$ og $N_A$ i produkt, fordi begge trengs for å komme til molekylnivå"],
      explanation: "$N/V = p/(k_BT)$ — spør oppgaven om molekyler, er konstanten Boltzmanns. Svaret med $R$ ville gitt $n/V$, altså mol per kubikkmeter, som er en annen størrelse. Avogadros tall alene har feil enhet i denne sammenhengen; det er broen mellom mol og molekyler, ikke mellom trykk og tetthet. Og produktet $k_BN_A$ er nettopp $R$, så svaret som ber om begge konstantene, er samme feil som svaret med $R$ alene.",
    },
    {
      question: "Hvor stort volum fyller ett mol ideell gass ved $1\\,\\text{atm}$ og $298\\,\\text{K}$?",
      options: ["$24{,}46\\,\\text{L}$", "$2{,}040\\,\\text{L}$", "$2{,}446\\cdot10^{4}\\,\\text{L}$", "$0{,}02446\\,\\text{L}$"],
      explanation: "$V_m = RT/p = 8{,}314\\cdot 298/1{,}013\\cdot10^{5} = 0{,}02446\\,\\text{m}^3 = 24{,}46\\,\\text{L}$. Verdien rundt $22$–$25$ liter per mol er en av de raskeste rimelighetssjekkene i faget. Alternativet på om lag to liter er regnet med celsiustallet $24{,}85$. Det største alternativet har trykket i hektopascal i stedet for pascal, og det minste har blandet liter og kubikkmeter i sluttsvaret.",
    },
    {
      question: "En gass har partikkeltetthet $3{,}20\\cdot10^{25}\\,\\text{m}^{-3}$, molekylmasse $4{,}651\\cdot10^{-26}\\,\\text{kg}$ og $v_\\text{rms} = 480\\,\\text{m/s}$. Hva er trykket?",
      options: ["$1{,}143\\cdot10^{5}\\,\\text{Pa}$", "$3{,}429\\cdot10^{5}\\,\\text{Pa}$", "$2{,}381\\cdot10^{2}\\,\\text{Pa}$", "$6{,}884\\cdot10^{28}\\,\\text{Pa}$"],
      explanation: "$p = \\tfrac13(N/V)m\\langle v^2\\rangle$ med $\\langle v^2\\rangle = v_\\text{rms}^2$: $\\tfrac13\\cdot 3{,}20\\cdot10^{25}\\cdot 4{,}651\\cdot10^{-26}\\cdot 230400 = 1{,}143\\cdot10^{5}\\,\\text{Pa}$, altså om lag én atmosfære. Alternativet som er tre ganger større, har glemt faktoren $\\tfrac13$ fra de tre romretningene. Alternativet rundt $240\\,\\text{Pa}$ har brukt farten i første potens i stedet for kvadrert. Det klart største har satt inn den molare massen i stedet for massen til ett molekyl.",
    },
    {
      question: "Hva er massen til ett karbondioksidmolekyl? ($M = 44{,}01\\,\\text{g/mol}$)",
      options: ["$7{,}308\\cdot10^{-26}\\,\\text{kg}$", "$7{,}308\\cdot10^{-23}\\,\\text{kg}$", "$2{,}650\\cdot10^{22}\\,\\text{kg}$", "$4{,}651\\cdot10^{-26}\\,\\text{kg}$"],
      explanation: "$m = M/N_A = 0{,}04401/6{,}022\\cdot10^{23} = 7{,}308\\cdot10^{-26}\\,\\text{kg}$. Alternativet som er tusen ganger større, har brukt den molare massen i gram per mol uten å gjøre om til kilogram. Det enormt store alternativet har ganget med Avogadros tall i stedet for å dele. Alternativet på $4{,}651\\cdot10^{-26}\\,\\text{kg}$ er massen til et nitrogenmolekyl — riktig regnet, feil gass.",
    },
    {
      question: "En ideell gass komprimeres ved konstant temperatur fra $25{,}0\\,\\text{L}$ til $10{,}0\\,\\text{L}$. Starttrykket er $1{,}20\\cdot10^{5}\\,\\text{Pa}$. Hva blir slutt-trykket?",
      options: ["$3{,}000\\cdot10^{5}\\,\\text{Pa}$", "$4{,}800\\cdot10^{4}\\,\\text{Pa}$", "$4{,}328\\cdot10^{5}\\,\\text{Pa}$", "$1{,}800\\cdot10^{5}\\,\\text{Pa}$"],
      explanation: "Konstant temperatur gir $p_1V_1 = p_2V_2$, altså $p_2 = 1{,}20\\cdot10^{5}\\cdot 25{,}0/10{,}0 = 3{,}000\\cdot10^{5}\\,\\text{Pa}$. Alternativet som er lavere enn starttrykket, har snudd volumforholdet — en kompresjon kan ikke senke trykket ved fast temperatur. Alternativet rundt $4\\cdot10^{5}\\,\\text{Pa}$ har brukt $pV^{1{,}4} = \\text{konstant}$, altså adiabatrelasjonen, som hører til en prosess uten varmeutveksling og ikke til en isoterm. Alternativet på 1{,}800\\cdot10^{5}$\\,\\text{Pa}$ har lagt til halvparten av starttrykket uten begrunnelse.",
    },
    {
      question: "En gass med volum $60{,}0\\,\\text{L}$ ved $290\\,\\text{K}$ varmes til $435\\,\\text{K}$ ved konstant trykk. Hva blir volumet?",
      options: ["$90{,}00\\,\\text{L}$", "$576{,}3\\,\\text{L}$", "$40{,}00\\,\\text{L}$", "$74{,}50\\,\\text{L}$"],
      explanation: "Konstant trykk gir $V_1/T_1 = V_2/T_2$, altså $V_2 = 60{,}0\\cdot 435/290 = 90{,}00\\,\\text{L}$ — halvannen gang så stort, som svarer til halvannen gang temperaturen. Alternativet over $200$ liter er regnet med celsiustallene $16{,}85$ og $161{,}85$, der forholdet blir helt annet. Alternativet under startvolumet har snudd forholdet. Alternativet på 74{,}50$\\,\\text{L}$ har lagt til $0{,}1\\,\\text{L}$ per kelvin, en lineær regel som ikke gjelder.",
    },
    {
      question: "Hvilken av disse er **ikke** en tilstandsstørrelse?",
      options: ["Varmen $Q$, fordi den avhenger av veien systemet ble ført langs", "Trykket $p$, fordi det avhenger av hvor raskt gassen ble komprimert", "Volumet $V$, fordi det avhenger av hvordan beholderen ble fylt", "Den indre energien $U$, fordi den avhenger av arbeidet som ble gjort"],
      explanation: "Varme og arbeid er ikke tilstandsstørrelser: de beskriver **overføring** og avhenger av prosessveien. Trykk, volum og indre energi er entydig bestemt av tilstanden gassen er i nå. De tre gale svarene bruker samme begrunnelse «avhenger av hva som skjedde» om størrelser som nettopp ikke gjør det — for en ideell gass er $U$ bestemt av $T$ alene, uansett hvordan den kom dit.",
    },
    {
      question: "Hva er den indre energien i $3{,}00\\,\\text{mol}$ enatomig ideell gass ved $320\\,\\text{K}$?",
      options: ["$1{,}197\\cdot10^{4}\\,\\text{J}$", "$1{,}995\\cdot10^{4}\\,\\text{J}$", "$1{,}753\\cdot10^{3}\\,\\text{J}$", "$1{,}989\\cdot10^{-20}\\,\\text{J}$"],
      explanation: "$U = \\tfrac32nRT = 1{,}5\\cdot 3{,}00\\cdot 8{,}314\\cdot 320 = 1{,}197\\cdot10^{4}\\,\\text{J}$. Alternativet på 1{,}995\\cdot10^{4}$\\,\\text{J}$ har brukt faktoren $\\tfrac52$, som hører til en toatomig gass ved romtemperatur og ikke til en enatomig. Alternativet rundt $1{,}8\\cdot10^{3}\\,\\text{J}$ er regnet med celsiustallet $46{,}85$. Det ekstremt lille alternativet har brukt Boltzmanns konstant der stoffmengden er oppgitt i mol.",
    },
    {
      question: "Hva er partikkeltettheten i luft ved $1{,}013\\cdot10^{5}\\,\\text{Pa}$ og $293\\,\\text{K}$?",
      options: ["$2{,}504\\cdot10^{25}\\,\\text{m}^{-3}$", "$3{,}695\\cdot10^{26}\\,\\text{m}^{-3}$", "$4{,}158\\cdot10^{1}\\,\\text{m}^{-3}$", "$1{,}508\\cdot10^{49}\\,\\text{m}^{-3}$"],
      explanation: "$N/V = p/(k_BT) = 1{,}013\\cdot10^{5}/(1{,}381\\cdot10^{-23}\\cdot 293) = 2{,}504\\cdot10^{25}\\,\\text{m}^{-3}$ — altså rundt $2{,}5\\cdot10^{25}$ molekyler per kubikkmeter, et tall verdt å kjenne som referanse. Alternativet som er om lag femten ganger større, er regnet med celsiustallet $19{,}85$. Alternativet rundt $40\\,\\text{mol/m}^3$ er regnet med $R$ og gir mol per kubikkmeter. Det aller største har ganget med Avogadros tall en gang for mye.",
    },
    {
      question: "Hva skjer med Maxwell–Boltzmann-fordelingen når temperaturen i en gass økes?",
      options: ["Toppen flytter seg mot høyere fart, og kurven blir lavere og bredere", "Toppen flytter seg mot høyere fart, og kurven blir høyere og smalere", "Toppen ligger i ro, mens kurven blir lavere og bredere om den", "Toppen flytter seg mot lavere fart, og kurven blir lavere og bredere"],
      explanation: "Høyere temperatur gir raskere molekyler, så fordelingen flytter seg mot høyere fart — og fordi arealet under kurven alltid er hele molekylmengden, må en bredere kurve også være lavere. Svaret om at kurven blir høyere og smalere, bryter med at arealet er bevart. Svaret der toppen ligger i ro, gir en gass der den mest sannsynlige farten er uavhengig av temperaturen. Svaret der toppen flytter seg mot lavere fart, snur retningen: det beskriver kjøling, ikke oppvarming.",
    },
    {
      question: "Hvordan forholder de tre karakteristiske fartene i en gass seg til hverandre?",
      options: ["$v_\\text{p} < \\langle v\\rangle < v_\\text{rms}$", "$v_\\text{rms} < \\langle v\\rangle < v_\\text{p}$", "$\\langle v\\rangle < v_\\text{p} < v_\\text{rms}$", "$v_\\text{p} = \\langle v\\rangle = v_\\text{rms}$"],
      explanation: "Forholdene er $\\sqrt{2} : \\sqrt{8/\\pi} : \\sqrt{3} \\approx 1{,}41 : 1{,}60 : 1{,}73$, så den mest sannsynlige farten er minst og rotmiddelkvadratfarten størst. Grunnen er at kvadreringen vektlegger de raske molekylene i den lange halen tyngre. Svaret med motsatt rekkefølge snur nettopp dette. Svaret der middelfarten er minst, plasserer toppunktet feil. Og likhetstegnene forutsetter at alle molekylene har samme fart, som er nettopp det en fordeling ikke har.",
    },
    {
      question: "Under hvilke forhold svikter ideell-gass-modellen?",
      options: ["Ved høyt trykk og lav temperatur, der molekylene kommer tett på hverandre", "Ved lavt trykk og høy temperatur, der molekylene sjelden støter sammen", "Ved høyt trykk og høy temperatur, der støtene blir svært harde", "Ved lavt trykk og lav temperatur, der farten blir liten"],
      explanation: "Modellen forutsetter at molekylene har forsvinnende eget volum og ikke merker hverandre mellom støtene. Begge forutsetningene svikter når gassen presses sammen og kjøles ned mot kondensasjon — det er nettopp der van der Waals-modellen i Del 10 trengs. Svaret om lavt trykk og høy temperatur beskriver forholdene der modellen er **best**. De to andre blander inn støtenes styrke og molekylenes fart, som ikke er det avgjørende — avstanden mellom dem er det.",
    },
    {
      question: "$80{,}0\\,\\text{g}$ nitrogengass ($M = 28{,}01\\,\\text{g/mol}$) fyller $25{,}0\\,\\text{L}$ ved $300\\,\\text{K}$. Hva er trykket?",
      options: ["$2{,}849\\cdot10^{5}\\,\\text{Pa}$", "$1{,}994\\cdot10^{6}\\,\\text{Pa}$", "$2{,}550\\cdot10^{4}\\,\\text{Pa}$", "$2{,}849\\cdot10^{2}\\,\\text{Pa}$"],
      explanation: "$n = m/M = 0{,}0800/0{,}02801 = 2{,}856$ mol, og $p = nRT/V = 2{,}849\\cdot10^{5}\\,\\text{Pa}$. Alternativet rundt $2\\cdot10^{6}\\,\\text{Pa}$ er regnet med heliums molare masse — sju ganger for mange mol. Alternativet på 2{,}550\\cdot10^{4}$\\,\\text{Pa}$ har celsiustallet $26{,}85$ i stedet for $300$. Det minste alternativet har brukt den molare massen i gram per mol og fått tusen ganger for få mol.",
    },
    {
      question: "En gassflaske står ved fast temperatur. Trykket faller fra $1{,}50\\cdot10^{7}\\,\\text{Pa}$ til $6{,}00\\cdot10^{6}\\,\\text{Pa}$. Hvor stor andel av gassmassen er igjen?",
      options: ["$40\\ \\text{prosent}$", "$60\\ \\text{prosent}$", "$63\\ \\text{prosent}$", "$16\\ \\text{prosent}$"],
      explanation: "Med fast $V$ og fast $T$ er $n \\propto p$, så andelen igjen er $6{,}00\\cdot10^{6}/1{,}50\\cdot10^{7} = 0{,}40$. Svaret på $60$ prosent er andelen som er **brukt**, ikke den som er igjen — les hva som spørres om. Svaret på $63$ prosent er kvadratrota av forholdet, som ville hørt til en fartssammenligning og ikke til en masse. Og $16$ prosent er trykkforholdet i annen.",
    },
    {
      question: "To beholdere inneholder samme gass, den ene ved $250\\,\\text{K}$ og den andre ved $1000\\,\\text{K}$. Hvor mange ganger større er $v_\\text{rms}$ i den varme?",
      options: ["$2{,}00$", "$4{,}00$", "$1{,}41$", "$16{,}0$"],
      explanation: "$v_\\text{rms} \\propto \\sqrt{T}$, og $\\sqrt{1000/250} = \\sqrt{4} = 2{,}00$. Svaret $4{,}00$ er temperaturforholdet selv, altså forholdet mellom **energiene** og ikke mellom fartene. Svaret $1{,}41$ er rota av 2 og hører til en dobling av temperaturen, ikke en firedobling. Og $16{,}0$ er temperaturforholdet kvadrert.",
    },
    {
      question: "Du har regnet ut en stoffmengde og finner at ett mol av gassen fyller $0{,}024\\,\\text{L}$ ved omtrent én atmosfære. Hva er den mest sannsynlige forklaringen?",
      options: ["Volumet er satt inn i liter der kubikkmeter skulle stått", "Temperaturen er satt inn i celsius der kelvin skulle stått", "Gasskonstanten er brukt der Boltzmanns konstant skulle stått", "Trykket er satt inn i bar der pascal skulle stått"],
      explanation: "Ett mol ideell gass fyller om lag $24\\,\\text{L}$ ved én atmosfære, så et svar på $0{,}024\\,\\text{L}$ er tusen ganger for lite — nøyaktig faktoren mellom liter og kubikkmeter. En celsius-feil ville gitt et avvik på noen få eller noen få titalls prosent, ikke tre tierpotenser. En forveksling av $R$ og $k_B$ gir 23 tierpotenser. Og bar i stedet for pascal ville gitt en faktor $10^{5}$, ikke $10^{3}$.",
    },
  ],
  'tfy4115-6-2': [
    {
      question: "Hvor mange kvadratiske frihetsgrader har et enatomig gassmolekyl ved romtemperatur?",
      options: ["$3$", "$5$", "$6$", "$2$"],
      explanation: "Bare de tre translasjonsretningene er tilgjengelige; et punktformig atom har ikke noe treghetsmoment å rotere med. Svaret $5$ hører til et lineært (toatomig) molekyl, som i tillegg har to rotasjonsakser. Svaret $6$ hører til et bøyd molekyl med tre rotasjonsakser. Og $2$ ville betydd bevegelse i bare to romretninger, som ingen gass er begrenset til.",
    },
    {
      question: "Hvor mange frihetsgrader har karbondioksid (CO₂) ved romtemperatur?",
      options: ["$5$", "$6$", "$9$", "$3$"],
      explanation: "CO₂ er et **rett** molekyl (O=C=O), så rotasjon gir 2 og ikke 3: til sammen tre translasjoner pluss to rotasjoner. Svaret $6$ er fella — det gjelder et **bøyd** treatomig molekyl som vanndamp. Svaret $9$ kommer av å telle tre frihetsgrader per atom. Og $3$ ville gjort CO₂ til en enatomig gass. **Formen avgjør, ikke antall atomer.**",
    },
    {
      question: "Hvorfor gir én vibrasjonsmode **to** frihetsgrader?",
      options: ["Fordi energien er kvadratisk i både farten og utslaget", "Fordi molekylet kan vibrere i to uavhengige romretninger", "Fordi to atomer beveger seg samtidig i hver vibrasjon", "Fordi vibrasjonen er dobbelt så energirik som en rotasjon"],
      explanation: "En vibrerende binding er en harmonisk oscillator og lagrer energi i to kvadratiske former samtidig: kinetisk $\\tfrac12mv^2$ og potensiell $\\tfrac12kx^2$. Begge får sine $\\tfrac12k_BT$. Svaret om to romretninger beskriver ikke en enkelt mode. Svaret om to atomer forveksler antall partikler med antall energiformer. Og en vibrasjon er ikke «dobbelt så energirik» — den har to lommer, ikke større lommer.",
    },
    {
      question: "Hva er $C_V$ for en toatomig ideell gass ved romtemperatur?",
      options: ["$20{,}785\\,\\text{J/(mol}\\cdot\\text{K)}$", "$12{,}471\\,\\text{J/(mol}\\cdot\\text{K)}$", "$29{,}099\\,\\text{J/(mol}\\cdot\\text{K)}$", "$24{,}942\\,\\text{J/(mol}\\cdot\\text{K)}$"],
      explanation: "$C_V = \\tfrac{f}{2}R$ med $f = 5$, altså $\\tfrac52 \\cdot 8{,}314 = 20{,}785$. Verdien 12{,}471 er $\\tfrac32R$ og hører til en **enatomig** gass. Verdien 29{,}099 er $C_P$ for samme gass — det er felle #8, å forbytte de to varmekapasitetene. Og 24{,}942 er $3R$, altså seks frihetsgrader, som hører til et bøyd molekyl.",
    },
    {
      question: "Hva er $\\gamma$ for helium?",
      options: ["$1{,}6667$", "$1{,}4000$", "$1{,}2857$", "$0{,}60000$"],
      explanation: "Helium er enatomig, $f = 3$, så $\\gamma = (3+2)/3 = \\tfrac53 = 1{,}6667$. Verdien 1{,}4000 er $\\tfrac75$ og hører til en toatomig gass ved romtemperatur — den vanligste forvekslingen i sjangeren. Verdien 1{,}2857 er $\\tfrac97$, med aktiv vibrasjon. Og 0{,}60000 er forholdet snudd, altså $C_V/C_P$, som alltid er mindre enn 1.",
    },
    {
      question: "En ideell gass har $C_V = 20{,}8\\ \\text{J/(mol}\\cdot\\text{K)}$. Hva er $\\gamma$?",
      options: ["$1{,}3997$", "$1{,}6667$", "$0{,}71443$", "$0{,}60029$"],
      explanation: "$C_P = C_V + R = 20{,}8 + 8{,}314 = 29{,}114$, og $\\gamma = 1{,}3997$ — altså $\\tfrac75$, som bekrefter $f = 5$. Verdien $\\tfrac53$ hører til en enatomig gass. De to alternativene under 1 kan strykes uten regning, siden $C_P$ alltid er større enn $C_V$: det ene er forholdet snudd, det andre har minus der det skal være pluss.",
    },
    {
      question: "En gass har målt $\\gamma = 1{,}400$. Hvor mange frihetsgrader har molekylet?",
      options: ["$5$", "$3$", "$7$", "$4$"],
      explanation: "$f = 2/(\\gamma-1) = 2/0{,}400 = 5$. Svaret $3$ ville gitt $\\gamma = 1{,}667$, og $7$ ville gitt $1{,}286$. Svaret $4$ forekommer ikke for noe ideelt gassmolekyl — tellingen gir 3, 5, 6 eller 7, aldri 4, fordi rotasjon kommer i pakker på 2 eller 3 og vibrasjon i pakker på 2.",
    },
    {
      question: "Hva er den indre energien i $2{,}00\\,\\text{mol}$ enatomig ideell gass ved $350\\,\\text{K}$?",
      options: ["$8{,}7297\\cdot10^{3}\\,\\text{J}$", "$1{,}4549\\cdot10^{4}\\,\\text{J}$", "$1{,}9168\\cdot10^{3}\\,\\text{J}$", "$1{,}4501\\cdot10^{-20}\\,\\text{J}$"],
      explanation: "$U = \\tfrac32nRT = 1{,}5 \\cdot 2{,}00 \\cdot 8{,}314 \\cdot 350 = 8{,}7297\\cdot10^{3}\\,\\text{J}$. Alternativet som er $\\tfrac53$ ganger større, har brukt $\\tfrac52$, altså faktoren for en **toatomig** gass. Alternativet rundt $1{,}9\\cdot10^{3}\\,\\text{J}$ er regnet med celsiustallet $76{,}85$. Og det ekstremt lille alternativet har brukt Boltzmanns konstant der stoffmengden er i mol.",
    },
    {
      question: "Hvilken varmekapasitet står i uttrykket for $\\Delta U$ i en **isobar** prosess?",
      options: ["$C_V$, fordi indre energi bare avhenger av temperaturen", "$C_P$, fordi prosessen skjer ved konstant trykk", "$C_P$, fordi gassen gjør arbeid mens den varmes", "Gjennomsnittet av $C_V$ og $C_P$, fordi begge inngår"],
      explanation: "$\\Delta U = nC_V\\Delta T$ **alltid**, uansett prosess, fordi indre energi er en tilstandsfunksjon som bare avhenger av $T$. $C_P$ hører i uttrykket for **varmen** ved konstant trykk, ikke i $\\Delta U$. De to svarene med $C_P$ forveksler nettopp varme og energiendring — differansen er arbeidet $nR\\Delta T$. Og et gjennomsnitt av de to har ingen fysisk betydning.",
    },
    {
      question: "$2{,}00\\,\\text{mol}$ toatomig gass varmes $50{,}0\\,\\text{K}$ ved konstant volum. Hvor mye varme trengs?",
      options: ["$2078{,}5\\,\\text{J}$", "$2909{,}9\\,\\text{J}$", "$1247{,}1\\,\\text{J}$", "$831{,}40\\,\\text{J}$"],
      explanation: "Ved fast volum gjør gassen ikke arbeid, så $Q = nC_V\\Delta T = 2{,}00 \\cdot 20{,}785 \\cdot 50{,}0 = 2078{,}5\\,\\text{J}$. Alternativet på 2909{,}9$\\,\\text{J}$ har brukt $C_P$, som hører til konstant trykk. Alternativet rundt 1247{,}1$\\,\\text{J}$ har brukt $\\tfrac32R$, altså enatomig. Og det minste alternativet er $nR\\Delta T$, som er arbeidet i den isobare prosessen og ikke varmen her.",
    },
    {
      question: "Hvorfor er $C_P$ større enn $C_V$ for en gass?",
      options: ["Fordi gassen bruker en del av varmen på å utvide seg mot omgivelsene", "Fordi trykket i seg selv tilfører energi til molekylene", "Fordi flere frihetsgrader blir aktive ved konstant trykk", "Fordi temperaturen stiger langsommere når volumet er fast"],
      explanation: "Ved konstant trykk må gassen utvide seg mens den varmes, og arbeidet $p\\Delta V = nR\\Delta T$ må dekkes i tillegg til økningen i indre energi — derfor $C_P = C_V + R$. Svaret om at trykket tilfører energi, gir trykk en rolle det ikke har. Antall frihetsgrader avhenger av molekylet og temperaturen, ikke av om volumet holdes fast. Og temperaturen stiger **raskere** ved fast volum for samme tilførte varme, ikke langsommere.",
    },
    {
      question: "Hva er differansen $C_P - C_V$ for en ideell gass?",
      options: ["$8{,}314\\ \\text{J/(mol}\\cdot\\text{K)}$ for alle ideelle gasser", "$8{,}314\\ \\text{J/(mol}\\cdot\\text{K)}$ bare for enatomige gasser", "$1{,}381\\cdot10^{-23}\\ \\text{J/K}$ for alle ideelle gasser", "En verdi som avhenger av antall frihetsgrader i molekylet"],
      explanation: "$C_P - C_V = R$ følger direkte av energiregnskapet ved konstant trykk, og utledningen bruker bare gassloven — den er derfor uavhengig av hvor mange frihetsgrader molekylet har. Svaret som begrenser det til enatomige gasser, er nær-sant i den forstand at det stemmer der også, men det er ikke en begrensning. Boltzmanns konstant hører til uttrykk **per molekyl**. Og differansen avhenger nettopp **ikke** av $f$ — det er **forholdet** $\\gamma$ som gjør det.",
    },
    {
      question: "Hva skjer med $\\gamma$ når vibrasjonsmoden i en toatomig gass vekkes?",
      options: ["$\\gamma$ faller fra $\\tfrac75$ til $\\tfrac97$", "$\\gamma$ stiger fra $\\tfrac75$ til $\\tfrac97$", "$\\gamma$ stiger fra $\\tfrac75$ til $\\tfrac53$", "$\\gamma$ er uendret, siden $C_P-C_V$ er konstant"],
      explanation: "$f$ går fra 5 til 7, og $\\gamma = 1+2/f$ faller derfor fra 1{,}400 til 1{,}286. Begge varmekapasitetene stiger, men differansen er fast $R$, og forholdet mellom to voksende tall med fast differanse nærmer seg 1. Svarene der $\\gamma$ stiger, har snudd retningen; $\\tfrac53$ er dessuten verdien for **færrest** frihetsgrader. Og at differansen er konstant, er nettopp grunnen til at forholdet **endres**.",
    },
    {
      question: "Hvorfor vekkes rotasjon ved lavere temperatur enn vibrasjon?",
      options: ["Fordi rotasjonsnivåene ligger tettere enn vibrasjonsnivåene", "Fordi rotasjon krever mindre kraft enn vibrasjon", "Fordi rotasjon involverer hele molekylet og vibrasjon bare bindingen", "Fordi rotasjonsenergien ikke er kvantisert, mens vibrasjonsenergien er"],
      explanation: "En mode kan først bære energi når $k_BT$ er stor nok til å nå neste energinivå, og rotasjonsnivåene ligger langt tettere enn vibrasjonsnivåene — for hydrogen er rotasjonen vekket rundt hundre kelvin, vibrasjonen først ved noen tusen. Svaret om «mindre kraft» blander mekanisk motstand med energikvantisering. Svaret om hele molekylet mot bindingen beskriver bevegelsene riktig men forklarer ikke rekkefølgen. Og **begge** energiformene er kvantisert.",
    },
    {
      question: "Hvor mange frihetsgrader har metan (CH₄), som er en tetraeder?",
      options: ["$6$", "$5$", "$15$", "$3$"],
      explanation: "Metan er ikke-lineært, så alle tre rotasjonsakser har reelt treghetsmoment: tre translasjoner pluss tre rotasjoner gir $f = 6$ ved romtemperatur, der vibrasjonene er frosset ut. Svaret $5$ ville gjort molekylet rett. Svaret $15$ kommer av tre frihetsgrader per atom for fem atomer. Og $3$ ville gjort det enatomig.",
    },
    {
      question: "Hva er $\\gamma$ for vanndamp ved romtemperatur, etter ekvipartisjonsmodellen?",
      options: ["$1{,}3333$", "$1{,}4000$", "$1{,}6667$", "$1{,}2857$"],
      explanation: "Vanndamp er bøyd, altså $f = 6$, og $\\gamma = 8/6 = \\tfrac43 = 1{,}3333$. Verdien 1{,}4000 hører til et lineært molekyl, altså $f = 5$ — det er svaret du får hvis du behandler vann som CO₂. Verdien 1{,}6667 er enatomig, og 1{,}2857 krever sju frihetsgrader, altså aktiv vibrasjon.",
    },
    {
      question: "$1{,}50\\,\\text{mol}$ gass varmes $40{,}0\\,\\text{K}$. Forskjellen mellom varmen som trengs ved konstant trykk og ved konstant volum er:",
      options: ["$498{,}84\\,\\text{J}$", "$1247{,}1\\,\\text{J}$", "$1745{,}9\\,\\text{J}$", "$332{,}56\\,\\text{J}$"],
      explanation: "$Q_p - Q_V = n(C_P-C_V)\\Delta T = nR\\Delta T = 1{,}50 \\cdot 8{,}314 \\cdot 40{,}0 = 498{,}84\\,\\text{J}$ — og legg merke til at svaret ikke krever at du vet hvilken gass det er. Alternativene rundt 1247{,}1 og 1745{,}9 er de to varmene selv, ikke differansen. Og det minste alternativet har glemt stoffmengden.",
    },
    {
      question: "Hvilken av disse verdiene kan **ikke** være $\\gamma$ for en ideell gass?",
      options: ["$0{,}833$", "$1{,}286$", "$1{,}400$", "$1{,}667$"],
      explanation: "$\\gamma = C_P/C_V$ er alltid **større enn 1**, siden $C_P = C_V + R$. En verdi under 1 er derfor utelukket uten regning, og den er typisk forholdet snudd. De tre andre er nettopp $\\tfrac97$, $\\tfrac75$ og $\\tfrac53$, altså $f = 7$, $5$ og $3$ — den siste er den største verdien som finnes, for en enatomig gass.",
    },
    {
      question: "Ekvipartisjonsprinsippet sier at hver kvadratiske frihetsgrad bærer:",
      options: ["$\\tfrac12k_BT$ per molekyl, altså $\\tfrac12RT$ per mol", "$k_BT$ per molekyl, altså $RT$ per mol", "$\\tfrac32k_BT$ per molekyl, altså $\\tfrac32RT$ per mol", "$\\tfrac12k_BT$ per mol, altså $\\tfrac12RT$ per molekyl"],
      explanation: "Halve $k_BT$ per frihetsgrad per molekyl er prinsippets innhold, og per mol blir det halve $RT$ siden $R = N_Ak_B$. Svaret med hele $k_BT$ har glemt halvparten. Svaret med $\\tfrac32k_BT$ er den **totale** energien for tre translasjonsfrihetsgrader, ikke bidraget per frihetsgrad. Og det siste svaret har byttet om mol og molekyl — $R$ er den store konstanten og hører til mol.",
    },
    {
      question: "Hva er den spesifikke varmekapasiteten $c_p$ for luft, når $C_P = 29{,}099\\ \\text{J/(mol}\\cdot\\text{K)}$ og $M = 0{,}0290\\ \\text{kg/mol}$?",
      options: ["$1003\\,\\text{J/(kg}\\cdot\\text{K)}$", "$0{,}8439\\,\\text{J/(kg}\\cdot\\text{K)}$", "$716{,}7\\,\\text{J/(kg}\\cdot\\text{K)}$", "$1{,}003\\,\\text{J/(kg}\\cdot\\text{K)}$"],
      explanation: "$c_p = C_P/M = 29{,}099/0{,}0290 = 1003\\,\\text{J/(kg}\\cdot\\text{K)}$. Alternativet under 1 har ganget med den molare massen i stedet for å dele. Alternativet rundt 716{,}7 er regnet med $C_V$ og gir $c_V$, ikke $c_p$. Og det minste alternativet har brukt molar masse i gram per mol.",
    },
    {
      question: "En blanding av $1{,}00\\,\\text{mol}$ helium og $1{,}00\\,\\text{mol}$ nitrogen har effektiv molar $C_V$ lik:",
      options: ["$16{,}628\\,\\text{J/(mol}\\cdot\\text{K)}$", "$33{,}256\\,\\text{J/(mol}\\cdot\\text{K)}$", "$12{,}471\\,\\text{J/(mol}\\cdot\\text{K)}$", "$20{,}785\\,\\text{J/(mol}\\cdot\\text{K)}$"],
      explanation: "Varmekapasitet er ekstensiv, så totalen er $1{,}00 \\cdot 12{,}471 + 1{,}00 \\cdot 20{,}785$, og per mol deler du på $2{,}00$ mol: $16{,}628$. Alternativet på 33{,}256 er summen uten å dele — det er den **totale** varmekapasiteten i J/K, ikke den molare. De to andre er verdiene for de rene gassene, og blandingen må ligge mellom dem.",
    },
    {
      question: "Hvorfor blir helium varmere enn karbondioksid når begge tilføres samme varme per mol?",
      options: ["Fordi helium har færre frihetsgrader å fordele energien på", "Fordi heliumatomene er lettere og derfor lettere å akselerere", "Fordi helium leder varme bedre og fordeler den raskere", "Fordi karbondioksid taper varme til omgivelsene underveis"],
      explanation: "Temperatur måler translasjonsbevegelsen, og med bare tre frihetsgrader går all tilført energi dit i helium. Karbondioksid har fem, så noe av energien havner i rotasjon uten å heve temperaturen — derfor kreves mer varme per grad. Svaret om masse er nær-sant i at lette atomer får høyere fart, men $\\langle E_k\\rangle$ er masseuavhengig, så massen forklarer ikke varmekapasiteten. Varmeledning og varmetap er ytre forhold, ikke egenskaper ved gassen.",
    },
    {
      question: "$\\Delta U$ for en ideell gass som går fra $T_1$ til $T_2$ er:",
      options: ["$nC_V(T_2-T_1)$, uansett hvilken prosess som ble brukt", "$nC_P(T_2-T_1)$ hvis prosessen skjedde ved konstant trykk", "$nC_V(T_2-T_1)$ bare hvis volumet ble holdt konstant", "Avhengig av veien, siden $Q$ og $W$ avhenger av veien"],
      explanation: "Indre energi er en tilstandsfunksjon som for en ideell gass bare avhenger av temperaturen, så $\\Delta U = nC_V\\Delta T$ gjelder langs enhver vei. Svaret med $C_P$ er felle #8: det gir varmen ved konstant trykk, ikke energiendringen. Svaret som begrenser formelen til fast volum, er nettopp den vanligste misforståelsen. Og selv om $Q$ og $W$ hver for seg avhenger av veien, gjør ikke differansen $Q - W = \\Delta U$ det.",
    },
    {
      question: "Hva er $C_P$ for en enatomig ideell gass?",
      options: ["$20{,}785\\,\\text{J/(mol}\\cdot\\text{K)}$", "$12{,}471\\,\\text{J/(mol}\\cdot\\text{K)}$", "$29{,}099\\,\\text{J/(mol}\\cdot\\text{K)}$", "$17{,}459\\,\\text{J/(mol}\\cdot\\text{K)}$"],
      explanation: "$C_P = C_V + R = \\tfrac32R + R = \\tfrac52R = 20{,}785$. Verdien 12{,}471 er $C_V$ for samme gass, altså de to forbyttet. Verdien 29{,}099 er $\\tfrac72R$ og hører til en toatomig gass. Verdien 17{,}459 er $C_V$ ganget med $\\gamma = \\tfrac75$ — riktig idé (siden $C_P = \\gamma C_V$), men med $\\gamma$ for feil gass; for en enatomig gass skal faktoren være $\\tfrac53$.",
    },
    {
      question: "Målt $C_V$ for karbondioksid ved romtemperatur er om lag $28{,}5\\ \\text{J/(mol}\\cdot\\text{K)}$, mens modellen forutsier 20{,}785. Hva er forklaringen?",
      options: ["En vibrasjonsmode med liten nivåavstand er delvis vekket", "Karbondioksid er ikke-lineært og har seks frihetsgrader", "Målingen er gjort ved konstant trykk og gir derfor $C_P$", "Karbondioksid er ikke en ideell gass ved romtemperatur"],
      explanation: "CO₂ har en bøyemode med uvanlig lav nivåavstand, som er **delvis** aktiv alt ved romtemperatur og gir et delvis bidrag — derfor havner målingen mellom 20{,}785 og 29{,}099. Svaret om at molekylet er bøyd, er feil: CO₂ er rett. Svaret om $C_P$ er nær-sant i at $C_P = 29{,}099$ ligger i nærheten, men målingen er oppgitt som $C_V$, og forskjellen ville i så fall vært eksakt $R$. Og CO₂ oppfyller ideell-gass-antakelsene godt ved atmosfæretrykk.",
    },
    {
      question: "En gass komprimeres til halve volumet langs $pV^\\gamma = \\text{konstant}$. Hvor mye større blir trykket for en toatomig gass enn hva du ville fått med $\\gamma$ for en enatomig?",
      options: ["Det toatomige svaret er om lag $16{,}9$ prosent lavere", "Det toatomige svaret er om lag 20{,}3 prosent høyere", "De to svarene er like, siden volumforholdet er det samme", "Det toatomige svaret er om lag dobbelt så stort"],
      explanation: "Med $\\gamma = \\tfrac75$ blir trykkforholdet $2^{1{,}400} = 2{,}6390$, og med $\\gamma = \\tfrac53$ blir det $2^{1{,}667} = 3{,}1748$. Det toatomige svaret er altså lavere, siden en lavere eksponent gir mindre trykkøkning. Svaret om at det er høyere, snur retningen. At de skulle vært like, ville krevd at $\\gamma$ ikke sto i eksponenten — og det er nettopp derfor feil $\\gamma$ er så dyrt. Faktoren mellom dem er langt fra 2.",
    },
  ],
  'tfy4115-6-3': [
    {
      question: "$0{,}750\\,\\text{mol}$ gass har trykket $2{,}80\\cdot10^{5}\\,\\text{Pa}$ ved $315\\,\\text{K}$. Hva er volumet?",
      options: ["$7{,}015\\,\\text{L}$", "$0{,}9320\\,\\text{L}$", "$7{,}015\\cdot10^{-3}\\,\\text{L}$", "$7{,}015\\cdot10^{3}\\,\\text{L}$"],
      explanation: "$V = nRT/p = 0{,}750 \\cdot 8{,}314 \\cdot 315/2{,}80\\cdot10^{5} = 7{,}015\\cdot10^{-3}\\,\\text{m}^3 = 7{,}015\\,\\text{L}$. Alternativet rundt $1{,}5\\,\\text{L}$ er regnet med celsiustallet $41{,}85$. Alternativet på om lag $7\\cdot10^{-3}$ er svaret i kubikkmeter, altså riktig tall men feil enhet — les hva som etterspørres. Og det aller største har en tierpotens for mye i omregningen til liter.",
    },
    {
      question: "En gass med volum $25{,}0\\,\\text{L}$ ved $320\\,\\text{K}$ varmes til $400\\,\\text{K}$ ved konstant trykk. Hva blir volumet?",
      options: ["$31{,}25\\,\\text{L}$", "$20{,}00\\,\\text{L}$", "$67{,}69\\,\\text{L}$", "$105{,}0\\,\\text{L}$"],
      explanation: "Konstant trykk gir $V_1/T_1 = V_2/T_2$, altså $V_2 = 25{,}0 \\cdot 400/320 = 31{,}25\\,\\text{L}$ — en fjerdedel større, som svarer til en fjerdedel høyere absolutt temperatur. Alternativet under startvolumet har snudd forholdet. Alternativet over $60\\,\\text{L}$ er regnet med celsiustallene $46{,}85$ og $126{,}85$. Og alternativet på $105\\,\\text{L}$ har lagt til én liter per kelvin.",
    },
    {
      question: "Hvor mange molekyler er det i $1{,}00\\,\\text{L}$ gass ved $5{,}00\\cdot10^{4}\\,\\text{Pa}$ og $250\\,\\text{K}$?",
      options: ["$1{,}448\\cdot10^{22}$", "$2{,}406\\cdot10^{-2}$", "$8{,}721\\cdot10^{45}$", "$1{,}448\\cdot10^{19}$"],
      explanation: "$N = pV/(k_BT) = 50{,}0/(3{,}4525\\cdot10^{-21}) = 1{,}448\\cdot10^{22}$. Alternativet rundt $10^{-2}$ er regnet med gasskonstanten og gir stoffmengden i mol. Det ekstremt store alternativet har ganget med Avogadros tall i tillegg. Og alternativet som er tusen ganger mindre, har volumet i liter behandlet som kubikkmeter og deretter delt på tusen.",
    },
    {
      question: "Hva er $v_\\text{rms}$ for hydrogengass ($M = 2{,}016\\,\\text{g/mol}$) ved $273\\,\\text{K}$?",
      options: ["$1838\\,\\text{m/s}$", "$1061\\,\\text{m/s}$", "$58{,}12\\,\\text{m/s}$", "$3{,}378\\cdot10^{6}\\,\\text{m/s}$"],
      explanation: "$v_\\text{rms} = \\sqrt{3RT/M} = \\sqrt{3 \\cdot 8{,}314 \\cdot 273/0{,}002016} = 1838\\,\\text{m/s}$ — hydrogen er den raskeste av alle gasser ved gitt temperatur. Alternativet rundt 1061 mangler faktoren 3. Alternativet rundt $58\\,\\text{m/s}$ har brukt molar masse i gram per mol. Og det største har glemt kvadratrota, som enheten avslører.",
    },
    {
      question: "Ved samme temperatur er $v_\\text{rms}$ for oksygengass ($32{,}00\\,\\text{g/mol}$) sammenlignet med metan ($16{,}04\\,\\text{g/mol}$):",
      options: ["$0{,}7080$ ganger så stor", "$0{,}5012$ ganger så stor", "$1{,}412$ ganger så stor", "Like stor, siden temperaturen er den samme"],
      explanation: "$v_1/v_2 = \\sqrt{M_2/M_1} = \\sqrt{16{,}04/32{,}00} = 0{,}7080$ — oksygen er tyngst og derfor langsomst. Alternativet på $0{,}5013$ er masseforholdet uten kvadratrot, altså energiforholdet og ikke fartsforholdet. Alternativet over 1 har snudd forholdet, som ville gjort den tunge gassen raskest. Og «like stor» gjelder for **midlere kinetisk energi**, ikke for farten.",
    },
    {
      question: "Hvor mange frihetsgrader har dinitrogenoksid (N₂O, som er et rett molekyl) ved romtemperatur?",
      options: ["$5$", "$6$", "$3$", "$9$"],
      explanation: "Rett molekyl betyr lineært: tre translasjoner pluss to rotasjoner, altså $f = 5$. Svaret $6$ hører til et **bøyd** treatomig molekyl som SO₂ eller vanndamp — det er den nærmeste distraktoren, og skillet er utelukkende geometrisk. Svaret $3$ ville gjort molekylet enatomig, og $9$ kommer av å telle tre frihetsgrader per atom.",
    },
    {
      question: "En gass har målt $C_V = 12{,}5\\ \\text{J/(mol}\\cdot\\text{K)}$. Hva slags gass er det?",
      options: ["Enatomig, med tre frihetsgrader", "Toatomig, med fem frihetsgrader", "Bøyd treatomig, med seks frihetsgrader", "Toatomig med aktiv vibrasjon, med sju frihetsgrader"],
      explanation: "$f = 2C_V/R = 2 \\cdot 12{,}5/8{,}314 = 3{,}0070$, altså $f = 3$ — enatomig, som helium eller argon. De tre andre svarene svarer til $C_V = 20{,}79$, 24{,}94$ og 29{,}10\\ \\text{J/(mol}\\cdot\\text{K)}$, altså tydelig høyere verdier enn den målte.",
    },
    {
      question: "En gass har $\\gamma = 1{,}333$. Hvor mange frihetsgrader har molekylet?",
      options: ["$6$", "$5$", "$3$", "$7$"],
      explanation: "$f = 2/(\\gamma-1) = 2/0{,}333 = 6{,}006$, altså $f = 6$ — et bøyd molekyl med tre rotasjonsakser. Svaret $5$ ville gitt $1{,}400$, $3$ ville gitt $1{,}667$, og $7$ ville gitt $1{,}286$. Merk at nevneren $\\gamma-1$ er liten, så du må beholde alle sifrene i $\\gamma$.",
    },
    {
      question: "Hva er den indre energien i $3{,}20\\,\\text{mol}$ nitrogengass ved $290\\,\\text{K}$?",
      options: ["$1{,}9288\\cdot10^{4}\\,\\text{J}$", "$1{,}1573\\cdot10^{4}\\,\\text{J}$", "$2{,}7004\\cdot10^{4}\\,\\text{J}$", "$1{,}1207\\cdot10^{3}\\,\\text{J}$"],
      explanation: "Nitrogen er toatomig, $f = 5$, så $U = \\tfrac52nRT = 2{,}5 \\cdot 3{,}20 \\cdot 8{,}314 \\cdot 290 = 1{,}9288\\cdot10^{4}\\,\\text{J}$. Alternativet som er tre femtedeler av dette, har brukt $\\tfrac32$, altså enatomig — felle #9. Alternativet som er sju femtedeler større, har brukt $\\tfrac72$, altså med aktiv vibrasjon. Og det minste alternativet er regnet med celsiustallet $16{,}85$.",
    },
    {
      question: "$0{,}900\\,\\text{mol}$ helium varmes $80{,}0\\,\\text{K}$ ved konstant trykk. Hvor mye varme trengs?",
      options: ["$1496{,}5\\,\\text{J}$", "$897{,}91\\,\\text{J}$", "$2095{,}1\\,\\text{J}$", "$598{,}61\\,\\text{J}$"],
      explanation: "Helium er enatomig, så $C_P = \\tfrac52R = 20{,}785$, og $Q = nC_P\\Delta T = 1496{,}5\\,\\text{J}$. Alternativet på 897{,}91$\\,\\text{J}$ har brukt $C_V$, som hører til konstant volum — differansen er nettopp arbeidet gassen gjør. Alternativet rundt 2095{,}1 har brukt $\\tfrac72R$, altså en toatomig gass. Og det minste alternativet er $nR\\Delta T$, som er arbeidet alene.",
    },
    {
      question: "Hva er partikkeltettheten i et vakuumkammer ved $1{,}00\\cdot10^{-3}\\,\\text{Pa}$ og $300\\,\\text{K}$?",
      options: ["$2{,}414\\cdot10^{17}\\,\\text{m}^{-3}$", "$4{,}009\\cdot10^{-7}\\,\\text{m}^{-3}$", "$2{,}697\\cdot10^{18}\\,\\text{m}^{-3}$", "$4{,}143\\cdot10^{-24}\\,\\text{m}^{-3}$"],
      explanation: "$N/V = p/(k_BT) = 1{,}00\\cdot10^{-3}/(4{,}143\\cdot10^{-21}) = 2{,}414\\cdot10^{17}\\,\\text{m}^{-3}$ — altså fremdeles hundrevis av milliarder molekyler per kubikkcentimeter. Alternativet rundt $4\\cdot10^{-7}$ er regnet med gasskonstanten og gir mol per kubikkmeter. Alternativet som er om lag elleve ganger større, er regnet med celsiustallet $26{,}85$. Og det minste har ganget med $k_BT$ i stedet for å dele.",
    },
    {
      question: "Hva er massen til ett argonatom? ($M = 39{,}95\\,\\text{g/mol}$)",
      options: ["$6{,}634\\cdot10^{-26}\\,\\text{kg}$", "$6{,}634\\cdot10^{-23}\\,\\text{kg}$", "$2{,}406\\cdot10^{22}\\,\\text{kg}$", "$4{,}651\\cdot10^{-26}\\,\\text{kg}$"],
      explanation: "$m = M/N_A = 0{,}03995/6{,}022\\cdot10^{23} = 6{,}634\\cdot10^{-26}\\,\\text{kg}$. Alternativet som er tusen ganger større, har brukt molar masse i gram per mol. Det enormt store har ganget med Avogadros tall i stedet for å dele. Og alternativet på $4{,}651\\cdot10^{-26}\\,\\text{kg}$ er massen til et nitrogenmolekyl — riktig regnet, feil gass.",
    },
    {
      question: "Du har regnet ut $\\gamma = 0{,}714$ for en gass. Hva har gått galt?",
      options: ["Forholdet er snudd — du har regnet $C_V/C_P$", "Temperaturen er satt inn i celsius i stedet for kelvin", "Du har brukt Boltzmanns konstant der gasskonstanten hører", "Du har telt for få frihetsgrader i molekylet"],
      explanation: "$\\gamma = C_P/C_V$ er alltid **større enn 1**, siden $C_P = C_V + R$. En verdi under 1 kan bare komme av at brøken er snudd — og $1/0{,}714 = 1{,}401$, altså $\\tfrac75$. Kelvin-feil og feil konstant påvirker ikke $\\gamma$, siden begge varmekapasitetene ville blitt like skjeve. Og for få frihetsgrader ville gitt en **for høy** $\\gamma$, ikke en under 1.",
    },
    {
      question: "En gassflaske ved fast temperatur har trykket $2{,}00\\cdot10^{7}\\,\\text{Pa}$. Etter bruk er det $5{,}00\\cdot10^{6}\\,\\text{Pa}$. Hvor stor andel av gassmassen er brukt?",
      options: ["$75\\ \\text{prosent}$", "$25\\ \\text{prosent}$", "$50\\ \\text{prosent}$", "$94\\ \\text{prosent}$"],
      explanation: "Ved fast volum og fast temperatur er $n \\propto p$, så andelen **igjen** er $5{,}00\\cdot10^{6}/2{,}00\\cdot10^{7} = 0{,}25$, og andelen **brukt** er $75$ prosent. Svaret $25$ prosent er andelen som er igjen — les hva som spørres om. Svaret $50$ prosent svarer til et halvert trykk. Og $94$ prosent er $1$ minus kvadratet av forholdet.",
    },
    {
      question: "Hvorfor faller $\\gamma$ når antall frihetsgrader øker?",
      options: ["Fordi differansen $C_P-C_V=R$ er fast mens begge tallene vokser", "Fordi $C_P$ vokser langsommere enn $C_V$ ved flere frihetsgrader", "Fordi gassen utvider seg mindre når den har flere frihetsgrader", "Fordi $R$ blir en større del av varmekapasiteten ved flere frihetsgrader"],
      explanation: "$\\gamma = C_P/C_V$ med $C_P - C_V = R$ fast: forholdet mellom to voksende tall med konstant differanse nærmer seg 1. Svaret om at $C_P$ vokser langsommere, er galt — begge vokser med $\\tfrac12R$ per frihetsgrad. Utvidelsesarbeidet $nR\\Delta T$ avhenger ikke av $f$ i det hele tatt. Og $R$ blir en **mindre** del av et større regnskap, ikke en større.",
    },
    {
      question: "En gassmengde får halvert volum og samtidig doblet absolutt temperatur. Hvor mange ganger større blir trykket?",
      options: ["$4{,}00$", "$2{,}00$", "$1{,}00$", "$3{,}00$"],
      explanation: "$p_2/p_1 = (V_1/V_2)(T_2/T_1) = 2 \\cdot 2 = 4{,}00$. De to forholdene **ganges**, ikke legges sammen. Svaret $2{,}00$ tar bare hensyn til én av de to endringene. Svaret $1{,}00$ ville krevd at de to virket mot hverandre, men både kompresjon og oppvarming hever trykket. Og $3{,}00$ er summen av de to faktorene minus 1, altså den vanlige addisjonsfellen.",
    },
  ],
  'tfy4115-7-1': [
    {
      question: "En gass mottar $850\\,\\text{J}$ varme og gjør $320\\,\\text{J}$ arbeid på omgivelsene. Hva er $\\Delta U$?",
      options: ["$530\\,\\text{J}$", "$1170\\,\\text{J}$", "$-530\\,\\text{J}$", "$320\\,\\text{J}$"],
      explanation: "$\\Delta U = Q - W = 850 - 320 = 530\\,\\text{J}$. Alternativet på $1170\\,\\text{J}$ har lagt til arbeidet i stedet for å trekke det fra, altså brukt den andre fortegnskonvensjonen uten å snu definisjonen av $W$. Alternativet på $-530\\,\\text{J}$ har snudd hele differansen. Og $320\\,\\text{J}$ er arbeidet selv, ikke energiendringen.",
    },
    {
      question: "Hvilken av de fire prosessene har $W = 0$?",
      options: ["Isokor, fordi volumet ikke endres", "Isoterm, fordi temperaturen ikke endres", "Adiabat, fordi ingen varme utveksles", "Isobar, fordi trykket ikke endres"],
      explanation: "$W = \\int p\\,dV$ er null bare når $dV$ er null, altså ved fast volum. I en isoterm er det $\\Delta U$ som er null, og i en adiabat er det $Q$. Den isobare har tvert imot det enkleste arbeidet av alle, $p\\,\\Delta V$ — et rektangel. Å plassere nullen feil er felle #10, prosessforveksling.",
    },
    {
      question: "$2{,}00\\,\\text{mol}$ toatomig gass varmes $60{,}0\\,\\text{K}$ ved konstant trykk. Hva er $\\Delta U$?",
      options: ["$2494{,}2\\,\\text{J}$", "$3491{,}9\\,\\text{J}$", "$997{,}68\\,\\text{J}$", "$1496{,}5\\,\\text{J}$"],
      explanation: "$\\Delta U = nC_V\\Delta T$ **uansett prosess**, også i en isobar: $2{,}00 \\cdot 20{,}785 \\cdot 60{,}0 = 2494{,}2\\,\\text{J}$. Alternativet på 3491{,}9$\\,\\text{J}$ har brukt $C_P$ — det er varmen, ikke energiendringen, og differansen er nettopp arbeidet. Alternativet på 997{,}68$\\,\\text{J}$ er arbeidet alene. Og det minste er regnet med $\\tfrac32R$, altså enatomig.",
    },
    {
      question: "En ideell gass utvider seg isotermt. Hva er $Q$?",
      options: ["Like stor som arbeidet, og positiv", "Null, siden temperaturen er konstant", "Like stor som arbeidet, men negativ", "Halvparten av arbeidet, siden resten går til indre energi"],
      explanation: "Isoterm betyr $\\Delta U = 0$ for en ideell gass, og da gir $\\Delta U = Q - W$ at $Q = W$. Ved ekspansjon er $W$ positiv, altså strømmer varme **inn**. Svaret «null» forveksler $\\Delta U = 0$ med $Q = 0$ — det siste gjelder en adiabat. Svaret med negativ $Q$ beskriver en kompresjon. Og ingenting går til indre energi når temperaturen er uendret.",
    },
    {
      question: "Hvorfor er adiabaten brattere enn isotermen i et $pV$-diagram?",
      options: ["Fordi trykket faller både av volumøkningen og av temperaturfallet", "Fordi adiabaten har større arbeid under kurven", "Fordi adiabaten går gjennom flere tilstander enn isotermen", "Fordi trykket langs en adiabat er høyere i hvert punkt"],
      explanation: "Langs en isoterm holdes temperaturen oppe av varme utenfra, så trykket faller bare fordi volumet vokser. Langs en adiabat får gassen ingen varme, så temperaturen faller i tillegg, og trykket faller av to grunner — helningen er $\\gamma$ ganger så stor. Adiabatisk arbeid ved ekspansjon er **mindre**, ikke større, siden arealet under er mindre. Og adiabaten ligger under isotermen ved ekspansjon, ikke over.",
    },
    {
      question: "En **toatomig** ideell gass komprimeres adiabatisk til halve volumet. Hvor mange ganger større blir trykket?",
      options: ["$2{,}6390$", "$3{,}1748$", "$2{,}00$", "$1{,}3195$"],
      explanation: "$p_2/p_1 = (V_1/V_2)^\\gamma = 2^{1{,}4000} = 2{,}6390$. Alternativet på 3{,}1748 er regnet med $\\gamma = \\tfrac53$, altså en enatomig gass — felle #8. Alternativet $2{,}00$ er det **isoterme** svaret ($pV$ konstant), og det må være mindre siden adiabaten er brattere. Og 1{,}3195 er regnet med eksponenten $\\gamma-1$, som gir **temperatur**forholdet og ikke trykkforholdet.",
    },
    {
      question: "En toatomig gass komprimeres adiabatisk fra $300\\,\\text{K}$ til en tredjedel av volumet. Hva blir temperaturen?",
      options: ["$465{,}55\\,\\text{K}$", "$1396{,}7\\,\\text{K}$", "$624{,}03\\,\\text{K}$", "$900{,}0\\,\\text{K}$"],
      explanation: "$TV^{\\gamma-1} = \\text{konstant}$ gir $T_2 = 300 \\cdot 3^{0{,}40000} = 465{,}55\\,\\text{K}$. Alternativet rundt 1397$\\,\\text{K}$ har brukt eksponenten $\\gamma$, som hører til trykket. Alternativet på 624{,}03$\\,\\text{K}$ er regnet med enatomig $\\gamma$. Og $900\\,\\text{K}$ ville krevd at temperaturen fulgte volumforholdet direkte, som ingen prosess gjør.",
    },
    {
      question: "En gass utvider seg $25{,}0\\,\\text{L}$ ved konstant trykk $1{,}80\\cdot10^{5}\\,\\text{Pa}$. Hvor mye arbeid gjør den?",
      options: ["$4500{,}0\\,\\text{J}$", "$4{,}5000\\,\\text{J}$", "$4{,}5000\\cdot10^{6}\\,\\text{J}$", "$-4500{,}0\\,\\text{J}$"],
      explanation: "$W = p\\,\\Delta V = 1{,}80\\cdot10^{5} \\cdot 0{,}0250 = 4500{,}0\\,\\text{J}$, positivt fordi gassen utvider seg. Alternativet på 4{,}5000$\\,\\text{J}$ har volumet i liter behandlet som kubikkmeter. Det tusen ganger større har omregnet feil vei. Og det negative alternativet ville betydd at omgivelsene gjorde arbeid på gassen, altså en kompresjon.",
    },
    {
      question: "En gass i en **stiv** beholder mottar $$1400\\,\\text{J}$$ varme. Hva er $\\Delta U$?",
      options: ["$1400\\,\\text{J}$", "$0\\,\\text{J}$", "$700\\,\\text{J}$", "$-1400\\,\\text{J}$"],
      explanation: "Stiv beholder betyr fast volum, altså $W = 0$, og da er $\\Delta U = Q = 1400\\,\\text{J}$. Svaret null forveksler «ingen arbeid» med «ingen energiendring» — det er nettopp fordi arbeidet er null at **all** varmen blir indre energi. Halvparten har ingen begrunnelse, og det negative svaret ville betydd at gassen ble kaldere av å motta varme ved fast volum.",
    },
    {
      question: "Hvilken adiabatform bruker du hvis oppgaven gir deg **trykk og temperatur**?",
      options: ["$T^{\\gamma}/p^{\\gamma-1} = \\text{konstant}$", "$pV^{\\gamma} = \\text{konstant}$", "$TV^{\\gamma-1} = \\text{konstant}$", "$pV = nRT$, siden alle tre alltid kan brukes"],
      explanation: "De tre adiabatformene er samme relasjon skrevet i ulike variabelpar, og du velger den som inneholder de to størrelsene du har fått. $pV^\\gamma$ knytter trykk og volum, $TV^{\\gamma-1}$ knytter temperatur og volum. Gassloven er riktig men utilstrekkelig alene: den inneholder tre variabler og gir ingen informasjon om at prosessen er adiabatisk.",
    },
    {
      question: "$1{,}00\\,\\text{mol}$ ideell gass utvider seg isotermt ved $400\\,\\text{K}$ til dobbelt volum. Hvor mye arbeid gjør den?",
      options: ["$2305{,}1\\,\\text{J}$", "$6651{,}2\\,\\text{J}$", "$1001{,}1\\,\\text{J}$", "$3325{,}6\\,\\text{J}$"],
      explanation: "$W = nRT\\ln(V_2/V_1) = 8{,}314 \\cdot 400 \\cdot 0{,}69315 = 2305{,}1\\,\\text{J}$. Alternativet rundt 6651{,}2$\\,\\text{J}$ har satt inn volumforholdet $2$ i stedet for logaritmen av det. Alternativet rundt 1001{,}1$\\,\\text{J}$ har brukt titallslogaritmen. Og 3325{,}6$\\,\\text{J}$ er $nRT$ alene, uten logaritmefaktoren.",
    },
    {
      question: "Kan en gass motta varme og likevel bli kaldere?",
      options: ["Ja, hvis den samtidig gjør mer arbeid enn varmen som kommer inn", "Nei, tilført varme øker alltid temperaturen", "Ja, men bare hvis gassen ikke er ideell", "Ja, men bare i en isoterm prosess"],
      explanation: "$\\Delta U = Q - W$ kan være negativ selv med positiv $Q$, hvis $W > Q$. Da betaler gassen for arbeidet dels med varmen og dels med sin egen indre energi, og temperaturen faller. Svaret «nei» overser at varme og temperaturendring er to ulike ting. Det gjelder også for en ideell gass. Og i en isoterm prosess er temperaturen per definisjon uendret, så det er nettopp det tilfellet der det **ikke** skjer.",
    },
    {
      question: "$1{,}50\\,\\text{mol}$ enatomig gass varmes $45{,}0\\,\\text{K}$ ved konstant trykk. Hvor mye arbeid gjør gassen?",
      options: ["$561{,}20\\,\\text{J}$", "$841{,}79\\,\\text{J}$", "$1403{,}0\\,\\text{J}$", "$0\\,\\text{J}$"],
      explanation: "Ved konstant trykk er $W = p\\,\\Delta V = nR\\,\\Delta T = 1{,}50 \\cdot 8{,}314 \\cdot 45{,}0 = 561{,}20\\,\\text{J}$ — du trenger hverken trykk eller volum. Alternativet rundt 841{,}79$\\,\\text{J}$ er $\\Delta U$, og alternativet rundt 1403{,}0$\\,\\text{J}$ er varmen. Null ville gjeldt en isokor prosess.",
    },
    {
      question: "Hvilket signalord i en oppgavetekst peker på en **adiabatisk** prosess?",
      options: ["«Raskt» eller «isolert»", "«Langsomt» eller «i vannbad»", "«Fritt stempel» eller «åpen beholder»", "«Stiv beholder» eller «fast volum»"],
      explanation: "En rask prosess rekker ikke å utveksle varme, og en isolert kan ikke — begge gir $Q = 0$. «Langsomt» og «vannbad» peker motsatt vei, på en **isoterm**, fordi temperaturen da rekker å jevne seg ut. «Fritt stempel» gir isobar, og «stiv beholder» gir isokor. Ordparet «raskt» mot «langsomt» er det som oftest leses feil under tidspress.",
    },
    {
      question: "Hva er arealet under prosessveien i et $pV$-diagram?",
      options: ["Arbeidet gassen gjør", "Den tilførte varmen", "Endringen i indre energi", "Endringen i entropi"],
      explanation: "$W = \\int p\\,dV$ er per definisjon arealet under kurven når volumet står på den vannrette aksen. Varmen er **ikke** et areal i $pV$-diagrammet (den er det i et $T$–$S$-diagram). Indre energi er en tilstandsstørrelse og har ingen areal-tolkning i det hele tatt. Og entropiendringen krever et annet diagram.",
    },
    {
      question: "$2{,}00\\,\\text{mol}$ gass komprimeres isotermt ved $320\\,\\text{K}$ til $40\\,\\text{prosent}$ av volumet. Hva er varmen?",
      options: ["$-4875{,}5\\,\\text{J}$", "$4875{,}5\\,\\text{J}$", "$0\\,\\text{J}$", "$-3192{,}6\\,\\text{J}$"],
      explanation: "$Q = W = nRT\\ln(V_2/V_1) = 2{,}00 \\cdot 8{,}314 \\cdot 320 \\cdot \\ln 0{,}40 = -4875{,}5\\,\\text{J}$ — negativ, altså varme **ut** av gassen. Logaritmen av et tall under 1 er negativ, og det er nettopp det som gir riktig fortegn. Det positive alternativet har mistet minustegnet. Nullsvaret forveksler $\\Delta U = 0$ med $Q = 0$; i en isoterm kompresjon skjer det tvert imot mye, det er bare energiendringen som er null. Og alternativet på -3192{,}6$\\,\\text{J}$ har brukt den relative volumendringen $V_2/V_1 - 1$ i stedet for logaritmen av forholdet.",
    },
    {
      question: "Over en full kretsprosess (lukket sløyfe i $pV$-diagrammet) gjelder:",
      options: ["$\\Delta U = 0$, altså $Q_\\text{netto} = W_\\text{netto}$", "$Q_\\text{netto} = 0$, altså $\\Delta U = -W_\\text{netto}$", "$W_\\text{netto} = 0$, siden gassen ender der den startet", "Alle tre er null, siden tilstanden er uendret"],
      explanation: "Indre energi er en tilstandsfunksjon, så den er uendret når gassen ender i utgangstilstanden — derfor $\\Delta U = 0$ og $Q_\\text{netto} = W_\\text{netto}$. At netto arbeid skulle være null, er nettopp det som **ikke** gjelder: arbeidet er arealet inne i sløyfa, og det er grunnlaget for enhver varmekraftmaskin. At alle tre er null, ville gjort motorer umulige.",
    },
    {
      question: "I en isobar prosess med en toatomig gass: hvor stor andel av den tilførte varmen går til arbeid?",
      options: ["$2/7$, altså om lag $29\\ \\text{prosent}$", "$2/5$, altså om lag $40\\ \\text{prosent}$", "$5/7$, altså om lag $71\\ \\text{prosent}$", "Det avhenger av hvor mye gassen varmes"],
      explanation: "$W/Q = nR\\Delta T/(nC_P\\Delta T) = R/C_P = 2/(f+2) = 2/7$ for $f = 5$ — og legg merke til at $\\Delta T$ faller ut, så andelen er den samme uansett hvor mye gassen varmes. Brøken $2/5$ gjelder en **enatomig** gass. Brøken $5/7$ er andelen som går til **indre energi**, altså komplementet. Og svaret om at det avhenger av oppvarmingen, overser at $\\Delta T$ forkortes bort.",
    },
    {
      question: "Hvorfor blir en sykkelpumpe varm når du pumper raskt?",
      options: ["Kompresjonsarbeidet blir indre energi fordi varmen ikke rekker å slippe ut", "Friksjonen mellom stempelet og sylinderveggen varmer luften", "Trykkøkningen i seg selv hever temperaturen uavhengig av arbeid", "Luften tar opp varme fra hånden din gjennom stempelet"],
      explanation: "Rask kompresjon er tilnærmet adiabatisk ($Q \\approx 0$), og da gir $\\Delta U = -W$ at alt arbeidet du gjør på luften, blir indre energi — altså høyere temperatur. Friksjon bidrar noe i praksis, men effekten finnes også i en friksjonsfri pumpe. Trykk hever ikke temperatur «i seg selv»: i en isoterm kompresjon stiger trykket uten at temperaturen gjør det. Og varmen går ut av pumpen, ikke inn.",
    },
    {
      question: "Hva er enheten til $p\\,\\Delta V$?",
      options: ["Joule, siden $\\text{Pa}\\cdot\\text{m}^3 = \\text{N}\\cdot\\text{m}$", "Watt, siden trykk ganger volumstrøm er effekt", "Pascal, siden volumet er dimensjonsløst i denne sammenhengen", "Newton, siden trykk ganger areal er kraft"],
      explanation: "$\\text{Pa}\\cdot\\text{m}^3 = (\\text{N/m}^2)\\cdot\\text{m}^3 = \\text{N}\\cdot\\text{m} = \\text{J}$, altså en energi — som det må være, siden arbeid er energi. Watt ville krevd en volumstrøm per tid, ikke en volumendring. Volumet er ikke dimensjonsløst. Og trykk ganger **areal** er kraft; trykk ganger **volum** er energi.",
    },
    {
      question: "$3{,}00\\,\\text{mol}$ toatomig gass utvider seg adiabatisk, og temperaturen faller fra $500\\,\\text{K}$ til $350\\,\\text{K}$. Hvor mye arbeid gjør gassen?",
      options: ["$9353{,}2\\,\\text{J}$", "$-9353{,}2\\,\\text{J}$", "$13095\\,\\text{J}$", "$0\\,\\text{J}$"],
      explanation: "Med $Q = 0$ er $W = -\\Delta U = -nC_V\\Delta T = -3{,}00 \\cdot 20{,}785 \\cdot (-150) = 9353{,}2\\,\\text{J}$, positivt fordi gassen utvider seg. Det negative alternativet har glemt minustegnet fra $\\Delta U = -W$. Alternativet rundt 13095$\\,\\text{J}$ har brukt $C_P$, men $\\Delta U$ regnes alltid med $C_V$. Og null ville gjeldt hvis volumet var fast — men da kunne ikke temperaturen falt uten varmetap.",
    },
    {
      question: "Hva betyr det at en prosess er **kvasistatisk**?",
      options: ["Den går så langsomt at gassen har veldefinert trykk hele veien", "Den går så raskt at ingen varme rekker å utveksles", "Den ender i samme tilstand som den startet i", "Den har konstant temperatur gjennom hele forløpet"],
      explanation: "Kvasistatisk betyr at gassen er i (praktisk talt) likevekt i hvert øyeblikk, slik at prosessen kan tegnes som en kurve og $W = \\int p\\,dV$ er meningsfull. En rask prosess er adiabatisk, ikke kvasistatisk — og en fri ekspansjon er rask og har **ingen** definert vei. En prosess som ender der den startet, er en syklus. Og konstant temperatur er en isoterm, som er ett eksempel blant flere kvasistatiske prosesser.",
    },
    {
      question: "En bok skriver $\\Delta U = Q + W$. Hva betyr $W$ der?",
      options: ["Arbeidet omgivelsene gjør **på** gassen", "Arbeidet gassen gjør på omgivelsene, som i denne boka", "Summen av arbeid og varme over en full syklus", "Arbeidet regnet med motsatt fortegn på volumendringen bare i adiabater"],
      explanation: "De to formene sier det samme; forskjellen ligger i definisjonen av $W$. Med $\\Delta U = Q + W$ er $W$ positiv når gassen **komprimeres**, altså arbeidet inn på gassen. Er $W$ arbeidet gassen gjør, må likningen ha minus. Svaret om en sum over en syklus blander sammen to ulike størrelser. Og forskjellen gjelder alle prosesser, ikke bare adiabater. Kjennetegnet: står isotermt arbeid som **positivt** ved ekspansjon, er konvensjonen $\\Delta U = Q - W$.",
    },
    {
      question: "En gass føres fra tilstand 1 til tilstand 2 langs to ulike veier. Hva er likt for de to?",
      options: ["$\\Delta U$, siden indre energi er en tilstandsfunksjon", "$Q$, siden start- og slutt-temperaturen er de samme", "$W$, siden start- og sluttvolumet er de samme", "Både $Q$ og $W$, siden begge er bestemt av tilstandene"],
      explanation: "$\\Delta U$ avhenger bare av start- og sluttilstand, og for en ideell gass bare av temperaturene. $Q$ og $W$ er **veifunksjoner** og avhenger av kurven — to veier med samme endepunkter kan ha helt ulike arealer under seg, og derfor ulikt arbeid. At varmen skulle være bestemt av temperaturene, er nettopp den misforståelsen som gjør entropi vanskelig i neste kapittel. Det er denne asymmetrien som gjør en kretsprosess mulig.",
    },
  ],
  'tfy4115-7-2': [
    {
      question: "Hva er SI-enheten for entropi?",
      options: ["$\\text{J/K}$", "$\\text{J}$", "$\\text{J}\\cdot\\text{K}$", "$\\text{J/(mol}\\cdot\\text{K)}$"],
      explanation: "Definisjonen $dS = dQ_\\text{rev}/T$ er en energi delt på en temperatur, altså joule per kelvin. Joule alene er en energi, ikke en entropi. Joule ganger kelvin har ingen fysisk betydning her. Og $\\text{J/(mol}\\cdot\\text{K)}$ er enheten for **molar** entropi eller for en varmekapasitet — samme enhet, som ikke er tilfeldig, siden $\\Delta S = nC\\ln(T_2/T_1)$.",
    },
    {
      question: "$1{,}00\\,\\text{mol}$ ideell gass utvider seg isotermt til dobbelt volum. Hva er gassens entropiendring?",
      options: ["$5{,}7628\\,\\text{J/K}$", "$-5{,}7628\\,\\text{J/K}$", "$0\\,\\text{J/K}$", "$16{,}628\\,\\text{J/K}$"],
      explanation: "$\\Delta S = nR\\ln(V_2/V_1) = 8{,}314 \\cdot 0{,}69315 = 5{,}7628\\,\\text{J/K}$, positiv fordi volumet øker. Det negative alternativet ville gjeldt en kompresjon. Null forveksler $\\Delta U = 0$ (som gjelder her) med $\\Delta S = 0$ (som ikke gjør det). Og alternativet rundt 16{,}628 har satt inn volumforholdet $2$ i stedet for logaritmen av det.",
    },
    {
      question: "En gass ekspanderer fritt i en isolert beholder. Hva er $\\Delta S$ for gassen?",
      options: ["Positiv, lik $nR\\ln(V_2/V_1)$", "Null, siden $Q = 0$", "Null, siden temperaturen er uendret", "Negativ, siden ingen varme ble tilført"],
      explanation: "Definisjonen krever $dQ_\\text{rev}$, altså varmen langs en **reversibel** vei — ikke den faktiske. Omveien er en reversibel isoterm ekspansjon, som gir $\\Delta S = nR\\ln(V_2/V_1) > 0$. Svaret «null fordi $Q=0$» er felle #14 i sin reneste form. Svaret «null fordi $T$ er uendret» glemmer volumleddet. Og entropien kan ikke falle i et isolert system.",
    },
    {
      question: "Hva betyr det at en prosess er reversibel?",
      options: ["At $\\Delta S_\\text{univers} = 0$", "At $\\Delta S_\\text{system} = 0$", "At $Q = 0$ gjennom hele prosessen", "At $\\Delta U = 0$ gjennom hele prosessen"],
      explanation: "Reversibel betyr at prosessen kan kjøres baklengs uten spor, og det er nøyaktig når universets entropi er uendret. **Systemets** entropi kan godt endre seg: en reversibel isoterm ekspansjon har $\\Delta S_\\text{system} > 0$, men omgivelsenes faller like mye. $Q = 0$ kjennetegner en adiabat, og $\\Delta U = 0$ en isoterm — begge kan være reversible eller ikke.",
    },
    {
      question: "$2{,}00\\,\\text{mol}$ toatomig gass varmes fra $300\\,\\text{K}$ til $600\\,\\text{K}$ ved fast volum. Hva er $\\Delta S$?",
      options: ["$28{,}814\\,\\text{J/K}$", "$40{,}340\\,\\text{J/K}$", "$11{,}526\\,\\text{J/K}$", "$83{,}140\\,\\text{J/K}$"],
      explanation: "$\\Delta S = nC_V\\ln(T_2/T_1) = 2{,}00 \\cdot 20{,}785 \\cdot 0{,}69315 = 28{,}814\\,\\text{J/K}$. Alternativet rundt 40{,}340 har brukt $C_P$, som hører til **fast trykk**; differansen er nøyaktig $nR\\ln 2$. Alternativet rundt 11{,}526 har brukt $R$ i stedet for $C_V$. Og det største har satt inn temperaturforholdet i stedet for logaritmen av det.",
    },
    {
      question: "$3000\\,\\text{J}$ varme strømmer fra et reservoar ved $600\\,\\text{K}$ til ett ved $300\\,\\text{K}$. Hva er universets entropiendring?",
      options: ["$5{,}0000\\,\\text{J/K}$", "$-5{,}0000\\,\\text{J/K}$", "$0\\,\\text{J/K}$", "$10{,}000\\,\\text{J/K}$"],
      explanation: "Det varme reservoaret får $-3000/600 = -5{,}00\\,\\text{J/K}$ og det kalde $+3000/300 = +10{,}00\\,\\text{J/K}$, altså netto $+5{,}0000\\,\\text{J/K}$. Det negative alternativet beskriver varme fra kaldt til varmt, som er umulig spontant. Null ville krevd like temperaturer. Og 10{,}000$\\,\\text{J/K}$ er bare det kalde reservoarets bidrag — det varme er glemt.",
    },
    {
      question: "Kan systemets entropi synke?",
      options: ["Ja, så lenge omgivelsenes entropi øker minst like mye", "Nei, entropi kan aldri synke", "Ja, men bare i en reversibel prosess", "Ja, men bare hvis systemet er isolert"],
      explanation: "Andre hovedsetning gjelder **universet**, ikke systemet. En gass som avkjøles, får negativ $\\Delta S$, og det er fullt lovlig fordi varmen havnet et sted der entropien økte mer. Svaret «nei» forveksler system og univers. Det skjer i både reversible og irreversible prosesser. Og et **isolert** system er nettopp det ene tilfellet der entropien ikke kan synke, siden det ikke har noen omgivelser å skyve økningen til.",
    },
    {
      question: "Hvilken av disse prosessene har $\\Delta S = 0$ for gassen?",
      options: ["En reversibel adiabatisk kompresjon", "En fri ekspansjon i en isolert beholder", "En isoterm ekspansjon mot et reservoar", "En isokor oppvarming i en stiv beholder"],
      explanation: "Langs en reversibel adiabat kansellerer de to leddene i entropiuttrykket nøyaktig, fordi $TV^{\\gamma-1}$ er konstant og $C_V(\\gamma-1) = R$ — derfor navnet **isentrop**. Fri ekspansjon har $Q = 0$ men $\\Delta S > 0$, siden den er irreversibel. Isoterm ekspansjon gir $nR\\ln(V_2/V_1) > 0$. Og isokor oppvarming gir $nC_V\\ln(T_2/T_1) > 0$.",
    },
    {
      question: "Hvilken form av entropiuttrykket bruker du hvis oppgaven gir **temperatur og trykk**?",
      options: ["$nC_P\\ln(T_2/T_1) - nR\\ln(p_2/p_1)$", "$nC_V\\ln(T_2/T_1) + nR\\ln(V_2/V_1)$", "$nC_V\\ln(T_2/T_1) - nR\\ln(p_2/p_1)$", "$nC_P\\ln(T_2/T_1) + nR\\ln(p_2/p_1)$"],
      explanation: "$T$–$p$-formen har $C_P$ i temperaturleddet og **minus** foran trykkleddet — minus fordi høyere trykk betyr mindre volum og dermed lavere entropi. Formen med $C_V$ og volumleddet krever at du kjenner volumene. De to blandingene er feil på hver sin måte: $C_V$ sammen med trykkleddet mangler $nR\\ln(T_2/T_1)$, og pluss foran trykkleddet gir feil fortegn på trykkbidraget.",
    },
    {
      question: "Hvorfor står temperaturen i nevneren i $dS = dQ_\\text{rev}/T$?",
      options: ["Fordi samme energiporsjon endrer uordenen mer i et kaldt system", "Fordi entropi må ha enheten $\\text{J/K}$", "Fordi varmen alltid strømmer mot lavere temperatur", "Fordi temperaturen er den eneste tilstandsstørrelsen som alltid endres"],
      explanation: "I et varmt system er det allerede mye tilfeldig bevegelse, så et ekstra joule betyr relativt lite; i et kaldt system betyr det mer. Det er nettopp denne asymmetrien som gjør at varme spontant går fra varmt til kaldt — universets entropi øker på det. Enheten er en **følge** av definisjonen, ikke en begrunnelse. At varmen strømmer nedover, er en konsekvens av loven, ikke grunnen til formen. Og temperaturen endres ikke i en isoterm prosess.",
    },
    {
      question: "En gass gjennomgår en full kretsprosess. Hva er gassens entropiendring?",
      options: ["Null, siden entropi er en tilstandsfunksjon", "Positiv, siden alle virkelige prosesser produserer entropi", "Lik den tilførte varmen delt på middeltemperaturen", "Negativ hvis syklusen går medklokka i $pV$-diagrammet"],
      explanation: "Gassen ender i utgangstilstanden, og entropi avhenger bare av tilstanden — altså er $\\Delta S_\\text{gass} = 0$ over enhver syklus. Det er **universets** entropi som er positiv for en virkelig maskin, og det er den forvekslingen felle #14 handler om. Varme delt på middeltemperatur er ikke et definert uttrykk. Og omløpsretningen bestemmer fortegnet på netto arbeid, ikke på gassens entropiendring.",
    },
    {
      question: "$1{,}50\\,\\text{kg}$ vann ($c = 4190\\,\\text{J/(kg}\\cdot\\text{K)}$) varmes fra $290\\,\\text{K}$ til $340\\,\\text{K}$. Hva er entropiendringen?",
      options: ["$999{,}72\\,\\text{J/K}$", "$314250\\,\\text{J/K}$", "$-999{,}72\\,\\text{J/K}$", "$666{,}48\\,\\text{J/K}$"],
      explanation: "$\\Delta S = mc\\ln(T_f/T_i) = 1{,}50 \\cdot 4190 \\cdot \\ln(340/290) = 999{,}72\\,\\text{J/K}$. Alternativet rundt $3\\cdot10^{5}$ er $mc\\,\\Delta T$, altså den tilførte **varmen** i joule, ikke entropien. Det negative alternativet har snudd forholdet i logaritmen. Og det minste har glemt massen.",
    },
    {
      question: "Hva er entropiendringen for et varmereservoar ved $$400\\,\\text{K}$$ som mottar $$2000\\,\\text{J}$$ varme?",
      options: ["$5{,}0000\\,\\text{J/K}$", "$-5{,}0000\\,\\text{J/K}$", "$11983\\,\\text{J/K}$", "$0{,}20000\\,\\text{J/K}$"],
      explanation: "Et reservoar har konstant temperatur, så $\\Delta S = Q/T = 2000/400 = 5{,}00\\,\\text{J/K}$ — ingen logaritme, fordi temperaturen ikke endres. Positivt siden varmen går **inn**. Det negative alternativet ville gjeldt et reservoar som gir fra seg varme. Alternativet med logaritmen bruker en formel som hører til et stoff med endrende temperatur. Og det minste har snudd brøken.",
    },
    {
      question: "En maskin tar varme fra ett reservoar og gjør alt om til arbeid, uten annen virkning. Hvorfor er det umulig?",
      options: ["Reservoaret taper entropi uten at noe annet vinner tilsvarende", "Energien er ikke bevart i en slik prosess", "Arbeid kan ikke lages av varme i det hele tatt", "Maskinen ville brutt første hovedsetning"],
      explanation: "Med $\\Delta U = 0$ over syklusen stemmer $Q = W$ i første hovedsetning helt fint — energien er bevart. Problemet er at reservoaret får $\\Delta S = -Q/T$ mens ingenting annet endres, altså $\\Delta S_\\text{univers} < 0$. Dette er Kelvins form av **andre** hovedsetning. Arbeid kan godt lages av varme; det er nettopp det en motor gjør — men noe varme må ut til et kaldere reservoar.",
    },
    {
      question: "Hva er den reversible omveien, og når bruker du den?",
      options: ["En reversibel vei mellom de samme to tilstandene, for en irreversibel prosess", "En vei som gir mindre entropiøkning enn den faktiske prosessen gjorde", "En vei du bruker når prosessen er adiabatisk og varmen er ukjent", "En vei som alltid går via en isoterm ved omgivelsenes temperatur"],
      explanation: "Entropi er en tilstandsfunksjon, så $\\Delta S$ kan regnes langs enhver vei mellom de samme to tilstandene — velg den enkleste reversible. Metoden er **eksakt**, ikke en tilnærming som gir mindre entropi. Den brukes for alle irreversible prosesser, ikke bare adiabatiske. Og du velger veien helt fritt; isotermen ved omgivelsestemperaturen er ofte praktisk, men ikke påkrevd.",
    },
    {
      question: "$3{,}00\\,\\text{mol}$ gass komprimeres isotermt til en tredjedel av volumet. Hva er gassens entropiendring?",
      options: ["$-27{,}402\\,\\text{J/K}$", "$27{,}402\\,\\text{J/K}$", "$0\\,\\text{J/K}$", "$-17{,}288\\,\\text{J/K}$"],
      explanation: "$\\Delta S = nR\\ln(1/3) = -nR\\ln 3 = -3{,}00 \\cdot 8{,}314 \\cdot 1{,}09861 = -27{,}402\\,\\text{J/K}$ — negativ, siden volumet minker og logaritmen av et tall under 1 er negativ. Det positive alternativet har mistet fortegnet. Null forveksler $\\Delta U = 0$ med $\\Delta S = 0$. Og alternativet rundt -17{,}288 er regnet med $\\ln 2$ i stedet for $\\ln 3$.",
    },
    {
      question: "Hva skjer med $\\Delta S_\\text{univers}$ når temperaturforskjellen i en varmeoverføring går mot null?",
      options: ["Den går mot null, og prosessen blir (nesten) reversibel", "Den går mot uendelig, siden nevnerne blir like", "Den blir negativ, siden retningen blir vilkårlig", "Den er uendret, siden den bare avhenger av varmemengden"],
      explanation: "$Q(1/T_\\text{kald} - 1/T_\\text{varm}) \\to 0$ når de to temperaturene nærmer seg hverandre. Varmeoverføring over en forsvinnende liten forskjell er derfor nesten reversibel — den tar bare uendelig lang tid, og det er nettopp dette Carnot-syklusen utnytter. Uttrykket går mot null, ikke uendelig. Den kan ikke bli negativ så lenge varmen går nedover. Og den avhenger både av $Q$ og av begge temperaturene.",
    },
    {
      question: "En gass avkjøles ved fast volum. Hva er fortegnet på $\\Delta S$ for gassen?",
      options: ["Negativt, fordi logaritmen av et forhold under 1 er negativ", "Positivt, fordi entropien i et system alltid øker med tiden", "Null, fordi volumet ikke endres og arbeidet derfor er null", "Negativt, fordi volumet ikke endres mens trykket faller"],
      explanation: "$\\Delta S = nC_V\\ln(T_2/T_1)$, og logaritmen av et tall under 1 er negativ. Gassen blir mer ordnet — mindre termisk bevegelse, færre mikrotilstander. At entropi «alltid øker» gjelder universet, ikke systemet. At volumet ikke endres, fjerner **volumleddet**, ikke temperaturleddet. Og fortegnet kommer av avkjølingen, ikke av at volumet er fast.",
    },
    {
      question: "To vannmengder med ulik temperatur blandes i et isolert kar. Hvorfor er summen av de to entropiendringene positiv?",
      options: ["Fordi den kalde startet lavere og derfor får den største logaritmen", "Fordi den varme mengden mister mer varme enn den kalde mottar", "Fordi blanding alltid tilfører energi til systemet", "Fordi sluttemperaturen er høyere enn gjennomsnittet av de to"],
      explanation: "Varmemengden er den samme (isolert kar), men $\\Delta S = mc\\ln(T_f/T_i)$ gir den kalde mengden det største tallet i tallverdi, fordi den startet ved lavere temperatur — og $T$ står i nevneren i $dQ/T$. Varmen som mistes og mottas, er like store. Blanding tilfører ingen energi i et isolert kar. Og for like masser er sluttemperaturen nøyaktig gjennomsnittet.",
    },
    {
      question: "Hvilken av disse rangeringene i en syklus følger **alltid** samme rekkefølge som temperaturen?",
      options: ["Den indre energien $U$", "Entropien $S$ i hvert hjørne", "Trykket $p$ i hvert hjørne", "Volumet $V$ i hvert hjørne"],
      explanation: "$U = \\tfrac{f}{2}nRT$ er proporsjonal med temperaturen, så rangeringen er identisk. Entropien avhenger både av temperatur og volum og kan gi en annen rekkefølge — det er nettopp det slike spørsmål tester. Trykk og volum bestemmer temperaturen gjennom produktet $pV$, men hver for seg gir de ingen rangering: et hjørne kan ha høyt trykk og lite volum og likevel være kaldt.",
    },
    {
      question: "Hvorfor er celsius spesielt ødeleggende i $\\ln(T_2/T_1)$?",
      options: ["Fordi et celsiusforhold er en annen størrelse enn et kelvinforhold", "Fordi logaritmen av et negativt tall ikke er definert i det hele tatt", "Fordi logaritmen forsterker små avrundingsfeil i argumentet sitt", "Fordi celsius og kelvin har ulik gradstørrelse i skalaene sine"],
      explanation: "Forholdet $T_2/T_1$ avhenger av hvor nullpunktet ligger, så et celsiusforhold kan bli hva som helst — for oppvarming fra $27$ til $177\\,^\\circ\\text{C}$ er kelvinforholdet $1{,}50$ og celsiusforholdet $6{,}56$. At logaritmen av negative tall er udefinert, er et reelt problem ved temperaturer under null, men ikke hovedpoenget. Logaritmen **demper** tvert imot små feil i argumentet. Og gradstørrelsen er nettopp den **samme** i de to skalaene — det er derfor $\\Delta T$ tåler begge.",
    },
    {
      question: "$1{,}00\\,\\text{mol}$ gass ekspanderer fritt til dobbelt volum ved $350\\,\\text{K}$. Hvor mye varme ville den reversible omveien krevd?",
      options: ["$2017{,}0\\,\\text{J}$", "$0\\,\\text{J}$", "$-2017{,}0\\,\\text{J}$", "$2909{,}9\\,\\text{J}$"],
      explanation: "Omveien er en reversibel isoterm ekspansjon, der $\\Delta U = 0$ og derfor $Q_\\text{rev} = W = nRT\\ln 2 = 2017{,}0\\,\\text{J}$ inn i gassen. Null er varmen i den **faktiske** frie ekspansjonen, og det er nettopp forskjellen: omveien har helt andre $Q$- og $W$-verdier, men samme $\\Delta S$. Det negative alternativet ville gjeldt en kompresjon. Og 2909{,}9$\\,\\text{J}$ er $nRT$ uten logaritmefaktoren.",
    },
    {
      question: "Hva er sammenhengen mellom produsert entropi og tapt arbeid?",
      options: ["$W_\\text{tapt} = T_\\text{kald}\\,\\Delta S_\\text{univers}$", "$W_\\text{tapt} = T_\\text{varm}\\,\\Delta S_\\text{univers}$", "$W_\\text{tapt} = \\Delta S_\\text{univers}/T_\\text{kald}$", "Det finnes ingen sammenheng; entropi og arbeid er uavhengige størrelser"],
      explanation: "Entropiproduksjon måler tapt arbeidspotensial, og omregningsfaktoren er temperaturen i **omgivelsene** — det kaldeste tilgjengelige reservoaret, siden det er dit varmen til slutt må. Med den varme temperaturen ville du overestimert tapet. Den inverse formen har feil dimensjon. Og sammenhengen er nettopp grunnen til at ingeniører regner entropi i det hele tatt.",
    },
    {
      question: "Hva skjer med entropien til et perfekt krystallinsk stoff når temperaturen går mot det absolutte nullpunktet?",
      options: ["Den går mot null, siden bare én mikrotilstand er mulig", "Den går mot uendelig, siden all termisk bevegelse opphører", "Den nærmer seg en positiv konstant som avhenger av stoffet", "Den er udefinert, siden $T$ står i nevneren i $dQ_\\text{rev}/T$"],
      explanation: "Ved $T = 0$ er alle partikler i grunntilstanden, altså $\\Omega = 1$ og $S = k_B\\ln 1 = 0$ — det er tredje hovedsetning. Entropi har dermed et **absolutt** nullpunkt, i motsetning til indre energi. At den skulle gå mot uendelig, er motsatt av hva færre mikrotilstander betyr. Og at nevneren går mot null i differensialen, gjør ikke $S$ selv udefinert.",
    },
    {
      question: "$2{,}00\\,\\text{mol}$ toatomig gass går fra $400\\,\\text{K}$ til $400\\,\\text{K}$ mens volumet femdobles. Hva er $\\Delta S$?",
      options: ["$26{,}762\\,\\text{J/K}$", "$66{,}904\\,\\text{J/K}$", "$0\\,\\text{J/K}$", "$93{,}666\\,\\text{J/K}$"],
      explanation: "Temperaturen er uendret, så bare volumleddet står: $\\Delta S = nR\\ln 5 = 2{,}00 \\cdot 8{,}314 \\cdot 1{,}60944 = 26{,}762\\,\\text{J/K}$. Alternativene med $C_V$ og $C_P$ har brukt en varmekapasitet i **volum**leddet, men der står gasskonstanten $R$ — varmekapasitetene hører i temperaturleddet. Og null ville krevd at heller ikke volumet endret seg.",
    },
    {
      question: "En prosess har $\\Delta S_\\text{system} = -12\\,\\text{J/K}$ og $\\Delta S_\\text{omgivelser} = +9\\,\\text{J/K}$. Hva kan du si om den?",
      options: ["Den er umulig, siden universets entropi ville falt", "Den er irreversibel, siden systemets entropi faller", "Den er reversibel, siden endringene nesten balanserer", "Den er mulig, siden systemets entropi godt kan falle"],
      explanation: "$\\Delta S_\\text{univers} = -12 + 9 = -3\\,\\text{J/K} < 0$, og det er forbudt av andre hovedsetning — uansett hva de enkelte bidragene er. At systemets entropi faller, er i seg selv helt lovlig, men her faller den for mye. Reversibel krever eksakt null, ikke «nesten». Og svaret som bare peker på at systemets entropi kan falle, stopper halvveis i vurderingen: det er summen som avgjør.",
    },
  ],
  'tfy4115-7-3': [
    {
      question: "En gass gir fra seg $600\\,\\text{J}$ varme mens omgivelsene gjør $250\\,\\text{J}$ arbeid på den. Hva er $\\Delta U$?",
      options: ["$-350\\,\\text{J}$", "$-850\\,\\text{J}$", "$350\\,\\text{J}$", "$850\\,\\text{J}$"],
      explanation: "Med denne bokas fortegn er $Q = -600\\,\\text{J}$ (varme ut) og $W = -250\\,\\text{J}$ (arbeid på gassen), altså $\\Delta U = -600 - (-250) = -350\\,\\text{J}$. Alternativet på $-850\\,\\text{J}$ har lagt de to sammen i stedet for å trekke fra, altså glemt minusparentesen. De to positive alternativene har snudd fortegnet på varmen ut.",
    },
    {
      question: "$1{,}40\\,\\text{mol}$ toatomig gass varmes fra $260\\,\\text{K}$ til $380\\,\\text{K}$ i en stiv beholder. Hvor mye varme trengs?",
      options: ["$3491{,}9\\,\\text{J}$", "$4888{,}6\\,\\text{J}$", "$2095{,}1\\,\\text{J}$", "$1396{,}8\\,\\text{J}$"],
      explanation: "Stiv beholder betyr $W = 0$, så $Q = \\Delta U = nC_V\\Delta T = 1{,}40 \\cdot 20{,}785 \\cdot 120 = 3491{,}9\\,\\text{J}$. Alternativet rundt 4888{,}6$\\,\\text{J}$ har brukt $C_P$, som hører til konstant trykk. Alternativet rundt 2095{,}1 er regnet med enatomig $C_V$. Og det minste er $nR\\Delta T$, altså arbeidet i en isobar prosess.",
    },
    {
      question: "En **enatomig** gass komprimeres adiabatisk til en femtedel av volumet. Hvor mange ganger større blir temperaturen?",
      options: ["$2{,}9240$", "$14{,}620$", "$1{,}9037$", "$5{,}00$"],
      explanation: "$TV^{\\gamma-1} = \\text{konstant}$ gir $T_2/T_1 = 5^{\\gamma-1} = 5^{0{,}66667} = 2{,}9240$. Alternativet rundt 14{,}620 bruker eksponenten $\\gamma$, som gir **trykk**forholdet og ikke temperaturforholdet — den nærmeste distraktoren. Alternativet rundt 1{,}9037 er regnet med toatomig $\\gamma$. Og $5{,}00$ ville krevd eksponent 1, altså en isokor prosess.",
    },
    {
      question: "Hvilken av disse prosessene har $\\Delta U = 0$ **og** $\\Delta S > 0$ for gassen?",
      options: ["Fri ekspansjon i en isolert beholder", "Reversibel adiabatisk ekspansjon", "Isokor oppvarming i en stiv beholder", "Adiabatisk kompresjon med et stempel"],
      explanation: "Fri ekspansjon har $Q = W = 0$, altså $\\Delta U = 0$, men entropien øker med $nR\\ln(V_2/V_1)$ fordi prosessen er irreversibel. En reversibel adiabat har $\\Delta S = 0$ og $\\Delta U \\ne 0$. Isokor oppvarming har $\\Delta S > 0$ men $\\Delta U > 0$. Og adiabatisk kompresjon har $\\Delta U > 0$ og $\\Delta S = 0$ hvis den er reversibel.",
    },
    {
      question: "$3{,}00\\,\\text{mol}$ ideell gass komprimeres isotermt ved $330\\,\\text{K}$ til halve volumet. Hva er arbeidet?",
      options: ["$-5705{,}2\\,\\text{J}$", "$5705{,}2\\,\\text{J}$", "$0\\,\\text{J}$", "$-4115{,}4\\,\\text{J}$"],
      explanation: "$W = nRT\\ln(V_2/V_1) = 3{,}00 \\cdot 8{,}314 \\cdot 330 \\cdot \\ln 0{,}5 = -5705{,}2\\,\\text{J}$ — negativ, altså arbeid gjort **på** gassen. Det positive alternativet har mistet minustegnet fra logaritmen. Null forveksler $\\Delta U = 0$ med $W = 0$. Og alternativet rundt -4115{,}4$\\,\\text{J}$ har brukt den relative volumendringen i stedet for logaritmen.",
    },
    {
      question: "$2{,}20\\,\\text{mol}$ enatomig gass varmes fra $300\\,\\text{K}$ til $450\\,\\text{K}$ ved konstant trykk. Hva er gassens entropiendring?",
      options: ["$18{,}541\\,\\text{J/K}$", "$11{,}124\\,\\text{J/K}$", "$7{,}4163\\,\\text{J/K}$", "$25{,}957\\,\\text{J/K}$"],
      explanation: "Konstant trykk gir $C_P$ i temperaturleddet: $nC_P\\ln(T_2/T_1) = 2{,}20 \\cdot 20{,}785 \\cdot 0{,}405465 = 18{,}541\\,\\text{J/K}$. Alternativet rundt 11{,}124 har brukt $C_V$, altså **isokor**-formelen; differansen er $nR\\ln(T_2/T_1)$. Alternativet rundt 7{,}4163 har brukt $R$ alene. Og det største er regnet med toatomig $C_P$.",
    },
    {
      question: "Hva er den sikreste kontrollen på at du har regnet en kretsprosess riktig?",
      options: ["At $\\Delta U$ og gassens $\\Delta S$ begge er null over sløyfa", "At netto arbeid er null, siden gassen ender der den startet", "At netto varme er null, siden temperaturen er uendret", "At virkningsgraden er lik Carnot-grensen for temperaturene"],
      explanation: "Både indre energi og entropi er tilstandsfunksjoner, så begge må være null når gassen ender i utgangstilstanden — det fanger en regnefeil i hvilket som helst trinn. At netto **arbeid** skulle være null, er nettopp det som ikke gjelder: det er arealet inne i sløyfa. Netto varme er lik netto arbeid, ikke null. Og Carnot-grensen er en **øvre** grense, som bare en reversibel syklus treffer.",
    },
    {
      question: "$2400\\,\\text{J}$ varme lekker fra $480\\,\\text{K}$ til $300\\,\\text{K}$. Hva er universets entropiendring?",
      options: ["$3{,}0000\\,\\text{J/K}$", "$8{,}0000\\,\\text{J/K}$", "$-5{,}0000\\,\\text{J/K}$", "$-3{,}0000\\,\\text{J/K}$"],
      explanation: "Det varme reservoaret får $-2400/480 = -5{,}00\\,\\text{J/K}$ og det kalde $+2400/300 = +8{,}00\\,\\text{J/K}$, altså netto $3{,}0000\\,\\text{J/K}$. Alternativet på 8{,}0000$\\,\\text{J/K}$ er bare det kalde reservoarets bidrag. Alternativet på -5{,}0000$\\,\\text{J/K}$ er bare det varmes. Og det siste har snudd fortegnet, som ville beskrevet en umulig prosess.",
    },
    {
      question: "En oppgave sier at gassen komprimeres «svært langsomt i et stort vannbad». Hvilken prosess er det?",
      options: ["Isoterm, siden temperaturen rekker å jevne seg ut", "Adiabat, siden vannbadet isolerer gassen", "Isokor, siden beholderen står i et bad", "Isobar, siden vannbadet holder trykket konstant"],
      explanation: "«Svært langsomt» og «stort vannbad» er signalordene for **isoterm**: gassen holder badets temperatur hele veien. Vannbadet er en varmekilde, ikke en isolasjon — det er nettopp motsatt av adiabat, som krever «raskt» eller «isolert». Beholderen komprimeres, så volumet endres, og badet sier ingenting om trykket.",
    },
    {
      question: "En reversibel adiabatisk prosess har $\\Delta S = 0$. Hva er $\\Delta S$ for en **irreversibel** adiabat mellom samme to volumer?",
      options: ["Positiv, siden irreversible prosesser produserer entropi", "Null, siden $Q = 0$ i begge tilfeller", "Negativ, siden prosessen går raskere", "Den samme som for den reversible, siden endepunktene er like"],
      explanation: "$dS = dQ_\\text{rev}/T$ krever den **reversible** varmen; at den faktiske $Q$ er null, gir ikke $\\Delta S = 0$. En irreversibel adiabat ender dessuten i en **annen** tilstand enn den reversible ved samme sluttvolum — høyere temperatur — så endepunktene er ikke like. Entropien kan ikke falle i et isolert system, og hastigheten er ikke en entropivariabel.",
    },
    {
      question: "En toatomig gass utvider seg adiabatisk fra $320\\,\\text{K}$ til dobbelt volum. Hva er arbeidet per mol?",
      options: ["$1610{,}5\\,\\text{J}$", "$-1610{,}5\\,\\text{J}$", "$2254{,}7\\,\\text{J}$", "$0\\,\\text{J}$"],
      explanation: "$T_2 = 320 \\cdot (1/2)^{0{,}40000} = 242{,}51\\,\\text{K}$, og med $Q = 0$ er $W = -nC_V\\Delta T = 1610{,}5\\,\\text{J}$ per mol — positiv, siden gassen utvider seg. Det negative alternativet har glemt minustegnet i $W = -\\Delta U$. Alternativet rundt 2254{,}7$\\,\\text{J}$ har brukt $C_P$, men $\\Delta U$ regnes alltid med $C_V$. Og null ville krevd fast volum.",
    },
    {
      question: "To ledd i entropiuttrykket har motsatt fortegn (oppvarming og kompresjon). Hva bør du passe ekstra på?",
      options: ["Å holde fire siffer, siden svaret er en differanse mellom nesten like tall", "Å bruke $C_P$ i stedet for $C_V$ når leddene har motsatt fortegn", "Å runde av tidlig, siden logaritmene demper feilen uansett", "Å regne bare det største leddet, siden det andre er en korreksjon"],
      explanation: "Når sluttsvaret er en differanse mellom to store, nesten like tall, blir den relative feilen i differansen mye større enn i hvert ledd — der må mellomregningene holdes med fire siffer. Valget mellom $C_V$ og $C_P$ styres av hvilken form du bruker, ikke av fortegnene. Logaritmen demper feil i sitt eget argument, men ikke i en etterfølgende subtraksjon. Og begge ledd må med — det er nettopp fordi de nesten balanserer at ingen kan strykes.",
    },
    {
      question: "$2{,}00\\,\\text{mol}$ ideell gass ekspanderer fritt til fire ganger volumet ved $350\\,\\text{K}$. Hva er universets entropiendring?",
      options: ["$23{,}051\\,\\text{J/K}$", "$0\\,\\text{J/K}$", "$-23{,}051\\,\\text{J/K}$", "$0{,}065861\\,\\text{J/K}$"],
      explanation: "Gassen får $\\Delta S = nR\\ln 4 = 2{,}00 \\cdot 8{,}314 \\cdot 1{,}38629 = 23{,}051\\,\\text{J/K}$, og omgivelsene er uberørt siden beholderen er isolert — altså er universets endring den samme. Null er felle #14: $Q = 0$ betyr ikke $\\Delta S = 0$. Det negative alternativet ville brutt andre hovedsetning. Og det minste har delt på temperaturen én gang for mye — $T$ forkortes alt bort i det isoterme uttrykket.",
    },
    {
      question: "Hvorfor må virkningsgraden til enhver syklus ligge under $1 - T_\\text{kald}/T_\\text{varm}$?",
      options: ["Fordi en høyere virkningsgrad ville gitt negativ entropiproduksjon", "Fordi friksjon alltid tar en del av arbeidet", "Fordi noe varme alltid lekker gjennom veggene", "Fordi gassen aldri kan komme helt tilbake til utgangstilstanden"],
      explanation: "Grensen følger av andre hovedsetning: en syklus med høyere virkningsgrad ville gitt $\\Delta S_\\text{univers} < 0$, som er forbudt. Grensen gjelder derfor selv for en **friksjonsfri og perfekt isolert** maskin — friksjon og varmelekkasje er praktiske tap som gjør det verre, men de er ikke grunnen til grensen. Og gassen **kommer** tilbake til utgangstilstanden i en syklus; det er definisjonen.",
    },
    {
      question: "Hvilken størrelse kan du alltid regne først, uansett hvor usikker du er på prosessen?",
      options: ["$\\Delta U = nC_V\\Delta T$, siden den gjelder uansett vei", "$Q = nC_P\\Delta T$, siden varmekapasiteten alltid er oppgitt", "$W = p\\,\\Delta V$, siden arbeidet alltid er arealet under kurven", "$\\Delta S = Q/T$, siden entropi er en tilstandsfunksjon"],
      explanation: "$\\Delta U = nC_V\\Delta T$ gjelder for en ideell gass langs **enhver** vei, fordi indre energi bare avhenger av temperaturen — derfor er den trygg å starte med, og deretter finner du den tredje størrelsen fra $\\Delta U = Q - W$. $nC_P\\Delta T$ gjelder bare ved konstant trykk. $p\\,\\Delta V$ gjelder bare når trykket er konstant, selv om arealtolkningen alltid holder. Og $\\Delta S = Q/T$ krever den **reversible** varmen og konstant temperatur.",
    },
    {
      question: "En syklus arbeider mellom $300\\,\\text{K}$ og $500\\,\\text{K}$ og har oppgitt virkningsgrad $0{,}30$. Er det mulig?",
      options: ["Ja, siden Carnot-grensen er $0{,}40$", "Nei, siden Carnot-grensen er $0{,}25$", "Nei, siden virkningsgraden aldri kan overstige $0{,}20$", "Ja, men bare hvis syklusen er reversibel"],
      explanation: "$\\eta_\\text{Carnot} = 1 - 300/500 = 0{,}40$, og $0{,}30$ ligger under — altså tillatt, og syklusen er irreversibel (som virkelige sykluser er). Alternativet med grensen $0{,}25$ har regnet $T_\\text{kald}/T_\\text{varm}$ uten å trekke fra 1, eller snudd brøken. Grensen $0{,}20$ finnes ikke her. Og det siste snur logikken: en **reversibel** syklus ville truffet $0{,}40$ nøyaktig, mens $0{,}30$ nettopp krever at den er irreversibel.",
    },
  ],
  'tfy4115-8-1': [
    {
      question: "En Carnot-maskin arbeider mellom $600\\,\\text{K}$ og $330\\,\\text{K}$. Hva er virkningsgraden?",
      options: ["$0{,}450$", "$0{,}826$", "$0{,}550$", "$2{,}222$"],
      explanation: "$\\eta_\\text{Carnot}=1-T_k/T_v=1-330/600=0{,}4500$, med begge temperaturer i kelvin. Det høyeste alternativet er det du får hvis du regner med celsius i stedet for kelvin — det er sjangerens mest utbredte enkeltfeil, og den gir alltid for høy virkningsgrad. Alternativet $0{,}550$ er forholdet $T_k/T_v$ med «$1-$» glemt. Alternativet over 1 er effektfaktoren $T_v/(T_v-T_k)$ til en varmepumpe mellom samme temperaturer — en virkningsgrad kan aldri overstige 1.",
    },
    {
      question: "En Carnot-maskin arbeider mellom $750\\,\\text{K}$ og $450\\,\\text{K}$. Hva er virkningsgraden?",
      options: ["$0{,}400$", "$0{,}629$", "$0{,}600$", "$2{,}500$"],
      explanation: "$\\eta_\\text{Carnot}=1-T_k/T_v=1-450/750=0{,}4000$, med begge temperaturer i kelvin. Det høyeste alternativet er det du får hvis du regner med celsius i stedet for kelvin — det er sjangerens mest utbredte enkeltfeil, og den gir alltid for høy virkningsgrad. Alternativet $0{,}600$ er forholdet $T_k/T_v$ med «$1-$» glemt. Alternativet over 1 er effektfaktoren $T_v/(T_v-T_k)$ til en varmepumpe mellom samme temperaturer — en virkningsgrad kan aldri overstige 1.",
    },
    {
      question: "En Carnot-maskin arbeider mellom $900\\,\\text{K}$ og $315\\,\\text{K}$. Hva er virkningsgraden?",
      options: ["$0{,}650$", "$0{,}933$", "$0{,}350$", "$1{,}538$"],
      explanation: "$\\eta_\\text{Carnot}=1-T_k/T_v=1-315/900=0{,}6500$, med begge temperaturer i kelvin. Det høyeste alternativet er det du får hvis du regner med celsius i stedet for kelvin — det er sjangerens mest utbredte enkeltfeil, og den gir alltid for høy virkningsgrad. Alternativet $0{,}350$ er forholdet $T_k/T_v$ med «$1-$» glemt. Alternativet over 1 er effektfaktoren $T_v/(T_v-T_k)$ til en varmepumpe mellom samme temperaturer — en virkningsgrad kan aldri overstige 1.",
    },
    {
      question: "En varmekraftmaskin arbeider mellom $227\\,^\\circ\\text{C}$ og $27\\,^\\circ\\text{C}$. Hva er den høyeste virkningsgraden den kan ha?",
      options: ["$0{,}400$", "$0{,}881$", "$0{,}600$", "$-0{,}322$"],
      explanation: "Skriv om til kelvin FØRST: $227\\,^\\circ\\text{C}=500{,}15\\,\\text{K}$ og $27\\,^\\circ\\text{C}=300{,}15\\,\\text{K}$, som gir $\\eta=1-300{,}15/500{,}15=0{,}3999$. Alternativet $0{,}881$ er celsius satt rett inn i brøken — feilen som gir for høy virkningsgrad. Alternativet $0{,}600$ er temperaturforholdet uten «$1-$». Alternativet $-0{,}322$ har regnet om bare den kalde temperaturen til kelvin og glemt den varme.",
    },
    {
      question: "En Carnot-maskin mellom $500\\,\\text{K}$ og $350\\,\\text{K}$ tar imot $24{,}0\\,\\text{kJ}$ varme per syklus. Hvor mye varme avgir den til det kalde reservoaret?",
      options: ["$16{,}80\\,\\text{kJ}$", "$7{,}20\\,\\text{kJ}$", "$2{,}16\\,\\text{kJ}$", "$24{,}00\\,\\text{kJ}$"],
      explanation: "For en Carnot-syklus er $|Q_\\text{ut}|/Q_\\text{inn}=T_k/T_v$, altså $|Q_\\text{ut}|=24{,}0\\cdot0{,}7000=16{,}80\\,\\text{kJ}$. Alternativet $7{,}20\\,\\text{kJ}$ er netto ARBEID, ikke varmen ut — de to forveksles fordi begge følger av samme virkningsgrad. Alternativet som er lik den tilførte varmen, svarer til at ingen arbeid ble gjort. Det minste alternativet har ganget med virkningsgraden to ganger.",
    },
    {
      question: "En Carnot-maskin mellom $800\\,\\text{K}$ og $320\\,\\text{K}$ tar imot $15{,}0\\,\\text{kJ}$ per syklus. Hvor stort er netto arbeid?",
      options: ["$9{,}00\\,\\text{kJ}$", "$6{,}00\\,\\text{kJ}$", "$2{,}40\\,\\text{kJ}$", "$25{,}00\\,\\text{kJ}$"],
      explanation: "$\\eta=1-320/800=0{,}6000$ og $W=\\eta Q_\\text{inn}=9{,}00\\,\\text{kJ}$. Alternativet $6{,}00\\,\\text{kJ}$ er varmen som går UT, altså $Q_\\text{inn}(T_k/T_v)$ — det svaret får du hvis du multipliserer med temperaturforholdet i stedet for med virkningsgraden. Det største alternativet har DELT på virkningsgraden, og gir mer arbeid ut enn varme inn, som bryter energibevaring. Det minste har ganget med temperaturforholdet to ganger.",
    },
    {
      question: "Hva er entropiendringen til gassen i en varmekraftmaskin over én hel syklus?",
      options: ["Null, fordi entropi er en tilstandsfunksjon og gassen er tilbake i utgangstilstanden", "Positiv, fordi enhver virkelig prosess øker entropien i systemet som gjennomgår den", "Negativ, fordi maskinen avgir mer varme ved lav temperatur enn den tar opp", "Lik $Q_\\text{inn}/T_v$, fordi det er entropien som følger med den tilførte varmen"],
      explanation: "Entropi er en tilstandsfunksjon, så endringen over en lukket sløyfe er null — akkurat som for indre energi. Det betyr IKKE at ingenting skjer: universets entropi kan godt øke, fordi reservoarene endrer entropi. Svaret om at entropien i systemet må øke, blander system og univers: det er $\\Delta S_\\text{univers}\\ge0$ som er andre hovedsetning, ikke $\\Delta S_\\text{gass}>0$. Svaret $Q_\\text{inn}/T_v$ er entropien tatt opp på det varme trinnet alene, og den kanselleres av bidraget på det kalde trinnet.",
    },
    {
      question: "En Otto-syklus har kompresjonsforhold $r=8{,}00$ og bruker en gass med $\\gamma=1{,}400$. Hva er virkningsgraden?",
      options: ["$0{,}565$", "$0{,}750$", "$0{,}875$", "$0{,}435$"],
      explanation: "$\\eta_\\text{Otto}=1-r^{1-\\gamma}=1-8{,}00^{-0{,}400}=0{,}5647$. Alternativet $0{,}750$ bruker $\\gamma=1{,}667$, altså feil atomighet på gassen — den vanligste feilen i sjangeren. Alternativet $0{,}875$ har droppet eksponenten $\\gamma-1$ helt og regnet $1-1/r$. Alternativet $0{,}435$ er $r^{1-\\gamma}$ uten «$1-$» foran, og legger sammen med fasiten til nøyaktig 1.",
    },
    {
      question: "En Otto-syklus har kompresjonsforhold $r=10{,}00$ og bruker en gass med $\\gamma=1{,}400$. Hva er virkningsgraden?",
      options: ["$0{,}602$", "$0{,}785$", "$0{,}900$", "$0{,}398$"],
      explanation: "$\\eta_\\text{Otto}=1-r^{1-\\gamma}=1-10{,}00^{-0{,}400}=0{,}6019$. Alternativet $0{,}785$ bruker $\\gamma=1{,}667$, altså feil atomighet på gassen — den vanligste feilen i sjangeren. Alternativet $0{,}900$ har droppet eksponenten $\\gamma-1$ helt og regnet $1-1/r$. Alternativet $0{,}398$ er $r^{1-\\gamma}$ uten «$1-$» foran, og legger sammen med fasiten til nøyaktig 1.",
    },
    {
      question: "En Otto-syklus har kompresjonsforhold $r=7{,}00$ og bruker en gass med $\\gamma=1{,}667$. Hva er virkningsgraden?",
      options: ["$0{,}727$", "$0{,}541$", "$0{,}857$", "$0{,}273$"],
      explanation: "$\\eta_\\text{Otto}=1-r^{1-\\gamma}=1-7{,}00^{-0{,}667}=0{,}7267$. Alternativet $0{,}541$ bruker $\\gamma=1{,}400$, altså feil atomighet på gassen — den vanligste feilen i sjangeren. Alternativet $0{,}857$ har droppet eksponenten $\\gamma-1$ helt og regnet $1-1/r$. Alternativet $0{,}273$ er $r^{1-\\gamma}$ uten «$1-$» foran, og legger sammen med fasiten til nøyaktig 1.",
    },
    {
      question: "I en Otto-syklus komprimeres en toatomig gass ($\\gamma=1{,}40$) adiabatisk med kompresjonsforhold $r=9{,}00$ fra $310\\,\\text{K}$. Hva er temperaturen etter kompresjonen?",
      options: ["$746{,}5\\,\\text{K}$", "$1341{,}3\\,\\text{K}$", "$2790{,}0\\,\\text{K}$", "$128{,}7\\,\\text{K}$"],
      explanation: "Adiabatrelasjonen $TV^{\\gamma-1}=\\text{konstant}$ gir $T_2=T_1r^{\\gamma-1}=310\\cdot2{,}4082=746{,}5\\,\\text{K}$. Alternativet $1341{,}3\\,\\text{K}$ bruker $\\gamma=5/3$ i stedet for $7/5$. Alternativet $2790{,}0\\,\\text{K}$ har ganget rett med $r$ uten eksponent — det gir en helt urimelig temperatur. Alternativet $128{,}7\\,\\text{K}$ har DIVIDERT, altså brukt relasjonen for ekspansjon der kompresjon var oppgitt, og gir lavere temperatur etter en kompresjon, som er fysisk umulig.",
    },
    {
      question: "I en Otto-syklus med $r=12{,}0$ og $\\gamma=1{,}40$ er temperaturen etter forbrenningen $1700\\,\\text{K}$. Hva er temperaturen etter den adiabatiske ekspansjonen?",
      options: ["$629{,}2\\,\\text{K}$", "$4593{,}3\\,\\text{K}$", "$141{,}7\\,\\text{K}$", "$324{,}3\\,\\text{K}$"],
      explanation: "$T_4=T_3r^{1-\\gamma}=1700/2{,}7019=629{,}2\\,\\text{K}$. Alternativet $4593{,}3\\,\\text{K}$ har ganget i stedet for å dividere, altså brukt kompresjonsretningen — og gir høyere temperatur etter en ekspansjon, som er umulig. Alternativet $141{,}7\\,\\text{K}$ har droppet eksponenten. Alternativet $324{,}3\\,\\text{K}$ bruker $\\gamma=5/3$.",
    },
    {
      question: "Hvilke størrelser avgjør virkningsgraden til en ideell Otto-syklus?",
      options: ["Bare kompresjonsforholdet og adiabateksponenten", "Kompresjonsforholdet, adiabateksponenten og den høyeste temperaturen i syklusen", "Bare de to ytterste temperaturene, akkurat som for en Carnot-syklus", "Kompresjonsforholdet og mengden drivstoff som brennes per syklus"],
      explanation: "$\\eta_\\text{Otto}=1-r^{1-\\gamma}$ inneholder ingenting annet enn $r$ og $\\gamma$. Temperaturdifferansen $T_4-T_1$ kanselleres mot $T_3-T_2$ i utledningen, og derfor faller alle temperaturer ut. Svaret som tar med den høyeste temperaturen, er nær sant i den forstand at $T_3$ avgjør hvor mye ARBEID syklusen gir per omdreining — men ikke hvilken andel av varmen som blir arbeid. Svaret om to ytterste temperaturer gjelder Carnot, ikke Otto.",
    },
    {
      question: "En syklus i et $pV$-diagram er et rektangel med hjørner ved $p_1=1{,}20\\cdot10^5\\,\\text{Pa}$, $p_2=4{,}00\\cdot10^5\\,\\text{Pa}$, $V_1=15{,}0\\,\\text{L}$ og $V_2=55{,}0\\,\\text{L}$. Hvor stort er netto arbeid per syklus?",
      options: ["$11{,}20\\,\\text{kJ}$", "$16{,}00\\,\\text{kJ}$", "$15{,}40\\,\\text{kJ}$", "$20{,}80\\,\\text{kJ}$"],
      explanation: "Netto arbeid er det OMSLUTTEDE arealet, $(p_2-p_1)(V_2-V_1)=2{,}80\\cdot10^5\\cdot40{,}0\\cdot10^{-3}=11{,}20\\,\\text{kJ}$. Alternativet $16{,}00\\,\\text{kJ}$ er arbeidet på BARE det øvre isobare trinnet — returen er glemt, og det er den vanligste feilen her. Alternativet $15{,}40\\,\\text{kJ}$ bruker hele $V_2$ i stedet for volumDIFFERANSEN. Det største alternativet har lagt trykkene sammen i stedet for å trekke dem fra hverandre.",
    },
    {
      question: "I en firkant-syklus med to isokorer og to isobarer, gjennomløpt medklokke, hvilke trinn hører i $Q_\\text{inn}$?",
      options: ["Den isokore oppvarmingen og den isobare ekspansjonen — de to trinnene der temperaturen stiger", "Alle fire trinnene, siden varme utveksles på hvert av dem underveis i syklusen", "Bare den isobare ekspansjonen, siden det er det eneste trinnet som gir positivt arbeid", "De to isobare trinnene, siden bare de har $W \\neq 0$ og dermed kan tilføre energi"],
      explanation: "$Q_\\text{inn}$ er summen av varmen på bare de trinnene der $Q>0$. Medklokke betyr at trykket først stiger isokort og deretter at volumet øker isobart; på begge stiger temperaturen, så $Q>0$ på begge. Svaret «alle fire» gir $Q_\\text{netto}$, som er lik netto arbeid, og da blir virkningsgraden alltid 1. Svaret om bare den isobare ekspansjonen glemmer den isokore oppvarmingen. Svaret om de to isobare trinnene tar med et trinn der varme går UT.",
    },
    {
      question: "En syklus i et $pV$-diagram med volum langs den vannrette aksen gjennomløpes motklokke. Hva forteller det?",
      options: ["Netto arbeid er negativt: maskinen er en varmepumpe eller et kjøleskap", "Netto arbeid er positivt, men virkningsgraden er lavere enn for den samme sløyfa medklokke", "Syklusen er irreversibel, og universets entropi øker mer enn ved medklokke", "Netto arbeid er null, fordi de to retningene gir like store bidrag som kansellerer"],
      explanation: "Motklokke gir $W_\\text{netto}<0$: det må tilføres arbeid, og maskinen flytter varme fra kaldt til varmt. Det er definisjonen av en varmepumpe eller et kjøleskap, og du skal da regne effektfaktor i stedet for virkningsgrad. Svaret om irreversibilitet blander to helt ulike ting — omløpsretningen sier ingenting om reversibilitet. Svaret om null nettoarbeid ville betydd at sløyfa hadde null areal.",
    },
    {
      question: "Hvorfor er $\\Delta U=0$ over én hel kretsprosess?",
      options: ["Fordi indre energi er en tilstandsfunksjon, og sluttilstanden er identisk med starttilstanden", "Fordi varmen inn er like stor som varmen ut når syklusen er reversibel og uten friksjon", "Fordi arbeidet gassen gjør, alltid balanserer arbeidet omgivelsene gjør på den", "Fordi den indre energien i en ideell gass er null når temperaturen kommer tilbake til utgangspunktet"],
      explanation: "Indre energi avhenger bare av tilstanden, ikke av veien dit. Lukkes sløyfa, er $\\Delta U=0$ uansett om prosessene er reversible eller ikke. Svaret om at varme inn er lik varme ut, er galt: da ville $W_\\text{netto}$ vært null og maskinen ubrukelig — det er $Q_\\text{netto}=W_\\text{netto}$ som gjelder. Svaret om at $U$ er null, forveksler «uendret» med «null»: $U=nC_VT$ er positiv ved alle temperaturer over det absolutte nullpunktet.",
    },
    {
      question: "En Stirling-syklus arbeider mellom $640\\,\\text{K}$ og $360\\,\\text{K}$ og har en ideell regenerator. Hva er virkningsgraden?",
      options: ["$0{,}438$", "$0{,}219$", "$0{,}562$", "$2{,}286$"],
      explanation: "Med ideell regenerator sirkulerer den isokore varmen internt, og bare den varme isotermens $Q$ står i nevneren. Da blir $\\eta=1-T_k/T_v=0{,}4375$, altså nøyaktig Carnot-grensen. Alternativet $0{,}219$ er virkningsgraden UTEN regenerator, der den isokore varmen må kjøpes utenfra (regnet for en toatomig gass med volumforhold 3). Alternativet $0{,}562$ er temperaturforholdet uten «$1-$». Alternativet over 1 er en effektfaktor, ikke en virkningsgrad.",
    },
    {
      question: "Hva gjør en regenerator i en Stirling-motor?",
      options: ["Den lagrer varmen fra det avkjølende trinnet og gir den tilbake på det oppvarmende, slik at den ikke må kjøpes utenfra", "Den øker netto arbeid per syklus ved å presse mer varme inn på det isoterme ekspansjonstrinnet", "Den senker temperaturen i det kalde reservoaret og øker dermed temperaturforskjellen maskinen arbeider over", "Den gjør de to isokore trinnene adiabatiske, slik at syklusen blir en ren Carnot-syklus med to adiabater"],
      explanation: "Regeneratoren flytter den isokore varmen INTERNT. Arbeidet per syklus er uendret — det kommer bare fra isotermene — men nevneren i $\\eta=W/Q_\\text{inn}$ blir mindre, og virkningsgraden stiger til Carnot-grensen. Svaret om økt nettoarbeid er nær sant i den forstand at motoren blir mer nyttig, men arbeidet i seg selv endres ikke. Svaret om at isokorene blir adiabatiske, er galt: volumet er fortsatt konstant på de trinnene, og gassen utveksler fortsatt varme — bare med regeneratoren i stedet for med omgivelsene.",
    },
    {
      question: "Ved samme kompresjonsforhold og samme gass, hvordan er Diesel-virkningsgraden sammenlignet med Otto?",
      options: ["Lavere, fordi varmen tilføres ved konstant trykk og dermed delvis ved lavere temperatur enn i Otto", "Høyere, fordi den isobare varmetilførselen gir større netto arbeid per syklus enn den isokore gjør", "Nøyaktig like stor, siden begge har to adiabater og virkningsgraden bare avhenger av kompresjonsforholdet", "Lavere, fordi dieselmotoren komprimerer ren luft og derfor ikke får utnyttet drivstoffets fulle energi"],
      explanation: "Diesel tilfører varmen isobart, mens gassen alt utvider seg, så en del av varmen kommer inn ved lavere temperatur enn i Otto — og varme mottatt ved lavere temperatur gir mindre arbeid. Ved $r=18$ og $\\gamma=1{,}40$ blir det $0{,}632$ mot $0{,}685$. At dieselmotorer likevel vinner i praksis, skyldes at de tåler et mye høyere $r$. Svaret om at virkningsgradene er like, gjelder bare i grensen der innsprøytningsforholdet går mot 1. Svaret om drivstoffets energi blander virkningsgrad med forbrenningskjemi.",
    },
    {
      question: "En maskin arbeider mellom $700\\,\\text{K}$ og $350\\,\\text{K}$. Hvilken påstand er umulig?",
      options: ["Den tar imot $40\\,\\text{kJ}$ og leverer $24\\,\\text{kJ}$ arbeid per syklus", "Den tar imot $40\\,\\text{kJ}$ og leverer $18\\,\\text{kJ}$ arbeid per syklus", "Den tar imot $40\\,\\text{kJ}$ og avgir $30\\,\\text{kJ}$ til det kalde reservoaret", "Den tar imot $40\\,\\text{kJ}$ og har en virkningsgrad på $0{,}35$ per syklus"],
      explanation: "Carnot-grensen er $1-350/700=0{,}500$. Påstanden om $24\\,\\text{kJ}$ arbeid gir $\\eta=24/40=0{,}600$, altså over grensen — den bryter andre hovedsetning, selv om energiregnskapet går opp. Påstanden om $18\\,\\text{kJ}$ gir $\\eta=0{,}450$, som er under grensen og dermed lovlig. Påstanden om $30\\,\\text{kJ}$ ut svarer til $\\eta=0{,}250$, godt innenfor. Påstanden med $\\eta=0{,}35$ er også under grensen.",
    },
    {
      question: "Hvordan ligger en adiabat i forhold til en isoterm gjennom samme punkt i et $pV$-diagram?",
      options: ["Adiabaten er brattere, og forholdet mellom stigningstallene er nøyaktig $\\gamma$", "Isotermen er brattere, siden den holder temperaturen oppe mens volumet øker", "De har samme stigningstall i punktet, men adiabaten krummer sterkere videre utover", "Adiabaten er brattere bare ved kompresjon; ved ekspansjon er de to like bratte"],
      explanation: "Deriverer du $pV=\\text{konst}$ og $pV^\\gamma=\\text{konst}$ i samme punkt, får du $-p/V$ og $-\\gamma p/V$. Forholdet er $\\gamma>1$, så adiabaten er brattere — i HVERT punkt, ikke bare i gjennomsnitt og ikke bare i én retning. Fysisk: langs en adiabat kjøles gassen ned mens den utvider seg, så trykket faller raskere. Svaret om samme stigningstall og ulik krumning er nær sant i den forstand at begge er krumme kurver, men stigningstallene er forskjellige alt i punktet.",
    },
    {
      question: "Hva står i nevneren når du regner virkningsgraden til en kretsprosess?",
      options: ["Summen av varmen på de trinnene der varme går INN i gassen", "Summen av all varme som utveksles på alle trinn, uansett fortegn", "Netto arbeid over syklusen, siden det er det maskinen faktisk leverer", "Varmen som avgis til det kalde reservoaret, siden det er den som går tapt"],
      explanation: "$\\eta=W_\\text{netto}/Q_\\text{inn}$, og $Q_\\text{inn}$ er summen av BARE de positive varmebidragene. Bruker du summen av all varme, får du $Q_\\text{netto}=W_\\text{netto}$ og dermed $\\eta=1$ hver gang, som er umulig. Svaret om netto arbeid setter telleren i nevneren. Svaret om varmen ut er nær sant i den forstand at $|Q_\\text{ut}|$ inngår i uttrykket $1-|Q_\\text{ut}|/Q_\\text{inn}$ — men som teller i den brøken, ikke som nevner i virkningsgraden.",
    },
    {
      question: "En firetakts motor gjør $620\\,\\text{J}$ netto arbeid per arbeidssyklus og går på $3000$ omdreininger per minutt. Hvilken effekt leverer den?",
      options: ["$15{,}50\\,\\text{kW}$", "$31{,}00\\,\\text{kW}$", "$1860{,}0\\,\\text{kW}$", "$7{,}75\\,\\text{kW}$"],
      explanation: "En firetakter gjør én arbeidssyklus per TO omdreininger, så $f=3000/(60\\cdot2)=25{,}0\\,\\text{s}^{-1}$ og $P=W f=15{,}50\\,\\text{kW}$. Alternativet $31{,}00\\,\\text{kW}$ regner én arbeidssyklus per omdreining, altså glemmer firetakt-faktoren 2 — det er den vanligste feilen her. Alternativet $1860{,}0\\,\\text{kW}$ har glemt å dele på 60 sekunder. Alternativet $7{,}75\\,\\text{kW}$ deler på 4 fordi motoren er «firetakts», men det er antall TAKTER per syklus, ikke omdreininger.",
    },
    {
      question: "$1,50$ mol ideell gass ekspanderer isotermt ved $380\\,\\text{K}$ til $4{,}00$ ganger volumet. Hvor mye varme tar den opp?",
      options: ["$6{,}570\\,\\text{kJ}$", "$18{,}96\\,\\text{kJ}$", "$9{,}854\\,\\text{kJ}$", "$2{,}853\\,\\text{kJ}$"],
      explanation: "For en isoterm er $\\Delta U=0$, altså $Q=W=nRT\\ln(V_2/V_1)=1,50\\cdot8{,}314\\cdot380\\cdot1{,}38629=6{,}570\\,\\text{kJ}$. Alternativet $18{,}96\\,\\text{kJ}$ har satt volumforholdet rett inn i stedet for logaritmen av det. Alternativet $9{,}854\\,\\text{kJ}$ har brukt $C_V=\\tfrac32R$ i stedet for $R$, altså forvekslet isotermarbeidet med en varmekapasitetsformel. Alternativet $2{,}853\\,\\text{kJ}$ har brukt tierlogaritmen i stedet for den naturlige.",
    },
    {
      question: "En Otto-syklus har $r=8{,}00$, $\\gamma=1{,}40$, $T_1=300\\,\\text{K}$ og $T_3=1500\\,\\text{K}$. Hvilken rangering av hjørnetemperaturene er riktig?",
      options: ["$T_3 > T_4 > T_2 > T_1$", "$T_3 > T_2 > T_4 > T_1$", "$T_3 > T_2 > T_1 > T_4$", "$T_2 > T_3 > T_4 > T_1$"],
      explanation: "Regn dem ut: $T_2=T_1r^{\\gamma-1}=689{,}2\\,\\text{K}$ og $T_4=T_3r^{1-\\gamma}=652{,}9\\,\\text{K}$. Med disse tallene er $T_4>T_2$, så rangeringen er $T_3>T_4>T_2>T_1$. Rangeringen $T_3>T_2>T_4>T_1$ er den du får med et mindre temperaturspenn — hvilken av $T_2$ og $T_4$ som er størst, avgjøres av om $T_3/T_1$ er større eller mindre enn $r^{2(\\gamma-1)}=5{,}278$, og her er $T_3/T_1=5{,}000$, altså større. Rangeringen med $T_4$ lavest er umulig: avgassen er alltid varmere enn den friske blandingen. Og $T_2>T_3$ er umulig, siden forbrenningen bare kan heve temperaturen.",
    },
  ],
  'tfy4115-8-2': [
    {
      question: "En Carnot-varmepumpe holder et hus på $21{,}0\\,^\\circ\\text{C}$ når det er $-8{,}0\\,^\\circ\\text{C}$ ute. Hva er den største mulige effektfaktoren for oppvarming?",
      options: ["$10{,}143$", "$9{,}143$", "$0{,}724$", "$0{,}099$"],
      explanation: "Skriv om til kelvin: $T_v=294{,}15\\,\\text{K}$, $T_k=265{,}15\\,\\text{K}$, differansen $29{,}0\\,\\text{K}$. Da er $\\varepsilon_V=T_v/(T_v-T_k)=10{,}1431$. Alternativet $9{,}143$ er effektfaktoren for KJØLING, som er nøyaktig 1 mindre — det er det mest valgte gale svaret i sjangeren. Alternativet $0{,}724$ er celsius satt inn i telleren; legg merke til at det ligger under 1, og en varmepumpe kan ikke være dårligere enn en panelovn. Alternativet $0{,}099$ er virkningsgraden til en MASKIN mellom samme temperaturer.",
    },
    {
      question: "En Carnot-varmepumpe holder et hus på $23{,}0\\,^\\circ\\text{C}$ når det er $-12{,}0\\,^\\circ\\text{C}$ ute. Hva er den største mulige effektfaktoren for oppvarming?",
      options: ["$8{,}461$", "$7{,}461$", "$0{,}657$", "$0{,}118$"],
      explanation: "Skriv om til kelvin: $T_v=296{,}15\\,\\text{K}$, $T_k=261{,}15\\,\\text{K}$, differansen $35{,}0\\,\\text{K}$. Da er $\\varepsilon_V=T_v/(T_v-T_k)=8{,}4614$. Alternativet $7{,}461$ er effektfaktoren for KJØLING, som er nøyaktig 1 mindre — det er det mest valgte gale svaret i sjangeren. Alternativet $0{,}657$ er celsius satt inn i telleren; legg merke til at det ligger under 1, og en varmepumpe kan ikke være dårligere enn en panelovn. Alternativet $0{,}118$ er virkningsgraden til en MASKIN mellom samme temperaturer.",
    },
    {
      question: "En Carnot-varmepumpe holder et hus på $20{,}0\\,^\\circ\\text{C}$ når det er $5{,}0\\,^\\circ\\text{C}$ ute. Hva er den største mulige effektfaktoren for oppvarming?",
      options: ["$19{,}543$", "$18{,}543$", "$1{,}333$", "$0{,}051$"],
      explanation: "Skriv om til kelvin: $T_v=293{,}15\\,\\text{K}$, $T_k=278{,}15\\,\\text{K}$, differansen $15{,}0\\,\\text{K}$. Da er $\\varepsilon_V=T_v/(T_v-T_k)=19{,}5433$. Alternativet $18{,}543$ er effektfaktoren for KJØLING, som er nøyaktig 1 mindre — det er det mest valgte gale svaret i sjangeren. Alternativet $1{,}333$ er celsius satt inn i telleren; legg merke til at det ligger under 1, og en varmepumpe kan ikke være dårligere enn en panelovn. Alternativet $0{,}051$ er virkningsgraden til en MASKIN mellom samme temperaturer.",
    },
    {
      question: "Et kjøleanlegg holder $-6{,}0\\,^\\circ\\text{C}$ i et rom der omgivelsene er $22{,}0\\,^\\circ\\text{C}$. Hva er den største mulige effektfaktoren for KJØLING?",
      options: ["$9{,}541$", "$10{,}541$", "$-0{,}214$", "$0{,}095$"],
      explanation: "For kjøling står den KALDE temperaturen i telleren: $\\varepsilon_K=T_k/(T_v-T_k)=267{,}15/28{,}0=9{,}5411$. Alternativet $10{,}541$ er effektfaktoren for oppvarming, altså nøyaktig 1 mer. Alternativet $-0{,}214$ har satt inn celsius i telleren, og gir et negativt tall som er umulig. Alternativet $0{,}095$ er virkningsgraden til en varmekraftmaskin.",
    },
    {
      question: "En varmepumpe har effektfaktor $2{,}80$ for kjøling. Hva er effektfaktoren for oppvarming?",
      options: ["$3{,}80$", "$1{,}80$", "$0{,}357$", "$2{,}80$"],
      explanation: "$\\varepsilon_V=\\varepsilon_K+1=3{,}80$, som følger direkte av energibalansen $|Q_H|=|Q_L|+W$ delt på $W$. Alternativet $1{,}80$ har TRUKKET FRA 1 i stedet for å legge til. Alternativet $0{,}357$ er $1/\\varepsilon_K$, altså brøken snudd — og det ligger under 1, som er umulig for en effektfaktor for oppvarming. Alternativet som er likt det oppgitte tallet, svarer til at de to effektfaktorene er like, og det er de aldri.",
    },
    {
      question: "En varmepumpe leverer $7{,}20\\,\\text{kW}$ til et hus og har $\\varepsilon_V=3{,}60$. Hvilken elektrisk effekt bruker kompressoren?",
      options: ["$2{,}000\\,\\text{kW}$", "$25{,}92\\,\\text{kW}$", "$5{,}20\\,\\text{kW}$", "$2{,}769\\,\\text{kW}$"],
      explanation: "$\\varepsilon_V=|Q_H|/W$, så $W=|Q_H|/\\varepsilon_V=7{,}20/3{,}60=2{,}000\\,\\text{kW}$. Alternativet $25{,}92\\,\\text{kW}$ har GANGET med effektfaktoren i stedet for å dividere, og gir mer arbeid inn enn varme ut — umulig for en pumpe. Alternativet $5{,}20\\,\\text{kW}$ er varmen hentet fra uteluften, $|Q_L|$. Alternativet $2{,}769\\,\\text{kW}$ har brukt $\\varepsilon_K$ i nevneren i stedet for $\\varepsilon_V$.",
    },
    {
      question: "En varmepumpe leverer $9{,}60\\,\\text{kW}$ til et hus og bruker $2{,}40\\,\\text{kW}$ elektrisk. Hvor mye varme hentes fra uteluften per sekund?",
      options: ["$7{,}20\\,\\text{kW}$", "$12{,}00\\,\\text{kW}$", "$4{,}00\\,\\text{kW}$", "$2{,}40\\,\\text{kW}$"],
      explanation: "Energibalansen $|Q_H|=|Q_L|+W$ gir $|Q_L|=9{,}60-2{,}40=7{,}20\\,\\text{kW}$. Alternativet $12{,}00\\,\\text{kW}$ har LAGT TIL arbeidet, altså regnet som om arbeidet kom i tillegg til varmen ut — men arbeidet er alt inkludert i $|Q_H|$. Alternativet $4{,}00$ er effektfaktoren, et dimensjonsløst tall som er gitt enhet her. Alternativet likt kompressoreffekten svarer til at halve varmen kommer utenfra, som bare stemmer når $\\varepsilon_V=2$.",
    },
    {
      question: "Et kjøleskap fjerner $180\\,\\text{W}$ fra kjøleskapsrommet og bruker $60\\,\\text{W}$ elektrisk. Hvor mye varme avgir det til kjøkkenet?",
      options: ["$240\\,\\text{W}$", "$180\\,\\text{W}$", "$120\\,\\text{W}$", "$60\\,\\text{W}$"],
      explanation: "$|Q_H|=|Q_L|+W=180+60=240\\,\\text{W}$: kjøleskapet avgir MER varme til kjøkkenet enn det fjerner fra maten, og differansen er nøyaktig kompressorarbeidet. Alternativet $180\\,\\text{W}$ glemmer kompressorarbeidet og antar at varmen bare flyttes uendret. Alternativet $120\\,\\text{W}$ har trukket fra i stedet for å legge til. Alternativet $60\\,\\text{W}$ er bare kompressorarbeidet — det er den varmen som netto tilføres kjøkkenet om DØRA STÅR ÅPEN, men med lukket dør avgis hele $240\\,\\text{W}$ på baksiden.",
    },
    {
      question: "En varmepumpe varmer $200$ liter vann $40{,}0\\,\\text{K}$ på $3{,}00$ timer med en kompressor på $900\\,\\text{W}$. Hva er effektfaktoren? ($c_\\text{vann}=4180\\,\\text{J/(kg}\\cdot\\text{K)}$)",
      options: ["$3{,}440$", "$12385{,}185$", "$0{,}003$", "$0{,}291$"],
      explanation: "$|Q_H|=mc\\Delta T=200\\cdot4180\\cdot40{,}0=33{,}440\\,\\text{MJ}$ og $W=P\\Delta t=900\\cdot10800=9{,}720\\,\\text{MJ}$, altså $\\varepsilon_V=3{,}4403$. Alternativet $12385{,}185$ har glemt å gjøre timer om til sekunder. Alternativet $0{,}003$ har regnet liter som kubikkmeter og fått en faktor 1000 for lite. Alternativet $0{,}291$ er brøken snudd, og ligger under 1.",
    },
    {
      question: "Hvilken effektfaktor for oppvarming har en vanlig panelovn?",
      options: ["Nøyaktig 1, siden alt det elektriske arbeidet blir varme i rommet og ingenting hentes utenfra", "Litt under 1, fordi noe av den elektriske energien går tapt som lys og lyd i stedet for varme", "Rundt 3, det samme som en enkel varmepumpe, siden begge omdanner strøm til varme i rommet", "Den er udefinert, fordi en panelovn ikke er en kretsprosess og derfor ikke har noen effektfaktor"],
      explanation: "En panelovn har $|Q_L|=0$ og $|Q_H|=W$, altså $\\varepsilon_V=1$ nøyaktig. Dette er referansen som gjør at ingen varmepumpe kan ha $\\varepsilon_V<1$: en pumpe gjør i tillegg jobben panelovnen ikke gjør. Svaret om tap som lys og lyd er nær sant i den forstand at ovnen avgir litt stråling — men strålingen ender også som varme i rommet, så regnskapet blir likevel 1. Svaret om at effektfaktoren er udefinert, er galt: definisjonen $|Q_H|/W$ gjelder for enhver oppvarmingsinnretning.",
    },
    {
      question: "Hvorfor kan effektfaktoren for oppvarming være større enn 1 uten at energibevaring brytes?",
      options: ["Fordi pumpa flytter varme utenfra i tillegg til å tilføre arbeidet, og begge deler kommer ut på den varme siden", "Fordi arbeidet omdannes til varme med en virkningsgrad som kan overstige 1 i en lukket kretsprosess", "Fordi kompressoren komprimerer gassen og derved skaper ny indre energi som frigjøres som varme", "Fordi effektfaktoren måles over en hel syklus, og energibevaring gjelder bare for enkeltprosesser"],
      explanation: "Energien ut er $|Q_H|=|Q_L|+W$: summen av varmen hentet fra uteluften og arbeidet. Energien inn er den samme summen, så regnskapet balanserer eksakt. Det som er over 1, er ikke en virkningsgrad, men forholdet mellom nytte og betaling. Svaret om virkningsgrad over 1 er selvmotsigende. Svaret om at kompressoren skaper indre energi, er galt: kompresjonen hever temperaturen, men energien kommer fra arbeidet. Svaret om at energibevaring bare gjelder enkeltprosesser, er galt — den gjelder alltid.",
    },
    {
      question: "Hva skjer med Carnot-grensen for en varmepumpes effektfaktor når det blir kaldere ute, mens innetemperaturen holdes fast?",
      options: ["Den synker, fordi temperaturdifferansen i nevneren blir større", "Den stiger, fordi det er mer varme å hente i den kalde uteluften per grad temperaturløft", "Den er uendret, fordi grensen bare avhenger av innetemperaturen i telleren", "Den synker, men bare hvis pumpa er en luft-til-luft-pumpe og ikke en bergvarmepumpe"],
      explanation: "$\\varepsilon_{V,\\text{Carnot}}=T_v/(T_v-T_k)$ har temperaturdifferansen i nevneren. Synker $T_k$, øker nevneren, og grensen faller. Det er derfor luft-til-luft-pumper yter dårligst på de kaldeste dagene. Svaret om at grensen er uendret, ser bare på telleren. Svaret om luft-til-luft mot bergvarme er nær sant i praksis — en bergvarmebrønn holder jevn temperatur — men fysikken i formelen er den samme for begge: det er $T_k$ som teller, og bergvarmens fordel er at $T_k$ ikke synker.",
    },
    {
      question: "Hvorfor gir gulvvarme høyere effektfaktor enn gamle radiatorer for samme varmepumpe og samme varmekilde?",
      options: ["Fordi gulvvarme leveres ved lavere temperatur, slik at temperaturløftet og dermed nevneren blir mindre", "Fordi gulvvarme fordeler varmen over et større areal og derfor krever mindre total varmeeffekt til huset", "Fordi vann i gulvvarmerør har høyere varmekapasitet enn vann i radiatorer og transporterer varmen mer effektivt", "Fordi radiatorer avgir mer varme ved stråling, som ikke regnes med i effektfaktoren for oppvarming"],
      explanation: "$\\varepsilon_{V,\\text{Carnot}}=T_v/(T_v-T_k)$: en lavere turtemperatur $T_v$ gir mindre løft og høyere grense. Gulvvarme drives typisk på $30$–$35\\,^\\circ\\text{C}$, radiatorer på $55$–$70\\,^\\circ\\text{C}$. Svaret om større areal er nær sant i den forstand at det store arealet ER grunnen til at gulvvarme KAN drives kjølig — men det er temperaturen, ikke arealet, som står i formelen. Vannets varmekapasitet er den samme i begge systemer, og strålingsvarme regnes med i $|Q_H|$ på lik linje med annen varme.",
    },
    {
      question: "Kan effektfaktoren for kjøling være mindre enn 1?",
      options: ["Ja, når kompressorarbeidet er større enn varmen som fjernes — typisk ved svært store temperaturløft", "Nei, aldri, siden en kjølemaskin per definisjon flytter mer varme enn den bruker arbeid", "Nei, siden det ville betydd at $\\varepsilon_V$ ble mindre enn 1, og det er fysisk umulig", "Ja, men bare hvis maskinen er irreversibel og produserer entropi underveis i syklusen"],
      explanation: "$\\varepsilon_K=|Q_L|/W$ er mindre enn 1 når $W>|Q_L|$, og det skjer ved store temperaturløft — kryokjølere ned mot noen kelvin har $\\varepsilon_K$ langt under 1. Det er $\\varepsilon_V=\\varepsilon_K+1$ som er over 1 uansett. Svaret om at $\\varepsilon_V$ da ville blitt under 1, regner feil: med $\\varepsilon_K=0{,}8$ er $\\varepsilon_V=1{,}8$. Svaret om irreversibilitet blander to ting: også en ideell Carnot-kjølemaskin får $\\varepsilon_K<1$ når $T_k<T_v/2$.",
    },
    {
      question: "En Carnot-maskin mellom $320\\,\\text{K}$ og $280\\,\\text{K}$ har virkningsgrad $0{,}1250$. Hva blir effektfaktoren for oppvarming hvis den samme maskinen kjøres baklengs som varmepumpe?",
      options: ["$8{,}000$", "$7{,}000$", "$0{,}125$", "$0{,}875$"],
      explanation: "En Carnot-varmepumpe er maskinen baklengs, så $\\varepsilon_V=1/\\eta=1/0{,}1250=8{,}0000$. Kontroll med formelen: $T_v/(T_v-T_k)=320/40{,}0=8{,}0000$ ✔. Alternativet $7{,}000$ er effektfaktoren for kjøling, nøyaktig 1 mindre. Alternativet likt virkningsgraden svarer til at man ikke inverterer i det hele tatt. Alternativet $0{,}875$ er $T_k/T_v$, altså komplementet til virkningsgraden.",
    },
    {
      question: "En kjølemaskin fjerner $300\\,\\text{W}$. Hvor lang tid tar det å fryse $1,20\\,\\text{kg}$ vann som alt er ved $0\\,^\\circ\\text{C}$? ($L_f=3{,}34\\cdot10^5\\,\\text{J/kg}$)",
      options: ["$1336\\,\\text{s}$", "$22{,}3\\,\\text{s}$", "$400800\\,\\text{s}$", "$167{,}2\\,\\text{s}$"],
      explanation: "Frysing ved konstant temperatur krever $Q=mL_f=1,20\\cdot3{,}34\\cdot10^5=400{,}8\\,\\text{kJ}$, og $t=Q/P=1336\\,\\text{s}$. Alternativet $22{,}3$ er svaret i MINUTTER, oppgitt med enheten sekund. Alternativet $400800$ er varmemengden i joule, ikke tiden. Alternativet $167{,}2$ har brukt $mc\\Delta T$ med en temperaturendring på 10 K — men under en faseovergang endres ikke temperaturen, så $mc\\Delta T$ gjelder ikke.",
    },
    {
      question: "En syklus i et $pV$-diagram gjennomløpes motklokke. Hvilken størrelse skal du regne?",
      options: ["Effektfaktoren, siden netto arbeid er negativt og maskinen er en varmepumpe eller et kjøleskap", "Virkningsgraden, men med negativt fortegn, siden arbeidet går inn i stedet for ut", "Både virkningsgrad og effektfaktor, siden begge er definert for enhver kretsprosess", "Carnot-virkningsgraden, siden motklokke bare forekommer for reversible sykluser"],
      explanation: "Motklokke gir $W_\\text{netto}<0$: arbeid må tilføres, og maskinen flytter varme fra kaldt til varmt. Da er nyttevirkningen varme, ikke arbeid, og du skal regne $\\varepsilon_V$ eller $\\varepsilon_K$. Svaret om negativ virkningsgrad er meningsløst — virkningsgrad er definert som arbeid ut delt på varme inn, og her er det ikke noe arbeid ut. Svaret om at motklokke innebærer reversibilitet er galt: en dårlig varmepumpe går også motklokke.",
    },
    {
      question: "En varmepumpe har $\\varepsilon_V=3{,}20$ mellom $294{,}15\\,\\text{K}$ og $271{,}15\\,\\text{K}$. Hvor stor del av Carnot-grensen utnytter den?",
      options: ["$25{,}0\\ \\%$", "$399{,}7\\ \\%$", "$27{,}1\\ \\%$", "$4093\\ \\%$"],
      explanation: "$\\varepsilon_{V,\\text{Carnot}}=294{,}15/23{,}0=12{,}7891$, og andelen er $3{,}20/12{,}7891=0{,}2502$, altså $25{,}0$ prosent. Alternativet $399{,}7$ prosent er brøken snudd, og gir over 100 prosent — umulig for et forhold mot en øvre grense. Alternativet $27{,}1$ prosent har brukt kjøle-grensen i nevneren. Alternativet $4093$ prosent har brukt virkningsgraden i nevneren i stedet for effektfaktoren, og gir langt over 100 prosent.",
    },
    {
      question: "En varmepumpe med $\\varepsilon_V=3{,}20$ erstatter en panelovn som leverte samme varme. Hvor mye strøm spares?",
      options: ["$68{,}8\\ \\%$", "$31{,}2\\ \\%$", "$220\\ \\%$", "$320\\ \\%$"],
      explanation: "Panelovnen har $\\varepsilon_V=1$, så forholdet mellom strømforbrukene er nøyaktig $3{,}20$. Besparelsen er $1-1/\\varepsilon_V=1-0{,}3125=0{,}6875$, altså $68{,}8$ prosent. Alternativet $31{,}2$ prosent er andelen som FORTSATT brukes, ikke det som spares — de to summerer til 100 prosent. Alternativet $220$ prosent har brukt $\\varepsilon_V-1$, altså kjøle-effektfaktoren, som prosent. Alternativet $320$ prosent er over 100 og dermed umulig som besparelse.",
    },
    {
      question: "En varmepumpe arbeider mellom $293{,}15\\,\\text{K}$ og $273{,}15\\,\\text{K}$. Hvilken oppgitt effektfaktor for oppvarming er umulig?",
      options: ["$16{,}0$", "$12{,}0$", "$4{,}20$", "$1{,}50$"],
      explanation: "Carnot-grensen er $T_v/(T_v-T_k)=293{,}15/20{,}0=14{,}6575$. En oppgitt effektfaktor på $16{,}0$ ligger OVER grensen og bryter andre hovedsetning. $12{,}0$ ligger så vidt under og er teoretisk mulig, om helt urealistisk for et virkelig anlegg. $4{,}20$ er et typisk virkelig tall for et så lite temperaturløft, og $1{,}50$ er lovlig men dårlig. Merk at alle fire er over 1, så det kriteriet skiller dem ikke — her må du regne grensen.",
    },
    {
      question: "Hva står i nevneren i en effektfaktor?",
      options: ["Arbeidet som tilføres kompressoren", "Varmen som avgis til det varme reservoaret", "Varmen som hentes fra det kalde reservoaret", "Temperaturdifferansen mellom de to reservoarene"],
      explanation: "$\\varepsilon_V=|Q_H|/W$ og $\\varepsilon_K=|Q_L|/W$: arbeidet står i nevneren i BEGGE, fordi det er kostnaden du betaler. Varmen ut står i telleren i $\\varepsilon_V$, og varmen inn i telleren i $\\varepsilon_K$ — men aldri i nevneren. Temperaturdifferansen står i nevneren i CARNOT-GRENSENE, som er en annen formel; forveksles de, ender man med et tall som verken er en effektfaktor eller en grense.",
    },
    {
      question: "En Carnot-maskin mellom $500\\,\\text{K}$ og $300\\,\\text{K}$ driver en Carnot-varmepumpe mellom de samme reservoarene. Hva blir netto resultat?",
      options: ["Ingen netto varmetransport: pumpa returnerer nøyaktig den varmen maskinen flyttet", "Netto varme flyttes fra kaldt til varmt, siden effektfaktoren er større enn virkningsgraden", "Netto arbeid produseres, siden pumpa bruker mindre arbeid enn maskinen leverer", "Netto varme flyttes fra varmt til kaldt, siden maskinen taper mer enn pumpa gjenvinner"],
      explanation: "Maskinen leverer $W=\\eta Q_v$ og pumpa flytter $|Q_H|=\\varepsilon_V W=W/\\eta=Q_v$ tilbake. Alt går i null — nøyaktig fordi $\\varepsilon_{V,\\text{Carnot}}=1/\\eta_\\text{Carnot}$. Det er selve innholdet i at Carnot-syklusen er reversibel. Svaret om netto varmetransport fra kaldt til varmt er nær sant i den forstand at effektfaktoren $2{,}500$ ER større enn virkningsgraden $0{,}400$ — men de to tallene måler ulike forhold, og produktet er nøyaktig 1. Svaret om netto arbeid ville vært en evighetsmaskin.",
    },
  ],
  'tfy4115-8-3': [
    {
      question: "$1,00$ mol ideell gass har trykket $2{,}50\\cdot10^5\\,\\text{Pa}$ og volumet $24{,}0\\,\\text{L}$. Hva er temperaturen?",
      options: ["$721{,}7\\,\\text{K}$", "$448{,}5\\,\\text{K}$", "$721674\\,\\text{K}$", "$0{,}7217\\,\\text{K}$"],
      explanation: "$T=pV/(nR)=2{,}50\\cdot10^5\\cdot24{,}0\\cdot10^{-3}/(1,00\\cdot8{,}314)=721{,}7\\,\\text{K}$. Gasslova gir ALLTID kelvin, så alternativet $448{,}5\\,\\text{K}$ er svaret feilaktig behandlet som om det var celsius og deretter regnet om. Alternativet $721674\\,\\text{K}$ har brukt volumet i liter uten å gjøre om til kubikkmeter. Alternativet $0{,}7217\\,\\text{K}$ har gjort om to ganger.",
    },
    {
      question: "$2,00$ mol ideell gass har trykket $4{,}00\\cdot10^5\\,\\text{Pa}$ og volumet $15{,}0\\,\\text{L}$. Hva er temperaturen?",
      options: ["$360{,}8\\,\\text{K}$", "$87{,}7\\,\\text{K}$", "$360837\\,\\text{K}$", "$0{,}3608\\,\\text{K}$"],
      explanation: "$T=pV/(nR)=4{,}00\\cdot10^5\\cdot15{,}0\\cdot10^{-3}/(2,00\\cdot8{,}314)=360{,}8\\,\\text{K}$. Gasslova gir ALLTID kelvin, så alternativet $87{,}7\\,\\text{K}$ er svaret feilaktig behandlet som om det var celsius og deretter regnet om. Alternativet $360837\\,\\text{K}$ har brukt volumet i liter uten å gjøre om til kubikkmeter. Alternativet $0{,}3608\\,\\text{K}$ har gjort om to ganger.",
    },
    {
      question: "En kretsprosess har trinnvarmene $+9{,}00$, $+15{,}0$, $-11{,}0$ og $-6{,}00\\ \\text{kJ}$. Hva er $Q_\\text{inn}$?",
      options: ["$24{,}0\\,\\text{kJ}$", "$41{,}0\\,\\text{kJ}$", "$17{,}0\\,\\text{kJ}$", "$7{,}00\\,\\text{kJ}$"],
      explanation: "$Q_\\text{inn}$ er summen av BARE de positive bidragene: $9{,}00+15{,}0=24{,}0\\,\\text{kJ}$. Alternativet $41{,}0\\,\\text{kJ}$ har lagt sammen alle fire tallverdiene, altså tatt med varmen som går UT. Alternativet $17{,}0\\,\\text{kJ}$ er tallverdien av de to negative, altså $|Q_\\text{ut}|$. Alternativet $7{,}00\\,\\text{kJ}$ er summen med fortegn, som er netto arbeid $W_\\text{netto}$ — bruker du det som nevner, får du alltid $\\eta=1$.",
    },
    {
      question: "Samme syklus som i forrige spørsmål: hva er virkningsgraden?",
      options: ["$0{,}292$", "$0{,}171$", "$0{,}412$", "$3{,}43$"],
      explanation: "$W_\\text{netto}=\\sum Q=7{,}00\\,\\text{kJ}$ og $Q_\\text{inn}=24{,}0\\,\\text{kJ}$, altså $\\eta=7{,}00/24{,}0=0{,}292$. Alternativet $0{,}171$ har brukt summen av alle fire tallverdiene ($41{,}0\\,\\text{kJ}$) i nevneren. Alternativet $0{,}412$ har brukt $|Q_\\text{ut}|=17{,}0\\,\\text{kJ}$ i nevneren. Alternativet $3{,}43$ er brøken snudd, og ligger over 1 — umulig for en virkningsgrad.",
    },
    {
      question: "En Otto-syklus har $r=11{,}00$ og $\\gamma=1{,}400$. Hva er virkningsgraden?",
      options: ["$0{,}617$", "$0{,}798$", "$0{,}909$", "$0{,}383$"],
      explanation: "$\\eta=1-r^{1-\\gamma}=1-11{,}00^{-0{,}400}=0{,}6168$. Alternativet $0{,}798$ bruker $\\gamma=1{,}667$, altså feil atomighet. Alternativet $0{,}909$ har droppet eksponenten $\\gamma-1$ helt. Alternativet $0{,}383$ er $r^{1-\\gamma}$ uten «$1-$» foran; det og fasiten summerer til nøyaktig 1.",
    },
    {
      question: "En Otto-syklus har $r=6{,}00$ og $\\gamma=1{,}667$. Hva er virkningsgraden?",
      options: ["$0{,}697$", "$0{,}512$", "$0{,}833$", "$0{,}303$"],
      explanation: "$\\eta=1-r^{1-\\gamma}=1-6{,}00^{-0{,}667}=0{,}6971$. Alternativet $0{,}512$ bruker $\\gamma=1{,}400$, altså feil atomighet. Alternativet $0{,}833$ har droppet eksponenten $\\gamma-1$ helt. Alternativet $0{,}303$ er $r^{1-\\gamma}$ uten «$1-$» foran; det og fasiten summerer til nøyaktig 1.",
    },
    {
      question: "En rektangulær syklus har $p_1=1{,}10\\cdot10^5$, $p_2=3{,}40\\cdot10^5\\,\\text{Pa}$, $V_1=18{,}0$ og $V_2=52{,}0\\,\\text{L}$. Hvor stort er netto arbeid?",
      options: ["$7{,}820\\,\\text{kJ}$", "$11{,}56\\,\\text{kJ}$", "$15{,}30\\,\\text{kJ}$", "$11{,}96\\,\\text{kJ}$"],
      explanation: "Netto arbeid er det omsluttede arealet, $(p_2-p_1)(V_2-V_1)=7{,}820\\,\\text{kJ}$. Alternativet $11{,}56\\,\\text{kJ}$ er arbeidet på bare det øvre isobare trinnet — returen glemt. Alternativet $15{,}30\\,\\text{kJ}$ har lagt trykkene sammen i stedet for å trekke dem fra hverandre. Alternativet $11{,}96\\,\\text{kJ}$ bruker hele $V_2$ i stedet for volumdifferansen.",
    },
    {
      question: "En syklus arbeider mellom $400\\,\\text{K}$ og $900\\,\\text{K}$. Hvilken oppgitt virkningsgrad er umulig?",
      options: ["$0{,}62$", "$0{,}54$", "$0{,}38$", "$0{,}21$"],
      explanation: "Carnot-grensen er $1-400/900=0{,}5556$. En virkningsgrad på $0{,}62$ ligger over grensen og bryter andre hovedsetning, selv om energiregnskapet kan gå opp. $0{,}54$ ligger så vidt under og er teoretisk mulig. $0{,}38$ og $0{,}21$ er realistiske tall for virkelige maskiner. Merk at alle fire er under 1, så det kriteriet skiller dem ikke — her må du regne grensen.",
    },
    {
      question: "$1,50$ mol enatomig gass varmes $80{,}0\\,\\text{K}$ ved konstant TRYKK. Hvor mye varme trengs?",
      options: ["$2494\\,\\text{J}$", "$1497\\,\\text{J}$", "$3492\\,\\text{J}$", "$998\\,\\text{J}$"],
      explanation: "Isobar oppvarming krever $Q=nC_P\\Delta T$ med $C_P=\\tfrac52R=20{,}785$ for enatomig gass: $1,50\\cdot20{,}785\\cdot80{,}0=2494\\,\\text{J}$. Alternativet $1497\\,\\text{J}$ bruker $C_V=\\tfrac32R$, altså varmekapasiteten ved konstant volum — den vanligste feilen her, og den gir bare endringen i indre energi. Alternativet $3492\\,\\text{J}$ bruker $\\tfrac72R$, verdien for en toatomig gass. Alternativet $998\\,\\text{J}$ er differansen $nR\\Delta T$, altså arbeidet gassen gjør.",
    },
    {
      question: "Hva er den største mulige effektfaktoren for oppvarming for en varmepumpe mellom $21{,}0\\,^\\circ\\text{C}$ og $-4{,}0\\,^\\circ\\text{C}$?",
      options: ["$11{,}766$", "$10{,}766$", "$0{,}840$", "$0{,}085$"],
      explanation: "$\\varepsilon_V=T_v/(T_v-T_k)=294{,}15/25{,}0=11{,}7660$, med kelvin i telleren. Alternativet $10{,}766$ er effektfaktoren for kjøling, nøyaktig 1 mindre. Alternativet $0{,}840$ er celsius i telleren, og ligger under 1 — umulig, siden en varmepumpe aldri kan være dårligere enn en panelovn. Alternativet $0{,}085$ er virkningsgraden til en maskin mellom samme temperaturer.",
    },
    {
      question: "En kjølemaskin fjerner $300\\,\\text{W}$ og har $\\varepsilon_K=3{,}50$. Hvilken kompressoreffekt bruker den?",
      options: ["$85{,}71\\,\\text{W}$", "$1050\\,\\text{W}$", "$66{,}67\\,\\text{W}$", "$385{,}71\\,\\text{W}$"],
      explanation: "$\\varepsilon_K=|Q_L|/W$, så $W=|Q_L|/\\varepsilon_K=300/3{,}50=85{,}71\\,\\text{W}$. Alternativet $1050\\,\\text{W}$ har ganget i stedet for å dividere, og gir mer arbeid inn enn varme flyttet. Alternativet $66{,}67\\,\\text{W}$ har brukt $\\varepsilon_V$ i nevneren. Alternativet $385{,}71\\,\\text{W}$ er varmen som avgis til omgivelsene, $|Q_H|$.",
    },
    {
      question: "En firetakts motor gjør $550\\,\\text{J}$ per arbeidssyklus ved $3600$ omdreininger per minutt. Hvilken effekt gir den?",
      options: ["$16{,}50\\,\\text{kW}$", "$33{,}0\\,\\text{kW}$", "$1980\\,\\text{kW}$", "$8{,}250\\,\\text{kW}$"],
      explanation: "En firetakter gjør én arbeidssyklus per TO omdreininger: $f=3600/(60\\cdot2)=30{,}0\\,\\text{s}^{-1}$ og $P=16{,}50\\,\\text{kW}$. Alternativet $33{,}0\\,\\text{kW}$ regner én syklus per omdreining og gir dobbelt for mye. Alternativet $1980\\,\\text{kW}$ har glemt å dele på 60 sekunder. Alternativet $8{,}250\\,\\text{kW}$ har delt på 4 fordi motoren er firetakts — men det er antall takter per syklus, ikke omdreininger.",
    },
    {
      question: "En Stirling-syklus mellom $750\\,\\text{K}$ og $300\\,\\text{K}$ har ideell regenerator. Hva er virkningsgraden?",
      options: ["$0{,}600$", "$0{,}261$", "$0{,}400$", "$1{,}667$"],
      explanation: "Med ideell regenerator sirkulerer den isokore varmen internt, og bare den varme isotermens $Q$ står i nevneren. Da når Stirling Carnot-grensen: $\\eta=1-300/750=0{,}6000$. Alternativet $0{,}261$ er virkningsgraden UTEN regenerator, der den isokore varmen må kjøpes utenfra (regnet for enatomig gass med volumforhold 2). Alternativet $0{,}400$ er temperaturforholdet med «$1-$» glemt. Alternativet $1{,}667$ er effektfaktoren til en varmepumpe mellom samme temperaturer — over 1, og dermed umulig som virkningsgrad.",
    },
    {
      question: "Hvilken av disse er UENDRET over én hel kretsprosess?",
      options: ["Den indre energien til gassen", "Varmen som utveksles med omgivelsene", "Arbeidet gassen gjør på omgivelsene", "Entropien til de to reservoarene til sammen"],
      explanation: "Indre energi er en tilstandsfunksjon, så $\\Delta U=0$ når gassen er tilbake i utgangstilstanden. Varme og arbeid er veiavhengige og er generelt IKKE null over en sløyfe — det er nettopp derfor en maskin kan fungere. Reservoarenes samlede entropi er nær sant som distraktor, siden GASSENS entropi er uendret; men reservoarene endrer entropi, og for en irreversibel syklus øker summen deres.",
    },
    {
      question: "Hvilken relasjon gjelder for en ideell gass uansett hvilken prosess den gjennomgår?",
      options: ["$\\Delta U = nC_V\\Delta T$", "$Q = nC_V\\Delta T$", "$W = p\\,\\Delta V$", "$Q = nC_P\\Delta T$"],
      explanation: "Indre energi i en ideell gass avhenger bare av temperaturen, så $\\Delta U=nC_V\\Delta T$ gjelder for ALLE prosesser — også isobare og adiabatiske. $Q=nC_V\\Delta T$ gjelder bare isokort, $Q=nC_P\\Delta T$ bare isobart, og $W=p\\Delta V$ bare når trykket er konstant. At $C_V$ dukker opp i den generelle relasjonen selv om volumet endrer seg, er det som forvirrer — men $C_V$ er her bare et mål på hvor mye indre energi som ligger i hver grad.",
    },
    {
      question: "Hva er det raskeste grepet for å avgjøre om en syklus i et $pV$-diagram er en maskin eller en pumpe?",
      options: ["Les omløpsretningen: medklokke er maskin, motklokke er pumpe", "Regn ut arealet inne i sløyfa og se om det er større enn arealet under den øvre kurven", "Sjekk om den høyeste temperaturen ligger i øvre venstre eller nedre høyre hjørne av sløyfa", "Finn ut om summen av varmene er positiv eller negativ ved å regne hvert trinn"],
      explanation: "Med volum langs den vannrette aksen og trykk langs den loddrette gir medklokke $W_\\text{netto}>0$ (maskin) og motklokke $W_\\text{netto}<0$ (pumpe). Det tar to sekunder og stryker halvparten av alternativene. Å regne varmene trinn for trinn gir riktig svar, men er den lange veien — og hele poenget med grepet er at du kan gjøre det FØR du regner. Arealsammenligningen og hjørneplasseringen avgjør ikke retningen.",
    },
  ],
  'tfy4115-9-1': [
    {
      question: "Et sjikt er $180{,}0\\,\\text{mm}$ tykt og har $\\kappa=0{,}038\\,\\text{W/(m}\\cdot\\text{K)}$. Hva er den termiske motstanden per kvadratmeter?",
      options: ["$4{,}7368\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$", "$4736{,}8\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$", "$0{,}21\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$", "$0{,}006840\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$"],
      explanation: "$R=\\ell/\\kappa=0{,}1800/0{,}038=4{,}7368\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$, med tykkelsen i METER. Alternativet $4736{,}8$ har brukt tykkelsen i millimeter og er en faktor 1000 for stort. Alternativet $0{,}21$ er brøken snudd, altså U-verdien for sjiktet. Alternativet $0{,}006840$ har multiplisert i stedet for å dividere.",
    },
    {
      question: "Et sjikt er $12{,}5\\,\\text{mm}$ tykt og har $\\kappa=0{,}220\\,\\text{W/(m}\\cdot\\text{K)}$. Hva er den termiske motstanden per kvadratmeter?",
      options: ["$0{,}0568\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$", "$56{,}8\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$", "$17{,}60\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$", "$0{,}002750\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$"],
      explanation: "$R=\\ell/\\kappa=0{,}0125/0{,}220=0{,}0568\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$, med tykkelsen i METER. Alternativet $56{,}8$ har brukt tykkelsen i millimeter og er en faktor 1000 for stort. Alternativet $17{,}60$ er brøken snudd, altså U-verdien for sjiktet. Alternativet $0{,}002750$ har multiplisert i stedet for å dividere.",
    },
    {
      question: "Et sjikt er $100{,}0\\,\\text{mm}$ tykt og har $\\kappa=0{,}045\\,\\text{W/(m}\\cdot\\text{K)}$. Hva er den termiske motstanden per kvadratmeter?",
      options: ["$2{,}2222\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$", "$2222{,}2\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$", "$0{,}45\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$", "$0{,}004500\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$"],
      explanation: "$R=\\ell/\\kappa=0{,}1000/0{,}045=2{,}2222\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$, med tykkelsen i METER. Alternativet $2222{,}2$ har brukt tykkelsen i millimeter og er en faktor 1000 for stort. Alternativet $0{,}45$ er brøken snudd, altså U-verdien for sjiktet. Alternativet $0{,}004500$ har multiplisert i stedet for å dividere.",
    },
    {
      question: "Et luftsjikt inntil en vegg har varmeovergangskoeffisient $h=8{,}00\\,\\text{W/(m}^2\\cdot\\text{K)}$. Hva er den termiske motstanden per kvadratmeter?",
      options: ["$0{,}1250\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$", "$8{,}00\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$", "$0{,}080\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$", "$0{,}00125\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$"],
      explanation: "$R=1/h=1/8{,}00=0{,}1250\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$. Merk at det ikke finnes noen TYKKELSE i uttrykket — luftsjiktet har ingen veldefinert tykkelse. Alternativet lik $h$ selv har glemt å invertere. Alternativene $0{,}080$ og $0{,}00125$ har ganget eller delt med en antatt tykkelse på 10 millimeter, altså brukt formen $\\ell/\\kappa$ på en varmeovergang — det er den vanligste feilen her.",
    },
    {
      question: "En vegg har $13{,}0\\,\\text{mm}$ med $\\kappa=0{,}220$ og $200\\,\\text{mm}$ med $\\kappa=0{,}037\\,\\text{W/(m}\\cdot\\text{K)}$. Hva er U-verdien?",
      options: ["$0{,}1830\\,\\text{W/(m}^2\\cdot\\text{K)}$", "$5{,}4645\\,\\text{W/(m}^2\\cdot\\text{K)}$", "$0{,}1850\\,\\text{W/(m}^2\\cdot\\text{K)}$", "$17{,}11\\,\\text{W/(m}^2\\cdot\\text{K)}$"],
      explanation: "$R=0{,}05909+5{,}4054=5{,}4645$ og $U=1/R=0{,}1830\\,\\text{W/(m}^2\\cdot\\text{K)}$. Alternativet $5{,}4645$ er MOTSTANDEN, ikke U-verdien — de har ulik enhet og forveksles ofte. Alternativet $0{,}1850$ har glemt det tynne sjiktet helt. Alternativet $17{,}11$ har lagt sammen $\\kappa/\\ell$ for hvert sjikt, altså brukt parallellformelen på sjikt som ligger i serie.",
    },
    {
      question: "En vegg har $25{,}0\\,\\text{mm}$ med $\\kappa=0{,}130$ og $150\\,\\text{mm}$ med $\\kappa=0{,}045\\,\\text{W/(m}\\cdot\\text{K)}$. Hva er U-verdien?",
      options: ["$0{,}2836\\,\\text{W/(m}^2\\cdot\\text{K)}$", "$3{,}5256\\,\\text{W/(m}^2\\cdot\\text{K)}$", "$0{,}3000\\,\\text{W/(m}^2\\cdot\\text{K)}$", "$5{,}50\\,\\text{W/(m}^2\\cdot\\text{K)}$"],
      explanation: "$R=0{,}19231+3{,}3333=3{,}5256$ og $U=1/R=0{,}2836\\,\\text{W/(m}^2\\cdot\\text{K)}$. Alternativet $3{,}5256$ er MOTSTANDEN, ikke U-verdien — de har ulik enhet og forveksles ofte. Alternativet $0{,}3000$ har glemt det tynne sjiktet helt. Alternativet $5{,}50$ har lagt sammen $\\kappa/\\ell$ for hvert sjikt, altså brukt parallellformelen på sjikt som ligger i serie.",
    },
    {
      question: "En vegg har samlet motstand $4{,}80\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$, med $21{,}0\\,^\\circ\\text{C}$ inne og $-6{,}0\\,^\\circ\\text{C}$ ute. Hva er varmefluksen?",
      options: ["$5{,}6250\\,\\text{W/m}^2$", "$129{,}60\\,\\text{W/m}^2$", "$3{,}1250\\,\\text{W/m}^2$", "$61{,}28\\,\\text{W/m}^2$"],
      explanation: "$j=\\Delta T/R=27{,}0/4{,}80=5{,}6250\\,\\text{W/m}^2$, der $\\Delta T=21{,}0-(-6{,}0)=27{,}0\\,\\text{K}$. Alternativet $129{,}60$ har multiplisert med motstanden i stedet for å dividere. Alternativet $3{,}1250$ har brukt $21{,}0-6{,}0=15{,}0$, altså addert i stedet for å subtrahere den negative utetemperaturen. Alternativet $61{,}28$ har brukt den absolutte innetemperaturen i stedet for differansen — her er det bare DIFFERANSEN som inngår, og den er den samme i celsius og kelvin.",
    },
    {
      question: "En vegg på $18{,}0\\,\\text{m}^2$ har varmefluks $6{,}20\\,\\text{W/m}^2$. Hvilket effekttap gir det?",
      options: ["$111{,}6\\,\\text{W}$", "$6{,}20\\,\\text{W}$", "$0{,}3444\\,\\text{W}$", "$2{,}903\\,\\text{W}$"],
      explanation: "$P=jA=6{,}20\\cdot18{,}0=111{,}6\\,\\text{W}$. Alternativet lik fluksen selv har ikke ganget med arealet — forvekslingen mellom fluks i watt per kvadratmeter og effekt i watt er en av de hyppigste her, og oppgaven skiller dem med ordene «per kvadratmeter». Alternativene $0{,}3444$ og $2{,}903$ har dividert i stedet for å multiplisere.",
    },
    {
      question: "En vegg har $R_1=0{,}060$ og $R_2=4{,}20\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$, med $22{,}0\\,^\\circ\\text{C}$ inne og $-8{,}0\\,^\\circ\\text{C}$ ute. Hva er temperaturen i grenseflaten?",
      options: ["$21{,}577\\,^\\circ\\text{C}$", "$-7{,}577\\,^\\circ\\text{C}$", "$7{,}0\\,^\\circ\\text{C}$", "$20{,}200\\,^\\circ\\text{C}$"],
      explanation: "$j=\\Delta T/R=30{,}0/4{,}260=7{,}0423\\,\\text{W/m}^2$, og temperaturfallet over sjikt 1 er $jR_1=0{,}4225\\,\\text{K}$, altså $T=22{,}0-0{,}4225=21{,}577\\,^\\circ\\text{C}$. Alternativet $-7{,}577$ har brukt motstanden i det ANDRE sjiktet. Alternativet $7{,}0$ er middelverdien av inne og ute, som bare ville vært riktig hvis de to motstandene var like. Alternativet $20{,}200$ har multiplisert med hele temperaturdifferansen i stedet for med fluksen.",
    },
    {
      question: "I en vegg med gips og mineralull, hvor faller temperaturen brattest?",
      options: ["I mineralullen, fordi den har størst termisk motstand per tykkelse", "I gipsen, fordi den er tynnest og temperaturen derfor må endre seg raskest der", "Like bratt i begge, siden den samme varmestrømmen går gjennom dem", "I mineralullen, fordi varmestrømmen er mindre der enn i gipsen"],
      explanation: "Fouriers lov gir $\\Delta T/\\ell = j/\\kappa$: fluksen $j$ er den samme i begge sjikt, så gradienten er omvendt proporsjonal med $\\kappa$. Mineralull har mye lavere $\\kappa$ enn gips og får derfor mye brattere gradient. Svaret om at tynnest gir brattest er nær sant i den forstand at et tynt sjikt har liten TOTAL temperaturendring — men gradienten avhenger av $\\kappa$, ikke av tykkelsen. Svaret om lik gradient forveksler lik FLUKS med lik gradient, og svaret om ulik varmestrøm bryter med at tilstanden er stasjonær.",
    },
    {
      question: "En yttervegg på $14\\,\\text{m}^2$ med $U=0{,}20$ har et vindu på $2{,}0\\,\\text{m}^2$ med $U=1{,}20\\,\\text{W/(m}^2\\cdot\\text{K)}$. Hvordan finner du samlet varmetap?",
      options: ["Legg sammen $UA$-produktene og gang med $\\Delta T$", "Legg sammen de termiske motstandene og del $\\Delta T$ på summen", "Bruk arealveid gjennomsnitt av de to U-verdiene og gang med totalarealet", "Bruk den største av de to U-verdiene på hele arealet, siden varmen tar den letteste veien"],
      explanation: "Vegg og vindu er PARALLELLE veier med samme $\\Delta T$ over seg, så effektene legges sammen: $P=(U_1A_1+U_2A_2)\\Delta T$. Å legge sammen motstandene er serieregning, og gir et varmetap som er lavere enn veggen alene — fysisk umulig. Det arealveide gjennomsnittet gir faktisk samme svar som fasiten, men bare fordi det ER $UA$-summen delt på arealet; formuleringen skjuler regnereglen og feiler så snart $\\Delta T$ er ulik. Å bruke bare den største U-verdien overdriver tapet, siden varmen tar begge veier samtidig.",
    },
    {
      question: "Et $20{,}0\\,\\text{mm}$ tykt sjikt har termisk motstand $0{,}160\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$. Hva er varmeledningsevnen?",
      options: ["$0{,}1250\\,\\text{W/(m}\\cdot\\text{K)}$", "$8{,}00\\,\\text{W/(m}\\cdot\\text{K)}$", "$0{,}00320\\,\\text{W/(m}\\cdot\\text{K)}$", "$125{,}0\\,\\text{W/(m}\\cdot\\text{K)}$"],
      explanation: "Snu $R=\\ell/\\kappa$: $\\kappa=\\ell/R=0{,}020/0{,}160=0{,}1250\\,\\text{W/(m}\\cdot\\text{K)}$. Enhetskontroll: meter delt på $\\text{K}\\cdot\\text{m}^2/\\text{W}$ gir $\\text{W/(m}\\cdot\\text{K)}$ ✔. Alternativet $8{,}00$ er brøken snudd. Alternativet $0{,}00320$ har multiplisert. Alternativet $125{,}0$ har brukt tykkelsen i millimeter.",
    },
    {
      question: "En vegg skal ha $U=0{,}200\\,\\text{W/(m}^2\\cdot\\text{K)}$. Alt annet enn isolasjonen gir $0{,}250\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$. Hvor tykk isolasjon med $\\kappa=0{,}038$ trengs?",
      options: ["$180{,}5\\,\\text{mm}$", "$8{,}000\\,\\text{mm}$", "$190{,}0\\,\\text{mm}$", "$199{,}5\\,\\text{mm}$"],
      explanation: "$R_\\text{mål}=1/0{,}200=5{,}000$, minus $0{,}250$ gir $4{,}7500$ til isolasjonen, og $\\ell=\\kappa R=0{,}038\\cdot4{,}7500=0{,}18050\\,\\text{m}=180{,}5\\,\\text{mm}$. Alternativet $8{,}000\\,\\text{mm}$ har DELT $\\kappa$ på motstanden. Alternativet $190{,}0\\,\\text{mm}$ har glemt å trekke fra det som alt er dekket. Alternativet $199{,}5\\,\\text{mm}$ har LAGT TIL i stedet for å trekke fra.",
    },
    {
      question: "Hvorfor er det trygt å bruke celsius i varmeledningsoppgaver, når resten av termofysikken krever kelvin?",
      options: ["Fordi bare temperaturdifferanser inngår, og en differanse er det samme tallet i begge skalaer", "Fordi varmeledning er en lineær prosess, og lineære formler er uavhengige av hvilket nullpunkt man velger", "Fordi Fouriers lov er definert med celsius i den opprinnelige formuleringen fra 1822", "Fordi temperaturene i bygningsfysikk alltid ligger nær null grader, der de to skalaene er nesten like"],
      explanation: "Kelvin og celsius har samme gradstørrelse, så $\\Delta T$ er identisk i begge: $21\\,^\\circ\\text{C} - (-8\\,^\\circ\\text{C}) = 29\\,\\text{K}$. Fouriers lov og motstandsformlene inneholder bare differanser. Svaret om linearitet peker i riktig retning men er upresist: det avgjørende er at ingen ABSOLUTT temperatur inngår — i strålingsloven $\\sigma T^4$ er uttrykket ikke-lineært OG absolutt, og der er celsius katastrofalt. Svarene om Fouriers opprinnelige formulering og om at temperaturene ligger nær null, er rene feil.",
    },
    {
      question: "Hva er en kuldebro, sett med varmeledningsformlene?",
      options: ["Et felt som ligger i parallell med resten og har mye lavere termisk motstand, og som derfor tar en stor del av varmestrømmen", "Et sjikt i serie som er tynnere enn de andre, og som derfor gir et bratt temperaturfall i konstruksjonen", "En luftlekkasje der varm luft strømmer ut gjennom en sprekk i konstruksjonen", "Et sted der utetemperaturen er lavere enn ellers, for eksempel på en vindutsatt vegg"],
      explanation: "En stålbjelke eller et betongdekke gjennom isolasjonen er et PARALLELT felt med mye lavere motstand — akkurat som vinduet i en vegg — og tar derfor en uforholdsmessig stor del av varmestrømmen. Svaret om et tynt sjikt i serie er en annen mekanisme: et tynt sjikt gir liten total motstand, men tvinger ikke varmen til å velge en annen vei. Luftlekkasje er en reell varmetapsmekanisme, men konveksjon, ikke ledning. Ulik utetemperatur er ikke det begrepet beskriver.",
    },
    {
      question: "Hvorfor er den utvendige varmeovergangskoeffisienten typisk større enn den innvendige?",
      options: ["Fordi vind rører luften ute og bryter opp det stillestående grensesjiktet, slik at varmen lettere kommer over", "Fordi uteluften er kaldere og derfor tettere, og tett luft leder varme bedre enn tynn luft", "Fordi den utvendige overflaten er større enn den innvendige når veggen har tykkelse", "Fordi stråling ute bidrar i tillegg til ledning, og strålingen regnes inn i den utvendige koeffisienten"],
      explanation: "Stor $h$ betyr at varmen lett kommer over mellom luft og flate, og det avhenger av hvor mye luften beveger seg. Vind gir tynnere grensesjikt og dermed større $h$: typisk $25\\,\\text{W/(m}^2\\cdot\\text{K)}$ ute mot $8\\,\\text{W/(m}^2\\cdot\\text{K)}$ inne. Merk konsekvensen: stor $h$ gir LITEN motstand $1/h$. Svaret om stråling er nær sant — i praktiske tabellverdier er strålingsbidraget innbakt i begge koeffisientene — men det forklarer ikke forskjellen mellom ute og inne. Svarene om luftens tetthet og om ulikt overflateareal er feil.",
    },
    {
      question: "En vegg har $R = 5{,}00\\ \\text{K}\\cdot\\text{m}^2/\\text{W}$. Hva er U-verdien, og hvilken av de to er «best» når den er høy?",
      options: ["$U = 0{,}200\\,\\text{W/(m}^2\\cdot\\text{K)}$, og høy $R$ er bra mens høy $U$ er dårlig", "$U = 5{,}00\\,\\text{W/(m}^2\\cdot\\text{K)}$, og høy verdi er bra for begge siden de måler det samme", "$U = 0{,}200\\,\\text{W/(m}^2\\cdot\\text{K)}$, og høy $U$ er bra fordi den måler isolasjonsevnen", "$U = 0{,}500\\,\\text{W/(m}^2\\cdot\\text{K)}$, og høy $R$ er bra mens høy $U$ er dårlig"],
      explanation: "$U = 1/R = 1/5{,}00 = 0{,}200\\,\\text{W/(m}^2\\cdot\\text{K)}$. De to er inverse: $R$ måler hvor godt veggen STOPPER varmen (høy er bra), $U$ hvor godt den SLIPPER GJENNOM (lav er bra). Svaret som gir $U = 5{,}00$ har glemt å invertere. Svaret som gir $0{,}500$ har delt på 10 et sted. Og svaret som kaller høy $U$ bra, snur betydningen — en vegg med $U = 5$ er et enkeltglassvindu.",
    },
    {
      question: "En vegg taper $140\\,\\text{W}$. Hvor mye energi er det per døgn, i kilowattimer?",
      options: ["$3{,}360\\,\\text{kWh}$", "$12096\\,\\text{kWh}$", "$3360\\,\\text{kWh}$", "$5{,}833\\,\\text{kWh}$"],
      explanation: "$E=P\\Delta t=140\\,\\text{W}\\cdot24\\,\\text{h}=3360\\,\\text{Wh}=3{,}360\\,\\text{kWh}$. Alternativet $12096$ har regnet i sekunder og deretter delt på 1000, altså blandet joule og wattimer. Alternativet $3360$ er svaret i wattimer, oppgitt med enheten kilowattimer. Alternativet $5{,}833$ har delt på 24 i stedet for å gange.",
    },
    {
      question: "Hva betyr det at varmeledningen er stasjonær?",
      options: ["Temperaturene er konstante i tid, og like mye varme går inn i hvert sjikt som ut av det", "Temperaturen er den samme overalt i veggen, slik at det ikke er noen gradient", "Varmestrømmen er null, slik at veggen er i termisk likevekt med omgivelsene", "Materialene står i ro, i motsetning til konveksjon der mediet beveger seg"],
      explanation: "Stasjonær betyr at ingen energi hoper seg opp: temperaturprofilen ligger fast, og fluksen er den samme gjennom alle sjikt. Det er nettopp denne betingelsen som gjør at motstandene kan legges i serie. Svaret om lik temperatur overalt er termisk likevekt, ikke stasjonær strøm — da ville det ikke gått varme gjennom veggen. Svaret om null varmestrøm er samme misforståelse. Svaret om at materialene står i ro beskriver ledning mot konveksjon, som er en annen distinksjon.",
    },
    {
      question: "Gipsplata i en yttervegg bidrar med om lag én prosent av den termiske motstanden. Hvorfor legges den likevel inn?",
      options: ["Blant annet fordi den hever overflatetemperaturen inne og dermed avstanden til duggpunktet", "Fordi én prosent lavere varmetap er en betydelig innsparing over et helt hus og et helt år", "Fordi den termiske motstanden må være et helt antall standardsjikt for at U-verdien skal kunne beregnes", "Fordi gips har høyere varmekapasitet enn mineralull og derfor lagrer varme gjennom natten"],
      explanation: "Gipsen er der for mekanisk styrke, brannmotstand, lufttetthet og overflate — og bygningsfysisk fordi den, sammen med den innvendige filmmotstanden, avgjør hvor varm overflaten inne blir. Overflatetemperaturen bestemmer om det blir kondens og mugg, og den avhenger ikke bare av U-verdien. Svaret om én prosent innsparing er reelt men marginalt, og ville ikke rettferdiggjort kostnaden alene. Svaret om varmelagring er ikke helt galt fysisk, men irrelevant i en stasjonær betraktning, og gips lagrer lite. Det tredje svaret er oppdiktet.",
    },
    {
      question: "Hvordan er varmefluksen gjennom de ulike sjiktene i en stasjonær vegg?",
      options: ["Den er den samme gjennom alle sjikt", "Den er størst i det sjiktet som leder best, siden varmen går lettest der", "Den avtar utover, fordi noe varme lagres i hvert sjikt underveis", "Den er proporsjonal med hvert sjikts termiske motstand"],
      explanation: "Stasjonært må like mye varme gå inn i hvert sjikt som ut av det — ellers ville energi hopet seg opp og temperaturen endret seg. Derfor er fluksen felles, og det er hele grunnlaget for serieregningen. Svaret om at fluksen er størst i den beste lederen forveksler fluks med gradient: det er GRADIENTEN som er minst i den beste lederen. Svaret om at fluksen avtar utover, beskriver en ikke-stasjonær situasjon. Og fluksen er ikke proporsjonal med motstanden — det er temperaturfallet som er det.",
    },
    {
      question: "Hva er den beste kontrollen på at en grenseflatetemperatur er riktig regnet?",
      options: ["Regn den samme temperaturen fra motsatt side av veggen og se at du får samme svar", "Sjekk at den ligger nærmere innetemperaturen enn utetemperaturen", "Sjekk at den er lik gjennomsnittet av inne- og utetemperaturen", "Sjekk at temperaturfallet over hvert sjikt er like stort"],
      explanation: "Regner du ytterflatetemperaturen både som $T_i - j(R_{f,i}+R_1+R_2)$ og som $T_u + jR_{f,u}$, må du få samme svar — og gjør du ikke det, sitter feilen i en av motstandene eller i fluksen. Svaret om nærmere innetemperaturen er nær sant i mange vegger (der isolasjonen ligger ytterst), men ikke generelt. Gjennomsnittet er bare riktig når motstandene på hver side er like store, og like store temperaturfall krever like store motstander — ingen av dem er generelle kontroller.",
    },
  ],
  'tfy4115-9-2': [
    {
      question: "En flate med areal $1{,}000\\,\\text{m}^2$, emissivitet $0{,}95$ og temperatur $400\\,\\text{K}$ stråler i vakuum. Hvor stor er den utstrålte effekten?",
      options: ["$1378{,}9\\,\\text{W}$", "$13{,}95\\,\\text{W}$", "$0{,}0086\\,\\text{W}$", "$1451{,}5\\,\\text{W}$"],
      explanation: "$P=e\\sigma AT^4$ med $T^4=2{,}5600\\cdot10^{10}\\,\\text{K}^4$ gir $1378{,}9\\,\\text{W}$. Alternativet $13{,}95\\,\\text{W}$ har brukt celsius ($126{,}85\\,^\\circ\\text{C}$) i stedet for kelvin — og siden $T^4$ er en absolutt størrelse, blir feilen en faktor $98{,}9$. Alternativet $0{,}0086\\,\\text{W}$ har brukt andre potens. Alternativet $1451{,}5\\,\\text{W}$ har glemt emissiviteten og regnet flaten som svart.",
    },
    {
      question: "En flate med areal $0{,}500\\,\\text{m}^2$, emissivitet $0{,}80$ og temperatur $600\\,\\text{K}$ stråler i vakuum. Hvor stor er den utstrålte effekten?",
      options: ["$2939{,}3\\,\\text{W}$", "$258{,}84\\,\\text{W}$", "$0{,}0082\\,\\text{W}$", "$3674{,}2\\,\\text{W}$"],
      explanation: "$P=e\\sigma AT^4$ med $T^4=12{,}9600\\cdot10^{10}\\,\\text{K}^4$ gir $2939{,}3\\,\\text{W}$. Alternativet $258{,}84\\,\\text{W}$ har brukt celsius ($326{,}85\\,^\\circ\\text{C}$) i stedet for kelvin — og siden $T^4$ er en absolutt størrelse, blir feilen en faktor $11{,}4$. Alternativet $0{,}0082\\,\\text{W}$ har brukt andre potens. Alternativet $3674{,}2\\,\\text{W}$ har glemt emissiviteten og regnet flaten som svart.",
    },
    {
      question: "En flate med areal $2{,}000\\,\\text{m}^2$, emissivitet $0{,}90$ og temperatur $350\\,\\text{K}$ stråler i vakuum. Hvor stor er den utstrålte effekten?",
      options: ["$1531{,}5\\,\\text{W}$", "$3{,}56\\,\\text{W}$", "$0{,}0125\\,\\text{W}$", "$1701{,}7\\,\\text{W}$"],
      explanation: "$P=e\\sigma AT^4$ med $T^4=1{,}5006\\cdot10^{10}\\,\\text{K}^4$ gir $1531{,}5\\,\\text{W}$. Alternativet $3{,}56\\,\\text{W}$ har brukt celsius ($76{,}85\\,^\\circ\\text{C}$) i stedet for kelvin — og siden $T^4$ er en absolutt størrelse, blir feilen en faktor $430{,}2$. Alternativet $0{,}0125\\,\\text{W}$ har brukt andre potens. Alternativet $1701{,}7\\,\\text{W}$ har glemt emissiviteten og regnet flaten som svart.",
    },
    {
      question: "En flate på $1{,}500\\,\\text{m}^2$ med emissivitet $0{,}90$ holder $450\\,\\text{K}$ i omgivelser på $290\\,\\text{K}$. Hva er netto utstrålt effekt?",
      options: ["$2597{,}4\\,\\text{W}$", "$50{,}165\\,\\text{W}$", "$3138{,}8\\,\\text{W}$", "$2886{,}0\\,\\text{W}$"],
      explanation: "$P_\\text{netto}=e\\sigma A(T^4-T_\\text{omg}^4)$ med $T^4-T_\\text{omg}^4=3{,}3933\\cdot10^{10}\\,\\text{K}^4$ gir $2597{,}4\\,\\text{W}$. Alternativet $50{,}165\\,\\text{W}$ bruker $(T-T_\\text{omg})^4$ i stedet for $T^4-T_\\text{omg}^4$ — kapitlets signaturfeil, og den gir her en faktor $52$ for lite. Alternativet $3138{,}8\\,\\text{W}$ er den UTSTRÅLTE effekten uten absorpsjonsleddet. Alternativet $2886{,}0\\,\\text{W}$ har glemt emissiviteten.",
    },
    {
      question: "En flate på $3{,}000\\,\\text{m}^2$ med emissivitet $0{,}75$ holder $380\\,\\text{K}$ i omgivelser på $295\\,\\text{K}$. Hva er netto utstrålt effekt?",
      options: ["$1693{,}9\\,\\text{W}$", "$6{,}659\\,\\text{W}$", "$2660{,}1\\,\\text{W}$", "$2258{,}6\\,\\text{W}$"],
      explanation: "$P_\\text{netto}=e\\sigma A(T^4-T_\\text{omg}^4)$ med $T^4-T_\\text{omg}^4=1{,}3278\\cdot10^{10}\\,\\text{K}^4$ gir $1693{,}9\\,\\text{W}$. Alternativet $6{,}659\\,\\text{W}$ bruker $(T-T_\\text{omg})^4$ i stedet for $T^4-T_\\text{omg}^4$ — kapitlets signaturfeil, og den gir her en faktor $254$ for lite. Alternativet $2660{,}1\\,\\text{W}$ er den UTSTRÅLTE effekten uten absorpsjonsleddet. Alternativet $2258{,}6\\,\\text{W}$ har glemt emissiviteten.",
    },
    {
      question: "Hvor mange ganger mer stråler en flate hvis den absolutte temperaturen dobles?",
      options: ["16 ganger", "4 ganger", "2 ganger", "8 ganger"],
      explanation: "Stefan–Boltzmanns lov gir $P \\propto T^4$, så en dobling gir $2^4 = 16$ ganger. Alternativet 4 ganger svarer til andre potens, alternativet 8 til tredje, og alternativet 2 til første — alle tre er potenser som IKKE står i loven. Merk at dette bare gjelder for ABSOLUTT temperatur: å doble en celsiustemperatur fra $100$ til $200\\,^\\circ\\text{C}$ øker utstrålingen bare $2{,}44$ ganger.",
    },
    {
      question: "En tynn svart plate henger i vakuum mellom to store svarte plater på $500\\,\\text{K}$ og $300\\,\\text{K}$. Hva er platens stasjonære temperatur?",
      options: ["$433{,}5\\,\\text{K}$", "$400{,}0\\,\\text{K}$", "$387{,}3\\,\\text{K}$", "$187882{,}9\\,\\text{K}$"],
      explanation: "Stasjonaritet gir $\\sigma(T_1^4-T_2^4)=\\sigma(T_2^4-T_3^4)$, altså $T_2=((T_1^4+T_3^4)/2)^{1/4}=433{,}45\\,\\text{K}$. Alternativet $400{,}0\\,\\text{K}$ er det aritmetiske snittet av TEMPERATURENE — det er fjerdepotensene som skal midles, og snittet er derfor systematisk for lavt. Alternativet $387{,}3\\,\\text{K}$ er det geometriske snittet. Alternativet $187882{,}9\\,\\text{K}$ har tatt kvadratrota i stedet for fjerderota av det midlede fjerdepotens-uttrykket.",
    },
    {
      question: "En tynn svart plate henger i vakuum mellom to store svarte plater på $800\\,\\text{K}$ og $400\\,\\text{K}$. Hva er platens stasjonære temperatur?",
      options: ["$683{,}0\\,\\text{K}$", "$600{,}0\\,\\text{K}$", "$565{,}7\\,\\text{K}$", "$466476{,}2\\,\\text{K}$"],
      explanation: "Stasjonaritet gir $\\sigma(T_1^4-T_2^4)=\\sigma(T_2^4-T_3^4)$, altså $T_2=((T_1^4+T_3^4)/2)^{1/4}=682{,}99\\,\\text{K}$. Alternativet $600{,}0\\,\\text{K}$ er det aritmetiske snittet av TEMPERATURENE — det er fjerdepotensene som skal midles, og snittet er derfor systematisk for lavt. Alternativet $565{,}7\\,\\text{K}$ er det geometriske snittet. Alternativet $466476{,}2\\,\\text{K}$ har tatt kvadratrota i stedet for fjerderota av det midlede fjerdepotens-uttrykket.",
    },
    {
      question: "Hvor ligger en midtplates stasjonære temperatur i forhold til det aritmetiske snittet av de to reservoarene?",
      options: ["Over snittet, fordi fjerdepotensen vekter den varme siden tyngre", "Under snittet, fordi den kalde platen absorberer mer enn den utstråler", "Nøyaktig på snittet, siden platen mottar like mye fra hver side", "Over snittet, men bare når emissiviteten på midtplaten er større enn på reservoarene"],
      explanation: "$T_2 = ((T_1^4+T_3^4)/2)^{1/4}$ er alltid større enn $(T_1+T_3)/2$ når $T_1 \\neq T_3$ — det følger av at fjerde potens er en konveks funksjon. Fysisk: den varme platen stråler $(T_1/T_3)^4$ ganger så mye, og midtplaten trekkes derfor nær den. Svaret om at platen mottar like mye fra hver side, blander netto med brutto: nettoene er like, men bruttostrømmene er svært ulike. Emissiviteten faller ut av likningen når alle flatene har samme verdi.",
    },
    {
      question: "Ved hvilken bølgelengde stråler en flate på $3000\\,\\text{K}$ mest?",
      options: ["$0{,}9660\\,\\mu\\text{m}$", "$1{,}0352\\,\\mu\\text{m}$", "$966{,}0\\,\\mu\\text{m}$", "$1{,}0628\\,\\mu\\text{m}$"],
      explanation: "Wiens forskyvningslov gir $\\lambda_\\text{maks}=b/T=2{,}898\\cdot10^{-3}/3000=0{,}9660\\,\\mu\\text{m}$. Alternativet $1{,}0352\\,\\mu\\text{m}$ har snudd brøken. Alternativet $966{,}0\\,\\mu\\text{m}$ har forvekslet millimeter og mikrometer i konstanten. Alternativet $1{,}0628\\,\\mu\\text{m}$ har brukt celsius i nevneren, og Wiens lov krever absolutt temperatur.",
    },
    {
      question: "Ved hvilken bølgelengde stråler en flate på $310\\,\\text{K}$ mest?",
      options: ["$9{,}3484\\,\\mu\\text{m}$", "$0{,}1070\\,\\mu\\text{m}$", "$9348{,}4\\,\\mu\\text{m}$", "$78{,}6431\\,\\mu\\text{m}$"],
      explanation: "Wiens forskyvningslov gir $\\lambda_\\text{maks}=b/T=2{,}898\\cdot10^{-3}/310=9{,}3484\\,\\mu\\text{m}$. Alternativet $0{,}1070\\,\\mu\\text{m}$ har snudd brøken. Alternativet $9348{,}4\\,\\mu\\text{m}$ har forvekslet millimeter og mikrometer i konstanten. Alternativet $78{,}6431\\,\\mu\\text{m}$ har brukt celsius i nevneren, og Wiens lov krever absolutt temperatur.",
    },
    {
      question: "En flate stråler mest ved $4{,}20\\,\\mu\\text{m}$. Hvilken temperatur har den?",
      options: ["$690{,}0\\,\\text{K}$", "$0{,}001449\\,\\text{K}$", "$416{,}9\\,\\text{K}$", "$0{,}6900\\,\\text{K}$"],
      explanation: "Snu Wiens lov: $T=b/\\lambda_\\text{maks}=2{,}898\\cdot10^{-3}/(4{,}20\\cdot10^{-6})=690{,}0\\,\\text{K}$. Alternativet $0{,}001449\\,\\text{K}$ har snudd brøken. Alternativet $416{,}9\\,\\text{K}$ er svaret i celsius, oppgitt med enheten kelvin. Alternativet $0{,}6900\\,\\text{K}$ har feil tierpotens i bølgelengden.",
    },
    {
      question: "Hva skjer med bølgelengden der utstrålingen er størst, når temperaturen øker?",
      options: ["Den blir kortere, siden $T$ står i nevneren i Wiens lov", "Den blir lengre, siden en varmere flate stråler mer og dermed bredere", "Den er uendret, siden bølgelengden bestemmes av materialet og ikke av temperaturen", "Den blir kortere, men bare over rundt $1000\\,\\text{K}$, der utstrålingen når det synlige området"],
      explanation: "$\\lambda_\\text{maks} = b/T$ har $T$ i nevneren, så høyere temperatur gir kortere bølgelengde — toppen forskyves mot blått. Hverdagsbekreftelsen: en glødende gjenstand går fra mørkerød gjennom oransje til hvit og blåhvit når den varmes. Svaret om lengre bølgelengde snur loven. Svaret om at bølgelengden er materialbestemt, forveksler termisk stråling med spektrallinjer. Og forskyvningen gjelder ved alle temperaturer, ikke bare over en grense.",
    },
    {
      question: "Hvorfor står emissiviteten $e$ i begge ledd i uttrykket $P_\\text{netto}=e\\sigma A(T^4-T_\\text{omg}^4)$?",
      options: ["Fordi Kirchhoffs lov gir at flaten absorberer like godt som den utstråler", "Fordi emissiviteten er en materialkonstant og derfor må gjentas i hvert ledd av regnestykket", "Fordi absorpsjonen skjer på samme flate som utstrålingen, og arealet derfor er felles", "Fordi $e$ egentlig hører til omgivelsene, som har samme emissivitet som flaten"],
      explanation: "Kirchhoffs lov sier at absorpsjonsevnen er lik emissiviteten ved samme bølgelengde. Derfor absorberer flaten $e\\sigma AT_\\text{omg}^4$, ikke $\\sigma AT_\\text{omg}^4$, og $e$ kan faktoriseres ut. Hadde en flate absorbert bedre enn den strålte, ville den blitt varmere enn omgivelsene av seg selv, og det bryter andre hovedsetning. Svaret om felles areal er sant men forklarer ikke hvorfor $e$ er med i absorpsjonsleddet. De to andre svarene er feil.",
    },
    {
      question: "Mellom to store svarte plater på $700\\,\\text{K}$ og $350\\,\\text{K}$ settes $3$ tynne svarte skjermer. Hva blir nettofluksen?",
      options: ["$3190{,}7\\,\\text{W/m}^2$", "$4254{,}3\\,\\text{W/m}^2$", "$12762{,}8\\,\\text{W/m}^2$", "$1595{,}4\\,\\text{W/m}^2$"],
      explanation: "$n$ skjermer deler nettofluksen på $n+1$: $j=12762{,}8/4=3190{,}7\\,\\text{W/m}^2$. Alternativet $4254{,}3\\,\\text{W/m}^2$ har delt på $n$ i stedet for $n+1$ — den vanligste feilen her, og den blir katastrofal for én skjerm, der $n=1$ ville gitt ingen reduksjon. Alternativet $12762{,}8\\,\\text{W/m}^2$ er fluksen uten skjermer. Alternativet $1595{,}4\\,\\text{W/m}^2$ har antatt at hver skjerm halverer fluksen, altså $2^n$ — det stemmer for én skjerm men er for optimistisk for flere.",
    },
    {
      question: "En termos har vakuum mellom veggene. Hvilken varmetransport stopper det IKKE?",
      options: ["Stråling, siden elektromagnetiske bølger ikke trenger noe medium", "Ledning, siden varmen kan gå gjennom de gjenværende gassmolekylene i vakuumet", "Konveksjon, siden trykkforskjeller alltid setter i gang strømninger", "Ingen av dem, siden vakuum er en perfekt isolator mot all varmetransport"],
      explanation: "Stråling går som elektromagnetiske bølger og virker i vakuum — det er derfor termosflasker er forsølvet, for å senke emissiviteten fra rundt $0{,}9$ til rundt $0{,}05$. Vakuum stopper effektivt både ledning og konveksjon, siden begge krever et medium. Svaret om at vakuum er perfekt isolator er den utbredte misforståelsen — og i praksis taper en termos mest gjennom LEDNING i korken og glasshalsen, der de to veggene møtes.",
    },
    {
      question: "En svart flate på $1{,}00\\,\\text{m}^2$ holder $500\\,\\text{K}$ i omgivelser på $300\\,\\text{K}$. Hvor mye stråling ABSORBERER den fra omgivelsene?",
      options: ["$459{,}27\\,\\text{W}$", "$3543{,}8\\,\\text{W}$", "$3084{,}5\\,\\text{W}$", "$0{,}00\\,\\text{W}$"],
      explanation: "Absorbert effekt er $\\sigma AT_\\text{omg}^4=459{,}27\\,\\text{W}$ — den avhenger av OMGIVELSENES temperatur, ikke av flatens. Alternativet $3543{,}8\\,\\text{W}$ er den utstrålte effekten. Alternativet $3084{,}5\\,\\text{W}$ er nettotapet. Alternativet null svarer til at en varm flate ikke absorberer noe — men absorpsjonen er uavhengig av om flaten selv er varm eller kald.",
    },
    {
      question: "En svart kule i jordbane mottar $1361\\,\\text{W/m}^2$ solstråling. Hva blir dens stasjonære temperatur?",
      options: ["$278{,}3\\,\\text{K}$", "$393{,}6\\,\\text{K}$", "$331{,}0\\,\\text{K}$", "$60{,}009\\,\\text{K}$"],
      explanation: "Kula fanger over tverrsnittet $\\pi R^2$ og stråler over hele flaten $4\\pi R^2$, så $S\\pi R^2=\\sigma\\cdot4\\pi R^2T^4$ gir $T=(S/(4\\sigma))^{1/4}=278{,}3\\,\\text{K}$ — uavhengig av radius. Alternativet $393{,}6\\,\\text{K}$ har glemt faktoren 4 mellom de to arealene. Alternativet $331{,}0\\,\\text{K}$ har brukt faktoren 2, altså regnet at bare halve kula stråler. Alternativet $60{,}009\\,\\text{K}$ har glemt fjerderota.",
    },
    {
      question: "En hvitmalt og en svartmalt radiator har samme temperatur og areal. Hvilken stråler mest?",
      options: ["Praktisk talt like mye, siden begge malingene har emissivitet rundt $0{,}90$ i det infrarøde", "Den svarte, siden svarte flater per definisjon har emissivitet nær 1 mens hvite har nær 0", "Den hvite, siden hvit maling reflekterer stråling tilbake inn i radiatoren og dermed varmer den mer", "Den svarte, men bare hvis rommet er opplyst, siden emissiviteten avhenger av innkommende lys"],
      explanation: "Emissivitet i strålingssammenheng gjelder det INFRARØDE, og der ser de fleste malinger like «svarte» ut: både hvit og svart maling har $e \\approx 0{,}90$. Fargen i synlig lys sier bare noe om hvordan flaten oppfører seg mot sollys. Svaret om at hvite flater har $e$ nær 0 forveksler synlig refleksjon med infrarød emissivitet — det er BLANKE METALLER som har lav emissivitet ($e \\approx 0{,}05$ for aluminium), ikke hvite malinger.",
    },
    {
      question: "Hva er den fysiske grunnen til at utstrålt effekt går som $T^4$ og ikke som $T$?",
      options: ["Fordi en varmere flate både stråler mer i hver bølgelengde og forskyver spekteret mot kortere, mer energirike bølgelengder", "Fordi arealet av en flate vokser med temperaturen på grunn av termisk utvidelse, og effekten derfor får flere faktorer", "Fordi molekylenes hastighet går som kvadratrota av temperaturen, og effekten er proporsjonal med hastigheten i fjerde", "Fordi strålingen må passere fire ulike frihetsgrader i det elektromagnetiske feltet før den forlater flaten"],
      explanation: "De to effektene multipliseres: intensiteten ved hver bølgelengde vokser, OG toppen flyttes mot kortere bølgelengder der hvert foton bærer mer energi. Integrerer man Plancks lov over alle bølgelengder, kommer $\\sigma T^4$ ut. Svaret om termisk utvidelse er en reell effekt, men altfor liten og uten sammenheng med potensen. Svaret om molekylhastighet blander kinetisk gassteori inn i noe som handler om det elektromagnetiske feltet, og det siste svaret er oppdiktet.",
    },
    {
      question: "En flate på $600\\,\\text{K}$ stråler. Hvor mye galere blir svaret hvis du setter inn $326{,}85$ (celsiusverdien) i stedet?",
      options: ["Om lag 11{,}4 ganger for lite", "Om lag 46 prosent for lite", "Om lag 1{,}84 ganger for lite", "Ingen forskjell, siden $T^4$ bare skalerer resultatet med en konstant"],
      explanation: "$T^4$ er en ABSOLUTT størrelse: $600^4=12{,}9600\\cdot10^{10}$ mot $326{,}85^4=1{,}1413\\cdot10^{10}$, altså en faktor 11{,}36. Alternativet med 46 prosent svarer til den relative forskjellen i selve temperaturen, ikke i fjerdepotensen. Alternativet 1{,}84 er temperaturforholdet i første potens. Og svaret om at det ikke gjør noen forskjell, overser at celsius har vilkårlig nullpunkt — det finnes ingen konstant som retter opp feilen.",
    },
    {
      question: "Hva sier Wiens forskyvningslov IKKE noe om?",
      options: ["Hvor mye energi flaten stråler ut i alt", "Hvor i spekteret utstrålingen har sitt maksimum", "Hvordan maksimumet flytter seg når temperaturen endres", "Hvilken temperatur en flate har, hvis man måler spekteret"],
      explanation: "Wien gir bare POSISJONEN til maksimumet, $\\lambda_\\text{maks}=b/T$. Hvor mye som stråles totalt, er Stefan–Boltzmanns lov $\\sigma T^4$ — de to lovene sier hver sin ting og forveksles ofte. De tre andre alternativene er nettopp hva Wien DA sier: posisjonen, forskyvningen, og (baklengs) temperaturen fra en målt bølgelengde, som er prinsippet bak pyrometri og bak hvordan man måler stjernetemperaturer.",
    },
    {
      question: "Hvilken påstand om emissiviteten $e$ er riktig?",
      options: ["Den ligger mellom 0 og 1, og et svart legeme har $e=1$", "Den kan være større enn 1 for flater som er ekstra gode utstrålere, på samme måte som effektfaktoren", "Den er alltid 1 for alle virkelige flater, og bare idealiserte modellflater har lavere verdi", "Den har enheten $\\text{W/(m}^2\\cdot\\text{K}^4)$, samme som Stefan–Boltzmanns konstant"],
      explanation: "Emissiviteten er dimensjonsløs og ligger mellom 0 og 1 per definisjon: den måler hvor stor brøkdel av et svart legemes utstråling flaten gir. Et svart legeme har $e=1$ og er den best mulige utstråleren. Svaret om at $e$ kan overstige 1, forveksler emissiviteten med effektfaktoren $\\varepsilon$ fra varmepumpekapitlet — den er dimensjonsløs og over 1, men hører i en helt annen formel. Enheten $\\text{W/(m}^2\\cdot\\text{K}^4)$ tilhører $\\sigma$, ikke $e$.",
    },
    {
      question: "Hvorfor halverer én tynn svart plate strålingsvarmestrømmen mellom to reservoarer?",
      options: ["Fordi platen legger seg på en temperatur der $T_1^4-T_2^4$ blir nøyaktig halvparten av $T_1^4-T_3^4$", "Fordi platen reflekterer halvparten av strålingen tilbake mot den varme siden", "Fordi platen absorberer halvparten av energien og lagrer den permanent i seg", "Fordi platen har to sider, og hver side slipper gjennom bare halvparten av strålingen"],
      explanation: "Setter du $2T_2^4=T_1^4+T_3^4$ inn i $T_1^4-T_2^4$, får du eksakt $\\tfrac12(T_1^4-T_3^4)$. Halveringen er altså en konsekvens av balansetemperaturen, ikke av refleksjon. Svaret om refleksjon er galt for en SVART plate, som absorberer alt. Svaret om permanent lagring bryter stasjonaritet — platen har konstant temperatur og lagrer ingenting netto. Og at platen har to sider, er sant men forklarer ikke faktoren.",
    },
  ],
  'tfy4115-9-3': [
    {
      question: "En vegg har $20{,}0\\,\\text{mm}$ med $\\kappa=0{,}160$ og $190\\,\\text{mm}$ med $\\kappa=0{,}036\\,\\text{W/(m}\\cdot\\text{K)}$. Hva er U-verdien?",
      options: ["$0{,}1851\\,\\text{W/(m}^2\\cdot\\text{K)}$", "$5{,}4028\\,\\text{W/(m}^2\\cdot\\text{K)}$", "$0{,}1895\\,\\text{W/(m}^2\\cdot\\text{K)}$", "$0{,}000185\\,\\text{W/(m}^2\\cdot\\text{K)}$"],
      explanation: "$R=0{,}12500+5{,}2778=5{,}4028$ og $U=1/R=0{,}1851$. Alternativet $5{,}4028$ er MOTSTANDEN, ikke U-verdien — de har ulik enhet. Alternativet $0{,}1895$ har glemt det tynne sjiktet. Alternativet $0{,}000185$ har regnet med tykkelsene i millimeter og er en faktor 1000 for lite.",
    },
    {
      question: "En vegg har $12{,}0\\,\\text{mm}$ med $\\kappa=0{,}230$ og $240\\,\\text{mm}$ med $\\kappa=0{,}041\\,\\text{W/(m}\\cdot\\text{K)}$. Hva er U-verdien?",
      options: ["$0{,}1693\\,\\text{W/(m}^2\\cdot\\text{K)}$", "$5{,}9058\\,\\text{W/(m}^2\\cdot\\text{K)}$", "$0{,}1708\\,\\text{W/(m}^2\\cdot\\text{K)}$", "$0{,}000169\\,\\text{W/(m}^2\\cdot\\text{K)}$"],
      explanation: "$R=0{,}05217+5{,}8537=5{,}9058$ og $U=1/R=0{,}1693$. Alternativet $5{,}9058$ er MOTSTANDEN, ikke U-verdien — de har ulik enhet. Alternativet $0{,}1708$ har glemt det tynne sjiktet. Alternativet $0{,}000169$ har regnet med tykkelsene i millimeter og er en faktor 1000 for lite.",
    },
    {
      question: "Et luftsjikt inntil en flate har $h=6{,}00\\,\\text{W/(m}^2\\cdot\\text{K)}$. Hva er den termiske motstanden per kvadratmeter?",
      options: ["$0{,}1667$", "$6{,}00$", "$0{,}1200$", "$0{,}00333$"],
      explanation: "$R=1/h=0{,}1667\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$. Det finnes ingen TYKKELSE i uttrykket. Alternativet lik $h$ selv har glemt å invertere. Alternativene $0{,}1200$ og $0{,}00333$ har ganget eller delt med en antatt tykkelse på 20 millimeter, altså brukt formen $\\ell/\\kappa$ på en varmeovergang — det er den vanligste feilen her.",
    },
    {
      question: "En vegg har $R_1=0{,}080$ og $R_2=3{,}60\\,\\text{K}\\cdot\\text{m}^2/\\text{W}$, med $24{,}0\\,^\\circ\\text{C}$ inne og $-8{,}0\\,^\\circ\\text{C}$ ute. Hva er temperaturen i grenseflaten?",
      options: ["$23{,}304\\,^\\circ\\text{C}$", "$-7{,}304\\,^\\circ\\text{C}$", "$8{,}0\\,^\\circ\\text{C}$", "$21{,}440\\,^\\circ\\text{C}$"],
      explanation: "$j=32{,}0/3{,}680=8{,}6957\\,\\text{W/m}^2$ og fallet over sjikt 1 er $jR_1=0{,}6957\\,\\text{K}$, altså $T=24{,}0-0{,}6957=23{,}304\\,^\\circ\\text{C}$. Alternativet $-7{,}304$ har brukt motstanden i det ANDRE sjiktet. Alternativet $8{,}0$ er middelverdien av inne og ute. Alternativet $21{,}440$ har multiplisert med hele temperaturdifferansen i stedet for med fluksen.",
    },
    {
      question: "En husside har $16{,}0\\,\\text{m}^2$ vegg med $U=0{,}200$ og $4{,}00\\,\\text{m}^2$ vindu med $U=1{,}30\\,\\text{W/(m}^2\\cdot\\text{K)}$, med $\\Delta T=26{,}0\\,\\text{K}$. Hva er det samlede varmetapet?",
      options: ["$218{,}4\\,\\text{W}$", "$51{,}50\\,\\text{W}$", "$83{,}20\\,\\text{W}$", "$780{,}0\\,\\text{W}$"],
      explanation: "Vegg og vindu er PARALLELLE veier, så $P=(U_1A_1+U_2A_2)\\Delta T=(3{,}200+5{,}200)\\cdot26{,}0=218{,}4\\,\\text{W}$. Alternativet $51{,}50\\,\\text{W}$ har lagt motstandene i SERIE, og gir et tap som er lavere enn veggen alene — fysisk umulig. Alternativet $83{,}20\\,\\text{W}$ har glemt vinduet. Alternativet $780{,}0\\,\\text{W}$ har ganget summen av U-verdiene med summen av arealene.",
    },
    {
      question: "En flate på $1{,}20\\,\\text{m}^2$ med emissivitet $0{,}85$ holder $500\\,\\text{K}$ i omgivelser på $300\\,\\text{K}$. Hva er netto utstrålt effekt?",
      options: ["$3146{,}2\\,\\text{W}$", "$92{,}53\\,\\text{W}$", "$3614{,}6\\,\\text{W}$", "$3701{,}4\\,\\text{W}$"],
      explanation: "$P_\\text{netto}=e\\sigma A(T^4-T_\\text{omg}^4)$ med differansen $5{,}4400\\cdot10^{10}\\,\\text{K}^4$ gir $3146{,}2\\,\\text{W}$. Alternativet $92{,}53\\,\\text{W}$ bruker $(T-T_\\text{omg})^4$ — en faktor $34$ for lite, og sjangerens grovste feil. Alternativet $3614{,}6\\,\\text{W}$ er den UTSTRÅLTE effekten uten absorpsjonsleddet. Alternativet $3701{,}4\\,\\text{W}$ har glemt emissiviteten.",
    },
    {
      question: "En flate på $2{,}50\\,\\text{m}^2$ med emissivitet $0{,}70$ holder $600\\,\\text{K}$ i omgivelser på $320\\,\\text{K}$. Hva er netto utstrålt effekt?",
      options: ["$11819{,}1\\,\\text{W}$", "$609{,}89\\,\\text{W}$", "$12859{,}6\\,\\text{W}$", "$16884{,}4\\,\\text{W}$"],
      explanation: "$P_\\text{netto}=e\\sigma A(T^4-T_\\text{omg}^4)$ med differansen $11{,}9114\\cdot10^{10}\\,\\text{K}^4$ gir $11819{,}1\\,\\text{W}$. Alternativet $609{,}89\\,\\text{W}$ bruker $(T-T_\\text{omg})^4$ — en faktor $19$ for lite, og sjangerens grovste feil. Alternativet $12859{,}6\\,\\text{W}$ er den UTSTRÅLTE effekten uten absorpsjonsleddet. Alternativet $16884{,}4\\,\\text{W}$ har glemt emissiviteten.",
    },
    {
      question: "En tynn svart plate henger i vakuum mellom to store svarte plater på $700\\,\\text{K}$ og $350\\,\\text{K}$. Hva er platens temperatur?",
      options: ["$597{,}6\\,\\text{K}$", "$525{,}0\\,\\text{K}$", "$495{,}0\\,\\text{K}$", "$357145{,}8\\,\\text{K}$"],
      explanation: "$T_2=((T_1^4+T_3^4)/2)^{1/4}=597{,}62\\,\\text{K}$. Alternativet $525{,}0\\,\\text{K}$ er det aritmetiske snittet av TEMPERATURENE — det er fjerdepotensene som midles, og snittet er systematisk for lavt. Alternativet $495{,}0\\,\\text{K}$ er det geometriske snittet. Alternativet $357145{,}8\\,\\text{K}$ har tatt kvadratrota i stedet for fjerderota.",
    },
    {
      question: "Mellom to store svarte plater på $900\\,\\text{K}$ og $350\\,\\text{K}$ settes $5$ tynne svarte skjermer. Hva blir nettofluksen?",
      options: ["$6058{,}3\\,\\text{W/m}^2$", "$7270{,}0\\,\\text{W/m}^2$", "$1135{,}9\\,\\text{W/m}^2$", "$36350{,}0\\,\\text{W/m}^2$"],
      explanation: "$n$ skjermer deler fluksen på $n+1$: $j=36350{,}0/6=6058{,}3\\,\\text{W/m}^2$. Alternativet $7270{,}0\\,\\text{W/m}^2$ har delt på $n$ — det ville betydd at én skjerm ikke reduserer noe. Alternativet $1135{,}9\\,\\text{W/m}^2$ har antatt at hver skjerm halverer fluksen, altså $2^n$. Alternativet $36350{,}0\\,\\text{W/m}^2$ er fluksen uten skjermer.",
    },
    {
      question: "Ved hvilken bølgelengde stråler en flate på $1800\\,\\text{K}$ mest?",
      options: ["$1{,}6100\\,\\mu\\text{m}$", "$1{,}8980\\,\\mu\\text{m}$", "$0{,}6211\\,\\mu\\text{m}$", "$1610{,}0\\,\\mu\\text{m}$"],
      explanation: "$\\lambda_\\text{maks}=b/T=2{,}898\\cdot10^{-3}/1800=1{,}6100\\,\\mu\\text{m}$. Alternativet $1{,}8980\\,\\mu\\text{m}$ bruker celsius i nevneren; Wiens lov krever absolutt temperatur. Alternativet $0{,}6211\\,\\mu\\text{m}$ har snudd brøken. Alternativet $1610{,}0\\,\\mu\\text{m}$ har forvekslet millimeter og mikrometer i konstanten.",
    },
    {
      question: "En oppgave har både en vegg som leder varme og en ovn som stråler. Hvilken temperaturskala må du bruke?",
      options: ["Kelvin i strålingsdelen; i ledningsdelen holder det med celsius, siden bare differanser inngår", "Celsius i begge deler, siden all varmetransport avhenger av temperaturdifferanser", "Kelvin i begge deler, fordi celsius aldri er tillatt noe sted i termofysikken", "Celsius i strålingsdelen og kelvin i ledningsdelen, siden strålingskonstanten er definert i celsius"],
      explanation: "I ledning inngår bare $\\Delta T$, og en differanse er identisk i de to skalaene. I stråling inngår $T^4$ og $b/T$, som er ABSOLUTTE størrelser, og der er celsius katastrofalt. Svaret om kelvin i begge deler er ikke galt i praksis — det er tvert imot den sikreste rutinen — men det er upresist som svar på hva som MÅ brukes. Svaret om celsius i strålingsdelen snur regelen fullstendig.",
    },
    {
      question: "En vegg på $26{,}0\\,\\text{m}^2$ har varmefluks $5{,}80\\,\\text{W/m}^2$. Hvor stort er effekttapet?",
      options: ["$150{,}8\\,\\text{W}$", "$5{,}80\\,\\text{W}$", "$0{,}2231\\,\\text{W}$", "$4{,}483\\,\\text{W}$"],
      explanation: "$P=jA=5{,}80\\cdot26{,}0=150{,}8\\,\\text{W}$. Alternativet lik fluksen selv har ikke ganget med arealet — forvekslingen mellom fluks i watt per kvadratmeter og effekt i watt er en av de hyppigste her. Alternativene $0{,}2231$ og $4{,}483$ har dividert i stedet for å multiplisere.",
    },
    {
      question: "Hvor i en sammensatt vegg faller temperaturen brattest?",
      options: ["I sjiktet med lavest varmeledningsevne, siden gradienten er $j/\\kappa$ og $j$ er felles", "I det tykkeste sjiktet, siden temperaturfallet der er størst", "I sjiktet nærmest utsiden, siden temperaturen der er lavest", "Like bratt i alle sjikt, siden den samme varmestrømmen går gjennom dem"],
      explanation: "Fouriers lov gir $\\Delta T/\\ell = j/\\kappa$, og fluksen $j$ er den samme i alle sjikt. Gradienten er derfor omvendt proporsjonal med $\\kappa$: dårligst leder gir brattest fall. Svaret om det tykkeste sjiktet forveksler GRADIENTEN med det TOTALE fallet — det tykkeste sjiktet kan godt ha størst totalt fall uten å ha brattest gradient. Svaret om ytterste sjikt blander temperaturnivå med gradient, og svaret om lik gradient forveksler lik fluks med lik gradient.",
    },
    {
      question: "Når er forskjellen mellom utstrålt og netto strålingseffekt størst i relativ forstand?",
      options: ["Når flatens temperatur er nær omgivelsenes, siden absorpsjonsleddet da er nesten like stort som utstrålingsleddet", "Når flatens temperatur er mye høyere enn omgivelsenes, siden fjerde potens da forsterker forskjellen", "Forskjellen er alltid den samme relativt, siden begge ledd har samme faktor $e\\sigma A$", "Når emissiviteten er lav, siden flaten da absorberer mer enn den utstråler"],
      explanation: "Forholdet mellom absorbert og utstrålt effekt er $(T_\\text{omg}/T)^4$. Er temperaturene nær hverandre, går forholdet mot 1, og nettoeffekten blir en liten differanse mellom to store tall — da er absorpsjonsleddet avgjørende. Er flaten mye varmere, går forholdet mot 0, og netto nærmer seg utstrålt. Svaret om lav emissivitet er galt: $e$ står i begge ledd og faller ut av forholdet.",
    },
    {
      question: "En kanne står i vakuum mellom to blanke vegger. Hvilken varmetransport gjenstår?",
      options: ["Stråling, siden elektromagnetiske bølger ikke trenger noe medium", "Konveksjon, siden det alltid finnes små trykkforskjeller som setter i gang strømninger", "Ledning, siden de resterende gassmolekylene i vakuumet fortsatt leder varme effektivt", "Ingen, siden vakuum stopper all varmetransport fullstendig"],
      explanation: "Stråling virker i vakuum, og det er derfor termosflasker har blanke, forsølvede vegger — for å senke emissiviteten fra rundt $0{,}9$ til rundt $0{,}05$. Vakuum stopper effektivt både ledning og konveksjon, siden begge krever et medium. Svaret om at vakuum stopper alt, er den utbredte misforståelsen — og i praksis taper en termos mest gjennom ledning i korken og glasshalsen, der veggene møtes.",
    },
    {
      question: "En oppgave oppgir et areal, en emissivitet og to temperaturer, og spør om effekt. Hvilken formelfamilie skal du bruke?",
      options: ["Stråling, siden emissivitet bare forekommer i strålingslovene", "Varmeledning, siden to temperaturer alltid betyr en temperaturdifferanse over et sjikt", "Begge, siden emissivitet inngår i varmeovergangskoeffisienten $h$", "Det kan ikke avgjøres uten å kjenne tykkelsen på materialet"],
      explanation: "Emissiviteten $e$ forekommer bare i strålingslovene — den har ingen plass i Fouriers lov eller i termiske motstander. Ser du ordet «emissivitet» eller symbolet $e$ i en oppgave, er det stråling. Svaret om at emissivitet inngår i $h$ er nær sant i den forstand at TABELLVERDIER for $h$ i praksis inneholder et strålingsbidrag — men det er en teknisk forenkling, og oppgaven oppgir ikke $h$ her. Mangler det en tykkelse, er det nettopp et tegn på at ledning ikke er ment.",
    },
  ],
};

export default quizData_tfy4115;
