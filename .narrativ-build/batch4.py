import sys
sys.path.insert(0, "/Users/danielandreasaubert/eksamenssett/Skolesaga/.narrativ-build")
from builder import build
T=0;Q=0
def add(*a):
    global T,Q
    nq,nqs=build(*a); T+=nq; Q+=nqs

# ===== 4.1 Sokrates, Platon og Aristoteles =====
add("krle-9-4-1",
"En fortelling om de tre greske tenkerne som la grunnlaget for vestlig filosofi -- om Sokrates' spørremetode, Platons hule og Aristoteles' gylne middelvei.",
35,
[
("intro","""## Tre menn på et torg i Athen

For over 2400 år siden levde tre filosofer i Hellas som forandret måten mennesker tenker på. De stilte spørsmål vi fremdeles diskuterer i dag: Hva er rettferdighet? Hva er et godt liv? Hvordan bør vi leve?

Den første gikk barfot på torget i Athen og hevdet at han var den viseste nettopp fordi han visste at han ingenting visste. Den andre var hans elev, og bygde et helt verdensbilde av usynlige, fullkomne idéer. Den tredje var igjen *hans* elev, men gikk sin egen vei og lette etter sannheten i den konkrete verden. **Sokrates**, **Platon** og **Aristoteles** -- tre generasjoner av lærer og elev som la grunnlaget for vestlig filosofi. La oss møte dem."""),

("text","""## Sokrates -- mannen som bare stilte spørsmål

**Sokrates** (ca. 470--399 f.Kr.) er en av historiens mest berømte filosofer, men han skrev aldri ned noe selv -- alt vi vet, kommer fra elevene hans, særlig Platon. Han var steinhoggersønn, gikk barfot i enkle klær, og tilbrakte dagene på torget (*agora*) der han snakket med folk. Han kalte seg «den viseste», men på en ydmyk måte: «Det eneste jeg vet, er at jeg ingenting vet.»

Sokrates underviste ikke ved å fortelle folk hva de skulle mene. I stedet stilte han spørsmål som fikk dem til å tenke selv. Denne metoden kalles **den sokratiske metoden** eller *maieutikk* -- «jordmorkunst», fordi den hjelper sannheten til å bli født. Slik fungerer den: noen fremsetter en påstand, Sokrates stiller kritiske spørsmål, påstanden viser seg å ha svakheter, man prøver en ny definisjon, og slik gjentas det til man kommer nærmere sannheten. Målet er ikke å vinne en debatt, men å komme nærmere sannheten *sammen*. Metoden brukes fortsatt i rettssaler, filosofiundervisning og terapi.

Sokrates' viktigste ideer var «Kjenn deg selv», at sann visdom begynner med å erkjenne sin egen uvitenhet, og at *dyd er kunnskap* -- den som virkelig forstår hva som er godt, vil handle godt, og ingen gjør ondt med vilje, bare av uvitenhet. I 399 f.Kr. ble han dømt til døden for å «ødelegge ungdommen». Han kunne ha flyktet, men valgte å akseptere dommen og drikke giften, fordi han mente at å bryte loven ville være verre enn å dø."""),

("quiz","Test deg selv på Sokrates:",[
 ("Hva er den sokratiske metoden?",[("Å holde lange foredrag",False),("Å utforske sannheten gjennom kritiske spørsmål og dialog",True),("Å skrive ned alle svar",False),("Å vinne enhver debatt",False)],
  "Den sokratiske metoden (maieutikk) utforsker sannheten gjennom spørsmål og dialog -- ikke for å vinne, men for å komme nærmere sannheten sammen."),
 ("Hva mente Sokrates med «dyd er kunnskap»?",[("At man må gå på skole for å bli god",False),("At den som virkelig forstår hva som er godt, vil handle godt",True),("At kunnskap er unyttig",False),("At bare lærde kan være moralske",False)],
  "Sokrates mente at den som virkelig forstår det gode, vil handle godt -- og at onde handlinger skyldes uvitenhet, ikke vond vilje."),
]),

("text","""## Platon -- skyggene på huleveggen

**Platon** (ca. 428--348 f.Kr.) var Sokrates' elev og grunnla **Akademiet** i Athen -- på mange måter verdens første universitet. Hans mest kjente teori er **ideelæren**. Platon mente at den fysiske verden vi ser med øynene, bare er en ufullkommen kopi av en høyere virkelighet -- *ideenes verden*. En sirkel tegnet på papir er aldri helt perfekt, men vi vet likevel hva en perfekt sirkel *er*; den perfekte sirkelen er en idé som eksisterer uavhengig av tegningen. På samme måte finnes det en idé om det gode, det rettferdige og det vakre.

Den mest berømte fortellingen er **hulelignelsen**. Tenk deg mennesker lenket fast i en hule, som bare kan se skygger kastet på veggen av et bål bak dem. De tror skyggene *er* virkeligheten. Hva skjer om én slipper fri og går ut? Først blender sollyset, men gradvis venner øynene seg til lyset, og han ser den virkelige verden -- trær, himmel, sol. Han forstår at skyggene bare var skygger. Men når han går tilbake for å fortelle de andre, tror de ham ikke.

Hva betyr lignelsen? Hulen er den fysiske verden vi lever i, skyggene er vår ufullstendige forståelse, og solen er ideen om det gode -- den høyeste sannheten. Den befridde fangen er filosofen som søker sannhet, og de andres vantro viser hvor vanskelig det er å endre folks oppfatninger."""),

("quiz","Test deg selv på Platon:",[
 ("Hva er kjernen i Platons ideelære?",[("At bare den fysiske verden er virkelig",False),("At den fysiske verden er en ufullkommen kopi av en høyere idéverden",True),("At ingenting eksisterer",False),("At idéer ikke finnes",False)],
  "Platon mente at den fysiske verden er en ufullkommen kopi av ideenes verden, der det finnes perfekte former for det gode, rettferdige og vakre."),
 ("Hva symboliserer solen i hulelignelsen?",[("Den fysiske verden",False),("Ideen om det gode -- den høyeste sannheten",True),("Skyggene på veggen",False),("Fangene i hulen",False)],
  "I hulelignelsen symboliserer solen ideen om det gode, den høyeste sannheten, mens skyggene står for vår ufullstendige forståelse av virkeligheten."),
]),

("text","""## Aristoteles -- den gylne middelvei

**Aristoteles** (384--322 f.Kr.) var Platons elev, men gikk sin egen vei og grunnla skolen **Lykeion**. Der Platon mente at den virkelige verden var den abstrakte idéverdenen, mente Aristoteles at virkeligheten finnes i den konkrete, fysiske verden -- og han var langt mer opptatt av observasjon og erfaring. Som han selv sa: «Platon er min venn, men sannheten er en større venn.»

Aristoteles' viktigste bidrag til etikken er **dydsetikken**. Han spurte: «Hva er et godt liv?» Svaret var *eudaimonia* -- lykke eller menneskelig blomstring, ikke bare en god følelse, men å leve godt i tråd med dydene. En **dyd** er en god egenskap vi utvikler gjennom praksis, og Aristoteles mente at dyden er **den gylne middelvei** mellom to ytterpunkter. Mot er for eksempel middelveien mellom feighet (for lite) og dumdristighet (for mye). Gavmildhet ligger mellom gjerrighet og sløseri. Den modige finner balansen: hun handler modig når det trengs, men ikke unødvendig risikabelt.

Hvordan utvikler man dyder? Gjennom *praksis* -- man blir modig ved å handle modig. Gjennom *forbilder* -- ved å se andres gode egenskaper. Og gjennom *fornuft* (*phronesis*, praktisk klokskap) -- evnen til å vurdere hva som er riktig i hver situasjon. Dydsetikken har fått ny oppmerksomhet i moderne filosofi: i stedet for å spørre «Hva er den rette regelen?» spør man «Hva slags menneske vil jeg være?» Alle tre filosofene har formet vestlig tenkning i over to tusen år."""),

("quiz","Test deg selv på Aristoteles:",[
 ("Hva er den gylne middelvei?",[("Den korteste veien til Athen",False),("At dyden ligger mellom to ytterpunkter (laster)",True),("At man alltid skal velge det enkleste",False),("En hellig vei i hinduismen",False)],
  "Den gylne middelvei er Aristoteles' idé om at dyden ligger mellom to ytterpunkter -- for eksempel mot mellom feighet og dumdristighet."),
 ("Hva er eudaimonia hos Aristoteles?",[("En gud",False),("Lykke eller menneskelig blomstring -- å leve godt i tråd med dydene",True),("En meditasjonsteknikk",False),("En fysisk lov",False)],
  "Eudaimonia er Aristoteles' svar på hva et godt liv er: lykke eller menneskelig blomstring, å leve godt i tråd med dydene."),
 ("Hvordan utvikles dyder ifølge Aristoteles?",[("De er medfødte og kan ikke endres",False),("Gjennom praksis, forbilder og praktisk klokskap (phronesis)",True),("Bare ved å lese bøker",False),("De gis av Gud ved fødselen",False)],
  "Aristoteles mente at dyder utvikles gjennom praksis (man blir modig ved å handle modig), gode forbilder og praktisk klokskap (phronesis)."),
]),

("summary","""## Oppsummering

Sokrates, Platon og Aristoteles la grunnlaget for vestlig filosofi og etikk. Sokrates stilte spørsmål i stedet for å gi svar (den sokratiske metoden), mente at dyd er kunnskap, og at den som forstår det gode, gjør det gode. Platon mente at den virkelige verden er ideenes verden, og brukte hulelignelsen til å vise at vi bare ser skygger av en dypere virkelighet der det gode er den høyeste ideen.

Aristoteles utviklet dydsetikken: et godt liv (eudaimonia) handler om å utvikle gode egenskaper gjennom praksis, og dyden er den gylne middelvei mellom to ytterpunkter. Deres ideer er minst like relevante i dag som for 2400 år siden."""),
])

