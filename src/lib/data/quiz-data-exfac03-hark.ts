import type { QuizQuestion } from './quiz-data';

const quizData_exfac03hark: Record<string, QuizQuestion[]> = {
  'exfac03-hark-0-1': [
    {
      question: "Hva består eksamensmappa i EXFAC03-HARK av, slik den er dokumentert i H2024?",
      options: ["Tre arbeider: to individuelle oppgaver og én gruppeoppgave, alle levert samlet", "To arbeider: én individuell oppgave og ett gruppearbeid av samme omfang", "Ett essay valgt blant flere alternativer, levert som en samlet PDF-fil", "Fire arbeider, der det siste er en muntlig framføring foran seminaret"],
      explanation: "Riktig svar er tre arbeider: to individuelle og ett i gruppe. Alternativet med ett essay er det utgåtte regimets form, og den er dokumentert i fem av terminene, men den gjelder ikke lenger. De to andre tallene finnes ikke i materialet.",
    },
    {
      question: "Hvor mange eksamensterminer er dokumentert i arkivet for dette emnet?",
      options: ["Seks terminer, fire ordinære og to utsatte, fra høsten 2020 til høsten 2024", "Fire terminer, siden bare de ordinære terminene er regnet med i tellingen av eksamensavviklinger", "Elleve terminer, ett for hver oppgavetekst-forekomst i materialet fra UiO og i indeksene", "Ti terminer, tilsvarende antallet unike oppgavetekster som er bevart"],
      explanation: "Riktig svar er seks terminer. Tallet fire er antallet ordinære terminer og også antallet sensorveiledninger, og det er nettopp den forvekslingen distraktoren tester. Tallene elleve og ti teller oppgavetekster, ikke terminer — og enheten er hele forskjellen.",
    },
    {
      question: "Hvor mange sensorveiledninger finnes i arkivet, og hva sier det om de øvrige terminene?",
      options: ["Fire, slik at to av de seks terminene bare har oppgavetekst uten veiledning", "Seks, altså én for hver termin som er dokumentert i emnemappa", "To, mens de fire andre terminene er dokumentert med rene oppgavesett", "Fire, og de dekker alle terminene siden veiledningene gjelder flere år og over flere år"],
      explanation: "Riktig svar er fire sensorveiledninger, fra H2020, H2021, H2022 og H2024. De to øvrige terminene er rene oppgavesett uten veiledning, og ingen påstand om hva sensor belønner, kan bygge på dem. Alternativet om at veiledninger gjelder flere år, tester en antakelse arkivet ikke gir grunnlag for.",
    },
    {
      question: "Hva er forskjellen på en oppgavetekst-forekomst og en unik oppgavetekst?",
      options: ["En forekomst er én tekst gitt i én termin; unike tekster teller hver tekst bare én gang", "En forekomst er et helt oppgavesett, mens en unik tekst er ett enkelt oppgavepunkt", "En forekomst gjelder gjeldende regime, en unik tekst gjelder det utgåtte", "Det er to navn på det samme, og forskjellen er bare hvilken kilde som brukes"],
      explanation: "Riktig svar er at forekomster telles per termin, mens unike tekster teller hver tekst én gang uansett hvor mange ganger den er gitt. Arkivet har elleve forekomster og ti unike tekster, fordi to tekster er gitt ordrett to ganger. Alternativet om regimer tester en inndeling som ikke har noe med telleenheten å gjøre.",
    },
    {
      question: "Hva er 1 750 ord per individuelt arbeid?",
      options: ["En slutning: femtusenordsgrensen minus gruppeoppgavens grense, delt på to arbeider", "Et krav oppgitt av UiO for hvert av de to individuelle arbeidene i mappa", "En grense sensorveiledningen fra H2024 setter for begge de individuelle arbeidene som skal leveres i mappa", "Et anbefalt minstemål som sensor bruker når mappa vurderes samlet til slutt sammen med gruppeoppgaven"],
      explanation: "Riktig svar er at tallet er regnet fram og ikke oppgitt noe sted: det er femtusenordsgrensen fra UiOs emneside minus gruppeoppgavens grense på 1 500 ord, delt på to. De tre andre alternativene gjør slutningen om til et krav, og det er nettopp den lesningen boka advarer mot.",
    },
    {
      question: "Hva sier sensorveiledningen fra H2024 om ordgrensen i gruppeoppgaven?",
      options: ["At den er 1 500 ord inkludert fotnoter, og at den tåler omtrent hundre ord over", "At den er 1 500 ord eksklusive fotnoter, og at overskridelser trekker ned", "At den er 1 750 ord, altså den samme som for de individuelle arbeidene", "At det ikke finnes noen ordgrense, siden formen kan velges fritt av gruppen eller av seminarlæreren"],
      explanation: "Riktig svar er 1 500 ord inkludert fotnoter, med litteraturliste i tillegg, og med uttrykkelig beskjed om at grensen tåler omtrent hundre ord over. Alternativet om at fotnoter kommer i tillegg, er nær sannheten og snur nettopp det som er presisert. Tallet 1 750 er en slutning om de individuelle arbeidene, ikke en oppgitt grense.",
    },
    {
      question: "Hvilket ledd bærer vekten i epokekarakteristikken?",
      options: ["Kontrastleddet, altså det som sier hva som skiller epoken fra den forrige", "Trekkleddet, siden det er der de fleste opplysningene om perioden hører hjemme", "Implikasjonsleddet, som er det eneste leddet sensorveiledningene nevner direkte", "Avgrensningsleddet, siden en epoke uten grenser ikke kan beskrives i det hele tatt"],
      explanation: "Riktig svar er kontrastleddet: det er halve bestillingen, og det er leddet som krever at kandidaten kan mer enn én periode. Sensorkravet fra H2020 gir rekkefølgen trekk, kontekst og implikasjoner, så et svar som bare gir trekkene, har svart på en tredel. De øvrige leddene finnes, men de bærer ikke vekten.",
    },
    {
      question: "Hva er hjertet i avgrensningsoppgaven?",
      options: ["Vurderingen av selve kategoriseringen av fag og framgangsmåter", "Definisjonen av humaniora, som må være presis og hentet fra pensum", "Oppstillingen av humaniora og naturvitenskap i to spalter med kjennetegn", "Gjennomgangen av hvilke fag som hører til humaniora ved dagens universitet"],
      explanation: "Riktig svar er tredje ledd: oppgaven ber ikke om at du forsvarer skillet, men om at du vurderer inndelingen. Alternativet om to spalter er nær sannheten og beskriver nettopp den besvarelsen som har hoppet over drøftingen. Definisjonen er inngangen, ikke svaret.",
    },
    {
      question: "Hva er den innebygde fella i den lange linjen som oppgavesjanger?",
      options: ["Å behandle to perioder grundig og la de øvrige fem trinnene bli stående igjen", "Å velge en tendens som er for smal til å kunne følges gjennom flere perioder uten å bli for generell", "Å bruke for mange pensumbidrag, slik at framstillingen blir uoversiktlig", "Å begynne i nåtiden og arbeide bakover i stedet for å følge kronologien"],
      explanation: "Riktig svar er at sensorkravet fra H2022 er sjutrinns, og at et svar med to grundige og fem utelatte trinn ikke har besvart bestillingen. Samme veiledning sier dessuten at det innledende redegjørelsesleddet er «planke» og ikke skal spise brorparten. De øvrige alternativene beskriver problemer som finnes, men som ikke er sjangerens hovedfelle.",
    },
    {
      question: "Hva ber gruppeoppgaven gruppen om å formulere?",
      options: ["Ett åpent spørsmål til en digitalt tilgjengelig samling, som kan belyses med pensum", "En fullstendig oversikt over hva samlingen inneholder og hvordan den er ordnet for de besøkende", "En vurdering av om samlingen burde vært digitalisert i det hele tatt ut fra et bevaringshensyn", "Tre alternative spørsmål, der veilederen velger hvilket gruppen skal svare på"],
      explanation: "Riktig svar er ett åpent spørsmål som gruppen selv formulerer og belyser med emnets perspektiver og metoder. Alternativet om en oversikt over samlingen tester fella med å levere et oppslag i stedet for et spørsmål. Alternativet om digitaliseringen bør skje, gjør et åpent drøftingsspørsmål om til et standpunkt oppgaven ikke ber om.",
    },
    {
      question: "Hvorfor inneholder denne boka quiz og flashcards, når emnet aldri har hatt en flervalgsdel?",
      options: ["Fordi banken er skrevet av oss som lesehjelp for et pensum sensor selv kaller for stort", "Fordi flervalgsdelen ble avviklet ved omleggingen og kan komme tilbake senere", "Fordi sensorveiledningene inneholder kontrollspørsmål som er gjort om til flervalg", "Fordi mappeformatet krever at kandidaten kan gjengi definisjoner presist under press"],
      explanation: "Riktig svar er at banken er bokas eget lesehjelpemiddel. Ingen av de seks dokumenterte terminene inneholder ett eneste flervalgsspørsmål, og delen har aldri eksistert. De tre andre alternativene ville alle påstått at formatet speiler noe på eksamen, og det gjør det ikke.",
    },
    {
      question: "Hva måler karakterbeskrivelsen fra A til F, ifølge den ene veiledningen som gjengir den?",
      options: ["Vurderingsevne og selvstendighet, langs hele skalaen fra særs god til manglende", "Kunnskapsmengde og pensumdekning, målt mot hvor mye av lista som er brukt i den ferdige besvarelsen", "Språklig presisjon og formell korrekthet i referanser og litteraturliste bakerst i oppgaven", "Antall momenter fra sensorveiledningen som besvarelsen faktisk har fått med underveis i teksten"],
      explanation: "Riktig svar er vurderingsevne og selvstendighet. Kunnskapsmengde nevnes ikke i en eneste av de seks beskrivelsene, og det er nettopp derfor alternativet om pensumdekning er den viktigste distraktoren å avvise. Beskrivelsen står bare i sensorveiledningen fra H2020; de tre andre veiledningene har ingen.",
    },
  ],
  'exfac03-hark-0-2': [
    {
      question: "Hva er forskjellen på bestillingen og problemstillingen?",
      options: ["Bestillingen er gitt av oppgaven; problemstillingen er spørsmålet du selv velger", "Bestillingen er tittelen på oppgaven, problemstillingen er innledningens siste setning", "Bestillingen gjelder redegjørelsesleddet, problemstillingen gjelder drøftingsleddet", "De er to ord for det samme, men brukes i ulike sjangre av oppgaver"],
      explanation: "Riktig svar er at bestillingen er felles for alle og ikke kan forhandles, mens problemstillingen er ditt eget valg innenfor den. Alternativet om at de gjelder hvert sitt ledd, er nær sannheten og feil: problemstillingen styrer hele teksten. En tekst som gjentar bestillingen som problemstilling, har ikke gjort noe valg.",
    },
    {
      question: "Hvor skal problemstillingen stå i besvarelsen?",
      options: ["I første avsnitt, fordi det er den leseren måler resten av teksten mot", "I avslutningen, slik at den kan formuleres presist etter at analysen er gjort", "I overskriften, slik at sensor ser den før teksten i det hele tatt begynner", "Midt i teksten, der overgangen fra redegjørelse til drøfting finner sted"],
      explanation: "Riktig svar er første avsnitt: uten problemstillingen tidlig har de første avsnittene ingen retning, og sensor har ingenting å måle teksten mot. Alternativet om avslutningen er nær sannheten i skriveprosessen — den kan godt formuleres sist — men den skal stå først i den ferdige teksten.",
    },
    {
      question: "Hvilke tre grep består en avgrensning av?",
      options: ["Avgrensning i tid, i felt og i spørsmålstype", "Avgrensning i tid, i omfang og i valg av pensumlitteratur", "Avgrensning i tema, i metode og i valg av kilder fra arkivet", "Avgrensning i periode, i sjanger og i hvilken sensorveiledning som brukes"],
      explanation: "Riktig svar er tid, felt og spørsmålstype. Alternativet om omfang er nær sannheten fordi ordbudsjettet henger tett sammen med avgrensningen, men budsjettet er verktøyet, ikke et av de tre grepene. Svarene som nevner metode, kilder og valg av sensorveiledning, blander inn spørsmål som gjelder framgangsmåten, ikke avgrensningen.",
    },
    {
      question: "Hva kjennetegner et åpent spørsmål?",
      options: ["At det kan besvares på flere forsvarlige måter, som kan veies mot hverandre", "At det er formulert vidt nok til å romme hele pensumlista i besvarelsen", "At det ikke har noe riktig svar, slik at enhver konklusjon er like god", "At det handler om nåtiden og derfor ikke kan avgjøres av historisk materiale"],
      explanation: "Riktig svar er at et åpent spørsmål har flere forsvarlige svar som kan begrunnes ulikt. Alternativet om at ingen svar er bedre enn andre, er den farligste forvekslingen: åpenhet betyr at svarene må begrunnes, ikke at begrunnelser er unødvendige. Bredde er heller ikke det samme som åpenhet.",
    },
    {
      question: "Hva er testen på om et spørsmål er lukket?",
      options: ["Om det kan besvares med ett tall, ett årstall eller ett navn", "Om det begynner med et spørreord i stedet for med et verb", "Om det handler om noe som allerede er behandlet i pensumlitteraturen", "Om sensorveiledningen oppgir et bestemt svar på nettopp det spørsmålet"],
      explanation: "Riktig svar er at et lukket spørsmål besvares med ett faktum og er ferdig i samme øyeblikk. Alternativet om spørreord er nær sannheten, siden åpne spørsmål ofte begynner med hva eller hvorfor, men formen alene avgjør ikke: «hvilket år» begynner med et spørreord og er likevel lukket.",
    },
    {
      question: "Hva sier sensorveiledningen fra H2022 om det innledende redegjørelsesleddet?",
      options: ["At det er «planke» og ikke skal spise brorparten av oppgaven", "At det bør utgjøre omtrent halvparten av den samlede besvarelsen", "At det kan utelates helt dersom drøftingen er tilstrekkelig grundig", "At det skal inneholde alle pensumbidragene kandidaten har lest"],
      explanation: "Riktig svar er at redegjørelsesleddet beskrives som «planke» og ikke skal ta hovedtyngden — andre og tredje ledd skal gjøre det. Dette er den mest presise disponeringsinstruksen i hele arkivet. Alternativet om at det kan utelates, går for langt: leddet skal være der, men det skal være kort.",
    },
    {
      question: "Hvordan er ordbudsjettet for et individuelt arbeid fordelt i denne boka?",
      options: ["Avgrensning 150, redegjørelse 500, drøfting 900 og landing 200 ord", "Avgrensning 100, redegjørelse 900, drøfting 500 og landing 250 ord", "Fire like store deler, slik at hvert ledd får omtrent 440 ord hver", "Innledning 200, hoveddel 1 200 og avslutning 350 ord, uten flere ledd"],
      explanation: "Riktig svar er fordelingen der drøftingsleddet er lengst. Alternativet som bytter om på 500 og 900, er nettopp den fordelingen «planke»-instruksen advarer mot. Fire like store deler ser rettferdig ut og ignorerer at leddene har ulik vekt i bestillingen.",
    },
    {
      question: "Hva er trivialitetsfellen?",
      options: ["En avgrensning så snever at det ikke lenger finnes noe å drøfte i teksten", "En problemstilling som er så vid at ingen kan besvare den innenfor budsjettet", "En innledning som gjentar bestillingen i stedet for å formulere et spørsmål", "Et pensumbidrag som brukes uten at det gjør noe arbeid i framstillingen"],
      explanation: "Riktig svar er den for smale avgrensningen: drøftingsleddet blir tynt fordi det ikke finnes to forsvarlige svar å veie. Testen er å spørre om noen med god grunn kunne svart noe annet enn deg. Den for vide problemstillingen er det motsatte problemet, mens innledningen som gjentar bestillingen og bidraget som ikke gjør arbeid, er andre feil med egne navn.",
    },
    {
      question: "Hva gjør en utskrevet begrensning til noe annet enn en unnskyldning?",
      options: ["At den inneholder en grunn til at det utelatte er utelatt", "At den står i avslutningen i stedet for i innledningen til teksten", "At den nevner hvor mange ord som ville vært nødvendig for å dekke resten", "At den viser til at pensumet er for stort til å kunne dekkes i sin helhet"],
      explanation: "Riktig svar er grunnen: «arkeologiens tidfesting ville krevd en egen tekst» er en vurdering, mens «på grunn av plassmangel rakk jeg dessverre ikke» er en unnskyldning. Alternativet om pensumets størrelse er nær sannheten, men en generell henvisning til pensummengden begrunner ikke akkurat din avgrensning.",
    },
    {
      question: "I hvor mange av mappas oppgaver er avgrensning og problemstilling et eksplisitt krav?",
      options: ["I to av mappas tre oppgaver, slik den ene dokumenterte mappeeksamenen er skrevet", "I alle tre oppgavene, siden kravet gjelder mappa som helhet", "I én av tre oppgaver, nemlig den faghistoriske individuelle oppgaven", "I ingen av dem, siden kravet bare er implisitt i essayformatet"],
      explanation: "Riktig svar er to av mappas tre oppgaver i H2024, som er den ene terminen vi har fra dagens form. Alternativet om alle tre er nær sannheten og går ett skritt for langt — og det skrittet gjør en telling om til en generalisering.",
    },
    {
      question: "Hva vil det si å avgrense i felt?",
      options: ["Å bestemme hvilket fag, hvilken institusjon eller hvilke kilder teksten handler om", "Å bestemme hvilket fagområde ved universitetet oppgaven skal leveres til", "Å velge hvilke deler av pensumlista som skal brukes i besvarelsen", "Å avgjøre om teksten skal skrives som redegjørelse eller som drøfting"],
      explanation: "Riktig svar er valget av fag, institusjon eller kildetype. Alternativet om pensumutvalg er nær sannheten og gjelder noe annet: hvilke bidrag du bruker, følger av avgrensningen, men er ikke selve avgrensningen. De to andre blander sammen levering og sjanger med saken teksten handler om.",
    },
    {
      question: "Hva er den vanligste konsekvensen av å skrive et hvorfor-spørsmål og svare med kjennetegn?",
      options: ["Teksten besvarer en annen oppgave enn den den selv stilte i innledningen", "Teksten blir for kort, fordi kjennetegn krever færre ord enn forklaringer", "Teksten mister muligheten til å bruke pensumlitteratur i drøftingsleddet", "Teksten får en for smal avgrensning og havner dermed i trivialitetsfellen"],
      explanation: "Riktig svar er at teksten svarer på noe annet enn den lovet: et hvorfor-spørsmål krever grunner som kan veies, ikke en liste med trekk. Kontrollen er enkel — står det et hvorfor i innledningen, må det stå grunner i drøftingsleddet. De øvrige alternativene beskriver andre feil.",
    },
    {
      question: "Hva er poenget med å sette ordbudsjettet før du skriver?",
      options: ["At konsekvensene av en for vid problemstilling blir synlige før du har skrevet noe", "At du kan dokumentere overfor sensor hvordan du har fordelt arbeidet", "At teksten da automatisk holder seg innenfor grensen for hele mappa", "At du slipper å telle ord til slutt, siden fordelingen allerede er bestemt"],
      explanation: "Riktig svar er at budsjettet avdekker en for vid problemstilling tidlig: sju perioder på 500 ord gir sytti ord hver, og sytti ord rekker til en påstand uten begrunnelse. Alternativet om å slippe å telle er direkte galt — revisjonsrunden krever nettopp at du teller.",
    },
    {
      question: "Hva kjennetegner et vippe-tilfelle?",
      options: ["At bestillingen tåler mer enn én forsvarlig avgrensning, som ikke kan avgjøres av teksten alene", "At to studenter er uenige om hva bestillingen egentlig ber om", "At sensorveiledningen oppgir to alternative svar på samme oppgave", "At problemstillingen er formulert så vidt at flere temaer kan behandles"],
      explanation: "Riktig svar er at flere avgrensninger holder, slik at vurderingen flyttes fra hva du valgte til om du så prisen for valget. Alternativet om uenighet mellom studenter er nær sannheten og bommer på nivået: det er bestillingen som er åpen, ikke lesningen som er feil. Sensorveiledningene oppgir ingen alternative svar.",
    },
    {
      question: "Hva sier avgrensningsrubrikken at innledningen skal inneholde om det teksten ikke dekker?",
      options: ["At teksten selv skal si hva den ikke dekker", "At utelatelser bare skal nevnes dersom de gjelder sentrale deler av pensum", "At det utelatte skal listes opp punktvis til slutt i besvarelsen", "At utelatelser ikke bør nevnes, siden de trekker oppmerksomheten mot mangler"],
      explanation: "Riktig svar er at teksten selv skal si hva den ikke dekker. Alternativet om at utelatelser ikke bør nevnes, er den intuitive fella: en leser som ser at noe mangler, vet ellers ikke om du har tenkt på det eller valgt det bort — og valget er nettopp det som teller som vurdering.",
    },
    {
      question: "Hvorfor regner denne boka i ordbudsjett og ikke i tidsbudsjett?",
      options: ["Fordi mappa blir til over uker med innlevering, tilbakemelding og omskriving", "Fordi sensorveiledningene forbyr å oppgi hvor lang tid en oppgave skal ta", "Fordi ordgrensen er den eneste regelen som gjelder i begge eksamensregimene", "Fordi lesetid og skrivetid varierer for mye mellom studenter til å kunne anslås"],
      explanation: "Riktig svar er at eksamensformen ikke har noe klokkeslett å skrive mot: det som begrenser deg, er ordene. Alternativet om at ordgrensen gjelder begge regimer, er nær sannheten og feil — det utgåtte regimet oppga sidetall, ikke ordtall, og bare i én av terminene.",
    },
  ],
  'exfac03-hark-0-3': [
    {
      question: "I hvor mange av de fire sensorveiledningene finnes karakterbeskrivelsen fra A til F?",
      options: ["I én, nemlig veiledningen fra H2020; de tre andre har ingen karakterbeskrivelse", "I alle fire, siden beskrivelsen er UiOs generelle og gjelder alle emner", "I to, nemlig veiledningene fra H2020 og H2024, som er de mest utfyllende", "I ingen, siden karakterbeskrivelsen hører hjemme på emnesiden og ikke i veiledningene"],
      explanation: "Riktig svar er én av fire, veiledningen fra H2020. Alternativet om at den gjelder alle fire fordi den er UiOs generelle, er nær sannheten om skalaen og usant om arkivet: at en skala er generell, betyr ikke at den er gjengitt. Presisjonen betyr noe, fordi den avgjør hva boka kan hjemle i hva.",
    },
    {
      question: "Hva er de fire trinnene i aktiv pensumbruk?",
      options: ["Navngi bidraget, bruk påstanden, vis hvor den ikke treffer, og knytt tilbake til problemstillingen", "Navngi bidraget, gjengi hovedtanken, sammenlign med et annet bidrag, og konkluder", "Les bidraget, referer det presist, vurder kilden kritisk, og oppgi referansen korrekt", "Velg bidraget, plasser det i sin periode, forklar begrepet, og gi et eksempel"],
      explanation: "Riktig svar er de fire trinnene der det tredje — å vise hvor bidraget ikke treffer — er det de færreste gjør. Alternativet om å gjengi og sammenligne er nær sannheten og mangler nettopp trinnet som viser selvstendighet. Alternativet om korrekt referanse gjelder form, og orden i referansene veier ifølge H2024 mindre enn god tenkning.",
    },
    {
      question: "Hva er strykningstesten på et pensumbidrag?",
      options: ["Å stryke navnet og se om setningen mister noe av innholdet sitt", "Å stryke bidraget fra litteraturlista og se om teksten fortsatt henger sammen", "Å stryke alle bidrag som ikke står på pensumlista for inneværende semester", "Å stryke de bidragene som bare er nevnt i innledningen og ikke senere"],
      explanation: "Riktig svar er å stryke navnet og se om setningen mister noe: mister den ingenting, sto bidraget bare der. Alternativet om litteraturlista er nær sannheten i formen og bommer på hva som testes — det er bruken i teksten som avgjør, ikke oppføringen i lista.",
    },
    {
      question: "Hva sier sensorveiledningen fra H2024 om hva som skiller gode fra mindre gode oppgaver?",
      options: ["At studentene bruker pensum aktivt og viser forståelse", "At besvarelsen dekker alle elementene veiledningen nevner", "At referansene er ordentlig satt opp og følger én bestemt stil", "At framstillingen er språklig presis og fri for gjentakelser"],
      explanation: "Riktig svar er aktiv pensumbruk og vist forståelse — den eneste setningen i arkivet som med de ordene sier hva som skiller karakterene. Alternativet om full dekning motsies uttrykkelig av samme veiledning, som sier at det ikke er noe krav om å ha med alle elementene for å stå.",
    },
    {
      question: "Hva sier raushetskontrakten om det å bare bruke pensum?",
      options: ["At det ikke skal straffes; litteratur utenfor pensum vurderes positivt, men er intet krav", "At det trekker ned, siden bred litteraturbruk er et av belønningskriteriene", "At det er nødvendig, fordi kilder utenfor pensum ikke skal brukes i emnet", "At det avgjøres av seminarlæreren i hvert enkelt tilfelle underveis i semesteret"],
      explanation: "Riktig svar er at det ikke skal straffes, hjemlet i sensorveiledningen fra H2020. Alternativet om at det trekker ned, er den vanligste engstelsen og blir avvist direkte av samme veiledning. At bredde vurderes positivt og at fravær av bredde ikke straffes, er begge sanne samtidig.",
    },
    {
      question: "Hva er forskjellen på reproduksjon og selvstendighet i en besvarelse?",
      options: ["Reproduksjon gjengir stoffet; selvstendighet bruker stoffet til å svare på et spørsmål", "Reproduksjon bruker pensum; selvstendighet bruker litteratur utenfor pensumlista", "Reproduksjon er korrekt gjengivelse; selvstendighet er å være uenig med pensum", "Reproduksjon gjelder redegjørelsesleddet; selvstendighet gjelder bare avslutningen i hver enkelt tekst"],
      explanation: "Riktig svar er at selvstendighet er å gjøre noe med stoffet. Alternativet om uenighet er den farligste forvekslingen: selvstendighet krever ikke at du motsier pensum, bare at du gjør et begrunnet valg. En tekst som bare bruker pensum, kan være fullt selvstendig.",
    },
    {
      question: "Hva kreves for at en innvending skal telle i et drøftingsledd?",
      options: ["At den er skrevet fram i sin sterkeste form og deretter besvart", "At den er hentet fra et pensumbidrag og gjengitt med referanse", "At den avvises, slik at kandidatens eget standpunkt står uimotsagt til slutt", "At den nevnes kort, slik at teksten viser at andre syn finnes"],
      explanation: "Riktig svar er at innvendingen skal være reell og besvares. Alternativet om å nevne kort er nettopp forbeholdet, som koster ingenting og gir ingenting. En innvending som er svak med vilje, viser bare at forfatteren har valgt seg en motstander hun kunne slå.",
    },
    {
      question: "Hva er forskjellen på en drøftende og en beskrivende framstilling?",
      options: ["Den drøftende veier to lesninger, prøver en innvending og lander med en grunn", "Den drøftende er lengre, siden den må dekke flere posisjoner enn den beskrivende", "Den drøftende bruker flere pensumbidrag enn den beskrivende gjør", "Den drøftende stiller spørsmål underveis i stedet for å slå ting fast"],
      explanation: "Riktig svar er at drøfting krever to posisjoner, en innvending og en begrunnet landing. Alternativet om å stille spørsmål underveis er nær sannheten i tonen og feil i saken: spørsmål uten svar er ikke drøfting. Lengde og antall kilder avgjør ingenting.",
    },
    {
      question: "Hva er revisjonsrubrikkens tredje punkt?",
      options: ["Om drøftingsleddet er lengre enn redegjørelsesleddet", "Om alle pensumbidragene fra lista er nevnt minst én gang", "Om språket er rettet for skrivefeil og uklare formuleringer", "Om litteraturlista følger den stilen instituttet anbefaler"],
      explanation: "Riktig svar er fordelingen mellom drøfting og redegjørelse, og punktet er et telleoppdrag: du skal faktisk telle ord. Alternativet om korrektur er nær sannheten om hva folk gjør i en siste gjennomlesning, og bommer på hva rubrikken spør om — den spør om noe mangler, ikke om noe er feilskrevet.",
    },
    {
      question: "Hvorfor er revisjonsevne en eksamensferdighet i dette emnet?",
      options: ["Fordi mappa består av tekster som er levert, kommentert og skrevet om før innlevering", "Fordi sensorveiledningen krever at kandidaten dokumenterer endringene som er gjort i et eget vedlegg", "Fordi karakterbeskrivelsen nevner revisjon som et eget kriterium for toppkarakter i beskrivelsen av A", "Fordi ordgrensen bare kan holdes ved å kutte i et førsteutkast som er for langt"],
      explanation: "Riktig svar er at formatet er bygget på revisjon: det som vurderes, er tredje utkast, ikke førsteutkast. De tre andre alternativene tillegger arkivet krav det ikke stiller — verken dokumentasjon av endringer eller revisjon som eget karakterkriterium finnes der.",
    },
    {
      question: "Hva er det mest nyttige første trinnet når en medstudent gir respons?",
      options: ["At hun sier med egne ord hva hun tror problemstillingen er", "At hun peker ut de setningene som er språklig svakest", "At hun sier hvilke pensumbidrag hun savner i besvarelsen", "At hun vurderer hvilken karakter teksten ville fått slik den står"],
      explanation: "Riktig svar er gjengivelsen av problemstillingen: gjengir hun den feil, har du funnet den dyreste feilen i teksten på under ett minutt. Alternativet om karaktervurdering er den vanligste forespørselen og den minst nyttige responsen, siden den ikke sier hva som skal gjøres.",
    },
    {
      question: "Hva sier sensorveiledningen fra H2024 om referansestil?",
      options: ["At den varierer etter faglig tilhørighet, og at stilvalget ikke skal straffes", "At instituttets egen mal skal følges av alle kandidater i emnet og av sensorene som retter", "At referanser i fotnoter foretrekkes framfor referanser i parentes i humanistiske fag", "At litteraturlista skal føres opp alfabetisk og telles med i ordgrensen for gruppeoppgaven"],
      explanation: "Riktig svar er at stilen varierer med faglig tilhørighet og ikke skal straffes — derfor foreskriver denne boka ingen bestemt referansestil. Alternativet om litteraturlista i ordgrensen er dessuten direkte galt for gruppeoppgaven, der lista kommer i tillegg til de 1 500 ordene.",
    },
    {
      question: "Hva innebærer det andre av bokas to mantraer, at et begrep du bare nevner, ikke er brukt?",
      options: ["At begrepet skal navngi noe i ditt eget materiale og endre hva teksten ser", "At begrepet må defineres presist før det kan brukes videre i framstillingen", "At begrepet må hentes fra pensum og ikke fra andre framstillinger av emnet", "At begrepet bør gjentas flere ganger slik at leseren ser at det er sentralt"],
      explanation: "Riktig svar er at begrepet skal gjøre et konkret arbeid i teksten din. Alternativet om presis definisjon er nær sannheten og stanser for tidlig: en definisjon er nødvendig, men et definert begrep som ikke brukes på noe, er fortsatt bare nevnt. Hjemmelen er H2022-veiledningen, som sier det om hermeneutikk.",
    },
    {
      question: "Hvordan skal gapet mellom en C-versjon og en A-versjon forstås i denne boka?",
      options: ["Som en oppgraderingsmeny av grep som kan legges til, ikke som en liste over mangler", "Som et uttrykk for hvor mye mer pensum A-versjonen har fått med seg", "Som en beskrivelse av observerte forskjeller mellom innleverte besvarelser", "Som en rangering av hvilke pensumbidrag som gir mest uttelling hos sensor"],
      explanation: "Riktig svar er oppgraderingsmenyen: forskjellen ligger i grep, ikke i mengde. Alternativet om observerte forskjeller er viktig å avvise — arkivet inneholder ingen eksempelbesvarelser, og nivåbeskrivelsene i denne boka er utledet av karakterbeskrivelsen og belønningskriteriene.",
    },
  ],
  'exfac03-hark-1-1': [
    {
      question: "Hva menes med at «humaniora» er yngre enn stoffet betegnelsen samler?",
      options: ["At mennesker studerte tekster og fortid lenge før noen regnet det som ett felt", "At ordet ble tatt i bruk først etter at universitetene fikk egne institutter", "At de eldste fagene i humaniora er yngre enn naturvitenskapens eldste fag", "At betegnelsen bare brukes om forskning gjort etter at feltet ble opprettet"],
      explanation: "Riktig svar er at aktivitetene er eldgamle, mens samlebetegnelsen og påstanden om at de hører sammen, er ny. Alternativet om instituttene er nær sannheten i tid og forveksler en institusjonshistorie med en begrepshistorie. Det er påstanden om fellesskap som er ung, ikke arbeidet.",
    },
    {
      question: "Hva navnga *humanitas* i antikken?",
      options: ["En egenskap ved et menneske, oppnådd gjennom dannelse", "En krets av fag som ble undervist ved de større skolene", "En metode for å prøve tekster mot hverandre systematisk", "En institusjon der lærde arbeidet med språk og diktning"],
      explanation: "Riktig svar er at ordet navnga en egenskap ved et menneske og et program for å bli slik, ikke et fagområde. Alternativet om en fagkrets er den viktigste forvekslingen, for det er nettopp den lesningen som gjør antikken anakronistisk. ⚠ Koblingen til pensumlitteraturen er ikke verifisert.",
    },
    {
      question: "Hva er de fire kriteriene på at noe er et eget kunnskapsfelt?",
      options: ["Egne institusjoner, egne metoder, en egen avgrensning og en egen selvforståelse", "Egne kilder, egne begreper, egne tidsskrifter og en egen utdanningsvei ved instituttet", "Egen finansiering, egne stillinger, egne bygninger og en egen ledelse", "Eget navn, egen historie, egne klassikere og en egen faglig forening"],
      explanation: "Riktig svar er de fire kriteriene boka bruker som test. Alternativet om kilder og tidsskrifter er nær sannheten og beskriver kjennetegn ved en moderne disiplin, ikke minstekravene til et felt. Poenget med testen er at du skal kunne si hvilke kriterier som var oppfylt og hvilke som ikke var det.",
    },
    {
      question: "Hva er forskjellen på et fag og et kunnskapsfelt?",
      options: ["Feltet er rammen som sier hvorfor fagene hører sammen; faget er der arbeidet gjøres", "Feltet er den moderne betegnelsen, faget er den eldre betegnelsen på det samme", "Feltet gjelder undervisning, mens faget gjelder forskning ved instituttene", "Feltet er alltid tverrfaglig, mens faget alltid har én bestemt metode"],
      explanation: "Riktig svar er at feltet er rammen og faget er arbeidsstedet. Alternativet om at det er to navn på det samme, gjør det umulig å si når det ene fantes uten det andre — og det er ofte hele poenget i dette emnet, siden fagene blir til på ulike tidspunkter.",
    },
    {
      question: "Hvorfor er ordet «disiplin» risikabelt å bruke om middelalderens klosterlærdom?",
      options: ["Fordi det forutsetter en avgrensning og en selvforståelse som ikke var på plass", "Fordi ordet først ble tatt i bruk på 1900-tallet og derfor er for ungt om faglig virksomhet", "Fordi klostrene ikke drev med opplæring, men bare med avskrift av tekster", "Fordi disiplin i middelalderen betydde tukt og ikke noe faglig i det hele tatt i faglig sammenheng"],
      explanation: "Riktig svar er at ordet forutsetter en institusjonell orden av moderne type: avgrensning mot naboen og en egen selvforståelse. Alternativet om at klostrene ikke drev opplæring, er usant — de gjorde nettopp det, og det er derfor to av de fire kriteriene faktisk er oppfylt.",
    },
    {
      question: "Hva er differensiering, slik boka bruker ordet?",
      options: ["At et område skiller seg ut fra et større og blir noe eget", "At arbeidet innenfor et fag deles opp i stadig smalere spesialiteter", "At to fag utvikler ulike metoder for å studere det samme materialet", "At et fag deler seg i to nye fag med hver sin institusjon"],
      explanation: "Riktig svar er at differensiering er prosessen der et felt skiller lag med noe større. Alternativet om oppdeling i spesialiteter er spesialisering, som er noe annet — man kan ha mye av det ene og lite av det andre, og forvekslingen gjør det umulig å beskrive graden av differensiering i en periode.",
    },
    {
      question: "Hva kjennetegner en uformell institusjon?",
      options: ["At den er varig og båret av tilhørighet, uten vedtekter eller fast sted", "At den er kortvarig og forsvinner så snart grunnleggeren dør som grunnla den", "At den mangler opplæring og derfor ikke kan overføre kunnskap videre til nye deltakere", "At den er hemmelig og derfor ikke etterlater seg skriftlige spor etter seg i arkivene"],
      explanation: "Riktig svar er varighet uten formell ramme. Alternativet om kortvarighet er den vanligste forvekslingen: at noe er uformelt, betyr ikke at det er svakt, bare at det er båret av tilhørighet i stedet for av vedtekter. Antikkens skoleretninger overførte kunnskap gjennom generasjoner.",
    },
    {
      question: "Hva er det avgjørende ved det menneskeskapte?",
      options: ["At det er laget med en mening, og at meningen derfor kan tolkes", "At det er laget av materialer som mennesker har bearbeidet fysisk", "At det kan dateres nøyaktig fordi vi kjenner produksjonsmåten", "At det bare finnes i perioder der det fantes skriftlige kilder"],
      explanation: "Riktig svar er meningen: gjenstanden er et valg noen tok, og valget kan tolkes. Alternativet om bearbeidede materialer er nær sannheten og stanser ved det fysiske — en beltespenne er metall i en form, men det er meningen med formen som gjør den til et humanistisk materiale.",
    },
    {
      question: "Hva er humanvitenskapens egenart en påstand om?",
      options: ["At det å forstå en mening krever andre framgangsmåter enn å forklare en årsak", "At humanistiske fag har lavere krav til etterprøvbarhet enn naturvitenskapen og til dokumentasjon", "At humaniora studerer eldre materiale enn naturvitenskapen gjør", "At humanistiske fag ikke kan bruke tall og målinger i sine analyser"],
      explanation: "Riktig svar er at kravene er andre, ikke lavere. Alternativet om lavere krav er den farligste distraktoren, fordi den ligner en vanlig misforståelse: en tolkning kan være godt eller dårlig begrunnet, og andre kan se hva den bygger på. Påstanden om egenart er dessuten omstridt, og det er derfor den er et drøftingstema.",
    },
    {
      question: "Hva skiller en anakronisme fra en faktafeil?",
      options: ["En anakronisme kan bestå av sanne opplysninger, men gi et galt bilde gjennom rammen", "En anakronisme gjelder årstall, mens en faktafeil gjelder navn og steder", "En anakronisme er en bevisst forenkling, mens en faktafeil er utilsiktet", "En anakronisme kan bare oppstå i framstillinger av perioder før ca. 1800"],
      explanation: "Riktig svar er at anakronismen ligger i rammen, ikke i opplysningene: alt kan være sant og likevel gi et galt bilde fordi kategorien er hentet fra en annen tid. Alternativet om at den bare gjelder tiden før ca. 1800, er nær sannheten for dette emnet og er ikke riktig som generell regel.",
    },
    {
      question: "Hva er en retrospektiv kategori?",
      options: ["En senere samlebetegnelse brukt bakover i tid, med en merking av at den er senere", "En kategori som først kan avgjøres når hele utviklingen er kjent", "En kategori som er hentet fra kildene selv i stedet for fra forskningen som studerer dem", "En betegnelse som er forbudt å bruke om perioder før den ble tatt i bruk i faglig sammenheng"],
      explanation: "Riktig svar er den merkede bruken. Alternativet om forbud er den viktigste forvekslingen: retrospektive kategorier er uunngåelige og fullt lovlige, forskjellen mot anakronismen er om det står en setning som gjør rede for bruken.",
    },
    {
      question: "Hva sier tesen kapittel 1.1 hviler på?",
      options: ["At humaniora som eget felt på mange måter er noe som kommer til etter ca. 1800", "At humaniora ble til i renessansen, da fortiden begynte å bli sett som fremmed og ikke lenger som forbilde", "At humaniora alltid har eksistert, men skiftet navn flere ganger underveis", "At humaniora oppsto da de første universitetene ble grunnlagt i middelalderen"],
      explanation: "Riktig svar er tesen om ca. 1800, hjemlet i sensorveiledningen fra H2021. Alternativet om renessansen er ikke tullesvar — det er en forsvarlig alternativ datering som boka selv drøfter — men tesen emnet arbeider ut fra, er den om ca. 1800.",
    },
    {
      question: "Hva spør menneskesynet om?",
      options: ["Hvem som regnes som «vi», hvem som regnes som «de andre», og hvor jeget står", "Hvilket syn perioden hadde på menneskets rettigheter og verdighet i sin samtid", "Hvor mange mennesker som deltok i kunnskapsarbeidet i perioden på et gitt tidspunkt", "Om mennesket ble regnet som del av naturen eller som hevet over den i sin egen selvforståelse"],
      explanation: "Riktig svar er spørsmålet om fellesskapet og jeget. Alternativet om rettigheter er nær sannheten i ordvalget og gjør kolonnen til en verdivurdering — kolonnen spør hvordan fellesskapet var trukket opp, ikke om synet var godt eller dårlig.",
    },
    {
      question: "Hva spør kunnskapssynet om?",
      options: ["Hva som teller som kunnskap, og hva som gjør at en påstand godtas", "Hvor mye kunnskap perioden hadde samlet sammenlignet med den forrige", "Hvilke fag som fantes, og hvordan de var fordelt mellom institusjonene", "Hvilke kilder perioden hadde tilgang til, og hvor de var oppbevart"],
      explanation: "Riktig svar er hva som gjør en påstand gyldig — autoritet, fornuft, erfaring, kilde eller beregning. Alternativet om kunnskapsmengde er en mengdelesning som gjør kolonnen om til en framskrittsmåling, og det er nettopp det den ikke er.",
    },
    {
      question: "Hva er forskjellen på «synet på fortiden» og «interesse for historie»?",
      options: ["Synet på fortiden gjelder hva fortiden var og hvordan den er tilgjengelig", "Synet på fortiden gjelder faglige framstillinger, interessen gjelder allmennheten", "Synet på fortiden er et moderne begrep, interessen finnes i alle perioder", "Synet på fortiden gjelder eldre perioder, interessen gjelder nyere tid"],
      explanation: "Riktig svar er at kolonnen spør hva fortiden var: et forbilde, en plan med retning, et fremmed sted eller noe vi bare når gjennom spor. Alle perioder har vært opptatt av fortiden, så interessen skiller dem ikke — det gjør premissene.",
    },
    {
      question: "Hva er en selvforståelse i faglig forstand?",
      options: ["Fortellingen et fag har om hva det driver med, hvorfor, og hvem det skiller seg fra", "Den enkelte forskerens vurdering av sin egen faglige styrke og svakhet", "Fagets offisielle beskrivelse i studiehåndboka ved det aktuelle universitetet", "Summen av de metodene faget bruker, slik de er beskrevet i lærebøkene"],
      explanation: "Riktig svar er fagets fortelling om seg selv, og den kan være i utakt med hva faget faktisk gjør. Alternativet om studiehåndboka er nær sannheten som kilde, men selvforståelsen er noe faget holder, ikke noe en tekst alene fastsetter.",
    },
    {
      question: "Hvorfor er «kunnskap om mennesket» en mer presis formulering enn «humaniora» om tiden før ca. 1800?",
      options: ["Fordi den spør om noe som faktisk fantes, i stedet for å forutsette et felt", "Fordi den er mer forsiktig og derfor mindre utsatt for kritikk fra sensor", "Fordi den er hentet ordrett fra emnets hovedbok og derfor er sikker å bruke", "Fordi den utelater naturvitenskapen, som ikke fantes som eget felt da heller"],
      explanation: "Riktig svar er at formuleringen ikke forutsetter et subjekt som varer gjennom tiden. Alternativet om forsiktighet er nær sannheten i virkning og feil i begrunnelse: poenget er presisjon, ikke å gardere seg.",
    },
    {
      question: "Hva er institusjonalisering?",
      options: ["At en virksomhet får faste rammer: sted, finansiering, stillinger og opplæring", "At en virksomhet får offentlig anerkjennelse fra myndighetene i landet for virksomheten sin", "At et fag utvikler egne metoder som skiller det fra nabofagene på en tydelig måte", "At en virksomhet flyttes fra en privat til en offentlig eier med andre vedtekter"],
      explanation: "Riktig svar er de faste rammene som gir varighet. Alternativet om egne metoder er nær sannheten og gjelder et annet av de fire feltkriteriene — metoder og rammer går sjelden i takt, og forskyvningen mellom dem er ofte det interessante.",
    },
    {
      question: "Hva er poenget med å svare «to av fire kriterier var oppfylt» i stedet for ja eller nei?",
      options: ["At det er en beskrivelse som kan etterprøves, og som viser hva som faktisk skjedde", "At det gir sensor et inntrykk av at kandidaten er forsiktig og velbalansert og velformulert i språket", "At et ja eller nei alltid vil være galt, siden feltdannelse er en gradvis prosess over lang tid", "At kriteriene ikke kan veies mot hverandre og derfor må telles opp"],
      explanation: "Riktig svar er at et delvis svar beskriver perioden i stedet for å måle den mot vår egen og finne den mangelfull. Alternativet om at ja eller nei alltid er galt, går for langt — noen tilfeller er klare — men det er formen på begrunnelsen som gir uttelling.",
    },
    {
      question: "Hva er den vanligste formen for anakronisme i dette emnet?",
      options: ["Å bruke ord som «fag», «disiplin» og «forskning» om perioder før ca. 1800", "Å datere hendelser til feil århundre i framstillingen av en periode eller i en tidslinje", "Å bruke moderne norsk i gjengivelsen av eldre kilder og tekster", "Å sammenligne to perioder som ligger for langt fra hverandre i tid"],
      explanation: "Riktig svar er begrepsanakronismen: ordene forutsetter ordninger som ikke fantes. Alternativet om feil datering er en faktafeil, som er noe annet — en anakronisme kan bestå av bare korrekte årstall og likevel gi et galt bilde.",
    },
    {
      question: "Hva er problemet med setningen «middelalderen manglet kildekritikk»?",
      options: ["At perioden måles mot en senere standard i stedet for å beskrives på egne premisser", "At påstanden er usann, siden kildekritikk fantes i praktisk form også da", "At ordet kildekritikk hører hjemme i arkeologien og ikke i historiefaget", "At middelalderen er for lang periode til at en slik påstand kan gjelde hele den"],
      explanation: "Riktig svar er at setningen dømmer i stedet for å beskrive, og at den derfor gjør det umulig å se hva perioden faktisk gjorde — nemlig å avgjøre troverdighet ved autoritet. Alternativet om at kildekritikk fantes i praktisk form, er nær sannheten og treffer ikke hovedproblemet, som er formen på påstanden.",
    },
    {
      question: "Hva er det sterkeste argumentet mot skillet mellom det menneskeskapte og det naturskapte?",
      options: ["At de fleste gjenstander som faktisk studeres, faller på begge sider av skillet", "At skillet ble innført av administrative grunner og aldri var faglig begrunnet", "At naturvitenskapen for lengst har overtatt studiet av menneskeskapte gjenstander", "At mennesket selv er en del av naturen og derfor ikke kan skilles fra den"],
      explanation: "Riktig svar er at skillet går gjennom gjenstandene og ikke mellom dem: et gravfunn ligger i naturskapte jordlag, i en menneskeskapt haug, og brytes ned etter kjemiske lover mens det betyr noe kulturelt. Alternativet om at skillet aldri var faglig begrunnet, er en påstand materialet ikke gir grunnlag for.",
    },
    {
      question: "Hva vinner et fag på å velge ett fag i stedet for tre i en faghistorisk oppgave?",
      options: ["Muligheten til å plassere faget mot humanioras samtidige utvikling og se forskyvningen", "Muligheten til å skrive kortere og dermed holde ordbudsjettet lettere", "Muligheten til å bruke færre pensumbidrag i den ferdige besvarelsen", "Muligheten til å unngå de fagene kandidaten kan minst om fra før"],
      explanation: "Riktig svar er at valget gjør trinnet om forskyvningen mot humaniora mulig — det trinnet sensorveiledningen fra H2024 bruker mest plass på. Alternativet om kortere tekst er en praktisk bivirkning og ikke begrunnelsen, og de tre fagene går uttrykkelig ikke i takt.",
    },
    {
      question: "Hvem har interesse av å datere humanioras oppkomst til renessansen framfor til ca. 1800?",
      options: ["Et fag som ønsker å framstå med alder og en lang egen tradisjon bak seg", "Et fag som ønsker å framstå som institusjonelt likestilt med naturvitenskapen", "Et fag som vil unngå å knytte seg til universitetsreformene på 1800-tallet", "Ingen — dateringen er et rent faglig spørsmål uten følger for fagene selv"],
      explanation: "Riktig svar er at en tidlig datering gir faget alder og verdighet, mens dateringen til ca. 1800 understreker moderne institusjonell likestilling. Alternativet om at dateringen er uten følger, er den viktigste å avvise: begge dateringer er faglig forsvarlige, og begge gjør et arbeid for den som bruker dem.",
    },
  ],
  'exfac03-hark-1-2': [
    {
      question: "Hvilke seks kolonner har periodenettet?",
      options: ["Periode, menneskesyn, kunnskapssyn, institusjon, grense mot nabofeltet og synet på fortiden", "Periode, politikk, økonomi, religion, kunst og vitenskap i den aktuelle perioden", "Periode, hovedverk, hovedpersoner, metoder, kritikk og ettervirkning av perioden", "Periode, årstall, kjennetegn, viktigste tenker, viktigste institusjon og pensumbidrag"],
      explanation: "Riktig svar er de seks kolonnene boka bruker gjennom hele Del 2. Alternativet med hovedverk og hovedpersoner er nær sannheten i form og gjør nettet til en huskeliste over navn — nettet spør om struktur, ikke om hvem som var viktigst.",
    },
    {
      question: "Hvilke to av kolonnene er sensorveiledningens egne akser?",
      options: ["Menneskesynet og kunnskapssynet, hentet fra rutenettet i veiledningen fra H2021", "Institusjonen og grensen mot nabofeltet, hentet fra veiledningen fra H2022 og fra emnesiden", "Perioden og synet på fortiden, som er de eneste to arkivet nevner direkte", "Kunnskapssynet og synet på fortiden, hentet fra veiledningen fra H2024"],
      explanation: "Riktig svar er menneskesynet og kunnskapssynet, som står som akser i rutenettet i sensorveiledningen fra H2021. De fire øvrige kolonnene er bokas utvidelse av det samme oppsettet, og distraktorene tester nettopp hvilke deler som er hjemlet hvor.",
    },
    {
      question: "Hva er horisontal lesning av periodenettet?",
      options: ["Å fylle ut én rad, altså én periode gjennom alle seks kolonnene", "Å følge én kolonne nedover gjennom alle de sju periodene", "Å lese to rader ved siden av hverandre for å finne kontrasten", "Å sammenligne nettets kolonner med kolonnene i et annet rutenett"],
      explanation: "Riktig svar er å fylle ut én rad. Alternativet om å følge en kolonne er vertikal lesning, og forvekslingen er kostbar: raden svarer på epokekarakteristikken, kolonnen svarer på den lange linjen, og en tekst som blander dem, svarer på noe annet enn bestillingen.",
    },
    {
      question: "Hvilken lesemåte kreves av en bestilling om å følge én tendens gjennom flere perioder?",
      options: ["Vertikal lesning, altså én kolonne fulgt nedover gjennom radene", "Horisontal lesning, siden hver periode må beskrives før neste tas fatt", "En kombinasjon, der man skifter kolonne alt etter hva stoffet gir", "Ingen av dem, siden nettet bare er laget for epokekarakteristikker"],
      explanation: "Riktig svar er vertikal lesning. Alternativet om å skifte kolonne underveis er nær sannheten og likevel fella: man kan låne fra rader, men bestillingen om én tendens krever at kolonnen holdes fast, ellers blir svaret en epokegjennomgang.",
    },
    {
      question: "Hva kjennetegner et ekte kontrastledd?",
      options: ["At det holder samme kolonne fast og viser hvilket annet svar perioden ga", "At det beskriver den forrige perioden kort før hoveddelen begynner i besvarelsen", "At det vurderer hvilken av de to periodene som kom lengst", "At det lister opp det perioden manglet sammenlignet med den neste i utviklingen"],
      explanation: "Riktig svar er at kontrasten holder spørsmålet fast og bytter svaret. Alternativet om en kort presentasjon av forrige periode er den vanligste fella — to beskrivelser etter hverandre er ikke en kontrast. Mangellista måler dessuten perioden mot en senere standard.",
    },
    {
      question: "Hva sier takhøydeklausulen?",
      options: ["At studentens egen inndeling av stoffet skal møtes med stor takhøyde", "At alle inndelinger er like gode, slik at valget ikke trenger begrunnelse", "At sensor skal se bort fra mindre faktafeil dersom helheten er god", "At kandidaten kan velge bort perioder uten å si noe om utvalget"],
      explanation: "Riktig svar er at inndelingen er studentens eget valg, hjemlet i sensorveiledningen fra H2021. Alternativet om at valget ikke trenger begrunnelse, er den nære lesningen som går for langt: takhøyden gjelder valget, ikke fritaket fra å begrunne det.",
    },
    {
      question: "Hvilke perioder utgjør sjutrinnsrekka?",
      options: ["Antikken, middelalderen, renessansen, opplysningstiden, romantikken og historismen, 1900-tallet og tiden etter 1970", "Antikken, middelalderen, renessansen, barokken, opplysningstiden, romantikken og moderne tid", "Oldtiden, middelalderen, tidlig nytid, opplysningstiden, industrialiseringen, mellomkrigstiden og etterkrigstiden", "Antikken, middelalderen, renessansen, opplysningstiden, 1800-tallet, 1900-tallet og vår egen tid"],
      explanation: "Riktig svar er emnets egen rekke, der de fire første trinnene er hjemlet i sensorveiledningen fra H2021 og de tre siste kommer fra veiledningen fra H2022. Distraktorene er alminnelige periodeinndelinger som ikke er emnets, og forskjellen betyr noe fordi sensorkravet i H2022 er sjutrinns.",
    },
    {
      question: "Hva er periodisering, slik boka bruker ordet?",
      options: ["Et grep forskeren gjør for et formål, ikke noe hun finner ferdig i materialet", "Den rekkefølgen hendelsene faktisk skjedde i, slik kildene viser den", "En inndeling som følger av hvilke kilder som er bevart fra hver periode i det aktuelle landet", "En avtale mellom fagene om hvilke årstall som skal brukes som skiller"],
      explanation: "Riktig svar er at periodisering er et grep gjort for et formål. Alternativet om rekkefølgen er kronologi, som er gitt — periodisering legger et mønster over kronologien og hevder at noe hører sammen, og derfor kan to inndelinger være uenige uten at noen tar feil om årstallene.",
    },
    {
      question: "Hva er et skjæringspunkt i en periodeinndeling?",
      options: ["Den ene delelinjen som bærer fortellingen, altså der noe avgjørende skjedde", "Punktet der to fags periodeinndelinger tilfeldigvis faller sammen i den samme perioden", "Årstallet der en periode formelt regnes som avsluttet av forskningen og av lærebøkene", "Det stedet i teksten der redegjørelsen går over i drøftingen"],
      explanation: "Riktig svar er den bærende delelinjen. Alternativet om en formell avslutning er nær sannheten og skjuler at det er du som setter snittet — og at det er skjæringspunktet, ikke alle delelinjene, du må begrunne.",
    },
    {
      question: "Hva skiller «vi» og «de andre» fra en geografisk grense?",
      options: ["At tilhørigheten kan bygge på språk, tro, dannelse eller levemåte, og gå tvers gjennom et land", "At skillet alltid er uttalt i kildene, mens en geografisk grense må rekonstrueres", "At skillet gjelder enkeltpersoner, mens en geografisk grense gjelder grupper", "At skillet er moderne, mens geografiske grenser finnes i alle periodene"],
      explanation: "Riktig svar er at fellesskapet ikke nødvendigvis er et sted. Alternativet om at skillet alltid er uttalt, er direkte galt og viktig å avvise: skillet vises som regel i hvem tekstene henvender seg til, ikke i en erklæring.",
    },
    {
      question: "Hva er risikoen ved å lese «jegets fødsel» i en eldre tekst?",
      options: ["Å lese moderne individualisme inn i en tekst der jeget betyr noe annet", "Å overse at jeget bare finnes i tekster skrevet på folkespråket og ikke på latin", "Å datere teksten for tidlig, siden jeget er et sent fenomen i kildene fra middelalderen", "Å blande sammen forfatterens jeg med fortellerens jeg i teksten i den samme teksten"],
      explanation: "Riktig svar er anakronismefaren: at et jeg trer fram, betyr ikke at perioden hadde vår forestilling om individet. Alternativet om folkespråket er en oppdiktet regel, og de to andre gjelder tekstanalytiske problemer som er reelle, men som ikke er poenget her.",
    },
    {
      question: "Hva spør institusjonskolonnen om?",
      options: ["Hvem som bar kunnskapen, formelt og uformelt, og hva som skjedde når enkeltpersoner døde", "Hvilke bygninger som fantes, og hvor de lå i forhold til hverandre i den aktuelle perioden", "Hvor mange studenter og lærere som deltok i undervisningen i perioden", "Hvem som betalte for kunnskapsarbeidet, og hvor stort budsjettet var"],
      explanation: "Riktig svar er spørsmålet om bæring og varighet. Alternativet om finansiering er nær sannheten som delspørsmål og for smalt: en periode uten formelle institusjoner kan ha sterke uformelle, og et svar som bare leter etter universiteter, finner ingenting.",
    },
    {
      question: "Hva betyr det at grensekolonnen står tom for antikken?",
      options: ["At inndelingen mellom humaniora og naturvitenskap ikke var i bruk den gangen", "At kildene fra antikken er for få til at grensen kan rekonstrueres i dag med rimelig sikkerhet", "At grensen fantes, men gikk et annet sted enn i de senere periodene enn i de tidligere", "At antikken hadde flere grenser samtidig, slik at kolonnen blir uklar"],
      explanation: "Riktig svar er at spørsmålet ikke var stilt: grensen fantes ikke som spørsmål og ventet ikke på svar. Alternativet om at kildene er for få, er den vanligste forvekslingen — det blander et hull i overleveringen med et spørsmål som ikke var aktuelt.",
    },
    {
      question: "Hva spør fortidskolonnen om?",
      options: ["Hva fortiden var for perioden, og hva slags arbeid som måtte til for å vite noe om den", "Hvor mye perioden visste om sin egen fortid sammenlignet med oss", "Hvilke historiske hendelser perioden selv regnet som de viktigste", "Hvordan periodens historikere organiserte arbeidet sitt i praksis"],
      explanation: "Riktig svar er premissene: var fortiden et forbilde, en plan med retning, et fremmed sted, eller noe vi bare når gjennom spor? Alternativet om hvor mye perioden visste, gjør kolonnen om til en mengdemåling og dermed til en framskrittsfortelling.",
    },
    {
      question: "Hva er en tendens i den lange linjen?",
      options: ["Den ene tråden du velger å følge gjennom periodene, formulert som en retning", "Det temaet flest av periodene i nettet har noe å si om i den aktuelle framstillingen", "Den utviklingen som er best dokumentert i sensorveiledningene fra de fire årene", "Den sammenhengen mellom to kolonner som gjentar seg i alle radene i periodenettet"],
      explanation: "Riktig svar er den valgte tråden, formulert som en retning. Alternativet om et tema er den viktigste forvekslingen: et tema er et område, en tendens er en retning som kan følges og som kan vise seg å ikke holde.",
    },
    {
      question: "Hva er et brudd, i motsetning til en endring?",
      options: ["En endring som gjør at premissene skifter, slik at spørsmålene selv blir andre", "En endring som skjer raskt, i løpet av én generasjon eller mindre", "En endring som er dokumentert i flere uavhengige kilder samtidig", "En endring som samtiden selv oppfattet som dramatisk mens den skjedde mens den pågikk"],
      explanation: "Riktig svar er at premissene skifter. Alternativet om hastighet er nær sannheten i bildet og feil i saken: et brudd kan skje langsomt, og en rask endring kan være en videreføring med nye midler.",
    },
    {
      question: "Hvorfor er kontinuitet ofte vanskeligere å finne enn endring?",
      options: ["Fordi det som består, er usynlig — ingen skriver om det som fortsatt gjelder", "Fordi kildene fra eldre perioder som regel er dårligere bevart og vanskeligere å tolke", "Fordi kontinuitet krever at man kjenner alle sju periodene grundig", "Fordi forskningen har vært mer opptatt av brudd enn av det som varer gjennom periodene"],
      explanation: "Riktig svar er at det som består, ikke omtales: man skriver om det som endrer seg. Alternativet om forskningens interesser er nær sannheten som observasjon, men den forklarer ikke hvorfor kontinuiteten er vanskelig å se i selve materialet.",
    },
    {
      question: "Hva er et tomrom i nettet?",
      options: ["En kolonne materialet ikke gir grunnlag for å fylle, og det er et funn å si det", "En kolonne der forskningen ennå ikke har kommet fram til noe svar i den aktuelle perioden", "En kolonne som ikke er relevant for den sjangeren oppgaven ber om i den gjeldende bestillingen", "En kolonne der kandidaten mangler kunnskap og derfor må lese mer før hun kan svare"],
      explanation: "Riktig svar er at tomrommet er en opplysning om materialet, ikke om deg. Alternativet om manglende kunnskap er nettopp forvekslingen som får kandidater til å fylle inn noe fordi rubrikken er der — og å dikte i en kolonne er dyrere enn å la den stå tom.",
    },
    {
      question: "Hva er kolonneutvalg?",
      options: ["Å velge de kolonnene spørsmålet gjelder, og si i teksten at du velger", "Å fylle ut alle seks kolonnene, men gi mest plass til de viktigste i besvarelsen", "Å bytte ut en kolonne med en annen som passer stoffet bedre i framstillingen", "Å la sensor avgjøre hvilke kolonner som er relevante for bestillingen i den enkelte oppgaven"],
      explanation: "Riktig svar er å velge og si at du velger. Alternativet om å fylle alle seks med ulik vekt er den nære lesningen som fører rett inn i feilen med å dekke alt — en rad med seks halve kolonner taper mot to hele.",
    },
    {
      question: "Hva vinner man ved å presse flere perioder inn i det samme faste rasteret?",
      options: ["Sammenlignbarhet, som er forutsetningen for i det hele tatt å kunne skrive en kontrast", "Fullstendighet, siden ingen viktige sider ved en periode kan bli glemt i den ferdige framstillingen", "Nøyaktighet, siden hver periode blir beskrevet med sine egne begreper", "Tid, siden et ferdig skjema er raskere å fylle ut enn en fri framstilling"],
      explanation: "Riktig svar er sammenlignbarhet: uten faste kolonner beskrives hver periode med sine egne begreper, og da kan man ikke si hva som endret seg. Alternativet om nøyaktighet beskriver nettopp det man **taper** på rasteret, og det er den viktigste forvekslingen her.",
    },
    {
      question: "Hva taler for at periodegrenser legges inn i materialet av historikeren?",
      options: ["At de samme hundreårene deles ulikt av ulike fag, og at skillene sjelden faller likt", "At kildene fra overgangsperioder som regel er gått tapt", "At periodenavn alltid er gitt i ettertid og aldri av samtiden selv lenge etter at den var over", "At forskere er uenige om hvilke hendelser som var viktigst i hver periode i den perioden det gjelder"],
      explanation: "Riktig svar er variasjonen mellom fag og land, sammen med at endringene skjer langsomt og ujevnt. Alternativet om at navnene er gitt i ettertid, er nær sannheten og beviser lite: et navn kan gis i ettertid til et skille som likevel er reelt.",
    },
    {
      question: "Hva er problemet med å skrive de sju periodene som en framskrittsfortelling?",
      options: ["At ingen av periodene forsøkte å bli oss, slik at framstillingen bare får én målestokk", "At det tar for mye plass å begrunne at hver periode var bedre enn den forrige", "At sensorveiledningene uttrykkelig krever at framstillingen skal være nøytral", "At framskritt er et begrep som hører hjemme i opplysningstiden og ikke i vår tid"],
      explanation: "Riktig svar er at én målestokk gjør det umulig å se hva som faktisk sto på spill i hver periode. Alternativet om et krav om nøytralitet er nær sannheten i virkning og feil i hjemmel: veiledningene stiller ikke et slikt krav i de ordene.",
    },
  ],
  'exfac03-hark-1-3': [
    {
      question: "Hva er forskjellen på en utøver og en kunnskapsbærer?",
      options: ["Utøveren har kunnskapen; bæreren er ordningen som sikrer at den finnes etterpå", "Utøveren arbeider praktisk, mens bæreren arbeider teoretisk med stoffet", "Utøveren er knyttet til en formell institusjon, bæreren til en uformell", "Utøveren underviser, mens bæreren forsker på det samme materialet"],
      explanation: "Riktig svar er at bæreren gir kunnskapen varighet gjennom opplæring, oppbevaring og fornyelse. De tre andre alternativene innfører arbeidsdelinger som ikke finnes i stoffet, og som ville gjort det umulig å beskrive antikkens uformelle ordninger som bærere.",
    },
    {
      question: "Hva var antikkens fremste kunnskapsbærere?",
      options: ["Uformelle ordninger: lærere med elever, skoleretninger og nettverk", "Formelle ordninger: statlige skoler med fastsatte læreplaner for de unge", "Bibliotekene, som var de eneste stedene tekster ble oppbevart over lengre tid", "Templene, som forvaltet både kunnskapen og opplæringen av nye i lokalsamfunnet"],
      explanation: "Riktig svar er de uformelle ordningene, båret av tilhørighet i stedet for av vedtekter. Alternativet om statlige skoler er den vanligste anakronismen her — man leter etter en senere institusjonsform og konkluderer feil når den mangler.",
    },
    {
      question: "Hvorfor er klosterets utvalg av tekster i seg selv en historisk kilde?",
      options: ["Fordi utvalget viser hva som ble regnet som verdt å bevare", "Fordi utvalget viser hvilke tekster som fantes i Europa på den tiden", "Fordi utvalget viser hvor mange munker klosteret hadde til rådighet", "Fordi utvalget viser hvilke språk som var i bruk blant de lærde"],
      explanation: "Riktig svar er at utvalget forteller om prioriteringene: det som ikke tjente noe formål, ble i mindre grad kopiert. Alternativet om hvilke tekster som fantes, er den viktigste forvekslingen — fravær i en samling er ikke bevis for fravær i verden.",
    },
    {
      question: "Hva skiller universitetet fra klosteret som kunnskapsbærer?",
      options: ["At universitetet utdanner til grader som gir adgang til stillinger utenfor det selv", "At universitetet var uavhengig av kirken helt fra opprettelsen", "At universitetet oppbevarte tekster, mens klosteret bare underviste", "At universitetet var åpent for alle, mens klosteret bare tok imot geistlige til opplæring"],
      explanation: "Riktig svar er gradene og koblingen utover: det gjør universitetet mer utsatt for krav utenfra. Alternativet om uavhengighet fra kirken er direkte galt for middelalderen, og det er nettopp derfor grensen mot teologien ikke var trukket.",
    },
    {
      question: "Hva var akademiets rolle ved siden av universitetet?",
      options: ["Å samle dem som allerede arbeidet med noe, også utenfor fakultetsinndelingen", "Å utdanne studenter som ikke ble tatt opp ved universitetet på grunn av manglende plass", "Å forvalte bibliotekene på vegne av byen eller hoffet", "Å godkjenne hvilke metoder universitetene kunne bruke i undervisningen ved de eldre lærestedene"],
      explanation: "Riktig svar er at akademiet samlet utøvere og kunne ta opp emner som ikke passet i fakultetsinndelingen. Alternativet om utdanning er den viktigste forvekslingen: universitetet reproduserer et fag, mens akademiet kan endre det.",
    },
    {
      question: "Hva er fakultetsinndelingen et uttrykk for?",
      options: ["Grensedragning i institusjonell form, med stillinger og budsjetter bak seg", "En praktisk ordning av undervisningen uten følger for fagenes selvforståelse", "En rangering av fagene etter hvor nyttige de var for staten", "En avtale fagene selv inngikk om hvor grensene skulle gå"],
      explanation: "Riktig svar er at inndelingen er et skille bygget inn i en administrasjon. Alternativet om en rent praktisk ordning er nær sannheten og undervurderer følgene: en inndeling med stillinger former hva fagene mener de er, og den varer lenge etter at begrunnelsen er glemt.",
    },
    {
      question: "Hva var særtrekket ved fakultetshierarkiet?",
      options: ["At noen studier var forberedelse til andre, slik at det nederste trinnet var definert av hva det førte til", "At fakultetene var rangert etter hvor mange studenter de hadde", "At de høyere fakultetene kunne overprøve resultatene fra de lavere", "At studentene kunne velge fritt mellom fakultetene fra første studieår"],
      explanation: "Riktig svar er trappen: arbeidet med språk og tekst kom først, som forberedelse. Det er derfor det ikke hadde en egen selvforståelse, selv om det hadde både institusjoner og metoder — og selvforståelse er et av de fire feltkriteriene.",
    },
    {
      question: "Hva er en grenseflate?",
      options: ["Den bestemte naboen en grense går mot, og et felt har flere samtidig", "Området der to fag studerer det samme materialet med ulike metoder i hver sin tradisjon", "Den ytre grensen for hva et fag i det hele tatt kan uttale seg om uten å gå ut over grensen", "Overgangen mellom to perioder i periodenettets institusjonskolonne gjennom de sju trinnene"],
      explanation: "Riktig svar er den bestemte naboen. Alternativet om et overlappende område er nær sannheten og beskriver et grensetilfelle, ikke selve grenseflaten — poenget er at de tre flatene virker på ulike måter og oppsto til ulike tider.",
    },
    {
      question: "Hva er stridsspørsmålet i grensen mot teologi og juss?",
      options: ["Hvem som har siste ord om hva som er sant og hva en tekst betyr", "Hvilke metoder som er gyldige når en tekst skal tolkes", "Hvilke tekster som skal regnes som kilder og hvilke som ikke skal", "Hvem som skal finansiere arbeidet med tekstene ved universitetet"],
      explanation: "Riktig svar er autoritet. Alternativet om metode er den vanligste forvekslingen og hører til grensen mot naturvitenskapen — to fag kan bruke samme framgangsmåte og likevel stå i et autoritetsforhold der det ene kan overprøve det andre.",
    },
    {
      question: "Hva er stridsspørsmålet i grensen mot filosofi og litteratur?",
      options: ["Hva slags tekst man skriver, og hva den skal gjøre", "Hvem som har rett til å uttale seg om menneskets natur", "Om framstillingen skal bygge på kilder eller på resonnement alene", "Hvilke av fagene som skal ha egne institusjoner ved universitetet"],
      explanation: "Riktig svar er sjanger og framgangsmåte. Alternativet om hvem som har rett til å uttale seg, er autoritetsspørsmålet, som hører til grensen mot teologien — og grensen mot diktningen er svakt trukket i antikken, som er selve funnet.",
    },
    {
      question: "Hva er stridsspørsmålet i grensen mot naturvitenskapen?",
      options: ["Hva slags framgangsmåte som teller som gyldig, og hva slags gjenstand som studeres", "Hvem som skal ha det siste ordet i spørsmål om menneskets natur", "Hvilke fag som skal regnes som de eldste ved universitetet", "Om humanistiske fag skal bruke tall og målinger i det hele tatt"],
      explanation: "Riktig svar er metode og gjenstand. Alternativet om hvem som har siste ord, er autoritetsspørsmålet fra en annen grenseflate. Alternativet om tall og målinger er nær sannheten i debatten, men det er en følge av spørsmålet, ikke selve spørsmålet.",
    },
    {
      question: "Hva er *auctoritas*?",
      options: ["Den vekten en anerkjent kilde har, som gjør at påstanden godtas uten videre", "Den formelle retten et fakultet hadde til å godkjenne nye lærere", "Betegnelsen på den eldste og mest pålitelige avskriften av en tekst i en samling", "Den myndigheten universitetet fikk fra kongen eller fra paven"],
      explanation: "Riktig svar er den faglige tyngden som avgjør hvilke påstander som ikke trenger begrunnelse. Alternativet om formell rett er nær sannheten i ordet og bommer på saken: det handler ikke om makt til å tvinge gjennom noe, men om hva som avslutter en uenighet. ⚠ Koblingen til pensumlitteraturen er ikke verifisert.",
    },
    {
      question: "Hvorfor er en studieplan en god kilde til hvor en faggrense gikk?",
      options: ["Fordi den viser inndelingen i handling: hva som læres, i hvilken rekkefølge", "Fordi den er skrevet av fagets fremste representanter i perioden", "Fordi den alltid er bevart, mens andre dokumenter kan være gått tapt i brann eller krig", "Fordi den inneholder fagets egen begrunnelse for hvorfor grensen går der i den aktuelle perioden"],
      explanation: "Riktig svar er at studieplanen viser inndelingen i praksis, uten å si noe prinsipielt. Alternativet om fagets egen begrunnelse er nettopp det en studieplan **ikke** gir — og der programskrift og studieplan spriker, er forskyvningen mellom dem selv et funn.",
    },
    {
      question: "Hva menes med håndhevelse av en faggrense?",
      options: ["Ansettelser, godkjenning av gyldig arbeid og retten til å avgjøre hva som teller", "Formell registrering av faggrensen i universitetets vedtekter", "Forbudet mot at forskere publiserer utenfor sitt eget fagområde", "Den offentlige debatten om hvilke fag som fortjener bevilgninger i det offentlige ordskiftet"],
      explanation: "Riktig svar er det praktiske arbeidet som gjør at grensen holder. En grense som ikke håndheves, er en mening; en grense som håndheves, er en ordning. Alternativet om formell registrering er nær sannheten og for tynt: en vedtektsbestemmelse uten stillinger endrer ingenting.",
    },
    {
      question: "Hva skiller en grensestrid fra en faglig uenighet?",
      options: ["Grensestriden gjelder hvem som skal avgjøre, uenigheten gjelder hva som er tilfellet", "Grensestriden gjelder to fag, uenigheten gjelder to forskere innen samme fag", "Grensestriden er offentlig, mens den faglige uenigheten foregår internt", "Grensestriden gjelder metode, mens den faglige uenigheten gjelder kilder"],
      explanation: "Riktig svar er skillet mellom hvem som avgjør og hva som er tilfellet. De to blandes ofte i praksis, og en besvarelse som skiller dem, har straks noe å drøfte — det er nettopp derfor distinksjonen er verdt plassen.",
    },
    {
      question: "Hva vinner et kunnskapsfelt på institusjonalisering?",
      options: ["Varighet og selvstendighet: det kan avgjøre innenfra hva som er godt arbeid", "Anerkjennelse fra nabofagene, som slutter å bestride grensen som noe eget", "Større bredde, siden flere emner kan tas opp innenfor rammen for undervisningen", "Frihet fra krav utenfra, siden institusjonen skjermer mot innblanding fra myndigheter og marked"],
      explanation: "Riktig svar er varighet og retten til å sette egne kriterier. Alternativet om frihet fra krav utenfra er nær sannheten og er samtidig den beste innvendingen den andre veien — men en institusjon binder like mye som den skjermer, og det er nettopp spenningen kapitlet drøfter.",
    },
    {
      question: "Hva taper et kunnskapsfelt på institusjonalisering?",
      options: ["Bevegelighet: grensene blir viktigere enn spørsmålene, og arbeid på tvers blir vanskeligere", "Kvalitet, siden ansettelser skjer etter andre kriterier enn faglige", "Kontakt med samfunnet, siden faget lukker seg om sine egne spørsmål", "Tilgang til kilder, siden andre fag overtar deler av materialet"],
      explanation: "Riktig svar er bevegeligheten, sammen med at et fag som må begrunne sin egen plass, begynner å beskrive seg selv utad. Alternativet om kvalitet er en påstand materialet ikke gir grunnlag for, og poenget er ikke at institusjoner er dårlige, men at varighet og binding følger av hverandre.",
    },
    {
      question: "Hvorfor er utvalget det avgjørende ved en samling?",
      options: ["Fordi det som ikke ble samlet inn, ikke kan undersøkes senere", "Fordi utvalget avgjør hvor mye plass samlingen krever i magasinet", "Fordi utvalget viser hvilke gjenstander som var mest verdifulle økonomisk", "Fordi utvalget bestemmer hvilke fag som får bruke samlingen"],
      explanation: "Riktig svar er at samlingen avgjør hvilke kilder som i det hele tatt finnes for oss. Å forveksle samlingen med kilden er å tro at fravær i materialet betyr at noe ikke fantes — et poeng som gjelder like mye for et klosterbibliotek som for en digital base.",
    },
    {
      question: "Hva er det sterkeste argumentet for at en faggrense er en oppdagelse?",
      options: ["At ting laget med en mening kan tolkes, mens ting uten hensikt bare kan forklares", "At alle land og alle fag trekker grensen på omtrent samme sted og har gjort det lenge", "At grensen har ligget fast siden det moderne universitetet ble til uten vesentlige endringer", "At ingen har kunnet foreslå en bedre inndeling enn den vi har"],
      explanation: "Riktig svar er at skillet følger en reell forskjell i materialet. De to alternativene om stabilitet er dessuten empirisk gale: grensen har flyttet seg, går ulike steder i ulike land, og faller midt gjennom fag som konservering — og det er nettopp argumentet den andre veien.",
    },
    {
      question: "Hva er den beste innvendingen mot at institusjonalisering binder et fag?",
      options: ["At egne rammer også kan verne mot krav utenfra og dermed gi rom", "At institusjoner alltid har vært midlertidige og lett kan endres", "At bindingen bare gjelder store fag med mange ansatte", "At faget kan velge å se bort fra rammene i sitt eget arbeid"],
      explanation: "Riktig svar er vernet: det som ser ut som binding, kan i praksis ha gitt frihet til å arbeide uten innblanding. Innvendingen er sterk fordi den snur premisset i stedet for å svekke det, og en besvarelse som tar den, har noe å drøfte i stedet for noe å hevde.",
    },
  ],
  'exfac03-hark-2-1': [
    {
      question: "Hva betegner humanitas i antikken?",
      options: ["Dannelsen som gjør et menneske menneskelig, og som samtidig avgrenser hvem som hører til «vi»", "Kunnskapsfeltet som samler språk, historie og filosofi under én felles metode og én avgrensning", "Rettighetene et fritt menneske hadde i det offentlige livet i byen han tilhørte", "Kravet om at en fortelling om fortiden skal begrenses til det etterprøvbare"],
      explanation: "Humanitas er et dannelsesideal for personer, ikke navnet på et kunnskapsfelt: den som har oppdragelsen, språket og omgangsformene, er innenfor. Distraktoren om et kunnskapsfelt er den dyreste fella, for humaniora som felt kommer først etter ca. 1800. De to andre blander begrepet med rettsstilling og med et krav til historieskriving.",
    },
    {
      question: "Hva er forskjellen mellom paideia og humanitas?",
      options: ["Paideia er den greske oppdragelsen som former mennesket, humanitas den romerske egenskapen resultatet gir", "Paideia gjelder skoleringen i tale og diktning, mens humanitas gjelder skoleringen i historie og filosofi", "Paideia er dannelse for de få, mens humanitas er dannelse gjort tilgjengelig for alle", "Paideia er et ideal fra klassisk tid, mens humanitas først oppstår i middelalderens klostre"],
      explanation: "De to begrepene peker på hver sin ende av samme sak: prosessen og resultatet. Distraktoren om fagfordeling finner en arbeidsdeling som ikke fantes, og den om tilgjengelighet for alle overser at dannelsen var fordelt. Tidfestingen til klostrene er feil periode.",
    },
    {
      question: "Hva kjennetegner menneskesynet i antikkens rad i periodenettet?",
      options: ["Et «vi» avgrenset av dannelse, «de andre» utenfor den, og jeget lite utviklet som eget tema", "Et «vi» avgrenset av tro, «de andre» som vantro, og jeget underordnet en guddommelig orden", "Et «vi» avgrenset av nasjon og språk, med folkeånden som den bærende enheten for det menneskelige", "Et «vi» avgrenset av fornuft, der alle mennesker i prinsippet er like og kan resonnere seg fram"],
      explanation: "Antikkens grense går gjennom oppdragelsen. Troen som grense hører til middelalderen, folkeånden til romantikken og den universelle fornuften til opplysningstiden — alle tre er senere rader i samme kolonne.",
    },
    {
      question: "Hva står Herodot for i emnets materiale?",
      options: ["Den brede fortellingen: skikker og det fremmede tas med, og usikkerheten blir stående i teksten", "Den stramme fortellingen: bare det politisk og militært etterprøvbare blir stående igjen i den ferdige teksten", "Den første systematiske metoden for å prøve en teksts ekthet, opphav og hensikt", "Den filosofiske innvendingen mot at fortellinger overhodet kan gi kunnskap om fortiden"],
      explanation: "Herodot representerer bredden, det etnografiske og den markerte usikkerheten. Den stramme utvalgsmåten er motstykket i samme par. Systematisk kildekritikk hører til renessansen, og den filosofiske innvendingen er ikke det posisjonen står for.",
    },
    {
      question: "Hvorfor er det omstridt om Thukydid er en tidlig kildekritiker?",
      options: ["Fordi prøvingen er en holdning hos én forfatter, ikke en overførbar framgangsmåte andre kan kontrollere", "Fordi han skrev om hendelser han selv ikke hadde vært til stede ved, og derfor manglet grunnlag for å prøve dem", "Fordi han ikke skilte mellom det han selv hadde iakttatt og det andre hadde fortalt ham", "Fordi kildekritikk per definisjon forutsetter arkiver, og arkiver fantes ikke i antikken"],
      explanation: "Kildekritikk i renessansens forstand er et sett framgangsmåter et fagfellesskap kan bruke og etterprøve. Det er nettopp overførbarheten som mangler når prøvingen ligger i én forfatters skjønn. De øvrige forklaringene er enten faktisk gale eller gjør et arkivkrav til en definisjon.",
    },
    {
      question: "Hva er talene i antikk historieskriving?",
      options: ["Rekonstruksjoner som skal vise hvilke hensyn som sto mot hverandre, ikke ordrette gjengivelser", "Ordrette referater, nedskrevet av tilhørere under møtet og senere samlet av forfatteren i det ferdige verket", "Rene oppdiktede scener uten forbindelse til det som faktisk ble sagt eller ment", "Sitater fra offentlige innskrifter, gjengitt for å dokumentere hva som ble vedtatt"],
      explanation: "Talen ligger mellom sitatet og den oppdiktede scenen: den skal være sannferdig om saken uten å være ordrett om ordene. Både referatlesningen og oppdiktningslesningen bommer på det, og innskriftslesningen bytter ut sjangeren med en helt annen kildetype.",
    },
    {
      question: "Hvordan beskrives kunnskapssynet i antikken best?",
      options: ["Som et spenn mellom eget syn, vitnesbyrd og resonnement, uten en felles metode alle er enige om", "Som en fast metode der egen observasjon alltid går foran vitnesbyrd og resonnement i ethvert stridsspørsmål", "Som en ordning der kunnskap først og fremst begrunnes i tekster med anerkjent autoritet", "Som en tro på at kunnskap om mennesket ikke kan begrunnes, bare fortelles og overleveres"],
      explanation: "Antikken har ingen avtalt metode, men et spenn av begrunnelsesmåter — det er nettopp det som gjør kolonnen interessant. Begrunnelse i autoritative tekster er middelalderens rad, og de to andre gjør spennet om til enten en fast regel eller et fravær.",
    },
    {
      question: "Hva menes med «det etterprøvbare» som utvalgsprinsipp?",
      options: ["Den delen av stoffet en annen person i prinsippet kunne kontrollert, valgt ut på bekostning av resten", "Den delen av stoffet som er nedtegnet skriftlig av en samtidig, i motsetning til det som bare er fortalt muntlig", "Den delen av stoffet som forfatteren selv har sett, i motsetning til det andre har fortalt henne", "Den delen av stoffet som senere forskning har bekreftet, i motsetning til det som er avvist"],
      explanation: "Prinsippet er kontrollerbarhet for en annen, og å følge det er et valg med en pris: alt som ikke lot seg kontrollere, faller ut. Skriftlighet, selvsyn og senere bekreftelse er nærliggende, men beskriver andre skiller enn dette.",
    },
    {
      question: "Hva er forskjellen mellom vitnesbyrd og eget syn i en antikk tekst?",
      options: ["Vitnesbyrd er det andre forteller at de har sett, eget syn er det forfatteren selv har iakttatt", "Vitnesbyrd er de muntlige kildene, mens eget syn er forfatterens egen tolkning av de skriftlige kildene", "Vitnesbyrd brukes om hendelser, mens eget syn brukes om skikker og geografiske forhold", "Vitnesbyrd er kilden brukt som levning, mens eget syn er kilden brukt som beretning"],
      explanation: "Skillet handler om hvor forfatteren har opplysningen fra, og de beste antikke tekstene sier hvilken av delene de bygger på. Levning og beretning er kildekritikkens senere par om hva en kilde brukes til, og de to andre alternativene innfører skiller teksten ikke gjør.",
    },
    {
      question: "Hva betyr det at spennet fra positivister til relativister finnes allerede i antikken?",
      options: ["At spenningen mellom sikker forklaring og situert framstilling er til stede fra første trinn i rekka", "At antikken hadde utviklet positivisme og relativisme som teoretiske posisjoner med hvert sitt begrepsapparat", "At antikkens forfattere var enige om at all framstilling av fortiden er like gyldig", "At skillet mellom å forklare og å forstå ble formulert som et metodekrav allerede i antikken"],
      explanation: "Poenget er spenningen, ikke begrepene: navnene er senere, men motsetningen mellom å ville forklare sikkert og å innse at framstillingen er ens egen, finnes fra start. De tre andre gjør enten begrepene eldre enn de er, eller tillegger perioden en enighet den ikke hadde.",
    },
    {
      question: "Hvorfor er retorikk i antikken en sjanger og en ferdighet, ikke et fag?",
      options: ["Fordi den mangler en avgrensning mot nabofeltene og en selvforståelse som eget kunnskapsfelt", "Fordi den ikke ble undervist systematisk, men lært gjennom etterligning av gode talere i offentligheten", "Fordi den ble regnet som underordnet filosofien og derfor ikke kunne være selvstendig", "Fordi den handler om framføring og ikke om kunnskap, og fag krever et kunnskapsinnhold"],
      explanation: "Et fag krever egne institusjoner, egne metoder, en avgrensning og en selvforståelse, og retorikken har bare de to første i praktisk form. At den ikke ble undervist, er direkte galt — den ble undervist mye. Å gjøre den underordnet filosofien eller å skille framføring fra kunnskap innfører rangordninger som ikke avgjør spørsmålet.",
    },
    {
      question: "Hva skiller antikkens historieskriving fra historiefaget etter ca. 1800?",
      options: ["Historiefaget har seminarer, arkiver og metodekrav et fellesskap er enige om; sjangeren har lesere", "Historiefaget bruker skriftlige kilder, mens antikkens historieskriving bygget på muntlige kilder", "Historiefaget skriver om samfunn, mens antikkens historieskriving bare skrev om kriger og politikk", "Historiefaget bygger på et teleologisk historiesyn, mens antikken forklarte hendelser med hensikt"],
      explanation: "Forskjellen er institusjonell og metodisk, ikke bare tematisk: sjangeren har et publikum, disiplinen har felles krav. Kildetypen og temaet varierer i begge, og det teleologiske historiesynet hører til middelalderens rad, ikke til historiefaget.",
    },
    {
      question: "Hvilken påstand følger av emnets bærende tese om humaniora før ca. 1800?",
      options: ["Antikken har måter å ordne kunnskap om mennesket på, men ikke et felt med egen avgrensning", "Antikken har humanistiske fag, men de er ikke organisert i fakulteter slik de blir det i middelalderen", "Antikken mangler kunnskap om mennesket, og slik kunnskap kommer først med renessansen", "Antikken har et humanistisk felt, men det går under et annet navn enn det vi bruker i dag"],
      explanation: "Tesen gjelder feltet — samlebetegnelsen, avgrensningen og selvforståelsen — ikke stoffet, som det var mye av. Fakultetsvarianten og navnevarianten beholder feltet og flytter bare formen, og påstanden om manglende kunnskap er en helt annen og gal påstand.",
    },
    {
      question: "Hvor går grensen mot nabofeltet i antikkens rad?",
      options: ["Mot filosofi og litteratur; naturvitenskapen er ennå ingen motpart å avgrense seg fra", "Mot teologi og juss, som eier de tyngste spørsmålene og de sikreste metodene i perioden", "Mot naturvitenskapen, som fra denne perioden av setter standarden for hva kunnskap er", "Mot samfunnsvitenskapene, som legger press på de fortellende måtene å behandle fortiden på"],
      explanation: "Grensen går alltid mot noe bestemt, og i antikken er det filosofien og diktningen. Teologi og juss er middelalderens naboer, naturvitenskapen kommer fra renessansen av, og samfunnsvitenskapene først på 1900-tallet.",
    },
    {
      question: "Hva kjennetegner en uformell institusjon i periodenettets forstand?",
      options: ["En fast ordning knyttet til personer, som forsvinner når personen som bar den, forsvinner", "En ordning uten fast møtested, der undervisningen foregår ute i det offentlige rommet", "En ordning uten betaling, der kunnskapen gis videre som en gave i stedet for som en tjeneste", "En ordning uten skriftlig materiale, der alt overleveres muntlig fra lærer til elev"],
      explanation: "Prøvespørsmålet er hva som skjer når personen faller fra: består ordningen, er den formell. Møtested, betaling og skriftlighet kan variere i begge typene og avgjør derfor ingenting.",
    },
    {
      question: "Hvorfor er institusjonskolonnen for antikken vanskelig å fylle riktig?",
      options: ["Fordi kunnskapen i hovedsak bæres av personer, mens ordet institusjon i dagligtale betyr en bygning", "Fordi antikken ikke hadde institusjoner i det hele tatt, verken formelle ordninger eller uformelle miljøer", "Fordi institusjonene var religiøse, og religiøse ordninger regnes ikke som kunnskapsbærende", "Fordi kildene om antikkens skoler er tapt, slik at kolonnen bare kan fylles med antakelser"],
      explanation: "Kolonnen spør etter ordningen som bærer kunnskapen videre, og i antikken er den ordningen i hovedsak uformell. Antikken hadde formelle institusjoner i politisk og religiøst liv, så påstanden om at det ikke fantes noen, er gal, og kildesituasjonen er ikke problemet her.",
    },
    {
      question: "Hva kjennetegner synet på fortiden i antikkens rad?",
      options: ["Fortiden er nær og sammenlignbar, tilgjengelig gjennom vitnesbyrd og fortelling, og noe å lære av", "Fortiden er fremmed og må forstås ut fra sine egne forutsetninger, ikke måles mot samtidens egne normer", "Fortiden er et tidligere trinn i en utvikling som fører fram mot samtidens høyere nivå", "Fortiden er bare tilgjengelig gjennom framstillinger som forteller om sin egen samtid"],
      explanation: "I antikken forutsettes menneskene før å ha handlet ut fra hensyn en leser kjenner igjen. Det fremmede ved fortiden er historismens innsikt, stadietenkningen er opplysningstidens, og representasjonstanken hører til tiden etter 1970.",
    },
    {
      question: "Hva er forskjellen på å bruke fortiden som noe å lære av og på framskrittstenkning?",
      options: ["Lærdomsbruken regner fortiden som sammenlignbar, framskrittstanken regner den som et lavere trinn", "Lærdomsbruken er knyttet til politikk, mens framskrittstanken er knyttet til vitenskapens utvikling", "Lærdomsbruken forutsetter kildekritikk, mens framskrittstanken kan klare seg uten kilder", "Lærdomsbruken hører til fortellende sjangre, mens framskrittstanken hører til fagtekster"],
      explanation: "Forskjellen ligger i rangeringen: i antikken er fortiden ikke lavere enn nåtiden, og derfor kan den lære oss noe. De andre alternativene innfører skiller i emne, metode og sjanger som ikke treffer selve motsetningen.",
    },
    {
      question: "Hva er en anakronisme?",
      options: ["Å bruke et senere begrep om en tidligere tilstand, slik at tilstanden ser ut som noe den ikke var", "Å bruke et upresist begrep om en tilstand, slik at graden blir feil mens arten fortsatt er riktig beskrevet", "Å datere en hendelse til feil år, slik at rekkefølgen mellom hendelser blir snudd", "Å bruke en kilde fra en senere periode til å belyse en tidligere periodes forhold"],
      explanation: "Anakronismen er en feil om art, ikke om grad: den flytter et fenomen fra én periode til en annen. En forenkling er upresis om graden, mens feil datering er en dateringsfeil og bruk av en senere kilde er et helt vanlig kildevalg.",
    },
    {
      question: "Hva gjør kontrastleddet i en epokekarakteristikk?",
      options: ["Setter to perioders rader mot hverandre og sier ledd for ledd hva som flyttet seg", "Oppsummerer periodens trekk til slutt, slik at leseren husker hovedpunktene fra gjennomgangen", "Vurderer om periodens syn på kunnskap holder mål målt mot dagens forskning", "Beskriver hva senere perioder har kritisert ved epoken, og hvorfor kritikken kom"],
      explanation: "Kontrastleddet sammenligner rader; det gjentar ikke det du nettopp skrev. Kritikken fra senere perioder er implikasjonsleddet, et annet av epokekarakteristikkens fire trinn, og en vurdering mot dagens forskning er ikke bestilt i det hele tatt.",
    },
    {
      question: "Hvorfor må antikkens kontrastledd skrives framover?",
      options: ["Fordi antikken er første trinn i rekka, og det finnes ingen forrige periode å måle mot", "Fordi antikken er dårligere dokumentert enn de senere periodene og krever mer tolkning", "Fordi antikkens trekk bare gir mening i lys av hvordan de senere ble kritisert", "Fordi rekka er bygget slik at hvert trinn forklares av det som kommer etter det"],
      explanation: "Kontrasten trenger to rader, og antikken har bare en etterfølger å sammenligne med. Dokumentasjonsgraden er ikke poenget, og å si at trekkene bare gir mening i lys av senere kritikk eller at hvert trinn forklares av det neste, gjør et praktisk trekk om til et prinsipp.",
    },
    {
      question: "Hvor ofte er periodisering og epokekarakteristikk prøvd i det dokumenterte materialet?",
      options: ["I 6 av 6 terminer, som gjør det til det eneste temaet som treffer alle de dokumenterte terminene", "I 4 av 6 terminer, altså på samme nivå som avgrensningen av humaniora mot naturvitenskapen", "I 2 av 6 terminer, som er samme nivå som hermeneutikken og fagenes etablering", "I 1 av 6 terminer, fordi temaet først kom inn med den nyeste dokumenterte terminen"],
      explanation: "Periodisering er det eneste temaet som står i alle seks dokumenterte terminene. Avgrensningen står i fire av seks, hermeneutikk og fagenes etablering i to av seks. Tallene viser hva som har vært prøvd, aldri hva som kommer.",
    },
    {
      question: "Hvilke fire trinn har en epokekarakteristikk?",
      options: ["Avgrens epoken, gi trekkene sortert etter nettets kolonner, skriv kontrasten, og skriv implikasjonene", "Avgrens epoken, gi trekkene i kronologisk rekkefølge, skriv en oppsummering og skriv en samlet konklusjon", "Definer begrepene, gi trekkene, sammenlign med en annen epoke, og vurder kildene som er brukt", "Formuler problemstillingen, gjør rede for pensum, drøft posisjonene, og land på et standpunkt"],
      explanation: "De fire trinnene er avgrensning, trekk, kontrast og implikasjoner, og det er kontrasten som oftest mangler. De tre andre oppsettene er enten en generell essaydisposisjon eller bytter ut kontrast- og implikasjonsleddet med noe annet.",
    },
    {
      question: "Hvilken formulering er den beste i en besvarelse om antikken?",
      options: ["«Antikkens måter å ordne kunnskap om mennesket på var knyttet til sjangre og dannelse»", "«Antikkens humanistiske fag var organisert rundt dannelsesidealet humanitas»", "«Humaniora i antikken hadde en klar arbeidsdeling mellom historie og retorikk»", "«Den humanistiske disiplinen retorikk hadde en sentral plass i antikkens undervisning»"],
      explanation: "Bare den første formuleringen unngår å forutsette et felt som ikke fantes. De tre andre er varianter av samme feil, som har nummer #6 i bokas register — å skrive om humaniora før ca. 1800 som om feltet allerede fantes.",
    },
  ],
  'exfac03-hark-2-2': [
    {
      question: "Hva kjennetegner et teleologisk historiesyn?",
      options: ["Hendelser forklares i lys av hva de peker fram mot, ikke bare av det som gikk forut", "Hendelser forklares av det som gikk forut, i en kjede av årsaker som kan følges bakover i tid", "Hendelser forklares av naturgitte forhold som klima, årstid og geografi", "Hendelser forklares av menneskers hensikter, slik de kommer til uttrykk i talene de holdt"],
      explanation: "Teleologien peker framover mot et mål, årsaksforklaringen bakover mot det som gjorde utfallet mulig. De to andre alternativene er årsaksforklaringer av bestemte typer, og ingen av dem gjør hendelsen til et tegn på noe som skal komme.",
    },
    {
      question: "Hva er forskjellen på frelseshistorie og teleologisk historiesyn?",
      options: ["Frelseshistorien er fortellingsformen, mens det teleologiske synet er premisset om retning", "Frelseshistorien gjelder kirkens egen historie, mens det teleologiske synet gjelder verdslige hendelser", "Frelseshistorien er middelaldersk, mens det teleologiske synet først oppstår med framskrittstanken", "Frelseshistorien forklarer med Guds vilje, det teleologiske med naturens orden"],
      explanation: "Et teleologisk syn kan finnes uten den kristne fortellingen, for eksempel i senere framskrittstenkning, men i middelalderen henger de sammen. De øvrige alternativene deler dem etter emne, tid eller forklaringsgrunn, og treffer ikke skillet mellom form og premiss.",
    },
    {
      question: "Hva betyr auctoritas som begrunnelsesmåte?",
      options: ["At en påstand gjelder fordi den står i en tekst med anerkjent autoritet", "At en påstand gjelder fordi den er bekreftet av flere uavhengige øyenvitner til hendelsen", "At en påstand gjelder fordi den er utledet logisk av premisser alle parter aksepterer", "At en påstand gjelder fordi den er prøvd mot bevarte spor"],
      explanation: "Begrunnelsen ligger i tekstens autoritet og i tolkningen av den. Vitnebekreftelse, ren logisk utledning og prøving mot fysiske spor er tre andre begrunnelsesmåter, og de hører til andre rader i kunnskapssyn-kolonnen.",
    },
    {
      question: "Hvordan flytter menneskesynet seg fra antikken til middelalderen?",
      options: ["Grensen mellom «vi» og «de andre» flytter seg fra dannelse til tro og tilhørighet", "Grensen flytter seg fra tro og tilhørighet til dannelse og skolering", "Grensen mellom «vi» og «de andre» flytter seg fra folkeånd og språk til religiøs tilhørighet", "Grensen mellom «vi» og «de andre» oppheves, siden alle mennesker regnes som del av samme orden"],
      explanation: "Antikken avgrenser med dannelse, middelalderen med tro. Retningen er altså motsatt av det ene alternativet, folkeånden hører til romantikken, og påstanden om at grensen oppheves stemmer ikke: den flyttes.",
    },
    {
      question: "Hva er hovedforskjellen mellom kloster og universitet som kunnskapsordninger?",
      options: ["Universitetet gir grader og fordeler adgang, mens klosteret bevarer og gir kunnskapen videre", "Universitetet er en formell ordning, mens klosteret er en uformell ordning knyttet til abbeden", "Universitetet er verdslig og uavhengig av kirken, mens klosteret er kirkelig og lukket for andre", "Universitetet underviser i alle fag, mens klosteret bare underviser i teologi og kirkerett"],
      explanation: "Begge er formelle og varige; forskjellen ligger i at universitetet sertifiserer gjennom grader. Klosteret er ikke uformelt, det er ikke slik at universitetet står utenfor kirken i perioden, og fagfordelingen er en annen sak enn ordningsformen.",
    },
    {
      question: "Hva er det avgjørende trekket ved en formell institusjon?",
      options: ["At ordningen overlever den enkelte og kan fylles av en ny person i samme rolle", "At ordningen har en egen bygning der undervisningen foregår", "At ordningen har skriftlige regler for hvordan kunnskapen skal overleveres til neste ledd", "At ordningen er anerkjent av en verdslig eller kirkelig myndighet med rett til å oppheve den"],
      explanation: "Prøvespørsmålet er hva som skjer når personen faller fra. Bygning, skriftlige regler og myndighetsanerkjennelse kan finnes eller mangle i begge typer ordninger, og avgjør derfor ikke spørsmålet.",
    },
    {
      question: "Hvor går grensen mot nabofeltet i middelalderens rad?",
      options: ["Mot teologi og juss, som eier de tyngste spørsmålene og de sikreste framgangsmåtene", "Mot filosofi og litteratur, som eier både spørsmålene om det sanne og fortellingens former", "Mot naturvitenskapen, som fra denne perioden setter standarden for hva kunnskap er", "Mot medisinen, som er det eneste faget med egen erfaringsbasert framgangsmåte i perioden"],
      explanation: "Grensen går alltid mot noe bestemt, og i middelalderen er det teologien og jussen. Filosofi og litteratur er antikkens naboer, naturvitenskapen kommer senere, og medisinen er ikke den grensen periodenettet fører opp her.",
    },
    {
      question: "Hva slags kilde er en tekst i middelalderens kunnskapssyn?",
      options: ["En tekst som skal forstås og utlegges riktig, snarere enn et spor som skal prøves for ekthet", "En tekst som skal prøves for ekthet, opphav og hensikt før innholdet kan brukes til noe", "En tekst som bare har verdi dersom forfatteren er kjent og kan tidfestes med sikkerhet", "En tekst som regnes som levning av sin egen samtid, og ikke som beretning om det den omtaler"],
      explanation: "Arbeidet består i kommentar, sammenstilling og utlegning, mens prøvingen av opphav først systematiseres i renessansen. Kravene om kjent forfatter og skillet levning mot beretning er senere begreper lagt inn i perioden.",
    },
    {
      question: "Hvorfor er det galt å skrive om «middelalderens humanistiske fag»?",
      options: ["Fordi fakultetsinndelingen skilte teologi, juss og medisin fra forberedende studier, ikke ut et humanistisk felt", "Fordi middelalderen ikke hadde undervisning i språk, historie og retorikk i det hele tatt, verken i klostrene eller ved katedralskolene", "Fordi fagene i perioden var rene ferdighetsfag uten skriftlig materiale eller lærebøker", "Fordi humaniora i perioden gikk under et annet navn, som må brukes i stedet for det moderne"],
      explanation: "Feilen ligger i å lese et felt inn i en inndeling som ikke var laget for å skille det ut. Perioden hadde både undervisning og skriftlig materiale, og navnevarianten beholder feltet og bytter bare etiketten.",
    },
    {
      question: "Hva skiller en kontrast fra en verdidom?",
      options: ["Kontrasten sier hva som flyttet seg og i hvilken kolonne, mens verdidommen rangerer periodene", "Kontrasten sammenligner to perioder, mens verdidommen bare beskriver den ene av dem grundig", "Kontrasten bruker kilder fra begge perioder, mens verdidommen bygger på framstillinger i ettertid", "Kontrasten hører til drøftingsleddet, mens verdidommen hører til implikasjonsleddet i oppgaven"],
      explanation: "Prøven er om setningen kan skrives som en flytting fra X til Y. En verdidom nevner gjerne to perioder, men rangerer dem, og den kan derfor ikke bygges videre på i implikasjonsleddet.",
    },
    {
      question: "Hva er det viktigste ved flyttingen fra person til ordning?",
      options: ["At kunnskapssynet kan overleve enkeltmennesker og dermed vare i århundrer", "At undervisningen blir billigere fordi flere elever samles ett sted", "At kunnskapen blir skriftlig i stedet for muntlig, og dermed kan spres over større avstander", "At kirken får kontroll over hva som undervises, og kan avvise lærdom den ikke godtar"],
      explanation: "Varigheten er det avgjørende: en ordning med bibliotek og avskrivning bærer kunnskapen videre uavhengig av den enkelte. De andre alternativene beskriver følger som kan inntreffe, men som ikke er det kolonnen måler.",
    },
    {
      question: "Hvilken formulering er den beste kontrasten mellom antikken og middelalderen?",
      options: ["«Begrunnelsen flytter seg fra et åpent spenn av kilder til autoritative tekster og tolkningen av dem»", "«Antikken var opplyst og fri, mens middelalderen ble lukket og bundet av kirkens autoritet i alle spørsmål»", "«Middelalderen hadde ikke vitenskap slik antikken hadde det, og mistet derfor mye kunnskap»", "«I antikken skrev de om mennesker, mens de i middelalderen skrev om Gud og hans handlinger»"],
      explanation: "Riktig svar navngir én kolonne — kunnskapssynet — og sier hvilken vei den flytter seg. Påstandene om at antikken var «opplyst og fri» og at middelalderen «mistet kunnskap», er verdidommer forkledd som sammenligninger. At de skrev om mennesker mot at de skrev om Gud, er en forenkling som verken navngir kolonne eller flytting.",
    },
    {
      question: "Hva innebærer det at fortiden i middelalderen er meningsbærende?",
      options: ["At hendelser kan leses som tegn i et forløp med en gitt retning, og ikke bare som utfall", "At hendelser bare kan tolkes av lærde med adgang til de autoritative tekstene og kommentarene", "At hendelser må gjengis nøyaktig for at meningen skal kunne leses ut av dem i ettertid", "At hendelser vurderes etter samtidens egne normer og ikke etter normene til senere lesere"],
      explanation: "Meningen ligger i plasseringen i forløpet: uværet er et varsel, ikke bare et uvær. Tolkningsadgang og nøyaktig gjengivelse er andre spørsmål, og å måle mot samtidens egne normer er historismens ideal fra en langt senere periode.",
    },
    {
      question: "Hvorfor er det upresist å si at middelalderen manglet kildekritikk?",
      options: ["Fordi avskrivningen var svært nøyaktig; det som manglet, var spørsmålet om tekstens opphav", "Fordi kildekritikk fantes fullt utviklet, men bare ble brukt på verdslige og ikke på hellige tekster", "Fordi kildekritikk ikke er mulig uten arkiver, og arkivene ble først opprettet i renessansen", "Fordi kildekritikk var forbudt av kirkelige myndigheter og derfor ikke kunne utøves åpent"],
      explanation: "Det som manglet, var ikke omhu, men et bestemt spørsmål: er teksten den den utgir seg for å være? Påstandene om full utvikling, om arkivkrav og om forbud er ikke belagt og bytter ut skillet med noe annet.",
    },
    {
      question: "Hva er det beste eksempelet på at et begrep brukes aktivt og ikke bare nevnes?",
      options: ["Å peke på ordet «varsel» i en tekst og vise at hendelsen forklares av det den peker fram mot", "Å skrive at middelalderen hadde et teleologisk historiesyn, og oppgi hvem begrepet stammer fra", "Å definere teleologi nøyaktig og deretter gjengi definisjonen på nytt i konklusjonen", "Å nevne teleologien i innledningen, slik at leseren vet hvilket begrepsapparat teksten bruker"],
      explanation: "Aktiv bruk betyr at begrepet gjør et arbeid på et konkret materiale. De tre andre alternativene er varianter av å nevne begrepet, og de faller inn under registerets tredje feil — å bruke et fagbegrep som etikett uten å aktivere det.",
    },
    {
      question: "Hva består fra antikken til middelalderen i kunnskapssynet?",
      options: ["Resonnementet som redskap, nå i en fastere form gjennom undervisningen", "Vitnesbyrdet fra øyenvitner, som fortsatt regnes som sikrest", "Det åpne spennet mellom flere begrunnelsesmåter, uten en felles regel for hva som veier tyngst", "Fortellingen om «oss» mot «de andre», nå uten noen form for religiøs avgrensning"],
      explanation: "Den logiske bearbeidingen av påstander er sentral i begge periodene og gis en fastere form i undervisningen. De tre andre alternativene beskriver enten noe som endrer seg, eller legger til et tillegg som ikke stemmer.",
    },
    {
      question: "Hva er det svakeste punktet i en besvarelse som beskriver middelalderen som «mørk»?",
      options: ["At verdidommen ikke kan gjøres om til en flytting mellom to rader i periodenettet", "At verdidommen bygger på kilder fra en senere periode enn den som beskrives", "At verdidommen er upopulær i faglitteraturen og derfor svekker inntrykket av besvarelsen", "At verdidommen krever et implikasjonsledd som er lengre enn oppgaven gir plass til"],
      explanation: "Kontrastleddet krever en flytting, og en rangering gir ingen. Den faglige populariteten er ikke argumentet, og lengden på implikasjonsleddet har ikke noe med saken å gjøre.",
    },
    {
      question: "Hvordan bør institusjonskolonnen for middelalderen fylles ut?",
      options: ["Med formelle, varige ordninger: klostre, katedralskoler og de første universitetene", "Med uformelle miljøer rundt enkeltlærere, slik som i antikkens rad i det samme nettet", "Med kongelige og fyrstelige hoff, som var de eneste stedene med samlinger av bøker", "Med akademier og lærde selskaper, som overtok etter klostrene tidlig i perioden"],
      explanation: "Kolonnen fylles med de varige ordningene som bar kunnskapen. Uformelle miljøer hører til antikkraden, og hoff, akademier og lærde selskaper hører til senere rader i samme kolonne.",
    },
    {
      question: "Hva sier det teleologiske historiesynet om forholdet mellom hendelse og forklaring?",
      options: ["At en hendelse kan være et tegn på noe som skal komme, og forklares gjennom sin plass i forløpet", "At en hendelse må ha en materiell årsak som i prinsippet kan iakttas av flere uavhengige personer", "At en hendelse ikke kan forklares i det hele tatt, men bare beskrives så nøyaktig som mulig", "At en hendelse forklares av hensiktene til de menneskene som handlet i den aktuelle situasjonen"],
      explanation: "Plasseringen i forløpet er det som gir hendelsen mening. Kravet om materiell årsak hører til et senere kunnskapssyn, mens påstanden om at hendelser ikke kan forklares og forklaringen ut fra aktørenes hensikter, begge bytter ut retningen framover med noe annet.",
    },
    {
      question: "Hvorfor er middelalderen en viktig kontrastflate i boka?",
      options: ["Fordi både antikken foran og renessansen etter kjennes tydeligst igjen når de holdes mot denne raden", "Fordi perioden er den lengste av de sju og derfor rommer flest hendelser å hente eksempler fra", "Fordi perioden er den eneste som er gitt som eget oppgavealternativ i det dokumenterte materialet fra emnet", "Fordi perioden mangler egne trekk og derfor bare kan beskrives gjennom det som kom før og etter"],
      explanation: "Middelalderraden er det de to nabotrinnene måles mot, og derfor gir den mest presise kontraster begge veier. Lengden er irrelevant, perioden er ikke gitt som eget oppgavealternativ, og den har rikelig med egne trekk.",
    },
    {
      question: "Hva bør en besvarelse gjøre med spenningen mellom teleologi og prøving av tekster?",
      options: ["Skille mellom å gjengi en tekst riktig og å prøve om den er ekte, og bruke skillet til å avgjøre", "Slå fast at tro og kritikk ikke går sammen, og avslutte drøftingen med den konstateringen uten flere ledd", "Vise til at spørsmålet ikke kan avgjøres, siden begge posisjoner har gode argumenter", "Utsette spørsmålet til renessanseraden, der kildekritikken uansett behandles fullt ut"],
      explanation: "Det er skillet mellom to slags prøving som gjør spørsmålet mulig å avgjøre, og en landing med begrunnelse er det som gir uttelling. Å konstatere uforenlighet, å la spørsmålet stå åpent uten grunner eller å skyve det til et annet kapittel er tre måter å la være å drøfte.",
    },
    {
      question: "Hvilket ledd i den lange linjens form er det som oftest mangler?",
      options: ["Leddet som sier hva som består gjennom alle trinnene, ikke bare hva som skifter", "Leddet som navngir tendensen i én setning før gjennomgangen av trinnene begynner", "Leddet som setter opp de sju trinnene med ett stikkord hver fra periodenettet", "Leddet som skriver to til tre setninger om hvert enkelt trinn i rekkefølge"],
      explanation: "Fjerde ledd i formen ber om både det som består og det som skifter, og det er det bestående som oftest faller ut. De tre andre leddene er de som normalt kommer med, siden de følger av selve gjennomgangen.",
    },
    {
      question: "Hva er den beste måten å åpne middelalderens trinn i en lang linje om begrunnelse?",
      options: ["Med hva begrunnelsen besto i her, og deretter flyttingen fra det forrige trinnet", "Med en kort oppsummering av antikkens begrunnelsesmåter før middelalderen behandles", "Med en vurdering av om middelalderens begrunnelsesmåte holder mål etter dagens krav", "Med en presentasjon av de viktigste institusjonene som bar kunnskapen i perioden"],
      explanation: "Et trinn skal si hva tendensen så ut som der, og hva som endret seg fra forrige trinn. En oppsummering av forrige trinn stjeler plass, en vurdering mot dagens krav er ikke bestilt, og institusjonene hører til en annen kolonne.",
    },
  ],
  'exfac03-hark-2-3': [
    {
      question: "Hva prøver kildekritikken?",
      options: ["Om en tekst er ekte, hvem som har laget den, når, og hva avsenderen ville med den", "Om innholdet i en tekst er sant, målt mot det vi i dag vet om hendelsene den omtaler", "Om en tekst er skrevet i en form som gjør den egnet til å brukes som forbilde", "Om en tekst har tilstrekkelig autoritet til at påstandene i den kan legges til grunn"],
      explanation: "Kildekritikken gjelder ekthet, opphav og hensikt. Å prøve om innholdet er sant, er et annet og senere spørsmål, og autoritetsprøven er middelalderens begrunnelsesmåte. Formspørsmålet hører til bruken av antikken som modell.",
    },
    {
      question: "Hva kan ekthetsprøvingen ikke avgjøre?",
      options: ["Om innholdet i dokumentet er sant, siden et ekte dokument kan lyve", "Om dokumentet er skrevet på det tidspunktet det oppgir", "Om dokumentet viser til institusjoner som eksisterte da det skal ha blitt laget", "Om språkbruken i dokumentet hører hjemme i den tiden det utgir seg for"],
      explanation: "Ekthet og sannhet er to spørsmål: et ekte brev kan lyve, og et forfalsket kan gjengi noe riktig. De tre andre alternativene er nettopp det ekthetsprøvingen kan avgjøre, gjennom datering, institusjoner og språkbruk.",
    },
    {
      question: "Hva er filologiens forhold til kildekritikken?",
      options: ["Filologien er forutsetningen: den avgjør hva som sto der og hva ordene betydde da", "Filologien er en senere videreutvikling av kildekritikken, rettet mot litterære tekster", "Filologien er det samme som kildekritikk, bare med et annet navn i språkfagene", "Filologien er en metode i naturvitenskapen som senere ble overført til tekstfagene"],
      explanation: "Kildekritikken vokser ut av det filologiske håndverket med avskrifter og ordbruk. Den er dermed verken samme sak, en senere avlegger eller en importert naturvitenskapelig metode.",
    },
    {
      question: "Hvorfor er språkbruk et sterkt spor i ekthetsprøving?",
      options: ["Fordi et uttrykk som ikke fantes på det oppgitte tidspunktet, avslører teksten uten kunnskap om saken", "Fordi språkbruken viser hvor godt utdannet forfatteren var, og dermed hvor pålitelig framstillingen hennes er", "Fordi språkbruken avslører hvilke kilder forfatteren selv hadde tilgang til da hun skrev", "Fordi språkbruken viser om teksten er skrevet for et lærd eller for et bredt publikum"],
      explanation: "Sporet gjelder formen og virker uavhengig av hva teksten handler om. Utdanningsnivå, kildetilgang og publikum kan være interessante opplysninger, men de daterer ikke dokumentet.",
    },
    {
      question: "Hva er den viktigste nyheten i renessansens syn på fortiden?",
      options: ["At fortiden er annerledes og må dateres, slik at tekster kan plasseres i sitt eget tidslag", "At fortiden må forstås ut fra sine egne forutsetninger og ikke måles mot nåtidens egne normer", "At fortiden inngår i et forløp med en retning, der hendelser kan leses som tegn", "At fortiden bare er tilgjengelig gjennom framstillinger som forteller om sin egen samtid"],
      explanation: "Renessansen oppdager at fortiden er fremmed nok til å kunne dateres. Kravet om å forstå en periode på dens egne premisser er historismens, forløpet med retning er middelalderens, og representasjonstanken hører til tiden etter 1970.",
    },
    {
      question: "Hva er forskjellen på antikke tekster som autoriteter og som forbilder?",
      options: ["Autoriteten avgjør et spørsmål, mens forbildet setter en standard man etterligner og undersøker", "Autoriteten gjelder religiøse tekster, mens forbildet gjelder verdslige tekster, diktning og tale", "Autoriteten gjelder innholdet, mens forbildet gjelder hvem som skrev teksten opprinnelig", "Autoriteten er knyttet til universitetet, mens forbildet er knyttet til hoff og akademier"],
      explanation: "Samme tekst kan ha to ulike roller: å avgjøre en strid, eller å sette en målestokk for form og språk. De øvrige alternativene deler etter emne, forfatter eller institusjon, og treffer ikke rolleforskjellen.",
    },
    {
      question: "Hva menes med jegets fødsel i renessansen?",
      options: ["At enkeltmenneskets erfaring blir skrivverdig og får egne sjangre som brev og levnetsbeskrivelser", "At mennesker for første gang fikk et indre liv med tvil, ønsker og en egen selvforståelse", "At forfatteren for første gang oppgir navnet sitt i teksten i stedet for å være anonym", "At kunstnere begynner å avbilde enkeltpersoner i stedet for grupper og religiøse motiver"],
      explanation: "Det nye er at det indre livet blir verdt å skrive ned, ikke at det oppsto. Navngiving og portrettkunst er beslektede uttrykk, men ingen av dem er det begrepet betegner.",
    },
    {
      question: "Hva gjorde trykkekunsten med arbeidet med tekster?",
      options: ["Den ga standardisering: mange like eksemplarer, men også feil som kunne spres i alle", "Den ga variasjon mellom eksemplarene, som filologien deretter måtte rydde opp i", "Den gjorde avskrivning overflødig, slik at klostrenes rolle forsvant i løpet av kort tid", "Den gjorde tekster billigere, men endret ikke hvordan de ble lest eller kontrollert"],
      explanation: "Standardiseringen gjør det meningsfullt å snakke om «teksten» i bestemt form, og den sprer også feilene. Variasjonen kom fra avskrivningen, klostrene forsvant ikke raskt, og prisendring alene beskriver ikke virkningen.",
    },
    {
      question: "Hvordan er institusjonskolonnen for renessansen best beskrevet?",
      options: ["Som sammensatt: universiteter, hoff og akademier, lærde nettverk og trykkekunsten samtidig", "Som entydig: universitetet overtar helt etter klosteret og blir den eneste kunnskapsbæreren", "Som uformell: kunnskapen bæres av enkeltlærere, slik som i antikkens rad i det samme nettet", "Som statlig: fyrstene oppretter institusjoner som erstatter de kirkelige helt"],
      explanation: "Poenget er at kunnskapen får flere bærere som konkurrerer. De tre andre beskrivelsene gjør kolonnen entydig, flytter den tilbake til antikkens form eller innfører en statlig overtakelse som ikke skjer i perioden.",
    },
    {
      question: "Hvilken ny nabo får humanistisk kunnskap i renessansens rad?",
      options: ["Naturvitenskapen, uten at skillet ennå er institusjonalisert i egne fakulteter", "Teologien og jussen, som fra denne perioden av eier de tyngste spørsmålene", "Samfunnsvitenskapene, som legger press på de fortellende måtene å behandle fortiden på", "Filosofien og litteraturen, som frem til nå hadde vært behandlet som samme område"],
      explanation: "Den nye naboen er naturvitenskapen, og den kommer i tillegg til de gamle. Teologi og juss er middelalderens naboer, filosofi og litteratur antikkens, og samfunnsvitenskapene kommer først på 1900-tallet.",
    },
    {
      question: "Hvorfor er «renessansen gjenoppdaget antikken» en svak karakteristikk?",
      options: ["Fordi antikke tekster ble lest gjennom hele middelalderen; det nye er hvordan de ble lest", "Fordi antikke tekster i virkeligheten ble gjenoppdaget først i opplysningstiden", "Fordi renessansen forkastet antikken som forbilde og søkte sine modeller i samtiden i stedet", "Fordi gjenoppdagelsen bare gjaldt kunst og arkitektur, ikke tekster og tenkning"],
      explanation: "Setningen mangler kontrastleddet: den sier ikke hva som var annerledes ved lesningen. De tre andre alternativene er faktisk gale påstander om perioden.",
    },
    {
      question: "Hva er forskjellen på ytre og indre kildekritikk?",
      options: ["Ytre gjelder dokumentet som gjenstand, indre gjelder hva forfatteren kunne vite og ville", "Ytre gjelder skriftlige kilder, mens indre gjelder muntlige kilder og overleveringer i ettertid", "Ytre utføres av arkivarer, mens indre utføres av historikere i selve forskningsarbeidet", "Ytre gjelder eldre kilder, mens indre bare kan brukes på kilder fra de siste århundrene"],
      explanation: "Det ene spørsmålet gjelder ekthet, datering og opphav, det andre pålitelighet og hensikt, og de kan gi motsatt svar. Kildetype, yrkesgruppe og alder på kilden avgjør ingenting her.",
    },
    {
      question: "Hva bør en besvarelse gjøre med spenningen mellom fremmed fortid og antikken som forbilde?",
      options: ["Skille mellom form og ordning: formen kan etterlignes selv om ordningene ikke lar seg overføre", "Slå fast at spenningen er en selvmotsigelse renessansen aldri klarte å løse opp i, og gå videre", "Vise til at kildekritikken fjerner spenningen, siden daterte tekster ikke kan være forbilder", "Utsette spørsmålet til historismen, der forholdet til fortiden uansett behandles grundig"],
      explanation: "Skillet mellom form og ordning gjør spenningen håndterbar og gir en landing med begrunnelse. De tre andre måtene er å konstatere, å avlyse eller å skyve spørsmålet vekk.",
    },
    {
      question: "Hvorfor er «renessansehumanismen» ikke det samme som humaniora?",
      options: ["Fordi den er et dannelses- og studieprogram, ikke et kunnskapsfelt med egen avgrensning", "Fordi den bare gjaldt latin og gresk, mens humaniora også omfatter historie og arkeologi", "Fordi den var knyttet til enkeltpersoner, mens humaniora alltid er knyttet til universiteter", "Fordi den oppsto i Italia, mens humaniora som felt oppsto i de tyske universitetene"],
      explanation: "Ordlikheten frister, men programmet mangler feltets avgrensning og selvforståelse. De øvrige alternativene bytter ut det avgjørende kriteriet med emne, personer eller geografi.",
    },
    {
      question: "Hva er den beste måten å vise kildekritikk i arbeid på i en besvarelse?",
      options: ["Å peke på et ord eller en ordning i et dokument som ikke kan ha vært i bruk på det oppgitte tidspunktet", "Å definere kildekritikk presist og oppgi hvem i faglitteraturen definisjonen er hentet fra, før den brukes videre", "Å nevne at renessansen utviklet kildekritikk, og plassere det i riktig periode i rekka", "Å forklare forskjellen på ytre og indre kildekritikk med to eksempler fra pensum"],
      explanation: "Aktiv bruk betyr at begrepet gjør et arbeid på et konkret materiale. De tre andre alternativene er velformede måter å nevne begrepet på, og faller inn under registerets tredje feil.",
    },
    {
      question: "Hva er en levning i motsetning til en beretning, brukt på et forfalsket dokument?",
      options: ["Levningen forteller om sin egen tilblivelsestid, mens beretningen forteller om det den omtaler", "Levningen er en fysisk gjenstand, mens beretningen alltid er en skriftlig framstilling av hendelser", "Levningen er en ekte kilde, mens beretningen er en kilde som er avslørt som uekte", "Levningen brukes i arkeologi, mens beretningen brukes i historiefaget og i kildekritikken"],
      explanation: "Et avslørt dokument kan fortsatt brukes — som levning av tiden det faktisk ble laget i. Skillet handler om bruksmåte, ikke om materialitet, ekthet eller fagtilhørighet.",
    },
    {
      question: "Hva flytter seg i kunnskapssyn-kolonnen fra middelalderen til renessansen?",
      options: ["Begrunnelsen utvides fra autoritet til også å omfatte arbeidet med kildene", "Begrunnelsen flytter seg fra kildearbeid til autoritet", "Begrunnelsen flytter seg fra observasjon av naturen til lesning av klassiske tekster", "Begrunnelsen forsvinner som spørsmål, siden alle kilder nå regnes som like gyldige"],
      explanation: "Flyttingen er et tillegg, ikke en erstatning: autoriteten består lenge ved siden av prøvingen. De øvrige alternativene snur retningen, bytter kolonne eller påstår en relativisme perioden ikke har.",
    },
    {
      question: "Hvorfor er det en fordel å skrive renessansens kontrastledd som tillegg framfor brudd?",
      options: ["Fordi en overdrevet kontrast er lett å motsi, og en motsagt kontrast kan ikke brukes videre", "Fordi sensor alltid foretrekker forsiktige formuleringer framfor tydelige standpunkter", "Fordi brudd er et begrep som er forbeholdt drøftingen av postmodernismen etter ca. 1970", "Fordi tillegg er lettere å skrive kort, og kontrastleddet skal alltid være det korteste leddet"],
      explanation: "En kontrast du kan belegge, tåler innvendinger og bærer implikasjonsleddet etterpå. De andre alternativene gjør presisjon til forsiktighet, reserverer et vanlig begrep, eller innfører en lengderegel som ikke finnes.",
    },
    {
      question: "Hva kjennetegner «oss mot de andre» i renessansens geografiske form?",
      options: ["Beskrivelser av fremmede folk er ofte knyttet til krav på land, handel eller styre", "Beskrivelser av fremmede folk er rent etnografiske og uten praktiske interesser", "Beskrivelser av fremmede folk erstatter helt de eldre grensene som gikk gjennom tro", "Beskrivelser av fremmede folk finnes først i opplysningstiden, med stadietenkningen"],
      explanation: "Det nye elementet er at beskrivelsene ofte tjener et krav, og det gjør spørsmålet om hensikt skarpere. Grensene fra tidligere rader forsvinner ikke, og reisebeskrivelser finnes lenge før stadietenkningen.",
    },
    {
      question: "Hva er lærde nettverk, og hvorfor hører de hjemme i institusjonskolonnen?",
      options: ["Varige forbindelser mellom personer holdt sammen av brev og lesning, som avgjør hvem som blir lest", "Uformelle vennskap uten faglig betydning, som først får en rolle i det moderne forskningsuniversitetet", "Faglige foreninger med vedtekter og medlemskap, opprettet av fyrster i de største byene", "Universitetenes samarbeid om felles pensum og felles grader på tvers av landegrensene"],
      explanation: "Nettverkene gir anerkjennelse, og anerkjennelse er en kunnskapsbærende ordning selv uten vedtekter. De øvrige alternativene gjør dem enten betydningsløse eller til formelle organer de ikke var.",
    },
    {
      question: "Hvilket ledd mangler oftest når renessansen skal skrives som ett trinn i en lang linje?",
      options: ["Leddet som sier hva som består fra forrige trinn, ved siden av det som endrer seg", "Leddet som navngir tendensen i én setning før gjennomgangen begynner", "Leddet som gir hvert trinn et stikkord hentet fra periodenettets kolonner", "Leddet som til slutt drøfter om utviklingen er en linje, en pendel eller et brudd"],
      explanation: "Både det bestående og det skiftende hører til fjerde ledd i formen, og det bestående er det som oftest faller ut. De andre leddene kommer normalt med, siden de følger av selve gjennomgangen.",
    },
    {
      question: "Hva slags spor er en uoppfordret forsikring om at teksten er skrevet med egen hånd?",
      options: ["Et spor om hensikt: teksten arbeider for å bli trodd, og det er i seg selv en opplysning", "Et spor om ekthet: slike forsikringer var påbudt i offentlige dokumenter i denne perioden", "Et spor om innhold: forsikringen viser at forfatteren var til stede ved hendelsen", "Et spor om overlevering: forsikringen viser at dokumentet er kopiert flere ganger"],
      explanation: "Ingen skriver uoppfordret at de er ekte med mindre det er noe å oppnå. Sporet gjelder derfor hensikten, ikke dateringen, innholdet eller kopieringshistorien.",
    },
    {
      question: "Hva er den mest presise formuleringen om kildekritikkens opphav?",
      options: ["Den vokser ut av tekstarbeid, men tas i bruk der noe står på spill, som i tvister om rettigheter", "Den er oppfunnet av jurister og senere lånt av tekstfagene uten vesentlige endringer av framgangsmåten", "Den er oppfunnet i tekstfagene og har aldri hatt noen praktisk anvendelse utenfor dem", "Den er oppfunnet i naturvitenskapen og overført til tekstfagene gjennom eksperimentet"],
      explanation: "Formuleringen skiller mellom hvor metoden kommer fra og hvorfor den ble tatt i bruk, og det er nettopp det skillet som gjør drøftingen mulig å lande. De øvrige alternativene velger side eller flytter opphavet til et helt annet felt.",
    },
    {
      question: "Hvordan bør en besvarelse omtale forholdet mellom autoritet og prøving i renessansen?",
      options: ["Som to holdninger som lever side om side i lang tid hos de samme personene", "Som to holdninger som utelukker hverandre fullstendig", "Som to holdninger knyttet til hver sin institusjon, med universitetet mot akademiet", "Som to holdninger knyttet til hvert sitt land, med Italia mot de nordlige områdene"],
      explanation: "Sameksistensen er en av grunnene til at perioden er vanskelig å datere skarpt, og den er derfor et poeng verdt å skrive ut. De øvrige alternativene innfører skarpe skiller mellom institusjoner, land eller tidsrom som materialet ikke gir grunnlag for.",
    },
  ],
  'exfac03-hark-2-4': [
    {
      question: "Hva er universalisme i opplysningstidens forstand?",
      options: ["At ett sett normer og én fornuft gjelder for alle mennesker, uavhengig av tid og sted", "At alle folkeslag gjennomløper de samme trinnene i samme rekkefølge gjennom historien", "At kunnskap i prinsippet hører til én vitenskap med felles metode og felles krav til prøving", "At kunnskap skal spres til alle som kan lese, og ikke forvaltes av noen få innvidde lærde"],
      explanation: "Universalismen gjelder normer og fornuft. Trinnrekkefølgen er stadietenkning, kravet om felles metode er enhetsvitenskap, og spredningen av kunnskap er opplysningsprogrammet — tre nære, men ulike ideer.",
    },
    {
      question: "Hva er stadietenkning?",
      options: ["Å forstå historien som trinn samfunn gjennomløper i samme rekkefølge, slik at de kan plasseres", "Å forstå historien som en organisk utfoldelse der hvert samfunn utvikler sin egen egenart innenfra", "Å forstå historien som et forløp med et mål gitt utenfra, der hendelser kan leses som tegn", "Å forstå historien som en rekke enkelthendelser uten noen samlende retning eller rekkefølge"],
      explanation: "Trappen er den samme for alle, og derfor kan et samfunn plasseres etter hvor langt det er kommet. Den organiske utfoldelsen er romantikkens svar, det utenfrastyrte målet er middelalderens, og fraværet av retning er ingen av delene.",
    },
    {
      question: "Hva er den beste prøven på om stadietenkningen er en rangering?",
      options: ["Om rekkefølgen sier noe om verdi, og hvor trappen ender — hos hvem", "Om teksten sier at noen folk har dårligere evner", "Om teksten bygger på iakttakelser av hvordan samfunn faktisk har endret seg over tid", "Om teksten er skrevet av en forfatter som selv tilhørte det øverste trinnet i rekken"],
      explanation: "Rekkefølgen blir en verdiakse så snart endepunktet er forfatterens egen samtid, uansett hvor velvillig teksten ellers er. Manglende evner nevnes ofte ikke, iakttakelser finnes i begge tilfeller, og forfatterens tilhørighet alene avgjør ikke formen.",
    },
    {
      question: "Hva er enhetsvitenskap?",
      options: ["Ideen om at all kunnskap i prinsippet hører til én vitenskap med felles metode og felles krav", "Ideen om at alle vitenskaper bør samles i én institusjon under felles ledelse og styring", "Ideen om at humanistisk kunnskap bør vurderes etter de samme kvalitetskravene som annen kunnskap", "Ideen om at ulike gjenstander krever ulike framgangsmåter, siden mennesker ikke er naturprosesser"],
      explanation: "Kravet gjelder metode og prøving, ikke organisering. Kravet om felles kvalitetsvurdering er en senere og smalere variant, og påstanden om at ulike gjenstander krever ulike framgangsmåter, er metodemangfoldet — altså motposisjonen.",
    },
    {
      question: "Hva skiller framskrittstanken fra det teleologiske historiesynet?",
      options: ["Framskrittstanken plasserer målet i historien selv, som noe mennesker frambringer", "Framskrittstanken har ingen retning i det hele tatt", "Framskrittstanken gjelder teknologi, mens det teleologiske historiesynet gjelder samfunnsformer", "Framskrittstanken er en beskrivelse, mens det teleologiske historiesynet er en ren verdivurdering"],
      explanation: "Begge har retning; forskjellen ligger i hvor målet kommer fra. Å nekte framskrittstanken retning er direkte galt, og å dele etter emne — teknologi mot samfunnsform — eller etter sjanger treffer ikke kilden til retningen.",
    },
    {
      question: "Hva innebærer det at fornuften blir kilde til kunnskap?",
      options: ["At et resonnement som kan følges og prøves av andre, veier tyngre enn avsenderens vekt", "At alle tidligere autoriteter forkastes, slik at ingen eldre tekster lenger kan brukes", "At bare det som kan iakttas med sansene, regnes som gyldig kunnskap om verden", "At kunnskap er noe hver enkelt kommer fram til alene, uten hjelp fra andres arbeid"],
      explanation: "Idealet flytter begrunnelsen fra hvem som sa det til om det holder når det prøves. Autoritetene forsvinner ikke, kravet om ren sansing er en senere og strengere posisjon, og idealet forutsetter nettopp at andre kan gå resonnementet etter.",
    },
    {
      question: "Hvorfor hører encyklopedien hjemme i institusjonskolonnen?",
      options: ["Fordi den samler kunnskapen i én ordning med henvisninger, og dermed bærer den videre", "Fordi den ble utgitt av akademier som hadde både offentlig støtte og formelle vedtekter", "Fordi den erstattet universitetenes undervisning i store deler av 1700-tallet", "Fordi den ble skrevet av de samme personene som drev salongene og tidsskriftene"],
      explanation: "Kolonnen spør etter hva som bærer kunnskapen videre, og en ordning trenger ikke være et sted. De øvrige alternativene bygger på påstander om utgivere, undervisning og personer som ikke er det avgjørende.",
    },
    {
      question: "Hva kjennetegner offentligheten som ny arena?",
      options: ["Argumenter legges fram for lesere som ikke er bundet av annet enn argumentets styrke", "Argumenter legges fram for et publikum av lærde som allerede kjenner hverandre godt", "Argumenter legges fram for myndighetene, som avgjør hvilke som skal få spres videre", "Argumenter legges fram muntlig, siden trykte skrifter ennå var forbeholdt universitetene"],
      explanation: "Åpenheten er det som gjør fornuftsidealet praktisk mulig. Det lukkede lærde nettverket er renessansens form, mens myndighetskontroll og et forbud mot trykte skrifter ville opphevet nettopp åpenheten.",
    },
    {
      question: "Hva er forskjellen på systematikk i opplysningstiden og kommentar i middelalderen?",
      options: ["Systematikken følger et skjema forfatteren har laget, kommentaren følger en autoritativ tekst", "Systematikken er skriftlig, mens kommentaren i hovedsak ble overlevert muntlig i undervisningen", "Systematikken gjelder naturen, mens kommentaren gjelder tekster om mennesket og samfunnet", "Systematikken krever trykkekunst, mens kommentaren kunne skrives av for hånd i klostrene"],
      explanation: "Forskjellen ligger i hvem som setter ordningen: forfatteren eller teksten. Skriftlighet, emneområde og teknikk varierer i begge, og avgjør derfor ingenting her.",
    },
    {
      question: "Hva er lovmessighet som forklaringsideal?",
      options: ["Kravet om at forklaringen viser hvordan enkelttilfellet følger av en allmenn sammenheng", "Kravet om at forklaringen bygger på lover vedtatt av myndighetene i det aktuelle samfunnet", "Kravet om at forklaringen kan gjentas ordrett av andre forskere som leser den samme kilden", "Kravet om at forklaringen viser hvorfor akkurat dette skjedde akkurat der og akkurat da"],
      explanation: "Idealet krever at forklaringen har allmenn form. Å vise hvorfor akkurat dette skjedde akkurat der, er nettopp motstykket — enkeltforklaringen som historiske fag oftest gir. De øvrige distraktorene blander inn lovgivning og gjentakelse av tekst.",
    },
    {
      question: "Hvordan er menneskesynet i opplysningstidens rad best beskrevet?",
      options: ["Jeget som utgangspunkt for kunnskap, og et «vi» som i prinsippet omfatter alle mennesker", "Jeget som nytt emne for skriving, mens «vi» og «de andre» i tillegg får en geografisk form", "Jeget underordnet en gitt orden, med «vi» avgrenset av tro og tilhørighet til den", "Jeget som del av en folkeånd, der «vi» er språkfellesskapet og det historisk særegne"],
      explanation: "I denne raden er jeget blitt selve utgangspunktet for å bedømme, og «vi» er prinsipielt universelt. De tre andre beskrivelsene hører til renessansen, middelalderen og romantikken.",
    },
    {
      question: "Hva er nytt med «de andre» i opplysningstidens stadiebaserte form?",
      options: ["De beskrives som tidligere — der «vi» en gang var — slik at forskjell blir til forsinkelse", "De beskrives som fremmede, med skikker og styreformer som ikke ligner våre egne i det hele tatt", "De beskrives i tilknytning til krav på land og handel, framsatt av dem som reiste dit", "De beskrives som vantro, altså gjennom en grense som går ved tro og tilhørighet"],
      explanation: "Formen gjør forskjell om til forsinkelse, og det er nettopp derfor den er så virkningsfull. De øvrige beskrivelsene hører til antikken, renessansen og middelalderen.",
    },
    {
      question: "Hvilken rekkefølge gir sensorkravet i H2020-veiledningen for en epokeoppgave?",
      options: ["Epokens vesentlige trekk, deretter den historiske konteksten, deretter de videre implikasjonene", "Problemstilling, deretter redegjørelse for pensum, deretter drøfting og en avsluttende konklusjon", "Avgrensning, deretter kildekritikk av materialet, deretter tolkning og en samlet vurdering", "Definisjon av begrepene, deretter sammenligning med en annen epoke, deretter en vurdering"],
      explanation: "Rekkefølgen er trekk, kontekst og implikasjoner, og et svar som bare gir trekkene, har svart på en tredel. De andre oppsettene er generelle essaydisposisjoner uten hjemmel i den veiledningen.",
    },
    {
      question: "Hva gjør implikasjonsleddet i en epokekarakteristikk?",
      options: ["Sier hva epoken gjorde mulig, og hva senere perioder har kritisert ved den", "Sier hva epoken selv mente om sin betydning", "Oppsummerer trekkene fra epoken slik at leseren husker dem etter endt lesning", "Sammenligner epoken med den forrige, ledd for ledd i periodenettets kolonner"],
      explanation: "Prøven er om avsnittet nevner en senere periode. Oppsummeringen gjentar trekkene, og sammenligningen med forrige epoke er kontrastleddet — et annet av de fire trinnene.",
    },
    {
      question: "Hvorfor er implikasjonsleddet særlig lett å skrive nettopp om opplysningstiden?",
      options: ["Fordi de tre neste radene i periodenettet i stor grad er kritikken av denne raden", "Fordi perioden er den best dokumenterte av de sju og har flest tilgjengelige kilder", "Fordi perioden ble kritisert allerede av sine egne samtidige i tidsskrifter og salonger", "Fordi implikasjonene er de samme for alle epoker og derfor kan skrives på forhånd"],
      explanation: "Romantikken, 1900-tallet og tiden etter 1970 leverer hvert sitt kritikkpunkt, og de er allerede en del av pensum. Dokumentasjonsmengden er ikke poenget, og implikasjoner er alltid epokespesifikke.",
    },
    {
      question: "Hva er det sterkeste motargumentet mot kritikken av universalismen?",
      options: ["At kravet om likeverdig behandling av alle kulturer selv låner universalismens premiss", "At kritikerne ikke kjente opplysningstidens tekster godt nok til å vurdere dem rettferdig", "At universalismen aldri ble praktisert, og derfor ikke kan holdes ansvarlig for følgene", "At kritikken kom så mye senere at den ikke kan brukes på en tidligere periodes tekster"],
      explanation: "Motargumentet peker på at kritikken hviler på det den kritiserer, og det er derfor det er sterkt. De øvrige svarene avviser kritikken uten å møte den, og det siste ville dessuten avlyst implikasjonsleddet helt.",
    },
    {
      question: "Hva slags grense går mot naturvitenskapen i opplysningstidens rad?",
      options: ["En myk grense: naturvitenskapen er nabo, men også forbilde, siden metoden tenkes felles", "En hard grense: å forstå det menneskeskapte krever noe annet enn å forklare naturprosesser", "Ingen grense: naturvitenskapen regnes fortsatt som en del av filosofien i denne perioden", "En institusjonell grense: fakultetene skiller allerede de to områdene fra hverandre"],
      explanation: "Idealet om felles metode gjør skillet mykt i denne raden. Den harde grensen er romantikkens og historismens, og den institusjonelle formen kommer med det moderne universitetet.",
    },
    {
      question: "Hva betyr det at fortiden i opplysningstiden er et tidligere trinn?",
      options: ["At den forstås ved å måles mot nåtidens fornuft og innretninger, som noe passert", "At den forstås ut fra sine egne forutsetninger, uten å måles mot nåtidens normer", "At den forstås som noe fremmed som må dateres før den kan brukes til noe", "At den forstås som del av et forløp med et mål gitt utenfra, der hendelser blir tegn"],
      explanation: "Fortiden måles i denne raden. Å forstå på egne premisser er historismens ideal, dateringen er renessansens innsikt, og det utenfrastyrte forløpet er middelalderens.",
    },
    {
      question: "Hva er skillet mellom prøvbarhet og sikkerhet?",
      options: ["En påstand kan være prøvbar og likevel gal, og føles sikker uten å kunne prøves", "Prøvbarhet gjelder naturvitenskap, mens sikkerhet gjelder de tolkende fagene", "Prøvbarhet gjelder observasjoner, mens sikkerhet gjelder resonnementer og logiske slutninger", "Prøvbarhet er et krav fra romantikken, mens sikkerhet er opplysningstidens egentlige krav"],
      explanation: "Det er prøvbarheten, ikke sikkerheten, som er periodens krav, og de to kan opptre uavhengig av hverandre. De øvrige alternativene fordeler begrepene på fag, kildetyper eller perioder uten grunnlag.",
    },
    {
      question: "Hvilken formulering er det beste kontrastleddet fra renessansen til opplysningstiden?",
      options: ["«Kravet flytter seg fra at begrunnelsen skal holde for denne kilden, til at den skal være allmenngyldig»", "«Opplysningstiden var langt mer opplyst enn renessansen, som fortsatt var bundet av gamle autoriteter»", "«Opplysningstiden hadde encyklopedier, akademier, salonger, tidsskrifter og et voksende bokmarked»", "«Renessansen leste antikke tekster, mens opplysningstiden skrev sine egne verk om fornuften»"],
      explanation: "Bare den første setningen er en flytting i én bestemt kolonne. Den andre er en verdidom, den tredje en oppramsing, og den fjerde en forenkling som ikke navngir noen kolonne.",
    },
    {
      question: "Hva er den vanligste disponeringsfeilen i en epokeoppgave om opplysningstiden?",
      options: ["At trekk-leddet får spise plassen, slik at implikasjonsleddet blir en avslutningsfrase", "At implikasjonsleddet skrives først, slik at leseren ikke vet hvilken epoke det gjelder", "At kontrasten skrives to ganger, både før og etter gjennomgangen av epokens trekk", "At avgrensningen mangler, slik at leseren ikke vet hvilke årstall besvarelsen dekker"],
      explanation: "Trekkene er lette å skrive og fyller plass; implikasjonene krever kunnskap om de neste periodene. Feilen har nummer #2 i registeret. De andre problemene forekommer, men er langt sjeldnere.",
    },
    {
      question: "Hvorfor bør ikke opplysningstiden framstilles som en naiv posisjon?",
      options: ["Fordi universalismen bærer kravet om likeverd, og enhetsvitenskapen svarer på et reelt problem", "Fordi perioden er for lite dokumentert til at vi med rimelighet kan felle en slik dom over den", "Fordi sensorveiledningene forbyr verdiladet språk om alle periodene i pensum", "Fordi kritikken av perioden først kom lenge etter, og derfor ikke kan brukes"],
      explanation: "En karikert motpart svekker din egen drøfting, og her har posisjonen dessuten gode grunner på sin side. Dokumentasjon, forbud og kritikkens alder er ikke argumentet.",
    },
    {
      question: "Hva er forskjellen på stadietenkning og organisk utviklingstanke?",
      options: ["Stadietrappen har ett mål for alle, det organiske har ett mål for hvert samfunn", "Stadietrappen gjelder økonomi, mens den organiske tanken gjelder språk og diktning", "Stadietrappen er romantisk, mens den organiske tanken hører hjemme i opplysningstiden", "Stadietrappen bygger på iakttakelser, mens den organiske tanken bygger på ren spekulasjon"],
      explanation: "Forskjellen ligger i om målestokken er felles eller egen for hvert samfunn. Periodene er dessuten byttet om i ett av alternativene, og skillet er verken emnebasert eller et spørsmål om iakttakelse mot spekulasjon.",
    },
    {
      question: "Hva bør kontekstleddet inneholde i en epokeoppgave?",
      options: ["Hvilke arenaer, konflikter og publikum ideene var svar på, ikke bare når de ble formulert", "Hvilke årstall epoken strekker seg mellom, og hvilke land og områder den omfatter", "Hvilke pensumbidrag som behandler epoken, og hva hvert av dem legger vekt på", "Hvilke senere perioder som kritiserte epoken, og hva kritikken gikk ut på"],
      explanation: "Kontekstleddet svarer på hva ideene var svar på. Årstall og land er avgrensning, pensumoversikt er ikke bestilt, og kritikken fra senere perioder hører til implikasjonsleddet.",
    },
    {
      question: "Hvorfor er det upresist å si at opplysningstiden hadde humanistiske fag?",
      options: ["Fordi ordnet kunnskap ikke er det samme som et felt med egne metodekrav og selvforståelse", "Fordi perioden ikke hadde undervisning i språk, historie eller filosofi ved universitetene", "Fordi feltet fantes, men gikk under betegnelsen de frie kunster i denne perioden", "Fordi humanistisk kunnskap i perioden ble regnet som en del av naturvitenskapen"],
      explanation: "Encyklopediens artikler er sortert, men sorteringen skaper ikke et avgrenset fag. Undervisningen fantes, navnevarianten beholder feltet, og humanistisk kunnskap var ikke innlemmet i naturvitenskapen.",
    },
    {
      question: "Hva er det beste grepet for å bruke spenningen i perioden som drøftingsakse?",
      options: ["Å vise at universalisme og stadietenkning begge følger av tanken om én fornuft", "Å behandle universalisme og stadietenkning som to trekk på en liste", "Å velge den ene av dem og bygge hele besvarelsen på den, for å holde teksten samlet", "Å vise at de to ideene tilhører hver sin gruppe tenkere som var uenige med hverandre"],
      explanation: "Sammenhengen mellom dem er nettopp det som gjør kritikken treffende: den rammer formen på beskrivelsene, ikke fordommene. De andre grepene skiller det som hører sammen, eller innfører en uenighet som ikke er poenget.",
    },
  ],
  'exfac03-hark-2-5': [
    {
      question: "Hva krever historismen?",
      options: ["At hver periode forstås ut fra sine egne forutsetninger, ikke måles mot nåtidens normer", "At historien forstås som en rekke lover som gjør den videre utviklingen forutsigbar for oss", "At fortiden vurderes etter dagens normer, slik at urett kan navngis som urett", "At forskeren erkjenner at hennes egen forforståelse er betingelsen for å forstå noe"],
      explanation: "Kravet er å måle mot det som var mulig og tenkelig da. Lovmessigheten er historisisme, dagens normer er opplysningstidens målestokk, og forforståelsen som betingelse er hermeneutikkens innvending mot historismen.",
    },
    {
      question: "Hva er forskjellen på historisme og historisisme?",
      options: ["Historismen vender mot det særegne, historisismen mot lover som gjør utviklingen forutsigbar", "Historismen gjelder skriftlige tekster, mens historisismen gjelder materielle spor og gjenstander", "Historismen er tysk, mens historisismen er den franske betegnelsen på det samme kravet", "Historismen er et metodekrav, mens historisismen er den institusjonelle formen for det"],
      explanation: "Ordene ligner og peker nesten motsatt vei, og forveksling gir det motsatte av det du mener. De øvrige alternativene deler etter kildetype, språkområde eller institusjon uten grunnlag.",
    },
    {
      question: "Hva er den organiske utviklingstanken et svar på?",
      options: ["Stadietenkningen: der trappen har ett mål for alle, har det organiske ett mål for hvert fellesskap", "Enhetsvitenskapen: der én felles metode skulle gjelde alt, krever det organiske mange metoder", "Kildekritikken: der tekster prøves for ekthet, krever det organiske at de leses som helhet", "Framskrittstanken: der framskrittet er menneskeskapt, gjør det organiske det naturgitt"],
      explanation: "Svaret gjelder målestokken: felles trapp mot egen utfoldelse. De andre alternativene kobler tanken til andre deler av opplysningstidens tankegods, som den ikke er et direkte svar på.",
    },
    {
      question: "Hva er svakheten ved den organiske utviklingstanken?",
      options: ["At egenart lett blir til skjebne, altså noe et fellesskap ikke kan tre ut av", "At den ikke kan forklare hastighet", "At den forutsetter kilder som er bevart, og derfor bare kan brukes på skriftkulturer", "At den er uforenlig med kildekritikk, siden helheten går foran de enkelte dokumentene"],
      explanation: "Innvendingen er at innelukking binder like mye som rangering. Hastighetsspørsmålet forutsetter nettopp trappen, mens kravet om bevarte kilder og påstanden om uforenlighet med kildekritikk innfører krav og motsetninger som ikke følger av tanken.",
    },
    {
      question: "Hva betegner folkeånd?",
      options: ["Forestillingen om at et folks egenart kommer til uttrykk i språk, diktning, skikker og rett", "Den politiske enheten med grenser, styre og forvaltning som et folk organiserer seg innenfor", "Den samlede folkemeningen slik den kommer til uttrykk i valg og offentlig debatt", "Den delen av befolkningen som bærer tradisjonene videre uten skriftlig overlevering"],
      explanation: "Folkeånden er en forestilling om hva som binder et fellesskap sammen, og det er derfor den er politisk virksom. Nasjonen er ordningen, ikke begrunnelsen, og opinion og tradisjonsbærere er moderne begreper lagt inn i perioden.",
    },
    {
      question: "Hvordan endres menneskesynet fra opplysningstiden til denne perioden?",
      options: ["Jeget går fra å være utgangspunkt for kunnskap til å være formet av språk, historie og fellesskap", "Jeget går fra å være formet av fellesskapet til å bli utgangspunktet for all sikker kunnskap om verden", "Jeget går fra å være underordnet en gitt orden til å bli et emne det kan skrives om", "Jeget går fra å være avgrenset av dannelse til å bli avgrenset av tro og tilhørighet"],
      explanation: "Skiftet gjør historien til en forutsetning for å forstå mennesket. Retningen er snudd i ett av alternativene, mens jeget som nytt emne hører til renessansen og jeget underordnet en gitt orden hører til middelalderen.",
    },
    {
      question: "Hva er innlevelse som framgangsmåte?",
      options: ["Å rekonstruere hva noe betydde for dem det gjaldt, gjennom arbeid med begreper og handlingsrom", "Å gjette seg til hvilke følelser menneskene i fortiden hadde i den situasjonen de befant seg i", "Å skrive om fortiden i presens, slik at leseren opplever hendelsene som nære og levende", "Å bruke egne erfaringer som nøkkel til å forstå hva mennesker i fortiden opplevde"],
      explanation: "Innlevelsen er et kildearbeid, ikke en innføling. Uten arbeidet med begrepsbruk og handlingsrom er den bare fantasi med et fagord på, og de tre andre alternativene beskriver nettopp slike snarveier.",
    },
    {
      question: "Hvorfor blir arkivet idealets foretrukne kilde?",
      options: ["Fordi arkivmaterialet ble til underveis i annen virksomhet og ikke var ment for ettertiden", "Fordi arkivmaterialet er eldre enn det som finnes i bibliotekene, og derfor nærmere kilden", "Fordi arkivmaterialet er ordnet av fagfolk og derfor lettere å finne fram i enn bøker", "Fordi arkivmaterialet er offentlig eid, og dermed tilgjengelig for alle som vil bruke det"],
      explanation: "Materialet er mindre tilpasset ettertiden, og det er derfor det regnes som nærmere det som faktisk foregikk. Alder, ordning og eierskap er praktiske forhold, ikke grunnen til forrangen.",
    },
    {
      question: "Hva er kildeutgivelsens rolle i at humaniora blir et eget felt?",
      options: ["Den gir fagfellesskapet felles materiale som andre kan bruke og etterprøve, også de uenige", "Den gir forskeren mulighet til å publisere sine funn før andre rekker å gjøre det samme", "Den gjør kildene tilgjengelige for allmennheten, slik at faget får bredere oppslutning", "Den erstatter arkivarbeidet, slik at forskeren slipper å oppsøke de opprinnelige dokumentene"],
      explanation: "Felt krever felles materiale, ikke bare felles interesser, og utgivelsen leverer nettopp det. Førsterett, popularisering og bekvemmelighet er følger, men ikke det som gjør utgivelsen til en fagform.",
    },
    {
      question: "Hva lærer seminaret opp i, som forelesningen ikke gjør?",
      options: ["En framgangsmåte som kan brukes og kontrolleres av andre, altså en overførbar metode", "Et innhold som er større enn det den enkelte selv kan lese seg til på egen hånd", "En evne til å formidle stoffet muntlig til et publikum uten fagbakgrunn", "En oversikt over hvilke kilder som finnes, og hvor de er oppbevart i arkivene"],
      explanation: "Overførbarheten er det som gjør en holdning til en metode og dermed til fagets eiendom. Innhold, formidling og oversikt kan læres på mange måter og skiller ikke arbeidsformene.",
    },
    {
      question: "Hva kjennetegner det moderne forskningsuniversitetet?",
      options: ["At undervisning og forskning tenkes sammen, og at læreren selv skal frambringe ny kunnskap", "At undervisningen skilles fra forskningen, slik at hver oppgave kan gjøres av spesialister", "At universitetet får eneretten på å utstede grader innenfor alle de høyere fagene", "At universitetet åpnes for alle uavhengig av stand, slik at rekrutteringen bredes ut"],
      explanation: "Sammenkoblingen av forskning og undervisning er forutsetningen for at fagene kan stille egne metodekrav. De øvrige alternativene beskriver andre og til dels motsatte utviklingstrekk.",
    },
    {
      question: "Hvorfor blir grensen mot naturvitenskapen hard i denne perioden?",
      options: ["Fordi å forstå menneskeskapte uttrykk innenfra regnes som en annen oppgave enn å forklare naturprosesser", "Fordi naturvitenskapen i perioden mister prestisje og derfor ikke lenger regnes som noe forbilde å strekke seg mot", "Fordi universitetene blir delt i fakulteter for første gang i denne perioden", "Fordi humanistene nekter å bruke tall og målinger i sitt eget arbeid med kildene"],
      explanation: "Det er de to ulike oppgavene som gjør grensen hard, og skillet får senere institusjonell form. Prestisjetap, fakultetsinndelingens opprinnelse og en påstått motvilje mot tall er ikke begrunnelsen.",
    },
    {
      question: "I hvilken forstand blir humaniora et eget felt i denne perioden?",
      options: ["Det får egne institusjoner, egne metoder, en avgrensning mot nabofeltet og en selvforståelse", "Det får et eget navn som skiller det fra alle de øvrige fagene ved universitetet", "Det får statlig finansiering, som er det avgjørende kjennetegnet på et kunnskapsfelt", "Det får en egen fakultetsbygning der alle de humanistiske fagene samles under ett tak"],
      explanation: "Alle fire kriteriene oppfylles her, og det er summen som utgjør feltet. Navn, penger og lokaler kan følge med, men ingen av dem er kriteriet.",
    },
    {
      question: "Hva er den skarpeste flyttingen i kolonnen for synet på fortiden mellom rad fire og fem?",
      options: ["Fra fortiden som tidligere trinn målt mot nåtiden, til fortiden lest på sine egne premisser", "Fra fortiden som del av et forløp med gitt retning, til fortiden som et materiale med tidslag", "Fra fortiden som nær og lærerik, til fortiden som fremmed og nødvendig å datere", "Fra fortiden lest gjennom framstillinger, til fortiden lest gjennom bevarte materielle spor"],
      explanation: "Målestokken snus i denne overgangen, og det er selve flyttingen. «Fra et forløp med gitt retning til et materiale med tidslag» og «fra nær og lærerik til fremmed og nødvendig å datere» beskriver tidligere overganger i samme kolonne. «Fra framstillinger til materielle spor» beskriver ingen av dem.",
    },
    {
      question: "Hva svarer en sterk besvarelse på spørsmålet om historismens ideal lar seg innfri?",
      options: ["Den skiller mellom et krav og en tilstand, og viser at kravet kan oppfylles bedre eller dårligere", "Den slår fast at ingen kan tre ut av sin egen tid, og lar spørsmålet være avgjort med den ene setningen", "Den viser at idealet ble innfridd av de beste historikerne i perioden, men ikke av de øvrige", "Den avviser spørsmålet som uinteressant, siden ingen i dag arbeider etter dette idealet"],
      explanation: "Skillet mellom krav og tilstand er det som gjør innvendingen mulig å besvare i stedet for å gjenta. De øvrige svarene lukker drøftingen uten begrunnelse eller flytter den til et empirisk spørsmål ingen kan avgjøre.",
    },
    {
      question: "Hva sier hermeneutikkens innvending mot historismen?",
      options: ["At forforståelsen ikke bare farger lesningen, men er betingelsen for å forstå i det hele tatt", "At fortiden er utilgjengelig, siden alle kilder er skrevet av parter med sine egne interesser", "At historismen overser materielle spor og bare arbeider med skriftlige kilder", "At historismen mangler et arkivgrunnlag som er stort nok til å bære konklusjonene"],
      explanation: "Innvendingen gjelder hva forståelse er, og derfor er den mer enn en metodetvist. De øvrige alternativene er innvendinger mot kildegrunnlag eller kildetyper, ikke mot idealet selv.",
    },
    {
      question: "Hvorfor er «romantikken var følelser og natur» et svakt svar på de dokumenterte oppgavetekstene?",
      options: ["Fordi bestillingen ber om kjennetegn fra et filosofisk og historisk synspunkt", "Fordi påstanden er faktisk gal om perioden", "Fordi bestillingen bare gjelder historismen, og ikke romantikken som kulturell strømning", "Fordi svaret ikke kan belegges med pensum, som utelukkende behandler historiefaget"],
      explanation: "Svaret treffer et annet spørsmål enn det som er stilt, og det er derfor det koster. Påstanden om at romantikken ikke handlet om følelser og natur er gal, mens innsnevringen av bestillingen til historismen alene og av pensum til historiefaget mangler grunnlag.",
    },
    {
      question: "Hva bør implikasjonsleddet om denne perioden inneholde?",
      options: ["Både gevinsten — arkivarbeid, kildeutgivelser, presisjon — og prisen, som egenart gjort til skjebne", "En vurdering av om romantikken samlet sett var en bedre epoke enn opplysningstiden var", "En oppsummering av periodens trekk, slik at leseren husker dem til slutt i besvarelsen", "En sammenligning med opplysningstiden, ledd for ledd i periodenettets kolonner"],
      explanation: "Implikasjonsleddet peker ut av epoken og trenger både det den ga og det den kostet. Rangeringen er en verdidom, oppsummeringen gjentar, og sammenligningen er kontrastleddet.",
    },
    {
      question: "Hvorfor er flyttingen i institusjonskolonnen verdt å kommentere særskilt?",
      options: ["Fordi tyngdepunktet går tilbake til universitetet, slik at utviklingen ikke er en rett linje", "Fordi universitetene forsvinner i denne perioden og erstattes av arkiver, akademier og selskaper", "Fordi institusjonene for første gang blir formelle, med regelverk og faste embeter", "Fordi kolonnen er den eneste som endrer seg mellom rad fire og rad fem i nettet"],
      explanation: "En lang linje som later som institusjonsutviklingen er rett, har forenklet, og det er nettopp derfor tilbakeflyttingen bør skrives ut. De øvrige alternativene er faktisk gale påstander om perioden og om nettet.",
    },
    {
      question: "Hva er den holdbare rekkefølgen når et kildeutdrag skal både forstås og bedømmes?",
      options: ["Først rekonstruksjonen på egne premisser, deretter vurderingen målt mot dagens normer", "Først vurderingen målt mot dagens normer, deretter rekonstruksjonen på egne premisser", "Bare rekonstruksjonen, siden en vurdering alltid vil være anakronistisk og derfor uholdbar", "Bare vurderingen, siden rekonstruksjonen uansett ikke kan etterprøves av andre lesere"],
      explanation: "Du kan ikke bedømme en ordning før du vet hvordan den virket, og derfor kommer rekonstruksjonen først. Å nøye seg med bare rekonstruksjonen eller bare vurderingen avlyser hvert sitt ledd, og idealet krever at du forstår før du dømmer, ikke at du lar være å dømme.",
    },
    {
      question: "Hva er det historisk spesifikke i motsetning til det allmenne?",
      options: ["Det som hører til én tid og ett fellesskap og ikke lar seg løfte ut uten å miste sitt særpreg", "Det som er konkret og detaljert, i motsetning til det abstrakte og det generaliserende", "Det som bare finnes i én kilde, i motsetning til det som er bekreftet av flere kilder", "Det som gjelder enkeltpersoner, i motsetning til det som gjelder grupper og institusjoner"],
      explanation: "Skillet handler om hva som kan løftes ut av sin sammenheng, ikke om detaljnivå, kildebredde eller gruppestørrelse. En abstrakt tanke kan godt være historisk spesifikk.",
    },
    {
      question: "Hvordan bør nasjonen behandles i menneskesyn-kolonnen for denne raden?",
      options: ["Som en fjerde form for «vi», og den første som er kulturell og politisk på én gang", "Som en videreføring av middelalderens «vi»", "Som en midlertidig form som forsvinner igjen når fagene blir internasjonale på 1900-tallet", "Som en institusjon i institusjonskolonnen, siden den har grenser, styre og finansiering"],
      explanation: "Nasjonen er en ny avgrensning av «vi» og skiller seg ved å være både kulturell og politisk. De øvrige plasseringene gjør den til en gjentakelse, en parentes eller flytter den til feil kolonne.",
    },
    {
      question: "Hva er den beste måten å vise historismen i arbeid på i en besvarelse?",
      options: ["Å lese ett kort kildeutdrag to ganger og si hva hver lesning gir og hva den koster", "Å definere historismen presist og oppgi hvilke historikere som fremmet idealet", "Å beskrive arkivenes framvekst og de nasjonale kildeutgivelsenes betydning for faget", "Å sammenligne historismen med hermeneutikken i en oversiktlig tabell med to kolonner"],
      explanation: "Aktiv bruk betyr at begrepet gjør et arbeid på et konkret materiale. De tre andre alternativene er gode måter å omtale idealet på, men de viser det ikke i arbeid.",
    },
    {
      question: "Hvilken vurdering av bevegelsen fra opplysningstiden til denne perioden er best begrunnet?",
      options: ["Alle tre — linje, pendel og brudd — kan forsvares, og det er begrunnelsen som vurderes", "Bare brudd, siden målestokken selv byttes ut og ikke bare vektleggingen mellom hensyn", "Bare pendel, siden spenningen mellom det allmenne og det særegne finnes i alle radene", "Bare linje, siden kravet om nøyaktighet fortsetter og bare får et nytt objekt å gjelde for"],
      explanation: "Femte ledd i den lange linjens form ber om en vurdering med begrunnelse, ikke om ett bestemt svar. Hvert av de tre svarene har et godt argument, og det er argumentet som teller.",
    },
  ],
  'exfac03-hark-2-6': [
    {
      question: "Hva skiller begivenhetshistorie fra samfunnshistorie?",
      options: ["Hva som regnes som forklaringen: hendelsen som årsak, eller hendelsen som utslag av noe større", "Hvilke kilder som brukes: skriftlige dokumenter fra arkiv, eller tellinger og statistiske oppgaver", "Hvor viktige emnene er: de avgjørende hendelsene, eller hverdagslivet til folk flest i samme tid", "Hvilket fag de tilhører: historiefaget på den ene siden, og samfunnsvitenskapene på den andre"],
      explanation: "Skillet gjelder hva som får rollen som forklaring i framstillingen. Kildetype, viktighet og fagtilhørighet varierer i begge, og skillet er ikke «viktig mot uviktig».",
    },
    {
      question: "Hva er strukturalismens grunntanke?",
      options: ["At enkeltuttrykk får mening fra sin plass i et system av forskjeller, som forskningen skal finne", "At samfunn utvikler seg gjennom faste stadier som kan påvises i alle kulturer og alle perioder", "At varige samfunnsforhold som økonomi, befolkning og teknologi forklarer de enkelte hendelsene", "At forskeren må rekonstruere hva et uttrykk betydde for dem som brukte det den gangen"],
      explanation: "Meningen ligger i relasjonene, ikke i uttrykket alene. Stadiene er opplysningstidens tankegods, de varige samfunnsforholdene er samfunnshistoriens emne, og rekonstruksjonen er historismens ideal.",
    },
    {
      question: "Hvorfor kolliderer strukturalismen med historismen?",
      options: ["Fordi historismen finner meningen i uttrykkets egen tid, mens strukturalismen finner den i relasjoner som kan gjenta seg", "Fordi historismen arbeider med arkivmateriale fra forvaltning og rettsvesen, mens strukturalismen bare arbeider med litterære tekster og muntlige fortellinger", "Fordi historismen er tysk i opphav, mens strukturalismen vokste fram i det franske fagmiljøet", "Fordi historismen krever kildekritikk, mens strukturalismen avviser at kilder må prøves"],
      explanation: "Kollisjonen gjelder hvor meningen ligger, og dermed hva forskningen leter etter. Kildetyper, geografisk opphav og påstanden om avvist kildekritikk treffer ikke uenigheten.",
    },
    {
      question: "Hva er de nye samfunnsvitenskapenes utfordring mot humaniora?",
      options: ["De studerer samme gjenstand — mennesker i samfunn — men med krav om generaliserbarhet", "De studerer en annen gjenstand, nemlig naturen, og setter dermed standarden for hva kunnskap er", "De krever mer forskningsmidler, slik at humaniora får mindre til rådighet enn tidligere", "De avviser at fortiden kan undersøkes i det hele tatt, og begrenser seg til samtiden"],
      explanation: "Det er den felles gjenstanden kombinert med et annet kunnskapskrav som gjør utfordringen skarp. Ressursstriden kommer i tillegg, mens de to andre alternativene beskriver samfunnsvitenskapene feil.",
    },
    {
      question: "Hva er det egentlige spørsmålet i presset fra nabofagene?",
      options: ["Hva slags kunnskap det bare er den historiske framgangsmåten som kan gi", "Hvor mye midler fagene skal ha av forskningsrådenes budsjett", "Hvilke fag som skal ha rett til å utdanne kandidater innenfor de samme emnene", "Om historiefaget skal ligge under det humanistiske eller det samfunnsvitenskapelige fakultetet"],
      explanation: "Presset er et erkjennelsesspørsmål før det er et ressursspørsmål, selv om det også blir det siste. Budsjett, utdanningsrett og fakultetsplassering er følger av spørsmålet, ikke spørsmålet selv.",
    },
    {
      question: "Hva kjennetegner den «myke» humanioraen?",
      options: ["Tolkning og forståelse settes først, med krav til belegg hentet fra kildearbeidet", "Tolkning settes først, og kravene til belegg oppgis", "Forklaring og lovmessighet settes først, med krav hentet fra nabofagene og deres metoder", "Formidling settes først, slik at forskningen skal nå ut til et bredest mulig publikum"],
      explanation: "Anførselstegnene står der fordi «myk» ikke betyr uten krav — belegget hentes fra kildearbeidet. Å oppgi belegg er ikke posisjonen, forklaringsidealet er motstykket, og formidling er en annen sak.",
    },
    {
      question: "Hva er forskjellen på positivisme og den «harde» humanioraen?",
      options: ["Positivismen er en posisjon om hva kunnskap er, den «harde» humanioraen en strategi for et fag under press", "Positivismen gjelder naturvitenskapen, mens den «harde» humanioraen gjelder samfunnsvitenskapene og deres krav", "Positivismen krever tall, mens den «harde» humanioraen godtar også kvalitative framgangsmåter", "Positivismen er eldre, og den «harde» humanioraen er navnet den samme posisjonen fikk senere"],
      explanation: "Man kan velge strategien uten å slutte seg til posisjonen, for eksempel av institusjonelle grunner. De øvrige alternativene fordeler dem på fagområder, redskaper eller tidsrom uten å treffe skillet.",
    },
    {
      question: "Hva sier positivismen som posisjon?",
      options: ["At kunnskap skal begrunnes i det observerbare og i sammenhenger som kan prøves av andre", "At all kunnskap er situert og bærer preg av det stedet den er frambrakt på", "At bare naturvitenskapelige fag kan gi kunnskap, mens humaniora gir tolkninger", "At framstillinger av fortiden er tekster med egne virkemidler, uten noen direkte tilgang til det som skjedde"],
      explanation: "Kravet gjelder begrunnelse og etterprøvbarhet. Påstanden om at all kunnskap er situert, er relativisme; påstanden om at bare naturvitenskapen gir kunnskap, er en karikatur; og påstanden om framstillinger som tekster hører til tiden etter 1970.",
    },
    {
      question: "Hva er forskjellen på svak og sterk relativisme?",
      options: ["Den svake minner om å gjøre rede for eget ståsted; den sterke sier at alle framstillinger er like gyldige", "Den svake gjelder tolkning av skriftlige tekster; den sterke gjelder tolkning av materielle spor og funn", "Den svake er en metode; den sterke er en politisk posisjon uten noe faglig innhold i seg selv i det hele tatt", "Den svake gjelder samtiden; den sterke gjelder alle historiske perioder uten unntak"],
      explanation: "Forskjellen i styrke er avgjørende i en drøfting: den ene er et krav om åpenhet, den andre en påstand om likegyldighet mellom framstillinger. De andre alternativene deler etter materiale, sjanger eller tidsrom.",
    },
    {
      question: "Hvorfor er «positivistisk» brukt som skjellsord et problem i en besvarelse?",
      options: ["Fordi ordet da bare betyr unyansert, og motparten gjøres dum i stedet for å bli møtt", "Fordi ordet er reservert for naturvitenskapelige sammenhenger og ikke kan brukes om humaniora", "Fordi posisjonen ikke fantes på 1900-tallet, og bruken derfor blir anakronistisk", "Fordi sensorveiledningene uttrykkelig forbyr verdiladede ord om faglige posisjoner"],
      explanation: "En karikert motpart svekker din egen drøfting, og det er den praktiske grunnen. Posisjonen fantes i høyeste grad, ordet er ikke reservert, og forbudspåstanden er oppdiktet.",
    },
    {
      question: "Hva skiller paret forklare og forstå fra paret kvantitativ og kvalitativ?",
      options: ["Det første gjelder kunnskapsmålet, det andre redskapet — man kan telle for å forstå", "Det første gjelder humaniora, det andre gjelder samfunnsvitenskapene og deres metoder", "Det første er et skille i teorien, det andre finnes bare i praktisk forskningsarbeid", "Det første gjelder fortiden, det andre gjelder undersøkelser av samtidige forhold"],
      explanation: "Kunnskapsmål og redskap er to ulike ting, og de kan kombineres fritt. De øvrige alternativene fordeler parene på fag, teorinivå eller tidsrom uten grunnlag.",
    },
    {
      question: "Hva kan et kvantitativt spørsmål ikke gi svar på?",
      options: ["Hva folk trodde de gjorde, siden samvariasjon i tall ikke er det samme som mening", "Hvordan et forhold endrer seg, siden tellinger gjelder ett tidspunkt", "Om et mønster gjentar seg andre steder, siden hver telling gjelder ett bestemt sted", "Hvor mange som var berørt, siden kildene sjelden dekker hele befolkningen i området"],
      explanation: "Tallene viser samvariasjon, ikke mening — og to kurver som følger hverandre, kan begge følge en tredje. De andre alternativene beskriver nettopp det tellingene er gode til, eller praktiske begrensninger som kan avhjelpes.",
    },
    {
      question: "Hva er et materielt kildesyn?",
      options: ["Å vurdere kilden som gjenstand: ekthet, alder, opphav og om den er original eller avskrift", "Å vurdere kilden ut fra hvilket spørsmål den skal svare på i den undersøkelsen som gjøres", "Å vurdere bare fysiske gjenstander som kilder, og se helt bort fra det skriftlige kildematerialet", "Å vurdere kilden ut fra hvem som har bevart den, og hvilke interesser bevaringen tjente"],
      explanation: "Det materielle synet spør hva kilden er. Det funksjonelle spør hva den er en kilde til, mens å regne bare fysiske gjenstander som kilder innsnevrer kildebegrepet, og spørsmålet om hvem som har bevart materialet, gjelder proveniens.",
    },
    {
      question: "Hva er poenget med et funksjonelt kildesyn?",
      options: ["At samme dokument kan være en dårlig kilde til én ting og en utmerket kilde til en annen", "At kilder må vurderes etter hvilken funksjon de hadde i sin egen samtid, og ikke i vår egen", "At bare kilder med kjent opphav og datering kan brukes i vitenskapelig arbeid", "At kildens verdi avgjøres av hvor godt den er bevart og hvor lesbar den er i dag"],
      explanation: "Verdien avhenger av spørsmålet, og en propagandaplakat er et godt eksempel. De øvrige alternativene handler om kildens egen samtid, om formkrav eller om bevaringstilstand.",
    },
    {
      question: "Hva er kriteriet for å si at en framgangsmåte er supplert og ikke erstattet?",
      options: ["At den fortsatt brukes der den passer, og fortsatt gir resultater andre kan kontrollere", "At den fortsatt undervises i grunnutdanningen, selv om forskerne ikke bruker den lenger", "At den er eldre enn de nye framgangsmåtene, og derfor har historisk krav på plass", "At den blir nevnt i faglitteraturen når nyere metoder skal presenteres og begrunnes"],
      explanation: "Kriteriet gjør spørsmålet prøvbart: mistet enerett er ikke det samme som mistet gyldighet. Undervisning, alder og omtale er svakere indikatorer som ikke avgjør spørsmålet.",
    },
    {
      question: "Hvorfor skal arkeologien ha sin egen tidfesting i en oppgave om 1900-tallet?",
      options: ["Fordi fagets teoretiske oppgjør kommer på et annet tidspunkt og av andre grunner enn historiefagets", "Fordi arkeologien ikke regnes som en del av humaniora og derfor må behandles helt for seg selv", "Fordi arkeologiske funn dateres med naturvitenskapelige metoder som gir andre og sikrere årstall", "Fordi arkeologien var uten teori på 1900-tallet og derfor ikke kan plasseres i rekka"],
      explanation: "Forskyvningen mellom fagene har egne grunner i materiale, oppdrag og institusjoner. Arkeologien er en del av humaniora, dateringsmetodene er en annen sak, og påstanden om et fag helt uten teori er gal.",
    },
    {
      question: "Hva er feilen i å beskrive forskyvningen mellom fagene som forsinkelse?",
      options: ["At det er stadietenkningens form brukt på fagene, der ett fag blir målestokk for de andre", "At forskyvningen i virkeligheten ikke finnes, siden alle fagene endret seg omtrent samtidig", "At forsinkelse er et begrep fra samfunnsvitenskapene og ikke hører hjemme i humaniora", "At ordet forutsetter at fagene hadde felles ledelse, noe de aldri har hatt i praksis"],
      explanation: "Å kalle det forsinkelse er å måle alle mot én trapp — nøyaktig den formen opplysningstiden brukte på samfunn. Forskyvningen finnes, og innvendingene om begrepets opphav og om felles ledelse er formelle snarere enn saklige.",
    },
    {
      question: "Hvordan er kunnskapssyn-kolonnen for 1900-tallet best beskrevet?",
      options: ["Som delt: forklaring med krav om gjentakbarhet står mot forståelse med krav om treffsikkerhet", "Som samlet om forklaring, siden positivismen vant fram i alle de historiske fagene i århundret", "Som samlet om forståelse, siden humaniora fastholdt sin egenart gjennom hele århundret", "Som uten innhold, siden århundret var for kort til at et eget kunnskapssyn rakk å feste seg"],
      explanation: "Delingen er selve innholdet i denne raden, og en besvarelse som velger ett syn, har utelatt halve raden. Svaret om at raden er samlet om forklaring, og svaret om at den er samlet om forståelse, velger hver sin side. Påstanden om at århundret var for kort, avviser at raden har innhold.",
    },
    {
      question: "Hva kjennetegner institusjonskolonnen for 1900-tallet?",
      options: ["Disiplinære institutter, fagtidsskrifter med fagfellevurdering, forskningsråd og internasjonale nettverk", "Nasjonale arkiver og kildeutgivelser, med statlig støtte og et oppdrag om å skrive nasjonens historie", "Akademier, salonger og encyklopedier, med tyngdepunktet i offentligheten utenfor universitetet", "Klostre, katedralskoler og universiteter med fakulteter og faste grader"],
      explanation: "Tilhørigheten blir disiplinær og går til faget på tvers av land. De øvrige alternativene beskriver radene for romantikken og historismen, opplysningstiden og middelalderen.",
    },
    {
      question: "Hva er en disiplin i denne sammenhengen?",
      options: ["Et fag med egne institutter, tidsskrifter, opplæring og kvalitetskrav som fagfellene håndhever", "Et fag som er anerkjent av staten og har rett til å utstede sine egne grader til kandidatene", "Et fag som bruker én bestemt metode, i motsetning til felt som bruker flere ulike metoder samtidig", "Et fag som har et eget pensum fastsatt sentralt for alle læresteder i landet"],
      explanation: "Disiplinen er den institusjonelle formen kunnskapsfeltet får, og fagfellene er de som avgjør hva som holder. Statlig anerkjennelse, metodeenhet og felles pensum er verken nødvendige eller tilstrekkelige kjennetegn.",
    },
    {
      question: "Hva er prisen ved disiplinen som organisasjonsform?",
      options: ["At spørsmål som faller mellom disipliner, blir vanskeligere å stille og å finansiere", "At forskerne mister kontakten med kildene og bare arbeider med andres framstillinger", "At undervisningen skilles fra forskningen, slik at studentene ikke møter aktive forskere", "At fagene blir nasjonale igjen, siden institutter og tidsskrifter er knyttet til hvert land"],
      explanation: "Prisen betales av det tverrgående arbeidet, og det er et poeng som brukes igjen i drøftingen om kategorisering. De øvrige alternativene beskriver følger som ikke er knyttet til denne organisasjonsformen.",
    },
    {
      question: "Hvorfor er grensen mot samfunnsvitenskapene vanskeligere å trekke enn grensen mot naturvitenskapen?",
      options: ["Fordi gjenstanden er felles, slik at grensen må gå ved kunnskapsmålet og ikke ved emnet", "Fordi samfunnsvitenskapene er yngre fag og derfor ennå ikke har faste og innarbeidede metoder", "Fordi samfunnsvitenskapene bruker samme kilder som historiefaget i alle undersøkelser", "Fordi samfunnsvitenskapene ligger under samme fakultet som de humanistiske fagene"],
      explanation: "Når gjenstanden er den samme, må skillet begrunnes i hva slags kunnskap som søkes. Alder, kildebruk og fakultetsplassering er praktiske forhold som ikke avgjør grensespørsmålet.",
    },
    {
      question: "Hva er nytt i synet på fortiden i denne raden?",
      options: ["At fortiden også er tilgjengelig som mønster, fordi mønsteret blir synlig når mange kilder settes sammen", "At fortiden må leses på sine egne premisser og ikke måles mot nåtidens normer og begreper i det hele tatt", "At fortiden bare er tilgjengelig gjennom representasjoner som forteller om sin egen samtid", "At fortiden må dateres før den kan brukes, siden ord og ordninger hører hjemme i sin egen tid"],
      explanation: "Tillegget er mønsteret, som ingen enkeltkilde uttaler. De øvrige alternativene beskriver historismens ideal, tiden etter 1970 og renessansens innsikt.",
    },
    {
      question: "Hva er den vanligste disponeringsfeilen i en oppgave om retningene på 1900-tallet?",
      options: ["At redegjørelsen for retningene får brorparten av plassen, stikk i strid med den mest presise instruksen i materialet", "At drøftingen kommer først i besvarelsen, slik at leseren ikke vet hvilke retninger det er som drøftes videre", "At problemstillingen står i konklusjonen i stedet for i første avsnitt av besvarelsen", "At kildehenvisningene mangler, slik at leseren ikke kan kontrollere påstandene"],
      explanation: "Retningene er lette å ramse opp og fyller plass fort, og instruksen sier uttrykkelig at det innledende leddet er «planke». Feilen har nummer #2 i registeret. De øvrige problemene finnes, men er sjeldnere og mindre kostbare her.",
    },
    {
      question: "Hva er den beste måten å ordne en redegjørelse for 1900-tallets retninger på?",
      options: ["Etter en akse som struktur mot hendelse, slik at retningene får plass i forhold til hverandre", "Etter årstall, slik at leseren ser hvilken retning som kom først og hvilken som kom aller sist", "Etter land, slik at de nasjonale fagmiljøene blir behandlet hver for seg og i tur og orden", "Etter navn på forskere, slik at leseren ser hvem som står bak hver enkelt av retningene"],
      explanation: "En akse gjør redegjørelsen kort og gir samtidig noe å drøfte videre. Kronologi, geografi og navnelister gir lengre tekst og mindre sammenheng.",
    },
    {
      question: "Hva innebærer det at mennesket på 1900-tallet forstås gjennom det det inngår i?",
      options: ["At forklaringen søkes i forhold mennesket verken velger eller nødvendigvis kjenner til", "At mennesket forstås gjennom språket og historien i det fellesskapet det er blitt til i", "At mennesket forstås som utgangspunkt for kunnskap, med fornuften som felles evne", "At mennesket forstås gjennom sin plass i en gitt orden med et mål gitt utenfra"],
      explanation: "Påstanden er sterkere enn forrige rads, nettopp fordi strukturene verken velges eller kjennes. De tre andre alternativene beskriver radene for romantikken, opplysningstiden og middelalderen.",
    },
  ],
  'exfac03-hark-2-7': [
    {
      question: "Hva hevder postmodernismen i den formen som er verdt å diskutere?",
      options: ["At enhver framstilling er laget med virkemidler som former hva leseren kan se", "At ingenting kan sies om fortiden, siden alle framstillinger er like gyldige uansett", "At fortiden ikke fant sted slik kildene forteller", "At bare framstillinger skrevet etter ca. 1970 tar hensyn til språkets egne virkemidler"],
      explanation: "Den sterke formen — at alt er like gyldig — er den nesten ingen forsvarer, og en drøfting mot den vinner over ingen. Benektelse av hendelser og en tidfesting av innsikten til etter 1970 er heller ikke posisjonen.",
    },
    {
      question: "Hva er forskjellen på svak og sterk relativisme?",
      options: ["Den svake skjerper kravet om åpenhet om ståsted; den sterke opphever grunnlaget for å foretrekke én framstilling", "Den svake gjelder samtidshistorie; den sterke gjelder eldre perioder der kildene er få, spredte og usikre", "Den svake er en holdning hos den enkelte forskeren; den sterke er en posisjon som forsvares åpent i fagmiljøene", "Den svake gjelder tolkning; den sterke gjelder de faktiske opplysningene i kildematerialet"],
      explanation: "Forskjellen gjelder hva som kreves: åpenhet, eller ingen målestokk. De øvrige alternativene fordeler dem på tidsrom, personer eller kildeinnhold uten å treffe skillet.",
    },
    {
      question: "Hva er situert kunnskap?",
      options: ["Kunnskap frambrakt fra et bestemt sted, med bestemte spørsmål og dermed bestemte blindsoner", "Kunnskap som gjelder ett bestemt sted, og som derfor ikke kan overføres til andre områder", "Kunnskap frambrakt av en forsker som på forhånd ønsker et bestemt resultat av undersøkelsen", "Kunnskap som er knyttet til en institusjon og derfor følger dens interesser og oppdrag"],
      explanation: "Situerthet er et vilkår, ikke en feil, og den kan bare gjøres rede for — ikke fjernes. Å ville et bestemt resultat er partiskhet, og de to andre alternativene forveksler stedet kunnskapen gjelder med stedet den kommer fra.",
    },
    {
      question: "Hva innebærer den språklige vendingen?",
      options: ["At språkets former er med på å bestemme hva som kan sies, også i fagteksten selv", "At forskningen bør skrives i et enklere og mer tilgjengelig språk slik at flere kan lese den", "At språket er et system av forskjeller som ordner alle uttrykk i en fast orden", "At kilder på fremmede språk må oversettes før de kan brukes i en undersøkelse"],
      explanation: "Vendingen treffer forskeren fordi den gjelder også hennes egen tekst. Det faste systemet er strukturalismens tanke, og de to andre alternativene handler om formidling og oversettelse.",
    },
    {
      question: "Hva menes med representasjon i denne sammenhengen?",
      options: ["At framstillingen er noe laget: den velger ut, ordner, framhever og utelater", "At framstillingen representerer et fagmiljø og dets syn på hva som er viktig", "At kilden representerer sin egen samtid og derfor må dateres før bruk", "At framstillingen gjengir fortiden slik den var, når kildekritikken er utført riktig"],
      explanation: "Poenget er at framstillingen er frambrakt gjennom valg. De øvrige alternativene handler om fagmiljø, datering, og om en gjennomsiktighet posisjonen nettopp bestrider.",
    },
    {
      question: "Hvorfor er representasjonskritikken et argument for kontinuitet?",
      options: ["Fordi kildekritikken alltid har spurt etter hensikt og opphavssituasjon, nå rettet mot fagteksten", "Fordi den ble formulert allerede i renessansen og bare fikk et nytt navn en gang etter ca. 1970", "Fordi den ikke har hatt noen praktisk betydning for hvordan forskningsarbeid faktisk utføres", "Fordi den bare gjelder skjønnlitterære framstillinger og ikke faglige undersøkelser"],
      explanation: "Grepet er hentet fra fagets egen verktøykasse og utvidet til et nytt objekt. De øvrige alternativene daterer feil, avviser betydningen eller innsnevrer virkeområdet.",
    },
    {
      question: "Hva er det avgjørende ved paret brudd og kontinuitet?",
      options: ["Om det gamle mister gyldighet, ikke om endringen skjer raskt eller langsomt", "Om endringen skjer i løpet av ett tiår, eller strekker seg over flere generasjoner", "Om de nye framgangsmåtene erstatter de gamle i undervisningen ved universitetene", "Om samtiden selv oppfattet endringen som dramatisk mens den pågikk"],
      explanation: "Prøven gjelder gyldigheten, ikke tempoet. Undervisning og samtidens opplevelse er indikatorer som ikke avgjør spørsmålet.",
    },
    {
      question: "Hva gjør et kriterium med en bruddvurdering?",
      options: ["Det gjør konklusjonen prøvbar, siden en leser kan være uenig i kriteriet eller anvendelsen", "Det gjør konklusjonen sikker, siden kriteriet fastsetter hva som er det eneste riktige svaret", "Det gjør konklusjonen kortere, siden argumentene kan utelates når kriteriet står", "Det gjør konklusjonen mer forsiktig, siden kriteriet forbeholder svaret for ett område"],
      explanation: "Uten kriterium er konklusjonen en mening; med kriterium er den et resultat andre kan prøve. Kriteriet gir verken sikkerhet, kortere tekst eller forsiktighet i seg selv.",
    },
    {
      question: "Hvilket argument taler sterkest for at postmodernismen er et brudd?",
      options: ["At kunnskapssynet snus: en nøytral beskrivelse regnes ikke lenger som mulig", "At forskerne etter ca. 1970 sluttet å arbeide i arkiv og med kildekritiske metoder", "At faget fikk nye institusjoner i form av tverrfaglige sentre og programmer", "At antallet publikasjoner om representasjon økte kraftig i tiårene etter 1970"],
      explanation: "Bruddargumentet gjelder hva som regnes som kunnskap, ikke hvilke håndgrep som utføres. Arkivarbeidet fortsatte, og institusjonsendring og publikasjonstall er svakere indikatorer.",
    },
    {
      question: "Hvilket argument taler sterkest for kontinuitet?",
      options: ["At spenningen mellom sikker begrunnelse og situert framstilling finnes i alle sju radene", "At ingen fagfolk tok postmodernismen alvorlig, og at den derfor ikke fikk noen faglige følger", "At de nye posisjonene ble formulert av de samme personene som forsvarte historismen", "At endringen skjedde langsomt, over flere tiår, og derfor ikke kan kalles et brudd"],
      explanation: "Den som har fylt ut alle radene i periodenettet, har belegget klart: spenningen er der allerede i antikken. De øvrige alternativene er faktisk gale eller bruker tempo som kriterium.",
    },
    {
      question: "Hva sier H2022-veiledningen om redegjørelsesleddet?",
      options: ["At det er «planke» og ikke skal spise brorparten; andre og tredje ledd skal bære tyngden", "At det skal utgjøre halvparten av besvarelsen, siden det er selve grunnlaget for drøftingen", "At det kan utelates helt dersom kandidaten går rett på drøftingen av bruddspørsmålet", "At det skal skrives til slutt, slik at drøftingen kommer først og setter dagsordenen"],
      explanation: "Instruksen gjelder fordelingen av plass, og den er den mest presise i hele materialet. Leddet skal verken halvere besvarelsen, utelates eller flyttes.",
    },
    {
      question: "Hvorfor er det en fristelse å la redegjørelsesleddet vokse?",
      options: ["Fordi redegjørelsen er trygg: den kan skrives uten å ta stilling og føles produktiv underveis", "Fordi redegjørelsen alltid er den delen sensor leser aller mest oppmerksomt av hele teksten", "Fordi drøftingen krever kilder som studenten sjelden har tilgang til i selve skrivefasen", "Fordi oppgavetekstene som regel er formulert slik at redegjørelsen kommer sist"],
      explanation: "Feilen skyldes ikke latskap, men at drøftingen er utrygg og koster mer per setning. De øvrige forklaringene er påstander uten grunnlag i materialet.",
    },
    {
      question: "Hvordan er menneskesynet i siste rad best beskrevet?",
      options: ["Identitet blir til i språk, praksis og fortellinger, og «vi» er et spørsmål framfor en gitt ramme", "Mennesket forklares av de faste strukturene det inngår i uten å velge dem eller kjenne dem", "Mennesket forstås gjennom det fellesskapet det er blitt til i, med språk og historie som ramme", "Mennesket er utgangspunkt for kunnskap, og «vi» omfatter i prinsippet alle mennesker"],
      explanation: "Forskjellen fra forrige rad er at også strukturene behandles som frambrakte og foranderlige. De øvrige beskrivelsene hører til 1900-tallet, romantikken og opplysningstiden.",
    },
    {
      question: "Hva kjennetegner kunnskapssynet etter 1970?",
      options: ["Gyldighet sikres gjennom åpenhet om posisjon og framgangsmåte, ikke gjennom påstand om nøytralitet", "Gyldighet sikres gjennom en eksplisitt metode som fjerner forskerens innflytelse fra resultatet", "Gyldighet er ikke lenger et tema i det hele tatt, siden alle framstillinger regnes som like brukbare", "Gyldighet sikres ved at flere uavhengige forskere kommer fram til samme resultat"],
      explanation: "Kravet om åpenhet består, men grunnen endres: forskeren skal bli synlig, ikke fjernes. De øvrige alternativene beskriver positivismens ideal, sterk relativisme og et gjentakelseskrav.",
    },
    {
      question: "Hva er nytt i grensekolonnen i siste rad?",
      options: ["Grensedragningen selv blir gjenstand for analyse: hvorfor går skillet der det går, og hvem tjener på det", "Grensen flyttes fra naturvitenskapen til samfunnsvitenskapene, som deler gjenstand med de humanistiske fagene", "Grensen forsvinner helt, siden alle fag etter ca. 1970 arbeider tverrfaglig og med felles metoder", "Grensen blir institusjonell for første gang, ved at fakultetene deles etter gjenstandsområde"],
      explanation: "Oppmerksomheten flyttes fra hva grensen går mot til grensedragningen som handling med følger. De øvrige alternativene beskriver forrige rad, en overdrivelse og en tidligere institusjonell endring.",
    },
    {
      question: "Hva sier synet på fortiden i siste rad — og hva sier det ikke?",
      options: ["At tilgangen går gjennom framstillinger som er laget; ikke at fortiden ikke fant sted", "At fortiden ikke fant sted slik kildene forteller, og at framstillinger derfor er fri diktning", "At fortiden bare er tilgjengelig gjennom materielle spor, siden tekster alltid er farget", "At fortiden er tilgjengelig som mønster når mange kilder settes sammen i store serier"],
      explanation: "Å blande tilgang med eksistens gir posisjonen en form ingen forsvarer. Å innsnevre tilgangen til materielle spor er en annen og gal påstand, og mønsteret fra mange kilder er 1900-tallets nyhet, ikke denne radens.",
    },
    {
      question: "Hva er den vanligste feilen i selve drøftingen av bruddspørsmålet?",
      options: ["Å møte den svake versjonen av posisjonen, som nesten ingen forsvarer", "Å ta stilling for tidlig i teksten", "Å bruke for mange eksempler, slik at teksten mister sammenhengen mellom leddene", "Å vise til for få sensorveiledninger, slik at påstandene mangler faglig forankring"],
      explanation: "Vinner du over «alt er like gyldig», har du vunnet over ingen — og det ser en leser umiddelbart. De øvrige problemene finnes, men er sjeldnere og mindre kostbare.",
    },
    {
      question: "Hva betyr bestillingsformen «i hvilken grad»?",
      options: ["At svaret skal si hvor mye, på hvilke punkter, og målt mot hva — ikke bare ja eller nei", "At svaret skal graderes med tallverdier som viser styrken på hvert enkelt av argumentene", "At svaret skal være forsiktig formulert, siden spørsmålet ikke kan avgjøres sikkert", "At svaret skal veie for og imot uten å konkludere, siden begge sider har gode grunner"],
      explanation: "Gradsspørsmålet krever oppdeling: noe kan være brutt mens noe annet består. Det ber verken om tallfesting, forsiktighet eller fravær av konklusjon.",
    },
    {
      question: "Hva er forskjellen på sjangerkrav og oppriktighet i lesningen av et takkebrev?",
      options: ["Sjangerkravet forklarer formen; det utelukker ikke at avsenderen faktisk mente det", "Sjangerkravet viser at teksten er skrevet av en annen enn den oppgitte avsenderen", "Sjangerkravet gjør brevet ubrukelig som kilde, siden formen skjuler avsenderens hensikt", "Sjangerkravet gjelder bare offentlige dokumenter, mens private brev er frie i formen"],
      explanation: "En lesning som slutter fra sjangerkrav til uoppriktighet, har byttet én godtroenhet mot en annen. Brevet blir ikke ubrukelig, forfatterspørsmålet er en annen sak, og private brev har også sjangerkrav.",
    },
    {
      question: "Hva er kildekritikken vendt mot fagteksten?",
      options: ["Å stille spørsmål om avsender, mottaker, sjanger og hensikt til forskningsframstillingen selv", "Å kontrollere at forskeren har brukt alle tilgjengelige kilder i den undersøkelsen hun gjør", "Å vurdere om forskerens egne konklusjoner er dekket av det materialet hun selv oppgir", "Å studere hvordan et emne har vært skrevet om av tidligere generasjoner av forskere"],
      explanation: "Nyheten er at spørsmålene stilles normativt til fagteksten selv. Kildedekning og belegg er alminnelige kvalitetskrav, mens studiet av hvordan et emne har vært skrevet om, er historiografi — som er eldre.",
    },
    {
      question: "Hva består gjennom alle sju radene i kunnskapssyn-kolonnen?",
      options: ["Spenningen mellom å ville begrunne sikkert og å innse at framstillingen er frambrakt av noen", "Kravet om at kunnskap skal begrunnes i autoritative tekster med en anerkjent avsender bak seg", "Kravet om at all kunnskap skal kunne prøves med den samme metoden på tvers av fagene", "Enigheten om at forståelse av det menneskeskapte krever andre framgangsmåter enn forklaring"],
      explanation: "Spenningen er der allerede i antikkens spenn fra positivister til relativister. De øvrige alternativene beskriver ett bestemt trinn og gjelder ikke alle radene.",
    },
    {
      question: "Hva skifter gjennom de sju radene i samme kolonne?",
      options: ["Hvor begrunnelsen hentes fra: autoritet, kildeprøving, allmenngyldighet, treffsikkerhet, gjentakbarhet, åpenhet", "Om kunnskap i det hele tatt regnes som mulig, siden skepsisen øker for hvert eneste trinn i rekka", "Hvilke fag som har rett til å uttale seg, siden stadig nye disipliner kommer til hele veien i perioden", "Hvor mye kildemateriale som er bevart, siden det øker jo nærmere vi kommer i tid"],
      explanation: "Det som skifter, er begrunnelsens kilde. Skepsis, fagtilhørighet og kildemengde varierer også, men er ikke det kolonnen måler.",
    },
    {
      question: "Hva er takhøydeklausulen i denne sammenhengen?",
      options: ["At studentens egen inndeling i perioder skal møtes romslig så lenge den er begrunnet", "At sensor skal godta alle inndelinger, også dem som ikke er begrunnet i besvarelsen", "At sjutrinnsrekka er den eneste inndelingen som gir uttelling på eksamen i dette emnet", "At periodegrensene skal settes ved runde årstall for at framstillingen skal bli lesbar"],
      explanation: "Takhøyden gjelder begrunnede valg — vilkårlighet er noe annet. De øvrige alternativene fjerner begrunnelseskravet, gjør ett oppsett obligatorisk eller innfører en formregel som ikke finnes.",
    },
    {
      question: "Hvordan bør en lang linje avsluttes?",
      options: ["Med hva som består og hva som skifter, og en vurdering av om utviklingen er linje, pendel eller brudd", "Med en oppsummering av alle de sju trinnene i den samme rekkefølgen som de ble presentert i", "Med en vurdering av hvilket av trinnene som var viktigst for humanioras utvikling sett under ett", "Med en henvisning til hvilke pensumbidrag som er brukt i hvert av de sju trinnene"],
      explanation: "Fjerde og femte ledd i sjangeren ber om nettopp dette, og det er leddet som oftest faller bort. En oppsummering gjentar, og de to andre avslutningene er ikke bestilt.",
    },
  ],
  'exfac03-hark-3-1': [
    {
      question: "Hva ber avgrensningsoppgavens tredje ledd om?",
      options: ["En vurdering av fordeler og ulemper ved selve kategoriseringen av fag og framgangsmåter", "Et forsvar for at skillet mellom humaniora og naturvitenskap er faglig riktig og nødvendig", "En sammenligning av humanistiske og naturvitenskapelige metoder satt opp i to spalter", "En redegjørelse for hvordan humaniora har vært avgrenset i hver av de sju periodene"],
      explanation: "Gjenstanden i tredje ledd er inndelingen, ikke virkeligheten og ikke fagenes historie. Et forsvar for skillet og en tospaltet sammenligning er nettopp de svarene som går utenom bestillingen.",
    },
    {
      question: "Hvilken definisjon av humaniora bygger på gjenstandsområde?",
      options: ["At humaniora studerer det menneskeskapte: språk, tekster, kunst, gjenstander og forestillinger", "At humaniora kjennetegnes av tolkning og forståelse framfor forklaring gjennom allmenne lovmessigheter", "At humaniora er det som ligger under et humanistisk fakultet og vurderes etter dets krav", "At humaniora er de fagene som studerer fortiden, uansett hvilke metoder de bruker på den"],
      explanation: "Gjenstandsdefinisjonen spør hva som undersøkes. Tolkning og forståelse er metodedefinisjonen, fakultetstilhørighet er den institusjonelle definisjonen, og å begrense feltet til fortidsfag er en innsnevring ingen av de tre gjør.",
    },
    {
      question: "Hvorfor gir de tre definisjonene ulike svar på et dateringsprosjekt?",
      options: ["Fordi gjenstanden er menneskeskapt, mens framgangsmåten er naturvitenskapelig", "Fordi dateringer alltid utføres ved naturvitenskapelige institutter uansett gjenstand", "Fordi datering ikke er forskning i egentlig forstand, men en teknisk tjeneste", "Fordi gravfunn regnes som naturgjenstander til de er tolket av en arkeolog"],
      explanation: "Spriket oppstår fordi gjenstandsaksen og metodeaksen peker hver sin vei i samme prosjekt. De øvrige alternativene bygger på påstander om institusjoner, status og klassifisering som ikke holder.",
    },
    {
      question: "Hva er det avgjørende ved den institusjonelle definisjonen?",
      options: ["At den avgjør noe i praksis: hvem som vurderer arbeidet og hvilke krav det måles mot", "At den er den eneste som er faglig holdbar, siden de to andre er for upresise", "At den er den eldste av de tre, og derfor har forrang når definisjonene spriker", "At den er uavhengig av hvordan universitetene faktisk er organisert i det enkelte land"],
      explanation: "Den administrative definisjonen virker sirkulær, men er den som får følger. Den er verken mest holdbar, eldst eller uavhengig av organiseringen — tvert imot er det organiseringen den beskriver.",
    },
    {
      question: "Hva er tospaltefella?",
      options: ["Å besvare andre ledd med to speilende lister, slik at det ikke er noe igjen å vurdere", "Å behandle to definisjoner samtidig, slik at leseren ikke vet hvilken av dem som brukes", "Å skrive besvarelsen i to kolonner, slik at framstillingen blir vanskelig å lese", "Å dele oppgaven i to like lange deler, slik at tredje ledd faller helt bort"],
      explanation: "Fella er innholdsmessig: en ren motsetning gir ingenting å vurdere i tredje ledd. De øvrige alternativene handler om uklarhet, typografi og lengdefordeling.",
    },
    {
      question: "Hva er humanvitenskapens egenart en påstand om?",
      options: ["At gjenstanden allerede er tolket av dem som laget den, og laget for å bety noe", "At humanistisk forskning stiller lavere krav til belegg enn naturvitenskapelig forskning", "At humanistiske fag er eldre enn naturvitenskapene og derfor har en annen tradisjon", "At humanistiske fag ikke kan bruke tall og målinger i sitt arbeid med kildene"],
      explanation: "Egenarten gjelder oppgavens art, ikke kravnivået. De øvrige alternativene gjør egenarten til et spørsmål om strenghet, alder eller redskapsforbud.",
    },
    {
      question: "Hvorfor bør naturvitenskapen behandles som kontrastbegrep og ikke som motstander?",
      options: ["Fordi et skille trukket mot en karikatur svekker din egen framstilling av humaniora", "Fordi naturvitenskapen har større prestisje i offentligheten og derfor må omtales forsiktig", "Fordi sensorveiledningene krever at alle fagområder omtales nøytralt i besvarelser", "Fordi naturvitenskapen ikke er relevant for spørsmålet om humanioras avgrensning"],
      explanation: "Er kontrasten trukket mot noe som ikke finnes, faller også beskrivelsen av humaniora sammen. Prestisje, påståtte krav og irrelevans er ikke begrunnelsen.",
    },
    {
      question: "Hva menes med at kategorisering er en handling med konsekvenser?",
      options: ["At inndelingen plasserer arbeid i bunker som får ulike vurderere, krav og finansieringsordninger", "At inndelingen er politisk motivert og derfor bør oppheves til fordel for ett felles kunnskapsfelt", "At inndelingen er en beskrivelse som kan være riktig eller gal, men ellers uten virkning", "At inndelingen bestemmer hvilke emner studentene kan velge i sin egen utdanning"],
      explanation: "Poenget er at kategoriseringen gjør noe, uavhengig av om den treffer. De øvrige alternativene gjør den til et politisk krav, til en ren beskrivelse eller til et rent studieadministrativt spørsmål.",
    },
    {
      question: "Hva er den mest håndfaste følgen av inndelingen?",
      options: ["Hvem som vurderer arbeidet, og hvilke krav fagfellene leser det med", "Hvor mange studenter som velger å søke seg til de ulike fagene hvert år", "Hvilke bygninger fagene holder til i", "Hvilket språk publikasjonene skrives på i de ulike delene av universitetet"],
      explanation: "Vurderingsordningen avgjør hvordan et arbeid blir lest, og den er lettere å belegge enn de store påstandene om erkjennelse. De øvrige alternativene er følger, men langt svakere som argument.",
    },
    {
      question: "Hva er metodekonsekvensen av en kategorisering?",
      options: ["En skjevhet i bevisbyrde: den som velger utradisjonelt for sin kategori, må begrunne mer", "Et generelt forbud mot å bruke metoder fra det andre feltet i sitt eget forskningsarbeid", "En plikt til å samarbeide med et annet fag når metodene hentes derfra", "En regel om at metodevalget må godkjennes av instituttet før arbeidet begynner"],
      explanation: "Ingen hindrer en humanist i å telle; konsekvensen er at valget må begrunnes mer. Forbud, samarbeidsplikt og forhåndsgodkjenning er sterkere påstander enn materialet bærer.",
    },
    {
      question: "Hvorfor er grensetilfellene et argument og ikke bare et forbehold?",
      options: ["Fordi de er mange og viktige, og dermed sier noe om inndelingen selv", "Fordi de viser at inndelingen alltid er feil og derfor bør erstattes", "Fordi de er sjeldne unntak som bekrefter at hovedregelen holder", "Fordi de gjelder fag som er nye og ennå ikke har funnet sin plass"],
      explanation: "Mange og viktige grensetilfeller er en opplysning om kategorien, ikke om tilfellene. De øvrige alternativene gjør dem enten til bevis for at alt er galt, til unntak, eller til et forbigående nybegynnerproblem.",
    },
    {
      question: "Hva skiller tverrfaglighet fra flerfaglighet?",
      options: ["I tverrfaglighet griper framgangsmåtene inn i hverandre i samme analyse, ikke bare ved siden av hverandre", "I tverrfaglighet arbeider forskere fra flere land sammen, mens flerfaglighet er nasjonalt samarbeid mellom fag", "I tverrfaglighet er alle deltakerne fra humaniora, mens flerfaglighet inkluderer naturvitere", "I tverrfaglighet finansieres prosjektet av flere kilder, mens flerfaglighet har én finansieringskilde"],
      explanation: "Det avgjørende er om framgangsmåtene griper inn i hverandre i samme analyse. Geografi, fagsammensetning og finansiering skiller ikke de to begrepene.",
    },
    {
      question: "Hvorfor er konserveringen bokas beste grensetilfelle?",
      options: ["Fordi materialkjemi og vurderingen av hva som er verdt å bevare, ligger i samme avgjørelse", "Fordi faget er yngst av de tre og derfor ennå ikke har fått noen fast plassering i systemet", "Fordi faget bruker flest naturvitenskapelige metoder av alle de humanistiske fagene", "Fordi faget ikke har egne institusjoner og derfor faller utenfor alle definisjonene"],
      explanation: "Begge sider ligger i den samme avgjørelsen, og det er derfor det ikke kan deles opp i en flerfaglig arbeidsdeling. De øvrige alternativene bygger på påstander om alder, metodemengde og institusjoner.",
    },
    {
      question: "Hva er forskjellen på å vurdere en inndeling og å forsvare et skille?",
      options: ["Å vurdere er å si hva inndelingen gir og koster; å forsvare er å argumentere for at den er riktig", "Å vurdere er å veie argumenter uten å konkludere; å forsvare er å ta et tydelig standpunkt til slutt", "Å vurdere hører til drøftingsleddet; å forsvare hører til redegjørelsesleddet i besvarelsen", "Å vurdere krever kildehenvisninger; å forsvare kan gjøres med egne argumenter alene"],
      explanation: "De to besvarer ulike spørsmål, og bestillingen ber om det første. Å vurdere utelukker ikke en konklusjon, og skillet gjelder verken plassering i besvarelsen eller kildebruk.",
    },
    {
      question: "Hva mangler i en åpning som bare gjengir bestillingen og gir en definisjon?",
      options: ["Avgrensning og problemstilling: hvilke fag, hvilken periode, hvilket spørsmål, og hva som ikke dekkes", "En oversikt over de pensumbidragene som skal brukes i de ulike delene av besvarelsen videre", "En begrunnelse for hvorfor emnet er viktig for faget og for samfunnet omkring det", "En kort presentasjon av forfatterens eget faglige ståsted og tidligere erfaring med emnet"],
      explanation: "Definisjon er ikke avgrensning, og en gjengivelse av bestillingen er ikke en problemstilling. Pensumoversikt, viktighetsbegrunnelse og forfatterpresentasjon er ikke bestilt.",
    },
    {
      question: "Hvorfor er avgrensningen verdt plassen den koster?",
      options: ["Fordi den gjør utelatelser til valg leseren kan vurdere, i stedet for til mangler", "Fordi den viser at kandidaten kjenner hele pensum, også det som ikke behandles", "Fordi den fyller plass i innledningen som ellers ville stått tom i besvarelsen", "Fordi den gjør besvarelsen lengre, og lengre besvarelser vurderes gjennomgående høyere"],
      explanation: "Uten avgrensning blir enhver utelatelse en mangel; med avgrensning blir den et valg. De øvrige alternativene gjør avgrensningen til en oppvisning eller til fyll.",
    },
    {
      question: "Hva hevder den filosofiske dualismen?",
      options: ["At virkeligheten består av to grunnleggende ulike slag: det tenkende og det utstrakte", "At kunnskap om mennesket krever andre metoder enn kunnskap om naturen", "At det menneskeskapte og det naturskapte er to atskilte gjenstandsområder for forskning", "At mennesket består av kropp og sjel, som begge kan undersøkes med samme metode"],
      explanation: "Dualismen er en påstand om hva virkeligheten består av. Metodepåstanden og gjenstandsinndelingen er senere og andre påstander, og å si at kropp og sjel kan undersøkes med samme metode, opphever nettopp skillet.",
    },
    {
      question: "Hva er den sterkeste innvendingen mot dualismen?",
      options: ["At forbindelsen blir uforklarlig: hvordan kan noe uten utstrekning sette en kropp i bevegelse", "At den er for gammel til å kunne brukes i en moderne vitenskapelig sammenheng i det hele tatt", "At den ble formulert av filosofer og derfor ikke gjelder for empirisk forskning", "At den gjør det umulig å skille mellom humaniora og naturvitenskap som fagområder"],
      explanation: "Innvendingen gjelder samvirket mellom de to slagene, og den er den klassiske. Alder, opphav og en påstått følge for fagdelingen er ikke innvendingen.",
    },
    {
      question: "Hva spør H2020-bestillingen om når det gjelder dualismen?",
      options: ["Hvilken rolle posisjonen spilte i europeisk humaniorahistorie, med kritikere og alternativer", "Om posisjonen er sann, målt mot det vi i dag vet om forholdet mellom kropp og bevissthet hos mennesket", "Hvordan posisjonen ble formulert av Descartes, med gjengivelse av hans egne argumenter", "Hvorfor posisjonen ble forlatt av filosofene i løpet av de siste hundre årene"],
      explanation: "Bestillingen er historisk: den spør etter rollen, ikke etter sannheten. Argumentrekonstruksjon og resepsjonshistorie er andre oppgaver, og sannhetsspørsmålet hører til et annet emne.",
    },
    {
      question: "Hvorfor gir det ingen uttelling her å ha lest et beslektet filosofiemne?",
      options: ["Fordi ingen av veiledningene nevner det, og spørsmålsstillingen er en annen: rolle framfor argument", "Fordi filosofiske emner ikke regnes som relevante for de humanistiske fagene i det hele tatt", "Fordi pensum i de to emnene er skrevet av forskjellige forfattere med ulike syn", "Fordi de to emnene tas i ulike semestre og derfor ikke kan bygge på hverandre"],
      explanation: "Overlappet gjelder personer, ikke spørsmål, og det er forskjellen i spørsmålsstilling som avgjør. De øvrige alternativene bygger på relevans, forfatterskap og studieplan i stedet.",
    },
    {
      question: "Hva er forskjellen på Platons og Descartes' skille?",
      options: ["Platons går mellom to slags virkelighet der den ene er mer virkelig; Descartes' mellom to slags substans", "Platons gjelder kunnskap, mens Descartes' gjelder moral og handling i praktiske livsspørsmål", "Platons er en teori om språket, mens Descartes' er en teori om sansene og deres pålitelighet", "Platons ble formulert som svar på Descartes' innvendinger mot den klassiske filosofien"],
      explanation: "Den ene rangerer to slags virkelighet, den andre deler verden i to slags ting. De øvrige alternativene bytter emneområde eller snur rekkefølgen mellom dem.",
    },
    {
      question: "Hva bør en besvarelse gjøre med et grensetilfelle i vurderingsleddet?",
      options: ["Vise hvilken definisjon som avgjør, og hva svaret ville blitt med en av de andre", "Plassere det i den kategorien det ligner mest på, og gå videre uten kommentar", "Utelate det, siden uklare tilfeller svekker framstillingens tydelighet for leseren", "Bruke det til å slå fast at inndelingen er ubrukelig og bør erstattes av noe annet"],
      explanation: "Spriket mellom definisjonene er selve argumentet, og det må skrives ut. Å plassere uten kommentar, å utelate eller å konkludere for hardt er tre måter å kaste bort ressursen.",
    },
    {
      question: "Hva er det beste kortsvaret på hva inndelingen er?",
      options: ["En vurderingsordning som organiserer arbeidet, ikke en beskrivelse av hvordan verden er delt", "En beskrivelse av hvordan virkeligheten faktisk er delt i to slags gjenstander og prosesser", "En midlertidig ordning som forsvinner når tverrfaglige metoder blir vanligere", "En historisk levning uten praktisk betydning for hvordan forskning drives i dag"],
      explanation: "Å skille mellom vurderingsordning og virkelighetsbeskrivelse er den landingen som lar seg begrunne uten å karikere noen. De øvrige alternativene overdriver enten inndelingens gyldighet eller dens betydningsløshet.",
    },
    {
      question: "Hvilken feil begår en kandidat som ramser opp alle forskjeller mellom feltene?",
      options: ["Å prøve å dekke alt og dermed ikke drøfte noe, slik at tredje ledd blir stående uten plass", "Å bruke et fagbegrep som en ren etikett uten å aktivere det i en konkret sammenheng", "Å levere uten avgrensning og problemstilling i åpningen av besvarelsen", "Å skrive ett fags historie som om den gjaldt alle fagene i det samme feltet"],
      explanation: "Oppramsingen ser grundig ut og spiser plassen som skulle gått til vurderingen. De tre andre feilene finnes i registeret, men beskriver andre problemer.",
    },
  ],
  'exfac03-hark-3-2': [
    {
      question: "Hva er premisset i denne bestillingen?",
      options: ["At ideen om det menneskeskapte som noe særegent lå til grunn for grensedragningen i det moderne universitetet", "At humaniora og naturvitenskap i dag bør slås sammen igjen til ett samlet kunnskapsfelt uten indre grenser", "At skillet mellom natur og kultur er en tidløs sannhet som alle universiteter har bygget på til alle tider", "At grensedragningen først og fremst var en fordeling av stillinger og midler mellom fagmiljøene i universitetet"],
      explanation: "Premisset er en historisk påstand om hva som lå til grunn, og det legges til grunn i bestillingen. Sammenslåing er ikke bestilt, tidløsheten er nettopp den formen bestillingen ikke ber om, og maktfordelingen er en drøftingsposisjon.",
    },
    {
      question: "Hvordan skiller du et premiss fra en påstand i en oppgavetekst?",
      options: ["På verbet: ber teksten deg bygge videre, eller ber den deg vurdere om noe stemmer", "På plasseringen: premisset står først", "På lengden: premisser er korte, mens påstander utdypes over flere setninger i teksten", "På kilden: premisser er hentet fra pensum, mens påstander er formulert av sensor selv"],
      explanation: "Verbet avgjør: «gjør rede for konsekvensene» bygger videre, «vurder om» ber om en prøving. Plassering, lengde og opphav sier ingenting sikkert om hvilken rolle setningen har.",
    },
    {
      question: "Hva er en erkjennelsesmessig konsekvens?",
      options: ["En følge for hva slags kunnskap som er mulig, og hva slags svar som regnes som riktige svar", "En følge for hvilke framgangsmåter som blir legitime i faget og som læres bort i studiet", "En følge for hvor mange stillinger og hvor mye midler faget får tildelt over det årlige budsjettet", "En følge for hvilke emner studentene kan velge mellom i løpet av utdanningen sin"],
      explanation: "Prøven er om setningen sier noe om hva vi kan vite. Framgangsmåter er metodiske konsekvenser, mens stillinger og emnevalg er administrative følger.",
    },
    {
      question: "Hva er en metodisk konsekvens?",
      options: ["En følge for hvilke framgangsmåter som blir legitime, hva som teller som belegg og hva som må begrunnes ekstra", "En følge for hva vi i det hele tatt kan vite om det menneskeskapte og om det naturskapte i verden", "En følge for hvordan universitetet organiserer sine fakulteter og fordeler ledelsen mellom dem i praksis", "En følge for hvilke spørsmål som regnes som interessante nok til å bli finansiert av forskningsrådene"],
      explanation: "Metodiske konsekvenser gjelder reglene for arbeidet. Kunnskapsgrensene er erkjennelsesmessige, mens organisering og finansiering er administrative følger.",
    },
    {
      question: "Hvorfor må de to konsekvenstypene skilles?",
      options: ["Fordi oppgaveteksten navngir begge, og en udelt påstand kan ikke dekke to navngitte ledd", "Fordi sensor teller antall avsnitt i besvarelsen og krever like mange på hver type", "Fordi de gjelder hver sin periode, med erkjennelsen først og metoden flere tiår senere", "Fordi de gjelder hvert sitt fakultet, med erkjennelsen i humaniora og metoden i naturvitenskapen"],
      explanation: "Bestillingen fungerer som disposisjon, og et ledd som ikke er dekket, er et ledd som mangler. De øvrige alternativene innfører telling, kronologi eller fakultetsfordeling som ikke finnes.",
    },
    {
      question: "Hva kjennetegner det moderne universitetet?",
      options: ["At forskning og undervisning tenkes sammen, og at kunnskapsproduksjon selv er institusjonens oppgave", "At universitetet får rett til å utstede grader i teologi, juss og medisin på helt selvstendig grunnlag", "At undervisningen åpnes for alle uavhengig av stand, slik at rekrutteringen bredes kraftig ut", "At universitetet skilles fra kirken og legges direkte under statlig styring og finansiering"],
      explanation: "Sammenkoblingen av forskning og undervisning er det avgjørende, og den gjør fagenes egenart til et administrativt spørsmål. De øvrige alternativene beskriver andre endringer.",
    },
    {
      question: "Hva er fakultetsinndelingens rolle i denne bestillingen?",
      options: ["Den er skillets institusjonelle form: budsjetter, komiteer, studieløp og kriterier fulgte med", "Den er en administrativ detalj uten betydning for hvordan forskningen faktisk ble utført", "Den er den eldste av alle universitetsordninger og kan derfor ikke tidfestes presist", "Den er en følge av at studenttallet vokste, og har ingen forbindelse med skillet mellom fagene"],
      explanation: "Inndelingen er det konkrete belegget for at grensedragningen var en hendelse. De øvrige alternativene gjør den betydningsløs, udaterbar eller til en ren kapasitetsordning.",
    },
    {
      question: "Hva er forskjellen på en faggrense og en fakultetsgrense?",
      options: ["Faggrensen er en oppfatning blant forskere; fakultetsgrensen er en avgjørelse med en adresse", "Faggrensen gjelder metoder, mens fakultetsgrensen gjelder hvilke bygninger fagene holder til i", "Faggrensen er nasjonal, mens fakultetsgrensen er internasjonal og lik ved alle universiteter", "Faggrensen settes av studentene gjennom emnevalg, mens fakultetsgrensen settes av ledelsen"],
      explanation: "Den ene kan endres ved å overbevise noen, den andre må vedtas. Lokaler, geografi og studentvalg treffer ikke skillet.",
    },
    {
      question: "Hva betyr institusjonalisering i denne sammenhengen?",
      options: ["At en tanke bygges inn i ordninger som virker videre av seg selv gjennom budsjetter og stillinger", "At en tanke blir alminnelig anerkjent blant forskerne innenfor det aktuelle fagområdet i landet", "At en tanke skrives ned i lærebøkene og dermed overleveres til de neste kullene av studenter", "At en tanke får et navn og en definisjon som gjør den mulig å diskutere presist"],
      explanation: "Poenget er at ordningen fortsetter å virke selv når oppfatningen er blitt omstridt. Anerkjennelse, lærebøker og terminologi er svakere former for feste.",
    },
    {
      question: "Hva er et vitenskapelig ideal?",
      options: ["Forestillingen om hva god forskning ser ut som: hvilke spørsmål, hvilke resultater, hvilken begrunnelse", "En framgangsmåte som er godkjent av fagfellene og som læres bort i studiets egne metodeemner", "Et mål om at forskningen skal komme samfunnet til nytte innen rimelig tid etter at den er publisert", "Et krav om at forskeren skal være uavhengig av oppdragsgivere og politiske interesser"],
      explanation: "Idealet er målestokken, ikke framgangsmåten. Nytte og uavhengighet er andre krav, og en metode kan lånes uten at idealet følger med.",
    },
    {
      question: "Hva menes med å hente et ideal fra naboene?",
      options: ["At et fag i etableringsfasen låner målestokken fra et nabofelt som allerede har anerkjennelse", "At et fag ansetter forskere utdannet i nabofaget for å styrke sin egen metodiske kompetanse", "At et fag samarbeider med nabofaget om felles prosjekter og deler resultatene likt mellom seg", "At et fag overtar nabofagets pensum og lærer det bort i sine egne innføringsemner"],
      explanation: "Idealimporten former hvilke spørsmål faget stiller, og har derfor større følger enn en metodeimport. Ansettelser, samarbeid og pensum er andre og svakere former for påvirkning.",
    },
    {
      question: "Hva er forklaringsidealet?",
      options: ["At et enkelttilfelle skal føres tilbake til en allmenn sammenheng, med en framgangsmåte andre kan gjenta", "At et enkelttilfelle skal beskrives så fullstendig som overhodet mulig, med alle tilgjengelige opplysninger med", "At forskeren skal gjøre rede for hva noe betydde for dem det gjaldt i den aktuelle situasjonen", "At forskningen skal forklares i et språk som gjør den tilgjengelig også for et bredere publikum"],
      explanation: "Idealet krever allmenn form og gjentakbarhet. Fullstendig beskrivelse, meningsrekonstruksjon og formidling er tre andre mål, og det tredje er nettopp forståelsesidealet.",
    },
    {
      question: "Hva krever forståelsesidealet?",
      options: ["Treffsikkerhet i det enkelte tilfellet: hva uttrykket betydde, og hva som sto på spill for dem det gjaldt", "At forskeren lever seg inn i fortidens følelser og gjengir dem med litterære og skjønnlitterære virkemidler", "At resultatet kan gjentas av en annen forsker som arbeider med det samme materialet", "At framstillingen unngår fagbegreper, slik at leseren kan forstå den uten forkunnskaper"],
      explanation: "Kravet er treffsikkerhet, ikke allmenngyldighet — og det kan kontrolleres gjennom kildearbeidet. Innføling, gjentakbarhet og enkelhet er tre andre ting.",
    },
    {
      question: "Hvorfor er det galt å skrive at skillet mellom natur og kultur alltid har vært der?",
      options: ["Fordi bestillingen ber om en hendelse med aktører, tidfesting og institusjonell form", "Fordi skillet i virkeligheten er en oppfinnelse fra tiden etter 1970 og ikke er eldre", "Fordi ingen fagfolk i dag mener at det finnes et slikt skille mellom de to områdene", "Fordi skillet bare gjaldt ved noen få universiteter og derfor ikke kan generaliseres"],
      explanation: "Setningen gjør en historisk hendelse om til en tidløs sannhet, og det er den mest typiske svakheten i denne bestillingen. De øvrige alternativene er faktisk gale påstander.",
    },
    {
      question: "Hva er et grensefag i denne sammenhengen?",
      options: ["Et fag som trenger begge kunnskapsfamilier i samme avgjørelse, som konservering", "Et fag som er så nytt at det ennå ikke har rukket å bli plassert ved et fakultet", "Et fag som studerer selve grensen mellom natur og kultur som sitt eget emne", "Et fag som er så lite at det må dele institutt med et større og mer etablert fag"],
      explanation: "Grensefagets plasseringsproblem følger av inndelingen og går ikke over med tiden. Nyhet, emnevalg og størrelse er andre og forbigående forhold.",
    },
    {
      question: "Hva er ordningens tre håndtak?",
      options: ["Stillinger, budsjettposter og vurderingskomiteer — stedene grensedragningen faktisk virker", "Pensum, eksamensform og karakterskala — de stedene studentene møter grensedragningen", "Forelesninger, seminarer og laboratorier — de stedene undervisningen faktisk foregår i praksis", "Publikasjoner, konferanser og nettverk — stedene forskerne møter hverandre på tvers"],
      explanation: "Håndtakene er de stedene ordningen fortsetter å virke uavhengig av holdninger. De øvrige alternativene beskriver arenaer der virkningen merkes, men ikke der den utøves.",
    },
    {
      question: "Hva er forskyvningen mellom idé og ordning?",
      options: ["At skillet kan være tenkt lenge før det bygges inn i en institusjon med egne grenser", "At ideen og ordningen alltid oppstår samtidig, siden en tanke trenger en bærer", "At ordningen kommer først, og at ideen formuleres i ettertid som en begrunnelse", "At ideen forsvinner når ordningen er etablert, siden ordningen overtar dens funksjon"],
      explanation: "Forskyvningen er grunnen til at en besvarelse må tidfeste to ting hver for seg. De øvrige alternativene benekter forskyvningen, snur rekkefølgen eller lar ideen forsvinne.",
    },
    {
      question: "Hva er den beste behandlingen av spørsmålet om erkjennelse eller maktfordeling?",
      options: ["Å si hvilket forhold det er mellom dem: en innsikt kan brukes til å fordele, og ordningen virker så videre", "Å velge den ene lesningen og forsvare den konsekvent gjennom hele besvarelsen fra start til slutt", "Å slå fast at det er begge deler, og deretter gå videre til neste ledd i den samlede bestillingen", "Å avvise spørsmålet, siden det ikke kan avgjøres med det materialet vi har tilgang til"],
      explanation: "De to utelukker ikke hverandre, og drøftingen ligger i forholdet mellom dem. Å velge side forenkler, å si «begge deler» uten mer er ikke en drøfting, og å avvise spørsmålet er å la være å svare.",
    },
    {
      question: "Hva er opplæringsfølgen av grensedragningen?",
      options: ["At hvert fakultet lærer opp i sine egne framgangsmåter, slik at neste generasjon kan noe bestemt", "At studentene får velge fritt mellom framgangsmåter fra begge fakultetene i sitt eget studieløp", "At opplæringen blir kortere, siden hvert fakultet bare må dekke sin egen halvdel av kunnskapen", "At undervisningen flyttes fra forelesning til seminar, siden fagene blir mer spesialiserte"],
      explanation: "Opplæringsfølgen er inndelingens mest varige metodiske konsekvens, fordi den virker i generasjoner. Fritt valg, kortere studier og undervisningsform er ikke det som ligger i den.",
    },
    {
      question: "Hva ligger i at resultatkravet binder de to konsekvenstypene sammen?",
      options: ["Erkjennelsesmessig bestemmer det hva slags kunnskap som telles, metodisk hva slags arbeid som må gjøres", "Det viser at de to typene egentlig er samme sak, og at skillet mellom dem derfor er unødvendig", "Det viser at metodiske konsekvenser alltid kommer først, og at erkjennelsen følger et stykke etter", "Det viser at kravene til resultat er de samme i begge fakulteter, bare med ulike navn"],
      explanation: "Resultatkravet ligger i grenselandet og er derfor et godt sted å vise at du behersker skillet. De øvrige alternativene opphever skillet, innfører en rekkefølge eller påstår likhet.",
    },
    {
      question: "Hva er fjerde trinn i faghistorieoppgaven?",
      options: ["Å plassere faget mot humanioras samtidige utvikling og notere forskyvningen mellom dem", "Å drøfte hva vitenskapeliggjøringen kostet faget i form av de-kontekstualisering", "Å gjøre rede for hvilket vitenskapelig ideal faget henter, og hvilke metoder som følger", "Å velge ett fag og begrunne hvorfor nettopp det er valgt framfor de andre alternativene"],
      explanation: "Fjerde trinn er plasseringen og forskyvningen, og det er trinnet veiledningen bruker mest plass på. De tre andre alternativene er trinn fem, tre og én i samme sjanger.",
    },
    {
      question: "Hvordan bør premisset behandles i selve besvarelsen?",
      options: ["Gjengis kort, merkes som premiss, med en setning om at det kan diskuteres — og så videre til følgene", "Utdypes grundig, siden alt annet i besvarelsen hviler på at premisset er riktig forstått av leseren", "Utelates helt, siden bestillingen allerede har formulert det og leseren dermed kjenner det godt", "Bestrides i hoveddelen, siden en kritisk holdning til premisser alltid gir høyere uttelling"],
      explanation: "En kort merknad er lov og ofte bra; en hoveddel om premisset er en besvarelse på et annet spørsmål. Å utelate det helt gjør teksten uforankret, og å bestride det er å bytte oppgave.",
    },
  ],
  'exfac03-hark-3-3': [
    {
      question: "Hva krever positivismen?",
      options: ["At kunnskap begrunnes i det observerbare, med en framgangsmåte en annen kan gå etter", "At bare naturvitenskapelige emner kan undersøkes vitenskapelig på en forsvarlig måte", "At forskeren holder sitt eget ståsted utenfor og skriver i en helt nøytral stemme", "At resultatene skal komme til nytte i samfunnet innen rimelig tid etter publisering"],
      explanation: "Kravet gjelder begrunnelsen og etterprøvbarheten, ikke hvilket emne som undersøkes. Nøytral stemme og samfunnsnytte er andre krav som ofte forveksles med posisjonen.",
    },
    {
      question: "Hva skiller positivisme fra enhetsvitenskap?",
      options: ["Positivismen er et krav til begrunnelse; enhetsvitenskapen er en påstand om kunnskapens enhet", "Positivismen gjelder naturvitenskapen; enhetsvitenskapen gjelder de humanistiske fagene og deres metoder", "Positivismen er en metode; enhetsvitenskapen er en institusjonell ordning ved universitetet", "Positivismen er fra 1900-tallet; enhetsvitenskapen ble formulert allerede i renessansen"],
      explanation: "Man kan stille begrunnelseskravet uten å tro at all kunnskap hører til én vitenskap. De øvrige alternativene fordeler dem på fag, nivå eller tidsrom uten grunnlag.",
    },
    {
      question: "Hva er poenget med etterprøving som krav?",
      options: ["At uenighet kan lokaliseres, slik at to lesere kan si nøyaktig hvor de skiller lag", "At flere forskere skal komme fram til nøyaktig samme resultat med samme materiale", "At resultatet skal godkjennes av en komité før det kan publiseres i et tidsskrift", "At framgangsmåten skal være så enkel at enhver leser kan gjenta den uten opplæring"],
      explanation: "Etterprøving gjør uenighet produktiv, og det er noe annet enn å kreve samme svar. Godkjenningsordninger og enkelhet er ikke det kravet består i.",
    },
    {
      question: "Hva er svak relativisme?",
      options: ["At kunnskap er situert, og at ståstedet derfor skal gjøres rede for i teksten", "At alle framstillinger er like gyldige, siden ingen nøytral målestokk finnes", "At kunnskap om fortiden er umulig, siden alle kilder er farget av sine avsendere", "At forskeren bør unngå å ta standpunkt i faglige stridsspørsmål i sine egne tekster"],
      explanation: "Den svake formen skjerper kravene: mer skal gjøres rede for, ikke mindre. De øvrige alternativene beskriver sterk relativisme, skepsis og en tilbakeholdenhetsnorm.",
    },
    {
      question: "Hva er sterk relativisme?",
      options: ["At alle framstillinger er like gyldige, siden ingen målestokk kan brukes til å rangere dem", "At kunnskap er frambrakt fra et bestemt sted, og at utgangspunktet må legges tydelig fram for leseren", "At framstillinger kan rangeres, men bare av forskere innenfor det samme fagmiljøet", "At kunnskap endrer seg over tid, slik at dagens svar kan bli avløst av morgendagens"],
      explanation: "Den sterke formen opphever grunnlaget for rangering. De øvrige alternativene beskriver den svake formen, en fagfelleforbeholden variant og en helt alminnelig observasjon om kunnskapsutvikling.",
    },
    {
      question: "Hvorfor er styrkeangivelsen avgjørende når du skriver «relativisme»?",
      options: ["Fordi setningen ellers kan leses som to helt ulike påstander, og leseren velger selv", "Fordi ordet er forbeholdt den sterke formen i faglitteraturen og ellers bør unngås", "Fordi den svake formen er den eneste holdbare, og den sterke derfor ikke bør nevnes", "Fordi sensorveiledningene krever at alle sentrale begreper defineres ved første bruk"],
      explanation: "Uten angivelse velger leseren tolkning, og risikoen fjernes med ett ord. De øvrige alternativene innfører språkforbud, forhåndsdom eller en definisjonsregel som ikke er poenget her.",
    },
    {
      question: "Hva er forskjellen på situering og partiskhet?",
      options: ["Situeringen er et vilkår som bare kan gjøres rede for; partiskhet er å ville et bestemt resultat", "Situeringen gjelder forskerens fag og opplæring; partiskhet gjelder hennes politiske oppfatninger", "Situeringen er en svakhet som kan trenes bort; partiskhet er en varig egenskap ved forskeren", "Situeringen gjelder valg av emne; partiskhet gjelder valg av metode i undersøkelsen"],
      explanation: "Å blande dem gjør at innvendingen mot posisjonen bommer: det ene kan legges av, det andre ikke. De øvrige alternativene deler etter fagfelt, treningsmulighet eller valgtype.",
    },
    {
      question: "Hva skiller relativisme fra skepsis?",
      options: ["Relativismen sier noe om gyldighetens forankring; skepsisen om kunnskap er mulig i det hele tatt", "Relativismen gjelder de humanistiske fagene; skepsisen gjelder naturvitenskapen og dens metoder", "Relativismen er moderne; skepsisen ble formulert i antikken og har vært borte siden", "Relativismen er en metode; skepsisen er en holdning uten metodiske konsekvenser"],
      explanation: "En svak relativist kan være helt uskeptisk og mene at vi vet mye — fra et sted. De øvrige alternativene fordeler begrepene på fag, tidsrom eller nivå uten grunnlag.",
    },
    {
      question: "Hva betyr det å forklare, i denne aksen?",
      options: ["Å vise hvordan et enkelttilfelle følger av en allmenn sammenheng som også gjelder andre steder", "Å gjøre rede for hva noe betydde for dem det gjaldt, i deres egen tid og sammenheng", "Å beskrive et hendelsesforløp så fullstendig som kildene tillater, uten å tolke det", "Å formidle et fagstoff i et språk som gjør det tilgjengelig for lesere uten forkunnskap"],
      explanation: "Forklaringen krever allmenn form. Å gjøre rede for hva noe betydde for dem det gjaldt, er å forstå, mens fullstendig beskrivelse og formidling er to helt andre mål.",
    },
    {
      question: "Hva betyr det å forstå, i denne aksen?",
      options: ["Å gjøre rede for hva noe betydde, hvilke muligheter som fantes, og hva som sto på spill", "Å oppnå enighet med andre forskere om hvordan et materiale skal tolkes videre i faget", "Å kjenne igjen egne erfaringer i det materialet man undersøker fra fortiden", "Å redusere et komplisert forhold til en enkel sammenheng som er lett å huske"],
      explanation: "Forståelse krever treffsikkerhet i det enkelte tilfellet, kontrollerbar gjennom kildearbeid. Enighet, gjenkjennelse og forenkling er tre andre ting.",
    },
    {
      question: "Hva ligger i anførselstegnene rundt «myk» og «hard» humaniora?",
      options: ["At «myk» ikke betyr uten krav — kravene er av en annen art enn nabofagenes", "At begrepene er hentet fra dagligtalen", "At begrepene er nedsettende og derfor bør erstattes med nøytrale betegnelser", "At skillet er nytt og ennå ikke har fått en fast form i den faglige diskusjonen"],
      explanation: "Anførselstegnene markerer at ordene kan lese som en rangering de ikke er. De øvrige alternativene gjør dem til dagligtale, skjellsord eller nyvinninger.",
    },
    {
      question: "Hva er metodemangfold?",
      options: ["At gjenstanden stiller krav til framgangsmåten, slik at feil valg besvarer et annet spørsmål", "At forskeren står helt fritt til å velge framgangsmåte ut fra hva hun selv behersker best", "At et fag bør bruke flest mulig metoder i samme undersøkelse for å sikre resultatet", "At hvert fag skal ha sin egen metode som ikke deles med noe annet fagområde"],
      explanation: "Posisjonen er strengere enn metodefrihet: gjenstanden binder valget. Fri valgadgang, metodeoppsamling og eneretten på en metode er tre andre påstander.",
    },
    {
      question: "Hvor på aksen står antikken?",
      options: ["Begge holdningene finnes uten navn: det etterprøvbare utvalget mot den markerte usikkerheten", "Klart på forklaringssiden, siden alle de antikke forfatterne krevde etterprøvbare opplysninger", "Klart på forståelsessiden, siden fortellingen var viktigere enn kontrollen av opplysninger", "Utenfor aksen, siden begrepene positivisme og relativisme først oppstår på 1900-tallet"],
      explanation: "Spenningen finnes fra første trinn, selv om navnene er senere. De to sidevalgene forenkler, og å sette perioden utenfor aksen ville fjernet det beste argumentet for at aksen er gammel.",
    },
    {
      question: "Hva kjennetegner aksen i middelalderen?",
      options: ["Tolkningskunsten er høyt utviklet, mens spørsmålet om tekstens opphav ikke stilles systematisk", "Prøvingen av kilder er høyt utviklet, mens tolkningen er underordnet de anerkjente autoritetene", "Begge sider er fraværende, siden all kunnskap hentes fra tekster med anerkjent autoritet", "Forklaringssiden dominerer, siden hendelser forklares av lovmessige sammenhenger i naturen"],
      explanation: "Å si at perioden manglet kritikk er upresist: det som manglet, var spørsmålet om opphavet. De øvrige alternativene snur forholdet, tømmer raden eller innfører en naturlovsforklaring.",
    },
    {
      question: "Hva er nytt på aksen i renessansen?",
      options: ["Prøvingen av ekthet, opphav og hensikt gir tolkningen et grunnlag andre kan kontrollere", "Kravet om at en begrunnelse skal gjelde generelt og kunne brukes i andre tilfeller", "Innsikten om at hver tid må forstås ut fra sine egne forutsetninger og ikke måles mot vår", "Erkjennelsen av at forskerens eget ståsted former hvilke spørsmål som blir stilt"],
      explanation: "Prøvingen er renessansens bidrag. Allmenngyldighetskravet hører til opplysningstiden, egne premisser til historismen, og situertheten til tiden etter 1970.",
    },
    {
      question: "Hva kjennetegner aksen i opplysningstiden?",
      options: ["Kravet heves fra å gjelde denne kilden til å gjelde generelt, og enhetsvitenskapen står sterkest", "Kravet senkes, siden fornuften antas å gi svar uten at kildene må kontrolleres særlig nøye", "Kravet flyttes til det enkelte tilfellet, siden hvert samfunn har sin egen utvikling", "Kravet oppheves, siden alle framstillinger regnes som uttrykk for sin egen tid"],
      explanation: "Hevingen av kravet er selve trinnet, og den utløser motstøtet i neste periode. De øvrige alternativene senker, flytter eller opphever kravet.",
    },
    {
      question: "Hva er motstøtet i romantikken og historismen?",
      options: ["Treffsikkerhet i det enkelte tilfellet erstatter allmenngyldighet som krav til en begrunnelse", "Allmenngyldighet erstatter treffsikkerhet, siden nasjonene nå skulle sammenlignes med hverandre", "Kontrollen oppgis helt, siden innlevelse ikke kan etterprøves av utenforstående lesere", "Kravet om observerbarhet skjerpes, siden arkivmaterialet nå ble gjort tilgjengelig for alle"],
      explanation: "Motstøtet gjelder hva kravet rettes mot, ikke om det finnes. Kildeutgivelsene er nettopp kontrollmekanismer, så påstanden om at kontrollen oppgis, er gal.",
    },
    {
      question: "Hva skjer med aksen på 1900-tallet?",
      options: ["Delingen blir eksplisitt og får egne institusjoner, tidsskrifter og karriereveier på begge sider", "Den ene siden vinner, og forståelsessiden forsvinner helt ut av de historiske fagene i perioden", "Aksen forsvinner, siden alle fag samles om felles metodekrav i løpet av århundret", "Aksen flyttes til samfunnsvitenskapene, som overtar striden fra de humanistiske fagene"],
      explanation: "Det nye er at holdningene står mot hverandre med hvert sitt apparat. Ingen side vinner, aksen forsvinner ikke, og striden føres innenfor humaniora også.",
    },
    {
      question: "Hva kjennetegner aksen etter 1970?",
      options: ["Situertheten blir felles vilkår, og kravet blir åpenhet om ståsted framfor påstand om nøytralitet", "Positivismen forlates fullstendig, og etterprøving regnes ikke lenger som et gyldig krav i faget", "Forskjellen mellom de to sidene oppheves, siden alle nå bruker de samme framgangsmåtene", "Kravet om allmenngyldighet gjeninnføres, denne gangen med støtte i digitale metoder"],
      explanation: "Kravet om etterprøving består, men suppleres med et krav om å gjøre rede for utgangspunktet. De øvrige alternativene forlater, opphever eller gjeninnfører noe uten grunnlag.",
    },
    {
      question: "Hva er disponeringsregelen for en sjutrinns bestilling?",
      options: ["To til tre setninger per trinn, med én setning om hva som endret seg fra forrige trinn", "Ett avsnitt per trinn, med minst fem setninger for at hvert trinn skal bli forsvarlig dekket", "Grundig behandling av de tre viktigste trinnene, og stikkord for de øvrige fire", "Like mye plass på hvert trinn som på innledningen og konklusjonen til sammen"],
      explanation: "Sju korte trinn er formen, og et manglende trinn er et manglende ledd. De øvrige alternativene sprenger omfanget eller utelater fire trinn.",
    },
    {
      question: "Hvilken feil begår en besvarelse som behandler tre perioder grundig og utelater fire?",
      options: ["Å prøve å dekke alt og dermed ikke drøfte noe, her i sin motsatte form", "Å bruke et fagbegrep som etikett", "Å la det enkle redegjørelsesleddet spise oppgaven på bekostning av drøftingen", "Å skrive ett fags historie som om den gjaldt alle fagene i samme kunnskapsfelt"],
      explanation: "Registerets trettende feil rammer også den motsatte formen: grundighet i tre trinn og fravær i fire. De tre andre feilene finnes, men beskriver andre problemer.",
    },
    {
      question: "Kan et fag være positivistisk i metode og relativistisk i selvforståelse?",
      options: ["Ja — kravene gjelder ulike ting, framgangsmåten og utgangspunktet, og begge krever mer åpenhet", "Nei — kravet om etterprøving forutsetter en nøytral leser, som relativismen benekter finnes", "Ja — men bare dersom forskeren holder de to kravene atskilt i hver sin del av teksten", "Nei — de to posisjonene har historisk vært forsvart av ulike fagmiljøer og lar seg ikke forene"],
      explanation: "Kombinasjonen er krevende, ikke selvmotsigende: begge krav trekker mot mer åpenhet. Etterprøving forutsetter lokaliserbar uenighet, ikke en nøytral leser, og historisk tilhørighet avgjør ingenting.",
    },
    {
      question: "Hva betyr det å framstille en posisjon i sin sterkeste form?",
      options: ["Å gjengi den slik en tilhenger ville kjent seg igjen i, med det beste argumentet framme", "Å gjengi den i den formen som er lettest å motsi, slik at drøftingen blir tydeligere for leseren", "Å gjengi den med alle forbehold og nyanser, slik at framstillingen blir uttømmende", "Å gjengi den med henvisning til den forskeren som har formulert den skarpest"],
      explanation: "Kravet gjelder styrke i tillegg til redelighet: en drøfting mot en svak versjon teller lite. Uttømmende gjengivelse og kildehenvisning er andre og svakere krav.",
    },
    {
      question: "Hva er den vanligste måten å svekke sin egen drøfting på i dette temaet?",
      options: ["Å framstille positivismen som naiv, og dermed miste den beste innvendingen mot eget standpunkt", "Å bruke for mange eksempler fra de ulike periodene, slik at framstillingen mister sin sammenheng", "Å konkludere for tydelig, siden en åpen avslutning gir rom for flere lesninger", "Å bruke begreper fra pensum i stedet for egne formuleringer i redegjørelsen"],
      explanation: "En karikert motpart gir ingen motstand, og da forsvinner grunnlaget for en reell drøfting. De øvrige alternativene beskriver andre og mindre kostbare svakheter.",
    },
  ],
  'exfac03-hark-4-1': [
    {
      question: "Når blir en gjenstand eller en tekst egentlig en kilde, slik emnet bruker begrepet?",
      options: ["Når noen stiller et spørsmål til den, og den kan bidra til å svare på nettopp det spørsmålet", "Når den er gammel nok til å bli tatt inn i et offentlig arkiv og registrert med eget nummer der", "Når den er laget av et øyenvitne som selv var til stede mens hendelsen fant sted", "Når fagmiljøet har slått fast at den er ekte og ikke en senere forfalskning"],
      explanation: "Riktig svar er at noe blir en kilde først i møtet med et spørsmål; uten spørsmålet er det bare en gjenstand eller en tekst. Den nærmeste fella er å binde kildestatus til alder og arkivplassering, altså til en egenskap ved objektet selv. Da mister man poenget om at samme gjenstand kan være kilde til svært ulike ting.",
    },
    {
      question: "Hva er det den ytre kildekritikken spør om?",
      options: ["Om kilden virkelig er det den utgir seg for å være", "Om innholdet i kilden er til å stole på når det gjelder det den forteller om", "Om kilden har vært brukt av andre forskere med omtrent samme problemstilling tidligere", "Om kilden er bevart i en tilstand som gjør den lesbar for forskere i dag"],
      explanation: "Riktig svar er at den ytre kildekritikken avgjør om kilden er ekte, riktig datert og har den avsenderen den oppgir. Den nærmeste fella er å svare med innholdets troverdighet, men det hører til den indre kildekritikken. Rekkefølgen har en grunn: spørsmålet om hva kilden kan fortelle, gir bare mening når vi vet hva den er.",
    },
    {
      question: "Hva er det den indre kildekritikken spør om?",
      options: ["Hva kilden kan fortelle oss, og hvor langt den holder som vitnesbyrd om det vi spør om", "Om dokumentet er ekte, riktig datert og har den avsenderen det oppgir", "Om kilden er en original eller en senere avskrift av et tapt forelegg", "Om kilden er bevart i sin helhet eller bare finnes i utdrag"],
      explanation: "Riktig svar er at den indre kildekritikken gjelder innholdet: hva kilden faktisk kan bære av vitnesbyrd, og hvor grensen går. De tre andre formuleringene handler alle om kildens ytre status, altså ekthet, overleveringsform og bevaringsgrad. Fella er å slå de to leddene sammen til én udelt «kildekritikk» og dermed miste arbeidsdelingen mellom dem.",
    },
    {
      question: "Hva vil det si å bruke en kilde som levning?",
      options: ["Å lese kilden som et spor etter den situasjonen som frambrakte den", "Å lese kilden som en fortelling om hendelser som ligger utenfor kilden selv", "Å lese kilden som et vitnesbyrd som bevisst ble etterlatt til kommende slekter", "Å lese kilden som en gjenstand uten skrift, altså som arkeologisk materiale"],
      explanation: "Riktig svar er at levningsbruken tar kilden som en rest etter sin egen tilblivelse: den vitner om seg selv og om det miljøet som laget den. Den nærmeste fella er beretningsbruken, der kilden i stedet leses som en fortelling om noe annet. Levning er heller ikke et ord for gjenstander uten skrift; et brev kan leses som levning like godt som en pilspiss.",
    },
    {
      question: "Hva vil det si å bruke en kilde som beretning?",
      options: ["Å lese kilden som en fortelling om noe som ligger utenfor den selv", "Å lese kilden som en rest etter sin egen tilblivelsessituasjon", "Å lese kilden som materiale for språkhistoriske undersøkelser av ordforrådet", "Å lese kilden som et rettslig bevis som kan avgjøre en tvist mellom parter"],
      explanation: "Riktig svar er at beretningsbruken tar kilden på ordet om noe utenfor den selv, og derfor stiller spørsmål om avsenderens innsikt og troverdighet. Den nærmeste fella er levningsbruken, som tvert imot leser kilden som spor etter seg selv. Det avgjørende er ikke hva slags kilde det er, men hvilken av de to bruksmåtene forskerens spørsmål krever.",
    },
    {
      question: "Hva kjennetegner et materielt kildesyn?",
      options: ["Kilden vurderes ut fra hva den er", "Kilden vurderes ut fra hvilken funksjon den kan fylle for et bestemt forskningsspørsmål", "Kilden vurderes ut fra hvor godt den er bevart og hvor lett den er å lese i dag", "Kilden vurderes ut fra hvilket materiale den består av, som pergament, papir eller stein"],
      explanation: "Riktig svar er at det materielle kildesynet knytter vurderingen til hva kilden er, altså til dens egen art og opphav. Den nærmeste fella er det funksjonelle kildesynet, som i stedet spør hva kilden kan gjøre for problemstillingen. Ordet «materielt» viser her til kildens vesen, ikke til hvilket stoff den er laget av.",
    },
    {
      question: "Hva kjennetegner et funksjonelt kildesyn?",
      options: ["Kilden vurderes ut fra hvilken funksjon den kan ha for den problemstillingen forskeren arbeider med", "Kilden vurderes ut fra hva den er, uavhengig av hva den skal brukes til", "Kilden vurderes ut fra hvor mange andre kilder som støtter opplysningene i den", "Kilden vurderes ut fra hvilken funksjon den hadde da den ble laget"],
      explanation: "Riktig svar er at det funksjonelle kildesynet gjør nytteverdien for problemstillingen til målestokken, slik at samme gjenstand kan være ulike kilder for ulike spørsmål. Den dyreste fella er å lese «funksjon» som kildens opprinnelige bruk i sin egen samtid, altså som noe historisk gitt. Funksjonen det er tale om, ligger i forholdet mellom kilden og forskerens spørsmål.",
    },
    {
      question: "Kassabokoppslaget fra landhandelen brukes som kilde til varepriser, til skrivekyndighet og til sosiale relasjoner i bygda. Hva illustrerer eksempelet?",
      options: ["At samme gjenstand blir ulike kilder alt etter hvilket spørsmål den møtes med", "At kilder med tallmateriale gir sikrere kunnskap enn kilder med løpende tekst", "At kildens verdi ligger fast, slik at forskerens spørsmål ikke endrer hva den kan brukes til", "At regnskapsmateriale alltid bør leses som beretning og aldri som levning"],
      explanation: "Riktig svar er at eksempelet viser det funksjonelle kildesynet i arbeid: tre spørsmål gjør ett og samme oppslag til tre forskjellige kilder. Den nærmeste fella er å tro at kildens verdi er en fast egenskap ved gjenstanden, for da ville de tre spørsmålene måtte gi samme utbytte. Eksempelet handler heller ikke om at tall er sikrere enn tekst.",
    },
    {
      question: "En kandidat skriver at kassaboka «er en levning og ikke en beretning». Hvilken feil gjør kandidaten?",
      options: ["Kandidaten gjør kildesynet til en fast egenskap ved kilden, mens det avhenger av spørsmålet som stilles", "Kandidaten forveksler den ytre kildekritikken med den indre i framstillingen sin", "Kandidaten bruker et arkeologisk begrep på et skriftlig materiale der det ikke passer", "Kandidaten daterer kilden feil og trekker derfor gale slutninger om innholdet"],
      explanation: "Riktig svar er at levning og beretning er bruksmåter, ikke merkelapper som klistres på gjenstanden en gang for alle. Kassaboka er levning når vi spør om skrivekyndighet og beretning når vi tar prisopplysningene på ordet. Den nærmeste fella er å tro at feilen ligger i sammenblandingen av ytre og indre kildekritikk, men kandidaten har ikke berørt det leddet i det hele tatt.",
    },
    {
      question: "En kandidat skriver at hun «har vært kildekritisk» overfor et brev, men sier ingenting om hvem som skrev det, til hvem eller i hvilken hensikt. Hva er problemet?",
      options: ["Kildekritikk brukes som etikett uten at den blir utført på materialet", "Kandidaten har valgt et brev, som er en kildetype som egner seg dårlig for kildekritikk", "Kandidaten burde ha begynt med den indre kildekritikken før hun gikk løs på den ytre", "Kandidaten mangler et teoretisk begrep om hva et brev er som sjanger i samtiden"],
      explanation: "Riktig svar er at ordet «kildekritisk» her bare er en merkelapp: leseren får ingen opplysninger om avsender, mottaker eller hensikt, og altså ingen faktisk prøving. Dette er en av de mest utbredte svakhetene i drøftinger om kilder. Den nærmeste fella er å lete etter feil rekkefølge mellom ytre og indre kildekritikk, men her er ingen av delene gjennomført.",
    },
    {
      question: "En kandidat gjør grundig rede for den klassiske kildekritikken og for arkivstudiene, og stopper der. Hva mangler i framstillingen?",
      options: ["En redegjørelse for hva som endret seg, altså hvordan nye metoder og et mer funksjonelt kildesyn kom til", "En definisjon av hva et arkiv er som institusjon i den moderne staten, og av hvordan slike samlinger blir ordnet", "En vurdering av om kildekritikken kan brukes på arkeologisk materiale også", "En henvisning til Herodot og Thukydid som historieskrivingens opphavsmenn"],
      explanation: "Riktig svar er at oppgaven gjelder utviklingen: den klassiske kildekritikken må settes i bevegelse, ellers blir framstillingen et stillbilde. Den nærmeste fella er å savne en arkivdefinisjon, som er nyttig, men som ikke er det som gjør framstillingen ufullstendig. Poenget er hva den klassiske kildekritikken ble supplert og delvis erstattet av.",
    },
    {
      question: "Hva sier H2024-veiledningen om hva som skjedde med den klassiske kildekritikken og arkivstudiene?",
      options: ["De ble både erstattet og supplert av nye metoder, av et mer funksjonelt kildesyn og av nye målsettinger", "De ble forkastet fullstendig og byttet ut med statistiske og etnografiske framgangsmåter", "De ble stående uendret, mens nye metoder vokste fram ved siden av uten å berøre dem", "De ble snevret inn til bare å gjelde skriftlige kilder fra offentlige arkiver"],
      explanation: "Riktig svar er at veiledningen bruker begge ordene: den klassiske kildekritikken ble erstattet og supplert på én gang. Den dyreste fella er å velge bare det ene leddet, altså å skrive at den ble avløst helt eller at den ble liggende urørt. Nettopp dobbeltheten er det en drøfting må få fram.",
    },
    {
      question: "Hvilke nye metoder nevner H2024-veiledningen ved siden av den klassiske kildekritikken?",
      options: ["Topografi og geografi, etnografi, sammenligning og statistikk", "Eksperimentell psykologi, demografi, myntlære og skriftlære", "Diskursanalyse, dekonstruksjon, tegnlære og fortelleteori", "Laboratoriearbeid, kjemisk datering og genetiske analyser av funnmateriale"],
      explanation: "Riktig svar er topografi og geografi, etnografi, sammenligning og statistikk. Fellestrekket er at de henter framgangsmåter fra nabofag og gjør historikeren i stand til å spørre om andre ting enn hendelsesforløp. De øvrige listene inneholder metoder som finnes i faglitteraturen, men som ikke er dem veiledningen løfter fram i denne sammenhengen.",
    },
    {
      question: "Hvilken periode plasserer rutenettet i H2021-veiledningen kildekritikkens opphav i?",
      options: ["Renessansen", "Antikken", "Opplysningstiden", "Tiden etter 1970"],
      explanation: "Riktig svar er renessansen, der arbeidet med å prøve dokumenters ekthet og datering ble satt i system. Den nærmeste fella er antikken, og den er ikke urimelig: Thukydid stiller krav til øyenvitner som peker framover. Men rutenettet plasserer selve kildekritikken som metodisk program i renessansen, ikke hos de greske historieskriverne.",
    },
    {
      question: "Hva betyr det at en kilde har tendens?",
      options: ["At opphavspersonen har en interesse i saken som farger framstillingen", "At kilden er skadet eller ufullstendig og derfor bare kan leses stykkevis", "At kilden ble skrevet ned lenge etter hendelsen den forteller om", "At kilden ble til under bestemte ytre omstendigheter, som tid, sted og mottaker"],
      explanation: "Riktig svar er at tendens gjelder avsenderens egeninteresse: det finnes noe han eller hun vil oppnå, og det setter spor i framstillingen. Den nærmeste fella er opphavssituasjonen, som gjelder rammene kilden ble til innenfor. Forskjellen er at tendensen sier noe om viljen bak kilden, mens opphavssituasjonen beskriver omstendighetene rundt den.",
    },
    {
      question: "Hva menes med en kildes opphavssituasjon?",
      options: ["Omstendighetene kilden ble til under: hvem som laget den, når, for hvem og i hvilken hensikt", "Avsenderens egeninteresse i saken, som farger det bildet kilden gir", "Den senere veien kilden har tatt gjennom arkiver, samlinger og utgivelser", "Det språklige og litterære forbildet kilden følger i oppbygning og stil"],
      explanation: "Riktig svar er at opphavssituasjonen er rammen rundt tilblivelsen: avsender, tidspunkt, adressat og formål. Den nærmeste fella er tendens, som er ett bestemt trekk ved avsenderen og ikke hele situasjonen. Å kartlegge opphavssituasjonen er ofte det som gjør det mulig å oppdage tendensen i det hele tatt.",
    },
    {
      question: "En kandidat noterer at et bønneskriv ble sendt fra en husmann til amtmannen i et uår, men skriver ingenting om at husmannen ønsket skattelette. Hva er utelatt?",
      options: ["Kildens tendens, altså avsenderens egeninteresse i det som blir framstilt", "Kildens opphavssituasjon, altså hvem som skrev, når og til hvem", "Den ytre kildekritikken, altså spørsmålet om skrivet er ekte og riktig datert", "Kildens overleveringshistorie, altså hvordan skrivet er blitt bevart fram til i dag"],
      explanation: "Riktig svar er tendensen: kandidaten har fått med rammen rundt skrivet, men ikke det avsenderen ville oppnå med det. Den nærmeste fella er opphavssituasjonen, men den er allerede beskrevet med avsender, mottaker og tidspunkt. Uten tendensen står nøden i skrivet uprøvd, for den er nettopp det husmannen har grunn til å understreke.",
    },
    {
      question: "Hvorfor omtales arkivstudier både som metode og som institusjon?",
      options: ["Fordi arkivarbeid er en framgangsmåte for forskeren, samtidig som arkivene selv er ordnede samlinger bygd opp av stat og forvaltning", "Fordi arkivarbeid krever både opplæring i eldre håndskrift, inngående kjennskap til katalogsystemene og tålmodighet i selve letearbeidet", "Fordi arkivene både oppbevarer originaler og gir ut trykte utgaver av dem", "Fordi arkivene er åpne for forskere og samtidig lukket for allmennheten"],
      explanation: "Riktig svar er at ordet dekker to ting på én gang: en arbeidsmåte historikeren lærer seg, og et apparat av samlinger som forvaltningen har bygd opp og ordnet. Den nærmeste fella er å redusere dobbeltheten til et spørsmål om ferdigheter og kataloger. Poenget er at arkivet er formet av dem som skapte det, og at ordningen selv styrer hva forskeren kan finne.",
    },
    {
      question: "Hvordan bør en kandidat håndtere spørsmålet om det funksjonelle kildesynet er en utvidelse eller en oppløsning av kildekritikken?",
      options: ["Ved å prøve begge posisjonene mot hverandre og begrunne sitt eget standpunkt", "Ved å slå fast at det er en oppløsning, siden alt da kan gjøres til kilde", "Ved å slå fast at det er en utvidelse, siden ingen kildekritiske krav er opphevet", "Ved å la spørsmålet ligge, siden det ikke lar seg avgjøre med belegg i pensum"],
      explanation: "Riktig svar er at dette er en drøftingsakse, og at verdien ligger i å veie argumentene og deretter ta stilling. De to bastante svarene er begge forsvarlige som konklusjon, men ikke som utgangspunkt uten prøving. Å la spørsmålet ligge er den svakeste veien, for da faller drøftingen bort helt.",
    },
    {
      question: "Hvis alt i prinsippet kan være en kilde, hva blir da igjen av kravet om at en kilde skal prøves?",
      options: ["Prøvingen består, men den rettes mot forholdet mellom spørsmålet og kilden i stedet for mot kilden alene", "Prøvingen faller bort, siden ingen gjenstand lenger kan utelukkes som kildemateriale", "Prøvingen blir en formalitet som utføres av arkivet før materialet gjøres tilgjengelig", "Prøvingen erstattes av et krav om at kilden må finnes i flere uavhengige eksemplarer"],
      explanation: "Riktig svar er at kravet ikke oppheves, men flyttes: spørsmålet blir om denne kilden kan bære akkurat denne slutningen. Den nærmeste fella er å lese det funksjonelle kildesynet som en generell frikjennelse, altså at prøvingen ikke lenger trengs. Da forsvinner nettopp den kontrollen som gjør kildebruken etterprøvbar.",
    },
    {
      question: "Hvilket bidrag i emnet bærer den brede framstillingen av humaniora som felt, medregnet hermeneutikk som tradisjon, teori og metode?",
      options: ["Jordheim m.fl.", "Sandmo", "Herodot og Thukydid", "Platon og Descartes"],
      explanation: "Riktig svar er at det er Jordheim m.fl. som bærer den brede framstillingen av humaniora som felt, og som er stedet hermeneutikken presenteres som tradisjon, teori og metode. Sandmo er den nære fella, for han følger historiefagets egen historie og synet på fortiden gjennom periodene, ikke feltet som helhet. Herodot og Thukydid er posisjoner fra antikken, og Platon og Descartes hører til dualismen — de er stoff i boka, ikke framstillinger av feltet.",
    },
    {
      question: "Hvilket bidrag følger historiefagets egen historie og synet på fortiden gjennom periodene?",
      options: ["Sandmo, «Tid for historie»", "Jordheim m.fl., «Humaniora»", "Olsen om arkeologisk teori", "Hölling om konserveringsfaget"],
      explanation: "Riktig svar er at Sandmo skriver historiefagets historie og viser hvordan synet på fortiden har endret seg fra periode til periode. Den nærmeste fella er Jordheim m.fl., som er emnets hovedbok, men som dekker humanioras historie og avgrensning som helhet. Olsen og Hölling hører til henholdsvis arkeologisk teori og konserveringsfaget.",
    },
    {
      question: "Hvor ofte er kildekritikk, historisme og kildesyn tema i oppgavetekstene i arkivet?",
      options: ["Temaet står 2 av 6 terminer", "Temaet står i hver enkelt av de 6 terminene", "Temaet står bare i 1 termin, den med mappeinnlevering", "Temaet står ikke i noen av de 6 terminene"],
      explanation: "Riktig svar er at kildekritikk, historisme og kildesyn står 2 av 6 terminer. Fella er å slutte fra at temaet er sentralt i pensum, til at det må gå igjen hver gang; hyppighet og faglig vekt er ikke det samme. Temaet er altså godt belagt, men ikke et fast innslag.",
    },
  ],
  'exfac03-hark-4-2': [
    {
      question: "Hva går historismens ideal ut på?",
      options: ["At hver tid skal forstås ut fra sine egne forutsetninger, slik at nåtidens målestokk legges bort", "At historien utvikler seg etter faste lover som forskeren har til oppgave å avdekke, formulere og etterprøve", "At fortiden skal vurderes moralsk ut fra de verdiene vi selv holder for gyldige i dag", "At historikeren skal lete etter det som er felles for alle tider og alle steder"],
      explanation: "Riktig svar er at hver epoke skal måles med sin egen målestokk, ikke med vår. Den nærmeste fella er tanken om historiske utviklingslover, som er noe ganske annet og heller peker mot historisisme. Idealet er metodisk: det stiller krav til hvordan forskeren nærmer seg materialet.",
    },
    {
      question: "Hva krever historismens ideal om innlevelse av forskeren?",
      options: ["At forskeren arbeider seg inn i epokens egne forutsetninger gjennom kildene", "At forskeren forestiller seg fritt hvordan det måtte ha vært å leve den gangen", "At forskeren skildrer fortidens mennesker med litterære virkemidler for å gjøre dem levende", "At forskeren søker etter det i fortiden som gir gjenklang i hans eller hennes eget liv"],
      explanation: "Riktig svar er at innlevelsen er et metodisk krav som går gjennom kildene: den skal gi tilgang til hvordan verden hang sammen for dem som levde da. Den nærmeste fella er å forveksle innlevelse med synsing, altså med fri innbilning om følelser og motiver. Innlevelsen er en disiplinert arbeidsform, ikke en fritakelse fra belegg.",
    },
    {
      question: "Hva var det historisk spesifikke som forskningsmål?",
      options: ["Det enkelte, tidsbundne og særegne ved en epoke", "De allmenne lovene som gjelder på tvers av alle epoker og samfunn", "De materielle levningene som tilfeldigvis er bevart fra epoken", "De trekkene ved epoken som ligner mest på forholdene i vår egen tid"],
      explanation: "Riktig svar er at historismen søkte det særegne ved hver epoke, det som ikke lar seg føre tilbake til noe allment. Den nærmeste fella er det allmenne, altså søken etter lover og regelmessigheter, som er den motsatte forskningsinteressen. Dette valget former også hva slags kilder som blir viktige, siden det særegne bare kan nås gjennom det enkelte materialet.",
    },
    {
      question: "Hva var de nasjonale historiske skolene et uttrykk for?",
      options: ["Historismens institusjonelle form, der faget ble bygd ut ved universitetene i det enkelte landet", "En politisk bevegelse som ville avskaffe historiefaget som universitetsfag", "Et samarbeid på tvers av landegrensene om felles kildeutgivelser og felles metode", "En retning som ville skrive verdenshistorie i stedet for nasjonal historie"],
      explanation: "Riktig svar er at historismen fikk sin institusjonelle form i nasjonale skoler, med universitetsstillinger, kildeutgivelser og opplæring i eget land. Den nærmeste fella er å tenke seg dette som et grenseoverskridende samarbeid, for utgivelsesarbeidet var omfattende, men rammen var nasjonal. Denne organiseringen forklarer også hvorfor nasjonalhistorien ble fagets kjerne.",
    },
    {
      question: "Hva betyr objektivitet i historismens forstand?",
      options: ["Å tre til side for kilden og la den komme til orde på sine egne premisser", "Å måle alle kilder mot ett felles og tidløst kriterium for fornuft", "Å telle og veie kildematerialet slik at resultatene kan etterprøves statistisk", "Å avstå fra enhver vurdering og bare gjengi kildene ordrett"],
      explanation: "Riktig svar er at objektiviteten består i at forskeren holder sine egne målestokker tilbake og lar materialet tale. Den nærmeste fella er å forveksle dette med å avstå fra vurdering i det hele tatt, men historismen krever tvert imot streng prøving av kildene. Å tre til side gjelder forskerens egen tids dommer, ikke det faglige arbeidet.",
    },
    {
      question: "Hvilken forskjell er det viktig å holde fast på mellom historisme og historisisme?",
      options: ["Historismen vil forstå hver tid på dens egne premisser, mens historisisme brukes om læren om at historien følger nødvendige utviklingslover", "Historismen gjelder arbeidet med skriftlige kilder, mens historisisme brukes om den tilsvarende tilnærmingen til materielle levninger og gjenstander", "Historismen er en retning på 1900-tallet, mens historisisme hører hjemme i renessansen", "Historismen er et navn på faget, mens historisisme er et navn på metoden i faget"],
      explanation: "Riktig svar er at de to ordene peker i nesten motsatt retning: historismen mot det særegne ved hver tid, historisismen mot en lovmessig utvikling. Den nærmeste fella er å behandle dem som to navn på samme sak, med en tilfeldig arbeidsdeling mellom fag eller kildetyper. Å blande dem er en av de vanligste feilene i drøftinger om historismen.",
    },
    {
      question: "Hvorfor er det ikke nok å si at historismen betyr at man ble opptatt av historie?",
      options: ["Fordi historismen er et bestemt metodisk program, ikke bare en økt interesse for fortiden", "Fordi interessen for historie oppstod allerede i antikken med Herodot og Thukydid", "Fordi historismen bare gjaldt et lite fagmiljø og ikke preget kulturen ellers", "Fordi historismen først og fremst var en litterær og kunstnerisk strømning"],
      explanation: "Riktig svar er at historismen stiller bestemte krav til hvordan fortiden skal studeres, og at disse kravene er innholdet i begrepet. Den nærmeste fella er å peke på at historieinteresse er eldre enn historismen, noe som er riktig i seg selv, men som ikke forklarer hva ordet betegner. En besvarelse som nøyer seg med å konstatere interesse, har brukt begrepet som en etikett.",
    },
    {
      question: "Hva skiller historismens ideal fra Gadamers hermeneutikk?",
      options: ["Historismen krever at forskeren legger sin egen tid bort, mens Gadamer hevder at forståelse alltid skjer fra en egen horisont", "Historismen bygger på systematisk arbeid med kilder, mens Gadamer utelukkende bygger på filosofisk spekulasjon uten empirisk materiale", "Historismen gjelder fortiden, mens Gadamer bare uttaler seg om samtidige tekster", "Historismen er tysk, mens hermeneutikken kommer fra en fransk tradisjon"],
      explanation: "Riktig svar er at uenigheten gjelder forskerens eget ståsted: historismen vil holde nåtiden utenfor, Gadamer mener det ikke lar seg gjøre. Den nærmeste fella er å gjøre forskjellen til et spørsmål om kilder mot spekulasjon, men begge posisjonene handler om hvordan tekster og levninger skal forstås. Uenigheten er altså epistemologisk, ikke en strid om arbeidsmateriale.",
    },
    {
      question: "Hvor står romantikken og historismen i den sjutrinnsrekka emnet bruker?",
      options: ["Etter opplysningstiden og før 1900-tallet", "Mellom renessansen og opplysningstiden", "Etter 1900-tallet og før tiden etter 1970", "Mellom middelalderen og renessansen"],
      explanation: "Riktig svar er at romantikken og historismen utgjør trinnet mellom opplysningstiden og 1900-tallet i rekka antikken, middelalderen, renessansen, opplysningstiden, romantikken og historismen, 1900-tallet og tiden etter 1970. Den nærmeste fella er å skyve trinnet fram foran opplysningstiden. Plasseringen er ikke tilfeldig, for historismen svarer nettopp på opplysningstidens måte å måle fortiden på.",
    },
    {
      question: "Når blir humaniora et eget felt, slik emnet framstiller det?",
      options: ["Først etter ca. 1800", "Allerede i antikken, med Platon og de greske historieskriverne", "Fra renessansen av, med studia humanitatis", "Først etter 1970, med den kritiske vendingen i faget"],
      explanation: "Riktig svar er at humaniora som avgrenset felt hører hjemme etter ca. 1800, i samme periode som historismen og de nasjonale skolene vokser fram. Den nærmeste fella er renessansen, der studia humanitatis riktignok gir et dannelsesprogram, men ikke et felt i moderne forstand. Sammenfallet i tid er verdt å merke seg, for feltdannelsen og historismens program hører sammen.",
    },
    {
      question: "Hva sier H2024-veiledningen om forholdet mellom Gadamer og historismen?",
      options: ["At Gadamers syn står i opposisjon til idealet om å studere fortiden på dens egne premisser, og at dette ifølge Gadamer ikke er mulig", "At Gadamer viderefører historismens ideal og gir det et filosofisk fundament", "At Gadamer og historismen behandler helt ulike emner, og at de to posisjonene derfor verken støtter eller motsier hverandre på noe vesentlig punkt", "At Gadamer avviser at fortiden i det hele tatt kan forstås av mennesker i dag"],
      explanation: "Riktig svar er at veiledningen setter Gadamer opp som motstykke til historismens ideal, og begrunner det med at et slikt studium ikke lar seg gjennomføre. Den nærmeste fella er å trekke dette for langt og lese Gadamer som en som avviser all forståelse av fortiden. Han hevder tvert imot at forståelse er mulig, men bare fra tolkerens egen horisont.",
    },
    {
      question: "Hva mener Gadamer med fordom?",
      options: ["En forutforståelse vi alltid har med oss, og som er betingelsen for at vi kan forstå noe i det hele tatt", "En feilkilde som forskeren må luke bort før arbeidet med kildene kan begynne", "En nedarvet moralsk dom om andre mennesker som forskningen bør avdekke", "En hypotese som settes fram på forhånd og siden prøves mot materialet"],
      explanation: "Riktig svar er at fordommen hos Gadamer er den forutforståelsen som gjør forståelse mulig, ikke et hinder for den. Den nærmeste fella er dagligtalens negative betydning, altså noe som må ryddes bort før arbeidet starter. Nettopp den forskjellen er det som gjør Gadamer til en motpost til historismens ideal om å legge sitt eget bort.",
    },
    {
      question: "Hva betegner horisontsammensmeltning hos Gadamer?",
      options: ["At tolkerens horisont og tekstens horisont møtes og danner en ny, utvidet forståelse", "At tolkeren gir avkall på sin egen horisont og går inn i tekstens", "At to lesere kommer fram til samme tolkning etter å ha drøftet teksten", "At tekstens opprinnelige mening kan gjenvinnes fullt ut gjennom historisk arbeid"],
      explanation: "Riktig svar er at forståelsen oppstår i møtet mellom to horisonter, og at resultatet er en ny horisont som ingen av dem hadde alene. Den nærmeste fella er å tro at tolkeren skal gi opp sin egen horisont, altså nettopp det historismens ideal ber om. For Gadamer er det uråd, og det er heller ikke ønskelig.",
    },
    {
      question: "Hva menes med virkningshistorie hos Gadamer?",
      options: ["At vi møter fortiden gjennom den virkningen den allerede har hatt på tradisjonen vi står i", "At historikeren skal undersøke hvilke følger en hendelse fikk for ettertiden", "At et verk vurderes etter hvor stor innflytelse det har hatt på senere forfattere", "At virkningen av et budskap måles ved hvordan mottakerne faktisk oppfattet det"],
      explanation: "Riktig svar er at begrepet gjelder tolkerens egen situasjon: vi er allerede formet av det vi skal forstå, og møter det aldri på bar bakke. Den nærmeste fella er å lese det som en helt vanlig undersøkelse av følger og ettervirkninger, altså som et emne blant andre. Hos Gadamer er dette derimot en betingelse for forståelsen selv.",
    },
    {
      question: "Hva sier den hermeneutiske sirkelen?",
      options: ["At delen bare forstås ut fra helheten, og helheten ut fra delene", "At forskeren gjentar undersøkelsen til resultatene blir stabile", "At enhver tolkning ender i en sirkelslutning og derfor er ugyldig", "At forståelsen går fra det enkle til det sammensatte i faste trinn"],
      explanation: "Riktig svar er at forståelse beveger seg mellom del og helhet, slik at hver ny lesning justerer begge. Den nærmeste fella er å lese sirkelen som en logisk feilslutning, men den er en beskrivelse av hvordan forståelse faktisk foregår. Det er heller ingen trinnvis vei fra enkelt til sammensatt, siden helheten er med fra første lesning.",
    },
    {
      question: "Hvordan bør en kandidat behandle spørsmålet om historismens ideal er umulig eller bare vanskelig?",
      options: ["Ved å holde spørsmålet åpent og prøve argumentene for begge svarene mot hverandre", "Ved å konkludere med at idealet er umulig, siden Gadamer har avgjort saken", "Ved å konkludere med at idealet er fullt oppnåelig når metoden følges strengt nok", "Ved å gjengi hva Gadamer og historismen mener, uten å veie dem mot hverandre"],
      explanation: "Riktig svar er at dette er en åpen drøftingsakse, og at oppgaven består i å prøve begge svarene. Et interessant tilleggsspørsmål er om et uoppnåelig ideal likevel har verdi som noe man streber mot. Den svakeste veien er ren gjengivelse av posisjonene, for da uteblir drøftingen som oppgaven ber om.",
    },
    {
      question: "En kandidat framstiller historismen som en naiv tro på at forskeren kan tømme seg for alle forutsetninger, og bruker resten av teksten på å avsløre den. Hva er problemet?",
      options: ["Kandidaten karikerer motparten, og svekker dermed sin egen drøfting", "Kandidaten bruker for mye plass på Gadamer og for lite på historismen selv", "Kandidaten blander sammen historisme og historisisme i framstillingen", "Kandidaten mangler henvisninger til pensum i den delen av teksten"],
      explanation: "Riktig svar er at en karikert motpart gir en billig seier: innvendingen rammer ikke det historismen faktisk hevdet. Historismen var et alvorlig ment program med reelle gevinster, og innvendingen fra Gadamer blir først interessant når programmet er gjengitt i sin sterkeste form. Den nærmeste fella er å tro at problemet er skjev fordeling av plass, men feilen ligger i framstillingen av motparten.",
    },
    {
      question: "Hva vant historiefaget på historismens program?",
      options: ["Et strengt arbeid med kildene og en vilje til å ta fremmede epoker på alvor på deres egne vilkår", "En matematisk modell for historisk utvikling som lot seg etterprøve med tall og statistiske metoder", "En forklaring på hvorfor alle epoker deler de samme grunnverdiene", "En metode for å rangere epokene etter hvor langt de var kommet"],
      explanation: "Riktig svar er at programmet gav faget en kildenær og disiplinert arbeidsmåte, og at fremmede epoker ble tatt på alvor i stedet for målt mot samtidens normer. De øvrige svarene beskriver ambisjoner historismen nettopp vendte seg bort fra, som rangering av epoker etter utviklingstrinn. Gevinstene er verdt å ha med selv i en drøfting som ender i kritikk av idealet.",
    },
    {
      question: "Hva var historismens ideal først og fremst et svar på?",
      options: ["På opplysningstidens tanke om at alle tider kan måles mot én felles fornuftsmålestokk", "På kravet fra 1900-tallets samfunnsvitenskap om statistiske og sammenlignende metoder i historiefaget", "På renessansens gjenoppdagelse av antikkens tekster og klassiske språk", "På arkeologiens krav om at materielle funn skal veie tyngre enn skriftlige kilder"],
      explanation: "Riktig svar er at historismen svarer på opplysningstidens universelle målestokk ved å hevde at hver tid må måles med sin egen. Den nærmeste fella er å plassere svaret i forhold til 1900-tallets metodekrav, altså å snu tidsrekkefølgen. En framstilling som ikke sier hva idealet var et svar på, blir hengende i løse luften.",
    },
    {
      question: "En kandidat skriver at 1800-tallets historikere «var preget av historisme», og går videre uten mer. Hva er problemet?",
      options: ["Historisme brukes som etikett uten at innholdet i idealet blir gjort rede for", "Påstanden er kronologisk feil, siden historismen hører hjemme på 1900-tallet", "Kandidaten burde ha skrevet historisisme i stedet for historisme her", "Kandidaten mangler et eksempel fra en nasjonal historisk skole"],
      explanation: "Riktig svar er at begrepet står som en merkelapp: leseren får ikke vite hva idealet krevde eller hva det var et svar på. Den nærmeste fella er å savne et konkret eksempel, som ville hjulpet, men som ikke er kjernen i svakheten. Uten innholdet i begrepet blir plasseringen på 1800-tallet en opplysning uten faglig verdi.",
    },
    {
      question: "«Hver epoke har sin egen verdi og må måles med sin egen målestokk.» Hvilket trinn i sjutrinnsrekka hører utsagnet hjemme i?",
      options: ["Romantikken og historismen", "Opplysningstiden på 1700-tallet", "Renessansen", "Tiden etter 1970"],
      explanation: "Riktig svar er romantikken og historismen, der nettopp denne tanken blir et forskningsprogram. Den nærmeste fella er tiden etter 1970, som også setter spørsmålstegn ved universelle målestokker, men da ut fra en annen begrunnelse om perspektiv og posisjon. Opplysningstiden står for det motsatte, siden den måler alle tider mot én felles fornuft.",
    },
    {
      question: "Hvilken avsender bærer begrepet virkningshistorie?",
      options: ["Gadamer", "Sandmo, «Tid for historie»", "Olsen om arkeologisk teori", "Jordheim m.fl., «Humaniora»"],
      explanation: "Riktig svar er Gadamer, som knytter virkningshistorie til den hermeneutiske sirkelen, fordommen og horisontsammensmeltningen. Den nærmeste fella er Sandmo, som skriver om hvordan synet på fortiden har endret seg, men uten å eie dette begrepet. Olsen står for arkeologisk teori, og Jordheim m.fl. for emnets brede framstilling av humaniora.",
    },
    {
      question: "Hvor ofte er hermeneutikk tema i oppgavetekstene i arkivet?",
      options: ["Hermeneutikk står 2 av 6 terminer", "Hermeneutikk står i hver enkelt av de 6 terminene", "Hermeneutikk står bare i 1 termin, den med mappeinnlevering", "Hermeneutikk står ikke i noen av de 6 terminene"],
      explanation: "Riktig svar er at hermeneutikk står 2 av 6 terminer. Fella er å slutte fra at Gadamer er tungt til stede i pensum, til at emnet må gå igjen hver gang. Temaet er godt belagt uten å være et fast innslag, og det bør vurderes på linje med de andre sentrale temaene.",
    },
  ],
  'exfac03-hark-4-3': [
    {
      question: "Hva menes med hermeneutikk forstått som tradisjon?",
      options: ["En sammenhengende linje av tolkningspraksis som løper fra tekstutlegning og framover", "En påstand om hva forståelse er når et menneske møter noe det ikke uten videre skjønner", "En framgangsmåte man kan følge trinn for trinn i arbeidet med en kilde", "Et krav om at tolkningen skal bygge på tekstens eldste og mest opprinnelige ordlyd"],
      explanation: "Riktig svar er at tradisjonsbetydningen peker på selve praksislinja: mennesker har lagt ut tekster, og de har fortsatt å gjøre det gjennom lange perioder. Den dyreste fella er å bytte tradisjonen ut med teoribetydningen, som ikke handler om en praksis gjennom tid, men om en påstand om hva forståelse er. De to øvrige forveksler tradisjonen med en framgangsmåte og med et filologisk krav om opprinnelig ordlyd.",
    },
    {
      question: "Hva vil det si at hermeneutikk er en teori?",
      options: ["At den framsetter en påstand om hva forståelse i det hele tatt er", "At den beskriver en linje av tolkningspraksis som strekker seg gjennom flere perioder", "At den gir en framgangsmåte som kan følges skritt for skritt i møte med en tekst", "At den fastslår hvilke tekster som fortjener å bli tolket"],
      explanation: "Riktig svar er at teoribetydningen er en påstand om forståelsens natur, altså om hva som skjer når noe blir forstått. Fella ligger tett på: å beskrive en praksislinje gjennom tid er tradisjonsbetydningen, ikke teorien. Å gi en framgangsmåte er metodebetydningen, og et utvalg av verdige tekster er ikke noen av de tre.",
    },
    {
      question: "Hva vil det si at hermeneutikk er en metode?",
      options: ["At den gir en framgangsmåte man kan følge i arbeidet med et materiale", "At den framsetter en påstand om hva forståelse er for et menneske som tolker", "At den utgjør en linje av tolkningspraksis fra tekstutlegning og framover i tid", "At den avgjør hvilke slutninger som er logisk gyldige"],
      explanation: "Riktig svar er at metodebetydningen handler om noe man kan følge: en framgangsmåte i møtet med et materiale. Den nærmeste fella er teoribetydningen, som ligner fordi den også sier noe allment om forståelse, men som er en påstand og ikke en oppskrift. Å avgjøre gyldige slutninger fra premisser hører til logikken og er noe annet enn hermeneutikk.",
    },
    {
      question: "En kandidat skriver at hermeneutikk rett og slett er en metode for å tolke tekster. Hva er problemet med den formuleringen?",
      options: ["Den fanger bare én av tre betydninger og lukker både tradisjons- og teorisiden", "Den er feil fordi hermeneutikken aldri har vært brukt som framgangsmåte i praktisk tolkningsarbeid", "Den er feil fordi metodebegrepet i humaniora bare kan brukes om kvantitative framgangsmåter", "Den er feil fordi tolkning av tekster hører til litteraturvitenskapen"],
      explanation: "Riktig svar er at formuleringen ikke er usann, bare for trang: metodebetydningen finnes, men den er én av tre, og kandidaten mister både tradisjonen og teorien. Nettopp derfor er den nærmeste fella å tro at påstanden må avvises som direkte gal. Boka regner denne innsnevringen som en typisk feil fordi den gjør hermeneutikken til et verktøy og fjerner påstanden om hva forståelse er.",
    },
    {
      question: "Hva sier den hermeneutiske sirkelen?",
      options: ["At delen forstås ut fra helheten og helheten ut fra delene", "At forståelsen vokser jevnt så lenge man leser materialet i riktig kronologisk rekkefølge", "At en tolkning må prøves mot en uavhengig kilde før den kan regnes som holdbar", "At man må kjenne helheten fullt ut før man i det hele tatt kan begynne på delene"],
      explanation: "Riktig svar er at sirkelen beskriver en gjensidighet: delen får mening av helheten, og helheten får mening av delene. Den nærmeste fella krever at helheten skal være kjent først, og gjør dermed bevegelsen enveis i stedet for gjensidig. Kravet om prøving mot en uavhengig kilde hører til kildekritikken og sier ingenting om forholdet mellom del og helhet.",
    },
    {
      question: "Hvorfor er den hermeneutiske sirkelen noe annet enn en sirkelslutning?",
      options: ["Den beskriver en bevegelse som gjør forståelsen rikere, ikke et resonnement som forutsetter det det skal vise", "Den er et gyldig resonnement fordi premissene bare gjentas én eneste gang før konklusjonen trekkes", "Den unngår problemet ved at fortolkeren bytter ut helheten med en helt annen helhet underveis", "Den er strengt tatt et logisk feilgrep, men et som faget har akseptert av rent praktiske grunner"],
      explanation: "Riktig svar er at sirkelen ikke er en slutningsform i det hele tatt, men en beskrivelse av hvordan forståelse beveger seg mellom del og helhet og blir rikere for hver runde. Den nærmeste fella innrømmer at det er et logisk feilgrep og redder det med praktiske hensyn, og godtar dermed premisset om at de to sirklene er samme sak. En sirkelslutning forutsetter det den skal vise; den hermeneutiske sirkelen endrer det den begynte med.",
    },
    {
      question: "Hva er hovedforskjellen mellom å tolke og å forklare?",
      options: ["Tolkning søker meningen i noe, mens forklaring søker årsaken til noe", "Tolkning bygger på skriftlige kilder, mens forklaring bygger på materielle levninger fra fortiden", "Tolkning hører til de siste tiårene, mens forklaring har vært idealet helt siden opplysningstiden", "Tolkning gir sannsynlige svar, mens forklaring alltid gir sikre og fullt etterprøvbare svar"],
      explanation: "Riktig svar er at de to ordene svarer på hvert sitt spørsmål: hva noe betyr, og hvorfor noe skjedde. Den nærmeste fella flytter skillet over på materialet, som om skrift skulle tolkes og gjenstander forklares, men både tekster og gjenstander kan møtes med begge spørsmålene. Å gjøre forklaring til garantert sikker kunnskap overdriver dessuten forskjellen mellom dem.",
    },
    {
      question: "Hva kjennetegner nærlesning som arbeidsform?",
      options: ["At man går tett på den enkelte teksten og lar detaljene i den bære tolkningen", "At man leser store mengder tekst raskt for å finne mønstre som går på tvers av materialet", "At man leser teksten sammen med samtidens øvrige kilder for å fastslå hendelsesforløpet", "At man leser teksten flere ganger for å finne den opprinnelige ordlyden"],
      explanation: "Riktig svar er at nærlesning er å arbeide tett på den enkelte teksten, slik at ordvalg, oppbygning og detaljer får bære tolkningen. Den nærmeste fella beskriver den motsatte arbeidsformen, der store mengder tekst leses på avstand for å finne mønstre. De to andre blander nærlesning sammen med kildekritisk sammenstilling og med tekstkritisk arbeid.",
    },
    {
      question: "Hva er kontrastbegrepet til nærlesning?",
      options: ["Fjernlesning, som boka kommer tilbake til senere", "Kildekritikk, som prøver den enkelte teksten mot andre vitnesbyrd om samme sak", "Forklaring, som setter en hendelse inn i en kjede av årsaker og virkninger", "Redegjørelse, som gjengir innholdet i teksten uten å ta stilling til noe av det"],
      explanation: "Riktig svar er at fjernlesning er motstykket: der nærlesningen går tett på den ene teksten, ser fjernlesningen på mange tekster på avstand. Den nærmeste fella er kildekritikken, som også innebærer å løfte blikket fra den ene teksten, men som gjør det for å prøve holdbarheten, ikke for å skifte leseavstand. Forklaring og redegjørelse er noe helt annet enn måter å lese på.",
    },
    {
      question: "Hva slår H2022-veiledningen fast om bruken av hermeneutikk?",
      options: ["At studentene skal bruke hermeneutikk aktivt som begrep og vise at de har forstått hva det innebærer", "At studentene skal gjøre rede for hermeneutikkens historie fra antikken og fram til vår egen tid", "At studentene skal velge mellom en hermeneutisk og en forklarende tilnærming før de begynner", "At studentene skal knytte hermeneutikken til minst ett av de øvrige bidragene i pensum"],
      explanation: "Riktig svar er at veiledningen legger vekt på aktiv bruk: begrepet skal settes i arbeid, og forståelsen skal vises. Den nærmeste fella er kravet om en historisk gjennomgang, som er fristende fordi hermeneutikken har en lang tradisjon, men en oversikt er ikke det samme som aktiv bruk. De to andre finner opp krav om valg av tilnærming og om kobling til andre bidrag.",
    },
    {
      question: "Hva er poenget med setningen «Et begrep du bare nevner, har du ikke brukt»?",
      options: ["At et fagbegrep først teller når det gjør arbeid i analysen", "At et fagbegrep bør defineres første gang det opptrer", "At man bør bruke færre fagbegreper og heller forklare dem med dagligdagse ord", "At et fagbegrep må knyttes til den forfatteren som opprinnelig tok det i bruk"],
      explanation: "Riktig svar er at begrepet må gjøre noe i teksten: det skal endre hvordan materialet blir lest og hva som blir sett. Den nærmeste fella er kravet om en presis definisjon, som er god skikk, men som fortsatt bare er å nevne begrepet. Å bytte fagbegrepene ut med dagligord eller å oppgi opphavsmannen løser heller ikke problemet.",
    },
    {
      question: "En kandidat innleder med at oppgaven skal ha «en hermeneutisk tilnærming», og nevner så aldri hermeneutikk igjen. Hvilken feil er dette?",
      options: ["Å bruke et fagbegrep som etikett uten å aktivere det i analysen", "Å la redegjørelsen for et begrep ta så stor plass at drøftingen forsvinner helt", "Å behandle hermeneutikken som om den bare var en metode blant flere mulige", "Å hevde noe om et bidrag i pensum uten å vise til det"],
      explanation: "Riktig svar er at begrepet blir hengt på som en merkelapp uten å bli satt i arbeid, og det er nettopp den feilen dette kapitlet advarer mest mot. Den nærmeste fella er den motsatte overdrivelsen, der redegjørelsen sluker oppgaven; her er problemet at det ikke står noe om hermeneutikk i det hele tatt etter innledningen. Å snevre begrepet inn til en metode er også en kjent feil, men kandidaten sier ingenting om hva tilnærmingen består i.",
    },
    {
      question: "En kandidat bruker mesteparten av oppgaven på å gjøre rede for hermeneutikkens tre betydninger. Hva er problemet?",
      options: ["Redegjørelsen spiser oppgaven, slik at spørsmålet som faktisk er stilt, blir stående ubesvart", "Tredelingen er ikke pensum, og kandidaten bygger derfor på noe som ikke hører til emnet", "Tredelingen skulle bare vært brukt om Gadamer, og ikke om hermeneutikken som helhet", "Redegjørelsen er overflødig, fordi sensor kjenner stoffet og bare vurderer det selvstendige"],
      explanation: "Riktig svar er at redegjørelsen tar plassen fra drøftingen, slik at oppgaven aldri får svar. Den nærmeste fella er å tro at redegjørelse i seg selv er uønsket; en kort framstilling av de tre betydningene er tvert imot nyttig så lenge den tjener spørsmålet. Tredelingen er dessuten en del av emnets stoff og gjelder hermeneutikken som helhet.",
    },
    {
      question: "Boka spør om en hermeneutisk tilnærming har preget humanistisk forskning helt siden antikken, eller om hermeneutikken er en moderne konstruksjon vi leser bakover. Hva er den gode håndteringen?",
      options: ["Å vise at begge lesningene lar seg forsvare, og å argumentere for sin egen med belegg", "Å slå fast at kontinuiteten fra antikken er den holdbare lesningen, siden tekstutlegning er svært gammelt", "Å slå fast at hermeneutikken er en moderne konstruksjon, siden begrepet først får sin plass sent", "Å la spørsmålet ligge, siden det uansett ikke lar seg avgjøre"],
      explanation: "Riktig svar er at spørsmålet er en reell drøftingsakse: begge lesningene har gode grunner for seg, og oppgaven er å veie dem og velge med belegg. De to fellene som lukker spørsmålet, er farlige nettopp fordi hver av dem har et poeng — tekstutlegning er gammel, og selve begrepsapparatet er sent — men et poeng er ikke det samme som en avgjørelse. Å la spørsmålet ligge er heller ikke en drøfting, bare en unnvikelse.",
    },
    {
      question: "Hvilket empiriske grunnlag gir boka for å prioritere hermeneutikk?",
      options: ["At hermeneutikk står 2 av 6 terminer i det materialet boka bygger på", "At hermeneutikk er det eneste begrepet som går igjen i hver av sensorveiledningene i materialet", "At hermeneutikk er det begrepet kandidatene erfaringsmessig svarer dårligst på i dette emnet", "At hermeneutikk er det begrepet hovedboka bruker mest plass på å presentere for leseren"],
      explanation: "Riktig svar er at hermeneutikk står 2 av 6 terminer, og det er den frekvensopplysningen boka faktisk gir. Den nærmeste fella gjør en delvis forekomst om til en fullstendig, som om begrepet skulle finnes overalt i materialet. De to andre bytter ut belegget med påstander om hvor godt kandidatene svarer og hvor mye plass hovedboka bruker.",
    },
    {
      question: "Hvordan grupperer boka historismen i periodeapparatet sitt?",
      options: ["Sammen med romantikken, som én felles periode", "Sammen med opplysningstiden, i én periode", "Som en egen periode plassert mellom opplysningstiden og 1900-tallet", "Som en del av 1900-tallet, sammen med de nyere retningene i faget"],
      explanation: "Riktig svar er at boka setter romantikken og historismen sammen i én periode. Den nærmeste fella plasserer historismen som en egen rad mellom opplysningstiden og 1900-tallet, hvilket stemmer i tid, men ikke med inndelingen boka bruker. Å knytte historismen til opplysningstiden eller til 1900-tallet bryter både med tid og med inndeling.",
    },
    {
      question: "Hvilket bidrag i pensumapparatet er emnets hovedbok og bærer framstillingen av hermeneutikk som tradisjon, teori og metode?",
      options: ["Jordheim med flere, «Humaniora»", "Sandmo, «Tid for historie», som er emnets framstilling av historiefaget", "Gadamer, som er den navngitte filosofen i pensumapparatet for dette emnet", "Olsens bidrag om arkeologisk teori, som er oppført uten tittel i apparatet"],
      explanation: "Riktig svar er at «Humaniora» av Jordheim med flere er hovedboka, og det er der tredelingen i tradisjon, teori og metode hører hjemme. Den nærmeste fella er Gadamer, som er den avsenderen studenter oftest knytter til hermeneutikk, men Gadamer bærer begrepsapparatet i det neste kapitlet, ikke selve tredelingen. Sandmo og Olsen står for henholdsvis historiefaget og arkeologisk teori.",
    },
    {
      question: "Hva er riktig å si om tittelen på Olsens bidrag i pensumapparatet?",
      options: ["Den er ikke oppgitt, og bidraget skal derfor omtales som arkeologisk teori uten tittel", "Den er oppgitt sammen med de øvrige titlene, og skal gjengis nøyaktig i litteraturlista", "Den er den samme som hovedbokas, siden bidraget står som et kapittel inne i den", "Den er utelatt fordi bidraget er valgfritt lesestoff og ikke hører til kjernepensum"],
      explanation: "Riktig svar er at tittelen ikke er oppgitt noe sted, og da er den ærlige løsningen å omtale bidraget som arkeologisk teori uten å navngi et verk. Den nærmeste fella er å anta at tittelen finnes og bare må slås opp, og det er nettopp den antakelsen som frister til å finne på en tittel. En manglende tittel sier heller ingenting om at bidraget skulle være valgfritt.",
    },
    {
      question: "Hvilken formulering viser at kandidaten anvender den hermeneutiske sirkelen og ikke bare nevner den?",
      options: ["«Da jeg leste brevet på nytt i lys av hele samlingen, endret det seg, og samlingen endret seg med det»", "«Jeg bruker den hermeneutiske sirkelen som overordnet perspektiv gjennom hele denne besvarelsen»", "«Den hermeneutiske sirkelen sier at delen forstås ut fra helheten og helheten ut fra delene»", "«Den hermeneutiske sirkelen er et sentralt begrep i hermeneutikken både som tradisjon og som teori»"],
      explanation: "Riktig svar er den formuleringen der bevegelsen mellom del og helhet faktisk skjer på et materiale, og der leseren kan se at forståelsen endret seg. Den nærmeste fella er den korrekte definisjonen: den er riktig, men den gjør ikke noe arbeid i analysen. Å erklære et perspektiv eller å kalle begrepet sentralt er å nevne det, ikke å bruke det.",
    },
    {
      question: "En kandidat skriver at forklaring hører hjemme i naturvitenskapen og ikke har noen plass i humaniora. Hva er problemet?",
      options: ["Skillet mellom tolkning og forklaring er et skille mellom to spørsmål, ikke en utestengelse av det ene", "Skillet gjelder bare arkeologien, som arbeider med materiale og derfor er henvist til å forklare", "Skillet ble oppgitt på 1900-tallet, og faget bruker i dag bare det ene av de to ordene", "Skillet går mellom skriftlige og materielle kilder, og ikke mellom to slags spørsmål"],
      explanation: "Riktig svar er at skillet handler om hva man spør om, ikke om hvilke fag som får lov til å spørre; humanistiske fag stiller også årsaksspørsmål. Den nærmeste fella flytter skillet over på kildetypen, slik at gjenstander skulle forklares og tekster tolkes, men begge spørsmålene kan stilles til begge slags materiale. Skillet er heller ikke opphevet, det er et arbeidsskille faget fortsatt bruker.",
    },
    {
      question: "Hvordan virker den hermeneutiske sirkelen i praktisk arbeid med et kildemateriale?",
      options: ["Man justerer forståelsen av delen og av helheten vekselvis, og begge endres underveis", "Man fastsetter helheten først og holder den fast mens de enkelte delene plasseres inn i den", "Man arbeider seg gjennom delene i tur og orden og summerer dem til slutt til en helhet", "Man prøver tolkningen mot en uavhengig kilde og gjentar prøven helt til den holder"],
      explanation: "Riktig svar er at arbeidet går fram og tilbake: en ny detalj endrer bildet av helheten, og det endrede bildet gjør at detaljene leses på nytt. Den nærmeste fella lar delene summeres til en helhet, hvilket ligner, men gjør bevegelsen enveis og fjerner at helheten virker tilbake på delene. Å holde helheten fast eller å prøve mot en uavhengig kilde beskriver andre arbeidsmåter enn sirkelen.",
    },
    {
      question: "Hvilken rekke av perioder bruker boka når den følger hermeneutikken gjennom tid?",
      options: ["Antikken, middelalderen, renessansen, opplysningstiden, romantikken og historismen, 1900-tallet og tiden etter 1970", "Antikken, middelalderen, renessansen, den vitenskapelige revolusjonen, industrialiseringen, mellomkrigstiden og etterkrigstiden", "Middelalderen, renessansen, barokken, opplysningstiden, romantikken, modernismen og tiden etter den andre verdenskrigen", "Antikken, senantikken, middelalderen, tidlig nytid, det lange 1800-tallet og det korte 1900-tallet"],
      explanation: "Riktig svar er den rekken som går fra antikken via renessansen og opplysningstiden til romantikken og historismen, 1900-tallet og tiden etter 1970. Den nærmeste fella bytter ut de midterste leddene med den vitenskapelige revolusjonen og industrialiseringen, som er gangbare periodenavn, men ikke de boka bruker. De to andre setter inn epokenavn fra litteraturhistorien og fra en annen historisk inndeling.",
    },
    {
      question: "Hvilke navn i pensumapparatet står for den tidligste historieskrivingen?",
      options: ["Herodot og Thukydid", "Platon og Descartes, som er de to filosofene apparatet trekker fram", "Hölling og Ingvarsson, som er blant de nyere bidragene i apparatet", "Sandmo og Olsen, som står for historiefaget og arkeologien i apparatet"],
      explanation: "Riktig svar er Herodot og Thukydid, de to greske historieskriverne apparatet fører opp. Den nærmeste fella er Platon og Descartes, som også er antikke eller klassiske navn i apparatet, men som står for filosofien og ikke for historieskrivingen. Sandmo og Olsen er nålevende fagframstillinger, og Hölling og Ingvarsson hører til de nyere bidragene.",
    },
    {
      question: "En kandidat hevder at hermeneutikken ble oppfunnet på 1900-tallet, og at alt tidligere tolkningsarbeid er uten betydning for emnet. Hva er problemet?",
      options: ["Påstanden lukker en åpen drøfting og ser bort fra tolkningspraksisen som ligger forut", "Påstanden er riktig i tid, men kandidaten mangler belegg fra sensorveiledningene i materialet", "Påstanden er riktig, men kandidaten burde heller ha sagt at hermeneutikken bare er en metode", "Påstanden strider mot at hermeneutikken bare er en tradisjon"],
      explanation: "Riktig svar er at kandidaten avgjør et spørsmål boka holder åpent, og i tillegg stryker den lange linja av tolkningspraksis som argumentet på den andre siden bygger på. Den nærmeste fella godtar tidfestingen og etterlyser bare belegg, men problemet er ikke manglende henvisning, det er at drøftingen blir borte. At hermeneutikken bare skulle være metode eller bare tradisjon, er i seg selv innsnevringer boka advarer mot.",
    },
  ],
  'exfac03-hark-4-4': [
    {
      question: "Hva betyr «fordom» hos Gadamer?",
      options: ["Den forforståelsen som gjør at teksten i det hele tatt sier oss noe", "Den feilkilden fortolkeren må arbeide seg fri fra før tolkningen kan begynne", "Den nedarvede meningen om et emne som tradisjonen etter hvert har gjort til en vane", "Den urettferdige holdningen til en gruppe mennesker"],
      explanation: "Riktig svar er at fordommen er den forforståelsen som gjør møtet med teksten mulig, altså en positiv veiviser og ikke en svakhet. Den nærmeste fella er dagligspråkets bruk, der en fordom er noe man må rydde bort på forhånd; leser man Gadamer slik, velter hele analysen. Fordommen er heller ikke det samme som en urettferdig holdning til en gruppe, selv om ordet brukes slik utenfor faget.",
    },
    {
      question: "En kandidat skriver at Gadamer ville at vi skulle legge fordommene våre til side. Hvilken feil er dette?",
      options: ["Fordommen leses i dagligspråkets betydning, og hele analysen velter med det", "Fordommen knyttes til feil avsender, siden begrepet i virkeligheten hører til historismens program", "Fordommen blandes sammen med forståelseshorisonten, som er et vesentlig videre begrep", "Fordommen behandles som en metodisk regel i stedet for som en teori om forståelse"],
      explanation: "Riktig svar er at kandidaten leser fordommen som noe negativt, og det er den enkeltfeilen som gjør mest skade i dette stoffet. Hos Gadamer er fordommene positive og virker som veivisere; uten dem ville teksten ikke sagt oss noe overhodet. Den nærmeste fella er å tro at feilen ligger i å forveksle fordom med forståelseshorisont, men de to begrepene er ikke byttet om her, betydningen av det ene er snudd på hodet.",
    },
    {
      question: "Hva er en forståelseshorisont?",
      options: ["Summen av det som er synlig fra der man står", "Alt en fortolker i prinsippet kunne komme til å vite om et emne over tid", "Den grensen faget setter for hvilke spørsmål det er meningsfullt å stille", "Den fortiden en kilde selv kjenner til"],
      explanation: "Riktig svar er at horisonten er alt som kommer til syne fra det stedet fortolkeren står, i tid og i tradisjon. Den nærmeste fella gjør horisonten til en kunnskapsmengde man kan bygge ut, men poenget er ikke hvor mye man vet, det er hva som i det hele tatt blir synlig. Horisonten er heller ikke en regel faget vedtar eller en egenskap ved kilden.",
    },
    {
      question: "Hva skjer i en horisontsammensmeltning?",
      options: ["To horisonter møtes, og forståelsen oppstår i selve møtet mellom dem", "Fortolkeren setter sin egen horisont til side og trer inn i fortidens horisont", "Fortidens horisont blir rekonstruert så nøyaktig at nåtidens ikke lenger forstyrrer", "De to horisontene blir målt mot hverandre for at avstanden mellom dem skal kunne fastslås"],
      explanation: "Riktig svar er at forståelse skjer når to horisonter møtes, ikke når den ene byttes ut med den andre. Den nærmeste fella er nettopp overtakelsen: at fortolkeren skulle forlate sin egen horisont og gå inn i fortidens. Da forsvinner møtet, og med det forsvinner også det Gadamer mener med forståelse.",
    },
    {
      question: "Hva sikter Gadamer til med virkningshistorie?",
      options: ["At fortiden virker på vår egen tid gjennom tradisjonen, og at vi tolker fra innsiden av den virkningen", "At ettertiden feller sin dom over fortidens verk, og at denne dommen endrer seg med hver ny generasjon", "At historikeren skal kartlegge hvilke følger en hendelse fikk for de tiårene som kom etter den", "At et verk må vurderes ut fra virkningen det hadde i sin egen samtid, og ikke ut fra virkningen i vår"],
      explanation: "Riktig svar er at fortiden allerede har virket på oss gjennom tradisjonen, slik at vi står inne i virkningen når vi tolker. Den nærmeste fella er ettertidens dom: den handler også om forholdet mellom verk og senere tid, men gjør oss til dommere utenfra i stedet for deltakere innenfra. Å kartlegge følgene av en hendelse er vanlig historisk arbeid og ikke det begrepet sikter til.",
    },
    {
      question: "Hvilken bevegelse beskriver den hermeneutiske sirkelen hos Gadamer?",
      options: ["Mellom del og helhet, og mellom tekst og fortolker", "Mellom kilde og kildekritikk, helt til tolkningen er tilstrekkelig etterprøvd", "Mellom hypotese og prøving, slik framgangsmåten er i de forklarende fagene", "Mellom det skrevne og det utelatte i teksten"],
      explanation: "Riktig svar er at sirkelen hos Gadamer omfatter to bevegelser: den mellom del og helhet, og den mellom teksten og den som leser den. Den nærmeste fella nøyer seg med prøving av tolkningen mot kildene, men da faller fortolkeren ut av bildet, og nettopp fortolkerens plass i sirkelen er Gadamers tilføyelse. Hypotese og prøving hører til en annen tradisjon for kunnskap.",
    },
    {
      question: "Kapitteltittelen navngir fire begreper, men boka regner fem. Hvorfor?",
      options: ["Horisontsammensmeltningen kommer i tillegg, fordi den binder de fire andre sammen", "Fortolkerens situering kommer i tillegg, fordi den er selve grunnlaget for de fire øvrige", "Tradisjonen kommer i tillegg, fordi den er det femte av Gadamers egne kjernebegreper", "Historismen kommer i tillegg, fordi Gadamer definerer alle begrepene sine i lys av den"],
      explanation: "Riktig svar er at horisontsammensmeltningen er det femte begrepet, og at boka regner det med fordi det er der de fire andre møtes og får sin funksjon. Den nærmeste fella er fortolkerens situering, som virkelig er et sentralt begrep i kapitlet, men som boka behandler ved siden av de fem og ikke som det femte. Tradisjonen og historismen er henholdsvis en forutsetning og en motposisjon.",
    },
    {
      question: "Hva mener Gadamer om å studere fortiden på dens egne premisser?",
      options: ["At det ikke er mulig, fordi fortiden bare blir forståelig gjennom fortolkerens egen situering i tid", "At det er mulig, men bare når fortolkeren først har gjort rede for sine egne fordommer", "At det er mulig i arbeidet med skriftlige kilder, men ikke i arbeidet med materielle levninger", "At det er et ideal man aldri når helt fram til, men som fortolkeren likevel bør nærme seg mest mulig"],
      explanation: "Riktig svar er at Gadamer avviser muligheten: fortiden blir forståelig først gjennom fortolkerens situering i tid og gjennom en sammensmeltning av horisonter. Den nærmeste fella beholder idealet og gjør det til noe man nærmer seg gradvis, men det er en svakere posisjon enn Gadamers, som fjerner selve muligheten. At skillet skulle gå mellom skrift og materiale, er en tilføyelse Gadamer ikke gjør.",
    },
    {
      question: "Hvilket program står Gadamers syn på forståelse i opposisjon til?",
      options: ["Historismens ideal om å forstå fortiden på dens egne premisser", "Positivismens ideal om at all kunnskap skal kunne måles og etterprøves", "Opplysningstidens ideal om at fornuften er den samme til alle tider", "Romantikkens ideal om at hvert folk bærer sin egen indre karakter"],
      explanation: "Riktig svar er historismen, som nettopp krevde at fortiden skulle forstås på sine egne premisser; det er dette kravet Gadamer sier ikke lar seg innfri. Den nærmeste fella er opplysningstidens fornuftsideal, som Gadamer også har innvendinger mot gjennom sitt syn på fordommene, men veiledningen knytter opposisjonen uttrykkelig til historismen. Positivisme og romantikk er andre posisjoner igjen.",
    },
    {
      question: "Hvordan skal historismens ideal framstilles i en god besvarelse?",
      options: ["Som et seriøst program med ekte gevinster, ikke som en naivitet Gadamer avslører", "Som en posisjon Gadamer tilbakeviser fullstendig, slik at den ikke lenger har noen verdi", "Som en forløper for Gadamer, som viderefører det samme idealet i en mer moderne språkdrakt", "Som en rent metodisk regel uten noen påstand om hva forståelse er for noe"],
      explanation: "Riktig svar er at historismen skal framstilles rettferdig: kravet om å forstå fortiden i dens egen sammenheng var et alvorlig ment program med reelle gevinster for faget. Den nærmeste fella er å la Gadamers innvending tilintetgjøre posisjonen, men en drøfting som karikerer motparten, blir svakere, ikke sterkere. Historismen er heller ingen forløper Gadamer viderefører, og den er mer enn en teknisk regel.",
    },
    {
      question: "Hva skiller fortolkerens situering fra ren subjektivitet?",
      options: ["Situeringen er stedet i tid og tradisjon fortolkeren står på, ikke en privat smak", "Situeringen er noe fortolkeren velger selv, mens subjektiviteten er noe man arver", "Situeringen gjelder bare fortolkerens fag, mens subjektiviteten gjelder hele personen", "Situeringen lar seg måle og gjøre rede for, mens subjektiviteten er utenfor rekkevidde"],
      explanation: "Riktig svar er at situeringen er en plassering i tid og tradisjon som fortolkeren deler med andre, og altså ikke en personlig preferanse. Den nærmeste fella snur retningen og gjør situeringen til noe man velger; poenget er tvert imot at man befinner seg der uten å ha valgt det. Å redusere forskjellen til et spørsmål om målbarhet treffer heller ikke saken.",
    },
    {
      question: "Hvordan bør spørsmålet om Gadamers posisjon er en relativisme, behandles?",
      options: ["Som en åpen drøfting der innvendingen legges fram og møtes med hva Gadamer selv ville svart", "Som et avklart spørsmål, siden posisjonen åpenbart fører til at alle tolkninger blir like gyldige", "Som et avklart spørsmål, siden virkningshistorien utelukker at relativisme i det hele tatt oppstår", "Som et spørsmål utenfor emnet, siden relativisme hører hjemme i filosofien og ikke i historiefaget"],
      explanation: "Riktig svar er at dette er en drøftingsakse som skal holdes åpen: innvendingen er reell, og styrken i besvarelsen ligger i å vise hvordan Gadamer kunne svare på den. De to fellene som lukker spørsmålet, gjør det fra hver sin side, og begge sparer kandidaten for det arbeidet som gir uttelling. Å skyve spørsmålet ut av emnet er heller ingen løsning, siden det springer direkte ut av Gadamers eget syn på forståelse.",
    },
    {
      question: "Hvis fordommene er nødvendige, hvilket spørsmål reiser det?",
      options: ["Hva som da skiller en god tolkning fra en dårlig", "Om fortolkeren kan lese kilder på fremmede språk", "Hvorvidt historismen bør gjeninnføres som den eneste holdbare framgangsmåten", "Hvordan tolkningen likevel kan gjøres helt fri for fordommer i det avgjørende leddet"],
      explanation: "Riktig svar er at nødvendige fordommer straks reiser spørsmålet om kvalitet: når ingen tolkning er forutsetningsløs, må skillet mellom god og dårlig tolkning trekkes på et annet grunnlag. Den nærmeste fella prøver å redde forutsetningsløsheten ved å gjøre ett ledd fordomsfritt, og faller dermed tilbake i dagligspråkets forståelse av fordom. Historismen kan drøftes på nytt i lys av dette, men den kan ikke gjeninnføres som eneste framgangsmåte.",
    },
    {
      question: "Hva krever H2024-veiledningen av kandidaten?",
      options: ["Kjennskap til betydningen av Gadamers sentrale begreper og til hans syn på mulighetene for å forstå fortiden", "En fullstendig gjennomgang av hermeneutikkens utvikling fra antikken og fram til Gadamers egen samtid", "En sammenlikning mellom Gadamers begreper og de tilsvarende begrepene i arkeologisk teori", "En redegjørelse for hvordan Gadamers begreper er blitt tatt imot og kritisert i ettertiden"],
      explanation: "Riktig svar er at veiledningen er uvanlig konkret på to punkter: begrepenes betydning og Gadamers syn på om fortiden lar seg forstå. Den nærmeste fella er den historiske gjennomgangen, som frister fordi stoffet har en lang forhistorie, men en oversikt er ikke det samme som å kunne begrepene og posisjonen. Sammenlikning med arkeologisk teori og resepsjonshistorie er ikke det som etterspørres.",
    },
    {
      question: "Hvilken formulering viser at kandidaten anvender virkningshistorien?",
      options: ["«Grunnen til at jeg i det hele tatt finner denne kilden interessant, er at den allerede har formet faget mitt»", "«Virkningshistorien er et av Gadamers sentrale begreper, og den er viktig for hele posisjonen hans»", "«Virkningshistorien betyr at fortiden virker inn på nåtiden gjennom den tradisjonen vi står i»", "«Jeg legger et virkningshistorisk perspektiv til grunn i den drøftingen som følger nedenfor»"],
      explanation: "Riktig svar er formuleringen der begrepet forklarer noe konkret i kandidatens eget arbeid, nemlig hvorfor kilden i det hele tatt framstår som interessant. Den nærmeste fella er den korrekte definisjonen: den er sann, men den gjør ingen jobb i analysen. Å kalle begrepet sentralt eller å erklære et perspektiv er å nevne det, og et begrep du bare nevner, har du ikke brukt.",
    },
    {
      question: "En kandidat lister opp Gadamers fem begreper med korrekte definisjoner og går rett videre til neste avsnitt. Hva mangler?",
      options: ["Begrepene blir nevnt, men ikke satt i arbeid på et materiale", "Definisjonene er for knappe til at sensor kan se om stoffet er forstått", "Rekkefølgen på begrepene følger ikke den rekkefølgen boka selv bruker", "Det femte begrepet hører strengt tatt ikke til Gadamers eget apparat"],
      explanation: "Riktig svar er at definisjonene ikke får gjøre noe: begrepene står som en liste, og analysen ville sett lik ut uten dem. Den nærmeste fella er å tro at problemet er lengden på definisjonene, men en lengre liste er fortsatt en liste. Rekkefølgen er uvesentlig, og alle fem begrepene hører til apparatet.",
    },
    {
      question: "En kandidat presenterer «Gadamers hermeneutiske metode» som en oppskrift i faste trinn. Hva er galt?",
      options: ["Gadamers posisjon er en påstand om hva forståelse er, og dermed mer enn en framgangsmåte", "Gadamer beskrev framgangsmåten sin i færre trinn enn kandidaten gjengir i denne oversikten", "Gadamers framgangsmåte gjelder bare skriftlige kilder og ikke materielle levninger fra fortiden", "Gadamer regnes til historismen og hadde derfor ingen egen framgangsmåte å tilby faget"],
      explanation: "Riktig svar er at hele posisjonen er en påstand om hva forståelse er, og at den derfor ikke lar seg koke ned til trinn man følger. Nettopp fordi fortolkeren inngår direkte i prosessen og fortiden virker på oss gjennom tradisjonen, blir hermeneutikken mer enn en metode. Den nærmeste fella godtar oppskriftstanken og krangler bare om antall trinn, og går dermed glipp av innvendingen.",
    },
    {
      question: "Hva er det ved Gadamers posisjon som gjør hermeneutikken til mer enn en metode?",
      options: ["At fortolkeren selv inngår i prosessen, og at fortiden virker på nåtiden gjennom tradisjonen", "At framgangsmåten hans krever flere trinn enn de framgangsmåtene faget ellers bruker", "At begrepene hans lar seg overføre til alle fagene innenfor humaniora uten noen tilpasning", "At posisjonen bygger på kildekritikk og dermed hviler på et solid vitenskapelig grunnlag"],
      explanation: "Riktig svar er at fortolkeren ikke står utenfor det som skal forstås, og at tradisjonen allerede har virket på den som tolker; da er det ikke lenger snakk om et verktøy man tar i bruk. Den nærmeste fella blir hengende fast i metodetanken og gjør forskjellen til et spørsmål om hvor mange trinn framgangsmåten har. Rekkevidde og kildekritisk forankring er heller ikke det som løfter posisjonen ut av metodekategorien.",
    },
    {
      question: "Hva er forskjellen på «fordom» i dagligtalen og «fordom» hos Gadamer?",
      options: ["I dagligtalen er den noe man bør kvitte seg med, hos Gadamer er den en veiviser inn i teksten", "I dagligtalen gjelder den mennesker, hos Gadamer gjelder den bare skrevne tekster fra fortiden", "I dagligtalen er den ubevisst, hos Gadamer er den alltid uttalt og gjort rede for på forhånd", "I dagligtalen er den personlig, hos Gadamer er den noe faget som helhet har blitt enig om"],
      explanation: "Riktig svar er at fortegnet er snudd: det dagligtalen regner som en brist, er hos Gadamer forutsetningen for at teksten kan si oss noe. Den nærmeste fella flytter forskjellen over på bevissthet, som om Gadamers fordommer alltid skulle være uttalte; det er verken nødvendig eller mulig å ha dem alle på bordet på forhånd. Fordommene er heller ikke noe faget har vedtatt i fellesskap.",
    },
    {
      question: "Hvorfor er forståelseshorisonten noe annet enn summen av det en fortolker vet?",
      options: ["Horisonten er bestemt av hvor man står, og avgjør hva som i det hele tatt kommer til syne", "Horisonten omfatter bare det fortolkeren har lest av kilder fra den perioden det gjelder", "Horisonten er en egenskap ved teksten og ikke en egenskap ved den som leser teksten", "Horisonten endrer seg ikke gjennom livet, mens kunnskapen en fortolker har, stadig øker"],
      explanation: "Riktig svar er at horisonten handler om utsiktspunktet: den bestemmer hva som blir synlig, ikke hvor mye som er samlet opp. Den nærmeste fella gjør horisonten til en avgrenset lesemengde, og beholder dermed tanken om at horisonten er en beholdning. En horisont kan dessuten flytte seg når man selv flytter seg, den er ikke fastlåst.",
    },
    {
      question: "Hvilken plass har fortolkeren i tolkningsprosessen hos Gadamer?",
      options: ["Fortolkeren inngår direkte i prosessen, og forståelsen blir til med ham eller henne i den", "Fortolkeren skal holde seg utenfor, slik at tolkningen kan etterprøves uavhengig av personen", "Fortolkeren er et redskap som registrerer det kilden sier, og ikke noe mer enn nettopp det", "Fortolkeren står utenfor i første omgang og trer inn først når tolkningen skal vurderes"],
      explanation: "Riktig svar er at fortolkeren inngår direkte: forståelsen oppstår i møtet, ikke i et rom der fortolkeren er holdt utenfor. Den nærmeste fella er idealet om at fortolkeren skal tre til side for etterprøvbarhetens skyld, og det er et alvorlig ment krav med reelle gevinster, ikke en naiv tanke. Gadamers innvending er at kravet ikke lar seg innfri, ikke at det er dumt.",
    },
    {
      question: "Hvordan når fortiden fram til oss, ifølge Gadamer?",
      options: ["Gjennom tradisjonen, som fortiden taler til oss i og virker på vår egen tid gjennom", "Gjennom kildene, når de først er renset for senere tiders tilføyelser og feillesninger", "Gjennom fagets metoder, som er bygd nettopp for å bygge bro over avstanden i tid", "Gjennom levningene, som er de eneste sporene som ikke er formet av ettertidens interesser"],
      explanation: "Riktig svar er at fortiden taler til oss gjennom tradisjonen, og at den dermed allerede virker på den tiden vi tolker fra. Den nærmeste fella er å tro at veien går gjennom fagets metoder, som om avstanden i tid var et teknisk problem som lot seg løse med riktig verktøy. Å rense kildene for senere tilføyelser hviler på det samme håpet om en fortid uberørt av ettertiden.",
    },
    {
      question: "En kandidat skriver at forståelse oppnås ved å bytte ut sin egen horisont med fortidens. Hvilken feil er dette?",
      options: ["Sammensmeltning forveksles med overtakelse, og møtet mellom horisontene forsvinner", "Virkningshistorien forveksles med ettertidens dom over det verket som skal tolkes", "Den hermeneutiske sirkelen forveksles med en sirkelslutning i selve resonnementet", "Fordommen forveksles med en feilkilde som må ryddes bort før arbeidet begynner"],
      explanation: "Riktig svar er at kandidaten gjør sammensmeltningen om til en overtakelse: den ene horisonten erstatter den andre, og dermed er det ikke lenger noe møte. Hos Gadamer skjer forståelsen nettopp i møtet mellom fortidens og nåtidens horisonter. Den nærmeste fella peker på fordomsfeilen, som ligger tett på i tankegang, men her er det horisontbegrepet og ikke fordomsbegrepet som er misforstått.",
    },
    {
      question: "Hvorfor er ikke Gadamers hermeneutiske sirkel en sirkelslutning?",
      options: ["Den er en bevegelse som endrer forståelsen underveis, ikke et argument som forutsetter sin egen konklusjon", "Den er et argument der premissene er sanne, og derfor holder konklusjonen likevel i praksis", "Den er en sirkel bare i overført betydning og har ingen forbindelse med logikk overhodet", "Den unngår problemet fordi fortolkeren begynner helt på nytt hver gang runden er fullført"],
      explanation: "Riktig svar er at sirkelen ikke er en slutning, men en bevegelse mellom del og helhet og mellom tekst og fortolker, der forståelsen blir en annen for hver runde. Den nærmeste fella godtar at det dreier seg om et argument og prøver å redde det med sanne premisser, men da er premisset om at de to sirklene er samme sak, allerede innrømmet. At sirkelen skulle starte forfra hver gang, opphever nettopp det som gjør bevegelsen fruktbar.",
    },
    {
      question: "Hvem i pensumapparatet bærer begrepene fordom, horisont, sirkel og virkningshistorie?",
      options: ["Gadamer, som apparatet fører opp som egen avsender", "Jordheim med flere, som fører hermeneutikken som tradisjon, teori og metode", "Sandmo, som står for framstillingen av historiefaget i pensumapparatet", "Olsen, som står for arkeologisk teori"],
      explanation: "Riktig svar er Gadamer, som er den avsenderen begrepsapparatet i dette kapitlet hører til. Den nærmeste fella er Jordheim med flere, som er emnets hovedbok og bærer hermeneutikken som tradisjon, teori og metode, men ikke fordom, horisont, sirkel og virkningshistorie. Å tilskrive én avsender det en annen faktisk står for, er en feil som er lett å oppdage og dyr å begå.",
    },
    {
      question: "En kandidat slutter fra at alle tolkninger er preget av fordommer, til at alle tolkninger er like gyldige. Hva er problemet?",
      options: ["Slutningen hopper over spørsmålet om hva som skiller en god tolkning fra en dårlig", "Slutningen forutsetter uten videre at fortolkeren kan stille seg utenfor sin egen tradisjon", "Slutningen blander sammen virkningshistorien med historismens krav om full objektivitet", "Slutningen bygger på at fordommene er negative, noe Gadamer aldri selv har hevdet noe sted"],
      explanation: "Riktig svar er at kandidaten går rett fra en riktig premiss til en konklusjon som ikke følger: at ingen tolkning er forutsetningsløs, betyr ikke at alle tolkninger står likt. Nettopp her ligger den åpne drøftingen om hvorvidt posisjonen er en relativisme, og et godt svar viser hvordan Gadamer kunne møte innvendingen. Den nærmeste fella peker på fordomsforståelsen, men kandidaten har jo forstått at fordommene er allestedsnærværende, feilen ligger i selve slutningen.",
    },
  ],
  'exfac03-hark-5-1': [
    {
      question: "Hva skal til for at et område er et eget kunnskapsfelt?",
      options: ["Egne spørsmål, egne framgangsmåter som de som arbeider der er enige om å diskutere, og egne varige rammer som utdanninger, samlinger og tidsskrifter", "At det finnes et studieprogram med eksamen og en egen tittel som kandidatene får når de er ferdige", "At mange mennesker over lang tid har vært opptatt av det samme emnet og skrevet om det for et bredt publikum", "At området har et materiale ingen andre arbeider på, slik at ingen nabofag kan gjøre krav på det samme"],
      explanation: "Alle tre delene må være på plass: spørsmålene, framgangsmåtene og rammene. Studieprogrammet er bare den institusjonelle formen faget tar, og fanger derfor for lite; vedvarende interesse er et tema og ikke et felt; og et eget materiale er verken nødvendig eller tilstrekkelig, siden flere fag kan arbeide på samme gjenstandsfelt.",
    },
    {
      question: "Hva er forskjellen på et kunnskapsfelt og et tema?",
      options: ["Temaet er noe man kan skrive om, mens kunnskapsfeltet er ordningen som gjør at noen fortsetter å skrive om det og at arbeidet blir vurdert av andre", "Temaet gjelder ett bestemt materiale, mens kunnskapsfeltet gjelder flere ulike materialtyper samlet under én overskrift", "Temaet hører hjemme i undervisningen, mens kunnskapsfeltet hører hjemme i forskningen ved universitetene og de vitenskapelige samlingene", "Temaet er avgrenset i tid, mens kunnskapsfeltet strekker seg gjennom flere perioder og kan ikke dateres på samme måte"],
      explanation: "Skillet ligger i varigheten og i vurderingen: et felt har rammer som holder arbeidet i gang og et fellesskap som prøver påstandene. De tre andre svarene beskriver ulike former for bredde eller plassering, men bredde alene gjør ikke et tema om til et felt.",
    },
    {
      question: "Hva menes med vitenskapeliggjøring av et fag?",
      options: ["At faget henter idealer og framgangsmåter fra et felt med høyere status og bygger rammer som ligner det feltets", "At faget slutter å tolke materialet sitt og i stedet begrenser seg til å beskrive det som lar seg måle og telle presist", "At faget får sine egne professorater, sine egne tidsskrifter og sin egen plass i universitetets inndeling av fagene", "At faget blir enig om ett sett metoder som alle i faget bruker, slik at uenighet om framgangsmåte forsvinner helt"],
      explanation: "Kjernen er importen av ideal og metode fra et felt med høyere status. At faget får professorater og tidsskrifter er institusjonalisering, som ofte skjer samtidig, men som ikke er det samme; og vitenskapeliggjøring innebærer verken at all tolkning opphører eller at uenigheten om metode forsvinner.",
    },
    {
      question: "Hvorfor sier boka at et vitenskapelig ideal er noe et fag velger?",
      options: ["Fordi materialet ikke bestemmer hva som skal telle som god kunnskap, slik at to fag med nesten samme materiale kan velge ulike idealer", "Fordi hvert enkelt forskningsmiljø må stemme over hvilket ideal som skal gjelde før det kan begynne å arbeide systematisk", "Fordi idealet alltid hentes fra et annet felt, og fag som ikke har noe å hente fra, ikke får noe ideal i det hele tatt", "Fordi idealet skifter hver gang faget tar i bruk en ny metode, og derfor er et valg som gjentas ved hvert metodeskifte"],
      explanation: "Poenget er at idealet ikke følger av materialet: arkeologien kunne i prinsippet valgt et tolkende ideal og valgte et ordnende. Idealet skifter dessuten ikke automatisk med metoden, og valget er en historisk utvikling i faget, ikke en avstemning.",
    },
    {
      question: "Hva betyr erkjennelsesteori i den enkle formen denne oppgavetypen bruker begrepet?",
      options: ["Hva slags kunnskap faget mener det kan skaffe seg", "Hvilke framgangsmåter faget har blitt enige om at det er forsvarlig å bruke på materialet sitt", "Hvilken teori faget bruker når det skal forklare hvorfor en bestemt historisk hendelse fikk det utfallet den fikk", "Hvordan faget begrunner sin egen plass i universitetets inndeling mellom humaniora og naturvitenskapene"],
      explanation: "Erkjennelsesteorien svarer på hva vi kan vite, mens framgangsmåtene er metode. Forklaringen av en enkelthendelse er et faglig resultat og ikke en erkjennelsesteori, og fagets plassering i universitetsinndelingen er en institusjonell sak.",
    },
    {
      question: "Hva er forskjellen på en erkjennelsesmessig og en metodisk konsekvens av at en faggrense trekkes?",
      options: ["Den erkjennelsesmessige gjelder hva faget mener det kan vite, den metodiske hvilke framgangsmåter faget tillater seg", "Den erkjennelsesmessige gjelder teorien og den metodiske praksisen, slik at bare den siste får følger for hvordan arbeidet faktisk foregår", "Den erkjennelsesmessige gjelder forholdet til nabofagene, mens den metodiske gjelder forholdet mellom forskeren og materialet i det enkelte prosjektet", "Den erkjennelsesmessige er en følge på lang sikt, mens den metodiske viser seg med én gang grensen er trukket og et fag har fått sitt eget navn"],
      explanation: "Skillet går mellom «hva kan vi vite?» og «hvordan går vi fram?», og det er verdt å holde skarpt fordi de to kan gå i utakt: et fag kan beholde metodene lenge etter at troen på hva de gir, er borte. Skillet handler verken om teori mot praksis, om nabofag eller om tidshorisont.",
    },
    {
      question: "Hva er de-kontekstualisering?",
      options: ["At et objekt løsrives fra sammenhengen det sto i, for at det skal kunne behandles med presise og sammenlignbare framgangsmåter", "At et objekt blir skadet eller ødelagt under utgraving, transport eller behandling, slik at deler av informasjonen i det går tapt for godt", "At et objekt blir tolket ut fra vår egen tids forventninger i stedet for ut fra forholdene det ble laget under og brukt i", "At et objekt flyttes fra en samling til en annen uten at papirene på hvem som eide det tidligere, følger med flyttingen"],
      explanation: "Kjernen er løsrivelsen fra sammenhengen, gjort for å vinne presisjon — ikke fysisk skade, ikke anakronistisk tolkning og ikke tapte eierpapirer, som er proveniensproblemet. At objektet blir stående uskadd, er nettopp derfor «tap» bare er halve beskrivelsen.",
    },
    {
      question: "Hvorfor sier boka at de-kontekstualisering ikke bare er et tap?",
      options: ["Fordi løsrivelsen kjøper sammenlignbarhet og etterprøvbarhet, slik at kunnskapen blir noe faget eier i fellesskap i stedet for noe den ene som var til stede vet", "Fordi den konteksten som forsvinner, i praksis kan gjenskapes fra dokumentasjonen når objektet først er kommet inn i en samling med gode rutiner", "Fordi objektet fysisk sett er like helt etter flyttingen som før, og fagene derfor ikke har mistet noe som ikke kan hentes inn igjen senere", "Fordi tapet bare rammer den enkelte gjenstanden og ikke det samlede materialet faget arbeider med over tid"],
      explanation: "Gevinsten er presisjon og felles kunnskap, og den er forutsetningen for at påstander kan prøves av andre. Konteksten kan derimot ikke gjenskapes — bare erstattes av en ny sammenheng bygget av det som faktisk ble registrert — og tapet rammer hele materialet, ikke bare den ene gjenstanden.",
    },
    {
      question: "Hva gjør meningstapet ved de-kontekstualisering særlig alvorlig?",
      options: ["At det er usynlig i resultatet: en utfylt katalogpost ser like fullstendig ut enten opplysningene finnes eller ikke", "At det rammer de eldste gjenstandene hardest, siden det er de som har vært flyttet flest ganger mellom eiere og samlinger", "At det gjør gjenstanden umulig å datere, siden datering krever kjennskap til laget den lå i", "At det oppstår gradvis over tid i magasinet, slik at ingen enkeltperson kan holdes ansvarlig for at opplysningene forsvant"],
      explanation: "Alvoret ligger i usynligheten: et skjema uten rubrikk melder ikke fra om at rubrikken mangler, så tapet er tapet av spørsmål man ikke lenger vet at kunne vært stilt. Datering er ofte fortsatt mulig på grunnlag av gjenstanden selv, og problemet er strukturelt og ikke knyttet til alder eller til hvem som fylte ut skjemaet.",
    },
    {
      question: "Hva er funnkontekst?",
      options: ["Den konkrete sammenhengen en gjenstand ble funnet i: dybden, laget og forholdet til andre spor og gjenstander på stedet", "Stedet der gjenstanden ble funnet, oppgitt som en plassering på kartet med en beskrivelse av landskapet og terrenget omkring", "Kjeden av eiere gjenstanden har hatt fra den ble funnet og fram til den kom inn i den samlingen den ligger i nå", "Den tidsperioden gjenstanden hører hjemme i, fastsatt ved å sammenligne formen med andre gjenstander av samme type"],
      explanation: "Funnkonteksten er relasjonene på stedet, ikke punktet på kartet — det er funnstedet. Eierkjeden er proveniens, og en datering ved formsammenligning er typologi. Poenget med funnkonteksten er at den forsvinner i samme handling som avdekker gjenstanden.",
    },
    {
      question: "Hva er forskjellen på proveniens og funnkontekst?",
      options: ["Proveniensen gjelder veien fra funn til i dag, mens funnkonteksten gjelder situasjonen i bakken eller på stedet", "Proveniensen gjelder gjenstander fra utgravinger, mens funnkonteksten gjelder gjenstander som er levert inn av privatpersoner uten dokumentasjon", "Proveniensen er en juridisk opplysning om eierskap, mens funnkonteksten er den eneste av de to som har faglig verdi for forskningen", "Proveniensen fastsettes av museet ved innlemmelsen, mens funnkonteksten fastsettes i ettertid ved sammenligning med lignende funn"],
      explanation: "Skillet er mellom historien etterpå og situasjonen der og da, og et objekt kan ha god proveniens og likevel være uten funnkontekst. Proveniens har dessuten stor faglig verdi — den er et av fagenes mottrekk mot sin egen de-kontekstualisering — og den fastsettes ikke ved innlemmelsen, men dokumenteres.",
    },
    {
      question: "Hva er forholdet mellom standardisering og klassifikasjon?",
      options: ["Standardiseringen bestemmer hvilke felter skjemaet har, mens klassifikasjonen fyller dem ut for det enkelte objektet", "Standardiseringen gjelder metodene i faget, mens klassifikasjonen gjelder inndelingen av faget i underdisipliner og spesialiseringer", "Standardiseringen skjer i magasinet ved innlemmelsen, mens klassifikasjonen skjer allerede under utgravingen på selve funnstedet", "Standardiseringen er en administrativ oppgave uten faglige følger, mens klassifikasjonen er den delen som krever faglig skjønn"],
      explanation: "Skjemaet kommer først og avgjør hva som i det hele tatt kan registreres, og derfor er standardiseringen alt annet enn administrativ: et felt som ikke finnes i skjemaet, finnes ikke i materialet etterpå. De to skilles verken av hvor eller når arbeidet gjøres.",
    },
    {
      question: "Hvorfor er det viktig at et objekts kontekst er registrert og ikke bare kjent?",
      options: ["Fordi konteksten ikke er bevart i objektet selv og forsvinner når objektet flyttes, slik at dokumentasjonen er den eneste kopien", "Fordi museene krever skriftlig dokumentasjon før en gjenstand kan tas inn i samlingen og få sitt eget nummer i katalogen over den", "Fordi en muntlig opplysning om funnstedet ikke kan brukes i forskning før den er bekreftet av en annen uavhengig kilde", "Fordi konteksten ellers må rekonstrueres fra gjenstandens materiale og form, noe som er tidkrevende og gir usikre resultater"],
      explanation: "Konteksten finnes bare så lenge noen har registrert den, og den kan ikke gjenskapes — det er derfor dokumentasjon er så alvorlig i disse fagene. De tre andre svarene handler om rutiner, kildekrav og arbeidsmengde, ikke om at opplysningen forsvinner for godt.",
    },
    {
      question: "Hva er rekontekstualisering slik boka bruker ordet?",
      options: ["Arbeidet med å bygge en ny sammenheng av det som ble registrert — å knytte katalogposten til rapporten, proveniensen og funnsammenhengen", "Å gjenskape den opprinnelige sammenhengen slik den var før gjenstanden ble tatt opp, ved hjelp av dokumentasjonen fra utgravingen", "Å stille ut gjenstanden i en utstilling som viser hvordan den kan ha blitt brukt av dem som en gang eide og bar den", "Å tolke gjenstanden på nytt i lys av nyere forskning, slik at den gamle tolkningen erstattes av en mer holdbar forklaring"],
      explanation: "Rekontekstualiseringen gjenoppretter aldri det opprinnelige, men bygger en ny sammenheng av det som faktisk ble registrert — derfor er den helt avhengig av dokumentasjonens kvalitet. En utstilling og en ny tolkning kan begge være resultater av arbeidet, men de er ikke det arbeidet består i.",
    },
    {
      question: "Hva er sammenhengen mellom objektivitetsidealet og de-kontekstualiseringen?",
      options: ["Idealet gjorde løsrivelsen ettertraktet, fordi å ta objektet ut av sin sammenheng også var å ta det ut av forskerens inntrykk av sammenhengen", "Idealet oppsto som en reaksjon mot løsrivelsen, fordi fagene så at standardiserte skjemaer gjorde materialet fattigere enn det trengte å være", "Idealet gjelder forskerens forhold til kollegene, mens løsrivelsen gjelder forholdet mellom gjenstanden og stedet den kom fra", "Idealet krevde at hver forsker beskrev sin egen posisjon i teksten, noe som gjorde standardiserte kategorier overflødige"],
      explanation: "Distansen var en del av begrunnelsen for standardiseringen: målinger og faste kategorier skulle erstatte forskerens inntrykk. Kravet om å gjøre rede for egen posisjon er derimot alternativet som vokser fram senere, og det gjør ikke kategoriene overflødige.",
    },
    {
      question: "Hvilket ledd i faghistorieoppgaven bruker sensorveiledningen fra H2024 mest plass på?",
      options: ["Leddet der faget plasseres mot humanioras samtidige utvikling, med forskyvningen notert", "Leddet der kandidaten gjør rede for når og hvordan faget ble et eget kunnskapsfelt med egne institusjoner", "Leddet der kandidaten velger ett fag blant tre og begrunner valget", "Leddet der kandidaten gjør rede for hvilke metoder faget bruker i dag, og hvordan de skiller seg fra nabofagenes"],
      explanation: "Plasseringen mot humanioras samtidige utvikling er leddet med mest plass, og det er der forskyvningen mellom fagene skal noteres. De andre leddene finnes i bestillingen, men de er redegjørelse — og valget av fag er ett ledd som skal ta én setning.",
    },
    {
      question: "En kandidat skriver: «Rundt århundreskiftet ble de historiske fagene mer teoretisk bevisste.» Hvilken feil er dette?",
      options: ["Å skrive ett fags historie som om den gjaldt alle: påstanden holder for historiefaget, men ikke for arkeologien i samme periode", "Å bruke et fagbegrep som etikett uten å aktivere det, siden «teoretisk bevisst» ikke er definert noe sted i besvarelsen", "Å la det enkle redegjørelsesleddet spise oppgaven, siden setningen redegjør i stedet for å drøfte det som skjedde", "Å beskrive en epoke uten å si hva som skiller den fra den forrige, siden setningen ikke nevner 1800-tallet i det hele tatt"],
      explanation: "Feilen er å gjøre ett fags tidfesting til fagenes felles tidfesting: arkeologien hadde i nettopp denne perioden lite teoriutvikling. Motgiften er å sette fagets navn inn i setningen og se om påstanden fortsatt holder — og de andre feilene finnes, men treffer ikke denne setningen.",
    },
    {
      question: "Hvorfor er det en svakhet å framstille de-kontekstualiseringen bare som et tap?",
      options: ["Fordi drøftingen da mangler den siden som forklarer hvorfor fagene gjorde det: presisjonen og etterprøvbarheten de vant", "Fordi tapet i praksis er lite, siden det meste av konteksten uansett blir bevart i utgravingsdokumentasjonen og katalogen", "Fordi ordet de-kontekstualisering er nøytralt i faglitteraturen og ikke skal brukes om noe som helst slags tap", "Fordi sensorveiledningen krever at kandidaten forsvarer fagenes valg og viser at kritikken av dem har vært overdrevet"],
      explanation: "Svakheten er ensidigheten: uten gevinstsiden mangler drøftingen materiale til å veie noe mot noe. Tapet er reelt og ikke lite, ordet brukes nettopp om en pris, og ingen veiledning krever at kandidaten forsvarer et bestemt standpunkt.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom institusjonalisering og vitenskapeliggjøring?",
      options: ["Institusjonaliseringen bygger de varige rammene, mens vitenskapeliggjøringen skifter idealet for hva god kunnskap er", "Institusjonaliseringen skjer på 1800-tallet, mens vitenskapeliggjøringen først kommer i gang etter andre verdenskrig i alle de tre fagene", "Institusjonaliseringen gjelder undervisningen, mens vitenskapeliggjøringen gjelder forskningen og de framgangsmåtene forskerne bruker", "Institusjonaliseringen er noe faget gjør selv, mens vitenskapeliggjøringen er noe nabofagene og myndighetene påfører det utenfra"],
      explanation: "Rammene og idealet er to forskjellige ting, selv om de ofte kommer samtidig — og en besvarelse som slår dem sammen, mister spørsmålet om hvilket ideal faget valgte. Skillet følger verken av tidspunkt, av undervisning mot forskning eller av hvem som tar initiativet.",
    },
    {
      question: "Hva er poenget med å velge ett fag i faghistorieoppgaven i stedet for å behandle alle tre?",
      options: ["At bestillingen ber om ett fag, og at en tekst som fordeler plassen på tre, får rom til tidfestinger og ikke til drøfting", "At de tre fagene har så ulik historie at en sammenligning mellom dem ikke er faglig forsvarlig innenfor rammen av én besvarelse", "At sensor bare kjenner ett av fagene godt og derfor vurderer besvarelser om de to andre etter en mildere målestokk", "At en besvarelse som nevner mer enn ett fag, bryter med kravet om avgrensning og derfor ikke kan vurderes til bestått"],
      explanation: "Grunnen er plass og dybde: drøftingen krever rom, og de andre fagene gjør best nytte som kontrast. Det er fullt tillatt å nevne dem — det er å skrive alle tre som er problemet — og påstander om hvordan sensor vurderer, hører ikke hjemme her.",
    },
  ],
  'exfac03-hark-5-2': [
    {
      question: "Hva menes med de nasjonale historiske skolene?",
      options: ["Historieforskning organisert rundt nasjonen og legitimert av den, med nasjonale arkiver, kildeutgaver og statlig finansierte professorater", "Skoleverkets undervisning i nasjonal historie, slik den ble bygd ut i takt med at nasjonalstatene fikk allmenn skoleplikt", "En bestemt gruppe historikere som gikk sammen om et felles program for hvordan nasjonens fortid skulle skrives og formidles", "Retningen som mente at hver nasjon har sin egen ånd, og at historiefagets oppgave er å beskrive den så trofast som mulig"],
      explanation: "Uttrykket beskriver en måte å organisere forskning på, med nasjonen som ramme for institusjoner, finansiering og spørsmål. Det handler verken om skoleverket, om én navngitt gruppe eller om folkeåndslæren som holdning — flertallsformen peker nettopp på flere parallelle nasjonale miljøer.",
    },
    {
      question: "Hva er historismens ideal?",
      options: ["At hver periode skal forstås på sine egne premisser, ut fra kildene, med vekt på det historisk spesifikke", "At historikeren skal måle fortidens handlinger mot allmenngyldige normer, slik at leseren kan bedømme dem", "At faget skal søke lovmessigheter som gjelder på tvers av perioder, etter mønster fra naturvitenskapene", "At historikeren skal la sin egen forforståelse virke med i tolkningen, siden den er grunnen til at kilden sier henne noe"],
      explanation: "Idealet er den kildebelagte forståelsen av perioden på dens egne premisser. Å måle mot allmenne normer er nettopp det historismen avviser, søken etter lovmessigheter tilhører et annet ideal, og tanken om at forforståelsen skal virke med er hermeneutikkens posisjon hos Gadamer — nabobegrepet historismen lettest forveksles med.",
    },
    {
      question: "Hva er forskjellen på levning og beretning?",
      options: ["Det er to bruksmåter for samme kilde: som spor etter sin egen tilblivelse, eller som vitne om det den forteller om", "Det er to typer kilder: gjenstander og materielle spor på den ene siden, skriftlige framstillinger på den andre", "Det er to grader av pålitelighet: den kilden som er samtidig med hendelsen, og den som er skrevet lenge etterpå", "Det er to trinn i kildekritikken: først avgjøres ektheten, deretter avgjøres hva innholdet kan brukes til"],
      explanation: "Avgjørende er at dette er bruksmåter og ikke kildetyper: en upålitelig beretning kan være en førsteklasses levning. Skillet er verken materielt mot skriftlig, samtidig mot senere, eller identisk med ytre og indre kildekritikk.",
    },
    {
      question: "Hva skiller materielt fra funksjonelt kildesyn?",
      options: ["Det materielle spør hva kilden inneholder av opplysninger, det funksjonelle hva kilden gjorde i sin egen sammenheng", "Det materielle gjelder fysiske gjenstander, mens det funksjonelle gjelder dokumenter som hadde en oppgave i forvaltningen", "Det materielle regner kilden som pålitelig inntil noe annet er vist, mens det funksjonelle alltid går ut fra at den har en tendens", "Det materielle hører til historismen og det funksjonelle til hermeneutikken, slik de to retningene delte kildene mellom seg"],
      explanation: "Skillet går mellom «hva sier kilden?» og «hva gjorde kilden?», og det er dette skiftet H2024-veiledningen peker på i historiefagets metodeskifte. Det handler verken om materialtype, om en generell mistillit eller om et skille mellom to teoriretninger.",
    },
    {
      question: "Når møter de nasjonale historiske skolene kritikk, ifølge H2024-veiledningen?",
      options: ["Allerede tidlig på 1900-tallet", "Først i siste halvdel av 1900-tallet, samtidig med at arkeologien fikk sin teoretiske opposisjon mot kulturarkeologien", "I tiårene rundt andre verdenskrig, da de nasjonale rammene for forskning ble politisk vanskelige å forsvare", "Ved inngangen til tiden etter 1970, da den språklige vendingen traff de historiske fagene for alvor"],
      explanation: "Tidfestingen er tidlig på 1900-tallet, og den er poenget: den skiller historiefaget skarpt fra arkeologien, der opposisjonen kommer i siste halvdel av århundret. De to andre tidfestingene er hentet fra andre utviklinger og passer ikke på denne kritikken.",
    },
    {
      question: "Hvilke tre impulser navngir H2024-veiledningen bak kritikken av de nasjonale historiske skolene?",
      options: ["Strukturalisme, positivisme og de nye samfunnsvitenskapene", "Hermeneutikk, fenomenologi og den språklige vendingen i humaniora etter andre verdenskrig", "Post-prosessuell arkeologi, museumsforskning og den tidlige digitale humanioraen", "Romantikkens folkeåndslære, den organiske utviklingstanken og den tyske historismen"],
      explanation: "De tre navngitte impulsene er strukturalisme, positivisme og de nye samfunnsvitenskapene. Hermeneutikken og den språklige vendingen hører til andre deler av emnet, den post-prosessuelle arkeologien kommer langt senere, og romantikkens tankegods er det historismen selv vokser ut av.",
    },
    {
      question: "Hvilke fire nye metoder navngir H2024-veiledningen i historiefagets metodeskifte?",
      options: ["Topografi og geografi, etnografi, sammenligning og statistikk", "Kildekritikk, arkivstudier, tekstutgivelse og oversettelse av eldre kilder til moderne språk", "Utgraving, typologi, stratigrafi og materialanalyse av gjenstander fra funnkontekst", "Nærlesning, fjernlesning, konkordansanalyse og frekvensundersøkelser i store tekstsamlinger"],
      explanation: "De fire er topografi og geografi, etnografi, sammenligning og statistikk. Kildekritikk og arkivstudier er nettopp de gamle metodene som blir erstattet og supplert, de arkeologiske metodene hører til et annet fag, og de digitale metodene hører til en helt annen del av emnet.",
    },
    {
      question: "Hva menes med at målsettingen i historiefaget skiftet på 1900-tallet?",
      options: ["At det å identifisere historiens drivkrefter ble viktig, delvis på bekostning av å identifisere det historisk spesifikke", "At faget sluttet å skrive om nasjonen og i stedet tok opp spørsmål som gjaldt flere land under ett", "At faget gikk bort fra kravet om kildebelegg og aksepterte at framstillingen alltid er formet av forskerens ståsted", "At faget flyttet oppmerksomheten fra fortiden til samtiden, siden det var samtidens problemer forskningen skulle belyse"],
      explanation: "Skiftet gjelder hva faget først og fremst vil finne ut: drivkreftene blir viktige, delvis på bekostning av det spesifikke. Ordet «delvis» er presist — det spesifikke forsvant ikke. Kildebelegget ble ikke forlatt, og det er ikke tidsrommet, men målsettingen, som endres.",
    },
    {
      question: "Hva er forskjellen på begivenhetshistorie og samfunnshistorie?",
      options: ["Begivenhetshistorien er organisert rundt hendelser og beslutninger, samfunnshistorien rundt strukturer og levekår over lengre tidsrom", "Begivenhetshistorien er fortellende og samfunnshistorien analytisk, slik at bare den siste bygger på kilder som er kritisk vurdert", "Begivenhetshistorien gjelder politikk og samfunnshistorien økonomi, siden de to feltene krever ulike typer arkivmateriale", "Begivenhetshistorien hører til det utgåtte programmet i faget, mens samfunnshistorien er den formen faget har i dag"],
      explanation: "Skillet gjelder både tema, tidshorisont og forklaringstype: det som skjer mot det som varer. Begge former hviler på kildekritikk, begge kan gjelde både politikk og økonomi, og begivenhetshistorien ble bare delvis erstattet — den finnes fortsatt.",
    },
    {
      question: "Hva betyr det at kildekritikken og arkivstudiene ble «både erstattet og supplert»?",
      options: ["At noe faktisk ble skjøvet til side, mens annet kom i tillegg — begge deler skjedde, ujevnt", "At de først ble erstattet av nye metoder, og deretter hentet inn igjen som et supplement da de nye viste seg utilstrekkelige", "At de ble erstattet i forskningen ved universitetene, men supplert med nye framgangsmåter i undervisningen av studenter", "At uttrykket er upresist i veiledningen, og at kandidaten bør velge det ene av de to ordene og begrunne valget"],
      explanation: "Veiledningen sier begge deler, og det er en presis beskrivelse av en ujevn bevegelse: målsettinger og sjanger mistet plass, mens kildekritikken fortsatte å være grunnarbeidet. Å velge bare ett av ordene gjør skiftet enten til et brudd eller til et påbygg, og ingen av delene stemmer alene.",
    },
    {
      question: "Hvorfor svarer sammenligningen best på spørsmålet om historiens drivkrefter?",
      options: ["Fordi en drivkraft virker på tvers av enkelttilfeller, og bare sammenligningen gir deg mer enn ett tilfelle å prøve forklaringen på", "Fordi sammenligningen bygger på et større kildemateriale enn de andre metodene, og derfor gir sikrere resultater enn en undersøkelse av ett enkelt tilfelle noen gang kan gi", "Fordi sammenligningen er den eneste av metodene som ikke krever at kildene er kritisk vurdert på forhånd", "Fordi sammenligningen viser hvordan det samme fenomenet ble opplevd av dem som var midt oppe i det"],
      explanation: "Begrunnelsen ligger i hva en drivkraft er: noe som virker over flere tilfeller, og som derfor krever flere tilfeller for å påvises. Materialets størrelse er ikke poenget, kildekritikken gjelder like fullt, og opplevelsen innenfra er tvert imot noe arkivstudier og etnografisk materiale gir.",
    },
    {
      question: "Hva kan statistikk vise i historieforskningen, og hva kan den ikke vise?",
      options: ["Den kan vise en fordeling og et mønster over tid, men den kan ikke i seg selv si hvorfor mønsteret er som det er", "Den kan vise årsaken til en utvikling, men bare når materialet dekker hele befolkningen i det aktuelle området", "Den kan vise hva enkeltmennesker opplevde, men ikke hvor mange som var i samme situasjon som dem", "Den kan vise at en kilde er pålitelig, men ikke hva kilden kan brukes til i den enkelte undersøkelsen"],
      explanation: "Et tall viser en fordeling, ikke en årsak — derfor er statistikken avhengig av at andre metoder leverer forklaringen. Den sier heller ikke noe om den enkeltes opplevelse, og pålitelighetsvurderingen er kildekritikkens oppgave.",
    },
    {
      question: "Hva forutsetter statistikk som historisk metode om materialet?",
      options: ["At noen en gang har standardisert opplysningene, slik at de lar seg telle og sammenlignes", "At materialet er samtidig med det som undersøkes, siden senere registreringer ikke kan telles på samme måte", "At kildene er skrevet med tanke på å gi et oversiktsbilde av befolkningen eller av økonomien i området", "At forskeren kjenner alle enkelttilfellene i materialet før tellingen begynner, slik at ingen faller utenfor"],
      explanation: "Tellingen forutsetter felles kategorier, og der er statistikken en arving av standardiseringen og av det funksjonelle kildesynet. Rutinedokumenter er tvert imot skrevet uten oversiktsformål, og verken samtidighet eller full forhåndskjennskap er noe krav.",
    },
    {
      question: "Hvorfor kalles arkivet en institusjon som binder historiefaget til metoden sin?",
      options: ["Fordi ordnet og tilgjengelig materiale er det som gjør at en påstand kan prøves av en annen forsker", "Fordi arkivet bestemmer hvilke dokumenter som skal bevares, og dermed hvilke spørsmål faget kan stille", "Fordi opplæringen i kildekritikk foregikk i arkivene før den ble en del av universitetsundervisningen", "Fordi arkivet krever at forskeren oppgir problemstillingen sin før hun får tilgang til materialet"],
      explanation: "Poenget er etterprøvbarheten: uten ordnet og tilgjengelig materiale kan ingen kontrollere en påstand. At bevaringsvalg former hva som kan spørres om, er sant og viktig, men det er en annen sak — og de to siste påstandene er ikke dekket noe sted.",
    },
    {
      question: "Hva er tendens i kildekritisk forstand?",
      options: ["Den interessen eller hensikten som farger kildens framstilling", "Den retningen utviklingen tar over tid, slik den viser seg når mange kilder ses under ett", "Den systematiske feilen som oppstår når en kilde er avskrevet flere ganger og har fått endringer underveis", "Den bevisste forfalskningen som gjør at en kilde gir seg ut for å være noe annet enn den er"],
      explanation: "Tendens er interessen som farger framstillingen, og den er normaltilstanden i kilder — ikke et avvik og ikke bedrageri. Utviklingsretning er noe helt annet, og avskriftsfeil og forfalskning hører til den ytre kildekritikken.",
    },
    {
      question: "Hva er de-kontekstualisering i historiefagets egen versjon?",
      options: ["At dokumentet løsrives fra sammenhengen det hadde en funksjon i, og gjøres om til en opplysning i forskerens kategori", "At dokumentet flyttes fra det arkivet det tilhørte, til et sentralt arkiv der det ordnes sammen med annet materiale", "At forskeren leser dokumentet uten å kjenne den perioden det ble til i, og derfor tolker det med vår egen tids begreper", "At dokumentet gjengis i en kildeutgave uten den kommentaren som opprinnelig fulgte det i arkivets egen ordning"],
      explanation: "Kjernen er at forskerens kategori bryter den sammenhengen dokumentet hadde en funksjon i — tydeligst i tellingen, der tusen innførsler blir til en tabell. Fysisk flytting, anakronistisk lesning og manglende kommentar er andre problemer, ikke dette.",
    },
    {
      question: "Hvorfor sier boka at arkivprinsippet er et mottrekk mot historiefagets egen de-kontekstualisering?",
      options: ["Fordi arkivet ordner etter opphav og dermed bevarer en del av den sammenhengen dokumentet sto i", "Fordi arkivet bevarer originalene, slik at forskeren alltid kan gå tilbake og kontrollere en avskrift", "Fordi arkivet krever at forskeren dokumenterer hvilke kategorier hun har brukt i sin egen undersøkelse", "Fordi arkivet samler dokumenter fra flere avsendere og gjør det mulig å sammenligne dem med hverandre"],
      explanation: "Ordningen etter opphav bevarer relasjonen mellom dokumentene, mens forskerens ordning etter spørsmål bryter den. At originalene finnes og kan sammenlignes er nyttig, men det er ikke det som redder sammenhengen.",
    },
    {
      question: "Hva er den vanligste feilen i denne delen av emnet?",
      options: ["Å skrive ett fags historie som om den gjaldt alle, typisk ved å gi de tre fagene historiefagets tidfesting", "Å velge feil fag i forhold til sin egen bakgrunn, slik at kandidaten mangler pensumdekning for det hun skriver om", "Å bruke for mange pensumbidrag samtidig, slik at ingen av dem får gjøre et tydelig arbeid i teksten", "Å skrive drøftingsleddet før redegjørelsesleddet, slik at leseren møter konklusjonen uten å ha fått grunnlaget"],
      explanation: "Feilen er å generalisere ett fags tidfesting til alle tre, og motgiften er å sette fagets navn inn i setningen og se om påstanden holder. De andre problemene finnes, men de er ikke den feilen som er knyttet til nettopp denne bestillingen.",
    },
    {
      question: "Hva vil det si at metodene skal «følge av» idealet i en faghistorieoppgave?",
      options: ["At teksten skal vise hvorfor akkurat disse framgangsmåtene var nødvendige for den kunnskapen faget ville ha", "At metodene skal presenteres i den rekkefølgen de ble tatt i bruk i faget, slik at utviklingen blir kronologisk", "At kandidaten skal vurdere om metodene faktisk holdt det idealet lovet, og felle en dom over dem", "At metodene skal beskrives før idealet, siden leseren trenger det konkrete før det abstrakte"],
      explanation: "Kravet er en begrunnet sammenheng: idealet forklarer hvorfor metodene ble som de ble. Kronologi er ikke det samme som begrunnelse, dommen over metodene hører hjemme i drøftingsleddet, og rekkefølgen i bestillingen er ideal før metode.",
    },
    {
      question: "Hva er etnografisk materiale godt for i historieforskningen?",
      options: ["Det gir tilgang til dagligliv, arbeid og hushold — forhold som var for selvsagte for samtiden til å bli skrevet ned", "Det gir en uavhengig kontroll av arkivmaterialet, siden beskrivelsene er laget av utenforstående observatører", "Det gir tallmateriale om befolkningen som kan brukes der offentlige registre mangler eller er gått tapt", "Det gir de berørtes egen fortelling om hendelsene, og dermed en motvekt til myndighetenes framstilling"],
      explanation: "Styrken er tilgangen til det selvsagte og udokumenterte — en direkte motgift mot arkivets skjevhet mot det de styrende bevarte. Materialet er verken en uavhengig kontroll, en tallkilde eller først og fremst de berørtes egen fortelling om enkelthendelser.",
    },
    {
      question: "Hva er poenget med å bruke topografi og geografi som historisk metode?",
      options: ["At landskapet og avstandene brukes som forklaringsressurs, ikke som illustrasjon til framstillingen", "At kart fra perioden brukes som kilde, slik at forskeren kan se hvordan samtiden oppfattet sitt eget område", "At forskeren oppsøker stedene selv, siden en beskrivelse aldri kan erstatte inntrykket av å stå der", "At grensene mellom administrative enheter kartlegges, slik at arkivmaterialet kan plasseres riktig"],
      explanation: "Poenget er at stedet forklarer noe — hvorfor noe skjedde der og ikke et annet sted — og ikke bare viser hvor det skjedde. Historiske kart, befaring og administrative grenser kan alle inngå, men de er ikke det som gjør landskapet til en metode.",
    },
    {
      question: "Hva er drøftingsaksen dette kapitlet trener?",
      options: ["Om 1900-tallets metodeskifte var et brudd med historismen eller en videreføring av dens krav om presisjon med nye midler", "Om historiefaget i det hele tatt kan kalles en vitenskap, gitt at det arbeider med enkelthendelser som ikke gjentar seg", "Om de nasjonale historiske skolene var et politisk prosjekt eller et faglig prosjekt i sin samtid", "Om kildekritikken bør regnes som en metode eller som en holdning til materialet"],
      explanation: "Aksen går mellom brudd og videreføring, og begge lesningene har seriøse argumenter: målsettingen skiftet, men kravet om etterprøvbarhet er det samme. De tre andre spørsmålene er interessante, men de er ikke den aksen kapitlet bygger opp materiale til.",
    },
    {
      question: "Hvorfor er det en styrke å notere forskyvningen mot et annet fag i en faghistorieoppgave om historiefaget?",
      options: ["Fordi det gjør tidfestingen til et argument i stedet for en opplysning, og det er det leddet veiledningen bruker mest plass på", "Fordi bestillingen krever at minst to av de tre fagene behandles for at besvarelsen skal kunne vurderes som en faghistorisk oppgave i det hele tatt", "Fordi sensor ellers ikke kan se om kandidaten har lest pensum om de fagene hun ikke har valgt", "Fordi et fag ikke kan beskrives uten at det sammenlignes med et annet fag på hvert eneste punkt"],
      explanation: "Én setning som setter to fag og et tidsforhold sammen, gjør tidfestingen til et poeng. Bestillingen ber om ett fag, ikke to, og en gjennomført punkt-for-punkt-sammenligning ville tvert imot spist plassen drøftingen trenger.",
    },
    {
      question: "En kandidat skriver 350 av 500 ord om de nasjonale historiske skolene og 150 om alt annet. Hvilken feil er dette?",
      options: ["Å la det enkle redegjørelsesleddet spise oppgaven, stikk i strid med kravet om at det innledende leddet ikke skal ta brorparten", "Å bruke et fagbegrep som etikett uten å aktivere det, siden de nasjonale skolene bare nevnes ved navn", "Å levere uten avgrensning og problemstilling, siden en så lang redegjørelse ikke kan ha vært avgrenset på forhånd og dermed må ha vokst fram mens kandidaten skrev", "Å prøve å dekke alt, og dermed ikke drøfte noe, siden kandidaten har tatt med for mange momenter"],
      explanation: "Feilen er fordelingen: det innledende redegjørelsesleddet er «planke» og skal ikke ta brorparten, sier H2022-veiledningen eksplisitt. De andre feilene finnes, men de handler om henholdsvis begrepsbruk, manglende avgrensning og for bred dekning — ikke om vekting mellom leddene.",
    },
  ],
  'exfac03-hark-5-3': [
    {
      question: "Hva kjennetegner kulturarkeologien?",
      options: ["At faget organiseres rundt avgrensede kulturer og de gjenstandsformene som regnes som markører for dem", "At faget tolker funnene i lys av den sammenhengen de ble brukt i, og gjør rede for arkeologens egen posisjon", "At faget henter metodene sine fra naturvitenskapelig materialanalyse og lar kjemien avgjøre dateringen", "At faget først og fremst studerer kulturminner som fortsatt er synlige i landskapet, og lar det nedgravde ligge"],
      explanation: "Kulturarkeologien ordner materialet rundt avgrensede kulturer og deres gjenstandsformer, og varer til og med 1960-tallet. Tolkning og forskerposisjon hører til den post-prosessuelle opposisjonen, mens materialanalyse og synlige kulturminner er andre saker helt.",
    },
    {
      question: "Hva kalles perioden fra ca. 1900 til ca. 1960 i arkeologien, med H2024-veiledningens egen betegnelse?",
      options: ["«Den lange søvnen»", "Den post-prosessuelle perioden, siden det er da grunnlaget for den senere teoretiske opposisjonen blir lagt", "Kulturarkeologiens gjennombrudd, siden det er i disse tiårene faget først får sine egne institusjoner", "Den teoretiske vendingen, siden det er da arkeologien tar opp spørsmålene fra resten av humaniora"],
      explanation: "Betegnelsen er «den lange søvnen», og den peker på lite teoriutvikling — ikke på lite arbeid. Den post-prosessuelle retningen kommer først i siste halvdel av århundret, institusjonene er på plass tidligere, og den teoretiske vendingen er nettopp det arkeologien ikke tar opp i denne perioden.",
    },
    {
      question: "Hva betyr det at kulturarkeologien var underteoretisert?",
      options: ["At faget hadde et velutviklet apparat for å ordne materialet, men lite utviklet diskusjon av hva ordningen forutsetter", "At faget manglet metoder som var stringente nok til å gi resultater andre forskere kunne kontrollere og bygge videre på", "At faget bygde på teorier hentet fra nabofagene i stedet for å utvikle sine egne, og derfor manglet en selvstendig profil", "At faget hadde få utøvere og små ressurser, slik at det ikke var kapasitet til annet enn det mest nødvendige feltarbeidet"],
      explanation: "Ordet peker på et misforhold og ikke på fravær: retningen hadde en teori — at like former markerer avgrensede kulturer — men den ble i liten grad diskutert som teori. Et underteoretisert fag kan være svært stringent, og det handler verken om lånte teorier eller om ressurser.",
    },
    {
      question: "Hva var post-prosessuell arkeologi i opposisjon til?",
      options: ["Den underteoretiserte kulturarkeologien, som ordnet og daterte materialet uten å diskutere hva funnene betyr", "Historiefagets krav om skriftlige kilder, som gjorde de skriftløse periodene til et annenrangs studieobjekt i humaniora", "Museenes praksis med å stille ut gjenstander uten å opplyse om hvor de kom fra og hvem som hadde eid dem", "Naturvitenskapelige dateringsmetoder, som gjorde de tradisjonelle typologiske dateringene overflødige"],
      explanation: "Opposisjonen gjaldt den underteoretiserte kulturarkeologien, og det er nettopp dette leddet en beskrivelse ofte glemmer. De tre andre alternativene beskriver reelle spenninger i faglandskapet, men de er ikke det retningen vokste fram imot.",
    },
    {
      question: "Når plukker arkeologien opp den bredere utviklingen i humaniora?",
      options: ["Først i siste halvdel av 1900-tallet", "Allerede tidlig på 1900-tallet, omtrent samtidig med kritikken av de nasjonale historiske skolene i historiefaget", "I mellomkrigstiden, da faget begynte å samarbeide med de nye samfunnsvitenskapene om felles metodespørsmål", "Rundt midten av 1800-tallet, da faget fikk sine første professorater og sine egne vitenskapelige samlinger"],
      explanation: "Tidfestingen er siste halvdel av 1900-tallet, og forskjellen fra historiefaget, der kritikken kommer tidlig på 1900-tallet, er hele poenget. De to andre tidspunktene tilhører henholdsvis en utvikling som ikke fant sted i arkeologien og fagets institusjonelle etablering.",
    },
    {
      question: "Hvilket vitenskapelig ideal henter arkeologien i sin etableringsfase?",
      options: ["Et ordnende ideal, der sikker kunnskap er det som lar seg klassifisere, plassere i rekkefølge og datere", "Et tolkende ideal, der kunnskap er den best begrunnede forståelsen av hva funnene betydde for dem som brukte dem", "Et historistisk ideal, der hver periode skal forstås på sine egne premisser ut fra det kildene selv forteller", "Et kritisk ideal, der fagets viktigste oppgave er å avsløre hvilke interesser tolkningene av fortiden tjener"],
      explanation: "Idealet er ordnende, og typologien og kronologibyggingen følger direkte av det. Det tolkende kommer med den post-prosessuelle retningen langt senere, det historistiske forutsetter kilder som forteller noe, og det kritiske er en helt annen posisjon.",
    },
    {
      question: "Hva er forskjellen på typologi og stratigrafi?",
      options: ["Typologien ordner gjenstandene etter form, stratigrafien ordner lagene og sier hva som er eldre enn hva på stedet", "Typologien brukes på gjenstander fra utgravinger, mens stratigrafien brukes på funn som er levert inn uten dokumentasjon", "Typologien gir absolutte årstall, mens stratigrafien bare kan brukes til å bekrefte en datering man alt har", "Typologien er en tolkende metode, mens stratigrafien er en rent registrerende metode uten faglig skjønn"],
      explanation: "Den ene ordner former, den andre lag, og de er uavhengige av hverandre — derfor kan stratigrafien kontrollere en typologisk datering. Typologien gir ikke i seg selv årstall, og begge metodene krever faglig skjønn.",
    },
    {
      question: "Hvorfor sier boka at utgravingen er enestående blant fagenes metoder?",
      options: ["Fordi den ødelegger sin egen kilde mens den leser den, slik at gevinsten og prisen hentes i samme håndgrep", "Fordi den er den eneste metoden i emnet som krever et helt team av spesialister for å kunne gjennomføres", "Fordi den gir tilgang til perioder uten skrift, som ellers ville vært helt utilgjengelige for forskningen i dag", "Fordi den er den eneste metoden som gir gjenstander og ikke bare opplysninger om gjenstander"],
      explanation: "Poenget er at funnkonteksten forsvinner i samme handling som avdekker gjenstanden — man kan ikke grave to ganger. De andre påstandene er delvis riktige om arkeologi generelt, men de handler ikke om det som gjør prisen så tydelig her.",
    },
    {
      question: "Hva er en arkeologisk kultur, og hvilken antakelse hviler begrepet på?",
      options: ["Funn som ligner hverandre og opptrer sammen i tid og rom, behandlet som spor etter én gruppe — antakelsen er at like gjenstander betyr samme folk", "En periode i fagets kronologi, avgrenset av at gjenstandsformene skifter — antakelsen er at formskifter alltid følger av ny teknologi", "En gruppe mennesker som er kjent fra skriftlige kilder og som kan gjenfinnes i funnmaterialet — antakelsen er at kildene er pålitelige", "Et sett skikker knyttet til gravlegging og offer — antakelsen er at religionen er den mest stabile delen av et samfunn"],
      explanation: "Begrepet gjør det mulig å snakke om «noen» i skriftløse perioder, men det hviler på antakelsen om at like gjenstander betyr samme folk — og folk som brukte samme kartype kan ha regnet seg som svært forskjellige. De tre andre beskriver andre størrelser i faget.",
    },
    {
      question: "Hva er fasedrift, slik boka bruker ordet?",
      options: ["At fag i samme felt ikke går i takt, slik at en utvikling treffer ett fag tiår før den treffer nabofaget", "At en retning innenfor et fag gradvis erstattes av en annen, uten at det finnes et tydelig bruddpunkt mellom dem", "At et fag skifter mellom perioder med rask utvikling og perioder med konsolidering, i en regelmessig rytme", "At forskere innenfor samme fag arbeider med ulike faser av det samme materialet og derfor sjelden møtes"],
      explanation: "Fasedrift betegner at fagene ikke går i takt, og forklares med materialet, institusjonene og idealet. Ordet er valgt fordi «forsinkelse» ville forutsatt en klokke alle skulle gått etter — og dermed skjult en dom i en beskrivelse.",
    },
    {
      question: "Hva er den tredje setningen i tosporstidslinjen, og hvorfor er den viktigst?",
      options: ["Den som måler avstanden mellom sporene og gir en grunn — den gjør plasseringen til et argument i stedet for en tidslinje", "Den som beskriver hva som skjedde i faget, siden det er faget bestillingen egentlig spør etter i denne oppgavetypen", "Den som beskriver hva som skjedde i humaniora, siden den setter den rammen resten av besvarelsen må forholde seg til hele veien", "Den som knytter utviklingen til et bestemt årstall, siden en presis datering gjør plasseringen etterprøvbar"],
      explanation: "De to første setningene beskriver hvert sitt spor; den tredje måler og forklarer, og det er den som løfter. Et presist årstall ville tvert imot gitt falsk nøyaktighet, siden ingen av utviklingene har en dato.",
    },
    {
      question: "Hva er det sterkeste argumentet for at arkeologiens ventetid var et tap?",
      options: ["At dokumentasjonspraksisen fulgte det ordnende idealet, slik at opplysninger en tolkende arkeologi trenger, systematisk ikke ble registrert", "At faget mistet anseelse i forhold til nabofagene i den perioden, og derfor fikk færre ressurser til utgravinger og publisering", "At en hel generasjon arkeologer aldri fikk anledning til å arbeide med de spørsmålene som senere skulle vise seg viktigst", "At kronologiarbeidet i perioden i ettertid har vist seg å inneholde flere feil enn man var klar over den gangen"],
      explanation: "Det bærende argumentet er at utgravingen ikke kan gjøres om, og at et materiale dokumentert for ordning er dårlig egnet for tolkende spørsmål. Anseelse, generasjonsskjebner og feil i kronologien er andre saker, og de siste to er heller ikke belagt.",
    },
    {
      question: "Hva er det sterkeste argumentet for at ventetiden var en modning?",
      options: ["At tolkning uten kronologi er gjetning, og at nettopp det grunnlaget den senere tolkningen hviler på, ble bygd i disse tiårene", "At faget trengte tid til å bygge opp museer og stillinger før det kunne begynne å stille de spørsmålene om mening som kom senere", "At de teoretiske impulsene fra humaniora ikke var modne nok til å brukes på arkeologisk materiale før mot slutten av århundret", "At arkeologene i perioden bevisst valgte å utsette tolkningen til materialet var stort nok til å bære generelle konklusjoner"],
      explanation: "Argumentet hviler på at kronologien er en forutsetning for tolkning, ikke et motstykke til den. Institusjonsbyggingen var i hovedsak gjort tidligere, og de to siste påstandene tillegger periodens forskere en plan og humanioras impulser en umodenhet som ingenting belegger.",
    },
    {
      question: "Hva er materiell kultur?",
      options: ["Det menneskeskapte i tingene — redskaper, klær, bygninger og spor etter arbeid — sett som spor etter et samfunn", "Den delen av en kultur som er bevart fysisk, i motsetning til den delen som bare er kjent fra skriftlige kilder", "De gjenstandene i en samling som er i så god stand at de kan stilles ut uten videre konservering først", "Materialene gjenstandene er laget av, og de egenskapene som avgjør hvordan de brytes ned i jorden over tid"],
      explanation: "Begrepet peker på at gjenstander bærer handlinger, valg og forestillinger, og det er derfor materialet kan tolkes selv om det ikke snakker. Skiftet fra «gjenstand» til «materiell kultur» er samtidig et skifte i hva faget mener det kan lese.",
    },
    {
      question: "Hvorfor er museets ordningsprinsipp mer enn et administrativt valg?",
      options: ["Fordi prinsippet avgjør hvilke spørsmål samlingen kan svare på: ordning etter materiale bryter den funnsammenhengen ordning etter opphav ville bevart", "Fordi et museum med dårlig ordning ikke kan finne igjen gjenstandene sine, og dermed mister kontrollen over hva samlingen faktisk inneholder", "Fordi prinsippet avgjør hvilke gjenstander som kan stilles ut, og dermed hva publikum får se av samlingen", "Fordi ordningen bestemmer hvilke deler av samlingen som prioriteres i bevaringsarbeidet når ressursene er knappe"],
      explanation: "Ordningen former hvilke relasjoner som er synlige i materialet etterpå, og dermed hvilke spørsmål som kan stilles. Gjenfinning, utstilling og bevaringsprioritering er praktiske følger, men de er ikke det som gjør prinsippet faglig.",
    },
    {
      question: "Hva sier H2024-veiledningen om ubalansen i tidfestingen mellom de tre fagene?",
      options: ["At den kan ha gjort studentene usikre, og at sensor skal utvise skjønn på grunn av den", "At studentene bør velge det faget de kjenner best, slik at usikkerheten om de andre fagene ikke får følger for karakteren", "At kandidatene må oppgi hvilke tidfestinger de er usikre på, slik at sensor kan ta hensyn til det ved vurderingen", "At tidfestingene ikke skal vektlegges i vurderingen, siden de er vanskelige å huske presist under skriving"],
      explanation: "Veiledningen rapporterer at ubalansen kan ha gjort studentene usikre og ber sensor utvise skjønn — det er en av bare to rapporterte observasjoner i arkivet. Den fritar verken kandidaten fra tidfestingene eller innfører noen plikt til å oppgi egen usikkerhet.",
    },
    {
      question: "Hva er den vanligste feilen i denne delen av emnet, og hva er motgiften?",
      options: ["Å skrive ett fags historie som om den gjaldt alle — motgiften er å sette fagets navn inn i setningen og prøve om påstanden fortsatt holder", "Å skrive for lite om de to fagene man ikke har valgt — motgiften er å gi hvert av de tre fagene omtrent like mye plass i besvarelsen", "Å bruke for gamle pensumbidrag — motgiften er å kontrollere at framstillingen bygger på den nyeste litteraturen om faget", "Å skrive drøftingen før redegjørelsen — motgiften er å følge bestillingens rekkefølge ledd for ledd"],
      explanation: "Feilen er å generalisere ett fags tidfesting til de andre, og prøven med fagets navn i setningen avslører den raskt. Bestillingen ber om ett fag, ikke tre like store deler, og pensumets alder er ikke et tema i dette emnet.",
    },
    {
      question: "Hva er forskjellen mellom relativ og absolutt kronologi?",
      options: ["Den relative sier hva som er eldre og yngre enn hva, den absolutte knytter funnene til årstall", "Den relative gjelder ett funnsted, mens den absolutte gjelder hele regioner og lar funn fra ulike steder sammenlignes", "Den relative bygger på gjenstandenes form, mens den absolutte alltid bygger på lagene i bakken der funnet ble gjort", "Den relative er en foreløpig datering som senere erstattes av den absolutte når bedre metoder blir tilgjengelige"],
      explanation: "Skillet går mellom rekkefølge og årstall. Begge kan bygge på flere kilder, en relativ kronologi kan omfatte store områder, og den er ikke en foreløpig utgave av den absolutte — de svarer på ulike spørsmål.",
    },
    {
      question: "Hva menes med at arkeologen skal gjøre rede for sin egen posisjon?",
      options: ["At hennes samtid, spørsmål og forventninger former hva hun ser, og at dette skal legges fram i stedet for å fjernes", "At hun skal oppgi hvilken institusjon hun arbeider ved og hvem som har finansiert den utgravingen hun rapporterer fra", "At hun skal beskrive hvor hun sto under utgravingen, slik at andre kan kontrollere observasjonene hennes", "At hun skal ta stilling til om funnene bør stilles ut, og begrunne standpunktet sitt faglig"],
      explanation: "Kravet gjelder forskerens ståsted i tolkningen, og det er et ledd som legges til i argumentasjonen — ikke en oppgivelse av belegg. De tre andre svarene beskriver andre former for åpenhet, ikke den posisjonen post-prosessuell arkeologi snakker om.",
    },
    {
      question: "Hvorfor forutsetter den tolkende arkeologien det arbeidet kulturarkeologien gjorde?",
      options: ["Fordi man må vite når en gjenstand er fra og hva den hører sammen med, før man kan si hva den betydde i sin sammenheng", "Fordi de tolkende arkeologene i hovedsak arbeidet på materiale som allerede lå i museenes magasiner, og dermed var bundet av tidligere valg", "Fordi den nye retningen overtok de samme institusjonene og dermed også de samme arbeidsrutinene", "Fordi kulturarkeologien hadde utviklet det fagspråket den senere tolkningen måtte formuleres i"],
      explanation: "Kronologien er forutsetningen for tolkningen — uten den tolker man i løse lufta, og det er kjernen i modningsargumentet. De andre påstandene er enten praktiske omstendigheter eller ikke belagt.",
    },
    {
      question: "Hva er de-kontekstualisering i arkeologiens egen versjon?",
      options: ["At gjenstanden tas ut av funnkonteksten, føres inn i et skjema, ordnes etter materiale i magasinet og blir en post i en katalog", "At gjenstanden blir tolket uten hensyn til hvilken kultur den tilhørte, slik at den framstår som løsrevet fra sin gruppe", "At gjenstanden fjernes fra det landet den ble funnet i og havner i en samling i et annet land", "At gjenstanden mister sin opprinnelige form gjennom konserverende inngrep som ikke lar seg gjøre om"],
      explanation: "Bevegelsen går fra funnkontekst til katalogpost, i flere trinn, og prisen betales mest direkte her fordi utgravingen ødelegger sin egen kilde. De tre andre beskriver tolkningsfeil, kulturarvspørsmål og konserveringsinngrep — andre problemer enn dette.",
    },
    {
      question: "Hvorfor er det bedre å forklare arkeologiens sene teoretiske vending med materialet, institusjonen og idealet enn med fagets modenhet?",
      options: ["Fordi de tre gir en forklaring som kan prøves, mens modenhet er en dom som skjuler seg i en beskrivelse", "Fordi modenhet er et begrep fra psykologien og derfor ikke kan brukes om fag i det hele tatt", "Fordi de tre forklaringene er de eneste som er nevnt i pensum, og en besvarelse bør holde seg til pensum", "Fordi en forklaring alltid bør ha minst tre ledd for å regnes som fullstendig i denne oppgavetypen"],
      explanation: "De tre peker på forhold som kan undersøkes og som forklarer valget, mens «umodent fag» er en karakteristikk forkledd som forklaring — og bestillingen belønner forklaringer. Kravet om nøyaktig tre ledd finnes ikke, og begrepsbruken er ikke problemet.",
    },
    {
      question: "Hva innebærer det at «den lange søvnen» brukes med innhold og ikke som etikett?",
      options: ["At besvarelsen sier hva som faktisk ikke skjedde i perioden — at faget gravde, ordnet og daterte, men ikke diskuterte hvordan tolkning skjer", "At besvarelsen setter uttrykket i anførselstegn og oppgir at det er veiledningens egen betegnelse på nettopp denne perioden i faget", "At besvarelsen angir nøyaktig hvilke år perioden begynte og sluttet, slik at leseren kan plassere den presist", "At besvarelsen bruker uttrykket flere ganger, slik at leseren ser at det er et sentralt begrep i framstillingen"],
      explanation: "Å bruke et begrep aktivt vil si å vise hva det betyr i saken — her: hva som ikke skjedde. Anførselstegn, årstall og gjentakelse gjør ingen av delene, og gjentakelse uten innhold er nettopp etikettbruken feilen advarer mot.",
    },
    {
      question: "Hvilken sammenheng er det mellom museets institusjon og arkeologiens metoder?",
      options: ["En samling må ha et ordningsprinsipp, og prinsippet ble typologien — som dermed også ble fagets måte å svare på spørsmål på", "Museet finansierte utgravingene og kunne derfor bestemme hvilke metoder som skulle brukes i felten", "Museet krevde at gjenstandene ble konservert før de kunne katalogiseres, og materialanalysen ble derfor fagets grunnmetode i praksis", "Museet skulle formidle til et publikum, og fagets metoder ble derfor formet av hva som lot seg stille ut"],
      explanation: "Institusjonen og metoden henger sammen fordi et stort materiale må ordnes, og ordningsprinsippet ble typologien. Finansiering, konservering og formidling påvirket faget på andre måter, men det er ordningsbehovet som forklarer metodevalget.",
    },
  ],
  'exfac03-hark-5-4': [
    {
      question: "Hva menes med at konserveringen er en teoretisk-praktisk konstruksjon?",
      options: ["At teori og inngrep i objektet er samme virksomhet, slik at hvert standpunkt får et fysisk uttrykk i gjenstanden", "At faget kombinerer et teoretisk studium med en praksisperiode, slik at studentene lærer begge deler i utdanningen sin", "At faget bruker ferdig utviklet teori fra humaniora på praktiske problemer knyttet til bevaring av gjenstander og samlinger", "At faget bygger på håndverkstradisjoner som senere har fått en teoretisk overbygning gjennom forskning ved museene"],
      explanation: "Kjernen er at de to ikke lar seg skille: å bestemme hva objektet er, og å behandle det, er samme handling. Utdanningens oppbygning, anvendelse av ferdig teori og historien fra håndverk til fag er andre saker — og nettopp derfor er faget mer enn et anvendt fag.",
    },
    {
      question: "Hvor legger H2024-veiledningen vekten når den beskriver konserveringen?",
      options: ["På vitenskapelige metoder for å avdekke objektenes sannhet", "På bevaringsetikken og på spørsmålet om hvem som har rett til å bestemme over kulturarven", "På forholdet mellom konservatoren og de andre yrkesgruppene som arbeider med samlingene i et museum", "På hvordan faget dokumenterer inngrep, slik at senere generasjoner kan se hva som er gjort"],
      explanation: "Vekten ligger på vitenskapelige metoder for å avdekke objektenes sannhet, og det er derfra idealet i kapitlet er hentet. Dokumentasjon og etikk er reelle deler av faget, men de er ikke det veiledningen framhever i denne komprimerte beskrivelsen.",
    },
    {
      question: "Hvilke to betydninger kan «objektets sannhet» ha?",
      options: ["Den fysiske tilstanden og den historiske meningen", "Den opprinnelige formen og den formen objektet har i dag, etter alle inngrep og all nedbrytning", "Det objektet var ment å være og det objektet faktisk ble brukt til av dem som eide det", "Den kunnskapen analysen gir og den kunnskapen konservatorens erfaring gir gjennom mange års arbeid"],
      explanation: "Skillet går mellom det som kan måles og det som må tolkes, og det er avgjørende fordi de to kan peke mot motsatte inngrep. De andre parene beskriver reelle spenninger, men de fanger ikke skillet mellom materie og mening.",
    },
    {
      question: "Hva er et grensefag?",
      options: ["Et fag som selv er sammensatt av forutsetninger fra to felt, og ikke bare samarbeider med et nabofag", "Et fag som befinner seg i utkanten av sitt eget fakultet og derfor har svak institusjonell forankring", "Et fag som studerer grenser mellom kulturer, perioder eller territorier som sitt egentlige gjenstandsfelt", "Et fag som er oppstått ved at to etablerte fag begynte å samarbeide om felles problemstillinger"],
      explanation: "Poenget er at faget har to opphav, ikke at det møter et annet fag: tverrfaglig samarbeid forutsetter at fagene fortsatt er seg selv. De to andre svarene handler om institusjonell plassering og om studieobjekt, ikke om fagets sammensetning.",
    },
    {
      question: "Hva er reversibilitet i konserveringen?",
      options: ["Kravet om at et inngrep så langt mulig skal kunne gjøres om, slik at senere generasjoner kan velge annerledes", "Kravet om at et inngrep skal være så lite som mulig, slik at objektet endres minst mulig av behandlingen", "Kravet om at nedbrytningen skal kunne stanses helt, slik at objektets tilstand holder seg stabil over tid", "Kravet om at inngrepet skal dokumenteres i detalj, slik at andre kan se nøyaktig hva som ble gjort og hvorfor"],
      explanation: "Reversibilitet gjelder hvordan inngrepet gjøres — at det kan omgjøres — og er et svar på at dagens beste vurdering kan bli morgendagens feil. Det er ikke det samme som minimalt inngrep, ikke et løfte om stabil tilstand og ikke dokumentasjonskravet, selv om alle tre hører til fagets praksis.",
    },
    {
      question: "Hvorfor er et senere tilføyd lag noe annet enn en skade?",
      options: ["Fordi laget er en handling — noen ville noe med objektet — mens en skade er et tap", "Fordi laget er lettere å fjerne enn en skade, som ofte har trengt inn i selve materialet", "Fordi laget er dokumentert i museets papirer, mens skader som regel har oppstått uten at noen har registrert dem", "Fordi laget er yngre enn objektet, mens en skade kan ha oppstått når som helst i objektets historie"],
      explanation: "Skillet er at laget uttrykker en intensjon og dermed er et spor etter bruk, mens skaden er et tap. Å behandle alle senere lag som skader er å bestemme på forhånd at bare den opprinnelige tilstanden er ekte — og det er nettopp den avgjørelsen dilemmaet handler om.",
    },
    {
      question: "Hva er det som skiller de to argumentene i konserveringsdilemmaet?",
      options: ["Synet på hva objektet er — om sannheten ligger i den opprinnelige tilstanden eller i hele bruksforløpet", "Vurderingen av hvor alvorlig skaden er, og dermed hvor raskt det er nødvendig å gripe inn", "Uenighet om hva materialet består av, som en grundigere analyse i prinsippet kunne avgjøre", "Vurderingen av hvor mye ressurser det er forsvarlig å bruke på ett enkelt objekt i en stor samling"],
      explanation: "De to argumentene ville fått samme svar av en materialanalyse; uenigheten gjelder hva objektet er, og det er et humanistisk spørsmål. Nettopp derfor kan ikke analysen avgjøre saken, og nettopp derfor er konserveringen mer enn anvendt kjemi.",
    },
    {
      question: "Hva innebærer aksen tradisjon mot fornying i konserveringen?",
      options: ["En spenning mellom innarbeidet erfaring med hvordan inngrep virker over tid, og nye metoder som gir mer kunnskap om objektet", "En strid mellom eldre konservatorer som vil bevare fagets arbeidsmåter og yngre som vil ta i bruk moderne teknologi", "Et skille mellom museer som prioriterer bevaring og museer som prioriterer å gjøre samlingene tilgjengelige for publikum", "En utvikling der faget gradvis har gått fra håndverksmessige metoder til vitenskapelige, slik andre fag også har gjort"],
      explanation: "Aksen består av to sett gode grunner — erfaring med langtidsvirkning mot ny kunnskap om objektet — og ikke av temperament eller generasjoner. Den beskriver heller ikke en institusjonell forskjell eller en enveis utvikling; den er en vedvarende spenning i faget.",
    },
    {
      question: "Hva sier boka om tidfestingen av konserveringens etablering?",
      options: ["At arkivet ikke gir en tidfesting, og at kandidaten derfor bør si hva plasseringen bygger på i stedet for å gjette", "At faget ble etablert samtidig med arkeologien, siden begge vokser fram i arbeidet med museenes samlinger", "At faget først ble et eget kunnskapsfelt i siste halvdel av 1900-tallet, da de naturvitenskapelige metodene ble tilgjengelige", "At tidfestingen varierer så mye mellom land at spørsmålet ikke lar seg besvare på en meningsfull måte"],
      explanation: "H2024-veiledningen beskriver konserveringen komprimert og uten årstall, i motsetning til arkeologien. Det riktige grepet er å bygge på fagets kjennetegn og institusjoner og si hva teksten ikke dekker — ikke å låne en tidfesting fra et annet fag eller å erklære spørsmålet ubesvarlig.",
    },
    {
      question: "Hvordan svarer konserveringen på det fjerde spørsmålet — når faget plukker opp den bredere utviklingen i humaniora?",
      options: ["Faget har ligget i grensesonen hele veien, og utviklingen treffer det som en skjerping av spenningen mellom tradisjon og fornying", "Faget tok opp utviklingen samtidig med historiefaget, altså tidlig på 1900-tallet, gjennom kritikken av restaureringspraksisen", "Faget har ennå ikke tatt opp den utviklingen, fordi de naturvitenskapelige metodene har gjort de humanistiske spørsmålene overflødige", "Faget tok opp utviklingen sist av de tre fagene, etter at både historiefaget og arkeologien hadde gjort det"],
      explanation: "Konserveringen har ikke en enkelt datert vending: den kan ikke velge bort spørsmålet om hva slags kunnskap den produserer, siden metodene kommer fra én side og spørsmålene fra en annen. De tre andre svarene låner enten et annet fags tidfesting eller påstår noe materialet ikke gir dekning for.",
    },
    {
      question: "Hvorfor kan ikke en materialanalyse alene avgjøre hva som bør gjøres med et objekt?",
      options: ["Fordi analysen sier hva som er der, ikke hva det betyr — og steget derfra til et inngrep er et faglig valg", "Fordi analysen ofte er for kostbar til å kunne gjennomføres på alle objekter i en samling av vanlig størrelse", "Fordi analysen krever at man tar en prøve av objektet, og prøvetakingen er i seg selv et inngrep man må begrunne", "Fordi analyseresultatene må tolkes av en spesialist, og ulike spesialister kan komme til ulike konklusjoner"],
      explanation: "Analysen kan fastslå at det finnes et senere lag, men ikke om laget bør fjernes — det spørsmålet forutsetter et syn på hva objektet er. Kostnad, prøvetaking og tolkningsusikkerhet er reelle problemer, men de gjelder analysens gjennomføring, ikke skillet mellom å beskrive og å velge.",
    },
    {
      question: "Hva er det sterkeste argumentet for at konserveringen er et eget tredje slag, og ikke en humanistisk disiplin med naturvitenskapelige metoder?",
      options: ["At faget produserer endrede objekter og ikke først og fremst tekster, slik at teori og inngrep blir samme virksomhet", "At faget bruker laboratorieutstyr og analysemetoder som ikke finnes i noe annet humanistisk fag ved universitetet", "At faget rekrutterer studenter med naturfaglig bakgrunn like ofte som studenter med humanistisk bakgrunn", "At faget arbeider på oppdrag fra museer og forvaltning, og derfor har andre mål enn den frie forskningen har"],
      explanation: "Det bærende argumentet gjelder erkjennelsessituasjonen: et fag som endrer sin egen kilde som del av arbeidet, passer dårlig i begge kategorier. Utstyr, rekruttering og oppdragsgivere er ytre kjennetegn som ikke i seg selv gjør et fag til noe eget.",
    },
    {
      question: "Hva er det sterkeste argumentet for at konserveringen er en humanistisk disiplin med naturvitenskapelige metoder?",
      options: ["At spørsmålene som styrer arbeidet er humanistiske, og at import av metoder ikke gjør et fag om til noe annet", "At faget hører til under de humanistiske fakultetene ved de fleste universiteter som tilbyr utdanningen", "At konservatorer i praksis samarbeider tettest med kunsthistorikere, arkeologer og historikere om objektene sine", "At de naturvitenskapelige metodene bare brukes i en liten del av arbeidet, mens resten er faglig skjønn"],
      explanation: "Argumentet hviler på at det er spørsmålstypen som avgjør, og på at historiefaget hentet statistikk fra samfunnsvitenskapene uten å slutte å være humaniora. Fakultetstilhørighet og samarbeidspartnere er institusjonelle forhold, og påstanden om metodenes omfang er verken belagt eller avgjørende.",
    },
    {
      question: "Hva menes med at hvert inngrep har et kunnskapssyn innebygd?",
      options: ["At inngrepet forutsetter en oppfatning av hva objektet er, enten konservatoren har formulert den eller ikke", "At inngrepet må bygge på den nyeste forskningen om materialet, slik at behandlingen er faglig forsvarlig", "At inngrepet må godkjennes av en fagansvarlig som kan vurdere om begrunnelsen holder faglig mål", "At inngrepet endrer hva senere forskere kan finne ut om objektet, og dermed hvilken kunnskap som er mulig"],
      explanation: "Poenget er at valget om hva man sikter mot, ligger der uansett — også når man lar være å gjøre noe. At inngrepet endrer hva senere forskere kan finne ut, er en reell følge, men det er en konsekvens og ikke den forutsetningen begrepet peker på.",
    },
    {
      question: "Hva er de-kontekstualisering i konserveringens egen versjon?",
      options: ["At objektet tas ut av bruk og sammenheng og blir et behandlingsobjekt, beskrevet i materialer, tilstandsgrader og skadetyper", "At objektet mister sin opprinnelige overflate gjennom rensing, slik at spor etter bruk forsvinner sammen med smusset", "At objektet flyttes fra utstillingen til magasinet, der publikum ikke lenger har anledning til å se det", "At objektet skilles fra de papirene som forteller hvor det kommer fra og hvem som har eid det tidligere"],
      explanation: "Bevegelsen består i at objektet gjøres om til en sak av en bestemt type, med kategorier som gjør noe usynlig — og i dette faget er den også et resultat av å behandle, ikke bare av å undersøke. Rensing, magasinering og tapt eierhistorie er beslektede problemer, men de er ikke selve begrepet.",
    },
    {
      question: "Hva er forskjellen på å se objektet som kilde og som gjenstand for behandling?",
      options: ["Som kilde er det noe å lese, som gjenstand for behandling er det en tilstand som skal stabiliseres", "Som kilde tilhører det forskningen, som gjenstand for behandling tilhører museets driftsavdeling og forvaltningen", "Som kilde er det interessant for sin alder, som gjenstand for behandling er det interessant for sin tilstand", "Som kilde brukes det i publikasjoner, som gjenstand for behandling brukes det i undervisning av nye konservatorer"],
      explanation: "De to synene kolliderer i praksis så snart et inngrep fjerner noe som kunne vært lest, og det er derfor dokumentasjonen er så avgjørende. De andre alternativene beskriver arbeidsdeling og bruksmåter, ikke to måter å forstå objektet på.",
    },
    {
      question: "Hvorfor er dokumentasjonen kalt konserveringens mottrekk mot sin egen de-kontekstualisering?",
      options: ["Fordi den bevarer kunnskapen om tilstand og begrunnelse selv når objektet endres, slik proveniens og utgravingsrapport gjør i nabofagene", "Fordi den gjør det mulig å reversere inngrepet fysisk dersom en senere konservator ønsker å gjøre om på behandlingen", "Fordi den sikrer at objektet kan gjenfinnes i magasinet og knyttes til riktig katalogpost i museets system", "Fordi den viser publikum hva som er original overflate og hva som er tilføyd senere i objektets historie"],
      explanation: "Dokumentasjonen bevarer det som ellers ville forsvunnet i behandlingen — tilstanden før og grunnen til valget — og gjør inngrepet til et faglig argument andre kan vurdere. Den er ikke i seg selv det som gjør et inngrep fysisk reversibelt, og gjenfinning og formidling er andre funksjoner.",
    },
    {
      question: "Hva innebærer avveiningen mellom bevaring og tilgjengeliggjøring?",
      options: ["At hensynet til at objektet skal finnes i framtiden, må veies mot at noen skal kunne se og undersøke det nå", "At museet må velge mellom å bruke ressurser på magasinene og å bruke dem på utstillingene sine", "At digitale kopier gjør det mulig å vise fram objekter som er for skjøre til å tåle håndtering og transport", "At de mest verdifulle objektene som regel er de som tåler minst, og derfor sjelden kan stilles ut"],
      explanation: "Avveiningen forutsetter et syn på hva samlingen er til for, og er dermed faglig og ikke bare praktisk: lys, håndtering og transport koster i bevaring og betaler i tilgang. De tre andre svarene beskriver følger og løsninger, ikke selve avveiningen.",
    },
    {
      question: "Hva vil det si at faggrensen mellom humaniora og naturvitenskap er en beslutning?",
      options: ["At skillet er trukket av mennesker med bestemte hensikter, og at det derfor kan vurderes og ikke bare beskrives", "At skillet er tilfeldig og kunne like gjerne vært trukket et helt annet sted, uten at noe hadde vært annerledes", "At skillet fastsettes av universitetenes ledelse når nye fag skal plasseres i en fakultetsstruktur", "At skillet endres hver gang et nytt fag oppstår som ikke passer inn i den inndelingen som gjaldt før"],
      explanation: "At noe er besluttet, betyr ikke at det er tilfeldig: grensen skiller ulike spørsmål og ulike krav til belegg, og grunnene kan veies. Det er den veiingen avgrensningsoppgavens tredje ledd ber om, og den forutsetter verken vilkårlighet eller administrative vedtak.",
    },
    {
      question: "Hvorfor er konserveringen et godt eksempel i avgrensningsoppgaven?",
      options: ["Fordi faget passer dårlig i inndelingen, og det er en opplysning om kategoriene snarere enn om faget", "Fordi faget er det yngste av de tre og derfor best viser hvordan nye fag plasseres i den etablerte inndelingen", "Fordi faget har flest tilknytningspunkter til andre fag og derfor gir flest eksempler å skrive om", "Fordi faget er det eneste i emnet som uttrykkelig omtaler seg selv som humanistisk i sin egen faglitteratur"],
      explanation: "Et grensetilfelle prøver kategoriene, og å vurdere selve inndelingen er nettopp hva sjangerens tredje ledd ber om. Fagets alder, antall kontaktflater og selvbeskrivelse er ikke det som gjør det egnet.",
    },
    {
      question: "Hva er en vanlig svakhet i besvarelser på avgrensningsoppgaven?",
      options: ["At kandidaten setter opp to spalter og fyller dem, men aldri kommer til vurderingen av selve inndelingen", "At kandidaten vurderer inndelingen uten først å ha definert humaniora, slik at drøftingen mangler grunnlag", "At kandidaten bruker for mange eksempler fra ett enkelt fag, slik at framstillingen blir skjev", "At kandidaten definerer humaniora med en annen avsender enn den som brukes i pensum"],
      explanation: "Tredje ledd er sjangerens hjerte og også det som krever mest, og en tospaltet oversikt er derfor et halvferdig svar. De andre problemene kan forekomme, men de er ikke sjangerens karakteristiske svakhet.",
    },
    {
      question: "Hva menes med at konserveringen rommer mange tilnærminger?",
      options: ["At faget rommer flere forsvarlige syn på hva et objekt er, og dermed på hva et forsvarlig inngrep er", "At faget bruker et bredt utvalg tekniske metoder, tilpasset materialet i det enkelte objektet", "At faget utøves ulikt i ulike land, avhengig av hvilke tradisjoner og regelverk som gjelder der", "At faget omfatter alt fra forebyggende bevaring av hele samlinger til behandling av enkeltobjekter"],
      explanation: "Flertallsformen er en faglig opplysning: tilnærmingene er ikke uenige om hva et materiale består av, men om hva et objekt er. Metodebredde, landforskjeller og arbeidsområder finnes også, men de er ikke det Hölling framhever med uttrykket.",
    },
  ],
  'exfac03-hark-6-1': [
    {
      question: "Hva omfatter digitalisering som prosess, forstått faglig?",
      options: ["Å lage en maskinlesbar representasjon av noe fysisk, medregnet utvalget av hva som skal med og beskrivelsen som gjør det mulig å finne", "Å lage en representasjon som i alle henseender kan tre i stedet for originalen, slik at gjenstanden ikke lenger må oppbevares", "Å skanne dokumentet eller gjenstanden og legge filene ut på nett, slik at materialet blir tilgjengelig for den som vil se det", "Å overføre en samling fra ett oppbevaringssted til et annet, uten at innholdet i samlingen endres underveis"],
      explanation: "Faglig omfatter digitalisering også utvalget og beskrivelsen, ikke bare selve skanningen — et objekt ingen finner, er i praksis ikke tilgjengelig. Å redusere det til «skanne og legge ut» er dagligtalens forståelse. At gjengivelsen kan erstatte originalen fullt ut, er galt: en representasjon har bare de egenskapene noen valgte å gjengi.",
    },
    {
      question: "Hva er forskjellen på et skannet bilde og maskinlesbar tekst?",
      options: ["I bildet ser maskinen en flate med lyse og mørke felter, mens den maskinlesbare teksten består av tegn som kan telles og søkes i", "Bildet har lavere oppløsning enn den maskinlesbare teksten, og gjengir derfor færre detaljer fra originalsiden", "Bildet er en fullstendig kopi av hele siden, mens den maskinlesbare teksten bare gjengir et utdrag av det som står der", "Bildet viser hele siden slik den ser ut, mens den maskinlesbare teksten bare gjengir de delene av siden som er trykt og ikke håndskrevet"],
      explanation: "Forskjellen gjelder hva maskinen kan behandle, ikke hvor godt noe ser ut. Den avgjør hvilke spørsmål som lar seg stille: i et bildearkiv finner du fram til noe du vet finnes, i maskinlesbar tekst kan du finne noe du ikke visste om. Oppløsning er et annet spørsmål og skiller ikke de to.",
    },
    {
      question: "Hva kjennetegner et korpus?",
      options: ["En avgrenset mengde tekster gjort maskinlesbar og søkbar, samlet for å kunne undersøkes som helhet", "Alle tekster som finnes på et gitt språk fra en bestemt periode, uavhengig av om de er bevart eller digitalisert", "En samling håndskrifter som er bevart fra ett bestemt arkiv eller ett bestemt miljø", "En database over hvilke bøker et bibliotek eier, med opplysninger om utgivelsesår, forfatter og hvor de står i hyllene"],
      explanation: "Avgrensningen er en del av redskapet: et korpus er samlet for å undersøkes samlet, og grensene er derfor ikke en tilfeldighet. Korpuset er ikke språket — det er de tekstene som faktisk er kommet med, og den forskjellen avgjør hva en undersøkelse kan hevde.",
    },
    {
      question: "Hva skiller tilgjengeliggjøring fra bevaring som formål?",
      options: ["Tilgjengeliggjøring måler nytten i faktisk bruk, mens bevaring måler den i at innholdet overlever", "Tilgjengeliggjøring gjelder digitalt materiale, mens bevaring bare gjelder de fysiske gjenstandene i magasinet", "Tilgjengeliggjøring er i praksis gratis når materialet er skannet, mens bevaring koster", "Tilgjengeliggjøring er en oppgave for formidlingsavdelingen, mens bevaring hører inn under konservatorene og deres faglige ansvar"],
      explanation: "De to formålene gir ulike prioriteringer og dermed ulike samlinger på nett: bevaring skyver det skjøre fram, tilgjengeliggjøring det etterspurte. Skillet går på hva som måles som nytte, ikke på hvilken avdeling som gjør arbeidet eller på om materialet er digitalt.",
    },
    {
      question: "Hvilken skjevhet gir en digitaliseringsrekkefølge som styres av bevaringshensyn?",
      options: ["Det ødelagte og skjøre blir overrepresentert på nett, mens velbevart materiale blir liggende", "Det mest etterspurte materialet kommer først, slik at forskningen som allerede er i gang, får drahjelp mens nye spørsmål må vente", "Ingen nevneverdig skjevhet, siden prioriteringen følger av et faglig hensyn og ikke av hva publikum tilfeldigvis etterspør", "Materiale fra de siste tiårene blir overrepresentert, fordi det er i best stand og dermed enklest å håndtere i en skanner"],
      explanation: "Bevaringshensyn prioriterer det som er i fare, og gir derfor en nettsamling skjev mot det skjøre. At det etterspurte kommer først, er skjevheten tilgjengeliggjøring gir. Og at et hensyn er faglig, fjerner ikke skjevheten — det forklarer den.",
    },
    {
      question: "Hva menes med at utvalget virker som et forskningspremiss?",
      options: ["At det som er tilgjengelig, blir brukt og sitert, slik at feltets bilde av fortiden formes av rekkefølgen", "At forskere bare har lov til å bruke kilder som er digitalisert, siden de øvrige ikke lar seg vise til på en etterprøvbar måte", "At forskningsrådene og de som bevilger midler, bestemmer hva som blir digitalisert", "At et utvalg alltid må trekkes tilfeldig for at undersøkelsen skal være gyldig, slik man gjør i statistiske undersøkelser"],
      explanation: "Mekanismen er treg og virksom: det tilgjengelige blir undersøkt, sitert og bygget videre på, og etter noen år ser feltet ut som om det handler om nettopp de kildene. Ingen forbyr andre kilder, og et digitaliseringsutvalg er ikke en statistisk trekning.",
    },
    {
      question: "Hvorfor er et utvalg som følger praktiske hensyn, likevel ikke tilfeldig?",
      options: ["Fordi praktiske hensyn er systematiske og favoriserer det som er i god stand, katalogisert fra før og fritt for rettighetsspørsmål", "Fordi det alltid finnes en skjult faglig begrunnelse bak enhver praktisk avgjørelse, også når den som tar den, ikke ser den", "Fordi praktiske hensyn varierer fra institusjon til institusjon, og variasjon er det motsatte av tilfeldighet i statistisk forstand", "Fordi enkelte deler av materialet bevisst holdes tilbake av institusjonen som forvalter det, og derfor aldri blir lagt ut"],
      explanation: "Praktiske hensyn peker konsekvent samme vei, og derfor blir resultatet systematisk skjevt uten at noen har bestemt det. Nettopp fordi ingen har holdt noe tilbake, er skjevheten vanskelig å få øye på — den ser ut som fravær av valg.",
    },
    {
      question: "Hva er et grafisk grensesnitt, i denne sammenhengen?",
      options: ["Den formen samlingen gjøres tilgjengelig i — siden med søkefelt, treffliste og bilder", "Den delen av en samling som er fotografert og lagt ut, i motsetning til den delen som bare finnes som tekstposter uten bilde", "Selve samlingen slik den er registrert i basen, med alle gjenstander og opplysninger institusjonen forvalter", "Det tekniske formatet filene er lagret i, som avgjør hvilke programmer som kan åpne dem og hvor mye plass de tar"],
      explanation: "Grensesnittet er vinduet, ikke samlingen: det bestemmer hva som kan søkes på, hvordan treff sorteres og hva som vises først. To grensesnitt til samme materiale kan gi to forskere ulike inntrykk av hva samlingen inneholder. Filformat er et annet spørsmål.",
    },
    {
      question: "Hva betyr det at et søk finner det som er beskrevet, og ikke det som finnes?",
      options: ["At null treff kan skyldes manglende digitalisering, en annen betegnelse eller en feillest avskrift, og ikke at fenomenet var fraværende", "At søkemotoren rangerer treffene etter hvor godt de passer, slik at noe relevant kan havne så langt ned at ingen ser det", "At bare tekst lar seg søke i, mens bilder må gjennomgås manuelt av den som leter etter noe bestemt i materialet", "At man må kjenne katalogens nøyaktige nummersystem for å kunne finne fram til en bestemt gjenstand i en stor samling"],
      explanation: "Søket arbeider mot de registrerte opplysningene, så fravær av treff er tvetydig. Dette er den vanligste feilslutningen i digitalt arbeid, og den er beslektet med den som behandles i frekvenskapitlet. Rangering er et reelt, men annet problem.",
    },
    {
      question: "Hvilken rolle spiller de registrerte opplysningene om et objekt?",
      options: ["De er det et søk arbeider mot, og de er samtidig en kilde til hva samlingens folk mente var verdt å registrere", "De er en nøytral gjengivelse av gjenstandens egenskaper, laget slik at senere brukere slipper å tolke", "De brukes bare internt av museet, som et praktisk redskap for å holde orden på egen samling", "De erstatter behovet for å oppbevare gjenstanden fysisk, siden alle opplysninger om den nå finnes registrert i basen"],
      explanation: "Opplysningene er både redskap og kilde: de gjør gjenstanden søkbar, og de forteller hva som ble ansett som vesentlig. De er valgt av noen, med et formål, og er derfor ikke nøytrale — det poenget bæres videre i kapitlet om museer og samlinger.",
    },
    {
      question: "Hva er kjernen i posisjonen om at digitalisering er en nøytral overføring?",
      options: ["At innholdet ikke endres av å skifte medium, og at en side er den samme siden på skjerm som i en protokoll", "At digitalisering utføres av teknisk personale uten faglige interesser, og at resultatet derfor ikke bærer preg av faglige vurderinger", "At alle samlinger til slutt vil bli digitalisert, slik at utvalget bare er et spørsmål om tid", "At den digitale gjengivelsen er så nøyaktig at ingen forskjell lenger kan påvises mellom den og originalen, uansett hvilket spørsmål man stiller"],
      explanation: "Posisjonen handler om at innholdet består gjennom mediebyttet, og den er sterkest for materiale som allerede er tekst og gjengis fullstendig. Den hviler ikke på hvem som utfører arbeidet, og den påstår ikke at gjengivelsen er identisk med originalen på alle punkter.",
    },
    {
      question: "Hva er kjernen i posisjonen om at digitalisering er et redaksjonelt inngrep?",
      options: ["At digitaliseringen innebærer valg om hva som tas med, hvordan det beskrives og hvordan treff sorteres, og at valgene er usynlige for brukeren", "At institusjonene bevisst holder tilbake materiale som er ubehagelig for dem selv, og lar det ligge udigitalisert så lenge som mulig", "At tekster uunngåelig endres når de skrives av, slik at den digitale versjonen avviker noe fra originalen uten at leseren merker det", "At en redaktør må godkjenne materialet før det publiseres, slik at det som legges ut, alltid har gjennomgått en faglig kontroll"],
      explanation: "Posisjonen handler om valg som ligner en redaktørs og som brukeren ikke ser — ikke om bevisst tilbakeholdelse eller om en godkjenningsordning. Den er sterkest for store samlinger som møtes gjennom et søkefelt, der utvalget og sorteringen er usynlige.",
    },
    {
      question: "Hvordan bør et sterkt svar bruke aksen nøytral overføring mot redaksjonelt inngrep?",
      options: ["Ved å si for hvilket materiale og hvilket spørsmål hver av posisjonene holder, i stedet for å velge én av dem", "Ved å slå fast at digitalisering alltid er et inngrep, siden ethvert utvalg innebærer en vurdering", "Ved å veie argumentene mot hverandre og telle hvilken av sidene som har flest for seg", "Ved å vise til at spørsmålet er uavklart i faglitteraturen, og at det derfor ikke er mulig å ta stilling til det i en besvarelse"],
      explanation: "Betingede landinger som sier hva det kommer an på, viser vurderingsevne — den egenskapen karakterbeskrivelsen faktisk måler. Å slå fast én posisjon uten forbehold er svakere, og å nekte å ta stilling fordi spørsmålet er åpent, er ikke en drøfting.",
    },
    {
      question: "Hva vil det si at digitalisering også er politikk?",
      options: ["At noen bevilger, prioriterer og setter rekkefølgen, slik at hva som blir digitalisert er et spørsmål om mandat og midler", "At politiske myndigheter bruker digitaliserte samlinger til å fremme bestemte fortellinger om nasjonen og dens fortid", "At teknologien avgjør hva som er mulig å digitalisere, og dermed også hva som faktisk blir gjort", "At institusjonene må søke om tillatelse fra offentlige organer før de kan legge ut materiale fra egne samlinger på nett"],
      explanation: "Poenget er at prioriteringen har en avsender: to arkiver med samme utstyr kan ende opp med helt ulike samlinger på nett. Teknologien avgjør hva som er mulig, mens politikken avgjør hva som blir gjort — og det er den siste som gjør temaet til humaniora.",
    },
    {
      question: "Når behandles digitalisering som et faghistorisk og ikke et teknisk spørsmål?",
      options: ["Når framstillingen sier hvilke spørsmål som ble mulige eller umulige å stille, og ikke bare hva som ble gjort", "Når framstillingen setter digitaliseringen inn i en kronologi over teknologiske nyvinninger fra mikrofilmen og fram til i dag", "Når framstillingen bruker faglige begreper og viser til pensumlitteraturen underveis", "Når den knytter digitaliseringsarbeidet til navngitte forskere og institusjoner, slik at leseren kan se hvem som sto bak hvilke prosjekter"],
      explanation: "Prøven er enkel: sier avsnittet noe om spørsmål, eller bare om arbeid? En teknisk korrekt framstilling kan være helt uten faglig uttelling fordi den svarer på noe annet. Fagbegreper og navn gjør ikke i seg selv en framstilling faghistorisk.",
    },
    {
      question: "Hva kjennetegner det digitale som pynt i stedet for som metode?",
      options: ["At den digitale undersøkelsen står i teksten uten at noe i resten av den hviler på den", "At kandidaten bruker for mye plass på å beskrive grensesnittet og for lite på selve fenomenet som undersøkes", "At den digitale delen presenteres med farger og fremhevinger som ikke tilfører analysen noe faglig", "At den digitale delen plasseres til slutt i besvarelsen i stedet for tidlig, slik at leseren møter den etter at konklusjonen er trukket"],
      explanation: "Prøven er å stryke det digitale leddet og lese teksten på nytt: står konklusjonen uendret, var det pynt. Å bruke plassen på verktøyet er en beslektet, men annen svakhet, og hvor i teksten leddet står, avgjør ingenting.",
    },
    {
      question: "Hvilken status har Nasjonalbibliotekets DH-lab i dette emnet?",
      options: ["Et verktøy som gjør bestemte undersøkelser mulige, ikke en avsender med en faglig posisjon", "Pensumlitteratur på linje med de øvrige bidragene emnet bygger på, og dermed noe det kan gjøres rede for", "En digitalt tilgjengelig samling som en gruppe kan velge å stille sitt eget åpne spørsmål til i mappa", "En metode utviklet innenfor digital humaniora, med en egen teori om forholdet mellom tekst og mening som kan drøftes"],
      explanation: "Verktøy bærer ingen teori og har ingen posisjon å gjøre rede for. Boka beskriver derfor hva metodene gjør — hva som telles og hva som vises — og ikke hvilke knapper som finnes. Et svar som forklarer verktøyet grundig og fenomenet tynt, har prioritert feil.",
    },
    {
      question: "Hvilket begrep bærer Ingvarsson i dette emnet?",
      options: ["Digital epistemologi — spørsmålet om hva digitale representasjoner gjør med kunnskapen om objektet", "Objektet omformet til et numerisk tall mellom 0 og 1, vist gjennom et grensesnitt", "Korpusskjevhet, altså at digitaliserte tekstsamlinger ikke speiler det som fantes", "Konserveringsfagets egenart, plassert mellom humaniora og naturvitenskapen og mellom tradisjon og fornying"],
      explanation: "Ingvarsson bærer digital epistemologi og påstanden om at digitaliseringen løsriver samlingen ytterligere fra kontekstene som skapte den. Påstanden om objektet som numerisk verdi hører til Bastiansen, og konserveringsfagets egenart til Hölling.",
    },
    {
      question: "Hva sier Bastiansens påstand om samlingsobjektet?",
      options: ["At det omformes fra en fysisk gjenstand til et numerisk tall mellom 0 og 1, og at det er dette som gjøres tilgjengelig", "At det mister sin verdi som kilde når det bare kan studeres gjennom en skjerm i stedet for i magasinet", "At det løsrives ytterligere fra de kontekstene som i sin tid skapte samlingen", "At det får en ny betydning i kraft av å bli sett av flere, slik at digitaliseringen utvider hva gjenstanden kan bety"],
      explanation: "Bastiansens poeng gjelder objektet som forvandles, og at det er den beregnede gjengivelsen — ikke den fysiske samlingen — som tilgjengeliggjøres. Påstanden om løsrivelse fra kontekst hører til Ingvarsson, og de to skal holdes fra hverandre for å gjøre hvert sitt arbeid.",
    },
    {
      question: "Hvilken status har kunstig intelligens i faglig arbeid i dette emnets arkiv?",
      options: ["Det er nevnt som seminarinnhold i H2024 og er ikke prøvd i noen oppgavetekst", "Det er et sentralt tema i to av oppgavene i det ene settet vi har fra dagens form, og bærer derfor et eget kapittel", "Det er ikke nevnt noe sted i arkivet, verken i oppgavetekstene eller i de fire sensorveiledningene", "Det er beskrevet i en av sensorveiledningene som et krav til besvarelsen i den digitale delen av oppgaven"],
      explanation: "Temaet er nevnt som noe som ble diskutert i seminarene, med universitetets egen tjeneste, men ingen av oppgavetekstene prøver det. Derfor står det i én kort boks og bærer ikke eget kapittel — og det er verken fraværende fra arkivet eller et krav noe sted.",
    },
  ],
  'exfac03-hark-6-2': [
    {
      question: "Hva er et N-gram?",
      options: ["En sammenhengende følge av N ord, som kan telles i et tekstmateriale", "Et ord som forekommer minst N ganger i det materialet undersøkelsen bygger på, og som derfor regnes som hyppig nok til å analyseres", "En graf som viser N ulike ord samtidig, slik at de kan sammenlignes over tid", "Et mål på hvor mange tekster i korpuset som inneholder ordet, uttrykt som en andel av det samlede antallet tekster fra året"],
      explanation: "Fagordet betegner lengden på ordfølgen: «kaffe» er et 1-gram, «sterk kaffe» et 2-gram. Lengden avgjør hva du teller — ett ord fanger alle sammenhengene ordet står i, mens en lengre sekvens fanger et bestemt uttrykk.",
    },
    {
      question: "Hva viser en frekvensgraf over en ordfølge?",
      options: ["Hvor ofte ordfølgen forekommer i det digitaliserte materialet, fordelt over tid", "Hvordan betydningen av ordfølgen har endret seg gjennom perioden, målt ved hvilke sammenhenger den opptrer i", "Hvor mange ulike forfattere som tok ordfølgen i bruk i løpet av perioden", "Hvor utbredt ordfølgen var i språket som helhet, siden materialet er stort nok til å regnes som representativt for perioden"],
      explanation: "Grafen viser forekomster i det materialet som er med, i de årene som er dekket — ikke betydning, ikke språket som helhet. At den skulle vise betydningsendring, er nettopp den fella H2024-veiledningen bruker mest plass på.",
    },
    {
      question: "Hva slags mål er frekvens?",
      options: ["Et mengdemål: det sier hvor mye, ikke hva", "Et betydningsmål som viser hvilken vekt et uttrykk hadde i samtidens ordskifte, og dermed hvor viktig fenomenet var", "Et mål på hvor sikkert et funn er, gitt hvor mye materiale det bygger på", "Et relativt mål som alltid uttrykkes som andel av tekstmengden, slik at ulik dekning mellom år ikke påvirker sammenligningen"],
      explanation: "Frekvens teller forekomster. Styrken er at mengder kan sammenlignes maskinelt og avdekke mønstre ingen leser rekker å se; grensen er at betydning ikke er et mengdemål. Om tallet er absolutt eller relativt, avhenger av hvordan kurven er regnet.",
    },
    {
      question: "Hvorfor er forskjellen mellom absolutt antall og andel av korpuset viktig?",
      options: ["Fordi et absolutt antall stiger når det er digitalisert mer tekst fra perioden, selv om bruken er uendret", "Fordi andeler alltid er mer nøyaktige enn absolutte tall og derfor bør brukes i all forskning", "Fordi absolutte tall ikke lar seg sammenligne mellom ulike språk og korpus", "Fordi bare andeler kan brukes til å si noe om betydning, mens absolutte antall bare sier noe om hvor mange tekster som er bevart fra perioden"],
      explanation: "Hovedregelen følger av dette: en kurve over andeler kan sammenlignes over tid, mens absolutte antall bare kan det når tekstmengden er noenlunde jevn — og det er den nesten aldri i historisk materiale. Ingen av delene sier noe om betydning.",
    },
    {
      question: "Hva er et frekvensfall, faglig sett?",
      options: ["Et funn som skal forklares, og som kan skyldes både språk, materiale og faktiske endringer", "Et tegn på at fenomenet ordet viser til, gikk tilbake i den perioden kurven dekker", "En feil i tellingen, som skyldes at materialet er ujevnt avskrevet i de eldste årgangene", "En indikasjon på at korpuset ikke dekker perioden godt nok til å brukes"],
      explanation: "Fallet er en observasjon, ikke en konklusjon. Det kan skyldes at et annet ord tok over, at teksttypene forsvant ut av materialet, at stavemåten endret seg, eller at fenomenet faktisk gikk tilbake. Å behandle det som et bevis er å hoppe over analysen.",
    },
    {
      question: "Hva er forskjellen på en ordform og et ord?",
      options: ["Ordformen er tegnrekken slik den står, mens ordet er enheten av form og betydning vi mener når vi sier at det er samme ord", "Ordformen er ordet slik det uttales, mens ordet er den skriftlige gjengivelsen som finnes i det digitaliserte materialet", "Ordformen er et fagord for stavemåte, mens ordet er den betydningen stavemåten viser til i den enkelte teksten", "Ordformen er ordet uten bøyningsendelser, mens ordet er hele det bøyde uttrykket slik det står i setningen"],
      explanation: "Tellingen arbeider på ordformer og vet ikke at «blad» og «bladene» hører sammen, med mindre noen har bygget den kunnskapen inn. Derfor kan et brått fall i en kurve være en rettskrivingsendring — og rettskrivingsendringer kommer på bestemte år.",
    },
    {
      question: "Hvorfor er det et problem for frekvenstelling at samme ordform kan ha flere betydninger?",
      options: ["Fordi maskinen bare ser tegnrekken, og derfor teller ulike betydninger som samme forekomst", "Fordi flertydige ord forekommer sjeldnere enn entydige, og derfor gir kurver med større tilfeldig variasjon fra år til år", "Fordi ordbøkene er uenige om hvilke betydninger ordet har hatt gjennom perioden", "Fordi den som leser kurven, må kjenne alle betydningene ordet har hatt gjennom hele perioden, for å kunne tolke utslagene riktig"],
      explanation: "Flertydighet er et trekk ved språket, ikke en svakhet ved verktøyet, og den er grunnen til at frekvens og betydning er to ting. Stiger kurven for et flertydig ord, kan det skyldes hvilken som helst av betydningene — tellingen skiller dem ikke.",
    },
    {
      question: "Hva er betydningsendring?",
      options: ["At innholdet i et ord forskyver seg over tid eller mellom steder — hva det viser til, og hvilken vurdering som ligger i det", "At et ord tas i bruk av flere mennesker enn før, slik at det blir vanligere i skrift og tale", "At et ord får en ny stavemåte, slik at det ser ut som et annet ord enn det egentlig er, og dermed telles for seg", "At et ord erstattes av et annet uttrykk med samme innhold, slik at det gamle gradvis går ut av bruk"],
      explanation: "Betydningsendring gjelder innholdet, ikke hyppigheten. Et ord kan bli langt hyppigere uten å skifte innhold, og skifte innhold fullstendig uten å bli hyppigere. Å erstattes av et annet uttrykk er en bruksendring, ikke en betydningsendring i seg selv.",
    },
    {
      question: "En kandidat skriver: «Grafen viser at begrepet skiftet innhold rundt 1950.» Hvilken feil er dette?",
      options: ["Å lese frekvens som betydningsendring, altså å la kurven bære en påstand den ikke kan bære", "Å la det enkle redegjørelsesleddet spise oppgaven, slik at drøftingen aldri kommer i gang", "Å bruke et fagbegrep som etikett uten å aktivere det i den analysen som følger", "Å framstille en digital samling som om man har stått foran den"],
      explanation: "Kurven kan vise at ordet ble hyppigere eller sjeldnere. Hyppigheten kan være et spor etter en betydningsendring, men da er sporet noe som skal undersøkes videre med en konkordans — ikke noe grafen har vist.",
    },
    {
      question: "Hvilke tre forklaringer har et utslag i en frekvenskurve alltid?",
      options: ["Betydningsendring, korpusendring og faktisk endring i det ordet viser til", "Målefeil, tilfeldig variasjon og systematisk skjevhet i det materialet undersøkelsen bygger på", "Språklig endring, politisk endring og økonomisk endring i det samfunnet tekstene ble skrevet i", "Endring i skrivemåte, endring i sjanger og endring i hvilke institusjoner som utga tekstene i den aktuelle perioden"],
      explanation: "Kurven alene skiller ikke mellom de tre, og et sterkt svar setter dem opp og sier hvilken undersøkelse som prøver hver av dem. Målefeil og tilfeldig variasjon er reelle fenomener, men de er ikke den faglige oppstillingen dette kapitlet bygger på.",
    },
    {
      question: "Hvilken av de tre forklaringene bør kontrolleres først, og hvorfor?",
      options: ["Korpusendringen, fordi den er den eneste som kan avvises uten å hente nye kilder", "Betydningsendringen, fordi den er den mest interessante og derfor bør undersøkes mens materialet er ferskt i minnet", "Den faktiske endringen, siden den som regel viser seg å være riktig", "Korpusendringen, fordi den alltid er den riktige forklaringen når kurven er regnet i absolutte tall og materialet vokser gjennom perioden"],
      explanation: "Korpusendringen sjekkes først fordi den kan avvises billig — se om kurven er regnet som andel, og om urelaterte ord beveger seg likt. Den er ikke alltid riktig, men den er den eneste som ikke handler om historie i det hele tatt.",
    },
    {
      question: "Hvordan prøves forklaringen om betydningsendring?",
      options: ["Med en konkordansanalyse på begge sider av utslaget, der man ser om ordnaboene skifter", "Ved å sammenligne kurven med kurver for andre ord fra samme periode, og se om de beveger seg i takt", "Ved å slå opp ordet i en ordbok som er utgitt i den aktuelle perioden", "Ved å telle hvor mange ulike forfattere som bruker ordet før og etter utslaget, siden spredning i bruk tyder på nytt innhold"],
      explanation: "Konkordansen viser ordet med sine naboer, og skifter naboene, har bruksområdet forskjøvet seg. Å sammenligne med andre ords kurver prøver derimot korpusforklaringen, og en ordbok forteller om normert betydning, ikke om bruken i materialet.",
    },
    {
      question: "Hvorfor er forklaringen om faktisk endring den vanskeligste å prøve?",
      options: ["Fordi den krever minst én kilde utenfor det digitaliserte tekstmaterialet, og derfor ofte blir stående som en mulighet", "Fordi den forutsetter at man kjenner hele periodens historie i detalj før undersøkelsen settes i gang", "Fordi den sjelden viser seg å være den riktige forklaringen når undersøkelsen først er gjennomført", "Fordi den bare kan prøves ved å sammenligne flere korpus med hverandre, og fordi de færreste korpus er bygget slik at de lar seg sammenligne"],
      explanation: "Kurven kan aldri vise den alene: den handler om fenomenet selv, mens de to andre handler om språket og om materialet. Det er ingen svakhet ved forklaringen at den ofte blir stående som en mulighet — det er en ærlig beskrivelse av hva undersøkelsen bærer.",
    },
    {
      question: "Hva forteller formen på et kurveutslag om hvilken forklaring som er nærliggende?",
      options: ["Brå enkeltårshopp peker mot materialet eller en hendelse, mens trege og jevne bevegelser peker mot språk eller samfunn", "Brå hopp peker mot betydningsendring, siden språklige skift som regel utløses av en enkelt hendelse som endrer bruken", "Formen på utslaget sier ingenting om årsaken, og kan derfor ikke brukes til å rangere forklaringene", "Jevne bevegelser peker mot materialet, mens brå hopp peker mot at fenomenet faktisk endret seg raskt"],
      explanation: "Formen beviser ingenting, men den forteller hvilken kontroll du bør gjøre først. Betydningsendringer er trege, så et enkeltårshopp med umiddelbart fall tilbake er sjelden et betydningsskift — det er oftere én publikasjon eller én debatt.",
    },
    {
      question: "Hva er fjernlesning?",
      options: ["Å undersøke mange tekster samlet, ovenfra, for å finne mønstre som ikke er synlige i enkelttekster", "Å lese digitalisert materiale på skjerm i stedet for å oppsøke originalene der de oppbevares", "Å lese en tekst raskt og uten å tolke den, for å skaffe seg oversikt over innholdet", "Å undersøke tekster fra en annen kultur eller en fjern periode, der forskeren mangler den forforståelsen som kreves for nærlesning"],
      explanation: "Fjernlesningens styrke er rekkevidden: den kan dekke mer materiale enn noen kan lese, og finne mønstre ingen leter etter. Prisen er at den ikke leser noen av tekstene. Begrepet handler om metoden, ikke om skjermen eller om avstanden i tid.",
    },
    {
      question: "Hva er nærlesning?",
      options: ["Å lese én tekst eller et lite utvalg tett, med oppmerksomhet mot ordvalg, sammenheng og hva teksten forutsetter", "Å lese en tekst flere ganger for å sikre at ingen opplysninger i den blir oversett i den videre analysen", "Å lese originalteksten framfor en gjengivelse, for å komme nærmest mulig den opprinnelige kilden", "Å undersøke en tekst sammen med de tekstene den viser til, slik at kildegrunnlaget framgår"],
      explanation: "Nærlesning er hermeneutikkens arbeidsmåte, og den kan fange mening, ladning og hensikt. Grensen er at den ikke kan si om det den finner, er representativt — og nettopp det er tjenesten fjernlesningen kan gjøre for den.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom nærlesning og fjernlesning?",
      options: ["Nærlesning gir mening uten omfang, mens fjernlesning gir omfang uten mening", "Nærlesning er en humanistisk metode, mens fjernlesning henter framgangsmåten sin fra naturvitenskapelig statistikk og derfor hører hjemme et annet sted", "Nærlesning krever tilgang til originalteksten, mens fjernlesning kan gjøres på en digital gjengivelse", "Nærlesning brukes på eldre materiale og fjernlesning på nyere, siden bare nyere materiale er digitalisert i stort nok omfang til å telles"],
      explanation: "Fordi de to har hvert sitt blindfelt, kan de si noe om hverandre — og det er nettopp den sammenligningen mappeoppgaven ber om. Fjernlesning er en humanistisk metode brukt på humanistisk materiale, og begge kan gjøres på gjengivelser.",
    },
    {
      question: "Hva er en konkordans?",
      options: ["En oppstilling som viser hver forekomst av et ord sammen med ordene rundt det", "En liste over alle forekomster av et ord, med årstall og kildeangivelse, sortert kronologisk slik at utviklingen kan følges", "En sammenligning av to korpus, som viser hvilket av dem som er størst", "Et mål på hvor godt to uavhengige lesere er enige om hvordan en tekst skal tolkes, brukt for å prøve tolkningens holdbarhet"],
      explanation: "Konkordansen svarer på i hvilke sammenhenger ordet står, mens frekvenstellingen svarer på hvor ofte. Det er konkordansen, ikke kurven, som kan gi grunnlag for å si noe om betydning — og den er metodens svar på frekvensfella.",
    },
    {
      question: "Hva er tanken bak begrepet ordnaboer?",
      options: ["At et ords mening i stor grad bestemmes av hvilke ord det står sammen med", "At ord som opptrer nær hverandre i en tekst, som regel stammer fra samme kilde eller samme forfatterskap", "At naboordene avgjør hvilken ordklasse ordet tilhører i den enkelte setningen det står i", "At meningen i en tekst dannes av rekkefølgen ordene står i, slik at en omstokking av setningen endrer hva den sier"],
      explanation: "Naboene bærer meningen: står «blad» sammen med «grønt» og «tre», er betydningen én, står det sammen med «redaktør» og «utgave», er den en annen. Tellingen ser ingen av delene. Ordklasse er et grammatisk og ikke et meningsmessig spørsmål her.",
    },
    {
      question: "Hva er korpusskjevhet?",
      options: ["At materialet speiler det som er bevart, valgt ut og gjort maskinlesbart, ikke det som en gang fantes", "At tellingen gir noe ulike tall hver gang den kjøres, fordi materialet stadig utvides", "At et korpus alltid inneholder avskrivningsfeil som forstyrrer tellingen noe i de eldste delene", "At forskeren ubevisst velger søkeord som bekrefter det hun allerede tror, slik at undersøkelsen gir det svaret hun ventet"],
      explanation: "Skjevheten går i kjente retninger: trykt framfor håndskrevet, offentlig framfor privat, det rettighetsfrie framfor det båndlagte. Og den er ikke støy — støy jevner seg ut når materialet vokser, mens skjevheten bare blir mer presist målt.",
    },
    {
      question: "Hva vil det si å behandle en frekvensgraf som en kilde?",
      options: ["Å spørre hvem som har laget den, av hvilket materiale, med hvilken tellemåte og hva som er utelatt", "Å oppgi grafen i litteraturlisten sammen med de øvrige kildene besvarelsen bygger på", "Å bruke grafen som belegg for en påstand i teksten, på linje med andre kilder", "Å sammenligne den med grafer andre forskere har laget over det samme ordet, for å kontrollere at resultatet lar seg gjenskape"],
      explanation: "Grafen er ikke en observasjon av fortiden, men et produkt av et materiale, et utvalg og en tellemåte — altså en gjenstand med tilblivelseshistorie. Og den er laget i dag, av oss, noe som gjør oss ansvarlige for den på en annen måte enn for et arkivdokument.",
    },
    {
      question: "Hva kjennetegner en ekte sammenligning mellom de to lesningene?",
      options: ["At minst ett funn endrer hvordan det andre skal forstås, ikke bare at begge er beskrevet", "At begge lesningene er gjennomført grundig og får omtrent like mye plass i den ferdige besvarelsen", "At de to lesningene ender opp med å gi samme resultat, slik at de bekrefter hverandre", "At den digitale undersøkelsen bekrefter det den tolkende analysen kom fram til, slik at konklusjonen står på to bein"],
      explanation: "Å legge to funn ved siden av hverandre er en sammenstilling; å si hva ett funn gjør med et annet er en sammenligning. Bare sammenligningen er bestilt — og et sprik mellom lesningene er ofte mer interessant enn en bekreftelse.",
    },
    {
      question: "Hva sier H2024-veiledningen om refleksjon over forskjellen mellom metodene?",
      options: ["At studentene ikke forventes å gjøre alt arbeidet, men at en viss refleksjon over forskjellen øker uttellingen", "At refleksjonen er et absolutt krav, og at en besvarelse uten den ikke kan bestå oppgaven", "At refleksjonen er valgfri og ikke inngår i vurderingen av besvarelsen i det hele tatt", "At den bør erstatte den digitale undersøkelsen der studenten ikke har tilgang til de nødvendige verktøyene i løpet av semesteret"],
      explanation: "Dette er et av de få eksplisitte uttellingskriteriene i hele arkivet, og det koster noen få setninger å innfri. Det er verdt å merke seg at det er et uttellingsgrep og ikke en betingelse for å stå.",
    },
    {
      question: "Hvordan bør en besvarelse omtale Nasjonalbibliotekets DH-lab?",
      options: ["Kort, som et verktøy, med plassen brukt på hva metodene gjør og på funnene", "Grundig, siden verktøyet er en del av pensum og kandidaten forventes å kunne gjøre rede for hvordan det er bygget opp", "Ikke i det hele tatt, siden verktøy ikke regnes som pensum og derfor ikke skal nevnes", "Med en beskrivelse av framgangsmåten trinn for trinn, slik at en leser kan gjenta undersøkelsen nøyaktig slik den ble gjennomført"],
      explanation: "Verktøyet skal navngis og undersøkelsen forklares, men verktøyet bærer ingen teori og er ikke pensumlitteratur. En detaljert framstilling av grensesnittet er en bruksanvisning, og den tar plass fra sammenligningen, som er det som gir uttelling.",
    },
  ],
  'exfac03-hark-6-3': [
    {
      question: "Hva er epistemologi?",
      options: ["Læren om hva vi kan vite, hvordan vi får kunnskapen, og hva som gjør at vi kan stole på den", "Læren om hvordan fagene har utviklet seg fra antikken og fram til i dag, og hvilke idealer de har hentet underveis", "Læren om hvordan kunnskap formidles videre til andre og gjøres forståelig", "Læren om hvilke metoder som er gyldige i et fag, og om hvordan faget avgrenser seg"],
      explanation: "Epistemologi spør hva slags kunnskap vi kan ha, gitt måten vi har tilgang til noe på. En metode er en framgangsmåte; epistemologien spør hva framgangsmåten gjør det mulig og umulig å vite. Faghistorie er et beslektet, men annet spørsmål.",
    },
    {
      question: "Hva er digital epistemologi?",
      options: ["Spørsmålet om hva digitale representasjoner gjør med kunnskapen vi kan ha om et objekt eller en samling", "Læren om hvordan digitale verktøy bør brukes forsvarlig i humanistisk forskning", "Studiet av hvordan kunnskap spres og deles på nett, og hvem som når fram med den", "Spørsmålet om hvem som skal ha tilgang til digitaliserte samlinger, og hvilke hensyn som må veies mot hverandre i den avveiningen"],
      explanation: "Begrepet bæres av Ingvarsson og gjelder kunnskapen, ikke tilgangen. Tilgangsspørsmålet er hvem som kan se hva; det epistemologiske er hva den som ser, kan vite. De to har ulike svar: tilgangen blir bedre, mens kunnskapen blir en annen slags kunnskap.",
    },
    {
      question: "Hva sier Ingvarssons kjernepåstand?",
      options: ["At digitaliseringen løsriver samlingen ytterligere fra kontekstene som i sin tid skapte den", "At digitaliseringen gjenoppretter sammenhenger museets egen ordning i sin tid brøt opp, ved å gjøre gjenstandene søkbare på tvers", "At samlingsobjektet blir omformet til en numerisk verdi ved digitaliseringen", "At digitaliseringen er nøytral så lenge opplysningene om konteksten følger med i katalogposten og er tilgjengelige for brukeren"],
      explanation: "Påstanden gjelder konteksten, og ordet «ytterligere» er en del av den. Påstanden om objektet som numerisk verdi hører til Bastiansen, og de to skal holdes fra hverandre for at begge skal gjøre arbeid.",
    },
    {
      question: "Hva gjør ordet «ytterligere» i Ingvarssons påstand?",
      options: ["Det sier at løsrivelsen allerede var i gang, og gjør digitaliseringen til et trinn i en bevegelse", "Det understreker at tapet er større enn man skulle tro, og at digitaliseringen derfor er mer inngripende enn andre endringer i museets praksis", "Det viser at påstanden gjelder alle typer samlinger og ikke bare arkeologiske", "Det markerer at løsrivelsen vil fortsette etter at digitaliseringen er gjennomført, ettersom nye lag stadig legges til mellom bruker og gjenstand"],
      explanation: "Ordet plasserer digitaliseringen i en rekke som begynte da gjenstanden ble tatt opp og ordnet inn i museet. Å lese det som «enda verre» er den vanligste feillesningen — den gjør et gradsspørsmål om til et enten-eller og er dessuten historisk feil.",
    },
    {
      question: "Hva sier Bastiansens påstand om samlingsobjektet?",
      options: ["At det omformes fra et fysisk objekt til et numerisk tall mellom 0 og 1, og at det er dette som tilgjengeliggjøres", "At det mister sin verdi som forskningsobjekt når det bare kan studeres gjennom en skjerm i stedet for i magasinet", "At det løsrives ytterligere fra de kontekstene som i sin tid skapte samlingen, både utenfor og innenfor museet", "At det får utvidet betydning i kraft av å bli sett av flere mennesker enn før"],
      explanation: "Poenget er at det som gjøres tilgjengelig gjennom grensesnittet, er en beregnet gjengivelse og ikke den fysiske samlingen. Påstanden om løsrivelse fra kontekst hører til Ingvarsson, og påstanden er ingen dom over digitalisering.",
    },
    {
      question: "Hva er den viktigste distinksjonen mellom Ingvarsson og Bastiansen?",
      options: ["Ingvarsson sier noe om konteksten som forsvinner, Bastiansen om objektet som forvandles", "Ingvarsson skriver om arkivmateriale, mens Bastiansen skriver om gjenstandssamlinger i museer og om hvordan de fotograferes", "Ingvarsson er kritisk til digitaliseringen av samlinger, mens Bastiansen ser positivt på den", "Ingvarsson beskriver et historisk forløp over lang tid, mens Bastiansen beskriver den tekniske framgangsmåten i selve digitaliseringsarbeidet"],
      explanation: "De to utfyller hverandre og skal ikke slås sammen: gjør du dem til «digitalisering er problematisk», har du to referanser og null poenger. Ingen av dem framsetter en dom — begge beskriver hva digitaliseringen gjør med kunnskapen.",
    },
    {
      question: "Hva er de-kontekstualisering?",
      options: ["At gjenstanden løsrives fra sammenhengen den sto i, for å kunne behandles med presise metoder", "At en gjenstand mister sin betydning fordi den ikke lenger brukes til det den var laget for, og bare finnes som et minne om en tapt praksis", "At konteksten blir feil dokumentert under utgravingen eller registreringen", "At forskeren ser bort fra sammenhengen for å kunne sammenligne gjenstander fra ulike kulturer, og dermed pålegger materialet sine egne kategorier"],
      explanation: "Begrepet er fellesnevneren i alle de tre fagenes vitenskapeliggjøring, og det avgjørende er at det ikke skjer av vanvare: presis undersøkelse krever at objektet kan behandles for seg. Gevinsten er presisjon og sammenlignbarhet, kostnaden er tapte spørsmål.",
    },
    {
      question: "Hvorfor har de-kontekstualiseringen både gevinst og kostnad?",
      options: ["Gevinsten er presisjon, sammenlignbarhet og etterprøvbarhet; kostnaden er at spørsmål som forutsetter sammenhengen, blir umulige", "Gevinsten er at gjenstanden blir tilgjengelig for flere; kostnaden er at den utsettes for slitasje ved håndtering og transport", "Gevinsten er økonomisk, siden arbeidet blir billigere, mens kostnaden er rent faglig og rammer tolkningen", "Gevinsten er at faget får høyere status blant nabofagene; kostnaden er at det mister kontakten med publikum"],
      explanation: "En framstilling som bare ser kostnaden, er ensidig, og en ensidig drøfting er svakere enn en som ser begge deler. En gjenstand i et magasin kan måles, sammenlignes og undersøkes på nytt av andre — det er en reell erkjennelsesmessig gevinst.",
    },
    {
      question: "Hva er funnkonteksten?",
      options: ["Hvor gjenstanden lå, sammen med hva, i hvilket lag og i hvilken orientering", "De opplysningene om gjenstanden som er registrert i katalogen, medregnet funnsted, datering og hvem som fant den", "Det stedet gjenstanden ble funnet, slik det er oppgitt med stedsnavn og kommune i katalogen", "Den perioden gjenstanden stammer fra, bestemt ved sammenligning med tilsvarende gjenstander fra kjente og daterte funn"],
      explanation: "Funnkonteksten er opplysninger om forhold mellom ting, og den finnes bare så lenge ingenting flyttes. Derfor kan den etter opptaket bare eksistere som beskrivelse — og det er her løsrivelsen begynner, lenge før noen digitaliserer noe.",
    },
    {
      question: "Hva er gevinsten ved utgravingsdokumentasjonen?",
      options: ["At sammenhengen kan leses av andre, sammenlignes og prøves på nytt, altså gjøres etterprøvbar", "At gjenstanden kan settes tilbake på nøyaktig samme sted etterpå", "At den erstatter behovet for å ta vare på selve gjenstanden etterpå", "At den gjør det mulig å datere funnet uten å ta prøver av selve gjenstanden, og dermed unngå inngrep i materialet"],
      explanation: "Dokumentasjonen gjør undersøkelsen etterprøvbar på en måte selve funnsituasjonen aldri var. Kostnaden er like presis: bare det noen tenkte på å registrere, er bevart, og spørsmål som først blir mulige med senere metoder, kan ikke stilles.",
    },
    {
      question: "Hva er løsrivelsen innenfor museet?",
      options: ["At gjenstanden ordnes inn i museets eget system og dermed får en ny sammenheng, valgt etter én egenskap", "At gjenstanden flyttes mellom magasin og utstilling så ofte at opplysningene om den kommer på avveie i institusjonens egne registre", "At dokumentasjonen om gjenstanden oppbevares et annet sted enn gjenstanden selv", "At de ansatte som kjente gjenstanden, slutter, slik at kunnskapen om den forsvinner"],
      explanation: "Museets orden er en tolkning: den forutsetter at materiale, periode eller funnsted er det vesentlige, og den gjør noen spørsmål lette og andre tunge. Den digitale katalogen arver som regel denne ordenen og fører den videre inn i søkefeltet.",
    },
    {
      question: "Hva er et objekt, slik begrepet brukes her?",
      options: ["Den fysiske tingen, med egenskaper ingen har valgt — vekt, overflate, slitasje, spor etter behandling", "Den gjenstanden en undersøkelse retter seg mot, uavhengig av om den finnes fysisk eller bare som en digital gjengivelse", "En gjenstand som er registrert i en katalog og gitt sitt eget nummer i museets register", "Den enheten et museum forvalter og fører i sine registre, med et eget nummer"],
      explanation: "Poenget er at objektet har egenskaper ingen har bestemt, mens representasjonen bare har dem noen har valgt å gjengi. For konserveringsfaget er nettopp materialiteten arbeidsfeltet, og det er én grunn til at fagene stiller seg ulikt til digitalisering.",
    },
    {
      question: "Hva er en representasjon?",
      options: ["En gjengivelse som står i stedet for noe annet, laget av noen med bestemte valg", "En gjengivelse som er så nøyaktig at den kan tre i stedet for originalen i all forskning, uansett hvilket spørsmål som stilles", "Et objekt som er valgt ut fordi det er typisk for hele den samlingen det tilhører", "Den beskrivelsen en institusjon gir av samlingen sin utad, i utstillinger, på nettsidene og i årsberetningene sine"],
      explanation: "En representasjon er en egen ting, ikke en gjennomsiktig rute inn til objektet. En kopi later som den er identisk; en representasjon kan undersøkes — hva er med, hva er utelatt, og hvem bestemte det? Spørsmål om materialitet krever fortsatt objektet.",
    },
    {
      question: "Hva er det praktiske utslaget av skillet mellom representasjon og objekt?",
      options: ["En egenskap ingen har fotografert eller registrert, finnes ikke for den som arbeider digitalt — og ingenting forteller at den mangler", "Den digitale gjengivelsen forringes over tid, slik at den må lages på nytt med jevne mellomrom", "Representasjonen er alltid mindre nøyaktig enn objektet, uansett hvilket spørsmål man stiller til den", "Objektet kan bare undersøkes av dem som har adgang til magasinet, mens representasjonen er tilgjengelig for alle"],
      explanation: "Siden det ikke står noe sted hva som ikke er med, ser representasjonen fullstendig ut. Det er derfor det avgjørende grepet i en besvarelse er å si hvilke spørsmål som lar seg stille til en gjengivelse, og hvilke som krever objektet.",
    },
    {
      question: "Hva er den digitale katalogen en representasjon av?",
      options: ["Samlingen, gjengitt etter et bestemt skjema av felter som avgjør hva som er søkbart", "Museets egen forståelse av sin historie, formidlet til publikum gjennom de opplysningene institusjonen velger å publisere", "Gjenstandenes fysiske tilstand, slik konservatorene har vurdert og registrert den ved mottak", "De delene av samlingen som er stilt ut, siden det som ligger i magasin, sjelden fotograferes og registreres like grundig"],
      explanation: "Det søkbare er feltene, ikke gjenstandene, og en egenskap ingen har registrert, finnes i praksis ikke for den som søker. Dermed avgjør registreringspraksis fra tiår tilbake hva som er mulig å undersøke i dag.",
    },
    {
      question: "Hvorfor er søkeresultatet en egen kontekst?",
      options: ["Fordi trefflisten setter gjenstanden sammen med det som lignet på søkeordene dine, og endrer seg for hver som søker", "Fordi søkemotoren rangerer treffene etter hvor mange ganger de er åpnet tidligere", "Fordi antall treff varierer over tid, etter hvert som mer av samlingen blir lagt inn i basen", "Fordi søkeresultatet inneholder gjenstander fra flere samlinger samtidig, og dermed blander materiale som hører til ulike institusjoner"],
      explanation: "De andre kontekstene er stabile — graven var som den var, magasinet er som det er. Trefflisten er en annen for hver som søker, og rekkefølgen i den avgjør hva som blir undersøkt. Det gjør sorteringen til en virksom og lite synlig tolkning.",
    },
    {
      question: "Hva er argumentet for at digitaliseringen er siste trinn og ikke et brudd?",
      options: ["At hvert av de tidligere trinnene også erstattet en sammenheng med en beskrivelse laget av noen", "At digitaliseringen ikke fjerner noe fysisk fra samlingen, siden gjenstandene blir liggende der de er, uendret av at det tas bilder av dem", "At den digitale katalogen bygger videre på museets egen orden fra magasinet", "At de fleste digitaliseringsprosjekter utføres av museene selv, med det samme personalet som forvalter samlingen fra før, og med samme faglige mål"],
      explanation: "Argumentet er at digitaliseringen gjør noe kjent raskere og for flere objekter, ikke noe nytt — og Ingvarssons «ytterligere» støtter lesningen. Hvem som utfører arbeidet, og at gjenstandene blir liggende, avgjør ikke spørsmålet.",
    },
    {
      question: "Hva er det sterkeste argumentet for at digitaliseringen er et brudd?",
      options: ["At materialet får en helt ny egenskap: det kan behandles i mengde, og tåler dermed spørsmål ingen kunne stille før", "At gjenstandene for første gang kan ses av mennesker som aldri ville hatt anledning til å reise dit", "At kvaliteten på de digitale gjengivelsene stadig blir bedre, slik at de nærmer seg objektet", "At antallet digitaliserte gjenstander nå er så høyt at ingen enkeltforsker kan overskue materialet"],
      explanation: "Å kunne telle og sammenligne en hel samling er en kvalitativ endring, ikke en gradsforskjell. Bedre tilgang er en reell, men praktisk gevinst — et sterkt svar skiller mellom hva som er nytt for tilgangen og hva som er nytt for kunnskapen.",
    },
    {
      question: "Hvilket spørsmål er nytt i sin helhet med søkbare kataloger?",
      options: ["Spørsmål om samlingens egen sammensetning: hva den har mye og lite av, og hva den mangler", "Spørsmål om hvordan gjenstandene ble brukt av dem som eide dem, og hva bruken forteller om hverdagslivet i perioden", "Spørsmål om når de enkelte gjenstandene i samlingen ble laget og tatt i bruk", "Spørsmål om hvorvidt en gjenstand er ekte eller forfalsket, siden gjengivelsen kan sammenlignes med kjente eksemplarer av samme type"],
      explanation: "Spørsmålet krever at hele samlingen kan overskues på én gang, og det kunne knapt stilles før. De øvrige spørsmålene er gamle spørsmål som er blitt lettere å arbeide med — nyttig, men en praktisk og ikke en erkjennelsesmessig endring.",
    },
    {
      question: "Hvilke spørsmål gjør digitaliseringen vanskelige?",
      options: ["Spørsmål som krever objektets materialitet, og spørsmål om egenskaper ingen har registrert", "Spørsmål om hvor mange gjenstander av en bestemt type samlingen inneholder, siden tellingen avhenger av hvordan typene er definert", "Spørsmål om når, av hvem og hvordan samlingen i sin tid ble bygget opp", "Spørsmål som gjelder sammenligning mellom samlinger i ulike land, ettersom institusjonene bruker ulike systemer for å beskrive gjenstandene sine"],
      explanation: "Det usøkbare er i praksis usynlig, og det mest oversette er spørsmål om det som ikke er digitalisert i det hele tatt. Ingenting av dette er umulig — det krever bare at man går til objektet, og det er nettopp den muligheten den digitale tilgangen gjør lett å glemme.",
    },
    {
      question: "Hva vil det si å bruke «digital epistemologi» som etikett i stedet for som redskap?",
      options: ["At begrepet står i teksten uten å navngi noe, slik at setningen kunne strykes uten tap", "At begrepet brukes på materiale det ikke passer på, for eksempel om samlinger som ikke er digitalisert i det hele tatt ennå", "At begrepet brukes uten at det er oppgitt hvilken avsender i pensum det er hentet fra, slik at leseren ikke kan kontrollere det", "At begrepet forklares grundig i redegjørelsesleddet, men ikke gjentas senere i teksten der drøftingen faktisk foregår"],
      explanation: "Prøven er den samme som for alle fagbegreper: stryk setningen der begrepet står, og se om teksten mangler noe. Begrepet er særlig utsatt fordi det er kort og ser kompetent ut — og et begrep du bare nevner, har du ikke brukt.",
    },
    {
      question: "Hva er den avgjørende forskjellen på hullene i en fysisk og i en digital samling?",
      options: ["Hullene i den digitale er usynlige — en treffliste ser komplett ut, mens et magasin viser sine tomme plasser", "Den digitale samlingen har flere hull, siden bare en del av materialet er digitalisert på noe tidspunkt", "Den fysiske samlingen har flere hull enn den digitale, siden mer har gått tapt over tid", "Hullene i den digitale samlingen kan tettes etter hvert som mer digitaliseres"],
      explanation: "Det er synligheten som skiller, og den er grunnen til at besvarelsen må si hvilken av de to samlingene den bygger på. At det digitaliserte er en delmengde, er sant, men det er ikke det som gjør forskjellen faglig farlig.",
    },
  ],
  'exfac03-hark-6-4': [
    {
      question: "Hva kjennetegner en samling, faglig forstått?",
      options: ["En mengde gjenstander som er brakt sammen, ordnet etter et prinsipp og forvaltet med et formål", "Alle gjenstander en institusjon eier, uavhengig av hvordan de kom inn i samlingen", "Gjenstander som er stilt ut sammen i én og samme utstilling for publikum", "En mengde gjenstander som hører sammen fordi de stammer fra samme sted eller samme periode, og derfor belyser hverandre"],
      explanation: "Det avgjørende ordet er «brakt sammen»: en samling er ikke noe som finnes, men noe som er blitt laget, gjenstand for gjenstand. Et lager oppbevarer bare; en samling er ordnet etter et prinsipp, og prinsippet er en tolkning av hva som er viktig.",
    },
    {
      question: "Hvorfor er en samling en historisk kilde til to ting samtidig?",
      options: ["Den forteller både om miljøene gjenstandene kom fra, og om samlerne og hva de mente var verdt å bevare", "Den forteller både om gjenstandenes alder og om deres tilstand, slik at både datering og bevaring kan undersøkes ut fra samme materiale", "Den forteller både om fortiden og om hvordan vår egen tid formidler den til publikum", "Den forteller både om den institusjonen som forvalter den i dag, og om de institusjonene som tidligere hadde ansvar for materialet før det ble overført"],
      explanation: "Kilden til samlerne er den som oftest glemmes, og det er ofte den mest fruktbare å skrive om — særlig fordi den lar seg belyse med digitalt tilgjengelig materiale. Gjenstandene forteller om brukerne, katalogen om dem som ordnet dem.",
    },
    {
      question: "Hva er innsamlingskonteksten?",
      options: ["Omstendighetene rundt at gjenstandene kom inn: når, av hvem, hvorfra og med hvilket formål", "Den perioden gjenstandene ble laget og brukt i, med de samfunnsforholdene som gjorde nettopp de gjenstandene vanlige", "Den fysiske plasseringen gjenstanden har fått i museets magasin, med hylle og nummer", "De opplysningene en giver oppgir om gjenstanden når den overleveres, og som museet fører inn i tilvekstprotokollen sin"],
      explanation: "Innsamlingskonteksten er en historisk kilde i seg selv: den forteller om samlerne, om hva som gjaldt som verdifullt i deres tid, og om hvilke forbindelser institusjonen hadde. Funnkonteksten gjelder derimot hvor gjenstanden lå.",
    },
    {
      question: "Hva er proveniens?",
      options: ["En gjenstands kjede av tidligere eiere og oppholdssteder, fra opprinnelsen fram til dagens forvalter", "Den geografiske opprinnelsen til materialet en gjenstand er laget av, bestemt ved naturvitenskapelige analyser av sammensetningen", "Den måten gjenstanden i sin tid kom inn i samlingen på, ved kjøp, gave eller utgraving", "Det stedet der gjenstanden ble funnet eller brukt, slik det er registrert i katalogen"],
      explanation: "Proveniens er hele reisen, mens ervervsmåten bare er siste ledd — en kjent ervervsmåte kan stå sammen med en helt ukjent proveniens. Kjeden er avgjørende for tre ulike spørsmål: om gjenstanden er ekte, om den kan tolkes, og om den er rettmessig ervervet.",
    },
    {
      question: "Hvorfor er ervervsmåten et faglig og ikke bare et administrativt spørsmål?",
      options: ["Fordi ulike ervervsmåter gir ulik dokumentasjon, og dermed avgjør hva samlingen kan brukes til", "Fordi museet er rettslig forpliktet til å kunne redegjøre for hvordan hver enkelt gjenstand i samlingen er kommet i institusjonens eie", "Fordi kjøpte gjenstander koster museet mer enn dem det får inn som gave", "Fordi giverens navn ofte er den eneste opplysningen som finnes om en gjenstand, og fordi den derfor må registreres nøyaktig i katalogen"],
      explanation: "En utgraving gir funnkontekst; et kjøp gir sjelden mer enn selgerens navn. Hva samlingen tåler av spørsmål, avhenger derfor av hvordan den ble til — og det er noe helt annet enn et spørsmål om ryddig forvaltning.",
    },
    {
      question: "Hva kjennetegner et åpent spørsmål?",
      options: ["Det spør etter hva, hvor, hvorfor eller hvordan, og kan besvares på flere forsvarlige måter", "Det er formulert så vidt at det gir rom for at undersøkelsen kan ta flere ulike retninger etter hvert som materialet blir kjent", "Det kan ikke besvares med sikkerhet, uansett hvor mye materiale man har", "Det er stilt uten at man på forhånd vet om materialet gir grunnlag for et svar"],
      explanation: "Kjennetegnet er at svaret krever et resonnement, og at to grupper kan lande ulikt uten at noen tar feil. Åpent er ikke det samme som vidt: et vidt spørsmål er ubrukelig fordi ingenting er avgrenset, og avgrensningen er et eget, vurdert trinn.",
    },
    {
      question: "Hvilken rolle kan lukkede spørsmål spille i en god besvarelse?",
      options: ["De er materiale for det åpne spørsmålet — noe som telles og deretter tolkes", "De bør unngås helt, siden en drøftende tekst ikke skal inneholde opplysninger som kan slås opp i en katalog", "De brukes til å kontrollere at kilden er pålitelig før den tas i bruk i drøftingen", "De egner seg som innledning fordi de er lette å besvare, og gir dermed teksten en trygg start før den vanskeligere drøftingen"],
      explanation: "Et lukket spørsmål avsluttes av svaret, mens et åpent åpnes av det. «Hvor mange kom inn før 1900?» er lukket; «Hva forteller fordelingen om hva museet mente var verdt å samle?» er åpent og bruker svaret på det lukkede.",
    },
    {
      question: "Hva er den vanligste feilen når studenter formulerer spørsmål til en samling?",
      options: ["Å tro at et vidt spørsmål er åpent, slik at det ikke lar seg besvare fordi ingenting er avgrenset", "Å velge et spørsmål som er så smalt at det kan besvares med et enkelt oppslag", "Å stille flere spørsmål samtidig, slik at teksten aldri følger ett av dem til ende", "Å formulere spørsmålet som en påstand som skal prøves, i stedet for som et spørsmål som skal belyses gjennom undersøkelsen"],
      explanation: "«Hva kan vi lære av denne samlingen?» er ikke lukket — det har ikke ett svar — men det kan ikke besvares. Avgrensningen er derfor et eget trinn, og et for smalt spørsmål er en mindre vanlig og lettere rettet svakhet.",
    },
    {
      question: "Hvorfor er hullene i en samling ofte det mest opplysende ved den?",
      options: ["Fordi de viser hva samlerne ikke så som verdifullt, og fordi fravær kan telles i en søkbar katalog", "Fordi de viser hvilke deler av samlingen som har gått tapt gjennom brann, tyveri eller uforsvarlig oppbevaring i tidligere tider", "Fordi de forteller hvilke deler av samlingen museet mangler penger til å ta vare på", "Fordi de gjør det mulig å anslå hvor stor samlingen ville vært dersom innsamlingen hadde vært gjennomført systematisk fra begynnelsen"],
      explanation: "Et hull er noe som aldri var tenkt å være der, mens en mangel er noe som burde vært der etter samlingens eget formål. Å behandle et hull som en mangel er anakronistisk — det måler fortidens samlere mot vår tids interesser.",
    },
    {
      question: "Hvilket forbehold må stå når man undersøker hull i en digital katalog?",
      options: ["At et hull i katalogen kan skyldes at den delen ikke er digitalisert, og ikke at samlingen mangler noe", "At katalogen kan inneholde registreringsfeil, slik at gjenstander er ført under feil kategori", "At tallene i katalogen endrer seg over tid, etter hvert som samlingen vokser og mer registreres", "At museet kan ha valgt å holde tilbake opplysninger om enkelte gjenstander av hensyn til givere eller til gjenstandenes sikkerhet"],
      explanation: "Dette er digitaliseringsutvalget sett fra brukersiden, og forskjellen kan katalogen alene ikke avgjøre. Registreringsfeil er et reelt, men annet problem, og forbeholdet om utvalget er det som gir uttelling fordi det viser vurderingsevne.",
    },
    {
      question: "Hva vil det si å lese katalogen som en kilde til samlerne?",
      options: ["Å undersøke hvilke felter som finnes, hvilke ord som brukes, og hva som er registrert grundig eller avfeid", "Å gjennomgå katalogen for å finne opplysninger om hvem som ga gjenstandene til samlingen", "Å bruke katalogen som en oversikt over hva samlingen inneholder", "Å sammenligne katalogen med andre museers kataloger for å se om standardene er fulgt"],
      explanation: "Grepet er å lese hvordan katalogen er skrevet, ikke bare hva den sier. Står giverens navn og yrke omhyggelig registrert mens den som laget gjenstanden, står som «ukjent», forteller katalogen noe om hvem samlingen ble ordnet for.",
    },
    {
      question: "Hva er utstillingskonteksten?",
      options: ["Gjenstanden slik den vises fram, med lys, tekst og naboer som noen har valgt for å fortelle noe", "Den delen av samlingen som til enhver tid er tilgjengelig for publikum, i motsetning til det som er magasinert og bare kan ses etter avtale", "Rommet og monteren der gjenstanden er plassert for publikum i utstillingen", "Den faglige sammenhengen kuratoren plasserer gjenstanden i når hun skriver katalogteksten"],
      explanation: "Utstillingen er en framstilling med et budskap: valget av naboer, teksten og det som er utelatt, utgjør en fortelling som er museets, ikke gjenstandens. I magasinet er ordenen derimot administrativ og faglig — og skjuler dermed at den tar et standpunkt.",
    },
    {
      question: "Hva skiller den digitale konteksten fra de to andre?",
      options: ["Den endrer seg med brukeren, siden trefflisten er en annen for hver som søker", "Den inneholder flere opplysninger enn de andre, fordi katalogposten samler alt museet vet om gjenstanden på ett sted", "Den er den eneste av de tre kontekstene som er dokumentert skriftlig i museets registre", "Den er laget for publikum og ikke for fagfolk, og bruker derfor et enklere språk enn den dokumentasjonen som ligger i museets interne registre"],
      explanation: "Utstillingen og magasinet er de samme for alle, mens trefflisten er ditt eget søks sammenheng. Derfor bør metodeleddet si hvilke søkeord som ble brukt og hvor mange treff som ble gjennomgått — en billig setning som gjør undersøkelsen etterprøvbar.",
    },
    {
      question: "Hva forventer H2024-veiledningen av besvarelsen når det gjelder kilden?",
      options: ["At den er tydelig på at informasjonen er hentet digitalt, og ikke at gruppen har vært i samlingen fysisk", "At gruppen oppsøker samlingen minst én gang for å se det fysiske objektet selv", "At kildene føres i en bestemt referansestil som museet eller emnet har fastsatt", "At gruppen redegjør for hvilke deler av samlingen som ikke var tilgjengelige digitalt"],
      explanation: "Forventningen gjelder tydelighet om at kilden er digital. Museumsbesøk omtales som flott, men ikke nødvendig, og veiledningen sier uttrykkelig at referansestil varierer etter faglig tilhørighet og ikke skal straffes.",
    },
    {
      question: "Hvordan skrives den eksplisitte digital-setningen godt?",
      options: ["Som en presis kildeopplysning om hvor opplysningene kommer fra og hva undersøkelsen derfor bygger på", "Som en beklagelse over at gruppen ikke fikk anledning til å besøke samlingen i løpet av semesteret", "Som en fotnote knyttet til litteraturlisten bakerst i den innleverte teksten", "Som en avslutning der gruppen oppsummerer hvilke svakheter den digitale tilgangen ga"],
      explanation: "Setningen er en kildeopplysning, like nødvendig som å si hvilket arkiv et dokument kommer fra. Skrives den som en beklagelse, antyder den en mangel der veiledningen uttrykkelig ikke ser noen — og det svekker teksten uten grunn.",
    },
    {
      question: "En besvarelse skriver at gjenstanden er «overraskende lett og tynn i godset». Gruppen har bare brukt katalogen. Hvilken feil er dette?",
      options: ["Å framstille en digital samling som om man har stått foran den", "Å bruke et fagbegrep som etikett uten å aktivere det i den analysen som følger", "Å levere uten avgrensning og uten en formulert problemstilling i første avsnitt", "Å prøve å dekke hele samlingen i stedet for å belyse ett avgrenset spørsmål med de kildene som faktisk foreligger"],
      explanation: "Vekt og godstykkelse er egenskaper katalogen sjelden oppgir, og påstanden har derfor ingen dekning. Motgiften er å bytte observasjonsverb med kildeverb: «katalogposten beskriver» i stedet for «gjenstanden er».",
    },
    {
      question: "Hva er kulturarv?",
      options: ["Det et samfunn regner som verdt å bevare og føre videre fra fortiden — en status, ikke en egenskap ved tingene", "De gjenstandene, byggverkene og stedene som er formelt vernet mot endring og riving", "Alt materiale som er eldre enn en fastsatt aldersgrense, uansett hva det består i", "Den delen av fortiden som er dokumentert godt nok til å kunne formidles videre"],
      explanation: "Det avgjørende er ordet «regner»: kulturarv er en status noe får gjennom beslutninger om vern, innkjøp og formidling. Derfor reiser enhver slik påstand spørsmålet om hvilket fellesskap det gjelder — og det samme objektet kan være kulturarv for flere.",
    },
    {
      question: "Hva er forskjellen på historie og kulturarv?",
      options: ["Historien er det som skjedde; kulturarven er det utvalget en samtid velger å bære med seg", "Historien bygger på skriftlige kilder, mens kulturarven omfatter gjenstander, bygninger og praksiser som ikke er skriftlig dokumentert", "Historien er et rent faglig anliggende, mens kulturarven er et politisk og forvaltningsmessig et", "Historien handler om fortiden slik den var, mens kulturarven handler om hvordan fortiden framstilles for et publikum i museer og utstillinger"],
      explanation: "Å blande de to er den vanligste kilden til uklarhet i tekster om dette temaet. At kulturarv har politisk innhold, betyr ikke at historie er upolitisk — begge er faglige, og skillet går på hva som beskrives og hva som velges.",
    },
    {
      question: "Hva skiller det etiske fra det rettslige spørsmålet om en samling?",
      options: ["Jussen spør hva som er lovlig, mens etikken spør hva som er riktig — og en lovlig ervervelse kan reise et etisk spørsmål", "Jussen gjelder gjenstander ervervet i utlandet, mens etikken gjelder dem som er ervervet innenlands", "Etikken er den enkelte forskerens sak, mens jussen er institusjonens ansvar alene", "Jussen gjelder eierskapet, mens etikken gjelder hvordan gjenstandene formidles til publikum"],
      explanation: "De to spørsmålene kan sprike i begge retninger: noe kan være fullt lovlig etter datidens regler og likevel etisk omstridt. Kulturarvsetikken er en drøfting og ikke et regelverk, og seriøse fagfolk svarer ulikt på spørsmålene.",
    },
    {
      question: "Hvorfor må begrepet opphavsmiljø brukes varsomt?",
      options: ["Fordi et opphavsmiljø sjelden er én enhet med én mening, og lett framstilles som en enstemmig part", "Fordi det ikke alltid lar seg fastslå hvilket miljø en gjenstand kommer fra, når dokumentasjonen om ervervet er mangelfull eller helt fraværende", "Fordi begrepet ikke er navngitt i arkivet og derfor ikke bør brukes i en besvarelse", "Fordi det kan forveksles med begrepet eier, som er et rettslig forhold og derfor følger andre regler enn de kulturhistoriske vurderingene"],
      explanation: "Å framstille et opphavsmiljø som én vilje er samme forenkling som å framstille museet som én vilje. Begrepet er likevel nyttig fordi det holder åpent at gjenstandene hadde betydninger før de ble museumsgjenstander, og at de sammenhengene ofte har levende arvtakere.",
    },
    {
      question: "Hvordan bør en besvarelse behandle spørsmålet om tilbakeføring?",
      options: ["Som en akse med seriøse argumenter på flere sider, der begrunnelsen vurderes og ikke landingen", "Som et spørsmål med et faglig fasitsvar som studenten forventes å kjenne og å gjengi korrekt i drøftingen", "Som et rettslig spørsmål som må avgjøres av jurister og ikke av faget", "Som et spørsmål som bør unngås i en innlevert tekst, siden det er politisk omstridt og krever kunnskap som ligger utenfor emnets pensum"],
      explanation: "Spørsmålet er åpent, og en kandidat som karikerer motparten, har svekket sin egen drøfting. Det finnes bindende regler på enkelte områder, men de faglige spørsmålene besvares ulikt av seriøse fagfolk — og det er drøftingen som vurderes.",
    },
    {
      question: "Hva er det sterkeste grepet i drøftingen av om digital tilgjengeliggjøring gjør en samling mer delt?",
      options: ["Å skille mellom tilgang og myndighet, og lande ulikt på de to", "Å vise til at antallet brukere av digitale samlinger har økt kraftig, og at tilgjengeliggjøringen dermed har hatt den virkningen den var ment å ha", "Å slå fast at synlighet ikke er det samme som deling, og la det stå som konklusjon", "Å beskrive hvordan institusjonene arbeider med tilgjengeliggjøring i praksis, og hvilke hensyn de må veie mot hverandre i det arbeidet"],
      explanation: "Tilgang bryter et faktisk monopol og er ingen liten sak; myndigheten over hva som digitaliseres, hvordan det beskrives og hva som vises først, blir like fullt værende. Å skille de to er den samme typen grep som gjør drøftingen av digital epistemologi sterk.",
    },
  ],
  'exfac03-hark-7-1': [
    {
      question: "Hva krever kontrastleddet i en epokekarakteristikk at kandidaten kan?",
      options: ["Mer enn én periode, siden leddet skal si hva epoken skiller seg fra i hver enkelt kolonne", "Én periode grundig, siden leddet skal utdype epokens egne trekk i flest mulige kolonner", "Hele sjutrinnsrekka, siden leddet skal følge én tendens gjennom alle periodene i nettet", "Pensumlitteraturens ordlyd, siden leddet skal gjengi hvordan hvert verk beskriver epoken"],
      explanation: "Riktig svar er at kontrastleddet krever kjennskap til minst to perioder: du kan ikke si hva som er nytt uten å vite hva det var nytt i forhold til. Distraktoren om én periode grundig tester forvekslingen med trekkleddet, som er det leddet som handler om epoken alene. Distraktoren om sjutrinnsrekka tester forvekslingen med den lange linjen, som er en annen sjanger.",
    },
    {
      question: "I hvilken rekkefølge setter H2020-veiledningen opp det besvarelsen skal vise forståelse av?",
      options: ["Epokens vesentlige trekk, dens historiske kontekst og dens videre implikasjoner", "Epokens historiske kontekst, dens vesentlige trekk og dens forhold til pensumlitteraturen", "Epokens videre implikasjoner, dens vesentlige trekk og dens plass i den lange linjen", "Epokens avgrensning, dens forhold til nabofeltene og dens betydning for dagens forskning"],
      explanation: "Riktig svar er trekk, så kontekst, så implikasjoner — den rekkefølgen står i sensorveiledningen fra H2020. Svarene som stokker om på de samme tre leddene, tester om du husker rekkefølgen eller bare ordene. Svaret som bytter ut implikasjonsleddet med forholdet til nabofeltene, ber om noe veiledningen ikke krever.",
    },
    {
      question: "Hva er forskjellen mellom en verdidom og en kontrast i denne sjangeren?",
      options: ["Verdidommen rangerer perioden etter nåtidens målestokk, kontrasten navngir en forskjell i én kolonne", "Verdidommen gjelder kunnskapssynet, kontrasten gjelder menneskesynet og de andre kolonnene", "Verdidommen hører til implikasjonsleddet, kontrasten hører til trekkleddet tidlig i besvarelsen", "Verdidommen bygger på pensum, kontrasten bygger på kandidatens egen lesning av kildene"],
      explanation: "Riktig svar er at verdidommen måler perioden mot vår egen tid, mens kontrasten sier hva som er forskjellig i en bestemt kolonne og kan etterprøves. Distraktoren om kunnskapssyn mot menneskesyn tester om du tror forskjellen ligger i hvilken kolonne det gjelder, og ikke i hva slags utsagn det er. Distraktoren om implikasjonsleddet tester samme forveksling plassert i disposisjonen.",
    },
    {
      question: "Hvorfor er epokegrenser en beslutning og ikke et funn?",
      options: ["Fordi grensen er noe historikeren legger inn i materialet for å få øye på noe bestemt", "Fordi grensen er fastsatt av sensorveiledningene og derfor kan variere fra termin til termin", "Fordi kildene fra en overgangstid alltid mangler, slik at årstallet må gjettes i etterkant", "Fordi periodenavnene er oppfunnet i ettertid og dermed ikke gjelder for periodene selv"],
      explanation: "Riktig svar er at periodiseringen er et grep forskeren gjør: to forsvarlige inndelinger av samme hundreår skjærer ulikt og gjør ulike ting synlige. Distraktoren om manglende kilder tester forvekslingen med et praktisk problem, mens dette er et faglig valg. At grensen er valgt, betyr for øvrig ikke at alle valg er like gode — valget vurderes på begrunnelsen.",
    },
    {
      question: "Hva innebærer det å lese periodenettet vertikalt?",
      options: ["Å følge én kolonne nedover gjennom flere perioder, slik at forskjellene mellom dem trer fram", "Å følge én periode bortover gjennom alle kolonnene, slik at perioden framstår som en helhet", "Å begynne i den siste perioden og arbeide bakover mot antikken i alle kolonnene samtidig", "Å fylle ut alle rader og kolonner i nettet før noen av dem brukes i en ferdig besvarelse"],
      explanation: "Riktig svar er at vertikal lesning følger én kolonne nedover og dermed produserer kontraster. Distraktoren om å lese bortover beskriver radlesningen, som er den du bruker når du skal karakterisere perioden i trekkleddet — begge trengs, men til hvert sitt ledd. Distraktoren om å fylle ut hele nettet tester ideen om at alt må dekkes, som er en annen felle.",
    },
    {
      question: "En kandidat skriver 500 ord om opplysningstidens trekk og 90 ord om alt det andre. Hvilken feil er det?",
      options: ["Å la det enkle redegjørelsesleddet spise oppgaven, slik at kontrast og implikasjoner blir borte", "Å beskrive en epoke uten å si hva som skiller den fra den forrige perioden i noen kolonne", "Å bruke et fagbegrep som etikett uten å vise hva begrepet gjør i den konkrete analysen", "Å skrive om humaniora før 1800 som om feltet allerede fantes som eget kunnskapsfelt"],
      explanation: "Riktig svar er at redegjørelsesleddet har spist oppgaven — leddet finnes, men de andre er sultet ut. Distraktoren om manglende kontrast er en nær nabo, men den gjelder når kontrasten ikke finnes i det hele tatt, ikke når den bare er for kort. De to siste beskriver feil som handler om begrepsbruk og om anakronisme, ikke om fordelingen av ord.",
    },
    {
      question: "Hva er hovedforskjellen mellom epokekarakteristikken og den lange linjen som oppgaveform?",
      options: ["Epokekarakteristikken går i dybden på én periode, den lange linjen følger én tendens gjennom sju", "Epokekarakteristikken bygger på periodenettets kolonner, mens den lange linjen bygger på de hermeneutiske begrepene", "Epokekarakteristikken krever pensumbruk, den lange linjen kan skrives helt på egne kunnskaper", "Epokekarakteristikken hører til dagens mappeform, mens den lange linjen bare finnes i oppgavetekster fra det utgåtte regimet"],
      explanation: "Riktig svar er at den ene går i dybden på én periode med naboperioden som kontrast, mens den andre bruker hver periode som ett trinn i en tendens. Distraktoren om periodenettet tester en nær sannhet: begge sjangrene bruker nettet, bare til hvert sitt formål. Distraktoren om pensumbruk er gal fordi aktiv pensumbruk er et belønningskriterium i alle sjangre.",
    },
    {
      question: "Hva skal implikasjonsleddet inneholde?",
      options: ["Hva perioden gjorde mulig for dem som kom etter, og hva senere perioder har kritisert ved den", "En oppsummering av periodens viktigste trekk, formulert kortere enn i selve trekkleddet tidligere i besvarelsen", "En vurdering av om perioden var vellykket, målt mot det vi i dag vet om hvordan kunnskap faktisk utvikler seg", "En liste over hvilke pensumbidrag som behandler perioden, med begrepene hvert av dem bærer"],
      explanation: "Riktig svar er virkningen framover pluss kritikken; leddet innfører noe nytt i stedet for å gjenta. Distraktoren om oppsummering tester nettopp den vanligste omskrivingen av leddet, som gjør det verdiløst. Distraktoren om å måle perioden mot dagens kunnskap tester verdidomsfellen i ny form.",
    },
    {
      question: "Hvor mange av de 11 oppgavetekst-forekomstene i arkivet er epokekarakteristikker?",
      options: ["Tre forekomster, men bare to av de ti unike oppgavetekstene, siden to av dem er ordrett like", "Tre forekomster, som alle er ulike oppgavetekster fra hver sin dokumenterte eksamenstermin", "To forekomster, siden de to ordrett like oppgavetekstene bare telles som én i alle sammenhenger", "Fire forekomster, hvorav den ene ligger i den ene dokumenterte mappeeksamenen fra H2024"],
      explanation: "Riktig svar er tre forekomster og to unike tekster: romantikkoppgaven ble gitt ordrett to ganger. Svaret om tre ulike oppgavetekster fra hver sin termin tester om du husker at gjentakelsen finnes. Svaret om to forekomster tester forvekslingen mellom de to nevnerne — gjentakelsen teller som to forekomster, men som én unik tekst.",
    },
    {
      question: "Hva er den riktige måten å formulere gjenbruksobservasjonen på?",
      options: ["En oppgavetekst ble gitt ordrett i to terminer, og det er belegg for at gammel trening ikke er bortkastet", "Oppgavetekstene går igjen med jevne mellomrom over terminene, så det lønner seg å pugge de gamle bestillingene ordrett", "Sensor gjenbruker oppgaver når terminen er utsatt, og derfor kan innholdet i neste års oppgavetekst forutsies", "Alle oppgavetekstene i det utgåtte regimet finnes i to versjoner, én ordinær og én utsatt"],
      explanation: "Riktig svar er at dette er en observasjon over to terminer, ikke en regel: den ene oppgaveteksten om romantikken ble gitt ordrett to ganger. Svarene om jevne mellomrom og om at neste oppgavetekst kan forutsies, gjør observasjonen om til et mønster og en spådom, som arkivet ikke gir grunnlag for. Svaret om at alle oppgavetekstene finnes i to versjoner, er usant om arkivets sammensetning.",
    },
    {
      question: "Hva sier H2021-veiledningen om studentens egen inndeling av stoffet?",
      options: ["At det finnes mange måter å organisere det på, og at inndelingen skal møtes med stor takhøyde", "At inndelingen bør følge sensorveiledningens egen rekkefølge for å bli vurdert som ryddig og gjennomtenkt", "At inndelingen er et formkrav som teller mindre enn innholdet og derfor ikke vurderes", "At inndelingen må dekke alle sju periodene for at besvarelsen skal kunne bestå kravet"],
      explanation: "Riktig svar er takhøyden: veiledningen sier uttrykkelig at stoffet kan organiseres på mange måter. Distraktoren om å følge veiledningens rekkefølge tester den vanligste feillesningen, nemlig at et oppsett i en veiledning er et krav. Takhøyden gjelder likevel inndelinger som er begrunnet, ikke tilfeldige.",
    },
    {
      question: "Hvilken av disse setningene er en kontrast og ikke en beskrivelse?",
      options: ["Der opplysningstiden søkte det som gjaldt alle mennesker, søkte romantikken det særegne ved fellesskapet", "Romantikken var opptatt av folkeånd, av nasjonen og av det organiske i menneskelige fellesskaps egen utvikling", "Opplysningstiden bygde på fornuften og på troen på at samfunn gjennomløper de samme stadiene", "Både romantikken og opplysningstiden hadde et bestemt syn på hva mennesket i grunnen er"],
      explanation: "Riktig svar er den setningen som stiller de to periodenes svar på samme spørsmål opp mot hverandre. Beskrivelsen av romantikkens folkeånd og beskrivelsen av opplysningstidens fornuftstro er korrekte hver for seg, og nettopp derfor ikke kontraster: de kunne vært skrevet uten kjennskap til den andre perioden. Påstanden om at begge har et menneskesyn, sier ikke hva forskjellen består i.",
    },
    {
      question: "Hva er første trinn i firetrinnsformen, og hva må det inneholde?",
      options: ["Avgrensningen, som må ha både grensene og kriteriet grensene er valgt etter", "Trekkleddet, som må ha minst tre av periodenettets kolonner dekket med eksempler", "Kontrastleddet, som må skrives først fordi det er det vanskeligste å få plass til", "Problemstillingen, som må formuleres som et lukket spørsmål med et entydig svar"],
      explanation: "Riktig svar er avgrensningen med kriteriet: årstall alene er en datering, ikke en avgrensning. Distraktoren om kontrastleddet blander sammen skriverekkefølgen og arbeidsrekkefølgen — kontrasten arbeides fram tidlig, men den står som trinn 3. Distraktoren om lukket spørsmål er gal fordi et åpent spørsmål er det som inviterer til drøfting.",
    },
    {
      question: "Hvorfor skal trekkene sorteres etter periodenettets kolonner?",
      options: ["Fordi sorteringen både viser apparatet og gjør kontrastleddet mekanisk enkelt å skrive etterpå", "Fordi sensorveiledningene krever at alle seks kolonnene er dekket i enhver epokebesvarelse som skal bestå", "Fordi kolonnene er hentet fra pensumlitteraturen og derfor må gjengis med de samme ordene", "Fordi en usortert liste over trekk regnes som en formfeil som trekker ned uansett innhold"],
      explanation: "Riktig svar er at sorteringen gjør to ting samtidig: den viser at du bruker apparatet, og den lar deg skrive kontrasten kolonne for kolonne. Distraktoren om at alle seks kolonnene må dekkes, er en nær felle — nettet er et arbeidsverktøy, og du velger de kolonnene spørsmålet gjelder. Distraktoren om formfeil overdriver: en usortert liste er svakere, ikke ugyldig.",
    },
  ],
  'exfac03-hark-7-10': [
    {
      question: "Hva gjør A-versjonens spørsmål åpent, mens C-versjonens er et oppslag?",
      options: ["A-versjonen spør hvorfor fordelingen ser slik ut, og to fornuftige lesere kan svare ulikt", "A-versjonen spør om flere gjenstandstyper og dekker dermed mer av samlingen", "A-versjonen bruker ordet hvorfor, som alltid gir et åpent spørsmål i denne sjangeren", "A-versjonen stiller spørsmålet til giveren i stedet for til katalogen som helhet"],
      explanation: "Riktig svar er prøven på om spørsmålet kan besvares ulikt av to fornuftige lesere. Distraktoren om ordet «hvorfor» er en nær felle: spørreordet hjelper, men et hvorfor-spørsmål som ingen kilde kan belyse, er like ubrukelig som et oppslag. Bredde i seg selv gjør heller ikke et spørsmål åpent.",
    },
    {
      question: "Hvorfor er slitasjeavsnittet i C-versjonen en feil?",
      options: ["Det er en observasjon av fysiske gjenstander, og gruppen har bare hatt en digital katalog", "Det er en påstand om verdi, og verdivurderinger hører ikke hjemme i en faglig besvarelse", "Det mangler pensumbelegg, siden ingen av bidragene omtaler slitasje på gjenstander", "Det gjentar opplysninger som allerede står i beskrivelsen av samlingen tidligere i teksten"],
      explanation: "Riktig svar er førstehåndsillusjonen: teksten påstår noe den ikke kan vite med den tilgangen den har hatt. Hadde katalogen oppgitt tilstand, ville påstanden vært lovlig — men da måtte teksten sagt at det er katalogens vurdering. H2024-veiledningen forventer uttrykkelig at kildesituasjonen er tydelig.",
    },
    {
      question: "Hva kjennetegner et epistemologiledd som arbeider, til forskjell fra et påklistret?",
      options: ["Det endrer hva gruppen kan hevde, for eksempel om katalogens kategorier kan tas for gitt", "Det siterer begge de navngitte bidragene og plasserer dem i riktig rekkefølge", "Det står til slutt i besvarelsen, slik at det avrunder drøftingen på en ryddig måte", "Det er lengre enn to avsnitt, slik at diskusjonen får den plassen den fortjener"],
      explanation: "Riktig svar er at leddet må gjøre noe med gruppens egne påstander. Distraktoren om plassering til slutt beskriver nettopp det påklistrede leddet i C-versjonen. Og husk at slik diskusjon er flott, men ikke nødvendig for høy måloppnåelse — et påklistret ledd gir mindre enn ingen.",
    },
    {
      question: "Hvilke tre endringer krever overgangen fra skriftlig besvarelse til podkastmanus?",
      options: ["Kortere setninger, ingen henvisninger bakover, og de viktigste tallene gjentatt", "Enklere ord, færre pensumbidrag, og en mer uformell tone gjennom hele innslaget", "Kortere innledning, flere eksempler, og referansene lest opp fortløpende underveis", "Færre tall, mer beskrivelse av samlingen, og en tydeligere konklusjon til slutt"],
      explanation: "Riktig svar er de tre som følger av at lytteren ikke kan bla tilbake. Distraktoren om fortløpende referanser er gal: referansene oppgis etter slutten eller som vedlegg, i tillegg til tidsrammen. Færre pensumbidrag er heller ikke et krav — det forventes at pensum eller annen relevant faglitteratur er brukt.",
    },
    {
      question: "Hva viser ordtellingen i margen at gruppen har prioritert?",
      options: ["Belysningen og det etiske leddet, på bekostning av en lengre beskrivelse av samlingen", "Beskrivelsen av samlingen, slik at leseren kjenner materialet før drøftingen i det hele tatt begynner", "Innledningen, siden problemstillingen må begrunnes grundig før noe annet i besvarelsen kan skrives", "Litteraturlisten, som er holdt kort for å få plass til flere funn innenfor den samlede ordgrensen"],
      explanation: "Riktig svar er at marginen er brukt på belysning og drøfting. Beskrivelsen av samlingen er nesten alltid det første som må kuttes når teksten er for lang — den er nødvendig, men den er ikke svaret. Litteraturlisten ligger utenfor ordgrensen og konkurrerer derfor ikke om plassen.",
    },
    {
      question: "Hvordan avgrenser A-versjonen rekkevidden av svaret sitt?",
      options: ["I tre trinn: hva materialet viser sikkert, hva det viser mindre sikkert, og hva det ikke viser", "Ved å oppgi hvor mange gjenstander som mangler opplysninger, og deretter utelate dem fra tellingen", "Ved å si at funnet gjelder denne samlingen alene og derfor ikke kan tolkes videre", "Ved å foreslå videre forskning i konklusjonen, slik at leseren ser hva som gjenstår å undersøke senere"],
      explanation: "Riktig svar er trappen fra sikkert til usikkert til utenfor rekkevidde. Distraktoren om at funnet ikke kan tolkes videre, gir avkall på drøftingen — A-versjonen sier tvert imot noe sikkert om giverens utvalg. Forslag om videre undersøkelser står også i teksten, men det er landingen, ikke avgrensningen av rekkevidden.",
    },
  ],
  'exfac03-hark-7-2': [
    {
      question: "Hvilket av de tre leddene i avgrensningsoppgaven skal ha hovedtyngden?",
      options: ["Vurderingen av selve kategoriseringen, som er det leddet bestillingen er bygget rundt", "Skillet mot naturvitenskapen, siden det er der de fleste faglige forskjellene ligger", "Definisjonen av humaniora, siden alt det andre i besvarelsen hviler på hvordan den lyder", "Landingen, siden det er der kandidaten viser vurderingsevne og selvstendig standpunkt"],
      explanation: "Riktig svar er vurderingsleddet: oppgaven ber om at inndelingen vurderes, ikke bare beskrives. Distraktoren om skilleleddet tester nettopp den vanligste feilfordelingen, der de to første leddene tar mesteparten av plassen. Definisjonen skal være kort med avsender, og landingen er et par setninger.",
    },
    {
      question: "Hva er de to aksene skillet mot naturvitenskapen skal settes opp langs?",
      options: ["Gjenstand og metode — hva som studeres, og hvordan det studeres", "Gjenstand og institusjon — hva som studeres, og hvilket fakultet faget ligger under", "Metode og finansiering — hvordan det studeres, og hvem som betaler for undersøkelsen", "Tolkning og forklaring — de to kunnskapsmålene som skiller de myke fra de harde fagene"],
      explanation: "Riktig svar er gjenstand og metode. Institusjon er en tredje definisjonstype, ikke en akse i skilleleddet, så den distraktoren tester om du blander de to apparatene. Tolkning mot forklaring er innholdet i metodeaksen, ikke en akse ved siden av den, og det er en nær felle nettopp fordi begrepsparet er riktig i seg selv.",
    },
    {
      question: "Hva kjennetegner et grensetilfelle brukt riktig i vurderingsleddet?",
      options: ["Det prøver påstanden om inndelingen og kan svekke den, i stedet for bare å illustrere den", "Det viser et fagområde som er vanskelig å plassere, og gir dermed teksten faglig bredde", "Det gir et konkret eksempel som gjør den abstrakte definisjonen lettere å forstå for leseren", "Det navngir et fag som ligger under et annet fakultet enn det de fleste ville gjettet"],
      explanation: "Riktig svar er at grensetilfellet skal gjøre et argumentativt arbeid: klarer ikke inndelingen å plassere konservering, sier det noe om inndelingen. Svarene om et fagområde som er vanskelig å plassere, og om et konkret eksempel som gjør definisjonen lettere å forstå, beskriver den svake bruken — forskjellen er om tilfellet kan endre konklusjonen din eller bare pynter på den.",
    },
    {
      question: "Hva er tospaltefella?",
      options: ["Å liste trekk ved hvert av de to feltene og stoppe der, uten å vurdere inndelingen", "Å bruke to ulike definisjoner av humaniora i samme besvarelse uten å si at det er to", "Å dele besvarelsen i to like lange deler i stedet for å vekte de tre leddene ulikt", "Å sette naturvitenskapen opp som motstander i stedet for som kontrastbegrep i drøftingen"],
      explanation: "Riktig svar er lista som erstatter drøftingen: den kan være helt korrekt og likevel svare på to av tre ledd. Distraktoren om to definisjoner beskriver et annet problem, som faktisk kan være et pluss hvis du sier at det er et valg. Distraktoren om naturvitenskapen som motstander er en reell svakhet, men den har ikke noe med tospalter å gjøre.",
    },
    {
      question: "Hvilket av vurderingsverkstedets fem grep handler om institusjoner?",
      options: ["Hvem som tjener på inndelingen — hvilke fag, hvilke fakulteter og hvilke søknadsordninger", "Hva inndelingen gjør mulig som ellers ville vært vanskelig for de to kunnskapsfamiliene", "Hvilke tilfeller som faller mellom, og hva som skjer med fagene som havner der", "Hva alternativet ville kostet, målt mot det inndelingen gir fagene av egne kvalitetskrav"],
      explanation: "Riktig svar er grep 3, som spør hvem inndelingen tjener, og som besvares med institusjoner og ordninger, ikke med motiver. De tre andre er verkstedets øvrige grep og handler om funksjon, om grensetilfeller og om alternativet — alle nyttige, men ikke institusjonelle.",
    },
    {
      question: "Hvorfor er institusjonsdefinisjonen av humaniora sirkulær på en interessant måte?",
      options: ["Den svarer at humaniora er det som ligger under et humanistisk fakultet, og flytter spørsmålet til hvem som plasserte det der", "Den svarer at humaniora er de fagene som studerer mennesket, og gjentar dermed gjenstandsdefinisjonen med andre ord", "Den svarer at humaniora er de fagene som tolker, og utelukker dermed alle fag som også måler noe", "Den svarer at humaniora er det som ikke er naturvitenskap, og gjør skillet til en ren negasjon uten innhold"],
      explanation: "Riktig svar er at definisjonen viser tilbake på en institusjonell beslutning, og dermed gjør beslutningen selv til det som må drøftes. Den andre og tredje distraktoren beskriver gjenstands- og metodedefinisjonen, ikke institusjonsdefinisjonen. Den fjerde beskriver en negativ definisjon, som er en fjerde variant og ikke den som er i bruk her.",
    },
    {
      question: "Hva er forskjellen på avgrensningsoppgaven og faghistorieoppgaven?",
      options: ["I den ene er skillet et drøftingsobjekt, i den andre en hendelse med tidspunkt og følger", "I den ene skal humaniora defineres, i den andre skal naturvitenskapen defineres i stedet", "I den ene er pensumbruk et krav, i den andre teller kandidatens egne resonnementer mest", "I den ene er ordgrensen 1 500 ord, i den andre gjelder budsjettet for et individuelt arbeid"],
      explanation: "Riktig svar er at den ene vurderer inndelingen, mens den andre følger ett fag gjennom en historisk prosess som faktisk skjedde. Distraktoren om pensumbruk er gal fordi aktiv pensumbruk er et belønningskriterium i alle sjangre. Distraktoren om ordgrenser blander inn gruppeoppgavens ramme, som gjelder en tredje sjanger.",
    },
    {
      question: "Hva vil det si at en kategorisering har konsekvenser?",
      options: ["At plasseringen virker tilbake på faget, gjennom hvilke metoder og spørsmål som regnes som legitime", "At plasseringen er endelig når den først er gjort, siden fakultetsgrenser sjelden endres", "At plasseringen bestemmer hvilke fag studentene kan kombinere i en grad ved universitetet", "At plasseringen avgjør hvilken av de tre definisjonene av humaniora som er den riktige"],
      explanation: "Riktig svar er at kategoriseringen ikke bare sorterer, men former det den sorterer — et grensefag som gjentatte ganger vurderes med den ene familiens målestokk, henter over tid flere idealer derfra. Distraktoren om at plasseringen er endelig, er en påstand om treghet, ikke om konsekvenser. De to siste flytter spørsmålet til studieadministrasjon og til definisjonsvalg.",
    },
    {
      question: "En besvarelse argumenterer i ledd 3 for at humaniora er viktig for samfunnet. Hva er problemet?",
      options: ["Den svarer på et annet spørsmål: bestillingen gjelder inndelingen, ikke fagets verdi", "Den mangler avsender på argumentet, og en påstand uten avsender kan ikke drøftes faglig", "Den bruker et politisk argument der oppgaveteksten ber om et erkjennelsesteoretisk et", "Den forutsetter metodedefinisjonen av humaniora uten å si at det er den som er valgt"],
      explanation: "Riktig svar er at spørsmålet er byttet ut: oppgaven ber om en vurdering av kategoriseringen av fag og framgangsmåter. Distraktoren om avsender er en reell regel, men den redder ikke et svar på feil spørsmål. Distraktoren om definisjonsvalg beskriver en annen svakhet, som gjelder ledd 1.",
    },
    {
      question: "Hva er felles for de seks grensetilfellene i kapitlets bank?",
      options: ["Gjenstanden er menneskeskapt eller menneskelig, mens metoden helt eller delvis er naturvitenskapelig", "Alle seks er organisert under et naturvitenskapelig fakultet ved de fleste universiteter", "Alle seks bruker digitale verktøy, og det er digitaliseringen som gjør plasseringen uklar", "Ingen av dem har egne metoder, og de låner derfor framgangsmåter fra begge kunnskapsfamiliene"],
      explanation: "Riktig svar er at gjenstands- og metodedefinisjonen skiller lag i alle seks tilfellene, og det er nettopp derfor de er grensetilfeller. Distraktoren om fakultetstilhørighet er en påstand banken ikke gir grunnlag for. Distraktoren om digitale verktøy gjelder bare ett av de seks tilfellene.",
    },
    {
      question: "Hva skal en landing i vurderingsleddet inneholde for å telle som en avveining?",
      options: ["Et kriterium som sier hva som skulle til for at konklusjonen ble den motsatte", "En oppsummering av argumentene på begge sider, slik at leseren kan trekke sin egen slutning", "En forsikring om at spørsmålet er komplekst og at svaret avhenger av hvilket fag man står i", "En henvisning til det pensumbidraget som har den mest utbredte posisjonen i debatten"],
      explanation: "Riktig svar er kriteriet: uten det er «det kommer an på» en unnvikelse og ikke en avveining. Distraktoren om å overlate slutningen til leseren tester ideen om at nøytralitet er trygt, men bestillingen ber deg vurdere. Den tredje er samme unnvikelse formulert som ydmykhet.",
    },
    {
      question: "Hvor mange unike oppgavetekster i arkivet er avgrensningsoppgaver?",
      options: ["Én, siden de to forekomstene er ordrett like og derfor teller som samme tekst", "To, siden de to forekomstene er gitt i hver sin dokumenterte eksamenstermin", "Tre, hvis man regner med den beslektede oppgaven fra den ene mappeeksamenen", "Fire, siden avgrensningstemaet er berørt i fire av de seks dokumenterte terminene"],
      explanation: "Riktig svar er én unik oppgavetekst, fordi H2020-utsatt-2 og H2021-utsatt-2 er ordrett like. Svaret om to tester forvekslingen mellom forekomster og unike tekster: det er riktig at det er to forekomster i to terminer. Svaret om fire blander sammen temafrekvens og sjangertelling, som har hver sin nevner.",
    },
    {
      question: "Hvilken vekting følger av at ledd 3 skal ha hovedtyngden i et arbeid på om lag 1 750 ord?",
      options: ["Om lag 800 ord til vurderingen, mot 250 til definisjonen og 400 til skillet", "Om lag 600 ord til hvert av de tre leddene, slik at de tre blir omtrent like lange", "Om lag 800 ord til skillet, siden det er der de faglige forskjellene skal dokumenteres", "Om lag 1 200 ord til vurderingen, slik at definisjon og skille bare får noen linjer hver"],
      explanation: "Riktig svar er fordelingen der vurderingen får omtrent dobbelt så mye som skillet, og definisjonen minst. Merk at tallet 1 750 selv er en slutning fra UiOs 5 000-ordsgrense minus gruppeoppgavens 1 500. Svaret som gir vurderingen 1 200 ord, overdriver: definisjonen og skillet er nødvendige ledd og kan ikke reduseres til stikkord.",
    },
    {
      question: "Hvorfor holder det ikke å skrive at grensetilfellene «viser at inndelingen er uklar»?",
      options: ["Fordi påstanden må si hva uklarheten koster, og hvem den koster noe — ellers er den en observasjon", "Fordi grensetilfeller alltid finnes i enhver inndeling og derfor ikke er et argument i seg selv mot den", "Fordi inndelingen er institusjonelt fastsatt, og en påstand om uklarhet strider mot fakultetskartet", "Fordi uklarhet er et vurderende ord som ikke hører hjemme i et faglig resonnement om kategorier"],
      explanation: "Riktig svar er at observasjonen må gjøres om til et argument: hvem må bruke krefter på å forklare seg, og hva blir vanskeligere å gjøre? Distraktoren om at grensetilfeller alltid finnes, er nær sann og nettopp derfor nyttig som motargument i din egen tekst — men den avviser ikke poenget, den krever at det skjerpes. Den siste er en språkregel som ikke finnes.",
    },
  ],
  'exfac03-hark-7-3': [
    {
      question: "Hva skiller en tendens fra et tema i denne sjangeren?",
      options: ["Tendensen er en bevegelse med retning som kan spores fra trinn til trinn, temaet er et område", "Tendensen gjelder ett fag, mens temaet gjelder hele humaniora og alle de sju periodene", "Tendensen er hentet fra sensorveiledningene, mens temaet er noe kandidaten står fritt til å velge", "Tendensen hører til drøftingsleddet, mens temaet hører til det innledende redegjørelsesleddet"],
      explanation: "Riktig svar er at bare bevegelser kan følges, og at et tema gir sju beskrivelser i stedet for en linje. Prøven er å sette «hvordan» foran: «hvordan synet på fortiden endrer seg» går, «kunnskapssyn» går ikke. Distraktoren om fag mot felt tester en helt annen distinksjon, og den om sensorveiledningene tester ideen om at temaene er forhåndsgitte.",
    },
    {
      question: "Hvilke sju trinn består emnets egen periodisering av?",
      options: ["Antikken, middelalderen, renessansen, opplysningstiden, romantikken og historismen, 1900-tallet, etter 1970", "Antikken, middelalderen, renessansen, barokken, opplysningstiden, romantikken, det moderne", "Oldtiden, middelalderen, den tidlig moderne tid, opplysningstiden, industrialismen, etterkrigstiden, i dag", "Antikken, middelalderen, renessansen, opplysningstiden, historismen, positivismen, postmodernismen"],
      explanation: "Riktig svar er rekka som er satt sammen av rutenettet i H2021-veiledningen og de tre siste trinnene i H2022-veiledningen. Rekka som ender på historismen, positivismen og postmodernismen, er nær — men det er navn på posisjoner og ikke på perioder, og romantikken og historismen hører sammen i ett trinn.",
    },
    {
      question: "Hva er «planken» i H2022-veiledningens forstand?",
      options: ["Det innledende redegjørelsesleddet, som er enkelt og ikke skal spise brorparten av oppgaven", "Det avsluttende drøftingsleddet, som bærer hovedtyngden og avgjør hvilken karakter svaret får", "Den delen av pensum som alle kandidater forventes å kunne uansett hvilken oppgave de velger", "Den faste disposisjonen sensor forventer, med tre like lange ledd i en bestemt rekkefølge"],
      explanation: "Riktig svar er det innledende leddet: det er det alle klarer, og instruksen gjelder fordelingen, ikke kvaliteten. Distraktoren om drøftingsleddet snur instruksen på hodet, og det er nettopp forvekslingen som gjør at besvarelser bruker for mye plass tidlig. Planken skal skrives, og den skal være presis — den skal bare være kort.",
    },
    {
      question: "Hvor mange ord gir ordbudsjettet til hvert av de sju trinnavsnittene i et fullt individuelt arbeid?",
      options: ["Om lag 150 ord, altså tre til fire setninger per trinn", "Om lag 250 ord, altså et fullt avsnitt med et utdypende eksempel per trinn", "Om lag 90 ord, siden drøftingsleddene skal ha over halvparten av det samlede budsjettet", "Om lag 400 ord, siden de sju trinnene til sammen utgjør hele redegjørelsesdelen"],
      explanation: "Riktig svar er om lag 150 ord: 1 050 ord fordelt på sju trinn. Tallet 1 750 for hele arbeidet er selv en slutning fra UiOs 5 000-ordsgrense minus gruppeoppgavens 1 500. Distraktoren på 400 ord ville gitt 2 800 ord bare til trinnene, altså langt over hele arbeidets ramme.",
    },
    {
      question: "Hva skal et trinnavsnitt inneholde?",
      options: ["Hva tendensen så ut som i perioden, og hva som endret seg fra forrige trinn", "Periodens viktigste trekk sortert etter alle seks kolonnene i periodenettet", "En kort epokekarakteristikk med avgrensning, trekk, kontrast og implikasjoner", "Ett pensumbidrag som behandler perioden, med begrepet bidraget bærer, og en vurdering"],
      explanation: "Riktig svar er tilstanden pluss endringen: uten endringssetningen er avsnittet et periodeavsnitt og ikke et ledd i en linje. Distraktoren om epokekarakteristikken beskriver en annen sjanger som ikke får plass på 150 ord. Alt annet ved perioden holdes utenfor, uansett hvor godt du kan det.",
    },
    {
      question: "To av de sju stikkordene dine er tomme. Hva forteller det deg oftest?",
      options: ["At tendensen er formulert slik at den ikke finnes i de to periodene, og bør skjerpes eller flyttes", "At du må lese mer om de to periodene før du kan begynne å skrive besvarelsen", "At de to periodene bør utelates, siden en linje bare krever at flertallet av trinnene dekkes", "At tendensen er for vid, og at du derfor bør dele den i to tendenser som følges parallelt"],
      explanation: "Riktig svar er at tomme felter som regel er en diagnose på tendensen, ikke på kunnskapen din — og at det er billigere å bytte tendens nå enn etter tusen ord. Distraktoren om å utelate perioder tester ideen om at hull er akseptable; en begrunnet sammenslåing er tillatt, et ubegrunnet hull er synlig for enhver som teller trinnene.",
    },
    {
      question: "Hva sier leddet om hva som «består og skifter»?",
      options: ["Hva som er det samme i alle trinnene og hva som er forskjellig, lest på tvers av dem", "En kortversjon av de sju trinnene, slik at leseren får repetert linjen før landingen", "Hvilke perioder som hører sammen, slik at inndelingen i sju trinn blir begrunnet", "Hvilke deler av pensum som dekker linjen, og hvilke perioder som ikke er dekket av noe bidrag"],
      explanation: "Riktig svar er tverrlesningen, som finner et mønster ingen av trinnene viste alene. Distraktoren om kortversjonen er den vanligste omskrivingen av leddet, og den gjør det verdiløst: en oppsummering tilfører ingenting. Leddet er umulig å skrive før trinnene står, og det er derfor det er verdt de 200 ordene.",
    },
    {
      question: "Hva må du vise hvis du lander på at utviklingen er en pendel?",
      options: ["At begge poler er til stede i minst tre trinn, og at bevegelsene kommer som svar på hverandre", "At utviklingen ender omtrent der den begynte, slik at det siste trinnet ligner det første", "At ingen av periodene er et brudd, siden en pendel forutsetter uavbrutt kontinuitet", "At tendensen er hentet fra periodenettets kolonner og dermed dekker hele sjutrinnsrekka"],
      explanation: "Riktig svar er at pendelen krever belegg for at begge poler finnes og at svingningene er reaksjoner. Distraktoren om at det siste skal ligne det første, er en vanlig misforståelse — en pendel kan ta med seg redskaper fra hver runde uten å slutte å være en pendel. Formen du velger vurderes på belegget, ikke på hvilken form det er.",
    },
    {
      question: "Hvor mange oppgavetekst-forekomster i arkivet er lange linjer?",
      options: ["To forekomster, pluss den tiende oppgaveteksten, som er uten kjent termin", "Fire forekomster, én i hver av de fire ordinære terminene i arkivet", "To forekomster, som begge ligger i den ene dokumenterte mappeeksamenen fra H2024", "Tre forekomster, siden også epokeoppgaven om romantikken regnes som en lang linje"],
      explanation: "Riktig svar er to forekomster pluss den tiende oppgaveteksten, som telles blant de unike tekstene men ikke blant forekomstene fordi terminen er ukjent. Distraktoren med fire blander sammen sjangeren og læringsmålet om de lange linjene, som er berørt i fire av fire ordinære terminer. Det er to ulike påstander med hver sin nevner.",
    },
    {
      question: "Hva innebærer takhøydeklausulen fra H2021-veiledningen for inndelingen din?",
      options: ["At en annen inndeling enn sju trinn er tillatt så lenge den er begrunnet", "At antall trinn er valgfritt, og at ingen inndeling kan regnes som svakere enn en annen", "At sensor skal se bort fra disposisjonen og bare vurdere det faglige innholdet i teksten", "At sju trinn er et minimum, og at flere trinn alltid gir bedre uttelling enn færre"],
      explanation: "Riktig svar er at takhøyden gjelder begrunnede inndelinger. Distraktoren om at alt er like godt, strekker klausulen for langt: et ubegrunnet hull er fortsatt et hull. Distraktoren om at disposisjonen ikke vurderes, motsies direkte av H2022-veiledningens instruks om vekting.",
    },
    {
      question: "Hvorfor er firetrinnslinjen fram til ca. 1800 noe annet enn en forkortet sjutrinnslinje?",
      options: ["Fordi den treffer tesen om at humaniora som eget felt først kommer til etter ca. 1800", "Fordi de fire første periodene er bedre dokumentert i arkivet enn de tre siste", "Fordi sensorveiledningene bare gjengir rutenettet for de fire første periodene", "Fordi et kortere svar krever færre pensumbidrag og dermed en annen form for pensumbruk"],
      explanation: "Riktig svar er at varianten treffer emnets bærende tese: før ca. 1800 skriver du om hvordan kunnskap om mennesket ble formulert og avgrenset, ikke om et felt. Distraktoren om rutenettet er nær sann — H2021-veiledningens rutenett dekker fire perioder — men det er ikke derfor varianten er noe eget, og H2022-veiledningen fører rekken videre.",
    },
    {
      question: "En kandidat skriver sju grundige periodebeskrivelser uten endringssetninger. Hva mangler?",
      options: ["Selve linjen: avsnittene kan stokkes om uten tap, og da er det en gjennomgang", "Avgrensningen: det står ikke hvilke perioder som er valgt og hvorfor de er valgt", "Pensumbruken: ingen av avsnittene navngir hvilket bidrag påstandene bygger på", "Landingen: teksten sier ikke om utviklingen er en linje, en pendel eller et brudd"],
      explanation: "Riktig svar er at det som mangler, er koblingen mellom trinnene — testen er om avsnittene kan stokkes uten at noe blir uforståelig. De tre andre er reelle mangler i andre besvarelser, men de er ikke det spørsmålet beskriver: her er periodene grundig behandlet hver for seg.",
    },
    {
      question: "Hva er den vanligste sterke innvendingen mot enhver lang linje, og hvordan besvares den?",
      options: ["At linjen er lest bakfra — og svaret er å skille mellom at tendensen finnes i materialet og at aktørene visste om den", "At linjen er for lang — og svaret er å redusere antall trinn til de fire best dokumenterte", "At linjen mangler pensumbelegg — og svaret er å oppgi et bidrag i hvert eneste trinnavsnitt", "At linjen er subjektiv — og svaret er å unngå å lande, slik at leseren selv kan trekke slutningen"],
      explanation: "Riktig svar er at innvendingen gjelder etterpåklokskap, og at den besvares ved å skille to påstander fra hverandre: bare den om materialet er nødvendig. Distraktoren om å unngå å lande er en unnvikelse — en drøftende framstilling som ikke lander, har ikke drøftet ferdig.",
    },
    {
      question: "Hvilken rekkefølge anbefaler kapitlet når du skal oppdage tomme trinn i en full sjutrinnslinje?",
      options: ["Skriv det siste trinnet først, siden det er det du kan minst om og det som prøver tendensen hardest", "Skriv trinnene i kronologisk rekkefølge, slik at endringssetningene faller naturlig på plass underveis", "Skriv de tre trinnene du kan best først, og fyll ut resten med det ordbudsjettet som blir igjen til slutt", "Skriv drøftingsleddene først, slik at de sju trinnene kan tilpasses den landingen du allerede har valgt"],
      explanation: "Riktig svar er å begynne bakfra: det avslører raskt om tendensen faktisk lar seg føre helt fram. Distraktoren om å skrive de tre beste først, er nettopp oppskriften på den utledede feilen med tre grundige og fire tynne trinn. Å tilpasse trinnene til en forhåndsvalgt landing er å skrive belegget etter konklusjonen.",
    },
    {
      question: "Hva er forskjellen på nevnerne «4 ordinære terminer» og «4 sensorveiledninger»?",
      options: ["Den første teller terminer uten de to utsatte, den andre teller dokumenter som beskriver sensors forventninger", "Den første teller dokumenter i emnemappa, den andre teller de terminene der oppgaveteksten er bevart i arkivet", "Den første gjelder bare det utgåtte essay-regimet, mens den andre gjelder den ene dokumenterte mappeeksamenen", "De er to navn på det samme, siden hver ordinær termin i arkivet har nøyaktig én tilhørende sensorveiledning"],
      explanation: "Riktig svar er at de teller helt ulike ting selv om tallet er likt: fire ordinære terminer av seks totalt, og fire sensorveiledninger. Svaret om at de er to navn på det samme, er det farligste, siden det ser rimelig ut — men de to utsatte terminene har ingen veiledning, og oppgaveteksten foreligger for alle seks terminene fordi veiledningene gjengir den.",
    },
    {
      question: "Hva gjør at en lang linje risikerer å bli en framskrittshistorie, og hvorfor er det et problem?",
      options: ["At tendensen formuleres som en forbedring, slik at tidligere perioder blir forstadier i stedet for egne svar", "At landingen velger brudd som form, siden brudd forutsetter at det som kom etter, var bedre enn det som kom før", "At kandidaten bruker for mange pensumbidrag, slik at framstillingen blir en referatrekke", "At sju trinn er for mange for ordbudsjettet, slik at hvert trinn må skrives i en forenklet og skjematisk form"],
      explanation: "Riktig svar er at en tendens formulert som forbedring gjør de tidligere periodene til forstadier, og dermed karikerer dem — en karikert motpart svekker din egen drøfting. Distraktoren om brudd er gal: brudd sier at noe stanset og noe annet begynte, ikke at det nye var bedre. Positivismen og historismen skal begge framstilles som seriøse programmer.",
    },
  ],
  'exfac03-hark-7-4': [
    {
      question: "Hvilket ledd i faghistorieoppgaven bruker H2024-veiledningen mest plass på?",
      options: ["Plasseringen av faget mot humanioras samtidige utvikling, med forskyvningen notert", "Redegjørelsen for når faget fikk egne institusjoner og egne utdanningsløp ved universitetet", "Definisjonen av humanvitenskapens egenart, som er premisset hele bestillingen bygger på", "Drøftingen av hva vitenskapeliggjøringen kostet faget i form av tapt kontekst"],
      explanation: "Riktig svar er trinn 4: et godt svar plasserer faget mot resten av humaniora i samme periode og noterer forskyvningen. Distraktoren om de-kontekstualiseringen er nær — det er et reelt krav i trinn 5 — men det er forskyvningen veiledningen dveler ved. Institusjonshistorien alene er redegjørelse, ikke drøfting.",
    },
    {
      question: "Hva viser en tosporstidslinje som en vanlig tidslinje ikke viser?",
      options: ["Avstanden mellom når feltet og når faget tok opp den samme utviklingen", "Rekkefølgen på hendelsene i faget, slik at etableringen kan dateres presist", "Hvilke pensumbidrag som dekker hver periode i fagets egen historie", "Hvilke metoder faget brukte i hver periode, sortert etter vitenskapelig ideal"],
      explanation: "Riktig svar er avstanden: en vanlig tidslinje viser rekkefølge, tosporstidslinjen viser forskyvning. Distraktoren om rekkefølge beskriver nettopp det verktøyet ikke tilfører. De to siste beskriver andre nyttige oversikter, men de måler ikke avstand mellom fag og felt.",
    },
    {
      question: "Når møtte de nasjonale historiske skolene kritikk, ifølge H2024-veiledningen?",
      options: ["Allerede tidlig på 1900-tallet, fra historikere inspirert av strukturalisme og samfunnsvitenskapene", "Først i siste halvdel av 1900-tallet, samtidig med den post-prosessuelle vendingen i arkeologien", "I mellomkrigstiden, som en direkte følge av at historismens ideal ble forlatt i alle fagene", "Etter 1970, da kritikken av nøytral framstilling traff alle de historiske fagene samtidig"],
      explanation: "Riktig svar er tidlig på 1900-tallet. Svaret om siste halvdel av århundret er det farligste, siden det flytter arkeologiens tidfesting over på historiefaget — nettopp den feilen sjangeren straffer. Poenget i oppgaven er at de to fagene ikke går i takt.",
    },
    {
      question: "Hva betyr det at metodene i historiefaget ble «både erstattet og supplert»?",
      options: ["At noe gikk ut av bruk og noe kom i tillegg — to påstander veiledningen holder samtidig", "At de gamle metodene ble beholdt i navnet, men fikk et helt nytt innhold i praksis", "At de nye metodene erstattet arkivstudiene, mens kildekritikken bare ble supplert", "At skiftet skjedde i to omganger, først en erstatning og deretter en utvidelse"],
      explanation: "Riktig svar er at veiledningen holder begge påstandene, og at et sterkt svar gir ett eksempel på hver. Distraktoren som fordeler de to ordene på hver sin metode, er en presis-virkende overtolkning teksten ikke gir grunnlag for. Å velge bare det ene ordet forenkler en dobbelthet som er der med vilje.",
    },
    {
      question: "Hva er de-kontekstualisering, slik veiledningen bruker begrepet om de tre fagene?",
      options: ["At gjenstanden løsrives fra sammenhengen den sto i, for å kunne behandles med presise metoder", "At faget mister sin plass i humaniora når det henter metoder fra naturvitenskapen", "At kildene blir vanskeligere å tolke etter hvert som de flyttes mellom arkiv og magasin", "At forskerens egen kontekst ikke lenger regnes som relevant for tolkningen av materialet"],
      explanation: "Riktig svar er løsrivelsen av gjenstanden fra sin sammenheng, som veiledningen trekker fram som fellesnevneren for alle tre fagene. Distraktoren om at faget mister sin plass, forveksler gjenstandens kontekst med fagets. Den siste beskriver noe nesten motsatt av det hermeneutikken hevder.",
    },
    {
      question: "Hvorfor er det ensidig å drøfte de-kontekstualiseringen bare som et tap?",
      options: ["Fordi løsrivelsen også er betingelsen for systematisk sammenligning mellom funn og kilder", "Fordi tapet ikke kan dokumenteres med de metodene fagene selv bruker på materialet", "Fordi veiledningen sier at fagene ikke lyktes med å bli mer vitenskapelige uansett", "Fordi konteksten alltid kan rekonstrueres i ettertid gjennom dokumentasjonen fra funnstedet"],
      explanation: "Riktig svar er at presisjonen og sammenligningen er gevinsten: to funn kan bare sammenlignes systematisk når begge er beskrevet i samme format. Distraktoren om rekonstruksjon er nær sann og nettopp derfor en felle — dokumentasjonen fanger noe, men ikke alt, og det er det drøftingen skal handle om.",
    },
    {
      question: "Hva betyr «erkjennelsesteori» i denne oppgavens enkle form?",
      options: ["Hva slags kunnskap faget mener det kan skaffe, og på hvilke premisser", "Historien til kunnskapsteorien fra Platon og Descartes fram til i dag", "Metodene faget bruker for å prøve om en kilde er det den utgir seg for", "Skillet mellom det menneskeskapte og det naturskapte som premiss for fagene"],
      explanation: "Riktig svar er fagets egen påstand om hva det kan vite: kan det nå fram til hvordan det var, eller bare til hvordan noen framstilte det? Distraktoren om kunnskapsteoriens historie beskriver en gjennomgang oppgaven ikke ber om. Distraktoren om kildeprøving beskriver metode, som er trinn 3 og ikke erkjennelsesteori.",
    },
    {
      question: "Hva er problemet med å skrive om alle tre fagene i en oppgave som ber om ett?",
      options: ["Tre tynne redegjørelser gir ingen forskyvning å notere, og drøftingsleddet forsvinner", "Sensor har bare anledning til å vurdere det faget som er nevnt først i besvarelsen", "De tre fagene har ulike pensumbidrag, og bare ett av dem er navngitt i arkivet", "Ordgrensen på 1 500 ord gjør at bare ett fag kan behandles innenfor rammen"],
      explanation: "Riktig svar er at bredden spiser det leddet som avgjør nivået: uten plass til forskyvningen mangler svaret trinn 4 og 5. Distraktoren om sensors anledning er en oppdiktet regel. Ordgrensen på 1 500 ord gjelder gruppeoppgaven, ikke de individuelle arbeidene.",
    },
    {
      question: "Hva er fasedrift?",
      options: ["At fag i samme felt tar opp den samme utviklingen på ulike tidspunkter, som normaltilstand", "At et fag gradvis endrer sitt vitenskapelige ideal uten at utøverne selv merker det mens det skjer", "At et fags metoder etter hvert driver bort fra det idealet de opprinnelig ble hentet inn for å tjene", "At en periodisering forskyver seg når nye kilder gjør at grensene mellom periodene må settes på nytt"],
      explanation: "Riktig svar er at nabofag ikke går i takt, og at dette er regelen snarere enn unntaket. Ordet «forsinket» unngås med vilje, siden det forutsetter at det finnes én riktig takt. De tre andre beskriver andre fenomener som ikke har med avstanden mellom fag å gjøre.",
    },
    {
      question: "Hvordan bør tidfestingen formuleres når du ikke kan belegge et presist årstall?",
      options: ["Med tiårsanslag som «i siste halvdel av 1900-tallet», slik at usikkerheten er synlig", "Med det årstallet som er vanligst i pensumlitteraturen, oppgitt med en presis henvisning til stedet", "Uten tidfesting i det hele tatt, siden en upresis datering svekker besvarelsen mer enn den hjelper", "Med et spenn på ett tiår, valgt slik at det passer best med tidfestingen i det andre faget"],
      explanation: "Riktig svar er tiårsanslaget: det er ærligere, og overgangene er faktisk glidende. Distraktoren om sidehenvisning bryter dessuten med at boka aldri oppgir sidetall for pensumlitteratur. Å utelate tidfestingen helt fjerner grunnlaget for å måle forskyvningen.",
    },
    {
      question: "Hva sier H2024-veiledningen om studentenes usikkerhet rundt tidfestingen mellom fagene?",
      options: ["At ubalansen kan ha skapt litt usikkerhet — en av bare to rapporterte observasjoner i arkivet", "At studentene gjennomgående blandet sammen arkeologiens og historiefagets tidfesting i besvarelsene", "At sensor skal trekke for feil tidfesting, siden ubalansen er tydelig beskrevet i pensumlitteraturen", "At tidfestingen ikke skal vurderes i det hele tatt, fordi de tre fagene er behandlet ulikt grundig i pensum"],
      explanation: "Riktig svar er at ubalansen «kan ha skapt litt usikkerhet», og at dette er noe veiledningen faktisk har observert — resten av feilregisteret er forhåndsforventninger. Distraktoren om at studentene gjennomgående blandet sammen, går lenger enn belegget. Veiledningen ber tvert imot sensor utvise skjønn.",
    },
    {
      question: "Hva skiller vitenskapeliggjøring fra profesjonalisering?",
      options: ["Vitenskapeliggjøring gjelder hva som teller som et godt argument, profesjonalisering hvem som får utøve faget", "Vitenskapeliggjøring skjer i universitetene, profesjonalisering i museene og arkivene", "Vitenskapeliggjøring er en prosess i humaniora, mens profesjonalisering er en tilsvarende prosess i naturvitenskapen", "Vitenskapeliggjøring gjelder metodene, profesjonalisering gjelder hvilke kilder faget godtar"],
      explanation: "Riktig svar er at det ene handler om fagets kriterier for gode argumenter og det andre om stillinger, utdanning og adgang. De to henger sammen, men en besvarelse som bare beskriver opprettelsen av institutter, har svart på profesjonaliseringen. De øvrige distraktorene plasserer skillet geografisk eller feltvis, som ikke stemmer.",
    },
    {
      question: "Hvorfor er «underteoretisert» mer presist enn «den lange søvnen» om arkeologien fra 1900 til 1960?",
      options: ["Fordi faget arbeidet, gravde ut og publiserte hele perioden — det som manglet, var teoriutviklingen", "Fordi uttrykket «den lange søvnen» ikke finnes i sensorveiledningen og derfor ikke bør brukes", "Fordi perioden i realiteten var kortere enn seksti år, og bildet av en søvn overdriver den", "Fordi kulturarkeologien var en teoretisk posisjon på linje med den post-prosessuelle arkeologien som fulgte etter"],
      explanation: "Riktig svar er at faget var aktivt, og at det var teoriutviklingen som uteble. Uttrykket «den lange søvnen» er faktisk veiledningens eget, så distraktoren om at det ikke finnes der, er gal — boka bruker det med merking nettopp fordi det er veiledningens ord og ikke et etablert fagbegrep.",
    },
    {
      question: "Hva bør avgjøre hvilket av de tre fagene du velger i trinn 1?",
      options: ["Hvilket ledd du vil at svaret skal bæres av — redegjørelsen, forskyvningen eller drøftingen", "Hvilket fag du har mest stoff om, siden mengden pensum du kan gjengi, avgjør hvor godt svaret blir", "Hvilket fag du selv studerer, siden sensor forventer at du skriver om ditt eget fag", "Hvilket fag som er mest omtalt i arkivets oppgavetekster, altså historiefaget"],
      explanation: "Riktig svar er at valget bør styres av hvilket ledd faget gir best materiale til: historiefaget gir rikest redegjørelse, arkeologien skarpest forskyvning, konserveringen mest interessant drøfting. Distraktoren om mengde stoff strider mot at karakterskalaen måler vurderingsevne og ikke kunnskapsmengde. Veiledningen ber tvert imot sensor være åpen for variasjon mellom studenter fra ulike fag.",
    },
  ],
  'exfac03-hark-7-5': [
    {
      question: "Hva er en fordom i Gadamers forstand?",
      options: ["Den forforståelsen som gjør at et materiale i det hele tatt sier deg noe", "En feilaktig antakelse som må identifiseres og legges bort før tolkningen begynner", "En vurdering av kilden som er dannet før den er prøvd ytre og indre kildekritisk", "En oppfatning om fortiden som er arvet fra tradisjonen og derfor må etterprøves"],
      explanation: "Riktig svar er at fordommen er et arbeidende redskap: uten den ville materialet vært stumt. Svaret om å legge fordommene bort er dagligspråkets betydning, og den lesningen velter hele analysen — det er registerets åttende feil. Svaret om en oppfatning arvet fra tradisjonen er nær sant og nettopp derfor farlig: at forståelsen er arvet, er virkningshistorie, men det følger ikke at den skal fjernes.",
    },
    {
      question: "Hva viser en N-gram-graf?",
      options: ["Hvor ofte et ord eller uttrykk forekommer i korpuset over tid", "Hvordan betydningen av et ord har endret seg gjennom perioden grafen dekker", "Hvilke ord som opptrer sammen med søkeordet, og dermed hvilken mening det får", "Hvor mange tekster i korpuset som handler om det fenomenet ordet viser til"],
      explanation: "Riktig svar er frekvens i korpuset over tid, og bare det. Distraktoren om betydningsendring er den tekniske fella H2024-veiledningen bruker mest plass på. Distraktoren om ord som opptrer sammen, beskriver konkordansanalyse, som er nettopp det du må ty til hvis du vil si noe om mening.",
    },
    {
      question: "Hvilket ledd i metodeanvendelsen mangler oftest helt?",
      options: ["Sammenligningen av de to lesningene, som er leddet hele sjangeren er bygget rundt", "Den hermeneutiske analysen, siden Gadamers begreper er krevende å gjengi presist", "Avgrensningen av fenomenet, siden kandidaten som regel velger noe altfor stort", "Den digitale undersøkelsen, siden verktøyet må læres før det kan brukes på en case"],
      explanation: "Riktig svar er sammenligningsleddet: to grundige lesninger uten sammenligning er to halve oppgaver. De tre andre er reelle svakheter i mange besvarelser, men de leddene pleier i det minste å finnes. Ordbudsjettet i kapitlet gir derfor sammenligningen nesten like mange ord som den hermeneutiske analysen.",
    },
    {
      question: "Hva rangerer H2024-veiledningen høyest i denne oppgaven?",
      options: ["Selvstendighet i problemløsning, framfor evnen til å reprodusere pensum", "Presis gjengivelse av Gadamers begreper, siden de er oppgavens faglige kjerne", "Gjennomføringen av begge undersøkelsene, siden begge er eksplisitt bestilt", "Ryddig referansehåndverk, siden pensumbruk skiller gode fra mindre gode oppgaver"],
      explanation: "Riktig svar er selvstendighet framfor reproduksjon — formuleringen er direkte. Distraktoren om referansehåndverket er en nær felle: aktiv pensumbruk er et generelt belønningskriterium, men i nettopp denne oppgaven sier veiledningen at orden i referansene veier mindre enn god tenkning. Gadamers begreper må kjennes, men kjennskapen er forutsetningen, ikke uttellingen.",
    },
    {
      question: "Hva er de tre spørsmålene i casevelgeren?",
      options: ["Er fenomenet navngitt i tekst over tid, er tolkningen omstridt, finnes det materiale å nærlese", "Er fenomenet lokalt, er det godt dokumentert i pensum, kan det knyttes til Gadamers begreper", "Er fenomenet avgrenset i tid, i felt og i spørsmålstype, slik avgrensningskravet sier", "Er fenomenet digitalisert, er det omtalt i sensorveiledningene, er det kjent for sensor"],
      explanation: "Riktig svar er de tre som sikrer at alle fem trinnene lar seg gjennomføre: uten navn i tekst faller den digitale undersøkelsen bort, uten strid faller drøftingen bort, uten materiale faller nærlesningen bort. Distraktoren om avgrensning i tid, felt og spørsmålstype beskriver et annet apparat, som hører til problemstillingsarbeidet.",
    },
    {
      question: "En kurve stiger kraftig i ett tiår. Hvilket sett forklaringer bør du vurdere?",
      options: ["At ordet fortrengte et eldre ord, at mer av teksttypen er digitalisert, og at fenomenet ble vanligere", "At betydningen endret seg, at forfatterne ble flere, og at trykkekvaliteten ble bedre", "At kilden er en beretning og ikke en levning, at tendensen er sterk, og at opphavssituasjonen er ukjent", "At korpuset er for lite, at tidsrommet er for kort, og at søkeordet er for vanlig"],
      explanation: "Riktig svar dekker tre ulike typer forklaring: språklig, korpusmessig og saklig. Distraktoren som starter med betydningsendring, legger inn nettopp den slutningen grafen ikke gir grunnlag for. Den tredje flytter kildekritiske begreper over på en graf der de ikke gir mening som forklaringer.",
    },
    {
      question: "Hva vil det si at et av Gadamers begreper «gjør arbeid» i analysen?",
      options: ["At analysen ville blitt fattigere hvis begrepet ble strøket fra setningen det står i", "At begrepet blir definert presist første gang det brukes i besvarelsen", "At begrepet knyttes til det pensumbidraget som bærer det, med avsender oppgitt", "At begrepet brukes minst tre ganger, slik at leseren ser at det er sentralt i teksten"],
      explanation: "Riktig svar er strykeprøven: står setningen uendret uten begrepet, var begrepet en etikett. Distraktoren om definisjon er nødvendig, men ikke tilstrekkelig — en presis definisjon som ikke brukes til noe, er fortsatt en etikett. Gjentakelse er heller ikke anvendelse.",
    },
    {
      question: "Hva er forskjellen på virkningshistorie og resepsjonshistorie?",
      options: ["Resepsjonshistorie studerer mottakelsen som objekt, virkningshistorie sier at du selv står inne i virkningen", "Resepsjonshistorie gjelder tekster, virkningshistorie gjelder gjenstander og materiell kultur", "Resepsjonshistorie er en metode, virkningshistorie er en periode i hermeneutikkens historie", "Resepsjonshistorie er Gadamers begrep, virkningshistorie er historismens motsvar til det"],
      explanation: "Riktig svar er at det ene er et forskningsobjekt og det andre en påstand om fortolkerens egen situasjon. Distraktoren som gjør virkningshistorie til historismens motsvar, snur forholdet på hodet: Gadamers posisjon står i opposisjon til historismens ideal, ikke omvendt.",
    },
    {
      question: "Hvorfor bør den digitale undersøkelsen gjøres før den hermeneutiske analysen skrives?",
      options: ["Fordi den raskt avslører om fenomenet i det hele tatt er navngitt i tekst over tid", "Fordi funnene fra grafen bør styre hvilke av Gadamers begreper som skal brukes", "Fordi sensor forventer at den digitale delen presenteres først i besvarelsen", "Fordi frekvensdata må hentes tidlig for at tallene skal kunne kontrolleres i etterkant"],
      explanation: "Riktig svar er at arbeidsrekkefølgen og skriverekkefølgen er to ulike ting: den digitale undersøkelsen er billig og forteller om casen holder. Distraktoren om at grafen skal styre begrepsvalget, snur forholdet — begrepene skal gjøre arbeid på materialet ditt, ikke tilpasses en kurve. Rekkefølgen i selve teksten følger femtrinnsformen.",
    },
    {
      question: "Hva skiller horisontsammensmeltning fra historismens ideal?",
      options: ["Historismen vil legge bort nåtidens målestokk, mens sammensmeltningen sier at forståelse skjer i møtet", "Historismen gjelder tekster, mens sammensmeltningen gjelder alle typer historiske fenomener", "Historismen er en metode, mens sammensmeltningen er et krav om at fortolkeren skal være nøytral", "Historismen kom etter Gadamer og er et forsøk på å gjøre hermeneutikken mer etterprøvbar"],
      explanation: "Riktig svar er at historismen krever at du trer til side, mens Gadamer svarer at det verken er mulig eller ønskelig. Distraktoren om nøytralitet beskriver nesten det motsatte av sammensmeltningen. Den siste snur kronologien: historismen er den eldre posisjonen, og den skal framstilles som et seriøst program, ikke som en naivitet.",
    },
    {
      question: "Hva er den riktige måten å bruke en personlig tilknytning til hjemstedet på?",
      options: ["Som illustrasjon av forforståelsen, med en setning om at dette er hvordan noe er fortalt, ikke dokumentert", "Som hovedbelegg, siden lokalkunnskap gir tilgang til kilder ingen andre har", "Ved å utelate den helt, siden faglige besvarelser ikke skal inneholde personlige erfaringer", "Ved å plassere den i innledningen som en motivasjon for hvorfor temaet ble valgt"],
      explanation: "Riktig svar er å konvertere erfaringen til et analyseobjekt gjennom fordomsbegrepet. Distraktoren om å utelate den skyver bort nettopp de leserne som har mest materiale, og oppgaveteksten ber uttrykkelig om et fenomen gjerne fra eget hjemsted. Å bruke erfaringen som sannhetsvitne er den egentlige fella.",
    },
    {
      question: "Hvilket ledd kaller H2024-veiledningen «det siste momentet som skal telle»?",
      options: ["Å relatere undersøkelsen til faghistoriske, politiske eller andre kulturelle og metodiske strømninger", "Å reflektere over forskjellen mellom hermeneutisk nærlesning og digital fjernlesning av samme materiale", "Å vise at Gadamers sentrale begreper er forstått og kan gjengis presist i kandidatens egen formulering", "Å oppgi referansene i en konsekvent stil gjennom hele besvarelsen, både i teksten og i litteraturlista"],
      explanation: "Riktig svar er strømningsleddet, altså trinn 5. Refleksjonen over forskjellen mellom lesningene er også et uttellingskriterium, men den omtales som noe som øker uttellingen, ikke som det siste momentet. Referansestilen er det veiledningen uttrykkelig sier veier mindre i denne oppgaven.",
    },
    {
      question: "Hva er problemet med en besvarelse der det digitale leddet kunne strykes uten at konklusjonen endret seg?",
      options: ["Da er det digitale pynt og ikke metode, og oppgavens krav om sammenligning er ikke innfridd", "Da mangler besvarelsen en avgrensning, siden fenomenet ikke er valgt med tanke på begge metodene", "Da er frekvensgrafen feil lest, siden en riktig lest graf alltid endrer konklusjonen", "Da har kandidaten brukt for lite plass på Gadamers begreper i forhold til det oppsatte ordbudsjettet"],
      explanation: "Riktig svar er registerets ellevte feil: det digitale skal brukes til noe, ikke legges ved. Distraktoren om at en riktig lest graf alltid endrer konklusjonen, går for langt — en graf kan bekrefte, og det er også et funn, så lenge du sier hva den bidro med.",
    },
    {
      question: "Hva bør sammenligningsleddet komme fram til?",
      options: ["Et funn som ingen av de to lesningene kunne gitt alene, og hva hver av dem er blind for", "En vurdering av hvilken av de to metodene som er best egnet for humanistiske fag i sin alminnelighet", "En oppsummering av begge undersøkelsene, slik at leseren husker funnene før konklusjonen", "En anbefaling om hvilken metode andre studenter bør bruke på lignende fenomener"],
      explanation: "Riktig svar er funnet som følger av kombinasjonen, pluss refleksjonen over blindsonene. Distraktoren om hvilken metode som er best, stiller et spørsmål oppgaven ikke ber om, og som dessuten er dårlig stilt — de svarer på ulike spørsmål. En oppsummering tilfører ingenting.",
    },
    {
      question: "Hvor mange av mappas oppgaver innpasser et digitalt element i den ene dokumenterte mappeeksamenen?",
      options: ["2 av mappas 3 oppgaver, i H2024, der komponenten var ny av året", "1 av mappas 3 oppgaver, nemlig den individuelle metodeoppgaven", "3 av mappas 3 oppgaver, siden alle tre krever digitalt tilgjengelige kilder", "2 av 6 terminer, siden det digitale også er berørt i det utgåtte regimet"],
      explanation: "Riktig svar er to av tre oppgaver i H2024. Svaret med 2 av 6 terminer blander to nevnere: temaet står 1 av 6 terminer, og de to tallene måler ulike ting — en termin i det utgåtte regimet tilbød én eller to oppgavetekster, mens H2024 hadde tre.",
    },
    {
      question: "Hva er den vanligste varsellampen for at besvarelsen reproduserer pensum i stedet for å løse et problem?",
      options: ["Mer enn en tredel av teksten handler om hva Gadamer mente, og mindre enn en tredel om fenomenet", "Besvarelsen bruker færre enn tre pensumbidrag og henter dem alle fra den samme delen av pensumlista", "Besvarelsen mangler referanser i teksten, slik at det ikke går an å se hvor påstandene kommer fra", "Besvarelsen bruker begreper fra flere ulike deler av pensum uten å knytte dem sammen"],
      explanation: "Riktig svar er fordelingen mellom teori og case: det er den som avslører reproduksjon. Distraktoren om manglende referanser peker på et reelt, men annet problem — og i denne oppgaven sier veiledningen uttrykkelig at orden i referansene veier mindre enn god tenkning.",
    },
  ],
  'exfac03-hark-7-6': [
    {
      question: "Hva kjennetegner et åpent spørsmål til en samling?",
      options: ["Det inviterer til drøfting og kan besvares på flere forsvarlige måter", "Det gjelder hele samlingen og ikke bare en avgrenset del av materialet", "Det kan besvares uten at gruppen har vært fysisk til stede i samlingen", "Det er formulert av gruppen selv og ikke hentet fra museets egen katalogtekst"],
      explanation: "Riktig svar er at spørsmålet må kunne besvares på flere forsvarlige måter — det er dét som skiller det fra et oppslag. Distraktoren om at det skal gjelde hele samlingen, peker motsatt vei: et smalt spørsmål er som regel bedre innenfor 1 500 ord. At spørsmålet skal være gruppens eget, er et krav, men det gjør ikke et oppslag åpent.",
    },
    {
      question: "Hvor mange ord kan gruppeoppgaven være på, ifølge H2024-veiledningen?",
      options: ["Maks 1 500 ord inkludert fotnoter, med litteraturlisten i tillegg", "Maks 1 500 ord eksklusive fotnoter, med litteraturlisten inkludert i tallet", "Om lag 1 750 ord, som følger av at mappa samlet kan være på 5 000 ord", "Maks 1 500 ord for skriftlig innlevering, og 1 000 ord for podkastmanus"],
      explanation: "Riktig svar er 1 500 ord inkludert fotnoter, litteraturliste i tillegg — og grensen tåler 100 ord over. Distraktoren med 1 750 gjelder de individuelle arbeidene og er dessuten en slutning fra 5 000-ordsgrensen minus gruppeoppgavens 1 500, ikke et oppgitt krav. Det finnes ingen egen ordgrense for podkastmanus.",
    },
    {
      question: "Hva forventer H2024-veiledningen at besvarelsen sier om kildene sine?",
      options: ["At informasjonen er hentet digitalt, og ikke ved at gruppen har vært i samlingen fysisk", "At alle opplysninger er kontrollert mot museets fysiske katalog før de brukes", "At gruppen har vurdert samlingen etter ytre og indre kildekritikk før den ble valgt", "At minst ett gruppemedlem har besøkt museet, siden digital tilgang alene er utilstrekkelig"],
      explanation: "Riktig svar er den eksplisitte digital-setningen, som veiledningen sier forventes. Distraktoren om museumsbesøk snur kravet på hodet: besøk er flott, men uttrykkelig ikke nødvendig for høy måloppnåelse. Kildekritikk er relevant, men det er ikke det veiledningen krever på dette punktet.",
    },
    {
      question: "Hva er hovedforskjellen mellom en podkast og en opplest skriftlig besvarelse?",
      options: ["Podkasten er strukturert for en lytter som ikke kan bla tilbake, og gjentar det viktigste", "Podkasten kan utelate pensumreferanser, siden referansene uansett leses opp til slutt", "Podkasten vurderes mildere, siden formatet er nytt og få grupper har erfaring med det", "Podkasten trenger ikke svare på spørsmålet, siden formatet gjerne skal være utforskende"],
      explanation: "Riktig svar er at formatet vurderes som eget format med egne strukturkrav. Distraktoren om at podkasten kan utelate pensum, er gal — det forventes at kurspensum eller annen relevant faglitteratur er brukt. Den siste er en nær felle: formatet kan gjerne være utforskende, men uten å unndra seg det som skal besvares.",
    },
    {
      question: "Hva sier veiledningen om skriftlig innlevering sammenlignet med podkast?",
      options: ["Skriftlig vurderes strengere på form, med mer formelle krav til referanser og referanseliste", "Skriftlig vurderes mildere, siden podkast krever ferdigheter som ikke er en del av emnet", "De to vurderes helt likt, siden formatvalget ikke skal påvirke karakteren i noen retning", "Skriftlig gir bedre uttelling på pensumbruk, siden referansene er synlige i teksten"],
      explanation: "Riktig svar er at det for skriftlig gjelder mer formelle krav til førte referanser og referanseliste. Det betyr ikke at podkast er lettere: podkasten får til gjengjeld et dramaturgisk krav den skriftlige varianten ikke har. Distraktoren om helt lik vurdering ser rimelig ut, men motsies av veiledningen.",
    },
    {
      question: "Hvordan bør samlingsvalget begrunnes?",
      options: ["Med egenskaper ved samlingen som gjør at et faglig spørsmål lar seg stille til den", "Med gruppens interesse for temaet, siden motivasjon er avgjørende over et helt semester", "Med samlingens størrelse, siden en stor samling gir mer materiale å drøfte", "Med at samlingen ikke er behandlet i pensum, slik at besvarelsen blir mer selvstendig"],
      explanation: "Riktig svar er at begrunnelsen skal si noe om samlingen: at katalogen har opplysninger som kan telles eller sammenlignes, at tilblivelsen er kjent, eller at det finnes en skjevhet å undersøke. Distraktoren om størrelse er en nær felle — en stor samling er ikke i seg selv lettere å stille et spørsmål til, og kan tvert imot friste til beskrivelse.",
    },
    {
      question: "Hva menes med at innsamlingskonteksten er en kilde i seg selv?",
      options: ["At når, av hvem og med hvilket formål samlingen ble til, er historisk materiale som kan analyseres", "At katalogens opplysninger må kontrolleres mot arkivet før de kan brukes i besvarelsen", "At samlingens opprinnelsessted avgjør hvilket museum som har rett til å oppbevare den", "At gjenstandene bare kan forstås riktig hvis de sees i den sammenhengen de ble brukt i"],
      explanation: "Riktig svar er at tilblivelsen selv kan undersøkes: hvem som ga, hva som ble kassert, og hva det gjør med hvilke spørsmål materialet kan svare på. Distraktoren om bruksammenhengen er nær sann og faglig relevant, men den handler om gjenstandenes opprinnelige kontekst, ikke om samlingens tilblivelse som analyseobjekt.",
    },
    {
      question: "Hva bør være ferdig etter gruppens første arbeidsøkt?",
      options: ["Samlingen er valgt og ett spørsmål er skrevet ned i én setning, uten at noen har skrevet brødtekst", "Innledningen er skrevet, slik at gruppen har noe konkret å arbeide videre med", "Materialet er samlet inn og talt, slik at spørsmålet kan formuleres ut fra funnene", "Arbeidet er fordelt mellom medlemmene, slik at alle kan skrive sin del parallelt"],
      explanation: "Riktig svar er spørsmålet alene: en gruppe som begynner å skrive før spørsmålet står, ender med tre tekster om tre spørsmål. Distraktoren om å samle materiale først er en nær felle, for tellingen er nyttig — men uten et spørsmål vet dere ikke hva dere skal telle.",
    },
    {
      question: "Hvordan bør en gruppe håndtere uenighet om selve spørsmålet?",
      options: ["Prøve begge mot to kriterier: kan det belyses med materialet, og får det plass i 1 500 ord", "La begge stå og dele besvarelsen i to deler, slik at begge gruppens synspunkter blir representert", "Velge det spørsmålet som flest i gruppen støtter, og gå videre uten mer diskusjon", "Utsette valget til materialet er samlet inn, siden funnene som regel avgjør spørsmålet av seg selv"],
      explanation: "Riktig svar er å teste begge mot belysbarhet og omfang, og velge det smaleste hvis begge består. Distraktoren om å la begge stå, gir to halve svar — det er registerets fjerde feil i gruppeform. Uenighet om **svaret** er derimot en ressurs som kan skrives inn som to lesninger.",
    },
    {
      question: "Hvilket ledd skal ha hovedtyngden i gruppeoppgavens ordbudsjett?",
      options: ["Belysningen av spørsmålet med pensumets perspektiver og metoder, om lag 800 ord", "Beskrivelsen av samlingen, om lag 800 ord, siden leseren må kjenne materialet før drøftingen", "Det etiske leddet, om lag 700 ord, siden det er der den egentlige drøftingen faktisk foregår", "Formuleringen og begrunnelsen av spørsmålet, om lag 600 ord av de 1 500"],
      explanation: "Riktig svar er belysningen, altså trinn 3. Beskrivelsen av samlingen er nesten alltid det første som må kuttes når teksten er for lang — den er nødvendig, men den er ikke svaret. Det etiske eller historiske leddet hører til de siste 250 ordene.",
    },
    {
      question: "En besvarelse skriver at gjenstandene «bærer tydelig preg av mye bruk». Hva er problemet?",
      options: ["Påstanden forutsetter at gruppen har sett gjenstandene, og det kan katalogen sjelden belegge", "Påstanden er for vag til å telle som et funn i en faglig besvarelse på dette nivået", "Påstanden mangler pensumbelegg, siden ingen av de navngitte bidragene omtaler slitasje på gjenstander", "Påstanden hører til konserveringsfaget og ligger utenfor det gruppeoppgaven ber om"],
      explanation: "Riktig svar er registerets tolvte feil: å framstille en digital samling som om man har stått foran den. Dette er den eneste feilen som er formulert som en eksplisitt forventning i selve oppgaveteksten. Distraktoren om vaghet er en reell svakhet, men den treffer ikke det som faktisk er galt her.",
    },
    {
      question: "Hva sier H2024-veiledningen om museumsbesøk og eksplisitt digital-epistemologisk diskusjon?",
      options: ["At begge deler er flott, men ikke nødvendig for høy måloppnåelse", "At begge deler forventes, siden den digitale komponenten var ny av året", "At museumsbesøk er nødvendig, mens digital epistemologi er valgfritt", "At ingen av delene skal vektlegges, siden de ligger utenfor oppgavens ramme"],
      explanation: "Riktig svar er at begge er flott, men ikke nødvendig — det er et raushetspunkt gruppen har krav på å kjenne. Distraktoren om at det forventes, forveksler dette med den eksplisitte digital-setningen, som faktisk forventes. Å si at det ikke skal vektlegges, går for langt motsatt vei.",
    },
    {
      question: "Hvordan skal referansene håndteres i podkastformatet?",
      options: ["De oppgis i etterkant, som vedlegg eller kort opplesning etter slutten, i tillegg til tidsrammen", "De leses opp fortløpende underveis i innslaget, slik at lytteren hører hvor hver enkelt påstand kommer fra", "De utelates helt, siden lydformatet ikke tillater den formen for dokumentasjon", "De leveres som en egen skriftlig besvarelse ved siden av lydfilen, med samme ordgrense"],
      explanation: "Riktig svar er at referansene kommer etterpå og i tillegg til de ti minuttene. Distraktoren om fortløpende opplesning er nettopp det som ødelegger lyddramaturgien. At de kan utelates, er gal: det forventes at kurspensum eller annen relevant faglitteratur er brukt.",
    },
    {
      question: "Hva betyr det at «det er en gruppeoppgave, og det skal tas hensyn til i vurderingen»?",
      options: ["At sensor tar hensyn til arbeidsformens vilkår, ikke at kravene til innholdet er lavere", "At karakteren settes som et gjennomsnitt av det hvert enkelt gruppemedlem faktisk har bidratt med", "At en tekst som spriker mellom forfatterne, ikke skal trekke ned i vurderingen", "At gruppen kan levere mer enn 1 500 ord, siden flere forfattere trenger mer plass"],
      explanation: "Riktig svar er at hensynet gjelder vilkårene for arbeidsformen. Distraktoren om at spriking ikke trekker ned, strekker hensynet for langt — en tekst uten helhet er lett å se, og motgiften er at én person setter delene sammen med mandat til å stryke. Ordgrensen endres ikke av gruppestørrelsen.",
    },
  ],
  'exfac03-hark-7-7': [
    {
      question: "Hva uttrykker sensorveiledningene, ifølge forbeholdet i dette kapitlet?",
      options: ["Sensors forhåndsforventninger til besvarelsene, ikke feil som er observert hos kandidater", "En oppsummering av de vanligste feilene sensor har sett i besvarelsene den terminen", "Hvordan karakterene fordelte seg den terminen, med begrunnelse for hvor grensene ble satt", "Et sammendrag av hva pensumlitteraturen sier om de temaene oppgaven berører"],
      explanation: "Riktig svar er forhåndsforventninger: veiledningene er skrevet før besvarelsene er lest. Distraktoren om observerte feil er nettopp den lesningen forbeholdet advarer mot — arkivet har bare to rapporterte observasjoner, begge i H2024s første oppgave. Tall fra sensuren finnes ikke i materialet i det hele tatt.",
    },
    {
      question: "Hvilke to opplysninger i arkivet er rapporterte observasjoner og ikke forventninger?",
      options: ["At tidfestingen mellom fagene kan ha skapt usikkerhet, og at pensumet er for stort", "At kandidater ofte glemmer kontrastleddet, og at drøftingsleddet ofte blir for kort", "At referansene ofte er uryddige, og at problemstillingen ofte mangler helt", "At det digitale ofte blir pynt, og at Gadamers fordomsbegrep ofte leses negativt"],
      explanation: "Riktig svar er de to fra H2024s første oppgave: ubalansen i tidfestingen kan ha skapt litt usikkerhet, og kurset har et for stort pensum med høy vanskelighetsgrad for mange. De tre andre alternativene lister ekte feilkoder i registeret, men de er forventninger sensor ser etter, ikke noe veiledningen sier at kandidater faktisk gjorde.",
    },
    {
      question: "Hvilken feilkode er utledet og ikke sitert fra en veiledning?",
      options: ["Feil #13, om å prøve å dekke alt og dermed ikke drøfte noe", "Feil #7, om å lese frekvens som betydningsendring i en graf", "Feil #12, om å framstille en digital samling som om man har stått foran den", "Feil #2, om å la det innledende redegjørelsesleddet spise oppgaven"],
      explanation: "Riktig svar er #13, som er lest ut av at ikke alle elementene må være med for å stå, sammenholdt med at pensumet beskrives som for stort. De tre andre står direkte i veiledningene: frekvensfella og forventningen om digital kildeangivelse i H2024, og «planke»-instruksen i H2022.",
    },
    {
      question: "Hvilken feilkode gjelder bare en del av kandidatene?",
      options: ["Feil #14, som bare gjelder dem som velger podkast- eller videoformatet", "Feil #6, som bare gjelder dem som skriver om perioder før ca. 1800", "Feil #10, som bare gjelder dem som velger arkeologi som fag", "Feil #4, som bare gjelder de to av mappas tre oppgaver der kravet er eksplisitt"],
      explanation: "Riktig svar er #14: podkast er et tillatt alternativ, og feilen kan bare begås av dem som velger det. Distraktoren om #6 er en nær felle — feilen er tematisk avgrenset, men den kan begås av alle som berører perioden. Kravet om problemstilling er eksplisitt i to oppgaver, men avgrensning er godt håndverk uansett.",
    },
    {
      question: "Hva er varsellampen for feil #1, kontrastsvikt?",
      options: ["Navnet på den forrige perioden kan strykes uten at noe annet i teksten må endres", "Teksten inneholder færre enn tre av periodenettets seks kolonner", "Beskrivelsen av perioden er kortere enn implikasjonsleddet i samme besvarelse", "Perioden beskrives med verdiladede ord som «mørk» eller «opplyst»"],
      explanation: "Riktig svar er strykeprøven for perioder: hvis den forrige perioden ikke gjør arbeid i teksten, finnes ikke kontrasten. Distraktoren om verdiladede ord peker på en beslektet svakhet — en verdidom er ikke en kontrast — men den er ikke selve varsellampen for om kontrastleddet finnes.",
    },
    {
      question: "Hvordan retter man en tekst som er rammet av feil #2?",
      options: ["Ved å omfordele ordene, slik at drøftingsleddene får plassen redegjørelsen har tatt", "Ved å stryke redegjørelsesleddet helt, siden sensor forutsetter at stoffet er kjent", "Ved å legge til mer stoff i drøftingsleddet, slik at teksten samlet blir lengre", "Ved å flytte redegjørelsen til slutten, slik at drøftingen kommer først i teksten"],
      explanation: "Riktig svar er omfordeling: leddet skal skrives, det skal bare være kort. Distraktoren om å stryke det helt går for langt — planken er nødvendig for at resten skal kunne leses. Å legge til stoff sprenger ordbudsjettet, som er en ramme og ikke en anbefaling.",
    },
    {
      question: "Hva er strykeprøven?",
      options: ["Å fjerne begrepsnavnet fra setningen og se om setningen fortsatt betyr det samme", "Å stryke alle avsnitt som ikke svarer direkte på problemstillingen i første avsnitt", "Å fjerne det siste avsnittet og se om konklusjonen fortsatt følger av det som står", "Å stryke alle pensumreferanser og se om påstandene fortsatt lar seg begrunne"],
      explanation: "Riktig svar er prøven på etikettbruk, registerets tredje feil: står setningen uendret uten begrepet, gjorde begrepet ikke arbeid. De tre andre er brukbare revisjonsgrep, men de tester andre ting — relevans, konklusjonens grunnlag og pensumbruk.",
    },
    {
      question: "En besvarelse bruker 1 200 av 1 700 ord på å gjøre rede for Gadamers begreper og 500 på casen. Hvilken feil?",
      options: ["Feil #5, å reprodusere pensum i stedet for å løse et problem", "Feil #3, å bruke et fagbegrep som etikett uten å aktivere det", "Feil #13, å prøve å dekke alt og dermed ikke drøfte noe", "Feil #9, å tro at hermeneutikk bare er en metode og ikke mer"],
      explanation: "Riktig svar er reproduksjonsfella: gjengivelsen kan være helt presis og likevel ta plassen fra undersøkelsen. H2024-veiledningen sier at selvstendighet i problemløsning premieres framfor evne til å reprodusere pensum. Etikettbruk ville vært å nevne begrepene uten å bruke dem — her er problemet fordelingen, ikke bruken.",
    },
    {
      question: "Hva er den riktige omskrivingen av «jeg la mine egne fordommer til side»?",
      options: ["Å navngi forforståelsen og si hva i materialet som motsa den", "Å utelate setningen, siden fortolkerens ståsted ikke hører hjemme i en faglig tekst", "Å erstatte «fordommer» med «forutsetninger», som er en mer nøytral term", "Å presisere at fordommene ble lagt til side bare i den innledende lesningen"],
      explanation: "Riktig svar er å snu setningen til det den skal være: fordommen er en positiv veiviser, og arbeidet består i å vise møtet mellom din horisont og materialets. De tre andre alternativene beholder den negative lesningen — bare med andre ord, eller ved å fjerne den setningen som skulle gjort arbeidet.",
    },
    {
      question: "Hvorfor inneholder tre av de tolv utdragene i drillen ingen feil?",
      options: ["Fordi en drill der alt er galt, lærer leseren å se feil overalt og stryke det som var bra", "Fordi tre av de fjorten feilkodene ikke lar seg illustrere i et kort utdrag", "Fordi de tre utdragene er hentet fra sensorveiledningenes egne eksempler", "Fordi drillen skal speile fordelingen mellom sterke og svake besvarelser i arkivet"],
      explanation: "Riktig svar handler om hva drillen skal trene: gjenkjenning krever at det finnes noe å gjenkjenne feilen fra. Distraktoren om sensorveiledningenes eksempler er gal — arkivet inneholder ingen besvarelseseksempler i det hele tatt, og alle utdragene i boka er nyskrevne.",
    },
    {
      question: "Hva er varsellampen for feil #11, det digitale som pynt?",
      options: ["Konklusjonen endrer seg ikke hvis hele det digitale leddet strykes", "Det digitale leddet er kortere enn den hermeneutiske analysen i besvarelsen", "Frekvensgrafen er beskrevet i ord i stedet for å være gjengitt som figur", "Det digitale verktøyet er brukt uten at framgangsmåten i grensesnittet er forklart"],
      explanation: "Riktig svar er strykeprøven anvendt på et helt ledd. Distraktoren om lengde er gal: det digitale leddet skal være kortere enn analysen, det er sammenligningen som må finnes. Å forklare knappene i grensesnittet er ikke et krav — boka beskriver hva metodene gjør, ikke hvordan verktøyet ser ut.",
    },
    {
      question: "Hva sier raushetskontrakten om kravet til å dekke alle elementene i en veiledning?",
      options: ["Det er absolutt ingen krav om at alle elementene er med, for å stå", "Alle elementene må være med for å stå, men rekkefølgen er fri", "Minst halvparten av elementene må være dekket for at besvarelsen skal bestå", "Kravet gjelder bare de individuelle arbeidene, ikke gruppeoppgaven"],
      explanation: "Riktig svar står i H2024-veiledningen om den første oppgaven, og det er formulert like sterkt som det står her. De tre andre alternativene innfører terskler arkivet ikke har. Punktet er tatt inn i boka fordi et feilregister lest alene skaper nettopp den panikken veiledningen advarer mot.",
    },
    {
      question: "Hvor mange av de seks dokumenterte terminene har sensorveiledning?",
      options: ["4 av 6 terminer — de to utsatte settene er rene oppgavesett uten veiledning", "6 av 6 terminer, siden veiledningene gjengir oppgaveteksten for alle terminene", "5 av 6 terminer, siden bare den ene terminen i dagens form mangler veiledning", "2 av 6 terminer, siden bare de to nyeste terminene har bevart veiledningen"],
      explanation: "Riktig svar er fire av seks. Distraktoren med seks av seks blander to ting: oppgaveteksten foreligger for alle seks terminene fordi veiledningene gjengir den, men veiledning finnes bare for fire. Ingen påstand om hva sensor belønner, kan bygge på de to utsatte settene.",
    },
    {
      question: "En kandidat skriver at «de historiske fagene tok den teoretiske vendingen tidlig på 1900-tallet». Hva er feilen?",
      options: ["Feil #10 — historiefagets tidfesting brukes som om den gjaldt arkeologien og konserveringen også", "Feil #1 — det sies ikke hva som skilte den teoretiske vendingen fra det som kom før", "Feil #6 — humaniora omtales som et etablert felt i en periode der det ikke var det", "Feil #3 — «den teoretiske vendingen» brukes som etikett uten at innholdet forklares"],
      explanation: "Riktig svar er fagoverføringen: kulturarkeologien varer til og med 1960-tallet, og den post-prosessuelle opposisjonen kommer først i siste halvdel av århundret. Distraktoren om etikettbruk er en nær felle, siden uttrykket faktisk er upresist — men det som gjør setningen gal, er tidfestingen for flertallet av fag.",
    },
    {
      question: "Hva er den mest lønnsomme siste gjennomgangen før innlevering, ifølge kapitlet?",
      options: ["Tre varsellamper: strykeprøven på begreper, ordtelleren på vekting og vitensprøven på påstander", "En ny gjennomlesing av hele pensum for å kontrollere at alle de sentrale begrepene faktisk er nevnt", "En kontroll av referanselisten, siden formkravene er strengest ved skriftlig innlevering av mappa", "En systematisk gjennomgang av alle de fjorten feilkodene, én for én, gjennom hele den ferdige teksten"],
      explanation: "Riktig svar er de tre varsellampene, som tar mesteparten av registeret med tre operasjoner. Distraktoren om alle fjorten kodene er nettopp den arbeidsformen kapitlet advarer mot: fjorten samtidige mistanker gjør at du stryker det som var bra. Referansekontroll er nyttig, men veier mindre enn god tenkning.",
    },
    {
      question: "Hva betyr det at de fire siste feilene er «formfeil med faglig innhold»?",
      options: ["De handler ikke om hva du vet, men om hva teksten gjør med det — og er derfor billige å rette", "De gjelder bare formatet på selve innleveringen og påvirker derfor ikke den faglige vurderingen", "De kan bare oppdages av sensor, ikke av kandidaten selv under revisjonen", "De er de eneste feilene i registeret som er hjemlet i mer enn én av de fire sensorveiledningene"],
      explanation: "Riktig svar er at de rammer framstillingen og ikke kunnskapen, og at de derfor kan rettes uten å lese mer. Distraktoren om at de ikke påvirker den faglige vurderingen, er gal: å framstille en digital samling som om man har stått foran den, er en påstand teksten ikke kan belegge.",
    },
    {
      question: "Hva er vitensprøven?",
      options: ["Spørsmålet om teksten kan vite det den påstår, med de kildene den faktisk har hatt", "Spørsmålet om påstanden finnes i pensum, slik at den kan belegges med en referanse", "Spørsmålet om kandidaten har forstått begrepet hun bruker, testet ved å definere det", "Spørsmålet om påstanden er etterprøvbar for en leser som ikke kjenner materialet"],
      explanation: "Riktig svar er prøven som fanger feil #12 og halvparten av #7: har du grunnlag for påstanden, gitt hva du faktisk har hatt tilgang til? Distraktoren om pensumbelegg er en annen og svakere test — en påstand kan mangle pensumdekning og likevel være godt belagt i ditt eget materiale.",
    },
    {
      question: "Hvor mange koder har feilregisteret i denne boka?",
      options: ["Nøyaktig fjorten, og det innføres ingen femtende noe sted i boka", "Fjorten i dette kapitlet, med flere sjangerspesifikke koder i Del 7 for øvrig", "Tolv, siden to av de fjorten bare gjelder deler av kandidatene", "Så mange som sensorveiledningene i den enkelte terminen faktisk navngir av typiske feil"],
      explanation: "Riktig svar er fjorten, fast. Distraktoren om ekstra sjangerkoder er nettopp den utglidningen regelen skal hindre — hvert sjangerkapittel gjentar sine egne av de fjorten, men innfører ingen nye. Finner du noe som ikke passer, er det som regel en variant av etikettbruk eller av dekningsdriften.",
    },
  ],
  'exfac03-hark-7-8': [
    {
      question: "Hva er den viktigste forskjellen mellom C-versjonen og A-versjonen i dette kapitlet?",
      options: ["A-versjonen noterer forskyvningen mellom fag og felt og lander med et kriterium", "A-versjonen inneholder vesentlig mer fagstoff og flere pensumbidrag enn C-versjonen", "A-versjonen dekker alle tre fagene, mens C-versjonen bare behandler historiefaget", "A-versjonen er lengre, slik at alle leddene i bestillingen får bedre plass"],
      explanation: "Riktig svar er at forskjellen ligger i vurderingsevnen: forskyvningen skrevet som en avstand, og en landing med kriterium. Distraktoren om mer stoff peker motsatt vei — de to versjonene har nesten samme kunnskap, og A-versjonen er ikke lengre, bare fordelt annerledes. Å dekke alle tre fagene ville vært en feil.",
    },
    {
      question: "Hva gjør at et pensumbidrag er brukt aktivt og ikke bare nevnt?",
      options: ["Bidraget hevder noe, påstanden brukes til å avgjøre noe, og den knyttes tilbake til problemstillingen", "Bidraget er oppgitt med forfatter og verk, slik at leseren kan finne fram til det", "Bidraget nevnes flere steder i teksten, slik at det bærer flere av avsnittene", "Bidraget er hentet fra pensumlista og ikke fra litteratur utenfor pensum"],
      explanation: "Riktig svar er firetrinnsformen for aktiv pensumbruk. At studentene bruker pensum aktivt og viser forståelse, er ifølge H2024-veiledningen det som skiller gode fra mindre gode oppgaver. Distraktoren om litteratur utenfor pensum er dessuten misvisende: H2020 sier at bred litteraturbruk teller positivt, og at det ikke skal straffes å bare bruke pensum.",
    },
    {
      question: "Hvorfor er det et poeng i A-versjonen at forskyvningen for historiefaget er liten?",
      options: ["Fordi det først blir synlig når faget holdes opp mot arkeologien, som ligger et halvt århundre bak", "Fordi en liten forskyvning viser at historiefaget var mer vitenskapelig enn de andre fagene", "Fordi veiledningen krever at forskyvningen alltid oppgis i tiår og aldri i århundrer", "Fordi en liten forskyvning gjør at kandidaten slipper å behandle de to andre fagene"],
      explanation: "Riktig svar er at avstanden bare kan måles mot noe: nabofaget brukes som målestokk, uten å bli en egen redegjørelse. Distraktoren om at faget var mer vitenskapelig, gjør forskjellen til en rangering — og et fag som tok striden senere, er ikke et dårligere fag.",
    },
    {
      question: "Hva mangler i midtnivåbesvarelsens bruk av avgrensningen?",
      options: ["Den er nevnt i åpningen, men brukes aldri til noe senere i teksten", "Den utelater to av de tre fagene, og bryter dermed med bestillingen", "Den er formulert som et spørsmål i stedet for som en avgrensning", "Den mangler helt, slik at teksten aldri sier hva den ikke dekker"],
      explanation: "Riktig svar er at avgrensningen står der og blir glemt: den sier at arkeologi og konservering utelates, men bruker det aldri til å begrunne noe. Å velge ett fag er dessuten nettopp det bestillingen ber om, så det er ikke et brudd. Grepet som mangler, er én setning om hvorfor akkurat dette faget egner seg for spørsmålet.",
    },
    {
      question: "Hvordan gjør A-versjonen begrepet de-kontekstualisering konkret?",
      options: ["Ved å følge en kirkebokoppføring fra dokument til rad i en tabell, med hva som blir mulig og umulig å vite", "Ved å definere begrepet presist og vise til at veiledningen bruker det om alle tre fagene", "Ved å sammenligne historiefagets og arkeologiens forhold til sine egne materialer gjennom hele den perioden oppgaven dekker", "Ved å vise til at digitaliseringen løsriver samlingen ytterligere fra sine kontekster"],
      explanation: "Riktig svar er det konkrete materialet fulgt gjennom to trinn, med gevinst og kostnad skrevet ut. Distraktoren om en presis definisjon er nettopp det som gjør begrepet til en etikett — presisjon er ikke det samme som anvendelse. Digitaliseringen hører til en annen del av pensum og til gruppeoppgavens sjanger.",
    },
    {
      question: "Hva er kriteriet A-versjonen lander med?",
      options: ["Om de nye metodene fortrengte de gamle eller bare kom ved siden av dem", "Om faget ble mer vitenskapelig målt mot naturvitenskapens egne standarder", "Om historismens ideal fortsatt kan innfris etter at Gadamer har innvendt mot det", "Om kostnaden ved de-kontekstualiseringen kan tallfestes i antall tapte kilder"],
      explanation: "Riktig svar er skillet mellom å fortrenge og å omgå: der metodene fortrengte, er tapet ekte, der de kom i tillegg, er det en utvidelse. Et kriterium er nettopp det som gjør en avveining til noe annet enn et «det kommer an på». De tre andre alternativene er spørsmål teksten ikke stiller.",
    },
  ],
  'exfac03-hark-7-9': [
    {
      question: "Hva er funnet A-versjonen kommer fram til i sammenligningsleddet?",
      options: ["At ordet forsvant lenge før vurderingen av fenomenet skiftet, altså at de to daterer ulike ting", "At frekvenskurven bekrefter det nærlesningen allerede hadde vist om vurderingsskiftet", "At begge lesningene peker mot samme tiår, og at funnet derfor står særlig sterkt", "At nærlesningen er den mest pålitelige av de to, siden kurven er avhengig av korpuset"],
      explanation: "Riktig svar er avstanden mellom to daterte skifter: ordets fall etter 1900 og vurderingsskiftet mellom 1930- og 1980-årene. Distraktoren om bekreftelse er nettopp den svake bruken av det digitale — da hadde leddet kunnet strykes. Å rangere metodene svarer på et spørsmål oppgaven ikke stiller.",
    },
    {
      question: "Hvordan brukes fordomsbegrepet i A-versjonen?",
      options: ["Kandidaten navngir hva hun tok med seg inn, og hva i kilden som motsa det", "Kandidaten redegjør for begrepet og forklarer hvorfor Gadamer regner det som positivt", "Kandidaten legger sine forutsetninger til side før lesningen for å unngå å farge tolkningen", "Kandidaten viser til at fordommer er arvet gjennom tradisjonen og derfor må etterprøves"],
      explanation: "Riktig svar er den anvendte formen: forforståelsen navngis, og materialet får motsi den. Distraktoren om å redegjøre for begrepet er etikettbruk — presis, men uten arbeid. Å legge forutsetningene til side er registerets åttende feil, og det er nettopp det C-versjonen gjør.",
    },
    {
      question: "Hvorfor er A-versjonens skarpe landing likevel toppnivå?",
      options: ["Fordi standpunktet er begrunnet, og forbeholdet er plassert der materialet faktisk ikke rekker", "Fordi en konklusjon uten forbehold alltid vurderes høyere enn en avveiende landing", "Fordi oppgaveteksten ber uttrykkelig om at kandidaten skal konkludere entydig", "Fordi skarpe konklusjoner er lettere å etterprøve enn avveiende for en sensor"],
      explanation: "Riktig svar er at forbehold er et verktøy og ikke obligatorisk garnityr: standpunktet begrunnes, og forbeholdet reserveres til det ene stedet det gjør arbeid. Distraktoren om at skarpe konklusjoner alltid rangeres høyest, går for langt — avveiende landinger er fullt mulige, de må bare begrunne selve avveiningen.",
    },
    {
      question: "Hva er problemet med C-versjonens avsnitt om Gadamers begreper?",
      options: ["Alle begrepene er definert korrekt, men ingen av dem gjør arbeid på materialet", "Begrepene er definert feil, slik at analysen bygger på en misforståelse av hermeneutikken", "Det er brukt for få begreper til at analysen kan regnes som hermeneutisk", "Begrepene er hentet fra feil del av pensum og hører hjemme i en annen oppgavesjanger"],
      explanation: "Riktig svar er etikettbruk: definisjonene er riktige, og avsnittet betyr det samme om du stryker begrepsnavnene. I tillegg gjør avsnittet feil #8 ved å ville legge fordommene til side. Å bruke få begreper er ikke i seg selv en feil — det er anvendelsen som teller.",
    },
    {
      question: "Hvilke forklaringer på et frekvensfall setter A-versjonen opp?",
      options: ["At institusjonen forsvant, at et annet ord overtok, eller at mindre av teksttypen er digitalisert", "At betydningen endret seg, at forfatterne ble færre, eller at emnet ble mindre viktig", "At korpuset er for lite, at perioden er for kort, eller at søkeordet er for vanlig", "At kilden er en beretning og ikke en levning, og at tendensen i den derfor slår ut i frekvenstallene"],
      explanation: "Riktig svar dekker tre ulike typer forklaring: saklig, språklig og korpusmessig. Distraktoren som begynner med betydningsendring, legger inn nettopp den slutningen grafen ikke gir grunnlag for. Kildekritiske begreper som levning og beretning gir ikke mening som forklaringer på en frekvenskurve.",
    },
    {
      question: "Hva gjør strømningsleddet i A-versjonen?",
      options: ["Knytter to bestemte lesninger til to bestemte faglige bevegelser, og begrunner koblingen", "Beskriver samfunnsutviklingen på 1900-tallet som bakgrunn for det fenomenet som undersøkes", "Plasserer kandidatens eget ståsted i en tradisjon, som en del av virkningshistorien", "Sammenligner de to lesningene og sier hva hver av dem er blind for"],
      explanation: "Riktig svar er koblingen mellom en bestemt tolkning og en bestemt strømning, med en begrunnelse for hvorfor koblingen er rimelig — veiledningen kaller dette det siste momentet som skal telle. Distraktoren om samfunnsutviklingen er en generell tidsbeskrivelse, som er den svake varianten. Blindsonene hører til sammenligningsleddet.",
    },
  ],
};

export default quizData_exfac03hark;
