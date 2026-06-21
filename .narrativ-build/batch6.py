import sys
sys.path.insert(0, "/Users/danielandreasaubert/eksamenssett/Skolesaga/.narrativ-build")
from builder import build
T=0;Q=0
def add(*a):
    global T,Q
    nq,nqs=build(*a); T+=nq; Q+=nqs

# ===== 6.1 Menneskerettigheter og religionsfrihet =====
add("krle-9-6-1",
"En fortelling om menneskerettighetene og religionsfriheten -- hva de gir oss, hvor grensene går, og hva som skjer når rettigheter kolliderer med hverandre.",
33,
[
("intro","""## Rettigheter ingen kan ta fra deg

Tenk deg at noen prøver å fortelle deg hva du har lov til å tro -- hvilken gud du må be til, eller om du i det hele tatt får tro på noe. I store deler av verden er dette virkelighet. Men menneskerettighetene sier noe annet: at alle mennesker, uansett nasjonalitet, kjønn, hudfarge eller religion, har grunnleggende rettigheter som ingen stat kan ta fra dem.

**Menneskerettigheter** er rettigheter alle har i kraft av å være mennesker. De er universelle (gjelder alle, overalt), udelelige, umistelige og uavhengige av hva staten mener. Religionsfrihet er en av dem. Men hva innebærer religionsfrihet egentlig? Betyr det at man kan gjøre hva som helst i religionens navn? Og hva skjer når religionsfrihet kolliderer med andre rettigheter, som likestilling? Det er vanskelige spørsmål vi skal utforske."""),

("text","""## Fra Holocaust til FNs verdenserklæring

Menneskerettighetene slik vi kjenner dem, ble til i kjølvannet av andre verdenskrig og Holocaust. Millioner av mennesker var blitt drept på grunn av sin religion, etnisitet eller politiske overbevisning, og verdenssamfunnet bestemte at dette aldri måtte skje igjen. FN ble grunnlagt i 1945, og **FNs verdenserklæring om menneskerettigheter** ble vedtatt 10. desember 1948 -- en dato som nå markeres som menneskerettighetsdagen. Den er ikke juridisk bindende, men moralsk forpliktende, og Norge var blant landene som var med på å utforme den. Senere kom Den europeiske menneskerettighetskonvensjonen (1950), som er juridisk bindende for Norge, og FNs barnekonvensjon (1989).

Sentrale artikler i verdenserklæringen sier at alle mennesker er født frie og med samme menneskeverd (artikkel 1), at alle har rettighetene uten forskjellsbehandling (artikkel 2), at alle har rett til liv og frihet (artikkel 3), at alle har rett til religionsfrihet (artikkel 18), og rett til ytringsfrihet (artikkel 19). I Norge er menneskeverdet dessuten ukrenkelig ifølge Grunnlovens paragraf 2."""),

("quiz","Test deg selv på menneskerettighetenes grunnlag:",[
 ("Hva kjennetegner menneskerettigheter?",[("De gjelder bare voksne",False),("De er universelle, umistelige og uavhengige av hva staten mener",True),("De gis av kongen",False),("De gjelder bare i Norge",False)],
  "Menneskerettigheter er universelle (gjelder alle), udelelige, umistelige og uavhengige av hva staten eller myndighetene mener."),
 ("Hvorfor ble FNs verdenserklæring om menneskerettigheter vedtatt i 1948?",[("For å feire krigens slutt",False),("Som et svar på andre verdenskrig og Holocaust -- det skulle aldri skje igjen",True),("Fordi Norge krevde det alene",False),("For å gi staten mer makt",False)],
  "Verdenserklæringen ble vedtatt i kjølvannet av andre verdenskrig og Holocaust, der millioner ble drept på grunn av religion, etnisitet eller politisk overbevisning."),
]),

("text","""## Hva religionsfriheten gir -- og hvor grensene går

Artikkel 18 gir tre ting. *Retten til å tro*: du kan tro på den religionen du vil, ha et ikke-religiøst livssyn, og ingen kan tvinge deg. *Retten til å praktisere*: du kan be, gå i kirke, moské eller tempel, faste, bære religiøse symboler, oppdra barna i din religion og dele troen med andre. Og *retten til å skifte*: du kan bytte religion eller forlate den helt, uten å straffes (såkalt apostasi). I Norge er dette beskyttet av Grunnloven, og alle tros- og livssynssamfunn kan registrere seg og motta statlig støtte.

Men religionsfrihet er ikke uten grenser. Den kan begrenses for å beskytte offentlig sikkerhet, offentlig orden eller andres rettigheter. Tvangsekteskap er forbudt selv om det forsvares religiøst i noen tradisjoner; kjønnslemlestelse er forbudt som helsefarlig praksis uansett religiøs begrunnelse; barnemishandling kan aldri forsvares med religion; og terrorisme kan aldri rettferdiggjøres religiøst. Det finnes også vanskelige grensetilfeller: bør religiøse symboler være tillatt på skolen, bør foreldre kunne nekte barn medisinsk behandling, og bør religiøse organisasjoner kunne diskriminere i ansettelser? Disse har ingen enkle svar."""),

("quiz","Test deg selv på religionsfrihetens innhold og grenser:",[
 ("Hva omfatter retten til religionsfrihet?",[("Bare retten til å tro, ikke å praktisere",False),("Retten til å tro, til å praktisere og til å skifte eller forlate religion",True),("Bare retten til å gå i kirken",False),("Retten til å tvinge andre til å tro",False)],
  "Religionsfriheten omfatter retten til å tro, til å praktisere troen (be, bære symboler, oppdra barn) og til å skifte eller forlate religion uten å straffes."),
 ("Hvorfor er tvangsekteskap forbudt selv om det forsvares religiøst?",[("Fordi religionsfrihet ikke kan brukes til å krenke andres rettigheter",True),("Fordi all religion er forbudt",False),("Fordi staten hater religion",False),("Fordi det er lovlig i Norge",False)],
  "Religionsfrihet har grenser: den kan ikke brukes til å krenke andres grunnleggende rettigheter, true sikkerhet eller skade helse. Derfor er tvangsekteskap forbudt."),
]),

("text","""## Blasfemi, religionskritikk og rettigheter i konflikt

**Blasfemi** betyr å krenke eller håne det som er hellig for en religion. I Norge fantes en blasfemiparagraf fram til 2015, men den ble nesten aldri brukt (siste dom var i 1912) og er nå opphevet -- det er lovlig å kritisere og til og med håne religioner. Men *hatefulle ytringer* mot religiøse grupper er fortsatt forbudt (straffelovens paragraf 185). Internasjonalt kan blasfemi straffes med fengsel eller død i land som Pakistan og Iran, og FN har sagt at blasfemilover ikke bør brukes til å undertrykke religionskritikk. Den avgjørende forskjellen: å si «jeg mener Koranens syn på kvinner er problematisk» er religionskritikk (lovlig), mens «alle muslimer er farlige» er hatprat mot en gruppe (ulovlig).

Noen av de vanskeligste etiske diskusjonene oppstår når rettigheter kolliderer. *Religionsfrihet mot likestilling*: noen religiøse samfunn skiller mellom menn og kvinner -- skal staten gripe inn? *Religionsfrihet mot barns rettigheter*: foreldre kan oppdra barna i sin religion, men barn har egne rettigheter til helse og utdanning -- bør for eksempel Jehovas vitner kunne nekte sine barn blodoverføring? *Religionsfrihet mot LHBT+-rettigheter*: skal religiøse organisasjoner kunne nekte å vie homofile par? I slike konflikter finnes sjelden et klart svar -- domstolene må veie rettigheter mot hverandre i hvert tilfelle. Det viktige er at ingen rettighet er absolutt; alle kan begrenses for å beskytte andre."""),

("quiz","Test deg selv på blasfemi og rettighetskonflikter:",[
 ("Hva er forskjellen på religionskritikk og hatprat i Norge?",[("De er det samme",False),("Religionskritikk (kritikk av ideer og praksiser) er lovlig; hatprat mot en gruppe er ulovlig",True),("Begge er forbudt",False),("Begge er alltid lovlige",False)],
  "Å kritisere en religions ideer og praksiser er lovlig religionskritikk, mens hatefulle ytringer mot en religiøs gruppe er ulovlig hatprat (straffelovens paragraf 185)."),
 ("Hva skjer når to menneskerettigheter kolliderer?",[("Den ene rettigheten oppheves for alltid",False),("Domstolene må veie rettighetene mot hverandre -- ingen rettighet er absolutt",True),("Religion vinner alltid",False),("Staten ignorerer begge",False)],
  "Når rettigheter kolliderer, må domstolene veie dem mot hverandre i hvert enkelt tilfelle. Ingen rettighet er absolutt -- alle kan begrenses for å beskytte andre."),
]),

("summary","""## Oppsummering

Menneskerettighetene, vedtatt av FN i 1948 etter andre verdenskrig og Holocaust, er grunnlaget for beskyttelse av individers frihet og verdighet. Religionsfriheten (artikkel 18) gir alle rett til å tro, praktisere og skifte religion fritt.

Men religionsfriheten har grenser -- den kan ikke krenke andres rettigheter, skade helse eller true sikkerhet. Vanskelige spørsmål oppstår når rettigheter kolliderer, for eksempel religionsfrihet mot likestilling eller barns rettigheter. Det er viktig å skille mellom religionskritikk (lovlig) og hatprat mot religiøse grupper (ulovlig). Menneskerettighetene beskytter både den religiøse og den ikke-religiøse."""),
])