# ===== 4.2 Kant og pliktetikken =====
add("krle-9-4-2",
"En fortelling om Immanuel Kant og pliktetikken -- om det kategoriske imperativ, om mennesket som mål i seg selv, og om hvordan en stillferdig professor formet menneskerettighetene.",
33,
[
("intro","""## Kan moral være som matematikk?

Finnes det moralske regler som gjelder for alle mennesker, til alle tider -- like sikre som at to og to er fire? Den tyske filosofen **Immanuel Kant** mente det. Han ville bygge en etikk på fornuft og plikt, ikke på følelser eller konsekvenser.

Kant (1724--1804) levde hele livet i Königsberg og levde så regelmessig at folk skal ha stilt klokkene sine etter hans daglige spaserturer. Men bak det stillferdige ytre revolusjonerte han filosofien. Han stilte tre store spørsmål: Hva kan vi vite? Hva bør vi gjøre? Hva kan vi håpe på? I dette kapittelet konsentrerer vi oss om det andre -- hva bør vi gjøre? -- og ser hvordan svaret hans har formet alt fra menneskerettigheter til vår forståelse av menneskeverd."""),

("text","""## Plikt framfor konsekvenser

Kants etikk kalles **pliktetikk** (deontologisk etikk), og den sier at noen handlinger er riktige eller gale *i seg selv* -- uavhengig av konsekvensene. Det er nyttig å se det mot andre retninger: konsekvensetikk sier at en handling er riktig hvis den fører til gode resultater, dydsetikk spør hva slags menneske du er, mens pliktetikk spør om handlingen i seg selv følger et moralsk prinsipp.

For Kant handler moral om *plikt*, ikke om hva vi har lyst til. En handling er moralsk god bare når vi gjør den *fordi den er riktig*. Å hjelpe noen fordi det gir deg en god følelse er hyggelig, men ikke moralsk verdifullt i Kants forstand. Å hjelpe noen fordi det er din plikt -- det er moralsk. Tenk på en butikkeier som gir riktig vekslepenger: gjør hun det fordi hun er redd for å bli tatt, handler hun av egeninteresse; gjør hun det fordi det er riktig, handler hun av plikt. Det eneste som er godt uten begrensning, mente Kant, er en *god vilje* -- en vilje som handler av plikt."""),

("quiz","Test deg selv på pliktetikk:",[
 ("Hva sier pliktetikken?",[("At konsekvensene avgjør om en handling er riktig",False),("At noen handlinger er riktige eller gale i seg selv, uavhengig av konsekvensene",True),("At følelser bestemmer moral",False),("At man alltid skal følge flertallet",False)],
  "Pliktetikk (deontologi) sier at noen handlinger er riktige eller gale i seg selv, uavhengig av hvilke konsekvenser de får."),
 ("Når er en handling moralsk god ifølge Kant?",[("Når den gir deg en god følelse",False),("Når du gjør den fordi den er riktig (av plikt)",True),("Når den gir best mulig resultat",False),("Når alle andre gjør det samme",False)],
  "For Kant er en handling moralsk god bare når vi gjør den fordi den er riktig -- av plikt, ikke av egeninteresse eller for en god følelse."),
]),

("text","""## Det kategoriske imperativ

Kjernen i Kants etikk er **det kategoriske imperativ** -- en grunnleggende morallov som kan brukes til å avgjøre om en handling er riktig. Han formulerte den på flere måter, men to er viktigst.

Den første er *universaliseringsprinsippet*: «Handle bare etter den maksime som du samtidig kan ville skal bli en allmenn lov.» Forenklet: Kan du ønske at *alle* gjør det du gjør? Tenk på løgn: hvis alle alltid løy, ville ingen stole på noen, og kommunikasjon ville bryte sammen -- løgn ødelegger seg selv. Altså kan du ikke ønske at løgn blir en allmenn lov, og derfor er det galt å lyve. Det samme gjelder tyveri: hvis alle stjal, ville eiendomsretten opphøre, og det ville ikke finnes noe å stjele.

Den andre formuleringen er *mennesket som mål i seg selv*: «Handle slik at du alltid behandler menneskeheten ... aldri bare som middel, men alltid også som mål.» Forenklet: aldri bruk mennesker *bare* som redskaper for dine egne formål. Å lyve for noen er å bruke dem som middel, fordi du manipulerer dem. Å utnytte noens arbeid uten rettferdig betaling er å bruke dem som middel. Å vise respekt for andres valg er å behandle dem som mål i seg selv."""),

("quiz","Test deg selv på det kategoriske imperativ:",[
 ("Hva er kjernen i universaliseringsprinsippet?",[("Gjør det som gir best resultat",False),("Handle bare slik du kan ønske at alle gjør det samme",True),("Følg dine følelser",False),("Gjør alltid det letteste",False)],
  "Universaliseringsprinsippet: Handle bare etter en regel (maksime) du samtidig kan ønske skal bli en allmenn lov for alle."),
 ("Hva betyr «mennesket som mål i seg selv»?",[("At man kan bruke andre fritt",False),("At man aldri skal bruke mennesker bare som redskaper for egne formål",True),("At bare egne mål teller",False),("At mennesker har en prislapp",False)],
  "Kants andre formulering sier at man aldri skal behandle mennesker bare som middel, men alltid også som mål i seg selv -- altså med respekt."),
]),

("text","""## Autonomi, menneskeverd -- og innvendingene

To begreper binder Kants etikk sammen. **Autonomi** betyr «selvlovgivning» (*auto* = selv, *nomos* = lov): vi er frie, fornuftige vesener som selv kan innse hva som er riktig og galt gjennom fornuft -- vi trenger ikke at noen forteller oss det, og vi er ansvarlige for våre egne valg. Fordi mennesker er fornuftige og autonome, har hvert menneske en **iboende verdighet** som ikke kan tas fra dem. Denne verdien er uendelig og ubetinget; den avhenger ikke av hva du gjør eller presterer. Mennesker har *verdighet*, ikke *pris* -- de kan ikke byttes ut eller brukes som varer, og å behandle noen uverdig gjennom tortur, slaveri eller ydmykelse er alltid galt. Disse tankene fikk direkte innflytelse på FNs verdenserklæring om menneskerettigheter (1948), hvis artikkel 1 sier: «Alle mennesker er født frie og med samme menneskeverd og menneskerettigheter.»

Men Kants etikk har også blitt kritisert. Er den *for rigid*? Kant mente at løgn alltid er galt -- selv om en morder banker på døra og spør hvor vennen din gjemmer seg. Mange synes det er urimelig. *Ignorerer den konsekvensene*? Hvis en liten løgn kan redde mange liv, virker det galt å ikke lyve. *Hva med følelsene*? Er det virkelig verdiløst å hjelpe noen fordi du bryr deg om dem? Og det kan være *vanskelig å bestemme hvilken maksime* som ligger bak en handling. Kants forsvar er at regler uten unntak gir oss fast grunn å stå på -- for tillater vi unntak, kan hvem som helst rettferdiggjøre hva som helst, og fornuften er et sikrere kompass enn upålitelige følelser."""),

("quiz","Test deg selv på autonomi og kritikk:",[
 ("Hva betyr autonomi hos Kant?",[("At man skal følge andres ordre",False),("Selvlovgivning -- at vi selv kan innse hva som er riktig gjennom fornuft",True),("At man ikke har ansvar",False),("At følelser bestemmer alt",False)],
  "Autonomi betyr «selvlovgivning»: vi er frie, fornuftige vesener som selv kan innse hva som er moralsk riktig, og er ansvarlige for våre valg."),
 ("Hva er en vanlig innvending mot Kants pliktetikk?",[("At den er for opptatt av konsekvenser",False),("At den kan være for rigid -- for eksempel at løgn alltid er galt",True),("At den ikke bryr seg om regler",False),("At den ignorerer menneskeverd",False)],
  "En vanlig innvending er at Kants etikk er for rigid: han mente løgn alltid er galt, selv når en løgn kunne ha reddet liv."),
]),

("summary","""## Oppsummering

Kants pliktetikk sier at noen handlinger er riktige eller gale i seg selv, uavhengig av konsekvensene. Det kategoriske imperativ har to hovedformuleringer: handle bare slik du kan ønske at alle gjør det samme, og bruk aldri mennesker bare som middel. Autonomi betyr at mennesket er et fritt, fornuftig vesen som kan gi seg selv moralske lover, og hvert menneske har en uendelig, ubetinget verdighet.

Kants ideer har inspirert FNs menneskerettigheter og vår forståelse av menneskeverd. Etikken er kritisert for å være for rigid, for å ignorere konsekvenser og for å nedvurdere følelser -- men Kant forsvarte den med at faste regler uten unntak gir oss et sikkert moralsk grunnlag."""),
])

