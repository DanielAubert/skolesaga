import sys
sys.path.insert(0, "/Users/danielandreasaubert/eksamenssett/Skolesaga/.narrativ-build")
from builder import build
T=0;Q=0
def add(*a):
    global T,Q
    nq,nqs=build(*a); T+=nq; Q+=nqs

# ===== 2.1 Islamsk tro og praksis i dybden =====
add("krle-9-2-1",
"En fortelling om islam under overflaten av de fem søylene -- om Guds enhet, rettslæren fiqh, sufismens mystikk og mangfoldet som gjør islam i Indonesia ulik islam i Saudi-Arabia.",
38,
[
("intro","""## Mer enn fem søyler

De fleste har hørt om islams fem søyler -- trosbekjennelsen, bønnen, almissen, fasten og pilegrimsreisen. Men tenk deg at du bare kjente fasaden på et hus og trodde du visste alt om bygningen. De fem søylene er fasaden. Bak dem ligger et helt byggverk av teologi, rettslære, mystikk og filosofi som har vokst fram gjennom mer enn 1400 år.

Islam er verdens nest største religion med rundt 1,8 milliarder tilhengere. I dette kapittelet skal vi gå dypere: hvordan forstår islam Gud? Hvordan fungerer rettslæren *fiqh*? Hva er sufisme? Og hvorfor ser islam så ulik ut fra land til land? La oss begynne med selve grunnsteinen -- tanken om at Gud er én."""),

("text","""## Tawhid -- alt bygger på Guds enhet

Det mest grunnleggende i islamsk teologi er **tawhid**: Guds absolutte enhet. Gud (Allah) er én, unik og uten sidestykke. Det finnes ingen andre guder, Gud har ingen partnere eller barn, og ingenting kan sammenlignes med Gud. Den motsatte synden -- å tilskrive Gud partnere eller likestille noe med ham -- kalles *shirk* og regnes som den verste synden i islam.

Islamsk teologi balanserer to sider ved Gud. På den ene siden **transcendensen**: Gud er totalt annerledes enn skapningen, ingen kan se ham, og som sura 112 sier: «Han har ikke avlet, og er ikke blitt avlet. Og ingen er Hans like.» På den andre siden **nærheten**: Koranen sier at Gud er nærmere mennesket enn dets egen halspulsåre (50,16), at han hører bønner og er barmhjertig. I tradisjonen har Gud 99 vakre navn -- Den barmhjertige, Den nådige, Den allvitende -- som brukes i bønn.

Muslimsk tro hviler også på **de seks trosartiklene**: troen på Allah, på englene (Jibril er den viktigste), på de åpenbarte skriftene (Koranen, men også Toraen og Evangeliet), på profetene (fra Adam til Muhammad, som er «profetenes segl»), på dommedag, og på Guds forutbestemmelse (*qadr*) -- at Gud vet alt, men at mennesker likevel har ansvar for sine valg."""),

("quiz","Test deg selv på islamsk teologi:",[
 ("Hva betyr tawhid?",[("Guds absolutte enhet",True),("De fem søylene",False),("Pilegrimsreisen til Mekka",False),("Profeten Muhammads liv",False)],
  "Tawhid er læren om Guds absolutte enhet -- at Gud er én, unik og uten sidestykke. Alt i islam bygger på dette."),
 ("Hva er shirk?",[("En av de fem søylene",False),("Å tilskrive Gud partnere eller likestille noe med Gud",True),("Et annet ord for bønn",False),("En sufisk meditasjon",False)],
  "Shirk -- å tilskrive Gud partnere eller likestille noe med ham -- regnes som den verste synden i islam, det motsatte av tawhid."),
 ("Hvem er «profetenes segl» i islam?",[("Adam",False),("Jibril",False),("Muhammad",True),("Jesus",False)],
  "Muhammad regnes som «profetenes segl» -- den siste i en lang rekke profeter fra Adam og framover."),
]),

("text","""## Sharia og fiqh -- ideal og menneskelig tolkning

For å forstå islam i praksis må man skille mellom to begreper som ofte blandes sammen. **Sharia** betyr bokstavelig «veien til vannkilden» og er Guds vilje for menneskene slik den uttrykkes i Koranen og profetens eksempel. Sharia er idealet -- den guddommelige veien. **Fiqh** er derimot menneskers forsøk på å forstå og anvende sharia. Skillet er viktig: sharia regnes som guddommelig og ufeilbarlig, mens fiqh er menneskelig, og derfor feilbarlig og foranderlig. Fiqh dekker alt fra bønn og faste til ekteskap, arv og forretningsliv.

Fiqh bygger på fire kilder: Koranen (den høyeste autoriteten), sunna/hadith (profetens ord og handlinger), *ijma* (konsensus blant lærde) og *qiyas* (analogisk resonnering, der man løser nye spørsmål ved å sammenligne dem med lignende, allerede besvarte). Innenfor sunni-islam finnes fire **rettsskoler** (madhhab): *hanafi* (mest utbredt, fleksibel, dominerer i Tyrkia og Sentral-Asia), *maliki* (Nord- og Vest-Afrika), *shafii* (Sørøst-Asia, Egypt) og *hanbali* (mest konservativ, Saudi-Arabia). De anerkjenner hverandre som gyldige, selv om de noen ganger kommer til ulike svar.

En viktig drivkraft for fornyelse er **ijtihad** -- «selvstendig resonnering», der lærde bruker fornuft og kunnskap til å tolke kildene og finne svar på nye spørsmål. Noen mener at «ijtihads port» ble lukket rundt 1200-tallet, mens andre mener at ijtihad er en vedvarende nødvendighet -- særlig i møte med moderne spørsmål som bioetikk og digital finans."""),

("quiz","Test deg selv på fiqh og sharia:",[
 ("Hva er forskjellen på sharia og fiqh?",[("De er det samme",False),("Sharia er Guds ideal, fiqh er menneskers tolkning av det",True),("Fiqh er guddommelig, sharia er menneskelig",False),("Begge er bare moderne begreper",False)],
  "Sharia er Guds vilje (idealet, ufeilbarlig), mens fiqh er menneskers feilbarlige tolkning av hvordan sharia skal anvendes."),
 ("Hvor mange rettsskoler finnes i sunni-islam?",[("Én",False),("To",False),("Fire",True),("Tolv",False)],
  "Sunni-islam har fire rettsskoler: hanafi, maliki, shafii og hanbali. De anerkjenner hverandre som gyldige tolkninger."),
 ("Hva er ijtihad?",[("En pilegrimsreise",False),("Selvstendig resonnering for å tolke kildene og løse nye spørsmål",True),("Et forbud mot rente",False),("En sufisk dans",False)],
  "Ijtihad er selvstendig resonnering -- lærdes bruk av fornuft til å tolke kildene, en viktig drivkraft for fornyelse i islamsk tenkning."),
]),

("text","""## Sufismen -- islams indre vei

Mens fiqh handler om de ytre reglene for et riktig liv, handler **sufisme** (*tasawwuf*) om det indre: å rense hjertet, nærme seg Gud og oppleve guddommelig kjærlighet. Sufisme er ikke en egen sekt, men en åndelig tradisjon som finnes innenfor både sunni- og shia-islam. Sufier søker en direkte, personlig forbindelse med Gud som går utover det regelbaserte.

Noen sentrale begreper hjelper oss å forstå sufismen. *Dhikr* er repetisjon av Guds navn og bønn, ofte i fellesskap. *Tariqa* er den åndelige veien en sufi følger, ledet av en mester (sheikh). *Fana* er «utslettelse» av egoet, der sufien mister seg selv i Guds nærvær. Og *mahabba* -- guddommelig kjærlighet -- er det viktigste motivet i sufisk fromhet. Blant de mest kjente sufiene er poeten **Rumi** (1207--1273), grunnlegger av de dansende dervisjenes orden, hvis dikt om guddommelig kjærlighet leses over hele verden, og **Rabia al-Adawiyya** (ca. 717--801), en kvinnelig mystiker som lærte at man skal elske Gud uten håp om paradis eller frykt for helvete.

Sufisme har millioner av tilhengere, særlig i Nord-Afrika, Tyrkia, Sør-Asia og Indonesia. Sufiske praksiser som dhikr, musikk og dans har inspirert mennesker langt utenfor islam. Men sufismen møter også kritikk: noen konservative og salafistiske muslimer mener at praksiser som helgendyrking ved sufi-helligdommer er innovasjoner (*bida*) uten grunnlag i Koranen og sunna."""),

("quiz","Test deg selv på sufisme og mangfold:",[
 ("Hva er sufisme?",[("En politisk bevegelse",False),("Islams mystiske dimensjon, om indre gudsopplevelse og kjærlighet",True),("En av de fire rettsskolene",False),("Et forbud mot musikk",False)],
  "Sufisme (tasawwuf) er islams mystiske dimensjon, som handler om å rense hjertet, nærme seg Gud og oppleve guddommelig kjærlighet."),
 ("Hvem var Rumi?",[("En rettslærd som grunnla hanafi-skolen",False),("En persisk sufi-poet kjent for dikt om guddommelig kjærlighet",True),("En profet før Muhammad",False),("Grunnleggeren av wahhabismen",False)],
  "Rumi (1207--1273) var en persisk sufi-poet og mystiker, grunnlegger av Mevlevi-ordenen (de dansende dervisjene)."),
 ("Hva viser at islam ikke er ensartet?",[("At alle muslimer tolker islam likt",False),("At islam i Indonesia, Saudi-Arabia og Senegal kan se svært ulik ut",True),("At det bare finnes én rettsskole",False),("At sufisme er forbudt overalt",False)],
  "Lokale kulturer, tradisjoner og tolkningsskoler gjør at islam praktiseres svært ulikt fra land til land -- et tegn på religionens indre mangfold."),
]),

("summary","""## Oppsummering

Islamsk tro bygger på tawhid -- Guds absolutte enhet. De seks trosartiklene og de fem søylene er kjernen, men bak dem ligger et rikt system av teologi, rettslære og mystikk. Rettslæren fiqh er menneskers forsøk på å forstå Guds vilje (sharia) i praksis, og de fire sunni-rettsskolene representerer ulike tolkninger som anerkjenner hverandre. Ijtihad -- selvstendig resonnering -- har drevet fornyelse gjennom historien.

Sufismen er islams mystiske dimensjon, med vekt på indre gudsopplevelse og kjærlighet; sufier som Rumi og Rabia har inspirert mennesker over hele verden. Til slutt rommer islam et enormt mangfold: lokale kulturer og tolkningsskoler gjør at islam i Indonesia ser annerledes ut enn i Saudi-Arabia eller i Norge -- og dette mangfoldet er en del av religionens rikdom."""),
])

