import sys
sys.path.insert(0, "/Users/danielandreasaubert/eksamenssett/Skolesaga/.narrativ-build")
from builder import build
T=0;Q=0
def add(*a):
    global T,Q
    nq,nqs=build(*a); T+=nq; Q+=nqs

# ===== 3.1 Hinduismens mangfold =====
add("krle-9-3-1",
"En fortelling om hinduismen som tusen religioner i én -- om kjærlighetens vei bhakti, om yoga som langt mer enn tøying, om Vedantas dype filosofi, og om kampen mot kastesystemet.",
35,
[
("intro","""## Tusen religioner i én

Tenk deg at noen spør deg: «Hva tror hinduer på?» Det er nesten umulig å svare kort. For hinduismen er ikke én religion med ett sett regler -- den er et mangfold av tradisjoner, filosofier og praksiser som har vokst fram over mer enn 4000 år. Med over en milliard tilhengere er den verdens tredje største religion.

Det finnes ingen enkelt grunnlegger, flere hellige skrifter (Vedaene, Upanishadene, Bhagavadgita), mange guder og gudinneformer, og flere ulike veier til frelse. Noen hinduer dyrker én personlig gud, andre ser det guddommelige overalt, og atter andre er nesten filosofer mer enn troende. I dette kapittelet skal vi dykke ned i dette mangfoldet -- og se hvordan kjærlighet, kunnskap, disiplin og handling alle kan være veier til det samme målet."""),

("text","""## Bhakti -- kjærlighetens vei

Den mest utbredte formen for hinduisme i dag er **bhakti**, som betyr hengivenhet eller kjærlighet. Bhakti handler om å elske og hengi seg til en personlig gud gjennom et dypt, personlig forhold -- ofte gjennom bønn, sang (*bhajans*) og ritualer. Det fine er at alle kan delta, uavhengig av kaste, kjønn eller utdanning, fordi følelser og kjærlighet teller mer enn kunnskap.

Bhakti-tradisjonen finnes i flere former, avhengig av hvilken gud man dyrker. I *vaishnavisme* hengir man seg til Vishnu eller hans avatarer Krishna og Rama. I *shaivisme* dyrker man Shiva. Og i *shaktisme* tilber man den store gudinnen -- Devi, Durga eller Kali.

Bhakti-bevegelsen vokste fram i middelalderen og var faktisk ganske radikal: den utfordret kastesystemet ved å si at alle mennesker, uansett bakgrunn, kunne nå Gud gjennom kjærlighet. Poeter og helgener fra de lavere kastene ble æret, og brahminenes monopol på religion ble brutt opp."""),

("quiz","Test deg selv på hinduismens mangfold og bhakti:",[
 ("Hvorfor er det vanskelig å si «hva hinduer tror på»?",[("Fordi hinduismen er forbudt",False),("Fordi hinduismen er et mangfold av tradisjoner uten én grunnlegger eller ett regelsett",True),("Fordi det finnes få hinduer",False),("Fordi alle hinduer tror nøyaktig det samme",False)],
  "Hinduismen er ikke én enhetlig religion, men et mangfold av retninger, filosofier og praksiser med flere skrifter og ingen enkelt grunnlegger."),
 ("Hva er bhakti?",[("En kastegruppe",False),("Hengivenhet og kjærlighet til en personlig gud",True),("En meditasjonsstilling",False),("En hellig elv",False)],
  "Bhakti betyr hengivenhet eller kjærlighet og handler om et dypt, personlig forhold til en personlig gud -- åpent for alle uansett bakgrunn."),
 ("Hvordan utfordret bhakti-bevegelsen kastesystemet?",[("Ved å innføre en ny kaste",False),("Ved å si at alle, uansett bakgrunn, kunne nå Gud gjennom kjærlighet",True),("Ved å forby tempelbesøk",False),("Ved å avskaffe alle guder",False)],
  "Bhakti-bevegelsen hevdet at alle mennesker, uansett kaste, kunne nå Gud gjennom kjærlighet, og æret helgener fra lavere kaster."),
]),

("text","""## Yoga og Vedanta -- disiplinens og kunnskapens veier

I Vesten tenker mange på yoga som tøying og fysiske øvelser. Men i hinduismen er **yoga** et helt system for åndelig utvikling. Ordet betyr «å forene» -- å forene det individuelle selvet (*atman*) med det universelle (*Brahman*). Det finnes flere yoga-veier: *hatha yoga* (de fysiske øvelsene og pusteøvelsene de fleste i Vesten kjenner), *raja yoga* (meditasjon og mental disiplin, basert på Patanjalis åtte trinn fra etiske leveregler helt opp til *samadhi*, dyp åndelig forening), *karma yoga* (uselvisk handling), *jnana yoga* (kunnskapens vei) og *bhakti yoga* (kjærlighetens vei).

Den dypeste filosofiske retningen heter **Vedanta**, som betyr «slutten av Vedaene» og bygger på Upanishadene. Her møter vi noen av hinduismens mest sentrale begreper. *Brahman* er den ultimate virkeligheten bak alt som finnes. *Atman* er det individuelle selvet. *Maya* er illusjon -- tanken om at den materielle verden ikke er den dypeste virkeligheten. Og *moksha* er frigjøring fra gjenfødelsens hjul.

Vedanta finnes i tre hovedretninger som tolker forholdet mellom selvet og det guddommelige ulikt. I *Advaita Vedanta* (Shankara, ca. 800 e.Kr.) finnes bare én virkelighet -- atman og Brahman er identiske, oppsummert i setningen «Tat tvam asi», «Det er du». I *Vishishtadvaita* (Ramanuja) er verden en del av Gud, slik kroppen er del av en person. Og i *Dvaita* (Madhva) er Gud og verden grunnleggende forskjellige."""),

("quiz","Test deg selv på yoga og Vedanta:",[
 ("Hva betyr ordet yoga egentlig?",[("Å tøye",False),("Å forene -- det individuelle selvet med det universelle",True),("Å puste",False),("Å meditere i stillhet",False)],
  "Yoga betyr «å forene» -- å forene det individuelle selvet (atman) med det universelle (Brahman). Det er et helt system for åndelig utvikling, ikke bare fysiske øvelser."),
 ("Hva er moksha i hinduistisk filosofi?",[("En hellig tekst",False),("Frigjøring fra gjenfødelsens hjul",True),("En kaste",False),("En gud",False)],
  "Moksha er frigjøring fra gjenfødelsens hjul (samsara) -- ofte forstått som å innse at atman og Brahman er ett."),
 ("Hva sier Advaita Vedanta om atman og Brahman?",[("At de er grunnleggende forskjellige",False),("At de er identiske -- «Tat tvam asi»",True),("At Brahman ikke finnes",False),("At atman er en illusjon",False)],
  "Advaita Vedanta lærer at det bare finnes én virkelighet, og at atman og Brahman er identiske -- «Tat tvam asi», «Det er du»."),
]),

("text","""## Kastesystemet -- og kampen mot det

For å forstå hinduismens historie må man kjenne **kastesystemet** (varna-systemet), som i tusenvis av år delte det indiske samfunnet i sosiale grupper. De fire tradisjonelle varnaene var brahminer (prester og lærde), kshatriyaer (krigere og herskere), vaishyaer (handelsmenn og bønder) og shudraer (tjenere og arbeidere). Utenfor systemet sto **dalitene** -- «de uberørbare» -- som utførte de laveste oppgavene.

Kastesystemet har blitt kraftig kritisert, også innenfra hinduismen. Bhakti-bevegelsen hevdet at alle er like for Gud. **Mahatma Gandhi** kalte dalitene «harijans» (Guds barn) og kjempet for deres rettigheter, og så kastesystemet som en forvrengning av hinduismen. **B.R. Ambedkar**, selv dalit og Indias første justisminister, skrev Indias grunnlov med forbud mot kastediskriminering -- og konverterte til slutt til buddhismen i protest. I dag er kastediskriminering forbudt ved lov i India, og det finnes kvoteringsordninger for daliter, men i praksis lever kastetenkningen videre mange steder.

Hinduismen er en levende tradisjon med et mangfold av praksiser: tempeltilbedelse med daglige ritualer (*puja*), pilegrimsreiser til hellige steder som Varanasi, fargerike festivaler som Diwali og Holi, askese, og familieritualer ved fødsel, ekteskap og død. Også i Norge lever hinduismen -- det finnes templer i blant annet Oslo og Drammen, og norske hinduer feirer Diwali og Holi."""),

("quiz","Test deg selv på kastesystemet:",[
 ("Hvem sto utenfor de fire varnaene?",[("Brahminene",False),("Dalitene -- «de uberørbare»",True),("Kshatriyaene",False),("Prestene",False)],
  "Dalitene, «de uberørbare», sto utenfor de fire varnaene og utførte de laveste oppgavene i samfunnet."),
 ("Hva gjorde B.R. Ambedkar i kampen mot kastesystemet?",[("Han innførte sati",False),("Han skrev Indias grunnlov med forbud mot kastediskriminering",True),("Han grunnla en ny kaste",False),("Han forsvarte kastesystemet",False)],
  "Ambedkar, selv dalit og Indias første justisminister, skrev grunnloven med forbud mot kastediskriminering og konverterte til buddhismen i protest."),
]),

("summary","""## Oppsummering

Hinduismen er ikke én enkelt religion, men et mangfold av tradisjoner, filosofier og praksiser. Bhakti tilbyr en vei gjennom kjærlighet og hengivenhet til en personlig gud, og åpnet religionen for alle uansett kaste. Yoga er et helhetlig system for åndelig utvikling -- mye mer enn fysiske øvelser -- og Vedanta er hinduismens dypeste filosofi om Brahman, atman, maya og moksha.

Kastesystemet har preget hinduistisk samfunn i tusenvis av år, men reformatorer som Gandhi og Ambedkar kjempet mot det, og diskriminering er nå forbudt ved lov i India. Hinduismen lever videre som en mangfoldig og levende tradisjon med templer, festivaler og ritualer -- også i Norge."""),
])