# ===== 6.2 Ytringsfrihet og religion =====
add("krle-9-6-2",
"En fortelling om kollisjonen mellom ytringsfrihet og religiøs sensitivitet -- hvorfor ytringsfrihet er så viktig, hva som skjedde under karikaturstriden, og hvor grensene går.",
33,
[
("intro","""## Når en tegning utløser en storm

I 2005 publiserte en dansk avis tolv tegninger av profeten Muhammed. Det skulle bli en av de største konfrontasjonene mellom to grunnleggende verdier i moderne tid: ytringsfriheten og respekten for det andre holder hellig. Protester spredte seg over hele verden, ambassader ble angrepet, og mennesker mistet livet.

Ytringsfrihet er en av de mest grunnleggende rettighetene i et demokrati -- retten til å si, skrive og publisere det man mener. Men hva skjer når den brukes til å krenke det som er hellig for andre? I dette kapittelet skal vi se på ytringsfrihetens grunnlag og grenser, og på de vanskelige debattene som oppstår når ytringsfrihet møter religiøs sensitivitet. Målet er ikke å gi ett svar, men å forstå hvorfor fornuftige mennesker kan være dypt uenige."""),

("text","""## Hvorfor ytringsfrihet er viktig

**Ytringsfrihet** er retten til fritt å si, skrive og publisere det man mener. Den er beskyttet av FNs verdenserklæring (artikkel 19), Den europeiske menneskerettighetskonvensjonen (artikkel 10) og Norges Grunnlov (paragraf 100: «Ytringsfrihet bør finne sted»). Den omfatter retten til å uttrykke politiske meninger, kritisere myndigheter, institusjoner og religioner, drive med satire og humor, og pressefriheten. Men den omfatter *ikke* hatefulle ytringer mot grupper, oppfordring til vold, injurier eller trusler.

Hvorfor er ytringsfrihet så viktig? Filosofer har gitt flere begrunnelser. *Sannhetsargumentet*: John Stuart Mill mente at ytringsfrihet er nødvendig for å finne sannheten -- forbyr vi meninger, risikerer vi å undertrykke sannheten, og selv feilaktige meninger tvinger oss til å skjerpe våre egne argumenter. *Demokratiargumentet*: borgerne må kunne kritisere makthavere og bli informert av frie medier, ellers kan makten ikke kontrolleres. *Autonomiargumentet*: å tenke og uttrykke seg fritt er en del av det å være et fritt menneske. Og *sikkerhetsventilen*: når folk kan uttrykke misnøye åpent, er det mindre sannsynlig at frustrasjonen bygger seg opp til vold. Men betyr alt dette at ytringsfriheten er absolutt og aldri kan begrenses?"""),

("quiz","Test deg selv på ytringsfrihetens grunnlag:",[
 ("Hva omfatter ytringsfriheten IKKE?",[("Kritikk av religioner",False),("Hatefulle ytringer mot grupper, trusler og oppfordring til vold",True),("Satire og humor",False),("Politiske meninger",False)],
  "Ytringsfriheten omfatter kritikk, satire og politiske meninger, men ikke hatefulle ytringer mot grupper, oppfordring til vold, injurier eller trusler."),
 ("Hva er sannhetsargumentet for ytringsfrihet, ifølge John Stuart Mill?",[("At sannheten ikke finnes",False),("At ytringsfrihet er nødvendig for å finne sannheten -- selv feilaktige meninger skjerper argumentene",True),("At bare eksperter skal få ytre seg",False),("At meninger er farlige",False)],
  "Mill mente at ytringsfrihet er nødvendig for å finne sannheten: forbyr vi meninger, kan vi undertrykke sannheten, og selv feilaktige meninger tvinger oss til å skjerpe egne argumenter."),
]),

("text","""## Karikaturstriden -- fire perspektiver

I september 2005 publiserte den danske avisen Jyllands-Posten tolv tegninger som fremstilte profeten Muhammed. I islam er det en sterk tradisjon mot å avbilde profeten, og noen av tegningene knyttet islam til terrorisme. Kulturredaktøren mente at europeiske medier var blitt redde for å kritisere islam, og at dette truet ytringsfriheten. Mange muslimer følte seg dypt krenket, protester spredte seg til mange land, danske ambassader ble angrepet, og minst 200 mennesker døde i voldelige protester. I 2015 ble tolv mennesker drept i et terrorangrep mot det franske satiremagasinet Charlie Hebdo, som hadde publisert slike karikaturer.

Striden viste at folk ser saken helt forskjellig, og det finnes flere legitime perspektiver. Noen mener *ytringsfriheten er ufravikelig*: i et fritt samfunn må man kunne satirisere alle ideer, og å la seg skremme til taushet er å gi opp demokratiet. Andre vektlegger *ansvarlig bruk*: at noe er lovlig, betyr ikke at det er klokt, og å bevisst krenke en minoritet som allerede opplever diskriminering, er ikke modig, men maktmisbruk. Et tredje perspektiv vektlegger *dialog og gjensidig respekt* -- begge sider må lytte, og vold er aldri et akseptabelt svar. Et fjerde er en *maktanalyse*: satire mot makthavere er demokratisk, men satire mot sårbare minoriteter kan være undertrykkende, så konteksten betyr noe.

Når vi diskuterer dette, er det viktig å skille mellom *rettighet* (hva som er lovlig) og *klokskap* (hva som er ansvarlig), å fastholde at *vold aldri kan forsvares* som svar på ytringer, å respektere at folk kan ha sterke følelser knyttet til sin religion, og å unngå å gjøre det til «islam mot Vesten» -- det finnes et mangfold av meninger blant muslimer, akkurat som blant ikke-muslimer."""),

("quiz","Test deg selv på karikaturstriden:",[
 ("Hva utløste karikaturstriden i 2005?",[("En film om profeten",False),("At en dansk avis publiserte tegninger av profeten Muhammed",True),("En lov mot religion",False),("Et terrorangrep i Norge",False)],
  "Karikaturstriden begynte da den danske avisen Jyllands-Posten i 2005 publiserte tolv tegninger av profeten Muhammed, noe mange muslimer opplevde som dypt krenkende."),
 ("Hva er et viktig skille når man diskuterer slike ytringer?",[("Mellom danske og franske aviser",False),("Mellom rettighet (hva som er lovlig) og klokskap (hva som er ansvarlig)",True),("Mellom islam og Vesten",False),("Mellom unge og gamle",False)],
  "Et viktig skille er mellom rettighet (hva som er lovlig) og klokskap (hva som er klokt og ansvarlig). Noe kan være lovlig uten at det er klokt."),
 ("Hva er det bred enighet om, uansett perspektiv på karikaturene?",[("At karikaturene var en god idé",False),("At vold aldri kan forsvares som svar på ytringer",True),("At ytringsfrihet bør avskaffes",False),("At alle muslimer mener det samme",False)],
  "Uansett perspektiv er det bred enighet om at vold aldri er et akseptabelt svar på ytringer, uansett hvor krenkende de oppleves."),
]),

("text","""## Grensene i norsk lov -- og kan respekt og frihet forenes?

I Norge er ytringsfrihet en grunnleggende rettighet, men med noen grenser. Straffelovens paragraf 185 forbyr *hatefulle ytringer* mot personer basert på hudfarge, etnisitet, religion eller livssyn, seksuell orientering og funksjonsnedsettelse. Hatefulle ytringer er ytringer som nedverdiger en persons menneskeverd, oppfordrer til hat eller truer en gruppe. Det som *ikke* er hatprat, er saklig kritikk av religioner og ideologier, satire og humor selv om noen blir fornærmet, og upopulære meninger som ikke nedverdiger noen. Grensen er ofte uklar, og norske domstoler har i flere saker måttet vurdere om en ytring er lovlig religionskritikk eller ulovlig hatprat.

Kan ytringsfrihet og respekt for religion forenes? Et viktig poeng er at *respekt ikke betyr taushet* -- man kan respektere religiøse mennesker uten å la være å kritisere religiøse ideer; å argumentere mot noen viser faktisk at man tar dem alvorlig. De fleste er enige om at ytringsfrihet er en rettighet som innebærer et ansvar, men spørsmålet er hvem som bestemmer hva som er ansvarlig -- staten gjennom lover, eller den enkeltes samvittighet? Noen mener at *selvsensur* er en trussel mot ytringsfriheten, andre at det er en form for klokskap og respekt. En praktisk tilnærming er å la ytringsfriheten være vid og beskytte også upopulære ytringer, bruke dialog og motargumenter heller enn forbud, respektere at folk har rett til å bli opprørt -- men ikke til å svare med vold -- og alltid vurdere konteksten: hvem snakker, til hvem, og med hvilken hensikt."""),

("quiz","Test deg selv på grensene og respekt:",[
 ("Hva forbyr straffelovens paragraf 185?",[("All kritikk av religion",False),("Hatefulle ytringer mot personer basert på blant annet religion, etnisitet og seksuell orientering",True),("Satire og humor",False),("Politiske meninger",False)],
  "Paragraf 185 forbyr hatefulle ytringer -- ytringer som nedverdiger menneskeverd eller oppfordrer til hat -- mot grupper basert på blant annet religion, etnisitet og seksuell orientering."),
 ("Hva menes med at «respekt ikke betyr taushet»?",[("At man aldri skal si noe",False),("At man kan respektere mennesker uten å la være å kritisere ideene deres",True),("At all kritikk er respektløst",False),("At religion ikke kan diskuteres",False)],
  "At respekt ikke betyr taushet, vil si at man kan respektere religiøse mennesker og samtidig kritisere religiøse ideer -- å argumentere er i seg selv en form for respekt."),
]),

("summary","""## Oppsummering

Ytringsfrihet er en grunnleggende demokratisk rettighet, begrunnet med sannhetssøking, demokrati, individfrihet og sosial stabilitet. I Norge er den beskyttet av Grunnloven, men har grenser -- hatefulle ytringer er forbudt.

Karikaturstriden viste hvor vanskelig det er å balansere ytringsfrihet mot religiøs sensitivitet, og det finnes flere legitime perspektiver: ytringsfriheten som ufravikelig, ansvarlig bruk, dialog og maktanalyse. Det viktigste er å kunne diskutere åpent, skille mellom rettighet og klokskap, og forstå at vold aldri er et akseptabelt svar på ytringer."""),
])