# ===== 2.2 Sunni, shia og andre retninger =====
add("krle-9-2-2",
"En fortelling om islams mest kjente splittelse -- hvordan en strid om hvem som skulle lede etter Muhammad ble til sunni og shia, og hvorfor det meste forener dem mer enn det skiller.",
35,
[
("intro","""## En strid om arvefølgen

Da profeten Muhammad døde i år 632, etterlot han seg en blomstrende ny religion -- men ingen tydelig beskjed om hvem som skulle lede fellesskapet videre. Det høres kanskje ut som en liten detalj, men nettopp dette spørsmålet skulle bli opphavet til islams mest kjente splittelse: den mellom **sunni** og **shia**.

I dag utgjør sunni-muslimer 85--90 % av verdens muslimer, mens shia utgjør 10--15 %. Men hva handler skillet egentlig om? Og finnes det andre retninger? La oss følge historien fra Muhammads død og fram til dagens verdenskart -- og se at det er langt mer som forener de to enn som skiller dem."""),

("text","""## Splittelsen som begynte med et lederskapsspørsmål

Da Muhammad døde, oppsto to hovedsyn på hvem som skulle bli leder, *kalif*, for fellesskapet. De som ble **sunni-muslimer** mente at lederen burde velges blant de mest kompetente av profetens følgesvenner. De støttet Abu Bakr, Muhammads svigerfar og nære venn, som første kalif. Etter ham fulgte Umar, Uthman og til slutt Ali. Navnet sunni kommer av *ahl al-sunna* -- «folket av profetens tradisjon».

De som ble **shia-muslimer** mente derimot at lederskapet burde gå til Muhammads familie, nærmere bestemt Ali ibn Abi Talib, Muhammads fetter og svigersønn. De kalte seg *shi'at Ali*, «Alis parti», forkortet til shia. Den hendelsen som for alltid forseglet splittelsen, var **slaget ved Karbala i 680**. Husayn, sønn av Ali og barnebarn av Muhammad, reiste seg mot kalifen Yazid, som shia anså som en illegitim hersker. Husayn og hans lille følge ble omringet og drept. Husayns martyrium ble en grunnfortelling i shia-islam og minnes hvert år gjennom **Ashura** -- en dag for sorg, prosesjon og erindring.

Det er viktig å huske at splittelsen opprinnelig var *politisk* -- et spørsmål om hvem som skulle lede. Først over tid utviklet den seg til å omfatte teologiske, juridiske og rituelle forskjeller."""),

("quiz","Test deg selv på splittelsens opprinnelse:",[
 ("Hva handlet splittelsen mellom sunni og shia opprinnelig om?",[("Hvordan man skal be",False),("Hvem som skulle lede fellesskapet etter Muhammad",True),("Om Koranen er Guds ord",False),("Om man skal faste i ramadan",False)],
  "Splittelsen var opprinnelig politisk: en uenighet om hvem som skulle bli leder (kalif) etter Muhammads død i 632."),
 ("Hvem mente shia-muslimene burde lede etter Muhammad?",[("Abu Bakr",False),("Ali ibn Abi Talib og Muhammads familie",True),("Yazid",False),("Umar",False)],
  "Shia mente lederskapet burde gå til Muhammads familie, nærmere bestemt Ali, hans fetter og svigersønn. «Shia» kommer av shi'at Ali."),
 ("Hva minnes shia-muslimer gjennom Ashura?",[("Muhammads fødsel",False),("Husayns martyrium ved Karbala",True),("Pilegrimsreisen til Mekka",False),("Koranens åpenbaring",False)],
  "Ashura er en dag for sorg og erindring av Husayns martyrium i slaget ved Karbala i 680 -- en grunnfortelling i shia-islam."),
]),

("text","""## Hva skiller -- og hva forener

Sunni og shia deler det aller meste: begge anerkjenner Koranen, de fem søylene, profeten Muhammad og de grunnleggende trosprinsippene. Forskjellene handler først og fremst om **lederskap og autoritet**. Hos sunnier ligger religiøs autoritet hos de lærde (*ulama*) som tolker kildene. Hos shia tilhører lederskapet *imamer* fra Alis slekt, som anses å ha spesiell guddommelig veiledning. I tolvershia regnes tolv imamer som ufeilbarlige i religiøse spørsmål; den tolvte gikk ifølge tradisjonen i «okkultasjon» og vil vende tilbake som **Mahdi** (den rettledede) ved verdens ende.

Det finnes også praktiske forskjeller. Shia kan kombinere noen daglige bønner og be tre ganger i stedet for fem, de praktiserer *taqiyya* (rett til å skjule troen ved forfølgelse), og pilegrimsreiser til imamenes graver i Karbala, Najaf og Mashhad er viktige. Sunni og shia bruker delvis ulike hadith-samlinger og ulik rettslære -- sunnier følger en av fire rettsskoler, mens tolvershia følger jafari-skolen. I shia-islam har høytstående lærde (ayatollaher) spesiell autoritet, og troende velger en *marja* de følger i religiøse spørsmål.

Men igjen: det forener mer enn det skiller. I 2004 signerte over 200 lærde fra begge retninger **Amman-budskapet**, som anerkjente gyldigheten av alle store islamske retninger og fordømte *takfir* -- å erklære andre muslimer som vantro. Shia finnes i flere former: **tolvershia** (Iran, Irak, Libanon), **ismailittene** (deler av Asia og Øst-Afrika) og **zaidittene** (Jemen). Shia-islam er statsreligion i Iran."""),

("quiz","Test deg selv på forskjeller og likheter:",[
 ("Hvem har religiøs autoritet i shia-islam?",[("Bare valgte kalifer",False),("Imamer fra Alis slekt, ansett som guddommelig veiledet",True),("Paven",False),("Bare den enkelte troende",False)],
  "I shia-islam ligger autoriteten hos imamer fra Alis slekt, som anses å ha spesiell guddommelig veiledning. I tolvershia regnes tolv imamer som ufeilbarlige."),
 ("Hva slo Amman-budskapet (2004) fast?",[("At shia ikke er ekte muslimer",False),("At alle store islamske retninger er gyldige, og fordømte takfir",True),("At alle må følge hanafi-skolen",False),("At sufisme er forbudt",False)],
  "Amman-budskapet, signert av over 200 lærde fra begge retninger, anerkjente alle store islamske retninger og fordømte å erklære andre muslimer som vantro (takfir)."),
]),

("text","""## Andre retninger -- og når religion blir politikk

Utover hovedskillet finnes flere retninger. **Ibadisme** er verken sunni eller shia; den oppsto fra de tidlige kharijittene og dominerer i dag i Oman, kjent for moderat praksis og toleranse. **Salafisme** er en bevegelse innenfor sunni-islam som vil tilbake til de tre første generasjonene av muslimer (*al-salaf al-salih*) og tolke Koranen og hadith direkte, uten rettsskolenes filter; de fleste salafister er fredelige. **Wahhabisme** er den strengeste formen, grunnlagt på 1700-tallet i Saudi-Arabia, med vekt på streng monoteisme og avvisning av helgendyrking og sufiske ritualer. **Ahmadiyya**, grunnlagt i britisk India på 1800-tallet, avvises av de fleste muslimer fordi den hevder en ny profet etter Muhammad, og dens tilhengere forfølges flere steder.

Geografisk dominerer sunni i de fleste muslimske land -- Indonesia (verdens største muslimske land), Egypt, Tyrkia, Pakistan og Nigeria. Shia er flertallet i Iran, Irak, Bahrain og Aserbajdsjan. I mange land lever sunni og shia fredelig side om side. Men i regioner som Irak, Syria og Jemen har sekteriske spenninger ført til vold.

Her er et viktig poeng: slike konflikter handler sjelden *bare* om religion. Politikk, makt, økonomi og utenlandsk innblanding spiller ofte en like stor eller større rolle. Rivaliseringen mellom shia-dominerte Iran og sunni-dominerte Saudi-Arabia har preget Midtøstens politikk i tiår -- og begge bruker religion som et politisk verktøy."""),

("quiz","Test deg selv på andre retninger:",[
 ("Hvilken retning er verken sunni eller shia og dominerer i Oman?",[("Wahhabisme",False),("Ibadisme",True),("Ahmadiyya",False),("Sufisme",False)],
  "Ibadisme er en tredje retning, verken sunni eller shia, som dominerer i Oman og er kjent for moderat praksis."),
 ("Hvorfor handler sunni-shia-konflikter sjelden bare om religion?",[("Fordi religion er uviktig",False),("Fordi politikk, makt og geopolitikk ofte spiller en like stor rolle",True),("Fordi alle muslimer er enige om alt",False),("Fordi konfliktene aldri har skjedd",False)],
  "Sekteriske konflikter handler sjelden bare om teologi -- politikk, makt, økonomi og utenlandsk innblanding spiller ofte en like stor eller større rolle."),
]),

("summary","""## Oppsummering

Splittelsen mellom sunni og shia oppsto etter Muhammads død i 632 som en uenighet om lederskap. Sunni støttet valget av Abu Bakr som kalif, mens shia mente Ali var den rettmessige lederen. Slaget ved Karbala i 680, der Husayn ble drept, ble en grunnfortelling i shia-islam.

Sunni (85--90 %) og shia (10--15 %) deler det meste av sin tro, men skiller seg i synet på lederskap, autoritet og visse praksiser. Andre retninger inkluderer ibadisme, salafisme, wahhabisme og Ahmadiyya, og sufisme finnes innenfor begge hovedretninger. Konflikter mellom sunni og shia handler sjelden bare om religion -- politikk og makt spiller ofte en like stor rolle. I store deler av verden lever sunni og shia fredelig side om side."""),
])

