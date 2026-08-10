import type { QuizQuestion } from './quiz-data';

const quizData_ling1100: Record<string, QuizQuestion[]> = {
  'ling1100-0-1': [
    {
      question: "Hvilke hjelpemidler er tillatt på eksamen i LING1100?",
      options: ["Ingen — hele eksamen er uten hjelpemidler av noe slag.", "Ordbok er tillatt, men ikke egne notater.", "Første del er uten hjelpemidler, andre del med.", "Alle trykte hjelpemidler er tillatt, men ikke digitale."],
      explanation: "Riktig er at eksamen er uten hjelpemidler i det hele tatt. Svaret om en todeling tester fella med å tro at LING1100 har den delingen mange realfagseksamener har; den finnes ikke her. De to øvrige tester troen på at ordbøker eller trykte kilder er tillatt, og det er de ikke — testene og symbolene må sitte i hukommelsen.",
    },
    {
      question: "Hvor mange besvarelser leverer du i det nyeste eksamensformatet?",
      options: ["Ti, altså to i hver av fem temablokker.", "Femten, altså tre i hver av fem temablokker.", "Fem, altså én i hver av fem temablokker.", "Åtte, med deloppgaver merket a, b og c."],
      explanation: "Riktig er ti besvarelser: fem blokker med tre spørsmål hver, der du velger nøyaktig to. Svaret med femten tester fella med å svare på alle tre i hver blokk, som ikke gir ekstrapoeng. Svaret med åtte beskriver det eldre digitale formatet fra 2017 til 2022, ikke det nyeste.",
    },
    {
      question: "Hva koster det å svare på alle tre spørsmålene i en temablokk?",
      options: ["Rundt tjue minutter som tas fra et svar som faktisk telles.", "Ingenting, siden et ekstra svar alltid gir noe ekstra uttelling.", "Hele besvarelsen blir underkjent av formelle grunner.", "Bare det svakeste av de tre svarene blir vurdert."],
      explanation: "Riktig er at det tredje svaret ikke telles, og at tiden det tok, forsvinner fra et svar som telles. Svaret om ekstrapoeng er den antakelsen fella hviler på. De to andre tester troen på at brudd på valgregelen får formelle følger; det gjør den ikke, den koster bare tid.",
    },
    {
      question: "Omtrent hvor stor andel av oppgavene i materialet er formelle, med objektivt riktig svar?",
      options: ["Rundt 55 til 60 prosent, og andelen stiger.", "Rundt 20 prosent, og andelen synker jevnt.", "Rundt 90 prosent, siden faget er rent formelt.", "Rundt 35 til 40 prosent, resten er drøfting."],
      explanation: "Riktig er 55 til 60 prosent, med stigende tendens etter at det nyeste settet innførte predikatlogikk, modellevaluering og tre-diagram. Tallet 35 til 40 prosent tester forvekslingen med den redegjørende andelen, som er den nest største. De to øvrige tester ytterpunktene: faget er verken et rent drøftingsfag eller et rent formelt fag.",
    },
    {
      question: "Hvilket tema er prøvd i flest av de tolv settene?",
      options: ["Talehandlinger, i 10 av 12 sett.", "Tematiske roller, i 10 av 12 sett.", "Antonymi, i 10 av 12 sett.", "Presupposisjon, i 10 av 12 sett."],
      explanation: "Riktig er talehandlinger med 10 av 12. Tematiske roller er nest hyppigst med 9, mens antonymi og presupposisjon begge ligger på 8 — alle tre er topptemaer, men ingen av dem er det hyppigste. Distraktorene er valgt nettopp fordi de er de nærmeste konkurrentene.",
    },
    {
      question: "Hva er nevneren i alle frekvenspåstander i denne boka?",
      options: ["Tolv, altså antallet eksamenssett i materialet.", "Fjorten, altså alle høst- og vårsett samlet.", "Ti, altså de settene som er nyest.", "Antallet varierer med hvilket tema det gjelder."],
      explanation: "Riktig er tolv. Emnet gis bare om høsten, og materialet dekker 2011 til 2024 med unntak av 2016 og 2023. Svaret om vårsett tester troen på at emnet gis to ganger i året. Svaret om varierende nevner tester troen på at frekvenstallene er anslag; de er telte belegg.",
    },
    {
      question: "Hvor mange ganger er det publisert en sensorveiledning for emnet?",
      options: ["Én, for høsten 2022.", "Én for hvert av de tolv settene.", "Ingen — alt hviler på oppgavetekstene.", "Fire, fra de nyeste settene."],
      explanation: "Riktig er at det finnes nøyaktig én, og den er fra høsten 2022. Svaret om ingen tester en overdrivelse i motsatt retning: veiledningen finnes, og den er grunnlaget for det boka sier om sensorpraksis. De to øvrige tester antakelsen om at slike dokumenter finnes rutinemessig for hvert sett.",
    },
    {
      question: "Hvilke to årganger mangler i materialet boka er kalibrert mot?",
      options: ["2016 og 2023.", "2016 og 2020.", "2013 og 2023.", "2020 og 2024."],
      explanation: "Riktig er 2016 og 2023. Året 2020 finnes i materialet, men som utsatt prøve avholdt i januar 2021, og det er derfor det er en nærliggende feilhukommelse. Settene fra 2013 og 2024 finnes begge, og 2024 er dessuten det settet boka er tyngst kalibrert mot.",
    },
    {
      question: "Hva dekker oppgavesjangeren F2?",
      options: ["Oversettelse til predikatlogikk og evaluering mot en modell.", "Sannhetstabeller og formulering av sannhetsbetingelser.", "Klassifisering av situasjonstyper etter binære trekk.", "Tilordning av tematiske roller til leddene i en setning."],
      explanation: "Riktig er predikatlogikk og modellevaluering, som er de ferdighetene det nyeste settet innførte. Sannhetstabeller hører til F1, klassifisering av situasjonstyper til F3, og tematiske roller til F4. Alle fire er formelle sjangre, og det er nettopp derfor de er lette å forveksle.",
    },
    {
      question: "Hva kreves av et svar i sjangeren A3?",
      options: ["Eksplisitte sammenligningsakser, med begge posisjonene innenfor hver akse.", "En komplett taksonomi med ett nyskrevet eksempel per kategori det spørres om.", "Et begrunnet standpunkt i et omstridt spørsmål.", "En test kjørt på hvert enkelt tilfelle i oppgaven."],
      explanation: "Riktig er sammenligningsakser: to redegjørelser etter hverandre er ikke en sammenligning. Kravet om taksonomi og egne eksempler hører til A1, og et begrunnet standpunkt til A4. Testen på hvert enkelt tilfelle hører til A2, som er avgjør-og-begrunn-sjangeren.",
    },
    {
      question: "Hva beskriver feil 9 i bokas register?",
      options: ["Å svare på feil antall valgoppgaver.", "Å svare med bare kategorinavnet, uten begrunnelse.", "Å utelate egne eksempler der oppgaven ber om dem.", "Å blande de tre slutningstypene i en analyse."],
      explanation: "Riktig er feil antall valgoppgaver, som i praksis betyr å svare på tre eller ett spørsmål der regelen sier nøyaktig to. Kategorinavn uten begrunnelse er feil 1, manglende egne eksempler er feil 10, og sammenblandingen av slutningstyper er feil 3.",
    },
    {
      question: "Hvilken av de fire pensumbøkene er hovedreferansen for pragmatikkhalvdelen?",
      options: ["Huang, «Pragmatics».", "Saeed, «Semantics».", "Elbourne, «Meaning: A Slim Guide to Semantics».", "Zimmermann og Sternefeld, «Introduction to Semantics»."],
      explanation: "Riktig er Huang, som dekker Grice, implikatur, talehandlinger og deiksis. Saeed er grunnboka for semantikkhalvdelen, Elbourne for teoriene om mening og referanse, og Zimmermann og Sternefeld for det formelle modellapparatet. Alle fire er pensum, men bare den ene eier pragmatikken.",
    },
  ],
  'ling1100-0-2': [
    {
      question: "Hva er de tre trinnene i den formelle føringsmalen?",
      options: ["Presist svar, testen gjennomført, og et eget eksempel.", "Definisjon, taksonomi, og anvendelse på oppgavens materiale.", "Påstand, motargument, og en begrunnet konklusjon.", "Oppgavetolkning, disposisjon, og gjennomlesing til slutt."],
      explanation: "Riktig er svaret først, deretter testen kjørt på materialet, og til slutt et eget eksempel. Svaret med definisjon og taksonomi er redegjørelsesmalen, altså den andre modusen. Svaret med motargument beskriver en drøftingsstruktur, som bare gjelder de rundt fem prosentene fri drøfting.",
    },
    {
      question: "Hva betyr det at et formelt svar har «slark»?",
      options: ["At formuleringen er omtrentlig der det finnes et presist svar.", "At svaret mangler et eget eksempel til slutt.", "At kandidaten har brukt for mye tid på oppgaven.", "At svaret er faglig riktig, men skrevet i en altfor uformell stil."],
      explanation: "Riktig er omtrentlighet der presisjon er mulig, som i «sann når begge stort sett stemmer». Svaret om manglende eksempel beskriver feil 1, ikke slark. Svaret om stil tester troen på at slark er et stilproblem; i formelle svar er det en faktisk feil, fordi en omtrentlig formulering er en annen påstand enn den riktige.",
    },
    {
      question: "Hva gjør ordet «hviss» i en sannhetsbetingelse?",
      options: ["Det gjør betingelsen både nødvendig og tilstrekkelig.", "Det markerer at betingelsen bare gjelder i noen tilfeller.", "Det er en kortform for «hvis», med samme innhold.", "Det signaliserer at påstanden er en antakelse."],
      explanation: "Riktig er at «hviss» dekker begge retningene og dermed alle tilfellene. Svaret om at det er det samme som «hvis», tester nettopp fella: «hvis» gir bare den tilstrekkelige retningen og sier ingenting om de øvrige tilfellene. De to andre tester troen på at ordet svekker påstanden; det gjør det motsatte.",
    },
    {
      question: "Hva er de fem trinnene i redegjørelsesmalen?",
      options: ["Definisjon, taksonomi, anvendelse, egne eksempler, mekanisme.", "Definisjon, test, klassifisering, kontroll, eget eksempel.", "Innledning, hoveddel, motargument, drøfting, konklusjon.", "Oppgavetolkning, tidsplan, kladd, renskrift og sluttgjennomlesing."],
      explanation: "Riktig rekkefølge starter med definisjonen og ender med mekanismen forklart. Svaret med test og klassifisering er den formelle modusen. De to øvrige beskriver en generisk essaystruktur og en arbeidsprosess, og ingen av dem er fagets egen svarform.",
    },
    {
      question: "Hva menes med kravet om egne eksempler?",
      options: ["Eksempler du lager selv, i tillegg til dem oppgaven gir deg.", "Eksempler hentet fra pensumboka, gjengitt presist.", "Eksempler fra egen erfaring som student i emnet.", "Eksempler som allerede er analysert i forelesningene."],
      explanation: "Riktig er nyskrevne eksempler. Svaret om pensumboka tester den vanligste misforståelsen: å gjenta lærebokas eksempler er ikke å gi egne. Svaret om egen studieerfaring tester en annen felle — eksemplene skal være verdens-caser, ikke metaeksempler om studiesituasjonen.",
    },
    {
      question: "Hva skiller det å forklare en mekanisme fra det å gjenfortelle den?",
      options: ["Forklaringen kan brukes til å avgjøre et nytt tilfelle.", "Forklaringen er lengre og inneholder flere fagtermer enn gjenfortellingen.", "Forklaringen nevner alltid teoretikeren som står bak begrepet.", "Forklaringen unngår engelske termer til fordel for norske."],
      explanation: "Riktig er at en forklart mekanisme lar deg håndtere tilfeller du ikke har sett før, mens en gjenfortelling bare gjenkjenner kjente. Svaret om lengde tester troen på at mer tekst er mer dybde. De to øvrige nevner ting som kan være til stede i begge, og som derfor ikke skiller dem.",
    },
    {
      question: "Hva er en momentliste i denne boka?",
      options: ["En fasit i tre deler: må-punkter, pluss-punkter og feller.", "En liste over alle begrepene som er innført i kapitlet.", "En oversikt over hvor mange minutter hver deloppgave tar.", "En rangert liste over hvilke temaer som er hyppigst prøvd."],
      explanation: "Riktig er tredelingen må, pluss og feller, som er formen fasitene har der det ikke finnes ett riktig svar. Svaret om begrepslista tester forvekslingen med term- og symbollistene. De to øvrige beskriver tidsbudsjettet og frekvenstabellen, som er andre verktøy i boka.",
    },
    {
      question: "Hva krever instruksjonsverbet «begrunn»?",
      options: ["At resonnementet skrives ut, ikke bare konklusjonen.", "At du oppgir hvilken pensumbok påstanden kommer fra.", "At du sammenligner med en konkurrerende analyse.", "At du gir minst to eksempler på det samme forholdet."],
      explanation: "Riktig er at selve resonnementet skal stå på arket. Verbet er det hyppigste i hele materialet og ser ut som en høflighetsfrase, men et svar uten begrunnelse er ufullstendig selv om kategorien er riktig. Svaret om pensumbok tester troen på at begrunnelse betyr kildehenvisning, og svaret om sammenligning forveksler med sjangeren A3.",
    },
    {
      question: "Hvor mye skrivetid regner boka med per besvarelse på eksamen?",
      options: ["Rundt tjue minutter.", "Rundt tjuefire minutter.", "Rundt tretti minutter.", "Rundt førtifem minutter."],
      explanation: "Riktig er rundt tjue minutter skrivetid: 240 minutter minus 20 til settlesing og valg og 20 til gjennomlesing, fordelt på ti besvarelser. Svaret med tjuefire tester regnestykket der man deler 240 på ti uten å trekke fra. De to øvrige forutsetter langt færre besvarelser enn formatet gir.",
    },
    {
      question: "Hva sier den ene sensorveiledningen som finnes om egne eksempler?",
      options: ["De er obligatoriske der oppgaven ber om dem.", "De er et pluss, men ikke et krav i noen oppgavetype.", "De bør hentes fra pensum for å sikre riktighet.", "De kreves bare i de formelle oppgavetypene."],
      explanation: "Riktig er at de er obligatoriske der de etterspørres, og at et svar uten dem er ufullstendig. Svaret om at de bare er et pluss, tester nettopp den undervurderingen som gir feil 10. Svaret om at kravet gjelder de formelle oppgavene, snur det på hodet: kravet er tyngst i de redegjørende.",
    },
    {
      question: "Hvorfor er forveksling av parvise begreper så farlig?",
      options: ["Fordi den ikke føles som en feil mens du skriver.", "Fordi den alltid fører til at hele oppgaven underkjennes.", "Fordi den bare rammer de aller vanskeligste begrepene.", "Fordi den er lett å oppdage ved gjennomlesing til slutt."],
      explanation: "Riktig er at teksten flyter og terminologien er riktig, mens innholdet er snudd — derfor oppdages feilen sjelden av kandidaten selv. Svaret om at den er lett å oppdage, er nettopp det motsatte av poenget. De to øvrige overdriver følgen og undervurderer omfanget: paret kan være helt elementært.",
    },
    {
      question: "Hva er minimumsformen som gjør et kategorinavn til et svar?",
      options: ["Kategorien, testen kjørt på materialet, og resultatet av testen.", "Kategorien, den engelske termen, og en henvisning til pensum.", "Kategorien og en kort begrunnelse for hvorfor den er interessant.", "Kategorien gjentatt i konklusjonen til slutt i besvarelsen."],
      explanation: "Riktig er kategori, test og resultat — tre linjer. Svaret med engelsk term og pensumhenvisning tester troen på at fagspråk erstatter begrunnelse. De to øvrige legger til noe som ikke er etterspurt, og lar den avgjørende delen — testen — fortsatt stå ubesvart.",
    },
    {
      question: "Hva er den vanligste måten å svare i feil modus på?",
      options: ["Å levere en punktliste med kategorinavn på en redegjørende oppgave.", "Å levere en fullstendig sannhetstabell på en oppgave om Grices maksimer.", "Å skrive på engelsk der oppgaven er stilt på norsk.", "Å bruke flere eksempler enn oppgaven ber om."],
      explanation: "Riktig er punktlista på en redegjørende oppgave: alt er riktig, og svaret er likevel ufullstendig, fordi taksonomien er der uten mekanisme og egne eksempler. Svaret om sannhetstabellen er en langt sjeldnere og mer åpenbar bom. De to øvrige er ikke modusfeil i det hele tatt.",
    },
    {
      question: "Hvilket spørsmål avgjør hvilken modus en oppgave krever?",
      options: ["Om to dyktige kandidater kan svare ulikt og begge ha rett.", "Om oppgaven inneholder et logisk symbol eller en formel i teksten.", "Om temaet i oppgaven hører til semantikk eller til pragmatikk.", "Om oppgaven er formulert på norsk eller på engelsk."],
      explanation: "Riktig er å spørre om flere svar kan være forsvarlige: kan de det, er oppgaven redegjørende. Svaret om semantikk og pragmatikk tester en nyttig, men upålitelig tommelfingerregel — også semantikkdelen har redegjørende oppgaver. De to øvrige handler om form, ikke om hva slags svar som kreves.",
    },
  ],
  'ling1100-1-1': [
    {
      question: "Hva studerer semantikk?",
      options: ["Konvensjonell, kontekstuavhengig betydning i språksystemet.", "Hva en taler ville oppnå med en bestemt ytring.", "Hvordan språkbruken varierer mellom ulike sosiale grupper i et samfunn.", "Hvordan lydene i et språk er organisert i et system av fonemer."],
      explanation: "Riktig er den konvensjonelle betydningen som ligger i språket selv. Svaret om talerens hensikt beskriver pragmatikk, som er nabofeltet og den vanligste forvekslingen. De to øvrige beskriver sosiolingvistikk og fonologi, som ikke er pensum i dette emnet.",
    },
    {
      question: "Hva er en setning i teknisk forstand?",
      options: ["En abstrakt grammatisk enhet, en velformet ordrekke.", "En konkret framføring av ord i en bestemt situasjon.", "Det innholdet som er sant eller usant om verden.", "En ordrekke som er ytret av minst én taler."],
      explanation: "Riktig er den abstrakte enheten, som finnes uavhengig av om noen sier den. Svaret om konkret framføring beskriver ytringen, og svaret om sant innhold beskriver proposisjonen. Det siste svaret tester troen på at en setning må ha vært brukt for å eksistere; det må den ikke.",
    },
    {
      question: "Hva er det som har sannhetsverdi?",
      options: ["Proposisjonen.", "Den enkelte setningen.", "Selve ordrekka.", "Ytringen, i kraft av å være en hendelse."],
      explanation: "Riktig er proposisjonen, altså det innholdet som påstås om verden. Setningen «Jeg er hjemme» er verken sann eller usann i seg selv, og ordrekka er bare en annen måte å si setning på. Ytringen er en hendelse, og hendelser er verken sanne eller usanne — det er innholdet de uttrykker som er det.",
    },
    {
      question: "Tre personer sier hver sin gang «Døra er låst». Hvor mange ytringer foreligger?",
      options: ["Tre, siden hver framføring er en egen hendelse.", "Én, siden ordrekka er den samme.", "To, siden to av dem sier det samme.", "Det avhenger av om de mener samme dør."],
      explanation: "Riktig er tre: ytringen er en hendelse, og tre framføringer er tre hendelser. Svaret med én tester forvekslingen med setningen, som er én. Svaret om hvilken dør de mener, gjelder antallet proposisjoner og ikke antallet ytringer — det er nettopp fordi de tre spørsmålene gir ulike tall at nivåene må skilles.",
    },
    {
      question: "Hva er skillet mellom type og forekomst?",
      options: ["Typen er et abstrakt mønster, forekomsten en konkret realisering.", "Typen er den skriftlige formen, mens forekomsten er den muntlige uttalen.", "Typen er ordklassen, mens forekomsten er det enkelte ordet i teksten.", "Typen er betydningen, forekomsten er referenten."],
      explanation: "Riktig er mønster mot realisering: rekka «hus hus hus» har ett ord om du teller typer og tre om du teller forekomster. Svaret om skrift og tale tester en nærliggende, men gal forestilling om at skillet gjelder medium. De to øvrige forveksler skillet med grammatiske og semantiske kategorier.",
    },
    {
      question: "Hva kjennetegner et indeksikalsk uttrykk?",
      options: ["Det har en fast regel for å finne referenten, men ingen fast referent.", "Det har én og samme faste referent uansett hvem som bruker det, og når.", "Det har flere betydninger som er historisk urelaterte, slik ordet *ball* har.", "Det kan ikke brukes til å peke ut noe i verden."],
      explanation: "Riktig er regelen uten fast referent: regelen for *jeg* er «den som ytrer dette», og den er lik for alle. Svaret om fast referent beskriver egennavn, som er motstykket. Svaret om urelaterte betydninger beskriver homonymi, og det siste beskriver uttrykk uten referanse.",
    },
    {
      question: "Hvilken mekanisme gjør «Han satt på banken» flertydig?",
      options: ["Leksikalsk flertydighet.", "Strukturell flertydighet.", "Indeksikalitet.", "Semantisk ekvivalens."],
      explanation: "Riktig er leksikalsk flertydighet: ordet *bank* bærer to betydninger. Strukturell flertydighet ville krevd at ordrekka tåler to grammatiske analyser, og det gjør den ikke her. Indeksikalitet gjelder uttrykk som får referent fra situasjonen, og ekvivalens er forholdet mellom to setninger som sier det samme.",
    },
    {
      question: "Hvilken mekanisme gjør «Hun så mannen med kikkerten» flertydig?",
      options: ["Strukturell flertydighet.", "Leksikalsk flertydighet.", "Indeksikalitet.", "Språklig underbestemthet alene."],
      explanation: "Riktig er strukturell flertydighet: leddet *med kikkerten* kan høre til to steder, uten at noe ord er flertydig. Svaret om leksikalsk flertydighet tester nettopp den forvekslingen. Underbestemthet er overbegrepet som dekker alle tre mekanismene, og er derfor for grovt som svar på hva som skjer her.",
    },
    {
      question: "Hva er språklig underbestemthet?",
      options: ["At setningen alene ikke fastlegger den fullstendige proposisjonen.", "At en setning er grammatisk ufullstendig fordi den mangler et påkrevd ledd.", "At taleren uttrykker seg uklart og derfor burde ha omformulert ytringen.", "At et ord mangler en presis definisjon i ordboka."],
      explanation: "Riktig er at det språket koder, er mindre enn det som kommuniseres — og det er begrunnelsen for at pragmatikken finnes som eget felt. Svaret om grammatisk ufullstendighet tester forvekslingen med et syntaktisk problem. De to øvrige gjør fenomenet til en svakhet hos taleren eller ordboka, mens det er en systematisk egenskap ved språk.",
    },
    {
      question: "Når er to setninger semantisk ekvivalente?",
      options: ["Når de har samme sannhetsverdi i enhver tenkelig situasjon.", "Når de har samme sannhetsverdi i den aktuelle situasjonen.", "Når de inneholder de samme ordene i ulik rekkefølge.", "Når de kan ytres av samme taler uten motsigelse."],
      explanation: "Riktig er kravet om alle situasjoner. Svaret om den aktuelle situasjonen tester nettopp fella: to setninger kan tilfeldigvis begge være sanne akkurat nå uten å bety det samme. De to øvrige gjør ekvivalens til et spørsmål om ordvalg eller om hva én taler kan si, og ingen av delene er nok.",
    },
    {
      question: "Hva markerer stjerna foran en ordrekke?",
      options: ["At grammatikken ikke genererer strengen.", "At setningen er upassende i situasjonen.", "At språkbrukeren har uttrykt seg dårlig.", "At betydningen er uklar eller flertydig."],
      explanation: "Riktig er at strengen ikke genereres av grammatikken i den varieteten man beskriver. Svaret om upassende bruk beskriver firkanttegnet, som er den nærliggende forvekslingen. Svaret om at språkbrukeren har uttrykt seg dårlig, er utelukket av at lingvistikken beskriver og ikke rangerer — markøren er en påstand om et system, ikke om et menneske.",
    },
    {
      question: "Hva markerer firkanttegnet foran en setning?",
      options: ["At setningen er velformet, men semantisk eller pragmatisk avvikende.", "At setningen ikke genereres av grammatikken.", "At setningen er hentet fra et annet språk og derfor er glossert i teksten.", "At setningen er en overskrift i teksten og ikke et nummerert eksempel."],
      explanation: "Riktig er at grammatikken bygger setningen helt fint, men at noe annet skurrer, som i «Steinen ble redd». Svaret om at grammatikken svikter, beskriver stjerna. De to øvrige tester forvekslingen med tegnets bruk i andre sammenhenger, blant annet som overskriftsmarkør i markdown.",
    },
    {
      question: "Hvilke setninger uttrykker proposisjoner i vanlig forstand?",
      options: ["De deklarative, altså påstandssetningene.", "De interrogative, altså spørresetningene.", "De imperative, altså bydesetningene.", "Alle setningstyper, uten forskjell."],
      explanation: "Riktig er de deklarative, og det er derfor det er dem sannhetsbetingelser gjelder for. «Lukk døra» er verken sann eller usann, og det samme gjelder «Er døra lukket?». Det siste svaret tester troen på at alle setninger kan tilskrives sannhetsverdi; spørsmål og påbud analyseres i stedet som handlinger.",
    },
    {
      question: "Hva betyr det at lingvistikk er deskriptiv?",
      options: ["Den beskriver hvordan språk faktisk er, og rangerer ikke.", "Den beskriver bare skriftspråk og ikke talespråk.", "Den beskriver reglene alle bør følge for å skrive korrekt.", "Den beskriver språkets historie framfor dagens system."],
      explanation: "Riktig er at faget beskriver uten å rangere: ingen varietet er dårligere enn en annen. Svaret om regler man bør følge beskriver den foreskrivende holdningen, som er motstykket. De to øvrige forveksler deskriptiv med en avgrensning til skrift eller til språkhistorie.",
    },
    {
      question: "Hva er talermening?",
      options: ["Det taleren ville kommunisere med en bestemt ytring.", "Det setningen betyr i kraft av språkets konvensjoner.", "Den betydningen som står oppført i en ordbok over språket.", "Den betydningen alle talere av språket legger i uttrykket."],
      explanation: "Riktig er det taleren ville oppnå i den enkelte situasjonen. De tre øvrige beskriver alle setningsbetydningen fra hver sin vinkel, og de er derfor nære: setningsbetydningen er én og felles, mens talermeningene er mange og situasjonsbestemte.",
    },
    {
      question: "Hva inngår i ytringskonteksten i teknisk forstand?",
      options: ["Taler, mottaker, sted og tidspunkt for ytringen.", "Alt partene vet om hverandre og om saken.", "Stemningen og forholdet mellom samtalepartnerne.", "Den kulturelle bakgrunnen ytringen springer ut av."],
      explanation: "Riktig er de koordinatene språket trenger for å feste innholdet. De tre øvrige beskriver den vide, dagligdagse forstanden av kontekst — den er også relevant i faget, men hører til pragmatikkhalvdelen og ikke til det som avgjør hvilken proposisjon som uttrykkes.",
    },
    {
      question: "Hva er en parafrase brukt til i dette faget?",
      options: ["Å vise hvilken lesning av en flertydig setning du mener.", "Å gjøre en vanskelig formulert setning enklere for leseren.", "Å oversette en setning til et annet språk.", "Å forkorte en lang setning uten å miste innhold."],
      explanation: "Riktig er å gjøre en bestemt lesning eksplisitt, og regelen er at parafrasen fjerner flertydigheten uten å legge til innhold. De tre øvrige beskriver dagligdagse bruksmåter av ordet, og ingen av dem er den tekniske funksjonen parafrasen har i en semantisk analyse.",
    },
    {
      question: "Hvorfor kan én setning uttrykke ulike proposisjoner?",
      options: ["Fordi setningen er underbestemt og situasjonen fyller den ut.", "Fordi den enkelte taleren alltid legger sin egen mening i ordene.", "Fordi ordbøker gir flere alternative definisjoner.", "Fordi setninger endrer betydning over tid."],
      explanation: "Riktig er underbestemtheten, som virker gjennom indeksikalitet, leksikalsk flertydighet og strukturell flertydighet. Svaret om at talere legger sin egen mening i ordene, tester en subjektivistisk misforståelse: mekanismene er systematiske og ligger i språket. De to øvrige forveksler med ordboksarbeid og med språkendring over tid.",
    },
  ],
  'ling1100-1-2': [
    {
      question: "Hva hevder den referensielle teorien om mening?",
      options: ["At betydning er et forhold mellom uttrykk og ting i verden.", "At betydning er en mental representasjon hos språkbrukeren.", "At betydning er den bruken et ord har i et samfunn.", "At betydning er den følelsen et ord vekker hos den enkelte."],
      explanation: "Riktig er forholdet mellom språk og verden. Svaret om mental representasjon er den konkurrerende posisjonen, og det er nettopp det paret oppgaven i denne sjangeren ber om. De to øvrige er posisjoner som ikke stilles opp mot hverandre i dette emnet, og det siste gjør betydning til noe rent privat.",
    },
    {
      question: "Hva er ekstensjonen til et uttrykk?",
      options: ["Mengden av ting uttrykket gjelder for.", "Betingelsen som avgjør hvilke ting det gjelder for.", "Den mentale forestillingen knyttet til uttrykket.", "Måten uttrykket gir referenten sin på."],
      explanation: "Riktig er mengden. Betingelsen som avgjør mengden, er intensjonen, og det er den nærmeste forvekslingen — merk at ekstensjonen kan endre seg med verden mens intensjonen står fast. Måten referenten gis på, er sense, og den mentale forestillingen hører til den representasjonelle posisjonen.",
    },
    {
      question: "Hva er intensjonen til et uttrykk?",
      options: ["Betingelsen som avgjør hva ekstensjonen blir.", "Hensikten taleren har med å bruke nettopp dette uttrykket.", "Mengden av ting uttrykket faktisk gjelder for.", "Den historiske opprinnelsen til uttrykket i språket."],
      explanation: "Riktig er betingelsen, oppskriften på å finne ut hva som hører med. Svaret om hensikt tester forvekslingen med det likelydende dagligordet, og det er en unødvendig kilde til uklarhet i besvarelser. Mengden er ekstensjonen, og opprinnelsen er etymologi.",
    },
    {
      question: "Hva er sense hos Frege?",
      options: ["Presentasjonsmåten, altså måten uttrykket gir referenten på.", "Referenten selv, altså den tingen uttrykket står for.", "Den private forestillingen den enkelte knytter til ordet.", "Den følelsen ordet vekker i en bestemt kultur."],
      explanation: "Riktig er presentasjonsmåten, og den er offentlig og felles. Svaret om referenten er reference, som er den andre halvdelen av paret. Svaret om privat forestilling er den vanligste feiltolkningen: var sense privat, kunne vi ikke uttrykke den samme tanken.",
    },
    {
      question: "I hvilken retning virker forholdet mellom sense og reference?",
      options: ["Sense bestemmer reference.", "Reference bestemmer sense.", "De bestemmer hverandre gjensidig.", "De er uavhengige av hverandre."],
      explanation: "Riktig er at sense bestemmer reference, gitt hvordan verden er. Den motsatte retningen ville betydd at det bare finnes én måte å gi en ting på, og da står identitetspuslespillet uløst igjen. Gjensidig eller uavhengig bestemmelse ville hatt samme følge.",
    },
    {
      question: "Hva er identitetspuslespillet?",
      options: ["At to identitetsutsagn med samme referent kan ha ulik informasjonsverdi.", "At et uttrykk kan ha betydning uten å ha noen referent.", "At én og samme setning kan være sann for den ene taleren og usann for den andre.", "At to personer kan bruke samme ord med ulikt innhold."],
      explanation: "Riktig er forskjellen mellom det trivielle og det informative identitetsutsagnet, som er argumentet for at referanse ikke er hele historien. Svaret om betydning uten referent er problemet med tomme uttrykk, som er et annet argument. De to øvrige beskriver indeksikalitet og kommunikasjonsinnvendingen.",
    },
    {
      question: "Hva er en opak kontekst?",
      options: ["En kontekst der bytte av koreferensielle uttrykk kan endre sannhetsverdien.", "En kontekst der uttrykket mangler en referent i verden.", "En kontekst der setningen er grammatisk flertydig.", "En kontekst der taleren ikke er identifisert."],
      explanation: "Riktig er svikten i substitusjon, typisk i setninger om hva noen tror, vet eller mistenker. Svaret om manglende referent beskriver tomme uttrykk, som er et annet fenomen. De to øvrige forveksler opasitet med flertydighet og med ukjent taler, og ingen av delene rører substitusjonsprinsippet.",
    },
    {
      question: "Hva sier substitusjonsprinsippet?",
      options: ["At bytte av uttrykk med samme referent bevarer sannhetsverdien.", "At to synonymer alltid kan byttes ut i enhver setning.", "At et uttrykk kan erstattes av sin egen definisjon.", "At en setning kan omskrives uten å endre betydning."],
      explanation: "Riktig er kravet om at koreferensielle uttrykk skal kunne byttes uten at sannhetsverdien endrer seg — og at dette svikter i opake kontekster. Svaret om synonymer tester forvekslingen mellom koreferanse og synonymi. De to øvrige beskriver definisjonsutskifting og parafrase.",
    },
    {
      question: "Hva er koreferanse?",
      options: ["At to ulike uttrykk viser til samme referent.", "At to uttrykk har samme betydning i alle sammenhenger.", "At et uttrykk viser til noe nevnt tidligere i teksten.", "At to talere mener det samme med et uttrykk."],
      explanation: "Riktig er at uttrykkene peker på samme ting, uten at de dermed betyr det samme. Svaret om samme betydning i alle sammenhenger beskriver synonymi, og koreferanse uten synonymi er det normale. Svaret om noe nevnt tidligere beskriver anafor, som er ett bestemt tilfelle av koreferanse.",
    },
    {
      question: "Hvorfor er tomme uttrykk et problem for en ren referensiell teori?",
      options: ["Fordi de har betydning uten å ha noen referent.", "Fordi de kan tolkes på flere måter i én og samme setning.", "Fordi de bare forekommer i skjønnlitteratur.", "Fordi de mangler en presis definisjon i ordboka."],
      explanation: "Riktig er at et uttrykk som *enhjørning* er fullt forståelig uten at noe svarer til det, mens teorien knytter betydning til referanse. Freges svar er at uttrykket har sense uten reference. De tre øvrige tester troen på at problemet gjelder flertydighet, fiksjonssjangeren eller leksikografi.",
    },
    {
      question: "Hva går læringsargumentet ut på?",
      options: ["At barn lærer ord uten tilgang til noe forhold mellom ord og verden.", "At voksne lærer nye ord raskere enn barn gjør.", "At ord med referent læres tidligere enn ord uten.", "At språklæring krever formell undervisning i grammatikk."],
      explanation: "Riktig er at barnet bare har tilgang til situasjoner, andres bruk og egne begreper, og at ord som *nesten* og *hvis* læres uten at noe kan pekes på. Den referensielle teoretikeren svarer at dette gjelder tilegnelse og ikke hva betydning er. De tre øvrige er påstander som verken støtter eller rammer noen av posisjonene.",
    },
    {
      question: "Hva er kommunikasjonsinnvendingen mot den representasjonelle teorien?",
      options: ["At felles betydning blir vanskelig når betydningen er individuell.", "At mentale representasjoner ikke kan undersøkes vitenskapelig.", "At teorien ikke kan forklare uttrykk uten referent.", "At teorien gjør språklæring vanskeligere å forklare."],
      explanation: "Riktig er problemet med at vi må mene det samme for å være uenige om noe. Svaret om uttrykk uten referent snur innvendingen: det er nettopp der posisjonen er sterk. Det samme gjelder språklæring. Svaret om vitenskapelig undersøkelse er en metodeinnvending som ikke berører selve teorien om betydning.",
    },
    {
      question: "Hva er objektivitetsargumentet et argument for?",
      options: ["Den referensielle teorien.", "Den representasjonelle teorien.", "Freges skille mellom sense og reference.", "Skillet mellom setning og ytring."],
      explanation: "Riktig er at det taler for den referensielle posisjonen: betydning må være felles for at uenighet skal være ekte. Legg merke til at det samme argumentet dukker opp som kommunikasjonsinnvendingen mot motparten — det som taler for den ene, er ofte innvendingen mot den andre. De to øvrige er begreper argumentet ikke er rettet mot.",
    },
    {
      question: "Hva sier sannhetsbetingelsessemantikken at det er å kunne en setnings betydning?",
      options: ["Å vite hva som må være tilfelle for at den skal være sann.", "Å vite om den faktisk er sann eller usann.", "Å kunne oversette den til et annet språk.", "Å kjenne den konvensjonelle betydningen til hvert ord."],
      explanation: "Riktig er at man kan betingelsen, ikke svaret. Svaret om å vite om den er sann, tester nettopp den vanligste misforståelsen: du forstår «Det snør i Tromsø» uten å vite om det stemmer. De to øvrige gjør forståelse til oversettelse eller til ren ordkunnskap, og ingen av delene fanger setningsnivået.",
    },
    {
      question: "Hva er den semantiske verdien til et uttrykk?",
      options: ["Det en semantisk teori tilordner uttrykket som dets bidrag.", "Hvor viktig uttrykket er for helheten i den setningen det står i.", "Hvor hyppig uttrykket forekommer i et språk.", "Den positive eller negative ladningen uttrykket har."],
      explanation: "Riktig er det teorien tilordner, og de to posisjonene fyller begrepet med ulikt innhold: en ting eller en mengde hos den ene, en representasjon hos den andre. De tre øvrige forveksler termen med viktighet, frekvens og konnotasjon, som ingen av dem er tekniske begreper her.",
    },
    {
      question: "Hvilken pensumbok er hovedreferansen for teoriene om mening?",
      options: ["Elbourne, «Meaning: A Slim Guide to Semantics».", "Saeed, «Semantics», som er innføringsboka i semantikk.", "Huang, «Pragmatics», pensumboka i pragmatikk.", "Zimmermann og Sternefeld, «Introduction to Semantics»."],
      explanation: "Riktig er Elbourne, som stiller de to hovedposisjonene opp mot hverandre, og hvis inntreden i pensum forklarer at temaet er stigende. Saeed dekker mening og referanse mer oversiktlig, Zimmermann og Sternefeld det formelle apparatet, og Huang pragmatikken.",
    },
    {
      question: "Hva er problemet med å bygge en sammenligning som to redegjørelser etter hverandre?",
      options: ["Sammenligningen blir aldri gjort på arket.", "Svaret blir for langt til å rekkes innenfor tiden.", "Posisjonene blir framstilt i feil rekkefølge.", "Leseren får for lite informasjon om hver posisjon."],
      explanation: "Riktig er at leseren selv må finne ut hvor posisjonene berører hverandre, og instruksjonsverbet «sammenlign» ber om mer enn to redegjørelser i samme besvarelse. Svaret om for lite informasjon er nettopp motsatt: informasjonen er der, men den er ubehandlet. De to øvrige gjelder form og lengde, ikke sjangerkravet.",
    },
    {
      question: "Hva tar Freges løsning fra hver av de to posisjonene?",
      options: ["Et nivå ut over referansen, men holdt offentlig og felles.", "En privat representasjon, men knyttet til en referent.", "En referent, men uten noen betydning i tillegg.", "En bruksbasert betydning, men uten mentale innslag."],
      explanation: "Riktig er at sense gir betydningen noe mer enn en peker mot verden, samtidig som den er felles og ikke individuell. Svaret om privat representasjon er nettopp det sense ikke er, og det er den forvekslingen som koster mest i denne oppgavetypen. De to øvrige beskriver posisjoner Frege ikke inntar.",
    },
  ],
  'ling1100-1-3': [
    {
      question: "Hva kjennetegner konstant referanse?",
      options: ["Uttrykket peker på det samme ved hver bruk.", "Uttrykket peker på ulike ting i ulike situasjoner.", "Uttrykket brukes ikke til å peke ut noe i det hele tatt.", "Uttrykket peker på en hel gruppe under ett."],
      explanation: "Riktig er at referenten ikke skifter når taler, sted og tidspunkt byttes ut, slik som for egennavn. Svaret om ulike ting beskriver variabel referanse. De to øvrige beskriver de to hovedgrunnene til at et uttrykk ikke refererer: predikativ bruk og kvantifisering.",
    },
    {
      question: "Hvilken referansetype har *naboen* i «Naboen ringte i går»?",
      options: ["Variabel referanse.", "Konstant referanse, siden uttrykket står i bestemt form.", "Ingen referanse, siden uttrykket beskriver en rolle.", "Konstant referanse, siden det bare finnes én nabo."],
      explanation: "Riktig er variabel: hvem naboen er, avhenger av hvem som snakker. De to svarene om konstant referanse tester den vanligste fella i denne oppgavetypen — at bestemt form skulle bety fast referent. Bestemt form sier bare at taleren regner med at mottakeren vet hvem det gjelder.",
    },
    {
      question: "Hvorfor har *ingen av gjestene* ingen referanse?",
      options: ["Fordi uttrykket kvantifiserer i stedet for å peke ut noen.", "Fordi det ikke finnes noen gjester i den aktuelle situasjonen.", "Fordi uttrykket står i ubestemt form uten noen artikkel foran.", "Fordi uttrykket tilskriver noen en egenskap."],
      explanation: "Riktig er at uttrykket sier noe om en gruppe under ett, ikke om en enkeltperson. Svaret om at det ikke finnes gjester, beskriver den andre grunnen til manglende referanse, nemlig tomhet — og de to grunnene skal holdes fra hverandre i svaret. Svaret om egenskapstilskriving beskriver predikativ bruk.",
    },
    {
      question: "Hvorfor har *tolk* ingen referanse i «Kari er tolk»?",
      options: ["Fordi uttrykket står predikativt og tilskriver en egenskap.", "Fordi uttrykket kvantifiserer over en gruppe.", "Fordi det ikke finnes noen bestemt tolk i den aktuelle situasjonen.", "Fordi uttrykket står i ubestemt form uten artikkel."],
      explanation: "Riktig er predikativ bruk: setningen handler om én person, ikke to. Svaret om kvantifisering beskriver en annen av de fire grunnene. Svaret om ubestemt form tester troen på at formen avgjør; det er posisjonen etter koblingsverbet som gjør jobben.",
    },
    {
      question: "Hva kjennetegner generisk bruk av en nominalfrase?",
      options: ["Uttrykket sier noe om en type i sin alminnelighet.", "Uttrykket peker på ett bestemt eksemplar av typen det gjelder.", "Uttrykket brukes bare i vitenskapelige og faglige tekster.", "Uttrykket står alltid i flertallsform og aldri i entall."],
      explanation: "Riktig er utsagn om arten, som i «Reven er et rovdyr». Testen er at spørsmålet «hvilken?» ikke har noe svar, samtidig som setningen er meningsfull. Svaret om bestemt eksemplar er nettopp motstykket, og de to øvrige knytter fenomenet til sjanger og tall, som ikke avgjør noe.",
    },
    {
      question: "Hva er en bestemt beskrivelse?",
      options: ["En nominalfrase som peker ut ved å beskrive, og forutsetter én ting.", "En nominalfrase som innfører noe nytt for mottakeren.", "Et navn som fester seg til én bestemt ting uten å beskrive den på noen måte.", "Et uttrykk som viser til noe nevnt tidligere i teksten."],
      explanation: "Riktig er kombinasjonen av å beskrive og å kreve entydighet. Svaret om å innføre noe nytt beskriver den ubestemte nominalfrasen, som er motstykket. Svaret om et navn uten beskrivelse er egennavn, og det siste er anafor.",
    },
    {
      question: "Hva er de tre betingelsene i Russells analyse?",
      options: ["Eksistens, entydighet og predikasjon.", "Eksistens, presupposisjon og negasjon.", "Referanse, sense og sannhetsverdi.", "Entydighet, koreferanse og substitusjon."],
      explanation: "Riktig er at det finnes minst én, høyst én, og at den har egenskapen. Svaret med presupposisjon blander inn Strawsons begrep, som er den konkurrerende analysen. De to øvrige er begreper fra teoriene om mening, og de hører ikke til denne analysen.",
    },
    {
      question: "Hva sier Russells analyse om «Den nåværende kongen av Frankrike er skallet»?",
      options: ["Setningen er usann.", "Setningen er verken sann eller usann.", "Setningen er meningsløs.", "Setningen er sann, siden ingenting motsier den."],
      explanation: "Riktig er usann: de tre betingelsene er bundet sammen med «og», og ett usant ledd gjør hele konjunksjonen usann. Svaret om verken sann eller usann er Strawsons, og det er den forvekslingen som koster mest her. Svaret om meningsløshet er nettopp det Russells analyse er laget for å unngå.",
    },
    {
      question: "Hva sier Strawsons analyse om den samme setningen?",
      options: ["Setningen er verken sann eller usann.", "Setningen er usann, siden eksistensen svikter.", "Setningen er meningsløs og bør avvises.", "Setningen er sann i en tenkt verden."],
      explanation: "Riktig er sannhetsverdigapet: eksistensen er forutsatt og ikke hevdet, og når forutsetningen svikter, kommer spørsmålet om sannhet aldri i gang. Svaret om usann er Russells. Merk at Strawson ikke sier at setningen er meningsløs — den har full betydning, den brukes bare på en forutsetning som ikke holder.",
    },
    {
      question: "Hva er et sannhetsverdigap?",
      options: ["At en ytring verken er sann eller usann.", "At to talere er uenige om sannhetsverdien.", "At sannhetsverdien er ukjent, men finnes.", "At setningen er sann i noen situasjoner og usann i andre."],
      explanation: "Riktig er fraværet av sannhetsverdi, ikke bare mangel på kunnskap om den. Svaret om ukjent verdi tester nettopp den forvekslingen: en verdi som finnes uten at vi kjenner den, er ikke et gap. De to øvrige beskriver uenighet og situasjonsavhengighet, som er andre fenomener.",
    },
    {
      question: "Hva skjer med Strawsons forutsetning når setningen negeres?",
      options: ["Den overlever, og det er kjennetegnet på en presupposisjon.", "Den forsvinner, slik logisk implikasjon gjør.", "Den snus til sin motsetning.", "Den blir hevdet i stedet for forutsatt."],
      explanation: "Riktig er at forutsetningen består gjennom negasjonen — nettopp derfor kalles den en presupposisjon, og det er den testen som bygges ut i kapitlet om presupposisjon. Svaret om at den forsvinner, beskriver logisk implikasjon, som er nabofenomenet. De to øvrige beskriver operasjoner som ikke skjer.",
    },
    {
      question: "Hvorfor får Russell to lesninger av den negerte setningen?",
      options: ["Fordi negasjonen kan ramme bare siste ledd eller hele påstanden.", "Fordi setningen inneholder et flertydig ord.", "Fordi den bestemte beskrivelsen kan vise til flere ulike ting samtidig.", "Fordi negasjonen kan plasseres to steder i ordrekka."],
      explanation: "Riktig er at de tre leddene er skilt ut, slik at negasjonen kan gjelde ulike deler av den sammensatte påstanden. Dette er et tidlig eksempel på virkefelt. Svaret om et flertydig ord tester forvekslingen med leksikalsk flertydighet, som ikke er i sving her.",
    },
    {
      question: "Hva skiller et anaforisk uttrykk fra et deiktisk?",
      options: ["Anaforen henter referenten fra teksten, deiksis fra situasjonen.", "Anaforen har konstant referanse, mens deiktiske uttrykk har variabel.", "Anaforen står alltid først i setningen.", "Anaforen brukes bare i skriftlig framstilling."],
      explanation: "Riktig er hvor referenten hentes fra. Begge har variabel referanse, og svaret om konstant referanse tester nettopp den fella — det er kilden til referenten som skiller dem, ikke om den varierer. De to øvrige knytter skillet til plassering og medium, som ikke avgjør noe.",
    },
    {
      question: "Hvordan bør et fiksjonsnavn klassifiseres på eksamen?",
      options: ["Som uten referanse, med en merknad om at det oppfører seg som et egennavn.", "Som konstant referanse, siden alle som kjenner fortellingen mener det samme.", "Som variabel referanse, siden fortellingene varierer.", "Som predikativ bruk, siden navnet beskriver en rolle."],
      explanation: "Riktig er ingen referanse i verden, med den nyansen at navnet er referensielt i formen og konstant innenfor fortellingen. Svaret om konstant referanse tester nettopp den halvsanne siden av saken. De to øvrige beskriver mekanismer som ikke er i sving.",
    },
    {
      question: "Hva er første trinn i prosedyren for å klassifisere referansetype?",
      options: ["Å spørre om uttrykket i det hele tatt brukes til å peke ut noe.", "Å bytte ut taler, sted og tidspunkt.", "Å sjekke om uttrykket står i bestemt eller ubestemt form.", "Å avgjøre om uttrykket er et egennavn eller et fellesnavn."],
      explanation: "Riktig er å luke ut de kvantifiserende og predikative tilfellene først, siden referanse der ikke er forsøkt. Å bytte ut taler og sted er trinn tre og kommer senere. De to øvrige er formelle kjennetegn som ikke avgjør referansetypen alene.",
    },
    {
      question: "Hva er den vanligste svakheten i besvarelser om kongen av Frankrike?",
      options: ["At verken Russell eller Strawson nevnes.", "At eksempelet gjengis unøyaktig.", "At kandidaten bruker for lang tid på oppgaven.", "At det brukes norsk i stedet for engelsk terminologi."],
      explanation: "Riktig er at kandidaten konstaterer at uttrykket er tomt, uten å berøre de to konkurrerende analysene av hva det gjør med sannhetsverdien. Eksempelet er ikke temaet; kontrasten er. De tre øvrige gjelder form og tidsbruk, og ingen av dem rører oppgavens faglige kjerne.",
    },
  ],
  'ling1100-10-1': [
    {
      question: "Hva er deiksis?",
      options: ["At referenten bestemmes av ytringssituasjonen selv", "At referenten hentes fra et tidligere ledd i teksten", "At et uttrykk kan ha flere urelaterte betydninger", "At et uttrykk ikke har noen referent i det hele tatt"],
      explanation: "Riktig er at referansen hentes fra situasjonen: hvem som snakker, hvor og når. Å hente referenten fra teksten er anaforisk bruk, flere urelaterte betydninger er homonymi, og fravær av referent gjelder for eksempel predikater.",
    },
    {
      question: "Hva består det deiktiske senteret av?",
      options: ["Taleren, taletidspunktet og talestedet", "Mottakeren, mottakstidspunktet og mottaksstedet", "Emnet, tidsrommet og stedet det snakkes om", "Setningen, ytringen og proposisjonen"],
      explanation: "Riktig er taleren, taletidspunktet og talestedet — nullpunktet uttrykkene måles fra. Senteret kan riktignok projiseres til mottakeren, men det er unntaket. Emnet det snakkes om, og de tre nivåene setning, ytring og proposisjon, er noe annet enn et deiktisk senter.",
    },
    {
      question: "Hvilken deiksistype er uttrykket «i går»?",
      options: ["Tidsdeiksis", "Stedsdeiksis", "Persondeiksis", "Diskursdeiksis"],
      explanation: "Riktig er tidsdeiksis: dagen regnes fra taletidspunktet. Stedsdeiksis regnes fra talestedet, persondeiksis koder deltakerrollene, og diskursdeiksis peker på deler av teksten selv.",
    },
    {
      question: "Hvilket av disse uttrykkene er IKKE deiktisk?",
      options: ["Nord for kirken", "Til høyre for meg", "Her i huset", "For tre dager siden"],
      explanation: "Riktig er «nord for kirken», som regnes fra et fast holdepunkt i verden. Testen er å flytte taleren: bare den absolutte referansen står uendret, mens de tre andre peker et nytt sted eller tidspunkt.",
    },
    {
      question: "Hva er deiktisk projeksjon?",
      options: ["At taleren flytter det deiktiske senteret bort fra seg selv", "At et deiktisk uttrykk får referenten sin fra teksten foran", "At en peking erstatter ordet som skulle vært brukt", "At uttrykket viser til flere referenter i samme ytring"],
      explanation: "Riktig er flyttingen av senteret, som i «Jeg er ikke her nå» på en telefonsvarer. Å hente referenten fra teksten er anafor, peking hører til gestisk bruk, og flere referenter er et annet fenomen.",
    },
    {
      question: "Hva skiller gestisk fra symbolsk bruk av et deiktisk uttrykk?",
      options: ["Om tolkningen krever en påvisning eller bare kjennskap til situasjonen", "Om uttrykket viser til noe nært eller noe fjernt fra taleren", "Om uttrykket står i en muntlig eller en skriftlig ytring", "Om referenten er en person eller en gjenstand i rommet"],
      explanation: "Riktig er kravet om påvisning: «Sett den der» krever peking, «Her er det mye vind» gjør ikke. Nærhet, medium og referenttype avgjør ikke dette skillet.",
    },
    {
      question: "Hva er forskjellen mellom kodetidspunkt og mottakstidspunkt?",
      options: ["Når ytringen produseres, mot når den blir mottatt", "Når hendelsen skjer, mot når den blir omtalt", "Når samtalen begynner, mot når den blir avsluttet", "Når ordet læres, mot når det tas i bruk"],
      explanation: "Riktig er produksjon mot mottak. Skillet er uten interesse i vanlig samtale, men avgjørende i skrift og innspilte beskjeder — det er det som gjør «Jeg er ikke her nå» tolkbart.",
    },
    {
      question: "I «Astrid ringte i går. Hun hadde glemt nøkkelen» — hva slags bruk har «hun»?",
      options: ["Anaforisk, siden referenten hentes fra forrige setning", "Deiktisk, siden referenten hentes fra ytringssituasjonen", "Diskursdeiktisk, siden uttrykket peker på selve teksten", "Kataforisk, siden referenten kommer senere i teksten"],
      explanation: "Riktig er anaforisk: mottakeren må lese bakover, ikke se seg rundt. Diskursdeiksis peker på teksten som tekst, ikke på en person i den, og en katafor ville pekt framover.",
    },
    {
      question: "Hva er sosial deiksis?",
      options: ["Deiksis som koder forholdet mellom deltakerne", "Deiksis som koder hvor deltakerne befinner seg", "Deiksis som brukes bare i formelle sammenhenger", "Deiksis som viser til grupper i stedet for enkeltpersoner"],
      explanation: "Riktig er kodingen av rang, avstand og respekt mellom partene. Sted er stedsdeiksis, formalitetsnivå er en følge og ikke en definisjon, og gruppereferanse er noe annet.",
    },
    {
      question: "Hva er en indexical?",
      options: ["Et uttrykk hvis referent skifter systematisk med ytringskonteksten", "Et uttrykk som viser til en og samme referent i alle kontekster", "Et uttrykk som viser tilbake til noe nevnt tidligere i teksten", "Et uttrykk som markerer respekt for mottakerens sosiale rang"],
      explanation: "Riktig er kontekstavhengig referanse — samme klasse som de deiktiske uttrykkene, sett fra språkfilosofisk hold. Fast referent har egennavn, tilbakevisning er anafor, og respektmarkering er honorifika.",
    },
    {
      question: "Hva skiller rene indexicals fra demonstrativer hos Kaplan?",
      options: ["Om konteksten alene gir referenten, eller om en påvisning trengs", "Om uttrykket viser til en person eller til en gjenstand", "Om uttrykket står i entall eller i flertall", "Om uttrykket kan brukes i skrift eller bare i tale"],
      explanation: "Riktig er om konteksten alene holder: «jeg» og «nå» får referenten automatisk, «denne» og «det der» krever en påvisning eller en talerintensjon. De øvrige skillene er irrelevante for todelingen.",
    },
    {
      question: "Hva er character hos Kaplan?",
      options: ["En funksjon fra ytringskontekst til content", "En funksjon fra content til ytringskontekst", "Den referenten uttrykket har i en gitt situasjon", "Den proposisjonen setningen uttrykker i en kontekst"],
      explanation: "Riktig er funksjonen fra kontekst til content — den kontekstuavhengige regelen. Den omvendte retningen er nettopp den klassiske forvekslingen, og både referenten i en gitt situasjon og proposisjonen setningen uttrykker, er content.",
    },
    {
      question: "Hva er content hos Kaplan?",
      options: ["Proposisjonen som blir uttrykt i en bestemt kontekst", "Betydningsregelen som er lik for alle brukere av uttrykket", "Den situasjonen ytringen blir sagt i og regnes fra", "Det settet av kontekster der ytringen kan brukes"],
      explanation: "Riktig er proposisjonen, det som evalueres mot verden. Den faste regelen er character, situasjonen er ytringskonteksten, og et sett av kontekster er ikke et av Kaplans begreper.",
    },
    {
      question: "Hva er character for ordet «jeg»?",
      options: ["Regelen «den som ytrer dette»", "Den personen som faktisk snakker i situasjonen", "Førstepersonsformen i pronomensystemet i norsk", "Den rollen taleren har i det sosiale forholdet"],
      explanation: "Riktig er regelen, som er lik for alle brukere til alle tider. Den personen regelen plukker ut, er derimot content — og det er nettopp der forvekslingen pleier å oppstå.",
    },
    {
      question: "«Jeg rakk ikke bussen i dag» ytres av to ulike personer på to ulike dager. Hva varierer?",
      options: ["Content, mens character er den samme", "Character, mens content er det samme", "Både character og content", "Verken character eller content"],
      explanation: "Riktig er at content varierer mens character står fast: det er den samme setningen med de samme reglene, men to ulike proposisjoner. Den omvendte påstanden er den klassiske ombyttingen.",
    },
    {
      question: "Hvilket trinn i Kaplans apparat er pragmatisk?",
      options: ["Fra ytringskontekst til content", "Fra content til sannhetsverdi", "Fra sannhetsverdi til proposisjon", "Fra character til grammatisk form"],
      explanation: "Riktig er første trinn: konteksten fester hvilken proposisjon som uttrykkes. Andre trinn, fra proposisjon til sannhetsverdi, er semantisk. Verken en overgang fra sannhetsverdi til proposisjon eller fra character til grammatisk form er trinn i apparatet.",
    },
    {
      question: "Hvorfor er indexicals et problem for en ren referensiell teori om mening?",
      options: ["Fordi referenten varierer mens meningen står fast", "Fordi referenten står fast mens meningen varierer", "Fordi uttrykkene aldri har noen referent i det hele tatt", "Fordi uttrykkene bare brukes i muntlige ytringer"],
      explanation: "Riktig er at ordet «jeg» betyr det samme i alle munner og peker på ulike personer. Var mening det samme som referanse, måtte ordet skiftet betydning for hver taler, og da hadde det vært umulig å lære.",
    },
    {
      question: "«Jeg er her nå» er sann hver gang den ytres. Hva følger av det?",
      options: ["Ingenting om proposisjonen — den kunne fint vært usann", "At proposisjonen er nødvendig og ikke kan være usann", "At setningen ikke uttrykker noen proposisjon i det hele tatt", "At setningen mangler character i den enkelte konteksten"],
      explanation: "Riktig er at «sann i enhver ytringskontekst» og «nødvendigvis sann» er to ulike egenskaper. Den ene gjelder alle mulige argumenter til funksjonen, den andre gjelder én utgangsverdi vurdert mot ulike omstendigheter.",
    },
  ],
  'ling1100-10-2': [
    {
      question: "Hva gjelder epistemisk modalitet?",
      options: ["Kunnskap og sannsynlighet — hvor sikker taleren er", "Tillatelse og forpliktelse — hva som er lov eller påbudt", "Evne og indre disposisjon hos den som handler", "Tid og sted regnet fra ytringsøyeblikket"],
      explanation: "Riktig er kunnskap og sannsynlighet: «Hun må ha glemt avtalen» er en slutning, ikke et pålegg. Tillatelse er deontisk modalitet, evne er dynamisk, og tid og sted er deiksis.",
    },
    {
      question: "Hvilken parafrase avslører deontisk lesning av et modalverb?",
      options: ["«Det er tillatt at …» eller «det er påbudt at …»", "«Det er sannsynlig at …» eller «alt tyder på at …»", "«Det er mulig for henne å …» eller «hun har lært å …»", "«Det er nødvendigvis slik at …» i alle sammenhenger"],
      explanation: "Riktig er tillatelses- og påbudsparafrasen. Sannsynlighetsparafrasen avslører epistemisk lesning, evneparafrasen dynamisk, og nødvendighet er en styrke som finnes i begge typene.",
    },
    {
      question: "«Alle må levere skjemaet innen fredag», sagt av en emneansvarlig som forklarer reglene. Hvilken modalitet?",
      options: ["Deontisk nødvendighet", "Epistemisk nødvendighet", "Deontisk mulighet", "Dynamisk mulighet"],
      explanation: "Riktig er deontisk nødvendighet: parafrasen «det er påbudt at alle leverer» passer, og styrken er nødvendighet. En epistemisk lesning ville vært en slutning om hva folk faktisk gjør, ikke en regel.",
    },
    {
      question: "Hva er dynamisk modalitet?",
      options: ["Modalitet som gjelder evne eller indre disposisjon", "Modalitet som gjelder hva reglene tillater eller påbyr", "Modalitet som gjelder hvor sikker taleren er på noe", "Modalitet som endrer seg underveis i en samtale"],
      explanation: "Riktig er evne: «Kari kan spille piano» i betydningen at hun har lært det. Regler er deontisk modalitet, sikkerhet er epistemisk, og modalitet som endrer seg underveis er ikke en av typene.",
    },
    {
      question: "Hvilken strategi er «bald on record» — bar handling uten reparasjon?",
      options: ["Å utføre den truende handlingen direkte og udempet", "Å antyde handlingen og la mottakeren slutte seg til den", "Å pleie mottakerens behov for anerkjennelse først av alt", "Å la være å utføre handlingen i det hele tatt"],
      explanation: "Riktig er den direkte, udempede utførelsen — riktig valg når det haster eller partene står nær hverandre. Antydning er den indirekte strategien, anerkjennelse er positiv høflighet, og å tie er den siste strategien på stigen.",
    },
    {
      question: "Hva verner positiv høflighet?",
      options: ["Mottakerens behov for å bli verdsatt og godtatt", "Mottakerens behov for å slippe å bli pålagt noe av andre", "Talerens egen anseelse i den aktuelle situasjonen", "Den felles grunnen som partene allerede er enige om"],
      explanation: "Riktig er behovet for anerkjennelse, altså det positive ansiktet. Behovet for handlefrihet er det negative ansiktet, som negativ høflighet verner. Talerens egen anseelse og partenes felles grunn er ikke det positiv høflighet retter seg mot.",
    },
    {
      question: "Hvilke tre faktorer avgjør hvor mye ansiktsarbeid en handling krever?",
      options: ["Sosial avstand, maktforhold og størrelsen på pålegget", "Alder, kjønn og utdanningsnivå hos de to partene", "Tonefall, ordvalg og setningstype i selve ytringen", "Kraft, innhold og virkning i Austins tredeling"],
      explanation: "Riktig er avstand, makt og pålegg. Personlige egenskaper inngår ikke i modellen, tonefall og ordvalg er resultatet av strategivalget, og kraft, innhold og virkning er begreper fra talehandlingsteorien, ikke fra høflighetsteorien.",
    },
    {
      question: "Hva er forholdet mellom relevansteorien og Grice?",
      options: ["Relevansteorien er et alternativ som erstatter maksimene", "Relevansteorien er et tillegg som utfyller maksimene", "Relevansteorien er en tidligere teori som Grice bygde på", "Relevansteorien gjelder semantikk, Grice gjelder pragmatikk"],
      explanation: "Riktig er at maksimene forkastes og erstattes av ett prinsipp. Å kalle teorien et tillegg er den vanligste feilen her. Sperber og Wilson kommer etter Grice, og begge teoriene er pragmatiske.",
    },
    {
      question: "Hvordan defineres relevans i relevansteorien?",
      options: ["Som forholdet mellom kognitivt utbytte og prosesseringsinnsats", "Som graden av tematisk sammenheng mellom to ytringer", "Som hvor godt ytringen følger de fire samtalemaksimene", "Som hvor viktig det emnet ytringen handler om, er"],
      explanation: "Riktig er avveiningen mellom utbytte og innsats. Tematisk sammenheng og emnets viktighet er dagligspråkets «relevant», og henvisningen til maksimene tilhører Grices apparat, og forvekslingen med dagligspråket er en typisk feil i denne oppgavetypen.",
    },
    {
      question: "Hva sier presumsjonen om optimal relevans?",
      options: ["At ytringen er verdt innsatsen og så økonomisk taleren kunne gi den", "At taleren alltid sier det som er sant og har dekning for", "At mottakeren alltid finner den tolkningen taleren mente", "At samtalepartnere deler en felles grunn av bakgrunnskunnskap"],
      explanation: "Riktig er de to leddene: relevant nok, og mest relevant gitt talerens evner og hensikter. Sannhetskravet er Grices kvalitetsmaksime, og både påstanden om at mottakeren alltid treffer den mente tolkningen og påstanden om en felles grunn er andre antakelser om samtale.",
    },
    {
      question: "Hva er språklig underbestemthet?",
      options: ["At setningens språklige betydning ikke gir en fullstendig proposisjon", "At en setning kan analyseres på to ulike syntaktiske måter", "At et ord har flere urelaterte betydninger i ordboka", "At taleren bevisst holder tilbake informasjon i en samtale"],
      explanation: "Riktig er at språket ikke gir hele proposisjonen: «Jeg har spist» sier bokstavelig bare at det finnes et tidspunkt før nå. To syntaktiske analyser er strukturell flertydighet, flere betydninger er homonymi, og tilbakeholding er noe taleren gjør.",
    },
    {
      question: "Hva er en eksplikatur?",
      options: ["Den utfylte proposisjonen ytringen uttrykker", "En selvstendig antakelse som kommer i tillegg til det sagte", "En bakgrunnsantakelse som overlever negasjon av setningen", "Den handlingen taleren utfører i og med å si noe"],
      explanation: "Riktig er den utfylte proposisjonen — en utvikling av det som ble sagt. En selvstendig antakelse i tillegg er en implikatur, en antakelse som overlever negasjon er en presupposisjon, og handlingen er den illokusjonære.",
    },
    {
      question: "«Jeg har spist», sagt som svar på et middagstilbud. Hva er implikaturen?",
      options: ["At taleren ikke vil ha mer mat", "At taleren har spist middag i kveld", "At det finnes et tidspunkt der taleren spiste", "At taleren er forpliktet til å takke nei"],
      explanation: "Riktig er avslaget, som kommer i tillegg til det sagte. At hun har spist middag i kveld er eksplikaturen, altså utfyllingen av det sagte, og det bokstavelige innholdet er det språklige utgangspunktet.",
    },
    {
      question: "Hva er forskjellen mellom metning og fri berikelse?",
      options: ["Om språket krever utfyllingen eller ikke", "Om utfyllingen skjer bevisst eller ubevisst hos mottakeren", "Om utfyllingen gjelder tid eller sted i ytringen", "Om utfyllingen bidrar til eksplikaturen eller til implikaturen"],
      explanation: "Riktig er om språket ber om utfyllingen: «hun er høyere» krever et «enn hva», mens «jeg har spist» er komplett og likevel snevres inn. Begge bidrar til eksplikaturen, og bevissthetsgrad og innholdstype avgjør ikke skillet.",
    },
    {
      question: "Hva er informasjonsstruktur?",
      options: ["Fordelingen mellom gitt og ny informasjon i en ytring", "Rekkefølgen på leddene i en grammatisk velformet setning", "Måten en tekst er delt inn i avsnitt og kapitler på", "Mengden informasjon en taler kan formidle på ett minutt"],
      explanation: "Riktig er fordelingen av gitt og nytt, markert med trykk og ordstilling. Leddrekkefølge er syntaks, tekstinndeling er noe annet, og informasjonsmengde per tid er ikke et lingvistisk begrep her.",
    },
    {
      question: "Hvilket argument taler for at presupposisjon er et pragmatisk fenomen?",
      options: ["At presupposisjoner kan kanselleres og akkommoderes i samtale", "At presupposisjoner utløses av bestemte verb og konstruksjoner", "At presupposisjoner overlever negasjon av setningen", "At presupposisjoner alltid er sanne når setningen er sann"],
      explanation: "Riktig er kansellering og akkommodasjon, som er vanskelige å forklare hvis antakelsen er fast kodet i setningen. De systematiske utløserne og negasjonstesten taler tvert imot for det semantiske synet.",
    },
  ],
  'ling1100-10-3': [
    {
      question: "Hva består et fullstendig A2-svar av?",
      options: ["Begge begrepene definert, den skarpe forskjellen, testen gjennomført og egne eksempler", "En innledning, deretter argumenter for og mot, og til slutt en begrunnet stillingtaken", "En presis fasit, mellomregningen vist og et kontrasttilfelle helt til slutt", "En definisjon, en taksonomi og en oversikt over hvem som hevder hva"],
      explanation: "Riktig er de fire delene definisjoner, skarp forskjell, gjennomført test og egne eksempler. Argumenter for og mot hører til fri drøfting, og de to andre alternativene beskriver den formelle sjangeren og en ren begrepsoversikt.",
    },
    {
      question: "Hva skiller å navngi en test fra å gjennomføre den?",
      options: ["At parafrasen eller kontrasten faktisk anvendes på materialet i oppgaven", "At testen oppgis med sin engelske term i tillegg til den norske", "At testen står tidlig i svaret i stedet for helt til slutt", "At testen knyttes til den teoretikeren som opprinnelig formulerte den i pensum"],
      explanation: "Riktig er anvendelsen på materialet. Å skrive «testen er parafrase-testen» er en navngivelse; å skrive ut begge parafrasene og si hvilken som passer, er en gjennomføring. Plassering, term og opphav endrer ikke dette.",
    },
    {
      question: "Hvilken formulering av character teller som fullstendig?",
      options: ["En funksjon fra ytringskontekst til content, med argument og verdi navngitt", "Den faste betydningen ordet har uavhengig av situasjonen det brukes i", "Den referenten uttrykket peker på i den enkelte ytringssituasjonen", "Den proposisjonen setningen uttrykker når ytringskonteksten er kjent for mottakeren"],
      explanation: "Riktig er funksjonsformuleringen med argument og verdi. «Den faste betydningen» er riktig, men ufullstendig, og både referenten i den enkelte situasjonen og proposisjonen når konteksten er kjent, er content — altså den klassiske ombyttingen.",
    },
    {
      question: "Hva er beviset på at character-funksjonen faktisk er utført i et eksempel?",
      options: ["At content er skrevet ut uten deiktiske ord", "At begge kontekstene er hentet fra samme situasjon", "At setningen inneholder minst tre ulike indexicals", "At den engelske termen er oppgitt for begge begrepene"],
      explanation: "Riktig er at content står uten deiktiske ord — da er regelen anvendt, ikke bare beskrevet. Antall indexicals og engelsk term er nyttige, men beviser ingenting, og kontekstene må nettopp være ulike.",
    },
    {
      question: "Hvorfor er «Vann fryser ved null grader» et dårlig eksempel på character og content?",
      options: ["Fordi setningen ikke har indexicals, så content blir det samme i alle kontekster", "Fordi setningen er en naturlov og derfor ikke kan ha noen proposisjon", "Fordi setningen er for kort til å vise to nivåer på en tydelig måte", "Fordi setningen hører hjemme i semantikken og ikke i pragmatikken i det hele tatt"],
      explanation: "Riktig er at uten indexicals faller de to nivåene sammen, og oppstillingen viser ingenting. Setningen uttrykker en helt vanlig proposisjon, og verken lengde eller fagområde er problemet.",
    },
    {
      question: "Hva er den skarpe forskjellen mellom eksplikatur og implikatur?",
      options: ["Eksplikaturen utvikler det som ble sagt; implikaturen kommer i tillegg", "Implikaturen utvikler det som faktisk ble sagt; eksplikaturen kommer i tillegg", "Eksplikaturen er alltid sann; implikaturen kan være både sann og usann", "Eksplikaturen er talerens mening; implikaturen er mottakerens tolkning"],
      explanation: "Riktig er at eksplikaturen fyller ut ytringens eget innhold mens implikaturen er en selvstendig antakelse. Den omvendte formuleringen er den klassiske ombyttingen, og sannhetsverdi og hvem som tolker, skiller dem ikke.",
    },
    {
      question: "Hvilken test peker mot at et innhold er en implikatur?",
      options: ["At innholdet kan trekkes tilbake uten selvmotsigelse", "At innholdet overlever uendret når hele setningen negeres", "At innholdet forsvinner så snart hele setningen negeres", "At innholdet kan parafraseres med «det er påbudt at …»"],
      explanation: "Riktig er kansellerbarhetstesten. Å overleve negasjon kjennetegner presupposisjon, å forsvinne under negasjon kjennetegner entailment, og påbudsparafrasen gjelder deontisk modalitet.",
    },
    {
      question: "«Bendik kan svømme» foreslås som eksempel på epistemisk/deontisk flertydighet. Hva er problemet?",
      options: ["Hovedlesningen er dynamisk, så flertydigheten går i en annen retning", "Setningen inneholder ikke noe modalverb og kan derfor ikke være modal", "Setningen er deontisk i alle kontekster og har bare én lesning", "Setningen inneholder et egennavn, og egennavn har fast referanse i alle kontekster"],
      explanation: "Riktig er at hovedlesningen er evne, altså dynamisk modalitet. Den deontiske finnes, men den epistemiske er anstrengt — så eksempelet viser et annet skille enn det oppgaven gjelder.",
    },
    {
      question: "Hvilken strategi verner mottakerens negative ansikt?",
      options: ["Negativ høflighet, som demper pålegget og gir en vei ut", "Positiv høflighet, som viser at mottakeren er verdsatt", "Bar handling, som gjør budskapet raskt og utvetydig", "Taushet, som fjerner enhver form for ansiktstrussel"],
      explanation: "Riktig er negativ høflighet. Positiv høflighet verner det positive ansiktet, bar handling verner ingenting, og taushet er den siste strategien på stigen — den utfører ikke handlingen i det hele tatt.",
    },
    {
      question: "Hva bør du kontrollere de siste minuttene av en Del 10-oppgave?",
      options: ["Antall deloppgaver, antall egne eksempler og om testen er gjennomført", "Rettskriving, tegnsetting og lengden på hvert enkelt avsnitt", "Om konklusjonen er tilstrekkelig forsiktig og nyansert formulert", "Om teoretikernes verk og utgivelsesår er korrekt oppgitt i hele besvarelsen"],
      explanation: "Riktig er de tre tellingene, som fanger de vanligste manglene. Språkvask er sekundært, forsiktige konklusjoner er ikke et krav i denne sjangeren, og årstall skal du ikke oppgi uten å være sikker.",
    },
    {
      question: "Hvor mange av de 12 settene i arkivet prøver deiksis?",
      options: ["Fire", "Åtte", "Ti", "To"],
      explanation: "Riktig er fire av tolv. Åtte er tallet for Grice og implikatur, ti for talehandlinger, og relevansteorien er den som er berørt i bare to til tre sett.",
    },
    {
      question: "Hva slags løsninger har oppgavene i dette kapitlet?",
      options: ["Momentlister skrevet av oss, ikke offisielle fasiter", "Offisielle løsningsforslag hentet fra emnets eget arkiv", "Fasitsvar der ett alternativ er riktig for hver deloppgave", "Vurderte kandidatbesvarelser med karakter oppgitt"],
      explanation: "Riktig er nyskrevne momentlister. LING1100 har ingen publiserte løsningsforslag og ingen fasit, og boka gjengir verken karakterer eller ekte besvarelser.",
    },
    {
      question: "Hva er det billigste pluss-punktet i en Del 10-besvarelse?",
      options: ["Én begrunnet kobling til et annet kapittel i pensum", "En lengre innledning som plasserer temaet i faghistorien", "En liste over alle teoretikerne som har skrevet om temaet", "En avsluttende drøfting av om teorien holder mål"],
      explanation: "Riktig er koblingen: den koster to setninger og viser sammenheng. En lang innledning spiser tid, en navneliste viser ingenting, og drøfting er feil sjanger når oppgaven ber om en redegjørelse.",
    },
    {
      question: "Hvilken feil gjør en kandidat som besvarer fire av fem deloppgaver?",
      options: ["Feil #9 — å svare på feil antall deler", "Feil #5 — å liste i stedet for å forklare", "Feil #2 — å bytte om begrepene i et begrepspar", "Feil #10 — å utelate egne eksempler"],
      explanation: "Riktig er feil #9, som gjelder antall besvarte deler og valgoppgaver. De tre andre kodene beskriver mangler i innholdet av det som faktisk er besvart.",
    },
  ],
  'ling1100-11-1': [
    {
      question: "Hva er trinn 3 i trestegsføringen for et formelt svar?",
      options: ["Et eget eksempel eller et kontrasttilfelle som viser mekanismen", "En innledning som plasserer begrepet i faget", "En vurdering av hvor sikkert svaret er", "En henvisning til hvilken pensumbok begrepet kommer fra"],
      explanation: "Rekkefølgen er presist svar, testen gjennomført, og til slutt et eget eksempel eller kontrasttilfelle. Innledninger og sikkerhetsvurderinger hører ikke hjemme i en formell besvarelse i det hele tatt, og pensumhenvisning er verken etterspurt eller mulig uten hjelpemidler.",
    },
    {
      question: "Hvorfor er «sann når begge er sanne» ikke en fullstendig sannhetsbetingelse for konjunksjon?",
      options: ["Den sier hva som er tilstrekkelig, men lukker ikke for andre tilfeller", "Den bruker ordet «sann» om en setning i stedet for om en proposisjon", "Den mangler en angivelse av hvilke to setninger som inngår", "Den nevner ikke at konjunksjonen har fire mulige sannhetsverdikombinasjoner"],
      explanation: "«Hvis» gir bare den tilstrekkelige retningen; «hviss» gir også den nødvendige, og lukker dermed for at setningen kunne vært sann i andre tilfeller. At kombinasjonene er fire, og hva de to leddene er, kan godt stå i tillegg, men det er ikke det som mangler i selve betingelsen.",
    },
    {
      question: "Hvilken parring gjelder når du oversetter «alle A er B» til predikatlogikk?",
      options: ["Allkvantor med implikasjon", "Allkvantor med konjunksjon", "Eksistenskvantor med implikasjon", "Eksistenskvantor med konjunksjon"],
      explanation: "Allkvantoren parres alltid med implikasjonen, eksistenskvantoren alltid med konjunksjonen. Allkvantor med konjunksjon ville påstå at alt i domenet er A, og eksistenskvantor med implikasjon er nesten tomt, siden en implikasjon med usant forledd allerede er sann.",
    },
    {
      question: "Hva påstår formelen $\\exists x\\,(A(x) \\rightarrow B(x))$ i praksis?",
      options: ["At det finnes minst én ting som ikke er A, eller som er B", "At enhver ting i domenet som er A, uten noe unntak også er B", "At det finnes minst én ting i domenet som er både A og B samtidig", "At ingen av A-ene i domenet er B-er"],
      explanation: "En implikasjon er sann så snart forleddet er usant, så formelen er sann bare det finnes én ting utenfor A. Den riktige oversettelsen av «noen A er B» er eksistenskvantor med konjunksjon, og «alle A er B» krever allkvantor.",
    },
    {
      question: "Hva er den viktigste grunnen til å skrive ordnede par ned før du slår opp i modellen?",
      options: ["Da kan paret ikke lenger forveksles med det motsatte paret", "Da slipper du å gjengi modellen i besvarelsen", "Da blir det mulig å svare uten å kjenne domenet", "Da kan du regne ut hvor mange par relasjonen inneholder"],
      explanation: "Hensikten er å låse rekkefølgen før oppslaget, siden norsk gjør det lett å lese «Birk og Ada» i stedet for paret i den rekkefølgen formelen krever. Modellen skal uansett gjengis, og verken domenets størrelse eller antall par er poenget.",
    },
    {
      question: "Hva sier evalueringsalgoritmens siste trinn at du skal gjøre?",
      options: ["Peke ut det individet som avgjør sannhetsverdien", "Skrive opp hele modellen en gang til som kontroll til slutt", "Gjenta oppgaveteksten slik at svaret kan leses alene", "Angi hvor mange rader en sannhetstabell ville hatt"],
      explanation: "Å peke ut hvem som velter en allpåstand eller redder en eksistenspåstand er det som skiller et riktig svar fra et fullstendig. Modellen skrives ned i trinn 1, ikke til slutt, og rader hører til sannhetstabeller, ikke til modellevaluering.",
    },
    {
      question: "I hvilken rekkefølge skal testene og kategorien stå i et F3-svar?",
      options: ["Testene først, kategorien etterpå", "Kategorien først, testene som bekreftelse", "Kategorien alene, med testene bare hvis det er tid", "Trekkene først, uten at kategorien nevnes"],
      explanation: "Et svar som fører testene og lar klassen følge, leses som en utregning; et svar som åpner med klassen, leses som en gjetning som forsvares i ettertid. Trekkene skal med, men klassen skal også oppgis — den er selve svaret.",
    },
    {
      question: "Hvorfor må telisiteten avgjøres på hele verbfrasen og ikke på verbet alene?",
      options: ["Objektet og adverbialene kan gi eller fjerne det naturlige endepunktet", "Verb har ikke trekk i seg selv, bare setninger har det", "Tempus endrer telisiteten til verbet", "Testene er formulert med objekt og kan derfor ikke kjøres uten et objekt"],
      explanation: "«Strikke en genser» er telisk og «strikke gensere» atelisk med samme verb — det er objektet som avgjør. Verb har svært vel egne trekk, tempus er et annet spørsmål enn aksjonsart, og testene kan formuleres uten objekt.",
    },
    {
      question: "Hva viser volisjonskontrollen når «med vilje» gjør setningen semantisk avvikende?",
      options: ["At subjektet er actor uten å være agens", "At subjektet er patiens og ikke utfører", "At setningen er ugrammatisk", "At verbet mangler en argumentplass"],
      explanation: "Testen skiller agens fra actor: går tillegget ikke, mangler volisjonen, og utføreren er actor uten å være agens. Setningen er fortsatt grammatisk — markøren er nettopp den for semantisk avvik — og verbets argumentstruktur er uberørt.",
    },
    {
      question: "Hva må stå i et svar om Dowtys proto-roller for at mekanismen skal være forklart?",
      options: ["At egenskapene er entailmenter fra predikatet og at tilhørigheten er gradert", "At proto-agent alltid svarer til subjektet og proto-patient til det direkte objektet", "At de to knippene har fire egenskaper hver", "At Dowty foreslo dem som et alternativ til Fillmore"],
      explanation: "Poenget er at egenskapene følger av at setningen er sann, og at et argument har et antall egenskaper heller enn en rolle. At knippene har fire egenskaper hver er en opplysning uten mekanisme, og koblingen til subjekt er konklusjonen fra prinsippet, ikke forklaringen på det.",
    },
    {
      question: "Hvilken hovedfunksjon skal du spørre etter først når du tegner et konseptuelt tre?",
      options: ["CAUSE, altså om en deltaker får noe annet til å skje", "GO, altså om noe flytter seg fra ett sted til et annet", "BE, altså om noe rett og slett befinner seg et sted", "STAY, altså om noe blir værende gjennom et tidsrom"],
      explanation: "CAUSE-spørsmålet stilles først, fordi den innfelte bevegelsen ellers fanger blikket og GO blir valgt for hele setningen. Rekkefølgen deretter er GO, STAY og BE.",
    },
    {
      question: "Hva er den vanligste feiltypen i tegneoppgaver med konseptuelle trær?",
      options: ["En node som ikke er tegnet", "En node som står på feil nivå", "En løvnode med feil leksikalsk innhold", "En rotkategori med feil navn"],
      explanation: "Fire av de fem punktene i kontrollisten gjelder manglende noder — særlig [Path] under GO og [Place] under BE og STAY. De øvrige feiltypene forekommer, men langt sjeldnere enn den utelatte noden.",
    },
    {
      question: "Hva må et fullstendig svar om en nedovergående posisjon inneholde ut over selve slutningen?",
      options: ["En forklaring i mengdespråk av hvorfor retningen snur", "En liste over alle kjente nedovergående kontekster", "En sannhetstabell for negasjonen", "En henvisning til hvem som innførte begrepet"],
      explanation: "Det som etterspørres, er innsikten: at å utelukke hele overmengden er å utelukke hver delmengde av den. En katalog over kontekster er et hjelpemiddel til å finne kandidater, og verken tabell eller opphavsmann besvarer spørsmålet.",
    },
    {
      question: "Hva skiller material implikasjon fra logisk implikasjon?",
      options: ["Logisk implikasjon gjelder i alle situasjoner, ikke bare i én", "Material implikasjon gjelder bare for setninger som deler tema", "Logisk implikasjon er en sannhetsfunksjon med fire rader", "Material implikasjon kan bare brukes når begge leddene er sanne"],
      explanation: "Logisk implikasjon er en påstand om alle situasjoner; material implikasjon ser bare på sannhetsverdiene i den ene raden man er i. Det er material implikasjon som er sannhetsfunksjonen med fire rader, og den er definert for alle kombinasjoner.",
    },
    {
      question: "Hvor mange minutters skrivetid regner boka med per besvarelse i det nyeste settformatet?",
      options: ["Rundt 20 minutter", "Rundt 12 minutter", "Rundt 24 minutter", "Rundt 30 minutter"],
      explanation: "Fire timer gir 240 minutter, og med 20 minutter til settlesing i starten og 20 til gjennomlesing på slutten fordeles 200 minutter på ti besvarelser. De øvrige tallene tar enten ikke høyde for lese- og kontrolltiden, eller forutsetter færre svar.",
    },
    {
      question: "Hva er den avgjørende testen for om en oppgave krever F2-evaluering framfor F1-tabell?",
      options: ["Om oppgaven oppgir en modell med domene og tolkningsfunksjon", "Om oppgaven bruker kvantorer i formlene", "Om oppgaven ber om en skriftlig begrunnelse", "Om oppgaven inneholder mer enn to variabler"],
      explanation: "En oppgitt modell er signalet: da skal formelen vurderes i én bestemt situasjon, ikke i alle mulige. Kvantorer, begrunnelseskrav og antall variabler forekommer i begge sjangrene og skiller dem ikke.",
    },
  ],
  'ling1100-11-2': [
    {
      question: "Hva avgjør hvilken redegjørende sjanger en oppgave krever?",
      options: ["Instruksjonsverbet i oppgaveteksten", "Temaet oppgaven handler om", "Hvor mange poeng oppgaven er verdt i settet", "Hvilken del av pensum stoffet står i"],
      explanation: "Sjangeren styres av verbet: «gjør rede for», «avgjør for hvert», «sammenlign» og «er du enig» krever fire ulike svarformer. Samme tema kan komme i alle fire sjangrene, og hverken plassering i pensum eller poeng sier noe om svarformen.",
    },
    {
      question: "Hvilke to trekk i A1-malen avgjør nivået på besvarelsen?",
      options: ["Mekanismen og avgrensningen", "Definisjonen og taksonomien", "Taksonomien og eksemplene", "Definisjonen og eksemplene"],
      explanation: "Definisjon, taksonomi og eksempler kan skrives av en kandidat som har pugget; mekanismen og avgrensningen krever at apparatet er forstått. Det er derfor et svar som stopper etter eksemplene, leses som tilstrekkelig og ikke som fyldig.",
    },
    {
      question: "Hva kjennetegner et godkjent eget eksempel?",
      options: ["At det viser trekket entydig og ikke kunne plasseres i en nabokategori", "At det er hentet fra en annen del av pensum enn den oppgaven handler om", "At det er kortere enn eksemplene oppgaven selv oppgir", "At det inneholder minst to av kategoriene samtidig"],
      explanation: "Kravet er entydighet: kan eksempelet like gjerne plasseres i en nabokategori, dokumenterer det ingenting. Et pensumeksempel er ikke ditt eget, lengden er likegyldig, og et eksempel som dekker to kategorier på én gang er nettopp ikke entydig.",
    },
    {
      question: "Hva er kjennetegnet på A2-sjangeren i føringen?",
      options: ["Kriteriet oppgis før det brukes, og testen kjøres på hvert enkelt tilfelle", "Begge begrepene får hvert sitt lange innledende avsnitt før konklusjonen trekkes", "Konklusjonen står først, og testen følger som bekreftelse", "Kategoriene listes opp, og leseren avgjør selv hvilken som passer"],
      explanation: "Rekkefølgen test–konklusjon er det som gjør svaret til et resultat i stedet for en gjetning. Lange innledende avsnitt om begge begrepene er nettopp den formen sjangeren advarer mot, og en konklusjon som forsvares i ettertid leses som etterrasjonalisering.",
    },
    {
      question: "Hva er en sammenligningsakse i A3-sjangeren?",
      options: ["Et spørsmål begge posisjonene gir et svar på", "Et tema som er felles for begge teoriene", "Den teoretikeren som kom først av de to", "Den delen av pensum begge teoriene står i"],
      explanation: "«Kontekst» er et tema; «hvor mye av tolkningsarbeidet legger teorien til konteksten?» er en akse, fordi begge posisjonene svarer på det. Kronologi og pensumplassering er opplysninger, ikke akser.",
    },
    {
      question: "Hva er hovedfeilen i A3-sjangeren?",
      options: ["To parallelle monologer uten at posisjonene møtes", "At det ikke kåres en vinner til slutt", "At bare to akser brukes i sammenligningen i stedet for fire", "At den ene teorien får litt mer plass enn den andre"],
      explanation: "En besvarelse som beskriver A og deretter B uten å stille dem opp mot hverandre, har ikke sammenlignet. Sjangeren krever ikke at du kårer en vinner, to akser holder godt, og en liten skjevfordeling er uproblematisk.",
    },
    {
      question: "Hva er den viktigste ferdigheten i A4-sjangeren?",
      options: ["Å finne tvetydigheten i selve påstanden og stille opp spørsmålet presist", "Å presentere flest mulig argumenter på begge sider av det omstridte spørsmålet", "Å unngå å ta et standpunkt som kan angripes", "Å referere til så mange pensumbøker som mulig"],
      explanation: "Nesten alle drøftingspåstander i faget rommer en sterk og en svak lesning, og å skille dem er halve svaret. Antall argumenter er underordnet, standpunktet skal nettopp tas, og referansemengde er ikke et kriterium.",
    },
    {
      question: "Hva teller IKKE som en begrunnet stillingtaken?",
      options: ["«Dette er omdiskutert, og begge sider har noe for seg»", "«Påstanden holder i den svake lesningen, men ikke i den sterke»", "«Jeg mener påstanden er usann, og hovedgrunnen er denne»", "«Påstanden holder for de tilfellene der språket gir et valg»"],
      explanation: "Å beskrive debatten er ikke å ta del i den. De tre øvrige er alle konklusjoner en leser kan gjengi i én setning, enten de tar form av et ja, et nei, en distinksjon eller en betingelse.",
    },
    {
      question: "Hva må stå i et svar for at Kaplans character skal være riktig forklart?",
      options: ["At den er en funksjon fra ytringskontekst til proposisjon", "At den er den betydningen ordet har i ordboka", "At den varierer med hvem som ytrer setningen", "At den er det samme som setningens sannhetsbetingelser"],
      explanation: "Funksjonspoenget er nettopp det den ene sensorveiledningen som finnes, er streng på. Character er konstant og varierer ikke; det er content som varierer, og sannhetsbetingelser er et tredje begrep.",
    },
    {
      question: "Hva består en momentliste av?",
      options: ["Må-punkter, pluss-punkter og feller", "En modellbesvarelse og en kommentar til den", "En liste over alle mulige riktige formuleringer", "En rangering av svarene fra best til svakest"],
      explanation: "Formen er tredelt: det som må være der, det som løfter, og det som trekker ned. Poenget er nettopp at formuleringene ikke låses, og en momentliste rangerer ikke besvarelser.",
    },
    {
      question: "Hvor mange minutter bør definisjon og taksonomi til sammen ta i en redegjørende besvarelse?",
      options: ["Rundt fem", "Rundt ti", "Rundt to", "Rundt femten"],
      explanation: "De to trekkene er de raskeste å skrive og de minst diskriminerende, så de bør ta omtrent en fjerdedel av de tjue minuttene. Mer enn det stjeler fra mekanismen og eksemplene, som er der besvarelsene skiller lag.",
    },
    {
      question: "Hva er poenget med å koble Horn-skalaen til Q-prinsippet?",
      options: ["Skalaen virker fordi høreren regner med at taleren ville sagt mer om hun kunne", "Skalaen er ordnet fra svakest til sterkest uttrykk", "Skalaen viser hvilke ord som kan stå i samme setning", "Skalaen forklarer hvorfor R-prinsippet er talerorientert og ikke hørerorientert"],
      explanation: "Q er hørerorientert og sier «si nok», og det er nettopp den forventningen som gjør at det svakere leddet implikerer at det sterkere ikke gjelder. At skalaen er ordnet etter styrke er en beskrivelse av den, ikke en forklaring på hvorfor den gir implikaturer.",
    },
    {
      question: "Hvilket vilkår er det eneste som gir misbruk og ikke feilslag når det svikter?",
      options: ["Oppriktighetsvilkåret", "Det forberedende vilkåret", "Vilkåret om proposisjonelt innhold", "Det vesentlige vilkåret"],
      explanation: "Man kan love uten å mene det, og løftet er likevel gitt — handlingen kommer i stand, men er uoppriktig. Svikter noen av de tre andre, kommer handlingen ikke i stand i det hele tatt.",
    },
    {
      question: "Hva er den avgjørende observasjonen når Austins tredeling sammenlignes med Searles fem kategorier?",
      options: ["Searles femdeling er en oppdeling av Austins midterste lag", "Searle erstattet Austins analyse med en enklere", "De to systemene forutsier ulike ting om samme ytring", "Austin hadde tre kategorier der Searle har fem"],
      explanation: "De ligger på ulike nivåer i samme analyse: tredelingen er anatomien i én ytring, femdelingen en taksonomi over det illokusjonære laget. Derfor er de ikke konkurrenter, og tredelingen er ikke en kortere liste av samme slag.",
    },
  ],
  'ling1100-11-3': [
    {
      question: "Hvilken test avgjør om en slutning er en presupposisjon?",
      options: ["Negasjonstesten", "Kansellerbarhetstesten", "Avtakbarhetstesten", "Volisjonskontrollen"],
      explanation: "Presupposisjonen overlever negasjonen av setningen, og det er det som definerer den. Kansellerbarhet skiller implikatur fra entailment, avtakbarhet skiller konvensjonelt fra utledet innhold, og volisjon hører til rolleanalysen.",
    },
    {
      question: "Hvorfor er det å bytte om parvise begreper kalt den farligste feilen?",
      options: ["Den føles ikke som en feil mens man skriver", "Den fører alltid til at hele svaret blir usant", "Den forekommer bare i den formelle halvdelen", "Den kan ikke rettes uten å lære stoffet på nytt"],
      explanation: "Kandidaten kjenner begge begrepene, teksten flyter, og ingenting varsler — derfor oppdages ikke byttet innenfra. Feilen rammer begge halvdelene, gjør ikke nødvendigvis hele svaret usant, og motgiften er enkel: lær paret med testen imellom.",
    },
    {
      question: "Hva er varsellampa for gjenfortelling uten mekanisme i et svar om proto-roller?",
      options: ["At det står at et argument «er» proto-agent", "At begge knippene er navngitt", "At eksempelet er hentet fra pensum", "At argumentseleksjonsprinsippet nevnes til slutt"],
      explanation: "Å skrive at noe «er» proto-agent gjør knippet om til en kategori, og da er det graderte poenget borte — det heter at argumentet har et antall proto-agent-egenskaper. Å navngi knippene og å nevne prinsippet er derimot begge deler av et riktig svar.",
    },
    {
      question: "Hva er den dyreste konsekvensen av å svare på alle tre spørsmålene i en temablokk?",
      options: ["Tjue minutter tas fra en annen besvarelse senere i settet", "Det tredje svaret trekker ned vurderingen av de to andre i blokka", "Sensor vurderer bare det svakeste av de tre svarene i blokka", "Besvarelsen blir underkjent som formfeil"],
      explanation: "Det ekstra svaret gir ikke uttelling, og tiden det tar, hentes alltid fra slutten av settet der man er dårligst på tid. Det trekker ikke ned, og det finnes ingen dokumentasjon på verken utvelging av det svakeste eller på underkjenning.",
    },
    {
      question: "Hva skiller feil 1 fra feil 6?",
      options: ["Feil 1 er helt uten belegg, feil 6 er ett belegg der det ventes flere", "Feil 1 rammer formelle svar, feil 6 rammer redegjørende", "Feil 1 handler om eksempler, feil 6 om tester", "Feil 1 gjelder klassifisering, feil 6 gjelder tempus"],
      explanation: "Forskjellen er grad, ikke art: det ene er ingen dokumentasjon, det andre er for lite av den. Begge rammer begge halvdelene, og begge kan gjelde både tester og eksempler.",
    },
    {
      question: "Hvilken begrunnelse avslører at slutningstypen ikke er testet?",
      options: ["«Det står ikke direkte i setningen»", "«Slutningen overlever negasjonen av setningen»", "«Tillegget som opphever slutningen, blir selvmotsigende»", "«Triggeren er den kløyvde konstruksjonen»"],
      explanation: "Den første begrunnelsen gjelder for alle tre slutningstypene og skiller derfor ingenting. De tre andre er alle utslag av en faktisk gjennomført test eller en identifisert trigger.",
    },
    {
      question: "Hva må stå i tillegg til tempusnavnet når tempus er etterspurt?",
      options: ["En analyse i Reichenbachs tre tidspunkter", "En begrunnelse for hvorfor tempus er relevant", "En sammenligning med situasjonstypen", "En oversettelse av verbet til engelsk"],
      explanation: "«Preteritum» er et navn; forholdet mellom hendelses-, referanse- og taletidspunkt er en analyse, og det er som regel den som etterspørres. De øvrige tilleggene er ikke etterspurt noe sted i materialet.",
    },
    {
      question: "Hva gjør et eget eksempel til dokumentasjon og ikke bare til en illustrasjon?",
      options: ["At det sies hvorfor eksempelet ikke hører til nabokategorien", "At eksempelet er hentet fra en dagligdags situasjon", "At eksempelet er formulert som en fullstendig replikk i direkte tale", "At eksempelet er kortere enn to setninger"],
      explanation: "Entydighet er kravet: et eksempel som like gjerne kunne vært plassert i nabokategorien, viser ingenting. At det er en dagligdags replikk er et krav i tillegg, og lengden er likegyldig.",
    },
    {
      question: "Hvilken av feilene rammer FØR kandidaten har skrevet et ord?",
      options: ["Å velge bort den formelle verktøykassa i settlesingen", "Å bruke vage og upresise formuleringer i et formelt svar", "Å utelate egne eksempler i en implikaturoppgave", "Å behandle tematiske roller overfladisk i et ellers langt svar"],
      explanation: "Bortvalget skjer i planleggingsfasen og treffer en hel temablokk, ikke ett svar. De tre andre er alle feil inne i en tekst som allerede er i gang.",
    },
    {
      question: "Hvilken test skiller accomplishment fra achievement?",
      options: ["Om «holde på med» gir pågåendelesning eller forberedelseslesning", "Om «på X tid» kan settes inn i setningen", "Om setningen tåler tillegget «med vilje»", "Om verbfrasen har et avgrenset objekt"],
      explanation: "De to klassene deler både dynamikk og telisitet, og det eneste som skiller dem, er varigheten. «På X tid» gir telisitet, som begge har; «med vilje» hører til rolleanalysen; og et avgrenset objekt gir telisitet, ikke varighet.",
    },
    {
      question: "Hvorfor har blanding av de tre slutningstypene sin egen feilkode i stedet for å regnes som et parbytte?",
      options: ["De skilles med to tester i rekkefølge, ikke med én", "De opptrer i flere sett enn de øvrige parene", "De hører til tre helt ulike deler av pensumlitteraturen", "De har ingen felles test i det hele tatt"],
      explanation: "Trioen krever negasjonstesten først og kansellerbarhetstesten etterpå, og det er den todelte prosedyren som gjør den til sin egen kode. Frekvens og pensumplassering er ikke grunnen, og testene finnes svært vel.",
    },
    {
      question: "Hva er den riktige måten å behandle et ekte grensetilfelle på i et formelt svar?",
      options: ["Oppgi begge analysene, si hva testene gir, og velg", "Oppgi begge analysene og la spørsmålet om valg stå åpent", "Velg den vanligste analysen uten å nevne den konkurrerende", "Bytte til et annet eksempel som ikke er tvilsomt"],
      explanation: "Grensetilfellet skal behandles, ikke bare markeres — og et valg med begrunnelse er nettopp behandlingen. Å la spørsmålet stå åpent er slark, og på eksamen kan man verken bytte ut oppgavens eksempel eller fortie den konkurrerende analysen.",
    },
    {
      question: "Hva sier varsellampekortet at du skal gjøre de siste minuttene av en besvarelse?",
      options: ["Sjekke om hvert kategorinavn har en utskrevet test bak seg", "Skrive om innledningen slik at den peker framover mot konklusjonen", "Legge til en oppsummering av alt du har vist tidligere i svaret", "Telle hvor mange ord hele svaret er på"],
      explanation: "Kontrollen er tredelt: test bak hvert kategorinavn, eget eksempel per kategori, og alle instruksjonsverb krysset av. Innledninger, oppsummeringer og ordtelling gir ingen uttelling i dette faget.",
    },
    {
      question: "Hva er poenget med at utdragene i kapitlet er skrevet ryddig og selvsikkert?",
      options: ["Feilene ser slik ut i virkeligheten, og er derfor vanskelige å se innenfra", "Det gjør dem lettere å lese høyt", "Det viser hvordan et godt svar er formulert", "Det skjuler hvilken feilkode som gjelder"],
      explanation: "De gale utdragene er sjelden usanne — de er ufullstendige, og det er nettopp derfor ingenting føles galt mens man skriver. De er ikke modeller for gode svar, og hensikten er ikke å gjøre gjenkjenningen vanskeligere for vanskelighetens skyld.",
    },
  ],
  'ling1100-11-4': [
    {
      question: "Hva mangler i formuleringen «Setningen er telisk»?",
      options: ["Testen skrevet ut som en setning", "Angivelsen av tempus", "Den engelske fagtermen for telisitet", "Henvisningen til Vendler"],
      explanation: "En klassifisering uten utskrevet test er en påstand, ikke et resultat. Tempus er et eget krav som ikke hører til trekket, og verken engelsk term eller opphavsmann utgjør belegg.",
    },
    {
      question: "Hvilken av de tre grunnene til manglende volisjon gjelder for en sirkelsag som subjekt?",
      options: ["Redskap", "Naturkraft", "Ufrivillig utfører", "Stimulus"],
      explanation: "En sag er noe noen bruker, og setningen kan skrives om til «noen kappet planken med sirkelsaga». Naturkrefter som vind og uvær er en annen grunn, ufrivillige utførere er mennesker som kunne villet, og stimulus er en rolle, ikke en grunn.",
    },
    {
      question: "Hva er galt med å skrive at et argument «er» proto-agent?",
      options: ["Det gjør et gradert knippe om til en kategori", "Det utelater hvilken av de to proto-rollene som er sterkest", "Det blander proto-roller med tematiske roller", "Det forutsetter at argumentet står som subjekt"],
      explanation: "Apparatet ble innført nettopp fordi rollene ikke lar seg definere som kategorier; et argument har et antall egenskaper. De øvrige svarene beskriver andre feil som ikke følger av selve formuleringen.",
    },
    {
      question: "Hva skiller en opptelling av proto-rolle-egenskaper fra en avkryssing?",
      options: ["At det sies eksplisitt hvilke egenskaper som ikke telles, og hvorfor", "At egenskapene listes i nøyaktig den rekkefølgen Dowty selv oppgir dem", "At begge argumentene behandles i samme avsnitt", "At tallet oppgis før egenskapene navngis"],
      explanation: "De ikke-talte egenskapene er det som viser at hver enkelt er vurdert mot hva verbet entailer. Rekkefølge, avsnittsinndeling og plassering av tallet er formvalg uten betydning for om opptellingen er gjennomført.",
    },
    {
      question: "Hvorfor tas det billigste grepet først i en oppgraderingsmeny?",
      options: ["Fordi et halvferdig dyrt grep gir mindre enn et fullført billig", "Fordi de billige grepene alltid gir mest uttelling", "Fordi sensor leser deloppgavene i rekkefølge", "Fordi de dyre grepene sjelden er etterspurt i oppgaveteksten"],
      explanation: "Menyen er et prioriteringsverktøy under tidspress, og et påbegynt grep som ikke rekkes ferdig, gir lite. De dyre grepene gir ofte mest når de fullføres, og de er som regel nettopp det oppgaveteksten spør om.",
    },
    {
      question: "Hva er det som faktisk skiller slark-svaret fra det fullstendige svaret i dette kapitlet?",
      options: ["Belegget, ikke kategoriene", "Kategoriene, ikke belegget", "Lengden på innledningen", "Antall deloppgaver som er besvart"],
      explanation: "Nesten alle kategoriene i slark-svaret er riktige; det som mangler, er testene, begrunnelsene og opptellingen. Innledninger er ikke etterspurt, og begge svarene berører alle fire deloppgavene — det ene bare uten dokumentasjon.",
    },
  ],
  'ling1100-11-5': [
    {
      question: "Hva er den perlokusjonære handlingen?",
      options: ["Virkningen ytringen faktisk har på hørerne", "Den virkningen taleren ønsker å oppnå", "Handlingen taleren utfører i og med ytringen", "Selve det å ytre en meningsfull streng"],
      explanation: "Det perlokusjonære laget er den faktiske virkningen, og den kan utebli uten at handlingen mislyktes. Det taleren ønsker, er en intensjon og ikke et lag; handlingen som utføres i og med ytringen er den illokusjonære, og selve ytringen er den lokusjonære.",
    },
    {
      question: "Hva må være til stede for at en maksimebrudd skal gi en implikatur?",
      options: ["At bruddet er åpenlyst for begge parter", "At taleren sier noe usant", "At høreren stiller et oppfølgingsspørsmål", "At bruddet gjelder kvantitetsmaksimen"],
      explanation: "Håning er et åpenlyst brudd; brytes maksimen i skjul, er det løgn eller villedning, og ingen implikatur oppstår. Usannhet er bare relevant for kvalitetsmaksimen, alle fire maksimene kan hånes, og høreren trenger ikke si noe.",
    },
    {
      question: "Hva skiller et eget eksempel som dokumenterer, fra ett som bare illustrerer?",
      options: ["Setningen som sier hvorfor eksempelet hører til nettopp den kategorien", "At eksempelet er hentet fra en samtale man selv har hørt eller deltatt i", "At eksempelet står i direkte tale med anførselstegn", "At eksempelet er lengre enn én setning"],
      explanation: "Det er begrunnelsen som viser at kategorien er forstått og ikke bare gjenkjent — helst med en avvisning av nabokategorien. Hverken opprinnelse, tegnsetting eller lengde avgjør om eksempelet dokumenterer noe.",
    },
    {
      question: "Hvem sitt ansikt truer et direktiv?",
      options: ["Hørerens negative ansikt", "Talerens negative ansikt", "Hørerens positive ansikt", "Talerens positive ansikt"],
      explanation: "En anmodning legger beslag på hørerens handlingsrom, og negativt ansikt er nettopp ønsket om ubeskåret handlingsrom. Det er kommissiver som truer talerens eget negative ansikt, og beklagelser som truer talerens positive.",
    },
    {
      question: "Hva er det viktigste midtnivå-besvarelsen i dette kapitlet skal vise leseren?",
      options: ["Hvor mye som allerede er bra nok", "Hvor mange feil en typisk besvarelse inneholder", "Hvordan man skriver seg til toppkarakter", "At førsteårsspråk bør unngås på eksamen"],
      explanation: "Poenget er å gi et realistisk sammenligningspunkt der de fleste tingene ikke skal endres, og der bare to eller tre navngitte grep skiller. Den er hverken en feilkatalog, en oppskrift på toppkarakter eller en advarsel mot enkelt språk.",
    },
    {
      question: "Hva kjennetegner en skarp konklusjon i et drøftende ledd?",
      options: ["At en leser kan gjengi standpunktet i én setning", "At alle motargumenter er tilbakevist", "At den inneholder minst ett forbehold", "At den unngår å ta parti i en omstridt sak"],
      explanation: "Prøven er gjengivbarheten: går det ikke, er det ikke tatt stilling. Forbehold er et verktøy og ikke et krav, alle motargumenter kan ikke tilbakevises på tjuefem minutter, og å unngå å ta parti er nettopp det sjangeren ber deg la være.",
    },
  ],
  'ling1100-11-6': [
    {
      question: "Hvor mange besvarelser leverer du i et sett med fem temablokker à tre spørsmål?",
      options: ["Ti", "Femten", "Fem", "Tolv"],
      explanation: "Du svarer på nøyaktig to spørsmål i hver av de fem blokkene. Femten ville betydd at alle spørsmål besvares, noe som ikke gir ekstrapoeng, og fem ville vært ett per blokk.",
    },
    {
      question: "Hvor mye av de fire timene bør settes av til å lese settet og velge oppgaver?",
      options: ["Rundt tjue minutter i starten", "Rundt fem minutter, slik at skrivingen kommer i gang", "Rundt førti minutter, siden valget er avgjørende", "Ingenting, valget tas underveis"],
      explanation: "Tjue minutter i starten og tjue til gjennomlesing på slutten gir 200 minutter til ti besvarelser. Fem minutter er for lite til å disponere femten spørsmål, og førti tar en hel besvarelse.",
    },
    {
      question: "Hva er det avgjørende testspørsmålet for å velge BE framfor STAY i et konseptuelt tre?",
      options: ["Om setningen sier at tilstanden fortsatte gjennom et tidsrom", "Om det finnes en stedsfunksjon i setningen", "Om subjektet er levende eller livløst", "Om setningen står i presens eller preteritum"],
      explanation: "BE og STAY tar de samme argumentene, og bare varigheten skiller: STAY sier at tilstanden fortsatte, og gir derfor [Event]. Stedsfunksjonen finnes i begge, og hverken subjektets art eller tempus er relevant.",
    },
    {
      question: "Hva viser det at «Some of the seats were taken — in fact all of them were» ikke er selvmotsigende?",
      options: ["At slutningen «ikke alle» er en konversasjonell implikatur", "At slutningen «ikke alle» er en presupposisjon", "At setningen er logisk usann", "At kvantoren *some* er tvetydig mellom to helt ulike lesninger"],
      explanation: "Kansellerbarhet er kjennetegnet på en konversasjonell implikatur, her en skalar implikatur utledet via Q-prinsippet. En presupposisjon avdekkes med negasjonstesten, ikke med kansellering, og setningen er verken usann eller tvetydig.",
    },
    {
      question: "Hva må stå i et fullstendig svar om nedovergående posisjoner, ut over selve slutningen?",
      options: ["Forklaringen i mengdespråk av hvorfor retningen snur", "En liste over alle kjente nedovergående kontekster", "En fullstendig sannhetstabell for setningen med negasjonen i", "En henvisning til hvilken pensumbok begrepet står i"],
      explanation: "Poenget er innsikten: å utelukke hele overmengden er å utelukke hver eneste delmengde av den. En katalog hjelper til å finne kandidater, men besvarer ikke spørsmålet, og tabeller og referanser er ikke etterspurt.",
    },
  ],
  'ling1100-11-7': [
    {
      question: "Hva er det avgjørende oppslaget når du skal avgjøre om en relasjon er symmetrisk i en modell?",
      options: ["Å sjekke om det omvendte paret står i mengden for hvert par som står der", "Å telle hvor mange par mengden inneholder totalt", "Å sjekke om samtlige individer i domenet forekommer i minst ett av parene", "Å sjekke om noen individer står i par med seg selv"],
      explanation: "Symmetri krever at det omvendte paret finnes for hvert par som er der; ett brudd velter allpåstanden. Antall par, dekning av domenet og refleksive par er andre egenskaper ved relasjonen.",
    },
    {
      question: "Hvilken av de to scope-lesningene av «Every reviewer read a manuscript» er sterkest?",
      options: ["Den der eksistenskvantoren har videst virkefelt", "Den der allkvantoren har videst virkefelt", "De to er logisk likeverdige", "Det avhenger av hvor mange anmeldere som finnes"],
      explanation: "Lesningen der ett bestemt manuskript ble lest av alle, medfører at hver anmelder leste et manuskript, men ikke omvendt. De er derfor ikke likeverdige, og forholdet gjelder uansett hvor mange anmeldere det er.",
    },
    {
      question: "Hvorfor er $(p \\rightarrow q) \\land (q \\rightarrow p)$ ekvivalent med biimplikasjonen?",
      options: ["Konjunktene uttrykker «hvis» og «bare hvis» hver for seg", "Begge uttrykkene er sanne i nøyaktig én rad", "Implikasjon og biimplikasjon har samme sannhetstabell", "Konjunksjon og biimplikasjon er begge sanne når begge ledd er sanne"],
      explanation: "Venstre konjunkt gir den tilstrekkelige retningen og høyre den nødvendige, og til sammen er det nettopp «hvis og bare hvis». Begge uttrykkene er sanne i to rader, ikke én, og implikasjon og biimplikasjon har ulike tabeller.",
    },
    {
      question: "Hva gjør progressivt aspekt med Reichenbachs tre punkter?",
      options: ["Ingenting — plasseringen av punktene er den samme", "Det flytter hendelsestidspunktet nærmere taletidspunktet", "Det innfører et ekstra referansetidspunkt", "Det gjør referansetidspunktet sammenfallende med taletidspunktet"],
      explanation: "Progressiven sier at hendelsen betraktes innenfra som pågående, ikke hvor de tre punktene ligger — og det er nettopp derfor aspekt ikke er et tempus. Et ekstra referansepunkt er det pluskvamperfektum som gir.",
    },
    {
      question: "Hva må stå i et svar for at Horn-skalaen skal være forklart og ikke bare beskrevet?",
      options: ["Koblingen til Q-prinsippet, altså at høreren regner med at taleren ville sagt mer", "At leddene er ordnet fra sterkest til svakest", "At skalaen snur retning under negasjon", "At Horn reduserer Grices fire maksimer til to prinsipper"],
      explanation: "Uten Q-koblingen er skalaen en observasjon om ordforråd, ikke en mekanisme som gir implikaturer. Ordningen, oppførselen under negasjon og reduksjonen av maksimene er alle riktige opplysninger, men ingen av dem sier hvorfor slutningen oppstår.",
    },
  ],
  'ling1100-11-8': [
    {
      question: "Hva er fordelingskravet i det eldre valgformatet dette settet speiler?",
      options: ["Minst to svar fra hver av de to delene", "Nøyaktig to svar fra hver av de to delene", "Alle svar fra den delen du kan best", "Ingen fordeling — valget er helt fritt"],
      explanation: "Kravet er et minimum, ikke et eksakt antall: med fem svar totalt kan fordelingen bli tre og to, men aldri fire og én. Å samle alle svarene i én del bryter kravet, og valget er derfor ikke helt fritt.",
    },
    {
      question: "Hvor lang skrivetid gir fem besvarelser på fire timer, når lesing og gjennomlesing er trukket fra?",
      options: ["Rundt 40 minutter per svar", "Rundt 20 minutter per svar", "Rundt 48 minutter per svar", "Rundt 25 minutter per svar"],
      explanation: "Med 20 minutter til settlesing og 20 til gjennomlesing står 200 minutter igjen til fem svar. Det er dobbelt så mye som i temablokk-formatet, og forventningen til fyldighet er tilsvarende høyere.",
    },
    {
      question: "Hva skiller konverser fra reverser?",
      options: ["Konverser bytter deltakernes plasser, reverser snur handlingens retning", "Konverser gjelder verb, reverser gjelder substantiv", "Konverser har mellomtrinn, reverser har det ikke", "Konverser er negasjoner av hverandre, reverser er det ikke"],
      explanation: "Ved konverser beskriver de to uttrykkene samme situasjon med byttede argumenter; ved reverser går handlingen motsatt vei med deltakerne der de var. Ordklasse er irrelevant, mellomtrinn hører til graderbare antonymer, og ingen av de to typene er negasjoner.",
    },
    {
      question: "Hva presupponerer et WH-spørsmål som «Hvem tok med kaka?»",
      options: ["At noen tok med kaka", "At kaka ble tatt med av flere", "At taleren ikke selv tok med kaka", "At det finnes flere mulige svar"],
      explanation: "Spørsmålet ber om å få fylt ut en variabel i noe det allerede tar for gitt, nemlig at handlingen fant sted. At flere var involvert, hvem taleren er, og hvor mange svar som finnes, følger ikke av konstruksjonen.",
    },
    {
      question: "Hva er hovedforskjellen mellom Russells og Strawsons analyse av en bestemt beskrivelse uten referent?",
      options: ["Russell gjør eksistenskravet til en del av påstanden, Strawson til en forutsetning", "Russell mener setningen er sann, Strawson at den er usann", "Russell analyserer den som et egennavn, mens Strawson analyserer den som et kvantoruttrykk", "Russell mener beskrivelsen er tvetydig, Strawson at den er entydig"],
      explanation: "Hos Russell inngår eksistensen i det som hevdes, og setningen blir usann; hos Strawson er den en presupposisjon, og setningen får ingen sannhetsverdi. Det er Russell som gir kvantoranalysen, og ingen av dem mener setningen er sann.",
    },
  ],
  'ling1100-2-1': [
    {
      question: "Hva er et leksem?",
      options: ["En ordenhet i ordforrådet, med all sin bøyning.", "En enkelt ordform slik den står i en konkret setning.", "Et ord som har mer enn én betydning.", "Den minste betydningsbærende delen et ord kan deles i."],
      explanation: "Riktig er oppslagsenheten: *sykkel*, *sykkelen* og *sykler* er ett leksem. Svaret om enkeltform tester nettopp den forvekslingen, og skillet er nødvendig for å formulere hva som skiller homonymi fra polysemi. De to øvrige beskriver flertydighet og morfemer.",
    },
    {
      question: "Hva kjennetegner homonymi?",
      options: ["To ulike leksemer har samme form, med urelaterte betydninger.", "Ett leksem har flere beslektede betydninger.", "To leksemer har samme betydning, men ulik form.", "Ett leksem har fått en ny betydning gjennom metaforisk overføring."],
      explanation: "Riktig er to leksemer med tilfeldig lik form, som *ball*. Svaret om ett leksem med beslektede betydninger er polysemi, den nærmeste nabokategorien. Svaret om samme betydning og ulik form er synonymi, og det siste beskriver mekanismen bak polysemi.",
    },
    {
      question: "Hva kjennetegner polysemi?",
      options: ["Ett leksem har flere beslektede betydninger.", "To ulike leksemer har tilfeldigvis fått samme form.", "Ett og samme ord kan uttales på to ulike måter.", "To ord kan byttes ut med hverandre i alle sammenhenger."],
      explanation: "Riktig er ett leksem med beslektede betydninger, som *hode* om kroppsdelen og om den øverste delen av en spiker. Svaret om to leksemer med lik form er homonymi. De to øvrige beskriver uttalevariasjon og absolutt synonymi, som er andre fenomener.",
    },
    {
      question: "Hva er homofoni?",
      options: ["At to leksemer uttales likt, men ikke nødvendigvis skrives likt.", "At to leksemer skrives likt, men ikke nødvendigvis uttales likt.", "At ett leksem har to uttaler i ulike dialekter.", "At to leksemer har beslektede betydninger."],
      explanation: "Riktig er likhet i lydform, som i *vær* og *hver*. Svaret om likhet i skrift er homografi, og de to er lette å bytte om. Homofoner er dessuten usynlige på papiret, og motmiddelet er å si ordparet høyt før du klassifiserer.",
    },
    {
      question: "Hvilken mekanisme ligger bak at *foten* av et fjell heter det den gjør?",
      options: ["Metaforisk utvidelse, altså overføring ved likhet.", "Metonymisk utvidelse, altså overføring ved sammenheng.", "Homonymi, siden de to betydningene er historisk urelaterte.", "Hyponymi, siden fjellfoten er en type fot."],
      explanation: "Riktig er metafor: begge er den nederste delen av noe som strekker seg oppover, og likheten bærer betydningen over. Svaret om metonymi tester den nærmeste forvekslingen — den bygger på at ting henger sammen, ikke på at de ligner. De to øvrige er andre relasjoner helt.",
    },
    {
      question: "Hvilken mekanisme ligger bak at *skolen* kan bety både bygningen og elevene?",
      options: ["Metonymisk utvidelse, altså overføring ved sammenheng.", "Metaforisk utvidelse, altså overføring ved likhet.", "Homonymi, siden betydningene er urelaterte.", "Meronymi, siden elevene er en del av skolen."],
      explanation: "Riktig er metonymi: bygningen og elevene ligner ikke hverandre, men hører til samme sammenheng. Svaret om metafor tester den nærmeste forvekslingen. Svaret om meronymi blander sammen en relasjon mellom leksemer med en mekanisme for betydningsutvidelse.",
    },
    {
      question: "Hvorfor er etymologitesten et dårlig arbeidsverktøy på eksamen?",
      options: ["Fordi eksamen er uten hjelpemidler og opphavet ikke kan slås opp.", "Fordi etymologi ikke sier noe om forholdet mellom dagens betydninger.", "Fordi de fleste norske ord har ukjent opprinnelse.", "Fordi testen bare gjelder for lånord."],
      explanation: "Riktig er den praktiske hindringen: testen er faglig gyldig, men ubrukelig når du ikke kan slå opp. Bruk relatert-sans-testen til å avgjøre, og nevn opphavet bare der du faktisk vet det. De tre øvrige avviser testen på faglig grunnlag, og det er ikke riktig.",
    },
    {
      question: "Hva viser zeugma-testen?",
      options: ["Om ordet har to atskilte betydninger eller ett vidt bruksområde.", "Om relasjonen er homonymi eller polysemi.", "Om to ord er synonymer i en gitt sammenheng.", "Hvilken av to betydninger som er den historisk opprinnelige av dem."],
      explanation: "Riktig er skillet mellom atskilte betydninger og ett vidt bruksområde. Svaret om homonymi mot polysemi er den vanligste misforståelsen: både *ball* og *ta* gir zeugma-effekt, så testen skiller dem ikke. De to øvrige gjelder synonymi og etymologi, som testen ikke berører.",
    },
    {
      question: "Hvorfor er absolutt synonymi sjelden?",
      options: ["Fordi to ord som lever side om side, som regel skiller lag.", "Fordi språk ikke tillater at to ord har nøyaktig samme betydning.", "Fordi ordbøker bare fører opp én form per betydning.", "Fordi synonymi bare finnes på tvers av språk."],
      explanation: "Riktig er tendensen til at ordene får ulik stilverdi, styrke eller faste forbindelser. Svaret om at språk ikke tillater det, er en for sterk formulering av den samme tendensen. De to øvrige gjør fenomenet til et spørsmål om leksikografi eller om oversettelse.",
    },
    {
      question: "Hva må substitusjonstesten for synonymi gjøres på for å bevise noe?",
      options: ["Flere ulike setninger, valgt så ulike som mulig.", "Én setning, så lenge byttet fungerer der.", "En setning uten indeksikalske uttrykk.", "En setning der begge ordene allerede forekommer."],
      explanation: "Riktig er flere og ulike setninger: det er sammenhengene der byttet ikke fungerer, som avslører at synonymien er delvis. Svaret om én setning tester nettopp den snarveien som gir feil svar. De to øvrige stiller krav som ikke har noe med testen å gjøre.",
    },
    {
      question: "Hvilken formel tester hyponymi?",
      options: ["«En X er en type Y».", "«En X er en del av en Y».", "«X betyr det samme som Y».", "«X er det motsatte av Y»."],
      explanation: "Riktig er type-formelen. Del-formelen tester meronymi, og det er den nærmeste nabokategorien — kjør begge og vis at bare den ene fungerer. De to øvrige tester synonymi og antonymi, som er andre relasjoner.",
    },
    {
      question: "Hva er forholdet mellom *blomst* og *rose*?",
      options: ["*Blomst* er hyperonym, *rose* er hyponym.", "*Blomst* er hyponym, *rose* er hyperonym.", "*Blomst* er holonym, *rose* er meronym.", "De to er kohyponymer under *plante*."],
      explanation: "Riktig er at det overordnede ordet er hyperonymet. Det omvendte svaret tester at retningen faktisk må skrives ut i besvarelsen. Svaret med holonym og meronym bruker del-helhet-terminologien på et type-forhold, og det siste ville krevd at ingen av dem var overordnet den andre.",
    },
    {
      question: "Hva er kohyponymer?",
      options: ["Leksemer med samme nærmeste overordnede ord.", "Leksemer som betyr omtrent det samme i alle sammenhenger.", "Leksemer som betegner deler av en og samme helhet.", "Leksemer som har samme form, men ulik betydning."],
      explanation: "Riktig er søsken i hierarkiet, som *rose* og *tulipan* under *blomst*, og de er typisk uforenlige. Du møter dem igjen som antonymitypen taksonomiske søstre. De tre øvrige beskriver synonymi, meronymi og homonymi.",
    },
    {
      question: "Hvilken egenskap har hyponymi som meronymi ikke har på samme måte?",
      options: ["Transitivitet.", "Retning.", "At relasjonen kan testes med en formel.", "At relasjonen gjelder mellom leksemer."],
      explanation: "Riktig er transitivitet: er en rose en type blomst, og en blomst en type plante, er en rose en type plante — uten unntak. Meronymi arves ikke på tvers av ulike typer del-forhold. De tre øvrige gjelder for begge relasjonene, og skiller dem derfor ikke.",
    },
    {
      question: "Hva er forholdet mellom *side* og *bok*?",
      options: ["*Side* er meronym, *bok* er holonym.", "*Side* er hyponym, *bok* er hyperonym.", "*Side* er holonym, *bok* er meronym.", "De to er kohyponymer."],
      explanation: "Riktig er at «En side er en del av en bok» fungerer mens «En side er en type bok» ikke gjør det. Svaret med hyponym tester den vanligste forvekslingen. Det tredje svaret har riktig relasjon, men snudd retning — og retningen er en del av svaret.",
    },
    {
      question: "Hvilken kontroll bekrefter at en relasjon er hyponymi og ikke meronymi?",
      options: ["At egenskapene arves fra det overordnede ordet.", "At begge ordene tilhører samme ordklasse.", "At det ene ordet er lengre enn det andre.", "At de to ordene forekommer i samme setning."],
      explanation: "Riktig er arv: alt som gjelder for blomster, gjelder for roser, men det som gjelder for sykler, gjelder ikke for hjul. Svaret om ordklasse er sant for mange par uten å skille relasjonene. De to øvrige er formelle trekk uten faglig innhold.",
    },
    {
      question: "Hva er et semantisk felt?",
      options: ["En gruppe leksemer som dekker et sammenhengende betydningsområde.", "Et fagområde med sin egen terminologi.", "Alle betydningene ett og samme ord kan ha i ulike sammenhenger og fag.", "Mengden av ting et uttrykk gjelder for."],
      explanation: "Riktig er gruppen av ord som avgrenser hverandre gjensidig, som fargeordene eller temperaturordene. Å plassere et ordpar i feltet er ofte det raskeste første grepet i en klassifisering. Svaret om alle betydninger til ett ord beskriver polysemi, og det siste beskriver ekstensjon.",
    },
    {
      question: "Hva må et fullstendig svar inneholde i en klassifiseringsoppgave?",
      options: ["Relasjonen, testen kjørt på ordene, og resultatet.", "Relasjonen og den engelske termen for den.", "Relasjonen og et illustrerende eksempel fra pensumboka.", "Relasjonen gjentatt i en kort oppsummering til slutt."],
      explanation: "Riktig er kategori, test og resultat — det er testen som skiller den som har analysert fra den som har gjettet. Svaret med engelsk term tester troen på at fagspråk erstatter begrunnelse. De to øvrige legger til noe som ikke er etterspurt og lar begrunnelsen stå ubesvart.",
    },
  ],
  'ling1100-2-2': [
    {
      question: "Hvor mange typer antonymi opererer emnet med?",
      options: ["Fem.", "Tre.", "Fire.", "Sju."],
      explanation: "Riktig er fem: komplementære, graderbare, konverser, reverser og taksonomiske søstre. Antallet er verdt å huske fordi oppgaven ofte ber om ett eget ordpar per type, og da er antallet et tellbart krav. Å levere fire par er et ufullstendig svar.",
    },
    {
      question: "Hva kjennetegner komplementære antonymer?",
      options: ["Negasjonen av det ene medfører det andre, begge veier.", "Ordene markerer hver sin ende av en skala med mellomtrinn imellom.", "Ordene beskriver det samme forholdet sett fra hver sin side.", "Ordene ligger på samme nivå i den samme taksonomien og utelukker hverandre."],
      explanation: "Riktig er den toveis slutningen: er noe ikke levende, er det dødt, og motsatt. Svaret om skala beskriver graderbare antonymer, svaret om to sider beskriver konverser, og det siste beskriver taksonomiske søstre. Alle fire er antonymityper, og det er nettopp derfor testen må kjøres.",
    },
    {
      question: "Hva viser negasjonstesten på *varm* og *kald*?",
      options: ["At slutningen svikter i begge retninger.", "At slutningen holder i begge retninger.", "At slutningen holder bare den ene veien.", "At ordene ikke tilhører samme semantiske felt."],
      explanation: "Riktig er at den svikter begge veier: vannet kan være lunkent. Svaret om at den holder, ville gjort paret komplementært, og det er nettopp den forvekslingen testen finnes for å hindre. Det siste svaret er galt fordi begge ordene hører til temperaturfeltet.",
    },
    {
      question: "Hva kjennetegner graderbare antonymer?",
      options: ["Ordene tåler komparativ og gradsadverb, og det finnes et mellomfelt.", "Negasjonen av det ene gir det andre uten unntak.", "Ordene beskriver to handlinger som opphever hverandre.", "Ordene har samme nærmeste overordnede ord."],
      explanation: "Riktig er graderbarheten og mellomfeltet. Svaret om negasjonen beskriver komplementære par, svaret om handlinger beskriver reverser, og det siste beskriver taksonomiske søstre. De tre er nettopp de nabotypene et fullstendig svar skal utelukke.",
    },
    {
      question: "Hva viser komparativtesten ut over at et par er graderbart?",
      options: ["At slutningen fra det ene ordet til det andre aldri er gyldig.", "At det ene ordet er belagt tidligere i språkhistorien enn det andre.", "At ordene alltid kan byttes ut med hverandre uten tap av innhold.", "At paret hører til et lukket semantisk felt med et fast antall medlemmer."],
      explanation: "Riktig er at komparativen bare sammenlikner: at kaffen er varmere enn teen, sier ingenting om at noen av dem er varme. Begge kan være iskalde. De tre øvrige er påstander testen ikke gir grunnlag for, og det første av dem gjør en historisk påstand ut av en logisk test.",
    },
    {
      question: "Hva tester mellomtrinn-testen?",
      options: ["Om formuleringen «verken A eller B» er en normal beskrivelse.", "Om ordene kan settes i komparativ.", "Om det ene ordet opphever virkningen av handlingen det andre uttrykker.", "Om ordene har det samme overordnede ordet over seg i taksonomien."],
      explanation: "Riktig er om det finnes et mellomfelt: «verken varmt eller kaldt» er normalt, «verken levende eller dødt» er det ikke. Komparativ er en annen test for den samme egenskapen. De to øvrige tester reverser og taksonomiske søstre.",
    },
    {
      question: "Hva er den umarkerte polen i paret *stor* og *liten*?",
      options: ["*Stor*, siden «Hvor stor er den?» er nøytralt.", "*Liten*, siden det er det klart minst brukte ordet i paret.", "Ingen av dem, siden begge ordene lar seg gradere med gradsadverb.", "Begge, siden paret er symmetrisk og ingen av ordene er mer nøytralt enn det andre."],
      explanation: "Riktig er *stor*: spørsmålet kan stilles om hva som helst uten at det ligger noe i det, og substantivavledningen er *størrelse*. Svaret om at ingen er umarkert, tester troen på at graderbarhet utelukker markerthet; det er tvert imot bare graderbare par som har en umarkert pol.",
    },
    {
      question: "Hva innebærer standardavhengighet hos graderbare adjektiv?",
      options: ["Standarden varierer med hvilken klasse man sammenligner innenfor.", "Ordet betyr noe ulikt i ulike dialekter.", "Ordet krever at man oppgir en måleenhet.", "Ordet kan bare brukes om fysiske gjenstander."],
      explanation: "Riktig er at en stor mus er langt mindre enn en liten elefant, uten at ordet har endret betydning. Det er også forklaringen på hvorfor negasjonstesten svikter for slike par. De tre øvrige gjør fenomenet til et spørsmål om dialekt, måling eller bruksområde.",
    },
    {
      question: "Hva kjennetegner konverser?",
      options: ["De beskriver samme forhold med byttede argumenter, sant samtidig.", "De beskriver to handlinger som hver fører tilbake til utgangspunktet.", "De deler et semantisk felt i nøyaktig to deler, uten mellomrom imellom.", "De ligger på samme nivå i en taksonomi."],
      explanation: "Riktig er perspektivbyttet: «Kari solgte til Ola» og «Ola kjøpte av Kari» beskriver samme hendelse. Svaret om å føre tilbake til utgangspunktet er reverser, som er den nærmeste forvekslingen. De to øvrige beskriver komplementære par og taksonomiske søstre.",
    },
    {
      question: "Hvilken test avgjør om et par er konverser?",
      options: ["Argumentbyttetesten.", "Negasjonstesten.", "Retningstesten.", "Taksonominivå-testen."],
      explanation: "Riktig er å bytte om argumentene og sette inn det andre ordet, og se om setningene beskriver samme situasjon. Negasjonstesten avgjør komplementaritet, retningstesten avgjør reverser, og taksonominivå-testen avgjør søstre. Alle fire er tester i dette kapitlet.",
    },
    {
      question: "Hva er parallellen mellom konverser og aktiv og passiv?",
      options: ["Begge lar samme situasjon beskrives med byttede ledd.", "Begge krever at ordene tåler komparativ.", "Begge gjelder bare for verb som uttrykker en handling, ikke for tilstandsverb.", "Begge forutsetter at det finnes et mellomtrinn på en skala."],
      explanation: "Riktig er at grammatikken gjør det samme arbeidet uten å bytte ord. Merk grensen: aktiv og passiv er ikke antonymer, siden det er samme leksem i to former. Svaret om handlingsverb er galt fordi også tilstandsord som *eie* og *tilhøre* kan være konverser.",
    },
    {
      question: "Hva kjennetegner reverser?",
      options: ["Den ene handlingen fører tilbake til utgangstilstanden.", "De to setningene er begge sanne om ett og samme øyeblikk i tid.", "Ordene tåler både komparativ og gradsadverb som *ganske* og *svært*.", "Negasjonen av det ene gir det andre."],
      explanation: "Riktig er at handlingene går i hver sin retning og opphever hverandre. Svaret om samme øyeblikk er nettopp kjennetegnet på konverser, og det er den testen som skiller de to. De to øvrige beskriver graderbare og komplementære par.",
    },
    {
      question: "Hvilket spørsmål skiller konverser fra reverser?",
      options: ["Om de to setningene kan være sanne om samme øyeblikk.", "Om ordene har en partikkel eller et prefiks.", "Om ordene er verb eller adjektiv.", "Om ordene hører til samme semantiske felt."],
      explanation: "Riktig er samtidighetsspørsmålet. Svaret om partikkel tester en nyttig, men upålitelig indikator: *låne ut* og *låne* ser ut som partikkelverb og er likevel konverser. De to øvrige skiller ikke, siden begge typer typisk er verb i samme felt.",
    },
    {
      question: "Hvordan lager norsk typisk reverser?",
      options: ["Med en partikkel som *opp*, *ut*, *av* eller *fra*, eller et prefiks.", "Med prefikset *u-* satt foran grunnordet, slik som i *gift* og *ugift*.", "Ved å bytte ut vokalen i stammen.", "Ved å sette verbet i passiv form."],
      explanation: "Riktig er partikler og prefikser som i *knyte opp* og *demontere*. Svaret med *u-* tester en nærliggende felle: det prefikset lager typisk komplementære par som *gift* og *ugift*, ikke reverser. De to øvrige beskriver mønstre som ikke brukes til dette.",
    },
    {
      question: "Hva kjennetegner taksonomiske søstre?",
      options: ["De ligger på samme nivå og utelukker hverandre, uten å dekke feltet.", "De deler feltet mellom seg i nøyaktig to deler, uten noe mellomrom imellom.", "De beskriver det samme forholdet sett fra hver av de to deltakernes side.", "De markerer hver sin ende av en skala."],
      explanation: "Riktig er at det finnes flere jamstilte alternativer, som mandag og tirsdag blant sju dager. Svaret om å dele feltet i to beskriver komplementære par, og det er den viktigste kontrasten. De to øvrige beskriver konverser og graderbare par.",
    },
    {
      question: "Hvorfor svikter negasjonstesten for *rød* og *blå*?",
      options: ["Fordi det finnes flere jamstilte alternativer på samme nivå.", "Fordi det finnes et mellomtrinn mellom de to.", "Fordi ordene tåler komparativ.", "Fordi de to ordene ikke hører til det samme semantiske feltet."],
      explanation: "Riktig er at noe kan være grønt eller gult. Svaret om mellomtrinn er den avgjørende forvekslingen: det ville gjort paret graderbart, og et svar som ikke sier hvilken av de to grunnene som gjelder, har ikke skilt typene. Begge ordene hører dessuten til fargefeltet.",
    },
    {
      question: "Hva er et syklisk sett?",
      options: ["Et sett med fast, gjentakende rekkefølge, som ukedagene.", "Et sett der medlemmene kan byttes ut med hverandre.", "Et sett med nøyaktig to medlemmer.", "Et sett som stadig får nye medlemmer."],
      explanation: "Riktig er den faste rekkefølgen uten begynnelse eller slutt. Svaret om nye medlemmer beskriver et åpent, ikke-syklisk sett som fargeordene. De to øvrige beskriver synonymi og binær opposisjon, som er andre forhold helt.",
    },
    {
      question: "Hva er første spørsmål i beslutningsprosedyren for antonymityper?",
      options: ["Om ordene har to argumenter som kan bytte plass.", "Om negasjonen av det ene gir det andre.", "Om ordene tåler både komparativ og gradsadverb i bruk.", "Om ordene har samme overordnede ord."],
      explanation: "Riktig er argumentbyttespørsmålet, som luker ut konverser først. Rekkefølgen er valgt for fart: de relasjonelle parene er de letteste å feilklassifisere. De tre øvrige er senere trinn i den samme prosedyren, og de hviler alle på negasjonstesten og graderbarheten.",
    },
    {
      question: "Hva bør du gjøre når et ordpar tilhører ulike typer i ulike sammenhenger?",
      options: ["Oppgi hvilken lesning du legger til grunn, og kjøre testen innenfor den.", "Velge den typen som forekommer hyppigst i det øvrige eksamensmaterialet.", "Oppgi begge typene uten å velge mellom dem.", "Hoppe over paret og besvare de øvrige."],
      explanation: "Riktig er å gjøre lesningen eksplisitt — det er ikke å vike unna, men å vise hva klassifiseringen hviler på. Svaret om å oppgi begge uten å velge, er nettopp den slarken oppgavetypen ikke tåler. Har oppgaven selv oppgitt sammenhengen, skal du bruke den.",
    },
    {
      question: "Hvorfor er *åpne* og *lukke* reverser mens *åpen* og *lukket* er komplementære?",
      options: ["Fordi det ene paret betegner handlinger og det andre tilstander.", "Fordi verb aldri kan være komplementære antonymer.", "Fordi adjektiv alltid er graderbare.", "Fordi de to ordparene hører hjemme i to helt ulike semantiske felt."],
      explanation: "Riktig er skillet mellom handling og tilstand: handlingene går i hver sin retning, mens tilstandene deler feltet i to. Dette er en vanlig kilde til feil klassifisering, fordi kandidaten leser feil ordform. De tre øvrige er for kategoriske påstander om ordklasser og felt.",
    },
  ],
  'ling1100-2-3': [
    {
      question: "Hva er komponentanalyse?",
      options: ["En metode som bryter betydningen ned i mindre deler som gjentar seg på tvers av ordforrådet.", "En metode som ordner ordene i et felt i hierarkier etter hvor generelle betydningene er.", "En metode som måler hvor ofte et ord forekommer i ulike sammenhenger.", "En metode som sporer opphavet til et ord tilbake i språkhistorien."],
      explanation: "Riktig er nedbrytingen i gjenbrukbare bestanddeler, altså semantiske trekk. Svaret om hierarkier beskriver taksonomier og hyponymi; svaret om forekomst beskriver frekvensanalyse; svaret om opphav beskriver etymologi. Det avgjørende for komponentanalyse er at trekkene gjenbrukes på tvers av ordene i feltet.",
    },
    {
      question: "Hvordan skrives et semantisk trekk?",
      options: ["Med pluss eller minus foran trekknavnet i store bokstaver, i hakeparenteser", "Med trekknavnet i kursiv og uten fortegn, mellom vinkelparenteser som peker utover", "Med trekknavnet i små bokstaver, i enkle anførselstegn.", "Med trekknavnet i store bokstaver, i skråstreker."],
      explanation: "Riktig er formen med fortegn, store bokstaver og hakeparenteser. Vinkelparenteser er i denne boka reservert for ordnede par og skalaer, skråstreker for fonemisk form, og enkle anførselstegn for betydningsangivelser og engelske fagtermer. Formen er en del av det som vurderes.",
    },
    {
      question: "Hva betyr en tom celle i en trekkmatrise?",
      options: ["At ordet er underspesifisert og ikke skiller på den dimensjonen.", "At ordet har den negative verdien på dimensjonen og betegner en hunn", "At analytikeren ikke har rukket å fylle ut cellen.", "At ordet har begge verdier samtidig, altså er flertydig."],
      explanation: "Riktig er underspesifisering: ordet brukes uavhengig av dimensjonen. Svaret om negativ verdi er nettopp forvekslingen som gjør at føll blir påstått å være hunndyr. Svaret om begge verdier ville gjort ordet flertydig, og det er også en påstand som ikke stemmer.",
    },
    {
      question: "Hva vil det si at en komponentanalyse er økonomisk?",
      options: ["At den bruker færrest mulig trekk og ikke gir verdi der ordet ikke skiller", "At den bruker så få ord som mulig i selve forklaringsteksten som følger tabellen", "At den bare bruker trekk som finnes i alle verdens språk.", "At den kan settes opp uten å slå opp i noe oppslagsverk."],
      explanation: "Riktig er de to kravene: minimalt antall trekk, og ingen unødvendig spesifisering per ord. Svaret om kort tekst forveksler økonomi med korthet — økonomi handler om representasjonen, ikke om språkbruken. Svaret om universelle trekk beskriver programmet for semantiske primitiver, som er noe annet.",
    },
    {
      question: "Hvordan kontrollerer du at et trekk er nødvendig i matrisen?",
      options: ["Ved å fjerne det og se om to ord da får identiske rader.", "Ved å sjekke om trekket finnes i ordbokas forklaring av ordet.", "Ved å telle hvor mange av ordene i feltet som har plussverdi.", "Ved å prøve om trekket kan settes i komparativ uten å bli rart."],
      explanation: "Riktig er strykekontrollen: faller to rader sammen, gjorde trekket en jobb. Svaret om ordboka blander trekkanalyse og ordboksforklaring, som er nettopp den forvekslingen kapitlet advarer mot. Komparativtesten hører til antonymikapitlet og sier ingenting om trekkets nødvendighet.",
    },
    {
      question: "Hva er en redundansregel?",
      options: ["En regel om at ett trekk følger av et annet.", "En regel som forbyr at ett og samme trekk brukes i to forskjellige ordfelt", "En regel som sier at hvert ord må ha minst tre trekk.", "En regel som fastsetter rekkefølgen trekkene skal skrives i."],
      explanation: "Riktig er den automatiske følgen: alt som er menneske, er også animat, og da trenger ikke animat-trekket skrives i hver rad. Regelen er samme forhold som hyponymi, sett fra trekksiden. De andre svarene beskriver regler som ikke finnes i metoden.",
    },
    {
      question: "Hvordan ser hyponymi ut uttrykt i semantiske trekk?",
      options: ["Hyponymet har alle hyperonymets trekk pluss minst ett til.", "Hyperonymet har alle hyponymets trekk pluss minst ett til.", "De to har like mange trekk, men motsatt verdi på ett av dem.", "De to deler alle trekk unntatt ett, som har flere enn to verdier."],
      explanation: "Riktig er at hyponymet har flest trekk: flere trekk gir snevrere betydning, siden hvert trekk legger på et krav. Svaret med motsatt verdi på ett trekk beskriver komplementære antonymer, og svaret om ett trekk med flere verdier beskriver kohyponymer, altså taksonomiske søstre.",
    },
    {
      question: "Hvilken antonymitype lar seg dårligst uttrykke med binære trekk?",
      options: ["Graderbare antonymer.", "Komplementære antonymer.", "Konverser, altså perspektivpar.", "Taksonomiske søstre."],
      explanation: "Riktig er de graderbare: de markerer hver sin ende av en skala, og en skala kan ikke gjengis med to verdier. Komplementære par passer derimot perfekt, siden de skiller seg på ett binært trekk. Dette er en av metodens klareste grenser og er verdt å nevne i et svar.",
    },
    {
      question: "Hva er en semantisk primitiv ment å være?",
      options: ["En betydningskomponent som ikke selv lar seg brytes ned i mindre bestanddeler.", "Et ord som finnes med omtrent samme betydning i alle kjente språk i verden", "Det eldste kjente leddet i et ords historie.", "Den betydningen et barn lærer først av et flertydig ord."],
      explanation: "Riktig er udeleligheten. Svaret om ord i alle språk beskriver et beslektet, men annet krav, og det gjelder ord, ikke komponenter. De to siste svarene beskriver etymologi og tilegnelse, som er andre spørsmål. Merk at primitivene er et program, ikke en ferdig liste alle er enige om.",
    },
    {
      question: "I hvilke ordfelt fungerer komponentanalyse best?",
      options: ["I lukkede felt med få gjentakende dimensjoner, som slektskapsord.", "I åpne felt med svært mange medlemmer, som artefakter", "I felt der ordene er graderbare, som temperatur og størrelse.", "I felt der medlemskapet er et gradsspørsmål, som møbler."],
      explanation: "Riktig er de lukkede feltene: slektskapsord, husdyrord og tallord har få, klare dimensjoner som gjenbrukes. De tre andre svarene beskriver nettopp de tilfellene der metoden svikter — åpne felt mangler naturlige dimensjoner, graderbare felt krever skalaer, og uskarpe grenser tåler ikke pluss og minus.",
    },
    {
      question: "Hva er semantisk universalitet en påstand om?",
      options: ["At variasjonen mellom språkenes betydningsstrukturer har grenser", "At alle språk i verden har omtrent like store og like inndelte ordforråd", "At alle språk til slutt vil utvikle de samme ordene.", "At oversettelse alltid gir et fullstendig likeverdig uttrykk i målspråket."],
      explanation: "Riktig er at variasjonen er innrammet av noe felles. Universalitet påstår ikke at ordforrådene er like store eller identiske, og heller ikke at oversettelse er tapsfri — bare at det finnes felles strukturer som gjør oversettelse mulig i det hele tatt.",
    },
    {
      question: "Hva skiller den sterke fra den svake versjonen av relativitetstesen?",
      options: ["Den sterke sier at språket bestemmer tenkningen, den svake at det påvirker den", "Den sterke gjelder ordforrådet i språket, den svake gjelder bare grammatikken i det", "Den sterke gjelder voksne, den svake gjelder barn som lærer språk.", "Den sterke er testet empirisk, den svake er et rent filosofisk krav."],
      explanation: "Riktig er skillet mellom å bestemme og å påvirke. Den sterke versjonen, språklig determinisme, er i dag i liten grad forsvart; den svake står langt sterkere. De andre svarene innfører skiller som ikke finnes i tesen, og som ville gjort den umulig å drøfte.",
    },
    {
      question: "Hva fant Berlin og Kay i undersøkelsen av grunnleggende fargetermer?",
      options: ["At antallet varierer, men rekkefølgen er fast.", "At antallet grunntermer var omtrent likt i alle de språkene som ble undersøkt", "At rekkefølgen varierer fritt fra språk til språk.", "At språk med få termer også oppfatter færre fargenyanser."],
      explanation: "Riktig er kombinasjonen: variasjon i antall, men fast rekkefølge. Svaret om likt antall er feil, for variasjonen var reell. Svaret om fri rekkefølge er selve motsatsen til funnet. Det siste svaret er en slutning studien ikke gjorde, og en typisk overtolkning i retning sterk relativitet.",
    },
    {
      question: "Hvilken vei trekker Berlin og Kays funn i debatten?",
      options: ["Mot universalitet, siden variasjonen følger ett felles mønster.", "Mot relativitet, siden antallet termer varierer så mye.", "Ingen vei, siden studien bare gjaldt farger og ikke andre felt.", "Mot tankespråk-hypotesen, siden fargeord er medfødte."],
      explanation: "Riktig er retningen mot universalitet: et felles mønster i et fysisk grenseløst felt er vanskelig å forklare uten noe felles i menneskelig fargeoppfatning. Variasjonen i antall er reell og taler for svak relativitet, men det er rekkefølgen som er det slående funnet. Ingen hevder at fargeord er medfødte.",
    },
    {
      question: "Hva er et implikasjonshierarki?",
      options: ["Et mønster der det å ha ett element medfører at man har alle elementene før det.", "En rangering av ordene i et felt etter hvor ofte de brukes i vanlig dagligtale", "En liste over hvilke ord som er eldst i et språk.", "En regel om hvilke ord som må læres i hvilken rekkefølge."],
      explanation: "Riktig er implikasjonen: et språk med grunnterm for blått har også termer for svart, hvitt, rødt, grønt og gult. Svarene om frekvens og alder beskriver andre slags rangeringer. Merk at hierarkiet gjelder språksystemer, ikke rekkefølgen det enkelte barnet lærer ordene i.",
    },
    {
      question: "Hvorfor kreves det kriterier for hva som teller som en grunnleggende fargeterm?",
      options: ["Fordi ethvert språk ellers kunne lage uendelig mange fargeuttrykk", "Fordi noen av språkene i undersøkelsen manglet fargeord", "Fordi fargeord skifter betydning raskere enn andre ord.", "Fordi kriteriene avgjør hvilke farger folk klarer å skille."],
      explanation: "Riktig er at sammenligningen ellers ville vært meningsløs: sammensetninger og lånte varenavn kan lages i det uendelige. Kriteriene krever ett morfem, ikke underkategori, brukbar om alle slags ting og allment brukt. Kriteriene sier ingenting om hva folk klarer å skille perseptuelt.",
    },
  ],
  'ling1100-2-4': [
    {
      question: "Hva er det første trinnet i klassifiseringsalgoritmen?",
      options: ["Feltkontrollen: ligger ordene i samme semantiske felt?", "Å velge den typen som virker mest sannsynlig ved første blikk", "Å slå fast hvilken av de fem antonymitypene som er vanligst", "Å skrive en kort innledning om hva antonymi er for noe"],
      explanation: "Riktig er feltkontrollen. Den tar fem sekunder og fanger de parene som ikke skal klassifiseres i det hele tatt. Å gjette typen først er nettopp det algoritmen finnes for å hindre, og en innledning om antonymi er ikke spurt om og spiser tiden du trenger til slutt.",
    },
    {
      question: "Hvilken rekkefølge skal svaret ditt ha?",
      options: ["Testen skrevet ut først, kategorinavnet etterpå.", "Kategorinavnet først, deretter testen som bekrefter det", "Kategorinavnet alene, siden testen regnes som underforstått", "Egne eksempler først, deretter kategorinavn og til slutt testen"],
      explanation: "Riktig er testen først. Da viser svaret at kategorien er utledet av materialet og ikke gjenkjent. Rekkefølgen i svaret er dermed motsatt av rekkefølgen du tenker i, og det er en vane som er verdt å øve inn.",
    },
    {
      question: "Hva gjør du med et ordpar som ikke ligger i samme semantiske felt?",
      options: ["Sier at ordene ikke står i noen meningsrelasjon.", "Velger den av de fem typene som passer minst dårlig", "Klassifiserer paret som taksonomiske søstre, siden de er ulike", "Bytter ut det ene ordet med et som passer, og klassifiserer det"],
      explanation: "Riktig er å si det. Et par må ligge i samme felt for at spørsmålet om type skal ha et svar, og å tvinge fram en klassifisering viser at kravet bak kategoriene ikke er forstått. Taksonomiske søstre krever nettopp et felles hyperonym, som mangler her.",
    },
    {
      question: "Hvorfor er ordformkontrollen viktig?",
      options: ["Fordi verb og adjektiv med samme rot kan ha ulik antonymitype.", "Fordi bare verb kan inngå i antonymirelasjoner i det hele tatt", "Fordi adjektiver alltid er graderbare og verb aldri er det", "Fordi ordklassen avgjør om relasjonen er enveis eller toveis"],
      explanation: "Riktig er at samme rot kan gi ulik type: verbene tenne og slukke er reverser, adjektivene tent og slukket er komplementære. Påstandene om at bare verb kan være antonymer, eller at alle adjektiver er graderbare, er begge gale — gyldig og ugyldig er adjektiver og komplementære.",
    },
    {
      question: "Hva mangler i svaret «Streng og gitar står i et meronymiforhold»?",
      options: ["Retningen: hvilket ord er meronym og hvilket er holonym", "Den engelske termen for relasjonen", "Et eget ordpar som illustrerer den samme relasjonen", "En henvisning til kapitlet i boka relasjonen står i"],
      explanation: "Riktig er retningen. Meronymi er per definisjon enveis, og uten retning er relasjonen ikke identifisert. Den engelske termen og egne eksempler er nyttige, men de er tilleggskrav som bare gjelder når oppgaven ber om dem.",
    },
    {
      question: "Hvilken test skiller konverser fra reverser?",
      options: ["Om de to setningene kan være sanne om samme øyeblikk.", "Om ordene tåler komparativ og gradsadverb", "Om negasjonen av det ene medfører det andre", "Om ordene har et felles nærmeste overordnede ord"],
      explanation: "Riktig er tidsspørsmålet: konverser beskriver én situasjon fra to sider og gjelder samme øyeblikk, reverser beskriver to hendelser etter hverandre. Komparativtesten avgjør graderbarhet, negasjonstesten komplementaritet, og hyperonymspørsmålet hører til taksonomiske søstre.",
    },
    {
      question: "Negasjonstesten svikter for et ordpar. Hva må svaret ditt si videre?",
      options: ["Om den svikter på grunn av mellomtrinn eller flere alternativer", "Om ordene er verb eller adjektiver i akkurat den formen oppgaven ga", "Om paret har et prefiks som signaliserer motsetning", "Om ordene er hentet fra et lukket eller et åpent ordfelt"],
      explanation: "Riktig er grunnen til at den svikter. Både graderbare antonymer og taksonomiske søstre stryker på testen, og grunnen er det som skiller dem. Ordklassen og prefikset kan antyde, men avgjør ikke, og lukketheten i feltet er en egenskap ved settet, ikke ved testresultatet.",
    },
    {
      question: "Hvilken test skiller homonymi fra polysemi på en eksamen uten hjelpemidler?",
      options: ["Relatert-sans-testen.", "Etymologitesten", "Zeugma-testen", "Substitusjonstesten"],
      explanation: "Riktig er relatert-sans-testen: kan den ene betydningen forklares ved hjelp av den andre? Etymologitesten er faglig gyldig, men krever oppslag du ikke har. Zeugma-testen viser om ordet har to atskilte betydninger, ikke om de er beslektede, og substitusjonstesten hører til synonymi.",
    },
    {
      question: "Hva skiller metaforisk fra metonymisk utvidelse ved polysemi?",
      options: ["Metafor bygger på likhet, metonymi på sammenheng.", "Metafor gjelder konkrete ord, metonymi gjelder abstrakte ord", "Metafor er eldre i språket enn metonymi er", "Metafor gir homonymi over tid, metonymi gir synonymi"],
      explanation: "Riktig er broen mellom betydningene: flyets vinge ligner fuglens, mens teatret som ensemble henger sammen med teatret som bygning. Skillet gjelder like godt konkrete som abstrakte ord, og ingen av utvidelsestypene gjør polysemi om til en annen relasjon.",
    },
    {
      question: "Hvordan kontrollerer du en hyponymirelasjon i tillegg til formelen?",
      options: ["Med arv: hyperonymets egenskaper skal gjelde for hyponymet", "Med komparativ: hyponymet skal tåle gradsadverb", "Med argumentbytte: de to setningene skal beskrive samme forhold", "Med negasjon: å benekte hyponymet skal gi hyperonymet i stedet"],
      explanation: "Riktig er arvekontrollen: alt som gjelder for trær, gjelder for bjørker. Det er nettopp arven som skiller hyponymi fra meronymi, siden en sykkel kan sykles uten at et hjul kan det. De tre andre testene hører til graderbarhet, konverser og komplementaritet.",
    },
    {
      question: "Oppgaveteksten sier: «klassifiser, begrunn med testen, og gi ETT eget ordpar per type». Hva er det tellbare kravet?",
      options: ["Antall egne ordpar skal svare til antall typer oppgaven dekker.", "Antall linjer i besvarelsen skal svare til antall ordpar", "Antall tester skal være likt for alle parene i batteriet", "Antall minutter brukt skal fordeles likt mellom de tre kravene"],
      explanation: "Riktig er tellingen av egne ordpar mot typer. Fem typer betyr fem par, og å levere fire er et ufullstendig svar. Antall linjer og lik tidsfordeling er ikke krav noe sted, og ulike par trenger ulikt antall tester.",
    },
    {
      question: "Hva er den vanligste tidsfellen i en klassifiseringsoppgave?",
      options: ["Å skrive en lang innledning om hva antonymi er.", "Å bruke for lang tid på å lese selve oppgaveteksten", "Å skrive ut testen med ordene fra oppgaven for hvert par", "Å utelukke nabotypen der oppgaveteksten ber om det"],
      explanation: "Riktig er innledningen: den er ikke spurt om og spiser minuttene du trenger til de egne ordparene. Å lese oppgaveteksten nøye er tvert imot anbefalt, og de to andre punktene er nettopp det som gir uttelling.",
    },
    {
      question: "Hvorfor holder ikke «Negasjonstesten viser at de ikke er komplementære» som begrunnelse?",
      options: ["Fordi det er en påstand om testresultatet, ikke testen kjørt.", "Fordi negasjonstesten ikke gjelder for komplementære antonymer", "Fordi testen alltid må kjøres på minst tre ulike ordpar samtidig", "Fordi det engelske navnet på testen mangler i selve formuleringen"],
      explanation: "Riktig er skillet mellom å påstå og å vise. Et fullstendig svar skriver ut slutningen med ordene fra oppgaven i begge retninger. Negasjonstesten er nettopp testen for komplementaritet, og verken antall par eller engelsk term er poenget her.",
    },
    {
      question: "Ordparet *tvilling* og *søsken*: hva er det fullstendige svaret?",
      options: ["Hyponymi, med *tvilling* som hyponym, vist med «er en type»", "Meronymi, med *tvilling* som meronym, vist med del-formelen", "Taksonomiske søstre, siden begge er slektskapsord", "Komplementære antonymer, siden man er tvilling eller ikke"],
      explanation: "Riktig er hyponymi med retning og formel: «En tvilling er en type søsken» fungerer, ikke omvendt. En tvilling er ikke en del av et søsken, ordene ligger ikke på samme nivå i taksonomien, og de står ikke i noe motsetningsforhold.",
    },
    {
      question: "Hva kjennetegner et syklisk sett av taksonomiske søstre?",
      options: ["Medlemmene har fast rekkefølge som gjentar seg.", "Medlemmene kan graderes mot hverandre med komparativ", "Settet er åpent for nye medlemmer over tid", "Medlemmene utelukker hverandre parvis, men ikke samlet"],
      explanation: "Riktig er den faste, gjentakende rekkefølgen: ukedager, måneder og årstider. Åpne sett som farger og metaller er nettopp ikke sykliske. Gradering hører til graderbare antonymer, og gjensidig utelukkelse gjelder alle taksonomiske søstre, sykliske eller ei.",
    },
    {
      question: "Hvilket grep ville avslørt at *slukke* og *tenne* er reverser og ikke komplementære?",
      options: ["Å lese hvilken ordform oppgaven faktisk ga.", "Å telle hvor mange mellomtrinn som finnes mellom ordene", "Å sjekke om ordene har et felles nærmeste hyperonym", "Å prøve om ordene tåler prefikset u- foran seg"],
      explanation: "Riktig er ordformkontrollen: verbene er reverser, mens adjektivene tent og slukket er komplementære. Mellomtrinn hører til graderbare antonymer, hyperonymspørsmålet til taksonomiske søstre, og prefikstesten er ingen test — formen antyder, testen avgjør.",
    },
  ],
  'ling1100-3-1': [
    {
      question: "Hva regner en sannhetstabell på?",
      options: ["Proposisjoner, altså innhold som kan være sant eller usant", "Setninger, altså språklige former med en bestemt ordstilling", "Ytringer, altså konkrete forekomster av tale på et bestemt sted", "Talehandlinger, altså det taleren gjør ved å si noe"],
      explanation: "Riktig er proposisjoner. Variablene står for innhold med sannhetsverdi, ikke for bokstavrekker. Setninger og ytringer er nettopp de nivåene proposisjonsbegrepet ble innført for å skille fra, og talehandlinger hører til pragmatikken i Del 9.",
    },
    {
      question: "Hvor mange rader har en sannhetstabell med tre variabler?",
      options: ["Åtte", "Seks", "Ni", "Tolv"],
      explanation: "Riktig er åtte, siden regelen er to opphøyd i antall variabler. Hver ny variabel dobler antallet muligheter. Tellingen er en ren kontroll som fanger den vanligste feilen i tabelloppgaver, nemlig den ufullstendige tabellen.",
    },
    {
      question: "Når er en konjunksjon sann?",
      options: ["Bare når begge leddene er sanne, altså i én rad av fire", "Når minst ett av leddene er sant, uansett hvilket av dem det er", "Når nøyaktig ett av leddene er sant og det andre er usant", "Når begge leddene har samme sannhetsverdi, sann eller usann"],
      explanation: "Riktig er kravet om at begge er sanne — sant i én rad av fire. Svaret om minst ett beskriver inklusiv disjunksjon, svaret om nøyaktig ett beskriver eksklusiv disjunksjon, og svaret om samme verdi beskriver biimplikasjonen.",
    },
    {
      question: "I hvilken rad skiller inklusiv og eksklusiv disjunksjon lag?",
      options: ["I den ene raden der begge leddene er sanne", "I raden der begge leddene er usanne, altså den siste", "I de to radene der nøyaktig ett av leddene er sant", "I ingen rader — de to har samme sluttkolonne"],
      explanation: "Riktig er raden der begge er sanne: der er den inklusive sann og den eksklusive usann. I de tre andre radene er de like. At de skulle ha samme sluttkolonne er nettopp forvekslingen oppgavetypen finnes for å avsløre.",
    },
    {
      question: "Hvor mange S-er har sluttkolonnen for inklusiv disjunksjon?",
      options: ["Tre", "To", "Én", "Fire"],
      explanation: "Riktig er tre: uttrykket er usann bare når begge leddene er usanne. Eksklusiv disjunksjon har til sammenligning to. Å telle S-ene er en kontroll som tar fem sekunder og avslører om du har satt opp feil tabell.",
    },
    {
      question: "Når er en material implikasjon usann?",
      options: ["Bare når antesedenten er sann og konsekventen usann", "Bare når begge leddene i implikasjonen er usanne samtidig", "Når antesedenten er usann, uansett hva konsekventen er", "Når leddene ikke har noen innholdsmessig forbindelse med hverandre"],
      explanation: "Riktig er den ene forbudte kombinasjonen. Er antesedenten usann, er implikasjonen sann — det er tom sannhet, og svaret som påstår det motsatte er nettopp kapitlets vanligste feil. Material implikasjon krever ingen innholdsforbindelse i det hele tatt.",
    },
    {
      question: "Hva kalles fenomenet at en implikasjon er sann fordi antesedenten er usann?",
      options: ["Tom sannhet", "Logisk ekvivalens", "Sannhetsfunksjonalitet", "Pragmatisk styrking"],
      explanation: "Riktig er tom sannhet: garantien er ikke satt på prøve, og en garanti som ikke er brutt, er ikke usann. Logisk ekvivalens gjelder to uttrykk med samme tabell, sannhetsfunksjonalitet er egenskapen at delene bestemmer helheten, og pragmatisk styrking gjelder eksklusiv lesning av «eller».",
    },
    {
      question: "Hva er antesedenten i «Jeg tar bilen hvis det regner»?",
      options: ["«Det regner», altså betingelsen", "«Jeg tar bilen»", "Hele setningen, siden den uttrykker én betingelse", "Ingen av delene — setningen har ingen antesedent"],
      explanation: "Riktig er betingelsen, altså «det regner», selv om den står sist i setningen. Antesedenten er den delen som utgjør betingelsen, uansett ordstilling. Å bytte om antesedent og konsekvent gir en helt annen tabell, siden implikasjon ikke er symmetrisk.",
    },
    {
      question: "Når er en biimplikasjon sann?",
      options: ["Når de to leddene har samme sannhetsverdi", "Når minst ett av de to leddene i uttrykket er sant", "Når nøyaktig ett av de to leddene i uttrykket er sant", "Når begge de to leddene i uttrykket er sanne samtidig"],
      explanation: "Riktig er kravet om samme verdi, altså både når begge er sanne og når begge er usanne. Svaret om nøyaktig ett beskriver eksklusiv disjunksjon, som har nøyaktig motsatt sluttkolonne, og svaret om begge sanne beskriver konjunksjonen.",
    },
    {
      question: "Hva betyr ordet «hviss» i en sannhetsbetingelse?",
      options: ["Hvis og bare hvis — begge retninger er låst", "Hvis, altså at betingelsen er tilstrekkelig, men ikke nødvendig", "Hvis ikke, altså at betingelsen er negert i formuleringen", "Hvis mulig, altså at betingelsen gjelder under normale forhold"],
      explanation: "Riktig er at begge retninger låses: betingelsen er både tilstrekkelig og nødvendig. Skriver du «hvis» der det skal stå «hviss», har du oppgitt en halv betingelse, og det er slark i en oppgavetype som har fasit.",
    },
    {
      question: "Hva er sannhetsfunksjonalitet?",
      options: ["At delenes sannhetsverdier bestemmer helhetens fullstendig", "At alle setninger i et språk har en sannhetsverdi", "At en funksjon avbilder kontekster på proposisjoner", "At sannhet er en funksjon av hva taleren mener"],
      explanation: "Riktig er at helheten er fullstendig bestemt av delene. Det er derfor en tabell med fire rader kan si alt om konjunksjonen. Svaret om kontekster og proposisjoner beskriver Kaplans character, som hører til Del 10.",
    },
    {
      question: "Er «Norge har kyst, og to pluss to er fire» en sann konjunksjon?",
      options: ["Ja — begge leddene er sanne, og det er alt som kreves", "Nei — leddene har ingen innholdsmessig forbindelse", "Nei — konjunksjon krever at leddene handler om samme sak", "Ja, men bare fordi det andre leddet er nødvendig sant"],
      explanation: "Riktig er ja: konjunksjonen er sannhetsfunksjonell og krever ikke at leddene henger sammen. Følelsen av at de burde henge sammen, er en pragmatisk forventning som forklares i Del 8. At det ene leddet er matematisk sant, spiller ingen rolle for regnestykket.",
    },
    {
      question: "Hva er hovedkonnektivet i uttrykket ikke-(p og q)?",
      options: ["Negasjonen, siden parentesen regnes først", "Konjunksjonen", "Begge, siden uttrykket er flertydig", "Ingen av dem, siden parentesen opphever begge"],
      explanation: "Riktig er negasjonen: parentesen gjør at konjunksjonen regnes først, og negasjonen virker på resultatet. Framgangsmåten er å se bort fra alt i parentes og se hva som blir stående igjen. Uttrykket er ikke flertydig, nettopp fordi parentesen er satt.",
    },
    {
      question: "Hva sier De Morgans lov om negert konjunksjon?",
      options: ["Å benekte at begge deler er tilfelle, er å hevde at minst én ikke er det", "Å benekte at begge deler er tilfelle, er å hevde at ingen av dem er det", "Å benekte at minst én er tilfelle, er å hevde at minst én ikke er det", "Å benekte en konjunksjon gir en konjunksjon av de to negasjonene"],
      explanation: "Riktig er at negasjonen flyttes inn og konnektivet snur til disjunksjon. Svaret om at ingen av dem er tilfelle, er den vanlige feilen: det ville krevd at begge uteble, mens den negerte konjunksjonen tillater at én av delene er sann.",
    },
    {
      question: "Hvilket uttrykk er logisk ekvivalent med p → q?",
      options: ["ikke-p eller q", "p og ikke-q", "ikke-p og q", "q → p"],
      explanation: "Riktig er disjunksjonen av negert antesedent og konsekvent — tabellene er identiske rad for rad. Uttrykket p og ikke-q er tvert imot nøyaktig den kombinasjonen implikasjonen utelukker, og q → p er den omvendte implikasjonen, som har en annen tabell.",
    },
    {
      question: "Hvor mange rader må være ulike for å avvise at to uttrykk er ekvivalente?",
      options: ["Én eneste rad", "Alle", "Minst halvparten", "Minst to, siden én kan skyldes regnefeil"],
      explanation: "Riktig er én: ekvivalens er en påstand om samtlige rader, og den tåler ikke ett unntak. Det er samme logikk entailment hviler på i neste kapittel — en påstand om alle situasjoner faller på ett moteksempel.",
    },
    {
      question: "Hvorfor forstås «Du kan få kaffe eller te» oftest eksklusivt?",
      options: ["Fordi lesningen legges til i tolkningen og kan trekkes tilbake", "Fordi det norske ordet «eller» betyr eksklusiv disjunksjon", "Fordi verden utelukker at begge deler er sanne samtidig", "Fordi setningen inneholder et skjult «enten» som er utelatt"],
      explanation: "Riktig er at lesningen er pragmatisk: tillegget kan trekkes tilbake uten selvmotsigelse, og det viser at det ikke ligger i ordets betydning. Verden utelukker ikke begge deler her — man kan godt få både kaffe og te. Mekanismen behandles i Del 8.",
    },
    {
      question: "Hva er forskjellen på ikke-p og q, og ikke-(p og q)?",
      options: ["Rekkevidden til negasjonen — hva den virker på", "Antall variabler, og dermed antall rader i tabellen", "Hvilket av leddene som er antesedent og hvilket som er konsekvent", "Ingenting — parenteser endrer ikke sannhetsverdien"],
      explanation: "Riktig er rekkevidden: i det første uttrykket virker negasjonen bare på p, i det andre på hele konjunksjonen. Begge har to variabler og fire rader, antesedent og konsekvent hører til implikasjoner, og parenteser endrer nettopp sannhetsverdien.",
    },
    {
      question: "Hva skal alltid stå i svaret ditt før selve tabellen?",
      options: ["Hva variablene står for, skrevet med setningene fra oppgaven", "En kort innledning om hva proposisjonslogikk er for noe", "En liste over alle seks konnektivene i emnets symbolliste", "En begrunnelse for at radrekkefølgen er valgt som den er"],
      explanation: "Riktig er variabelforklaringen. Uten den er tabellen et regnestykke uten oppgitt gjenstand, og det er den vanligste enkeltmangelen i F1-oppgaver. En generell innledning er ikke spurt om og spiser tid du trenger senere.",
    },
    {
      question: "Setningen «Hvis månen er en ost, er to pluss to fem» er",
      options: ["sann, siden antesedenten er usann", "usann, konsekventen er usann", "usann, siden ingen av leddene er sanne", "verken sann eller usann, siden leddene er urimelige"],
      explanation: "Riktig er sann: implikasjonen er usann bare når antesedenten er sann og konsekventen usann. Her er antesedenten usann, og da er garantien aldri satt på prøve. Eksempelet viser at material implikasjon ikke krever noen innholdsforbindelse.",
    },
  ],
  'ling1100-3-2': [
    {
      question: "Når holder p ⊨ q?",
      options: ["Når q er sann i alle situasjoner der p er sann", "Når q er sann i minst én situasjon der p også er sann", "Når p og q har samme sannhetsverdi i den faktiske situasjonen", "Når p og q begge er sanne i den situasjonen som beskrives"],
      explanation: "Riktig er kravet om alle situasjoner. Entailment er en påstand om samtlige situasjoner samtidig, og ett moteksempel avviser den. Kravet om én situasjon eller om den faktiske situasjonen beskriver material implikasjon, som er noe helt annet.",
    },
    {
      question: "Hva skal til for å avvise en entailment-påstand?",
      options: ["Ett moteksempel der p er sann og q usann", "At påstanden feiler i minst halvparten av tenkelige situasjoner", "At påstanden feiler i den situasjonen oppgaven faktisk beskriver", "At begge setningene viser seg å være usanne samtidig"],
      explanation: "Riktig er ett moteksempel. Entailment er en påstand om alle situasjoner, og den tåler ikke ett unntak. Derfor er det raskeste grepet i en entailment-oppgave å lete aktivt etter en situasjon der den første er sann og den andre usann.",
    },
    {
      question: "Hvordan kjører du selvmotsigelsestesten?",
      options: ["Du sier p og benekter q i samme setning", "Du negerer p og ser om slutningen til q fortsatt holder", "Du setter opp sannhetstabellen og teller radene med S", "Du bytter om på p og q og ser om slutningen snur"],
      explanation: "Riktig er setningen «p, men ikke q». Blir den selvmotsigende, holder entailmentet. Å negere p er den andre testen, negasjonstesten, som brukes til å skille entailment fra presupposisjon.",
    },
    {
      question: "Hva skjer med et entailment når du negerer den første setningen?",
      options: ["Slutningen forsvinner helt", "Slutningen overlever uendret", "Slutningen snur retning og går motsatt vei", "Slutningen blir til en biimplikasjon"],
      explanation: "Riktig er at den forsvinner: «Kari plantet ikke en rose» medfører ingenting om blomster. At slutningen overlever negasjonen, er tvert imot kjennetegnet på presupposisjon, og det er nettopp der de to forveksles.",
    },
    {
      question: "Hva heter egenskapen at en slutning overlever negasjon av den utløsende setningen?",
      options: ["Constancy under negation", "Sannhetsbevaring", "Transitivitet", "Kontraposisjon"],
      explanation: "Riktig er constancy under negation, konstanthet under negasjon, som er kjennetegnet på presupposisjon. Sannhetsbevaring beskriver at sannhet går fra p til q ved entailment, mens transitivitet og kontraposisjon er regler for hvordan entailment kan kjedes og snus.",
    },
    {
      question: "Hva er den skarpe forskjellen på p → q og p ⊨ q?",
      options: ["Den første gjelder én situasjon, den andre alle", "Den første gjelder setninger, den andre gjelder ord", "Den første er sannere enn den andre i tvilstilfeller", "Den første gjelder positive setninger, den andre negerte"],
      explanation: "Riktig er kvantifiseringen over situasjoner. Material implikasjon har en sannhetsverdi per situasjon og kan skifte; entailment holder eller holder ikke, og svaret er det samme overalt. Begge relasjonene gjelder for øvrig setninger, ikke ord.",
    },
    {
      question: "Kan p ⊨ q holde uten at p → q er sann i en gitt situasjon?",
      options: ["Nei — entailment medfører at implikasjonen er sann overalt", "Ja, hvis den gitte situasjonen er en helt spesiell en", "Ja, siden de to relasjonene er helt uavhengige av hverandre", "Bare når p er usann i den situasjonen det gjelder"],
      explanation: "Riktig er nei. Entailment betyr at det ikke finnes noen situasjon der p er sann og q usann, og det er nettopp den ene raden som ville gjort implikasjonen usann. Motsatt vei gjelder ikke: en sann implikasjon i ett tilfelle viser ikke entailment.",
    },
    {
      question: "Hvorfor kan ikke ⊨ stå som en kolonne i en sannhetstabell?",
      options: ["Fordi det ikke er et konnektiv, men en påstand om to formler", "Fordi symbolet ikke finnes i emnets offisielle symbolliste", "Fordi tabellen da ville trengt dobbelt så mange rader", "Fordi entailment bare gjelder mellom setninger på norsk"],
      explanation: "Riktig er skillet mellom objektspråk og metaspråk: konnektiver bygger nye formler som har en verdi per rad, mens entailment er en påstand om forholdet mellom to formler. Symbolet står for øvrig i emnets symbolliste, men det hører til metaspråket.",
    },
    {
      question: "Hva er gjensidig entailment det samme som?",
      options: ["Logisk ekvivalens, altså samme verdi i alle situasjoner", "Kontraposisjon, altså slutning med begge ledd negert", "Uforenlighet, altså at begge ikke kan være sanne", "Transitivitet, altså slutning gjennom en kjede"],
      explanation: "Riktig er logisk ekvivalens, som også svarer til parafrase fra Del 1. Kontraposisjon og transitivitet er regler for enkeltrettet entailment, og uforenlighet er det motsatte forholdet, der å hevde det ene er å avvise det andre.",
    },
    {
      question: "Hvilken regel følger av p ⊨ q?",
      options: ["ikke-q ⊨ ikke-p", "ikke-p ⊨ ikke-q", "q ⊨ p", "p ⊨ ikke-q"],
      explanation: "Riktig er kontraposisjonen, der begge ledd negeres og rekkefølgen snus. Å negere begge uten å snu er det vanlige feilgrepet: at det ikke står en gran der, medfører ikke at det ikke står et tre der. Å snu uten å negere gir den omvendte entailment-påstanden.",
    },
    {
      question: "Hva er en tautologi?",
      options: ["En setning som er sann i alle situasjoner", "En setning som er usann i alle situasjoner", "En setning som er sann i noen og usann i andre", "En setning som verken er sann eller usann"],
      explanation: "Riktig er sannhet overalt, altså S i hver rad i tabellen. En setning som er usann overalt, er en kontradiksjon, og en som varierer, er kontingent. Merk at en tautologi ikke utelukker noen situasjoner og derfor ikke sier noe om verden.",
    },
    {
      question: "Hva entailer en kontradiksjon?",
      options: ["Hva som helst, uten unntak", "Ingenting i det hele tatt", "Bare sin egen negasjon", "Bare andre kontradiksjoner"],
      explanation: "Riktig er at den entailer hva som helst: finnes det ingen situasjon der p er sann, finnes det heller ingen der p er sann og q usann. Betingelsen er dermed oppfylt uten videre. Dette er beslektet med tom sannhet i implikasjoner.",
    },
    {
      question: "Hva kjennetegner en analytisk setning?",
      options: ["Den er sann i kraft av betydningen til ordene", "Den er sann i kraft av hvordan verden faktisk er", "Den er sann i kraft av den logiske formen alene", "Den er sann fordi den er allment akseptert"],
      explanation: "Riktig er ordbetydningene: «En ungkar er ugift» kan avgjøres uten å undersøke verden. Svaret om verden beskriver syntetiske setninger, og svaret om formen beskriver logiske tautologier som «p eller ikke-p», der ordbetydningene er uten betydning.",
    },
    {
      question: "Hvordan tester du om en setning er analytisk?",
      options: ["Du benekter den og ser om resultatet er selvmotsigende", "Du undersøker om setningen faktisk stemmer i verden", "Du setter opp sannhetstabellen og teller antall S-er", "Du prøver om setningen kan oversettes til et annet språk"],
      explanation: "Riktig er benektelsestesten: «En ungkar er gift» motsier seg selv, og setningen var analytisk. Å undersøke verden er nettopp det man må gjøre ved syntetiske setninger, og sannhetstabellen sier bare noe om formen, ikke om ordbetydningene.",
    },
    {
      question: "Hva er den vanligste kilden til entailment mellom to setninger?",
      options: ["Hyponymi — et ord byttet med hyperonymet sitt", "Homonymi — to ord med samme form i setningen", "Metonymi — et ord brukt om noe det henger sammen med", "Synonymi — to ord som betyr omtrent det samme"],
      explanation: "Riktig er hyponymi: bytter du «rose» med «blomst», får du en svakere setning som følger av den første. Synonymi gir gjensidig entailment, ikke enveis. Homonymi og metonymi er forhold ved enkeltord og gir ingen slutning mellom setninger.",
    },
    {
      question: "Hvilken vei går entailment når det gjelder semantisk styrke?",
      options: ["Fra den sterkere til den svakere setningen", "Fra den svakere til den sterkere setningen", "Alltid begge veier, siden relasjonen er symmetrisk", "Fra den korteste til den lengste setningen"],
      explanation: "Riktig er fra sterk til svak: den sterkere setningen utelukker flere situasjoner. Relasjonen er ikke symmetrisk — det er nettopp derfor retningen må oppgis i svaret. Setningslengde har ingenting med saken å gjøre.",
    },
    {
      question: "Hva viser at «Hvis månen er en ost, er Oslo hovedstad» er sann som implikasjon?",
      options: ["At antesedenten er usann", "At begge leddene handler om virkelige forhold", "At det finnes en årsakssammenheng mellom leddene", "At konsekventen entailer antesedenten"],
      explanation: "Riktig er den usanne antesedenten: implikasjonen er usann bare når antesedenten er sann og konsekventen usann. Eksempelet er samtidig det klareste argumentet for at material implikasjon ikke er entailment, siden ingen sammenheng kreves.",
    },
    {
      question: "«Halvor visste at møtet var flyttet» og «Møtet var flyttet» — hva slags forhold er dette?",
      options: ["Presupposisjon, siden slutningen overlever negasjon", "Entailment, siden selvmotsigelsestesten gir utslag", "Implikatur, siden slutningen kan trekkes tilbake", "Ingen slutning, siden verbet bare beskriver en holdning"],
      explanation: "Riktig er presupposisjon: «Halvor visste ikke at møtet var flyttet» medfører fortsatt at det var flyttet. Selvmotsigelsestesten gir riktignok utslag, men den gir utslag på presupposisjoner også — det er derfor negasjonstesten må kjøres i tillegg.",
    },
  ],
  'ling1100-3-3': [
    {
      question: "Hva kjennetegner en presupposisjon?",
      options: ["At antakelsen overlever når setningen benektes", "At antakelsen forsvinner når setningen benektes", "At antakelsen bare gjelder når setningen er bekreftende", "At antakelsen kan trekkes tilbake uten selvmotsigelse"],
      explanation: "Riktig er at den overlever negasjonen — constancy under negation. At slutningen forsvinner under negasjon, er tvert imot kjennetegnet på entailment, og at den kan trekkes tilbake, er kjennetegnet på implikatur.",
    },
    {
      question: "Hvilken test skiller presupposisjon fra entailment?",
      options: ["Negasjonstesten", "Selvmotsigelsestesten", "Substitusjonstesten", "Komparativtesten"],
      explanation: "Riktig er negasjonstesten. Selvmotsigelsestesten gir utslag på begge slutningstypene og skiller derfor ikke — det er den vanligste kilden til forvekslingen. Substitusjons- og komparativtesten hører til leksikalsk semantikk i Del 2.",
    },
    {
      question: "Hva er en presupposisjonsutløser?",
      options: ["Ordet eller konstruksjonen som er kilden til antakelsen", "Den situasjonen i samtalen som gjør at antakelsen blir aktuell", "Den delen av setningen som faktisk blir påstått av taleren", "Det svaret som bekrefter antakelsen senere i den samme samtalen"],
      explanation: "Riktig er ordet eller konstruksjonen. Utløserne deles i leksikalske, som er enkeltord, og strukturelle, som er konstruksjoner. Det påståtte er nettopp det motsatte av det presupponerte, og situasjonen avgjør ikke hvilken trigger som foreligger.",
    },
    {
      question: "Hvordan skiller du en leksikalsk fra en strukturell trigger?",
      options: ["Bytt ut ordet du mistenker, og se om antakelsen faller", "Se om setningen er lang nok til å inneholde en egen leddsetning", "Sjekk om antakelsen står før eller etter hovedverbet i setningen", "Se om setningen kan gjøres om til et ja/nei-spørsmål"],
      explanation: "Riktig er byttekontrollen: forsvinner antakelsen når ordet byttes, var triggeren leksikalsk. I kløyvde setninger kan alle innholdsordene byttes uten at antakelsen forsvinner, og det viser at den ligger i konstruksjonen.",
    },
    {
      question: "Hva presupponerer et faktivt verb?",
      options: ["At innholdet i leddsetningen er sant", "At subjektet mener at leddsetningen er sann", "At handlingen i leddsetningen ble fullført", "At leddsetningen er kjent for tilhøreren fra før"],
      explanation: "Riktig er at leddsetningens innhold er sant: «Rektor beklaget at møtet ble avlyst» forutsetter avlysningen. Ikke-faktive verb som «tro at» og «hevde at» sier derimot bare noe om hva noen mener, og presupponerer ingenting om verden.",
    },
    {
      question: "Hva presupponerer «Naboen begynte å pusse opp badet»?",
      options: ["At naboen ikke pusset opp badet før", "At naboen pusset opp badet før", "At naboen pusset opp badet ferdig", "At naboen hadde et bad å pusse opp"],
      explanation: "Riktig er den negative antakelsen: begynne-verb forutsetter at tilstanden ikke forelå. Å svare at oppussingen pågikk før, er svaret for «slutte å», og det er den vanligste enkeltfeilen i denne oppgavetypen. Setningen sier heller ingenting om fullføring.",
    },
    {
      question: "Hvilken triggertype er ordet «igjen»?",
      options: ["En iterativ, og dermed en leksikalsk trigger", "En aspektuell trigger, og dermed strukturell", "En faktiv trigger, siden den peker på noe som skjedde", "En komparativ trigger, siden den sammenligner to tidspunkt"],
      explanation: "Riktig er iterativ og leksikalsk: ordet forutsetter at handlingen har skjedd minst én gang før, og stryker du det, forsvinner antakelsen. Aspektuelle verb som slutte og begynne er en annen leksikalsk gruppe, og komparativer krever ordet enn.",
    },
    {
      question: "Hva gjør implikative verb som «rekke å» spesielt lærerike?",
      options: ["De bærer en presupposisjon og et entailment samtidig", "De bærer to presupposisjoner med motsatt fortegn", "De er strukturelle triggere selv om de er enkeltord", "De mister presupposisjonen når setningen negeres"],
      explanation: "Riktig er at de gjør begge deler: antakelsen om at planen fantes overlever negasjonen, mens slutningen om utfallet faller bort. Det viser at spørsmålet aldri er hva setningen er, men hva den enkelte slutningen er.",
    },
    {
      question: "Hva presupponerer «Det var Sigrid som betalte regningen»?",
      options: ["At noen betalte regningen", "At Sigrid pleier å betale regninger", "At regningen ikke var betalt fra før", "At Sigrid ikke betalte regningen"],
      explanation: "Riktig er at noen betalte. Kløyvingen deler setningen i to lag: det som står etter «som», er forutsatt kjent, og det som står i X-posisjonen, er det nye. Derfor er den negerte versjonen informativ — den avviser identifiseringen, ikke hendelsen.",
    },
    {
      question: "Hva presupponerer spørsmålet «Når leverte du søknaden?»",
      options: ["At du leverte søknaden", "At du burde ha levert søknaden tidligere", "At det fantes en søknad å levere", "At du husker når du leverte den"],
      explanation: "Riktig er at leveringen skjedde: ethvert svar på «når» går med på det. Svaret om at det fantes en søknad, er for svakt — spørsmålet forutsetter mer enn det. Ja/nei-spørsmål presupponerer til sammenligning ikke selve handlingen.",
    },
    {
      question: "Hva presupponerer «Hvis vi hadde søkt i tide, ville vi fått plass»?",
      options: ["At vi ikke søkte i tide", "At vi søkte i tide", "At vi fikk plass", "At vi ikke fikk plass fordi noen andre søkte"],
      explanation: "Riktig er det negative: kontrafaktiske betingelsessetninger forutsetter at betingelsen er usann. Kontrollen er å oversette verbformen til klartekst — «hvis vi hadde søkt» sier at vi ikke gjorde det. Setningen sier ingenting sikkert om utfallet.",
    },
    {
      question: "Hvilken triggertype er komparativkonstruksjoner med «enn»?",
      options: ["Strukturell", "Leksikalsk, siden ordet enn bærer antakelsen", "Verken leksikalsk eller strukturell", "Leksikalsk, siden adjektivet bærer antakelsen"],
      explanation: "Riktig er strukturell: antakelsen om at sammenligningsleddet har egenskapen, ligger i selve konstruksjonen, og alle innholdsordene kan byttes ut. Komparativer er den letteste strukturelle triggeren å overse i et batteri.",
    },
    {
      question: "Hva er presupposisjonssvikt?",
      options: ["At antakelsen setningen bygger på, ikke stemmer", "At taleren nekter for antakelsen i neste setning etterpå", "At antakelsen forsvinner når setningen negeres", "At tilhøreren ikke oppfatter antakelsen i det hele tatt"],
      explanation: "Riktig er at antakelsen ikke er oppfylt. Setningen blir da ikke bare usann, men merkelig, og reaksjonen er en avvisning av forutsetningen. At antakelsen forsvinner under negasjon, ville tvert imot vist at det var et entailment.",
    },
    {
      question: "Hva mente Strawson skjer ved presupposisjonssvikt?",
      options: ["Setningen får ingen sannhetsverdi — det oppstår et gap", "Setningen blir usann, siden eksistenskravet ikke er oppfylt", "Setningen blir sann av tom sannhet, som en implikasjon", "Setningen blir sann eller usann alt etter sammenhengen"],
      explanation: "Riktig er sannhetsverdigapet. Russell hevdet derimot at setningen rett og slett er usann, siden eksistensen i hans analyse er en del av det som påstås. Negasjonstesten taler for Strawson, mens enkelheten i totallssystemet taler for Russell.",
    },
    {
      question: "Hva er projeksjon av presupposisjoner?",
      options: ["At de også overlever under spørsmål, modalverb og betingelser", "At de flyttes fra leddsetningen til hovedsetningen", "At de overføres fra taleren til tilhøreren i en samtale", "At de blir til entailments når setningen er bekreftende"],
      explanation: "Riktig er at de brer seg opp gjennom større konstruksjoner. Firetallssettet med påstand, spørsmål, modalverb og betingelse er et sterkere testbatteri enn negasjonstesten alene, og entailments projiserer ikke på samme måte.",
    },
    {
      question: "Hva er akkommodasjon?",
      options: ["At tilhøreren stilltiende føyer til en ukjent antakelse", "At taleren tilpasser antakelsen til det tilhøreren vet", "At antakelsen oppheves fordi den viser seg å være usann", "At to talere blir enige om hva som er felles bakgrunn"],
      explanation: "Riktig er den stilltiende tilføyelsen: sier noen «søsteren min», protesterer ingen. Det gjør presupposisjoner effektive til å bygge felles bakgrunn, og samtidig risikable, siden det som føyes til, aldri blir lagt fram til vurdering.",
    },
    {
      question: "Hvorfor er ladede spørsmål vanskelige å avvise?",
      options: ["Fordi ethvert svar i spørsmålets egen form godtar antakelsen", "Fordi spørsmål ikke kan være sanne eller usanne", "Fordi den spurte som regel ikke kjenner antakelsen", "Fordi antakelsen forsvinner så snart man svarer nei"],
      explanation: "Riktig er at spørsmålsformen ikke gir rom for å bestride forutsetningen: for å avvise må den spurte ut av formatet. Antakelsen er tvert imot der uansett hva man svarer, og den spurte kjenner den som regel godt — det er nettopp det som gjør spørsmålet ubehagelig.",
    },
    {
      question: "Hvor skal negasjonen stå når du kjører negasjonstesten?",
      options: ["På hovedverbet i hovedsetningen", "På verbet i leddsetningen", "Foran hele setningen som en egen frase", "På det ordet du mistenker er utløseren"],
      explanation: "Riktig er hovedverbet i hovedsetningen. Negerer du inne i leddsetningen, tester du en annen slutning enn presupposisjonen, og resultatet blir misvisende. Det er en av de vanligste feilene under tidspress.",
    },
    {
      question: "Kan en presupposisjon oppheves?",
      options: ["Ja, i en markert lesning med eksplisitt avvisning", "Nei, presupposisjoner er alltid konstante", "Ja, like enkelt som en implikatur kan trekkes tilbake", "Bare hvis setningen inneholder en strukturell trigger"],
      explanation: "Riktig er at det går, men bare i en markert lesning der negasjonen rammer hele ytringen og der fortsettelsen forklarer hva som avvises. Det er ikke det samme som implikaturens kansellerbarhet, som ikke krever noe brudd med det forutsatte.",
    },
    {
      question: "Én setning bærer ofte både en presupposisjon og et entailment. Hva følger av det?",
      options: ["At testen må kjøres på slutningen, ikke på setningen", "At setningen er flertydig og må analyseres to ganger", "At presupposisjonen alltid er den sterkeste slutningen", "At entailmentet oppheves av presupposisjonen"],
      explanation: "Riktig er at det er slutningen som klassifiseres, ikke setningen. «Berit rakk å levere klagen» presupponerer at det var en frist og entailer at klagen ble levert, og negasjonstesten avgjør hver av dem for seg.",
    },
  ],
  'ling1100-3-4': [
    {
      question: "Hvilken test skiller implikatur fra de to andre slutningstypene?",
      options: ["Kansellerbarhetstesten", "Negasjonstesten", "Selvmotsigelsestesten", "Substitusjonstesten"],
      explanation: "Riktig er kansellerbarhetstesten: implikaturen kan trekkes tilbake uten selvmotsigelse. Negasjonstesten skiller entailment fra de to andre, men skiller ikke implikatur fra presupposisjon, siden begge som regel overlever negasjonen.",
    },
    {
      question: "Hvorfor trengs to tester for å skille de tre slutningstypene?",
      options: ["Fordi hver test bare deler materialet i to", "Fordi den ene testen er upålitelig og må dobbeltsjekkes", "Fordi presupposisjoner må testes to ganger for sikkerhets skyld", "Fordi den ene testen gjelder setninger og den andre gjelder ord"],
      explanation: "Riktig er at hver test deler i to: negasjonstesten skiller ut entailment, kansellerbarhetstesten skiller ut implikatur. Ingen av dem skiller alle tre alene, og å trekke en tredelt konklusjon av én test er den vanligste kilden til feil i denne oppgavetypen.",
    },
    {
      question: "Hvor hører konversasjonell implikatur hjemme?",
      options: ["I pragmatikken", "I semantikken, sammen med entailment", "I semantikken, sammen med presupposisjon", "I leksikalsk semantikk, sammen med hyponymi"],
      explanation: "Riktig er pragmatikken: implikaturen følger av at noen valgte å si nettopp dette i nettopp denne sammenhengen. Entailment og presupposisjon er semantiske, siden de følger av hva setningen betyr. Skillet er verdt en egen setning i et svar.",
    },
    {
      question: "Hva er ikke-avtakbarhet?",
      options: ["At implikaturen følger med når du sier det samme med andre ord", "At implikaturen ikke kan trekkes tilbake i noen sammenheng", "At implikaturen overlever når setningen blir negert", "At implikaturen henger ved et bestemt ord i setningen"],
      explanation: "Riktig er at slutningen henger ved innholdet og ikke ved ordvalget. Å henge ved et bestemt ord er tvert imot kjennetegnet på konvensjonelle implikaturer, som nettopp er avtakbare, og kansellerbarhet er en annen egenskap.",
    },
    {
      question: "Mellom hva står symbolet for medlemskap?",
      options: ["Mellom et objekt og en mengde", "Mellom to mengder", "Mellom to objekter", "Mellom en mengde og et univers"],
      explanation: "Riktig er mellom et objekt og en mengde. Står det en samling til venstre, skal du bruke delmengdesymbolet i stedet. Å blande de to er den vanligste notasjonsfeilen i mengdelære, og kontrollen er å spørre hva som står til venstre.",
    },
    {
      question: "Hva svarer delmengdeforholdet til, oversatt til setninger?",
      options: ["Entailment", "Presupposisjon", "Konjunksjon", "Biimplikasjon"],
      explanation: "Riktig er entailment: er alt i A også i B, medfører «x er i A» at «x er i B». Konjunksjon svarer til snitt, og biimplikasjon svarer til at to mengder er like. Presupposisjon har ingen enkel mengdeoversettelse i denne rammen.",
    },
    {
      question: "Hvilken mengdeoperasjon svarer konjunksjonen til?",
      options: ["Snitt", "Union", "Komplement", "Delmengde"],
      explanation: "Riktig er snitt: en ting er i snittet hviss den er i begge mengdene, akkurat som en konjunksjon er sann hviss begge leddene er sanne. Union svarer til inklusiv disjunksjon, og komplement til negasjon.",
    },
    {
      question: "Hvorfor er komplementet alltid relativt til et univers?",
      options: ["Fordi «alt som ikke er i A» avhenger av hva som finnes", "Fordi komplementet ellers ville blitt den tomme mengden", "Fordi komplementet bare er definert for endelige mengder", "Fordi universet må ha like mange elementer som mengden"],
      explanation: "Riktig er at svaret avhenger av hva universet omfatter: komplementet til rosene er noe helt annet om universet er blomstene enn om det er alle ting. Derfor er det en del av et presist svar å oppgi universet.",
    },
    {
      question: "Hva kjennetegner en nedovergående posisjon?",
      options: ["Slutningen holder fra overmengde til delmengde", "Slutningen holder fra delmengde til overmengde", "Slutningen holder begge veier i posisjonen", "Slutningen faller bort når setningen negeres"],
      explanation: "Riktig er retningen fra det vide til det snevre: «Ingen spiste frukt» medfører «Ingen spiste epler». Motsatt retning kjennetegner en oppovergående posisjon, som er det vanlige i enkle bekreftende setninger.",
    },
    {
      question: "Hvorfor snur slutningsretningen under negasjon?",
      options: ["Fordi å utelukke en mengde er å utelukke alle delene av den", "Fordi negasjonen bytter om på subjekt og objekt i setningen", "Fordi negasjonen gjør setningen usann og dermed uten slutninger", "Fordi negasjonen gjør delmengden større enn overmengden"],
      explanation: "Riktig er forklaringen i mengdespråk: er hele fruktmengden utelukket, er også enhver del av den utelukket. Det er nettopp denne forklaringen den ene sensorveiledningen etterspør, og som skiller innsikt fra gjenkjenning av ordene.",
    },
    {
      question: "Er kvantoren «alle» nedovergående?",
      options: ["I restriktoren, men ikke i omfanget", "I begge argumentposisjonene", "I ingen av argumentposisjonene", "I omfanget, men ikke i restriktoren"],
      explanation: "Riktig er at den er nedovergående i restriktoren og oppovergående i omfanget. Det er det sterkeste enkeltargumentet for at monotonisitet hører til posisjonen: ett og samme ord kan ikke ha to slutningsretninger, men to posisjoner kan.",
    },
    {
      question: "Hvilken kvantor er nedovergående i begge argumentposisjonene?",
      options: ["Ingen", "Noen", "Alle", "De fleste"],
      explanation: "Riktig er «ingen»: både «Ingen som leste en bok, besto» og «Ingen leste en bok» tillater bytte til det snevrere ordet. «Noen» er oppovergående i begge, og «alle» har én retning i hver posisjon.",
    },
    {
      question: "Hva er et negativt polaritetselement?",
      options: ["Et uttrykk som bare er akseptabelt i nedovergående omgivelser", "Et uttrykk som gjør setningen negativ i betydning", "Et uttrykk som snur sannhetsverdien til setningen", "Et uttrykk som bare kan stå i spørsmål og ordrer"],
      explanation: "Riktig er akseptabilitetskravet: «noe som helst» går etter «ingen», men ikke i en tilsvarende bekreftende setning. Elementet gjør ikke setningen negativ og snur ingen sannhetsverdi — det er en uavhengig kontroll på at posisjonen er nedovergående.",
    },
    {
      question: "Hva skal en oppgave som ber om et Venn-diagram, besvares med?",
      options: ["En tegnet figur", "En presis beskrivelse av figuren i ord", "En sannhetstabell med de samme radene", "En liste over elementene i hver mengde"],
      explanation: "Riktig er den tegnede figuren. Settet fra høsten 2024 tilbyr digital håndtegning nettopp for at figuren skal tegnes, og en beskrivelse i ord er ikke et fullstendig svar uansett hvor god beskrivelsen er.",
    },
    {
      question: "Hva er den fjerde muligheten når ingen av de tre testene slår til?",
      options: ["Slutningen hviler på kunnskap om verden", "Slutningen er en presupposisjon likevel", "Setningen er flertydig og må analyseres på nytt", "Slutningen er en konvensjonell implikatur"],
      explanation: "Riktig er kunnskap om verden: «Han leter etter nøklene, altså har han mistet dem» er en rimelig gjetning, ikke en språklig slutning. Å ha med denne muligheten hindrer at rimelige gjetninger tvinges inn i en av de tre kategoriene.",
    },
    {
      question: "Hva sier «Noen av naboene betalte» ut over det den logisk krever?",
      options: ["At ikke alle betalte", "At minst én av naboene betalte", "At naboene hadde plikt til å betale", "At betalingen skjedde nylig"],
      explanation: "Riktig er implikaturen om at ikke alle betalte. At minst én betalte, er nettopp det setningen logisk krever, og er derfor ikke noe tillegg. Implikaturen kan trekkes tilbake: «faktisk alle sammen» er en presisering, ikke en motsigelse.",
    },
    {
      question: "Hvilken sammenheng har A snitt B er delmengde av A med konjunksjonen?",
      options: ["Den svarer til at konjunksjonen entailer hvert ledd", "Den svarer til at konjunksjonen er sann i tre av fire rader", "Den svarer til at konjunksjonen er kommutativ", "Den svarer til at konjunksjonen kan negeres med De Morgan"],
      explanation: "Riktig er entailment til hvert ledd: alt som er i begge mengdene, er nødvendigvis i den første. Konjunksjonen er for øvrig sann i bare én rad av fire, og både kommutativitet og De Morgan er andre egenskaper.",
    },
    {
      question: "Hva er den vanligste feilen i en oppgave om downward entailment?",
      options: ["Å gjenkjenne ordene i stedet for å forklare mekanismen", "Å bruke feil symbol for delmengde i besvarelsen", "Å velge et ordpar der delmengdeforholdet er uklart", "Å tegne Venn-diagrammet med for få sirkler"],
      explanation: "Riktig er gjenkjenningsfeilen, som den ene sensorveiledningen peker eksplisitt ut. Et fullstendig svar skriver ut delmengdeforholdet, viser begge setningene og forklarer hvorfor utelukkelse arves nedover.",
    },
  ],
  'ling1100-3-5': [
    {
      question: "Hva er første trinn i tabellalgoritmen?",
      options: ["Å oppgi hva variablene i uttrykket står for", "Å regne ut hovedkonnektivet i uttrykket", "Å telle hvor mange S-er sluttkolonnen skal ha", "Å skrive en kort innledning om proposisjonslogikk"],
      explanation: "Riktig er variabelforklaringen. Uten den er tabellen et regnestykke uten oppgitt gjenstand, og formaliseringen kan ikke kontrolleres. En generell innledning er ikke spurt om og spiser tiden du trenger til rad-forklaringene.",
    },
    {
      question: "Hvor mange rader skal en tabell med fire variabler ha?",
      options: ["Seksten", "Åtte", "Tolv", "Tjuefire"],
      explanation: "Riktig er seksten, siden regelen er to opphøyd i antall variabler. Åtte gjelder tre variabler. Tellingen er en kontroll som tar ti sekunder og fanger den vanligste enkeltfeilen i F1-oppgaver.",
    },
    {
      question: "I hvilken rekkefølge regner du ut et sammensatt uttrykk?",
      options: ["Innenfra og ut, med hovedkonnektivet sist", "Utenfra og inn, med hovedkonnektivet først", "Fra venstre mot høyre i den rekkefølgen symbolene står", "I vilkårlig rekkefølge, siden resultatet blir det samme"],
      explanation: "Riktig er innenfra og ut: parentesinnholdet først, hovedkonnektivet til slutt. Rekkefølgen er ikke vilkårlig — regner du hovedkonnektivet først, har du ingen verdier å regne med, og med tre variabler blir det umulig å holde i hodet.",
    },
    {
      question: "Hvorfor skal mellomkolonnene stå i tabellen?",
      options: ["Fordi de dokumenterer framgangsmåten og gjør svaret kontrollerbart", "Fordi tabellen ellers får for få rader til å være gyldig", "Fordi sannhetsbetingelsen leses av fra mellomkolonnen", "Fordi hovedkonnektivet ellers ikke kan identifiseres"],
      explanation: "Riktig er dokumentasjonen: i en oppgave der du skal vise noe, er mellomkolonnene halve poenget. Sannhetsbetingelsen leses av sluttkolonnen, og radtallet avhenger bare av antall variabler.",
    },
    {
      question: "Hvilket uttrykk er ekvivalent med negasjonen av p → q?",
      options: ["p og ikke-q", "ikke-p og q", "ikke-p eller q", "q → p"],
      explanation: "Riktig er p og ikke-q, altså nettopp den kombinasjonen implikasjonen utelukker. Uttrykket ikke-p eller q er tvert imot ekvivalent med implikasjonen selv, og q → p er den omvendte implikasjonen med en annen tabell.",
    },
    {
      question: "Hvorfor virker selvmotsigelsestesten på entailment?",
      options: ["Fordi «p, men ikke q» beskriver nettopp et moteksempel", "Fordi negasjonen av en sann setning alltid er usann", "Fordi konjunksjonen er sann i bare én av fire rader", "Fordi entailment er det samme som material implikasjon"],
      explanation: "Riktig er koblingen til moteksemplet: setningen «p, men ikke q» er p og ikke-q uttrykt i ord, altså en situasjon der p er sann og q usann. Er en slik situasjon umulig, blir setningen selvmotsigende og entailmentet holder.",
    },
    {
      question: "Hva er første test i slutningsalgoritmen?",
      options: ["Negasjonstesten", "Kansellerbarhetstesten", "Selvmotsigelsestesten", "Substitusjonstesten"],
      explanation: "Riktig er negasjonstesten, som luker ut entailmentene — den største gruppen. Kansellerbarhetstesten kommer etterpå og skiller presupposisjon fra implikatur blant dem som ble stående. Selvmotsigelsestesten skiller ikke og kjøres derfor ikke først.",
    },
    {
      question: "Hva skal stå i svaret i tillegg til klassifiseringen?",
      options: ["Kilden til slutningen", "Hvor mange rader tabellen ville hatt", "Hvilket kapittel i boka slutningen er hentet fra", "Hvor lang tid du brukte på deloppgaven"],
      explanation: "Riktig er kilden: hyponymi, et konnektiv, en kvantor eller navnet på triggeren. Det er femte trinn i slutningsalgoritmen og koster én linje, men det er det som skiller et fullstendig svar fra et riktig svar.",
    },
    {
      question: "Hva er den fjerde muligheten når ingen av de tre slutningstypene passer?",
      options: ["Slutningen hviler på kunnskap om verden", "Setningen er flertydig og må analyseres på nytt", "Slutningen er både entailment og presupposisjon", "Slutningen er en konvensjonell implikatur"],
      explanation: "Riktig er kunnskap om verden: «Han leter etter nøklene, altså har han mistet dem» er en rimelig gjetning, ikke en språklig slutning. Å ha med muligheten hindrer at gjetninger tvinges inn i en av de tre kategoriene.",
    },
    {
      question: "Hvilken utløser gir presupposisjonen i «Bussen var forsinket igjen»?",
      options: ["Iterativen «igjen»", "Verbet «være»", "Den kløyvde setningskonstruksjonen", "Komparativkonstruksjonen"],
      explanation: "Riktig er iterativen, en leksikalsk trigger: ordet forutsetter at forsinkelsen har skjedd minst én gang før. Kontrollen er å stryke ordet — da forsvinner antakelsen. Setningen har verken kløyving eller komparativ.",
    },
    {
      question: "Hva presupponerer «Hvis rådmannen hadde varslet, ville saken blitt utsatt»?",
      options: ["At rådmannen ikke varslet", "At rådmannen varslet", "At saken ble utsatt", "At saken ikke ble utsatt"],
      explanation: "Riktig er det negative: kontrafaktiske betingelsessetninger forutsetter at betingelsen er usann. Kontrollen er å oversette verbformen til klartekst. Setningen sier ingenting sikkert om utfallet, bare hva som ville skjedd.",
    },
    {
      question: "Hva er komplementet til en mengde relativt til?",
      options: ["Det universet som er oppgitt", "Snittet av de to mengdene", "Den største delmengden i mengden", "Antall elementer i mengden"],
      explanation: "Riktig er universet: «alt som ikke er i A» avhenger av hva som finnes. Derfor er det en del av et presist svar å oppgi universet, og uten det er spørsmålet om komplement ubesvarlig.",
    },
    {
      question: "Hva svarer konjunksjonen til i mengdelæren?",
      options: ["Snittet", "Unionen", "Komplementet", "Delmengdeforholdet"],
      explanation: "Riktig er snittet: en ting er i snittet hviss den er i begge mengdene. Union svarer til inklusiv disjunksjon, komplement til negasjon, og delmengdeforholdet til entailment mellom setninger.",
    },
    {
      question: "Hvorfor er restriktoren til «alle» nedovergående?",
      options: ["Fordi en mindre gruppe fortsatt er inneholdt i den store", "Fordi «alle» alltid gjelder for hele universet", "Fordi «alle» inneholder en skjult negasjon", "Fordi restriktoren står først i setningen"],
      explanation: "Riktig er inneholdthetsforklaringen: setningen sier at den ene mengden ligger inne i den andre, og gjør du den første mindre, ligger den fortsatt inne der. Plasseringen i setningen har ingenting med saken å gjøre.",
    },
    {
      question: "Hva er den vanligste feilen når kandidaten bare kjører selvmotsigelsestesten?",
      options: ["Presupposisjoner blir kalt entailment", "Entailment blir kalt implikatur", "Implikaturer blir kalt presupposisjoner", "Alle slutninger blir kalt implikaturer"],
      explanation: "Riktig er at presupposisjoner feilklassifiseres som entailment. Testen gir utslag på begge, siden presupposisjonen også er sann i den bekreftende setningen. Å trekke en tredelt konklusjon av en test som deler i to, er kilden til feil 3.",
    },
    {
      question: "Hva er den vanligste tidsfellen i en Del 3-oppgave?",
      options: ["Å skrive en innledning om hva proposisjonslogikk er", "Å skrive ut den negerte setningen i klartekst", "Å ta med mellomkolonnene i sannhetstabellen", "Å oppgi kilden til hver enkelt slutning"],
      explanation: "Riktig er innledningen: den er ikke spurt om og spiser minuttene du trenger på rad-forklaringene og kildene. De tre andre punktene er tvert imot nettopp det som gir uttelling.",
    },
  ],
  'ling1100-4-1': [
    {
      question: "Hva er det predikatlogikken kan som proposisjonslogikken ikke kan?",
      options: ["Se inni setningen og regne på hvem som har hvilke egenskaper", "Regne ut sannhetsverdien til sammensatte uttrykk med konnektiver", "Avgjøre om to setninger uttrykker den samme proposisjonen", "Skille mellom setningsnivået og ytringsnivået i en semantisk analyse"],
      explanation: "Riktig er at predikatlogikken ser inni setningen. Proposisjonslogikken har setningen som minste enhet og behandler «Alle deltakerne leverte» som én udelelig bokstav. Å regne ut sammensatte uttrykk kunne proposisjonslogikken allerede, og skillet setning mot ytring hører til Del 1.",
    },
    {
      question: "Hva blir et egennavn til i en predikatlogisk oversettelse?",
      options: ["En individkonstant, altså en liten bokstav som peker på ett bestemt individ", "En individvariabel, altså en plassholder som må bindes av en kvantor for å tolkes", "Et ettplasspredikat, altså et symbol for en egenskap ved individet", "Et relasjonssymbol, altså et symbol med mer enn én argumentplass"],
      explanation: "Riktig er individkonstant. Konstanten peker på det samme individet hele veien, og det er derfor den kan bære slutninger fra premiss til konklusjon. Variabler er plassholdere uten fast referent, mens predikater og relasjonssymboler står for det som sies om individene.",
    },
    {
      question: "Hvordan oversettes «alle A er B» til predikatlogikk?",
      options: ["Med allkvantor og implikasjon inni parentesen", "Med allkvantor og konjunksjon inni parentesen", "Med eksistenskvantor og implikasjon inni parentesen", "Med eksistenskvantor og konjunksjon inni parentesen"],
      explanation: "Riktig er allkvantor med implikasjon. A-egenskapen er betingelsen som avgrenser hvem påstanden gjelder, og betingelser skrives med pil. Allkvantor med konjunksjon ville påstått at alt i domenet er A, mens eksistenskvantor med konjunksjon er oversettelsen av «noen A er B».",
    },
    {
      question: "Hvorfor kan ikke eksistenskvantoren parres med implikasjon?",
      options: ["Fordi formelen da blir sann så snart det finnes noe som ikke oppfyller antesedenten", "Fordi eksistenskvantoren ikke kan stå foran en implikasjon", "Fordi implikasjonen krever at begge leddene er sanne på samme tid", "Fordi eksistenskvantoren bare kan binde én variabel om gangen i en formel"],
      explanation: "Riktig er at formelen blir nesten alltid sann. En implikasjon med usann antesedent er sann av tom sannhet, så ett eneste individ utenfor A-mengden gjør hele eksistenspåstanden sann. Konstruksjonen er fullt lovlig grammatisk sett — den sier bare noe annet enn den skulle.",
    },
    {
      question: "Hva er ariteten til et predikat?",
      options: ["Antallet argumentplasser predikatet har i en formel", "Antallet ganger predikatet forekommer i en formel", "Antallet individer i domenet predikatet er sant om", "Antallet konnektiver predikatet kan kombineres med"],
      explanation: "Riktig er antallet argumentplasser. Ettplasspredikater uttrykker egenskaper, toplasspredikater uttrykker relasjoner, og ariteten er fast for et gitt symbol i en gitt oppgave. Hvor mange individer predikatet er sant om, er noe helt annet — det er ekstensjonen.",
    },
    {
      question: "Hva kjennetegner en åpen formel?",
      options: ["Den inneholder minst én fri variabel og har derfor ingen sannhetsverdi", "Den inneholder minst én kvantor som ikke er parret med et konnektiv", "Den kan leses på to måter fordi kvantorene kan ordnes i to rekkefølger", "Den mangler parentes rundt det uttrykket som skal negeres"],
      explanation: "Riktig er at den har en fri variabel. En variabel ingen kvantor har bundet, gjør formelen verken sann eller usann — det er ikke sagt hva variabelen står for. To lesninger er scope-flertydighet, som er et annet fenomen.",
    },
    {
      question: "Hva sier kvantornegasjonslovene?",
      options: ["At kvantoren snur når negasjonen flyttes forbi den", "At negasjonen faller bort når den flyttes forbi en kvantor", "At konnektivet inni parentesen snur mens kvantoren blir stående", "At to negasjoner alltid opphever hverandre foran en kvantor"],
      explanation: "Riktig er at kvantoren snur: all blir finnes, og finnes blir all. Negasjonen forsvinner ikke — den havner inni formelen. Mønsteret der konnektivet snur, er De Morgans lover, som er et beslektet, men annet resultat.",
    },
    {
      question: "Hvorfor er $K(a,b)$ og $K(b,a)$ ulike formler?",
      options: ["Fordi argumentrekkefølgen avgjør hvilken retning relasjonen har", "Fordi de to formlene bruker forskjellige relasjonssymboler i praksis", "Fordi den ene formelen er lukket mens den andre har en fri variabel", "Fordi de to konstantene har ulik aritet i de to formlene"],
      explanation: "Riktig er argumentrekkefølgen. Med «$x$ kjenner $y$» sier den ene at Arne kjenner Bea og den andre at Bea kjenner Arne, og de to kan ha ulik sannhetsverdi. Konstanter har ingen aritet — det er predikater som har det.",
    },
    {
      question: "Hva kreves for å oversette ordet «bare», som i «bare Nora leverte»?",
      options: ["Et eksistensledd og et entydighetsledd med identitetstegnet", "To eksistenskvantorer som binder hver sin variabel", "En eksklusiv disjunksjon mellom de to mulige leddene", "En allkvantor med konjunksjon inni virkefeltet"],
      explanation: "Riktig er eksistensledd pluss entydighetsledd. Setningen sier både at Nora leverte og at alt som leverte, er Nora, og den siste delen krever identitetstegnet. Uten det kan «bare» ikke uttrykkes i predikatlogikk.",
    },
    {
      question: "Hva betyr det at en variabel er bundet?",
      options: ["Den står i virkefeltet til en kvantor med samme bokstav", "Den står i samme parentes som en individkonstant gjør", "Den er tolket som et bestemt individ i et gitt domene", "Den forekommer i mer enn én argumentplass i formelen"],
      explanation: "Riktig er at en kvantor med samme bokstav fanger den. Bindingen er det som gjør formelen tolkbar, og den er grunnen til at bokstavvalget er likegyldig. En variabel som står sammen med en konstant, er ikke bundet av den grunn.",
    },
    {
      question: "Hvordan skrives «ingen A er B» i predikatlogikk?",
      options: ["Som en negert eksistenspåstand, eller som en allpåstand med negert konsekvent", "Som en negert allpåstand, eller som en eksistenspåstand med negert konjunkt", "Som en eksistenspåstand med to negasjoner inni virkefeltet", "Som en allpåstand med konjunksjon og negasjon foran hele formelen"],
      explanation: "Riktig er negert eksistenspåstand, eventuelt allpåstand med negert konsekvent. De to formene er ekvivalente ved kvantornegasjonsloven. Negert allpåstand og eksistenspåstand med negert konjunkt er derimot «ikke alle A er B», som bare krever ett unntak.",
    },
    {
      question: "Hva er forskjellen på «ingen A er B» og «ikke alle A er B»?",
      options: ["Den første utelukker samtlige A-er, den andre krever bare ett unntak", "Den første krever bare ett unntak, mens den andre utelukker samtlige A-er", "Den første er en eksistenspåstand, den andre er en påstand om identitet", "Den første gjelder bare når det finnes A-er, den andre gjelder alltid"],
      explanation: "Riktig er at den første utelukker alle og den andre krever ett unntak. Situasjonen med fem artikler der fire er publisert, gjør «ikke alle» sann og «ingen» usann. Begge er kvantorpåstander, og ingen av dem er en identitetspåstand.",
    },
    {
      question: "Hva er parafrasekontrollen i en oversettelsesoppgave?",
      options: ["Å lese formelen tilbake til norsk ledd for ledd og sammenligne med setningen", "Å sette inn konkrete individer for variablene og deretter regne ut sannhetsverdien", "Å telle om antall kvantorer stemmer med antall variabler i formelen", "Å kontrollere at hvert predikat har fått en ekstensjon i tolkningen"],
      explanation: "Riktig er tilbakelesingen. Den stive parafrasen avslører nesten alle parringsfeil, fordi formelen da sier noe hørbart annet enn setningen. Å sette inn individer og regne er modell-evaluering, som hører til et senere kapittel.",
    },
    {
      question: "Hva er en atomær formel?",
      options: ["Ett predikat med argumentplassene fylt ut, uten konnektiver", "Ett predikat med minst ett konnektiv knyttet til seg", "En formel som er sann i enhver modell man kan lage", "En formel der alle variablene er bundet av kvantorer"],
      explanation: "Riktig er ett predikat med utfylte argumentplasser. Atomære formler er bunnen som konnektivene bygger større formler av, akkurat som atomære proposisjoner var det i sannhetstabellene. En formel som er sann i enhver modell, er logisk sann, som er noe annet.",
    },
    {
      question: "Hvorfor skal et kvantoruttrykk som «alle deltakerne» ikke oversettes til en konstant?",
      options: ["Fordi uttrykket ikke peker ut noe individ, men angir hvor stor del av en gruppe", "Fordi uttrykket alltid står i subjektsposisjon og konstanter ikke kan gjøre det", "Fordi konstanter er forbeholdt individer som er nevnt tidligere i teksten", "Fordi uttrykket inneholder et adjektiv som må oversettes til et eget predikat"],
      explanation: "Riktig er at kvantoruttrykk ikke peker ut noe individ. «Ingen kom» handler ikke om en person som heter Ingen. Konstanter er forbeholdt egennavn og entydige beskrivelser, uansett hvor i setningen de står.",
    },
    {
      question: "Hva sier formelen «for enhver ting gjelder at hvis den er bibliotekar, så synger den» om ting som ikke er bibliotekarer?",
      options: ["Ingenting — implikasjonen er sann av tom sannhet for dem", "At de heller ikke synger, siden betingelsen ikke er oppfylt", "At formelen som helhet blir usann så snart slike ting finnes", "At de må legges til i predikatets ekstensjon for at formelen skal gjelde"],
      explanation: "Riktig er at formelen ikke sier noe om dem. Er antesedenten usann, er implikasjonen sann uansett, og det er nettopp denne egenskapen som gjør at allkvantoren kan parres med pilen. Formelen blir altså ikke usann av at slike ting finnes.",
    },
    {
      question: "Hva bør en oversettelsesnøkkel inneholde ut over selve symbolene?",
      options: ["Argumentplassene markert, slik at det går fram hvilken plass som er hvilken", "Sannhetsverdien til hvert predikat i akkurat den situasjonen oppgaven beskriver", "En liste over hvilke konnektiver som er brukt i hver enkelt formel", "Antall individer i domenet som hvert predikat er sant om"],
      explanation: "Riktig er argumentplassene. «$K$ = kjenner» sier ikke hvilken plass som er den som kjenner, og uten den opplysningen kan formelen ikke tolkes. Sannhetsverdier og domenestørrelse hører til modellen, ikke til nøkkelen.",
    },
    {
      question: "Hva er en av grunnene til at formalisering alltid er delvis?",
      options: ["Konnektivene fanger sannhetsbetingelsene, men ikke pragmatiske tilleggsbetydninger", "Konnektivene kan bare kombineres to og to om gangen, aldri i lengre kjeder av ledd", "Predikatlogikken har for få symboler til å dekke vanlige norske verb", "Kvantorene kan bare løpe over endelige mengder av individer"],
      explanation: "Riktig er at pragmatiske tilleggsbetydninger faller bort. «Men» blir til «og» og mister motsetningen; «noen» blir til eksistenskvantoren og mister «men ikke alle». Konnektiver kan godt kjedes, og det er ikke antall symboler som er begrensningen.",
    },
  ],
  'ling1100-4-2': [
    {
      question: "Hva er virkefeltet til en kvantor?",
      options: ["Den delen av formelen kvantoren virker på, markert med parentes", "Den mengden individer i domenet som kvantoren er sann om", "Det antallet variabler kvantoren kan binde samtidig i én formel", "Den rekkefølgen kvantorene står i når formelen leses høyt"],
      explanation: "Riktig er den delen av formelen kvantoren virker på. Parentesen markerer grensen, og alt utenfor hører ikke med. Hvilke individer kvantoren er sann om, avgjøres av tolkningen og er et annet spørsmål.",
    },
    {
      question: "Hvilken kvantor har videst virkefelt i en formel med to kvantorer?",
      options: ["Den som står lengst til venstre, og som dermed har den andre inni seg", "Den som står lengst til høyre, siden den regnes ut sist når formelen leses", "Allkvantoren, uansett hvor i formelen den er plassert i forhold til den andre", "Eksistenskvantoren, siden den binder den innerste variabelen"],
      explanation: "Riktig er den venstre. Den ytterste kvantoren velges én gang for alle, mens den innerste velges på nytt for hvert valg den ytterste gjør. Hvilken type kvantor det er, spiller ingen rolle for leseregelen.",
    },
    {
      question: "Hva sier den uspesifikke lesningen av «Alle deltakerne leste en artikkel»?",
      options: ["At hver deltaker leste minst én artikkel, ikke nødvendigvis den samme", "At det finnes én bestemt artikkel som samtlige deltakere leste", "At hver artikkel ble lest av minst én av deltakerne på kurset", "At antallet artikler er nøyaktig like stort som antallet deltakere på kurset"],
      explanation: "Riktig er at hver deltaker leste minst én, uten at det var den samme. Der har allkvantoren vidt virkefelt, og eksistenskvantoren velges på nytt for hver deltaker. Lesningen der én bestemt artikkel ble lest av alle, er den spesifikke.",
    },
    {
      question: "Hva er styrkeforholdet mellom de to scope-lesningene?",
      options: ["Den spesifikke lesningen entailer den uspesifikke, aldri motsatt", "Den uspesifikke lesningen entailer den spesifikke, aldri motsatt", "De to lesningene entailer hverandre gjensidig i alle situasjoner", "Ingen av lesningene entailer den andre i noen situasjon"],
      explanation: "Riktig er at den spesifikke entailer den uspesifikke. Finnes det én artikkel alle leste, har hver deltaker lest minst én. Motsatt vei finnes det moteksempel: den situasjonen der hver deltaker leste sin egen artikkel.",
    },
    {
      question: "Hva gjør kvantorløfting?",
      options: ["Flytter et kvantoruttrykk opp foran setningen i logisk form og etterlater et spor", "Bytter om rekkefølgen på ordene i setningen vi faktisk hører", "Erstatter en kvantor med den andre og snur konnektivet inni parentesen", "Slår sammen to kvantorer til én som binder begge variablene"],
      explanation: "Riktig er at et kvantoruttrykk flyttes opp i logisk form. Overflateformen er uendret — vi hører ingen omstokking. Å bytte kvantor og konnektiv er kvantornegasjonslovene, som er et annet fenomen.",
    },
    {
      question: "Hva er sporet i en kvantorløfting?",
      options: ["Den tomme plassen det løftede uttrykket forlot, som den løftede kvantoren binder", "Den parentesen som markerer virkefeltet til den kvantoren som nettopp er blitt løftet", "Den variabelen som blir stående fri etter at kvantoren er flyttet", "Det konnektivet som knytter de to kvantorene sammen i formelen"],
      explanation: "Riktig er den tomme plassen som bindes. Sporet er ikke bokføring: det blir til den andre argumentplassen i relasjonssymbolet. Uten det ville verbet stått uten objekt, og en fri variabel er nettopp det motsatte av en bundet plass.",
    },
    {
      question: "Hva er en skillesituasjon i en scope-oppgave?",
      options: ["En konkret situasjon der de to lesningene får ulik sannhetsverdi", "En situasjon der begge lesningene av setningen er sanne samtidig", "En omformulering av setningen som fjerner flertydigheten helt", "En parafrase som dekker begge lesningene på én gang"],
      explanation: "Riktig er en situasjon der lesningene skiller lag. Framgangsmåten er å gjøre den svakeste lesningen sann på den mest spredte måten, slik at den sterke utelukkes. En omformulering som fjerner flertydigheten, er en parafrase og noe annet.",
    },
    {
      question: "Hvorfor er scope-flertydighet en strukturell og ikke en leksikalsk flertydighet?",
      options: ["Fordi hvert ord betyr det samme i begge lesninger, og bare ordningen varierer", "Fordi flertydigheten forsvinner så snart setningen skrives ned i logisk form i stedet", "Fordi ett av ordene i setningen har to beslektede betydninger", "Fordi flertydigheten bare oppstår i skriftlig og ikke i muntlig norsk"],
      explanation: "Riktig er at ordene betyr det samme. Flertydigheten ligger i hvordan de to mengdeangivelsene forholder seg til hverandre i virkefelts-hierarkiet. Ett ord med flere beslektede betydninger er polysemi, som er leksikalsk.",
    },
    {
      question: "Hva er logisk form i denne sammenhengen?",
      options: ["Et representasjonsnivå der virkefeltene er entydig fastlagt", "Den formen setningen har når den uttales eller skrives ned på papiret", "Den formelen som er felles for begge lesningene av setningen", "Et regelsett som avgjør hvilken av de to lesningene som er den riktige"],
      explanation: "Riktig er et representasjonsnivå der virkefeltene er entydige. En flertydig setning har derfor én overflateform og to logiske former. Ingen av lesningene er «den riktige» — begge er lesninger av setningen.",
    },
    {
      question: "Hvilke to lesninger har «Alle deltakerne leverte ikke»?",
      options: ["At ingen leverte, og at det ikke er tilfelle at alle leverte", "At noen leverte, og at det finnes noen som ikke leverte", "At alle leverte, og at ingen av dem gjorde det frivillig", "At ingen leverte, og at nøyaktig én av dem leverte likevel"],
      explanation: "Riktig er «ingen leverte» og «ikke alle leverte». Forskjellen er hvem som står ytterst i formelen, kvantoren eller negasjonen. Den første utelukker samtlige, den andre er sann selv om nesten alle leverte.",
    },
    {
      question: "Hva kjennetegner den spesifikke lesningen av en scope-flertydig setning?",
      options: ["Eksistenskvantoren står ytterst, og individet er valgt én gang for alle", "Eksistenskvantoren står innerst, og individet velges på nytt hver gang", "Allkvantoren står ytterst, og individene prøves i tur og orden", "Begge kvantorene står utenfor parentesen som markerer virkefeltet"],
      explanation: "Riktig er at eksistenskvantoren står ytterst. Da er individet valgt før allkvantoren kommer inn, og det er derfor det er det samme for alle. Står den innerst, får hver ting sin egen, og lesningen er uspesifikk.",
    },
    {
      question: "Hva er en entydig parafrase i en scope-oppgave?",
      options: ["En omskrivning som selv bare kan leses på én måte", "En omskrivning som gjengir den opprinnelige setningen ordrett", "En omskrivning som bruker de samme kvantorene i motsatt rekkefølge", "En omskrivning som er sann i nøyaktig de samme situasjonene som formelen"],
      explanation: "Riktig er at parafrasen selv må være entydig. «Alle leste en artikkel» duger ikke — det er den flertydige setningen om igjen. Å være sann i de samme situasjonene er et krav som også en flertydig omskrivning kan oppfylle for én lesning av gangen.",
    },
    {
      question: "Hva skjer med parringsregelen når du bytter rekkefølgen på kvantorene?",
      options: ["Ingenting — allkvantoren beholder implikasjonen og eksistenskvantoren konjunksjonen", "Den snus, slik at allkvantoren nå tar konjunksjon og eksistenskvantoren tar pilen i stedet", "Den faller bort, siden nøstede kvantorer ikke trenger noe konnektiv", "Den gjelder bare for den kvantoren som står ytterst i den nye formelen"],
      explanation: "Riktig er at parringen står uendret. Det er rekkefølgen som skifter mellom lesningene, ikke hvilket konnektiv hver kvantor tar. Å bytte begge deler samtidig er å gjøre to feil i samme formel.",
    },
    {
      question: "Hva menes med den foretrukne lesningen av en scope-flertydig setning?",
      options: ["Den lesningen som melder seg først uten videre sammenheng", "Den lesningen som er logisk sterkest av de to mulige lesningene", "Den lesningen som følger av formelen med færrest parenteser", "Den lesningen som gjør setningen sann i flest situasjoner"],
      explanation: "Riktig er den som melder seg først. Det er et pragmatisk forhold, ikke et semantisk: setningen har fortsatt begge lesningene, og sammenhengen kan gjøre den mindre tilgjengelige til den opplagte. Den foretrukne er dessuten som regel den svakeste, ikke den sterkeste.",
    },
  ],
  'ling1100-4-3': [
    {
      question: "Hva består en modell av?",
      options: ["Et domene og en tolkningsfunksjon, oppgitt som et ordnet par", "En formel og en sannhetsverdi, oppgitt som et ordnet par", "Et domene og en mengde formler som er sanne i det", "En tolkningsfunksjon og en liste over gyldige slutningsregler"],
      explanation: "Riktig er domene og tolkningsfunksjon. Domenet er tingene som finnes, og tolkningsfunksjonen sier hva hvert symbol viser til. Formler og sannhetsverdier er det modellen brukes til å regne ut, ikke deler av den.",
    },
    {
      question: "Hva er domenet i en modell?",
      options: ["Mengden av alle tingene som finnes i den situasjonen modellen beskriver", "Mengden av alle formlene som viser seg å være sanne i den gitte modellen", "Mengden av alle konstantene som er brukt i oppgaveteksten", "Mengden av alle ordnede par som kan dannes av individene"],
      explanation: "Riktig er tingene som finnes. Domenet er det kvantorene løper over, og det er derfor «for alt» betyr «for alt i denne modellen». Alle mulige ordnede par er noe annet — det er kvadratet av domenestørrelsen.",
    },
    {
      question: "Hvordan tolkes et ettplasspredikat i en modell?",
      options: ["Som en mengde av individer, nemlig de predikatet er sant om", "Som en mengde av ordnede par av individer hentet fra domenet", "Som ett bestemt individ i domenet som predikatet peker ut i modellen", "Som en sannhetsverdi som gjelder hele domenet under ett"],
      explanation: "Riktig er som en mengde individer. Ekstensjonen er de tingene predikatet er sant om, og det som ikke står der, er usant. Mengder av ordnede par er tolkningen av toplasspredikater, altså relasjoner.",
    },
    {
      question: "Hvordan tolkes et toplasspredikat i en modell?",
      options: ["Som en mengde av ordnede par, der rekkefølgen inni paret betyr noe", "Som en mengde av uordnede par, der rekkefølgen er likegyldig", "Som to atskilte mengder, én for hver argumentplass i predikatet", "Som en mengde individer som står i relasjonen til seg selv"],
      explanation: "Riktig er en mengde ordnede par. Rekkefølgen bærer retningen i relasjonen, og det er derfor paret Arne–Bea er noe annet enn paret Bea–Arne. Uordnede par ville ikke kunnet skille de to retningene.",
    },
    {
      question: "Når er en atomær formel med ettplasspredikat sann i en modell?",
      options: ["Når individet konstanten viser til, er medlem av predikatets ekstensjon", "Når individet konstanten viser til, finnes et sted i domenet", "Når predikatets ekstensjon inneholder minst ett individ i det hele tatt", "Når konstanten har fått en verdi av tolkningsfunksjonen"],
      explanation: "Riktig er medlemskap i ekstensjonen. Oppslaget går i to trinn: først hva konstanten viser til, så om det individet er med i mengden. At konstanten har fått en verdi, er en forutsetning for i det hele tatt å kunne slå opp, ikke svaret.",
    },
    {
      question: "Hva betyr det at modellen er fullstendig?",
      options: ["At alt som ikke står i en ekstensjon, er usant i modellen", "At alle formler som kan skrives, er sanne eller usanne i den", "At hvert individ i domenet er medlem av minst én ekstensjon", "At tolkningsfunksjonen gir en verdi til hvert symbol i språket"],
      explanation: "Riktig er at det som ikke står der, er usant. Modellen lar ingenting stå åpent, og du kan derfor lese negative svar rett ut av den. At hvert symbol får en verdi, er et krav til oppsettet, ikke det fullstendighet betyr her.",
    },
    {
      question: "Hvorfor kan man ikke slutte fra $K(a,b)$ og $K(b,c)$ til $K(a,c)$?",
      options: ["Fordi transitivitet må være oppgitt i modellen og ikke kan antas", "Fordi de tre konstantene viser til tre ulike individer i domenet", "Fordi relasjonen bare kan ha to ordnede par i ekstensjonen sin", "Fordi kvantorene ikke er nevnt i noen av de tre formlene"],
      explanation: "Riktig er at transitivitet må være oppgitt. Modellen sier bare det som står i den, og de fleste relasjoner er ikke transitive. Antall par i ekstensjonen kan være så mange man vil.",
    },
    {
      question: "Når er en allkvantert formel sann i en modell?",
      options: ["Når formelen inni kvantoren er sann for hvert individ i domenet", "Når formelen inni kvantoren er sann for minst ett individ i domenet", "Når formelen inni kvantoren er sann for flertallet av individene", "Når domenet inneholder minst like mange individer som konstanter"],
      explanation: "Riktig er at den må holde for hvert individ. Ett moteksempel er nok til å velte formelen, og derfor bør svaret peke ut hvilket individ som velter den. Kravet om minst ett individ er eksistenskvantoren.",
    },
    {
      question: "Hva er den beste framgangsmåten for å evaluere en kvantorformel i en liten modell?",
      options: ["Prøve hvert individ i domenet etter tur og føre opp utfallet for hvert", "Regne ut sannhetsverdien til hele formelen i ett eneste trinn helt til slutt", "Bruke sannhetstabellen for det hovedkonnektivet formelen har", "Telle hvor mange par som finnes i relasjonens ekstensjon"],
      explanation: "Riktig er å prøve hvert individ og føre opp utfallet. Det er listen som gjør svaret kontrollerbart, og den er halve poenget med oppgavetypen. Sannhetstabeller brukes på konnektivene, etter at atomene er slått opp.",
    },
    {
      question: "Hva er en motmodell?",
      options: ["En modell der formelen får motsatt sannhetsverdi av den den hadde", "En modell der alle formlene i oppgaven blir usanne samtidig", "En modell med et større domene enn det den opprinnelige modellen hadde", "En modell der tolkningsfunksjonen ikke er definert for alle symboler"],
      explanation: "Riktig er motsatt sannhetsverdi. Framgangsmåten er å endre nøyaktig det oppslaget som avgjorde svaret, ikke å bygge en ny modell fra grunnen. En modell uten fullstendig tolkningsfunksjon er ikke en modell i det hele tatt.",
    },
    {
      question: "Hva skiller vinkelparentesene fra krøllparentesene i denne boka?",
      options: ["Vinkelparentes betyr ordnet par, krøllparentes betyr mengde", "Vinkelparentes betyr mengde, krøllparentes betyr ordnet par", "Vinkelparentes betyr denotasjon, krøllparentes betyr virkefelt", "Vinkelparentes brukes i formler, krøllparentes bare i brødtekst"],
      explanation: "Riktig er ordnet par mot mengde. Rekkefølgen inni et par bærer informasjon, mens rekkefølgen inni en mengde er likegyldig. Denotasjon har sin egen klammetype, de doble hakeparentesene.",
    },
    {
      question: "Hva er denotasjonen til et uttrykk?",
      options: ["Den verdien uttrykket har i en gitt modell", "Den mengden av modeller der uttrykket er sant", "Det symbolet uttrykket er oversatt fra i naturlig språk", "Den regelen som avgjør hvordan uttrykket skal tolkes"],
      explanation: "Riktig er verdien i en modell. For en konstant er verdien et individ, for en hel formel er den en sannhetsverdi. Mengden av modeller der noe er sant, er et helt annet begrep og hører til entailment.",
    },
    {
      question: "Hvorfor brukes ikke symbolet for entailment om sannhet i én modell?",
      options: ["Fordi entailment er en påstand om alle modeller, ikke om én", "Fordi entailment bare gjelder mellom formler som er uten kvantorer", "Fordi symbolet allerede er brukt om material implikasjon i boka", "Fordi sannhet i én modell ikke kan uttrykkes med noe eget symbol"],
      explanation: "Riktig er at entailment gjelder alle modeller. Sannhet i én modell er en påstand om nettopp én situasjon, og å bruke samme symbol ville visket ut det skillet Del 3 handlet om. Material implikasjon har sitt eget symbol, pilen.",
    },
    {
      question: "Hva er den tomme mengden i denne sammenhengen?",
      options: ["En ekstensjon uten medlemmer, altså et predikat som ikke er sant om noe", "Et domene helt uten individer i seg, noe som gjør hele modellen udefinert", "En formel som er usann i enhver modell man kan konstruere", "En tolkningsfunksjon som mangler verdi for minst ett symbol"],
      explanation: "Riktig er en ekstensjon uten medlemmer. Da er eksistenspåstanden om predikatet usann, mens en allpåstand med predikatet som antesedent blir sann av tom sannhet. En formel som er usann overalt, kalles en kontradiksjon.",
    },
    {
      question: "Hvordan evalueres en nøstet kvantorformel i praksis?",
      options: ["I to lag: den ytterste velger, og den innerste prøves på nytt for hvert valg", "I ett lag: begge kvantorene prøves samtidig mot hvert eneste individ i domenet", "Ved å bytte om rekkefølgen så den innerste kommer først", "Ved å regne ut sannhetsverdien til atomet før kvantorene settes på"],
      explanation: "Riktig er to lag med gjentatt prøving. Det er scope-mekanikken gjort til en utregning, og det er derfor rekkefølgen på kvantorene gir ulike svar. Å bytte om rekkefølgen ville endret hvilken formel du evaluerer.",
    },
    {
      question: "Hva sier funksjonsbeskrivelsen av et ettplasspredikat?",
      options: ["At predikatet er en funksjon fra individer til sannhetsverdier", "At predikatet er en funksjon fra sannhetsverdier til individer", "At predikatet er en funksjon fra ordnede par til mengder", "At predikatet er en funksjon fra modeller til domener"],
      explanation: "Riktig er fra individer til sannhetsverdier. Å oppgi hvilke individer funksjonen gir sann for, er nøyaktig det samme som å oppgi en mengde. Mengdeversjonen er lettest å regne med for hånd, funksjonsversjonen lettest å bygge videre på.",
    },
    {
      question: "Hva er argumentet til en funksjon?",
      options: ["Det funksjonen får inn, og som den gir en verdi for", "Det funksjonen gir ut når den blir anvendt på noe", "Den regelen som knytter inn og ut sammen", "Den mengden av alle verdier funksjonen kan gi"],
      explanation: "Riktig er det funksjonen får inn. Ordet brukes også om det som fyller en plass i et predikat, og de to bruksmåtene ligger på ulike nivåer. Det funksjonen gir ut, kalles verdien.",
    },
    {
      question: "Hva bør et svar på en modelloppgave inneholde ut over sannhetsverdien?",
      options: ["Oppslaget for hvert atom og hvilket individ som avgjorde svaret", "En oversettelse av formelen tilbake til norsk som kontroll", "En sannhetstabell for alle kombinasjoner av sannhetsverdier", "En begrunnelse for hvorfor akkurat denne modellen ble valgt"],
      explanation: "Riktig er oppslaget og det avgjørende individet. En riktig verdi uten framgangsmåte er et gjettet svar, og føringen er halve poenget. Sannhetstabeller trengs ikke, siden atomene har faste verdier i en gitt modell.",
    },
  ],
  'ling1100-4-4': [
    {
      question: "Hva er første trinn i oversettelsesalgoritmen?",
      options: ["Å finne individene og avgjøre om de er navn eller kvantoruttrykk", "Å velge hvilke konnektiver formelen skal bygges opp av til slutt", "Å skrive formelen og deretter lage nøkkelen til den", "Å regne ut sannhetsverdien til hvert atom i formelen"],
      explanation: "Riktig er å finne individene først. Egennavn blir konstanter, kvantoruttrykk blir kvantor pluss variabel, og det valget styrer resten. Nøkkelen skrives før formelen, ikke etter.",
    },
    {
      question: "Hva er parringskontrollen?",
      options: ["Å sjekke at hver allkvantor har pil inni seg og hver eksistenskvantor har og", "Å sjekke at hvert predikat har like mange argumenter som ariteten i nøkkelen sier", "Å sjekke at hvert ordnet par står i riktig rekkefølge i oppslaget", "Å sjekke at antall kvantorer stemmer med antall variabler i formelen"],
      explanation: "Riktig er kontrollen av kvantor mot konnektiv. Den tar fem sekunder og fanger den vanligste feilen i oversettelser. Å telle argumenter og å kontrollere par er andre, like nyttige kontroller.",
    },
    {
      question: "Hva er ordnet-par-kontrollen?",
      options: ["Å skrive ned paret du leter etter, i riktig rekkefølge, før du slår opp", "Å telle hvor mange ordnede par relasjonens ekstensjon inneholder i alt", "Å kontrollere at begge individene i paret finnes i domenet", "Å prøve begge rekkefølger og velge den som gjør formelen sann"],
      explanation: "Riktig er å skrive paret ned først. Har du notert rekkefølgen, kan du ikke lenger forveksle den med den motsatte. Å velge den rekkefølgen som gjør formelen sann, er nettopp feilen kontrollen skal hindre.",
    },
    {
      question: "Hva er første trinn i evalueringsalgoritmen?",
      options: ["Å skrive modellen ned, også når oppgaven allerede oppgir den", "Å finne hovedkonnektivet i den formelen som skal evalueres", "Å prøve hvert individ i domenet mot formelen inni kvantoren", "Å oversette formelen tilbake til norsk som en kontroll"],
      explanation: "Riktig er å skrive modellen ned. Uten den kan svaret ditt ikke kontrolleres, og det er samme krav som variabelforklaringen i en sannhetstabell. Hovedkonnektivet finnes i neste trinn.",
    },
    {
      question: "Hvor mange ordnede par kan dannes av fire individer?",
      options: ["Seksten, siden hvert individ kan stå i begge plasser", "Åtte, siden hvert individ kan stå i to ulike plasser", "Tolv, siden ingen individer kan pares med seg selv", "Fire, siden hvert individ danner ett par hver"],
      explanation: "Riktig er seksten. Hvert av de fire kan stå i første plass, og for hvert av dem kan hvert av de fire stå i andre plass — også det samme individet. Utelater man parene med seg selv, blir det tolv, men slike par er fullt lovlige.",
    },
    {
      question: "Hva skal du gjøre når en allkvantert formel viser seg usann?",
      options: ["Peke ut hvilket individ som velter den, og vise oppslaget for det", "Prøve alle individene på nytt for å finne en annen tolkning", "Endre modellen slik at formelen blir sann, og oppgi begge svar", "Skrive om formelen med eksistenskvantor i stedet for med allkvantor"],
      explanation: "Riktig er å peke ut det avgjørende individet. Det er trinnet som skiller et fullstendig svar fra et riktig. Å endre modellen er noe man gjør når oppgaven ber om en motmodell, ikke i stedet for å svare.",
    },
    {
      question: "Hva sier en formel som består av en negasjon utenpå en eksistenspåstand?",
      options: ["At ingenting i domenet oppfyller formelen inni kvantoren", "At minst én ting i domenet ikke oppfyller formelen inni kvantoren", "At nøyaktig én ting i domenet oppfyller formelen inni kvantoren", "At formelen inni er usann for det første individet i domenet"],
      explanation: "Riktig er at ingenting oppfyller den. Ved kvantornegasjonsloven er dette det samme som at alt ikke oppfyller den. At minst én ting ikke gjør det, er derimot en negert allpåstand.",
    },
    {
      question: "Hva bør du gjøre når du skal oversette en setning med ordet «bare»?",
      options: ["Skrive to ledd: at noe er tilfelle, og at ingenting annet er det", "Skrive ett ledd med eksklusiv disjunksjon mellom mulighetene", "Skrive en allkvantor med konjunksjon inni virkefeltet", "Skrive en eksistenskvantor og la entydigheten være underforstått"],
      explanation: "Riktig er to ledd. Entydighetsleddet krever identitetstegnet, og det er dette leddet som bærer ordet «bare». Å la entydigheten være underforstått er nettopp å utelate halve betydningen.",
    },
    {
      question: "Hva må stå i en oversettelsesnøkkel for et toplasspredikat?",
      options: ["Hvilken argumentplass som er hvilken, skrevet ut i ord", "Hvilke individer i domenet relasjonen faktisk er sann om", "Hvor mange ordnede par ekstensjonen inneholder til sammen", "Hvilket konnektiv predikatet skal parres med"],
      explanation: "Riktig er hvilken plass som er hvilken. «$K$ = kjenner» sier ikke hvem som kjenner hvem, og uten det kan formelen ikke tolkes. Ekstensjonen hører til modellen, ikke til nøkkelen.",
    },
    {
      question: "Hvor lang tid bør du regne med på en F2-oppgave på eksamen?",
      options: ["Omtrent tjue minutters skrivetid, som er én av ti besvarelser", "Omtrent førti minutters skrivetid, siden formlene tar tid å sette opp", "Omtrent ti minutters skrivetid, siden selve svaret er kort å skrive", "Omtrent en time, siden hele settet består av fire oppgaver"],
      explanation: "Riktig er omtrent tjue minutter. Det nyeste settformatet har ti besvarelser fordelt på fire timer, og differansen går til å lese settet, velge oppgaver og lese gjennom til slutt. F2-oppgaver er blant de raskeste når de er øvd inn.",
    },
    {
      question: "Hva er den vanligste feilen i en scope-oppgave?",
      options: ["Å oppgi bare én av de to lesningene når oppgaven ber om begge", "Å bruke feil bokstav for variabelen i den innerste kvantoren", "Å skrive parafrasen før formelen i stedet for etter", "Å bruke allkvantor der setningen har et egennavn som subjekt"],
      explanation: "Riktig er å oppgi bare én lesning. En flertydighet kan ikke vises med én formel, og halve svaret mangler da. Bokstavvalget for en bundet variabel er derimot helt likegyldig.",
    },
    {
      question: "Hva skjer med en formel som mangler parentes rundt kvantorens virkefelt?",
      options: ["Deler av formelen faller utenfor, og en variabel blir stående fri", "Kvantoren mister evnen til å binde noen variabel", "Formelen blir automatisk usann i alle modeller den prøves mot", "Konnektivet inni bytter plass med kvantoren når formelen leses"],
      explanation: "Riktig er at en variabel blir fri. Formelen blir da åpen og har ingen sannhetsverdi, og den kan derfor ikke være oversettelsen av en fullstendig setning. Kvantoren binder fortsatt det som står innenfor rekkevidden sin.",
    },
    {
      question: "Hva er trinnvis oppbygging i en modelloppgave?",
      options: ["Å regne ut de minste delene først og sette dem sammen utover", "Å regne ut hele formelen i ett trinn og kontrollere til slutt", "Å prøve individene i domenet i alfabetisk rekkefølge etter navn", "Å skrive formelen om til en enklere, men ekvivalent form først"],
      explanation: "Riktig er å regne innenfra og ut. Mellomtrinnene skal stå i svaret, akkurat som mellomkolonnene i en sannhetstabell — de er dokumentasjon, ikke rot. Rekkefølgen på individene spiller ingen rolle.",
    },
    {
      question: "Hvordan lager du en motmodell med minst mulig endring?",
      options: ["Ved å endre nøyaktig det oppslaget som avgjorde sannhetsverdien", "Ved å bytte ut hele tolkningsfunksjonen med en ny", "Ved å legge til et individ i domenet uten å endre ekstensjonene", "Ved å fjerne den konstanten som formelen handler om"],
      explanation: "Riktig er å endre det avgjørende oppslaget. Har du pekt ut individet som veltet eller reddet formelen, er motmodellen allerede halvveis funnet. Å fjerne en konstant ville gjort formelen utolkbar i stedet for usann.",
    },
    {
      question: "Hvorfor er F2-oppgaver verdt å øve på selv om de forekommer sjelden?",
      options: ["Fordi de er mekaniske og derfor billige å lære, og fordi de differensierer", "Fordi de gir flere poeng enn de redegjørende oppgavene ellers i settet gjør", "Fordi de alltid står først i settet og må besvares av alle", "Fordi de kan besvares uten kjennskap til resten av pensum"],
      explanation: "Riktig er at de er mekaniske og differensierer. En oppgave få har øvd på, skiller kandidatene mer enn en alle har øvd på. Ingen oppgaver i settene er obligatoriske på den måten svaret om rekkefølge antyder.",
    },
    {
      question: "Hva kjennetegner et svar som bare oppgir sannhetsverdien i en modelloppgave?",
      options: ["Det mangler framgangsmåten, som er halve poenget med oppgavetypen", "Det er fullstendig, siden sannhetsverdien er det eneste som kan kontrolleres", "Det er riktig så lenge modellen er skrevet av i besvarelsen", "Det mangler bare den avsluttende parafrasen av formelen tilbake til norsk"],
      explanation: "Riktig er at framgangsmåten mangler. En riktig verdi uten oppslag er ikke skilt fra et gjettet svar. Parafrasen hører til oversettelsesoppgaver, ikke til evalueringer.",
    },
  ],
  'ling1100-5-1': [
    {
      question: "Hva er en situasjonstype?",
      options: ["Den typen situasjon en setning beskriver, sett ut fra hvordan den forløper i tid", "Den tiden situasjonen plasseres i, målt fra det øyeblikket setningen faktisk ytres", "Den grammatiske formen verbet har i den aktuelle setningen", "Den mengden individer som deltar i den beskrevne situasjonen"],
      explanation: "Riktig er hvordan situasjonen forløper i tid. Tre spørsmål avgjør: skjer det noe, tar det tid, og har det et punkt der det er ferdig. Plasseringen i tid er tempus, som er en annen kategori.",
    },
    {
      question: "Hvilken test skiller statisk fra dynamisk?",
      options: ["Om situasjonen kan settes inn i uttrykket «holde på med å …»", "Om situasjonen kan kombineres med adverbialet «på to timer»", "Om situasjonen tåler ordet «nesten» foran verbet", "Om situasjonen kan avbrytes uten at noe blir ufullført"],
      explanation: "Riktig er progressivtesten. Bare noe som utfolder seg, kan pågå, og en tilstand er der eller ikke der. «På to timer» avgjør telisitet, og avbruddstesten skiller telisk fra atelisk.",
    },
    {
      question: "Hva betyr det at en situasjon er telisk?",
      options: ["Den har et naturlig endepunkt som følger av beskrivelsen selv", "Den ble faktisk fullført i den situasjonen setningen beskriver", "Den ble utført med vilje av en handlende deltaker", "Den varer over et tidsrom og er ikke momentan"],
      explanation: "Riktig er det naturlige endepunktet. «Sara skrev en rapport, men ble avbrutt» beskriver fortsatt en telisk situasjonstype — endepunktet finnes, det ble bare ikke nådd. Vilje og varighet er andre spørsmål.",
    },
    {
      question: "Hvilken test er hovedtesten på telisitet?",
      options: ["Om situasjonen kan kombineres med et adverbial av typen «på to timer»", "Om situasjonen kan kombineres med et adverbial av typen «i to timer»", "Om situasjonen kan være svar på spørsmålet «Hva gjorde X?»", "Om situasjonen kan gjentas flere ganger etter hverandre"],
      explanation: "Riktig er «på X tid»-testen. Adverbialet måler tiden fram mot endepunktet, og finnes det ikke noe endepunkt, har det ingenting å måle. «I X tid» peker motsatt vei, mot atelisk, og de to brukes sammen.",
    },
    {
      question: "Hvorfor klassifiserer vi setninger og ikke verb?",
      options: ["Fordi situasjonstypen ligger i verbfrasen, og objektet kan snu telisiteten", "Fordi verb ikke har noen selvstendig betydning før de settes inn i en setning", "Fordi klassifiseringen bare gjelder for setninger i fortidsform", "Fordi et verb kan tilhøre flere ordklasser samtidig i norsk"],
      explanation: "Riktig er at situasjonstypen ligger i verbfrasen. «Skrive en rapport» er telisk, «skrive rapporter» er atelisk — samme verb, ulik klasse. Verb har selvsagt betydning alene; det er situasjonstypen som krever hele frasen.",
    },
    {
      question: "Hva er delintervall-egenskapen?",
      options: ["At en atelisk situasjon også gjelder for hver del av tidsrommet den varer", "At en telisk situasjon deles i en prosessdel og en avsluttende sluttdel til slutt", "At en punktuell situasjon kan deles opp i mindre hendelser", "At en statisk situasjon kan avbrytes uten at noe blir ufullført"],
      explanation: "Riktig er at situasjonen gjelder for hver del. Har noen løpt i en time, har de også løpt i hvert kvarter av den. Teliske situasjoner mangler egenskapen, og det er derfor avbruddstesten skiller de to.",
    },
    {
      question: "Hva viser «slutte å»-testen ved en atelisk situasjon?",
      options: ["At situasjonen fortsatt gjelder for den delen som ble utført", "At situasjonen ikke fant sted i det hele tatt hvis den ble avbrutt", "At situasjonen bare kan avbrytes når den når et naturlig endepunkt", "At situasjonen må gjentas for å regnes som fullført"],
      explanation: "Riktig er at situasjonen er oppfylt underveis. Har noen løpt i ti minutter og stopper, har de løpt. Ved teliske situasjoner er det motsatt: avbrytes skrivingen, er rapporten ikke skrevet.",
    },
    {
      question: "Hva betyr markøren stjerne foran en eksempelsetning?",
      options: ["At grammatikken ikke genererer strengen", "At setningen er stilistisk uheldig i skriftlig norsk", "At setningen er sann i noen situasjoner og usann i andre", "At setningen er hentet fra et publisert eksamenssett"],
      explanation: "Riktig er at grammatikken ikke genererer den. Markøren er et utsagn om et grammatisk system, aldri en dom over en språkbruker eller en vurdering av stil. Spørsmålstegnet brukes når setningen er tvilsom uten å være ugrammatisk.",
    },
    {
      question: "Hvorfor er kombinasjonen statisk og telisk umulig?",
      options: ["Fordi en tilstand ikke har noen indre utvikling som kan fullføres", "Fordi statiske situasjoner alltid er punktuelle og aldri strekker seg over tid", "Fordi teliske situasjoner alltid krever en deltaker som handler bevisst", "Fordi statiske situasjoner ikke kan kombineres med tidsadverbialer"],
      explanation: "Riktig er at en tilstand mangler indre utvikling. Sluttpunktet til en tilstand er derfor alltid vilkårlig og aldri innebygd. Statiske situasjoner er tvert imot alltid durative og tåler tidsrom-adverbialer godt.",
    },
    {
      question: "Hva kjennetegner en punktuell situasjon?",
      options: ["Den er momentan og har ikke noe tidspunkt der den er halvveis", "Den varer kort, men har likevel en indre utstrekning", "Den kan bare beskrives med verb som står i presens eller i preteritum", "Den mangler alltid et naturlig endepunkt i den beskrevne situasjonen"],
      explanation: "Riktig er at den er momentan uten indre utstrekning. Det finnes ikke et tidspunkt der en ballong er halvveis sprukket. Punktuelle situasjoner kan godt være teliske — en ankomst er det.",
    },
    {
      question: "Hva skjer med «holde på med»-testen ved en punktuell situasjon?",
      options: ["Den gir enten en forberedelseslesning eller en gjentakelseslesning", "Den gir en lesning der selve situasjonen pågår helt som den ville gjort ellers", "Den blir ugrammatisk og kan ikke brukes om en slik situasjon i det hele tatt", "Den gir samme resultat som ved en durativ situasjon"],
      explanation: "Riktig er forberedelse eller gjentakelse. «Toget holdt på med å ankomme» beskriver tiden før ankomsten, ikke en pågående ankomst — og at omtolkningen kreves, er selve utslaget. Setningen er altså ikke ugrammatisk.",
    },
    {
      question: "Hvordan påvirker objektet telisiteten?",
      options: ["Et avgrenset objekt gir naturlig endepunkt, et mengdeobjekt gir det ikke", "Et avgrenset objekt gir atelisitet, mens et ubestemt mengdeobjekt gir telisitet", "Objektet påvirker bare varigheten av situasjonen, aldri telisiteten i setningen", "Objektet påvirker telisiteten bare når verbet står i fortidsform"],
      explanation: "Riktig er at et avgrenset objekt gir endepunkt. «Skrive en rapport» er telisk, «skrive rapporter» er ikke. Merk likevel at et bestemt objekt ikke alltid holder — «diskutere oppgaven» er atelisk.",
    },
    {
      question: "Hva bør et svar på en klassifiseringsoppgave inneholde ut over trekkene?",
      options: ["Testene skrevet ut som faktiske setninger, med markør der de ikke går", "En begrunnelse for hvorfor akkurat disse setningene ble valgt ut til oppgaven", "En oversikt over hvilke verb som normalt hører til hver klasse", "En vurdering av hvor sannsynlig det er at situasjonen fant sted i virkeligheten"],
      explanation: "Riktig er testene skrevet ut. «Jeg brukte progressivtesten» forteller ikke hva resultatet ble, og et trekk uten test er en påstand. Hva som faktisk skjedde, er ikke et semantisk spørsmål.",
    },
    {
      question: "Hva gjør du når testene spriker på en setning?",
      options: ["Sier hvilke lesninger setningen har og klassifiserer hver for seg", "Velger den klassen magefølelsen tilsier, og går videre", "Skriver at det ikke er mulig å avgjøre klassen for setningen", "Bruker bare den testen som gir det mest ventede resultatet"],
      explanation: "Riktig er å klassifisere hver lesning for seg. Sprikende tester skyldes nesten alltid at setningen har mer enn én lesning. Å skrive «det kommer an på» uten å si hva det kommer an på, er slark.",
    },
    {
      question: "Hva er forholdet mellom situasjonstypen og hendelsen ute i verden?",
      options: ["Situasjonstypen er en egenskap ved beskrivelsen, ikke ved hendelsen", "Situasjonstypen er en egenskap ved hendelsen, ikke ved beskrivelsen", "De to faller alltid sammen, siden setningen beskriver hendelsen", "Situasjonstypen avgjøres av hvor lenge hendelsen faktisk varte"],
      explanation: "Riktig er at det er beskrivelsen som avgjør. Samme fjelltur kan beskrives både som «klatret i fjellet» og som «klatret opp til toppen», med ulik klasse. En diskusjon om hva som virkelig skjedde, er derfor ikke en semantisk analyse.",
    },
    {
      question: "Hvordan uttrykkes pågående handling på norsk, siden språket mangler progressiv form?",
      options: ["Med omskrivninger som «holde på med å» og «være i ferd med å»", "Med presens partisipp av hovedverbet i stedet for med infinitiv", "Med et eget hjelpeverb som bare brukes til å uttrykke pågående handling", "Med tidsadverbialer som «akkurat nå» plassert foran hovedverbet"],
      explanation: "Riktig er omskrivningene. Engelsk har en egen bøyningsform, norsk bruker uttrykk som «holde på med å», og det er den formen boka bruker i testene. Testen måler det samme på begge språk.",
    },
    {
      question: "Hva heter det trekket som skiller «Jonas løp i parken» fra «Jonas løp to runder»?",
      options: ["Telisitet — den andre setningen har et naturlig endepunkt", "Durativitet — den andre setningen er momentan", "Dynamikk — den andre setningen beskriver en tilstand", "Aspekt — den andre setningen er presentert som avsluttet"],
      explanation: "Riktig er telisitet. Det avgrensede uttrykket «to runder» gir situasjonen en sluttstrek, og «på tjue minutter»-testen bekrefter det. Begge setningene er dynamiske og durative.",
    },
    {
      question: "Hva er aksjonsart?",
      options: ["Et annet navn på situasjonstype, hentet fra tysk fagtradisjon", "Et annet navn på grammatisk aspekt, slik det brukes i norsk og i tysk", "Den kategorien som plasserer situasjonen i tid", "Den delen av verbet som bærer bøyningsendelsen"],
      explanation: "Riktig er at det er et annet navn på situasjonstype. Ulike bøker bruker ulike ord om det samme, og boka bruker situasjonstype som hovedterm. Aksjonsart er nettopp ikke det samme som grammatisk aspekt.",
    },
  ],
  'ling1100-5-2': [
    {
      question: "Hvilket trekk-knippe har en accomplishment?",
      options: ["Dynamisk, durativ og telisk", "Dynamisk, punktuell og telisk", "Dynamisk, durativ og atelisk", "Statisk, durativ og atelisk"],
      explanation: "Riktig er dynamisk, durativ og telisk. Klassen har både en prosess som tar tid og et naturlig endepunkt. Dynamisk og punktuell med endepunkt er en achievement, og uten endepunkt er det en aktivitet.",
    },
    {
      question: "Hvilket trekk-knippe har en achievement?",
      options: ["Dynamisk, punktuell og telisk", "Dynamisk, durativ og telisk", "Dynamisk, punktuell og atelisk", "Statisk, punktuell og telisk"],
      explanation: "Riktig er dynamisk, punktuell og telisk. En achievement er selve den momentane overgangen, med endepunktet innebygd. Punktuell uten endepunkt er en semelfaktiv, og det siste knippet er umulig, siden statiske situasjoner alltid er ateliske.",
    },
    {
      question: "Hva skiller en accomplishment fra en achievement?",
      options: ["Durativiteten — den ene tar tid, den andre er momentan", "Telisiteten — den ene har et endepunkt, den andre har det ikke", "Dynamikken — den ene er en handling, den andre en tilstand", "Objektet — den ene klassen har objekt, den andre har det ikke"],
      explanation: "Riktig er durativiteten. Begge klasser er dynamiske og teliske, og det eneste som skiller dem, er om situasjonen har utstrekning i tid. Et objekt kan begge ha, og ingen av dem er statiske.",
    },
    {
      question: "Hvilket trekk-knippe har en semelfaktiv?",
      options: ["Dynamisk, punktuell og atelisk", "Dynamisk, punktuell og telisk", "Dynamisk, durativ og atelisk", "Statisk, punktuell og atelisk"],
      explanation: "Riktig er dynamisk, punktuell og atelisk. Et enkelt bank er momentant og har ikke noe mål som fullføres. Med endepunkt ville det vært en achievement, og med varighet en aktivitet.",
    },
    {
      question: "Hvorfor regnes semelfaktiver som en mulig femte klasse?",
      options: ["Fordi de nesten alltid har en gjentakelseslesning som er en ren aktivitet", "Fordi de bare forekommer med verb som beskriver korte lyder og bevegelser", "Fordi de mangler et av de tre trekkene som klassene bygger på", "Fordi de ble innført av Dowty og ikke av Vendler selv"],
      explanation: "Riktig er gjentakelseslesningen. Klassen er derfor vanskelig å isolere, og de fleste eksemplene kan analyseres som aktiviteter med en enkelthendelses-lesning ved siden av. Alle tre trekkene er tvert imot fullt bestemt.",
    },
    {
      question: "Hva viser «nesten»-testen når en setning får to lesninger?",
      options: ["At situasjonen har både en prosess og et endepunkt", "At situasjonen er atelisk og derfor mangler endepunkt", "At verbet er polysemt og har to beslektede betydninger", "At setningen kan leses både habituelt og som enkelthendelse"],
      explanation: "Riktig er at både prosess og endepunkt finnes, altså en accomplishment. Ordet kan ramme hver av de to delene. Ved en achievement er det bare overgangen, og ordet har ett sted å feste seg.",
    },
    {
      question: "Hva er det imperfektive paradokset?",
      options: ["At den pågående formen av en telisk situasjon ikke garanterer fullføring", "At den pågående formen av en atelisk situasjon ikke garanterer fullføring", "At en punktuell situasjon ikke kan settes i pågående form i det hele tatt", "At perfektum og perfektiv gir motsatt resultat på samme setning"],
      explanation: "Riktig er at fullføring ikke garanteres ved teliske situasjoner. Ved ateliske gjelder det motsatte: holder du på å leke, har du lekt. Det er delintervall-egenskapen som gjør forskjellen.",
    },
    {
      question: "Hva skjer med klassen når du sier «Han nøs i ti minutter»?",
      options: ["Setningen får en iterativ lesning og blir en aktivitet", "Setningen blir telisk fordi adverbialet gir et endepunkt", "Setningen blir statisk fordi den beskriver en varig tilstand", "Klassen endrer seg ikke; adverbialet er bare et tillegg"],
      explanation: "Riktig er iterativ lesning og aktivitet. Adverbialet krever varighet, ett nys har det ikke, og setningen tolkes om til en serie. Adverbialet gir ingen sluttstrek, så situasjonen forblir atelisk.",
    },
    {
      question: "Hva er klasseskifte i kontekst?",
      options: ["At en setning skifter situasjonstype fordi sammenhengen krever det", "At et verb tilhører ulike klasser i ulike dialekter og varieteter av norsk", "At klassen endrer seg når verbet settes i en annen tidsform", "At to ulike verb i samme setning gir hver sin klasse"],
      explanation: "Riktig er at sammenhengen framtvinger en annen lesning. Punktuelt blir durativt ved gjentakelse, og atelisk blir telisk ved avgrenset objekt. Tempus endrer derimot aldri situasjonstypen.",
    },
    {
      question: "Hva er forskjellen på tempus og aspekt?",
      options: ["Tempus plasserer situasjonen i tid, aspekt sier hvordan den presenteres", "Tempus sier hvordan situasjonen presenteres, aspekt plasserer den i tid", "Tempus gjelder verbet, aspekt gjelder hele setningen den står i", "Tempus finnes bare i fortid, aspekt bare i nåtid og framtid"],
      explanation: "Riktig er at tempus svarer på når og aspekt på fra hvilken vinkel. «Hun skrev» og «hun holdt på med å skrive» har samme tempus og ulikt aspekt. Begge kategoriene gjelder verbfrasen.",
    },
    {
      question: "Hva er forskjellen på ordene perfektum og perfektiv?",
      options: ["Perfektum er et tempus, perfektiv er et aspekt", "Perfektum er et aspekt, perfektiv er et tempus", "Perfektum gjelder fortid, perfektiv gjelder framtid", "Perfektum brukes på norsk, perfektiv bare på engelsk"],
      explanation: "Riktig er tempus mot aspekt. Perfektum er formen «har skrevet», som plasserer situasjonen i tid; perfektiv er perspektivet der situasjonen sees som avsluttet helhet. Begge termene brukes på norsk.",
    },
    {
      question: "Hva kjennetegner perfektivt aspekt?",
      options: ["Situasjonen presenteres som en avsluttet helhet, sett utenfra", "Situasjonen presenteres som pågående, sett innenfra og uten slutten", "Situasjonen plasseres før ytringsøyeblikket i tid", "Situasjonen presenteres som gjentatt flere ganger over et tidsrom"],
      explanation: "Riktig er avsluttet helhet sett utenfra. Ved teliske situasjoner innebærer det som regel at endepunktet ble nådd. Plassering i tid er tempus, ikke aspekt.",
    },
    {
      question: "Hva står de tre symbolene i Reichenbachs modell for?",
      options: ["Ytringstid, referansetid og hendelsestid", "Setningstid, situasjonstid og sannhetstid", "Starttid, sluttid og varighet", "Presenstid, preteritumstid og perfektumstid"],
      explanation: "Riktig er ytringstid, referansetid og hendelsestid. Det tredje punktet, referansetiden, er det som gjør at perfektumsformene kan skilles fra de enkle formene. Med bare to punkter ville systemet ikke gått opp.",
    },
    {
      question: "Hva er referansetiden?",
      options: ["Det tidspunktet situasjonen betraktes fra i framstillingen", "Det tidspunktet situasjonen faktisk fant sted på", "Det tidspunktet setningen blir ytret eller skrevet på", "Det tidspunktet som er nevnt sist i den foregående setningen"],
      explanation: "Riktig er punktet situasjonen betraktes fra. I «Da politiet kom, hadde tyven forsvunnet» er det da politiet kom. Tidspunktet situasjonen fant sted på, er hendelsestiden, og ytringstiden er nå.",
    },
    {
      question: "Hvilket mønster har preteritum i Reichenbachs termer?",
      options: ["Hendelsestid og referansetid faller sammen, begge før ytringstiden", "Hendelsestiden ligger før referansetiden, som faller sammen med ytringstiden", "Alle tre punktene faller sammen i ett og samme tidspunkt", "Hendelsestiden ligger før referansetiden, som ligger før ytringstiden"],
      explanation: "Riktig er at hendelse og referansepunkt faller sammen før ytringstiden. Vi ser situasjonen fra da den skjedde. Det andre mønsteret er presens perfektum, og det siste er preteritum perfektum.",
    },
    {
      question: "Hvilket mønster har presens perfektum i Reichenbachs termer?",
      options: ["Hendelsestiden ligger før referansetiden, som faller sammen med ytringstiden", "Hendelsestid og referansetid faller sammen, og begge ligger før ytringstiden", "Hendelsestiden ligger før referansetiden, som ligger før ytringstiden", "Alle tre punktene faller sammen i ett og samme tidspunkt"],
      explanation: "Riktig er at hendelsen ligger før, mens referansepunktet er ytringsøyeblikket. Det er derfor formen leses som en opplysning om situasjonen nå. De øvrige mønstrene er preteritum, preteritum perfektum og presens.",
    },
    {
      question: "Hvordan uttrykkes framtid på norsk?",
      options: ["Med hjelpeverb, omskrivning eller presens sammen med et tidsadverbial", "Med en egen bøyningsform av verbet, slik mange andre språk i verden har det", "Med perfektum partisipp sammen med et framtidig adverbial", "Med preteritum av modalverbet og infinitiv av hovedverbet"],
      explanation: "Riktig er hjelpeverb, omskrivning eller presens pluss adverbial. Norsk har ingen egen bøyningsform for framtid, og «Toget går i morgen» står derfor i presens. Å svare «futurum» på et spørsmål om tempus er å oppgi en form som ikke finnes.",
    },
    {
      question: "Hva er en habituell lesning?",
      options: ["En lesning der setningen beskriver en vane snarere enn én bestemt hendelse", "En lesning der setningen beskriver flere hendelser som følger rett etter hverandre", "En lesning der situasjonen presenteres som avsluttet og fullført", "En lesning der situasjonen plasseres i framtiden ved hjelp av kontekst"],
      explanation: "Riktig er vanen. «Naboen sykler til jobben» handler ikke om akkurat nå. Lesningen oppfører seg som en tilstand, mens flere hendelser rett etter hverandre er den iterative lesningen.",
    },
    {
      question: "Hva er forholdet mellom tempus og situasjonstype?",
      options: ["De er uavhengige kategorier, og verbfrasen avgjør klassen uansett tidsform", "Tempus avgjør situasjonstypen, siden fortidsformer gir teliske situasjoner", "Situasjonstypen avgjør hvilke tempusformer setningen kan stå i", "De er to navn på den samme kategorien i ulike fagtradisjoner"],
      explanation: "Riktig er at de er uavhengige. «Sara skrev rapporten» og «Sara hadde skrevet rapporten» er begge accomplishments. Det er nettopp derfor en oppgave kan spørre om begge deler samtidig.",
    },
    {
      question: "Hva er leksikalsk aspekt?",
      options: ["Et annet navn på situasjonstype, som ligger i verbfrasens betydning", "Et annet navn på perfektivt aspekt, som velges av den som snakker", "Den delen av aspektet som uttrykkes med hjelpeverb", "Den betydningen et verb har utenfor enhver kontekst"],
      explanation: "Riktig er at det er situasjonstype. Det kalles leksikalsk fordi det ligger i verbfrasens betydning og ikke kan velges bort. Grammatisk aspekt er derimot perspektivet, som velges med grammatiske midler.",
    },
  ],
  'ling1100-5-3': [
    {
      question: "Hva er første trinn i klassifiseringsalgoritmen?",
      options: ["Å lese hele verbfrasen, ikke bare verbet", "Å slå fast hvilken Vendler-klasse setningen ligner mest på", "Å oppgi tempus for setningen som skal klassifiseres", "Å kjøre «på X tid»-testen på setningen"],
      explanation: "Riktig er å lese hele verbfrasen. Objektet og adverbialene er med på å avgjøre, særlig telisiteten. Klassenavnet leses av trekkene til slutt, aldri først.",
    },
    {
      question: "Hvorfor skal testen stå før kategorien i et svar?",
      options: ["Fordi et svar som fører testen først, leses som en utregning", "Fordi kategorien er vanskeligere å begrunne enn testen er", "Fordi testene alltid er lengre å skrive enn kategorinavnet", "Fordi sensor leser bare den første linjen i hvert delsvar"],
      explanation: "Riktig er at føringen leses som en utregning. Åpner du med kategorien, må du forsvare den etterpå, og svaret leses som en gjetning. Det er samme rekkefølge som mellomkolonnene i en sannhetstabell.",
    },
    {
      question: "Hva er tempuskontrollen i en Del 5-oppgave?",
      options: ["Å telle instruksjonsverbene i oppgaveteksten før du begynner å skrive", "Å kontrollere at verbet står i den samme tidsformen i alle setningene", "Å regne ut om hendelsestiden ligger før eller etter ytringstiden", "Å sammenligne tempus med situasjonstypen for hver setning"],
      explanation: "Riktig er å telle instruksjonsverbene. Formuleringer som «klassifiser og oppgi tempus» skjuler to krav i én setning, og å svare på bare det ene er den billigste feilen i emnet. Kontrollen tar femten sekunder.",
    },
    {
      question: "Hva sier verbfrase-kontrollen at du skal gjøre?",
      options: ["Spørre om objektet eller adverbialet er med på å avgjøre trekket", "Kontrollere at verbet er bøyd riktig i den tidsformen setningen krever", "Sjekke at verbfrasen inneholder minst ett adverbial", "Telle hvor mange argumenter verbet krever for å danne en full setning"],
      explanation: "Riktig er å spørre om objektet eller adverbialet avgjør. Prøv å bytte objektet og kjør «på X tid»-testen på nytt — endrer resultatet seg, har du funnet noe verdt å nevne. Antall argumenter hører til predikatlogikken.",
    },
    {
      question: "Hvilken test gjør dobbelt arbeid i testbatteriet?",
      options: ["Progressivtesten, som skiller både statisk fra dynamisk og durativ fra punktuell", "Avbruddstesten, som skiller både telisk fra atelisk og statisk fra dynamisk i ett", "«På X tid»-testen, som avgjør både telisitet og varighet", "Handlingstesten, som avgjør både dynamikk og telisitet"],
      explanation: "Riktig er progressivtesten. Den skiller først statisk fra dynamisk, og deretter durativ fra punktuell, siden punktuelle situasjoner bare gir forberedelses- eller gjentakelseslesning. De andre testene avgjør ett trekk hver.",
    },
    {
      question: "Hvorfor er «Elevene diskuterte oppgaven» atelisk selv om objektet er bestemt?",
      options: ["Fordi verbfrasen ikke har noe punkt der en oppgave er ferdig diskutert", "Fordi objektet står i bestemt form og ikke i ubestemt flertallsform i setningen", "Fordi setningen står i preteritum og ikke i presens perfektum", "Fordi diskusjon alltid er en statisk og ikke en dynamisk situasjon"],
      explanation: "Riktig er at verbfrasen mangler sluttpunkt. Et avgrenset objekt gir bare telisitet når verbet forbruker eller frambringer objektet, og diskusjon gjør ingen av delene. Setningen er dynamisk, ikke statisk.",
    },
    {
      question: "Hva er den billigste feilen i Del 5, ifølge dette kapitlet?",
      options: ["Å glemme tempus når oppgaven ber om situasjonstype og tempus", "Å bytte om accomplishment og achievement i klassifiseringen", "Å bruke bare én test per trekk i stedet for to", "Å utelate semelfaktivene fra en oversikt over klassene"],
      explanation: "Riktig er å glemme tempus. Du kan hele stoffet og mister likevel en hel deloppgave, og det er derfor kontrollen med å telle instruksjonsverb er verdt femten sekunder. De andre feilene koster også, men de skyldes manglende kunnskap.",
    },
    {
      question: "Hva er det avgjørende ved «holde på med»-testen på grensen accomplishment mot achievement?",
      options: ["Ikke om setningen går, men hvilken lesning den kommer til å ha", "Ikke hvilken lesning den får, men om setningen i det hele tatt går", "Om verbet kan stå i presens partisipp på engelsk", "Om setningen tåler et tidsrom-adverbial som «i en time» i tillegg"],
      explanation: "Riktig er hvilken lesning setningen får. Ved en accomplishment pågår selve situasjonen; ved en achievement får du bare en forberedelseslesning, altså tiden fram mot overgangen. Begge setningene er som regel grammatiske.",
    },
    {
      question: "Hvordan analyseres preteritum perfektum i Reichenbachs termer?",
      options: ["Hendelsestiden ligger før referansetiden, som ligger før ytringstiden", "Hendelsestiden ligger før referansetiden, som faller sammen med ytringstiden", "Hendelsestid og referansetid faller sammen, begge før ytringstiden", "Alle tre punktene faller sammen i ett og samme tidspunkt"],
      explanation: "Riktig er at alle tre er ulike. Det er formen for fortid sett fra fortid, og referansetiden settes gjerne av en leddsetning. De øvrige mønstrene er presens perfektum, preteritum og presens.",
    },
    {
      question: "Hva er galt med å analysere tempus med bare to punkter?",
      options: ["Da kan ikke preteritum skilles fra presens perfektum", "Da kan ikke presens skilles fra en framtidig tolkning av setningen", "Da blir hendelsestiden umulig å plassere i forhold til nå", "Da faller aspektet sammen med tempus i selve analysen av setningen"],
      explanation: "Riktig er at de to fortidsformene ikke kan skilles. Begge har hendelsen før ytringstiden, og det er referansetiden som gjør forskjellen. Det er nettopp derfor modellen har tre punkter og ikke to.",
    },
    {
      question: "Hva bør du gjøre med dine egne eksempelsetninger før du skriver dem inn?",
      options: ["Kjøre testene på dem, slik at de faktisk tåler klassifiseringen", "Kontrollere at de ikke ligner for mye på setningene i selve oppgaveteksten", "Sette dem i den samme tidsformen som setningene i selve oppgaveteksten", "Skrive dem på både norsk og engelsk for sikkerhets skyld"],
      explanation: "Riktig er å kjøre testene. Et eget eksempel som ikke tåler testene, er verre enn ingen — det viser at apparatet ikke sitter. Tidsform og språk er derimot fritt, med mindre oppgaven sier noe annet.",
    },
    {
      question: "Hvor lang tid bør du regne med på en F3-oppgave med fire setninger?",
      options: ["Omtrent tjue minutters skrivetid, altså drøyt tre minutter per setning", "Omtrent ti minutters skrivetid, siden testene er korte setninger å skrive", "Omtrent førti minutters skrivetid, siden hver test må begrunnes", "Omtrent en time, siden oppgaven krever egne eksempler i tillegg"],
      explanation: "Riktig er omtrent tjue minutter. Det nyeste settformatet har ti besvarelser på fire timer, og tre minutter per setning er nok til to tester per trekk. Bruker du vesentlig mer, skriver du sannsynligvis for mye prosa rundt testene.",
    },
    {
      question: "Hva er den vanligste årsaken til at en kandidat klassifiserer feil?",
      options: ["At hun resonnerer om verden i stedet for å kjøre testen", "At hun bruker for mange tester og blir usikker på resultatet", "At hun oppgir klassenavnet på engelsk i stedet for norsk", "At hun glemmer å oppgi hvilken tidsform setningen står i"],
      explanation: "Riktig er å resonnere om verden. At det tar tid å bli trøtt, gjør ikke «sovne» durativt — situasjonstype er en egenskap ved beskrivelsen. Flere tester gir tvert imot større sikkerhet.",
    },
    {
      question: "Hva skjer med klassen når «Klokka tikket» får tidsrom-adverbialet «i en time»?",
      options: ["Den blir en aktivitet, siden en iterativ lesning framtvinges", "Den blir en accomplishment, siden adverbialet gir et endepunkt", "Den blir en tilstand, siden situasjonen nå strekker seg over et tidsrom", "Den forblir en semelfaktiv, siden hvert enkelt tikk er momentant i seg selv"],
      explanation: "Riktig er aktivitet ved iterativ lesning. Adverbialet krever varighet, og ett tikk har ikke det, så setningen tolkes om til en serie. Serien har fortsatt ikke noe naturlig endepunkt.",
    },
    {
      question: "Hva bør stå i svaret når du behandler semelfaktiver?",
      options: ["Trekk-knippet og forbeholdet om at klassen regnes som en mulig femte", "Bare trekk-knippet, siden klassen ikke er allment godtatt i litteraturen", "Bare klassenavnet, siden trekkene følger av navnet", "En begrunnelse for hvorfor Vendler ikke tok den med"],
      explanation: "Riktig er trekk-knippet pluss forbeholdet. Å utelate klassen er en unødvendig mangel; å presentere den som like etablert som de fire andre er en unøyaktighet. Trekkene skal alltid oppgis, uansett klasse.",
    },
    {
      question: "Hva er forskjellen på form og tolkning i en tempusoppgave?",
      options: ["Formen er hvilken tidsform verbet står i, tolkningen er hvilken tid setningen viser til", "Formen er hvilken tid setningen viser til, mens tolkningen er hvilken tidsform verbet har", "Formen gjelder hovedverbet, tolkningen gjelder hjelpeverbet i setningen", "Formen gjelder skriftlig norsk, tolkningen gjelder muntlig norsk"],
      explanation: "Riktig er tidsform mot tid setningen viser til. «Toget går i morgen» står i presens, men tolkningen er framtidig. Å skille dem er nettopp den presisjonen en tempusoppgave prøver.",
    },
  ],
  'ling1100-6-1': [
    {
      question: "Hva er en tematisk rolle?",
      options: ["Deltakerens funksjon i situasjonen setningen beskriver", "Den grammatiske plassen leddet har i setningsstrukturen", "Ordklassen leddet i setningen tilhører, som verb eller substantiv", "Leddets plassering i den norske ordstillingen"],
      explanation: "Riktig er at rollen sier hva deltakeren er i hendelsen. Svaret om grammatisk plass beskriver syntaktisk funksjon, som er et annet system — og å blande de to er sjangerens vanligste feil.",
    },
    {
      question: "Hvilken kontroll skiller agens fra de andre utførerliknende rollene?",
      options: ["Om tillegget «med vilje» kan legges til uten at det blir avvikende", "Om tillegget «i går» kan legges til uten at det blir avvikende", "Om leddet kan flyttes fram til begynnelsen av setningen uten videre", "Om leddet står som subjekt i den aktive formen av setningen"],
      explanation: "Riktig er volisjonskontrollen: agens krever vilje, og et ledd som ikke tåler «med vilje», er ikke agens. Tidsleddet prøver argumentstatus og ikke rolle, og subjektsplassen er nettopp den begrunnelsen som svikter i oppgavene.",
    },
    {
      question: "Hvilken rolle har «hovednøkkelen» i «Hovednøkkelen åpnet døra»?",
      options: ["Instrument, siden den er middelet handlingen utføres med", "Agens, siden den står som subjekt i setningen vi analyserer", "Patiens, siden det skjer noe med den i løpet av handlingen", "Mål, siden døra er endepunktet for handlingen"],
      explanation: "Riktig er instrument: setningen kan skrives om til «noen åpnet døra med hovednøkkelen». Agens er utelukket fordi en nøkkel ikke kan ville noe, og å begrunne med subjektsplassen er å bruke formen som belegg for betydningen.",
    },
    {
      question: "Hva skiller tema fra patiens?",
      options: ["Tema flyttes eller lokaliseres uten å endres, patiens endres", "Tema er en levende deltaker, mens patiens alltid er en gjenstand", "Tema er alltid subjekt, mens patiens alltid er objekt", "Tema er alltid et argument, mens patiens alltid står som adjunkt"],
      explanation: "Riktig er at patiens blir annerledes, mens tema bare blir et annet sted eller blir omtalt. Både mennesker og gjenstander kan være begge deler, og begge roller kan stå på begge syntaktiske plasser.",
    },
    {
      question: "Hvilken rolle har «Nora» i «Uværet skremte Nora»?",
      options: ["Experiencer, siden hun har en opplevelse hun ikke styrer", "Patiens, siden hun står som objekt i setningen", "Stimulus, siden hun er den andre deltakeren i hendelsen", "Agens, siden hun er den levende deltakeren i hendelsen"],
      explanation: "Riktig er experiencer: det skjer noe inne i Nora, uten fysisk tilstandsendring. Patiens ville krevd en endring av tilstand, og stimulus er nettopp den andre rollen i setningen — den som utløser opplevelsen.",
    },
    {
      question: "Hva er et adjunkt?",
      options: ["Et ledd som gir tilleggsopplysninger verbet ikke krever", "Et ledd som alltid står sist i den norske setningen", "Et ledd som ikke bidrar til betydningen i setningen", "Et ledd som står som subjekt i en passiv setning i norsk"],
      explanation: "Riktig er at adjunktet ikke fyller noen plass i verbets situasjon. Adjunkter bidrar godt til betydningen — «han døde i går» er ikke mindre viktig — og de kan stå hvor som helst i setningen.",
    },
    {
      question: "Hvilken test gir et sikkert svar om argumentstatus når den slår ut?",
      options: ["Obligatorishetstesten, altså om leddet kan strykes", "Stabletesten, altså om leddet kan gjentas i setningen", "Volisjonskontrollen, altså om «med vilje» kan legges til", "Negasjonstesten, altså om slutningen overlever negasjon"],
      explanation: "Riktig er obligatorishetstesten: kan leddet ikke strykes, er det et argument. Volisjonskontrollen gjelder rollen og ikke argumentstatusen, og negasjonstesten hører til slutningstypene i Del 3.",
    },
    {
      question: "Hva viser det at «Nora spiste» er en fullstendig setning?",
      options: ["Ingenting om argumentstatusen til objektet i «Nora spiste maten»", "At objektet i setningen «Nora spiste maten» må være et adjunkt her", "At verbet «spise» bare har ett argument i theta-gridet", "At obligatorishetstesten aldri gir et brukbart resultat i analysen"],
      explanation: "Riktig er at obligatorishetstesten bare slutter én vei: at et ledd kan strykes, beviser ingenting. Mange argumenter kan strykes likevel, og testen er fortsatt nyttig — den er bare ikke gyldig i den andre retningen.",
    },
    {
      question: "Hva går verbavhengighetstesten ut på?",
      options: ["Å bytte ut verbet og se om leddet fortsatt passer inn", "Å bytte ut subjektet og se om setningen fortsatt går", "Å negere setningen og se om slutningen overlever", "Å stryke leddet og se om setningen blir ufullstendig"],
      explanation: "Riktig er verbbyttet: et adjunkt passer med nesten hvilket som helst verb, et argument bare med verb som beskriver den slags situasjon. Å stryke leddet er obligatorishetstesten, som er en annen test med en annen begrensning.",
    },
    {
      question: "Hva er et theta-grid?",
      options: ["Oppstillingen av rollene et verb deler ut, med de syntaktiske plassene", "Oversikten over alle tematiske roller som finnes i et språk", "Rekkefølgen leddene har i den norske setningsstrukturen", "Listen over hvilke adjunkter et bestemt verb kan opptre sammen med"],
      explanation: "Riktig er at gridet er verbets egen rolleoppstilling, koblet til plassene rollene vanligvis havner på. Det er derfor det kan settes opp før du har sett en setning — og alt som blir til overs, er adjunkt-kandidat.",
    },
    {
      question: "Hva sier theta-kriteriet?",
      options: ["Hvert argument får én rolle, og hver rolle tildeles ett argument", "Hvert verb har nøyaktig tre argumenter i theta-gridet sitt", "Subjektet er alltid agens når setningen står i aktiv form i norsk", "Adjunkter kan ikke stables oppå hverandre i samme setning"],
      explanation: "Riktig er én rolle per argument og ett argument per rolle. Kriteriet brukes som kontroll: har du gitt samme ledd to roller, har analysen sannsynligvis en feil. At subjektet alltid er agens, er nettopp det kriteriet ikke sier.",
    },
    {
      question: "Hvilken rolle har «til Bergen» i «Nora sendte pakken til Bergen»?",
      options: ["Mål, siden Bergen er et sted og ikke en deltaker", "Mottaker, siden noe overføres til Bergen i setningen", "Kilde, siden pakken kommer fra et sted i setningen", "Sted, siden hele situasjonen foregår i Bergen her"],
      explanation: "Riktig er mål: et sted kan ikke overta noe, og mottaker krever en deltaker som kan ha noe. Preposisjonen «til» dekker begge rollene, og den kan derfor aldri brukes som begrunnelse.",
    },
    {
      question: "Hva er en diatese?",
      options: ["En systematisk veksling i hvor de samme rollene havner syntaktisk", "Et skille mellom formelt og uformelt språk i en situasjon", "En undergruppe av de tematiske rollene i rollekatalogen", "Et krav om at subjektet alltid skal stå først i en fortellende setning"],
      explanation: "Riktig er at diatesen endrer hvor rollene havner, ikke hvilke roller som finnes. Hadde den endret rollene, ville aktiv og passiv beskrevet ulike situasjoner — og det gjør de åpenbart ikke.",
    },
    {
      question: "Hva gjør passiven med rollefordelingen i en setning?",
      options: ["Ingenting — den flytter bare hvilket ledd som er subjekt", "Den gjør patiens om til agens i den nye setningen", "Den fjerner agensrollen helt fra situasjonen som beskrives", "Den bytter om på rollene til subjektet og objektet"],
      explanation: "Riktig er at rollene er uendret: patiens er patiens også når det står som subjekt. Agens forsvinner ikke fra situasjonen selv om leddet utelates — kontrollen er at et av-ledd kan legges til.",
    },
    {
      question: "Hvilken test skiller en passiv setning fra en medial?",
      options: ["Om et av-ledd med en utfører kan legges til uten videre", "Om setningen i det hele tatt har et direkte objekt", "Om verbet i setningen er transitivt eller intransitivt", "Om subjektet i setningen er levende eller en gjenstand"],
      explanation: "Riktig er av-leddstesten: passiven tar imot en utfører, mediumsetningen gjør det ikke. «Denne boka selger godt av kundene» er avvikende, mens «Porten ble låst av vaktmesteren» er helt vanlig.",
    },
    {
      question: "Hva sier rollehierarkiet?",
      options: ["Agens blir subjekt når det finnes en, ellers rykker neste rolle opp", "Alle tematiske roller er like sterke i kampen om subjektsplassen", "Instrument kan aldri stå som subjekt i en norsk setning", "Patiens står alltid som direkte objekt i en aktiv setning"],
      explanation: "Riktig er rangeringen: mangler agens, rykker den neste rollen opp til subjektsplassen. Det er nettopp derfor «Hovednøkkelen åpnet døra» har instrument som subjekt — hierarkiet beskriver mønsteret, men forklarer det ikke.",
    },
    {
      question: "Hva er argumentstatusen til «i skuret» i «Vaktmesteren la stigen i skuret»?",
      options: ["Argument, siden setningen blir ufullstendig uten leddet", "Adjunkt, siden leddet oppgir et sted i situasjonen", "Argument, siden leddet står sist i den norske setningen her", "Adjunkt, siden leddet kan flyttes fram i setningen"],
      explanation: "Riktig er argument: obligatorishetstesten slår ut, fordi «legge» krever at det oppgis hvor. At leddet oppgir et sted, avgjør ingenting — samme rolle er adjunkt i «Vaktmesteren malte porten i skuret».",
    },
    {
      question: "Hvilket ledd har ingen tematisk rolle fra verbet i «På fredag ga hun naboen nøkkelen»?",
      options: ["På fredag, som bare plasserer hendelsen i tid", "Naboen, som ikke er nevnt i verbets grunnbetydning", "Nøkkelen, som ikke endres av handlingen i setningen", "Hun, siden rollen der følger av setningens form"],
      explanation: "Riktig er tidsleddet: verbet «gi» krever tre deltakere, og en tidsangivelse er ikke en av dem. Naboen er mottaker og nøkkelen er tema — begge er argumenter med hver sin rolle.",
    },
    {
      question: "Hva er et misforhold mellom syntaktisk funksjon og tematisk rolle?",
      options: ["At et ledd har en annen rolle enn plasseringen skulle tilsi", "At et verb har flere argumenter enn theta-gridet oppgir", "At to ledd i setningen har fått den samme rollen tildelt", "At et adjunkt er plassert et uvanlig sted i setningen"],
      explanation: "Riktig er at standardkoblingen brytes — subjektet er ikke agens, eller objektet er ikke patiens. Å gi to ledd samme rolle er derimot et brudd på theta-kriteriet, som er en annen slags feil.",
    },
    {
      question: "Hvilken rolle har «av naboen» i «Sykkelen ble lånt av naboen»?",
      options: ["Agens, siden naboen er den som utfører lånehandlingen", "Kilde, siden preposisjonen «av» markerer utgangspunkt", "Instrument, siden naboen er middelet i handlingen", "Benefaktiv, siden handlingen skjer til naboens fordel"],
      explanation: "Riktig er agens: setningen er passiv, og passiven plasserer agens i et av-ledd. Preposisjonen «av» markerer riktignok kilde i andre setninger, men her er det utføreren som står der.",
    },
  ],
  'ling1100-6-2': [
    {
      question: "Hva er forholdet mellom agens og actor?",
      options: ["Enhver agens er en actor, men ikke enhver actor er en agens", "Enhver actor er en agens, men ikke enhver agens er en actor", "De to begrepene er to navn på nøyaktig den samme rollen", "De to begrepene utelukker hverandre i enhver setning"],
      explanation: "Riktig er at actor er den vide rollen og agens den snevre, med volisjon som kravet. Snus forholdet, blir enhver naturkraft en agens — og da mister begrepet nettopp det som gjør det nyttig.",
    },
    {
      question: "Hvorfor er «vinden» i «Vinden veltet dunken» ikke en agens?",
      options: ["Fordi den mangler volisjon og ikke kan ville noe", "Fordi den ikke står som subjekt i den passive formen", "Fordi den ikke forårsaker noen endring hos dunken", "Fordi den ikke er nevnt i verbets eget theta-grid"],
      explanation: "Riktig er at volisjonskontrollen slår ut: «Vinden veltet dunken med vilje» er semantisk avvikende. Vinden forårsaker riktignok endringen — det er nettopp derfor den er en actor, bare ikke en agens.",
    },
    {
      question: "Hva kjennetegner en ufrivillig utfører?",
      options: ["En deltaker som kan ville, men ikke gjør dette med hensikt", "En deltaker som er en naturkraft uten evne til å ville", "En deltaker som brukes som redskap av noen andre i hendelsen", "En deltaker som blir berørt av det som skjer i setningen"],
      explanation: "Riktig er at deltakeren er i stand til å ville, men at verbet utelukker hensikt — som i «Jonas mistet nøklene». En naturkraft kan ikke ville i det hele tatt, og et redskap er et instrument.",
    },
    {
      question: "Hva er en proto-rolle hos Dowty?",
      options: ["Et knippe egenskaper et argument kan ha noen av", "En kategori som et argument enten tilhører eller ikke", "En rolle som gjelder bare for levende deltakere i hendelsen", "En rolle som bare finnes i passive setninger i norsk"],
      explanation: "Riktig er knippet: tilhørigheten er gradert, og et argument har et antall egenskaper. Å behandle proto-rollene som kategorier er nettopp den framstillingen Dowtys forslag skal erstatte.",
    },
    {
      question: "Hva vil det si at Dowtys egenskaper er entailmenter?",
      options: ["At de må følge av at setningen er sann, ikke bare virke rimelige", "At de gjelder for de fleste setninger med det samme verbet", "At de kan trekkes tilbake uten at det oppstår motsigelse", "At de er hentet fra en fast liste over tematiske roller i litteraturen"],
      explanation: "Riktig er entailment-kravet: finnes det en situasjon der predikatet er sant og egenskapen ikke holder, teller den ikke. At noe kan trekkes tilbake, beskriver derimot implikatur — altså det motsatte av entailment.",
    },
    {
      question: "Hvilken av disse er IKKE en av proto-agent-egenskapene?",
      options: ["Tilstandsendring hos deltakeren selv", "Volisjon, altså villet involvering", "Forårsaking hos en annen deltaker", "Bevegelse i forhold til den andre"],
      explanation: "Riktig er tilstandsendring: den hører til proto-patient-knippet. Proto-agent-knippet består av volisjon, sansing, forårsaking og bevegelse, med uavhengig eksistens nevnt i parentes.",
    },
    {
      question: "Hva er et inkrementalt tema?",
      options: ["En deltaker som måler hvor langt hendelsen er kommet", "En deltaker som gradvis flytter seg mot et endepunkt", "En deltaker som får en egenskap i løpet av hendelsen", "En deltaker som er årsak til at hendelsen fortsetter"],
      explanation: "Riktig er målestokkfunksjonen: er halve manuset lest, er lesingen halvferdig. En deltaker som bare flytter seg, måler ingen framdrift — det finnes ikke noe «halvt dyttet vogn».",
    },
    {
      question: "Hva sier argumentseleksjonsprinsippet?",
      options: ["Argumentet med flest proto-agent-egenskaper blir subjekt", "Argumentet med flest proto-patient-egenskaper blir subjekt", "Argumentet som har volisjon, blir alltid subjekt i setningen", "Argumentet som nevnes først i setningen, blir subjekt"],
      explanation: "Riktig er opptellingen på proto-agent-siden, med proto-patient-siden som motstykke for objektet. Volisjon alene avgjør ikke: «Vinden veltet dunken» har et subjekt uten volisjon i det hele tatt.",
    },
    {
      question: "Hva forutsier Dowtys korollar om jevn opptelling?",
      options: ["At begge fordelingene kan forekomme når tallene er omtrent like", "At argumentet med flest egenskaper alltid vinner subjektsplassen", "At verb med tre argumenter alltid har en mottakerrolle", "At proto-rollene bare gjelder for verb med to argumenter"],
      explanation: "Riktig er at prinsippet tier når tallene er like, og at språket da kan ha begge koblingene. Det er nøyaktig det vi finner blant opplevelsesverbene, som «frykte» mot «skremme».",
    },
    {
      question: "Hvorfor finnes både «frykte» og «skremme» i norsk?",
      options: ["Fordi opptellingen er jevn, med én egenskap på hver side", "Fordi de to verbene beskriver to ulike slags situasjoner", "Fordi det ene verbet er transitivt og det andre intransitivt", "Fordi experiencer alltid kan stå både som subjekt og objekt"],
      explanation: "Riktig er den jevne opptellingen: den sansende har sansing, den forårsakende har forårsaking, og korollaret tillater da begge koblingene. At experiencer «alltid kan» stå begge steder, er nettopp det som må forklares.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom actor-analysen og proto-rolle-analysen?",
      options: ["Actor gir en etikett, mens opptellingen gir en forklaring", "Actor gjelder levende deltakere, opptellingen gjelder gjenstander", "Actor er Dowtys begrep, mens proto-rollene er eldre i faget", "Actor gjelder subjekter, mens proto-rollene gjelder objekter"],
      explanation: "Riktig er at actor navngir likheten mellom utførere uten vilje, mens opptellingen sier hvorfor de havner på subjektsplassen. Actor er dessuten ikke Dowtys begrep — proto-rollene er hans.",
    },
    {
      question: "Hva er proto-agent-egenskapen «sansing»?",
      options: ["At deltakeren er bevisst eller oppfatter det som skjer", "At deltakeren merkes av det som skjer i situasjonen", "At deltakeren velger å delta i det som skjer", "At deltakeren beveger seg i forhold til den andre"],
      explanation: "Riktig er bevisstheten: i «Publikum beundret utsikten» har publikum bare denne ene egenskapen. Å velge å delta er volisjon, som telles for seg — man sanser uten å velge det.",
    },
    {
      question: "Hvorfor holder Dowty «uavhengig eksistens» i parentes?",
      options: ["Fordi han selv er usikker på om den hører til knippet", "Fordi den bare gjelder for setninger med tre argumenter", "Fordi den er den viktigste av de fem egenskapene i knippet", "Fordi den bare kan telles i passive setninger"],
      explanation: "Riktig er at Dowty markerer den som usikker, blant annet fordi den ikke handler om hva deltakeren gjør. Å nevne forbeholdet er et pluss-punkt; å bygge opptellingen på egenskapen er det ikke.",
    },
    {
      question: "Hva er proto-patient-egenskapen «stasjonaritet»?",
      options: ["At deltakeren står stille mens den andre beveger seg", "At deltakeren ikke endrer tilstand i løpet av hendelsen", "At deltakeren befinner seg på et bestemt sted hele tiden", "At deltakeren ikke er årsak til noe i situasjonen"],
      explanation: "Riktig er stillstanden i forhold til den andres bevegelse, som i «Bilen passerte gjerdet». Å ikke endre tilstand er en annen sak — det er fraværet av egenskapen tilstandsendring, ikke stasjonaritet.",
    },
    {
      question: "Hvilket ledd er det formuleringen «vinden er proto-agent» går galt i?",
      options: ["At proto-rollene framstilles som kategorier og ikke som knipper", "At vinden ikke har noen av proto-agent-egenskapene i denne setningen", "At proto-agent bare kan brukes om levende deltakere", "At vinden burde vært kalt actor i stedet for agens"],
      explanation: "Riktig er kategoriframstillingen: det presise er «vinden har to av proto-agent-egenskapene». Vinden har faktisk to av dem, og de kan gjelde for hva som helst — det er formuleringen, ikke innholdet, som er feil.",
    },
    {
      question: "Hva er en naturkraft i denne sammenhengen?",
      options: ["En deltaker som forårsaker uten å kunne ville noe", "En deltaker som brukes som redskap av en agens", "En deltaker som blir berørt av noe utenfor seg selv", "En deltaker som beveger seg uten å påvirke andre"],
      explanation: "Riktig er forårsaking uten volisjon — vind, flom, ras, frost. Et redskap skiller seg ved at setningen kan skrives om til «noen gjorde det med X», og det går ikke med en flom.",
    },
    {
      question: "Hva slags forhold må leddene i en Dowty-analyse ha for at prinsippet skal gjelde?",
      options: ["Predikatet må ha både grammatisk subjekt og objekt", "De to argumentene må være levende deltakere begge to", "Setningen må stå i aktiv form med agens som subjekt", "Verbet må ha nøyaktig tre plasser i theta-gridet sitt"],
      explanation: "Riktig er kravet om subjekt og objekt: prinsippet er en sammenlikning mellom to argumenter. I «Sjåføren sovnet» finnes det ingenting å sammenlikne med, og å bruke prinsippet der er en feil.",
    },
    {
      question: "Hva skiller volisjon fra forårsaking som proto-agent-egenskaper?",
      options: ["Volisjon er å ville det, forårsaking er å få det til å skje", "Volisjon gjelder subjektet, forårsaking gjelder objektet", "Volisjon telles alltid, mens forårsaking telles sjelden", "Volisjon er en entailment, mens forårsaking er en implikatur"],
      explanation: "Riktig er skillet mellom hensikt og virkning: en flom forårsaker uten å ville. Begge er entailmenter og telles på samme måte — det er nettopp derfor de står som to punkter og ikke ett.",
    },
    {
      question: "Hvorfor er proto-rollene et svar på et problem, og ikke bare en ny liste?",
      options: ["Fordi de tematiske rollene ikke lar seg definere skarpt", "Fordi de tidligere rollelistene var for korte til å dekke alt", "Fordi tidligere framstillinger manglet et begrep for actor", "Fordi de eldre rollene ikke kunne brukes på passive setninger"],
      explanation: "Riktig er definisjonsproblemet: hvert forsøk på nødvendige og tilstrekkelige vilkår har moteksempler, og derfor varierer rollelistene mellom framstillinger. Lengden på listene er ikke problemet — grensene er det.",
    },
    {
      question: "Hva er det avgjørende ved formuleringen «bevegelse i forhold til den andre»?",
      options: ["At egenskapen er relasjonell og har et motstykke på den andre siden", "At egenskapen bare gjelder for deltakere som flytter seg fysisk", "At egenskapen alltid telles når verbet beskriver en bevegelse", "At egenskapen bare kan telles i setninger som har et stedsledd i seg"],
      explanation: "Riktig er relasjonen: motstykket er stasjonaritet på proto-patient-siden. Egenskapen skal bare telles når verbet faktisk entailer bevegelsen — i «Frosten sprengte røret» følger den ikke av setningen.",
    },
  ],
  'ling1100-6-3': [
    {
      question: "Hvilket trinn kommer først i tilordningsalgoritmen?",
      options: ["Å se på verbet og avgjøre hva slags situasjon det beskriver", "Å oppgi rollen til det leddet som står som subjekt i setningen", "Å avgjøre om hvert av leddene i setningen er argument eller adjunkt", "Å telle antall ledd som oppgaven peker ut i setningen"],
      explanation: "Riktig er verbet: situasjonstypen bestemmer hvilke roller som overhodet er aktuelle. Å begynne med subjektet er nettopp fella — da lar man formen styre tilordningen.",
    },
    {
      question: "Hva er poenget med argumentkontrollen?",
      options: ["Å sjekke at antall funne argumenter stemmer med theta-gridet", "Å sjekke at hvert argument har fått en begrunnelse i svaret", "Å sjekke at alle adjunkter i setningen er nevnt i svaret", "Å sjekke at subjektet har fått riktig tematisk rolle"],
      explanation: "Riktig er tellingen mot gridet: stemmer ikke tallet, har du enten regnet et adjunkt som argument eller oversett et ledd. Kontrollen tar under ti sekunder og bør kjøres også når svaret ser riktig ut.",
    },
    {
      question: "Hvor mange linjer består actor-forklaringen av?",
      options: ["Tre: plassering, avgrensning med testen, og grunnen til at volisjonen mangler", "To: plassering og avgrensning, med testen skrevet ut i klartekst", "Én: at leddet er actor og ikke agens fordi det mangler vilje", "Fire: rolle, argumentstatus, testen kjørt og et eget kontrasteksempel til slutt"],
      explanation: "Riktig er de tre linjene, og den tredje er den som oftest mangler. Å nevne begge begrepene uten å si hva som skiller dem i akkurat dette tilfellet, er å liste i stedet for å forklare.",
    },
    {
      question: "Hva er kryssjekken rolle mot argumentstatus?",
      options: ["Kontrollen av at hvert ledd har fått begge opplysningene", "Kontrollen av at rollen stemmer med syntaktisk funksjon", "Kontrollen av at alle argumenter har fått samme rolle", "Kontrollen av at adjunktene ikke har fått noen rolle"],
      explanation: "Riktig er at rolle og argumentstatus er to svar per ledd. De kan gå hver sin vei — «på benken» er sted i to setninger, men argument i bare den ene.",
    },
    {
      question: "Hva er det tredje trinnet i opptellingsformen for proto-roller?",
      options: ["Å si eksplisitt hvilke egenskaper du ikke teller, og hvorfor", "Å oppgi hvilken tematisk rolle leddet har på katalogen", "Å avgjøre om leddet er et argument eller et adjunkt i setningen", "Å oppgi antallet egenskaper uten å begrunne noen av dem nærmere"],
      explanation: "Riktig er de ikke-talte egenskapene: det er dette som skiller en opptelling fra en avkryssing. Et svar som haker av alle åtte fordi setningen «føles» typisk, har brukt Dowtys navn på magefølelse.",
    },
    {
      question: "Hvilken felle rammer oftest i sjangeren F4?",
      options: ["Å begrunne den tematiske rollen med leddets syntaktiske funksjon", "Å oppgi for mange roller i forhold til verbets theta-grid", "Å bruke feil navn på en av de mindre vanlige rollene i rollekatalogen", "Å behandle et adjunkt som om det ikke hadde noen rolle"],
      explanation: "Riktig er formbegrunnelsen: «det er agens fordi det er subjektet» gir riktig svar i de fleste setninger, men aldri i dem eksamen velger. Adjunkter kan godt ha en semantisk rolle — det er ikke en feil.",
    },
    {
      question: "Hva er svaret når «velte» er tvetydig mellom en villet handling og et uhell?",
      options: ["Å oppgi begge lesningene og si hvilken man bygger på", "Å velge den villede lesningen, siden den er den vanligste av de to", "Å svare at rollen avhenger av konteksten setningen står i", "Å velge uhellslesningen, som er den svakeste påstanden"],
      explanation: "Riktig er å skrive begge lesningene ut. «Det kommer an på konteksten» uten fortsettelse er slark: det oppgir verken hvilke lesninger som finnes eller hvilken rolle leddet har i noen av dem.",
    },
    {
      question: "Hvilken test avgjør argumentstatus når obligatorishetstesten ikke slår ut?",
      options: ["Verbavhengighetstesten, altså om leddet overlever et verbbytte", "Volisjonskontrollen, altså om «med vilje» kan legges til", "Negasjonstesten, altså om slutningen overlever en negasjon av setningen", "Kansellerbarhetstesten, altså om slutningen kan trekkes"],
      explanation: "Riktig er verbavhengighetstesten: bytt verbet til «sove», og se om leddet passer. Volisjonskontrollen gjelder rollen, og de to siste testene hører til slutningstypene i Del 3.",
    },
    {
      question: "Hvor mye tid bør apparatdelen ha i en tjueminutters F4-oppgave?",
      options: ["Omtrent fem minutter, siden det er den delen sensor vekter mest", "Omtrent ett minutt, siden apparatet kan gjengis i to setninger", "Omtrent ti minutter, altså halvparten av den samlede tiden", "Ingen fast tid, siden apparatet bare nevnes der det passer"],
      explanation: "Riktig er cirka fem minutter av tjue. Delen skal ikke skvises til slutt, siden den ene sensorveiledningen peker den ut — men den skal heller ikke spise tiden til selve tilordningene.",
    },
    {
      question: "Hva er den vanligste tidsfellen i en F4-besvarelse?",
      options: ["Å skrive en innledning om hva tematiske roller er", "Å bruke for lang tid på å velge mellom to rollenavn", "Å skrive for mange egne kontrasteksempler til slutt", "Å sette opp theta-gridet før tilordningene begynner"],
      explanation: "Riktig er innledningen: den er ikke spurt om, og den spiser minuttene apparatdelen trenger. Theta-gridet er derimot et tidsbesparende grep — det gjør tilordningene raskere.",
    },
    {
      question: "Hva bør stå i svaret sammen med rollenavnet?",
      options: ["Testen kjørt på den konkrete setningen i oppgaven", "Navnet på den framstillingen rollelisten er hentet fra", "En vurdering av hvor sikker tilordningen er samlet sett", "En oversikt over de andre rollene som ble vurdert"],
      explanation: "Riktig er testen kjørt på materialet. En test som bare navngis, er en påstand om et testresultat; en test som skrives ut, er resultatet.",
    },
    {
      question: "Hvilket ledd i «Under uværet slo bølgene fortøyningen løs fra kaia» er adjunkt?",
      options: ["Under uværet, som bare plasserer hendelsen i tid", "Bølgene, som ikke er en agens i denne setningen", "Fortøyningen, som ikke endrer tilstand i hendelsen", "Fra kaia, som ikke er nevnt i verbets grunnbetydning"],
      explanation: "Riktig er tidsleddet: verbavhengighetstesten viser at det passer med nesten hvilket som helst verb. «Fra kaia» er derimot kilde og argument, siden leddet krever et løsrivelsesverb.",
    },
    {
      question: "Hva sier løsningsoppskriftens trinn 2?",
      options: ["Sett opp verbets theta-grid og tell plassene i det", "Kjør volisjonskontrollen på subjektet i setningen først", "Skriv begrunnelsen etter hvert av rollenavnene", "Tell antall deloppgaver i oppgaveteksten først"],
      explanation: "Riktig er theta-gridet: det sier hvor mange argumenter du leter etter, og alt som blir til overs, er adjunkt-kandidat. Volisjonskontrollen kommer senere, som del av tilordningen.",
    },
    {
      question: "Hva kjennetegner en setning der argumentseleksjonsprinsippet ikke kan brukes?",
      options: ["At predikatet mangler enten subjekt eller direkte objekt", "At subjektet i setningen ikke har noen volisjon i det hele tatt", "At setningen står i passiv i stedet for i aktiv form", "At verbet har flere enn to plasser i theta-gridet sitt"],
      explanation: "Riktig er kravet om både subjekt og objekt: prinsippet er en sammenlikning mellom to argumenter. Passive setninger skrives om til aktiv først, og treargumentverb dekkes av et eget korollar.",
    },
    {
      question: "Hva er den skarpe forskjellen mellom argument og adjunkt?",
      options: ["Argumentet fyller en plass verbet krever, adjunktet gjør ikke det", "Argumentet står nær verbet, mens adjunktet står lenger unna i setningen", "Argumentet har en tematisk rolle, mens adjunktet ikke har det", "Argumentet er obligatorisk, mens adjunktet alltid kan strykes"],
      explanation: "Riktig er plassen i verbets situasjon. Et adjunkt kan godt ha en rolle — «med en skiftenøkkel» er instrument — og mange argumenter kan strykes, som objektet i «Nora spiste».",
    },
    {
      question: "Hva bør du gjøre først i en flerdelt F4-oppgave?",
      options: ["Telle deloppgavene og notere hva hver av dem krever", "Skrive apparatdelen ferdig før tilordningene begynner", "Velge ut de deloppgavene du kan best, og starte der", "Skrive et eget kontrasteksempel som svaret kan bygge på"],
      explanation: "Riktig er tellingen: å hoppe over en deloppgave er den dyreste enkeltfeilen i en tellbar oppgave. Rekkefølgen du besvarer dem i, er derimot fri.",
    },
    {
      question: "Hva viser paret «Nora satte kaffekoppen på benken» og «Nora drakk kaffen på benken»?",
      options: ["At samme ledd med samme rolle kan ha ulik argumentstatus", "At samme ledd kan ha to ulike tematiske roller i to setninger", "At stedsledd alltid er argumenter når verbet er transitivt", "At argumentstatus følger av hvilken preposisjon som brukes"],
      explanation: "Riktig er at rollen er sted i begge, mens argumentstatusen er ulik. Det er verbet som avgjør — «sette» krever et sted, «drikke» gjør det ikke.",
    },
    {
      question: "Hva skiller en actor fra en undergoer?",
      options: ["Actor utfører eller setter i gang, undergoer blir berørt", "Actor er levende, mens undergoer er en gjenstand", "Actor er Dowtys begrep, undergoer er en eldre term", "Actor står som subjekt, undergoer står alltid som objekt"],
      explanation: "Riktig er skillet mellom å utføre og å bli berørt. Begge er vide roller ment å erstatte flere smale, og ingen av dem er Dowtys — proto-rollene er hans.",
    },
  ],
  'ling1100-7-1': [
    {
      question: "Hva sier kompositsjonalitetsprinsippet?",
      options: ["At helhetens betydning bestemmes av delene og sammensetningsmåten", "At helhetens betydning er summen av betydningen til ordene", "At hvert ord i et uttrykk har nøyaktig én fast betydning", "At betydningen til en hel setning er lagret som én enhet i leksikon"],
      explanation: "Riktig er begge leddene. Svaret om «summen av ordene» utelater sammensetningsmåten — og betydningen er dessuten ikke en sum, men resultatet av en operasjon.",
    },
    {
      question: "Hvilket fenomen er det klareste beviset for prinsippets andre ledd?",
      options: ["Strukturell flertydighet, altså ulik gruppering av samme deler", "Homonymi, altså at samme form har urelaterte betydninger", "Synonymi, altså at to helt ulike former har den samme betydningen", "Idiomer, altså faste uttrykk med ikke-utregnelig betydning"],
      explanation: "Riktig er strukturell flertydighet: to lesninger med nøyaktig de samme delene kan bare skille seg i grupperingen. Homonymi er flertydighet i en del, og idiomer utfordrer prinsippet i stedet for å bevise det.",
    },
    {
      question: "Hva er produktivitet i denne sammenhengen?",
      options: ["At språkbrukere lager og forstår setninger de aldri har møtt", "At språkbrukere kan bøye ord de aldri har møtt tidligere", "At språk stadig tar opp nye ord fra andre språksamfunn gjennom lån", "At ett og samme ord kan brukes i mange helt ulike sammenhenger"],
      explanation: "Riktig er evnen til å håndtere nye setninger. Det er hovedargumentet for kompositsjonalitet: var betydningene lagret ferdig, måtte et endelig hode romme uendelig mange oppslag.",
    },
    {
      question: "Hva er systematisitet?",
      options: ["At den som forstår én setning, forstår andre med samme deler", "At språk er bygget etter regler som lar seg skrive ned presist", "At betydningen til et ord er den samme i alle setninger det står i", "At alle språk følger de samme grunnleggende reglene"],
      explanation: "Riktig er at evnen kommer i mønstre: den som forstår «Hunden bet postbudet», forstår automatisk den omvendte setningen. Det er et selvstendig argument ved siden av produktiviteten.",
    },
    {
      question: "Hva er funksjonsapplikasjon?",
      options: ["Å anvende en funksjon på et argument og få en verdi", "Å slå opp betydningen til et ord i det mentale leksikonet", "Å avgjøre hvilken av flere grupperinger som er riktig", "Å oversette en norsk setning til predikatlogisk form"],
      explanation: "Riktig er kombinasjonsregelen: helheten er funksjonen anvendt på argumentet. Det er kompositsjonalitetsprinsippet skrevet ned som en regneregel, og den brukes på hvert nivå i oppbyggingen.",
    },
    {
      question: "I hvilken rekkefølge kombineres delene i «Sara leste avisen»?",
      options: ["Verbet med objektet først, og resultatet med subjektet etterpå", "Verbet med subjektet først, og resultatet med objektet etterpå", "Subjektet med objektet først, og verbet på resultatet etterpå", "Alle tre delene kombineres samtidig i én enkelt operasjon"],
      explanation: "Riktig er at objektet kommer først. Det speiler at «leste avisen» er en enhet i setningen, mens «Sara leste» ikke er det — grupperingen er ikke fri, syntaksen bestemmer den.",
    },
    {
      question: "Hva sier substitusjonsprinsippet?",
      options: ["At bytte av en del med et synonym ikke endrer helhetens betydning", "At ethvert ord kan byttes med et annet i samme ordklasse", "At betydningen til en enkelt del avhenger av de andre delene i uttrykket", "At synonymer alltid har nøyaktig den samme betydningen"],
      explanation: "Riktig er følgen av kompositsjonaliteten: er bare delen byttet og delen betyr det samme, må helheten bety det samme. Det er nettopp denne testen idiomene faller på.",
    },
    {
      question: "Hvorfor er «å legge kortene på bordet» ikke kompositsjonelt?",
      options: ["Fordi substitusjonstesten fjerner den idiomatiske betydningen", "Fordi bildet i uttrykket ikke gir mening for en språkbruker", "Fordi uttrykket inneholder flere ord enn nødvendig", "Fordi uttrykket kan bøyes og ta imot innskudd"],
      explanation: "Riktig er substitusjonstesten: «å legge spillkortene på bordet» mister den idiomatiske lesningen. Uttrykket er faktisk ganske gjennomsiktig — bildet gir mening — og det viser at gjennomsiktighet og kompositsjonalitet er to ulike ting.",
    },
    {
      question: "Hva kjennetegner et snittende adjektiv?",
      options: ["At «A N» er nøyaktig snittet av dem som er A og dem som er N", "At adjektivet står foran substantivet i den norske frasen", "At adjektivet kan brukes sammen med hvilket som helst ord", "At adjektivet ikke kan graderes med et gradsadverb"],
      explanation: "Riktig er snittoperasjonen: en italiensk arkitekt er både italiensk og arkitekt, og begge slutningene følger. Plasseringen foran substantivet sier ingenting — «tidligere» står også der og er ikke snittende.",
    },
    {
      question: "Hvorfor er «en tidligere statsminister» et problem for prinsippet?",
      options: ["Fordi helheten ikke kan regnes ut med en enkel snittoperasjon", "Fordi uttrykket er flertydig mellom to ulike grupperinger", "Fordi ordet «tidligere» ikke har noen betydning alene", "Fordi uttrykket består av flere ord enn det som er nødvendig her"],
      explanation: "Riktig er at adjektivet gjør noe med substantivets betydning i stedet for å legge en betingelse ved siden av. Uttrykket er ikke flertydig — det har én lesning, og den lar seg bare ikke regne ut på den enkleste måten.",
    },
    {
      question: "Hva er det vanlige svaret på utfordringen fra idiomer?",
      options: ["At idiomer er lagret som enheter i ordforrådet", "At idiomer er unntak prinsippet ikke gjelder for", "At idiomer er kompositsjonelle når man ser bildet", "At idiomer bare finnes i uformelt språk og ikke ellers"],
      explanation: "Riktig er lagringssvaret: idiomet er ikke komplekst på det nivået prinsippet gjelder. Svaret er ikke gratis — idiomer kan bøyes og ta imot innskudd, og helt lagrede enheter burde vært stive.",
    },
    {
      question: "Hva skiller sterk fra svak kompositsjonalitet?",
      options: ["Om noe annet enn deler og sammensetning får bidra til helheten", "Om prinsippet gjelder for setninger eller også for fraser", "Om prinsippet regnes som en hypotese eller som en definisjon", "Om prinsippet tilskrives Frege eller en senere tenker"],
      explanation: "Riktig er hvor mye annet som slippes til: den svake versjonen tillater et bidrag fra kontekst og lagrede enheter. Jo sterkere versjon, desto mer forklares — og desto lettere kan prinsippet motbevises.",
    },
    {
      question: "Hva er den vanlige måten å redde prinsippet fra ikke-snittende adjektiver?",
      options: ["Å behandle adjektivet som en funksjon fra betydning til betydning", "Å behandle adjektivet som en del av substantivets betydning", "Å regne uttrykket som et idiom lagret i ordforrådet", "Å si at prinsippet slett ikke gjelder for adjektivfraser i det hele tatt"],
      explanation: "Riktig er funksjonsbehandlingen: helheten er fortsatt delene pluss én anvendelse. Kostnaden er at delene blir mer innfløkte, og at prinsippet dermed blir vanskeligere å motbevise.",
    },
    {
      question: "Hva er forskjellen på kompositsjonalitet og gjennomsiktighet?",
      options: ["Om helheten er regnet ut, eller om koblingen er lett å se", "Om uttrykket ligger fast, eller om det kan varieres fritt i bruk", "Om uttrykket er kort, eller om det er langt og omstendelig", "Om uttrykket er vanlig, eller om det er sjeldent i vanlig språkbruk"],
      explanation: "Riktig er skillet mellom utregning og synlighet. Et uttrykk kan være gjennomsiktig uten å være kompositsjonelt: bildet gir mening i ettertid, men du kunne ikke regnet det ut på forhånd.",
    },
  ],
  'ling1100-7-2': [
    {
      question: "Hva er konseptuell struktur hos Jackendoff?",
      options: ["Et nivå av mental representasjon der betydning er kodet", "Den syntaktiske strukturen til en setning i et språk", "En liste over alle tematiske roller som finnes i språk", "Rekkefølgen betydningene bygges opp i under lesing"],
      explanation: "Riktig er representasjonsnivået, som ikke er språklig i seg selv — det er der informasjon fra språk, syn og handling møtes. Et konseptuelt tre er derfor ikke et syntaktisk tre.",
    },
    {
      question: "Hva beskriver det tematiske planet i to-plan-analysen?",
      options: ["Bevegelse og plassering: hva som flytter seg, og hvor", "Hvem som handler, og hvem som blir berørt av handlingen", "Rekkefølgen delene kombineres i under oppbyggingen av setningen", "Hvilke ord i setningen som er argumenter, og hvilke som er adjunkter"],
      explanation: "Riktig er bevegelse og plassering, med rollene tema, kilde, mål og sted. Hvem som handler og hvem som berøres, hører til handlingsplanet — og det er nettopp derfor de to planene trengs.",
    },
    {
      question: "Hvorfor trenger Jackendoff to plan i stedet for ett?",
      options: ["Fordi samme deltaker kan ha en rolle på hvert plan samtidig", "Fordi noen setninger mangler en deltaker på det ene planet", "Fordi noen språk bare har roller på det ene av planene", "Fordi tre-diagrammet ellers ville blitt for høyt å tegne"],
      explanation: "Riktig er dobbeltrollen: i «Mannskapet dro bilen opp» er bilen både det som beveger seg og det som berøres. Med ett plan måtte man valgt én av dem, og det er nettopp den tvangen som gjør rollelistene vanskelige.",
    },
    {
      question: "Hvilken rotkategori gir hovedfunksjonen BE?",
      options: ["State, siden en plassering ikke er noe som skjer", "Event, siden alle konseptuelle trær har hendelser", "Place, siden funksjonen tar et sted som sitt argument", "Thing, siden funksjonen gjelder en gjenstand i verden"],
      explanation: "Riktig er State: BE beskriver hvordan noe er, og setningen svarer ikke på «hva skjedde?». GO, STAY og CAUSE gir derimot Event.",
    },
    {
      question: "Hvilket argument tar GO alltid, ved siden av en Thing?",
      options: ["Et Path med en retningsfunksjon under seg", "Et Place med en stedsfunksjon under seg", "Et innfelt Event med en egen hovedfunksjon", "En State som beskriver sluttilstanden i hendelsen"],
      explanation: "Riktig er Path: et GO-tre uten Path er den vanligste strukturfeilen i sjangeren. Place hører til BE og STAY, og et innfelt Event er andre argument til CAUSE.",
    },
    {
      question: "Hva skiller BE fra STAY?",
      options: ["BE gir State, STAY gir Event, men begge tar Place", "BE tar Place, mens STAY tar Path som andre argument", "BE gjelder gjenstander, mens STAY gjelder personer", "BE brukes i nåtid, mens STAY brukes i fortid"],
      explanation: "Riktig er at bare rotkategorien skiller: STAY sier at tilstanden fortsatte gjennom et tidsrom. Signalet i norsk er uttrykk som «bli liggende» og «bli stående».",
    },
    {
      question: "Hva er andre argument til CAUSE?",
      options: ["Et helt innfelt Event som må være komplett", "En Thing som blir berørt av forårsakingen", "Et Path som viser retningen forårsakingen tar", "En State som beskriver resultatet av handlingen"],
      explanation: "Riktig er det innfelte Event: CAUSE beskriver et forhold mellom en deltaker og en hel hendelse. Det innfelte treet må være like komplett som et selvstendig tre, og det er den vanligste CAUSE-feilen.",
    },
    {
      question: "Hva består en Place-node alltid av?",
      options: ["En stedsfunksjon og dens argument", "En retningsfunksjon og dens argument", "En hovedfunksjon og to argumenter", "En Thing merket med leksikalsk innhold"],
      explanation: "Riktig er stedsfunksjonen pluss argumentet: skuffen er en Thing, mens «i skuffen» er et Place. En Place-node uten stedsfunksjon er ufullstendig, akkurat som et Path uten retningsfunksjon.",
    },
    {
      question: "Hva skiller retningsfunksjonene TO og TOWARD?",
      options: ["TO sier at banen ender ved målet, TOWARD sier bare retningen", "TO brukes om personer, mens TOWARD brukes om gjenstander", "TO gir Event som rotkategori, mens TOWARD i stedet gir en State", "TO tar en Thing, mens TOWARD tar et Place som argument"],
      explanation: "Riktig er om målet nås. Testen: kan du legge til «men den kom aldri fram» uten selvmotsigelse? Går det, er retningsfunksjonen TOWARD.",
    },
    {
      question: "Hvilket spørsmål stilles først i tegneprosedyren?",
      options: ["Om en deltaker får noe annet til å skje", "Om noe flytter seg fra ett sted til et annet", "Om noe blir værende et sted gjennom et tidsrom", "Om setningen beskriver en tilstand eller en hendelse"],
      explanation: "Riktig er CAUSE-spørsmålet. En CAUSE-setning inneholder også bevegelse, så stiller du GO-spørsmålet først, stopper du på det innfelte treet og mister det øverste laget.",
    },
    {
      question: "Hva er femte trinn i tegneprosedyren?",
      options: ["Å merke løvnodene med det leksikalske innholdet", "Å kontrollere at alle funksjoner har fått argument", "Å sette inn andre argument under hovedfunksjonen", "Å velge rotkategori ut fra hovedfunksjonen"],
      explanation: "Riktig er merkingen: uten den viser treet bare formen, som er den samme for alle bevegelsessetninger. Kontrollen kommer etterpå, og den er ikke et av de fem trinnene.",
    },
    {
      question: "Hva sier den lokalistiske hypotesen?",
      options: ["At de samme funksjonene organiserer også ikke-romlige felt", "At betydning er knyttet til bestemte områder i hjernen", "At alle språk har de samme preposisjonene for sted og retning", "At konseptuell struktur bare gjelder bevegelsessetninger"],
      explanation: "Riktig er overføringen til andre felt: «Hytta gikk fra bestefaren til barnebarnet» har GO-struktur uten fysisk bevegelse. Det er dette som gjør apparatet interessant — romlig struktur er en mal for andre områder.",
    },
    {
      question: "Hvilken struktur har «Reven løp inn i skogen»?",
      options: ["GO med Path TO og et Place IN under seg", "GO med Path TO og en Thing under seg", "BE med Place IN og en Thing under seg", "CAUSE med et innfelt GO og et Path TO"],
      explanation: "Riktig er det ekstra Place-laget: «inn i» sier både retning og innhold. Uten laget ville treet sagt at reven endte ved skogen, ikke inne i den — en betydningsforskjell som er lett å overse i tegningen.",
    },
    {
      question: "Hva er den vanligste feilen i en tegneoppgave?",
      options: ["En manglende node, typisk Path eller Place", "Feil leksikalsk innhold på en av løvnodene", "For mange nivåer i det innfelte hendelsestreet", "Feil rekkefølge på argumentene under rotnoden"],
      explanation: "Riktig er den manglende noden: fire av de fem kontrollpunktene gjelder nettopp det. Et tre med feil retningsfunksjon er delvis riktig; et tre uten Path sier ikke det setningen sier.",
    },
    {
      question: "Hvorfor er et konseptuelt tre ikke et syntaktisk tre?",
      options: ["Fordi nodene er begreper som Thing og Path, ikke ordklasser", "Fordi treet tegnes med sirkler i stedet for rette linjer", "Fordi treet alltid har færre nivåer enn et syntaktisk tre", "Fordi treet bygges ovenfra og ned i stedet for nedenfra og opp"],
      explanation: "Riktig er nodetypene: vi tegner begrepsstrukturen setningen uttrykker, ikke setningens grammatikk. En besvarelse som tegner setningsleddene, har tegnet feil slags tre.",
    },
    {
      question: "Hva skjer med rotkategorien når «Kartet ligger på hylla» blir «Kartet ble liggende på hylla»?",
      options: ["Den går fra State til Event, siden tilstanden fortsatte", "Den går fra Event til State, siden ingenting flytter seg", "Den er uendret, siden argumentene er de samme i begge", "Den går fra State til Place, siden stedet er det samme"],
      explanation: "Riktig er skiftet til Event, med STAY som hovedfunksjon. Argumentene er riktignok identiske — Thing og Place — men rotkategorien skiller, og det er nettopp det som gjør STAY vanskelig å kjenne igjen.",
    },
  ],
  'ling1100-8-1': [
    {
      question: "Hva slags påstand er samarbeidsprinsippet?",
      options: ["En forventning samtaledeltakere tolker ut fra", "En moralsk regel om å være ærlig mot andre", "En beskrivelse av hvordan folk faktisk alltid snakker", "En grammatisk regel om oppbygningen av samtaler"],
      explanation: "Riktig er tolkningsforventningen. Var maksimene regler, ville et brudd vært en overtredelse; er de forventninger, blir et åpenlyst brudd et signal — og det er hele håningsmekanismen.",
    },
    {
      question: "Hvilken maksime svarer på spørsmålet «er det sant?»",
      options: ["Kvalitetsmaksimen, som gjelder sannhet og grunnlag", "Kvantitetsmaksimen, som gjelder mengden informasjon", "Relasjonsmaksimen, som gjelder om noe hører hjemme i samtalen", "Måtemaksimen, som gjelder klarhet i selve framstillingen"],
      explanation: "Riktig er kvalitet. De fire spørsmålene er hvor mye, er det sant, hører det hit, og er det klart sagt — ett per maksime, og de er verdt å kunne som en huskeregel.",
    },
    {
      question: "Hva sier kvantitetsmaksimens andre del?",
      options: ["Gjør ikke bidraget mer informativt enn det som kreves", "Gjør bidraget så informativt som formålet krever", "Si ikke noe du mangler tilstrekkelig grunnlag for", "Unngå unødvendig omstendelighet i framstillingen"],
      explanation: "Riktig er forbudet mot å si for mye. Den delen glemmes ofte, og den er nettopp den som gjør at et overdrevent detaljert svar får mottakeren til å lete etter en grunn.",
    },
    {
      question: "Hva skjer når en taler bryter en maksime stille?",
      options: ["Det oppstår ingen implikatur i det hele tatt", "Det oppstår en implikatur om saken det spørres om", "Det oppstår en implikatur om talerens kunnskap", "Samtalen bryter sammen fordi samarbeidet opphører"],
      explanation: "Riktig er fraværet av implikatur: mottakeren merker ikke bruddet og har ingen grunn til å lete etter en annen mening. En løgn er nettopp et slikt brudd, og den gir ingen slutning.",
    },
    {
      question: "Hva kjennetegner en maksimekollisjon?",
      options: ["At taleren ikke kan oppfylle én maksime uten å bryte en annen", "At taleren bryter alle de fire maksimene på én gang", "At to samtaledeltakere er uenige om hva som er relevant i samtalen", "At taleren sier eksplisitt at hun ikke kan bidra her"],
      explanation: "Riktig er den doble bindingen, typisk mellom kvantitet og kvalitet. Et eksplisitt avslag er uttreden, som er en annen av de fire måtene — og som ikke gir implikatur.",
    },
    {
      question: "Hvilken implikatur oppstår ved en maksimekollisjon?",
      options: ["En om talerens kunnskapstilstand, ikke om saken", "En om saken det spørres om, ikke om taleren", "Ingen, siden kollisjonen er utenfor talerens kontroll", "En om at taleren ikke ønsker å svare på spørsmålet"],
      explanation: "Riktig er slutningen om taleren: at hun ikke vet mer presist. Håning gir derimot en implikatur om saken, og det er den viktigste forskjellen mellom de to måtene som gir slutninger.",
    },
    {
      question: "Hva er ironi i Grices analyse?",
      options: ["En håning av kvalitetsmaksimen der bruddet er synlig ment", "En håning av måtemaksimen der formen er unødig lang og tung", "Et stille brudd på kvalitetsmaksimen som ikke merkes", "En uttreden der taleren markerer at hun ikke bidrar"],
      explanation: "Riktig er den åpenlyse håningen av kvalitet: taleren sier noe hun ikke tror er sant, og begge vet det. Er bruddet ikke gjensidig kjent, virker ironien ikke — det er derfor den mislykkes overfor uinnvidde.",
    },
    {
      question: "Hva skiller gardering fra uttreden?",
      options: ["Ved gardering kommer opplysningen likevel, med et forbehold", "Ved gardering er taleren usikker, ved uttreden er hun sikker", "Gardering gjelder bare kvalitetsmaksimen og ingen andre", "Gardering skaper alltid en implikatur, uttreden aldri"],
      explanation: "Riktig er om opplysningen kommer. Ved gardering blir taleren i samarbeidet og varsler at bidraget er begrenset; ved uttreden trer hun ut, og hver av de fire maksimene har sine garderinger.",
    },
    {
      question: "Hva er en konversasjonell implikatur?",
      options: ["Utledet tilleggsinnhold som kan trekkes tilbake", "Innhold som følger av setningens sannhetsbetingelser", "En bakgrunnsantakelse som overlever negasjon", "En slutning som følger av et bestemt ord i ytringen"],
      explanation: "Riktig er det utledede og kansellerbare. Innhold som følger av sannhetsbetingelsene, er entailment; noe som overlever negasjon, er presupposisjon; og en slutning fra et bestemt ord er en konvensjonell implikatur.",
    },
    {
      question: "Hvilket trinn i Grices utledningsskjema bærer selve arbeidet?",
      options: ["Trinnet som sier hva som ville vært galt ved bidraget", "Trinnet som slår fast at taleren har sagt noe bestemt", "Trinnet som konkluderer med hva som er implikert i ytringen", "Trinnet som sier at taleren ikke har hindret slutningen"],
      explanation: "Riktig er trinnet om hva som ellers ville vært galt. Uten det er skjemaet fem tomme linjer, og det er nettopp det trinnet som mangler i de fleste besvarelser.",
    },
    {
      question: "Hva er ikke-naturlig mening hos Grice?",
      options: ["Mening som hviler på en hensikt og på at hensikten gjenkjennes", "Mening som ikke lar seg utlede fra ordenes betydning", "Mening som varierer fra ett språksamfunn til et annet", "Mening som bare finnes i skriftlig og ikke i muntlig språk"],
      explanation: "Riktig er hensiktsbaseringen: røyk betyr ild naturlig, mens tre ringesignaler betyr noe fordi noen har lagt det i dem. All pragmatikk handler om den andre typen.",
    },
    {
      question: "Hva formidler «men» i «Hun er nyutdannet, men dyktig»?",
      options: ["En motsetning som ikke påvirker setningens sannhetsverdi", "En motsetning som gjør setningen usann hvis den ikke holder", "En slutning som kan trekkes tilbake uten selvmotsigelse", "En bakgrunnsantakelse som overlever negasjon av setningen"],
      explanation: "Riktig er den konvensjonelle implikaturen: setningen er sann i nøyaktig de samme situasjonene som med «og». Slutningen kan ikke kanselleres, og det skiller den fra de konversasjonelle.",
    },
    {
      question: "Hva er det sagte hos Grice?",
      options: ["Innholdet som følger av ord og grammatikk, med indeksikaler løst", "Alt taleren formidler, både direkte og gjennom slutninger", "Den delen av innholdet som mottakeren faktisk oppfatter i ytringen", "Det innholdet som er felles for alle språk med samme setning"],
      explanation: "Riktig er ordenes og grammatikkens bidrag, med indeksikalske uttrykk oppløst. Uten dette skillet kan man ikke si at noe er utledet, siden man ikke har noe å utlede det fra.",
    },
    {
      question: "Hvorfor er den eksklusive lesningen av «eller» ofte pragmatisk?",
      options: ["Fordi den kan trekkes tilbake uten at det blir selvmotsigende", "Fordi disjunksjonen er eksklusiv i logikken fra starten av", "Fordi ordet «eller» har to ulike betydninger i ordboka", "Fordi konteksten alltid avgjør hva disjunksjonen betyr"],
      explanation: "Riktig er kansellerbarheten: «suppe eller salat — begge deler går også fint» er ingen selvmotsigelse. Disjunksjonen er inklusiv i logikken, og eksklusiviteten er utledet via kvantitetsmaksimen.",
    },
    {
      question: "Hva er en gardering av måtemaksimen?",
      options: ["«For å gjøre det kort» og liknende markører om framstillingen", "«Så vidt jeg vet» og liknende markører om kunnskapsgrunnlag", "«Litt på siden, men» og liknende markører om relevans", "«Uten å gå i detaljer» og liknende markører om mengde"],
      explanation: "Riktig er markøren om framstillingen, siden måtemaksimen gjelder formen. De øvrige svarene er garderinger, men av henholdsvis kvalitet, relasjon og kvantitet.",
    },
    {
      question: "Hvorfor er garderingsuttrykk et argument for at maksimene finnes?",
      options: ["Fordi språk har faste markører for hver av de fire", "Fordi garderinger forekommer i alle kjente språk", "Fordi garderinger alltid skaper en klar implikatur", "Fordi garderinger gjør at maksimene aldri brytes"],
      explanation: "Riktig er at markørene finnes for hver enkelt maksime. Det ville vært merkelig om oppdelingen bare var noe en filosof fant på — språkbrukerne har åpenbart en følelse av nettopp disse fire kravene.",
    },
    {
      question: "Hva er hyperbole i Grices analyse?",
      options: ["En håning av kvalitetsmaksimen der noe er åpenbart for sterkt", "En håning av måtemaksimen der framstillingen er for lang", "En håning av kvantitetsmaksimen der altfor mye blir sagt på én gang", "Et stille brudd på kvalitetsmaksimen som ikke skal merkes"],
      explanation: "Riktig er overdrivelsen som en åpenlys håning av kvalitet. Den mente meningen ligger i samme retning som det sagte, bare svakere — det er forskjellen fra ironi, der den ligger motsatt vei.",
    },
    {
      question: "Hvilken maksime har en særstilling hos Grice?",
      options: ["Kvalitetsmaksimen, som de andre forutsetter er oppfylt", "Kvantitetsmaksimen, som har flest underpunkter av alle", "Relasjonsmaksimen, som er den korteste av de fire", "Måtemaksimen, som er den eneste om formen på ytringen"],
      explanation: "Riktig er kvalitet: et usant bidrag er heller ikke nyttig informativt eller relevant. Det er også begrunnelsen for at kvalitet vinner ved en maksimekollisjon.",
    },
    {
      question: "Hva bemerker Grice selv om relasjonsmaksimen?",
      options: ["At den skjuler vanskelige spørsmål om hva relevans er", "At den er den viktigste av de fire i praktisk analyse", "At den bare gjelder i samtaler med flere enn to deltakere", "At den er den eneste maksimen som aldri kan hånes"],
      explanation: "Riktig er forbeholdet: Grice er utilfreds med maksimen og peker på at relevans er uavklart. Det er nettopp denne mangelen relevansteorien tar tak i.",
    },
    {
      question: "Hva er forskjellen mellom stille brudd og håning?",
      options: ["Om taleren vil at bruddet skal ses av mottakeren", "Om bruddet gjelder kvalitet eller en av de andre maksimene", "Om taleren har til hensikt å samarbeide i samtalen", "Om bruddet skjer i en muntlig eller en skriftlig ytring"],
      explanation: "Riktig er om bruddet er synlig ment. Ved håning samarbeider taleren fortsatt på det overordnede planet, og bruddet er nettopp signalet — ved et stille brudd vil hun ikke at det skal merkes.",
    },
  ],
  'ling1100-8-2': [
    {
      question: "Hva kjennetegner en konvensjonell implikatur?",
      options: ["Den er knyttet til et bestemt ord og kan ikke kanselleres", "Den er knyttet til samtalen og kan trekkes tilbake", "Den følger direkte av sannhetsbetingelsene til setningen selv", "Den overlever negasjon av setningen den står i"],
      explanation: "Riktig er ordbindingen og at den ikke lar seg kansellere. At noe overlever negasjon, kjennetegner presupposisjon; at det følger av sannhetsbetingelsene, kjennetegner entailment.",
    },
    {
      question: "Hvilken test skiller konvensjonell fra konversasjonell implikatur?",
      options: ["Kansellerbarhetstesten, altså om slutningen kan trekkes tilbake", "Sannhetsbetingelsestesten, altså om setningen blir usann", "Negasjonstesten, altså om slutningen overlever en negasjon av setningen", "Radkontrollen, altså om tabellen har riktig antall rader"],
      explanation: "Riktig er kansellerbarhet. Sannhetsbetingelsestesten skiller dem ikke, siden begge implikaturtypene er sannhetsbetingelsesuavhengige — den skiller derimot implikatur fra entailment.",
    },
    {
      question: "Hva vil det si at begge implikaturtypene er sannhetsbetingelsesuavhengige?",
      options: ["At innholdet formidles uten å inngå i det setningen påstår", "At innholdet kan trekkes tilbake uten at det blir motsigelse", "At innholdet varierer fra situasjon til situasjon når uttrykket brukes", "At innholdet ikke kan gjengis med andre ord enn dem taleren brukte"],
      explanation: "Riktig er at innholdet ikke er en del av påstanden: «Hun er ung, men erfaren» er sann i samme situasjoner som varianten med «og». Kansellerbarhet er en annen egenskap, og bare den ene typen har den.",
    },
    {
      question: "Hva er en generalisert konversasjonell implikatur?",
      options: ["En som følger med uttrykket normalt, uten særlig kontekst", "En som bare oppstår i en helt bestemt sammenheng", "En som gjelder i samtlige kjente språk, uten et eneste unntak", "En som er blitt en del av ordets faste betydning"],
      explanation: "Riktig er at den følger med uttrykket i nesten enhver sammenheng. Den som krever en bestemt sammenheng, er partikularisert — og en GCI er ikke blitt leksikalsk, noe kansellerbarhetstesten viser.",
    },
    {
      question: "Hvilken test skiller generalisert fra partikularisert implikatur?",
      options: ["Å ta ytringen ut av sammenhengen og se om slutningen består", "Å bytte et av ordene med et synonym og se hva som skjer", "Å negere setningen og se om slutningen fortsatt holder", "Å legge slutningen til eksplisitt og se om det blir rart"],
      explanation: "Riktig er kontekstløsrivelsen. Synonymbyttet er avtakbarhetstesten, som skiller konvensjonell fra konversasjonell, og de to siste testene skiller mot henholdsvis presupposisjon og entailment.",
    },
    {
      question: "Hva betyr ikke-avtakbarhet?",
      options: ["At implikaturen overlever når uttrykket byttes med et synonymt", "At implikaturen ikke kan trekkes tilbake i en fortsettelse", "At implikaturen ikke kan sies eksplisitt i tillegg til ytringen", "At implikaturen ikke finnes i alle språk som er undersøkt"],
      explanation: "Riktig er at slutningen henger ved innholdet og ikke ved formen. At noe ikke kan trekkes tilbake, er det motsatte av kansellerbarhet — og det kjennetegner nettopp de konvensjonelle implikaturene.",
    },
    {
      question: "Hvilken gruppe implikaturer er unntaket fra ikke-avtakbarhet?",
      options: ["De som utledes fra måtemaksimen, siden de hviler på formen", "De som utledes fra kvalitetsmaksimen, siden de hviler på ironi", "De som utledes fra relasjonsmaksimen, siden de skifter tema", "De som utledes fra kvantitetsmaksimen, siden de er skalare"],
      explanation: "Riktig er de måtebaserte: de hviler nettopp på hvordan noe er sagt, og en annen formulering fjerner dem. De skalare implikaturene er derimot det klareste tilfellet av ikke-avtakbarhet.",
    },
    {
      question: "Hva betyr forsterkbarhet?",
      options: ["At implikaturen kan sies i tillegg uten å virke overflødig", "At implikaturen blir tydeligere jo lenger samtalen varer", "At implikaturen kan utledes trinn for trinn fra maksimene", "At implikaturen gjelder for flere talere i samme samtale"],
      explanation: "Riktig er at «noen, men ikke alle» er en normal formulering. Trinnvis utledning er kalkulérbarhet, som er en annen av de sju egenskapene.",
    },
    {
      question: "Hvorfor tåler ikke entailmenter forsterkning?",
      options: ["Fordi det andre leddet allerede er sagt av det første", "Fordi entailmenter ikke kan uttrykkes med egne ord", "Fordi entailmenter forsvinner når setningen negeres", "Fordi entailmenter alltid gjelder hele setningen"],
      explanation: "Riktig er redundansen: «Alle kom for sent, og minst én kom for sent» virker påfallende overflødig. Det er nettopp kontrasten som gjør forsterkbarhet til en brukbar test.",
    },
    {
      question: "Hva betyr ubestemmelighet?",
      options: ["At én ytring kan gi opphav til et åpent sett av implikaturer", "At det er uklart om slutningen er en implikatur i det hele tatt", "At implikaturen varierer mellom språksamfunn og mellom kulturer", "At taleren selv ikke vet hva hun har implikert med ytringen"],
      explanation: "Riktig er det åpne settet: flere lesninger kan være like rimelige, og ingen er den ene riktige. Det er ikke en svakhet ved apparatet, men en beskrivelse av hva slags resultat en implikaturanalyse gir.",
    },
    {
      question: "Hva er en Horn-skala ordnet etter?",
      options: ["Semantisk styrke, altså et entailment-forhold mellom leddene", "Hvor vanlige uttrykkene er i språket som brukes", "Alfabetisk rekkefølge blant uttrykkene i settet", "Hvor mange stavelser hvert enkelt uttrykk i settet inneholder"],
      explanation: "Riktig er entailment-forholdet: det sterkeste leddet entailer de svakere, men ikke omvendt. Uten det kravet kan hvilken som helst liste over beslektede ord kalles en skala.",
    },
    {
      question: "Hva gjør Q-prinsippet?",
      options: ["Det gjør fraværet av et sterkere uttrykk informativt", "Det fyller inn den stereotypiske lesningen av det sagte", "Det sikrer at taleren bare sier det hun har grunnlag for", "Det avgjør hvilken maksime som har forrang ved kollisjon"],
      explanation: "Riktig er at fraværet blir en opplysning: valgte taleren et svakere ledd, mangler hun grunnlag for det sterkere. Den stereotypiske utfyllingen er R-prinsippet, som trekker motsatt vei.",
    },
    {
      question: "Hvem er Q-prinsippet orientert mot?",
      options: ["Hører, siden det sikrer at hun får nok informasjon", "Taler, siden prinsippet sparer henne for unødig arbeid", "Begge parter likt, siden det gjelder hele samtalen", "Ingen av dem, siden det er et logisk og ikke et sosialt krav"],
      explanation: "Riktig er hørerorienteringen: Q tjener mottakerens interesse i å få nok. R er talerorientert og sparer henne for å si mer enn nødvendig, og spenningen mellom de to er poenget hos Horn.",
    },
    {
      question: "Hvilke av Grices maksimer svarer R-prinsippet til?",
      options: ["Kvantitetsmaksimens andre del, pluss relasjon og måte", "Kvantitetsmaksimens første del, pluss kvalitetsmaksimen", "Bare måtemaksimen, siden den gjelder formen på ytringen", "Alle fire maksimene, siden R er det mest generelle prinsippet"],
      explanation: "Riktig er den andre delen av kvantitet pluss relasjon og måte — de tre trekker samme vei. Kvalitetsmaksimen holdes utenfor reduksjonen og beholdes som et eget krav.",
    },
    {
      question: "Hva er arbeidsdelingen mellom Q og R?",
      options: ["Kort form gir stereotypisk lesning, lang form gir uvanlig lesning", "Q gjelder i muntlig samtale, mens R gjelder i skriftlig tekst", "Q gjelder skalare uttrykk, mens R gjelder alle andre uttrykk", "Q brukes av taleren, mens R brukes av mottakeren i selve samtalen"],
      explanation: "Riktig er koblingen mellom markerthet og tolkning: «Hun stanset bilen» mot «Hun fikk bilen til å stanse». Det er Horns sterkeste enkeltresultat, og det forklarer et mønster Grice bare kunne beskrive.",
    },
    {
      question: "Hvorfor snur skalaenes retning under negasjon?",
      options: ["Fordi styrkeforholdet mellom leddene snur i den posisjonen", "Fordi negasjonen fjerner implikaturen fra setningen fullstendig", "Fordi Q-prinsippet ikke virker i negerte setninger", "Fordi negasjonen gjør skalaen om til en konvensjonell slutning"],
      explanation: "Riktig er at «ingen» blir den sterkeste påstanden under negasjon, og Q virker på den nye ordningen. Det følger direkte av downward entailment, og det binder sammen semantikk- og pragmatikkhalvdelen.",
    },
    {
      question: "Hva mangler i formuleringen «skalaen viser at «noen» betyr ikke alle»?",
      options: ["Q-prinsippet, som er det som gjør valget informativt", "Entailment-testen, som viser at slutningen er semantisk", "Negasjonstesten, som skiller implikatur fra presupposisjon", "Angivelsen av hvilken maksime som blir hånet i ytringen"],
      explanation: "Riktig er prinsippet: uten det er skalaen bare en liste over ord sortert etter styrke. Ordvalget «betyr» er dessuten upresist — implikaturen utledes, den er ikke en del av ordets betydning.",
    },
    {
      question: "Hva er den strengt tatt riktige slutningen fra en skalar implikatur?",
      options: ["At taleren ikke vet at det sterkere leddet gjelder", "At det sterkere leddet definitivt ikke gjelder i det hele tatt", "At taleren bevisst har valgt å skjule den fulle sannheten", "At det svakere leddet er det eneste som passer i konteksten"],
      explanation: "Riktig er kunnskapsslutningen: Q gir bare at taleren mangler grunnlag for det sterkere. Den sterkere slutningen krever i tillegg at hun er godt informert, og å skille de to er et pluss-punkt.",
    },
  ],
  'ling1100-8-3': [
    {
      question: "Hva består en momentliste av?",
      options: ["Må-punkter, pluss-punkter og feller med feilkode", "Et modellsvar med margkommentarer i tre nivåer", "En fasit og en liste over vanlige feilsvar", "En sjekkliste og et forslag til tidsdisponering"],
      explanation: "Riktig er tredelingen. Formen brukes fordi en A1-oppgave ikke har ett riktig svar — to gode besvarelser kan velge ulike eksempler og ulik rekkefølge og likevel begge være fullstendige.",
    },
    {
      question: "Hva er første trinn i disposisjonsoppskriften for A1?",
      options: ["Å telle instruksjonsverbene i oppgaveteksten", "Å definere det viktigste begrepet i oppgaven", "Å velge hvilke egne eksempler du vil bruke", "Å oppgi taksonomien komplett og talt opp"],
      explanation: "Riktig er tellingen: «gjør rede for X, forklar Y, og gi egne eksempler» er tre krav. Å hoppe over ett er en feil som ikke skyldes manglende kunnskap, men manglende lesing.",
    },
    {
      question: "Hvor stor del av tiden bør mekanismen ha i en A1-besvarelse?",
      options: ["Omtrent en tredel til halvparten av den samlede tiden", "Omtrent en tiendedel, siden mekanismen er kort å gjengi", "All tid som blir til overs etter taksonomien er ferdig", "Like mye tid som innledningen om fagets bakgrunn"],
      explanation: "Riktig er en stor del: det er mekanismen som gir uttelling. Taksonomien tar tre linjer, og en innledning om hva pragmatikk er, er ikke spurt om i det hele tatt.",
    },
    {
      question: "Hva kjennetegner et godt eget eksempel?",
      options: ["At det er nyskrevet, ferdig skrevet og hentet fra hverdagen", "At det er hentet fra pensumboka og gjengitt helt nøyaktig der", "At det er så kort som mulig og lett å huske utenat", "At det viser flere maksimer hånet på samme tid"],
      explanation: "Riktig er nyskrevet og ferdig utformet. «Her ville man gitt et eksempel» er ikke et eksempel, og et konstruert eksempel ingen ville sagt, svekker svaret.",
    },
    {
      question: "Hva skiller en mekanisme navngitt fra en mekanisme kjørt?",
      options: ["Om utledningen står i klartekst på eksempelet ditt", "Om mekanismen omtales med det engelske fagbegrepet", "Om mekanismen knyttes til riktig teoretiker i faget", "Om mekanismen forklares før eller etter eksempelet"],
      explanation: "Riktig er om utledningen står skrevet. «B håner kvantitetsmaksimen, og derfor forstår A at det gikk dårlig» er en påstand om en mekanisme, ikke mekanismen.",
    },
    {
      question: "Hvilket trinn i utledningen mangler oftest?",
      options: ["Trinnet som sier hva som ville vært galt ved bidraget", "Trinnet som slår fast hva taleren faktisk har sagt", "Trinnet som konkluderer med hva taleren faktisk har implikert", "Trinnet som sier at taleren fortsatt samarbeider"],
      explanation: "Riktig er det midterste trinnet. Uten det er utledningen en form uten innhold, og de øvrige trinnene er lette å skrive uten å ha forstått noe.",
    },
    {
      question: "Hvordan behandles én av Huangs egenskaper «fullt ut»?",
      options: ["Navn på to språk, forklaring, eget eksempel og testen kjørt", "Navn på norsk, en definisjon og en henvisning til Huang", "Navn, forklaring og en sammenlikning med en annen egenskap", "Navn og et eksempel hentet fra pensumboka eller kapitlet"],
      explanation: "Riktig er de fire trekkene. Fire egenskaper behandlet slik er et bedre svar enn sju navn i en kolonne, og det er nøyaktig det den ene sensorveiledningen ber om.",
    },
    {
      question: "Hvilken egenskap har ingen egen test?",
      options: ["Ubestemmelighet, som vises ved å oppgi flere lesninger", "Forsterkbarhet, som vises ved et tillegg til ytringen", "Kalkulérbarhet, som vises ved en trinnvis utledning", "Ikke-avtakbarhet, som vises ved et synonymbytte"],
      explanation: "Riktig er ubestemmelighet: den demonstreres ved å gi flere rimelige implikaturer av samme ytring. De tre andre har hver sin test som kan kjøres på et eksempel.",
    },
    {
      question: "Hva er Q-koblingen?",
      options: ["At Q-prinsippet gjør valget av et svakere ledd informativt", "At Horn-skalaen er ordnet etter et entailment-forhold", "At Q og R står i spenning med hverandre i enhver ytring", "At Q svarer til kvantitetsmaksimens første del hos Grice"],
      explanation: "Riktig er at prinsippet er mekanismen og skalaen råstoffet. De øvrige påstandene er sanne, men de er ikke selve koblingen som den ene sensorveiledningen etterspør.",
    },
    {
      question: "Hva krever instruksjonsverbet «sammenlign»?",
      options: ["Eksplisitte sammenlikningsakser med vurdering per akse", "To grundige framstillinger av posisjonene etter hverandre", "En avveiing som ender med at begge sider har noe for seg", "En kronologisk gjennomgang av hvordan teoriene oppsto"],
      explanation: "Riktig er aksene. To parallelle framstillinger er to monologer, og en konklusjon som bare sier at begge har noe for seg, er slark — en unnlatelse forkledd som balanse.",
    },
    {
      question: "Hvorfor bør taksonomien telles i besvarelsen?",
      options: ["Fordi tellingen viser at listen er komplett og ikke tilfeldig", "Fordi sensor bare godtar lister som er nummererte og fullstendige", "Fordi tellingen sparer plass i en besvarelse på tid", "Fordi taksonomien ellers kan forveksles med et eksempel"],
      explanation: "Riktig er at tellingen dokumenterer fullstendigheten. «Grice oppgir fire maksimer» er sterkere enn å ramse dem opp, og en liste med tre av fire ledd er en synlig mangel.",
    },
    {
      question: "Hva er den vanligste feilen i temaet Grice og implikatur?",
      options: ["Å utelate egne eksempler der oppgaven ber om dem", "Å oppgi feil navn på en av de fire maksimene hos Grice", "Å bruke for mye plass på samarbeidsprinsippet", "Å blande Grice sammen med en annen teoretiker"],
      explanation: "Riktig er de manglende eksemplene. Kravet står i settene selv fra Inspera-fasen og framover, og det er derfor et krav og ikke en anbefaling.",
    },
    {
      question: "Hva bør du gjøre når to maksimer begge kan forsvares som hånet?",
      options: ["Oppgi begge analysene og si hvilken du bygger på", "Velge den som nevnes først i pensumframstillingen", "Skrive at analysen avhenger av konteksten ytringen har", "Velge kvantitetsmaksimen, som er den vanligste kilden"],
      explanation: "Riktig er å oppgi begge og velge. «Det kommer an på» uten fortsettelse er slark: det sier verken hvilke analyser som finnes eller hvilken du bygger på.",
    },
    {
      question: "Hva er tidsbudsjettet for en A1-oppgave i Del 8?",
      options: ["Omtrent tjue minutter, som er skrivetiden per besvarelse", "Omtrent førti minutter, siden temaet er stort i pensum", "Omtrent ti minutter, siden redegjørelser går raskt å skrive", "Ingen fast tid, siden pragmatikkoppgaver varierer i omfang"],
      explanation: "Riktig er cirka tjue minutter: et sett har rundt ti besvarelser på fire timer, med tid til lesing og gjennomlesing i tillegg. Anslaget er skrivetid, ikke total tid per oppgave.",
    },
    {
      question: "Hvilken felle ligger i å skrive at «vinden håner kvantitetsmaksimen»?",
      options: ["At håning krever en taler med en hensikt bak bruddet", "At kvantitetsmaksimen ikke kan hånes i det hele tatt", "At vinden ikke er en deltaker i noen samtale", "At håning bare gjelder kvalitetsmaksimen hos Grice"],
      explanation: "Riktig er kravet om en hensikt: håning forutsetter en taler som vil at bruddet skal ses. Alle fire maksimene kan hånes, og kvantitet er faktisk den vanligste.",
    },
    {
      question: "Hva er forskjellen på et må-punkt og et pluss-punkt?",
      options: ["Uten et må-punkt er svaret ufullstendig, uansett kvalitet ellers", "Et må-punkt gir uttelling, mens et pluss-punkt bare unngår trekk", "Et må-punkt gjelder innhold, et pluss-punkt gjelder språk", "Et må-punkt står i pensum, et pluss-punkt gjør ikke det"],
      explanation: "Riktig er at må-punktet er et krav og pluss-punktet et løft. Mangler du et må-punkt, er det ikke en smakssak — det er et hull i besvarelsen.",
    },
  ],
  'ling1100-9-1': [
    {
      question: "Hva er en talehandling?",
      options: ["Handlingen en taler utfører ved å ytre noe", "Den lyden en taler produserer når hun ytrer noe", "Den virkningen en ytring har på den som hører den", "Den setningen som ligger til grunn for en ytring"],
      explanation: "Riktig er handlingen som utføres ved ytringen — å love, advare eller beklage. Lyden er bare den fysiske siden av det lokusjonære laget, virkningen hos mottakeren er den perlokusjonære effekten, og setningen er den abstrakte enheten ytringen realiserer.",
    },
    {
      question: "Hva kjennetegner en performativ ytring i Austins første forslag?",
      options: ["Den utfører en handling i stedet for å beskrive noe", "Den beskriver en handling taleren nettopp har utført", "Den er sann eller usann alt etter hvordan verden er", "Den rapporterer om en forpliktelse som fantes fra før"],
      explanation: "Riktig er at ytringen utfører handlingen. En performativ er verken sann eller usann, men vellykket eller mislykket. Å beskrive eller rapportere en handling er tvert imot det en konstativ gjør, og da er ytringen nettopp sjekkbar mot verden.",
    },
    {
      question: "Hvilken grammatisk form har et performativt verb i en eksplisitt performativ?",
      options: ["Første person entall presens aktiv", "Tredje person entall preteritum aktiv", "Første person flertall futurum passiv", "Andre person entall imperativ aktiv"],
      explanation: "Riktig er første person entall presens aktiv: «Jeg lover …». Preteritumsformen «Han lovet …» rapporterer om en handling og er en konstativ. De to andre formene gjør ytringen til noe annet enn en utførelse i ytringsøyeblikket.",
    },
    {
      question: "Hva er en implisitt performativ?",
      options: ["En ytring som utfører handlingen uten at verbet står der", "En ytring der det performative verbet står i parentes", "En ytring som beskriver handlingen i stedet for å utføre den", "En ytring som utfører to handlinger på én gang"],
      explanation: "Riktig er at handlingen utføres uten at verbet navngir den: «Isen er utrygg her» advarer. Å beskrive handlingen er tvert imot en konstativ, og antall handlinger har ingenting med skillet eksplisitt–implisitt å gjøre.",
    },
    {
      question: "Hva viser «herved»-testen når den slår ut på en ytring?",
      options: ["At ytringen er en eksplisitt performativ", "At ytringen er en implisitt performativ", "At ytringen er en konstativ med sannhetsverdi", "At ytringen har en perlokusjonær effekt"],
      explanation: "Riktig er eksplisitt performativ, siden «herved» krever et verb som navngir handlingen. Testen fanger ikke implisitte performativer, som utfører handlingen uten verbet, og den sier ingenting om sannhetsverdi eller om virkningen hos mottakeren.",
    },
    {
      question: "Hva er hell-vilkår?",
      options: ["Betingelsene som må være oppfylt for at en talehandling skal lykkes", "Betingelsene som gjør at en påstand er sann i en gitt verden", "De trekkene ved ytringen som viser hvilken kraft den har", "De virkningene ytringen må ha hos mottakeren for å telle"],
      explanation: "Riktig er betingelsene for at handlingen skal lykkes — myndighet, situasjon, oppriktighet. Sannhetsbetingelser hører til semantikken, trekkene som viser kraften kalles kraftindikatorer, og virkninger hos mottakeren er perlokusjonære og inngår ikke i vilkårene.",
    },
    {
      question: "Hvilket hell-vilkår sier hva ytringen teller som?",
      options: ["Det vesentlige vilkåret", "Det forberedende vilkåret", "Oppriktighetsvilkåret", "Vilkåret om proposisjonelt innhold"],
      explanation: "Riktig er det vesentlige vilkåret, som formuleres «ytringen teller som …». Det forberedende gjelder situasjon og parter, oppriktighetsvilkåret talerens holdning, og innholdsvilkåret hva ytringen må handle om.",
    },
    {
      question: "For et løfte kreves det at innholdet gjelder en framtidig handling utført av taleren. Hvilket vilkår er dette?",
      options: ["Vilkåret om proposisjonelt innhold", "Det forberedende vilkåret", "Det vesentlige vilkåret", "Oppriktighetsvilkåret"],
      explanation: "Riktig er innholdsvilkåret, som stiller krav til hva ytringen handler om. Det forberedende gjelder om mottakeren ønsker handlingen, det vesentlige at ytringen teller som en forpliktelse, og oppriktighetsvilkåret at taleren faktisk har til hensikt å holde ordet.",
    },
    {
      question: "Hva er et feilslag hos Austin?",
      options: ["At talehandlingen ikke kommer i stand i det hele tatt", "At talehandlingen utføres, men uten oppriktig grunnlag", "At talehandlingen får en annen virkning enn den tilsiktede", "At talehandlingen viser seg å hvile på en usann påstand"],
      explanation: "Riktig er at handlingen aldri kommer i stand, typisk fordi taleren mangler myndighet eller prosedyren brytes. Utførelse uten oppriktighet er et misbruk, uventet virkning er et perlokusjonært forhold, og usannhet gjelder proposisjonen, ikke handlingen.",
    },
    {
      question: "En som allerede har bestemt seg for ikke å møte opp, sier «Jeg lover å komme». Hva foreligger?",
      options: ["Et misbruk — løftet er gitt, men uoppriktig", "Et feilslag — løftet kom aldri i stand", "En konstativ — ytringen beskriver en intensjon", "En perlokusjonær handling uten illokusjonær kraft"],
      explanation: "Riktig er misbruk: oppriktighetsvilkåret er brutt, men handlingen er utført, og taleren kan holdes til løftet. Et feilslag ville betydd at ingen forpliktelse oppsto, og ytringen beskriver ikke en intensjon — den skaper en forpliktelse.",
    },
    {
      question: "Hvorfor forlot Austin skillet mellom konstative og performative ytringer?",
      options: ["Fordi alle ytringer viste seg å utføre handlinger", "Fordi performative ytringer viste seg å ha sannhetsverdi", "Fordi de performative verbene viste seg å være for få", "Fordi mottakerens reaksjon ikke lot seg forutsi"],
      explanation: "Riktig er at også konstativer utfører handlinger: å påstå er selv en illokusjonær handling med egne hell-vilkår. Verbenes antall var aldri argumentet, mottakerens reaksjon hører til det perlokusjonære laget, og sannhetsspørsmålet alene bærer ikke sammenbruddet.",
    },
    {
      question: "Hva sier Austins tredeling om en ytring?",
      options: ["At den utfører tre handlinger samtidig, i tre lag", "At den tilhører én av tre gjensidig utelukkende typer", "At den kan analyseres på tre nivåer i språksystemet", "At den har tre mulige virkninger hos mottakeren"],
      explanation: "Riktig er tre lag i én og samme ytring. Lagene er ikke kategorier ytringer tilhører, og de er ikke nivåer i språksystemet slik fonologi og syntaks er. Bare det siste laget dreier seg om virkning hos mottakeren.",
    },
    {
      question: "Hva er den lokusjonære handlingen?",
      options: ["Å si noe med en bestemt betydning og en bestemt referanse", "Å utføre en handling i og med det å si noe", "Å frambringe en virkning hos den som hører ytringen", "Å velge hvilken setningstype ytringen skal ha"],
      explanation: "Riktig er å produsere en meningsfull ytring med betydning og referanse. Handlingen utført i og med ytringen er den illokusjonære, virkningen hos mottakeren den perlokusjonære, og valg av setningstype er ett av mange trekk, ikke selve laget.",
    },
    {
      question: "Hva er illokusjonær kraft?",
      options: ["Hva ytringen teller som i kraft av konvensjon", "Hvor overbevisende ytringen er for mottakeren", "Hvilken proposisjon ytringen uttrykker", "Hvor sterkt taleren mener det hun sier"],
      explanation: "Riktig er hva ytringen teller som — advarsel, løfte, ordre. Overbevisningskraft er en perlokusjonær virkning, proposisjonen er innholdet og ikke kraften, og talerens overbevisning hører til oppriktighetsvilkåret.",
    },
    {
      question: "Hva er en perlokusjonær effekt?",
      options: ["Virkningen ytringen faktisk har på mottakeren", "Handlingen ytringen teller som i språksamfunnet", "Den betydningen ordene har uavhengig av situasjon", "Det vilkåret som avgjør om handlingen er utført"],
      explanation: "Riktig er virkningen hos mottakeren, som kan utebli uten at handlingen er mislykket. Hva ytringen teller som er den illokusjonære kraften, kontekstuavhengig betydning hører til det lokusjonære laget, og vilkårene for utførelse er hell-vilkårene.",
    },
    {
      question: "En advarsel blir ikke tatt til følge. Hva følger av det?",
      options: ["Advarselen er gitt like fullt, siden kraften er konvensjonell", "Advarselen er ikke gitt, siden virkningen uteble", "Ytringen var en konstativ og ikke en advarsel", "Ytringen mangler kraftindikator og har derfor ingen kraft"],
      explanation: "Riktig er at advarselen er gitt: illokusjonær kraft er avgjort i og med ytringen. At virkningen uteblir gjelder bare det perlokusjonære laget, og en ytring uten kraftindikator kan ha kraft likevel — den leses da av situasjonen.",
    },
    {
      question: "Hva er den underliggende forskjellen mellom illokusjon og perlokusjon?",
      options: ["Illokusjon virker gjennom konvensjon, perlokusjon gjennom årsak", "Illokusjon virker gjennom årsak, perlokusjon gjennom konvensjon", "Illokusjon gjelder skrift, perlokusjon gjelder tale", "Illokusjon gjelder form, perlokusjon gjelder betydning"],
      explanation: "Riktig er at kraften hviler på konvensjon mens virkningen hviler på årsak og virkning hos mottakeren. Den omvendte formuleringen er nettopp den klassiske forvekslingen, og skillet har ingenting med skrift, tale, form eller betydning å gjøre.",
    },
    {
      question: "Hva er en kraftindikator?",
      options: ["Et trekk ved ytringen som viser hvilken illokusjonær kraft den har", "Et trekk ved situasjonen som avgjør om handlingen lykkes", "Et mål på hvor stor virkning ytringen har på mottakeren", "Et verb som beskriver en handling taleren har utført før"],
      explanation: "Riktig er trekket som viser kraften: setningstype, intonasjon, partikler eller det performative verbet. Situasjonstrekk som avgjør utfallet er hell-vilkår, virkningens størrelse er perlokusjonær, og et verb i preteritum beskriver i stedet for å utføre.",
    },
    {
      question: "Hvem innførte betegnelsen kraftindikator (IFID)?",
      options: ["Searle", "Austin", "Grice", "Brown og Levinson"],
      explanation: "Riktig er Searle, som systematiserte talehandlingsteorien etter Austin. Austin eier tredelingen og hell-vilkårskatalogen, Grice eier samarbeidsprinsippet, og Brown og Levinson eier høflighetsteorien.",
    },
    {
      question: "«Kan du sende meg saltet?» har interrogativ form, men fungerer som en anmodning. Hva viser det?",
      options: ["At setningstypen er en indikator, men ikke avgjør kraften", "At setningstypen alltid avgjør hvilken illokusjonær kraft ytringen har", "At ytringen mangler enhver illokusjonær kraft i det hele tatt", "At ytringen er en konstativ med en perlokusjonær bivirkning"],
      explanation: "Riktig er at formen bare er en indikator; kraften leses av situasjonen. Ville formen avgjort, måtte ytringen vært et spørsmål om evne. Ytringen har tydelig kraft, og den er en anmodning, ikke en beskrivelse med bivirkning.",
    },
    {
      question: "Hva er forholdet mellom kraft og innhold i en ytring?",
      options: ["Samme innhold kan bæres av flere ulike krefter", "Samme kraft kan bare bære ett bestemt innhold", "Kraften følger direkte av innholdet i proposisjonen", "Innholdet bestemmes av virkningen ytringen får"],
      explanation: "Riktig er at innholdet kan holdes konstant mens kraften varierer: påstand, spørsmål og ordre om at du lukker vinduet. En kraft kan brukes på utallige innhold, kraften følger ikke av proposisjonen, og virkningen bestemmer ingen av delene.",
    },
    {
      question: "Hvilket av disse er en illokusjonær handling og ikke en perlokusjonær?",
      options: ["Å be om regningen", "Å overbevise juryen", "Å skremme naboen", "Å få tilhørerne til å le"],
      explanation: "Riktig er å be om regningen: anmodningen er framsatt i og med ytringen. De tre andre beskriver endringer hos en annen person, og de kan utebli uten at taleren har gjort noe galt — det er kjennemerket på perlokusjonære virkninger.",
    },
  ],
  'ling1100-9-2': [
    {
      question: "Hvor mange kategorier deler Searle illokusjonære handlinger inn i?",
      options: ["Fem", "Fire", "Sju", "Tre"],
      explanation: "Riktig er fem: assertiver, direktiver, kommissiver, ekspressiver og deklarasjoner. Fire er tallet man får når deklarasjonene glemmes, tre er Austins lag i tredelingen, og sju er antallet egenskaper Huang tilskriver implikaturer.",
    },
    {
      question: "Hva er tilpasningsretning?",
      options: ["Spørsmålet om hvilken vei det skal stemme mellom ord og verden", "Spørsmålet om hvor sterkt taleren forplikter seg til innholdet", "Spørsmålet om hvem av partene som har mest makt i situasjonen", "Spørsmålet om ytringen er direkte eller indirekte framsatt"],
      explanation: "Riktig er hvilken vei det skal stemme: skal ytringen rette seg etter verden, eller verden etter ytringen. Forpliktelsesgrad varierer innenfor en kategori uten å endre retningen, og makt og indirekthet hører til høflighetsteorien.",
    },
    {
      question: "Hvilken tilpasningsretning har assertiver?",
      options: ["Ord til verden", "Verden til ord", "Ingen retning", "Begge retninger samtidig"],
      explanation: "Riktig er ord til verden: stemmer ikke påstanden, er det ytringen som må rettes. Verden til ord gjelder direktiver og kommissiver, ingen retning gjelder ekspressiver, og begge retninger gjelder deklarasjoner.",
    },
    {
      question: "Hva skiller direktiver fra kommissiver?",
      options: ["Hvem som skal utføre handlingen", "Hvilken tilpasningsretning ytringen har", "Om ytringen er sann eller usann", "Om taleren har myndighet i situasjonen"],
      explanation: "Riktig er hvem som utfører: mottakeren ved direktiver, taleren ved kommissiver. De to deler tilpasningsretning, verden til ord, og skilles derfor ikke av den. Sannhetsverdi og myndighet er irrelevante for dette skillet.",
    },
    {
      question: "Hvilken kategori tilhører ytringen «Jeg garanterer at pakken kommer i morgen»?",
      options: ["Kommissiv", "Direktiv", "Assertiv", "Deklarasjon"],
      explanation: "Riktig er kommissiv: taleren forplikter seg til noe hun selv skal sørge for. En direktiv ville lagt handlingen på mottakeren, en assertiv ville bare gått god for et faktum, og en deklarasjon ville krevd myndighet til å endre virkeligheten.",
    },
    {
      question: "Hvorfor har ekspressiver ingen tilpasningsretning?",
      options: ["Fordi innholdet er forutsatt i stedet for påstått eller krevd", "Fordi de aldri handler om hendelser som har funnet sted i verden", "Fordi de utføres uten at mottakeren trenger å være til stede i rommet", "Fordi de alltid inneholder et performativt verb i presens"],
      explanation: "Riktig er at innholdet er presupponert: «Jeg beklager at jeg kom for sent» tar det for gitt at jeg kom for sent. Ekspressiver handler nettopp om noe som har skjedd, de er rettet mot en mottaker, og verbformen er ikke det som avgjør retningen.",
    },
    {
      question: "Hva kjennetegner en deklarasjon?",
      options: ["Den endrer virkeligheten i og med at den sies", "Den beskriver en endring som nettopp har funnet sted", "Den forplikter taleren til en framtidig handling", "Den uttrykker talerens holdning til en tilstand"],
      explanation: "Riktig er at ytringen gjør innholdet sant, forutsatt myndighet og institusjon. Å beskrive en endring er en assertiv, å forplikte seg er en kommissiv, og å uttrykke en holdning er en ekspressiv.",
    },
    {
      question: "Hva er tilpasningsretningen til deklarasjoner?",
      options: ["Begge retninger samtidig", "Bare ord til verden, slik som ved assertiver", "Bare verden til ord, slik som ved direktiver", "Ingen retning i det hele tatt"],
      explanation: "Riktig er begge: ordene blir sanne fordi de sies, og verden endres fordi ordene sies. Ingen annen kategori har den egenskapen — enkeltretningene tilhører assertiver og direktiver, og fravær av retning tilhører ekspressiver.",
    },
    {
      question: "Hvilket spørsmål skal stilles først i framgangsmåten for å klassifisere en ytring etter Searle?",
      options: ["Om ytringen endrer virkeligheten i kraft av talerens myndighet", "Om ytringen har tilpasningsretningen ord til verden eller verden til ord", "Om det er taleren eller mottakeren som skal utføre selve handlingen", "Om ytringen er direkte eller indirekte framsatt"],
      explanation: "Riktig er myndighetsspørsmålet, som skiller ut deklarasjonene. De har begge tilpasningsretninger og ville blitt feilklassifisert om retningsspørsmålet kom først. Spørsmålet om hvem som utfører kommer sist, og direktheten avgjør ikke kategorien.",
    },
    {
      question: "Hva var Searles innvending mot Austins framgangsmåte?",
      options: ["At Austin klassifiserte verb i stedet for handlinger", "At Austin overså at også vanlige påstander utfører handlinger", "At Austin ikke skilte mellom taler og mottaker", "At Austin ikke tok hensyn til høflighet i vanlige samtaler"],
      explanation: "Riktig er at et ordforråd er tilfeldig og varierer mellom språk; kriteriet må ligge i handlingen selv. Austin oppdaget nettopp at ytringer utfører handlinger, og de to andre innvendingene er ikke Searles.",
    },
    {
      question: "Hva er en indirekte talehandling?",
      options: ["En ytring der taleren utfører én handling ved å utføre en annen", "En ytring som er rettet til en tredjeperson i rommet i stedet for til mottakeren", "En ytring der handlingen først får virkning et stykke ut i samtalen", "En ytring som er framsatt uten noe performativt verb i setningen"],
      explanation: "Riktig er at én handling utføres gjennom en annen — «Kan du sende saltet?» er formelt et spørsmål og reelt en anmodning. Mottakerkrets og forsinket virkning er irrelevante, og en ytring uten performativt verb er bare en implisitt performativ.",
    },
    {
      question: "Hvilken kraft avgjør kategorien til en indirekte talehandling?",
      options: ["Den primære kraften", "Den bokstavelige kraften", "Den perlokusjonære effekten", "Setningstypen"],
      explanation: "Riktig er den primære — den handlingen taleren faktisk utfører. Den bokstavelige er den formen tilsier, den perlokusjonære effekten er virkningen hos mottakeren, og setningstypen er bare en kraftindikator.",
    },
    {
      question: "Hva er positivt ansikt?",
      options: ["Ønsket om å bli verdsatt og godtatt av andre", "Ønsket om å slippe å bli pålagt noe av andre", "Evnen til å opptre høflig i en vanskelig situasjon", "Den anseelsen en taler har i kraft av sin stilling"],
      explanation: "Riktig er ønsket om anerkjennelse. Ønsket om å slippe pålegg er det negative ansiktet, høflighet er strategiene man bruker for å verne ansikt, og ansikt er ikke det samme som formell posisjon.",
    },
    {
      question: "Hvilket ansikt truer en anmodning?",
      options: ["Mottakerens negative ansikt", "Mottakerens positive ansikt", "Talerens positive ansikt", "Ingen av delene, dersom den er høflig"],
      explanation: "Riktig er mottakerens negative ansikt: anmodningen pålegger henne noe og innskrenker handlefriheten. Kritikk rammer det positive ansiktet, og en anmodning er ansiktstruende også når den er vennlig framsatt — det er derfor den pakkes inn.",
    },
    {
      question: "Hvilke av Searles kategorier er iboende ansiktstruende?",
      options: ["Direktiver og kommissiver", "Assertiver og deklarasjoner", "Ekspressiver og assertiver", "Bare deklarasjoner"],
      explanation: "Riktig er direktiver, som truer mottakerens negative ansikt, og kommissiver, som binder taleren selv. Assertiver blir først truende når innholdet er kritisk, og deklarasjoners trussel kommer av innholdet og maktforholdet.",
    },
    {
      question: "Hvilket ansikt truer en takk, og hos hvem?",
      options: ["Talerens negative ansikt, fordi den erkjenner en gjeld", "Mottakerens negative ansikt, fordi den krever et svar", "Mottakerens positive ansikt, fordi den framhever en forskjell", "Ingen — en takk er den eneste handlingen uten ansiktstrussel"],
      explanation: "Riktig er talerens negative ansikt: å takke er å erkjenne at man står i gjeld, og gjeld binder. En takk pleier tvert imot mottakerens positive ansikt, og det finnes ingen kategori som er helt fri for ansiktsvirkning.",
    },
    {
      question: "Hvem eier begrepene ansikt, FTA og høflighetsstrategier i dette emnet?",
      options: ["Brown og Levinson", "Searle", "Grice", "Sperber og Wilson"],
      explanation: "Riktig er Brown og Levinson, som bygger videre på et sosiologisk ansiktsbegrep. Searle eier de fem kategoriene, Grice samarbeidsprinsippet, og Sperber og Wilson relevansteorien.",
    },
    {
      question: "Hvilke tre faktorer avgjør hvor truende en handling er, ifølge Brown og Levinson?",
      options: ["Sosial avstand, maktforhold og pålegg", "Alder, kjønn og utdanningsnivå hos partene", "Tonefall, ordvalg og setningstype", "Kraft, innhold og virkning"],
      explanation: "Riktig er sosial avstand, maktforhold og hvor stort pålegget regnes som. Alder, kjønn og utdanningsnivå er egenskaper som ikke inngår i modellen, tonefall og ordvalg er resultatet av strategivalget, og kraft, innhold og virkning er begreper fra talehandlingsteorien, ikke fra høflighetsteorien.",
    },
    {
      question: "Hvorfor framsettes anmodninger så ofte indirekte?",
      options: ["Fordi den indirekte formen demper trusselen mot mottakerens ansikt", "Fordi den indirekte formen gjør ytringen raskere å oppfatte for mottakeren", "Fordi språket mangler direkte former for anmodninger", "Fordi den indirekte formen endrer kategorien fra direktiv til assertiv"],
      explanation: "Riktig er dempingen: spørsmålsformen gir mottakeren en formell åpning for å si nei. Indirekte former er tvert imot mer krevende å tolke, imperativen finnes i språket, og kategorien avgjøres av den primære kraften og forblir en direktiv.",
    },
    {
      question: "Ytringen «Jeg beklager at jeg glemte møtet» — hvilken kategori og hvilken retning?",
      options: ["Ekspressiv, ingen tilpasningsretning", "Assertiv, retning ord til verden", "Kommissiv, med retningen verden til ord", "Deklarasjon, begge retninger"],
      explanation: "Riktig er ekspressiv uten tilpasningsretning: at møtet ble glemt, er forutsatt og ikke påstått, og ytringen uttrykker anger. En assertiv ville påstått innholdet, en kommissiv ville bundet taleren til en framtidig handling, og en deklarasjon ville krevd myndighet.",
    },
  ],
  'ling1100-9-3': [
    {
      question: "Hva består et fullstendig A1-svar av?",
      options: ["Definisjon, komplett inndeling, mekanismen forklart og egne eksempler", "Definisjon, argumenter for og mot, og en begrunnet stillingtaken til slutt", "En innledning, en hoveddel med tre avsnitt og en oppsummerende konklusjon", "En presis fasit, testen gjennomført og et kontrasttilfelle til slutt"],
      explanation: "Riktig er de fire delene definisjon, inndeling, mekanisme og egne eksempler. Argumenter for og mot hører til fri drøfting, den formelle tredelingen hører til fasitsjangeren, og en ren formmal sier ingenting om innholdskravene.",
    },
    {
      question: "I hvilken rekkefølge skal en talehandlingsoppgave disponeres?",
      options: ["Begrep og eier, definisjon, inndeling med kriterium, egne eksempler", "Egne eksempler, definisjon, inndeling, og eieren helt til slutt", "Inndeling, egne eksempler, definisjon, og kriteriet der det passer", "Definisjon, drøfting av innvendinger, konklusjon, egne eksempler"],
      explanation: "Riktig er at eksemplene kommer sist, etter at begrepet og kriteriet er på plass. Åpner svaret med eksempler, leses det som en gjenfortelling, og drøfting av innvendinger hører til en annen sjanger.",
    },
    {
      question: "Hva kjennetegner et godt eget eksempel?",
      options: ["At det entydig viser trekket kategorien er definert ved", "At det er hentet fra en situasjon leseren kjenner godt fra før", "At det er så kort som mulig og uten opplysninger om situasjonen", "At det kan plasseres i flere kategorier og dermed viser bredde"],
      explanation: "Riktig er entydigheten: eksempelet skal ikke passe like godt i nabokategorien. Kjenthet er irrelevant, situasjonen må ofte med, og et eksempel som passer flere steder viser nettopp ingenting.",
    },
    {
      question: "Hva består en momentliste av?",
      options: ["Må-punkter, pluss-punkter og feller", "Fasit, mellomregning og kontrollsvar", "Innledning, hoveddel og konklusjon", "Definisjon, taksonomi og teoretiker"],
      explanation: "Riktig er de tre delene må-punkter, pluss-punkter og feller. Fasit med mellomregning hører til de formelle sjangrene, og de to andre alternativene beskriver deler av et svar, ikke vurderingsformen.",
    },
    {
      question: "Hva er kontrolltesten for om noe er illokusjonær kraft eller perlokusjonær effekt?",
      options: ["Om det kan utebli uten at taleren har gjort noe galt", "Om det står uttrykt med et performativt verb i ytringen", "Om mottakeren er til stede i situasjonen eller ikke", "Om ytringen har imperativ eller deklarativ setningstype"],
      explanation: "Riktig er uteblivelsestesten: kan det utebli, er det en effekt. Performative verb finnes bare i noen ytringer, mottakerens nærvær er irrelevant, og setningstypen er bare en kraftindikator.",
    },
    {
      question: "Hvilket spørsmål kommer først i kontrolltesten for Searle-kategori?",
      options: ["Om ytringen endrer virkeligheten i kraft av talerens myndighet", "Om handlingen skal utføres av taleren eller av mottakeren", "Om ytringen har et performativt verb i første person presens", "Om innholdet i ytringen er sant eller usant i situasjonen"],
      explanation: "Riktig er myndighetsspørsmålet, som skiller ut deklarasjonene før retningsspørsmålet stilles. Deklarasjoner har begge retninger og ville ellers blitt feilklassifisert. Verbform og sannhetsverdi avgjør ikke kategorien.",
    },
    {
      question: "Hvor mange av de 12 settene i arkivet prøver talehandlinger?",
      options: ["Ti", "Seks", "Åtte", "Tolv"],
      explanation: "Riktig er ti av tolv, som gjør talehandlinger til det hyppigste temaet i emnet. Åtte er tallet for Grice og implikatur, seks for logikk og sannhetsbetingelser, og ingen tema er prøvd i samtlige sett.",
    },
    {
      question: "Hva er den vanligste mangelen i redegjørelsessvar om talehandlinger?",
      options: ["At egne eksempler mangler", "At definisjonen er for lang og for detaljert", "At teoretikerne blir navngitt for tidlig i svaret", "At svaret bruker engelske fagtermer i tillegg til norske"],
      explanation: "Riktig er manglende egne eksempler, som registeret fører som feil #10. En fyldig definisjon er en styrke, teoretikeren bør navngis tidlig, og engelske fagtermer er ønsket ved siden av de norske.",
    },
    {
      question: "Hva er riktig å skrive om en advarsel som ikke blir tatt til følge?",
      options: ["Advarselen er gitt like fullt, siden kraften er konvensjonell", "Advarselen er mislykket, siden den perlokusjonære effekten uteble", "Advarselen var et feilslag, siden hell-vilkårene ikke var oppfylt", "Advarselen var i realiteten en assertiv uten illokusjonær kraft"],
      explanation: "Riktig er at kraften er avgjort i og med ytringen. Uteblitt virkning gjelder bare det perlokusjonære laget, et feilslag krever brudd på et forberedende vilkår, og enhver ytring har illokusjonær kraft.",
    },
    {
      question: "Hvor mye av de tjue minuttene per besvarelse bør gå til disposisjon?",
      options: ["To til tre minutter i stikkord før skrivingen begynner", "Omtrent halvparten, siden strukturen er det som vurderes", "Ingenting — disposisjonen skrives inn i selve besvarelsen", "Ti minutter, slik at hele svaret er ferdig tenkt på forhånd"],
      explanation: "Riktig er to til tre minutter. Halvparten eller ti minutter ville spist av skrivetiden, og å hoppe over disposisjonen er nettopp det som gir svar med manglende deler.",
    },
    {
      question: "Hva bør du kontrollere de siste minuttene av en talehandlingsoppgave?",
      options: ["Antall kategorier, antall eksempler og antall instruksjonsverb", "Rettskriving, tegnsetting og lengden på hvert avsnitt", "Om konklusjonen er tilstrekkelig forsiktig formulert", "Om teoretikernes fødselsår og verk er korrekt oppgitt"],
      explanation: "Riktig er de tre tellingene, som fanger de vanligste manglene. Språkvask er sekundært, forsiktige konklusjoner er ikke et krav i denne sjangeren, og årstall skal du uansett ikke oppgi med mindre du er sikker.",
    },
    {
      question: "Hva er problemet med å bruke bokas egne eksempler på eksamen?",
      options: ["De viser at du husker boka, ikke at du kan bruke apparatet", "De er beskyttet av opphavsrett og kan ikke gjengis i en besvarelse", "De er som regel for kompliserte til å forklares på kort tid", "De dekker bare noen av kategoriene og gir derfor ufullstendige svar"],
      explanation: "Riktig er at et gjenbrukt eksempel ikke viser at du kan konstruere ett selv — og det er nettopp det oppgaven tester. De øvrige innvendingene er ikke grunnen til kravet om egne eksempler.",
    },
    {
      question: "En kandidat skriver: «Ytringen er en direktiv.» Hva mangler?",
      options: ["Begrunnelsen: retningen og hvem som skal utføre handlingen", "Den engelske termen for kategorien i parentes etter navnet", "En henvisning til hvilket kapittel kategorien er hentet fra", "En vurdering av om Searles inndeling er treffende her"],
      explanation: "Riktig er begrunnelsen — kategorinavnet alene er feil #1. Den engelske termen er et pluss, kapittelhenvisninger hører ikke hjemme i en eksamensbesvarelse, og oppgaven ber ikke om en vurdering av teorien.",
    },
    {
      question: "Hva skiller en redegjørelsesoppgave fra en drøftingsoppgave?",
      options: ["Redegjørelsen ber om presis framstilling, ikke om stillingtaken", "Redegjørelsen er kortere og krever færre egne eksempler", "Redegjørelsen krever at du siterer pensumlitteraturen direkte", "Redegjørelsen har ett riktig svar, drøftingen har flere mulige"],
      explanation: "Riktig er at instruksjonsverbet «gjør rede for» ber om framstilling, ikke om standpunkt. Lengden er den samme, sitater er ikke et krav, og en redegjørelse kan skrives godt på flere måter.",
    },
    {
      question: "Hva er det svakeste punktet i et A3-svar som sammenligner to teoretikere?",
      options: ["At teoretikerne behandles hver for seg i to atskilte bolker", "At svaret navngir aksene før sammenligningen begynner", "At svaret konkluderer skarpt i stedet for å ta forbehold", "At svaret bruker egne eksempler i tillegg til teorien"],
      explanation: "Riktig er to parallelle monologer, som er den vanligste formsvakheten i sjangeren. Å navngi aksene er nettopp det som løser problemet, en skarp konklusjon er tillatt, og egne eksempler er alltid et pluss.",
    },
    {
      question: "Hvilken kobling er det naturlig å trekke inn når du forklarer indirekte talehandlinger?",
      options: ["Grices samarbeidsprinsipp, som forklarer utregningen", "Vendlers situasjonstyper, som forklarer verbets aspekt", "Russells kvantoranalyse, som forklarer bestemte beskrivelser", "Berlin og Kays fargetermer, som forklarer universalitet"],
      explanation: "Riktig er Grice: mottakeren regner ut den primære kraften ut fra antakelsen om at taleren samarbeider. De tre andre hører til helt andre deler av pensum og har ingen forbindelse til indirekte talehandlinger.",
    },
    {
      question: "Hva slags løsninger har oppgavene i dette kapitlet?",
      options: ["Momentlister skrevet av oss, ikke offisielle fasiter", "Offisielle løsningsforslag hentet fra emnets eget arkiv", "Fasitsvar med ett riktig alternativ per deloppgave", "Vurderte kandidatbesvarelser med karakter oppgitt"],
      explanation: "Riktig er nyskrevne momentlister. LING1100 har ingen publiserte løsningsforslag og ingen fasit, og boka gjengir verken karakterer eller ekte besvarelser.",
    },
    {
      question: "Hvilken feil gjør en kandidat som svarer på to av tre deloppgaver?",
      options: ["Feil #9 — å svare på feil antall deler", "Feil #5 — å liste i stedet for å forklare", "Feil #2 — å bytte om parvise begreper", "Feil #10 — å utelate egne eksempler"],
      explanation: "Riktig er feil #9, som gjelder antall besvarte deler og valgoppgaver. De tre andre kodene beskriver mangler i innholdet av det som faktisk er besvart.",
    },
  ],
};

export default quizData_ling1100;
