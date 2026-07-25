import type { QuizQuestion } from './quiz-data';

const quizData_econ2220: Record<string, QuizQuestion[]> = {
  'econ2220-0-1': [
    {
      question: "Hvilket tema er med i alle 11 eksamenssettene i arkivet (7 ordinære og 4 utsatte)?",
      options: ["Generell likevekt og Pareto-effektivitet", "Spillteori med Nash-likevekt og delspillperfekte likevekter", "Monopolets tilpasning i produktmarkedet", "Intertemporalt valg med sparing og rente"],
      explanation: "Generell likevekt og Pareto er emnets ryggrad: 7 av 7 ordinære og 4 av 4 utsatte sett. Spillteori er i 4 av 7 ordinære, men i null sett siden 2022; monopol er aldri testet som egen oppgave; intertemporalt valg er i 0 av 7 ordinære og 1 av 4 utsatte.",
    },
    {
      question: "Hva skjedde med eksamen i ECON2220 fra og med 2023?",
      options: ["Spillteori og atferdsøkonomi forsvant fra settene", "Eksamen ble utvidet fra tre til sju oppgaver med en egen flervalgsbolk i spillteori", "Konsumentteori ble tatt ut av settene og erstattet av makroøkonomi", "Karakterskalaen ble endret fra A–F til bestått eller ikke bestått"],
      explanation: "Regimeskiftet i 2023: spillteori og atferdsøkonomi har null forekomster i de sju settene 2023–2025, mens produsentteori ble fast tredjeoppgave. Konsumentteori og generell likevekt er uendret bærebjelker, og karakterskalaen er fortsatt A–F.",
    },
    {
      question: "Et sett har vektene 35/35/30 og varer 240 minutter. Hvor mye tid tilsvarer oppgave 3?",
      options: ["72 minutter", "84 minutter", "60 minutter", "80 minutter"],
      explanation: "0,30 · 240 = 72 minutter. De to andre oppgavene er 0,35 · 240 = 84 minutter hver. 60 og 80 minutter svarer til vektene 25 % og 33 %, som ikke er oppgitt her.",
    },
    {
      question: "Hva følger av regelen om at deloppgavene innenfor en eksamensoppgave teller likt?",
      options: ["En kort deloppgave er verdt like mye som en lang utledning i samme oppgave", "Den siste deloppgaven i hver oppgave teller mest, fordi den er vanskeligst", "Regelen gjelder bare i de settene som ikke oppgir prosentvekter", "Deloppgaver du hopper over, kan kompenseres ved å skrive ekstra grundig på de andre"],
      explanation: "Lik vekting betyr at en kort begrunnelse gir like mange poeng som en tjue minutters utledning. Vanskelighetsgrad påvirker ikke vekten, regelen er skrevet ut i flere veiledninger uavhengig av om vektene er oppgitt, og ekstra grundighet gir ikke poeng for en tom deloppgave.",
    },
    {
      question: "Hvorfor holder det ikke å levere en figur i en optimeringsoppgave?",
      options: ["Sensor krever matematisk utledning for full uttelling", "Fordi figurer ikke regnes som besvarelse i en digital skoleeksamen", "Fordi en figur av tangeringspunktet alltid gir feil kvantum i konsumentproblemer", "Fordi sensor ikke har anledning til å vurdere håndtegnede figurer"],
      explanation: "Dette er feil #1 i feilregisteret: V2025-veiledningen sier eksplisitt at figur alene ikke gir full score i optimeringsoppgaver. Figurer er både tillatt og ønsket, og de gir riktig kvalitativt bilde — de kan bare ikke erstatte utledningen.",
    },
    {
      question: "Hva kreves for at en tolkning av tilpasningsbetingelsen skal godkjennes?",
      options: ["At begge sider forklares i enheter av godene", "At betingelsen regnes om til desimaltall for de oppgitte prisene", "At du oppgir hvilken lærebok og hvilket kapittel betingelsen står i", "At du tegner tangeringspunktet og markerer det med en bokstav"],
      explanation: "Feil #2 er å gjenta formelen som «tolkning». Kravet er å si hva venstresiden er målt i (enheter av vare 2 per enhet vare 1, sett fra konsumenten) og hva høyresiden er målt i (det samme, krevd av markedet). Tall, kildehenvisning og figur erstatter ikke enhetstolkningen.",
    },
    {
      question: "Hvordan skal du vise at et gode er normalt?",
      options: ["Derivere etterspørselen med hensyn på inntekten", "Skrive at etterspørselen erfaringsmessig øker når inntekten øker", "Vise at etterspørselen faller når prisen på godet stiger", "Skalere begge innsatsfaktorene med en faktor og sammenlikne med utgangspunktet"],
      explanation: "Regelen «vis, ikke påstå» (feil #3): normalitet krever derivasjon med hensyn på $m$, og den deriverte må vises å være positiv. En verbal påstand gir bare delvis uttelling. At etterspørselen faller med prisen er et annet spørsmål, og skaleringstesten gjelder skalautbytte i produksjonen.",
    },
    {
      question: "Hvilket av disse temaene bør en konte-kandidat vekte tyngre enn en som tar ordinær eksamen?",
      options: ["Prisendring med beholdningsledd", "Definisjonen av Pareto-effektivitet", "Utledning av Cobb-Douglas-etterspørsel", "Budsjettlinjens helning"],
      explanation: "Beholdningsleddet er i 3 av 4 utsatte sett mot 2 av 7 ordinære, og er dermed en utsatt-favoritt. De tre andre er like sentrale uansett hvilken eksamen du tar — Pareto er i alle 11 settene.",
    },
    {
      question: "Hva er riktig om monopol i ECON2220?",
      options: ["Det er aldri testet som egen oppgave i de 11 settene", "Det er fast tredjeoppgave sammen med produsentteorien i alle sett siden 2022", "Det er tatt ut av emnebeskrivelsen og kan derfor ignoreres helt", "Det testes bare i utsatt eksamen, aldri i den ordinære"],
      explanation: "Monopol er i 0 av 11 sett som egen oppgave, men står fortsatt i emnebeskrivelsen og dukker opp i forutsetningslisten til velferdsteoremene — markedsmakt bryter forutsetningen om pristakere. Fast tredjeoppgave er produsentteori. Selve monopolapparatet hører hjemme i ECON1210.",
    },
    {
      question: "Hva sier sensorveiledningene om C-nivået?",
      options: ["God forståelse av grunnelementene i alle tre oppgavene", "Full uttelling på minst to av de tre oppgavene i settet", "Riktige svar på de utpekte skilleoppgavene i hver oppgave", "Godkjent obligatorisk innlevering og oppmøte på seminarene i emnet"],
      explanation: "C-terskelen er definert som god forståelse av grunnelementene i alle oppgavene, pluss noe uttelling på de vanskelige. Den nevner ikke skilleoppgavene — de er A-markører. Den obligatoriske innleveringen er et vilkår for å gå opp, ikke et karakterkriterium.",
    },
  ],
  'econ2220-1-1': [
    {
      question: "Hva er den sentrale forskjellen mellom ECON1210 og ECON2220 på etterspørselssiden?",
      options: ["ECON2220 utleder etterspørselen fra nyttemaksimering", "ECON2220 antar at etterspørselskurven stiger i stedet for å falle", "ECON2220 måler etterspørsel i kroner framfor i mengder per periode", "ECON2220 bruker etterspørselskurven bare i produsentoppgaver, ikke i konsumentoppgaver"],
      explanation: "Kurven ser like ut i begge emnene; forskjellen er at ECON1210 postulerer den, mens ECON2220 lar den være løsningen på problemet «maksimér nytten gitt budsjettet». Fallende etterspørsel er dermed noe som må vises, ikke antas.",
    },
    {
      question: "Hvordan skal forholdet mellom de to tilbudsmodellene beskrives?",
      options: ["Som to modellvalg for samme fenomen", "Som to påstander om verden der bare den ene kan være riktig", "Som en gammel modell som er vist å være feil, og en ny som erstatter den", "Som to modeller som gjelder i hvert sitt marked, avhengig av om godet er en vare eller en tjeneste"],
      explanation: "Modellen med enkeltanlegg aggregerer diskrete enheter med konstant kostnad per enhet; den klassiske modellen glatter samme bilde til en deriverbar kostnadsfunksjon. Ingen av dem er «feil» — ECON2220-eksamen krever bare den klassiske, fordi den kan deriveres.",
    },
    {
      question: "Hva er kostnadsfunksjonen $c(y)$?",
      options: ["Den minste kostnaden ved å produsere mengden $y$", "Summen av alle utgifter bedriften har hatt i perioden", "Kostnaden ved den siste produserte enheten", "Kostnaden per enhet, altså totalkostnaden delt på mengden"],
      explanation: "$c(y)$ forutsetter at bedriften alt har valgt den billigste faktorkombinasjonen for hver mengde. Kostnaden ved siste enhet er marginalkostnaden $c'(y)$, og totalkostnad delt på mengde er gjennomsnittskostnaden — to andre størrelser.",
    },
    {
      question: "En bedrift har $c(y) = 3y^2 + 12$ og prisen er 30. Hvilken mengde maksimerer profitten?",
      options: ["$y = 5$", "$y = 10$", "$y = 6$", "$y = 2$"],
      explanation: "$c'(y) = 6y$, og $p = c'(y)$ gir $30 = 6y$, altså $y = 5$. Den faste kostnaden 12 påvirker ikke valget av mengde. $y = 10$ er svaret hvis man glemmer faktoren 2 i derivasjonen av $3y^2$.",
    },
    {
      question: "Hva er den økonomiske tolkningen av betingelsen $p = c'(y)$?",
      options: ["Markedet betaler like mye for siste enhet som den koster å lage", "Prisen dekker gjennomsnittskostnaden, slik at bedriften går i balanse", "Bedriften produserer den mengden markedet etterspør ved gjeldende pris", "Alle faste kostnader er dekket inn av salgsinntekten fra den siste enheten som produseres"],
      explanation: "Venstresiden er inntekten av én enhet til, høyresiden kostnaden ved den. Er prisen høyest, lønner det seg å produsere mer; er kostnaden høyest, for mye. Betingelsen sier ingenting om gjennomsnittskostnad eller om at faste kostnader er dekket.",
    },
    {
      question: "Hva svarer konstant skalautbytte til i innføringsemnets bilde av tilbudssiden?",
      options: ["At alle produksjonsenhetene har samme kostnad per enhet", "At produksjonsenhetene har svært ulik kostnad per enhet", "At ingen av produksjonsenhetene har noen kapasitetsgrense i det hele tatt", "At antallet produksjonsenheter i bransjen er konstant over tid"],
      explanation: "Like enheter gir én lang, flat trapp — altså konstant marginalkostnad, som i klassisk språk er $c(y) = ky$ og $c'(y) = k$. Ulik kostnad per enhet svarer til stigende marginalkostnad, altså $c''(y) > 0$.",
    },
    {
      question: "Hva betyr nullprofitt i langsiktig likevekt?",
      options: ["Bedriften får akkurat dekket alt den ofrer, alternativkostnaden inkludert", "Ingen i bransjen tjener penger, og eierne får ingen avkastning på kapitalen", "Bedriften går med underskudd, men fortsetter fordi de faste kostnadene er sunk", "Salgsinntekten dekker de variable kostnadene, men ikke de faste"],
      explanation: "Alternativkostnaden på kapital og egen arbeidsinnsats ligger inne i kostnadsfunksjonen. Nullprofitt betyr derfor at alt som ofres, akkurat dekkes. Å lese det som «ingen tjener penger» er feil #11 i feilregisteret.",
    },
    {
      question: "Hva er forskjellen mellom partiell og generell likevekt?",
      options: ["Partiell ser på ett marked isolert, generell krever klarering i alle markeder", "Partiell gjelder konsumenter, generell gjelder både konsumenter og bedrifter", "Partiell er en likevekt på kort sikt, generell er en likevekt på lang sikt", "Partiell bruker figurer som verktøy, mens generell likevekt alltid krever algebra og derivasjon"],
      explanation: "Skillet er hvor mange markeder som må klarere, ikke hvem som opptrer eller hvor lang tidshorisonten er. I partiell likevekt holdes resten av økonomien fast; i generell likevekt bestemmes alle priser samtidig.",
    },
    {
      question: "Hvilken definisjon av markedslikevekt er presis nok for sensor?",
      options: ["Priser der alle tilpasser seg optimalt og alle markeder klarerer", "Priser der konsumenten ligger i tangeringspunktet mellom indifferenskurve og budsjettlinje", "Priser der ingen konsument ønsker å bytte til seg mer av noe gode enn hun allerede har", "Priser som er slik at etterspørselen etter det viktigste godet i økonomien er lik tilbudet av det"],
      explanation: "Markedsklarering i alle markeder er selve poenget; å beskrive én persons tilpasning er feil #6 i feilregisteret. Tangeringen er en del av den optimale tilpasningen, men dekker ikke klareringskravet.",
    },
    {
      question: "Hva betyr det at en allokering er Pareto-effektiv?",
      options: ["Ingen kan få høyere nytte uten at noen får lavere", "Alle har fått en rimelig og rettferdig andel av godene", "Summen av konsument- og produsentoverskudd er størst mulig", "Alle konsumentene har oppnådd nøyaktig samme nyttenivå i den endelige fordelingen"],
      explanation: "Pareto-effektivitet er blind for fordeling: en allokering der én eier alt, kan være effektiv. Å lese effektivitet normativt som «rettferdig» er feil #8. Overskuddsarealene er innføringsemnets velferdsmål og brukes ikke i ECON2220.",
    },
    {
      question: "Fire produsenter med kapasitet 4 hver har kostnader på 1, 2, 3 og 4 kroner per enhet. Hva koster det bransjen å levere 12 enheter når den billigste brukes først?",
      options: ["24", "36", "12", "40"],
      explanation: "$4 \\cdot 1 + 4 \\cdot 2 + 4 \\cdot 3 = 4 + 8 + 12 = 24$. Svaret 36 får man ved å bruke kostnaden til den dyreste produsenten på alt ($12 \\cdot 3$), og 40 er kostnaden ved å levere alle 16 enhetene.",
    },
    {
      question: "Hvorfor kan den glatte marginalkostnadskurven gi ett entydig svar der trappa gir et intervall?",
      options: ["Fordi glattingen fjerner hoppene, så $p = c'(y)$ har én løsning", "Fordi den glatte kurven alltid ligger høyere enn trappa ved alle mengder", "Fordi den klassiske modellen forutsetter at bedriftene ikke er pristakere", "Fordi trappa bare gjelder på kort sikt, mens den glatte kurven gjelder på lang sikt"],
      explanation: "Treffer prisen nøyaktig et trinn i trappa, er produsenten på det trinnet likegyldig, og tilbudt mengde blir et intervall. Den glatte kurven skjærer prislinja i ett punkt — som ligger midt i intervallet. Modellene er enige om økonomien.",
    },
    {
      question: "Hvilket tema hører til ECON1210-boka og ikke til ECON2220?",
      options: ["Monopolets tilpasning", "Kostnadsminimering med Lagrange", "Velferdsteoremene og forutsetningene deres", "Generell likevekt i en bytteøkonomi med to konsumenter"],
      explanation: "Monopol er aldri testet som egen oppgave i ECON2220s elleve arkivsett; markedsmakt dukker bare opp som brudd på en forutsetning for 1. velferdsteorem. De tre andre er kjernestoff i ECON2220.",
    },
    {
      question: "Hva står $\\omega$ for i denne boka?",
      options: ["En beholdning konsumenten eier fra før", "Prisen på en innsatsfaktor i produksjonen", "Vekten et gode har i nyttefunksjonen", "Den samlede mengden av et gode i økonomien som helhet"],
      explanation: "$\\omega$ betyr alltid beholdning her. Noen eksamenssett har brukt $\\omega$ om faktorpriser, men boka standardiserer på $r$ og $w$ for faktorpriser nettopp for å unngå den forvekslingen.",
    },
    {
      question: "Hvorfor holder det ikke å tegne kurvene du kjenner fra innføringsemnet, i en ECON2220-besvarelse?",
      options: ["Fordi eksamen spør etter utledningen som produserer kurvene", "Fordi figurer ikke er tillatt som del av besvarelsen i ECON2220", "Fordi kurvene fra innføringsemnet har feil form når de utledes fra nyttemaksimering", "Fordi kurvene i ECON2220 alltid tegnes med prisen på den vannrette aksen i stedet for den loddrette"],
      explanation: "Kurvene er svarene; eksamen etterspør regningen bak dem. Å levere figur der utledning kreves, er feil #1 i feilregisteret. Figurer er både tillatte og ønskede — som støtte til utledningen.",
    },
  ],
  'econ2220-1-2': [
    {
      question: "Hva betyr det at nytte er ordinal?",
      options: ["Bare rekkefølgen av nyttetallene har innhold", "Nytten måles i kroner, slik at den kan sammenliknes mellom personer", "Nytten er alltid positiv, siden mer av et gode alltid er bedre", "Nytten kan bare beregnes for godekurver som konsumenten faktisk har råd til å kjøpe"],
      explanation: "Ordinal nytte betyr at nyttefunksjonen er en tallmerkelapp på en rangering: at $u = 8$ slår $u = 4$, betyr at kurven er bedre, ikke «dobbelt så god». Derfor kan nyttetall aldri sammenliknes eller summeres mellom personer.",
    },
    {
      question: "Hvilken av disse er IKKE en gyldig monoton transformasjon av en positiv nyttefunksjon $u$?",
      options: ["$v = 6 - u$", "$v = 10u$", "$v = \\ln u$", "$v = u^3$"],
      explanation: "$g(u) = 6 - u$ har $g'(u) = -1 < 0$ og snur derfor rangeringen: den beste kurven får lavest verdi. De tre andre er strengt voksende for $u > 0$ og bevarer rangeringen.",
    },
    {
      question: "Hva skjer med marginalnyttene og med MSB når du bruker en monoton transformasjon $v = g(u)$?",
      options: ["Marginalnyttene endres, MSB er uendret", "Både marginalnyttene og MSB endres", "Marginalnyttene er uendret, mens MSB endres", "Ingen av dem endres, siden nyttefunksjonen beskriver samme preferanser"],
      explanation: "Kjerneregelen gir $v'_1 = g'(u)u'_1$ og $v'_2 = g'(u)u'_2$. Marginalnyttene skaleres derfor med $g'(u)$, men faktoren forsvinner når du deler dem på hverandre — MSB, og dermed etterspørselen, er uendret.",
    },
    {
      question: "Hva er MSB for $u = c_1^{1/2}c_2^{1/2}$?",
      options: ["$c_2/c_1$", "$c_1/c_2$", "$\\tfrac{1}{2}c_2/c_1$", "$\\sqrt{c_2/c_1}$"],
      explanation: "$u'_1 = \\tfrac12 c_1^{-1/2}c_2^{1/2}$ og $u'_2 = \\tfrac12 c_1^{1/2}c_2^{-1/2}$; forholdet blir $c_2/c_1$. Faktoren $\\tfrac12$ forsvinner fordi den står i både teller og nevner.",
    },
    {
      question: "En konsument har MSB $= 4$ i punktet hun er i. Hva betyr det?",
      options: ["Hun vil gi fra seg fire enheter av vare 2 for én enhet mer av vare 1", "Hun vil gi fra seg fire enheter av vare 1 for én enhet mer av vare 2", "Hun bruker fire ganger så mye penger på vare 1 som på vare 2", "Nytten hennes øker med fire enheter dersom hun får én enhet mer av vare 1"],
      explanation: "MSB $= u'_1/u'_2$ måles i enheter av vare 2 per enhet vare 1, sett fra konsumentens side. Svaret «Hun vil gi fra seg fire enheter av vare 1 for én …» snur retningen, «Hun bruker fire ganger så mye penger på vare 1 som …» forveksler MSB med budsjettandeler, og «Nytten hennes øker med fire enheter dersom hun får …» er en kardinal tolkning av nyttetall som modellen ikke tillater.",
    },
    {
      question: "Hvorfor kan ikke to indifferenskurver på ulike nyttenivåer krysse hverandre?",
      options: ["Fordi transitivitet da ville blitt brutt", "Fordi kurvene alltid har samme helning i alle punkter", "Fordi budsjettlinja bare kan tangere én kurve om gangen", "Fordi konsumenten alltid velger den kurven som ligger lengst ut fra origo"],
      explanation: "I et krysningspunkt ville alle punktene på begge kurvene vært like gode som krysningspunktet, og derfor like gode som hverandre — i strid med at kurvene har ulikt nyttenivå. Argumentet er transitivitet, ikke geometri.",
    },
    {
      question: "Hva er likningen for indifferenskurven gjennom $(4,9)$ når $u = c_1^{1/2}c_2^{1/2}$?",
      options: ["$c_2 = 36/c_1$", "$c_2 = 6/c_1$", "$c_2 = 13 - c_1$", "$c_2 = 36/c_1^2$"],
      explanation: "Nyttenivået er $\\bar u = 2 \\cdot 3 = 6$, så $(c_1c_2)^{1/2} = 6$ gir $c_1c_2 = 36$ og $c_2 = 36/c_1$. Svaret «$c_2 = 6/c_1$» glemmer å kvadrere begge sider, og «$c_2 = 36/c_1^2$» svarer til eksponentene $2/3$ og $1/3$.",
    },
    {
      question: "Hva betyr det at preferansene er strengt konvekse?",
      options: ["En blanding av to like gode kurver er strengt bedre enn hver av dem", "Indifferenskurvene er rette linjer med konstant helning", "Mer av begge goder er alltid bedre enn mindre", "Konsumenten foretrekker alltid å bruke hele budsjettet framfor å spare noe av det"],
      explanation: "Konveksitet handler om blandinger: er $X$ og $Y$ like gode, er midtpunktet minst like godt (strengt bedre ved streng konveksitet). Rette indifferenskurver er grensetilfellet som er konvekst, men ikke strengt. «Mer er bedre» er monotoni, en annen egenskap.",
    },
    {
      question: "Hvordan skal du vise at preferansene er konvekse når oppgaven ber om det?",
      options: ["Med et blandingsargument eller en figurbeskrivelse", "Ved å slå fast at nyttefunksjonen er av Cobb-Douglas-typen", "Ved å derivere nyttefunksjonen med hensyn på inntekten", "Ved å vise at etterspørselen etter godet faller når prisen på godet stiger"],
      explanation: "Egenskaper skal vises, ikke påstås (feil #3). Blandingsargumentet er tre linjer: to punkter med samme nytte, midtpunktet, og nytten der. Derivasjon med hensyn på inntekten hører til normalitet, ikke konveksitet.",
    },
    {
      question: "Hva er sammenhengen mellom konveksitet og MSB?",
      options: ["Konveksitet svarer til at MSB avtar langs indifferenskurven", "Konveksitet svarer til at MSB er konstant langs indifferenskurven", "Konveksitet svarer til at MSB er lik prisforholdet i alle punkter", "Konveksitet svarer til at MSB vokser når konsumenten får mer av vare 1"],
      explanation: "Jo mer du har av vare 1 relativt til vare 2, jo mindre av vare 2 vil du gi for enda en enhet av vare 1 — indifferenskurven blir slakere mot høyre og krummer mot origo. Konstant MSB er grensetilfellet med perfekte substitutter.",
    },
    {
      question: "Hvilken antakelse gjør at budsjettbetingelsen alltid skrives med likhetstegn?",
      options: ["Monotoni — mer er bedre", "Transitivitet", "Fullstendighet", "Konveksitet i preferansene"],
      explanation: "Når mer av et gode alltid er bedre, er det aldri optimalt å la deler av budsjettet stå ubrukt. De tre andre antakelsene sier ingenting om hvor mye av budsjettet som brukes.",
    },
    {
      question: "Hva er MSB for $u = 2c_1 + 3c_2$?",
      options: ["$2/3$, konstant", "$3/2$, konstant", "$2c_2/(3c_1)$", "$5$, fordi marginalnyttene legges sammen"],
      explanation: "$u'_1 = 2$ og $u'_2 = 3$ gir MSB $= 2/3$ uansett godekurv. Godene er perfekte substitutter, indifferenskurvene er rette linjer med helning $-2/3$, og optimum blir vanligvis et hjørne.",
    },
    {
      question: "Hvilken egenskap ved preferansene er en EGEN forutsetning i 2. velferdsteorem?",
      options: ["Konveksitet", "Transitivitet", "Fullstendighet", "At nyttefunksjonen er skrevet på logaritmeform"],
      explanation: "2. velferdsteorem krever konvekse preferanser i tillegg til forutsetningene bak 1. teorem. Det er en av grunnene til at konveksitet er pensum to steder — her og i kapitlet om velferdsteoremene.",
    },
    {
      question: "Hva er lokalt umettelige preferanser?",
      options: ["Det finnes en strengt bedre kurv i hver omegn, uansett hvor liten", "Konsumenten blir aldri mett, uansett hvor mye hun konsumerer av godene", "Konsumenten er likegyldig mellom alle kurver som ligger nær hverandre", "Nyttefunksjonen vokser uten øvre grense når begge goder øker"],
      explanation: "Egenskapen er svakere enn monotoni: den tillater at mer av ett bestemt gode kan være dårlig, så lenge en eller annen liten endring forbedrer. Det er nettopp denne varianten som står i forutsetningslisten til velferdsteoremene.",
    },
    {
      question: "Hvorfor er $v = u^2$ ikke alltid en gyldig monoton transformasjon?",
      options: ["Fordi kvadrering snur rangeringen der $u$ er negativ", "Fordi kvadrering endrer marginalnyttene", "Fordi kvadrering gjør indifferenskurvene lineære", "Fordi kvadrering bare er tillatt når nyttefunksjonen er av Cobb-Douglas-typen"],
      explanation: "$g(u) = u^2$ er strengt voksende bare for $u > 0$. For $u = \\ln c_1 + \\ln c_2$, som er negativ når $c_1c_2 < 1$, ødelegger kvadreringen rangeringen. At marginalnyttene endres, er derimot helt greit — det gjør alle transformasjoner.",
    },
  ],
  'econ2220-1-3': [
    {
      question: "Hvordan settes Lagrange-funksjonen opp for konsumentens problem?",
      options: ["$\\mathcal{L} = u(c_1,c_2) - \\lambda(p_1c_1 + p_2c_2 - m)$", "$\\mathcal{L} = u(c_1,c_2) - \\lambda(p_1c_1 + p_2c_2)$", "$\\mathcal{L} = u(c_1,c_2) \\cdot \\lambda(p_1c_1 + p_2c_2 - m)$", "$\\mathcal{L} = p_1c_1 + p_2c_2 - \\lambda(u(c_1,c_2) - m)$"],
      explanation: "Målfunksjonen minus multiplikatoren ganget med bibetingelsen skrevet som null. Svaret «$\\mathcal{L} = u(c_1,c_2) - \\lambda(p_1c_1 + p_2c_2)$» mangler $m$, så bibetingelsen er ikke null når den er oppfylt; «$\\mathcal{L} = u(c_1,c_2) \\cdot \\lambda(p_1c_1 + p_2c_2 - m)$» ganger i stedet for å trekke fra; «$\\mathcal{L} = p_1c_1 + p_2c_2 - \\lambda(u(c_1,c_2) - m)$» bytter om på hva som er mål og hva som er bibetingelse.",
    },
    {
      question: "Hva er det avgjørende steget etter at førsteordensbetingelsene er skrevet ned?",
      options: ["Å dele dem på hverandre slik at $\\lambda$ elimineres", "Å sette $\\lambda = 1$ og løse resten", "Å derivere dem en gang til for å sjekke andreordensbetingelsen", "Å sette begge marginalnyttene lik hverandre og løse for det ene godet"],
      explanation: "Fra $u'_1 = \\lambda p_1$ og $u'_2 = \\lambda p_2$ gir divisjon tilpasningsbetingelsen $u'_1/u'_2 = p_1/p_2$. Å stoppe før dette steget er et av de vanligste stedene besvarelser mister poeng. $\\lambda$ kan ikke settes lik 1 — den bestemmes av problemet.",
    },
    {
      question: "Hva er den økonomiske tolkningen av $\\lambda$ i konsumentens problem?",
      options: ["Nytteøkningen av én ekstra krone i inntekt", "Prisen på vare 1 målt i enheter av vare 2", "Antall enheter av vare 1 konsumenten kjøper per krone", "Den delen av inntekten som blir stående ubrukt i optimum"],
      explanation: "$\\lambda$ er skyggeprisen på bibetingelsen — her budsjettet — altså marginalnytten av penger. Førsteordensbetingelsene gir $\\lambda = u'_1/p_1 = u'_2/p_2$: nytten per krone er lik i alle anvendelser. Ubrukt inntekt finnes ikke i optimum, siden mer er bedre.",
    },
    {
      question: "Hva er $\\lambda$ for nyttefunksjonen $u = a\\ln c_1 + (1-a)\\ln c_2$?",
      options: ["$1/m$", "$a/m$", "$m$", "$a/p_1$"],
      explanation: "Fra $a/c_1 = \\lambda p_1$ er $p_1c_1 = a/\\lambda$, og tilsvarende $p_2c_2 = (1-a)/\\lambda$. Summen er budsjettet: $m = 1/\\lambda$, siden eksponentene summerer til 1. Resultatet ble testet i V2024. Merk at $a/p_1$ er den deriverte av etterspørselen med hensyn på inntekten, ikke $\\lambda$.",
    },
    {
      question: "Hvorfor er innsettingsmetoden ikke det rette valget i kostnadsminimering?",
      options: ["Produksjonskravet kan i alminnelighet ikke løses ut for én faktor", "Fordi kostnadsfunksjonen ikke er deriverbar når grenseproduktene avtar", "Fordi et minimeringsproblem ikke har førsteordensbetingelser", "Fordi faktorprisene er ukjente størrelser i problemet"],
      explanation: "Dette er feil #5 i feilregisteret. Selv når kravet kan løses ut for en snill teknologi, mister du den betingelsen sensor spør etter — den får du bare ved å kombinere førsteordensbetingelsene. Minimeringsproblemer har naturligvis førsteordensbetingelser, og faktorprisene er gitt.",
    },
    {
      question: "Hva er MTSB, den marginale tekniske substitusjonsbrøken?",
      options: ["$F'_K/F'_L$", "$r/w$", "$K/L$", "$F(K,L)/(rK+wL)$"],
      explanation: "MTSB er forholdet mellom grenseproduktene: hvor mye arbeid som spares ved én enhet mer kapital, med uendret produksjon. $r/w$ er faktorprisforholdet, som MTSB er lik i kostnadsminimum — men de to er ikke samme størrelse, og det er nettopp derfor betingelsen har innhold.",
    },
    {
      question: "Et trykkeri har $F(K,L)=\\sqrt{KL}$, $r=4$ og $w=9$. Hva er forholdet $L/K$ i kostnadsminimum?",
      options: ["$4/9$", "$9/4$", "$2/3$", "$1$"],
      explanation: "Betingelsen $F'_K/F'_L = r/w$ blir $L/K = r/w = 4/9$: bedriften bruker relativt mer av den billige faktoren. Svaret $9/4$ snur forholdet, og $2/3$ er kvadratroten av $4/9$.",
    },
    {
      question: "Hva er $\\lambda$ i kostnadsminimeringsproblemet?",
      options: ["Marginalkostnaden — kostnadsøkningen av én enhet mer produsert", "Kostnaden per innsatsfaktor", "Den totale kostnaden ved å produsere $\\bar y$", "Forholdet mellom kapital og arbeid i optimum"],
      explanation: "$\\lambda$ er skyggeprisen på bibetingelsen, som her er produksjonskravet: hvor mye den minimerte kostnaden stiger om kravet økes med én enhet. Det er nettopp definisjonen av marginalkostnad. Totalkostnaden er $rK+wL$ i optimum, en annen størrelse.",
    },
    {
      question: "En konsument har $u = 2\\sqrt{c_1} + c_2$. Hva blir etterspørselen etter vare 1?",
      options: ["$c_1 = (p_2/p_1)^2$", "$c_1 = m/(2p_1)$", "$c_1 = p_2/p_1$", "$c_1 = m/p_1 - p_2/p_1$"],
      explanation: "Med $u'_1 = 1/\\sqrt{c_1}$ og $u'_2 = 1$ gir tilpasningsbetingelsen $1/\\sqrt{c_1} = p_1/p_2$, altså $c_1 = (p_2/p_1)^2$. Inntekten står ikke i uttrykket: all ekstra inntekt går til vare 2, så lenge det er nok inntekt til at $c_2 \\ge 0$.",
    },
    {
      question: "En konsument har $u = c_1^{1/4}c_2^{3/4}$, $p_1 = 3$, $p_2 = 5$ og $m = 60$. Hva er optimum?",
      options: ["$(5, 9)$", "$(9, 5)$", "$(15, 3)$", "$(10, 6)$"],
      explanation: "Utgiftsandelene følger eksponentene: 15 kroner (en firedel) på vare 1 gir $c_1 = 5$, og 45 kroner (tre firedeler) på vare 2 gir $c_2 = 9$. Svaret «$(9, 5)$» bytter om godene, og «$(15, 3)$» legger hele budsjettet i vare 1 og resten i vare 2.",
    },
    {
      question: "Hvorfor kan du bruke logaritmeformen når nyttefunksjonen er oppgitt som $c_1^ac_2^{1-a}$?",
      options: ["Fordi logaritmen er en strengt voksende omregning og bevarer rangeringen", "Fordi logaritmen gir samme nyttetall som potensformen", "Fordi logaritmeformen er den eneste som kan brukes i Lagrange-metoden", "Fordi logaritmen fjerner behovet for å bruke bibetingelsen i utledningen"],
      explanation: "$\\ln$ er en monoton transformasjon, og optimum blir derfor det samme — men algebraen blir mye lettere. Nyttetallene blir ikke like, og det er heller ikke nødvendig: bare rangeringen har innhold. Bibetingelsen må brukes uansett form.",
    },
    {
      question: "Hva sier likheten $u'_1/p_1 = u'_2/p_2$?",
      options: ["Nytten per krone er den samme uansett hvilket gode kronen brukes på", "Marginalnyttene av de to godene er like store i optimum", "Prisene på de to godene er like i likevekt", "Konsumenten bruker like store beløp på de to godene"],
      explanation: "Dette er tilpasningsbetingelsen omskrevet, og hvert av leddene er lik $\\lambda$. Marginalnyttene er ikke like — det er nytten *per krone* som er lik. Like beløp på de to godene gjelder bare når eksponentene i en Cobb-Douglas-nytte er like.",
    },
    {
      question: "Hva bestemmer kostnadsminimering?",
      options: ["Den billigste faktorkombinasjonen for en gitt produsert mengde", "Hvor mye bedriften bør produsere", "Prisen bedriften bør sette på produktet", "Hvilke faktorpriser bedriften bør forhandle seg fram til hos leverandørene"],
      explanation: "Mengden er gitt utenfra i dette problemet; valget av kvantum er profittmaksimering, et annet problem. Å blande de to er feil #4 i feilregisteret. Bedriften er dessuten pristaker og setter ikke prisen selv.",
    },
    {
      question: "Hvorfor virker Lagrange-metoden?",
      options: ["Betingelsene sier at nivåkurven tangerer bibetingelsen i optimum", "Fordi $\\lambda$ alltid er lik null i et optimum", "Fordi bibetingelsen kan ignoreres når $\\lambda$ er innført", "Fordi antall likninger blir mindre enn antall ukjente, slik at systemet blir enkelt"],
      explanation: "Er helningene ulike, kan du bevege deg langs bibetingelsen til en høyere nivåkurve — da var du ikke i optimum. $\\lambda$ er som regel ikke null, bibetingelsen kommer tilbake når du deriverer med hensyn på $\\lambda$, og systemet får like mange likninger som ukjente.",
    },
    {
      question: "Hva er den vanligste fortegnsfellen i Lagrange-oppsettet?",
      options: ["Å ikke skrive bibetingelsen som «noe minus noe lik null» før den settes inn", "Å derivere med hensyn på $\\lambda$", "Å bruke minustegn foran $\\lambda$-leddet i stedet for plusstegn", "Å sette førsteordensbetingelsene lik null"],
      explanation: "Bibetingelsen må være null når den er oppfylt, ellers blir betingelsene gale. Fortegnet foran $\\lambda$-leddet kan derimot velges fritt — da skifter bare $\\lambda$ fortegn — så lenge du er konsekvent. Å derivere med hensyn på $\\lambda$ og sette betingelsene lik null er selve metoden.",
    },
  ],
  'econ2220-2-1': [
    {
      question: "Hvorfor skriver kurset budsjettbetingelsen med likhetstegn og ikke med «mindre enn eller lik»?",
      options: ["Fordi preferansene er monotone, så ubrukte kroner alltid kan gjøres om til høyere nytte", "Fordi modellen utelukker negative mengder av begge varer, og fordi prisene er faste", "Fordi prisene er gitt utenfra og ikke kan påvirkes av konsumenten", "Fordi nyttefunksjonen må være deriverbar for at Lagrange skal virke"],
      explanation: "Monotoni («mer er bedre») gjør at et punkt strengt innenfor budsjettlinjen aldri kan være optimalt: konsumenten kan kjøpe mer av minst én vare. De andre påstandene er riktige om modellen, men de er ikke begrunnelsen for likheten.",
    },
    {
      question: "Hva er tallverdien av budsjettlinjens helning, og hvilken enhet har den?",
      options: ["$p_1/p_2$, målt i enheter av vare 2 per enhet av vare 1", "$p_1/p_2$, målt i kroner per enhet av vare 1", "$p_2/p_1$, målt i enheter av vare 1 per enhet av vare 2", "$m/p_1$, målt i enheter av vare 1"],
      explanation: "Budsjettlinjen er $c_2 = m/p_2 - (p_1/p_2)c_1$, så tallverdien av helningen er $p_1/p_2$. Kroner per enhet vare 1 delt på kroner per enhet vare 2 gir at kronene stryker, og igjen står enheter vare 2 per enhet vare 1. $m/p_1$ er skjæringspunktet med den vannrette aksen, ikke helningen.",
    },
    {
      question: "En konsument har $m = 600$, $p_1 = 20$ og $p_2 = 30$. Hvor mange enheter av vare 2 må hun gi avkall på for å få én enhet mer av vare 1?",
      options: ["To tredjedeler av en enhet", "Halvannen enhet", "Én og en tredjedels enhet", "Tjue enheter"],
      explanation: "Bytteforholdet er $p_1/p_2 = 20/30 = 2/3$ enheter vare 2 per enhet vare 1. Svaret 1,5 er den omvendte brøken $p_2/p_1$, og 20 er prisen, ikke bytteforholdet.",
    },
    {
      question: "Oppgaven ber om «tolk resultatet». Hva må svaret inneholde for å få full uttelling?",
      options: ["En økonomisk lesning av hva løsningen betyr — hva forbrukeren gjør og hvorfor, ikke bare tallene", "En gjentakelse av utregningen med ordene skrevet ut i stedet for symboler", "En vurdering av om resultatet virker realistisk ut fra egne erfaringer", "En kontroll av at budsjettbetingelsen holder med likhet i optimum"],
      explanation: "Tolkningen skal oversette matematikken til økonomi: hva velger konsumenten, hvordan avhenger valget av priser og inntekt, og hva betyr multiplikatoren. Budsjettkontrollen er nyttig, men er verifisering — ikke tolkning.",
    },
    {
      question: "Hva er det avgjørende siste steget når man har utledet førsteordensbetingelsene $u'_1 = \\lambda p_1$ og $u'_2 = \\lambda p_2$?",
      options: ["Å dele dem på hverandre, slik at $\\lambda$ elimineres", "Å sette $\\lambda = 1$ og løse for mengdene", "Å legge dem sammen og sette summen lik den samlede inntekten $m$", "Å derivere dem en gang til med hensyn på prisene"],
      explanation: "Divisjonen fjerner $\\lambda$ og gir tilpasningsbetingelsen $u'_1/u'_2 = p_1/p_2$. Å stoppe før dette steget er en av de vanligste tekniske feilene i sjangeren. $\\lambda$ kan ikke settes lik 1 — verdien bestemmes av problemet.",
    },
    {
      question: "Hva sier tilpasningsbetingelsen $u'_1/u'_2 = p_1/p_2$?",
      options: ["At konsumentens marginale betalingsvilje for vare 1, målt i vare 2, er lik det markedet krever for samme bytte", "At konsumenten bruker like mye penger på begge varer", "At marginalnytten av vare 1 er nøyaktig lik marginalnytten av vare 2, uansett hva de to prisene er", "At nytten er maksimal fordi begge marginalnyttene er null"],
      explanation: "Begge sider måles i enheter vare 2 per enhet vare 1: venstresiden er det konsumenten er villig til å gi, høyresiden det markedet krever. Like utgifter gjelder bare for bestemte nyttefunksjoner. Marginalnyttene er like bare hvis prisene er like, og de er aldri null under monotoni.",
    },
    {
      question: "En besvarelse skriver: «Betingelsen sier at MSB er lik prisforholdet.» Hva mangler for full uttelling?",
      options: ["Enhetene og forklaringen på hvorfor likhet betyr at ingen byttegevinst gjenstår", "En henvisning til at nyttefunksjonen er monoton, og at budsjettbetingelsen derfor holder med likhet", "Utregningen av Lagrange-multiplikatoren", "En tegning av budsjettmengden"],
      explanation: "Dette er feil #2 i bokas feilregister: formelen gjentatt som tolkning. Sensorveiledningene krever at hver side forklares i enheter, og at det sies hvorfor ulikhet ville gitt en lønnsom omdisponering. Monotoni og multiplikatorens verdi er andre poeng.",
    },
    {
      question: "Hva er tolkningen av Lagrange-multiplikatoren $\\lambda$ i konsumentproblemet?",
      options: ["Marginalnytten per krone, altså den ekstra nytten én krone mer i inntekt ville gitt", "Den optimale mengden av vare 1", "Prisforholdet mellom de to varene", "Andelen av inntekten som konsumenten bruker på vare 1 i den optimale tilpasningen, målt i prosent"],
      explanation: "Fra førsteordensbetingelsene er $\\lambda = u'_1/p_1 = u'_2/p_2$: marginalnytte per krone, lik i begge anvendelser. Den kalles skyggeprisen på budsjettet. Å levere $\\lambda$ som «svaret» på hvor mye konsumenten kjøper, er en klassisk sammenblanding.",
    },
    {
      question: "I optimum gjelder $u'_1/p_1 = u'_2/p_2$. Hva betyr det?",
      options: ["Den siste kronen gir like mye nytte uansett hvilken vare den brukes på", "Konsumenten liker de to varene like godt", "De to varene har samme pris", "Konsumenten kjøper nøyaktig like mange enheter av vare 1 som av vare 2"],
      explanation: "Likheten gjelder marginalnytte per krone, ikke total verdsetting, priser eller mengder. Ga den siste kronen mer nytte i den ene anvendelsen, ville konsumenten flyttet kroner dit — og da var utgangspunktet ikke optimalt.",
    },
    {
      question: "Hva er MSB, uttrykt ved nyttefunksjonen?",
      options: ["$u'_1/u'_2$", "$u'_2/u'_1$", "$u'_1 \\cdot u'_2$", "$u(c_1,c_2)/m$"],
      explanation: "MSB (marginal substitusjonsbrøk) er forholdet mellom marginalnytten av vare 1 og marginalnytten av vare 2, og er tallverdien av helningen på indifferenskurven. Den omvendte brøken svarer på det motsatte spørsmålet og gir feil sammenlikning mot $p_1/p_2$.",
    },
    {
      question: "Hvilken enhet har MSB når vare 1 er kilo mat og vare 2 er kollektivbilletter?",
      options: ["Billetter per kilo", "Kilo per billett", "Kroner per kilo", "Kroner per billett"],
      explanation: "MSB sier hvor mange enheter av vare 2 konsumenten er villig til å gi fra seg for én enhet mer av vare 1 — altså billetter per kilo. Det er samme enhet som prisforholdet $p_1/p_2$, og det er nettopp derfor de to kan settes lik hverandre.",
    },
    {
      question: "En konsument er i et punkt på budsjettlinjen der $\\text{MSB} > p_1/p_2$. Hva bør hun gjøre?",
      options: ["Kjøpe mer av vare 1 og mindre av vare 2", "Kjøpe mindre av vare 1 og mer av vare 2", "Kjøpe mindre av begge varer og spare resten", "Ingenting — punktet er optimalt"],
      explanation: "Hun verdsetter én ekstra enhet vare 1 høyere enn markedet krever, så byttet er lønnsomt: gi fra seg $p_1/p_2$ enheter vare 2 og få én enhet vare 1. Å spare er utelukket av monotoni. Bevegelsen stopper når MSB har falt til prisforholdet.",
    },
    {
      question: "En konsument er i et punkt på budsjettlinjen der $\\text{MSB} < p_1/p_2$. Hva kjennetegner indifferenskurven gjennom punktet?",
      options: ["Den er slakere enn budsjettlinjen der", "Den er brattere enn budsjettlinjen der", "Den tangerer budsjettlinjen der", "Den ligger helt utenfor budsjettmengden"],
      explanation: "MSB er tallverdien av indifferenskurvens helning. Er MSB mindre enn prisforholdet, er kurven slakere enn linjen, og konsumenten bør bevege seg mot mindre $c_1$. Tangering krever likhet, som er nettopp det som ikke gjelder her.",
    },
    {
      question: "Hvorfor kan et punkt strengt innenfor budsjettlinjen aldri være optimalt?",
      options: ["Fordi monotone preferanser gjør at konsumenten kan kjøpe mer av minst én vare med de ubrukte kronene", "Fordi MSB ikke er definert i slike punkter", "Fordi indifferenskurvene per definisjon ikke kan skjære inn i budsjettmengden når preferansene er konvekse", "Fordi Lagrange-metoden bare gjelder på randen"],
      explanation: "Ubrukte kroner kan alltid omsettes i mer av en vare, og under monotoni gir det høyere nytte. MSB er definert overalt, indifferenskurver går gjennom hele mengden, og Lagrange-metoden er ikke begrenset til randen — den finner randløsningen fordi budsjettet inngår som bibetingelse.",
    },
    {
      question: "Hva skjer med budsjettlinjen når $p_1$ faller mens $p_2$ og $m$ er uendret?",
      options: ["Den roterer utover om skjæringspunktet på vare 2-aksen og blir slakere", "Den flytter seg parallelt utover", "Den roterer innover om skjæringspunktet på vare 1-aksen og blir samtidig brattere", "Den blir brattere og skjærer vare 2-aksen lenger opp"],
      explanation: "Skjæringen $m/p_2$ er upåvirket av $p_1$, mens $m/p_1$ øker — linjen roterer altså om punktet på vare 2-aksen, og helningen $-p_1/p_2$ blir mindre bratt. Parallellskift oppstår bare når $m$ endres alene.",
    },
    {
      question: "Inntekten $m$ dobles mens begge priser er uendret. Hva skjer?",
      options: ["Budsjettlinjen flytter seg parallelt utover, med uendret helning", "Budsjettlinjen roterer om skjæringspunktet på vare 1-aksen", "Budsjettlinjen blir brattere", "Budsjettlinjen er uendret"],
      explanation: "Begge skjæringspunkter $m/p_1$ og $m/p_2$ dobles, mens helningen $-p_1/p_2$ ikke inneholder $m$ og derfor er uendret. Rotasjon krever at én pris endres; uendret linje krever at $m$ og prisene endres proporsjonalt.",
    },
    {
      question: "Hva skjer med konsumentens tilpasning hvis $m$, $p_1$ og $p_2$ alle dobles samtidig?",
      options: ["Ingenting — tilpasningen er uendret", "Konsumenten kjøper dobbelt så mye av begge varer", "Konsumenten kjøper halvparten så mye av begge varer", "Tilpasningen avhenger av nyttefunksjonens form"],
      explanation: "Budsjettbetingelsen $2p_1c_1 + 2p_2c_2 = 2m$ forkortes til den opprinnelige. Både relativprisen og realinntekten er uendret, og siden bare disse inngår i problemet, blir tilpasningen den samme uansett nyttefunksjon.",
    },
    {
      question: "Hvilken forutsetning om preferansene sikrer at tangeringspunktet faktisk er et maksimum og ikke et minimum?",
      options: ["Konveksitet, altså avtakende MSB langs indifferenskurven", "Monotoni, altså at mer er bedre", "At nyttefunksjonen er kontinuerlig", "At begge marginalnytter er positive"],
      explanation: "Med avtakende MSB skifter differansen mellom MSB og det konstante prisforholdet fortegn nøyaktig én gang, slik at tangeringspunktet er et entydig maksimum. Monotoni gir budsjettlikheten, men utelukker ikke et tangeringsminimum ved konkave indifferenskurver.",
    },
    {
      question: "Er tangeringsbetingelsen tilstrekkelig for optimum?",
      options: ["Nei — den er nødvendig for et indre optimum, men krever konvekse preferanser for å garantere maksimum", "Ja — tangering betyr alltid at nytten er maksimert, uansett hvilken form indifferenskurvene måtte ha i punktet", "Nei — den er verken nødvendig eller relevant", "Ja, men bare når prisene er like"],
      explanation: "Førsteordensbetingelsene er nødvendige for et indre optimum. Uten konveksitet kan tangeringspunktet være et minimum langs budsjettlinjen, med optimum i et hjørne. Betingelsen er altså relevant, men ikke i seg selv tilstrekkelig.",
    },
    {
      question: "En besvarelse leverer en pen figur med tangering, men ingen Lagrange-utledning. Hva blir konsekvensen?",
      options: ["Ikke full uttelling — sensorveiledningen krever matematisk utledning i optimeringsoppgaver", "Full uttelling, siden figuren viser nøyaktig samme resultat som en fullstendig utledning ville gitt", "Full uttelling, forutsatt at punktene er navngitt", "Ingen uttelling i det hele tatt"],
      explanation: "Dette er feil #1 i bokas feilregister, påpekt eksplisitt i V2025-veiledningen: figuren er støtte, aldri erstatning. Samtidig gis det raus delvis uttelling for riktig metode, så svaret er ikke null poeng.",
    },
    {
      question: "En konsument har $u = c_1c_2$, $p_1 = 4$, $p_2 = 2$ og $m = 40$. Hva er optimal $c_1$?",
      options: ["5", "10", "8", "20"],
      explanation: "MSB er $c_2/c_1$, så betingelsen gir $c_2/c_1 = 4/2 = 2$, altså $c_2 = 2c_1$. Innsatt i budsjettet: $4c_1 + 2(2c_1) = 8c_1 = 40$, som gir $c_1 = 5$ og $c_2 = 10$. Svaret 10 er $c_2$, og 20 er antall enheter hvis alt brukes på vare 2.",
    },
    {
      question: "En konsument har $u = c_1^{1/2}c_2^{1/2}$, $p_1 = 5$, $p_2 = 5$ og $m = 100$. Hva er MSB i optimum?",
      options: ["1", "0,5", "2", "20"],
      explanation: "MSB i optimum er alltid lik prisforholdet, her $5/5 = 1$. Det følger direkte av tilpasningsbetingelsen og krever ingen utregning av mengdene (som blir $c_1 = c_2 = 10$).",
    },
    {
      question: "Hva er budsjettmengden?",
      options: ["Alle handlekurver konsumenten har råd til, altså trekanten under budsjettlinjen", "Alle handlekurver som gir samme nytte", "Selve budsjettlinjen, uten punktene innenfor", "Alle handlekurver som ligger på den høyeste indifferenskurven konsumenten er i stand til å oppnå"],
      explanation: "Budsjettmengden er $\\{(c_1,c_2) \\ge 0 : p_1c_1 + p_2c_2 \\le m\\}$ — hele trekanten mellom linjen og aksene. Kurver med samme nytte utgjør en indifferenskurve, og linjen alene er bare randen av mengden.",
    },
    {
      question: "I hvor mange av de sju ordinære eksamenssettene i arkivet forekommer nyttemaksimering med tolkningskrav?",
      options: ["6 av 7 sett", "4 av 7 sett", "7 av 7 sett", "3 av 7 sett"],
      explanation: "Sjangeren finnes i V2018, V2019, V2020, V2023, V2024 og V2025 — altså 6 av 7, eller 86 %. Det eneste ordinære settet uten den er V2022. Full frekvens (7 av 7) gjelder generell likevekt og Pareto-effektivitet, ikke denne sjangeren.",
    },
    {
      question: "Hvilken rekkefølge følger bokas tretrinnsmal i optimeringssvar?",
      options: ["Sett opp problemet formelt, utled steg for steg, oversett til bytteforhold i enheter", "Tegn figuren, les av optimum, kontroller med regning", "Utled etterspørselsfunksjonen, deriver den med hensyn på inntekten, og tegn til slutt figuren", "Sett opp budsjettet, gjett en løsning, kontroller at den er tillatt"],
      explanation: "Malen speiler sensorenes dokumenterte krav: formelt oppsett med begrunnet likhet, deretter utledningen, og til slutt tolkningen i enheter — med figuren som støtte helt til sist. Å starte med figuren er nettopp feilen som koster uttelling.",
    },
  ],
  'econ2220-2-2': [
    {
      question: "Hva er etterspørselen etter vare 1 for nyttefunksjonen $u = c_1^{a}c_2^{1-a}$?",
      options: ["$c_1 = am/p_1$", "$c_1 = am/p_2$", "$c_1 = (1-a)m/p_1$", "$c_1 = a\\,p_1/m$"],
      explanation: "Utledningen gir $p_1c_1 = am$, altså $c_1 = am/p_1$. Eksponenten på vare 1 er budsjettandelen for vare 1, og prisen på vare 1 står i nevneren. Det tredje alternativet er etterspørselen etter vare 2 med feil pris.",
    },
    {
      question: "Hvorfor gir log-formen $a\\ln c_1 + (1-a)\\ln c_2$ samme tilpasning som potensformen $c_1^{a}c_2^{1-a}$?",
      options: ["Fordi logaritmen er strengt voksende, slik at rangeringen av handlekurver bevares", "Fordi de to funksjonene har nøyaktig de samme marginalnyttene i hvert enkelt punkt", "Fordi log-formen alltid gir høyere nyttetall enn potensformen", "Fordi budsjettbetingelsen er den samme i de to tilfellene"],
      explanation: "En strengt voksende omregning er en monoton transformasjon: rangeringen, og dermed preferansene, er uendret. Marginalnyttene er faktisk ulike — bare forholdet mellom dem er likt. At budsjettet er felles, er ikke nok i seg selv.",
    },
    {
      question: "Hva blir MSB for $u = c_1^{a}c_2^{1-a}$?",
      options: ["$\\frac{a}{1-a}\\cdot\\frac{c_2}{c_1}$", "$\\frac{1-a}{a}\\cdot\\frac{c_2}{c_1}$", "$\\frac{a}{1-a}\\cdot\\frac{c_1}{c_2}$", "$\\frac{a}{1-a}$"],
      explanation: "Marginalnyttene $a\\,c_1^{a-1}c_2^{1-a}$ og $(1-a)c_1^{a}c_2^{-a}$ gir forholdet $\\frac{a}{1-a}\\cdot\\frac{c_2}{c_1}$. De to første alternativene forveksles lett; kontrollen er at MSB må avta når $c_1$ øker, altså at $c_1$ står i nevneren.",
    },
    {
      question: "Hvilket triks får algebraen i Cobb-Douglas-utledningen til å kollapse?",
      options: ["At eksponentene summerer seg til 1, slik at $1 + \\frac{1-a}{a} = \\frac{1}{a}$", "At man setter $\\lambda = 1$ før uttrykket for utgiften settes inn i budsjettbetingelsen", "At man antar at de to prisene er like store", "At man deriverer budsjettbetingelsen med hensyn på inntekten"],
      explanation: "Parentesen $1 + \\frac{1-a}{a}$ har fellesnevner $a$ og teller $a + (1-a) = 1$, altså $1/a$. Uten denne forkortingen blir regningen lang. $\\lambda$ kan ikke settes til 1, og prisene trenger ikke være like.",
    },
    {
      question: "En konsument har $u = 0{,}6\\ln c_1 + 0{,}4\\ln c_2$, $p_1 = 30$, $p_2 = 20$ og $m = 6\\,000$. Hva er optimal $c_1$?",
      options: ["120", "200", "90", "3600"],
      explanation: "$c_1 = 0{,}6\\cdot 6\\,000/30 = 3\\,600/30 = 120$. Svaret 200 er $m/p_1$, altså hva hun kunne kjøpt med hele inntekten, og 3 600 er utgiften i kroner — ikke antall enheter.",
    },
    {
      question: "Hva er budsjettandelen for vare 1 når $u = c_1^{0{,}25}c_2^{0{,}75}$?",
      options: ["25 % av inntekten", "75 % av inntekten", "Andelen avhenger av prisene", "Andelen avhenger av inntektsnivået"],
      explanation: "Utgiften er $p_1c_1 = 0{,}25m$, altså eksponenten. For Cobb-Douglas er andelen uavhengig av både priser og inntekt — det er formens definerende egenskap, og en god rimelighetskontroll på utledningen.",
    },
    {
      question: "Hvordan viser man at vare 1 er et normalt gode når $c_1 = am/p_1$?",
      options: ["Ved å derivere med hensyn på $m$ og vise at $a/p_1 > 0$", "Ved å vise at $c_1$ faller når $p_1$ stiger", "Ved å påpeke at konsumenten kjøper mer når hun blir rikere", "Ved å tegne budsjettlinjen for to ulike inntekter"],
      explanation: "Normalitet er en påstand om fortegnet til $\\partial c_1/\\partial m$, og sensor krever derivasjonen. Verbal påstand gir bare delvis uttelling — eksplisitt i veiledningene for V2023 og V2025. At $c_1$ faller i egen pris, er en annen egenskap.",
    },
    {
      question: "Hva er $\\partial c_1/\\partial m$ for Cobb-Douglas-etterspørselen?",
      options: ["$a/p_1$", "$am/p_1^2$", "$-am/p_1^2$", "$a$"],
      explanation: "$c_1 = am/p_1$ er lineær i $m$ med $a/p_1$ som konstant faktor, så den inntektsderiverte er $a/p_1 > 0$. Uttrykket $-am/p_1^2$ er derivasjonen med hensyn på $p_1$, altså egenpriseffekten.",
    },
    {
      question: "Hvorfor er $\\partial c_1/\\partial p_2 = 0$ for Cobb-Douglas?",
      options: ["Fordi vridningen mot det relativt billigere godet og den lavere realinntekten er like store og motsatte", "Fordi de to godene inngår helt uavhengig av hverandre i konsumentens preferanser, uten noen kobling mellom dem", "Fordi prisen på vare 2 ikke påvirker budsjettmengden", "Fordi konsumenten alltid kjøper like mange enheter av begge goder"],
      explanation: "To virkninger går motsatt vei og er nøyaktig like store for denne funksjonsformen. Prisen på vare 2 påvirker faktisk budsjettmengden sterkt — konsumenten kommer dårligere ut, men hele tilpasningen skjer i vare 2.",
    },
    {
      question: "Betyr det at konsumenten er upåvirket når $p_2$ stiger og $c_1$ er uendret?",
      options: ["Nei — budsjettmengden krymper, og hun havner på en lavere indifferenskurve", "Ja — når mengden av vare 1 er uendret, er også nyttenivået uendret", "Ja, så lenge inntekten er den samme", "Nei — men bare hvis vare 2 er et mindreverdig gode"],
      explanation: "Uendret mengde av det ene godet er ikke det samme som uendret velferd. Hele tilpasningen til den nye prisen skjer i vare 2, som hun nå kjøper mindre av, og nyttenivået faller. Mindreverdighet har ingenting med saken å gjøre.",
    },
    {
      question: "Hva er Lagrange-multiplikatoren for log-formen $u = a\\ln c_1 + (1-a)\\ln c_2$?",
      options: ["$\\lambda = 1/m$", "$\\lambda = a/m$", "$\\lambda = m$", "$\\lambda = a/p_1$"],
      explanation: "Fra $a/c_1 = \\lambda p_1$ og $p_1c_1 = am$ følger $\\lambda = a/(am) = 1/m$. Regningen via den andre betingelsen gir samme svar, som den skal. Verdien gjelder kun log-formen med eksponenter som summerer seg til 1.",
    },
    {
      question: "Hva er den økonomiske tolkningen av $\\lambda = 1/m$?",
      options: ["At en ekstra krone er mer verdt jo lavere inntekten er", "At konsumenten bruker hele inntekten sin", "At nytten øker proporsjonalt med inntekten", "At prisene ikke påvirker nyttenivået"],
      explanation: "$\\lambda$ er marginalnytten av en ekstra krone, og $1/m$ faller når $m$ vokser — altså avtakende grensenytte av penger. At hele inntekten brukes, følger av monotoni og har ingenting med multiplikatorens verdi å gjøre.",
    },
    {
      question: "Gjelder $\\lambda = 1/m$ også for potensformen $c_1^{a}c_2^{1-a}$?",
      options: ["Nei — tilpasningen er den samme, men $\\lambda$ avhenger av hvordan nytten er skalert", "Ja — begge de to funksjonsformene gir alltid nøyaktig $\\lambda = 1/m$", "Nei — potensformen gir en negativ multiplikator", "Ja, forutsatt at eksponentene summerer seg til 1"],
      explanation: "Multiplikatoren måler nytteøkning per krone, og nytteøkning avhenger av skalaen. De to formene rangerer likt, men tildeler ulike tall, så $\\lambda$ blir ulik. Den er alltid positiv under monotoni, så negativ multiplikator er utelukket.",
    },
    {
      question: "En oppgave gir $u = c_1^{2}c_2^{3}$. Hva er budsjettandelen for vare 1?",
      options: ["To femdeler", "To", "En tredjedel", "Tre femdeler"],
      explanation: "Når eksponentene ikke summerer seg til 1, er andelen $a/(a+b) = 2/(2+3) = 2/5$. Å bruke 2 direkte ville gitt en utgift på $2m$, altså dobbelt så mye som hele inntekten — rimelighetskontrollen avslører feilen straks. Tre femdeler er andelen for vare 2.",
    },
    {
      question: "Hva er den generelle etterspørselen når $u = c_1^{a}c_2^{b}$ med $a + b \\ne 1$?",
      options: ["$c_1 = \\frac{a}{a+b}\\cdot\\frac{m}{p_1}$", "$c_1 = \\frac{a}{b}\\cdot\\frac{m}{p_1}$", "$c_1 = \\frac{a+b}{a}\\cdot\\frac{m}{p_1}$", "$c_1 = \\frac{am}{bp_1}$"],
      explanation: "Utledningen gir budsjettandelen $a/(a+b)$. Snarveien er å ta den monotone transformasjonen $u^{1/(a+b)}$, som normaliserer eksponentene slik at andelene kan leses direkte. Det tredje alternativet er den omvendte brøken og gir en utgift større enn inntekten.",
    },
    {
      question: "En konsument har $u = c_1^{1/3}c_2^{1/6}$, $p_1 = 6$, $p_2 = 4$ og $m = 180$. Hva er optimal $c_1$?",
      options: ["20", "10", "30", "60"],
      explanation: "Her er $a + b = 1/2$, så budsjettandelen for vare 1 er $(1/3)/(1/2) = 2/3$. Da er $c_1 = (2/3)\\cdot 180/6 = 20$. Svaret 30 er $m/p_1$, og 10 kommer av å bruke $a = 1/3$ direkte uten normalisering.",
    },
    {
      question: "Hva er inntektselastisiteten for Cobb-Douglas-etterspørselen?",
      options: ["1", "0", "$a$", "$-1$"],
      explanation: "$E_m = \\frac{\\partial c_1}{\\partial m}\\cdot\\frac{m}{c_1} = \\frac{a}{p_1}\\cdot\\frac{m}{am/p_1} = 1$. Etterspørselen vokser proporsjonalt med inntekten, og det er nettopp derfor budsjettandelen er konstant. Verdien $-1$ er egenpriselastisiteten.",
    },
    {
      question: "Kan Cobb-Douglas-preferanser gi et mindreverdig gode?",
      options: ["Nei — $\\partial c_1/\\partial m = a/p_1$ er alltid positiv", "Ja, dersom eksponenten $a$ er negativ", "Ja, dersom prisen på det andre godet er høy nok", "Nei — men bare når eksponentene summerer seg til 1"],
      explanation: "Både $a$ og $p_1$ er positive per forutsetning, så den inntektsderiverte kan aldri bli negativ. Eksponentene må være positive for at funksjonen skal være monoton, og normaliseringen endrer ikke fortegnet.",
    },
    {
      question: "Hva er en Engel-kurve, og hvordan ser den ut for Cobb-Douglas?",
      options: ["Sammenhengen mellom inntekt og etterspurt mengde — en rett linje gjennom origo", "Sammenhengen mellom prisen på godet og etterspurt mengde — en fallende, konveks kurve", "Sammenhengen mellom de to mengdene langs budsjettlinjen", "Sammenhengen mellom nyttenivået og inntekten — en logaritmisk voksende kurve"],
      explanation: "Engel-kurven har inntekt på den vannrette aksen og mengde på den loddrette. For Cobb-Douglas er $c_1 = am/p_1$ lineær i $m$ og går gjennom origo med helning $a/p_1$. Pris-mengde-sammenhengen er etterspørselskurven, ikke Engel-kurven.",
    },
    {
      question: "Hva betyr det at Cobb-Douglas-preferanser er homotetiske?",
      options: ["At forholdet mellom de valgte mengdene bare avhenger av prisforholdet, ikke av inntekten", "At nyttefunksjonen er homogen av grad null i de to konsummengdene og i inntekten", "At de to godene alltid kjøpes i like store mengder", "At preferansene er de samme for alle konsumenter"],
      explanation: "Fra $c_1/c_2 = \\frac{a p_2}{(1-a)p_1}$ ser man at inntekten ikke inngår, så en inntektsdobling dobler begge mengder. Det er etterspørselen, ikke nyttefunksjonen, som er homogen av grad null i priser og inntekt.",
    },
    {
      question: "En besvarelse skriver bare «godet er normalt fordi man kjøper mer av det når inntekten stiger». Hva er konsekvensen?",
      options: ["Bare delvis uttelling — dette er dokumentert i to sensorveiledninger", "Full uttelling, ettersom den verbale forklaringen i seg selv er økonomisk korrekt", "Full uttelling, forutsatt at etterspørselen er utledet riktig først", "Ingen uttelling i det hele tatt"],
      explanation: "Setningen gjentar hva normalitet betyr, uten å vise at det gjelder for denne etterspørselen. Både V2023- og V2025-veiledningen nevner dette eksplisitt. Sensor gir raus delvis uttelling ved riktig metode, så det er ikke null poeng.",
    },
    {
      question: "Hva er egenpriseffekten $\\partial c_1/\\partial p_1$ for Cobb-Douglas?",
      options: ["$-am/p_1^2$, altså alltid negativ", "$a/p_1$, som alltid er positiv for tillatte parameterverdier", "Null", "$-a/p_1$, med fortegn avhengig av $a$"],
      explanation: "Deriverer man $c_1 = am\\,p_1^{-1}$ med hensyn på $p_1$, får man $-am\\,p_1^{-2}$. Fortegnet er alltid negativt, så Cobb-Douglas kan aldri gi et Giffen-gode. Uttrykket $a/p_1$ er den inntektsderiverte.",
    },
    {
      question: "I hvor mange av de tre siste ordinære eksamenssettene er Cobb-Douglas-utledningen testet?",
      options: ["Alle tre", "To av tre — bare V2024 og V2025", "Ett av tre — bare i V2025", "Ingen av de tre settene"],
      explanation: "Sjangeren er fast i V2023, V2024 og V2025. Den forekommer derimot ikke i de eldre settene fra 2018 til 2022, som hadde en annen profil med spillteori og atferdsøkonomi. Utsatt-settene har den i 1 av 4.",
    },
    {
      question: "Hva er den beste rimelighetskontrollen på en Cobb-Douglas-utledning?",
      options: ["Sjekke at utgiften $p_1c_1$ blir $am$", "Sjekke at $c_1$ blir større enn $c_2$", "Sjekke at MSB blir større enn 1", "Sjekke at nyttenivået blir positivt"],
      explanation: "Budsjettandels-resultatet $p_1c_1 = am$ er en uavhengig test som fanger de fleste algebrafeil, og den kombineres med å sette tilpasningen inn i budsjettet. Hvilken mengde som er størst, og om MSB er over 1, avhenger av prisene og sier ingenting om regningen er riktig.",
    },
    {
      question: "Hva kjennetegner en kvasi-lineær nyttefunksjon som $u = 2\\sqrt{c_1} + c_2$?",
      options: ["Etterspørselen etter vare 1 avhenger bare av prisforholdet, ikke av inntekten", "Etterspørselen etter begge de to godene utgjør faste andeler av inntekten hennes", "Marginalnytten av vare 1 er konstant", "Godene er perfekte substitutter"],
      explanation: "Marginalnytten av vare 2 er konstant lik 1, så betingelsen blir $1/\\sqrt{c_1} = p_1/p_2$, altså $c_1 = (p_2/p_1)^2$ uten $m$. Hele inntektsøkningen går til vare 2. Faste budsjettandeler er Cobb-Douglas' særtrekk, ikke kvasi-lineærs.",
    },
  ],
  'econ2220-2-3': [
    {
      question: "Hva er Slutsky-kompensasjonen?",
      options: ["Inntektstillegget som gir akkurat råd til den gamle godekurven til de nye prisene", "Inntektstillegget som gir konsumenten akkurat samme nyttenivå som hun hadde før prisendringen", "Inntektstillegget som holder utgiften til vare 1 uendret i kroner", "Inntektstillegget som gjør at konsumenten kjøper samme mengde av vare 1 som før"],
      explanation: "Slutsky-varianten kompenserer til samme godekurv, og er kursets standard. Kompensasjon til samme nyttenivå er den andre konvensjonen, som godtas men ikke er hovedsporet. De to siste alternativene beskriver ingen av dem.",
    },
    {
      question: "Hvor mye er Slutsky-kompensasjonen når $p_1$ stiger fra 2 til 3 og konsumenten kjøpte 300 enheter?",
      options: ["300 kroner", "100 kroner", "900 kroner", "600 kroner"],
      explanation: "Kompensasjonen er $(p_1' - p_1)c_1^0 = 1\\cdot 300 = 300$ kroner. Kontrollen er at den gamle kurven skal koste nøyaktig $m + 300$ til de nye prisene. Beløpet 900 er den nye utgiften på vare 1, ikke kompensasjonen.",
    },
    {
      question: "Hvilken av de to effektene isolerer virkningen av endret relativpris?",
      options: ["Substitusjonseffekten", "Inntektseffekten", "Totaleffekten", "Krysspriseffekten"],
      explanation: "I substitusjonsskrittet er kjøpekraften reparert ved kompensasjonen, så det eneste som er endret, er bytteforholdet mellom varene. Inntektseffekten isolerer det motsatte: prisene står stille, bare kjøpekraften endres.",
    },
    {
      question: "Hva er fortegnet på substitusjonseffekten når prisen på vare 1 stiger?",
      options: ["Aldri positivt", "Alltid positivt", "Avhenger av om vare 1 er normalt", "Avhenger av budsjettandelen til vare 1"],
      explanation: "Substitusjonseffekten er aldri positiv for godet som ble dyrere. Argumentet er avslørte preferanser og krever ingen antakelser om godets art. Budsjettandelen påvirker effektens størrelse, ikke fortegnet.",
    },
    {
      question: "Hvilket argument brukes for å begrunne substitusjonseffektens fortegn?",
      options: ["Avslørte preferanser — den gamle kurven er fortsatt overkommelig, men velges ikke", "At nyttefunksjonen er konveks og deriverbar overalt i budsjettmengden, slik at tangering finnes", "At begge goder er normale, slik at etterspørselen faller", "At budsjettbetingelsen holder med likhet på grunn av monotoni"],
      explanation: "Argumentet bruker bare at konsumenten velger det hun helst vil ha. Derfor gjelder resultatet også for mindreverdige goder og Giffen-goder. Konveksitet og normalitet er andre forutsetninger, som brukes til andre konklusjoner.",
    },
    {
      question: "Hva bestemmer fortegnet på inntektseffekten?",
      options: ["Om godet er normalt eller mindreverdig", "Om prisen steg eller falt", "Om preferansene er konvekse", "Om budsjettandelen er over eller under en halv"],
      explanation: "Inntektseffekten er virkningen av en inntektsendring, og fortegnet følger av $\\partial c_1/\\partial m$. Prisretningen bestemmer om kompensasjonen er positiv eller negativ, men det er godets art som avgjør hvordan etterspørselen reagerer.",
    },
    {
      question: "En konsument har $u = c_1^{0{,}5}c_2^{0{,}5}$, $m = 1\\,200$, $p_1 = 2$ og $p_2 = 5$. Hva er den kompenserte inntekten når $p_1$ stiger til 3?",
      options: ["1 500", "1 200", "1 800", "1 350"],
      explanation: "Utgangspunktet er $c_1 = 300$ og $c_2 = 120$. Den gamle kurven koster $3\\cdot 300 + 5\\cdot 120 = 1\\,500$ til de nye prisene, som også er $m + 1\\cdot 300$. Uendret inntekt ville betydd ingen kompensasjon i det hele tatt.",
    },
    {
      question: "Med utgangspunktet over — hva blir substitusjonseffekten på $c_1$?",
      options: ["$-50$ enheter", "$-100$ enheter", "$-25$ enheter", "$+50$ enheter"],
      explanation: "Punkt $A$ er $c_1 = 300$ og punkt $B$ er $c_1 = 0{,}5\\cdot 1\\,500/3 = 250$, altså en effekt på $-50$. Tallet $-100$ er totaleffekten, som også inkluderer inntektseffekten på $-50$.",
    },
    {
      question: "Gjennom hvilket punkt skal den kompenserte budsjettlinjen gå?",
      options: ["Gjennom det gamle konsumpunktet $A$", "Gjennom det nye konsumpunktet $C$", "Gjennom skjæringspunktet mellom de to budsjettlinjene på aksen", "Gjennom origo"],
      explanation: "Kompensasjonen er definert ved at den gamle kurven skal være akkurat overkommelig, altså at linjen går gjennom $A$. En linje gjennom $C$ med ny helning er den nye budsjettlinjen selv, og da kollapser hele dekomponeringen.",
    },
    {
      question: "Hvilken helning har den kompenserte budsjettlinjen?",
      options: ["Den nye helningen, $-p_1'/p_2$", "Den gamle helningen, $-p_1/p_2$", "Gjennomsnittet av gammel og ny helning", "Helningen på indifferenskurven gjennom $A$"],
      explanation: "Poenget med kompensasjonsskrittet er å isolere virkningen av det nye prisforholdet, så linjen må ha ny helning. Har den gammel helning, måler du ingen substitusjonseffekt i det hele tatt.",
    },
    {
      question: "Hvilken bevegelse i standardfiguren er inntektseffekten?",
      options: ["$B \\to C$", "$A \\to B$", "$A \\to C$", "$C \\to A$"],
      explanation: "$A \\to B$ er substitusjonseffekten (ny helning, gammel kurv overkommelig), $B \\to C$ er inntektseffekten (parallelt skift når kompensasjonen trekkes tilbake). $A \\to C$ er totaleffekten.",
    },
    {
      question: "Hvordan skrives Slutsky-likningen for en endring i $p_1$?",
      options: ["$\\frac{\\partial c_1}{\\partial p_1} = \\frac{\\partial c_1^s}{\\partial p_1} - c_1\\frac{\\partial c_1}{\\partial m}$", "$\\frac{\\partial c_1}{\\partial p_1} = \\frac{\\partial c_1^s}{\\partial p_1} + c_1\\frac{\\partial c_1}{\\partial m}$", "$\\frac{\\partial c_1}{\\partial p_1} = \\frac{\\partial c_1^s}{\\partial p_1} - m\\frac{\\partial c_1}{\\partial m}$", "$\\frac{\\partial c_1}{\\partial p_1} = \\frac{\\partial c_1^s}{\\partial m} - c_1\\frac{\\partial c_1}{\\partial p_1}$"],
      explanation: "Inntektsleddet skaleres med mengden $c_1$ — det er hvor mye kjøpekraft som går tapt per krone prisøkning — og har minustegn fordi tapt kompensasjon virker som en inntektsnedgang. Å skalere med $m$ i stedet gir feil størrelsesorden.",
    },
    {
      question: "Hva er fortegnet på totaleffekten av en prisøkning når godet er normalt?",
      options: ["Entydig negativt, siden begge ledd trekker nedover", "Ubestemt, siden leddene kan trekke i motsatt retning", "Entydig positivt, siden inntektsleddet dominerer", "Null, siden leddene er like store og motsatte"],
      explanation: "Substitusjonsleddet er aldri positivt, og for et normalt gode bidrar inntektsleddet også negativt. Ubestemthet oppstår først når godet er mindreverdig. Nullresultatet gjelder Cobb-Douglas' krysspriseffekt, ikke egenpriseffekten.",
    },
    {
      question: "Hva er fortegnet på totaleffekten av en prisøkning når godet er mindreverdig?",
      options: ["Ubestemt — leddene trekker i motsatt retning", "Entydig positivt for alle parameterverdier", "Entydig negativt for alle parameterverdier", "Null"],
      explanation: "Inntektsleddet snur fortegn og trekker oppover, mens substitusjonsleddet fortsatt trekker nedover. Hvilket som dominerer, avhenger av informasjon modellen ikke gir. Blir totaleffekten positiv, kalles godet et Giffen-gode — men det er et spesialtilfelle, ikke regelen.",
    },
    {
      question: "Hva er substitusjonsleddet for Cobb-Douglas-etterspørselen?",
      options: ["$\\frac{am(a-1)}{p_1^{2}}$", "$\\frac{am}{p_1^{2}}$", "$-\\frac{a^{2}m}{p_1^{2}}$", "$\\frac{a}{p_1}$"],
      explanation: "Derivasjon av den kompenserte etterspørselen gir $\\frac{am(a-1)}{p_1^2}$, som er strengt negativt siden $0 < a < 1$. Uttrykket $-a^2m/p_1^2$ er inntektsleddet, og $a/p_1$ er den inntektsderiverte.",
    },
    {
      question: "Hvor stor andel av Cobb-Douglas' totaleffekt utgjør substitusjonsleddet?",
      options: ["Andelen $1-a$", "Andelen $a$", "Alltid halvparten", "Hele effekten"],
      explanation: "Substitusjonsleddet er $am(a-1)/p_1^2$ og totaleffekten $-am/p_1^2$, så forholdet er $1-a$. Inntektsleddet utgjør andelen $a$, altså budsjettandelen: er varen en stor budsjettpost, dominerer kjøpekraftsvirkningen.",
    },
    {
      question: "Hvorfor er $\\partial c_1/\\partial p_2 = 0$ for Cobb-Douglas, uttrykt med de to effektene?",
      options: ["Substitusjonsleddet er positivt og inntektsleddet like stort og negativt", "Begge ledd er null, siden godene er uavhengige", "Substitusjonsleddet er negativt og inntektsleddet like stort og positivt", "Inntektsleddet er null, siden inntekten ikke endres"],
      explanation: "Når $p_2$ stiger, vrir konsumenten seg mot vare 1 (positivt substitusjonsledd), mens lavere realinntekt trekker ned (negativt inntektsledd for et normalt gode). For Cobb-Douglas er de nøyaktig like store. Inntektsleddet er ikke null: realinntekten faller selv om kronebeløpet er uendret.",
    },
    {
      question: "En prisøkning på vare 2 gir uendret $c_1$. Er konsumenten upåvirket?",
      options: ["Nei — budsjettmengden krymper, og nyttenivået faller", "Ja — når mengden av vare 1 er uendret, er nytten uendret", "Ja, forutsatt at hun også kjøper samme mengde av vare 2", "Nei — men bare hvis vare 1 er et mindreverdig gode"],
      explanation: "Alle kurver hun kan velge etter prisøkningen, kunne hun også valgt før, mens noen av de gamle er falt bort. Hele tilpasningen skjer i vare 2, som hun kjøper mindre av. Godets art har ingenting med velferdskonklusjonen å gjøre.",
    },
    {
      question: "Hva kreves for at et gode skal være et Giffen-gode?",
      options: ["At det er mindreverdig, og at inntektsleddet dominerer substitusjonsleddet", "At substitusjonseffekten er positiv for godet som er blitt dyrere", "At det er normalt, og at budsjettandelen er stor", "At de to godene er perfekte substitutter"],
      explanation: "Mindreverdighet snur inntektsleddets fortegn, men den må i tillegg være sterk nok til å overdøve substitusjonsleddet. Substitusjonseffekten kan aldri være positiv for godet som ble dyrere — det er nettopp derfor Giffen krever et sterkt inntektsledd.",
    },
    {
      question: "Kan et Cobb-Douglas-gode være et Giffen-gode?",
      options: ["Nei — $\\partial c_1/\\partial p_1 = -am/p_1^{2} < 0$ alltid", "Ja, dersom budsjettandelen $a$ er nær 1", "Ja, dersom prisen på det andre godet er lav nok", "Nei — men bare når eksponentene summerer seg til 1"],
      explanation: "Etterspørselen faller alltid i egen pris for Cobb-Douglas, og godene er alltid normale. Verken budsjettandelen eller den andre prisen kan snu fortegnet, og normaliseringen av eksponentene endrer ingenting.",
    },
    {
      question: "Hva blir Slutsky-kompensasjonen når prisen på vare 1 faller?",
      options: ["Negativ — konsumenten må gi fra seg penger for at den gamle kurven skal være akkurat overkommelig", "Positiv, akkurat som den er ved en tilsvarende prisøkning på det samme godet, bare i motsatt retning", "Null, siden kjøpekraften stiger av seg selv", "Positiv, men mindre enn ved en tilsvarende prisøkning"],
      explanation: "Kompensasjonen er $(p_1' - p_1)c_1^0$, og parentesen er negativ ved prisfall. Å glemme dette fortegnsskiftet er en klassisk regnefeil: den kompenserte linjen skal ligge innenfor den nye, ikke utenfor.",
    },
    {
      question: "Hvilken kontroll fanger fortegnsfeil i kompensasjonen mest sikkert?",
      options: ["Å sjekke at $A$ ligger på den kompenserte linjen", "Å sjekke at nyttenivået er høyere i $B$ enn i $A$", "Å sjekke at $c_2$ stiger fra $A$ til $B$", "Å sjekke at substitusjonseffekten er større enn inntektseffekten"],
      explanation: "Definisjonen av kompensasjonen er at den gamle kurven koster nøyaktig $m^s$ til de nye prisene, altså at $A$ ligger på den kompenserte linjen. At $c_2$ stiger, holder bare når det er $p_1$ som steg. Merk at nyttenivået i $B$ faktisk er HØYERE enn i $A$ — Slutsky-kompensasjonen gir råd til den gamle kurven og litt til.",
    },
    {
      question: "Hvilken kompensasjonskonvensjon bruker dette kurset, og hva sier sensor om alternativet?",
      options: ["Slutsky, altså samme godekurv — alternativet godtas, men er ikke hovedsporet", "Slutsky, altså samme nyttenivå — alternativet gir trekk", "Kompensasjon til samme nyttenivå, som er kursets hovedspor", "Begge konvensjonene brukes om hverandre gjennom hele pensum"],
      explanation: "Kurset bruker Slutsky-kompensasjon, altså råd til samme godekurv. V2025-veiledningen sier at den andre varianten godtas. Å blande dem i samme besvarelse skaper unødvendige regnefeil, siden kompensasjonsbeløpene er ulike.",
    },
    {
      question: "I hvor mange av de sju ordinære eksamenssettene forekommer Slutsky-dekomponeringen?",
      options: ["6 av 7 sett", "3 av 7 sett", "7 av 7 sett", "4 av 7 sett"],
      explanation: "Sjangeren finnes i V2018, V2019, V2020, V2023, V2024 og V2025, altså 86 %. Det eneste ordinære settet uten den er V2022. Full frekvens gjelder generell likevekt og Pareto-effektivitet, ikke denne sjangeren.",
    },
    {
      question: "En besvarelse leverer figuren med $A$, $B$ og $C$ korrekt tegnet, men ingen forklarende tekst. Hva blir konsekvensen?",
      options: ["Ikke full uttelling — grafiske svar skal alltid tolkes", "Full uttelling, siden figuren inneholder all informasjonen", "Full uttelling, forutsatt at punktene er navngitt", "Ingen uttelling i det hele tatt"],
      explanation: "Sensorveiledningene krever at grafiske og matematiske svar tolkes: hva skjer i hvert skritt, og hvorfor. Sensor gir raus delvis uttelling for riktig metode, så en korrekt figur er ikke verdiløs — men den er ikke et fullstendig svar.",
    },
  ],
  'econ2220-2-4': [
    {
      question: "Hva skjer med budsjettlinjen ved en prissubsidie på vare 1?",
      options: ["Den roterer utover om skjæringspunktet på vare 2-aksen og blir slakere", "Den flytter seg parallelt utover, med uendret helning", "Den roterer utover om skjæringspunktet på vare 1-aksen og blir brattere", "Den er uendret, siden staten dekker differansen"],
      explanation: "Subsidien senker $p_1$, så skjæringspunktet $m/p_2$ er upåvirket mens $m/p_1^s$ flytter utover. Relativprisen faller. Parallellskift oppstår bare når inntekten endres alene — det er nettopp forskjellen mellom de to virkemidlene.",
    },
    {
      question: "Hva skjer med budsjettlinjen ved en kontantstøtte?",
      options: ["Den flytter seg parallelt utover", "Den roterer utover og blir slakere", "Den roterer innover og blir brattere", "Bare skjæringspunktet på vare 1-aksen flytter seg"],
      explanation: "Kontantstøtten øker inntekten uten å berøre prisene, så helningen $-p_1/p_2$ er uendret og begge skjæringspunkter skaleres opp. At bare ett skjæringspunkt flytter seg, kjennetegner en prisendring.",
    },
    {
      question: "Hvordan regnes statens utlegg ved en prissubsidie?",
      options: ["Subsidien per enhet ganget med mengden kjøpt under subsidien", "Subsidien per enhet ganget med den mengden husholdningen kjøpte før tiltaket ble innført", "Den nye prisen ganget med mengden kjøpt under subsidien", "Differansen i konsumentens nytte, målt i kroner"],
      explanation: "Utlegget er $(p_1 - p_1^s)c_1^S$. Bruker man mengden uten tiltak, blir utlegget for lavt, og kontantstøttelinjen går ikke gjennom det subsidierte punktet — kontrollregningen avslører feilen.",
    },
    {
      question: "Hvorfor må statens utlegg holdes likt når de to virkemidlene sammenliknes?",
      options: ["Ellers sammenlikner man beløp i stedet for virkemidlenes form", "Ellers blir ikke de to budsjettlinjene parallelle i figuren, og tangeringen svikter", "Ellers kan ikke Cobb-Douglas-formelen brukes", "Ellers gjelder ikke tilpasningsbetingelsen"],
      explanation: "Poenget er å finne hvilken form på støtten som gir mest nytte per krone. Gir det ene tiltaket høyere nytte fordi det er dyrere, er sammenlikningen tom. Å utelate denne betingelsen er en av de dyreste feilene i sjangeren.",
    },
    {
      question: "En husholdning har $u = c_1^{0{,}5}c_2^{0{,}5}$, $m = 800$, $p_1 = 40$, $p_2 = 10$. En subsidie senker $p_1$ til 10. Hva blir statens utlegg?",
      options: ["1 200 kroner", "300 kroner", "800 kroner", "400 kroner"],
      explanation: "Under subsidien er $c_1^S = 0{,}5\\cdot 800/10 = 40$, og utlegget er $(40-10)\\cdot 40 = 1\\,200$. Beløpet 300 kommer av å bruke mengden uten tiltak ($c_1 = 10$) i stedet for mengden under subsidien.",
    },
    {
      question: "Med tallene over: hva blir nyttenivået under subsidien, og hva blir det med en kontantstøtte på 1 200 kroner?",
      options: ["40 under subsidien og 50 med kontantstøtte", "50 under subsidien og 40 med kontantstøtte", "40 i begge tilfeller", "20 under subsidien og 40 med kontantstøtte"],
      explanation: "Subsidien gir $(40,40)$ og nytte $\\sqrt{1\\,600} = 40$. Kontantstøtten gir inntekt 2 000 til uforvridde priser, altså $(25,100)$ og nytte $\\sqrt{2\\,500} = 50$. Nyttenivå 20 er situasjonen uten noe tiltak.",
    },
    {
      question: "Hvorfor går kontantstøttelinjen gjennom det subsidierte konsumpunktet?",
      options: ["Fordi utlegget er differansen mellom kurvens virkelige pris og det husholdningen betalte", "Fordi de to budsjettlinjene har nøyaktig samme helning og derfor må krysse hverandre i punktet", "Fordi husholdningen alltid velger samme kurv uansett priser", "Fordi Cobb-Douglas-etterspørselen ikke avhenger av den andre prisen"],
      explanation: "Legger man subsidiebudsjettet $p_1^sc_1^S + p_2c_2^S = m$ og utlegget $(p_1-p_1^s)c_1^S$ sammen, får man $p_1c_1^S + p_2c_2^S = m + T$. Det er kontantstøttens budsjettbetingelse i punktet — en konsekvens av konstruksjonen, ikke et sammentreff.",
    },
    {
      question: "Hva er det avgjørende skillet som gir hovedresultatet i dette kapitlet?",
      options: ["At indifferenskurven tangerer subsidielinjen men skjærer kontantstøttelinjen", "At kontantstøtten er større enn prissubsidien målt i kroner utbetalt fra staten", "At kontantstøtten senker prisen mer enn subsidien gjør", "At husholdningen kjøper mer av vare 1 med kontantstøtte"],
      explanation: "To linjer gjennom samme punkt med ulik helning kan ikke begge tangere samme kurve. Skjæring betyr at det finnes punkter på høyere indifferenskurver. Husholdningen kjøper faktisk *mindre* av vare 1 med kontantstøtte, siden hun møter den virkelige prisen.",
    },
    {
      question: "Hvorfor formuleres hovedresultatet som «minst like høy nytte» og ikke «høyere nytte»?",
      options: ["Fordi nytten blir nøyaktig lik når indifferenskurven har et knekkpunkt i det subsidierte punktet", "Fordi resultatet strengt tatt bare kan bevises for Cobb-Douglas-preferanser med like eksponenter", "Fordi utfallet avhenger av hvor stor kontantstøtten er", "Fordi husholdningen kan velge å ikke bruke kontantstøtten"],
      explanation: "Med perfekte komplementer ligger optimum i hjørnet uansett helning, så det finnes ingen tangent, og vridningstapet er null. Resultatet gjelder for alle preferanser, og streng ulikhet krever bare at konsumenten faktisk substituerer.",
    },
    {
      question: "Hvilke preferanser gir nøyaktig samme nytte under de to virkemidlene?",
      options: ["Perfekte komplementer, $u = \\min(c_1, c_2)$", "Cobb-Douglas-preferanser med lik eksponent på begge goder", "Kvasi-lineære preferanser", "Preferanser der vare 1 er et mindreverdig gode"],
      explanation: "Perfekte komplementer har indifferenskurver med rette hjørner langs strålen $c_1 = c_2$, og optimum ligger i hjørnet uansett budsjettlinjens helning. Cobb-Douglas og kvasi-lineære preferanser er glatte og gir strengt høyere nytte med kontanter.",
    },
    {
      question: "Hva er vridningstapet ved en prissubsidie?",
      options: ["Nyttetapet som følger av at relativprisen forvris og valget dermed forskyves", "Statens administrasjonskostnad ved å beregne og utbetale subsidien til alle mottakerne", "Differansen mellom prisen før og etter subsidien", "Tapet konsumenten får fordi subsidien er mindre enn prisøkningen"],
      explanation: "Tapet oppstår fordi konsumenten kjøper enheter hun selv verdsetter lavere enn samfunnets kostnad — hun betaler bare $p_1^s$ for noe som koster $p_1$. Ressursene forsvinner ikke, de brukes til noe mindre verdifullt.",
    },
    {
      question: "Hvordan forklares mekanismen ved hjelp av de to effektene fra Slutsky-dekomponeringen?",
      options: ["Kontantstøtten gir bare inntektsvirkningen, mens subsidien i tillegg gir en uønsket vridning", "Kontantstøtten gir bare substitusjonsvirkningen, mens prissubsidien gir begge de to virkningene samtidig", "Begge gir bare inntektsvirkning, men av ulik størrelse", "Subsidien gir bare substitusjonsvirkning, siden inntekten er uendret"],
      explanation: "En prissubsidie er et prisfall og virker gjennom begge kanaler; en kontantoverføring har ingen substitusjonsvirkning fordi relativprisen er uendret. Subsidien er altså en kontantoverføring med en påklistret forvridning.",
    },
    {
      question: "Hva kjennetegner tilpasningen i det subsidierte punktet, sammenliknet med samfunnets kostnad?",
      options: ["Husholdningens marginale verdsetting av vare 1 er lavere enn samfunnets kostnad", "Husholdningens marginale verdsetting av vare 1 er høyere enn samfunnets kostnad per enhet", "De to er like, siden tilpasningsbetingelsen alltid holder", "Sammenlikningen er ikke mulig uten å kjenne nyttefunksjonen"],
      explanation: "I punktet gjelder $\\text{MSB} = p_1^s/p_2 < p_1/p_2$. Tilpasningsbetingelsen holder — men mot den *forvridde* prisen, ikke mot samfunnets kostnad. Det er nettopp derfor punktet ikke er samfunnsøkonomisk gunstig.",
    },
    {
      question: "Hvilket av hensynene nedenfor *bestrider* analysen, i motsetning til å endre formålet?",
      options: ["At godene nesten ikke kan erstatte hverandre på kort sikt", "At staten vil sikre at pengene faktisk brukes på det tiltenkte godet", "At forbruket av godet har virkninger for andre enn kjøperen", "At en lavere pris på regningen er politisk mer synlig"],
      explanation: "Lav substituerbarhet svekker premisset om at konsumenten vrir seg, og krymper dermed vridningstapet — en reell faglig innvending. De tre andre aksepterer analysen, men vil noe annet enn å maksimere konsumentens egen nytte.",
    },
    {
      question: "En besvarelse konkluderer at de to virkemidlene er likeverdige fordi begge når det samme konsumpunktet. Hva er feilen?",
      options: ["Å forveksle at punktet er tilgjengelig med at det er det beste tilgjengelige", "Å glemme at statens utlegg må holdes fast i sammenlikningen av de to virkemidlene", "Å bruke feil mengde i utleggsberegningen", "Å tegne kontantstøttelinjen med feil helning"],
      explanation: "Punktet *er* tilgjengelig under begge regimer — det er premisset for argumentet. Men under kontantstøtten skjærer linjen indifferenskurven der, så punktet er ikke optimalt: husholdningen har flere og bedre valg.",
    },
  ],
  'econ2220-2-5': [
    {
      question: "Hva er første steg i oppskriften for konsumentoppgaven?",
      options: ["Å sette opp målfunksjon og budsjettbetingelse med likhet, og begrunne likheten", "Å tegne budsjettlinjen og indifferenskurvene i et diagram med navngitte akser", "Å regne ut marginalnyttene av begge goder", "Å skrive opp Cobb-Douglas-etterspørselen fra hukommelsen"],
      explanation: "Steget tar femten sekunder og gir alltid uttelling. Å begynne å regne uten oppsett, eller å starte med figuren, er nettopp det sensorveiledningene advarer mot. Marginalnyttene kommer i steg 2.",
    },
    {
      question: "Hva er den vanligste grunnen til at studenter mister poeng i steg 3, tolkningen?",
      options: ["At formelen gjentas med ord, uten enheter og uten byttegevinst-argumentet", "At tolkningen skrives ned før den matematiske utledningen er gjort ferdig", "At de bruker feil symbol for marginal substitusjonsbrøk", "At de tolker inntektseffekten i stedet for tilpasningsbetingelsen"],
      explanation: "Dette er feil #2 i feilregisteret. Tolkningen må si hva hver side ER, i enheter av de to varene, og hvorfor likhet betyr at ingen omdisponering av budsjettet lønner seg.",
    },
    {
      question: "En student har $u = 0{,}35\\ln c_1 + 0{,}65\\ln c_2$, $p_1 = 7$ og $m = 2\\,800$. Hva er optimal $c_1$?",
      options: ["140", "400", "98", "980"],
      explanation: "$c_1 = 0{,}35\\cdot 2\\,800/7 = 980/7 = 140$. Svaret 400 er $m/p_1$, altså hva hun kunne kjøpt med hele inntekten, og 980 er utgiften i kroner — ikke antall enheter.",
    },
    {
      question: "En konsument har $u = c_1^{3}c_2$. Hva er budsjettandelen for vare 1?",
      options: ["Tre fjerdedeler", "Tre, altså eksponenten på vare 1", "En fjerdedel", "En tredjedel"],
      explanation: "Eksponentene summerer seg til 4, så andelen er $a/(a+b) = 3/4$. Å bruke 3 direkte ville gitt en utgift på $3m$, altså tre ganger inntekten — kontrollen $p_1c_1 \\le m$ avslører feilen straks.",
    },
    {
      question: "Hva er første handling når en Cobb-Douglas-funksjon dukker opp i en oppgave?",
      options: ["Å legge sammen eksponentene", "Å regne ut marginalnyttene", "Å skrive opp Lagrange-funksjonen", "Å sjekke om godene er normale"],
      explanation: "Summerer eksponentene seg til 1, gjelder $c_1 = am/p_1$ direkte; ellers er andelen $a/(a+b)$. Eksponentsjekken tar to sekunder og hindrer en feil som ødelegger hele deloppgaven.",
    },
    {
      question: "Hvorfor gir en verbal påstand om normalitet bare delvis uttelling?",
      options: ["Fordi normalitet er en påstand om et fortegn, og fortegnet må vises ved derivasjon", "Fordi rent verbale svar aldri godtas i optimeringsoppgaver på denne eksamenen", "Fordi normalitet må vises grafisk med en Engel-kurve", "Fordi påstanden bare gjelder når eksponentene summerer seg til 1"],
      explanation: "Setningen «hun kjøper mer når hun blir rikere» beskriver hva normalitet betyr, men viser ikke at det gjelder her. Sensor vil se $\\partial c_1/\\partial m = a/p_1 > 0$. Dette er dokumentert i veiledningene for både V2023 og V2025.",
    },
    {
      question: "En husholdning har $u = c_1^{0{,}6}c_2^{0{,}4}$, $p_1 = 30$, $p_2 = 20$, $m = 2\\,000$. Prisen stiger til 40. Hva er den kompenserte inntekten?",
      options: ["2 400", "2 000", "2 600", "2 800"],
      explanation: "Utgangspunktet er $c_1 = 40$ og $c_2 = 40$. Kompensasjonen er $(40-30)\\cdot 40 = 400$, så $m^s = 2\\,400$. Kontrollen er at den gamle kurven koster $40\\cdot 40 + 20\\cdot 40 = 2\\,400$ til de nye prisene.",
    },
    {
      question: "Med tallene over: hva blir substitusjons- og inntektseffekten?",
      options: ["$-4$ og $-6$", "$-6$ og $-4$", "$-5$ og $-5$", "$-10$ og $0$"],
      explanation: "Punktene er $A$ med $c_1 = 40$, $B$ med $c_1 = 0{,}6\\cdot 2\\,400/40 = 36$ og $C$ med $c_1 = 0{,}6\\cdot 2\\,000/40 = 30$. Inntektsleddet utgjør andelen $a = 0{,}6$ av totaleffekten på $-10$, altså $-6$.",
    },
    {
      question: "Hvordan er Slutsky-kompensasjonen ved et prisfall?",
      options: ["Negativ — penger skal trekkes inn for at den gamle kurven skal være akkurat overkommelig", "Positiv, akkurat som den er ved en tilsvarende prisøkning på det samme godet", "Null, siden kjøpekraften stiger av seg selv når prisen faller", "Positiv, men mindre enn ved en tilsvarende prisøkning på samme gode"],
      explanation: "Formelen $(p_1' - p_1)c_1^A$ har negativ parentes ved prisfall. Geometrisk ligger den kompenserte linjen da innenfor den nye. Å glemme fortegnsskiftet gjør begge effektene feil.",
    },
    {
      question: "Hva er spesielt med tilpasningsbetingelsen for en kvasi-lineær nyttefunksjon som $u = 6\\sqrt{c_1} + c_2$?",
      options: ["Den bestemmer $c_1$ alene, uten at inntekten inngår", "Den bestemmer $c_2$ alene, uten at prisene inngår", "Den gir faste budsjettandeler, som for Cobb-Douglas", "Den kan bare løses med innsettingsmetoden, ikke med Lagrange"],
      explanation: "Marginalnytten av vare 2 er konstant lik 1, så betingelsen blir $3/\\sqrt{c_1} = p_1/p_2$, altså $c_1 = 9p_2^2/p_1^2$. Hele inntektsvirkningen kanaliseres til vare 2, og faste budsjettandeler er Cobb-Douglas' særtrekk.",
    },
    {
      question: "For $u = 6\\sqrt{c_1} + c_2$: hva er inntektseffekten på $c_1$?",
      options: ["Null, siden $\\partial c_1/\\partial m = 0$", "Positiv, siden godet er normalt", "Negativ, siden godet er mindreverdig", "Ubestemt uten at inntektsnivået $m$ er oppgitt i kroner"],
      explanation: "Uttrykket $c_1 = 9p_2^2/p_1^2$ inneholder ikke $m$, så den inntektsderiverte er null. Godet er derfor verken normalt eller mindreverdig — det er grensetilfellet, og en god påminnelse om at normalitet må vises, ikke antas.",
    },
    {
      question: "Hvilket av de to fortegnene i dekomponeringen hviler på at godet er normalt?",
      options: ["Inntektseffektens", "Substitusjonseffektens", "Begge", "Ingen av dem"],
      explanation: "Substitusjonseffektens fortegn følger av avslørte preferanser alene, uten antakelser om godets art. Å plassere normalitetsforbeholdet på substitusjonseffekten er et av de tydeligste skillene mellom en middels og en god besvarelse.",
    },
    {
      question: "Oppgave 1 er vektet 35 % av eksamen, som varer 240 minutter, og har fem deloppgaver som teller likt. Hvor lang tid bør hver deloppgave få?",
      options: ["Omtrent 17 minutter", "Omtrent 35 minutter", "Omtrent 48 minutter", "Omtrent 12 minutter"],
      explanation: "$0{,}35\\cdot 240 = 84$ minutter fordelt på fem deloppgaver gir omtrent 17 minutter hver. Kommer du over 20 på én, gå videre — den neste er verdt like mye. Sett av 10 minutter til diskusjonshalen.",
    },
    {
      question: "Hvilke tre knagger brukes til å besvare den aktualiserte diskusjonshalen?",
      options: ["Budsjettandel, substituerbarhet og normalitet", "Lagrange-multiplikatoren, tangering og monotoni", "Konveksitet, avslørte preferanser og homogenitet", "Statens utlegg, øremerking og vridningstap"],
      explanation: "De tre knytter drøftingen til oppgaven du nettopp løste: andelen styrer kjøpekraftsvirkningen, substituerbarheten styrer hvor billig tilpasningen er, og normaliteten styrer hvordan forbruket henger sammen med inntekt.",
    },
    {
      question: "Du har regnet ut substitusjons- og inntektseffekten. Hva er siste steg før du leverer?",
      options: ["Å sjekke at de to effektene summerer seg til totalendringen du regnet ut først", "Å tegne figuren på nytt med større akser slik at punktene blir tydeligere", "Å regne om alle mellomsvar til desimaltall med tre gjeldende siffer", "Å kontrollere at nyttenivået er høyere i det nye optimum enn i det gamle"],
      explanation: "Summekontrollen fanger regnefeil i $A$, $C$ og differansene, og koster to sekunder. Den fanger derimot IKKE fortegnsfeil i kompensasjonen — summen går opp uansett hvor $B$ ligger; til det trenger du kontrollen at $A$ ligger på den kompenserte linja. Nytten kan godt falle ved en prisøkning, så det siste alternativet ville vært direkte misvisende.",
    },
  ],
  'econ2220-3-1': [
    {
      question: "Hva sier beholdningsbudsjettet $p_1c_1 + p_2c_2 = p_1\\omega_1 + p_2\\omega_2$?",
      options: ["At verdien av konsumet er lik verdien av beholdningen", "At konsumenten må konsumere nøyaktig sin egen beholdning av hver enkelt vare", "At konsumenten alltid selger vare 1 og kjøper vare 2", "At prisene må være like for at handel skal lønne seg"],
      explanation: "Venstresiden er verdien i kroner av det konsumenten spiser, høyresiden verdien av det hun eier. Handel er tillatt begge veier; betingelsen krever bare at regnskapet går opp.",
    },
    {
      question: "Hvorfor ligger beholdningspunktet $W = (\\omega_1, \\omega_2)$ alltid på budsjettlinjen?",
      options: ["Fordi innsetting av $c_1=\\omega_1$, $c_2=\\omega_2$ gir en identitet som holder for alle priser", "Fordi konsumenten alltid ender opp med å velge å konsumere nøyaktig sin egen beholdning", "Fordi prisene i modellen alltid er like store", "Fordi budsjettlinjen per definisjon alltid går gjennom origo i konsumdiagrammet"],
      explanation: "Setter du $c=\\omega$ inn, står det samme uttrykk på begge sider. Punktet er derfor tilgjengelig ved enhver prisvektor — men det behøver ikke bli valgt.",
    },
    {
      question: "Hva skjer med beholdningsbudsjettlinjen når $p_1$ stiger?",
      options: ["Den roterer om beholdningspunktet og blir brattere", "Den skifter parallelt innover", "Den roterer om skjæringspunktet på $c_2$-aksen, slik den gjør ved fast pengeinntekt", "Den blir liggende uendret fordi inntekten stiger like mye"],
      explanation: "$W$ er fortsatt råd, så den nye linjen går gjennom $W$; helningen $-p_1/p_2$ blir brattere. Parallellskift («Den skifter parallelt innover») er den dokumenterte fellen; rotasjon om aksepunktet («Den roterer om skjæringspunktet på $c_2$-aksen, slik den gjør ved fast pengeinntekt») gjelder ved fast pengeinntekt.",
    },
    {
      question: "En konsument har $c_1 = 30$ og $\\omega_1 = 45$. Hva er nettoposisjonen i vare 1?",
      options: ["Netto selger av 15 enheter", "Netto kjøper av 15 enheter", "Autarki i vare 1", "Ubestemt så lenge vi ikke kjenner prisene på de to varene"],
      explanation: "Nettoposisjonen er $\\omega_1 - c_1 = 15 > 0$, altså netto selger. Prisene trengs ikke for å avgjøre dette — bare konsumet og beholdningen.",
    },
    {
      question: "Hva er helningen på budsjettlinjen når $p_1 = 8$ og $p_2 = 2$?",
      options: ["$-4$", "$-0{,}25$", "$-6$", "$-16$, siden helningen er produktet av prisene"],
      explanation: "Helningen er $-p_1/p_2 = -8/2 = -4$: én enhet av vare 1 koster fire enheter av vare 2. Svaret «$-0{,}25$» er det omvendte forholdet, en klassisk snuble.",
    },
    {
      question: "En konsument eier $\\omega = (50, 20)$ og møter $p_1 = 12$, $p_2 = 5$. Hva er verdien av beholdningen?",
      options: ["700", "600", "100", "870, altså summen av alle prisene og alle mengdene"],
      explanation: "$12\\cdot 50 + 5\\cdot 20 = 600 + 100 = 700$. Svaret «600» tar bare med vare 1; svaret «100» tar bare med vare 2.",
    },
    {
      question: "Hvorfor skrives beholdningsbudsjettet med likhetstegn og ikke $\\le$?",
      options: ["Fordi preferansene er monotone, så et ubrukt beløp kunne gitt høyere nytte", "Fordi modellen rent teknisk forbyr sparing og oppbevaring av ubrukte midler", "Fordi prisene er positive", "Fordi beholdningen er gitt utenfra"],
      explanation: "Monotoni (mer er bedre) gjør at et punkt innenfor linjen aldri kan være optimalt. Begrunnelsen er et selvstendig poeng på eksamen og bør skrives ut første gang budsjettet settes opp.",
    },
    {
      question: "Hva blir tilpasningsbetingelsen når konsumenten maksimerer nytten på et beholdningsbudsjett?",
      options: ["$u'_1/u'_2 = p_1/p_2$, akkurat som med pengeinntekt", "$u'_1/u'_2 = \\omega_1/\\omega_2$, altså forholdet mellom beholdningene", "$u'_1/u'_2 = p_2/p_1$", "$u'_1 = u'_2$ uansett priser"],
      explanation: "Bibetingelsens høyreside er ny, men Lagrange-oppsettet og førsteordensbetingelsene er de samme, så betingelsen er uendret. Beholdningen påvirker hvor på linjen optimum ligger, ikke selve betingelsen.",
    },
    {
      question: "En konsument er netto selger av vare 1, og $p_1$ stiger. Hva kan sies om nytten hennes?",
      options: ["Den øker — den gamle kurven er fortsatt innenfor rekkevidde, og hun har mer til overs", "Den faller, fordi alt hun kjøper i markedet er blitt dyrere enn før", "Den er uendret, siden beholdningspunktet $W$ fortsatt er tilgjengelig for henne", "Det avhenger av om vare 1 er et normalt gode, siden inntektseffekten da snur"],
      explanation: "Differansen mellom ny inntekt og ny kostnad for den gamle kurven er $(p_1'-p_1)(\\omega_1-c_1) > 0$ for en netto selger. Da kan hun kjøpe alt hun hadde før og litt til. Argumentet bruker bare avslørte preferanser og krever ingen antakelse om normalitet.",
    },
    {
      question: "Hva betyr det at en konsument er i autarki?",
      options: ["At hun konsumerer nøyaktig sin egen beholdning og ikke handler", "At hun ikke har noen beholdning i det hele tatt", "At markedet er stengt slik at handel er umulig", "At hun er netto kjøper av begge varene samtidig, uten å selge noe"],
      explanation: "Autarki er tilpasningen $c = \\omega$. Punktet er alltid tilgjengelig, men velges normalt ikke — det er ikke det samme som at handel er forbudt.",
    },
    {
      question: "Cobb-Douglas-nytten $u = a\\ln c_1 + (1-a)\\ln c_2$ med beholdningsbudsjett gir etterspørselen",
      options: ["$c_1 = a(p_1\\omega_1 + p_2\\omega_2)/p_1$", "$c_1 = a\\omega_1$", "$c_1 = a(p_1\\omega_1 + p_2\\omega_2)/p_2$", "$c_1 = (1-a)(p_1\\omega_1 + p_2\\omega_2)/p_1$, altså med den motsatte vekten"],
      explanation: "Budsjettandelsregelen står, men «inntekten» er nå verdien av beholdningen. Legg merke til at $p_1$ opptrer både i nevneren og inne i parentesen — det er kimen til de to inntektseffektene.",
    },
    {
      question: "Hvorfor kan ikke virkningen av en prisøkning i beholdningsmodellen leses direkte av som «lavere kjøpekraft»?",
      options: ["Fordi høyresiden av budsjettet stiger samtidig når konsumenten eier godet", "Fordi prisen på vare 2 alltid faller når $p_1$ stiger", "Fordi nyttefunksjonen selv endrer seg når prisene i markedet endrer seg", "Fordi budsjettbetingelsen ikke lenger kan skrives med likhetstegn når prisene endres"],
      explanation: "Verdien av beholdningen er $p_1\\omega_1 + p_2\\omega_2$ og øker med $\\omega_1$ kroner per krone prisøkning. Om totalvirkningen er positiv eller negativ, avgjøres av nettoposisjonen.",
    },
    {
      question: "Kari eier $\\omega = (200, 150)$ og møter $p_1 = 6$, $p_2 = 4$. Hvor krysser $c_1$-aksen budsjettlinjen?",
      options: ["Ved $c_1 = 300$", "Ved $c_1 = 200$", "Ved $c_1 = 450$", "Ved $c_1 = 350$, altså beholdningen pluss halve potetavlingen"],
      explanation: "Verdien av beholdningen er $6\\cdot200 + 4\\cdot150 = 1800$, og $1800/6 = 300$. Svaret «Ved $c_1 = 200$» er beholdningen selv, svaret «Ved $c_1 = 450$» er skjæringen på den andre aksen.",
    },
    {
      question: "Hvilken av disse endringene gir et rent parallellskift av budsjettlinjen?",
      options: ["En kontantoverføring som ikke endrer prisene", "En økning i $p_1$ alene", "En reduksjon i $p_2$ alene", "En dobling av begge priser samtidig, uten kompensasjon"],
      explanation: "Parallellskift krever uendret prisforhold og endret nivå. En dobling av begge priser («En dobling av begge priser samtidig») endrer verken helningen eller de reelle mulighetene i en beholdningsøkonomi: både konsumets kostnad og beholdningens verdi dobles, så linjen står helt stille.",
    },
    {
      question: "Hva står symbolet $\\omega$ for i denne boka?",
      options: ["Beholdningen — mengdene konsumenten eier før handel", "Faktorprisen på arbeid, altså lønna per time arbeidet", "Lagrange-multiplikatoren", "Konsumentens nyttenivå"],
      explanation: "Boka bruker $\\omega$ utelukkende om beholdning; faktorpriser heter $r$ og $w$, og multiplikatoren heter $\\lambda$. Enkelte eldre eksamenssett har brukt $\\omega$ om faktorpriser — definer derfor alltid symbolene dine i besvarelsen.",
    },
    {
      question: "En konsument er netto kjøper av vare 1, og $p_1$ stiger. Hva skjer med nytten?",
      options: ["Den faller, fordi den gamle kurven ikke lenger er innenfor rekkevidde", "Den øker, fordi beholdningen er blitt mer verdt", "Den er uendret, siden hun kan velge $W$", "Den avhenger av substitusjonseffektens størrelse"],
      explanation: "For en netto kjøper er $(p_1'-p_1)(\\omega_1-c_1) < 0$: den gamle kurven er blitt for dyr. At $W$ fortsatt er mulig hindrer ikke at nytten faller — $W$ var jo tilgjengelig før også, og ble ikke valgt.",
    },
    {
      question: "Hva er den vanligste dokumenterte figurfeilen i beholdningsoppgaver?",
      options: ["At budsjettlinjen tegnes som et parallellskift ved prisendring", "At indifferenskurvene tegnes konvekse", "At beholdningspunktet plasseres på budsjettlinjen", "At helningen på budsjettlinjen settes til $-p_1/p_2$ i stedet for $-p_2/p_1$"],
      explanation: "Parallellskift ved prisendring er påpekt i to av utsatt-sensorveiledningene. De tre andre alternativene beskriver nettopp det som er riktig — konvekse indifferenskurver, $W$ på linjen og helning $-p_1/p_2$.",
    },
    {
      question: "To husholdninger har identiske preferanser og identisk tilpasning, men ulike beholdninger. Prisen på vare 1 stiger. Hva følger?",
      options: ["De kan rammes motsatt: den ene blir bedre stilt, den andre dårligere", "Begge blir dårligere stilt, og nøyaktig i like stor grad siden tilpasningen er lik", "Begge blir bedre stilt fordi beholdningene stiger i verdi", "Ingen av dem påvirkes, siden tilpasningen er den samme"],
      explanation: "Fortegnet på $(p_1'-p_1)(\\omega_1-c_1)$ avhenger av $\\omega_1$. Med identisk $c_1$, men ulik $\\omega_1$, kan den ene være netto selger og den andre netto kjøper.",
    },
    {
      question: "Hva er den økonomiske tolkningen av at $u'_1/u'_2 = p_1/p_2$ i optimum?",
      options: ["Konsumentens eget bytteforhold er lik markedets bytteforhold", "Marginalnyttene er like store", "Konsumenten bruker like mye penger på hver vare", "Prisene er like marginalkostnadene i produksjonen av de to varene"],
      explanation: "Venstresiden er hvor mange enheter av vare 2 hun vil gi for én av vare 1; høyresiden er hva markedet krever. Er de ulike, finnes et lønnsomt bytte. Svaret «Konsumenten bruker like mye penger på hver vare» gjelder bare i det spesialtilfellet at Cobb-Douglas-vektene er like.",
    },
    {
      question: "Hvorfor er nettoposisjonen en egenskap ved tilpasningen og ikke ved personen?",
      options: ["Fordi den følger av hva konsumenten velger å konsumere, som avhenger av prisene", "Fordi beholdningen endrer seg når prisene endrer seg", "Fordi den bare lar seg bestemme i ettertid, etter at all handel er gjennomført", "Fordi nyttefunksjonen endrer seg over tid"],
      explanation: "$\\omega_1$ ligger fast, men $c_1$ avhenger av priser og inntekt. Endres prisene nok, kan fortegnet på $\\omega_1 - c_1$ snu — samme person kan altså gå fra netto selger til netto kjøper.",
    },
  ],
  'econ2220-3-2': [
    {
      question: "Hvordan ser Slutsky-likningen med beholdningsledd ut?",
      options: ["$\\partial c_1/\\partial p_1 = \\partial c_1^s/\\partial p_1 + (\\omega_1 - c_1)\\,\\partial c_1/\\partial m$", "$\\partial c_1/\\partial p_1 = \\partial c_1^s/\\partial p_1 - c_1\\,\\partial c_1/\\partial m$ også med beholdning", "$\\partial c_1/\\partial p_1 = \\partial c_1^s/\\partial p_1 + \\omega_1\\,\\partial c_1/\\partial m$", "$\\partial c_1/\\partial p_1 = \\partial c_1^s/\\partial p_1 + (c_1 - \\omega_1)\\,\\partial c_1/\\partial m$"],
      explanation: "Inntektsleddet skaleres med nettoposisjonen $\\omega_1 - c_1$. Svaret «$\\partial c_1/\\partial p_1 = \\partial c_1^s/\\partial p_1 - c_1\,\\partial c_1/\\partial m$ også med beholdning» er likningen uten beholdning, svaret «$\\partial c_1/\\partial p_1 = \\partial c_1^s/\\partial p_1 + \\omega_1\,\\partial c_1/\\partial m$» glemmer den ordinære inntektseffekten, og svaret «$\\partial c_1/\\partial p_1 = \\partial c_1^s/\\partial p_1 + (c_1 - \\omega_1)\,\\partial c_1/\\partial m$» har snudd fortegnet i parentesen.",
    },
    {
      question: "Hvorfor får Slutsky-likningen et ekstra ledd når inntekten er en beholdning?",
      options: ["Fordi inntekten $m = p_1\\omega_1 + p_2\\omega_2$ selv avhenger av $p_1$", "Fordi substitusjonseffekten skifter fortegn i beholdningsmodeller", "Fordi budsjettbetingelsen ikke lenger holder med likhet i denne modellen", "Fordi konsumenten ikke lenger maksimerer nytten på vanlig måte"],
      explanation: "Prisen står to steder i etterspørselen — direkte og gjennom inntekten — så derivasjonen gir et ekstra ledd $\\omega_1\\,\\partial c_1/\\partial m$. Verken substitusjonseffekten, budsjettlikheten eller maksimeringen endres.",
    },
    {
      question: "Hva er fortegnet på substitusjonsleddet $\\partial c_1^s/\\partial p_1$ for godet som ble dyrere?",
      options: ["Ikke-positivt, uansett nettoposisjon", "Positivt når konsumenten er netto selger av godet", "Positivt når godet er mindreverdig i konsumentens egne preferanser", "Ubestemt, siden det avhenger av beholdningens størrelse"],
      explanation: "Substitusjonsleddet er alltid $\\le 0$ for godet som ble dyrere; det følger av avslørte preferanser. Beholdningen påvirker inntektsleddet, ikke substitusjonsleddet.",
    },
    {
      question: "Hva er $\\partial m/\\partial p_1$ når $m = p_1\\omega_1 + p_2\\omega_2$?",
      options: ["$\\omega_1$", "$c_1$", "$\\omega_1 - c_1$", "$\\omega_1 + \\omega_2$, altså hele beholdningen"],
      explanation: "Deriverer du inntekten mhp. $p_1$, står bare $\\omega_1$ igjen: du blir $\\omega_1$ kroner rikere per krone prisen stiger, fordi du har $\\omega_1$ enheter på lager.",
    },
    {
      question: "Hva er den ordinære inntektseffekten av en prisøkning på vare 1?",
      options: ["Virkningen av at konsumentens egen godekurv er blitt dyrere", "Virkningen av at beholdningen har steget i verdi etter prisøkningen", "Virkningen av at konsumenten vrir seg bort fra det dyrere godet", "Virkningen av at nyttefunksjonen selv endrer form når prisene blir høyere"],
      explanation: "Den ordinære inntektseffekten er $-c_1\\,\\partial c_1/\\partial m$ per krone: du blir fattigere med $c_1$ kroner per krone prisøkning. Svaret «Virkningen av at beholdningen har steget i verdi …» er beholdnings-effekten og svaret «Virkningen av at konsumenten vrir seg bort fra det …» er substitusjonseffekten.",
    },
    {
      question: "Hva er beholdnings-inntektseffekten av en prisøkning på vare 1?",
      options: ["$+\\omega_1\\,\\partial c_1/\\partial m$ per krone — beholdningen ble mer verdt", "$-\\omega_1\\,\\partial c_1/\\partial m$ per krone, siden varen er blitt dyrere", "$-c_1\\,\\partial c_1/\\partial m$ per krone, som i den vanlige Slutsky-likningen", "Null, fordi beholdningen er gitt utenfra og ikke kan endres"],
      explanation: "Inntekten stiger med $\\omega_1$ kroner per krone prisøkning, og for et normalt gode går en del av dette til mer av vare 1. Svaret «Null, fordi beholdningen er gitt utenfra og ikke …» blander sammen at *mengden* er gitt med at *verdien* endres.",
    },
    {
      question: "En konsument er netto kjøper av vare 1 (normalt gode), og $p_1$ stiger. Hva skjer med $c_1$?",
      options: ["Det faller entydig — begge ledd trekker samme vei", "Det stiger entydig på grunn av beholdnings-effekten", "Det er ubestemt, fordi de to leddene trekker hver sin vei", "Det er uendret, siden de to effektene alltid utlikner hverandre nøyaktig"],
      explanation: "For en netto kjøper er $\\omega_1 - c_1 < 0$, så inntektsleddet er negativt, og substitusjonsleddet er også negativt. Ubestemthet («Det er ubestemt») gjelder for netto selgeren, ikke for kjøperen.",
    },
    {
      question: "En konsument er netto selger av vare 1 (normalt gode), og $p_1$ stiger. Hva skjer med $c_1$?",
      options: ["Det er ubestemt — substitusjons- og beholdningseffekten trekker hver sin vei", "Det faller entydig, som for alle konsumenter ved en prisøkning", "Det stiger entydig, fordi beholdningen er blitt mer verdt enn før", "Det stiger hvis og bare hvis vare 1 er et mindreverdig gode"],
      explanation: "Substitusjonsleddet er negativt, inntektsleddet positivt. Hvilket som dominerer avhenger av substituerbarheten: med Cobb-Douglas faller konsumet, med faste proporsjoner stiger det.",
    },
    {
      question: "En konsument er netto selger av vare 1, og $p_1$ stiger. Hva skjer med nytten?",
      options: ["Den stiger — den gamle kurven er råd, og det er penger til overs", "Den faller, siden alt hun kjøper er blitt dyrere enn før", "Den er ubestemt, akkurat som virkningen på etterspørselen", "Den er uendret, siden beholdningspunktet $W$ fortsatt kan velges av henne"],
      explanation: "$(p_1'-p_1)(\\omega_1-c_1) > 0$ for en netto selger ved prisøkning: hun har råd til alt hun spiste før og mer til. Nyttekonklusjonen er entydig selv om etterspørselseffekten ikke er det.",
    },
    {
      question: "Hva vil Slutsky-kompensasjon si?",
      options: ["Å gi akkurat nok inntekt til å ha råd til den gamle kurven", "Å gi konsumenten akkurat nok inntekt til å nå det gamle nyttenivået", "Å gi konsumenten tilbake hele beløpet prisøkningen kostet henne", "Å holde konsumentens pengeinntekt helt uendret gjennom hele analysen"],
      explanation: "Slutsky-kompensasjon er råd til samme godekurv, altså $\\Delta m = \\Delta p_1 c_1$. Svaret «Å gi konsumenten akkurat nok inntekt til å nå det …» beskriver den alternative konvensjonen med samme nyttenivå, som godtas på eksamen men ikke er kursets hovedspor.",
    },
    {
      question: "Hva blir Slutsky-likningen med beholdningsledd hvis $\\omega_1 = 0$?",
      options: ["Den vanlige Slutsky-likningen med inntektsledd $-c_1\\,\\partial c_1/\\partial m$", "En likning uten inntektsledd i det hele tatt", "En likning der substitusjonsleddet blir positivt i stedet", "En likning der totaleffekten av en prisendring alltid blir lik null"],
      explanation: "Med $\\omega_1 = 0$ blir $(\\omega_1 - c_1) = -c_1$, altså nøyaktig leddet i likningen med pengeinntekt. Modellen med pengeinntekt er dermed spesialtilfellet «eier ingenting av godet».",
    },
    {
      question: "En sauebonde eier 60 kg og konsumerer 35 kg. $p_1$ stiger fra 20 til 25 kr. Hvor mye stiger inntekten hennes?",
      options: ["300 kroner", "175 kroner", "125 kroner", "500 kroner, altså hele verdiøkningen på lageret"],
      explanation: "Inntektsøkningen er $\\Delta p_1 \\cdot \\omega_1 = 5\\cdot 60 = 300$ kroner. 175 kroner er Slutsky-kompensasjonen $\\Delta p_1 c_1$, og 125 kroner er differansen $\\Delta p_1(\\omega_1 - c_1)$.",
    },
    {
      question: "Hva måler størrelsen $m^s = p_1'c_1 + p_2c_2$?",
      options: ["Hva den gamle godekurven koster ved de nye prisene", "Verdien av beholdningen ved de nye prisene", "Konsumentens nye inntekt etter prisendringen", "Utgiften til vare 1 etter at konsumenten har tilpasset seg de nye prisene"],
      explanation: "$m^s$ er den Slutsky-kompenserte inntekten. Svaret «Verdien av beholdningen ved de nye prisene» og 3 er begge $p_1'\\omega_1 + p_2\\omega_2$, som er noe annet — differansen mellom de to er nettopp $\\Delta p_1(\\omega_1-c_1)$.",
    },
    {
      question: "Hvorfor bør du regne de to inntektseffektene hver for seg, når formelen slår dem sammen?",
      options: ["Fordi mekanismen sensor er ute etter, forsvinner hvis de slås sammen", "Fordi formelen med ett samlet inntektsledd er matematisk feil", "Fordi de to effektene alltid har samme fortegn og kan legges sammen fritt", "Fordi substitusjonsleddet ellers ikke lar seg regne ut riktig i tallverdier"],
      explanation: "Sensorveiledningene påpeker at kandidatene blander de to inntektseffektene. Formelen er riktig, men å vise de to kanalene hver for seg er selve poenget i sjangeren.",
    },
    {
      question: "En bonde eier $\\omega = (80,40)$, har $u = 0{,}5\\ln c_1 + 0{,}5\\ln c_2$ og møter $p_1 = 10$, $p_2 = 5$. Hva er $c_1$?",
      options: ["50", "40", "80", "100, altså hele inntekten delt på prisen på vare 1"],
      explanation: "$m = 10\\cdot 80 + 5\\cdot 40 = 1000$, og med like vekter går halve inntekten til vare 1: $c_1 = 0{,}5\\cdot 1000/10 = 50$. Svaret «100, altså hele inntekten delt på prisen på vare 1» glemmer budsjettandelen.",
    },
    {
      question: "Hvorfor er nyttevirkningen entydig når etterspørselsvirkningen ikke er det?",
      options: ["Fordi nyttevirkningen bare bruker hva som er råd, ikke hvordan preferansene ser ut", "Fordi nytten alltid stiger når inntekten stiger, uansett priser", "Fordi substitusjonseffekten ikke påvirker nytten i det hele tatt", "Fordi nyttefunksjonen antas å være Cobb-Douglas i denne modellen"],
      explanation: "Argumentet er avslørte preferanser: er den gamle kurven fortsatt innenfor rekkevidde med penger til overs, kan konsumenten ikke komme dårligere ut. Etterspørselen avhenger derimot av hvor sterkt hun substituerer.",
    },
    {
      question: "Hva menes med at totaleffekten er «ubestemt»?",
      options: ["At modellens antakelser tillater begge fortegn, avhengig av preferansene", "At effekten er null fordi leddene nøyaktig utlikner hverandre", "At effekten ikke kan regnes ut i konkrete talleksempler", "At modellen er ufullstendig og trenger flere antakelser før den gir noe svar"],
      explanation: "«Ubestemt» er en presis konklusjon: to ledd med motsatt fortegn, og størrelsesforholdet er ikke fastlagt av antakelsene. I et konkret eksempel med oppgitt nyttefunksjon kan effekten alltid regnes ut.",
    },
    {
      question: "Hvorfor går den kompenserte budsjettlinjen ikke gjennom beholdningspunktet $W$?",
      options: ["Fordi kompensasjonen er definert av det gamle konsumpunktet, ikke av beholdningen", "Fordi $W$ ikke lenger er tilgjengelig etter prisendringen", "Fordi den kompenserte linjen har en annen helning enn den nye budsjettlinjen", "Fordi kompensasjonen alltid er større enn verdiøkningen på beholdningen"],
      explanation: "Den kompenserte linjen trekkes gjennom den gamle *kurven* $A$. Den nye budsjettlinjen går gjennom $W$; de to er parallelle, og avstanden mellom dem er inntektsvirkningen.",
    },
    {
      question: "Hva er substitusjonseffekten når godene må konsumeres i fast forhold (perfekte komplementer)?",
      options: ["Null, siden det ikke er noen vridning å hente", "Maksimal, siden konsumenten må omfordele hele budsjettet", "Positiv, siden konsumenten går mot det dyrere godet", "Den samme som med Cobb-Douglas-preferanser i samme punkt"],
      explanation: "Med fast forhold mellom godene finnes ingen substitusjon, så bare inntektsvirkningene står igjen. Det er derfor en netto selger her kan øke konsumet av godet som ble dyrere.",
    },
    {
      question: "En konsument er i autarki ($c_1 = \\omega_1$) når $p_1$ endres. Hva skjer med nytten?",
      options: ["Den kan bare stige eller være uendret, siden $W$ fortsatt er tilgjengelig", "Den faller alltid, siden prisforholdet er blitt forvridd", "Den er alltid uendret, siden nettoposisjonen er null", "Det avhenger av om prisen steg eller falt, og av hvilket gode det gjelder"],
      explanation: "$(p_1'-p_1)(\\omega_1-c_1) = 0$: den gamle kurven er akkurat råd. Men det nye prisforholdet åpner nye byttemuligheter, så konsumenten kan velge noe bedre — hun kan ikke tape.",
    },
    {
      question: "Hva viser bevegelsen $A \\to B$ i dekomponeringsfiguren?",
      options: ["Substitusjonseffekten", "Den ordinære inntektseffekten", "Beholdnings-inntektseffekten", "Totaleffekten av hele prisendringen"],
      explanation: "$A \\to B$ går fra opprinnelig optimum til optimum på den kompenserte linjen, altså ved uendret kjøpekraft målt mot den gamle kurven. $B \\to C$ er inntektsvirkningen samlet.",
    },
    {
      question: "Hvordan avhenger Cobb-Douglas-etterspørselen etter vare 1 av $p_2$ når konsumenten har beholdning?",
      options: ["Den stiger med $p_2$ dersom $\\omega_2 > 0$", "Den er uavhengig av $p_2$, som i modellen med pengeinntekt", "Den faller med $p_2$ fordi godene er substitutter i konsumet", "Den avhenger av $p_2$ bare hvis konsumenten er netto kjøper av vare 1"],
      explanation: "$c_1 = a(p_1\\omega_1 + p_2\\omega_2)/p_1$ gir $\\partial c_1/\\partial p_2 = a\\omega_2/p_1 > 0$: høyere $p_2$ gjør deg rikere når du eier vare 2. Uavhengighetsresultatet i kapitlet om Cobb-Douglas gjelder bare med fast pengeinntekt.",
    },
    {
      question: "Hva må vises før du kan bruke fortegnet på inntektsleddet?",
      options: ["At godet er normalt, ved å derivere etterspørselen mhp. $m$", "At preferansene er konvekse, ved et blandingsargument", "At budsjettbetingelsen holder med likhet i optimum", "At substitusjonsleddet er ikke-positivt for det godet som nettopp ble dyrere"],
      explanation: "Inntektsleddets fortegn hviler på $\\partial c_1/\\partial m > 0$, altså normalitet — og egenskaper skal vises, ikke påstås. De andre punktene er riktige i seg selv, men avgjør ikke fortegnet på inntektsleddet.",
    },
    {
      question: "En bonde selger 30 enheter netto, og prisen stiger 10 kroner. Hvor mye har hun til overs etter å ha kjøpt den gamle kurven?",
      options: ["300 kroner", "30 kroner", "Ingenting — den gamle kurven koster nøyaktig hele inntekten", "Det kan ikke avgjøres uten å kjenne nyttefunksjonen hennes"],
      explanation: "Differansen er $(p_1'-p_1)(\\omega_1-c_1) = 10\\cdot 30 = 300$ kroner. Regnestykket krever ingen kunnskap om preferansene — det er nettopp styrken ved avslørte preferanser-argumentet.",
    },
    {
      question: "Hvilken av disse formuleringene er en fullgod konklusjon for en netto selger ved prisøkning?",
      options: ["Etterspørselen er ubestemt fordi to ledd trekker hver sin vei, men nytten stiger", "Etterspørselen faller og nytten faller, som for alle andre konsumenter", "Etterspørselen stiger fordi beholdnings-effekten alltid dominerer de to andre", "Både etterspørsel og nytte er ubestemt uten mer informasjon om preferansene"],
      explanation: "Begge spørsmål skal besvares, med riktig status på hvert: etterspørsel ubestemt (med begrunnelse), nytte entydig opp. Svaret «Både etterspørsel og nytte er ubestemt uten mer …» er den nære, men gale varianten — nyttespørsmålet er avgjort av avslørte preferanser.",
    },
  ],
  'econ2220-3-3': [
    {
      question: "Hva er budsjettbetingelsen på nåverdiform i to-periode-modellen?",
      options: ["$c_1 + c_2/(1+r) = m_1 + m_2/(1+r)$", "$c_1 + c_2/r = m_1 + m_2/r$, altså diskontert med renten", "$c_1 + c_2 = m_1 + m_2$, siden begge perioder teller likt", "$c_1(1+r) + c_2 = m_1 + m_2(1+r)$"],
      explanation: "Nåverdien av konsumet er lik nåverdien av inntekten. Svaret «$c_1 + c_2/r = m_1 + m_2/r$, altså diskontert med renten» diskonterer med $r$ i stedet for $(1+r)$; svaret «$c_1(1+r) + c_2 = m_1 + m_2(1+r)$» blander nåverdi- og sluttverdiform.",
    },
    {
      question: "Hva er helningen på det intertemporale budsjettet?",
      options: ["$-(1+r)$", "$-r$", "$-1/(1+r)$", "$-1$, siden en krone alltid er en krone"],
      explanation: "Prisen på én krone konsum i dag er $(1+r)$ kroner konsum i morgen: du gir fra deg både kronen og renten den ville tjent. Svaret «$-r$» er den vanligste feilen i sjangeren.",
    },
    {
      question: "Renten er 5 % og $m_2 = 210$. Hva er nåverdien av periode 2-inntekten?",
      options: ["200", "199,50", "220,50", "210, siden nåverdien er lik beløpet selv"],
      explanation: "$210/1{,}05 = 200$; kontroller ved å gange tilbake: $200\\cdot 1{,}05 = 210$ ✓. Svaret «199,50» er $210\\cdot 0{,}95$ og svaret «220,50» er $210\\cdot 1{,}05$ — begge er vanlige snublesteiner.",
    },
    {
      question: "Hva er sparingen i to-periode-modellen?",
      options: ["$s = m_1 - c_1$", "$s = c_1 - m_1$", "$s = m_2 - c_2$", "$s = m_1 + m_2 - c_1 - c_2$, altså samlet ubrukt inntekt"],
      explanation: "Sparingen er den delen av periode 1-inntekten som ikke konsumeres. Negativ verdi betyr lån. Svaret «$s = c_1 - m_1$» har snudd fortegnet.",
    },
    {
      question: "Hva vil det si at inntektspunktet $(m_1, m_2)$ alltid ligger på budsjettlinjen?",
      options: ["At konsumenten alltid kan konsumere inntekten når den kommer, uten å spare eller låne", "At konsumenten alltid velger å konsumere inntekten i den perioden den kommer", "At sparingen alltid må være lik null i den optimale tilpasningen", "At inntekten i de to periodene alltid må være like store beløp"],
      explanation: "Innsetting av $c_1 = m_1$ og $c_2 = m_2$ gir en identitet. Punktet er tilgjengelig, men blir normalt ikke valgt — akkurat som beholdningspunktet i kapitlet om beholdningsbudsjettet.",
    },
    {
      question: "Hva skjer med budsjettlinjen når renten stiger?",
      options: ["Den roterer om inntektspunktet og blir brattere", "Den skifter parallelt innover mot origo", "Den roterer om skjæringspunktet på $c_2$-aksen", "Den blir liggende uendret fordi formuen stiger tilsvarende"],
      explanation: "Inntektspunktet er tilgjengelig ved enhver rente, så den nye linjen må gå gjennom det; helningen $-(1+r)$ blir brattere. Parallellskift er den dokumenterte fellen.",
    },
    {
      question: "Hva er tilpasningsbetingelsen i to-periode-modellen?",
      options: ["$u'_1/u'_2 = 1 + r$", "$u'_1/u'_2 = r$", "$u'_1/u'_2 = 1/(1+r)$", "$u'_1 = u'_2$, altså lik marginalnytte i begge perioder"],
      explanation: "Betingelsen er $u'_1/u'_2 = p_1/p_2$ med $p_1 = 1$ og $p_2 = 1/(1+r)$. Svaret «$u'_1 = u'_2$, altså lik marginalnytte i begge perioder» gjelder bare i det spesialtilfellet at renten er null.",
    },
    {
      question: "Hva er den økonomiske tolkningen av $u'_1/u'_2 = 1 + r$?",
      options: ["Konsumentens bytteforhold over tid er lik markedets bytteforhold", "Marginalnytten er like stor i de to periodene", "Konsumenten bruker like mye i begge perioder i optimum", "Renten er lik konsumentens tidspreferanserate ved lik inntekt"],
      explanation: "Venstresiden er hvor mange kroner i morgen hun vil gi for én krone i dag; høyresiden er hva markedet krever. Er de ulike, finnes en omdisponering over tid som løfter nytten.",
    },
    {
      question: "En sparer opplever at renten stiger. Hva skjer med nytten hennes?",
      options: ["Den stiger — den gamle planen er råd, og det er penger til overs", "Den faller, siden konsum i dag er blitt dyrere for henne", "Den er ubestemt, akkurat som virkningen på konsumet i dag", "Den er uendret, siden inntektspunktet fortsatt er tilgjengelig"],
      explanation: "Spareren er netto selger av konsum i dag, og prisen på det hun selger har steget. Regn ut hva den gamle planen koster ved den nye renten: den er billigere enn den nye formuen.",
    },
    {
      question: "En sparer opplever at renten stiger. Hva skjer med konsumet i dag?",
      options: ["Det er ubestemt — substitusjons- og inntektsvirkningen trekker hver sin vei", "Det faller entydig, siden konsum i dag er blitt dyrere", "Det stiger entydig, siden hun er blitt rikere av renteøkningen", "Det er uendret fordi de to virkningene alltid utlikner hverandre"],
      explanation: "Substitusjonseffekten trekker ned, beholdnings-inntektseffekten opp. Med Cobb-Douglas-preferanser dominerer substitusjonen, men med sterk komplementaritet over tid kan konsumet i dag stige.",
    },
    {
      question: "En låntaker opplever at renten stiger. Hva skjer med konsumet i dag og med nytten?",
      options: ["Begge faller — begge ledd i Slutsky-likningen trekker samme vei", "Konsumet faller, men nytten er ubestemt uten flere antakelser", "Konsumet er ubestemt, men nytten faller entydig i alle tilfeller", "Begge stiger, siden lånemarkedet gir henne bedre vilkår enn før"],
      explanation: "Låntakeren er netto kjøper av konsum i dag, altså av godet som ble dyrere: nettoposisjonen $m_1-c_1$ er negativ, så inntektsleddet har samme fortegn som substitusjonsleddet.",
    },
    {
      question: "Hvilken rolle spiller inntektsstrømmen $(m_1, m_2)$ i oversettelsen til beholdningsmodellen?",
      options: ["Den spiller rollen som beholdningen $\\omega$", "Den spiller rollen som pengeinntekten $m$ i den vanlige modellen", "Den spiller rollen som prisvektoren $(p_1, p_2)$ i modellen", "Den spiller ingen rolle; modellene er strukturelt helt ulike"],
      explanation: "To-periode-modellen ER en beholdningsøkonomi: inntektsstrømmen er beholdningen, og «prisene» er 1 og $1/(1+r)$. Derfor kan hele apparatet fra beholdnings-Slutsky brukes direkte.",
    },
    {
      question: "En konsument har $m_1 = 300$, $m_2 = 440$ og $r = 10\\,\\%$. Hva er formuen?",
      options: ["700", "740", "400", "760, altså inntekten pluss renter på begge beløp"],
      explanation: "$440/1{,}10 = 400$, så $W = 300 + 400 = 700$. Svaret «740» legger sammen udiskonterte beløp, og svaret «400» glemmer periode 1-inntekten.",
    },
    {
      question: "Hvorfor er sparingen ikke en egen valgvariabel i modellen?",
      options: ["Fordi den følger direkte av valget av $c_1$: $s = m_1 - c_1$", "Fordi konsumenten ikke kan velge hvor mye hun sparer i denne modellen", "Fordi sparingen alltid er null i den optimale tilpasningen", "Fordi renten bestemmer sparingen helt uavhengig av preferansene"],
      explanation: "Velger du konsumet i dag, har du valgt sparingen. Spørsmål om hva som skjer med sparingen er derfor spørsmål om hva som skjer med $c_1$ — og for en sparer er det svaret ubestemt.",
    },
    {
      question: "En sparer har plan $(350;\\,367{,}5)$, og renten stiger fra 5 % til 25 %. Hva koster den gamle planen ved den nye renten?",
      options: ["644", "700", "668", "717,5, altså planen tillagt den nye renten"],
      explanation: "$350 + 367{,}5/1{,}25 = 350 + 294 = 644$, mens den nye formuen er 668. Differansen på 24 kroner viser at hun har råd til den gamle planen og mer til — altså høyere nytte.",
    },
  ],
  'econ2220-3-4': [
    {
      question: "Hva er trinn 2 i endowment-algoritmen?",
      options: ["Løs optimeringen og regn ut nettoposisjonen som eget tall", "Roter budsjettlinjen gjennom beholdningspunktet i figuren", "Sett opp Slutsky-likningen og fortegnsbestem hvert ledd", "Spalt inntektsvirkningen i ordinær og beholdningsbasert effekt"],
      explanation: "Nettoposisjonen styrer alle konklusjonene som kommer etterpå, så den skal regnes ut tidlig. De tre andre alternativene er trinn 3, 4 og 5.",
    },
    {
      question: "Hvorfor skal nettoposisjonen skrives som et eget tall i besvarelsen?",
      options: ["Fordi den avgjør fortegnet på inntektsleddet og dermed alle konklusjonene", "Fordi sensor krever at alle mellomregninger står i besvarelsen", "Fordi den trengs for å regne ut substitusjonsleddet riktig", "Fordi budsjettbetingelsen ellers ikke kan skrives med likhet i optimum"],
      explanation: "Uten nettoposisjonen kan du ikke fortegnsbestemme inntektsleddet, og feilkode #9 (glemme at netto selgeren blir rikere) rammer nesten alltid kandidater som hoppet over dette trinnet.",
    },
    {
      question: "Hva er mellomstasjonen $m^s$ i den numeriske dekomponeringen?",
      options: ["Kostnaden for den gamle kurven ved de nye prisene", "Verdien av beholdningen ved de nye prisene", "Konsumentens inntekt før prisendringen fant sted", "Utgiften til vare 1 etter at tilpasningen er endret"],
      explanation: "$m^s = p_1'c_1 + p_2c_2 = m + \\Delta p_1 c_1$. Svaret «Verdien av beholdningen ved de nye prisene» er den nye beholdningsverdien; differansen mellom de to er $\\Delta p_1(\\omega_1 - c_1)$.",
    },
    {
      question: "En kornbonde eier 160 enheter og konsumerer 65. Prisen stiger 5 kroner. Hvor mye har hun til overs etter å ha kjøpt den gamle kurven?",
      options: ["475 kroner", "800 kroner", "325 kroner", "1 125 kroner, altså hele verdiøkningen på lageret"],
      explanation: "$(p_1'-p_1)(\\omega_1-c_1) = 5\\cdot 95 = 475$. 800 kroner er hele beholdningsoppgangen $5\\cdot 160$, og 325 kroner er Slutsky-kompensasjonen $5\\cdot 65$.",
    },
    {
      question: "En netto selger opplever prisfall på godet hun selger. Hva skjer?",
      options: ["Nytten faller entydig, mens konsumet av godet kan gå begge veier", "Både nytten og konsumet faller entydig i dette tilfellet", "Nytten stiger, siden det hun kjøper er blitt billigere for henne", "Både nytten og konsumet stiger, siden godet er blitt billigere"],
      explanation: "Prisfall på det du selger gjør deg fattigere: $(p_1'-p_1)(\\omega_1-c_1) < 0$. Konsumet kan likevel stige, fordi godet er blitt relativt billigere — som i vedeksempelet, der konsumet steg mens nytten falt.",
    },
    {
      question: "Hvorfor er høyere konsum av et gode ikke det samme som høyere velferd i beholdningsmodellen?",
      options: ["Fordi et prisfall kan øke konsumet samtidig som selgerens realinntekt faller", "Fordi nyttefunksjonen ikke er strengt voksende i beholdningsmodeller", "Fordi budsjettbetingelsen kan holde med ulikhet ved prisendringer", "Fordi konsumet måles i mengder mens velferden må måles i kroner og øre"],
      explanation: "Vedeksempelet: prisen halveres, konsumet stiger fra 55 til 70, men hytteeieren er fattigere fordi hun lever av å selge ved. Substitusjons- og beholdningseffekten trekker hver sin vei.",
    },
    {
      question: "Hva er oversettelsen av «sparer» til beholdningsspråk?",
      options: ["Netto selger av konsum i dag", "Netto kjøper av konsum i dag", "Netto selger av konsum i morgen", "Konsument i autarki mellom periodene"],
      explanation: "Spareren konsumerer mindre i dag enn hun tjener i dag, altså selger hun konsum i dag. Låntakeren er netto kjøper. Derfor vinner spareren i nytte på en renteøkning.",
    },
    {
      question: "En student låner i periode 1, og renten stiger. Hva skjer med konsumet i dag?",
      options: ["Det faller entydig — begge ledd trekker samme vei", "Det er ubestemt, siden formuen også endres av renten", "Det stiger, fordi hun må låne mer for å dekke rentene", "Det er uendret, siden lånet er bundet til én bestemt rente"],
      explanation: "Låntakeren er netto kjøper av konsum i dag. Nettoposisjonen $m_1 - c_1$ er negativ, så inntektsleddet har samme fortegn som substitusjonsleddet.",
    },
    {
      question: "Hva avgjør om en netto selgers konsum av godet stiger eller faller ved en prisøkning?",
      options: ["Hvor lett konsumenten kan erstatte godet med det andre godet", "Hvor stor pengeinntekten hennes er utenom beholdningen", "Om godet er normalt eller mindreverdig i preferansene hennes", "Om prisen på det andre godet endres samtidig med prisen på det første"],
      explanation: "Substituerbarheten bestemmer substitusjonseffektens styrke. Med Cobb-Douglas faller konsumet; med faste proporsjoner (ingen substitusjon mulig) stiger det.",
    },
    {
      question: "Hva må gjøres før fortegnet på inntektsleddet kan brukes?",
      options: ["Normaliteten må vises ved derivasjon mhp. $m$", "Substitusjonsleddet må regnes ut i tall", "Beholdningen må omregnes til pengeinntekt", "Budsjettlinjens skjæringspunkter må regnes ut"],
      explanation: "Inntektsleddets fortegn hviler på $\\partial c_1/\\partial m > 0$. Egenskaper skal vises, ikke påstås (feilkode #3).",
    },
    {
      question: "Med Cobb-Douglas-nytte kan etterspørselen skrives $c_1 = a\\omega_1 + a p_2\\omega_2/p_1$. Hva følger av det?",
      options: ["Konsumenten blir netto kjøper hvis $p_1$ er lav nok", "Konsumenten er alltid netto selger av vare 1", "Etterspørselen etter vare 1 er uavhengig av $p_2$", "Nettoposisjonen er uavhengig av begge prisene"],
      explanation: "Andre ledd vokser når $p_1$ faller, så $c_1$ kan overstige $\\omega_1$. Nettoposisjonen er en egenskap ved tilpasningen, ikke ved yrkestittelen.",
    },
    {
      question: "Hvilken avstand i dekomponeringsfiguren svarer til inntektsvirkningen samlet?",
      options: ["Avstanden mellom den kompenserte linjen og den nye budsjettlinjen", "Avstanden mellom den gamle og den nye budsjettlinjen", "Avstanden mellom beholdningspunktet og det nye optimum", "Avstanden mellom de to indifferenskurvene som går gjennom $A$ og $C$"],
      explanation: "Den kompenserte linjen og den nye budsjettlinjen er parallelle, og avstanden mellom dem er inntektsvirkningen. Vil du skille de to inntektseffektene, må du tegne inn en fjerde linje med gammel pengeinntekt.",
    },
    {
      question: "En strømkunde med solcellepaneler eier 9 000 kWh og bruker 2 100 kWh. Prisen stiger 1 krone. Hvor mye stiger inntekten?",
      options: ["9 000 kroner", "2 100 kroner", "6 900 kroner", "11 100 kroner, altså produksjon og forbruk lagt sammen"],
      explanation: "Inntektsøkningen er $\\Delta p_1 \\cdot \\omega_1 = 1\\cdot 9\\,000$. 2 100 kroner er Slutsky-kompensasjonen, og 6 900 kroner er nettogevinsten $\\Delta p_1(\\omega_1 - c_1)$.",
    },
    {
      question: "Hva er den generelle regelen for om en husholdning vinner på et sammensatt prissjokk?",
      options: ["Summen av prisendring ganget med nettoposisjon over alle markeder skal være positiv", "Husholdningen vinner hvis den samlede prisøkningen er mindre enn inntektsveksten", "Husholdningen vinner så snart den er netto selger i minst ett av de berørte markedene", "Husholdningen vinner hvis preferansene er tilstrekkelig substituerbare"],
      explanation: "Hvert marked bidrar med sin egen nettoposisjon, positiv for netto selger og negativ for netto kjøper. Preferansene bestemmer tilpasningen, men ikke om husholdningen vinner.",
    },
    {
      question: "Hvorfor kan nyttevirkningen avgjøres uten å kjenne nyttefunksjonen?",
      options: ["Fordi testen bare sammenlikner hva den gamle kurven koster med hva inntekten er", "Fordi nytten alltid stiger når inntekten målt i kroner stiger", "Fordi alle nyttefunksjoner i emnet er av Cobb-Douglas-typen", "Fordi substitusjonseffekten alltid er lik null i modeller med beholdning"],
      explanation: "Avslørte preferanser: er den gamle kurven fortsatt innenfor rekkevidde med penger til overs, kan konsumenten ikke komme dårligere ut. Merk at svaret «Fordi nytten alltid stiger når inntekten målt i …» er galt i tidsvarianten — formuen kan stige samtidig som spareren taper.",
    },
  ],
  'econ2220-4-1': [
    {
      question: "Hva er bredden på bytteboksen?",
      options: ["Den totale mengden av vare 1, altså $\\omega_1^A + \\omega_1^B$", "As beholdning av vare 1", "Bs beholdning av vare 1, siden Bs origo ligger oppe til høyre", "Differansen mellom As og Bs beholdning av vare 1"],
      explanation: "Sidene i boksen er totalmengdene. Bruker du bare den enes beholdning, får ikke den andres forbruk plass i figuren.",
    },
    {
      question: "Hvor ligger Bs origo i bytteboksen?",
      options: ["Oppe til høyre; Bs diagram er As rotert 180 grader", "Nede til venstre, samme sted som As origo", "Oppe til venstre, slik at vare 1 måles nedover", "I midten av boksen, i punktet der kurvene tangerer"],
      explanation: "Bs diagram er snudd 180 grader, så Bs origo ligger i det motsatte hjørnet av As. Bs vare 1 måles mot venstre og Bs vare 2 nedover.",
    },
    {
      question: "Hva betyr et vilkårlig punkt inne i bytteboksen?",
      options: ["En fullstendig fordeling av begge totalmengdene på A og B", "As forbruk alene, uten informasjon om B", "En fordeling som alltid er Pareto-effektiv", "En fordeling som begge alltid foretrekker fremfor beholdningen"],
      explanation: "Fordi $c^B = \\Omega - c^A$, beskriver ett punkt samtidig hva begge får. Effektivitet og frivillighet er egne spørsmål som punktet i seg selv ikke avgjør.",
    },
    {
      question: "Hva er beholdningspunktet $W$?",
      options: ["Fordelingen før noe bytte har skjedd, altså $c^A = \\omega^A$ og $c^B = \\omega^B$", "Punktet der de to indifferenskurvene tangerer hverandre", "Midtpunktet i boksen, der begge har halvparten av alt", "Punktet der begge oppnår høyest mulig nytte samtidig"],
      explanation: "$W$ er utgangspunktet: hver forbruker sin egen beholdning. Tangeringspunkter og likevekt er noe man kommer til fra $W$, ikke $W$ selv.",
    },
    {
      question: "Hva sier den marginale substitusjonsbrøken (MSB) i enheter?",
      options: ["Hvor mange enheter av vare 2 konsumenten akkurat vil gi for én enhet til av vare 1", "Hvor mange kroner konsumenten vil betale for vare 1", "Forholdet mellom prisene på de to varene slik markedet fastsetter dem for begge", "Hvor mye nytten stiger målt i nytteenheter"],
      explanation: "MSB er et bytteforhold mellom varer, ikke et pengebeløp og ikke et nyttetall. Prisforholdet er noe MSB tilpasses i optimum, men det er ikke det MSB betyr.",
    },
    {
      question: "For $u = c_1^{a}c_2^{1-a}$ er MSB lik",
      options: ["$\\dfrac{a}{1-a}\\cdot\\dfrac{c_2}{c_1}$", "$\\dfrac{a}{1-a}\\cdot\\dfrac{c_1}{c_2}$", "$\\dfrac{1-a}{a}\\cdot\\dfrac{c_2}{c_1}$", "$a\\,c_1 + (1-a)\\,c_2$"],
      explanation: "Deriver: $u'_1 = a c_1^{a-1}c_2^{1-a}$ og $u'_2 = (1-a)c_1^{a}c_2^{-a}$. Brøken $u'_1/u'_2$ gir vektforholdet ganget med $c_2/c_1$.",
    },
    {
      question: "A har $(8,2)$ og nytten $c_1^{1/2}c_2^{1/2}$. Hva er $\\text{MSB}_A$?",
      options: ["$1/4$", "$4$", "$16$", "$1/2$"],
      explanation: "Med lik vekt er $\\text{MSB} = c_2/c_1 = 2/8 = 1/4$. A har mye av vare 1, så hun gir bare en kvart enhet av vare 2 for én til av vare 1.",
    },
    {
      question: "Når finnes det en byttelinse i et punkt?",
      options: ["Når de to indifferenskurvene krysser hverandre der", "Når de to indifferenskurvene tangerer hverandre der", "Alltid, så lenge punktet ligger inne i boksen", "Bare når punktet ligger på budsjettlinja"],
      explanation: "Kryssende kurver avgrenser et linseformet område av fordelinger begge foretrekker. Tangering betyr at linsen er krympet til ingenting.",
    },
    {
      question: "Hva kjennetegner alle punktene inne i linsen?",
      options: ["Begge konsumenter får høyere nytte enn i utgangspunktet", "Nøyaktig én av konsumentene får høyere nytte", "Samlet nytte er nøyaktig den samme som i utgangspunktet for begge", "Fordelingen er alltid effektiv der"],
      explanation: "Linsen består av Pareto-forbedringer. Et punkt i linsen kan godt ha en ny linse igjen, så det er ikke nødvendigvis effektivt.",
    },
    {
      question: "Hva kjennetegner geometrisk et punkt på kontraktkurven?",
      options: ["De to konsumentenes indifferenskurver tangerer hverandre i punktet", "De to indifferenskurvene krysser hverandre i punktet", "Punktet ligger på den rette linjen mellom de to origoene", "Punktet ligger midt i bytteboksen, like langt fra begge origo"],
      explanation: "Tangering betyr at de marginale substitusjonsbrøkene er like, så ingen omfordeling kan gjøre én bedre uten å gjøre den andre verre. Krysning betyr derimot at det finnes en linse igjen — altså at punktet ikke er effektivt.",
    },
    {
      question: "Tangeringsbetingelsen i bytteboksen er",
      options: ["$\\text{MSB}_A = \\text{MSB}_B$", "$\\text{MSB}_A = 0$", "$\\text{MSB}_A \\cdot \\text{MSB}_B = 1$", "$c_1^A = c_1^B$ og $c_2^A = c_2^B$"],
      explanation: "Tangering betyr at kurvene har samme helning i punktet, og helningens tallverdi er nettopp MSB. Lik fordeling av mengdene er noe helt annet.",
    },
    {
      question: "$\\text{MSB}_A = 4$ og $\\text{MSB}_B = 1$. Hvilke bytteforhold (enheter av vare 2 per enhet av vare 1) vil begge si ja til?",
      options: ["Alle forhold strengt mellom 1 og 4", "Alle forhold over 4", "Alle forhold under 1", "Bare forholdet 2,5, som er gjennomsnittet"],
      explanation: "Betaler A mer enn 4, taper hun på byttet; får B mindre enn 1, taper han. Alt strengt imellom gjør begge bedre stilt, ikke bare midtpunktet.",
    },
    {
      question: "Hva er autarki i en bytteøkonomi?",
      options: ["At hver konsument forbruker sin egen beholdning, altså punktet $W$", "At begge konsumenter har nøyaktig like store beholdninger av begge varene", "At prisene er null fordi ingen bruker penger", "At kun én av konsumentene får handle"],
      explanation: "Autarki er situasjonen uten handel, og nytten der er reservasjonsnivået ingen frivillig går under.",
    },
    {
      question: "Hvorfor kan begge konsumenter vinne på handel når totalmengdene er faste?",
      options: ["Fordi varene flyttes dit de verdsettes høyest på marginen", "Fordi det produseres mer av begge varer når markedet åpnes", "Fordi den ene får en gave fra den andre", "Fordi prisene faller når begge handler"],
      explanation: "Gevinsten kommer av ulik MSB i utgangspunktet, ikke av ny produksjon eller av gaver. Bytte er ikke et nullsumspill.",
    },
    {
      question: "Hvorfor står A og B overfor samme budsjettlinje? Det geometriske argumentet er at",
      options: ["rotasjonen på 180 grader bevarer helning, og begge linjer går gjennom $W$", "begge har nøyaktig samme beholdning av begge varer, så de to linjene må falle sammen", "budsjettlinjer alltid går gjennom midten av boksen", "prisene er like null i en bytteøkonomi"],
      explanation: "Lik helning alene gir bare parallelle linjer. Det avgjørende er at $W$ ligger på begges linje, siden begge kan velge å ikke handle.",
    },
    {
      question: "Adding-up-argumentet for felles budsjettlinje bygger på at",
      options: ["summen av forbruket er lik summen av beholdningene i ethvert punkt i boksen", "de to konsumentene har identiske preferanser", "prisene er normalisert slik at $p_2 = 1$", "begge indifferenskurvene tangerer hverandre nettopp i beholdningspunktet $W$ før handel"],
      explanation: "Legger man budsjettbetingelsene sammen, blir likheten en identitet i boksen. Dermed impliserer As betingelse Bs — det er ett krav, ikke to.",
    },
    {
      question: "Helningen på den felles budsjettlinja er",
      options: ["$-p_1/p_2$", "$-p_2/p_1$", "$-\\Omega_2/\\Omega_1$", "$-\\text{MSB}_A \\cdot \\text{MSB}_B$"],
      explanation: "Budsjettbetingelsen $p_1c_1 + p_2c_2 = $ konstant gir $c_2 = \\text{konst.} - (p_1/p_2)c_1$. Forholdet mellom totalmengdene er noe annet — det er diagonalens stigningstall.",
    },
    {
      question: "Hva er kontraktkurven?",
      options: ["Alle fordelinger der $\\text{MSB}_A = \\text{MSB}_B$", "Budsjettlinja gjennom beholdningspunktet", "Kurven som viser alle fordelinger begge foretrekker fremfor $W$", "Diagonalen i boksen, uansett preferanser"],
      explanation: "Kontraktkurven er tangeringspunktene. At den faller sammen med diagonalen gjelder kun i spesialtilfellet med like Cobb-Douglas-vekter.",
    },
    {
      question: "Begge har $u = c_1^{1/2}c_2^{1/2}$ og $\\Omega = (12, 6)$. Hvilken fordeling ligger på kontraktkurven?",
      options: ["$c^A = (8, 4)$", "$c^A = (8, 2)$", "$c^A = (4, 4)$", "$c^A = (6, 1)$"],
      explanation: "Kontraktkurven er her $c_2^A = (\\Omega_2/\\Omega_1)c_1^A = c_1^A/2$. Bare $(8,4)$ oppfyller det; kontroll: B får $(4,2)$ og $4/8 = 2/4$.",
    },
    {
      question: "En bevegelse rett oppover fra $W$ i boksen betyr at",
      options: ["A får mer av vare 2 og B mindre, mens vare 1 er uendret", "begge får mer av vare 2", "A får mer av begge varer", "prisen på vare 2 stiger"],
      explanation: "Loddrette bevegelser er ren overføring av vare 2 fra B til A. Priser er ikke inntegnet i selve bevegelsen — de bestemmer budsjettlinjas helning.",
    },
    {
      question: "Hvorfor krummer Bs indifferenskurver mot hjørnet oppe til høyre?",
      options: ["Fordi Bs nytte øker bort fra Bs eget origo, og diagrammet er rotert 180 grader", "Fordi B alltid har mer av vare 2 enn A", "Fordi Bs preferanser er speilvendte av As, slik at nytten avtar bort fra As origo", "Fordi Bs budsjettlinje har positiv helning"],
      explanation: "Krumningen følger av rotasjonen, ikke av at B har spesielle preferanser eller mer av noen vare.",
    },
    {
      question: "Hva menes med at konsumentene er pristakere?",
      options: ["At hver av dem tar prisene for gitt og ikke kan påvirke dem", "At de betaler den prisen motparten bestemmer i forhandlingen", "At de bare kan handle til bytteforholdet 1:1", "At de må selge hele beholdningen sin"],
      explanation: "Pristaking betyr at prisene er data for den enkelte. Det er en forutsetning som blir sentral for velferdsteoremene i kap. 4.3.",
    },
    {
      question: "Hvilket svar er ikke godt nok når oppgaven ber om å markere en Pareto-effektiv allokering?",
      options: ["Å peke på et punkt og skrive «her er det effektivt», uten tangering eller MSB-likhet", "Å tegne tangering mellom de to kurvene og skrive betingelsen $\\text{MSB}_A = \\text{MSB}_B$ ved siden av", "Å regne ut begge MSB-ene og vise at de er like", "Å begrunne at det ikke finnes noen linse igjen i punktet"],
      explanation: "Sensor krever begrunnelsen, ikke bare markeringen. De tre andre svarene er alle gyldige måter å vise det samme på.",
    },
    {
      question: "Hvilken påstand om bytteboksen er riktig?",
      options: ["Totalmengdene er faste, så all velferdsendring skjer gjennom fordelingen", "Totalmengdene øker når konsumentene begynner å handle", "Boksen viser også hvor mye som produseres av hver vare", "Boksen forutsetter at A og B har identiske preferanser og like store beholdninger"],
      explanation: "En bytteøkonomi har ingen produksjon, og preferansene kan gjerne være ulike — det er nettopp ulikheten som skaper handelsgevinsten.",
    },
    {
      question: "A eier $(3, 9)$ og forbruker $(6, 4)$ etter handel. Hva er A?",
      options: ["Netto kjøper av vare 1 og netto selger av vare 2", "Netto selger av vare 1 og netto kjøper av vare 2", "Netto kjøper av begge varer", "Verken kjøper eller selger, siden totalen er uendret"],
      explanation: "Forbruket av vare 1 er større enn beholdningen ($6 > 3$), og forbruket av vare 2 er mindre ($4 < 9$). Summen av mengdene er ikke det relevante — det er vare for vare.",
    },
  ],
  'econ2220-4-2': [
    {
      question: "Hva er en allokering?",
      options: ["En fullstendig fordeling av totalmengdene på konsumentene", "En fordeling der begge får like mye av begge varer, slik at ingen forfordeles", "Et sett priser som gjør at alle markeder klarerer samtidig i økonomien", "En bevegelse fra beholdningspunktet inn i byttelinsen"],
      explanation: "Fullstendighetskravet er poenget: kurvene summerer seg nøyaktig til totalmengdene. Lik fordeling og prissett er noe helt annet.",
    },
    {
      question: "Hvilket krav mangler i svaret «likevekt er at hver konsument tilpasser seg optimalt»?",
      options: ["At samlet etterspørsel er lik samlet tilgang i alle markeder", "At begge konsumentene har samme nyttefunksjon og dermed samme tilpasning", "At prisene er normalisert slik at den ene prisen settes lik 1", "At beholdningene er likt fordelt mellom de to konsumentene"],
      explanation: "Markedsklareringen er den halvparten som mangler, og det er nettopp det dokumenterte sensortrekket i sjangeren.",
    },
    {
      question: "Hva er forskjellen på generell og partiell likevekt?",
      options: ["Generell klarerer alle markeder samtidig; partiell ser på ett marked isolert", "Generell gjelder mange konsumenter; partiell gjelder bare én konsument alene", "Generell brukes i bytteøkonomier; partiell brukes bare når det finnes produksjon", "Generell krever konvekse preferanser, mens partiell ikke krever noen forutsetninger"],
      explanation: "Skillet går på hvor mange markeder som klareres samtidig, og om tilbakevirkninger på priser og inntekter tas med.",
    },
    {
      question: "Hvorfor kan man ikke bestemme absolutte priser i en bytteøkonomi?",
      options: ["Fordi budsjettbetingelsen er uendret når alle priser ganges med samme tall", "Fordi konsumentene ikke har penger, bare varer de kan bytte med hverandre", "Fordi Walras' lov gjør den siste prisen overflødig i regnestykket", "Fordi nyttefunksjonene er ordinale og ikke kan måles i kroner"],
      explanation: "Etterspørselen er homogen av grad null i prisene: bare forholdet $p_1/p_2$ betyr noe. Derfor normaliserer man én pris til 1.",
    },
    {
      question: "Å sette $p_2 = 1$ kalles",
      options: ["normalisering; vare 2 blir da numéraire", "klarering; vare 2 blir da referansemarkedet i modellen", "Walras-justering; vare 2 utelates fra regnestykket", "kompensasjon; konsumenten holdes på samme kurve som før"],
      explanation: "Normalisering velger en måleenhet for prisene. Klarering og kompensasjon er helt andre begreper.",
    },
    {
      question: "Overskuddsetterspørselen $z_1$ er definert som",
      options: ["$c_1^A + c_1^B - \\Omega_1$", "$\\Omega_1 - \\omega_1^A$", "$c_1^A - c_1^B$", "$p_1c_1^A + p_2c_2^A - m^A$"],
      explanation: "Samlet ønsket forbruk minus samlet tilgang. Positiv verdi presser prisen opp; likevekt er $z_1 = 0$.",
    },
    {
      question: "Walras' lov sier at",
      options: ["$p_1z_1 + p_2z_2 = 0$ ved alle priser", "$z_1 = z_2$ i enhver likevekt med positive priser i begge markeder", "$p_1z_1 + p_2z_2 = 0$ bare i likevekt, ikke ved andre prissett", "summen av mengdene $z_1 + z_2$ alltid er lik null"],
      explanation: "Loven er en identitet som følger av budsjettbetingelsene, og den holder ved alle priser — ikke bare i likevekt, og den gjelder verdier, ikke mengder.",
    },
    {
      question: "Hva er den praktiske konsekvensen av Walras' lov på eksamen?",
      options: ["Det holder å klarere ett marked i en to-vare-økonomi", "Man kan hoppe over å normalisere prisene før man regner", "Etterspørselen etter vare 1 blir uavhengig av inntekten", "Likevektsprisen kan leses direkte av beholdningene"],
      explanation: "Klarerer ett marked ved positive priser, klarerer det andre automatisk. Normalisering er fortsatt nødvendig.",
    },
    {
      question: "Walras' lov utledes fra",
      options: ["hver konsuments budsjettbetingelse, summert over konsumentene", "klareringsbetingelsen i det markedet man har valgt å regne på", "tangeringsbetingelsen $\\text{MSB}_A = \\text{MSB}_B$ i likevektspunktet", "forutsetningen om at preferansene er konvekse og monotone"],
      explanation: "Legger man budsjettbetingelsene sammen og samler ledd vare for vare, står identiteten igjen. Klarering brukes ikke i utledningen.",
    },
    {
      question: "$p_1 = 4$, $p_2 = 1$ og $z_1 = 0$. Hva er $z_2$?",
      options: ["$0$", "$-4$", "$4$", "Kan ikke bestemmes uten flere opplysninger"],
      explanation: "Walras' lov gir $4\\cdot 0 + 1\\cdot z_2 = 0$, altså $z_2 = 0$: det andre markedet klarerer automatisk.",
    },
    {
      question: "A har $\\omega^A = (2,12)$ og $u = c_1^{1/2}c_2^{1/2}$. Med $p_2 = 1$ og $p_1 = p$, hva er As etterspørsel etter vare 1?",
      options: ["$1 + 6/p$", "$6/p$", "$(2p+12)/p$", "$1 + 12/p$"],
      explanation: "Inntekten er $m = 2p + 12$, og Cobb-Douglas gir $c_1 = \\tfrac12 m/p = (p+6)/p = 1 + 6/p$.",
    },
    {
      question: "I en bytteøkonomi med $\\Omega_1 = 6$ er samlet etterspørsel etter vare 1 lik $2 + 8/p$. Hva er likevektsprisen?",
      options: ["$p = 2$", "$p = 4$", "$p = 8$", "$p = 1/2$"],
      explanation: "Sett $2 + 8/p = 6$, altså $8/p = 4$ og $p = 2$. Tallet 4 kommer av å glemme leddet 2 på venstresiden.",
    },
    {
      question: "For $u = 2\\sqrt{c_1} + c_2$ er etterspørselen etter vare 1 lik",
      options: ["$(p_2/p_1)^2$", "$m/(2p_1)$", "$p_1^2/p_2^2$", "$m/p_1 - p_2$"],
      explanation: "Marginalnytten av vare 2 er 1, så $1/\\sqrt{c_1} = p_1/p_2$ gir $c_1 = (p_2/p_1)^2$ — helt uavhengig av inntekten.",
    },
    {
      question: "Hva er det karakteristiske ved kvasi-lineære preferanser i en bytteøkonomi?",
      options: ["Etterspørselen etter vare 1 er inntektsuavhengig, så all ulikhet havner i vare 2", "Begge konsumenter ender opp med nøyaktig samme kurv av begge varene, uansett beholdning", "Likevektsprisen er alltid lik 1 uansett hvordan beholdningene er fordelt", "Indifferenskurvene er rette linjer, så tangering er umulig"],
      explanation: "Konstant marginalnytte av vare 2 gjør etterspørselen etter vare 1 uavhengig av inntekt. Kurvene er fortsatt krumme.",
    },
    {
      question: "Begge konsumenter har $u = 2\\sqrt{c_1} + c_2$ og $\\Omega_1 = 8$. Hva er likevektsprisen $p_1$ når $p_2 = 1$?",
      options: ["$1/2$", "$2$", "$1/4$", "$4$"],
      explanation: "Klarering gir $2/p_1^2 = 8$, altså $p_1^2 = 1/4$ og $p_1 = 1/2$. Svaret 2 er den omvendte brøken.",
    },
    {
      question: "Grafisk kjennetegnes markedslikevekt i bytteboksen ved at",
      options: ["begges nyttemaksimerende punkt på den felles budsjettlinja er samme punkt", "budsjettlinja går gjennom midten av boksen og deler den i to like deler", "begges indifferenskurver krysser hverandre i beholdningspunktet $W$", "budsjettlinja er loddrett, slik at bare vare 2 kan handles"],
      explanation: "Faller de to tangeringspunktene sammen, er både optimal tilpasning og klarering oppfylt samtidig.",
    },
    {
      question: "Hvorfor avhenger inntekten av prisene i en bytteøkonomi?",
      options: ["Fordi inntekten er verdien av beholdningen, $m = p_1\\omega_1 + p_2\\omega_2$", "Fordi konsumentene arbeider mer når prisene stiger og dermed tjener mer", "Fordi staten kompenserer eierne når relativprisen endrer seg i markedet", "Fordi nyttefunksjonen inneholder prisene som argumenter"],
      explanation: "Det er nettopp denne tilbakevirkningen som gjør analysen generell og ikke partiell.",
    },
    {
      question: "I likevekt gjelder $\\text{MSB}_A = p_1/p_2 = \\text{MSB}_B$. Hva er den økonomiske tolkningen?",
      options: ["Begge er akkurat villige til å gi like mange enheter av vare 2 for én enhet av vare 1 som markedet krever", "Begge har like stor nytte av allokeringen de ender opp med, siden de tilpasser seg samme prisforhold", "Begge eier like mye av vare 1 målt i verdi når handelen er gjennomført", "Prisforholdet er bestemt av forholdet mellom totalbeholdningene i økonomien"],
      explanation: "MSB er et bytteforhold i vareenheter, ikke et nyttenivå. Lik MSB betyr avstemt marginal betalingsvilje, ikke lik nytte.",
    },
    {
      question: "Hvilken påstand om relativpriser er riktig?",
      options: ["$(p_1,p_2) = (3,1)$ og $(6,2)$ gir nøyaktig samme allokering", "$(p_1,p_2) = (3,1)$ og $(6,2)$ gir ulik allokering fordi prisnivået er doblet", "Bare absolutte priser bestemmer hvor mye hver konsument har råd til å kjøpe", "Relativprisen er alltid lik forholdet mellom de to totalbeholdningene"],
      explanation: "Begge prissett gir $p_1/p_2 = 3$, altså samme budsjettlinje og samme valg. Forholdet mellom totalbeholdningene bestemmer prisen bare i spesialtilfeller.",
    },
    {
      question: "Hva er riktig rekkefølge når du skal finne en numerisk likevekt?",
      options: ["Normaliser, regn inntektene, sett opp etterspørslene, klarer ett marked, kontroller", "Klarer begge markeder først, og finn deretter inntektene ut fra prisene du fikk", "Sett opp nyttefunksjonene, deriver dem, og les prisen direkte av marginalnyttene", "Regn ut totalbeholdningene, del dem i to og fordel likt mellom konsumentene"],
      explanation: "Inntekten må uttrykkes ved prisen før den settes inn i etterspørselen, siden inntekten selv avhenger av prisen.",
    },
  ],
  'econ2220-4-3': [
    {
      question: "Hva sier første velferdsteorem?",
      options: ["Enhver markedslikevekt er Pareto-effektiv", "Enhver Pareto-effektiv allokering kan realiseres som en markedslikevekt etter omfordeling", "Markedet gir den fordelingen som maksimerer summen av konsumentenes nytte", "Markedet gir en rettferdig fordeling så lenge alle er pristakere i alle markeder"],
      explanation: "Retningen går fra likevekt til effektivitet. Det andre svaret er andre teorem; summering av nytte og rettferdighet er utenfor Pareto-kriteriet.",
    },
    {
      question: "Hva sier andre velferdsteorem?",
      options: ["Enhver Pareto-effektiv allokering kan realiseres som markedslikevekt etter kostnadsfri omfordeling", "Enhver markedslikevekt er Pareto-effektiv når godene er rivaliserende og alle er pristakere", "Markedet finner alltid den mest rettferdige av de Pareto-effektive allokeringene", "Omfordeling er alltid en Pareto-forbedring når preferansene er konvekse"],
      explanation: "Retningen er fra effektivitet til likevekt. Det andre svaret er første teorem; omfordeling er nettopp ikke en Pareto-forbedring.",
    },
    {
      question: "En allokering er Pareto-effektiv når",
      options: ["ingen kan få høyere nytte uten at noen andre får lavere", "begge konsumenter har nøyaktig samme nytte målt i nytteenheter", "samlet nytte er så stor som mulig gitt totalbeholdningene i økonomien", "beholdningene er fordelt likt mellom de to konsumentene fra starten"],
      explanation: "Definisjonen bruker ingen sammenlikning av nytte mellom personer og ingen summering — bare at ingen forbedring er mulig.",
    },
    {
      question: "Hva er forskjellen på Pareto-forbedring og Pareto-effektivitet?",
      options: ["Forbedring er en bevegelse; effektivitet er en egenskap ved en allokering", "Forbedring gjelder to konsumenter; effektivitet gjelder bare når det er flere enn to", "Forbedring krever markedspriser; effektivitet kan bare vurderes med priser til stede", "De betyr det samme, men forbedring brukes om bytteøkonomier og effektivitet om produksjon"],
      explanation: "En Pareto-forbedring kan lande deg i et punkt som fortsatt ikke er effektivt — du er kommet inn i linsen, men ikke til kontraktkurven.",
    },
    {
      question: "$\\Omega = (12,18)$ og begge har $u = c_1^{1/2}c_2^{1/2}$. Er $c^A = (8,12)$ Pareto-effektiv?",
      options: ["Ja, fordi $\\text{MSB}_A = 12/8 = 6/4 = \\text{MSB}_B$", "Nei, fordi A har mer enn B av begge varer", "Ja, fordi A får nøyaktig tre fjerdedeler av vare 1", "Nei, fordi allokeringen ikke ligger på budsjettlinja gjennom $W$"],
      explanation: "B får $(4,6)$, og $\\text{MSB}_A = 12/8 = 3/2 = 6/4 = \\text{MSB}_B$ — altså tangering. At A har mest, er irrelevant for effektivitet, og A får $8/12 = 2/3$ av vare 1, ikke tre fjerdedeler.",
    },
    {
      question: "$\\Omega = (12,18)$ og begge har $u = c_1^{1/2}c_2^{1/2}$. Er $c^A = (9,6)$ Pareto-effektiv?",
      options: ["Nei, siden $\\text{MSB}_A = 2/3$ mens $\\text{MSB}_B = 4$", "Ja, siden begge forbruker positive mengder av begge varer", "Ja, siden A og B til sammen bruker opp nøyaktig totalmengdene", "Nei, siden A forbruker mer av begge varer enn B gjør"],
      explanation: "B får $(3,12)$, så brøkene er $6/9 = 2/3$ og $12/3 = 4$ — ulike, altså finnes en linse. At allokeringen er mulig, er et minstekrav, ikke effektivitet — og A forbruker faktisk mindre av vare 2 enn B (6 mot 12).",
    },
    {
      question: "Verdimaksimerings-argumentet bygger på at",
      options: ["totalverdien av allokeringen er gitt til de gjeldende prisene", "summen av nyttene er maksimert i likevekten når alle er pristakere", "prisene alltid er like store i de to markedene når vi normaliserer", "begge konsumenter har konvekse preferanser og glatte indifferenskurver"],
      explanation: "Nytte summeres aldri i dette argumentet. Konveksitet trengs for andre teorem, ikke for verdiargumentet.",
    },
    {
      question: "I verdiargumentet: hvorfor må As alternative, bedre kurv koste mer enn As inntekt?",
      options: ["Fordi A ellers ville valgt den i likevekt", "Fordi prisene stiger når A ønsker seg mer av en vare", "Fordi A må kompensere B for tapet den andre lider", "Fordi bedre kurver alltid inneholder mer av begge varer"],
      explanation: "Optimalitet betyr at alt innenfor budsjettet ikke er bedre. En bedre kurv må derfor ligge utenfor budsjettet.",
    },
    {
      question: "I verdiargumentet: hvorfor kan Bs alternative kurv ikke koste mindre enn Bs inntekt?",
      options: ["Fordi B da kunne kjøpt den og litt mer, og fått høyere nytte enn det B valgte", "Fordi B ikke har lov til å spare, og derfor må bruke opp hele inntekten sin i modellen", "Fordi prisene på Bs varer da måtte falle til null", "Fordi B alltid forbruker like mye som A i likevekt"],
      explanation: "Steget bruker lokalt umettelige preferanser: en billigere, minst like god kurv ville motsi at Bs valg var optimalt.",
    },
    {
      question: "Hvilken forutsetning brukes i steget «B kunne kjøpt den og litt mer»?",
      options: ["Lokalt umettelige preferanser", "Konvekse preferanser", "Rivaliserende goder", "Ingen transaksjonskostnader i handelen"],
      explanation: "Lokal umettelighet er også grunnen til at budsjettbetingelsen holder med likhet. De øvrige brukes andre steder i teoremapparatet.",
    },
    {
      question: "Hva er kjernetrioen av forutsetninger for første velferdsteorem?",
      options: ["Pristakere, ingen eksterne virkninger, rivaliserende goder", "Konvekse preferanser, kostnadsfri omfordeling, pristakere", "Kjente priser, ingen transaksjonskostnader, ingen stordriftsfordeler", "Like beholdninger, like preferanser og fri konkurranse i alle markeder"],
      explanation: "De to første i svaret «Konvekse preferanser» er tilleggskravene i andre teorem; svaret «Kjente priser, ingen transaksjonskostnader, ingen …» er bonuslisten.",
    },
    {
      question: "Hvilke to tilleggskrav stiller andre velferdsteorem?",
      options: ["Konvekse preferanser og kostnadsfri omfordeling", "Rivaliserende goder og ingen eksterne virkninger i produksjon eller forbruk", "Lokalt umettelige preferanser og kjente priser i alle markeder", "Like store beholdninger og identiske nyttefunksjoner for begge"],
      explanation: "De øvrige alternativene er forutsetninger som alt kreves for første teorem, eller som ikke er forutsetninger i det hele tatt.",
    },
    {
      question: "Hvorfor trengs konvekse preferanser i andre velferdsteorem?",
      options: ["For at det skal finnes priser som gjør den ønskede allokeringen til hver konsuments frie valg", "For at indifferenskurvene skal kunne krysse hverandre nettopp i det tangeringspunktet man ønsker", "For at nytten skal kunne måles og sammenliknes på tvers av konsumenter", "For at budsjettbetingelsen skal holde med likhet i stedet for ulikhet"],
      explanation: "Uten konveksitet kan konsumenten, til nettopp de prisene, foretrekke et helt annet punkt på linja. Likhet i budsjettet følger av lokal umettelighet.",
    },
    {
      question: "Hvorfor er kravet om kostnadsfri omfordeling problematisk i praksis?",
      options: ["Fordi reelle skatter treffer inntekt, forbruk eller arbeid og dermed vrir prisene", "Fordi staten ikke har informasjon om hvem som eier hva, og derfor ikke kan treffe riktig person", "Fordi omfordeling alltid gjør noen dårligere stilt og derfor er umulig", "Fordi beholdninger ikke kan flyttes fysisk mellom konsumenter"],
      explanation: "Teoremet forutsetter en ren engangsoverføring. Vridende skatter endrer bytteforhold og valg. At omfordeling gjør noen dårligere stilt, er riktig, men ikke problemet her.",
    },
    {
      question: "Hvilken forutsetning brytes ved en negativ ekstern virkning?",
      options: ["Ingen eksterne virkninger — en av kjernetrioen", "Konvekse preferanser, som er et tilleggskrav i andre teorem", "Rivaliserende goder, siden forurensning ikke kan deles opp", "Lokalt umettelige preferanser, siden forurensning gir metthet"],
      explanation: "Eksternalitet betyr nettopp at en aktør berøres av en annens valg. Da fanger prisen ikke opp hele virkningen, og første teorem gjelder ikke.",
    },
    {
      question: "Hvilken forutsetning brytes ved markedsmakt?",
      options: ["Pristaking", "Rivaliserende goder", "Konveksitet", "Ingen transaksjonskostnader"],
      explanation: "Med markedsmakt kan én aktør påvirke prisen, og premisset om at alle tilpasser seg samme, gitte prisvektor faller bort.",
    },
    {
      question: "«Første velferdsteorem viser at markedsutfallet er rettferdig.» Denne påstanden er",
      options: ["usann, fordi teoremet bare handler om effektivitet", "sann, forutsatt at alle er pristakere og godene er rivaliserende", "sann, men bare når beholdningene er likt fordelt fra starten", "usann, fordi teoremet handler om produksjon og ikke om fordeling"],
      explanation: "Pareto-kriteriet rangerer ikke fordelinger og sier ingenting om rettferdighet — en allokering der én eier alt kan være effektiv. Teoremet gjelder både med og uten produksjon.",
    },
    {
      question: "Hva er svakheten ved tangeringsargumentet sammenliknet med verdiargumentet?",
      options: ["Det krever indre løsning, glatte konvekse kurver og bare to konsumenter", "Det bruker priser, mens verdiargumentet klarer seg uten priser", "Det gjelder bare når konsumentene har identiske preferanser", "Det forutsetter at beholdningene er kjent for begge konsumentene"],
      explanation: "Verdiargumentet bruker også priser — men det gjelder generelt, også ved hjørneløsninger og med mange konsumenter og varer.",
    },
    {
      question: "Hvorfor er det ikke et gyldig bevis å skrive «alle har tilpasset seg og markedene klarerer, altså er allokeringen effektiv»?",
      options: ["Fordi det bare gjentar definisjonen av likevekt uten mellomleddet", "Fordi klarering ikke er en del av likevektsdefinisjonen i bytteøkonomier", "Fordi effektivitet må vises grafisk med en figur av bytteboksen", "Fordi man må regne ut nyttenivåene til begge konsumenter først"],
      explanation: "Premissene er nettopp forutsetningene i teoremet. Det som mangler, er verdiregningen eller tangeringen som knytter premisset til konklusjonen.",
    },
    {
      question: "Hva er kontraktkurvens rolle i de to teoremene?",
      options: ["Første teorem sier at markedet lander på kurven; andre at man kan velge hvor på kurven", "Første teorem sier at kurven er en rett linje; andre teorem at den krummer riktig vei i boksen", "Kurven viser alle allokeringer begge foretrekker fremfor beholdningen", "Kurven viser hvilke priser som klarerer begge markedene samtidig"],
      explanation: "Kontraktkurven er mengden av effektive allokeringer, altså menyen. Hvilket punkt på menyen man havner i, avgjøres av beholdningene.",
    },
    {
      question: "Hvilket argument er tryggest når oppgaven ber om et argument «uten figur»?",
      options: ["Verdimaksimerings-argumentet", "Tangeringsargumentet i bytteboksen", "Å vise til at overskuddsetterspørselen er null i begge markeder", "Å regne ut nyttenivåene i to allokeringer og sammenlikne dem"],
      explanation: "Verdiargumentet er formuleringen sensorveiledningene selv bruker, og det trenger ingen geometri.",
    },
    {
      question: "En negativ ekstern virkning i produksjonen betyr at markedslikevekten",
      options: ["ikke er Pareto-effektiv, fordi en kjerneforutsetning er brutt", "fortsatt er Pareto-effektiv, men at fordelingen blir skjev", "fortsatt er Pareto-effektiv så lenge alle forblir pristakere", "ikke lenger eksisterer, siden markedene ikke kan klarere"],
      explanation: "Første teorem gjelder ikke når forutsetningen om ingen eksterne virkninger brytes. Markedene kan fortsatt klarere — de klarerer bare til et ineffektivt utfall.",
    },
    {
      question: "Hvor i en besvarelse hører kollektive goder og asymmetrisk informasjon naturlig hjemme i dette emnet?",
      options: ["Som brudd på forutsetningene for velferdsteoremene", "Som en egen hovedoppgave om markedssvikt med full analyse", "I definisjonen av Pareto-effektivitet, som et unntak", "I utledningen av budsjettbetingelsen for hver konsument"],
      explanation: "I arkivsettene opptrer temaene kun i forutsetningslisten. Selve apparatet for analysen hører til forgjengerboka.",
    },
    {
      question: "Første teorem sier ingenting om",
      options: ["hvilken av de effektive allokeringene markedet lander på", "om det finnes gjensidig fordelaktige bytter som er utnyttet", "om markedene klarerer i likevekten som studeres", "om konsumentene tilpasser seg optimalt til prisene"],
      explanation: "Hvilket effektivt punkt man havner i, avgjøres av beholdningene — det er nettopp derfor andre teorem er interessant.",
    },
    {
      question: "Hvilken rekkefølge følger andre velferdsteorem operativt?",
      options: ["Velg effektiv allokering, omfordel beholdninger, la markedet virke", "La markedet virke, mål ulikheten, sett så en skatt på handelen", "Fastsett prisene politisk, og fordel deretter godene direkte", "Regn ut likevekten først, og velg deretter den mest rettferdige prisen"],
      explanation: "Omfordelingen skjer FØR handelen, som en engangsoverføring av beholdninger. Å skattlegge handelen ville vridd prisene.",
    },
  ],
  'econ2220-4-4': [
    {
      question: "Staten flytter beholdning fra B til A før handelen. Den nye markedslikevekten er",
      options: ["Pareto-effektiv, men overgangen dit er ingen Pareto-forbedring", "både Pareto-effektiv og resultatet av en Pareto-forbedring for begge parter", "verken Pareto-effektiv eller resultatet av en Pareto-forbedring i denne modellen", "Pareto-effektiv bare hvis relativprisen er uendret etter overføringen"],
      explanation: "Første velferdsteorem gjelder for enhver markedslikevekt. Men B taper på overføringen, så bevegelsen er ingen forbedring — og prisen kan gjerne endre seg.",
    },
    {
      question: "Hva er en lumpsum-overføring?",
      options: ["En engangsflytting av beholdning som ikke endrer bytteforholdene", "En skatt per omsatt enhet som legges på selgeren i markedet", "En overføring som deles likt mellom de to konsumentene i økonomien", "En overføring som bare skjer hvis begge parter samtykker til den"],
      explanation: "Det avgjørende er at helningen på budsjettlinja er uendret. En skatt per enhet vrir derimot bytteforholdene.",
    },
    {
      question: "Hvorfor gjelder første velferdsteorem fortsatt etter en engangsoverføring?",
      options: ["Fordi teoremet stiller krav til mekanismen, ikke til hvor beholdningene kom fra", "Fordi engangsoverføringer alltid gjør begge parter bedre stilt enn de var før overføringen", "Fordi totalmengdene i økonomien endres når beholdningene flyttes", "Fordi relativprisen alltid er uendret etter en engangsoverføring"],
      explanation: "Kjernetrioen — pristaking, ingen eksternaliteter, rivaliserende goder — er uberørt. Prisen kan godt endre seg uten at teoremet svikter.",
    },
    {
      question: "Etter en engangsoverføring endres relativprisen",
      options: ["i alminnelighet, men ikke når begge har samme budsjettandel på vare 1", "aldri, siden totalmengdene i økonomien er uendret", "alltid, ettersom inntektene til begge konsumentene endrer seg når beholdningene flyttes", "bare hvis overføringen gjelder vare 2 og ikke vare 1"],
      explanation: "Samlet etterspørsel avhenger av fordelingen av inntekt. Med identiske budsjettandeler avhenger den bare av samlet inntekt, og prisen ligger fast.",
    },
    {
      question: "Allokeringen der A eier alt og B ingenting, er",
      options: ["Pareto-effektiv, gitt voksende preferanser", "aldri Pareto-effektiv, siden B ikke kan tilpasse seg optimalt der", "Pareto-effektiv bare hvis $\\text{MSB}_A = \\text{MSB}_B$ i hjørnet", "en Pareto-forbedring sammenliknet med enhver indre allokering"],
      explanation: "Skal B få noe, må A gi fra seg noe og blir dårligere stilt. Tangeringsbetingelsen er ikke definert i hjørnet og kan derfor ikke brukes.",
    },
    {
      question: "Hvorfor kan du ikke bruke $\\text{MSB}_A = \\text{MSB}_B$ i en hjørneallokering?",
      options: ["Fordi betingelsen forutsetter et indre punkt med definerte helninger for begge", "Fordi hjørneallokeringer aldri er effektive og betingelsen dermed er irrelevant", "Fordi de to konsumentene har ulike nyttefunksjoner i hjørnene", "Fordi prisene ikke er definert når en konsument forbruker null"],
      explanation: "Tangeringsargumentet gjelder indre løsninger. Effektiviteten i hjørnet vises med et dominansargument i stedet.",
    },
    {
      question: "Hva betyr det at Pareto-begrepet er fordelingsblindt?",
      options: ["At kriteriet ikke rangerer allokeringer der én vinner og en annen taper", "At kriteriet alltid foretrekker den mest likelig fordelte allokeringen", "At kriteriet krever at nytten kan sammenliknes mellom personer", "At kriteriet bare gjelder når beholdningene er likt fordelt fra starten"],
      explanation: "Kriteriet unngår bevisst å sammenlikne nytte mellom personer, og blir derfor tomt så snart noen taper.",
    },
    {
      question: "«Kan staten nå enhver Pareto-effektiv allokering ved å inndra alt og dele det ut på nytt?»",
      options: ["Ja — det er innholdet i andre velferdsteorem", "Nei — markedet vil alltid handle seg bort fra den tildelte allokeringen", "Ja, men bare hvis allokeringen ligger i et av bytteboksens hjørner", "Nei — første velferdsteorem slutter å gjelde etter en inndragning"],
      explanation: "Gi hver konsument den ønskede kurven som beholdning; da er den alt en likevekt til de tangerende prisene, og ingen handler videre.",
    },
    {
      question: "Hvilke forutsetninger må med i svaret på konfiskasjon-og-omdeling-spørsmålet?",
      options: ["Konvekse preferanser og kostnadsfri omfordeling, i tillegg til kjernetrioen", "Lokalt umettelige preferanser og at godene er ikke-rivaliserende", "At de to konsumentene har identiske nyttefunksjoner og beholdninger", "At staten setter prisene etter at omfordelingen er gjennomført"],
      explanation: "Uten konveksitet finnes ikke nødvendigvis priser som gjør kurven til hver konsuments frie valg; uten kostnadsfrihet vris bytteforholdene.",
    },
    {
      question: "Hvorfor bryter en skatt per omsatt enhet effektiviteten?",
      options: ["Fordi kjøper og selger da møter ulike priser og ulike marginale bytteforhold", "Fordi staten får en inntekt som ikke tilfaller konsumentene", "Fordi totalmengdene i økonomien reduseres av skatten", "Fordi konsumentene slutter å være nyttemaksimerende når det er skatt"],
      explanation: "Kravet i første teorem er at alle er pristakere som møter samme priser. En kile mellom kjøper- og selgerpris bryter det.",
    },
    {
      question: "Begge har $u = c_1^{1/2}c_2^{1/2}$, $\\omega^A = (10,4)$, $\\omega^B = (2,8)$. Hva er likevektsprisen med $p_2 = 1$?",
      options: ["$1$", "$2$", "$3$", "$1/2$"],
      explanation: "Samlet etterspørsel er $(10p+4)/(2p) + (2p+8)/(2p) = 6 + 6/p$. Sett lik $\\Omega_1 = 12$: $6/p = 6$, altså $p = 1$.",
    },
    {
      question: "A går fra kurven $(8,6)$ til $(10,10)$ etter en omfordeling. Hva kan du si om As nytte uten å regne?",
      options: ["Den har steget, siden A får mer av begge varer", "Den er uendret, siden A ligger på samme indifferenskurve", "Den har falt, siden prisen på vare 1 samtidig steg", "Det kan ikke avgjøres uten å kjenne nyttefunksjonen"],
      explanation: "Med voksende preferanser er mer av begge varer utvetydig bedre. Dominansargumentet sparer all regning.",
    },
    {
      question: "«At allokeringen er Pareto-effektiv, betyr at omfordelingen var vellykket politikk.» Påstanden er",
      options: ["usann — effektivitet er ikke en dom over fordelingen", "sann, siden effektive allokeringer alltid er å foretrekke", "sann hvis og bare hvis relativprisen er uendret etterpå", "usann — effektive allokeringer kan ikke oppnås ved omfordeling"],
      explanation: "Både den gamle og den nye likevekten er effektive; kriteriet rangerer dem ikke. Om politikken var vellykket, avhenger av et fordelingsmål utenfor Pareto-kriteriet.",
    },
    {
      question: "Hvilken formulering av andre velferdsteorem er presis?",
      options: ["Enhver Pareto-effektiv allokering kan realiseres som likevekt etter kostnadsfri omfordeling", "Staten kan oppnå enhver ønsket fordeling ved først å omfordele beholdningene og så la markedet virke", "Enhver markedslikevekt kan gjøres mer rettferdig ved en engangsoverføring", "Enhver omfordeling av beholdninger gir en ny Pareto-effektiv allokering"],
      explanation: "Teoremet gjelder klassen av Pareto-effektive allokeringer. «Enhver ønsket fordeling» er for vidt, og siste alternativ er en feilslutning.",
    },
    {
      question: "En bevegelse fra en ineffektiv til en effektiv allokering er",
      options: ["ikke nødvendigvis en Pareto-forbedring", "alltid en Pareto-forbedring, siden effektivitet er bedre enn ineffektivitet", "aldri en Pareto-forbedring, siden noen alltid må gi fra seg noe", "en Pareto-forbedring bare når prisene er uendret gjennom bevegelsen"],
      explanation: "Man kan gå til hjørneallokeringen, som er effektiv, men der den ene er ruinert. Bevegelser inn i linsen er derimot forbedringer, så «aldri» er også galt.",
    },
  ],
  'econ2220-4-5': [
    {
      question: "Hva er steg 1 i oppskriften for oppgave 2?",
      options: ["Tegn boksen: sidene er totalmengdene, og Bs origo er oppe til høyre", "Regn ut likevektsprisen, slik at du har tallet før du tegner figuren", "Skriv opp velferdsteoremene med hele forutsetningslisten først", "Normaliser prisene ved å sette begge prisene lik 1 i utgangspunktet"],
      explanation: "Figuren først: den bærer leseferdighets-spørsmålene og gjør resten av oppgaven lettere å disponere. Normalisering setter bare ÉN pris lik 1.",
    },
    {
      question: "Hvorfor holder det å klarere ett marked i en to-vare-økonomi?",
      options: ["Fordi Walras' lov gir $p_1z_1 + p_2z_2 = 0$ ved alle priser", "Fordi de to markedene alltid har samme overskuddsetterspørsel", "Fordi prisen i det andre markedet er normalisert til 1", "Fordi konsumentene bare handler i ett av markedene om gangen"],
      explanation: "Loven følger av at hver konsument overholder budsjettet. Normaliseringen er en helt annen operasjon, og markedene har generelt ulik overskuddsetterspørsel.",
    },
    {
      question: "A har $\\omega^A = (2,8)$ og $u = c_1^{1/2}c_2^{1/2}$. Med $p_2 = 1$, hva er As etterspørsel etter vare 1?",
      options: ["$1 + 4/p$", "$4/p$", "$2 + 8/p$", "$1 + 8/p$"],
      explanation: "Inntekten er $m = 2p + 8$, og $c_1 = \\tfrac12 m/p = (p+4)/p = 1 + 4/p$.",
    },
    {
      question: "Samlet etterspørsel etter vare 1 er $7 + 12/p$ og $\\Omega_1 = 13$. Likevektsprisen er",
      options: ["$2$", "$6$", "$12$", "$1/2$"],
      explanation: "Sett $7 + 12/p = 13$, altså $12/p = 6$ og $p = 2$. Svaret 6 kommer av å glemme det konstante leddet 7.",
    },
    {
      question: "For $u = c_1^{3/4}c_2^{1/4}$ og kurven $(6,4)$ er MSB lik",
      options: ["$2$", "$2/3$", "$3$", "$1/2$"],
      explanation: "$\\text{MSB} = \\frac{a}{1-a}\\cdot\\frac{c_2}{c_1} = 3 \\cdot \\frac{4}{6} = 2$. Å glemme vektforholdet gir 2/3.",
    },
    {
      question: "Hvilken kontroll skal alltid gjøres på en beregnet likevekt?",
      options: ["At mengdene summerer seg til totalene, og at $\\text{MSB}_A = p_1/p_2 = \\text{MSB}_B$", "At begge konsumenter ender opp med like mye av begge varer når handelen er gjennomført", "At relativprisen er lik forholdet mellom de to totalbeholdningene", "At begge konsumenter er netto kjøpere av den varen de eier mest av"],
      explanation: "To uavhengige kontroller som aldri skal lande motsatt. Lik fordeling og bestemte prisforhold er ikke generelle kjennetegn på likevekt.",
    },
    {
      question: "Hva er «uten figur» et signal om i en oppgavetekst?",
      options: ["At verdimaksimerings-argumentet skal skrives ut", "At du skal beskrive figuren i ord i stedet for å tegne den", "At du kan hoppe over begrunnelsen og bare oppgi konklusjonen", "At du skal bruke tangeringsbetingelsen i stedet for verdiregning"],
      explanation: "Tangeringsargumentet er geometri, og en verbal figurbeskrivelse er fortsatt en figur. Verdiargumentet er svaret.",
    },
    {
      question: "Hvilket ledd i verdiargumentet bruker lokalt umettelige preferanser?",
      options: ["Steget der Bs alternative kurv ikke kan være billigere enn Bs inntekt", "Steget der As alternative kurv må være dyrere enn As inntekt", "Steget der de to ulikhetene legges sammen", "Steget der motsigelsen mot at allokeringen er mulig etableres"],
      explanation: "Var Bs kurv billigere, kunne B kjøpt den og litt mer, og umettelighet garanterer at det finnes noe bedre vilkårlig nær.",
    },
    {
      question: "Etter en engangsoverføring: hvilke to konklusjoner skal alltid trekkes?",
      options: ["Punktet er Pareto-effektivt; bevegelsen er ingen Pareto-forbedring", "Punktet er Pareto-effektivt; bevegelsen er også en Pareto-forbedring", "Punktet er ikke effektivt; bevegelsen er en Pareto-forbedring for mottakeren", "Punktet er effektivt bare hvis relativprisen holdt seg uendret gjennom overføringen"],
      explanation: "Første velferdsteorem gjelder for enhver markedslikevekt, men giveren taper — så bevegelsen er ingen forbedring.",
    },
    {
      question: "Når kan du IKKE påkalle andre velferdsteorem?",
      options: ["Når allokeringen oppgaven spør om ikke er Pareto-effektiv", "Når konsumentene har ulike budsjettandeler i Cobb-Douglas-nytten", "Når beholdningene er ulikt fordelt mellom de to konsumentene", "Når relativprisen endrer seg som følge av omfordelingen"],
      explanation: "Teoremet gjelder klassen av Pareto-effektive allokeringer. Kontroller $\\text{MSB}_A = \\text{MSB}_B$ først; ulike andeler og prisendringer er ingen hindring.",
    },
    {
      question: "Begge har $u = 2\\sqrt{c_1} + c_2$ og $\\Omega_1 = 32$. Likevektsprisen $p_1$ er (med $p_2 = 1$)",
      options: ["$1/4$", "$4$", "$1/16$", "$16$"],
      explanation: "$c_1 = 1/p_1^2$ for begge, så klarering gir $2/p_1^2 = 32$, altså $p_1^2 = 1/16$ og $p_1 = 1/4$.",
    },
    {
      question: "Hvorfor endrer ikke en omfordeling relativprisen når begge har budsjettandelen $a = \\tfrac12$?",
      options: ["Fordi samlet etterspørsel da bare avhenger av samlet inntekt, ikke av fordelingen", "Fordi totalmengdene i økonomien er uendret av en omfordeling av beholdningene mellom dem", "Fordi engangsoverføringer per definisjon aldri påvirker priser", "Fordi de to konsumentene da har identiske indifferenskurver"],
      explanation: "Med like andeler er samlet etterspørsel en funksjon av summen av inntektene, som overføringen ikke endrer. Med ulike andeler flytter prisen seg.",
    },
    {
      question: "Hvordan bør forutsetningene for første velferdsteorem presenteres?",
      options: ["Kjernetrioen først og markert, deretter bonuslisten", "I alfabetisk rekkefølge, slik at ingen blir glemt underveis", "Bare kjernetrioen — bonuslisten gir ingen uttelling på eksamen", "Samlet i én setning, uten å skille mellom dem"],
      explanation: "Rangeringen er en del av svaret. Bonuslisten gir tillegg, så den skal med — men etter kjernetrioen.",
    },
    {
      question: "Hva testes egentlig når en oppgave ber deg forklare hvorfor A og B har samme budsjettlinje?",
      options: ["Om du har begge argumentene: rotasjon med felles punkt, og adding-up", "Om du kan regne ut helningen $-p_1/p_2$ riktig ut fra de oppgitte prisene", "Om du husker at budsjettlinja går gjennom midten av bytteboksen", "Om du kan tegne linja med riktig helning i figuren"],
      explanation: "Det geometriske argumentet alene forklarer helning; poenget er at $W$ ligger på begges linje, og adding-up-argumentet viser at de to betingelsene er ett krav.",
    },
    {
      question: "Hva er det mest dokumenterte sensortrekket i oppgave 2?",
      options: ["At markedsklareringen «i alle markeder» mangler i likevektsdefinisjonen", "At kandidaten regner ut likevektsprisen med for få desimaler", "At kandidaten tegner figuren med blyant i stedet for penn", "At kandidaten normaliserer $p_2 = 1$ i stedet for $p_1 = 1$"],
      explanation: "Å beskrive individuell tilpasning og kalle det likevekt er den gjentatte feilen. Valget av hvilken pris som normaliseres, er helt fritt.",
    },
  ],
  'econ2220-5-1': [
    {
      question: "Hva sier produktfunksjonen $y = F(K,L)$?",
      options: ["Den største mengden som kan produseres med kapitalen $K$ og arbeidet $L$", "Kostnaden ved å produsere mengden $y$ med faktorene $K$ og $L$ til faktorprisene $r$ og $w$", "Den mengden bedriften faktisk velger å produsere ved gitte priser", "Bedriftens profitt ved faktorbruken $K$ og $L$"],
      explanation: "Produktfunksjonen er en ren teknologisk beskrivelse og gir det maksimalt oppnåelige utbyttet av faktormengdene. Priser, kostnader og valg kommer først inn fra kap. 5.2.",
    },
    {
      question: "Hva er marginalproduktet av arbeid, $F'_L$?",
      options: ["Ekstra produksjon per ekstra arbeidstime, med kapitalen holdt fast", "Ekstra produksjon når både arbeidet og kapitalen økes med én enhet hver, altså begge faktorene samtidig", "Lønnskostnaden per produsert enhet", "Produksjonen delt på antall arbeidstimer"],
      explanation: "$F'_L$ er den partielle deriverte $\\partial F/\\partial L$: virkningen av én faktor når de andre står fast. Produksjonen delt på timene er gjennomsnittsproduktet, ikke marginalproduktet.",
    },
    {
      question: "Hva er $F'_L$ for $F(K,L) = \\sqrt{KL}$?",
      options: ["$\\tfrac{1}{2}\\sqrt{K/L}$", "$\\tfrac{1}{2}\\sqrt{L/K}$", "$\\sqrt{K/L}$", "$\\tfrac{1}{2}\\sqrt{KL}$"],
      explanation: "$F = K^{1/2}L^{1/2}$ gir $F'_L = \\tfrac{1}{2}K^{1/2}L^{-1/2} = \\tfrac{1}{2}\\sqrt{K/L}$. Uttrykket $\\tfrac{1}{2}\\sqrt{L/K}$ er marginalproduktet av kapital.",
    },
    {
      question: "Hvilken sammenlikning utgjør skalautbytte-testen?",
      options: ["$F(tK,tL)$ mot $tF(K,L)$ for $t > 1$", "$F(K,tL)$ mot $tF(K,L)$ for $t > 1$", "$F'_K$ mot $F'_L$", "$F(K,L)$ mot $K + L$"],
      explanation: "Skalautbytte handler om at ALLE faktorer skaleres med samme $t$. Å skalere bare $L$ tester marginalproduktivitet, ikke skalautbytte.",
    },
    {
      question: "Testen gir $F(tK,tL) = t^{0{,}8}F(K,L)$. Hvilket skalautbytte har teknologien?",
      options: ["Avtakende", "Konstant", "Tiltakende", "Det kan ikke avgjøres uten faktorprisene"],
      explanation: "For $t > 1$ er $t^{0{,}8} < t$, så $F(tK,tL) < tF(K,L)$. Faktorprisene er irrelevante: skalautbytte er en egenskap ved teknologien alene.",
    },
    {
      question: "Hvilket skalautbytte har $F(K,L) = \\sqrt{KL}$?",
      options: ["Konstant, siden $F(tK,tL) = t^{1/2}t^{1/2}F(K,L) = tF(K,L)$", "Avtakende, siden kvadratrota vokser langsommere enn argumentet", "Tiltakende, siden produktet $KL$ vokser med $t^2$", "Avtakende, siden marginalproduktene faller"],
      explanation: "Eksponentene $1/2$ og $1/2$ summerer seg til 1. At $KL$ vokser med $t^2$ er riktig, men rota halverer eksponenten; og fallende marginalprodukter sier ingenting om skalautbyttet.",
    },
    {
      question: "En besvarelse skriver: «Eksponentene summerer seg til 1, altså konstant skalautbytte.» Hva er problemet?",
      options: ["Testen er ikke utført — sensor krever at $tK$ og $tL$ settes inn og $t$ trekkes ut", "Ingenting; eksponentsummen er et fullgodt bevis for enhver produktfunksjon, enten den er Cobb-Douglas eller ikke", "Eksponentsummen avgjør skalautbyttet bare når faktorprisene er like", "Konklusjonen er feil; eksponentsum 1 gir avtakende skalautbytte"],
      explanation: "Konklusjonen er riktig for Cobb-Douglas, men framgangsmåten mangler. Dette er feil #3 — egenskap påstått uten test. Bruk eksponentsummen som kontroll etter testen.",
    },
    {
      question: "Hva er forskjellen på avtakende marginalproduktivitet og avtakende skalautbytte?",
      options: ["Det første holder de andre faktorene fast; det andre skalerer alle faktorene", "Det første gjelder bare på kort sikt, mens det andre bare kan avgjøres for Cobb-Douglas-funksjoner", "Det er to navn på samme egenskap ved teknologien", "Det første gjelder kapital, det andre gjelder arbeid"],
      explanation: "Spørsmålet «hva holdes fast?» skiller dem. $\\sqrt{KL}$ har avtakende marginalproduktivitet i begge faktorer og likevel konstant skalautbytte.",
    },
    {
      question: "Kan en teknologi ha avtakende marginalproduktivitet i begge faktorer og samtidig tiltakende skalautbytte?",
      options: ["Ja — $K^{2/3}L^{2/3}$ er et eksempel", "Nei, avtakende marginalprodukter utelukker tiltakende skalautbytte", "Bare hvis den ene faktoren er fast", "Bare hvis effektivitetsparameteren $A$ er større enn 1"],
      explanation: "$K^{2/3}L^{2/3}$ har $\\partial^2F/\\partial L^2 < 0$ og eksponentsum $4/3 > 1$. De to egenskapene svarer på ulike spørsmål og kan opptre samtidig.",
    },
    {
      question: "Hva er en isokvant?",
      options: ["Alle faktorkombinasjoner $(K,L)$ som gir samme produserte mengde", "Alle faktorkombinasjoner som koster like mye", "Alle produksjonsmengder som gir samme profitt", "Kurven som viser hvordan produksjonen øker når arbeidsmengden $L$ øker og kapitalen holdes fast"],
      explanation: "Isokvanten er produktfunksjonens høydekurve, altså løsningene av $F(K,L) = \\bar y$. Kombinasjoner med samme kostnad ligger på en isokostlinje (kap. 5.2).",
    },
    {
      question: "Hva er isokvanten for $F(K,L) = \\sqrt{KL}$ ved $\\bar y = 6$?",
      options: ["$K = 36/L$", "$K = 6/L$", "$K = 36 - L$", "$K = 6 - L$"],
      explanation: "$\\sqrt{KL} = 6$ gir $KL = 36$, altså $K = 36/L$. Isokvanten er en hyperbel, ikke en rett linje.",
    },
    {
      question: "Hvordan påvirker effektivitetsparameteren $A$ i $F = AK^{a}L^{b}$ skalautbyttet?",
      options: ["Ikke i det hele tatt — $A$ står på begge sider av testen og forsvinner ut", "Er $A > 1$, blir skalautbyttet tiltakende, fordi hele produksjonen da skaleres opp med en faktor over 1", "$A$ legges til eksponentsummen i vurderingen", "$A$ gjør skalautbyttet avtakende når $A < 1$"],
      explanation: "$A(tK)^a(tL)^b = t^{a+b}AK^aL^b$: $A$ skalerer nivået, men er borte fra sammenlikningen. Regimet avgjøres av $a+b$ alene.",
    },
    {
      question: "Med konstant skalautbytte, hvilken form får kostnadsfunksjonen?",
      options: ["Lineær, $c(y) = k\\,y$", "Konveks, med $c''(y) > 0$", "Konkav, med fallende marginalkostnad", "Kvadratisk, $c(y) = ky^2$"],
      explanation: "En kopi av driften koster like mye og gir like mye, så kostnadene stiger i takt med produksjonen. Konveks kostnadsfunksjon hører til avtakende skalautbytte.",
    },
    {
      question: "Hvilket skalautbytte har $F(K,L) = 2K + 3L$?",
      options: ["Konstant", "Tiltakende", "Avtakende", "Skalautbytte er ikke definert for slike teknologier"],
      explanation: "$F(tK,tL) = 2tK + 3tL = t(2K+3L) = tF(K,L)$. Testen virker på enhver produktfunksjon; det er huskeregelen om eksponentsummen som er begrenset til Cobb-Douglas.",
    },
    {
      question: "Et gartneri med $F = K^{0{,}3}L^{0{,}5}$ dobler både areal og arbeidstimer. Hva skjer med produksjonen?",
      options: ["Den ganges med $2^{0{,}8} \\approx 1{,}74$", "Den dobles", "Den ganges med $0{,}8$", "Den ganges med $2^{1{,}25} \\approx 2{,}38$"],
      explanation: "$F(2K,2L) = 2^{0{,}3+0{,}5}F(K,L) = 2^{0{,}8}F(K,L)$. Tallet $2^{1{,}25}$ er svaret på det motsatte spørsmålet: hvor mye faktorene må økes for å doble produksjonen.",
    },
    {
      question: "Hvor mye må alle faktorene økes for at produksjonen skal dobles, når $F = K^{a}L^{b}$?",
      options: ["Med faktoren $t = 2^{1/(a+b)}$", "Med faktoren $t = 2^{a+b}$", "Alltid med faktoren 2", "Med faktoren $t = (a+b)/2$"],
      explanation: "Kravet er $t^{a+b} = 2$; opphøy begge sider i $1/(a+b)$. Ved konstant skalautbytte ($a+b=1$) gir formelen $t = 2$, som ventet.",
    },
    {
      question: "Hva er kopieringsargumentet et argument for?",
      options: ["At en teknologi minst bør ha konstant skalautbytte", "At marginalproduktet av arbeid må være avtakende", "At bedrifter alltid bør vokse", "At kostnaden per enhet faller når bedriften vokser"],
      explanation: "Kan driften kopieres nøyaktig, gir dobbel innsats minst dobbelt utbytte. Avvik nedover forklares med koordinasjonskostnader eller en faktor som ikke lar seg kopiere.",
    },
    {
      question: "Hvorfor kan målt skalautbytte bli avtakende selv om driften i prinsippet kan kopieres?",
      options: ["Fordi en faktor i praksis ikke skaleres — tomta, konsesjonen eller lokaliteten", "Fordi marginalkostnaden alltid stiger over tid", "Fordi faktorprisene $r$ og $w$ stiger når bedriften etterspør større mengder arbeid og kapital", "Fordi produktfunksjonen bare gjelder for små mengder"],
      explanation: "Da er «alt doblet» ikke egentlig alt: en skjult fast faktor holder produksjonen igjen. Modellen tar faktorprisene som gitte, så prisstigning er ikke forklaringen her.",
    },
    {
      question: "Er skalautbytte et kortsiktig eller langsiktig begrep?",
      options: ["Langsiktig — testen krever at begge faktorene kan skaleres", "Kortsiktig — kapitalen holdes fast i testen", "Begge deler, avhengig av faktorprisene", "Verken–eller; tid spiller ingen rolle i produktfunksjonen"],
      explanation: "Med låst kapital kan man ikke gange begge faktorer med $t$. Da er det marginalproduktivitet som styrer bildet, og det er kort-sikt-analysen i kap. 5.3.",
    },
    {
      question: "En besvarelse utfører testen riktig og stopper der. Hva mangler?",
      options: ["Tolkningen: hva regimet betyr for produksjon og kostnad per enhet når driften vokser", "Ingenting — testen er hele svaret sensor ber om", "En figur med isokvantkartet, der de tre skalaregimene er tegnet inn ved siden av hverandre", "En beregning av bedriftens profitt"],
      explanation: "Boka og sensorveiledningene krever begge deler: utled matematisk OG oversett til økonomiske enheter. En figur er støtte, aldri erstatning for utledningen.",
    },
  ],
  'econ2220-5-2': [
    {
      question: "Hva er kostnadsminimeringsproblemet?",
      options: ["$\\min rK + wL$ gitt $F(K,L) = \\bar y$", "$\\max F(K,L)$ gitt $rK + wL = \\bar c$, altså størst mulig produksjon for et gitt budsjett", "$\\max py - c(y)$, altså den mengden som gir størst mulig profitt til produktprisen $p$", "$\\min F(K,L)$ gitt $rK + wL = \\bar c$"],
      explanation: "Mengden er gitt og miksen velges. Det andre alternativet er det duale problemet (maksimer produksjon for gitt budsjett), og det tredje er profittmaksimering fra kap. 5.4.",
    },
    {
      question: "Hvorfor kan ikke innsettingsmetoden brukes på kostnadsminimering?",
      options: ["Bibetingelsen $F(K,L) = \\bar y$ kan generelt ikke løses ut for én variabel", "Fordi målfunksjonen $rK + wL$ er lineær og derfor ikke kan deriveres på vanlig måte", "Fordi problemet har to variabler, og innsetting krever at det bare er én", "Fordi faktorprisene $r$ og $w$ er ukjente størrelser i problemet"],
      explanation: "Innsetting krever at bibetingelsen inverteres. En generell produktfunksjon lar seg ikke løse for $K$ eller $L$, og V2025-veiledningen sier eksplisitt at Lagrange må brukes.",
    },
    {
      question: "Hva blir kostnadsminimeringsbetingelsen når $\\lambda$ er eliminert?",
      options: ["$F'_K/F'_L = r/w$", "$F'_K \\cdot F'_L = rw$", "$F'_K/F'_L = w/r$", "$F'_K + F'_L = r + w$"],
      explanation: "Del $r = \\lambda F'_K$ på $w = \\lambda F'_L$. Pass på rekkefølgen: kapitalens marginalprodukt over arbeidets, og kapitalprisen over arbeidsprisen.",
    },
    {
      question: "Hva forteller den marginale tekniske substitusjonsbrøken $F'_K/F'_L$?",
      options: ["Hvor mange enheter arbeid som må erstatte én enhet kapital for uendret produksjon", "Hvor mange kroner arbeidet koster i forhold til kapitalen i faktormarkedet, altså prisforholdet mellom dem", "Hvor mye produksjonen øker når begge faktorene økes med én enhet", "Hvor stor andel av kostnaden som går til arbeid"],
      explanation: "MTSB er teknologiens bytteforhold, avlest som tallverdien av isokvantens helning. Kroneforholdet mellom faktorene er $r/w$ — markedets bytteforhold, altså høyresiden i betingelsen.",
    },
    {
      question: "Hva er helningen til isokostlinja $rK + wL = \\bar c$ når $L$ står på den vannrette aksen?",
      options: ["$-w/r$", "$-r/w$", "$-rw$", "$-\\bar c/r$"],
      explanation: "Løs for $K$: $K = \\bar c/r - (w/r)L$. Koeffisienten foran $L$ er helningen. Brøken $r/w$ er faktorprisforholdet i betingelsen, ikke linjas helning.",
    },
    {
      question: "Hva er en isokvant, sammenliknet med en isokostlinje?",
      options: ["Isokvanten samler like produktive kombinasjoner, isokostlinja like dyre", "Isokvanten samler like dyre kombinasjoner, isokostlinja like produktive", "Begge samler like produktive kombinasjoner, men ved ulike faktorpriser", "Isokvanten er rett, isokostlinja er krum"],
      explanation: "Isokvanten løser $F(K,L) = \\bar y$ og er krum; isokostlinja løser $rK + wL = \\bar c$ og er rett. Å bytte om på dem ødelegger også tangeringsargumentet.",
    },
    {
      question: "Hvorfor skrives bibetingelsen $F(K,L) = \\bar y$ med likhetstegn?",
      options: ["Fordi faktorene koster penger, så å produsere mer enn kravet er sløsing som kan spares bort", "Fordi produktfunksjonen alltid er en likning, aldri en ulikhet", "Fordi Lagrange-metoden matematisk sett ikke kan håndtere ulikheter i noen sammenheng, verken hos konsumenten eller hos produsenten", "Fordi bedriften har en kontrakt som forbyr overproduksjon"],
      explanation: "Selv med $F(K,L) \\ge \\bar y$ ville optimum ligge på isokvanten: overskytende produksjon betyr faktorer bedriften kunne kuttet. Vi skriver likhet fordi den uansett gjelder i optimum.",
    },
    {
      question: "For $F(K,L) = \\sqrt{KL}$, hva blir kostnadsminimeringsbetingelsen?",
      options: ["$L/K = r/w$", "$K/L = r/w$", "$L/K = w/r$", "$KL = rw$"],
      explanation: "$F'_K = \\tfrac12\\sqrt{L/K}$ og $F'_L = \\tfrac12\\sqrt{K/L}$, så brøken blir $L/K$. Bytter du om, får du feil retning på faktorsubstitusjonen.",
    },
    {
      question: "Hva er kostnadsfunksjonen for $F(K,L) = \\sqrt{KL}$ ved faktorprisene $r$ og $w$?",
      options: ["$c(y) = 2y\\sqrt{rw}$", "$c(y) = y\\sqrt{rw}$", "$c(y) = 2y^{3/2}\\sqrt{rw}$", "$c(y) = (r+w)y$"],
      explanation: "$K^* = y\\sqrt{w/r}$ og $L^* = y\\sqrt{r/w}$ gir $rK^* = wL^* = y\\sqrt{rw}$, altså to like ledd. Uttrykket med $y^{3/2}$ hører til $K^{1/3}L^{1/3}$.",
    },
    {
      question: "Vaskeriet har $F = \\sqrt{KL}$, $r = 4$ og $w = 9$. Hva er kostnadsfunksjonen?",
      options: ["$c(y) = 12y$", "$c(y) = 13y$", "$c(y) = 36y$", "$c(y) = 6y$"],
      explanation: "$c(y) = 2y\\sqrt{rw} = 2y\\sqrt{36} = 12y$. Summen $r + w = 13$ er en typisk regnefeil: faktorprisene skal ganges under rottegnet, ikke legges sammen.",
    },
    {
      question: "Hva er en betinget faktoretterspørsel?",
      options: ["Den kostnadsminimerende faktormengden som funksjon av faktorprisene og produksjonsmengden", "Etterspørselen etter faktoren når bedriften også har valgt hvor mye den vil produsere", "Etterspørselen etter produktet fra bedriftens kunder ved gitt produktpris", "Den faktormengden som gir størst mulig produksjon for et gitt budsjett"],
      explanation: "Den er «betinget» av at mengden $y$ er gitt utenfra. Den ubetingede faktoretterspørselen får du først når kvantumsvalget er gjort i kap. 5.4.",
    },
    {
      question: "Hvilken størrelse inngår IKKE i kostnadsminimeringsproblemet?",
      options: ["Produktprisen $p$", "Kapitalprisen $r$", "Lønna $w$", "Produksjonskravet $\\bar y$"],
      explanation: "Problemet inneholder bare faktorpriser, teknologi og produksjonskrav. Dukker $p$ opp i en kostnadsminimeringsutledning, har noe gått galt.",
    },
    {
      question: "Bestemmer kostnadsminimering hvor mye bedriften skal produsere?",
      options: ["Nei — mengden er gitt; kostnadsminimering finner bare billigste miks", "Ja, den gir den mengden der kostnaden per produserte enhet er lavest mulig, altså i bunnen av gjennomsnittskostnaden", "Ja, den gir mengden der samlet kostnad er lavest", "Bare når teknologien har konstant skalautbytte"],
      explanation: "Dette er feil #4, testet som påstand i V2023. Uten produktprisen kan problemet umulig avgjøre lønnsomt kvantum; det gjør profittmaksimering i kap. 5.4.",
    },
    {
      question: "Hvilken vei går implikasjonen mellom profittmaksimering og kostnadsminimering?",
      options: ["Profittmaksimering medfører kostnadsminimering, men ikke omvendt", "Kostnadsminimering medfører profittmaksimering, men ikke omvendt", "Begge medfører hverandre — de er ekvivalente krav til bedriften", "Ingen av dem medfører den andre under noen omstendigheter"],
      explanation: "Lager bedriften den valgte mengden dyrere enn nødvendig, kan den øke profitten uten å endre noe annet. Motsatt vei holder ikke: billigste produksjon av feil mengde kan gi tap.",
    },
    {
      question: "Hva er Lagrange-multiplikatorens tolkning i kostnadsminimering?",
      options: ["Marginalkostnaden — hvor mye minimumskostnaden stiger av én enhet mer produksjon", "Prisen bedriften får for den siste produserte enheten i markedet, altså produktprisen $p$ ved kostnadsminimum", "Forholdet mellom de to faktorprisene, altså $r/w$", "Bedriftens profitt ved den kostnadsminimerende faktorbruken"],
      explanation: "$\\lambda^* = c'(\\bar y)$. I selve utledningen elimineres $\\lambda$ ved å dele førsteordensbetingelsene på hverandre, men tolkningen binder kapitlet til marginalkostnaden i kap. 5.3.",
    },
    {
      question: "Lønna $w$ stiger, mens produksjonskravet er uendret. Hva skjer?",
      options: ["Bedriften vrir miksen mot kapital og blir liggende på samme isokvant", "Bedriften flytter til en lavere isokvant og produserer mindre enn kravet", "Faktorforholdet er uendret, siden teknologien ikke har endret seg", "Bedriften vrir miksen mot arbeid, fordi arbeid nå er verdt mer"],
      explanation: "Betingelsen $F'_K/F'_L = r/w$ krever at teknologiens bytteforhold følger prisforholdet ned. Mengden er den samme, så bevegelsen skjer langs isokvanten.",
    },
    {
      question: "Hva betyr tangering mellom isokvanten og isokostlinja?",
      options: ["At teknologiens bytteforhold mellom faktorene er lik markedets", "At bedriften produserer den mengden som gir høyest profitt", "At faktorprisene er like, altså $r = w$", "At bedriften bruker like mye kapital og arbeid"],
      explanation: "Tangering betyr like helninger: MTSB $= r/w$. Det er den grafiske versjonen av førsteordensbetingelsen — støtte til utledningen, aldri erstatning for den.",
    },
    {
      question: "En isokostlinje skjærer isokvanten i to punkter. Hva vet du da?",
      options: ["Kostnadsnivået er for høyt — en linje nærmere origo når også opp", "Kostnadsnivået er for lavt — bedriften klarer ikke produksjonskravet", "Begge skjæringspunktene er kostnadsminimerende løsninger", "Teknologien har tiltakende skalautbytte"],
      explanation: "Begge skjæringspunktene gir riktig mengde, men til unødig høy pris. Den billigste linja som fortsatt når isokvanten, tangerer den.",
    },
    {
      question: "Hva er kostnadsfunksjonen for $F(K,L) = K^{1/3}L^{1/3}$?",
      options: ["$c(y) = 2y^{3/2}\\sqrt{rw}$", "$c(y) = 2y\\sqrt{rw}$", "$c(y) = 2y^{2/3}\\sqrt{rw}$", "$c(y) = 3y\\sqrt[3]{rw}$"],
      explanation: "Teknologien har avtakende skalautbytte (eksponentsum $2/3$), så kostnaden vokser raskere enn proporsjonalt: eksponenten på $y$ blir $3/2$. Prisfaktoren $2\\sqrt{rw}$ er den samme som i $\\sqrt{KL}$-tilfellet.",
    },
    {
      question: "Et snekkerverksted har $F = K^{1/3}L^{2/3}$, $r = 2$ og $w = 4$. Hva blir faktorforholdet?",
      options: ["$L = K$", "$L = 2K$", "$L = K/2$", "$L = 4K$"],
      explanation: "Betingelsen er $\\tfrac{1}{2}\\cdot L/K = r/w = 1/2$, altså $L/K = 1$. Koeffisienten $1/2$ kommer fra eksponentene $1/3$ og $2/3$ og må ikke glemmes.",
    },
    {
      question: "Hva sier ekspansjonsveien for en Cobb-Douglas-teknologi?",
      options: ["At faktorforholdet er det samme for alle produksjonsmengder, så veien er en stråle fra origo", "At faktorforholdet endrer seg med produksjonsmengden når skalautbyttet er avtakende", "At bedriften bruker mer kapital og mindre arbeid når produksjonen vokser", "At kostnaden per enhet er konstant langs veien uansett teknologi"],
      explanation: "Betingelsen gir $L/K$ som en funksjon av $r/w$ alene — $y$ inngår ikke. Bedriften vokser derfor ved å skalere begge faktorene proporsjonalt.",
    },
    {
      question: "Hva er forskjellen på teknisk effektivitet og kostnadseffektivitet?",
      options: ["Teknisk effektivt er ethvert punkt på isokvanten; kostnadseffektivt er det billigste av dem", "Teknisk effektivt er det billigste punktet; kostnadseffektivt er ethvert punkt på isokvanten", "Teknisk effektivt gjelder kort sikt, kostnadseffektivt gjelder lang sikt", "De to begrepene betyr det samme i denne modellen"],
      explanation: "Å ligge på isokvanten betyr bare at bedriften ikke sløser med faktorer. Kostnadseffektivitet krever i tillegg at miksen er den billigste ved de gjeldende faktorprisene.",
    },
    {
      question: "Hvorfor er kostnadsfunksjonen lineær når teknologien har konstant skalautbytte?",
      options: ["Fordi en kopi av driften koster like mye og gir like mye, så kostnaden stiger i takt med $y$", "Fordi faktorprisene er konstante og derfor ikke kan gi krumning i noen kostnadsfunksjon", "Fordi bedriften alltid bruker like mye av begge faktorene ved konstant skalautbytte", "Fordi marginalkostnaden per definisjon er null i dette tilfellet"],
      explanation: "Faktorprisene er faste i alle tre skalaregimene, så de kan ikke forklare formen — det er skalautbyttet som gjør det. Marginalkostnaden er konstant, ikke null.",
    },
    {
      question: "Hva bør du gjøre først når en oppgave ber om kostnadsfunksjonen?",
      options: ["Sette opp Lagrange-funksjonen og utlede førsteordensbetingelsene", "Sette opp profittfunksjonen $\\pi = py - c(y)$ og derivere den", "Tegne isokvanten og isokostlinja og lese av tangeringspunktet", "Finne skalautbyttet med $F(tK,tL)$-testen"],
      explanation: "Utledningen starter alltid med oppsettet. Figuren er støtte (feil #1 er å levere figur i stedet for utledning), og skalautbyttet er en nyttig kontroll av svaret — ikke veien til det.",
    },
    {
      question: "En besvarelse finner $L/K = r/w$ og stopper der, selv om oppgaven ba om $c(y)$. Hva mangler?",
      options: ["Faktormengdene $K^*$ og $L^*$ fra bibetingelsen, satt inn i $rK + wL$", "Ingenting — faktorforholdet er kostnadsfunksjonen", "Verdien av multiplikatoren $\\lambda$, som er selve kostnadsfunksjonen", "Produktprisen $p$, som må inn før kostnaden kan regnes ut"],
      explanation: "Betingelsen gir bare forholdet mellom faktorene. Bibetingelsen $F(K,L) = y$ gir mengdene, og innsetting i kostnadsuttrykket gir $c(y)$.",
    },
  ],
  'econ2220-5-3': [
    {
      question: "Hva er marginalkostnaden?",
      options: ["$c'(y)$ — kostnaden ved å produsere én enhet til", "$c(y)/y$ — samlet kostnad fordelt på antall produserte enheter i perioden", "$c(y) - F$ — samlet kostnad utenom de faste kostnadene bedriften har bundet seg til", "$F$ — den delen av kostnaden som ikke endrer seg med produsert mengde"],
      explanation: "Marginalkostnaden er den deriverte av kostnadsfunksjonen, målt i kroner per enhet. Brøken $c(y)/y$ er gjennomsnittskostnaden.",
    },
    {
      question: "Hvilken kostnadsstørrelse avgjør OM en gitt produksjon er lønnsom?",
      options: ["Gjennomsnittskostnaden", "Marginalkostnaden", "De faste kostnadene alene", "Andrederiverte $c''(y)$"],
      explanation: "Profitten kan skrives $(p - \\text{GK}(y))y$, så fortegnet avgjøres av om prisen overstiger gjennomsnittskostnaden. Marginalkostnaden avgjør derimot hvor mye som bør produseres.",
    },
    {
      question: "Hvor skjærer marginalkostnadskurven gjennomsnittskostnadskurven?",
      options: ["I gjennomsnittskostnadens bunnpunkt", "I gjennomsnittskostnadens toppunkt", "Der marginalkostnaden er lavest", "De skjærer aldri hverandre"],
      explanation: "Fordi den deriverte av $c(y)/y$ er $(\\text{MK} - \\text{GK})/y$, er GK-minimum nøyaktig der MK $=$ GK. Skjæringen skjer nedenfra.",
    },
    {
      question: "Hva er $\\mathrm{d}(c(y)/y)/\\mathrm{d}y$ skrevet ved MK og GK?",
      options: ["$(\\text{MK} - \\text{GK})/y$", "$(\\text{GK} - \\text{MK})/y$", "$\\text{MK}\\cdot\\text{GK}$", "$\\text{MK} - \\text{GK}$"],
      explanation: "Brøkregelen gir $(c'y - c)/y^2$, som er $(\\text{MK} - \\text{GK})/y$. Fortegnet på uttrykket forteller om gjennomsnittskostnaden stiger eller faller.",
    },
    {
      question: "Bedriften har $c(y) = y^2 + 100$. Hvor er gjennomsnittskostnaden lavest?",
      options: ["Ved $y = 10$", "Ved $y = 100$", "Ved $y = 50$", "Gjennomsnittskostnaden har ikke noe minimum her"],
      explanation: "GK $= y + 100/y$ deriveres til $1 - 100/y^2$, som er null ved $y = 10$. Der er også MK $= 20 =$ GK.",
    },
    {
      question: "Hvilken kostnadsfunksjon svarer til konstant skalautbytte?",
      options: ["$c(y) = k\\,y$", "$c(y) = k\\,y^{3/2}$", "$c(y) = k\\,y^{3/4}$", "$c(y) = k\\,y^2 + F$"],
      explanation: "En kopi av driften koster like mye og gir like mye, så kostnaden stiger i takt med $y$. Da er marginal- og gjennomsnittskostnad like og konstante, begge lik $k$.",
    },
    {
      question: "Hva forteller $c''(y) > 0$?",
      options: ["Kostnadsfunksjonen er konveks, marginalkostnaden stiger, og skalautbyttet er avtakende", "Kostnadsfunksjonen er konkav, og marginalkostnaden faller med produksjonen", "Gjennomsnittskostnaden er konstant og lik marginalkostnaden overalt", "Bedriften har faste kostnader i tillegg til de variable"],
      explanation: "Positiv andrederivert betyr at marginalkostnaden vokser med produksjonen — den kostnadsmessige siden av avtakende skalautbytte. Sensorveiledningene godtar dette som alternativ til $F(tK,tL)$-testen.",
    },
    {
      question: "Hva er kravet for å kunne påstå at en kostnadsfunksjon er konveks?",
      options: ["Å regne ut $c''(y)$ og vise at den er positiv", "Å vise til at teknologien har avtakende skalautbytte, som er en tilstrekkelig begrunnelse i seg selv", "Å tegne kurven i et diagram med mengde og kroner på aksene", "Å vise at gjennomsnittskostnaden har et bunnpunkt"],
      explanation: "Dette er feil #3 — egenskap påstått uten derivasjon. Skalautbyttet gir riktignok samme svar, men oppgaven ber om at kurveformen vises, og figur er støtte, aldri erstatning.",
    },
    {
      question: "Bedriften har $c(y) = 8y^{3/4}$. Hvilket skalautbytte har teknologien?",
      options: ["Tiltakende", "Avtakende", "Konstant", "Det kan ikke avgjøres fra kostnadsfunksjonen"],
      explanation: "$c'(y) = 6y^{-1/4}$ og $c''(y) = -\\tfrac32 y^{-5/4} < 0$: konkav kostnadsfunksjon og fallende marginalkostnad. Kostnadsfunksjonen bærer all informasjonen som trengs.",
    },
    {
      question: "Hva er gjennomsnittskostnaden når $c(y) = 18y^{3/2}$?",
      options: ["$18\\sqrt{y}$", "$27\\sqrt{y}$", "$18y^{1/2}/2$", "$18y^{5/2}$"],
      explanation: "Del på $y$: eksponenten går fra $3/2$ til $1/2$. Uttrykket $27\\sqrt{y}$ er marginalkostnaden, altså den deriverte.",
    },
    {
      question: "Hvordan finner du variable kostnader fra kortsiktsteknologien $y = \\sqrt{l}$ med lønn $w$?",
      options: ["Inverter til $l = y^2$ og gang med lønna: $c_v(y) = w y^2$", "Gang teknologien direkte med lønna: $c_v(y) = w\\sqrt{y}$", "Del lønna på teknologien: $c_v(y) = w/\\sqrt{y}$", "Deriver teknologien og gang med lønna: $c_v(y) = w/(2\\sqrt{y})$"],
      explanation: "Teknologien sier hva du får ut av timene; kostnaden trenger hvor mange timer som skal til. Å hoppe over inverteringen er en klassisk regnefeil.",
    },
    {
      question: "Hvordan påvirker faste kostnader marginalkostnaden?",
      options: ["Ikke i det hele tatt — konstanter forsvinner i derivasjonen", "De øker marginalkostnaden med $F/y$ ved hvert produksjonsnivå", "De øker marginalkostnaden med $F$ ved alle produksjonsnivåer", "De gjør marginalkostnaden fallende for små mengder"],
      explanation: "$c(y) = c_v(y) + F$ gir $c'(y) = c_v'(y)$. Faste kostnader påvirker gjennomsnittskostnaden — det er de som gir den U-form.",
    },
    {
      question: "Hvorfor er gjennomsnittskostnadskurven U-formet?",
      options: ["Fordi $F/y$ faller mens variabel kostnad per enhet stiger", "Fordi marginalkostnaden alltid krysser den to ganger på veien oppover", "Fordi bedriften bytter teknologi når produksjonen blir stor nok", "Fordi faktorprisene stiger når bedriften kjøper mer av faktorene"],
      explanation: "U-formen krever faste kostnader. Uten dem, som i $c(y) = 3y^2$, stiger gjennomsnittskostnaden fra første enhet.",
    },
    {
      question: "Hva er en sunk kostnad?",
      options: ["En kostnad som er pådratt og ikke kan gjenvinnes uansett hva bedriften gjør", "En kostnad som varierer med produsert mengde og forsvinner ved nedlegging", "En kostnad som forsvinner hvis bedriften legger ned driften", "Den delen av kostnaden som ligger under gjennomsnittskostnaden"],
      explanation: "Sunk kost er lik i alle alternativer og kan derfor ikke skille mellom dem. Kostnader som forsvinner ved nedlegging, er gjenvinnbare — de hører med i nedleggingsvurderingen.",
    },
    {
      question: "Hvilke kostnader inngår i nedleggingsbetingelsen?",
      options: ["De variable pluss de gjenvinnbare faste kostnadene", "Alle kostnader, både de variable og alle faste, siden regnskapet må gjøres opp", "Bare de variable kostnadene, uansett hvordan de faste er sammensatt", "Bare de faste kostnadene, siden de variable følger produksjonen"],
      explanation: "Bare kostnader som faktisk kan unngås ved å stenge, er relevante. Er alle faste kostnader sunkne, står bare de variable igjen — men det er et spesialtilfelle, ikke regelen.",
    },
    {
      question: "Bakeriet har $c_v(y) = 20y^2$ og 180 i gjenvinnbare faste kostnader. Hva er nedleggingsprisen?",
      options: ["120", "180", "60", "20"],
      explanation: "GK $= 20y + 180/y$ har minimum ved $y = 3$, der verdien er $60 + 60 = 120$. Tallet 180 er selve den faste kostnaden, ikke en pris per enhet.",
    },
    {
      question: "En bedrift går med regnskapsmessig underskudd. Bør den alltid legge ned med en gang?",
      options: ["Nei — så lenge prisen dekker de unngåelige kostnadene per enhet, er drift bedre enn stenging", "Ja, underskudd betyr per definisjon at prisen er under nedleggingsprisen", "Ja, men bare hvis alle faste kostnader er gjenvinnbare", "Nei, en bedrift bør aldri legge ned på kort sikt"],
      explanation: "Har bedriften store sunkne kostnader, påløper de uansett. Da kan drift gi et mindre tap enn stenging, og riktig sammenlikning er mellom de to alternativene — ikke mot null.",
    },
    {
      question: "Hvordan leses profitten av i diagrammet med marginal- og gjennomsnittskostnad?",
      options: ["Som rektangelet med høyde $p - \\text{GK}(y)$ og bredde $y$", "Som trekanten mellom prislinja og marginalkostnadskurven fram til produsert mengde", "Som arealet under marginalkostnadskurven fra null til produsert mengde", "Som avstanden mellom prislinja og marginalkostnadskurven"],
      explanation: "Omskrivingen $\\pi = (p - \\text{GK}(y))y$ gir rektangelet direkte. Arealet under marginalkostnadskurven er de variable kostnadene, ikke profitten.",
    },
    {
      question: "Trykkeriet har $c(y) = 2y^2 + 72$ og produserer $y = 6$ til prisen 30. Hva er profitten?",
      options: ["36", "108", "180", "24"],
      explanation: "$c(6) = 144$ og $py = 180$, så $\\pi = 36$. Som rektangel: GK$(6) = 24$, og $(30-24)\\cdot 6 = 36$. Tallet 180 er inntekten alene.",
    },
    {
      question: "Hva skjer med marginal- og gjennomsnittskostnad ved konstant skalautbytte?",
      options: ["Begge er konstante og like, lik enhetskostnaden $k$", "Marginalkostnaden er konstant, mens gjennomsnittskostnaden faller mot den ovenfra", "Begge stiger proporsjonalt med produsert mengde", "Gjennomsnittskostnaden har et bunnpunkt der marginalkostnaden skjærer den"],
      explanation: "$c(y) = ky$ gir $c'(y) = k$ og $c(y)/y = k$. Fallende gjennomsnittskostnad mot en konstant marginalkostnad krever faste kostnader i tillegg.",
    },
  ],
  'econ2220-5-4': [
    {
      question: "Hva er profittmaksimeringsproblemet til en bedrift som tar prisen som gitt?",
      options: ["$\\max_y\\, py - c(y)$", "$\\min_{K,L}\\, rK + wL$ gitt $F(K,L) = \\bar y$, altså billigste faktormiks for en gitt mengde", "$\\max_y\\, py$ gitt at kostnadene ikke overstiger inntektene i perioden", "$\\max_{K,L}\\, F(K,L)$ gitt $rK + wL = \\bar c$"],
      explanation: "Ett valg (mengden) og ingen bibetingelse, så vanlig derivasjon holder. Det andre alternativet er kostnadsminimering fra kap. 5.2, som ligger inne i $c(y)$.",
    },
    {
      question: "Hva er førsteordensbetingelsen for profittmaksimum?",
      options: ["$p = c'(y)$", "$p = c(y)/y$", "$c'(y) = c(y)/y$", "$p = c''(y)$"],
      explanation: "Deriver $py - c(y)$ og sett lik null. Likheten mellom marginal- og gjennomsnittskostnad kjennetegner bunnpunktet i GK, ikke profittmaksimum.",
    },
    {
      question: "Hvordan tolkes $p = c'(y)$ i enheter?",
      options: ["Den siste enheten gir like mange kroner inn som den koster å lage", "Prisen dekker gjennomsnittskostnaden ved den valgte produksjonsmengden", "Inntekten er lik kostnaden, så bedriften går i null totalt sett", "Bedriften produserer der kostnaden per enhet er lavest mulig"],
      explanation: "Begge sider måles i kroner per enhet: inntekten fra den siste enheten mot kostnaden ved den. Betingelsen sier ingenting om samlet lønnsomhet — det avgjør gjennomsnittskostnaden.",
    },
    {
      question: "Hva er andreordensbetingelsen for at $p = c'(y)$ gir et maksimum?",
      options: ["$c''(y) > 0$ — marginalkostnaden må stige", "$c''(y) < 0$ — marginalkostnaden må falle", "$c(y) > 0$ — kostnaden må være positiv", "$c'(y) > 0$ — marginalkostnaden må være positiv"],
      explanation: "$\\pi''(y) = -c''(y)$, som må være negativ. Ved fallende marginalkostnad er punktet tvert imot det verste valget, og problemet har ingen indre løsning.",
    },
    {
      question: "Bakeriet har $c(y) = y^2 + 100$ og prisen er 40. Hva er tilbudt mengde?",
      options: ["20", "40", "10", "25"],
      explanation: "$c'(y) = 2y = 40$ gir $y = 20$. Mengden 10 er bunnpunktet i gjennomsnittskostnaden, som er et annet spørsmål.",
    },
    {
      question: "Trykkeriet har $c(y) = 2y^2 + 72$ og møter prisen 24. Hva blir profitten?",
      options: ["0", "24", "144", "72"],
      explanation: "$4y = 24$ gir $y = 6$, $c(6) = 144$ og $\\pi = 144 - 144 = 0$. Prisen 24 er nøyaktig bunnpunktet i gjennomsnittskostnaden, altså terskelprisen.",
    },
    {
      question: "Hva er førsteordensbetingelsen i én-faktor-varianten $\\max_n pF(n) - wn$?",
      options: ["$pF'(n) = w$", "$F'(n) = w$", "$pF(n) = wn$", "$pF'(n) = wn$"],
      explanation: "Verdien av marginalproduktet skal være lik faktorprisen. Uten prisen $p$ sammenlikner du fysiske enheter med kroner, og enhetene stemmer ikke.",
    },
    {
      question: "Hva signaliserer reallønna $w/p$ i betingelsen $F'(n) = w/p$?",
      options: ["Hva arbeidstimen er verdt for resten av økonomien, målt i enheter av varen", "Hvor mange kroner bedriften betaler for hver arbeidstime den kjøper inn i faktormarkedet", "Hvor stor andel av inntekten som går til lønn i denne bedriften", "Hvor produktiv arbeidskraften er sammenliknet med kapitalen"],
      explanation: "$w/p$ er hvor mange enheter av varen én times lønn kan kjøpe. Bedriften ansetter til den siste timens fysiske utbytte er nede på dette nivået — sensorveiledningen for V2022 ba eksplisitt om denne tolkningen.",
    },
    {
      question: "Kornbonden har $x = 6\\sqrt{n}$, $p = 8$ og $w = 12$. Hvor mange arbeidstimer velger hun?",
      options: ["4", "2", "12", "16"],
      explanation: "$F'(n) = 3/\\sqrt{n}$, så $8\\cdot 3/\\sqrt{n} = 12$ gir $\\sqrt{n} = 2$ og $n = 4$. Tallet 12 er produksjonen $x = 6\\sqrt{4}$.",
    },
    {
      question: "Hva er tilbudskurven ved avtakende skalautbytte?",
      options: ["Den stigende marginalkostnadskurven over nedleggingsprisen, og null under", "Hele den stigende marginalkostnadskurven, uansett hvor lav prisen er og hvor store de faste kostnadene er", "Gjennomsnittskostnadskurven fra bunnpunktet og oppover", "En vannrett linje ved enhetskostnaden"],
      explanation: "Under nedleggingsprisen tilbyr bedriften ingenting. Å glemme den delen er en dokumentert tabbe; marginalkostnadskurven alene er ikke tilbudskurven.",
    },
    {
      question: "Hva er tilbudskurven ved konstant skalautbytte med $c(y) = ky$?",
      options: ["Vannrett ved $p = k$: null under, ubegrenset over", "Stigende med stigningstall $k$, siden marginalkostnaden er $k$", "Loddrett ved den mengden som gir lavest gjennomsnittskostnad", "Vannrett ved $p = 0$, siden marginalkostnaden ikke avhenger av mengden"],
      explanation: "$\\pi = (p-k)y$ gir null tilbud under $k$, ubegrenset over, og likegyldighet ved $k$. Marginalkostnaden er konstant $k$, ikke et stigningstall for tilbudet.",
    },
    {
      question: "Hvorfor gir ikke $p = c'(y)$ noen bestemt mengde ved konstant skalautbytte?",
      options: ["Fordi $c'(y)$ er en konstant, så betingelsen blir en likning i $p$ og ikke i $y$", "Fordi marginalkostnaden ikke eksisterer når kostnadsfunksjonen er lineær og derfor ikke kan settes lik prisen", "Fordi bedriften da ikke lenger tar prisen som gitt i markedet", "Fordi profitten alltid er negativ i det regimet"],
      explanation: "Med $c(y) = ky$ blir betingelsen $p = k$, som ikke inneholder $y$. Løsningen er å regne direkte på profitten $(p-k)y$ og dele opp i tre tilfeller.",
    },
    {
      question: "Hva bestemmer prisen i likevekt når tilbudskurven er vannrett?",
      options: ["Kostnadssiden alene — prisen må være lik enhetskostnaden $k$", "Etterspørselssiden alene, siden tilbudet er uendelig elastisk", "Både tilbud og etterspørsel, som i det vanlige krysset mellom kurvene", "Myndighetene, gjennom regulering av næringen"],
      explanation: "Markedet kan ikke klarere ved $p \\ne k$. Etterspørselen bestemmer bare mengden — et etterspørselsskift flytter omsatt mengde, men ikke prisen.",
    },
    {
      question: "Hva er renprofitt?",
      options: ["Overskudd utover alternativkostnaden på alle innsatte ressurser, kapitalen inkludert", "Regnskapsmessig overskudd etter at lønn, varekjøp, avskrivninger og lånerenter er trukket fra", "Inntekten minus de variable kostnadene i perioden", "Overskuddet før skatt og avskrivninger"],
      explanation: "Renprofitt er modellens $\\pi = py - c(y)$, der $r$ i $c(y)$ er kapitalens alternativkostnad. Regnskapets overskudd trekker ikke fra normalavkastningen på egenkapitalen.",
    },
    {
      question: "Hva betyr null renprofitt i likevekt?",
      options: ["Eierne får normal avkastning på kapitalen, verken mer eller mindre", "Ingen i bedriften tjener penger, og kontoene er tomme ved årets slutt", "Bedriften går med regnskapsmessig underskudd hvert år", "Bedriften bør legge ned driften siden den ikke tjener noe"],
      explanation: "Dette er feil #11, testet i V2024: alternativkostnaden på kapitalen ligger i kostnadsfunksjonen. Regnskapsmessig overskudd svarende til normalavkastningen er nettopp hva resultatet forutsier.",
    },
    {
      question: "Et selskap har 20 millioner i egenkapital, 4 % alternativ avkastning og 800 000 i regnskapsmessig overskudd. Hva er renprofitten?",
      options: ["0", "800 000", "32 000", "20 millioner"],
      explanation: "Alternativkostnaden er $0{,}04\\cdot 20$ mill. $= 800\\,000$, og renprofitt er overskudd minus dette. Overskuddet på 800 000 er altså akkurat nok til normal avkastning.",
    },
    {
      question: "Hvilke to forutsetninger bærer nullprofitt-resultatet?",
      options: ["Konstant skalautbytte og fri etablering", "Avtakende skalautbytte og faste kostnader i produksjonen", "Konstant skalautbytte og at bedriften selv setter prisen i markedet", "Fri etablering og at alle faste kostnader er sunkne"],
      explanation: "Konstant skalautbytte gir vannrett tilbud, fri etablering presser prisen til enhetskostnaden. Møter du varig avkastning over normalen, er det én av disse to som svikter.",
    },
    {
      question: "Hva er grunnrente?",
      options: ["Avkastning utover normalavkastning som skyldes en knapp naturressurs ingen kan kopiere", "Den delen av overskuddet som skyldes at bedriften er bedre drevet og mer effektiv enn konkurrentene sine", "Leia bedriften betaler for tomta og bygningene den bruker", "Avkastningen kapitalen kunne fått i beste alternative anvendelse"],
      explanation: "Grunnrenten knytter seg til fossen, oljefeltet eller lokaliteten — noe nye aktører ikke kan bygge. God drift kopieres over tid, og avkastning i beste alternativ er normalavkastningen.",
    },
    {
      question: "Hvorfor kan grunnrente i prinsippet skattlegges hardt uten at produksjonen faller?",
      options: ["Fordi avkastningen er knyttet til en fast ressurs som ikke kan flyttes", "Fordi bedriftene i slike næringer har spesielt god betalingsevne", "Fordi grunnrenten ikke inngår i bedriftens marginalkostnad i det hele tatt", "Fordi slike næringer alltid er regulert av myndighetene"],
      explanation: "Fossen blir liggende uansett skattesats, så marginalkalkylen endres ikke. Forbeholdet er at en skatt som også treffer den marginale investeringen, kan redusere produksjonen.",
    },
    {
      question: "Hvilken forklaring på varig avkastning over normalen holder IKKE?",
      options: ["At bedriften er godt drevet", "At antallet egnede naturressurser er begrenset", "At store ugjenkallelige investeringer skremmer nye aktører", "At nettverkseffekter låser kundene til den etablerte aktøren"],
      explanation: "God drift senker kostnadene, men driftsmetoder kopieres over tid. Varig avkastning over normalen krever noe konkurrentene ikke KAN kopiere.",
    },
    {
      question: "Hva er en nettverkseffekt?",
      options: ["At produktets verdi for hver bruker stiger med antall brukere", "At bedriften får lavere kostnader per enhet når produksjonen vokser", "At flere bedrifter i samme næring deler infrastruktur og reduserer kostnadene", "At prisen faller når nye aktører kommer inn i markedet"],
      explanation: "Effekten ligger på etterspørselssiden og virker som etableringshindring: en ny aktør kan ha bedre teknologi og likevel tape. Fallende kostnad per enhet er tiltakende skalautbytte, en annen mekanisme.",
    },
    {
      question: "Hva skjer i tilbudskurven nøyaktig ved nedleggingsprisen?",
      options: ["Tapet ved drift er like stort som den sunkne kostnaden, så alternativene er likeverdige", "Profitten er null, siden prisen nøyaktig dekker alle kostnadene bedriften har i perioden", "Marginalkostnaden er null, siden bedriften er i ferd med å stoppe", "Tilbudskurven blir vannrett fra det punktet og oppover"],
      explanation: "I terskelen dekker inntekten akkurat de unngåelige kostnadene, så det som står igjen som tap, er nettopp det som påløper uansett. Det er en god kontroll på at nedleggingsprisen er riktig regnet.",
    },
    {
      question: "Hvorfor er nullprofitt-resultatet et langsiktig resultat?",
      options: ["Fordi det forutsetter at kapital kan bevege seg både inn i og ut av næringen", "Fordi det tar tid før aktørene finner fram til den riktige prisen i markedet", "Fordi faste kostnader alltid er sunkne på kort sikt", "Fordi skalautbyttet bare kan måles over lang tid"],
      explanation: "Fri etablering — og utgang — er mekanismen som presser prisen mot enhetskostnaden. På kort sikt er kapitalen låst, og prisen kan ligge over eller under en stund.",
    },
    {
      question: "Hvorfor blir prisen på en omsettelig konsesjon høy i en næring med grunnrente?",
      options: ["Fordi prisen speiler nåverdien av den framtidige renprofitten", "Fordi myndighetene setter prisen ut fra hva næringen kan betale", "Fordi konsesjonen er en fast kostnad som må dekkes av produksjonen", "Fordi konsesjonen gir eieren rett til å sette prisen på varen"],
      explanation: "Var det ingen renprofitt å hente, ville rettigheten vært verdiløs. Den som kjøper konsesjonen dyrt, får derfor selv bare normalavkastning — gevinsten er tatt ut av den som fikk rettigheten først.",
    },
    {
      question: "Hvordan bør en åpen drøftingsoppgave om varig lønnsomhet bygges opp?",
      options: ["Teoriens prediksjon, to–tre forklaringer, rangering, konklusjon med ett forbehold", "En liste over alle mulige forklaringer, uten å rangere dem mot hverandre", "En generell utlegning om at markeder er kompliserte og at svaret er usikkert", "Kun den forklaringen du mener er riktig, uten å nevne alternativene"],
      explanation: "Sensor premierer strukturert teoribruk, ikke et bestemt svar. Å skrive om noe annet enn det spurte er feil #13, og en uranger liste viser ikke at du kan skille sterke fra svake forklaringer.",
    },
  ],
  'econ2220-5-5': [
    {
      question: "Hvilket steg i produsentoppgaven svarer på «hvor mye vil bedriften produsere ved prisen $p$»?",
      options: ["Profittmaksimering: $p = c'(y)$", "Kostnadsminimering med Lagrange, som gir den billigste faktormiksen for mengden", "Skalautbytte-testen $F(tK,tL)$ mot $tF(K,L)$", "Beregningen av gjennomsnittskostnaden $c(y)/y$"],
      explanation: "Kvantumsvalget krever produktprisen og løses ved å derivere profitten. Kostnadsminimeringen tar mengden som gitt og inneholder ikke $p$.",
    },
    {
      question: "Hvorfor må kostnadsminimeringen komme før profittmaksimeringen?",
      options: ["Fordi profittmaksimeringen bruker $c(y)$, som kostnadsminimeringen produserer", "Fordi kostnadsminimeringen bestemmer hvilken mengde bedriften skal produsere, og prisen kommer etterpå", "Fordi Lagrange-metoden må brukes før vanlig derivasjon kan brukes", "Fordi faktorprisene må være kjent før produktprisen kan bestemmes"],
      explanation: "Kostnadsfunksjonen er innsatsvaren i $\\pi = py - c(y)$. Kostnadsminimeringen bestemmer derimot ikke mengden — det er feil #4.",
    },
    {
      question: "En oppgave sier «bedriften skal levere 500 enheter» og oppgir $r$ og $w$, men ingen produktpris. Hvilken oppgavetype er det?",
      options: ["Kostnadsminimering — mengden er gitt, og prisen er ikke nevnt", "Profittmaksimering — bedriften skal finne den mest lønnsomme mengden", "Skalautbytte-testen, som er den eneste som ikke trenger priser", "Nedleggingsvurdering, siden kostnadene er oppgitt"],
      explanation: "Gitt mengde og ingen produktpris er signaturen til kostnadsminimering. Er $p$ oppgitt, eller spørres det om tilbud og kurver, er det profittmaksimering.",
    },
    {
      question: "Betongverket har $F = K^{1/3}L^{1/3}$, $r = 4$ og $w = 16$. Hva er kostnadsfunksjonen?",
      options: ["$c(y) = 16y^{3/2}$", "$c(y) = 16y$", "$c(y) = 8y^{3/2}$", "$c(y) = 20y^{3/2}$"],
      explanation: "Standardresultatet er $c(y) = 2y^{3/2}\\sqrt{rw}$, og $\\sqrt{64} = 8$ gir $16y^{3/2}$. Summen $r + w = 20$ er en typisk feil: faktorprisene ganges under rottegnet.",
    },
    {
      question: "Betongverket har $c(y) = 16y^{3/2}$ og møter prisen 72. Hva er tilbudt mengde?",
      options: ["9", "3", "24", "72"],
      explanation: "$c'(y) = 24\\sqrt{y} = 72$ gir $\\sqrt{y} = 3$ og $y = 9$. Tallet 3 er kvadratrota, ikke mengden.",
    },
    {
      question: "Hvilke tre veier kan du bruke for å avgjøre skalaregimet?",
      options: ["$F(tK,tL)$-testen, eksponentsummen som kontroll, eller fortegnet på $c''(y)$", "Marginalproduktenes fortegn, gjennomsnittskostnaden, eller profittens størrelse", "Faktorprisforholdet $r/w$, isokostlinjas helning, eller tangeringspunktet", "Nedleggingsprisen, terskelprisen, eller profittrektangelet"],
      explanation: "Alle tre er godkjente, men eksponentsummen skal bare brukes som kontroll etter testen. Har du kostnadsfunksjonen, er $c''$-fortegnet korteste vei.",
    },
    {
      question: "Hva er hovedgrunnen til at man ikke kan bruke innsettingsmetoden på kostnadsminimering?",
      options: ["Bibetingelsen $F(K,L) = \\bar y$ kan generelt ikke løses ut for én variabel", "Målfunksjonen $rK + wL$ har to variabler, og innsettingsmetoden tåler bare problemer med én", "Innsettingsmetoden krever at man kjenner produktprisen i tillegg", "Innsettingsmetoden gir feil svar når skalautbyttet er avtakende"],
      explanation: "En generell produktfunksjon kan ikke inverteres. Dette er feil #5, eksplisitt påpekt i V2025-veiledningen: Lagrange er obligatorisk her.",
    },
    {
      question: "Et trykkeri har $c_v(y) = 2y^2$, 32 i gjenvinnbar og 18 i sunk fast kostnad. Hva er nedleggingsprisen?",
      options: ["16", "18", "50", "8"],
      explanation: "$2y + 32/y$ har minimum ved $y = 4$, med verdien $8 + 8 = 16$. De 18 i sunk kost holdes utenfor: de påløper uansett hva trykkeriet gjør.",
    },
    {
      question: "Hva er en god kontroll på at nedleggingsprisen er riktig regnet?",
      options: ["Tapet ved drift skal være lik den sunkne kostnaden nøyaktig i terskelpunktet", "Profitten skal være nøyaktig null i terskelpunktet, siden prisen der dekker alle kostnadene bedriften har", "Marginalkostnaden skal være null i terskelpunktet", "Gjennomsnittskostnaden skal være lik produktprisen ved all produksjon"],
      explanation: "I terskelen er drift og stenging likeverdige, og stenging gir nettopp et tap lik den sunkne kostnaden. Profitten er null bare når det ikke finnes sunkne kostnader.",
    },
    {
      question: "Hvilken kontroll fanger opp regnefeil i profitten?",
      options: ["Regn den både som $py - c(y)$ og som $(p - \\text{GK}(y))y$ og sammenlikn", "Sjekk at profitten er positiv ved den mengden du har valgt, slik at tilpasningen er lønnsom", "Kontroller at marginalkostnaden er større enn gjennomsnittskostnaden", "Sjekk at faktorforholdet stemmer med prisforholdet $r/w$"],
      explanation: "To uavhengige veier til samme tall skal aldri lande ulikt. At profitten er positiv, er ingen kontroll — den kan godt være negativ på kort sikt.",
    },
    {
      question: "En plattformbedrift har fallende marginalkostnad. Hva sier punktet der $p = c'(y)$?",
      options: ["Det er et minimum for profitten, ikke et maksimum", "Det er den profittmaksimerende mengden, som ellers i faget", "Det er nedleggingsprisen for bedriften", "Det er bunnpunktet i gjennomsnittskostnaden"],
      explanation: "Andreordensbetingelsen krever $c''(y) > 0$. Ved fallende marginalkostnad vokser profitten når produksjonen øker forbi punktet, så bedriften har ingen indre løsning.",
    },
    {
      question: "Hva er malen for en påstandsoppgave (sjanger L)?",
      options: ["Ta stilling først, begrunn med apparatet, gi moteksempel eller presisering", "Presenter argumentene for og mot hver for seg, og la konklusjonen stå åpen helt til slutt", "Vis utregningen først, og skriv konklusjonen i siste setning", "Gjengi den relevante formelen og si at påstanden følger av den"],
      explanation: "Sensor skal ikke lete etter konklusjonen. En åpen avslutning er dessuten feil sjanger: sann/usann-oppgaver krever standpunkt, og noen påstander er betinget sanne — da presiseres betingelsen.",
    },
    {
      question: "Hva er den vanligste grunnen til poengtap i produsentoppgaven?",
      options: ["Manglende tolkning av en betingelse som ellers er riktig utledet", "Regnefeil i selve derivasjonen av kostnadsfunksjonen og marginalkostnaden", "For lite tid til å rekke det siste delspørsmålet i oppgaven", "Feil valg av faktorpriser i kostnadsminimeringen"],
      explanation: "Feil #2 — betingelsen gjentatt uten enheter — er det billigste poenget å hente inn. Utled matematisk OG oversett til økonomiske enheter, hver gang.",
    },
    {
      question: "Hva bør du gjøre hvis tiden blir knapp i en oppgave med fem delspørsmål som teller likt?",
      options: ["Skrive oppsett og førsteordensbetingelse med tolkning på hvert delspørsmål", "Fullføre de første delspørsmålene helt ut og la de siste stå tomme på arket", "Hoppe til det siste delspørsmålet, siden det ofte er verdt mest", "Skrive en samlet innledning som dekker alle delspørsmålene"],
      explanation: "Når deloppgavene teller likt, gir et halvt svar på tre spørsmål mer enn ett komplett. Sensorveiledningene understreker at deloppgavene teller omtrent likt.",
    },
    {
      question: "Hvordan bygges den åpne drøftingen om varig lønnsomhet (sjanger M)?",
      options: ["Teoriens prediksjon, to–tre forklaringer, rangering, konklusjon med ett forbehold", "En oppramsing av alle relevante begreper fra pensum i produsentteorien, i den rekkefølgen de står i boka", "En beskrivelse av næringen, uten å knytte den til modellapparatet", "Ett argument ført så langt det rekker, uten å nevne innvendinger"],
      explanation: "Oppgaven har ingen fasit, men sensor premierer strukturert teoribruk. Å skrive om noe annet enn det spurte, eller å ramse opp uten å rangere, er feil #13-territorium.",
    },
  ],
  'econ2220-6-1': [
    {
      question: "Hva viser produksjonsmulighetskurven?",
      options: ["Alle kombinasjoner av de to varene som kan produseres når alle ressurser er i bruk", "Alle kombinasjoner av de to varene som konsumentene foretrekker likt", "Sammenhengen mellom prisen på en vare og produsert mengde av den", "Kombinasjonene av arbeidstimer som gir samme kostnad i de to sektorene"],
      explanation: "Kurven beskriver produksjonssiden: hva som er teknisk mulig når hele ressursen L er i bruk. Kombinasjoner konsumentene er likegyldige mellom, er indifferenskurver — en helt annen kurve.",
    },
    {
      question: "Teknologiene er $x_1 = \\sqrt{n_1}$ og $x_2 = \\sqrt{n_2}$, og ressursskranken er $n_1 + n_2 = 144$. Hva er produksjonsmulighetskurven?",
      options: ["$x_1^2 + x_2^2 = 144$", "$x_1 + x_2 = 144$", "$\\sqrt{x_1} + \\sqrt{x_2} = 144$", "$x_1^2 + x_2^2 = 12$"],
      explanation: "Inverter først: $n_1 = x_1^2$ og $n_2 = x_2^2$. Sett inn i ressursskranken. Å sette $x_1 + x_2 = 144$ er den klassiske tabben — da har du glemt at skranken teller timer, ikke varer.",
    },
    {
      question: "En økonomi har PMK $x_1^2 + x_2^2 = 100$. Hvor mye kan den maksimalt produsere av vare 1?",
      options: ["10 enheter", "100 enheter", "50 enheter", "$\\sqrt{50}$ enheter"],
      explanation: "Sett $x_2 = 0$: $x_1^2 = 100$, altså $x_1 = 10$. Tallet 100 er timeressursen, ikke maksimal produksjon.",
    },
    {
      question: "Hva måler den marginale transformasjonsbrøken (MTB)?",
      options: ["Hvor mange enheter vare 2 som må gis opp for én ekstra enhet vare 1", "Hvor mange kroner en ekstra enhet vare 1 koster å produsere", "Hvor mange enheter vare 2 konsumenten er villig til å gi opp for én enhet vare 1", "Hvor mye produksjonen øker når ressursen $L$ øker med én time"],
      explanation: "MTB er teknologiens byttefot, målt i varer. Konsumentens vilje til å bytte er MSB — en annen størrelse, som først møter MTB i kapittel 6.2.",
    },
    {
      question: "Hvilket uttrykk gir MTB når teknologiene er $x_1 = f(n_1)$ og $x_2 = g(n_2)$?",
      options: ["$\\dfrac{g'(n_2)}{f'(n_1)}$", "$\\dfrac{f'(n_1)}{g'(n_2)}$", "$f'(n_1)\\cdot g'(n_2)$", "$\\dfrac{g(n_2)}{f(n_1)}$"],
      explanation: "Flytt $dn_1$ timer: $dx_1 = f' dn_1$ og $dx_2 = -g' dn_1$. Forholdet gir $g'/f'$. Den omvendte brøken er bytteforholdet den andre veien.",
    },
    {
      question: "På PMK-en $x_1^2 + x_2^2 = 100$ står økonomien i punktet $(6, 8)$. Hva er MTB?",
      options: ["0,75", "1,33", "0,60", "1,00"],
      explanation: "MTB $= x_1/x_2 = 6/8 = 0{,}75$. Svaret 1,33 er den inverse brøken $x_2/x_1$ — en vanlig fortegns- og retningstabbe.",
    },
    {
      question: "MTB er 2,5 i et punkt. Hva betyr det i enheter?",
      options: ["Den neste enheten vare 1 koster 2,5 enheter vare 2", "Den neste enheten vare 1 koster 2,5 kroner", "Den neste enheten vare 2 koster 2,5 enheter vare 1", "Vare 1 er 2,5 ganger dyrere enn vare 2 i markedet"],
      explanation: "MTB måles i varer, ikke kroner, og teller vare 2 gitt opp per vare 1 vunnet. Prisforholdet er en annen størrelse — den er bare lik MTB i verdimaksimerende tilpasning.",
    },
    {
      question: "Hvorfor blir produksjonsmulighetskurven brattere mot høyre med kvadratrot-teknologier?",
      options: ["Marginalproduktet faller i sektoren timene går til og stiger i sektoren de tas fra", "Fordi prisene på vare 1 stiger når produksjonen av vare 1 øker", "Fordi ressursskranken blir strammere jo mer som produseres", "Fordi konsumentene får avtakende nytte av vare 1"],
      explanation: "Krumningen er et rent teknologifenomen: $\\text{MTB} = g'/f'$ vokser fordi nevneren faller og telleren stiger. Priser og preferanser spiller ingen rolle for kurvens form.",
    },
    {
      question: "Hva kjennetegner en produksjonsmulighetskurve som er en rett linje?",
      options: ["Begge teknologier har konstant marginalprodukt", "Begge varer har samme pris", "Ressursskranken er ikke bindende", "Begge teknologier er kvadratrotfunksjoner"],
      explanation: "Rett linje betyr konstant MTB, som krever at $f'$ og $g'$ ikke endrer seg. Kvadratrotteknologier gir alltid krumning.",
    },
    {
      question: "Et punkt ligger innenfor produksjonsmulighetskurven. Hva vet du da?",
      options: ["Samfunnet kan få mer av begge varer samtidig", "Kombinasjonen er umulig å produsere", "Samfunnet må gi opp vare 2 for å få mer vare 1", "MTB er lik prisforholdet i dette punktet"],
      explanation: "Innenfor kurven står ressurser ubrukt, så begge varer kan økes. Å måtte gi opp noe gjelder først på kurven.",
    },
    {
      question: "Hvilken betingelse kjennetegner den verdimaksimerende produksjonen på PMK?",
      options: ["$\\text{MTB} = p_1/p_2$", "$\\text{MTB} = p_2/p_1$", "$\\text{MTB} = 1$", "$p_1x_1 = p_2x_2$"],
      explanation: "Lagrange gir $p_1 = 2\\lambda x_1$ og $p_2 = 2\\lambda x_2$; deling eliminerer $\\lambda$ og gir $p_1/p_2 = x_1/x_2 = \\text{MTB}$. Den inverse brøken er samme feil som å snu helningen.",
    },
    {
      question: "PMK er $x_1^2 + x_2^2 = 225$, og prisene er $p_1 = 600$, $p_2 = 800$. Hva blir verdimaksimerende produksjon?",
      options: ["$x_1 = 9$, $x_2 = 12$", "$x_1 = 12$, $x_2 = 9$", "$x_1 = 15$, $x_2 = 0$", "$x_1 = 11{,}25$, $x_2 = 11{,}25$"],
      explanation: "$\\text{MTB} = x_1/x_2 = 600/800 = 0{,}75$ gir $x_2 = \\frac{4}{3}x_1$; innsatt i PMK blir $x_1 = 9$, $x_2 = 12$. Alternativet $(12, 9)$ har MTB $= 1{,}33$ og gir lavere verdi.",
    },
    {
      question: "Hva er helningen på en isoverdilinje $p_1x_1 + p_2x_2 = \\bar{V}$?",
      options: ["$-p_1/p_2$", "$-p_2/p_1$", "$-\\bar{V}/p_2$", "$p_1/p_2$"],
      explanation: "Løs for $x_2$: $x_2 = \\bar{V}/p_2 - (p_1/p_2)x_1$. Helningen er negativ og lik prisforholdet med minustegn; $\\bar{V}$ påvirker bare hvor linja ligger, ikke hvor bratt den er.",
    },
    {
      question: "Betingelsen $p_1 f'(n_1) = p_2 g'(n_2)$ sier at",
      options: ["den siste arbeidstimen er like mye verdt i kroner i begge sektorer", "de to sektorene bruker like mange arbeidstimer", "de to varene har samme pris", "marginalproduktene er like store i de to sektorene"],
      explanation: "Hver side er kroneverdien av den siste timens produksjon i sin sektor. Like marginalprodukter er noe annet — det ville krevd like priser i tillegg.",
    },
    {
      question: "Hvorfor skriver vi ressursskranken $n_1 + n_2 = L$ med likhet og ikke med «mindre enn eller lik»?",
      options: ["Fordi en ledig time alltid kan gi mer av minst én vare", "Fordi timene er like produktive i begge sektorer", "Fordi det ellers ikke er mulig å bruke Lagrange-metoden", "Fordi arbeidsstyrken er konstant over tid"],
      explanation: "Begrunnelsen er monotoni: mer er bedre, så ingen lar timer stå ubrukt. Lagrange fungerer også med ulikheter — argumentet er økonomisk, ikke teknisk.",
    },
  ],
  'econ2220-6-2': [
    {
      question: "Hva sier betingelsen $\\text{MTB} = \\text{MSB}$?",
      options: ["Samfunnets kostnad ved den siste enheten vare 1, målt i vare 2, er lik folks betalingsvilje målt i vare 2", "Prisen på vare 1 er lik prisen på vare 2", "Begge sektorer bruker like mange arbeidstimer", "Produksjonen ligger på produksjonsmulighetskurven, slik at ingen arbeidstimer står ubrukt i noen av sektorene"],
      explanation: "Betingelsen kobler teknologiens byttefot til preferansenes byttefot. Å ligge på kurven er et eget krav, og det er ikke nok alene.",
    },
    {
      question: "Hvilken side av økonomien kommer MSB fra?",
      options: ["Konsumsiden — den er helningen på indifferenskurven", "Produksjonssiden — den er helningen på produksjonsmulighetskurven", "Markedet — den er prisforholdet mellom varene", "Ressurssiden — den er forholdet mellom timene i sektorene"],
      explanation: "MSB $= u'_1/u'_2$ er konsumentens byttevilje. Produksjonssidens byttefot heter MTB; det er en klassisk forveksling.",
    },
    {
      question: "I en produksjonsøkonomi er $\\text{MTB} = 4$ og $\\text{MSB} = 1$. Hva bør skje?",
      options: ["Produksjonen av vare 1 bør reduseres", "Produksjonen av vare 1 bør økes", "Ingenting — allokeringen er allerede effektiv", "Prisen på vare 2 bør settes ned"],
      explanation: "Vare 1 koster 4 enheter vare 2 å lage, men er bare verdt 1 for konsumentene. Den er for dyr i forhold til verdien, så produksjonen skal ned.",
    },
    {
      question: "MTB $= 4$ og MSB $= 1$. Hvor mange enheter vare 2 blir til overs når produksjonen av vare 1 kuttes med én enhet og konsumenten kompenseres?",
      options: ["3", "5", "4", "1"],
      explanation: "Kuttet frigjør 4 enheter vare 2, konsumenten trenger 1 i kompensasjon for å være like fornøyd, så $4 - 1 = 3$ er igjen. Summen 5 kommer av å legge sammen i stedet for å trekke fra.",
    },
    {
      question: "Hva er en Pareto-forbedring?",
      options: ["En endring der minst én får det bedre og ingen får det verre", "En endring der alle får nøyaktig like store andeler av begge varene etter omfordelingen", "En endring der samlet produksjon øker", "En endring der de fattigste får mest"],
      explanation: "Definisjonen er nøysom og sier ingenting om fordelingsrettferdighet. At kriteriet er svakt, er nettopp det som gjør det kraftfullt: én konstruert forbedring beviser at allokeringen ikke var effektiv.",
    },
    {
      question: "En produksjon ligger på produksjonsmulighetskurven. Hva kan vi da konkludere?",
      options: ["At ingen ressurser sløses, men ikke at allokeringen er Pareto-effektiv", "At allokeringen er Pareto-effektiv, siden det ikke er mulig å få mer av begge varer", "At MTB er lik MSB", "At markedene klarerer"],
      explanation: "Å ligge på kurven er teknisk effektivitet. Sammensetningen kan likevel være feil i forhold til hva folk vil ha; da finnes en vri langs kurven som gjør alle bedre stilt.",
    },
    {
      question: "En økonomi har PMK $x_1^2 + x_2^2 = 100$ og nytte $u = c_1c_2$. Hva blir den effektive allokeringen?",
      options: ["$x_1 = x_2 = \\sqrt{50}$", "$x_1 = 10$, $x_2 = 0$", "$x_1 = 8$, $x_2 = 6$", "$x_1 = 50$, $x_2 = 50$"],
      explanation: "MTB $= x_1/x_2$ og MSB $= x_2/x_1$; likhet gir $x_1 = x_2$, og PMK gir $2x_1^2 = 100$. Punktet $(8,6)$ ligger på kurven, men har MTB $\\ne$ MSB.",
    },
    {
      question: "Hvorfor havner bedriftene og husholdningene på samme bytteforhold uten å koordinere seg?",
      options: ["De ser samme prisforhold, og begge setter sin egen brøk lik det", "De har samme informasjon om både teknologien og preferansene i hele økonomien", "En planlegger dikterer begge beslutningene", "Fordi MTB og MSB alltid er like uansett tilpasning"],
      explanation: "Prisforholdet er signalet som bærer informasjonen mellom sidene. Uten felles pris ville de to brøkene ikke møttes, og MTB og MSB er slett ikke like utenfor likevekt.",
    },
    {
      question: "Hva er planleggerproblemet i produksjonsøkonomien?",
      options: ["$\\max_{n_1} u(f(n_1), g(L-n_1))$", "$\\max_{n_1} p_1f(n_1) + p_2g(L-n_1)$", "$\\max_{c_1,c_2} u(c_1,c_2)$ gitt $p_1c_1 + p_2c_2 = m$", "$\\min_{n_1,n_2} n_1 + n_2$ gitt en gitt produksjon"],
      explanation: "Planleggeren maksimerer nytten direkte, med ressursskranken satt rett inn og uten priser. Det andre alternativet er verdimaksimering, som er produsentsidens problem.",
    },
    {
      question: "Hvilken betingelse kjennetegner planleggerens løsning?",
      options: ["$\\dfrac{u'_1}{u'_2} = \\dfrac{g'(n_2)}{f'(n_1)}$", "$\\dfrac{u'_1}{u'_2} = \\dfrac{f'(n_1)}{g'(n_2)}$", "$u'_1 = u'_2$", "$f'(n_1) = g'(n_2)$"],
      explanation: "Derivasjon av $u(f(n_1), g(L-n_1))$ gir $u'_1f' = u'_2g'$, som omordnet er MSB $=$ MTB. Like marginalnytter eller like marginalprodukter er ikke betingelsen.",
    },
    {
      question: "Hva betyr det at markedet «desentraliserer planleggerens løsning»?",
      options: ["Aktørene når samme allokering selv om ingen av dem kjenner hele økonomien", "Planleggeren delegerer beslutningene til lokale myndigheter", "Markedet finner en dårligere løsning enn planleggeren, fordi ingen aktør ser helheten", "Planleggeren må bruke priser for å finne løsningen"],
      explanation: "Planleggeren trenger teknologi og preferanser; markedet trenger bare at begge sider ser samme prisforhold. Løsningen blir den samme, ikke en dårligere.",
    },
    {
      question: "Produksjonen av vare 1 gir en ekstern skade tilsvarende 2 enheter vare 2 per enhet. Privat MTB er 3. Hva er den samfunnsøkonomiske transformasjonsbrøken?",
      options: ["5", "3", "1", "6"],
      explanation: "Skaden legges til den kostnaden bedriften selv bærer: $3 + 2 = 5$. Å trekke fra ville betydd at skaden var en gevinst.",
    },
    {
      question: "Markedet setter $\\text{MTB}_{\\text{privat}} = \\text{MSB}$, men produksjonen av vare 1 gir en negativ ekstern virkning. Hva følger?",
      options: ["Allokeringen er ikke Pareto-effektiv, og det produseres for mye av vare 1", "Allokeringen er Pareto-effektiv, siden betingelsen MTB = MSB er oppfylt i markedet", "Det produseres for lite av vare 1", "Betingelsen MTB = MSB er brutt i markedet"],
      explanation: "Den private likheten holder — det er nettopp det som er lumsk. Men den samfunnsøkonomiske brøken er høyere enn MSB, og etter konstruksjonen skal produksjonen av vare 1 ned.",
    },
    {
      question: "Hva må i tillegg gjelde for Pareto-effektivitet når det er FLERE konsumenter i produksjonsøkonomien?",
      options: ["Alle konsumenter må ha samme MSB", "Alle konsumenter må ha samme inntekt", "Alle konsumenter må ha samme nyttefunksjon", "Alle konsumenter må konsumere like mye"],
      explanation: "Ulik MSB betyr at et bytte mellom to konsumenter kan gjøre begge bedre stilt. Like inntekter eller like mengder er fordelingsspørsmål, ikke effektivitetskrav.",
    },
    {
      question: "En kommune har $L = 200$ timer, $x_1 = \\sqrt{n_1}$, $x_2 = 2\\sqrt{n_2}$ og $u = c_1c_2$. Hvilket prisforhold understøtter likevekten?",
      options: ["$p_1/p_2 = 2$", "$p_1/p_2 = 0{,}5$", "$p_1/p_2 = 1$", "$p_1/p_2 = 4$"],
      explanation: "Likevekten er $(10, 20)$, der MTB $= 4x_1/x_2 = 2$. Svaret 0,5 er den inverse brøken; 4 er koeffisienten i MTB-uttrykket, ikke verdien.",
    },
    {
      question: "Hvorfor er MTB $= p_1/p_2$ alene IKKE en likevekt?",
      options: ["Fordi likevekt også krever at markedene klarerer", "Fordi MTB må være lik 1 i likevekt", "Fordi bedriftene ikke er pristakere", "Fordi prisforholdet ikke er observerbart"],
      explanation: "Betingelsen beskriver bedriftenes individuelle tilpasning til gitte priser. Likevekt krever i tillegg at det som produseres, er det som konsumeres — å hoppe over den presiseringen er en dokumentert trekkgrunn.",
    },
    {
      question: "En allokering har $\\text{MTB} = 0{,}5$ og $\\text{MSB} = 2$. Hvor stort er overskuddet per ekstra enhet vare 1, målt i vare 2?",
      options: ["1,5", "2,5", "0,25", "4"],
      explanation: "Overskuddet er tallverdien av differansen: $|0{,}5 - 2| = 1{,}5$. Å legge sammen gir 2,5, og å dele gir 4 eller 0,25 — begge er brøkregning på feil operasjon.",
    },
    {
      question: "Hva menes med at en produksjonsøkonomi er «lukket»?",
      options: ["Alt som produseres, konsumeres — det finnes ingen utenverden å handle med", "Nye bedrifter kan ikke etablere seg fritt i noen av de to sektorene i økonomien", "Ressursmengden $L$ er konstant", "Prisene er fastsatt av myndighetene"],
      explanation: "Lukkingen er $c_1 = x_1$ og $c_2 = x_2$, altså markedsklareringen i denne modellen. At $L$ er gitt, er en annen antakelse.",
    },
    {
      question: "Første velferdsteorem i produksjonsøkonomien forutsetter blant annet at",
      options: ["aktørene er pristakere og det ikke finnes eksterne virkninger", "alle konsumenter har samme inntekt", "produksjonsmulighetskurven er lineær", "myndighetene fastsetter prisforholdet"],
      explanation: "Forutsetningene er de samme som i bytteøkonomien: pristakere uten markedsmakt, ingen eksterne virkninger, rivaliserende goder. Kurvens form og fordelingen av inntekt spiller ingen rolle for teoremet.",
    },
    {
      question: "Hvorfor er $\\text{MSB} = x_2/x_1$ når nytten er $u = c_1c_2$ i en lukket produksjonsøkonomi?",
      options: ["Fordi $u'_1 = c_2$, $u'_2 = c_1$, og alt som produseres konsumeres", "Fordi nytten alltid er lik produktet av mengdene", "Fordi MSB per definisjon alltid er den inverse brøken av MTB i enhver allokering", "Fordi prisforholdet er 1 i denne modellen"],
      explanation: "Marginalnyttene gir $\\text{MSB} = c_2/c_1$, og lukkingen $c_i = x_i$ lar oss skrive den i produserte mengder. MSB er ikke generelt den inverse av MTB — de er bare like i likevekt.",
    },
  ],
  'econ2220-6-3': [
    {
      question: "Hva kjennetegner en negativ ekstern virkning?",
      options: ["Privatøkonomisk kostnad er lavere enn samfunnsøkonomisk kostnad", "Bedriften bryter en lov eller en forskrift ved å produsere", "Bedriften regner feil når den maksimerer profitt", "Markedet klarerer ikke fordi tilbudet overstiger etterspørselen ved gjeldende pris"],
      explanation: "Kjennetegnet er kostnadskilen, ikke lovbrudd eller regnefeil. Bedriften tilpasser seg helt korrekt — til en kostnad som bare er en del av den samlede.",
    },
    {
      question: "En bedrift har $c(y) = 50y^2$ og møter $p = 5000$. Hvor mye produserer den uten inngrep?",
      options: ["50", "100", "25", "5000"],
      explanation: "$c'(y) = 100y$, og $p = c'(y)$ gir $5000 = 100y$, altså $y = 50$. Svaret 100 kommer av å glemme faktoren 2 i derivasjonen.",
    },
    {
      question: "Samme bedrift ($c(y) = 50y^2$, $p = 5000$) påfører en ekstern skade på 2000 kroner per enhet. Hva er den effektive mengden?",
      options: ["30", "50", "20", "70"],
      explanation: "Effektivitet krever $p = c'(y) + e$: $5000 = 100y + 2000$, altså $y = 30$. Å legge skaden til prisen i stedet gir 70 — feil fortegn på kilen.",
    },
    {
      question: "Hvordan settes en Pigou-avgift?",
      options: ["Lik den marginale eksterne kostnaden", "Lik den samlede skaden aktiviteten påfører andre", "Lik bedriftens marginalkostnad ved den effektive mengden", "Så høyt at aktiviteten opphører helt"],
      explanation: "Avgiften skal lukke kilen på marginen, altså $\\tau = e$. Totalskaden er en helt annen størrelse, og full stans er nesten aldri effektivt.",
    },
    {
      question: "Bedriften har $c(y) = 40y^2$, $p = 8000$ og en ekstern skade på 1600 per enhet. Hvor mye produserer den med Pigou-avgift?",
      options: ["80", "100", "60", "40"],
      explanation: "$p - \\tau = c'(y)$ gir $8000 - 1600 = 80y$, altså $y = 80$. Mengden 100 er tilpasningen uten avgift.",
    },
    {
      question: "Hvilken forutsetning bak første velferdsteorem brytes av en negativ ekstern virkning?",
      options: ["Forutsetningen om at det ikke finnes eksterne virkninger", "Forutsetningen om at aktørene er pristakere uten markedsmakt", "Forutsetningen om at godene er rivaliserende og ikke fellesgoder", "Forutsetningen om at preferansene er konvekse"],
      explanation: "Kjernetrioen er pristakere, ingen eksterne virkninger og rivaliserende goder. Her faller den andre — pristakerantakelsen holder fortsatt fint.",
    },
    {
      question: "Hva er GALT i påstanden «med en eksternalitet klarerer ikke markedet»?",
      options: ["Markedet klarerer helt fint; det er effektiviteten som ryker", "Markedet klarerer ikke, men likevekten er likevel effektiv", "Ingenting — påstanden er riktig", "Det finnes ingen likevekt i modeller med eksterne virkninger"],
      explanation: "Tilbud er lik etterspørsel, bedrifter maksimerer profitt og konsumenter maksimerer nytte. Likevekten eksisterer, men den er ikke Pareto-effektiv.",
    },
    {
      question: "Markedet oppfyller $\\text{MTB}_{\\text{privat}} = \\text{MSB}$, men vare 1 gir en negativ eksternalitet. Hvilken formulering er presis?",
      options: ["Betingelsen er oppfylt, men ikke tilstrekkelig for effektivitet", "Betingelsen er brutt, og derfor er allokeringen ineffektiv", "Betingelsen er oppfylt, og allokeringen er derfor effektiv", "Betingelsen er irrelevant så snart det finnes eksterne virkninger i produksjonen"],
      explanation: "Dette er kapitlets viktigste distinksjon. Den private likheten holder, men den private brøken måler ikke samfunnets kostnad, så effektivitet følger ikke.",
    },
    {
      question: "Privat MTB er 3, og skaden er 1 enhet vare 2 per enhet vare 1. MSB er 3. Hva bør skje?",
      options: ["Produksjonen av vare 1 bør reduseres", "Produksjonen av vare 1 bør økes", "Ingenting — allokeringen er effektiv", "Prisen på vare 1 bør senkes"],
      explanation: "Samfunnsøkonomisk MTB er $3 + 1 = 4 > 3 = \\text{MSB}$, altså for mye av vare 1. Overskuddet per enhet vri er 1 enhet vare 2.",
    },
    {
      question: "To bedrifter kan kutte utslipp til ulike marginalkostnader. Hvorfor gir en avgift billigere kutt enn et likt påbud?",
      options: ["Kuttene havner der de er billigst, fordi alle kutter til samme marginalkostnad", "Avgiften gir staten inntekter som kan brukes til å kompensere de bedriftene som rammes hardest", "Avgiften gjør at flere bedrifter kutter enn ved et påbud", "Påbudet er vanskeligere å håndheve enn en avgift på utslipp"],
      explanation: "Med avgift kutter alle til marginalkostnaden er lik avgiften, og det er nettopp betingelsen for kostnadsminimering. Statens inntekter er en fordelingssak, ikke effektivitetsargumentet.",
    },
    {
      question: "Hva betyr det å «internalisere» en ekstern virkning?",
      options: ["Å gjøre skaden til en kostnad aktøren selv bærer, slik at den kommer med i beslutningen", "Å pålegge aktøren å ta hensyn til miljøet i sine vurderinger", "Å flytte produksjonen til en annen sektor i økonomien", "Å beregne den samlede skaden aktiviteten påfører samfunnet, og publisere anslaget"],
      explanation: "Internalisering endrer prisene aktøren regner på, ikke motivene. Etter internalisering peker vanlig profittmaksimering mot den effektive mengden.",
    },
    {
      question: "Når er mengderegulering (kvote eller forbud) et sterkere argument enn avgift?",
      options: ["Når skaden har en klar terskel som absolutt ikke må overstiges", "Når kuttekostnadene varierer mye mellom aktørene", "Når skaden per enhet er jevn over hele det aktuelle mengdeområdet", "Når myndighetene ønsker inntekter fra virkemidlet"],
      explanation: "Med terskelvirkning er det mengden som må sikres, og en avgift gir usikker mengde. Store forskjeller i kuttekostnad taler tvert imot for prising.",
    },
    {
      question: "En subsidie skal vri forbruk fra et skadelig til et rent alternativ. Når blir vridningen størst?",
      options: ["Når de to alternativene er nære substitutter", "Når de to alternativene er fjerne substitutter", "Når husholdningens inntekt er lav", "Når subsidien gis som et engangsbeløp ved kjøp"],
      explanation: "Nære substitutter betyr at relativprisen styrer valget, så vridningen blir stor. Ved fjerne substitutter går subsidien mest til å øke samlet forbruk.",
    },
    {
      question: "Hva er hovedforskjellen mellom å subsidiere KJØP av et varig gode og å subsidiere BRUKEN av det?",
      options: ["Bruksstøtte treffer den løpende marginalvurderingen; kjøpsstøtte treffer bare anskaffelsen", "Kjøpsstøtte er alltid dyrere for staten enn bruksstøtte", "Bruksstøtte påvirker ikke relativprisen mellom alternativene", "Kjøpsstøtte er den eneste formen for støtte som kan internalisere en negativ ekstern virkning"],
      explanation: "Den eksterne virkningen oppstår i bruken, så et virkemiddel som bare treffer anskaffelsen, kan endre beholdningen uten å endre bruken — og kan til og med øke den.",
    },
    {
      question: "Hva sier det at samfunnsøkonomisk optimum sjelden er null utslipp?",
      options: ["Så lenge prisen overstiger samlet marginalkostnad, er enheten verdt å produsere", "At utslipp ikke har noen samfunnsøkonomisk kostnad i det hele tatt", "At avgifter aldri kan gi den effektive mengden", "At skaden må kunne måles presist i kroner for i det hele tatt å inngå i regnestykket"],
      explanation: "Effektiv politikk kutter til marginen, ikke til bunnen: enheter der betalingsviljen overstiger både produksjonskostnad og skade, er verdt å lage.",
    },
  ],
  'econ2220-7-1': [
    {
      question: "Hvilken formulering av Nash-likevekt er presis?",
      options: ["Ingen spiller angrer, gitt de andres valg", "Utfallet er det beste mulige for spillerne samlet sett", "Ingen spiller kan gjøre det bedre uansett hva som skjer videre", "Alle spillere velger den strategien som har høyest utbetaling i matrisen"],
      explanation: "Definisjonen handler om ensidige avvik: hver spiller spiller beste svar på de andres valg. «Best for alle samlet» er Pareto-optimalitet, som er noe helt annet.",
    },
    {
      question: "Hvordan finner du radspillerens beste svar i en matrise?",
      options: ["Ta største verdi blant radspillerens tall i hver kolonne", "Ta største verdi blant radspillerens tall i hver rad", "Ta største verdi blant kolonnespillerens tall i hver kolonne", "Ta den cellen der summen av begge spilleres utbetalinger er størst"],
      explanation: "Radspilleren velger rad, altså sammenlikner hun radene innenfor én og samme kolonne. Å summere begge spilleres utbetalinger er et helt annet kriterium.",
    },
    {
      question: "I fangens dilemma er likevektsutfallet Pareto-dominert av et annet utfall. Hva følger av det?",
      options: ["Ingenting galt — likevekt handler bare om ensidige avvik", "Analysen må være feil, siden en likevekt må være effektiv", "Spillet har da ingen Nash-likevekt", "Det gode utfallet er også en Nash-likevekt, bare en svakere en"],
      explanation: "Nash-likevekt krever bare at ingen tjener på å avvike alene. Det gode utfallet er ikke en likevekt, fordi hver spiller ville tjent på å bryte ut av det.",
    },
    {
      question: "Når er en strategi $s$ strengt dominert av $s'$?",
      options: ["Når $s'$ gir høyere utbetaling mot hvert enkelt av motspillerens valg", "Når $s'$ gir høyere utbetaling i gjennomsnitt over motspillerens valg", "Når $s'$ gir høyere utbetaling mot minst ett av motspillerens valg", "Når $s'$ gir høyere utbetaling for begge spillere i den aktuelle cellen"],
      explanation: "Kravet gjelder hver enkelt kolonne, ikke gjennomsnittet. Å være bedre mot minst ett valg er ikke dominans i det hele tatt.",
    },
    {
      question: "Hvorfor stryker vi bare STRENGT dominerte strategier i iterert eliminering?",
      options: ["Fordi en svakt dominert strategi kan inngå i en Nash-likevekt", "Fordi svak dominans er vanskeligere å regne ut", "Fordi svakt dominerte strategier aldri finnes i praksis", "Fordi svak dominans ikke sier noe sikkert om hvilke utbetalinger spilleren faktisk ender med"],
      explanation: "Stryker du svakt dominerte strategier, risikerer du å slette en ekte likevekt. Streng dominans utelukker strategien helt.",
    },
    {
      question: "Hva menes med at en strategi er rasjonaliserbar?",
      options: ["Den overlever iterert eliminering av strengt dominerte strategier", "Den inngår i minst én Nash-likevekt", "Den gir høyest utbetaling mot minst én av motspillerens strategier", "Den er et beste svar mot alle motspillerens mulige strategier"],
      explanation: "Rasjonaliserbarhet er definert av elimineringsprosedyren. Alle likevektsstrategier er rasjonaliserbare, men ikke omvendt — kravet er svakere.",
    },
    {
      question: "Hvorfor holder det ikke med én runde av eliminering?",
      options: ["En strategi kan bli dominert først etter at motspillerens dårlige strategier er strøket", "Fordi man kan ha regnet feil i første runde", "Fordi hver spiller bare kan miste én strategi per runde", "Fordi Nash-likevekten per definisjon alltid ligger i den siste kolonnen som gjenstår etter runde én"],
      explanation: "Å stryke en rad endrer hvilke kolonner som er dominert. Dette var et dokumentert eksamenskrav: skriv ned rekkefølgen og fortsett til ingenting mer kan strykes.",
    },
    {
      question: "Hva er en blandet strategi?",
      options: ["En sannsynlighetsfordeling over spillerens rene strategier", "En strategi som gir samme utbetaling mot alle motstrategier", "En strategi som kombinerer trekk fra begge spillere", "En strategi som velges når spilleren ikke kjenner motspillerens utbetalinger"],
      explanation: "Spilleren trekker lodd mellom rene strategier, og utbetalingen er gjennomsnittet vektet med sannsynlighetene.",
    },
    {
      question: "Radspilleren har $H = (12, 0)$, $L = (0, 12)$ og $M = (5, 5)$ mot motspillerens to valg. Er $M$ dominert?",
      options: ["Ja — av blandingen halvparten $H$ og halvparten $L$, som gir 6 mot begge", "Nei — verken $H$ eller $L$ gir mer enn $M$ i begge kolonner", "Ja — $M$ er strengt dominert av $H$", "Nei — dominans kan per definisjon bare vurderes mellom to rene strategier, aldri mot en blanding"],
      explanation: "Ingen ren strategi dominerer $M$, men 50–50-blandingen gir 6 i begge kolonner mot $M$ sine 5. Dette var et eksplisitt krav i V2022.",
    },
    {
      question: "Samme spill, men $M$ gir 7 i stedet for 5. Er $M$ nå dominert av en blanding?",
      options: ["Nei — kravene $12p > 7$ og $12(1-p) > 7$ kan ikke oppfylles samtidig", "Ja — blandingen 50–50 gir fortsatt 6, som er mer enn 7", "Ja — men bare hvis $p$ settes svært nær 1", "Det kan ikke avgjøres uten at motspillerens egne utbetalinger i de tre radene er oppgitt"],
      explanation: "Ulikhetene krever $p > 7/12$ og $p < 5/12$ samtidig, som er umulig. Grensen ligger ved 6, som er den høyeste verdien en blanding kan garantere her.",
    },
    {
      question: "Hva er den vanligste feilen når en matrise har mer enn én Nash-likevekt?",
      options: ["Å stoppe etter den første likevekten man finner", "Å regne ut forventede utbetalinger i stedet for rene", "Å bruke beste-svar-metoden i stedet for eliminering", "Å behandle radspillerens tall som kolonnespillerens"],
      explanation: "Gå systematisk gjennom hele matrisen — kolonne for kolonne og rad for rad. Å velge den likevekten som ser «best» ut, er ikke en løsning.",
    },
    {
      question: "Hva kjennetegner et koordinasjonsspill?",
      options: ["Spillerne tjener på å gjøre det samme, men det finnes flere måter å gjøre det på", "Spillerne tjener på å gjøre det motsatte av hverandre", "Begge spillere har en strengt dominerende strategi", "Spillet har ingen Nash-likevekt i rene strategier, bare i blandede strategier"],
      explanation: "Kjennemerket er at koordineringen i seg selv er verdifull, og at det typisk gir flere likevekter. En dominerende strategi for begge er derimot fangens dilemma.",
    },
    {
      question: "I hvilken rekkefølge står tallene i en celle på matriseform?",
      options: ["Radspillerens utbetaling først, kolonnespillerens sist", "Kolonnespillerens utbetaling først, radspillerens sist", "Den høyeste utbetalingen først", "Rekkefølgen er vilkårlig og må oppgis i hver oppgave"],
      explanation: "Konvensjonen er rad først. Bytter du om, blir hele beste-svar-analysen feil, og feilen er vanskelig å oppdage etterpå.",
    },
    {
      question: "Hva er forskjellen mellom at en STRATEGI er dominert og at et UTFALL er Pareto-dominert?",
      options: ["Det første sammenlikner én spillers rader eller kolonner; det andre sammenlikner celler for begge spillere", "Det første gjelder rene strategier, det andre blandede", "Det første gjelder simultane spill, det andre dynamiske spill", "Det er to navn på nøyaktig samme egenskap, som ulike lærebøker bruker om hverandre"],
      explanation: "Dominans mellom strategier ser bare på én spillers egne tall; Pareto-dominans mellom utfall sammenlikner hele celler for begge. De to har ikke noe logisk forhold til hverandre.",
    },
    {
      question: "Hvorfor kan en spiller utelukke en strengt dominert strategi uten å vite noe om motspilleren?",
      options: ["Fordi dominanspåstanden bare bruker spillerens egne utbetalinger", "Fordi motspilleren aldri spiller en dominert strategi heller", "Fordi utbetalingene alltid er felles kunnskap i et spill", "Fordi den dominerte strategien gir negativ utbetaling i alle celler"],
      explanation: "Dominans er en sammenlikning innenfor spillerens egne tallrekker, gyldig i hver kolonne separat. Det er nettopp derfor argumentet er så kraftig.",
    },
  ],
  'econ2220-7-2': [
    {
      question: "Hva er en strategi i et dynamisk spill?",
      options: ["En komplett plan som sier hva spilleren gjør i hver av sine beslutningsnoder", "Det trekket spilleren faktisk gjør når spillet spilles", "Den stien gjennom spilltreet som spillet ender med å følge", "Det valget som gir spilleren høyest utbetaling i den noden hun står i"],
      explanation: "Planen må dekke også noder som aldri nås — det er nettopp derfor antall strategier er større enn antall trekk, og derfor tomme trusler kan inngå i en likevekt.",
    },
    {
      question: "En spiller har tre beslutningsnoder med tre valg i hver. Hvor mange rene strategier har hun?",
      options: ["27", "9", "6", "3"],
      explanation: "Produktregelen: $3 \\cdot 3 \\cdot 3 = 27$. Svaret 9 kommer av å bare gange to av nodene; svaret 6 av å legge sammen.",
    },
    {
      question: "Byggherren har én node med to valg; leverandøren har to noder med fem valg hver. Hvor mange strategier har leverandøren?",
      options: ["25", "10", "7", "5"],
      explanation: "$5 \\cdot 5 = 25$. Alternativet 10 kommer av å gange antall noder med antall valg, og 7 av å legge sammen.",
    },
    {
      question: "Hvor mange delspill har et spilltre med fire beslutningsnoder og perfekt informasjon?",
      options: ["4", "3", "5", "8"],
      explanation: "Hver node gir ett delspill, og hele spillet er ett av dem. Å svare 3 er å glemme at hele spillet også regnes som delspill.",
    },
    {
      question: "Hva er baklengs induksjon?",
      options: ["Å løse spillet fra de siste nodene og bakover mot rotnoden", "Å prøve alle strategikombinasjoner og velge den beste", "Å skrive spillet om til normalform og finne alle Nash-likevekter", "Å begynne i rotnoden og følge den stien som gir høyest samlet utbetaling"],
      explanation: "Man starter der valget er enklest — nærmest slutten — og erstatter hver node med utbetalingene fra det valgte alternativet. Resultatet er delspill-perfekt.",
    },
    {
      question: "Hva kreves for at en likevekt skal være delspill-perfekt?",
      options: ["At strategiene utgjør en Nash-likevekt i hvert enkelt delspill", "At alle spillere får minst like mye som i den beste Nash-likevekten", "At likevekten er den eneste Nash-likevekten i spillet", "At ingen spiller har noen dominert strategi i spillet"],
      explanation: "Kravet gjelder også delspill som aldri nås. Det er dette tillegget som luker ut likevekter som hviler på tomme trusler.",
    },
    {
      question: "Hvilken sammenheng gjelder mellom SPNE og Nash-likevekt?",
      options: ["Hver SPNE er en Nash-likevekt, men ikke omvendt", "Hver Nash-likevekt er en SPNE, men ikke omvendt", "De to begrepene er ekvivalente i endelige spill", "De to begrepene utelukker hverandre i dynamiske spill"],
      explanation: "SPNE er et strengere krav og gir derfor en mindre mengde likevekter. De som faller bort, er dem som hviler på ikke-troverdig atferd.",
    },
    {
      question: "Hvorfor kan en ikke-troverdig trussel inngå i en Nash-likevekt?",
      options: ["Fordi trusselen virker, så noden nås aldri og planen der påvirker ikke utbetalingen", "Fordi Nash-likevekt ikke krever at spillerne er rasjonelle", "Fordi trusselen er lønnsom å gjennomføre i den noden den gjelder", "Fordi motparten ikke kjenner utbetalingene i den noden trusselen gjelder"],
      explanation: "Er trusselen virksom, styrer motparten unna noden, og truslerens utbetaling er uberørt av hva planen sier om den. Baklengs induksjon fjerner slike likevekter.",
    },
    {
      question: "I inntrengningsspillet får den etablerte 5 av å dele markedet og 2 av priskrig. Hva følger av baklengs induksjon?",
      options: ["Den etablerte deler markedet, og inntrengeren etablerer seg", "Den etablerte tar priskrig, og inntrengeren holder seg unna", "Den etablerte deler markedet, og inntrengeren holder seg unna", "Spillet har ingen delspill-perfekt likevekt"],
      explanation: "I den siste noden er deling best for den etablerte, så trusselen om priskrig faller. Inntrengeren regner med deling og går inn.",
    },
    {
      question: "Hvordan finner du bedrift 1 sin reaksjonsfunksjon?",
      options: ["Deriver bedrift 1 sin profitt med hensyn på $q_1$ og hold $q_2$ fast", "Deriver bedrift 1 sin profitt med hensyn på $q_2$ og hold $q_1$ fast", "Deriver samlet profitt for begge bedrifter med hensyn på $Q$", "Sett prisen lik kostnaden per enhet og løs for $q_1$"],
      explanation: "Bedriften optimerer over sitt eget kvantum. Å derivere med hensyn på den andres kvantum er en dokumentert klassiker og gir et meningsløst uttrykk.",
    },
    {
      question: "Med $p = 26 - (q_1+q_2)$ og kostnad 2 per enhet: hva er Cournot-likevekten?",
      options: ["$q_1 = q_2 = 8$", "$q_1 = q_2 = 12$", "$q_1 = 12$, $q_2 = 6$", "$q_1 = q_2 = 6$"],
      explanation: "Reaksjonsfunksjonen er $q_1 = 12 - q_2/2$; symmetri gir $q = 8$. Paret $(12, 6)$ er Stackelberg-løsningen, ikke Cournot.",
    },
    {
      question: "Samme marked, men bedrift 1 binder seg først. Hva blir Stackelberg-løsningen?",
      options: ["$q_1 = 12$, $q_2 = 6$", "$q_1 = q_2 = 8$", "$q_1 = 6$, $q_2 = 12$", "$q_1 = 18$, $q_2 = 9$"],
      explanation: "Sett følgerens reaksjonsfunksjon inn i lederens profitt: $\\pi_1 = (12 - q_1/2)q_1$ gir $q_1 = 12$ og $q_2 = 6$. Lederen leverer dobbelt så mye som følgeren.",
    },
    {
      question: "Hva er den riktige forklaringen på førstetrekksfordelen i Stackelberg?",
      options: ["Lederen har bundet seg, så følgeren må tilpasse seg nedover", "Lederen er større og har derfor lavere kostnader", "Lederen kan endre kvantumet sitt etter å ha sett følgerens valg", "Lederen står overfor en høyere pris enn følgeren gjør"],
      explanation: "Fordelen ligger i at kvantumet er irreversibelt lagt på bordet. Kunne lederen endret det etterpå, ville fordelen forsvunnet og vi var tilbake i Cournot.",
    },
    {
      question: "Hva skjer med samlet profitt når Cournot erstattes av Stackelberg i det samme markedet?",
      options: ["Den faller, fordi samlet kvantum øker og prisen faller", "Den stiger, fordi lederen tjener mer enn følgeren taper", "Den er uendret, siden bare fordelingen mellom bedriftene endres", "Den faller bare hvis bedriftene har ulike kostnader per enhet"],
      explanation: "I eksemplet går samlet profitt fra 128 til 108: lederens gevinst på 8 veier ikke opp for følgerens tap på 28. Kjøperne kommer derimot bedre ut.",
    },
    {
      question: "Hva er forskjellen mellom en ikke-troverdig trussel og et ikke-troverdig løfte?",
      options: ["Trusselen skal avskrekke motparten; løftet skal lokke henne til å handle", "Trusselen gjelder dynamiske spill; løftet gjelder simultane spill", "Trusselen kan aldri inngå i en Nash-likevekt, mens løftet kan", "Trusselen gjelder egne utbetalinger; løftet gjelder motpartens utbetalinger"],
      explanation: "Begge er varsler om handlinger spilleren ikke ville gjennomført. Forskjellen er retningen — og en tom trussel er lettere å bære i en Nash-likevekt, siden den holder motparten borte fra noden.",
    },
  ],
  'econ2220-7-3': [
    {
      question: "Hva er Fehr-Schmidt-nytten til en person som får $x_i$ når den andre får $x_j$?",
      options: ["$x_i - \\alpha\\max\\{x_j-x_i,0\\} - \\beta\\max\\{x_i-x_j,0\\}$", "$x_i - \\beta\\max\\{x_j-x_i,0\\} - \\alpha\\max\\{x_i-x_j,0\\}$", "$x_i - \\alpha(x_j - x_i) - \\beta(x_i - x_j)$", "$x_i + \\alpha\\max\\{x_j-x_i,0\\} + \\beta\\max\\{x_i-x_j,0\\}$"],
      explanation: "$\\alpha$ hører til leddet der hun ligger under, $\\beta$ til leddet der hun ligger over. Uten max-funksjonene ville begge leddene virket samtidig, og de ville delvis nullet hverandre ut.",
    },
    {
      question: "Hvilket ledd i Fehr-Schmidt-nytten er aktivt når personen får MINDRE enn den andre?",
      options: ["Misunnelsesleddet med $\\alpha$", "Skyldleddet med $\\beta$", "Begge leddene samtidig", "Ingen av leddene, siden differansen er negativ"],
      explanation: "Er $x_j > x_i$, er $\\max\\{x_j-x_i,0\\} > 0$ og $\\max\\{x_i-x_j,0\\} = 0$. Bare ett ledd kan være positivt om gangen.",
    },
    {
      question: "Med $\\alpha = 0{,}8$: hva er Fehr-Schmidt-nytten når fordelingen er $(10, 120)$?",
      options: ["$-78$", "$10$", "$-88$", "$-56$"],
      explanation: "$U = 10 - 0{,}8(120-10) = 10 - 88 = -78$. Svaret $-88$ er bare fradragsleddet, uten å legge til egen utbetaling.",
    },
    {
      question: "Hva er Fehr-Schmidt-nytten ved likedeling av en pott på 130?",
      options: ["65", "0", "130", "39"],
      explanation: "Ved likedeling er begge max-ledd null, så $U_i = x_i = 65$. Det er en nyttig regnekontroll: lander du på likedeling, skal nytten være halve potten.",
    },
    {
      question: "Hva er avslagsgrensen som andel av potten i ultimatumspillet?",
      options: ["$\\dfrac{\\alpha}{1+2\\alpha}$", "$\\dfrac{\\alpha}{1+\\alpha}$", "$\\dfrac{\\beta}{1+2\\beta}$", "$\\dfrac{2\\alpha}{1+\\alpha}$"],
      explanation: "$U_R = m(1+2\\alpha) - \\alpha T \\ge 0$ gir grensen. Uttrykk med $\\beta$ er feil fordi skyldleddet er null når respondenten får minst.",
    },
    {
      question: "Med $\\alpha = 0{,}8$ og en pott på 130 kroner: hva er det minste tilbudet respondenten godtar?",
      options: ["40 kroner", "30 kroner", "65 kroner", "50 kroner"],
      explanation: "Grensen er $\\frac{0{,}8}{2{,}6} = \\frac{4}{13}$, og $\\frac{4}{13}\\cdot 130 = 40$. Kontroll: $40 - 0{,}8(130-80) = 0$.",
    },
    {
      question: "Hvorfor inngår ikke $\\beta$ i avslagsgrensen?",
      options: ["Fordi skyldleddet er null når respondenten får mindre enn forslagsstilleren", "Fordi $\\beta$ alltid er mindre enn $\\alpha$ og derfor kan neglisjeres", "Fordi respondenten ikke bryr seg om forslagsstillerens utbetaling", "Fordi $\\beta$ bare gjelder i tillitsspillet og ikke i ultimatumspillet"],
      explanation: "Avslagsvurderingen gjelder tilbud under halvparten, der respondenten ligger under. Da er $\\beta$-leddet null uansett hvor stor $\\beta$ er.",
    },
    {
      question: "Kan avslagsgrensen bli 50 prosent eller mer for noen verdi av $\\alpha$?",
      options: ["Nei — $\\dfrac{\\alpha}{1+2\\alpha} < \\dfrac{1}{2}$ for alle $\\alpha > 0$", "Ja, når $\\alpha > 1$", "Ja, når $\\alpha \\to \\infty$", "Ja, når $\\alpha > \\beta$"],
      explanation: "Nevneren $1+2\\alpha$ er strengt større enn $2\\alpha$, så brøken er strengt under en halv. Den nærmer seg 1/2 når $\\alpha$ vokser, men når den aldri.",
    },
    {
      question: "Hva er prediksjonen i ultimatumspillet når BEGGE spillere er egoistiske?",
      options: ["Forslagsstilleren beholder nesten alt, og respondenten godtar", "Potten deles likt mellom de to spillerne", "Respondenten avslår alle tilbud under en tredel av potten", "Spillet har ingen delspill-perfekt likevekt fordi respondenten er indifferent ved null"],
      explanation: "Respondenten godtar alt positivt, så forslagsstilleren tilbyr minst mulig. De to variantene ($m=0$ eller minste positive enhet) avhenger av hvordan indifferansen behandles.",
    },
    {
      question: "Hvorfor kaller vi den egoistiske løsningen en referanseprediksjon?",
      options: ["Fordi den er sammenlikningsgrunnlaget som viser hva ulikhetsaversjonen endrer", "Fordi den er den empirisk riktige prediksjonen i de fleste eksperimenter", "Fordi den bare gjelder når potten er stor nok", "Fordi den er en tilnærming som blir riktig når $\\alpha$ og $\\beta$ er små nok"],
      explanation: "Utledningen er korrekt gitt sin antakelse. Verdien ligger i at vi kan måle ulikhetsaversjonens virkning mot den — den er ikke «gal», bare basert på en enklere antakelse.",
    },
    {
      question: "En Fehr-Schmidt-aktør fordeler en sum fritt. Når velger hun likedeling?",
      options: ["Når $\\beta > \\tfrac{1}{2}$", "Når $\\alpha > \\tfrac{1}{2}$", "Alltid, siden hun misliker ulikhet", "Når $\\alpha > \\beta$"],
      explanation: "Tar hun én krone mer, vokser forspranget med to, så skyldfradraget øker med $2\\beta$. Netto $1-2\\beta$ er negativ bare når $\\beta$ er over en halv.",
    },
    {
      question: "Hva blir nettoendringen i nytten per krone en Fehr-Schmidt-aktør beholder utover halvparten, med $\\beta = 0{,}6$?",
      options: ["$-0{,}2$", "$+0{,}4$", "$-0{,}6$", "$+0{,}2$"],
      explanation: "Endringen er $1 - 2\\beta = 1 - 1{,}2 = -0{,}2$. Nytten faller, og derfor stopper hun ved likedeling.",
    },
    {
      question: "I tillitsspillet har investoren 100 kroner, sender alt, og beløpet tredobles. Hva sender en Fehr-Schmidt-mottaker med $\\beta = 0{,}6$ tilbake?",
      options: ["150 kroner", "100 kroner", "0 kroner", "300 kroner"],
      explanation: "Mottakeren har 300 og investoren 0; utligning gir 150 til hver. Å sende 0 er den egoistiske løsningen.",
    },
    {
      question: "Hva skjer i tillitsspillet hvis mottakeren er egoistisk?",
      options: ["Hun sender ingenting tilbake, og investoren sender derfor ingenting", "Hun sender tilbake nøyaktig det investoren sendte inn", "Hun deler potten likt, siden det er delspill-perfekt", "Investoren sender alt likevel, fordi tredoblingen gjør det lønnsomt"],
      explanation: "Baklengs induksjon: $r = 0$ er best for en egoistisk mottaker, og da taper investoren på hver krone hun sender. Tredoblingen blir aldri utnyttet.",
    },
    {
      question: "En pott på 130 kroner deles, og respondenten tilbys 39. Hvorfor avslår hun?",
      options: ["Fordi nytten av å godta blir negativ, og avslag gir nytte null", "Fordi respondenten ønsker å straffe forslagsstilleren uansett beløp", "Fordi respondenten ikke er rasjonell når tilbudet er lavt", "Fordi forslagsstilleren da ville fått mer enn to tredeler av potten"],
      explanation: "$U_R(39) = 39 - 0{,}8(130-78) = -2{,}6 < 0$, mens avslag gir 0. Avslaget er altså nyttemaksimerende — trusselen er troverdig fordi utbetalingene i noden er endret.",
    },
  ],
  'econ2220-8-1': [
    {
      question: "Hva betyr det at en aktualisert drøftingsoppgave er «uten fasit»?",
      options: ["At flere konklusjoner kan gi full uttelling når de er utledet av pensum", "At sensor vurderer språklig form og struktur, men ikke det faglige innholdet i besvarelsen", "At alle svar godtas, også rene meningsytringer uten modellbruk eller mekanismer", "At oppgaven ikke telles med når den samlede karakteren settes"],
      explanation: "Ingen fasit betyr flere gyldige veier fram, ikke fravær av krav: struktur, riktig modellvalg og navngitte mekanismer gir poengene.",
    },
    {
      question: "Hvilken størrelse styrer først og fremst hvor sterk inntektseffekten av en prisøkning blir?",
      options: ["Budsjettandelen varen hadde i utgangspunktet", "Krumningen på produksjonsmulighetskurven i den sektoren varen produseres", "Antallet tilbydere som konkurrerer i markedet for varen", "Skalautbyttet i teknologien som brukes til å produsere varen"],
      explanation: "Realinntektsfallet ved en prisøkning er omtrent prisøkningen ganget med det du kjøpte fra før, altså proporsjonalt med budsjettandelen.",
    },
    {
      question: "Hva er det substituerbarheten mellom to goder først og fremst styrer i en drøfting?",
      options: ["Styrken på substitusjonseffekten når relativprisen endres", "Fortegnet på inntektseffekten når realinntekten faller for konsumenten", "Om konsumenten er netto kjøper eller netto selger av godet som ble dyrere", "Om budsjettbetingelsen holder med likhet eller med ulikhet"],
      explanation: "Jo nærmere substitutter godene er, desto mer forbruk flyttes av en gitt endring i relativprisen.",
    },
    {
      question: "En kornbonde eier mer korn enn hun konsumerer. Kornprisen stiger. Hva sier nettoposisjonen om velferdsvirkningen?",
      options: ["Hun er netto selger, så prisøkningen kan gjøre henne bedre stilt", "Hun er netto kjøper, og nytten faller derfor entydig slik den gjør for en byhusholdning", "Nettoposisjonen sier ingenting om nytten, den bestemmer bare fortegnet på substitusjonseffekten", "Nytten er uendret fordi hun både kjøper og selger korn til den samme markedsprisen"],
      explanation: "For en netto selger øker verdien av beholdningen når prisen stiger; hun kan fortsatt velge beholdningspunktet og har råd til mer enn før.",
    },
    {
      question: "Hvorfor er «de fattige rammes hardest» et svakt svar i denne sjangeren?",
      options: ["Det er ubetinget og navngir ingen mekanisme", "Det er altfor kort til at sensor kan gi noen uttelling for det", "Det er en normativ påstand, og normative vurderinger er forbudt på eksamen", "Det mangler matematisk notasjon, som kreves i alle deloppgaver"],
      explanation: "Sensor premierer betingede konklusjoner av typen «jo høyere budsjettandel, desto større tap» — mekanismen må fram.",
    },
    {
      question: "Et selskap har regnskapsmessig overskudd år etter år. Hva følger av det for nullprofitt-resultatet?",
      options: ["Ingenting i seg selv, for alternativkostnaden på kapitalen ligger i $c(y)$", "At nullprofitt-resultatet er motbevist, siden profitten åpenbart er større enn null", "At teknologien må ha avtakende skalautbytte, ellers ville overskuddet forsvunnet", "At prisen må ligge under marginalkostnaden i den tilpasningen bedriften har valgt"],
      explanation: "Null renprofitt betyr normal avkastning på kapitalen, ikke null inntekt; regnskapsoverskudd er derfor forenlig med resultatet.",
    },
    {
      question: "Diskusjonsoppgaven spør om et marked for oppdrettskonsesjoner. Hvordan bruker du grunnrentebegrepet?",
      options: ["Ved å knytte meravkastningen til den knappe lokaliteten, og forklare at fri etablering ikke kan skape flere av dem", "Ved å slå fast at all profitt i næringen er grunnrente så lenge det kreves konsesjon", "Ved å regne ut differansen mellom marginalkostnad og gjennomsnittskostnad i likevekt", "Ved å vise at renprofitten forsvinner på lang sikt, slik at grunnrenten også må gjøre det"],
      explanation: "Poenget er koblingen knapp ressurs → varig meravkastning: etableringsfriheten konkurrerer bort renprofitt, men ikke avkastningen som fester seg til selve lokaliteten. Siste alternativ blander de to begrepene.",
    },
    {
      question: "Oppgaven ber deg drøfte hvordan en subsidie påvirker BRUKEN av bil. Hva er den dokumenterte fellen?",
      options: ["Å drøfte kjøpet av bil i stedet for bruken", "Å levere en figur i stedet for den matematiske utledningen sensor ber om", "Å glemme å normalisere prisene før likevekten beregnes", "Å oppgi svaret uten å tolke det i økonomiske enheter"],
      explanation: "Å svare på noe annet enn det spurte er feil #13 i bokas register, og er forutsett i sensorveiledningen til nettopp denne oppgavetypen.",
    },
    {
      question: "Hvorfor kan en subsidie på et grønt substitutt øke samlet forbruk i stedet for å vri det?",
      options: ["Fordi inntektseffekten frigjør kjøpekraft når substitutten er fjern", "Fordi substitusjonseffekten av et prisfall alltid trekker i positiv retning for begge goder", "Fordi subsidien flytter budsjettlinjen parallelt utover uten å endre relativprisen", "Fordi prisen på den forurensende varen stiger samtidig som subsidien innføres"],
      explanation: "Er godene fjerne substitutter, blir substitusjonseffekten liten; den frigjorte kjøpekraften kan da øke forbruket av begge goder.",
    },
    {
      question: "Hvilken effekt har det å skille kort og lang sikt i en aktualisert drøfting?",
      options: ["Det viser at tilpasningsrommet, og dermed utslaget, er ulikt", "Det er bare relevant i produsentoppgaver, ikke når konsumenter skal analyseres", "Det erstatter behovet for å drøfte fordelingsvirkningene av endringen", "Det gjør at konklusjonen kan skrives ubetinget i stedet for betinget"],
      explanation: "På kort sikt er teknologi og vaner låst, så prisutslagene er størst; på lang sikt tilpasses alt, og både etterspørsel og tilbud blir mer prisfølsomme.",
    },
  ],
  'econ2220-8-2': [
    {
      question: "Hva er første trinn i svarmalen for en påstandsoppgave?",
      options: ["Å ta stilling — sann, usann eller betinget sann", "Å gjengi hele teorien som påstanden bygger på, før du konkluderer", "Å tegne figuren som illustrerer sammenhengen påstanden gjelder", "Å regne ut et talleksempel som viser hva påstanden innebærer"],
      explanation: "Stillingen skal stå i første setning; deretter kommer mekanismen og til slutt avgrensningen.",
    },
    {
      question: "«Kostnadsminimering medfører profittmaksimering.» Hva er galt?",
      options: ["Implikasjonsretningen er snudd", "Begge betingelsene gjelder bare på kort sikt, ikke på lang sikt", "Kostnadsminimering forutsetter at faktorprisene er like for alle bedrifter", "Profittmaksimering krever konstant skalautbytte i produksjonen"],
      explanation: "Profittmaksimering medfører kostnadsminimering; den motsatte veien holder ikke, siden produktprisen ikke inngår i kostnadsminimeringen.",
    },
    {
      question: "Kostnadsminimering er for profittmaksimering en betingelse som er …",
      options: ["nødvendig, men ikke tilstrekkelig", "tilstrekkelig, men ikke nødvendig, så lenge kvantumet er gitt", "både nødvendig og tilstrekkelig når faktorprisene er gitte", "verken nødvendig eller tilstrekkelig, men et selvstendig krav"],
      explanation: "En profittmaksimerende bedrift må produsere billigst mulig, men det å produsere billigst mulig sier ingenting om kvantumsvalget.",
    },
    {
      question: "Hvorfor kan substitusjonseffekten aldri øke etterspørselen etter godet som ble dyrere?",
      options: ["Fordi den gamle kurven fortsatt er tilgjengelig etter kompensasjonen", "Fordi inntektseffekten alltid trekker i motsatt retning av substitusjonseffekten", "Fordi budsjettbetingelsen alltid holder med likhet når preferansene er monotone", "Fordi budsjettlinjen roterer gjennom beholdningspunktet ved en prisendring"],
      explanation: "Slutsky-kompensasjonen gir råd til den gamle kurven; velges noe annet, må det inneholde mer av det relativt billigere godet — avslørte preferanser.",
    },
    {
      question: "Hva kjennetegner en betinget sann påstand?",
      options: ["Den holder under noen forutsetninger og svikter under andre", "Den er sann, men kan ikke bevises med de metodene faget bruker", "Den er usann i den generelle modellen, men sann i alle talleksempler", "Den er sann bare når konsumenten har Cobb-Douglas-preferanser"],
      explanation: "Riktig svar er å si at den er betinget sann og skrive ut betingelsen — typisk normalitet, konveksitet eller nettoposisjon.",
    },
    {
      question: "En omfordeling flytter beholdning fra B til A, og markedet finner en ny likevekt. Hva er riktig?",
      options: ["Den nye likevekten er Pareto-effektiv, men overgangen er ingen Pareto-forbedring", "Både overgangen og den nye likevekten er Pareto-forbedringer siden markedet klarerer", "Den nye likevekten er ikke Pareto-effektiv, fordi omfordelingen vrir prisene", "Første velferdsteorem gjelder ikke lenger etter at beholdningene er endret"],
      explanation: "Omfordelingen endrer utgangspunktet, ikke mekanismen: 1. velferdsteorem gjelder fortsatt, men B er blitt dårligere stilt.",
    },
    {
      question: "Hva er poenget med et moteksempel i en påstandsbesvarelse?",
      options: ["Ett tilfelle er nok til å felle en påstand med «alltid»", "Det viser at påstanden gjelder i minst ett tilfelle, og derfor er sann", "Det erstatter kravet om å oppgi mekanismen bak konklusjonen", "Det brukes bare når oppgaven eksplisitt ber om et talleksempel"],
      explanation: "Et moteksempel avviser generelle påstander; ett eksempel som stemmer, beviser derimot ingenting.",
    },
    {
      question: "«En prisøkning gjør alltid konsumenten fattigere.» Hvorfor er dette usant?",
      options: ["En netto selger blir rikere når det hun eier stiger i verdi", "Substitusjonseffekten er positiv når varen er et mindreverdig gode for konsumenten", "Budsjettlinjen skifter parallelt utover når prisen på vare 1 stiger", "Nytten er uavhengig av prisene så lenge budsjettbetingelsen holder med likhet"],
      explanation: "I en beholdningsøkonomi stiger også verdien av beholdningen; for en netto selger kan nytten øke.",
    },
    {
      question: "Hvorfor er «konstant skalautbytte gir horisontal tilbudskurve» bare betinget sann?",
      options: ["Tilbudet er null under $k$ og ubegrenset over $k$", "Fordi kostnadsfunksjonen ikke er lineær når faktorprisene endres over tid", "Fordi marginalkostnaden stiger så snart alle faktorene skaleres opp samtidig", "Fordi bedriften først må dekke de gjenvinnbare faste kostnadene sine"],
      explanation: "Kurven er horisontal bare i punktet der prisen er lik den konstante kostnaden per enhet, $k$; ellers er tilbudet null eller ubegrenset.",
    },
    {
      question: "Hvilket ekstrakrav stiller andre velferdsteorem, ut over dem første stiller?",
      options: ["Konvekse preferanser og kostnadsfri omfordeling", "At alle konsumenter har identiske nyttefunksjoner og like beholdninger", "At produksjonen skjer med konstant skalautbytte i alle sektorer", "At myndighetene kjenner alle konsumentenes nyttefunksjoner nøyaktig"],
      explanation: "Uten konveksitet finnes Pareto-effektive allokeringer som ingen prisvektor kan understøtte; og omfordelingen må skje uten å vri prisene.",
    },
  ],
  'econ2220-8-3': [
    {
      question: "Settet har vektene 35/35/30 og varer 240 minutter. Hvor mye tid får hver deloppgave i oppgave 1, som har fem deloppgaver?",
      options: ["Omtrent 17 minutter", "Omtrent 24 minutter, siden hver oppgave er beregnet til én time", "Omtrent 12 minutter, fordi lesing og gjennomgang må trekkes fra først", "Omtrent 35 minutter, ett minutt per prosentpoeng oppgaven teller"],
      explanation: "35 % av 240 minutter er 84 minutter; med fem likt vektede deloppgaver blir det ca. 17 minutter hver.",
    },
    {
      question: "Ingrid eier 4 favner ved og 24 enheter av vare 2. Med $a = 1/2$, $p_1 = 2$ og $p_2 = 1$ er tilpasningen $(8, 16)$. Hva er hun?",
      options: ["Netto kjøper av ved, siden $c_1 > \\omega_1$", "Netto selger av ved, siden hun eier ved fra før og kan selge den i markedet", "Verken netto kjøper eller netto selger, fordi budsjettbetingelsen holder med likhet", "Netto selger av vare 2 og dermed også netto selger av ved"],
      explanation: "Nettoposisjonen leses av som $c_1 - \\omega_1 = 8 - 4 = 4 > 0$: hun kjøper 4 favner i markedet.",
    },
    {
      question: "Vedprisen dobles fra 2 til 4. Substitusjonseffekten er $-2$ og totaleffekten $-3$. Hvordan er inntektsvirkningen satt sammen?",
      options: ["Ordinær inntektseffekt $-2$ og beholdningsvirkning $+1$", "Ordinær inntektseffekt $-1$ og beholdningsvirkning $0$, siden hun er netto kjøper av veden", "Ordinær inntektseffekt $-3$ og beholdningsvirkning $+2$, slik at summen blir totaleffekten", "Bare én inntektseffekt på $-1$; beholdningen spiller ingen rolle for regnestykket"],
      explanation: "Den gamle kurven er blitt dyrere ($-8\\cdot 2/8 = -2$), mens beholdningen er blitt mer verdt ($+4\\cdot 2/8 = +1$); summen $-1$ er inntektsvirkningen.",
    },
    {
      question: "I bytteøkonomien er $\\Omega_1 = 12$, $\\Omega_2 = 24$ og begge har budsjettandel $1/2$. Hva blir likevektsprisen når $p_2 = 1$?",
      options: ["$p_1 = 2$", "$p_1 = 1$, siden begge konsumentene har identiske preferanser", "$p_1 = 1/2$, fordi det er dobbelt så mye av vare 2 som av vare 1", "Prisen er ubestemt uten å kjenne fordelingen av beholdningene"],
      explanation: "Klarering gir $p_1 = a\\Omega_2/((1-a)\\Omega_1) = 24/12 = 2$; med identiske andeler avhenger prisen bare av totalmengdene.",
    },
    {
      question: "Teknologien er $F(K,L) = K^{1/3}L^{1/3}$ med $r = 5$ og $w = 20$. Hva er kostnadsfunksjonen?",
      options: ["$c(y) = 20y^{3/2}$", "$c(y) = 20y$, siden faktorprisene er konstante og bedriften er pristaker", "$c(y) = 10y^{2}$, fordi eksponentene i produktfunksjonen summerer seg til $2/3$", "$c(y) = 25y^{3/2}$, altså summen av faktorprisene ganget med kvantumet"],
      explanation: "Kostnadsminimering gir $c(y) = 2y^{3/2}\\sqrt{rw}$, og $\\sqrt{5\\cdot 20} = 10$, altså $c(y) = 20y^{3/2}$ — konveks, som avtakende skalautbytte krever.",
    },
  ],
  'econ2220-8-4': [
    {
      question: "Med nytten $u = 4\\sqrt{c_1} + c_2$ og $p_2 = 1$: hva er etterspørselen etter vare 1?",
      options: ["$c_1 = 4/p_1^2$", "$c_1 = m/(2p_1)$, altså halve inntekten brukt på vare 1 slik som ved Cobb-Douglas", "$c_1 = 2/p_1$, siden marginalnytten er $2/\\sqrt{c_1}$ i optimum", "$c_1 = 4\\sqrt{m}/p_1$, fordi nyttefunksjonen inneholder en kvadratrot"],
      explanation: "Førsteordensbetingelsen $2/\\sqrt{c_1} = p_1$ gir $\\sqrt{c_1} = 2/p_1$, altså $c_1 = 4/p_1^2$ — uavhengig av inntekten.",
    },
    {
      question: "Etterspørselen $c_1 = 4/p_1^2$ er uavhengig av $m$. Hva følger av det for godet?",
      options: ["Det er verken normalt eller mindreverdig", "Det er mindreverdig, siden etterspørselen ikke øker når inntekten øker", "Det er normalt, fordi konsumenten aldri reduserer forbruket når hun blir rikere", "Spørsmålet kan ikke avgjøres uten å kjenne prisen på vare 2"],
      explanation: "Normalt krever $\\partial c_1/\\partial m > 0$ og mindreverdig $< 0$; her er den deriverte null — grensetilfellet mellom dem.",
    },
    {
      question: "Prisen stiger fra 1 til 2, og forbruket faller fra 4 til 1. Hvordan fordeler dette seg på effekter?",
      options: ["Substitusjonseffekt $-3$, inntektseffekt $0$", "Substitusjonseffekt $-1{,}5$ og inntektseffekt $-1{,}5$, altså like store bidrag fra hver kanal", "Substitusjonseffekt $0$, inntektseffekt $-3$, siden realinntekten faller kraftig", "Effektene kan ikke skilles uten å kjenne nyttenivået før prisøkningen"],
      explanation: "Etterspørselen avhenger ikke av inntekten, så Slutsky-kompensasjonen endrer ingenting: kompensert etterspørsel er også 1, og hele virkningen er substitusjon.",
    },
    {
      question: "I bytteøkonomien er $\\Omega_1 = 5$, $u_A = 10\\sqrt{c_1}+c_2$ og $u_B = 20\\sqrt{c_1}+c_2$. Hva er likevektsprisen når $p_2 = 1$?",
      options: ["$p_1 = 5$", "$p_1 = 15$, siden summen av de to koeffisientene er 30 og totalmengden er 5", "$p_1 = 2{,}5$, siden $B$ verdsetter vare 1 dobbelt så høyt som $A$ og prisen legges midt imellom", "$p_1 = 25$, altså kvadratet av totalmengden av vare 1"],
      explanation: "Klarering: $25/p_1^2 + 100/p_1^2 = 5$ gir $p_1^2 = 25$, altså $p_1 = 5$; da er $c_1^A = 1$ og $c_1^B = 4$.",
    },
    {
      question: "MTB er 1 og MSB er 3 i en økonomi med produksjon. Hva viser det?",
      options: ["Allokeringen er ikke Pareto-effektiv; det finnes en gjennomførbar forbedring", "Allokeringen er Pareto-effektiv, men fordelingen mellom konsumentene er urimelig skjev", "Konsumentene er ikke i optimum, selv om produsentene tilpasser seg riktig til prisene", "Produksjonsmulighetskurven må være lineær i det aktuelle punktet"],
      explanation: "Én enhet mer av vare 1 koster samfunnet 1 enhet av vare 2, men er verdt 3 for konsumentene: vri produksjonen og del overskuddet på 2.",
    },
  ],
  'econ2220-8-5': [
    {
      question: "Solfrid eier $\\omega = (12,6)$ og konsumerer $(9,9)$ ved $p_1 = p_2 = 1$. Osteprisen stiger til 3. Hva skjer med nytten?",
      options: ["Den stiger: den gamle kurven koster 36 mot en inntekt på 42", "Den faller, fordi prisen på et gode hun konsumerer har blitt tre ganger høyere enn før", "Den er uendret, siden hun både eier og konsumerer ost i utgangspunktet", "Det kan ikke avgjøres uten å regne ut nyttetallene før og etter endringen"],
      explanation: "Som netto selger har hun fortsatt råd til den gamle kurven og litt til; velger hun noe annet, må det være strengt bedre.",
    },
    {
      question: "For en netto selger er totaleffekten av en prisøkning på det hun eier, generelt ubestemt. Hvorfor?",
      options: ["Substitusjonsleddet er negativt, mens inntektsleddet er positivt", "Fordi substitusjonseffekten kan skifte fortegn når beholdningen er stor nok i forhold til konsumet", "Fordi budsjettlinjen skifter parallelt og ikke roterer gjennom beholdningspunktet", "Fordi nytten både kan stige og falle, avhengig av hvor stor prisøkningen er"],
      explanation: "$(\\omega_1 - c_1) > 0$ gjør inntektsleddet positivt for et normalt gode, så summen av de to leddene har ubestemt fortegn.",
    },
    {
      question: "Med $m_1 = 400$, $m_2 = 252$ og $r = 5\\ \\%$: hva er nåverdien av inntekten?",
      options: ["640", "652, altså summen av de to inntektene med fem prosent lagt til den siste", "620, siden hele inntekten i periode 2 må diskonteres to ganger", "672, fordi begge inntektene skal oppjusteres med renten"],
      explanation: "$252/1{,}05 = 240$ (kontroll: $1{,}05\\cdot 240 = 252$), så nåverdien er $400 + 240 = 640$.",
    },
    {
      question: "Et glassverk har $c_v = 4y^2$, gjenvinnbar tomteleie 64 og ugjenkallelig ovnsombygging 50. Når bør det legge ned på kort sikt?",
      options: ["Når $p < 32$", "Når profitten er negativ, altså når prisen ikke dekker alle faste kostnader", "Når $p < 40$, altså under prisen som gir maksimal profitt i regnestykket", "Når prisen er lavere enn den gjennomsnittlige variable kostnaden ved full drift"],
      explanation: "Minimum av $4y + 64/y$ er 32 ved $y = 4$; bare unngåelige kostnader teller, så de 50 er irrelevante.",
    },
    {
      question: "Med $x_1 = \\sqrt{n_1}$, $x_2 = \\sqrt{n_2}$ og $n_1 + n_2 = 400$: hva blir produksjonen når $p_1 = 4$ og $p_2 = 3$?",
      options: ["$x_1 = 16$ og $x_2 = 12$", "$x_1 = 12$ og $x_2 = 16$, siden brøken skal settes lik $p_2/p_1$", "$x_1 = x_2 = 10\\sqrt{2}$, fordi arbeidstimene deles likt mellom de to næringene", "$x_1 = 4$ og $x_2 = 3$, altså i samme forhold som de to prisene"],
      explanation: "Verdimaksimering gir MTB $= x_1/x_2 = p_1/p_2 = 4/3$; sammen med $x_1^2 + x_2^2 = 400$ gir det $(16,12)$ og 256/144 timer.",
    },
  ],
};

export default quizData_econ2220;