# ===== 3.2 Buddhistisk filosofi og meditasjon =====
add("krle-9-3-2",
"En fortelling om buddhismens dype tanker om sinnet og virkeligheten -- om mindfulness, vipassana og zen, om tomhetslæren som binder alt sammen, og om medfølelse som religionens hjerte.",
35,
[
("intro","""## Mer enn historien om Buddha

De fleste kjenner historien: en ung prins, Siddharta Gautama, forlot sitt luksusliv, søkte sannheten og våknet opp under et tre for over 2500 år siden. Men buddhismen er mye mer enn historien om Buddha. Den er en rik filosofisk tradisjon med dype tanker om bevissthet, virkelighet og medfølelse.

I dette kapittelet skal vi utforske noen av buddhismens viktigste ideer og meditasjonsformer -- fra mindfulness, som har blitt et moteord i hele verden, til tomhetslæren, som høres mystisk ut, men egentlig handler om noe veldig konkret: at alt henger sammen. Og vi skal se at filosofien ikke er ment som abstrakt teori, men som noe som skal leves ut i hverdagen."""),

("text","""## Mindfulness, vipassana og zen

**Mindfulness** (*sati*) er en sentral buddhistisk praksis: å være fullt til stede i øyeblikket uten å dømme det man opplever -- å legge merke til tanker, følelser og sanseinntrykk uten å la seg rive med. I *Satipatthana Sutta* beskriver Buddha fire områder for mindfulness: kroppen, følelsene, sinnet og fenomenene. Men det handler ikke bare om å sitte stille med lukkede øyne. «Når du går, vit at du går. Når du spiser, vit at du spiser», sa Buddha. Mer formelt kalles meditasjon *bhavana*, «å dyrke» sinnet, og deles i to hovedtyper: *samatha* (ro-meditasjon, som fokuserer sinnet på ett objekt) og *vipassana* (innsiktsmeditasjon).

**Vipassana** betyr «å se klart» og er en av de eldste meditasjonsformene, særlig viktig i theravada-buddhismen. Man sitter stille, fokuserer på pusten og observerer alt som oppstår -- og oppdager gradvis tre kjennetegn ved virkeligheten: *anicca* (forgjengelighet, alt endrer seg), *dukkha* (utilfredsstillelse, å klynge seg til det som endrer seg gir lidelse) og *anatta* (ikke-selv, det finnes ingen fast, uforanderlig «sjel»). I dag er vipassana-retreater populære over hele verden, ikke minst gjennom S.N. Goenkas gratis ti-dagers kurs.

**Zen** (fra kinesisk *chan*, fra sanskrit *dhyana*, meditasjon) er en retning i mahayana-buddhismen som vektlegger direkte erfaring framfor tekststudier. Kjernen er *zazen* -- sittemeditasjon der man «bare sitter» uten mål. Zen er kjent for *koaner*, gåtefulle spørsmål uten logisk svar (som «Hva er lyden av én hånd som klapper?»), som skal bryte ned vanlig tenkning og åpne for *satori* -- plutselig oppvåkning. Mester Dogen sa: «Å studere zen er å studere seg selv. Å studere seg selv er å glemme seg selv.»"""),

("quiz","Test deg selv på meditasjon:",[
 ("Hva er mindfulness i buddhismen?",[("Å tømme sinnet helt for tanker",False),("Å være fullt til stede i øyeblikket og observere uten å dømme",True),("En fysisk yoga-stilling",False),("Å be til en gud",False)],
  "Mindfulness (sati) handler om å være fullt til stede i øyeblikket og observere tanker, følelser og sanseinntrykk uten å dømme eller rive seg med."),
 ("Hvilke tre kjennetegn ved virkeligheten avdekker vipassana?",[("Tro, håp og kjærlighet",False),("Anicca (forgjengelighet), dukkha (utilfredsstillelse) og anatta (ikke-selv)",True),("Fortid, nåtid og framtid",False),("Kropp, sinn og sjel",False)],
  "Vipassana avdekker de tre kjennetegnene: anicca (alt endrer seg), dukkha (å klynge seg gir lidelse) og anatta (ingen fast sjel)."),
 ("Hva er en koan i zen?",[("En hellig bok",False),("Et gåtefullt spørsmål uten logisk svar som skal åpne for innsikt",True),("En meditasjonspute",False),("Et matoffer",False)],
  "En koan er et gåtefullt spørsmål uten logisk svar, som «Hva er lyden av én hånd som klapper?», ment å bryte ned vanlig tenkning og åpne for satori."),
]),

("text","""## Tomhet og medfølelse -- buddhismens kjerne

Et av de mest misforståtte begrepene i buddhismen er **shunyata**, «tomhet». Det betyr *ikke* at ingenting eksisterer. Det betyr at ingenting eksisterer *uavhengig* av alt annet. Alle ting er «tomme» for en fast, uavhengig essens, fordi alt oppstår i avhengighet av andre ting -- det som kalles *pratityasamutpada*, betinget tilblivelse. Tenk på en blomst: den eksisterer ikke i seg selv, men på grunn av frøet, jorden, vannet, solen, insektene og bonden. Uten disse betingelsene finnes ingen blomst. Filosofen **Nagarjuna** (ca. 150--250 e.Kr.) utviklet denne læren og grunnla *madhyamaka*-skolen, «midtveien». Det er vanskelig filosofi, men kjernen er enkel: alt henger sammen, ingenting eksisterer isolert.

Like viktig som visdom er **karuna** -- medfølelse. Uten medfølelse er visdom ufullstendig, og uten visdom kan medfølelse bli naiv. En vanlig praksis er *metta*, kjærlighetsmeditasjon, der man sender gode ønsker først til seg selv, så til en man er glad i, en nøytral person, en vanskelig person, og til slutt alle levende vesener. I mahayana-buddhismen er **bodhisattva-idealet** sentralt: en bodhisattva utsetter sin egen fullstendige oppvåkning for å hjelpe alle andre vesener først. Dalai Lama oppsummerer det enkelt: «Min religion er vennlighet.» I moderne tid har ledere som Thich Nhat Hanh utviklet «engasjert buddhisme» -- å bruke buddhistiske prinsipper aktivt for fred, sosial rettferdighet og miljøvern.

Buddhismen har utviklet seg i tre hovedretninger. *Theravada* («de eldstes lære») er den eldste, utbredt i Sri Lanka og Thailand, med vekt på munkelivet og vipassana. *Mahayana* («det store fartøyet») finnes i Kina, Japan og Korea, og legger vekt på bodhisattva-idealet, medfølelse og tomhetslæren -- zen hører hit. *Vajrayana* («diamantfartøyet») er utbredt i Tibet og Nepal, med avanserte meditasjonsteknikker, mantraer og mandalaer, og Dalai Lama som mest kjente leder."""),

("quiz","Test deg selv på tomhet, medfølelse og retninger:",[
 ("Hva betyr shunyata (tomhet) i buddhismen?",[("At ingenting eksisterer",False),("At ingenting eksisterer uavhengig av alt annet -- alt henger sammen",True),("At verden er en illusjon man skal flykte fra",False),("At man skal tømme magen før meditasjon",False)],
  "Shunyata betyr ikke at ingenting finnes, men at ingenting eksisterer uavhengig -- alt oppstår i avhengighet av andre ting (betinget tilblivelse)."),
 ("Hva er en bodhisattva?",[("En buddhistisk gud",False),("En som utsetter sin egen oppvåkning for å hjelpe alle andre vesener",True),("En tempelvakt",False),("En hellig elv",False)],
  "En bodhisattva er, i mahayana-buddhismen, en som søker oppvåkning ikke bare for seg selv, men for alle levende vesener, drevet av medfølelse (karuna)."),
 ("Hvilke er buddhismens tre hovedretninger?",[("Sunni, shia og sufi",False),("Theravada, mahayana og vajrayana",True),("Advaita, dvaita og vishishtadvaita",False),("Bhakti, jnana og karma",False)],
  "Buddhismens tre hovedretninger er theravada (Sri Lanka, Thailand), mahayana (Kina, Japan -- inkluderer zen) og vajrayana (Tibet, Nepal)."),
]),

("summary","""## Oppsummering

Buddhistisk filosofi og meditasjon byr på rike tradisjoner. Mindfulness handler om oppmerksomt nærvær i alt man gjør, vipassana er innsiktsmeditasjon som avdekker virkelighetens tre kjennetegn (forgjengelighet, utilfredsstillelse og ikke-selv), og zen vektlegger direkte erfaring gjennom zazen og koaner.

Tomhetslæren (shunyata) betyr at alt henger sammen -- ingenting eksisterer uavhengig. Medfølelse (karuna) er like viktig som visdom og kommer til uttrykk i metta-meditasjon og bodhisattva-idealet. Buddhismen har tre hovedretninger -- theravada, mahayana og vajrayana -- og filosofien er ikke bare abstrakt teori, men ment å leves ut i hverdagen gjennom meditasjon, oppmerksomhet og medfølelse."""),
])