# ===== 6.3 Etikk og teknologi =====
add("krle-9-6-3",
"En fortelling om teknologietikken -- om kunstig intelligens som kan diskriminere, deepfakes som lurer oss, algoritmer som styrer hva vi ser, og spørsmålet om hvem som har ansvaret.",
33,
[
("intro","""## Bare fordi det er mulig -- er det riktig?

Kunstig intelligens skriver tekster og lager bilder. Algoritmer bestemmer hva du ser i sosiale medier. Ansiktsgjenkjenning overvåker offentlige steder. Deepfakes gjør det mulig å lage falske videoer av hvem som helst. Teknologien utvikler seg raskere enn noen gang -- men bare fordi noe er teknologisk *mulig*, betyr det at det er *riktig*?

**Teknologietikk** er refleksjon over de moralske spørsmålene ny teknologi reiser: Hvem har ansvar når noe går galt? Hvem rammes når en algoritme diskriminerer? Hva er konsekvensene av å dele data? Er det rettferdig når AI tar beslutninger om menneskers liv? Teknologietikk er viktig nettopp fordi teknologien ofte utvikler seg mye raskere enn lovverket -- og da må vi bruke etisk refleksjon. I dette kapittelet ser vi på utfordringer som direkte berører livet ditt."""),

("text","""## Kunstig intelligens og deepfakes

**Kunstig intelligens** (AI) er datamaskiner som kan utføre oppgaver som vanligvis krever menneskelig intelligens -- gjenkjenne bilder, oversette tekst, skrive artikler og ta beslutninger. AI er allerede overalt i hverdagen din: verktøy som ChatGPT skriver tekster, sosiale medier anbefaler innhold, og Netflix og Spotify styres av AI. Men teknologien reiser etiske spørsmål. *Skjevhet og diskriminering*: AI lærer fra data, og data kan inneholde fordommer -- trenes et system på historiske data der menn ble ansatt oftere, kan det diskriminere kvinner. Slike skjevheter er dokumentert i ansettelser og rettssystemer. *Ansvar*: når en AI tar en feil beslutning, hvem er ansvarlig -- programmereren, selskapet eller brukeren? *Arbeidsliv*: AI kan erstatte mange jobber. Og *skolearbeid*: når elever bruker AI til besvarelser, hvor går grensen mellom å bruke et verktøy og å la verktøyet gjøre jobben?

**Deepfakes** er AI-genererte videoer, bilder eller lydklipp der en persons ansikt eller stemme erstattes med en annens -- så avansert at det kan være nesten umulig å skille ekte fra falsk. Det kan være falske videoer av politikere som sier ting de aldri har sagt, falske intime bilder (en alvorlig form for digitalt overgrep), eller kjendiser som «anbefaler» svindelprodukter. Hvorfor er det et etisk problem? Det undergraver *sannhet og tillit* -- når vi ikke kan stole på det vi ser; det krenker *personvern og verdighet*; det truer *demokratiet* hvis falske videoer påvirker valg; og det svekker *rettssikkerheten* hvis ekte bevis kan avvises som mulig falskt. Mottiltak er tekniske verktøy for å oppdage deepfakes, nytt lovverk, og ikke minst kritisk medieforståelse."""),

("quiz","Test deg selv på AI og deepfakes:",[
 ("Hvorfor kan kunstig intelligens diskriminere?",[("Fordi maskiner hater mennesker",False),("Fordi AI lærer fra data som kan inneholde fordommer",True),("Fordi AI alltid tar tilfeldige valg",False),("Fordi AI er for langsom",False)],
  "AI lærer fra data, og hvis dataene inneholder historiske fordommer (for eksempel at menn ble ansatt oftere), kan systemet videreføre diskrimineringen."),
 ("Hva er en deepfake?",[("En ekte nyhetsvideo",False),("Et AI-generert bilde, lyd eller video der en persons ansikt eller stemme erstattes",True),("En type algoritme for personvern",False),("En faktasjekk-tjeneste",False)],
  "En deepfake er AI-generert innhold der en persons ansikt, stemme eller kropp erstattes med en annens -- ofte så avansert at det er vanskelig å skille fra ekte."),
]),

("text","""## Personvern, algoritmer og filterbobler

**Personvern** er retten til å kontrollere informasjon om deg selv, og i den digitale verden er det under press. Sosiale medier som TikTok og Snapchat samler enorme mengder data -- hva du liker, hvem du snakker med, hvor du er. Nettbutikker, apper og staten samler også data. Et vanlig argument er «jeg har ingenting å skjule», men personvern handler ikke bare om å skjule noe galt -- det handler om retten til et privatliv, til å tenke fritt uten å bli overvåket, og til å ha kontroll over egne data. Vanskelige spørsmål er hvor mye frihet vi vil gi opp for sikkerhet (overvåkning kan forhindre kriminalitet, men krenker personvernet), om datahandel er forsvarlig, og om ansiktsgjenkjenning bør forbys. I Norge er personvernet beskyttet av personopplysningsloven (GDPR), som gir deg rett til å vite hvilke data som samles, og til å kreve dem slettet.

**Algoritmer** er regler datamaskiner følger for å ta beslutninger -- i sosiale medier bestemmer de hva du ser. De analyserer hva du liker og ser lenge på, viser deg mer av det, og skjuler det du ignorerer -- alt for å holde deg på plattformen lengst mulig, fordi mer tid betyr mer annonseinntekter. Dette skaper *filterbobler* (du ser bare innhold som bekrefter det du mener) og *ekkokamre* (motstemmer forsvinner), noe som kan føre til *polarisering* -- at folk med ulike syn beveger seg lenger fra hverandre. Algoritmer kan også skade *mental helse*: forskning viser at de ofte fremmer kontroversielt, sjokkerende eller negativt innhold, og unge som søker treningsinnhold kan bli bombardert med slankestoff. Algoritmer er ikke nøytrale -- de er laget av mennesker med bestemte mål, ofte profitt."""),

("quiz","Test deg selv på personvern og algoritmer:",[
 ("Hvorfor handler personvern om mer enn å «skjule noe galt»?",[("Det gjør det ikke",False),("Det handler om retten til privatliv, til å tenke fritt og til å kontrollere egne data",True),("Det handler bare om kriminelle",False),("Det handler bare om staten",False)],
  "Personvern handler ikke bare om å skjule noe galt, men om retten til et privatliv, til å tenke fritt uten overvåkning, og til å ha kontroll over egne data."),
 ("Hva er en filterboble?",[("En sikker måte å lagre data på",False),("Når algoritmer hovedsakelig viser deg innhold som bekrefter det du allerede mener",True),("En type deepfake",False),("En personverninnstilling",False)],
  "En filterboble oppstår når algoritmer hovedsakelig viser deg innhold som bekrefter det du allerede mener, slik at du sjelden møter motstridende synspunkter."),
 ("Hva er hovedmålet til algoritmene i sosiale medier?",[("Å beskytte din mentale helse",False),("Å holde deg på plattformen lengst mulig for å øke annonseinntektene",True),("Å vise deg sannheten",False),("Å gi deg balansert informasjon",False)],
  "Algoritmene er ofte laget for å holde deg engasjert og på plattformen lengst mulig, fordi mer tid betyr mer annonseinntekter -- ikke for din mentale helse."),
]),

("text","""## Hvem har ansvaret?

Et av de vanskeligste spørsmålene i teknologietikken er: hvem har ansvar for teknologiens konsekvenser? **Teknologiselskapene** designer plattformene og algoritmene, men har i dag begrenset ansvar i mange land -- selv om presset for regulering øker, og EU har vedtatt Digital Services Act med strengere krav. **Politikere og myndigheter** lager lovene, men lovverket henger ofte etter utviklingen; GDPR er et eksempel på regulering som har styrket personvernet. **Brukerne** velger selv å bruke teknologien og dele informasjon -- men har vi et reelt valg når alle andre bruker det, og er det informert samtykke å klikke «godta» uten å lese vilkårene? Og **utviklerne** -- programmererne som bygger teknologien -- har de et moralsk ansvar? Noen mener de bør ha en etisk kodeks, slik leger og advokater har.

Svaret er trolig at ansvaret er delt, men at de med mest makt -- selskapene -- også har størst ansvar. Som ung bruker av teknologi er det viktig å forstå disse utfordringene, utvikle kritisk tenkning om digitale medier og reflektere over eget teknologibruk. Teknologi er ikke nøytralt -- den er formet av menneskers valg, og vi kan alle bidra til at den brukes på en etisk forsvarlig måte."""),

("quiz","Test deg selv på ansvar:",[
 ("Hvem mener man har størst ansvar for teknologiens konsekvenser?",[("Bare brukerne",False),("De med mest makt -- teknologiselskapene -- selv om ansvaret er delt",True),("Ingen har ansvar",False),("Bare politikerne",False)],
  "Ansvaret er delt mellom selskaper, myndigheter, brukere og utviklere, men de med mest makt -- teknologiselskapene -- har trolig størst ansvar."),
 ("Hva er et godt prinsipp for å møte teknologietiske utfordringer som ung bruker?",[("Å ignorere dem",False),("Å utvikle kritisk tenkning om digitale medier og reflektere over eget bruk",True),("Å dele alt man ser",False),("Å stole blindt på algoritmene",False)],
  "Som ung bruker er det viktig å forstå utfordringene, tenke kritisk om digitale medier og reflektere over eget teknologibruk -- teknologi er ikke nøytralt."),
]),

("summary","""## Oppsummering

Teknologietikk handler om de moralske spørsmålene ny teknologi reiser. Kunstig intelligens kan diskriminere fordi den lærer fra skjeve data, deepfakes kan manipulere og undergrave tilliten til det vi ser, algoritmer kan skape filterbobler og polarisering, og masseinnsamling av data truer personvernet.

Sentrale utfordringer er AI-skjevhet, deepfakes, filterbobler, personvern versus overvåkning, og spørsmålet om ansvar -- som trolig er delt, men størst hos de mektige selskapene. Som unge brukere er det viktig å tenke kritisk og reflektere over eget teknologibruk, for teknologi er ikke nøytralt, men formet av menneskers valg."""),
])