# ===== 4.3 Utilitarisme =====
add("krle-9-4-3",
"En fortelling om utilitarismen -- nyttefilosofien som vil skape mest mulig lykke for flest mulig. Om Bentham og Mill, trikkeproblemet og hvordan tenkningen styrer alt fra helsevesen til klimapolitikk.",
33,
[
("intro","""## Hva om vi kunne måle lykke?

Tenk deg at den rette handlingen alltid er den som skaper mest lykke for flest mulig mennesker. Da kunne man i prinsippet *regne ut* hva som er riktig å gjøre. Denne ideen er kjernen i **utilitarismen** -- en av de mest innflytelsesrike etiske teoriene i historien.

Mens Kant mente at noen handlinger er gale uansett konsekvenser, snur utilitarismen det på hodet: det er nettopp konsekvensene som teller. Teorien har påvirket alt fra lovgivning og helseøkonomi til klimapolitikk og dyrevelferd -- ofte uten at vi merker det. La oss møte de to britiske tenkerne som formet den, og se hvordan ideen lever videre i samfunnet i dag."""),

("text","""## Bentham og Mill -- to versjoner av nytte

**Jeremy Bentham** (1748--1832) regnes som utilitarismens grunnlegger. Hans grunnidé var slående: «Naturen har plassert menneskeheten under to suverene herrer: smerte og nytelse.» Av dette utledet han **nytteprinsippet** (the greatest happiness principle): den rette handlingen er den som produserer størst mulig lykke for flest mulig berørte. Lykke er nytelse og fravær av smerte, og -- viktig -- alles lykke teller like mye; din lykke er ikke viktigere enn andres. Bentham prøvde til og med å lage en *lykkekalkyle* der han vurderte ting som intensitet, varighet, sikkerhet og hvor mange som berøres. Han var også en reformator: han kjempet for strafferettsreform, for dyrs rettigheter («Spørsmålet er ikke om de kan tenke, men om de kan lide») og mot slaveri.

**John Stuart Mill** (1806--1873) var Benthams elev og videreutviklet teorien, men var uenig på ett viktig punkt: ikke all nytelse er lik. Bentham mente at all nytelse kan måles i mengde, mens Mill mente at noen nytelser er *kvalitativt bedre* enn andre. Han skilte mellom *høyere nytelser* (intellektuelle, kunstneriske og sosiale gleder) og *lavere nytelser* (rene kroppslige behag), og oppsummerte det berømt: «Det er bedre å være et misfornøyd menneske enn en fornøyd gris.» Mill skrev også *Om frihet*, der han forsvarte ytringsfrihet og formulerte *skadeprinsippet* -- at samfunnet bare har rett til å begrense din frihet for å hindre skade på andre. Han var dessuten en tidlig forkjemper for kvinners rettigheter, sterkt påvirket av sin kone Harriet Taylor Mill."""),

("quiz","Test deg selv på Bentham og Mill:",[
 ("Hva sier nytteprinsippet?",[("At man alltid skal følge regler uansett konsekvenser",False),("At den rette handlingen er den som skaper mest lykke for flest mulig",True),("At bare din egen lykke teller",False),("At lykke ikke kan måles",False)],
  "Nytteprinsippet sier at den rette handlingen er den som produserer størst mulig lykke for flest mulig berørte -- der alles lykke teller like mye."),
 ("Hva var Mill uenig med Bentham om?",[("Om lykke i det hele tatt betyr noe",False),("Om hvorvidt all nytelse er lik -- Mill mente noen nytelser er kvalitativt bedre",True),("Om kvinner skulle ha rettigheter",False),("Om man skal regne på konsekvenser",False)],
  "Mill mente at ikke all nytelse er lik -- noen (høyere) nytelser er kvalitativt bedre enn andre. «Bedre å være et misfornøyd menneske enn en fornøyd gris.»"),
 ("Hva er skadeprinsippet til Mill?",[("At man aldri kan begrense frihet",False),("At samfunnet bare kan begrense din frihet for å hindre skade på andre",True),("At all frihet er farlig",False),("At flertallet alltid har rett",False)],
  "Skadeprinsippet sier at samfunnet bare har rett til å begrense din frihet for å hindre skade på andre -- ellers skal du være fri."),
]),

("text","""## Utilitarisme i samfunnet i dag

Utilitaristisk tenkning brukes overalt, selv om mange ikke er klar over det. I **helsevesenet** brukes QALY (kvalitetsjusterte leveår) for å beregne nytten av medisinsk behandling, og begrensede ressurser fordeles slik at flest mulig får mest mulig helsenytte. Spørsmålet kan bli konkret: er det riktig å bruke ti millioner på én pasient, eller én million på ti? I **politikk og lovgivning** brukes kost-nytte-analyser for å vurdere nye tiltak, og infrastrukturprosjekter veies etter nytte for flest mulig.

Under **pandemien** så vi utilitaristisk logikk tydelig: nedstengning begrenset friheten til alle for å beskytte de sårbare, og vaksiner ble prioritert for å redde flest liv. Innen **dyrevelferd** argumenterer den moderne utilitaristen Peter Singer for at dyr må inkluderes i lykkeregnskapet -- hvis et dyr kan lide, teller lidelsen moralsk. Et klassisk tankeeksperiment som tester vår moralske intuisjon, er *trikkeproblemet*: en løpsk trikk er på vei mot fem personer, men du kan vri den over på et spor der den bare dreper én. Skal du gjøre det? Den rene utilitaristen sier ja -- fem liv er mer enn ett -- men mange føler at det å aktivt ofre én person er noe annet enn å la fem dø."""),

("quiz","Test deg selv på utilitarisme i praksis:",[
 ("Hvordan brukes utilitaristisk tenkning i helsevesenet?",[("Man behandler alltid den rikeste pasienten først",False),("Begrensede ressurser fordeles så flest mulig får mest mulig helsenytte (f.eks. QALY)",True),("Man ignorerer kostnader helt",False),("Bare leger får bestemme alt",False)],
  "I helsevesenet brukes for eksempel QALY for å fordele begrensede ressurser slik at flest mulig får mest mulig helsenytte -- en utilitaristisk tankegang."),
 ("Hva tester trikkeproblemet?",[("Vår kunnskap om trikker",False),("Vår moralske intuisjon om å ofre én for å redde flere",True),("Hvor fort vi kan løpe",False),("Om utilitarisme er forbudt",False)],
  "Trikkeproblemet er et tankeeksperiment som tester vår moralske intuisjon: er det riktig å aktivt ofre én person for å redde fem?"),
]),

("text","""## Innvendinger mot utilitarismen

Utilitarismen er kraftfull, men kritiseres på flere punkter. For det første *rettigheter og rettferdighet*: hva om man kan øke den totale lykken ved å ofre en uskyldig person? I teorien kan utilitarismen rettferdiggjøre urettferdighet mot enkeltpersoner hvis det gagner flertallet. For det andre: *kan man måle lykke*? Benthams kalkyle forutsetter at lykke kan måles og sammenlignes -- men er din lykke virkelig sammenlignbar med min? For det tredje er teorien *for krevende*: hvis du alltid skal gjøre det som skaper mest lykke for flest, har du aldri rett til å prioritere deg selv eller dine nærmeste. Peter Singer mener for eksempel at vi bør gi bort det meste vi eier til veldedighet.

Videre er det faren for *flertallets tyranni*: hvis 51 % ønsker noe som skader 49 %, kan utilitarismen si at det er riktig -- men er det rettferdig? Og endelig: konsekvensene er *uforutsigbare*. Vi kan aldri helt forutse hva handlingene våre fører til, så hvordan kan vi basere moral på det? Utilitaristene forsvarer seg med at rettigheter og regler faktisk kan begrunnes utilitaristisk fordi de skaper mest lykke på lang sikt, at vi ikke trenger perfekt beregning -- et omtrentlig anslag er bedre enn ingenting -- og at alternativet er å ignorere konsekvensene helt, noe som neppe er bedre."""),

("quiz","Test deg selv på kritikken:",[
 ("Hva er en sentral innvending mot utilitarismen?",[("At den ignorerer konsekvenser",False),("At den i teorien kan rettferdiggjøre urettferdighet mot en enkeltperson hvis flertallet tjener på det",True),("At den bryr seg for mye om regler",False),("At den ikke tar hensyn til lykke",False)],
  "En sentral innvending er at utilitarismen kan rettferdiggjøre å ofre en uskyldig enkeltperson hvis det øker den totale lykken -- på bekostning av rettferdighet og rettigheter."),
 ("Hva menes med «flertallets tyranni» som kritikk av utilitarismen?",[("At mindretallet alltid vinner",False),("At det som gagner flertallet kan rettferdiggjøres selv om det skader et mindretall",True),("At ingen får bestemme",False),("At lykke er umulig",False)],
  "«Flertallets tyranni» er kritikken om at utilitarismen kan godta at flertallet får viljen sin selv når det skader et mindretall."),
]),

("summary","""## Oppsummering

Utilitarismen er en form for konsekvensetikk: den rette handlingen er den som skaper mest lykke for flest mulig. Bentham grunnla teorien og forsøkte å måle lykke, mens Mill videreutviklet den og hevdet at noen nytelser er kvalitativt bedre enn andre -- «bedre å være et misfornøyd menneske enn en fornøyd gris».

Trikkeproblemet tester vår moralske intuisjon, og utilitaristisk tenkning brukes i praksis i helsevesen, politikk, klimapolitikk og dyrevelferd. Kritikken er at teorien kan rettferdiggjøre urettferdighet, at lykke er vanskelig å måle, at den er for krevende, og at den kan føre til flertallets tyranni."""),
])