# ===== 2.3 Islam i den moderne verden =====
add("krle-9-2-3",
"En fortelling om islam i møte med moderniteten -- om modernister og tradisjonalister, om politisk islam, og om hva «europeisk islam» betyr for de 200 000 muslimene som bor i Norge.",
35,
[
("intro","""## Ett spørsmål, mange svar

Er islam forenlig med demokrati, menneskerettigheter og vitenskapelig tenkning? Spørsmålet diskuteres intenst -- både blant muslimer selv og i samfunnet ellers. Og svaret er kanskje overraskende: det finnes ikke ett svar.

Muslimer forholder seg til den moderne verden på mange ulike måter. Noen vil reformere islamsk tenkning for å møte nye utfordringer; andre mener at de tradisjonelle tolkningene holder. Noen ønsker at islam skal prege politikken, andre vil ha et skarpt skille mellom religion og stat. I dette kapittelet skal vi møte de viktigste strømningene -- islamsk modernisme, tradisjonalisme, politisk islam og europeisk islam -- og se hvordan de spiller seg ut helt fram til moskeene i Norge."""),

("text","""## Modernisme: å forene tro og modernitet

Fra midten av 1800-tallet sto den muslimske verden overfor europeisk kolonialisme og teknologisk overlegenhet. Mange tenkere begynte å spørre: hvorfor har den muslimske verden falt etter, og hvordan kan islam fornyes uten å miste sin identitet? Svaret ble **islamsk modernisme** -- en bevegelse som forsøker å forene islamsk tro med moderne verdier som demokrati, vitenskap, likestilling og menneskerettigheter.

Pionerer som **Jamal al-Din al-Afghani** og den egyptiske teologen **Muhammad Abduh** argumenterte for at islam og fornuft er forenlige, og at mange tradisjonelle tolkninger er menneskelige og kan revideres. Senere reformtenkere som **Fazlur Rahman** tok til orde for en kontekstuell lesning av Koranen -- å forstå tekstens ånd og intensjon, ikke bare ordlyden -- og **Amina Wadud** leste Koranen fra et feministisk perspektiv. Modernister mener at Koranen må leses i kontekst, at ijtihad må brukes aktivt, at islam er forenlig med demokrati og vitenskap, og at likestilling er i tråd med Koranens ånd.

Modernistene peker ofte tilbake på islams **gylne tidsalder** (ca. 800--1300), da den muslimske verden ledet verden i vitenskap, filosofi og matematikk. I Bagdads Visdomshus ble greske, persiske og indiske verk oversatt, og lærde som Ibn Sina i medisin og al-Khwarizmi i algebra var banebrytende. Dette viser, mener de, at islam og vitenskap kan forenes -- og at stagnasjon skyldtes politiske og sosiale forhold, ikke islam i seg selv. Et moderne eksempel er islamsk finans: fordi Koranen forbyr *riba* (rente), har det vokst fram en global industri verdt over 2 billioner dollar med shariah-kompatible banker."""),

("quiz","Test deg selv på modernisme:",[
 ("Hva er islamsk modernisme?",[("En bevegelse som forsøker å forene islam med demokrati, vitenskap og menneskerettigheter",True),("En avvisning av all moderne vitenskap",False),("Et annet ord for wahhabisme",False),("En bevegelse som vil avskaffe Koranen",False)],
  "Islamsk modernisme oppsto på 1800-tallet og forsøker å forene islamsk tro med moderne verdier gjennom kontekstuell lesning og aktiv bruk av ijtihad."),
 ("Hva var islams gylne tidsalder?",[("En periode med europeisk kolonisering",False),("En periode (ca. 800--1300) da den muslimske verden ledet i vitenskap og filosofi",True),("Tiden etter den iranske revolusjonen",False),("Et område i Saudi-Arabia",False)],
  "Den gylne tidsalder (ca. 800--1300) var da den muslimske verden ledet verden i vitenskap, filosofi, medisin og matematikk, med lærde som Ibn Sina og al-Khwarizmi."),
]),

("text","""## Tradisjonalisme og politisk islam

På den andre siden står **tradisjonalister og konservative** muslimer, som mener at de klassiske tolkningene -- de fire rettsskolene og klassisk teologi -- representerer en rikdom av kunnskap som ikke bør kastes over bord. De er skeptiske til radikal nytenkning, men aksepterer at tolkninger kan tilpasses nye situasjoner innenfor etablerte rammer. **Salafister** vil tilbake til de første generasjonene av muslimer, og **wahhabismen** er den strengeste formen, med stor innflytelse globalt gjennom Saudi-Arabias oljepenger. Men det er viktig å skille mellom konservativ religiøs praksis og ekstremisme: de aller fleste konservative muslimer er fredelige mennesker som ønsker å leve i tråd med sin tro.

**Politisk islam** (islamisme) er samlebetegnelsen for bevegelser som mener at islam bør spille en direkte rolle i politikk og statsforvaltning. Det spenner vidt. **Det Muslimske Brorskap**, grunnlagt i Egypt i 1928, mener islam tilbyr et komplett system for samfunnet. Den **iranske revolusjonen i 1979** etablerte en stat styrt av shia-islamske prinsipper. Samtidig har flere islamistiske bevegelser valgt demokratisk deltakelse -- som Ennahda i Tunisia og AKP i Tyrkia.

En liten minoritet bruker vold. Grupper som al-Qaida og IS representerer en ekstrem fortolkning som avvises av det overveldende flertallet av muslimer -- og disse gruppene har faktisk drept langt flere muslimer enn ikke-muslimer. Det er avgjørende å skille mellom politisk islam som bred kategori og den lille andelen som tyr til vold. De aller fleste muslimer avviser terrorisme som i strid med islams kjerneverdier."""),

("quiz","Test deg selv på tradisjonalisme og politisk islam:",[
 ("Hva er politisk islam (islamisme)?",[("Bevegelser som mener islam bør spille en rolle i politikk og statsforvaltning",True),("Et annet ord for terrorisme",False),("En bevegelse som vil avskaffe all religion",False),("En sufisk meditasjonsform",False)],
  "Politisk islam spenner fra demokratiske partier til revolusjonære bevegelser. Det er ikke det samme som voldelig ekstremisme."),
 ("Hva er viktig å huske om voldelige ekstremistgrupper som IS?",[("At de representerer flertallet av muslimer",False),("At de avvises av det overveldende flertallet av muslimer og har drept flest muslimer",True),("At de er typiske for politisk islam",False),("At de er støttet av alle muslimske land",False)],
  "Voldelige ekstremistgrupper representerer en liten minoritet, avvises av flertallet av muslimer, og har drept langt flere muslimer enn ikke-muslimer."),
]),

("text","""## Islam i Europa og Norge

Rundt 25--30 millioner muslimer bor i Vest-Europa, og de er en viktig del av samfunnet. Muslimsk tilstedeværelse er ikke nytt -- al-Andalus (muslimsk Spania, 711--1492) var et kulturelt høydepunkt, og bosniske muslimer har bodd i Europa i over 500 år. Men den store innvandringen skjedde fra 1960-tallet, først som arbeidsinnvandring, senere gjennom familiegjenforening og flukt.

Mange muslimske tenkere argumenterer for en **«europeisk islam»** -- en praksis som er tro mot islams kjerne, men tilpasset den europeiske konteksten. Tariq Ramadan har ment at europeiske muslimer ikke skal se seg selv som «muslimer i eksil», men som fullverdige europeiske borgere med en islamsk identitet. I Norge bor det anslagsvis 200 000--250 000 muslimer fra mange ulike land -- Pakistan, Somalia, Irak, Tyrkia, Bosnia, Afghanistan, Syria -- som representerer et stort mangfold av kulturer og tolkninger. Moskeer fungerer ikke bare som bønnesteder, men som sosiale møteplasser og rådgivningssentre.

Med dette følger debatter: forholdet mellom religionsfrihet og sekularisme (som hijab i offentlige institusjoner), spørsmål om integrasjon og identitet, ytringsfrihet og religiøs sensitivitet, radikalisering og forebygging, og diskriminering og islamofobi. Den sentrale debatten handler om hvordan islam kan være relevant i en moderne, globalisert verden -- uten å miste sin kjerne."""),

("quiz","Test deg selv på islam i Europa og Norge:",[
 ("Hva menes med «europeisk islam»?",[("At islam skal forbys i Europa",False),("En islamsk praksis som er tro mot kjernen, men tilpasset den europeiske konteksten",True),("At alle europeere blir muslimer",False),("At muslimer skal forlate Europa",False)],
  "«Europeisk islam» beskriver forsøket på en islamsk praksis tilpasset den europeiske konteksten, der muslimer er fullverdige borgere med islamsk identitet."),
 ("Omtrent hvor mange muslimer bor i Norge?",[("Rundt 10 000",False),("Rundt 200 000--250 000",True),("Rundt 2 millioner",False),("Rundt 50",False)],
  "Det bor anslagsvis 200 000--250 000 muslimer i Norge, fra mange ulike land og med stort mangfold av tolkninger."),
]),

("summary","""## Oppsummering

Muslimer forholder seg til den moderne verden på mange måter. Islamsk modernisme forsøker å forene islam med demokrati, vitenskap og menneskerettigheter gjennom kontekstuell lesning og aktiv ijtihad. Tradisjonalister mener klassiske tolkninger er tilstrekkelige, mens salafister vil tilbake til de tidligste generasjonene.

Politisk islam spenner fra demokratiske partier til voldelige grupper, men det store flertallet av islamister er ikke voldelige -- og ekstremister avvises av flertallet av muslimer. I Europa bor rundt 25--30 millioner muslimer, og «europeisk islam» beskriver forsøket på en praksis tilpasset den europeiske konteksten. I Norge bor det 200 000--250 000 muslimer fra mange land. Den sentrale debatten handler om hvordan islam kan være relevant i en moderne verden uten å miste sin kjerne."""),
])