# ===== 6.4 Bærekraft og rettferdighet =====
add("krle-9-6-4",
"En fortelling om bærekraft og rettferdighet som etiske og religiøse spørsmål -- om forvalteransvar i religionene, urfolks naturperspektiver, og klimarettferdighet i en ulik verden.",
33,
[
("intro","""## Hvem skal arve jorden?

Klimakrise, fattigdom og ulikhet er blant de største utfordringene menneskeheten står overfor. Men de er ikke bare vitenskapelige eller politiske spørsmål -- de er dypt etiske og religiøse. For hva slags verden etterlater vi til dem som kommer etter oss? Og er det rettferdig at noen rammes hardest av problemer de selv har bidratt minst til?

Religioner og livssyn har i alle tider hatt noe å si om menneskets forhold til naturen, til hverandre og til fremtidige generasjoner. **Bærekraftig utvikling** ble definert av Brundtland-kommisjonen i 1987 som utvikling som tilfredsstiller dagens behov uten å ødelegge mulighetene for kommende generasjoner. Den har en økologisk, en sosial og en økonomisk dimensjon, og FNs 17 bærekraftsmål (2015) skal nås innen 2030. Bærekraft handler altså ikke bare om miljø, men også om rettferdighet, verdighet og solidaritet. La oss se hva ulike religioner og livssyn kan bidra med."""),

("text","""## Forvalteransvar i religionene

Mange religioner har et konsept som ligner det norske ordet **forvalteransvar** -- ideen om at mennesket har fått verden i oppdrag å ta vare på den, ikke å ødelegge den. I **kristendommen** gir Gud i Første Mosebok mennesket ansvar for å «dyrke og vokte» skaperverket; mange kristne tolker dette som at vi er forvaltere, ikke eiere, av jorden. Pave Frans' rundskriv *Laudato Si'* (2015), kalt «den grønne encyklikaen», oppfordrer til radikal handling mot klimaendringer og peker på grådighet som «den menneskelige roten til den økologiske krisen». I **islam** er mennesket *khalifa* (forvalter) på jorden, med ansvar for å holde balanse (*mizan*) i naturen og ikke sløse; begrepet *hima* beskriver vernede naturområder, en tradisjon helt tilbake til profeten Muhammed. I **jødedommen** forbyr prinsippet *bal tashchit* («du skal ikke ødelegge») unødig ødeleggelse av naturen, og sabbatsåret gir jorden hvile -- et tidlig eksempel på bærekraftig landbruk. Til tross for forskjeller er budskapet felles: naturen er verdifull, mennesket har et ansvar, og grådighet og rovdrift er moralsk galt.

**Buddhismen** har et særlig sterkt forhold til naturen. Læren om *gjensidig avhengighet* (*pratitya-samutpada*) sier at alt henger sammen -- når vi skader naturen, skader vi oss selv, en innsikt som ligner moderne økologi. *Ikke-vold* (*ahimsa*) gir respekt for alle levende vesener, og mange buddhister er vegetarianere av denne grunn. Buddhismen lærer dessuten at grådighet og begjær er årsaken til lidelse, slik at et enkelt, nøysomt liv er veien til både lykke og mindre miljøbelastning. Den buddhistiske tilnærmingen er radikal: i stedet for bare å finne teknologiske løsninger, bør vi endre vår grunnleggende holdning -- fra grådighet til nøysomhet, fra utnyttelse til respekt."""),

("quiz","Test deg selv på forvalteransvar:",[
 ("Hva betyr forvalteransvar i religiøs sammenheng?",[("At mennesket eier naturen og kan gjøre som det vil",False),("At mennesket har fått ansvar for å ta vare på verden, ikke ødelegge den",True),("At naturen ikke har verdi",False),("At bare Gud kan ta vare på naturen",False)],
  "Forvalteransvar er ideen om at mennesket har fått verden i oppdrag å ta vare på den -- vi er forvaltere, ikke eiere. Konseptet finnes i kristendom, islam og jødedom."),
 ("Hva sier buddhismens lære om gjensidig avhengighet om naturen?",[("At naturen er uviktig",False),("At alt henger sammen -- når vi skader naturen, skader vi oss selv",True),("At mennesket skal herske over naturen",False),("At teknologi løser alt",False)],
  "Læren om gjensidig avhengighet (pratitya-samutpada) sier at alt i naturen henger sammen -- skader vi naturen, skader vi oss selv. Det ligner moderne økologi."),
]),

("text","""## Urfolksperspektiver og klimarettferdighet

Urfolk over hele verden har tradisjonelt hatt et nært og respektfullt forhold til naturen. I **samisk tradisjon** er reindriften basert på å følge naturens rytme, og naturen er ikke noe som skal eies og utnyttes, men noe man lever i og med. Urfolk i **Amazonas** har i generasjoner forvaltet regnskogen bærekraftig -- forskning viser at områder forvaltet av urfolk har lavere avskogingsrate. **Maoriene** i New Zealand ser naturen som en del av familien, og i 2017 fikk Whanganui-elven status som juridisk person med egne rettigheter. Felles for disse perspektivene er at naturen har iboende verdi (ikke bare som ressurs for mennesker), at mennesket er en del av naturen og ikke herre over den, og at bærekraft handler om å gi tilbake til naturen, ikke bare ta fra den. Slik utfordrer urfolksperspektiver den vestlige tanken om at mennesket skal «herske over» naturen.

Bærekraft handler også om **rettferdighet mellom mennesker**. De rikeste 10 % av verdens befolkning står for rundt 50 % av klimautslippene, mens de fattigste 50 % står for bare omkring 10 % -- men det er de fattigste landene som rammes hardest av tørke, flom og stigende havnivå. Rundt 700 millioner mennesker lever i ekstrem fattigdom. Dette reiser spørsmål om *klimarettferdighet*: er det rettferdig at fattige land betaler prisen for rike lands utslipp? Bør rike land betale mer, etter prinsippet om «felles, men ulikt ansvar»? Har fremtidige generasjoner rettigheter? Religiøse tradisjoner har sterke perspektiver: i kristendommen sa Jesus «det dere har gjort mot en av mine minste søsken, har dere gjort mot meg»; i islam er *zakat* (den obligatoriske almissen) en av de fem søylene; i hinduismen er *dana* (gavmildhet) en viktig dyd; og i humanismen er solidaritet med utsatte en kjerneverdi.

Etisk refleksjon bør føre til handling. På individnivå kan man redusere eget forbruk og engasjere seg; på samfunnsnivå støtte politikk for klimakutt og rettferdig fordeling; og religiøse og etiske tradisjoner kan være inspirasjon og motivasjon. Et kritisk spørsmål er om individuell handling er nok, eller om det trengs systemendring -- mange mener det viktigste er å endre de store strukturene, andre at individuell endring skaper den politiske viljen til systemendring."""),

("quiz","Test deg selv på urfolk og klimarettferdighet:",[
 ("Hva er felles for urfolks naturperspektiver?",[("At naturen bare er en ressurs å utnytte",False),("At naturen har iboende verdi, og at mennesket er del av naturen, ikke herre over den",True),("At teknologi er viktigst",False),("At naturen ikke betyr noe",False)],
  "Urfolksperspektiver ser naturen som verdifull i seg selv, ser mennesket som en del av naturen og vektlegger å gi tilbake til naturen, ikke bare ta fra den."),
 ("Hva er kjernen i klimarettferdighet?",[("At alle land slipper ut like mye",False),("At de fattigste rammes hardest av klimaendringer de har bidratt minst til",True),("At klima ikke angår fattige",False),("At rike land aldri bør betale",False)],
  "Klimarettferdighet handler om at de rikeste står for mest utslipp, mens de fattigste landene rammes hardest -- noe som reiser spørsmål om hvem som bør ta størst ansvar."),
 ("Hva er zakat i islam, knyttet til fattigdom?",[("En pilegrimsreise",False),("Den obligatoriske almissen -- en av islams fem søyler",True),("Et forbud mot mat",False),("En miljøavgift",False)],
  "Zakat er den obligatoriske almissen, en av islams fem søyler, der muslimer med midler plikter å gi en andel av formuen til fattige."),
]),

("summary","""## Oppsummering

Bærekraft og rettferdighet er dypt etiske og religiøse spørsmål. De fleste religioner og livssyn har sterke tradisjoner for å ta vare på naturen og de svakeste. Forvalteransvar (kristendom, islam, jødedom) gir mennesket ansvar for skaperverket, buddhismens lære om gjensidig avhengighet og urfolks naturperspektiver tilbyr alternative måter å forstå forholdet mellom menneske og natur.

Klimarettferdighet krever at de som har bidratt mest til problemet, tar størst ansvar, ettersom de fattigste rammes hardest. Etisk refleksjon bør føre til handling, både individuelt og på samfunnsnivå -- og religioner og livssyn kan være viktige motivasjonskilder i arbeidet for en mer bærekraftig og rettferdig verden."""),
])