# ===== 3.3 Sikhisme =====
add("krle-9-3-3",
"En fortelling om sikhismen -- en selvstendig religion bygget på én Gud og likhet, om Guru Nanak og de ti guruene, om det åpne kjøkkenet langar, og om de fem K-ene.",
35,
[
("intro","""## «Det finnes verken hindu eller muslim»

For rundt 500 år siden forsvant en mann ved navn Nanak under et bad i en elv i Punjab i Nord-India. Etter tre dager kom han tilbake og sa noe som skulle bli starten på en helt ny religion: «Det finnes verken hindu eller muslim.» Han mente ikke at religionene ikke fantes, men at religiøse merkelapper er uviktige -- det som teller, er forholdet til Gud og hvordan man lever.

Slik begynte **sikhismen**, verdens femte største religion med rundt 30 millioner tilhengere. Det er viktig å forstå at sikhismen er en selvstendig religion -- den er verken en blanding av hinduisme og islam eller en avlegger av noen av dem. Den er bygget på tre kjerneverdier: én Gud, likhet mellom alle mennesker, og tjeneste. La oss bli kjent med grunnleggeren, de hellige tradisjonene og symbolene som gjør sikhene gjenkjennelige over hele verden."""),

("text","""## Guru Nanak og de ti guruene

**Guru Nanak** (1469--1539) er sikhismens grunnlegger. Han ble født i en hinduistisk familie, men etter sin åndelige opplevelse forkynte han et nytt budskap. Kjernen var *Ik Onkar* -- det finnes bare én Gud, og denne Gud er den samme for alle. Gud er uten form, uendelig og til stede overalt. Alle mennesker er skapt like, uansett kaste, kjønn, rase eller religion. Og man skal leve *i* verden, ikke trekke seg tilbake fra den. Nanak ga tre grunnpilarer å leve etter: *Naam Japna* (minnes Gud gjennom bønn og meditasjon), *Kirat Karni* (ærlig, hardt arbeid) og *Vand Chakna* (å dele med andre). Han reiste i over 20 år, besøkte hellige steder i ulike religioner, og hadde med seg den muslimske musikeren Mardana -- et levende bilde på at religiøse grenser er uviktige.

Etter Nanak ble sikhismen formet av til sammen **ti guruer** over nesten 240 år. Blant de viktigste: Guru Angad utviklet *gurmukhi*-skriften; Guru Ram Das grunnla Amritsar, sikhismens helligste by; Guru Arjan samlet den hellige skriften **Guru Granth Sahib** og bygde Det gylne tempel, før han ble martyr; og Guru Tegh Bahadur ga livet for religionsfrihet. Den tiende, **Guru Gobind Singh** (1666--1708), grunnla Khalsa-fellesskapet og erklærte at lederskapet etter ham ikke skulle gå til en person -- i stedet ble selve skriften, Guru Granth Sahib, sikhenes evige guru."""),

("quiz","Test deg selv på Guru Nanak og guruene:",[
 ("Hva er Ik Onkar i sikhismen?",[("Et hellig sverd",False),("Læren om at det finnes bare én Gud, den samme for alle",True),("Et fellesmåltid",False),("En kaste",False)],
  "Ik Onkar er kjernen i Guru Nanaks budskap: det finnes bare én Gud, som er uten form, uendelig og den samme for alle mennesker."),
 ("Hvem er sikhenes evige guru etter den tiende guruen?",[("Guru Gobind Singh",False),("Den hellige skriften Guru Granth Sahib",True),("Dalai Lama",False),("En ny levende guru velges hvert år",False)],
  "Guru Gobind Singh erklærte at lederskapet ikke skulle gå videre til en person -- i stedet ble den hellige skriften Guru Granth Sahib sikhenes evige guru."),
 ("Hva er de tre grunnpilarene Guru Nanak ga?",[("Faste, bønn og pilegrimsreise",False),("Naam Japna (minnes Gud), Kirat Karni (ærlig arbeid) og Vand Chakna (dele med andre)",True),("Kesh, kangha og kara",False),("Tro, håp og kjærlighet",False)],
  "Guru Nanaks tre grunnpilarer er Naam Japna (minnes Gud), Kirat Karni (ærlig arbeid) og Vand Chakna (å dele med andre)."),
]),

("text","""## Gurdwaraen og langar -- likhet i praksis

Sikhenes hellige sted heter **gurdwara**, som betyr «guruens dør». Her står den hellige skriften, og det holdes *kirtan* (sang av hymner med musikk), *ardas* (felles bønn) og *hukamnama* (dagens budskap fra skriften). Gurdwaraen har som regel fire dører som symboliserer at alle er velkomne fra alle retninger. Reglene viser religionens kjerneverdi: alle dekker hodet som tegn på respekt, alle sitter på gulvet -- ingen troner eller spesialplasser -- og stedet er åpent for alle, uansett religion eller status. Det helligste stedet er **Det gylne tempel** (Harmandir Sahib) i Amritsar, bygget midt i en hellig innsjø.

Den kanskje mest kjente sikh-tradisjonen er **langar** -- et felles, gratis måltid som serveres til alle som besøker en gurdwara. Prinsippene er sterke: maten er gratis for alle, rik som fattig, sikh som ikke-sikh; alle sitter side om side på gulvet; maten er vegetarisk så alle kan spise uansett matregler; og den lages og serveres av frivillige (*seva*). Langar ble innført av de tidlige guruene nettopp for å bryte ned kastesystemet -- når alle sitter på gulvet og spiser den samme maten, finnes ingen hierarkier. Det var revolusjonerende i et samfunn med streng kasteinndeling. I dag serverer Det gylne tempel gratis mat til over 100 000 mennesker hver eneste dag -- verdens største gratis kjøkken -- og under kriser reiser sikher ut med mobile langar-kjøkken."""),

("quiz","Test deg selv på gurdwara og langar:",[
 ("Hva er langar?",[("Et hellig sverd",False),("Et felles, gratis måltid der alle sitter side om side",True),("En bønn",False),("Et etternavn",False)],
  "Langar er et felles, gratis måltid i gurdwaraen der alle -- rik og fattig, sikh og ikke-sikh -- sitter side om side på gulvet og spiser samme mat."),
 ("Hvorfor ble langar innført?",[("For å spare penger",False),("For å bryte ned kastesystemet ved å la alle spise likt, side om side",True),("For å tiltrekke turister",False),("For å feire høytider",False)],
  "Langar ble innført av de tidlige guruene for å bryte ned kastesystemet -- når alle spiser samme mat på gulvet, finnes ingen hierarkier."),
]),

("text","""## De fem K-ene og likhet som kjerneverdi

I 1699 grunnla Guru Gobind Singh **Khalsa**-fellesskapet -- de «rene» sikhene som forplikter seg til å leve etter strenge prinsipper. Khalsa-sikher bærer fem synlige symboler, alle med navn på K. *Kesh* er uklippet hår, en gave fra Gud, som dekkes med turban (*dastar*) som tegn på verdighet. *Kangha* er en liten trekam som symboliserer renhet og orden. *Kara* er et stålarmband som symboliserer Guds evighet -- ringen har verken begynnelse eller slutt. *Kachera* er et bomullsunderplagg som står for selvkontroll. Og *kirpan* er et kort seremonielt sverd som symboliserer mot og plikten til å beskytte de svake -- det er ikke et angrepsvåpen, men et symbol på rettferdighet. Khalsa-medlemmer gjennomgår *amrit-seremonien*; menn tar etternavnet **Singh** («løve») og kvinner **Kaur** («prinsesse»), og de avstår fra tobakk, alkohol og rusmidler.

Bak alt dette ligger sikhismens aller viktigste verdi: **likhet**. Guru Nanak avviste kastesystemet, langar brøt kastenormene, og felles etternavn fjernet kasteidentitet. Likhet gjelder også mellom kjønnene -- Nanak spurte: «Hvordan kan man kalle kvinner lavere, de som føder konger?» Kvinner kan lede gudstjenester og lese fra skriften på lik linje med menn. Den siste kjerneverdien er **seva** -- uselvisk tjeneste, gjort uten å forvente noe tilbake, enten det er langar-arbeid eller hjelp i nærmiljøet. I kriser reiser sikh-organisasjoner verden over for å hjelpe. Det bor flere tusen sikher i Norge, med gurdwaraer i blant annet Oslo, Drammen og Lier, og turbanbruk har vært tema i norske debatter om religionsfrihet."""),

("quiz","Test deg selv på de fem K-ene og likhet:",[
 ("Hva symboliserer kirpan, det seremonielle sverdet?",[("Et angrepsvåpen",False),("Mot og plikten til å beskytte de svake",True),("Rikdom",False),("En kaste",False)],
  "Kirpan er ikke et angrepsvåpen, men et symbol på mot og plikten til å beskytte de svake og stå for rettferdighet."),
 ("Hvilke etternavn tar Khalsa-sikher?",[("Singh for menn, Kaur for kvinner",True),("Nanak for alle",False),("Khalsa for alle",False),("De beholder familienavnet sitt",False)],
  "I Khalsa tar menn etternavnet Singh («løve») og kvinner Kaur («prinsesse») -- et selvstendig navn som fjerner kasteidentitet."),
 ("Hva er seva i sikhismen?",[("En pilegrimsreise",False),("Uselvisk tjeneste, gjort uten å forvente noe tilbake",True),("Et hellig skrift",False),("En meditasjonsteknikk",False)],
  "Seva betyr uselvisk tjeneste -- en religiøs plikt som gjøres uten å forvente noe igjen, for eksempel langar-arbeid eller hjelp i nærmiljøet."),
]),

("summary","""## Oppsummering

Sikhismen er en selvstendig religion med sterke verdier. Guru Nanak grunnla den med budskap om én Gud (Ik Onkar) og likhet mellom alle mennesker, og de ti guruene formet religionen over nesten 240 år. Etter den tiende guruen ble den hellige skriften Guru Granth Sahib sikhenes evige guru.

Gurdwaraen er åpen for alle, og langar -- det felles, gratis kjøkkenet der alle spiser side om side -- bryter ned kastetenkning i praksis. De fem K-ene er identitetsmarkører for Khalsa-sikher, og likhet og seva (tjeneste) er kjerneverdier. Sikher finnes i over 30 land, inkludert Norge."""),
])