# ===== 2.4 Islam, kjønn og seksualitet =====
add("krle-9-2-4",
"En fortelling om islams mest betente debatter om kjønn og seksualitet -- om hijab, ekteskap og homofili, der konservative og progressive muslimer leser de samme kildene helt ulikt.",
35,
[
("intro","""## Undertrykkelse eller frihet?

Er islam en patriarkalsk religion som undertrykker kvinner, eller en religion som fremmer likeverd? Er hijab et tegn på undertrykkelse eller et fritt valg? Hva sier islam om homofili? Få temaer skaper mer debatt -- både innenfor islam og i offentligheten.

Som med de fleste store spørsmål i religion finnes det ikke ett svar. Muslimer har svært ulike oppfatninger: fra konservative tolkninger som vektlegger kjønnenes komplementaritet, til progressive lesninger som argumenterer for full likestilling. I dette kapittelet skal vi presentere de ulike perspektivene saklig og respektfullt, og et viktig prinsipp blir å lytte til muslimer -- særlig muslimske kvinner -- selv."""),

("text","""## Kjønnsroller: komplementaritet eller likestilling

Koranen slår fast at menn og kvinner er skapt av den samme sjelen (4,1) og er likeverdige for Gud. Men Koranen inneholder også vers som tolkes ulikt. De med et **tradisjonelt syn** mener at Koranen og hadith fastslår komplementære roller: mannen forsørger og beskytter, kvinnen har en sentral rolle i hjemmet og oppdragelsen. De viser til vers 4,34 om at menn er kvinners forsørgere. Poenget er ikke ulik verdi, mener de, men ulike og gjensidig utfyllende oppgaver.

De med et **progressivt eller feministisk syn** mener at de patriarkalske elementene reflekterer 600-tallets arabiske kultur, ikke islams tidløse budskap. De påpeker at Muhammad faktisk forbedret kvinners rettigheter radikalt for sin tid -- kvinner fikk arverett, eiendomsrett og rett til skilsmisse, lenge før europeiske kvinner fikk det samme. De mener at mange undertrykkende praksiser, som tvangsekteskap, er kulturelle og uten støtte i Koranen. Feministiske teologer som **Amina Wadud** og **Fatima Mernissi** leser Koranen med vekt på likeverd og rettferdighet.

Det er også verdt å huske at kvinner har spilt viktige roller gjennom islamsk historie. Khadija, Muhammads første kone, var en velstående forretningskvinne. Aisha var en sentral kilde til hadith. Og i vår tid er kvinner ledere, teologer, aktivister og statsledere i muslimske land. **Islamsk feminisme** argumenterer nettopp for likestilling med utgangspunkt i islamske kilder -- en bevegelse som viser at det er mulig å kjempe for rettigheter innenfor en religiøs ramme."""),

("quiz","Test deg selv på kjønnsroller:",[
 ("Hva mener muslimer med et progressivt syn på kjønnsroller?",[("At Koranen krever full underordning av kvinner",False),("At patriarkalske elementer reflekterer 600-tallets kultur, ikke islams tidløse budskap",True),("At kvinner ikke kan utdanne seg",False),("At islam ikke nevner kvinner",False)],
  "Progressive muslimer mener de patriarkalske elementene speiler datidens kultur, og at Muhammad faktisk forbedret kvinners rettigheter radikalt for sin tid."),
 ("Hva er islamsk feminisme?",[("En avvisning av islam",False),("En bevegelse som argumenterer for likestilling med utgangspunkt i islamske kilder",True),("Et forbud mot hijab",False),("En politisk ekstremistgruppe",False)],
  "Islamsk feminisme argumenterer for likestilling mellom kjønnene med utgangspunkt i Koranen og islamsk tradisjon, og mener patriarkalske tolkninger er menneskelige forvrengninger."),
]),

("text","""## Hijab -- mange lag i én debatt

**Hijab** betyr «skjerm» eller «gardin» og brukes vanligvis om hodeslør som dekker håret, ikke ansiktet. Andre plagg er *niqab* (ansiktsslør med åpning for øynene), *burka* (heldekkende, vanlig i Afghanistan) og *chador* (vanlig i Iran). Hijab er det mest synlige symbolet i debatten om islam og kjønn, og debatten har mange lag -- religion, frihet, identitet, feminisme og politikk.

De fleste islamske lærde mener Koranen pålegger kvinner å kle seg beskjedent og dekke håret, basert på vers 24,31 og 33,59. Men det er uenighet om hva som kreves -- noen mener hijab er en plikt, andre en anbefaling, og noen mener at det vesentlige er beskjedenhet, ikke et bestemt plagg. Kvinner som **bærer hijab frivillig** oppgir grunner som religiøs overbevisning, identitet, beskjedenhet, fellesskap og til og med aktivisme mot vestlig press. Kvinner som **velger den bort** kan mene at Koranen ikke pålegger den, at den begrenser friheten, eller at tro er en indre sak.

Det avgjørende poenget er **tvangsaspektet**: noen kvinner tvinges til å *bære* hijab (av familier eller stater som Iran), mens andre tvinges til å *ta den av* (som i franske offentlige skoler). Begge former for tvang er problematiske sett fra et menneskerettighetsperspektiv. I Norge er hovedprinsippet at alle har rett til å bære religiøse plagg, men det kan finnes begrensninger i spesifikke yrker."""),

("quiz","Test deg selv på hijab-debatten:",[
 ("Hvorfor velger noen muslimske kvinner å bære hijab frivillig?",[("Bare fordi de blir tvunget",False),("Av grunner som religiøs overbevisning, identitet, beskjedenhet og fellesskap",True),("Fordi Koranen forbyr det",False),("Fordi det er forbudt i Norge",False)],
  "Kvinner som bærer hijab frivillig, oppgir mange ulike grunner: religiøs overbevisning, identitet, beskjedenhet, tilhørighet til et fellesskap og noen ganger bevisst aktivisme."),
 ("Hva er problematisk fra et menneskerettighetsperspektiv i hijab-spørsmålet?",[("At noen velger å bære hijab frivillig",False),("Både å tvinge kvinner til å bære hijab og å tvinge dem til å ta den av",True),("At hijab finnes i det hele tatt",False),("At kvinner får velge selv",False)],
  "Begge former for tvang er problematiske: å tvinge kvinner til å bære hijab (som Iran) og å tvinge dem til å ta den av (som franske offentlige skoler)."),
]),

("text","""## Ekteskap, familie og homofili

Ekteskapet (*nikah*) står sentralt i islam -- ifølge hadith sa Muhammad at det er «halve religionen». I islam er ekteskapet en *kontrakt* mellom to parter, ikke et sakrament som i katolsk kristendom, og inneholder en bruddgave (*mahr*) fra mannen til kvinnen, som er hennes eiendom. Tradisjonelt er ekteskapet mellom mann og kvinne, mannen er forsørger, og skilsmisse er tillatt, men regnes som «det mest motbydelige av det tillatte». Mange muslimske land har modernisert ekteskapslovene -- Marokko ga i 2004 kvinner rett til skilsmisse og satte 18 år som minstealder, og Tyrkia avskaffet polygami allerede i 1926. Koranen tillater inntil fire koner (4,3), men med så strenge krav om rettferdighet at noen mener det i praksis er et forbud. Et viktig skille går mellom **arrangert ekteskap** (der familien foreslår en partner, men begge samtykker frivillig) og **tvangsekteskap** (forbudt både i islam og i norsk lov -- Muhammad sa at en kvinne ikke kan giftes bort uten samtykke).

Spørsmålet om **homofili** er blant de mest sensitive. Det store flertallet av islamske lærde har et **tradisjonelt syn** og mener at homoseksuell praksis er forbudt (*haram*), med henvisning til historien om Lot i Koranen. Et voksende antall **progressive** tenkere utfordrer dette: de mener at historien om Lot handler om overgrep og ikke om kjærlighet mellom samtykkende voksne, at begrepet «seksuell legning» var ukjent i klassisk islam, og at Koranens verdier om barmhjertighet og verdighet støtter aksept. Noen inntar **mellomposisjoner** og skiller mellom følelser og handlinger, eller mener at staten ikke bør blande seg i menneskers privatliv.

Mange skeive muslimer opplever et vanskelig krysspress mellom tro og identitet; noen forlater islam, mens andre finner måter å forene de to. Uavhengig av teologisk standpunkt er det bred enighet om at alle mennesker bør behandles med respekt og verdighet, og at forfølgelse og hat mot LHBT+-personer er uakseptabelt."""),

("quiz","Test deg selv på ekteskap og homofili:",[
 ("Hva er forskjellen på arrangert ekteskap og tvangsekteskap?",[("De er det samme",False),("I arrangert ekteskap samtykker begge frivillig; tvangsekteskap er uten samtykke og forbudt",True),("Tvangsekteskap er tillatt i Norge",False),("Arrangert ekteskap er forbudt i islam",False)],
  "I et arrangert ekteskap foreslår familien en partner, men begge samtykker frivillig. Tvangsekteskap er uten samtykke og forbudt både i islam og i norsk lov."),
 ("Hva er ekteskapet i islam, i motsetning til i katolsk kristendom?",[("Et sakrament",False),("En kontrakt mellom to parter",True),("Et forbud",False),("En pilegrimsreise",False)],
  "I islam er ekteskapet en kontrakt (nikah) mellom to parter, ikke et sakrament slik det er i katolsk kristendom."),
 ("Hvordan utfordrer progressive muslimer det tradisjonelle synet på homofili?",[("De avviser hele Koranen",False),("De mener historien om Lot handler om overgrep, ikke kjærlighet mellom samtykkende voksne",True),("De mener homofili er en plikt",False),("De nekter å diskutere temaet",False)],
  "Progressive tenkere argumenterer for at historien om Lot handler om overgrep, at «seksuell legning» var ukjent i klassisk islam, og at Koranens verdier om barmhjertighet støtter aksept."),
]),

("summary","""## Oppsummering

Spørsmål om kjønn og seksualitet debatteres intenst innenfor islam, med et bredt spekter av syn -- fra konservative tolkninger om komplementære kjønnsroller til progressive tolkninger om full likestilling. Hijab-debatten har mange lag, og det er avgjørende å lytte til muslimske kvinner selv og respektere deres ulike valg; begge former for tvang -- å påtvinge eller forby hijab -- er problematiske.

Ekteskapet står sentralt, og det er et viktig skille mellom arrangert ekteskap (frivillig) og tvangsekteskap (forbudt i islam). Mange land har reformert ekteskapslovene. Når det gjelder homofili, dominerer et konservativt syn blant lærde, men progressive tolkninger vokser. Islamsk feminisme viser at det er mulig å kjempe for likestilling innenfor en religiøs ramme."""),
])

