import type { QuizQuestion } from './quiz-data';

const quizData_sgo1001: Record<string, QuizQuestion[]> = {
  'sgo1001-0-1': [
    {
      question: "Hvor mange oppgaver skal du besvare i hver del av SGO1001-eksamen i dagens form?",
      options: ["Tre av fire kortsvar i Del 1, og to av tre langsvar i Del 2", "Fire av fire kortsvar i Del 1, og tre av tre langsvar i Del 2", "To av fire kortsvar i Del 1, og tre av fire langsvar i Del 2", "Fire av seks kortsvar i Del 1, og ett av tre langsvar i Del 2"],
      explanation: "Del 1 gir fire kortsvarsspørsmål og ber om tre svar; Del 2 gir tre langsvarsoppgaver og ber om to. Alternativet om fire av fire tester fellen med å svare på alt: et ekstra kortsvar leses ikke, og tiden må lånes fra Del 2. Variantene med fire av seks og to av fire beskriver eldre eksamensformer, ikke settene fra 2023 og framover.",
    },
    {
      question: "Hvordan vektes de to delene av eksamen mot hverandre?",
      options: ["Del 1 teller 40 prosent, og Del 2 teller 60 prosent", "Del 1 teller 60 prosent, og Del 2 teller 40 prosent", "Begge delene teller nøyaktig 50 prosent hver", "Del 1 teller 30 prosent, og Del 2 teller 70 prosent"],
      explanation: "Kortsvarsdelen teller 40 prosent og langsvarsdelen 60 prosent. Fordi Del 1 er tre svar og Del 2 bare to, veier ett langsvar omtrent dobbelt så mye som ett kortsvar. Alternativet som snur tallene tester en vanlig forveksling: at delen som kommer først i settet, også teller mest.",
    },
    {
      question: "Hva er ordgrensen per kortsvar i det nyeste settet i dagens form?",
      options: ["Maks 200 ord, strammet inn fra 500 ord i de foregående settene", "Maks 500 ord, som er den grensen som gjelder for alle svarene", "Maks 1000 ord, altså den samme grensen som i langsvarsdelen", "Ingen ordgrense i det hele tatt, bare den samlede tidsrammen"],
      explanation: "Grensen er 200 ord per kortsvar, strammet inn fra 500 ord som gjaldt i settene i 2023 og 2024. Alternativet med 500 ord tester at man husker en grense som er utgått, og alternativet med 1000 ord blander kortsvaret sammen med langsvaret, der 1000 ord er grensen.",
    },
    {
      question: "Hvordan graderer sensorveiledningene hvert enkelt svar?",
      options: ["I tre nivåer: minimum, god og beste", "I to nivåer: bestått og ikke bestått", "I fem nivåer, ett for hver bokstavkarakter", "I fire nivåer, ett for hver vurderingsakse"],
      explanation: "Veiledningene beskriver hvert spørsmål i tre nivåer — minimum, god og beste — som svarer omtrent til E og D, C, og A og B. Alternativet med bestått og ikke bestått tester en vanlig antakelse om innføringsemner; SGO1001 karaktersettes gradert fra A til F. De fire vurderingsaksene er noe annet enn nivåene: aksene sier hva som måles, nivåene hvor godt.",
    },
    {
      question: "Hva er statusen til poenggrensene som veiledningen fra høsten 2018 oppgir?",
      options: ["De er illustrerende, fra en eksamensform med en annen delstruktur", "De er gjeldende, og brukes uendret på settene fra 2023 og framover", "De er hemmelige, og ble publisert ved en feil dette ene semesteret", "De er veiledende, og oppdateres av instituttet foran hvert semester"],
      explanation: "Grensene fra 2018 stammer fra en eksamensform med tre deler, mens dagens sett har to deler vektet 40 mot 60. De brukes derfor til å forstå at avstanden fra C til A er stor, ikke til å regne på egne svar. Alternativet om at de er gjeldende tester nettopp den fellen.",
    },
    {
      question: "En oppgave lyder: «Gjør rede for byplanleggingens faser, og drøft hvilke spor de har satt i én norsk by.» Hvilken del hører den hjemme i?",
      options: ["Del 2, fordi formuleringen har både et redegjørelses- og et drøftingsverb", "Del 1, fordi den ber om en redegjørelse og dermed er en ren definisjonsoppgave", "Del 1, fordi den nevner ett konkret sted og dermed ber om et eksempel", "Del 2, men bare fordi temaet bygeografi alltid kommer som langsvar"],
      explanation: "To bestillinger i én formulering — gjør rede for, og drøft — er kjennetegnet på langsvaret i Del 2. Alternativene som plasserer den i Del 1 tester to vanlige feillesninger: at et redegjørelsesverb alene avgjør sjangeren, og at et krav om eksempel gjør oppgaven kort. Temaet avgjør ikke delen; det gjør instruksjonsverbene.",
    },
    {
      question: "Hvilken tematikk er den eneste som er stabil gjennom hele arkivet fra 2003 til 2025?",
      options: ["Kjernebegrepene rom, sted og skala", "Globale verdikjeder og produksjonsnettverk", "Sårbarhet og tilpasningskapasitet for klima", "Gentrifisering og boligsegregasjon i byer"],
      explanation: "Rom, sted og skala testes igjen og igjen gjennom hele perioden, både direkte og som verktøy i drøfting. De tre andre temaene er tunge i dagens sett, men de kom inn med pensumskiftet rundt 2016 og 2017 og finnes ikke i samme form i de eldste settene.",
    },
    {
      question: "Hvilken av de fire vurderingsaksene beskrives som den viktigste karakterskilleren?",
      options: ["Akse 2 — eksempel og anvendelse", "Akse 1 — presis begrepsbeherskelse", "Akse 3 — drøfting, grep og koblinger", "Akse 4 — relevans og aktualitet"],
      explanation: "Akse 2 er den mest gjennomgående markøren i hele arkivet: et abstrakt, eksempelløst svar kan aldri nå toppen. Akse 1 er grunnkravet som må være på plass, og Akse 3 er det som løfter fra god til beste — men det er belegget som avgjør om svaret i det hele tatt er i spill for de øverste karakterene.",
    },
    {
      question: "Hvorfor bør Del 2 få mest av skrivetiden selv om Del 1 også teller?",
      options: ["Fordi to lange svar krever disponering, mens tre korte krever presisjon", "Fordi Del 2 alltid rettes av to sensorer, mens Del 1 rettes av én", "Fordi Del 1 kan besvares uten forberedelse hvis begrepene ikke sitter", "Fordi ordgrensen i Del 2 er tredoblet i forhold til grensen i Del 1"],
      explanation: "Et langsvar krever disposisjon, avveining og en landing, mens et kortsvar går raskt når begrepet og eksempelet sitter. Alternativet om ordgrensen er en nesten riktig observasjon som likevel ikke er begrunnelsen — det er arbeidsformen, ikke lengden, som gjør at langsvaret tar tid. Antallet sensorer sier ingenting om tidsbruken din.",
    },
    {
      question: "Hva kjennetegner et godt svar på en oppgave som ber deg sammenligne to perspektiver?",
      options: ["At begge ledd behandles på hver sammenligningsakse, med eksempel på begge", "At det ene leddet beskrives grundig, og at det andre nevnes til slutt", "At de to leddene får hver sin halvdel av teksten uten felles akser", "At det velges ett av leddene, som deretter følges i dybden gjennom hele svaret"],
      explanation: "Sammenligningen skjer i setningene der de to leddene møtes på en uttalt akse, ikke i to parallelle redegjørelser. Alternativet med hver sin halvdel tester nettopp denne fellen. Å beskrive bare det ene leddet er ensidig sammenligning, og å velge ett ledd hører hjemme i den åpne vendingsoppgaven, ikke her.",
    },
    {
      question: "Hva er kravet i en oppgave som ber deg velge én av fagets vendinger?",
      options: ["Å velge én og vise et tydelig fra og til i dybden", "Å gjøre rede for alle vendingene og sammenligne dem", "Å velge én, men nevne de andre for å vise oversikt", "Å drøfte om vendingene i det hele tatt fant sted"],
      explanation: "Oppgaven ber om ett valg fulgt i dybden, med et tydelig fra og til: hva mente man før, hva ble annerledes. Alternativene som ber deg dekke alle vendingene, tester helgarderingsfellen — å reprodusere pensum i store kvanta i stedet for å velge og stå for valget.",
    },
    {
      question: "Hva er kildegrunnlaget denne boka er kalibrert mot?",
      options: ["34 eksamenssett og 8 publiserte sensorveiledninger", "34 eksamenssett og et publisert løsningsforslag per sett", "Åtte eksamenssett og 34 publiserte sensorveiledninger", "Samtlige sett siden 2003, med veiledning til hvert av dem"],
      explanation: "Grunnlaget er 34 oppgavesett fra 2003 til 2025 og 8 publiserte sensorveiledninger fra 2018 og framover. Det finnes ingen publiserte løsningsforslag og ingen fasit for emnet — alle modellbesvarelser i boka er nyskrevne. Alternativet som bytter om tallene tester hvor mye av arkivet som faktisk er veiledet: de fleste settene har ingen veiledning.",
    },
  ],
  'sgo1001-0-2': [
    {
      question: "Hvilke fire trinn består et kortsvar av?",
      options: ["Definisjon, avgrensning mot nabobegrepet, konkret eksempel, løftende setning", "Innledning, definisjon, drøfting av flere perspektiver, og oppsummering til slutt", "Definisjon, historisk bakgrunn, flere eksempler, kritisk vurdering av dem", "Påstand, argument for, argument mot, og en begrunnet konklusjon til slutt"],
      explanation: "Kortsvaret bygges som definisjon, avgrensning, eksempel og løft. Alternativet med innledning og oppsummering tester en skoleoppgave-refleks som er dyr på 200 ord. Alternativet med påstand og argumenter beskriver langsvarets arbeidsform, ikke kortsvarets: her skal du treffe og belegge, ikke veie perspektiver.",
    },
    {
      question: "Hva kjennetegner en definisjon som treffer pensumbruken, til forskjell fra en flat definisjon?",
      options: ["Den sier hva begrepet får deg til å se, og navngir avsenderen der det er en", "Den er lengre og mer utførlig, slik at ingen viktige sider ved begrepet utelates", "Den er formulert med fagord hele veien, uten hverdagslige omskrivinger", "Den gjengir ordboksbetydningen presist, slik at ingen kan si at den er gal"],
      explanation: "En formålstjenlig definisjon er operativ: den sier hva begrepet gjør analytisk, og den navngir teoretikeren der det finnes en. Alternativene om lengde, fagord og ordbok tester tre varianter av samme felle — at presisjon skulle handle om form. En setning som er umulig å ta feil av, er som regel også umulig å gi poeng for.",
    },
    {
      question: "Hva er forskjellen mellom urbanisering og byvekst?",
      options: ["Urbanisering er en andel av befolkningen, byvekst er et absolutt antall", "Urbanisering er et absolutt antall, byvekst er en andel av befolkningen", "Urbanisering gjelder store byer, mens byvekst også gjelder tettsteder", "Urbanisering er en prosess over tid, mens byvekst måles på ett tidspunkt"],
      explanation: "Urbanisering er andelen av totalbefolkningen som bor i byer; byvekst er antallet mennesker som kommer til. Konsekvensen er at en by kan vokse kraftig uten at urbaniseringsgraden stiger, hvis befolkningen utenfor byene vokser like fort. Alternativet som snur begrepene, tester nettopp den forvekslingen sensor ser etter.",
    },
    {
      question: "Hva må stå der for at et eksempel skal telle som konkret?",
      options: ["Hva eller hvor det er, hvilket begrep det belegger, og hva det viser", "En kilde til opplysningen, et årstall, og et sted som kan slås opp", "Minst to tilfeller, slik at eksempelet ikke hviler på ett enkelt sted", "En kort beskrivelse av hendelsen, og en vurdering av hvor typisk den er"],
      explanation: "Kravet er tredelt: hva eller hvor, hvilket begrep det belegger, og hva tilfellet faktisk viser. Det siste leddet er det som oftest mangler — et sted kan være navngitt uten at teksten sier hva det demonstrerer. Alternativet om to tilfeller tester en vanlig antakelse: ett godt utnyttet eksempel er sterkere enn to som bare nevnes.",
    },
    {
      question: "Hva er forskjellen på relativt og relasjonelt rom?",
      options: ["Relativt rom er avstand målt i noe annet enn meter; relasjonelt rom er stedet som summen av sine forbindelser", "Relativt rom er stedet som summen av sine forbindelser; relasjonelt rom er avstand målt i tid eller kostnad", "Relativt rom er rommet slik det oppleves subjektivt; relasjonelt rom er rommet slik det måles objektivt", "Relativt rom gjelder korte avstander i en by; relasjonelt rom gjelder forbindelser mellom land og regioner"],
      explanation: "Relativt rom måler avstand i noe annet enn meter — reisetid, kostnad, tilgjengelighet — mens relasjonelt rom handler om at et sted konstitueres av sine forbindelser. Alternativet som bytter om de to definisjonene er nøyaktig fellen sensor tester; å definere relasjonelt rom riktig under navnet relativt rom gir ingen uttelling.",
    },
    {
      question: "Hva er de to vanlige forståelsene av skala i samfunnsgeografi?",
      options: ["Skala som målestokk, og skala som vertikalt nivåhierarki", "Skala som målestokk, og skala som avstand mellom to steder", "Skala som nivåhierarki, og skala som befolkningsstørrelse", "Skala som kartutsnitt, og skala som geografisk utstrekning"],
      explanation: "Den ene er skala som målestokk, altså forholdet mellom kart og virkelighet, for eksempel 1:50 000. Den andre, og analytisk viktigste, er skala som nivåhierarki fra lokalt til globalt. Alternativene om avstand, folketall og utstrekning tester varianter av samme felle: at skala bare skulle handle om hvor stort noe er.",
    },
    {
      question: "Hvordan bør Andrew Herods poeng om skalanivåer formuleres i et svar?",
      options: ["At han argumenterer for at nivåene skapes og kan endres", "At han beviste at skalanivåene ikke er naturgitte størrelser", "At han målte hvor raskt skalanivåer endrer seg over tid", "At han avviste at skala kan forstås som målestokk i det hele tatt"],
      explanation: "Herod fremmer et argument med konsekvenser for analysen: skalanivåer er ikke naturgitte, de skapes, forhandles om og kan endres. Alternativene om å bevise og å måle tester en vanlig feiltilskrivning — å gjøre et teoretisk argument om til et empirisk funn. Han avviser heller ikke målestokk-betydningen; begge forståelsene står.",
    },
    {
      question: "Hva er tidsbudsjettet for ett kortsvar på eksamen?",
      options: ["Omtrent 15 til 20 minutter, medregnet kontroll av svaret", "Omtrent 30 til 40 minutter, medregnet valg av oppgaven", "Omtrent 5 til 10 minutter, siden svaret er kort og presist", "Omtrent 50 til 60 minutter, som for de andre svarene i settet"],
      explanation: "Regn 15 til 20 minutter per kortsvar, altså 45 til 60 minutter på Del 1. Alternativet med 50 til 60 minutter er tidsbudsjettet for et langsvar, og alternativet med 5 til 10 minutter undervurderer at også et kort svar skal disponeres og leses gjennom. Settlesing og valg ligger utenfor disse minuttene.",
    },
    {
      question: "Hvilket kriterium bør avgjøre hvilke tre kortsvar du velger?",
      options: ["Hvilke tre du har et konkret eksempel til", "Hvilke tre temaer du har lest grundigst om", "Hvilke tre som står først i oppgavesettet", "Hvilke tre som handler om de tyngste temaene"],
      explanation: "Et halvkjent begrep med et godt eksempel slår et velkjent begrep uten, fordi et eksempelløst svar ikke kan nå toppen. Alternativet om å velge det du har lest mest om, tester den vanligste feilvurderingen i Del 1: at kunnskapsmengde er det samme som uttelling. Rekkefølgen i settet sier ingenting om hva du bør velge.",
    },
    {
      question: "Hva skiller minimumsnivået fra godt nivå i et kortsvar?",
      options: ["At avgrensningen mot nabobegrepet og et relevant eksempel kommer til", "At svaret blir vesentlig lengre og dekker flere sider ved begrepet", "At kandidaten viser at hun kjenner flere teoretikere på samme felt", "At svaret får en innledning og en oppsummering som rammer det inn"],
      explanation: "Fra minimum til god er det to ting som kommer til: avgrensningen mot nabobegrepet, og et relevant eksempel. Alternativet om lengde tester en utbredt antakelse — et svar på 200 ord uten eksempel ligger fortsatt på minimumsnivå, mens 150 ord med begge deler ligger over. Innledning og oppsummering gir ingen uttelling i denne sjangeren.",
    },
    {
      question: "Hva skiller godt nivå fra beste nivå i et kortsvar?",
      options: ["At avsenderen navngis, eksempelet fortelles ferdig, og løftet kommer til", "At flere eksempler tas med, slik at påstanden hviler på bredere grunnlag", "At svaret drøfter to perspektiver mot hverandre og lander på en begrunnet konklusjon", "At begrepets historie tas med, slik at framstillingen blir faglig fyldig"],
      explanation: "Fra god til beste er avstanden liten: avsenderen navngis, eksempelet fortelles ferdig slik at det viser noe, og det kommer én løftende setning. Alternativet om å drøfte to perspektiver tester en sjangerforveksling — drøfting hører hjemme i langsvaret og sprenger ordgrensen her. Flere eksempler løfter ikke, ett utnyttet eksempel gjør det.",
    },
    {
      question: "Hva er en løftende setning i et kortsvar?",
      options: ["Én setning som knytter begrepet til rom, sted eller skala og følger av svaret", "Én setning som oppsummerer hovedpoengene og runder framstillingen pent av til slutt", "Én setning som slår fast at begrepet er sentralt i samfunnsgeografien", "Én setning som viser til et annet pensumkapittel der temaet utdypes"],
      explanation: "Løftet er én setning som sier hva det romlige perspektivet tilfører, og den må følge av det du nettopp har skrevet. Alternativet om at begrepet er sentralt, tester nettopp den tomme varianten: en setning som kunne stått i et hvilket som helst svar, er et irrelevant moment og trekker ned i stedet for opp.",
    },
    {
      question: "Hva består feilen «definisjon uten eksempel» i?",
      options: ["Begrepet forklares korrekt, men uten et eneste konkret tilfelle", "Begrepet forklares feil, og eksempelet passer heller ikke til det", "Eksempelet står der, men det er hentet fra feil del av pensum", "Eksempelet står der, men kandidaten forklarer det altfor grundig"],
      explanation: "Feilen er at definisjonen er helt riktig og belegget mangler; det er den hyppigste enkeltfeilen i arkivet, og et slikt svar kan aldri nå toppen. Alternativene der eksempelet finnes, tester en vanlig misforståelse: dette er ikke en feil som skyldes manglende kunnskap, men manglende belegg.",
    },
    {
      question: "Hva er en flat definisjon?",
      options: ["En korrekt, men uspesifikk forklaring som ikke treffer pensumbruken", "En forklaring som er direkte gal, og som forveksler to nærliggende begreper", "En forklaring som er riktig, men skrevet i et for muntlig språk", "En forklaring som er riktig, men gjentas flere steder i svaret"],
      explanation: "En flat definisjon er sann og uten uttelling: «rom er der noe skjer», «skala betyr nivå». Den treffer ikke slik begrepet faktisk brukes i pensum, og avgrensningen mot nabobegrepet mangler. Alternativet om en direkte gal forklaring beskriver noe annet — en flat definisjon er nettopp ikke gal, og det er det som gjør den farlig.",
    },
    {
      question: "Hvorfor trekker klart irrelevante momenter ned i et kortsvar?",
      options: ["Fordi de fortrenger noe som ville gitt uttelling innenfor ordgrensen", "Fordi sensor ikke kan vite om kandidaten har forstått spørsmålet", "Fordi de gjør svaret vanskeligere å lese for den som retter det", "Fordi de viser at kandidaten ikke har lest hele pensum grundig nok"],
      explanation: "På 200 ord koster en avstikker deg enten eksempelet eller den løftende setningen, altså nøyaktig det som skulle løftet svaret. Sensorveiledningene sier dessuten eksplisitt at slike momenter trekker ned, så de er ikke nøytrale. Testen er enkel: blir svaret dårligere hvis setningen fjernes?",
    },
    {
      question: "Hva er statusen til bokas hverdagslige innganger, som pendling eller netthandel?",
      options: ["De er pedagogiske innganger, mens eksamen premierer pensumnære eksempler", "De er fullgode eksamenseksempler, helt på linje med de faste caseene i boka", "De er å regne som synsing og bør aldri nevnes i en besvarelse", "De er eksempler som kun kan brukes i kortsvar, ikke i langsvar"],
      explanation: "Hverdagsankrene gjør et abstrakt begrep gripbart, men på eksamen premieres et pensumnært eller aktuelt samfunnseksempel. Alternativet om at de aldri bør nevnes, går for langt: en hverdagslig illustrasjon er lov når den faktisk viser begrepet. Egne, nyere eksempler er dessuten lov og trekker opp.",
    },
  ],
  'sgo1001-0-3': [
    {
      question: "Hva må et langsvar inneholde, ifølge sensorveiledningene?",
      options: ["Både en definisjons- eller redegjørelseskomponent og en diskusjonskomponent", "En grundig og ryddig redegjørelse for alle de relevante perspektivene i pensum", "En selvstendig påstand som ikke gjentar noe fra pensumlitteraturen", "En sammenligning av minst to teoretikere som er uenige med hverandre"],
      explanation: "Kravet gjentas hvert år: hvert langsvar forventes å ha både en definisjonskomponent og en diskusjonskomponent. Alternativet om en grundig redegjørelse tester den vanligste grunnen til at et godt svar stopper på C — rent referat der oppgaven ba om drøfting. Originalitet er ikke et krav; sammenheng og belegg er det.",
    },
    {
      question: "Hvilke fem trinn består et langsvar av?",
      options: ["Begrepsavklaring, redegjørelse, grep, case, prøving og løft", "Innledning, redegjørelse, eksempler, motargumenter, konklusjon", "Problemstilling, metode, analyse, diskusjon og oppsummering", "Definisjon, avgrensning, eksempel, drøfting og kildehenvisning"],
      explanation: "Trinnene er begrepsavklaring, redegjørelse, grep, case som bygger grepet, og prøving med løft til slutt. Alternativet med problemstilling og metode beskriver en forskningsrapport, ikke et eksamenssvar. Alternativet med definisjon og avgrensning stopper ved kortsvarets fire trinn og mangler nettopp grepet og prøvingen.",
    },
    {
      question: "Hvor i et langsvar bør det analytiske grepet stå?",
      options: ["Tidlig, slik at resten av svaret bygger det", "Til slutt, som konklusjonen alt har ledet fram mot", "I innledningen, før begrepene er avklart i det hele tatt", "Underveis, spredt utover slik at leseren ikke låses fast"],
      explanation: "Grepet står tidlig, gjerne i tredje avsnitt, slik at redegjørelsen, caset og prøvingen alle arbeider for det. Alternativet om å plassere det til slutt tester en vanlig disposisjonsfeil: kommer påstanden først i siste setning, har ikke resten av teksten fått bygge den. Å spre den utover gir ingen tråd i det hele tatt.",
    },
    {
      question: "Hva kjennetegner et analytisk grep, til forskjell fra en helgardering?",
      options: ["At det kan motsies, og at det svarer på oppgaven", "At det er formulert forsiktig, slik at det ikke kan angripes", "At det nevner alle de relevante begrepene fra pensum", "At det står i konklusjonen og oppsummerer hele svaret"],
      explanation: "Testen er om påstanden kan bestrides. «Fenomenet er sammensatt og avhenger av perspektivet» kan ingen være uenig i, og er derfor ingen påstand. Alternativet om forsiktig formulering tester nettopp helgarderingen: å unngå å ta stilling føles trygt og leses som mangel på grep.",
    },
    {
      question: "En kandidat skriver en grundig og korrekt redegjørelse, men tar aldri stilling til drøftingsspørsmålet. Hvor havner svaret typisk?",
      options: ["På C, fordi det er dekkende og beskrivende, men uten grep", "På E, fordi halve oppgaven regnes som ubesvart", "På B, fordi redegjørelsen i seg selv er faglig sterk", "På F, fordi oppgaven ikke er besvart i den formen den krevde"],
      explanation: "Et rent referat er nettopp kjennetegnet på C: hovedpoengene kommer fram, men drøfting og koblinger uteblir. Alternativene med E og F undervurderer at redegjørelsen faktisk gir uttelling, og alternativet med B overvurderer den — uten diskusjonskomponent når svaret ikke opp blant de beste.",
    },
    {
      question: "Hva vil det si at et case bygger argumentet i stedet for å pynte på det?",
      options: ["At påstanden faller sammen hvis caset strykes fra teksten", "At caset beskrives med flere detaljer enn resten av svaret", "At caset er hentet fra pensum og ikke fra kandidatens egen erfaring", "At caset gjentas flere steder i teksten for å binde svaret sammen"],
      explanation: "Strykeprøven er den enkleste testen: dekk til caset og les avsnittet på nytt. Står påstanden like sterkt, var caset pynt. Alternativet om flere detaljer tester en vanlig felle — det er ikke mer empiri som løfter, men flere koblinger mellom hendelsen og begrepene. Egne eksempler er dessuten tillatt og trekker opp.",
    },
    {
      question: "Hva innebærer feilen «empirisk briljering på bekostning av begrepsforståelse»?",
      options: ["At kandidaten kan mye om caset, men kobler bare løst på begrepene", "At kandidaten bruker et case som er for lite kjent til å overbevise", "At kandidaten bruker altfor mange ulike caser i samme besvarelse", "At kandidaten oppgir tall og årstall som ikke lar seg etterprøve"],
      explanation: "I anvendelsesoppgaver vurderes du på hva begrepene får deg til å se, ikke på detaljkunnskap om saken. Feilen er derfor å bytte begrepsarbeid mot faktamengde. Alternativet om for mange caser beskriver en annen svakhet, og et lite kjent case er helt greit så lenge teksten sier hva det viser.",
    },
    {
      question: "Hva er kjernepoenget i IPCC-forståelsen av sårbarhet og tilpasningskapasitet?",
      options: ["At begge er ujevnt fordelt som følge av politiske, økonomiske og sosiale prosesser", "At begge følger av hvor kraftig klimapåkjenningen på stedet er", "At sårbarhet kan måles presist, mens tilpasningskapasitet må anslås", "At tilpasningskapasitet er et begrep for rike land, og sårbarhet et for fattige land"],
      explanation: "Uten den ujevne fordelingen mangler kjernen: skaden følger ikke bare av påkjenningen, men av hvordan samfunnet var forberedt, og forberedelsen er sosialt betinget. Alternativet om at alt følger av påkjenningens styrke, tester nettopp den forenklingen. Begge begrepene gjelder alle steder, ikke hver sin type land.",
    },
    {
      question: "Hva er et kjernebegrepsløft?",
      options: ["Én til tre setninger om hva rom, sted eller skala tilfører temaet", "Et eget avsnitt som gjør rede for rombegrepet og de tre variantene", "En henvisning til kapitlet der kjernebegrepet er behandlet i dybden", "En påminnelse til leseren om at faget bygger på tre kjernebegreper"],
      explanation: "Løftet er kort og innholdstungt: hva ser vi når vi legger rom, sted eller skala på dette temaet? Alternativet med et eget avsnitt om rombegrepet tester en vanlig overdrivelse — løftet skal si noe nytt om temaet, ikke gjenta pensum om kjernebegrepet. En påminnelse uten innhold er et irrelevant moment.",
    },
    {
      question: "Når blir et kjernebegrepsløft til et irrelevant moment?",
      options: ["Når setningen kunne stått uendret i et svar om et annet tema", "Når kandidaten bruker skala i stedet for rom eller sted", "Når løftet er plassert til slutt i stedet for i innledningen", "Når løftet gjelder et begrep fra en annen del av pensum"],
      explanation: "Testen er om setningen følger av det du nettopp har skrevet. Et påklistret «dette kan også ses som skala» uten innhold trekker ned i stedet for opp. Alternativet om plassering tester en formalisme: løftet hører normalt hjemme til slutt, og det er innholdet, ikke plasseringen, som avgjør om det teller.",
    },
    {
      question: "Hva er tidsbudsjettet for ett langsvar på eksamen?",
      options: ["Omtrent 50 til 60 minutter, med rundt 10 av dem til disponering", "Omtrent 90 minutter, siden delen teller 60 prosent av karakteren", "Omtrent 30 minutter, slik at det blir tid til å kontrollere alt", "Omtrent 40 minutter, som er ren skrivetid uten forberedelse"],
      explanation: "Regn 50 til 60 minutter per langsvar: rundt 10 minutter disponering, rundt 40 minutter skriving og rundt 10 minutter kontroll. Alternativet med 90 minutter ville gjort det umulig å rekke tre kortsvar og to langsvar innenfor fire timer. Disponeringen er ikke oppvarming — det er der grepet blir bestemt.",
    },
    {
      question: "Hva kreves for at en sammenligningsoppgave skal være fullstendig besvart?",
      options: ["At begge ledd behandles på hver akse, med eksempel på begge sider", "At begge ledd får omtrent like mange ord i hver sin del av teksten", "At likhetene behandles først og forskjellene systematisk etterpå", "At det ene leddet velges ut som det mest treffende av de to"],
      explanation: "Sammenligningen skjer på uttalte akser der begge ledd behandles sammen. Alternativet om like mange ord i hver sin del tester den vanligste fellen: to parallelle redegjørelser er ikke en sammenligning. Å velge det ene leddet hører hjemme i den åpne vendingsoppgaven, ikke her, og gir ensidig komparasjon.",
    },
    {
      question: "Hva vurderes du på i en anvendelsesoppgave med et vedlagt materiale?",
      options: ["På begrepsanvendelsen, ikke på detaljkunnskap om selve saken", "På detaljkunnskapen om saken, siden materialet er gitt på forhånd", "På hvor mange pensumbegreper du rekker å trekke inn i analysen", "På om du finner den tolkningen av materialet oppgavesetter hadde"],
      explanation: "Veiledningene understreker at det viktigste er begrepsforståelsen og anvendelsen, ikke empirisk detalj. Alternativet om antall begreper tester en vanlig overkompensering — få begreper brukt stringent slår mange nevnt i forbifarten. Det finnes heller ingen fasittolkning: det er begrunnelsen som premieres.",
    },
    {
      question: "Hva er kravet når oppgaven ber deg drøfte en påstand?",
      options: ["At påstanden prøves fra flere sider og landingen begrunnes", "At påstanden bekreftes med de sterkeste argumentene fra pensum", "At påstanden avvises, siden slike formuleringer alltid er forenklinger", "At påstanden refereres nøyaktig før du går videre til andre temaer"],
      explanation: "En påstand skal prøves, ikke bekreftes mekanisk: det beste argumentet for, det beste imot, og en begrunnet landing. Standpunktet er fritt, og en skarp landing er en fullgod toppform. Alternativene om alltid å bekrefte eller alltid å avvise tester samme felle — at retningen på svaret skulle være gitt på forhånd.",
    },
    {
      question: "En kandidat lister ti faktorer som spiller inn, og skriver at fenomenet derfor er sammensatt. Hvilken feil er dette?",
      options: ["Manglende grep — argumentene bindes ikke sammen til en tråd", "Definisjon uten eksempel — belegget for faktorene mangler", "Ensidig komparasjon — bare det ene leddet er behandlet", "Irrelevante momenter — faktorene hører ikke til temaet"],
      explanation: "Faktorene ligger ved siden av hverandre uten rangering, og teksten sier eksplisitt at kandidaten ikke vil velge; det er manglende grep, ofte i selskap med helgardering. Alternativene beskriver andre feil: her mangler verken belegg eller relevans, og det er ingen sammenligning i oppgaven i det hele tatt.",
    },
    {
      question: "Hvordan bør du bruke egen erfaring fra jobb, bydel eller kommune i et langsvar?",
      options: ["Som illustrasjon av et begrep du har definert først, aldri som belegg alene", "Som utgangspunkt for svaret, siden førstehåndskunnskap veier tungt", "Ikke i det hele tatt, siden personlige erfaringer regnes som synsing", "Bare i anvendelsesoppgaver, der materialet uansett er gitt på forhånd"],
      explanation: "Konverteringen går i tre steg: start i begrepet, bruk erfaringen som illustrasjon, og koble tilbake til drøftingen og gjerne til et pensumnært case. Alternativet om at slikt er synsing, går for langt — omformulert som en generaliserbar mekanisme teller erfaringen både på eksempelaksen og på aktualitetsaksen.",
    },
  ],
  'sgo1001-1-1': [
    {
      question: "Hvordan defineres samfunnsgeografi i dette emnet?",
      options: ["Studiet av samfunnsmessige prosesser i romlig kontekst", "Studiet av jordoverflatens fysiske prosesser og landformer", "Studiet av hvordan naturomgivelser former samfunnenes utvikling", "Studiet av staters territorium, grenser og geopolitiske interesser"],
      explanation: "Definisjonen har tre bærende ledd: objektet er samfunnsmessig, det er prosesser og ikke tilstander, og romligheten inngår i forklaringen. Fysiske prosesser og landformer hører til naturgeografien, og forestillingen om at naturomgivelsene former samfunnene, er naturdeterminismen — en posisjon faget har avvist.",
    },
    {
      question: "Hva menes med at en sosial prosess har en romlig kontekst?",
      options: ["At den foregår et sted, over en avstand og på et nivå som virker tilbake på den", "At den kan tegnes inn på et kart og stedfestes nøyaktig med koordinater og grenser", "At den påvirkes av de fysiske omgivelsene den utspiller seg i", "At den forekommer i flere land og derfor må studeres komparativt"],
      explanation: "Romlig kontekst er mer enn å kunne stedfeste noe: poenget er at plasseringen, avstandene og nivået virker tilbake på prosessen selv. Å kunne tegnes på et kart er kartlegging, og fysiske omgivelser er bare én av mange romlige forhold.",
    },
    {
      question: "Hva er forskjellen på et romlig mønster og en samfunnsmessig prosess?",
      options: ["Mønsteret er fordelingen på et tidspunkt, prosessen er det som endrer den", "Mønsteret er det synlige, prosessen er det som skjuler seg bak og ikke kan observeres", "Mønsteret gjelder ett sted, mens prosessen gjelder flere steder samtidig", "Mønsteret beskrives kvantitativt, mens prosessen alltid beskrives kvalitativt"],
      explanation: "Skillet går på tid og årsak, ikke på synlighet, utstrekning eller metode. At flertallet bor i byer, er et mønster; urbaniseringen som førte dit, er prosessen. Prosesser kan både observeres og telles.",
    },
    {
      question: "Hva kjennetegner et a-romlig blikk på et samfunnsspørsmål?",
      options: ["Det behandler aktørene som om plassering og avstand ikke hadde betydning", "Det ser bort fra sosiale forhold og forklarer alt med fysiske omgivelser", "Det studerer bare ett sted av gangen og kan derfor ikke generalisere", "Det bruker kart og statistikk i stedet for intervjuer og feltarbeid"],
      explanation: "Et a-romlig blikk gjør rommet irrelevant: alle antas å ha lik tilgang, og avstand koster ingenting. Det er ikke det samme som å være galt — poenget er at en systematisk kilde til ulikhet forsvinner ut av synsfeltet.",
    },
    {
      question: "Hva er avstandsfriksjon?",
      options: ["At avstand koster tid, penger og energi, slik at kontakt avtar med avstanden", "At antall kilometer mellom to steder øker når infrastrukturen er dårlig", "At folk foretrekker å bo nær slekt og venner framfor nær arbeidsplassen", "At transportkostnadene har falt jevnt for alle strekninger siden 1990-tallet"],
      explanation: "Friksjonen er kostnaden ved å overvinne avstand, ikke avstanden selv — kilometrene endrer seg ikke om veien blir dårligere. Friksjonen er dessuten ujevnt fordelt: den har falt for enkelte strekninger og grupper og ligger uendret for andre.",
    },
    {
      question: "Hva er forskjellen på romlig fordeling og romlig ulikhet?",
      options: ["Fordeling er mønsteret i hvordan noe er spredt, ulikhet er systematiske forskjeller", "Fordeling gjelder mennesker, mens ulikhet gjelder ressurser og økonomiske verdier", "Fordeling måles i statistikk, mens ulikhet er en politisk vurdering uten faglig innhold", "Fordeling gjelder innenfor et land, mens ulikhet gjelder mellom land og verdensdeler"],
      explanation: "Ikke all ujevn fordeling er ulikhet: skianlegg er ujevnt fordelt uten at det gjelder livssjanser. Ulikhet krever at forskjellene er systematiske, reproduseres over tid og har konsekvenser for mulighetene folk har.",
    },
    {
      question: "Hva er romlig sortering?",
      options: ["Prosessen der folk og aktiviteter fordeler seg systematisk mellom steder", "Tilstanden der ulike grupper bor helt atskilt fra hverandre i en by", "Myndighetenes bevisste plassering av grupper i bestemte boligområder", "Metoden for å klassifisere områder etter inntekt, alder og utdanningsnivå"],
      explanation: "Sortering er prosessen; segregasjon er tilstanden den kan føre til. Den drives både av valg og av strukturer som priser og regulering — det er nettopp poenget at utfallet oppstår uten at noen har bestemt det.",
    },
    {
      question: "Hva menes med geografisk forestillingsevne slik begrepet brukes hos Gregory?",
      options: ["Evnen til å se den romlige dimensjonen ved sosiale fenomener", "Kunnskap om hvor land, byer og naturformasjoner ligger i verden", "Evnen til å lese kart og tolke symboler, målestokk og projeksjon", "Ferdigheten i å forestille seg hvordan et landskap så ut tidligere"],
      explanation: "Begrepet er analytisk, ikke faktakunnskap: det handler om å oppdage at et samfunnsspørsmål også har en romlig struktur. Kartlesing og stedskunnskap er ferdigheter, men de er ikke det Gregory sikter til.",
    },
    {
      question: "Hvilket av disse er det beste eksempelet på geografisk forestillingsevne i arbeid?",
      options: ["Å spørre hvem som hadde et yrke som kunne flyttes hjem under pandemien", "Å vise på et kart hvor mange smittetilfeller hver kommune registrerte", "Å beskrive hvordan smitte spres raskere der befolkningstettheten er høy", "Å sammenligne hvor mange land som innførte reiserestriksjoner i 2020"],
      explanation: "Forestillingsevnen viser seg når det romlige ikke er åpenbart på forhånd: spørsmålet om hvem som kunne flytte arbeidet hjem, avdekker en ujevnt fordelt romlig frihet. Kartfesting og opptelling er beskrivelser, ikke analyser av romlig struktur.",
    },
    {
      question: "Hvilke tre begreper utgjør samfunnsgeografiens kjernebegrepstriade?",
      options: ["Rom, sted og skala", "Rom, region og territorium", "Sted, landskap og miljø", "Skala, nettverk og grense"],
      explanation: "Triaden rom, sted og skala er fagets nav og bokas viktigste eksamensverktøy. Region, territorium, landskap og nettverk er nyttige begreper i faget, men de er ikke de tre kjernebegrepene emnet bygger på.",
    },
    {
      question: "Hvilken av de tre romforståelsene hos Harvey svarer til rommet som en objektiv ramme med koordinater?",
      options: ["Absolutt rom", "Relativt rom", "Relasjonelt rom", "Konstruert rom"],
      explanation: "Absolutt rom er beholderen: koordinater, grenser og kilometer. Relativt rom måler avstand i noe annet, for eksempel reisetid, og relasjonelt rom er rommet konstituert av forbindelser og nettverk.",
    },
    {
      question: "Hvem knyttes tredelingen location, locale og sense of place til?",
      options: ["John Agnew, formidlet og videreutviklet hos Tim Cresswell", "Tim Cresswell, som lanserte tredelingen i sitt arbeid om mobilitet", "David Harvey, som skilte mellom tre måter å forstå sted på", "Andrew Herod, som knyttet stedsbegrepet til nivåhierarkiet"],
      explanation: "Tredelingen er Agnews, og den formidles og videreutvikles hos Cresswell — derfor er formuleringen «Agnews tredeling, slik den brukes hos Cresswell» den presise. Harvey eier romtredelingen og Herod skalabegrepet.",
    },
    {
      question: "Hva er de to betydningene av skala som samfunnsgeografien bruker?",
      options: ["Målestokk og vertikalt nivåhierarki", "Målestokk og geografisk utstrekning", "Analysenivå og statistisk oppløsning", "Kartformat og administrativ inndeling"],
      explanation: "Skala betyr både forholdet mellom kart og virkelighet, som 1:50 000, og nivåene lokal, regional, nasjonal og global. Å ta bare den ene forståelsen er en dokumentert felle, og Herod legger til at nivåene kan være sosialt konstruerte.",
    },
    {
      question: "Hva er poenget i Staeheli og Mitchells spørsmål om fagets relevans?",
      options: ["At relevans alltid er relevans for noen, og at interessene kan stå mot hverandre", "At faget må vise nytte for næringslivet for å forsvare sin plass", "At forskning bør styres av samfunnsoppdraget framfor av forskernes nysgjerrighet", "At relevans måles best gjennom hvor mye forskningen blir sitert og brukt"],
      explanation: "Spørsmålet er «relevant for hvem» — samme analyse kan tjene et selskap og en beboergruppe med motsatte interesser. Det er nettopp derfor relevans ikke kan behandles som et entydig gode.",
    },
    {
      question: "Hva er lokalisering som samfunnsgeografisk begrep?",
      options: ["Spørsmålet om hvor en aktivitet plasseres, og hva som avgjør plasseringen", "Det samlede mønsteret av hvordan mange aktiviteter er spredt over et område", "Metoden for å stedfeste et fenomen med koordinater på et kart", "Prosessen der en virksomhet flytter produksjonen til utlandet"],
      explanation: "Lokalisering gjelder plasseringsvalget og hensynene bak det; det samlede mønsteret mange slike valg skaper, er den romlige fordelingen. Stedfesting med koordinater er kartteknikk, ikke lokaliseringsanalyse.",
    },
    {
      question: "Hvorfor bruker faget betegnelsene global sør og global nord?",
      options: ["Fordi eldre uttrykk bærer med seg bildet av én felles utviklingstrapp", "Fordi inndelingen følger ekvator og derfor er geografisk presis", "Fordi betegnelsene viser at forskjellene mellom landene innad er små", "Fordi de er nøytrale kategorier som ikke sier noe om økonomiske forhold"],
      explanation: "Betegnelsene er valgt fordi «den tredje verden» og «utviklingsland» hører til moderniseringstenkningen faget har forlatt. De er verken himmelretninger eller homogene grupper — derfor bør du bruke landets eller regionens eget navn der du kan.",
    },
    {
      question: "Hva er hovedforskjellen mellom samfunnsgeografi og naturgeografi?",
      options: ["Studieobjektet: samfunnsmessige prosesser mot fysiske prosesser", "Metoden: samfunnsgeografien er kvalitativ og naturgeografien kvantitativ", "Skalaen: samfunnsgeografien studerer det lokale og naturgeografien det globale", "Formålet: samfunnsgeografien er anvendt og naturgeografien er grunnforskning"],
      explanation: "Skillet går på hva som studeres, ikke på metode, nivå eller formål. Begge greinene bruker både kvalitative og kvantitative metoder, og begge arbeider på alle nivåer — arealkonflikter og klimatilpasning ligger midt imellom dem.",
    },
    {
      question: "En kommune legger ned den ene av to legevakter og sier at tilbudet blir like godt fordi alle har samme rett til legevakt. Hva er den samfunnsgeografiske innvendingen?",
      options: ["At formell rett ikke er reell tilgang når avstanden koster ulikt", "At kommunen ikke har myndighet til å endre tilbudet uten statlig godkjenning", "At innbyggertallet i kommunen kan komme til å øke igjen om noen år", "At beslutningen bygger på et for lite datamateriale til å være pålitelig"],
      explanation: "Innvendingen er romlig: avstandsfriksjonen øker systematisk for dem som bor lengst unna, og rammer hardest der bilhold og fleksibilitet er lavest. Da er det romlig ulikhet, selv om rettighetene formelt er like for alle.",
    },
  ],
  'sgo1001-1-2': [
    {
      question: "Hva kjennetegner absolutt rom hos Harvey?",
      options: ["Den objektive rammen med koordinater, grenser og avstand i meter", "Rommet slik det oppleves av dem som bruker det til daglig", "Rommet der avstanden avhenger av hvilket transportmiddel man har", "Rommet som er konstituert av forbindelser mellom ulike steder"],
      explanation: "Absolutt rom er beholderen: en objektiv ramme som finnes uavhengig av observatøren. Avstand som varierer med transportmiddel er relativt rom, og rom konstituert av forbindelser er relasjonelt rom.",
    },
    {
      question: "Hva kjennetegner relativt rom hos Harvey?",
      options: ["At avstand måles i tid eller kostnad i stedet for i meter", "At avstanden mellom to steder varierer med årstiden og været", "At rommet oppfattes forskjellig av ulike kulturer og grupper", "At avstand ikke måles, men erstattes av spørsmål om forbindelser"],
      explanation: "Relativt rom måler fortsatt avstand, men i tid, penger eller anstrengelse, og er derfor relativt til aktør og transportmiddel. Å slutte å måle avstand og spørre etter forbindelser er relasjonelt rom.",
    },
    {
      question: "Hva kjennetegner relasjonelt rom hos Harvey?",
      options: ["At et sted konstitueres av sine relasjoner og nettverk", "At avstand måles relativt til den som skal forflytte seg", "At rommet forstås som en objektiv beholder for hendelser", "At steder påvirker hverandre mest når de ligger nær hverandre"],
      explanation: "I relasjonelt rom er et sted summen av sine forbindelser, og avstand måles ikke i det hele tatt. Å måle avstand relativt til den reisende er relativt rom, og beholderforståelsen er absolutt rom.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom relativt og relasjonelt rom?",
      options: ["Relativt rom måler avstand i tid, relasjonelt rom måler ikke avstand", "Relativt rom gjelder enkeltpersoner, mens relasjonelt rom gjelder samfunn", "Relativt rom er et nyere begrep som har erstattet det relasjonelle", "Relativt rom gjelder korte avstander, relasjonelt rom gjelder lange"],
      explanation: "Testen er om det står en måleenhet i svaret: minutter og kroner hører til relativt rom, mens en liste over forbindelser hører til relasjonelt rom. Forvekslingen er den mest dokumenterte fellen i dette stoffet.",
    },
    {
      question: "Hvem tilskrives rammeverket TPSN — territorium, sted, skala og nettverk?",
      options: ["Bob Jessop, Martin Jones og Neil Brenner", "David Harvey, som utvidet sin egen tredeling", "John Agnew og Tim Cresswell i arbeidet om sted", "Andrew Herod i arbeidet om skalanivåer"],
      explanation: "TPSN er Jessop, Jones og Brenners rammeverk. Å tilskrive det Harvey er en dokumentert feil — Harvey eier tredelingen av rombegrepet, Agnew stedstredelingen og Herod skalabegrepet.",
    },
    {
      question: "Hva står de fire bokstavene i TPSN for?",
      options: ["Territorium, sted, skala og nettverk", "Territorium, posisjon, struktur og nærhet", "Tid, plassering, samfunn og natur", "Territorium, plan, system og nivå"],
      explanation: "Rammeverket sier at sosioromlige forhold har alle fire dimensjonene samtidig, og at analyser som bruker bare én av dem, blir ensidige. På engelsk er de territory, place, scale og network.",
    },
    {
      question: "Hva er tid–rom-kompresjon hos Harvey?",
      options: ["At raskere transport og kommunikasjon gjør verden opplevd mindre", "At byene fortettes fordi flere mennesker bor på mindre areal", "At beslutninger må tas raskere fordi informasjonen flyter fortere", "At avstandene mellom kontinentene reduseres av ny infrastruktur"],
      explanation: "Kompresjonen gjelder tiden og kostnaden ved å overvinne avstand, ikke kilometrene, og Harvey knytter den til kapitalens behov for raskere omløp. Den er dessuten ujevn: den treffer informasjon langt hardere enn kropper og tunge varer.",
    },
    {
      question: "En ny tunnel halverer reisetiden mellom to bygder. Hvilken romforståelse beskriver endringen best?",
      options: ["Relativt rom, fordi avstanden i tid endres mens kilometrene består", "Absolutt rom, fordi det er bygget en fysisk forbindelse i terrenget", "Relasjonelt rom, fordi bygdene nå er knyttet tettere sammen", "Territoriell organisering, fordi kommunegrensen krysses av tunnelen"],
      explanation: "Det som endrer seg, er kostnaden ved å overvinne avstand — altså det relative rommet. Kilometrene mellom bygdene er uendret, og det er nettopp testen på om du er i relativt rom.",
    },
    {
      question: "Hvorfor er Suezblokaden i 2021 et godt eksempel på relasjonelt rom?",
      options: ["Fordi hvem som ble rammet, fulgte av posisjon i nettverket", "Fordi hendelsen viste hvor lang omveien rundt Afrika faktisk er i døgn", "Fordi kanalen er en menneskeskapt forbindelse og ikke en naturlig", "Fordi virkningene var størst i landene som ligger nærmest kanalen"],
      explanation: "Bedrifter langt fra Egypt fikk problemer fordi forsyningen deres gikk gjennom kanalen, mens naboer uten den koblingen ikke merket noe. Å regne omveien i døgn ville derimot være et relativt-rom-resonnement.",
    },
    {
      question: "Hva er en flaskehals i et nettverk?",
      options: ["Et punkt der mye trafikk må passere, slik at stans forplanter seg langt", "Et sted der avstanden til nærmeste alternative rute er svært lang", "En forbindelse som er så kostbar at bare de største aktørene bruker den", "Et område med lav kapasitet fordi infrastrukturen er dårlig utbygd"],
      explanation: "Poenget er ikke avstand eller pris, men at alt må gjennom det samme punktet — derfor rammes aktører som verken er i nærheten eller har noe med punktet å gjøre. Det er baksiden av funksjonell integrasjon.",
    },
    {
      question: "Hva menes med sentralitet i relasjonell forstand?",
      options: ["Et steds posisjon i nettverket av forbindelser som løper gjennom det", "Hvor nær et sted ligger landets hovedstad målt i kilometer og reisetid", "Hvor mange innbyggere og arbeidsplasser et sted har samlet", "Hvor sentralt et sted ligger i forhold til sin egen region"],
      explanation: "Sentralitet er relasjonell, ikke geometrisk: et lite sted med internasjonal havn kan være mer sentralt enn en større by uten slike koblinger. Størrelse og nærhet til hovedstaden er andre størrelser.",
    },
    {
      question: "Hva er tilgjengelighet som samfunnsgeografisk begrep?",
      options: ["Hvor lett det er å nå et tilbud med de ressursene man har", "Hvor kort avstanden er til nærmeste tilbud av samme type", "Hvorvidt et tilbud er åpent for alle uten formelle hindringer", "Hvor stor kapasitet et tilbud har i forhold til befolkningen"],
      explanation: "Tilgjengelighet er relativt rom omsatt til praksis, og den er alltid for noen og til noe. Et sykehus kan ligge nært og likevel være lite tilgjengelig når det ikke går buss dit om kvelden.",
    },
    {
      question: "Hva er forskjellen på territorium og sted i TPSN-rammeverket?",
      options: ["Territorium er definert av kontroll og avgrensning, sted av mening", "Territorium gjelder stater, mens sted gjelder lokalsamfunn", "Territorium er fysisk, mens sted bare finnes i folks bevissthet", "Territorium er større enn sted og inneholder alltid flere steder"],
      explanation: "Samme flekk kan være begge deler samtidig: en kommune er territorium for forvaltningen og sted for dem som bor der. Skillet går på analysemåte, ikke på størrelse eller på fysisk mot mentalt.",
    },
    {
      question: "Hvordan skiller nettverksdimensjonen seg fra skaladimensjonen i TPSN?",
      options: ["Nettverk går på tvers, skala går opp og ned mellom nivåer", "Nettverk gjelder økonomi, mens skala gjelder politikk og styring", "Nettverk er uformelle forbindelser, mens skala er formelle strukturer", "Nettverk gjelder store avstander, mens skala gjelder lokale forhold"],
      explanation: "Rammeverket har begge fordi de fanger to ulike former for romlig organisering: den horisontale og den vertikale. Begge kan gjelde både økonomi og politikk, og begge finnes på alle avstander.",
    },
    {
      question: "Hva menes med at rommet er både ramme og produkt?",
      options: ["At rommet både setter betingelser og frembringes av prosessene", "At rommet både kan måles objektivt og oppleves subjektivt", "At rommet er naturgitt i grunnen, men bebygget av mennesker", "At rommet både har en fysisk og en økonomisk verdi for samfunnet"],
      explanation: "En jernbane er et produkt av beslutninger og blir deretter en ramme som styrer hvor folk kan bo og arbeide i tiår. Å bare se rommet som ramme fører lett til determinisme, som om plassering var skjebne.",
    },
    {
      question: "Hva er funksjonell romlig integrasjon?",
      options: ["At aktiviteter på ulike steder blir gjensidig avhengige", "At steder blir mer like hverandre etter hvert som handelen øker", "At flere kommuner slår seg sammen til en felles funksjonell enhet", "At transporttilbudet knytter en region sammen til ett arbeidsmarked"],
      explanation: "Integrasjon gjør ikke steder like — den gjør dem mer spesialiserte, fordi hvert sted gjør sin del. Baksiden hører alltid med: jo tettere koblet systemet er, desto lengre rekker virkningen av et brudd.",
    },
    {
      question: "Hvorfor er det upresist å si at globalisering har gjort verden mindre?",
      options: ["Fordi det absolutte rommet er uendret mens det relasjonelle er tettere", "Fordi globaliseringen bare har berørt noen få bransjer og land", "Fordi avstandene i verden i praksis har vokst for de fleste mennesker", "Fordi verden var like tett integrert også i tidligere historiske perioder"],
      explanation: "Kilometrene er de samme; det som har endret seg, er tettheten i forbindelsene og kostnaden ved å overvinne avstand. Formuleringen «verden er blitt mindre» blander det absolutte og det relasjonelle rommet.",
    },
    {
      question: "Hvilken påstand om globalisering og romlig ulikhet er faglig presis?",
      options: ["Tettere kobling gir ofte sterkere spesialisering og forskjeller", "Tettere kobling jevner ut forskjellene mellom steder over tid", "Tettere kobling gjør stedet mindre viktig for folks livssjanser", "Tettere kobling rammer alle steder og grupper omtrent likt"],
      explanation: "Integrasjon gir hvert sted en rolle i en arbeidsdeling, og rollene er svært ulike i lønn og risiko. Forestillingen om automatisk utjevning er nettopp den påstanden faget prøver og som regel avviser.",
    },
    {
      question: "Hva er et knutepunkt i nettverksrom?",
      options: ["Et sted der mange forbindelser møtes og som dermed får betydning", "Et sted midt mellom to store byer med god veiforbindelse til begge", "Et sted med høy befolkningstetthet og mange arbeidsplasser", "Et sted der flere forvaltningsnivåer har myndighet samtidig"],
      explanation: "Betydningen ligger i posisjonen i nettverket, ikke i stedets egen masse eller i beliggenheten mellom andre steder. En liten kommune med stor eksporthavn kan være et sentralt knutepunkt.",
    },
    {
      question: "Hvorfor er digital tilgjengelighet et eksempel på ujevn tid–rom-kompresjon?",
      options: ["Fordi tilgangen avhenger av dekning, utstyr og fortrolighet", "Fordi digitale tjenester alltid er raskere enn fysisk oppmøte", "Fordi nettforbindelser bygges ut i byene før de bygges ut på landet", "Fordi kostnaden ved digitale tjenester er lik overalt i landet"],
      explanation: "Kompresjonen er kraftig for dem som har alle tre forutsetningene på plass, og fraværende for dem som mangler én av dem. Utbyggingsrekkefølge er en del av bildet, men forklarer ikke ulikheten alene.",
    },
    {
      question: "Hva er den beste innvendingen mot å bruke bare relasjonelt rom i en analyse?",
      options: ["At grenser og eiendomsrett fortsatt fordeler myndighet rettslig", "At nettverk er for kompliserte til å kunne undersøkes empirisk", "At relasjonelt rom er et nyere begrep som ennå ikke er etablert i faget", "At forbindelser mellom steder endrer seg for raskt til å kunne analyseres"],
      explanation: "Uansett hvor relasjonelt du analyserer, er det kommunegrensen som avgjør hvem som stemmer over arealplanen. Innvendingen er praktisk og rettslig, ikke en påstand om at begrepet er ubrukelig eller uetablert.",
    },
    {
      question: "Hva er en presis måte å beskrive Harveys tredeling som kunnskapsform?",
      options: ["Et analytisk skjema — en foreslått måte å begrepsfeste rom på", "Et empirisk funn om at det finnes tre typer rom i verden", "En måleteori som gjør det mulig å tallfeste romlige forhold", "En historisk beskrivelse av hvordan rombegrepet har endret seg"],
      explanation: "Harvey har ikke oppdaget tre rom; han har foreslått tre måter å forstå rom på. Å si dette i et langsvar viser at du forstår hva slags kunnskap skjemaet er, og det er typisk for de beste svarene.",
    },
    {
      question: "En bedrift selger nesten alt til én dominerende kjøper. Hva viser dette om nettverksrom?",
      options: ["At tilkobling også er en maktrelasjon, siden partene står ulikt", "At bedriften har oppnådd en sentral posisjon i verdikjeden", "At avstanden til kjøperen er avgjørende for bedriftens lønnsomhet", "At nettverk gir mindre risiko enn å selge til mange små kunder"],
      explanation: "Kjøperen kan bytte leverandør, leverandøren kan ikke like lett bytte kjøper — asymmetrien er en romlig maktrelasjon. Å være koblet på er dermed ikke det samme som å være sentral eller trygg.",
    },
    {
      question: "Hvilket spørsmål bør styre valget av romforståelse i en besvarelse?",
      options: ["Hva oppgaven faktisk spør om — grenser, kostnader eller forbindelser", "Hvilken av de tre forståelsene som er nyest i faget", "Hvilken forståelse som gir det mest omfattende og fyldige svaret", "Hvor stort geografisk område oppgaven faktisk handler om"],
      explanation: "Absolutt rom passer på arealer og jurisdiksjon, relativt rom på tilgjengelighet og transport, relasjonelt rom på nettverk og globalisering. Å si hvilken du bruker og hvorfor, er selve grepet som løfter svaret.",
    },
  ],
  'sgo1001-1-3': [
    {
      question: "Hva er sted i samfunnsgeografisk forstand?",
      options: ["En avgrenset og meningsbærende del av rommet", "Et område med en egen administrativ grense", "Et punkt som kan angis med koordinater på et kart", "Et område der mennesker bor og arbeider fast"],
      explanation: "Begge ledd må med: stedet er avgrenset, og det er noe for noen. Faller meningsleddet bort, sitter du igjen med en posisjon — og det er nettopp det som skiller sted fra rom.",
    },
    {
      question: "Hva betyr location i Agnews tredeling?",
      options: ["Den objektive posisjonen — hvor stedet ligger", "De materielle rammene for det sosiale livet", "Den følelsesmessige tilknytningen til stedet", "Stedets betydning i et nettverk av forbindelser"],
      explanation: "Location svarer til stedets plassering og kan slås opp, måles og kartfestes. Rammene for sosialt liv er locale, og tilknytningen er sense of place.",
    },
    {
      question: "Hva betyr locale i Agnews tredeling?",
      options: ["De materielle og institusjonelle rammene for sosialt liv", "Den lokale befolkningens felles historie og tradisjoner", "Stedets plassering i forhold til andre steder i regionen", "Den lokale dialekten og kulturen som særpreger stedet"],
      explanation: "Locale er stedet som setting: bygninger, gater, møteplasser og institusjoner som gjør noen former for samhandling enkle og andre vanskelige. Det er ikke det samme som lokal kultur eller plassering.",
    },
    {
      question: "Hva er sense of place?",
      options: ["Den subjektive tilknytningen og meningen stedet har", "Den allmenne oppfatningen av hva et sted er kjent for", "Stedets særpreg slik det fremstår for en besøkende", "Følelsen av å være på et sted man kjenner igjen"],
      explanation: "Stedsfølelse er den indre tilknytningen, og den er ulikt fordelt: samme sted kan oppleves som hjem av noen og som fremmed av andre. Den utvendige, sirkulerende forestillingen om stedet er stedsmyten.",
    },
    {
      question: "Hvem tilskrives tredelingen location, locale og sense of place?",
      options: ["John Agnew, formidlet og videreutviklet hos Tim Cresswell", "Tim Cresswell, som utviklet den i sitt arbeid om mobilitet", "David Harvey, i forlengelsen av tredelingen av rombegrepet", "Den humanistiske geografien uten en enkelt navngitt avsender"],
      explanation: "Tredelingen er Agnews, og Cresswell formidler og videreutvikler den. Å skrive at Cresswell fant den opp, er en feiltilskrivning som koster på presisjonsaksen.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom stedsbegrepet og rombegrepet?",
      options: ["Sted handler om mening, rom om utstrekning og forbindelser", "Sted er mindre i utstrekning enn rom og inngår alltid i et rom", "Sted er subjektivt og kan ikke undersøkes systematisk, rom er objektivt", "Sted brukes i kulturgeografi, mens rom brukes i økonomisk geografi"],
      explanation: "De to er ulike spørsmål stilt til samme område, ikke ulike størrelser eller ulike fagfelt. Begge kan dessuten undersøkes systematisk — stedsfølelse måles gjennom intervjuer og observasjon.",
    },
    {
      question: "Hvorfor utviklet den humanistiske geografien stedsbegrepet?",
      options: ["Som innvending mot en geografi der mennesker ble punkter", "For å kunne måle folks tilhørighet til bostedet mer presist", "Fordi kartteknologien gjorde det mulig å studere små områder", "For å erstatte rombegrepet, som ble ansett som utdatert"],
      explanation: "Innvendingen var at steder er erfarte, og at en analyse som bare måler avstander og fordelinger, mister det som gjør et område til et sted. Poenget var ikke at tall er ubrukelige, men at de er utilstrekkelige alene.",
    },
    {
      question: "Hva er forskjellen på stedstilknytning og stedsidentitet?",
      options: ["Tilknytning er personlig, identitet er kollektiv", "Tilknytning gjelder der man bor, identitet der man kommer fra", "Tilknytning er varig, mens identitet endrer seg med generasjonene", "Tilknytning gjelder enkeltsteder, identitet gjelder hele regioner"],
      explanation: "Man kan ha sterk tilknytning til et sted man er uenig i den kollektive fortellingen om. Begge kan dessuten være varige eller endres, og begge finnes på alle nivåer.",
    },
    {
      question: "Hva menes med en relasjonell stedsforståelse?",
      options: ["At stedet konstitueres av sine forbindelser utover", "At stedet forstås gjennom relasjonene mellom menneskene som bor der", "At steder må forstås i forhold til nabostedene sine", "At stedets betydning avhenger av hvem som beskriver det"],
      explanation: "Forståelsen bruker relasjonelt rom på stedsbegrepet: et sted er et møtepunkt for strømmer, og mye av det som skjer der, avgjøres andre steder. Det er ikke det samme som relasjoner mellom beboerne eller mellom naboområder.",
    },
    {
      question: "Et industristed mister hjørnesteinsbedriften, men beholder identiteten som industristed i tiår. Hva illustrerer dette?",
      options: ["At de tre stedslagene endrer seg i ulik takt", "At stedsidentitet er sterkere enn økonomiske forhold", "At stedsfølelse ikke lar seg endre av ytre hendelser", "At lokasjonen bestemmer hva et sted kan bli"],
      explanation: "Arenaen tømmes over år mens identiteten henger igjen — utakten mellom lagene er selve poenget, og en del av forklaringen på hvorfor omstilling er vanskelig. Det sier ikke at identitet er sterkere enn økonomi.",
    },
    {
      question: "Hva er forskjellen på endret stedsfølelse og fortrengning?",
      options: ["Endret stedsfølelse rammer også dem som blir boende", "Endret stedsfølelse gjelder enkeltpersoner, fortrengning gjelder grupper", "Endret stedsfølelse er en holdning, fortrengning er et faktum", "Endret stedsfølelse skjer raskt, mens fortrengning tar lang tid"],
      explanation: "Fortrengning er at folk faktisk må flytte fordi de ikke har råd til å bli. Endret stedsfølelse er å oppleve at stedet ikke lenger er ens eget, uten å ha flyttet — de to henger sammen i gentrifiseringsdebatten, men er ulike fenomener.",
    },
    {
      question: "Hva er en stedsmyte?",
      options: ["En forenklet og seiglivet forestilling om hva et sted er", "En usann påstand om et sted som lever videre i mediene", "En historisk fortelling om hvordan et sted ble grunnlagt", "En markedsføringsfortelling laget av en kommune eller region"],
      explanation: "Stedsmyter er ikke nødvendigvis usanne — de er utvalg som løfter frem noen trekk og gjør dem til stedets vesen. En kampanje med tydelig avsender er stedsmarkedsføring, ikke en myte.",
    },
    {
      question: "Hva er det viktigste poenget i begrepet stedsrepresentasjon?",
      options: ["At framstillinger er med på å skape stedet", "At framstillinger av steder ofte inneholder faktafeil", "At mediene har for stor innflytelse på hvordan steder oppfattes", "At steder bør framstilles slik innbyggerne selv opplever dem"],
      explanation: "Representasjonen virker gjennom utvalg, forsterkning og gjentakelse — den kan være faktuelt riktig og likevel virke sterkt. Spørsmålet er hva som utelates og hvem som får framstille.",
    },
    {
      question: "Hva kjennetegner en utopisk stedsframstilling?",
      options: ["Den viser stedet som harmonisk og utelater konflikt og pris", "Den beskriver hvordan stedet vil se ut i framtiden", "Den overdriver stedets kvaliteter til det usannsynlige", "Den henvender seg til turister framfor til innbyggere"],
      explanation: "Framstillingen trenger ikke å overdrive for å virke: den velger ut det positive og lar det uønskede være usagt. Den dystopiske motparten gjør det samme motsatt vei.",
    },
    {
      question: "Hva er stedsmarkedsføring?",
      options: ["Systematiske forsøk på å forme og selge en stedsidentitet", "Reklame for varer og tjenester som produseres på stedet", "Kommunens informasjon til innbyggerne om lokale tilbud", "Å bygge omdømme gjennom å forbedre tjenestene på stedet"],
      explanation: "Markedsføringen er en bevisst representasjon med avsender og formål: å tiltrekke innbyggere, besøkende eller investeringer. To kritiske poeng hører med — den retter seg mot en gruppe og bort fra andre, og den kan kollidere med innbyggernes egen stedsfølelse.",
    },
    {
      question: "Hva handler definisjonsmakt over sted om?",
      options: ["Hvem som får bestemme hva stedet og problemet er", "Hvem som juridisk har myndighet til å regulere området", "Hvem som eier grunnen og dermed kan bestemme bruken", "Hvem som har rett i uenigheten om stedets fremtid"],
      explanation: "Poenget er hvilke framstillinger som slipper til, gjentas og legges til grunn for beslutninger — ikke hvem som har formell myndighet eller hvem som har rett. Å påvise dette er en analytisk observasjon, ikke en anklage.",
    },
    {
      question: "Hvorfor er innenfra- og utenfraperspektivet et metodisk poeng i stedsanalyse?",
      options: ["Fordi begge kan gi opplysninger den andre mangler", "Fordi innenfraperspektivet alltid gir det riktigste bildet av stedet", "Fordi utenfraperspektivet er objektivt og derfor mer pålitelig", "Fordi de to perspektivene alltid gir motstridende beskrivelser"],
      explanation: "Et område kan se forfallent ut utenfra og fungere godt innenfra, og omvendt. Skillet er ikke det samme som subjektivt mot objektivt — begge perspektivene kan undersøkes systematisk.",
    },
    {
      question: "En markedsføringstekst og et kritisk nyhetsoppslag beskriver samme område helt ulikt. Hva er den faglige forklaringen?",
      options: ["Begge kan være faktuelt riktige, men de velger ut ulike trekk", "Den ene parten må ha gitt feilaktige opplysninger", "Området har endret seg mye i tiden mellom de to tekstene", "Markedsføring er alltid usann, mens nyheter er kontrollerte"],
      explanation: "Representasjoner virker gjennom utvalg, forsterkning og gjentakelse, ikke først og fremst gjennom løgn. Kafeene finnes, og lokalene står tomme — begge deler kan observeres samme dag.",
    },
    {
      question: "Hvorfor er stedsnavn en form for representasjon?",
      options: ["Fordi navn slår fast hva stedet skal være og hvem det tilhører", "Fordi navn beskriver stedets fysiske egenskaper presist", "Fordi navn er den eldste formen for stedsdokumentasjon", "Fordi navn brukes til å skille steder fra hverandre i registre"],
      explanation: "Et navn kan gi assosiasjoner og markere tilhørighet uten å si noe faktuelt om stedet. Derfor er navneendringer i byutviklingsområder ofte strategiske, og gamle navn kan leve videre som motrepresentasjon.",
    },
    {
      question: "Hva menes med diskursiv representasjon?",
      options: ["Framstillinger som skaper virkeligheten, ikke bare gjengir den", "Måten fagfolk snakker om et tema på i offentlige debatter", "Framstillinger som gjentas så ofte at de blir til stereotypier", "Beskrivelser som bygger på tolkning framfor på målinger"],
      explanation: "En diskurs er et system av framstillinger som gjør noen utsagn selvsagte og andre vanskelige å ta på alvor. Å kalle et område «utfordrende» eller «underinvestert» peker mot to helt ulike politikkforslag.",
    },
    {
      question: "Hvilken formulering om gentrifisering er faglig presis?",
      options: ["Den forklares både økonomisk og sosio-kulturelt, og begge må med", "Den skyldes at grupper med høy inntekt foretrekker eldre bydeler", "Den skyldes at eiendomsprisene stiger i sentrale strøk over tid", "Den er et resultat av kommunal planlegging for fortetting"],
      explanation: "Å ta bare den økonomiske eller bare den sosio-kulturelle forklaringen er en dokumentert feil. Begrepet utdypes i Del 4, men distinksjonen bør sitte allerede når det brukes som stedseksempel.",
    },
    {
      question: "Hva er det tydeligste tegnet på at et svar har blandet location og locale?",
      options: ["At begge omtales som stedets plassering på kartet", "At begge omtales som folks opplevelse av stedet", "At sense of place mangler i besvarelsen", "At de engelske termene brukes uten norsk knagg"],
      explanation: "Ombyttingen viser seg når arenaen behandles som en posisjonsangivelse i stedet for som rammene for sosialt liv. Manglende norsk knagg og manglende tredje betydning er andre svakheter, men de er ikke selve sammenblandingen.",
    },
  ],
  'sgo1001-1-4': [
    {
      question: "Hvilke to betydninger har skala i samfunnsgeografien?",
      options: ["Målestokk og vertikalt nivåhierarki", "Målestokk og geografisk utstrekning", "Analysenivå og statistisk oppløsning", "Kartformat og administrativ inndeling"],
      explanation: "Den ene er forholdet mellom kart og virkelighet, den andre er nivåene fra lokalt til globalt. Å ta bare målestokken er den mest dokumenterte enkeltfeilen i dette stoffet, og den ble eksplisitt målt høsten 2025.",
    },
    {
      question: "Hva betyr det at et kart er i 1:50 000?",
      options: ["Én lengdeenhet på kartet svarer til 50 000 i terrenget", "Kartet dekker et område på 50 000 kvadratmeter", "Kartet er forminsket 50 000 ganger fra originalen", "Én centimeter på kartet svarer til 50 000 meter ute"],
      explanation: "Målestokken er et forhold mellom to avstander i samme enhet. Merk at 50 000 centimeter er 500 meter, ikke 50 000 meter — nettopp derfor er det forholdet og ikke enheten som er poenget.",
    },
    {
      question: "Hva kjennetegner et kart i stor målestokk?",
      options: ["Det viser et lite område med mange detaljer", "Det viser et stort område med få detaljer", "Det dekker et helt land eller en verdensdel", "Det er tegnet i et større fysisk format enn vanlig"],
      explanation: "Logikken ligger i brøken: 1:5 000 er et større forhold enn 1:1 000 000. Huskeregelen er stor målestokk, lite område, mange detaljer — og motsatt for liten målestokk.",
    },
    {
      question: "Hva er generalisering på kart?",
      options: ["Den nødvendige forenklingen når målestokken blir mindre", "En feilkilde som oppstår når kartgrunnlaget er utdatert", "Å trekke allmenne slutninger fra det man ser på kartet", "Å bruke standardsymboler slik at kart kan sammenlignes"],
      explanation: "Generalisering er en betingelse, ikke en feil: et kart som viste alt, ville vært like stort som terrenget. Men fordi noe alltid velges bort, er kartet også et utvalg — og det kan få konsekvenser.",
    },
    {
      question: "Hva er skala som nivåhierarki?",
      options: ["At samfunnsforhold er organisert i nivåer opp til det globale", "At kart kan lages med ulik oppløsning for ulike formål", "At større enheter alltid har mer makt enn mindre enheter", "At forvaltningen er bygget opp med stat, fylke og kommune"],
      explanation: "Nivåforståelsen er et analytisk grep om virkeligheten, ikke om kartets oppløsning. Forvaltningsnivåene er ett eksempel på hierarkiet, men hierarkiet omfatter også marked, sivilsamfunn og mellomstatlige forhold.",
    },
    {
      question: "Hva er hovedforskjellen mellom de to skalaforståelsene?",
      options: ["Den ene gjelder en gjengivelse, den andre gjelder virkeligheten", "Den ene brukes i naturgeografi, den andre i samfunnsgeografi", "Den ene er eldre og er i praksis erstattet av den andre", "Den ene gjelder små områder, den andre gjelder store"],
      explanation: "Målestokken er en opplysning om kartet; nivåhierarkiet er et grep om hvordan samfunnet er organisert. Begge er i bruk, begge brukes i begge fagretningene, og begge gjelder alle størrelser på områder.",
    },
    {
      question: "Hva argumenterer Herod for?",
      options: ["At skalanivåer ikke er naturgitte, men skapes og kan endres", "At skalanivåene lokalt, nasjonalt og globalt er de eneste relevante", "At skala bør forstås som målestokk og ikke som nivå", "At globale prosesser er viktigere enn lokale i dagens samfunn"],
      explanation: "Poenget er at nivåene er frembrakt gjennom sosiale og politiske prosesser og derfor kan forhandles og endres. Merk formuleringen: Herod argumenterer for dette — han har ikke bevist det, og det skillet gir uttelling.",
    },
    {
      question: "Hvorfor er det upresist å skrive at Herod beviste at skala er sosialt konstruert?",
      options: ["Fordi det er et argument med konsekvenser, ikke et måleresultat", "Fordi påstanden er omstridt og ikke allment akseptert i faget", "Fordi Herod bare undersøkte ett land og ikke kunne generalisere", "Fordi konstruerte nivåer ikke lar seg måle empirisk i det hele tatt"],
      explanation: "Et argument inviterer til drøfting, mens et bevis bare kan gjengis. Å behandle teoretiske posisjoner som funn er en av de sikreste måtene å havne på refererende nivå.",
    },
    {
      question: "Hva betyr det at et skalanivå er sosialt konstruert?",
      options: ["At nivået er frembrakt av politiske og sosiale prosesser", "At nivået bare finnes i folks forestillinger og ikke i praksis", "At nivået er vilkårlig valgt og kan byttes ut når som helst", "At nivået varierer fra person til person og fra gruppe til gruppe"],
      explanation: "Sosialt konstruert er ikke det samme som uvirkelig eller vilkårlig: en kommunegrense er tegnet av mennesker og har fullt reelle virkninger på skatt, skolekrets og stemmerett. Konstruerte nivåer er ofte svært stabile.",
    },
    {
      question: "Hva er re-skalering?",
      options: ["At oppgaver eller myndighet flyttes mellom skalanivåer", "At et kart tegnes om i en annen målestokk", "At beslutninger flyttes fra staten og ned til kommunene", "At en aktør løfter en sak til et høyere nivå for å vinne"],
      explanation: "Re-skalering går begge veier og er den generelle prosessen at nivåfordelingen endres — ikke bare desentralisering. At en aktør strategisk flytter en sak, er derimot et skalasprang.",
    },
    {
      question: "Hva er et skalasprang?",
      options: ["At en aktør flytter en sak til et annet nivå for å styrke seg", "At myndighet formelt overføres fra ett forvaltningsnivå til et annet", "At et fenomen brer seg raskt fra lokalt til globalt omfang", "At kartet skifter målestokk underveis i en analyse"],
      explanation: "Skalasprang er en aktørhandling innenfor eksisterende strukturer, typisk når noen taper lokalt og løfter saken oppover. Formell overføring av myndighet er re-skalering, altså en strukturell endring.",
    },
    {
      question: "Hva er skalapolitikk?",
      options: ["Kampen om hvilket nivå en sak skal avgjøres på", "Politikk som utformes særskilt for hvert forvaltningsnivå", "Statens politikk for inndeling i kommuner og fylker", "Uenighet om hvor store enheter forvaltningen bør ha"],
      explanation: "Mekanismen er at hvert nivå har sitt eget flertall, og derfor er nivåvalget innhold og ikke prosedyre. Både «dette må avgjøres lokalt» og «dette er for viktig for den enkelte kommune» er skalapolitiske argumenter.",
    },
    {
      question: "Hvorfor er skala en maktdimensjon?",
      options: ["Fordi evnen til å operere på flere nivåer er ulikt fordelt", "Fordi de høyeste nivåene alltid overstyrer de laveste", "Fordi store aktører har mer ressurser enn små aktører", "Fordi globale prosesser i praksis styrer de lokale"],
      explanation: "Poenget er romlig rekkevidde, ikke ressurser eller rangorden: en stor aktør kan forhandle lokalt, nasjonalt og internasjonalt samtidig, mens et lokalsamfunn som regel bare har ett nivå tilgjengelig.",
    },
    {
      question: "Hva er en skalafeilslutning?",
      options: ["Å slutte fra ett nivå til et annet uten dekning", "Å bruke feil målestokk til det formålet kartet skal ha", "Å analysere et fenomen på et for høyt nivå", "Å blande de to betydningene av skala i samme svar"],
      explanation: "Feilen ligger i overføringen, ikke i tallene: at en bydel har lav gjennomsnittsinntekt, betyr ikke at de fleste der har lav inntekt. Slutningen kan gå begge veier, fra det store til det lille og omvendt.",
    },
    {
      question: "Hva er analysenivå?",
      options: ["Det nivået forskeren velger å studere fenomenet på", "Det nivået et fenomen faktisk utspiller seg på", "Graden av detalj i datamaterialet som er samlet inn", "Det forvaltningsnivået som har ansvar for saken"],
      explanation: "Analysenivå er et metodisk valg, mens skalanivå er en egenskap ved samfunnets organisering. Valget avgjør hva som kan observeres — nasjonale utslippstall kan for eksempel skjule at produksjonen er flyttet ut.",
    },
    {
      question: "Hva er den viktigste innvendingen mot «dråper i vannet»-analogien?",
      options: ["At påvirkning kan hoppe over nivåer i stedet for å følge dem", "At nivåene i praksis er langt flere enn analogien viser", "At analogien er hentet fra naturvitenskapen og passer dårlig", "At nivåene overlapper hverandre i stedet for å være atskilte"],
      explanation: "En internasjonal aktør kan påvirke en kommune direkte uten å gå veien om nasjonalt nivå. I tillegg antyder bildet at nivåene ligger fast som naturlige beholdere, og det er nettopp det Herod bestrider.",
    },
    {
      question: "Hva viser den norske fylkes- og regionreformen i denne sammenhengen?",
      options: ["At et skalanivå kan endres ved politisk vedtak", "At større forvaltningsenheter gir bedre tjenester", "At nivåene i forvaltningen er stabile over lang tid", "At regionalt nivå er overflødig i et lite land"],
      explanation: "Faglig sett er poenget mekanismen: inndelingen var ikke gitt av geografien, men vedtatt, og kunne endres igjen. Om reformen var vellykket, er et politisk omstridt spørsmål som faget ikke avgjør.",
    },
    {
      question: "Hva menes med byen som skala?",
      options: ["Å behandle byen som et eget analysenivå, ikke bare et sted", "Å måle byens størrelse i innbyggere, areal og tetthet", "Å studere hvordan byen oppleves av dem som bor og arbeider der", "Å sammenligne byer av ulik størrelse med hverandre"],
      explanation: "Byen som nivå er der boligmarked, arbeidsmarked og planlegging utspiller seg, og byer opptrer i dag ofte som aktører på nivåer over sitt eget. Byen som sted handler derimot om mening og tilknytning.",
    },
    {
      question: "Hvorfor er datas skalanivå et analytisk problem?",
      options: ["Fordi det avgjør hvilke spørsmål som i praksis kan besvares", "Fordi data på lavt nivå alltid er mer pålitelige enn aggregerte", "Fordi statistikk sjelden samles inn på nasjonalt nivå", "Fordi tallene blir mindre nøyaktige jo høyere nivå de gjelder"],
      explanation: "Finnes tallene bare på kommunenivå, tvinges analysen opp på et nivå som kan skjule nettopp de forskjellene du vil undersøke. Dette er en begrensning i materialet, ikke en ugyldig slutning mellom nivåer; en slik slutning kalles derimot skalafeilslutning.",
    },
    {
      question: "Hva er forskjellen på skala og sted?",
      options: ["Skala er nivået, sted er den meningsbærende avgrensningen", "Skala gjelder store områder, sted gjelder små", "Skala er objektivt målbart, sted er subjektivt", "Skala brukes om forvaltning, sted om folks hverdag"],
      explanation: "Et lokalsamfunn er begge deler samtidig, men de to spørsmålene gir ulike svar. Skriv derfor «på lokalt nivå» når du mener skala, og «på stedet» når du mener sted.",
    },
    {
      question: "Hva skiller skaladimensjonen fra nettverksdimensjonen?",
      options: ["Skala er vertikal mellom nivåer, nettverk horisontalt", "Skala gjelder offentlige aktører, nettverk gjelder private", "Skala er formell struktur, nettverk er uformelle relasjoner", "Skala gjelder innenfor land, nettverk gjelder mellom land"],
      explanation: "En påvirkning som følger nivåene, går gjennom formelle strukturer fra stat til fylke til kommune; en som går gjennom nettverk, kan hoppe over nivåer helt. Begge dimensjonene inngår i TPSN nettopp derfor.",
    },
    {
      question: "Hva er de to kravene til et kjernebegrepsløft i et tematisk svar?",
      options: ["Det skal være kort, og det skal være relevant for saken", "Det skal nevne alle tre kjernebegrepene og gjentas i konklusjonen", "Det skal komme innledningsvis og forankres i pensumlitteraturen", "Det skal bygge på et eget eksempel og på en navngitt teoretiker"],
      explanation: "Løftet er én til tre setninger som svarer på hva vi ser når vi legger rom, sted eller skala på saken. Et påklistret løft uten innhold er et irrelevant moment, og irrelevante momenter trekker eksplisitt ned.",
    },
  ],
  'sgo1001-2-1': [
    {
      question: "Hva søker en idiografisk tilnærming etter?",
      options: ["Forståelse av det enkelte tilfellet i hele dets egenart", "Lovmessige sammenhenger som gjelder på tvers av tilfeller", "Statistisk representativitet i et tilfeldig trukket utvalg", "En modell som forenkler sammenhengen til det vesentlige"],
      explanation: "Det idiografiske idealet gjør enkelttilfellet til målet: hva skjer her, og hvordan henger det sammen. Lovmessige sammenhenger og modeller hører til det nomotetiske idealet, og statistisk representativitet er et utvalgskrav som følger av det.",
    },
    {
      question: "Hva søker en nomotetisk tilnærming etter?",
      options: ["Mønstre og sammenhenger som gjelder på tvers av tilfeller", "En tett beskrivelse av hva som skjedde på ett bestemt sted", "Å få frem hva et fenomen betyr for dem som lever med det", "Å avgrense en region og beskrive den som en helhet"],
      explanation: "Nomotetisk betyr omtrent «å sette lov», og enkelttilfellet er da én observasjon blant mange. Tett beskrivelse av ett sted og meningsforståelse hører til det idiografiske idealet, og regionavgrensning er regionalgeografiens arbeidsmåte.",
    },
    {
      question: "Hva er den vanligste feilkoblingen når idiografisk og nomotetisk forklares?",
      options: ["At de oversettes til kvalitativ og kvantitativ metode", "At de knyttes til hver sin epoke i fagets historie", "At de forbindes med henholdsvis sted og rom som kjernebegrep", "At de fremstilles som to navn på den samme distinksjonen"],
      explanation: "Skillet gjelder kunnskapsmål, ikke datatype: du kan arbeide idiografisk med tall, og nomotetisk med intervjuer. At de har hatt ulik tyngde i ulike epoker er riktig nok, og de er ikke to navn på det samme.",
    },
    {
      question: "Hva innebærer det å generalisere?",
      options: ["Å slutte fra det undersøkte til noe man ikke har undersøkt", "Å beskrive materialet man faktisk har på en forenklet måte", "Å velge ut de tilfellene som gir mest innsikt i en mekanisme", "Å samle natur, næring og kultur til ett bilde av et område"],
      explanation: "Generalisering strekker seg utover materialet og er derfor en påstand med risiko. Å beskrive materialet er beskrivelse, strategisk utvalg er case-studiens logikk, og syntesen av natur og kultur er regionalgeografiens arbeidsmåte.",
    },
    {
      question: "Hva kjennetegner en case-studie som arbeidsmåte?",
      options: ["Ett eller få tilfeller undersøkes grundig, valgt strategisk", "Mange enheter måles på få variabler for å finne mønsteret", "Utvalget trekkes tilfeldig for å sikre representativitet", "Sammenhengen forenkles bevisst for å få frem det vesentlige"],
      explanation: "Case-studien velger få tilfeller fordi de gir mest innsikt, ikke fordi de representerer en fordeling. Mange enheter på få variabler og tilfeldig trekning hører til den statistiske arbeidsmåten, og bevisst forenkling er modellens kjennetegn.",
    },
    {
      question: "Hva er en modell i vitenskapsteoretisk forstand?",
      options: ["En bevisst forenklet fremstilling av hvordan en sammenheng virker", "En samlet gjengivelse av hva som faktisk skjedde i et forløp", "Et representativt utvalg av enheter fra en større populasjon", "En fyldig beskrivelse av hva et fenomen betyr for de berørte"],
      explanation: "Modellen er alltid usann i detalj, og det er poenget: den vurderes på om forenklingen er fruktbar. Gjengivelse av forløp og meningsbeskrivelse hører til det idiografiske arbeidet, og et utvalg er ikke en modell.",
    },
    {
      question: "Hva var hovedanliggendet i Hartshornes program om områdedifferensiering?",
      options: ["Å forklare hvordan og hvorfor områder skiller seg fra hverandre", "Å måle hvordan goder og byrder fordeler seg skjevt i rommet", "Å finne allmenne lover for hvor økonomisk aktivitet lokaliseres", "Å vise hvordan menneskelig aktivitet former landskapet over tid"],
      explanation: "Områdedifferensiering er et fagprogram: forskjellen mellom områder er selve studieobjektet. Skjevfordeling av goder er fenomenet romlig ulikhet, lokaliseringslover hører til den nomotetiske tradisjonen, og landskapsformingen er Sauers kulturlandskapsbegrep.",
    },
    {
      question: "Hvordan skiller regionalgeografi seg fra systematisk geografi?",
      options: ["Regionalgeografien ordner kunnskapen etter område, den systematiske etter tema", "Regionalgeografien bygger på kvalitative kilder, mens den systematiske bygger på tall", "Regionalgeografien studerer natur, den systematiske studerer samfunn", "Regionalgeografien er beskrivende, den systematiske er alltid forklarende"],
      explanation: "Skillet gjelder hvordan kunnskapen organiseres: alt om ett område mot ett tema på tvers av områder. Begge kan bruke både tall og tekst, begge kan behandle natur og samfunn, og begge kan være forklarende.",
    },
    {
      question: "Hva holder en region sammen i fagets bruk av begrepet?",
      options: ["Enten likhet i trekk, samspill gjennom strømmer eller vedtak", "En felles stedsfølelse blant dem som bor innenfor grensen", "En naturgitt grense som skiller området fra naboområdene", "En felles administrativ ledelse med myndighet over hele arealet"],
      explanation: "Faget skiller mellom regioner avgrenset av likhet, av samspill og av administrativt vedtak. Stedsfølelse kjennetegner sted og ikke region, naturgitte grenser er unntaket, og administrativ ledelse gjelder bare den tredje typen.",
    },
    {
      question: "Hva er kjernen i Sauers kulturlandskapsbegrep?",
      options: ["At landskapet er formet av menneskelig aktivitet gjennom lang tid", "At naturgrunnlaget avgjør hvilken kultur som kan utvikle seg", "At landskapet bør vernes mot inngrep fra moderne næringsdrift", "At kulturelle uttrykk varierer systematisk med klimasoner"],
      explanation: "Sauer snur forklaringsretningen: kulturen virker på naturgrunnlaget, og resultatet er landskapet. At naturen avgjør kulturen er nettopp naturdeterminismen, vern er et forvaltningsspørsmål, og klimabundne kulturuttrykk er Huntingtons tanke.",
    },
    {
      question: "Hva kjennetegner en tykk beskrivelse?",
      options: ["Den får frem hva hendelsene betyr i den sammenhengen de står i", "Den tar med flest mulig detaljer om det som er observert", "Den bygger på et stort datamateriale fra mange enheter", "Den kombinerer flere metoder for å styrke konklusjonen"],
      explanation: "Tykk beskrivelse handler om mening og sammenheng, ikke om mengde. Flest mulig detaljer uten tolkning er tynn beskrivelse med mange ord, stort datamateriale er en annen dimensjon, og metodekombinasjon er et metodevalg.",
    },
    {
      question: "Hvilket ledd inngikk i kritikken som veltet regionalgeografien fra sin sentrale plass?",
      options: ["At fremstillingene beskrev hva som fantes hvor, ikke hvorfor", "At de bygde på kvantitative modeller uten forankring i felt", "At de la for stor vekt på maktforhold mellom klasser og grupper", "At de undervurderte betydningen av naturgrunnlaget i regionene"],
      explanation: "Kritikken var at områdefremstillingene ble beskrivende og ikke-kumulative, og at regionavgrensningen var vilkårlig. Modellkritikk og maktanalyse er argumenter fra senere faser i faget, og naturgrunnlaget var tvert imot godt representert.",
    },
    {
      question: "Hva er forskjellen mellom at naturmiljøet påvirker og at det bestemmer samfunnsutviklingen?",
      options: ["Påvirkning gjør utfall mer sannsynlige, determinisme fastlegger dem", "Påvirkning gjelder næringsveier, determinisme gjelder bosettingsmønstre", "Påvirkning er et kvalitativt begrep, determinisme et kvantitativt", "Påvirkning gjelder på lokalt nivå, determinisme på globalt nivå"],
      explanation: "Hele diskusjonen om naturdeterminismen ligger i denne forskjellen: at naturen avgrenser mulighetsrommet, mot at den avgjør utfallet. Skillet handler verken om hvilke fenomener, hvilken datatype eller hvilket nivå det er snakk om.",
    },
    {
      question: "Hvilken posisjon knyttes til Ellen Semple og Ellsworth Huntington?",
      options: ["Naturdeterminismen — at naturmiljøet bestemmer samfunn og kultur", "Regionalgeografien — at fagets objekt er den avgrensede regionen", "Kulturlandskapstenkningen — at kulturen former landskapet over tid", "Situert kunnskap — at all kunnskap er posisjonert og perspektivbundet"],
      explanation: "Semple og Huntington er de navnene faget knytter naturdeterminismen til. Regionalgeografien forbindes med Hartshorne, kulturlandskapet med Sauer, og situert kunnskap med Haraway.",
    },
    {
      question: "Hva var Huntingtons særlige variant av naturdeterminismen?",
      options: ["At klimaet forklarer befolkningers arbeidsevne og samfunnsnivå", "At jordsmonnet forklarer hvilke næringsveier som kan utvikles", "At terrenget forklarer hvor politiske grenser kommer til å gå", "At avstanden til havet forklarer hvor handel oppstår først"],
      explanation: "Huntington koblet klimasoner til yteevne og videre til det han kalte sivilisasjonsnivå. Jordsmonn, terreng og kystnærhet er reelle geografiske faktorer, men de er ikke det argumentet Huntington er kjent for.",
    },
    {
      question: "Hvorfor gjør den evolusjonistiske rammen naturdeterminismen særlig problematisk?",
      options: ["Fordi samfunn rangeres på en stige, og naturen forklarer plasseringen", "Fordi den bygde på statistiske modeller som ikke lot seg etterprøve av andre", "Fordi den overså at naturgrunnlaget varierer innenfor hvert land", "Fordi den forutsatte at alle samfunn har det samme naturgrunnlaget"],
      explanation: "Kombinasjonen av en rangstige og en naturforklaring gir en tilsynelatende vitenskapelig begrunnelse for at noen folkeslag står høyere enn andre. Modellsvakhet og variasjon i naturgrunnlag er andre og mindre grunnleggende innvendinger.",
    },
    {
      question: "Hvilket argument mot naturdeterminismen er empirisk?",
      options: ["At samfunn med likt naturgrunnlag har utviklet seg svært ulikt", "At teorien fjerner menneskelig handling ut av forklaringen", "At teorien fungerte som begrunnelse for kolonistyre i sin samtid", "At naturgrunnlaget setter betingelser uten å avgjøre utfallet"],
      explanation: "Det empiriske argumentet er at observasjonene ikke stemmer med teorien. At handling forsvinner er et logisk argument, koloniargumentet er ideologikritikk, og betingelsesformuleringen er dagens posisjon, ikke en innvending i seg selv.",
    },
    {
      question: "Hva er ideologikritikk anvendt på en faglig posisjon?",
      options: ["Å undersøke hvilke interesser en nøytral fremstilling tjener", "Å prøve om påstandene i teorien stemmer med tilgjengelige data", "Å vurdere om forfatterne handlet moralsk forsvarlig i sin samtid", "Å plassere teorien i den vendingen den historisk tilhørte"],
      explanation: "Ideologikritikk spør etter teoriens funksjon: hvem tjener det at dette fremstår som vitenskap. Datatesting er empirisk prøving, moralsk vurdering av personer er noe annet, og periodisering er faghistorisk plassering.",
    },
    {
      question: "Hva er dagens posisjon i faget på forholdet mellom natur og samfunn?",
      options: ["Naturgrunnlaget setter betingelser som samfunn håndterer ulikt", "Naturgrunnlaget er uten betydning for samfunnsmessige forskjeller", "Naturgrunnlaget avgjør hvilke næringer et samfunn kan utvikle", "Naturgrunnlaget virker bare gjennom klimaets effekt på arbeidsevne"],
      explanation: "Formuleringen som holder er at naturen avgrenser mulighetsrommet, mens teknologi, institusjoner og politiske valg avgjør hva som skjer innenfor det. Å hevde at naturen er uten betydning er en overkorrigering, og de to andre er varianter av determinisme.",
    },
    {
      question: "Hva viser norsk oljeforvaltning som moteksempel mot naturdeterminismen?",
      options: ["At samme naturgrunnlag gir ulikt utfall avhengig av institusjonene", "At store naturressurser nesten alltid fører til høy velstand", "At kystnære land systematisk utvikler seg raskere enn innlandsland", "At ressursutvinning krever et kaldt klima for å bli lønnsom"],
      explanation: "Geologien var gitt, mens forvaltningsmodellen var et politisk valg som ble tatt annerledes andre steder med sammenlignbare funn. At ressurser gir velstand er nettopp det ressursforbannelsen problematiserer, og de to siste er deterministiske påstander.",
    },
    {
      question: "Hva er kjennetegnet på en kontekstsensitiv forklaring?",
      options: ["Den sier under hvilke betingelser mekanismen faktisk virker", "Den understreker at utfallet kan variere uten å si hva det avhenger av", "Den begrenser seg til det tilfellet som faktisk er undersøkt", "Den slutter fra et representativt utvalg til hele populasjonen"],
      explanation: "Formen er «X fører til Y der Z er til stede». Å si at noe kan variere uten å si hva det avhenger av er et forbehold og ikke en forklaring, og de to siste beskriver henholdsvis ren beskrivelse og statistisk generalisering.",
    },
    {
      question: "Hva menes med overførbarhet i idiografisk forskning?",
      options: ["At mekanismen er beskrevet godt nok til å gjenkjennes andre steder", "At funnene gjelder for hele populasjonen tilfellet er hentet fra", "At undersøkelsen kan gjentas av andre forskere og gi det samme resultatet", "At flere metoder er brukt slik at funnene bekrefter hverandre"],
      explanation: "Overførbarhet hviler på hvor godt mekanismen er beskrevet, ikke på utvalget. Slutning til populasjonen er statistisk generalisering, gjentakelse handler om pålitelighet, og bekreftelse gjennom flere metoder er triangulering.",
    },
    {
      question: "Hva skiller en mekanisme fra en korrelasjon?",
      options: ["Mekanismen sier hvordan noe virker, korrelasjonen bare at det samsvarer", "Mekanismen bygger på tall, korrelasjonen på tolkning av tekst", "Mekanismen gjelder ett sted, korrelasjonen gjelder mange steder", "Mekanismen er en påstand om det som kommer, korrelasjonen om det som var"],
      explanation: "En korrelasjon er et samsvar i tallene; en mekanisme er en påstand om virkemåte som kan prøves og presiseres. Skillet handler verken om datatype, utstrekning eller tidshorisont.",
    },
    {
      question: "Hvordan kombineres de to vitenskapsidealene i dagens samfunnsgeografi?",
      options: ["Brede analyser viser mønsteret, dybdestudier viser mekanismen bak", "Kvalitative data samles inn først og kvantifiseres deretter", "Idiografiske studier brukes til undervisning, nomotetiske til forskning", "Det ene idealet brukes i naturgeografi, det andre i samfunnsgeografi"],
      explanation: "Arbeidsdelingen er at mønsteret peker ut hvor det er noe å forklare, og at dybdestudien viser hva som faktisk skjer der. Kvantifisering av kvalitative data er en metodeoperasjon, og de to siste er inndelinger faget ikke bruker.",
    },
  ],
  'sgo1001-2-2': [
    {
      question: "Hva kjennetegner en «vending» i faghistorisk forstand?",
      options: ["Et skifte i objekt, metode og forklaringsideal på én gang", "En enkelt teori som får bred oppslutning i faget", "En periode der faget vokser raskt i antall forskere", "Et skifte i hvilke geografiske områder faget studerer"],
      explanation: "Tre ting endrer seg samtidig: hva faget studerer, hvordan det studeres, og hva som teller som et godt svar. En enkelt teori er mindre enn en vending, og verken vekst i faget eller endret geografisk dekning er det begrepet betegner.",
    },
    {
      question: "Hva er kravet til fra/til-strukturen i en faghistorisk redegjørelse?",
      options: ["At vendingen beskrives som en bevegelse med et før og et etter", "At redegjørelsen dekker alle vendingene i kronologisk rekkefølge", "At framstillingen tar med både forskere og verk som var sentrale", "At retningens svakheter listes opp til slutt i egen avdeling"],
      explanation: "En vending er en bevegelse, og redegjørelsen må derfor si hva faget kom fra og hva det gikk til. Å dekke alle vendingene er nettopp den feilen den åpne oppgaven straffer, og navnelister og svakhetslister erstatter ikke bevegelsen.",
    },
    {
      question: "Hvilket problem svarte den kvantitative vendingen på?",
      options: ["At regionfremstillingene beskrev uten å forklare mønstrene", "At faget hadde oversett maktforhold og eiendomsforhold i byen", "At menneskers erfaring av sted ikke fikk plass i analysene", "At forskerens egen posisjon aldri ble gjort eksplisitt i arbeidene"],
      explanation: "Vendingen var et svar på kritikken av regionalgeografien: beskrivende, ikke-kumulativ kunnskap med vilkårlig regionavgrensning. Makt, mening og posisjonalitet er de problemene henholdsvis den radikale, den kulturelle og den feministiske bevegelsen tok opp.",
    },
    {
      question: "Hva menes med at faget under den kvantitative vendingen ble en «romvitenskap»?",
      options: ["At objektet ble rommet som abstrakt struktur av avstander", "At faget begynte å samarbeide tett med naturvitenskapelige disipliner", "At studiet av verdensrommet ble en del av geografiens arbeidsområde", "At regionen ble erstattet av staten"],
      explanation: "Romvitenskapen studerte rommet som målbar struktur, ikke området med sitt særpreg. Samarbeid med andre fag fulgte ikke automatisk, verdensrommet er en misforståelse av ordet, og staten ble ikke fagets enhet.",
    },
    {
      question: "Hva er positivismens kunnskapsideal?",
      options: ["Etterprøvbar kunnskap om lovmessige sammenhenger i data", "Forståelse av hva et fenomen betyr for de berørte", "Kunnskap som er nyttig for dem som er dårligst stilt i samfunnet", "Innsikt som alltid oppgir fra hvilket ståsted den er produsert"],
      explanation: "Positivismen bygger på observerbare data og søker etterprøvbare lovmessigheter. Forståelse innenfra er den kulturelle vendingens ideal, nytte for de dårligst stilte er den radikale vendingens ambisjon, og eksplisitt ståsted er kravet i situert kunnskap.",
    },
    {
      question: "Hva skiller romlig analyse fra geografiske informasjonssystemer?",
      options: ["Romlig analyse er tenkemåten, systemene er verktøyet", "Romlig analyse bruker kart, systemene bruker tall", "Romlig analyse er kvalitativ, informasjonssystemene er kvantitative", "Romlig analyse gjelder byer, informasjonssystemene gjelder naturområder"],
      explanation: "Tenkemåten stammer fra 1950- og 1960-tallet, mens systemene er verktøyet som senere gjorde slik analyse langt enklere. Begge bruker både kart og tall, begge er kvantitativt orienterte, og ingen av dem er begrenset til bestemte områdetyper.",
    },
    {
      question: "Hvilken kritikk rettet den radikale vendingen mot den kvantitative?",
      options: ["At mønstre ble beskrevet som nøytrale og selvforklarende", "At modellene så bort fra fenomenenes historie", "At analysene var for opptatt av mening og for lite av målbare forhold", "At forskerne ikke gjorde rede for sin egen bakgrunn og sitt eget ståsted"],
      explanation: "Den radikale kritikken gjaldt maktblindheten: fordelingen fremstod som resultat av nøytrale mekanismer. Tidsdimensjonen var ikke hovedpoenget, meningskritikken kom fra den kulturelle vendingen, og posisjonalitetskravet kom med situert kunnskap.",
    },
    {
      question: "Hva er kjernen i den radikale vendingen?",
      options: ["At romlige mønstre forklares med makt-, eiendoms- og interesseforhold", "At geografi bør bruke kvalitative metoder framfor statistiske modeller", "At faget bør beskrive hver region for seg med alle dens særtrekk", "At naturgrunnlaget må tilbake som forklaring på samfunnsforskjeller"],
      explanation: "Vendingen la til spørsmålet om hvem som tjener på fordelingen, og brukte gjerne de samme dataene som før. Metodevalg er ikke det som skiller den ut, regionbeskrivelser er regionalgeografiens program, og naturforklaringer er nettopp det faget hadde forlatt.",
    },
    {
      question: "Hvilket navn er den marxistiske geografien tettest knyttet til?",
      options: ["David Harvey", "Donna Haraway", "Richard Hartshorne", "Andrew Herod"],
      explanation: "Harvey er den mest kjente eksponenten, og hans egen bevegelse fra kvantitativ romanalyse til marxistisk geografi illustrerer vendingen. Haraway står bak situert kunnskap, Hartshorne bak regionalgeografien, og Herod bak skalabegrepet.",
    },
    {
      question: "Hva ligger i påstanden om at ulikhet er romlig produsert?",
      options: ["At romlige forhold selv er med på å frembringe forskjellen", "At ulikheten kan tegnes inn på et kart og måles mellom bydeler", "At forskjellene mellom steder er større enn forskjellene innad i dem", "At ulikhet oppstår først når folk flytter"],
      explanation: "Poenget er at boligmarked, transporttilbud og kretsgrenser er en del av mekanismen, ikke bare bakteppet. Å kunne kartfeste ulikheten er å vise ulikhet i rommet, og de to siste påstandene er empiriske og ikke det begrepet hevder.",
    },
    {
      question: "Hvilken innvending er reist mot den radikale vendingen?",
      options: ["At menneskene blir posisjoner i en struktur uten egen mening", "At den er for opptatt av enkeltsteders unike særtrekk", "At den avviser bruk av statistiske data på prinsipielt grunnlag", "At den overdriver naturgrunnlagets betydning for byutvikling"],
      explanation: "Kritikken er at beboere blir eiere, leietakere og investorer, mens hva stedet betyr for dem faller ut — og der satte den kulturelle vendingen inn. Retningen var verken opptatt av det unike, motstander av statistikk eller opptatt av naturgrunnlaget.",
    },
    {
      question: "Hva var det nye i den kulturelle vendingen?",
      options: ["At mening ble et forklaringsledd i alle temaer i faget", "At kultur ble et nytt tema ved siden av økonomi og politikk", "At faget begynte å studere kunst, litteratur og musikk", "At kvalitative metoder ble tillatt i tillegg til kvantitative"],
      explanation: "Vendingen gjorde tolkning og representasjon til noe som forklarer, også i økonomisk geografi og bygeografi. Å behandle kultur som ett tema blant flere er nettopp den forståelsen som gjør vendingen til et temavalg, og metodeutvidelsen var en følge, ikke kjernen.",
    },
    {
      question: "Hva menes med en representasjon i denne sammenhengen?",
      options: ["En framstilling som er med på å forme hvordan noe oppfattes", "En beskrivelse som måles på om den gjengir virkeligheten korrekt", "En talsperson som opptrer på vegne av beboerne i et område", "Et utvalg som gjenspeiler sammensetningen i befolkningen"],
      explanation: "Representasjoner analyseres på hva de gjør: hvem som får framstille, hva som velges ut og hva som utelates. Riktighetsvurdering hører til beskrivelsen, og de to siste er andre betydninger av ordet enn den faglige.",
    },
    {
      question: "Hva innebærer det å gjøre mening til studieobjekt?",
      options: ["Å behandle folks tolkninger som systematisk materiale", "Å la forskerens egen tolkning avgjøre hva materialet betyr", "Å erstatte forklaring med gjenfortelling av hva folk har sagt", "Å begrense analysen til det alle er enige om"],
      explanation: "Kravene til systematikk, gjennomsiktighet og belegg gjelder fullt ut, selv om objektet er subjektivt. De tre andre beskriver nettopp den vilkårligheten kritikken frykter, og som god praksis skal hindre.",
    },
    {
      question: "Hvilken kritikk er reist mot den kulturelle vendingen?",
      options: ["At de materielle forholdene kom i bakgrunnen for språket", "At den behandlet mennesker som enheter som minimerer kostnad", "At den forutsatte en forsker som ikke påvirker", "At den gjorde regionen til fagets viktigste analyseenhet igjen"],
      explanation: "Innvendingen er at faget skrev om hvordan noe ble omtalt, mens prisene steg uavhengig av omtalen. Kostnadsminimerende enheter hører til romvitenskapen, den nøytrale observatøren til positivismen, og regionen til regionalgeografien.",
    },
    {
      question: "Hva studerer feministisk geografi?",
      options: ["Hvordan kjønn og romlige forhold virker på hverandre", "Kvinners liv og erfaringer i ulike deler av verden", "Hvordan familiestrukturer varierer mellom land og regioner", "Forskjeller i flyttemønstre mellom aldersgrupper og yrker"],
      explanation: "Retningen bruker kjønn som analytisk kategori, og den studerer dermed hvordan forskjellen virker for alle. Å studere kvinner alene er den vanligste feilgjengivelsen, og familiestruktur og aldersforskjeller er andre temaer.",
    },
    {
      question: "Hva er forskjellen på kjønn som bakgrunnsvariabel og som analytisk kategori?",
      options: ["Som analytisk kategori spør man hvorfor forskjellen oppstår", "Som analytisk kategori brukes kun kvalitative data i analysen", "Som analytisk kategori studeres kvinner og menn hver for seg", "Som analytisk kategori regnes kjønn som en fast egenskap"],
      explanation: "Bakgrunnsvariabelen gir to søyler i et diagram; den analytiske kategorien spør hvilke forpliktelser, forventninger og romlige ordninger som frembringer mønsteret. Datatype, adskilt analyse og fasthet er ikke det som skiller de to bruksmåtene.",
    },
    {
      question: "Hva viser eksempelet med reisekjeder som går innom barnehage, butikk og skole?",
      options: ["At en teknisk korrekt modell kan bygge på én type liv", "At kollektivtransport er dårligere utbygd enn veinettet", "At kvinner reiser lenger enn menn i løpet av en vanlig dag", "At reisevaner er vanskelige å måle med spørreundersøkelser"],
      explanation: "Poenget er at forutsetningene i modellen — reisen fra bolig til arbeid og tilbake — systematisk utelot en vanlig reiseform. Utbyggingsgrad, reiselengde og måleproblemer er andre spørsmål enn det caset belegger.",
    },
    {
      question: "Hva er kjernen i Haraways begrep om situert kunnskap?",
      options: ["At kunnskap er produsert fra et ståsted som må gjøres synlig", "At all kunnskap er like gyldig fordi ingen kan se hele bildet", "At kunnskap om et sted krever at forskeren har bodd der selv", "At kunnskap blir sikrere jo flere metoder som brukes samtidig"],
      explanation: "Begrepet er et krav om skjerpet etterrettelighet: gjør posisjonen eksplisitt, så andre kan vurdere hva den lot deg se. At alt er like gyldig er den motsatte påstanden, og verken botid eller metodemengde er det begrepet handler om.",
    },
    {
      question: "Hva er «guds øye»-utsikten et bilde på?",
      options: ["Forestillingen om et blikk uten noe ståsted i det hele tatt", "Kartleggingen av store områder ved hjelp av satellittbilder", "Den overordnede planleggerens blikk på byen som helhet", "Idealet om at forskning skal kunne etterprøves av andre"],
      explanation: "Bildet brukes om observatøren som ser alt fra ingensteds, og det er dette situert kunnskap avviser. Satellittkartlegging og planleggerblikk er konkrete praksiser, og etterprøvbarhet er et krav kritikken ikke retter seg mot.",
    },
    {
      question: "Hva menes med posisjonalitet i forskning?",
      options: ["Forskerens plassering og det utsynet plasseringen gir", "Forskerens meninger om det politiske spørsmålet som studeres", "Den geografiske plasseringen av feltarbeidet som gjennomføres", "Rekkefølgen data samles inn i under feltarbeid"],
      explanation: "Posisjonalitet handler om hva plasseringen ga tilgang til og hva den stengte ute — ikke om hva forskeren mener. Feltets beliggenhet og innsamlingsrekkefølge er andre forhold ved undersøkelsen.",
    },
    {
      question: "Hva er refleksivitet i praksis?",
      options: ["At forskeren gjør rede for hvordan egen posisjon formet materialet", "At forskeren forteller om sine egne opplevelser under feltarbeidet", "At funnene kontrolleres ved at undersøkelsen gjentas av andre", "At deltakerne får lese og godkjenne den ferdige rapporten"],
      explanation: "Refleksivitet er en vurdering av konsekvensene for datamaterialet: hva som ble sagt, hva som ikke ble sagt, hva som antakelig ble oversett. Personlige beretninger, gjentakelse og godkjenning er andre praksiser.",
    },
    {
      question: "Hva er det sterkeste argumentet for at vendingene ligger som lag framfor å avløse hverandre?",
      options: ["At alle tre er i bruk fordi de svarer på ulike spørsmål", "At ingen av retningene noen gang møtte alvorlig kritikk", "At de tre vendingene oppsto omtrent samtidig i faget", "At faget aldri har kastet ut en teori det en gang har brukt"],
      explanation: "Romlig analyse, maktanalyse og meningsanalyse gir tre forskjellige funn om samme sak, og et prosjekt velger inntak ut fra hva det vil vite. Alle tre møtte kritikk, de oppsto i tur og orden, og faget har forlatt posisjoner — naturdeterminismen er eksempelet.",
    },
    {
      question: "Hvilken rolle har humanistisk geografi i forhold til den kulturelle vendingen?",
      options: ["Den er en forløper som satte stedserfaringen i sentrum", "Den er en senere reaksjon mot den kulturelle vendingens tekstfokus", "Den er en annen betegnelse på samme bevegelse", "Den er den retningen som utviklet de romlige modellene på 1960-tallet"],
      explanation: "Retningen fra 1970-tallet gjorde stedserfaring til fagpoeng, og fra den har faget stedsfølelse som egen dimensjon. Den er verken en senere reaksjon, samme sak eller opphav til modellene.",
    },
  ],
  'sgo1001-2-3': [
    {
      question: "Hva styrer metodevalget i et forskningsprosjekt?",
      options: ["Forskningsspørsmålet og hva det krever av materiale og data", "Hvilken metode forskeren behersker best fra før av", "Hvor mye data som er tilgjengelig i offentlige registre", "Hvilket tema prosjektet handler om og hvor det foregår"],
      explanation: "Grunnregelen er at spørsmålet kommer først og metoden velges for å kunne svare på det. Forskerens vaner, datatilgang og tema er praktiske rammer, men de avgjør ikke hva som er et forsvarlig design.",
    },
    {
      question: "Hva kan kvalitativ metode svare på?",
      options: ["Hvordan og hvorfor noe henger sammen for dem som er studert", "Hvor utbredt et fenomen er i en større befolkningsgruppe", "Om to forhold henger systematisk sammen på tvers av enheter", "Hvordan et fenomen har utviklet seg i tall over lang tid"],
      explanation: "Kvalitative data gir mening, sammenheng og prosess sett innenfra, men kan ikke si noe om utbredelse. De tre andre spørsmålene krever mange enheter målt på sammenlignbare egenskaper.",
    },
    {
      question: "Hva er den viktigste begrensningen ved kvantitativ metode?",
      options: ["Den ser bare det som på forhånd er gjort målbart", "Den kan ikke brukes på små geografiske områder", "Den krever alltid at forskeren samler inn dataene selv", "Den kan ikke si noe om sammenhenger mellom forhold"],
      explanation: "For å telle noe må det først defineres presist, og det som ikke passer i kategoriene, registreres ikke. Metoden fungerer godt på små områder, kan bruke registerdata og er nettopp god på sammenhenger.",
    },
    {
      question: "Hva kjennetegner et strategisk utvalg?",
      options: ["Enhetene er valgt for å gi mest mulig innsikt i temaet", "Enhetene er trukket tilfeldig fra hele befolkningen", "Enhetene er valgt fordi de er typiske for gruppen", "Enhetene er så mange at funnene kan generaliseres"],
      explanation: "Kriteriet er innsikt og variasjonsbredde, ikke representativitet. Tilfeldig trekning og krav om typiskhet hører til utvalg som skal speile en fordeling, og antallet er ikke det avgjørende.",
    },
    {
      question: "Hvorfor er ikke et stort utvalg det samme som et representativt utvalg?",
      options: ["Fordi et stort utvalg også kan være systematisk skjevt", "Fordi store utvalg gir større målefeil per enhet", "Fordi representativitet krever kvalitative data i tillegg", "Fordi store utvalg alltid må trekkes fra ett område"],
      explanation: "Svarer bare de som har tid og interesse, hjelper det ikke at de er mange — skjevheten består. Målefeil per enhet, datatype og geografisk avgrensning er andre forhold enn representativitet.",
    },
    {
      question: "Hva skiller en fokusgruppe fra et individuelt intervju?",
      options: ["Deltakerne responderer på hverandre i samtalen", "Fokusgruppen bruker faste spørsmål i fast rekkefølge", "Fokusgruppen gir et representativt bilde av gruppen", "Fokusgruppen krever at deltakerne kjenner hverandre"],
      explanation: "Poenget er samtalen mellom deltakerne: hva som kan sies, hva som imøtegås, hva ingen tar opp. Standardiserte spørsmål hører til spørreundersøkelsen, og verken representativitet eller forhåndskjennskap er kjennetegn ved formen.",
    },
    {
      question: "Hva er styrken ved observasjon som fremgangsmåte?",
      options: ["Den viser hva folk gjør, ikke bare hva de sier at de gjør", "Den gir tilgang til begrunnelsene bak folks handlinger", "Den kan dekke mange enheter på kort tid og med lav kostnad", "Den gir et materiale som lar seg telle og sammenligne direkte"],
      explanation: "Observasjon gir tilgang til praksis, og spriket mellom sagt og gjort er ofte selve funnet. Begrunnelser får man gjennom intervju, og observasjon er verken særlig rask eller lett å telle.",
    },
    {
      question: "Hva er poenget med en dokumentanalyse i samfunnsgeografien?",
      options: ["Å undersøke hva framstillingen gjør, ikke bare hva den sier", "Å samle inn faktaopplysninger som ikke finnes i registre", "Å kontrollere om planer og vedtak er formelt korrekte", "Å telle hvor ofte et sted nevnes i offentlig debatt"],
      explanation: "Analysen spør hvilke trekk som velges ut, hva som utelates og hvem som får framstille — representasjonsbegrepet omsatt til metode. Faktainnhenting, formell kontroll og opptelling er andre bruksmåter for de samme dokumentene.",
    },
    {
      question: "Hva er hovedbegrensningen ved en spørreundersøkelse?",
      options: ["Den fanger ikke det forskeren ikke har tenkt å spørre om", "Den kan ikke brukes til å si noe om utbredelse", "Den gir alltid for få svar til å kunne analyseres", "Den kan bare brukes på temaer folk snakker gjerne om"],
      explanation: "Svaralternativene låses på forhånd, og det er både forutsetningen for å telle og grensen for hva som kan oppdages. Utbredelse er nettopp det formen er god på, og de to siste påstandene er ikke egenskaper ved metoden.",
    },
    {
      question: "Hva er det viktigste forbeholdet ved bruk av registerdata?",
      options: ["De er samlet inn til et annet formål med andre kategorier", "De dekker som regel bare et lite utvalg av befolkningen", "De kan ikke kobles til geografiske enheter som bydeler", "De er tilgjengelige først flere tiår etter innsamlingen"],
      explanation: "Kategoriene er noen andres og kan ha endret seg over tid, så det du vil måle må tilpasses det som finnes. Dekningen er tvert imot god, koblingen til geografiske enheter er en styrke, og dataene er langt ferskere enn som så.",
    },
    {
      question: "Hva vil det si å operasjonalisere et begrep?",
      options: ["Å bestemme hva som skal telles i praksis", "Å definere hva begrepet betyr i faglitteraturen", "Å oversette et engelsk fagbegrep til norsk med en knagg", "Å bruke begrepet på et konkret case i en analyse"],
      explanation: "Operasjonalisering gjør begrepet målbart, og valget avgjør hvem som havner innenfor tallet. Definisjon sier hva begrepet betyr, oversettelse gjelder språk, og anvendelse på et case er en annen operasjon.",
    },
    {
      question: "Hva skiller reell metodekombinasjon fra to parallelle studier?",
      options: ["At den ene delen styrer hvor den andre settes inn", "At begge delene publiseres i den samme rapporten", "At de to delene bruker like store utvalg av enheter", "At de to delene gjennomføres samtidig i samme periode"],
      explanation: "Kombinasjonen består i at delene informerer hverandre: mønsteret peker ut hvor det er interessant å gå i dybden. Felles publisering, like utvalg og samtidighet gjør ikke to studier til én.",
    },
    {
      question: "Hvorfor er sprik mellom to metoder interessant?",
      options: ["Fordi det er noe som må forklares og kan gi ny innsikt", "Fordi det viser at den ene av metodene er gjennomført feil", "Fordi det betyr at utvalget var for lite i begge delene", "Fordi det gjør at funnene ikke kan brukes videre"],
      explanation: "Sprik krever forklaring og kan avdekke forhold ingen av delene så alene — men det må undersøkes om det skyldes svakheter i designet før det tolkes som funn. De tre andre svarene lukker spørsmålet i stedet for å åpne det.",
    },
    {
      question: "Hva kjennetegner en induktiv tilnærming?",
      options: ["Slutningen går fra materialet og fram til teorien", "Slutningen går fra teorien til materialet", "Materialet består alltid av intervjuer og observasjon", "Undersøkelsen prøver en forhåndsformulert hypotese"],
      explanation: "Retningen på slutningen er det eneste som avgjør: induktivt går man fra det observerte til det generelle. Datatypen er uavhengig av dette, og hypoteseprøving kjennetegner den deduktive tilnærmingen.",
    },
    {
      question: "Hva er den vanligste sammenblandingen i metodesvar om induktiv og deduktiv?",
      options: ["At de settes lik skillet mellom kvalitativ og kvantitativ metode", "At de settes lik skillet mellom strategisk og representativt utvalg", "At de settes lik skillet mellom pålitelighet og gyldighet", "At de settes lik skillet mellom raster- og vektordata"],
      explanation: "De to skillene er uavhengige: man kan arbeide deduktivt med intervjuer og induktivt med tall. Utvalgstyper, målekvalitet og datalagring er andre distinksjoner som ikke forveksles på samme måte.",
    },
    {
      question: "Hva må en hypotese oppfylle for å være til nytte?",
      options: ["Det må være klart hva som taler mot den", "Den må kunne bekreftes av materialet som samles inn", "Den må formuleres som et åpent spørsmål om et tema", "Den må bygge på tidligere funn fra samme område"],
      explanation: "Kravet er at påstanden kan svekkes: en påstand forenlig med et hvilket som helst utfall gir ingen kunnskap når den bekreftes. Åpne spørsmål er forskningsspørsmål, og lokal forankring er ikke et krav.",
    },
    {
      question: "Hva er forskjellen på pålitelighet og gyldighet?",
      options: ["Pålitelighet gjelder nøyaktighet, gyldighet det rette målet", "Pålitelighet gjelder utvalget, gyldighet gjelder analysen", "Pålitelighet gjelder tall, gyldighet gjelder tekst og tale", "Pålitelighet gjelder forskeren, gyldighet gjelder informantene"],
      explanation: "En måling kan være svært nøyaktig og likevel treffe noe annet enn det du er ute etter — høy pålitelighet, tvilsom gyldighet. Skillet handler verken om utvalg, datatype eller hvem som er involvert.",
    },
    {
      question: "Hva er det særegne ved geografiske informasjonssystemer som verktøy?",
      options: ["At data fra ulike kilder kan kobles fordi alt har en posisjon", "At de tegner penere kart enn det som er mulig for hånd", "At de kan lagre langt større datamengder enn andre systemer", "At de gjør statistiske analyser som ellers ville vært umulige"],
      explanation: "Koblingen gjennom posisjon er poenget: boligdata, inntekt, transporttilbud og kretsgrenser kan analyseres sammen. Kartkvalitet, lagringskapasitet og statistikk er egenskaper som ikke er særegne for verktøyet.",
    },
    {
      question: "Hva er forskjellen på rasterdata og vektordata?",
      options: ["Raster er et rutenett, vektor er punkter og linjer", "Raster brukes til naturdata, vektor brukes til samfunnsdata", "Raster er analoge kart, vektor er digitale kart", "Raster er nøyaktige data, vektor er anslag og beregninger"],
      explanation: "Rasterdata har en oppløsning som setter grensen for hvor små forskjeller som kan ses, mens vektordata forutsetter at objektet har en klar grense. De brukes ofte sammen, og begge er digitale og like nøyaktige.",
    },
    {
      question: "Hvorfor er georeferering nødvendig?",
      options: ["Fordi data må ha en posisjon for å kunne kobles sammen", "Fordi kartene ellers vises i feil farger på skjermen", "Fordi lovverket krever at alle data er stedfestet", "Fordi analysen ellers ville tatt for lang tid å gjennomføre"],
      explanation: "Uten posisjon kan informasjonen ikke legges i samme kart som annen informasjon. Framstilling, regelverk og beregningstid er ikke det begrepet handler om.",
    },
    {
      question: "Hva ligger i at kart er politiske representasjoner?",
      options: ["Ethvert kart er et utvalg, og utvalget er ikke nøytralt", "Kart lages av myndigheter og tjener deres interesser", "Kart inneholder ofte feil som må rettes av fagfolk", "Kart brukes i valgkamp for å påvirke velgernes syn"],
      explanation: "Poenget er at noen bestemmer hva som tas med, hva ting kalles og hvordan det framstilles — og at det som ikke er tegnet inn, ikke finnes i beslutningsgrunnlaget. Påstanden er analytisk, ikke en anklage om løgn eller om at kart er myndighetenes verktøy.",
    },
    {
      question: "Hva innebærer det at enhver kartprojeksjon forvrenger noe?",
      options: ["At valget avgjør hvilken egenskap som bevares i kartet", "At kart bare kan brukes til å vise små områder korrekt", "At digitale kart er unntatt fra problemet med forvrengning", "At forvrengningen kan fjernes ved å velge riktig målestokk"],
      explanation: "En krum overflate kan ikke gjengis flatt uten tap, så valget bestemmer hva som bevares og hva som ofres — og derfor bærer verdenskart et budskap. Digitale kart har samme begrensning, og målestokk er et annet forhold.",
    },
  ],
  'sgo1001-3-1': [
    {
      question: "Hva kjennetegner økonomisk globalisering i samfunnsgeografisk forstand?",
      options: ["Funksjonell integrasjon av spredte økonomiske aktiviteter over grenser", "Sterk vekst i mengden varer og tjenester som handles mellom land", "At stadig flere selskaper selger produktene sine i flere land", "At kapital og arbeidskraft beveger seg friere enn tidligere"],
      explanation: "Kjerneordet er funksjonell: aktivitetene er ikke bare spredt, de er koblet sammen til ett arbeidende system. Økt handelsvolum og salg i flere land er følger av utviklingen, men de fanger ikke det som gjør begrepet faglig — at leddene er koordinert og avhengige av hverandre over tid.",
    },
    {
      question: "Hva er den avgjørende testen på om en kobling er funksjonell integrasjon og ikke handel?",
      options: ["Om produksjonen stopper når leddet faller bort", "Om varene fysisk krysser en landegrense underveis", "Om partene har avtale om levering over flere år", "Om betalingen skjer i en annen valuta enn selgerens"],
      explanation: "Handel er avsluttede transaksjoner der en ny partner kan finnes i markedet. Funksjonell integrasjon betyr at leddene er tilpasset hverandre, slik at et bortfall må erstattes før produksjonen kan gå videre. Både lange avtaler og valutabruk kan finnes i ren handel og avgjør derfor ingenting.",
    },
    {
      question: "Hva skiller internasjonalisering fra globalisering av produksjon?",
      options: ["Internasjonalisering er spredning, globalisering er spredning pluss integrasjon", "Internasjonalisering gjelder handelen, globalisering gjelder investeringene og eierskapet", "Internasjonalisering gjelder små land, globalisering gjelder store", "Internasjonalisering er et eldre ord for den samme prosessen"],
      explanation: "Et selskap som selger i tretti land, er internasjonalisert. Et selskap som lar leverandører i tolv land lage hver sin del av samme produkt etter egne spesifikasjoner, deltar i globalisert produksjon. Tanken om at det ene ordet har avløst det andre, er en nærliggende felle — de betegner to ulike ting.",
    },
    {
      question: "Hva er utenlandske direkteinvesteringer?",
      options: ["Investeringer som gir varig eierandel og innflytelse i et annet land", "Kjøp av aksjer og obligasjoner utstedt i et annet land", "Statlige overføringer til næringsutvikling i andre land", "Lån gitt fra en bank i ett land til et selskap som driver i et annet"],
      explanation: "Det avgjørende er kontroll: investoren vil være med og bestemme over produksjonen. Kjøp av verdipapirer uten styringsambisjon er porteføljeinvestering, og lån og overføringer flytter kapital uten å flytte beslutningsmakt.",
    },
    {
      question: "Hva er forskjellen på utkontraktering og utflagging?",
      options: ["Utkontraktering gjelder hvem som utfører, utflagging gjelder hvor", "Utkontraktering gjelder tjenester, utflagging gjelder industri", "Utkontraktering er midlertidig, utflagging er varig", "Utkontraktering skjer innenlands, utflagging alltid til lavkostland"],
      explanation: "De to grepene svarer på hvert sitt spørsmål og kan kombineres i alle fire varianter. En oppgave satt bort til en norsk leverandør er utkontraktert uten å være flagget ut, og en egen avdeling flyttet til eget kontor i utlandet er flagget ut uten å være utkontraktert.",
    },
    {
      question: "Hva er internasjonal arbeidsdeling?",
      options: ["Den systematiske fordelingen av økonomiske oppgaver mellom land og regioner", "Avtaler mellom land om hvilke varer hver av dem skal spesialisere seg på", "Fordelingen av arbeidsinnvandrere mellom mottakerland i en region", "At internasjonale organisasjoner fordeler bistandsoppgaver mellom seg"],
      explanation: "Poenget er at fordelingen gjelder ledd i samme produksjonsprosess og er formet av lønnsnivå, kompetanse, regelverk og maktforhold — ikke av avtaler eller av naturlige forutsetninger. Den er derfor noe annet enn at land utveksler ferdige varer.",
    },
    {
      question: "Hva er fragmentering av produksjonen?",
      options: ["At én sammenhengende prosess deles i ledd som kan utføres ulike steder", "At bedrifter i samme bransje konkurrerer på stadig flere markeder samtidig", "At en bedrift produserer flere ulike produkter på samme anlegg", "At produksjonen deles mellom eiere som hver har sin andel"],
      explanation: "Fragmentering er en betingelse for internasjonal arbeidsdeling: først når prosessen er splittet i deler, kan et land spesialisere seg på ledningsnett i stedet for på biler. Fallende transportkostnader, digital koordinering og standardisering gjorde oppdelingen mulig.",
    },
    {
      question: "Hvorfor har arbeidsintensive ledd ofte svak forhandlingsposisjon i en global produksjon?",
      options: ["Fordi leddet lett kan utføres av andre og dermed lett kan erstattes", "Fordi arbeidsintensive ledd krever langt mer arbeid per produserte enhet", "Fordi disse leddene som regel ligger i land uten fagorganisering", "Fordi de ligger tidlig i kjeden og dermed langt fra sluttkunden"],
      explanation: "Forhandlingsstyrken følger erstattbarhet, ikke innsats. Et ledd med mange mulige utførere kan byttes ut på kort varsel, mens et kunnskapsintensivt miljø tar år å bygge opp — og det er dette som avgjør hvor mye av verdien leddet kan kreve.",
    },
    {
      question: "Hva viser begrepet feminisering av arbeidskraft til?",
      options: ["At kvinner utgjør en stor og økende del av eksportindustriens arbeidsstyrke", "At kvinner har fått lederstillinger i internasjonale selskaper", "At arbeidsoppgavene i industrien er blitt lettere og mindre fysisk krevende", "At kvinnelige forbrukere styrer etterspørselen i globale markeder"],
      explanation: "Begrepet peker på eksportrettet industri i global sør fra 1970-tallet og framover, og det er bevisst tvetydig: deltakelsen gir egen inntekt og en ny posisjon, samtidig som lønn og vilkår ofte er lave og usikre. Et svar som bare tar den ene siden, mister halve poenget.",
    },
    {
      question: "Hvorfor legges ikke alle flyttbare produksjonsledd til de landene som har lavest lønn?",
      options: ["Fordi hvert ledd trenger en bestemt blanding av kostnad, kompetanse og nærhet", "Fordi handelsavtaler hindrer selskapene i å velge helt fritt", "Fordi lønnsforskjellene mellom land blir små når frakt og toll er regnet inn", "Fordi selskapene foretrekker land de allerede kjenner godt"],
      explanation: "Om lønn var eneste lokaliseringsgrunn, ville all produksjon ligget i de fattigste landene. Bilfabrikker i Sentral-Europa forklares av kompetanse, leverandørnett og transportavstand til markedet like mye som av lønnsnivået.",
    },
    {
      question: "Hva menes med ujevn geografisk utvikling?",
      options: ["At vekst og velstand fordeler seg systematisk skjevt i rommet", "At noen land og regioner har raskere befolkningsvekst enn andre gjør", "At økonomiske kriser rammer til ulik tid i ulike land", "At naturressurser er ulikt fordelt mellom verdens regioner"],
      explanation: "Poenget er at skjevheten er et produkt av de samme prosessene som skaper veksten, ikke et avvik som jevner seg ut av seg selv. Ulikhet uten romlig struktur er noe annet: her er selve plasseringen en del av forklaringen.",
    },
    {
      question: "Hva er Ann Markusens poeng om klebrige steder i glatte rom?",
      options: ["At noen steder holder på virksomhet fordi kvalitetene der ikke kan flyttes", "At globaliseringen er overdrevet, og at det meste av økonomien er nasjonal", "At bedrifter blir værende fordi flytting koster mer enn den gir", "At myndighetene kan binde virksomhet til et sted gjennom støtteordninger"],
      explanation: "Markusen argumenterer for at glatthet og klebrighet finnes samtidig og forutsetter hverandre: jo lettere det flyttbare blir å flytte, jo mer avgjørende blir kompetanse, relasjoner og institusjoner som ikke kan pakkes ned. Å gjøre henne til globaliseringsskeptiker snur poenget.",
    },
    {
      question: "Hva er en næringsklynge?",
      options: ["En konsentrasjon av koblede bedrifter, leverandører og kompetansemiljøer", "En gruppe bedrifter som eies av samme konsern i én region", "Et område myndighetene har pekt ut for industriell utbygging", "Et formalisert samarbeid mellom bedrifter om felles innkjøp og markedsføring"],
      explanation: "Det som skiller en klynge fra en ansamling, er koblingene: felles arbeidsmarked, spesialiserte underleverandører og rask kunnskapsspredning gjør at hver bedrift tjener på at de andre er der. Eierskap og offentlige vedtak er ikke det definerende.",
    },
    {
      question: "Hva er agglomerasjonsfordeler?",
      options: ["Gevinstene bedrifter får av at aktivitet er konsentrert på ett sted", "Fordelene et selskap får ved å slå seg sammen med et annet stort selskap", "Besparelsene som følger av å produsere i større serier enn før", "Fordelene ved å ligge nær råvarene som produksjonen bruker"],
      explanation: "De tre vanligste er et stort og spesialisert arbeidsmarked, tilgang til spesialiserte leverandører og kunnskapsoverføring mellom folk som møtes ofte. Stordriftsfordeler ved store serier er noe annet: de gjelder inne i én bedrift, uavhengig av hvem naboene er.",
    },
    {
      question: "Hva er forskjellen på agglomerasjonsfordeler og klebrighet?",
      options: ["Det første forklarer at konsentrasjon lønner seg, det andre at den består", "Det første gjelder byer og tettsteder, det andre gjelder industriregioner", "Det første er et økonomisk begrep, det andre et kulturelt", "Det første gjelder bedrifter, det andre gjelder arbeidstakere"],
      explanation: "De to svarer på hvert sitt spørsmål og henger sammen: fordelene forklarer hvorfor virksomhet søker sammen, mens klebrigheten forklarer hvorfor den blir liggende når kostnadene stiger. Begge gjelder både byer og industriregioner.",
    },
    {
      question: "Hva menes med at en økonomisk aktivitet er stedbundet?",
      options: ["At den er avhengig av kvaliteter ved et sted og ikke kan flyttes uten tap", "At virksomheten er registrert og skattlagt i den kommunen den ligger i", "At den bruker råvarer som hentes i nærområdet rundt anlegget", "At eierne og de ansatte har sin tilknytning til lokalsamfunnet"],
      explanation: "Kildene kan være naturgitte, oppbygde eller institusjonelle — en malmforekomst, et ingeniørmiljø eller en konsesjonsordning. Stedbundethet er like mye en ressurs som en binding, og skal ikke forveksles med treghet eller manglende omstillingsevne.",
    },
    {
      question: "Hvordan bør økonomisk globalisering forstås i lys av rombegrepet?",
      options: ["Som en re-organisering av hvilken avstand som betyr noe", "Som en gradvis oppheving av avstandens betydning", "Som en overgang fra absolutt til relativt rom i hele økonomien", "Som en utvidelse av det området økonomien dekker"],
      explanation: "Avstanden i absolutt rom er uendret, i relativt rom er den krympet, og i relasjonelt rom er den ikke lenger et avstandsspørsmål: posisjonen i nettverket avgjør. Påstanden om at geografien slutter å bety noe, er nettopp den formuleringen faget avviser.",
    },
    {
      question: "Hvorfor er en tett koblet produksjonskjede sårbar?",
      options: ["Fordi leddene er spesialiserte, lagrene små og koblingene stramme", "Fordi lange transportstrekninger gir større risiko for uhell underveis", "Fordi selskapene mangler oversikt over egne underleverandører", "Fordi produksjonen ligger i land med ustabile politiske forhold"],
      explanation: "Sårbarhet handler om hvor hardt et avbrudd rammer, ikke om hvor sannsynlig det er. Med få alternative leverandører og små lagre forplanter en stans i ett ledd seg raskt gjennom hele systemet, uansett hvor stabile de enkelte landene er.",
    },
    {
      question: "Hva viser Suez-blokaden i 2021 om økonomisk globalisering?",
      options: ["At posisjon i nettverket, ikke avstand, avgjorde hvem som ble rammet", "At sjøtransport er den mest utsatte delen av verdenshandelen", "At internasjonal handel er avhengig av noen få smale passasjer på kartet", "At store selskaper tåler forstyrrelser bedre enn små gjør"],
      explanation: "Bedrifter i Nord-Europa som ventet på en spesialdel, merket blokaden hardt, mens virksomhet noen kilometer fra kanalen ikke merket noe. Det er relasjonelt rom i praksis — og hendelsen viser samtidig at tett kobling gir både effektivitet og sårbarhet.",
    },
    {
      question: "Hva skiller økonomisk fra kulturell globalisering som analytisk inntak?",
      options: ["Det første spør hvordan verdi fordeles, det andre hvordan mening skapes", "Det første gjelder selskaper, det andre gjelder enkeltmennesker", "Det første kan måles i tall, mens det andre bare kan studeres kvalitativt", "Det første er nyere enn det andre og har avløst det"],
      explanation: "De to er koblet, men svarer på ulike spørsmål og har hvert sitt begrepsapparat. Samme kleskjede kan analyseres økonomisk når spørsmålet er hvem som lager plaggene og tjener på dem, og kulturelt når spørsmålet er hvordan stiler og idealer sprer seg.",
    },
    {
      question: "Hva er en varekjede?",
      options: ["Sekvensen av aktiviteter fra råvare til sluttbruker for et produkt", "Nettverket av butikker som selger et bestemt merkes produkter", "Rekken av transportledd som frakter en vare fra fabrikken til kunden", "Avtalen mellom et selskap og dets faste underleverandører"],
      explanation: "Kjeden omfatter utvinning, bearbeiding, produksjon av deler, montering, distribusjon, salg og avhending. Transport og salg er ledd i kjeden, ikke hele den — og først når produksjonen ses som ledd, kan man spørre hvem som styrer dem og hvor verdien blir liggende.",
    },
    {
      question: "Hvorfor er det et grep å si hvilket skalanivå man analyserer globalisering fra?",
      options: ["Fordi nivåene gir ulike forklaringer, ikke bare ulik detaljgrad", "Fordi data er lettere tilgjengelig på nasjonalt nivå enn på lokalt", "Fordi det globale nivået alltid er det mest relevante for økonomi", "Fordi oppgaveteksten pleier å be om at nivået oppgis"],
      explanation: "En nedleggelse forklares lokalt med kostnadsnivå, nasjonalt med rammebetingelser og i konsernet som en omfordeling mellom anlegg. Alle tre er riktige, og det å si hvilket nivå man snakker fra, er derfor en analytisk handling og ikke en formalitet.",
    },
  ],
  'sgo1001-3-2': [
    {
      question: "Hva er en varekjede?",
      options: ["Sekvensen av aktiviteter fra råvare til sluttbruker for et produkt", "Kjeden av butikker og nettbutikker som selger produktene til en produsent", "Rekken av transportledd mellom fabrikken og den endelige kunden", "Avtalene et selskap har inngått med sine faste underleverandører"],
      explanation: "Kjeden følger produktet gjennom utvinning, bearbeiding, produksjon, montering, distribusjon, salg og avhending. Transport og salg er ledd i den, ikke hele den — og en forsyningskjede er noe litt annet, fordi den ses fra én bedrifts synsvinkel.",
    },
    {
      question: "Hva legger verdikjedeperspektivet til utover varekjeden?",
      options: ["Spørsmålene om hvor verdi skapes og hvordan kjeden koordineres", "Opplysninger om hvilke land de ulike leddene i kjeden ligger i", "En vurdering av hvor bærekraftig produksjonen i kjeden er totalt", "En beregning av hva produktet koster å produsere i hvert av leddene"],
      explanation: "Ordet «verdi» er selve tillegget. Å si hvor leddene ligger, er fortsatt varekjeden, og en kostnadsberegning er bedriftsøkonomi — verdikjedeanalysen spør i tillegg hvem som setter betingelsene for de andre.",
    },
    {
      question: "Hvem knyttes begrepsapparatet om globale verdikjeder til?",
      options: ["Gary Gereffi og medarbeidere", "Coe, Yeung og Henderson", "David Harvey og Neil Brenner", "Ann Markusen og Andrew Herod"],
      explanation: "Gereffi og medarbeidere står bak styringsformene og oppgraderingsbegrepet. Coe, Yeung og Henderson knyttes til globale produksjonsnettverk, som er et beslektet, men annet rammeverk, og de øvrige navnene hører til rom-, skala- og stedsbegrepene.",
    },
    {
      question: "Hva er input-output-strukturen i en verdikjede?",
      options: ["Kartet over hvilke aktiviteter som finnes og hva de leverer til hverandre", "Forholdet mellom hva produksjonen koster og hva produktet selges for", "Oversikten over hvilke råvarer kjeden bruker og hvilket avfall den gir fra seg", "Regnskapet over hvor mye hvert ledd i kjeden tjener på virksomheten"],
      explanation: "Strukturen skal kunne tegnes som ledd med piler mellom seg. Den er den første av fire ting en verdikjedeanalyse beskriver; de tre andre er geografisk utstrekning, styringsform og institusjonell ramme.",
    },
    {
      question: "Hvorfor er kjedens geografiske utstrekning et fordelingsspørsmål og ikke bare et kart?",
      options: ["Fordi den avgjør hvilke lands lønnsnivå og regler som gjelder for hvert ledd", "Fordi lange avstander gjør transporten dyrere og reduserer overskuddet", "Fordi spredte kjeder er vanskeligere å styre og kontrollere enn samlede kjeder er", "Fordi ledd som ligger langt fra markedet, får lengre leveringstider"],
      explanation: "To kjeder kan ha samme oppbygning og likevel se helt ulike ut i rommet. Der et ledd ligger, avgjør hvilken regulering og hvilket lønnsnivå det møter, og dermed hvem som kan stille krav til hvem.",
    },
    {
      question: "Hva er den institusjonelle rammen rundt en verdikjede?",
      options: ["Lover, avtaler, standarder og reguleringer kjeden må forholde seg til", "Måten aktørene i kjeden koordinerer seg med hverandre på", "Organisasjonskartet til selskapet som leder kjeden", "De faste rutinene for bestilling, levering og betaling mellom alle leddene"],
      explanation: "Rammen settes av aktører som ikke selv er ledd i kjeden, og den kan forme kjeden like sterkt som en kommersiell beslutning: et hygienekrav kan i praksis utelukke leverandører uten råd til sertifisering. Koordineringen mellom aktørene er derimot styringsformen.",
    },
    {
      question: "Hva menes med styring i en global verdikjede?",
      options: ["Måten kjeden koordineres på, og hvem som setter betingelser for hvem", "Eierskapet til de selskapene som utfører leddene i kjeden", "Den offentlige reguleringen av handelen mellom landene kjeden går gjennom", "Ledelsens interne beslutningsprosesser i det største selskapet"],
      explanation: "Poenget er nettopp at styring ikke er eierskap: en kjøper kan styre en leverandør hardt uten å eie en aksje. Offentlig regulering hører til den institusjonelle rammen, og bør ikke forveksles med begrepsparet government og governance i politisk geografi.",
    },
    {
      question: "Hva kjennetegner markedsstyring i en verdikjede?",
      options: ["Standardiserte produkter og lave kostnader ved å bytte partner", "Detaljerte spesifikasjoner som leverandøren må følge nøye", "Tett og vedvarende samhandling mellom kjøper og leverandør", "At kjøperen kontrollerer leverandøren gjennom hyppige revisjoner"],
      explanation: "Prisen bærer nesten all informasjon som trengs, og begge parter kan finne alternativer. Det er den styringsformen med lavest koordineringsbehov — detaljerte krav og tett kontroll peker mot henholdsvis modulær og låst styring.",
    },
    {
      question: "Hva kjennetegner modulær styring?",
      options: ["Leverandøren produserer etter kundens spesifikasjon med egen prosesskunnskap", "Leverandøren produserer standardvarer og kan byttes ut i neste bestilling", "Kjøper og leverandør utvikler produktet sammen over flere år i tett fellesskap", "Aktiviteten utføres av en avdeling innenfor kjøperens eget selskap"],
      explanation: "Kjøperen sier hva som skal lages, leverandøren finner ut hvordan, og felles bransjestandarder gjør spesifikasjonen overførbar. Fordi informasjonen kan skrives ned, trengs ikke den tette gjensidige tilpasningen som kjennetegner relasjonell styring.",
    },
    {
      question: "Hva skiller relasjonell fra låst styring?",
      options: ["Om avhengigheten mellom partene er gjensidig eller ensidig", "Om partene har skriftlig kontrakt eller bare muntlig avtale", "Om produktet er standardisert eller tilpasset kunden spesielt", "Om leverandøren ligger i samme land som kjøperen gjør"],
      explanation: "I relasjonell styring er byttekostnaden høy begge veier, og leverandøren har derfor forhandlingsmakt. I låst styring er det bare leverandøren som sitter fast, mens kjøperen kan finne en erstatter relativt raskt.",
    },
    {
      question: "Hva kjennetegner hierarkisk styring i en verdikjede?",
      options: ["At aktiviteten utføres internt i samme selskap gjennom eierskap og instruks", "At én stor aktør bestemmer over alle de andre leddene i kjeden gjennom avtaler", "At kjeden er ordnet i nivåer der hvert nivå leverer til nivået over", "At myndighetene fastsetter rammene som alle leddene må følge"],
      explanation: "Formen velges typisk når produktet er komplekst og kunnskapen vanskelig å beskytte. De øvrige styringsformene handler om hvordan selvstendige selskaper koordinerer seg — nivåene i kjeden er noe annet, nemlig leverandørnivåer.",
    },
    {
      question: "Hva er forskjellen på produsentdrevne og oppkjøperdrevne kjeder?",
      options: ["Om makten kommer av hva du kan lage, eller av hvem du når fram til", "Om det er industri eller varehandel som utgjør kjedens sluttledd", "Om kjeden eies av produsenten eller av detaljisten som selger varen", "Om produktene er kapitalvarer eller er rettet mot vanlige forbrukere"],
      explanation: "I produsentdrevne kjeder ligger makten i teknologi og produksjonsanlegg, i oppkjøperdrevne i design, merkevare og markedstilgang. Det forklarer hvorfor et selskap uten fabrikker kan være den mektigste aktøren i sin egen kjede.",
    },
    {
      question: "Hva er en kjedeleder?",
      options: ["Aktøren som setter betingelsene de andre leddene må innrette seg etter", "Selskapet som har den største omsetningen av alle i kjeden", "Bedriften som utfører det leddet der mest arbeid legges ned", "Den leverandøren som leverer sine varer direkte til den siste produsenten"],
      explanation: "Lederrollen følger av kontroll over et flaskehalsledd — en teknologi, en merkevare, en standard eller tilgangen til kunden. Verken størrelse, produksjonsvolum eller plassering i kjeden avgjør den.",
    },
    {
      question: "Hva skiller et flaskehalsledd fra et kritisk ledd?",
      options: ["Flaskehalsen kan i tillegg leveres av bare noen få aktører", "Flaskehalsen ligger alltid sent i kjeden, nær sluttkunden", "Flaskehalsen er det leddet som tar lengst tid å gjennomføre", "Flaskehalsen er det leddet som koster mest å gjennomføre"],
      explanation: "Alle ledd i en kjede er kritiske i den forstand at produktet ikke blir til uten dem. Sømmen i klesproduksjon er kritisk, men ikke en flaskehals, fordi mange kan sy — tilgangen til kunden er derimot begge deler.",
    },
    {
      question: "Hva kjennetegner en førstelinjeleverandør?",
      options: ["Den leverer direkte til kjedelederen, ofte hele delsystemer", "Den er den første leverandøren kjedelederen inngikk avtale med", "Den leverer råvarene som kjeden starter med å bearbeide", "Den har enerett på å levere en bestemt del til kjeden"],
      explanation: "Nivået sier mye om posisjonen: førstelinjen sitter i møtene der neste modell planlegges, mens leverandører lenger ned leverer mer standardiserte deler til flere kunder og har svakere forhandlingsposisjon.",
    },
    {
      question: "Hvorfor er standarder og sertifisering et styringsverktøy?",
      options: ["De gjør det mulig å stille krav til leverandører man ikke eier", "De sikrer at alle leverandørene får den samme prisen for arbeidet", "De er fastsatt av myndighetene og må følges av alle i bransjen", "De gjør at produktene fra ulike leverandører kan settes sammen"],
      explanation: "Kravene virker over lange avstander uten at kjøperen er til stede. Merk fordelingssiden: kostnaden ved å oppfylle dem bæres av leverandøren, mens markedstilgang og omdømme i stor grad tilfaller kjøperen.",
    },
    {
      question: "Hva er oppgradering i en verdikjede?",
      options: ["Å bevege seg mot aktiviteter som gir høyere verdiskaping", "Å øke produksjonsvolumet i det leddet man allerede har", "Å skifte til en kjøper som betaler bedre for samme leveranse", "Å ta i bruk nyere maskiner enn dem konkurrentene har"],
      explanation: "Å doble antall sydde plagg er vekst i volum, ikke oppgradering. Ny teknologi kan være ett middel, men bare når den flytter aktøren mot aktiviteter som gir mer igjen per innsats.",
    },
    {
      question: "Hva er prosessoppgradering?",
      options: ["Å utføre den samme aktiviteten mer effektivt enn før", "Å begynne å lage mer avanserte produkter enn før", "Å overta en helt ny funksjon i kjeden man er del av", "Å inngå avtale med flere kunder enn man hadde før"],
      explanation: "Dette er den enkleste formen, og den krever ikke at kjeden endres. Merk at gevinsten ikke nødvendigvis blir hos leverandøren: blir produksjonen billigere, kan kjøperen kreve lavere pris.",
    },
    {
      question: "Hva er funksjonsoppgradering?",
      options: ["Å overta nye funksjoner i kjeden, ikke bare gjøre den gamle bedre", "Å forbedre kvaliteten vesentlig på det produktet man allerede leverer", "Å automatisere flere av arbeidsoppgavene i egen produksjon", "Å levere til flere ledd i kjeden enn man gjorde tidligere"],
      explanation: "Her endres rollen, ikke bare arbeidet: leverandøren beveger seg mot design, innkjøp eller merkevare. Bedre kvalitet på samme produkt er produktoppgradering, og mer effektiv drift er prosessoppgradering.",
    },
    {
      question: "Hvorfor møter funksjonsoppgradering ofte motstand fra kjedelederen?",
      options: ["Fordi leverandøren da beveger seg inn på lederens eget område", "Fordi den krever investeringer kjedelederen må være med på", "Fordi den gjør leveransene dyrere for kjedelederen å kjøpe", "Fordi den bryter med standardene bransjen har blitt enige om"],
      explanation: "Prosessoppgradering gjør leverandøren til et bedre redskap og møter derfor oppmuntring. Funksjonsoppgradering gjør den til en konkurrent om nettopp de leddene lederrollen hviler på — og derfor skjer den ofte med nye kunder eller i nye markeder.",
    },
    {
      question: "Hva menes med at en leverandør er låst i sitt ledd?",
      options: ["At kjeden er styrt slik at bevegelse oppover er svært vanskelig", "At leverandøren har bundet seg gjennom en langvarig og bindende kontrakt", "At leverandøren mangler kompetansen som trengs i neste ledd", "At myndighetene begrenser hva leverandøren har lov til å gjøre"],
      explanation: "Låsing er et resultat av hvordan kjeden er organisert, ikke av at leverandøren er dårlig: kundekontakt og merkevare holdes hos lederen, marginene holdes lave, og kunnskapen deles ikke. Derfor hører styringsform og oppgradering sammen i et svar.",
    },
    {
      question: "Hvor i en verdikjede skapes normalt mest verdi per innsats?",
      options: ["I endene, altså i design og merkevare og i salg og kundekontakt", "I midten, der selve produksjonen og monteringen foregår", "I transportleddene, som binder de andre leddene sammen", "I råvareleddet, som all den øvrige produksjonen bygger på"],
      explanation: "Mønsteret forklares av knapphet, ikke av innsats: leddene i midten er lettere å erstatte enn kompetansemiljøer og merkevarer. At monteringen er krevende arbeid, endrer ikke forhandlingsposisjonen.",
    },
    {
      question: "Hva er rekonfigurering av en verdikjede?",
      options: ["At ledd flyttes, slås sammen, deles opp eller hentes hjem igjen", "At kjeden får en ny leder etter et oppkjøp eller en fusjon", "At produktet endres slik at kjeden må lage noe annet enn før", "At kjeden dokumenteres på nytt for å oppfylle nye standarder"],
      explanation: "Kjeder er ikke stabile: kostnadsbildet, teknologien, de politiske rammene og erfarte forstyrrelser endrer dem. Merk maktforskjellen — kjedelederen styrer rekonfigureringen, leverandøren opplever den som en ytre hendelse.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom verdikjede- og produksjonsnettverksperspektivet?",
      options: ["Det ene spør hvordan kjeden styres, det andre hvem som får hva", "Det ene gjelder varer, mens det andre også omfatter tjenester og data", "Det ene er en nyere betegnelse som har avløst det eldre", "Det ene brukes om store selskaper, det andre om små"],
      explanation: "Verdikjedeperspektivet er lineært og firmasentrert og ser på koordinering og styring. Produksjonsnettverksperspektivet tar med stat, institusjoner og arbeidskraft og legger vekt på makt og verdifordeling. Tanken om at det ene har avløst det andre, er en nærliggende felle.",
    },
    {
      question: "Hva er hovedpoenget når en verdikjede leses i lys av relasjonelt rom?",
      options: ["At et sted konstitueres av sin posisjon i kjeden, ikke av beliggenheten", "At avstandene mellom leddene er blitt langt kortere målt i tid og kostnad", "At leddene i kjeden ligger spredt over flere land og verdensdeler", "At kjeden kan tegnes inn som punkter og linjer på et verdenskart"],
      explanation: "En fabrikkby deler skjebne med aktører den aldri møter, og ikke med byene den ligger nær. Krympede reisetider hører til relativt rom, og punkter på et kart er absolutt rom — det relasjonelle måler ikke avstand i det hele tatt.",
    },
    {
      question: "Hva er den vanligste feilen i en anvendelsesoppgave om en global vare?",
      options: ["Å skrive mye om produktet og lite om begrepene det skal analyseres med", "Å velge en vare som ikke er nevnt i pensumlitteraturen for emnet", "Å bruke for mange ulike begreper på én gang uten å rekke gjennom dem alle", "Å beskrive kjedens ledd i en annen rekkefølge enn den faktiske"],
      explanation: "I denne sjangeren måles begrepsanvendelsen, ikke detaljkunnskapen om caset. Valget av vare er fritt, og en analyse med tre godt brukte begreper slår en med ti nevnte.",
    },
  ],
  'sgo1001-3-3': [
    {
      question: "Hva er et globalt produksjonsnettverk?",
      options: ["Nettverket av aktører som skaper, øker og tilegner seg verdi i produksjonen", "Kjeden av leverandører et stort selskap bruker i flere ulike land", "Samarbeidet mellom selskaper som produserer den samme typen varer", "Systemet av transport- og kommunikasjonslinjer mellom de ulike produksjonsstedene"],
      explanation: "Det avgjørende er hvem som regnes med: ikke bare firmaene som utfører leddene, men også stater, institusjoner og arbeidskraft. En ren leverandørrekke er derimot en verdikjede, og infrastruktur er noe kjeden bruker, ikke nettverket selv.",
    },
    {
      question: "Hvem knyttes rammeverket om globale produksjonsnettverk til?",
      options: ["Neil Coe, Henry Yeung og Jeffrey Henderson", "Gary Gereffi og hans medarbeidere ved samme institutt", "David Harvey og Ann Markusen", "John Agnew og Tim Cresswell"],
      explanation: "Coe, Yeung og Henderson står bak verdifangst, maktformene og innvevingsbegrepet. Gereffi og medarbeidere står bak verdikjeder, styringsformer og oppgradering — å bytte om er en faglig feil, ikke en formalitet.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom verdikjede- og produksjonsnettverksperspektivet?",
      options: ["Det ene spør hvordan kjeden styres, det andre hvem som får hva", "Det ene gjelder produksjon av varer, det andre av tjenester", "Det ene er utviklet nyere og har erstattet det eldre perspektivet", "Det ene brukes om nasjonale kjeder, det andre om globale"],
      explanation: "Kjedeperspektivet er lineært og firmasentrert og ser på koordinering og styring. Nettverksperspektivet tar med stat, institusjoner og arbeidskraft og legger vekt på makt og verdifordeling. Begge er i aktiv bruk side om side.",
    },
    {
      question: "Hvilke aktørtyper regner nettverksperspektivet med?",
      options: ["Firmaer, stater, institusjoner og arbeidskraft", "Produsenter, transportører, detaljister og forbrukere", "Eiere, ledere, ansatte og de lokale myndighetene", "Leverandører, kjedeledere, kunder og konkurrenter"],
      explanation: "Utvidelsen fra kjedeperspektivet ligger i de to siste: institusjoner og arbeidskraft er ikke ledd i produksjonsrekken, men påvirker likevel hvordan verdien skapes og fordeles. Rene lister over ledd og roller i produksjonen fanger nettopp ikke dette.",
    },
    {
      question: "Hva er verdiskaping?",
      options: ["At det oppstår ny verdi når innsatsfaktorer settes sammen", "At et selskap øker overskuddet sitt fra et år til det neste", "At produktene i en kjede blir dyrere for sluttkunden å kjøpe", "At en region får flere arbeidsplasser enn den hadde tidligere"],
      explanation: "Verdiskaping sier hvor verdien oppstår, ikke hvem som ender opp med den. Overskudd, pris og sysselsetting er størrelser som kan følge av verdiskaping, men de er ikke det samme som den.",
    },
    {
      question: "Hva er verdifangst?",
      options: ["At en aktør faktisk får beholde en del av verdien som skapes", "At verdien i kjeden måles og registreres i regnskapene", "At en aktør tar over et nytt ledd og dermed skaper mer verdi", "At et produkt får høyere pris fordi merkevaren er sterk"],
      explanation: "Verdifangst avgjøres av forhandlingsstyrke, ikke av innsats. Å ta over et nytt ledd er oppgradering, som øker verdiskapingen uten at fangsten automatisk følger med.",
    },
    {
      question: "Hva er hovedpoenget i skillet mellom verdiskaping og verdifangst?",
      options: ["At de to spørsmålene ofte har helt ulike svar", "At verdiskaping er et økonomisk og verdifangst et politisk begrep", "At verdiskaping måles i kroner og verdifangst i andeler", "At verdiskaping skjer først og verdifangst etterpå i tid"],
      explanation: "Et land kan ha stor verdiskaping og liten verdifangst samtidig, og det er nettopp den kombinasjonen faget bruker begrepene til å avdekke. Å behandle dem som synonymer, eller som to trinn i samme prosess, snur analysen.",
    },
    {
      question: "Hva er verdiøkning i nettverksperspektivet?",
      options: ["At en aktørs evne til å skape verdi vokser over tid", "At mengden verdi som skapes i én omgang blir større", "At prisen på sluttproduktet stiger i markedet", "At flere aktører kobles inn i det samme nettverket"],
      explanation: "Verdiøkning gjelder kapasiteten, ikke resultatet i én omgang. At arbeidsstyrken i en region lærer en ny teknikk, er verdiøkning som blir liggende igjen selv om ett selskap trekker seg ut.",
    },
    {
      question: "Hvilke tre maktformer skiller nettverksperspektivet mellom?",
      options: ["Bedriftsmakt, institusjonell makt og kollektiv makt", "Økonomisk makt, politisk makt og kulturell innflytelse", "Lokal makt, nasjonal makt og global makt", "Formell makt, uformell makt og strukturell makt"],
      explanation: "De tre er kilder til makt, ikke nivåer, og de virker samtidig og kan trekke i motsatt retning: en stat kan bruke institusjonell makt mot et selskaps bedriftsmakt, og arbeidstakere kan bruke kollektiv makt mot begge.",
    },
    {
      question: "Hva er bedriftsmakt i et produksjonsnettverk?",
      options: ["Innflytelse i kraft av teknologi, merkevare, marked eller kapital", "Retten til å bestemme fordi selskapet selv eier produksjonsanleggene", "Muligheten til å påvirke myndighetene gjennom lobbyvirksomhet", "Størrelsen på selskapet målt i omsetning og antall ansatte"],
      explanation: "Den sterkeste formen kommer av kontroll over et flaskehalsledd som andre ikke kan gå utenom. Merk at bedriftsmakt ofte utøves helt uten eierskap: kjedelederen i en oppkjøperdreven kjede eier sjelden fabrikkene.",
    },
    {
      question: "Hva er institusjonell makt i et produksjonsnettverk?",
      options: ["Innflytelse gjennom lover, avtaler, konsesjoner og standarder", "Innflytelsen store organisasjoner har i kraft av sin størrelse", "Den makten som ligger i etablerte rutiner og arbeidsmåter", "Innflytelsen forskningsmiljøene har over den nye teknologien"],
      explanation: "Dette er formen kjedeperspektivet lettest overser, fordi institusjonene ikke er ledd i produksjonen. Den utøves gjennom regler som gjelder uansett hva partene selv ønsker, i motsetning til bedriftsmakt, som utøves i markedet.",
    },
    {
      question: "Hva er kollektiv makt i et produksjonsnettverk?",
      options: ["Innflytelse gjennom organisering, forhandling og oppmerksomhet", "Den samlede makten alle firmaene i nettverket har til sammen", "Innflytelsen forbrukerne har gjennom valgene sine i butikken", "Makten et lokalsamfunn har over arealbruken i sitt område"],
      explanation: "Formen markerer at arbeidskraft er en aktør og ikke bare en kostnadspost. Den virker både gjennom forhandling på stedet og gjennom å gjøre forhold synlige for kjedelederens kunder — arealmyndighet er derimot institusjonell makt.",
    },
    {
      question: "Hva menes med innveving i et produksjonsnettverk?",
      options: ["At virksomhet alltid er formet av sammenhengene den står i", "At et selskap har etablert seg fysisk i et bestemt land", "At en bedrift har langsiktige kontrakter med sine leverandører", "At produksjonen er integrert i selskapets egne systemer"],
      explanation: "Innveving er begrepet som gjør nettverksperspektivet til samfunnsgeografi: nettverket har røtter, og røttene har konsekvenser. Kontrakter og systemer er konkrete uttrykk, men ikke det begrepet betyr.",
    },
    {
      question: "Hva er territoriell innveving?",
      options: ["Forankring i et sted gjennom arbeidsstyrke, leverandører og institusjoner", "At virksomheten er registrert og skattlagt i det landet der den ligger i dag", "At produksjonen er avhengig av en naturressurs på stedet", "At selskapet eier bygningene og tomtene det driver fra"],
      explanation: "Jo dypere forankringen er, jo mer blir liggende igjen når eieren en gang trekker seg ut. Avhengighet av en naturressurs er stedbundethet, som er et smalere begrep enn innveving.",
    },
    {
      question: "Hva skiller nettverksinnveving fra territoriell innveving?",
      options: ["Den ene binder til relasjoner, den andre til et bestemt sted", "Den ene gjelder store selskaper, den andre gjelder små", "Den ene er frivillig, mens den andre følger av regelverket", "Den ene gjelder kunder, mens den andre gjelder leverandører"],
      explanation: "En bedrift kan være dypt nettverksinnvevd og likevel lett å flytte, fordi bindingen går til en kunde og ikke til et sted. Begge formene kan gjelde både store og små, og begge kan gjelde både kunder og leverandører.",
    },
    {
      question: "Hva er samfunnsmessig innveving?",
      options: ["At aktøren bærer med seg trekk fra samfunnet den er formet i", "At virksomheten har en tydelig plass i lokalsamfunnet den ligger i", "At selskapet tar samfunnsansvar utover det loven krever av det", "At produksjonen er tilpasset kulturen i markedet den selger til"],
      explanation: "Formen forklarer hvorfor selskaper fra ulike land ofte opptrer systematisk ulikt i samme nettverk — i forhandlingsstil, tidshorisont og forhold til myndigheter. Den handler om hvor aktøren kommer fra, ikke om hvor den er eller hvem den selger til.",
    },
    {
      question: "Hva er forskjellen på innveving og stedbundethet?",
      options: ["Stedbundethet spør om noe kan flyttes, innveving hva det er vevd inn i", "Stedbundethet gjelder naturressurser, mens innveving gjelder kompetanse", "Stedbundethet er et eldre begrep som innveving har erstattet", "Stedbundethet gjelder bedrifter, innveving gjelder hele regioner"],
      explanation: "Et vannkraftverk er stedbundet av naturen, men om det også er innvevd i regionen, avhenger av om det kjøper lokalt og bygger kompetanse der. De to spørsmålene har ulike svar, og begge begrepene er i bruk.",
    },
    {
      question: "Hvorfor er staten en aktør og ikke bare en ramme i nettverksperspektivet?",
      options: ["Fordi den forhandler, eier og stiller krav som endrer verdifangsten", "Fordi den krever inn skatt fra alle selskapene som opererer der", "Fordi den har ansvar for infrastrukturen produksjonen bruker", "Fordi den representerer innbyggerne i forhandlinger med selskaper"],
      explanation: "Krav om lokalt innhold, opplæring eller innenlands bearbeiding er aktørhandlinger som endrer hvem som får hva. Skatt og infrastruktur er også statlige oppgaver, men de fanger ikke det som gjør staten til en forhandlende deltaker.",
    },
    {
      question: "Hvorfor regnes arbeidskraft som en aktør i dette rammeverket?",
      options: ["Fordi arbeidstakere kan organisere seg, flytte seg og forhandle", "Fordi lønnskostnadene er den største utgiften i produksjonen", "Fordi arbeidstakerne er dem som faktisk skaper verdien i kjeden", "Fordi antall ansatte avgjør hvor stor betydning en bedrift har"],
      explanation: "Arbeidskraft har egne interesser og egen handleevne, ikke bare en pris. Merk asymmetrien som ofte avgjør forhandlingene: kapitalen kan flytte seg raskere enn menneskene kan.",
    },
    {
      question: "Hva menes med strategisk kopling for en region?",
      options: ["At regionens ressurser møter nettverksaktørenes behov med varig utbytte", "At regionen har inngått en langsiktig avtale med et internasjonalt selskap", "At regionen har god transportforbindelse til de store markedene", "At regionen satser bevisst på én bestemt næring over tid"],
      explanation: "Koblingen må bygges og kan brytes, og spørsmålet er om den bygger noe i regionen eller bare bruker den. En region som kobles på fordi lønnsnivået er lavt, står svakt så snart et annet sted blir billigere.",
    },
    {
      question: "Hva avgjør ifølge nettverksperspektivet om deltakelse fremmer utvikling?",
      options: ["Verdifangsten, ikke deltakelsen i seg selv", "Hvor mange arbeidsplasser produksjonen gir i regionen", "Hvor stor andel av produksjonen som eksporteres videre", "Hvor lenge nettverket har vært etablert i landet"],
      explanation: "Fire forhold avgjør: posisjonen i nettverket, hvor lett aktøren kan erstattes, dybden i den territorielle innvevingen, og statens kapasitet til å stille krav. Sysselsetting og eksportandel måler verdiskaping, ikke fangst.",
    },
    {
      question: "Hva er forskjellen på oppgradering og verdifangst?",
      options: ["Oppgradering er en bevegelse i kjeden, verdifangst et utfall av makt", "Oppgradering gjelder bedrifter, mens verdifangst gjelder land", "Oppgradering skjer over tid, mens verdifangst skjer i hver handel", "Oppgradering måles i kompetanse, mens verdifangst måles i penger"],
      explanation: "Oppgradering øker som regel verdiskapingen, men ikke automatisk fangsten: en leverandør kan bli mer avansert og likevel presses like hardt på pris, hvis den fortsatt er lett å erstatte.",
    },
    {
      question: "Hva er frakobling av en region?",
      options: ["At regionen mister plassen sin i et produksjonsnettverk", "At regionen bevisst velger å satse på hjemmemarkedet i stedet", "At transportforbindelsene til regionen blir dårligere over tid", "At regionen ikke klarer å tiltrekke seg utenlandske investeringer"],
      explanation: "Frakobling rammer ikke bare de svakeste: også regioner med høy kompetanse kan miste posisjonen når teknologien skifter. Det avgjørende for konsekvensen er hvor bredt regionen er koblet — én kobling er en risiko, mange er en buffer.",
    },
    {
      question: "Hva er den vanligste innvendingen mot nettverksrammeverket?",
      options: ["At det er så inkluderende at det blir vanskelig å avgrense", "At det overser hvordan produksjonen faktisk er organisert", "At det bygger på data som er vanskelige å samle inn", "At det er utviklet for industri og passer dårlig for tjenester"],
      explanation: "Når stater, institusjoner, arbeidskraft og sivilsamfunn alle er aktører, er det uklart hvor nettverket slutter. Svaret fra rammeverkets side er at presisjon som utelater staten og arbeidskraften, er presisjon om feil ting.",
    },
    {
      question: "Hvorfor er et produksjonsnettverk et godt eksempel på relasjonelt rom?",
      options: ["Fordi et sted i nettverket er summen av sine forbindelser", "Fordi leddene i nettverket ligger spredt over flere land", "Fordi avstandene er blitt kortere målt i tid og kostnad", "Fordi nettverket kan tegnes som punkter og linjer på et kart"],
      explanation: "To nabokommuner kan ha helt ulik skjebne fordi den ene er koblet på og den andre ikke. Krympede reisetider hører til relativt rom, og punkter på et kart er absolutt rom — det relasjonelle måler ikke avstand.",
    },
    {
      question: "Hva er den definerende feilen i en sammenligning av de to rammeverkene?",
      options: ["Å beskrive det ene grundig og det andre i en bisetning", "Å bruke det samme eksempelet på begge rammeverkene", "Å konkludere med at det ene er bedre enn det andre", "Å bruke flere sammenligningsakser enn oppgaven ber om"],
      explanation: "Ensidig komparasjon trekker ned selv når alt som står, er riktig: begge ledd skal behandles på hver akse, med eksempel på begge. Å bruke samme case på begge sider er tvert imot det sterkeste grepet i oppgaven.",
    },
  ],
  'sgo1001-4-1': [
    {
      question: "Hva er urbanisering i samfunnsgeografisk forstand?",
      options: ["Økningen i andelen av befolkningen som bor i byer", "Økningen i folketallet i landets største byområder", "At byene utvider grensene sine og legger under seg omland", "At stadig flere av landets arbeidsplasser ligger i byer"],
      explanation: "Kjerneordet er andelen: urbanisering måler forholdet mellom bybefolkning og samlet befolkning. Vekst i folketall er byvekst, grenseutvidelse er én av kildene til slik vekst, og arbeidsplassenes fordeling er noe annet igjen. Alle tre kan skje uten at andelen endrer seg.",
    },
    {
      question: "Hvilket navn knyttes urbanisering som relativt fenomen til?",
      options: ["Kingsley Davis", "Louis Wirth", "Henri Lefebvre", "Ebenezer Howard"],
      explanation: "Davis er navnet skillet mellom urbanisering og vekst i de enkelte byene knyttes til. Wirth eier urbanisme som levemåte, Lefebvre eier tesen om det urbane som prosess, og Howard eier hagebytanken.",
    },
    {
      question: "Hva er byvekst?",
      options: ["Økningen i det absolutte folketallet i en by", "Økningen i andelen av landets befolkning som bor i by", "Utvidelsen av det bebygde arealet i en byregion", "Veksten i antall arbeidsplasser innenfor bygrensen"],
      explanation: "Byvekst måles i mennesker og gjelder ett byområde. Andelen av landets befolkning er urbanisering, mens arealvekst og arbeidsplassvekst er andre mål som kan følge byvekst uten å være den.",
    },
    {
      question: "Kan en by vokse kraftig uten at landet urbaniserer seg?",
      options: ["Ja, hvis befolkningen utenfor byene vokser like raskt", "Nei, byvekst innebærer alltid at bybefolkningens andel stiger", "Ja, men bare hvis veksten skyldes at bygrensen er flyttet", "Nei, med mindre folketallet i landet samlet sett synker"],
      explanation: "Urbanisering er en andel, så den avhenger like mye av hva som skjer utenfor byene. Vokser by og bygd i samme takt, står andelen stille. Grenseflytting er bare én av flere kilder til byvekst og er ikke nødvendig for at dette skal inntreffe.",
    },
    {
      question: "Hva er urbaniseringsgrad?",
      options: ["Andelen av befolkningen som bor i by på et gitt tidspunkt", "Hastigheten som andelen bybefolkning øker med per tiår", "Forholdet mellom byens areal og hele landets areal", "Hvor tett befolkningen bor innenfor det største byområdet"],
      explanation: "Urbaniseringsgraden er en tilstand målt på ett tidspunkt, mens urbanisering er endringen i den over tid. Hastighet, arealforhold og tetthet er andre mål og fanger ikke det tilstandsbildet begrepet gir.",
    },
    {
      question: "Hvorfor kan et land ha svært høy urbaniseringsgrad og nesten ingen urbanisering?",
      options: ["Fordi andelen bybefolkning nærmer seg et tak", "Fordi statistikken slutter å registrere nye tettsteder", "Fordi byveksten da bremses av høye boligpriser", "Fordi flyttingen fra bygdene alltid stanser på et punkt"],
      explanation: "Er ni av ti allerede i by, har andelen lite igjen å stige på, uansett hvor mye byene vokser i folketall. Boligpriser og flyttemønstre virker inn på vekst, men de forklarer ikke hvorfor selve andelen står stille.",
    },
    {
      question: "Hvilken av disse er IKKE en av de tre kildene til byvekst?",
      options: ["At byens innbyggere blir eldre og lever lenger", "Innflytting fra andre deler av landet eller utlandet", "Fødselsoverskudd blant dem som allerede bor i byen", "At bygrensen flyttes slik at nye områder telles som by"],
      explanation: "Levealder påvirker befolkningens sammensetning, men er ikke en egen vekstkilde i denne oppdelingen. De tre kildene er innflytting, naturlig tilvekst i byen og omklassifisering, og den siste er grunnen til at urbaniseringstall må leses med forsiktighet.",
    },
    {
      question: "Hva innebærer omklassifisering som kilde til urbaniseringstall?",
      options: ["At steder passerer terskelen for å telle som by", "At byens innbyggere registreres på nytt bosted hvert år", "At byer rangeres på nytt etter størrelse i statistikken", "At tettsteder slås sammen til større administrative enheter"],
      explanation: "Deler av veksten i statistikken skyldes at definisjonen slår inn, ikke at noen har flyttet. Ny registrering av bosted, ny rangering og sammenslåing av enheter er andre statistiske operasjoner som ikke gir denne effekten.",
    },
    {
      question: "Hva beskriver urbaniseringsforløpet?",
      options: ["Lav andel, så rask stigning, så utflating mot et tak", "Jevn og lik vekst i andelen bybefolkning over lang tid", "Vekslende perioder med by- og bygdeflytting i sykluser", "Rask stigning helt fra starten, så en langsom nedgang"],
      explanation: "Forløpet er en observert regelmessighet med tre faser, ikke en lov om at alle land må gjennom dem. Jevn vekst, faste sykluser og tidlig nedgang er andre forløpsformer og fanger ikke mønsteret begrepet peker på.",
    },
    {
      question: "Hva er kontraurbanisering?",
      options: ["At nettoflyttingen går fra de største byene mot mindre steder", "At byene planlegges med lavere tetthet enn tidligere", "At innvandringen til landet reduseres over flere år", "At folk flytter mellom bydeler innenfor samme by"],
      explanation: "Kontraurbanisering handler om retningen på flyttestrømmen mellom by og omland. Lavere tetthet er et planleggingsvalg, innvandringsnivå gjelder landegrensen, og flytting internt i byen berører verken by- eller bygdeandelen.",
    },
    {
      question: "Hva er urbanisme?",
      options: ["Byen forstått som en levemåte og en sosial form", "Andelen av befolkningen som bor i tett bebyggelse", "Læren om hvordan byer bør planlegges og utformes", "Veksten i byenes folketall over en lengre periode"],
      explanation: "Urbanisme er Wirths begrep om de sosiale mønstrene som følger av å bo mange, tett og sammensatt. Andelen bybefolkning er urbanisering, folketallsveksten er byvekst, og planleggingslæren er et eget fagfelt som behandles i neste kapittel.",
    },
    {
      question: "Hvilke tre trekk ved byen bygger Wirths urbanismebegrep på?",
      options: ["Størrelse, tetthet og heterogenitet", "Areal, næringsstruktur og administrativ status", "Folketall, vekstrate og tilgang til kollektivtransport", "Boligtype, inntektsnivå og alderssammensetning"],
      explanation: "De tre trekkene er antallet mennesker, hvor tett de bor og hvor sammensatt befolkningen er. De øvrige listene inneholder egenskaper byer også har, men de er ikke grunnlaget Wirth utleder de sosiale følgene fra.",
    },
    {
      question: "Hva er hovedforskjellen mellom urbanisme og urbanisering?",
      options: ["Urbanisme gjelder hvordan folk lever, urbanisering hvor mange", "Urbanisme er et nyere og mer presist ord for urbanisering", "Urbanisme gjelder store byer, urbanisering gjelder alle tettsteder", "Urbanisme måles i tetthet, urbanisering måles i folketall"],
      explanation: "Det ene begrepet er sosiologisk og handler om levemåte, det andre er demografisk og handler om andel. Tanken om at det ene har avløst det andre er en nærliggende felle, men de betegner to helt ulike ting.",
    },
    {
      question: "Hvorfor er internasjonale sammenligninger av urbaniseringsgrad vanskelige?",
      options: ["Fordi hvert land setter sin egen terskel for hva som er by", "Fordi folketellinger gjennomføres på ulike tidspunkt", "Fordi mange land ikke publiserer tall for bybefolkningen", "Fordi bybefolkningen flytter for ofte til å telles presist"],
      explanation: "Det finnes ingen felles internasjonal bydefinisjon, så to land med samme bosettingsmønster kan få svært ulike tall. Ulike telletidspunkt, manglende publisering og flytting er praktiske problemer, men de skaper ikke det systematiske avviket.",
    },
    {
      question: "Hva kjennetegner den norske tettstedsdefinisjonen?",
      options: ["Et krav til minste folketall og til avstand mellom husene", "Et krav om at stedet har egen kommuneadministrasjon", "Et krav om et visst antall arbeidsplasser i tjenestenæringer", "Et krav om sammenhengende bebyggelse over et gitt areal"],
      explanation: "Tettstedet defineres av en hussamling med en nedre grense for folketall og en øvre grense for avstand mellom husene. Administrativ status, næringsstruktur og samlet areal inngår ikke, og terskelen er lav i internasjonal sammenheng.",
    },
    {
      question: "Hvordan behandler faget i dag skillet mellom by og land?",
      options: ["Som en glidende overgang med mellomformer", "Som to atskilte samfunnstyper med hver sin sosiale logikk", "Som et skille uten faglig interesse i moderne samfunn", "Som et rent statistisk skille uten sosiale konsekvenser"],
      explanation: "Mellom storbykjernen og den avsidesliggende bygda ligger forsteder, pendlerkommuner og tettsteder med trekk fra begge. At overgangen er glidende, betyr ikke at skillet er uinteressant, men at det må undersøkes framfor å forutsettes.",
    },
    {
      question: "Hva er kjernen i Lefebvres forståelse av det urbane?",
      options: ["At det urbane er en prosess, ikke en type sted", "At byene vil vokse sammen til én sammenhengende bebyggelse", "At byens sosiale liv preges av rollebasert kontakt", "At byene må planlegges helhetlig for å fungere godt"],
      explanation: "Lefebvre argumenterer for at det urbane organiserer produksjon, forbruk og hverdagsliv langt utenfor det som er tegnet som by. Sammenvoksing er en fysisk spådom, rollebasert kontakt er Wirths poeng, og helhetlig planlegging er et planfaglig ideal.",
    },
    {
      question: "Hvem skal uttrykket «planetary urbanism» tilskrives?",
      options: ["Senere litteratur som viderefører Lefebvres tese", "Lefebvre selv, som lanserte uttrykket i sine arbeider", "Davis, som brukte det om urbaniseringen i global sør", "Wirth, som utvidet urbanismebegrepet til hele kloden"],
      explanation: "Lefebvre formulerte tesen om det urbane som gjennomgripende prosess, mens selve uttrykket hører til den senere litteraturen som bygger videre på ham. Å legge uttrykket i munnen på Lefebvre er en dokumentert feiltilskrivning.",
    },
    {
      question: "Hva er det analytiske problemet med å definere byen som et avgrenset område?",
      options: ["At alt utenfor blir en restkategori", "At grensen sjelden stemmer med kommunegrensen", "At byens innbyggertall da blir vanskelig å måle", "At planleggerne får for lite handlingsrom innenfor grensen"],
      explanation: "Når byen defineres som et område, blir omlandet til «det landlige», og man mister av syne at det er formet av de samme prosessene. At grensen avviker fra kommunegrensen er måleproblemet, som er kritikkens andre og separate ledd.",
    },
    {
      question: "Hva er agglomerasjonsfordeler?",
      options: ["Gevinstene ved at virksomheter ligger tett sammen", "Fordelene et land har av å ha flere store byer", "Innsparingene en bedrift får ved å produsere mer av samme vare", "Gevinsten ved å flytte produksjon til områder med lave lønninger"],
      explanation: "Fordelene kommer av tilgang til arbeidskraft, spesialiserte leverandører og kunnskap som sprer seg mellom folk som møtes ofte. Skalafordeler internt i bedriften og lave lønnskostnader er andre mekanismer og forutsetter ingen konsentrasjon i rommet.",
    },
    {
      question: "Hva skiller lokaliseringsfordeler fra urbaniseringsfordeler?",
      options: ["De første følger av bransjekonsentrasjon, de andre av bystørrelse", "De første gjelder industrien, de andre gjelder tjenestenæringene", "De første er kortsiktige, de andre virker over lengre tid", "De første gjelder bedrifter, de andre gjelder husholdninger"],
      explanation: "Lokaliseringsfordeler oppstår når virksomheter i samme bransje ligger tett, mens urbaniseringsfordeler følger av byens størrelse på tvers av bransjer. En bedrift kan nyte godt av det ene uten det andre, uavhengig av næring og tidshorisont.",
    },
    {
      question: "Hva er agglomerasjonsulemper?",
      options: ["Kostnadene ved konsentrasjon, som trengsel og høye priser", "Tapet som oppstår når en bedrift flytter ut av byen", "Ulempene små byer har av å mangle spesialiserte tjenester", "Kostnadene ved å bygge ut infrastruktur i spredtbygde strøk"],
      explanation: "Ulempene er den analytiske motvekten til fordelene: tomtepriser, kø, arealpress og forurensning stiger med størrelsen. De virker samtidig med fordelene, ikke i en senere fase, og hvor nettoen ligger er et empirisk spørsmål.",
    },
    {
      question: "Hva er en byregion?",
      options: ["Byen og de områdene som er funksjonelt knyttet til den", "Byen med alle nabokommunene den grenser til", "Et fylke der en større by utgjør befolkningstyngdepunktet", "Området innenfor byens ytterste sammenhengende bebyggelse"],
      explanation: "Byregionen avgrenses funksjonelt, særlig gjennom daglige arbeidsreiser, og endrer seg når reisetiden endres. Nabokommuner, fylkesgrenser og bebygd areal er administrative eller fysiske avgrensninger som ikke fanger den funksjonelle koblingen.",
    },
    {
      question: "Hva vil det si å analysere byen som skala?",
      options: ["Å behandle bynivået som ett nivå i et hierarki av nivåer", "Å sammenligne byens størrelse med andre byers størrelse", "Å tegne byen på kart i en bestemt målestokk", "Å måle hvor stort område byens innbyggere bruker daglig"],
      explanation: "Grepet består i å spørre hva som ses og hva som forsvinner når analysen legges på bynivå framfor på nabolags- eller nasjonalt nivå. Størrelsessammenligning, kartmålestokk og arealbruk er andre operasjoner og gir ikke det skiftet i forklaring.",
    },
    {
      question: "Hva er en megaby?",
      options: ["Et byområde med mer enn ti millioner innbyggere", "Den største byen i et land, uansett folketall", "En by som har vokst mer enn ti prosent på ti år", "Et byområde som strekker seg over flere landegrenser"],
      explanation: "Terskelen er en konvensjon, og tallene avhenger av om man måler den administrative byen eller hele det bebygde området. Å være størst i landet, å vokse raskt og å krysse grenser er andre kjennetegn som ikke definerer begrepet.",
    },
    {
      question: "Hvordan behandler faget beboere i uformelle bosettinger?",
      options: ["Som aktører som handler under strukturelle begrensninger", "Som en gruppe som primært defineres av inntektsnivået sitt", "Som ofre for en urbanisering de ikke har hatt innflytelse på", "Som midlertidige innflyttere på vei mot formell bolig"],
      explanation: "Beboerne bygger, organiserer og forhandler med myndigheter, ofte over flere tiår. Å framstille dem som passive eller som en ren elendighetskulisse er faglig upresist, og uformell status handler om rettslige og infrastrukturelle forhold, ikke om inntekt alene.",
    },
  ],
  'sgo1001-4-2': [
    {
      question: "Hva skiller byplanlegging fra byutvikling?",
      options: ["Planlegging er forsøket på å styre, utvikling er det som faktisk skjer", "Planlegging gjelder nye områder, utvikling gjelder eksisterende bydeler", "Planlegging utføres av kommunen, utvikling av private aktører", "Planlegging gjelder bygninger, utvikling gjelder befolkning og næring"],
      explanation: "Mye byutvikling skjer utenom planene, og avstanden mellom plan og resultat er ofte det mest interessante i en analyse. Hvem som handler, hvilke områder det gjelder og hva som endres, varierer i begge tilfeller og skiller dem ikke.",
    },
    {
      question: "Hva kjennetegner utopisk byplanlegging?",
      options: ["Byformen utledes av en forestilling om et bedre samfunn", "Planene er så ambisiøse at de sjelden lar seg gjennomføre", "Planleggingen skjer uten hensyn til hva prosjektene koster", "Byen tegnes ferdig i detalj før den første tomta er kjøpt"],
      explanation: "Kjennetegnet er at planen begynner i samfunnsproblemet og at den fysiske formen blir et sosialt reformverktøy. Ordet utopisk er her en sjangerbetegnelse, ikke en påstand om at planene er urealistiske, dyre eller detaljerte.",
    },
    {
      question: "Hvem knyttes hagebyen til?",
      options: ["Ebenezer Howard", "Jessop, Jones og Brenner", "Kingsley Davis", "Henri Lefebvre"],
      explanation: "Howard formulerte hagebyforslaget rundt forrige århundreskifte. Jessop, Jones og Brenner står bak rammeverket territorium, sted, skala og nettverk, Davis eier urbanisering som relativt fenomen, og Lefebvre eier tesen om det urbane som prosess.",
    },
    {
      question: "Hvilket av disse er IKKE et kjerneelement i Howards hageby?",
      options: ["At byen skal bygges tettere enn industribyen", "At folketallet skal ha et fastsatt maksimum", "At byen skal omgis av et permanent grøntbelte", "At byen skal ha sine egne arbeidsplasser"],
      explanation: "Hagebyen skulle nettopp gi mer luft og lys enn industribyen, ikke høyere tetthet. De tre andre er kjernen: tak på størrelsen, grøntbelte som hindrer utvidelse, og egne arbeidsplasser som gjør byen selvstendig.",
    },
    {
      question: "Hva er hovedforskjellen mellom en hageby og en forstad?",
      options: ["Hagebyen skulle være selvstendig, forstaden er det ikke", "Hagebyen har hager, forstaden har fellesarealer og parker", "Hagebyen er offentlig planlagt, forstaden vokser fram privat", "Hagebyen ligger på landet, forstaden ligger i byens randsone"],
      explanation: "Selvstendigheten er poenget: eget næringsliv, egen grense og tak på folketallet. Forstaden er en boligsone der arbeidsplassene ligger i sentrum og forbindelsen er pendling. Hagene alene gjør ikke et område til hageby.",
    },
    {
      question: "Hva er poenget med Howards tre magneter?",
      options: ["De viser hva by og land trekker og frastøter med", "De angir tre sentre som hagebyen skulle bygges rundt", "De beskriver tre faser i hagebyens vekst over tid", "De rangerer tre alternative modeller for byplanlegging"],
      explanation: "Magnetene er et argumentgrep: byen trekker med arbeid og frastøter med trangboddhet, landsbygda motsatt, og hagebyen skulle ha begge settene med fordeler. De er ikke fysiske sentre, faser eller alternative modeller.",
    },
    {
      question: "Hva var hovedmålet med den modernistiske byplanleggingen?",
      options: ["Å skaffe nok boliger av god nok standard, raskt", "Å gjøre byen attraktiv for investeringer og tilflyttere", "Å bevare den historiske bebyggelsen i sentrum", "Å redusere transportbehovet gjennom blandet arealbruk"],
      explanation: "Fasen svarte på et kartlagt forsyningsproblem i etterkrigstiden. Attraktivitet er entreprenørialismens mål, og redusert transportbehov er ny-rasjonalismens — det siste er tvert imot en kritikk av modernismens funksjonsdeling.",
    },
    {
      question: "Hva er funksjonsdeling som planprinsipp?",
      options: ["At byens funksjoner legges i hver sine soner", "At planoppgavene fordeles mellom kommune, fylke og stat", "At hver bydel får ansvar for sine egne tjenestetilbud", "At bygningene utformes slik at bruken kan endres over tid"],
      explanation: "Prinsippet var opprinnelig helsemessig begrunnet: å skille boliger fra støyende og forurensende industri. Fordeling av planmyndighet, bydelsansvar og fleksible bygg er andre forhold og har ikke med soneinndelingen å gjøre.",
    },
    {
      question: "Hva kjennetegner en drabantby?",
      options: ["Et planlagt boligområde utenfor sentrum, bygget i ett grep", "Et boligområde som har vokst fram gradvis, tomt for tomt", "En selvstendig by med egne arbeidsplasser og eget grøntbelte", "Et fortettet område bygget rundt et kollektivknutepunkt"],
      explanation: "Drabantbyen er modernismens tydeligste fysiske spor: samlet plan, egne skoler og butikker, og bane inn til byen. Gradvis vekst kjennetegner forstaden, selvstendighet kjennetegner hagebyen, og knutepunktfortetting hører til ny-rasjonalismen.",
    },
    {
      question: "Hvilken rolle hadde planleggeren i den modernistiske fasen?",
      options: ["Fagekspert som utreder og foreskriver løsningen", "Forhandler mellom kommunen og private utbyggere", "Tilrettelegger for medvirkning fra berørte beboere", "Politisk beslutningstaker med vedtaksmyndighet"],
      explanation: "Modellen forutsetter at det finnes én beste løsning som kan finnes gjennom utredning. Forhandlerrollen hører til entreprenørialismen, tilretteleggerrollen til ny-rasjonalismen, og de faktiske vedtakene lå uansett hos politikerne.",
    },
    {
      question: "Hva gikk den transportmessige kritikken av modernismen ut på?",
      options: ["At funksjonsdelingen bygger reisebehovet inn i planen", "At kollektivtransporten ble prioritert foran privatbilen", "At veiene ble bygget for smale for senere trafikkvekst", "At drabantbyene ble lagt for nær eksisterende jernbane"],
      explanation: "Når bolig, arbeid og handel ligger i hver sin sone, må alt bindes sammen med reiser. Kritikken gjelder planprinsippet, ikke veidimensjonering eller banetilknytning — drabantbyene var tvert imot ofte bygget nettopp langs bane.",
    },
    {
      question: "Hva kjennetegner entreprenørialistisk byplanlegging?",
      options: ["Byen konkurrerer om investeringer og kjøpekraft", "Kommunen overlater all planmyndighet til private utbyggere", "Planleggingen skjer uten overordnede planer og utredninger", "Byen prioriterer boligbygging framfor næringsutvikling"],
      explanation: "Kjernen er skiftet i formål: fra å forvalte tjenester til å konkurrere om ressurser. Kommunen beholder planmyndigheten og bruker den i forhandling, og overordnede planer finnes fortsatt ved siden av de enkelte prosjektene.",
    },
    {
      question: "Hva beskriver figuren «byen som vekstmaskin»?",
      options: ["En koalisjon av lokale aktører med felles interesse av vekst", "En by der industrien er den viktigste kilden til sysselsetting", "En modell for hvordan byer vokser gjennom innflytting", "Et mål på hvor raskt byens folketall øker per tiår"],
      explanation: "Figuren forklarer hvorfor vekst så sjelden er omstridt som mål: eiendomsbesittere, utbyggere, næringsliv og kommune har alle noe å vinne. Det er en forklaring på politisk oppslutning, ikke en vekstmodell eller et vekstmål.",
    },
    {
      question: "Hva er et prestisjeprosjekt i byutvikling?",
      options: ["Et enkeltprosjekt som skal endre oppfatningen av hele byen", "Et prosjekt som er dyrere enn kommunens opprinnelige budsjett", "Et byggeprosjekt som vinner arkitekturpriser og oppmerksomhet", "Et prosjekt som gjennomføres uten private medfinansiører"],
      explanation: "Logikken er at et synlig løft i ett område skal trekke investeringer og oppmerksomhet til byen som helhet. Prosjektet vurderes derfor på omdømmeeffekt og avledet investering, og kan regnes som vellykket selv om regnskapet isolert går i minus.",
    },
    {
      question: "Hva er hovedpoenget i den kritiske lesningen av attraktivitetsdiskursen?",
      options: ["At den skjuler spørsmålet om hvem byen skal være attraktiv for", "At attraktivitet er umulig å måle på en etterprøvbar måte", "At den brukes av kommuner som mangler et eget planfaglig miljø", "At attraktive byer i praksis får færre tilflyttere enn de venter"],
      explanation: "Diskursen er virkningsfull nettopp fordi den framstår som nøytral — ingen er mot at byen er attraktiv. Målbarhet, kommunal kapasitet og faktiske tilflyttertall er andre spørsmål og berører ikke innrammingen.",
    },
    {
      question: "Hva er en utbyggingsavtale?",
      options: ["En avtale om hva utbygger skal bekoste av infrastruktur", "Et vedtak som fastsetter hva som kan bygges på en tomt", "En kontrakt mellom utbygger og de framtidige kjøperne", "En avtale mellom kommunen og staten om utbyggingstilskudd"],
      explanation: "Planen fastsetter hva som kan bygges og er et offentlig vedtak; avtalen fastsetter hvem som betaler for hva og forhandles fram. Det er derfor konfliktene oftest oppstår i avtalen og ikke i selve planvedtaket.",
    },
    {
      question: "Hva kjennetegner ny-rasjonalistisk byplanlegging?",
      options: ["Helhetlige planer med bærekraft som overordnet premiss", "Prosjektvis utvikling drevet fram av private initiativ", "Funksjonsdeling og standardisert boligbygging i stor skala", "Planlegging uten politisk behandling av de enkelte sakene"],
      explanation: "Fasen henter ambisjonen om helhet og kunnskapsgrunnlag fra modernismen, men rammen er klima, arealforbruk og fordeling, og medvirkning er lagt inn. Prosjektvis utvikling hører til entreprenørialismen og funksjonsdeling til modernismen.",
    },
    {
      question: "Hva er fortetting et virkemiddel for å oppnå?",
      options: ["Redusert areal- og transportforbruk", "Høyere eiendomsverdi i sentrale bydeler", "Bedre lys- og solforhold i eksisterende boliger", "Kortere saksbehandlingstid i plansaker"],
      explanation: "Fortetting sparer areal, gir kortere avstander og gjør kollektivtransport og tjenester lønnsomme. At det er et virkemiddel og ikke et mål, er verdt å skille på — kostnadene ved fortetting kan bare veies mot målet, ikke mot virkemidlet.",
    },
    {
      question: "Hva innebærer samordnet areal- og transportplanlegging?",
      options: ["Å samle utbygging rundt kollektivknutepunkter", "Å planlegge nye veier samtidig med nye boligområder", "Å la et felles organ styre både arealbruk og veibygging", "Å bygge like tett i hele kommunen for å gi et jevnt tilbud"],
      explanation: "Prinsippet sier ikke bare tettere, men tettere på de riktige stedene — der kapasiteten for kollektivreiser allerede finnes. Samtidig veiplanlegging, felles organ og jevn tetthet fanger ikke den koblingen mellom hvor det bygges og hvordan folk reiser.",
    },
    {
      question: "Hvorfor gjør bærekraft som planpremiss plansaker vanskeligere?",
      options: ["Fordi hensynene ofte trekker i hver sin retning", "Fordi utredningskravene tar lengre tid enn før", "Fordi private utbyggere motsetter seg klimakrav", "Fordi kommunene mangler kompetanse på klimaregnskap"],
      explanation: "Utslippskutt, naturmangfold, arealforbruk og sosial fordeling kan peke ulikt: fortetting kutter utslipp og kan samtidig fortrenge lavinntektshusholdninger. Saksbehandlingstid, motstand og kompetanse er praktiske utfordringer, ikke selve avveiningsproblemet.",
    },
    {
      question: "Hva er den vanligste innvendingen mot medvirkning i planlegging?",
      options: ["At deltakelsen skjer på myndighetenes premisser", "At for mange innspill gjør planene umulige å vedta", "At beboerne mangler faglig kunnskap om planlegging", "At medvirkning gjør planprosessene vesentlig dyrere"],
      explanation: "Formene og tidspunktene bestemmes av myndighetene, og de ressurssterke deltar systematisk oftere. Dette er Miraftabs skille mellom inviterte og oppfunne rom anvendt på planlegging, og det handler om hvem som setter rammene.",
    },
    {
      question: "Hva er den sentrale forskjellen mellom entreprenørialisme og ny-rasjonalisme?",
      options: ["Formålet: vekst og konkurranse mot bærekraft og helhet", "Tidsperioden: den ene er eldre enn den andre med tjue år", "Aktørene: den ene er kommunal, den andre er privat", "Skalaen: den ene gjelder bydeler, den andre hele byen"],
      explanation: "Forskjellen ligger i hva planen svarer til. De to opptrer dessuten samtidig i praksis — en kommuneplan med klimamål gjennomføres gjerne med utbyggingsavtaler — så verken kronologi eller aktørtype skiller dem rent.",
    },
    {
      question: "Hvorfor er det upresist å si at ny-rasjonalismen erstattet entreprenørialismen?",
      options: ["Fordi de to logikkene møtes i den samme plansaken", "Fordi ny-rasjonalismen bare finnes i de største byene", "Fordi entreprenørialismen ble avviklet ved lovendring", "Fordi de to har helt ulike geografiske nedslagsfelt"],
      explanation: "Planen kan være ny-rasjonalistisk med klimamål og knutepunktstrategi, mens gjennomføringen er entreprenørialistisk gjennom utbyggingsavtaler. Fasene fungerer som lag oppå hverandre, ikke som perioder som avløser hverandre.",
    },
    {
      question: "Hva menes med at planleggingsfasene er lag og ikke avløsninger?",
      options: ["At sporene fra hver fase blir stående og virker samtidig", "At hver fase bygger videre på den forrige uten å endre noe", "At skiftene mellom fasene skjedde svært gradvis over tiår", "At fasene kom i ulik rekkefølge i ulike land"],
      explanation: "En by kan ha drabantbyer fra 1950-tallet, omdannede havnearealer fra 1980-tallet og en knutepunktstrategi i dag — alle tre samtidig. Poenget er ikke at skiftene i formål var små eller gradvise; de var reelle.",
    },
    {
      question: "Hvordan endrer en byomdanning byen som sted?",
      options: ["Den endrer posisjon, materielle rammer og stedsfølelse", "Den endrer først og fremst befolkningens gjennomsnittsinntekt", "Den endrer stedets navn og administrative tilhørighet", "Den endrer hvordan stedet framstilles, men ikke hvordan det brukes"],
      explanation: "De tre stedsbetydningene fra Agnews tredeling — location, locale og sense of place — berøres alle. Inntektsendring er en mulig følge, mens navn og framstilling alene fanger ikke at også rammene for hva som kan foregå der, blir andre.",
    },
    {
      question: "Hvorfor legger ny-rasjonalismen vekt på et hierarki av planer?",
      options: ["Fordi helheten skal binde de enkelte prosjektene", "Fordi staten krever at kommunene rapporterer arealbruk", "Fordi utredningene blir billigere når de gjøres samlet", "Fordi detaljplaner er vanskeligere å påklage enn overordnede"],
      explanation: "Overordnede planer setter hovedgrepene, og reguleringsplanene må holde seg innenfor dem. Spenningen mot entreprenørialismen oppstår nettopp fordi den enkelte saken kommer med sitt eget press for unntak fra helheten.",
    },
  ],
  'sgo1001-4-3': [
    {
      question: "Hva er gentrifisering?",
      options: ["At velstående husholdninger flytter inn i en arbeiderbydel", "At en bydel får oppgradert bygningsmasse og bedre uterom", "At boligprisene i en by stiger raskere enn lønningene gjør", "At en bydel får et bredere tilbud av kaféer og kulturtilbud"],
      explanation: "Prosessen har tre sider som må henge sammen: befolkningsendring, fysisk oppgradering og prisstigning som gjør området utilgjengelig for dem som bodde der. Oppgradering alene, generell prisvekst og et nytt konsumlandskap er hver for seg for smale.",
    },
    {
      question: "Hvorfor er det feil å forklare gentrifisering med at «rike folk liker gamle bydeler»?",
      options: ["Fordi det bare gir den ene av to nødvendige forklaringstyper", "Fordi de som flytter inn tidlig, sjelden har spesielt høy inntekt", "Fordi eldre bygningsmiljø ikke er et gjennomgående trekk ved slike områder", "Fordi prosessen også forekommer i områder med helt ny bebyggelse"],
      explanation: "Sensor ser etter både de økonomiske og de sosio-kulturelle forklaringene. Det er riktig at de tidlige innflytterne ofte har moderat inntekt, men det er en presisering innenfor den sosio-kulturelle forklaringen og erstatter ikke den økonomiske.",
    },
    {
      question: "Hva er fortrengning?",
      options: ["At husholdninger må flytte fordi de ikke har råd", "At en bydel mister innbyggere til forstedene over tid", "At kommunale utleieboliger avvikles i en bydel", "At boligmassen i et område bygges om til næringslokaler"],
      explanation: "Fortrengning er en mulig følge av gentrifisering, ikke gentrifiseringen selv. Den kan være direkte, at noen mister boligen, eller indirekte, at de som ville flyttet inn før, ikke lenger kan. Utflytting til forstedene er suburbanisering og noe annet.",
    },
    {
      question: "Hva er indirekte fortrengning?",
      options: ["At området lukkes for dem som ville flyttet inn tidligere", "At beboere flytter frivillig fordi nabolaget endrer karakter", "At utleiere sier opp leiekontrakter for å pusse opp", "At kommunen omdisponerer boliger til andre formål"],
      explanation: "Den indirekte formen er vanskeligere å måle og lettere å overse, men den teller. Oppsigelse for oppussing er derimot direkte fortrengning, og frivillig flytting og kommunal omdisponering er andre forhold igjen.",
    },
    {
      question: "Hva er disinvestering i et byområde?",
      options: ["At området over tid får lite vedlikehold", "At beboerne med høyest inntekt flytter ut av området", "At kommunen kutter i tjenestetilbudet i en bydel", "At næringsvirksomheten i området legges ned eller flytter"],
      explanation: "Disinvestering beskriver kapitalstrømmen inn og ut av bygningsmassen, ikke beboerne eller tjenestene. Uten et forutgående verdifall er det ikke noe leiegap å tjene på når investeringene kommer tilbake.",
    },
    {
      question: "Hva er leiegapet?",
      options: ["Forskjellen mellom dagens og mulig avkastning på en eiendom", "Forskjellen mellom leieprisen og det leietakeren har råd til", "Forskjellen mellom leieprisen i sentrum og i randsonen", "Forskjellen mellom leieinntekten og driftskostnadene i en gård"],
      explanation: "Gapet oppstår når disinvestering senker den faktiske avkastningen mens sentral beliggenhet holder den potensielle oppe. Betalingsevne, geografiske prisforskjeller og driftsmargin er andre størrelser og utløser ikke oppkjøpsbølgen.",
    },
    {
      question: "Hva forklarer leiegapet, og hva forklarer det ikke?",
      options: ["Det forklarer hvor og når, ikke hvem som flytter inn", "Det forklarer hvem som flytter inn, ikke hvor investeringene kommer", "Det forklarer prisnivået, men ikke hvorfor boligene pusses opp", "Det forklarer beboernes flyttemønster, men ikke eiernes valg"],
      explanation: "Leiegapet er en tilbudssideforklaring: det sier hvorfor investeringene kommer til akkurat dette området nå. Etterspørselssiden — hvem som vil bo der, og hvorfor — dekkes av de sosio-kulturelle forklaringene, og begge trengs.",
    },
    {
      question: "Hva peker de sosio-kulturelle forklaringene på gentrifisering på?",
      options: ["En voksende gruppe som etterspør sentrale boliger", "At beboerne i området ønsker seg bedre boligstandard", "At kommunen markedsfører bydelen for å tiltrekke tilflyttere", "At kulturtilbudet i en bydel gjør den mer kjent utenfra"],
      explanation: "Forklaringen knytter seg til endringer i arbeidsliv og livsløp: flere arbeider i kunnskapsnæringer lokalisert sentralt, og flere husholdninger har to yrkesaktive. Kommunal markedsføring og kulturtilbud er virkemidler og indikatorer, ikke drivkraften.",
    },
    {
      question: "Hva kjennetegner «den nye middelklassen» i denne sammenhengen?",
      options: ["Høy utdanning og arbeid i kunnskapsnæringer", "Høy inntekt og arbeid i finans- og eiendomsnæringen", "Eierskap til flere boliger i sentrale bydeler", "Familier i etableringsfasen med behov for større bolig"],
      explanation: "Gruppen defineres av utdanning, yrke og livsfase, ikke av inntekt alene. Nettopp derfor er de tidlige innflytterne ofte studenter og folk i kultur- og mediebransjer med moderat inntekt.",
    },
    {
      question: "Hvorfor er konsumlandskapet en dårlig forklaring på gentrifisering?",
      options: ["Fordi det er en synlig indikator og ikke en drivkraft", "Fordi kaféer og butikker sjelden kommer før prisene stiger", "Fordi tilbudet varierer for mye mellom byer til å sammenlignes", "Fordi det bare finnes i de mest sentrale bydelene"],
      explanation: "Sammenhengen går begge veier, men årsaken ligger i leiegapet og i etterspørselen. Å si at gentrifisering er når det kommer kaffebarer, er å forveksle symptom med årsak, selv om symptomet er et godt tegn på at prosessen pågår.",
    },
    {
      question: "Hva er byfornyelse, sammenlignet med gentrifisering?",
      options: ["En planlagt oppgradering til beste for beboerne", "En prosess der beboerne i et område skiftes ut over tid", "En privat investering i eldre boligmasse med sikte på salg", "En markedsføring av et område for å tiltrekke nye innbyggere"],
      explanation: "Byfornyelse er en innsats med et mål; gentrifisering er en prosess som skifter ut hvem som bor der. Byfornyelse kan utløse gentrifisering, men om den gjør det, er et empirisk spørsmål i hvert enkelt tilfelle.",
    },
    {
      question: "Hva er filtrering i boligmarkedet?",
      options: ["At boliger synker i relativ standard og pris over tid", "At kjøpere sorteres etter betalingsevne av bankene", "At kommunen fordeler utleieboliger etter fastsatte kriterier", "At boligsøkere velger bort områder med dårlig omdømme"],
      explanation: "Filtrering er den vanlige måten eldre boligmasse blir rimelig på, og gentrifisering kan beskrives som en avbrutt filtrering. Kredittvurdering, kommunal tildeling og omdømme er andre sorteringsmekanismer og gjelder ikke boligenes egen prisbane.",
    },
    {
      question: "Hva er boligsegregasjon?",
      options: ["Romlig sortering av grupper mellom byens områder", "At en bydel skifter befolkning gjennom oppgradering", "At innvandrere bor mer konsentrert enn andre grupper", "At kommunen plasserer utleieboliger i bestemte områder"],
      explanation: "Segregasjon er et gradsspørsmål om hele byen, ikke et enten-eller og ikke en endringsprosess i ett område. Konsentrasjon av bestemte grupper og kommunal plassering er henholdsvis et utslag og en av mekanismene bak.",
    },
    {
      question: "Hvilke tre mekanismer forklarer boligsegregasjon?",
      options: ["Preferanser, institusjonell praksis og diskriminering", "Inntekt, utdanningsnivå og alderssammensetning i husholdningen", "Flytting, fødselsoverskudd og innvandring", "Boligpriser, boligtyper og transporttilbud"],
      explanation: "De tre virker samtidig, og et godt langsvar behandler dem hver for seg før det veier dem. De øvrige listene inneholder kjennetegn og forhold som inngår i mekanismene, men de er ikke selve forklaringsmodellen.",
    },
    {
      question: "Hva skiller institusjonell praksis fra diskriminering som mekanisme?",
      options: ["Den første er systemvirkning, den andre er handlinger", "Den første er ulovlig, den andre er lovlig i de fleste land", "Den første gjelder eiemarkedet, den andre gjelder leiemarkedet", "Den første virker over tid, den andre virker i enkelttilfeller"],
      explanation: "Institusjonell praksis er utilsiktet sortering gjennom regler, kredittvurdering og planlegging som ingen har utformet med segregasjon for øye. Diskriminering er direkte forskjellsbehandling av personer. De kan gi samme utfall og krever ulike tiltak.",
    },
    {
      question: "Hva er kjernen i Schellings segregasjonsmodell?",
      options: ["Selv en svak preferanse kan gi sterkt segregerte mønstre", "Folk foretrekker systematisk naboer som ligner dem selv", "Segregasjon oppstår når inntektsforskjellene blir store nok", "Boligmarkedet fordeler grupper etter betalingsevne alene"],
      explanation: "Modellen viser at et utfall på bynivå kan ligne ingens ønske på individnivå: aktørene krever bare at de ikke blir en liten minoritet. At folk generelt har slike preferanser, er en empirisk påstand modellen ikke inneholder.",
    },
    {
      question: "Hva slags påstand er Schellings modell?",
      options: ["En simulering som viser at en mekanisme er tilstrekkelig", "Et empirisk funn om hvordan segregasjon oppstod i amerikanske byer", "En måling av holdninger til naboer med annen bakgrunn", "En statistisk modell for å forutsi flyttestrømmer i en by"],
      explanation: "Modellen viser at svake preferanser er tilstrekkelig til å produsere segregasjon, ikke at de er årsaken i en konkret by. Å skrive at Schelling viste at folk er fordomsfulle, er en feiltilskrivning som koster.",
    },
    {
      question: "Hva inneholder Schellings modell IKKE?",
      options: ["Betalingsevne, institusjoner og diskriminering", "Aktører som flytter når naboene ikke ligner dem selv", "En terskel for når en husholdning velger å flytte", "Et rutenett der aktørene kan bytte plassering"],
      explanation: "Modellens begrensninger må stå i et godt svar: den mangler alle mekanismene som virker i ekte boligmarkeder utenom preferansene. De tre andre er nettopp bestanddelene modellen faktisk består av.",
    },
    {
      question: "Hva er et vippepunkt i et boligområde?",
      options: ["Punktet der endringen i sammensetning blir selvforsterkende", "Andelen like naboer en husholdning minst må ha for å bli", "Prisnivået der lavinntektshusholdninger ikke lenger kan bli boende", "Tidspunktet da et område har skiftet befolkning helt ut"],
      explanation: "Vippepunktet er en egenskap ved systemet som følger av at mange beslutningsregler virker samtidig. Terskelen er derimot egenskapen ved den enkelte husholdningens regel, og de to må holdes fra hverandre.",
    },
    {
      question: "Hva er suburbanisering?",
      options: ["At befolkning og virksomhet flytter mot forstedene", "At forstedene får tettere bebyggelse og flere boliger", "At sentrale bydeler mister innbyggere til andre byer", "At byen utvider grensene sine til å omfatte omlandet"],
      explanation: "Suburbanisering flytter tyngdepunktet utover, mens gentrifisering trekker det innover. De to kan foregå i samme byregion samtidig og treffer ulike husholdninger i ulike livsfaser.",
    },
    {
      question: "Hvorfor er trangboddhet relevant for boligsegregasjon?",
      options: ["Fordi den er romlig ujevnt fordelt mellom byens områder", "Fordi den viser hvor mange som bor i hver bolig i en by", "Fordi den øker når boligprisene i en by stiger", "Fordi den brukes til å avgrense hva som teller som en bydel"],
      explanation: "Trangboddhet konsentreres der de rimeligste boligene ligger og følger dermed segregasjonsmønsteret. Begrepet måler boforhold i husholdningen, mens segregasjon måler fordeling mellom områder — de henger sammen uten å være det samme.",
    },
    {
      question: "Hvorfor er nabolagseffekter faglig omstridt?",
      options: ["Fordi effekten av stedet er vanskelig å skille ut", "Fordi det ikke finnes data om beboernes nettverk og kontakter", "Fordi effekten varierer for mye mellom ulike land", "Fordi begrepet blandes sammen med boligsegregasjon"],
      explanation: "Folk er ikke tilfeldig fordelt mellom nabolag, og derfor er det krevende å vise at bostedet tilfører noe ut over husholdningens egne kjennetegn. Å hevde at nabolagseffekter finnes, er heller ikke det samme som å hevde at området er dårlig.",
    },
    {
      question: "Hvordan påvirker valget av skalanivå målingen av segregasjon?",
      options: ["Segregasjonen framstår skarpere jo finere nivået er", "Segregasjonen framstår skarpere jo grovere nivået er", "Nivået påvirker sammenligningen mellom byer, ikke styrken", "Nivået påvirker bare hvor lang tidsserie som kan lages"],
      explanation: "Variasjon som utjevnes innad i en bydel, blir synlig på kvartalsnivå. To analyser av samme by kan derfor gi ulike svar uten at noen er feil, og valget av nivå må begrunnes. Dette er Herods poeng om at nivåer er valgt, ikke gitt.",
    },
    {
      question: "Hvordan endrer gentrifisering et område som sted?",
      options: ["Den endrer posisjon, materielle rammer og stedsfølelse", "Den endrer først og fremst områdets omdømme utad", "Den endrer hvilke grupper som er i flertall blant beboerne", "Den endrer prisnivået og dermed hvem som kan flytte inn"],
      explanation: "Alle tre stedsbetydningene berøres samtidig, og det gir en observasjon pris- og flyttetall ikke gir: at tapet av tilknytning også rammer dem som blir boende. Omdømme, befolkningssammensetning og priser er hver for seg for smale.",
    },
    {
      question: "Hva er den vanligste feilen i et langsvar om boligsegregasjon?",
      options: ["Å beskrive mekanismene uten å veie dem", "Å bruke Schellings modell som et av flere eksempler", "Å behandle segregasjon som et gradsspørsmål", "Å knytte segregasjon til boligmarkedets virkemåte"],
      explanation: "Å beskrive uten å drøfte er den vanligste grunnen til at et ellers korrekt langsvar stopper på god. De tre andre er tvert imot grep som styrker svaret — segregasjon *er* et gradsspørsmål, og boligmarkedet er en sentral mekanisme.",
    },
    {
      question: "Hvordan kan valg og struktur bindes sammen i en drøfting av segregasjon?",
      options: ["Strukturene setter mulighetsrommet, valgene gir utfallet", "Preferansene setter rammene, og strukturene forsterker dem etterpå", "Valgene virker på kort sikt, strukturene på lang sikt", "Valgene forklarer eiemarkedet, strukturene forklarer leiemarkedet"],
      explanation: "Dette er strukturering slik Giddens beskriver den: strukturen både muliggjør og begrenser handling, og reproduseres gjennom handlingen. En rekkefølge i tid eller en oppdeling etter marked fanger ikke at de to leddene virker samtidig.",
    },
  ],
  'sgo1001-5-1': [
    {
      question: "Hva er sårbarhet i den forståelsen faget bruker?",
      options: ["Graden av negative konsekvenser en klimapåkjenning gir for et sted", "Styrken i den klimatiske hendelsen som rammer et område i en gitt periode", "Sannsynligheten for at en ekstrem værhendelse inntreffer i et gitt område", "Andelen av befolkningen som bor i områder som er utsatt for flom og skred"],
      explanation: "Sårbarhet er et mål på samfunnets forfatning, ikke på påkjenningens styrke. Å forklare den med nedbørsmengder eller vindstyrke er den vanligste og dyreste feilen i dette stoffet. Sannsynlighet hører til risikobegrepet, og andelen utsatte er eksponering.",
    },
    {
      question: "Hvilke tre ledd er sårbarhet satt sammen av?",
      options: ["Eksponering, følsomhet og tilpasningskapasitet", "Eksponering, sannsynlighet og skadeomfang i kroner", "Beredskap, forsikringsdekning og kommunal økonomi", "Nedbør, terrengforhold og bebyggelsestetthet"],
      explanation: "De tre leddene svarer på tre ulike spørsmål: er du der, hvor mye skade gir det, og hva kan du gjøre. Beredskap og forsikring hører inn under det tredje leddet, mens nedbør og terreng er inngangsdata og ikke ledd i begrepet.",
    },
    {
      question: "Hva er eksponering?",
      options: ["I hvilken grad folk og verdier befinner seg der påkjenningen treffer", "Hvor stor skade en gitt påkjenning påfører dem som blir rammet av den", "Hvor lang tid det tar før et samfunn er tilbake i normal drift igjen", "Hvor stor andel av lokalsamfunnets samlede økonomi som står på spill"],
      explanation: "Eksponering er et rent spørsmål om plassering. Skadeomfanget per påkjenning er følsomhet, gjenopprettingstiden hører til robusthet, og andelen av økonomien som står på spill er også følsomhet.",
    },
    {
      question: "Hva skiller eksponering fra sårbarhet?",
      options: ["Eksponering sier at du er der; sårbarhet sier hvor hardt det rammer", "Eksponering gjelder bygninger, mens sårbarhet gjelder mennesker og grupper", "Eksponering måles av forvaltningen, mens sårbarhet vurderes av forskere", "Eksponering gjelder akutte hendelser, mens sårbarhet gjelder gradvise endringer"],
      explanation: "To bygg kan være like eksponert og ha helt ulik sårbarhet, fordi det ene er bygget for påkjenningen og eieren er forsikret. Skillet går ikke mellom bygninger og mennesker, ikke mellom hvem som måler, og ikke mellom akutt og gradvis.",
    },
    {
      question: "Hva er følsomhet i sårbarhetsbegrepet?",
      options: ["Hvor mye skade en gitt mengde påkjenning gir når den treffer", "Hvor ofte et område rammes av en bestemt type klimapåkjenning i året", "Hvor mange mennesker som til daglig bor innenfor det utsatte området", "Hvor raskt lokalbefolkningen reagerer på varsler om fare i nærområdet"],
      explanation: "Følsomhet handler om skade per enhet påkjenning: jordtype, byggemåte, næringsstruktur og livssituasjon. Hyppighet er et risikospørsmål, antall bosatte er eksponering, og reaksjonstid hører til beredskap.",
    },
    {
      question: "Hva er tilpasningskapasitet?",
      options: ["Evnen til å justere seg for å redusere skade av en påkjenning", "Tiltakene et samfunn faktisk har gjennomført mot klimaskader hittil", "Beløpet en kommune har satt av til klimatiltak i årets budsjett", "Graden av teknisk sikring som allerede finnes i de utsatte områdene"],
      explanation: "Nøkkelordet er evne. Et samfunn kan ha høy kapasitet og likevel ikke tilpasse seg, fordi tiltakene koster nå og gir gevinst senere. Gjennomførte tiltak, budsjettmidler og eksisterende sikring er bruk av kapasiteten, ikke kapasiteten selv.",
    },
    {
      question: "Hva er skillet mellom tilpasningskapasitet og faktisk tilpasning?",
      options: ["Kapasitet er en evne, mens tilpasning er at noen faktisk handler", "Kapasitet gjelder kommunen, mens tilpasning gjelder den enkelte husholdning", "Kapasitet gjelder framtiden, mens tilpasning gjelder det som allerede er skjedd", "Kapasitet er et faglig mål, mens tilpasning er et politisk vedtatt mål"],
      explanation: "Gapet mellom evne og handling er et selvstendig tema: Norge har høy kapasitet, men godkjenner likevel bebyggelse i utsatte områder. Skillet går ikke mellom nivåer, tidspunkt eller fagfelt, men mellom å kunne og å gjøre.",
    },
    {
      question: "Hva ligger i at sårbarhet er ujevnt fordelt?",
      options: ["At fordelingen følger et mønster skapt av politiske og økonomiske forhold", "At noen områder tilfeldigvis rammes oftere av ekstremvær enn andre områder gjør", "At skadeomfanget varierer mye fra hendelse til hendelse gjennom årene", "At forskjellige typer påkjenninger rammer forskjellige deler av landet"],
      explanation: "Ujevn fordeling er ikke tilfeldig variasjon. Fordelingen følger inntekt, eiendomsforhold, planhistorie og tilgang til beslutninger, og nettopp derfor kan den endres politisk. De andre svarene beskriver variasjon uten å forklare den.",
    },
    {
      question: "Hva menes med at sårbarhet er sosialt betinget?",
      options: ["At den skapes av samfunnsmessige prosesser, ikke av naturen alene", "At den rammer sosialt utsatte grupper hardere enn den rammer andre grupper", "At den avhenger av hvor godt naboer og lokalsamfunn stiller opp for hverandre", "At den er større i tettbygde strøk enn i områder med spredt bosetting"],
      explanation: "Poenget er årsaksforholdet: politiske, økonomiske, sosiale og historiske prosesser har lagt fordelingen på forhånd. At utsatte grupper rammes hardt, er en følge av dette og ikke selve definisjonen, og bosettingstetthet avgjør ingenting i seg selv.",
    },
    {
      question: "Hvorfor er «naturkatastrofe» et faglig upresist ord?",
      options: ["Fordi det plasserer årsaken i naturen, mens utfallet er samfunnsskapt", "Fordi katastrofer alltid har flere årsaker enn bare den utløsende hendelsen", "Fordi ordet brukes på ulike måter av forvaltningen og av forskningsmiljøene", "Fordi mange slike hendelser i dag er forsterket av menneskeskapte utslipp"],
      explanation: "En naturhendelse blir katastrofe først når den møter et samfunn som ikke tåler den. Ordet skjuler at bygningsmasse, planvedtak og beredskap avgjorde utfallet. At utslipp påvirker hyppigheten, er et annet og riktig poeng, men det er ikke det ordet skjuler.",
    },
    {
      question: "Hva er dobbel eksponering?",
      options: ["Å møte klima- og globaliseringsendringer som virker inn på hverandre", "Å være utsatt for to ulike typer klimapåkjenninger i det samme området", "Å bli rammet av den samme hendelsen to ganger i løpet av kort tid", "Å være eksponert både som privatperson og gjennom sin egen arbeidsplass"],
      explanation: "Kjernen er samspillet: globaliseringen kan ha tømt stedet for den bufferen som skulle møtt klimapåkjenningen. To klimapåkjenninger eller gjentatte hendelser er noe annet, og gir ikke det analytiske poenget begrepet er laget for.",
    },
    {
      question: "Hva er feiltilpasning?",
      options: ["Et tiltak som virker, men øker sårbarheten et annet sted eller senere", "Et tiltak som ikke gir den beskyttelsen det opprinnelig var ment å gi", "Et tiltak som er dyrere å gjennomføre enn skaden det faktisk forhindrer", "Et tiltak som møter sterk motstand fra dem det er ment å beskytte"],
      explanation: "Feiltilpasning er ikke det samme som et mislykket tiltak. En flomvoll kan beskytte som planlagt, sende vannet nedstrøms og gjøre videre utbygging bak vollen politisk lettere. Kostnad og motstand er andre problemer.",
    },
    {
      question: "Hva er hovedforskjellen mellom tilpasning og utslippsreduksjon?",
      options: ["Tilpasning håndterer konsekvensene, utslippsreduksjon angriper årsaken", "Tilpasning er kortsiktig, mens utslippsreduksjon virker over mye lengre tid", "Tilpasning er kommunens ansvar, mens utslippsreduksjon er statens ansvar", "Tilpasning er fysiske tiltak, mens utslippsreduksjon er økonomiske virkemidler"],
      explanation: "De to svarer på hvert sitt spørsmål og har ulik skalageografi: tilpasningsgevinsten er lokal og synlig, utslippsgevinsten global og felles. Ansvarsdelingen og virkemiddeltypene varierer og definerer derfor ikke skillet.",
    },
    {
      question: "Hvorfor er tilpasningstiltak ofte lettere å få vedtatt lokalt enn utslippskutt?",
      options: ["Fordi gevinsten ved tilpasning faller til dem som gjennomfører den", "Fordi tilpasningstiltak nesten alltid koster mindre enn utslippskutt gjør", "Fordi tilpasning krever langt færre godkjenninger fra statlige myndigheter", "Fordi befolkningen forstår konsekvensene av vær bedre enn av utslipp"],
      explanation: "Skalageografien avgjør: utslippskutt er et globalt fellesgode ingen kommune kan levere alene, mens tilpasning er et lokalt gode kommunen både leverer og høster. Kostnad, saksbehandling og forståelse varierer og forklarer ikke mønsteret.",
    },
    {
      question: "Hva er robusthet, sammenlignet med tilpasningskapasitet?",
      options: ["Evnen til å tåle en påkjenning og komme tilbake, ikke å endre seg", "Evnen til å forutsi når og hvor den neste påkjenningen vil ramme", "Evnen til å bære de økonomiske kostnadene ved en større skade selv", "Evnen til å samordne innsatsen mellom flere forvaltningsnivåer samtidig"],
      explanation: "Et samfunn kan være robust og lite tilpasningsdyktig samtidig: det tåler støtet hver gang og bygger opp igjen akkurat som før. Rask normalisering kan altså bety uendret sårbarhet. Varsling, økonomi og samordning er andre forhold.",
    },
    {
      question: "Hvorfor kalles arealplanleggingen det viktigste verktøyet mot eksponering?",
      options: ["Fordi hver byggetillatelse binder eksponeringen i generasjoner", "Fordi den er billigere å ta i bruk enn fysiske sikringstiltak vanligvis er", "Fordi kommunene har full myndighet over den uten statlig innblanding", "Fordi den kan endres raskt når nye nedbørsdata blir tilgjengelige"],
      explanation: "Verktøyet er det viktigste og det tregeste samtidig: det som bygges, blir stående, og dagens sårbarhet er i stor grad arvet fra gårsdagens planvedtak. Nettopp derfor kan planlegging ikke endres raskt, uansett hvilke data som kommer.",
    },
    {
      question: "Hva er beredskapens rolle i sårbarhetsbildet?",
      options: ["Den reduserer skadene under og etter hendelsen, ikke eksponeringen", "Den fjerner behovet for fysiske sikringstiltak i de mest utsatte områdene", "Den er det eneste tiltaket som virker mot gradvise klimaendringer", "Den erstatter arealplanlegging der bebyggelsen allerede er etablert"],
      explanation: "Et velfungerende varslingssystem redder liv uten å flytte et eneste hus ut av flomsonen. Beredskap hører til tilpasningskapasiteten og håndterer hendelsen; den endrer ikke forutsetningene for den, og kan derfor ikke erstatte planarbeid.",
    },
    {
      question: "Hva er poenget med å skille kollektiv fra individuell tilpasningskapasitet?",
      options: ["At høy individuell kapasitet kan skjule at felles ordninger svikter", "At kommunen har ansvar for begge deler etter det gjeldende regelverket", "At individuell kapasitet er lettere å måle enn kollektiv kapasitet er", "At de to alltid følger hverandre, slik at det ene kan brukes som mål på det andre"],
      explanation: "Et velstående nabolag kan sikre seg selv mens felles ordninger forfaller, og da står de uten egne midler igjen med ingenting. Det er en mekanisme som gjør fordelingen stadig skjevere, og de to nivåene følger nettopp ikke hverandre.",
    },
    {
      question: "Hvorfor er kritisk infrastruktur særlig viktig i en sårbarhetsanalyse?",
      options: ["Fordi skade på den forsterker seg selv og rammer alle uansett sikring", "Fordi den er dyrere å gjenoppbygge enn boliger og næringsbygg er", "Fordi den nesten alltid ligger i de mest utsatte delene av terrenget", "Fordi ansvaret for den er delt mellom private og offentlige eiere"],
      explanation: "Faller strømmen, faller ofte også pumper, mobilnett og betalingssystemer. Ingen husholdning kan sikre seg mot bortfall av vei og strøm ved egne midler, og derfor er dette den delen av følsomheten som bare fellesskapet kan gjøre noe med.",
    },
    {
      question: "Hva gjør risikooverføring, som forsikring, med sårbarheten?",
      options: ["Den omfordeler den økonomiske konsekvensen uten å redusere skaden", "Den senker eksponeringen ved å gjøre utsatte områder mindre attraktive", "Den reduserer følsomheten fordi eiere sikrer bygg for å få full dekning", "Den fjerner behovet for offentlige kompensasjonsordninger etter skade"],
      explanation: "Huset blir like vått; det er regningen som havner et annet sted. Forsikring virker på tilpasningskapasiteten, og den virker ujevnt: to naboer med lik skade og ulik dekning har svært ulik sårbarhet.",
    },
    {
      question: "Hva er hovedpoenget i vinner- og taperperspektivet?",
      options: ["At endringene gir forbedringer noen steder og forverringer andre", "At de landene som slipper ut mest, også vil tape mest på endringene", "At alle land til slutt vil tape på klimaendringene, bare i ulikt tempo", "At tapene i hovedsak rammer landbruket, mens andre næringer vinner"],
      explanation: "Nordlige jordbruksområder kan få lengre vekstsesong mens lavtliggende kystsamfunn taper. Bildet avhenger av skalanivå og tidshorisont: en næring kan vinne mens lokalsamfunnet taper, og det er den presiseringen som løfter svaret.",
    },
    {
      question: "Hva forklarer best skjevheten i klimasårbarhet mellom global nord og global sør?",
      options: ["Forskjeller i tilpasningskapasitet og følsomhet, ikke i eksponering", "Forskjeller i eksponering, siden de mest utsatte områdene ligger i global sør", "Forskjeller i hvor mye klimagasser landene historisk har sluppet ut", "Forskjeller i hvor stor andel av befolkningen som bor i store byer"],
      explanation: "Eksponeringen er også ujevn, men et rent eksponeringsargument gjør fordelingen til geografisk uflaks. Kapital, forsikringsmarkeder og forvaltningskapasitet er systematisk ujevnt fordelt, og utslippshistorien forklarer ansvaret, ikke sårbarheten.",
    },
    {
      question: "Hvorfor er klimatilpasning et styringsproblem før det er et teknisk problem?",
      options: ["Fordi myndighet, penger og konsekvens ligger på hvert sitt nivå", "Fordi de tekniske løsningene er godt kjent og allerede godt utprøvd", "Fordi kommunene mangler juridisk hjemmel til å nekte all utbygging", "Fordi klimaforskningen ikke gir entydige svar om lokale forhold"],
      explanation: "Kommunen har arealmyndigheten, staten har regelverket og pengene, og utslippene avgjøres globalt. Resultatet er en systematisk ansvarsdiffusjon der et tiltak kan stoppe uten at noen har sagt nei.",
    },
    {
      question: "Hva er skillet mellom sårbarhet og fattigdom?",
      options: ["Sårbarhet er utsatthet for noe bestemt, fattigdom er ressursmangel", "Sårbarhet gjelder samfunn, mens fattigdom gjelder enkeltmennesker", "Sårbarhet er et faglig begrep, mens fattigdom er et politisk begrep", "Sårbarhet er midlertidig, mens fattigdom er en mer varig tilstand"],
      explanation: "Fattigdom er en av de sterkeste driverne av sårbarhet, men man kan være sårbar uten å være fattig og fattig uten å være særlig sårbar for akkurat den påkjenningen. Sårbarhet er alltid sårbarhet for noe, og et svar som sier hva, er mer presist.",
    },
    {
      question: "Hvordan bør mennesker i utsatte områder framstilles i en sårbarhetsanalyse?",
      options: ["Som handlende aktører med et handlingsrom de ikke selv har valgt", "Som passive mottakere av skade som må hjelpes av myndighetene", "Som ansvarlige for egen situasjon, siden de har valgt å bo der de bor", "Som en gruppe det er vanskelig å si noe generelt om i faglige analyser"],
      explanation: "Dette er struktureringspoenget anvendt: strukturen både muliggjør og begrenser handling. Lav tilpasningskapasitet betyr ikke fravær av handling, men at de tilgjengelige handlingene er dyrere og mindre varige enn andres.",
    },
    {
      question: "Hva er den mest effektive rekkefølgen i en sårbarhetsanalyse?",
      options: ["Påkjenning, hvem som er eksponert og hvorfor, hva som gjør skaden stor, hva som kan gjøres", "Skadeomfang, årsak, ansvar, erstatning og gjenoppbygging, i nøyaktig denne rekkefølgen", "Historikk, dagens situasjon, framskrivninger og til slutt de anbefalte tiltakene", "Naturforhold, bebyggelse, næringsliv, befolkning og til aller sist myndighetene"],
      explanation: "Rekkefølgen fungerer på et hvilket som helst case, og de to hvorfor- og hvem-spørsmålene er det som gjør den til en analyse i stedet for en sjekkliste. En ren beskrivelse ligger per definisjon på minimumsnivå i denne oppgavefamilien.",
    },
  ],
  'sgo1001-5-2': [
    {
      question: "Hva er Gavin Bridges kjernepoeng om naturressurser?",
      options: ["At natur blir ressurs når mennesker tillegger den verdi", "At naturressursene i verden er mer begrenset enn folk tror", "At uttak av naturressurser bør fordeles jevnere mellom landene", "At naturressurser blir mer verdifulle etter hvert som de blir knappe"],
      explanation: "Ressurs er ikke en iboende egenskap ved tingen, men en relasjon mellom samfunn og natur. Å gjøre Bridge til knapphetsteoretiker bytter ut hele poenget: han sier ikke noe om hvor mye det finnes, men om hva som gjør noe til en ressurs i det hele tatt.",
    },
    {
      question: "Hva vil det si at en ressurs er en relasjon?",
      options: ["At den forutsetter et samfunn som tillegger naturelementet verdi", "At den bare finnes i områder der flere land har interesser i den", "At verdien avhenger av forholdet mellom tilbud og etterspørsel", "At den må forvaltes gjennom avtaler mellom bruker og eier av arealet"],
      explanation: "Behandler du ressursen som et objekt, blir spørsmålene hvor mye det finnes og hvor det ligger. Behandler du den som en relasjon, åpner tre andre seg: hvem definerte den som ressurs, hvem har tilgang, og hvem tilegner seg verdien. Pris er ett uttrykk for verdi, ikke selve relasjonen.",
    },
    {
      question: "Hvilke tre betingelser må være oppfylt før noe er en ressurs?",
      options: ["Et behov, kunnskap og teknologi, og en ordning som gjør uttaket mulig", "En forekomst av tilstrekkelig størrelse, en eier og en kjøper i markedet", "En kartlegging, en konsesjon fra myndighetene og en finansieringsplan", "Fysisk tilgjengelighet, en transportvei og en avtale om videresalg"],
      explanation: "De tre er samfunnsmessige, ikke naturgitte, og det er nettopp derfor det samme naturelementet kan gå inn og ut av ressursstatus over tid. Konsesjoner og transport er praktiske forutsetninger som hører inn under den institusjonelle ordningen.",
    },
    {
      question: "Hva er forskjellen på bruksverdi og bytteverdi?",
      options: ["Bruksverdi følger av anvendelsen, bytteverdi av hva noe kan selges for", "Bruksverdi gjelder fornybare ressurser, bytteverdi de ikke-fornybare", "Bruksverdi gjelder privatpersoner, mens bytteverdi gjelder virksomheter", "Bruksverdi settes av myndighetene, mens bytteverdi settes i markedet"],
      explanation: "Bruksverdi er kvalitativ og situert og finnes uavhengig av om noe selges; bytteverdi er kvantitativ og sammenlignbar. Skillet følger ikke ressurstype, aktørtype eller hvem som fastsetter verdien.",
    },
    {
      question: "Hvorfor er skillet mellom bruksverdi og bytteverdi viktig i arealkonflikter?",
      options: ["Fordi verdier uten pris systematisk taper når beslutningen tas i kroner", "Fordi bytteverdien alltid er høyere enn bruksverdien for samme areal", "Fordi bare bytteverdien kan brukes som grunnlag for erstatning ved inngrep", "Fordi bruksverdien varierer mer over tid enn bytteverdien vanligvis gjør"],
      explanation: "Et myrområde kan ha stor verdi som karbonlager og flomdemper uten at noe av det har en pris, og taper derfor mot en utbygging med prissatt avkastning. Det handler ikke om nivå, erstatningsregler eller stabilitet, men om hvilket språk beslutningen tas i.",
    },
    {
      question: "Hva er det viktigste poenget om skillet fornybar og ikke-fornybar?",
      options: ["At fornybarhet også avhenger av hvordan uttaket er forvaltet", "At ikke-fornybare ressurser alltid er mer verdifulle enn fornybare", "At skillet følger av hvor lang tid ressursen bruker på å dannes", "At bare fornybare ressurser kan forvaltes gjennom kvoteordninger"],
      explanation: "Fiskes en bestand ned raskere enn den reproduserer, oppfører den seg som ikke-fornybar og kan kollapse. Dannelsestiden er den biologiske definisjonen, men det samfunnsgeografiske poenget ligger i uttaksordningen, ikke i ressursen selv.",
    },
    {
      question: "Hva er relativ knapphet?",
      options: ["At det finnes nok, men at ikke alle som trenger det, har tilgang", "At mengden er liten sammenlignet med det andre områder har tilgang til", "At knappheten er midlertidig og forsvinner når prisen justerer seg", "At ressursen er knapp bare i deler av året eller i visse perioder"],
      explanation: "Pris, avstand, teknologi, eiendomsrett eller politikk kan stå i veien selv når mengden er stor nok. Skillet mot absolutt knapphet peker på helt ulike tiltak: er knappheten relativ, hjelper det ikke å produsere mer.",
    },
    {
      question: "Hvorfor er «vannmangel» ofte en misvisende beskrivelse?",
      options: ["Fordi det gjør et fordelingsproblem om til et naturproblem", "Fordi vann sjelden er knapt noe sted i verden i dag", "Fordi begrepet ikke skiller mellom drikkevann og annet vann", "Fordi mangelen som regel skyldes forurensning og ikke mengde"],
      explanation: "Det finnes som regel vann i området; det er forurenset, dyrt, langt unna eller kontrollert av andre. Forurensning er én av flere årsaker, og poenget er ikke at knapphet aldri finnes, men at ordet skjuler hvorfor noen ikke får tilgang.",
    },
    {
      question: "Hvordan bør ressursforbannelsen formuleres faglig korrekt?",
      options: ["Som en observert og omstridt tendens, ikke som en lovmessighet", "Som en sammenheng som gjelder for land uten sterke institusjoner", "Som en økonomisk lov som gjelder for alle råvareeksporterende land", "Som en hypotese som forskningen i dag har forkastet som uholdbar"],
      explanation: "Sammenhengen er dokumentert i noen tilfeller og fraværende i andre, og det er variasjonen som gjør begrepet interessant. Institusjoner forklarer variasjonen, men de er en del av mekanismen og ikke en avgrensning av tendensens gyldighetsområde.",
    },
    {
      question: "Hvilken av disse er en mekanisme bak ressursforbannelsen?",
      options: ["At statens inntekter kommer fra utvinning og ikke fra beskatning", "At ressursen tar slutt raskere enn myndighetene hadde regnet med", "At utvinning krever teknologi som forurenser mer enn annen industri", "At befolkningen flytter til utvinningsområdene og forlater landsbygda"],
      explanation: "Når staten finansieres av utvinningsavtaler, svekkes bindingen mellom skattebetaler og styresmakt som ellers driver fram innsyn og ansvar. Uttømming, forurensning og flytting er reelle problemer, men de er ikke blant mekanismene begrepet peker på.",
    },
    {
      question: "Hva menes med at ressursen er «anledningen, ikke årsaken»?",
      options: ["At mekanismene handler om institusjoner, ikke om ressursen selv", "At ressursen bare utløser forbannelsen når prisene er høye nok over tid", "At funnet av ressursen er starten på en utvikling som ikke kan stanses", "At ressursen gir muligheter som få land klarer å utnytte godt"],
      explanation: "Ingen av de fire mekanismene handler om ressursen selv; alle handler om økonomisk struktur og maktforhold. Derfor kan de motvirkes, og derfor varierer utfallet mellom land med samme forekomst.",
    },
    {
      question: "Hva er den faglig holdbare posisjonen om ressursrikdom?",
      options: ["At utfallet avhenger av institusjoner, eierskap og forvaltning", "At ressursrikdom oftere gir problemer enn den gir velstand", "At ressursrikdom gir vekst når inntektene investeres i utdanning", "At ressursrikdom verken hjelper eller skader utviklingen nevneverdig"],
      explanation: "Spørsmålet har ikke ett riktig svar, men det har en riktig form på svaret: det avhenger av navngitte forhold. Investering i utdanning er ett eksempel på god forvaltning, ikke selve posisjonen.",
    },
    {
      question: "Hva handler de fleste ressurskonflikter om?",
      options: ["Fordeling, rettigheter og hvem som får definere bruken", "At det er for lite av ressursen til å dekke behovene", "At ulike land gjør krav på det samme området samtidig", "At uttaket skader miljøet mer enn myndighetene tillater"],
      explanation: "Konfliktene gjelder kontroll, tilgang, bruksmåte eller følger — ikke mengde. Å forklare en ressurskonflikt med knapphet alene er den vanligste forenklingen i dette stoffet, og grenseoverskridende krav er bare én av mange former.",
    },
    {
      question: "Hvorfor er en strid om et areal mellom utbygging og beite ikke en knapphetskonflikt?",
      options: ["Fordi begge ressursene finnes, men er uforenlige på samme areal", "Fordi partene stort sett er enige om hva ressursen er verdt i kroner", "Fordi konflikten kan løses ved å finne fram til et annet egnet areal", "Fordi ingen av partene har formell eiendomsrett til hele området"],
      explanation: "Dette er en konflikt om bruksmåte: vinden blåser og beitet vokser, men de to bruksmåtene kan ikke ha samme areal samtidig. Konflikten løses derfor ikke ved å produsere mer av noe.",
    },
    {
      question: "Hva er forskjellen på kontroll og eiendomsrett?",
      options: ["Kontroll er faktisk makt over bruken, eiendomsrett er formell", "Kontroll gjelder utvinningen, mens eiendomsrett gjelder selve grunnen", "Kontroll utøves av myndighetene, mens eiendomsrett tilhører private", "Kontroll er midlertidig, mens eiendomsrett gjelder på ubestemt tid"],
      explanation: "Kontrollen kan ligge hos den som har konsesjonen, kapitalen eller teknologien, altså hos en annen enn eieren. De tre begrepene eiendomsrett, kontroll og tilgang kan ligge hos tre ulike parter samtidig, og det er da konflikten blir vanskelig.",
    },
    {
      question: "Hva er hovedpoenget om fellesressurser og overbeskatning?",
      options: ["At de krever en ordning, og at spørsmålet er hvem som lager den", "At felles eierskap over tid alltid fører til at ressursen brytes ned", "At overbeskatning bare kan hindres gjennom privat eiendomsrett", "At myndighetene må overta forvaltningen når brukerne er mange"],
      explanation: "Fellesressurser forvaltes godt mange steder gjennom kvoter, brukerorganisering og hevdvunne regler. Poenget er ikke at felles eierskap svikter, men at ordningen avgjør — og at ordningen har en fordelingsprofil.",
    },
    {
      question: "Hvorfor er ressursforvaltning ikke bare et teknisk spørsmål?",
      options: ["Fordi den fordeler tilgang og inntekt mellom grupper og steder", "Fordi forvaltningen krever kompetanse som mange kommuner mangler", "Fordi uttaksnivået må vedtas politisk og ikke kan fastsettes faglig", "Fordi reglene endres ofte og derfor må tolkes av jurister underveis"],
      explanation: "To regimer med samme totale uttak kan gi helt ulik fordeling mellom store og små aktører og mellom steder. Omsettelige kvoter gir ofte effektiv drift og samtidig konsentrasjon — en fordelingsvirkning, ikke en feil i systemet.",
    },
    {
      question: "Hva kjennetegner en enklaveøkonomi?",
      options: ["Sterk kobling til verdensmarkedet og svak kobling til lokal økonomi", "At virksomheten drives av utenlandske eiere uten lokal representasjon", "At all produksjon foregår innenfor et avgrenset og bevoktet område", "At regionen er økonomisk avhengig av én enkelt stor arbeidsgiver"],
      explanation: "Utstyr, kompetanse og ofte arbeidskraft hentes utenfra, produktet eksporteres ubearbeidet, og ringvirkningene blir små selv når inntektene er store. Det er et verdifangstproblem, ikke et verdiskapingsproblem, og avhengighet av én arbeidsgiver er noe annet.",
    },
    {
      question: "Hva menes med definisjonsmakt i en ressurssak?",
      options: ["Makten til å få gjennomslag for hva et areal skal regnes som", "Retten til å avgjøre saken endelig når partene ikke blir enige", "Myndigheten til å fastsette hvor store uttak som er tillatt", "Adgangen til å bestemme hvem som får uttale seg i saken"],
      explanation: "Om et myrområde omtales som «uproduktivt areal» eller som «karbonlager og flomdemper», fører til to helt ulike saksbehandlinger. Definisjonen bestemmer hvilke hensyn som blir relevante — det er noe annet enn formell avgjørelsesmyndighet.",
    },
    {
      question: "Hvorfor er ressurssaker typisk flerskalaerte?",
      options: ["Fordi forekomsten er lokal, kontrollen nasjonal og prisen global", "Fordi flere forvaltningsnivåer må godkjenne det samme vedtaket", "Fordi ressurser som regel finnes i flere land på samme kontinent", "Fordi både lokale og nasjonale medier omtaler slike saker svært bredt"],
      explanation: "Nivåene gir ikke bare ulik detaljgrad, de gir ulike forklaringer og ulike ansvarlige. En nedleggelse forklares lokalt med kostnadsnivå, nasjonalt med rammebetingelser og globalt med prisutvikling.",
    },
    {
      question: "Når går en forklaring på et lands utvikling over i naturdeterminisme?",
      options: ["Når naturen får virke direkte, uten noe ledd imellom", "Når klimaet trekkes inn som en av flere forklaringsfaktorer", "Når naturressurser nevnes som en årsak til økonomisk vekst", "Når geografisk beliggenhet brukes til å forklare handelsmønstre"],
      explanation: "Å si at ressurser påvirker utviklingen er ikke determinisme; å si at de bestemmer den, er det. Forskjellen ligger i om institusjoner, eierskap, teknologi og politikk står mellom naturen og utfallet.",
    },
    {
      question: "Hvordan knytter ressursgeografien seg til global ulikhet?",
      options: ["Gjennom posisjon i kjeden, verdifangst og prissvingninger", "Gjennom at land i global sør har flere naturressurser enn andre land", "Gjennom at ressursrike land har høyere befolkningsvekst enn andre", "Gjennom at internasjonale avtaler favoriserer de største økonomiene"],
      explanation: "Å eksportere ubearbeidet råvare gir mindre verdi enn å foredle den, og der kapital og eierskap sitter utenfor regionen, blir verdiskapingen lokal og verdifangsten det ikke. Dette er en påstand om posisjoner som kan endres, ikke om egenskaper ved land.",
    },
  ],
  'sgo1001-5-3': [
    {
      question: "Hva er grønn omstilling?",
      options: ["Samfunnsendringen som skal til for å bli bærekraftig over tid", "Det samlede kuttet i klimagassutslipp et land har forpliktet seg til", "Overgangen fra fossil til fornybar energiproduksjon i kraftsektoren", "Summen av de tiltakene myndighetene setter i verk mot klimaendringer"],
      explanation: "Omstilling omfatter næringsstruktur, arbeidsmarked, forbruk, regelverk og infrastruktur, ikke bare energi eller utslippstall. Et land kan få bedre utslippsstatistikk ved å flytte produksjonen ut uten at noen omstilling har skjedd.",
    },
    {
      question: "Hva skiller omstilling fra tilpasning?",
      options: ["Omstilling endrer det som skaper utslippene, tilpasning følgene", "Omstilling gjelder næringslivet, mens tilpasning gjelder kommunene", "Omstilling er langsiktig, mens tilpasning er akutte tiltak i en krise", "Omstilling er teknologisk, mens tilpasning er planmessig og rettslig"],
      explanation: "De to har også ulik politisk logikk: tilpasningens gevinst er lokal og synlig, mens omstillingens gevinst er global, delt og framtidig — mens kostnaden er konsentrert og kommer nå. Det forklarer hvorfor de vedtas ulikt.",
    },
    {
      question: "Hva er en miljødiskurs?",
      options: ["En sammenhengende forståelse av hva problemet er og hva som løser det", "En politisk posisjon i spørsmålet om hvor strenge klimatiltakene bør være", "En faglig retning som studerer miljøproblemer med felles metoder", "En offentlig debatt om et konkret miljøspørsmål i en gitt periode"],
      explanation: "En diskurs er et rammeverk, ikke en mening: to personer som er uenige med hverandre, kan stå i samme diskurs. Poenget er at diskursen avgjør hvilke løsninger som i det hele tatt framstår som mulige.",
    },
    {
      question: "Hva er de to aksene i firfeltstabellen over miljødiskurser?",
      options: ["Hvor radikal endring som kreves, og hvor nyskapende tenkemåten er", "Hvor alvorlig problemet vurderes, og hvor raskt det må håndteres", "Hvor mye staten skal styre, og hvor mye markedet skal få avgjøre", "Hvor globalt problemet er, og hvor lokalt løsningene må gjennomføres"],
      explanation: "De to aksene er ikke samme sak: en diskurs kan kreve dramatisk endring og likevel tenke i vante baner, for eksempel ved å svare på økologiske grenser med sterk statlig styring. Å blande dem er den vanligste feillesningen.",
    },
    {
      question: "Hva kjennetegner den reformistiske problemløsningsdiskursen?",
      options: ["At problemet er feilprising og feilregulering innenfor dagens orden", "At problemet er at veksten må stanses før tåleevnen overskrides", "At problemet er selve forestillingen om naturen som et ressurslager", "At problemet er at miljøhensyn ikke er tatt inn i utviklingspolitikken"],
      explanation: "Løsningen ligger i avgifter, kvoter, standarder og teknologistøtte, mens vekst, forbruksnivå og markedsøkonomi ikke settes i spørsmål. Plasseringen er reformistisk og prosaisk.",
    },
    {
      question: "Hvorfor er «grenser og overlevelse» radikal, men prosaisk?",
      options: ["Den krever dramatisk endring, men bruker velkjente verktøy", "Den er radikal i målene, men reformistisk i tempoet den legger opp til", "Den er radikal i teorien, men har aldri fått praktisk gjennomslag", "Den er radikal om ressursbruk, men prosaisk om forurensning og utslipp"],
      explanation: "Diskursen svarer på økologiske grenser med tak, kvoter og forbud håndhevet av sterke myndigheter — altså industrisamfunnets vante verktøy brukt hardere. Nettopp derfor viser den at de to aksene ikke er én akse.",
    },
    {
      question: "Hva er bærekraftsdiskursens kjernepåstand?",
      options: ["At vekst og miljøhensyn kan forenes gjennom en annen form for utvikling", "At veksten må erstattes av et samfunn organisert rundt økologiske kretsløp", "At bærekraft først og fremst er et spørsmål om rettferdig fordeling", "At miljøproblemene løses når utviklingsnivået i verden er høyt nok"],
      explanation: "Diskursen avviser at miljø og økonomi står i motsetning, og setter innretningen på veksten i spørsmål — ikke veksten selv. Å ville erstatte veksten er grønn radikalisme, som er det motsatte hjørnet i stabellen.",
    },
    {
      question: "Hva kjennetegner grønn radikalisme?",
      options: ["At problemet er samfunnets grunnleggende forhold til naturen", "At problemet er at miljøtiltakene så langt har vært for lite ambisiøse", "At problemet er at myndighetene ikke håndhever regelverket strengt nok", "At problemet er mangel på teknologi som kan erstatte fossil energi"],
      explanation: "Diskursen setter vekstlogikken, eiendomsforhold og forbruksnivået i spørsmål, og plasserer løsningen like mye i bevegelser og endrede verdier som i stat og marked. Plasseringen er radikal og nyskapende.",
    },
    {
      question: "Hva er den beste testen på hvilken diskurs en påstand tilhører?",
      options: ["Hva påstanden mener problemet er", "Hvor sterke tiltak påstanden går inn for", "Om påstanden er positiv eller negativ til markedet", "Hvor mye endring påstanden krever på kort sikt"],
      explanation: "Diskursene skiller seg på problemforståelsen, ikke på tonen eller ambisjonsnivået. Å sortere på hvor radikale tiltakene høres ut, gir feil svar for eksempel på grenser og overlevelse, som er radikal i mål og konvensjonell i virkemiddel.",
    },
    {
      question: "Hva menes med de tre dimensjonene i bærekraftig utvikling?",
      options: ["Den økologiske, den økonomiske og den sosiale dimensjonen", "Den lokale, den nasjonale og den globale dimensjonen", "Den kortsiktige, den mellomlange og den langsiktige dimensjonen", "Den tekniske, den politiske og den kulturelle dimensjonen"],
      explanation: "De tre er ikke alltid forenlige, og begrepets brede oppslutning er derfor også dets svakhet. Når en aktør sier bærekraftig, er det verdt å spørre hvilken dimensjon som er lagt til grunn og hvilken som er vektet ned.",
    },
    {
      question: "Hva gjør en diskursanalyse som en meningsmåling ikke gjør?",
      options: ["Den viser hva som ikke blir diskutert, og hvorfor", "Den viser hvilken posisjon som har flest tilhengere i befolkningen", "Den viser hvilken av posisjonene som har best faglig belegg", "Den viser hvordan holdningene har endret seg over tid"],
      explanation: "Diskursanalysen gjør synlig hvilke spørsmål den rådende problemforståelsen ikke reiser, og hvorfor noen løsninger framstår som realistiske. Den rangerer derimot ikke posisjonene — å bruke den til å avfeie en motstander er å bruke verktøyet feil.",
    },
    {
      question: "Hva er et sosio-teknisk system?",
      options: ["Teknologi sammen med infrastruktur, regelverk, kompetanse og vaner", "Et teknisk anlegg som drives og vedlikeholdes av en organisasjon", "Et system der teknologien er tilpasset brukernes behov og ønsker", "Samspillet mellom offentlige og private aktører i en teknologisektor"],
      explanation: "Bilen er ikke bare en maskin: den forutsetter veinett, drivstoffdistribusjon, verksteder, førerkortordninger og byplaner. Derfor er en omstilling et systemskifte og ikke et teknologiskifte.",
    },
    {
      question: "Hva er en transisjon?",
      options: ["En grunnleggende overgang fra ett system til et annet", "En periode der to konkurrerende teknologier finnes side om side", "En gradvis forbedring av et eksisterende system over lang tid", "En politisk vedtatt plan for å fase ut en bestemt teknologi"],
      explanation: "Transisjoner tar tiår, går i rykk og er omstridte, fordi de som har investert i det gamle systemet, taper når det byttes ut. En forbedring innenfor det bestående er nettopp ikke en transisjon.",
    },
    {
      question: "Hva er en nisje i transisjonssammenheng?",
      options: ["Et skjermet rom der en ny løsning kan modnes uten full konkurranse", "En liten kundegruppe som er villig til å betale mer for ny teknologi", "En sektor der det etablerte systemet ennå ikke har fått fotfeste", "Et geografisk område der myndighetene tester ut nye ordninger"],
      explanation: "Nisjen gir den nye løsningen tid til å bli billigere og bedre. En transisjon krever både en moden nisje og et etablert system som er presset utenfra — ingen av delene alene er nok.",
    },
    {
      question: "Hva er stiavhengighet?",
      options: ["At tidligere valg gjør senere valg dyrere å ta i en annen retning", "At en teknologi bare kan utvikles i den rekkefølgen trinnene tillater", "At en region blir avhengig av den næringen som er størst der", "At politiske vedtak binder etterfølgende regjeringer i lang tid"],
      explanation: "Når systemet først er bygget ut, er investeringene gjort, kompetansen bygget og vanene innarbeidet. Det betyr ikke at endring er umulig, men at det nye må være bedre nok til å veie opp for alt som allerede er bygget for det gamle.",
    },
    {
      question: "Hva er forskjellen på stiavhengighet og innlåsing?",
      options: ["Stiavhengighet er en tendens, innlåsing er en tilstand", "Stiavhengighet gjelder teknologi, innlåsing gjelder institusjoner", "Stiavhengighet er økonomisk, mens innlåsing er politisk bestemt", "Stiavhengighet kan brytes av markedet, innlåsing bare av staten"],
      explanation: "Alle systemer er stiavhengige i noen grad. Et innlåst system er ett der de gjensidige avhengighetene mellom infrastruktur, kompetanse, regelverk og interesser i praksis blokkerer overgangen.",
    },
    {
      question: "Når blir teknologioptimisme en omstridt posisjon?",
      options: ["Når teknologi hevdes å være nok, ikke bare nødvendig", "Når den brukes om teknologi som ennå ikke er ferdig utviklet", "Når den kombineres med krav om offentlig støtte til utvikling", "Når den brukes av aktører som selv tjener på ny teknologi"],
      explanation: "At teknologi er nødvendig, er ukontroversielt. Kritikken gjelder når en løsning som ennå ikke finnes i stor skala, brukes som grunn til å utsette endringer som kunne skjedd nå.",
    },
    {
      question: "Hva skiller teknologisk fra strukturell endring?",
      options: ["Den ene endrer hvordan noe utføres, den andre selve mønsteret", "Den ene gjennomføres av bedrifter, den andre av offentlige myndigheter", "Den ene virker raskt, mens den andre virker over flere tiår", "Den ene krever investeringer, mens den andre krever nytt regelverk"],
      explanation: "Samme reise med annen motor er teknologisk endring; en byutvikling som gjør færre lange reiser nødvendige, er strukturell. Tempoforskjellen er en følge av skillet, ikke selve skillet.",
    },
    {
      question: "Hva er Giddens' poeng om strukturering?",
      options: ["At strukturen både muliggjør og begrenser, og reproduseres gjennom handling", "At strukturene i samfunnet er sterkere enn den enkeltes handlingsrom", "At sosiale strukturer endres når nok enkeltmennesker velger annerledes", "At strukturer og aktører må analyseres hver for seg i samfunnsforskning"],
      explanation: "Verken ren determinisme eller ren frihet. Å gjøre Giddens til determinist er å snu poenget hans: strukturen finnes ikke uavhengig av handlingene som opprettholder den.",
    },
    {
      question: "Hva kjennetegner fordelingen av vinnere og tapere i en omstilling?",
      options: ["Tapene er konsentrerte, gevinstene spredte og framtidige", "Tapene rammer i hovedsak eiere, mens gevinstene tilfaller arbeidstakere", "Tapene kommer først, mens gevinstene fordeles jevnt på alle senere", "Tapene og gevinstene er omtrent like store, men ulikt fordelt i tid"],
      explanation: "Asymmetrien gjør motstanden sterkere organisert enn støtten, uavhengig av hvor mange som er for. Fordelingen er dessuten romlig: tapene har adresse, gevinstene har det ikke.",
    },
    {
      question: "Hvorfor er rettferdig omstilling også et gjennomførbarhetskrav?",
      options: ["Fordi en omstilling med skjev byrde kan bli stoppet av motstand", "Fordi internasjonale avtaler stiller krav om sosial fordeling av byrdene", "Fordi omstillingen blir billigere når kostnadene fordeles på flere", "Fordi omskolering og næringsutvikling gir raskere teknologiutvikling"],
      explanation: "Legges kostnaden på de mest utsatte gruppene og stedene, leveres verken rettferdighet eller utslippskutt. Kravet er derfor ikke bare moralsk, men også praktisk.",
    },
    {
      question: "Hvorfor har omstillingen en geografi?",
      options: ["Fordi kostnaden faller på steder som er innlåst i den gamle næringen", "Fordi klimaendringene rammer ulike deler av landet forskjellig", "Fordi fornybar energi bare kan produseres i bestemte områder", "Fordi kommunene har ulik økonomi og dermed ulikt handlingsrom"],
      explanation: "Stedene som bærer kostnaden, er sjelden de samme som får gevinsten, og gevinsten har uansett ingen adresse. Ulik kommuneøkonomi og naturgitte forhold spiller inn, men forklarer ikke asymmetrien i fordelingen.",
    },
  ],
  'sgo1001-6-1': [
    {
      question: "Hva kjennetegner government som styringsform?",
      options: ["Styring gjennom et hierarki av offentlige organer, med vertikal linje", "Styring gjennom nettverk av offentlige, private og sivile aktører i forhandling", "Styring der myndigheten er delt mellom flere nivåer som ikke kan avgjøre alene", "Styring der flere sentre virker side om side uten at noe av dem er øverst"],
      explanation: "Government er hierarkiet: staten, fylket og kommunen, med myndighet gitt i lov. Nettverk av flere aktørtyper er governance, delt myndighet mellom nivåer er flernivåstyring, og flere sidestilte sentre er polysentrisk styring. De tre nære svarene beskriver hver sin andre styringsform.",
    },
    {
      question: "Hva er governance?",
      options: ["Styring gjennom nettverk av offentlige, private og sivile aktører", "Det engelske ordet for styring, brukt om offentlig myndighetsutøvelse", "Styring der staten har overtatt oppgaver fra private aktører i markedet", "Styring der kommunene har fått overført oppgaver fra statlig nivå"],
      explanation: "Kjernen er at flere typer aktører deltar, og at relasjonene er mer horisontale enn i hierarkiet. Å oversette governance med «styring» tømmer begrepet for det som gjør det faglig, og verken statlig overtakelse eller oppgaveoverføring til kommunene er det begrepet handler om.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom government og governance?",
      options: ["Government spør hvem som har myndigheten, governance hvem som avgjør utfallet", "Government gjelder staten sentralt, mens governance gjelder kommunene lokalt", "Government er et eldre uttrykk som governance i dag har erstattet fullstendig", "Government handler om lovgivning, mens governance handler om gjennomføring"],
      explanation: "Skillet går på formell kompetanse mot faktisk innflytelse i et nettverk. Begge finnes på alle forvaltningsnivåer, governance erstatter ikke government men kommer i tillegg, og begge former omfatter både utforming og gjennomføring.",
    },
    {
      question: "Hva er et styringsnettverk?",
      options: ["En varig kobling av gjensidig avhengige aktører på et politikkfelt", "Et formelt organ med egen myndighet, valgt ledelse og klageadgang", "Et enkelt prosjektsamarbeid mellom to parter om en avgrenset oppgave", "En samling offentlige etater som rapporterer til samme departement"],
      explanation: "Nettverket består over tid og former hva som vurderes som mulig, men det har verken egen myndighet eller en adresse å klage til. Nettopp fraværet av organstatus er det som gjør nettverksstyring til et demokratisk problem så vel som en praktisk løsning.",
    },
    {
      question: "Hva skiller ansvarliggjøring fra innsyn?",
      options: ["Innsyn gir tilgang til informasjon, ansvarliggjøring gir noen å stille til svars", "Innsyn gjelder private aktører, mens ansvarliggjøring gjelder offentlige organer", "Innsyn er lovfestet i Norge, mens ansvarliggjøring bare er en politisk ambisjon", "Innsyn skjer før vedtaket fattes, mens ansvarliggjøring skjer i etterkant av det"],
      explanation: "Du kan ha full tilgang til alle dokumenter i en sak og likevel ikke ha noen å holde ansvarlig, fordi ingen enkeltaktør bestemte utfallet alene. Skillet går på om det finnes en adressat for kritikken, ikke på hvem som omfattes eller på tidspunktet.",
    },
    {
      question: "Hva skiller legitimitet fra legalitet i styring?",
      options: ["Legalitet er at reglene er fulgt, legitimitet at styringen godtas som rettmessig", "Legalitet gjelder nasjonale vedtak, mens legitimitet gjelder internasjonale avtaler", "Legalitet handler om resultatet av styringen, legitimitet om selve prosessen", "Legalitet er et juridisk krav, mens legitimitet er et krav om bred deltakelse"],
      explanation: "Et vedtak kan være fullt lovlig og likevel oppleves som illegitimt, for eksempel fordi de som rammes hardest, aldri ble spurt. Legitimitet kan dessuten komme både fra prosessen og fra resultatet, så det er ikke bundet til bare det ene.",
    },
    {
      question: "Hvilke fire ting endret seg i overgangen fra government til governance?",
      options: ["Hvem som deltar, hvilke virkemidler som brukes, relasjonene og ansvarslinjen", "Statens størrelse, skattenivået, antall forvaltningsnivåer og valgordningen", "Lovgivningen, domstolenes rolle, mediebildet og partienes program", "Kommunenes antall, fylkenes grenser, statens inntekter og velgernes rettigheter"],
      explanation: "Skiftet handler om aktørene, virkemidlene, relasjonene og ansvarslinjen. De øvrige svarene lister forhold som kan ha endret seg i samme periode, men som ikke er det governance-begrepet beskriver — og skiftet er ikke i seg selv en påstand om at staten er blitt mindre.",
    },
    {
      question: "Hvilken gruppe styringsverktøy hører anbud og tilskudd til?",
      options: ["Penger", "Regler", "Informasjon", "Organisering"],
      explanation: "Både anbud og tilskudd virker gjennom betaling og økonomiske vilkår. Regler er påbud, forbud og konsesjoner, informasjon er kampanjer og merking, og organisering handler om hvem som skal eie og gjøre hva.",
    },
    {
      question: "Hva er flernivåstyring?",
      options: ["At myndighet på samme saksfelt er delt mellom flere skalanivåer samtidig", "At myndighet er flyttet nedover til det laveste nivået som kan løse oppgaven", "At flere land samordner politikken sin gjennom en felles internasjonal avtale", "At flere sektorer i samme forvaltning må godkjenne det samme vedtaket"],
      explanation: "Det avgjørende er at ingen av nivåene kan avgjøre saken alene, slik at samordningen blir en egen oppgave. Nedflytting av myndighet er desentralisering, mellomstatlig samordning er noe annet igjen, og sektorsamordning innenfor ett nivå er horisontal, ikke flernivå.",
    },
    {
      question: "Hvorfor er flernivåstyring ikke det samme som desentralisering?",
      options: ["Ved desentralisering blir myndigheten liggende nede, ved flernivåstyring delt", "Ved desentralisering deltar private aktører, ved flernivåstyring bare offentlige", "Desentralisering skjer i store land, mens flernivåstyring skjer i små land", "Desentralisering gjelder tjenester, mens flernivåstyring gjelder arealpolitikk"],
      explanation: "Desentralisering er en overføring der ett nivå overtar oppgaven. Flernivåstyring er at myndigheten utøves i samspill på tvers av nivåene samtidig, slik at samordningen aldri blir ferdig. Skillet handler verken om aktørtyper, landstørrelse eller saksfelt.",
    },
    {
      question: "Hva er vertikal samordning?",
      options: ["Avstemming mellom styringsnivåer som ligger over og under hverandre", "Avstemming mellom likestilte aktører som ikke kan instruere hverandre", "Avstemming mellom sektorer innenfor det samme forvaltningsnivået", "Avstemming mellom offentlige og private parter i et felles prosjekt"],
      explanation: "Vertikal samordning virker langs nivåaksen, med virkemidler som lovkrav, øremerkede tilskudd og innsigelsesadgang. Alle de tre andre beskrivelsene er horisontal samordning, altså avstemming på tvers mellom parter som ikke står over hverandre.",
    },
    {
      question: "Hva sier nærhetsprinsippet?",
      options: ["At en oppgave bør løses på det laveste nivået som kan løse den forsvarlig", "At beslutninger bør fattes der de fleste berørte innbyggerne faktisk bor", "At oppgaver alltid bør ligge hos kommunen, siden den er nærmest innbyggerne", "At nivåene i styringen bør ha så lik geografisk utstrekning som mulig"],
      explanation: "Forbeholdet «som kan løse den forsvarlig» er det som gjør prinsippet omstridt: begge sider i en konflikt kan påberope seg det, fordi de er uenige om hvor langt virkningene rekker. Prinsippet peker heller ikke automatisk på kommunen, og det er et normativt argument, ikke en beskrivelse.",
    },
    {
      question: "Hva er re-skalering?",
      options: ["At myndighet eller oppgaver flyttes mellom nivåer, eller at nivåene endres", "At en sak behandles på flere nivåer samtidig uten at noe nivå avgjør alene", "At kartets målestokk endres slik at et område framstilles mer detaljert", "At en aktør velger å fremme saken sin på det nivået der den vinner lettest"],
      explanation: "Re-skalering er at nivåene selv endres eller får nytt innhold, og det er Herods argument om sosialt konstruerte skalanivåer gjort konkret. Samspill mellom eksisterende nivåer er flernivåstyring, målestokk er den andre skalaforståelsen, og strategisk nivåvalg er skalapolitikk.",
    },
    {
      question: "Hva er skalapolitikk?",
      options: ["At aktører strategisk søker det nivået der de har best sjanse til å vinne", "At myndighetene fordeler oppgaver mellom nivåene etter faste kriterier", "At kommunene samordner politikken sin med nabokommunene sine", "At politiske partier organiserer seg på lokalt, regionalt og nasjonalt plan"],
      explanation: "Poenget er at valget av nivå er en del av konflikten, ikke en nøytral prosedyre. En lokal motstandsgruppe kan løfte saken oppover, og en utbygger kan hevde at hensynet er nasjonalt. Verken fordelingsregler, kommunesamarbeid eller partiorganisering fanger dette.",
    },
    {
      question: "Hva skiller overnasjonal styring fra mellomstatlig samarbeid?",
      options: ["I det overnasjonale er myndighet overført, i det mellomstatlige består vetoretten", "Det overnasjonale gjelder handel, mens det mellomstatlige gjelder sikkerhetspolitikk", "Det overnasjonale omfatter mange land, mens det mellomstatlige omfatter få land", "Det overnasjonale er bindende i traktat, mens det mellomstatlige bare er en hensikt"],
      explanation: "Skillet går på om felles organer kan vedta noe som gjelder direkte i medlemslandene. Antall land og saksfelt avgjør ingenting, og også mellomstatlige avtaler kan være folkerettslig bindende uten at myndighet er overført.",
    },
    {
      question: "Hva beskriver polysentrisk styring?",
      options: ["At flere sentre styrer samme felt uten at noe av dem er overordnet", "At mange og motstridende interesser slipper til i utformingen av politikken", "At berørte innbyggere trekkes inn før beslutningen er endelig fattet", "At styringen skjer gjennom nettverk med private og sivile aktører"],
      explanation: "Polysentrisk styring beskriver strukturen: hvor mange sentre som finnes, og at ingen står øverst. Antall interesser er pluralistisk styring, innbyggermedvirkning er deltagende styresett, og aktørtypene er det governance beskriver. Et polysentrisk system kan bestå bare av offentlige organer.",
    },
    {
      question: "Hva er kjernen i deltagende styresett?",
      options: ["At de berørtes innspill kan endre utfallet før vedtaket fattes", "At de berørte får god informasjon om hva som skal skje i saken", "At flest mulig organisasjoner er representert i høringsrunden", "At beslutningen legges til det nivået som ligger nærmest innbyggerne"],
      explanation: "Skillet mellom deltakelse og informasjon går ved om innspillene kan flytte noe. Å bli fortalt hva som skal skje, er ikke deltakelse, bredde i høringen sier ingenting om innflytelse, og nivåvalg er nærhetsprinsippet.",
    },
    {
      question: "Hva er styringssvikt?",
      options: ["At myndighet og interesse av å handle er fordelt på ulike aktører", "At de ansvarlige aktørene gjør faglige feil i utformingen av politikken", "At myndighetene mangler penger til å gjennomføre et vedtatt tiltak", "At vedtak blir omgjort fordi saksbehandlingsreglene ikke ble fulgt"],
      explanation: "Styringssvikt er en systemegenskap som ville oppstått også med dyktige og velmenende aktører — utfallet følger av hvordan myndighet og ansvar er fordelt. Feil, pengemangel og saksbehandlingsfeil er andre problemer og forutsetter at noen har gjort noe galt.",
    },
    {
      question: "Hva kjennetegner forhandlingskanalen sammenlignet med valgkanalen?",
      options: ["Den virker presist på enkeltsaker, men er åpen bare for de organiserte", "Den virker sjelden og grovt, men er åpen for alle med stemmerett", "Den er uformell og udokumentert, i motsetning til den formelle valgkanalen", "Den brukes av forvaltningen, mens valgkanalen brukes av de folkevalgte"],
      explanation: "Forhandlingskanalen går gjennom organiserte interesser og virker ofte og målrettet, men den forutsetter organisering. Valgkanalen er den som er åpen for alle og virker grovt, og forhandlingskanalen er i stor grad formalisert gjennom høringer og faste konsultasjonsordninger.",
    },
    {
      question: "Hva er statlig eierskap som styringsverktøy?",
      options: ["At staten påvirker ett selskap innenfra gjennom eierrollen sin", "At staten setter rammer som gjelder likt for alle aktører i markedet", "At staten kjøper varer og tjenester og stiller krav gjennom innkjøpene", "At staten gir konsesjon til virksomhet på nærmere fastsatte vilkår"],
      explanation: "Eierskapet virker innenfra, gjennom generalforsamling, styresammensetning og uttrykte forventninger, og gjelder bare det selskapet staten eier i. Rammer som gjelder alle er regulering, innkjøp er kunderollen, og konsesjon er et reguleringsverktøy.",
    },
    {
      question: "Hva er de tre rollene staten opptrer i samtidig i økonomien?",
      options: ["Regulator, eier og kunde", "Lovgiver, domstol og forvaltning", "Skattlegger, långiver og garantist", "Planlegger, utbygger og kontrollør"],
      explanation: "Rollene har ulike virkemidler og ulike grenser: reguleringen gjelder alle men er treg, eierskapet er raskt men gjelder ett selskap, og innkjøpene virker gjennom kravene staten stiller. De øvrige svarene blander sammen statsmaktene eller lister funksjoner som ikke er dette skillet.",
    },
    {
      question: "Hva er hovedforskjellen mellom eierskap og regulering som virkemidler?",
      options: ["Eierskap virker innenfra på ett selskap, regulering utenfra på alle", "Eierskap er et raskt virkemiddel, mens regulering krever lang saksbehandling", "Eierskap gjelder statlige selskaper, mens regulering gjelder private selskaper", "Eierskap gir økonomisk avkastning, mens regulering gir samfunnsmessig nytte"],
      explanation: "Rekkevidden er det som skiller: den ene treffer én aktør, den andre hele markedet. At eierskapet er raskere, følger av dette, men er ikke selve skillet — og reguleringen gjelder selvsagt også selskaper staten eier i.",
    },
    {
      question: "Hvorfor reiser statlig eierskap et spørsmål om rollekonflikt?",
      options: ["Fordi den som setter reglene, også har økonomisk interesse i én aktør", "Fordi staten ikke har lov til å drive kommersiell virksomhet i et fritt marked", "Fordi selskapene staten eier, får bedre vilkår enn konkurrentene sine får", "Fordi eierskapet gjør at staten mister muligheten til å regulere bransjen"],
      explanation: "Et skjerpet krav som svekker selskapets lønnsomhet, treffer statens egen inntektsside. Det er selve konflikten. Staten har full adgang til å eie, eierskapet fjerner ikke reguleringsmyndigheten, og at eierskapet i seg selv gir bedre vilkår, er en annen påstand som må belegges særskilt.",
    },
    {
      question: "Hva er statens plass i nettverksperspektivet på økonomisk geografi?",
      options: ["Staten er en aktør i nettverket, ikke bare en ramme rundt det", "Staten er en ytre ramme som setter vilkårene bedriftene handler innenfor", "Staten er den sterkeste aktøren i alle globale produksjonsnettverk", "Staten er uten betydning fordi nettverkene krysser landegrensene"],
      explanation: "Nettverksperspektivet tar med stat, arbeidskraft og sivilsamfunn, og staten forhandler vilkår, eier selskaper og skattlegger avkastning. Å behandle staten som en ytre ramme er verdikjedeperspektivets tilnærming, og styrken avhenger av hva staten faktisk kontrollerer.",
    },
    {
      question: "Hva skiller territorium fra sted i TPSN-rammeverket?",
      options: ["Territorium er avgrensning og kontroll, sted er mening og tilhørighet", "Territorium gjelder stater, mens sted gjelder kommuner og lokalsamfunn", "Territorium er et fysisk område, mens sted er en subjektiv opplevelse alene", "Territorium er en juridisk kategori, mens sted er en statistisk kategori"],
      explanation: "TPSN står for territorium, sted, skala og nettverk, og tilskrives Jessop, Jones og Brenner. Territorium handler om hvem som kontrollerer innenfor en grense, mens sted rommer både objektiv posisjon, materielle rammer og stedsfølelse — det er altså mer enn ren opplevelse.",
    },
    {
      question: "En kandidat skriver: «Flernivåstyring betyr at oppgavene er flyttet ned til kommunene, slik at de bestemmer mest mulig selv.» Hvilken feil er dette?",
      options: ["Flat definisjon som ikke treffer pensumbruken — begrepet er byttet ut", "Definisjon uten eksempel — påstanden mangler et konkret tilfelle å hvile på", "Ensidig komparasjon — bare det ene av to begreper er faktisk behandlet", "Manglende kobling til kjernebegrepene rom, sted og skala i besvarelsen"],
      explanation: "Setningen beskriver desentralisering og mister at myndigheten i flernivåstyring er delt samtidig mellom nivåene. Det er begrepsinnholdet som er galt, ikke først og fremst at eksempelet mangler — og setningen er verken en sammenligning eller et sted der kjernebegrepene er utelatt.",
    },
  ],
  'sgo1001-6-2': [
    {
      question: "Hva er politisk aktørskap?",
      options: ["Evnen til å handle politisk og påvirke forhold som angår en selv og andre", "Den innflytelsen en person eller gruppe faktisk oppnår over politiske vedtak", "Retten til å stemme ved valg og til å stille til valg i folkevalgte organer", "Den formelle plassen en organisasjon har i myndighetenes faste konsultasjoner"],
      explanation: "Aktørskap er en evne under betingelser, ikke et resultat. Du kan utøve aktørskap uten å oppnå noe, og innflytelse kan finnes uten handling. Stemmerett er én av rettighetene aktørskapet kan bygge på, og fast plass i konsultasjoner er noe annet igjen.",
    },
    {
      question: "Hva sier Giddens' begrep om strukturering?",
      options: ["Struktur både muliggjør og begrenser handling, og reproduseres gjennom den", "Strukturene bestemmer i siste instans hva mennesker faktisk kommer til å gjøre", "Mennesker velger fritt, og strukturene er bare en bakgrunn for valgene deres", "Strukturer på makronivå kan bare studeres uavhengig av enkeltmenneskers valg"],
      explanation: "Struktureringsbegrepet er laget for å komme forbi begge ytterpunktene: verken determinisme eller ren frihet. Å skrive at strukturene styrer oss, er en dokumentert feiltilskrivning, og skillet gjelder heller ikke hvor stort utsnittet man studerer er.",
    },
    {
      question: "Hva er forskjellen på determinisme og voluntarisme?",
      options: ["Determinismen legger vekten på strukturen, voluntarismen på aktørens vilje", "Determinismen studerer store utsnitt, mens voluntarismen studerer enkeltpersoner", "Determinismen gjelder økonomiske forhold, voluntarismen kulturelle forhold", "Determinismen er en eldre posisjon, mens voluntarismen er dagens forståelse"],
      explanation: "Skillet gjelder hva du tillegger forklaringskraft. Det er ikke det samme som skillet mellom makro og mikro: du kan studere et helt samfunn uten å være determinist. Begge posisjonene finnes fortsatt, og strukturering er forsøket på å komme forbi dem.",
    },
    {
      question: "Hva skiller kollektivt aktørskap fra mange individers like handlinger?",
      options: ["Gruppen kan opptre som én part og forhandle over tid", "Gruppen består av flere personer enn det som er vanlig ellers", "Gruppen har alltid en formell organisasjon med vedtekter og styre", "Gruppen handler utenfor de kanalene myndighetene har opprettet"],
      explanation: "Det avgjørende er formen, ikke antallet: tusen enkeltbrev kan besvares med standardsvar, mens én organisert uttalelse med talsperson gir en motpart. Kollektivt aktørskap krever verken vedtekter eller at handlingen foregår utenfor de faste kanalene.",
    },
    {
      question: "Hva er politiske mulighetsstrukturer?",
      options: ["Trekk ved systemet som gjør påvirkning lettere eller vanskeligere", "Ressursene og organiseringen en bevegelse rår over i sitt påvirkningsarbeid", "De formelle rettighetene innbyggerne har til å delta i beslutningsprosesser", "De kanalene myndighetene har opprettet for medvirkning i planlegging"],
      explanation: "Begrepet beskriver systemet: hvor åpne prosessene er, om det finnes allierte innenfor, og hvor stabile skillelinjene er. Bevegelsens egne ressurser er noe annet, og et godt svar skiller mellom «de var dyktige» og «rommet var åpent».",
    },
    {
      question: "Hva kjennetegner en sosial bevegelse?",
      options: ["Et vedvarende kollektivt forsøk på endring, løsere organisert enn et parti", "En organisasjon som representerer en avgrenset medlemsmasse i faste ordninger", "Et politisk parti som søker verv gjennom deltakelse i offentlige valg", "En enkeltstående aksjon rettet mot et bestemt vedtak i en konkret sak"],
      explanation: "Bevegelsen er fastere enn en enkeltaksjon og løsere enn et parti, og den mobiliserer bredt rundt en sak uten fast plass i systemet. Interesseorganisasjonen og partiet er de to nabokategoriene den nettopp skiller seg fra.",
    },
    {
      question: "Hva menes med at medborgerskap er flerdimensjonalt?",
      options: ["Det omfatter medlemskap, rettigheter og deltagelse, som kan skille lag", "Det gjelder samtidig i kommunen, i fylket, i staten og i overnasjonale organer", "Det omfatter både sivile, politiske og sosiale rettigheter for den enkelte", "Det kan tildeles gjennom fødsel, gjennom avstamning eller gjennom botid"],
      explanation: "De tre dimensjonene er medlemskap, rettigheter og deltagelse, og de kan skille lag hos samme person. At medborgerskapet også er flerskalært, og at rettighetene selv er tredelt, er riktige poenger, men ingen av dem er det flerdimensjonaliteten viser til.",
    },
    {
      question: "Hva er hovedforskjellen på medborgerskap og statsborgerskap?",
      options: ["Statsborgerskap er en binær juridisk status, medborgerskap er gradert", "Statsborgerskap gjelder nasjonalt nivå, mens medborgerskap gjelder lokalt nivå", "Statsborgerskap gir rettigheter, mens medborgerskap gir plikter overfor staten", "Statsborgerskap er et nyere begrep som har erstattet det eldre medborgerskapet"],
      explanation: "Den ene statusen har du eller har du ikke; den andre har du mer eller mindre av. Medborgerskapet er dessuten flerskalært og ikke bundet til det lokale, det handler om rettigheter så vel som deltakelse, og de to begrepene beskriver ulike ting og avløser ikke hverandre.",
    },
    {
      question: "Hvilken av medborgerskapets tre dimensjoner er den mest ujevnt fordelte?",
      options: ["Deltagelse", "Medlemskap", "Rettigheter", "Statsborgerskap"],
      explanation: "Den faktiske utøvelsen følger systematiske mønstre etter utdanning, inntekt, alder, botid og bosted. Medlemskap og rettigheter er statusdimensjoner som varierer mindre innenfor samme land, og statsborgerskap er ikke en av de tre dimensjonene.",
    },
    {
      question: "Hva skiller medborgerskap som status fra medborgerskap som praksis?",
      options: ["Status er hva du har krav på, praksis er hva du faktisk gjør", "Status gjelder de juridiske rettighetene, praksis den opplevde tilhørigheten", "Status er noe staten tildeler, praksis er noe kommunen legger til rette for", "Status gjelder voksne innbyggere, mens praksis også omfatter barn og unge"],
      explanation: "Statusdelen rommer medlemskapet og rettighetene, praksisdelen deltakelsen. De to kan utvikle seg i hver sin retning, for eksempel når en gruppe får formell representasjon uten å få saker som betyr noe. Skillet gjelder verken forvaltningsnivå eller alder.",
    },
    {
      question: "Hva menes med at medborgerskapet er flerskalært?",
      options: ["Tilhørighet, rettigheter og deltakelse kan variere fra nivå til nivå", "Myndighet på samme saksfelt er delt mellom flere forvaltningsnivåer", "Medborgerskapet er sterkere i store byer enn i mindre lokalsamfunn", "Rettigheter sikres nasjonalt, mens deltakelse alltid foregår lokalt"],
      explanation: "En person kan ha reell deltakelse lokalt og ingen nasjonalt, eller rettigheter sikret overnasjonalt og svakt gjennomført lokalt. Delt myndighet mellom nivåer er flernivåstyring, som er et begrep om styringen og ikke om den enkeltes tilhørighet.",
    },
    {
      question: "Hva er identitetspolitikk?",
      options: ["Mobilisering ut fra gruppeidentitet, med krav om anerkjennelse", "Mobilisering ut fra økonomiske interesser, med krav om fordeling av goder", "Mobilisering som setter det brede folket opp mot en elite som styrer landet", "Mobilisering som skjer utenfor de kanalene myndighetene har opprettet selv"],
      explanation: "Kravene gjelder like mye anerkjennelse som fordeling, og fenomenet skjærer ofte på tvers av venstre og høyre. Fordelingskrav er interessepolitikk, folk mot elite er populismens form, og deltakelse utenfor de faste kanalene er oppfunne rom.",
    },
    {
      question: "Hva kjennetegner den brede forståelsen av identitetspolitikk?",
      options: ["At identitet er en dimensjon ved nesten all politisk mobilisering", "At uttrykket brukes om bestemte gruppers krav om anerkjennelse", "At identitetskrav settes opp mot krav som gjelder klasse og økonomi", "At begrepet først og fremst brukes om motpartens mobilisering"],
      explanation: "Den brede forståelsen er beskrivende og ikke-partisk: all mobilisering trekker på forestillinger om hvem «vi» er. De øvrige beskrivelsene hører til den snevre forståelsen, som er avgrensende og oftere vurderende.",
    },
    {
      question: "Hva skiller identitetspolitikk fra interessepolitikk?",
      options: ["Anerkjennelse lar seg vanskeligere dele i to enn materielle goder", "Identitetspolitikk føres av minoriteter, interessepolitikk av majoriteten", "Identitetspolitikk er et nyere fenomen enn den klassiske interessepolitikken", "Identitetspolitikk foregår i mediene, mens interessepolitikk foregår i forhandlinger"],
      explanation: "En strid om penger kan ende på midten; en strid om hvem som hører til, gjør det sjeldnere. Det er derfor konflikter ofte fortsetter etter at kompensasjonen er utbetalt. De øvrige svarene knytter begrepene til bestemte grupper, tidsepoker eller arenaer, og ingen av delene holder.",
    },
    {
      question: "Hva er politisk mobilisering?",
      options: ["Overgangen fra å ha noe felles til å handle sammen politisk", "At en gruppe opplever misnøye med hvordan et forhold er ordnet", "At en bevegelse får varig organisasjon med medlemmer og ledelse", "At myndighetene oppretter en arena der berørte kan si sin mening"],
      explanation: "Misnøye finnes ofte lenge uten å bli til handling; mobiliseringen er selve overgangen, og den forutsetter ressurser og en åpning i systemet. Varig organisasjon er én form prosessen kan ta, og en arena opprettet av myndighetene er et invitert rom.",
    },
    {
      question: "Hvordan behandles populisme som begrep i samfunnsvitenskapen?",
      options: ["Som en analytisk kategori om en form som setter folket opp mot eliten", "Som en betegnelse på politiske retninger som mangler faglig grunnlag", "Som et annet ord for identitetspolitikk i den snevre forståelsen av det", "Som en beskrivelse av mobilisering blant grupper med lav utdanning"],
      explanation: "Populisme er en stil og argumentasjonsform som finnes på tvers av det politiske landskapet, ikke et skjellsord. Den er heller ikke det samme som identitetspolitikk: den mobiliserer rundt motsetningen folk og elite, med eller uten en gruppeidentitet i sentrum.",
    },
    {
      question: "Hva er inviterte rom hos Miraftab?",
      options: ["Deltakelsesarenaer myndighetene selv oppretter og inviterer til", "Deltakelsesformer som holder seg innenfor det loven tillater", "Arenaer der berørte grupper selv setter dagsordenen for møtet", "Kanaler der organiserte interesser møter forvaltningen jevnlig"],
      explanation: "Høringer, brukerråd og medvirkningsmøter er inviterte rom fordi den som inviterer, setter rammene og dagsordenen. Skillet mot oppfunne rom går på hvem som setter rammene, ikke på lovlighet — og oppfunne rom kan være helt lovlige.",
    },
    {
      question: "Hva er oppfunne rom hos Miraftab?",
      options: ["Arenaer folk skaper selv, uten invitasjon fra myndighetene", "Deltakelsesformer som bryter med gjeldende regler og tillatelser", "Uformelle møter mellom forvaltningen og organiserte interesser", "Arenaer som oppstår når et invitert rom utvides med flere deltakere"],
      explanation: "Fordi deltakerne selv setter rammene, kan disse rommene ta opp spørsmål som ikke står på noen offentlig dagsorden. En beboergruppe som starter sitt eget forum og inviterer politikerne dit, har oppfunnet et rom helt uten konflikt eller regelbrudd.",
    },
    {
      question: "Hvorfor er det galt å lese Miraftabs skille som et skille mellom lovlig og ulovlig?",
      options: ["Fordi skillet gjelder hvem som setter rammene for arenaen", "Fordi begge romtypene forutsetter tillatelse fra myndighetene først", "Fordi lovligheten varierer mellom land og derfor ikke kan sammenlignes", "Fordi begrepene beskriver holdninger og ikke handlinger i praksis"],
      explanation: "Et oppfunnet rom kan være helt lovlig, og et invitert rom kan være tomt for reell innflytelse. Feillesningen gjør skillet til en vurdering av deltakerne i stedet for en analyse av hvem som kontrollerer dagsordenen.",
    },
    {
      question: "Hva tilfører oppfunne rom som inviterte rom ikke gir?",
      options: ["Muligheten til å bestride hvordan problemet er definert", "Garantert tilgang til dem som skal fatte den endelige beslutningen", "En forpliktelse for myndighetene til å svare innen en gitt frist", "En formell rett til innsyn i saksdokumentene i den aktuelle saken"],
      explanation: "I det inviterte rommet kan du diskutere løsningen på et problem noen andre har definert; i det oppfunne kan du bestride selve definisjonen. Tilgang, svarplikt og innsyn er derimot nettopp det de inviterte rommene gir og de oppfunne ikke garanterer.",
    },
    {
      question: "Hva menes med deltakelsens romlighet?",
      options: ["At hvor og når deltakelsen foregår, avgjør hvem som praktisk kan komme", "At deltakelsen fordeler seg ulikt mellom skalanivåene i forvaltningen", "At politiske spørsmål ser forskjellige ut avhengig av hvilket nivå de behandles på", "At deltakelse alltid krever et fysisk møtelokale med en bestemt beliggenhet"],
      explanation: "Møtetidspunkt, beliggenhet og krav til transport, utstyr og språk er romlige forutsetninger som fordeler deltakelsen skjevt. Nivåspørsmål er skala, og romligheten gjelder også digitale kanaler — det trengs ikke noe fysisk lokale for at den skal virke.",
    },
    {
      question: "Hvorfor er lav deltakelse i inviterte rom ikke det samme som lavt aktørskap?",
      options: ["Fordi handlingen kan foregå i rom gruppen har laget selv", "Fordi deltakelse i inviterte rom sjelden påvirker det endelige vedtaket", "Fordi marginaliserte grupper mangler de rettighetene deltakelsen forutsetter", "Fordi myndighetene ofte unnlater å registrere hvem som faktisk møter opp"],
      explanation: "Å måle deltakelse bare i de rommene noen andre har satt opp, overser de oppfunne rommene. Marginaliserte grupper er aktører under sterke strukturelle begrensninger, ikke passive — og de har som regel rettighetene formelt i behold.",
    },
    {
      question: "Hvilket case belegger skillet mellom medborgerskap og statsborgerskap best?",
      options: ["Stemmerett ved lokalvalg etter botid uten norsk statsborgerskap", "Klimabevegelsens skolestreiker og kampanjer fra slutten av 2010-tallet", "Mobilisering mot nedlegging av en offentlig institusjon i et lokalsamfunn", "Et kommunalt ungdomsråd med uttalerett i saker som angår unge"],
      explanation: "Her er den juridiske statusen fraværende mens en del av det politiske medborgerskapet er reelt, og caset viser dessuten at medborgerskapet er flerskalært. Klimabevegelsen belegger kollektivt aktørskap, sentraliseringsstriden identitetspolitikk, og ungdomsrådet inviterte rom.",
    },
    {
      question: "En kandidat skriver: «Medborgerskap betyr at man er borger av en stat.» Hvilken feil er dette?",
      options: ["Flat definisjon som ikke treffer pensumbruken", "Definisjon uten eksempel — påstanden mangler et konkret tilfelle", "Manglende kobling til kjernebegrepene rom, sted og skala i svaret", "Rent referat uten drøfting — påstanden blir aldri prøvd mot noe"],
      explanation: "Setningen gir medborgerskap innholdet til statsborgerskap, og dermed forsvinner at begrepet er gradert og består av medlemskap, rettigheter og deltagelse. Det er begrepsinnholdet som er galt, ikke først og fremst at eksempel, kjernebegrepsløft eller drøfting mangler.",
    },
  ],
  'sgo1001-7-1': [
    {
      question: "Hva er mobilitet slik Cresswell bruker begrepet?",
      options: ["Bevegelse forstått som erfart og meningsbærende praksis", "Den samlede forflytningen av mennesker mellom to steder", "Evnen et samfunn har til å frakte varer og folk effektivt", "Andelen av befolkningen som flytter i løpet av et gitt år"],
      explanation: "Mobilitet holder tre ting sammen: den fysiske bevegelsen, meningen som legges i den, og maktforholdene som gjør den mulig. Å definere begrepet som ren forflytning er den vanligste feilen i stoffet, og et mål på flyttestrømmer er en beskrivelse av bevegelse, ikke av mobilitet.",
    },
    {
      question: "Hva skiller bevegelse fra mobilitet?",
      options: ["Bevegelse er ren forflytning; mobilitet tar med mening og vilkår", "Bevegelse gjelder over korte avstander, mobilitet over lange", "Bevegelse gjelder mennesker, mens mobilitet gjelder varer og kapital", "Bevegelse er frivillig, mens mobilitet også omfatter tvungen flytting"],
      explanation: "To identiske forflytninger kan være helt ulike mobiliteter, fordi vilkårene og meningen skiller seg. Skillet går verken på avstand, på hva som beveger seg, eller på om bevegelsen er frivillig.",
    },
    {
      question: "Hva er mobilitetsparadigmet hos Sheller og Urry?",
      options: ["Å gjøre bevegelse til utgangspunktet for samfunnsanalysen", "Påstanden om at befolkningen i verden er blitt langt mer mobil", "En metode for å måle strømmer av mennesker mellom regioner", "Læren om at transportsystemer former hvordan byer vokser fram"],
      explanation: "Innfallsvinkelen ser samfunn gjennom strømmer framfor som beholdere, og en av gevinstene er at den gjør immobiliteten synlig. Det er et analytisk grep, ikke en empirisk påstand om økt reising og ikke en måleteknikk.",
    },
    {
      question: "Hva menes med at mobilitet er ujevnt fordelt?",
      options: ["At retten til å bevege seg følger et mønster av juss og økonomi", "At noen deler av verden har bedre utbygde og billigere transportsystemer", "At folk i ulike livsfaser har ulikt behov for å flytte på seg", "At bevegelse mellom land varierer mye fra år til år over tid"],
      explanation: "Fordelingen er skapt av statsborgerskap, papirer, penger og forpliktelser, ikke av ulik reiselyst eller tilfeldig variasjon. Retten til bevegelse er en ressurs som fordeles som andre ressurser, og den er i stor grad tildelt ved fødsel.",
    },
    {
      question: "Hva er poenget med immobilitetsbegrepet?",
      options: ["At det å måtte bli i ro ofte er produsert av andres mobilitet", "At noen mennesker verdsetter stedet sitt og derfor blir boende", "At transportsystemer i noen regioner er for dårlig utbygd", "At migrasjon alltid er en kostbar og risikofylt beslutning"],
      explanation: "Immobilitet er et eget analytisk poeng og ikke en restkategori: noen kan reise lett fordi andre står i produksjonen eller i omsorgen. Å ville bli er dessuten noe annet enn å måtte bli, og stedstilknytning må holdes fra immobilitet.",
    },
    {
      question: "Hva er vilkårene for bevegelse?",
      options: ["Regler, dokumenter, priser og kontroller som styrer hvem som slipper gjennom", "De fysiske hindringene som gjør en reise lang eller kostbar å gjennomføre", "De personlige egenskapene som gjør noen mer villige til å flytte enn andre", "De økonomiske konjunkturene som avgjør om det finnes arbeid å reise til"],
      explanation: "Vilkårene former ikke bare om bevegelsen skjer, men hva den betyr: en tillatelse knyttet til én arbeidsgiver endrer forholdet mellom arbeidstaker og arbeidsgiver. Fysisk avstand og konjunkturer virker inn, men det er reglene og papirene begrepet peker på.",
    },
    {
      question: "Hvorfor regnes rekrutteringsbyråer som del av mobilitetens infrastruktur?",
      options: ["De organiserer og tar betalt for forbindelsen mellom to arbeidsmarkeder", "De er pålagt av myndighetene å kontrollere at papirene er i orden", "De sørger for at reisen skjer på en trygg og forsvarlig måte", "De skaffer arbeidstakeren informasjon om lønn og arbeidsvilkår på stedet"],
      explanation: "Infrastruktur er ikke bare fysiske anlegg: de organisatoriske leddene som formidler, finansierer og tar betalt for bevegelsen, former like mye hvilke forbindelser som blir lette og hvilke som blir tunge. Kontroll og informasjon kan forekomme, men er ikke det som gjør byrået til infrastruktur.",
    },
    {
      question: "Hva ser vi når vi legger relasjonelt rom på en migrasjonssituasjon?",
      options: ["At migranten er et bånd som gjør to steder til deler av hverandre", "At avstanden mellom stedene måles i reisetid og kostnad, ikke kilometer", "At de to stedene har hver sin faste posisjon i et koordinatsystem", "At bevegelsen mellom stedene lar seg beskrive som en strøm i et kart"],
      explanation: "Relasjonelt rom er at et sted er summen av sine forbindelser, og det er denne forståelsen som gjør migrasjon til et stedsspørsmål. Reisetid og kostnad hører til relativt rom, mens faste posisjoner hører til absolutt rom.",
    },
    {
      question: "Hva skiller migrasjon fra mobilitet som begrep?",
      options: ["Migrasjon navngir en type bevegelse; mobilitet er et perspektiv på all bevegelse", "Migrasjon gjelder over landegrenser, mens mobilitet gjelder innenlands flytting", "Migrasjon er varig flytting, mens mobilitet alltid er midlertidig bevegelse", "Migrasjon studeres kvantitativt, mens mobilitet studeres kvalitativt i faget"],
      explanation: "Mobilitetsperspektivet omfatter migrasjonen, men ikke omvendt — det gjelder like mye pendling, turisme, varetransport og kapitalflyt. Migrasjon kan være innenlands, og begge kan studeres med alle slags metoder.",
    },
    {
      question: "Hva er transnasjonalisme?",
      options: ["Vedvarende bånd og praksiser som gjør at migranter deltar i to samfunn", "Følelsen av savn og tilhørighet til hjemlandet etter at man har flyttet", "Det å ha statsborgerskap i to land og dermed rettigheter begge steder", "Spredningen av kulturelle uttrykk mellom land som følge av migrasjon"],
      explanation: "De tre kravene er at båndene er vedvarende, at de består av praksiser som faktisk gjøres, og at de går begge veier. Savn er en følelse og dobbelt statsborgerskap en juridisk status — ingen av dem er i seg selv transnasjonalisme.",
    },
    {
      question: "Hva er en transnasjonal praksis?",
      options: ["Pengeoverføringer, omsorg på avstand og deltakelse i foreninger hjemme", "Å beherske språket og kulturelle koder i landet man har flyttet til", "At et selskap driver virksomhet i flere land gjennom egne datterselskaper", "At et land inngår avtaler med andre land om arbeidsinnvandring"],
      explanation: "Praksisene er de konkrete handlingene båndene består av — økonomiske, familiære og politisk-kulturelle. Selskapsstrukturer og mellomstatlige avtaler er noe annet, og språkbeherskelse hører til deltakelsen i bosettingslandet.",
    },
    {
      question: "Hva kjennetegner et transnasjonalt sosialt felt?",
      options: ["Det omfatter også dem som aldri har flyttet, gjennom relasjonene", "Det består av alle migranter fra samme land som bor i samme by", "Det oppstår først når migrantene har fått opphold i det nye landet", "Det er et geografisk område som strekker seg over to landegrenser"],
      explanation: "Feltet er et sett av relasjoner, ikke en gruppe mennesker og ikke et territorium. Naboen som får arbeid fordi pengene kom, lever i feltet uten selv å ha vært mobil, og feltet forutsetter ingen bestemt oppholdsstatus.",
    },
    {
      question: "Hva er det viktigste kjennetegnet ved pengeoverføringer fra arbeidsmigranter?",
      options: ["De går direkte til husholdninger og holder seg stabile i kriser", "De kanaliseres gjennom myndighetene og inngår i offentlige budsjetter", "De investeres først og fremst i næringsvirksomhet i hjemlandet", "De erstatter over tid behovet for lokale arbeidsplasser i regionen"],
      explanation: "Overføringene er en familieforpliktelse i pengeform, og de pleier å holde seg oppe eller øke når hjemlandet rammes av krise. De går utenom offentlige budsjetter, og de brukes typisk først til forbruk, bolig og skolegang.",
    },
    {
      question: "Hva er en viktig fordelingsvirkning av pengeoverføringer?",
      options: ["De skiller husholdninger med noen ute fra dem som ikke har noen", "De fører til at inntektsforskjellene i lokalsamfunnet blir utjevnet", "De reduserer behovet for offentlige tjenester i mottakerregionen", "De gjør at mottakerlandets valuta blir mindre utsatt for svingninger"],
      explanation: "Overføringene løfter og sorterer samtidig: de gir tydelig velferdsforbedring i husholdningene som mottar dem, og en like tydelig forskjell mot dem som ikke har noen ute. Et godt svar sier begge deler.",
    },
    {
      question: "Hva er skillet mellom transnasjonalisme og assimileringstankegangen?",
      options: ["Assimilering venter at bånd bakover forsvinner; transnasjonalisme at de består", "Assimilering gjelder arbeidsmigranter, mens transnasjonalisme gjelder flyktninger", "Assimilering handler om språk, mens transnasjonalisme handler om økonomi", "Assimilering er et politisk mål, mens transnasjonalisme er en beskrivelse"],
      explanation: "Enveismodellen forutsetter at tilknytningen bakover er en overgangsfase, mens transnasjonalismen viser at sterke bånd bakover og full deltakelse i det nye samfunnet kan finnes samtidig. Skillet følger verken migrasjonstype eller livsområde.",
    },
    {
      question: "Hva skiller diaspora fra transnasjonalisme?",
      options: ["Diaspora beskriver en kollektiv identitet, transnasjonalisme løpende praksiser", "Diaspora gjelder tvungen migrasjon, transnasjonalisme frivillig arbeidsmigrasjon", "Diaspora er et eldre begrep som transnasjonalismen i dag har erstattet", "Diaspora gjelder én generasjon, transnasjonalisme flere generasjoner samlet"],
      explanation: "En diaspora kan strekke seg over mange land og generasjoner uten løpende husholdspraksiser, og transnasjonale praksiser finnes uten at noen tenker på seg selv som diaspora. Begrepene overlapper, men det ene har ikke erstattet det andre.",
    },
    {
      question: "Hva gjør transnasjonalisme med Agnews tredeling av sted?",
      options: ["Locale blir delt mellom to land, mens location fortsatt er entydig", "Location blir delt mellom to land, mens locale forblir uendret", "Sense of place forsvinner, fordi tilhørigheten ikke lenger er stedbundet", "Alle tre betydningene faller sammen, fordi stedet blir ett nettverk"],
      explanation: "Man befinner seg på ett sted om gangen, så location er entydig, mens arenaen for det sosiale livet ligger begge steder. Stedsfølelsen forsvinner ikke — den kan være sterk begge steder samtidig, og det er nettopp funnet.",
    },
    {
      question: "Hva er absolutt fattigdom?",
      options: ["Mangel på grunnleggende behov målt mot en fast terskel", "Å ha vesentlig mindre enn det som er vanlig i eget samfunn", "Mangler langs flere dimensjoner av levekår på samme tid", "Å være stengt ute fra arbeidsmarkedet over lengre perioder"],
      explanation: "Terskelen er den samme uavhengig av hvor rikt samfunnet rundt er, og det gjør begrepet sammenlignbart på tvers av land. Sammenligning med eget samfunn er relativ fattigdom, og mangler i flere dimensjoner er deprivasjon.",
    },
    {
      question: "Hva er relativ fattigdom?",
      options: ["Å ha for lite til å delta i det som er vanlig i eget samfunn", "Å mangle det som skal til for å dekke helt grunnleggende behov", "Å ha lav inntekt sammenlignet med gjennomsnittet i andre land", "Å ha en inntekt som svinger mye fra det ene året til det neste"],
      explanation: "Terskelen settes av samfunnet rundt, og begrepet fanger at fattigdom også handler om å være utenfor. Derfor kan relativ fattigdom finnes i svært rike samfunn, og den forsvinner ikke av vekst alene.",
    },
    {
      question: "Hvorfor kan økonomisk vekst redusere absolutt fattigdom uten å røre den relative?",
      options: ["Fordi den relative terskelen flytter seg oppover med velstanden", "Fordi vekst sjelden gir høyere inntekt til dem som har minst fra før", "Fordi relativ fattigdom bare forekommer i land med høye inntekter", "Fordi absolutt fattigdom måles i inntekt og relativ fattigdom i levekår"],
      explanation: "Den absolutte terskelen ligger fast, mens den relative følger det som er vanlig i samfunnet. Vekst kan derfor løfte mange over den faste grensen og likevel la avstanden til det normale stå uendret — eller øke den, om gevinsten fordeles skjevt.",
    },
    {
      question: "Hva legger deprivasjonsbegrepet til fattigdomsbegrepet?",
      options: ["At mangler opptrer i flere dimensjoner og ofte er romlig konsentrert", "At fattigdom bør måles i faktisk forbruk framfor i registrert inntekt", "At fattigdom rammer barn hardere enn den rammer voksne", "At fattigdom må ses over tid og ikke bare på ett tidspunkt"],
      explanation: "To husholdninger med samme inntekt kan ha helt ulike levekår om den ene har trygg bolig, skole i nærheten og et helsetilbud. At manglene samler seg i bestemte nabolag og regioner, er dessuten det som gjør begrepet samfunnsgeografisk.",
    },
    {
      question: "Hva skiller sosial eksklusjon fra fattigdom?",
      options: ["Eksklusjon beskriver en prosess der noen holdes utenfor av noe", "Eksklusjon gjelder innvandrere, mens fattigdom gjelder hele befolkningen", "Eksklusjon måles i levekår, mens fattigdom måles i inntekt og forbruk", "Eksklusjon er varig, mens fattigdom som regel er en forbigående tilstand"],
      explanation: "Fattigdom beskriver en tilstand, mens eksklusjon beskriver en relasjon: spørsmålet flyttes fra hvor lite noen har, til hva det er som stenger. Kravet om jobb for å få bolig og bolig for å få jobb er en slik mekanisme, og ingen av kravene er ment å ekskludere.",
    },
    {
      question: "Hva skiller fattigdom fra ulikhet?",
      options: ["Fattigdom er nivået i bunnen, ulikhet er fordelingen i hele befolkningen", "Fattigdom måles innenfor land, mens ulikhet måles mellom land", "Fattigdom er et økonomisk begrep, mens ulikhet er et politisk begrep", "Fattigdom gjelder husholdninger, mens ulikhet gjelder hele regioner"],
      explanation: "De to kan bevege seg i hver sin retning samtidig: en region kan ha færre absolutt fattige og samtidig større avstand mellom topp og bunn. Begge deler måles både innenfor og mellom land, og begge er like mye samfunnsgeografiske.",
    },
    {
      question: "Hva er poenget i uttrykket «fattigdommens geografi»?",
      options: ["At stedet legger til eller trekker fra utover den enkeltes egen situasjon", "At fattigdom er mer utbredt i noen land enn i andre land i verden", "At fattige mennesker gjennomgående har vesentlig lengre reisevei til arbeidet", "At fattigdom er lettere å måle i byer enn den er i spredtbygde strøk"],
      explanation: "Konsentrasjonen betyr noe fordi tjenester, arbeidsmarkeder, nettverk og forventninger er stedbundne. To husholdninger med lik inntekt kan derfor ha ulike muligheter, og forskjellen ligger i geografien.",
    },
    {
      question: "Hva skiller utvikling fra vekst i fagets bruk av ordene?",
      options: ["Vekst er at det produseres mer verdi; utvikling er at levekårene endres", "Vekst gjelder økonomien, mens utvikling gjelder befolkningens størrelse", "Vekst måles årlig, mens utvikling måles over lengre tidsperioder", "Vekst er et mål for land, mens utvikling er et mål for enkeltregioner"],
      explanation: "Det ene medfører ikke automatisk det andre: en gruvedrift kan gi stor eksportinntekt og få lokale arbeidsplasser. Hele drøftingen om produksjonsnettverk og utvikling hviler på dette skillet.",
    },
    {
      question: "Hvorfor er asymmetrien mellom kapitalmobilitet og arbeidskraftmobilitet viktig?",
      options: ["Fordi den som kan flytte, forhandler fra en sterkere posisjon", "Fordi kapital skaper mer verdi per enhet enn arbeidskraft gjør", "Fordi arbeidskraft er mindre villig til å flytte enn kapital er", "Fordi kapital søker mot regioner med de laveste lønningene"],
      explanation: "En produksjon kan flyttes gjennom en beslutning, mens de som arbeider i den, møter visum, kvalifikasjonskrav og forpliktelser. Forskjellen er politisk skapt og kan endres, og den former hvilke avtaler som blir mulige — uavhengig av om flyttingen skjer.",
    },
    {
      question: "Hva er oppgradering i en leverandørregion?",
      options: ["Å flytte seg til ledd i produksjonen som gir høyere verdi", "Å øke produksjonsvolumet i det leddet regionen allerede har", "Å tiltrekke seg flere utenlandske investeringer enn i dag", "Å forbedre veier, havner og strømforsyning i regionen"],
      explanation: "Nøkkelen er bevegelse oppover i kjeden — bedre prosesser, mer avanserte produkter, flere funksjoner i egen regi. Mer av det samme er volumvekst, og infrastruktur kan være en forutsetning uten å være oppgraderingen selv.",
    },
    {
      question: "Hvorfor kan verdifangst falle et annet sted enn verdiskapingen?",
      options: ["Fordi eierskap, merkevare og kontroll over kjeden ligger andre steder", "Fordi produksjonslandet ofte har lavere skatt på overskudd enn andre land", "Fordi transport og toll spiser opp verdien før varen når forbrukeren", "Fordi valutakursene svinger mellom tidspunktet for salg og betaling"],
      explanation: "Verdi skapes der arbeidet gjøres, men fanges der forhandlingsmakten og de immaterielle leddene er. Dette enkeltpoenget er det hele utviklingsdrøftingen hviler på.",
    },
    {
      question: "Hva menes med låsing i lavverdiledd?",
      options: ["At en region blir værende i de delene av produksjonen som gir minst verdi", "At en region blir helt avhengig av eksport til ett enkelt utenlandsk marked", "At en region mister produksjonen til et land med lavere kostnader", "At en region må produsere med utstyr som er teknisk foreldet"],
      explanation: "Mekanismene er blant annet at kjøperen kan ha interesse av å beholde de lønnsomme funksjonene, og at korte kontrakter ikke gir forutsigbarheten en oppgradering krever. Låsing er likevel ingen lovmessighet — noen regioner har flyttet seg oppover, og variasjonen er det interessante.",
    },
    {
      question: "Hvordan bør push- og pull-modellen behandles i et svar i dag?",
      options: ["Som faghistorisk bakteppe fra pensumet før omleggingen rundt 2016 og 2017", "Som fagets gjeldende forklaring på hvorfor mennesker migrerer", "Som en modell som er avvist fordi den bygger på naturdeterminisme", "Som et supplement som brukes sammen med mobilitetsbegrepet i analyser"],
      explanation: "Modellen tilhørte det gamle pensumet og står i boka som bakteppe, ikke som anbefalt eksamensstoff. Den er ikke avvist som gal, men den behandler bevegelse som noe som skjer med mennesker, og sier lite om vilkår, mening og husholdsstrategier.",
    },
    {
      question: "Hva vil det si å behandle migranter som aktører under strukturelle begrensninger?",
      options: ["At de legger strategier innenfor rammer de i stor grad ikke har satt selv", "At de har full frihet til å velge hvor og når de vil flytte", "At strukturene rundt dem i praksis bestemmer utfallet av valgene de treffer", "At de må organisere seg kollektivt for å endre sin egen situasjon"],
      explanation: "Strukturer både muliggjør og begrenser handling, og de reproduseres eller endres gjennom handlingen. Verken ren frihet eller ren determinisme gir en god analyse, og den siste gjør i tillegg mennesker til kulisser.",
    },
  ],
  'sgo1001-7-2': [
    {
      question: "Hva er en representasjon i samfunnsgeografisk forstand?",
      options: ["En framstilling som velger ut, og som har en avsender bak seg", "En så nøyaktig gjengivelse av noe som materialet tillater å lage", "En oppfatning enkeltmennesker har dannet seg om et bestemt sted", "En offisiell beskrivelse som myndighetene legger til grunn i saker"],
      explanation: "Representasjonen er aldri fullstendig: noe tas med, noe utelates, noe settes i forgrunnen, og utvalget følger av hvem som lager den. Den er derfor ikke et speil, og den er heller ikke det samme som en privat oppfatning eller et forvaltningsvedtak.",
    },
    {
      question: "Hva ligger i at en representasjon ikke er et speil?",
      options: ["At framstillingen er med på å skape det den framstiller", "At framstillingen alltid inneholder feil som bør rettes opp", "At framstillingen bare gjengir avsenderens personlige mening", "At framstillingen må suppleres med tall for å bli pålitelig"],
      explanation: "Framstillingen etablerer kategorier folk handler etter og gjør noen tiltak naturlige. Poenget er ikke at den er unøyaktig eller subjektiv — en helt korrekt framstilling virker på samme måte.",
    },
    {
      question: "Hva er en diskurs?",
      options: ["Et etablert mønster av framstillinger som setter rammer for hva som kan sies", "En pågående offentlig debatt der partene fremmer ulike synspunkter", "Et sett av holdninger som en bestemt gruppe mennesker deler seg imellom", "En faglig teori om hvordan språket påvirker menneskers oppfatninger"],
      explanation: "Diskursen ligger et hakk under debatten og former den: den avgjør hvilke spørsmål som virker relevante og hva som ikke behøver begrunnes. To som er uenige om et avgiftsnivå, kan derfor tilhøre samme diskurs.",
    },
    {
      question: "Hva skiller en representasjon fra en diskurs?",
      options: ["Representasjonen er én framstilling; diskursen er mønsteret mange danner", "Representasjonen er visuell, mens diskursen alltid er språklig utformet", "Representasjonen er bevisst laget, mens diskursen oppstår helt av seg selv", "Representasjonen kan analyseres, mens diskursen bare kan beskrives grovt"],
      explanation: "Du analyserer en representasjon og argumenterer for at den tilhører en diskurs — og det er gjentakelsen på tvers av avsendere som er belegget. Begge kan være både språklige og visuelle, og begge lar seg analysere.",
    },
    {
      question: "Hva er diskursiv representasjon?",
      options: ["Framstilling gjennom tegnsystemer som er virksom og omstridt", "Måten et bestemt fagmiljø velger å omtale sitt eget saksfelt på", "Framstilling av et saksforhold som er tilpasset et bestemt publikum", "Den offisielle versjonen av en sak slik den formidles i mediene"],
      explanation: "Tre ting må stå: framstillingen skjer gjennom tegnsystemer, den former kategorier og handlinger, og flere framstillinger konkurrerer om å bli den selvfølgelige. Makten ligger i hvem som får representere.",
    },
    {
      question: "Hva er normalisering av en framstilling?",
      options: ["At den ikke lenger oppfattes som en framstilling, men som hvordan ting er", "At den er akseptert av de fleste fordi den er godt dokumentert", "At den er blitt tilpasset et allment språk så flere kan forstå den", "At den er tatt inn i offentlige dokumenter og dermed gjort gjeldende"],
      explanation: "Poenget er hvor bevisbyrden ligger: en normalisert framstilling trenger ikke begrunnes, mens motforestillingen må bære hele byrden. Det er et maktforhold, ikke et spørsmål om dokumentasjon.",
    },
    {
      question: "Hva kjennetegner konkurrerende diskurser?",
      options: ["At partene ikke beskriver saken som den samme saken", "At partene er uenige om hvilken løsning som bør velges", "At partene bruker ulike fagbegreper om det samme forholdet", "At partene har ulike interesser i utfallet av en beslutning"],
      explanation: "Uenighet finnes innenfor én diskurs også. Det som gjør diskursene konkurrerende, er at problembeskrivelsen selv er ulik — og den som får sin beskrivelse lagt til grunn, har vunnet mye av saken.",
    },
    {
      question: "Hva menes med makten til å representere?",
      options: ["Å ha adgang til kanalene der framstillinger lages og spres", "Å ha rett til å uttale seg på vegne av en gruppe man tilhører", "Å kunne motbevise framstillinger man mener er direkte gale", "Å ha den formelle myndigheten til å fatte vedtak i en sak"],
      explanation: "Makten er ujevnt fordelt og følger ressurser og posisjon. Poenget er ikke at noen lyver, men at den som beskrives av andre, sjelden har en kanal selv — og sjelden kjenner seg igjen i beskrivelsen.",
    },
    {
      question: "Hva er en stedsrepresentasjon?",
      options: ["En framstilling av et sted som former hva stedet oppfattes som", "Den samlede kunnskapen forvaltningen har registrert om et sted", "Innbyggernes egen opplevelse av å høre til på stedet de bor", "En beskrivelse av et steds beliggenhet, størrelse og funksjoner"],
      explanation: "For de aller fleste er et sted tilgjengelig bare gjennom framstillinger andre har laget. Tilknytningen innenfra er sense of place, og en nøytral beliggenhetsbeskrivelse er nettopp det representasjonsbegrepet problematiserer.",
    },
    {
      question: "Hva skiller stedsrepresentasjon fra sense of place?",
      options: ["Representasjonen lages for andre; stedsfølelsen erfares innenfra", "Representasjonen er skriftlig, mens stedsfølelsen uttrykkes muntlig", "Representasjonen er ny, mens stedsfølelsen bygger på lang historie", "Representasjonen er kollektiv, mens stedsfølelsen alltid er individuell"],
      explanation: "Det analytisk interessante er forholdet mellom dem: representasjonen kan bekrefte stedsfølelsen, konkurrere med den eller over tid endre den. Skillet går på retningen og avsenderen, ikke på form, alder eller om den deles av mange.",
    },
    {
      question: "Hva er en stedsmyte?",
      options: ["En seig fortelling om et sted som ny informasjon leses innenfor", "En historie om stedets opprinnelse som beboerne selv forteller", "En markedsføringstekst som overdriver stedets gode egenskaper", "En feilaktig oppfatning om et sted som lett lar seg korrigere"],
      explanation: "Myten er ikke nødvendigvis usann, men den er forenklet og motstår enkeltopplysninger som peker i andre retninger. Nettopp derfor kan et rykte overleve lenge etter at det som skapte det, er borte.",
    },
    {
      question: "Hva er felles for utopiske og dystopiske stedsframstillinger?",
      options: ["Begge er utvalg laget av en avsender med et bestemt formål", "Begge overdriver, og begge bør derfor korrigeres med fakta", "Begge stammer fra medier framfor fra stedets egne innbyggere", "Begge gir et mer treffende bilde enn nøytrale beskrivelser gjør"],
      explanation: "Den utopiske skal tiltrekke, den dystopiske skal mobilisere. Å bare påpeke at framstillingen er overdrevet, er en svak analyse — spørsmålet er hva overdrivelsen brukes til.",
    },
    {
      question: "Hva er poenget med stedsmarkedsføring som analyseobjekt?",
      options: ["Avsender og formål er kjent, så utvalget kan analyseres direkte", "Framstillingen er som regel mer treffende enn nyhetsdekning er", "Den lages av kommunen og har derfor demokratisk forankring", "Den viser hvordan innbyggerne selv ønsker at stedet skal framstå"],
      explanation: "Dette er representasjon satt i system: avsenderen er kjent, formålet uttalt og utvalget bevisst. Markedsføringen er dessuten ofte en føring på hva stedet skal bli, ikke bare en beskrivelse av hva det er.",
    },
    {
      question: "Hvorfor er autentisitet et interessant begrep i stedsframstillinger?",
      options: ["Fordi det velger ut ett tidspunkt og gjør det til stedets sanne form", "Fordi det skiller ekte kulturarv fra framstillinger laget for turister", "Fordi det viser hvilke deler av et sted som faktisk er bevaringsverdige", "Fordi det er det eneste kriteriet som ikke avhenger av hvem som ser"],
      explanation: "Alt som kom før og etter det utvalgte tidspunktet, blir til avvik. Spørsmålet er hvem som får bestemme hvilken tidsalder som er stedets egentlige, og hva de som lever der i dag, måles mot.",
    },
    {
      question: "Hvorfor er et kart en representasjon?",
      options: ["Fordi det velger ut, generaliserer, navngir og plasserer", "Fordi det alltid inneholder unøyaktigheter i målestokken", "Fordi det tegnes av mennesker og derfor kan inneholde feil", "Fordi det gjengir terrenget slik det ser ut fra ett bestemt ståsted"],
      explanation: "Et kart kan være helt korrekt og likevel være et utvalg med en avsender og et formål. Nettopp derfor er kartet det beste enkelteksempelet på hva diskursiv representasjon betyr.",
    },
    {
      question: "Hva skiller landskap fra areal i fagets bruk?",
      options: ["Landskap er areal sett og tolket, med en betrakter og et ståsted", "Landskap er den delen av arealet som ikke er bebygd eller dyrket", "Landskap er et estetisk begrep, mens areal er et juridisk begrep", "Landskap gjelder store områder, mens areal gjelder enkelttomter"],
      explanation: "To mennesker kan se det samme terrenget og se to ulike landskap — som kulturarv, som produksjonsareal eller som byggegrunn. Areal er en målbar flate; landskapet forutsetter noen som ser.",
    },
    {
      question: "Hva er «the Other» som analysebegrep?",
      options: ["Konstruksjonen av en gruppe som grunnleggende forskjellig fra «oss»", "Betegnelsen på grupper som står utenfor majoritetssamfunnet i et land", "Opplevelsen av å være fremmed på et sted man nettopp har flyttet til", "Den delen av en befolkning som ikke får uttale seg i offentligheten"],
      explanation: "Forskjelligheten oppdages ikke, den produseres gjennom representasjoner. Begrepet står i anførselstegn fordi det er et postkolonialt analysebegrep om en framstillingspraksis, ikke en betegnelse på mennesker.",
    },
    {
      question: "Hvilke grep kjennetegner andregjøring?",
      options: ["Forskjellen framheves, gruppen gjøres ensartet, og den omtales utenfra", "Gruppen omtales med nedsettende ord av avsendere med fordommer", "Gruppen sammenlignes systematisk med majoriteten i statistikken", "Gruppen framstilles med vekt på det den har til felles med andre"],
      explanation: "Andregjøring er en framstillingspraksis og ikke en holdning, og den finnes derfor også hos velvillige og godt informerte avsendere. Det er nettopp det som gjør den verdt å analysere.",
    },
    {
      question: "Hvorfor kan en velment innsamlingskampanje analyseres som andregjøring?",
      options: ["Fordi framstillingen fordeler aktørskapet ulikt mellom partene", "Fordi avsenderen har økonomiske interesser i å samle inn penger", "Fordi den overdriver nøden for å utløse en sterkere reaksjon", "Fordi den bruker bilder som er tatt uten samtykke fra dem det gjelder"],
      explanation: "Analysen gjelder framstillingens virkemåte, ikke avsenderens motiver: den ene parten handler, den andre blir handlet med. Å blande virkning og hensikt er den vanligste feilen i dette stoffet.",
    },
    {
      question: "Hva brukes kultur om i samfunnsgeografien?",
      options: ["Meningssystemer som gjøres, forhandles og endres over tid", "De skikkene og tradisjonene en befolkning i et land har felles", "Kunst, musikk og litteratur som produseres innenfor et område", "De verdiene som skiller ett samfunn tydelig fra nabosamfunnene"],
      explanation: "Kultur er ikke en eiendom en gruppe har, og den følger ikke landegrenser. Den eldre bruken behandlet kulturer som avgrensede enheter; fagets nyere bruk ser dem som relasjonelle og i endring.",
    },
    {
      question: "Hva sier homogeniseringstesen om kulturell globalisering?",
      options: ["At spredningen av uttrykk gjør steder likere hverandre", "At lokale tradisjoner styrkes når de møter konkurranse utenfra", "At kulturelle uttrykk endres i møtet og gir nye lokale former", "At kulturell spredning følger de samme rutene som varehandelen"],
      explanation: "Tesen peker på at de samme aktørene, plattformene og uttrykkene finnes overalt. At det spredte omformes lokalt, er den motsatte posisjonen — differensieringstesen — og begge har belegg.",
    },
    {
      question: "Hva er den beste måten å håndtere striden om homogenisering og differensiering på?",
      options: ["Å skille nivåene: likhet i tilbudet, variasjon i bruk og betydning", "Å velge den tesen som har mest empirisk støtte og forsvare den", "Å konkludere med at spørsmålet ikke lar seg avgjøre med data", "Å vise at begge teser bygger på det samme feilaktige premisset"],
      explanation: "På tilbudssiden kan de samme aktørene dominere mange steder, mens bruken og betydningen varierer fra sted til sted. Å si dette er å bruke skala som analytisk verktøy, og det er et løft.",
    },
    {
      question: "Hva menes med at representasjoner har materielle følger?",
      options: ["At framstillinger inngår i vedtak, priser og investeringer", "At framstillinger endrer hvordan folk føler seg på et sted", "At framstillinger må trykkes eller sendes for å nå fram til noen", "At framstillinger over tid endrer språket vi bruker om et sted"],
      explanation: "Framstillingen får kraft fordi den går gjennom institusjoner og markeder. Dette er svaret på innvendingen om at kapitlet bare handler om ord — ordet var med i årsakskjeden, selv om det ikke skapte følgen alene.",
    },
    {
      question: "Hva er det første spørsmålet i en diskursanalyse av et materiale?",
      options: ["Hvem er avsenderen, og hva er formålet med framstillingen", "Om opplysningene i framstillingen er korrekte og etterprøvbare", "Hvor mange mennesker som har lest eller sett framstillingen", "Hvilken faglig tradisjon avsenderen kan sies å tilhøre"],
      explanation: "Framgangsmåten går på avsender og formål, hva som er utenfor rammen, hvilke kategorier som brukes, og hvilke handlinger framstillingen gjør naturlige. Faktasjekk er noe annet: en helt korrekt framstilling analyseres på samme måte.",
    },
    {
      question: "Hva bør du undersøke i tillegg til det som står i et materiale?",
      options: ["Hva som er utenfor rammen, altså hva framstillingen utelater", "Hvor lenge framstillingen har vært tilgjengelig for publikum", "Om framstillingen er formulert i et klart og forståelig språk", "Hvilke andre saker den samme avsenderen har uttalt seg om"],
      explanation: "Det som utelates, er like informativt som det som står, fordi utelatelsen viser hvilken målestokk framstillingen forutsetter. Språk og spredning kan være interessant, men er ikke selve grepet.",
    },
    {
      question: "Hvordan bør hybride kulturer behandles i et svar i dag?",
      options: ["Som faghistorisk bakteppe fra pensumet før omleggingen rundt 2016 og 2017", "Som fagets gjeldende forklaring på hva kulturell globalisering fører til", "Som et begrep faget har avvist fordi det bygger på naturdeterminisme", "Som et supplement til diskursbegrepet i analyser av stedsframstillinger"],
      explanation: "Begrepet forutsetter at det fantes rene, avgrensede kulturer som så blandet seg, mens fagets nyere forståelse ser kultur som relasjonell hele veien. Det er ikke avvist som gal, men det er ikke dagens kjernestoff.",
    },
    {
      question: "Hva er poenget med interseksjonalitet?",
      options: ["At kategorier virker sammen, og at kombinasjonen er noe eget", "At flere kategorier bør nevnes for at analysen skal bli fullstendig", "At kjønn er den viktigste kategorien i geografiske analyser", "At kategorier som klasse og etnisitet bør holdes strengt atskilt"],
      explanation: "Posisjonen i skjæringspunktet er kvalitativt forskjellig, ikke summen av delene. Begrepet er derfor ikke en oppfordring til å ramse opp kategorier, men en advarsel mot å analysere én om gangen.",
    },
    {
      question: "Hva er den vanligste feilen i svar om diskursiv representasjon?",
      options: ["Å definere diskurs som måten man snakker om noe på", "Å bruke for få eksempler fra materialet som skal analyseres", "Å legge for stor vekt på hvem som er avsender av framstillingen", "Å analysere bilder og kart på samme måte som skrevet tekst"],
      explanation: "Definisjonen mangler da nøyaktig det som gjør begrepet faglig: at framstillingen er virksom, at den konkurrerer med andre, og at makten ligger i hvem som får representere.",
    },
    {
      question: "Hva er et rimelig motargument mot påstanden om at alle romlige representasjoner er politiske?",
      options: ["At begrepet mister skarphet dersom det gjelder absolutt alt", "At mange framstillinger er laget av fagfolk uten egne interesser", "At kart er tekniske produkter og derfor faller utenfor spørsmålet", "At folk uansett gjennomskuer framstillinger de ikke er enige i"],
      explanation: "En analyse som finner politikk overalt, skiller ikke lenger mellom en turkartsignatur og en valgkamp. Det er derfor et av de beste svarene skiller mellom at alle framstillinger har konsekvenser og at alle har en politisk hensikt.",
    },
    {
      question: "Hva er den beste måten å lande påstandsoppgaven om romlige representasjoner på?",
      options: ["Å avklare hva «politisk» skal bety og ta stilling innenfor det", "Å vise at spørsmålet er for sammensatt til å kunne avgjøres", "Å slå fast at faget har konkludert med at påstanden holder", "Å gjengi begge posisjonene like grundig uten å velge mellom dem"],
      explanation: "Halve oppgaven ligger i avklaringen av nøkkelordet, og landingen skal følge av argumentene. Å ikke velge er å helgardere, og et påstandssvar som ikke lander, har ikke svart på oppgaven.",
    },
  ],
  'sgo1001-8-1': [
    {
      question: "Hvilket trinn i kortsvaret avgjør om svaret kan nå toppen?",
      options: ["Det konkrete eksempelet, sammen med setningen om hva det viser", "Definisjonen, forutsatt at den er hentet fra riktig pensumforfatter", "Avgrensningen mot det nabobegrepet som oftest forveksles med det", "Den løftende setningen som knytter begrepet til rom, sted eller skala"],
      explanation: "Eksempelet er Akse 2, og et eksempelløst svar kan ikke nå toppen uansett hvor presis definisjonen er. Definisjonen og avgrensningen er grunnkravet på Akse 1, og løftet er en bonus — men ingen av dem kan erstatte belegget.",
    },
    {
      question: "Hva skiller relativt rom fra relasjonelt rom hos Harvey?",
      options: ["Relativt rom måler avstand i annet enn meter, relasjonelt rom er forbindelser", "Relativt rom gjelder små områder, mens relasjonelt rom gjelder globale sammenhenger", "Relativt rom brukes i kart og statistikk, relasjonelt rom brukes i intervjustudier", "Relativt rom er en eldre betegnelse som etter hvert ble erstattet av relasjonelt rom"],
      explanation: "Relativt rom bytter måleenhet — reisetid, kostnad, tilgjengelighet. Relasjonelt rom bytter ut hva rommet består av: et sted er summen av sine forbindelser. At det ene skulle være en nyere betegnelse på det andre er nettopp fellen sensor tester.",
    },
    {
      question: "Hva slags påstand fremmer Herod om skalanivåene?",
      options: ["Et argument om at nivåene skapes, forhandles om og kan endres", "Et måleresultat som viser at nivåene varierer mellom land og regioner", "En modell som beregner hvilket nivå en beslutning bør tas på", "En observasjon av at nivåene er blitt flere i løpet av etterkrigstiden"],
      explanation: "Herod argumenterer for at skalanivåer ikke er naturgitte, men skapt og foranderlige. Å skrive at han «beviste» eller «målte» dette tilskriver ham noe annet enn det han gjør, og viser at kandidaten ikke skiller et argument fra et funn.",
    },
    {
      question: "Hva er avgrensningen mellom location og locale i Agnews tredeling?",
      options: ["Location er plasseringen, locale er den materielle rammen livet foregår i", "Location er stedet slik det oppleves, locale er stedet slik det måles", "Location er navnet på stedet, locale er den administrative enheten det ligger i", "Location er stedet i dag, locale er stedet slik det var tidligere i historien"],
      explanation: "Lokasjonen er koordinaten, arenaen er den fysiske og sosiale settingen der livet utspiller seg. Meningen og tilknytningen hører til den tredje betydningen, stedsfølelsen — å blande arena og stedsfølelse er den vanligste forenklingen her.",
    },
    {
      question: "Hva er kjernedistinksjonen mellom verdikjede- og nettverksperspektivet?",
      options: ["De stiller ulike spørsmål: hvordan kjeden styres, mot hvor verdien blir av", "Nettverksperspektivet er nyere og har erstattet verdikjedeperspektivet i faget", "Verdikjeden gjelder industrivarer, mens nettverket også dekker tjenester", "Verdikjeden er en teori, mens nettverket er en metode for å samle inn data"],
      explanation: "Verdikjedeperspektivet ser koordinering og styring av leddene; nettverksperspektivet ser makten og hvem som tilegner seg verdien, og regner stat og arbeidskraft med. Å behandle det ene som bare en nyere betegnelse på det andre sletter hele skillet.",
    },
    {
      question: "Hvordan skiller urbanisering seg fra byvekst?",
      options: ["Urbanisering er andelen som bor i byer, byvekst er antallet nye innbyggere", "Urbanisering gjelder store byer, mens byvekst også omfatter mindre tettsteder", "Urbanisering måles av staten, mens byvekst måles av den enkelte kommunen", "Urbanisering skjer over lang tid, mens byvekst er en kortsiktig svingning"],
      explanation: "Urbanisering er et relativt mål, byvekst et absolutt. Derfor kan en by vokse kraftig uten at urbaniseringsgraden stiger, hvis befolkningen utenfor byene vokser like fort — og det er nettopp den muligheten oppgaven vil at du skal se.",
    },
    {
      question: "Hvorfor kreves begge forklaringstypene i et kortsvar om gentrifisering?",
      options: ["Fordi leiegapet forklarer at investeringen skjer, preferansene hvor den skjer", "Fordi de to typene motsier hverandre, og et svar må velge side mellom dem to", "Fordi den ene gjelder byer i global nord og den andre byene i global sør", "Fordi den ene brukes av forskere og den andre av planleggere i kommunene"],
      explanation: "De to forklaringstypene utfyller hverandre: den økonomiske sier hvorfor kapitalen kommer, den sosio-kulturelle hvorfor akkurat denne bydelen. Et svar med bare den ene er en flat definisjon, ikke et valg av standpunkt.",
    },
    {
      question: "Hva måler sårbarhet i den forståelsen faget bruker?",
      options: ["Graden av negative konsekvenser en klimapåkjenning gir for et sted", "Sannsynligheten for at en ekstrem værhendelse inntreffer i området", "Styrken i den klimatiske hendelsen som treffer et lokalsamfunn", "Andelen av befolkningen som er bosatt i de mest utsatte områdene"],
      explanation: "Sårbarhet er et mål på samfunnets forfatning, ikke på hendelsens styrke. At folk bor i utsatte områder er eksponering, og sannsynligheten for hendelsen hører til risikobegrepet — begge ligger nær og er likevel noe annet.",
    },
    {
      question: "Hva er kjernepoenget hos Bridge om naturressurser?",
      options: ["At natur blir ressurs når mennesker tillegger den verdi", "At verdens naturressurser er mer begrenset enn folk vanligvis tror", "At ressursene bør fordeles jevnere mellom land og verdensdeler", "At ressurser blir mer verdifulle etter hvert som de blir knappe"],
      explanation: "Ressurs er en relasjon mellom samfunn og natur, ikke en iboende egenskap ved tingen. Å gjøre Bridge til knapphetsteoretiker bytter ut hele poenget: han sier ikke noe om hvor mye som finnes, men om hva som gjør noe til en ressurs.",
    },
    {
      question: "Hva er den viktigste konsekvensen av skiftet fra government til governance?",
      options: ["Ansvarliggjøringen blir vanskeligere når beslutningene forberedes i nettverk", "Staten mister myndigheten og blir en aktør på linje med de private selskapene", "Kommunene får flere oppgaver enn de hadde under den hierarkiske styringen", "Beslutningene tas raskere fordi færre organer må involveres i hver sak"],
      explanation: "Governance gjør det lettere å få gjennomført tiltak og vanskeligere å stille noen til ansvar, fordi nettverket ikke har en adresse å klage til. Staten forsvinner ikke i skiftet — den får selskap, og det er en tilvekst snarere enn en utskiftning.",
    },
    {
      question: "Hva menes med at medborgerskap er flerdimensjonalt?",
      options: ["Det består av medlemskap, rettigheter og deltagelse, som kan sprike", "Det gjelder på flere nivåer, fra kommunen og opp til overnasjonale organer", "Det tildeles gjennom flere ulike ordninger avhengig av hvor man er født", "Det omfatter både de som har og de som venter på juridisk statsborgerskap"],
      explanation: "De tre dimensjonene kan være oppfylt i ulik grad samtidig, og det er nettopp spriket som gjør begrepet analytisk brukbart. At medborgerskap også utøves på flere skalanivåer er riktig, men det er løftet i svaret — ikke selve flerdimensjonaliteten.",
    },
    {
      question: "Hva er hovedskillet mellom en idiografisk og en nomotetisk tilnærming?",
      options: ["Å forstå det enkelte tilfellet i kontekst, mot å finne mønstre på tvers", "Å bruke intervjuer og observasjon, mot å bruke registerdata og statistikk", "Å studere små områder grundig, mot å studere store områder oversiktlig", "Å beskrive hvordan noe er, mot å vurdere hvordan det burde ha vært"],
      explanation: "Skillet er et kunnskapssyn, ikke et metodevalg: det handler om hva slags kunnskap man søker. Derfor er kvalitativ metode ikke automatisk idiografisk, og den forvekslingen er den vanligste feilen i dette stoffet.",
    },
    {
      question: "Hva skiller mobilitet hos Cresswell fra ren forflytning?",
      options: ["At bevegelsen forstås som erfart praksis, med vilkår og mening", "At bevegelsen skjer over landegrenser og ikke bare innenfor et land", "At bevegelsen er varig og ikke bare et midlertidig opphold et annet sted", "At bevegelsen registreres i statistikk og dermed kan måles og sammenlignes"],
      explanation: "Mobilitet spør hvem som er mobil, på hvilke vilkår og med hvilken mening. To personer som krysser samme grense kan ha helt ulik mobilitet, og et svar som stopper ved forflytningen mangler nettopp den dimensjonen som testes.",
    },
    {
      question: "Hva er kjernen i begrepet diskursiv representasjon?",
      options: ["At framstillinger er med på å skape det de beskriver", "At måten vi snakker om noe på varierer mellom ulike grupper", "At mediene har makt til å bestemme hvilke saker som får plass", "At språk må tolkes i lys av den som uttaler seg og situasjonen"],
      explanation: "Representasjonen gjengir ikke bare virkeligheten, den er med på å produsere den, og makten ligger i hvem som får representere. At språkbruk varierer er sant, men det er en observasjon om språk — ikke det analytiske poenget begrepet er laget for.",
    },
    {
      question: "Hva kjennetegner et kortsvar på det gode nivået, altså C?",
      options: ["Presis definisjon, avgrensning og et relevant eksempel, men uten løft", "Korrekt definisjon uten avgrensning og med et eksempel som er nevnt", "Alle fire trinnene på plass, med eksempelet brukt til å vise skillet", "Presis definisjon og drøfting av flere perspektiver innenfor ordgrensen"],
      explanation: "God er definisjon pluss presis distinksjon pluss relevant eksempel — deskriptivt og korrekt. Uten avgrensningen er svaret på minimumsnivå, og når eksempelet brukes til å demonstrere skillet, er svaret på beste nivå.",
    },
    {
      question: "Hvorfor er en irrelevant setning dyrere i et kortsvar enn i et langsvar?",
      options: ["Fordi 200 ord er så knapt at setningen er tatt fra eksempelet", "Fordi sensor trekker hardere for irrelevans i Del 1 enn i Del 2", "Fordi kortsvaret vurderes samlet og ikke setning for setning", "Fordi Del 1 teller mest av de to delene på dagens eksamen"],
      explanation: "Irrelevante momenter trekker ned i begge deler, men på 200 ord er plassen selv straffen: hvert overflødig moment fortrenger belegget. Del 1 teller for øvrig 40 prosent, altså mindre enn Del 2 — vektingen er ikke grunnen.",
    },
    {
      question: "Hvor mange kortsvar skal du levere i Del 1, og hvor mange kan du velge mellom?",
      options: ["Tre svar valgt blant fire oppgaver", "To svar valgt blant tre oppgaver", "Fire svar valgt blant seks oppgaver", "Tre svar valgt blant seks oppgaver"],
      explanation: "Del 1 gir fire kortsvarsoppgaver og ber om tre. Å skrive et fjerde tar tid fra Del 2, som teller 60 prosent, og gir ingen ekstra uttelling — valget mellom to av tre hører til langsvarsdelen.",
    },
    {
      question: "Hva bestiller formuleringen «gi et eksempel på at sårbarhet er ujevnt fordelt»?",
      options: ["Et konkret tilfelle som bærer svaret, med definisjonen som kort støtte", "En fullstendig definisjon av sårbarhet fulgt av et illustrerende tilfelle", "En drøfting av hvilke tiltak som kan jevne ut fordelingen mellom steder", "En sammenligning av sårbarhet i global nord og i global sør i dag"],
      explanation: "Her er eksempelet selve bestillingen, og definisjonen skal bare gi den plass nok til å bli forstått. Et svar som bruker halve plassen på å definere sårbarhet har lest oppgaven som en definisjonsoppgave, og det er den ikke.",
    },
    {
      question: "Hva er den hyppigste enkeltfeilen sensor beskriver i kortsvar?",
      options: ["At begrepet defineres riktig, men uten et eneste konkret tilfelle", "At kandidaten svarer på flere oppgaver enn de tre som kreves", "At definisjonen er hentet fra en annen forfatter enn den pensum bruker", "At svaret går over ordgrensen og dermed mister de siste poengene"],
      explanation: "Definisjon uten eksempel er feilen som går igjen mest, og den har en hard konsekvens: svaret kan ikke nå toppen. De andre problemene forekommer, men ingen av dem er beskrevet som like gjennomgående.",
    },
    {
      question: "Hva er kjennetegnet på et eksempel som teller på Akse 2?",
      options: ["At sted eller aktør er navngitt, og at det står hva eksempelet viser", "At eksempelet er hentet fra pensum og ikke fra kandidatens hverdag", "At eksempelet er aktuelt og helst fra de siste par årene i nyhetsbildet", "At eksempelet er beskrevet så detaljert at leseren kjenner caset godt"],
      explanation: "Et eksempel er konkret når hva eller hvor står der, hvilket begrep det belegger, og hva det faktisk viser. Aktualitet trekker opp på Akse 4, men et gammelt eksempel med en tydelig konklusjon slår et ferskt som bare nevnes.",
    },
  ],
  'sgo1001-8-2': [
    {
      question: "Hva er de to bestillingene i «gjør rede for X og drøft …»?",
      options: ["En redegjørende del og en drøftende del, og begge må besvares", "En innledning og en konklusjon, som rammer inn framstillingen av stoffet", "En definisjon og et eksempel, slik oppbygningen er i kortsvaret også", "En teoridel og en metodedel, etter mønster fra en vanlig oppgavetekst"],
      explanation: "Sammensatte formuleringer er normen i Del 2, og et svar som bare gjør det første er et rent referat. Definisjon og eksempel er kortsvarets minstemål og dekker bare den redegjørende halvdelen her.",
    },
    {
      question: "Hva kjennetegner et analytisk grep i et langsvar?",
      options: ["En påstand som svarer på oppgaven, og som en fornuftig person kan bestride", "En oppsummering til slutt som samler trådene fra hele framstillingen", "En presis definisjon av alle nøkkelbegrepene tidlig i besvarelsen", "En oversikt over de perspektivene pensum tilbyr på det aktuelle temaet"],
      explanation: "Grepet er en påstand som resten av svaret er bygget rundt, og den skal kunne motsis. En definisjon er grunnkravet på Akse 1, og en oppsummering gjentar det som allerede står — ingen av dem gjør teksten til et svar.",
    },
    {
      question: "Hva er testen på om et case bygger argumentet?",
      options: ["Om argumentet faller sammen dersom caset strykes fra svaret", "Om caset er hentet fra pensum og ikke fra kandidatens egen erfaring", "Om caset er beskrevet grundig nok til at leseren kjenner det godt", "Om caset er aktuelt og hentet fra de siste årenes nyhetsbilde"],
      explanation: "Et case som bærer, kan ikke fjernes uten at påstanden mister belegget. Er caset hentet fra hverdagen eller fra pensum spiller mindre rolle, og detaljrikdom uten kobling til begrepene er tvert imot empirisk briljering.",
    },
    {
      question: "Hvorfor er det å ramse opp alle perspektivene et problem?",
      options: ["Det leses som usikkerhet, og det fortrenger plassen drøftingen trengte", "Det tar mer tid enn kandidaten har til rådighet innenfor de fire timene", "Det gir feil rekkefølge på momentene i forhold til oppgavens ordlyd", "Det krever kildehenvisninger som ikke er mulige på en skoleeksamen"],
      explanation: "Helgardering ser ut som grundighet, men den viser at kandidaten ikke tør velge, og hvert overflødig perspektiv er tatt fra drøftingen. Tidsbruk og rekkefølge er praktiske problemer, ikke grunnen til at sensor trekker.",
    },
    {
      question: "Hva kjennetegner overgangen fra redegjørelse til drøfting?",
      options: ["At det kommer et spørsmål eller en innvending som resten svarer på", "At det settes inn en ny mellomoverskrift midt i besvarelsen", "At kandidaten skriver at redegjørelsen nå er ferdig og drøftingen begynner", "At framstillingen går fra generelle begreper over til konkrete eksempler"],
      explanation: "Overgangen kjennetegnes av at teksten slutter å gjengi og begynner å argumentere, og det skjer gjennom et spørsmål eller en innvending. En overskrift eller en metasetning markerer bare hvor du er, den endrer ikke hva teksten gjør.",
    },
    {
      question: "Hva skiller en innvending fra en helgardering?",
      options: ["Innvendingen navngir motargumentet og svarer på det", "Innvendingen står til slutt, mens helgarderingen står tidlig i svaret", "Innvendingen er hentet fra pensum, helgarderingen fra egen tenkning", "Innvendingen gjelder metoden, mens helgarderingen gjelder konklusjonen"],
      explanation: "En innvending er konkret nok til at leseren ser hva som ville fulgt hvis den var riktig, og den blir besvart. Helgarderingen konstaterer bare at saken har flere sider, og den kan stå hvor som helst i svaret.",
    },
    {
      question: "Hva er kjennetegnet på et svar på det gode nivået, altså C, i Del 2?",
      options: ["Presise begreper og ryddig redegjørelse, men uten at det tas stilling", "Korrekte begreper uten eksempel, og med en påstand som ikke er belagt", "Presise begreper, et case som bærer argumentet og en tydelig innvending", "Ryddig struktur og riktige begreper, men med feil i selve definisjonene"],
      explanation: "C er det deskriptive svaret: alt er riktig, men drøftingen uteblir. Kommer caset som bærer og innvendingen i tillegg, er svaret på beste nivå — og mangler eksempelet helt, ligger det under.",
    },
    {
      question: "Hva er hovedgrunnen til at Del 2 får mest tid selv om Del 1 teller 40 prosent?",
      options: ["To lange svar krever disposisjon, mens tre korte krever presisjon", "Del 2 har flere oppgaver å velge mellom enn Del 1 har", "Ordgrensen i Del 2 er høyere, og flere ord tar lenger tid å skrive", "Kortsvarene kan skrives uten kladd, mens langsvarene må renskrives"],
      explanation: "Disposisjonstiden er det som ikke kan kortes ned uten at svaret mister tråden, og den kommer i tillegg til skrivingen. Ordgrensen forklarer noe av tidsbruken, men den er en følge av kravet — ikke begrunnelsen for det.",
    },
    {
      question: "Hva er kravet til et kjernebegrepsløft for at det skal telle?",
      options: ["At det endrer noe i analysen, ikke bare nevner rom, sted eller skala", "At det står helt til slutt, som en avslutning på hele besvarelsen", "At det trekker inn alle tre kjernebegrepene og viser sammenhengen", "At det knytter temaet til det kapitlet i pensum begrepene er hentet fra"],
      explanation: "Et løft som ikke gjør noe med analysen er et irrelevant moment og trekker ned. Ett av de tre kjernebegrepene er nok, og plasseringen er som regel i landingen — men verken antall eller plassering avgjør om det teller.",
    },
    {
      question: "Hva bestiller formuleringen «anvend fasene på en by du kjenner»?",
      options: ["At begrepene faktisk brukes på byen, ikke at byen beskrives", "At byen beskrives grundig nok til at leseren kjenner den igjen", "At kandidaten velger den byen som passer fasene aller best", "At fasene sammenlignes med hverandre på flere ulike akser"],
      explanation: "I en anvendelsesoppgave vurderes du på begrepsanvendelsen, ikke på empirisk detaljkunnskap om stedet. En grundig bybeskrivelse uten fasene svarer altså ikke på bestillingen, uansett hvor godt den er skrevet.",
    },
    {
      question: "Hva må et faghistorie-langsvar av typen «velg én vending» inneholde?",
      options: ["Ett valg, et tydelig fra og til, og en kritisk del om hva den overså", "En kort gjennomgang av alle tre vendingene før valget begrunnes", "En tidslinje over faget fra de eldste røttene og fram til i dag", "En vurdering av hvilken vending som var mest verdifull for faget"],
      explanation: "Sjangeren ber om ett valg fulgt i dybden, med bevegelsen fra noe til noe annet, og med kritikken skrevet ut. Å nevne alle tre først er nettopp den helgarderingen oppgaven straffer.",
    },
    {
      question: "Hva gikk den kvantitative vendingen fra og til?",
      options: ["Fra beskrivelse av det unike til søken etter generelle romlige mønstre", "Fra kart og feltarbeid til statistiske analyser av registerdata", "Fra naturdeterminisme til en forståelse av natur som betingelse", "Fra studier av byer til studier av regioner og større områder"],
      explanation: "Vendingen flyttet faget fra regionalgeografiens tykke beskrivelse av enkeltområder til modeller og generaliserbare sammenhenger. Oppgjøret med naturdeterminismen er et annet og eldre kapittel i faghistorien.",
    },
    {
      question: "Hva var hovedkritikken mot den radikale vendingen?",
      options: ["At strukturforklaringene fikk så mye plass at aktørene kom i skyggen", "At den brukte metoder som ikke lot seg etterprøve av andre forskere", "At den tok stilling politisk og dermed forlot kravet om objektivitet", "At den bare studerte byer i global nord og ikke tok med global sør"],
      explanation: "Kritikken har vært at ulikhet ble forklart så tungt strukturelt at menneskers egne handlinger og meninger fikk lite rom. Det var nettopp det den kulturelle vendingen senere hentet inn igjen.",
    },
    {
      question: "Hvordan bør forholdet mellom de tre vendingene framstilles?",
      options: ["Som lag som alle er i bruk i dagens fag, ikke som rene avløsninger", "Som tre atskilte epoker der hver avløste den forrige fullstendig", "Som tre parallelle retninger som aldri har hatt kontakt med hverandre", "Som en utvikling der den siste er den mest fullverdige av de tre"],
      explanation: "Vendingene har lagt seg oppå hverandre, og alle tre gir spor i faget i dag. Å framstille dem som en trapp der den nyeste er best, er dessuten en verdiladet framstilling faget selv har forlatt.",
    },
    {
      question: "Hvor mye av ordbudsjettet bør caset som regel få i et langsvar?",
      options: ["Rundt en tredel — det er den største enkeltposten", "Rundt en tiendedel, som en kort illustrasjon underveis", "Rundt halvparten, siden eksempelet er den viktigste aksen", "Så lite som mulig, slik at teorien får best mulig plass"],
      explanation: "Caset er belegget for påstanden og trenger plass for å kunne bære den, men redegjørelsen og drøftingen skal fortsatt ha sitt. En kort illustrasjon rekker ikke å vise noe, og halve svaret gir empirisk slagside.",
    },
    {
      question: "Hva er problemet med å svare «det er sammensatt» i landingen?",
      options: ["Det er en beskrivelse av at saken er vanskelig, ikke et svar", "Det er for kort til å fylle det siste avsnittet i besvarelsen", "Det motsier grepet som ble presentert tidlig i besvarelsen", "Det er en påstand som ikke lar seg belegge med et konkret case"],
      explanation: "Landingen skal si hva som avgjør hvilken vei saken trekker, ikke bare at den har flere sider. Er svaret virkelig sammensatt, er det nettopp avveiningen som skal begrunnes.",
    },
    {
      question: "Hva er den vanligste grunnen til at et faglig solid langsvar havner på god?",
      options: ["At kandidaten gjengir pensum korrekt uten å ta stilling til noe", "At kandidaten har misforstått hva et av kjernebegrepene betyr", "At kandidaten skriver for lite og ikke fyller ordgrensen på tusen", "At kandidaten bruker eksempler fra hverdagen i stedet for pensum"],
      explanation: "Rent referat uten drøfting er den hyppigste årsaken til at et riktig svar ikke løftes videre. Ordmengde er ikke et kriterium i seg selv, og et hverdagseksempel er lov så lenge det viser begrepet.",
    },
    {
      question: "Hva er poenget med å telle instruksjonsverbene før du skriver?",
      options: ["Å sikre at alle bestillingene i oppgaven faktisk blir besvart", "Å avgjøre hvor mange avsnitt besvarelsen bør deles inn i", "Å finne ut hvilken av de tre langsvarsoppgavene som er lettest", "Å beregne hvor mange minutter hver del av svaret skal få"],
      explanation: "Sammensatte formuleringer er normen, og et ubesvart delspørsmål koster mer enn en tynn formulering. Verbene sier hva som bestilles, ikke hvordan svaret skal deles opp eller tidsettes.",
    },
  ],
  'sgo1001-8-3': [
    {
      question: "Hva kjennetegner en brukbar sammenligningsakse?",
      options: ["At den er formulert som et spørsmål begge ledd kan svare på", "At den navngir det temaet de to leddene begge hører hjemme under", "At den peker på den viktigste forskjellen mellom de to leddene", "At den er hentet fra pensums egen framstilling av begrepsparet"],
      explanation: "En akse er et spørsmål med et svar for hvert ledd, og det er det som gjør at svarene kan settes opp mot hverandre. Et felles tema mangler den egenskapen, og en akse trenger ikke være den viktigste forskjellen for å være brukbar.",
    },
    {
      question: "Hva er feil #4, ensidig komparasjon?",
      options: ["At bare det ene leddet får behandling og eksempel i svaret", "At kandidaten sammenligner to ting som ikke hører sammen", "At sammenligningen bare får med forskjeller og ingen likheter", "At kandidaten velger færre akser enn oppgaven legger opp til"],
      explanation: "Feilen er at halve oppgaven står ubesvart fordi det ene leddet er behandlet grundig og det andre nesten ikke. Manglende likhet og for få akser svekker svaret, men de fjerner ikke en hel side av sammenligningen.",
    },
    {
      question: "Hvorfor må en sammenligning også si hva som er likt?",
      options: ["Fordi to ting uten noe felles ikke kan sammenlignes meningsfullt", "Fordi sensor krever et bestemt antall momenter i en slik oppgave", "Fordi likheten er det som skiller en drøfting fra et rent referat", "Fordi de fleste begrepspar i faget er nyanser av samme begrep"],
      explanation: "Likheten er grunnen til at aksene i det hele tatt har svar for begge ledd. Den skal likevel bare ha én til to setninger — overtar den, har svaret utvisket forskjellen oppgaven spurte om.",
    },
    {
      question: "Hva er hovedspørsmålet i verdikjedeperspektivet?",
      options: ["Hvordan produksjonen koordineres og styres mellom leddene", "Hvem som skaper verdien og hvem som ender opp med å beholde den", "Hvilke land som deltar i produksjonen av en bestemt vare", "Hvordan staten kan regulere selskapenes virksomhet på tvers"],
      explanation: "Kjedeperspektivet ser koordinering, styringsformer og oppgradering. Spørsmålet om hvem som tilegner seg verdien hører til nettverksperspektivet, og det er nettopp der skillet mellom de to går.",
    },
    {
      question: "Hva er hovedforskjellen på hvem som regnes som aktør i de to perspektivene?",
      options: ["Nettverksperspektivet regner også stat og arbeidskraft som aktører", "Verdikjedeperspektivet regner bare med selskaper i global nord", "Nettverksperspektivet ser bare på de største selskapene i bransjen", "Verdikjedeperspektivet regner forbrukerne som den siste aktøren"],
      explanation: "Kjedeperspektivet er bedriftssentrert, mens nettverksperspektivet trekker inn stat, arbeidskraft og sivilsamfunn og gjør maktrelasjonene til en del av analysen. Geografisk avgrensning er ikke det som skiller de to.",
    },
    {
      question: "Hva skiller entreprenørialistisk fra ny-rasjonalistisk planlegging?",
      options: ["Hvem som setter rammene, og hva prosjektene begrunnes med", "Om kommunen samarbeider med private utbyggere eller ikke", "Om planene gjelder sentrum eller de ytre delene av byen", "Om det bygges høyt og tett eller lavt og spredt i området"],
      explanation: "Entreprenørialismen lar utbygger og investor drive utviklingen og begrunner den med vekst og attraktivitet; ny-rasjonalismen setter rammene i overordnede planer og begrunner dem med klima og transport. Begge samarbeider tett med private, så det er ikke skillelinjen.",
    },
    {
      question: "Hva er en typisk bakside ved ny-rasjonalistisk fortetting?",
      options: ["At den kan fortrenge dem som bor rimeligst, i bærekraftens navn", "At den gir dårligere kollektivtilbud fordi flere bor på samme sted", "At den øker transportbehovet mellom bydelene i byen", "At den gjør det vanskeligere å samordne areal og transport"],
      explanation: "Fortetting presser de samme sentrale områdene, og prisene der stiger — med fortrengning som følge. De andre påstandene går imot selve begrunnelsen for fortetting, som nettopp er å redusere transportbehovet.",
    },
    {
      question: "Hva skiller en induktiv fra en deduktiv framgangsmåte?",
      options: ["Hvor undersøkelsen starter: i materialet eller i teorien", "Om det brukes intervjuer eller om det brukes registerdata", "Om undersøkelsen gjelder få enheter eller mange enheter", "Om forskeren er nær feltet eller holder avstand til det"],
      explanation: "Skillet gjelder rekkefølgen: induktivt utvikles begrepene av materialet, deduktivt prøves en påstand utledet av teori. Begge framgangsmåtene kan være både kvalitative og kvantitative, og den forvekslingen er den vanligste i dette stoffet.",
    },
    {
      question: "Hva er den typiske svakheten ved en deduktiv framgangsmåte?",
      options: ["At undersøkelsen har lite rom for det uventede", "At funnene ikke kan generaliseres utenfor utvalget", "At forskerens forforståelse ikke blir gjort eksplisitt", "At datamengden blir for stor til å analyseres grundig"],
      explanation: "Deduktivt kan undersøkelsen i hovedsak bekrefte eller avkrefte det den allerede spør om. Faren for å finne mønstre som ikke gjelder utenfor utvalget er den induktive framgangsmåtens motsvarende svakhet.",
    },
    {
      question: "Hva blir synlig i relativt rom som ikke er synlig i absolutt rom?",
      options: ["Tilgjengelighet og ulikhet i hvem som faktisk når fram", "Hvor steder og virksomheter er lokalisert i forhold til hverandre", "Hvilke steder som henger sammen gjennom nettverk og relasjoner", "Hvor grensene mellom administrative enheter faktisk går"],
      explanation: "Relativt rom måler avstand i reisetid, kostnad og tilgjengelighet, og gjør dermed forskjeller mellom mennesker synlige. Nettverk og forbindelser hører til relasjonelt rom, som er noe tredje — og den forvekslingen er selve fellen i dette stoffet.",
    },
    {
      question: "Hva er hovedkravet i en anvendelsesoppgave?",
      options: ["At begrepene faktisk brukes på materialet, ikke bare nevnes", "At kandidaten kjenner caset godt nok til å utdype det", "At materialet gjenfortelles presist før analysen begynner", "At så mange relevante begreper som mulig trekkes inn"],
      explanation: "Sjangeren vurderer begrepsanvendelse, og det er derfor tre til fem begreper brukt hele veien slår femten nevnt én gang. Detaljkunnskap om caset er ikke det som måles, og en gjenfortelling er en beskrivelse, ikke en analyse.",
    },
    {
      question: "Hvor mange begreper bør du velge i en anvendelsesoppgave?",
      options: ["Tre til fem, og bruke dem gjennom hele analysen", "Ett eller to, slik at hvert av dem kan utdypes fullt", "Åtte til ti, for å vise bredden i pensumkunnskapen", "Så mange som materialet gir anledning til å nevne"],
      explanation: "Få begreper brukt konsekvent er selve kjennetegnet på en god anvendelse, og valget er en del av besvarelsen. Ett begrep gir for smal analyse, mens mange nevnte begreper leses som helgardering.",
    },
    {
      question: "Hva er feil #9?",
      options: ["Empirisk briljering på bekostning av begrepsforståelsen", "Å bruke et case som ikke er nevnt i pensumlitteraturen", "Å anvende begreper på et materiale de ikke passer på", "Å beskrive materialet uten å oppgi hvor det er hentet fra"],
      explanation: "Feilen er at kandidaten bruker plassen på detaljkunnskap om caset i stedet for på begrepene. Et selvvalgt case utenfor pensum er tvert imot lov og premieres, så lenge begrepene faktisk anvendes på det.",
    },
    {
      question: "Når er en opplysning om caset relevant i en anvendelsesoppgave?",
      options: ["Når den er nødvendig for at et begrep skal kunne anvendes", "Når den viser at kandidaten kjenner caset fra før av", "Når den er hentet fra materialet og ikke fra hukommelsen", "Når den gjør framstillingen mer levende for leseren"],
      explanation: "Testen er om opplysningen bærer anvendelsen, ikke om den er sann eller interessant. Kan setningen stå i en avisartikkel om caset uten å endre noe i analysen, hører den ikke hjemme i besvarelsen.",
    },
    {
      question: "Hva er det første grepet i en oppgave med tekstvedlegg?",
      options: ["Å spørre hvem som taler, til hvem og med hvilken interesse", "Å oppsummere hva utdragene handler om, i egne ord", "Å vurdere om påstandene i utdragene er faktisk riktige", "Å finne ut hvor og når utdragene opprinnelig ble skrevet"],
      explanation: "Avsenderen er en del av materialet, ikke en ramme rundt det, og interessen forklarer hvorfor framstillingen ser ut som den gjør. Å vurdere om utdragene stemmer, er å bytte oppgave — analysen gjelder hva framstillingen gjør.",
    },
    {
      question: "Hva bør landingen i en anvendelsesoppgave inneholde?",
      options: ["Hva analysen fikk øye på, og gjerne hva begrepene ikke fanget", "En oppsummering av hvert begrep som ble brukt underveis", "En vurdering av om utfallet i caset var rimelig eller ikke", "Et forslag til hvordan situasjonen i caset kan løses best"],
      explanation: "Å si hva verktøyet ikke rekker er en presisjonsmarkør og er nettopp den kritiske refleksjonen over egen anvendelse som løfter svaret. En oppsummering gjentar bare, og å felle dom over caset er å bytte sjanger.",
    },
  ],
  'sgo1001-8-4': [
    {
      question: "Hvilke to feil er de vanligste i sensorveiledningenes beskrivelser?",
      options: ["Definisjon uten eksempel, og rent referat uten drøfting", "Flat definisjon, og manglende kobling til kjernebegrepene", "Ensidig komparasjon, og empirisk briljering i caseoppgaver", "Irrelevante momenter, og ubalanse mellom svarene i settet"],
      explanation: "De to hyppigste er at begrepet defineres uten et konkret tilfelle, og at pensum gjengis uten at kandidaten tar stilling. De andre feilene er reelle, men ingen av dem er beskrevet som like gjennomgående.",
    },
    {
      question: "Hva er varsellampen for at et svar mangler eksempel?",
      options: ["At det ikke står et sted, en vare, en aktør eller en hendelse i svaret", "At svaret er kortere enn ordgrensen tillater i den aktuelle delen", "At definisjonen er hentet fra en annen forfatter enn pensumets", "At svaret bruker begreper uten å oppgi hvem som har utviklet dem"],
      explanation: "Et konkret eksempel har alltid et hva eller hvor. Mangler noe slikt, er eksempelet borte — og står stedsnavnet der uten en setning om hva det viser, er eksempelet nevnt og ikke brukt.",
    },
    {
      question: "Hvordan kjenner du igjen en flat definisjon?",
      options: ["Ved at den kunne stått i en ordbok, uten avgrensning mot nabobegrepet", "Ved at den er lengre enn nødvendig og bruker for mange fagord", "Ved at den mangler henvisning til hvilket kapittel den er hentet fra", "Ved at den er formulert med kandidatens egne ord i stedet for pensums"],
      explanation: "Feilen er ikke at definisjonen er gal, men at den ikke treffer den bruken pensum har — avgrensningen mot nabobegrepet mangler. Egne ord er tvert imot ønsket, så lenge presisjonen er der.",
    },
    {
      question: "Hva er varsellampen for at et langsvar mangler drøfting?",
      options: ["At ingen setning i svaret kan bestrides av en fornuftig person", "At svaret er kortere enn tusen ord og dermed ikke fyller rammen", "At kandidaten ikke har brukt uttrykk som «på den ene siden»", "At redegjørelsen tar mer enn halvparten av besvarelsen"],
      explanation: "Drøfting kjennetegnes av at det står en påstand som kan motsis. Faste vendinger og bestemte lengdeforhold er formelle trekk som kan være til stede i et rent referat også.",
    },
    {
      question: "Hva er varsellampen for manglende grep i drøftingen?",
      options: ["At avsnittene kan byttes om uten at noe blir dårligere", "At kandidaten trekker en konklusjon leseren ikke ventet", "At svaret inneholder flere momenter enn det er plass til", "At innledningen ikke sier hva svaret skal handle om"],
      explanation: "Et svar med grep har en rekkefølge som ikke kan snus, fordi hvert avsnitt bygger på det forrige. Mange momenter er ikke i seg selv problemet — problemet er at de ikke er bundet sammen.",
    },
    {
      question: "Hva er den mest alvorlige feilen i en sammenligningsoppgave?",
      options: ["At bare det ene leddet får behandling og eksempel", "At kandidaten velger andre akser enn pensum bruker", "At likhetene får mer plass enn forskjellene i svaret", "At sammenligningen mangler en konklusjon til slutt"],
      explanation: "Ensidig komparasjon gjør at halve oppgaven står ubesvart, uansett hvor godt den andre halvdelen er skrevet. Selvvalgte akser er lov og ofte bedre, så lenge begge ledd har svar på dem.",
    },
    {
      question: "Hvordan retter du en ensidig komparasjon?",
      options: ["Ved å flytte plass fra det sterke leddet til det svake", "Ved å skrive mer om det leddet du kjenner best fra før", "Ved å legge til flere akser slik at svaret blir bredere", "Ved å avslutte med en oppsummering av begge leddene"],
      explanation: "Feilen rettes ved omfordeling, ikke ved påbygg: det svake leddet trenger behandling og eksempel på hver akse. Flere akser gjør bare at enda flere av dem mangler et av leddene.",
    },
    {
      question: "Hva innebærer feil #5?",
      options: ["Å ramse opp begreper uten å velge noen å stå for", "Å bruke begreper som ikke står i pensumlitteraturen", "Å definere flere begreper enn oppgaven ba om", "Å bytte om rekkefølgen på momentene i svaret"],
      explanation: "Helgardering ser ut som grundighet og leses som usikkerhet, fordi begrepene nevnes uten å brukes. Den dyreste varianten er å skrive om alle tre vendingene når oppgaven ba om én.",
    },
    {
      question: "Hvorfor er irrelevante momenter dyrere i et kortsvar enn i et langsvar?",
      options: ["Fordi 200 ord er så knapt at momentet fortrenger eksempelet", "Fordi sensor vurderer kortsvar strengere enn langsvar", "Fordi kortsvaret ikke har plass til en innledning i det hele tatt", "Fordi Del 1 teller mer av karakteren enn Del 2 gjør"],
      explanation: "Irrelevante momenter trekker ned i begge deler, men i kortsvaret er plassen selv straffen. Del 1 teller 40 prosent, altså mindre enn Del 2 — vektingen er ikke forklaringen.",
    },
    {
      question: "Når blir et kjernebegrepsløft til en feil?",
      options: ["Når det ikke endrer noe i analysen og bare nevner et ord", "Når det står i innledningen i stedet for i konklusjonen", "Når det trekker inn skala i en oppgave som handler om sted", "Når det kommer i tillegg til et case som allerede er brukt"],
      explanation: "Et innholdsløst løft er et irrelevant moment og trekker ned der kandidaten trodde det ville trekke opp. Plasseringen er fri, og hvilket av de tre kjernebegrepene du bruker, avgjør ikke om løftet teller.",
    },
    {
      question: "Hva kjennetegner feil #9?",
      options: ["At kandidaten kan mye om caset og lite om begrepene", "At kandidaten bruker et case som ikke står i pensum", "At kandidaten beskriver caset uten å oppgi noen kilde", "At kandidaten velger et case som er for lite kjent"],
      explanation: "I anvendelsesoppgaver vurderes begrepsanvendelsen, og detaljkunnskap om caset gir ingen uttelling i seg selv. Egne og nyere caser premieres tvert imot, så lenge begrepene faktisk brukes på dem.",
    },
    {
      question: "Hvordan rettes en ubalansert besvarelse?",
      options: ["Med klokka, ikke i teksten — den kan ikke rettes i selve svaret", "Ved å korte ned det sterkeste svaret slik at svarene blir jevne", "Ved å skrive et fjerde kortsvar som sikkerhetsmargin", "Ved å bruke samme antall ord på hvert av de fem svarene"],
      explanation: "Ubalanse oppstår av tidsbruk og må forebygges med harde tidsgrenser per svar. Å korte ned et godt svar hjelper ikke, og et fjerde kortsvar gir ingen uttelling og stjeler tid fra den delen som teller mest.",
    },
    {
      question: "Hva er varsellampen for empirisk briljering?",
      options: ["At en setning kunne stått i en avisartikkel om caset", "At kandidaten kjenner caset bedre enn pensum gjør", "At caset er hentet fra nyhetsbildet det siste året", "At caset beskrives før begrepene er blitt definert"],
      explanation: "Testen er om setningen gjør analytisk arbeid: en opplysning er relevant når begrepet trenger den for å kunne anvendes. Rekkefølgen mellom case og begrep er en smakssak, ikke en feil.",
    },
    {
      question: "En kandidat skriver at «governance betyr styring». Hvilken feil er det?",
      options: ["Flat definisjon som ikke treffer pensumbruken", "Definisjon uten eksempel, siden ingen case er nevnt", "Ensidig komparasjon, siden government ikke er nevnt", "Irrelevant moment, siden oversettelsen ikke er nødvendig"],
      explanation: "Setningen sletter hele skillet mot government, og det skillet er som regel selve oppgaven. Svaret mangler nok også eksempel, men det er den upresise definisjonen som gjør at det ikke kan reddes med to setninger til.",
    },
    {
      question: "Er et svar uten noen av de ti feilene et toppsvar?",
      options: ["Nei — det er et svar på god, og løftet mangler fortsatt", "Ja — når feilene er unngått, er kravene til beste oppfylt", "Nei — det havner på minimumsnivå uten et konkret eksempel", "Ja — forutsatt at svaret holder seg innenfor ordgrensen"],
      explanation: "Feilunngåelse er karakterforsikring, ikke karakterløft. Det som flytter et svar videre er grepet, caset som bygger argumentet og kjernebegrepsløftet — og ingen av dem står i feilregisteret.",
    },
    {
      question: "Hva er den riktige måten å bruke feilregisteret på?",
      options: ["Som en sjekkliste i gjennomlesingen, ikke under skrivingen", "Som en disposisjonsmal for hvordan svaret bør bygges opp", "Som en huskeliste over hvilke begreper som må være med", "Som et grunnlag for å vurdere hvilke oppgaver du bør velge"],
      explanation: "Skriver du med ti feilkoder i hodet, blir svaret forsiktig, og forsiktige svar drøfter sjelden. Registeret hører til de siste minuttene per svar, der det tar under to minutter å gå gjennom.",
    },
  ],
  'sgo1001-8-5': [
    {
      question: "Hva måler sårbarhet i den forståelsen faget bruker?",
      options: ["Graden av negative konsekvenser en klimapåkjenning gir for et sted", "Hvor kraftig den klimatiske hendelsen som treffer stedet faktisk er", "Sannsynligheten for at en ekstrem værhendelse rammer et område", "Hvor stor del av befolkningen som bor i de mest utsatte områdene"],
      explanation: "Sårbarhet er en egenskap ved samfunnet som rammes, ikke ved været som rammer det. Andelen bosatte i utsatte områder er eksponering, og sannsynligheten for hendelsen hører til risikobegrepet.",
    },
    {
      question: "Hva er forskjellen på eksponering og følsomhet?",
      options: ["Eksponering er om enheten er der, følsomhet hvor mye den påvirkes", "Eksponering gjelder bygninger, mens følsomhet gjelder mennesker", "Eksponering måles av staten, mens følsomhet vurderes lokalt", "Eksponering gjelder akutte hendelser, følsomhet gradvise endringer"],
      explanation: "De to komponentene svarer på ulike spørsmål: plassering og påvirkningsgrad. To bygg kan være like eksponert og likevel ha ulik følsomhet, og skillet går verken mellom bygg og mennesker eller mellom hendelsestyper.",
    },
    {
      question: "Hvorfor holder det ikke å konstatere at sårbarhet er ujevnt fordelt?",
      options: ["Fordi poenget gjør arbeid først når det sies hva fordelingen følger", "Fordi påstanden er omstridt og krever en kilde for å kunne brukes i svaret", "Fordi ujevn fordeling gjelder tilpasningskapasitet og ikke sårbarhet", "Fordi fordelingen varierer for mye mellom land til å kunne beskrives"],
      explanation: "Fordelingen følger inntekt, eiendomsforhold, planhistorie og tilgang til beslutninger, og det er nettopp derfor den kan endres politisk. Blir poenget stående som en konstatering, får det ingen konsekvens i analysen.",
    },
    {
      question: "Hva kjennetegner et case som bygger argumentet i denne oppgaven?",
      options: ["At det forklarer en forskjell mellom enheter som var like utsatt", "At det beskriver hendelsen så presist at leseren kjenner den igjen", "At det er hentet fra et område kandidaten selv kjenner svært godt", "At det er så nytt som mulig og helst fra det siste årets hendelser"],
      explanation: "Begrepene får noe å gjøre først når det finnes en forskjell å forklare. En presis beskrivelse av selve hendelsen er nettopp det svaret på godt nivå gjør, og det holder ikke til toppen.",
    },
    {
      question: "Hva er feiltilpasning?",
      options: ["Et tiltak som virker, men flytter sårbarheten videre i tid eller rom", "Et tiltak som ikke gir den beskyttelsen det opprinnelig var ment å gi", "Et tiltak som koster mer å gjennomføre enn skaden det forhindrer", "Et tiltak som møter så mye motstand at det ikke blir gjennomført"],
      explanation: "Feiltilpasning er ikke et mislykket tiltak. En flomvoll kan beskytte akkurat som planlagt, sende vannet nedstrøms og gjøre videre utbygging bak vollen politisk lettere — den virket, og det er nettopp problemet.",
    },
    {
      question: "Hva skiller tilpasningskapasitet fra faktisk tilpasning?",
      options: ["Kapasitet er en evne, tilpasning er at evnen faktisk blir brukt", "Kapasitet gjelder kommuner, mens tilpasning gjelder den enkelte", "Kapasitet handler om penger, mens tilpasning handler om kompetanse", "Kapasitet gjelder på lang sikt, mens tilpasning gjelder her og nå"],
      explanation: "Et samfunn kan ha ressursene og likevel ikke bruke dem, fordi kostnaden kommer nå og gevinsten senere. Skillet går på evne mot handling, ikke på aktørtype eller på hva slags ressurs det er snakk om.",
    },
    {
      question: "Hva må en tiltaksdel i denne oppgaveformen inneholde for å nå toppen?",
      options: ["En rangering med begrunnelse, og minst ett utskrevet forbehold", "En oversikt over alle tiltakstyper som er aktuelle for lokalsamfunn", "En vurdering av hva tiltakene vil koste å gjennomføre i praksis", "En anbefaling om hvilken klimapolitikk landet samlet bør føre"],
      explanation: "Rangeringen er selve drøftingen, og den må begrunnes med begrepene: hva virker på eksponering, hva på følsomhet, hva på kapasitet. En liste over mulige tiltak er ikke en anbefaling.",
    },
    {
      question: "Hvorfor ble modellbesvarelsen på godt nivå ikke løftet videre?",
      options: ["Fordi den drøftende bestillingen ble besvart med en tiltaksliste", "Fordi begrepene var definert unøyaktig og ikke traff pensumbruken", "Fordi den ikke hadde noe konkret case fra et norsk lokalsamfunn", "Fordi den var for kort til å dekke alle delene av oppgaveteksten"],
      explanation: "Begrepene var riktige og caset var der; det som manglet, var at tiltakene ble rangert og begrunnet. Lengden i seg selv er ikke et kriterium — det er hva plassen brukes til.",
    },
  ],
  'sgo1001-8-6': [
    {
      question: "Hva er kjernedistinksjonen mellom de to rammeverkene?",
      options: ["De stiller ulike spørsmål: hvordan kjeden styres, mot hvor verdien tas", "Det ene er en nyere betegnelse som gradvis har erstattet det andre", "Det ene gjelder industrivarer, mens det andre også dekker tjenester", "Det ene er utviklet i Europa, og det andre i Nord-Amerika på samme tid"],
      explanation: "Verdikjedeperspektivet ser koordinering og styring; nettverksperspektivet ser makt og verdifangst, og regner stat og arbeidskraft som aktører. At det ene bare skulle være en nyere betegnelse på det andre, er den dokumenterte fellen i dette stoffet.",
    },
    {
      question: "Hva er forskjellen på oppgradering og verdifangst?",
      options: ["Oppgradering er å flytte seg, verdifangst er å sitte igjen med mer", "Oppgradering gjelder bedrifter, mens verdifangst gjelder hele regioner", "Oppgradering er et mål, mens verdifangst er et middel for å nå det", "Oppgradering skjer i produksjonen, verdifangst i markedsføringen"],
      explanation: "En leverandør kan oppgradere reelt og likevel sitte igjen med det samme, fordi konkurrentene oppgraderer samtidig og konkurransen går på effektivitet. Det er nettopp derfor oppgradering ikke er tilstrekkelig som mål på utvikling.",
    },
    {
      question: "Hva er de tre formene for oppgradering?",
      options: ["Prosess, produkt og funksjon", "Marked, modul og relasjon", "Skaping, økning og fangst", "Territorium, nettverk og samfunn"],
      explanation: "Prosessoppgradering er å produsere mer effektivt, produktoppgradering å lage mer avanserte varer, og funksjonsoppgradering å ta over nye ledd som design eller merkevare. De øvrige begrepsrekkene hører til styringsformene, verdibegrepene og innvevingsformene.",
    },
    {
      question: "Hva viser det at en kjedeleder kan styre uten å eie fabrikkene?",
      options: ["At makt i en kjede kan ligge i koordinering og i markedstilgang", "At det ikke lenger lønner seg å eie fabrikkene man produserer i", "At produksjonen er flyttet fra global nord til global sør", "At leverandørene har fått større frihet til å velge kunder"],
      explanation: "Spesifikasjoner, standarder og leveringsfrister gir kontroll uten eierskap, og det er kjennetegnet på en oppkjøperdrevet kjede. Poenget gjelder hvor makten ligger, ikke hvor lønnsomt eierskap er.",
    },
    {
      question: "Hva forklarer innveving i denne sammenhengen?",
      options: ["Hvorfor to regioner med samme rolle i kjeden kan få ulikt utfall", "Hvorfor selskaper velger å plassere produksjonen i bestemte land", "Hvorfor noen varer er dyrere å produsere enn andre varer er", "Hvorfor kjeder over tid får flere ledd enn de hadde tidligere"],
      explanation: "Er koblingen til lokale underleverandører, utdanning og myndigheter tynn, forsvinner gevinsten med kontrakten. Lokaliseringsvalg forklares av andre begreper, som lønns- og reguleringsforskjeller.",
    },
    {
      question: "Hva kjennetegner en skarp landing på beste nivå?",
      options: ["At den tar klart parti etter at motargumentet er prøvd", "At den avslutter uten å nevne innvendinger noe sted i svaret", "At den er kortere og mer poengtert enn resten av besvarelsen", "At den gjentar påstanden fra innledningen med de samme ordene"],
      explanation: "Forbehold er et verktøy, ikke obligatorisk garnityr, men motargumentet må være behandlet et sted — i modellbesvarelsen står det i avsnittet før landingen. En påstand som aldri er prøvd, er en mening.",
    },
    {
      question: "Hva kjennetegner midtnivå-besvarelsen i dette kapitlet?",
      options: ["Den drøfter reelt, men tar ikke stilling og mangler løftet", "Den lister fordeler og ulemper uten å knytte dem til begreper", "Den har feil i definisjonene, men god struktur ellers", "Den behandler bare det ene av de to rammeverkene i oppgaven"],
      explanation: "Midtnivået setter opp sider mot hverandre og lander på et riktig poeng om verdifangst — det er en reell drøfting. Å liste fordeler og ulemper uten kobling til begrepene er det svaret på godt nivå gjør.",
    },
    {
      question: "Hvorfor ble modellbesvarelsen på godt nivå ikke løftet videre?",
      options: ["Fordi det ene leddet i sammenligningen sto uten innhold", "Fordi den manglet begreper fra verdikjedeperspektivet", "Fordi den brukte et case som ikke passet til oppgaven", "Fordi den tok stilling uten å ha belegg for standpunktet"],
      explanation: "Verdikjeden fikk fem navngitte styringsformer, nettverket fikk to setninger uten avsender — det er ensidig komparasjon. Begrepene fra kjedesiden var tvert imot alle på plass; problemet var at de ble listet og ikke brukt.",
    },
  ],
  'sgo1001-8-7': [
    {
      question: "Hva er den vanligste feilen i «velg én vending»-oppgaven?",
      options: ["At kandidaten skriver om alle tre vendingene i stedet for én", "At kandidaten velger den vendingen som er vanskeligst å belegge", "At kandidaten blander sammen rekkefølgen på de tre vendingene", "At kandidaten glemmer å tidfeste når vendingen fant sted"],
      explanation: "Oppgaven ber om ett valg fulgt i dybden, og bredde koster plassen dybden trengte. Rekkefølge og tidfesting er opplysninger som betyr lite ved siden av det å vise hva vendingen flyttet.",
    },
    {
      question: "Hva må en redegjørelse for en vending inneholde?",
      options: ["Et tydelig fra og til — hva faget gjorde før og etter", "En tidfesting av når vendingen begynte og når den var over", "En liste over de sentrale forskerne som deltok i den", "En vurdering av om vendingen var til gagn for faget"],
      explanation: "En vending er en bevegelse, og uten begge endepunktene blir redegjørelsen en tidslinje. «Fra»-siden er den halvparten flest hopper over, fordi den nye posisjonen er den pensum bruker.",
    },
    {
      question: "Hva var utgangspunktet den kvantitative vendingen vendte seg fra?",
      options: ["Regionalgeografiens beskrivelse av den enkelte regionen", "Naturdeterminismens forklaring av samfunn ut fra klimaforhold", "Den marxistiske geografiens vekt på ulikhet og klasseforhold", "Den humanistiske geografiens vekt på mening og tilknytning"],
      explanation: "Hos Hartshorne var områdedifferensiering fagets kjerneoppgave, og tilnærmingen var idiografisk. Oppgjøret med naturdeterminismen er et eldre kapittel, og de to andre posisjonene kom etter den kvantitative vendingen.",
    },
    {
      question: "Hva er et konkret eksempel i en faghistorisk oppgave?",
      options: ["En spørsmålstype faget kunne stille etterpå, men ikke før", "Et sted der forskningen etter vendingen ble utført i praksis", "En årstallsangivelse for når den nye tilnærmingen slo gjennom", "Et navn på en av de forskerne som drev vendingen framover"],
      explanation: "Det som endret seg, var hva faget kunne spørre om, og det er derfor spørsmålstypen er den riktige konkretiseringen her. Navn og årstall er nyttige opplysninger, men de viser ikke hva vendingen flyttet.",
    },
    {
      question: "Hvilken innvending mot den kvantitative vendingen bærer den radikale?",
      options: ["At modellene beskrev mønstre uten å spørre hvem de tjente", "At modellene var for kompliserte til å kunne etterprøves", "At mening og tilknytning ikke lot seg måle med instrumentene", "At forskeren ikke gjorde sin egen posisjon eksplisitt"],
      explanation: "Å vise at fattigdom er romlig konsentrert er ikke det samme som å forklare hvorfor, og hos Harvey blir ulikhet forstått som romlig produsert. Innvendingen om mening bærer den kulturelle vendingen, og posisjonskravet hører til situert kunnskap.",
    },
    {
      question: "Hvordan bør forholdet mellom de tre vendingene framstilles?",
      options: ["Som lag der alle tre er i bruk i faget i dag", "Som en trapp der den nyeste er den mest fullverdige", "Som tre atskilte epoker med hver sin klare slutt", "Som tre parallelle retninger uten kontakt med hverandre"],
      explanation: "Vendingene har lagt seg oppå hverandre, og hver av dem har både en arv og en blindsone. Trappeframstillingen er dessuten verdiladet, og det er en framstillingsmåte faget selv har forlatt.",
    },
    {
      question: "Hva er kravet til den avveiende landingen i denne modellbesvarelsen?",
      options: ["At selve avveiningen begrunnes: hva er beholdt, og hva er forlatt", "At den unngår å ta stilling, siden faghistorie ikke har fasitsvar", "At den nevner alle de tre vendingene for å vise sammenhengen mellom dem", "At den viser til hvilke deler av pensum vurderingen bygger på"],
      explanation: "En avveiende landing kan gi toppkarakter når den sier hva som avgjør hvilken vei saken trekker. «Det er sammensatt» uten grunner er manglende grep i ny drakt.",
    },
    {
      question: "Hva er kjernebegrepsløftet i en faghistorisk oppgave?",
      options: ["Å vise hva slags rom faget kunne se før og etter vendingen", "Å knytte vendingen til et konkret sted der den fikk følger", "Å plassere vendingen på riktig skalanivå i faghistorien", "Å vise hvordan vendingen endret fagets syn på egne grenser"],
      explanation: "Rombegrepet er fagets nav, og en vending endrer hva slags rom analysen kan arbeide med — regionen som flate mot avstand målt i tid og kostnad. Løftet skal endre noe i analysen, ikke bare nevne et kjernebegrep.",
    },
  ],
};

export default quizData_sgo1001;