# ===== 4.4 Eksistensialisme og frihet =====
add("krle-9-4-4",
"En fortelling om eksistensialismen -- filosofien om at livet ikke har en ferdig mening, men at du er fritt og ansvarlig til å skape den selv. Om Kierkegaard, Sartre og de Beauvoir.",
33,
[
("intro","""## Dømt til å være fri

Hva om det ikke finnes noen forhåndsbestemt mening med livet ditt? Hva om du er helt fri til å velge hvem du vil være -- men også helt ansvarlig for hvert valg? Det høres kanskje skummelt ut, og det er nettopp poenget. Eksistensialismen er en filosofisk retning som stiller disse spørsmålene på spissen og utfordrer oss til å ta livet i egne hender.

Eksistensialistene var ikke enige om alt -- noen var dypt religiøse, andre ateister -- men de delte en grunntanke: friheten og ansvaret er menneskets grunnvilkår. I dette kapittelet møter vi tre av dem: dansken Kierkegaard, som regnes som eksistensialismens far, franskmannen Sartre, som gjorde den verdensberømt, og Simone de Beauvoir, som viste at frihet også handler om kjønn og makt."""),

("text","""## Kierkegaard -- angst som svimmelhet av frihet

Den danske filosofen **Søren Kierkegaard** (1813--1855) regnes som eksistensialismens far. Han var en original tenker som gikk imot tidens strømninger. En av hans viktigste ideer var at *subjektivitet er sannhet*: de viktigste sannhetene er personlige, og det nytter ikke bare å *vite* hva som er riktig -- du må *leve* det. Filosofi som bare er abstrakt teori, er meningsløs.

Kierkegaard mente at mennesker lever på tre nivåer. På *det estetiske stadiet* lever man for nytelse og øyeblikket, uten forpliktelser -- noe som til slutt fører til kjedsomhet og tomhet. På *det etiske stadiet* forplikter man seg til verdier, regler og relasjoner, som i ekteskapet; det gir mening, men kan bli rutinepreget. På *det religiøse stadiet* tar man et «troens sprang» og forplikter seg til noe større enn seg selv, noe som krever mot og personlig risiko.

Sentralt står begrepet **angst**. Angst er en grunnfølelse som oppstår nettopp fordi vi er frie -- den er ikke bare negativ, men en påminnelse om at vi har valgmuligheter og ansvar. Kierkegaard kalte angst for «svimmelhet av frihet». Han var også skeptisk til å bare følge mengden; han mente at hvert individ må ta ansvar for sine egne valg i stedet for å gjemme seg bak det «alle andre» gjør."""),

("quiz","Test deg selv på Kierkegaard:",[
 ("Hva mente Kierkegaard med at angst er «svimmelhet av frihet»?",[("At frihet alltid er negativt",False),("At angst oppstår fordi vi er frie og må velge -- en påminnelse om ansvar",True),("At man bør unngå alle valg",False),("At frihet ikke finnes",False)],
  "Kierkegaard så angst som en grunnfølelse som oppstår fordi vi er frie -- en svimlende påminnelse om at vi har valgmuligheter og ansvar."),
 ("Hva kjennetegner det estetiske stadiet hos Kierkegaard?",[("Forpliktelse til verdier og relasjoner",False),("At man lever for nytelse og øyeblikket, uten forpliktelser",True),("Et troens sprang",False),("Total selvoppofrelse",False)],
  "På det estetiske stadiet lever man for nytelse og øyeblikket uten forpliktelser, noe som ifølge Kierkegaard ender i kjedsomhet og tomhet."),
]),

("text","""## Sartre -- eksistens kommer før essens

Den franske filosofen **Jean-Paul Sartre** (1905--1980) er den mest kjente eksistensialisten -- filosof, forfatter og politisk aktivist. Hans mest berømte prinsipp er at **eksistens kommer før essens**. Tenk på en kniv: den er laget med et formål (essens) -- den er designet for å kutte -- så formålet kommer før kniven finnes. Med mennesker er det omvendt: vi *eksisterer* først, og skaper deretter oss selv gjennom våre valg. Vi har ingen forhåndsbestemt natur. Du er ikke «født lat» eller «skapt til» noe bestemt -- du er summen av dine handlinger og valg, og du kan alltid velge annerledes.

Med dette følger en radikal frihet og et radikalt ansvar. Vi er «dømt til å være frie» -- vi kan ikke unnslippe friheten -- og med friheten følger totalt ansvar for egne valg. Vi kan ikke skylde på naturen, oppdragelsen eller samfunnet for hvem vi er, for vi velger alltid selv. Selv det å «ikke velge» er et valg.

Sartre hadde et eget begrep for å flykte fra dette ansvaret: **ond tro** (*mauvaise foi*). Det er ond tro når mennesker later som de ikke er frie. «Jeg måtte gjøre det» -- nei, du valgte å gjøre det. «Slik er jeg bare» -- nei, du velger å være slik. «Alle andre gjør det» -- du velger å følge de andre. Ond tro er å lyve for seg selv om sin egen frihet."""),

("quiz","Test deg selv på Sartre:",[
 ("Hva betyr «eksistens kommer før essens»?",[("At mennesket har en ferdig natur fra fødselen",False),("At vi eksisterer først og skaper oss selv gjennom våre valg",True),("At gjenstander er viktigere enn mennesker",False),("At essens ikke finnes",False)],
  "Sartres prinsipp betyr at mennesket ikke har en forhåndsbestemt natur -- vi eksisterer først og skaper oss selv gjennom valgene våre."),
 ("Hva er «ond tro» (mauvaise foi) hos Sartre?",[("Å gjøre onde handlinger",False),("Å lyve for seg selv om sin egen frihet og flykte fra ansvaret",True),("Å tro på Gud",False),("Å aldri ta noen valg",False)],
  "Ond tro er å late som man ikke er fri -- å si «jeg måtte» eller «slik er jeg bare» for å flykte fra ansvaret for egne valg."),
]),

("text","""## De Beauvoir -- frihet er sosialt betinget

**Simone de Beauvoir** (1908--1986) var fransk filosof, forfatter og feminist. Hun var Sartres partner, men utviklet sin egen filosofi som på viktige punkter gikk lenger enn hans. Hennes mest berømte sitat, fra boken *Det annet kjønn* (1949), lyder: «Man fødes ikke som kvinne, man blir det.» Med det mente hun at kvinner ikke er «naturlig» passive eller svake -- samfunnet *former* jenter til å bli «kvinner» gjennom oppdragelse, forventninger og kultur. Biologi er ikke skjebne; kjønnsroller er sosialt konstruert, og for å bli virkelig fri må kvinner avvise de rollene samfunnet påtvinger dem.

Der Sartre fokuserte på individuell frihet, var de Beauvoir opptatt av at frihet er *sosialt betinget*. Det nytter ikke å si at alle er frie hvis noen er undertrykt; kvinners frihet begrenses av patriarkalske strukturer, og ekte frihet krever at vi kjemper for andres frihet også. «Min frihet kan ikke være fullstendig så lenge andre er ufrie.» Hun analyserte også hvordan kvinner gjennom historien er blitt gjort til «den andre» -- det avvikende, det underlegne -- der mannen er normen og kvinnen unntaket.

Eksistensialismens ideer er ikke bare abstrakt filosofi -- de handler om ditt liv, her og nå. Du velger hvem du vil være venner med, hva du bruker tiden på, hvem du vil bli. Og du er ansvarlig: «alle andre gjør det» er ingen unnskyldning. Å leve *autentisk* betyr å leve i tråd med egne verdier, ikke bare gjøre det som forventes. Det viser seg i hverdagen: å drikke fordi «alle gjør det» er ond tro; å legge ut bilder bare for likes er å la andre definere deg; å se bort når noen mobbes fordi du er redd, er å velge frykten framfor motet. Eksistensialismen utfordrer oss til å ta ansvar og leve ekte -- selv når det er vanskelig."""),

("quiz","Test deg selv på de Beauvoir og autentisitet:",[
 ("Hva mente de Beauvoir med «man fødes ikke som kvinne, man blir det»?",[("At kvinner ikke finnes",False),("At kjønnsroller er sosialt konstruert -- samfunnet former jenter til «kvinner»",True),("At biologi bestemmer alt",False),("At bare menn er frie",False)],
  "De Beauvoir mente at kvinneroller ikke er naturgitte, men formes av samfunnet gjennom oppdragelse, forventninger og kultur -- kjønnsroller er sosialt konstruert."),
 ("Hva betyr det å leve autentisk i eksistensialismen?",[("Å gjøre nøyaktig det andre forventer",False),("Å leve i tråd med egne verdier og valg, ikke bare følge mengden",True),("Å unngå alle valg",False),("Å skylde på andre",False)],
  "Å leve autentisk betyr å leve ekte og sant i tråd med egne verdier og valg -- ikke bare gjøre det som forventes eller følge «alle andre»."),
]),

("summary","""## Oppsummering

Eksistensialismen setter menneskets frihet, valg og ansvar i sentrum. Kierkegaard så angst som «svimmelhet av frihet» og mente vi må ta personlige valg fremfor å gjemme oss bak mengden. Sartre formulerte at «eksistens kommer før essens» -- vi skaper oss selv gjennom valg, er «dømt til å være frie» og bærer totalt ansvar, mens ond tro er å nekte sin egen frihet. De Beauvoir viste at frihet er sosialt betinget: «man fødes ikke som kvinne, man blir det», og vi må kjempe for alles frihet.

Felles for dem er at frihet og ansvar hører sammen, at det ikke finnes noen forhåndsbestemt mening -- vi skaper mening selv -- og at autentisitet betyr å leve ekte i tråd med egne valg. Filosofi handler om livet, ikke bare om abstrakte ideer."""),
])

