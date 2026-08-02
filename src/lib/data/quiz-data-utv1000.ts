import type { QuizQuestion } from './quiz-data';

const quizData_utv1000: Record<string, QuizQuestion[]> = {
  'utv1000-0-1': [
    {
      question: "Hvor stor andel av karakteren teller Del I (Oppgave A) i dagens eksamensform i UTV1000?",
      options: ["60 prosent", "40 prosent, siden Del II har flest oppgaver", "50 prosent, likt fordelt mellom delene", "70 prosent, som i den tidligere emneoppgaveordningen"],
      explanation: "Del I teller 60 prosent og Del II 40 prosent i formen som har vært brukt fra 2021. Fordelingen 50/50 og fordelingen der Del II teller mest, tester om du forveksler antall oppgaver med vekt: Del II har flere oppgaver, men teller mindre. Tallet 70 hører til en intern uklarhet i eldre materiale og er ikke gjeldende ordning.",
    },
    {
      question: "Hva skjer med karakteren hvis en kandidat ikke besvarer Oppgave A i det hele tatt?",
      options: ["Besvarelsen får automatisk F, uavhengig av kvaliteten på kortsvarene", "Karakteren settes ut fra kortsvarene alene og trekkes ned", "Kandidaten får bestått dersom kortsvarene ligger på B-nivå eller bedre, siden Del II da kompenserer", "Delen kan tas opp igjen neste semester og telles med da"],
      explanation: "Del I er obligatorisk: manglende svar gir automatisk F. Alternativet om at kortsvarene alene kan bære karakteren, tester nettopp den forvekslingen mellom vekting og bestått-krav som gjør regelen så lett å overse. Begge deler må dessuten bestås i samme semester, så en bestått del kan ikke spares.",
    },
    {
      question: "Hvor mange av de tre kortsvarsoppgavene i Del II skal du besvare?",
      options: ["To", "Alle tre, siden de til sammen utgjør 40 prosent", "Én, den du kan best", "Det står oppgitt i hvert enkelt sett og varierer"],
      explanation: "Du velger og besvarer nøyaktig to av de tre kortsvarene. Å svare på alle tre er ikke en fordel og stjeler tid fra Oppgave A. Å svare på bare ett gir vesentlig trekk, siden manglende svar på ett kortsvar teller mot deg.",
    },
    {
      question: "Hva er de tre leddene i Oppgave A, i riktig rekkefølge?",
      options: ["Redegjør for teoriene, drøft dem, argumenter for relevans i dag", "Definer begrepene, gi eksempler, konkluder", "Presenter caset, forankre i pensum, gi anbefalinger", "Beskriv konteksten, sammenlign teoriene, oppsummer"],
      explanation: "Rekkefølgen er i redegjør, ii drøft og iii argumenter for relevans i dag. Alternativet med case og anbefalinger beskriver den avviklede emneoppgaven, ikke Oppgave A. De to andre ligner, men mangler det avgjørende siste leddet der du skal ta et eget begrunnet standpunkt.",
    },
    {
      question: "Hvilken av de fire vurderingsaksene omtales som A-markøren i UTV1000?",
      options: ["Akse 3 — kritisk blikk og selvstendighet", "Akse 1 — drøfting fremfor gjengivelse", "Akse 2 — presise definisjoner av kjernebegrepene", "Akse 4 — relevante eksempler og pensumforankring"],
      explanation: "Akse 3 er A-markøren: at kandidaten mener noe begrunnet, særlig om relevans i dag, og behandler utvikling som verdiladet. Akse 1 er den viktigste aksen i den forstand at et refererende svar stopper på C, men den skiller ikke A fra B. Akse 2 er grunnkravet, og Akse 4 løfter uten å avgjøre toppen.",
    },
    {
      question: "Hva er den hyppigste årsaken til at en besvarelse havner under C ifølge de ni sensorveiledningene?",
      options: ["Manglende eller upresise definisjoner av kjernebegrepene", "For lite stoff, altså at svaret er for kort", "Feil i årstall og navn på teoretikere", "Manglende referanser til pensumlitteraturen"],
      explanation: "Upresise eller manglende definisjoner av de begrepene som står i kjernen av svaret, er den hyppigste årsaken til å havne under C. Lengde er ikke et selvstendig kriterium, og pensumreferanser omtales som en styrke i kortsvar, ikke som et absolutt krav. Faktafeil trekker ned, men er ikke den gjennomgående årsaken.",
    },
    {
      question: "Hvor mange oppgavesett og sensorveiledninger er denne boka kalibrert mot?",
      options: ["19 oppgavesett fordelt på 16 eksamensterminer, og 9 sensorveiledninger", "16 oppgavesett og 16 sensorveiledninger, ett par per termin", "19 oppgavesett og 19 sensorveiledninger", "9 oppgavesett og 9 sensorveiledninger fra perioden 2017 til 2025, altså ett sett per veiledning"],
      explanation: "Grunnlaget er 19 oppgavesett fordelt på 16 eksamensterminer fra 2010 til 2025, og 9 publiserte sensorveiledninger fra 2017 til 2025. Antallet sett er høyere enn antallet terminer fordi tre av terminene også hadde en emneoppgaveliste. Det finnes ingen veiledning eldre enn 2017, så tallene 16 og 19 gjelder ikke veiledningene.",
    },
    {
      question: "Hva kjennetegner et typisk C-svar ifølge karakterbeskrivelsen for UTV1000?",
      options: ["Det gjengir stoffet korrekt, men uten tydelig refleksjon eller selvstendighet", "Det inneholder vesentlige faktafeil, men innfrir likevel minimumskravene for å bestå emnet", "Det er for kort til å dekke oppgavens bredde", "Det mangler både redegjørelse og drøfting"],
      explanation: "C beskrives som tilfredsstillende kunnskaper med rimelig begrepsforståelse og en viss evne til resonnering — altså et korrekt, men refererende svar. Vesentlige feil sammen med innfridde minimumskrav er beskrivelsen av E. Et svar som mangler både redegjørelse og drøfting, ligger under C.",
    },
    {
      question: "Hvorfor bør Oppgave A skrives før kortsvarene, selv om kortsvarene ser lettere ut?",
      options: ["Fordi et ubesvart Del I gir automatisk stryk, uansett hvor gode kortsvarene er", "Fordi Oppgave A alltid rettes av en annen sensor enn Del II", "Fordi kortsvarene ikke kan besvares før Oppgave A er levert i Inspera", "Fordi Oppgave A er lettere når du er uthvilt tidlig i eksamenstiden"],
      explanation: "Begrunnelsen er strykregelen: manglende svar på Oppgave A gir F uavhengig av Del II. Vektingen på 60 prosent er et tilleggsargument, ikke hovedgrunnen. Eksamen har ingen teknisk sperre mellom delene, og sensorordningen har ingenting med rekkefølgen å gjøre.",
    },
    {
      question: "Hva er det eneste tillatte hjelpemidlet på eksamen i UTV1000?",
      options: ["Kontrollert ordbok", "Pensumbøkene og egne notater", "Ingen hjelpemidler overhodet", "Alle trykte hjelpemidler, men ingen digitale"],
      explanation: "Eksamen er en fire timers digital skoleeksamen i Inspera der kontrollert ordbok er eneste hjelpemiddel. Pensumbøker og notater er ikke tillatt, og det er heller ikke riktig at ingen hjelpemidler er tillatt — ordboken er det.",
    },
    {
      question: "Hva bestiller instruksjonsverbet «sammenlign» i en oppgave?",
      options: ["To til fire eksplisitte akser der begge ledd behandles på hver akse, med belegg for begge", "En grundig redegjørelse for hvert av de to leddene etter hverandre, med like mye plass til begge", "Et begrunnet standpunkt om hvilket av leddene som er best", "En definisjon av begge begrepene, fulgt av et eksempel"],
      explanation: "Sammenligningen ligger i relasjonen: hver akse må behandle begge ledd med belegg. To parallelle redegjørelser er den vanligste feilen i denne sjangeren. Å rangere leddene er ikke bestilt med mindre oppgaven ber om det, og definisjoner er en forutsetning, ikke selve svaret.",
    },
    {
      question: "Hva forteller instruksjonsverbet «drøft påstanden at …» om hva svaret må gjøre?",
      options: ["Påstanden skal prøves: både det som holder og det som må nyanseres, med en begrunnet landing", "Påstanden skal belegges med så mange eksempler som mulig", "Påstanden skal avvises, siden den er formulert som en provokasjon", "Påstanden skal gjengis med pensums egen behandling av den"],
      explanation: "Å prøve påstanden betyr å vise hva som taler for og hva som må nyanseres, og deretter lande begrunnet. Å bare belegge påstanden er å svare på halve oppgaven, og å avvise den på forhånd er like ensidig. Standpunktet er fritt; det er begrunnelsen som vurderes.",
    },
    {
      question: "Vurderingsordningen i UTV1000 har skiftet flere ganger. Hvilken rekkefølge er riktig?",
      options: ["Ren skoleeksamen, så emneoppgave i tillegg, så hjemmeeksamen, så dagens todelte skoleeksamen", "Hjemmeeksamen først, så emneoppgave i tillegg, så ren skoleeksamen, og til slutt dagens todelte form", "Todelt skoleeksamen hele veien, med bare mindre justeringer i vektingen", "Emneoppgave alene, så skoleeksamen alene, så begge deler samtidig"],
      explanation: "Rekkefølgen er ren skoleeksamen fram til 2016, emneoppgave i tillegg fra 2015 til 2019, hjemmeeksamen i 2020, og dagens todelte skoleeksamen fra 2021. At formen har vært stabil hele veien, er nettopp det den ikke har vært — men temaene har vært stabile, og det er derfor eldre sett fortsatt er nyttige.",
    },
    {
      question: "Hvorfor undervurderer temafrekvenstabellen hvor ofte utviklingsteoriene er testet?",
      options: ["Fordi den bare teller oppgaver der temaet har sitt eget spørsmål, ikke der det er innbakt i Oppgave A", "Fordi den bare dekker settene fra 2021 og framover", "Fordi emneoppgavelistene er holdt utenfor tellingen", "Fordi et delspørsmål som kombinerer to temaer bare telles i det ene av dem, og altså ikke i begge kategoriene"],
      explanation: "Tabellen teller egne spørsmål, mens utviklingsteoriene i tillegg er innbakt i Oppgave A i alle fem settene i dagens form. Tabellen dekker alle 19 settene, ikke bare de nyeste, og emneoppgavelistene er slått sammen med skoleeksamenssettene. Et delspørsmål som kombinerer to temaer, telles i begge — ikke i det ene.",
    },
  ],
  'utv1000-0-2': [
    {
      question: "Hva bestiller ledd i i Oppgave A?",
      options: ["Presise definisjoner, hovedteoretikere, hva teorien var et svar på, og synet på fattigdom og vei til utvikling", "En sammenligning av teoriene langs to til fire eksplisitte akser, der begge ledd behandles med belegg på hver akse", "Et begrunnet standpunkt om teorienes relevans i dagens verden", "En gjennomgang av den historiske konteksten teoriene ble til i"],
      explanation: "Ledd i er redegjørelsen, og de fire punktene er malen for den. Sammenligning hører til ledd ii, standpunkt om relevans til ledd iii. Historisk kontekst kan være tema for ledd ii, men i ledd i inngår den bare som «hva teorien var et svar på».",
    },
    {
      question: "Hvilket ledd i Oppgave A er A-marginen først og fremst knyttet til?",
      options: ["Ledd iii, der du argumenterer for relevans i dag", "Ledd i, der definisjonene skal være presise", "Ledd ii, der teoriene settes opp mot hverandre", "Innledningen, der oppgaven avgrenses"],
      explanation: "Ledd iii måles mot Akse 3, kritisk blikk og selvstendighet, som er A-markøren. Ledd i er grunnkravet og tar deg til C. Ledd ii avgjør om du kommer over C, men skiller sjeldnere B fra A. Innledningen rammer inn og teller lite alene.",
    },
    {
      question: "Hva er testen på om en teoridefinisjon er presis nok?",
      options: ["Om setningen også kunne passet på en annen av utviklingsteoriene", "Om setningen er lengre enn tre linjer og dekker teoriens historikk", "Om teoretikerens navn og et årstall står i setningen", "Om setningen er formulert med pensums egne ord"],
      explanation: "En definisjon er presis når den utelukker nabo-teorien, altså når den plasserer årsak, aktør og løsning. Lengde er ikke et kriterium, og en definisjon skal formuleres med egne ord. Navn hører hjemme i redegjørelsen, men gjør ikke definisjonen presis i seg selv.",
    },
    {
      question: "Hva kjennetegner et avsnitt som faktisk drøfter, i motsetning til å redegjøre?",
      options: ["Det behandler to størrelser i samme avsnitt og lar forholdet mellom dem få en konsekvens", "Det er lengre og mer detaljert enn et refererende avsnitt, og dekker flere sider av samme sak", "Det inneholder flere pensumreferanser enn et refererende avsnitt", "Det unngår å ta stilling, slik at fremstillingen blir balansert"],
      explanation: "Drøfting er en relasjon som får en følge, ikke en mengde. Et drøftende avsnitt kan være kortere enn et refererende. Referanser og balanse er andre kvaliteter, og et svar kan være fullt av referanser og likevel bare referere.",
    },
    {
      question: "Hvor mange minutter setter bokas tidsbudsjett av til Oppgave A?",
      options: ["Cirka 130", "Cirka 105, altså ren skrivetid uten disponering og kontroll", "Cirka 80, som er det samme som de to kortsvarene til sammen", "Cirka 160, siden oppgaven teller 60 prosent av karakteren"],
      explanation: "Budsjettet er cirka 130 minutter: 15 til disponering, 105 til skriving og 10 til kontroll. Tallet 105 er bare skrivetiden. 80 minutter er avsatt til de to kortsvarene, og et budsjett på 160 ville ikke etterlatt tid til settlesing og sluttkontroll.",
    },
    {
      question: "En kandidat skriver ledd ii slik: «Moderniseringsteorien mener fattigdom skyldes forhold i landet. Avhengighetsteorien mener den skyldes verdensøkonomien.» Hva mangler?",
      options: ["En konsekvens av forskjellen — hva den plasseringen betyr for ansvar og for hvilken vei ut teoriene peker på", "En presis definisjon av begge teoriene", "Navnene på hovedteoretikerne bak hver teori", "Et årstall som viser når hver av teoriene ble formulert, og en note om hvilken av dem som kom først i faghistorien"],
      explanation: "Forskjellen er riktig identifisert, men den står som to påstander ved siden av hverandre. Drøftingen begynner når forskjellen får en følge. Definisjonene og navnene hører hjemme i ledd i, og årstall er ikke et krav noe sted i Oppgave A.",
    },
    {
      question: "Hva er den viktigste vurderingsaksen ifølge de ni sensorveiledningene?",
      options: ["Akse 1 — drøfting fremfor gjengivelse", "Akse 2 — presise definisjoner av kjernebegrepene", "Akse 4 — relevante eksempler og pensumforankring", "Akse 3 — kritisk blikk og selvstendighet"],
      explanation: "Akse 1 er den mest gjennomgående markøren i hele arkivet: et korrekt, men refererende svar stopper på C uansett bredde. Akse 2 er grunnkravet som avgjør om svaret havner under C, og Akse 3 er A-markøren. Akse 4 løfter, men avgjør ikke alene.",
    },
    {
      question: "Hva er distinksjonen mellom strukturalisme og avhengighetsteori som Oppgave A ofte tester?",
      options: ["At strukturen kan reformeres i den ene, mens avhengigheten er systemisk i den andre", "At den ene handler om handel og bytteforhold, mens den andre handler om bistand og gjeld", "At den ene er latinamerikansk og den andre europeisk", "At den ene er eldre enn den andre og derfor mindre relevant"],
      explanation: "Skillet går mellom en struktur som lar seg reformere, og en avhengighet som er systemisk. Begge tradisjonene har latinamerikanske røtter, så geografi skiller dem ikke. Handel er tema i begge, og alder er ikke en teoretisk distinksjon.",
    },
    {
      question: "Hva gjør et eksempel konkret nok til å telle på Akse 4?",
      options: ["At det har land eller aktør, tid, hvilket begrep det belegger, og hva det viser", "At det er hentet fra pensumlitteraturen og ikke fra nyhetsbildet eller egne erfaringer", "At det er nytt, altså fra de siste årene", "At det gjentas flere ganger i besvarelsen"],
      explanation: "Tre ting må stå der: hva og hvor, hvilket begrep det belegger, og hva eksempelet viser. Egne og nyere eksempler er lov og premieres, så pensumopphav er ikke et krav. Alder og gjentakelse gjør ikke et eksempel sterkere.",
    },
    {
      question: "Hva innebærer det at et standpunkt i ledd iii skal gjelde teoriens forklaringskraft?",
      options: ["At du sier om teorien forklarer verden i dag, ikke hva Norge eller andre bør gjøre politisk", "At du må velge den teorien pensum vurderer høyest", "At du må unngå å ta stilling, og heller veie posisjonene mot hverandre uten å lande på noen av dem", "At du må begrunne standpunktet med hvor gammel teorien er"],
      explanation: "Å ta stilling til forklaringskraft er faglig selvstendighet; å ta stilling til politikk er noe annet. Å unngå å ta stilling er nettopp det leddet ikke ber om. Pensums vurdering er ikke en fasit, og alder er ikke et argument for eller mot relevans.",
    },
    {
      question: "Hva er feil #12 i UTV1000s feilregister?",
      options: ["Uklar disposisjon — svaret mangler innledning, hoveddel og konklusjon", "Manglende eksempler i besvarelsen", "Å blande to teorier med hverandre", "Å behandle utvikling som et nøytralt gode"],
      explanation: "Feil #12 er den uklare disposisjonen. Manglende eksempler er #6, sammenblanding av teorier er #3, og å behandle utvikling som nøytralt gode er #5. Registeret har nøyaktig tolv koder.",
    },
    {
      question: "Hvilken av disse formuleringene beskriver et typisk C-svar i Oppgave A?",
      options: ["Stoffet gjengis korrekt, drøftingen er formelt til stede, men tynn, og relevansleddet er kort og forsiktig", "Definisjonene mangler, og en av teoriene er beskrevet feil", "Teoriene settes opp mot hverandre, og standpunktet i relevansleddet er begrunnet med konkrete, tidfestede eksempler", "Svaret er kortere enn to sider"],
      explanation: "C er det korrekte, men refererende svaret der drøftingen er formelt til stede uten å bite. Manglende definisjoner og feilbeskrevne teorier plasserer under C. Et svar med reell drøfting og begrunnet standpunkt ligger på B eller A. Lengde er ikke et kriterium.",
    },
    {
      question: "Hvorfor anbefaler boka å velge de teoriene du kan definere presist, framfor dem du synes er mest interessante?",
      options: ["Fordi en presis definisjon gir deg både ledd i og råstoffet til drøftingen i ledd ii", "Fordi sensor gir høyere uttelling for enkelte teorier enn for andre", "Fordi de mest interessante teoriene som regel er de vanskeligste å definere presist under tidspress", "Fordi oppgaveteksten alltid oppgir hvilke teorier som er å foretrekke"],
      explanation: "En teori du kan definere presist, plasserer årsak og løsning og gir deg dermed en drøftingsakse gratis. Ingen teorier gir høyere uttelling enn andre, og oppgaveteksten anbefaler ingen. Vanskelighetsgrad varierer, men det er ikke begrunnelsen.",
    },
    {
      question: "Hva er den beste kontrollen på at alle bestillingene i Oppgave A er besvart?",
      options: ["Tell instruksjonsverbene i oppgaveteksten, og sjekk at hvert av dem har fått sitt eget avsnitt", "Sjekk at svaret er omtrent like langt som oppgavene rundt", "Sjekk at alle teoriene på pensum er nevnt et sted i svaret, slik at bredden i kunnskapen er dokumentert", "Sjekk at innledningen gjentar oppgaveteksten ordrett"],
      explanation: "Instruksjonsverbene er bestillingene, og tellingen er en mekanisk kontroll som fanger den vanligste feilen. Å nevne alle teoriene er feil #4 i praksis — å skrive alt man kan. Lengdesammenligning og ordrett gjengivelse av oppgaveteksten gir ingen kontroll.",
    },
    {
      question: "Hvordan er drøftingsleddet (ledd ii) formulert i settene?",
      options: ["Som én av tre varianter: historisk kontekst, likheter og ulikheter, eller styrker og svakheter", "Alltid som en sammenligning av to teorier", "Alltid som en vurdering av teorienes relevans i dag", "Som et fritt valg der kandidaten selv bestemmer hva som skal drøftes, så lenge det er faglig relevant"],
      explanation: "De tre variantene går igjen, og oppgaveteksten sier hvilken som er bestilt. Sammenligning er bare den ene av dem. Relevansvurdering hører til ledd iii, og valget er ikke fritt: å drøfte noe annet enn det som er bestilt, er feil #4.",
    },
    {
      question: "En besvarelse definerer avhengighetsteori som «en kritisk teori som ble utviklet i Latin-Amerika på 1960-tallet». Hva er problemet?",
      options: ["Setningen plasserer teorien historisk uten å si hva den mener", "Setningen inneholder en faktafeil om hvor teorien oppsto", "Setningen er for lang til å fungere som definisjon", "Setningen mangler henvisning til Frank og Wallerstein"],
      explanation: "Opplysningen er korrekt, men det er en plassering og ikke en definisjon: den sier ikke hvor årsaken til underutvikling ligger. Opphavshistorien hører hjemme i redegjørelsen etter definisjonen. Navn styrker forankringen, men gjør ikke en plassering om til en definisjon.",
    },
    {
      question: "Hva er likheten mellom moderniseringsteori og avhengighetsteori som oftest blir glemt i ledd ii?",
      options: ["At begge er strukturelle forklaringer som tilbyr én hovedårsak til fattigdom", "At begge mener staten bør styre investeringene aktivt", "At begge oppsto som svar på gjeldskrisen på 1980-tallet", "At begge avviser at utvikling kan måles i økonomisk vekst"],
      explanation: "Begge forklarer fattigdom med noe systematisk, ikke med tilfeldigheter, og begge har en normativ retning. Synet på staten er derimot ulikt, teoriene er eldre enn 1980-tallet, og ingen av dem avviser vekst som mål på den måten post-utvikling gjør.",
    },
    {
      question: "Hva skal konklusjonen i en Oppgave A svare på?",
      options: ["Det som ble spurt om i ledd iii, altså relevansspørsmålet", "Alt som er skrevet, i form av et sammendrag", "Hva pensumlitteraturen mener om teoriene", "Hvilken teori som er mest brukt i faget i dag"],
      explanation: "Konklusjonen svarer på oppgavens siste bestilling, ikke på hele besvarelsen. Et sammendrag av alt gir ingen ny uttelling. Hva pensum mener, er ikke et standpunkt, og hvor utbredt en teori er, er ikke det samme som om den forklarer godt.",
    },
  ],
  'utv1000-0-3': [
    {
      question: "Hva er de fire trinnene i kortsvaret, i riktig rekkefølge?",
      options: ["Definisjon, distinksjon, mekanisme, eksempel", "Innledning, redegjørelse, drøfting, konklusjon med eget standpunkt", "Definisjon, eksempel, mekanisme, motforestilling som besvares", "Case, pensumforankring, egne anbefalinger og disposisjon i tre deler"],
      explanation: "Rekkefølgen er definisjon, distinksjon, mekanisme, eksempel — hvert trinn gjør det neste mulig. Innledning, hoveddel og konklusjon er disposisjonen i Oppgave A. Case med anbefalinger beskriver den avviklede emneoppgaven. Eksempelet kommer sist fordi det skal belegge mekanismen.",
    },
    {
      question: "Hvorfor kommer definisjonen først i kortsvaret?",
      options: ["Fordi verken distinksjonen, mekanismen eller eksempelet gir mening før leseren vet hva begrepet er", "Fordi sensor leser bare de første setningene av hvert kortsvar", "Fordi definisjonen er det eneste leddet som gir uttelling i denne sjangeren, uansett hva som følger etter den", "Fordi oppgaveteksten som regel ber om en definisjon eksplisitt"],
      explanation: "Rekkefølgen er logisk: distinksjonen deler et begrep leseren må kjenne, og eksempelet belegger en mekanisme. Sensor leser hele svaret, og definisjonen er grunnkravet, ikke hele uttellingen. Oppgaveteksten sier som regel «drøft», ikke «definer».",
    },
    {
      question: "Hvilken feilkode dekker at et kortsvar ikke kobler temaet til utviklingsprosesser?",
      options: ["Feil #7", "Feil #2, som gjelder manglende og upresise definisjoner", "Feil #9, som gjelder at den onde sirkelen overses", "Feil #8, som gjelder manglende distinksjoner i besvarelsen"],
      explanation: "Feil #7 er at temaet ikke kobles til utvikling. Feil #2 gjelder definisjonene, #8 distinksjonene og #9 den onde sirkelen. Alle fire kan opptre i samme svar, men de peker på hver sin mangel.",
    },
    {
      question: "Hva er den riktige måten å velge hvilke to kortsvar du besvarer?",
      options: ["Velg de to du kan definere presist og forankre med et konkret eksempel", "Velg de to temaene du har lest mest om i pensumlitteraturen", "Velg de to som ser mest interessante ut, siden motivasjon gir bedre tekst", "Velg de to første, siden rekkefølgen i settet følger vanskelighetsgrad"],
      explanation: "Kriteriene er definisjon og eksempel, fordi det er de to som avgjør om svaret kommer over C. Mye lesning uten en presis definisjon gir et bredt, refererende svar. Rekkefølgen i settet sier ingenting om vanskelighetsgrad, og interesse er ikke et faglig kriterium.",
    },
    {
      question: "Hva skiller en mekanisme fra en påstand i et kortsvar?",
      options: ["Mekanismen har en årsak, en vei og en virkning, mens påstanden bare slår fast at noe virker", "Mekanismen er lengre og bruker flere fagbegreper enn påstanden, og virker derfor mer faglig forankret", "Mekanismen er hentet fra pensum, mens påstanden er kandidatens egen", "Mekanismen er tallfestet, mens påstanden er kvalitativ"],
      explanation: "Forskjellen er veien: hvordan noe virker, ikke bare at det virker. Lengde og opphav avgjør ingenting, og faget bruker økonomi kvalitativt, så tallfesting er verken krevd eller ønsket.",
    },
    {
      question: "Hva er den onde sirkelen i konfliktoppgaver?",
      options: ["At konflikt gjør land fattigere, samtidig som fattigdom øker risikoen for ny konflikt", "At fattigdom fører til konflikt, som er den mekanismen Collier har dokumentert", "At konflikt fører til fattigdom, som igjen fører til svakere institusjoner over tid", "At land med naturressurser tiltrekker seg væpnede grupper og derfor blir fattige"],
      explanation: "Poenget er at retningen går begge veier — det er nettopp derfor det er en sirkel og ikke en kjede. De to alternativene som beskriver en enveis kjede, er den vanligste halvversjonen, og de tester feil #9. Ressursforbannelsen er en beslektet, men egen mekanisme.",
    },
    {
      question: "Hva er distinksjonen mellom byråkratisk og politisk korrupsjon?",
      options: ["Småskala i forvaltningen mot storskala i den politiske toppen, der selve reglene kjøpes", "Korrupsjon som er ulovlig mot korrupsjon som er lovlig, men uetisk", "Korrupsjon blant offentlig ansatte mot korrupsjon som foregår mellom aktører i privat sektor", "Korrupsjon som avdekkes mot korrupsjon som forblir uoppdaget over tid"],
      explanation: "Skillet går på nivå og omfang: bestikkelser i forvaltningens møte med innbyggerne mot kjøp av regler, konsesjoner og kontrakter i toppen. Begge er former for misbruk av offentlig makt, så privat sektor alene faller utenfor definisjonen, og lovlighet eller oppdagelse skiller dem ikke.",
    },
    {
      question: "Hvor mange minutter setter bokas tidsbudsjett av til hvert kortsvar?",
      options: ["Cirka 40", "Cirka 20, siden svaret bare er et par avsnitt langt", "Cirka 60, altså en firedel av eksamenstiden per svar", "Cirka 30, med ti minutter i reserve til sluttkontroll"],
      explanation: "Budsjettet er cirka 40 minutter per kortsvar, altså cirka 80 til sammen for Del II. Sluttkontrollen på cirka 20 minutter er avsatt utenom og gjelder begge deler. Et par avsnitt tar lengre tid enn tjue minutter når definisjonen skal være presis.",
    },
    {
      question: "Hva kjennetegner et kortsvar på minimumsnivå, altså under C?",
      options: ["En korrekt definisjon, og ikke stort mer", "En definisjon og minst én mekanisme, men uten eksempel", "En definisjon, en distinksjon og et navngitt eksempel uten drøfting", "Et svar som er kortere enn hundre ord uansett innhold"],
      explanation: "Minimumsnivået er definisjonen alene. Definisjon pluss mekanisme er allerede C, og definisjon med distinksjon og eksempel ligger nær B. Ordtelling er ikke et kriterium i denne sjangeren.",
    },
    {
      question: "En kandidat skriver: «Bistand kan være bilateral eller multilateral. Bistand påvirker mottakerland på flere måter.» Hva er problemet med distinksjonen?",
      options: ["Den er nevnt, men ikke brukt — de to typene får ingen egen virkning i svaret", "Den er faktisk feil, siden bistand ikke deles inn på den måten", "Den mangler et pensumnavn og teller derfor ikke", "Den burde stått etter mekanismen, ikke før"],
      explanation: "Distinksjonen er riktig, men den gjør ikke arbeid: de to typene nevnes og glemmes. Løftet er å la hver type få sin egen mekanisme. Skillet mellom bilateral og multilateral er korrekt, rekkefølgen er riktig, og pensumnavn er en styrke uten å være et krav i kortsvar.",
    },
    {
      question: "Hva er den klassiske feilen i en KOMP-oppgave?",
      options: ["To parallelle referater der bare det ene leddet behandles av gangen", "For mange sammenligningsakser, slik at svaret blir uoversiktlig", "At kandidaten tar stilling til hvilket av leddene som er best", "At definisjonene av begge begrepene kommer først i svaret"],
      explanation: "Feilen er å skrive alt om det ene og så alt om det andre. Testen er om teksten fortsatt henger sammen når annethvert avsnitt strykes. To til fire akser er normalen, definisjonene skal komme først, og en begrunnet landing er lov.",
    },
    {
      question: "Hvordan skal en personlig erfaring fra bistandsarbeid eller utveksling brukes i et kortsvar?",
      options: ["Som illustrasjon av et begrep på trinn fire, aldri som belegg alene", "Som innledning, siden den fanger leserens oppmerksomhet", "Den bør utelates helt, fordi egne erfaringer regnes som synsing", "Som erstatning for et pensumeksempel når du er usikker på pensum"],
      explanation: "Erfaringen konverteres: begrepet først, erfaringen som illustrasjon, og deretter kobling til drøftingsaksen og et pensumnært eksempel. Å utelate den er unødvendig, og å la den erstatte forankringen svekker svaret på Akse 4.",
    },
    {
      question: "Hva innebærer det at pensumreferanser er «en styrke» i kortsvar?",
      options: ["De løfter svaret, men er ikke et absolutt krav slik de er i lengre besvarelser", "De er obligatoriske, og et svar uten navn kan ikke bestå", "De teller bare hvis både forfatter og verk er oppgitt korrekt", "De er uten betydning, siden kortsvar vurderes på struktur alene"],
      explanation: "Formuleringen fra veiledningene er at referanser er en styrke i kortsvar. Et navn du er sikker på, løfter; et navn du er usikker på, gir en feiltilskrivning, som er en faglig feil. Struktur alene er ikke tilstrekkelig, og verktitler er ikke påkrevd.",
    },
    {
      question: "Hva er den drøftende bevegelsen som skiller et C-kortsvar fra et B-kortsvar?",
      options: ["En motforestilling som skrives ut og besvares, eller en grense for hvor sterk sammenhengen er", "En lengre og mer detaljert gjennomgang av det samme stoffet, slik at bredden i kunnskapen blir tydelig", "En oppsummering til slutt som gjentar hovedpunktene", "En liste over flere forskere som har uttalt seg om temaet"],
      explanation: "Drøftingen er en bevegelse, ikke en mengde: en innvending som besvares, eller en presisering av hvor funnet holder og hvor det ikke gjør det. Mer stoff, oppsummeringer og navnelister endrer ikke at svaret bare forklarer.",
    },
    {
      question: "Hvor mange kortsvar skal du levere i Del II?",
      options: ["Nøyaktig to", "To eller tre, avhengig av hvor god tid du har igjen", "Alle tre, siden de vurderes samlet som 40 prosent", "Minst ett, og flere hvis du rekker det"],
      explanation: "Du besvarer nøyaktig to av tre. Å skrive litt på alle tre gir tre halvferdige svar i stedet for to hele. Manglende svar på ett trekker karakteren vesentlig ned, og to manglende gir F, så ett er ikke tilstrekkelig.",
    },
    {
      question: "Hva er den beste kontrollen på om koblingen til utvikling faktisk står i svaret ditt?",
      options: ["Finn setningen der temaets navn og ordet utvikling står sammen med en vei mellom seg", "Tell hvor mange ganger ordet utvikling forekommer i teksten", "Sjekk at siste avsnitt begynner med ordet «utvikling»", "Sjekk at du har brukt minst ett begrep fra kapitlet om utviklingsbegrepet et sted i besvarelsen"],
      explanation: "Kontrollen gjelder om det står en mekanisme mellom temaet og utviklingsprosessen, ikke om ordet forekommer. Å telle ord eller plassere dem bestemte steder fanger ikke feil #7, siden ordet godt kan stå der uten at koblingen er skrevet.",
    },
  ],
  'utv1000-1-1': [
    {
      question: "Hva er kjernen i Chambers' definisjon av utvikling som «god endring»?",
      options: ["At definisjonen med vilje er minimal, slik at spørsmålet om hvem som avgjør hva som er godt, blir stående åpent", "At all endring i et samfunn over tid regnes som utvikling, uavhengig av om den oppleves som en forbedring", "At utvikling er den endringen som følger av at et samfunn tar i bruk ny teknologi og nye produksjonsmåter", "At endringen må være målbar i statistikk for at den skal kunne kalles utvikling i faglig forstand"],
      explanation: "Styrken ligger i at «god» er normativt og står ubesvart. Definisjonen skjuler ikke problemet, den gjør det synlig — og det er derfor den er nyttig å åpne en besvarelse med.",
    },
    {
      question: "Hvilket av de tre lagene i utviklingsbegrepet svarer på spørsmålet «utvikling mot hva?»",
      options: ["Målforståelsen — utvikling som en ønsket sluttilstand", "Prosessforståelsen — utvikling som endring over tid", "Historieforståelsen — utviklingsbegrepets eget skiftende innhold gjennom tiårene", "Kapabilitetsforståelsen — utvikling som utvidelse av menneskers reelle valgmuligheter"],
      explanation: "Målforståelsen beskriver et endepunkt og gjør det mulig å rangere land. Prosess svarer på «hvordan», historie på «ifølge hvem, når».",
    },
    {
      question: "Hva skiller «verdiladet» fra «maktladet» i omtalen av utviklingsbegrepet?",
      options: ["Verdiladet handler om innholdet i ordet, maktladet om virkningen det har når det brukes", "Verdiladet gjelder politikeres bruk, maktladet fagfolks", "Verdiladet er en språklig egenskap ved ordet, mens maktladet bare gjelder de eldre utviklingsbegrepene", "Verdiladet betyr at ordet er upresist, maktladet at det brukes ulikt i det globale sør og nord"],
      explanation: "Verdiladet: begrepet rommer en vurdering av hva som er bra. Maktladet: merkelappen legitimerer handling og fordeler definisjonsmakt. Innhold mot virkning.",
    },
    {
      question: "Hvorfor utløste erfaringene fra 1960-tallet et skifte fra vekst til grunnbehov?",
      options: ["Fordi land kunne ha betydelig økonomisk vekst uten at fattigdommen falt merkbart", "Fordi målemetodene for bruttonasjonalprodukt var for upresise", "Fordi avkoloniseringen gjorde at de nye statene selv krevde en annen målestokk enn den de gamle kolonimaktene brukte", "Fordi den kalde krigen gjorde det politisk umulig å bruke vekst som felles målestokk på tvers av blokkene"],
      explanation: "Antakelsen om at vekst ville sive nedover av seg selv holdt ikke generelt. Det var den konkrete erfaringen som gjorde fordeling til et eget mål.",
    },
    {
      question: "Hva er Sens grep når han flytter målestokken fra ressurser til kapabiliteter?",
      options: ["At han spør hva folk faktisk er i stand til å gjøre og være, ikke bare hva de har", "At han erstatter inntekt med flere materielle indikatorer", "At han måler utvikling ut fra hvor stor andel av befolkningen som har fullført grunnskole og videregående opplæring", "At han vekter fordeling tyngre enn nivå, slik at ulikhet trekker et lands utviklingsnivå ned"],
      explanation: "Ressurser er midler, og forholdet mellom middel og frihet varierer mellom mennesker. To med samme inntekt kan ha svært ulik reell frihet.",
    },
    {
      question: "Hvem står bak den klassiske formuleringen av bærekraftig utvikling fra 1987?",
      options: ["Brundtland-kommisjonen", "Amartya Sen", "Robert Chambers, i «god endring»-teksten", "Paul Hopper"],
      explanation: "Formuleringen om å dekke dagens behov uten å ødelegge framtidige generasjoners mulighet er kommisjonens. Å tilskrive den Sen er en av de vanligste tilskrivningsfeilene i faget.",
    },
    {
      question: "Hva er mønsteret i skiftene mellom de fire forståelsene av utvikling?",
      options: ["Hver ny forståelse oppstår som en kritikk av det den forrige ikke fanget", "Hver forståelse videreutvikler den forrige og blir mer presis", "Skiftene følger de store konjunkturomslagene i verdensøkonomien, med et nytt begrep etter hver internasjonale krise", "Skiftene skjer når nye land får innflytelse i de internasjonale organisasjonene som forvalter utviklingspolitikken"],
      explanation: "Vekst fanget ikke fordeling, grunnbehov fanget ikke frihet, menneskelig utvikling fanget ikke naturgrunnlaget. Mønsteret er poenget, ikke kronologien.",
    },
    {
      question: "Hva er den sterkeste innvendingen mot at utvidelsen av utviklingsbegrepet er faglig framgang?",
      options: ["At et begrep som favner alt, skiller ingenting — og dermed blir vanskelig å forplikte noen med", "At begrepet er blitt for komplisert til å måles", "At de nye dimensjonene ble lagt til av forskere uten tilstrekkelig empirisk belegg for at de betyr noe", "At utvidelsen har gjort det umulig å sammenlikne land over tid, siden målestokken stadig endres"],
      explanation: "Når begrepet rommer vekst, fordeling, frihet, miljø og framtidige generasjoner, blir det vanskelig å si hva som IKKE er utvikling. Elastisiteten kan dessuten utnyttes av et hvilket som helst tiltak.",
    },
    {
      question: "Hva menes med at utviklingsbegrepet er et «omstridt begrep»?",
      options: ["At uenigheten om innholdet er vedvarende og faglig meningsfull, ikke et tegn på manglende opprydding", "At forskere fra ulike fagtradisjoner bruker ordet ulikt, slik at tverrfaglig samarbeid blir vanskelig", "At begrepet er politisk kontroversielt, og at det derfor bør unngås i akademiske framstillinger", "At det finnes en riktig definisjon som faget ennå ikke har klart å enes om å formulere presist"],
      explanation: "Uenigheten kommer av at begrepet inneholder en verdivurdering, og verdivurderinger lar seg ikke avgjøre ved definisjon. Å etterlyse «den riktige» definisjonen er å misforstå begrepstypen.",
    },
    {
      question: "Hvilken av disse er IKKE noe bruttonasjonalprodukt per innbygger fanger opp?",
      options: ["Hvordan verdiskapingen er fordelt mellom innbyggerne i landet", "Størrelsen på den samlede verdiskapingen i landet", "Endringer i verdiskapingen fra ett år til det neste, slik at vekst lar seg måle over tid", "Forskjeller i verdiskaping mellom land, når tallene omregnes til en felles valuta"],
      explanation: "Målet er et gjennomsnitt og sier ingenting om fordeling — det kan stige mens flertallet får det verre. Det teller heller ikke ubetalt arbeid, og skiller ikke verdiskaping fra nedbygging av naturgrunnlag.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom grunnbehovstilnærmingen og menneskelig utvikling?",
      options: ["Grunnbehov spør hva folk har, mens menneskelig utvikling spør hva de kan gjøre med det", "Grunnbehov er materielt, menneskelig utvikling er det ikke", "Grunnbehov ble utviklet av FN-organer, mens menneskelig utvikling kom fra akademiske miljøer", "Grunnbehov måles på husholdningsnivå, mens menneskelig utvikling måles på nasjonalt nivå"],
      explanation: "Skillet går mellom besittelse og frihet. Mat i huset er et grunnbehov dekket; å kunne velge hva man skal bli, er en kapabilitet.",
    },
    {
      question: "Hvorfor bruker boka «global sør» og «global nord» framfor «u-land» og «den tredje verden»?",
      options: ["Fordi de eldre uttrykkene bærer en rangering der alle land antas å skulle bevege seg mot samme sted", "Fordi de eldre uttrykkene er geografisk upresise, mens sør og nord svarer nøyaktig til breddegrad", "Fordi de eldre uttrykkene ble innført under den kalde krigen og derfor er knyttet til en blokkinndeling som ikke lenger finnes", "Fordi de eldre uttrykkene ikke lar seg oversette entydig til engelsk i internasjonal faglitteratur"],
      explanation: "Innvendingen gjelder rangeringen som ligger innbakt. Merk at «underutvikling» som TEORIBEGREP — Franks «utvikling av underutvikling» — er fritt og skal brukes; det er landkategorien som er problematisk.",
    },
    {
      question: "Hva er problemet med kategorien «utviklingsland», faglig sett?",
      options: ["Den forutsetter at det finnes én tilstand alle er på vei mot, og at noen allerede er kommet fram", "Den er for vid til å være nyttig, siden den omfatter over halvparten av verdens stater", "Den bygger på inntektsgrenser som er fastsatt av Verdensbanken og derfor ikke er faglig begrunnet", "Den brukes ulikt av ulike internasjonale organisasjoner, slik at statistikk ikke lar seg sammenlikne"],
      explanation: "Kategorien bærer med seg målforståelsen. Den skjuler dessuten at landene i gruppa har det til felles at de ikke er noe, ikke at de er noe — og plasserer forklaringen inne i hvert land.",
    },
    {
      question: "En besvarelse skriver: «Utvikling, altså økonomisk vekst, har vært svak i regionen.» Hva er problemet?",
      options: ["Den har valgt side i fagets sentrale strid uten å merke det, og blir inkonsistent hvis den senere kritiserer vekstmålet", "Den bruker en foreldet term, siden økonomisk vekst ikke lenger måles i faglige sammenhenger", "Den mangler en kildehenvisning til den forfatteren som står bak vekstforståelsen av utvikling", "Den er for upresis, fordi den ikke oppgir hvilken tidsperiode veksten skal måles over"],
      explanation: "Å sette likhetstegn mellom vekst og utvikling er å legge epoke 1s målestokk til grunn uten å si det. Vekst er ett mål blant flere.",
    },
    {
      question: "Hva er den fjerde og siste komponenten i kortsvarets oppskrift på utviklingsbegrepet?",
      options: ["Historikken: de fire epokene, mønsteret i skiftene, og hva det gir grunn til å tro om dagens forståelse", "En oppsummering av de foregående avsnittene, slik at leseren får hovedpunktene samlet til slutt", "En vurdering av hvilken av de fire forståelsene som er den faglig riktige å legge til grunn", "En henvisning til minst tre pensumforfattere som støtter den definisjonen besvarelsen har valgt"],
      explanation: "Rekkefølgen er: definer og velg side, del i tre lag, vis verdi- og maktladningen, land på historikken. Historielaget er det som oftest mangler.",
    },
    {
      question: "Hva vil det si at utviklingsbegrepet er stedsspesifikt?",
      options: ["At et tiltak som er en klar forbedring i én sammenheng, kan være meningsløst eller skadelig i en annen", "At hvert land har sin egen offisielle definisjon av utvikling nedfelt i nasjonal lovgivning", "At begrepet brukes ulikt i det globale sør og det globale nord, med hver sin faglige tradisjon", "At utviklingsnivået må måles regionalt innad i land, siden nasjonale gjennomsnitt skjuler store forskjeller"],
      explanation: "Vanntilgang, elektrifisering og skolegang har ulik betydning avhengig av hva som allerede finnes. Stedsspesifikk gjelder konteksten, tidsspesifikk gjelder epoken.",
    },
    {
      question: "Hva er kjernen i post-utviklingsposisjonen?",
      options: ["At problemet ikke er hvordan utvikling gjøres, men selve forestillingen om at noen samfunn skal utvikle andre", "At utvikling må skje etter utviklingslandenes egne prioriteringer i stedet for givernes", "At utviklingsbegrepet bør erstattes av bærekraftsbegrepet, siden det siste har bredere tilslutning", "At bistand bør avvikles fordi den skaper avhengighet framfor selvstendig økonomisk vekst"],
      explanation: "Der de fire epokene diskuterer HVA utvikling skal bety, spør post-utvikling om ordet i det hele tatt bør brukes. Det er det naturlige motpolet i enhver drøfting av begrepets brukbarhet.",
    },
    {
      question: "Hvilken feil gjør en besvarelse som ramser opp tre definisjoner av utvikling etter hverandre?",
      options: ["Den refererer i stedet for å drøfte — det blir drøfting først når den viser at definisjonene gir ulike svar", "Den bruker for mye plass på definisjoner og får ikke tid til å behandle selve oppgaven", "Den mangler en presis definisjon, siden tre definisjoner ikke kan gjelde samtidig", "Den blander sammen målforståelsen og prosessforståelsen av utviklingsbegrepet"],
      explanation: "Feil #1 i registeret. Oppramsing er ikke drøfting. Grepet er å vise at de tre gir ulike svar på det samme faktum.",
    },
    {
      question: "Hva var antakelsen som lå under epoke 1s bruk av økonomisk vekst som mål?",
      options: ["At veksten ville sive nedover av seg selv og løfte også de fattigste", "At bare økonomisk vekst lar seg måle presist", "At vekst nødvendigvis fører til demokratisering og dermed til bedre styresett over tid", "At de nylig selvstendige statene selv hadde valgt vekst som sitt fremste utviklingsmål"],
      explanation: "Antakelsen gjorde fordeling overflødig som eget mål. Den holder i noen sammenhenger, men erfaringen fra 1960-tallet var at den ikke holdt generelt.",
    },
    {
      question: "Hva gjør merkelappen «utviklingsprosjekt» med et omstridt tiltak?",
      options: ["Den flytter tiltaket fra å måtte begrunnes mot dem som rammes, til å framstå selvforklarende", "Den utløser krav om konsekvensutredning etter internasjonale retningslinjer for bistand", "Den knytter tiltaket til bærekraftsmålene og gjør det dermed berettiget til internasjonal finansiering", "Den innebærer at tiltaket må godkjennes av mottakerlandets myndigheter før det kan settes i gang"],
      explanation: "Dette er maktladningen i praksis: motstand mot et «utviklingsprosjekt» framstilles lett som motstand mot framgang. Ordet gjør et arbeid.",
    },
    {
      question: "Hvilken av disse tilskrivningene er riktig?",
      options: ["«God endring» er Chambers' formulering, gjengitt hos Hopper", "«God endring» er Hoppers egen formulering", "«God endring» stammer fra Brundtland-kommisjonen og ble senere tatt opp av Chambers", "«God endring» er Sens formulering av hva utvidelse av kapabiliteter innebærer"],
      explanation: "Tilskriv den som Chambers' formulering, gjengitt hos Hopper. Et navn med feil poeng trekker ned mer enn et poeng uten navn.",
    },
    {
      question: "Hva brukes Payne & Phillips særlig til i dette stoffet?",
      options: ["Til å forklare hvorfor en utviklingsforståelse ble avløst av en annen", "Til å definere utvikling som «god endring»", "Til å vise hvordan bruttonasjonalprodukt beregnes og hvilke svakheter målet har", "Til å begrunne at utviklingsbegrepet bør forlates til fordel for et bærekraftsbegrep"],
      explanation: "De brukes på historielaget: hvordan utviklingsteori har skiftet, og hvordan skiftene henger sammen med verdenspolitiske omveltninger. Bruk dem der du forklarer HVORFOR, ikke bare AT.",
    },
    {
      question: "Hva er McNeills poeng om utviklingsbegrepets elastisitet?",
      options: ["At et begrep alle kan slutte seg til, sjelden forplikter noen", "At begrepet er blitt for vidt til å forskes på", "At elastisiteten er en styrke, fordi den lar begrepet tilpasses ulike lokale forhold", "At begrepets utvidelse skyldes at stadig flere fagdisipliner har tatt det i bruk"],
      explanation: "Elastisiteten er ikke bare en språklig svakhet — den har politiske virkninger. Bruk ham som motvekt til modningsargumentet i drøftingen.",
    },
    {
      question: "Hvorfor er historielaget det som oftest mangler i middels besvarelser?",
      options: ["Fordi det krever at man forklarer hvorfor forståelsene avløste hverandre, ikke bare at de gjorde det", "Fordi kronologien er vanskelig å huske uten tilgang til hjelpemidler under eksamen", "Fordi pensum behandler de fire epokene spredt over flere kapitler i ulike bøker", "Fordi sensorveiledningene sjelden etterspør historikken direkte i oppgaveteksten"],
      explanation: "En oppramsing av fire epoker er riktig, men får ikke uttelling. Det er mønsteret — hver forståelse som kritikk av den forrige — som er poenget.",
    },
    {
      question: "Hva innebærer det å «erklære» sitt definisjonsvalg i en besvarelse?",
      options: ["Å si eksplisitt hvilken målestokk man legger til grunn, slik at resten av svaret lar seg etterprøve", "Å begrunne hvorfor den valgte definisjonen er den faglig riktige blant de tilgjengelige", "Å gjengi alle de fire historiske forståelsene før man går videre til selve oppgaven", "Å oppgi hvilken pensumforfatter definisjonen er hentet fra, med sidetall"],
      explanation: "Valget er en verdiprioritering, ikke et faglig funn. Å gjøre det eksplisitt er ikke en svakhet ved svaret, men en forutsetning for at det skal la seg etterprøve.",
    },
    {
      question: "En besvarelse skriver: «Landet trenger utvikling.» Hvilken feil er dette?",
      options: ["Feil #5 — å behandle utvikling som et nøytralt selvsagt gode", "Feil #2 — å mangle en presis definisjon av begrepet tidlig i besvarelsen", "Feil #1 — å ramse opp definisjoner uten å problematisere dem", "Feil #9 — å blande sammen målforståelsen og prosessforståelsen"],
      explanation: "Ordet brukes som om innholdet var gitt. Rettelsen er ikke å slutte å bruke det, men å si hva man legger i det.",
    },
  ],
  'utv1000-1-2': [
    {
      question: "Hva er forskjellen mellom BNP og BNI?",
      options: ["BNP måler produksjon innenfor landets grenser, BNI måler inntekt som tilfaller landets egne", "BNP måler produksjon i privat sektor, mens BNI også inkluderer offentlig sektors verdiskaping", "BNP måles i løpende priser, mens BNI justeres for inflasjon og prisnivå mellom land", "BNP gjelder hele økonomien, BNI bare den delen som er knyttet til utenrikshandel"],
      explanation: "Skillet går på hvor produksjonen SKJER mot hvem inntekten TILHØRER. Forveksling av de to er feil #2 i registeret.",
    },
    {
      question: "Et land har høy BNP men vesentlig lavere BNI per innbygger. Hva er den mest sannsynlige forklaringen?",
      options: ["At utenlandsk eide virksomheter står for en stor del av produksjonen i landet", "At landet har høy import og dermed betaler mye til utlandet for varer og tjenester", "At befolkningen vokser raskere enn produksjonen, slik at tallet per innbygger faller", "At store deler av økonomien er uformell og derfor ikke registreres i nasjonalregnskapet"],
      explanation: "Verdiene skapes innenfor grensene og teller i BNP, men overskuddet tilfaller eiere i utlandet og teller ikke i BNI. Mønsteret er vanlig i land med stor utvinningsindustri.",
    },
    {
      question: "Hva er den viktigste blindsonen ved å måle «per innbygger»?",
      options: ["At fordelingen forsvinner: samme snitt kan skjule helt ulike levekår for flertallet", "At folketallet i mange land er usikkert, slik at nevneren i brøken blir upresis", "At tallet ikke lar seg sammenlikne mellom land med svært ulik befolkningsstørrelse", "At barn og gamle telles likt med yrkesaktive, selv om de ikke bidrar til produksjonen"],
      explanation: "Gjennomsnittet kan stige mens flertallet får det verre. Dette er den mest brukbare enkeltinnvendingen mot inntektsmålet — lett å vise, umulig å avvise.",
    },
    {
      question: "Hvorfor øker BNP når en skog hogges?",
      options: ["Fordi målet teller verdiskaping, men ikke trekker fra nedbygging av naturkapital", "Fordi tømmereksport regnes som en investering i framtidig produksjonskapasitet", "Fordi arealet frigjøres til jordbruk, som gir høyere verdi enn skog per dekar", "Fordi skogsdrift er arbeidsintensiv og dermed gir stort utslag i sysselsettingstallene"],
      explanation: "Målet skiller ikke verdiskaping fra nedbygging av kapital. Å la skogen stå øker ikke tallet; å hogge den gjør det.",
    },
    {
      question: "Hva utløste grunnbehovsvendingen på 1970-tallet?",
      options: ["At land hadde hatt betydelig vekst uten at fattigdommen falt merkbart", "At FN vedtok en resolusjon som forpliktet medlemslandene til å måle levekår bredere", "At oljekrisen gjorde det umulig å opprettholde vekst som realistisk politisk mål", "At nye statistiske metoder gjorde det mulig å måle helse og skolegang pålitelig"],
      explanation: "Antakelsen om at vekst ville sive nedover av seg selv, holdt ikke generelt. Det var den konkrete erfaringen som gjorde fordeling og levekår til egne mål.",
    },
    {
      question: "Hvilke tre dimensjoner bygger indeksen for menneskelig utvikling på?",
      options: ["Helse, utdanning og inntekt", "Inntekt, fordeling og politisk frihet i landet", "Helse, miljø og økonomisk vekst over tid", "Utdanning, sysselsetting og tilgang til offentlige tjenester"],
      explanation: "Poenget er at inntekt er ÉN av tre, ikke hele målet. Et land kan ha høy inntekt og likevel havne lavere enn et fattigere land som gjør inntekten om til levealder og skolegang mer effektivt.",
    },
    {
      question: "Hva er det sterkeste argumentet mot at bredere mål gjør målingen mindre verdiladet?",
      options: ["At noen fortsatt må bestemme hvilke dimensjoner som skal telle og hvordan de skal vektes", "At bredere mål krever mer data, som mange land ikke har kapasitet til å samle inn", "At de tre dimensjonene korrelerer sterkt, slik at indeksen i praksis måler det samme som inntekt", "At bredere mål ikke lar seg sammenlikne bakover i tid på samme måte som inntektsmål"],
      explanation: "Verdiladningen er flyttet og gjort mindre synlig, ikke fjernet. Valget av dimensjoner og vektingen mellom dem er begge verdiprioriteringer, skjult inne i ett tall.",
    },
    {
      question: "Hva menes med «tallenes autoritet» i dette stoffet?",
      options: ["At et mål uttrykt i tall framstår mer objektivt enn en beskrivelse i ord, også når det hviler på like mange skjønnsvalg", "At internasjonale organisasjoner har enerett på å publisere offisiell utviklingsstatistikk, og dermed på premissene", "At kvantitative metoder gir mer pålitelige resultater enn kvalitative når utvikling skal studeres over tid", "At land med bedre utbygd statistikkapparat får mer innflytelse i internasjonale forhandlinger om bistand"],
      explanation: "Virkningen er at verdivalget blir usynlig. Ingen spør hvem som bestemte vektingen; de spør hvilken plassering landet fikk.",
    },
    {
      question: "Hva er svakheten ved grunnbehovstilnærmingen som menneskelig utvikling svarer på?",
      options: ["At den måler hva folk har, ikke hva de kan gjøre — behov kan dekkes uten at folk blir frie", "At den er for kostbar å måle i land som har et svakt utbygd statistikkapparat fra før", "At den utelater inntekt helt, og dermed mister et mål som fanger noe reelt", "At den bare gjelder de fattigste landene og ikke lar seg bruke som allmenn målestokk"],
      explanation: "En befolkning kan ha behovene dekket og likevel være ufri. Skillet går mellom besittelse og frihet.",
    },
    {
      question: "Hva skjer når flere indikatorer slås sammen til ett tall?",
      options: ["Vektingen må bestemmes, og motsatte bevegelser kan utlikne hverandre", "Målingen blir mer presis, siden tilfeldige feil i enkeltindikatorer jevnes ut", "Sammenlikning mellom land blir umulig, siden landene vekter ulikt", "Tallet blir mindre følsomt for endringer, og oppdateres derfor sjeldnere"],
      explanation: "Vektingen er et skjult verdivalg. Og et land der helsen blir verre og inntekten bedre, kan komme ut uendret — bevegelsene nuller hverandre.",
    },
    {
      question: "Hvorfor er ubetalt omsorgsarbeid et sentralt eksempel i dette kapitlet?",
      options: ["Fordi det er en forutsetning for at alt annet skal fungere, men ikke teller i noe inntektsmål", "Fordi det utgjør en betydelig og målbar andel av den samlede verdiskapingen i de fleste lavinntektsland", "Fordi det er den delen av økonomien som vokser aller raskest i det globale sør i dag", "Fordi det er vanskelig å skille fra frivillig arbeid i offisiell statistikk"],
      explanation: "Det som ikke måles, forsvinner ut av beslutningsgrunnlaget. Politikk utformet etter statistikken overser det systematisk — dette er målingens maktdimensjon.",
    },
    {
      question: "Hva er hovedpoenget i formuleringen «målevalg er verdivalg»?",
      options: ["At valget ikke kan avgjøres av data, fordi det er valget som bestemmer hvilke data som blir relevante", "At politikere gjennomgående velger de målene som stiller deres egen politikk i best mulig lys", "At ulike fagdisipliner foretrekker ulike mål ut fra sine egne metodiske tradisjoner og datatilgang", "At måling alltid innebærer en avveining mellom presisjon og tilgjengelighet av data"],
      explanation: "Det forklarer hvorfor striden om mål ikke lar seg avgjøre ved bedre statistikk. Den som tror uenigheten er teknisk, har ikke forstått hva slags uenighet det er.",
    },
    {
      question: "Hva er en legitim styrke ved BNP som utviklingsmål?",
      options: ["At det finnes for nesten alle land og alle år, og dermed lar seg sammenlikne", "At det fanger fordelingen av inntekt mellom befolkningsgrupper i landet", "At det tar hensyn til hvor effektivt inntekten gjøres om til levekår", "At det inkluderer verdien av ubetalt arbeid gjennom anslag i nasjonalregnskapet"],
      explanation: "En besvarelse som bare river ned målet uten å si dette, har ikke drøftet. Målet fanger noe reelt, og dekningen er dets største fortrinn.",
    },
    {
      question: "Hvordan bør rangeringer av land etter utviklingsnivå leses?",
      options: ["Som omtrentlige, siden statistikken ofte er ufullstendig og sammenlikning bakover bygger på anslag", "Som eksakte, siden internasjonale organisasjoner kvalitetssikrer alle tall som rapporteres inn fra medlemslandene", "Som gyldige bare innenfor hver verdensdel, siden metodene varierer mellom regioner", "Som gyldige bare for de siste ti årene, siden eldre data ikke er sammenliknbare"],
      explanation: "Land kan rangeres ulikt avhengig av kilde. Formuleringen som virker er «målingene peker i retning av», ikke «målingene viser at».",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom vekst og utvikling?",
      options: ["Vekst er økning i produksjon eller inntekt, utvikling er en ønsket endring i samfunnet", "Vekst måles fra år til år, mens utvikling først lar seg måle over generasjoner", "Vekst gjelder økonomien alene, mens utvikling gjelder de politiske institusjonene", "Vekst er et mål som brukes om rike land, utvikling om land i det globale sør"],
      explanation: "Vekst kan være en del av utvikling, en forutsetning for den, eller irrelevant — avhengig av hva som skjer med det som vokser. Likhetstegn mellom dem er epoke 1s målestokk lagt til grunn uten å si det.",
    },
    {
      question: "Hvilken jobb gjør målestoffet i innledningen til Oppgave A?",
      options: ["Det gjør definisjonen konkret — ett målepar viser hva definisjonsvalget faktisk betyr", "Det erstatter definisjonen, siden et mål er mer presist enn en begrepsavklaring", "Det viser bredden i pensum og signaliserer at kandidaten har lest alle kapitlene", "Det plasserer landet som drøftes på en internasjonal rangering tidlig i besvarelsen"],
      explanation: "Uten et mål blir definisjonen erklærende. Med ett målepar blir den konkret — og det er forskjellen mellom å påstå og å vise.",
    },
    {
      question: "Hva er den vanligste feilbruken av målestoffet?",
      options: ["Å presentere et bredere mål som løsningen på verdiladningen", "Å bruke for gamle tall, slik at sammenlikningen ikke lenger er gyldig", "Å oppgi tall uten kildehenvisning til den organisasjonen som har publisert dem", "Å bruke flere mål samtidig, slik at besvarelsen blir uoversiktlig for sensor"],
      explanation: "Bredde flytter problemet, den fjerner det ikke. Å ramse opp BNPs svakheter uten å si hva alternativet fanger, er den motsatte halvparten av samme feil.",
    },
    {
      question: "Hvem står bak indeksen for menneskelig utvikling som måleverktøy?",
      options: ["FN, som operasjonaliserte tenkningen i en indeks", "Amartya Sen, som både utviklet teorien og konstruerte indeksen", "Verdensbanken, som en erstatning for sin egen inntektsbaserte klassifisering", "Brundtland-kommisjonen, som en del av bærekraftsrammeverket fra 1987"],
      explanation: "Sen leverte det teoretiske grunnlaget for å måle bredere; indeksen er FNs operasjonalisering. Å tilskrive ham indeksen alene er en tilskrivningsfeil.",
    },
    {
      question: "To land har samme BNP per innbygger, men svært ulik levealder. Hvilke to forklaringer bør en god besvarelse skille mellom?",
      options: ["At inntekten er skjevere fordelt, eller at inntekten gjøres om til levekår mindre effektivt", "At det ene landet har en eldre befolkning, eller at det har vesentlig høyere innvandring", "At tallene er samlet inn i ulike år, eller at valutakursene ikke er sammenliknbare", "At det ene landet har større uformell sektor, eller at det har mer utenlandsk eierskap"],
      explanation: "Fordelingsforklaringen peker på at problemet er «per innbygger». Omgjøringsforklaringen peker på at inntekt bare er et middel. Begge peker mot samme konklusjon om målet, men av ulike grunner.",
    },
    {
      question: "Hva er Payne & Phillips' særlige bidrag i dette stoffet?",
      options: ["Tidfestingen — hvorfor grunnbehovsvendingen kom på 1970-tallet og ikke før", "Definisjonen av bruttonasjonalprodukt og skillet mot bruttonasjonalinntekt", "Konstruksjonen av de tre dimensjonene i indeksen for menneskelig utvikling", "Kritikken av at ubetalt omsorgsarbeid ikke telles i nasjonalregnskapet"],
      explanation: "De brukes der du skal forklare HVORFOR et skifte kom akkurat da. Hopper brukes på svakhetene ved inntektsmålet og på hvorfor bredere mål vokste fram.",
    },
  ],
  'utv1000-1-3': [
    {
      question: "Hva betegner «the Golden Age» i dette stoffet?",
      options: ["Perioden fra rundt 1945 til tidlig på 1970-tallet med høy, stabil vekst i de industrialiserte landene", "Tiåret etter avkoloniseringen, da de nye statene hadde sin sterkeste økonomiske vekst noensinne", "Perioden da bistandsbudsjettene i giverlandene nådde sitt høyeste nivå målt som andel av inntekten", "Årene mellom gjeldskrisen og finanskrisen, da den absolutte fattigdommen i verden falt raskest"],
      explanation: "Perioden skapte en utbredt tro på at vekst kunne STYRES — og det er den troen utviklingsprosjektet hviler på. Merk at den var gyllen for de industrialiserte landene, ikke for verden som helhet.",
    },
    {
      question: "Hvorfor er det historisk nytt at utvikling blir et eget politikkområde rundt 1950?",
      options: ["Fordi forestillingen om at fattigdom kunne avskaffes gjennom planlagt inngrep utenfra, var ny", "Fordi fattigdom for første gang ble målt systematisk og dermed kunne sammenliknes mellom land", "Fordi de nye statene selv krevde at giverlandene opprettet egne utviklingsdepartementer", "Fordi FN ble opprettet og fikk mandat til å samordne internasjonal bistand mellom medlemsland"],
      explanation: "Fattigdom hadde alltid eksistert. Det nye var troen på at den kunne avskaffes etter en plan — og at utvikling derfor kunne ha egne institusjoner, budsjetter og eksperter.",
    },
    {
      question: "Hva var den viktigste økonomiske arven de nye statene overtok etter kolonitiden?",
      options: ["Økonomier innrettet mot eksport av få råvarer, med infrastruktur bygget for å frakte varer ut", "Statsgjeld til kolonimakten som måtte nedbetales før full selvstendighet kunne oppnås", "Et industriapparat bygget opp under krigen som manglet kvalifisert arbeidskraft til å drives videre", "Et skattesystem som var utformet for å finansiere kolonistyret og ikke lot seg omstille"],
      explanation: "Strukturen forsvant ikke ved selvstendighet, og den er utgangspunktet for både strukturalismen og avhengighetsteorien.",
    },
    {
      question: "Hva betydde «den tredje verden» opprinnelig?",
      options: ["Landene som verken tilhørte den vestlige eller den sosialistiske blokken", "Landene som ble selvstendige etter andre verdenskrig og manglet industri", "Landene med lavest inntekt per innbygger i FNs offisielle klassifisering", "Landene som mottok bistand fra begge blokkene samtidig under den kalde krigen"],
      explanation: "Det var en GEOPOLITISK kategori, ikke en økonomisk. At det senere ble synonymt med «fattige land» er en betydningsforskyvning. Bruk «global sør» i egen prosa.",
    },
    {
      question: "Hvorfor var moderniseringsteorien politisk anvendelig i vestblokken?",
      options: ["Den lovet framgang uten at eiendomsforhold måtte endres, og plasserte årsaken til fattigdom inne i landet", "Den var utviklet av forskere som satt i sentrale posisjoner i amerikansk utenriksforvaltning", "Den var den eneste teorien som ga konkrete anslag for hvor mye bistand hvert enkelt land ville trenge", "Den bygde på erfaringene fra Marshallhjelpen og kunne derfor vise til dokumenterte resultater"],
      explanation: "Tre grunner: framgang uten omveltning, årsaken plassert inne i landet og ikke hos handelspartnerne, og vestlige samfunn som målestokk. Merk at dette ikke er det samme som å si at teorien var propaganda.",
    },
    {
      question: "Hvilken erfaring gjorde avhengighetsteorien naturlig i Latin-Amerika?",
      options: ["Over hundre år med formell selvstendighet uten at den lovede utviklingen hadde kommet", "At regionen ble hardere rammet av gjeldskrisen enn noen annen del av verden", "At kolonimaktene trakk seg ut senere der enn i Afrika og Asia, og etterlot svakere institusjoner", "At regionen mottok mindre bistand per innbygger enn andre deler av det globale sør"],
      explanation: "Erfaringen gjør et bestemt spørsmål naturlig: hvis det ikke er kolonistyret som holder oss tilbake, hva er det da? Svaret ble at RELASJONEN til verdensøkonomien fortsetter etter at flagget er skiftet.",
    },
    {
      question: "Hva er «den genetiske feilslutningen» i dette stoffet?",
      options: ["Å slutte fra en teoris opphav til dens gyldighet", "Å anta at en teori gjelder alle land fordi den ble utviklet for ett av dem", "Å tilskrive en teori til feil opphavsperson fordi navnene ligner", "Å bruke en gammel teori på nye data uten å justere for endrede forhold"],
      explanation: "«Moderniseringsteorien tjente vestlige interesser, altså er den gal» er en tankefeil. Opphavet forklarer gjennomslaget; om teorien holder, må avgjøres på annet grunnlag.",
    },
    {
      question: "Hva er kjernefeilen i setningen «Utviklingsteoriene oppsto under den kalde krigen»?",
      options: ["Den er en opplysning og ikke et argument — den sier ikke hva plasseringen betyr", "Den er faktisk gal, siden flere av teoriene ble utviklet før den kalde krigen begynte", "Den mangler kildehenvisning til den pensumforfatteren som beskriver perioden", "Den bruker et geopolitisk begrep der et økonomisk ville vært mer presist"],
      explanation: "Feil #1 i registeret. Sensor kan ikke skille en kandidat som har forstått sammenhengen, fra en som har husket en årstallsramme.",
    },
    {
      question: "Hvilket skille løfter drøftingen av om utviklingsteoriene er daterte?",
      options: ["Skillet mellom teorienes premisser og de mekanismene de beskriver", "Skillet mellom teorier utviklet i det globale nord og i det globale sør", "Skillet mellom teorier som er empirisk testet og teorier som ikke er det", "Skillet mellom teoriens opprinnelige formulering og senere videreutviklinger"],
      explanation: "Premissene er tidsbundne, og en besvarelse som bruker teoriene som om verden fortsatt så slik ut, tar feil. Mekanismene kan derimot etterprøves i dag, og noen av dem holder.",
    },
    {
      question: "Hva svarer moderniseringsteorien primært på, sammenliknet med avhengighetsteorien?",
      options: ["Hvordan et land kommer i gang, mens avhengighetsteorien spør hvorfor det ikke holdt fram", "Hvordan et land bør fordele veksten, mens avhengighetsteorien spør hvordan den skapes", "Hvordan bistand bør organiseres, mens avhengighetsteorien spør om den bør gis i det hele tatt", "Hvordan staten bør styre økonomien, mens avhengighetsteorien spør hvem som eier den"],
      explanation: "De to ser ikke på det samme og spør ikke om det samme. Uenigheten er derfor delvis en uenighet om hvilket spørsmål som er det viktige — og det er selve grepet i kapitlet.",
    },
    {
      question: "Hvorfor er teoriene fra 1950- og 60-tallet så opptatt av stadier, planer og investeringsnivåer?",
      options: ["Fordi etterkrigstidens erfaring var at store, koordinerte inngrep virket", "Fordi datidens statistikk bare tillot sammenlikning av aggregerte størrelser", "Fordi de nye statene hadde planøkonomiske forvaltninger som krevde slike modeller", "Fordi FN-organene stilte krav om flerårige planer for å utbetale støtte"],
      explanation: "Gjenoppbyggingen av Vest-Europa og utbyggingen av velferdsstater ble overført som forbilde. Teoriens form — en trapp med trinn — speiler en samtid som trodde utvikling lot seg planlegge.",
    },
    {
      question: "Hva viser den alliansefrie bevegelsen om de nye statenes rolle?",
      options: ["At de var aktører som forsøkte å skaffe seg handlingsrom mellom blokkene", "At de foretrakk sosialistiske utviklingsmodeller framfor vestlige", "At de i praksis ikke klarte å motstå presset om å velge side i konflikten", "At de organiserte seg for å forhandle fram bedre bistandsvilkår samlet"],
      explanation: "Bevegelsen er en nyttig korreksjon til framstillinger der det globale sør bare er noe som blir utviklet av andre.",
    },
    {
      question: "Hva er strykningstesten for historiestoff i en besvarelse?",
      options: ["Fjern alle årstall og hendelsesnavn, og se om det står igjen en påstand om hvordan konteksten formet teorien", "Fjern alle teorinavn fra teksten, og se om historiedelen fortsatt henger logisk sammen på egen hånd", "Fjern alle kildehenvisninger, og kontroller at framstillingen fortsatt er etterprøvbar", "Fjern hele innledningen, og se om drøftingen fortsatt er forståelig for en leser som kommer utenfra"],
      explanation: "Historiestoffet skal alltid ende i en kobling, aldri i en hendelse. Hvis ingenting står igjen, er avsnittet en ramse — feil #4.",
    },
    {
      question: "Hvorfor svekket 1970-tallet troen på at vekst kan styres planmessig?",
      options: ["Fordi den lange vekstperioden i de industrialiserte landene tok slutt", "Fordi de første datamodellene viste at planlegging matematisk sett var umulig", "Fordi avkoloniseringen var fullført og planapparatet mistet sitt formål", "Fordi gjeldskrisen i det globale sør inntraff og gjorde langsiktige planer verdiløse"],
      explanation: "Samme erfaring ga to motsatte konklusjoner: grunnbehovsvendingen på den ene siden, det nyliberale skiftet på 1980-tallet på den andre. At svarene er så ulike, er poenget.",
    },
    {
      question: "Hva er oppskriften på ii-leddet i Oppgave A når det ber om historisk kontekst?",
      options: ["Én setning om situasjonen, én om spørsmålet den gjorde naturlig, én om hvordan det formet teorien", "En kronologisk gjennomgang av de viktigste hendelsene i den aktuelle perioden", "En sammenlikning av hvordan to teorier ble mottatt i henholdsvis øst og vest", "En redegjørelse for hvilke pensumforfattere som har skrevet om perioden, og hva hver av dem vektlegger"],
      explanation: "Tre setninger skiller en besvarelse som forklarer, fra en som gjengir.",
    },
    {
      question: "Hvordan unngår du den genetiske feilslutningen uten å bli tannløs?",
      options: ["Ved å si begge deler eksplisitt: at gjennomslaget krever konteksten, og at mekanismens gyldighet er et annet spørsmål", "Ved å la være å nevne teorienes politiske funksjon i det hele tatt, og holde seg til innholdet", "Ved å behandle alle teoriene som like gyldige, uavhengig av hvor og når de ble utviklet", "Ved å oppgi hvilke interesser hver teori tjente, og overlate vurderingen til leseren"],
      explanation: "En teori kan være politisk anvendelig og likevel beskrive noe riktig. Formuleringen som virker: «Teoriens gjennomslag lar seg ikke forklare uten den geopolitiske situasjonen. Om mekanismen holder, er et annet spørsmål.»",
    },
    {
      question: "Hva brukes Payne & Phillips særlig til i dette kapitlet?",
      options: ["Til å forklare hvorfor bestemte teorier fikk gjennomslag når de gjorde", "Til å definere utviklingsbegrepet og skille mellom mål, prosess og historie", "Til å gjøre rede for hvordan bruttonasjonalprodukt beregnes og hva det utelater", "Til å begrunne at «den tredje verden» bør erstattes av «global sør»"],
      explanation: "De behandler hvordan utviklingsteori har skiftet i takt med verdenspolitiske omveltninger. Hopper brukes der du kobler konteksten tilbake til selve utviklingsbegrepet.",
    },
    {
      question: "Hvilken feil gjør en besvarelse som behandler teoriene som om de oppsto i et historisk vakuum?",
      options: ["Uenigheten mellom modernisering og avhengighet blir uforståelig — den ene framstår bare som feil", "Den mister muligheten til å tidfeste teoriene korrekt i forhold til hverandre", "Den kan ikke vise hvilke pensumforfattere som tilhører hvilken tradisjon", "Den overser at flere av teoriene ble utviklet parallelt i ulike land og verdensdeler"],
      explanation: "Feil #3. Uten konteksten framstår den ene teorien som en feiltakelse i stedet for som et svar på en annen situasjon.",
    },
    {
      question: "Hvorfor bør «the Golden Age» brukes med et forbehold?",
      options: ["Fordi perioden var gyllen for de industrialiserte landene, ikke for verden som helhet", "Fordi betegnelsen først ble tatt i bruk i ettertid og ikke er samtidig", "Fordi vekstratene i perioden er omstridte og til dels bygger på usikre etterberegninger", "Fordi perioden ikke lar seg avgrense presist i tid mellom ulike land"],
      explanation: "Betegnelsen er ikke en beskrivelse av verden som helhet, og en besvarelse som bruker den uten forbehold har lagt de industrialiserte landenes erfaring til grunn som allmenn.",
    },
    {
      question: "Hva var den kalde krigens viktigste virkning på hvilke utviklingsteorier som fikk gjennomslag?",
      options: ["Teorier som var politisk brukbare for en blokk, fikk ressurser og gjennomslagskraft deretter", "Teorier fra det globale sør ble systematisk sensurert i vestlige forskningsmiljøer", "Teorier måtte godkjennes av FN-organene før de kunne legges til grunn for bistandspolitikken", "Teorier ble utviklet i par, slik at hver blokk hadde et svar på den andres modell"],
      explanation: "En teori som lovet vekst uten samfunnsomveltning var politisk brukbar i vest. En som pekte på at verdensøkonomien selv var problemet, hadde ikke samme institusjonelle støtte. Hvilke teorier som fikk gjennomslag, avhenger ikke bare av hvor gode de var.",
    },
  ],
  'utv1000-2-1': [
    {
      question: "Hvilke tre antakelser bærer moderniseringsteorien?",
      options: ["At utvikling er universell, endogen og positiv sum", "At utvikling er markedsdrevet, målbar og avhengig av institusjonell kvalitet", "At utvikling krever kapitaltilførsel, teknologi og politisk stabilitet over tid", "At utvikling er ujevn, historisk betinget og avhengig av landets ressurser"],
      explanation: "Universell: én vei for alle. Endogen: årsaken ligger inne i landet. Positiv sum: alle kan vinne samtidig. Alle tre bestrides av avhengighetsteorien.",
    },
    {
      question: "Hva er «take-off» i Rostows modell?",
      options: ["Vendepunktet der veksten blir selvdrivende og ikke lenger krever ytre stimulans", "Stadiet der landet går fra jordbruk til industri som viktigste næring", "Øyeblikket der eksporten passerer importen og handelsbalansen snur i landets favør", "Punktet der bistanden kan avvikles fordi landet har nådd middels inntektsnivå"],
      explanation: "Her ligger hele teoriens politiske løfte: kommer man over terskelen, går resten av seg selv — og da er bistand en engangsinnsats, ikke en varig forpliktelse.",
    },
    {
      question: "Hvordan forklarer moderniseringsteorien fattigdom?",
      options: ["Med tradisjonelle strukturer innad i landet som hindrer vekst", "Med ujevne bytteforhold mellom råvareeksportører og industrialiserte land", "Med at kolonitidens grenser skapte stater uten et samlet økonomisk grunnlag", "Med at kapitalen flyter fra fattige til rike land gjennom utenlandsk eierskap"],
      explanation: "Lav sparing, svake markeder, teknologi som ikke tas i bruk. Årsaken plasseres inne i landet — det følger av antakelsen om at utvikling er endogen.",
    },
    {
      question: "Hva er problemet med å definere moderniseringsteorien som «at land skal bli som Vesten»?",
      options: ["Det er kritikken av teorien, ikke teorien — og da mister drøftingen sitt sterkeste kort", "Det er en for upresis formulering til å brukes i en akademisk besvarelse", "Det utelater Rostow, som må navngis eksplisitt for at redegjørelsen skal telle som fullstendig", "Det forveksler moderniseringsteori med den nyliberale utviklingsmodellen"],
      explanation: "Feil #2 i registeret, og den skjer i første setning. Kandidaten taper poeng to steder: redegjørelsen blir upresis, og innvendingen er allerede brukt opp.",
    },
    {
      question: "Hva er den skarpeste formen for etnosentrisme-innvendingen?",
      options: ["At teorien er sirkulær — den måler avstand til et endepunkt den selv har valgt", "At teorien er nedlatende overfor de samfunnene som ikke har industrialisert seg ennå", "At teorien ble utviklet av forskere som aldri besøkte landene de skrev om", "At teorien bruker vestlige data til å beskrive samfunn med helt andre forhold"],
      explanation: "Innvendingen er ikke først og fremst at teorien er nedlatende, men at den finner at de som satte målestokken, ligger nærmest den. Dette er definisjonsmakt i praksis.",
    },
    {
      question: "Hva skiller modernisering fra nyliberalisme?",
      options: ["Modernisering er statsdrevet, nyliberalisme markedsdrevet", "Modernisering gjelder industriland, nyliberalisme gjelder det globale sør", "Modernisering er en teori, nyliberalisme bare et sett politiske virkemidler", "Modernisering forklarer fattigdom eksogent, nyliberalisme forklarer den endogent"],
      explanation: "Feil #3 i registeret. De deler antakelsen om at årsaken ligger inne i landet, men er motsatte i synet på staten: den ene vil at den skal gjøre mer, den andre mindre.",
    },
    {
      question: "Hva er en idealtype, og hvorfor er begrepet nyttig i kritikken av tradisjonell/moderne-paret?",
      options: ["En bevisst forenklet modell — innvendingen er ikke at ingen samfunn passer, men at paret behandles som en tidsakse", "En modell basert på det beste eksempelet i en gruppe, brukt som målestokk for de øvrige", "En teoretisk konstruksjon som må testes empirisk før den kan brukes i analyse", "En beskrivelse av hvordan et samfunn bør se ut etter at utviklingen er fullført, brukt som mål for politikken"],
      explanation: "Å innvende at ingen samfunn er rent tradisjonelt, ville vært å misforstå hva en idealtype er. Innvendingen er at samfunn antas å bevege seg fra den ene polen til den andre.",
    },
    {
      question: "Hva er den tyngste faglige innvendingen mot moderniseringsteorien?",
      options: ["At den bare ser innover, og ikke kan fange hindre som ligger i relasjonen mellom land", "At den bygger på data fra en periode med helt uvanlig høy og stabil vekst i industrilandene", "At den ikke skiller mellom økonomisk vekst og bredere forståelser av utvikling", "At den forutsetter et statsapparat de fleste nye stater ikke hadde kapasitet til"],
      explanation: "Bytteforhold, gjeld og markedsadgang lar seg ikke fjerne med innenlandske tiltak. Dette er broen til strukturalismen og avhengighetsteorien.",
    },
    {
      question: "Hvorfor er «endogen mot eksogen» en god åpning på en sammenlikning av modernisering og avhengighet?",
      options: ["Fordi nesten hele uenigheten mellom dem lar seg uttrykke med det ene begrepsparet", "Fordi det er den eneste distinksjonen sensorveiledningene nevner eksplisitt", "Fordi det gjør det unødvendig å redegjøre for hver av de to teoriene for seg selv først", "Fordi det viser at avhengighetsteorien er den nyere av de to posisjonene"],
      explanation: "«Teoriene skiller seg først og fremst i om forklaringen er endogen eller eksogen» er en langt strammere åpning enn «de er uenige om mye».",
    },
    {
      question: "Hva betyr det at moderniseringsteorien antar positiv sum?",
      options: ["At ett lands framgang ikke forutsetter et annets tilbakegang", "At summen av bistand og investering må overstige et minstenivå for at vekst utløses", "At veksten fordeler seg jevnt mellom sektorer når take-off først er nådd", "At gevinsten ved handel alltid er større enn kostnaden for begge parter"],
      explanation: "Antakelsen gjør det mulig for rike land å hjelpe uten at det koster dem noe prinsipielt. Avhengighetsteorien bestrider nettopp dette.",
    },
    {
      question: "Hvilke tre virkemidler følger av moderniseringsteoriens diagnose?",
      options: ["Kapital, teknologi og kunnskap, samt institusjoner og verdier", "Tollmurer, statlig industripolitikk og kontroll med kapitalbevegelser", "Gjeldslette, bedre bytteforhold og reformert markedsadgang for råvarer", "Privatisering, deregulering og redusert offentlig forbruk over tid"],
      explanation: "Alle tre peker innover, og det følger av at årsaken er plassert innenlands. Det siste punktet — verdier — er det mest omstridte, fordi det gjør kultur til en utviklingshindring.",
    },
    {
      question: "Hva er Rostows bidrag, presist avgrenset?",
      options: ["Stadiemodellen og take-off-begrepet — ikke moderniseringsteorien som helhet", "Hele moderniseringsteorien, inkludert dens syn på kultur og institusjoner", "Kritikken av at utvikling ble målt i bruttonasjonalprodukt per innbygger alene", "Koblingen mellom moderniseringsteori og nyliberal økonomisk politikk"],
      explanation: "Teorien er bredere enn Rostow, og andre bidro med andre deler. Et navn med feil poeng trekker mer ned enn et poeng uten navn.",
    },
    {
      question: "Hvordan bør den empiriske innvendingen formuleres presist?",
      options: ["Land mottok betydelig bistand og investering over lang tid uten at veksten ble selvdrivende", "Ingen land har noen gang fulgt Rostows fem stadier i nøyaktig den rekkefølgen han beskriver", "Modellens anslag for hvor stor investeringsandelen må være, er aldri blitt bekreftet", "Teorien er utviklet på europeiske data og lar seg ikke overføre til andre verdensdeler"],
      explanation: "«Teorien er empirisk avkreftet» er en påstand, ikke et argument. Nyanseringen hører med: teorien er avkreftet som TILSTREKKELIG forklaring, ikke i den forstand at kapital ikke betyr noe.",
    },
    {
      question: "Hva gjorde moderniseringsteorien politisk brukbar for giverland?",
      options: ["Den krevde ikke omfordeling, plasserte ansvaret innenlands og gjorde bistand til en engangsinnsats", "Den var utviklet av forskere som satt i sentrale posisjoner i giverlandenes forvaltning", "Den ga presise anslag for hvor mye bistand hvert enkelt land ville trenge for å komme seg gjennom take-off", "Den var den eneste teorien som var forenlig med FNs mandat for internasjonalt samarbeid"],
      explanation: "Alle tre egenskapene gjorde teorien komfortabel. Merk at å forklare gjennomslaget ikke er å avvise teorien — det ville vært den genetiske feilslutningen.",
    },
    {
      question: "Hva er formen på Rostows fem stadier, sett under ett?",
      options: ["To stadier med forberedelse, ett vendepunkt, og to som er følger av vendepunktet", "Fem like lange faser som hvert land bruker omtrent samme tid på å gjennomgå", "En syklus der samfunn like gjerne kan falle tilbake til tidligere stadier ved store kriser", "Tre økonomiske stadier fulgt av to politiske, der demokratisering kommer sist"],
      explanation: "Klarer du å si dette, har du forstått modellens form og ikke bare listen. De to første forbereder, det tredje er take-off, de to siste følger.",
    },
    {
      question: "Hvorfor er sammenlikningen modernisering–avhengighet så vanlig på eksamen?",
      options: ["Fordi de er uenige om hvor årsaken til fattigdom sitter, og dermed utgjør en ren kontrast", "Fordi begge to er pensum i det samme kapitlet, og derfor er lette å sammenlikne direkte mot hverandre", "Fordi de ble utviklet av forskere som polemiserte direkte mot hverandre", "Fordi de er de eneste to teoriene som gir konkrete politiske anbefalinger"],
      explanation: "Den ene er gjennomført endogen, den andre gjennomført eksogen. Grepet som løfter sammenlikningen er å si at de svarer på ulike spørsmål — hvordan komme i gang, mot hvorfor det ikke holdt fram.",
    },
    {
      question: "Hva er innvendingen mot at teorien behandler kultur som utviklingshinder?",
      options: ["Forklaringen er lite falsifiserbar — et hvilket som helst mønster kan tolkes som kulturelt", "Kultur lar seg overhodet ikke måle, og påstanden kan derfor ikke inngå i en økonomisk modell", "Teorien bygger på antropologiske arbeider som senere er blitt trukket tilbake", "Kulturargumentet ble lagt til i ettertid av helt andre forfattere enn Rostow selv"],
      explanation: "Innvendingen er todelt: empirisk er det vanskelig å vise at kultur forklarer forskjeller når økonomiske forhold holdes konstant, og faglig kan forklaringen påberopes uansett utfall.",
    },
    {
      question: "Hvilken styrke ved moderniseringsteorien MÅ med i en drøfting?",
      options: ["At den gir en handlingsplan som lar seg omsette i konkret politikk", "At den er den eneste teorien utviklet med tanke på nyfrigjorte stater", "At den forutsier utviklingsforløp med større presisjon enn konkurrerende teorier", "At den ble empirisk bekreftet av veksten i flere østasiatiske land"],
      explanation: "En drøfting uten en utdypet styrke er ikke en drøfting — det er akse tre i vurderingen. Og kapital, teknologi og institusjoner betyr faktisk noe.",
    },
    {
      question: "Hva er innvendingen mot teoriens linearitet?",
      options: ["Land har industrialisert i ulik rekkefølge og kombinert virkemidler modellen ser som uforenlige", "Modellen mangler et stadium mellom take-off og modning som empirien krever", "Rekkefølgen stemmer for Europa, men ikke for land som ble selvstendige senere", "Lineære modeller er generelt uegnet til å beskrive endring i store og sammensatte samfunn over tid"],
      explanation: "Flere østasiatiske land bygde industri med sterk statlig styring — noe modellen verken forutså eller anbefaler. Formuleringen som virker: «modellen beskriver én mulig vei som om den var den eneste».",
    },
    {
      question: "Hva er grepet som løfter en besvarelse om moderniseringsteoriens blindsone?",
      options: ["Å vise at blindsonen følger av antakelsen om at utvikling er endogen, ikke av slurv", "Å liste opp alle de forholdene teorien ikke tar hensyn til, i prioritert rekkefølge", "Å sammenlikne teorien med nyere modeller som har rettet opp de samme manglene", "Å påpeke at Rostow selv erkjente svakheten i senere utgaver av boka si fra 1971"],
      explanation: "Har man først bestemt at årsaken ligger inne i landet, kan relasjonen mellom land ikke være en del av forklaringen. Samme grep motsatt vei forklarer styrken: fordi alt ligger innenlands, blir tiltakene konkrete.",
    },
    {
      question: "Hva bør en besvarelse si om moderniseringsteoriens relevans i dag?",
      options: ["At modellens premisser er svekket, men at tanken om terskler og selvdrivende vekst lever videre", "At teorien for lengst er forlatt av faget som helhet og bare har historisk interesse i dag", "At den er blitt bekreftet av de landene som har hatt sterkest vekst siden 1990", "At den er relevant for lavinntektsland, men ikke for mellominntektsland"],
      explanation: "Tenkningen om institusjonsbygging, teknologioverføring og investeringsnivå går igjen i bistandsapparatet — ofte uten at den knyttes til Rostow. Stadiemodellen som helhet er derimot forlatt.",
    },
    {
      question: "Hva slutter påstanden «moderniseringsteorien er egentlig et forsvar for verdensordenen» feilaktig fra?",
      options: ["Fra virkning til hensikt — at en teori er politisk komfortabel, gjør den ikke til et forsvarsskrift", "Fra teoriens høye alder til dens gyldighet under helt andre forhold i dagens verdensøkonomi", "Fra Rostows stilling i amerikansk forvaltning til modellens matematiske form", "Fra at teorien er vestlig til at den nødvendigvis er empirisk uriktig"],
      explanation: "Påstanden treffer noe riktig om teoriens FUNKSJON og noe galt om dens STATUS. Funksjonen forklarer gjennomslaget; gyldigheten må avgjøres på hva teorien forklarer.",
    },
    {
      question: "Hvor bør tyngdepunktet ligge i en Oppgave A om moderniseringsteori?",
      options: ["I ii- og iii-leddet — redegjørelsen skal være presis, men den har et tak", "I i-leddet, siden en presis redegjørelse er forutsetningen for alt annet", "Jevnt fordelt mellom de tre leddene, som teller like mye hver", "I iii-leddet alene, siden det er der selvstendig tenkning måles"],
      explanation: "Redegjørelsen er inngangsbilletten, men uttellingen ligger i hva teorien var et svar på og i drøftingen.",
    },
    {
      question: "Hva var undertittelen på Rostows bok fra 1960, og hvorfor er den relevant?",
      options: ["«Et ikke-kommunistisk manifest» — modellen var ment som alternativ til den marxistiske fortellingen", "«En teori om økonomisk vekst» — den signaliserte at modellen var rent økonomisk og dermed upolitisk", "«Stadier på veien til velstand» — den understreket at utvikling er en gradvis prosess", "«Utvikling som universell prosess» — den framhevet at modellen gjaldt alle samfunn"],
      explanation: "Rostow arbeidet i amerikansk utenrikspolitikk. Undertittelen sier den geopolitiske funksjonen eksplisitt, og gir deg ii-leddet i én setning.",
    },
    {
      question: "Hva er en «ledende sektor» i Rostows mekanikk, og hva er innvendingen?",
      options: ["En næring som trekker resten med seg — men en sektor kan vokse raskt uten å trekke noe med seg", "Den næringen som sysselsetter flest — men sysselsetting sier lite om produktivitet", "Den næringen staten velger å subsidiere — men slike politiske valg treffer sjelden helt riktig", "Den næringen med høyest eksportverdi — men eksportverdi svinger med verdensmarkedet"],
      explanation: "En eksportnæring med utenlandsk eierskap og få lokale leverandører er ledende i statistikken, men ikke i økonomien.",
    },
    {
      question: "Hva er «sparegapet», og hvor treffer den strukturalistiske innvendingen mot det?",
      options: ["Avstanden mellom nødvendig og faktisk sparing — faller bytteforholdet, lukkes gapet aldri", "Forskjellen mellom offentlig og privat sparing — bare den private teller for take-off", "Avstanden mellom sparing i by og på land — bare bysparingen kan investeres produktivt", "Forskjellen mellom planlagt og gjennomført investering — planer overvurderer alltid evnen"],
      explanation: "Sparegapet er begrunnelsen for kapitaloverføring i moderniseringstenkningen. Faller bytteforholdet, tappes landet for kjøpekraft raskere enn tilførselen fyller på.",
    },
  ],
  'utv1000-2-2': [
    {
      question: "Hva er strukturalismens kjernepåstand?",
      options: ["At underutvikling skyldes strukturelle skjevheter i den internasjonale økonomien", "At underutvikling skyldes tradisjonelle holdninger og institusjoner innad i landet selv", "At underutvikling skyldes at staten griper for mye inn i markedets naturlige virkemåte", "At underutvikling skyldes at kolonimaktene trakk grenser uten hensyn til økonomisk geografi"],
      explanation: "Modernisering spurte hva landet manglet. Strukturalismen spør hvilken POSISJON landet har — og det er et spørsmål om relasjoner, ikke om egenskaper.",
    },
    {
      question: "Hva er bytteforholdet?",
      options: ["Forholdet mellom prisen på det et land eksporterer og prisen på det landet importerer", "Forholdet mellom samlet eksportverdi og samlet importverdi i løpet av ett regnskapsår, målt i landets egen valuta", "Forholdet mellom innenlandske priser og verdensmarkedspriser på de samme varene", "Forholdet mellom mengden råvarer og mengden ferdigvarer et land produserer i alt"],
      explanation: "Faller bytteforholdet, må landet eksportere MER for å importere det samme. Det forklarer hvordan et land kan arbeide like hardt og likevel bli fattigere.",
    },
    {
      question: "Hvilke to mekanismer bruker Prebisch for å forklare fallende bytteforhold?",
      options: ["Etterspørselen etter råvarer vokser saktere enn inntektene, og produktivitetsvekst tas ut ulikt", "Råvareprodusenter mangler kartellmakt, og industrilandene subsidierer samtidig sin egen produksjon kraftig", "Transportkostnadene faller raskere for industrivarer, og tollsatsene er høyere på råvarer", "Råvarer har lengre produksjonssyklus, og valutakursene svinger mer i råvareeksporterende land"],
      explanation: "På etterspørselssiden: rikere folk bruker mindre andel på råvarer. På tilbudssiden: produktivitetsvekst i sentrum tas ut som lønn, i periferien som lavere priser.",
    },
    {
      question: "Hva er ISI?",
      options: ["Å bygge opp egen industri for varer landet ellers ville importert, bak toll og med statlig støtte", "Å subsidiere eksportnæringene slik at de kan konkurrere på verdensmarkedet fra første stund", "Å erstatte importerte innsatsvarer med råvarer landet selv utvinner og videreforedler lokalt", "Å redusere importen ved å devaluere valutaen og dermed gjøre utenlandske varer dyrere for forbrukerne innenlands"],
      explanation: "Logikken er enkel: hvis rollen som råvareeksportør er problemet, må landet bytte rolle. Og siden ingen bytter rolle av seg selv i et marked der de etablerte er langt foran, må staten gjøre det.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom strukturalisme og avhengighetsteori?",
      options: ["Om skjevheten kan reformeres med riktig politikk, eller om den er systemisk", "Om forklaringen plasserer årsaken innenfor eller utenfor det aktuelle landets grenser", "Om analysen bygger på økonomiske data eller på historiske og politiske betraktninger", "Om teorien er utviklet i Latin-Amerika eller i akademiske miljøer i det globale nord"],
      explanation: "Feil #3 i registeret. De deler diagnose — sentrum og periferi, skjev arbeidsdeling — men strukturalismen er reformistisk og avhengighetsteorien systemkritisk.",
    },
    {
      question: "Hvorfor stoppet ISI i det andre industritrinnet?",
      options: ["Hjemmemarkedet var for lite, den nye industrien trengte selv import, og landet tjente ikke valutaen", "Arbeidskraften manglet den tekniske kompetansen tyngre industri krever for å drives lønnsomt", "Tollmurene utløste mottiltak fra handelspartnerne som stengte eksportmarkedene for landene", "Statlige selskaper viste seg gjennomgående ute av stand til å drive tyngre industri effektivt over lengre tid"],
      explanation: "Resultatet var en skvis: industrien krevde import, importen krevde valuta, og valutaen måtte fortsatt komme fra råvareeksporten strategien skulle gjøre landet uavhengig av.",
    },
    {
      question: "Hva er argumentet for å beskytte en ung industri, og hva gikk galt i praksis?",
      options: ["Den kan ikke konkurrere fra dag én — men vernet skapte interesser som sørget for at det aldri ble fjernet", "Den mangler kapital i oppstartsfasen — men statlige lån ble gitt til prosjekter uten lønnsomhet", "Den trenger tid til å utvikle egen teknologi — men teknologien ble uansett importert ferdig fra industrilandene", "Den må bygge opp et hjemmemarked først — men kjøpekraften i befolkningen var for lav til det"],
      explanation: "Beskyttelsen var ment å være MIDLERTIDIG. Det midlertidige ble permanent — ikke fordi teorien sa det, men fordi politikk har sin egen logikk.",
    },
    {
      question: "Hva er ECLA, og hvorfor er organisasjonen relevant?",
      options: ["FNs økonomiske kommisjon for Latin-Amerika — miljøet strukturalismen ble formulert i", "En sammenslutning av latinamerikanske sentralbanker som samordnet valutapolitikken i regionen", "En handelsblokk opprettet for å gjennomføre ISI-strategien på tvers av landegrensene i regionen", "Et forskningsinstitutt finansiert av Verdensbanken for å studere utvikling i det globale sør"],
      explanation: "Prebisch ledet kommisjonen. Dette er første gang en utviklingsteori formuleres fra det globale sør, av økonomer som selv hadde erfaringen, med en internasjonal organisasjon i ryggen.",
    },
    {
      question: "Hvorfor er begrepsparet sentrum–periferi en kilde til sammenblanding?",
      options: ["Fordi både strukturalismen og avhengighetsteorien bruker det, men trekker ulike konklusjoner", "Fordi det brukes både geografisk og funksjonelt, avhengig av hvilken forfatter man leser", "Fordi det opprinnelig kommer fra geografifaget og har en annen betydning der enn i økonomi", "Fordi grensen mellom de to kategoriene har flyttet seg betydelig siden begrepsparet først ble innført"],
      explanation: "Å bruke begrepsparet er ikke i seg selv å være avhengighetsteoretiker. Strukturalismen mener posisjonen kan endres gjennom politikk; avhengighetsteorien mener den er systemisk.",
    },
    {
      question: "Hva skiller ISI fra eksportledet industrialisering?",
      options: ["ISI retter produksjonen mot hjemmemarkedet og skjermer den; eksportledet utsetter den for konkurranse", "ISI bygger tungindustri fra første stund, mens eksportledet begynner med enkle forbruksvarer og bygger seg oppover", "ISI er statsdrevet, mens eksportledet industrialisering forutsetter at staten holder seg helt unna", "ISI gjelder store land med eget marked, mens eksportledet bare er mulig for små kystnasjoner"],
      explanation: "Skalaen er poenget: hjemmemarkedet setter et tak, verdensmarkedet gjør det i prinsippet ikke. Men flere østasiatiske land begynte med en ISI-liknende fase — «ISI feilet, eksport lyktes» er for enkelt.",
    },
    {
      question: "Hvordan bør gjeldskrisens rolle i ISI-epokens slutt beskrives presist?",
      options: ["Rentesjokket og prisfallet kom utenfra — at ISI endte i krise, betyr ikke at ISI forårsaket den", "Gjeldskrisen var det uunngåelige resultatet av at ISI aldri kunne bli selvfinansierende over tid", "Krisen skyldtes at långiverne trakk seg ut samtidig, ikke noe ved landenes egen økonomiske politikk", "Krisen rammet bare land som hadde forlatt ISI til fordel for tidlig liberalisering av økonomien"],
      explanation: "Å blande sammenfall med årsak er en vanlig svakhet her. Valutagapet ble finansiert med lån; da rentene steg og råvareprisene falt, ble gjelden ubetjenbar.",
    },
    {
      question: "Hva er den mest presise landingen på spørsmålet om ISI virket?",
      options: ["Den virket for det første industritrinnet og manglet svar på det andre", "Den virket i store land og feilet i små, slik at strategien i seg selv var nøytral", "Den virket så lenge råvareprisene var høye, og feilet da de falt på 1980-tallet", "Den virket ikke, siden alle landene som fulgte den, endte med gjeldskrise til slutt"],
      explanation: "Om det skyldes strategien eller markedsstørrelsen, er nettopp uenigheten — og en besvarelse som sier det, har landet uten å være vag.",
    },
    {
      question: "Hva er den vanligste feilbruken av ISI-erfaringen?",
      options: ["Å bruke den som argument mot statlig industripolitikk i sin alminnelighet", "Å bruke den som bevis for at tollmurer alltid skader det landet som innfører dem", "Å bruke den som eksempel på at internasjonale organisasjoner gir dårlige råd", "Å bruke den som forklaring på hvorfor Latin-Amerika falt bak Øst-Asia i vekst"],
      explanation: "De østasiatiske landene som lyktes, hadde minst like aktiv stat. Forskjellen var at støtten var knyttet til EKSPORTPRESTASJON — en målestokk utenfor landets egen kontroll.",
    },
    {
      question: "Hva er «hjemmemarkedets tak»?",
      options: ["Grensen markedets størrelse setter for hvor langt innoverrettet industrialisering kan komme", "Den øvre grensen for hvor mye toll et land kan innføre uten å utløse mottiltak fra andre", "Det punktet der innenlandsk etterspørsel er mettet og prisene begynner å falle på alle varer", "Den andelen av forbruket som må dekkes innenlands for at strategien skal regnes som vellykket"],
      explanation: "Mekanismen er skalafordeler: bilfabrikker, stålverk og kjemisk industri krever volum et lite marked ikke kan avta. Det forklarer hvorfor strategien traff ulikt i store og små land.",
    },
    {
      question: "Hva menes med en «strukturell» forklaring?",
      options: ["En forklaring som viser til varige mønstre i organiseringen, ikke til aktørers valg eller egenskaper", "En forklaring som bygger på brede statistiske sammenhenger framfor på historiske enkelttilfeller i hvert land", "En forklaring som ser på hele økonomien samlet i stedet for på enkeltnæringer hver for seg", "En forklaring som legger vekt på institusjoner og lovverk framfor på kultur og holdninger"],
      explanation: "Modernisering forklarer med EGENSKAPER ved landet; strukturalismen med POSISJON i et system. Det er to forskjellige slags forklaringer, ikke bare to ulike svar.",
    },
    {
      question: "Hvordan bør en besvarelse omtale påstanden om fallende bytteforhold?",
      options: ["Som empirisk omstridt for den langsiktige trenden, men med ubestridte svingninger", "Som empirisk bekreftet for alle råvarer i hele perioden fra 1950 og fram til i dag", "Som en teoretisk modell uten empirisk innhold, brukt til å illustrere et prinsipp", "Som gyldig bare for jordbruksråvarer, siden mineraler har hatt en annen prisutvikling"],
      explanation: "Påstanden holder for enkelte perioder og varer, og ikke for andre. Det som ikke er omstridt, er at råvareprisene SVINGER kraftig — en selvstendig grunn til at rollen er sårbar.",
    },
    {
      question: "Hvorfor splittet den latinamerikanske tradisjonen seg?",
      options: ["Da ISI stoppet, sto valget mellom å si at politikken var feil utformet eller at premisset om reformerbarhet var galt", "Fordi ECLA mistet finansieringen sin, og forskerne spredte seg til en rekke ulike universiteter rundt om i regionen", "Fordi militærkupp i flere land gjorde det umulig å forske fritt på økonomisk politikk", "Fordi en yngre generasjon økonomer var utdannet i marxistisk teori framfor i keynesiansk"],
      explanation: "Strukturalistene holdt i hovedsak på det første, avhengighetsteoretikerne valgte det andre. Dette er et av fagets klareste eksempler på at en teori vokser ut av en ERFARING, ikke bare av en tanke.",
    },
    {
      question: "Hvorfor er strukturalismen viktig selv om den sjelden er hovedtema?",
      options: ["Uten den henger ikke Del 2 sammen — den forklarer hvor avhengighetsteorien kommer fra", "Fordi den er den eneste teorien i pensum som ble utviklet av økonomer med praktisk erfaring", "Fordi den gir det empiriske grunnlaget de øvrige teoriene i Del 2 bygger sine påstander på", "Fordi sensorveiledningene krever at alle teoriene i pensum nevnes i enhver A-besvarelse"],
      explanation: "En kandidat som hopper over den, får to teorier som står steilt mot hverandre uten noe imellom — og klarer da sjelden å forklare hvorfor uenigheten oppsto.",
    },
    {
      question: "Hva skal IKKE tilskrives Prebisch?",
      options: ["Avhengighetsteorien — han var reformist og arbeidet innenfor internasjonale institusjoner", "Analysen av fallende bytteforhold, som ble utviklet av andre økonomer i kommisjonen", "Begrepsparet sentrum og periferi, som stammer fra en eldre europeisk forskningstradisjon", "ISI-strategien, som han uttrykkelig advarte mot i sine senere arbeider om handelspolitikk"],
      explanation: "Frank og de andre avhengighetsteoretikerne bygde på ham og gikk lenger enn han var villig til. Å tilskrive ham deres konklusjon er en av de vanligste tilskrivningsfeilene i faget.",
    },
    {
      question: "Hva bør en besvarelse si om strukturalismens relevans i dag?",
      options: ["At premisset om en todelt verdensøkonomi er svekket, men at spørsmålet om posisjon er blitt mer aktuelt", "At teorien er fullstendig forlatt etter at ISI mislyktes og nyliberalismen tok over på 1980-tallet", "At den er relevant for råvareeksporterende land, men ikke for land med diversifisert økonomi", "At den bare har historisk interesse i dag, siden hele den internasjonale arbeidsdelingen er grunnleggende endret"],
      explanation: "Debatten om verdikjeder stiller nøyaktig samme spørsmål: hvor i kjeden verdien skapes, og hvem som sitter igjen med den. Et land som monterer uten å eie design, likner råvareeksportøren.",
    },
    {
      question: "Hva er grepet som løfter en besvarelse der strukturalismen sammenliknes med modernisering?",
      options: ["Å vise at de forklarer med ulike SLAGS årsaker — egenskaper mot posisjon — ikke bare med ulike årsaker", "Å telle opp hvor mange land som passer med hver av de to teoriene, og deretter la flertallet avgjøre saken", "Å vise at strukturalismen er nyere og derfor bygger på et bedre empirisk grunnlag", "Å påpeke at begge teoriene er utviklet av økonomer og derfor overser politiske forhold"],
      explanation: "Det hever drøftingen fra å veie argumenter til å si noe om hva slags uenighet det er. Men grepet er verdiløst uten et konkret eksempel — ellers blir det en frase.",
    },
    {
      question: "Hva var ISIs faktiske resultat i den tidlige fasen?",
      options: ["Industri for enkle forbruksvarer ble bygget opp, og importandelen av ferdigvarer falt", "Veksten uteble fra første stund, siden tollmurene straks utløste handelskonflikter", "Landene oppnådde selvforsyning med industrivarer i løpet av det første tiåret", "Resultatene varierte helt tilfeldig mellom landene, uten noe gjenkjennelig mønster i utfallet"],
      explanation: "Strategien var ikke urealistisk — den gjorde det den lovet i den fasen der oppgaven var enklest. Det skal med i en drøfting.",
    },
    {
      question: "Hva må være sant for at påstanden «ISI var feil strategi» skal holde?",
      options: ["At et alternativ var tilgjengelig som ville gitt bedre resultat for de samme landene på samme tid", "At alle landene som forsøkte strategien, endte med dårligere økonomi enn de startet med", "At de teoretiske forutsetningene bak hele strategien er blitt tilbakevist av senere forskning på feltet", "At strategien ble anbefalt av eksperter som senere har erkjent at rådet var feilaktig"],
      explanation: "Å konstatere at det gikk dårlig, er ikke nok — det forutsetter at noe annet ville gått bedre. Det eksportrettede alternativet forutsatte dessuten markedsadgang som ikke var like tilgjengelig for alle på 1950-tallet.",
    },
    {
      question: "Hvilken jobb gjør ISI som empirisk anker i en A-besvarelse?",
      options: ["Den er en teori som faktisk ble gjennomført i stor skala, og kan derfor vurderes på utfall", "Den viser at utviklingsteorier alltid mislykkes når de omsettes i praktisk politikk", "Den gir et tallgrunnlag som lar kandidaten sammenlikne flere land kvantitativt i selve besvarelsen", "Den knytter Del 2 til Del 3 om bistand, siden begge handler om statlige overføringer"],
      explanation: "Få utviklingsteorier har en like konkret prøve. En teori som bare har vært diskutert, kan vurderes på sin logikk; en som er gjennomført, kan også vurderes på hva som skjedde.",
    },
  ],
  'utv1000-2-3': [
    {
      question: "Hva forklarer avhengighetsteorien underutvikling med?",
      options: ["At den kapitalistiske verdensøkonomien aktivt produserer den", "At tradisjonelle strukturer innenlands hindrer vekst", "At de nye statene etter avkoloniseringen manglet forvaltningskapasitet", "At råvareeksportører møter en skjev arbeidsdeling som kan rettes opp med målrettet industripolitikk og vern av ung industri"],
      explanation: "Underutvikling er ikke et fravær av modernitet, men et resultat: velstanden i den ene enden og fattigdommen i den andre er to sider av samme prosess. Den siste avledningen beskriver strukturalismen, som deler diagnosen, men mener skjevheten kan reformeres.",
    },
    {
      question: "Hva er det avgjørende skillet mellom strukturalisme og avhengighetsteori?",
      options: ["Om skjevheten i verdensøkonomien kan reformeres bort med riktig politikk, eller er innebygd i systemet selv og dermed ikke lar seg reformere", "Om analysen tar utgangspunkt i Latin-Amerika eller i Afrika", "Om årsaken plasseres inne i landet eller i forholdet mellom land", "Om forklaringen bygger på handelsstatistikk eller på en teoretisk modell"],
      explanation: "De deler diagnosen — en skjev internasjonal arbeidsdeling — men ikke konklusjonen. Strukturalismen er reformistisk; avhengighetsteorien mener skjevheten er innebygd. Å plassere årsaken utenfor landet gjør begge to, så det skiller dem ikke.",
    },
    {
      question: "Hva betyr Franks uttrykk «utvikling av underutvikling»?",
      options: ["At den samme prosessen som utviklet noen områder, underutviklet andre", "At utviklingspolitikken gjorde mottakerlandene fattigere", "At fattige områder utvikler seg når de får kapital og teknologi utenfra", "At begrepet utvikling selv har en historie og har skiftet innhold fra økonomisk vekst til grunnbehov og videre til bærekraft"],
      explanation: "Uttrykket er bevisst provoserende: det bruker ordet «utvikling» om det motsatte utfallet for å vise at de to utfallene har samme årsak. For Frank er underutvikling ikke mangel på kapitalisme, men resultatet av kapitalisme.",
    },
    {
      question: "Hva beskriver Franks begrepspar metropol og satellitt?",
      options: ["En kjede der verdi flyttes trinnvis oppover", "Forholdet mellom en tidligere kolonimakt og dens tidligere koloni etter at selvstendigheten var oppnådd", "Et skille mellom hovedsteder med industri og landsbygd med jordbruk innenfor ett og samme land", "Et globalt system med tre soner der hver sone gjør en bestemt slags produksjon og får en bestemt del av verdien"],
      explanation: "Kjeden er poenget: en hovedstad kan være satellitt overfor utlandet og metropol overfor sitt eget innland. Tresonemodellen er Wallersteins verdenssystemteori, ikke Franks begrepspar.",
    },
    {
      question: "Hva er Franks innvending mot at fattige land er dualistiske?",
      options: ["At ingen sektor står utenfor systemet — også den fattigste landsbygda er knyttet til verdensmarkedet", "At skillet mellom moderne og tradisjonell sektor er upresist", "At de to sektorene følger ulike økonomiske lover og må analyseres hver for seg", "At begrepet stammer fra en europeisk erfaring og derfor ikke lar seg overføre til samfunn med en helt annen næringsstruktur"],
      explanation: "Det som ser ut som en uberørt tradisjonell sektor, er den nederste enden av kjeden. Poenget er at uenigheten med moderniseringsteorien er empirisk, ikke bare politisk — den gjelder beskrivelsen av virkeligheten.",
    },
    {
      question: "Hva er Amins begrep «ulik utvikling»?",
      options: ["At sentrum og periferi utvikler seg på ulike måter, ikke bare i ulikt tempo", "At inntektsforskjellene mellom land har vokst jevnt", "At noen land industrialiserer seg raskt mens andre står stille", "At utviklingen innad i et land er ujevnt fordelt mellom regioner, slik at hovedstadsområdet trekker fra resten av landet over tid"],
      explanation: "Skill dette fra «ulikhet», som er en forskjell i nivå. Ulik utvikling er en forskjell i form: to økonomier bygget etter ulike prinsipper, der periferiens er innrettet mot det sentrum etterspør.",
    },
    {
      question: "Hva er delinking hos Amin?",
      options: ["At et land lar egne behov, ikke verdensmarkedets signaler, bestemme hva som bygges opp — uten at det betyr at all handel opphører", "At et land stenger grensene helt for import og eksport", "At et land bryter de politiske båndene til sin tidligere kolonimakt", "At et land går fra råvareeksport til industrieksport og dermed flytter seg oppover"],
      explanation: "Det er ikke fravær av handel, men at prioriteringene settes innenfra. Innvendingene skal med: et land som frakobler seg, mister tilgang på teknologi, kapital og markeder.",
    },
    {
      question: "Hva er den meningsfulle analyseenheten i Wallersteins verdenssystemteori?",
      options: ["Verdenssystemet, ikke det enkelte landet", "Forholdet mellom to land om gangen, altså mellom en metropol og dens satellitt", "Regionen, fordi land i samme verdensdel deler både historisk erfaring og økonomisk struktur", "Det enkelte landet, fordi det er der politikken utformes av myndigheter med reell handlefrihet"],
      explanation: "Stater er deler av systemet, ikke motstykker til det. Da blir «hvor langt er dette landet kommet?» et dårlig stilt spørsmål, og «hvilken plass har det i arbeidsdelingen?» det riktige. Den nest siste avledningen beskriver Franks analyseenhet.",
    },
    {
      question: "Hvilke tre soner har Wallersteins verdenssystem?",
      options: ["Kjerne, semi-periferi og periferi", "Metropoler, satellitter og områder som ennå ikke er trukket inn i verdensøkonomien", "Sentrum, mellomsjikt og ytterkant, definert etter andel av verdensproduksjonen", "Industriland, nyindustrialiserte land og land som fortsatt i hovedsak eksporterer ubearbeidede råvarer"],
      explanation: "Sonene er posisjoner i en arbeidsdeling, ikke inntektsgrupper — og de er tre, ikke to. Metropol og satellitt er Franks begrepspar, ikke Wallersteins soner.",
    },
    {
      question: "Hvilken funksjon har semi-periferien i Wallersteins modell?",
      options: ["Den stabiliserer systemet og gjør at enkeltland kan stige og falle uten at arbeidsdelingen mellom sonene endres", "Den er en restkategori for land som verken passer i kjernen eller i periferien", "Den er sonen der mesteparten av verdens industriproduksjon foregår", "Den er et marked for kjernens varer og en leverandør av arbeidskraft til periferien"],
      explanation: "Semi-periferien deler interesser med begge de andre sonene og har derfor ingen entydig grunn til å velte systemet. Den er nettopp derfor svaret teorien har på at enkeltland stiger.",
    },
    {
      question: "Hva er forskjellen på Frank og Wallerstein?",
      options: ["Frank arbeider med kjeden metropol–satellitt, Wallerstein med ett verdenssystem i tre soner", "Frank tilhører strukturalismen, Wallerstein avhengighetsteorien", "Frank foreslo frakobling, mens Wallerstein forsvarte industrialisering bak tollmurer", "Frank mener underutvikling er produsert av verdensøkonomien, mens Wallerstein mener den skyldes svake institusjoner og manglende statlig styringsevne innenlands"],
      explanation: "De er tre beslektede, men ulike posisjoner: Frank med kjeden, Amin med ulik utvikling og delinking, Wallerstein med systemet i tre soner. Å slå dem sammen er feil #3.",
    },
    {
      question: "Hvorfor er det galt å kalle Prebisch avhengighetsteoretiker?",
      options: ["Han var reformist og mente skjevheten kunne rettes opp med politikk", "Han avviste at den internasjonale arbeidsdelingen betyr noe", "Han skrev flere tiår etter at avhengighetsteorien var etablert", "Han arbeidet med Afrika og ikke med Latin-Amerika, og analysen hans av bytteforhold gjaldt derfor en helt annen økonomisk struktur"],
      explanation: "Prebisch leverte analysen avhengighetsteoretikerne bygde videre på og radikaliserte, men han arbeidet innenfor internasjonale institusjoner hele livet. Å gjøre ham til systemkritiker sletter selve bruddet, og er den hyppigste enkeltfeilen i Del 2.",
    },
    {
      question: "Hva menes med at underutvikling er en relasjon og ikke et stadium?",
      options: ["At posisjonene forutsetter hverandre — det kan ikke finnes et sentrum uten en periferi, og alle land kan derfor ikke komme videre samtidig", "At underutvikling varer ved over lang tid og ikke er en forbigående fase", "At fattigdom må måles i forhold til andre land, ikke som et absolutt nivå", "At land beveger seg gjennom de samme fasene, men i ulikt tempo"],
      explanation: "Konsekvensen er dramatisk: er underutvikling et stadium, kan alle land i prinsippet komme videre samtidig. Er det en relasjon, kan de ikke — noen må være i den ene enden.",
    },
    {
      question: "Hva var avhengighetsteorien et svar på?",
      options: ["At import-substituerende industrialisering ikke innfridde, og at avkoloniseringen ga selvstendige stater med uendrede økonomiske roller", "At gjeldskrisen på 1980-tallet stengte kapitalmarkedet for latinamerikanske land", "At de internasjonale finansinstitusjonene stilte stadig strengere lånevilkår", "At moderniseringsteorien bygde på et for snevert datagrunnlag fra noen få land"],
      explanation: "Reformforsøket hadde vært gjennomført i stor skala, og det andre industritrinnet lot seg ikke ta — det gjorde spørsmålet om reformerbarhet akutt. Gjeldskrisen og lånevilkårene kom først i neste fase, og hører til nyliberalismens historie.",
    },
    {
      question: "Hva er den tyngste innvendingen mot avhengighetsteorien?",
      options: ["Determinismen — teorien gir lite rom for at land i samme posisjon kan ende ulikt", "At den ikke skiller mellom vekst og bredere utvikling", "At den fratar nasjonale myndigheter ansvaret for egen politikk", "At den bygger på data fra en enkelt verdensdel i en uvanlig ustabil periode, og derfor ikke lar seg generalisere til andre regioner"],
      explanation: "Rask industrivekst i Sør-Korea og Taiwan fra 1960-tallet er det stående eksempelet. Innvendingen har også en metodisk side: det blir uklart hva som ville telle som et funn i strid med teorien.",
    },
    {
      question: "Hvordan bør Øst-Asia brukes som moteksempel mot avhengighetsteorien?",
      options: ["Som noe som utfordrer at posisjonen låser utfallet, men ikke avgjør om systemet er åpent for alle", "Som en bekreftelse på Rostows stadiemodell", "Som et eksempel på at frakobling fra verdensmarkedet virker", "Som et avgjørende bevis for at teorien er motbevist, siden land som følger markedets signaler kan bevege seg fritt oppover i arbeidsdelingen"],
      explanation: "At noen land stiger, viser ikke at alle kan — semi-periferien er nettopp plassen for dem som stiger. Og statene var svært aktive, så eksempelet svekker den strenge markedstroen like mye som den strenge avhengighetsteorien.",
    },
    {
      question: "Hva er avhengighetsteoriens eget svar på hva utvikling er?",
      options: ["Å bryte ut av en relasjon og få kontroll over egen produksjon", "Å avvise hele utviklingsbegrepet som en vestlig konstruksjon og i stedet søke alternativer forankret i lokal kunnskap", "Å nå det nivået av inntekt, helse og utdanning som de industrialiserte landene har oppnådd", "Å bygge opp det investeringsnivået som skal til for at veksten blir selvdrivende og ikke lenger krever ytre stimulans"],
      explanation: "Det handler ikke først om nivå, men om kontroll: hvem som bestemmer hva som produseres, og hvor verdien blir av. Å avvise utviklingsbegrepet som sådan er post-utviklingens posisjon, ikke avhengighetsteoriens.",
    },
    {
      question: "Hva er avhengighetsteoriens svar på hvordan utvikling kan oppnås?",
      options: ["Brudd, omforming av relasjonens vilkår eller endring av systemet som helhet — og nettopp her står teorien svakest", "Kapitaltilførsel for å lukke sparegapet, kombinert med teknologioverføring", "Deregulering, privatisering og åpning mot verdensmarkedet", "Bygging av egen industri bak tollmurer for gradvis å erstatte importerte ferdigvarer"],
      explanation: "En teori som forklarer godt hvorfor noe skjer, men gir få brukbare råd om hva som kan gjøres, har et problem — og det er en av de vanligste innvendingene. Den siste avledningen er strukturalismens ISI, ikke avhengighetsteoriens svar.",
    },
    {
      question: "Hva betyr det at avhengighetsteorien i sin strenge versjon bestrider positiv sum?",
      options: ["At sentrums vekst og periferiens tilbakegang er to sider av samme prosess", "At summen av verdiskapingen i verden er konstant over tid", "At fordelingen av handelsgevinsten avhenger av forhandlingsmakt", "At handel mellom land alltid gir en gevinst som er mindre enn de samlede kostnadene ved å opprettholde handelsforbindelsen over tid"],
      explanation: "Er det riktig, er bistand innenfor systemet i beste fall en lindring — og hele bistandstenkningen hviler på den motsatte antakelsen. Merk forbeholdet «i den strenge versjonen»: ikke alle går like langt.",
    },
    {
      question: "Hvilken styrke ved avhengighetsteorien må med i en drøfting?",
      options: ["Den forklarer at land kan være tett integrert i verdensmarkedet uten å industrialisere seg", "Den er blitt bekreftet av senere forskning på ulikhet", "Den gir presise anslag for hvor mye periferien taper på handel", "Den peker på konkrete tiltak som lar seg omsette i politikk raskt, og har derfor hatt stort gjennomslag i bistandsapparatet siden 1960-tallet"],
      explanation: "Dette er en anomali for stadiemodellen og et forventet utfall for avhengighetsteorien. Teorien gjorde også makt til et tema i faget — spørsmålet «hvem tjener på dette forholdet?» ble en legitim del av en utviklingsanalyse.",
    },
    {
      question: "Hva er innvendingen om at indre forhold forsvinner?",
      options: ["Styresett, institusjoner og konflikt påvirker utfallet", "Teorien behandler landene i periferien som ensartede, mens de har svært ulik størrelse og historie", "Teorien bygger på en økonomiforståelse som senere er blitt forlatt av de fleste økonomer", "Teorien overser at befolkningsvekst og press på ressurser er de viktigste enkeltårsakene til vedvarende fattigdom"],
      explanation: "Det er speilbildet av moderniseringsteoriens blindsone. Frank er ikke blind for indre forhold — han beskriver eliter med interesser knyttet til metropolen — men det er en forklaring av indre forhold ved ytre.",
    },
    {
      question: "Hva fikk avhengighetsteorien rett i, ifølge en rettferdig drøfting?",
      options: ["At handelsvilkår og hvor foredlingen skjer, har konsekvenser for hva et land sitter igjen med", "At bistand forsterker avhengigheten i stedet for å redusere den", "At land i periferien ikke kan industrialisere seg så lenge de deltar i verdensmarkedet", "At de landene som frakoblet seg verdensmarkedet, oppnådde raskere vekst enn de som forble tett integrert i det gjennom hele perioden"],
      explanation: "Formuleringen som virker: forklaringsapparatet er blitt kraftig kritisert, men spørsmålene teorien innførte, er blitt værende — de stilles i dag i forskning på globale produksjonskjeder.",
    },
    {
      question: "Hvor bør tyngdepunktet ligge i en Oppgave A om avhengighetsteori?",
      options: ["I drøftingsleddet og relevansleddet", "I det historiske bakteppet, siden det er der sammenhengen mellom teoriene blir synlig", "Jevnt fordelt mellom de tre leddene, som teller like mye hver i den samlede vurderingen", "I redegjørelsen, siden en presis framstilling av alle tre teoretikerne er forutsetningen for resten"],
      explanation: "Redegjørelsen er inngangsbilletten og har et tak. Uttellingen ligger i hva teorien var et svar på og i det begrunnede standpunktet om relevans i dag.",
    },
    {
      question: "Hva er det svakeste ved relevansformuleringen «noen mener teorien holder, andre at den er utdatert»?",
      options: ["Den refererer en uenighet i stedet for å ta stilling", "Den nevner ikke hvilke forskere som står på hver side, og mangler dermed pensumforankring", "Den bruker et hverdagslig språk som ikke holder akademisk mål på dette nivået", "Den er for kort til å fylle det tredje leddet i Oppgave A, som forventes å utgjøre en betydelig del av svaret"],
      explanation: "Formuleringen kan settes inn i et hvilket som helst svar uten å endre det. Det er feil #1: gjengivelse i stedet for drøfting — og relevansleddet er nettopp der et begrunnet eget standpunkt gir uttelling.",
    },
    {
      question: "Hva skiller «at land kan stige» fra «at systemet kan endres»?",
      options: ["Semi-periferien gjør det første mulig uten at det andre skjer", "Det første gjelder periferien, det andre kjernen", "Det første lar seg etterprøve, det andre er en normativ påstand", "Det første handler om økonomisk vekst målt i produksjon, mens det andre handler om politiske og institusjonelle forhold i det internasjonale samfunnet"],
      explanation: "Formuleringen som virker: semi-periferien er det som gjør at mobilitet for enkeltland ikke er det samme som endring av systemet. Å blande de to er den vanligste feilen i drøftingen av Øst-Asia.",
    },
    {
      question: "Hvorfor er «endogen mot eksogen» en god åpning på sammenligningen av modernisering og avhengighet?",
      options: ["Nesten hele uenigheten lar seg uttrykke med det ene begrepsparet", "Det viser at avhengighetsteorien er den nyere posisjonen", "Det gjør det unødvendig å redegjøre for hver teori først", "Det er de to begrepene som brukes mest gjennomgående i den delen av pensumlitteraturen som behandler utviklingsteorienes historie"],
      explanation: "«Teoriene skiller seg først og fremst i om forklaringen er endogen eller eksogen» er en langt strammere åpning enn «de er uenige om mye». Men ikke overdriv: Frank forklarer også indre forhold — ved ytre.",
    },
    {
      question: "Hva er grepet som løfter en besvarelse om avhengighetsteoriens svakheter?",
      options: ["Å vise at svakheten følger av forklaringsformen, ikke av slurv", "Å vise til at teorien bærer preg av sin egen samtid", "Å sammenligne teorien med nyere forskning på produksjonskjeder", "Å sette opp en fullstendig liste over alle forholdene teorien ikke tar hensyn til, ordnet etter hvor alvorlige de er for konklusjonen"],
      explanation: "En teori som forklarer med posisjon, får vanskelig for å si hvorfor to land i samme posisjon ender ulikt. Kraften og blindsonen er samme egenskap sett fra to kanter. Å avvise en teori på grunn av dens opphav er derimot en feilslutning.",
    },
    {
      question: "Hva er den vanligste enkeltfeilen når Wallerstein gjengis?",
      options: ["At semi-periferien utelates, slik at modellen blir tosonet og mister det leddet som forklarer hvorfor systemet er stabilt", "At verdenssystemteorien tilskrives Frank i stedet for Wallerstein", "At systemet beskrives som kapitalistisk i stedet for som en blandingsøkonomi", "At teorien framstilles som en forklaring på ulikhet innad i land"],
      explanation: "En tosonet Wallerstein er ikke Wallerstein. Semi-periferien har en funksjon i modellen — den stabiliserer systemet — og det er det billigste poenget i hele kapitlet å ta.",
    },
  ],
  'utv1000-2-4': [
    {
      question: "Hva er nyliberalisme?",
      options: ["Posisjonen at markedet, ikke staten, er den beste motoren for utvikling", "Kravet om at rike land skal åpne sine markeder", "En strategi for å bygge opp egen industri bak tollmurer i stedet for å importere", "Læren om at utvikling skjer i faste stadier som alle samfunn passerer i samme rekkefølge, drevet fram av offentlig investering og planlegging"],
      explanation: "Statens oppgave er å sikre rammene markedet trenger, ikke å styre økonomien selv. De tre virkemidlene er deregulering, privatisering og liberalisering av handel og kapitalbevegelser. Stadiemodellen er moderniseringsteoriens, ikke nyliberalismens.",
    },
    {
      question: "Hvorfor er det viktig å skille nyliberalismen som ideologi fra nyliberalismen som historisk fase?",
      options: ["Fordi spørsmålet om relevans i dag betyr ulike ting for de to", "Fordi ideologien ble formulert i Storbritannia mens fasen ble gjennomført i det globale sør av internasjonale institusjoner", "Fordi bare den ene av dem er behandlet i pensumlitteraturen, mens den andre hører hjemme i den økonomiske faglitteraturen", "Fordi ideologien bygger på Adam Smith mens fasen bygger på Friedman, og de to har svært ulike syn på hva staten skal gjøre"],
      explanation: "Ideologien kan være levende selv om fasen er over, og fasen kan ha satt spor som varer uavhengig av hva folk nå mener. Skillet er det som gjør relevansspørsmålet besvarlig.",
    },
    {
      question: "Hvordan forholder nyliberalismen seg til klassisk liberalisme?",
      options: ["Den viderefører troen på markedet, men gjør den til et politisk program som må gjennomføres — og det krever en sterk, ikke en fraværende stat", "Den bryter fullstendig med den, siden klassisk liberalisme forsvarte statlig styring", "Den er en ren videreføring uten selvstendige nye elementer", "Den er utviklet uavhengig av den, i en helt annen faglig tradisjon"],
      explanation: "Både arv og brudd, og begge ledd skal stå. Klassisk liberalisme beskrev i hovedsak et marked som fantes; nyliberalismen bygger markeder der de ikke er, og bruker statsmakt til det.",
    },
    {
      question: "Hva er arbeidsdelingen mellom Friedman og Thatcher i en besvarelse?",
      options: ["Friedman gir argumentet for markedet, Thatcher gjennomføringen i politikk", "Friedman utformet programmene, Thatcher finansierte dem", "Friedman arbeidet med det globale sør, Thatcher med industrialiserte land og deres handelspolitikk overfor omverdenen", "Friedman var kritiker av Washington-konsensus, Thatcher var dens fremste forsvarer i internasjonale forhandlinger"],
      explanation: "Ett navn til hver, og feil #6 — teori uten navngitt avsender — er unngått. Merk at strukturtilpasningsprogrammene ble utformet av internasjonale institusjoner, ikke av Friedman.",
    },
    {
      question: "Hva er deregulering?",
      options: ["Å fjerne offentlige regler som binder økonomiske aktører", "Å overføre statlige selskaper til private", "Å redusere de offentlige utgiftene for å få budsjettunderskuddet ned", "Å fjerne toll og andre hindre for handel over landegrensene, slik at varer kan omsettes fritt"],
      explanation: "Deregulering endrer reglene; privatisering endrer eierskapet. Et privatisert selskap kan være strengt regulert, og et statlig selskap kan operere uten regler — derfor er de to ikke det samme.",
    },
    {
      question: "Hva er de to ulike innvendingene mot privatisering?",
      options: ["Én gjelder gjennomføringen, én gjelder prinsippet", "Én gjelder prisen selskapene selges for, én gjelder hvem som får kjøpe dem", "Én gjelder virkningen på sysselsettingen, én gjelder virkningen på statens inntekter fra selskapene", "Én gjelder at private eiere er mindre effektive enn staten, og én gjelder at overskuddet forsvinner ut av landet i stedet for å bli reinvestert der"],
      explanation: "Innvendingen om gjennomføring — salg under press og uten konkurranse gir private monopoler — kan møtes med bedre gjennomføring. Innvendingen om prinsippet — at betalingsevne er en annen fordelingsnøkkel enn behov for tjenester alle må ha — kan det ikke.",
    },
    {
      question: "Hva er Washington-konsensus?",
      options: ["Politikkpakken som fra 1980-tallet ble den rådende oppskriften hos Det internasjonale valutafondet, Verdensbanken og amerikanske myndigheter", "En avtale mellom giverland om hvor stor andel av inntekten de skulle gi i bistand", "Enigheten blant utviklingsforskere om at bistand virker best uten vilkår", "En erklæring fra FN om hvilke mål utviklingspolitikken skulle styres etter"],
      explanation: "Innholdet er stabilisering, liberalisering og privatisering. Merk at «konsensus» er en beskrivelse av at disse institusjonene var enige, ikke en attest på at faget var det.",
    },
    {
      question: "Hva er strukturtilpasningsprogrammer (SAP)?",
      options: ["Lån gitt mot at mottakerlandet gjennomfører bestemte økonomiske reformer", "Bistand øremerket oppbygging av veier, kraftverk og annen infrastruktur", "Programmer for å tilpasse produksjonen i fattige land til klimaendringer", "Overføringer som gis direkte til fattige husholdninger uten at det stilles krav til hva pengene brukes til"],
      explanation: "Programmene var virkemidlet som gjorde Washington-konsensus til praksis. Å beskrive dem som «lån til fattige land» er feil #8 — vilkårsdimensjonen er hele poenget, og uten den har du beskrevet bistand.",
    },
    {
      question: "Hva er poenget med vilkår (conditionality)?",
      options: ["Utbetaling gjøres avhengig av bestemte tiltak — et låneteknisk virkemiddel med politiske virkninger, og begge deler må stå", "Långiveren krever sikkerhet i landets naturressurser", "Mottakeren må betale tilbake raskere enn ved ordinære lån", "Bistanden må brukes til å kjøpe varer fra giverlandet"],
      explanation: "Begrunnelsen er reell: en långiver til et land i betalingskrise har grunn til å ville se at lånet endrer noe. Maktdimensjonen er like reell: beslutninger som ellers ville vært avgjort innenlands, flyttes ut av landets politiske organer.",
    },
    {
      question: "Hvilken rolle spilte gjeldskrisen for nyliberalismens gjennomslag?",
      options: ["Den gjorde oppskriften til et krav i stedet for et råd", "Den førte til at Verdensbanken ble opprettet", "Den gjorde at landene i det globale sør sluttet seg sammen i felles forhandlinger", "Den viste at import-substituerende industrialisering hadde vært den riktige strategien likevel, siden gjelden kom av import"],
      explanation: "Et land som ikke kan betjene gjelden, må reforhandle — og den som reforhandler, kan stille vilkår. Dette er en av de klareste koblingene mellom historisk situasjon og teoretisk gjennomslag i hele faget.",
    },
    {
      question: "Hva var begrunnelsen for strukturtilpasning, i sin sterkeste form?",
      options: ["Land som ikke kunne betale gjeld eller lønninger, med høy inflasjon og statlige selskaper som gikk med tap — å fortsette som før var ikke et alternativ", "At markedsøkonomi er moralsk overlegen planøkonomi", "At de fattige landene selv hadde bedt om denne politikken", "At bistand uten vilkår hadde vist seg å øke korrupsjonen"],
      explanation: "En drøfting av strukturtilpasning som ikke kan gjengi hva programmene skulle løse, vurderer et tiltak uten å nevne problemet. Prisreguleringer, overvurderte valutakurser og statlige monopoler var de konkrete ubalansene som ble pekt på.",
    },
    {
      question: "Hvordan skal de dokumenterte kostnadene ved strukturtilpasning behandles?",
      options: ["Som forskningsfunn med sitt faktiske belegg — men uten at funnene alene avgjør om programmene samlet sett var riktige", "Som meninger fra kritikere som må balanseres mot andre meninger", "Som bevis for at programmene var mislykkede fra begynnelsen av", "Som forhold som ligger utenfor pensum, siden de gjelder gjennomføringen av programmene i det enkelte land og ikke selve den teoretiske posisjonen"],
      explanation: "Kutt som rammet skjevt, umiddelbar priseffekt av fjernede subsidier og økt ulikhet i mange land i perioden er godt belagt. Å pakke robuste funn inn i «noen mener» er ikke nøytralitet, men upresist — og å blande funn og dom er den vanligste feilen i temaet.",
    },
    {
      question: "Hva skjedde med programmene utover 1990-årene?",
      options: ["Fattigdomsreduksjon, institusjoner og gjeldslette kom inn", "De ble avviklet helt og erstattet av nødhjelp", "De ble utvidet til også å omfatte land i den globale nord som hadde tilsvarende ubalanser", "De ble overtatt av FN, som førte dem videre med et sterkere sosialt innhold og med mottakerlandene i førersetet"],
      explanation: "Om dette var en reell justering eller i hovedsak en endring i form og språk, er omstridt — og begge lesningene skal stå. Å kjenne dem er det som gjør relevansleddet ditt selvstendig.",
    },
    {
      question: "Hva var nyliberalismen et svar på?",
      options: ["1970-årenes ubalanser, kostnadene ved statsdrevne strategier, og en gjeldskrise som ga virkemidlet", "Avkoloniseringen og behovet for å gi nye stater en utviklingsstrategi", "At avhengighetsteorien var blitt den dominerende posisjonen i faget", "At bistandsnivået hadde falt kraftig gjennom hele det foregående tiåret, slik at nye finansieringsformer måtte til for å opprettholde overføringene"],
      explanation: "Den lange etterkrigsveksten tok slutt, statlige selskaper og vernede næringer hadde vist sine kostnader, og gjeldskrisen ga posisjonen et virkemiddel den ellers ikke ville hatt.",
    },
    {
      question: "Hvordan forklarer nyliberalismen fattigdom?",
      options: ["Med hindringer for markedet", "Med at landet har en bestemt posisjon i en global arbeidsdeling der verdien tilegnes andre steder", "Med tradisjonelle holdninger og institusjoner som hindrer investering og sparing", "Med at befolkningsveksten overstiger veksten i matproduksjon og tilgjengelige ressurser"],
      explanation: "Prisreguleringer som gjør produksjon ulønnsom, statlige monopoler, handelsbarrierer og tungt regelverk. Merk at årsaken dermed plasseres inne i landet — nyliberalismen deler moderniseringens endogene blikk.",
    },
    {
      question: "Hva er nyliberalismens eget svar på hva utvikling er?",
      options: ["Økonomisk vekst gjennom effektiv ressursbruk, der fordelingen antas å følge", "En utvidelse av hva folk faktisk kan gjøre og være, der inntekt bare er et middel", "At landet får kontroll over egen produksjon og over hvor verdien blir av", "At samfunnet beveger seg fra tradisjonelle til moderne institusjoner og verdier gjennom en rekke faste stadier"],
      explanation: "Det er et smalere utviklingsbegrep enn de fleste andre i faget, og en av grunnene til at menneskelig utvikling ble formulert som et alternativ. Kapabilitetstenkningen er nettopp motposisjonen, ikke nyliberalismens eget svar.",
    },
    {
      question: "Hva er forholdet mellom moderniseringsteori og nyliberalisme?",
      options: ["De deler forklaringsformen — årsaken ligger inne i landet — og er motsatte i virkemiddel, siden den ene vil at staten skal gjøre mer og den andre mindre", "De er to navn på den samme posisjonen fra to ulike tiår", "De er motsatte på alle punkter og har ingenting til felles", "Nyliberalismen er en videreutvikling av moderniseringsteorien"],
      explanation: "Å kunne si begge deler er presisjonen som gir uttelling. Å slå dem sammen er feil #3, og å si at de er motsatte på alle punkter, mister det som gjør sammenblandingen forståelig.",
    },
    {
      question: "Hva slags stat forutsetter den nyliberale modellen?",
      options: ["En sterk, men avgrenset stat", "En stat som ikke griper inn i økonomien på noe punkt overhodet", "En stat som eier de viktigste selskapene, men lar prisene settes av markedet", "En stat som velger ut hvilke næringer som skal vokse og styrer kreditt og investering mot dem"],
      explanation: "Staten skal sikre eiendomsrett, kontraktshåndhevelse, konkurranse og stabile penger — rammene markedet ikke lager selv. «Nyliberalismen vil avskaffe staten» er en stråmann som er lett å rive ned, og en besvarelse bygget på den, teller ikke som drøfting.",
    },
    {
      question: "Hva viser rask industrivekst i Sør-Korea og Taiwan fra 1960-tallet?",
      options: ["At rask vekst har skjedd med en stat som gjorde mer, ikke mindre, enn oppskriften anbefaler", "At markedet alene er tilstrekkelig når handelsbarrierene først er fjernet", "At frakobling fra verdensmarkedet er en farbar vei for land i periferien", "At avhengighetsteorien gir den beste forklaringen på hvorfor noen land industrialiserer seg og andre ikke"],
      explanation: "Begge land satset tungt på verdensmarkedet, men med aktiv statlig styring av kreditt og investering. Eksempelet treffer begge ytterposisjonene: det svekker både den rene markedsmodellen og den strenge avhengighetsteorien.",
    },
    {
      question: "Hva er den faglig tyngste innvendingen mot den nyliberale oppskriften?",
      options: ["At markeder forutsetter institusjoner som må være på plass først", "At markedsøkonomi ikke lar seg forene med demokrati", "At oppskriften aldri ble gjennomført i praksis noe sted", "At vekst i produksjonen ikke lar seg måle på en pålitelig måte i land med stor uformell sektor"],
      explanation: "Privatiseres et statlig monopol uten fungerende tilsyn og konkurranse, blir resultatet gjerne et privat monopol med mindre offentlig innsyn. Argumentet er sterkt fordi det ikke avviser modellen — det bestrider rekkefølgen og tempoet.",
    },
    {
      question: "Hva er fordelingsinnvendingen mot nyliberalismen?",
      options: ["Fordelingen følger ikke av veksten av seg selv", "Vekst er umulig uten omfordeling fra rike til fattige land gjennom internasjonale overføringer", "Markedet fordeler alltid mer skjevt enn politiske vedtak gjør, uansett hvilken sektor det gjelder", "Inntektsforskjeller er uten betydning så lenge den samlede produksjonen i økonomien vokser over tid"],
      explanation: "Vekst kan komme i sektorer som sysselsetter få, eller hos eiere framfor arbeidstakere. Nyanseringen hører med: at vekst ikke automatisk gir bedre levekår, er ikke det samme som at den ikke gjør det.",
    },
    {
      question: "Hvilket av disse er nyliberalismens sterkeste argument, gjengitt rettferdig?",
      options: ["Priser bærer informasjon om knapphet og behov som ingen planlegger kan samle inn", "Private eiere er alltid mer kompetente enn offentlig ansatte ledere", "Offentlig sektor er i seg selv en byrde for samfunnsøkonomien", "Alle former for regulering fører før eller siden til at varer blir dyrere og vanskeligere å få tak i for vanlige forbrukere"],
      explanation: "Der prisene settes politisk, forsvinner signalet, og feilinvesteringer kan fortsette lenge uten å bli oppdaget. De øvrige er karikaturer — og en drøfting som river ned en karikatur, teller ikke.",
    },
    {
      question: "Hvordan bør spørsmålet «er nyliberalismen fortsatt dominerende?» besvares på toppnivå?",
      options: ["Ved å skille ideologi fra historisk fase, og si at fasen er avsluttet mens rammen i hovedsak består — med konkret belegg på begge deler", "Ved å konstatere at den er avløst, siden bærekraftsmålene forutsetter offentlig innsats", "Ved å konstatere at den består uendret, siden privat eierskap fortsatt er normalordningen", "Ved å slå fast at spørsmålet ikke lar seg besvare, siden begge sider har gode argumenter"],
      explanation: "Begge svar kan begrunnes stringent, og grepet er å si hva valget avhenger av. Å konkludere med at spørsmålet ikke lar seg besvare, er feil #1 i ny drakt — å referere en uenighet er ikke å drøfte den.",
    },
    {
      question: "Hva kjennetegner et relevansledd som får full uttelling?",
      options: ["Et standpunkt, en distinksjon som deler spørsmålet, og konkret belegg på hver del", "En fullstendig oversikt over alle posisjonene i debatten, ordnet kronologisk etter når de ble formulert", "En konklusjon om at begge sider har gode poenger, slik at framstillingen forblir balansert", "En henvisning til hva pensumlitteraturen selv konkluderer med om spørsmålet"],
      explanation: "«Noen mener … andre mener …» kan settes inn i et hvilket som helst svar uten å endre det. Relevansleddet er nettopp der et begrunnet eget standpunkt gir uttelling.",
    },
    {
      question: "Hva er den grunnleggende uenigheten i kontrasten marked mot stat?",
      options: ["Hvilken svikt som er farligst", "Om økonomisk vekst i det hele tatt er et rimelig mål for utvikling i land med svært lav inntekt og store sosiale behov", "Om utviklingspolitikk bør utformes av mottakerlandene selv eller av de internasjonale institusjonene som finansierer den", "Hvor stor andel av økonomien som bør være i offentlig eie for at fordelingen skal bli rettferdig"],
      explanation: "De to er ikke uenige om at både stat og marked kan svikte — markedet med monopol og skjev fordeling, staten med fangst og treghet. Uenigheten gjelder hvilken svikt som er verst, og det flytter sammenligningen fra to lister til én uenighet.",
    },
    {
      question: "Hva er kjernen i kontrasten mellom nyliberalisme og menneskelig utvikling?",
      options: ["De er uenige om hva som skal telles, ikke først og fremst om tallene", "De er uenige om hvorvidt bistand bør gis bilateralt eller gjennom multilaterale institusjoner", "De er uenige om hvor raskt reformer bør gjennomføres i land som er i betalingskrise", "De er uenige om hvorvidt fattigdom først og fremst skyldes forhold inne i landet eller forhold i verdensøkonomien"],
      explanation: "Nyliberalismen måler vekst i produksjon og inntekt; menneskelig utvikling måler utvidelsen av hva folk kan gjøre og være. To posisjoner kan være enige om alle tallene og likevel uenige om hvilket land som har utviklet seg mest.",
    },
    {
      question: "Hvorfor skal «nyliberalisme» brukes som analysebegrep og ikke som merkelapp?",
      options: ["Fordi et begrep som brukes om alt, forklarer ingenting", "Fordi begrepet bør unngås i akademiske tekster", "Fordi det er de involverte institusjonene selv som har innført betegnelsen", "Fordi det er nødvendig å vise hensyn til lesere som er uenige i den politiske vurderingen som ligger i ordet"],
      explanation: "Ordet brukes i offentligheten både som beskrivelse og som anklage. Tre regler: definer det ved første bruk, bruk det om posisjonen det beskriver, og skill mellom å beskrive og å vurdere. Dette er presisjon, ikke høflighet.",
    },
    {
      question: "Hva er tilskrivningsfellen med Adam Smith i dette kapitlet?",
      options: ["Å gjøre ham til nyliberalist — han hører til kontinuiteten, ikke til programmet, og skrev to hundre år tidligere uten befatning med et politisk program for å bygge markeder", "Å tilskrive ham argumentet om økonomisk og politisk frihet", "Å bruke ham som eksempel på at markedstenkning er gammel", "Å nevne ham i det hele tatt i en utviklingsoppgave"],
      explanation: "Adam Smith-arven dekker kontinuiteten fra klassisk liberalisme, og bare den. Bruddet — markedsbygging som politisk program — er nyliberalismens eget, og å skrive at «allerede Adam Smith foreskrev privatisering» er en oppdiktet tilskrivning.",
    },
  ],
  'utv1000-2-5': [
    {
      question: "Hva er post-utvikling?",
      options: ["Posisjonen at «utvikling» er en vestlig konstruksjon og en diskurs knyttet til modernitet", "Kritikken av at bistanden er for liten", "Teorien om at utvikling skjer etter at et land har industrialisert seg", "Posisjonen at utviklingspolitikken bør legges om fra store prosjekter til direkte overføringer til fattige husholdninger"],
      explanation: "Påstanden har tre ledd: begrepet skaper den inndelingen det later som det beskriver, prosjektet innfridde ikke, og alternativet ligger i lokal kunnskap og i hva folk selv vil. Med bare det andre leddet har du sagt at utvikling ikke virker, som er en langt svakere påstand.",
    },
    {
      question: "Hva er en diskurs i denne sammenhengen?",
      options: ["En etablert måte å snakke og tenke om noe på, som avgjør hvilke spørsmål som framstår som fornuftige og hvilke som ikke stilles", "En offentlig debatt mellom ulike faglige posisjoner", "Et sett av påstander som kan etterprøves empirisk", "En fremstilling som bevisst skjuler hvem som tjener på den"],
      explanation: "Diskurskritikk handler om hva som ikke blir spurt om, ikke om hvem som har uærlige hensikter. Innenfor utviklingsdiskursen er «hvordan får vi dette landet til å utvikle seg?» selvsagt, mens «hvem har bestemt at det skal?» faller utenfor.",
    },
    {
      question: "Hvorfor er «utvikling virker ikke» en dårlig gjengivelse av post-utvikling?",
      options: ["Fordi det er en påstand om resultater, mens post-utvikling er en påstand om tenkemåten", "Fordi post-utvikling mener at utvikling virker i noen land og ikke i andre", "Fordi post-utvikling ikke uttaler seg om bistandens virkninger i det hele tatt, siden posisjonen bare handler om språk", "Fordi formuleringen bruker et hverdagslig uttrykk i stedet for fagets egne begreper om måloppnåelse"],
      explanation: "Man kan mene at utviklingspolitikken har virket dårlig uten å bestride utviklingsbegrepet — det gjør både nyliberale og avhengighetsteoretikere. Å redusere posisjonen til resultatkritikk gjør den svakere og lettere å avvise enn den er.",
    },
    {
      question: "Hva skiller «alternativer til utvikling» fra «alternative utviklingsveier»?",
      options: ["Det første avviser rammen, det andre endrer bare veien", "Det første gjelder land i det globale sør, det andre gjelder alle land", "Det første er en akademisk posisjon, det andre er praktisk politikk som gjennomføres av organisasjoner og myndigheter i felten", "Det første legger vekt på økonomisk vekst, det andre på levekår og fordeling av godene i befolkningen"],
      explanation: "Alternative utviklingsveier beholder målet og endrer veien: mer deltakelse, mer lokal forankring. Bare det å avvise selve rammen, og la folk definere mål som ikke trenger handle om utvikling, er post-utvikling.",
    },
    {
      question: "Hva står post-utvikling i et annet forhold til enn de fire andre teoriene i Del 2?",
      options: ["Til premisset om at utvikling er noe som bør skje", "Til spørsmålet om staten eller markedet skal være motoren", "Til spørsmålet om årsaken til fattigdom ligger inne i landet eller i forholdet mellom land", "Til spørsmålet om hvor raskt reformer bør gjennomføres i land som befinner seg i en akutt betalingskrise"],
      explanation: "De fire andre er dypt uenige om hvordan utvikling oppnås, men deler premisset om at den bør skje. Post-utvikling bestrider premisset — derfor står den i et annet forhold til dem enn de står til hverandre.",
    },
    {
      question: "Hva er anti-politikk-maskinen hos Ferguson?",
      options: ["At utviklingsapparatet omformer politiske spørsmål om makt og fordeling til tekniske problemer som kan løses av eksperter", "At utviklingsprosjekter bevisst holdes utenfor politisk kontroll", "At bistand går til land uten fungerende demokrati", "At utviklingspolitikken avgjøres av institusjoner ingen har valgt"],
      explanation: "Mekanismen er at problembeskrivelsen tilpasses verktøyet: fattigdom som skyldes eierskap til jord, lar seg ikke løse med et prosjekt, mens «lav produktivitet på grunn av gamle metoder» lar seg det. «Maskin» sier at virkningen er systematisk, ikke at noen har uærlige hensikter.",
    },
    {
      question: "Hva er det avgjørende poenget i Fergusons analyse av prosjekters virkninger?",
      options: ["Apparatets viktigste virkninger er ikke de tilsiktede, og de inntreffer også når prosjektet mislykkes", "Prosjekter mislykkes fordi de er dårlig planlagt av folk uten lokalkunnskap", "Prosjekter lykkes oftere enn evalueringene gir inntrykk av", "Prosjekter bør evalueres av uavhengige forskere og ikke av dem som selv har finansiert og gjennomført dem"],
      explanation: "Et prosjekt kan mislykkes med sine egne mål og likevel etterlate infrastruktur, kontorer og et statsapparat med større tilstedeværelse enn før. Det er dette som gjør analysen til noe annet enn en evaluering.",
    },
    {
      question: "Hva finner Ferguson når han følger den nyliberale politikken til bakkenivå?",
      options: ["At styringen ikke forsvinner, men flyttes til andre aktører og blir mindre ansvarlig overfor dem den gjelder", "At staten trekker seg tilbake nøyaktig slik oppskriften beskrev", "At markedet overtar og gir bedre tjenester enn før", "At de landene som gjennomførte reformene raskest, også fikk de sterkeste virkningene på produksjon og sysselsetting"],
      explanation: "Der oppskriften ble beskrevet som tilbaketrekning av staten, finner han at styringsoppgaver overtas av selskaper, organisasjoner og prosjekter. Dette er den ene post-utviklingsobservasjonen som lar seg bruke direkte i et nyliberalismesvar.",
    },
    {
      question: "Hvordan leses uformell økonomi i utviklingsdiskursen, og hva er innvendingen?",
      options: ["Den leses som et forstadium som skal avløses av formell sysselsetting — men for mange er den den varige økonomien", "Den leses som et resultat av korrupsjon — men den skyldes mangel på arbeidsplasser", "Den leses som et lokalt særtrekk — men den finnes i alle land", "Den leses som en følge av strukturtilpasningsprogrammene — men den var utbredt før dem"],
      explanation: "Politikk som forutsetter at formalisering kommer av seg selv, treffer ikke der folk faktisk lever og arbeider. Det er en konkret, etterprøvbar innvending, og den viser at post-utviklingskritikken ikke bare er filosofi.",
    },
    {
      question: "Hvilken påstand skal ALDRI tilskrives Ferguson?",
      options: ["At bistand er nytteløs", "At utviklingsapparatet omformer politiske spørsmål til tekniske problemer", "At prosjekter har virkninger også når de ikke når sine egne mål", "At nyliberalismens virkninger på bakkenivå er mer sammensatte enn oppskriften tilsier"],
      explanation: "Han analyserer virkninger, ikke nytte. En analyse av at et apparat systematisk avpolitiserer problemer, er ikke en dom over om apparatet bør finnes — og «Ferguson viste at bistand er nytteløs» er den hyppigste feilen i dette kapitlet.",
    },
    {
      question: "Hva er blindgate-innvendingen mot post-utvikling?",
      options: ["At en posisjon som avviser all utvikling, mangler språk for reell fattigdomsbekjempelse", "At posisjonen er for vanskelig å forstå for dem den handler om", "At posisjonen bygger på studier fra bare ett land", "At posisjonen ble formulert på 1990-tallet og derfor ikke tar hensyn til hvordan utviklingspolitikken har endret seg siden da"],
      explanation: "Barnedødelighet, vanntilgang og skolegang har endret seg betydelig i mange land, med konkrete følger for hvordan folk lever. Innvendingen kan skjerpes: å avvise begrepet på vegne av andre er et standpunkt som gjelder folk som ikke er spurt.",
    },
    {
      question: "Hva er romantiseringsinnvendingen?",
      options: ["At vekten på lokal kunnskap kan skjule maktforhold på stedet", "At posisjonen overdriver hvor godt tradisjonelle jordbruksmetoder fungerer sammenlignet med moderne metoder i praksis", "At posisjonen undervurderer hvor mye teknologi har betydd for levekårene i det globale sør de siste tiårene", "At posisjonen bygger på et bilde av fortiden som aldri har eksistert"],
      explanation: "Et lokalsamfunn er ikke en enhet med én kunnskap og én interesse. Å vise til «lokalsamfunnets ønsker» kan skjule hvem på stedet som blir hørt — og dermed gjøre nøyaktig det post-utvikling anklager utviklingsapparatet for.",
    },
    {
      question: "Hva er representasjonsspørsmålet i denne debatten?",
      options: ["Hvem som snakker på vegne av hvem — et spørsmål som også rammer post-utvikling selv", "Hvorvidt mottakerlandene er representert i styrene til de internasjonale finansinstitusjonene", "Hvordan lokalsamfunn skal velge sine talspersoner i utviklingsprosjekter", "Om forskere fra det globale sør er tilstrekkelig representert i pensumlitteraturen i utviklingsstudier"],
      explanation: "Utviklingsapparatet formulerer mål for folk som ikke har vært med på å sette dem. Men post-utviklingslitteraturen er i stor grad skrevet ved universiteter i den globale nord, om folk andre steder — og å si det viser konsekvent kritisk lesning.",
    },
    {
      question: "Hva er post-utviklings beste svar på blindgate-innvendingen?",
      options: ["At innvendingen forutsetter at godene må komme innpakket i ett bestemt prosjekt", "At levekårene ikke har blitt bedre likevel", "At innvendingen bygger på tall som ikke er pålitelige", "At forbedringene i levekår i hovedsak skyldes økonomisk vekst og ikke utviklingsprosjekter, og derfor ikke kan brukes som argument for apparatet"],
      explanation: "At bedre helse og skolegang er ønskelig, bestrides ikke — man kan mene at et vannanlegg er bra og samtidig mene at beslutningen bør ligge hos dem som skal bruke det. Men da er posisjonen nærmere alternative utviklingsveier enn alternativer til utvikling.",
    },
    {
      question: "Hva er grepet som løfter en drøfting av om post-utvikling er fruktbar eller en blindgate?",
      options: ["Å skille posisjonen som diagnose fra posisjonen som program", "Å konkludere med at begge sider har noe for seg", "Å vise til at posisjonen er omstridt i faglitteraturen", "Å gjennomgå alle innvendingene mot posisjonen i tur og orden før man tar stilling til den samlede vurderingen"],
      explanation: "Som diagnose er posisjonen skarp og etterprøvbar; som program er den tynn. Å si det er en landing, ikke et forbehold — og «begge har litt rett» uten grunner er feil #1 i ny drakt.",
    },
    {
      question: "Hva skiller post-utvikling fra avhengighetsteori?",
      options: ["Avhengighetsteorien bestrider fordelingen av utvikling, post-utvikling bestrider selve målet", "Avhengighetsteorien er nyere enn post-utvikling", "Avhengighetsteorien er antropologisk, post-utvikling er økonomisk", "Avhengighetsteorien mener årsaken til fattigdom ligger inne i landet, mens post-utvikling mener den ligger i forholdet mellom land i verdensøkonomien"],
      explanation: "Den korteste formuleringen: avhengighetsteorien spør hvem som får utvikling, post-utvikling spør om noen skal ha den. Frank, Amin og Wallerstein mot Ferguson — og feil #3 er unngått.",
    },
    {
      question: "Hvor i en Oppgave A hører post-utvikling hjemme?",
      options: ["I drøftingen, som motposisjon", "Til slutt, som en avsluttende kommentar", "I innledningen, før teoriene presenteres", "Bare i besvarelser der oppgaven eksplisitt nevner posisjonen ved navn i oppgaveteksten"],
      explanation: "Plasseres den til slutt, blir den pynt. Det er i drøftingen den gjør arbeid — som den posisjonen som bestrider premisset de fire andre teoriene deler.",
    },
    {
      question: "Hvorfor er post-utvikling nødvendig i en drøfting av om utviklingsbegrepet er brukbart?",
      options: ["Fordi de andre posisjonene diskuterer hva utvikling skal bety, mens post-utvikling spør om ordet bør brukes — og uten den mangler drøftingen den sterkeste innvendingen", "Fordi posisjonen har flest tilhengere i faget i dag", "Fordi de andre teoriene ikke definerer utviklingsbegrepet i det hele tatt", "Fordi sensorene forventer at alle fem teoriene nevnes i ethvert svar"],
      explanation: "Rekken fra økonomisk vekst til grunnbehov til menneskelig utvikling til bærekraft holder seg innenfor samme ramme. Post-utvikling sier at rammen er problemet — og det gjør spørsmålet til en drøfting med to nivåer i stedet for en liste over definisjoner.",
    },
    {
      question: "Hva bør en besvarelse si om post-utviklings relevans i dag?",
      options: ["At posisjonen har vunnet som diagnose og tapt som program", "At den er blitt den dominerende posisjonen i utviklingsstudier", "At den bare har historisk interesse etter at bærekraftsmålene ble vedtatt", "At den er relevant for antropologer, men ikke for dem som arbeider med utviklingspolitikk i praksis"],
      explanation: "Kravet om deltakelse og spørsmålet om hvem som har definert målene, er i dag standard i utformingen av utviklingsarbeid — også hos aktører som ikke deler konklusjonene. Den radikale konklusjonen om å forlate begrepet er derimot ikke trukket.",
    },
    {
      question: "Hvilken feil begår en kandidat som gjengir post-utvikling korrekt og deretter skriver om «utvikling» som et selvsagt gode?",
      options: ["Feil #5 — ingen kritisk holdning til utviklingsbegrepet", "Feil #3 — teorier blandet eller beskrevet feil", "Feil #8 — en sentral distinksjon er glemt", "Feil #12 — uklar disposisjon uten innledning, hoveddel og konklusjon"],
      explanation: "Det høres umulig ut, men skjer: posisjonen gjengis riktig, og i neste avsnitt behandles utvikling som et nøytralt gode. Den kritiske holdningen til utviklingsbegrepet er en av vurderingsaksene, og den måles i hele svaret.",
    },
    {
      question: "Hva er poenget med begrepet lokal kunnskap i post-utviklingskritikken?",
      options: ["At utviklingsapparatet systematisk ikke ser den, fordi den ikke lar seg skrive inn i en prosjektplan eller rapporteres i tall", "At lokal kunnskap alltid gir bedre løsninger enn ekspertkunnskap", "At lokalbefolkningen bør ansettes i prosjektene", "At kunnskap om et sted må samles inn systematisk før et prosjekt settes i gang, slik at tiltakene treffer bedre"],
      explanation: "Konsekvensen posisjonen trekker, er at løsninger utformet uten den ikke mislykkes tilfeldig. Men innvendingen hører med: «lokal kunnskap» er ikke én ting, og et sted rommer motstridende interesser.",
    },
    {
      question: "Hva slags påstand er diskurskritikk?",
      options: ["En påstand om at en tenkemåte gjør noen spørsmål usynlige", "En påstand om at noen bevisst framstiller saken uriktig", "En påstand om at språket i utviklingspolitikken er unødvendig teknisk og bør forenkles for å bli tilgjengelig", "En påstand om at teksten i programdokumenter ikke stemmer med det som faktisk skjer i felten"],
      explanation: "Diskurskritikk handler om hva som ikke blir spurt om, ikke om hvem som har uærlige hensikter. Det er nettopp derfor analysen er interessant: den forklarer et mønster uten å påstå noe om noens motiver.",
    },
  ],
  'utv1000-3-1': [
    {
      question: "Hva er det leddet i definisjonen av bistand som avgjør om en overføring i det hele tatt regnes som bistand?",
      options: ["At overføringen har utvikling eller nødhjelp som erklært formål, og skjer på gunstigere vilkår enn markedet", "At overføringen går fra et høyinntektsland til et lavinntektsland, uansett hva den skal brukes til og hvilke betingelser som følger med", "At overføringen består av penger og ikke av varer, tjenester, utstyr eller faglig rådgivning", "At overføringen gis uten noen form for tilbakebetaling eller motytelse fra mottakerens side"],
      explanation: "Det er det erklærte formålet, kombinert med gunstigere enn markedsvilkår, som klassifiserer overføringen. Retningen mellom land avgjør ingenting: også lån kan være bistand så lenge vilkårene er bedre enn markedets, og bistand kan bestå av varer, utstyr og rådgivning like mye som av penger.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom bistand og en utenlandsk investering?",
      options: ["Bistand er begrunnet i et erklært utviklingsformål, mens investeringen er begrunnet i avkastning til investoren", "Bistand går alltid til offentlig sektor, mens investeringer alltid går til private bedrifter, slik at skillet følger sektorgrensen i mottakerlandet", "Bistand gis i form av gaver, mens investeringer alltid gis i form av lån som skal betales tilbake", "Bistand kommer fra stater, mens investeringer utelukkende kommer fra selskaper og private aktører"],
      explanation: "Skillet ligger i begrunnelsen: investoren går inn for avkastning og flytter kontroll sammen med kapitalen, mens bistanden er begrunnet i et erklært utviklings- eller nødhjelpsformål. Både bistand og investeringer kan gå til offentlig og privat sektor, og bistand kan gis både som gave og som lån på gunstige vilkår.",
    },
    {
      question: "Hva er bilateral bistand?",
      options: ["Bistand som går direkte fra ett giverland til ett mottakerland, forvaltet av giverens egne kanaler", "Bistand som to giverland har blitt enige om å finansiere i fellesskap, slik at forstavelsen viser til antallet givere i ordningen", "Bistand der giver og mottaker forhandler fram en avtale med gjensidige forpliktelser, i motsetning til bistand som gis ensidig fra giveren", "Bistand som gis til to sektorer samtidig, typisk helse og utdanning, under ett felles rammeverk med samordnet rapportering til giveren"],
      explanation: "Forstavelsen viser til to stater i relasjonen, ikke til to givere, to sektorer eller gjensidige forpliktelser. Kjennetegnet er at giverlandet selv forvalter midlene og selv bestemmer hvor de går.",
    },
    {
      question: "Hva er den viktigste konsekvensen av at bistand kanaliseres multilateralt i stedet for bilateralt?",
      options: ["Giverens egne utenrikspolitiske interesser fortynnes, men giveren mister samtidig styring og synlighet", "Bistanden blir automatisk mer effektiv, fordi institusjonene har bedre fagkompetanse og bredere erfaring enn enkeltstater har", "Mottakerlandet slipper å forholde seg til vilkår, siden institusjonene ikke stiller politiske krav", "Bistandsbeløpet blir større, fordi flere givere går sammen om å finansiere de samme tiltakene"],
      explanation: "Multilateral kanalisering bryter den direkte linjen mellom giverens interesser og mottakerens prioriteringer, men prisen er tapt styring og tapt synlighet for giveren. Institusjonene stiller vilkår i høyeste grad, og verken effektivitet eller beløpsstørrelse følger automatisk av kanalvalget.",
    },
    {
      question: "Hvorfor er det en presisjonsfeil å behandle «multilateral» som en bistandsform?",
      options: ["Fordi kanal og form er to uavhengige inndelinger: alle formene kan gå både bilateralt og multilateralt", "Fordi multilateral bistand alltid gis som budsjettstøtte og aldri som prosjektbistand, programbistand eller humanitær nødhjelp", "Fordi begrepet «multilateral» hører til handelspolitikkens avtaleverk og ikke til bistandsfeltet i det hele tatt", "Fordi multilateral bistand ikke er bistand i teknisk forstand, men medlemskontingent til de institusjonene giveren deltar i"],
      explanation: "Kanal svarer på hvilken vei bistanden går, form svarer på hva den består i, og de to varierer uavhengig av hverandre. Budsjettstøtte, prosjektbistand og nødhjelp kan alle kanaliseres begge veier, og det er nettopp den uavhengigheten som gjør sammenblandingen synlig for sensor.",
    },
    {
      question: "Hva kjennetegner nødhjelp sammenlignet med langsiktig utviklingsbistand?",
      options: ["Den er rettet mot en akutt situasjon og måles på om den nådde fram i tide, ikke på strukturendring", "Den gis alltid gjennom multilaterale institusjoner, fordi disse har best beredskap i krisesituasjoner", "Den er den formen som best bygger mottakerlandets egne institusjoner over tid, siden den går raskt", "Den er den eneste bistandsformen som ikke har noen vilkår knyttet til seg fra giverens side"],
      explanation: "Nødhjelp er situasjonsrettet og skal redde liv, ikke endre strukturer, og den vurderes derfor på helt andre kriterier enn langsiktig bistand. Å bruke et vellykket nødhjelpsprogram som argument for bistandens utviklingseffekt er en kategorifeil.",
    },
    {
      question: "Hva er budsjettstøtte?",
      options: ["Bistand som overføres til mottakerstatens eget budsjett og disponeres gjennom landets egne systemer", "Bistand som dekker giverorganisasjonens egne administrasjonsutgifter i mottakerlandet", "Bistand som utbetales i faste årlige beløp uavhengig av hvilke resultater som oppnås underveis", "Bistand som mottakerlandet må søke om på nytt for hvert enkelt tiltak det ønsker å føre opp i statsbudsjettet sitt"],
      explanation: "Kjennetegnet er at midlene går inn i mottakerstatens ordinære budsjettprosess og forvaltes av landets egne institusjoner. Det er derfor formen bytter sporbarhet mot institusjonsbygging: pengene kan ikke følges krone for krone, men systemene som bruker dem, styrkes ved bruk.",
    },
    {
      question: "Hva er den sentrale avveiningen mellom budsjettstøtte og prosjektbistand?",
      options: ["Budsjettstøtte bytter sporbarhet mot institusjonsbygging, mens prosjektbistand gjør det motsatte", "Budsjettstøtte er billigere å administrere, mens prosjektbistand når fram til flere mottakere", "Budsjettstøtte gis bare til lavinntektsland, mens prosjektbistand også kan gis til mellominntektsland", "Budsjettstøtte krever ingen vilkår fra giveren, mens prosjektbistand alltid krever politiske reformer"],
      explanation: "Prosjektbistand er sporbar krone for krone, men lever ved siden av statens systemer; budsjettstøtte bruker og styrker systemene, men giveren kan ikke følge pengene. Avveiningen er selve svaret i en oppgave om hvilken form som styrker et lands egne institusjoner.",
    },
    {
      question: "Hva er den vanligste innvendingen mot prosjektbistand i faglitteraturen?",
      options: ["At prosjektene lever ved siden av statens systemer, trekker kompetanse ut av dem og stopper med finansieringen", "At prosjektene er umulige å måle resultatene av, siden de mangler egne mål og egen tidsramme", "At prosjektene alltid er for store og for kompliserte til at mottakerlandets egen forvaltning klarer å følge dem opp underveis", "At prosjektene bare kan gjennomføres i land som allerede har en velfungerende offentlig sektor"],
      explanation: "Innvendingen er strukturell: et prosjekt kan levere gode tjenester i mange år og likevel etterlate systemet like svakt, samtidig som det konkurrerer om den samme knappe kompetansen som forvaltningen trenger. Prosjektbistand er tvert imot den formen som er lettest å måle og dokumentere.",
    },
    {
      question: "Hva er programbistand?",
      options: ["Bistand til en hel sektor eller et samlet reformprogram under ett felles rammeverk med felles rapportering", "Bistand som følger en fast plan fastsatt av giverlandets nasjonalforsamling for flere år framover, uavhengig av mottakerens ønsker", "Bistand som gis til frivillige organisasjoner i stedet for til myndigheter i mottakerlandet", "Bistand som er knyttet til et bestemt program i FN-systemet og forvaltes derfra i sin helhet"],
      explanation: "Programbistand ligger mellom prosjektbistand og budsjettstøtte: den samler flere tiltak i en sektor under ett rammeverk, men holder fortsatt et eget system ved siden av statsbudsjettet. Poenget er å redusere den administrative belastningen oppsplittet prosjektbistand legger på mottakerens forvaltning.",
    },
    {
      question: "Hvorfor behandler Hopper bistand, handel og gjeld som ett sammenhengende felt?",
      options: ["Fordi et lands ressurssituasjon avgjøres av alle tre samtidig, slik at et bistandsbeløp sier lite alene", "Fordi de tre feltene forvaltes av de samme internasjonale institusjonene og av de samme departementene i giverlandene", "Fordi handel og gjeld er de to formene bistand kan ta når den ikke gis som rene gaveoverføringer", "Fordi de tre temaene alltid har kommet som én samlet oppgave i eksamenssettene gjennom hele perioden"],
      explanation: "Poenget er analytisk: gunstig bistand kan oppveies av ugunstige handelsbetingelser og tung gjeldsbetjening, og de tre kan derfor ikke vurderes hver for seg. Handel og gjeld er ikke former for bistand, men egne ressursstrømmer som virker samtidig.",
    },
    {
      question: "Hva er vilkår (conditionality) i bistandssammenheng?",
      options: ["Betingelser giveren knytter til bistanden, som mottakeren må oppfylle for å få, beholde eller få mer", "Krav mottakerlandet stiller til giveren om hvordan bistanden skal utformes, leveres og rapporteres på i ettertid", "De juridiske reglene i internasjonal rett som avgjør når et land har rettskrav på humanitær nødhjelp utenfra", "Betingelsene i låneavtaler mellom private banker og myndigheter i lavinntektsland, forhandlet fram på ordinære markedsvilkår"],
      explanation: "Vilkår er giverens betingelser, ikke mottakerens krav, og de forekommer i flere lag: administrative krav, innholdskrav, reformkrav og bindinger til giverens egen næring. Det er reformvilkårene som knytter bistandshistorien til nyliberalismen.",
    },
    {
      question: "Hva er forskjellen mellom et rapporteringskrav og et reformkrav i bistand?",
      options: ["Rapporteringskravet kontrollerer bruken av midlene, mens reformkravet endrer mottakerlandets politikk", "Rapporteringskravet gjelder bilateral bistand, mens reformkravet bare forekommer i multilateral bistand", "Rapporteringskravet stilles av mottakeren, mens reformkravet stilles av giveren i etterkant", "Rapporteringskravet gjelder pengebruk, mens reformkravet gjelder hvilke varer som skal kjøpes hvor"],
      explanation: "Å be om regnskap er kontroll med bruken; å be om privatisering eller liberalisering er å endre politikken i landet. Å behandle de to som samme sak er en presisjonsfeil, fordi det er reformkravene som bærer maktdimensjonen i vilkårsdebatten.",
    },
    {
      question: "Hva menes med vilkårenes maktdimensjon?",
      options: ["At mottakeren formelt kan si nei, men at kostnaden ved å si nei øker jo større ressursbehovet er", "At giveren har juridisk myndighet til å pålegge mottakerlandet bestemte politiske og økonomiske reformer", "At vilkår i praksis alltid brytes, siden ingen internasjonal instans kan håndheve dem", "At mottakerlandet får makt over giveren fordi giveren er avhengig av å vise til resultater"],
      explanation: "Poenget er at vilkår ikke er tvang i juridisk forstand, men virker som styring fordi valgfriheten er ulikt fordelt. Giveren risikerer et omdømmetap, mens mottakerlandet bærer konsekvensene i sin egen økonomi og befolkning.",
    },
    {
      question: "Hva er den innebygde spenningen mellom vilkår og eierskap i bistandspolitikken?",
      options: ["Man kan ikke både stille krav til mottakerens politikk og overlate politikken til mottakeren", "Eierskap forutsetter at giveren eier prosjektene, mens vilkår forutsetter at mottakeren gjør det", "Vilkår gjelder bare offentlig sektor, mens eierskap bare kan realiseres i privat sektor", "Eierskap er et juridisk begrep om eiendomsrett, mens vilkår er et politisk begrep om betingelser"],
      explanation: "Spenningen er reell og uløst: reformvilkår flytter beslutninger til giveren, mens eierskapsprinsippet sier at mottakeren skal eie sine egne planer. Å nevne at spenningen ikke er løst, er et løft i en kortsvarsdrøfting.",
    },
    {
      question: "Hva står Hanlon & Hulme for i pensum?",
      options: ["Direkte overføringer: gi pengene til fattige husholdninger og la dem selv bestemme bruken", "«Feel good»-kritikken: at givere velger tiltak som er synlige og fortellbare hjemme i eget land", "Konfliktfellen: at fattigdom og væpnet konflikt forsterker hverandre i en ond og selvforsterkende sirkel", "Kapabilitetstilnærmingen: at utvikling er utvidelsen av menneskers reelle friheter og faktiske muligheter"],
      explanation: "Riktig svar er at Hanlon & Hulme argumenterer for direkte overføringer til husholdninger. «Feel good»-kritikken er Lindkvist & Dixons, konfliktfellen er Colliers, og kapabilitetstilnærmingen er Sens — de tre er nære naboer i pensum og forveksles ofte.",
    },
    {
      question: "Hva er kjernen i argumentet for direkte overføringer?",
      options: ["At husholdningene selv har bedre informasjon om egne behov enn giverapparatet har", "At kontanter er billigere å transportere enn varer og utstyr til de samme områdene", "At overføringer kan gis uten at mottakerlandets myndigheter blir involvert i det hele tatt", "At beløpene blir større når man kutter ut alle mellomledd i leveransekjeden"],
      explanation: "Argumentet hviler på informasjon og på at mellomleddene tar en betydelig del av ressursen, og det er dermed en kritikk av selve forutsetningen om at giveren vet hva som trengs. Reduserte administrasjonskostnader er en følge av posisjonen, ikke dens kjerne.",
    },
    {
      question: "Hva er den viktigste innvendingen mot direkte overføringer som hovedstrategi?",
      options: ["De bygger ikke fellestjenester som ingen enkelthusholdning kan kjøpe alene, som veier eller smittevern", "De når systematisk feil husholdninger, siden fattige sjelden er registrert i offentlige systemer", "De er dyrere å administrere enn prosjektbistand, fordi hver utbetaling må kontrolleres for seg", "De strider mot prinsippet om mottakerlandets eierskap, siden staten ikke er involvert i utformingen"],
      explanation: "Innvendingen er strukturell: en vaksinasjonskjede, en vei eller et rettsvesen kan ingen enkelthusholdning kjøpe seg til, uansett hvor god informasjon den har om egne behov. Overføringer krever riktignok et system for å identifisere mottakere, men det er en gjennomføringsutfordring og ikke en prinsipiell grense.",
    },
    {
      question: "Hva er kjernen i Lindkvist & Dixons «feel good»-kritikk?",
      options: ["At utvelgelsen av tiltak påvirkes av hva som er synlig og fortellbart hjemme hos giveren", "At giverland krever at varer og tjenester kjøpes fra giverlandets egen næring", "At bistandsorganisasjoner bruker for stor andel av budsjettene sine på administrasjon", "At mottakerland overdriver resultatene sine for å sikre videre finansiering fra giverne"],
      explanation: "Kritikken gjelder utvelgelseskriteriene: det som lar seg fortelle på kort tid og knytte til giverens selvbilde, velges lettere enn det som virker men er kjedelig, som skatteforvaltning og statistikkapasitet. Krav om kjøp fra giverlandets næring er bundet bistand, som er en annen kritikk med en annen mekanisme.",
    },
    {
      question: "Hvordan skal «feel good»-kritikken behandles faglig i en besvarelse?",
      options: ["Som en posisjon i litteraturen som fremstilles i sin sterkeste form og deretter prøves mot motargumenter", "Som et dokumentert forskningsfunn som avgjør spørsmålet om bistandens motiver", "Som en politisk påstand som ikke hører hjemme i en faglig besvarelse i det hele tatt", "Som en beskrivelse av enkeltorganisasjoners praksis uten relevans for bistandsfeltet som helhet"],
      explanation: "Kritikken er en posisjon, ikke et avgjort funn, og skal derfor fremstilles sterkt og deretter prøves. Motargumentet er reelt: offentlig oppslutning er en forutsetning for at bistandsbudsjetter finnes, og synlighet er en del av det som skaper oppslutningen.",
    },
    {
      question: "Hva er de fire holdepunktene i bistandens historiske hovedlinjer, i riktig rekkefølge?",
      options: ["Etterkrigstid og avkolonisering, grunnbehov på 1970-tallet, Washington-konsensus på 1980-tallet, tusenårsmål avløst av bærekraftsmål i 2015", "Grunnbehov på 1950-tallet, avkolonisering på 1960-tallet, tusenårsmål på 1980-tallet, Washington-konsensus fra 2015", "Washington-konsensus etter krigen, avkolonisering på 1970-tallet, grunnbehov på 1990-tallet, bærekraftsmål fra 2000", "Avkolonisering på 1980-tallet, tusenårsmål på 1990-tallet, grunnbehov fra 2000, bærekraftsmål fra 2020"],
      explanation: "Rekkefølgen er avkoloniseringens vekstorienterte kapitaloverføring, 1970-tallets dreining mot grunnbehov, 1980-tallets markedsorienterte lånevilkår, og 2000-tallets felles målsett som ble avløst av bærekraftsmålene i 2015. Rekkefølgen speiler utviklingsbegrepets egne skift, og det er nettopp den parallellen som gir uttelling.",
    },
    {
      question: "Hva er den viktigste endringen fra tusenårsmålene til bærekraftsmålene?",
      options: ["Bærekraftsmålene gjelder alle land, ikke bare mottakerland, og har en bredere dagsorden", "Bærekraftsmålene er juridisk bindende for medlemsstatene, mens tusenårsmålene var frivillige", "Bærekraftsmålene handler utelukkende om klima og miljø, mens tusenårsmålene handlet om fattigdom", "Bærekraftsmålene ble utformet av mottakerlandene alene, mens tusenårsmålene kom fra givermiljøet"],
      explanation: "Skiftet fra mål for de fattige landene til mål for alle land er selve poenget, og det svekker den gamle inndelingen i dem som er ferdig utviklet og dem som ikke er det. Bærekraftsmålene favner langt mer enn klima, og de er politiske forpliktelser og ikke juridisk bindende regler.",
    },
    {
      question: "Hvorfor er gjeld et utviklingsspørsmål og ikke bare et finansspørsmål?",
      options: ["Fordi renter og avdrag betales fra samme statskasse som helse, skole og infrastruktur", "Fordi gjeld alltid er tatt opp til prosjekter som ikke har gitt noen avkastning i det hele tatt", "Fordi långiverne er de samme institusjonene som forvalter den multilaterale bistanden", "Fordi gjeld regnes med i bistandsstatistikken og dermed blåser opp de offisielle tallene"],
      explanation: "Mekanismen er fortrengning: når gjeldsbetjeningen legger beslag på en stor del av budsjettet, går det ut over nettopp de investeringene utviklingen skulle komme fra. Det er også grunnen til at Hopper behandler bistand, handel og gjeld som ett felt.",
    },
    {
      question: "Hva er det kritiske poenget ved at gjeldslette telles som bistand i statistikken?",
      options: ["At bistandstallene kan vokse uten at noen nye ressurser faktisk overføres til mottakeren", "At gjeldsletten dermed må trekkes fra mottakerlandets eget budsjett samme år", "At giverlandene taper penger de ellers ville fått tilbake med renter over tid", "At mottakerlandet må søke om gjeldslette gjennom de samme kanalene som annen bistand"],
      explanation: "Poenget er målingsteknisk og kritisk: ettergivelse av gamle forpliktelser flytter ingen nye ressurser, men øker likevel det registrerte bistandsvolumet. Det er en nyttig påminnelse om at bistandstall ikke alltid måler det de ser ut til å måle.",
    },
    {
      question: "Hva er de fire trinnene i et godt kortsvar om bistand?",
      options: ["Presis definisjon, minst én distinksjon, minst én mekanisme mot utviklingsprosesser, og ett konkret eksempel", "Innledning, historisk oversikt, gjennomgang av alle bistandsformene, og en oppsummerende konklusjon", "Definisjon, argumenter for bistand, argumenter mot bistand, og et personlig standpunkt til slutt", "Begrepsavklaring, presentasjon av to teoretikere, sammenligning av dem, og en vurdering av begge"],
      explanation: "De fire trinnene er definisjon, distinksjon, mekanisme og eksempel, og det er mekanismetrinnet som oftest mangler. Uten det svarer besvarelsen på hva bistand er, men ikke på hvordan den virker inn på utviklingsprosesser.",
    },
    {
      question: "Hva er det analytiske grepet som løfter en bistandsbesvarelse fra god til beste?",
      options: ["Å vise at valget av bistandsform også er et valg om hvem som får definere hva utvikling er", "Å nevne så mange bistandsformer og distinksjoner som mulig innenfor ordgrensen", "Å konkludere med at bistand har både positive og negative sider avhengig av situasjonen", "Å gjengi bistandshistorien fra etterkrigstiden og fram til bærekraftsmålene i kronologisk orden"],
      explanation: "Løftet ligger i definisjonsmakt-spørsmålet: prosjektbistand lar giveren definere, budsjettstøtte flytter definisjonen til mottakerstaten, og direkte overføringer flytter den til husholdningen. En oppramsing av former og en konklusjon om at det er sammensatt, er nettopp det som holder svaret på C.",
    },
  ],
  'utv1000-3-2': [
    {
      question: "Hva er nyliberalisme som analysebegrep i utviklingsstudier?",
      options: ["En politikkpakke fra 1980-tallet om deregulering, privatisering, frihandel og en tilbaketrukket stat", "En utviklingsteori fra 1950- og 60-tallet om at samfunn beveger seg gjennom faste stadier mot modernitet", "En retning som mener at fattige land bør beskytte egen industri bak toll til den er konkurransedyktig", "En analyse av hvordan den kapitalistiske verdensøkonomien aktivt produserer underutvikling i periferien"],
      explanation: "Nyliberalisme er en politikkpakke om marked over stat, båret fram av internasjonale finansinstitusjoner fra 1980-tallet. Stadieteorien er moderniseringsteori, industribeskyttelse er ISI-strategien, og analysen av produsert underutvikling er avhengighetsteori — tre nære naboer som ofte forveksles med den.",
    },
    {
      question: "Hva er forskjellen på Washington-konsensus og strukturtilpasningsprogrammene?",
      options: ["Washington-konsensus er innholdet i politikken, mens programmene er virkemiddelet som gjorde innholdet til vilkår", "Washington-konsensus var en folkerettslig bindende avtale, mens programmene var frivillige anbefalinger til de enkelte landene", "Washington-konsensus gjaldt handelspolitikk, mens programmene bare gjaldt offentlige budsjetter", "Washington-konsensus ble utformet av mottakerlandene, mens programmene ble utformet av giverne"],
      explanation: "Konsensusen var en faglig og politisk samstemthet om hvilken politikk som burde føres; programmene var låneordningene der politikken ble gjort til betingelse for finansiering. Det var aldri en forhandlet avtale, og begge deler omfattet både handel, priser, eierskap og budsjetter.",
    },
    {
      question: "Hva er kjernen i strukturtilpasningsprogrammene?",
      options: ["At ny finansiering ble gjort betinget av bestemte økonomiske reformer i mottakerlandet", "At lån ble gitt med lavere rente og lengre løpetid enn det private banker kunne tilby", "At bistanden ble kanalisert gjennom multilaterale institusjoner i stedet for bilateralt", "At giverne samordnet innsatsen sin i én sektor for å redusere rapporteringsbyrden"],
      explanation: "Vilkårsdimensjonen er kjernen: reformkravene gjaldt landets egen økonomiske politikk, ikke bruken av midlene. Gunstige lånevilkår, kanalvalg og giversamordning er andre trekk ved bistandsfeltet og fanger ikke det som gjorde programmene omstridte.",
    },
    {
      question: "Hva skiller et reformkrav fra et rapporteringskrav i bistandssammenheng?",
      options: ["Reformkravet endrer mottakerlandets politikk, mens rapporteringskravet kontrollerer bruken av midlene", "Reformkravet stilles av multilaterale institusjoner, mens rapporteringskravet stilles av giverstater", "Reformkravet gjelder i låneavtaler, mens rapporteringskravet bare gjelder i rene gaveoverføringer", "Reformkravet må godkjennes av mottakerlandets nasjonalforsamling, mens rapporteringskravet ikke må det"],
      explanation: "Skillet går mellom å kontrollere hvordan pengene brukes og å endre hva staten skal gjøre, og det er reformkravene som bærer maktdimensjonen i vilkårsdebatten. Begge krav forekommer i alle kanaler og i alle bistandsformer.",
    },
    {
      question: "Hva er mekanismen som gjorde bistand til bærer av den nyliberale politikkpakken?",
      options: ["Land i akutt finansieringsbehov hadde få alternative kilder, og kildene knyttet finansieringen til politiske reformvilkår", "Giverlandene drev omfattende faglig opplæring av embetsverket i mottakerlandene gjennom flere tiår, helt fram til reformene ble vedtatt", "Mottakerlandene kopierte frivillig politikken fra de landene som hadde hatt sterkest vekst i den samme perioden, uten noe ytre press", "Internasjonale institusjoner fikk formell lovgivende myndighet, slik at vedtakene deres gjaldt direkte i alle medlemslandene deres"],
      explanation: "Mekanismen er strukturell: når alternativene mangler, blir vilkår til gjennomføringskraft, og en politisk retning gjennomføres uten å ha vunnet fram politisk i landet. Institusjonene fikk aldri lovgivende myndighet, og frivillig kopiering forklarer ikke hvorfor innholdet var så likt på tvers av svært ulike land.",
    },
    {
      question: "Hva er forskjellen på deregulering og privatisering?",
      options: ["Deregulering endrer reglene for hva eieren har lov til, mens privatisering endrer hvem som eier", "Deregulering gjelder handel over grensene, mens privatisering bare gjelder innenlandske markeder", "Deregulering gjennomføres av staten, mens privatisering gjennomføres av internasjonale institusjoner", "Deregulering er et kortsiktig krisetiltak, mens privatisering er en langsiktig strukturreform"],
      explanation: "Et statlig selskap kan operere i et deregulert marked, og et privat selskap kan operere under streng regulering — de to tiltakene er analytisk uavhengige selv om de fulgtes ad i praksis. Å bruke dem som synonymer er en presisjonsfeil som er lett å unngå.",
    },
    {
      question: "Hvordan skal de dokumenterte følgene av strukturtilpasningsprogrammene fremstilles i en besvarelse?",
      options: ["Som forskningsfunn med sin mekanisme, atskilt fra den normative vurderingen av om programmene var riktige", "Som omstridte påstander som alltid bør innledes med at noen mener det ene og andre det stikk motsatte", "Som bevis for at programmene mislyktes, siden kostnadene falt på dem som hadde minst fra før", "Som mindre viktige detaljer, siden vurderingen uansett avhenger av hva alternativet ville vært"],
      explanation: "Funn presenteres som funn med sitt belegg, mens spørsmålet om programmene var riktige, er en vurdering som avhenger av det kontrafaktiske alternativet. Å pakke robuste funn inn i «noen mener» er ikke nøytralitet, men en svekkelse av faget, og å slutte direkte fra kostnad til dom hopper over et ledd.",
    },
    {
      question: "Hva er forskjellen mellom et forskningsfunn og en posisjon?",
      options: ["Funnet er en dokumentert sammenheng med mekanisme og grenser, mens posisjonen er en normativ vurdering av hva som følger", "Funnet gjelder alltid noe som allerede har skjedd i fortiden, mens posisjonen utelukkende gjelder hva som bør skje i framtiden", "Funnet er publisert i fagfellevurderte tidsskrifter, mens posisjonen bare står i lærebøker, oversiktsverk og debattinnlegg", "Funnet er noe samtlige forskere på feltet er enige om, mens posisjonen er noe det fortsatt strides åpent om i hele faget"],
      explanation: "Skillet går mellom hva som er dokumentert og hva man mener bør følge av det, ikke mellom tidsperspektiv, publiseringskanal eller grad av enighet. Å beherske skillet er en eksamensferdighet, fordi selvstendighet forutsetter at du vet hvor du går fra å referere til å mene.",
    },
    {
      question: "Hva er anti-politikk-maskinen hos Ferguson?",
      options: ["At utviklingsapparatet omformer politiske spørsmål om makt og fordeling til tekniske problemer", "At bistand ikke virker, og at ressursene i hovedsak forsvinner i administrasjon, konsulentbruk og mellomledd", "At mottakerlandenes myndigheter unndrar seg politisk ansvar ved å skylde på giverne", "At utviklingsprosjekter systematisk holdes utenfor den politiske debatten i giverlandet"],
      explanation: "Ferguson analyserer virkninger: apparatet gjør politiske spørsmål tekniske og utvider samtidig statsapparatet der det virker. Å skrive at han viste at bistand ikke virker, er en tilskrivningsfeil — en analyse av virkninger er ikke en nyttedom.",
    },
    {
      question: "Hvorfor er strukturtilpasningsprogrammene et godt eksempel på anti-politikk-maskinen?",
      options: ["Fordi spørsmålet om hvor stor staten skal være, er dypt politisk, men ble behandlet som et teknisk lånevilkår", "Fordi programmene ble holdt hemmelige for befolkningen i mottakerlandene helt fram til de var ferdig forhandlet og vedtatt", "Fordi Ferguson selv analyserte flere av programmene i sitt feltarbeid i det sørlige Afrika", "Fordi programmene ble utformet av økonomer uten kjennskap til lokale politiske forhold"],
      explanation: "Poenget er formen spørsmålet fikk: en av de mest omstridte politiske avveiningene et samfunn kan gjøre, ble en betingelse for utbetaling. Begrepets kraft ligger i denne omformingen, ikke i hvem som skrev vilkårene eller i hvor åpen prosessen var.",
    },
    {
      question: "Hva er prinsippet om eierskap i bistandspolitikken?",
      options: ["At mottakerlandet selv skal utforme og eie utviklingsplanene, og at giverne skal støtte disse planene", "At giverlandet beholder eiendomsretten til det som bygges, inntil prosjektet er formelt overlevert", "At mottakerlandet må stille med egen finansiering tilsvarende en fastsatt andel av tiltaket", "At bistandsorganisasjonene skal ha lokalt ansatte i alle ledd av gjennomføringen av tiltaket"],
      explanation: "Eierskap gjelder hvem som utformer og eier planene, ikke eiendomsrett til bygninger, medfinansiering eller bemanning. Prinsippet vokste fram som et praktisk svar på at reformer uten politisk forankring i landet hadde en tendens til å bli reversert.",
    },
    {
      question: "Hva er den innebygde spenningen mellom vilkår og eierskap?",
      options: ["Man kan ikke både stille krav til mottakerens politikk og overlate politikken til mottakeren", "Vilkår kan bare stilles av multilaterale institusjoner, mens eierskap bare kan realiseres bilateralt", "Eierskap krever at giveren finansierer mer, mens vilkår krever at giveren finansierer mindre", "Vilkår gjelder i låneavtaler, mens eierskap er et prinsipp som bare gjelder for gavebistand"],
      explanation: "Spenningen er reell og uløst: reformvilkår flytter beslutninger til giveren, mens eierskapsprinsippet sier at mottakeren skal eie sine egne planer. Å påpeke at spenningen ikke er ryddet av veien, er et løft i en drøfting.",
    },
    {
      question: "Hvorfor fikk vilkårene fra IMF og Verdensbanken så bred rekkevidde?",
      options: ["Fordi en avtale med dem fungerte som et signal til andre kreditorer og givere om at landet var kredittverdig", "Fordi institusjonene hadde folkerettslig hjemmel til å håndheve vilkårene overfor medlemslandene sine ved brudd", "Fordi de to institusjonene til sammen sto for størstedelen av all bistand som ble gitt i perioden", "Fordi mottakerlandene manglet egne fagmiljøer som kunne vurdere de økonomiske anbefalingene"],
      explanation: "Signaleffekten gjorde at et brudd kostet mer enn selve lånet, fordi også andre finansieringskilder falt bort. Institusjonene har aldri hatt håndhevingsmyndighet, og bistandsvolumet deres forklarer ikke rekkevidden alene.",
    },
    {
      question: "Hvordan nyanserer vilkårshistorien påstanden om at multilateral bistand er mindre maktbærende enn bilateral?",
      options: ["Institusjonene samlet giverne bak én felles politikklinje, slik at kanalen ble en forsterker i stedet for en fortynner", "Multilateral bistand viste seg å være langt mindre i omfang enn den bilaterale bistanden var i nettopp den perioden vi snakker om", "Bilateral bistand ble i praksis avviklet i løpet av 1980-tallet, til fordel for de multilaterale kanalene og institusjonene", "Institusjonene overlot vilkårsutformingen til de enkelte giverlandene, som dermed fikk vesentlig mer makt over mottakerne"],
      explanation: "Normalt fortynner den multilaterale kanalen enkeltgiveres interesser, men her virket den motsatt: giverne sto samlet bak én linje, og mottakerens forhandlingsrom ble mindre, ikke større. Å se den nyansen viser at kategoriene brukes og ikke bare gjengis.",
    },
    {
      question: "Hvordan bør Norges posisjon som bistandsgiver beskrives i en besvarelse?",
      options: ["Som en giver som gir en høy andel av inntekten sin og er stor målt per innbygger, uten prosenttall eller rangeringer", "Med den nyeste prosentandelen av bruttonasjonalinntekt og landets plassering på giverstatistikken", "Som verdens største bistandsgiver, siden ingen andre land gir like mye målt per innbygger", "Uten noen form for størrelsesangivelse, siden slike opplysninger uansett ikke er relevante for faget"],
      explanation: "Mekanismen bærer påstanden, ikke tallet: prosentandeler og rangeringer skifter fra år til år, og et utdatert tall er en unødvendig svakhet i en besvarelse. Samtidig er størrelsesordenen relevant, så den skal med — bare i en form som ikke går ut på dato.",
    },
    {
      question: "Hva er «godhetsmakt» som analysebegrep?",
      options: ["Den innflytelsen en stat oppnår ved å bli oppfattet som en god og uegennyttig aktør", "Kravet om at bistand bare skal gis til land som respekterer menneskerettighetene", "Den makten frivillige organisasjoner har over bistandsprioriteringene i et giverland", "Giverlandets rett til å stille etiske betingelser til hvordan midlene forvaltes"],
      explanation: "Begrepet peker på at omdømme kan veksles inn i innflytelse, og det gjelder uavhengig av om motivene er oppriktige. Det er verken en påstand om at godheten er påtatt eller en betegnelse på rettighetsvilkår i bistanden.",
    },
    {
      question: "Hva er forskjellen mellom «godhetsmakt» og «feel good»-kritikken hos Lindkvist & Dixon?",
      options: ["Godhetsmakt handler om hva omdømmet gir staten utad, mens «feel good» handler om hvordan tiltak velges ut", "Godhetsmakt er et faguttrykk, mens «feel good» er en polemisk betegnelse uten faglig innhold", "Godhetsmakt gjelder multilateral bistand, mens «feel good» bare gjelder bilateral bistand", "Godhetsmakt beskriver mottakerlandets syn, mens «feel good» beskriver giverlandets eget syn"],
      explanation: "De to kritikkene har ulikt objekt: den ene gjelder omdømmets utenrikspolitiske avkastning, den andre gjelder utvelgelseskriteriene for tiltak. Å blande dem er nettopp den upresisheten som måles på definisjonskravet.",
    },
    {
      question: "Hva er det viktigste grepet i et kortsvar om en giverstats rolle?",
      options: ["Å holde spørsmålet om motiv atskilt fra spørsmålet om virkning", "Å fastslå nøyaktig hvor stor andel av bistanden som går gjennom de multilaterale kanalene hvert år", "Å ta et tydelig standpunkt til om landets bistandspolitikk bør legges om", "Å gjengi bistandsbudsjettets utvikling over de siste tiårene i kronologisk orden"],
      explanation: "En stat kan handle av sammensatte motiver og likevel oppnå reelle utviklingsvirkninger, og de to spørsmålene besvares på helt ulike kriterier. Å ta politisk standpunkt til landets politikk flytter svaret ut av faget, og kanalandeler og budsjetthistorikk svarer ikke på selve drøftingsspørsmålet.",
    },
    {
      question: "Hvorfor er kanalskillet nyttig når egeninteresseforklaringen skal prøves?",
      options: ["Fordi forklaringen er sterkest for høyt profilert bilateral bistand og svakest for ubundne multilaterale kjernebidrag", "Fordi bilateral bistand alltid er bundet til kjøp fra giverlandets egen næring, mens den multilaterale kanalen aldri er det", "Fordi multilateral bistand er den eneste kanalen der giveren kan dokumentere resultater for hjemmepublikummet", "Fordi kanalvalget avgjør hvor stor andel av midlene som når fram til de tiltenkte mottakerne"],
      explanation: "Et ubundet kjernebidrag gir verken synlighet eller styring og er dermed vanskelig å forklare med omdømmehensyn, mens en profilert bilateral satsing er lett å forklare med begge deler. Å prøve en forklaring der den er svakest, er nettopp det som skiller en drøfting fra en påstand.",
    },
    {
      question: "Hva er post-utviklings innvending mot hele bistandsapparatet?",
      options: ["At apparatet forutsetter et bestemt, vestlig innhold i «utvikling» og produserer kategoriene det arbeider med", "At bistandsvolumet er for lite til å ha målbar virkning på fattigdommen i verden", "At bistanden burde vært erstattet av frihandel og utenlandske investeringer i stedet", "At mottakerlandenes myndigheter er for korrupte til å forvalte ressursene forsvarlig"],
      explanation: "Kritikken retter seg mot rammen og kategoriene, ikke mot volum, virkemiddelvalg eller forvaltningskvalitet. Innvendingen mot kritikken skal med i en besvarelse: en total avvisning av «utvikling» etterlater reell fattigdomsbekjempelse uten språk.",
    },
    {
      question: "Hva står Milton Friedman for i pensum, og hva står Margaret Thatcher for?",
      options: ["Friedman for nyliberalismen som ideologi og økonomisk teori, Thatcher for den som gjennomført politisk praksis", "Friedman for moderniseringsteorien, Thatcher for kritikken av den fra et strukturalistisk ståsted", "Friedman for kritikken av Washington-konsensus, Thatcher for utformingen av den samme konsensusen", "Friedman for teorien om komparative fortrinn, Thatcher for handelsliberaliseringen som fulgte av den"],
      explanation: "Riktig kobling er idégrunnlag hos Friedman og gjennomføring hos Thatcher, begge innenfor nyliberalismen. Moderniseringsteorien er Rostows felt, og handelsteoriens modellapparat hører til utviklingsøkonomien og testes ikke i dette emnet.",
    },
    {
      question: "Hva er det analytiske løftet i en oppgave om bistand og nyliberalisme?",
      options: ["Å vise at vilkårspolitikken ikke bare gjennomførte et utviklingsinnhold, men også avgjorde hvem som skulle definere innholdet", "Å ramse opp så mange av de enkelte reformkravene i strukturtilpasningsprogrammene som det i det hele tatt er plass til innenfor ordgrensen", "Å konkludere med at programmene hadde både positive og negative sider, avhengig av hvilket land og hvilken periode man ser på", "Å gjengi rekkefølgen på bistandens historiske faser fra etterkrigstiden og fram til bærekraftsmålene som gjelder i dag"],
      explanation: "Løftet ligger i definisjonsmakt-spørsmålet: både innholdet og retten til å bestemme innholdet ble avgjort i den enden som kontrollerte finansieringen. En oppramsing av krav og en konklusjon om at det var sammensatt, er nettopp det som holder svaret på C.",
    },
  ],
  'utv1000-4-1': [
    {
      question: "Hva er konfliktfellen (the conflict trap)?",
      options: ["En selvforsterkende sirkel der væpnet konflikt gjør landet fattigere og staten svakere, og der fattigdom i sin tur øker risikoen for ny konflikt", "Den situasjonen som oppstår når en fredsavtale er inngått, men partene ikke har tillit nok til å avvæpne seg samtidig", "En mekanisme der naturressurser finansierer væpnede grupper og dermed gjør konflikter vesentlig lengre enn de ellers ville blitt", "Det forholdet at fattige land systematisk bruker en større andel av statsbudsjettet på militære formål enn rike land gjør"],
      explanation: "Det avgjørende ordet er selvforsterkende. Begrepet er knyttet til Collier, og poenget er at årsakspilen går begge veier samtidig — ikke at fattigdom skaper krig.",
    },
    {
      question: "Hva er den vanligste og dyreste feilen i konfliktoppgaver?",
      options: ["Å skrive bare den ene retningen i årsakspilen, og dermed overse at konflikt og fattigdom forsterker hverandre gjensidig", "Å bruke eksempler fra kriger som ligger så langt tilbake i tid at de ikke lenger regnes som relevante for utviklingsspørsmål", "Å bruke begrepet borgerkrig om konflikter som strengt tatt hadde deltakelse fra flere stater samtidig med de interne kampene", "Å legge for stor vekt på de indirekte kostnadene og for liten vekt på de tapene som oppstår direkte i kamphandlingene"],
      explanation: "Dette er feil #9 i bokas register. Sirkelen er selve poenget oppgaven ber om, og halvparten av mekanismen gir ikke full uttelling.",
    },
    {
      question: "Hva skiller konfliktens indirekte kostnader fra de direkte?",
      options: ["De oppstår fordi samfunnets ordinære funksjoner slutter å virke, ikke i selve kamphandlingene — og de er de største", "De oppstår først etter at fredsavtalen er undertegnet, mens de direkte kostnadene løper mens kampene fortsatt pågår", "De rammer bare sivilbefolkningen, mens de direkte kostnadene i hovedsak rammer de væpnede partene i konflikten", "De lar seg ikke tallfeste, mens de direkte kostnadene kan leses av statistikk over drepte, sårede og ødelagt infrastruktur"],
      explanation: "Helsetjenester som ikke når fram, vaksinasjonsprogrammer som stanser, skoler som stenger. Gates m.fl. (2012) finner at de indirekte kostnadene er systematisk større enn de direkte, og at de også rammer områder uten kamper.",
    },
    {
      question: "Hva peker grådighets-forklaringen (greed) på?",
      options: ["Mulighet og økonomisk gevinst — at det finnes noe å ta, og noe å finansiere en gruppe med", "At noen av partene i en konflikt handler ut fra rene egeninteresser mens andre kjemper for et kollektivt og legitimt formål", "At de rikeste gruppene i et samfunn systematisk motsetter seg omfordeling og dermed presser fram voldelige konfrontasjoner", "At internasjonale selskaper bevisst oppsøker land i konflikt fordi svake myndigheter gir dem gunstigere betingelser for utvinning"],
      explanation: "Mekanismen har to ledd: finansiering, og alternativkostnad. Forklaringen er god på hvorfor konflikter varer, og svak på hvorfor akkurat de menneskene sluttet seg til akkurat den gruppen.",
    },
    {
      question: "Hva peker urett-forklaringen (grievance) på?",
      options: ["Opplevd urettferdighet — politisk utestengning, systematisk forskjellsbehandling og overgrep som ikke er blitt gjort opp", "At fattigdom i seg selv skaper en frustrasjon som over tid finner voldelige uttrykk når ingen politiske kanaler er tilgjengelige", "At konflikter oppstår der ulikheten mellom de rikeste og de fattigste individene i et samfunn er størst målt over tid", "At kolonitidens grenser skapte stater der befolkningsgrupper med ulik historie ble tvunget sammen under én statsdannelse"],
      explanation: "Mekanismen går gjennom mobilisering, og det er særlig horisontal ulikhet — systematisk forskjell mellom identifiserbare grupper — som lar seg omsette i en kollektiv sak.",
    },
    {
      question: "Hva er den presise forskjellen på grådighet og urett som forklaringer?",
      options: ["Grådighet forklarer konflikt med mulighet — finnes det noe å finansiere en gruppe med — mens urett forklarer den med motiv, og de svarer på ulike spørsmål", "Grådighet gjelder konflikter om naturressurser, mens urett gjelder konflikter der etniske eller religiøse skillelinjer er de sentrale", "Grådighet er den forklaringen økonomer bruker, mens urett er den forklaringen statsvitere og antropologer bruker om de samme hendelsene", "Grådighet forklarer hvorfor konflikter bryter ut, mens urett forklarer hvorfor de fortsetter lenge etter at det opprinnelige stridsspørsmålet er løst"],
      explanation: "Motiv uten mulighet gir protest, ikke krig. Mulighet uten motiv gir kriminalitet, ikke opprør. Spørsmålet er derfor hvilken av dem som var den knappe faktoren i det konkrete tilfellet.",
    },
    {
      question: "Hvorfor er det galt å behandle grådighet og urett som to typer kriger?",
      options: ["De er analytiske forklaringstyper som brukes på samme konflikt, og som regel finner man begge", "Fordi ingen av de to forklaringene har fått tilstrekkelig empirisk støtte til at de kan brukes som grunnlag for en klassifisering av kriger", "Fordi kriger uansett har for mange årsaker til at to forklaringstyper kan dekke dem, og fordi enhver inndeling derfor blir vilkårlig", "Fordi begrepene beskriver egenskaper ved dem som deltar i konflikten, og slike egenskaper varierer for mye innad i en væpnet gruppe"],
      explanation: "En gruppe kan ha oppstått ut fra reell urett og senere finansiere seg slik at den blir avhengig av at krigen fortsetter. Begge forklaringene er da riktige, og de gjelder ulike faser.",
    },
    {
      question: "Hva er ressursforbannelsen?",
      options: ["Den observerte tendensen til at store ressursinntekter kan gi svakere styresett, høyere konfliktrisiko og svakere vekst enn hos ressursfattige land", "Den økonomiske loven om at land som eksporterer råvarer over tid får dårligere bytteforhold mot land som eksporterer industrivarer", "Det forholdet at naturressurser er ujevnt fordelt mellom land, slik at noen land får en fordel de ikke har gjort seg fortjent til", "Den sammenhengen at utvinning av naturressurser ødelegger miljøet og dermed undergraver framtidige generasjoners levekår i landet"],
      explanation: "Formuler den som en mekanisme, aldri som en lov. Tendensen er dokumentert og faglig omstridt på samme tid, og moteksemplene er mange nok til at «forbannelse» misleder om den leses bokstavelig.",
    },
    {
      question: "Hvilke tre mekanismer utgjør ressursforbannelsen?",
      options: ["Finansiering av vold, svekket bånd mellom stat og innbygger, og sårbarhet for prissvingninger", "Miljøødeleggelse, tap av jordbruksland og fortrengning av lokalbefolkning fra de områdene der utvinningen faktisk foregår", "Overvurdert valuta, tapt konkurransekraft i industrien og en gradvis avvikling av det innenlandske jordbruket over tid", "Utenlandsk eierskap, hjemsending av overskudd og manglende teknologioverføring fra utvinningsselskapene til vertslandet"],
      explanation: "Bare den første går gjennom vold. De to andre går gjennom institusjoner, og det er derfor ressursforbannelsen er et utviklingsbegrep og ikke bare et konfliktbegrep.",
    },
    {
      question: "Hva viser Norge som moteksempel til ressursforbannelsen?",
      options: ["At mekanismen er betinget — rekkefølgen mellom institusjoner og inntekter ser ut til å bety mye", "At mekanismen er en myte, og at sammenhengen mellom ressursinntekter og svakt styresett er en tilfeldighet i datamaterialet", "At petroleumsinntekter er mindre skadelige enn mineralinntekter fordi utvinningen krever store anlegg og dermed statlig deltakelse", "At land i det globale nord er beskyttet mot mekanismen av sin plassering i verdensøkonomien og sine handelsavtaler med naboland"],
      explanation: "Der institusjonene var på plass før de store inntektene kom, håndteres inntektene innenfor et system som allerede virket. «Ressursrikdom er farlig der institusjonene er svake fra før» er en presis setning; «ressurser er en forbannelse» er ikke.",
    },
    {
      question: "Hvorfor betyr ressurstypen noe for konfliktrisikoen?",
      options: ["Ressurser som kan utvinnes med enkle midler av små grupper, er lettest å bruke til å finansiere en væpnet gruppe over tid", "Ressurser med høy verdi per kilo gir større fortjeneste og dermed sterkere motiv for alle parter til å gå til væpnet kamp om dem", "Ressurser som er ikke-fornybare skaper et tidspress som gjør at partene velger vold framfor forhandlinger om fordelingen", "Ressurser som eksporteres til det globale nord gir sterkere utenlandsk innblanding i konflikten enn ressurser som brukes innenlands"],
      explanation: "Alluviale edelstener og tømmer krever ikke et stort anlegg. Dypvannsolje og store gruver er vanskeligere for en opprørsgruppe å drive, men lettere for en stat å monopolisere — og da forskyves problemet til hvem som kontrollerer statsapparatet.",
    },
    {
      question: "Hva er den lange halen etter en væpnet konflikt?",
      options: ["Kostnadene som løper etter at kampene er slutt — tapte skoleår, varige helseskader, institusjoner og investorer som uteblir", "Den perioden hvor en fredsavtale er inngått, men hvor enkelte grupper fortsetter kampene fordi de ikke anerkjenner avtalen", "Den forsinkelsen som oppstår før internasjonal bistand når fram til de områdene som er hardest rammet av kamphandlingene", "Den tiden det tar før flyktninger og internt fordrevne vender tilbake til hjemstedene sine etter at situasjonen er stabilisert"],
      explanation: "Begrepet forklarer hvorfor konfliktens utviklingsvirkning ikke lar seg måle i det året krigen sluttet. Gjenoppbygging handler om det fysiske; den lange halen om alt som ikke lar seg erstatte ved å bygge.",
    },
    {
      question: "Hva er naboskapseffekten?",
      options: ["At væpnet konflikt i ett land øker risikoen og kostnadene i landene rundt, gjennom flukt, avbrutte handelsruter og investorer som trekker seg ut", "At land som grenser til hverandre har en tendens til å utvikle seg i samme retning fordi de deler markeder, infrastruktur og arbeidskraft", "At fredsavtaler har større sjanse for å holde når nabolandene deltar som garantister enn når de forhandles fram uten regional deltakelse", "At konflikter i stadig større grad involverer stater utenfor regionen gjennom våpenleveranser, økonomisk støtte og diplomatisk press"],
      explanation: "Flyktningstrømmer, avbrutte handelsruter, våpen og grupper som beveger seg over grensene, og investorer som trekker seg ut av hele regionen. Konfliktfellen har altså en regional variant.",
    },
    {
      question: "Hva er tilbakefallsrisikoen, og hvorfor er den så viktig for begrepet «felle»?",
      options: ["At land som nettopp har hatt konflikt, har systematisk høyere risiko for å få en ny — og det er den som gjør ordet «felle» berettiget", "At fredsavtaler brytes oftere enn de holder, noe som gjør at internasjonale meklere bør stille strengere krav til partene enn de gjør", "At de gruppene som tapte den forrige konflikten, som regel er de samme som starter den neste, og at forsoning derfor må komme først", "At risikoen for ny konflikt er høyest i det første året etter en fredsavtale og deretter faller jevnt, slik at tidlig innsats er avgjørende"],
      explanation: "Uten tilbakefallsleddet er sammenhengen bare en dårlig periode; med det er den en tilstand landet kan bli sittende fast i. Mekanismen er sirkelens to halvdeler lest etter hverandre.",
    },
    {
      question: "Hvorfor er skillet mellom statlig kapasitet og legitimitet nyttig i en konfliktbesvarelse?",
      options: ["Fordi en stat kan ha det ene uten det andre, og hvilken av dem som svikter, gir ulike mekanismer", "Fordi kapasitet lar seg måle med objektive indikatorer mens legitimitet bare kan undersøkes gjennom spørreundersøkelser i befolkningen", "Fordi internasjonale givere kan bidra til å bygge kapasitet, mens legitimitet er noe bare landets egne myndigheter kan skaffe seg", "Fordi legitimitet er avgjørende i demokratier mens kapasitet er avgjørende i stater med andre styreformer enn de demokratiske"],
      explanation: "En stat kan tvinge gjennom uten å overtale, eller være anerkjent uten å klare å levere. Å si hvilken av de to som svikter, gir en mekanisme i stedet for merkelappen «svak stat».",
    },
    {
      question: "Hva er menneskelig sikkerhet?",
      options: ["Trygghet mot vold, sult, sykdom og undertrykkelse i folks faktiske og daglige liv, og ikke bare fravær av væpnet angrep på statens ytre grenser", "Det folkerettslige vernet enkeltmennesker har mot overgrep fra egen stat, slik det er nedfelt i internasjonale menneskerettighetsavtaler", "Den beskyttelsen sivilbefolkningen har krav på i væpnet konflikt, og som forplikter alle parter uavhengig av hvem som startet kampene", "Statens evne til å beskytte innbyggerne sine mot angrep utenfra, som er den klassiske definisjonen av sikkerhet i internasjonal politikk"],
      explanation: "Begrepet flytter spørsmålet fra staten til mennesket, og gjør konfliktens kostnad synlig i et utviklingsspråk. Statssikkerhet måler om staten består; menneskelig sikkerhet om folk kan leve, planlegge og investere i egen framtid.",
    },
    {
      question: "Hvilken form for konflikt handler litteraturen om utvikling i hovedsak om?",
      options: ["Borgerkrig — intern væpnet konflikt mellom staten og organiserte grupper, eller mellom grupper", "Mellomstatlige kriger, siden det er de som forstyrrer handel og investeringer mest og dermed rammer utviklingen bredest", "Væpnede konflikter der internasjonale organisasjoner har grepet inn, siden det er dem det finnes best dokumentasjon om", "Konflikter om naturressurser, siden ressurser er det stridsspørsmålet som oftest er til stede når kamper først bryter ut"],
      explanation: "Det er den formen som har vært vanligst etter andre verdenskrig, og den som rammer utviklingsprosesser hardest — fordi kampen står om det apparatet som skulle levert tjenestene.",
    },
    {
      question: "Hva er svaret på om konflikt er årsak til eller virkning av underutvikling?",
      options: ["At spørsmålet er feil stilt — begge retninger er dokumentert, og de opptrer samtidig", "At konflikt i hovedsak er en virkning, siden fattigdom og svake institusjoner nesten alltid kommer før den væpnede striden bryter ut", "At konflikt i hovedsak er en årsak, siden land som aldri har hatt krig, sjelden havner i vedvarende fattigdom over lengre perioder", "At det varierer mellom regioner, slik at spørsmålet må avgjøres separat for hvert enkelt land det er aktuelt å undersøke"],
      explanation: "Å velge én retning er ikke å svare presist, det er å svare halvveis. Formuleringen som løser det: «konflikt er både årsak til og virkning av underutvikling, og det er samtidigheten som gjør sammenhengen til en felle».",
    },
    {
      question: "Hva er horisontal ulikhet, og hvorfor er begrepet viktig i urett-forklaringen?",
      options: ["Systematisk forskjell mellom identifiserbare grupper — og det er nettopp den formen som lar seg omsette i en kollektiv sak", "Forskjellen mellom de rikeste og de fattigste individene i et samfunn, målt på tvers av alle grupper og regioner samtidig", "Ulikhet som holder seg konstant over generasjoner fordi posisjoner arves, i motsetning til ulikhet som varierer med konjunkturene", "Forskjellen i levekår mellom by og land, som er den skillelinjen konflikter i lavinntektsland oftest følger i praksis"],
      explanation: "Det er ikke ulikhet i seg selv som gir mekanismen. En gruppe som opplever seg forbigått langs en linje som er lett å se — region, etnisitet, religion, yrke — har både en fortelling og en organisasjonsform å bygge på.",
    },
    {
      question: "Hvilke tre innsatsområder peker litteraturen på for å bryte konfliktfellen?",
      options: ["Sikkerhet først, deretter statlig kapasitet og legitimitet, og økonomiske alternativer som hever alternativkostnaden ved våpen", "Avvæpning av alle parter, rettsoppgjør etter kampene og en sannhetskommisjon som kan gjøre opp med det som har skjedd", "Internasjonal fredsbevaring, gjeldslette og garantier fra nabolandene om at grensene ikke skal endres etter konflikten", "Valg så raskt som mulig, grunnlovsreform og en fordelingsnøkkel for ressursinntektene mellom regionene i landet"],
      explanation: "Rekkefølgepoenget er sentralt: økonomiske tiltak i et område som fortsatt er utrygt, gir sjelden varig effekt. Hvor mye vekt hvert ledd skal ha, er derimot politisk omstridt og besvares ikke av mekanismen.",
    },
    {
      question: "Hva er hovedgrepet i Verdensbankens World Development Report 2011?",
      options: ["Å behandle vold som et utviklingsproblem i seg selv, ikke som noe som kommer i tillegg", "Å rangere land etter konfliktrisiko slik at givere kan prioritere innsatsen sin der sannsynligheten for utbrudd er høyest", "Å vise at bistand til konfliktrammede land gir lavere avkastning enn bistand til stabile land på samme inntektsnivå", "Å dokumentere at antallet væpnede konflikter i verden har falt siden slutten av den kalde krigen, men at de varer lenger"],
      explanation: "Rapporten peker på at land som gjentatte ganger rammes av vold, ligger systematisk etter på utviklingsmål. I et kortsvar brukes den som pensumforankring for at sammenhengen er dokumentert og ikke bare sannsynlig.",
    },
    {
      question: "Hvorfor er det upresist å si at «fattigdom fører til krig»?",
      options: ["Fordi funnet er systematisk høyere risiko, ikke nødvendighet — og fordi mange lavinntektsland aldri har hatt borgerkrig", "Fordi fattigdom er vanskelig å måle på en måte som lar seg sammenligne mellom land med svært ulike prisnivåer og valutakurser", "Fordi det er den relative fattigdommen og ikke den absolutte som betyr noe for om væpnet konflikt bryter ut i et land", "Fordi sammenhengen bare gjelder land som allerede har hatt konflikt, og derfor ikke sier noe om land som aldri har hatt en"],
      explanation: "Formuleringen har dessuten bare den ene retningen i årsakspilen. At risikoen er systematisk høyere er et forskningsfunn; at fattigdom utløser krig er en overdrivelse som svekker svaret.",
    },
    {
      question: "Hva bør et kortsvar om konflikt inneholde på trinn tre, mekanismen?",
      options: ["Den onde sirkelen skrevet ut med begge retninger og med tilbakefallsleddet", "En oversikt over de viktigste pågående væpnede konfliktene i det globale sør og hva de har til felles med hverandre", "En gjennomgang av hvordan internasjonale organisasjoner arbeider med fredsmekling og hvilke virkemidler de har til rådighet", "En vurdering av om konflikten i eksempelet ditt best forklares med grådighet eller med urett, med begrunnelse for valget"],
      explanation: "Mekanismen er trinnet som skiller et kortsvar fra en definisjon. Den som har sirkelen innøvd som formulering, kan bruke tiden på eksempelet og drøftingen i stedet.",
    },
    {
      question: "Hva er det galt å tilskrive Collier?",
      options: ["Ressursforbannelsen som institusjonell mekanisme — hans eget arbeid gjelder ressursenes rolle i finansieringen av væpnede grupper", "Konfliktfellen som begrep, siden mekanismen var beskrevet i eldre litteratur under andre navn før den fikk sin nåværende form", "Skillet mellom grådighet og urett, som er et generelt analytisk skille i samfunnsvitenskapen og ikke knyttet til én forfatter", "Målingen av konfliktens indirekte kostnader, som hører til den empiriske litteraturen om konsekvenser og ikke til hans arbeid"],
      explanation: "Forbannelsen som institusjonell mekanisme er en bredere faglig posisjon. Et navn med feil poeng trekker mer ned enn et poeng uten navn.",
    },
    {
      question: "Hvorfor er det verdt å skille mellom en fattigdomsfelle og en konfliktfelle?",
      options: ["Fordi vold er et eget ledd i den siste, og fordi vold i tillegg ødelegger den forutsigbarheten som skal til for å bygge opp noe nytt", "Fordi fattigdomsfellen gjelder enkelthusholdninger mens konfliktfellen gjelder land, og de to nivåene ikke lar seg sammenligne", "Fordi fattigdomsfellen er en økonomisk modell med presise antakelser mens konfliktfellen bare er en beskrivelse av et mønster", "Fordi fattigdomsfellen kan brytes med kapitaltilførsel alene, mens konfliktfellen krever at en fredsavtale kommer på plass først"],
      explanation: "Begge er selvforsterkende sirkler, men den ene har lav sparing og lav investering som ledd, den andre har vold. Det er voldsleddet som gjør konfliktfellen så vanskelig å bryte.",
    },
    {
      question: "Hva er grep-markøren som løfter en konfliktbesvarelse fra god til beste?",
      options: ["Å vise at valget av målestokk for konfliktens kostnad er verdiladet, og at den bredeste målestokken er den som fanger sirkelen", "Å gi en detaljert oversikt over konfliktens forløp med årstall, parter og vendepunkter, slik at analysen får et solid faktagrunnlag", "Å sammenligne flere konfliktrammede land og vise at mekanismen virker likt i alle, slik at funnet framstår som robust", "Å påvise at konflikt er den viktigste enkeltårsaken til at land forblir fattige, og bygge hele svaret rundt den påstanden"],
      explanation: "Regnes kostnaden i tapt produksjon det året krigen varte, blir den moderat. Regnes den i levealder, skolegang og folks reelle muligheter over en generasjon, blir den stor — og valget mellom dem er ikke teknisk.",
    },
  ],
  'utv1000-4-2': [
    {
      question: "Hvordan defineres korrupsjon i faget?",
      options: ["Som misbruk av offentlig makt eller betrodd myndighet for privat vinning, der det er selve rollen som misbrukes og ikke bare pengene", "Som ulovlige betalinger mellom private aktører og offentlig ansatte, uavhengig av om noen beslutning faktisk blir påvirket av dem", "Som enhver bruk av offentlige midler som ikke gir det resultatet bevilgningen var ment å skulle gi innenfor budsjettperioden", "Som brudd på de reglene som gjelder for offentlige anskaffelser, slik de er nedfelt i lovverket i det enkelte landet"],
      explanation: "Tre ledd gjør arbeid: at det er en offentlig eller betrodd rolle som misbrukes, at handlingen bryter med det rollen forplikter til, og at fordelen tilfaller noen privat.",
    },
    {
      question: "Hva er byråkratisk korrupsjon?",
      options: ["Korrupsjon i forvaltningens utøvende ledd, der anvendelsen av en regel selges", "Korrupsjon som utføres av ansatte i offentlig sektor uten at politisk ledelse i departementet er kjent med eller involvert i den", "Korrupsjon som er så utbredt at den er blitt en normal del av hvordan forvaltningen fungerer i det aktuelle landet", "Korrupsjon knyttet til utstedelse av tillatelser og lisenser, i motsetning til korrupsjon knyttet til innkjøp og anbud"],
      explanation: "Små beløp, mange transaksjoner, og det rammer folk i deres møte med staten. Utviklingsvirkningen går gjennom tilgang: tjenesten finnes, men fordeles etter betalingsevne i stedet for etter rett.",
    },
    {
      question: "Hva er politisk korrupsjon?",
      options: ["Korrupsjon i den politiske toppen, der selve utformingen av reglene selges — reglene kjøpes", "Korrupsjon som involverer folkevalgte, i motsetning til korrupsjon som involverer ansatte i den utøvende forvaltningen", "Bruk av offentlige midler til å finansiere partiarbeid og valgkamp i strid med reglene om partifinansiering i landet", "Korrupsjon som er blitt avdekket og forfulgt politisk, og som derfor har fått konsekvenser for regjeringens sammensetning"],
      explanation: "Store beløp, få transaksjoner, og ofte lovlig i formen: et anbud kan være helt korrekt gjennomført og likevel skrevet slik at bare én aktør kan vinne det.",
    },
    {
      question: "Hva er den presise forskjellen på byråkratisk og politisk korrupsjon?",
      options: ["Byråkratisk korrupsjon selger anvendelsen av regelen og avgjør hvem som får det som finnes; politisk korrupsjon selger utformingen og avgjør hva som finnes", "Byråkratisk korrupsjon foregår i lavinntektsland mens politisk korrupsjon også forekommer i land med høyt inntektsnivå og velfungerende institusjoner", "Byråkratisk korrupsjon er ulovlig i alle land, mens politisk korrupsjon i mange tilfeller faller innenfor det regelverket som gjelder", "Byråkratisk korrupsjon involverer små beløp mens politisk korrupsjon involverer store, og det er beløpsgrensen som avgjør klassifiseringen"],
      explanation: "Den ene selger anvendelsen av regelen, den andre utformingen av den. Å utelate denne distinksjonen er feil #8 i bokas register, og det er den enkeltfeilen som oftest gjør et B-svar til et C-svar her.",
    },
    {
      question: "Hva skiller korrupsjon fra ineffektivitet?",
      options: ["At noen tar noe — ved ineffektivitet brukes ressursene dårlig, men de omdirigeres ikke til privat fordel", "At korrupsjon er ulovlig mens ineffektivitet bare er uheldig, og at de to derfor hører hjemme i helt ulike deler av forvaltningsretten", "At korrupsjon rammer utviklingsmålene direkte mens ineffektivitet bare gir høyere kostnader uten å påvirke resultatene som oppnås", "At korrupsjon kan måles gjennom rettssaker og anmeldelser mens ineffektivitet bare kan avdekkes gjennom revisjon av regnskapene"],
      explanation: "De to krever ulike tiltak. Ineffektivitet kan avhjelpes med bedre systemer og opplæring; korrupsjon har en aktør som tjener på at systemet forblir som det er, og som derfor kan motarbeide reformen.",
    },
    {
      question: "Hvorfor er «byråkratisk mot politisk» ikke det samme skillet som «småskala mot storskala»?",
      options: ["Fordi det ene skillet handler om hva som faktisk selges — anvendelsen eller utformingen av regelen — og det andre bare om beløpets størrelse", "Fordi småskala korrupsjon alltid er byråkratisk mens storskala korrupsjon kan være både byråkratisk og politisk avhengig av sektor", "Fordi skalaen avhenger av landets inntektsnivå, slik at det samme beløpet kan være småskala i ett land og storskala i et annet", "Fordi skalaskillet brukes i statistikk og økonomisk analyse mens formskillet hører hjemme i den statsvitenskapelige litteraturen"],
      explanation: "En tollstasjon der hundrevis av forsendelser hver måned slipper gjennom mot betaling, er byråkratisk i formen, men ikke småskala i sum. Å si hvilket skille du legger til grunn, er presisjonen Akse 2 måler.",
    },
    {
      question: "Hvorfor er statlig styringsevne det begrepet som gjør korrupsjon til et utviklingstema?",
      options: ["Fordi korrupsjon ikke virker direkte på utviklingen, men gjennom å svekke statens egen evne til å omsette et vedtak til et resultat", "Fordi styringsevne er den eneste av statens egenskaper som lar seg måle på en måte som gjør sammenligninger mellom land mulige", "Fordi utviklingsteoriene er enige om at staten er den avgjørende aktøren i enhver utviklingsprosess uansett hvilken vei landet velger", "Fordi svak styringsevne er den vanligste forklaringen på at bistand ikke gir de resultatene giverne hadde forventet seg av den"],
      explanation: "Uten det leddet blir kortsvaret en moralsk betraktning i stedet for en mekanisme. Styringsevne er om staten virker; legitimitet er om den anerkjennes.",
    },
    {
      question: "Hva er mekanismen som forklarer at et budsjett kan vokse uten at utviklingsmålene beveger seg?",
      options: ["At sammensetningen av investeringene forskyves mot de store og tekniske prosjektene der en skjult påplussing er aller lettest å gjemme bort", "At inflasjonen spiser opp bevilgningsøkningen, slik at det reelle nivået på tjenestene ikke endrer seg i den perioden budsjettet vokser", "At befolkningsveksten gjør at beløpet per innbygger står stille selv om det samlede budsjettet vokser betydelig i den samme perioden", "At bistandsmidler som kommer i tillegg til budsjettet ofte erstatter innenlandske bevilgninger i stedet for å komme på toppen av dem"],
      explanation: "Mange små tiltak med kjente enhetspriser gir langt mindre rom enn ett stort prosjekt gjør. Budsjettet kan være uendret og likevel gi mindre utvikling, fordi det som bygges, ikke er det som ville gitt mest.",
    },
    {
      question: "Hva menes med at byråkratisk korrupsjon er regressiv?",
      options: ["At den samme betalingen utgjør en langt større andel av inntekten for den som har lite, enn den gjør for den som har mye fra før", "At omfanget av den avtar etter hvert som et land blir rikere, fordi lønningene i forvaltningen stiger og oppdagelsesrisikoen øker", "At den rammer hardest i de sektorene der det offentlige tilbudet allerede er svakest, og dermed forsterker eksisterende forskjeller", "At den fører til at skattegrunnlaget krymper, slik at staten må hente inn en større andel av inntektene fra indirekte skatter"],
      explanation: "Den virker som en skatt der satsen er høyest for dem med minst. Virkningen forsterkes av at de tjenestene som rammes, er de som betyr mest for dem som har færrest alternativer.",
    },
    {
      question: "Hvordan kobles korrupsjon til indeksen for menneskelig utvikling?",
      options: ["Korrupsjonens fire mekanismer treffer alle de tre dimensjonene i indeksen — helse, utdanning og inntekt — på samme tid", "Land med høy korrupsjon havner systematisk lavere på indeksen enn land med lav korrupsjon på samme inntektsnivå gjør", "Indeksen inneholder et eget mål på styresettets kvalitet, og korrupsjon trekker den komponenten ned i de landene der den er utbredt", "Korrupsjon reduserer skatteinntektene, og dermed også de offentlige utgiftene som indeksen bygger på i beregningen sin"],
      explanation: "Helse og utdanning rammes i leveranseleddet og gjennom prioriteringene; inntekt rammes gjennom svakere investeringer og konkurranse. Derfor er utviklingsvirkningen større enn beløpene som forsvinner.",
    },
    {
      question: "Hva er smøringsargumentet, og hvordan skal det behandles?",
      options: ["At korrupsjon kan få beslutninger til å gå raskere i et tregt system — og det skal fremstilles i sin sterkeste form og deretter prøves", "At små uformelle betalinger er så utbredte at de i praksis må regnes som en del av lønnen i forvaltningen, og derfor bør legaliseres", "At korrupsjon i private bedrifter er mindre alvorlig enn korrupsjon i offentlig sektor fordi den ikke rammer fellesskapets midler", "At bekjempelse av korrupsjon koster mer enn korrupsjonen selv i land der forvaltningen mangler kapasitet til å gjennomføre kontroll"],
      explanation: "Å late som om posisjonen ikke finnes, svekker drøftingen; å godta den uten prøving, svekker den like mye. Bardhan er navnet pensum bruker på gjennomgangen av debatten.",
    },
    {
      question: "Hva er den tyngste innvendingen mot smøringsargumentet?",
      options: ["At argumentet tar selve tregheten for gitt, mens den som mottar betalingene, har egeninteresse av at systemet forblir tregt", "At det ikke finnes empiriske studier som viser at uformelle betalinger faktisk får saksbehandlingen til å gå raskere enn den ellers ville", "At argumentet bygger på erfaringer fra enkelte sektorer og ikke lar seg overføre til forvaltningen som helhet i et land", "At det strider mot de internasjonale konvensjonene mot korrupsjon som de fleste land har sluttet seg til de siste tiårene"],
      explanation: "Da er ikke korrupsjonen en løsning på problemet, den er en grunn til at problemet består. De to andre innvendingene gjelder fordelingen og forutsigbarheten.",
    },
    {
      question: "Hva er Bardhans skille mellom en økonomisk og en verdiladet forståelse av korrupsjon?",
      options: ["Den økonomiske forklarer korrupsjon med insentiver og oppdagelsesrisiko, mens den verdiladede behandler den som et brudd på en norm", "Den økonomiske måler korrupsjonens kostnad i tapt produksjon, mens den verdiladede måler den i tap av tillit til institusjonene", "Den økonomiske gjelder korrupsjon i næringslivet, mens den verdiladede gjelder korrupsjon i offentlig forvaltning og politikk", "Den økonomiske ser korrupsjon som et resultat av fattigdom, mens den verdiladede ser den som en årsak til at fattigdommen består"],
      explanation: "Begge trengs. Den økonomiske alene gjør korrupsjon til et teknisk problem; den verdiladede alene gjør den til et moralsk spørsmål uten mekanisme å gripe inn i.",
    },
    {
      question: "Hva er måleproblemet i korrupsjonslitteraturen?",
      options: ["At korrupsjon er skjult og derfor ikke lar seg måle direkte — mye av det som brukes, er oppfatningsbaserte mål på nivået", "At land rapporterer korrupsjonstall etter ulike definisjoner, slik at tallene ikke kan sammenlignes på tvers av landegrensene", "At korrupsjonens omfang varierer så mye mellom sektorer at et samlet tall for et helt land blir lite informativt i praksis", "At avdekket korrupsjon øker når kontrollen forbedres, slik at forbedret kontroll gir inntrykk av at problemet vokser"],
      explanation: "Oppfatninger kan påvirkes av medieoppmerksomhet like mye som av faktisk omfang, og korrupsjon og ineffektivitet er vanskelige å skille i regnskaper. Olken & Pande står i pensums eksempellager for denne litteraturen.",
    },
    {
      question: "Er korrupsjon årsak til eller virkning av underutvikling?",
      options: ["Begge deler samtidig — og det er samtidigheten som gjør den vanskelig å reformere bort", "I hovedsak en virkning, siden svake institusjoner og lave lønninger i forvaltningen kommer før korrupsjonen får omfang", "I hovedsak en årsak, siden land med lav korrupsjon systematisk har hatt sterkere utvikling over tid enn land med høy", "Det avhenger av hvilken form det er tale om, siden politisk korrupsjon er en årsak og byråkratisk korrupsjon en virkning"],
      explanation: "Korrupsjon svekker styringsevnen, og svake institusjoner gjør korrupsjon mulig og forutsigbar. Formen er den samme som i konfliktfellen fra kapitlet før.",
    },
    {
      question: "Hvorfor er det faglig galt å forklare korrupsjon med kultur eller nasjonalitet?",
      options: ["Fordi det ikke gir noen mekanisme, og fordi det ikke forklarer variasjon innad i samme land eller endring over tid", "Fordi kulturelle forklaringer er umulige å etterprøve empirisk og derfor ikke kan brukes i noen form for samfunnsvitenskapelig analyse", "Fordi korrupsjon er like utbredt i alle land når man tar hensyn til at rike land har bedre muligheter til å skjule den enn fattige har", "Fordi det er kolonitidens institusjoner og ikke kulturen i landet som forklarer forskjellene i korrupsjonsnivå mellom stater i dag"],
      explanation: "Faget forklarer korrupsjon med institusjonelle betingelser: lønnsnivå, beslutningsmyndighet, oppdagelsesrisiko, konsekvenser, åpenhet og klageadgang. Endres betingelsene, endres omfanget.",
    },
    {
      question: "Hva skiller bestikkelse fra underslag?",
      options: ["At bestikkelse har to parter som deltar frivillig, mens underslag er én som handler mot fellesskapet", "At bestikkelse gjelder beslutninger som skal fattes, mens underslag gjelder midler som allerede er utbetalt til mottakeren", "At bestikkelse er straffbart for begge parter, mens underslag bare er straffbart for den som har forvaltningsansvaret", "At bestikkelse forekommer i alle deler av forvaltningen, mens underslag bare forekommer der noen har direkte tilgang til kontanter"],
      explanation: "Skillet betyr noe for utviklingsvirkningen: underslag reduserer hvor mye som finnes, mens bestikkelse avgjør hvem som får det som finnes.",
    },
    {
      question: "Hvorfor virker korrupsjon verre enn en skatt for en bedrift?",
      options: ["Fordi den er uforutsigbar og ikke rettskraftig — ingen vet hva prisen blir neste gang, og ingen instans kan klages til den", "Fordi den kommer i tillegg til skatten og dermed øker den samlede byrden på virksomheten utover det lovverket legger opp til", "Fordi den rammer små bedrifter hardere enn store, og dermed hindrer nyetablering i de sektorene der veksten ellers ville kommet", "Fordi den ikke gir noen offentlige tjenester tilbake, slik skatten gjør gjennom infrastruktur, utdanning og rettsvesen"],
      explanation: "Det er ikke prisen på korrupsjonen som rammer investeringene hardest, men usikkerheten om hva prisen blir. Der tillatelser kan kjøpes, får dessuten de etablerte en fordel over de nye og små.",
    },
    {
      question: "Hva er nepotisme, og hvorfor virker den over lengre tid enn en enkelt bestikkelse?",
      options: ["Å gi stillinger og kontrakter etter tilhørighet i stedet for etter kriterier — det er selve rekrutteringen som blir rammet", "Å ansette familiemedlemmer i offentlige stillinger uten at det foreligger noen formell utlysning av stillingen på forhånd", "Å bruke offentlige midler til å støtte virksomheter som er eid av personer i ens egen politiske krets eller lokalsamfunn", "Å favorisere bestemte regioner ved fordeling av offentlige investeringer, slik at ressursene følger politiske lojalitetslinjer"],
      explanation: "Formen er lettere å overse fordi ingen penger nødvendigvis skifter hender, og fordi den ofte er lovlig i formen. Den avgjør hvem som får forvalte ressursene, og dermed hvor kompetent forvaltningen blir over tid.",
    },
    {
      question: "Hva bør et kortsvar om korrupsjon inneholde på trinn to, distinksjonen?",
      options: ["Byråkratisk mot politisk korrupsjon, som gir mekanismeforskjellen nesten gratis: den ene avgjør hvem som får, den andre hva som finnes", "En oversikt over de vanligste formene korrupsjon kan ta, med eksempler på hver av dem fra ulike sektorer og forvaltningsnivåer", "En vurdering av om korrupsjonen i eksempelet ditt er utbredt eller sjelden, siden omfanget avgjør hvor stor utviklingsvirkningen blir", "En avklaring av om du bruker en juridisk eller en samfunnsvitenskapelig definisjon av begrepet i den videre framstillingen"],
      explanation: "Distinksjonen er billig å ta med og gir deg mekanismeforskjellen: den ene avgjør hvem som får det som finnes, den andre hva som finnes.",
    },
    {
      question: "Hva er grep-markøren som løfter en korrupsjonsbesvarelse fra god til beste?",
      options: ["Å vise at valget av målestokk for skaden er verdiladet, og at den regressive byrden bare blir helt synlig med den bredeste", "Å dokumentere korrupsjonens omfang med tall fra flere kilder, slik at analysen hviler på et bredest mulig empirisk grunnlag", "Å foreslå konkrete tiltak mot korrupsjonen i det landet eksempelet handler om, og begrunne dem i litteraturen om reform", "Å vise at korrupsjon forekommer i alle land, slik at framstillingen ikke blir ensidig rettet mot land i det globale sør"],
      explanation: "Regner vi i tapte ressurser, er skaden lik beløpet. Regner vi i menneskelig utvikling, er den større — fordi mekanismene treffer helse, utdanning og inntekt samtidig, og fordi byrden er tyngst for dem målene handler om.",
    },
    {
      question: "Hvorfor er «korrupsjon er når politikere tar bestikkelser» en dårlig åpning på et kortsvar?",
      options: ["Fordi den utelater byråkratisk korrupsjon, som er formen som rammer flest mennesker direkte", "Fordi den bruker et hverdagslig språk der oppgaven forventer at kandidaten viser kjennskap til den faglige terminologien i emnet", "Fordi den forutsetter at politikere er de eneste som har den typen beslutningsmyndighet som kan gjøres til gjenstand for betaling", "Fordi bestikkelser er den formen som er lettest å avdekke, og som derfor gir et misvisende bilde av korrupsjonens samlede omfang"],
      explanation: "Definisjonen er for smal og dekker bare den ene formen. Det er feil #8 i bokas register: glemte distinksjoner. Åpningen låser deg dessuten til den formen som er lettest å fordømme og vanskeligst å måle.",
    },
  ],
  'utv1000-5-1': [
    {
      question: "Hva er menneskelig utvikling?",
      options: ["Utvikling forstått som utvidelse av menneskers reelle friheter og muligheter — hva folk faktisk kan gjøre og være", "Utvikling som gir seg utslag i bedre levekår, målt gjennom levealder og materiell velstand", "Den delen av et lands utvikling som kommer befolkningen til gode, i motsetning til den delen som tilfaller utenlandske investorer", "Utvikling der veksten i økonomien fordeles jevnere enn tidligere, slik at også de fattigste gruppene får del i framgangen"],
      explanation: "To ledd gjør arbeid: at mulighetene skal være reelle og ikke bare formelle, og at det er utvidelsen som er utviklingen. Økonomisk vekst er en økning i produksjonen — de to kan gå fra hverandre i begge retninger.",
    },
    {
      question: "Hva er kapabiliteter (capabilities) hos Sen?",
      options: ["De reelle mulighetene en person har til å gjøre og være ting hun har grunn til å verdsette", "De ferdighetene en person har tilegnet seg gjennom utdanning og arbeidserfaring, og som gjør henne i stand til å delta i økonomien", "De rettighetene et samfunn formelt garanterer innbyggerne sine gjennom lovverk, forfatning og internasjonale forpliktelser", "De ressursene en person disponerer, medregnet inntekt, eiendom og tilgang til offentlige tjenester i det området hun bor"],
      explanation: "Det avgjørende er ordet «reelle». En kapabilitet er verken en formell rettighet eller en ressurs — det er hva som faktisk står åpent for personen.",
    },
    {
      question: "Hva er en omformingsfaktor, og hvorfor er begrepet kapitlets viktigste?",
      options: ["Et forhold som avgjør hvor mye kapabilitet en gitt mengde ressurser gir for en gitt person — det er begrunnelsen for at inntekt bare er et middel", "En faktor som brukes til å regne om inntekt målt i lokal valuta til en størrelse som kan sammenlignes på tvers av land og perioder", "En mekanisme som gjør at økonomisk vekst over tid omsettes i bedre levekår, forutsatt at fordelingen i samfunnet er tilstrekkelig jevn", "Et forhold som forklarer hvorfor bistand gir ulike resultater i ulike mottakerland selv når beløpene per innbygger er de samme"],
      explanation: "Fordi disse faktorene varierer systematisk, gir samme inntekt svært ulik frihet. Alle vet at inntekt ikke fanger alt; Sens grep er å forklare hvorfor.",
    },
    {
      question: "Hvilke tre grupper deles omformingsfaktorene i?",
      options: ["Personlige forhold, sosiale forhold, og miljømessige eller infrastrukturelle forhold rundt den enkelte personen", "Økonomiske, politiske og kulturelle forhold, som til sammen bestemmer hvor mye frihet ressursene gir", "Individuelle, nasjonale og globale forhold, avhengig av hvilket nivå hindringen befinner seg på", "Materielle, institusjonelle og psykologiske forhold, som hver for seg kan hindre omsetningen"],
      explanation: "Helse og funksjonsevne; normer, diskriminering og maktforhold i husholdningen; klima, avstander og tilgang til skole og klinikk. Penger til skolegang hjelper lite der det ikke er en skole.",
    },
    {
      question: "Hva er forskjellen på en kapabilitet og en realisert funksjon?",
      options: ["Kapabilitet er hele settet av tilstander personen kunne valgt; realisert funksjon er det hun faktisk gjør og er", "Kapabilitet gjelder de mulighetene et samfunn tilbyr, mens realisert funksjon gjelder de mulighetene den enkelte klarer å benytte seg av", "Kapabilitet er en teoretisk konstruksjon som ikke lar seg måle, mens realisert funksjon er den delen av begrepet som kan observeres i data", "Kapabilitet gjelder framtidige muligheter, mens realisert funksjon gjelder de mulighetene personen har hatt tilgang til fram til nå"],
      explanation: "Den ene faster fordi hun har valgt det; den andre sulter fordi hun ikke har noe å spise. Utfallet ser likt ut, men mulighetsrommet er ikke det samme — og det er mulighetsrommet som er utviklingen.",
    },
    {
      question: "Hva er den avgjørende distinksjonen mellom inntekt og kapabilitet?",
      options: ["Inntekt måler hva du rår over; kapabilitet måler hva de midlene du rår over, faktisk gjør deg i stand til å gjøre", "Inntekt kan måles presist i alle land, mens kapabilitet må anslås gjennom indikatorer som varierer", "Inntekt gjelder husholdningen som helhet, mens kapabilitet gjelder den enkelte personen i den", "Inntekt er et resultat av økonomisk aktivitet, mens kapabilitet er et resultat av offentlige tjenester"],
      explanation: "Å utelate distinksjonen er feil #8 i bokas register. Uten den blir svaret en påstand om at «utvikling er mer enn penger», som er riktig og innholdsløst.",
    },
    {
      question: "Hva menes med at frihet hos Sen er både mål og middel?",
      options: ["Utvidelsen av mulighetene er selve utviklingen, og frie mennesker er samtidig dem som driver prosessen videre", "Frihet er et mål i rike land der grunnbehovene er dekket, og et middel i fattige land der de ikke er det ennå", "Frihet gir både en gevinst for den enkelte og en gevinst for samfunnet, og de to gevinstene må veies mot hverandre i politikken", "Politisk frihet er målet for utviklingen, mens økonomisk frihet er det middelet som gjør at målet kan nås over tid"],
      explanation: "Dobbeltheten er svaret på innvendingen om at menneskelig utvikling er et «mykt» hensyn som kommer etter veksten. Utdanning og helse er både mål og produksjonsfaktorer.",
    },
    {
      question: "Hva er handlekraft (agency) i kapabilitetstenkningen?",
      options: ["En persons evne til å forfølge de målene hun selv har grunn til å verdsette — å være den som handler i sitt eget liv", "Statens evne til å gjennomføre den politikken den har vedtatt, slik at bevilgninger blir tjenester", "Den innflytelsen sivilsamfunnet og frivillige organisasjoner har over utformingen av utviklingsprosjekter i et lokalsamfunn", "Den delen av en persons muligheter som avhenger av egen innsats, i motsetning til den delen som avhenger av forhold utenfor"],
      explanation: "Begrepet skiller Sens tilnærming fra en ren velferdstenkning: et menneske kan få behovene dekket uten å ha innflytelse over hvordan. Velferd er tilstanden man er i, handlekraft er hvem som bestemte den.",
    },
    {
      question: "Hvordan defineres fattigdom i kapabilitetstenkningen?",
      options: ["Som mangel på grunnleggende kapabiliteter, ikke først og fremst som lav inntekt", "Som manglende evne til å dekke grunnleggende behov for mat, helse, husly og utdanning i det samfunnet personen lever i", "Som en inntekt under en fastsatt grense, justert for prisnivået i landet og for hvor mange som deler husholdningens inntekt", "Som en situasjon der en person mangler både inntekt og tilgang til de offentlige tjenestene som kunne kompensert for den"],
      explanation: "Omdefinisjonen gjør fattigdom flerdimensjonal, og den gjør at fattigdom også kan finnes der inntektene er høye — en person kan ha penger og likevel være avskåret fra å delta.",
    },
    {
      question: "Hvilke tre dimensjoner setter indeksen for menneskelig utvikling sammen?",
      options: ["Et langt og friskt liv, kunnskap og en anstendig levestandard, målt gjennom forventet levealder, skolegang og inntekt", "Helse, utdanning og politisk deltakelse, som skal fange både materielle og ikke-materielle sider", "Inntekt, ulikhet og fattigdomsandel, slik at både nivået og fordelingen kommer til uttrykk", "Levealder, sysselsetting og infrastruktur, som er de tre områdene med størst forskjeller"],
      explanation: "Målt gjennom forventet levealder, skolegang og inntekt. Indeksen behandles konseptuelt i UTV1000 — selve utregningen hører til utviklingsøkonomien.",
    },
    {
      question: "Hvorfor er inntekt fortsatt én av dimensjonene i et mål som skulle bort fra inntektsmålet?",
      options: ["Fordi inntekt ikke er avvist som middel, men avsatt — fra å være hele målet til å være én av tre dimensjoner", "Fordi inntektsdata er de eneste som finnes for alle land over lang nok tid til sammenligning", "Fordi indeksen skulle kunne sammenlignes direkte med bruttonasjonalprodukt per innbygger for de landene der begge tall finnes", "Fordi inntekt er den dimensjonen som varierer mest mellom land, og som derfor gir indeksen mest av spredningen sin"],
      explanation: "Inntekt er tatt med som en tilnærming til alle de mulighetene som ikke lar seg måle hver for seg. Det er en pragmatisk løsning, ikke en teoretisk.",
    },
    {
      question: "Hva var det banebrytende ved fokusskiftet rundt 1990?",
      options: ["At det for første gang forelå et alternativt hovedtall som kunne stilles opp ved siden av inntektsmålet i offentlig debatt", "At helse og utdanning for første gang ble regnet som utviklingsmål, etter at faget tidligere bare hadde vært opptatt av produksjon", "At Sen utviklet kapabilitetstilnærmingen og dermed ga faget den teoretiske begrunnelsen det til da hadde manglet helt", "At internasjonale institusjoner for første gang forpliktet seg til konkrete mål for helse og utdanning i lavinntektsland"],
      explanation: "Ideen var ikke ny — grunnbehovstilnærmingen hadde alt flyttet blikket på 1970-tallet. Det nye var at argumentet kunne føres med tall på begge sider.",
    },
    {
      question: "Hva er den tyngste innvendingen mot indeksen for menneskelig utvikling?",
      options: ["At den bygger på nasjonale gjennomsnitt, mens teorien den skal operasjonalisere, handler om den enkelte personens mulighetsrom", "At den utelater politisk frihet, sikkerhet, arbeidsvilkår og miljø, og at utvalget av dimensjoner derfor er for smalt til å fange utvikling", "At den slår sammen tre svært ulike størrelser til ett tall, og at vektingen mellom dem ikke lar seg begrunne på noen faglig måte", "At den bruker data av ujevn kvalitet fra land med svært ulik statistisk kapasitet, slik at sammenligningene blir upålitelige"],
      explanation: "Et gjennomsnitt er nettopp det verktøyet som ikke kan fange variasjon mellom mennesker. Kritikken er derfor ikke en tilfeldig svakhet, men en spenning i selve konstruksjonen.",
    },
    {
      question: "Hva er forskjellen på kapabilitetstilnærmingen og indeksen?",
      options: ["Den ene er en teori om hva utvikling er; den andre er ett forsøk på å operasjonalisere teorien med data som finnes", "Den ene er utviklet av Sen mens den andre er utviklet av internasjonale institusjoner", "Den ene gjelder enkeltpersoner mens den andre gjelder husholdninger, og forskjellen har konsekvenser for hvilke tiltak som anbefales", "Den ene er normativ og sier hva utvikling bør være, mens den andre er beskrivende og bare registrerer hva som faktisk har skjedd"],
      explanation: "Å behandle dem som samme sak er en av de vanligste feilene i temaet. Kritikk som rammer det ene, rammer ikke nødvendigvis det andre — og å vite det er et av de sikreste løftene her.",
    },
    {
      question: "Hvorfor gir kapabilitetstilnærmingen ingen fast liste over hvilke kapabiliteter som teller?",
      options: ["Fordi fraværet er bevisst — hvilke muligheter som teller, skal avgjøres gjennom offentlig ordskifte i det samfunnet det gjelder", "Fordi kapabilitetene varierer så mye mellom land og kulturer at enhver liste ville måtte skrives på nytt for hvert enkelt samfunn", "Fordi tilnærmingen fortsatt er under utvikling, og fordi forskerne som arbeider med den, ennå ikke er blitt enige om innholdet", "Fordi en liste ville gjort tilnærmingen for lik grunnbehovstilnærmingen, som allerede hadde en fast liste over hva som skulle dekkes"],
      explanation: "En liste fastsatt utenfra ville gjenta nettopp den definisjonsmakten tilnærmingen kritiserer. Innvendingen — at begrepet dermed er vanskelig å bruke i praktisk politikk — er likevel reell.",
    },
    {
      question: "Hva skiller menneskelig utvikling fra økonomisk vekst?",
      options: ["Vekst er en økning i midlene; menneskelig utvikling er en utvidelse av det midlene gjør folk i stand til", "Vekst måles i produksjon mens menneskelig utvikling måles i levealder og utdanning, og de to tallene beveger seg som regel i takt", "Vekst er et kortsiktig mål som svinger med konjunkturene, mens menneskelig utvikling er et langsiktig mål som endrer seg langsomt", "Vekst gjelder økonomien som helhet mens menneskelig utvikling gjelder den enkelte husholdningens situasjon i det samme samfunnet"],
      explanation: "De to henger sammen, men ikke mekanisk: vekst gir ressurser som kan omsettes i utvidede muligheter, men om det skjer, avhenger av fordeling, prioritering og tjenester. Å forveksle dem er feil #3.",
    },
    {
      question: "Hva skiller kapabilitetstilnærmingen fra grunnbehovstilnærmingen?",
      options: ["Grunnbehov spør hva folk har fått dekket; kapabiliteter spør hva folk kan gjøre og være med det de har", "Grunnbehov gjelder de fattigste gruppene i et samfunn, mens kapabilitetstilnærmingen gjelder befolkningen som helhet uansett inntekt", "Grunnbehov er knyttet til internasjonale institusjoner og deres målsettinger, mens kapabilitetstilnærmingen er en rent akademisk posisjon", "Grunnbehov er en målemetode mens kapabilitetstilnærmingen er en politisk strategi, og de to hører derfor hjemme på ulike nivåer"],
      explanation: "Grunnbehov er et utfallsmål, og et utfallsmål kan ikke skille mellom den som faster og den som sulter. Grunnbehov var en utvidelse av hva som telles; kapabiliteter er en endring av hva utvikling er.",
    },
    {
      question: "Hva er det galt å tilskrive Sen?",
      options: ["Indeksen for menneskelig utvikling som måleverktøy, og bærekraftsdimensjonen, som kommer fra Brundtland-kommisjonens arbeid", "Skillet mellom kapabiliteter og realiserte funksjoner, som er et generelt filosofisk skille", "Kritikken av bruttonasjonalprodukt som utviklingsmål, som var reist av mange andre lenge før", "Begrepet handlekraft, som stammer fra en bredere diskusjon om struktur og aktør i faget"],
      explanation: "Teorien kom først, operasjonaliseringen etterpå i et institusjonelt arbeid. Bærekraftsformuleringen kommer fra Brundtland-kommisjonen. Et navn med feil poeng trekker mer ned enn et poeng uten navn.",
    },
    {
      question: "Hva står McNeill for i dette stoffet?",
      options: ["Behandlingen av menneskelig utvikling som begrep, og særlig poenget om hvor elastisk et slikt bredt begrep er", "Den empiriske dokumentasjonen av at land med lik inntekt kan få svært ulike utfall", "Utviklingen av de indikatorene som brukes til å måle utdanningsdimensjonen i indeksen", "Kritikken av at brede utviklingsmål bygger på nasjonale gjennomsnitt og skjuler ulikhet"],
      explanation: "Et begrep alle kan slutte seg til, forplikter sjelden noen til noe bestemt. Det er en kritisk observasjon som hører med i drøftingen, ikke en avvisning.",
    },
    {
      question: "Hva bør et kortsvar om menneskelig utvikling ha på trinn tre, mekanismen?",
      options: ["Omformingsfaktorene — forklaringen på hvorfor de samme ressursene gir ulik frihet, med alle de tre gruppene av dem", "En gjennomgang av de tre dimensjonene i indeksen og av hvordan de settes sammen til ett tall", "En sammenligning av indeksen og bruttonasjonalproduktet for et utvalg land over de siste tiårene", "En vurdering av om menneskelig utvikling eller økonomisk vekst er det beste målet på framgang"],
      explanation: "Mekanismen er trinnet som skiller et kortsvar fra en definisjon. Den som har omformingsfaktorene innøvd som formulering, kan bruke tiden på eksempelet og drøftingen i stedet.",
    },
    {
      question: "Hvorfor er formuleringen «utvikling er utvidelse av friheter» både sterk og risikabel?",
      options: ["Den er kort nok til åpningen og rik nok til å bære svaret, men så elastisk at alle kan slutte seg til den", "Den er presis nok til å brukes som definisjon, men for teoretisk til at den lar seg knytte til konkrete eksempler i en besvarelse", "Den fanger kjernen i Sens tilnærming, men den utelater handlekraften, som er den delen av tilnærmingen sensor spør mest om", "Den er lett å huske, men den er også den formuleringen flest kandidater bruker, og skiller derfor ikke besvarelsen fra de andre"],
      explanation: "Nettopp fordi alle kan slutte seg til den, må du vise hva den utelukker — ellers blir den en honnørsetning i stedet for en definisjon.",
    },
    {
      question: "Hvor står kapabilitetstenkningen i dag?",
      options: ["Den har vunnet språket og bare delvis politikken — utviklingsmål formuleres i dens termer, mens prioriteringene ofte begrunnes i vekstens", "Den er blitt den rådende posisjonen i faget, og vekstspråket har i praksis forsvunnet fra måten utviklingsmål begrunnes på i dag", "Den er i hovedsak en historisk posisjon fra 1990-tallet, som er blitt avløst av bærekraftstenkningen og dens vekt på framtidige generasjoner", "Den brukes i akademisk sammenheng, men har aldri fått gjennomslag i hvordan internasjonale institusjoner formulerer målene sine"],
      explanation: "At mål spesifiseres i helse, utdanning, likestilling, vann og deltakelse framfor i produksjon alene, er kapabilitetstenkningens språk. Bærekraftsmålene er bygget over den logikken.",
    },
    {
      question: "Hva er grep-markøren som løfter en besvarelse om menneskelig utvikling?",
      options: ["Å vise at tilnærmingen ikke bare flytter selve målestokken, men også flytter hvem som skal få lov til å sette den", "Å gjennomgå alle tre dimensjonene i indeksen og vise hvordan hver av dem har utviklet seg", "Å sammenligne indeksen med bruttonasjonalprodukt for flere land og vise at rangeringene skiller seg", "Å påvise at kapabilitetstenkningen er den mest fullstendige utviklingsteorien som finnes"],
      explanation: "Tilnærmingen gir bevisst ingen liste over hvilke muligheter som teller, og flytter dermed spørsmålet «hva er utvikling?» fra eksperten til det offentlige ordskiftet. Det er dens mest radikale og dens mest kritiserte trekk.",
    },
    {
      question: "Hvorfor er et rent inntektsmål systematisk skjevt og ikke bare unøyaktig?",
      options: ["Fordi det overvurderer friheten til dem med gunstige omformingsfaktorer og undervurderer den til dem med ugunstige", "Fordi inntekt registreres dårligere i land med stor uformell sektor, slik at fattige land systematisk framstår som fattigere enn de er", "Fordi inntekt måles som gjennomsnitt og derfor alltid vil ligge høyere enn medianen i samfunn der inntektene er ujevnt fordelt", "Fordi prisnivået varierer mellom land, slik at samme nominelle inntekt gir svært ulik kjøpekraft avhengig av hvor personen bor"],
      explanation: "Skjevheten går samme vei hver gang, og det er nettopp derfor Sens grep er en teoretisk begrunnelse og ikke bare en observasjon om at inntekt ikke fanger alt.",
    },
  ],
  'utv1000-5-2': [
    {
      question: "Hva er den grunnleggende uenigheten mellom nyliberalisme og menneskelig utvikling?",
      options: ["De er uenige om hva utvikling er: den ene identifiserer den med vekst i produksjon og inntekt, den andre med utvidelsen av folks reelle friheter", "De er uenige om hvor raskt utvikling kan skje i et lavinntektsland", "De er uenige om hvilke land som bør regnes som utviklet og ikke", "De er uenige om hvor mye bistand rike land bør gi til fattige land"],
      explanation: "Uenigheten er ikke om inntekt er nyttig, men om den er målet. Alle de andre forskjellene mellom de to følger av denne ene.",
    },
    {
      question: "Hva er et parallellreferat?",
      options: ["Ett avsnitt om hvert perspektiv uten en eneste felles akse", "En besvarelse som gjengir de to perspektivenes historiske utvikling i kronologisk rekkefølge i stedet for å analysere innholdet i dem", "En sammenligning der begge perspektivene får like mye plass, men der bare det ene av dem er forankret i pensumlitteraturen med navn", "En framstilling der de to perspektivene beskrives med de samme begrepene, slik at forskjellene mellom dem forsvinner underveis"],
      explanation: "Sletteprøven avslører den: kan du fjerne det ene avsnittet uten at det andre blir vanskeligere å forstå, er det et parallellreferat. Teksten kan være helt korrekt og likevel stoppe på C.",
    },
    {
      question: "Hva kreves av en sammenligningsakse for at den skal være brukbar?",
      options: ["Den må være et spørsmål begge perspektivene har et svar på, og svarene må skille seg fra hverandre", "Den må være hentet fra pensumlitteraturen og ikke konstruert av kandidaten selv underveis i besvarelsen", "Den må gjelde et tema som har vært oppe i tidligere eksamenssett", "Den må kunne belegges med tallmateriale fra minst to ulike land"],
      explanation: "«Statens rolle» er et tema; «hva skal staten gjøre, og hvorfor?» er en akse. Er det bare det ene perspektivet som uttaler seg, har du funnet en forskjell i interesse og ikke en uenighet.",
    },
    {
      question: "Hva er nyliberalismens syn på statens rolle?",
      options: ["At staten skal sikre eiendomsrett, kontrakter og stabile rammer, og ellers trekke seg tilbake fra produksjon og prisdannelse", "At staten ikke skal ha noen oppgaver i økonomien i det hele tatt", "At staten skal styre markedet mot konkurransedyktige næringer", "At staten skal eie infrastruktur, men ikke produksjonsbedrifter"],
      explanation: "Begrunnelsen er at politisk styring har svakere informasjon og svakere insentiver enn priser har. Merk at uenigheten med menneskelig utvikling gjelder hvilke oppgaver staten skal ha, ikke om den skal ha noen.",
    },
    {
      question: "Hva er menneskelig utviklings syn på statens rolle?",
      options: ["At staten skal tilrettelegge for kapabiliteter — helse, utdanning, vann, rettsvesen og vern mot diskriminering", "At staten bør overta produksjonen i de viktigste sektorene og drive dem uten krav til lønnsomhet", "At staten bør fordele inntektene jevnere gjennom skatt og overføringer, slik at forskjellene mellom husholdninger blir mindre over tid", "At staten bør styre investeringene mot de næringene der landet har best forutsetninger for å bli konkurransedyktig internasjonalt"],
      explanation: "Begrunnelsen er at nettopp de godene har svak markedsdekning, og at de samtidig er de mest virkningsfulle omformingsfaktorene.",
    },
    {
      question: "Hva er forskjellen på de to perspektivenes menneskesyn?",
      options: ["Nyliberalismen modellerer mennesket som en økonomisk aktør som svarer på priser og insentiver; menneskelig utvikling ser det som handlende, med egne mål det har grunn til å verdsette", "Nyliberalismen ser mennesket som rasjonelt, menneskelig utvikling som følelsesstyrt", "Nyliberalismen ser mennesket som individ, menneskelig utvikling som del av en gruppe", "Nyliberalismen ser mennesket som produsent, menneskelig utvikling som forbruker"],
      explanation: "Aksen forklarer hvorfor de to vurderer samme tiltak ulikt: et program som hever inntekten uten å gi noen innflytelse over egne forhold, er en suksess i den første rammen og et delvis svar i den andre.",
    },
    {
      question: "Hvorfor er målevalget en sentral akse i denne sammenligningen?",
      options: ["Fordi målevalget følger av hva hver av dem mener utvikling er, og de derfor kan lese samme land ulikt", "Fordi måling er den eneste delen av utviklingsdebatten der det finnes tall å bygge på", "Fordi begge perspektivene bruker de samme dataene og bare tolker dem ulikt", "Fordi indeksen for menneskelig utvikling er nyere enn produksjonsmålet"],
      explanation: "Nyliberalismen måler produksjon og inntekt; menneskelig utvikling måler helse, kunnskap og levestandard sammen. Den som velger målestokken, har allerede valgt hva som skal telle som framgang.",
    },
    {
      question: "Hva er nyliberalismens sterkeste argument i denne kontrasten?",
      options: ["At ressurser må skapes før de kan fordeles — helse, utdanning og rettsvesen koster, og markedet kanaliserer ressurser dit de gir mest igjen", "At alle land som har utviklet seg raskt, har fulgt en markedsorientert strategi fra begynnelsen av og holdt statens rolle begrenset hele veien", "At offentlige tjenester i lavinntektsland gjennomgående har lav kvalitet, og at private leverandører derfor er bedre egnet til å drive dem", "At bistand med vilkår har vist seg mer effektiv enn bistand uten vilkår, og at markedsreformer derfor bør gjøres til en betingelse for støtte"],
      explanation: "Priser bærer informasjon ingen planlegger har tilgang til. Tilleggsargumentet er at politisk fordeling av ressurser inviterer til at krefter brukes på å påvirke beslutninger i stedet for å skape verdier.",
    },
    {
      question: "Hva er menneskelig utviklings sterkeste argument i denne kontrasten?",
      options: ["At sammenhengen fra vekst til frihet ikke går av seg selv, fordi omsetningen skjer gjennom omformingsfaktorer som er ujevnt fordelt", "At økonomisk vekst i praksis alltid fører til større forskjeller mellom rike og fattige grupper", "At markedet ikke klarer å levere noen av de godene som er viktige for menneskers levekår, og at staten derfor må overta produksjonen av dem", "At land som har prioritert helse og utdanning, uten unntak har hatt sterkere økonomisk vekst enn land som har prioritert investeringer i industri"],
      explanation: "Tilleggsargumentet er at utdanning og helse ikke bare er mål, men også produksjonsfaktorer — og at en politikk som utsetter dem til etter veksten, utsetter noe av det veksten selv avhenger av.",
    },
    {
      question: "Hva sier posisjonen om at de to perspektivene er uforenlige?",
      options: ["At uenigheten sitter på målnivå, og at en slik uenighet ikke lar seg løse ved å ta litt av hver", "At de to aldri har vært brukt sammen i utviklingspolitikken i praksis", "At de bygger på helt ulike økonomiske teorier om hvordan marked virker", "At de har oppstått i ulike tiår og derfor svarer på ulike tiders problemer"],
      explanation: "Prioriteringene kolliderer dessuten i praksis — et budsjett kan brukes én gang — og statssynet er motsatt på nettopp de godene som betyr mest for kapabiliteter.",
    },
    {
      question: "Hva sier posisjonen om at de to perspektivene er komplementære?",
      options: ["At de svarer på ulike spørsmål: den ene sier hvordan midlene skaffes, den andre hva de skal måles mot", "At de begge bygger på en felles forståelse av at utvikling handler om å øke menneskers materielle levestandard over tid, men vektlegger ulike virkemidler", "At de historisk har blitt kombinert i utviklingspolitikken i de fleste land, og at motsetningen mellom dem derfor bare finnes i den akademiske debatten", "At de begge anerkjenner at staten har en rolle å spille, og at uenigheten om hvor stor den skal være, er en gradsforskjell og ikke en prinsipiell uenighet"],
      explanation: "Sen avviser dessuten verken marked eller vekst — inntekt er et middel, ikke et dårlig middel — og tiltakene de to anbefaler, overlapper mye.",
    },
    {
      question: "Hva er det historiske sammenfallet mellom de to perspektivene?",
      options: ["Nyliberalismen fikk gjennomslag på 1980-tallet, og menneskelig utvikling fikk sin institusjonelle form rundt 1990 — delvis som motpol", "Begge oppsto som svar på avkoloniseringen og de nye statenes behov for en utviklingsstrategi i tiårene etter andre verdenskrig", "Begge ble utviklet i akademiske miljøer i det globale nord og fikk gjennomslag i internasjonale institusjoner omtrent samtidig med hverandre", "Begge kom som reaksjoner på moderniseringsteoriens sammenbrudd, og begge la vekt på at utvikling ikke er en lineær prosess med faste stadier"],
      explanation: "De brede utviklingsmålene vokste fram i en periode da de sosiale kostnadene ved strukturtilpasningen var blitt synlige, og ga et språk for å måle det vekstmålene ikke fanget.",
    },
    {
      question: "Hvilket paradigme dominerer i dag?",
      options: ["Kapabilitetstenkningen har vunnet målformuleringene, mens markedslogikken i stor grad har beholdt virkemidlene", "Nyliberalismen dominerer fullstendig, både i målformuleringene og i virkemidlene", "Menneskelig utvikling dominerer fullstendig, og markedsorienterte virkemidler er i praksis forlatt i internasjonalt utviklingsarbeid", "Ingen av dem dominerer, fordi utviklingspolitikken i dag styres av klimahensyn og av sikkerhetspolitiske vurderinger i stedet"],
      explanation: "Utviklingsmål formuleres i helse, utdanning, likestilling, vann og deltakelse — det er kapabilitetstenkningens språk. Samtidig er privat sektor, investeringsklima og effektivitet fortsatt sentrale kategorier.",
    },
    {
      question: "Hva er en forsvarlig landing i en sammenligning av de to?",
      options: ["At de er uforenlige på målnivå og delvis forenlige på tiltaksnivå, fordi de anbefaler mye av det samme med ulike begrunnelser", "At begge har noe for seg, og at det derfor er vanskelig å velge mellom dem", "At nyliberalismen er tilbakevist av erfaringene fra strukturtilpasningen", "At menneskelig utvikling er den eneste faglig holdbare tilnærmingen i dag"],
      explanation: "Alle tre av bokas forsvarlige landinger kan gi toppkarakter. Det som ikke holder, er en avveining uten grunner — det er feil #1 i ny drakt.",
    },
    {
      question: "Hva er den vanligste karikaturen av nyliberalismen i sammenligningsoppgaver?",
      options: ["At den vil ha en stat uten oppgaver", "At den bygger på antakelsen om at alle mennesker handler fullstendig rasjonelt i enhver situasjon der de skal ta en økonomisk beslutning", "At den ble utformet utelukkende for å tjene interessene til de landene som allerede var rike da politikkpakken ble utviklet på 1980-tallet", "At den ikke skiller mellom økonomisk vekst og utvikling, og derfor mangler et selvstendig begrep om hva utvikling egentlig innebærer"],
      explanation: "Posisjonen vil ha en stat som sikrer eiendomsrett, kontrakter og stabile rammer. Uenigheten med menneskelig utvikling gjelder hvilke oppgaver staten skal ha, ikke om den skal ha noen.",
    },
    {
      question: "Hva er den vanligste karikaturen av menneskelig utvikling i sammenligningsoppgaver?",
      options: ["At den er en anti-økonomisk posisjon som avviser marked og vekst", "At den bare gjelder for lavinntektsland og ikke har noe å si om utviklingsprosesser i land som allerede har et høyt inntektsnivå", "At den er identisk med grunnbehovstilnærmingen fra 1970-tallet og derfor ikke tilfører utviklingsdebatten noe som ikke allerede fantes", "At den forutsetter en sterk stat med kapasitet til å levere tjenester, og derfor ikke er anvendelig i land med svake institusjoner"],
      explanation: "Sen sier at inntekt er et middel, ikke at det er et dårlig middel. Frihet regnes der også som en produktiv kraft, ikke bare som et gode.",
    },
    {
      question: "Hva menes med å skille funn fra vurdering i denne kontrasten?",
      options: ["At hva som skjedde er en observasjon, mens om det var utvikling er en vurdering målt mot en målestokk", "At forskningsresultater alltid er sikrere enn de politiske konklusjonene som trekkes av dem", "At kvantitative data om produksjon er mer pålitelige enn kvalitative beskrivelser av folks levekår, og derfor bør veie tyngst i en analyse", "At sensor vurderer besvarelsen etter hvor mange dokumenterte funn den inneholder, og ikke etter hvilke vurderinger kandidaten trekker av dem"],
      explanation: "De to perspektivene leser samme forløp ulikt fordi de måler ulike ting, ikke fordi de er uenige om hva som skjedde. Å si det eksplisitt er et av de sikreste løftene i denne oppgavetypen.",
    },
    {
      question: "Hvorfor er det galt å bruke «nyliberalisme» som et skjellsord i en besvarelse?",
      options: ["Fordi det i dette faget er et analysebegrep med en definisjon og en avsender", "Fordi sensorene i emnet har ulike politiske oppfatninger, og en kandidat derfor risikerer å skrive seg bort fra den som retter besvarelsen", "Fordi begrepet ikke lenger brukes i faglitteraturen om utvikling, og fordi det er erstattet av mer presise betegnelser på den samme politikken", "Fordi det er umulig å avgjøre hvilke deler av en politikk som er nyliberale, og fordi begrepet derfor ikke lar seg bruke presist i en analyse"],
      explanation: "En besvarelse som bruker det som en merkelapp, har forlatt fagspråket. Politisk ladede begreper brukes analytisk, med avsenderen navngitt og definisjonen skrevet ut ved første bruk.",
    },
    {
      question: "Hvor mange akser bør et kortsvar i denne sjangeren bruke?",
      options: ["Tre — tre akser behandlet grundig slår fem akser nevnt i forbifarten", "Alle fem aksene fra kontrastkartet, siden en fullstendig sammenligning krever at ingen av dimensjonene utelates fra framstillingen", "Én akse behandlet svært grundig, siden dybde alltid premieres høyere enn bredde i denne typen sammenligningsoppgaver på eksamen", "Så mange som mulig innenfor tidsrammen, siden hver akse gir uttelling og sensor teller hvor mange dimensjoner kandidaten får med"],
      explanation: "Alle fem blir for mye på førti minutter. Den beste rekkefølgen er som regel hva utvikling er, deretter statens rolle, deretter hva som måles.",
    },
    {
      question: "Hva er grep-markøren som løfter en sammenligning fra god til beste?",
      options: ["Å vise at kontrasten ikke er to meninger om utvikling, men en strid om hvem som får definere ordet", "Å gjennomgå alle fem aksene i kontrastkartet og gi hver av dem like mye plass i besvarelsen, slik at framstillingen blir fullstendig", "Å ta klart standpunkt til hvilket av de to perspektivene som gir den beste politikken for lavinntektsland i dagens situasjon", "Å vise til at begge perspektivene har vært prøvd i praksis med blandede erfaringer"],
      explanation: "De to er ikke uenige om hva som skjedde i et land, men om hvilken målestokk som avgjør om det var utvikling — og den som velger målestokken, har allerede avgjort svaret.",
    },
  ],
  'utv1000-6-1': [
    {
      question: "Hva kjennetegner en utviklingsstat?",
      options: ["En sterk, målrettet stat som styrer markedet mot konkurransedyktighet i stedet for å overlate retningen til det", "En stat som overtar eierskapet i de viktigste næringene og fastsetter produksjonsmål gjennom en samlet plan for økonomien", "En stat som holder seg til å sikre eiendomsrett, kontrakter og stabil pengepolitikk og lar markedet velge hvilke næringer som vokser", "En stat som finansierer utviklingsprosjekter med bistandsmidler fra givere, og som derfor får sin retning bestemt utenfra"],
      explanation: "Riktig svar er at staten styrer markedet uten å erstatte det: eierskapet er i hovedsak privat og bedriftene konkurrerer, men staten velger retningen. Å overta eierskapet og planlegge produksjonen er planøkonomi, og å begrense seg til rammene er minimalstaten — utviklingsstaten er verken.",
    },
    {
      question: "Hva er forskjellen mellom «utviklingsstaten» og «neo-statisme»?",
      options: ["Utviklingsstaten er navnet på fenomenet, neo-statisme navnet på teorien om at slike stater forklarer vekst", "Utviklingsstaten er den asiatiske varianten, mens neo-statisme er den latinamerikanske varianten av samme fenomen", "Utviklingsstaten gjelder industripolitikk, mens neo-statisme gjelder velferdspolitikk og offentlige tjenester", "Utviklingsstaten er et begrep fra 1960-tallet, mens neo-statisme er den moderne betegnelsen på nøyaktig det samme"],
      explanation: "Riktig svar er skillet mellom fenomen og teori: staten som faktisk fantes i Japan, Sør-Korea og Taiwan, mot posisjonen som setter staten tilbake i sentrum av utviklingsforklaringen. Skriver du bare det ene, mister du enten empirien eller argumentet.",
    },
    {
      question: "Hva er kjernen i Amsdens forklaring på Sør-Koreas industrivekst?",
      options: ["At staten satte prisene «feil» med vilje, men koblet støtten til målbare motkrav om eksportresultater", "At staten holdt seg til generell næringspolitikk og lot bedriftene selv finne fram til lønnsomme markeder", "At landet hadde naturressurser som ga inntektene industrialiseringen krevde, og at staten forvaltet disse godt", "At utenlandske selskaper bygget industrien og at staten sikret dem forutsigbare rammevilkår over lang tid"],
      explanation: "Riktig svar er kombinasjonen av bevisst «feil» priser og motkrav: subsidiering alene gir bedriften ingen grunn til å bli bedre, og det er gjensidigheten som gjør industripolitikken til noe annet enn en overføring.",
    },
    {
      question: "Hva menes med «gjensidighet» i utviklingsstat-litteraturen?",
      options: ["At støtte gis mot målbare motkrav, typisk eksportresultater, og trekkes tilbake hvis kravene ikke innfris", "At staten og næringslivet utveksler personell, slik at forvaltningen får innsikt i bedriftenes faktiske situasjon", "At handelsavtaler bygger på at partene gir hverandre like vilkår, slik at ingen av dem får ensidige fordeler", "At bistanden gjengjeldes med politisk støtte fra mottakerlandet i internasjonale fora og forhandlinger"],
      explanation: "Riktig svar er mekanismen støtte mot resultat. Gjensidig markedsadgang i handelsavtaler er et annet begrep, og gjengjeldelse i bistandsforhold hører til vilkårsdiskusjonen i Del 3.",
    },
    {
      question: "Hvorfor er Sør-Koreas strategi ikke det samme som ISI slik den ble drevet i Latin-Amerika?",
      options: ["Fordi Sør-Korea beskyttet hjemmemarkedet og samtidig krevde at bedriftene skulle selge ute", "Fordi Sør-Korea ikke brukte tollvern i det hele tatt, men bygde industrien utelukkende med utenlandske investeringer og teknologiavtaler", "Fordi ISI bare gjaldt landbruksprodukter, mens Sør-Korea satset på tungindustri og elektronikk fra første stund", "Fordi ISI ble drevet av private konsern uten statlig medvirkning, mens Sør-Koreas industri var eid av staten"],
      explanation: "Riktig svar er eksportkravet. ISI bygde for hjemmemarkedet bak tollmurer; Sør-Korea beskyttet hjemmemarkedet og krevde eksport, slik at disiplinen kom fra kunder som ikke hadde grunn til å kjøpe av høflighet.",
    },
    {
      question: "Hva viser Øst-Asias industrivekst når den brukes mot avhengighetsteorien?",
      options: ["At den strengeste, deterministiske formen for teorien svekkes, siden land i periferien faktisk beveget seg", "At teorien er uten verdi, siden den ikke klarte å forutsi noen av de store vekstforløpene etter andre verdenskrig", "At kjerne og periferi er kategorier uten empirisk innhold, fordi et land kan skifte kategori på få tiår", "At verdensøkonomien er nøytral, slik at handelsbetingelser og eierskap ikke har betydning for et lands utvikling"],
      explanation: "Riktig svar er at det er determinismen som svekkes, ikke teoriens grunninnsikt om at handelsbetingelser og eierskap i verdikjedene betyr mye. Å si at caset motbeviser avhengighetsteorien er å si for mye.",
    },
    {
      question: "Hvilket begrep hos Wallerstein gjør at avhengighetsteorien likevel kan romme Øst-Asia?",
      options: ["Semi-periferien, altså sonen der bevegelse mellom posisjoner faktisk forekommer", "Metropol og satellitt, som beskriver hvordan den ene utvikler seg på bekostning av den andre", "Delinking, altså en bevisst løsrivelse fra verdensmarkedet", "«Utvikling av underutvikling», som forklarer hvordan fattigdom aktivt produseres over tid"],
      explanation: "Riktig svar er semi-periferien. Metropol og satellitt er Franks begrepspar, delinking er Amins, og «utvikling av underutvikling» er Franks formulering — ingen av dem åpner for bevegelse på samme måte.",
    },
    {
      question: "Hva viser Øst-Asias vekst når den brukes mot nyliberalismen?",
      options: ["At veksten skjedde under en stat som styrte kreditt og valgte næringer, altså ikke under oppskriftens betingelser", "At markedskonkurranse ikke spilte noen rolle i disse landene, siden staten fastsatte både priser og produksjonsvolum", "At handelsliberalisering skader utviklingsland, siden de landene som åpnet seg mest, vokste langsomst i perioden", "At privat eierskap er et hinder for industrialisering, og at statlig eierskap gir raskere teknologisk læring"],
      explanation: "Riktig svar er at betingelsene ikke stemte med oppskriften: staten var aktiv. Det er ikke et argument for at markedet var uviktig — eksportkonkurransen var helt sentral, men som virkemiddel i en statlig strategi.",
    },
    {
      question: "Hvilke av forholdene under er *forutsetninger* for Øst-Asia-modellen, ikke virkemidler i den?",
      options: ["Jordreform, god adgang til det amerikanske markedet, den kalde krigens geopolitikk og et høyt utdanningsnivå", "Styrt kreditt til utvalgte næringer, tollvern i oppbyggingsfasen og krav om eksportresultater fra bedriftene", "Statlig eierskap i tungindustrien, faste priser på innsatsvarer og en femårsplan for hele industrisektoren", "Lave skatter, fleksible arbeidsmarkeder og et regelverk som gjør det enkelt å starte og avvikle bedrifter"],
      explanation: "Riktig svar er de fire historiske omstendighetene. De tre andre alternativene lister virkemidler eller politiske valg — og skillet er avgjørende, siden et land kan vedta virkemidler, men ikke omstendigheter.",
    },
    {
      question: "Hva utfordret finanskrisen i Øst-Asia i 1997 først og fremst?",
      options: ["Modellens holdbarhet under liberalisert kapitalflyt — ikke påstanden om at staten drev veksten i tiårene før", "Påstanden om at staten hadde noen rolle i veksten i det hele tatt, siden krisen rammet nettopp de mest statsstyrte økonomiene", "Teorien om at eksportorientering er bedre enn import-substituerende industrialisering som utviklingsstrategi", "Antakelsen om at utdanningsnivå har betydning for hvor raskt et land kan lære seg ny industriteknologi"],
      explanation: "Riktig svar er skillet mellom to spørsmål: om staten drev veksten, og om modellen kunne fortsette under en helt annen finansiell orden. Krisen sier mye om det andre og lite om det første.",
    },
    {
      question: "Hvordan skal kameraderi-innvendingen mot utviklingsstaten fremstilles?",
      options: ["Som en posisjon i litteraturen, med motposisjonen om at de samme båndene fantes i tiårene modellen virket best", "Som et avgjort forskningsfunn, siden krisen i 1997 bekreftet at kreditt hadde fulgt relasjoner i stedet for resultater", "Som en kulturell forklaring på hvorfor enkelte land har vanskeligere for å bygge et upartisk byråkrati enn andre", "Som et argument for at all industripolitikk over tid ender i subsidiering av bedrifter med gode forbindelser"],
      explanation: "Riktig svar er at innvendingen er en posisjon, ikke et avgjort spørsmål. Motposisjonen er et poeng om tidsrom: forklaringen skiller ikke mellom periodene den skal forklare.",
    },
    {
      question: "Hva er den bindende betingelsen for at gjensidighetsmekanismen skal virke?",
      options: ["Statlig styringsevne — en forvaltning som faktisk kan trekke støtten tilbake fra mektige bedrifter", "Et stort hjemmemarked, slik at bedriftene kan bygge opp volum før de møter internasjonal konkurranse", "Rikelig tilgang på naturressurser som kan finansiere støtteordningene uten at staten må låne ute", "Et lavt lønnsnivå i oppbyggingsfasen, slik at industrien er konkurransedyktig fra første leveranse"],
      explanation: "Riktig svar er styringsevnen. Uten evnen til å trekke støtte tilbake blir motkravet tomt, og selektiv industripolitikk glir over i varig subsidiering av dem med best forbindelser.",
    },
    {
      question: "Hva er hovedpoenget i Amsdens kritikk fra 1994 av hvordan Øst-Asia-erfaringen ble tolket?",
      options: ["At fremstillingen nedtonet hvor omfattende den statlige styringen faktisk hadde vært i disse landene", "At veksttallene fra perioden var systematisk overdrevet i de nasjonale statistikkene som ble lagt til grunn", "At erfaringen bare gjaldt Japan, og at Sør-Korea og Taiwan fulgte helt andre strategier enn de fikk kreditt for", "At industripolitikk generelt er et blindspor, og at landene ville vokst raskere med en mer åpen økonomi"],
      explanation: "Riktig svar er at kritikken gjelder tolkningen av caset, ikke veksten selv. Poenget er at caset ble gjort om til et argument for en politikk landene ikke førte.",
    },
    {
      question: "Hva er forskjellen mellom statlig styringsevne og statens størrelse?",
      options: ["Styringsevne er kapasiteten til å sette et mål og gjennomføre det; en stat kan ha stort budsjett og svak styringsevne", "Styringsevne måles i andelen av økonomien staten kontrollerer, mens størrelse måles i antall ansatte i forvaltningen", "Styringsevne gjelder utenrikspolitikk, mens størrelse gjelder innenrikspolitikk og fordelingen av offentlige tjenester", "Det er to navn på det samme, siden en stat med store ressurser nødvendigvis også kan gjennomføre det den bestemmer"],
      explanation: "Riktig svar er at de to varierer uavhengig av hverandre. Det er styringsevnen — skatteinnkreving, håndheving, kompetanse, evnen til å stå imot press — korrupsjon undergraver, ikke budsjettets størrelse.",
    },
    {
      question: "Hva er «sen industrialisering» i Amsdens ramme?",
      options: ["At land som industrialiserer sent, skal lære en teknologi som allerede finnes andre steder, ikke finne den opp", "At industrialiseringen kommer sent i et lands utviklingsforløp, etter at landbruket allerede er modernisert", "At industrien bygges opp uten utenlandsk kapital, og at prosessen derfor tar lengre tid enn i de første industrilandene", "At land som starter sent, må hoppe over industrifasen og gå direkte til tjenester og kunnskapsnæringer"],
      explanation: "Riktig svar er at oppgaven er læring, ikke oppfinnelse. Læring er en kostbar, organisert innsats noen må betale for før den lønner seg — i motsetning til moderniseringsteoriens antakelse om at teknologi sprer seg mer eller mindre av seg selv.",
    },
    {
      question: "Hvorfor er «selektiv» det omstridte ordet i selektiv industripolitikk?",
      options: ["Fordi innvendingen er at staten ikke vet bedre enn markedet hvilke næringer som vil lykkes, og at valget lett følger politisk innflytelse", "Fordi selektiv politikk krever at staten eier bedriftene den støtter, og dermed konkurrerer med privat næringsliv", "Fordi den bryter med prinsippet om likebehandling i internasjonale handelsavtaler og derfor alltid er ulovlig", "Fordi selektive tiltak koster mer enn generelle tiltak, og fordi lavinntektsland sjelden har budsjett til dem"],
      explanation: "Riktig svar er at det omstridte er at staten skal *velge*. Generell næringspolitikk — veier, skoler, forutsigbare skatter — er ukontroversiell; det er valget mellom næringer innvendingen retter seg mot.",
    },
    {
      question: "Hvilken sammenheng er utviklingsstaten et svar på i teorihistorien?",
      options: ["På at både moderniseringens og nyliberalismens oppskrifter hadde plassert staten i utkanten av forklaringen", "På at avhengighetsteorien manglet et begrep for hvordan verdensøkonomien fordeler verdiskaping mellom land", "På at post-utvikling avviste hele utviklingsbegrepet og dermed etterlot faget uten et forskningsprogram", "På at strukturalismen ikke hadde noen politikkanbefaling å tilby de nye statene etter avkoloniseringen"],
      explanation: "Riktig svar er at posisjonen setter staten tilbake i sentrum. Strukturalismen hadde tvert imot en tydelig anbefaling i ISI, og avhengighetsteorien har et velutviklet begrepsapparat for fordelingen mellom land.",
    },
    {
      question: "Hva er den vanligste måten å misbruke Øst-Asia-caset på i en besvarelse?",
      options: ["Å bruke det som bevis for én posisjon, når styrken ligger i at det feller strenge påstander i begge retninger", "Å nevne flere land enn nødvendig, slik at svaret blir bredt der oppgaven ba om dybde i ett enkelt tilfelle", "Å tidfeste veksten til 1960-tallet, når industrialiseringen strengt tatt startet allerede i mellomkrigstiden", "Å knytte caset til bestemte teoretikere, når erfaringen er beskrevet av mange forfattere med ulike syn"],
      explanation: "Riktig svar er at caset er en prøvestein, ikke et bevis. Det beviser verken at staten alltid bør velge næringer eller at markedet alltid gjør det bedre — og det er nettopp derfor det er så nyttig.",
    },
    {
      question: "Hvilket syn på staten har avhengighetsteorien, sammenlignet med utviklingsstat-posisjonen?",
      options: ["Avhengighetsteorien ser statens handlingsrom som begrenset av relasjonen til verdensøkonomien, mens utviklingsstat-posisjonen ser staten som drivkraften", "Begge ser staten som drivkraften, men avhengighetsteorien mener staten må eie produksjonsmidlene for at strategien skal lykkes", "Avhengighetsteorien ser staten som hovedhindringen for utvikling, siden byråkratiet i periferien tjener utenlandske interesser", "Begge avviser at staten kan spille noen selvstendig rolle, siden verdensmarkedet uansett bestemmer prisene et land møter"],
      explanation: "Riktig svar er kontrasten mellom begrenset handlingsrom og drivkraft. Det er nettopp derfor Øst-Asia-caset er et problem for den strengeste avhengighetslesningen: staten gjorde noe teorien ikke ga den rom til.",
    },
    {
      question: "Hva er det avgjørende empiriske stridsspørsmålet mellom den nyliberale og den neo-statistiske lesningen av Øst-Asia?",
      options: ["Om eksportkonkurransen var virksom i seg selv, eller virket fordi den var motkrav i en statlig strategi", "Om veksten faktisk fant sted, siden de to lesningene bygger på ulike statistikkilder for perioden", "Om landene var demokratier i vekstperioden, og om styreformen har betydning for økonomisk vekst", "Om industrialiseringen startet i lettindustri eller i tungindustri, og hvilken rekkefølge som gir raskest vekst"],
      explanation: "Riktig svar er spørsmålet om hva som var virksomt. Lesningene er ikke uenige om hva som skjedde — de er uenige om hvilken mekanisme som forklarer det, og Amsdens gjensidighet er svaret som gjør dem til to sider av samme sak.",
    },
  ],
  'utv1000-6-2': [
    {
      question: "Hva er forskjellen mellom frihandel og handelsliberalisering?",
      options: ["Frihandel er en tilstand uten handelshindre, handelsliberalisering er prosessen mot den tilstanden", "Frihandel gjelder varer, mens handelsliberalisering også omfatter tjenester, kapitalbevegelser og arbeidskraft", "Frihandel er et politisk mål som forfektes av enkelte land, mens handelsliberalisering er den faktiske utviklingen i verdensøkonomien", "Frihandel er avtalefestet mellom to land, mens handelsliberalisering skjer ensidig når et land selv fjerner sine tollsatser"],
      explanation: "Riktig svar er skillet mellom tilstand og prosess. Det betyr noe fordi nesten all faglig uenighet gjelder liberaliseringen — tempo, rekkefølge og for hvem — og ikke den ideelle sluttilstanden.",
    },
    {
      question: "Hva er bytteforhold?",
      options: ["Prisen på det landet selger, målt mot prisen på det landet kjøper — et forhold mellom to prisnivåer", "Forholdet mellom hvor mye et land eksporterer og hvor mye det importerer i løpet av et år", "Andelen av verdenshandelen som går mellom lav- og mellominntektsland innbyrdes, målt mot handelen med rike land", "Forholdet mellom prisen på en vare i produsentlandet og prisen samme vare har i forbrukerlandet"],
      explanation: "Riktig svar er forholdet mellom to prisnivåer. Forholdet mellom eksport og import i mengde eller verdi er handelsbalansen, som er noe annet: bytteforholdet sier hva landet får igjen per enhet, ikke om det selger mer enn det kjøper.",
    },
    {
      question: "Hvorfor er et fallende bytteforhold et problem selv om eksportvolumet vokser?",
      options: ["Fordi landet må eksportere stadig mer for å importere like mye som før", "Fordi et voksende eksportvolum presser verdensmarkedsprisen ned og dermed rammer alle produsenter av samme vare", "Fordi landet da må låne i utenlandsk valuta for å dekke differansen", "Fordi handelsbalansen svekkes når volumet vokser raskere enn kapasiteten i havner og transportnett tillater"],
      explanation: "Riktig svar er at vekst i mengde ikke er det samme som vekst i kjøpekraft. Landet kan selge mer og få mindre igjen — og det er nettopp derfor strukturalismen mener råvareeksport ikke er en vei ut.",
    },
    {
      question: "Hvilke tre betingelser går igjen i litteraturen om når handelsliberalisering gir gevinst?",
      options: ["Hva landet produserer, hvilke institusjoner det har, og hvilken forhandlingsmakt det stiller med", "Hvor stort landet er, hvor mange handelsavtaler det har inngått, og hvor lenge det har vært medlem av handelsregimet", "Hvor høy tollen var i utgangspunktet, hvor raskt den fjernes, og om reformen er vedtatt av et flertall i nasjonalforsamlingen", "Hvor mye bistand landet mottar, hvor stor gjelden er, og om valutakursen er fast eller flytende i perioden"],
      explanation: "Riktig svar er de tre betingelsene: eksportsammensetningen, institusjonene og forhandlingsmakten. Poenget er at gevinsten er betinget og ujevnt fordelt, ikke at handel skader.",
    },
    {
      question: "Hva er råvareavhengighet, og hva skiller det fra ressursforbannelsen?",
      options: ["Råvareavhengighet beskriver eksportsammensetningen; ressursforbannelsen er en påstand om at ressursrikdom kan gi konflikt og svakt styresett", "Råvareavhengighet gjelder landbruk, mens ressursforbannelsen gjelder mineraler og olje som utvinnes av utenlandske selskaper", "Råvareavhengighet er et mål på hvor stor andel av verdiskapingen som skjer i primærnæringene i et land", "Råvareavhengighet er en midlertidig fase alle industrialiserende land går gjennom, mens ressursforbannelsen er permanent"],
      explanation: "Riktig svar er skillet mellom en beskrivelse og en påstand om årsakssammenheng. Ressursforbannelsen er en observert og omstridt tendens og skal formuleres som mekanisme, aldri som lov — Norge er det stående moteksempelet.",
    },
    {
      question: "Hva er virkningen av at toll øker med varens bearbeidingsgrad?",
      options: ["At det lønner seg å eksportere råvaren framfor det ferdige produktet, slik at bearbeidingsindustri blir vanskeligere å bygge opp", "At forbrukerne i importlandet betaler mer for ferdigvarer og derfor kjøper mindre av dem enn de ellers ville gjort", "At råvareprisene på verdensmarkedet svinger kraftigere enn prisene på bearbeidede varer gjør over tid", "At eksportlandet får høyere inntekter per enhet, siden tollen betales av kjøperen og ikke av selgeren"],
      explanation: "Riktig svar er virkningen på hva landet lønner seg å eksportere. Dette er et påvisbart regelverkstrekk, og det er derfor sterkere belegg i en drøfting enn en generell påstand om utbytting.",
    },
    {
      question: "Hva er WTOs rolle, og hva skiller den fra IMF og Verdensbanken?",
      options: ["WTO forvalter handelsregelverket og håndterer tvister; IMF og Verdensbanken låner ut penger og kan knytte vilkår til lånene", "WTO fastsetter tollsatser for medlemslandene, mens IMF og Verdensbanken overvåker at satsene faktisk følges i praksis", "WTO gir handelsrettet bistand til lavinntektsland, mens IMF og Verdensbanken finansierer infrastruktur og institusjonsbygging", "WTO er en avdeling under Verdensbanken som har ansvar for handelsspørsmål, mens IMF arbeider med valuta og betalingsbalanse"],
      explanation: "Riktig svar er skillet mellom regelverksorgan og långiver. Å blande dem er en presisjonsfeil som svekker hele svaret, siden vilkårsdimensjonen hører til lånene og ikke til handelsavtalene.",
    },
    {
      question: "Hva er de to posisjonene om et regelbasert handelsregime?",
      options: ["At regler beskytter den svake mot styrkeforhold, mot at reglene selv er forhandlet fram av parter med ulik tyngde", "At regler gir forutsigbarhet for investorer, mot at de gjør det umulig å beskytte nyetablert industri i noen sammenheng", "At regler bør vedtas av flertall, mot at de bør vedtas med enstemmighet slik at ingen land kan overkjøres", "At regler bør gjelde varer, mot at de også bør omfatte tjenester, investeringer og immaterielle rettigheter"],
      explanation: "Riktig svar er de to posisjonene om regler mot makt. Begge har belegg, og en drøfting som bare presenterer den ene, har valgt side i stedet for å drøfte.",
    },
    {
      question: "Hva er forhandlingsmakt i en handelssammenheng?",
      options: ["Evnen til å få gjennomslag: markedsstørrelse, alternative partnere, juridisk kapasitet og evne til å bære et sammenbrudd", "Retten et land har til å blokkere vedtak i handelsorganisasjonen, som følger av at hvert medlem formelt har én stemme", "Den økonomiske størrelsen på landet målt i samlet verdiskaping, som avgjør hvor tungt landet veier i alle forhandlinger", "Antallet handelsavtaler et land allerede har inngått, som gir erfaring og et nettverk av allierte ved bordet"],
      explanation: "Riktig svar er de fire komponentene. Merk at forhandlingsmakt ikke er det samme som økonomisk størrelse alene: et lite land med en vare få andre har, kan stille sterkt.",
    },
    {
      question: "Hva er import-substituerende industrialisering (ISI)?",
      options: ["Å bygge opp egen industri bak tollmurer for å erstatte varer landet tidligere importerte", "Å legge om eksporten fra ubearbeidede råvarer til bearbeidede varer ved hjelp av utenlandske investeringer i industri", "Å inngå avtaler som gir tollfri import av innsatsvarer slik at innenlandsk industri får billigere produksjonskostnader", "Å redusere importen ved å begrense forbruket av utenlandske varer gjennom avgifter på privat forbruk og valutarasjonering"],
      explanation: "Riktig svar er å erstatte importerte varer med egen produksjon bak tollvern. Merk at ISI ikke er selvberging: målet er ikke å slutte å handle, men å endre hva landet handler med.",
    },
    {
      question: "Hvordan skal ISI vurderes i en besvarelse?",
      options: ["I begge faser — tidlig industrivekst, og senere gjeldskrise og lav konkurransekraft", "Som en strategi som ble forlatt fordi den brøt med handelsreglene", "Som strukturalismens teoretiske bidrag, uten at det er nødvendig å vurdere hvordan den faktisk virket", "Som en variant av eksportorientering, siden begge strategiene bygger industri med statlig støtte"],
      explanation: "Riktig svar er at begge fasene skal med. Å felle enkeltdommen «ISI mislyktes» er å svare på noe oppgaven ba deg drøfte — det er selve drøftingen som etterspørres.",
    },
    {
      question: "Hva skiller Øst-Asias eksportorientering fra frihandel?",
      options: ["At landene hadde tollvern, styrt kreditt og regulert kapitalflyt samtidig som de satset på eksport", "At eksportorientering bare gjaldt industrivarer, mens frihandel også omfatter landbruksprodukter og tjenester", "At eksportorientering forutsetter medlemskap i en handelsorganisasjon, mens frihandel kan gjennomføres ensidig", "At eksportorientering ble innført gradvis over flere tiår, mens frihandel innføres i én reform"],
      explanation: "Riktig svar er at eksportorienterte land i Øst-Asia var alt annet enn åpne økonomier. Forvekslingen er vanlig, og den gjør at caset feilaktig leses som et argument for frihandel.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom Latin-Amerikas ISI og Øst-Asias strategi?",
      options: ["At Øst-Asia koblet støtten til krav om eksportresultater, slik at disiplinen kom fra utenlandske kunder", "At Øst-Asia ikke brukte tollvern, mens Latin-Amerika bygde hele strategien på høye tollmurer", "At Latin-Amerika satset på tungindustri, mens Øst-Asia begynte med lettindustri og arbeidsintensiv produksjon", "At Latin-Amerika fikk sin strategi anbefalt utenfra, mens Øst-Asia utviklet sin uavhengig av internasjonale institusjoner"],
      explanation: "Riktig svar er motkravet. Begge strategiene brukte beskyttelse, så sammenligningen står ikke mellom lukket og åpen økonomi, men mellom beskyttelse med og uten krav om resultater.",
    },
    {
      question: "Hva er kjernen i Amsdens kritikk fra 1994 av hvordan Øst-Asia-erfaringen ble videreformidlet?",
      options: ["At fremstillingen nedtonet hvor omfattende den statlige styringen faktisk hadde vært i disse landene", "At erfaringen ble tillagt for stor vekt, siden landene var små og resultatene derfor ikke lot seg overføre", "At veksttallene som ble lagt til grunn, stammet fra nasjonale kilder som ikke var uavhengig etterprøvd", "At kritikerne av industripolitikk fikk for lite plass i debatten om hva som forklarte veksten i regionen"],
      explanation: "Riktig svar er at kritikken gjelder tolkningen, ikke veksten. Poenget for handelstemaet er at anbefalingen andre land fikk, ikke var den samme som praksisen de skulle etterligne.",
    },
    {
      question: "Hva er forskjellen mellom matsikkerhet og selvforsyning?",
      options: ["Matsikkerhet er pålitelig tilgang på nok mat; et land kan ha det og likevel importere mye", "Matsikkerhet gjelder befolkningens ernæring, mens selvforsyning gjelder landbrukets andel av samlet verdiskaping", "Matsikkerhet er et mål myndighetene setter, mens selvforsyning er et resultat som følger av markedet", "Matsikkerhet gjelder i kriser, mens selvforsyning beskriver den normale situasjonen i et land i fredstid"],
      explanation: "Riktig svar er at matsikkerhet handler om tilgang, ikke om hvor maten kommer fra. Et land med kjøpekraft og pålitelige leverandører kan ha høy matsikkerhet med stor import — sårbarheten oppstår når begge deler svikter samtidig.",
    },
    {
      question: "Hvordan låser gjeld et lands eksportmønster fast?",
      options: ["Gjelden gjøres opp i utenlandsk valuta, som kommer fra eksport, så landet må selge mer av det samme akkurat når det burde bygget noe annet", "Långiverne krever pant i landets naturressurser, slik at eksporten av disse ressursene er kontraktfestet i lånevilkårene", "Gjeldsbetjening regnes som import i nasjonalregnskapet, slik at landet må øke eksporten tilsvarende for å holde balansen", "Renten på lånene stiger når eksporten faller, slik at et land med svak eksport betaler mer for den samme gjelden"],
      explanation: "Riktig svar er valutamekanismen. Merk at dette er en mekanisme og ikke en dom over gjeld i seg selv — lån kan finansiere investeringer som gir framtidige inntekter.",
    },
    {
      question: "Hvorfor er «frihandel er et udiskutert gode» en feil i dette faget?",
      options: ["Fordi det er en forutsetning i stedet for et standpunkt, og en forutsetning kan ikke prøves", "Fordi faget har konkludert med at frihandel virker negativt for de fleste lav- og mellominntektsland", "Fordi handel er et perifert tema i emnet og derfor ikke bør framheves som noe avgjørende", "Fordi frihandel er et politisk begrep som ikke hører hjemme i en samfunnsvitenskapelig analyse i det hele tatt"],
      explanation: "Riktig svar er skillet mellom standpunkt og forutsetning. Et standpunkt begrunnes og kan prøves; en forutsetning står usynlig i teksten og gjør drøftingen umulig. Den motsatte varianten er like upresis.",
    },
    {
      question: "Hva er posisjonen «handel framfor bistand», og hva er motposisjonen?",
      options: ["At markedsadgang gir større og friere inntekter, mot at handelsinntekter fordeles ujevnt innad og ikke treffer de fattigste direkte", "At handel er billigere for givernes budsjetter, mot at bistand gir giverlandet større politisk innflytelse i mottakerlandet", "At handel er en rettighet i det internasjonale regelverket, mot at bistand bygger på frivillighet og derfor er mer usikker", "At handel bare gagner mellominntektsland, mot at bistand er det eneste virkemidlet som når helt fattige land"],
      explanation: "Riktig svar er de to posisjonene om omfang og frihet mot fordeling og treffsikkerhet. Begge skal stå med sin sterkeste begrunnelse — dette er en åpen debatt i faget, ikke et avgjort spørsmål.",
    },
    {
      question: "Hva skal du gjøre med handelsteoriens modellapparat i en UTV1000-besvarelse?",
      options: ["Skrive innsikten i ord og bruke plassen på betingelsene, siden modellene hører til utviklingsøkonomien", "Utlede modellen kort og deretter anvende den på det landet oppgaven handler om", "Utelate temaet handel helt, siden det bare kan behandles forsvarlig med modellapparat", "Gjengi modellens forutsetninger i en egen del av besvarelsen, og gå deretter videre til den kvalitative drøftingen"],
      explanation: "Riktig svar er at faget behandler handel kvalitativt og politisk. Vekstmodeller, indeksutregning og handelsmodeller testes ikke her, men innsikten fra dem er nyttig når den skrives i ord.",
    },
    {
      question: "Hvorfor er Tribe m.fl. (2010) særlig knyttet til feilkode #10?",
      options: ["Fordi teksten har vært den sentrale kilden i de casebaserte oppgavene om handel, og en casetekst uten den mangler forankringen", "Fordi teksten er den eneste på pensum som behandler selve regelverket i handelsregimet, og derfor ikke kan erstattes av noen annen kilde", "Fordi teksten inneholder de tallene handelsoppgavene har bedt kandidatene om å gjengi og drøfte", "Fordi teksten er den nyeste på handelspensum og derfor forventes brukt i alle handelsrelaterte svar"],
      explanation: "Riktig svar er at feilkode #10 gjelder case uten den sentrale pensumkilden, og at Tribe m.fl. har vært den kilden for handelscasene. Merk at artikkellageret skiftes ut — sjekk gjeldende pensumliste.",
    },
  ],
  'utv1000-6-3': [
    {
      question: "Hva er sårbarhet i klimasammenheng?",
      options: ["Hvor stor skade en gitt påkjenning gjør, bestemt av eksponering og tilpasningskapasitet", "Hvor kraftige klimaendringene forventes å bli i et bestemt område i løpet av de neste tiårene", "Hvor stor andel av befolkningen som bor i områder med risiko for flom, tørke eller stormflo", "Hvor mye et land må bruke på tilpasning for å holde skadene nede"],
      explanation: "Riktig svar er at sårbarhet er skadeomfanget, bestemt av to komponenter. Selve påkjenningen er faren, ikke sårbarheten — og det er derfor «klimaendringer rammer alle likt» er faglig upresist.",
    },
    {
      question: "Hva er forskjellen mellom eksponering og tilpasningskapasitet?",
      options: ["Eksponering er geografisk og fysisk; tilpasningskapasitet er sosial, økonomisk og institusjonell", "Eksponering gjelder enkelthendelser, mens tilpasningskapasitet gjelder langsomme endringer over tid", "Eksponering måles på nasjonalt nivå, mens tilpasningskapasitet måles på husholdningsnivå i undersøkelser", "Eksponering gjelder mennesker, mens tilpasningskapasitet gjelder infrastruktur og produksjonsutstyr"],
      explanation: "Riktig svar er skillet mellom hvor man befinner seg og hva man har å møte påkjenningen med. To husholdninger kan ha identisk eksponering og helt ulik sårbarhet, og det er den forskjellen hele temaet hviler på.",
    },
    {
      question: "Hva skiller klimatilpasning fra utslippsreduksjon?",
      options: ["Tilpasning reduserer skaden av endringen, mens utslippsreduksjon reduserer endringen selv", "Tilpasning er nasjonale tiltak, mens utslippsreduksjon bare kan skje gjennom internasjonale avtaler", "Tilpasning gjelder jordbruk og infrastruktur, mens utslippsreduksjon gjelder energi og industri", "Tilpasning er kortsiktige nødtiltak, mens utslippsreduksjon er langsiktig planlegging over flere tiår"],
      explanation: "Riktig svar er skillet mellom å møte virkningen og å begrense årsaken. De to har ulike adressater, og det er nettopp derfor ansvarsdebatten er så vanskelig: utslippene kommer i hovedsak fra andre steder enn der skadene treffer hardest.",
    },
    {
      question: "Hvorfor er «klimaendringer rammer alle likt» en faglig gal setning?",
      options: ["Fordi den blander sammen faren og sårbarheten, og sårbarheten er svært ujevnt fordelt", "Fordi klimaendringene er sterkere i noen deler av verden enn i andre, slik at heller ikke faren er lik", "Fordi rike land har flere ressurser og derfor kan flytte befolkningen bort fra de mest utsatte områdene", "Fordi setningen er en normativ påstand og ikke en empirisk, og normative påstander kan ikke prøves"],
      explanation: "Riktig svar er sammenblandingen av fare og sårbarhet. At faren også varierer geografisk, er riktig, men det er ikke poenget: selv identisk fare gir ulik skade, fordi eksponering og kapasitet er ujevnt fordelt.",
    },
    {
      question: "Hva er den onde sirkelen mellom underutvikling og klimasårbarhet?",
      options: ["Fattigdom gir lav tilpasningskapasitet, sjokk blir mer ødeleggende, og sjokket tapper reservene som skulle båret det neste", "Klimaendringer reduserer avlingene, avlingssvikt gir høyere matvarepriser, og høye priser rammer de fattigste hardest av alle", "Fattige land har høyere utslipp per produsert enhet, utslippene forsterker endringen, og endringen rammer de samme landene", "Lav tilpasningskapasitet gir behov for bistand, bistand skaper avhengighet, og avhengighet svekker landets egne institusjoner"],
      explanation: "Riktig svar er den selvforsterkende sirkelen med tilbakekobling. De andre beskriver reelle sammenhenger, men ingen av dem lukker sirkelen — og uten lukkingen er det ingen felle.",
    },
    {
      question: "Hva er feilen når den onde sirkelen skrives som «fattigdom gir høy klimasårbarhet»?",
      options: ["At bare den ene retningen er med, slik at selve selvforsterkningen forsvinner", "At påstanden er empirisk uriktig, siden sårbarhet også finnes i høyinntektsland med god økonomi", "At den blander sammen eksponering og tilpasningskapasitet", "At den forutsetter at fattigdom kan måles, noe faget mener er et omstridt spørsmål i seg selv"],
      explanation: "Riktig svar er at halve figuren mangler. Sirkelen krever at sjokket også svekker kapasiteten til å møte det neste — uten det leddet er det en enveis påstand, og det er feilkode #9.",
    },
    {
      question: "Hva er maltilpasning?",
      options: ["Et tiltak som er ment å redusere sårbarhet, men som øker den for andre eller for de samme menneskene senere", "Et tiltak som ikke virker etter hensikten fordi det er dårlig planlagt eller mangler finansiering til drift", "Et tiltak som retter seg mot utslipp i stedet for mot tilpasning, og som derfor ikke hjelper dem som allerede rammes", "Et tiltak som gjennomføres uten at lokalbefolkningen har fått anledning til å uttale seg om utformingen"],
      explanation: "Riktig svar er at maltilpasning virker, men flytter regningen i tid eller rom. Det er nettopp forskjellen fra et mislykket tiltak: et mislykket tiltak virker ikke i det hele tatt.",
    },
    {
      question: "Hva er bærekraftig utvikling?",
      options: ["Utvikling som møter dagens behov uten å undergrave framtidige generasjoners mulighet til å møte sine", "Utvikling som gjennomføres uten at naturgrunnlaget forringes, og som derfor kan fortsette i ubegrenset tid", "Utvikling som skjer innenfor rammene av det internasjonale klimaregelverket landet har sluttet seg til", "Utvikling som fordeler goder og byrder jevnt mellom befolkningsgrupper i den generasjonen som lever nå"],
      explanation: "Riktig svar er generasjonsavveiningen. Merk at definisjonen har to ledd: dagens behov skal møtes, og framtidens mulighet skal ikke undergraves — det er derfor begrepet ikke er et synonym for vern.",
    },
    {
      question: "Hvorfor er «miljøvennlig» ikke et godt synonym for «bærekraftig utvikling»?",
      options: ["Fordi bærekraftig utvikling inneholder et krav om at dagens behov faktisk møtes, ikke bare et krav om vern", "Fordi miljøvennlighet er et upresist ord som ikke lar seg måle, mens bærekraft kan tallfestes i indikatorer", "Fordi miljøvennlighet gjelder enkelttiltak, mens bærekraftig utvikling bare kan vurderes på nasjonalt nivå", "Fordi bærekraftig utvikling er et faguttrykk fra utviklingsstudiene, mens miljøvennlig hører til naturvitenskapene"],
      explanation: "Riktig svar er det andre leddet i definisjonen. Leser man bærekraft som «miljøvennlig», blir begrepet et krav lavinntektsland møter og høyinntektsland allerede har oppfylt — leser man det som en generasjonsavveining, gjelder det alle.",
    },
    {
      question: "Hva er de tre hensynene i bærekraftig utvikling, og hva er poenget med dem?",
      options: ["Det økologiske, det økonomiske og det sosiale — og poenget er at de kan komme i konflikt med hverandre", "Utslipp, tilpasning og finansiering — og poenget er at alle tre må være dekket i en nasjonal plan", "Nåtid, framtid og fordeling — og poenget er at de tre må vektes likt i enhver politisk beslutning", "Stat, marked og sivilsamfunn — og poenget er at alle tre aktørene må delta for at omstillingen skal lykkes"],
      explanation: "Riktig svar er de tre hensynene og deres innbyrdes spenning. Å ramse dem opp uten å nevne en eneste konflikt mellom dem er gjengivelse i stedet for drøfting, og det er feilkode #1.",
    },
    {
      question: "Hvorfor er parallellen mellom klimasirkelen og konfliktfellen nyttig i en besvarelse?",
      options: ["Fordi den viser at du kjenner igjen en mekanismeform på tvers av temaer, ikke bare to temaer hver for seg", "Fordi den beviser at klimaendringer er en av hovedårsakene til væpnet konflikt i lavinntektsland i dag", "Fordi konfliktfellen er bedre dokumentert, slik at klimasirkelen får sin empiriske støtte fra den", "Fordi de to temaene alltid kommer sammen i eksamensoppgavene og derfor bør besvares under ett"],
      explanation: "Riktig svar er mekanismegjenkjenningen. Merk at parallellen gjelder formen, ikke innholdet: sammenhengen mellom klima og konflikt er omstridt og skal ikke påstås som en enkel årsakskjede.",
    },
    {
      question: "Hvordan skal sammenhengen mellom klima og migrasjon fremstilles?",
      options: ["Som en mekanisme med usikker størrelsesorden, siden klima opptrer sammen med økonomiske og politiske årsaker", "Som en direkte årsakssammenheng, siden det er godt dokumentert hvor mange som flytter på grunn av klimaendringer", "Som et spørsmål utenfor fagets rammer, siden migrasjonsforskning hører til andre disipliner enn utviklingsstudier", "Som en normativ debatt der posisjonene er uenige om hvorvidt klimaflyktninger bør ha rett til opphold"],
      explanation: "Riktig svar er å skrive mekanismen og la størrelsesordenen stå åpen. Årsakene opptrer sammen og lar seg vanskelig isolere — den som skriver et tall her, skriver et tall som ikke finnes.",
    },
    {
      question: "Hva er de tre posisjonene i ansvarsspørsmålet om klimakostnader?",
      options: ["At ansvaret følger historiske utslipp, at det følger dagens og framtidens utslipp, og at det følger evnen til å betale", "At ansvaret ligger hos statene, at det ligger hos selskapene som slipper ut, og at det ligger hos den enkelte forbruker", "At ansvaret bør avgjøres av internasjonale domstoler, av forhandlinger mellom land, eller av frivillige bidrag", "At ansvaret gjelder utslippskutt, at det gjelder tilpasning, og at det gjelder erstatning for skader som allerede er skjedd"],
      explanation: "Riktig svar er de tre fordelingsprinsippene. Merk at dette er et normativt spørsmål: at en struktur forklarer hvem som rammes, sier ingenting om hvem som bør holdes ansvarlig.",
    },
    {
      question: "Hva er den vanligste faglige feilen når ansvarsspørsmålet behandles?",
      options: ["At et forskningsfunn glir over i en ansvarsdom uten at overgangen merkes", "At posisjonene fremstilles som mer like hverandre enn de faktisk er i den internasjonale debatten", "At debatten behandles som avgjort, siden avtaler alt fordeler ansvaret", "At spørsmålet behandles i det hele tatt, siden det ligger utenfor det utviklingsstudier kan uttale seg om"],
      explanation: "Riktig svar er glidningen fra empirisk til normativt. At det globale sør rammes hardest, er dokumentert; hvem som skylder hvem, har flere forsvarlige svar — og en besvarelse som ikke merker overgangen, svekker seg selv.",
    },
    {
      question: "Hvorfor er regnavhengig landbruk en så direkte kobling mellom klima og utvikling?",
      options: ["Fordi nedbørsvikt går rett over i inntektstap uten mellomledd som kan dempe, og hvert mulig mellomledd er et utviklingsspørsmål", "Fordi jordbruket står for den største andelen av utslippene i lavinntektsland og dermed også for problemet", "Fordi jordbruksarealene ligger i de områdene som er mest utsatt for flom og stormflo i de fleste land", "Fordi landbruket er den sektoren som mottar mest bistand, slik at klimaskader raskt får budsjettmessige følger"],
      explanation: "Riktig svar er fraværet av mellomledd. Vanning, forsikring, alternative inntekter og lagring er nettopp de mellomleddene som mangler, og hvert av dem er noe utviklingspolitikk kan bygge.",
    },
    {
      question: "Hva er kjernen i tilpasningsfinansieringsdebatten?",
      options: ["De samme spørsmålene som i bistandsdebatten: hvem bestemmer, hvilke vilkår følger med, og hvilken kanal midlene går gjennom", "Hvor store beløp som trengs, siden anslagene varierer kraftig mellom de ulike internasjonale organisasjonene", "Om midlene skal gå til utslippskutt eller til tilpasning, siden de to formålene konkurrerer om de samme pengene", "Om private investorer eller offentlige givere skal bære hovedtyngden av finansieringen i årene framover"],
      explanation: "Riktig svar er at debatten gjentar bistandens gamle spørsmål. Å se og skrive det er et selvstendighetsgrep: det viser at du kjenner igjen en struktur på tvers av temaer i faget.",
    },
    {
      question: "Hva er et klimasjokk, og hva skiller det fra en trend?",
      options: ["Et sjokk er en enkelthendelse som slår ut på kort tid; en trend er en langsom endring som kan planlegges for", "Et sjokk rammer et avgrenset område, mens en trend gjelder hele regioner eller kontinenter samtidig", "Et sjokk skyldes naturlige svingninger, mens en trend skyldes menneskeskapte utslipp over lang tid", "Et sjokk måles i økonomiske tap, mens en trend måles i endringer i temperatur og nedbørsmengde"],
      explanation: "Riktig svar er skillet mellom hendelse og langsom endring. Poenget er analytisk: trender kan planlegges for, mens sjokk må absorberes — og evnen til å absorbere er det som skiller husholdninger og land.",
    },
    {
      question: "Hva er motstandsdyktighet (resilience) hos Brown, og hva er innvendingen mot begrepet?",
      options: ["Systemets evne til å absorbere sjokk og endre seg; innvendingen er at ansvaret for å tåle kan legges på dem som rammes", "Et lands økonomiske reserver til å møte kriser; innvendingen er at reservene sjelden er tilgjengelige når krisen kommer", "Befolkningens vilje til å bli boende etter et sjokk; innvendingen er at det romantiserer et liv under harde vilkår", "Infrastrukturens tekniske tåleevne; innvendingen er at tekniske løsninger alltid er dyrere enn forebygging"],
      explanation: "Riktig svar er evnen til å absorbere og endre seg, med den kritiske innvendingen om ansvarsplassering. Merk at dette er stoff du bør kjenne til — ta det med hvis du har plass, ikke på bekostning av sårbarhetsbegrepene.",
    },
    {
      question: "Hva var det interessante ved skiftet fra tusenårsmål til bærekraftsmål i 2015?",
      options: ["At rammen ble utvidet fra fattigdomsreduksjon i lavinntektsland til mål som gjelder alle land", "At antallet mål ble redusert, slik at innsatsen kunne konsentreres om de viktigste utfordringene", "At målene ble juridisk bindende for medlemslandene og dermed kunne håndheves internasjonalt", "At klimatilpasning for første gang ble skilt ut som et eget mål med egen finansieringsordning"],
      explanation: "Riktig svar er utvidelsen av rammen til å gjelde alle land, inkludert forbruk og produksjon i høyinntektsland. Dette er stoff du bør kjenne til, brukt som kort ramme rundt bærekraftbegrepets historie.",
    },
    {
      question: "Hvorfor hviler tilpasningskapasitet på flere ulike ressursformer samtidig?",
      options: ["Fordi de ikke kan byttes fritt mot hverandre — penger erstatter ikke en vei som er borte", "Fordi ingen land har alle ressursformene tilgjengelig, og prioritering derfor er nødvendig", "Fordi hver ressursform virker mot sin egen type påkjenning og er uten betydning for de andre", "Fordi de ulike formene måles med ulike metoder og derfor må rapporteres hver for seg i statistikken"],
      explanation: "Riktig svar er at ressursformene ikke er utbyttbare. Det er derfor tilpasningspolitikk sjelden lar seg redusere til én overføring: et sterkt lokalsamfunn erstatter ikke et grunnvann som er tømt.",
    },
    {
      question: "Hva er testen på om et svar har koblet klima til utvikling?",
      options: ["Om det står et sted i svaret hva klimaendringen gjør med et utviklingsutfall som avling, skolegang eller institusjoner", "Om svaret nevner minst én av de sentrale klimaartiklene på pensum ved navn og publiseringsår", "Om svaret behandler både utslippsreduksjon og tilpasning, siden begge er en del av klimapolitikken", "Om svaret bruker begrepet bærekraftig utvikling minst én gang i løpet av besvarelsen"],
      explanation: "Riktig svar er å lete etter et utviklingsutfall i sin egen tekst. Klimaendringer beskrevet som et rent miljøfenomen er feilkode #7, og pensumnavn alene reparerer ikke den manglende koblingen.",
    },
    {
      question: "Hvordan bør et svar behandle påstanden om at det globale sør rammes hardest av klimaendringer?",
      options: ["Som et forskningsfunn med sitt faktiske belegg: større eksponering og lavere tilpasningskapasitet", "Som en posisjon i debatten, siden ulike forskere vektlegger ulike sider av spørsmålet forskjellig", "Som en normativ påstand som ikke kan avgjøres empirisk og derfor bør presenteres med forbehold", "Som en forenkling, siden også høyinntektsland opplever ekstremvær med store økonomiske skader"],
      explanation: "Riktig svar er å presentere det som funn med mekanismen skrevet ut. Å pakke et robust funn inn i «noen mener» er ikke nøytralitet — det er å svekke faget. Det normative kommer først i ansvarsspørsmålet.",
    },
  ],
  'utv1000-7-1': [
    {
      question: "Hva er kjernen i Cornwalls poeng om deltakelse i utviklingsarbeid?",
      options: ["At ordet dekker svært ulike praksiser, fra ren informasjon til reell beslutningsmakt, og at det er formen som avgjør virkningen", "At deltakelse alltid gir bedre prosjekter, fordi lokalkunnskap gjør utformingen riktigere enn ekspertkunnskapen giveren bringer med seg utenfra", "At deltakelse er et krav som må stilles til alle prosjekter for at bistanden skal kunne regnes som moderne", "At deltakelse i praksis betyr at de som berøres, får si sin mening på et møte før vedtaket fattes"],
      explanation: "Cornwalls bidrag er å skille formene fra hverandre: informasjon, konsultasjon og reell beslutningsmakt kalles alle deltakelse, men virker helt ulikt. At deltakelse alltid gir bedre prosjekter er en påstand om virkning som Cornwall nettopp problematiserer. At det å si sin mening er hele saken, er den upresise definisjonen skillet er ment å erstatte.",
    },
    {
      question: "Hva er distinksjonen mellom deltakelse og myndiggjøring (empowerment)?",
      options: ["Deltakelse beskriver formen på prosessen, mens myndiggjøring beskriver om makt faktisk ble flyttet", "Deltakelse gjelder enkeltpersoner i et prosjekt, mens myndiggjøring gjelder hele lokalsamfunn og regioner", "Deltakelse er et krav fra giverne, mens myndiggjøring er et krav fra mottakerne av utviklingsmidlene", "Deltakelse hører til bistandsfeltet, mens myndiggjøring er et begrep fra teoriene om menneskelig utvikling"],
      explanation: "Riktig svar er at det ene ordet beskriver formen og det andre virkningen: du kan ha deltakelse uten at noen beslutning er flyttet. Skillet går ikke på hvor mange som omfattes, og heller ikke på hvem som stiller kravet. At begrepene skulle høre til hvert sitt fagfelt, blander sammen to ord som brukes om samme prosess.",
    },
    {
      question: "Hva kjennetegner symbolsk deltakelse?",
      options: ["Kravet om medvirkning oppfylles i formen, men ingen beslutning flyttes fra dem som allerede bestemte", "Prosjektet mislykkes fordi deltakerne ikke møter opp på de møtene som er satt opp i planen", "Deltakelsen gjelder bare noen få utvalgte grupper, mens resten av lokalsamfunnet holdes utenfor prosessen", "Deltakelsen skjer sent i prosessen fordi giveren mangler ressurser til å konsultere alle berørte parter"],
      explanation: "Riktig svar er at formen er oppfylt mens makten står stille — møtet holdes, planen består. Symbolsk deltakelse er ikke det samme som mislykket deltakelse: den kan virke helt etter arrangørens hensikt. At bare noen grupper deltar, eller at det skjer sent, er andre problemer og kan opptre både med og uten at makt flyttes.",
    },
    {
      question: "Hva er forskjellen på deltakelse som middel og deltakelse som mål?",
      options: ["Som middel begrunnes den med at prosjektet blir bedre, som mål med at innflytelse over eget liv er en del av utvikling", "Som middel brukes den i planleggingen av tiltaket, som mål brukes den i evalueringen etter at tiltaket er avsluttet", "Som middel gjelder den frivillige organisasjoner, mens den som mål bare gjelder offentlige utviklingsprogrammer", "Som middel er den frivillig for deltakerne, mens den som mål er et krav giverlandet stiller til mottakeren"],
      explanation: "Riktig svar er at begrunnelsene er ulike: instrumentelt bedre prosjekter mot at innflytelse i seg selv er et gode. Distinksjonen får praktisk betydning, for et middel kan kuttes når det blir dyrt, mens et mål ikke kan det. Skillet handler verken om når i prosessen deltakelsen skjer eller om hvilken type aktør som driver den.",
    },
    {
      question: "Hvorfor er det for upresist å si at sivilsamfunnet «representerer befolkningen»?",
      options: ["En organisasjon har egne givere, egen ledelse og eget mandat, så hvem den taler for er et empirisk spørsmål", "Sivilsamfunnet er per definisjon en del av staten og kan derfor ikke tale på vegne av noen andre enn den", "Sivilsamfunnsorganisasjoner arbeider bare med nødhjelp og har derfor ingen rolle i langsiktig utvikling", "Representasjon krever formelle valg, og bare organisasjoner som er registrert hos myndighetene har slike ordninger på plass"],
      explanation: "Riktig svar er at det å stå utenfor staten ikke i seg selv gjør en aktør representativ — det avhenger av mandat, finansiering og forankring. Sivilsamfunnet defineres nettopp som verken stat eller marked, så påstanden om at det er en del av staten er feil. At de bare driver nødhjelp, er også galt: de er både kanal for midler og talerør.",
    },
    {
      question: "Hvordan bør lokal kunnskap behandles i en faglig besvarelse?",
      options: ["Som en kunnskapskilde som skal prøves, på linje med ekspertkunnskapen den er satt opp mot", "Som automatisk riktig, siden den kommer fra dem som faktisk lever med konsekvensene av tiltaket", "Som uinteressant i utviklingsstudier, fordi faget måler teoretisk presisjon og ikke praktisk erfaring", "Som et honnørord som viser at kandidaten kjenner til kritikken av ekspertstyrt utviklingsarbeid"],
      explanation: "Riktig svar er at lokal kunnskap skal prøves som enhver annen kunnskapskilde — å behandle den som automatisk riktig er samme feil som å behandle ekspertkunnskapen slik. Post-utviklingstradisjonen løfter den fram som alternativ, men det gjør den ikke ufeilbarlig. Å bruke begrepet som honnørord er nettopp den ukritiske bruken faget straffer.",
    },
    {
      question: "Hvor ligger definisjonsmakten i et utviklingsprosjekt?",
      options: ["I leddet der målet formuleres — i mandatet, søknaden og rapporteringskravet, ikke i selve gjennomføringen", "Hos den som betaler, siden den som finansierer et tiltak alltid avgjør hvordan det skal gjennomføres", "Hos prosjektledelsen på stedet, fordi det er den som tar de daglige beslutningene underveis i arbeidet", "I behovskartleggingen, siden det er der de berørte får oppgi hva de mener bør prioriteres først"],
      explanation: "Riktig svar er at makten ligger der målet formuleres, altså der det avgjøres hva som skal telle som problem og forbedring. En behovskartlegging henter svar innenfor kategorier som allerede er valgt, og flytter derfor ikke definisjonsmakten. At finansiering gir all makt over gjennomføringen er en forenkling som overser at målformuleringen er et eget ledd.",
    },
    {
      question: "Hva var diagnosen i WID-tilnærmingen (Women in Development)?",
      options: ["At kvinner var utelatt fra utviklingsprogrammene, og at løsningen var å slippe dem inn i dem", "At kjønnsrelasjonene i samfunnet formet utfallet, og at programmene derfor måtte bygges om fra grunnen av", "At utviklingsbegrepet selv var en vestlig konstruksjon som måtte avvises før kvinner kunne nås", "At kvinner deltok, men at deltakelsen var symbolsk og derfor ikke flyttet noen beslutninger i praksis"],
      explanation: "Riktig svar er at WID så utelatelse som problemet og inkludering som løsningen. Å se på relasjonene og bygge om selve programmet er GAD-diagnosen, ikke WID-diagnosen — det er nettopp her de to skiller lag. Kritikken av utviklingsbegrepet som vestlig konstruksjon hører til post-utvikling og er en annen debatt.",
    },
    {
      question: "Hva flyttet GAD-tilnærmingen (Gender and Development) blikket til?",
      options: ["Til kjønnsrelasjonene: arbeidsdeling, eiendom og beslutningsmakt slik de er bygget inn i institusjoner", "Til antall kvinner som deltar i utviklingsprogrammer, slik at inkluderingen kunne måles og rapporteres til giverne", "Til kvinners egne organisasjoner, som skulle overta gjennomføringen av programmene fra myndighetene", "Til lovgivningen i mottakerlandene, siden formell likestilling er en forutsetning for reell deltakelse"],
      explanation: "Riktig svar er at GAD analyserer relasjonene mellom kjønnene og hvordan de er bygget inn i institusjoner. Å telle deltakere er WID-logikken, og det er nettopp det suksesskriteriet GAD utfordrer. Verken organisasjonsspørsmålet eller lovgivningen er det som definerer skiftet, selv om begge kan inngå i et GAD-tiltak.",
    },
    {
      question: "Hvilken praktisk konsekvens har skiftet fra WID til GAD for hvordan et tiltak måles?",
      options: ["Et WID-tiltak kan måles på deltakertall, mens et GAD-tiltak må måles på om relasjonene faktisk endret seg", "Et WID-tiltak må måles over flere år, mens et GAD-tiltak kan evalueres straks det er gjennomført", "Et WID-tiltak måles av giveren, mens et GAD-tiltak måles av mottakerlandets egne myndigheter", "Et WID-tiltak krever kjønnsdelt statistikk, mens et GAD-tiltak klarer seg med samlede tall"],
      explanation: "Riktig svar er at de to diagnosene gir ulike suksesskriterier: antall deltakere mot endring i arbeidsdeling, eierskap eller beslutningsmakt. Forskjellen ligger ikke i tidshorisont og heller ikke i hvem som gjennomfører målingen. Påstanden om samlede tall snur saken på hodet, siden relasjonsanalysen krever mer oppdelt informasjon, ikke mindre.",
    },
    {
      question: "Hva menes med kjønnsblindhet som analytisk begrep?",
      options: ["At et tiltak utformes uten at kjønnsforskjeller i tid, eiendom og makt tas med, og derfor treffer skjevt", "At et tiltak bevisst utelukker kvinner fra å delta, og at utelukkelsen er formulert i regelverket som styrer ordningen", "At de som utformer tiltaket, mangler kunnskap om lokale forhold og derfor gjør faglige feil", "At statistikken ikke er delt på kjønn, slik at skjevheten ikke kan dokumenteres i etterkant"],
      explanation: "Riktig svar er at kjønnsblindhet er en utelatelse i utformingen, ikke en intensjon — virkningen oppstår i møtet mellom et nøytralt formulert krav og et ujevnt fordelt utgangspunkt. Bevisst utelukkelse i regelverket ville vært forskjellsbehandling, som er noe annet. Manglende kjønnsdelt statistikk kan skjule virkningen, men er ikke det begrepet betegner.",
    },
    {
      question: "Hva skiller multilateralt fra bilateralt utviklingssamarbeid?",
      options: ["I det multilaterale går midler og betingelser gjennom en institusjon med egne styringsorganer og regler", "I det multilaterale gis midlene uten betingelser, mens bilateral bistand alltid følges av politiske vilkår", "I det multilaterale deltar bare rike land, mens bilateral bistand går mellom land på samme inntektsnivå", "I det multilaterale gis midlene som gaver, mens bilateral bistand alltid gis i form av lån som betales tilbake"],
      explanation: "Riktig svar er at kanalen går gjennom en institusjon med egne organer, og at dette flytter både makt og ansvar bort fra det enkelte giverlandet. Multilaterale midler er ikke vilkårsfrie — vilkår er tvert imot en kjerne i for eksempel Det internasjonale pengefondets rolle. Skillet handler om kanal, ikke om inntektsnivå eller om lån mot gave.",
    },
    {
      question: "Hva skiller Verdensbankens rolle fra Det internasjonale pengefondets (IMF)?",
      options: ["Verdensbanken er innrettet mot langsiktige lån til investering og reform, IMF mot betalingsbalanse og stabilisering", "Verdensbanken låner ut til stater, mens Det internasjonale pengefondet bare låner ut til private selskaper", "Verdensbanken setter politiske vilkår for lånene sine, mens Det internasjonale pengefondet aldri stiller slike krav til låntakerne", "Verdensbanken er en del av FN-systemet, mens Det internasjonale pengefondet er en frittstående organisasjon"],
      explanation: "Riktig svar er at mandatene er ulike: langsiktig utviklingsutlån mot kortsiktig stabilisering ved betalingsbalansekriser. De opptrådte sammen i strukturtilpasningsårene, men det gjør dem ikke til samme institusjon — å slå dem sammen er en typisk distinksjonsfeil. Påstanden om at bare den ene setter vilkår, er gal: vilkår er nettopp kjernen i Pengefondets utlån.",
    },
    {
      question: "Hva er FN-systemets særegne styrke som utviklingsaktør?",
      options: ["Normsettingen: det er her utviklingsmål formuleres og forhandles mellom stater, og målene blir førende", "Utlånsmakten: FN er den største långiveren til land i gjeldskrise og setter derfor betingelsene for reform", "Gjennomføringen: FN driver de fleste utviklingsprosjektene i felt og har derfor mest praktisk erfaring", "Kontrollen: FN reviderer bistandsregnskapene til giverlandene og avgjør hva som kan telles som bistand"],
      explanation: "Riktig svar er at FN har liten utlånsmakt, men stor definisjonsmakt — tusenårsmålene og bærekraftsmålene er eksempler på mål formulert her som ble førende for rapporteringen. Utlånsrollen ved kriser ligger hos Det internasjonale pengefondet og Verdensbanken. Verken feltdominans eller revisjonsmyndighet er det som kjennetegner FNs rolle.",
    },
    {
      question: "Hvorfor er stemmefordelingen i multilaterale institusjoner et faglig poeng og ikke bare en prosedyredetalj?",
      options: ["Den forklarer hvorfor de samme statene kan ha svært ulik innflytelse to steder i det samme systemet", "Den avgjør hvor mye penger hvert medlemsland må betale inn til institusjonens virksomhet hvert år", "Den bestemmer hvilke land som kan motta lån, siden bare stater med stemmerett er låneberettigede", "Den er nedfelt i FN-pakten og gjelder derfor likt for alle internasjonale organisasjoner"],
      explanation: "Riktig svar er at stemmevekt knyttet til kapitalinnskudd i Verdensbanken og Pengefondet gir en helt annen maktfordeling enn én stat én stemme i FNs generalforsamling. Stemmevekten følger av innskuddene, den fastsetter dem ikke. At én regel skulle gjelde alle organisasjoner er nettopp det motsatte av poenget.",
    },
    {
      question: "Hva er den analytiske forskjellen på vilkår stilt multilateralt og bilateralt?",
      options: ["Virkningen kan være den samme, men ansvarslinjen er en annen: det er vanskeligere å peke på hvem som stilte kravet", "Multilaterale vilkår er faglige og derfor nøytrale, mens bilaterale vilkår alltid tjener giverlandets egne interesser", "Multilaterale vilkår gjelder bare økonomisk politikk, mens bilaterale vilkår gjelder menneskerettigheter", "Multilaterale vilkår er frivillige å følge, mens bilaterale vilkår er juridisk bindende for mottakeren"],
      explanation: "Riktig svar er at forskjellen først og fremst ligger i ansvarslinjen, ikke nødvendigvis i virkningen. Å si at multilaterale vilkår er nøytrale fordi de fremstår som faglige, er å godta fremstillingen i stedet for å analysere den — det er nettopp den nære fellen her. Skillet følger heller ikke saksområde eller juridisk bindingsgrad.",
    },
    {
      question: "Hva er den sentrale distinksjonen mellom tusenårsmålene og bærekraftsmålene?",
      options: ["Tusenårsmålene var en avgrenset liste rettet mot fattige land, mens bærekraftsmålene er universelle", "Tusenårsmålene var juridisk bindende for medlemsstatene, mens bærekraftsmålene bare er politiske anbefalinger uten rettslig kraft", "Tusenårsmålene handlet om miljø, mens bærekraftsmålene handler om fattigdom og sosiale forhold", "Tusenårsmålene ble vedtatt av giverlandene, mens bærekraftsmålene ble vedtatt av mottakerlandene"],
      explanation: "Riktig svar er at rekkevidden skiller dem: en avgrenset liste rettet mot fattige land ble avløst av universelle mål som gjelder alle land, i 2015. Ingen av settene er juridisk bindende, så den distinksjonen holder ikke. At det ene skulle handle om miljø og det andre om fattigdom, snur dessuten innholdet på hodet.",
    },
    {
      question: "Hva var kjernen i den casebaserte emneoppgaven (CASE)?",
      options: ["Et konkret tilfelle analysert med fagets begreper, forankret i navngitt pensum og endt i egne begrunnede anbefalinger", "En sammenligning av to utviklingsteorier med vekt på likheter, ulikheter og deres relevans i dag, skrevet som ett sammenhengende langsvar", "Et kortsvar på et par avsnitt der begrepet defineres presist før mekanismen mot utvikling vises", "En gjennomgang av et lands utviklingshistorie fra avkolonisering fram til dagens økonomiske situasjon"],
      explanation: "Riktig svar er at sjangeren kombinerte case-analyse, navngitt pensumforankring og egne anbefalinger. Teorisammenligningen hører til Oppgave A i dagens form, og kortsvaret er Del II-sjangeren — begge er andre sjangre med andre krav. Sjangeren fantes i tre terminer og er ikke lenger en del av vurderingen.",
    },
    {
      question: "Hvordan skiller en begrunnet anbefaling seg fra en løsrevet mening?",
      options: ["Den ville falt bort hvis analysen hadde vist noe annet, fordi den følger av et bestemt funn i teksten", "Den er formulert forsiktig og med forbehold, slik at den ikke kan leses som et politisk standpunkt", "Den er hentet fra pensum, slik at den kan belegges med en kilde i stedet for med kandidatens eget syn på saken", "Den står i konklusjonen og ikke i hoveddelen, slik at leseren ser hvor teksten lander til slutt"],
      explanation: "Riktig svar er koblingen til analysen: en anbefaling som ville stått uendret uansett funn, henger ikke sammen med teksten. Å hente anbefalingen fra pensum er ikke å mene noe selv, og det er nettopp den feilen kravet er rettet mot. Plassering og forsiktig formulering avgjør ingenting om anbefalingen er begrunnet.",
    },
    {
      question: "Hva innebærer kravet om pensumforankring i en case-analyse?",
      options: ["At teksten ville sett annerledes ut uten kilden, ikke bare at kilden er nevnt eller står i litteraturlisten", "At alle påstander i teksten skal ha en kildehenvisning med både forfatter, årstall og sidetall", "At kandidaten bruker minst tre pensumtekster, slik kravet er i beslektede innføringsemner", "At kilden er nyere enn fem år, slik at analysen bygger på oppdatert faglitteratur om temaet"],
      explanation: "Riktig svar er at forankring betyr at kilden gjør arbeid i teksten, mens en henvisning bare viser at du har lest. Å skrive om et tema uten dets sentrale kilde er feil #10. Sidetallskrav og krav om et minste antall pensumtekster gjelder ikke i denne boka, og et krav om kildens alder finnes ikke.",
    },
    {
      question: "Hva er problemet med en oppramsende tekst uten tydelig disposisjon?",
      options: ["Den kan inneholde alt det riktige og likevel trekke ned, fordi leseren ikke ser hva som er argumentet", "Den blir for lang, og sensor rekker ikke å lese hele besvarelsen innenfor den sensurfristen som gjelder", "Den mangler kilder, siden en tekst uten struktur sjelden får plass til pensumhenvisninger og eksempler", "Den bryter formkravet om innledning på minst ett avsnitt og konklusjon på minst to avsnitt til slutt"],
      explanation: "Riktig svar er at innholdet kan være riktig mens argumentet blir usynlig — det er derfor uklar disposisjon er feil #12 og trekker mot de laveste karakterene. Problemet er ikke lengden, og heller ikke antall kilder. Det finnes ingen formkrav om et bestemt antall avsnitt i innledning eller konklusjon.",
    },
    {
      question: "Hva gjelder om referansestil på dagens skoleeksamen i UTV1000?",
      options: ["Ingen referansestil kreves; du navngir teoretiker og teori, og oppgir aldri sidetall", "APA-stil kreves, med kildehenvisning i teksten og full litteraturliste til slutt", "Referanser kreves bare i Oppgave A, siden den teller seksti prosent av karakteren", "Referanser er forbudt, fordi eksamen skal måle kandidatens egen formulering av stoffet"],
      explanation: "Riktig svar er at eksamen er en fire timers skoleeksamen med kontrollert ordbok som eneste hjelpemiddel, og at pensumreferanser er en styrke uten å være et formkrav. APA-kravet hørte til den avviklede emneoppgaven fra 2015 til 2019 og gjelder ikke her. Å bruke pensum er selvsagt ikke forbudt — det er tvert imot Akse 4.",
    },
    {
      question: "Hva betyr det at et stoff er merket som beredskapsstoff i denne boka?",
      options: ["Det prøves ikke i dagens eksamensform, men er tatt med fordi det kan gjenoppstå eller er overførbart", "Det er så vanskelig at det bare bør leses av kandidater som sikter mot toppkarakteren A", "Det er stoff som må pugges til slutt, like før eksamen, fordi det er lett å glemme igjen", "Det er stoff sensor forventer i alle besvarelser, men som ikke står eksplisitt i oppgaveteksten"],
      explanation: "Riktig svar er at merkelappen betyr stoff utenfor dagens vurdering som likevel har verdi, og at det derfor leses sist. Det er ikke et vanskelighetsnivå og ikke en pugge-instruks. At sensor skulle forvente det i alle besvarelser, er det motsatte av hva merkelappen sier.",
    },
    {
      question: "Hva skiller en case-analyse fra en case-beskrivelse?",
      options: ["Analysen sier hva tilfellet er et tilfelle av, hvilket begrep det belegger og hvilken mekanisme som virker", "Analysen er lengre og gir langt flere detaljer om hendelsesforløpet enn en ren beskrivelse gjør", "Analysen bygger på intervjuer og eget feltarbeid, mens beskrivelsen bygger på skriftlige kilder og rapporter", "Analysen skrives i konklusjonen, mens beskrivelsen hører hjemme i innledningen til den samlede teksten"],
      explanation: "Riktig svar er at analysen kobler tilfellet til et begrep og en mekanisme, slik at det viser noe ut over seg selv. Flere detaljer gjør ikke en beskrivelse til en analyse — det er tvert imot den vanligste måten å falle på Akse 1. Verken metodevalg eller plassering i teksten avgjør forskjellen.",
    },
    {
      question: "Hvilken av de fire vurderingsaksene omtales som A-markøren, og hva måler den?",
      options: ["Akse 3, som måler kritisk blikk og selvstendighet, og at utvikling ikke behandles som et nøytralt gode", "Akse 1, som måler at svaret drøfter i stedet for å gjengi, og som er den viktigste av alle fire", "Akse 2, som måler at kjernebegrepene i besvarelsen faktisk er presist definert", "Akse 4, som måler at svaret er forankret i konkrete land, teoretikere og case fra pensum"],
      explanation: "Riktig svar er at Akse 3 er A-markøren: den måler at kandidaten mener noe begrunnet og behandler utvikling som verdiladet. Akse 1 er den viktigste aksen og trekker grensen mot det refererende svaret, men det er ikke den som kalles A-markøren. Akse 2 er grunnkravet og Akse 4 løfter — begge er nødvendige, men ingen av dem er markøren for toppnivå.",
    },
    {
      question: "Hvordan ser et godt kritisk løft ut i et kortsvar om deltakelse, ifølge dette kapitlet?",
      options: ["Én til tre setninger som viser at valget av målestokk selv er et utviklingspolitisk spørsmål", "Et eget avsnitt som gjentar hovedpunktene om at utviklingsbegrepet er verdiladet og maktladet", "En avsluttende setning om at temaet er sammensatt og at det finnes argumenter på begge sider", "En henvisning til at post-utviklingstradisjonen avviser hele utviklingsbegrepet som vestlig"],
      explanation: "Riktig svar er at løftet er kort og konkret: det endrer vurderingen av det du nettopp skrev, ved å vise at målestokken er valgt og kunne vært en annen. Et gjentakende avsnitt om at utvikling er verdiladet er påklistret og faller på feil #4. At noe er sammensatt uten grunner, er ikke en drøfting, og en løs henvisning til post-utvikling er ikke et løft i seg selv.",
    },
  ],
  'utv1000-8-1': [
    {
      question: "Hvorfor skal Oppgave A skrives før kortsvarene, selv om den «bare» teller seksti prosent?",
      options: ["Fordi Del I er obligatorisk, og et tomt svar der gir automatisk F uansett hvor gode kortsvarene er", "Fordi sensor leser besvarelsene i rekkefølge og danner seg et inntrykk av kandidaten fra det første svaret", "Fordi kortsvarene i Del II er lettere, og de bør derfor spares til slutten av eksamensdagen når du er sliten", "Fordi Oppgave A alltid krever flere kilder, og du må ha oversikt over pensum mens du fortsatt er uthvilt"],
      explanation: "Riktig svar er strykregelen: manglende svar på Del I gir F, og den kan ikke veies opp av noe i Del II. Rekkefølgen sensor leser i, spiller ingen rolle for vurderingen. At kortsvarene skulle være lettere, er heller ikke poenget — de tar førti minutter hver og krever egen presisjon.",
    },
    {
      question: "Hva bestiller ledd i i Oppgave A?",
      options: ["Presise definisjoner, hovedteoretikere, hva teorien var et svar på, og synet på fattigdom og på veien til utvikling", "En sammenligning av teoriene langs minst to akser, med belegg på begge sider av hver akse som behandles", "Et begrunnet standpunkt om hvilken av teoriene som forklarer dagens globale ulikhet best, med eksempler", "En historisk gjennomgang av perioden teoriene ble til i, med avkolonisering og den kalde krigen som ramme"],
      explanation: "Riktig svar er at ledd i er redegjørelsen: definisjoner, avsendere og teorienes eget innhold. Sammenligningen hører til ledd ii i likhetsvarianten, og standpunktet til ledd iii. Den historiske gjennomgangen er ledd ii i kontekstvarianten — å legge den i ledd i er en vanlig disponeringsfeil.",
    },
    {
      question: "Hva er kjennetegnet på at ledd ii faktisk er en drøfting og ikke mer redegjørelse?",
      options: ["Teksten inneholder setninger som kunne vært motsagt, ikke bare setninger som gjengir hva noen har ment", "Teksten er lengre enn ledd i, siden drøftingen er den delen som veier tyngst i den samlede vurderingen", "Teksten bruker faguttrykk fra pensum og navngir minst to teoretikere per teori som behandles", "Teksten er skrevet i jeg-form, slik at det går tydelig fram at vurderingene er kandidatens egne"],
      explanation: "Riktig svar er at en påstand som kan motsies, er et argument — en gjengivelse kan ikke motsies, den kan bare være riktig eller gal. Lengde avgjør ingenting, og flere teoretikernavn gir bare mer redegjørelse. Jeg-form er lov, men en tekst i jeg-form kan være like refererende som en uten.",
    },
    {
      question: "Hvilke tre former kan drøftingsleddet i Oppgave A bestilles i?",
      options: ["Historisk kontekst, likheter og ulikheter, eller styrker og svakheter ved teoriene", "Definisjon, mekanisme og eksempel, altså de tre trinnene som også bærer et godt kortsvar", "Redegjørelse, sammenligning og anbefaling, slik den casebaserte emneoppgaven var bygget opp", "Teori, empiri og metode, som er den vanlige tredelingen i samfunnsvitenskapelige oppgaver ellers"],
      explanation: "Riktig svar er de tre variantene korpuset viser: kontekst, likheter og ulikheter, eller styrker og svakheter. Definisjon, mekanisme og eksempel er kortsvarets oppbygning, ikke drøftingsleddets. Anbefalingsleddet hørte til den avviklede emneoppgaven, og teori, empiri og metode er ikke en inndeling dette faget bruker.",
    },
    {
      question: "Hva ligger i de sju byggeklossene per teori?",
      options: ["Alt du trenger om én teori for å bygge alle tre leddene, sortert etter hvilket ledd hver kloss brukes i", "De sju teoretikerne pensum navngir for hver av de fem utviklingsteoriene som inngår i Oppgave A", "En sjekkliste med sju formkrav besvarelsen må oppfylle for å kunne vurderes til bestått karakter", "De sju vanligste feilene kandidater gjør når de skal gjøre rede for en utviklingsteori på eksamen"],
      explanation: "Riktig svar er at klossene er sortert etter bruk: definisjon, teoretikere, hva teorien svarte på og synet på fattigdom bygger ledd i, kontekst og styrker og svakheter bygger ledd ii, og relevans bygger ledd iii. De er verken teoretikere, formkrav eller feil. Poenget er nettopp at samme kunnskap disponeres etter ledd.",
    },
    {
      question: "Hvordan fordeles de 105 skriveminuttene på Oppgave A, ifølge tidsmodellen i boka?",
      options: ["Skjevt: rundt 35 minutter på ledd i, 40 på ledd ii og 30 på ledd iii", "Likt: 35 minutter på hvert av de tre leddene, slik at ingen av dem blir nedprioritert underveis", "Med hovedvekt på ledd i, siden redegjørelsen er den delen som må være komplett for å bestå", "Etter behov, siden tidsbruk ikke kan planlegges på forhånd"],
      explanation: "Riktig svar er den skjeve fordelingen, og begrunnelsen er at redegjørelsen har et tak mens drøftingen og relevansleddet ikke har det. Å legge hovedvekten på ledd i er nettopp den feilen som gir et bredt svar på C-nivå. At tidsbruk ikke kan planlegges, motsies av at sjangeren er den mest forutsigbare i arkivet.",
    },
    {
      question: "Hva skal styre valget når oppgaven sier «velg to av teoriene»?",
      options: ["De to du både kan definere presist og forankre med et konkret eksempel", "De to du har lest mest om, siden kunnskapsmengde er det som gir bredde i besvarelsen din", "De to som står først i oppgaveteksten", "De to som er mest ulike, siden en stor kontrast alltid gir den mest interessante drøftingen"],
      explanation: "Riktig svar er at kriteriet er om du kan drøfte teorien, ikke hvor mye du kan om den — og drøfting krever et eksempel som viser både hva teorien forklarer og hvor den kommer til kort. Rekkefølgen i oppgaveteksten sier ingenting om hva sensor forventer. Stor kontrast kan være nyttig, men er ubrukelig hvis du ikke kan belegge den ene siden.",
    },
    {
      question: "Hva er den vanligste grunnen til at et kunnskapsrikt svar på Oppgave A stopper på C?",
      options: ["At ledd ii skrives som mer redegjørelse i stedet for som en drøfting", "At kandidaten bruker for få teoretikernavn og dermed ikke viser tilstrekkelig pensumdekning", "At besvarelsen er for kort", "At kandidaten skriver i jeg-form og dermed framstår som subjektiv i stedet for faglig nøytral"],
      explanation: "Riktig svar er at et korrekt, men refererende svar stopper på C uansett bredde — det er Akse 1, den viktigste vurderingsaksen. Flere navn gir mer redegjørelse og løser derfor ikke problemet. Korthet og jeg-form er ikke det som trekker; det er fraværet av veiing.",
    },
    {
      question: "Hvorfor er det å hoppe over ledd iii en så dyr feil?",
      options: ["Fordi oppgaven ikke er besvart før alle tre leddene er det, og fordi ledd iii er der A-marginen ligger", "Fordi ledd iii teller mer enn de to andre leddene til sammen i den samlede vurderingen av besvarelsen", "Fordi sensor leser konklusjonen først og danner seg et inntrykk av besvarelsen ut fra den alene", "Fordi ledd iii er det eneste leddet der du får lov til å bruke eksempler fra utenfor pensumlitteraturen"],
      explanation: "Riktig svar er at et manglende ledd er feil #4, altså å ikke svare på det oppgaven ber om, og at det selvstendige standpunktet i ledd iii er markøren for toppnivå. Leddene har ingen oppgitt intern vekting. Eksempler er ønsket i alle ledd, ikke bare i det siste.",
    },
    {
      question: "Hva er den dyreste innholdsfeilen i Oppgave A?",
      options: ["At teoriene beskrives feil, for eksempel ved at strukturalisme blandes med avhengighetsteori", "At besvarelsen mangler innledning og konklusjon, slik at strukturen blir vanskelig å følge for leseren", "At eksemplene er hentet fra land kandidaten ikke har lest om i pensumlitteraturen til emnet", "At kandidaten bruker for mye tid på ledd i og dermed får for lite tid igjen til de to siste leddene"],
      explanation: "Riktig svar er feil #3: å beskrive teoriene feil er en feil på innholdet, og den koster mer enn en tynn drøfting eller en svak struktur. Manglende disposisjon er feil #12 og trekker ned, men innholdsfeilen er alvorligere. Egne eksempler er tvert imot tillatt og premieres.",
    },
    {
      question: "Hva er den avgjørende distinksjonen mellom strukturalisme og avhengighetsteori?",
      options: ["Strukturalismen mener strukturen kan reformeres, mens avhengighetsteorien ser underutviklingen som systemisk", "Strukturalismen er latinamerikansk, mens avhengighetsteorien ble utviklet i Europa og Nord-Amerika", "Strukturalismen handler om handel, mens avhengighetsteorien handler om bistand og gjeldsforhold mellom land", "Strukturalismen er eldre enn moderniseringsteorien, mens avhengighetsteorien kom som et svar på den"],
      explanation: "Riktig svar er skillet reformerbar struktur mot systemisk avhengighet, og det er nettopp dette skillet som forsvinner når de to blandes sammen. Begge tradisjonene har latinamerikanske røtter, så geografien skiller dem ikke. Påstanden om at strukturalismen er eldre enn moderniseringsteorien er dessuten feil vei i tid.",
    },
    {
      question: "Hvordan bør moderniseringsteorien fremstilles i ledd i, hvis den skal være brukbar i ledd ii?",
      options: ["I sin egen sterkeste form først, med kritikken om etnosentrisme som en egen, etterfølgende posisjon", "Som en teori som er forlatt av faget, slik at drøftingen kan konsentrere seg om de nyere posisjonene", "Med hovedvekt på Rostows fem stadier, siden det er den delen av teorien sensor ser spesifikt etter", "Sammen med nyliberalismen, siden begge bygger på markedet som drivkraft for økonomisk utvikling"],
      explanation: "Riktig svar er at en karikert modernisering er ubrukelig som drøftingsmateriale — teorien må stå i sin sterkeste form før den prøves. «Å bli som Vesten» er kritikken av teorien, ikke teoriens egen selvforståelse. Å slå den sammen med nyliberalismen er feil #3, siden den ene er en stadieteori fra 1950- og 1960-tallet og den andre en politikkpakke fra 1980-tallet.",
    },
    {
      question: "Hva bør en innledning i Oppgave A gjøre?",
      options: ["Si hva teksten skal gjøre og hvordan den er lagt opp, på noen få linjer", "Definere alle kjernebegrepene som brukes senere, slik at hoveddelen kan gå rett på drøftingen uten opphold", "Gi en faghistorisk oversikt over utviklingsstudiene", "Presentere kandidatens standpunkt i sin helhet, slik at resten av teksten kan brukes til å belegge det"],
      explanation: "Riktig svar er at innledningen orienterer leseren om hva som kommer, kort. Definisjonene hører hjemme der begrepene brukes, i ledd i. En faghistorisk oversikt er ikke bestilt, og et fullt utfoldet standpunkt i innledningen er både unødvendig og stjeler plass fra ledd iii.",
    },
    {
      question: "Hva innebærer det at redegjørelsen «har et tak»?",
      options: ["Når teoriene er definert og teoretikerne navngitt, gir mer tekst i ledd i ingen ekstra uttelling", "Det finnes en øvre ordgrense for ledd i som er oppgitt i oppgaveteksten på hver enkelt eksamen", "Sensor slutter å lese ledd i etter et visst antall avsnitt og går videre til drøftingen i ledd ii", "Redegjørelsen kan aldri gi bedre karakter enn C, uansett hvor presis den er i sin gjennomføring"],
      explanation: "Riktig svar er at uttellingen flater ut når innholdskravene i ledd i er oppfylt, mens drøftingen og relevansleddet ikke har et slikt metningspunkt. Det finnes ingen ordgrense i oppgaveteksten. Påstanden om at redegjørelsen aldri kan gi bedre enn C ligger nær sannheten — et svar som BARE er redegjørelse, stopper der — men det er ikke det samme som at ledd i i seg selv setter et karaktertak.",
    },
    {
      question: "Hvordan skal et selvstendig standpunkt i ledd iii avgrenses for å være faglig og ikke politisk?",
      options: ["Det skal gjelde teorienes forklaringskraft, ikke hva et land bør gjøre i sin politikk", "Det skal alltid formuleres med forbehold, slik at ingen leser det som kandidatens personlige mening", "Det skal hentes fra en navngitt forfatter i pensum, slik at standpunktet kan belegges med en kilde", "Det skal begrenses til å konstatere at spørsmålet er sammensatt og at flere hensyn må veies mot hverandre"],
      explanation: "Riktig svar er skillet mellom å ta stilling til hva en teori forklarer, og å ta stilling til hva som bør gjøres — det første er faglig selvstendighet, det andre er politikk. Forbehold er et verktøy og ikke en plikt, og en skarp konklusjon er en fullgod toppform. Å hente standpunktet fra pensum er ikke å mene noe selv, og «det er sammensatt» uten grunner er feil #1 i ny drakt.",
    },
    {
      question: "Hva kjennetegner en A-disposisjon sammenlignet med en C-disposisjon?",
      options: ["Den lister argumenter og akser, ikke bare innhold og temaer som skal dekkes", "Den er lengre og mer detaljert, slik at selve skrivingen bare består i å fylle ut punktene", "Den settes opp etter at ledd i er ferdig skrevet, når kandidaten vet hvor mye tid som er igjen", "Den bruker pensumets egen kapittelinndeling som struktur, slik at ingenting sentralt blir utelatt"],
      explanation: "Riktig svar er at en A-disposisjon inneholder påstander som kan motsies — «begge forklarer strukturelt, men plasserer strukturen på hver sin side av landegrensen» — mens en C-disposisjon lister temaer. Detaljnivå er ikke i seg selv poenget. Å utsette disposisjonen til etter ledd i er nettopp det som gjør at ledd iii forsvinner.",
    },
    {
      question: "Hvorfor er det et poeng å skrive ledd i i kronologisk rekkefølge i den brede varianten av Oppgave A?",
      options: ["Fordi kontekstdelen i ledd ii da nesten skriver seg selv, siden koblingene allerede ligger i rekkefølgen", "Fordi sensor forventer at teoriene presenteres i den rekkefølgen de står i pensumlitteraturen", "Fordi de eldste teoriene er de viktigste, og de bør derfor få mest plass i redegjørelsen", "Fordi kronologi er et formkrav i sjangeren og teller som en del av disposisjonsvurderingen"],
      explanation: "Riktig svar er at kronologien er en disposisjonsbeslutning som betaler seg i neste ledd: når teoriene står i tidsrekkefølge, ligger konteksthistorien allerede der. Det er verken et formkrav eller en forventning om pensumrekkefølge. At de eldste er viktigst, stemmer heller ikke — alle fem skal dekkes jevnt.",
    },
    {
      question: "Hva sier strykregelen om Del II?",
      options: ["Manglende svar på ett kortsvar trekker vesentlig ned, og manglende svar på to gir F", "Manglende svar på ett kortsvar gir F, siden begge delene må bestås i samme semester", "Del II kan stå tom uten konsekvenser dersom Oppgave A er besvart på et høyt nivå", "Manglende svar i Del II kan tas igjen ved neste eksamen, siden delene vurderes hver for seg"],
      explanation: "Riktig svar er at ett manglende kortsvar trekker vesentlig ned mens to gir F. Ett manglende svar gir altså ikke stryk i seg selv, men kravet om at begge deler må bestås samme semester gjelder. At Del II skulle kunne stå tom, eller tas igjen senere, er begge gale.",
    },
  ],
  'utv1000-8-2': [
    {
      question: "Hvilke fire trinn bygger et godt tematisk kortsvar?",
      options: ["Presis definisjon, minst én distinksjon, minst én mekanisme mot utvikling, og ett konkret eksempel", "Innledning, redegjørelse, drøfting og konklusjon, altså den samme oppbygningen som i det obligatoriske langsvaret", "Definisjon, teoretiker, historisk kontekst og relevans i dag", "Påstand, motargument, moteksempel og landing, slik en påstandsdrøfting bygges opp"],
      explanation: "Riktig svar er de fire trinnene: definisjon, distinksjon, mekanisme og eksempel. Innledning, hoveddel og konklusjon er et disposisjonskrav som gjelder alle sjangre, ikke kortsvarets egen formel. Historisk kontekst og relevans i dag hører til leddene i det obligatoriske langsvaret.",
    },
    {
      question: "Hvor mange kortsvar skal du besvare i Del II, og hvorfor ikke flere?",
      options: ["Nøyaktig to av tre; et tredje gir ingen uttelling og tar tid fra langsvaret som teller seksti prosent", "Alle tre, siden sensor da kan velge de to beste besvarelsene og se bort fra den svakeste", "To av tre, men et tredje svar teller som en sikkerhetsmargin dersom ett av de to andre skulle svikte", "Det varierer fra år til år, og antallet står oppgitt i innledningen til hvert oppgavesett"],
      explanation: "Riktig svar er nøyaktig to, og begrunnelsen er tidsregnskapet: minuttene til et tredje svar er tatt rett fra Del I, som utløser stryk hvis den blir stående uferdig. Sensor plukker ikke ut de beste svarene. Antallet har ligget fast i alle fem settene i dagens form.",
    },
    {
      question: "Hva er den vanligste årsaken til at et kortsvar havner under C?",
      options: ["Manglende eller upresise definisjoner av kjernebegrepet", "At svaret er for kort til å dekke alle sidene ved temaet innenfor de førti minuttene som er avsatt", "At kandidaten bruker eksempler som ikke er nevnt i pensumlitteraturen til emnet", "At svaret mangler en formell konklusjon der hovedpoengene oppsummeres til slutt"],
      explanation: "Riktig svar er definisjonskravet, Akse 2: udefinerte kjernebegreper er den hyppigste årsaken til å havne under C, og det er feilkode #2. Korthet er ikke i seg selv et problem i en sjanger som er kort. Egne eksempler er tvert imot tillatt og premieres på Akse 4.",
    },
    {
      question: "Hva er distinksjonen mellom byråkratisk og politisk korrupsjon?",
      options: ["Byråkratisk korrupsjon er småskala i forvaltningen, mens politisk korrupsjon er storskala i toppen der reglene kjøpes", "Byråkratisk korrupsjon rammer bedrifter og næringsliv, mens politisk korrupsjon rammer vanlige innbyggere i det daglige", "Byråkratisk korrupsjon er ulovlig, mens politisk korrupsjon er lovlig så lenge den skjer i åpne prosesser", "Byråkratisk korrupsjon finnes i alle land, mens politisk korrupsjon bare forekommer i lavinntektsland"],
      explanation: "Riktig svar er skillet i skala og nivå: bestikkelser for tjenester som skulle vært gratis, mot at selve regelverket kjøpes. De to rammer ikke hver sin gruppe slik påstanden om bedrifter mot vanlige folk hevder. Og påstanden om at politisk korrupsjon bare forekommer i lavinntektsland knytter korrupsjon til bestemte land — den er faglig gal, siden korrupsjon er en mekanisme og ikke et kulturtrekk.",
    },
    {
      question: "Hva menes med vilkår (conditionality) i bistandssammenheng?",
      options: ["Krav om bestemte politiske omlegginger som følger med et lån eller en overføring", "Kravet om at mottakerlandet skal rapportere hvordan midlene er brukt etter at prosjektet er avsluttet", "Bestemmelsen om at bistand bare kan gis til land under en viss inntektsgrense per innbygger", "Avtalen om at bistanden skal betales tilbake dersom mottakerlandets økonomi bedrer seg vesentlig"],
      explanation: "Riktig svar er at vilkår er politiske krav knyttet til overføringen, og at strukturtilpasningsprogrammene er den sentrale historiske formen. Rapportering er noe annet enn vilkår om politikk. Verken inntektsgrenser eller tilbakebetalingsklausuler er det begrepet betegner.",
    },
    {
      question: "Hva er kjernen i konfliktfellen (the conflict trap)?",
      options: ["Konflikt gjør land fattigere, og fattigdom øker konfliktrisikoen — en ond, selvforsterkende sirkel", "Fattigdom fører til krig, og det er derfor de fattigste landene har flest væpnede konflikter", "Land som en gang har hatt borgerkrig, får aldri igjen et fungerende styresett eller en vekstbane", "Konflikter varer lenger i land med naturressurser, fordi ressursene finansierer partene i striden"],
      explanation: "Riktig svar er at retningen går begge veier, og at det er nettopp toveisheten som er poenget hos Collier. Å bare si at fattigdom gir krig, er feilkode #9 — halve mekanismen mangler. At et land aldri kan komme seg, er en langt sterkere påstand enn litteraturen gir grunnlag for, og ressursfinansiering er en beslektet, men annen mekanisme.",
    },
    {
      question: "Hva skiller grådighet fra urett (greed vs. grievance) som forklaringer på borgerkrig?",
      options: ["Grådighet peker på ressurstilgang og økonomiske motiver, urett på politisk urettferdighet og opplevd diskriminering", "Grådighet forklarer kriger mellom stater, mens urett forklarer væpnede konflikter innenfor ett land", "Grådighet er en forklaring på lederes handlinger, mens urett forklarer hvorfor vanlige folk slutter opp om opprøret", "Grådighet gjelder ressursrike land, mens urett gjelder land uten naturressurser av betydning"],
      explanation: "Riktig svar er at dette er to konkurrerende forklaringstyper på hvorfor opprør oppstår, med hvert sitt motiv i sentrum. Begge gjelder borgerkrig, så skillet mellom mellomstatlig og intern konflikt er feil. De to er heller ikke fordelt på ledere og folk, eller på land med og uten ressurser — de konkurrerer om å forklare de samme tilfellene.",
    },
    {
      question: "Hva er kravet i en sammenligningsoppgave (sjangerkode KOMP)?",
      options: ["To til fire eksplisitte sammenligningsakser der begge ledd behandles på hver akse, med belegg på begge", "En grundig redegjørelse for hvert av de to perspektivene, presentert etter hverandre i hver sin del av teksten", "En konklusjon om hvilket av de to perspektivene som er faglig riktig", "Minst tre pensumreferanser per perspektiv, slik at begge sider er like godt dokumentert"],
      explanation: "Riktig svar er at aksene er kravet: begge ledd må møtes på hvert punkt, ellers er det ikke en sammenligning. To referater etter hverandre er nettopp det sjangeren ikke ber om. Å rangere perspektivene som riktige og gale er heller ikke bestillingen, og det finnes ikke noe krav om et bestemt antall pensumreferanser.",
    },
    {
      question: "Hvordan skal en påstandsdrøfting (sjangerkode PÅ) behandles?",
      options: ["Påstanden skal prøves: vis hva som holder, hva som må nyanseres, og land begrunnet", "Påstanden skal bekreftes, siden den er hentet fra pensum og derfor uttrykker fagets syn", "Påstanden skal avvises, siden oppgaven ellers ikke ville bedt om en drøfting av den", "Påstanden skal omformuleres til et spørsmål før den besvares, slik at svaret blir mer nøytralt"],
      explanation: "Riktig svar er at påstanden skal prøves, ikke besvares med et standpunkt du hadde på forhånd. Verken mekanisk bekreftelse eller mekanisk avvisning er en drøfting — begge deler hopper over arbeidet. Å omformulere påstanden er unødvendig; det er nettopp den skarpe formen som gjør det tydelig hva som er omstridt.",
    },
    {
      question: "Hva kjennetegner en mekanisme, i motsetning til en påstand om sammenheng?",
      options: ["Den forklarer hvordan temaet virker inn, ikke bare at det gjør det", "Den er belagt med tall og statistikk, slik at sammenhengen kan dokumenteres kvantitativt", "Den er hentet fra en navngitt pensumkilde og kan derfor etterprøves av leseren i litteraturen", "Den gjelder alle land, mens en påstand om sammenheng bare gjelder det landet eksempelet er hentet fra"],
      explanation: "Riktig svar er at mekanismen viser veien fra årsak til virkning, ledd for ledd — «korrupsjon undergraver styringsevnen, som reduserer investeringene i helse og utdanning». Tall er ikke nødvendig, og dette faget bruker økonomi kvalitativt. Verken kildehenvisning eller generalitet er det som gjør en forklaring til en mekanisme.",
    },
    {
      question: "Hva er den presise definisjonen av bærekraftig utvikling?",
      options: ["Utvikling som møter dagens behov uten å undergrave framtidige generasjoners mulighet til å møte sine", "Utvikling som tar hensyn til miljøet og reduserer utslippene fra produksjon og transport", "Utvikling som kan fortsette i samme tempo over lang tid uten at ressursene tar slutt", "Utvikling som er forankret i FNs bærekraftsmål slik de ble vedtatt i 2015"],
      explanation: "Riktig svar er avveiningen mellom generasjoner — det er den som er begrepets kjerne. At bærekraftig utvikling betyr miljøvennlig, er en utbredt forenkling og en typisk feil #2. Verken tempo eller tilknytning til et bestemt målsett er definisjonen.",
    },
    {
      question: "Hva bestemmer om sårbarhet for klimaendringer blir stor eller liten?",
      options: ["Både eksponeringen for hendelsen og tilpasningskapasiteten, og den siste er ujevnt fordelt", "Utelukkende hvor kraftige klimaendringene blir i det aktuelle området over tid", "Landets geografiske plassering, siden nærhet til ekvator og kyst avgjør hvor hardt det rammes", "Hvor stor andel av befolkningen som lever av jordbruk og dermed er direkte utsatt for været"],
      explanation: "Riktig svar er at sårbarhet har to komponenter, og at det er den andre som forklarer hvorfor samme hendelse rammer ulikt. At bare hendelsens styrke teller, er nettopp den forklaringen begrepet er ment å erstatte. Geografi og næringsstruktur påvirker eksponeringen, men de forklarer ikke tilpasningskapasiteten.",
    },
    {
      question: "Hva er den sentrale presisjonsfeilen når HDI brukes i et kortsvar?",
      options: ["At indeksen brukes uten at det sies hva den måler, nemlig levealder, utdanning og inntekt", "At indeksen brukes til å rangere land, noe den ikke er konstruert for i det hele tatt", "At indeksen forveksles med bruttonasjonalprodukt, som måler noe helt annet enn menneskelig utvikling", "At indeksen presenteres som ny, selv om den ble utviklet allerede på 1970-tallet"],
      explanation: "Riktig svar er at et udefinert HDI er feil #2 i praksis: indeksen må forklares i ord, som en sammensetning av forventet levealder, utdanning og inntekt. Forvekslingen med bruttonasjonalprodukt ligger nær sannheten som feil, men den vanligste og mest straffede varianten er å bruke forkortelsen uten å pakke den ut. Kritikken av oversimplifisering hører også med.",
    },
    {
      question: "Hva innebærer feilkode #7 i kortsvarssammenheng?",
      options: ["At temaet behandles generelt, uten at det sies hvordan det griper inn i utviklingsprosesser", "At kandidaten svarer på tre kortsvar i stedet for de to som skal besvares i Del II", "At besvarelsen mangler en distinksjon som er sentral for temaet den behandler", "At eksemplene i besvarelsen er hentet fra land kandidaten ikke kjenner godt nok"],
      explanation: "Riktig svar er den manglende koblingen til utvikling: et faglig korrekt svar om korrupsjon eller handel som aldri sier hvordan temaet virker inn på utviklingsprosesser, har besvart en annen oppgave. Manglende distinksjon er feil #8, altså en annen kode. Antall besvarte oppgaver har ingen egen feilkode.",
    },
    {
      question: "Hvordan bør nyliberalismen fremstilles i en sammenligning med menneskelig utvikling?",
      options: ["I sin sterkeste form, med sin egen begrunnelse skrevet ut, ellers er sammenligningen verdiløs", "Som den svakere av de to, siden menneskelig utvikling er den nyere og mer omfattende tilnærmingen", "Kort, siden oppgaven først og fremst måler om kandidaten kjenner kapabilitetstilnærmingen", "Med vekt på de sosiale kostnadene ved strukturtilpasning, som er det mest omtalte i litteraturen"],
      explanation: "Riktig svar er at begge ledd må stå i sin sterkeste form — en stråmann gjør sammenligningen ubrukelig, og det er feil #11 i sammenligningsdrakt. Å rangere den ene som svakere på forhånd er å konkludere før drøftingen. De sosiale kostnadene hører med, men de er én side av saken, ikke hele fremstillingen.",
    },
    {
      question: "Hva skiller utviklingsstaten (the developmental state) fra planøkonomi?",
      options: ["Utviklingsstaten styrer markedet mot konkurransedyktighet, den erstatter det ikke", "Utviklingsstaten eier produksjonsmidlene, mens planøkonomien bare regulerer prisene i markedet", "Utviklingsstaten finnes bare i Øst-Asia, mens planøkonomi har vært prøvd i mange verdensdeler", "Utviklingsstaten er et nyliberalt begrep, mens planøkonomi hører til den marxistiske tradisjonen"],
      explanation: "Riktig svar er at utviklingsstaten verken er minimalstat eller planøkonomi: den styrer et marked som fortsatt finnes. Påstanden om at utviklingsstaten eier produksjonsmidlene mens planøkonomien bare regulerer priser, snur dessuten forholdet på hodet. Johnson, Amsden og Wade beskriver modellen med utgangspunkt i Japan, Sør-Korea og Taiwan, men det gjør den ikke geografisk avgrenset som begrep, og den er ikke et nyliberalt begrep — den er tvert imot en innvending mot markedsoppskriften.",
    },
  ],
  'utv1000-8-3': [
    {
      question: "Hva var de fire kravene i den casebaserte emneoppgaven?",
      options: ["Analyse med fagets begreper, navngitt pensumforankring, egne begrunnede anbefalinger og en klar disposisjon", "Presis definisjon, minst én distinksjon, minst én mekanisme og ett konkret eksempel fra pensumlitteraturen", "Redegjørelse, drøfting av historisk kontekst og argumentasjon for relevans i dag", "Innledning, litteraturgjennomgang, analyse og konklusjon, slik en vanlig fagoppgave er bygget opp"],
      explanation: "Riktig svar er de fire kravene sjangeren stilte, der anbefalingskravet er signaturen. Definisjon, distinksjon, mekanisme og eksempel er kortsvarets firetrinnsformel. Redegjørelse, kontekst og relevans er de tre leddene i det obligatoriske langsvaret.",
    },
    {
      question: "Hvorfor står den casebaserte emneoppgaven fortsatt i denne boka?",
      options: ["Fordi ordningen har skiftet tre ganger og kan skifte igjen, og fordi anbefalingskravet trener det tredje leddet i Oppgave A", "Fordi sjangeren fortsatt brukes som en frivillig innleveringsoppgave underveis i semesteret, uten at den teller på karakteren", "Fordi den utgjør en fjerdedel av karakteren i dagens vurderingsordning ved emnet", "Fordi sensorveiledningene fra de siste årene fortsatt vurderer besvarelser i denne sjangeren"],
      explanation: "Riktig svar er beredskapsbegrunnelsen pluss overføringsverdien til relevansleddet i langsvaret. Sjangeren er ikke lenger en del av vurderingen i noen form, verken som innlevering eller som karakterandel. Veiledningene fra dagens format beskriver Oppgave A og kortsvar.",
    },
    {
      question: "Hva skiller en case-analyse fra en case-beskrivelse?",
      options: ["Analysen sier hva tilfellet er et tilfelle av, og lar begrepet forklare funnene", "Analysen er grundigere og gjengir hendelsesforløpet med flere detaljer enn beskrivelsen gjør", "Analysen bygger på flere kilder, mens beskrivelsen kan klare seg med én enkelt framstilling", "Analysen inneholder en vurdering til slutt, mens beskrivelsen stopper ved fakta i saken"],
      explanation: "Riktig svar er koblingen til begrepet: analysen viser hva tilfellet er et eksempel på, og hvilken mekanisme som virker. Flere detaljer er tvert imot den vanligste måten å falle på Akse 1. En avsluttende vurdering uten begrepsarbeid underveis gjør heller ikke en beskrivelse til en analyse.",
    },
    {
      question: "Hva er prøven på om en anbefaling er begrunnet i analysen?",
      options: ["Om den ville falt bort dersom analysen hadde vist noe annet", "Om den er formulert med forbehold, slik at den ikke framstår som et politisk standpunkt", "Om den kan belegges med en henvisning til en navngitt kilde i pensumlitteraturen", "Om den står i konklusjonen og ikke i hoveddelen av den samlede teksten"],
      explanation: "Riktig svar er avhengighetsprøven: en anbefaling som ville stått uendret uansett funn, henger ikke sammen med teksten, og det er feil #11. Forbehold gjør ingen anbefaling begrunnet. Å hente den fra en kilde er nettopp å ikke mene noe selv.",
    },
    {
      question: "Hva ligger i kravet om navngitt pensumforankring?",
      options: ["At kilden gjør arbeid i teksten, slik at teksten ville sett annerledes ut uten den", "At alle sentrale påstander har en henvisning med forfatter, årstall og sidetall i parentes", "At litteraturlisten inneholder minst tre pensumtekster om det aktuelle temaet", "At kilden er den nyeste tilgjengelige framstillingen av temaet som behandles"],
      explanation: "Riktig svar er at forankring måles på virkning i teksten, ikke på at kilden er nevnt. Sidetall skal ikke brukes i det hele tatt i denne boka. Verken et minsteantall pensumtekster eller et krav om kildens alder gjelder i dette emnet.",
    },
    {
      question: "Hva er tommelfingerregelen for balansen mellom case og teori?",
      options: ["Hver gang caset beskrives, skal beskrivelsen tjene et begrep som allerede er innført", "Halvparten av teksten skal være teori og halvparten case, slik at begge deler blir dekket", "Teorien presenteres samlet først, og caset behandles deretter i en egen del av teksten", "Caset skal fylle mest plass, siden det er caset oppgaven ber om å få analysert"],
      explanation: "Riktig svar er at beskrivelsen alltid skal tjene et begrep — det er kjennetegnet på at teori og case faktisk møtes. En fast prosentfordeling sier ingenting om møtet. Å behandle teorien først og caset etterpå gir to tekster limt sammen, som er nettopp problemet regelen skal hindre.",
    },
    {
      question: "Hva er et kontrastkart?",
      options: ["Et ferdig sett sammenligningsakser for et fast begrepspar, laget på forhånd og pugget som ett kort", "En oversikt over hvilke temaer som har vært på eksamen i hvilke semestre, med antall forekomster", "En figur som viser hvordan de fem utviklingsteoriene henger sammen historisk", "En liste over de tolv typiske feilene med tilhørende diagnose og fiks"],
      explanation: "Riktig svar er de forhåndslagde aksene: i en sammenligningsoppgave er det aksene som tar lengst tid å finne under press. Temaoversikter og teorikart er andre hjelpemidler. Feilregisteret med diagnose og fiks er feilvaksinen i kap. 8.4.",
    },
    {
      question: "Hvilken akse skiller modernisering fra avhengighet skarpest?",
      options: ["Hvor årsaken til fattigdom plasseres: innad i landet eller i relasjonen mellom land", "Hvor gammel teorien er, siden den ene ble formulert et par tiår før den andre", "Hvor mange teoretikere som knyttes til den, og hvor godt kjent de er utenfor faget", "Hvilken verdensdel teorien ble utviklet i, siden begge tradisjonene har klare geografiske røtter"],
      explanation: "Riktig svar er årsaksplasseringen, som styrer alt annet: er problemet innenfor landet, følger reform der; er det i relasjonen, følger brudd eller omforming av relasjonen. Alder og antall teoretikere er ikke analytiske akser. Geografien er interessant, men den skiller ikke teoriene faglig.",
    },
    {
      question: "Hva er den sterkeste innvendingen mot den statsdrevne utviklingsmodellen?",
      options: ["Den forutsetter en stat med kapasitet og uten fangenskap fra særinteresser, og 1997-finanskrisen ble den store prøven", "Den er aldri blitt prøvd i praksis, og finnes derfor bare som en teoretisk mulighet i litteraturen", "Den forutsetter at markedet avskaffes, noe ingen land har vært villige til å gjennomføre", "Den er utviklet med utgangspunkt i bare ett enkelt land og lar seg derfor ikke generalisere til andre regioner og perioder"],
      explanation: "Riktig svar er kapasitetsforutsetningen, med finanskrisen i 1997 som den sentrale innvendingen. Modellen er tvert imot prøvd, og Johnson, Amsden og Wade beskriver den i Japan, Sør-Korea og Taiwan — altså tre land, ikke ett. At markedet skulle avskaffes, er å forveksle utviklingsstaten med planøkonomi.",
    },
    {
      question: "Hva er en kald bank i denne boka?",
      options: ["Oppgaver uten hint, der du selv må finne ut hvilket begrep og hvilken distinksjon oppgaven bestiller", "En samling oppgaver som er hentet direkte fra tidligere eksamenssett ved emnet", "Oppgaver som skal løses uten pensumlitteratur tilgjengelig, slik det er på skoleeksamen", "En liste over begreper du bør kunne definere raskt, uten forklarende kontekst rundt"],
      explanation: "Riktig svar er fraværet av hint: ellers gir første hint deg inngangen, og på eksamen finnes ingen. Alle oppgaver i boka er nyskrevne, så ingen av dem er hentet fra sett. At du ikke har pensum tilgjengelig, gjelder alle oppgavene i boka, ikke bare denne banken.",
    },
    {
      question: "Hvordan skal Fergusons analyse av utviklingsapparatet gjengis presist?",
      options: ["Som en analyse av virkninger: politiske spørsmål om makt og fordeling omformes til tekniske problemer", "Som en dokumentasjon av at bistand ikke virker og derfor bør legges om eller avvikles", "Som en påvisning av at utviklingsprosjekter systematisk overskrider budsjettene sine", "Som en kritikk av at lokal kunnskap ikke blir tatt hensyn til når prosjekter utformes"],
      explanation: "Riktig svar er at «anti-politikk-maskinen» beskriver hva apparatet gjør med spørsmålene, og at det samtidig utvider statsapparatet — det er en analyse av virkninger, ikke en nyttedom. Å lese den som en dom over bistandens nytte er en feiltilskrivning. Poenget om lokal kunnskap ligger nær, men det er ikke det begrepet betegner.",
    },
    {
      question: "Hva er feilkode #12, og hvordan slår den ut i en casetekst?",
      options: ["Uklar disposisjon: teksten følger hendelsesforløpet i stedet for argumentet", "Manglende pensumkilde: temaet behandles uten den faglitteraturen som eier det", "Ingen selvstendige anbefalinger: teksten gjengir hva pensum mener og stopper der", "Manglende eksempler: analysen holdes abstrakt uten et eneste konkret tilfelle"],
      explanation: "Riktig svar er disposisjonsfeilen, og i en casetekst tar den nesten alltid form av kronologi: teksten forteller hva som skjedde, i den rekkefølgen det skjedde. Manglende kilde er #10 og manglende anbefalinger er #11 — to andre koder som ofte opptrer sammen med denne. Manglende eksempler er #6.",
    },
    {
      question: "Hva gjelder om referansestil og sidetall i denne boka?",
      options: ["Ingen sidetall skal brukes, og på dagens skoleeksamen kreves ingen referansestil", "APA-stil brukes gjennomgående, siden det var kravet i den casebaserte emneoppgaven", "Sidetall kreves ved direkte gjengivelse, men ikke ved parafrase av en kilde", "Referanser oppgis bare i modellbesvarelsene, ikke i oppgaver og fasiter"],
      explanation: "Riktig svar er at sidetall ikke brukes noe sted, blant annet fordi pensumutgavene skiftes ut, og at eksamen er en fire timers skoleeksamen der pensumreferanser er en styrke uten å være et formkrav. APA-kravet hørte til emneoppgaven fra 2015 til 2019. Teoretiker og teori navngis, aldri med sidehenvisning.",
    },
    {
      question: "Hva kjennetegner en behandlet innvending, i motsetning til en nevnt innvending?",
      options: ["Teksten svarer på den, og innvendingen er en som faktisk kunne velte konklusjonen", "Innvendingen står i et eget avsnitt med egen overskrift midt i hoveddelen av selve teksten", "Innvendingen er hentet fra en annen kilde enn den som bærer hovedargumentet", "Innvendingen presenteres først og avvises deretter kort med en enkelt setning"],
      explanation: "Riktig svar er at teksten må svare, og at innvendingen må være reell — en du må arbeide for å komme forbi. Plassering og overskrift avgjør ingenting. Å avvise den med én setning er nettopp å nevne den uten å behandle den.",
    },
  ],
  'utv1000-8-4': [
    {
      question: "Hvorfor er feil #1 den hyppigste grunnen til at et svar stopper på C?",
      options: ["Fordi et korrekt og bredt svar som ikke veier noe mot noe, mangler den ferdigheten Akse 1 måler", "Fordi kandidater som gjengir mye, gjerne bruker opp tiden og ikke rekker de siste leddene i oppgaven", "Fordi sensor har begrenset tid og derfor premierer korte svar framfor lange gjengivelser av pensum", "Fordi gjengivelse ofte inneholder feil, siden det er lettere å huske galt enn å resonnere riktig"],
      explanation: "Riktig svar er at drøfting er den viktigste vurderingsaksen, og at et refererende svar mangler den uansett bredde. Tidsbruk og svarlengde avgjør ingenting i seg selv.",
    },
    {
      question: "Hva er kjennetegnet på at en tekst faktisk drøfter?",
      options: ["At den inneholder setninger som kunne vært motsagt, ikke bare setninger som gjengir hva noen har ment", "At den bruker flere pensumkilder og navngir minst to teoretikere per posisjon som behandles", "At den er lengre i drøftingsdelen enn i redegjørelsen, siden drøftingen veier tyngst i vurderingen", "At den er skrevet i jeg-form, slik at det går tydelig fram at vurderingene er kandidatens egne"],
      explanation: "Riktig svar er at et argument kan bestrides, mens en gjengivelse bare kan være riktig eller gal. Flere kilder gir mer redegjørelse, lengde avgjør ingenting, og en tekst i jeg-form kan være like refererende som en uten.",
    },
    {
      question: "Hvorfor er en omtrentlig definisjon ikke «halvveis til» en presis?",
      options: ["Fordi omtrentligheten er selve feilen — den plasserer svaret under C selv når resten er godt", "Fordi sensor ikke får lov til å gi delvis uttelling for definisjoner som ikke er fullstendige", "Fordi en omtrentlig definisjon som regel også inneholder en faktafeil om begrepets opphav", "Fordi definisjoner alltid skal gjengis ordrett fra pensum for å regnes som korrekte"],
      explanation: "Riktig svar er at upresise definisjoner er den hyppigste årsaken til å havne under C. Merk at kravet ikke er ordrett gjengivelse — det er at innholdet er presist og at distinksjonen mot nabobegrepet er med.",
    },
    {
      question: "Hva er de to klassiske forvekslingene under feil #3?",
      options: ["Strukturalisme blandet med avhengighetsteori, og modernisering ikke skilt fra nyliberalisme", "Post-utvikling blandet med avhengighetsteori, og menneskelig utvikling ikke skilt fra grunnbehov", "Bilateral blandet med multilateral bistand, og byråkratisk ikke skilt fra politisk korrupsjon", "Konfliktfellen blandet med ressursforbannelsen, og greed ikke skilt fra grievance"],
      explanation: "Riktig svar er de to teoriforvekslingene. De andre alternativene er reelle distinksjoner i faget, men de hører under feil #8 om glemte distinksjoner, ikke under feilbeskrevne teorier.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom strukturalisme og avhengighetsteori?",
      options: ["Strukturalismen mener strukturen kan reformeres; avhengighetsteorien mener underutviklingen er systemisk", "Strukturalismen gjelder Latin-Amerika, mens avhengighetsteorien er utviklet med utgangspunkt i Afrika sør for Sahara", "Strukturalismen er en økonomisk teori, mens avhengighetsteorien er en politisk teori om maktforhold mellom stater", "Strukturalismen ble utviklet på 1980-tallet som en reaksjon på avhengighetsteoriens manglende politikkanbefalinger"],
      explanation: "Riktig svar er skillet reformerbar mot systemisk. Begge tradisjonene har røtter i Latin-Amerika, så geografien skiller dem ikke — og påstanden om at strukturalismen kom på 1980-tallet som en reaksjon på avhengighetsteorien, snur kronologien på hodet.",
    },
    {
      question: "Hvordan viser feil #4 seg oftest i Oppgave A?",
      options: ["Ved at ledd iii mangler eller bare består av en setning om at begge teoriene har noe for seg", "Ved at kandidaten svarer på tre kortsvar i stedet for to, slik at tiden ikke strekker til", "Ved at redegjørelsen inneholder teorier som ikke var nevnt i oppgaveteksten, slik at leddet blir bredere enn bestilt", "Ved at kandidaten bruker eksempler fra andre fag enn utviklingsstudier i sin argumentasjon"],
      explanation: "Riktig svar er det manglende relevansleddet. Det er der A-marginen ligger, og det er det leddet som oftest forsvinner fordi tiden gikk med til redegjørelsen.",
    },
    {
      question: "Hva er motgiften mot feil #5, og hva er den ikke?",
      options: ["Å si hva som teller som utvikling i akkurat dette temaet og hvem som har bestemt det — ikke å legge til «dette er verdiladet» til slutt", "Å innlede besvarelsen med en drøfting av utviklingsbegrepet før man går løs på selve oppgaven", "Å unngå ordet «utvikling» og bruke mer nøytrale betegnelser som «endring» og «vekst» i stedet", "Å presentere minst tre ulike definisjoner av utvikling og la leseren velge mellom dem"],
      explanation: "Riktig svar er det konkrete, temanære løftet. Et påklistret «dette er også verdiladet» uten innhold er feil #4 i ny drakt — å ikke svare på oppgaven — og ikke et løft.",
    },
    {
      question: "Hva er forskjellen mellom feil #6 og feil #7?",
      options: ["#6 er at belegget mangler; #7 er at koblingen til utvikling mangler", "#6 gjelder Oppgave A, mens #7 bare gjelder tematiske kortsvar i Del II", "#6 gjelder teoretikere, mens #7 gjelder land og case som brukes som eksempler", "#6 er en formfeil, mens #7 er en innholdsfeil som trekker vesentlig mer ned"],
      explanation: "Riktig svar er skillet mellom belegg og relevans. Et svar kan ha rikelig med eksempler og likevel begå #7, hvis eksemplene aldri kobles til et utviklingsutfall som avling, skolegang, inntekt eller institusjoner.",
    },
    {
      question: "Når er et eksempel konkret nok?",
      options: ["Når tre ting står der: hva og hvor, hvilket begrep det belegger, og hva eksempelet faktisk viser", "Når det er hentet fra pensumlitteraturen og kan knyttes til en navngitt forfatter og et publiseringsår", "Når det gjelder et land kandidaten kan noe om fra før, slik at detaljene blir riktige", "Når det er nyere enn pensumlitteraturen, siden oppdaterte eksempler premieres særskilt"],
      explanation: "Riktig svar er de tre kravene. «Et eksempel fra det globale sør» er ikke et eksempel. Egne og nyere eksempler er lov og premieres, men nyhet er ikke i seg selv kravet.",
    },
    {
      question: "Hvilke fire distinksjoner nevnes oftest under feil #8?",
      options: ["Byråkratisk mot politisk korrupsjon, bilateral mot multilateral bistand, bistand med mot uten vilkår, og marked mot stat", "Mål mot prosess, teori mot empiri, nasjonalt mot globalt nivå, og kortsiktig mot langsiktig virkning", "Vekst mot fordeling, stat mot sivilsamfunn, bistand mot handel, og tilpasning mot utslippsreduksjon", "Kjerne mot periferi, metropol mot satellitt, sentrum mot utkant, og nord mot sør i verdensøkonomien"],
      explanation: "Riktig svar er de fire distinksjonene veiledningene peker på. De andre alternativene inneholder reelle faglige skiller, men det er disse fire som går igjen som det sensor savner.",
    },
    {
      question: "Hva mangler når feil #9 begås?",
      options: ["Tilbakekoblingen — at virkningen også virker tilbake på årsaken, slik at mekanismen blir selvforsterkende", "Den empiriske dokumentasjonen for at det finnes en sammenheng mellom de to størrelsene i det hele tatt", "Navnet på teoretikeren som formulerte mekanismen, som er et krav i alle konflikt- og klimaoppgaver", "Sammenligningen med andre land der den samme mekanismen ikke har slått inn på samme måte"],
      explanation: "Riktig svar er tilbakekoblingen. Uten den er det en kjede og ikke en felle, og det er nettopp selvforsterkningen som forklarer hvorfor land som først havner i sirkelen, blir stående der.",
    },
    {
      question: "Hva er de to formene feil #11 opptrer i?",
      options: ["Casetekst uten egen anbefaling, og sammenligning der bare det ene leddet faktisk behandles", "Manglende navngitt kilde i casen, og manglende definisjon av kjernebegrepet i det tematiske kortsvaret", "Konklusjon uten innledning, og innledning som lover noe teksten ikke leverer", "Eksempler uten forankring i teori, og teori uten forankring i eksempler"],
      explanation: "Riktig svar er de to formene. De henger sammen: i begge tilfeller mangler den ene halvparten av det sjangeren krever — enten anbefalingen eller den andre posisjonen.",
    },
    {
      question: "Hvorfor trekker feil #12 ned selv når innholdet er riktig?",
      options: ["Fordi leseren ikke ser hva som er argument og hva som er bakgrunn, når rammen mangler", "Fordi sensor er pålagt å trekke for formelle mangler uavhengig av det faglige innholdet", "Fordi en uryddig tekst som regel også inneholder faktafeil som ellers ville blitt oppdaget", "Fordi disposisjonen teller som en egen del av vurderingen med sin egen vekt i karakteren"],
      explanation: "Riktig svar er at strukturen bærer lesningen. En oppramsende tekst kan ha alt innholdet og likevel trekke mot D eller E, fordi det ikke går fram hva teksten faktisk gjør.",
    },
    {
      question: "Hva kjennetegner en god varsellampe?",
      options: ["At den kan sjekkes uten skjønn — «står kjernebegrepet udefinert?» framfor «er svaret godt nok?»", "At den peker på den vurderingsaksen feilen bryter med, slik at kandidaten vet nøyaktig hva som måles", "At den gjelder flere feil samtidig, slik at én gjennomlesing dekker hele feilregisteret", "At den er formulert som en regel for hva kandidaten skal gjøre i den ferdige teksten"],
      explanation: "Riktig svar er etterprøvbarheten. En varsellampe er ikke det samme som en regel: regelen sier hva du skal gjøre, varsellampen hvordan du oppdager at du ikke har gjort det.",
    },
    {
      question: "Hvorfor er «å legge til mer tekst» sjelden en fiks?",
      options: ["Fordi en passasje som mangler drøfting, bare blir et lengre referat av å bli lengre", "Fordi lengre besvarelser systematisk vurderes strengere enn korte i denne typen fag", "Fordi tiden på eksamen er knapp, og ekstra tekst går på bekostning av de andre leddene", "Fordi sensor leser bare de første avsnittene av hvert ledd når besvarelsen er lang"],
      explanation: "Riktig svar er at fiksen må treffe diagnosen. Den samme svake passasjen kan mangle drøfting, definisjon eller eksempel, og de tre krever helt ulike grep — derfor kommer diagnosen før omskrivingen.",
    },
    {
      question: "Hva er forholdet mellom feilkodene og de fire vurderingsaksene?",
      options: ["Feilkodene beskriver hva som er galt i teksten; aksene beskriver hva sensor måler", "Feilkodene er en offisiell liste fra veiledningene, mens aksene er bokas egen sortering", "Hver akse svarer til nøyaktig tre feilkoder, slik at de tolv fordeler seg jevnt på de fire", "Feilkodene gjelder Oppgave A, mens aksene gjelder kortsvarene i Del II"],
      explanation: "Riktig svar er skillet mellom tekstens feil og sensors målestokk. Merk at det er kodene som er bokas egen sortering — aksene er destillert fra veiledningenes egne beskrivelser.",
    },
    {
      question: "Hvor mange feilkoder finnes i denne bokas register?",
      options: ["Nøyaktig tolv, og registeret er lukket — det finnes ingen kode #13", "Tolv i utgangspunktet, men flere kan legges til når nye oppgavesett publiseres", "Fire, én for hver vurderingsakse, med underpunkter for de enkelte feiltypene", "Ni, én for hver publiserte sensorveiledning i perioden fra 2017 til 2025"],
      explanation: "Riktig svar er tolv i et lukket register, der hver kode betyr det samme hver gang. Antallet sensorveiledninger er ni, men det er et helt annet tall enn antallet feilkoder.",
    },
    {
      question: "Bør feilkodene skrives inn i selve eksamensbesvarelsen?",
      options: ["Nei — kodene er bokas arbeidsverktøy, ikke et felles språk med sensor; skriv innholdet i stedet", "Ja, siden de viser at kandidaten kjenner de vanligste feilene i faget og bevisst har unngått dem", "Ja, men bare i innledningen, som en oversikt over hvilke feller besvarelsen skal unngå", "Nei, med mindre oppgaveteksten selv bruker kodene, noe den gjør i enkelte av settene"],
      explanation: "Riktig svar er at kodene er interne. Skriv «her mangler distinksjonen mellom byråkratisk og politisk korrupsjon», ikke «#8» — sensor skal lese faget ditt, ikke bokas nummerering.",
    },
    {
      question: "Hva er det realistiske rådet for de siste ti minuttene av eksamen?",
      options: ["Velg de tre varsellampene som treffer dine egne mønstre, og sjekk dem", "Gå gjennom alle tolv feilene systematisk i den rekkefølgen de står i registeret", "Les hele besvarelsen høyt for deg selv for å finne setninger som ikke henger sammen", "Legg til et ekstra avsnitt i det leddet som er kortest, siden det ofte er det svakeste"],
      explanation: "Riktig svar er den avgrensede kontrollen. Ti minutter rekker ikke til tolv gjennomganger, og et ekstra avsnitt i det korteste leddet reparerer ikke noe hvis diagnosen ikke er stilt.",
    },
    {
      question: "Hvorfor er feilvaksinen det billigste karakterløftet i boka?",
      options: ["Fordi de fleste av feilene gjøres av kandidater som kan stoffet, og skyldes disponering og ikke kunnskapsmangel", "Fordi feilene er så vanlige at sensor senker terskelen for besvarelser som unngår dem", "Fordi de tolv feilene dekker alt som kan gå galt, slik at ingenting annet trenger øving", "Fordi det tar kortere tid å lese dette kapitlet enn å lese noen av de andre kapitlene i boka"],
      explanation: "Riktig svar er at feilene skyldes disponering av kunnskap man allerede har. Å lære noe nytt tar timer; å slutte å gjøre en feil du kan unngå, tar minutter.",
    },
  ],
  'utv1000-8-5': [
    {
      question: "Hva er hovedforskjellen mellom C-besvarelsen og A-besvarelsen i dette kapitlet?",
      options: ["At C har kunnskapen, men ikke setningene som forklarer sammenhenger og som kunne vært motsagt", "At C er vesentlig kortere og dekker færre av teoriene enn A-besvarelsen gjør i sin redegjørelse", "At C inneholder faktafeil i redegjørelsen som A-besvarelsen har unngått gjennom presise definisjoner", "At C har utelatt ett av de tre leddene oppgaven ba om, slik at besvarelsen er ufullstendig"],
      explanation: "Riktig svar er at forskjellen er anvendelse, ikke kunnskap. C-besvarelsen er faktisk like lang og har på enkelte punkter mer stoff enn A — den bruker det bare ikke til noe.",
    },
    {
      question: "Hva ba ledd ii om i denne oppgaven, og hva leverte C-besvarelsen?",
      options: ["Ledd ii ba om en drøfting av hvordan konteksten formet teoriene; C leverte en korrekt kronologi", "Ledd ii ba om en sammenligning av teoriene; C leverte tre atskilte redegjørelser etter hverandre", "Ledd ii ba om styrker og svakheter; C leverte bare svakhetene og utelot styrkene helt", "Ledd ii ba om eksempler fra minst to land; C leverte bare generelle henvisninger til regioner"],
      explanation: "Riktig svar er skillet mellom kronologi og kobling. Å tidfeste presist er ikke å drøfte — drøftingen krever setninger som sier hva konteksten gjorde med teorien.",
    },
    {
      question: "Hvilke tre grep skiller midtnivå-besvarelsen (B) fra A-besvarelsen?",
      options: ["Bytteforhold ikke definert, avhengighetsteoriens kontekst ikke koblet, og Øst-Asia-innvendingen nevnt uten å behandles", "Manglende teoretikernavn, feil rekkefølge på teoriene, og en innledning som ikke røper landingen", "Manglende konklusjon, for kort redegjørelse i ledd i, og ingen henvisning til den kalde krigen", "Faktafeil om Rostows stadier, sammenblanding av Frank og Amin, og manglende definisjon av ISI"],
      explanation: "Riktig svar er de tre grepene margnotatene peker på. Rekkefølgen på teoriene og en innledning uten landing er småting; faktafeil ville plassert besvarelsen lavere enn B.",
    },
    {
      question: "Hva er det avgjørende skillet mellom strukturalisme og avhengighetsteori i modellbesvarelsen?",
      options: ["At strukturalismen ser strukturen som reformerbar, mens avhengighetsteorien ser underutviklingen som systemisk", "At strukturalismen kom fra Latin-Amerika, mens avhengighetsteorien ble utviklet i Europa og Nord-Amerika", "At strukturalismen handler om handel, mens avhengighetsteorien handler om politisk makt mellom stater", "At strukturalismen er en økonomisk analyse, mens avhengighetsteorien er en normativ posisjon uten empirisk grunnlag"],
      explanation: "Riktig svar er skillet reformerbar mot systemisk. Begge tradisjonene har røtter i Latin-Amerika, og begge er analyser med empiriske ambisjoner — geografien og sjangeren skiller dem ikke.",
    },
    {
      question: "Hvorfor holder ikke E-besvarelsens definisjon av moderniseringsteorien?",
      options: ["Fordi «å bli som Vesten» er kritikken av teorien, ikke teoriens egen selvforståelse", "Fordi teorien ikke handler om industri og teknologi, men utelukkende om politiske institusjoner", "Fordi Rostow aldri beskrev fem stadier, men fire, og rekkefølgen er en annen enn den som oppgis", "Fordi moderniseringsteorien ikke mener at fattige land ligger etter, men at de har valgt en annen vei"],
      explanation: "Riktig svar er at kritikken er byttet ut med teorien. Teorien forstår seg selv som en beskrivelse av en universell prosess, og en besvarelse som starter i kritikken, har hoppet over redegjørelsen.",
    },
    {
      question: "Hva gjør A-besvarelsen med Øst-Asia-innvendingen mot sitt eget standpunkt?",
      options: ["Den behandler den og svarer med Wallersteins semi-periferi, samtidig som den sier hva svaret koster", "Den avviser den ved å vise at Sør-Korea og Taiwan aldri var i periferien i Wallersteins forstand", "Den nevner den i en bisetning og går videre, siden innvendinger hører til drøftingsleddet og ikke relevansleddet", "Den lar den stå ubesvart, men presiserer at spørsmålet ligger utenfor det oppgaven ber om"],
      explanation: "Riktig svar er at innvendingen behandles og at prisen på svaret sies høyt. Det er Akse 3 — kritisk selvstendighet — og det er den markøren som oftest skiller B fra A.",
    },
    {
      question: "Hva menes med at en oppgraderingsmeny ikke er en mangelliste?",
      options: ["At den sier hva du kan skrive i stedet, og hvor mange minutter grepet koster", "At den bare inneholder de grepene som er nødvendige for å bestå, og utelater resten", "At den er sortert etter vurderingsakse i stedet for etter feilkode", "At den beskriver hva en bedre besvarelse ville gjort, uten å skrive det ut"],
      explanation: "Riktig svar er at menyen er operativ og tidsatt. Å beskrive hva en bedre besvarelse ville gjort uten å skrive det ut, er en regibemerkning og ikke veiledning — drøftelsen skal skrives ut.",
    },
    {
      question: "Hvorfor er «begge teoriene er relevante på hver sin måte» en svak konklusjon?",
      options: ["Fordi setningen kunne stått i en hvilken som helst besvarelse om hvilke som helst to teorier", "Fordi konklusjoner alltid skal være skarpe, og enhver avveining trekker ned i denne sjangeren", "Fordi den motsier redegjørelsen, der teoriene ble fremstilt som uforenlige med hverandre", "Fordi den mangler henvisning til pensumlitteraturen, som er et krav i konklusjonen i Del I"],
      explanation: "Riktig svar er at setningen er innholdstom, ikke gal. En avveiende konklusjon kan være fullgod — men bare hvis avveiningen begrunnes; «det er sammensatt» uten grunner er gjengivelse i ny drakt.",
    },
    {
      question: "Hva sier kontrakten om forbehold i en A-besvarelses konklusjon?",
      options: ["At forbehold er et verktøy og ikke obligatorisk garnityr — en skarp, eksempelforankret konklusjon er en fullgod A-form", "At enhver konklusjon må inneholde minst ett forbehold for å regnes som faglig forsvarlig", "At forbehold hører hjemme i drøftingsleddet og aldri bør stå i konklusjonen i en besvarelse", "At forbehold trekker ned fordi de signaliserer at kandidaten ikke tør å ta standpunkt"],
      explanation: "Riktig svar er at forbehold er et verktøy. De skal brukes der de gjør argumentet mer presist — ikke som en rituell avslutning, og heller ikke unngås av prinsipp.",
    },
    {
      question: "Hva gjelder standpunktet i A-besvarelsens konklusjon?",
      options: ["Teorienes forklaringskraft — ikke hva noe land bør gjøre", "Hvilken utviklingspolitikk som ville tjent lav- og mellominntektsland best i dag", "Hvilken av teoriene som var mest innflytelsesrik i den perioden de ble utviklet", "Hvorvidt utviklingsbegrepet i det hele tatt kan brukes på en meningsfull måte"],
      explanation: "Riktig svar er forklaringskraften. Det er skillet som gjør at man kan være selvstendig uten å bli politisk, og det er verdt å gjøre eksplisitt i teksten.",
    },
    {
      question: "Hva er den vanligste grunnen til at relevansleddet blir kortere enn de to andre?",
      options: ["At tiden gikk med til redegjørelsen, som har et tak, mens relevansleddet ikke har det", "At relevansleddet krever mer pensumkunnskap enn de fleste kandidatene rekker å tilegne seg i løpet av semesteret", "At oppgaveteksten som regel formulerer det siste leddet kortere enn de to første", "At kandidatene tror leddet teller mindre, siden det står sist i oppgaven"],
      explanation: "Riktig svar er tidsfordelingen. Redegjørelsen er ferdig når teoriene er definert og teoretikerne navngitt; drøftingen og relevansleddet har ikke et slikt tak, og det er der hver ekstra gjennomtenkt setning betaler.",
    },
    {
      question: "Hva betyr det at en modellbesvarelse ikke er en fasit?",
      options: ["At oppgaven kan besvares godt på flere måter, og at et annet teorivalg i ledd iii kan gi like høy uttelling", "At besvarelsen inneholder bevisste svakheter som leseren skal finne og rette opp selv", "At den bare dekker deler av oppgaven, og at resten må fylles ut med pensumlitteraturen", "At vurderingen av en slik besvarelse vil variere sterkt mellom ulike sensorer, og at nivået derfor er lite pålitelig"],
      explanation: "Riktig svar er at flere veier fører fram. UiO publiserer verken fasit eller løsningsforslag for emnet, og modellbesvarelsene her er skrevet av oss ut fra pensum og veiledningenes nivåbeskrivelser.",
    },
    {
      question: "Hva er det ene grepet som ville flyttet E-besvarelsen tydeligst oppover?",
      options: ["Å skrive setningen om at strukturalismen ser strukturen som reformerbar og avhengighetsteorien som systemisk", "Å utvide redegjørelsen om Rostows fem stadier slik at alle stadiene navngis i riktig rekkefølge", "Å legge til en innledning som sier hva besvarelsen skal gjøre og hvordan den er lagt opp", "Å bytte ut ledd iii med en lengre drøfting av kritikken mot moderniseringsteorien"],
      explanation: "Riktig svar er å rette opp sammenblandingen av de to teoriene. Det er en innholdsfeil, og innholdsfeil koster mer enn manglende disposisjon eller en kort redegjørelse.",
    },
    {
      question: "Hvordan beskrives C som karakter i denne boka?",
      options: ["Som en god og vanlig karakter, særlig i et innføringsemne der mange er i sitt første semester", "Som et signal om at kandidaten bør ta emnet på nytt før videre studier i faget", "Som den karakteren de fleste ender på når de har lest lite og skrevet raskt på selve eksamensdagen", "Som et nivå der kunnskapen er mangelfull og de sentrale begrepene ikke er forstått"],
      explanation: "Riktig svar er at C er god og vanlig. Beskrivelsen av mangelfull begrepsforståelse gjelder nivåene under C, og C-besvarelsen i dette kapitlet viser tvert imot solid kunnskap.",
    },
  ],
  'utv1000-8-6': [
    {
      question: "Hva skiller C-besvarelsen fra A-besvarelsen i kortsvaret om korrupsjon?",
      options: ["At C nevner distinksjonen mellom de to korrupsjonsformene, men behandler dem deretter som én ting", "At C mangler en definisjon av korrupsjon og derfor ikke innfrir grunnkravet i vurderingen", "At C er vesentlig kortere og bare rekker å behandle den ene av de to formene for korrupsjon", "At C inneholder en faktafeil om hvordan byråkratisk korrupsjon virker inn på offentlige tjenester"],
      explanation: "Riktig svar er at distinksjonen listes i stedet for å brukes. C har både definisjon og mekanisme, og alt som står, er riktig — det er nettopp derfor den er en C og ikke noe lavere.",
    },
    {
      question: "Hvordan virker byråkratisk og politisk korrupsjon ulikt på utviklingsprosesser?",
      options: ["Byråkratisk korrupsjon virker som en skatt på tilgang til tjenester; politisk korrupsjon vrir hvilke regler som gjelder", "Byråkratisk korrupsjon rammer næringslivet, mens politisk korrupsjon rammer husholdningene og deres tilgang til velferd", "Byråkratisk korrupsjon forekommer i lavinntektsland, mens politisk korrupsjon også finnes i høyinntektsland", "Byråkratisk korrupsjon er lovlig i noen land, mens politisk korrupsjon er forbudt i alle rettssystemer"],
      explanation: "Riktig svar er de to mekanismene: den ene tapper tjenestene, den andre vrir insentivene. Begge former undergraver statlig styringsevne, men de gjør det på hvert sitt nivå.",
    },
    {
      question: "Hvordan skal Bardhans nyanse om korrupsjon som «smøring» behandles?",
      options: ["Den skal fremstilles i sin sterkeste form og deretter prøves — verken skjules eller godtas", "Den skal utelates, siden hovedlinjen i litteraturen er at korrupsjon undergraver utvikling", "Den skal gjengis som en likeverdig konklusjon, siden faget ikke har tatt stilling i spørsmålet", "Den skal brukes som hovedargument, siden den er den mest oppdaterte posisjonen i litteraturen"],
      explanation: "Riktig svar er å fremstille og prøve. Å skjule en posisjon i litteraturen er ikke nøytralitet, og å godta den ukritisk er ikke drøfting — begge deler svekker svaret.",
    },
    {
      question: "Hvorfor er «korrupsjon er utbredt i mange land i det globale sør» ikke et eksempel?",
      options: ["Fordi et eksempel er konkret først når hva, hvor og hvilket begrep det belegger, står der", "Fordi påstanden er empirisk omstridt og derfor ikke kan brukes som belegg i en besvarelse", "Fordi det globale sør ikke er en tillatt betegnelse i faglig sammenheng i dette emnet", "Fordi eksempler alltid må hentes fra pensumlitteraturen for å regnes som gyldig forankring"],
      explanation: "Riktig svar er de tre kravene til et konkret eksempel. Merk at «global sør» tvert imot er fagets egen nøytrale term, og at egne og nyere eksempler er lov og premieres.",
    },
    {
      question: "Hva er ressursforbannelsen, og hvordan skal den formuleres?",
      options: ["Den observerte og omstridte tendensen til at ressursrikdom kan gi konflikt og svakt styresett — formulert som mekanisme, aldri som lov", "Den dokumenterte sammenhengen mellom mengden naturressurser i et land og landets korrupsjonsnivå over tid", "Den påstanden at utvinningsindustri alltid er skadelig for lav- og mellominntektsland uansett institusjoner", "Den tendensen at land med ressursinntekter bruker for mye på forbruk og for lite på investeringer"],
      explanation: "Riktig svar er tendensen formulert som mekanisme. Norge er det stående moteksempelet, og forskjellen ligger i institusjonene som forvalter inntektene — derfor er det ingen lov.",
    },
    {
      question: "Hva er de tre aksene bistandsbegrepet skilles langs?",
      options: ["Kanalen, altså bilateral eller multilateral; formen, altså nødhjelp, budsjettstøtte, prosjekt eller lån; og vilkårene", "Volumet, altså hvor mye som gis; varigheten, altså hvor lenge; og sektoren midlene går til i mottakerlandet", "Giveren, mottakeren og den utførende organisasjonen, som til sammen avgjør hvordan bistanden virker", "Nødhjelp, langsiktig bistand og investeringsstøtte, som er de tre hovedkategoriene i bistandsstatistikken"],
      explanation: "Riktig svar er kanal, form og vilkår. Et kortsvar som bare har den første aksen, er tynt — og det er den tredje, vilkårene, som bærer maktdimensjonen.",
    },
    {
      question: "Hvor ligger maktdimensjonen i bistandsbegrepet?",
      options: ["I vilkårene — den som stiller dem, bestemmer hva som teller som resultat", "I volumet — den som gir mest, får størst innflytelse over politikken i mottakerlandet", "I kanalvalget — bilateral bistand gir alltid giveren mer makt enn multilateral gjør", "I formen — nødhjelp gir giveren mer innflytelse enn langsiktig bistand gjør"],
      explanation: "Riktig svar er vilkårene, altså conditionality. Kanalvalget påvirker maktforholdet, men ikke entydig: multilaterale institusjoner stiller også vilkår, og de gjør det med sin egen stemmevekt i bunnen.",
    },
    {
      question: "Hva er det avgjørende grepet i A-besvarelsen av casen om budsjettstøtte?",
      options: ["At de to evalueringsfunnene leses som én mekanisme i stedet for som to atskilte opplysninger", "At begge alternativene beskrives grundig, slik at leseren selv kan avgjøre hvilket som er best", "At teksten navngir flere kilder enn C-besvarelsen gjør, og dermed viser bredere pensumkjennskap", "At anbefalingen er forsiktig formulert, slik at den ikke forplikter giverlandet til noe bestemt"],
      explanation: "Riktig svar er sammenkoblingen: at prosjektene leverte og at skoleverket mistet lærere, kan være to sider av samme mekanisme. C-besvarelsen navngir faktisk de samme kildene — den bruker dem bare ikke.",
    },
    {
      question: "Hvorfor er C-besvarelsen av casen ikke en B, når alt i den er riktig?",
      options: ["Fordi den bruker analyseapparatet til å beskrive to alternativer i stedet for til å avgjøre mellom dem", "Fordi den mangler den sentrale pensumkilden for temaet, som er et selvstendig krav i nettopp casesjangeren", "Fordi den har en uklar disposisjon uten innledning, hoveddel og konklusjon", "Fordi den behandler utdanning som et selvsagt gode uten å problematisere utviklingsbegrepet"],
      explanation: "Riktig svar er den manglende anbefalingen. Kilden er navngitt og disposisjonen er ryddig — det som mangler, er nettopp det sjangeren måler.",
    },
    {
      question: "Hva kjennetegner en anbefaling som innfrir casesjangerens krav?",
      options: ["At den er avgrenset og operativ, og begrunnet i et bestemt ledd av analysen over", "At den følger den posisjonen den sentrale pensumkilden inntar i spørsmålet", "At den veier alle hensyn mot hverandre og konkluderer med at valget avhenger av situasjonen", "At den er forsiktig nok til at den ville vært forsvarlig uansett hvilke opplysninger som kom fram"],
      explanation: "Riktig svar er avgrenset, operativ og forankret. «Det avhenger av situasjonen» er en oppsummering, ikke en anbefaling, og en anbefaling som ville holdt uansett opplysninger, sier ikke noe om denne saken.",
    },
    {
      question: "Når er en avveiende konklusjon fullgod på toppnivå?",
      options: ["Når selve avveiningen begrunnes: hvilke hensyn som står mot hverandre, hvilket som veier tyngst, og hva som ville snudd vurderingen", "Når begge sider er beskrevet like grundig og med samme presisjon, slik at fremstillingen er balansert og ingen av posisjonene favoriseres", "Når den avslutter med å vise til at spørsmålet er omstridt i den faglige litteraturen om temaet", "Når den unngår å ta stilling i politisk omstridte spørsmål, slik nøytralitetskravet i faget krever"],
      explanation: "Riktig svar er den begrunnede avveiningen, særlig leddet om hva som ville snudd vurderingen. «Det er sammensatt» uten grunner er gjengivelse forkledd som balanse.",
    },
    {
      question: "Hvorfor er den casebaserte oppgaven med i denne boka?",
      options: ["Som beredskapsstoff — sjangeren fantes i tre terminer, er avviklet, men trener ferdigheter som løfter kortsvaret", "Fordi den fortsatt utgjør en del av vurderingen i emnet, ved siden av den todelte skoleeksamenen", "Fordi den er den eneste sjangeren der kandidaten får bruke hjelpemidler og skrive over flere dager", "Fordi sensorveiledningene fra de siste årene fortsatt beskriver kravene til denne oppgavetypen"],
      explanation: "Riktig svar er beredskapsbegrunnelsen. Emneoppgaven fantes i tre terminer (H2015, H2016 og H2017) og er ikke lenger en del av vurderingen — men kravene den stilte, er de samme som løfter et kortsvar til toppnivå.",
    },
    {
      question: "Hva var den grunnleggende feilen i E-besvarelsen av kortsvaret om korrupsjon?",
      options: ["At kjernebegrepet aldri defineres, slik at resten av svaret hviler på en overskrift", "At svaret er for kort til å rekke gjennom de fire trinnene et kortsvar krever", "At påstandene om tillit og investeringsvilje er empirisk gale og trekker svaret ned", "At svaret behandler korrupsjon som et kulturtrekk ved bestemte land i det globale sør"],
      explanation: "Riktig svar er den manglende definisjonen. Svaret er verken kort eller galt — påstandene om tillit og investeringsvilje stemmer — men uten definisjonen er grunnkravet ikke innfridd.",
    },
    {
      question: "Hva er hovedpoenget i Lindkvist & Dixons kritikk, brukt på casen om budsjettstøtte?",
      options: ["At målesystemet premierer attribuerbare prosjektresultater framfor langsom styrking av offentlig sektor", "At bistand fra rike land systematisk brukes til å sikre giverens økonomiske interesser i mottakerlandet", "At direkte overføringer til fattige husholdninger er mer effektivt enn både prosjekter og budsjettstøtte", "At mottakerland uten sterke institusjoner ikke bør motta budsjettstøtte i det hele tatt"],
      explanation: "Riktig svar er poenget om hva som er lett å rapportere hjem. Merk at det ikke er en påstand om vond tro, og at direkte overføringer er Hanlon & Hulmes posisjon, ikke denne.",
    },
  ],
};

export default quizData_utv1000;