# ===== 3.4 Østlige religioner i Vesten =====
add("krle-9-3-4",
"En fortelling om hvordan yoga, meditasjon og mindfulness kom til Vesten -- og om den vanskelige grensen mellom respektfull kulturutveksling og kulturell appropriasjon.",
33,
[
("intro","""## Fra Himalaya til treningssenteret

Yogamatte i sekken, mindfulness-app på telefonen, en Buddha-statue i hagen. Østlige religiøse praksiser er overalt i Vesten i dag. Men har du tenkt på hvordan de kom hit? Hva skjer egentlig når religiøse tradisjoner krysser kulturgrenser -- og når blir respektfull deling til noe problematisk?

Interessen er ikke ny. På 1800-tallet oversatte europeiske forskere hinduistiske og buddhistiske tekster, og filosofer som Schopenhauer ble inspirert av Upanishadene. I 1893 holdt **Swami Vivekananda** en berømt tale om hinduisme i Chicago. På 1950- og 60-tallet populariserte Beat-forfattere zen, og The Beatles reiste til India for å meditere. Fra 1970-tallet ble bevegelser som Hare Krishna synlige, og på 2000-tallet ble yoga og mindfulness hverdagsfenomener -- med apper som Headspace og Calm og mindfulness i skoler og helsevesen. I dette kapittelet skal vi utforske dette møtet mellom øst og vest, og den vanskelige balansen det krever."""),

("text","""## Yoga og mindfulness -- forvandlet på veien

Yoga er kanskje det tydeligste eksempelet på hvordan en østlig praksis er blitt forvandlet i Vesten. I India er yoga et helhetlig system for åndelig utvikling -- meditasjon, etikk, filosofi og fysiske øvelser sammen, med moksha eller samadhi som mål, tradisjonelt lært i et guru-elev-forhold. I Vesten ligger hovedfokuset på de fysiske øvelsene (*asanaer*) og pusteøvelsene, ofte markedsført som trening og stressreduksjon, med «merkevareyoga» som hot yoga og power yoga, og en milliardindustri av yogaklær. Den åndelige dimensjonen er ofte nedtonet. Personer som B.K.S. Iyengar og Pattabhi Jois spredte yoga til Vesten. I Norge finnes hundrevis av yogastudioer, og for de fleste nordmenn er yoga primært trening og avslapning, ikke en religiøs praksis.

**Mindfulness** har gjennomgått en lignende forvandling. Tradisjonelt er det en del av den buddhistiske åttefoldige veien («riktig oppmerksomhet»), praktisert sammen med etikk og visdom, med innsikt og frigjøring som mål. Den vestlige varianten oppsto da **Jon Kabat-Zinn** grunnla MBSR (Mindfulness-Based Stress Reduction) i 1979 og bevisst fjernet de religiøse elementene for å gjøre praksisen tilgjengelig for alle. I dag brukes mindfulness i helsevesenet mot stress, angst og smerte, med dokumentert effekt, og i skoler for konsentrasjon. Store selskaper som Google og Apple tilbyr kurs til ansatte -- men kritikere kaller dette «McMindfulness», fordi en dyp åndelig praksis reduseres til et verktøy for profitt. Flere norske skoler har også innført enkle mindfulness-øvelser."""),

("quiz","Test deg selv på yoga og mindfulness i Vesten:",[
 ("Hva er hovedforskjellen mellom yoga i India og yoga i Vesten?",[("Det er ingen forskjell",False),("I India er yoga et helhetlig åndelig system; i Vesten ligger fokus oftest på fysisk trening",True),("I Vesten er yoga forbudt",False),("I India brukes yoga bare som trening",False)],
  "I India er yoga et helhetlig system for åndelig utvikling, mens den vestlige varianten ofte fokuserer på fysiske øvelser og markedsføres som trening og stressreduksjon."),
 ("Hva gjorde Jon Kabat-Zinn med mindfulness?",[("Forbød den",False),("Grunnla MBSR i 1979 og fjernet bevisst de religiøse elementene for å gjøre den tilgjengelig for alle",True),("Gjorde den til en ny religion",False),("Oppfant koaner",False)],
  "Jon Kabat-Zinn grunnla MBSR (Mindfulness-Based Stress Reduction) i 1979 og fjernet de religiøse elementene, slik at mindfulness kunne brukes i helsevesen og skoler."),
 ("Hva menes med «McMindfulness»?",[("En sunn versjon av mindfulness",False),("Kritikk av at en dyp åndelig praksis reduseres til et verktøy for profitt",True),("Mindfulness servert på restaurant",False),("En type yoga",False)],
  "«McMindfulness» er en kritikk av at en dyp åndelig praksis reduseres til et verktøy for produktivitet og profitt, løsrevet fra sin opprinnelige sammenheng."),
]),

("text","""## Når grensen blir uklar -- utveksling eller appropriasjon?

Møtet mellom øst og vest reiser et viktig spørsmål: når er det respektfull **kulturutveksling**, og når blir det **kulturell appropriasjon**? Kulturutveksling er gjensidig deling der begge sider lærer av hverandre og viser respekt. Kulturell appropriasjon er når elementer fra en kultur tas ut av sin opprinnelige sammenheng av en dominerende kultur, ofte uten forståelse eller respekt for den opprinnelige betydningen. Forskjellen handler om maktforhold, om det vises respekt, om opprinnelsen anerkjennes, og om det er gjensidig eller ensidig.

Noen eksempler viser spenningsfeltet. Yoga gir millioner bedre helse, og mange vestlige lærere studerer i India med respekt -- men yoga kan også reduseres til ren trening i en milliardindustri der indiske utøvere ikke nødvendigvis tjener på det. OM-symbolet er hellig i hinduisme, buddhisme og sikhisme, men brukes i Vesten på t-skjorter og tatoveringer -- noe mange hinduer opplever som respektløst, som å bruke et kors som pynt. Buddha-statuer selges som hagedekorasjon, og bindien -- et hellig pannemerke -- brukes noen ganger som moteaccessoar på festivaler, slik at en kultur reduseres til et kostyme.

Men møtet har også mange positive sider. Yoga og meditasjon har dokumentert effekt på helse, og mindfulness gir folk verktøy for vanskelige følelser. Østlige religioner har ført til mer religiøs dialog -- Dalai Lama og Thich Nhat Hanh har inspirert på tvers av tradisjoner. Buddhistisk og hinduistisk respekt for alt liv inspirerer miljøbevegelsen, og *ahimsa* (ikke-vold) har påvirket vegetariske bevegelser. Det viktige prinsippet er at møtet må bygge på gjensidig respekt, kunnskap og anerkjennelse av opprinnelse. Poenget er ikke at man ikke kan praktisere yoga eller meditasjon -- men at man bør gjøre det med bevissthet om hvor det kommer fra."""),

("quiz","Test deg selv på utveksling og appropriasjon:",[
 ("Hva er forskjellen på kulturutveksling og kulturell appropriasjon?",[("Det finnes ingen forskjell",False),("Utveksling er gjensidig og respektfull; appropriasjon tar elementer ut av sin sammenheng uten respekt",True),("Appropriasjon er alltid bra",False),("Utveksling er forbudt",False)],
  "Kulturutveksling er gjensidig deling med respekt, mens kulturell appropriasjon tar elementer ut av sin opprinnelige sammenheng, ofte uten forståelse eller respekt."),
 ("Hvorfor kan bruk av OM-symbolet på t-skjorter oppleves som problematisk?",[("Det er ulovlig",False),("OM er et hellig symbol, og å bruke det som pynt kan oppleves respektløst",True),("Symbolet er hemmelig",False),("Det finnes ingen som bryr seg",False)],
  "OM er et hellig symbol i hinduisme, buddhisme og sikhisme. Å bruke det som pynt uten å forstå betydningen kan oppleves respektløst -- som å bruke et kors som dekorasjon."),
 ("Hva er nøkkelen til et positivt møte mellom østlige religioner og vestlig kultur?",[("Å unngå all kontakt",False),("Gjensidig respekt, kunnskap og anerkjennelse av opprinnelse",True),("Å kommersialisere mest mulig",False),("Å fjerne all opprinnelig betydning",False)],
  "Et positivt møte bygger på gjensidig respekt, kunnskap og anerkjennelse av hvor praksisene kommer fra -- ikke på å forby dem, men på å praktisere dem bevisst."),
]),

("summary","""## Oppsummering

Østlige religioner har fått stor innflytelse i Vesten. Interessen har vokst siden 1800-tallet, med en eksplosjon fra 1960-tallet. Yoga har gått fra et helhetlig åndelig system til en populær treningsform, og mindfulness brukes i helsevesen, skoler og arbeidsplasser etter at de religiøse elementene ble fjernet.

Kulturell appropriasjon oppstår når praksiser tas ut av sin sammenheng uten respekt, mens kulturutveksling skjer når det er gjensidig respekt og anerkjennelse. Møtet mellom øst og vest har mange positive sider -- bedre helse, religiøs dialog og miljøbevissthet -- men krever bevissthet om hvor praksisene kommer fra."""),
])