# ===== 4.5 Etiske ideer i religionene =====
add("krle-9-4-5",
"En fortelling om hvor like de store religionenes etikk egentlig er -- om den gylne regel som finnes overalt, og om hvordan Jesus, Muhammad, Buddha og Konfucius lærte oss å leve.",
33,
[
("intro","""## Den samme regelen, overalt

Forestill deg at du reiser verden rundt og spør religiøse vismenn fra ulike tradisjoner om det viktigste rådet for hvordan man bør leve. En kristen, en muslim, en buddhist, en hindu, en konfucianer og en jøde -- og likevel får du i bunn og grunn det samme svaret: behandle andre slik du selv vil bli behandlet.

Alle store religioner har etiske læresetninger, og overraskende nok har de mye til felles. Men de har også viktige forskjeller -- i synet på hvor moralen kommer fra, og hva som er det høyeste målet. I dette kapittelet sammenligner vi etiske ideer fra noen av verdens mest innflytelsesrike religiøse skikkelser, og ser hva de kan lære oss på tvers av tradisjoner."""),

("text","""## Den gylne regel

**Den gylne regel** -- å behandle andre slik du selv vil bli behandlet -- finnes i nesten alle religiøse og etiske tradisjoner, og er kanskje verdens mest universelle etiske prinsipp. Jesus sa: «Alt dere vil at andre skal gjøre mot dere, det skal også dere gjøre mot dem.» Muhammad sa: «Ingen av dere er en sann troende før han ønsker for sin bror det han ønsker for seg selv.» Buddha lærte: «Lik du selv ikke smerte, lik andre det heller ikke.» Hinduismen sier i Mahabharata: «Gjør ikke mot andre det som ville volde deg smerte.» Konfucius lærte: «Gjør ikke mot andre det du ikke ønsker gjort mot deg selv.» Guru Nanak sa: «Behandle andre slik du vil at de skal behandle deg.» Og rabbi Hillel i jødedommen sa: «Det du hater, gjør ikke mot din neste. Det er hele Toraen.»

Det er verdt å merke seg at noen formuleringer er *positive* («Gjør mot andre ...») og andre *negative* («Gjør IKKE mot andre ...»). Begge uttrykker den samme grunnideen om gjensidig respekt og empati -- at man bør sette seg i andres sted -- men den positive versjonen krever på sett og vis mer: du skal aktivt gjøre godt, ikke bare unngå å gjøre vondt."""),

("quiz","Test deg selv på den gylne regel:",[
 ("Hva er den gylne regel?",[("At gull er det viktigste i livet",False),("Å behandle andre slik du selv vil bli behandlet",True),("At man alltid skal følge reglene",False),("At bare én religion har sannheten",False)],
  "Den gylne regel -- å behandle andre slik du selv vil bli behandlet -- finnes i nesten alle religioner og er kanskje verdens mest universelle etiske prinsipp."),
 ("Hva er forskjellen på den positive og den negative formen av den gylne regel?",[("De betyr helt ulike ting",False),("Den positive sier «gjør godt mot andre», den negative «gjør ikke vondt mot andre»",True),("Bare den negative finnes",False),("Den positive finnes bare i islam",False)],
  "Den positive formen («gjør mot andre ...») oppfordrer til aktivt å gjøre godt, mens den negative («gjør ikke mot andre ...») oppfordrer til å unngå å gjøre vondt. Begge uttrykker samme grunnidé."),
]),

("text","""## Jesus, Muhammad og Buddha

**Jesus fra Nasaret** (ca. 4 f.Kr.--ca. 30 e.Kr.) er kristendommens sentrale skikkelse, og hans etiske lære har formet vestlig kultur i 2000 år. Kjernen er *nestekjærlighet* -- «du skal elske din neste som deg selv» -- der lignelsen om den barmhjertige samaritan viser at nesten din er alle som trenger hjelp, uansett bakgrunn. Han lærte radikal *tilgivelse*: på spørsmål om hvor mange ganger man skal tilgi, svarte han «sytti ganger sju ganger» -- altså ubegrenset. Han forkynte til og med *fiendekjærlighet*: «Elsk deres fiender og be for dem som forfølger dere.» Og han omgikk dem samfunnet foraktet -- tollere, syke og fattige -- og bygde en sterk tradisjon for omsorg for de svakeste.

**Profeten Muhammad** (ca. 570--632 e.Kr.) er islams siste profet. Hans etikk vektlegger *rettferdighet* (*adl*) -- «vær rettferdige, for rettferdighet er nærmest gudsfrykt» -- som gjelder alle, også fiender, og *barmhjertighet* (*rahma*), som Koranen åpner nesten hver sure med å nevne. Sosial omsorg er en plikt: *zakat*, å gi 2,5 % av formuen til fattige, er en av islams fem søyler og uttrykker at rikdom er et ansvar. Fellesskapet (*umma*) har ansvar for hverandre -- «den som legger seg mett mens naboen er sulten, er ikke en av oss».

**Buddha** (ca. 563--483 f.Kr.) bygde en etikk på medfølelse og praktisk innsikt. Det viktigste prinsippet er *ahimsa* -- ikke-skade overfor alt levende, ikke bare å unngå vold, men å aktivt fremme fred. *Karuna*, medfølelse, og *metta*, kjærlighetsfull vennlighet, står sentralt, sammen med *middelveien* -- balanse mellom luksus og streng askese. Den åttefoldige veiens etiske del handler om riktig tale, riktig handling og riktig livsførsel."""),

("quiz","Test deg selv på religiøse skikkelsers etikk:",[
 ("Hva er kjernen i Jesu etikk?",[("Streng straff og hevn",False),("Nestekjærlighet, tilgivelse og omsorg for de svake",True),("At bare de rike er gode",False),("Å unngå alle mennesker",False)],
  "Jesu etikk vektlegger nestekjærlighet («elsk din neste som deg selv»), ubegrenset tilgivelse, fiendekjærlighet og omsorg for de svakeste."),
 ("Hva er zakat i islam?",[("En pilegrimsreise",False),("Å gi 2,5 % av formuen til fattige -- en av de fem søylene",True),("Et forbud mot mat",False),("En bønn",False)],
  "Zakat er å gi 2,5 % av formuen til fattige, en av islams fem søyler, som uttrykker at rikdom er et ansvar og ikke bare en rettighet."),
 ("Hva betyr ahimsa i Buddhas etikk?",[("Streng askese",False),("Ikke-skade overfor alt levende",True),("Å samle rikdom",False),("Å følge flertallet",False)],
  "Ahimsa er prinsippet om ikke-skade overfor alt levende -- ikke bare å unngå vold, men aktivt å fremme fred."),
]),

("text","""## Konfucius -- og hva religionene har felles

**Konfucius** (551--479 f.Kr.) var en kinesisk tenker hvis etikk har formet øst-asiatisk kultur i over 2500 år. Det viktigste begrepet er *ren* -- medmenneskelighet, godhet eller velvilje, å behandle alle med respekt og omsorg. *Li* er riktig oppførsel i sosiale sammenhenger og bevisst respekt for tradisjoner. *Xiao*, barnehengivenhet, er respekt og omsorg for foreldrene -- grunnlaget for all annen moral, for kan du ikke respektere dine foreldre, kan du ikke respektere andre. Idealet er *junzi*, den edle person, som dyrker dydene og lever rettferdig -- ikke basert på fødsel, men på karakter. Det er slående hvor likt dette er Aristoteles' dydsetikk: begge vektlegger karakter og dyder, mener dyder læres gjennom praksis, ser middelveien som ideal og vektlegger forbilder.

Når vi sammenligner religionene, finner vi mange likheter: omsorg for andre (nestekjærlighet, barmhjertighet, medfølelse, medmenneskelighet), prinsipper om å ikke skade, sosial rettferdighet, den gylne regel og tilgivelse. Men det finnes også viktige forskjeller. *Kilden til moral* varierer: i kristendom og islam er det Guds vilje, i buddhismen innsikt og medfølelse, i konfucianismen menneskelig natur og tradisjon. *Fokuset* varierer også: kristendommen vektlegger kjærlighet, islam underkastelse under Guds vilje, buddhismen frigjøring fra lidelse, konfucianismen harmoniske relasjoner. Buddhismen og hinduismen har det sterkeste dyrevernet, og kristendommen vektlegger ubetinget tilgivelse sterkest.

Hva kan vi lære? At så mange ulike tradisjoner har kommet fram til lignende etiske prinsipper, tyder på at det finnes noen grunnleggende moralske innsikter som er felles for mennesker på tvers av kulturer -- og den gylne regel er kanskje det beste eksempelet."""),

("quiz","Test deg selv på Konfucius og fellestrekk:",[
 ("Hva er ren i konfucianismen?",[("Et hellig sverd",False),("Medmenneskelighet -- å behandle alle med respekt og omsorg",True),("En straff",False),("En pilegrimsreise",False)],
  "Ren er det viktigste begrepet hos Konfucius: medmenneskelighet, godhet eller velvilje -- å behandle alle med respekt og omsorg."),
 ("Hva tyder det på at så mange religioner har lignende etiske prinsipper?",[("At religionene har kopiert hverandre",False),("At det finnes grunnleggende moralske innsikter som er felles på tvers av kulturer",True),("At bare én religion har rett",False),("At etikk er tilfeldig",False)],
  "At svært ulike tradisjoner kommer fram til lignende prinsipper, særlig den gylne regel, tyder på at noen moralske innsikter er felles for mennesker på tvers av kulturer."),
 ("Hva er en viktig forskjell mellom religionenes etikk?",[("De er helt identiske",False),("De har ulike syn på hvor moralen kommer fra -- Guds vilje, innsikt eller menneskelig natur",True),("Ingen av dem har etikk",False),("De er alle ateistiske",False)],
  "En viktig forskjell er kilden til moral: i kristendom og islam Guds vilje, i buddhismen innsikt og medfølelse, i konfucianismen menneskelig natur og tradisjon."),
]),

("summary","""## Oppsummering

Alle de store religionene har etiske læresetninger, og den gylne regel -- behandle andre slik du selv vil bli behandlet -- finnes i nesten alle. Jesus lærte nestekjærlighet, tilgivelse og omsorg for de svake; Muhammad rettferdighet, barmhjertighet og fellesskapets ansvar; Buddha ahimsa (ikke-skade), medfølelse og middelveien; og Konfucius medmenneskelighet (ren), respekt og den edle person.

Religionene har mye til felles, men også viktige forskjeller i synet på hvor moralen kommer fra og hva som er det høyeste målet. At så mange ulike tradisjoner har kommet fram til lignende prinsipper, tyder på at noen moralske innsikter er universelle -- med den gylne regel som det fremste eksempelet."""),
])

print(f"\nBATCH4 TOTAL: {T} quizzes, {Q} questions")