# ===== 6.5 Etikk og kommunikasjon =====
add("krle-9-6-5",
"En fortelling om etikk i den digitale tidsalderen -- om nettmobbing, hatprat og falske nyheter, og om hvordan vi kan kommunisere mer ansvarlig når det sitter et menneske bak hver skjerm.",
30,
[
("intro","""## Et menneske bak hver skjerm

Vi sender meldinger på sekunder, deler bilder med tusenvis og kommenterer fremmedes liv hver eneste dag. Den digitale revolusjonen har endret hvordan vi kommuniserer på måter ingen kunne forutse. Men med den nye virkeligheten følger nye etiske utfordringer: nettmobbing som ødelegger unge menneskers liv, hatprat som sprer seg viralt, og falske nyheter som undergraver tilliten til informasjon.

Det er lett å glemme at det sitter et menneske bak hver skjerm. **Digital kommunikasjonsetikk** handler om å reflektere over rett og galt i måten vi kommuniserer digitalt: Hva blir konsekvensene av det jeg poster? Hvordan ville jeg følt det om noen postet dette om meg? Er det jeg deler sant? Behandler jeg andre med respekt? Den gylne regelen -- behandle andre slik du vil bli behandlet -- er like relevant på nett som i det fysiske livet. La oss se på de viktigste utfordringene."""),

("text","""## Nettmobbing og hatprat

**Nettmobbing** er gjentatt trakassering, truende atferd eller utestenging av en person gjennom digitale medier. Det kan være stygge meldinger og hatkommentarer, bevisst utestenging fra grupper, spredning av pinlige bilder og ryktespredning, falske profiler, eller deling av intime bilder uten samtykke (som er ulovlig og kan straffes). Hvorfor er nettmobbing spesielt alvorlig? Den gir *ingen pause* -- mens mobbing på skolen stopper når du drar hjem, følger nettmobbing deg 24 timer i døgnet. Den når et *stort publikum*, er *varig* fordi det som legges ut er vanskelig å fjerne, og kan skje *anonymt* bak falske profiler. Konsekvensene kan være alvorlige: angst, depresjon, skolevegring og i verste fall selvskading. I Norge rapporterer rundt 5--10 % av ungdommer at de har vært utsatt for nettmobbing, og jenter rapporterer det oftere enn gutter.

**Hatprat** er ytringer som nedverdiger, truer eller oppfordrer til hat mot personer eller grupper basert på religion, etnisitet, kjønn, seksuell orientering eller funksjonsnedsettelse. Hatprat sprer seg raskt viralt, og algoritmer kan forsterke det fordi kontroversielt innhold skaper engasjement. Minoritetsgrupper er særlig utsatt. Konsekvensene rammer enkeltpersoner (frykt, tilbaketrekning fra debatt), grupper (følelse av å være uvelkomne) og samfunnet (polarisering og undergraving av demokratiet) -- og hatprat kan være et steg på veien mot radikalisering. I Norge forbyr straffelovens paragraf 185 hatefulle ytringer. Et viktig skille går mellom hatprat (ulovlig) og uenighet (lovlig): å si «jeg er imot innvandring» er en mening, mens «alle innvandrere er kriminelle» er hatprat."""),

("quiz","Test deg selv på nettmobbing og hatprat:",[
 ("Hvorfor er nettmobbing ofte mer alvorlig enn vanlig mobbing?",[("Fordi den bare skjer på skolen",False),("Fordi den følger offeret hele døgnet, når et stort publikum og er varig",True),("Fordi den aldri får konsekvenser",False),("Fordi den er lett å fjerne",False)],
  "Nettmobbing gir ingen pause -- den følger offeret 24 timer i døgnet, når et stort publikum, er varig og kan skje anonymt, noe som gjør den spesielt alvorlig."),
 ("Hva er forskjellen på hatprat og uenighet?",[("Det er ingen forskjell",False),("Hatprat nedverdiger en gruppes menneskeverd; uenighet er en mening som ikke nedverdiger noen",True),("Uenighet er ulovlig",False),("Hatprat er alltid lovlig",False)],
  "Hatprat nedverdiger menneskeverd eller oppfordrer til hat mot en gruppe (ulovlig), mens uenighet er en mening som ikke nedverdiger noen (lovlig). «Jeg er imot innvandring» er en mening; «alle innvandrere er kriminelle» er hatprat."),
]),

("text","""## Falske nyheter -- og hvordan kommunisere ansvarlig

**Falske nyheter** er bevisst feilinformasjon som presenteres som ekte nyheter. Forskere skiller mellom *desinformasjon* (bevisst falsk informasjon spredt for å villede), *misinformasjon* (feilinformasjon spredt uten bevisst hensikt) og *malinformasjon* (ekte informasjon brukt for å skade). Hvorfor spres falske nyheter? På grunn av *penger* (sensasjon gir klikk og annonseinntekter), *politikk* (for å påvirke valg), *teknologi* (algoritmer belønner engasjement, og falske nyheter skaper ofte mer engasjement enn sanne) og *psykologi* (vi deler oftere innhold som bekrefter det vi allerede tror -- bekreftelsestendens). Konsekvensene er at det undergraver tilliten til medier, kan påvirke valg, skape panikk og gjøre det vanskeligere å ta informerte beslutninger. Hvordan avdekke dem? Sjekk kilden og om flere seriøse medier bekrefter saken, vær kritisk til overskrifter, sjekk datoen, og bruk faktasjekk-tjenester som Faktisk.no.

Hvordan kan vi kommunisere mer ansvarlig? Noen prinsipper hjelper. *Tenk før du poster*: er det sant, nødvendig og vennlig -- ville du sagt det ansikt til ansikt? *Husk mennesket bak skjermen*, for anonymitet gjør det lett å glemme at det sitter en person med følelser der. *Vær kildekritisk* og ikke del informasjon uten å sjekke den. *Stå opp mot urett*: ser du nettmobbing eller hatprat, si ifra, støtt offeret og rapporter innholdet. *Ta vare på deg selv* -- det er greit å legge bort telefonen og sette grenser. Og *bruk stemmen din positivt*, for sosiale medier kan også brukes til å inspirere, dele kunnskap og skape fellesskap. Blir du eller noen du kjenner utsatt for nettmobbing: ikke svar mobberen, ta skjermbilder som bevis, blokker og rapporter, snakk med en voksen du stoler på, og husk at det aldri er din feil at du blir mobbet -- og at det er modig, ikke svakt, å be om hjelp."""),

("quiz","Test deg selv på falske nyheter og ansvarlig kommunikasjon:",[
 ("Hva er forskjellen på desinformasjon og misinformasjon?",[("De er det samme",False),("Desinformasjon spres bevisst for å villede; misinformasjon spres uten bevisst hensikt",True),("Misinformasjon er alltid sann",False),("Desinformasjon er lovlig",False)],
  "Desinformasjon er bevisst falsk informasjon spredt for å villede, mens misinformasjon er feilinformasjon som spres uten bevisst hensikt -- for eksempel å dele en artikkel man tror er sann."),
 ("Hva er et godt prinsipp for å avdekke falske nyheter?",[("Tro på alt som har en sterk overskrift",False),("Sjekke kilden og om flere seriøse medier bekrefter saken",True),("Dele raskt før andre gjør det",False),("Bare lese overskriften",False)],
  "For å avdekke falske nyheter bør man sjekke kilden, se om flere seriøse medier bekrefter saken, være kritisk til overskrifter og bruke faktasjekk-tjenester."),
 ("Hva bør du gjøre hvis du blir utsatt for nettmobbing?",[("Svare mobberen med en gang",False),("Ikke svare, ta skjermbilder, blokkere og rapportere, og snakke med en voksen du stoler på",True),("Holde det helt hemmelig",False),("Slette alle bevis",False)],
  "Ved nettmobbing bør du ikke svare mobberen (det gir oppmerksomhet), ta skjermbilder som bevis, blokkere og rapportere, og snakke med en voksen du stoler på."),
]),

("summary","""## Oppsummering

Etisk kommunikasjon handler om å ta ansvar for det vi sier og deler digitalt. De viktigste utfordringene er nettmobbing, hatprat, falske nyheter og mangel på kildekritikk. Nettmobbing kan ha alvorlige konsekvenser fordi den følger offeret hele døgnet, hatprat nedverdiger menneskeverd og er ulovlig i Norge, og falske nyheter undergraver tilliten til informasjon.

Vi har alle et ansvar for å kommunisere etisk: tenke før vi poster, sjekke kilder, stå opp mot urett og huske at det sitter et menneske bak hver skjerm. Den gylne regelen gjelder på nett som ellers -- behandle andre slik du selv vil bli behandlet."""),
])

print(f"\nBATCH6 TOTAL: {T} quizzes, {Q} questions")