# ===== 2.5 Islamofobi og fordommer =====
add("krle-9-2-5",
"En fortelling om islamofobi -- hvordan fordommer mot muslimer oppstår og opprettholdes, hvilken rolle mediene spiller, og hvordan kunnskap og kontakt kan bekjempe hat.",
33,
[
("intro","""## Når fordommer blir farlige

I august 2019 gikk en bevæpnet mann inn i en moské i Bærum og åpnet ild. Angrepet var et grufullt påminnelse om at fordommer mot muslimer ikke bare er abstrakte holdninger -- de kan få dødelige konsekvenser. **Islamofobi**, frykt for og fiendtlighet mot islam og muslimer, er et reelt problem i Europa og Norge.

Begrepet dekker et spekter fra negative holdninger til diskriminering, trakassering og vold. Noen forskere foretrekker «antimuslimsk rasisme» for å understreke at fiendtligheten ofte retter seg mot mennesker, ikke bare mot en religion. I dette kapittelet skal vi se på hva islamofobi er, hvordan fordommer oppstår, hvilken rolle mediene spiller, og hva vi kan gjøre. Vi skal bruke fakta og kunnskap som verktøy mot uvitenhet."""),

("text","""## Stereotypier under lupen

Fordommer mot muslimer bygger ofte på stereotypier -- forenklede og ofte feilaktige bilder av en hel gruppe. La oss møte de vanligste med fakta.

«Alle muslimer er like.» Islam har 1,8 milliarder tilhengere i over 50 land med enormt mangfold. En bosnisk, en indonesisk og en norsk-somalisk muslim har ofte svært ulike kulturer og tolkninger. Å behandle alle muslimer som én gruppe er like feil som å behandle alle kristne som like. «Islam er voldelig.» Det overveldende flertallet av muslimer avviser vold, og ekstremistgrupper som IS har drept langt flere muslimer enn ikke-muslimer. Koranen forbyr drap av uskyldige (5,32). Vold i islams navn representerer en liten, ekstrem minoritet -- akkurat som at Breiviks terror ikke representerer kristendommen.

«Islam er uforenlig med demokrati.» Mange muslimske land er demokratier -- Indonesia, Tunisia, Senegal. «Muslimske kvinner er undertrykte.» Virkeligheten er langt mer nyansert; mange muslimske kvinner er selvstendige og aktive, og undertrykkelse skyldes ofte kultur og politikk, ikke islam i seg selv. «Muslimer vil ikke integrere seg.» Forskning viser at de fleste muslimer i Europa føler tilhørighet til landet de bor i, og i Norge føler flertallet av muslimer seg norske og verdsetter demokrati og menneskerettigheter."""),

("quiz","Test deg selv på stereotypier:",[
 ("Hva er galt med påstanden «alle muslimer er like»?",[("Ingenting -- den er korrekt",False),("Islam har 1,8 milliarder tilhengere i over 50 land med enormt mangfold",True),("At det finnes få muslimer",False),("At alle muslimer bor i samme land",False)],
  "Påstanden er en stereotypi. Islam har enormt kulturelt, etnisk og teologisk mangfold -- å behandle alle muslimer likt er like feil som å behandle alle kristne likt."),
 ("Hvem har ekstremistgrupper som IS drept flest av?",[("Bare ikke-muslimer",False),("Muslimer -- langt flere enn ikke-muslimer",True),("Ingen",False),("Bare vestlige politikere",False)],
  "Ekstremistgrupper som IS har faktisk drept langt flere muslimer enn ikke-muslimer, og avvises av det overveldende flertallet av muslimer."),
]),

("text","""## Mediene og «innrammingen»

Mediene spiller en stor rolle i å forme oppfatninger av muslimer, og forskning viser at dekningen ofte er skjev. Studier fra flere europeiske land viser at nyheter om muslimer og islam i overveiende grad handler om terrorisme, konflikter og problematikk, mens positive nyheter om muslimers bidrag til samfunnet får langt mindre plass. En norsk studie fra Universitetet i Bergen viste at muslimer sjelden intervjues som eksperter eller vanlige borgere -- de blir oftest spurt om terrorisme eller kontroversielle praksiser.

Et nøkkelbegrep er **framing**, eller innramming -- hvordan en sak presenteres, påvirker hvordan folk oppfatter den. Når en person med muslimsk bakgrunn begår en forbrytelse, nevnes ofte religionen i overskriften; når en ikke-muslim gjør det samme, nevnes religion sjelden. Denne asymmetrien forsterker koblingen mellom islam og vold. På sosiale medier spres hatefulle ytringer, desinformasjon og konspirasjonsteorier som «Eurabia»-teorien raskt.

Hva kan gjøres? Kritisk medieforståelse hjelper oss å gjenkjenne skjev vinkling og generalisering. Medier bør vise muslimer i alle roller -- som leger, lærere, idrettsutøvere og naboer -- og la muslimer fortelle sine egne historier. Og vi bør faktasjekke påstander før vi tror på eller deler dem."""),

("quiz","Test deg selv på medier:",[
 ("Hva betyr «framing» (innramming) i mediedekning?",[("At bilder settes i ramme",False),("At måten en sak presenteres på, påvirker hvordan folk oppfatter den",True),("At nyheter alltid er objektive",False),("At muslimer skriver alle nyhetene",False)],
  "Framing handler om hvordan en sak presenteres. For eksempel: at religion nevnes i overskriften når en muslim begår en forbrytelse, men sjelden ellers, forsterker koblingen mellom islam og vold."),
 ("Hva er et godt virkemiddel mot skjev mediedekning?",[("Å slutte å lese nyheter",False),("Kritisk medieforståelse og faktasjekking",True),("Å tro på alt man leser",False),("Å dele alt raskt",False)],
  "Kritisk medieforståelse -- å gjenkjenne skjev vinkling og generalisering, og å faktasjekke før man deler -- er et effektivt virkemiddel mot fordommer."),
]),

("text","""## Konsekvenser, skillet mot religionskritikk, og hva du kan gjøre

Islamofobi er ikke bare holdninger -- den har reelle konsekvenser. Forskning viser **diskriminering**: en norsk studie fant at jobbsøkere med pakistanske navn hadde 25 % lavere sjanse for å bli innkalt til intervju enn søkere med norske navn, med identiske kvalifikasjoner. Mange opplever **hverdagsrasisme** i form av tilrop og mistenkeliggjøring, og kvinner med hijab er spesielt utsatt. **Hatkriminalitet** -- straffbare handlinger motivert av hat mot en gruppe -- rammer moskeer og enkeltpersoner, slik som angrepet i Bærum i 2019. Konsekvensene er også psykiske: konstant mistenkeliggjøring kan føre til stress og en følelse av å ikke høre til, og demokratisk kan islamofobi ekskludere borgere fra fullverdig deltakelse.

Et viktig skille går mellom religionskritikk og islamofobi. **Religionskritikk** er en grunnleggende rettighet i et demokrati -- å kritisere religiøse ideer, praksiser og institusjoner er en del av ytringsfriheten. **Islamofobi** er noe annet: fiendtlighet rettet mot mennesker på grunn av deres tilhørighet til islam. Et nyttig skille: kritiserer du en *idé eller praksis*, kan det være religionskritikk; tillegger du *alle muslimer* negative egenskaper, er det generalisering og kan være islamofobi. Behandler du kritikk av islam annerledes enn kritikk av andre religioner, kan det handle om fordommer.

Hva virker mot fordommer? Forskning peker på **kontakt** -- personlig kontakt mellom mennesker fra ulike grupper er det viktigste, fordi det å kjenne en muslim gjør det vanskeligere å tro på stereotypier. **Kunnskap** hjelper også: det du gjør nå, å studere KRLE, er i seg selv et bidrag mot uvitenhet. Det hjelper å **stemme opp** mot hatefulle ytringer, fordi stillhet ofte tolkes som aksept, og Norge har lover mot diskriminering og hatefulle ytringer (straffelovens paragraf 185). Du kan bli kjent med mennesker som er forskjellige fra deg, utfordre generaliseringer, og være kritisk til det du leser og deler."""),

("quiz","Test deg selv på konsekvenser og tiltak:",[
 ("Hva er forskjellen på religionskritikk og islamofobi?",[("Det er ingen forskjell",False),("Religionskritikk retter seg mot ideer og praksiser; islamofobi mot mennesker på grunn av deres tilhørighet",True),("Islamofobi er en menneskerettighet",False),("Religionskritikk er forbudt i Norge",False)],
  "Religionskritikk -- å kritisere ideer, praksiser og institusjoner -- er en demokratisk rettighet. Islamofobi er fiendtlighet rettet mot mennesker fordi de tilhører islam."),
 ("Hva viser forskning er det viktigste virkemiddelet mot fordommer?",[("Å unngå mennesker som er forskjellige",False),("Personlig kontakt mellom mennesker fra ulike grupper",True),("Å lese mer hatefulle ytringer",False),("Å ignorere problemet",False)],
  "Forskning viser at personlig kontakt mellom mennesker fra ulike grupper er det viktigste virkemiddelet -- det gjør det vanskeligere å tro på stereotypier."),
 ("Hva er hatkriminalitet i norsk lov?",[("All kritikk av religion",False),("Straffbare handlinger motivert av hat mot en person på grunn av blant annet religion eller etnisitet",True),("Bare fysisk vold",False),("Noe som ikke straffes",False)],
  "Hatkriminalitet er straffbare handlinger motivert av hat eller fordommer mot en gruppe -- og er en skjerpende omstendighet i norsk lov."),
]),

("summary","""## Oppsummering

Islamofobi -- frykt for og fiendtlighet mot islam og muslimer -- er et reelt problem med alvorlige konsekvenser: diskriminering, hverdagsrasisme, hatkriminalitet og psykiske belastninger. Vanlige stereotypier som «alle muslimer er like» og «islam er voldelig» bygger på uvitenhet og generalisering, ikke fakta, og mediene forsterker ofte fordommer gjennom negativ vinkling og asymmetrisk innramming.

Det er et viktig skille mellom religionskritikk (retten til å kritisere ideer og praksiser) og islamofobi (hat mot mennesker). Forskning viser at de mest effektive virkemidlene mot fordommer er personlig kontakt, kunnskap, kritisk medieforståelse og å stemme opp mot hat. Å lære om islam og muslimers mangfold er i seg selv et viktig bidrag til et mer inkluderende samfunn."""),
])

print(f"\nBATCH2 TOTAL: {T} quizzes, {Q} questions")