# ===== 3.5 Religion, kjønn og likestilling i østlige religioner =====
add("krle-9-3-5",
"En fortelling om kjønn og likestilling i hinduisme, buddhisme og sikhisme -- om mektige gudinner og patriarkat, om idealer og virkelighet, og om reformbevegelsene som kjemper innenfra.",
33,
[
("intro","""## Gudinner og glasstak

Her er et tilsynelatende paradoks: hinduismen dyrker noen av verdens mektigste gudinner -- krigergudinner, visdomsgudinner, selve urkraften i universet tenkes feminin -- og likevel har hinduistiske samfunn også hatt sterke patriarkalske tradisjoner. Hvordan henger det sammen?

Slike spenninger finner vi i alle de østlige religionene. Har hinduismen, buddhismen og sikhismen fremmet likestilling, eller bidratt til undertrykkelse? Svaret er sjelden enten-eller. Som i alle religioner finnes et spenningsfelt mellom idealer og praksis, mellom gamle tekster og moderne tolkning. I dette kapittelet ser vi nærmere på kjønn og likestilling i de tre religionene -- og på reformbevegelsene som kjemper for endring innenfra."""),

("text","""## Hinduisme og buddhisme -- mektige idealer, sammensatt praksis

Hinduismen har et paradoksalt forhold til kjønn. På den ene siden de mektige **gudinnene**: Durga og Kali som bekjemper ondskap, Lakshmi for velstand, Saraswati for kunnskap, og Shakti -- den feminine urkraften som driver hele universet. I shaktisme dyrkes det guddommelige primært i feminin form. Tekstene viser samme spenning: Vedaene rommer kvinnelige filosofer som Gargi og Maitreyi, og Bhagavadgita sier at alle, uansett kaste og kjønn, kan nå Gud. Men Manus lovbok (ca. 200 f.Kr.) inneholder strenge regler som underordner kvinner mannen livet gjennom. Problematiske tradisjoner har inkludert *sati* (enkeofring, nå forbudt), medgiftsystemet, og en dobbel diskriminering for kvinner i lavere kaster. Reformatorer som Ram Mohan Roy kjempet mot sati og for kvinners utdanning, og moderne hinduistiske feminister tolker gudinnene som modeller for kvinnelig styrke.

Også **buddhismen** viser et sammensatt bilde. Buddha var på mange måter revolusjonerende: han sa at kvinner kan oppnå oppvåkning på lik linje med menn, grunnla en nonneorden, og flere av hans fremste elever var kvinner. Men i praksis fikk nonner strengere regler enn munker (åtte ekstra regler), nonneordenen ble avbrutt i flere theravada-land, og menn har dominert som lærere, særlig i tibetansk buddhisme. Det skjer endringer: theravada-nonnevigslingen ble gjenopptatt i 1998, Dalai Lama har uttalt at neste Dalai Lama kan bli en kvinne, og nonner som Jetsunma Tenzin Palmo kjemper for nonners rettigheter. Buddhistisk filosofi sier dessuten at «selvet» -- inkludert kjønnsidentitet -- ikke er fast, noe enkelte moderne buddhister bruker til å tenke åpent om kjønn."""),

("quiz","Test deg selv på hinduisme og buddhisme:",[
 ("Hva er det paradoksale ved hinduismens forhold til kjønn?",[("Den har ingen gudinner",False),("Den har mektige gudinner, men også sterke patriarkalske tradisjoner",True),("Den forbyr kvinner å be",False),("Den har bare kvinnelige prester",False)],
  "Hinduismen dyrker mektige gudinner som Durga og Shakti, men har samtidig hatt sterke patriarkalske tradisjoner -- et spenningsfelt mellom ideal og praksis."),
 ("Hva var revolusjonerende ved Buddhas syn på kvinner?",[("At han forbød kvinner å meditere",False),("At han sa kvinner kan oppnå oppvåkning på lik linje med menn og grunnla en nonneorden",True),("At han bare hadde mannlige elever",False),("At han avviste alle kvinner",False)],
  "Buddha sa at kvinner kan oppnå oppvåkning (nirvana) på lik linje med menn og grunnla en nonneorden -- uvanlig på hans tid. I praksis fikk nonner likevel strengere regler enn munker."),
]),

("text","""## Sikhisme -- og gapet mellom ideal og virkelighet

Av de østlige religionene har **sikhismen** kanskje det sterkeste grunnlaget for likestilling. Guru Nanak spurte direkte: «Hvordan kan man kalle kvinner lavere, de som føder konger?» Han fordømte skikker som sati og slørbruk, og kvinner fikk rett til å lede gudstjenester og resitere fra Guru Granth Sahib. Den hellige skriften inneholder hymner skrevet av kvinner, bruker feminine bilder for det guddommelige, og fordømmer kjønnsdiskriminering. I Khalsa får kvinner det selvstendige etternavnet Kaur, kan gjennomgå innvielsen og bære alle de fem K-ene på lik linje med menn.

Likevel henger praksis ikke alltid etter idealene. Punjab-regionen har hatt problemer med jentediskriminering og kjønnsselektiv abort, tradisjonelle kjønnsroller lever videre i mange familier, og kvinner er underrepresentert i ledelsen av gurdwaraer. Mange sikh-organisasjoner arbeider aktivt for likestilling, og unge sikher i diasporaen -- også i Norge -- jobber for å realisere religionens idealer i praksis.

Dette peker mot en viktig lærdom: det er ofte et **gap mellom hva tekstene sier og hvordan religionene faktisk praktiseres**. Flere faktorer forklarer dette. Patriarkalske kulturer former tolkningen, fordi religioner alltid praktiseres i en kulturell kontekst. Den som har makt til å *tolke* tekstene, påvirker hva de «betyr» -- og det har ofte vært menn. Man kan lese selektivt og fremheve de delene som støtter ens eget syn. Og religioner er ikke statiske; synet på kjønn endrer seg over tid. Når vi diskuterer kjønn og religion, er det viktig å ikke generalisere, å skille mellom religion og kultur, å anerkjenne endring, å se innenfra -- mange av de sterkeste stemmene for likestilling kommer fra religionene selv -- og å unngå vestlig overlegenhet, for også vestlige samfunn har utfordringer med likestilling."""),

("quiz","Test deg selv på sikhisme og ideal vs. virkelighet:",[
 ("Hvorfor sies sikhismen å ha et sterkt grunnlag for likestilling?",[("Fordi kvinner ikke får delta i religionen",False),("Fordi Guru Nanak fordømte kvinneundertrykkelse og kvinner kan lede gudstjenester og bære de fem K-ene",True),("Fordi bare kvinner kan være guruer",False),("Fordi menn og kvinner lever adskilt",False)],
  "Guru Nanak fordømte skikker som sati, og kvinner kan lede gudstjenester, resitere fra skriften og bære de fem K-ene på lik linje med menn."),
 ("Hva menes med «gapet mellom ideal og virkelighet»?",[("At religiøse tekster ikke finnes",False),("At det ofte er forskjell på hva tekstene sier og hvordan religionen faktisk praktiseres",True),("At alle religioner er like",False),("At idealer alltid følges perfekt",False)],
  "Gapet handler om at det ofte er forskjell på religionens likestillingsidealer i tekstene og den faktiske praksisen, formet av kultur, makt og selektiv tolkning."),
 ("Hvorfor er det viktig å skille mellom religion og kultur i dette temaet?",[("Fordi de er det samme",False),("Fordi noe som fremstilles som religiøst, egentlig er kulturelt",True),("Fordi kultur ikke betyr noe",False),("Fordi religion alltid er undertrykkende",False)],
  "Mye av det som fremstilles som religiøst, er egentlig kulturelt. Å skille mellom de to hjelper oss å unngå generalisering og forstå nyansene."),
]),

("summary","""## Oppsummering

Kjønn og likestilling i østlige religioner viser et sammensatt bilde. Hinduismen har mektige gudinner, men også patriarkalske tradisjoner, og reformbevegelser kjemper for endring. Buddhismen ga kvinner tilgang til oppvåkning, men nonner har historisk fått strengere regler enn munker -- noe moderne bevegelser arbeider mot. Sikhismen har likestilling som kjerneverdi, men praksis henger ikke alltid med idealene.

I alle tre religioner finnes et gap mellom idealer og virkelighet, formet av kultur, makt og selektiv tolkning. Reformbevegelser innenfra religionene kjemper for likestilling og finner støtte i sine egne grunntekster. Det er viktig å skille mellom religion og kultur, unngå generalisering, og huske at også vestlige samfunn har utfordringer med likestilling."""),
])

print(f"\nBATCH3 TOTAL: {T} quizzes, {Q} questions")
